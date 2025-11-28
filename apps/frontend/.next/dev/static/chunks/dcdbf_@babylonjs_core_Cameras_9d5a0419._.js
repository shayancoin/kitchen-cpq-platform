(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/camera.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Camera",
    ()=>Camera
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/decorators.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$smartArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/smartArray.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/tools.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/observable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/node.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$devTools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/devTools.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$viewport$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.viewport.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$frustum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.frustum.js [app-client] (ecmascript)");
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
;
;
;
;
class Camera extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node"] {
    /**
     * Define the current local position of the camera in the scene
     */ get position() {
        return this._position;
    }
    set position(newPosition) {
        this._position = newPosition;
    }
    /**
     * The vector the camera should consider as up.
     * (default is Vector3(0, 1, 0) aka Vector3.Up())
     */ set upVector(vec) {
        this._upVector = vec;
    }
    get upVector() {
        return this._upVector;
    }
    /**
     * The screen area in scene units squared
     */ get screenArea() {
        let x = 0;
        let y = 0;
        if (this.mode === Camera.PERSPECTIVE_CAMERA) {
            if (this.fovMode === Camera.FOVMODE_VERTICAL_FIXED) {
                y = this.minZ * 2 * Math.tan(this.fov / 2);
                x = this.getEngine().getAspectRatio(this) * y;
            } else {
                x = this.minZ * 2 * Math.tan(this.fov / 2);
                y = x / this.getEngine().getAspectRatio(this);
            }
        } else {
            const halfWidth = this.getEngine().getRenderWidth() / 2.0;
            const halfHeight = this.getEngine().getRenderHeight() / 2.0;
            x = (this.orthoRight ?? halfWidth) - (this.orthoLeft ?? -halfWidth);
            y = (this.orthoTop ?? halfHeight) - (this.orthoBottom ?? -halfHeight);
        }
        return x * y;
    }
    /**
     * Define the current limit on the left side for an orthographic camera
     * In scene unit
     */ set orthoLeft(value) {
        this._orthoLeft = value;
        for (const rigCamera of this._rigCameras){
            rigCamera.orthoLeft = value;
        }
    }
    get orthoLeft() {
        return this._orthoLeft;
    }
    /**
     * Define the current limit on the right side for an orthographic camera
     * In scene unit
     */ set orthoRight(value) {
        this._orthoRight = value;
        for (const rigCamera of this._rigCameras){
            rigCamera.orthoRight = value;
        }
    }
    get orthoRight() {
        return this._orthoRight;
    }
    /**
     * Define the current limit on the bottom side for an orthographic camera
     * In scene unit
     */ set orthoBottom(value) {
        this._orthoBottom = value;
        for (const rigCamera of this._rigCameras){
            rigCamera.orthoBottom = value;
        }
    }
    get orthoBottom() {
        return this._orthoBottom;
    }
    /**
     * Define the current limit on the top side for an orthographic camera
     * In scene unit
     */ set orthoTop(value) {
        this._orthoTop = value;
        for (const rigCamera of this._rigCameras){
            rigCamera.orthoTop = value;
        }
    }
    get orthoTop() {
        return this._orthoTop;
    }
    /**
     * Sets the camera's field of view in radians based on the focal length and sensor size.
     * @param value the focal length of the camera in mm.
     * @param sensorSize the sensor width size of the camera in mm. (default is 36mm, which is a full frame sensor)
     */ setFocalLength(value, sensorSize = 36) {
        this.fov = 2 * Math.atan(sensorSize / (2 * value));
    }
    /**
     * Define the mode of the camera (Camera.PERSPECTIVE_CAMERA or Camera.ORTHOGRAPHIC_CAMERA)
     */ set mode(mode) {
        this._mode = mode;
        // Pass the mode down to the rig cameras
        for (const rigCamera of this._rigCameras){
            rigCamera.mode = mode;
        }
    }
    get mode() {
        return this._mode;
    }
    /**
     * Gets a flag indicating that the camera has moved in some way since the last call to Camera.update()
     */ get hasMoved() {
        return this._hasMoved;
    }
    /**
     * Instantiates a new camera object.
     * This should not be used directly but through the inherited cameras: ArcRotate, Free...
     * @see https://doc.babylonjs.com/features/featuresDeepDive/cameras
     * @param name Defines the name of the camera in the scene
     * @param position Defines the position of the camera
     * @param scene Defines the scene the camera belongs too
     * @param setActiveOnSceneIfNoneActive Defines if the camera should be set as active after creation if no other camera have been defined in the scene
     */ constructor(name, position, scene, setActiveOnSceneIfNoneActive = true){
        super(name, scene, false);
        /** @internal */ this._position = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        this._upVector = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Up();
        /**
         * Object containing oblique projection values (only used with ORTHOGRAPHIC_CAMERA)
         */ this.oblique = null;
        this._orthoLeft = null;
        this._orthoRight = null;
        this._orthoBottom = null;
        this._orthoTop = null;
        /**
         * Field Of View is set in Radians. (default is 0.8)
         */ this.fov = 0.8;
        /**
         * Projection plane tilt around the X axis (horizontal), set in Radians. (default is 0)
         * Can be used to make vertical lines in world space actually vertical on the screen.
         * See https://forum.babylonjs.com/t/add-vertical-shift-to-3ds-max-exporter-babylon-cameras/17480
         */ this.projectionPlaneTilt = 0;
        /**
         * Define the minimum distance the camera can see from.
         * This is important to note that the depth buffer are not infinite and the closer it starts
         * the more your scene might encounter depth fighting issue.
         */ this.minZ = 1;
        /**
         * Define the maximum distance the camera can see to.  (default is 10000)
         * This is important to note that the depth buffer are not infinite and the further it end
         * the more your scene might encounter depth fighting issue.
         */ this.maxZ = 10000.0;
        /**
         * Define the default inertia of the camera.
         * This helps giving a smooth feeling to the camera movement.
         */ this.inertia = 0.9;
        this._mode = Camera.PERSPECTIVE_CAMERA;
        /**
         * Define whether the camera is intermediate.
         * This is useful to not present the output directly to the screen in case of rig without post process for instance
         */ this.isIntermediate = false;
        /**
         * Define the viewport of the camera.
         * This correspond to the portion of the screen the camera will render to in normalized 0 to 1 unit.
         */ this.viewport = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$viewport$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Viewport"](0, 0, 1.0, 1.0);
        /**
         * Restricts the camera to viewing objects with the same layerMask.
         * A camera with a layerMask of 1 will render mesh.layerMask & camera.layerMask!== 0
         */ this.layerMask = 0x0fffffff;
        /**
         * fovMode sets the camera frustum bounds to the viewport bounds. (default is FOVMODE_VERTICAL_FIXED)
         */ this.fovMode = Camera.FOVMODE_VERTICAL_FIXED;
        /**
         * Rig mode of the camera.
         * This is useful to create the camera with two "eyes" instead of one to create VR or stereoscopic scenes.
         * This is normally controlled byt the camera themselves as internal use.
         */ this.cameraRigMode = Camera.RIG_MODE_NONE;
        /**
         * Ignores camera maxZ when computing the projection matrix (ie. use 0 instead of maxZ), meaning objects won't be culled by the far plane
         */ this.ignoreCameraMaxZ = false;
        /**
         * Defines the list of custom render target which are rendered to and then used as the input to this camera's render. Eg. display another camera view on a TV in the main scene
         * This is pretty helpful if you wish to make a camera render to a texture you could reuse somewhere
         * else in the scene. (Eg. security camera)
         *
         * To change the final output target of the camera, camera.outputRenderTarget should be used instead (eg. webXR renders to a render target corresponding to an HMD)
         */ this.customRenderTargets = [];
        /**
         * When set, the camera will render to this render target instead of the default canvas
         *
         * If the desire is to use the output of a camera as a texture in the scene consider using camera.customRenderTargets instead
         */ this.outputRenderTarget = null;
        /**
         * Observable triggered when the camera view matrix has changed.
         * Beware of reentrance! Some methods like Camera.getViewMatrix and Camera.getWorldMatrix can trigger the onViewMatrixChangedObservable
         * observable, so using them inside an observer will require additional logic to avoid a stack overflow error.
         */ this.onViewMatrixChangedObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * Observable triggered when the camera Projection matrix has changed.
         */ this.onProjectionMatrixChangedObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * Observable triggered when the inputs have been processed.
         */ this.onAfterCheckInputsObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * Observable triggered when reset has been called and applied to the camera.
         */ this.onRestoreStateObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * Is this camera a part of a rig system?
         */ this.isRigCamera = false;
        this._hasMoved = false;
        /** @internal */ this._rigCameras = new Array();
        /** @internal */ this._skipRendering = false;
        /** @internal */ this._projectionMatrix = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"]();
        /** @internal */ this._postProcesses = new Array();
        /** @internal */ this._activeMeshes = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$smartArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SmartArray"](256);
        this._globalPosition = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        /** @internal */ this._computedViewMatrix = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].Identity();
        this._doNotComputeProjectionMatrix = false;
        this._transformMatrix = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].Zero();
        this._refreshFrustumPlanes = true;
        this._absoluteRotation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"].Identity();
        /** @internal */ this._isCamera = true;
        /** @internal */ this._isLeftCamera = false;
        /** @internal */ this._isRightCamera = false;
        this.getScene().addCamera(this);
        if (setActiveOnSceneIfNoneActive && !this.getScene().activeCamera) {
            this.getScene().activeCamera = this;
        }
        this.position = position;
        this.renderPassId = this.getScene().getEngine().createRenderPassId(`Camera ${name}`);
    }
    /**
     * Store current camera state (fov, position, etc..)
     * @returns the camera
     */ storeState() {
        this._stateStored = true;
        this._storedFov = this.fov;
        return this;
    }
    /**
     * Returns true if a state has been stored by calling storeState method.
     * @returns true if state has been stored.
     */ hasStateStored() {
        return !!this._stateStored;
    }
    /**
     * Restores the camera state values if it has been stored. You must call storeState() first
     * @returns true if restored and false otherwise
     */ _restoreStateValues() {
        if (!this._stateStored) {
            return false;
        }
        this.fov = this._storedFov;
        return true;
    }
    /**
     * Restored camera state. You must call storeState() first.
     * @returns true if restored and false otherwise
     */ restoreState() {
        if (this._restoreStateValues()) {
            this.onRestoreStateObservable.notifyObservers(this);
            return true;
        }
        return false;
    }
    /**
     * Gets the class name of the camera.
     * @returns the class name
     */ getClassName() {
        return "Camera";
    }
    /**
     * Gets a string representation of the camera useful for debug purpose.
     * @param fullDetails Defines that a more verbose level of logging is required
     * @returns the string representation
     */ toString(fullDetails) {
        let ret = "Name: " + this.name;
        ret += ", type: " + this.getClassName();
        if (this.animations) {
            for(let i = 0; i < this.animations.length; i++){
                ret += ", animation[0]: " + this.animations[i].toString(fullDetails);
            }
        }
        return ret;
    }
    /**
     * Automatically tilts the projection plane, using `projectionPlaneTilt`, to correct the perspective effect on vertical lines.
     */ applyVerticalCorrection() {
        const rot = this.absoluteRotation.toEulerAngles();
        this.projectionPlaneTilt = this._scene.useRightHandedSystem ? -rot.x : rot.x;
    }
    /**
     * Gets the current world space position of the camera.
     */ get globalPosition() {
        return this._globalPosition;
    }
    /**
     * Gets the list of active meshes this frame (meshes no culled or excluded by lod s in the frame)
     * @returns the active meshe list
     */ getActiveMeshes() {
        return this._activeMeshes;
    }
    /**
     * Check whether a mesh is part of the current active mesh list of the camera
     * @param mesh Defines the mesh to check
     * @returns true if active, false otherwise
     */ isActiveMesh(mesh) {
        return this._activeMeshes.indexOf(mesh) !== -1;
    }
    /**
     * Is this camera ready to be used/rendered
     * @param completeCheck defines if a complete check (including post processes) has to be done (false by default)
     * @returns true if the camera is ready
     */ isReady(completeCheck = false) {
        if (completeCheck) {
            for (const pp of this._postProcesses){
                if (pp && !pp.isReady()) {
                    return false;
                }
            }
        }
        return super.isReady(completeCheck);
    }
    /** @internal */ _initCache() {
        super._initCache();
        this._cache.position = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
        this._cache.upVector = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
        this._cache.mode = undefined;
        this._cache.minZ = undefined;
        this._cache.maxZ = undefined;
        this._cache.fov = undefined;
        this._cache.fovMode = undefined;
        this._cache.aspectRatio = undefined;
        this._cache.orthoLeft = undefined;
        this._cache.orthoRight = undefined;
        this._cache.orthoBottom = undefined;
        this._cache.orthoTop = undefined;
        this._cache.obliqueAngle = undefined;
        this._cache.obliqueLength = undefined;
        this._cache.obliqueOffset = undefined;
        this._cache.renderWidth = undefined;
        this._cache.renderHeight = undefined;
    }
    /**
     * @internal
     */ _updateCache(ignoreParentClass) {
        if (!ignoreParentClass) {
            super._updateCache();
        }
        this._cache.position.copyFrom(this.position);
        this._cache.upVector.copyFrom(this.upVector);
    }
    /** @internal */ _isSynchronized() {
        return this._isSynchronizedViewMatrix() && this._isSynchronizedProjectionMatrix();
    }
    /** @internal */ _isSynchronizedViewMatrix() {
        if (!super._isSynchronized()) {
            return false;
        }
        return this._cache.position.equals(this.position) && this._cache.upVector.equals(this.upVector) && this.isSynchronizedWithParent();
    }
    /** @internal */ _isSynchronizedProjectionMatrix() {
        const maxZ = this.ignoreCameraMaxZ ? 0 : this.maxZ;
        let isSynchronized = this._cache.mode === this.mode && this._cache.minZ === this.minZ && this._cache.maxZ === maxZ;
        if (!isSynchronized) {
            return false;
        }
        const engine = this.getEngine();
        if (this.mode === Camera.PERSPECTIVE_CAMERA) {
            isSynchronized = this._cache.fov === this.fov && this._cache.fovMode === this.fovMode && this._cache.aspectRatio === engine.getAspectRatio(this) && this._cache.projectionPlaneTilt === this.projectionPlaneTilt;
        } else {
            isSynchronized = this._cache.orthoLeft === this.orthoLeft && this._cache.orthoRight === this.orthoRight && this._cache.orthoBottom === this.orthoBottom && this._cache.orthoTop === this.orthoTop && this._cache.renderWidth === engine.getRenderWidth() && this._cache.renderHeight === engine.getRenderHeight();
            if (this.oblique) {
                isSynchronized = isSynchronized && this._cache.obliqueAngle === this.oblique.angle && this._cache.obliqueLength === this.oblique.length && this._cache.obliqueOffset === this.oblique.offset;
            }
        }
        return isSynchronized;
    }
    /**
     * Attach the input controls to a specific dom element to get the input from.
     * This function is here because typescript removes the typing of the last function.
     * @param _ignored defines an ignored parameter kept for backward compatibility.
     * @param _noPreventDefault Defines whether event caught by the controls should call preventdefault() (https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)
     */ attachControl(_ignored, _noPreventDefault) {}
    /**
     * Detach the current controls from the specified dom element.
     * This function is here because typescript removes the typing of the last function.
     * @param _ignored defines an ignored parameter kept for backward compatibility.
     */ detachControl(_ignored) {}
    /**
     * Update the camera state according to the different inputs gathered during the frame.
     */ update() {
        this._hasMoved = false;
        this._checkInputs();
        if (this.cameraRigMode !== Camera.RIG_MODE_NONE) {
            this._updateRigCameras();
        }
        // Attempt to update the camera's view and projection matrices.
        // This call is being made because these matrices are no longer being updated
        // as a part of the picking ray process (in addition to scene.render).
        this.getViewMatrix();
        this.getProjectionMatrix();
    }
    /** @internal */ _checkInputs() {
        this.onAfterCheckInputsObservable.notifyObservers(this);
    }
    /** @internal */ get rigCameras() {
        return this._rigCameras;
    }
    /**
     * Gets the post process used by the rig cameras
     */ get rigPostProcess() {
        return this._rigPostProcess;
    }
    /**
     * Internal, gets the first post process.
     * @returns the first post process to be run on this camera.
     */ _getFirstPostProcess() {
        for(let ppIndex = 0; ppIndex < this._postProcesses.length; ppIndex++){
            if (this._postProcesses[ppIndex] !== null) {
                return this._postProcesses[ppIndex];
            }
        }
        return null;
    }
    _cascadePostProcessesToRigCams() {
        // invalidate framebuffer
        const firstPostProcess = this._getFirstPostProcess();
        if (firstPostProcess) {
            firstPostProcess.markTextureDirty();
        }
        // glue the rigPostProcess to the end of the user postprocesses & assign to each sub-camera
        for(let i = 0, len = this._rigCameras.length; i < len; i++){
            const cam = this._rigCameras[i];
            const rigPostProcess = cam._rigPostProcess;
            // for VR rig, there does not have to be a post process
            if (rigPostProcess) {
                const isPass = rigPostProcess.getEffectName() === "pass";
                if (isPass) {
                    // any rig which has a PassPostProcess for rig[0], cannot be isIntermediate when there are also user postProcesses
                    cam.isIntermediate = this._postProcesses.length === 0;
                }
                cam._postProcesses = this._postProcesses.slice(0).concat(rigPostProcess);
                rigPostProcess.markTextureDirty();
            } else {
                cam._postProcesses = this._postProcesses.slice(0);
            }
        }
    }
    /**
     * Attach a post process to the camera.
     * @see https://doc.babylonjs.com/features/featuresDeepDive/postProcesses/usePostProcesses#attach-postprocess
     * @param postProcess The post process to attach to the camera
     * @param insertAt The position of the post process in case several of them are in use in the scene
     * @returns the position the post process has been inserted at
     */ attachPostProcess(postProcess, insertAt = null) {
        if (!postProcess.isReusable() && this._postProcesses.indexOf(postProcess) > -1) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Error("You're trying to reuse a post process not defined as reusable.");
            return 0;
        }
        if (insertAt == null || insertAt < 0) {
            this._postProcesses.push(postProcess);
        } else if (this._postProcesses[insertAt] === null) {
            this._postProcesses[insertAt] = postProcess;
        } else {
            this._postProcesses.splice(insertAt, 0, postProcess);
        }
        this._cascadePostProcessesToRigCams(); // also ensures framebuffer invalidated
        // Update prePass
        if (this._scene.prePassRenderer) {
            this._scene.prePassRenderer.markAsDirty();
        }
        return this._postProcesses.indexOf(postProcess);
    }
    /**
     * Detach a post process to the camera.
     * @see https://doc.babylonjs.com/features/featuresDeepDive/postProcesses/usePostProcesses#attach-postprocess
     * @param postProcess The post process to detach from the camera
     */ detachPostProcess(postProcess) {
        const idx = this._postProcesses.indexOf(postProcess);
        if (idx !== -1) {
            this._postProcesses[idx] = null;
        }
        // Update prePass
        if (this._scene.prePassRenderer) {
            this._scene.prePassRenderer.markAsDirty();
        }
        this._cascadePostProcessesToRigCams(); // also ensures framebuffer invalidated
    }
    /**
     * Gets the current world matrix of the camera
     * @returns the world matrix
     */ getWorldMatrix() {
        if (this._isSynchronizedViewMatrix()) {
            return this._worldMatrix;
        }
        // Getting the view matrix will also compute the world matrix.
        this.getViewMatrix();
        return this._worldMatrix;
    }
    /** @internal */ _getViewMatrix() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].Identity();
    }
    /**
     * Gets the current view matrix of the camera.
     * @param force forces the camera to recompute the matrix without looking at the cached state
     * @returns the view matrix
     */ getViewMatrix(force) {
        if (!force && this._isSynchronizedViewMatrix()) {
            return this._computedViewMatrix;
        }
        this._hasMoved = true;
        this.updateCache();
        this._computedViewMatrix = this._getViewMatrix();
        this._currentRenderId = this.getScene().getRenderId();
        this._childUpdateId++;
        this._refreshFrustumPlanes = true;
        if (this._cameraRigParams && this._cameraRigParams.vrPreViewMatrix) {
            this._computedViewMatrix.multiplyToRef(this._cameraRigParams.vrPreViewMatrix, this._computedViewMatrix);
        }
        // Notify parent camera if rig camera is changed
        if (this.parent && this.parent.onViewMatrixChangedObservable) {
            this.parent.onViewMatrixChangedObservable.notifyObservers(this.parent);
        }
        this.onViewMatrixChangedObservable.notifyObservers(this);
        this._computedViewMatrix.invertToRef(this._worldMatrix);
        this._worldMatrix.getTranslationToRef(this._globalPosition);
        return this._computedViewMatrix;
    }
    /**
     * Freeze the projection matrix.
     * It will prevent the cache check of the camera projection compute and can speed up perf
     * if no parameter of the camera are meant to change
     * @param projection Defines manually a projection if necessary
     */ freezeProjectionMatrix(projection) {
        this._doNotComputeProjectionMatrix = true;
        if (projection !== undefined) {
            this._projectionMatrix = projection;
        }
    }
    /**
     * Unfreeze the projection matrix if it has previously been freezed by freezeProjectionMatrix.
     */ unfreezeProjectionMatrix() {
        this._doNotComputeProjectionMatrix = false;
    }
    /**
     * Gets the current projection matrix of the camera.
     * @param force forces the camera to recompute the matrix without looking at the cached state
     * @returns the projection matrix
     */ getProjectionMatrix(force) {
        if (this._doNotComputeProjectionMatrix || !force && this._isSynchronizedProjectionMatrix()) {
            return this._projectionMatrix;
        }
        const maxZ = this.ignoreCameraMaxZ ? 0 : this.maxZ;
        // Cache
        this._cache.mode = this.mode;
        this._cache.minZ = this.minZ;
        this._cache.maxZ = maxZ;
        // Matrix
        this._refreshFrustumPlanes = true;
        const engine = this.getEngine();
        const scene = this.getScene();
        const reverseDepth = engine.useReverseDepthBuffer;
        if (this.mode === Camera.PERSPECTIVE_CAMERA) {
            this._cache.fov = this.fov;
            this._cache.fovMode = this.fovMode;
            this._cache.aspectRatio = engine.getAspectRatio(this);
            this._cache.projectionPlaneTilt = this.projectionPlaneTilt;
            if (this.minZ <= 0) {
                this.minZ = 0.1;
            }
            let getProjectionMatrix;
            if (scene.useRightHandedSystem) {
                getProjectionMatrix = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].PerspectiveFovRHToRef;
            } else {
                getProjectionMatrix = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].PerspectiveFovLHToRef;
            }
            getProjectionMatrix(this.fov, engine.getAspectRatio(this), reverseDepth ? maxZ : this.minZ, reverseDepth ? this.minZ : maxZ, this._projectionMatrix, this.fovMode === Camera.FOVMODE_VERTICAL_FIXED, engine.isNDCHalfZRange, this.projectionPlaneTilt, reverseDepth);
        } else {
            const halfWidth = engine.getRenderWidth() / 2.0;
            const halfHeight = engine.getRenderHeight() / 2.0;
            if (scene.useRightHandedSystem) {
                if (this.oblique) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].ObliqueOffCenterRHToRef(this.orthoLeft ?? -halfWidth, this.orthoRight ?? halfWidth, this.orthoBottom ?? -halfHeight, this.orthoTop ?? halfHeight, reverseDepth ? maxZ : this.minZ, reverseDepth ? this.minZ : maxZ, this.oblique.length, this.oblique.angle, this._computeObliqueDistance(this.oblique.offset), this._projectionMatrix, engine.isNDCHalfZRange);
                } else {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].OrthoOffCenterRHToRef(this.orthoLeft ?? -halfWidth, this.orthoRight ?? halfWidth, this.orthoBottom ?? -halfHeight, this.orthoTop ?? halfHeight, reverseDepth ? maxZ : this.minZ, reverseDepth ? this.minZ : maxZ, this._projectionMatrix, engine.isNDCHalfZRange);
                }
            } else {
                if (this.oblique) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].ObliqueOffCenterLHToRef(this.orthoLeft ?? -halfWidth, this.orthoRight ?? halfWidth, this.orthoBottom ?? -halfHeight, this.orthoTop ?? halfHeight, reverseDepth ? maxZ : this.minZ, reverseDepth ? this.minZ : maxZ, this.oblique.length, this.oblique.angle, this._computeObliqueDistance(this.oblique.offset), this._projectionMatrix, engine.isNDCHalfZRange);
                } else {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].OrthoOffCenterLHToRef(this.orthoLeft ?? -halfWidth, this.orthoRight ?? halfWidth, this.orthoBottom ?? -halfHeight, this.orthoTop ?? halfHeight, reverseDepth ? maxZ : this.minZ, reverseDepth ? this.minZ : maxZ, this._projectionMatrix, engine.isNDCHalfZRange);
                }
            }
            this._cache.orthoLeft = this.orthoLeft;
            this._cache.orthoRight = this.orthoRight;
            this._cache.orthoBottom = this.orthoBottom;
            this._cache.orthoTop = this.orthoTop;
            this._cache.obliqueAngle = this.oblique?.angle;
            this._cache.obliqueLength = this.oblique?.length;
            this._cache.obliqueOffset = this.oblique?.offset;
            this._cache.renderWidth = engine.getRenderWidth();
            this._cache.renderHeight = engine.getRenderHeight();
        }
        this.onProjectionMatrixChangedObservable.notifyObservers(this);
        return this._projectionMatrix;
    }
    /**
     * Gets the transformation matrix (ie. the multiplication of view by projection matrices)
     * @returns a Matrix
     */ getTransformationMatrix() {
        this._computedViewMatrix.multiplyToRef(this._projectionMatrix, this._transformMatrix);
        return this._transformMatrix;
    }
    _computeObliqueDistance(offset) {
        const arcRotateCamera = this;
        const targetCamera = this;
        return (arcRotateCamera.radius || (targetCamera.target ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Distance(this.position, targetCamera.target) : this.position.length())) + offset;
    }
    /** @internal */ _updateFrustumPlanes() {
        if (!this._refreshFrustumPlanes) {
            return;
        }
        this.getTransformationMatrix();
        if (!this._frustumPlanes) {
            this._frustumPlanes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$frustum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Frustum"].GetPlanes(this._transformMatrix);
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$frustum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Frustum"].GetPlanesToRef(this._transformMatrix, this._frustumPlanes);
        }
        this._refreshFrustumPlanes = false;
    }
    /**
     * Checks if a cullable object (mesh...) is in the camera frustum
     * This checks the bounding box center. See isCompletelyInFrustum for a full bounding check
     * @param target The object to check
     * @param checkRigCameras If the rig cameras should be checked (eg. with VR camera both eyes should be checked) (Default: false)
     * @returns true if the object is in frustum otherwise false
     */ isInFrustum(target, checkRigCameras = false) {
        this._updateFrustumPlanes();
        if (checkRigCameras && this.rigCameras.length > 0) {
            let result = false;
            for (const cam of this.rigCameras){
                cam._updateFrustumPlanes();
                result = result || target.isInFrustum(cam._frustumPlanes);
            }
            return result;
        } else {
            return target.isInFrustum(this._frustumPlanes);
        }
    }
    /**
     * Checks if a cullable object (mesh...) is in the camera frustum
     * Unlike isInFrustum this checks the full bounding box
     * @param target The object to check
     * @returns true if the object is in frustum otherwise false
     */ isCompletelyInFrustum(target) {
        this._updateFrustumPlanes();
        return target.isCompletelyInFrustum(this._frustumPlanes);
    }
    // eslint-disable-next-line jsdoc/require-returns-check
    /**
     * Gets a ray in the forward direction from the camera.
     * @param length Defines the length of the ray to create
     * @param transform Defines the transform to apply to the ray, by default the world matrix is used to create a world space ray
     * @param origin Defines the start point of the ray which defaults to the camera position
     * @returns the forward ray
     */ // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getForwardRay(length = 100, transform, origin) {
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$devTools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_WarnImport"])("Ray");
    }
    // eslint-disable-next-line jsdoc/require-returns-check
    /**
     * Gets a ray in the forward direction from the camera.
     * @param refRay the ray to (re)use when setting the values
     * @param length Defines the length of the ray to create
     * @param transform Defines the transform to apply to the ray, by default the world matrix is used to create a world space ray
     * @param origin Defines the start point of the ray which defaults to the camera position
     * @returns the forward ray
     */ // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getForwardRayToRef(refRay, length = 100, transform, origin) {
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$devTools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_WarnImport"])("Ray");
    }
    /**
     * Releases resources associated with this node.
     * @param doNotRecurse Set to true to not recurse into each children (recurse into each children by default)
     * @param disposeMaterialAndTextures Set to true to also dispose referenced materials and textures (false by default)
     */ dispose(doNotRecurse, disposeMaterialAndTextures = false) {
        // Observables
        this.onViewMatrixChangedObservable.clear();
        this.onProjectionMatrixChangedObservable.clear();
        this.onAfterCheckInputsObservable.clear();
        this.onRestoreStateObservable.clear();
        // Inputs
        if (this.inputs) {
            this.inputs.clear();
        }
        // Animations
        this.getScene().stopAnimation(this);
        // Remove from scene
        this.getScene().removeCamera(this);
        while(this._rigCameras.length > 0){
            const camera = this._rigCameras.pop();
            if (camera) {
                camera.dispose();
            }
        }
        if (this._parentContainer) {
            const index = this._parentContainer.cameras.indexOf(this);
            if (index > -1) {
                this._parentContainer.cameras.splice(index, 1);
            }
            this._parentContainer = null;
        }
        // Postprocesses
        if (this._rigPostProcess) {
            this._rigPostProcess.dispose(this);
            this._rigPostProcess = null;
            this._postProcesses.length = 0;
        } else if (this.cameraRigMode !== Camera.RIG_MODE_NONE) {
            this._rigPostProcess = null;
            this._postProcesses.length = 0;
        } else {
            let i = this._postProcesses.length;
            while(--i >= 0){
                const postProcess = this._postProcesses[i];
                if (postProcess) {
                    postProcess.dispose(this);
                }
            }
        }
        // Render targets
        let i = this.customRenderTargets.length;
        while(--i >= 0){
            this.customRenderTargets[i].dispose();
        }
        this.customRenderTargets.length = 0;
        // Active Meshes
        this._activeMeshes.dispose();
        this.getScene().getEngine().releaseRenderPassId(this.renderPassId);
        super.dispose(doNotRecurse, disposeMaterialAndTextures);
    }
    /**
     * Gets the left camera of a rig setup in case of Rigged Camera
     */ get isLeftCamera() {
        return this._isLeftCamera;
    }
    /**
     * Gets the right camera of a rig setup in case of Rigged Camera
     */ get isRightCamera() {
        return this._isRightCamera;
    }
    /**
     * Gets the left camera of a rig setup in case of Rigged Camera
     */ get leftCamera() {
        if (this._rigCameras.length < 1) {
            return null;
        }
        return this._rigCameras[0];
    }
    /**
     * Gets the right camera of a rig setup in case of Rigged Camera
     */ get rightCamera() {
        if (this._rigCameras.length < 2) {
            return null;
        }
        return this._rigCameras[1];
    }
    /**
     * Gets the left camera target of a rig setup in case of Rigged Camera
     * @returns the target position
     */ getLeftTarget() {
        if (this._rigCameras.length < 1) {
            return null;
        }
        return this._rigCameras[0].getTarget();
    }
    /**
     * Gets the right camera target of a rig setup in case of Rigged Camera
     * @returns the target position
     */ getRightTarget() {
        if (this._rigCameras.length < 2) {
            return null;
        }
        return this._rigCameras[1].getTarget();
    }
    /**
     * @internal
     */ setCameraRigMode(mode, rigParams) {
        if (this.cameraRigMode === mode) {
            return;
        }
        while(this._rigCameras.length > 0){
            const camera = this._rigCameras.pop();
            if (camera) {
                camera.dispose();
            }
        }
        this.cameraRigMode = mode;
        this._cameraRigParams = {};
        //we have to implement stereo camera calcultating left and right viewpoints from interaxialDistance and target,
        //not from a given angle as it is now, but until that complete code rewriting provisional stereoHalfAngle value is introduced
        this._cameraRigParams.interaxialDistance = rigParams.interaxialDistance || 0.0637;
        this._cameraRigParams.stereoHalfAngle = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tools"].ToRadians(this._cameraRigParams.interaxialDistance / 0.0637);
        // create the rig cameras, unless none
        if (this.cameraRigMode !== Camera.RIG_MODE_NONE) {
            const leftCamera = this.createRigCamera(this.name + "_L", 0);
            if (leftCamera) {
                leftCamera._isLeftCamera = true;
            }
            const rightCamera = this.createRigCamera(this.name + "_R", 1);
            if (rightCamera) {
                rightCamera._isRightCamera = true;
            }
            if (leftCamera && rightCamera) {
                this._rigCameras.push(leftCamera);
                this._rigCameras.push(rightCamera);
            }
        }
        this._setRigMode(rigParams);
        this._cascadePostProcessesToRigCams();
        this.update();
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _setRigMode(rigParams) {
    // no-op
    }
    /** @internal */ _getVRProjectionMatrix() {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].PerspectiveFovLHToRef(this._cameraRigParams.vrMetrics.aspectRatioFov, this._cameraRigParams.vrMetrics.aspectRatio, this.minZ, this.ignoreCameraMaxZ ? 0 : this.maxZ, this._cameraRigParams.vrWorkMatrix, true, this.getEngine().isNDCHalfZRange);
        this._cameraRigParams.vrWorkMatrix.multiplyToRef(this._cameraRigParams.vrHMatrix, this._projectionMatrix);
        return this._projectionMatrix;
    }
    /**
     * @internal
     */ setCameraRigParameter(name, value) {
        if (!this._cameraRigParams) {
            this._cameraRigParams = {};
        }
        this._cameraRigParams[name] = value;
        //provisionnally:
        if (name === "interaxialDistance") {
            this._cameraRigParams.stereoHalfAngle = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tools"].ToRadians(value / 0.0637);
        }
    }
    /**
     * needs to be overridden by children so sub has required properties to be copied
     * @internal
     */ // eslint-disable-next-line @typescript-eslint/no-unused-vars
    createRigCamera(name, cameraIndex) {
        return null;
    }
    /**
     * May need to be overridden by children
     * @internal
     */ _updateRigCameras() {
        for(let i = 0; i < this._rigCameras.length; i++){
            this._rigCameras[i].minZ = this.minZ;
            this._rigCameras[i].maxZ = this.ignoreCameraMaxZ ? 0 : this.maxZ;
            this._rigCameras[i].fov = this.fov;
            this._rigCameras[i].upVector.copyFrom(this.upVector);
        }
        // only update viewport when ANAGLYPH
        if (this.cameraRigMode === Camera.RIG_MODE_STEREOSCOPIC_ANAGLYPH) {
            this._rigCameras[0].viewport = this._rigCameras[1].viewport = this.viewport;
        }
    }
    /** @internal */ _setupInputs() {}
    /**
     * Serialiaze the camera setup to a json representation
     * @returns the JSON representation
     */ serialize() {
        const serializationObject = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$serialization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SerializationHelper"].Serialize(this);
        serializationObject.uniqueId = this.uniqueId;
        // Type
        serializationObject.type = this.getClassName();
        // Parent
        if (this.parent) {
            this.parent._serializeAsParent(serializationObject);
        }
        if (this.inputs) {
            this.inputs.serialize(serializationObject);
        }
        // Animations
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$serialization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SerializationHelper"].AppendSerializedAnimations(this, serializationObject);
        serializationObject.ranges = this.serializeAnimationRanges();
        serializationObject.isEnabled = this.isEnabled();
        return serializationObject;
    }
    /**
     * Clones the current camera.
     * @param name The cloned camera name
     * @param newParent The cloned camera's new parent (none by default)
     * @returns the cloned camera
     */ clone(name, newParent = null) {
        const camera = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$serialization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SerializationHelper"].Clone(Camera.GetConstructorFromName(this.getClassName(), name, this.getScene(), this.interaxialDistance, this.isStereoscopicSideBySide), this);
        camera.name = name;
        camera.parent = newParent;
        this.onClonedObservable.notifyObservers(camera);
        return camera;
    }
    /**
     * Gets the direction of the camera relative to a given local axis.
     * @param localAxis Defines the reference axis to provide a relative direction.
     * @returns the direction
     */ getDirection(localAxis) {
        const result = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        this.getDirectionToRef(localAxis, result);
        return result;
    }
    /**
     * Returns the current camera absolute rotation
     */ get absoluteRotation() {
        this.getWorldMatrix().decompose(undefined, this._absoluteRotation);
        return this._absoluteRotation;
    }
    /**
     * Gets the direction of the camera relative to a given local axis into a passed vector.
     * @param localAxis Defines the reference axis to provide a relative direction.
     * @param result Defines the vector to store the result in
     */ getDirectionToRef(localAxis, result) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].TransformNormalToRef(localAxis, this.getWorldMatrix(), result);
    }
    /**
     * Gets a camera constructor for a given camera type
     * @param type The type of the camera to construct (should be equal to one of the camera class name)
     * @param name The name of the camera the result will be able to instantiate
     * @param scene The scene the result will construct the camera in
     * @param interaxial_distance In case of stereoscopic setup, the distance between both eyes
     * @param isStereoscopicSideBySide In case of stereoscopic setup, should the sereo be side b side
     * @returns a factory method to construct the camera
     */ // eslint-disable-next-line @typescript-eslint/naming-convention
    static GetConstructorFromName(type, name, scene, interaxial_distance = 0, isStereoscopicSideBySide = true) {
        const constructorFunc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node"].Construct(type, name, scene, {
            // eslint-disable-next-line @typescript-eslint/naming-convention
            interaxial_distance: interaxial_distance,
            isStereoscopicSideBySide: isStereoscopicSideBySide
        });
        if (constructorFunc) {
            return constructorFunc;
        }
        // Default to universal camera
        return ()=>Camera._CreateDefaultParsedCamera(name, scene);
    }
    /**
     * Compute the world  matrix of the camera.
     * @returns the camera world matrix
     */ computeWorldMatrix() {
        return this.getWorldMatrix();
    }
    /**
     * Parse a JSON and creates the camera from the parsed information
     * @param parsedCamera The JSON to parse
     * @param scene The scene to instantiate the camera in
     * @returns the newly constructed camera
     */ static Parse(parsedCamera, scene) {
        const type = parsedCamera.type;
        const construct = Camera.GetConstructorFromName(type, parsedCamera.name, scene, parsedCamera.interaxial_distance, parsedCamera.isStereoscopicSideBySide);
        const camera = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$serialization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SerializationHelper"].Parse(construct, parsedCamera, scene);
        // Parent
        if (parsedCamera.parentId !== undefined) {
            camera._waitingParentId = parsedCamera.parentId;
        }
        // Parent instance index
        if (parsedCamera.parentInstanceIndex !== undefined) {
            camera._waitingParentInstanceIndex = parsedCamera.parentInstanceIndex;
        }
        //If camera has an input manager, let it parse inputs settings
        if (camera.inputs) {
            camera.inputs.parse(parsedCamera);
            camera._setupInputs();
        }
        if (parsedCamera.upVector) {
            camera.upVector = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].FromArray(parsedCamera.upVector); // need to force the upVector
        }
        if (camera.setPosition) {
            // need to force position
            camera.position.copyFromFloats(0, 0, 0);
            camera.setPosition(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].FromArray(parsedCamera.position));
        }
        // Target
        if (parsedCamera.target) {
            if (camera.setTarget) {
                camera.setTarget(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].FromArray(parsedCamera.target));
            }
        }
        // Apply 3d rig, when found
        if (parsedCamera.cameraRigMode) {
            const rigParams = parsedCamera.interaxial_distance ? {
                interaxialDistance: parsedCamera.interaxial_distance
            } : {};
            camera.setCameraRigMode(parsedCamera.cameraRigMode, rigParams);
        }
        // Animations
        if (parsedCamera.animations) {
            for(let animationIndex = 0; animationIndex < parsedCamera.animations.length; animationIndex++){
                const parsedAnimation = parsedCamera.animations[animationIndex];
                const internalClass = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GetClass"])("BABYLON.Animation");
                if (internalClass) {
                    camera.animations.push(internalClass.Parse(parsedAnimation));
                }
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node"].ParseAnimationRanges(camera, parsedCamera, scene);
        }
        if (parsedCamera.autoAnimate) {
            scene.beginAnimation(camera, parsedCamera.autoAnimateFrom, parsedCamera.autoAnimateTo, parsedCamera.autoAnimateLoop, parsedCamera.autoAnimateSpeed || 1.0);
        }
        // Check if isEnabled is defined to be back compatible with prior serialized versions.
        if (parsedCamera.isEnabled !== undefined) {
            camera.setEnabled(parsedCamera.isEnabled);
        }
        return camera;
    }
    /** @internal */ _calculateHandednessMultiplier() {
        let handednessMultiplier = this.getScene().useRightHandedSystem ? -1 : 1;
        if (this.parent && this.parent._getWorldMatrixDeterminant() < 0) {
            handednessMultiplier *= -1;
        }
        return handednessMultiplier;
    }
}
/**
 * @internal
 */ // eslint-disable-next-line @typescript-eslint/no-unused-vars
Camera._CreateDefaultParsedCamera = (name, scene)=>{
    throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$devTools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_WarnImport"])("UniversalCamera");
};
/**
 * This is the default projection mode used by the cameras.
 * It helps recreating a feeling of perspective and better appreciate depth.
 * This is the best way to simulate real life cameras.
 */ Camera.PERSPECTIVE_CAMERA = 0;
/**
 * This helps creating camera with an orthographic mode.
 * Orthographic is commonly used in engineering as a means to produce object specifications that communicate dimensions unambiguously, each line of 1 unit length (cm, meter..whatever) will appear to have the same length everywhere on the drawing. This allows the drafter to dimension only a subset of lines and let the reader know that other lines of that length on the drawing are also that length in reality. Every parallel line in the drawing is also parallel in the object.
 */ Camera.ORTHOGRAPHIC_CAMERA = 1;
/**
 * This is the default FOV mode for perspective cameras.
 * This setting aligns the upper and lower bounds of the viewport to the upper and lower bounds of the camera frustum.
 */ Camera.FOVMODE_VERTICAL_FIXED = 0;
/**
 * This setting aligns the left and right bounds of the viewport to the left and right bounds of the camera frustum.
 */ Camera.FOVMODE_HORIZONTAL_FIXED = 1;
/**
 * This specifies there is no need for a camera rig.
 * Basically only one eye is rendered corresponding to the camera.
 */ Camera.RIG_MODE_NONE = 0;
/**
 * Simulates a camera Rig with one blue eye and one red eye.
 * This can be use with 3d blue and red glasses.
 */ Camera.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10;
/**
 * Defines that both eyes of the camera will be rendered side by side with a parallel target.
 */ Camera.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11;
/**
 * Defines that both eyes of the camera will be rendered side by side with a none parallel target.
 */ Camera.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12;
/**
 * Defines that both eyes of the camera will be rendered over under each other.
 */ Camera.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13;
/**
 * Defines that both eyes of the camera will be rendered on successive lines interlaced for passive 3d monitors.
 */ Camera.RIG_MODE_STEREOSCOPIC_INTERLACED = 14;
/**
 * Defines that both eyes of the camera should be renderered in a VR mode (carbox).
 */ // eslint-disable-next-line @typescript-eslint/naming-convention
Camera.RIG_MODE_VR = 20;
/**
 * Custom rig mode allowing rig cameras to be populated manually with any number of cameras
 */ Camera.RIG_MODE_CUSTOM = 22;
/**
 * Defines if by default attaching controls should prevent the default javascript event to continue.
 */ Camera.ForceAttachControlToAlwaysPreventDefault = false;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeAsVector3"])("position")
], Camera.prototype, "_position", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeAsVector3"])("upVector")
], Camera.prototype, "_upVector", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], Camera.prototype, "orthoLeft", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], Camera.prototype, "orthoRight", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], Camera.prototype, "orthoBottom", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], Camera.prototype, "orthoTop", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], Camera.prototype, "fov", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], Camera.prototype, "projectionPlaneTilt", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], Camera.prototype, "minZ", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], Camera.prototype, "maxZ", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], Camera.prototype, "inertia", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], Camera.prototype, "mode", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], Camera.prototype, "layerMask", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], Camera.prototype, "fovMode", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], Camera.prototype, "cameraRigMode", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], Camera.prototype, "interaxialDistance", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], Camera.prototype, "isStereoscopicSideBySide", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], Camera.prototype, "ignoreCameraMaxZ", void 0); //# sourceMappingURL=camera.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Inputs/BaseCameraMouseWheelInput.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BaseCameraMouseWheelInput",
    ()=>BaseCameraMouseWheelInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/decorators.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/observable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Events$2f$pointerEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Events/pointerEvents.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Events$2f$deviceInputEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Events/deviceInputEvents.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/tools.js [app-client] (ecmascript)");
;
;
;
;
;
;
class BaseCameraMouseWheelInput {
    constructor(){
        /**
         * How fast is the camera moves in relation to X axis mouseWheel events.
         * Use negative value to reverse direction.
         */ this.wheelPrecisionX = 3.0;
        /**
         * How fast is the camera moves in relation to Y axis mouseWheel events.
         * Use negative value to reverse direction.
         */ this.wheelPrecisionY = 3.0;
        /**
         * How fast is the camera moves in relation to Z axis mouseWheel events.
         * Use negative value to reverse direction.
         */ this.wheelPrecisionZ = 3.0;
        /**
         * Observable for when a mouse wheel move event occurs.
         */ this.onChangedObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * Incremental value of multiple mouse wheel movements of the X axis.
         * Should be zero-ed when read.
         */ this._wheelDeltaX = 0;
        /**
         * Incremental value of multiple mouse wheel movements of the Y axis.
         * Should be zero-ed when read.
         */ this._wheelDeltaY = 0;
        /**
         * Incremental value of multiple mouse wheel movements of the Z axis.
         * Should be zero-ed when read.
         */ this._wheelDeltaZ = 0;
        /**
         * Firefox uses a different scheme to report scroll distances to other
         * browsers. Rather than use complicated methods to calculate the exact
         * multiple we need to apply, let's just cheat and use a constant.
         * https://developer.mozilla.org/en-US/docs/Web/API/WheelEvent/deltaMode
         * https://stackoverflow.com/questions/20110224/what-is-the-height-of-a-line-in-a-wheel-event-deltamode-dom-delta-line
         */ this._ffMultiplier = 12;
        /**
         * Different event attributes for wheel data fall into a few set ranges.
         * Some relevant but dated date here:
         * https://stackoverflow.com/questions/5527601/normalizing-mousewheel-speed-across-browsers
         */ this._normalize = 120;
    }
    /**
     * Attach the input controls to a specific dom element to get the input from.
     * @param noPreventDefault Defines whether event caught by the controls
     *   should call preventdefault().
     *   (https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)
     */ attachControl(noPreventDefault) {
        noPreventDefault = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tools"].BackCompatCameraNoPreventDefault(arguments);
        this._wheel = (pointer)=>{
            // sanity check - this should be a PointerWheel event.
            if (pointer.type !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Events$2f$pointerEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointerEventTypes"].POINTERWHEEL) {
                return;
            }
            const event = pointer.event;
            const platformScale = event.deltaMode === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Events$2f$deviceInputEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventConstants"].DOM_DELTA_LINE ? this._ffMultiplier : 1; // If this happens to be set to DOM_DELTA_LINE, adjust accordingly
            this._wheelDeltaX += this.wheelPrecisionX * platformScale * event.deltaX / this._normalize;
            this._wheelDeltaY -= this.wheelPrecisionY * platformScale * event.deltaY / this._normalize;
            this._wheelDeltaZ += this.wheelPrecisionZ * platformScale * event.deltaZ / this._normalize;
            if (event.preventDefault) {
                if (!noPreventDefault) {
                    event.preventDefault();
                }
            }
        };
        this._observer = this.camera.getScene()._inputManager._addCameraPointerObserver(this._wheel, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Events$2f$pointerEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointerEventTypes"].POINTERWHEEL);
    }
    /**
     * Detach the current controls from the specified dom element.
     */ detachControl() {
        if (this._observer) {
            this.camera.getScene()._inputManager._removeCameraPointerObserver(this._observer);
            this._observer = null;
            this._wheel = null;
        }
        if (this.onChangedObservable) {
            this.onChangedObservable.clear();
        }
    }
    /**
     * Called for each rendered frame.
     */ checkInputs() {
        this.onChangedObservable.notifyObservers({
            wheelDeltaX: this._wheelDeltaX,
            wheelDeltaY: this._wheelDeltaY,
            wheelDeltaZ: this._wheelDeltaZ
        });
        // Clear deltas.
        this._wheelDeltaX = 0;
        this._wheelDeltaY = 0;
        this._wheelDeltaZ = 0;
    }
    /**
     * Gets the class name of the current input.
     * @returns the class name
     */ getClassName() {
        return "BaseCameraMouseWheelInput";
    }
    /**
     * Get the friendly name associated with the input class.
     * @returns the input friendly name
     */ getSimpleName() {
        return "mousewheel";
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], BaseCameraMouseWheelInput.prototype, "wheelPrecisionX", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], BaseCameraMouseWheelInput.prototype, "wheelPrecisionY", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], BaseCameraMouseWheelInput.prototype, "wheelPrecisionZ", void 0); //# sourceMappingURL=BaseCameraMouseWheelInput.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Inputs/BaseCameraPointersInput.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BaseCameraPointersInput",
    ()=>BaseCameraPointersInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/decorators.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/tools.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Events$2f$pointerEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Events/pointerEvents.js [app-client] (ecmascript)");
;
;
;
;
class BaseCameraPointersInput {
    constructor(){
        /**
         * Which pointer ID is currently down (only for mouse events, not used for touch events)
         */ this._currentMousePointerIdDown = -1;
        /**
         * Defines the buttons associated with the input to handle camera move.
         */ this.buttons = [
            0,
            1,
            2
        ];
    }
    /**
     * Attach the input controls to a specific dom element to get the input from.
     * @param noPreventDefault Defines whether event caught by the controls should call preventdefault() (https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)
     */ attachControl(noPreventDefault) {
        noPreventDefault = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tools"].BackCompatCameraNoPreventDefault(arguments);
        const engine = this.camera.getEngine();
        const element = engine.getInputElement();
        let previousPinchSquaredDistance = 0;
        let previousMultiTouchPanPosition = null;
        this._pointA = null;
        this._pointB = null;
        this._altKey = false;
        this._ctrlKey = false;
        this._metaKey = false;
        this._shiftKey = false;
        this._buttonsPressed = 0;
        this._pointerInput = (p)=>{
            const evt = p.event;
            const isTouch = evt.pointerType === "touch";
            if (p.type !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Events$2f$pointerEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointerEventTypes"].POINTERMOVE && this.buttons.indexOf(evt.button) === -1) {
                return;
            }
            const srcElement = evt.target;
            this._altKey = evt.altKey;
            this._ctrlKey = evt.ctrlKey;
            this._metaKey = evt.metaKey;
            this._shiftKey = evt.shiftKey;
            this._buttonsPressed = evt.buttons;
            if (engine.isPointerLock) {
                const offsetX = evt.movementX;
                const offsetY = evt.movementY;
                this.onTouch(null, offsetX, offsetY);
                this._pointA = null;
                this._pointB = null;
            } else if (p.type !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Events$2f$pointerEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointerEventTypes"].POINTERDOWN && p.type !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Events$2f$pointerEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointerEventTypes"].POINTERDOUBLETAP && isTouch && this._pointA?.pointerId !== evt.pointerId && this._pointB?.pointerId !== evt.pointerId) {
                return; // If we get a non-down event for a touch that we're not tracking, ignore it
            } else if (p.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Events$2f$pointerEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointerEventTypes"].POINTERDOWN && (this._currentMousePointerIdDown === -1 || isTouch)) {
                try {
                    srcElement?.setPointerCapture(evt.pointerId);
                } catch (e) {
                //Nothing to do with the error. Execution will continue.
                }
                if (this._pointA === null) {
                    this._pointA = {
                        x: evt.clientX,
                        y: evt.clientY,
                        pointerId: evt.pointerId,
                        type: evt.pointerType,
                        button: evt.button
                    };
                } else if (this._pointB === null) {
                    this._pointB = {
                        x: evt.clientX,
                        y: evt.clientY,
                        pointerId: evt.pointerId,
                        type: evt.pointerType,
                        button: evt.button
                    };
                } else {
                    return; // We are already tracking two pointers so ignore this one
                }
                if (this._currentMousePointerIdDown === -1 && !isTouch) {
                    this._currentMousePointerIdDown = evt.pointerId;
                }
                this.onButtonDown(evt);
                if (!noPreventDefault) {
                    evt.preventDefault();
                    if (element) {
                        element.focus();
                    }
                }
            } else if (p.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Events$2f$pointerEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointerEventTypes"].POINTERDOUBLETAP) {
                this.onDoubleTap(evt.pointerType);
            } else if (p.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Events$2f$pointerEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointerEventTypes"].POINTERUP && (this._currentMousePointerIdDown === evt.pointerId || isTouch)) {
                try {
                    srcElement?.releasePointerCapture(evt.pointerId);
                } catch (e) {
                //Nothing to do with the error.
                }
                if (!isTouch) {
                    this._pointB = null; // Mouse and pen are mono pointer
                }
                //would be better to use pointers.remove(evt.pointerId) for multitouch gestures,
                //but emptying completely pointers collection is required to fix a bug on iPhone :
                //when changing orientation while pinching camera,
                //one pointer stay pressed forever if we don't release all pointers
                //will be ok to put back pointers.remove(evt.pointerId); when iPhone bug corrected
                if (engine._badOS) {
                    this._pointA = this._pointB = null;
                } else {
                    //only remove the impacted pointer in case of multitouch allowing on most
                    //platforms switching from rotate to zoom and pan seamlessly.
                    if (this._pointB && this._pointA && this._pointA.pointerId == evt.pointerId) {
                        this._pointA = this._pointB;
                        this._pointB = null;
                    } else if (this._pointA && this._pointB && this._pointB.pointerId == evt.pointerId) {
                        this._pointB = null;
                    } else {
                        this._pointA = this._pointB = null;
                    }
                }
                if (previousPinchSquaredDistance !== 0 || previousMultiTouchPanPosition) {
                    // Previous pinch data is populated but a button has been lifted
                    // so pinch has ended.
                    this.onMultiTouch(this._pointA, this._pointB, previousPinchSquaredDistance, 0, previousMultiTouchPanPosition, null // multiTouchPanPosition
                    );
                    previousPinchSquaredDistance = 0;
                    previousMultiTouchPanPosition = null;
                }
                this._currentMousePointerIdDown = -1;
                this.onButtonUp(evt);
                if (!noPreventDefault) {
                    evt.preventDefault();
                }
            } else if (p.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Events$2f$pointerEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointerEventTypes"].POINTERMOVE) {
                if (!noPreventDefault) {
                    evt.preventDefault();
                }
                // One button down
                if (this._pointA && this._pointB === null) {
                    const offsetX = evt.clientX - this._pointA.x;
                    const offsetY = evt.clientY - this._pointA.y;
                    this._pointA.x = evt.clientX;
                    this._pointA.y = evt.clientY;
                    this.onTouch(this._pointA, offsetX, offsetY);
                } else if (this._pointA && this._pointB) {
                    const ed = this._pointA.pointerId === evt.pointerId ? this._pointA : this._pointB;
                    ed.x = evt.clientX;
                    ed.y = evt.clientY;
                    const distX = this._pointA.x - this._pointB.x;
                    const distY = this._pointA.y - this._pointB.y;
                    const pinchSquaredDistance = distX * distX + distY * distY;
                    const multiTouchPanPosition = {
                        x: (this._pointA.x + this._pointB.x) / 2,
                        y: (this._pointA.y + this._pointB.y) / 2,
                        pointerId: evt.pointerId,
                        type: p.type
                    };
                    this.onMultiTouch(this._pointA, this._pointB, previousPinchSquaredDistance, pinchSquaredDistance, previousMultiTouchPanPosition, multiTouchPanPosition);
                    previousMultiTouchPanPosition = multiTouchPanPosition;
                    previousPinchSquaredDistance = pinchSquaredDistance;
                }
            }
        };
        this._observer = this.camera.getScene()._inputManager._addCameraPointerObserver(this._pointerInput, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Events$2f$pointerEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointerEventTypes"].POINTERDOWN | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Events$2f$pointerEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointerEventTypes"].POINTERUP | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Events$2f$pointerEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointerEventTypes"].POINTERMOVE | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Events$2f$pointerEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointerEventTypes"].POINTERDOUBLETAP);
        this._onLostFocus = ()=>{
            this._pointA = this._pointB = null;
            previousPinchSquaredDistance = 0;
            previousMultiTouchPanPosition = null;
            this.onLostFocus();
        };
        this._contextMenuBind = (evt)=>this.onContextMenu(evt);
        if (element) {
            element.addEventListener("contextmenu", this._contextMenuBind, false);
        }
        const hostWindow = this.camera.getScene().getEngine().getHostWindow();
        if (hostWindow) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tools"].RegisterTopRootEvents(hostWindow, [
                {
                    name: "blur",
                    handler: this._onLostFocus
                }
            ]);
        }
    }
    /**
     * Detach the current controls from the specified dom element.
     */ detachControl() {
        if (this._onLostFocus) {
            const hostWindow = this.camera.getScene().getEngine().getHostWindow();
            if (hostWindow) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tools"].UnregisterTopRootEvents(hostWindow, [
                    {
                        name: "blur",
                        handler: this._onLostFocus
                    }
                ]);
            }
        }
        if (this._observer) {
            this.camera.getScene()._inputManager._removeCameraPointerObserver(this._observer);
            this._observer = null;
            if (this._contextMenuBind) {
                const inputElement = this.camera.getScene().getEngine().getInputElement();
                if (inputElement) {
                    inputElement.removeEventListener("contextmenu", this._contextMenuBind);
                }
            }
            this._onLostFocus = null;
        }
        this._altKey = false;
        this._ctrlKey = false;
        this._metaKey = false;
        this._shiftKey = false;
        this._buttonsPressed = 0;
        this._currentMousePointerIdDown = -1;
    }
    /**
     * Gets the class name of the current input.
     * @returns the class name
     */ getClassName() {
        return "BaseCameraPointersInput";
    }
    /**
     * Get the friendly name associated with the input class.
     * @returns the input friendly name
     */ getSimpleName() {
        return "pointers";
    }
    /**
     * Called on pointer POINTERDOUBLETAP event.
     * Override this method to provide functionality on POINTERDOUBLETAP event.
     * @param type type of event
     */ // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onDoubleTap(type) {}
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    /**
     * Called on pointer POINTERMOVE event if only a single touch is active.
     * Override this method to provide functionality.
     * @param point The current position of the pointer
     * @param offsetX The offsetX of the pointer when the event occurred
     * @param offsetY The offsetY of the pointer when the event occurred
     */ onTouch(point, offsetX, offsetY) {}
    /**
     * Called on pointer POINTERMOVE event if multiple touches are active.
     * Override this method to provide functionality.
     * @param _pointA First point in the pair
     * @param _pointB Second point in the pair
     * @param previousPinchSquaredDistance Sqr Distance between the points the last time this event was fired (by this input)
     * @param pinchSquaredDistance Sqr Distance between the points this time
     * @param previousMultiTouchPanPosition Previous center point between the points
     * @param multiTouchPanPosition Current center point between the points
     */ // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onMultiTouch(_pointA, _pointB, previousPinchSquaredDistance, pinchSquaredDistance, previousMultiTouchPanPosition, multiTouchPanPosition) {}
    /**
     * Called on JS contextmenu event.
     * Override this method to provide functionality.
     * @param evt the event to be handled
     */ onContextMenu(evt) {
        evt.preventDefault();
    }
    /**
     * Called each time a new POINTERDOWN event occurs. Ie, for each button
     * press.
     * Override this method to provide functionality.
     * @param _evt Defines the event to track
     */ onButtonDown(_evt) {}
    /**
     * Called each time a new POINTERUP event occurs. Ie, for each button
     * release.
     * Override this method to provide functionality.
     * @param _evt Defines the event to track
     */ onButtonUp(_evt) {}
    /**
     * Called when window becomes inactive.
     * Override this method to provide functionality.
     */ onLostFocus() {}
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], BaseCameraPointersInput.prototype, "buttons", void 0); //# sourceMappingURL=BaseCameraPointersInput.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/cameraInputsManager.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CameraInputTypes",
    ()=>CameraInputTypes,
    "CameraInputsManager",
    ()=>CameraInputsManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$serialization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/decorators.serialization.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/camera.js [app-client] (ecmascript)");
;
;
;
var CameraInputTypes = {};
class CameraInputsManager {
    /**
     * Instantiate a new Camera Input Manager.
     * @param camera Defines the camera the input manager belongs to
     */ constructor(camera){
        /**
         * Defines the dom element the camera is collecting inputs from.
         * This is null if the controls have not been attached.
         */ this.attachedToElement = false;
        this.attached = {};
        this.camera = camera;
        this.checkInputs = ()=>{};
    }
    /**
     * Add an input method to a camera
     * @see https://doc.babylonjs.com/features/featuresDeepDive/cameras/customizingCameraInputs
     * @param input Camera input method
     */ add(input) {
        const type = input.getSimpleName();
        if (this.attached[type]) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Warn("camera input of type " + type + " already exists on camera");
            return;
        }
        this.attached[type] = input;
        input.camera = this.camera;
        // for checkInputs, we are dynamically creating a function
        // the goal is to avoid the performance penalty of looping for inputs in the render loop
        if (input.checkInputs) {
            this.checkInputs = this._addCheckInputs(input.checkInputs.bind(input));
        }
        if (this.attachedToElement) {
            input.attachControl(this.noPreventDefault);
        }
    }
    /**
     * Remove a specific input method from a camera
     * example: camera.inputs.remove(camera.inputs.attached.mouse);
     * @param inputToRemove camera input method
     */ remove(inputToRemove) {
        for(const cam in this.attached){
            const input = this.attached[cam];
            if (input === inputToRemove) {
                input.detachControl();
                input.camera = null;
                delete this.attached[cam];
                this.rebuildInputCheck();
                return;
            }
        }
    }
    /**
     * Remove a specific input type from a camera
     * example: camera.inputs.remove("ArcRotateCameraGamepadInput");
     * @param inputType the type of the input to remove
     */ removeByType(inputType) {
        for(const cam in this.attached){
            const input = this.attached[cam];
            if (input.getClassName() === inputType) {
                input.detachControl();
                input.camera = null;
                delete this.attached[cam];
                this.rebuildInputCheck();
            }
        }
    }
    _addCheckInputs(fn) {
        const current = this.checkInputs;
        return ()=>{
            current();
            fn();
        };
    }
    /**
     * Attach the input controls to the currently attached dom element to listen the events from.
     * @param input Defines the input to attach
     */ attachInput(input) {
        if (this.attachedToElement) {
            input.attachControl(this.noPreventDefault);
        }
    }
    /**
     * Attach the current manager inputs controls to a specific dom element to listen the events from.
     * @param noPreventDefault Defines whether event caught by the controls should call preventdefault() (https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)
     */ attachElement(noPreventDefault = false) {
        if (this.attachedToElement) {
            return;
        }
        noPreventDefault = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Camera"].ForceAttachControlToAlwaysPreventDefault ? false : noPreventDefault;
        this.attachedToElement = true;
        this.noPreventDefault = noPreventDefault;
        for(const cam in this.attached){
            this.attached[cam].attachControl(noPreventDefault);
        }
    }
    /**
     * Detach the current manager inputs controls from a specific dom element.
     * @param disconnect Defines whether the input should be removed from the current list of attached inputs
     */ detachElement(disconnect = false) {
        for(const cam in this.attached){
            this.attached[cam].detachControl();
            if (disconnect) {
                this.attached[cam].camera = null;
            }
        }
        this.attachedToElement = false;
    }
    /**
     * Rebuild the dynamic inputCheck function from the current list of
     * defined inputs in the manager.
     */ rebuildInputCheck() {
        this.checkInputs = ()=>{};
        for(const cam in this.attached){
            const input = this.attached[cam];
            if (input.checkInputs) {
                this.checkInputs = this._addCheckInputs(input.checkInputs.bind(input));
            }
        }
    }
    /**
     * Remove all attached input methods from a camera
     */ clear() {
        if (this.attachedToElement) {
            this.detachElement(true);
        }
        this.attached = {};
        this.attachedToElement = false;
        this.checkInputs = ()=>{};
    }
    /**
     * Serialize the current input manager attached to a camera.
     * This ensures than once parsed,
     * the input associated to the camera will be identical to the current ones
     * @param serializedCamera Defines the camera serialization JSON the input serialization should write to
     */ serialize(serializedCamera) {
        const inputs = {};
        for(const cam in this.attached){
            const input = this.attached[cam];
            const res = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$serialization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SerializationHelper"].Serialize(input);
            inputs[input.getClassName()] = res;
        }
        serializedCamera.inputsmgr = inputs;
    }
    /**
     * Parses an input manager serialized JSON to restore the previous list of inputs
     * and states associated to a camera.
     * @param parsedCamera Defines the JSON to parse
     */ parse(parsedCamera) {
        const parsedInputs = parsedCamera.inputsmgr;
        if (parsedInputs) {
            this.clear();
            for(const n in parsedInputs){
                const construct = CameraInputTypes[n];
                if (construct) {
                    const parsedinput = parsedInputs[n];
                    const input = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$serialization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SerializationHelper"].Parse(()=>{
                        return new construct();
                    }, parsedinput, null);
                    this.add(input);
                }
            }
        } else {
            //2016-03-08 this part is for managing backward compatibility
            for(const n in this.attached){
                const construct = CameraInputTypes[this.attached[n].getClassName()];
                if (construct) {
                    const input = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$serialization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SerializationHelper"].Parse(()=>{
                        return new construct();
                    }, parsedCamera, null);
                    this.remove(this.attached[n]);
                    this.add(input);
                }
            }
        }
    }
} //# sourceMappingURL=cameraInputsManager.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Inputs/arcRotateCameraGamepadInput.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArcRotateCameraGamepadInput",
    ()=>ArcRotateCameraGamepadInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/decorators.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$cameraInputsManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/cameraInputsManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gamepads$2f$gamepad$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Gamepads/gamepad.js [app-client] (ecmascript)");
;
;
;
;
class ArcRotateCameraGamepadInput {
    constructor(){
        /**
         * Defines the gamepad rotation sensibility.
         * This is the threshold from when rotation starts to be accounted for to prevent jittering.
         */ this.gamepadRotationSensibility = 80;
        /**
         * Defines the gamepad move sensibility.
         * This is the threshold from when moving starts to be accounted for for to prevent jittering.
         */ this.gamepadMoveSensibility = 40;
        this._yAxisScale = 1.0;
    }
    /**
     * Gets or sets a boolean indicating that Yaxis (for right stick) should be inverted
     */ get invertYAxis() {
        return this._yAxisScale !== 1.0;
    }
    set invertYAxis(value) {
        this._yAxisScale = value ? -1.0 : 1.0;
    }
    /**
     * Attach the input controls to a specific dom element to get the input from.
     */ attachControl() {
        const manager = this.camera.getScene().gamepadManager;
        this._onGamepadConnectedObserver = manager.onGamepadConnectedObservable.add((gamepad)=>{
            if (gamepad.type !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gamepads$2f$gamepad$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Gamepad"].POSE_ENABLED) {
                // prioritize XBOX gamepads.
                if (!this.gamepad || gamepad.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gamepads$2f$gamepad$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Gamepad"].XBOX) {
                    this.gamepad = gamepad;
                }
            }
        });
        this._onGamepadDisconnectedObserver = manager.onGamepadDisconnectedObservable.add((gamepad)=>{
            if (this.gamepad === gamepad) {
                this.gamepad = null;
            }
        });
        this.gamepad = manager.getGamepadByType(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gamepads$2f$gamepad$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Gamepad"].XBOX);
        // if no xbox controller was found, but there are gamepad controllers, take the first one
        if (!this.gamepad && manager.gamepads.length) {
            this.gamepad = manager.gamepads[0];
        }
    }
    /**
     * Detach the current controls from the specified dom element.
     */ detachControl() {
        this.camera.getScene().gamepadManager.onGamepadConnectedObservable.remove(this._onGamepadConnectedObserver);
        this.camera.getScene().gamepadManager.onGamepadDisconnectedObservable.remove(this._onGamepadDisconnectedObserver);
        this.gamepad = null;
    }
    /**
     * Update the current camera state depending on the inputs that have been used this frame.
     * This is a dynamically created lambda to avoid the performance penalty of looping for inputs in the render loop.
     */ checkInputs() {
        if (this.gamepad) {
            const camera = this.camera;
            const rsValues = this.gamepad.rightStick;
            if (rsValues) {
                if (rsValues.x != 0) {
                    const normalizedRX = rsValues.x / this.gamepadRotationSensibility;
                    if (normalizedRX != 0 && Math.abs(normalizedRX) > 0.005) {
                        camera.inertialAlphaOffset += normalizedRX;
                    }
                }
                if (rsValues.y != 0) {
                    const normalizedRY = rsValues.y / this.gamepadRotationSensibility * this._yAxisScale;
                    if (normalizedRY != 0 && Math.abs(normalizedRY) > 0.005) {
                        camera.inertialBetaOffset += normalizedRY;
                    }
                }
            }
            const lsValues = this.gamepad.leftStick;
            if (lsValues && lsValues.y != 0) {
                const normalizedLY = lsValues.y / this.gamepadMoveSensibility;
                if (normalizedLY != 0 && Math.abs(normalizedLY) > 0.005) {
                    this.camera.inertialRadiusOffset -= normalizedLY;
                }
            }
        }
    }
    /**
     * Gets the class name of the current intput.
     * @returns the class name
     */ getClassName() {
        return "ArcRotateCameraGamepadInput";
    }
    /**
     * Get the friendly name associated with the input class.
     * @returns the input friendly name
     */ getSimpleName() {
        return "gamepad";
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], ArcRotateCameraGamepadInput.prototype, "gamepadRotationSensibility", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], ArcRotateCameraGamepadInput.prototype, "gamepadMoveSensibility", void 0);
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$cameraInputsManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CameraInputTypes"]["ArcRotateCameraGamepadInput"] = ArcRotateCameraGamepadInput; //# sourceMappingURL=arcRotateCameraGamepadInput.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Inputs/arcRotateCameraKeyboardMoveInput.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArcRotateCameraKeyboardMoveInput",
    ()=>ArcRotateCameraKeyboardMoveInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/decorators.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$cameraInputsManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/cameraInputsManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Events$2f$keyboardEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Events/keyboardEvents.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/tools.js [app-client] (ecmascript)");
;
;
;
;
;
class ArcRotateCameraKeyboardMoveInput {
    constructor(){
        /**
         * Defines the list of key codes associated with the up action (increase alpha)
         */ this.keysUp = [
            38
        ];
        /**
         * Defines the list of key codes associated with the down action (decrease alpha)
         */ this.keysDown = [
            40
        ];
        /**
         * Defines the list of key codes associated with the left action (increase beta)
         */ this.keysLeft = [
            37
        ];
        /**
         * Defines the list of key codes associated with the right action (decrease beta)
         */ this.keysRight = [
            39
        ];
        /**
         * Defines the list of key codes associated with the reset action.
         * Those keys reset the camera to its last stored state (with the method camera.storeState())
         */ this.keysReset = [
            220
        ];
        /**
         * Defines the panning sensibility of the inputs.
         * (How fast is the camera panning)
         */ this.panningSensibility = 50.0;
        /**
         * Defines the zooming sensibility of the inputs.
         * (How fast is the camera zooming)
         */ this.zoomingSensibility = 25.0;
        /**
         * Defines whether maintaining the alt key down switch the movement mode from
         * orientation to zoom.
         */ this.useAltToZoom = true;
        /**
         * Rotation speed of the camera
         */ this.angularSpeed = 0.01;
        this._keys = new Array();
    }
    /**
     * Attach the input controls to a specific dom element to get the input from.
     * @param noPreventDefault Defines whether event caught by the controls should call preventdefault() (https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)
     */ attachControl(noPreventDefault) {
        // was there a second variable defined?
        noPreventDefault = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tools"].BackCompatCameraNoPreventDefault(arguments);
        if (this._onCanvasBlurObserver) {
            return;
        }
        this._scene = this.camera.getScene();
        this._engine = this._scene.getEngine();
        this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add(()=>{
            this._keys.length = 0;
        });
        this._onKeyboardObserver = this._scene.onKeyboardObservable.add((info)=>{
            const evt = info.event;
            if (!evt.metaKey) {
                if (info.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Events$2f$keyboardEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KeyboardEventTypes"].KEYDOWN) {
                    this._ctrlPressed = evt.ctrlKey;
                    this._altPressed = evt.altKey;
                    if (this.keysUp.indexOf(evt.keyCode) !== -1 || this.keysDown.indexOf(evt.keyCode) !== -1 || this.keysLeft.indexOf(evt.keyCode) !== -1 || this.keysRight.indexOf(evt.keyCode) !== -1 || this.keysReset.indexOf(evt.keyCode) !== -1) {
                        const index = this._keys.indexOf(evt.keyCode);
                        if (index === -1) {
                            this._keys.push(evt.keyCode);
                        }
                        if (evt.preventDefault) {
                            if (!noPreventDefault) {
                                evt.preventDefault();
                            }
                        }
                    }
                } else {
                    if (this.keysUp.indexOf(evt.keyCode) !== -1 || this.keysDown.indexOf(evt.keyCode) !== -1 || this.keysLeft.indexOf(evt.keyCode) !== -1 || this.keysRight.indexOf(evt.keyCode) !== -1 || this.keysReset.indexOf(evt.keyCode) !== -1) {
                        const index = this._keys.indexOf(evt.keyCode);
                        if (index >= 0) {
                            this._keys.splice(index, 1);
                        }
                        if (evt.preventDefault) {
                            if (!noPreventDefault) {
                                evt.preventDefault();
                            }
                        }
                    }
                }
            }
        });
    }
    /**
     * Detach the current controls from the specified dom element.
     */ detachControl() {
        if (this._scene) {
            if (this._onKeyboardObserver) {
                this._scene.onKeyboardObservable.remove(this._onKeyboardObserver);
            }
            if (this._onCanvasBlurObserver) {
                this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver);
            }
            this._onKeyboardObserver = null;
            this._onCanvasBlurObserver = null;
        }
        this._keys.length = 0;
    }
    /**
     * Update the current camera state depending on the inputs that have been used this frame.
     * This is a dynamically created lambda to avoid the performance penalty of looping for inputs in the render loop.
     */ checkInputs() {
        if (this._onKeyboardObserver) {
            const camera = this.camera;
            for(let index = 0; index < this._keys.length; index++){
                const keyCode = this._keys[index];
                if (this.keysLeft.indexOf(keyCode) !== -1) {
                    if (this._ctrlPressed && this.camera._useCtrlForPanning) {
                        camera.inertialPanningX -= 1 / this.panningSensibility;
                    } else {
                        camera.inertialAlphaOffset -= this.angularSpeed;
                    }
                } else if (this.keysUp.indexOf(keyCode) !== -1) {
                    if (this._ctrlPressed && this.camera._useCtrlForPanning) {
                        camera.inertialPanningY += 1 / this.panningSensibility;
                    } else if (this._altPressed && this.useAltToZoom) {
                        camera.inertialRadiusOffset += 1 / this.zoomingSensibility;
                    } else {
                        camera.inertialBetaOffset -= this.angularSpeed;
                    }
                } else if (this.keysRight.indexOf(keyCode) !== -1) {
                    if (this._ctrlPressed && this.camera._useCtrlForPanning) {
                        camera.inertialPanningX += 1 / this.panningSensibility;
                    } else {
                        camera.inertialAlphaOffset += this.angularSpeed;
                    }
                } else if (this.keysDown.indexOf(keyCode) !== -1) {
                    if (this._ctrlPressed && this.camera._useCtrlForPanning) {
                        camera.inertialPanningY -= 1 / this.panningSensibility;
                    } else if (this._altPressed && this.useAltToZoom) {
                        camera.inertialRadiusOffset -= 1 / this.zoomingSensibility;
                    } else {
                        camera.inertialBetaOffset += this.angularSpeed;
                    }
                } else if (this.keysReset.indexOf(keyCode) !== -1) {
                    if (camera.useInputToRestoreState) {
                        camera.restoreState();
                    }
                }
            }
        }
    }
    /**
     * Gets the class name of the current input.
     * @returns the class name
     */ getClassName() {
        return "ArcRotateCameraKeyboardMoveInput";
    }
    /**
     * Get the friendly name associated with the input class.
     * @returns the input friendly name
     */ getSimpleName() {
        return "keyboard";
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], ArcRotateCameraKeyboardMoveInput.prototype, "keysUp", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], ArcRotateCameraKeyboardMoveInput.prototype, "keysDown", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], ArcRotateCameraKeyboardMoveInput.prototype, "keysLeft", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], ArcRotateCameraKeyboardMoveInput.prototype, "keysRight", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], ArcRotateCameraKeyboardMoveInput.prototype, "keysReset", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], ArcRotateCameraKeyboardMoveInput.prototype, "panningSensibility", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], ArcRotateCameraKeyboardMoveInput.prototype, "zoomingSensibility", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], ArcRotateCameraKeyboardMoveInput.prototype, "useAltToZoom", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], ArcRotateCameraKeyboardMoveInput.prototype, "angularSpeed", void 0);
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$cameraInputsManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CameraInputTypes"]["ArcRotateCameraKeyboardMoveInput"] = ArcRotateCameraKeyboardMoveInput; //# sourceMappingURL=arcRotateCameraKeyboardMoveInput.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Inputs/arcRotateCameraMouseWheelInput.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArcRotateCameraMouseWheelInput",
    ()=>ArcRotateCameraMouseWheelInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/decorators.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$cameraInputsManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/cameraInputsManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Events$2f$pointerEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Events/pointerEvents.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$plane$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.plane.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Events$2f$deviceInputEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Events/deviceInputEvents.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.scalar.functions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/tools.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
/**
 * Firefox uses a different scheme to report scroll distances to other
 * browsers. Rather than use complicated methods to calculate the exact
 * multiple we need to apply, let's just cheat and use a constant.
 * https://developer.mozilla.org/en-US/docs/Web/API/WheelEvent/deltaMode
 * https://stackoverflow.com/questions/20110224/what-is-the-height-of-a-line-in-a-wheel-event-deltamode-dom-delta-line
 */ const FfMultiplier = 40;
class ArcRotateCameraMouseWheelInput {
    constructor(){
        /**
         * Gets or Set the mouse wheel precision or how fast is the camera zooming.
         */ this.wheelPrecision = 3.0;
        /**
         * Gets or Set the boolean value that controls whether or not the mouse wheel
         * zooms to the location of the mouse pointer or not.  The default is false.
         */ this.zoomToMouseLocation = false;
        /**
         * wheelDeltaPercentage will be used instead of wheelPrecision if different from 0.
         * It defines the percentage of current camera.radius to use as delta when wheel is used.
         */ this.wheelDeltaPercentage = 0;
        /**
         * If set, this function will be used to set the radius delta that will be added to the current camera radius
         */ this.customComputeDeltaFromMouseWheel = null;
        this._viewOffset = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, 0);
        this._globalOffset = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, 0);
        this._inertialPanning = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
    }
    _computeDeltaFromMouseWheelLegacyEvent(mouseWheelDelta, radius) {
        let delta = 0;
        const wheelDelta = mouseWheelDelta * 0.01 * this.wheelDeltaPercentage * radius;
        if (mouseWheelDelta > 0) {
            delta = wheelDelta / (1.0 + this.wheelDeltaPercentage);
        } else {
            delta = wheelDelta * (1.0 + this.wheelDeltaPercentage);
        }
        return delta;
    }
    /**
     * Attach the input controls to a specific dom element to get the input from.
     * @param noPreventDefault Defines whether event caught by the controls should call preventdefault() (https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)
     */ attachControl(noPreventDefault) {
        noPreventDefault = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tools"].BackCompatCameraNoPreventDefault(arguments);
        this._wheel = (p)=>{
            //sanity check - this should be a PointerWheel event.
            if (p.type !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Events$2f$pointerEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointerEventTypes"].POINTERWHEEL) {
                return;
            }
            const event = p.event;
            let delta = 0;
            const platformScale = event.deltaMode === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Events$2f$deviceInputEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventConstants"].DOM_DELTA_LINE ? FfMultiplier : 1; // If this happens to be set to DOM_DELTA_LINE, adjust accordingly
            const wheelDelta = -(event.deltaY * platformScale);
            if (this.customComputeDeltaFromMouseWheel) {
                delta = this.customComputeDeltaFromMouseWheel(wheelDelta, this, event);
            } else {
                if (this.wheelDeltaPercentage) {
                    delta = this._computeDeltaFromMouseWheelLegacyEvent(wheelDelta, this.camera.radius);
                    // If zooming in, estimate the target radius and use that to compute the delta for inertia
                    // this will stop multiple scroll events zooming in from adding too much inertia
                    if (delta > 0) {
                        let estimatedTargetRadius = this.camera.radius;
                        let targetInertia = this.camera.inertialRadiusOffset + delta;
                        for(let i = 0; i < 20; i++){
                            // 20 iterations should be enough to converge
                            if (estimatedTargetRadius <= targetInertia) {
                                break;
                            }
                            if (Math.abs(targetInertia * this.camera.inertia) < 0.001) {
                                break;
                            }
                            estimatedTargetRadius -= targetInertia;
                            targetInertia *= this.camera.inertia;
                        }
                        estimatedTargetRadius = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Clamp"])(estimatedTargetRadius, 0, Number.MAX_VALUE);
                        delta = this._computeDeltaFromMouseWheelLegacyEvent(wheelDelta, estimatedTargetRadius);
                    }
                } else {
                    delta = wheelDelta / (this.wheelPrecision * 40);
                }
            }
            if (delta) {
                if (this.zoomToMouseLocation) {
                    // If we are zooming to the mouse location, then we need to get the hit plane at the start of the zoom gesture if it doesn't exist
                    // The hit plane is normally calculated after the first motion and each time there's motion so if we don't do this first,
                    // the first zoom will be to the center of the screen
                    if (!this._hitPlane) {
                        this._updateHitPlane();
                    }
                    this._zoomToMouse(delta);
                } else {
                    this.camera.inertialRadiusOffset += delta;
                }
            }
            if (event.preventDefault) {
                if (!noPreventDefault) {
                    event.preventDefault();
                }
            }
        };
        this._observer = this.camera.getScene()._inputManager._addCameraPointerObserver(this._wheel, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Events$2f$pointerEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointerEventTypes"].POINTERWHEEL);
        if (this.zoomToMouseLocation) {
            this._inertialPanning.setAll(0);
        }
    }
    /**
     * Detach the current controls from the specified dom element.
     */ detachControl() {
        if (this._observer) {
            this.camera.getScene()._inputManager._removeCameraPointerObserver(this._observer);
            this._observer = null;
            this._wheel = null;
        }
    }
    /**
     * Update the current camera state depending on the inputs that have been used this frame.
     * This is a dynamically created lambda to avoid the performance penalty of looping for inputs in the render loop.
     */ checkInputs() {
        if (!this.zoomToMouseLocation) {
            return;
        }
        const camera = this.camera;
        const motion = 0.0 + camera.inertialAlphaOffset + camera.inertialBetaOffset + camera.inertialRadiusOffset;
        if (motion) {
            // if zooming is still happening as a result of inertia, then we also need to update
            // the hit plane.
            this._updateHitPlane();
            // Note we cannot  use arcRotateCamera.inertialPlanning here because arcRotateCamera panning
            // uses a different panningInertia which could cause this panning to get out of sync with
            // the zooming, and for this to work they must be exactly in sync.
            camera.target.addInPlace(this._inertialPanning);
            this._inertialPanning.scaleInPlace(camera.inertia);
            this._zeroIfClose(this._inertialPanning);
        }
    }
    /**
     * Gets the class name of the current input.
     * @returns the class name
     */ getClassName() {
        return "ArcRotateCameraMouseWheelInput";
    }
    /**
     * Get the friendly name associated with the input class.
     * @returns the input friendly name
     */ getSimpleName() {
        return "mousewheel";
    }
    _updateHitPlane() {
        const camera = this.camera;
        const direction = camera.target.subtract(camera.position);
        this._hitPlane = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$plane$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Plane"].FromPositionAndNormal(camera.target, direction);
    }
    // Get position on the hit plane
    _getPosition() {
        const camera = this.camera;
        const scene = camera.getScene();
        // since the _hitPlane is always updated to be orthogonal to the camera position vector
        // we don't have to worry about this ray shooting off to infinity. This ray creates
        // a vector defining where we want to zoom to.
        const ray = scene.createPickingRay(scene.pointerX, scene.pointerY, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].Identity(), camera, false);
        // Since the camera is the origin of the picking ray, we need to offset it by the camera's offset manually
        // Because the offset is in view space, we need to convert it to world space first
        if (camera.targetScreenOffset.x !== 0 || camera.targetScreenOffset.y !== 0) {
            this._viewOffset.set(camera.targetScreenOffset.x, camera.targetScreenOffset.y, 0);
            camera.getViewMatrix().invertToRef(camera._cameraTransformMatrix);
            this._globalOffset = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].TransformNormal(this._viewOffset, camera._cameraTransformMatrix);
            ray.origin.addInPlace(this._globalOffset);
        }
        let distance = 0;
        if (this._hitPlane) {
            distance = ray.intersectsPlane(this._hitPlane) ?? 0;
        }
        // not using this ray again, so modifying its vectors here is fine
        return ray.origin.addInPlace(ray.direction.scaleInPlace(distance));
    }
    _zoomToMouse(delta) {
        const camera = this.camera;
        const inertiaComp = 1 - camera.inertia;
        if (camera.lowerRadiusLimit) {
            const lowerLimit = camera.lowerRadiusLimit ?? 0;
            if (camera.radius - (camera.inertialRadiusOffset + delta) / inertiaComp < lowerLimit) {
                delta = (camera.radius - lowerLimit) * inertiaComp - camera.inertialRadiusOffset;
            }
        }
        if (camera.upperRadiusLimit) {
            const upperLimit = camera.upperRadiusLimit ?? 0;
            if (camera.radius - (camera.inertialRadiusOffset + delta) / inertiaComp > upperLimit) {
                delta = (camera.radius - upperLimit) * inertiaComp - camera.inertialRadiusOffset;
            }
        }
        const zoomDistance = delta / inertiaComp;
        const ratio = zoomDistance / camera.radius;
        const vec = this._getPosition();
        // Now this vector tells us how much we also need to pan the camera
        // so the targeted mouse location becomes the center of zooming.
        const directionToZoomLocation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[6];
        vec.subtractToRef(camera.target, directionToZoomLocation);
        directionToZoomLocation.scaleInPlace(ratio);
        directionToZoomLocation.scaleInPlace(inertiaComp);
        this._inertialPanning.addInPlace(directionToZoomLocation);
        camera.inertialRadiusOffset += delta;
    }
    // Sets x y or z of passed in vector to zero if less than Epsilon.
    _zeroIfClose(vec) {
        if (Math.abs(vec.x) < __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Epsilon"]) {
            vec.x = 0;
        }
        if (Math.abs(vec.y) < __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Epsilon"]) {
            vec.y = 0;
        }
        if (Math.abs(vec.z) < __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Epsilon"]) {
            vec.z = 0;
        }
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], ArcRotateCameraMouseWheelInput.prototype, "wheelPrecision", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], ArcRotateCameraMouseWheelInput.prototype, "zoomToMouseLocation", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], ArcRotateCameraMouseWheelInput.prototype, "wheelDeltaPercentage", void 0);
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$cameraInputsManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CameraInputTypes"]["ArcRotateCameraMouseWheelInput"] = ArcRotateCameraMouseWheelInput; //# sourceMappingURL=arcRotateCameraMouseWheelInput.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Inputs/orbitCameraPointersInput.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OrbitCameraPointersInput",
    ()=>OrbitCameraPointersInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/decorators.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$BaseCameraPointersInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Inputs/BaseCameraPointersInput.js [app-client] (ecmascript)");
;
;
;
class OrbitCameraPointersInput extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$BaseCameraPointersInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseCameraPointersInput"] {
    constructor(){
        super(...arguments);
        /**
         * Defines whether zoom (2 fingers pinch) is enabled through multitouch
         */ this.pinchZoom = true;
        /**
         * Defines whether panning (2 fingers swipe) is enabled through multitouch.
         */ this.multiTouchPanning = true;
        /**
         * Defines whether panning is enabled for both pan (2 fingers swipe) and
         * zoom (pinch) through multitouch.
         */ this.multiTouchPanAndZoom = true;
        this._isPinching = false;
        this._twoFingerActivityCount = 0;
        this._shouldStartPinchZoom = false;
    }
    _computePinchZoom(_previousPinchSquaredDistance, _pinchSquaredDistance) {}
    _computeMultiTouchPanning(_previousMultiTouchPanPosition, _multiTouchPanPosition) {}
    /**
     * Called on pointer POINTERMOVE event if multiple touches are active.
     * Override this method to provide functionality.
     * @param _pointA First point in the pair
     * @param _pointB Second point in the pair
     * @param previousPinchSquaredDistance Sqr Distance between the points the last time this event was fired (by this input)
     * @param pinchSquaredDistance Sqr Distance between the points this time
     * @param previousMultiTouchPanPosition Previous center point between the points
     * @param multiTouchPanPosition Current center point between the points
     */ onMultiTouch(_pointA, _pointB, previousPinchSquaredDistance, pinchSquaredDistance, previousMultiTouchPanPosition, multiTouchPanPosition) {
        if (previousPinchSquaredDistance === 0 && previousMultiTouchPanPosition === null) {
            // First time this method is called for new pinch.
            // Next time this is called there will be a
            // previousPinchSquaredDistance and pinchSquaredDistance to compare.
            return;
        }
        if (pinchSquaredDistance === 0 && multiTouchPanPosition === null) {
            // Last time this method is called at the end of a pinch.
            return;
        }
        // Zoom and panning enabled together
        if (this.multiTouchPanAndZoom) {
            this._computePinchZoom(previousPinchSquaredDistance, pinchSquaredDistance);
            this._computeMultiTouchPanning(previousMultiTouchPanPosition, multiTouchPanPosition);
        // Zoom and panning enabled but only one at a time
        } else if (this.multiTouchPanning && this.pinchZoom) {
            this._twoFingerActivityCount++;
            if (this._isPinching || this._shouldStartPinchZoom) {
                // Since pinch has not been active long, assume we intend to zoom.
                this._computePinchZoom(previousPinchSquaredDistance, pinchSquaredDistance);
                // Since we are pinching, remain pinching on next iteration.
                this._isPinching = true;
            } else {
                // Pause between pinch starting and moving implies not a zoom event. Pan instead.
                this._computeMultiTouchPanning(previousMultiTouchPanPosition, multiTouchPanPosition);
            }
        // Panning enabled, zoom disabled
        } else if (this.multiTouchPanning) {
            this._computeMultiTouchPanning(previousMultiTouchPanPosition, multiTouchPanPosition);
        // Zoom enabled, panning disabled
        } else if (this.pinchZoom) {
            this._computePinchZoom(previousPinchSquaredDistance, pinchSquaredDistance);
        }
    }
    /**
     * Called each time a new POINTERUP event occurs. Ie, for each button
     * release.
     * @param _evt Defines the event to track
     */ onButtonUp(_evt) {
        this._twoFingerActivityCount = 0;
        this._isPinching = false;
    }
    /**
     * Called when window becomes inactive.
     */ onLostFocus() {
        this._twoFingerActivityCount = 0;
        this._isPinching = false;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], OrbitCameraPointersInput.prototype, "pinchZoom", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], OrbitCameraPointersInput.prototype, "multiTouchPanning", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], OrbitCameraPointersInput.prototype, "multiTouchPanAndZoom", void 0); //# sourceMappingURL=orbitCameraPointersInput.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Inputs/arcRotateCameraPointersInput.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArcRotateCameraPointersInput",
    ()=>ArcRotateCameraPointersInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/decorators.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$cameraInputsManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/cameraInputsManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$orbitCameraPointersInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Inputs/orbitCameraPointersInput.js [app-client] (ecmascript)");
;
;
;
;
class ArcRotateCameraPointersInput extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$orbitCameraPointersInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrbitCameraPointersInput"] {
    constructor(){
        super(...arguments);
        /**
         * Defines the buttons associated with the input to handle camera move.
         */ this.buttons = [
            0,
            1,
            2
        ];
        /**
         * Defines the pointer angular sensibility  along the X axis or how fast is
         * the camera rotating.
         */ this.angularSensibilityX = 1000.0;
        /**
         * Defines the pointer angular sensibility along the Y axis or how fast is
         * the camera rotating.
         */ this.angularSensibilityY = 1000.0;
        /**
         * Defines the pointer pinch precision or how fast is the camera zooming.
         */ this.pinchPrecision = 12.0;
        /**
         * pinchDeltaPercentage will be used instead of pinchPrecision if different
         * from 0.
         * It defines the percentage of current camera.radius to use as delta when
         * pinch zoom is used.
         */ this.pinchDeltaPercentage = 0;
        /**
         * When useNaturalPinchZoom is true, multi touch zoom will zoom in such
         * that any object in the plane at the camera's target point will scale
         * perfectly with finger motion.
         * Overrides pinchDeltaPercentage and pinchPrecision.
         */ this.useNaturalPinchZoom = false;
        /**
         * Defines the pointer panning sensibility or how fast is the camera moving.
         */ this.panningSensibility = 1000.0;
        /**
         * Revers pinch action direction.
         */ this.pinchInwards = true;
        this._isPanClick = false;
    }
    /**
     * Gets the class name of the current input.
     * @returns the class name
     */ getClassName() {
        return "ArcRotateCameraPointersInput";
    }
    /**
     * Move camera from multi touch panning positions.
     * @param previousMultiTouchPanPosition
     * @param multiTouchPanPosition
     */ _computeMultiTouchPanning(previousMultiTouchPanPosition, multiTouchPanPosition) {
        if (this.panningSensibility !== 0 && previousMultiTouchPanPosition && multiTouchPanPosition) {
            const moveDeltaX = multiTouchPanPosition.x - previousMultiTouchPanPosition.x;
            const moveDeltaY = multiTouchPanPosition.y - previousMultiTouchPanPosition.y;
            this.camera.inertialPanningX += -moveDeltaX / this.panningSensibility;
            this.camera.inertialPanningY += moveDeltaY / this.panningSensibility;
        }
    }
    /**
     * Move camera from multitouch (pinch) zoom distances.
     * @param previousPinchSquaredDistance
     * @param pinchSquaredDistance
     */ _computePinchZoom(previousPinchSquaredDistance, pinchSquaredDistance) {
        const radius = this.camera.radius || ArcRotateCameraPointersInput.MinimumRadiusForPinch;
        if (this.useNaturalPinchZoom) {
            this.camera.radius = radius * Math.sqrt(previousPinchSquaredDistance) / Math.sqrt(pinchSquaredDistance);
        } else if (this.pinchDeltaPercentage) {
            this.camera.inertialRadiusOffset += (pinchSquaredDistance - previousPinchSquaredDistance) * 0.001 * radius * this.pinchDeltaPercentage;
        } else {
            this.camera.inertialRadiusOffset += (pinchSquaredDistance - previousPinchSquaredDistance) / (this.pinchPrecision * (this.pinchInwards ? 1 : -1) * (this.angularSensibilityX + this.angularSensibilityY) / 2);
        }
    }
    /**
     * Called on pointer POINTERMOVE event if only a single touch is active.
     * @param point current touch point
     * @param offsetX offset on X
     * @param offsetY offset on Y
     */ onTouch(point, offsetX, offsetY) {
        if (this.panningSensibility !== 0 && (this._ctrlKey && this.camera._useCtrlForPanning || this._isPanClick)) {
            this.camera.inertialPanningX += -offsetX / this.panningSensibility;
            this.camera.inertialPanningY += offsetY / this.panningSensibility;
        } else {
            this.camera.inertialAlphaOffset -= offsetX / this.angularSensibilityX;
            this.camera.inertialBetaOffset -= offsetY / this.angularSensibilityY;
        }
    }
    /**
     * Called on pointer POINTERDOUBLETAP event.
     */ onDoubleTap() {
        if (this.camera.useInputToRestoreState) {
            this.camera.restoreState();
        }
    }
    /**
     * Called on pointer POINTERMOVE event if multiple touches are active.
     * @param pointA point A
     * @param pointB point B
     * @param previousPinchSquaredDistance distance between points in previous pinch
     * @param pinchSquaredDistance distance between points in current pinch
     * @param previousMultiTouchPanPosition multi-touch position in previous step
     * @param multiTouchPanPosition multi-touch position in current step
     */ onMultiTouch(pointA, pointB, previousPinchSquaredDistance, pinchSquaredDistance, previousMultiTouchPanPosition, multiTouchPanPosition) {
        this._shouldStartPinchZoom = this._twoFingerActivityCount < 20 && Math.abs(Math.sqrt(pinchSquaredDistance) - Math.sqrt(previousPinchSquaredDistance)) > this.camera.pinchToPanMaxDistance;
        super.onMultiTouch(pointA, pointB, previousPinchSquaredDistance, pinchSquaredDistance, previousMultiTouchPanPosition, multiTouchPanPosition);
    }
    /**
     * Called each time a new POINTERDOWN event occurs. Ie, for each button
     * press.
     * @param evt Defines the event to track
     */ onButtonDown(evt) {
        this._isPanClick = evt.button === this.camera._panningMouseButton;
        super.onButtonDown(evt);
    }
    /**
     * Called each time a new POINTERUP event occurs. Ie, for each button
     * release.
     * @param _evt Defines the event to track
     */ onButtonUp(_evt) {
        super.onButtonUp(_evt);
    }
    /**
     * Called when window becomes inactive.
     */ onLostFocus() {
        this._isPanClick = false;
        super.onLostFocus();
    }
}
/**
 * The minimum radius used for pinch, to avoid radius lock at 0
 */ ArcRotateCameraPointersInput.MinimumRadiusForPinch = 0.001;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], ArcRotateCameraPointersInput.prototype, "buttons", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], ArcRotateCameraPointersInput.prototype, "angularSensibilityX", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], ArcRotateCameraPointersInput.prototype, "angularSensibilityY", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], ArcRotateCameraPointersInput.prototype, "pinchPrecision", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], ArcRotateCameraPointersInput.prototype, "pinchDeltaPercentage", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], ArcRotateCameraPointersInput.prototype, "useNaturalPinchZoom", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], ArcRotateCameraPointersInput.prototype, "panningSensibility", void 0);
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$cameraInputsManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CameraInputTypes"]["ArcRotateCameraPointersInput"] = ArcRotateCameraPointersInput; //# sourceMappingURL=arcRotateCameraPointersInput.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/arcRotateCameraInputsManager.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArcRotateCameraInputsManager",
    ()=>ArcRotateCameraInputsManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$arcRotateCameraPointersInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Inputs/arcRotateCameraPointersInput.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$arcRotateCameraKeyboardMoveInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Inputs/arcRotateCameraKeyboardMoveInput.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$arcRotateCameraMouseWheelInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Inputs/arcRotateCameraMouseWheelInput.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$cameraInputsManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/cameraInputsManager.js [app-client] (ecmascript)");
;
;
;
;
class ArcRotateCameraInputsManager extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$cameraInputsManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CameraInputsManager"] {
    /**
     * Instantiates a new ArcRotateCameraInputsManager.
     * @param camera Defines the camera the inputs belong to
     */ constructor(camera){
        super(camera);
    }
    /**
     * Add mouse wheel input support to the input manager.
     * @returns the current input manager
     */ addMouseWheel() {
        this.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$arcRotateCameraMouseWheelInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArcRotateCameraMouseWheelInput"]());
        return this;
    }
    /**
     * Add pointers input support to the input manager.
     * @returns the current input manager
     */ addPointers() {
        this.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$arcRotateCameraPointersInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArcRotateCameraPointersInput"]());
        return this;
    }
    /**
     * Add keyboard input support to the input manager.
     * @returns the current input manager
     */ addKeyboard() {
        this.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$arcRotateCameraKeyboardMoveInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArcRotateCameraKeyboardMoveInput"]());
        return this;
    }
} //# sourceMappingURL=arcRotateCameraInputsManager.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Inputs/arcRotateCameraVRDeviceOrientationInput.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArcRotateCameraVRDeviceOrientationInput",
    ()=>ArcRotateCameraVRDeviceOrientationInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$cameraInputsManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/cameraInputsManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$arcRotateCameraInputsManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/arcRotateCameraInputsManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/tools.js [app-client] (ecmascript)");
;
;
;
/**
 * Add orientation input support to the input manager.
 * @returns the current input manager
 */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$arcRotateCameraInputsManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArcRotateCameraInputsManager"].prototype.addVRDeviceOrientation = function() {
    this.add(new ArcRotateCameraVRDeviceOrientationInput());
    return this;
};
class ArcRotateCameraVRDeviceOrientationInput {
    /**
     * Instantiate a new ArcRotateCameraVRDeviceOrientationInput.
     */ constructor(){
        /**
         * Defines a correction factor applied on the alpha value retrieved from the orientation events.
         */ this.alphaCorrection = 1;
        /**
         * Defines a correction factor applied on the gamma value retrieved from the orientation events.
         */ this.gammaCorrection = 1;
        this._alpha = 0;
        this._gamma = 0;
        this._dirty = false;
        this._deviceOrientationHandler = (evt)=>this._onOrientationEvent(evt);
    }
    /**
     * Attach the input controls to a specific dom element to get the input from.
     * @param noPreventDefault Defines whether event caught by the controls should call preventdefault() (https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)
     */ attachControl(noPreventDefault) {
        noPreventDefault = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tools"].BackCompatCameraNoPreventDefault(arguments);
        this.camera.attachControl(noPreventDefault);
        const hostWindow = this.camera.getScene().getEngine().getHostWindow();
        if (hostWindow) {
            // check iOS 13+ support
            if (typeof DeviceOrientationEvent !== "undefined" && typeof DeviceOrientationEvent.requestPermission === "function") {
                DeviceOrientationEvent.requestPermission()// eslint-disable-next-line github/no-then
                .then((response)=>{
                    if (response === "granted") {
                        hostWindow.addEventListener("deviceorientation", this._deviceOrientationHandler);
                    } else {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tools"].Warn("Permission not granted.");
                    }
                })// eslint-disable-next-line github/no-then
                .catch((error)=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tools"].Error(error);
                });
            } else {
                hostWindow.addEventListener("deviceorientation", this._deviceOrientationHandler);
            }
        }
    }
    /**
     * @internal
     */ _onOrientationEvent(evt) {
        if (evt.alpha !== null) {
            this._alpha = (+evt.alpha | 0) * this.alphaCorrection;
        }
        if (evt.gamma !== null) {
            this._gamma = (+evt.gamma | 0) * this.gammaCorrection;
        }
        this._dirty = true;
    }
    /**
     * Update the current camera state depending on the inputs that have been used this frame.
     * This is a dynamically created lambda to avoid the performance penalty of looping for inputs in the render loop.
     */ checkInputs() {
        if (this._dirty) {
            this._dirty = false;
            if (this._gamma < 0) {
                this._gamma = 180 + this._gamma;
            }
            this.camera.alpha = -this._alpha / 180.0 * Math.PI % Math.PI * 2;
            this.camera.beta = this._gamma / 180.0 * Math.PI;
        }
    }
    /**
     * Detach the current controls from the specified dom element.
     */ detachControl() {
        window.removeEventListener("deviceorientation", this._deviceOrientationHandler);
    }
    /**
     * Gets the class name of the current input.
     * @returns the class name
     */ getClassName() {
        return "ArcRotateCameraVRDeviceOrientationInput";
    }
    /**
     * Get the friendly name associated with the input class.
     * @returns the input friendly name
     */ getSimpleName() {
        return "VRDeviceOrientation";
    }
}
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$cameraInputsManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CameraInputTypes"]["ArcRotateCameraVRDeviceOrientationInput"] = ArcRotateCameraVRDeviceOrientationInput; //# sourceMappingURL=arcRotateCameraVRDeviceOrientationInput.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Inputs/flyCameraKeyboardInput.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FlyCameraKeyboardInput",
    ()=>FlyCameraKeyboardInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/decorators.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$cameraInputsManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/cameraInputsManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Events$2f$keyboardEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Events/keyboardEvents.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/tools.js [app-client] (ecmascript)");
;
;
;
;
;
;
class FlyCameraKeyboardInput {
    constructor(){
        /**
         * The list of keyboard keys used to control the forward move of the camera.
         */ this.keysForward = [
            87
        ];
        /**
         * The list of keyboard keys used to control the backward move of the camera.
         */ this.keysBackward = [
            83
        ];
        /**
         * The list of keyboard keys used to control the forward move of the camera.
         */ this.keysUp = [
            69
        ];
        /**
         * The list of keyboard keys used to control the backward move of the camera.
         */ this.keysDown = [
            81
        ];
        /**
         * The list of keyboard keys used to control the right strafe move of the camera.
         */ this.keysRight = [
            68
        ];
        /**
         * The list of keyboard keys used to control the left strafe move of the camera.
         */ this.keysLeft = [
            65
        ];
        this._keys = new Array();
    }
    /**
     * Attach the input controls to a specific dom element to get the input from.
     * @param noPreventDefault Defines whether event caught by the controls should call preventdefault() (https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)
     */ attachControl(noPreventDefault) {
        noPreventDefault = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tools"].BackCompatCameraNoPreventDefault(arguments);
        if (this._onCanvasBlurObserver) {
            return;
        }
        this._scene = this.camera.getScene();
        this._engine = this._scene.getEngine();
        this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add(()=>{
            this._keys.length = 0;
        });
        this._onKeyboardObserver = this._scene.onKeyboardObservable.add((info)=>{
            const evt = info.event;
            if (info.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Events$2f$keyboardEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KeyboardEventTypes"].KEYDOWN) {
                if (this.keysForward.indexOf(evt.keyCode) !== -1 || this.keysBackward.indexOf(evt.keyCode) !== -1 || this.keysUp.indexOf(evt.keyCode) !== -1 || this.keysDown.indexOf(evt.keyCode) !== -1 || this.keysLeft.indexOf(evt.keyCode) !== -1 || this.keysRight.indexOf(evt.keyCode) !== -1) {
                    const index = this._keys.indexOf(evt.keyCode);
                    if (index === -1) {
                        this._keys.push(evt.keyCode);
                    }
                    if (!noPreventDefault) {
                        evt.preventDefault();
                    }
                }
            } else {
                if (this.keysForward.indexOf(evt.keyCode) !== -1 || this.keysBackward.indexOf(evt.keyCode) !== -1 || this.keysUp.indexOf(evt.keyCode) !== -1 || this.keysDown.indexOf(evt.keyCode) !== -1 || this.keysLeft.indexOf(evt.keyCode) !== -1 || this.keysRight.indexOf(evt.keyCode) !== -1) {
                    const index = this._keys.indexOf(evt.keyCode);
                    if (index >= 0) {
                        this._keys.splice(index, 1);
                    }
                    if (!noPreventDefault) {
                        evt.preventDefault();
                    }
                }
            }
        });
    }
    /**
     * Detach the current controls from the specified dom element.
     */ detachControl() {
        if (this._scene) {
            if (this._onKeyboardObserver) {
                this._scene.onKeyboardObservable.remove(this._onKeyboardObserver);
            }
            if (this._onCanvasBlurObserver) {
                this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver);
            }
            this._onKeyboardObserver = null;
            this._onCanvasBlurObserver = null;
        }
        this._keys.length = 0;
    }
    /**
     * Gets the class name of the current input.
     * @returns the class name
     */ getClassName() {
        return "FlyCameraKeyboardInput";
    }
    /**
     * @internal
     */ _onLostFocus() {
        this._keys.length = 0;
    }
    /**
     * Get the friendly name associated with the input class.
     * @returns the input friendly name
     */ getSimpleName() {
        return "keyboard";
    }
    /**
     * Update the current camera state depending on the inputs that have been used this frame.
     * This is a dynamically created lambda to avoid the performance penalty of looping for inputs in the render loop.
     */ checkInputs() {
        if (this._onKeyboardObserver) {
            const camera = this.camera;
            // Keyboard
            for(let index = 0; index < this._keys.length; index++){
                const keyCode = this._keys[index];
                const speed = camera._computeLocalCameraSpeed();
                if (this.keysForward.indexOf(keyCode) !== -1) {
                    camera._localDirection.copyFromFloats(0, 0, speed);
                } else if (this.keysBackward.indexOf(keyCode) !== -1) {
                    camera._localDirection.copyFromFloats(0, 0, -speed);
                } else if (this.keysUp.indexOf(keyCode) !== -1) {
                    camera._localDirection.copyFromFloats(0, speed, 0);
                } else if (this.keysDown.indexOf(keyCode) !== -1) {
                    camera._localDirection.copyFromFloats(0, -speed, 0);
                } else if (this.keysRight.indexOf(keyCode) !== -1) {
                    camera._localDirection.copyFromFloats(speed, 0, 0);
                } else if (this.keysLeft.indexOf(keyCode) !== -1) {
                    camera._localDirection.copyFromFloats(-speed, 0, 0);
                }
                if (camera.getScene().useRightHandedSystem) {
                    camera._localDirection.z *= -1;
                }
                camera.getViewMatrix().invertToRef(camera._cameraTransformMatrix);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].TransformNormalToRef(camera._localDirection, camera._cameraTransformMatrix, camera._transformedDirection);
                camera.cameraDirection.addInPlace(camera._transformedDirection);
            }
        }
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], FlyCameraKeyboardInput.prototype, "keysForward", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], FlyCameraKeyboardInput.prototype, "keysBackward", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], FlyCameraKeyboardInput.prototype, "keysUp", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], FlyCameraKeyboardInput.prototype, "keysDown", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], FlyCameraKeyboardInput.prototype, "keysRight", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], FlyCameraKeyboardInput.prototype, "keysLeft", void 0);
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$cameraInputsManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CameraInputTypes"]["FlyCameraKeyboardInput"] = FlyCameraKeyboardInput; //# sourceMappingURL=flyCameraKeyboardInput.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Inputs/flyCameraMouseInput.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FlyCameraMouseInput",
    ()=>FlyCameraMouseInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/decorators.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$cameraInputsManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/cameraInputsManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Events$2f$pointerEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Events/pointerEvents.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$axis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.axis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/tools.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
class FlyCameraMouseInput {
    /**
     * Listen to mouse events to control the camera.
     * @see https://doc.babylonjs.com/features/featuresDeepDive/cameras/customizingCameraInputs
     */ constructor(){
        /**
         * Defines the buttons associated with the input to handle camera rotation.
         */ this.buttons = [
            0,
            1,
            2
        ];
        /**
         * Assign buttons for Yaw control.
         */ this.buttonsYaw = [
            -1,
            0,
            1
        ];
        /**
         * Assign buttons for Pitch control.
         */ this.buttonsPitch = [
            -1,
            0,
            1
        ];
        /**
         * Assign buttons for Roll control.
         */ this.buttonsRoll = [
            2
        ];
        /**
         * Detect if any button is being pressed while mouse is moved.
         * -1 = Mouse locked.
         * 0 = Left button.
         * 1 = Middle Button.
         * 2 = Right Button.
         */ this.activeButton = -1;
        /**
         * Defines the pointer's angular sensibility, to control the camera rotation speed.
         * Higher values reduce its sensitivity.
         */ this.angularSensibility = 1000.0;
        this._previousPosition = null;
    }
    /**
     * Attach the mouse control to the HTML DOM element.
     * @param noPreventDefault Defines whether events caught by the controls should call preventdefault().
     */ attachControl(noPreventDefault) {
        noPreventDefault = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tools"].BackCompatCameraNoPreventDefault(arguments);
        this._noPreventDefault = noPreventDefault;
        this._observer = this.camera.getScene()._inputManager._addCameraPointerObserver((p)=>{
            this._pointerInput(p);
        }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Events$2f$pointerEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointerEventTypes"].POINTERDOWN | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Events$2f$pointerEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointerEventTypes"].POINTERUP | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Events$2f$pointerEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointerEventTypes"].POINTERMOVE);
        // Correct Roll by rate, if enabled.
        this._rollObserver = this.camera.getScene().onBeforeRenderObservable.add(()=>{
            if (this.camera.rollCorrect) {
                this.camera.restoreRoll(this.camera.rollCorrect);
            }
        });
    }
    /**
     * Detach the current controls from the specified dom element.
     */ detachControl() {
        if (this._observer) {
            this.camera.getScene()._inputManager._removeCameraPointerObserver(this._observer);
            this.camera.getScene().onBeforeRenderObservable.remove(this._rollObserver);
            this._observer = null;
            this._rollObserver = null;
            this._previousPosition = null;
            this._noPreventDefault = undefined;
        }
    }
    /**
     * Gets the class name of the current input.
     * @returns the class name.
     */ getClassName() {
        return "FlyCameraMouseInput";
    }
    /**
     * Get the friendly name associated with the input class.
     * @returns the input's friendly name.
     */ getSimpleName() {
        return "mouse";
    }
    // Track mouse movement, when the pointer is not locked.
    _pointerInput(p) {
        const e = p.event;
        const camera = this.camera;
        const engine = camera.getEngine();
        if (!this.touchEnabled && e.pointerType === "touch") {
            return;
        }
        // Mouse is moved but an unknown mouse button is pressed.
        if (p.type !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Events$2f$pointerEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointerEventTypes"].POINTERMOVE && this.buttons.indexOf(e.button) === -1) {
            return;
        }
        const srcElement = e.target;
        // Mouse down.
        if (p.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Events$2f$pointerEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointerEventTypes"].POINTERDOWN) {
            try {
                srcElement?.setPointerCapture(e.pointerId);
            } catch (e) {
            // Nothing to do with the error. Execution continues.
            }
            this._previousPosition = {
                x: e.clientX,
                y: e.clientY
            };
            this.activeButton = e.button;
            if (!this._noPreventDefault) {
                e.preventDefault();
            }
            // This is required to move while pointer button is down
            if (engine.isPointerLock) {
                this._onMouseMove(p.event);
            }
        } else if (p.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Events$2f$pointerEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointerEventTypes"].POINTERUP) {
            try {
                srcElement?.releasePointerCapture(e.pointerId);
            } catch (e) {
            // Nothing to do with the error. Execution continues.
            }
            this.activeButton = -1;
            this._previousPosition = null;
            if (!this._noPreventDefault) {
                e.preventDefault();
            }
        } else if (p.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Events$2f$pointerEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointerEventTypes"].POINTERMOVE) {
            if (!this._previousPosition) {
                if (engine.isPointerLock) {
                    this._onMouseMove(p.event);
                }
                return;
            }
            const offsetX = e.clientX - this._previousPosition.x;
            const offsetY = e.clientY - this._previousPosition.y;
            this._rotateCamera(offsetX, offsetY);
            this._previousPosition = {
                x: e.clientX,
                y: e.clientY
            };
            if (!this._noPreventDefault) {
                e.preventDefault();
            }
        }
    }
    // Track mouse movement, when pointer is locked.
    _onMouseMove(e) {
        const camera = this.camera;
        const engine = camera.getEngine();
        if (!engine.isPointerLock) {
            return;
        }
        const offsetX = e.movementX;
        const offsetY = e.movementY;
        this._rotateCamera(offsetX, offsetY);
        this._previousPosition = null;
        if (!this._noPreventDefault) {
            e.preventDefault();
        }
    }
    /**
     * Rotate camera by mouse offset.
     * @param offsetX
     * @param offsetY
     */ _rotateCamera(offsetX, offsetY) {
        const camera = this.camera;
        const handednessMultiplier = camera._calculateHandednessMultiplier();
        const x = offsetX * handednessMultiplier / this.angularSensibility;
        const y = offsetY * handednessMultiplier / this.angularSensibility;
        // Initialize to current rotation.
        const currentRotation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"].RotationYawPitchRoll(camera.rotation.y, camera.rotation.x, camera.rotation.z);
        let rotationChange;
        // Pitch.
        if (this.buttonsPitch.some((v)=>{
            return v === this.activeButton;
        })) {
            // Apply change in Radians to vector Angle.
            rotationChange = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"].RotationAxis(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$axis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Axis"].X, y);
            // Apply Pitch to quaternion.
            currentRotation.multiplyInPlace(rotationChange);
        }
        // Yaw.
        if (this.buttonsYaw.some((v)=>{
            return v === this.activeButton;
        })) {
            // Apply change in Radians to vector Angle.
            rotationChange = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"].RotationAxis(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$axis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Axis"].Y, x);
            // Apply Yaw to quaternion.
            currentRotation.multiplyInPlace(rotationChange);
            // Add Roll, if banked turning is enabled, within Roll limit.
            const limit = camera.bankedTurnLimit + camera._trackRoll; // Defaults to 90° plus manual roll.
            if (camera.bankedTurn && -limit < camera.rotation.z && camera.rotation.z < limit) {
                const bankingDelta = camera.bankedTurnMultiplier * -x;
                // Apply change in Radians to vector Angle.
                rotationChange = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"].RotationAxis(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$axis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Axis"].Z, bankingDelta);
                // Apply Yaw to quaternion.
                currentRotation.multiplyInPlace(rotationChange);
            }
        }
        // Roll.
        if (this.buttonsRoll.some((v)=>{
            return v === this.activeButton;
        })) {
            // Apply change in Radians to vector Angle.
            rotationChange = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"].RotationAxis(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$axis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Axis"].Z, -x);
            // Track Rolling.
            camera._trackRoll -= x;
            // Apply Pitch to quaternion.
            currentRotation.multiplyInPlace(rotationChange);
        }
        // Apply rotationQuaternion to Euler camera.rotation.
        currentRotation.toEulerAnglesToRef(camera.rotation);
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], FlyCameraMouseInput.prototype, "buttons", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], FlyCameraMouseInput.prototype, "angularSensibility", void 0);
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$cameraInputsManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CameraInputTypes"]["FlyCameraMouseInput"] = FlyCameraMouseInput; //# sourceMappingURL=flyCameraMouseInput.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Inputs/followCameraKeyboardMoveInput.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FollowCameraKeyboardMoveInput",
    ()=>FollowCameraKeyboardMoveInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$cameraInputsManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/cameraInputsManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/decorators.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Events$2f$keyboardEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Events/keyboardEvents.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/tools.js [app-client] (ecmascript)");
;
;
;
;
;
class FollowCameraKeyboardMoveInput {
    constructor(){
        /**
         * Defines the list of key codes associated with the up action (increase heightOffset)
         */ this.keysHeightOffsetIncr = [
            38
        ];
        /**
         * Defines the list of key codes associated with the down action (decrease heightOffset)
         */ this.keysHeightOffsetDecr = [
            40
        ];
        /**
         * Defines whether the Alt modifier key is required to move up/down (alter heightOffset)
         */ this.keysHeightOffsetModifierAlt = false;
        /**
         * Defines whether the Ctrl modifier key is required to move up/down (alter heightOffset)
         */ this.keysHeightOffsetModifierCtrl = false;
        /**
         * Defines whether the Shift modifier key is required to move up/down (alter heightOffset)
         */ this.keysHeightOffsetModifierShift = false;
        /**
         * Defines the list of key codes associated with the left action (increase rotationOffset)
         */ this.keysRotationOffsetIncr = [
            37
        ];
        /**
         * Defines the list of key codes associated with the right action (decrease rotationOffset)
         */ this.keysRotationOffsetDecr = [
            39
        ];
        /**
         * Defines whether the Alt modifier key is required to move left/right (alter rotationOffset)
         */ this.keysRotationOffsetModifierAlt = false;
        /**
         * Defines whether the Ctrl modifier key is required to move left/right (alter rotationOffset)
         */ this.keysRotationOffsetModifierCtrl = false;
        /**
         * Defines whether the Shift modifier key is required to move left/right (alter rotationOffset)
         */ this.keysRotationOffsetModifierShift = false;
        /**
         * Defines the list of key codes associated with the zoom-in action (decrease radius)
         */ this.keysRadiusIncr = [
            40
        ];
        /**
         * Defines the list of key codes associated with the zoom-out action (increase radius)
         */ this.keysRadiusDecr = [
            38
        ];
        /**
         * Defines whether the Alt modifier key is required to zoom in/out (alter radius value)
         */ this.keysRadiusModifierAlt = true;
        /**
         * Defines whether the Ctrl modifier key is required to zoom in/out (alter radius value)
         */ this.keysRadiusModifierCtrl = false;
        /**
         * Defines whether the Shift modifier key is required to zoom in/out (alter radius value)
         */ this.keysRadiusModifierShift = false;
        /**
         * Defines the rate of change of heightOffset.
         */ this.heightSensibility = 1;
        /**
         * Defines the rate of change of rotationOffset.
         */ this.rotationSensibility = 1;
        /**
         * Defines the rate of change of radius.
         */ this.radiusSensibility = 1;
        this._keys = new Array();
    }
    /**
     * Attach the input controls to a specific dom element to get the input from.
     * @param noPreventDefault Defines whether event caught by the controls should call preventdefault() (https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)
     */ attachControl(noPreventDefault) {
        noPreventDefault = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tools"].BackCompatCameraNoPreventDefault(arguments);
        if (this._onCanvasBlurObserver) {
            return;
        }
        this._scene = this.camera.getScene();
        this._engine = this._scene.getEngine();
        this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add(()=>{
            this._keys.length = 0;
        });
        this._onKeyboardObserver = this._scene.onKeyboardObservable.add((info)=>{
            const evt = info.event;
            if (!evt.metaKey) {
                if (info.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Events$2f$keyboardEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KeyboardEventTypes"].KEYDOWN) {
                    this._ctrlPressed = evt.ctrlKey;
                    this._altPressed = evt.altKey;
                    this._shiftPressed = evt.shiftKey;
                    if (this.keysHeightOffsetIncr.indexOf(evt.keyCode) !== -1 || this.keysHeightOffsetDecr.indexOf(evt.keyCode) !== -1 || this.keysRotationOffsetIncr.indexOf(evt.keyCode) !== -1 || this.keysRotationOffsetDecr.indexOf(evt.keyCode) !== -1 || this.keysRadiusIncr.indexOf(evt.keyCode) !== -1 || this.keysRadiusDecr.indexOf(evt.keyCode) !== -1) {
                        const index = this._keys.indexOf(evt.keyCode);
                        if (index === -1) {
                            this._keys.push(evt.keyCode);
                        }
                        if (evt.preventDefault) {
                            if (!noPreventDefault) {
                                evt.preventDefault();
                            }
                        }
                    }
                } else {
                    if (this.keysHeightOffsetIncr.indexOf(evt.keyCode) !== -1 || this.keysHeightOffsetDecr.indexOf(evt.keyCode) !== -1 || this.keysRotationOffsetIncr.indexOf(evt.keyCode) !== -1 || this.keysRotationOffsetDecr.indexOf(evt.keyCode) !== -1 || this.keysRadiusIncr.indexOf(evt.keyCode) !== -1 || this.keysRadiusDecr.indexOf(evt.keyCode) !== -1) {
                        const index = this._keys.indexOf(evt.keyCode);
                        if (index >= 0) {
                            this._keys.splice(index, 1);
                        }
                        if (evt.preventDefault) {
                            if (!noPreventDefault) {
                                evt.preventDefault();
                            }
                        }
                    }
                }
            }
        });
    }
    /**
     * Detach the current controls from the specified dom element.
     */ detachControl() {
        if (this._scene) {
            if (this._onKeyboardObserver) {
                this._scene.onKeyboardObservable.remove(this._onKeyboardObserver);
            }
            if (this._onCanvasBlurObserver) {
                this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver);
            }
            this._onKeyboardObserver = null;
            this._onCanvasBlurObserver = null;
        }
        this._keys.length = 0;
    }
    /**
     * Update the current camera state depending on the inputs that have been used this frame.
     * This is a dynamically created lambda to avoid the performance penalty of looping for inputs in the render loop.
     */ checkInputs() {
        if (this._onKeyboardObserver) {
            for (const keyCode of this._keys){
                if (this.keysHeightOffsetIncr.indexOf(keyCode) !== -1 && this._modifierHeightOffset()) {
                    this.camera.heightOffset += this.heightSensibility;
                } else if (this.keysHeightOffsetDecr.indexOf(keyCode) !== -1 && this._modifierHeightOffset()) {
                    this.camera.heightOffset -= this.heightSensibility;
                } else if (this.keysRotationOffsetIncr.indexOf(keyCode) !== -1 && this._modifierRotationOffset()) {
                    this.camera.rotationOffset += this.rotationSensibility;
                    this.camera.rotationOffset %= 360;
                } else if (this.keysRotationOffsetDecr.indexOf(keyCode) !== -1 && this._modifierRotationOffset()) {
                    this.camera.rotationOffset -= this.rotationSensibility;
                    this.camera.rotationOffset %= 360;
                } else if (this.keysRadiusIncr.indexOf(keyCode) !== -1 && this._modifierRadius()) {
                    this.camera.radius += this.radiusSensibility;
                } else if (this.keysRadiusDecr.indexOf(keyCode) !== -1 && this._modifierRadius()) {
                    this.camera.radius -= this.radiusSensibility;
                }
            }
        }
    }
    /**
     * Gets the class name of the current input.
     * @returns the class name
     */ getClassName() {
        return "FollowCameraKeyboardMoveInput";
    }
    /**
     * Get the friendly name associated with the input class.
     * @returns the input friendly name
     */ getSimpleName() {
        return "keyboard";
    }
    /**
     * Check if the pressed modifier keys (Alt/Ctrl/Shift) match those configured to
     * allow modification of the heightOffset value.
     * @returns true if modifier keys match
     */ _modifierHeightOffset() {
        return this.keysHeightOffsetModifierAlt === this._altPressed && this.keysHeightOffsetModifierCtrl === this._ctrlPressed && this.keysHeightOffsetModifierShift === this._shiftPressed;
    }
    /**
     * Check if the pressed modifier keys (Alt/Ctrl/Shift) match those configured to
     * allow modification of the rotationOffset value.
     * @returns true if modifier keys match
     */ _modifierRotationOffset() {
        return this.keysRotationOffsetModifierAlt === this._altPressed && this.keysRotationOffsetModifierCtrl === this._ctrlPressed && this.keysRotationOffsetModifierShift === this._shiftPressed;
    }
    /**
     * Check if the pressed modifier keys (Alt/Ctrl/Shift) match those configured to
     * allow modification of the radius value.
     * @returns true if modifier keys match
     */ _modifierRadius() {
        return this.keysRadiusModifierAlt === this._altPressed && this.keysRadiusModifierCtrl === this._ctrlPressed && this.keysRadiusModifierShift === this._shiftPressed;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], FollowCameraKeyboardMoveInput.prototype, "keysHeightOffsetIncr", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], FollowCameraKeyboardMoveInput.prototype, "keysHeightOffsetDecr", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], FollowCameraKeyboardMoveInput.prototype, "keysHeightOffsetModifierAlt", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], FollowCameraKeyboardMoveInput.prototype, "keysHeightOffsetModifierCtrl", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], FollowCameraKeyboardMoveInput.prototype, "keysHeightOffsetModifierShift", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], FollowCameraKeyboardMoveInput.prototype, "keysRotationOffsetIncr", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], FollowCameraKeyboardMoveInput.prototype, "keysRotationOffsetDecr", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], FollowCameraKeyboardMoveInput.prototype, "keysRotationOffsetModifierAlt", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], FollowCameraKeyboardMoveInput.prototype, "keysRotationOffsetModifierCtrl", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], FollowCameraKeyboardMoveInput.prototype, "keysRotationOffsetModifierShift", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], FollowCameraKeyboardMoveInput.prototype, "keysRadiusIncr", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], FollowCameraKeyboardMoveInput.prototype, "keysRadiusDecr", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], FollowCameraKeyboardMoveInput.prototype, "keysRadiusModifierAlt", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], FollowCameraKeyboardMoveInput.prototype, "keysRadiusModifierCtrl", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], FollowCameraKeyboardMoveInput.prototype, "keysRadiusModifierShift", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], FollowCameraKeyboardMoveInput.prototype, "heightSensibility", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], FollowCameraKeyboardMoveInput.prototype, "rotationSensibility", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], FollowCameraKeyboardMoveInput.prototype, "radiusSensibility", void 0);
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$cameraInputsManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CameraInputTypes"]["FollowCameraKeyboardMoveInput"] = FollowCameraKeyboardMoveInput; //# sourceMappingURL=followCameraKeyboardMoveInput.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Inputs/followCameraMouseWheelInput.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FollowCameraMouseWheelInput",
    ()=>FollowCameraMouseWheelInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/decorators.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$cameraInputsManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/cameraInputsManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Events$2f$pointerEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Events/pointerEvents.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/tools.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/logger.js [app-client] (ecmascript)");
;
;
;
;
;
;
class FollowCameraMouseWheelInput {
    constructor(){
        /**
         * Moue wheel controls zoom. (Mouse wheel modifies camera.radius value.)
         */ this.axisControlRadius = true;
        /**
         * Moue wheel controls height. (Mouse wheel modifies camera.heightOffset value.)
         */ this.axisControlHeight = false;
        /**
         * Moue wheel controls angle. (Mouse wheel modifies camera.rotationOffset value.)
         */ this.axisControlRotation = false;
        /**
         * Gets or Set the mouse wheel precision or how fast is the camera moves in
         * relation to mouseWheel events.
         */ this.wheelPrecision = 3.0;
        /**
         * wheelDeltaPercentage will be used instead of wheelPrecision if different from 0.
         * It defines the percentage of current camera.radius to use as delta when wheel is used.
         */ this.wheelDeltaPercentage = 0;
    }
    /**
     * Attach the input controls to a specific dom element to get the input from.
     * @param noPreventDefault Defines whether event caught by the controls should call preventdefault() (https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)
     */ attachControl(noPreventDefault) {
        noPreventDefault = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tools"].BackCompatCameraNoPreventDefault(arguments);
        this._wheel = (p)=>{
            // sanity check - this should be a PointerWheel event.
            if (p.type !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Events$2f$pointerEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointerEventTypes"].POINTERWHEEL) {
                return;
            }
            const event = p.event;
            let delta = 0;
            const wheelDelta = Math.max(-1, Math.min(1, event.deltaY));
            if (this.wheelDeltaPercentage) {
                if (+this.axisControlRadius + +this.axisControlHeight + +this.axisControlRotation) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Warn("wheelDeltaPercentage only usable when mouse wheel " + "controls ONE axis. " + "Currently enabled: " + "axisControlRadius: " + this.axisControlRadius + ", axisControlHeightOffset: " + this.axisControlHeight + ", axisControlRotationOffset: " + this.axisControlRotation);
                }
                if (this.axisControlRadius) {
                    delta = wheelDelta * 0.01 * this.wheelDeltaPercentage * this.camera.radius;
                } else if (this.axisControlHeight) {
                    delta = wheelDelta * 0.01 * this.wheelDeltaPercentage * this.camera.heightOffset;
                } else if (this.axisControlRotation) {
                    delta = wheelDelta * 0.01 * this.wheelDeltaPercentage * this.camera.rotationOffset;
                }
            } else {
                delta = wheelDelta * this.wheelPrecision;
            }
            if (delta) {
                if (this.axisControlRadius) {
                    this.camera.radius += delta;
                } else if (this.axisControlHeight) {
                    this.camera.heightOffset -= delta;
                } else if (this.axisControlRotation) {
                    this.camera.rotationOffset -= delta;
                }
            }
            if (event.preventDefault) {
                if (!noPreventDefault) {
                    event.preventDefault();
                }
            }
        };
        this._observer = this.camera.getScene()._inputManager._addCameraPointerObserver(this._wheel, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Events$2f$pointerEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointerEventTypes"].POINTERWHEEL);
    }
    /**
     * Detach the current controls from the specified dom element.
     */ detachControl() {
        if (this._observer) {
            this.camera.getScene()._inputManager._removeCameraPointerObserver(this._observer);
            this._observer = null;
            this._wheel = null;
        }
    }
    /**
     * Gets the class name of the current input.
     * @returns the class name
     */ getClassName() {
        return "ArcRotateCameraMouseWheelInput";
    }
    /**
     * Get the friendly name associated with the input class.
     * @returns the input friendly name
     */ getSimpleName() {
        return "mousewheel";
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], FollowCameraMouseWheelInput.prototype, "axisControlRadius", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], FollowCameraMouseWheelInput.prototype, "axisControlHeight", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], FollowCameraMouseWheelInput.prototype, "axisControlRotation", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], FollowCameraMouseWheelInput.prototype, "wheelPrecision", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], FollowCameraMouseWheelInput.prototype, "wheelDeltaPercentage", void 0);
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$cameraInputsManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CameraInputTypes"]["FollowCameraMouseWheelInput"] = FollowCameraMouseWheelInput; //# sourceMappingURL=followCameraMouseWheelInput.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Inputs/followCameraPointersInput.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FollowCameraPointersInput",
    ()=>FollowCameraPointersInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/decorators.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$cameraInputsManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/cameraInputsManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$BaseCameraPointersInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Inputs/BaseCameraPointersInput.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/logger.js [app-client] (ecmascript)");
;
;
;
;
;
class FollowCameraPointersInput extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$BaseCameraPointersInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseCameraPointersInput"] {
    constructor(){
        super(...arguments);
        /**
         * Defines the pointer angular sensibility along the X axis or how fast is
         * the camera rotating.
         * A negative number will reverse the axis direction.
         */ this.angularSensibilityX = 1;
        /**
         * Defines the pointer angular sensibility along the Y axis or how fast is
         * the camera rotating.
         * A negative number will reverse the axis direction.
         */ this.angularSensibilityY = 1;
        /**
         * Defines the pointer pinch precision or how fast is the camera zooming.
         * A negative number will reverse the axis direction.
         */ this.pinchPrecision = 10000.0;
        /**
         * pinchDeltaPercentage will be used instead of pinchPrecision if different
         * from 0.
         * It defines the percentage of current camera.radius to use as delta when
         * pinch zoom is used.
         */ this.pinchDeltaPercentage = 0;
        /**
         * Pointer X axis controls zoom. (X axis modifies camera.radius value.)
         */ this.axisXControlRadius = false;
        /**
         * Pointer X axis controls height. (X axis modifies camera.heightOffset value.)
         */ this.axisXControlHeight = false;
        /**
         * Pointer X axis controls angle. (X axis modifies camera.rotationOffset value.)
         */ this.axisXControlRotation = true;
        /**
         * Pointer Y axis controls zoom. (Y axis modifies camera.radius value.)
         */ this.axisYControlRadius = false;
        /**
         * Pointer Y axis controls height. (Y axis modifies camera.heightOffset value.)
         */ this.axisYControlHeight = true;
        /**
         * Pointer Y axis controls angle. (Y axis modifies camera.rotationOffset value.)
         */ this.axisYControlRotation = false;
        /**
         * Pinch controls zoom. (Pinch modifies camera.radius value.)
         */ this.axisPinchControlRadius = true;
        /**
         * Pinch controls height. (Pinch modifies camera.heightOffset value.)
         */ this.axisPinchControlHeight = false;
        /**
         * Pinch controls angle. (Pinch modifies camera.rotationOffset value.)
         */ this.axisPinchControlRotation = false;
        /**
         * Log error messages if basic misconfiguration has occurred.
         */ this.warningEnable = true;
        /* Check for obvious misconfiguration. */ this._warningCounter = 0;
    }
    /**
     * Gets the class name of the current input.
     * @returns the class name
     */ getClassName() {
        return "FollowCameraPointersInput";
    }
    onTouch(pointA, offsetX, offsetY) {
        this._warning();
        if (this.axisXControlRotation) {
            this.camera.rotationOffset += offsetX / this.angularSensibilityX;
        } else if (this.axisYControlRotation) {
            this.camera.rotationOffset += offsetY / this.angularSensibilityX;
        }
        if (this.axisXControlHeight) {
            this.camera.heightOffset += offsetX / this.angularSensibilityY;
        } else if (this.axisYControlHeight) {
            this.camera.heightOffset += offsetY / this.angularSensibilityY;
        }
        if (this.axisXControlRadius) {
            this.camera.radius -= offsetX / this.angularSensibilityY;
        } else if (this.axisYControlRadius) {
            this.camera.radius -= offsetY / this.angularSensibilityY;
        }
    }
    onMultiTouch(pointA, pointB, previousPinchSquaredDistance, pinchSquaredDistance, previousMultiTouchPanPosition, multiTouchPanPosition) {
        if (previousPinchSquaredDistance === 0 && previousMultiTouchPanPosition === null) {
            // First time this method is called for new pinch.
            // Next time this is called there will be a
            // previousPinchSquaredDistance and pinchSquaredDistance to compare.
            return;
        }
        if (pinchSquaredDistance === 0 && multiTouchPanPosition === null) {
            // Last time this method is called at the end of a pinch.
            return;
        }
        let pinchDelta = (pinchSquaredDistance - previousPinchSquaredDistance) / (this.pinchPrecision * (this.angularSensibilityX + this.angularSensibilityY) / 2);
        if (this.pinchDeltaPercentage) {
            pinchDelta *= 0.01 * this.pinchDeltaPercentage;
            if (this.axisPinchControlRotation) {
                this.camera.rotationOffset += pinchDelta * this.camera.rotationOffset;
            }
            if (this.axisPinchControlHeight) {
                this.camera.heightOffset += pinchDelta * this.camera.heightOffset;
            }
            if (this.axisPinchControlRadius) {
                this.camera.radius -= pinchDelta * this.camera.radius;
            }
        } else {
            if (this.axisPinchControlRotation) {
                this.camera.rotationOffset += pinchDelta;
            }
            if (this.axisPinchControlHeight) {
                this.camera.heightOffset += pinchDelta;
            }
            if (this.axisPinchControlRadius) {
                this.camera.radius -= pinchDelta;
            }
        }
    }
    _warning() {
        if (!this.warningEnable || this._warningCounter++ % 100 !== 0) {
            return;
        }
        const warn = "It probably only makes sense to control ONE camera " + "property with each pointer axis. Set 'warningEnable = false' " + "if you are sure. Currently enabled: ";
        if (+this.axisXControlRotation + +this.axisXControlHeight + +this.axisXControlRadius <= 1) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Warn(warn + "axisXControlRotation: " + this.axisXControlRotation + ", axisXControlHeight: " + this.axisXControlHeight + ", axisXControlRadius: " + this.axisXControlRadius);
        }
        if (+this.axisYControlRotation + +this.axisYControlHeight + +this.axisYControlRadius <= 1) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Warn(warn + "axisYControlRotation: " + this.axisYControlRotation + ", axisYControlHeight: " + this.axisYControlHeight + ", axisYControlRadius: " + this.axisYControlRadius);
        }
        if (+this.axisPinchControlRotation + +this.axisPinchControlHeight + +this.axisPinchControlRadius <= 1) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Warn(warn + "axisPinchControlRotation: " + this.axisPinchControlRotation + ", axisPinchControlHeight: " + this.axisPinchControlHeight + ", axisPinchControlRadius: " + this.axisPinchControlRadius);
        }
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], FollowCameraPointersInput.prototype, "angularSensibilityX", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], FollowCameraPointersInput.prototype, "angularSensibilityY", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], FollowCameraPointersInput.prototype, "pinchPrecision", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], FollowCameraPointersInput.prototype, "pinchDeltaPercentage", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], FollowCameraPointersInput.prototype, "axisXControlRadius", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], FollowCameraPointersInput.prototype, "axisXControlHeight", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], FollowCameraPointersInput.prototype, "axisXControlRotation", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], FollowCameraPointersInput.prototype, "axisYControlRadius", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], FollowCameraPointersInput.prototype, "axisYControlHeight", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], FollowCameraPointersInput.prototype, "axisYControlRotation", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], FollowCameraPointersInput.prototype, "axisPinchControlRadius", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], FollowCameraPointersInput.prototype, "axisPinchControlHeight", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], FollowCameraPointersInput.prototype, "axisPinchControlRotation", void 0);
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$cameraInputsManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CameraInputTypes"]["FollowCameraPointersInput"] = FollowCameraPointersInput; //# sourceMappingURL=followCameraPointersInput.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Inputs/freeCameraKeyboardMoveInput.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FreeCameraKeyboardMoveInput",
    ()=>FreeCameraKeyboardMoveInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/decorators.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$cameraInputsManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/cameraInputsManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Events$2f$keyboardEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Events/keyboardEvents.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/tools.js [app-client] (ecmascript)");
;
;
;
;
;
;
class FreeCameraKeyboardMoveInput {
    constructor(){
        /**
         * Gets or Set the list of keyboard keys used to control the forward move of the camera.
         */ this.keysUp = [
            38
        ];
        /**
         * Gets or Set the list of keyboard keys used to control the upward move of the camera.
         */ this.keysUpward = [
            33
        ];
        /**
         * Gets or Set the list of keyboard keys used to control the backward move of the camera.
         */ this.keysDown = [
            40
        ];
        /**
         * Gets or Set the list of keyboard keys used to control the downward move of the camera.
         */ this.keysDownward = [
            34
        ];
        /**
         * Gets or Set the list of keyboard keys used to control the left strafe move of the camera.
         */ this.keysLeft = [
            37
        ];
        /**
         * Gets or Set the list of keyboard keys used to control the right strafe move of the camera.
         */ this.keysRight = [
            39
        ];
        /**
         * Defines the pointer angular sensibility  along the X and Y axis or how fast is the camera rotating.
         */ this.rotationSpeed = 0.5;
        /**
         * Gets or Set the list of keyboard keys used to control the left rotation move of the camera.
         */ this.keysRotateLeft = [];
        /**
         * Gets or Set the list of keyboard keys used to control the right rotation move of the camera.
         */ this.keysRotateRight = [];
        /**
         * Gets or Set the list of keyboard keys used to control the up rotation move of the camera.
         */ this.keysRotateUp = [];
        /**
         * Gets or Set the list of keyboard keys used to control the down rotation move of the camera.
         */ this.keysRotateDown = [];
        this._keys = new Array();
    }
    /**
     * Attach the input controls to a specific dom element to get the input from.
     * @param noPreventDefault Defines whether event caught by the controls should call preventdefault() (https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)
     */ attachControl(noPreventDefault) {
        noPreventDefault = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tools"].BackCompatCameraNoPreventDefault(arguments);
        if (this._onCanvasBlurObserver) {
            return;
        }
        this._scene = this.camera.getScene();
        this._engine = this._scene.getEngine();
        this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add(()=>{
            this._keys.length = 0;
        });
        this._onKeyboardObserver = this._scene.onKeyboardObservable.add((info)=>{
            const evt = info.event;
            if (!evt.metaKey) {
                if (info.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Events$2f$keyboardEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KeyboardEventTypes"].KEYDOWN) {
                    if (this.keysUp.indexOf(evt.keyCode) !== -1 || this.keysDown.indexOf(evt.keyCode) !== -1 || this.keysLeft.indexOf(evt.keyCode) !== -1 || this.keysRight.indexOf(evt.keyCode) !== -1 || this.keysUpward.indexOf(evt.keyCode) !== -1 || this.keysDownward.indexOf(evt.keyCode) !== -1 || this.keysRotateLeft.indexOf(evt.keyCode) !== -1 || this.keysRotateRight.indexOf(evt.keyCode) !== -1 || this.keysRotateUp.indexOf(evt.keyCode) !== -1 || this.keysRotateDown.indexOf(evt.keyCode) !== -1) {
                        const index = this._keys.indexOf(evt.keyCode);
                        if (index === -1) {
                            this._keys.push(evt.keyCode);
                        }
                        if (!noPreventDefault) {
                            evt.preventDefault();
                        }
                    }
                } else {
                    if (this.keysUp.indexOf(evt.keyCode) !== -1 || this.keysDown.indexOf(evt.keyCode) !== -1 || this.keysLeft.indexOf(evt.keyCode) !== -1 || this.keysRight.indexOf(evt.keyCode) !== -1 || this.keysUpward.indexOf(evt.keyCode) !== -1 || this.keysDownward.indexOf(evt.keyCode) !== -1 || this.keysRotateLeft.indexOf(evt.keyCode) !== -1 || this.keysRotateRight.indexOf(evt.keyCode) !== -1 || this.keysRotateUp.indexOf(evt.keyCode) !== -1 || this.keysRotateDown.indexOf(evt.keyCode) !== -1) {
                        const index = this._keys.indexOf(evt.keyCode);
                        if (index >= 0) {
                            this._keys.splice(index, 1);
                        }
                        if (!noPreventDefault) {
                            evt.preventDefault();
                        }
                    }
                }
            }
        });
    }
    /**
     * Detach the current controls from the specified dom element.
     */ detachControl() {
        if (this._scene) {
            if (this._onKeyboardObserver) {
                this._scene.onKeyboardObservable.remove(this._onKeyboardObserver);
            }
            if (this._onCanvasBlurObserver) {
                this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver);
            }
            this._onKeyboardObserver = null;
            this._onCanvasBlurObserver = null;
        }
        this._keys.length = 0;
    }
    /**
     * Update the current camera state depending on the inputs that have been used this frame.
     * This is a dynamically created lambda to avoid the performance penalty of looping for inputs in the render loop.
     */ checkInputs() {
        if (this._onKeyboardObserver) {
            const camera = this.camera;
            // Keyboard
            for(let index = 0; index < this._keys.length; index++){
                const keyCode = this._keys[index];
                const speed = camera._computeLocalCameraSpeed();
                if (this.keysLeft.indexOf(keyCode) !== -1) {
                    camera._localDirection.copyFromFloats(-speed, 0, 0);
                } else if (this.keysUp.indexOf(keyCode) !== -1) {
                    camera._localDirection.copyFromFloats(0, 0, speed);
                } else if (this.keysRight.indexOf(keyCode) !== -1) {
                    camera._localDirection.copyFromFloats(speed, 0, 0);
                } else if (this.keysDown.indexOf(keyCode) !== -1) {
                    camera._localDirection.copyFromFloats(0, 0, -speed);
                } else if (this.keysUpward.indexOf(keyCode) !== -1) {
                    camera._localDirection.copyFromFloats(0, speed, 0);
                } else if (this.keysDownward.indexOf(keyCode) !== -1) {
                    camera._localDirection.copyFromFloats(0, -speed, 0);
                } else if (this.keysRotateLeft.indexOf(keyCode) !== -1) {
                    camera._localDirection.copyFromFloats(0, 0, 0);
                    camera.cameraRotation.y -= this._getLocalRotation();
                } else if (this.keysRotateRight.indexOf(keyCode) !== -1) {
                    camera._localDirection.copyFromFloats(0, 0, 0);
                    camera.cameraRotation.y += this._getLocalRotation();
                } else if (this.keysRotateUp.indexOf(keyCode) !== -1) {
                    camera._localDirection.copyFromFloats(0, 0, 0);
                    camera.cameraRotation.x -= this._getLocalRotation();
                } else if (this.keysRotateDown.indexOf(keyCode) !== -1) {
                    camera._localDirection.copyFromFloats(0, 0, 0);
                    camera.cameraRotation.x += this._getLocalRotation();
                }
                if (camera.getScene().useRightHandedSystem) {
                    camera._localDirection.z *= -1;
                }
                camera.getViewMatrix().invertToRef(camera._cameraTransformMatrix);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].TransformNormalToRef(camera._localDirection, camera._cameraTransformMatrix, camera._transformedDirection);
                camera.cameraDirection.addInPlace(camera._transformedDirection);
            }
        }
    }
    /**
     * Gets the class name of the current input.
     * @returns the class name
     */ getClassName() {
        return "FreeCameraKeyboardMoveInput";
    }
    /** @internal */ _onLostFocus() {
        this._keys.length = 0;
    }
    /**
     * Get the friendly name associated with the input class.
     * @returns the input friendly name
     */ getSimpleName() {
        return "keyboard";
    }
    _getLocalRotation() {
        const handednessMultiplier = this.camera._calculateHandednessMultiplier();
        const rotation = this.rotationSpeed * this._engine.getDeltaTime() / 1000 * handednessMultiplier;
        return rotation;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], FreeCameraKeyboardMoveInput.prototype, "keysUp", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], FreeCameraKeyboardMoveInput.prototype, "keysUpward", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], FreeCameraKeyboardMoveInput.prototype, "keysDown", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], FreeCameraKeyboardMoveInput.prototype, "keysDownward", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], FreeCameraKeyboardMoveInput.prototype, "keysLeft", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], FreeCameraKeyboardMoveInput.prototype, "keysRight", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], FreeCameraKeyboardMoveInput.prototype, "rotationSpeed", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], FreeCameraKeyboardMoveInput.prototype, "keysRotateLeft", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], FreeCameraKeyboardMoveInput.prototype, "keysRotateRight", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], FreeCameraKeyboardMoveInput.prototype, "keysRotateUp", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], FreeCameraKeyboardMoveInput.prototype, "keysRotateDown", void 0);
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$cameraInputsManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CameraInputTypes"]["FreeCameraKeyboardMoveInput"] = FreeCameraKeyboardMoveInput; //# sourceMappingURL=freeCameraKeyboardMoveInput.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Inputs/freeCameraMouseInput.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FreeCameraMouseInput",
    ()=>FreeCameraMouseInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/observable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/decorators.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$cameraInputsManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/cameraInputsManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Events$2f$pointerEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Events/pointerEvents.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/tools.js [app-client] (ecmascript)");
;
;
;
;
;
;
class FreeCameraMouseInput {
    /**
     * Manage the mouse inputs to control the movement of a free camera.
     * @see https://doc.babylonjs.com/features/featuresDeepDive/cameras/customizingCameraInputs
     * @param touchEnabled Defines if touch is enabled or not
     */ constructor(/**
     * [true] Define if touch is enabled in the mouse input
     */ touchEnabled = true){
        this.touchEnabled = touchEnabled;
        /**
         * Defines the buttons associated with the input to handle camera move.
         */ this.buttons = [
            0,
            1,
            2
        ];
        /**
         * Defines the pointer angular sensibility  along the X and Y axis or how fast is the camera rotating.
         */ this.angularSensibility = 2000.0;
        this._previousPosition = null;
        /**
         * Observable for when a pointer move event occurs containing the move offset
         */ this.onPointerMovedObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * @internal
         * If the camera should be rotated automatically based on pointer movement
         */ this._allowCameraRotation = true;
        this._currentActiveButton = -1;
        this._activePointerId = -1;
    }
    /**
     * Attach the input controls to a specific dom element to get the input from.
     * @param noPreventDefault Defines whether event caught by the controls should call preventdefault() (https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)
     */ attachControl(noPreventDefault) {
        noPreventDefault = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tools"].BackCompatCameraNoPreventDefault(arguments);
        const engine = this.camera.getEngine();
        const element = engine.getInputElement();
        if (!this._pointerInput) {
            this._pointerInput = (p)=>{
                const evt = p.event;
                const isTouch = evt.pointerType === "touch";
                if (!this.touchEnabled && isTouch) {
                    return;
                }
                if (p.type !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Events$2f$pointerEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointerEventTypes"].POINTERMOVE && this.buttons.indexOf(evt.button) === -1) {
                    return;
                }
                const srcElement = evt.target;
                if (p.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Events$2f$pointerEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointerEventTypes"].POINTERDOWN) {
                    // If the input is touch with more than one touch OR if the input is mouse and there is already an active button, return
                    if (isTouch && this._activePointerId !== -1 || !isTouch && this._currentActiveButton !== -1) {
                        return;
                    }
                    this._activePointerId = evt.pointerId;
                    try {
                        srcElement?.setPointerCapture(evt.pointerId);
                    } catch (e) {
                    //Nothing to do with the error. Execution will continue.
                    }
                    if (this._currentActiveButton === -1) {
                        this._currentActiveButton = evt.button;
                    }
                    this._previousPosition = {
                        x: evt.clientX,
                        y: evt.clientY
                    };
                    if (!noPreventDefault) {
                        evt.preventDefault();
                        if (element) {
                            element.focus();
                        }
                    }
                    // This is required to move while pointer button is down
                    if (engine.isPointerLock && this._onMouseMove) {
                        this._onMouseMove(p.event);
                    }
                } else if (p.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Events$2f$pointerEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointerEventTypes"].POINTERUP) {
                    // If input is touch with a different touch id OR if input is mouse with a different button, return
                    if (isTouch && this._activePointerId !== evt.pointerId || !isTouch && this._currentActiveButton !== evt.button) {
                        return;
                    }
                    try {
                        srcElement?.releasePointerCapture(evt.pointerId);
                    } catch (e) {
                    //Nothing to do with the error.
                    }
                    this._currentActiveButton = -1;
                    this._previousPosition = null;
                    if (!noPreventDefault) {
                        evt.preventDefault();
                    }
                    this._activePointerId = -1;
                } else if (p.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Events$2f$pointerEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointerEventTypes"].POINTERMOVE && (this._activePointerId === evt.pointerId || !isTouch)) {
                    if (engine.isPointerLock && this._onMouseMove) {
                        this._onMouseMove(p.event);
                    } else if (this._previousPosition) {
                        const handednessMultiplier = this.camera._calculateHandednessMultiplier();
                        const offsetX = (evt.clientX - this._previousPosition.x) * handednessMultiplier;
                        const offsetY = (evt.clientY - this._previousPosition.y) * handednessMultiplier;
                        if (this._allowCameraRotation) {
                            this.camera.cameraRotation.y += offsetX / this.angularSensibility;
                            this.camera.cameraRotation.x += offsetY / this.angularSensibility;
                        }
                        this.onPointerMovedObservable.notifyObservers({
                            offsetX: offsetX,
                            offsetY: offsetY
                        });
                        this._previousPosition = {
                            x: evt.clientX,
                            y: evt.clientY
                        };
                        if (!noPreventDefault) {
                            evt.preventDefault();
                        }
                    }
                }
            };
        }
        this._onMouseMove = (evt)=>{
            if (!engine.isPointerLock) {
                return;
            }
            const handednessMultiplier = this.camera._calculateHandednessMultiplier();
            this.camera.cameraRotation.y += evt.movementX * handednessMultiplier / this.angularSensibility;
            this.camera.cameraRotation.x += evt.movementY * handednessMultiplier / this.angularSensibility;
            this._previousPosition = null;
            if (!noPreventDefault) {
                evt.preventDefault();
            }
        };
        this._observer = this.camera.getScene()._inputManager._addCameraPointerObserver(this._pointerInput, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Events$2f$pointerEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointerEventTypes"].POINTERDOWN | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Events$2f$pointerEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointerEventTypes"].POINTERUP | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Events$2f$pointerEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointerEventTypes"].POINTERMOVE);
        if (element) {
            this._contextMenuBind = (evt)=>this.onContextMenu(evt);
            element.addEventListener("contextmenu", this._contextMenuBind, false); // TODO: We need to figure out how to handle this for Native
        }
    }
    /**
     * Called on JS contextmenu event.
     * Override this method to provide functionality.
     * @param evt the context menu event
     */ onContextMenu(evt) {
        evt.preventDefault();
    }
    /**
     * Detach the current controls from the specified dom element.
     */ detachControl() {
        if (this._observer) {
            this.camera.getScene()._inputManager._removeCameraPointerObserver(this._observer);
            if (this._contextMenuBind) {
                const engine = this.camera.getEngine();
                const element = engine.getInputElement();
                if (element) {
                    element.removeEventListener("contextmenu", this._contextMenuBind);
                }
            }
            if (this.onPointerMovedObservable) {
                this.onPointerMovedObservable.clear();
            }
            this._observer = null;
            this._onMouseMove = null;
            this._previousPosition = null;
        }
        this._activePointerId = -1;
        this._currentActiveButton = -1;
    }
    /**
     * Gets the class name of the current input.
     * @returns the class name
     */ getClassName() {
        return "FreeCameraMouseInput";
    }
    /**
     * Get the friendly name associated with the input class.
     * @returns the input friendly name
     */ getSimpleName() {
        return "mouse";
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], FreeCameraMouseInput.prototype, "buttons", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], FreeCameraMouseInput.prototype, "angularSensibility", void 0);
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$cameraInputsManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CameraInputTypes"]["FreeCameraMouseInput"] = FreeCameraMouseInput; //# sourceMappingURL=freeCameraMouseInput.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Inputs/freeCameraMouseWheelInput.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FreeCameraMouseWheelInput",
    ()=>FreeCameraMouseWheelInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/decorators.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$cameraInputsManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/cameraInputsManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$BaseCameraMouseWheelInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Inputs/BaseCameraMouseWheelInput.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
;
;
;
;
;
// eslint-disable-next-line @typescript-eslint/naming-convention
var _CameraProperty;
(function(_CameraProperty) {
    _CameraProperty[_CameraProperty["MoveRelative"] = 0] = "MoveRelative";
    _CameraProperty[_CameraProperty["RotateRelative"] = 1] = "RotateRelative";
    _CameraProperty[_CameraProperty["MoveScene"] = 2] = "MoveScene";
})(_CameraProperty || (_CameraProperty = {}));
class FreeCameraMouseWheelInput extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$BaseCameraMouseWheelInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseCameraMouseWheelInput"] {
    constructor(){
        super(...arguments);
        this._moveRelative = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        this._rotateRelative = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        this._moveScene = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        /**
         * These are set to the desired default behaviour.
         */ this._wheelXAction = _CameraProperty.MoveRelative;
        this._wheelXActionCoordinate = 0 /* Coordinate.X */ ;
        this._wheelYAction = _CameraProperty.MoveRelative;
        this._wheelYActionCoordinate = 2 /* Coordinate.Z */ ;
        this._wheelZAction = null;
        this._wheelZActionCoordinate = null;
    }
    /**
     * Gets the class name of the current input.
     * @returns the class name
     */ getClassName() {
        return "FreeCameraMouseWheelInput";
    }
    /**
     * Set which movement axis (relative to camera's orientation) the mouse
     * wheel's X axis controls.
     * @param axis The axis to be moved. Set null to clear.
     */ set wheelXMoveRelative(axis) {
        if (axis === null && this._wheelXAction !== _CameraProperty.MoveRelative) {
            // Attempting to clear different _wheelXAction.
            return;
        }
        this._wheelXAction = _CameraProperty.MoveRelative;
        this._wheelXActionCoordinate = axis;
    }
    /**
     * Get the configured movement axis (relative to camera's orientation) the
     * mouse wheel's X axis controls.
     * @returns The configured axis or null if none.
     */ get wheelXMoveRelative() {
        if (this._wheelXAction !== _CameraProperty.MoveRelative) {
            return null;
        }
        return this._wheelXActionCoordinate;
    }
    /**
     * Set which movement axis (relative to camera's orientation) the mouse
     * wheel's Y axis controls.
     * @param axis The axis to be moved. Set null to clear.
     */ set wheelYMoveRelative(axis) {
        if (axis === null && this._wheelYAction !== _CameraProperty.MoveRelative) {
            // Attempting to clear different _wheelYAction.
            return;
        }
        this._wheelYAction = _CameraProperty.MoveRelative;
        this._wheelYActionCoordinate = axis;
    }
    /**
     * Get the configured movement axis (relative to camera's orientation) the
     * mouse wheel's Y axis controls.
     * @returns The configured axis or null if none.
     */ get wheelYMoveRelative() {
        if (this._wheelYAction !== _CameraProperty.MoveRelative) {
            return null;
        }
        return this._wheelYActionCoordinate;
    }
    /**
     * Set which movement axis (relative to camera's orientation) the mouse
     * wheel's Z axis controls.
     * @param axis The axis to be moved. Set null to clear.
     */ set wheelZMoveRelative(axis) {
        if (axis === null && this._wheelZAction !== _CameraProperty.MoveRelative) {
            // Attempting to clear different _wheelZAction.
            return;
        }
        this._wheelZAction = _CameraProperty.MoveRelative;
        this._wheelZActionCoordinate = axis;
    }
    /**
     * Get the configured movement axis (relative to camera's orientation) the
     * mouse wheel's Z axis controls.
     * @returns The configured axis or null if none.
     */ get wheelZMoveRelative() {
        if (this._wheelZAction !== _CameraProperty.MoveRelative) {
            return null;
        }
        return this._wheelZActionCoordinate;
    }
    /**
     * Set which rotation axis (relative to camera's orientation) the mouse
     * wheel's X axis controls.
     * @param axis The axis to be moved. Set null to clear.
     */ set wheelXRotateRelative(axis) {
        if (axis === null && this._wheelXAction !== _CameraProperty.RotateRelative) {
            // Attempting to clear different _wheelXAction.
            return;
        }
        this._wheelXAction = _CameraProperty.RotateRelative;
        this._wheelXActionCoordinate = axis;
    }
    /**
     * Get the configured rotation axis (relative to camera's orientation) the
     * mouse wheel's X axis controls.
     * @returns The configured axis or null if none.
     */ get wheelXRotateRelative() {
        if (this._wheelXAction !== _CameraProperty.RotateRelative) {
            return null;
        }
        return this._wheelXActionCoordinate;
    }
    /**
     * Set which rotation axis (relative to camera's orientation) the mouse
     * wheel's Y axis controls.
     * @param axis The axis to be moved. Set null to clear.
     */ set wheelYRotateRelative(axis) {
        if (axis === null && this._wheelYAction !== _CameraProperty.RotateRelative) {
            // Attempting to clear different _wheelYAction.
            return;
        }
        this._wheelYAction = _CameraProperty.RotateRelative;
        this._wheelYActionCoordinate = axis;
    }
    /**
     * Get the configured rotation axis (relative to camera's orientation) the
     * mouse wheel's Y axis controls.
     * @returns The configured axis or null if none.
     */ get wheelYRotateRelative() {
        if (this._wheelYAction !== _CameraProperty.RotateRelative) {
            return null;
        }
        return this._wheelYActionCoordinate;
    }
    /**
     * Set which rotation axis (relative to camera's orientation) the mouse
     * wheel's Z axis controls.
     * @param axis The axis to be moved. Set null to clear.
     */ set wheelZRotateRelative(axis) {
        if (axis === null && this._wheelZAction !== _CameraProperty.RotateRelative) {
            // Attempting to clear different _wheelZAction.
            return;
        }
        this._wheelZAction = _CameraProperty.RotateRelative;
        this._wheelZActionCoordinate = axis;
    }
    /**
     * Get the configured rotation axis (relative to camera's orientation) the
     * mouse wheel's Z axis controls.
     * @returns The configured axis or null if none.
     */ get wheelZRotateRelative() {
        if (this._wheelZAction !== _CameraProperty.RotateRelative) {
            return null;
        }
        return this._wheelZActionCoordinate;
    }
    /**
     * Set which movement axis (relative to the scene) the mouse wheel's X axis
     * controls.
     * @param axis The axis to be moved. Set null to clear.
     */ set wheelXMoveScene(axis) {
        if (axis === null && this._wheelXAction !== _CameraProperty.MoveScene) {
            // Attempting to clear different _wheelXAction.
            return;
        }
        this._wheelXAction = _CameraProperty.MoveScene;
        this._wheelXActionCoordinate = axis;
    }
    /**
     * Get the configured movement axis (relative to the scene) the mouse wheel's
     * X axis controls.
     * @returns The configured axis or null if none.
     */ get wheelXMoveScene() {
        if (this._wheelXAction !== _CameraProperty.MoveScene) {
            return null;
        }
        return this._wheelXActionCoordinate;
    }
    /**
     * Set which movement axis (relative to the scene) the mouse wheel's Y axis
     * controls.
     * @param axis The axis to be moved. Set null to clear.
     */ set wheelYMoveScene(axis) {
        if (axis === null && this._wheelYAction !== _CameraProperty.MoveScene) {
            // Attempting to clear different _wheelYAction.
            return;
        }
        this._wheelYAction = _CameraProperty.MoveScene;
        this._wheelYActionCoordinate = axis;
    }
    /**
     * Get the configured movement axis (relative to the scene) the mouse wheel's
     * Y axis controls.
     * @returns The configured axis or null if none.
     */ get wheelYMoveScene() {
        if (this._wheelYAction !== _CameraProperty.MoveScene) {
            return null;
        }
        return this._wheelYActionCoordinate;
    }
    /**
     * Set which movement axis (relative to the scene) the mouse wheel's Z axis
     * controls.
     * @param axis The axis to be moved. Set null to clear.
     */ set wheelZMoveScene(axis) {
        if (axis === null && this._wheelZAction !== _CameraProperty.MoveScene) {
            // Attempting to clear different _wheelZAction.
            return;
        }
        this._wheelZAction = _CameraProperty.MoveScene;
        this._wheelZActionCoordinate = axis;
    }
    /**
     * Get the configured movement axis (relative to the scene) the mouse wheel's
     * Z axis controls.
     * @returns The configured axis or null if none.
     */ get wheelZMoveScene() {
        if (this._wheelZAction !== _CameraProperty.MoveScene) {
            return null;
        }
        return this._wheelZActionCoordinate;
    }
    /**
     * Called for each rendered frame.
     */ checkInputs() {
        if (this._wheelDeltaX === 0 && this._wheelDeltaY === 0 && this._wheelDeltaZ == 0) {
            return;
        }
        // Clear the camera properties that we might be updating.
        this._moveRelative.setAll(0);
        this._rotateRelative.setAll(0);
        this._moveScene.setAll(0);
        // Set the camera properties that are to be updated.
        this._updateCamera();
        if (this.camera.getScene().useRightHandedSystem) {
            // TODO: Does this need done for worldUpdate too?
            this._moveRelative.z *= -1;
        }
        // Convert updates relative to camera to world position update.
        const cameraTransformMatrix = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].Zero();
        this.camera.getViewMatrix().invertToRef(cameraTransformMatrix);
        const transformedDirection = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].TransformNormalToRef(this._moveRelative, cameraTransformMatrix, transformedDirection);
        // Apply updates to camera position.
        this.camera.cameraRotation.x += this._rotateRelative.x / 200;
        this.camera.cameraRotation.y += this._rotateRelative.y / 200;
        this.camera.cameraDirection.addInPlace(transformedDirection);
        this.camera.cameraDirection.addInPlace(this._moveScene);
        // Call the base class implementation to handle observers and do cleanup.
        super.checkInputs();
    }
    /**
     * Update the camera according to any configured properties for the 3
     * mouse-wheel axis.
     */ _updateCamera() {
        // Do the camera updates for each of the 3 touch-wheel axis.
        this._updateCameraProperty(this._wheelDeltaX, this._wheelXAction, this._wheelXActionCoordinate);
        this._updateCameraProperty(this._wheelDeltaY, this._wheelYAction, this._wheelYActionCoordinate);
        this._updateCameraProperty(this._wheelDeltaZ, this._wheelZAction, this._wheelZActionCoordinate);
    }
    /**
     * Update one property of the camera.
     * @param value
     * @param cameraProperty
     * @param coordinate
     */ _updateCameraProperty(/* Mouse-wheel delta. */ value, /* Camera property to be changed. */ cameraProperty, /* Axis of Camera property to be changed. */ coordinate) {
        if (value === 0) {
            // Mouse wheel has not moved.
            return;
        }
        if (cameraProperty === null || coordinate === null) {
            // Mouse wheel axis not configured.
            return;
        }
        let action = null;
        switch(cameraProperty){
            case _CameraProperty.MoveRelative:
                action = this._moveRelative;
                break;
            case _CameraProperty.RotateRelative:
                action = this._rotateRelative;
                break;
            case _CameraProperty.MoveScene:
                action = this._moveScene;
                break;
        }
        switch(coordinate){
            case 0 /* Coordinate.X */ :
                action.set(value, 0, 0);
                break;
            case 1 /* Coordinate.Y */ :
                action.set(0, value, 0);
                break;
            case 2 /* Coordinate.Z */ :
                action.set(0, 0, value);
                break;
        }
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], FreeCameraMouseWheelInput.prototype, "wheelXMoveRelative", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], FreeCameraMouseWheelInput.prototype, "wheelYMoveRelative", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], FreeCameraMouseWheelInput.prototype, "wheelZMoveRelative", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], FreeCameraMouseWheelInput.prototype, "wheelXRotateRelative", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], FreeCameraMouseWheelInput.prototype, "wheelYRotateRelative", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], FreeCameraMouseWheelInput.prototype, "wheelZRotateRelative", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], FreeCameraMouseWheelInput.prototype, "wheelXMoveScene", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], FreeCameraMouseWheelInput.prototype, "wheelYMoveScene", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], FreeCameraMouseWheelInput.prototype, "wheelZMoveScene", null);
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$cameraInputsManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CameraInputTypes"]["FreeCameraMouseWheelInput"] = FreeCameraMouseWheelInput; //# sourceMappingURL=freeCameraMouseWheelInput.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Inputs/freeCameraTouchInput.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FreeCameraTouchInput",
    ()=>FreeCameraTouchInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/decorators.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$cameraInputsManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/cameraInputsManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Events$2f$pointerEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Events/pointerEvents.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/tools.js [app-client] (ecmascript)");
;
;
;
;
;
;
class FreeCameraTouchInput {
    /**
     * Manage the touch inputs to control the movement of a free camera.
     * @see https://doc.babylonjs.com/features/featuresDeepDive/cameras/customizingCameraInputs
     * @param allowMouse Defines if mouse events can be treated as touch events
     */ constructor(/**
     * [false] Define if mouse events can be treated as touch events
     */ allowMouse = false){
        this.allowMouse = allowMouse;
        /**
         * Defines the touch sensibility for rotation.
         * The lower the faster.
         */ this.touchAngularSensibility = 200000.0;
        /**
         * Defines the touch sensibility for move.
         * The lower the faster.
         */ this.touchMoveSensibility = 250.0;
        /**
         * Swap touch actions so that one touch is used for rotation and multiple for movement
         */ this.singleFingerRotate = false;
        this._offsetX = null;
        this._offsetY = null;
        this._pointerPressed = new Array();
        this._isSafari = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tools"].IsSafari();
    }
    /**
     * Attach the input controls to a specific dom element to get the input from.
     * @param noPreventDefault Defines whether event caught by the controls should call preventdefault() (https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)
     */ attachControl(noPreventDefault) {
        noPreventDefault = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tools"].BackCompatCameraNoPreventDefault(arguments);
        let previousPosition = null;
        if (this._pointerInput === undefined) {
            this._onLostFocus = ()=>{
                this._offsetX = null;
                this._offsetY = null;
            };
            this._pointerInput = (p)=>{
                const evt = p.event;
                const isMouseEvent = evt.pointerType === "mouse" || this._isSafari && typeof evt.pointerType === "undefined";
                if (!this.allowMouse && isMouseEvent) {
                    return;
                }
                if (p.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Events$2f$pointerEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointerEventTypes"].POINTERDOWN) {
                    if (!noPreventDefault) {
                        evt.preventDefault();
                    }
                    this._pointerPressed.push(evt.pointerId);
                    if (this._pointerPressed.length !== 1) {
                        return;
                    }
                    previousPosition = {
                        x: evt.clientX,
                        y: evt.clientY
                    };
                } else if (p.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Events$2f$pointerEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointerEventTypes"].POINTERUP) {
                    if (!noPreventDefault) {
                        evt.preventDefault();
                    }
                    const index = this._pointerPressed.indexOf(evt.pointerId);
                    if (index === -1) {
                        return;
                    }
                    this._pointerPressed.splice(index, 1);
                    if (index != 0) {
                        return;
                    }
                    previousPosition = null;
                    this._offsetX = null;
                    this._offsetY = null;
                } else if (p.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Events$2f$pointerEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointerEventTypes"].POINTERMOVE) {
                    if (!noPreventDefault) {
                        evt.preventDefault();
                    }
                    if (!previousPosition) {
                        return;
                    }
                    const index = this._pointerPressed.indexOf(evt.pointerId);
                    if (index != 0) {
                        return;
                    }
                    this._offsetX = evt.clientX - previousPosition.x;
                    this._offsetY = -(evt.clientY - previousPosition.y);
                }
            };
        }
        this._observer = this.camera.getScene()._inputManager._addCameraPointerObserver(this._pointerInput, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Events$2f$pointerEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointerEventTypes"].POINTERDOWN | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Events$2f$pointerEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointerEventTypes"].POINTERUP | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Events$2f$pointerEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointerEventTypes"].POINTERMOVE);
        if (this._onLostFocus) {
            const engine = this.camera.getEngine();
            const element = engine.getInputElement();
            if (element) {
                element.addEventListener("blur", this._onLostFocus);
            }
        }
    }
    /**
     * Detach the current controls from the specified dom element.
     */ detachControl() {
        if (this._pointerInput) {
            if (this._observer) {
                this.camera.getScene()._inputManager._removeCameraPointerObserver(this._observer);
                this._observer = null;
            }
            if (this._onLostFocus) {
                const engine = this.camera.getEngine();
                const element = engine.getInputElement();
                if (element) {
                    element.removeEventListener("blur", this._onLostFocus);
                }
                this._onLostFocus = null;
            }
            this._pointerPressed.length = 0;
            this._offsetX = null;
            this._offsetY = null;
        }
    }
    /**
     * Update the current camera state depending on the inputs that have been used this frame.
     * This is a dynamically created lambda to avoid the performance penalty of looping for inputs in the render loop.
     */ checkInputs() {
        if (this._offsetX === null || this._offsetY === null) {
            return;
        }
        if (this._offsetX === 0 && this._offsetY === 0) {
            return;
        }
        const camera = this.camera;
        const handednessMultiplier = camera._calculateHandednessMultiplier();
        camera.cameraRotation.y = this._offsetX * handednessMultiplier / this.touchAngularSensibility;
        const rotateCamera = this.singleFingerRotate && this._pointerPressed.length === 1 || !this.singleFingerRotate && this._pointerPressed.length > 1;
        if (rotateCamera) {
            camera.cameraRotation.x = -(this._offsetY * handednessMultiplier) / this.touchAngularSensibility;
        } else {
            const speed = camera._computeLocalCameraSpeed();
            const direction = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, this.touchMoveSensibility !== 0 ? speed * this._offsetY / this.touchMoveSensibility : 0);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].RotationYawPitchRollToRef(camera.rotation.y, camera.rotation.x, 0, camera._cameraRotationMatrix);
            camera.cameraDirection.addInPlace(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinates(direction, camera._cameraRotationMatrix));
        }
    }
    /**
     * Gets the class name of the current input.
     * @returns the class name
     */ getClassName() {
        return "FreeCameraTouchInput";
    }
    /**
     * Get the friendly name associated with the input class.
     * @returns the input friendly name
     */ getSimpleName() {
        return "touch";
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], FreeCameraTouchInput.prototype, "touchAngularSensibility", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], FreeCameraTouchInput.prototype, "touchMoveSensibility", void 0);
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$cameraInputsManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CameraInputTypes"]["FreeCameraTouchInput"] = FreeCameraTouchInput; //# sourceMappingURL=freeCameraTouchInput.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/freeCameraInputsManager.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FreeCameraInputsManager",
    ()=>FreeCameraInputsManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$cameraInputsManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/cameraInputsManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$freeCameraKeyboardMoveInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Inputs/freeCameraKeyboardMoveInput.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$freeCameraMouseInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Inputs/freeCameraMouseInput.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$freeCameraMouseWheelInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Inputs/freeCameraMouseWheelInput.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$freeCameraTouchInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Inputs/freeCameraTouchInput.js [app-client] (ecmascript)");
;
;
;
;
;
class FreeCameraInputsManager extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$cameraInputsManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CameraInputsManager"] {
    /**
     * Instantiates a new FreeCameraInputsManager.
     * @param camera Defines the camera the inputs belong to
     */ constructor(camera){
        super(camera);
        /**
         * @internal
         */ this._mouseInput = null;
        /**
         * @internal
         */ this._mouseWheelInput = null;
    }
    /**
     * Add keyboard input support to the input manager.
     * @returns the current input manager
     */ addKeyboard() {
        this.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$freeCameraKeyboardMoveInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FreeCameraKeyboardMoveInput"]());
        return this;
    }
    /**
     * Add mouse input support to the input manager.
     * @param touchEnabled if the FreeCameraMouseInput should support touch (default: true)
     * @returns the current input manager
     */ addMouse(touchEnabled = true) {
        if (!this._mouseInput) {
            this._mouseInput = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$freeCameraMouseInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FreeCameraMouseInput"](touchEnabled);
            this.add(this._mouseInput);
        }
        return this;
    }
    /**
     * Removes the mouse input support from the manager
     * @returns the current input manager
     */ removeMouse() {
        if (this._mouseInput) {
            this.remove(this._mouseInput);
        }
        return this;
    }
    /**
     * Add mouse wheel input support to the input manager.
     * @returns the current input manager
     */ addMouseWheel() {
        if (!this._mouseWheelInput) {
            this._mouseWheelInput = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$freeCameraMouseWheelInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FreeCameraMouseWheelInput"]();
            this.add(this._mouseWheelInput);
        }
        return this;
    }
    /**
     * Removes the mouse wheel input support from the manager
     * @returns the current input manager
     */ removeMouseWheel() {
        if (this._mouseWheelInput) {
            this.remove(this._mouseWheelInput);
        }
        return this;
    }
    /**
     * Add touch input support to the input manager.
     * @returns the current input manager
     */ addTouch() {
        this.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$freeCameraTouchInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FreeCameraTouchInput"]());
        return this;
    }
    /**
     * Remove all attached input methods from a camera
     */ clear() {
        super.clear();
        this._mouseInput = null;
    }
} //# sourceMappingURL=freeCameraInputsManager.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Inputs/freeCameraDeviceOrientationInput.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FreeCameraDeviceOrientationInput",
    ()=>FreeCameraDeviceOrientationInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$cameraInputsManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/cameraInputsManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/tools.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$freeCameraInputsManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/freeCameraInputsManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/observable.js [app-client] (ecmascript)");
;
;
;
;
;
/**
 * Add orientation input support to the input manager.
 * @param smoothFactor deviceOrientation smoothing. 0: no smoothing, 1: new data ignored, 0.9 recommended for smoothing
 * @returns the current input manager
 */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$freeCameraInputsManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FreeCameraInputsManager"].prototype.addDeviceOrientation = function(smoothFactor) {
    if (!this._deviceOrientationInput) {
        this._deviceOrientationInput = new FreeCameraDeviceOrientationInput();
        if (smoothFactor) {
            this._deviceOrientationInput.smoothFactor = smoothFactor;
        }
        this.add(this._deviceOrientationInput);
    }
    return this;
};
class FreeCameraDeviceOrientationInput {
    /**
     * Can be used to detect if a device orientation sensor is available on a device
     * @param timeout amount of time in milliseconds to wait for a response from the sensor (default: infinite)
     * @returns a promise that will resolve on orientation change
     */ static async WaitForOrientationChangeAsync(timeout) {
        return await new Promise((res, rej)=>{
            let gotValue = false;
            const eventHandler = ()=>{
                window.removeEventListener("deviceorientation", eventHandler);
                gotValue = true;
                res();
            };
            // If timeout is populated reject the promise
            if (timeout) {
                setTimeout(()=>{
                    if (!gotValue) {
                        window.removeEventListener("deviceorientation", eventHandler);
                        // eslint-disable-next-line @typescript-eslint/prefer-promise-reject-errors
                        rej("WaitForOrientationChangeAsync timed out");
                    }
                }, timeout);
            }
            if (typeof DeviceOrientationEvent !== "undefined" && typeof DeviceOrientationEvent.requestPermission === "function") {
                DeviceOrientationEvent.requestPermission()// eslint-disable-next-line github/no-then
                .then((response)=>{
                    if (response == "granted") {
                        window.addEventListener("deviceorientation", eventHandler);
                    } else {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tools"].Warn("Permission not granted.");
                    }
                })// eslint-disable-next-line github/no-then
                .catch((error)=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tools"].Error(error);
                });
            } else {
                window.addEventListener("deviceorientation", eventHandler);
            }
        });
    }
    /**
     * Instantiates a new input
     * @see https://doc.babylonjs.com/features/featuresDeepDive/cameras/customizingCameraInputs
     */ constructor(){
        this._screenOrientationAngle = 0;
        this._screenQuaternion = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"]();
        this._alpha = 0;
        this._beta = 0;
        this._gamma = 0;
        /** alpha+beta+gamma smoothing. 0: no smoothing, 1: new data ignored, 0.9 recommended for smoothing */ this.smoothFactor = 0;
        /**
         * @internal
         */ this._onDeviceOrientationChangedObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]();
        this._orientationChanged = ()=>{
            this._screenOrientationAngle = window.orientation !== undefined ? +window.orientation : window.screen.orientation && window.screen.orientation["angle"] ? window.screen.orientation.angle : 0;
            this._screenOrientationAngle = -__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tools"].ToRadians(this._screenOrientationAngle / 2);
            this._screenQuaternion.copyFromFloats(0, Math.sin(this._screenOrientationAngle), 0, Math.cos(this._screenOrientationAngle));
        };
        this._deviceOrientation = (evt)=>{
            if (this.smoothFactor) {
                this._alpha = evt.alpha !== null ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tools"].SmoothAngleChange(this._alpha, evt.alpha, this.smoothFactor) : 0;
                this._beta = evt.beta !== null ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tools"].SmoothAngleChange(this._beta, evt.beta, this.smoothFactor) : 0;
                this._gamma = evt.gamma !== null ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tools"].SmoothAngleChange(this._gamma, evt.gamma, this.smoothFactor) : 0;
            } else {
                this._alpha = evt.alpha !== null ? evt.alpha : 0;
                this._beta = evt.beta !== null ? evt.beta : 0;
                this._gamma = evt.gamma !== null ? evt.gamma : 0;
            }
            if (evt.alpha !== null) {
                this._onDeviceOrientationChangedObservable.notifyObservers();
            }
        };
        this._constantTransform = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"](-Math.sqrt(0.5), 0, 0, Math.sqrt(0.5));
        this._orientationChanged();
    }
    /**
     * Define the camera controlled by the input.
     */ get camera() {
        return this._camera;
    }
    set camera(camera) {
        this._camera = camera;
        if (this._camera != null && !this._camera.rotationQuaternion) {
            this._camera.rotationQuaternion = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"]();
        }
        if (this._camera) {
            this._camera.onDisposeObservable.add(()=>{
                this._onDeviceOrientationChangedObservable.clear();
            });
        }
    }
    /**
     * Attach the input controls to a specific dom element to get the input from.
     */ attachControl() {
        const hostWindow = this.camera.getScene().getEngine().getHostWindow();
        if (hostWindow) {
            const eventHandler = ()=>{
                hostWindow.addEventListener("orientationchange", this._orientationChanged);
                hostWindow.addEventListener("deviceorientation", this._deviceOrientation);
                //In certain cases, the attach control is called AFTER orientation was changed,
                //So this is needed.
                this._orientationChanged();
            };
            if (typeof DeviceOrientationEvent !== "undefined" && typeof DeviceOrientationEvent.requestPermission === "function") {
                DeviceOrientationEvent.requestPermission()// eslint-disable-next-line github/no-then
                .then((response)=>{
                    if (response === "granted") {
                        eventHandler();
                    } else {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tools"].Warn("Permission not granted.");
                    }
                })// eslint-disable-next-line github/no-then
                .catch((error)=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tools"].Error(error);
                });
            } else {
                eventHandler();
            }
        }
    }
    /**
     * Detach the current controls from the specified dom element.
     */ detachControl() {
        window.removeEventListener("orientationchange", this._orientationChanged);
        window.removeEventListener("deviceorientation", this._deviceOrientation);
        this._alpha = 0;
    }
    /**
     * Update the current camera state depending on the inputs that have been used this frame.
     * This is a dynamically created lambda to avoid the performance penalty of looping for inputs in the render loop.
     */ checkInputs() {
        // if no device orientation provided, don't update the rotation.
        // Only testing against alpha under the assumption that orientation will never be so exact when set.
        if (!this._alpha) {
            return;
        }
        if (this._camera.rotationQuaternion) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"].RotationYawPitchRollToRef(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tools"].ToRadians(this._alpha), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tools"].ToRadians(this._beta), -__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tools"].ToRadians(this._gamma), this._camera.rotationQuaternion);
            this._camera.rotationQuaternion.multiplyInPlace(this._screenQuaternion);
            this._camera.rotationQuaternion.multiplyInPlace(this._constantTransform);
            if (this._camera.getScene().useRightHandedSystem) {
                this._camera.rotationQuaternion.y *= -1;
            } else {
                this._camera.rotationQuaternion.z *= -1;
            }
            this._camera.rotationQuaternion.w *= -1;
        }
    }
    /**
     * Gets the class name of the current input.
     * @returns the class name
     */ getClassName() {
        return "FreeCameraDeviceOrientationInput";
    }
    /**
     * Get the friendly name associated with the input class.
     * @returns the input friendly name
     */ getSimpleName() {
        return "deviceOrientation";
    }
}
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$cameraInputsManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CameraInputTypes"]["FreeCameraDeviceOrientationInput"] = FreeCameraDeviceOrientationInput; //# sourceMappingURL=freeCameraDeviceOrientationInput.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Inputs/freeCameraGamepadInput.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FreeCameraGamepadInput",
    ()=>FreeCameraGamepadInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/decorators.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$cameraInputsManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/cameraInputsManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gamepads$2f$gamepad$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Gamepads/gamepad.js [app-client] (ecmascript)");
;
;
;
;
;
class FreeCameraGamepadInput {
    constructor(){
        /**
         * Defines the gamepad rotation sensibility.
         * This is the threshold from when rotation starts to be accounted for to prevent jittering.
         */ this.gamepadAngularSensibility = 200;
        /**
         * Defines the gamepad move sensibility.
         * This is the threshold from when moving starts to be accounted for for to prevent jittering.
         */ this.gamepadMoveSensibility = 40;
        /**
         * Defines the minimum value at which any analog stick input is ignored.
         * Note: This value should only be a value between 0 and 1.
         */ this.deadzoneDelta = 0.1;
        this._yAxisScale = 1.0;
        this._cameraTransform = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].Identity();
        this._deltaTransform = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        this._vector3 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        this._vector2 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"].Zero();
    }
    /**
     * Gets or sets a boolean indicating that Yaxis (for right stick) should be inverted
     */ get invertYAxis() {
        return this._yAxisScale !== 1.0;
    }
    set invertYAxis(value) {
        this._yAxisScale = value ? -1.0 : 1.0;
    }
    /**
     * Attach the input controls to a specific dom element to get the input from.
     */ attachControl() {
        const manager = this.camera.getScene().gamepadManager;
        this._onGamepadConnectedObserver = manager.onGamepadConnectedObservable.add((gamepad)=>{
            if (gamepad.type !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gamepads$2f$gamepad$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Gamepad"].POSE_ENABLED) {
                // prioritize XBOX gamepads.
                if (!this.gamepad || gamepad.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gamepads$2f$gamepad$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Gamepad"].XBOX) {
                    this.gamepad = gamepad;
                }
            }
        });
        this._onGamepadDisconnectedObserver = manager.onGamepadDisconnectedObservable.add((gamepad)=>{
            if (this.gamepad === gamepad) {
                this.gamepad = null;
            }
        });
        // check if there are already other controllers connected
        this.gamepad = manager.getGamepadByType(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gamepads$2f$gamepad$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Gamepad"].XBOX);
        // if no xbox controller was found, but there are gamepad controllers, take the first one
        if (!this.gamepad && manager.gamepads.length) {
            this.gamepad = manager.gamepads[0];
        }
    }
    /**
     * Detach the current controls from the specified dom element.
     */ detachControl() {
        this.camera.getScene().gamepadManager.onGamepadConnectedObservable.remove(this._onGamepadConnectedObserver);
        this.camera.getScene().gamepadManager.onGamepadDisconnectedObservable.remove(this._onGamepadDisconnectedObserver);
        this.gamepad = null;
    }
    /**
     * Update the current camera state depending on the inputs that have been used this frame.
     * This is a dynamically created lambda to avoid the performance penalty of looping for inputs in the render loop.
     */ checkInputs() {
        if (this.gamepad && this.gamepad.leftStick) {
            const camera = this.camera;
            const lsValues = this.gamepad.leftStick;
            if (this.gamepadMoveSensibility !== 0) {
                lsValues.x = Math.abs(lsValues.x) > this.deadzoneDelta ? lsValues.x / this.gamepadMoveSensibility : 0;
                lsValues.y = Math.abs(lsValues.y) > this.deadzoneDelta ? lsValues.y / this.gamepadMoveSensibility : 0;
            }
            let rsValues = this.gamepad.rightStick;
            if (rsValues && this.gamepadAngularSensibility !== 0) {
                rsValues.x = Math.abs(rsValues.x) > this.deadzoneDelta ? rsValues.x / this.gamepadAngularSensibility : 0;
                rsValues.y = (Math.abs(rsValues.y) > this.deadzoneDelta ? rsValues.y / this.gamepadAngularSensibility : 0) * this._yAxisScale;
            } else {
                rsValues = {
                    x: 0,
                    y: 0
                };
            }
            if (!camera.rotationQuaternion) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].RotationYawPitchRollToRef(camera.rotation.y, camera.rotation.x, 0, this._cameraTransform);
            } else {
                camera.rotationQuaternion.toRotationMatrix(this._cameraTransform);
            }
            const speed = camera._computeLocalCameraSpeed() * 50.0;
            this._vector3.copyFromFloats(lsValues.x * speed, 0, -lsValues.y * speed);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinatesToRef(this._vector3, this._cameraTransform, this._deltaTransform);
            camera.cameraDirection.addInPlace(this._deltaTransform);
            this._vector2.copyFromFloats(rsValues.y, rsValues.x);
            camera.cameraRotation.addInPlace(this._vector2);
        }
    }
    /**
     * Gets the class name of the current input.
     * @returns the class name
     */ getClassName() {
        return "FreeCameraGamepadInput";
    }
    /**
     * Get the friendly name associated with the input class.
     * @returns the input friendly name
     */ getSimpleName() {
        return "gamepad";
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], FreeCameraGamepadInput.prototype, "gamepadAngularSensibility", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], FreeCameraGamepadInput.prototype, "gamepadMoveSensibility", void 0);
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$cameraInputsManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CameraInputTypes"]["FreeCameraGamepadInput"] = FreeCameraGamepadInput; //# sourceMappingURL=freeCameraGamepadInput.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Inputs/freeCameraVirtualJoystickInput.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FreeCameraVirtualJoystickInput",
    ()=>FreeCameraVirtualJoystickInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$virtualJoystick$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/virtualJoystick.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$cameraInputsManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/cameraInputsManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$freeCameraInputsManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/freeCameraInputsManager.js [app-client] (ecmascript)");
;
;
;
;
/**
 * Add virtual joystick input support to the input manager.
 * @returns the current input manager
 */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$freeCameraInputsManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FreeCameraInputsManager"].prototype.addVirtualJoystick = function() {
    this.add(new FreeCameraVirtualJoystickInput());
    return this;
};
class FreeCameraVirtualJoystickInput {
    /**
     * Gets the left stick of the virtual joystick.
     * @returns The virtual Joystick
     */ getLeftJoystick() {
        return this._leftjoystick;
    }
    /**
     * Gets the right stick of the virtual joystick.
     * @returns The virtual Joystick
     */ getRightJoystick() {
        return this._rightjoystick;
    }
    /**
     * Update the current camera state depending on the inputs that have been used this frame.
     * This is a dynamically created lambda to avoid the performance penalty of looping for inputs in the render loop.
     */ checkInputs() {
        if (this._leftjoystick) {
            const camera = this.camera;
            const speed = camera._computeLocalCameraSpeed() * 50;
            const cameraTransform = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].RotationYawPitchRoll(camera.rotation.y, camera.rotation.x, 0);
            const deltaTransform = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinates(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](this._leftjoystick.deltaPosition.x * speed, this._leftjoystick.deltaPosition.y * speed, this._leftjoystick.deltaPosition.z * speed), cameraTransform);
            camera.cameraDirection = camera.cameraDirection.add(deltaTransform);
            camera.cameraRotation = camera.cameraRotation.addVector3(this._rightjoystick.deltaPosition);
            if (!this._leftjoystick.pressed) {
                this._leftjoystick.deltaPosition = this._leftjoystick.deltaPosition.scale(0.9);
            }
            if (!this._rightjoystick.pressed) {
                this._rightjoystick.deltaPosition = this._rightjoystick.deltaPosition.scale(0.9);
            }
        }
    }
    /**
     * Attach the input controls to a specific dom element to get the input from.
     */ attachControl() {
        this._leftjoystick = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$virtualJoystick$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VirtualJoystick"](true);
        this._leftjoystick.setAxisForUpDown(2 /* JoystickAxis.Z */ );
        this._leftjoystick.setAxisForLeftRight(0 /* JoystickAxis.X */ );
        this._leftjoystick.setJoystickSensibility(0.15);
        this._rightjoystick = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$virtualJoystick$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VirtualJoystick"](false);
        this._rightjoystick.setAxisForUpDown(0 /* JoystickAxis.X */ );
        this._rightjoystick.setAxisForLeftRight(1 /* JoystickAxis.Y */ );
        this._rightjoystick.reverseUpDown = true;
        this._rightjoystick.setJoystickSensibility(0.05);
        this._rightjoystick.setJoystickColor("yellow");
    }
    /**
     * Detach the current controls from the specified dom element.
     */ detachControl() {
        this._leftjoystick.releaseCanvas();
        this._rightjoystick.releaseCanvas();
    }
    /**
     * Gets the class name of the current input.
     * @returns the class name
     */ getClassName() {
        return "FreeCameraVirtualJoystickInput";
    }
    /**
     * Get the friendly name associated with the input class.
     * @returns the input friendly name
     */ getSimpleName() {
        return "virtualJoystick";
    }
}
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$cameraInputsManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CameraInputTypes"]["FreeCameraVirtualJoystickInput"] = FreeCameraVirtualJoystickInput; //# sourceMappingURL=freeCameraVirtualJoystickInput.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Inputs/geospatialCameraPointersInput.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GeospatialCameraPointersInput",
    ()=>GeospatialCameraPointersInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$orbitCameraPointersInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Inputs/orbitCameraPointersInput.js [app-client] (ecmascript)");
;
class GeospatialCameraPointersInput extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$orbitCameraPointersInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrbitCameraPointersInput"] {
    getClassName() {
        return "GeospatialCameraPointersInput";
    }
    onButtonDown(evt) {
        this.camera.movement.activeInput = true;
        const scene = this.camera.getScene();
        let pickResult;
        switch(evt.button){
            case 0:
                this.camera.movement.startDrag(scene.pointerX, scene.pointerY);
                break;
            case 1:
                pickResult = scene.pick(scene.pointerX, scene.pointerY, this.camera.pickPredicate);
                pickResult.pickedPoint && (this.camera.movement.alternateRotationPt = pickResult.pickedPoint);
                break;
            case 2:
                this.camera.movement.alternateRotationPt = this.camera.center;
                break;
            default:
                return;
        }
    }
    onTouch(point, offsetX, offsetY) {
        // Single finger touch (no button property) or left button (button 0) = drag
        const button = point?.button ?? 0; // Default to button 0 (drag) if undefined
        const scene = this.camera.getScene();
        switch(button){
            case 0:
                this.camera.movement.handleDrag(scene.pointerX, scene.pointerY);
                break;
            case 1:
            case 2:
                this._handleTilt(offsetX, offsetY);
                break;
        }
    }
    /**
     * Move camera from multitouch (pinch) zoom distances.
     * @param previousPinchSquaredDistance
     * @param pinchSquaredDistance
     */ _computePinchZoom(previousPinchSquaredDistance, pinchSquaredDistance) {
        this.camera.radius = this.camera.radius * Math.sqrt(previousPinchSquaredDistance) / Math.sqrt(pinchSquaredDistance);
    }
    /**
     * Move camera from multi touch panning positions.
     * In geospatialcamera, multi touch panning tilts the globe (whereas single touch will pan/drag it)
     * @param previousMultiTouchPanPosition
     * @param multiTouchPanPosition
     */ _computeMultiTouchPanning(previousMultiTouchPanPosition, multiTouchPanPosition) {
        if (previousMultiTouchPanPosition && multiTouchPanPosition) {
            const moveDeltaX = multiTouchPanPosition.x - previousMultiTouchPanPosition.x;
            const moveDeltaY = multiTouchPanPosition.y - previousMultiTouchPanPosition.y;
            this._handleTilt(moveDeltaX, moveDeltaY);
        }
    }
    onDoubleTap(type) {
        const pickResult = this.camera._scene.pick(this.camera._scene.pointerX, this.camera._scene.pointerY, this.camera.pickPredicate);
        if (pickResult.pickedPoint) {
            void this.camera.flyToPointAsync(pickResult.pickedPoint);
        }
    }
    onMultiTouch(pointA, pointB, previousPinchSquaredDistance, pinchSquaredDistance, previousMultiTouchPanPosition, multiTouchPanPosition) {
        this._shouldStartPinchZoom = this._twoFingerActivityCount < 20 && Math.abs(Math.sqrt(pinchSquaredDistance) - Math.sqrt(previousPinchSquaredDistance)) > this.camera.limits.pinchToPanMax;
        super.onMultiTouch(pointA, pointB, previousPinchSquaredDistance, pinchSquaredDistance, previousMultiTouchPanPosition, multiTouchPanPosition);
    }
    onButtonUp(_evt) {
        this.camera.movement.stopDrag();
        this.camera.movement.alternateRotationPt = undefined;
        this.camera.movement.activeInput = false;
        super.onButtonUp(_evt);
    }
    _handleTilt(deltaX, deltaY) {
        this.camera.movement.rotationAccumulatedPixels.y -= deltaX; // yaw - looking side to side
        this.camera.movement.rotationAccumulatedPixels.x -= deltaY; // pitch - look up towards sky / down towards ground
    }
} //# sourceMappingURL=geospatialCameraPointersInput.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Inputs/geospatialCameraMouseWheelInput.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GeospatialCameraMouseWheelInput",
    ()=>GeospatialCameraMouseWheelInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$cameraInputsManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/cameraInputsManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$BaseCameraMouseWheelInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Inputs/BaseCameraMouseWheelInput.js [app-client] (ecmascript)");
;
;
class GeospatialCameraMouseWheelInput extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$BaseCameraMouseWheelInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseCameraMouseWheelInput"] {
    /**
     * Gets the class name of the current input.
     * @returns the class name
     */ getClassName() {
        return "GeospatialCameraMouseWheelInput";
    }
    checkInputs() {
        this.camera.movement.zoomAccumulatedPixels = this._wheelDeltaY;
        super.checkInputs();
    }
}
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$cameraInputsManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CameraInputTypes"]["GeospatialCameraMouseWheelInput"] = GeospatialCameraMouseWheelInput; //# sourceMappingURL=geospatialCameraMouseWheelInput.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Inputs/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$BaseCameraMouseWheelInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Inputs/BaseCameraMouseWheelInput.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$BaseCameraPointersInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Inputs/BaseCameraPointersInput.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$arcRotateCameraGamepadInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Inputs/arcRotateCameraGamepadInput.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$arcRotateCameraKeyboardMoveInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Inputs/arcRotateCameraKeyboardMoveInput.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$arcRotateCameraMouseWheelInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Inputs/arcRotateCameraMouseWheelInput.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$arcRotateCameraPointersInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Inputs/arcRotateCameraPointersInput.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$arcRotateCameraVRDeviceOrientationInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Inputs/arcRotateCameraVRDeviceOrientationInput.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$flyCameraKeyboardInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Inputs/flyCameraKeyboardInput.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$flyCameraMouseInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Inputs/flyCameraMouseInput.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$followCameraKeyboardMoveInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Inputs/followCameraKeyboardMoveInput.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$followCameraMouseWheelInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Inputs/followCameraMouseWheelInput.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$followCameraPointersInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Inputs/followCameraPointersInput.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$freeCameraDeviceOrientationInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Inputs/freeCameraDeviceOrientationInput.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$freeCameraGamepadInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Inputs/freeCameraGamepadInput.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$freeCameraKeyboardMoveInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Inputs/freeCameraKeyboardMoveInput.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$freeCameraMouseInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Inputs/freeCameraMouseInput.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$freeCameraMouseWheelInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Inputs/freeCameraMouseWheelInput.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$freeCameraTouchInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Inputs/freeCameraTouchInput.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$freeCameraVirtualJoystickInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Inputs/freeCameraVirtualJoystickInput.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$geospatialCameraPointersInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Inputs/geospatialCameraPointersInput.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$geospatialCameraMouseWheelInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Inputs/geospatialCameraMouseWheelInput.js [app-client] (ecmascript)"); //# sourceMappingURL=index.js.map
;
;
;
;
;
;
;
;
;
;
;
;
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
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/targetCamera.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TargetCamera",
    ()=>TargetCamera
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/decorators.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/camera.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$axis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.axis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/node.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node"].AddNodeConstructor("TargetCamera", (name, scene)=>{
    return ()=>new TargetCamera(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero(), scene);
});
// Temporary cache variables to avoid allocations.
const TmpMatrix = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].Zero();
const TmpQuaternion = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"].Identity();
class TargetCamera extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Camera"] {
    /**
     * Instantiates a target camera that takes a mesh or position as a target and continues to look at it while it moves.
     * This is the base of the follow, arc rotate cameras and Free camera
     * @see https://doc.babylonjs.com/features/featuresDeepDive/cameras
     * @param name Defines the name of the camera in the scene
     * @param position Defines the start position of the camera in the scene
     * @param scene Defines the scene the camera belongs to
     * @param setActiveOnSceneIfNoneActive Defines whether the camera should be marked as active if not other active cameras have been defined
     */ constructor(name, position, scene, setActiveOnSceneIfNoneActive = true){
        super(name, position, scene, setActiveOnSceneIfNoneActive);
        /**
         * Define the current direction the camera is moving to
         */ this.cameraDirection = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, 0);
        /**
         * Define the current rotation the camera is rotating to
         */ this.cameraRotation = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](0, 0);
        /**
         * When set, the up vector of the camera will be updated by the rotation of the camera
         */ this.updateUpVectorFromRotation = false;
        /**
         * Define the current speed of the camera
         */ this.speed = 2.0;
        /**
         * Add constraint to the camera to prevent it to move freely in all directions and
         * around all axis.
         */ this.noRotationConstraint = false;
        /**
         * Reverses mouselook direction to 'natural' panning as opposed to traditional direct
         * panning
         */ this.invertRotation = false;
        /**
         * Speed multiplier for inverse camera panning
         */ this.inverseRotationSpeed = 0.2;
        /**
         * @internal
         * @experimental
         * Can be used to change clamping behavior for inertia. Hook into onBeforeRenderObservable to change the value per-frame
         */ this._panningEpsilon = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Epsilon"];
        /**
         * @internal
         * @experimental
         * Can be used to change clamping behavior for inertia. Hook into onBeforeRenderObservable to change the value per-frame
         */ this._rotationEpsilon = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Epsilon"];
        /**
         * Define the current target of the camera as an object or a position.
         * Please note that locking a target will disable panning.
         */ this.lockedTarget = null;
        this._currentTarget = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        this._initialFocalDistance = 1;
        this._viewMatrix = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].Zero();
        /** @internal */ this._cameraTransformMatrix = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].Zero();
        /** @internal */ this._cameraRotationMatrix = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].Zero();
        this._transformedReferencePoint = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        this._deferredPositionUpdate = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
        this._deferredRotationQuaternionUpdate = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"]();
        this._deferredRotationUpdate = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
        this._deferredUpdated = false;
        this._deferOnly = false;
        this._cachedRotationZ = 0;
        this._cachedQuaternionRotationZ = 0;
        this._referencePoint = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Forward(this.getScene().useRightHandedSystem);
        // Set the y component of the rotation to Math.PI in right-handed system for backwards compatibility.
        this.rotation = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, this.getScene().useRightHandedSystem ? Math.PI : 0, 0);
    }
    /**
     * Gets the position in front of the camera at a given distance.
     * @param distance The distance from the camera we want the position to be
     * @returns the position
     */ getFrontPosition(distance) {
        this.getWorldMatrix();
        const worldForward = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0];
        const localForward = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[1];
        localForward.set(0, 0, this._scene.useRightHandedSystem ? -1.0 : 1.0);
        this.getDirectionToRef(localForward, worldForward);
        worldForward.scaleInPlace(distance);
        return this.globalPosition.add(worldForward);
    }
    /** @internal */ _getLockedTargetPosition() {
        if (!this.lockedTarget) {
            return null;
        }
        if (this.lockedTarget.absolutePosition) {
            const lockedTarget = this.lockedTarget;
            const m = lockedTarget.computeWorldMatrix();
            // in some cases the absolute position resets externally, but doesn't update since the matrix is cached.
            m.getTranslationToRef(lockedTarget.absolutePosition);
        }
        return this.lockedTarget.absolutePosition || this.lockedTarget;
    }
    /**
     * Store current camera state of the camera (fov, position, rotation, etc..)
     * @returns the camera
     */ storeState() {
        this._storedPosition = this.position.clone();
        this._storedRotation = this.rotation.clone();
        if (this.rotationQuaternion) {
            this._storedRotationQuaternion = this.rotationQuaternion.clone();
        }
        return super.storeState();
    }
    /**
     * Restored camera state. You must call storeState() first
     * @returns whether it was successful or not
     * @internal
     */ _restoreStateValues() {
        if (!super._restoreStateValues()) {
            return false;
        }
        this.position = this._storedPosition.clone();
        this.rotation = this._storedRotation.clone();
        if (this.rotationQuaternion && this._storedRotationQuaternion) {
            this.rotationQuaternion = this._storedRotationQuaternion.clone();
        }
        this.cameraDirection.copyFromFloats(0, 0, 0);
        this.cameraRotation.copyFromFloats(0, 0);
        return true;
    }
    /** @internal */ _initCache() {
        super._initCache();
        this._cache.lockedTarget = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
        this._cache.rotation = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
        this._cache.rotationQuaternion = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"](Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
    }
    /**
     * @internal
     */ _updateCache(ignoreParentClass) {
        if (!ignoreParentClass) {
            super._updateCache();
        }
        const lockedTargetPosition = this._getLockedTargetPosition();
        if (!lockedTargetPosition) {
            this._cache.lockedTarget = null;
        } else {
            if (!this._cache.lockedTarget) {
                this._cache.lockedTarget = lockedTargetPosition.clone();
            } else {
                this._cache.lockedTarget.copyFrom(lockedTargetPosition);
            }
        }
        this._cache.rotation.copyFrom(this.rotation);
        if (this.rotationQuaternion) {
            this._cache.rotationQuaternion.copyFrom(this.rotationQuaternion);
        }
    }
    // Synchronized
    /** @internal */ _isSynchronizedViewMatrix() {
        if (!super._isSynchronizedViewMatrix()) {
            return false;
        }
        const lockedTargetPosition = this._getLockedTargetPosition();
        return (this._cache.lockedTarget ? this._cache.lockedTarget.equals(lockedTargetPosition) : !lockedTargetPosition) && (this.rotationQuaternion ? this.rotationQuaternion.equals(this._cache.rotationQuaternion) : this._cache.rotation.equals(this.rotation));
    }
    // Methods
    /** @internal */ _computeLocalCameraSpeed() {
        const engine = this.getEngine();
        return this.speed * Math.sqrt(engine.getDeltaTime() / (engine.getFps() * 100.0));
    }
    // Target
    /**
     * Defines the target the camera should look at.
     * @param target Defines the new target as a Vector
     */ setTarget(target) {
        this.upVector.normalize();
        this._initialFocalDistance = target.subtract(this.position).length();
        if (this.position.z === target.z) {
            this.position.z += __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Epsilon"];
        }
        this._referencePoint.normalize().scaleInPlace(this._initialFocalDistance);
        if (this.getScene().useRightHandedSystem) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].LookAtRHToRef(this.position, target, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].UpReadOnly, TmpMatrix);
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].LookAtLHToRef(this.position, target, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].UpReadOnly, TmpMatrix);
        }
        TmpMatrix.invert();
        const rotationQuaternion = this.rotationQuaternion || TmpQuaternion;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"].FromRotationMatrixToRef(TmpMatrix, rotationQuaternion);
        rotationQuaternion.toEulerAnglesToRef(this.rotation);
        // Explicitly set z to 0 to match previous behavior.
        this.rotation.z = 0;
    }
    /**
     * Defines the target point of the camera.
     * The camera looks towards it form the radius distance.
     */ get target() {
        return this.getTarget();
    }
    set target(value) {
        this.setTarget(value);
    }
    /**
     * Return the current target position of the camera. This value is expressed in local space.
     * @returns the target position
     */ getTarget() {
        return this._currentTarget;
    }
    /** @internal */ _decideIfNeedsToMove() {
        return Math.abs(this.cameraDirection.x) > 0 || Math.abs(this.cameraDirection.y) > 0 || Math.abs(this.cameraDirection.z) > 0;
    }
    /** @internal */ _updatePosition() {
        if (this.parent) {
            this.parent.getWorldMatrix().invertToRef(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[0]);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].TransformNormalToRef(this.cameraDirection, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[0], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0]);
            this._deferredPositionUpdate.addInPlace(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0]);
            if (!this._deferOnly) {
                this.position.copyFrom(this._deferredPositionUpdate);
            } else {
                this._deferredUpdated = true;
            }
            return;
        }
        this._deferredPositionUpdate.addInPlace(this.cameraDirection);
        if (!this._deferOnly) {
            this.position.copyFrom(this._deferredPositionUpdate);
        } else {
            this._deferredUpdated = true;
        }
    }
    /** @internal */ _checkInputs() {
        const directionMultiplier = this.invertRotation ? -this.inverseRotationSpeed : 1.0;
        const needToMove = this._decideIfNeedsToMove();
        const needToRotate = this.cameraRotation.x || this.cameraRotation.y;
        this._deferredUpdated = false;
        this._deferredRotationUpdate.copyFrom(this.rotation);
        this._deferredPositionUpdate.copyFrom(this.position);
        if (this.rotationQuaternion) {
            this._deferredRotationQuaternionUpdate.copyFrom(this.rotationQuaternion);
        }
        // Move
        if (needToMove) {
            this._updatePosition();
        }
        // Rotate
        if (needToRotate) {
            //rotate, if quaternion is set and rotation was used
            if (this.rotationQuaternion) {
                this.rotationQuaternion.toEulerAnglesToRef(this._deferredRotationUpdate);
            }
            this._deferredRotationUpdate.x += this.cameraRotation.x * directionMultiplier;
            this._deferredRotationUpdate.y += this.cameraRotation.y * directionMultiplier;
            // Apply constraints
            if (!this.noRotationConstraint) {
                const limit = 1.570796;
                if (this._deferredRotationUpdate.x > limit) {
                    this._deferredRotationUpdate.x = limit;
                }
                if (this._deferredRotationUpdate.x < -limit) {
                    this._deferredRotationUpdate.x = -limit;
                }
            }
            if (!this._deferOnly) {
                this.rotation.copyFrom(this._deferredRotationUpdate);
            } else {
                this._deferredUpdated = true;
            }
            //rotate, if quaternion is set and rotation was used
            if (this.rotationQuaternion) {
                const len = this._deferredRotationUpdate.lengthSquared();
                if (len) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"].RotationYawPitchRollToRef(this._deferredRotationUpdate.y, this._deferredRotationUpdate.x, this._deferredRotationUpdate.z, this._deferredRotationQuaternionUpdate);
                    if (!this._deferOnly) {
                        this.rotationQuaternion.copyFrom(this._deferredRotationQuaternionUpdate);
                    } else {
                        this._deferredUpdated = true;
                    }
                }
            }
        }
        const inertialPanningLimit = this.speed * this._panningEpsilon;
        const inertialRotationLimit = this.speed * this._rotationEpsilon;
        // Inertia
        if (needToMove) {
            if (Math.abs(this.cameraDirection.x) < inertialPanningLimit) {
                this.cameraDirection.x = 0;
            }
            if (Math.abs(this.cameraDirection.y) < inertialPanningLimit) {
                this.cameraDirection.y = 0;
            }
            if (Math.abs(this.cameraDirection.z) < inertialPanningLimit) {
                this.cameraDirection.z = 0;
            }
            this.cameraDirection.scaleInPlace(this.inertia);
        }
        if (needToRotate) {
            if (Math.abs(this.cameraRotation.x) < inertialRotationLimit) {
                this.cameraRotation.x = 0;
            }
            if (Math.abs(this.cameraRotation.y) < inertialRotationLimit) {
                this.cameraRotation.y = 0;
            }
            this.cameraRotation.scaleInPlace(this.inertia);
        }
        super._checkInputs();
    }
    _updateCameraRotationMatrix() {
        if (this.rotationQuaternion) {
            this.rotationQuaternion.toRotationMatrix(this._cameraRotationMatrix);
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, this._cameraRotationMatrix);
        }
    }
    /**
     * Update the up vector to apply the rotation of the camera (So if you changed the camera rotation.z this will let you update the up vector as well)
     * @returns the current camera
     */ _rotateUpVectorWithCameraRotationMatrix() {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].TransformNormalToRef(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].UpReadOnly, this._cameraRotationMatrix, this.upVector);
        return this;
    }
    /** @internal */ _getViewMatrix() {
        if (this.lockedTarget) {
            this.setTarget(this._getLockedTargetPosition());
        }
        // Compute
        this._updateCameraRotationMatrix();
        // Apply the changed rotation to the upVector
        if (this.rotationQuaternion && this._cachedQuaternionRotationZ != this.rotationQuaternion.z) {
            this._rotateUpVectorWithCameraRotationMatrix();
            this._cachedQuaternionRotationZ = this.rotationQuaternion.z;
        } else if (this._cachedRotationZ !== this.rotation.z) {
            this._rotateUpVectorWithCameraRotationMatrix();
            this._cachedRotationZ = this.rotation.z;
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinatesToRef(this._referencePoint, this._cameraRotationMatrix, this._transformedReferencePoint);
        // Computing target and final matrix
        this.position.addToRef(this._transformedReferencePoint, this._currentTarget);
        if (this.updateUpVectorFromRotation) {
            if (this.rotationQuaternion) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$axis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Axis"].Y.rotateByQuaternionToRef(this.rotationQuaternion, this.upVector);
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"].FromEulerVectorToRef(this.rotation, TmpQuaternion);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$axis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Axis"].Y.rotateByQuaternionToRef(TmpQuaternion, this.upVector);
            }
        }
        this._computeViewMatrix(this.position, this._currentTarget, this.upVector);
        return this._viewMatrix;
    }
    _computeViewMatrix(position, target, up) {
        if (this.getScene().useRightHandedSystem) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].LookAtRHToRef(position, target, up, this._viewMatrix);
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].LookAtLHToRef(position, target, up, this._viewMatrix);
        }
        if (this.parent) {
            const parentWorldMatrix = this.parent.getWorldMatrix();
            this._viewMatrix.invert();
            this._viewMatrix.multiplyToRef(parentWorldMatrix, this._viewMatrix);
            this._viewMatrix.invert();
            this._markSyncedWithParent();
        }
    }
    /**
     * @internal
     */ // eslint-disable-next-line @typescript-eslint/no-unused-vars
    createRigCamera(name, cameraIndex) {
        if (this.cameraRigMode !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Camera"].RIG_MODE_NONE) {
            const rigCamera = new TargetCamera(name, this.position.clone(), this.getScene());
            rigCamera.isRigCamera = true;
            rigCamera.rigParent = this;
            if (this.cameraRigMode === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Camera"].RIG_MODE_VR) {
                if (!this.rotationQuaternion) {
                    this.rotationQuaternion = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"]();
                }
                rigCamera._cameraRigParams = {};
                rigCamera.rotationQuaternion = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"]();
            }
            rigCamera.mode = this.mode;
            rigCamera.orthoLeft = this.orthoLeft;
            rigCamera.orthoRight = this.orthoRight;
            rigCamera.orthoTop = this.orthoTop;
            rigCamera.orthoBottom = this.orthoBottom;
            return rigCamera;
        }
        return null;
    }
    /**
     * @internal
     */ _updateRigCameras() {
        const camLeft = this._rigCameras[0];
        const camRight = this._rigCameras[1];
        this.computeWorldMatrix();
        switch(this.cameraRigMode){
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Camera"].RIG_MODE_STEREOSCOPIC_ANAGLYPH:
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Camera"].RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Camera"].RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Camera"].RIG_MODE_STEREOSCOPIC_OVERUNDER:
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Camera"].RIG_MODE_STEREOSCOPIC_INTERLACED:
                {
                    //provisionnaly using _cameraRigParams.stereoHalfAngle instead of calculations based on _cameraRigParams.interaxialDistance:
                    const leftSign = this.cameraRigMode === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Camera"].RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED ? 1 : -1;
                    const rightSign = this.cameraRigMode === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Camera"].RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED ? -1 : 1;
                    this._getRigCamPositionAndTarget(this._cameraRigParams.stereoHalfAngle * leftSign, camLeft);
                    this._getRigCamPositionAndTarget(this._cameraRigParams.stereoHalfAngle * rightSign, camRight);
                    break;
                }
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Camera"].RIG_MODE_VR:
                if (camLeft.rotationQuaternion && camRight.rotationQuaternion && this.rotationQuaternion) {
                    camLeft.rotationQuaternion.copyFrom(this.rotationQuaternion);
                    camRight.rotationQuaternion.copyFrom(this.rotationQuaternion);
                } else {
                    camLeft.rotation.copyFrom(this.rotation);
                    camRight.rotation.copyFrom(this.rotation);
                }
                camLeft.position.copyFrom(this.position);
                camRight.position.copyFrom(this.position);
                break;
        }
        super._updateRigCameras();
    }
    _getRigCamPositionAndTarget(halfSpace, rigCamera) {
        const target = this.getTarget();
        target.subtractToRef(this.position, TargetCamera._TargetFocalPoint);
        TargetCamera._TargetFocalPoint.normalize().scaleInPlace(this._initialFocalDistance);
        const newFocalTarget = TargetCamera._TargetFocalPoint.addInPlace(this.position);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].TranslationToRef(-newFocalTarget.x, -newFocalTarget.y, -newFocalTarget.z, TargetCamera._TargetTransformMatrix);
        TargetCamera._TargetTransformMatrix.multiplyToRef(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].RotationAxis(rigCamera.upVector, halfSpace), TargetCamera._RigCamTransformMatrix);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].TranslationToRef(newFocalTarget.x, newFocalTarget.y, newFocalTarget.z, TargetCamera._TargetTransformMatrix);
        TargetCamera._RigCamTransformMatrix.multiplyToRef(TargetCamera._TargetTransformMatrix, TargetCamera._RigCamTransformMatrix);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinatesToRef(this.position, TargetCamera._RigCamTransformMatrix, rigCamera.position);
        rigCamera.setTarget(newFocalTarget);
    }
    /**
     * Gets the current object class name.
     * @returns the class name
     */ getClassName() {
        return "TargetCamera";
    }
}
TargetCamera._RigCamTransformMatrix = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"]();
TargetCamera._TargetTransformMatrix = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"]();
TargetCamera._TargetFocalPoint = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], TargetCamera.prototype, "updateUpVectorFromRotation", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeAsVector3"])()
], TargetCamera.prototype, "rotation", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], TargetCamera.prototype, "speed", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeAsMeshReference"])("lockedTargetId")
], TargetCamera.prototype, "lockedTarget", void 0); //# sourceMappingURL=targetCamera.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/freeCamera.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FreeCamera",
    ()=>FreeCamera
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/decorators.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$targetCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/targetCamera.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$freeCameraInputsManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/freeCameraInputsManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/tools.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/abstractEngine.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
class FreeCamera extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$targetCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TargetCamera"] {
    /**
     * Gets the input sensibility for a mouse input. (default is 2000.0)
     * Higher values reduce sensitivity.
     */ get angularSensibility() {
        const mouse = this.inputs.attached["mouse"];
        if (mouse) {
            return mouse.angularSensibility;
        }
        return 0;
    }
    /**
     * Sets the input sensibility for a mouse input. (default is 2000.0)
     * Higher values reduce sensitivity.
     */ set angularSensibility(value) {
        const mouse = this.inputs.attached["mouse"];
        if (mouse) {
            mouse.angularSensibility = value;
        }
    }
    /**
     * Gets or Set the list of keyboard keys used to control the forward move of the camera.
     */ get keysUp() {
        const keyboard = this.inputs.attached["keyboard"];
        if (keyboard) {
            return keyboard.keysUp;
        }
        return [];
    }
    set keysUp(value) {
        const keyboard = this.inputs.attached["keyboard"];
        if (keyboard) {
            keyboard.keysUp = value;
        }
    }
    /**
     * Gets or Set the list of keyboard keys used to control the upward move of the camera.
     */ get keysUpward() {
        const keyboard = this.inputs.attached["keyboard"];
        if (keyboard) {
            return keyboard.keysUpward;
        }
        return [];
    }
    set keysUpward(value) {
        const keyboard = this.inputs.attached["keyboard"];
        if (keyboard) {
            keyboard.keysUpward = value;
        }
    }
    /**
     * Gets or Set the list of keyboard keys used to control the backward move of the camera.
     */ get keysDown() {
        const keyboard = this.inputs.attached["keyboard"];
        if (keyboard) {
            return keyboard.keysDown;
        }
        return [];
    }
    set keysDown(value) {
        const keyboard = this.inputs.attached["keyboard"];
        if (keyboard) {
            keyboard.keysDown = value;
        }
    }
    /**
     * Gets or Set the list of keyboard keys used to control the downward move of the camera.
     */ get keysDownward() {
        const keyboard = this.inputs.attached["keyboard"];
        if (keyboard) {
            return keyboard.keysDownward;
        }
        return [];
    }
    set keysDownward(value) {
        const keyboard = this.inputs.attached["keyboard"];
        if (keyboard) {
            keyboard.keysDownward = value;
        }
    }
    /**
     * Gets or Set the list of keyboard keys used to control the left strafe move of the camera.
     */ get keysLeft() {
        const keyboard = this.inputs.attached["keyboard"];
        if (keyboard) {
            return keyboard.keysLeft;
        }
        return [];
    }
    set keysLeft(value) {
        const keyboard = this.inputs.attached["keyboard"];
        if (keyboard) {
            keyboard.keysLeft = value;
        }
    }
    /**
     * Gets or Set the list of keyboard keys used to control the right strafe move of the camera.
     */ get keysRight() {
        const keyboard = this.inputs.attached["keyboard"];
        if (keyboard) {
            return keyboard.keysRight;
        }
        return [];
    }
    set keysRight(value) {
        const keyboard = this.inputs.attached["keyboard"];
        if (keyboard) {
            keyboard.keysRight = value;
        }
    }
    /**
     * Gets or Set the list of keyboard keys used to control the left rotation move of the camera.
     */ get keysRotateLeft() {
        const keyboard = this.inputs.attached["keyboard"];
        if (keyboard) {
            return keyboard.keysRotateLeft;
        }
        return [];
    }
    set keysRotateLeft(value) {
        const keyboard = this.inputs.attached["keyboard"];
        if (keyboard) {
            keyboard.keysRotateLeft = value;
        }
    }
    /**
     * Gets or Set the list of keyboard keys used to control the right rotation move of the camera.
     */ get keysRotateRight() {
        const keyboard = this.inputs.attached["keyboard"];
        if (keyboard) {
            return keyboard.keysRotateRight;
        }
        return [];
    }
    set keysRotateRight(value) {
        const keyboard = this.inputs.attached["keyboard"];
        if (keyboard) {
            keyboard.keysRotateRight = value;
        }
    }
    /**
     * Gets or Set the list of keyboard keys used to control the up rotation move of the camera.
     */ get keysRotateUp() {
        const keyboard = this.inputs.attached["keyboard"];
        if (keyboard) {
            return keyboard.keysRotateUp;
        }
        return [];
    }
    set keysRotateUp(value) {
        const keyboard = this.inputs.attached["keyboard"];
        if (keyboard) {
            keyboard.keysRotateUp = value;
        }
    }
    /**
     * Gets or Set the list of keyboard keys used to control the down rotation move of the camera.
     */ get keysRotateDown() {
        const keyboard = this.inputs.attached["keyboard"];
        if (keyboard) {
            return keyboard.keysRotateDown;
        }
        return [];
    }
    set keysRotateDown(value) {
        const keyboard = this.inputs.attached["keyboard"];
        if (keyboard) {
            keyboard.keysRotateDown = value;
        }
    }
    /**
     * Instantiates a Free Camera.
     * This represents a free type of camera. It can be useful in First Person Shooter game for instance.
     * Please consider using the new UniversalCamera instead as it adds more functionality like touch to this camera.
     * @see https://doc.babylonjs.com/features/featuresDeepDive/cameras/camera_introduction#universal-camera
     * @param name Define the name of the camera in the scene
     * @param position Define the start position of the camera in the scene
     * @param scene Define the scene the camera belongs to
     * @param setActiveOnSceneIfNoneActive Defines whether the camera should be marked as active if not other active cameras have been defined
     */ constructor(name, position, scene, setActiveOnSceneIfNoneActive = true){
        super(name, position, scene, setActiveOnSceneIfNoneActive);
        /**
         * Define the collision ellipsoid of the camera.
         * This is helpful to simulate a camera body like the player body around the camera
         * @see https://doc.babylonjs.com/features/featuresDeepDive/cameras/camera_collisions#arcrotatecamera
         */ this.ellipsoid = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0.5, 1, 0.5);
        /**
         * Define an offset for the position of the ellipsoid around the camera.
         * This can be helpful to determine the center of the body near the gravity center of the body
         * instead of its head.
         */ this.ellipsoidOffset = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, 0);
        /**
         * Enable or disable collisions of the camera with the rest of the scene objects.
         */ this.checkCollisions = false;
        /**
         * Enable or disable gravity on the camera.
         */ this.applyGravity = false;
        this._needMoveForGravity = false;
        this._oldPosition = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        this._diffPosition = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        this._newPosition = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        // Collisions
        this._collisionMask = -1;
        this._onCollisionPositionChange = (collisionId, newPosition, collidedMesh = null)=>{
            this._newPosition.copyFrom(newPosition);
            this._newPosition.subtractToRef(this._oldPosition, this._diffPosition);
            if (this._diffPosition.length() > __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AbstractEngine"].CollisionsEpsilon) {
                this.position.addToRef(this._diffPosition, this._deferredPositionUpdate);
                if (!this._deferOnly) {
                    this.position.copyFrom(this._deferredPositionUpdate);
                } else {
                    this._deferredUpdated = true;
                }
                // call onCollide, if defined. Note that in case of deferred update, the actual position change might happen in the next frame.
                if (this.onCollide && collidedMesh) {
                    this.onCollide(collidedMesh);
                }
            }
        };
        this.inputs = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$freeCameraInputsManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FreeCameraInputsManager"](this);
        this.inputs.addKeyboard().addMouse();
    }
    /**
     * Attached controls to the current camera.
     * @param ignored defines an ignored parameter kept for backward compatibility.
     * @param noPreventDefault Defines whether event caught by the controls should call preventdefault() (https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)
     */ attachControl(ignored, noPreventDefault) {
        noPreventDefault = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tools"].BackCompatCameraNoPreventDefault(arguments);
        this.inputs.attachElement(noPreventDefault);
    }
    /**
     * Detach the current controls from the specified dom element.
     */ detachControl() {
        this.inputs.detachElement();
        this.cameraDirection = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, 0);
        this.cameraRotation = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](0, 0);
    }
    /**
     * Define a collision mask to limit the list of object the camera can collide with
     */ get collisionMask() {
        return this._collisionMask;
    }
    set collisionMask(mask) {
        this._collisionMask = !isNaN(mask) ? mask : -1;
    }
    /**
     * @internal
     */ _collideWithWorld(displacement) {
        let globalPosition;
        if (this.parent) {
            globalPosition = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinates(this.position, this.parent.getWorldMatrix());
        } else {
            globalPosition = this.position;
        }
        globalPosition.subtractFromFloatsToRef(0, this.ellipsoid.y, 0, this._oldPosition);
        this._oldPosition.addInPlace(this.ellipsoidOffset);
        const coordinator = this.getScene().collisionCoordinator;
        if (!this._collider) {
            this._collider = coordinator.createCollider();
        }
        this._collider._radius = this.ellipsoid;
        this._collider.collisionMask = this._collisionMask;
        //no need for clone, as long as gravity is not on.
        let actualDisplacement = displacement;
        //add gravity to the direction to prevent the dual-collision checking
        if (this.applyGravity) {
            //this prevents mending with cameraDirection, a global variable of the free camera class.
            actualDisplacement = displacement.add(this.getScene().gravity);
        }
        coordinator.getNewPosition(this._oldPosition, actualDisplacement, this._collider, 3, null, this._onCollisionPositionChange, this.uniqueId);
    }
    /** @internal */ _checkInputs() {
        if (!this._localDirection) {
            this._localDirection = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
            this._transformedDirection = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        }
        this.inputs.checkInputs();
        super._checkInputs();
    }
    /**
     * Enable movement without a user input. This allows gravity to always be applied.
     */ set needMoveForGravity(value) {
        this._needMoveForGravity = value;
    }
    /**
     * When true, gravity is applied whether there is user input or not.
     */ get needMoveForGravity() {
        return this._needMoveForGravity;
    }
    /** @internal */ _decideIfNeedsToMove() {
        return this._needMoveForGravity || Math.abs(this.cameraDirection.x) > 0 || Math.abs(this.cameraDirection.y) > 0 || Math.abs(this.cameraDirection.z) > 0;
    }
    /** @internal */ _updatePosition() {
        if (this.checkCollisions && this.getScene().collisionsEnabled) {
            this._collideWithWorld(this.cameraDirection);
        } else {
            super._updatePosition();
        }
    }
    /**
     * Destroy the camera and release the current resources hold by it.
     */ dispose() {
        this.inputs.clear();
        super.dispose();
    }
    /**
     * Gets the current object class name.
     * @returns the class name
     */ getClassName() {
        return "FreeCamera";
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeAsVector3"])()
], FreeCamera.prototype, "ellipsoid", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeAsVector3"])()
], FreeCamera.prototype, "ellipsoidOffset", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], FreeCamera.prototype, "checkCollisions", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], FreeCamera.prototype, "applyGravity", void 0);
// Register Class Name
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.FreeCamera", FreeCamera); //# sourceMappingURL=freeCamera.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/touchCamera.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TouchCamera",
    ()=>TouchCamera
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$freeCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/freeCamera.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/node.js [app-client] (ecmascript)");
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node"].AddNodeConstructor("TouchCamera", (name, scene)=>{
    return ()=>new TouchCamera(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero(), scene);
});
class TouchCamera extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$freeCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FreeCamera"] {
    /**
     * Defines the touch sensibility for rotation.
     * The higher the faster.
     */ get touchAngularSensibility() {
        const touch = this.inputs.attached["touch"];
        if (touch) {
            return touch.touchAngularSensibility;
        }
        return 0;
    }
    set touchAngularSensibility(value) {
        const touch = this.inputs.attached["touch"];
        if (touch) {
            touch.touchAngularSensibility = value;
        }
    }
    /**
     * Defines the touch sensibility for move.
     * The higher the faster.
     */ get touchMoveSensibility() {
        const touch = this.inputs.attached["touch"];
        if (touch) {
            return touch.touchMoveSensibility;
        }
        return 0;
    }
    set touchMoveSensibility(value) {
        const touch = this.inputs.attached["touch"];
        if (touch) {
            touch.touchMoveSensibility = value;
        }
    }
    /**
     * Instantiates a new touch camera.
     * This represents a FPS type of camera controlled by touch.
     * This is like a universal camera minus the Gamepad controls.
     * @see https://doc.babylonjs.com/features/featuresDeepDive/cameras/camera_introduction#universal-camera
     * @param name Define the name of the camera in the scene
     * @param position Define the start position of the camera in the scene
     * @param scene Define the scene the camera belongs to
     */ constructor(name, position, scene){
        super(name, position, scene);
        this.inputs.addTouch();
        this._setupInputs();
    }
    /**
     * Gets the current object class name.
     * @returns the class name
     */ getClassName() {
        return "TouchCamera";
    }
    /** @internal */ _setupInputs() {
        const touch = this.inputs.attached["touch"];
        const mouse = this.inputs.attached["mouse"];
        if (mouse) {
            // enable touch in mouse input if touch module is not enabled
            mouse.touchEnabled = !touch;
        } else {
            // allow mouse in touch input if mouse module is not available
            touch.allowMouse = !mouse;
        }
    }
} //# sourceMappingURL=touchCamera.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/arcRotateCamera.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArcRotateCamera",
    ()=>ArcRotateCamera,
    "ComputeAlpha",
    ()=>ComputeAlpha,
    "ComputeBeta",
    ()=>ComputeBeta
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/decorators.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/observable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.scalar.functions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/node.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/mesh.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Behaviors$2f$Cameras$2f$autoRotationBehavior$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Behaviors/Cameras/autoRotationBehavior.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Behaviors$2f$Cameras$2f$bouncingBehavior$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Behaviors/Cameras/bouncingBehavior.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Behaviors$2f$Cameras$2f$framingBehavior$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Behaviors/Cameras/framingBehavior.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/camera.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$targetCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/targetCamera.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$arcRotateCameraInputsManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/arcRotateCameraInputsManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/tools.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node"].AddNodeConstructor("ArcRotateCamera", (name, scene)=>{
    return ()=>new ArcRotateCamera(name, 0, 0, 1.0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero(), scene);
});
function ComputeAlpha(offset) {
    // Default alpha to π/2 to handle the edge case where x and z are both zero (when looking along up axis)
    let alpha = Math.PI / 2;
    if (!(offset.x === 0 && offset.z === 0)) {
        alpha = Math.acos(offset.x / Math.sqrt(Math.pow(offset.x, 2) + Math.pow(offset.z, 2)));
    }
    if (offset.z < 0) {
        alpha = 2 * Math.PI - alpha;
    }
    return alpha;
}
function ComputeBeta(verticalOffset, radius) {
    return Math.acos(verticalOffset / radius);
}
// Returns the value if not NaN, otherwise returns the fallback value.
function CheckNaN(value, fallback) {
    return isNaN(value) ? fallback : value;
}
class ArcRotateCamera extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$targetCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TargetCamera"] {
    /**
     * Defines the target point of the camera.
     * The camera looks towards it from the radius distance.
     */ get target() {
        return this._target;
    }
    set target(value) {
        this.setTarget(value);
    }
    /**
     * Defines the target transform node of the camera.
     * The camera looks towards it from the radius distance.
     * Please note that setting a target host will disable panning.
     */ get targetHost() {
        return this._targetHost;
    }
    set targetHost(value) {
        if (value) {
            this.setTarget(value);
        }
    }
    /**
     * Return the current target position of the camera. This value is expressed in local space.
     * @returns the target position
     */ getTarget() {
        return this.target;
    }
    /**
     * Define the current local position of the camera in the scene
     */ get position() {
        return this._position;
    }
    set position(newPosition) {
        this.setPosition(newPosition);
    }
    /**
     * The vector the camera should consider as up. (default is Vector3(0, 1, 0) as returned by Vector3.Up())
     * Setting this will copy the given vector to the camera's upVector, and set rotation matrices to and from Y up.
     * DO NOT set the up vector using copyFrom or copyFromFloats, as this bypasses setting the above matrices.
     */ set upVector(vec) {
        if (!this._upToYMatrix) {
            this._yToUpMatrix = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"]();
            this._upToYMatrix = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"]();
            this._upVector = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        }
        vec.normalize();
        this._upVector.copyFrom(vec);
        this.setMatUp();
    }
    get upVector() {
        return this._upVector;
    }
    /**
     * Sets the Y-up to camera up-vector rotation matrix, and the up-vector to Y-up rotation matrix.
     */ setMatUp() {
        // from y-up to custom-up (used in _getViewMatrix)
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].RotationAlignToRef(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].UpReadOnly, this._upVector, this._yToUpMatrix);
        // from custom-up to y-up (used in rebuildAnglesAndRadius)
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].RotationAlignToRef(this._upVector, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].UpReadOnly, this._upToYMatrix);
    }
    //-- begin properties for backward compatibility for inputs
    /**
     * Gets or Set the pointer angular sensibility  along the X axis or how fast is the camera rotating.
     */ get angularSensibilityX() {
        const pointers = this.inputs.attached["pointers"];
        if (pointers) {
            return pointers.angularSensibilityX;
        }
        return 0;
    }
    set angularSensibilityX(value) {
        const pointers = this.inputs.attached["pointers"];
        if (pointers) {
            pointers.angularSensibilityX = value;
        }
    }
    /**
     * Gets or Set the pointer angular sensibility along the Y axis or how fast is the camera rotating.
     */ get angularSensibilityY() {
        const pointers = this.inputs.attached["pointers"];
        if (pointers) {
            return pointers.angularSensibilityY;
        }
        return 0;
    }
    set angularSensibilityY(value) {
        const pointers = this.inputs.attached["pointers"];
        if (pointers) {
            pointers.angularSensibilityY = value;
        }
    }
    /**
     * Gets or Set the pointer pinch precision or how fast is the camera zooming.
     */ get pinchPrecision() {
        const pointers = this.inputs.attached["pointers"];
        if (pointers) {
            return pointers.pinchPrecision;
        }
        return 0;
    }
    set pinchPrecision(value) {
        const pointers = this.inputs.attached["pointers"];
        if (pointers) {
            pointers.pinchPrecision = value;
        }
    }
    /**
     * Gets or Set the pointer pinch delta percentage or how fast is the camera zooming.
     * It will be used instead of pinchPrecision if different from 0.
     * It defines the percentage of current camera.radius to use as delta when pinch zoom is used.
     */ get pinchDeltaPercentage() {
        const pointers = this.inputs.attached["pointers"];
        if (pointers) {
            return pointers.pinchDeltaPercentage;
        }
        return 0;
    }
    set pinchDeltaPercentage(value) {
        const pointers = this.inputs.attached["pointers"];
        if (pointers) {
            pointers.pinchDeltaPercentage = value;
        }
    }
    /**
     * Gets or Set the pointer use natural pinch zoom to override the pinch precision
     * and pinch delta percentage.
     * When useNaturalPinchZoom is true, multi touch zoom will zoom in such
     * that any object in the plane at the camera's target point will scale
     * perfectly with finger motion.
     */ get useNaturalPinchZoom() {
        const pointers = this.inputs.attached["pointers"];
        if (pointers) {
            return pointers.useNaturalPinchZoom;
        }
        return false;
    }
    set useNaturalPinchZoom(value) {
        const pointers = this.inputs.attached["pointers"];
        if (pointers) {
            pointers.useNaturalPinchZoom = value;
        }
    }
    /**
     * Gets or Set the pointer panning sensibility or how fast is the camera moving.
     */ get panningSensibility() {
        const pointers = this.inputs.attached["pointers"];
        if (pointers) {
            return pointers.panningSensibility;
        }
        return 0;
    }
    set panningSensibility(value) {
        const pointers = this.inputs.attached["pointers"];
        if (pointers) {
            pointers.panningSensibility = value;
        }
    }
    /**
     * Gets or Set the list of keyboard keys used to control beta angle in a positive direction.
     */ get keysUp() {
        const keyboard = this.inputs.attached["keyboard"];
        if (keyboard) {
            return keyboard.keysUp;
        }
        return [];
    }
    set keysUp(value) {
        const keyboard = this.inputs.attached["keyboard"];
        if (keyboard) {
            keyboard.keysUp = value;
        }
    }
    /**
     * Gets or Set the list of keyboard keys used to control beta angle in a negative direction.
     */ get keysDown() {
        const keyboard = this.inputs.attached["keyboard"];
        if (keyboard) {
            return keyboard.keysDown;
        }
        return [];
    }
    set keysDown(value) {
        const keyboard = this.inputs.attached["keyboard"];
        if (keyboard) {
            keyboard.keysDown = value;
        }
    }
    /**
     * Gets or Set the list of keyboard keys used to control alpha angle in a negative direction.
     */ get keysLeft() {
        const keyboard = this.inputs.attached["keyboard"];
        if (keyboard) {
            return keyboard.keysLeft;
        }
        return [];
    }
    set keysLeft(value) {
        const keyboard = this.inputs.attached["keyboard"];
        if (keyboard) {
            keyboard.keysLeft = value;
        }
    }
    /**
     * Gets or Set the list of keyboard keys used to control alpha angle in a positive direction.
     */ get keysRight() {
        const keyboard = this.inputs.attached["keyboard"];
        if (keyboard) {
            return keyboard.keysRight;
        }
        return [];
    }
    set keysRight(value) {
        const keyboard = this.inputs.attached["keyboard"];
        if (keyboard) {
            keyboard.keysRight = value;
        }
    }
    /**
     * Gets or Set the mouse wheel precision or how fast is the camera zooming.
     */ get wheelPrecision() {
        const mousewheel = this.inputs.attached["mousewheel"];
        if (mousewheel) {
            return mousewheel.wheelPrecision;
        }
        return 0;
    }
    set wheelPrecision(value) {
        const mousewheel = this.inputs.attached["mousewheel"];
        if (mousewheel) {
            mousewheel.wheelPrecision = value;
        }
    }
    /**
     * Gets or Set the boolean value that controls whether or not the mouse wheel
     * zooms to the location of the mouse pointer or not.  The default is false.
     */ get zoomToMouseLocation() {
        const mousewheel = this.inputs.attached["mousewheel"];
        if (mousewheel) {
            return mousewheel.zoomToMouseLocation;
        }
        return false;
    }
    set zoomToMouseLocation(value) {
        const mousewheel = this.inputs.attached["mousewheel"];
        if (mousewheel) {
            mousewheel.zoomToMouseLocation = value;
        }
    }
    /**
     * Gets or Set the mouse wheel delta percentage or how fast is the camera zooming.
     * It will be used instead of wheelPrecision if different from 0.
     * It defines the percentage of current camera.radius to use as delta when wheel zoom is used.
     */ get wheelDeltaPercentage() {
        const mousewheel = this.inputs.attached["mousewheel"];
        if (mousewheel) {
            return mousewheel.wheelDeltaPercentage;
        }
        return 0;
    }
    set wheelDeltaPercentage(value) {
        const mousewheel = this.inputs.attached["mousewheel"];
        if (mousewheel) {
            mousewheel.wheelDeltaPercentage = value;
        }
    }
    /**
     * If true, indicates the camera is currently interpolating to a new pose.
     */ get isInterpolating() {
        return this._isInterpolating;
    }
    /**
     * Gets the bouncing behavior of the camera if it has been enabled.
     * @see https://doc.babylonjs.com/features/featuresDeepDive/behaviors/cameraBehaviors#bouncing-behavior
     */ get bouncingBehavior() {
        return this._bouncingBehavior;
    }
    /**
     * Defines if the bouncing behavior of the camera is enabled on the camera.
     * @see https://doc.babylonjs.com/features/featuresDeepDive/behaviors/cameraBehaviors#bouncing-behavior
     */ get useBouncingBehavior() {
        return this._bouncingBehavior != null;
    }
    set useBouncingBehavior(value) {
        if (value === this.useBouncingBehavior) {
            return;
        }
        if (value) {
            this._bouncingBehavior = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Behaviors$2f$Cameras$2f$bouncingBehavior$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BouncingBehavior"]();
            this.addBehavior(this._bouncingBehavior);
        } else if (this._bouncingBehavior) {
            this.removeBehavior(this._bouncingBehavior);
            this._bouncingBehavior = null;
        }
    }
    /**
     * Gets the framing behavior of the camera if it has been enabled.
     * @see https://doc.babylonjs.com/features/featuresDeepDive/behaviors/cameraBehaviors#framing-behavior
     */ get framingBehavior() {
        return this._framingBehavior;
    }
    /**
     * Defines if the framing behavior of the camera is enabled on the camera.
     * @see https://doc.babylonjs.com/features/featuresDeepDive/behaviors/cameraBehaviors#framing-behavior
     */ get useFramingBehavior() {
        return this._framingBehavior != null;
    }
    set useFramingBehavior(value) {
        if (value === this.useFramingBehavior) {
            return;
        }
        if (value) {
            this._framingBehavior = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Behaviors$2f$Cameras$2f$framingBehavior$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FramingBehavior"]();
            this.addBehavior(this._framingBehavior);
        } else if (this._framingBehavior) {
            this.removeBehavior(this._framingBehavior);
            this._framingBehavior = null;
        }
    }
    /**
     * Gets the auto rotation behavior of the camera if it has been enabled.
     * @see https://doc.babylonjs.com/features/featuresDeepDive/behaviors/cameraBehaviors#autorotation-behavior
     */ get autoRotationBehavior() {
        return this._autoRotationBehavior;
    }
    /**
     * Defines if the auto rotation behavior of the camera is enabled on the camera.
     * @see https://doc.babylonjs.com/features/featuresDeepDive/behaviors/cameraBehaviors#autorotation-behavior
     */ get useAutoRotationBehavior() {
        return this._autoRotationBehavior != null;
    }
    set useAutoRotationBehavior(value) {
        if (value === this.useAutoRotationBehavior) {
            return;
        }
        if (value) {
            this._autoRotationBehavior = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Behaviors$2f$Cameras$2f$autoRotationBehavior$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AutoRotationBehavior"]();
            this.addBehavior(this._autoRotationBehavior);
        } else if (this._autoRotationBehavior) {
            this.removeBehavior(this._autoRotationBehavior);
            this._autoRotationBehavior = null;
        }
    }
    /**
     * Instantiates a new ArcRotateCamera in a given scene
     * @param name Defines the name of the camera
     * @param alpha Defines the camera rotation along the longitudinal axis
     * @param beta Defines the camera rotation along the latitudinal axis
     * @param radius Defines the camera distance from its target
     * @param target Defines the camera target
     * @param scene Defines the scene the camera belongs to
     * @param setActiveOnSceneIfNoneActive Defines whether the camera should be marked as active if not other active cameras have been defined
     */ constructor(name, alpha, beta, radius, target, scene, setActiveOnSceneIfNoneActive = true){
        super(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero(), scene, setActiveOnSceneIfNoneActive);
        /**
         * Current inertia value on the longitudinal axis.
         * The bigger this number the longer it will take for the camera to stop.
         */ this.inertialAlphaOffset = 0;
        /**
         * Current inertia value on the latitudinal axis.
         * The bigger this number the longer it will take for the camera to stop.
         */ this.inertialBetaOffset = 0;
        /**
         * Current inertia value on the radius axis.
         * The bigger this number the longer it will take for the camera to stop.
         */ this.inertialRadiusOffset = 0;
        /**
         * Minimum allowed angle on the longitudinal axis.
         * This can help limiting how the Camera is able to move in the scene.
         */ this.lowerAlphaLimit = null;
        /**
         * Maximum allowed angle on the longitudinal axis.
         * This can help limiting how the Camera is able to move in the scene.
         */ this.upperAlphaLimit = null;
        /**
         * Minimum allowed angle on the latitudinal axis.
         * This can help limiting how the Camera is able to move in the scene.
         */ this.lowerBetaLimit = 0.01;
        /**
         * Maximum allowed angle on the latitudinal axis.
         * This can help limiting how the Camera is able to move in the scene.
         */ this.upperBetaLimit = Math.PI - 0.01;
        /**
         * Minimum allowed distance of the camera to the target (The camera can not get closer).
         * This can help limiting how the Camera is able to move in the scene.
         */ this.lowerRadiusLimit = null;
        /**
         * Maximum allowed distance of the camera to the target (The camera can not get further).
         * This can help limiting how the Camera is able to move in the scene.
         */ this.upperRadiusLimit = null;
        /**
         * Minimum allowed vertical target position of the camera.
         * Use this setting in combination with `upperRadiusLimit` to set a global limit for the Cameras vertical position.
         */ this.lowerTargetYLimit = -Infinity;
        /**
         * Defines the current inertia value used during panning of the camera along the X axis.
         */ this.inertialPanningX = 0;
        /**
         * Defines the current inertia value used during panning of the camera along the Y axis.
         */ this.inertialPanningY = 0;
        /**
         * Defines the distance used to consider the camera in pan mode vs pinch/zoom.
         * Basically if your fingers moves away from more than this distance you will be considered
         * in pinch mode.
         */ this.pinchToPanMaxDistance = 20;
        /**
         * Defines the maximum distance the camera can pan.
         * This could help keeping the camera always in your scene.
         */ this.panningDistanceLimit = null;
        /**
         * Defines the target of the camera before panning.
         */ this.panningOriginTarget = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        /**
         * Defines the value of the inertia used during panning.
         * 0 would mean stop inertia and one would mean no deceleration at all.
         */ this.panningInertia = 0.9;
        //-- end properties for backward compatibility for inputs
        /**
         * Defines how much the radius should be scaled while zooming on a particular mesh (through the zoomOn function)
         */ this.zoomOnFactor = 1;
        /**
         * Defines a screen offset for the camera position.
         */ this.targetScreenOffset = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"].Zero();
        /**
         * Allows the camera to be completely reversed.
         * If false the camera can not arrive upside down.
         */ this.allowUpsideDown = true;
        /**
         * Define if double tap/click is used to restore the previously saved state of the camera.
         */ this.useInputToRestoreState = true;
        /**
         * Factor for restoring information interpolation. default is 0 = off. Any value \< 0 or \> 1 will disable interpolation.
         */ this.restoreStateInterpolationFactor = 0;
        this._currentInterpolationFactor = 0;
        /** @internal */ this._viewMatrix = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"]();
        /**
         * Defines the allowed panning axis.
         */ this.panningAxis = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](1, 1, 0);
        this._transformedDirection = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
        /**
         * Defines if camera will eliminate transform on y axis.
         */ this.mapPanning = false;
        // This is redundant with all _goal* properties being NaN, but we track it anyway because we check for active interpolation in the hot path.
        this._isInterpolating = false;
        /**
         * Observable triggered when the transform node target has been changed on the camera.
         */ this.onMeshTargetChangedObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * Defines whether the camera should check collision with the objects oh the scene.
         * @see https://doc.babylonjs.com/features/featuresDeepDive/cameras/camera_collisions#how-can-i-do-this-
         */ this.checkCollisions = false;
        /**
         * Defines the collision radius of the camera.
         * This simulates a sphere around the camera.
         * @see https://doc.babylonjs.com/features/featuresDeepDive/cameras/camera_collisions#arcrotatecamera
         */ this.collisionRadius = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0.5, 0.5, 0.5);
        this._previousPosition = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        this._collisionVelocity = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        this._newPosition = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        this._computationVector = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        this._goalAlpha = NaN;
        this._goalBeta = NaN;
        this._goalRadius = NaN;
        this._goalTarget = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](NaN, NaN, NaN);
        this._goalTargetScreenOffset = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](NaN, NaN);
        this._onCollisionPositionChange = (collisionId, newPosition, collidedMesh = null)=>{
            if (!collidedMesh) {
                this._previousPosition.copyFrom(this._position);
            } else {
                this.setPosition(newPosition);
                if (this.onCollide) {
                    this.onCollide(collidedMesh);
                }
            }
            // Recompute because of constraints
            const cosa = Math.cos(this.alpha);
            const sina = Math.sin(this.alpha);
            const cosb = Math.cos(this.beta);
            let sinb = Math.sin(this.beta);
            if (sinb === 0) {
                sinb = 0.0001;
            }
            const target = this._getTargetPosition();
            this._computationVector.copyFromFloats(this.radius * cosa * sinb, this.radius * cosb, this.radius * sina * sinb);
            target.addToRef(this._computationVector, this._newPosition);
            this._position.copyFrom(this._newPosition);
            let up = this.upVector;
            if (this.allowUpsideDown && this.beta < 0) {
                up = up.clone();
                up = up.negate();
            }
            this._computeViewMatrix(this._position, target, up);
            this._viewMatrix.addAtIndex(12, this.targetScreenOffset.x);
            this._viewMatrix.addAtIndex(13, this.targetScreenOffset.y);
            this._collisionTriggered = false;
        };
        this._target = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        if (target) {
            this.setTarget(target);
        }
        this.alpha = alpha;
        this.beta = beta;
        this.radius = radius;
        this.getViewMatrix();
        this.inputs = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$arcRotateCameraInputsManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArcRotateCameraInputsManager"](this);
        this.inputs.addKeyboard().addMouseWheel().addPointers();
    }
    // Cache
    /** @internal */ _initCache() {
        super._initCache();
        this._cache._target = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
        this._cache.alpha = undefined;
        this._cache.beta = undefined;
        this._cache.radius = undefined;
        this._cache.targetScreenOffset = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"].Zero();
    }
    /**
     * @internal
     */ _updateCache(ignoreParentClass) {
        if (!ignoreParentClass) {
            super._updateCache();
        }
        this._cache._target.copyFrom(this._getTargetPosition());
        this._cache.alpha = this.alpha;
        this._cache.beta = this.beta;
        this._cache.radius = this.radius;
        this._cache.targetScreenOffset.copyFrom(this.targetScreenOffset);
    }
    _getTargetPosition() {
        if (this._targetHost && this._targetHost.getAbsolutePosition) {
            const pos = this._targetHost.getAbsolutePosition();
            if (this._targetBoundingCenter) {
                pos.addToRef(this._targetBoundingCenter, this._target);
            } else {
                this._target.copyFrom(pos);
            }
        }
        const lockedTargetPosition = this._getLockedTargetPosition();
        if (lockedTargetPosition) {
            return lockedTargetPosition;
        }
        return this._target;
    }
    /**
     * Stores the current state of the camera (alpha, beta, radius and target)
     * @returns the camera itself
     */ storeState() {
        this._storedAlpha = this.alpha;
        this._storedBeta = this.beta;
        this._storedRadius = this.radius;
        this._storedTarget = this._getTargetPosition().clone();
        this._storedTargetScreenOffset = this.targetScreenOffset.clone();
        return super.storeState();
    }
    /**
     * @internal
     * Restored camera state. You must call storeState() first
     */ _restoreStateValues() {
        if (this.hasStateStored() && this.restoreStateInterpolationFactor > __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Epsilon"] && this.restoreStateInterpolationFactor < 1) {
            this.interpolateTo(this._storedAlpha, this._storedBeta, this._storedRadius, this._storedTarget, this._storedTargetScreenOffset, this.restoreStateInterpolationFactor);
            return true;
        }
        if (!super._restoreStateValues()) {
            return false;
        }
        this.setTarget(this._storedTarget.clone());
        this.alpha = this._storedAlpha;
        this.beta = this._storedBeta;
        this.radius = this._storedRadius;
        this.targetScreenOffset = this._storedTargetScreenOffset.clone();
        this.inertialAlphaOffset = 0;
        this.inertialBetaOffset = 0;
        this.inertialRadiusOffset = 0;
        this.inertialPanningX = 0;
        this.inertialPanningY = 0;
        return true;
    }
    /**
     * Stops any in-progress interpolation.
     */ stopInterpolation() {
        this._goalAlpha = NaN;
        this._goalBeta = NaN;
        this._goalRadius = NaN;
        this._goalTarget.set(NaN, NaN, NaN);
        this._goalTargetScreenOffset.set(NaN, NaN);
    }
    /**
     * Interpolates the camera to a goal state.
     * @param alpha Defines the goal alpha.
     * @param beta Defines the goal beta.
     * @param radius Defines the goal radius.
     * @param target Defines the goal target.
     * @param targetScreenOffset Defines the goal target screen offset.
     * @param interpolationFactor A value  between 0 and 1 that determines the speed of the interpolation.
     * @remarks Passing undefined for any of the parameters will use the current value (effectively stopping any in-progress interpolation for that parameter).
     *          Passing NaN will not start or stop any interpolation for that parameter (effectively allowing multiple interpolations of different parameters to overlap).
     */ interpolateTo(alpha = this.alpha, beta = this.beta, radius = this.radius, target = this.target, targetScreenOffset = this.targetScreenOffset, interpolationFactor) {
        this.inertialAlphaOffset = 0;
        this.inertialBetaOffset = 0;
        this.inertialRadiusOffset = 0;
        this.inertialPanningX = 0;
        this.inertialPanningY = 0;
        if (interpolationFactor != null) {
            this._currentInterpolationFactor = interpolationFactor;
        } else if (this.restoreStateInterpolationFactor !== 0) {
            this._currentInterpolationFactor = this.restoreStateInterpolationFactor;
        } else {
            this._currentInterpolationFactor = 0.1;
        }
        // If NaN is passed in for a goal value, keep the current goal value.
        this._goalAlpha = CheckNaN(alpha, this._goalAlpha);
        this._goalBeta = CheckNaN(beta, this._goalBeta);
        this._goalRadius = CheckNaN(radius, this._goalRadius);
        this._goalTarget.set(CheckNaN(target.x, this._goalTarget.x), CheckNaN(target.y, this._goalTarget.y), CheckNaN(target.z, this._goalTarget.z));
        this._goalTargetScreenOffset.set(CheckNaN(targetScreenOffset.x, this._goalTargetScreenOffset.x), CheckNaN(targetScreenOffset.y, this._goalTargetScreenOffset.y));
        this._goalAlpha = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Clamp"])(this._goalAlpha, this.lowerAlphaLimit ?? -Infinity, this.upperAlphaLimit ?? Infinity);
        this._goalBeta = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Clamp"])(this._goalBeta, this.lowerBetaLimit ?? -Infinity, this.upperBetaLimit ?? Infinity);
        this._goalRadius = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Clamp"])(this._goalRadius, this.lowerRadiusLimit ?? -Infinity, this.upperRadiusLimit ?? Infinity);
        this._goalTarget.y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Clamp"])(this._goalTarget.y, this.lowerTargetYLimit ?? -Infinity, Infinity);
        this._isInterpolating = true;
    }
    // Synchronized
    /** @internal */ _isSynchronizedViewMatrix() {
        if (!super._isSynchronizedViewMatrix()) {
            return false;
        }
        return this._cache._target.equals(this._getTargetPosition()) && this._cache.alpha === this.alpha && this._cache.beta === this.beta && this._cache.radius === this.radius && this._cache.targetScreenOffset.equals(this.targetScreenOffset);
    }
    /**
     * Attached controls to the current camera.
     * @param ignored defines an ignored parameter kept for backward compatibility.
     * @param noPreventDefault Defines whether event caught by the controls should call preventdefault() (https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)
     * @param useCtrlForPanning  Defines whether ctrl is used for panning within the controls
     * @param panningMouseButton Defines whether panning is allowed through mouse click button
     */ attachControl(ignored, noPreventDefault, useCtrlForPanning = true, panningMouseButton = 2) {
        const args = arguments;
        noPreventDefault = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tools"].BackCompatCameraNoPreventDefault(args);
        this._useCtrlForPanning = useCtrlForPanning;
        this._panningMouseButton = panningMouseButton;
        // backwards compatibility
        if (typeof args[0] === "boolean") {
            if (args.length > 1) {
                this._useCtrlForPanning = args[1];
            }
            if (args.length > 2) {
                this._panningMouseButton = args[2];
            }
        }
        this.inputs.attachElement(noPreventDefault);
        this._reset = ()=>{
            this.inertialAlphaOffset = 0;
            this.inertialBetaOffset = 0;
            this.inertialRadiusOffset = 0;
            this.inertialPanningX = 0;
            this.inertialPanningY = 0;
        };
    }
    /**
     * Detach the current controls from the specified dom element.
     */ detachControl() {
        this.inputs.detachElement();
        if (this._reset) {
            this._reset();
        }
    }
    /** @internal */ _checkInputs() {
        //if (async) collision inspection was triggered, don't update the camera's position - until the collision callback was called.
        if (this._collisionTriggered) {
            return;
        }
        this.inputs.checkInputs();
        let hasUserInteractions = false;
        const inertialPanningLimit = this.speed * this._panningEpsilon;
        const inertialRotationLimit = this.speed * this._rotationEpsilon;
        // Inertia
        if (this.inertialAlphaOffset !== 0 || this.inertialBetaOffset !== 0 || this.inertialRadiusOffset !== 0) {
            hasUserInteractions = true;
            const directionModifier = this.invertRotation ? -1 : 1;
            const handednessMultiplier = this._calculateHandednessMultiplier();
            let inertialAlphaOffset = this.inertialAlphaOffset * handednessMultiplier;
            if (this.beta < 0) {
                inertialAlphaOffset *= -1;
            }
            this.alpha += inertialAlphaOffset * directionModifier;
            this.beta += this.inertialBetaOffset * directionModifier;
            this.radius -= this.inertialRadiusOffset;
            this.inertialAlphaOffset *= this.inertia;
            this.inertialBetaOffset *= this.inertia;
            this.inertialRadiusOffset *= this.inertia;
            if (Math.abs(this.inertialAlphaOffset) < inertialRotationLimit) {
                this.inertialAlphaOffset = 0;
            }
            if (Math.abs(this.inertialBetaOffset) < inertialRotationLimit) {
                this.inertialBetaOffset = 0;
            }
            if (Math.abs(this.inertialRadiusOffset) < inertialRotationLimit) {
                this.inertialRadiusOffset = 0;
            }
        }
        // Panning inertia
        if (this.inertialPanningX !== 0 || this.inertialPanningY !== 0) {
            hasUserInteractions = true;
            const localDirection = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](this.inertialPanningX, this.inertialPanningY, this.inertialPanningY);
            this._viewMatrix.invertToRef(this._cameraTransformMatrix);
            localDirection.multiplyInPlace(this.panningAxis);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].TransformNormalToRef(localDirection, this._cameraTransformMatrix, this._transformedDirection);
            // If mapPanning is enabled, we need to take the upVector into account and
            // make sure we're not panning in the y direction
            if (this.mapPanning) {
                const up = this.upVector;
                const right = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].CrossToRef(this._transformedDirection, up, this._transformedDirection);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].CrossToRef(up, right, this._transformedDirection);
            } else if (!this.panningAxis.y) {
                this._transformedDirection.y = 0;
            }
            if (!this._targetHost) {
                if (this.panningDistanceLimit) {
                    this._transformedDirection.addInPlace(this._target);
                    const distanceSquared = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].DistanceSquared(this._transformedDirection, this.panningOriginTarget);
                    if (distanceSquared <= this.panningDistanceLimit * this.panningDistanceLimit) {
                        this._target.copyFrom(this._transformedDirection);
                    }
                } else {
                    if (this.parent) {
                        const m = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[0];
                        this.parent.getWorldMatrix().getRotationMatrixToRef(m);
                        m.transposeToRef(m);
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinatesToRef(this._transformedDirection, m, this._transformedDirection);
                    }
                    this._target.addInPlace(this._transformedDirection);
                }
            }
            this.inertialPanningX *= this.panningInertia;
            this.inertialPanningY *= this.panningInertia;
            if (Math.abs(this.inertialPanningX) < inertialPanningLimit) {
                this.inertialPanningX = 0;
            }
            if (Math.abs(this.inertialPanningY) < inertialPanningLimit) {
                this.inertialPanningY = 0;
            }
        }
        if (hasUserInteractions) {
            this.stopInterpolation();
        } else if (this._isInterpolating) {
            let isInterpolating = false;
            const dt = this._scene.getEngine().getDeltaTime() / 1000;
            const t = 1 - Math.pow(2, -dt / this._currentInterpolationFactor);
            // NOTE: If the goal is NaN, it means we are not interpolating to a new value, so we can use the current value. Hence the calls to checkNaN.
            // Get the goal radius immediately as we'll need it for determining interpolation termination for the target.
            const goalRadius = CheckNaN(this._goalRadius, this.radius);
            // Interpolate the target if we haven't reached the goal yet.
            if (!isNaN(this._goalTarget.x) || !isNaN(this._goalTarget.y) || !isNaN(this._goalTarget.z)) {
                const goalTarget = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0].set(CheckNaN(this._goalTarget.x, this._target.x), CheckNaN(this._goalTarget.y, this._target.y), CheckNaN(this._goalTarget.z, this._target.z));
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].LerpToRef(this.target, goalTarget, t, this._target);
                // Terminate the target interpolation if we the target is close relative to the radius.
                // This is when visually (regardless of scale) the target appears close to its final goal position.
                if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Distance(this.target, goalTarget) * 10 / goalRadius < __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Epsilon"]) {
                    this._goalTarget.set(NaN, NaN, NaN);
                    this.target.copyFrom(goalTarget);
                    // Call setTarget to trigger side effects like onMeshTargetChangedObservable.
                    // NOTE: We pass in true for allowSamePosition because we already checked that the goal target is different from the current target,
                    // but since we are updating the existing target Vector3 instance, it will otherwise look like the value has not changed.
                    this.setTarget(this.target, false, true, true);
                } else {
                    isInterpolating = true;
                }
            }
            // Interpolate the rotation if we haven't reached the goal yet.
            if (!isNaN(this._goalAlpha) || !isNaN(this._goalBeta)) {
                // Using quaternion for smoother interpolation (and no Euler angles modulo)
                const goalRotation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"].RotationAlphaBetaGammaToRef(CheckNaN(this._goalAlpha, this.alpha), CheckNaN(this._goalBeta, this.beta), 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Quaternion[0]);
                const currentRotation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"].RotationAlphaBetaGammaToRef(this.alpha, this.beta, 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Quaternion[1]);
                const newRotation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"].SlerpToRef(currentRotation, goalRotation, t, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Quaternion[2]);
                newRotation.normalize();
                const newAlphaBetaGamma = newRotation.toAlphaBetaGammaToRef(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0]);
                this.alpha = newAlphaBetaGamma.x;
                this.beta = newAlphaBetaGamma.y;
                // Terminate the rotation interpolation when the rotation appears visually close to the final goal rotation.
                if (newRotation.isApprox(goalRotation, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Epsilon"] / 5)) {
                    this._goalAlpha = NaN;
                    this._goalBeta = NaN;
                    const goalAlphaBetaGamma = goalRotation.toAlphaBetaGammaToRef(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0]);
                    this.alpha = goalAlphaBetaGamma.x;
                    this.beta = goalAlphaBetaGamma.y;
                } else {
                    isInterpolating = true;
                }
            }
            // Interpolate the radius if we haven't reached the goal yet.
            if (!isNaN(this._goalRadius)) {
                this.radius += (goalRadius - this.radius) * t;
                // Terminate the radius interpolation when we are 99.9% of the way to the goal radius, at which point it is visually indistinguishable from the goal.
                if (Math.abs(goalRadius / this.radius - 1) < __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Epsilon"]) {
                    this._goalRadius = NaN;
                    this.radius = goalRadius;
                } else {
                    isInterpolating = true;
                }
            }
            // Interpolate the target screen offset if we haven't reached the goal yet.
            if (!isNaN(this._goalTargetScreenOffset.x) || !isNaN(this._goalTargetScreenOffset.y)) {
                const goalTargetScreenOffset = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector2[0].set(CheckNaN(this._goalTargetScreenOffset.x, this.targetScreenOffset.x), CheckNaN(this._goalTargetScreenOffset.y, this.targetScreenOffset.y));
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"].LerpToRef(this.targetScreenOffset, goalTargetScreenOffset, t, this.targetScreenOffset);
                // Terminate the target screen offset interpolation when the target screen offset appears visually close to the final goal target screen offset.
                if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"].Distance(this.targetScreenOffset, goalTargetScreenOffset) < __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Epsilon"]) {
                    this._goalTargetScreenOffset.set(NaN, NaN);
                    this.targetScreenOffset.copyFrom(goalTargetScreenOffset);
                } else {
                    isInterpolating = true;
                }
            }
            this._isInterpolating = isInterpolating;
        }
        // Limits
        this._checkLimits();
        super._checkInputs();
    }
    _checkLimits() {
        if (this.lowerBetaLimit === null || this.lowerBetaLimit === undefined) {
            if (this.allowUpsideDown && this.beta > Math.PI) {
                this.beta = this.beta - 2 * Math.PI;
            }
        } else {
            if (this.beta < this.lowerBetaLimit) {
                this.beta = this.lowerBetaLimit;
            }
        }
        if (this.upperBetaLimit === null || this.upperBetaLimit === undefined) {
            if (this.allowUpsideDown && this.beta < -Math.PI) {
                this.beta = this.beta + 2 * Math.PI;
            }
        } else {
            if (this.beta > this.upperBetaLimit) {
                this.beta = this.upperBetaLimit;
            }
        }
        if (this.lowerAlphaLimit !== null && this.alpha < this.lowerAlphaLimit) {
            this.alpha = this.lowerAlphaLimit;
        }
        if (this.upperAlphaLimit !== null && this.alpha > this.upperAlphaLimit) {
            this.alpha = this.upperAlphaLimit;
        }
        if (this.lowerRadiusLimit !== null && this.radius < this.lowerRadiusLimit) {
            this.radius = this.lowerRadiusLimit;
            this.inertialRadiusOffset = 0;
        }
        if (this.upperRadiusLimit !== null && this.radius > this.upperRadiusLimit) {
            this.radius = this.upperRadiusLimit;
            this.inertialRadiusOffset = 0;
        }
        this.target.y = Math.max(this.target.y, this.lowerTargetYLimit);
    }
    /**
     * Rebuilds angles (alpha, beta) and radius from the give position and target
     */ rebuildAnglesAndRadius() {
        this._position.subtractToRef(this._getTargetPosition(), this._computationVector);
        // need to rotate to Y up equivalent if up vector not Axis.Y
        if (this._upVector.x !== 0 || this._upVector.y !== 1.0 || this._upVector.z !== 0) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinatesToRef(this._computationVector, this._upToYMatrix, this._computationVector);
        }
        this.radius = this._computationVector.length();
        if (this.radius === 0) {
            this.radius = 0.0001; // Just to avoid division by zero
        }
        // Alpha and Beta
        const previousAlpha = this.alpha;
        this.alpha = ComputeAlpha(this._computationVector);
        this.beta = ComputeBeta(this._computationVector.y, this.radius);
        // Calculate the number of revolutions between the new and old alpha values.
        const alphaCorrectionTurns = Math.round((previousAlpha - this.alpha) / (2.0 * Math.PI));
        // Adjust alpha so that its numerical representation is the closest one to the old value.
        this.alpha += alphaCorrectionTurns * 2.0 * Math.PI;
        this._checkLimits();
    }
    /**
     * Use a position to define the current camera related information like alpha, beta and radius
     * @param position Defines the position to set the camera at
     */ setPosition(position) {
        if (this._position.equals(position)) {
            return;
        }
        this._position.copyFrom(position);
        this.rebuildAnglesAndRadius();
    }
    /**
     * Defines the target the camera should look at.
     * This will automatically adapt alpha beta and radius to fit within the new target.
     * Please note that setting a target as a mesh will disable panning.
     * @param target Defines the new target as a Vector or a transform node
     * @param toBoundingCenter In case of a mesh target, defines whether to target the mesh position or its bounding information center
     * @param allowSamePosition If false, prevents reapplying the new computed position if it is identical to the current one (optim)
     * @param cloneAlphaBetaRadius If true, replicate the current setup (alpha, beta, radius) on the new target
     */ setTarget(target, toBoundingCenter = false, allowSamePosition = false, cloneAlphaBetaRadius = false) {
        cloneAlphaBetaRadius = this.overrideCloneAlphaBetaRadius ?? cloneAlphaBetaRadius;
        if (target.computeWorldMatrix) {
            if (toBoundingCenter && target.getBoundingInfo) {
                this._targetBoundingCenter = target.getBoundingInfo().boundingBox.centerWorld.clone();
            } else {
                this._targetBoundingCenter = null;
            }
            target.computeWorldMatrix();
            this._targetHost = target;
            this._target = this._getTargetPosition();
            this.onMeshTargetChangedObservable.notifyObservers(this._targetHost);
        } else {
            const newTarget = target;
            const currentTarget = this._getTargetPosition();
            if (currentTarget && !allowSamePosition && currentTarget.equals(newTarget)) {
                return;
            }
            this._targetHost = null;
            this._target = newTarget;
            this._targetBoundingCenter = null;
            this.onMeshTargetChangedObservable.notifyObservers(null);
        }
        if (!cloneAlphaBetaRadius) {
            this.rebuildAnglesAndRadius();
        }
    }
    /** @internal */ _getViewMatrix() {
        // Compute
        const cosa = Math.cos(this.alpha);
        const sina = Math.sin(this.alpha);
        const cosb = Math.cos(this.beta);
        let sinb = Math.sin(this.beta);
        if (sinb === 0) {
            sinb = 0.0001;
        }
        if (this.radius === 0) {
            this.radius = 0.0001; // Just to avoid division by zero
        }
        const target = this._getTargetPosition();
        this._computationVector.copyFromFloats(this.radius * cosa * sinb, this.radius * cosb, this.radius * sina * sinb);
        // Rotate according to up vector
        if (this._upVector.x !== 0 || this._upVector.y !== 1.0 || this._upVector.z !== 0) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinatesToRef(this._computationVector, this._yToUpMatrix, this._computationVector);
        }
        target.addToRef(this._computationVector, this._newPosition);
        if (this.getScene().collisionsEnabled && this.checkCollisions) {
            const coordinator = this.getScene().collisionCoordinator;
            if (!this._collider) {
                this._collider = coordinator.createCollider();
            }
            this._collider._radius = this.collisionRadius;
            this._newPosition.subtractToRef(this._position, this._collisionVelocity);
            this._collisionTriggered = true;
            coordinator.getNewPosition(this._position, this._collisionVelocity, this._collider, 3, null, this._onCollisionPositionChange, this.uniqueId);
        } else {
            this._position.copyFrom(this._newPosition);
            let up = this.upVector;
            if (this.allowUpsideDown && sinb < 0) {
                up = up.negate();
            }
            this._computeViewMatrix(this._position, target, up);
            this._viewMatrix.addAtIndex(12, this.targetScreenOffset.x);
            this._viewMatrix.addAtIndex(13, this.targetScreenOffset.y);
        }
        this._currentTarget.copyFrom(target);
        return this._viewMatrix;
    }
    /**
     * Zooms on a mesh to be at the min distance where we could see it fully in the current viewport.
     * @param meshes Defines the mesh to zoom on
     * @param doNotUpdateMaxZ Defines whether or not maxZ should be updated whilst zooming on the mesh (this can happen if the mesh is big and the maxradius pretty small for instance)
     */ zoomOn(meshes, doNotUpdateMaxZ = false) {
        meshes = meshes || this.getScene().meshes;
        const minMaxVector = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"].MinMax(meshes);
        let distance = this._calculateLowerRadiusFromModelBoundingSphere(minMaxVector.min, minMaxVector.max);
        // If there are defined limits, we need to take them into account
        distance = Math.max(Math.min(distance, this.upperRadiusLimit || Number.MAX_VALUE), this.lowerRadiusLimit || 0);
        this.radius = distance * this.zoomOnFactor;
        if (this.mode === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Camera"].ORTHOGRAPHIC_CAMERA) {
            const aspectRatio = this.getScene().getEngine().getAspectRatio(this);
            const orthoExtent = distance * this.zoomOnFactor / 2;
            this.orthoLeft = -orthoExtent * aspectRatio;
            this.orthoRight = orthoExtent * aspectRatio;
            this.orthoBottom = -orthoExtent;
            this.orthoTop = orthoExtent;
        }
        this.focusOn({
            min: minMaxVector.min,
            max: minMaxVector.max,
            distance: distance
        }, doNotUpdateMaxZ);
    }
    /**
     * Focus on a mesh or a bounding box. This adapts the target and maxRadius if necessary but does not update the current radius.
     * The target will be changed but the radius
     * @param meshesOrMinMaxVectorAndDistance Defines the mesh or bounding info to focus on
     * @param doNotUpdateMaxZ Defines whether or not maxZ should be updated whilst zooming on the mesh (this can happen if the mesh is big and the maxradius pretty small for instance)
     */ focusOn(meshesOrMinMaxVectorAndDistance, doNotUpdateMaxZ = false) {
        let meshesOrMinMaxVector;
        let distance;
        if (meshesOrMinMaxVectorAndDistance.min === undefined) {
            // meshes
            const meshes = meshesOrMinMaxVectorAndDistance || this.getScene().meshes;
            meshesOrMinMaxVector = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"].MinMax(meshes);
            distance = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Distance(meshesOrMinMaxVector.min, meshesOrMinMaxVector.max);
        } else {
            //minMaxVector and distance
            const minMaxVectorAndDistance = meshesOrMinMaxVectorAndDistance;
            meshesOrMinMaxVector = minMaxVectorAndDistance;
            distance = minMaxVectorAndDistance.distance;
        }
        this._target = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"].Center(meshesOrMinMaxVector);
        if (!doNotUpdateMaxZ) {
            this.maxZ = distance * 2;
        }
    }
    /**
     * @override
     * Override Camera.createRigCamera
     * @param name the name of the camera
     * @param cameraIndex the index of the camera in the rig cameras array
     */ createRigCamera(name, cameraIndex) {
        let alphaShift = 0;
        switch(this.cameraRigMode){
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Camera"].RIG_MODE_STEREOSCOPIC_ANAGLYPH:
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Camera"].RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Camera"].RIG_MODE_STEREOSCOPIC_OVERUNDER:
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Camera"].RIG_MODE_STEREOSCOPIC_INTERLACED:
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Camera"].RIG_MODE_VR:
                alphaShift = this._cameraRigParams.stereoHalfAngle * (cameraIndex === 0 ? 1 : -1);
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Camera"].RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
                alphaShift = this._cameraRigParams.stereoHalfAngle * (cameraIndex === 0 ? -1 : 1);
                break;
        }
        const rigCam = new ArcRotateCamera(name, this.alpha + alphaShift, this.beta, this.radius, this._target, this.getScene());
        rigCam._cameraRigParams = {};
        rigCam.isRigCamera = true;
        rigCam.rigParent = this;
        rigCam.upVector = this.upVector;
        rigCam.mode = this.mode;
        rigCam.orthoLeft = this.orthoLeft;
        rigCam.orthoRight = this.orthoRight;
        rigCam.orthoBottom = this.orthoBottom;
        rigCam.orthoTop = this.orthoTop;
        return rigCam;
    }
    /**
     * @internal
     * @override
     * Override Camera._updateRigCameras
     */ _updateRigCameras() {
        const camLeft = this._rigCameras[0];
        const camRight = this._rigCameras[1];
        camLeft.beta = camRight.beta = this.beta;
        switch(this.cameraRigMode){
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Camera"].RIG_MODE_STEREOSCOPIC_ANAGLYPH:
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Camera"].RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Camera"].RIG_MODE_STEREOSCOPIC_OVERUNDER:
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Camera"].RIG_MODE_STEREOSCOPIC_INTERLACED:
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Camera"].RIG_MODE_VR:
                camLeft.alpha = this.alpha - this._cameraRigParams.stereoHalfAngle;
                camRight.alpha = this.alpha + this._cameraRigParams.stereoHalfAngle;
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Camera"].RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
                camLeft.alpha = this.alpha + this._cameraRigParams.stereoHalfAngle;
                camRight.alpha = this.alpha - this._cameraRigParams.stereoHalfAngle;
                break;
        }
        super._updateRigCameras();
    }
    /**
     * @internal
     */ _calculateLowerRadiusFromModelBoundingSphere(minimumWorld, maximumWorld, radiusScale = 1) {
        const boxVectorGlobalDiagonal = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Distance(minimumWorld, maximumWorld);
        // Get aspect ratio in order to calculate frustum slope
        const engine = this.getScene().getEngine();
        const aspectRatio = engine.getAspectRatio(this);
        const frustumSlopeY = Math.tan(this.fov / 2);
        const frustumSlopeX = frustumSlopeY * aspectRatio;
        // Formula for setting distance
        // (Good explanation: http://stackoverflow.com/questions/2866350/move-camera-to-fit-3d-scene)
        const radiusWithoutFraming = boxVectorGlobalDiagonal * 0.5;
        // Horizon distance
        const radius = radiusWithoutFraming * radiusScale;
        const distanceForHorizontalFrustum = radius * Math.sqrt(1.0 + 1.0 / (frustumSlopeX * frustumSlopeX));
        const distanceForVerticalFrustum = radius * Math.sqrt(1.0 + 1.0 / (frustumSlopeY * frustumSlopeY));
        return Math.max(distanceForHorizontalFrustum, distanceForVerticalFrustum);
    }
    /**
     * Destroy the camera and release the current resources hold by it.
     */ dispose() {
        this.inputs.clear();
        super.dispose();
    }
    /**
     * Gets the current object class name.
     * @returns the class name
     */ getClassName() {
        return "ArcRotateCamera";
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], ArcRotateCamera.prototype, "alpha", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], ArcRotateCamera.prototype, "beta", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], ArcRotateCamera.prototype, "radius", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], ArcRotateCamera.prototype, "overrideCloneAlphaBetaRadius", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeAsVector3"])("target")
], ArcRotateCamera.prototype, "_target", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeAsMeshReference"])("targetHost")
], ArcRotateCamera.prototype, "_targetHost", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], ArcRotateCamera.prototype, "inertialAlphaOffset", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], ArcRotateCamera.prototype, "inertialBetaOffset", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], ArcRotateCamera.prototype, "inertialRadiusOffset", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], ArcRotateCamera.prototype, "lowerAlphaLimit", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], ArcRotateCamera.prototype, "upperAlphaLimit", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], ArcRotateCamera.prototype, "lowerBetaLimit", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], ArcRotateCamera.prototype, "upperBetaLimit", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], ArcRotateCamera.prototype, "lowerRadiusLimit", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], ArcRotateCamera.prototype, "upperRadiusLimit", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], ArcRotateCamera.prototype, "lowerTargetYLimit", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], ArcRotateCamera.prototype, "inertialPanningX", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], ArcRotateCamera.prototype, "inertialPanningY", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], ArcRotateCamera.prototype, "pinchToPanMaxDistance", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], ArcRotateCamera.prototype, "panningDistanceLimit", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeAsVector3"])()
], ArcRotateCamera.prototype, "panningOriginTarget", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], ArcRotateCamera.prototype, "panningInertia", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], ArcRotateCamera.prototype, "zoomToMouseLocation", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], ArcRotateCamera.prototype, "zoomOnFactor", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeAsVector2"])()
], ArcRotateCamera.prototype, "targetScreenOffset", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], ArcRotateCamera.prototype, "allowUpsideDown", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], ArcRotateCamera.prototype, "useInputToRestoreState", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], ArcRotateCamera.prototype, "restoreStateInterpolationFactor", void 0);
// Register Class Name
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.ArcRotateCamera", ArcRotateCamera); //# sourceMappingURL=arcRotateCamera.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/deviceOrientationCamera.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DeviceOrientationCamera",
    ()=>DeviceOrientationCamera
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$freeCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/freeCamera.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/node.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$freeCameraDeviceOrientationInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Inputs/freeCameraDeviceOrientationInput.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$axis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.axis.js [app-client] (ecmascript)");
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node"].AddNodeConstructor("DeviceOrientationCamera", (name, scene)=>{
    return ()=>new DeviceOrientationCamera(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero(), scene);
});
class DeviceOrientationCamera extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$freeCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FreeCamera"] {
    /**
     * Creates a new device orientation camera
     * @param name The name of the camera
     * @param position The start position camera
     * @param scene The scene the camera belongs to
     */ constructor(name, position, scene){
        super(name, position, scene);
        this._tmpDragQuaternion = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"]();
        this._disablePointerInputWhenUsingDeviceOrientation = true;
        this._dragFactor = 0;
        this._quaternionCache = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"]();
        this.inputs.addDeviceOrientation();
        // When the orientation sensor fires it's first event, disable mouse input
        if (this.inputs._deviceOrientationInput) {
            this.inputs._deviceOrientationInput._onDeviceOrientationChangedObservable.addOnce(()=>{
                if (this._disablePointerInputWhenUsingDeviceOrientation) {
                    if (this.inputs._mouseInput) {
                        this.inputs._mouseInput._allowCameraRotation = false;
                        this.inputs._mouseInput.onPointerMovedObservable.add((e)=>{
                            if (this._dragFactor != 0) {
                                if (!this._initialQuaternion) {
                                    this._initialQuaternion = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"]();
                                }
                                // Rotate the initial space around the y axis to allow users to "turn around" via touch/mouse
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"].FromEulerAnglesToRef(0, e.offsetX * this._dragFactor, 0, this._tmpDragQuaternion);
                                this._initialQuaternion.multiplyToRef(this._tmpDragQuaternion, this._initialQuaternion);
                            }
                        });
                    }
                }
            });
        }
    }
    /**
     * Gets or sets a boolean indicating that pointer input must be disabled on first orientation sensor update (Default: true)
     */ get disablePointerInputWhenUsingDeviceOrientation() {
        return this._disablePointerInputWhenUsingDeviceOrientation;
    }
    set disablePointerInputWhenUsingDeviceOrientation(value) {
        this._disablePointerInputWhenUsingDeviceOrientation = value;
    }
    /**
     * Enabled turning on the y axis when the orientation sensor is active
     * @param dragFactor the factor that controls the turn speed (default: 1/300)
     */ enableHorizontalDragging(dragFactor = 1 / 300) {
        this._dragFactor = dragFactor;
    }
    /**
     * Gets the current instance class name ("DeviceOrientationCamera").
     * This helps avoiding instanceof at run time.
     * @returns the class name
     */ getClassName() {
        return "DeviceOrientationCamera";
    }
    /**
     * @internal
     * Checks and applies the current values of the inputs to the camera. (Internal use only)
     */ _checkInputs() {
        super._checkInputs();
        if (this.rotationQuaternion) {
            this._quaternionCache.copyFrom(this.rotationQuaternion);
            if (this._initialQuaternion) {
                this._initialQuaternion.multiplyToRef(this.rotationQuaternion, this.rotationQuaternion);
            }
        }
    }
    /**
     * Reset the camera to its default orientation on the specified axis only.
     * @param axis The axis to reset
     */ resetToCurrentRotation(axis = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$axis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Axis"].Y) {
        //can only work if this camera has a rotation quaternion already.
        if (!this.rotationQuaternion) {
            return;
        }
        if (!this._initialQuaternion) {
            this._initialQuaternion = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"]();
        }
        this._initialQuaternion.copyFrom(this._quaternionCache || this.rotationQuaternion);
        const list = [
            "x",
            "y",
            "z"
        ];
        for (const axisName of list){
            if (!axis[axisName]) {
                this._initialQuaternion[axisName] = 0;
            } else {
                this._initialQuaternion[axisName] *= -1;
            }
        }
        this._initialQuaternion.normalize();
        //force rotation update
        this._initialQuaternion.multiplyToRef(this.rotationQuaternion, this.rotationQuaternion);
    }
} //# sourceMappingURL=deviceOrientationCamera.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/flyCameraInputsManager.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FlyCameraInputsManager",
    ()=>FlyCameraInputsManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$cameraInputsManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/cameraInputsManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$flyCameraMouseInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Inputs/flyCameraMouseInput.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$flyCameraKeyboardInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Inputs/flyCameraKeyboardInput.js [app-client] (ecmascript)");
;
;
;
class FlyCameraInputsManager extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$cameraInputsManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CameraInputsManager"] {
    /**
     * Instantiates a new FlyCameraInputsManager.
     * @param camera Defines the camera the inputs belong to.
     */ constructor(camera){
        super(camera);
    }
    /**
     * Add keyboard input support to the input manager.
     * @returns the new FlyCameraKeyboardMoveInput().
     */ addKeyboard() {
        this.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$flyCameraKeyboardInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FlyCameraKeyboardInput"]());
        return this;
    }
    /**
     * Add mouse input support to the input manager.
     * @returns the new FlyCameraMouseInput().
     */ addMouse() {
        this.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$flyCameraMouseInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FlyCameraMouseInput"]());
        return this;
    }
} //# sourceMappingURL=flyCameraInputsManager.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/flyCamera.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FlyCamera",
    ()=>FlyCamera
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/decorators.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$targetCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/targetCamera.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$flyCameraInputsManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/flyCameraInputsManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/tools.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/abstractEngine.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
class FlyCamera extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$targetCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TargetCamera"] {
    /**
     * Gets the input sensibility for mouse input.
     * Higher values reduce sensitivity.
     */ get angularSensibility() {
        const mouse = this.inputs.attached["mouse"];
        if (mouse) {
            return mouse.angularSensibility;
        }
        return 0;
    }
    /**
     * Sets the input sensibility for a mouse input.
     * Higher values reduce sensitivity.
     */ set angularSensibility(value) {
        const mouse = this.inputs.attached["mouse"];
        if (mouse) {
            mouse.angularSensibility = value;
        }
    }
    /**
     * Get the keys for camera movement forward.
     */ get keysForward() {
        const keyboard = this.inputs.attached["keyboard"];
        if (keyboard) {
            return keyboard.keysForward;
        }
        return [];
    }
    /**
     * Set the keys for camera movement forward.
     */ set keysForward(value) {
        const keyboard = this.inputs.attached["keyboard"];
        if (keyboard) {
            keyboard.keysForward = value;
        }
    }
    /**
     * Get the keys for camera movement backward.
     */ get keysBackward() {
        const keyboard = this.inputs.attached["keyboard"];
        if (keyboard) {
            return keyboard.keysBackward;
        }
        return [];
    }
    set keysBackward(value) {
        const keyboard = this.inputs.attached["keyboard"];
        if (keyboard) {
            keyboard.keysBackward = value;
        }
    }
    /**
     * Get the keys for camera movement up.
     */ get keysUp() {
        const keyboard = this.inputs.attached["keyboard"];
        if (keyboard) {
            return keyboard.keysUp;
        }
        return [];
    }
    /**
     * Set the keys for camera movement up.
     */ set keysUp(value) {
        const keyboard = this.inputs.attached["keyboard"];
        if (keyboard) {
            keyboard.keysUp = value;
        }
    }
    /**
     * Get the keys for camera movement down.
     */ get keysDown() {
        const keyboard = this.inputs.attached["keyboard"];
        if (keyboard) {
            return keyboard.keysDown;
        }
        return [];
    }
    /**
     * Set the keys for camera movement down.
     */ set keysDown(value) {
        const keyboard = this.inputs.attached["keyboard"];
        if (keyboard) {
            keyboard.keysDown = value;
        }
    }
    /**
     * Get the keys for camera movement left.
     */ get keysLeft() {
        const keyboard = this.inputs.attached["keyboard"];
        if (keyboard) {
            return keyboard.keysLeft;
        }
        return [];
    }
    /**
     * Set the keys for camera movement left.
     */ set keysLeft(value) {
        const keyboard = this.inputs.attached["keyboard"];
        if (keyboard) {
            keyboard.keysLeft = value;
        }
    }
    /**
     * Set the keys for camera movement right.
     */ get keysRight() {
        const keyboard = this.inputs.attached["keyboard"];
        if (keyboard) {
            return keyboard.keysRight;
        }
        return [];
    }
    /**
     * Set the keys for camera movement right.
     */ set keysRight(value) {
        const keyboard = this.inputs.attached["keyboard"];
        if (keyboard) {
            keyboard.keysRight = value;
        }
    }
    /**
     * Instantiates a FlyCamera.
     * This is a flying camera, designed for 3D movement and rotation in all directions,
     * such as in a 3D Space Shooter or a Flight Simulator.
     * @param name Define the name of the camera in the scene.
     * @param position Define the starting position of the camera in the scene.
     * @param scene Define the scene the camera belongs to.
     * @param setActiveOnSceneIfNoneActive Defines whether the camera should be marked as active, if no other camera has been defined as active.
     */ constructor(name, position, scene, setActiveOnSceneIfNoneActive = true){
        super(name, position, scene, setActiveOnSceneIfNoneActive);
        /**
         * Define the collision ellipsoid of the camera.
         * This is helpful for simulating a camera body, like a player's body.
         * @see https://doc.babylonjs.com/features/featuresDeepDive/cameras/camera_collisions#arcrotatecamera
         */ this.ellipsoid = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](1, 1, 1);
        /**
         * Define an offset for the position of the ellipsoid around the camera.
         * This can be helpful if the camera is attached away from the player's body center,
         * such as at its head.
         */ this.ellipsoidOffset = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, 0);
        /**
         * Enable or disable collisions of the camera with the rest of the scene objects.
         */ this.checkCollisions = false;
        /**
         * Enable or disable gravity on the camera.
         */ this.applyGravity = false;
        /**
         * Define the current direction the camera is moving to.
         */ this.cameraDirection = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        /**
         * Track Roll to maintain the wanted Rolling when looking around.
         */ this._trackRoll = 0;
        /**
         * Slowly correct the Roll to its original value after a Pitch+Yaw rotation.
         */ this.rollCorrect = 100;
        /**
         * Mimic a banked turn, Rolling the camera when Yawing.
         * It's recommended to use rollCorrect = 10 for faster banking correction.
         */ this.bankedTurn = false;
        /**
         * Limit in radians for how much Roll banking will add. (Default: 90°)
         */ this.bankedTurnLimit = Math.PI / 2;
        /**
         * Value of 0 disables the banked Roll.
         * Value of 1 is equal to the Yaw angle in radians.
         */ this.bankedTurnMultiplier = 1;
        this._needMoveForGravity = false;
        this._oldPosition = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        this._diffPosition = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        this._newPosition = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        // Collisions.
        this._collisionMask = -1;
        /**
         * @internal
         */ this._onCollisionPositionChange = (collisionId, newPosition, collidedMesh = null)=>{
            const updatePosition = (newPos)=>{
                this._newPosition.copyFrom(newPos);
                this._newPosition.subtractToRef(this._oldPosition, this._diffPosition);
                if (this._diffPosition.length() > __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AbstractEngine"].CollisionsEpsilon) {
                    this.position.addInPlace(this._diffPosition);
                    if (this.onCollide && collidedMesh) {
                        this.onCollide(collidedMesh);
                    }
                }
            };
            updatePosition(newPosition);
        };
        this.inputs = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$flyCameraInputsManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FlyCameraInputsManager"](this);
        this.inputs.addKeyboard().addMouse();
    }
    /**
     * Attached controls to the current camera.
     * @param ignored defines an ignored parameter kept for backward compatibility.
     * @param noPreventDefault Defines whether event caught by the controls should call preventdefault() (https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)
     */ attachControl(ignored, noPreventDefault) {
        noPreventDefault = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tools"].BackCompatCameraNoPreventDefault(arguments);
        this.inputs.attachElement(noPreventDefault);
    }
    /**
     * Detach a control from the HTML DOM element.
     * The camera will stop reacting to that input.
     */ detachControl() {
        this.inputs.detachElement();
        this.cameraDirection = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, 0);
    }
    /**
     * Get the mask that the camera ignores in collision events.
     */ get collisionMask() {
        return this._collisionMask;
    }
    /**
     * Set the mask that the camera ignores in collision events.
     */ set collisionMask(mask) {
        this._collisionMask = !isNaN(mask) ? mask : -1;
    }
    /**
     * @internal
     */ _collideWithWorld(displacement) {
        let globalPosition;
        if (this.parent) {
            globalPosition = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinates(this.position, this.parent.getWorldMatrix());
        } else {
            globalPosition = this.position;
        }
        globalPosition.subtractFromFloatsToRef(0, this.ellipsoid.y, 0, this._oldPosition);
        this._oldPosition.addInPlace(this.ellipsoidOffset);
        const coordinator = this.getScene().collisionCoordinator;
        if (!this._collider) {
            this._collider = coordinator.createCollider();
        }
        this._collider._radius = this.ellipsoid;
        this._collider.collisionMask = this._collisionMask;
        // No need for clone, as long as gravity is not on.
        let actualDisplacement = displacement;
        // Add gravity to direction to prevent dual-collision checking.
        if (this.applyGravity) {
            // This prevents mending with cameraDirection, a global variable of the fly camera class.
            actualDisplacement = displacement.add(this.getScene().gravity);
        }
        coordinator.getNewPosition(this._oldPosition, actualDisplacement, this._collider, 3, null, this._onCollisionPositionChange, this.uniqueId);
    }
    /** @internal */ _checkInputs() {
        if (!this._localDirection) {
            this._localDirection = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
            this._transformedDirection = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        }
        this.inputs.checkInputs();
        super._checkInputs();
    }
    /**
     * Enable movement without a user input. This allows gravity to always be applied.
     */ set needMoveForGravity(value) {
        this._needMoveForGravity = value;
    }
    /**
     * When true, gravity is applied whether there is user input or not.
     */ get needMoveForGravity() {
        return this._needMoveForGravity;
    }
    /** @internal */ _decideIfNeedsToMove() {
        return this._needMoveForGravity || Math.abs(this.cameraDirection.x) > 0 || Math.abs(this.cameraDirection.y) > 0 || Math.abs(this.cameraDirection.z) > 0;
    }
    /** @internal */ _updatePosition() {
        if (this.checkCollisions && this.getScene().collisionsEnabled) {
            this._collideWithWorld(this.cameraDirection);
        } else {
            super._updatePosition();
        }
    }
    /**
     * Restore the Roll to its target value at the rate specified.
     * @param rate - Higher means slower restoring.
     * @internal
     */ restoreRoll(rate) {
        const limit = this._trackRoll; // Target Roll.
        const z = this.rotation.z; // Current Roll.
        const delta = limit - z; // Difference in Roll.
        const minRad = 0.001; // Tenth of a radian is a barely noticable difference.
        // If the difference is noticable, restore the Roll.
        if (Math.abs(delta) >= minRad) {
            // Change Z rotation towards the target Roll.
            this.rotation.z += delta / rate;
            // Match when near enough.
            if (Math.abs(limit - this.rotation.z) <= minRad) {
                this.rotation.z = limit;
            }
        }
    }
    /**
     * Destroy the camera and release the current resources held by it.
     */ dispose() {
        this.inputs.clear();
        super.dispose();
    }
    /**
     * Get the current object class name.
     * @returns the class name.
     */ getClassName() {
        return "FlyCamera";
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeAsVector3"])()
], FlyCamera.prototype, "ellipsoid", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeAsVector3"])()
], FlyCamera.prototype, "ellipsoidOffset", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], FlyCamera.prototype, "checkCollisions", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], FlyCamera.prototype, "applyGravity", void 0);
// Register Class Name
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.FlyCamera", FlyCamera); //# sourceMappingURL=flyCamera.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/followCameraInputsManager.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FollowCameraInputsManager",
    ()=>FollowCameraInputsManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$cameraInputsManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/cameraInputsManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$followCameraKeyboardMoveInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Inputs/followCameraKeyboardMoveInput.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$followCameraMouseWheelInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Inputs/followCameraMouseWheelInput.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$followCameraPointersInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Inputs/followCameraPointersInput.js [app-client] (ecmascript)");
;
;
;
;
;
class FollowCameraInputsManager extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$cameraInputsManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CameraInputsManager"] {
    /**
     * Instantiates a new FollowCameraInputsManager.
     * @param camera Defines the camera the inputs belong to
     */ constructor(camera){
        super(camera);
    }
    /**
     * Add keyboard input support to the input manager.
     * @returns the current input manager
     */ addKeyboard() {
        this.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$followCameraKeyboardMoveInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FollowCameraKeyboardMoveInput"]());
        return this;
    }
    /**
     * Add mouse wheel input support to the input manager.
     * @returns the current input manager
     */ addMouseWheel() {
        this.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$followCameraMouseWheelInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FollowCameraMouseWheelInput"]());
        return this;
    }
    /**
     * Add pointers input support to the input manager.
     * @returns the current input manager
     */ addPointers() {
        this.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$followCameraPointersInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FollowCameraPointersInput"]());
        return this;
    }
    /**
     * Add orientation input support to the input manager.
     * @returns the current input manager
     */ addVRDeviceOrientation() {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Warn("DeviceOrientation support not yet implemented for FollowCamera.");
        return this;
    }
} //# sourceMappingURL=followCameraInputsManager.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/followCamera.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArcFollowCamera",
    ()=>ArcFollowCamera,
    "FollowCamera",
    ()=>FollowCamera
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/decorators.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/tools.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$targetCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/targetCamera.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/node.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$followCameraInputsManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/followCameraInputsManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node"].AddNodeConstructor("FollowCamera", (name, scene)=>{
    return ()=>new FollowCamera(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero(), scene);
});
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node"].AddNodeConstructor("ArcFollowCamera", (name, scene)=>{
    return ()=>new ArcFollowCamera(name, 0, 0, 1.0, null, scene);
});
class FollowCamera extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$targetCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TargetCamera"] {
    /**
     * Instantiates the follow camera.
     * @see https://doc.babylonjs.com/features/featuresDeepDive/cameras/camera_introduction#followcamera
     * @param name Define the name of the camera in the scene
     * @param position Define the position of the camera
     * @param scene Define the scene the camera belong to
     * @param lockedTarget Define the target of the camera
     */ constructor(name, position, scene, lockedTarget = null){
        super(name, position, scene);
        /**
         * Distance the follow camera should follow an object at
         */ this.radius = 12;
        /**
         * Minimum allowed distance of the camera to the axis of rotation
         * (The camera can not get closer).
         * This can help limiting how the Camera is able to move in the scene.
         */ this.lowerRadiusLimit = null;
        /**
         * Maximum allowed distance of the camera to the axis of rotation
         * (The camera can not get further).
         * This can help limiting how the Camera is able to move in the scene.
         */ this.upperRadiusLimit = null;
        /**
         * Define a rotation offset between the camera and the object it follows
         */ this.rotationOffset = 0;
        /**
         * Minimum allowed angle to camera position relative to target object.
         * This can help limiting how the Camera is able to move in the scene.
         */ this.lowerRotationOffsetLimit = null;
        /**
         * Maximum allowed angle to camera position relative to target object.
         * This can help limiting how the Camera is able to move in the scene.
         */ this.upperRotationOffsetLimit = null;
        /**
         * Define a height offset between the camera and the object it follows.
         * It can help following an object from the top (like a car chasing a plane)
         */ this.heightOffset = 4;
        /**
         * Minimum allowed height of camera position relative to target object.
         * This can help limiting how the Camera is able to move in the scene.
         */ this.lowerHeightOffsetLimit = null;
        /**
         * Maximum allowed height of camera position relative to target object.
         * This can help limiting how the Camera is able to move in the scene.
         */ this.upperHeightOffsetLimit = null;
        /**
         * Define how fast the camera can accelerate to follow it s target.
         */ this.cameraAcceleration = 0.05;
        /**
         * Define the speed limit of the camera following an object.
         */ this.maxCameraSpeed = 20;
        this.lockedTarget = lockedTarget;
        this.inputs = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$followCameraInputsManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FollowCameraInputsManager"](this);
        this.inputs.addKeyboard().addMouseWheel().addPointers();
    // Uncomment the following line when the relevant handlers have been implemented.
    // this.inputs.addKeyboard().addMouseWheel().addPointers().addVRDeviceOrientation();
    }
    _follow(cameraTarget) {
        if (!cameraTarget) {
            return;
        }
        const rotMatrix = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[0];
        cameraTarget.absoluteRotationQuaternion.toRotationMatrix(rotMatrix);
        const yRotation = Math.atan2(rotMatrix.m[8], rotMatrix.m[10]);
        const radians = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tools"].ToRadians(this.rotationOffset) + yRotation;
        const targetPosition = cameraTarget.getAbsolutePosition();
        const targetX = targetPosition.x + Math.sin(radians) * this.radius;
        const targetZ = targetPosition.z + Math.cos(radians) * this.radius;
        const dx = targetX - this.position.x;
        const dy = targetPosition.y + this.heightOffset - this.position.y;
        const dz = targetZ - this.position.z;
        let vx = dx * this.cameraAcceleration * 2; //this is set to .05
        let vy = dy * this.cameraAcceleration;
        let vz = dz * this.cameraAcceleration * 2;
        if (vx > this.maxCameraSpeed || vx < -this.maxCameraSpeed) {
            vx = vx < 1 ? -this.maxCameraSpeed : this.maxCameraSpeed;
        }
        if (vy > this.maxCameraSpeed || vy < -this.maxCameraSpeed) {
            vy = vy < 1 ? -this.maxCameraSpeed : this.maxCameraSpeed;
        }
        if (vz > this.maxCameraSpeed || vz < -this.maxCameraSpeed) {
            vz = vz < 1 ? -this.maxCameraSpeed : this.maxCameraSpeed;
        }
        this.position = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](this.position.x + vx, this.position.y + vy, this.position.z + vz);
        this.setTarget(targetPosition);
    }
    /**
     * Attached controls to the current camera.
     * @param ignored defines an ignored parameter kept for backward compatibility.
     * @param noPreventDefault Defines whether event caught by the controls should call preventdefault() (https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)
     */ attachControl(ignored, noPreventDefault) {
        noPreventDefault = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tools"].BackCompatCameraNoPreventDefault(arguments);
        this.inputs.attachElement(noPreventDefault);
        this._reset = ()=>{};
    }
    /**
     * Detach the current controls from the specified dom element.
     */ detachControl() {
        this.inputs.detachElement();
        if (this._reset) {
            this._reset();
        }
    }
    /** @internal */ _checkInputs() {
        this.inputs.checkInputs();
        this._checkLimits();
        super._checkInputs();
        if (this.lockedTarget) {
            this._follow(this.lockedTarget);
        }
    }
    _checkLimits() {
        if (this.lowerRadiusLimit !== null && this.radius < this.lowerRadiusLimit) {
            this.radius = this.lowerRadiusLimit;
        }
        if (this.upperRadiusLimit !== null && this.radius > this.upperRadiusLimit) {
            this.radius = this.upperRadiusLimit;
        }
        if (this.lowerHeightOffsetLimit !== null && this.heightOffset < this.lowerHeightOffsetLimit) {
            this.heightOffset = this.lowerHeightOffsetLimit;
        }
        if (this.upperHeightOffsetLimit !== null && this.heightOffset > this.upperHeightOffsetLimit) {
            this.heightOffset = this.upperHeightOffsetLimit;
        }
        if (this.lowerRotationOffsetLimit !== null && this.rotationOffset < this.lowerRotationOffsetLimit) {
            this.rotationOffset = this.lowerRotationOffsetLimit;
        }
        if (this.upperRotationOffsetLimit !== null && this.rotationOffset > this.upperRotationOffsetLimit) {
            this.rotationOffset = this.upperRotationOffsetLimit;
        }
    }
    /**
     * Gets the camera class name.
     * @returns the class name
     */ getClassName() {
        return "FollowCamera";
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], FollowCamera.prototype, "radius", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], FollowCamera.prototype, "lowerRadiusLimit", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], FollowCamera.prototype, "upperRadiusLimit", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], FollowCamera.prototype, "rotationOffset", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], FollowCamera.prototype, "lowerRotationOffsetLimit", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], FollowCamera.prototype, "upperRotationOffsetLimit", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], FollowCamera.prototype, "heightOffset", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], FollowCamera.prototype, "lowerHeightOffsetLimit", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], FollowCamera.prototype, "upperHeightOffsetLimit", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], FollowCamera.prototype, "cameraAcceleration", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], FollowCamera.prototype, "maxCameraSpeed", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeAsMeshReference"])("lockedTargetId")
], FollowCamera.prototype, "lockedTarget", void 0);
class ArcFollowCamera extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$targetCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TargetCamera"] {
    /**
     * Instantiates a new ArcFollowCamera
     * @see https://doc.babylonjs.com/features/featuresDeepDive/cameras/camera_introduction#followcamera
     * @param name Define the name of the camera
     * @param alpha Define the rotation angle of the camera around the longitudinal axis
     * @param beta Define the rotation angle of the camera around the elevation axis
     * @param radius Define the radius of the camera from its target point
     * @param target Define the target of the camera
     * @param scene Define the scene the camera belongs to
     */ constructor(name, /** The longitudinal angle of the camera */ alpha, /** The latitudinal angle of the camera */ beta, /** The radius of the camera from its target */ radius, /** Define the camera target (the mesh it should follow) */ target, scene){
        super(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero(), scene);
        this.alpha = alpha;
        this.beta = beta;
        this.radius = radius;
        this._cartesianCoordinates = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        this.setMeshTarget(target);
    }
    /**
     * Sets the mesh to follow with this camera.
     * @param target the target to follow
     */ setMeshTarget(target) {
        this._meshTarget = target;
        this._follow();
    }
    _follow() {
        if (!this._meshTarget) {
            return;
        }
        this._cartesianCoordinates.x = this.radius * Math.cos(this.alpha) * Math.cos(this.beta);
        this._cartesianCoordinates.y = this.radius * Math.sin(this.beta);
        this._cartesianCoordinates.z = this.radius * Math.sin(this.alpha) * Math.cos(this.beta);
        const targetPosition = this._meshTarget.getAbsolutePosition();
        this.position = targetPosition.add(this._cartesianCoordinates);
        this.setTarget(targetPosition);
    }
    /** @internal */ _checkInputs() {
        super._checkInputs();
        this._follow();
    }
    /**
     * Returns the class name of the object.
     * It is mostly used internally for serialization purposes.
     * @returns the class name
     */ getClassName() {
        return "ArcFollowCamera";
    }
}
// Register Class Name
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.FollowCamera", FollowCamera);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.ArcFollowCamera", ArcFollowCamera); //# sourceMappingURL=followCamera.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/universalCamera.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UniversalCamera",
    ()=>UniversalCamera
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$touchCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/touchCamera.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/node.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/camera.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gamepads$2f$gamepadSceneComponent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Gamepads/gamepadSceneComponent.js [app-client] (ecmascript)");
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node"].AddNodeConstructor("FreeCamera", (name, scene)=>{
    // Forcing to use the Universal camera
    return ()=>new UniversalCamera(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero(), scene);
});
class UniversalCamera extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$touchCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TouchCamera"] {
    /**
     * Defines the gamepad rotation sensibility.
     * This is the threshold from when rotation starts to be accounted for to prevent jittering.
     */ get gamepadAngularSensibility() {
        const gamepad = this.inputs.attached["gamepad"];
        if (gamepad) {
            return gamepad.gamepadAngularSensibility;
        }
        return 0;
    }
    set gamepadAngularSensibility(value) {
        const gamepad = this.inputs.attached["gamepad"];
        if (gamepad) {
            gamepad.gamepadAngularSensibility = value;
        }
    }
    /**
     * Defines the gamepad move sensibility.
     * This is the threshold from when moving starts to be accounted for to prevent jittering.
     */ get gamepadMoveSensibility() {
        const gamepad = this.inputs.attached["gamepad"];
        if (gamepad) {
            return gamepad.gamepadMoveSensibility;
        }
        return 0;
    }
    set gamepadMoveSensibility(value) {
        const gamepad = this.inputs.attached["gamepad"];
        if (gamepad) {
            gamepad.gamepadMoveSensibility = value;
        }
    }
    /**
     * The Universal Camera is the one to choose for first person shooter type games, and works with all the keyboard, mouse, touch and gamepads. This replaces the earlier Free Camera,
     * which still works and will still be found in many Playgrounds.
     * @see https://doc.babylonjs.com/features/featuresDeepDive/cameras/camera_introduction#universal-camera
     * @param name Define the name of the camera in the scene
     * @param position Define the start position of the camera in the scene
     * @param scene Define the scene the camera belongs to
     */ constructor(name, position, scene){
        super(name, position, scene);
        this.inputs.addGamepad();
    }
    /**
     * Gets the current object class name.
     * @returns the class name
     */ getClassName() {
        return "UniversalCamera";
    }
}
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Camera"]._CreateDefaultParsedCamera = (name, scene)=>{
    return new UniversalCamera(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero(), scene);
}; //# sourceMappingURL=universalCamera.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/gamepadCamera.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GamepadCamera",
    ()=>GamepadCamera
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$universalCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/universalCamera.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/node.js [app-client] (ecmascript)");
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node"].AddNodeConstructor("GamepadCamera", (name, scene)=>{
    return ()=>new GamepadCamera(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero(), scene);
});
class GamepadCamera extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$universalCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UniversalCamera"] {
    /**
     * Instantiates a new Gamepad Camera
     * This represents a FPS type of camera. This is only here for back compat purpose.
     * Please use the UniversalCamera instead as both are identical.
     * @see https://doc.babylonjs.com/features/featuresDeepDive/cameras/camera_introduction#universal-camera
     * @param name Define the name of the camera in the scene
     * @param position Define the start position of the camera in the scene
     * @param scene Define the scene the camera belongs to
     */ constructor(name, position, scene){
        super(name, position, scene);
    }
    /**
     * Gets the current object class name.
     * @returns the class name
     */ getClassName() {
        return "GamepadCamera";
    }
} //# sourceMappingURL=gamepadCamera.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/RigModes/stereoscopicAnaglyphRigMode.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_SetStereoscopicAnaglyphRigMode",
    ()=>_SetStereoscopicAnaglyphRigMode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$PostProcesses$2f$passPostProcess$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/PostProcesses/passPostProcess.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$PostProcesses$2f$anaglyphPostProcess$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/PostProcesses/anaglyphPostProcess.js [app-client] (ecmascript)");
;
;
function _SetStereoscopicAnaglyphRigMode(camera) {
    camera._rigCameras[0]._rigPostProcess = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$PostProcesses$2f$passPostProcess$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PassPostProcess"](camera.name + "_passthru", 1.0, camera._rigCameras[0]);
    camera._rigCameras[1]._rigPostProcess = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$PostProcesses$2f$anaglyphPostProcess$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnaglyphPostProcess"](camera.name + "_anaglyph", 1.0, camera._rigCameras);
} //# sourceMappingURL=stereoscopicAnaglyphRigMode.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Stereoscopic/anaglyphArcRotateCamera.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnaglyphArcRotateCamera",
    ()=>AnaglyphArcRotateCamera
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/camera.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$arcRotateCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/arcRotateCamera.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/node.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$RigModes$2f$stereoscopicAnaglyphRigMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/RigModes/stereoscopicAnaglyphRigMode.js [app-client] (ecmascript)");
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node"].AddNodeConstructor("AnaglyphArcRotateCamera", (name, scene, options)=>{
    return ()=>new AnaglyphArcRotateCamera(name, 0, 0, 1.0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero(), options.interaxial_distance, scene);
});
class AnaglyphArcRotateCamera extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$arcRotateCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArcRotateCamera"] {
    /**
     * Creates a new AnaglyphArcRotateCamera
     * @param name defines camera name
     * @param alpha defines alpha angle (in radians)
     * @param beta defines beta angle (in radians)
     * @param radius defines radius
     * @param target defines camera target
     * @param interaxialDistance defines distance between each color axis
     * @param scene defines the hosting scene
     */ constructor(name, alpha, beta, radius, target, interaxialDistance, scene){
        super(name, alpha, beta, radius, target, scene);
        this._setRigMode = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$RigModes$2f$stereoscopicAnaglyphRigMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_SetStereoscopicAnaglyphRigMode"])(this);
        this.interaxialDistance = interaxialDistance;
        this.setCameraRigMode(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Camera"].RIG_MODE_STEREOSCOPIC_ANAGLYPH, {
            interaxialDistance: interaxialDistance
        });
    }
    /**
     * Gets camera class name
     * @returns AnaglyphArcRotateCamera
     */ getClassName() {
        return "AnaglyphArcRotateCamera";
    }
} //# sourceMappingURL=anaglyphArcRotateCamera.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Stereoscopic/anaglyphFreeCamera.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnaglyphFreeCamera",
    ()=>AnaglyphFreeCamera
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/camera.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$freeCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/freeCamera.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/node.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$RigModes$2f$stereoscopicAnaglyphRigMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/RigModes/stereoscopicAnaglyphRigMode.js [app-client] (ecmascript)");
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node"].AddNodeConstructor("AnaglyphFreeCamera", (name, scene, options)=>{
    return ()=>new AnaglyphFreeCamera(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero(), options.interaxial_distance, scene);
});
class AnaglyphFreeCamera extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$freeCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FreeCamera"] {
    /**
     * Creates a new AnaglyphFreeCamera
     * @param name defines camera name
     * @param position defines initial position
     * @param interaxialDistance defines distance between each color axis
     * @param scene defines the hosting scene
     */ constructor(name, position, interaxialDistance, scene){
        super(name, position, scene);
        this._setRigMode = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$RigModes$2f$stereoscopicAnaglyphRigMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_SetStereoscopicAnaglyphRigMode"])(this);
        this.interaxialDistance = interaxialDistance;
        this.setCameraRigMode(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Camera"].RIG_MODE_STEREOSCOPIC_ANAGLYPH, {
            interaxialDistance: interaxialDistance
        });
    }
    /**
     * Gets camera class name
     * @returns AnaglyphFreeCamera
     */ getClassName() {
        return "AnaglyphFreeCamera";
    }
} //# sourceMappingURL=anaglyphFreeCamera.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Stereoscopic/anaglyphGamepadCamera.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnaglyphGamepadCamera",
    ()=>AnaglyphGamepadCamera
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/camera.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$gamepadCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/gamepadCamera.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/node.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$RigModes$2f$stereoscopicAnaglyphRigMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/RigModes/stereoscopicAnaglyphRigMode.js [app-client] (ecmascript)");
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node"].AddNodeConstructor("AnaglyphGamepadCamera", (name, scene, options)=>{
    return ()=>new AnaglyphGamepadCamera(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero(), options.interaxial_distance, scene);
});
class AnaglyphGamepadCamera extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$gamepadCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GamepadCamera"] {
    /**
     * Creates a new AnaglyphGamepadCamera
     * @param name defines camera name
     * @param position defines initial position
     * @param interaxialDistance defines distance between each color axis
     * @param scene defines the hosting scene
     */ constructor(name, position, interaxialDistance, scene){
        super(name, position, scene);
        this._setRigMode = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$RigModes$2f$stereoscopicAnaglyphRigMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_SetStereoscopicAnaglyphRigMode"])(this);
        this.interaxialDistance = interaxialDistance;
        this.setCameraRigMode(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Camera"].RIG_MODE_STEREOSCOPIC_ANAGLYPH, {
            interaxialDistance: interaxialDistance
        });
    }
    /**
     * Gets camera class name
     * @returns AnaglyphGamepadCamera
     */ getClassName() {
        return "AnaglyphGamepadCamera";
    }
} //# sourceMappingURL=anaglyphGamepadCamera.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Stereoscopic/anaglyphUniversalCamera.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnaglyphUniversalCamera",
    ()=>AnaglyphUniversalCamera
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/camera.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$universalCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/universalCamera.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/node.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$RigModes$2f$stereoscopicAnaglyphRigMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/RigModes/stereoscopicAnaglyphRigMode.js [app-client] (ecmascript)");
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node"].AddNodeConstructor("AnaglyphUniversalCamera", (name, scene, options)=>{
    return ()=>new AnaglyphUniversalCamera(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero(), options.interaxial_distance, scene);
});
class AnaglyphUniversalCamera extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$universalCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UniversalCamera"] {
    /**
     * Creates a new AnaglyphUniversalCamera
     * @param name defines camera name
     * @param position defines initial position
     * @param interaxialDistance defines distance between each color axis
     * @param scene defines the hosting scene
     */ constructor(name, position, interaxialDistance, scene){
        super(name, position, scene);
        this._setRigMode = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$RigModes$2f$stereoscopicAnaglyphRigMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_SetStereoscopicAnaglyphRigMode"])(this);
        this.interaxialDistance = interaxialDistance;
        this.setCameraRigMode(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Camera"].RIG_MODE_STEREOSCOPIC_ANAGLYPH, {
            interaxialDistance: interaxialDistance
        });
    }
    /**
     * Gets camera class name
     * @returns AnaglyphUniversalCamera
     */ getClassName() {
        return "AnaglyphUniversalCamera";
    }
} //# sourceMappingURL=anaglyphUniversalCamera.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/RigModes/stereoscopicRigMode.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_SetStereoscopicRigMode",
    ()=>_SetStereoscopicRigMode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/camera.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$viewport$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.viewport.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$PostProcesses$2f$passPostProcess$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/PostProcesses/passPostProcess.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$PostProcesses$2f$stereoscopicInterlacePostProcess$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/PostProcesses/stereoscopicInterlacePostProcess.js [app-client] (ecmascript)");
;
;
;
;
function _SetStereoscopicRigMode(camera) {
    const isStereoscopicHoriz = camera.cameraRigMode === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Camera"].RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL || camera.cameraRigMode === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Camera"].RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED;
    const isCrossEye = camera.cameraRigMode === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Camera"].RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED;
    const isInterlaced = camera.cameraRigMode === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Camera"].RIG_MODE_STEREOSCOPIC_INTERLACED;
    // Use post-processors for interlacing
    if (isInterlaced) {
        camera._rigCameras[0]._rigPostProcess = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$PostProcesses$2f$passPostProcess$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PassPostProcess"](camera.name + "_passthru", 1.0, camera._rigCameras[0]);
        camera._rigCameras[1]._rigPostProcess = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$PostProcesses$2f$stereoscopicInterlacePostProcess$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StereoscopicInterlacePostProcessI"](camera.name + "_stereoInterlace", camera._rigCameras, false, true);
    } else {
        camera._rigCameras[isCrossEye ? 1 : 0].viewport = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$viewport$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Viewport"](0, 0, isStereoscopicHoriz ? 0.5 : 1.0, isStereoscopicHoriz ? 1.0 : 0.5);
        camera._rigCameras[isCrossEye ? 0 : 1].viewport = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$viewport$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Viewport"](isStereoscopicHoriz ? 0.5 : 0, isStereoscopicHoriz ? 0 : 0.5, isStereoscopicHoriz ? 0.5 : 1.0, isStereoscopicHoriz ? 1.0 : 0.5);
    }
} //# sourceMappingURL=stereoscopicRigMode.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Stereoscopic/stereoscopicArcRotateCamera.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StereoscopicArcRotateCamera",
    ()=>StereoscopicArcRotateCamera
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/camera.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$arcRotateCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/arcRotateCamera.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/node.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$RigModes$2f$stereoscopicRigMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/RigModes/stereoscopicRigMode.js [app-client] (ecmascript)");
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node"].AddNodeConstructor("StereoscopicArcRotateCamera", (name, scene, options)=>{
    return ()=>new StereoscopicArcRotateCamera(name, 0, 0, 1.0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero(), options.interaxial_distance, options.isStereoscopicSideBySide, scene);
});
class StereoscopicArcRotateCamera extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$arcRotateCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArcRotateCamera"] {
    /**
     * Creates a new StereoscopicArcRotateCamera
     * @param name defines camera name
     * @param alpha defines alpha angle (in radians)
     * @param beta defines beta angle (in radians)
     * @param radius defines radius
     * @param target defines camera target
     * @param interaxialDistance defines distance between each color axis
     * @param isStereoscopicSideBySide defines is stereoscopic is done side by side or over under
     * @param scene defines the hosting scene
     */ constructor(name, alpha, beta, radius, target, interaxialDistance, isStereoscopicSideBySide, scene){
        super(name, alpha, beta, radius, target, scene);
        this._setRigMode = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$RigModes$2f$stereoscopicRigMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_SetStereoscopicRigMode"])(this);
        this.interaxialDistance = interaxialDistance;
        this.isStereoscopicSideBySide = isStereoscopicSideBySide;
        this.setCameraRigMode(isStereoscopicSideBySide ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Camera"].RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Camera"].RIG_MODE_STEREOSCOPIC_OVERUNDER, {
            interaxialDistance: interaxialDistance
        });
    }
    /**
     * Gets camera class name
     * @returns StereoscopicArcRotateCamera
     */ getClassName() {
        return "StereoscopicArcRotateCamera";
    }
} //# sourceMappingURL=stereoscopicArcRotateCamera.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Stereoscopic/stereoscopicFreeCamera.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StereoscopicFreeCamera",
    ()=>StereoscopicFreeCamera
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/camera.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$freeCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/freeCamera.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/node.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$RigModes$2f$stereoscopicRigMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/RigModes/stereoscopicRigMode.js [app-client] (ecmascript)");
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node"].AddNodeConstructor("StereoscopicFreeCamera", (name, scene, options)=>{
    return ()=>new StereoscopicFreeCamera(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero(), options.interaxial_distance, options.isStereoscopicSideBySide, scene);
});
class StereoscopicFreeCamera extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$freeCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FreeCamera"] {
    /**
     * Creates a new StereoscopicFreeCamera
     * @param name defines camera name
     * @param position defines initial position
     * @param interaxialDistance defines distance between each color axis
     * @param isStereoscopicSideBySide defines is stereoscopic is done side by side or over under
     * @param scene defines the hosting scene
     */ constructor(name, position, interaxialDistance, isStereoscopicSideBySide, scene){
        super(name, position, scene);
        this._setRigMode = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$RigModes$2f$stereoscopicRigMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_SetStereoscopicRigMode"])(this);
        this.interaxialDistance = interaxialDistance;
        this.isStereoscopicSideBySide = isStereoscopicSideBySide;
        this.setCameraRigMode(isStereoscopicSideBySide ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Camera"].RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Camera"].RIG_MODE_STEREOSCOPIC_OVERUNDER, {
            interaxialDistance: interaxialDistance
        });
    }
    /**
     * Gets camera class name
     * @returns StereoscopicFreeCamera
     */ getClassName() {
        return "StereoscopicFreeCamera";
    }
} //# sourceMappingURL=stereoscopicFreeCamera.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Stereoscopic/stereoscopicGamepadCamera.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StereoscopicGamepadCamera",
    ()=>StereoscopicGamepadCamera
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/camera.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$gamepadCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/gamepadCamera.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/node.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$RigModes$2f$stereoscopicRigMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/RigModes/stereoscopicRigMode.js [app-client] (ecmascript)");
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node"].AddNodeConstructor("StereoscopicGamepadCamera", (name, scene, options)=>{
    return ()=>new StereoscopicGamepadCamera(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero(), options.interaxial_distance, options.isStereoscopicSideBySide, scene);
});
class StereoscopicGamepadCamera extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$gamepadCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GamepadCamera"] {
    /**
     * Creates a new StereoscopicGamepadCamera
     * @param name defines camera name
     * @param position defines initial position
     * @param interaxialDistance defines distance between each color axis
     * @param isStereoscopicSideBySide defines is stereoscopic is done side by side or over under
     * @param scene defines the hosting scene
     */ constructor(name, position, interaxialDistance, isStereoscopicSideBySide, scene){
        super(name, position, scene);
        this._setRigMode = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$RigModes$2f$stereoscopicRigMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_SetStereoscopicRigMode"])(this);
        this.interaxialDistance = interaxialDistance;
        this.isStereoscopicSideBySide = isStereoscopicSideBySide;
        this.setCameraRigMode(isStereoscopicSideBySide ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Camera"].RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Camera"].RIG_MODE_STEREOSCOPIC_OVERUNDER, {
            interaxialDistance: interaxialDistance
        });
    }
    /**
     * Gets camera class name
     * @returns StereoscopicGamepadCamera
     */ getClassName() {
        return "StereoscopicGamepadCamera";
    }
} //# sourceMappingURL=stereoscopicGamepadCamera.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Stereoscopic/stereoscopicUniversalCamera.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StereoscopicUniversalCamera",
    ()=>StereoscopicUniversalCamera
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/camera.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$universalCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/universalCamera.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/node.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$RigModes$2f$stereoscopicRigMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/RigModes/stereoscopicRigMode.js [app-client] (ecmascript)");
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node"].AddNodeConstructor("StereoscopicFreeCamera", (name, scene, options)=>{
    return ()=>new StereoscopicUniversalCamera(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero(), options.interaxial_distance, options.isStereoscopicSideBySide, scene);
});
class StereoscopicUniversalCamera extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$universalCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UniversalCamera"] {
    /**
     * Creates a new StereoscopicUniversalCamera
     * @param name defines camera name
     * @param position defines initial position
     * @param interaxialDistance defines distance between each color axis
     * @param isStereoscopicSideBySide defines is stereoscopic is done side by side or over under
     * @param scene defines the hosting scene
     */ constructor(name, position, interaxialDistance, isStereoscopicSideBySide, scene){
        super(name, position, scene);
        this._setRigMode = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$RigModes$2f$stereoscopicRigMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_SetStereoscopicRigMode"])(this);
        this.interaxialDistance = interaxialDistance;
        this.isStereoscopicSideBySide = isStereoscopicSideBySide;
        this.setCameraRigMode(isStereoscopicSideBySide ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Camera"].RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Camera"].RIG_MODE_STEREOSCOPIC_OVERUNDER, {
            interaxialDistance: interaxialDistance
        });
    }
    /**
     * Gets camera class name
     * @returns StereoscopicUniversalCamera
     */ getClassName() {
        return "StereoscopicUniversalCamera";
    }
} //# sourceMappingURL=stereoscopicUniversalCamera.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Stereoscopic/stereoscopicScreenUniversalCamera.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StereoscopicScreenUniversalCamera",
    ()=>StereoscopicScreenUniversalCamera
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/camera.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$universalCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/universalCamera.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$targetCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/targetCamera.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$transformNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/transformNode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$viewport$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.viewport.js [app-client] (ecmascript)");
;
;
;
;
;
;
class StereoscopicScreenUniversalCamera extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$universalCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UniversalCamera"] {
    set distanceBetweenEyes(newValue) {
        this._distanceBetweenEyes = newValue;
    }
    /**
     * distance between the eyes
     */ get distanceBetweenEyes() {
        return this._distanceBetweenEyes;
    }
    set distanceToProjectionPlane(newValue) {
        this._distanceToProjectionPlane = newValue;
    }
    /**
     * Distance to projection plane (should be the same units the like distance between the eyes)
     */ get distanceToProjectionPlane() {
        return this._distanceToProjectionPlane;
    }
    /**
     * Creates a new StereoscopicScreenUniversalCamera
     * @param name defines camera name
     * @param position defines initial position
     * @param scene defines the hosting scene
     * @param distanceToProjectionPlane defines distance between each color axis. The rig cameras will receive this as their negative z position!
     * @param distanceBetweenEyes defines is stereoscopic is done side by side or over under
     */ constructor(name, position, scene, distanceToProjectionPlane = 1, distanceBetweenEyes = 0.065){
        super(name, position, scene);
        this._distanceBetweenEyes = distanceBetweenEyes;
        this._distanceToProjectionPlane = distanceToProjectionPlane;
        this.setCameraRigMode(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Camera"].RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL, {
            stereoHalfAngle: 0
        });
        this._cameraRigParams.stereoHalfAngle = 0;
        this._cameraRigParams.interaxialDistance = distanceBetweenEyes;
    }
    /**
     * Gets camera class name
     * @returns StereoscopicScreenUniversalCamera
     */ getClassName() {
        return "StereoscopicUniversalCamera";
    }
    /**
     * @internal
     */ createRigCamera(name) {
        const camera = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$targetCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TargetCamera"](name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero(), this.getScene());
        const transform = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$transformNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransformNode"]("tm_" + name, this.getScene());
        camera.parent = transform;
        transform.setPivotMatrix(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].Identity(), false);
        camera.isRigCamera = true;
        camera.rigParent = this;
        return camera;
    }
    /**
     * @internal
     */ _updateRigCameras() {
        for(let cameraIndex = 0; cameraIndex < this._rigCameras.length; cameraIndex++){
            const cam = this._rigCameras[cameraIndex];
            cam.minZ = this.minZ;
            cam.maxZ = this.maxZ;
            cam.fov = this.fov;
            cam.upVector.copyFrom(this.upVector);
            if (cam.rotationQuaternion && this.rotationQuaternion) {
                cam.rotationQuaternion.copyFrom(this.rotationQuaternion);
            } else {
                cam.rotation.copyFrom(this.rotation);
            }
            this._updateCamera(this._rigCameras[cameraIndex], cameraIndex);
        }
    }
    _updateCamera(camera, cameraIndex) {
        const b = this.distanceBetweenEyes / 2;
        const z = b / this.distanceToProjectionPlane;
        camera.position.copyFrom(this.position);
        camera.position.addInPlaceFromFloats(cameraIndex === 0 ? -b : b, 0, -this._distanceToProjectionPlane);
        const transform = camera.parent;
        const m = transform.getPivotMatrix();
        m.setTranslationFromFloats(cameraIndex === 0 ? b : -b, 0, 0);
        m.setRowFromFloats(2, cameraIndex === 0 ? z : -z, 0, 1, 0);
        transform.setPivotMatrix(m, false);
    }
    _setRigMode() {
        this._rigCameras[0].viewport = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$viewport$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Viewport"](0, 0, 0.5, 1);
        this._rigCameras[1].viewport = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$viewport$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Viewport"](0.5, 0, 0.5, 1.0);
        for(let cameraIndex = 0; cameraIndex < this._rigCameras.length; cameraIndex++){
            this._updateCamera(this._rigCameras[cameraIndex], cameraIndex);
        }
    }
} //# sourceMappingURL=stereoscopicScreenUniversalCamera.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Stereoscopic/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Stereoscopic$2f$anaglyphArcRotateCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Stereoscopic/anaglyphArcRotateCamera.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Stereoscopic$2f$anaglyphFreeCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Stereoscopic/anaglyphFreeCamera.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Stereoscopic$2f$anaglyphGamepadCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Stereoscopic/anaglyphGamepadCamera.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Stereoscopic$2f$anaglyphUniversalCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Stereoscopic/anaglyphUniversalCamera.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Stereoscopic$2f$stereoscopicArcRotateCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Stereoscopic/stereoscopicArcRotateCamera.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Stereoscopic$2f$stereoscopicFreeCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Stereoscopic/stereoscopicFreeCamera.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Stereoscopic$2f$stereoscopicGamepadCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Stereoscopic/stereoscopicGamepadCamera.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Stereoscopic$2f$stereoscopicUniversalCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Stereoscopic/stereoscopicUniversalCamera.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Stereoscopic$2f$stereoscopicScreenUniversalCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Stereoscopic/stereoscopicScreenUniversalCamera.js [app-client] (ecmascript)"); //# sourceMappingURL=index.js.map
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
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/virtualJoysticksCamera.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VirtualJoysticksCamera",
    ()=>VirtualJoysticksCamera
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$freeCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/freeCamera.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/node.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$freeCameraVirtualJoystickInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Inputs/freeCameraVirtualJoystickInput.js [app-client] (ecmascript)");
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node"].AddNodeConstructor("VirtualJoysticksCamera", (name, scene)=>{
    return ()=>new VirtualJoysticksCamera(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero(), scene);
});
class VirtualJoysticksCamera extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$freeCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FreeCamera"] {
    /**
     * Instantiates a VirtualJoysticksCamera. It can be useful in First Person Shooter game for instance.
     * It is identical to the Free Camera and simply adds by default a virtual joystick.
     * Virtual Joysticks are on-screen 2D graphics that are used to control the camera or other scene items.
     * @see https://doc.babylonjs.com/features/featuresDeepDive/cameras/camera_introduction#virtual-joysticks-camera
     * @param name Define the name of the camera in the scene
     * @param position Define the start position of the camera in the scene
     * @param scene Define the scene the camera belongs to
     */ constructor(name, position, scene){
        super(name, position, scene);
        this.inputs.addVirtualJoystick();
    }
    /**
     * Gets the current object class name.
     * @returns the class name
     */ getClassName() {
        return "VirtualJoysticksCamera";
    }
} //# sourceMappingURL=virtualJoysticksCamera.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/VR/vrCameraMetrics.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VRCameraMetrics",
    ()=>VRCameraMetrics
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
;
class VRCameraMetrics {
    constructor(){
        /**
         * Define if the current vr camera should compensate the distortion of the lens or not.
         */ this.compensateDistortion = true;
        /**
         * Defines if multiview should be enabled when rendering (Default: false)
         */ this.multiviewEnabled = false;
    }
    /**
     * Gets the rendering aspect ratio based on the provided resolutions.
     */ get aspectRatio() {
        return this.hResolution / (2 * this.vResolution);
    }
    /**
     * Gets the aspect ratio based on the FOV, scale factors, and real screen sizes.
     */ get aspectRatioFov() {
        return 2 * Math.atan(this.postProcessScaleFactor * this.vScreenSize / (2 * this.eyeToScreenDistance));
    }
    /**
     * @internal
     */ // eslint-disable-next-line @typescript-eslint/naming-convention
    get leftHMatrix() {
        const meters = this.hScreenSize / 4 - this.lensSeparationDistance / 2;
        const h = 4 * meters / this.hScreenSize;
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].Translation(h, 0, 0);
    }
    /**
     * @internal
     */ // eslint-disable-next-line @typescript-eslint/naming-convention
    get rightHMatrix() {
        const meters = this.hScreenSize / 4 - this.lensSeparationDistance / 2;
        const h = 4 * meters / this.hScreenSize;
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].Translation(-h, 0, 0);
    }
    /**
     * @internal
     */ get leftPreViewMatrix() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].Translation(0.5 * this.interpupillaryDistance, 0, 0);
    }
    /**
     * @internal
     */ get rightPreViewMatrix() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].Translation(-0.5 * this.interpupillaryDistance, 0, 0);
    }
    /**
     * Get the default VRMetrics based on the most generic setup.
     * @returns the default vr metrics
     */ static GetDefault() {
        const result = new VRCameraMetrics();
        result.hResolution = 1280;
        result.vResolution = 800;
        result.hScreenSize = 0.149759993;
        result.vScreenSize = 0.0935999975;
        result.vScreenCenter = 0.0467999987;
        result.eyeToScreenDistance = 0.0410000011;
        result.lensSeparationDistance = 0.063500002;
        result.interpupillaryDistance = 0.064000003;
        result.distortionK = [
            1.0,
            0.219999999,
            0.239999995,
            0.0
        ];
        result.chromaAbCorrection = [
            0.995999992,
            -0.00400000019,
            1.01400006,
            0.0
        ];
        result.postProcessScaleFactor = 1.714605507808412;
        result.lensCenterOffset = 0.151976421;
        return result;
    }
} //# sourceMappingURL=vrCameraMetrics.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/RigModes/vrRigMode.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_SetVrRigMode",
    ()=>_SetVrRigMode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$PostProcesses$2f$vrDistortionCorrectionPostProcess$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/PostProcesses/vrDistortionCorrectionPostProcess.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$PostProcesses$2f$vrMultiviewToSingleviewPostProcess$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/PostProcesses/vrMultiviewToSingleviewPostProcess.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$VR$2f$vrCameraMetrics$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/VR/vrCameraMetrics.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$viewport$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.viewport.js [app-client] (ecmascript)");
;
;
;
;
;
;
function _SetVrRigMode(camera, rigParams) {
    const metrics = rigParams.vrCameraMetrics || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$VR$2f$vrCameraMetrics$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VRCameraMetrics"].GetDefault();
    camera._rigCameras[0]._cameraRigParams.vrMetrics = metrics;
    camera._rigCameras[0].viewport = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$viewport$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Viewport"](0, 0, 0.5, 1.0);
    camera._rigCameras[0]._cameraRigParams.vrWorkMatrix = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"]();
    camera._rigCameras[0]._cameraRigParams.vrHMatrix = metrics.leftHMatrix;
    camera._rigCameras[0]._cameraRigParams.vrPreViewMatrix = metrics.leftPreViewMatrix;
    camera._rigCameras[0].getProjectionMatrix = camera._rigCameras[0]._getVRProjectionMatrix;
    camera._rigCameras[1]._cameraRigParams.vrMetrics = metrics;
    camera._rigCameras[1].viewport = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$viewport$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Viewport"](0.5, 0, 0.5, 1.0);
    camera._rigCameras[1]._cameraRigParams.vrWorkMatrix = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"]();
    camera._rigCameras[1]._cameraRigParams.vrHMatrix = metrics.rightHMatrix;
    camera._rigCameras[1]._cameraRigParams.vrPreViewMatrix = metrics.rightPreViewMatrix;
    camera._rigCameras[1].getProjectionMatrix = camera._rigCameras[1]._getVRProjectionMatrix;
    // For multiview camera
    // First multiview will be rendered to camera._multiviewTexture
    // Then this postprocess will run on each eye to copy the right texture to each eye
    if (metrics.multiviewEnabled) {
        if (!camera.getScene().getEngine().getCaps().multiview) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Warn("Multiview is not supported, falling back to standard rendering");
            metrics.multiviewEnabled = false;
        } else {
            camera._useMultiviewToSingleView = true;
            camera._rigPostProcess = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$PostProcesses$2f$vrMultiviewToSingleviewPostProcess$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VRMultiviewToSingleviewPostProcess"]("VRMultiviewToSingleview", camera, metrics.postProcessScaleFactor);
        }
    }
    if (metrics.compensateDistortion) {
        camera._rigCameras[0]._rigPostProcess = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$PostProcesses$2f$vrDistortionCorrectionPostProcess$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VRDistortionCorrectionPostProcess"]("VR_Distort_Compensation_Left", camera._rigCameras[0], false, metrics);
        camera._rigCameras[1]._rigPostProcess = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$PostProcesses$2f$vrDistortionCorrectionPostProcess$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VRDistortionCorrectionPostProcess"]("VR_Distort_Compensation_Right", camera._rigCameras[1], true, metrics);
    }
} //# sourceMappingURL=vrRigMode.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/VR/vrDeviceOrientationArcRotateCamera.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VRDeviceOrientationArcRotateCamera",
    ()=>VRDeviceOrientationArcRotateCamera
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/camera.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$arcRotateCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/arcRotateCamera.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$VR$2f$vrCameraMetrics$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/VR/vrCameraMetrics.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/node.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$RigModes$2f$vrRigMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/RigModes/vrRigMode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$arcRotateCameraVRDeviceOrientationInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Inputs/arcRotateCameraVRDeviceOrientationInput.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node"].AddNodeConstructor("VRDeviceOrientationArcRotateCamera", (name, scene)=>{
    return ()=>new VRDeviceOrientationArcRotateCamera(name, 0, 0, 1.0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero(), scene);
});
class VRDeviceOrientationArcRotateCamera extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$arcRotateCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArcRotateCamera"] {
    /**
     * Creates a new VRDeviceOrientationArcRotateCamera
     * @param name defines camera name
     * @param alpha defines the camera rotation along the longitudinal axis
     * @param beta defines the camera rotation along the latitudinal axis
     * @param radius defines the camera distance from its target
     * @param target defines the camera target
     * @param scene defines the scene the camera belongs to
     * @param compensateDistortion defines if the camera needs to compensate the lens distortion
     * @param vrCameraMetrics defines the vr metrics associated to the camera
     */ constructor(name, alpha, beta, radius, target, scene, compensateDistortion = true, vrCameraMetrics = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$VR$2f$vrCameraMetrics$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VRCameraMetrics"].GetDefault()){
        super(name, alpha, beta, radius, target, scene);
        this._setRigMode = (rigParams)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$RigModes$2f$vrRigMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_SetVrRigMode"])(this, rigParams);
        vrCameraMetrics.compensateDistortion = compensateDistortion;
        this.setCameraRigMode(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Camera"].RIG_MODE_VR, {
            vrCameraMetrics: vrCameraMetrics
        });
        this.inputs.addVRDeviceOrientation();
    }
    /**
     * Gets camera class name
     * @returns VRDeviceOrientationArcRotateCamera
     */ getClassName() {
        return "VRDeviceOrientationArcRotateCamera";
    }
} //# sourceMappingURL=vrDeviceOrientationArcRotateCamera.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/VR/vrDeviceOrientationFreeCamera.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VRDeviceOrientationFreeCamera",
    ()=>VRDeviceOrientationFreeCamera
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/camera.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$deviceOrientationCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/deviceOrientationCamera.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$VR$2f$vrCameraMetrics$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/VR/vrCameraMetrics.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/node.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$RigModes$2f$vrRigMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/RigModes/vrRigMode.js [app-client] (ecmascript)");
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node"].AddNodeConstructor("VRDeviceOrientationFreeCamera", (name, scene)=>{
    return ()=>new VRDeviceOrientationFreeCamera(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero(), scene);
});
class VRDeviceOrientationFreeCamera extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$deviceOrientationCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DeviceOrientationCamera"] {
    /**
     * Creates a new VRDeviceOrientationFreeCamera
     * @param name defines camera name
     * @param position defines the start position of the camera
     * @param scene defines the scene the camera belongs to
     * @param compensateDistortion defines if the camera needs to compensate the lens distortion
     * @param vrCameraMetrics defines the vr metrics associated to the camera
     */ constructor(name, position, scene, compensateDistortion = true, vrCameraMetrics = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$VR$2f$vrCameraMetrics$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VRCameraMetrics"].GetDefault()){
        super(name, position, scene);
        this._setRigMode = (rigParams)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$RigModes$2f$vrRigMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_SetVrRigMode"])(this, rigParams);
        vrCameraMetrics.compensateDistortion = compensateDistortion;
        this.setCameraRigMode(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Camera"].RIG_MODE_VR, {
            vrCameraMetrics: vrCameraMetrics
        });
    }
    /**
     * Gets camera class name
     * @returns VRDeviceOrientationFreeCamera
     */ getClassName() {
        return "VRDeviceOrientationFreeCamera";
    }
} //# sourceMappingURL=vrDeviceOrientationFreeCamera.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/VR/vrDeviceOrientationGamepadCamera.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VRDeviceOrientationGamepadCamera",
    ()=>VRDeviceOrientationGamepadCamera
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$VR$2f$vrDeviceOrientationFreeCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/VR/vrDeviceOrientationFreeCamera.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$VR$2f$vrCameraMetrics$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/VR/vrCameraMetrics.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/node.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$RigModes$2f$vrRigMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/RigModes/vrRigMode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gamepads$2f$gamepadSceneComponent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Gamepads/gamepadSceneComponent.js [app-client] (ecmascript)");
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node"].AddNodeConstructor("VRDeviceOrientationGamepadCamera", (name, scene)=>{
    return ()=>new VRDeviceOrientationGamepadCamera(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero(), scene);
});
class VRDeviceOrientationGamepadCamera extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$VR$2f$vrDeviceOrientationFreeCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VRDeviceOrientationFreeCamera"] {
    /**
     * Creates a new VRDeviceOrientationGamepadCamera
     * @param name defines camera name
     * @param position defines the start position of the camera
     * @param scene defines the scene the camera belongs to
     * @param compensateDistortion defines if the camera needs to compensate the lens distortion
     * @param vrCameraMetrics defines the vr metrics associated to the camera
     */ constructor(name, position, scene, compensateDistortion = true, vrCameraMetrics = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$VR$2f$vrCameraMetrics$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VRCameraMetrics"].GetDefault()){
        super(name, position, scene, compensateDistortion, vrCameraMetrics);
        this._setRigMode = (rigParams)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$RigModes$2f$vrRigMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_SetVrRigMode"])(this, rigParams);
        this.inputs.addGamepad();
    }
    /**
     * Gets camera class name
     * @returns VRDeviceOrientationGamepadCamera
     */ getClassName() {
        return "VRDeviceOrientationGamepadCamera";
    }
} //# sourceMappingURL=vrDeviceOrientationGamepadCamera.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/VR/vrExperienceHelper.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable github/no-then */ /* eslint-disable @typescript-eslint/no-floating-promises */ __turbopack_context__.s([
    "OnAfterEnteringVRObservableEvent",
    ()=>OnAfterEnteringVRObservableEvent,
    "VRExperienceHelper",
    ()=>VRExperienceHelper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/observable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$freeCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/freeCamera.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$targetCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/targetCamera.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$deviceOrientationCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/deviceOrientationCamera.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$VR$2f$vrDeviceOrientationFreeCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/VR/vrDeviceOrientationFreeCamera.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Events$2f$pointerEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Events/pointerEvents.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.color.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gamepads$2f$gamepad$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Gamepads/gamepad.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$ray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Culling/ray.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$ray$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Culling/ray.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$imageProcessingConfiguration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/imageProcessingConfiguration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$standardMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/standardMaterial.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$dynamicTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/dynamicTexture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$easing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Animations/easing.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Animations/animation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gamepads$2f$gamepadSceneComponent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Gamepads/gamepadSceneComponent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animatable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Animations/animatable.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRSessionManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/webXRSessionManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$groundBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/groundBuilder.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$torusBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/torusBuilder.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
class VRExperienceHelperGazer {
    constructor(scene, gazeTrackerToClone = null){
        this.scene = scene;
        /** @internal */ this._pointerDownOnMeshAsked = false;
        /** @internal */ this._isActionableMesh = false;
        /** @internal */ this._teleportationRequestInitiated = false;
        /** @internal */ this._teleportationBackRequestInitiated = false;
        /** @internal */ this._rotationRightAsked = false;
        /** @internal */ this._rotationLeftAsked = false;
        /** @internal */ this._dpadPressed = true;
        /** @internal */ this._activePointer = false;
        this._id = VRExperienceHelperGazer._IdCounter++;
        // Gaze tracker
        if (!gazeTrackerToClone) {
            this._gazeTracker = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$torusBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreateTorus"])("gazeTracker", {
                diameter: 0.0035,
                thickness: 0.0025,
                tessellation: 20,
                updatable: false
            }, scene);
            this._gazeTracker.bakeCurrentTransformIntoVertices();
            this._gazeTracker.isPickable = false;
            this._gazeTracker.isVisible = false;
            const targetMat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$standardMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StandardMaterial"]("targetMat", scene);
            targetMat.specularColor = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color3"].Black();
            targetMat.emissiveColor = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color3"](0.7, 0.7, 0.7);
            targetMat.backFaceCulling = false;
            this._gazeTracker.material = targetMat;
        } else {
            this._gazeTracker = gazeTrackerToClone.clone("gazeTracker");
        }
    }
    /**
     * @internal
     */ _getForwardRay(length) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$ray$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ray"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero(), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, length));
    }
    /** @internal */ _selectionPointerDown() {
        this._pointerDownOnMeshAsked = true;
        if (this._currentHit) {
            this.scene.simulatePointerDown(this._currentHit, {
                pointerId: this._id
            });
        }
    }
    /** @internal */ _selectionPointerUp() {
        if (this._currentHit) {
            this.scene.simulatePointerUp(this._currentHit, {
                pointerId: this._id
            });
        }
        this._pointerDownOnMeshAsked = false;
    }
    /** @internal */ _activatePointer() {
        this._activePointer = true;
    }
    /** @internal */ _deactivatePointer() {
        this._activePointer = false;
    }
    /**
     * @internal
     */ // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _updatePointerDistance(distance = 100) {}
    dispose() {
        this._interactionsEnabled = false;
        this._teleportationEnabled = false;
        if (this._gazeTracker) {
            this._gazeTracker.dispose();
        }
    }
}
VRExperienceHelperGazer._IdCounter = 0;
class VRExperienceHelperCameraGazer extends VRExperienceHelperGazer {
    constructor(_getCamera, scene){
        super(scene);
        this._getCamera = _getCamera;
    }
    _getForwardRay(length) {
        const camera = this._getCamera();
        if (camera) {
            return camera.getForwardRay(length);
        } else {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$ray$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ray"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero(), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Forward());
        }
    }
}
class OnAfterEnteringVRObservableEvent {
}
class VRExperienceHelper {
    /** Return this.onEnteringVRObservable
     * Note: This one is for backward compatibility. Please use onEnteringVRObservable directly
     */ get onEnteringVR() {
        return this.onEnteringVRObservable;
    }
    /** Return this.onExitingVRObservable
     * Note: This one is for backward compatibility. Please use onExitingVRObservable directly
     */ get onExitingVR() {
        return this.onExitingVRObservable;
    }
    /**
     * The mesh used to display where the user is going to teleport.
     */ get teleportationTarget() {
        return this._teleportationTarget;
    }
    /**
     * Sets the mesh to be used to display where the user is going to teleport.
     */ set teleportationTarget(value) {
        if (value) {
            value.name = "teleportationTarget";
            this._isDefaultTeleportationTarget = false;
            this._teleportationTarget = value;
        }
    }
    /**
     * The mesh used to display where the user is selecting, this mesh will be cloned and set as the gazeTracker for the left and right controller
     * when set bakeCurrentTransformIntoVertices will be called on the mesh.
     * See https://doc.babylonjs.com/features/featuresDeepDive/mesh/transforms/center_origin/bakingTransforms
     */ get gazeTrackerMesh() {
        return this._cameraGazer._gazeTracker;
    }
    set gazeTrackerMesh(value) {
        if (value) {
            // Dispose of existing meshes
            if (this._cameraGazer._gazeTracker) {
                this._cameraGazer._gazeTracker.dispose();
            }
            // Set and create gaze trackers on head and controllers
            this._cameraGazer._gazeTracker = value;
            this._cameraGazer._gazeTracker.bakeCurrentTransformIntoVertices();
            this._cameraGazer._gazeTracker.isPickable = false;
            this._cameraGazer._gazeTracker.isVisible = false;
            this._cameraGazer._gazeTracker.name = "gazeTracker";
        }
    }
    /**
     * If the ray of the gaze should be displayed.
     */ get displayGaze() {
        return this._displayGaze;
    }
    /**
     * Sets if the ray of the gaze should be displayed.
     */ set displayGaze(value) {
        this._displayGaze = value;
        if (!value) {
            this._cameraGazer._gazeTracker.isVisible = false;
        }
    }
    /**
     * If the ray of the LaserPointer should be displayed.
     */ get displayLaserPointer() {
        return this._displayLaserPointer;
    }
    /**
     * Sets if the ray of the LaserPointer should be displayed.
     */ set displayLaserPointer(value) {
        this._displayLaserPointer = value;
    }
    /**
     * The deviceOrientationCamera used as the camera when not in VR.
     */ get deviceOrientationCamera() {
        return this._deviceOrientationCamera;
    }
    /**
     * Based on the current WebVR support, returns the current VR camera used.
     */ get currentVRCamera() {
        return this._scene.activeCamera;
    }
    /**
     * The deviceOrientationCamera that is used as a fallback when vr device is not connected.
     */ get vrDeviceOrientationCamera() {
        return this._vrDeviceOrientationCamera;
    }
    /**
     * The html button that is used to trigger entering into VR.
     */ get vrButton() {
        return this._btnVR;
    }
    get _teleportationRequestInitiated() {
        return this._cameraGazer._teleportationRequestInitiated;
    }
    /**
     * Instantiates a VRExperienceHelper.
     * Helps to quickly add VR support to an existing scene.
     * @param scene The scene the VRExperienceHelper belongs to.
     * @param webVROptions Options to modify the vr experience helper's behavior.
     */ constructor(scene, /** [Empty object] Options to modify the vr experience helper's behavior. */ webVROptions = {}){
        this.webVROptions = webVROptions;
        // Are we presenting in the fullscreen fallback?
        this._fullscreenVRpresenting = false;
        /**
         * Gets or sets a boolean indicating that gaze can be enabled even if pointer lock is not engage (useful on iOS where fullscreen mode and pointer lock are not supported)
         */ this.enableGazeEvenWhenNoPointerLock = false;
        /**
         * Gets or sets a boolean indicating that the VREXperienceHelper will exit VR if double tap is detected
         */ this.exitVROnDoubleTap = true;
        /**
         * Observable raised right before entering VR.
         */ this.onEnteringVRObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * Observable raised when entering VR has completed.
         */ this.onAfterEnteringVRObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * Observable raised when exiting VR.
         */ this.onExitingVRObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]();
        this._useCustomVRButton = false;
        this._teleportActive = false;
        this._floorMeshesCollection = [];
        this._teleportationMode = VRExperienceHelper.TELEPORTATIONMODE_CONSTANTTIME;
        this._teleportationTime = 122;
        this._teleportationSpeed = 20;
        this._rotationAllowed = true;
        this._teleportBackwardsVector = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, -1, -1);
        this._isDefaultTeleportationTarget = true;
        this._teleportationFillColor = "#444444";
        this._teleportationBorderColor = "#FFFFFF";
        this._rotationAngle = 0;
        this._haloCenter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, 0);
        this._padSensibilityUp = 0.65;
        this._padSensibilityDown = 0.35;
        this._pickedLaserColor = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color3"](0.2, 0.2, 1);
        this._pickedGazeColor = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color3"](0, 0, 1);
        /**
         * Observable raised when a new mesh is selected based on meshSelectionPredicate
         */ this.onNewMeshSelected = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * Observable raised when a new mesh is picked based on meshSelectionPredicate
         */ this.onNewMeshPicked = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * Observable raised before camera teleportation
         */ this.onBeforeCameraTeleport = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         *  Observable raised after camera teleportation
         */ this.onAfterCameraTeleport = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * Observable raised when current selected mesh gets unselected
         */ this.onSelectedMeshUnselected = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * Set teleportation enabled. If set to false camera teleportation will be disabled but camera rotation will be kept.
         */ this.teleportationEnabled = true;
        this._teleportationInitialized = false;
        this._interactionsEnabled = false;
        this._displayGaze = true;
        this._displayLaserPointer = true;
        /**
         * If the gaze trackers scale should be updated to be constant size when pointing at near/far meshes
         */ this.updateGazeTrackerScale = true;
        /**
         * If the gaze trackers color should be updated when selecting meshes
         */ this.updateGazeTrackerColor = true;
        /**
         * If the controller laser color should be updated when selecting meshes
         */ this.updateControllerLaserColor = true;
        /**
         * Defines whether or not Pointer lock should be requested when switching to
         * full screen.
         */ this.requestPointerLockOnFullScreen = true;
        /**
         * Was the XR test done already. If this is true AND this.xr exists, xr is initialized.
         * If this is true and no this.xr, xr exists but is not supported, using WebVR.
         */ this.xrTestDone = false;
        this._onResize = ()=>{
            this._moveButtonToBottomRight();
        };
        this._onFullscreenChange = ()=>{
            this._fullscreenVRpresenting = !!document.fullscreenElement;
            if (!this._fullscreenVRpresenting && this._inputElement) {
                this.exitVR();
                if (!this._useCustomVRButton && this._btnVR) {
                    this._btnVR.style.top = this._inputElement.offsetTop + this._inputElement.offsetHeight - 70 + "px";
                    this._btnVR.style.left = this._inputElement.offsetLeft + this._inputElement.offsetWidth - 100 + "px";
                    // make sure the button is visible after setting its position
                    this._updateButtonVisibility();
                }
            }
        };
        this._cachedAngularSensibility = {
            angularSensibilityX: null,
            angularSensibilityY: null,
            angularSensibility: null
        };
        this._beforeRender = ()=>{
            if (this._scene.getEngine().isPointerLock || this.enableGazeEvenWhenNoPointerLock) {
            // no-op
            } else {
                this._cameraGazer._gazeTracker.isVisible = false;
            }
        };
        this._onNewGamepadConnected = (gamepad)=>{
            if (gamepad.type !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gamepads$2f$gamepad$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Gamepad"].POSE_ENABLED) {
                if (gamepad.leftStick) {
                    gamepad.onleftstickchanged((stickValues)=>{
                        if (this._teleportationInitialized && this.teleportationEnabled) {
                            // Listening to classic/xbox gamepad only if no VR controller is active
                            this._checkTeleportWithRay(stickValues, this._cameraGazer);
                            this._checkTeleportBackwards(stickValues, this._cameraGazer);
                        }
                    });
                }
                if (gamepad.rightStick) {
                    gamepad.onrightstickchanged((stickValues)=>{
                        if (this._teleportationInitialized) {
                            this._checkRotate(stickValues, this._cameraGazer);
                        }
                    });
                }
                if (gamepad.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gamepads$2f$gamepad$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Gamepad"].XBOX) {
                    gamepad.onbuttondown((buttonPressed)=>{
                        if (this._interactionsEnabled && buttonPressed === 0 /* Xbox360Button.A */ ) {
                            this._cameraGazer._selectionPointerDown();
                        }
                    });
                    gamepad.onbuttonup((buttonPressed)=>{
                        if (this._interactionsEnabled && buttonPressed === 0 /* Xbox360Button.A */ ) {
                            this._cameraGazer._selectionPointerUp();
                        }
                    });
                }
            }
        };
        this._workingVector = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        this._workingQuaternion = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"].Identity();
        this._workingMatrix = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].Identity();
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Warn("WebVR is deprecated. Please avoid using this experience helper and use the WebXR experience helper instead");
        this._scene = scene;
        this._inputElement = scene.getEngine().getInputElement();
        // check for VR support:
        const vrSupported = "getVRDisplays" in navigator;
        // no VR support? force XR but only when it is not set because web vr can work without the getVRDisplays
        if (!vrSupported && webVROptions.useXR === undefined) {
            webVROptions.useXR = true;
        }
        // Parse options
        if (webVROptions.createFallbackVRDeviceOrientationFreeCamera === undefined) {
            webVROptions.createFallbackVRDeviceOrientationFreeCamera = true;
        }
        if (webVROptions.createDeviceOrientationCamera === undefined) {
            webVROptions.createDeviceOrientationCamera = true;
        }
        if (webVROptions.laserToggle === undefined) {
            webVROptions.laserToggle = true;
        }
        this._hasEnteredVR = false;
        // Set position
        if (this._scene.activeCamera) {
            this._position = this._scene.activeCamera.position.clone();
        } else {
            this._position = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, this._defaultHeight, 0);
        }
        // Set non-vr camera
        if (webVROptions.createDeviceOrientationCamera || !this._scene.activeCamera) {
            this._deviceOrientationCamera = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$deviceOrientationCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DeviceOrientationCamera"]("deviceOrientationVRHelper", this._position.clone(), scene);
            // Copy data from existing camera
            if (this._scene.activeCamera) {
                this._deviceOrientationCamera.minZ = this._scene.activeCamera.minZ;
                this._deviceOrientationCamera.maxZ = this._scene.activeCamera.maxZ;
                // Set rotation from previous camera
                if (this._scene.activeCamera instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$targetCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TargetCamera"] && this._scene.activeCamera.rotation) {
                    const targetCamera = this._scene.activeCamera;
                    if (targetCamera.rotationQuaternion) {
                        this._deviceOrientationCamera.rotationQuaternion?.copyFrom(targetCamera.rotationQuaternion);
                    } else {
                        this._deviceOrientationCamera.rotationQuaternion?.copyFrom(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"].RotationYawPitchRoll(targetCamera.rotation.y, targetCamera.rotation.x, targetCamera.rotation.z));
                    }
                    this._deviceOrientationCamera.rotation = targetCamera.rotation.clone();
                }
            }
            this._scene.activeCamera = this._deviceOrientationCamera;
            if (this._inputElement) {
                this._scene.activeCamera.attachControl();
            }
        } else {
            this._existingCamera = this._scene.activeCamera;
        }
        if (this.webVROptions.useXR && navigator.xr) {
            // force-check XR session support
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRSessionManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebXRSessionManager"].IsSessionSupportedAsync("immersive-vr").then((supported)=>{
                if (supported) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Log("Using WebXR. It is recommended to use the WebXRDefaultExperience directly");
                    // it is possible to use XR, let's do it!
                    scene.createDefaultXRExperienceAsync({
                        floorMeshes: webVROptions.floorMeshes || []
                    }).then((xr)=>{
                        this.xr = xr;
                        // connect observables
                        this.xrTestDone = true;
                        this._cameraGazer = new VRExperienceHelperCameraGazer(()=>{
                            return this.xr.baseExperience.camera;
                        }, scene);
                        this.xr.baseExperience.onStateChangedObservable.add((state)=>{
                            // support for entering / exiting
                            switch(state){
                                case 0 /* WebXRState.ENTERING_XR */ :
                                    this.onEnteringVRObservable.notifyObservers(this);
                                    if (!this._interactionsEnabled) {
                                        this.xr.pointerSelection.detach();
                                    }
                                    this.xr.pointerSelection.displayLaserPointer = this._displayLaserPointer;
                                    break;
                                case 1 /* WebXRState.EXITING_XR */ :
                                    this.onExitingVRObservable.notifyObservers(this);
                                    // resize to update width and height when exiting vr exits fullscreen
                                    this._scene.getEngine().resize();
                                    break;
                                case 2 /* WebXRState.IN_XR */ :
                                    this._hasEnteredVR = true;
                                    break;
                                case 3 /* WebXRState.NOT_IN_XR */ :
                                    this._hasEnteredVR = false;
                                    break;
                            }
                        });
                    });
                } else {
                    // XR not supported (thou exists), continue WebVR init
                    this._completeVRInit(scene, webVROptions);
                }
            });
        } else {
            // no XR, continue init synchronous
            this._completeVRInit(scene, webVROptions);
        }
    }
    _completeVRInit(scene, webVROptions) {
        this.xrTestDone = true;
        // Create VR cameras
        if (webVROptions.createFallbackVRDeviceOrientationFreeCamera) {
            this._vrDeviceOrientationCamera = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$VR$2f$vrDeviceOrientationFreeCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VRDeviceOrientationFreeCamera"]("VRDeviceOrientationVRHelper", this._position, this._scene, true, webVROptions.vrDeviceOrientationCameraMetrics);
            this._vrDeviceOrientationCamera.angularSensibility = Number.MAX_VALUE;
        }
        this._cameraGazer = new VRExperienceHelperCameraGazer(()=>{
            return this.currentVRCamera;
        }, scene);
        // Create default button
        if (!this._useCustomVRButton) {
            this._btnVR = document.createElement("BUTTON");
            this._btnVR.className = "babylonVRicon";
            this._btnVR.id = "babylonVRiconbtn";
            this._btnVR.title = "Click to switch to VR";
            const url = !window.SVGSVGElement ? "https://cdn.babylonjs.com/Assets/vrButton.png" : "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%222048%22%20height%3D%221152%22%20viewBox%3D%220%200%202048%201152%22%20version%3D%221.1%22%3E%3Cpath%20transform%3D%22rotate%28180%201024%2C576.0000000000001%29%22%20d%3D%22m1109%2C896q17%2C0%2030%2C-12t13%2C-30t-12.5%2C-30.5t-30.5%2C-12.5l-170%2C0q-18%2C0%20-30.5%2C12.5t-12.5%2C30.5t13%2C30t30%2C12l170%2C0zm-85%2C256q59%2C0%20132.5%2C-1.5t154.5%2C-5.5t164.5%2C-11.5t163%2C-20t150%2C-30t124.5%2C-41.5q23%2C-11%2042%2C-24t38%2C-30q27%2C-25%2041%2C-61.5t14%2C-72.5l0%2C-257q0%2C-123%20-47%2C-232t-128%2C-190t-190%2C-128t-232%2C-47l-81%2C0q-37%2C0%20-68.5%2C14t-60.5%2C34.5t-55.5%2C45t-53%2C45t-53%2C34.5t-55.5%2C14t-55.5%2C-14t-53%2C-34.5t-53%2C-45t-55.5%2C-45t-60.5%2C-34.5t-68.5%2C-14l-81%2C0q-123%2C0%20-232%2C47t-190%2C128t-128%2C190t-47%2C232l0%2C257q0%2C68%2038%2C115t97%2C73q54%2C24%20124.5%2C41.5t150%2C30t163%2C20t164.5%2C11.5t154.5%2C5.5t132.5%2C1.5zm939%2C-298q0%2C39%20-24.5%2C67t-58.5%2C42q-54%2C23%20-122%2C39.5t-143.5%2C28t-155.5%2C19t-157%2C11t-148.5%2C5t-129.5%2C1.5q-59%2C0%20-130%2C-1.5t-148%2C-5t-157%2C-11t-155.5%2C-19t-143.5%2C-28t-122%2C-39.5q-34%2C-14%20-58.5%2C-42t-24.5%2C-67l0%2C-257q0%2C-106%2040.5%2C-199t110%2C-162.5t162.5%2C-109.5t199%2C-40l81%2C0q27%2C0%2052%2C14t50%2C34.5t51%2C44.5t55.5%2C44.5t63.5%2C34.5t74%2C14t74%2C-14t63.5%2C-34.5t55.5%2C-44.5t51%2C-44.5t50%2C-34.5t52%2C-14l14%2C0q37%2C0%2070%2C0.5t64.5%2C4.5t63.5%2C12t68%2C23q71%2C30%20128.5%2C78.5t98.5%2C110t63.5%2C133.5t22.5%2C149l0%2C257z%22%20fill%3D%22white%22%20/%3E%3C/svg%3E%0A";
            let css = ".babylonVRicon { position: absolute; right: 20px; height: 50px; width: 80px; background-color: rgba(51,51,51,0.7); background-image: url(" + url + "); background-size: 80%; background-repeat:no-repeat; background-position: center; border: none; outline: none; transition: transform 0.125s ease-out } .babylonVRicon:hover { transform: scale(1.05) } .babylonVRicon:active {background-color: rgba(51,51,51,1) } .babylonVRicon:focus {background-color: rgba(51,51,51,1) }";
            css += ".babylonVRicon.vrdisplaypresenting { display: none; }";
            // TODO: Add user feedback so that they know what state the VRDisplay is in (disconnected, connected, entering-VR)
            // css += ".babylonVRicon.vrdisplaysupported { }";
            // css += ".babylonVRicon.vrdisplayready { }";
            // css += ".babylonVRicon.vrdisplayrequesting { }";
            const style = document.createElement("style");
            style.appendChild(document.createTextNode(css));
            document.getElementsByTagName("head")[0].appendChild(style);
            this._moveButtonToBottomRight();
        }
        // VR button click event
        if (this._btnVR) {
            this._btnVR.addEventListener("click", ()=>{
                if (!this.isInVRMode) {
                    this.enterVR();
                }
            });
        }
        // Window events
        const hostWindow = this._scene.getEngine().getHostWindow();
        if (!hostWindow) {
            return;
        }
        hostWindow.addEventListener("resize", this._onResize);
        document.addEventListener("fullscreenchange", this._onFullscreenChange, false);
        // Display vr button when headset is connected
        if (webVROptions.createFallbackVRDeviceOrientationFreeCamera) {
            this._displayVRButton();
        }
        // Exiting VR mode using 'ESC' key on desktop
        this._onKeyDown = (event)=>{
            if (event.keyCode === 27 && this.isInVRMode) {
                this.exitVR();
            }
        };
        document.addEventListener("keydown", this._onKeyDown);
        // Exiting VR mode double tapping the touch screen
        this._scene.onPrePointerObservable.add(()=>{
            if (this._hasEnteredVR && this.exitVROnDoubleTap) {
                this.exitVR();
                if (this._fullscreenVRpresenting) {
                    this._scene.getEngine().exitFullscreen();
                }
            }
        }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Events$2f$pointerEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointerEventTypes"].POINTERDOUBLETAP, false);
        scene.onDisposeObservable.add(()=>{
            this.dispose();
        });
        this._updateButtonVisibility();
        //create easing functions
        this._circleEase = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$easing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CircleEase"]();
        this._circleEase.setEasingMode(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$easing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EasingFunction"].EASINGMODE_EASEINOUT);
        this._teleportationEasing = this._circleEase;
        // Allow clicking in the vrDeviceOrientationCamera
        scene.onPointerObservable.add((e)=>{
            if (this._interactionsEnabled) {
                if (scene.activeCamera === this.vrDeviceOrientationCamera && e.event.pointerType === "mouse") {
                    if (e.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Events$2f$pointerEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointerEventTypes"].POINTERDOWN) {
                        this._cameraGazer._selectionPointerDown();
                    } else if (e.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Events$2f$pointerEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointerEventTypes"].POINTERUP) {
                        this._cameraGazer._selectionPointerUp();
                    }
                }
            }
        });
        if (this.webVROptions.floorMeshes) {
            this.enableTeleportation({
                floorMeshes: this.webVROptions.floorMeshes
            });
        }
    }
    /**
     * Gets a value indicating if we are currently in VR mode.
     */ get isInVRMode() {
        return this.xr && this.webVROptions.useXR && this.xr.baseExperience.state === 2 /* WebXRState.IN_XR */  || this._fullscreenVRpresenting;
    }
    _moveButtonToBottomRight() {
        if (this._inputElement && !this._useCustomVRButton && this._btnVR) {
            const rect = this._inputElement.getBoundingClientRect();
            this._btnVR.style.top = rect.top + rect.height - 70 + "px";
            this._btnVR.style.left = rect.left + rect.width - 100 + "px";
        }
    }
    _displayVRButton() {
        if (!this._useCustomVRButton && !this._btnVRDisplayed && this._btnVR) {
            document.body.appendChild(this._btnVR);
            this._btnVRDisplayed = true;
        }
    }
    _updateButtonVisibility() {
        if (!this._btnVR || this._useCustomVRButton) {
            return;
        }
        this._btnVR.className = "babylonVRicon";
        if (this.isInVRMode) {
            this._btnVR.className += " vrdisplaypresenting";
        }
    }
    /**
     * Attempt to enter VR. If a headset is connected and ready, will request present on that.
     * Otherwise, will use the fullscreen API.
     */ enterVR() {
        if (this.xr) {
            this.xr.baseExperience.enterXRAsync("immersive-vr", "local-floor", this.xr.renderTarget);
            return;
        }
        if (this.onEnteringVRObservable) {
            try {
                this.onEnteringVRObservable.notifyObservers(this);
            } catch (err) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Warn("Error in your custom logic onEnteringVR: " + err);
            }
        }
        if (this._scene.activeCamera) {
            this._position = this._scene.activeCamera.position.clone();
            if (this.vrDeviceOrientationCamera) {
                this.vrDeviceOrientationCamera.rotation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"].FromRotationMatrix(this._scene.activeCamera.getWorldMatrix().getRotationMatrix()).toEulerAngles();
                this.vrDeviceOrientationCamera.angularSensibility = 2000;
            }
            // make sure that we return to the last active camera
            this._existingCamera = this._scene.activeCamera;
            // Remove and cache angular sensability to avoid camera rotation when in VR
            if (this._existingCamera.angularSensibilityX) {
                this._cachedAngularSensibility.angularSensibilityX = this._existingCamera.angularSensibilityX;
                this._existingCamera.angularSensibilityX = Number.MAX_VALUE;
            }
            if (this._existingCamera.angularSensibilityY) {
                this._cachedAngularSensibility.angularSensibilityY = this._existingCamera.angularSensibilityY;
                this._existingCamera.angularSensibilityY = Number.MAX_VALUE;
            }
            if (this._existingCamera.angularSensibility) {
                this._cachedAngularSensibility.angularSensibility = this._existingCamera.angularSensibility;
                this._existingCamera.angularSensibility = Number.MAX_VALUE;
            }
        }
        // If WebVR is supported and a headset is connected
        if (this._vrDeviceOrientationCamera) {
            this._vrDeviceOrientationCamera.position = this._position;
            if (this._scene.activeCamera) {
                this._vrDeviceOrientationCamera.minZ = this._scene.activeCamera.minZ;
            }
            this._scene.activeCamera = this._vrDeviceOrientationCamera;
            this._scene.getEngine().enterFullscreen(this.requestPointerLockOnFullScreen);
            this._updateButtonVisibility();
            this._vrDeviceOrientationCamera.onViewMatrixChangedObservable.addOnce(()=>{
                this.onAfterEnteringVRObservable.notifyObservers({
                    success: true
                });
            });
        }
        if (this._scene.activeCamera && this._inputElement) {
            this._scene.activeCamera.attachControl();
        }
        if (this._interactionsEnabled) {
            this._scene.registerBeforeRender(this._beforeRender);
        }
        this._hasEnteredVR = true;
    }
    /**
     * Attempt to exit VR, or fullscreen.
     */ exitVR() {
        if (this.xr) {
            this.xr.baseExperience.exitXRAsync();
            return;
        }
        if (this._hasEnteredVR) {
            if (this.onExitingVRObservable) {
                try {
                    this.onExitingVRObservable.notifyObservers(this);
                } catch (err) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Warn("Error in your custom logic onExitingVR: " + err);
                }
            }
            if (this._scene.activeCamera) {
                this._position = this._scene.activeCamera.position.clone();
            }
            if (this.vrDeviceOrientationCamera) {
                this.vrDeviceOrientationCamera.angularSensibility = Number.MAX_VALUE;
            }
            if (this._deviceOrientationCamera) {
                this._deviceOrientationCamera.position = this._position;
                this._scene.activeCamera = this._deviceOrientationCamera;
                // Restore angular sensibility
                if (this._cachedAngularSensibility.angularSensibilityX) {
                    this._deviceOrientationCamera.angularSensibilityX = this._cachedAngularSensibility.angularSensibilityX;
                    this._cachedAngularSensibility.angularSensibilityX = null;
                }
                if (this._cachedAngularSensibility.angularSensibilityY) {
                    this._deviceOrientationCamera.angularSensibilityY = this._cachedAngularSensibility.angularSensibilityY;
                    this._cachedAngularSensibility.angularSensibilityY = null;
                }
                if (this._cachedAngularSensibility.angularSensibility) {
                    this._deviceOrientationCamera.angularSensibility = this._cachedAngularSensibility.angularSensibility;
                    this._cachedAngularSensibility.angularSensibility = null;
                }
            } else if (this._existingCamera) {
                this._existingCamera.position = this._position;
                this._scene.activeCamera = this._existingCamera;
                if (this._inputElement) {
                    this._scene.activeCamera.attachControl();
                }
                // Restore angular sensibility
                if (this._cachedAngularSensibility.angularSensibilityX) {
                    this._existingCamera.angularSensibilityX = this._cachedAngularSensibility.angularSensibilityX;
                    this._cachedAngularSensibility.angularSensibilityX = null;
                }
                if (this._cachedAngularSensibility.angularSensibilityY) {
                    this._existingCamera.angularSensibilityY = this._cachedAngularSensibility.angularSensibilityY;
                    this._cachedAngularSensibility.angularSensibilityY = null;
                }
                if (this._cachedAngularSensibility.angularSensibility) {
                    this._existingCamera.angularSensibility = this._cachedAngularSensibility.angularSensibility;
                    this._cachedAngularSensibility.angularSensibility = null;
                }
            }
            this._updateButtonVisibility();
            if (this._interactionsEnabled) {
                this._scene.unregisterBeforeRender(this._beforeRender);
                this._cameraGazer._gazeTracker.isVisible = false;
            }
            // resize to update width and height when exiting vr exits fullscreen
            this._scene.getEngine().resize();
            this._hasEnteredVR = false;
        }
    }
    /**
     * The position of the vr experience helper.
     */ get position() {
        return this._position;
    }
    /**
     * Sets the position of the vr experience helper.
     */ set position(value) {
        this._position = value;
        if (this._scene.activeCamera) {
            this._scene.activeCamera.position = value;
        }
    }
    /**
     * Enables controllers and user interactions such as selecting and object or clicking on an object.
     */ enableInteractions() {
        if (!this._interactionsEnabled) {
            // in XR it is enabled by default, but just to make sure, re-attach
            if (this.xr) {
                if (this.xr.baseExperience.state === 2 /* WebXRState.IN_XR */ ) {
                    this.xr.pointerSelection.attach();
                }
                return;
            }
            this.raySelectionPredicate = (mesh)=>{
                return mesh.isVisible && (mesh.isPickable || mesh.name === this._floorMeshName);
            };
            this.meshSelectionPredicate = ()=>{
                return true;
            };
            this._raySelectionPredicate = (mesh)=>{
                if (this._isTeleportationFloor(mesh) || mesh.name.indexOf("gazeTracker") === -1 && mesh.name.indexOf("teleportationTarget") === -1 && mesh.name.indexOf("torusTeleportation") === -1) {
                    return this.raySelectionPredicate(mesh);
                }
                return false;
            };
            this._interactionsEnabled = true;
        }
    }
    _isTeleportationFloor(mesh) {
        for(let i = 0; i < this._floorMeshesCollection.length; i++){
            if (this._floorMeshesCollection[i].id === mesh.id) {
                return true;
            }
        }
        if (this._floorMeshName && mesh.name === this._floorMeshName) {
            return true;
        }
        return false;
    }
    /**
     * Adds a floor mesh to be used for teleportation.
     * @param floorMesh the mesh to be used for teleportation.
     */ addFloorMesh(floorMesh) {
        if (!this._floorMeshesCollection) {
            return;
        }
        if (this._floorMeshesCollection.indexOf(floorMesh) > -1) {
            return;
        }
        this._floorMeshesCollection.push(floorMesh);
    }
    /**
     * Removes a floor mesh from being used for teleportation.
     * @param floorMesh the mesh to be removed.
     */ removeFloorMesh(floorMesh) {
        if (!this._floorMeshesCollection) {
            return;
        }
        const meshIndex = this._floorMeshesCollection.indexOf(floorMesh);
        if (meshIndex !== -1) {
            this._floorMeshesCollection.splice(meshIndex, 1);
        }
    }
    /**
     * Enables interactions and teleportation using the VR controllers and gaze.
     * @param vrTeleportationOptions options to modify teleportation behavior.
     */ enableTeleportation(vrTeleportationOptions = {}) {
        if (!this._teleportationInitialized) {
            this.enableInteractions();
            if (this.webVROptions.useXR && (vrTeleportationOptions.floorMeshes || vrTeleportationOptions.floorMeshName)) {
                const floorMeshes = vrTeleportationOptions.floorMeshes || [];
                if (!floorMeshes.length) {
                    const floorMesh = this._scene.getMeshByName(vrTeleportationOptions.floorMeshName);
                    if (floorMesh) {
                        floorMeshes.push(floorMesh);
                    }
                }
                if (this.xr) {
                    for (const mesh of floorMeshes){
                        this.xr.teleportation.addFloorMesh(mesh);
                    }
                    if (!this.xr.teleportation.attached) {
                        this.xr.teleportation.attach();
                    }
                    return;
                } else if (!this.xrTestDone) {
                    const waitForXr = ()=>{
                        if (this.xrTestDone) {
                            this._scene.unregisterBeforeRender(waitForXr);
                            if (this.xr) {
                                if (!this.xr.teleportation.attached) {
                                    this.xr.teleportation.attach();
                                }
                            } else {
                                this.enableTeleportation(vrTeleportationOptions);
                            }
                        }
                    };
                    this._scene.registerBeforeRender(waitForXr);
                    return;
                }
            }
            if (vrTeleportationOptions.floorMeshName) {
                this._floorMeshName = vrTeleportationOptions.floorMeshName;
            }
            if (vrTeleportationOptions.floorMeshes) {
                this._floorMeshesCollection = vrTeleportationOptions.floorMeshes;
            }
            if (vrTeleportationOptions.teleportationMode) {
                this._teleportationMode = vrTeleportationOptions.teleportationMode;
            }
            if (vrTeleportationOptions.teleportationTime && vrTeleportationOptions.teleportationTime > 0) {
                this._teleportationTime = vrTeleportationOptions.teleportationTime;
            }
            if (vrTeleportationOptions.teleportationSpeed && vrTeleportationOptions.teleportationSpeed > 0) {
                this._teleportationSpeed = vrTeleportationOptions.teleportationSpeed;
            }
            if (vrTeleportationOptions.easingFunction !== undefined) {
                this._teleportationEasing = vrTeleportationOptions.easingFunction;
            }
            // Creates an image processing post process for the vignette not relying
            // on the main scene configuration for image processing to reduce setup and spaces
            // (gamma/linear) conflicts.
            const imageProcessingConfiguration = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$imageProcessingConfiguration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ImageProcessingConfiguration"]();
            imageProcessingConfiguration.vignetteColor = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color4"](0, 0, 0, 0);
            imageProcessingConfiguration.vignetteEnabled = true;
            this._teleportationInitialized = true;
            if (this._isDefaultTeleportationTarget) {
                this._createTeleportationCircles();
            }
        }
    }
    _checkTeleportWithRay(stateObject, gazer) {
        // Dont teleport if another gaze already requested teleportation
        if (this._teleportationRequestInitiated && !gazer._teleportationRequestInitiated) {
            return;
        }
        if (!gazer._teleportationRequestInitiated) {
            if (stateObject.y < -this._padSensibilityUp && gazer._dpadPressed) {
                gazer._activatePointer();
                gazer._teleportationRequestInitiated = true;
            }
        } else {
            // Listening to the proper controller values changes to confirm teleportation
            if (Math.sqrt(stateObject.y * stateObject.y + stateObject.x * stateObject.x) < this._padSensibilityDown) {
                if (this._teleportActive) {
                    this.teleportCamera(this._haloCenter);
                }
                gazer._teleportationRequestInitiated = false;
            }
        }
    }
    _checkRotate(stateObject, gazer) {
        // Only rotate when user is not currently selecting a teleportation location
        if (gazer._teleportationRequestInitiated) {
            return;
        }
        if (!gazer._rotationLeftAsked) {
            if (stateObject.x < -this._padSensibilityUp && gazer._dpadPressed) {
                gazer._rotationLeftAsked = true;
                if (this._rotationAllowed) {
                    this._rotateCamera(false);
                }
            }
        } else {
            if (stateObject.x > -this._padSensibilityDown) {
                gazer._rotationLeftAsked = false;
            }
        }
        if (!gazer._rotationRightAsked) {
            if (stateObject.x > this._padSensibilityUp && gazer._dpadPressed) {
                gazer._rotationRightAsked = true;
                if (this._rotationAllowed) {
                    this._rotateCamera(true);
                }
            }
        } else {
            if (stateObject.x < this._padSensibilityDown) {
                gazer._rotationRightAsked = false;
            }
        }
    }
    _checkTeleportBackwards(stateObject, gazer) {
        // Only teleport backwards when user is not currently selecting a teleportation location
        if (gazer._teleportationRequestInitiated) {
            return;
        }
        // Teleport backwards
        if (stateObject.y > this._padSensibilityUp && gazer._dpadPressed) {
            if (!gazer._teleportationBackRequestInitiated) {
                if (!this.currentVRCamera) {
                    return;
                }
                // Get rotation and position of the current camera
                const rotation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"].FromRotationMatrix(this.currentVRCamera.getWorldMatrix().getRotationMatrix());
                const position = this.currentVRCamera.position;
                // Get matrix with only the y rotation of the device rotation
                rotation.toEulerAnglesToRef(this._workingVector);
                this._workingVector.z = 0;
                this._workingVector.x = 0;
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"].RotationYawPitchRollToRef(this._workingVector.y, this._workingVector.x, this._workingVector.z, this._workingQuaternion);
                this._workingQuaternion.toRotationMatrix(this._workingMatrix);
                // Rotate backwards ray by device rotation to cast at the ground behind the user
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinatesToRef(this._teleportBackwardsVector, this._workingMatrix, this._workingVector);
                // Teleport if ray hit the ground and is not to far away eg. backwards off a cliff
                const ray = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$ray$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ray"](position, this._workingVector);
                const hit = this._scene.pickWithRay(ray, this._raySelectionPredicate);
                if (hit && hit.pickedPoint && hit.pickedMesh && this._isTeleportationFloor(hit.pickedMesh) && hit.distance < 5) {
                    this.teleportCamera(hit.pickedPoint);
                }
                gazer._teleportationBackRequestInitiated = true;
            }
        } else {
            gazer._teleportationBackRequestInitiated = false;
        }
    }
    _createTeleportationCircles() {
        this._teleportationTarget = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$groundBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreateGround"])("teleportationTarget", {
            width: 2,
            height: 2,
            subdivisions: 2
        }, this._scene);
        this._teleportationTarget.isPickable = false;
        const length = 512;
        const dynamicTexture = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$dynamicTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DynamicTexture"]("DynamicTexture", length, this._scene, true);
        dynamicTexture.hasAlpha = true;
        const context = dynamicTexture.getContext();
        const centerX = length / 2;
        const centerY = length / 2;
        const radius = 200;
        context.beginPath();
        context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
        context.fillStyle = this._teleportationFillColor;
        context.fill();
        context.lineWidth = 10;
        context.strokeStyle = this._teleportationBorderColor;
        context.stroke();
        context.closePath();
        dynamicTexture.update();
        const teleportationCircleMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$standardMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StandardMaterial"]("TextPlaneMaterial", this._scene);
        teleportationCircleMaterial.diffuseTexture = dynamicTexture;
        this._teleportationTarget.material = teleportationCircleMaterial;
        const torus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$torusBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreateTorus"])("torusTeleportation", {
            diameter: 0.75,
            thickness: 0.1,
            tessellation: 25,
            updatable: false
        }, this._scene);
        torus.isPickable = false;
        torus.parent = this._teleportationTarget;
        const animationInnerCircle = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Animation"]("animationInnerCircle", "position.y", 30, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Animation"].ANIMATIONTYPE_FLOAT, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Animation"].ANIMATIONLOOPMODE_CYCLE);
        const keys = [];
        keys.push({
            frame: 0,
            value: 0
        });
        keys.push({
            frame: 30,
            value: 0.4
        });
        keys.push({
            frame: 60,
            value: 0
        });
        animationInnerCircle.setKeys(keys);
        const easingFunction = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$easing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SineEase"]();
        easingFunction.setEasingMode(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$easing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EasingFunction"].EASINGMODE_EASEINOUT);
        animationInnerCircle.setEasingFunction(easingFunction);
        torus.animations = [];
        torus.animations.push(animationInnerCircle);
        this._scene.beginAnimation(torus, 0, 60, true);
        this._hideTeleportationTarget();
    }
    _hideTeleportationTarget() {
        this._teleportActive = false;
        if (this._teleportationInitialized) {
            this._teleportationTarget.isVisible = false;
            if (this._isDefaultTeleportationTarget) {
                this._teleportationTarget.getChildren()[0].isVisible = false;
            }
        }
    }
    _rotateCamera(right) {
        if (!(this.currentVRCamera instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$freeCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FreeCamera"])) {
            return;
        }
        if (right) {
            this._rotationAngle++;
        } else {
            this._rotationAngle--;
        }
        this.currentVRCamera.animations = [];
        const target = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"].FromRotationMatrix(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].RotationY(Math.PI / 4 * this._rotationAngle));
        const animationRotation = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Animation"]("animationRotation", "rotationQuaternion", 90, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Animation"].ANIMATIONTYPE_QUATERNION, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Animation"].ANIMATIONLOOPMODE_CONSTANT);
        const animationRotationKeys = [];
        animationRotationKeys.push({
            frame: 0,
            value: this.currentVRCamera.rotationQuaternion
        });
        animationRotationKeys.push({
            frame: 6,
            value: target
        });
        animationRotation.setKeys(animationRotationKeys);
        animationRotation.setEasingFunction(this._circleEase);
        this.currentVRCamera.animations.push(animationRotation);
        this._postProcessMove.animations = [];
        const animationPp = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Animation"]("animationPP", "vignetteWeight", 90, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Animation"].ANIMATIONTYPE_FLOAT, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Animation"].ANIMATIONLOOPMODE_CONSTANT);
        const vignetteWeightKeys = [];
        vignetteWeightKeys.push({
            frame: 0,
            value: 0
        });
        vignetteWeightKeys.push({
            frame: 3,
            value: 4
        });
        vignetteWeightKeys.push({
            frame: 6,
            value: 0
        });
        animationPp.setKeys(vignetteWeightKeys);
        animationPp.setEasingFunction(this._circleEase);
        this._postProcessMove.animations.push(animationPp);
        const animationPp2 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Animation"]("animationPP2", "vignetteStretch", 90, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Animation"].ANIMATIONTYPE_FLOAT, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Animation"].ANIMATIONLOOPMODE_CONSTANT);
        const vignetteStretchKeys = [];
        vignetteStretchKeys.push({
            frame: 0,
            value: 0
        });
        vignetteStretchKeys.push({
            frame: 3,
            value: 10
        });
        vignetteStretchKeys.push({
            frame: 6,
            value: 0
        });
        animationPp2.setKeys(vignetteStretchKeys);
        animationPp2.setEasingFunction(this._circleEase);
        this._postProcessMove.animations.push(animationPp2);
        this._postProcessMove.imageProcessingConfiguration.vignetteWeight = 0;
        this._postProcessMove.imageProcessingConfiguration.vignetteStretch = 0;
        this._postProcessMove.samples = 4;
        this._scene.beginAnimation(this.currentVRCamera, 0, 6, false, 1);
    }
    /**
     * Teleports the users feet to the desired location
     * @param location The location where the user's feet should be placed
     */ teleportCamera(location) {
        if (!(this.currentVRCamera instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$freeCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FreeCamera"])) {
            return;
        }
        // Teleport the hmd to where the user is looking by moving the anchor to where they are looking minus the
        // offset of the headset from the anchor.
        this._workingVector.copyFrom(location);
        // Add height to account for user's height offset
        if (this.isInVRMode) {
        // no-op
        } else {
            this._workingVector.y += this._defaultHeight;
        }
        this.onBeforeCameraTeleport.notifyObservers(this._workingVector);
        // Animations FPS
        const fps = 90;
        let speedRatio, lastFrame;
        if (this._teleportationMode == VRExperienceHelper.TELEPORTATIONMODE_CONSTANTSPEED) {
            lastFrame = fps;
            const dist = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Distance(this.currentVRCamera.position, this._workingVector);
            speedRatio = this._teleportationSpeed / dist;
        } else {
            // teleportationMode is TELEPORTATIONMODE_CONSTANTTIME
            lastFrame = Math.round(this._teleportationTime * fps / 1000);
            speedRatio = 1;
        }
        // Create animation from the camera's position to the new location
        this.currentVRCamera.animations = [];
        const animationCameraTeleportation = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Animation"]("animationCameraTeleportation", "position", fps, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Animation"].ANIMATIONTYPE_VECTOR3, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Animation"].ANIMATIONLOOPMODE_CONSTANT);
        const animationCameraTeleportationKeys = [
            {
                frame: 0,
                value: this.currentVRCamera.position
            },
            {
                frame: lastFrame,
                value: this._workingVector
            }
        ];
        animationCameraTeleportation.setKeys(animationCameraTeleportationKeys);
        animationCameraTeleportation.setEasingFunction(this._teleportationEasing);
        this.currentVRCamera.animations.push(animationCameraTeleportation);
        this._postProcessMove.animations = [];
        // Calculate the mid frame for vignette animations
        const midFrame = Math.round(lastFrame / 2);
        const animationPp = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Animation"]("animationPP", "vignetteWeight", fps, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Animation"].ANIMATIONTYPE_FLOAT, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Animation"].ANIMATIONLOOPMODE_CONSTANT);
        const vignetteWeightKeys = [];
        vignetteWeightKeys.push({
            frame: 0,
            value: 0
        });
        vignetteWeightKeys.push({
            frame: midFrame,
            value: 8
        });
        vignetteWeightKeys.push({
            frame: lastFrame,
            value: 0
        });
        animationPp.setKeys(vignetteWeightKeys);
        this._postProcessMove.animations.push(animationPp);
        const animationPp2 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Animation"]("animationPP2", "vignetteStretch", fps, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Animation"].ANIMATIONTYPE_FLOAT, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Animation"].ANIMATIONLOOPMODE_CONSTANT);
        const vignetteStretchKeys = [];
        vignetteStretchKeys.push({
            frame: 0,
            value: 0
        });
        vignetteStretchKeys.push({
            frame: midFrame,
            value: 10
        });
        vignetteStretchKeys.push({
            frame: lastFrame,
            value: 0
        });
        animationPp2.setKeys(vignetteStretchKeys);
        this._postProcessMove.animations.push(animationPp2);
        this._postProcessMove.imageProcessingConfiguration.vignetteWeight = 0;
        this._postProcessMove.imageProcessingConfiguration.vignetteStretch = 0;
        this._scene.beginAnimation(this.currentVRCamera, 0, lastFrame, false, speedRatio, ()=>{
            this.onAfterCameraTeleport.notifyObservers(this._workingVector);
        });
        this._hideTeleportationTarget();
    }
    /**
     * Permanently set new colors for the laser pointer
     * @param color the new laser color
     * @param pickedColor the new laser color when picked mesh detected
     */ setLaserColor(color, pickedColor = this._pickedLaserColor) {
        this._pickedLaserColor = pickedColor;
    }
    /**
     * Set lighting enabled / disabled on the laser pointer of both controllers
     * @param _enabled should the lighting be enabled on the laser pointer
     */ setLaserLightingState(_enabled = true) {
    // no-op
    }
    /**
     * Permanently set new colors for the gaze pointer
     * @param color the new gaze color
     * @param pickedColor the new gaze color when picked mesh detected
     */ setGazeColor(color, pickedColor = this._pickedGazeColor) {
        this._pickedGazeColor = pickedColor;
    }
    /**
     * Sets the color of the laser ray from the vr controllers.
     * @param _color new color for the ray.
     */ changeLaserColor(_color) {
        if (!this.updateControllerLaserColor) {
            return;
        }
    }
    /**
     * Sets the color of the ray from the vr headsets gaze.
     * @param color new color for the ray.
     */ changeGazeColor(color) {
        if (!this.updateGazeTrackerColor) {
            return;
        }
        if (!this._cameraGazer._gazeTracker.material) {
            return;
        }
        this._cameraGazer._gazeTracker.material.emissiveColor = color;
    }
    /**
     * Exits VR and disposes of the vr experience helper
     */ dispose() {
        if (this.isInVRMode) {
            this.exitVR();
        }
        if (this._postProcessMove) {
            this._postProcessMove.dispose();
        }
        if (this._vrDeviceOrientationCamera) {
            this._vrDeviceOrientationCamera.dispose();
        }
        if (!this._useCustomVRButton && this._btnVR && this._btnVR.parentNode) {
            document.body.removeChild(this._btnVR);
        }
        if (this._deviceOrientationCamera && this._scene.activeCamera != this._deviceOrientationCamera) {
            this._deviceOrientationCamera.dispose();
        }
        if (this._cameraGazer) {
            this._cameraGazer.dispose();
        }
        if (this._teleportationTarget) {
            this._teleportationTarget.dispose();
        }
        if (this.xr) {
            this.xr.dispose();
        }
        this._floorMeshesCollection.length = 0;
        document.removeEventListener("keydown", this._onKeyDown);
        window.removeEventListener("vrdisplaypresentchange", this._onVrDisplayPresentChangeBind);
        window.removeEventListener("resize", this._onResize);
        document.removeEventListener("fullscreenchange", this._onFullscreenChange);
        this._scene.gamepadManager.onGamepadConnectedObservable.removeCallback(this._onNewGamepadConnected);
        this._scene.unregisterBeforeRender(this._beforeRender);
    }
    /**
     * Gets the name of the VRExperienceHelper class
     * @returns "VRExperienceHelper"
     */ getClassName() {
        return "VRExperienceHelper";
    }
}
/**
 * Time Constant Teleportation Mode
 */ VRExperienceHelper.TELEPORTATIONMODE_CONSTANTTIME = 0;
/**
 * Speed Constant Teleportation Mode
 */ VRExperienceHelper.TELEPORTATIONMODE_CONSTANTSPEED = 1; //# sourceMappingURL=vrExperienceHelper.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/VR/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$VR$2f$vrCameraMetrics$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/VR/vrCameraMetrics.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$VR$2f$vrDeviceOrientationArcRotateCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/VR/vrDeviceOrientationArcRotateCamera.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$VR$2f$vrDeviceOrientationFreeCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/VR/vrDeviceOrientationFreeCamera.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$VR$2f$vrDeviceOrientationGamepadCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/VR/vrDeviceOrientationGamepadCamera.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$VR$2f$vrExperienceHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/VR/vrExperienceHelper.js [app-client] (ecmascript)"); //# sourceMappingURL=index.js.map
;
;
;
;
;
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/RigModes/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$RigModes$2f$stereoscopicAnaglyphRigMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/RigModes/stereoscopicAnaglyphRigMode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$RigModes$2f$stereoscopicRigMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/RigModes/stereoscopicRigMode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$RigModes$2f$vrRigMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/RigModes/vrRigMode.js [app-client] (ecmascript)"); //# sourceMappingURL=index.js.map
;
;
;
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Inputs/geospatialCameraKeyboardInput.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GeospatialCameraKeyboardInput",
    ()=>GeospatialCameraKeyboardInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/decorators.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$cameraInputsManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/cameraInputsManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Events$2f$keyboardEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Events/keyboardEvents.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/tools.js [app-client] (ecmascript)");
;
;
;
;
;
class GeospatialCameraKeyboardInput {
    constructor(){
        /**
         * Defines the list of key codes associated with the up action (pan up)
         */ this.keysUp = [
            38
        ];
        /**
         * Defines the list of key codes associated with the down action (pan down)
         */ this.keysDown = [
            40
        ];
        /**
         * Defines the list of key codes associated with the left action (pan left)
         */ this.keysLeft = [
            37
        ];
        /**
         * Defines the list of key codes associated with the right action (pan right)
         */ this.keysRight = [
            39
        ];
        /**
         * Defines the list of key codes associated with zoom in (+ or =)
         */ this.keysZoomIn = [
            187,
            107
        ]; // 187 = + key, 107 = numpad +
        /**
         * Defines the list of key codes associated with zoom out (-)
         */ this.keysZoomOut = [
            189,
            109
        ]; // 189 = - key, 109 = numpad -
        /**
         * Defines the rotation sensitivity of the inputs.
         * (How many pixels of pointer input to apply per keypress, before rotation speed factor is applied by movement class)
         */ this.rotationSensitivity = 1.0;
        /**
         * Defines the panning sensitivity of the inputs.
         * (How many pixels of pointer input to apply per keypress, before pan speed factor is applied by movement class)
         */ this.panSensitivity = 1.0;
        /**
         * Defines the zooming sensitivity of the inputs.
         * (How many pixels of pointer input to apply per keypress, before zoom speed factor is applied by movement class)
         */ this.zoomSensitivity = 1.0;
        this._keys = new Array();
    }
    /**
     * Attach the input controls to a specific dom element to get the input from.
     * @param noPreventDefault Defines whether event caught by the controls should call preventdefault() (https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)
     */ attachControl(noPreventDefault) {
        // was there a second variable defined?
        noPreventDefault = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tools"].BackCompatCameraNoPreventDefault(arguments);
        if (this._onCanvasBlurObserver) {
            return;
        }
        this._scene = this.camera.getScene();
        this._engine = this._scene.getEngine();
        this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add(()=>{
            this._keys.length = 0;
        });
        this._onKeyboardObserver = this._scene.onKeyboardObservable.add((info)=>{
            const evt = info.event;
            if (!evt.metaKey) {
                if (info.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Events$2f$keyboardEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KeyboardEventTypes"].KEYDOWN) {
                    this._ctrlPressed = evt.ctrlKey;
                    if (this.keysUp.indexOf(evt.keyCode) !== -1 || this.keysDown.indexOf(evt.keyCode) !== -1 || this.keysLeft.indexOf(evt.keyCode) !== -1 || this.keysRight.indexOf(evt.keyCode) !== -1 || this.keysZoomIn.indexOf(evt.keyCode) !== -1 || this.keysZoomOut.indexOf(evt.keyCode) !== -1) {
                        const index = this._keys.indexOf(evt.keyCode);
                        if (index === -1) {
                            this._keys.push(evt.keyCode);
                        }
                        if (evt.preventDefault) {
                            if (!noPreventDefault) {
                                evt.preventDefault();
                            }
                        }
                    }
                } else {
                    if (this.keysUp.indexOf(evt.keyCode) !== -1 || this.keysDown.indexOf(evt.keyCode) !== -1 || this.keysLeft.indexOf(evt.keyCode) !== -1 || this.keysRight.indexOf(evt.keyCode) !== -1 || this.keysZoomIn.indexOf(evt.keyCode) !== -1 || this.keysZoomOut.indexOf(evt.keyCode) !== -1) {
                        const index = this._keys.indexOf(evt.keyCode);
                        if (index >= 0) {
                            this._keys.splice(index, 1);
                        }
                        if (evt.preventDefault) {
                            if (!noPreventDefault) {
                                evt.preventDefault();
                            }
                        }
                    }
                }
            }
        });
    }
    /**
     * Detach the current controls from the specified dom element.
     */ detachControl() {
        if (this._scene) {
            if (this._onKeyboardObserver) {
                this._scene.onKeyboardObservable.remove(this._onKeyboardObserver);
            }
            if (this._onCanvasBlurObserver) {
                this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver);
            }
            this._onKeyboardObserver = null;
            this._onCanvasBlurObserver = null;
        }
        this._keys.length = 0;
    }
    /**
     * Update the current camera state depending on the inputs that have been used this frame.
     * This is a dynamically created lambda to avoid the performance penalty of looping for inputs in the render loop.
     */ checkInputs() {
        if (this._onKeyboardObserver) {
            const camera = this.camera;
            for(let index = 0; index < this._keys.length; index++){
                const keyCode = this._keys[index];
                if (this._ctrlPressed) {
                    // Rotation
                    if (this.keysLeft.indexOf(keyCode) !== -1) {
                        camera.movement.rotationAccumulatedPixels.y -= this.rotationSensitivity;
                    } else if (this.keysRight.indexOf(keyCode) !== -1) {
                        camera.movement.rotationAccumulatedPixels.y += this.rotationSensitivity;
                    } else if (this.keysUp.indexOf(keyCode) !== -1) {
                        camera.movement.rotationAccumulatedPixels.x -= this.rotationSensitivity;
                    } else if (this.keysDown.indexOf(keyCode) !== -1) {
                        camera.movement.rotationAccumulatedPixels.x += this.rotationSensitivity;
                    }
                } else {
                    // Zoom
                    if (this.keysZoomIn.indexOf(keyCode) !== -1) {
                        camera.movement.zoomAccumulatedPixels += this.zoomSensitivity;
                    } else if (this.keysZoomOut.indexOf(keyCode) !== -1) {
                        camera.movement.zoomAccumulatedPixels -= this.zoomSensitivity;
                    } else {
                        // Call into movement class handleDrag so that behavior matches that of pointer input, simulating drag from center of screen
                        const centerX = this._engine.getRenderWidth() / 2;
                        const centerY = this._engine.getRenderHeight() / 2;
                        camera.movement.startDrag(centerX, centerY);
                        if (this.keysLeft.indexOf(keyCode) !== -1) {
                            camera.movement.handleDrag(centerX - this.panSensitivity, centerY);
                        } else if (this.keysRight.indexOf(keyCode) !== -1) {
                            camera.movement.handleDrag(centerX + this.panSensitivity, centerY);
                        } else if (this.keysUp.indexOf(keyCode) !== -1) {
                            camera.movement.handleDrag(centerX, centerY + this.panSensitivity);
                        } else if (this.keysDown.indexOf(keyCode) !== -1) {
                            camera.movement.handleDrag(centerX, centerY - this.panSensitivity);
                        }
                        camera.movement.stopDrag();
                    }
                }
            }
        }
    }
    /**
     * Gets the class name of the current input.
     * @returns the class name
     */ getClassName() {
        return "GeospatialCameraKeyboardInput";
    }
    /**
     * Get the friendly name associated with the input class.
     * @returns the input friendly name
     */ getSimpleName() {
        return "keyboard";
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], GeospatialCameraKeyboardInput.prototype, "keysUp", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], GeospatialCameraKeyboardInput.prototype, "keysDown", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], GeospatialCameraKeyboardInput.prototype, "keysLeft", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], GeospatialCameraKeyboardInput.prototype, "keysRight", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], GeospatialCameraKeyboardInput.prototype, "keysZoomIn", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], GeospatialCameraKeyboardInput.prototype, "keysZoomOut", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], GeospatialCameraKeyboardInput.prototype, "rotationSensitivity", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], GeospatialCameraKeyboardInput.prototype, "panSensitivity", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], GeospatialCameraKeyboardInput.prototype, "zoomSensitivity", void 0);
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$cameraInputsManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CameraInputTypes"]["GeospatialCameraKeyboardInput"] = GeospatialCameraKeyboardInput; //# sourceMappingURL=geospatialCameraKeyboardInput.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/geospatialCameraInputsManager.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GeospatialCameraInputsManager",
    ()=>GeospatialCameraInputsManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$cameraInputsManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/cameraInputsManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$geospatialCameraPointersInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Inputs/geospatialCameraPointersInput.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$geospatialCameraMouseWheelInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Inputs/geospatialCameraMouseWheelInput.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$geospatialCameraKeyboardInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Inputs/geospatialCameraKeyboardInput.js [app-client] (ecmascript)");
;
;
;
;
class GeospatialCameraInputsManager extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$cameraInputsManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CameraInputsManager"] {
    /**
     * Instantiates a new GeospatialCameraInputsManager.
     * @param camera Defines the camera the inputs belong to
     */ constructor(camera){
        super(camera);
    }
    /**
     * Add mouse input support to the input manager
     * @returns the current input manager
     */ addMouse() {
        this.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$geospatialCameraPointersInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GeospatialCameraPointersInput"]());
        return this;
    }
    /**
     * Add mouse wheel input support to the input manager
     * @returns the current input manager
     */ addMouseWheel() {
        this.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$geospatialCameraMouseWheelInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GeospatialCameraMouseWheelInput"]());
        return this;
    }
    /**
     * Add mouse wheel input support to the input manager
     * @returns the current input manager
     */ addKeyboard() {
        this.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$geospatialCameraKeyboardInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GeospatialCameraKeyboardInput"]());
        return this;
    }
} //# sourceMappingURL=geospatialCameraInputsManager.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Limits/geospatialLimits.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GeospatialLimits",
    ()=>GeospatialLimits
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.constants.js [app-client] (ecmascript)");
;
class GeospatialLimits {
    /**
     * @param planetRadius The radius of the planet (used for altitude/radius conversions)
     */ constructor(planetRadius){
        this._altitudeMin = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Epsilon"];
        this._radiusMin = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Epsilon"];
        this._radiusMax = Infinity;
        /** Gets the minimum pitch angle (angle from horizon) -- 0 means looking straight down at planet */ this.pitchMin = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Epsilon"];
        /**  Gets the maximum pitch angle (angle from horizon) -- Pi/1 means looking at horizon */ this.pitchMax = Math.PI / 2;
        /** Gets the minimum yaw angle (rotation around up axis) */ this.yawMin = -Infinity;
        /** Gets the maximum yaw angle (rotation around up axis) */ this.yawMax = Infinity;
        /**
         * Defines the distance used to consider the camera in pan mode vs pinch/zoom.
         * Basically if your fingers moves away from more than this distance you will be considered
         * in pinch mode.
         */ this.pinchToPanMax = 20;
        this._planetRadius = planetRadius;
    }
    /**
     * Gets the minimum altitude (height above planet surface)
     */ get altitudeMin() {
        return this._altitudeMin;
    }
    /**
     * Sets the minimum altitude and syncs it with radius
     */ set altitudeMin(value) {
        this._altitudeMin = value;
        this._radiusMin = this._planetRadius + value;
    }
    /**
     * Gets the maximum altitude (height above planet surface)
     */ get altitudeMax() {
        return this._altitudeMax;
    }
    /**
     * Sets the maximum altitude and syncs it with radius
     */ set altitudeMax(value) {
        this._altitudeMax = value;
        this._radiusMax = this._planetRadius + value;
    }
    get radiusMin() {
        return this._radiusMin;
    }
    /**
     * Sets the minimum radius and syncs it with altitude
     */ set radiusMin(value) {
        this._radiusMin = value;
        this._altitudeMin = value - this._planetRadius;
    }
    get radiusMax() {
        return this._radiusMax;
    }
    /**
     * Sets the maximum radius and syncs it with altitude
     */ set radiusMax(value) {
        this._radiusMax = value;
        this._altitudeMax = value - this._planetRadius;
    }
    /**
     * Gets the planet radius used for altitude/radius conversions
     */ get planetRadius() {
        return this._planetRadius;
    }
    /** Sets the planet radius and updates the radius limits to maintain current altitude */ set planetRadius(value) {
        this._planetRadius = value;
        // Update radius limits to maintain current altitude
        this._radiusMin = value + this._altitudeMin;
        this._radiusMax = value + this._altitudeMax;
    }
} //# sourceMappingURL=geospatialLimits.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/cameraMovement.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CameraMovement",
    ()=>CameraMovement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.constants.js [app-client] (ecmascript)");
;
;
const FrameDurationAt60FPS = 1000 / 60;
class CameraMovement {
    constructor(scene, _cameraPosition, _behavior){
        this._cameraPosition = _cameraPosition;
        this._behavior = _behavior;
        /**
         * Should be set by input classes to indicates whether there is active input this frame
         * This helps us differentiate between 0 pixel delta due to no input vs user actively holding still
         */ this.activeInput = false;
        /**
         * ------------ Speed ----------------
         * Speed defines the amount of camera movement expected per input pixel movement
         * -----------------------------------
         */ /**
         * Desired coordinate unit movement per input pixel when zooming
         */ this.zoomSpeed = 1;
        /**
         * Desired coordinate unit movement per input pixel when panning
         */ this.panSpeed = 1;
        /**
         * Desired radians movement per input pixel when rotating along x axis
         */ this.rotationXSpeed = 1;
        /**
         * Desired radians movement per input pixel when rotating along y axis
         */ this.rotationYSpeed = 1;
        /**
         * ----------- Speed multipliers ---------------
         * Multipliers allow movement classes to modify the effective speed dynamically per-frame
         * (ex: scale zoom based on distance from target)
         * -----------------------------------
         */ /**
         * Multiplied atop zoom speed. Used to dynamically adjust zoom speed based on per-frame context (ex: zoom faster when further from target)
         */ this._zoomSpeedMultiplier = 1;
        /**
         * Multiplied atop pan speed. Used to dynamically adjust pan speed based on per-frame context (ex: pan slowly when close to target)
         */ this._panSpeedMultiplier = 1;
        /**
         * ---------- Inertia ----------------
         * Inertia represents the decay factor per-frame applied to the velocity when there is no user input.
         * 0 = No inertia, instant stop (velocity immediately becomes 0)
         * 0.5 = Strong decay, velocity halves every frame at 60fps
         * 0.9 = Moderate inertia, velocity retains 90% per frame at 60fps
         * 0.95 = High inertia, smooth glide, velocity retains 95% per frame at 60fps
         * 1 = Infinite inertia, never stops (velocity never decays)
         * -----------------------------------
         */ /**
         * Inertia applied to the zoom velocity when there is no user input.
         * Higher inertia === slower decay, velocity retains more of its value each frame
         */ this.zoomInertia = 0.9;
        /**
         * Inertia applied to the panning velocity when there is no user input.
         * Higher inertia === slower decay, velocity retains more of its value each frame
         */ this.panInertia = 0.9;
        /**
         * Inertia applied to the rotation velocity when there is no user input.
         * Higher inertia === slower decay, velocity retains more of its value each frame
         */ this.rotationInertia = 0.9;
        /**
         * ---------- Accumulated Pixel Deltas -----------
         * Pixel inputs accumulated throughout the frame by input classes (reset each frame after processing)
         * -----------------------------------
         */ /**
         * Accumulated pixel delta (by input classes) for zoom this frame
         * Read by computeCurrentFrameDeltas() function and converted into currentFrameTranslationDelta (taking speed into account)
         * Reset to zero after each frame
         */ this.zoomAccumulatedPixels = 0;
        /**
         * Accumulated pixel delta (by input classes) for panning this frame
         * Read by computeCurrentFrameDeltas() function and converted into currentFrameTranslationDelta (taking speed into account)
         * Reset to zero after each frame
         */ this.panAccumulatedPixels = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
        /**
         * Accumulated pixel delta (by input classes) for rotation this frame
         * Read by computeCurrentFrameDeltas() function and converted into currentFrameTranslationDelta (taking speed into account)
         * Reset to zero after each frame
         */ this.rotationAccumulatedPixels = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
        /**
         * ---------- Current Frame Movement Deltas -----------
         * Deltas read on each frame by camera class in order to move the camera
         * -----------------------------------
         */ /**
         * Zoom delta to apply to camera this frame, computed by computeCurrentFrameDeltas() from zoomPixelDelta (taking speed into account)
         */ this.zoomDeltaCurrentFrame = 0;
        /**
         * Pan delta to apply to camera this frame, computed by computeCurrentFrameDeltas() from panPixelDelta (taking speed into account)
         */ this.panDeltaCurrentFrame = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        /**
         * Rotation delta to apply to camera this frame, computed by computeCurrentFrameDeltas() from rotationPixelDelta (taking speed into account)
         */ this.rotationDeltaCurrentFrame = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        /**
         * ---------- Velocity -----------
         * Used to track velocity between frames for inertia calculation
         * -----------------------------------
         */ /**
         * Zoom velocity used for inertia calculations (movement / time)
         */ this._zoomVelocity = 0;
        /**
         * Pan velocity used for inertia calculations (movement / time)
         */ this._panVelocity = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
        /**
         * Rotation velocity used for inertia calculations (movement / time)
         */ this._rotationVelocity = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
        /**
         * Used when calculating inertial decay. Default to 60fps
         */ this._prevFrameTimeMs = FrameDurationAt60FPS;
        this._scene = scene;
    }
    /**
     * When called, will take the accumulated pixel deltas set by input classes and convert them into current frame deltas, stored in currentFrameMovementDelta properties
     * Takes speed, scaling, inertia, and framerate into account to ensure smooth movement
     * Zeros out pixelDeltas before returning
     */ computeCurrentFrameDeltas() {
        const deltaTimeMs = this._scene.getEngine().getDeltaTime();
        this.panDeltaCurrentFrame.setAll(0);
        this.rotationDeltaCurrentFrame.setAll(0);
        this.zoomDeltaCurrentFrame = 0;
        const hasUserInput = this.panAccumulatedPixels.lengthSquared() > 0 || this.rotationAccumulatedPixels.lengthSquared() > 0 || this.zoomAccumulatedPixels !== 0;
        if (hasUserInput && this._behavior?.isInterpolating) {
            this._behavior.stopAllAnimations();
        }
        this._panVelocity.copyFromFloats(this._calculateCurrentVelocity(this._panVelocity.x, this.panAccumulatedPixels.x, this.panSpeed * this._panSpeedMultiplier, this.panInertia), this._calculateCurrentVelocity(this._panVelocity.y, this.panAccumulatedPixels.y, this.panSpeed * this._panSpeedMultiplier, this.panInertia), this._calculateCurrentVelocity(this._panVelocity.z, this.panAccumulatedPixels.z, this.panSpeed * this._panSpeedMultiplier, this.panInertia));
        this._panVelocity.scaleToRef(deltaTimeMs, this.panDeltaCurrentFrame);
        this._rotationVelocity.copyFromFloats(this._calculateCurrentVelocity(this._rotationVelocity.x, this.rotationAccumulatedPixels.x, this.rotationXSpeed, this.rotationInertia), this._calculateCurrentVelocity(this._rotationVelocity.y, this.rotationAccumulatedPixels.y, this.rotationYSpeed, this.rotationInertia), this._calculateCurrentVelocity(this._rotationVelocity.z, this.rotationAccumulatedPixels.z, this.rotationYSpeed, this.rotationInertia));
        this._rotationVelocity.scaleToRef(deltaTimeMs, this.rotationDeltaCurrentFrame);
        this._zoomVelocity = this._calculateCurrentVelocity(this._zoomVelocity, this.zoomAccumulatedPixels, this.zoomSpeed * this._zoomSpeedMultiplier, this.zoomInertia);
        this.zoomDeltaCurrentFrame = this._zoomVelocity * deltaTimeMs;
        this._prevFrameTimeMs = deltaTimeMs;
        this.zoomAccumulatedPixels = 0;
        this.panAccumulatedPixels.setAll(0);
        this.rotationAccumulatedPixels.setAll(0);
    }
    get isInterpolating() {
        return !!this._behavior?.isInterpolating;
    }
    _calculateCurrentVelocity(velocityRef, pixelDelta, speedFactor, inertialDecayFactor) {
        let inputVelocity = velocityRef;
        const deltaTimeMs = this._scene.getEngine().getDeltaTime();
        // If we are actively recieving input or have accumulated some pixel delta since last frame, calculate inputVelocity (inertia doesn't kickin yet)
        if (pixelDelta !== 0 || this.activeInput) {
            const pixelsPerMs = pixelDelta / deltaTimeMs;
            inputVelocity = pixelsPerMs * speedFactor;
        } else if (!this.activeInput && inputVelocity !== 0) {
            // If we are not receiving input and velocity isn't already zero, apply inertial decay to decelerate velocity
            const frameIndependentDecay = Math.pow(inertialDecayFactor, this._prevFrameTimeMs / FrameDurationAt60FPS);
            inputVelocity *= frameIndependentDecay;
            if (Math.abs(inputVelocity) <= __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Epsilon"]) {
                inputVelocity = 0;
            }
        }
        return inputVelocity;
    }
} //# sourceMappingURL=cameraMovement.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/geospatialCameraMovement.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ClampCenterFromPolesInPlace",
    ()=>ClampCenterFromPolesInPlace,
    "ComputeLocalBasisToRefs",
    ()=>ComputeLocalBasisToRefs,
    "GeospatialCameraMovement",
    ()=>GeospatialCameraMovement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$cameraMovement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/cameraMovement.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$plane$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.plane.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$ray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Culling/ray.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$ray$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Culling/ray.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.functions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.scalar.functions.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
class GeospatialCameraMovement extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$cameraMovement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CameraMovement"] {
    constructor(scene, limits, cameraPosition, _cameraCenter, _cameraLookAt, pickPredicate, behavior){
        super(scene, cameraPosition, behavior);
        this.limits = limits;
        this._cameraCenter = _cameraCenter;
        this._cameraLookAt = _cameraLookAt;
        this.zoomToCursor = true;
        this._hitPointRadius = undefined;
        this._dragPlane = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$plane$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Plane"](0, 0, 0, 0);
        this._dragPlaneNormal = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        this._dragPlaneOriginPointEcef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        this._dragPlaneHitPointLocal = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        this._previousDragPlaneHitPointLocal = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        this.pickPredicate = pickPredicate;
        this._tempPickingRay = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$ray$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ray"](this._cameraPosition, this._cameraLookAt);
        this.panInertia = 0;
        this.rotationInertia = 0;
        this.rotationXSpeed = Math.PI / 500; // Move 1/500th of a half circle per pixel
        this.rotationYSpeed = Math.PI / 500; // Move 1/500th of a half circle per pixel
    }
    startDrag(pointerX, pointerY) {
        const pickResult = this._scene.pick(pointerX, pointerY, this.pickPredicate);
        if (pickResult.pickedPoint && pickResult.ray) {
            // Store radius from earth center to pickedPoint, used when calculating drag plane
            this._hitPointRadius = pickResult.pickedPoint.length();
            this._recalculateDragPlaneHitPoint(this._hitPointRadius, pickResult.ray, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[0]);
            this._previousDragPlaneHitPointLocal.copyFrom(this._dragPlaneHitPointLocal);
        } else {
            this._hitPointRadius = undefined; // can't drag without a hit on the globe
        }
    }
    stopDrag() {
        this._hitPointRadius = undefined;
    }
    /**
     * The previous drag plane hit point in local space is stored to compute the movement delta.
     * As the drag movement occurs, we will continuously recalculate this point. The delta between the previous and current hit points is the delta we will apply to the camera's localtranslation
     * @param hitPointRadius The distance between the world origin (center of globe) and the initial drag hit point
     * @param ray The ray from the camera to the new cursor location
     * @param localToEcefResult The matrix to convert from local to ECEF space
     */ _recalculateDragPlaneHitPoint(hitPointRadius, ray, localToEcefResult) {
        // Use the camera's geocentric normal to find the dragPlaneOriginPoint which lives at hitPointRadius along the camera's geocentric normal
        this._cameraPosition.normalizeToRef(this._dragPlaneNormal);
        this._dragPlaneNormal.scaleToRef(hitPointRadius, this._dragPlaneOriginPointEcef);
        // The dragPlaneOffsetVector will later be recalculated when drag occurs, and the delta between the offset vectors will be applied to localTranslation
        ComputeLocalBasisToRefs(this._dragPlaneOriginPointEcef, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[1], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[2]);
        const localToEcef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].FromXYZAxesToRef(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[1], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[2], localToEcefResult);
        localToEcef.setTranslationFromFloats(this._dragPlaneOriginPointEcef.x, this._dragPlaneOriginPointEcef.y, this._dragPlaneOriginPointEcef.z);
        const ecefToLocal = localToEcef.invertToRef(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[1]);
        // Now create a plane at that point, perpendicular to the camera's geocentric normal
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$plane$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Plane"].FromPositionAndNormalToRef(this._dragPlaneOriginPointEcef, this._dragPlaneNormal, this._dragPlane);
        // Lastly, find the _dragPlaneHitPoint where the ray intersects the _dragPlane.
        if (IntersectRayWithPlaneToRef(ray, this._dragPlane, this._dragPlaneHitPointLocal)) {
            // If hit, convert the drag plane hit point into the local space.
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinatesToRef(this._dragPlaneHitPointLocal, ecefToLocal, this._dragPlaneHitPointLocal);
        }
    }
    handleDrag(pointerX, pointerY) {
        if (this._hitPointRadius) {
            const pickResult = this._scene.pick(pointerX, pointerY);
            if (pickResult.ray) {
                const localToEcef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[0];
                this._recalculateDragPlaneHitPoint(this._hitPointRadius, pickResult.ray, localToEcef);
                const delta = this._dragPlaneHitPointLocal.subtractToRef(this._previousDragPlaneHitPointLocal, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[6]);
                this._previousDragPlaneHitPointLocal.copyFrom(this._dragPlaneHitPointLocal);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].TransformNormalToRef(delta, localToEcef, delta);
                this._dragPlaneOriginPointEcef.addInPlace(delta);
                this.panAccumulatedPixels.subtractInPlace(delta);
            }
        }
    }
    /** @override */ computeCurrentFrameDeltas() {
        const cameraCenter = this._cameraCenter;
        // Slows down panning near the poles
        if (this.panAccumulatedPixels.lengthSquared() > __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Epsilon"]) {
            const centerRadius = cameraCenter.length(); // distance from planet origin to camera center
            const currentRadius = this._cameraPosition.length();
            // Dampen the pan speed based on latitude (slower near poles)
            const sineOfSphericalLat = centerRadius === 0 ? 0 : cameraCenter.z / centerRadius;
            const cosOfSphericalLat = Math.sqrt(1 - Math.min(1, sineOfSphericalLat * sineOfSphericalLat));
            const latitudeDampening = Math.sqrt(Math.abs(cosOfSphericalLat)); // sqrt here reduces effect near equator
            // Reduce the dampening effect near surface (so that at ground level, pan speed is not affected by latitude)
            const height = Math.max(currentRadius - centerRadius, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Epsilon"]);
            const latitudeDampeningScale = Math.max(1, centerRadius / height);
            this._panSpeedMultiplier = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Clamp"])(latitudeDampeningScale * latitudeDampening, 0, 1);
        } else {
            this._panSpeedMultiplier = 1;
        }
        // If a pan drag is occurring, stop zooming.
        if (this.isDragging) {
            this._zoomSpeedMultiplier = 0;
            this._zoomVelocity = 0;
        } else {
            // Scales zoom movement speed based on camera distance to origin (so long as no active pan is occurring)
            this._zoomSpeedMultiplier = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3Distance"])(this._cameraPosition, cameraCenter) * 0.01;
        }
        // Before zero-ing out pixel deltas, capture if we have any active zoom in this frame (compared to zoom from inertia)
        const activeZoom = Math.abs(this.zoomAccumulatedPixels) > 0;
        super.computeCurrentFrameDeltas();
        this._handleZoom(activeZoom);
    }
    get isDragging() {
        return this._hitPointRadius !== undefined;
    }
    _handleZoom(activeZoom) {
        if (Math.abs(this.zoomDeltaCurrentFrame) > __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Epsilon"]) {
            let pickDistance;
            if (!activeZoom) {
                // During inertia, use the previously stored pick distance
                // TODO fix this to work with raycasting
                pickDistance = this._storedZoomPickDistance;
            } else {
                // Active zoom - pick and store the distance
                const pickResult = this._scene.pick(this._scene.pointerX, this._scene.pointerY, this.pickPredicate);
                if (pickResult.hit && pickResult.pickedPoint && pickResult.ray && this.zoomToCursor) {
                    // Store both the zoom picked point and the pick distance for use during inertia
                    pickDistance = pickResult.distance;
                    this._storedZoomPickDistance = pickDistance;
                    this.computedPerFrameZoomPickPoint = pickResult.pickedPoint;
                } else {
                    // If no hit under cursor, zoom along lookVector instead
                    const lookPickResult = this.pickAlongVector(this._cameraLookAt);
                    pickDistance = lookPickResult?.distance;
                    this._storedZoomPickDistance = pickDistance;
                    this.computedPerFrameZoomPickPoint = undefined;
                }
            }
            // Clamp distance based on limits and update center
            this._clampZoomDistance(this.zoomDeltaCurrentFrame, pickDistance);
        }
    }
    _clampZoomDistance(requestedDistance, pickResultDistance) {
        // If pickResult is defined
        if (requestedDistance > 0) {
            if (pickResultDistance !== undefined) {
                // If there is a pick, allow movement up to pick - minAltitude
                if (pickResultDistance - this.limits.altitudeMin < 0) {
                    this.zoomDeltaCurrentFrame = 0;
                }
                this.zoomDeltaCurrentFrame = Math.min(requestedDistance, pickResultDistance - this.limits.altitudeMin);
            } else {
                this.zoomDeltaCurrentFrame = requestedDistance;
            }
        }
        if (requestedDistance < 0) {
            const maxZoomOut = this.limits.radiusMax ? this.limits.radiusMax - this._cameraPosition.length() : Number.POSITIVE_INFINITY;
            this.zoomDeltaCurrentFrame = Math.max(requestedDistance, -maxZoomOut);
        }
        return this.zoomDeltaCurrentFrame;
    }
    pickAlongVector(vector) {
        this._tempPickingRay.origin.copyFrom(this._cameraPosition);
        this._tempPickingRay.direction.copyFrom(vector);
        return this._scene.pickWithRay(this._tempPickingRay, this.pickPredicate);
    }
}
function ClampCenterFromPolesInPlace(center) {
    const sineOfSphericalLatitudeLimit = 0.998749218; // ~90 degrees
    const centerMagnitude = center.length(); // distance from planet origin
    if (centerMagnitude > __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Epsilon"]) {
        const sineSphericalLat = centerMagnitude === 0 ? 0 : center.z / centerMagnitude;
        if (Math.abs(sineSphericalLat) > sineOfSphericalLatitudeLimit) {
            // Clamp the spherical latitude (and derive longitude)
            const sineOfClampedSphericalLat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Clamp"])(sineSphericalLat, -sineOfSphericalLatitudeLimit, sineOfSphericalLatitudeLimit);
            const cosineOfClampedSphericalLat = Math.sqrt(1 - sineOfClampedSphericalLat * sineOfClampedSphericalLat);
            const longitude = Math.atan2(center.y, center.x);
            // Spherical to Cartesian
            const newX = centerMagnitude * Math.cos(longitude) * cosineOfClampedSphericalLat;
            const newY = centerMagnitude * Math.sin(longitude) * cosineOfClampedSphericalLat;
            const newZ = centerMagnitude * sineOfClampedSphericalLat;
            center.set(newX, newY, newZ);
        }
    }
    return center;
}
function IntersectRayWithPlaneToRef(ray, plane, ref) {
    // Distance along the ray to the plane; null if no hit
    const dist = ray.intersectsPlane(plane);
    if (dist !== null && dist >= 0) {
        ray.origin.addToRef(ray.direction.scaleToRef(dist, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0]), ref);
        return true;
    }
    return false;
}
function ComputeLocalBasisToRefs(worldPos, refEast, refNorth, refUp) {
    // up = normalized position (geocentric normal)
    refUp.copyFrom(worldPos).normalize();
    // east = normalize(worldNorth × up)
    // (cross product of Earth rotation axis with up gives east except near poles)
    const worldNorth = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].LeftHandedForwardReadOnly; // (0,0,1)
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].CrossToRef(worldNorth, refUp, refEast);
    // at poles, cross with worldRight instead
    if (refEast.lengthSquared() < __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Epsilon"]) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].CrossToRef(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Right(), refUp, refEast);
    }
    refEast.normalize();
    // north = up × east (completes right-handed basis)
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].CrossToRef(refUp, refEast, refNorth);
    refNorth.normalize();
} //# sourceMappingURL=geospatialCameraMovement.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/geospatialCamera.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GeospatialCamera",
    ()=>GeospatialCamera
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$geospatialCameraInputsManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/geospatialCameraInputsManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/camera.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Limits$2f$geospatialLimits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Limits/geospatialLimits.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$geospatialCameraMovement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/geospatialCameraMovement.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.functions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.scalar.functions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Behaviors$2f$Cameras$2f$interpolatingBehavior$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Behaviors/Cameras/interpolatingBehavior.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
class GeospatialCamera extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Camera"] {
    constructor(name, scene, options, pickPredicate){
        super(name, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](), scene);
        // Temp vars
        this._tempPosition = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
        this._tempCenter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
        this._viewMatrix = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"]();
        this._lookAtVector = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
        this._flyToTargets = new Map();
        this._center = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
        this._yaw = 0;
        this._pitch = 0;
        this._radius = 0;
        this._tempVect = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
        this._tempEast = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
        this._tempNorth = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
        this._tempUp = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
        this._limits = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Limits$2f$geospatialLimits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GeospatialLimits"](options.planetRadius);
        this._resetToDefault(this._limits);
        this._flyingBehavior = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Behaviors$2f$Cameras$2f$interpolatingBehavior$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InterpolatingBehavior"]();
        this.addBehavior(this._flyingBehavior);
        this.movement = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$geospatialCameraMovement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GeospatialCameraMovement"](scene, this._limits, this.position, this.center, this._lookAtVector, pickPredicate, this._flyingBehavior);
        this.pickPredicate = pickPredicate;
        this.inputs = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$geospatialCameraInputsManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GeospatialCameraInputsManager"](this);
        this.inputs.addMouse().addMouseWheel().addKeyboard();
    }
    /** The point on the globe that we are anchoring around. If no alternate rotation point is supplied, this will represent the center of screen*/ get center() {
        return this._center;
    }
    /**
     * Sets the camera position to orbit around a new center point
     * @param center The world position (ECEF) to orbit around
     */ set center(center) {
        this._center.copyFromFloats(center.x, center.y, center.z);
        this._setOrientation(this._yaw, this._pitch, this._radius, this._center);
    }
    /**
     * Gets the camera's yaw (rotation around the geocentric normal) in radians
     */ get yaw() {
        return this._yaw;
    }
    /**
     * Sets the camera's yaw (rotation around the geocentric normal)
     * @param yaw The desired yaw angle in radians (0 = north, π/2 = east)
     */ set yaw(yaw) {
        this._setOrientation(yaw, this.pitch, this.radius, this.center);
    }
    /**
     * Gets the camera's pitch (angle from looking straight at globe)
     * Pitch is measured from looking straight down at planet center:
     * - zero pitch = looking straight at planet center (down)
     * - positive pitch = tilting up away from planet
     * - π/2 pitch = looking at horizon (perpendicular to geocentric normal)
     */ get pitch() {
        return this._pitch;
    }
    /**
     * Sets the camera's pitch (angle from looking straight at globe)
     * @param pitch The desired pitch angle in radians (0 = looking at planet center, π/2 = looking at horizon)
     */ set pitch(pitch) {
        this._setOrientation(this.yaw, pitch, this.radius, this.center);
    }
    get radius() {
        return this._radius;
    }
    /**
     * Sets the camera's distance from the current center point
     * @param radius The desired radius
     */ set radius(radius) {
        this._setOrientation(this.yaw, this.pitch, radius, this.center);
    }
    _checkLimits() {
        const limits = this.limits;
        this._yaw = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Clamp"])(this._yaw, limits.yawMin, limits.yawMax);
        this._pitch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Clamp"])(this._pitch, limits.pitchMin, limits.pitchMax);
        this._radius = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Clamp"])(this._radius, limits.radiusMin, limits.radiusMax);
        this._center = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$geospatialCameraMovement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClampCenterFromPolesInPlace"])(this._center);
    }
    _setOrientation(yaw, pitch, radius, center) {
        this._yaw = yaw;
        this._pitch = pitch;
        this._radius = radius;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3CopyToRef"])(center, this._center);
        // Clamp to limits
        this._checkLimits();
        // Refresh local basis at center (treat these as read-only for the whole call)
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$geospatialCameraMovement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComputeLocalBasisToRefs"])(this._center, this._tempEast, this._tempNorth, this._tempUp);
        // Trig
        const yawScale = this._scene.useRightHandedSystem ? 1 : -1;
        const cosYaw = Math.cos(this._yaw * yawScale);
        const sinYaw = Math.sin(this._yaw * yawScale);
        const sinPitch = Math.sin(this._pitch); // horizontal weight
        const cosPitch = Math.cos(this._pitch); // vertical weight (toward center)
        // Temps
        const horiz = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0];
        const t1 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[1];
        const t2 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[2];
        const right = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[3];
        // horizontalDirection = North*cosYaw + East*sinYaw  (avoids mutating _temp basis vectors)
        horiz.copyFrom(this._tempNorth).scaleInPlace(cosYaw).addInPlace(t1.copyFrom(this._tempEast).scaleInPlace(sinYaw));
        // look = horiz*sinPitch - Up*cosPitch
        this._lookAtVector.copyFrom(horiz).scaleInPlace(sinPitch).addInPlace(t2.copyFrom(this._tempUp).scaleInPlace(-cosPitch)).normalize(); // keep it unit
        // Build an orthonormal up aligned with geocentric Up
        // right = normalize(cross(upRef, look))
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].CrossToRef(this._tempUp, this._lookAtVector, right);
        // up = normalize(cross(look, right))
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].CrossToRef(this._lookAtVector, right, this.upVector);
        // Position = center - look * radius  (preserve unit look)
        this._tempVect.copyFrom(this._lookAtVector).scaleInPlace(-this._radius);
        this._tempPosition.copyFrom(this._center).addInPlace(this._tempVect);
        this._position.copyFrom(this._tempPosition);
        this._isViewMatrixDirty = true;
    }
    /** The point around which the camera will geocentrically rotate. Uses center (pt we are anchored to) if no alternateRotationPt is defined */ get _geocentricRotationPt() {
        return this.movement.alternateRotationPt ?? this.center;
    }
    /**
     * If camera is actively in flight, will update the target properties and use up the remaining duration from original flyTo call
     *
     * To start a new flyTo curve entirely, call into flyToAsync again (it will stop the inflight animation)
     * @param targetYaw
     * @param targetPitch
     * @param targetRadius
     * @param targetCenter
     */ updateFlyToDestination(targetYaw, targetPitch, targetRadius, targetCenter) {
        this._flyToTargets.clear();
        this._flyToTargets.set("yaw", targetYaw);
        this._flyToTargets.set("pitch", targetPitch);
        this._flyToTargets.set("radius", targetRadius);
        this._flyToTargets.set("center", targetCenter);
        this._flyingBehavior.updateProperties(this._flyToTargets);
    }
    /**
     * Animate camera towards passed in property values. If undefined, will use current value
     * @param targetYaw
     * @param targetPitch
     * @param targetRadius
     * @param targetCenter
     * @param flightDurationMs
     * @param easingFunction
     * @param centerHopScale If supplied, will define the parabolic hop height scale for center animation to create a "bounce" effect
     * @returns Promise that will return when the animation is complete (or interuppted by pointer input)
     */ async flyToAsync(targetYaw, targetPitch, targetRadius, targetCenter, flightDurationMs = 1000, easingFunction, centerHopScale) {
        this._flyToTargets.clear();
        this._flyToTargets.set("yaw", targetYaw);
        this._flyToTargets.set("pitch", targetPitch);
        this._flyToTargets.set("radius", targetRadius);
        this._flyToTargets.set("center", targetCenter);
        let overrideAnimationFunction;
        if (targetCenter !== undefined && !targetCenter.equals(this.center)) {
            // Animate center directly with custom interpolation
            const start = this.center.clone();
            const end = targetCenter.clone();
            overrideAnimationFunction = (key, animation)=>{
                if (key === "center") {
                    // Override the Vector3 interpolation to use SLERP + hop
                    animation.vector3InterpolateFunction = (startValue, endValue, gradient)=>{
                        // gradient is the eased value (0 to 1) after easing function is applied
                        // Slerp between start and end
                        const newCenter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].SlerpToRef(start, end, gradient, this._tempCenter);
                        // Apply parabolic hop if requested
                        if (centerHopScale && centerHopScale > 0) {
                            // Parabolic formula: peaks at t=0.5, returns to 0 at gradient=0 and gradient=1
                            // if hopPeakT = .5 the denominator would be hopPeakT * hopPeakT - hopPeakT, which = -.25
                            const hopPeakOffset = centerHopScale * (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3Distance"])(start, end);
                            const hopOffset = hopPeakOffset * (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Clamp"])((gradient * gradient - gradient) / -0.25);
                            // Scale the center outward (away from origin)
                            newCenter.scaleInPlace(1 + hopOffset / newCenter.length());
                        }
                        return newCenter;
                    };
                }
            };
        }
        return await this._flyingBehavior.animatePropertiesAsync(this._flyToTargets, flightDurationMs, easingFunction, overrideAnimationFunction);
    }
    /**
     * Helper function to move camera towards a given point by radiusScale% of radius (by default 50%)
     * @param destination point to move towards
     * @param radiusScale value between 0 and 1, % of radius to move
     * @param durationMs duration of flight, default 1s
     * @param easingFn optional easing function for flight interpolation of properties
     * @param overshootRadiusScale optional scale to apply to the current radius to achieve a 'hop' animation
     */ async flyToPointAsync(destination, radiusScale = 0.5, durationMs = 1000, easingFn, overshootRadiusScale) {
        // Zoom to radiusScale% of radius towards the given destination point
        const zoomDistance = this.radius * radiusScale;
        const newRadius = this._getCenterAndRadiusFromZoomToPoint(destination, zoomDistance, this._tempCenter);
        await this.flyToAsync(undefined, undefined, newRadius, this._tempCenter, durationMs, easingFn, overshootRadiusScale);
    }
    get limits() {
        return this._limits;
    }
    _resetToDefault(limits) {
        // Camera configuration vars
        const maxCameraRadius = limits.altitudeMax !== undefined ? limits.planetRadius + limits.altitudeMax : undefined;
        const restingAltitude = maxCameraRadius ?? limits.planetRadius * 4;
        this.position.copyFromFloats(restingAltitude, 0, 0);
        this._center.copyFromFloats(limits.planetRadius, 0, 0);
        this._radius = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Distance(this.position, this.center);
        // Temp vars
        this._tempPosition = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
        // View matrix calculation vars
        this._viewMatrix = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].Identity();
        this._center.subtractToRef(this._position, this._lookAtVector).normalize(); // Lookat vector of the camera
        this.upVector = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Up(); // Up vector of the camera (does work for -X look at)
        this._isViewMatrixDirty = true;
        this._setOrientation(this._yaw, this._pitch, this._radius, this._center);
    }
    /** @internal */ _getViewMatrix() {
        if (!this._isViewMatrixDirty) {
            return this._viewMatrix;
        }
        this._isViewMatrixDirty = false;
        // Ensure vectors are normalized
        this.upVector.normalize();
        this._lookAtVector.normalize();
        // Calculate view matrix with camera position and center
        if (this.getScene().useRightHandedSystem) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].LookAtRHToRef(this.position, this._center, this.upVector, this._viewMatrix);
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].LookAtLHToRef(this.position, this._center, this.upVector, this._viewMatrix);
        }
        return this._viewMatrix;
    }
    /** @internal */ _isSynchronizedViewMatrix() {
        if (!super._isSynchronizedViewMatrix() || this._isViewMatrixDirty) {
            return false;
        }
        return true;
    }
    _applyGeocentricTranslation() {
        // Store pending position (without any corrections applied)
        this.center.addToRef(this.movement.panDeltaCurrentFrame, this._tempPosition);
        if (!this.movement.isInterpolating) {
            // Calculate the position correction to keep camera at the same radius when applying translation
            this._tempPosition.normalize().scaleInPlace(this.center.length());
        }
        // Set center which will call _setOrientation
        this.center = this._tempPosition;
    }
    /**
     * This rotation keeps the camera oriented towards the globe as it orbits around it. This is different from cameraCentricRotation which is when the camera rotates around its own axis
     */ _applyGeocentricRotation() {
        const rotationDeltaCurrentFrame = this.movement.rotationDeltaCurrentFrame;
        if (rotationDeltaCurrentFrame.x !== 0 || rotationDeltaCurrentFrame.y !== 0) {
            const pitch = rotationDeltaCurrentFrame.x !== 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Clamp"])(this._pitch + rotationDeltaCurrentFrame.x, 0, 0.5 * Math.PI - __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Epsilon"]) : this._pitch;
            const yaw = rotationDeltaCurrentFrame.y !== 0 ? this._yaw + rotationDeltaCurrentFrame.y : this._yaw;
            // TODO: If _geocentricRotationPt is not the center, this will need to be adjusted.
            this._setOrientation(yaw, pitch, this._radius, this._geocentricRotationPt);
        }
    }
    _getCenterAndRadiusFromZoomToPoint(targetPoint, distance, newCenter) {
        // Clamp new radius to limits
        const requestedRadius = this._radius - distance;
        const newRadius = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Clamp"])(requestedRadius, this.limits.radiusMin, this.limits.radiusMax);
        const actualDistance = this._radius - newRadius;
        const actualRatio = actualDistance / this._radius;
        // Direction from current center to target point
        const directionToTarget = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0];
        targetPoint.subtractToRef(this._center, directionToTarget);
        // Move center toward target by the ratio amount
        const centerOffset = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[1];
        directionToTarget.scaleToRef(actualRatio, centerOffset);
        // Calculate new center
        this._center.addToRef(centerOffset, newCenter);
        // Preserve center altitude (distance from planet origin)
        const currentCenterRadius = this._center.length();
        const newCenterRadius = newCenter.length();
        if (newCenterRadius > __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Epsilon"]) {
            newCenter.scaleInPlace(currentCenterRadius / newCenterRadius);
        }
        return newRadius;
    }
    /**
     * Apply zoom by moving the camera toward/away from a target point.
     */ _applyZoom() {
        const zoomDelta = this.movement.zoomDeltaCurrentFrame;
        const pickedPoint = this.movement.computedPerFrameZoomPickPoint;
        if (pickedPoint) {
            // Zoom toward the picked point under cursor
            this._zoomToPoint(pickedPoint, zoomDelta);
        } else {
            // Zoom along lookAt vector (fallback when no surface under cursor)
            this._zoomAlongLookAt(zoomDelta);
        }
    }
    _zoomToPoint(targetPoint, distance) {
        const newRadius = this._getCenterAndRadiusFromZoomToPoint(targetPoint, distance, this._tempCenter);
        // Apply the new orientation
        this._setOrientation(this._yaw, this._pitch, newRadius, this._tempCenter);
    }
    _zoomAlongLookAt(distance) {
        // Clamp radius to limits
        const requestedRadius = this._radius - distance;
        const newRadius = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Clamp"])(requestedRadius, this.limits.radiusMin, this.limits.radiusMax);
        // Simply change radius without moving center
        this._setOrientation(this._yaw, this._pitch, newRadius, this._center);
    }
    _checkInputs() {
        this.inputs.checkInputs();
        // Let movement class handle all per-frame logic
        this.movement.computeCurrentFrameDeltas();
        let recalculateCenter = false;
        if (this.movement.panDeltaCurrentFrame.lengthSquared() > 0) {
            this._applyGeocentricTranslation();
            recalculateCenter = true;
        }
        if (this.movement.rotationDeltaCurrentFrame.lengthSquared() > 0) {
            this._applyGeocentricRotation();
        }
        if (Math.abs(this.movement.zoomDeltaCurrentFrame) > __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Epsilon"]) {
            this._applyZoom();
            recalculateCenter = true;
        }
        // After a movement impacting center or radius, recalculate the center point to ensure it's still on the surface.
        recalculateCenter && this._recalculateCenter();
        super._checkInputs();
    }
    _recalculateCenter() {
        // Wait until dragging is complete to avoid wasted raycasting
        if (!this.movement.isDragging) {
            const newCenter = this.movement.pickAlongVector(this._lookAtVector);
            if (newCenter?.pickedPoint) {
                // Direction from new center to origin
                const centerToOrigin = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[4];
                centerToOrigin.copyFrom(newCenter.pickedPoint).negateInPlace().normalize();
                // Check if this direction aligns with camera's lookAt vector
                const dotProduct = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Dot(this._lookAtVector, centerToOrigin);
                // Only update if the center is looking toward the origin (dot product > 0) to avoid a center on the opposite side of globe
                if (dotProduct > 0) {
                    const newRadius = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Distance(this.position, newCenter.pickedPoint);
                    this._setOrientation(this._yaw, this._pitch, newRadius, newCenter.pickedPoint);
                }
            }
        }
    }
    attachControl(noPreventDefault) {
        this.inputs.attachElement(noPreventDefault);
    }
    detachControl() {
        this.inputs.detachElement();
    }
} //# sourceMappingURL=geospatialCamera.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/* eslint-disable @typescript-eslint/no-restricted-imports */ __turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Inputs/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$cameraInputsManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/cameraInputsManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/camera.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$targetCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/targetCamera.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$freeCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/freeCamera.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$freeCameraInputsManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/freeCameraInputsManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$touchCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/touchCamera.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$arcRotateCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/arcRotateCamera.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$arcRotateCameraInputsManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/arcRotateCameraInputsManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$deviceOrientationCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/deviceOrientationCamera.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$flyCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/flyCamera.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$flyCameraInputsManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/flyCameraInputsManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$followCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/followCamera.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$followCameraInputsManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/followCameraInputsManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$gamepadCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/gamepadCamera.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Stereoscopic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Stereoscopic/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$universalCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/universalCamera.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$virtualJoysticksCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/virtualJoysticksCamera.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$VR$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/VR/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$RigModes$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/RigModes/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$geospatialCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/geospatialCamera.js [app-client] (ecmascript)"); //# sourceMappingURL=index.js.map
;
;
;
;
;
;
;
;
;
;
;
;
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
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Inputs/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArcRotateCameraGamepadInput",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$arcRotateCameraGamepadInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArcRotateCameraGamepadInput"],
    "ArcRotateCameraKeyboardMoveInput",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$arcRotateCameraKeyboardMoveInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArcRotateCameraKeyboardMoveInput"],
    "ArcRotateCameraMouseWheelInput",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$arcRotateCameraMouseWheelInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArcRotateCameraMouseWheelInput"],
    "ArcRotateCameraPointersInput",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$arcRotateCameraPointersInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArcRotateCameraPointersInput"],
    "ArcRotateCameraVRDeviceOrientationInput",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$arcRotateCameraVRDeviceOrientationInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArcRotateCameraVRDeviceOrientationInput"],
    "BaseCameraMouseWheelInput",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$BaseCameraMouseWheelInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseCameraMouseWheelInput"],
    "BaseCameraPointersInput",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$BaseCameraPointersInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseCameraPointersInput"],
    "FlyCameraKeyboardInput",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$flyCameraKeyboardInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FlyCameraKeyboardInput"],
    "FlyCameraMouseInput",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$flyCameraMouseInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FlyCameraMouseInput"],
    "FollowCameraKeyboardMoveInput",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$followCameraKeyboardMoveInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FollowCameraKeyboardMoveInput"],
    "FollowCameraMouseWheelInput",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$followCameraMouseWheelInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FollowCameraMouseWheelInput"],
    "FollowCameraPointersInput",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$followCameraPointersInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FollowCameraPointersInput"],
    "FreeCameraDeviceOrientationInput",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$freeCameraDeviceOrientationInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FreeCameraDeviceOrientationInput"],
    "FreeCameraGamepadInput",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$freeCameraGamepadInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FreeCameraGamepadInput"],
    "FreeCameraKeyboardMoveInput",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$freeCameraKeyboardMoveInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FreeCameraKeyboardMoveInput"],
    "FreeCameraMouseInput",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$freeCameraMouseInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FreeCameraMouseInput"],
    "FreeCameraMouseWheelInput",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$freeCameraMouseWheelInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FreeCameraMouseWheelInput"],
    "FreeCameraTouchInput",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$freeCameraTouchInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FreeCameraTouchInput"],
    "FreeCameraVirtualJoystickInput",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$freeCameraVirtualJoystickInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FreeCameraVirtualJoystickInput"],
    "GeospatialCameraMouseWheelInput",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$geospatialCameraMouseWheelInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GeospatialCameraMouseWheelInput"],
    "GeospatialCameraPointersInput",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$geospatialCameraPointersInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GeospatialCameraPointersInput"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Inputs/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$BaseCameraMouseWheelInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Inputs/BaseCameraMouseWheelInput.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$BaseCameraPointersInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Inputs/BaseCameraPointersInput.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$arcRotateCameraGamepadInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Inputs/arcRotateCameraGamepadInput.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$arcRotateCameraKeyboardMoveInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Inputs/arcRotateCameraKeyboardMoveInput.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$arcRotateCameraMouseWheelInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Inputs/arcRotateCameraMouseWheelInput.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$arcRotateCameraPointersInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Inputs/arcRotateCameraPointersInput.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$arcRotateCameraVRDeviceOrientationInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Inputs/arcRotateCameraVRDeviceOrientationInput.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$flyCameraKeyboardInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Inputs/flyCameraKeyboardInput.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$flyCameraMouseInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Inputs/flyCameraMouseInput.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$followCameraKeyboardMoveInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Inputs/followCameraKeyboardMoveInput.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$followCameraMouseWheelInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Inputs/followCameraMouseWheelInput.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$followCameraPointersInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Inputs/followCameraPointersInput.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$freeCameraDeviceOrientationInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Inputs/freeCameraDeviceOrientationInput.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$freeCameraGamepadInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Inputs/freeCameraGamepadInput.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$freeCameraKeyboardMoveInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Inputs/freeCameraKeyboardMoveInput.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$freeCameraMouseInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Inputs/freeCameraMouseInput.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$freeCameraMouseWheelInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Inputs/freeCameraMouseWheelInput.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$freeCameraTouchInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Inputs/freeCameraTouchInput.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$freeCameraVirtualJoystickInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Inputs/freeCameraVirtualJoystickInput.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$geospatialCameraPointersInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Inputs/geospatialCameraPointersInput.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$geospatialCameraMouseWheelInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Inputs/geospatialCameraMouseWheelInput.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Stereoscopic/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnaglyphArcRotateCamera",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Stereoscopic$2f$anaglyphArcRotateCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnaglyphArcRotateCamera"],
    "AnaglyphFreeCamera",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Stereoscopic$2f$anaglyphFreeCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnaglyphFreeCamera"],
    "AnaglyphGamepadCamera",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Stereoscopic$2f$anaglyphGamepadCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnaglyphGamepadCamera"],
    "AnaglyphUniversalCamera",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Stereoscopic$2f$anaglyphUniversalCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnaglyphUniversalCamera"],
    "StereoscopicArcRotateCamera",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Stereoscopic$2f$stereoscopicArcRotateCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StereoscopicArcRotateCamera"],
    "StereoscopicFreeCamera",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Stereoscopic$2f$stereoscopicFreeCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StereoscopicFreeCamera"],
    "StereoscopicGamepadCamera",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Stereoscopic$2f$stereoscopicGamepadCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StereoscopicGamepadCamera"],
    "StereoscopicScreenUniversalCamera",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Stereoscopic$2f$stereoscopicScreenUniversalCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StereoscopicScreenUniversalCamera"],
    "StereoscopicUniversalCamera",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Stereoscopic$2f$stereoscopicUniversalCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StereoscopicUniversalCamera"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Stereoscopic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Stereoscopic/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Stereoscopic$2f$anaglyphArcRotateCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Stereoscopic/anaglyphArcRotateCamera.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Stereoscopic$2f$anaglyphFreeCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Stereoscopic/anaglyphFreeCamera.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Stereoscopic$2f$anaglyphGamepadCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Stereoscopic/anaglyphGamepadCamera.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Stereoscopic$2f$anaglyphUniversalCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Stereoscopic/anaglyphUniversalCamera.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Stereoscopic$2f$stereoscopicArcRotateCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Stereoscopic/stereoscopicArcRotateCamera.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Stereoscopic$2f$stereoscopicFreeCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Stereoscopic/stereoscopicFreeCamera.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Stereoscopic$2f$stereoscopicGamepadCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Stereoscopic/stereoscopicGamepadCamera.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Stereoscopic$2f$stereoscopicUniversalCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Stereoscopic/stereoscopicUniversalCamera.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Stereoscopic$2f$stereoscopicScreenUniversalCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Stereoscopic/stereoscopicScreenUniversalCamera.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/VR/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OnAfterEnteringVRObservableEvent",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$VR$2f$vrExperienceHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OnAfterEnteringVRObservableEvent"],
    "VRCameraMetrics",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$VR$2f$vrCameraMetrics$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VRCameraMetrics"],
    "VRDeviceOrientationArcRotateCamera",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$VR$2f$vrDeviceOrientationArcRotateCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VRDeviceOrientationArcRotateCamera"],
    "VRDeviceOrientationFreeCamera",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$VR$2f$vrDeviceOrientationFreeCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VRDeviceOrientationFreeCamera"],
    "VRDeviceOrientationGamepadCamera",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$VR$2f$vrDeviceOrientationGamepadCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VRDeviceOrientationGamepadCamera"],
    "VRExperienceHelper",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$VR$2f$vrExperienceHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VRExperienceHelper"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$VR$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/VR/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$VR$2f$vrCameraMetrics$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/VR/vrCameraMetrics.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$VR$2f$vrDeviceOrientationArcRotateCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/VR/vrDeviceOrientationArcRotateCamera.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$VR$2f$vrDeviceOrientationFreeCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/VR/vrDeviceOrientationFreeCamera.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$VR$2f$vrDeviceOrientationGamepadCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/VR/vrDeviceOrientationGamepadCamera.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$VR$2f$vrExperienceHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/VR/vrExperienceHelper.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/RigModes/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_SetStereoscopicAnaglyphRigMode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$RigModes$2f$stereoscopicAnaglyphRigMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_SetStereoscopicAnaglyphRigMode"],
    "_SetStereoscopicRigMode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$RigModes$2f$stereoscopicRigMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_SetStereoscopicRigMode"],
    "_SetVrRigMode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$RigModes$2f$vrRigMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_SetVrRigMode"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$RigModes$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/RigModes/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$RigModes$2f$stereoscopicAnaglyphRigMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/RigModes/stereoscopicAnaglyphRigMode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$RigModes$2f$stereoscopicRigMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/RigModes/stereoscopicRigMode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$RigModes$2f$vrRigMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/RigModes/vrRigMode.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnaglyphArcRotateCamera",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Stereoscopic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnaglyphArcRotateCamera"],
    "AnaglyphFreeCamera",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Stereoscopic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnaglyphFreeCamera"],
    "AnaglyphGamepadCamera",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Stereoscopic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnaglyphGamepadCamera"],
    "AnaglyphUniversalCamera",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Stereoscopic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnaglyphUniversalCamera"],
    "ArcFollowCamera",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$followCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArcFollowCamera"],
    "ArcRotateCamera",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$arcRotateCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArcRotateCamera"],
    "ArcRotateCameraGamepadInput",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArcRotateCameraGamepadInput"],
    "ArcRotateCameraInputsManager",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$arcRotateCameraInputsManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArcRotateCameraInputsManager"],
    "ArcRotateCameraKeyboardMoveInput",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArcRotateCameraKeyboardMoveInput"],
    "ArcRotateCameraMouseWheelInput",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArcRotateCameraMouseWheelInput"],
    "ArcRotateCameraPointersInput",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArcRotateCameraPointersInput"],
    "ArcRotateCameraVRDeviceOrientationInput",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArcRotateCameraVRDeviceOrientationInput"],
    "BaseCameraMouseWheelInput",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseCameraMouseWheelInput"],
    "BaseCameraPointersInput",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseCameraPointersInput"],
    "Camera",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Camera"],
    "CameraInputTypes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$cameraInputsManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CameraInputTypes"],
    "CameraInputsManager",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$cameraInputsManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CameraInputsManager"],
    "ComputeAlpha",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$arcRotateCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComputeAlpha"],
    "ComputeBeta",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$arcRotateCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComputeBeta"],
    "DeviceOrientationCamera",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$deviceOrientationCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DeviceOrientationCamera"],
    "FlyCamera",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$flyCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FlyCamera"],
    "FlyCameraInputsManager",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$flyCameraInputsManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FlyCameraInputsManager"],
    "FlyCameraKeyboardInput",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FlyCameraKeyboardInput"],
    "FlyCameraMouseInput",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FlyCameraMouseInput"],
    "FollowCamera",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$followCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FollowCamera"],
    "FollowCameraInputsManager",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$followCameraInputsManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FollowCameraInputsManager"],
    "FollowCameraKeyboardMoveInput",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FollowCameraKeyboardMoveInput"],
    "FollowCameraMouseWheelInput",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FollowCameraMouseWheelInput"],
    "FollowCameraPointersInput",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FollowCameraPointersInput"],
    "FreeCamera",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$freeCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FreeCamera"],
    "FreeCameraDeviceOrientationInput",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FreeCameraDeviceOrientationInput"],
    "FreeCameraGamepadInput",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FreeCameraGamepadInput"],
    "FreeCameraInputsManager",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$freeCameraInputsManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FreeCameraInputsManager"],
    "FreeCameraKeyboardMoveInput",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FreeCameraKeyboardMoveInput"],
    "FreeCameraMouseInput",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FreeCameraMouseInput"],
    "FreeCameraMouseWheelInput",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FreeCameraMouseWheelInput"],
    "FreeCameraTouchInput",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FreeCameraTouchInput"],
    "FreeCameraVirtualJoystickInput",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FreeCameraVirtualJoystickInput"],
    "GamepadCamera",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$gamepadCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GamepadCamera"],
    "GeospatialCamera",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$geospatialCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GeospatialCamera"],
    "GeospatialCameraMouseWheelInput",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GeospatialCameraMouseWheelInput"],
    "GeospatialCameraPointersInput",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GeospatialCameraPointersInput"],
    "OnAfterEnteringVRObservableEvent",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$VR$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OnAfterEnteringVRObservableEvent"],
    "StereoscopicArcRotateCamera",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Stereoscopic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StereoscopicArcRotateCamera"],
    "StereoscopicFreeCamera",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Stereoscopic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StereoscopicFreeCamera"],
    "StereoscopicGamepadCamera",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Stereoscopic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StereoscopicGamepadCamera"],
    "StereoscopicScreenUniversalCamera",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Stereoscopic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StereoscopicScreenUniversalCamera"],
    "StereoscopicUniversalCamera",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Stereoscopic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StereoscopicUniversalCamera"],
    "TargetCamera",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$targetCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TargetCamera"],
    "TouchCamera",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$touchCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TouchCamera"],
    "UniversalCamera",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$universalCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UniversalCamera"],
    "VRCameraMetrics",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$VR$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VRCameraMetrics"],
    "VRDeviceOrientationArcRotateCamera",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$VR$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VRDeviceOrientationArcRotateCamera"],
    "VRDeviceOrientationFreeCamera",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$VR$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VRDeviceOrientationFreeCamera"],
    "VRDeviceOrientationGamepadCamera",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$VR$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VRDeviceOrientationGamepadCamera"],
    "VRExperienceHelper",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$VR$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VRExperienceHelper"],
    "VirtualJoysticksCamera",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$virtualJoysticksCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VirtualJoysticksCamera"],
    "_SetStereoscopicAnaglyphRigMode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$RigModes$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_SetStereoscopicAnaglyphRigMode"],
    "_SetStereoscopicRigMode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$RigModes$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_SetStereoscopicRigMode"],
    "_SetVrRigMode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$RigModes$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_SetVrRigMode"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Inputs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Inputs/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$cameraInputsManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/cameraInputsManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/camera.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$targetCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/targetCamera.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$freeCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/freeCamera.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$freeCameraInputsManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/freeCameraInputsManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$touchCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/touchCamera.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$arcRotateCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/arcRotateCamera.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$arcRotateCameraInputsManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/arcRotateCameraInputsManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$deviceOrientationCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/deviceOrientationCamera.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$flyCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/flyCamera.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$flyCameraInputsManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/flyCameraInputsManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$followCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/followCamera.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$followCameraInputsManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/followCameraInputsManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$gamepadCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/gamepadCamera.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$Stereoscopic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/Stereoscopic/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$universalCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/universalCamera.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$virtualJoysticksCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/virtualJoysticksCamera.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$VR$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/VR/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$RigModes$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/RigModes/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$geospatialCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/geospatialCamera.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=dcdbf_%40babylonjs_core_Cameras_9d5a0419._.js.map