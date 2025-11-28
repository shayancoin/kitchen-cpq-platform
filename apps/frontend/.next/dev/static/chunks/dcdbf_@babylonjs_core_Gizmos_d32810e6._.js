(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Gizmos/gizmo.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Gizmo",
    ()=>Gizmo,
    "GizmoAnchorPoint",
    ()=>GizmoAnchorPoint,
    "GizmoCoordinatesMode",
    ()=>GizmoCoordinatesMode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/mesh.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/camera.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Rendering$2f$utilityLayerRenderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Rendering/utilityLayerRenderer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Events$2f$pointerEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Events/pointerEvents.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$light$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Lights/light.js [app-client] (ecmascript)");
;
;
;
;
;
;
var GizmoAnchorPoint;
(function(GizmoAnchorPoint) {
    /** The origin of the attached node */ GizmoAnchorPoint[GizmoAnchorPoint["Origin"] = 0] = "Origin";
    /** The pivot point of the attached node*/ GizmoAnchorPoint[GizmoAnchorPoint["Pivot"] = 1] = "Pivot";
})(GizmoAnchorPoint || (GizmoAnchorPoint = {}));
var GizmoCoordinatesMode;
(function(GizmoCoordinatesMode) {
    GizmoCoordinatesMode[GizmoCoordinatesMode["World"] = 0] = "World";
    GizmoCoordinatesMode[GizmoCoordinatesMode["Local"] = 1] = "Local";
})(GizmoCoordinatesMode || (GizmoCoordinatesMode = {}));
class Gizmo {
    /**
     * Ratio for the scale of the gizmo (Default: 1)
     */ set scaleRatio(value) {
        this._scaleRatio = value;
    }
    get scaleRatio() {
        return this._scaleRatio;
    }
    /**
     * True when the mouse pointer is hovered a gizmo mesh
     */ get isHovered() {
        return this._isHovered;
    }
    /**
     * Mesh that the gizmo will be attached to. (eg. on a drag gizmo the mesh that will be dragged)
     * * When set, interactions will be enabled
     */ get attachedMesh() {
        return this._attachedMesh;
    }
    set attachedMesh(value) {
        this._attachedMesh = value;
        if (value) {
            this._attachedNode = value;
        }
        this._rootMesh.setEnabled(value ? true : false);
        this._attachedNodeChanged(value);
    }
    /**
     * Node that the gizmo will be attached to. (eg. on a drag gizmo the mesh, bone or NodeTransform that will be dragged)
     * * When set, interactions will be enabled
     */ get attachedNode() {
        return this._attachedNode;
    }
    set attachedNode(value) {
        this._attachedNode = value;
        this._attachedMesh = null;
        this._rootMesh.setEnabled(value ? true : false);
        this._attachedNodeChanged(value);
    }
    /**
     * Disposes and replaces the current meshes in the gizmo with the specified mesh
     * @param mesh The mesh to replace the default mesh of the gizmo
     */ setCustomMesh(mesh) {
        if (mesh.getScene() != this.gizmoLayer.utilityLayerScene) {
            // eslint-disable-next-line no-throw-literal
            throw "When setting a custom mesh on a gizmo, the custom meshes scene must be the same as the gizmos (eg. gizmo.gizmoLayer.utilityLayerScene)";
        }
        const children = this._rootMesh.getChildMeshes();
        for (const c of children){
            c.dispose();
        }
        mesh.parent = this._rootMesh;
        this._customMeshSet = true;
    }
    /**
     * Additional transform applied to the gizmo.
     * It's useful when the gizmo is attached to a bone: if the bone is part of a skeleton attached to a mesh, you should define the mesh as additionalTransformNode if you want the gizmo to be displayed at the bone's correct location.
     * Otherwise, as the gizmo is relative to the skeleton root, the mesh transformation will not be taken into account.
     */ get additionalTransformNode() {
        return this._additionalTransformNode;
    }
    set additionalTransformNode(value) {
        this._additionalTransformNode = value;
    }
    /**
     * If set the gizmo's rotation will be updated to match the attached mesh each frame (Default: true)
     * NOTE: This is only possible for meshes with uniform scaling, as otherwise it's not possible to decompose the rotation
     */ set updateGizmoRotationToMatchAttachedMesh(value) {
        this._updateGizmoRotationToMatchAttachedMesh = value;
    }
    get updateGizmoRotationToMatchAttachedMesh() {
        return this._updateGizmoRotationToMatchAttachedMesh;
    }
    /**
     * If set the gizmo's position will be updated to match the attached mesh each frame (Default: true)
     */ set updateGizmoPositionToMatchAttachedMesh(value) {
        this._updateGizmoPositionToMatchAttachedMesh = value;
    }
    get updateGizmoPositionToMatchAttachedMesh() {
        return this._updateGizmoPositionToMatchAttachedMesh;
    }
    /**
     * Defines where the gizmo will be positioned if `updateGizmoPositionToMatchAttachedMesh` is enabled.
     * (Default: GizmoAnchorPoint.Origin)
     */ set anchorPoint(value) {
        this._anchorPoint = value;
    }
    get anchorPoint() {
        return this._anchorPoint;
    }
    /**
     * Set the coordinate system to use. By default it's local.
     * But it's possible for a user to tweak so its local for translation and world for rotation.
     * In that case, setting the coordinate system will change `updateGizmoRotationToMatchAttachedMesh` and `updateGizmoPositionToMatchAttachedMesh`
     */ set coordinatesMode(coordinatesMode) {
        this._coordinatesMode = coordinatesMode;
        const local = coordinatesMode == 1 /* GizmoCoordinatesMode.Local */ ;
        this.updateGizmoRotationToMatchAttachedMesh = local;
        this.updateGizmoPositionToMatchAttachedMesh = true;
    }
    get coordinatesMode() {
        return this._coordinatesMode;
    }
    /**
     * When set, the gizmo will always appear the same size no matter where the camera is (default: true)
     */ set updateScale(value) {
        this._updateScale = value;
    }
    get updateScale() {
        return this._updateScale;
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _attachedNodeChanged(value) {}
    /**
     * Creates a gizmo
     * @param gizmoLayer The utility layer the gizmo will be added to
     */ constructor(/** [Object] The utility layer the gizmo will be added to */ gizmoLayer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Rendering$2f$utilityLayerRenderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UtilityLayerRenderer"].DefaultUtilityLayer){
        this.gizmoLayer = gizmoLayer;
        this._attachedMesh = null;
        this._attachedNode = null;
        this._customRotationQuaternion = null;
        /**
         * Ratio for the scale of the gizmo (Default: 1)
         */ this._scaleRatio = 1;
        /**
         * boolean updated by pointermove when a gizmo mesh is hovered
         */ this._isHovered = false;
        /**
         * If a custom mesh has been set (Default: false)
         */ this._customMeshSet = false;
        this._updateGizmoRotationToMatchAttachedMesh = true;
        this._updateGizmoPositionToMatchAttachedMesh = true;
        this._anchorPoint = 0 /* GizmoAnchorPoint.Origin */ ;
        this._updateScale = true;
        this._coordinatesMode = 1 /* GizmoCoordinatesMode.Local */ ;
        this._interactionsEnabled = true;
        this._rightHandtoLeftHandMatrix = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].RotationY(Math.PI);
        this._rootMesh = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"]("gizmoRootNode", gizmoLayer.utilityLayerScene);
        this._rootMesh.rotationQuaternion = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"].Identity();
        this._beforeRenderObserver = this.gizmoLayer.utilityLayerScene.onBeforeRenderObservable.add(()=>{
            this._update();
        });
    }
    /**
     * posture that the gizmo will be display
     * When set null, default value will be used (Quaternion(0, 0, 0, 1))
     */ get customRotationQuaternion() {
        return this._customRotationQuaternion;
    }
    set customRotationQuaternion(customRotationQuaternion) {
        this._customRotationQuaternion = customRotationQuaternion;
    }
    /**
     * Updates the gizmo to match the attached mesh's position/rotation
     */ _update() {
        if (this.attachedNode) {
            let effectiveNode = this.attachedNode;
            if (this.attachedMesh) {
                effectiveNode = this.attachedMesh || this.attachedNode;
            }
            // Position
            if (this.updateGizmoPositionToMatchAttachedMesh) {
                if (this.anchorPoint == 1 /* GizmoAnchorPoint.Pivot */  && effectiveNode.getAbsolutePivotPoint) {
                    const position = effectiveNode.getAbsolutePivotPoint();
                    this._rootMesh.position.copyFrom(position);
                } else {
                    const row = effectiveNode.getWorldMatrix().getRow(3);
                    const position = row ? row.toVector3() : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, 0);
                    this._rootMesh.position.copyFrom(position);
                }
            }
            // Rotation
            if (this.updateGizmoRotationToMatchAttachedMesh) {
                const supportedNode = effectiveNode._isMesh || effectiveNode.getClassName() === "AbstractMesh" || effectiveNode.getClassName() === "TransformNode" || effectiveNode.getClassName() === "InstancedMesh";
                const transformNode = supportedNode ? effectiveNode : undefined;
                effectiveNode.getWorldMatrix().decompose(undefined, this._rootMesh.rotationQuaternion, undefined, Gizmo.PreserveScaling ? transformNode : undefined);
                this._rootMesh.rotationQuaternion.normalize();
            } else {
                if (this._customRotationQuaternion) {
                    this._rootMesh.rotationQuaternion.copyFrom(this._customRotationQuaternion);
                } else {
                    this._rootMesh.rotationQuaternion.set(0, 0, 0, 1);
                }
            }
            // Scale
            if (this.updateScale) {
                const activeCamera = this.gizmoLayer.utilityLayerScene.activeCamera;
                const cameraPosition = activeCamera.globalPosition;
                this._rootMesh.position.subtractToRef(cameraPosition, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0]);
                let scale = this.scaleRatio;
                if (activeCamera.mode == __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Camera"].ORTHOGRAPHIC_CAMERA) {
                    if (activeCamera.orthoTop && activeCamera.orthoBottom) {
                        const orthoHeight = activeCamera.orthoTop - activeCamera.orthoBottom;
                        scale *= orthoHeight;
                    }
                } else {
                    const camForward = activeCamera.getScene().useRightHandedSystem ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].RightHandedForwardReadOnly : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].LeftHandedForwardReadOnly;
                    const direction = activeCamera.getDirection(camForward);
                    scale *= __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Dot(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0], direction);
                }
                this._rootMesh.scaling.setAll(scale);
                // Account for handedness, similar to Matrix.decompose
                if (effectiveNode._getWorldMatrixDeterminant() < 0 && !Gizmo.PreserveScaling) {
                    this._rootMesh.scaling.y *= -1;
                }
            } else {
                this._rootMesh.scaling.setAll(this.scaleRatio);
            }
        }
        if (this.additionalTransformNode) {
            this._rootMesh.computeWorldMatrix(true);
            this._rootMesh.getWorldMatrix().multiplyToRef(this.additionalTransformNode.getWorldMatrix(), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[0]);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[0].decompose(this._rootMesh.scaling, this._rootMesh.rotationQuaternion, this._rootMesh.position);
        }
    }
    /**
     * if transform has a pivot and is not using PostMultiplyPivotMatrix, then the worldMatrix contains the pivot matrix (it's not cancelled at the end)
     * so, when extracting the world matrix component, the translation (and other components) is containing the pivot translation.
     * And the pivot is applied each frame. Removing it anyway here makes it applied only in computeWorldMatrix.
     * @param transform local transform that needs to be transform by the pivot inverse matrix
     * @param localMatrix local matrix that needs to be transform by the pivot inverse matrix
     * @param result resulting matrix transformed by pivot inverse if the transform node is using pivot without using post Multiply Pivot Matrix
     */ _handlePivotMatrixInverse(transform, localMatrix, result) {
        if (transform.isUsingPivotMatrix() && !transform.isUsingPostMultiplyPivotMatrix()) {
            transform.getPivotMatrix().invertToRef(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[5]);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[5].multiplyToRef(localMatrix, result);
            return;
        }
        result.copyFrom(localMatrix);
    }
    /**
     * computes the rotation/scaling/position of the transform once the Node world matrix has changed.
     */ _matrixChanged() {
        if (!this._attachedNode) {
            return;
        }
        if (this._attachedNode._isCamera) {
            const camera = this._attachedNode;
            let worldMatrix;
            let worldMatrixUc;
            if (camera.parent) {
                const parentInv = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[1];
                camera.parent._worldMatrix.invertToRef(parentInv);
                this._attachedNode._worldMatrix.multiplyToRef(parentInv, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[0]);
                worldMatrix = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[0];
            } else {
                worldMatrix = this._attachedNode._worldMatrix;
            }
            if (camera.getScene().useRightHandedSystem) {
                // avoid desync with RH matrix computation. Otherwise, rotation of PI around Y axis happens each frame resulting in axis flipped because worldMatrix is computed as inverse of viewMatrix.
                this._rightHandtoLeftHandMatrix.multiplyToRef(worldMatrix, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[1]);
                worldMatrixUc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[1];
            } else {
                worldMatrixUc = worldMatrix;
            }
            worldMatrixUc.decompose(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[1], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Quaternion[0], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0]);
            const inheritsTargetCamera = this._attachedNode.getClassName() === "FreeCamera" || this._attachedNode.getClassName() === "FlyCamera" || this._attachedNode.getClassName() === "ArcFollowCamera" || this._attachedNode.getClassName() === "TargetCamera" || this._attachedNode.getClassName() === "TouchCamera" || this._attachedNode.getClassName() === "UniversalCamera";
            if (inheritsTargetCamera) {
                const targetCamera = this._attachedNode;
                targetCamera.rotation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Quaternion[0].toEulerAngles();
                if (targetCamera.rotationQuaternion) {
                    targetCamera.rotationQuaternion.copyFrom(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Quaternion[0]);
                    targetCamera.rotationQuaternion.normalize();
                }
            }
            camera.position.copyFrom(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0]);
        } else if (this._attachedNode._isMesh || this._attachedNode.getClassName() === "AbstractMesh" || this._attachedNode.getClassName() === "TransformNode" || this._attachedNode.getClassName() === "InstancedMesh") {
            const transform = this._attachedNode;
            if (transform.parent) {
                const parentInv = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[0];
                const localMat = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[1];
                transform.parent.getWorldMatrix().invertToRef(parentInv);
                this._attachedNode.getWorldMatrix().multiplyToRef(parentInv, localMat);
                const matrixToDecompose = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[4];
                this._handlePivotMatrixInverse(transform, localMat, matrixToDecompose);
                matrixToDecompose.decompose(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Quaternion[0], transform.position, Gizmo.PreserveScaling ? transform : undefined, Gizmo.UseAbsoluteScaling);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Quaternion[0].normalize();
                if (transform.isUsingPivotMatrix()) {
                    // Calculate the local matrix without the translation.
                    // Copied from TranslateNode.computeWorldMatrix
                    const r = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Quaternion[1];
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"].RotationYawPitchRollToRef(transform.rotation.y, transform.rotation.x, transform.rotation.z, r);
                    const scaleMatrix = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[2];
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].ScalingToRef(transform.scaling.x, transform.scaling.y, transform.scaling.z, scaleMatrix);
                    const rotationMatrix = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[2];
                    r.toRotationMatrix(rotationMatrix);
                    const pivotMatrix = transform.getPivotMatrix();
                    const invPivotMatrix = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[3];
                    pivotMatrix.invertToRef(invPivotMatrix);
                    pivotMatrix.multiplyToRef(scaleMatrix, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[4]);
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[4].multiplyToRef(rotationMatrix, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[5]);
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[5].multiplyToRef(invPivotMatrix, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[6]);
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[6].getTranslationToRef(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[1]);
                    transform.position.subtractInPlace(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[1]);
                }
            } else {
                const matrixToDecompose = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[4];
                this._handlePivotMatrixInverse(transform, this._attachedNode._worldMatrix, matrixToDecompose);
                matrixToDecompose.decompose(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Quaternion[0], transform.position, Gizmo.PreserveScaling ? transform : undefined, Gizmo.UseAbsoluteScaling);
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0].scaleInPlace(1.0 / transform.scalingDeterminant);
            transform.scaling.copyFrom(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0]);
            if (!transform.billboardMode) {
                if (transform.rotationQuaternion) {
                    transform.rotationQuaternion.copyFrom(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Quaternion[0]);
                    transform.rotationQuaternion.normalize();
                } else {
                    transform.rotation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Quaternion[0].toEulerAngles();
                }
            }
        } else if (this._attachedNode.getClassName() === "Bone") {
            const bone = this._attachedNode;
            const parent = bone.getParent();
            if (parent) {
                const invParent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[0];
                const boneLocalMatrix = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[1];
                parent.getFinalMatrix().invertToRef(invParent);
                bone.getFinalMatrix().multiplyToRef(invParent, boneLocalMatrix);
                const lmat = bone.getLocalMatrix();
                lmat.copyFrom(boneLocalMatrix);
            } else {
                const lmat = bone.getLocalMatrix();
                lmat.copyFrom(bone.getFinalMatrix());
            }
            bone.markAsDirty();
        } else {
            const light = this._attachedNode;
            if (light.getTypeID) {
                const type = light.getTypeID();
                if (type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$light$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Light"].LIGHTTYPEID_DIRECTIONALLIGHT || type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$light$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Light"].LIGHTTYPEID_SPOTLIGHT || type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$light$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Light"].LIGHTTYPEID_POINTLIGHT) {
                    const parent = light.parent;
                    if (parent) {
                        const invParent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[0];
                        const nodeLocalMatrix = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[1];
                        parent.getWorldMatrix().invertToRef(invParent);
                        light.getWorldMatrix().multiplyToRef(invParent, nodeLocalMatrix);
                        nodeLocalMatrix.decompose(undefined, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Quaternion[0], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0]);
                    } else {
                        this._attachedNode._worldMatrix.decompose(undefined, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Quaternion[0], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0]);
                    }
                    // setter doesn't copy values. Need a new Vector3
                    light.position = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0].x, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0].y, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0].z);
                    if (light.direction) {
                        light.direction = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](light.direction.x, light.direction.y, light.direction.z);
                    }
                }
            }
        }
    }
    /**
     * refresh gizmo mesh material
     * @param gizmoMeshes
     * @param material material to apply
     */ _setGizmoMeshMaterial(gizmoMeshes, material) {
        if (gizmoMeshes) {
            for (const m of gizmoMeshes){
                m.material = material;
                if (m.color) {
                    m.color = material.diffuseColor;
                }
            }
        }
    }
    /**
     * Subscribes to pointer up, down, and hover events. Used for responsive gizmos.
     * @param gizmoLayer The utility layer the gizmo will be added to
     * @param gizmoAxisCache Gizmo axis definition used for reactive gizmo UI
     * @returns {Observer<PointerInfo>} pointerObserver
     */ static GizmoAxisPointerObserver(gizmoLayer, gizmoAxisCache) {
        let dragging = false;
        let activeDragButton = -1;
        let forcePointerUp = false;
        const pointerObserver = gizmoLayer.utilityLayerScene.onPointerObservable.add((pointerInfo)=>{
            if (pointerInfo.pickInfo) {
                // If we are dragging and the user presses another button, end the drag.
                // Otherwise, tracking when the drag should end becomes very complex.
                // pointerDragBehavior.ts has similar logic.
                forcePointerUp = dragging && pointerInfo.event.button !== -1 && pointerInfo.event.button !== activeDragButton;
                if (forcePointerUp || pointerInfo.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Events$2f$pointerEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointerEventTypes"].POINTERUP) {
                    // On Mouse Up
                    gizmoAxisCache.forEach((cache)=>{
                        cache.active = false;
                        dragging = false;
                        activeDragButton = -1;
                        for (const m of cache.gizmoMeshes){
                            m.material = cache.dragBehavior.enabled ? cache.material : cache.disableMaterial;
                            if (m.color) {
                                m.color = cache.material.diffuseColor;
                            }
                        }
                    });
                } else if (pointerInfo.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Events$2f$pointerEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointerEventTypes"].POINTERMOVE) {
                    // On Hover Logic
                    if (dragging) {
                        return;
                    }
                    gizmoAxisCache.forEach((cache)=>{
                        if (cache.colliderMeshes && cache.gizmoMeshes) {
                            const isHovered = cache.colliderMeshes?.indexOf(pointerInfo?.pickInfo?.pickedMesh) != -1;
                            const material = cache.dragBehavior.enabled ? isHovered || cache.active ? cache.hoverMaterial : cache.material : cache.disableMaterial;
                            for (const m of cache.gizmoMeshes){
                                m.material = material;
                                if (m.color) {
                                    m.color = material.diffuseColor;
                                }
                            }
                        }
                    });
                } else if (pointerInfo.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Events$2f$pointerEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointerEventTypes"].POINTERDOWN) {
                    // On Mouse Down
                    // If user Clicked Gizmo
                    if (gizmoAxisCache.has(pointerInfo.pickInfo.pickedMesh?.parent)) {
                        dragging = true;
                        activeDragButton = pointerInfo.event.button;
                        const statusMap = gizmoAxisCache.get(pointerInfo.pickInfo.pickedMesh?.parent);
                        statusMap.active = true;
                        gizmoAxisCache.forEach((cache)=>{
                            const isHovered = cache.colliderMeshes?.indexOf(pointerInfo?.pickInfo?.pickedMesh) != -1;
                            const material = (isHovered || cache.active) && cache.dragBehavior.enabled ? cache.hoverMaterial : cache.disableMaterial;
                            for (const m of cache.gizmoMeshes){
                                m.material = material;
                                if (m.color) {
                                    m.color = material.diffuseColor;
                                }
                            }
                        });
                    }
                }
            }
        });
        return pointerObserver;
    }
    /**
     * Disposes of the gizmo
     */ dispose() {
        this._rootMesh.dispose();
        if (this._beforeRenderObserver) {
            this.gizmoLayer.utilityLayerScene.onBeforeRenderObservable.remove(this._beforeRenderObserver);
        }
    }
}
/**
 * When enabled, any gizmo operation will perserve scaling sign. Default is off.
 * Only valid for TransformNode derived classes (Mesh, AbstractMesh, ...)
 */ Gizmo.PreserveScaling = false;
/**
 * There are 2 ways to preserve scaling: using mesh scaling or absolute scaling. Depending of hierarchy, non uniform scaling and LH or RH coordinates. One is preferable than the other.
 * If the scaling to be preserved is the local scaling, then set this value to false.
 * Default is true which means scaling to be preserved is absolute one (with hierarchy applied)
 */ Gizmo.UseAbsoluteScaling = true; //# sourceMappingURL=gizmo.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Gizmos/axisDragGizmo.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AxisDragGizmo",
    ()=>AxisDragGizmo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/observable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$transformNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/transformNode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/mesh.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$cylinderBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/cylinderBuilder.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Behaviors$2f$Meshes$2f$pointerDragBehavior$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Behaviors/Meshes/pointerDragBehavior.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gizmos$2f$gizmo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Gizmos/gizmo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Rendering$2f$utilityLayerRenderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Rendering/utilityLayerRenderer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$standardMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/standardMaterial.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.color.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
class AxisDragGizmo extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gizmos$2f$gizmo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Gizmo"] {
    /** Default material used to render when gizmo is not disabled or hovered */ get coloredMaterial() {
        return this._coloredMaterial;
    }
    /** Material used to render when gizmo is hovered with mouse*/ get hoverMaterial() {
        return this._hoverMaterial;
    }
    /** Material used to render when gizmo is disabled. typically grey.*/ get disableMaterial() {
        return this._disableMaterial;
    }
    /**
     * @internal
     */ static _CreateArrow(scene, material, thickness = 1, isCollider = false) {
        const arrow = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$transformNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransformNode"]("arrow", scene);
        const cylinder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$cylinderBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreateCylinder"])("cylinder", {
            diameterTop: 0,
            height: 0.075,
            diameterBottom: 0.0375 * (1 + (thickness - 1) / 4),
            tessellation: 96
        }, scene);
        const line = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$cylinderBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreateCylinder"])("cylinder", {
            diameterTop: 0.005 * thickness,
            height: 0.275,
            diameterBottom: 0.005 * thickness,
            tessellation: 96
        }, scene);
        // Position arrow pointing in its drag axis
        cylinder.parent = arrow;
        cylinder.material = material;
        cylinder.rotation.x = Math.PI / 2;
        cylinder.position.z += 0.3;
        line.parent = arrow;
        line.material = material;
        line.position.z += 0.275 / 2;
        line.rotation.x = Math.PI / 2;
        if (isCollider) {
            line.visibility = 0;
            cylinder.visibility = 0;
        }
        return arrow;
    }
    /**
     * @internal
     */ static _CreateArrowInstance(scene, arrow) {
        const instance = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$transformNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransformNode"]("arrow", scene);
        for (const mesh of arrow.getChildMeshes()){
            const childInstance = mesh.createInstance(mesh.name);
            childInstance.parent = instance;
        }
        return instance;
    }
    /**
     * Creates an AxisDragGizmo
     * @param dragAxis The axis which the gizmo will be able to drag on
     * @param color The color of the gizmo
     * @param gizmoLayer The utility layer the gizmo will be added to
     * @param parent
     * @param thickness display gizmo axis thickness
     * @param hoverColor The color of the gizmo when hovering over and dragging
     * @param disableColor The Color of the gizmo when its disabled
     */ constructor(dragAxis, color = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color3"].Gray(), gizmoLayer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Rendering$2f$utilityLayerRenderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UtilityLayerRenderer"].DefaultUtilityLayer, parent = null, thickness = 1, hoverColor = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color3"].Yellow(), disableColor = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color3"].Gray()){
        super(gizmoLayer);
        this._pointerObserver = null;
        /**
         * Drag distance in babylon units that the gizmo will snap to when dragged (Default: 0)
         */ this.snapDistance = 0;
        /**
         * Event that fires each time the gizmo snaps to a new location.
         * * snapDistance is the change in distance
         */ this.onSnapObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]();
        this._isEnabled = true;
        this._parent = null;
        this._dragging = false;
        this._parent = parent;
        // Create Material
        this._coloredMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$standardMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StandardMaterial"]("", gizmoLayer.utilityLayerScene);
        this._coloredMaterial.diffuseColor = color;
        this._coloredMaterial.specularColor = color.subtract(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color3"](0.1, 0.1, 0.1));
        this._hoverMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$standardMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StandardMaterial"]("", gizmoLayer.utilityLayerScene);
        this._hoverMaterial.diffuseColor = hoverColor;
        this._disableMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$standardMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StandardMaterial"]("", gizmoLayer.utilityLayerScene);
        this._disableMaterial.diffuseColor = disableColor;
        this._disableMaterial.alpha = 0.4;
        // Build Mesh + Collider
        const arrow = AxisDragGizmo._CreateArrow(gizmoLayer.utilityLayerScene, this._coloredMaterial, thickness);
        const collider = AxisDragGizmo._CreateArrow(gizmoLayer.utilityLayerScene, this._coloredMaterial, thickness + 4, true);
        // Add to Root Node
        this._gizmoMesh = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"]("", gizmoLayer.utilityLayerScene);
        this._gizmoMesh.addChild(arrow);
        this._gizmoMesh.addChild(collider);
        this._gizmoMesh.lookAt(this._rootMesh.position.add(dragAxis));
        this._gizmoMesh.scaling.scaleInPlace(1 / 3);
        this._gizmoMesh.parent = this._rootMesh;
        let currentSnapDragDistance = 0;
        const tmpSnapEvent = {
            snapDistance: 0
        };
        // Add drag behavior to handle events when the gizmo is dragged
        this.dragBehavior = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Behaviors$2f$Meshes$2f$pointerDragBehavior$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointerDragBehavior"]({
            dragAxis: dragAxis
        });
        this.dragBehavior.moveAttached = false;
        this.dragBehavior.updateDragPlane = false;
        this._rootMesh.addBehavior(this.dragBehavior);
        this.dragBehavior.onDragObservable.add((event)=>{
            if (this.attachedNode) {
                // Keep world translation and use it to update world transform
                // if the node has parent, the local transform properties (position, rotation, scale)
                // will be recomputed in _matrixChanged function
                let matrixChanged = false;
                // Snapping logic
                if (this.snapDistance == 0) {
                    this.attachedNode.getWorldMatrix().getTranslationToRef(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[2]);
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[2].addInPlace(event.delta);
                    if (this.dragBehavior.validateDrag(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[2])) {
                        if (this.attachedNode.position) {
                            // Required for nodes like lights
                            this.attachedNode.position.addInPlaceFromFloats(event.delta.x, event.delta.y, event.delta.z);
                        }
                        // use _worldMatrix to not force a matrix update when calling GetWorldMatrix especially with Cameras
                        this.attachedNode.getWorldMatrix().addTranslationFromFloats(event.delta.x, event.delta.y, event.delta.z);
                        this.attachedNode.updateCache();
                        matrixChanged = true;
                    }
                } else {
                    currentSnapDragDistance += event.dragDistance;
                    if (Math.abs(currentSnapDragDistance) > this.snapDistance) {
                        const dragSteps = Math.floor(Math.abs(currentSnapDragDistance) / this.snapDistance);
                        currentSnapDragDistance = currentSnapDragDistance % this.snapDistance;
                        event.delta.normalizeToRef(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[1]);
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[1].scaleInPlace(this.snapDistance * dragSteps);
                        this.attachedNode.getWorldMatrix().getTranslationToRef(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[2]);
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[2].addInPlace(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[1]);
                        if (this.dragBehavior.validateDrag(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[2])) {
                            this.attachedNode.getWorldMatrix().addTranslationFromFloats(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[1].x, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[1].y, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[1].z);
                            this.attachedNode.updateCache();
                            tmpSnapEvent.snapDistance = this.snapDistance * dragSteps * Math.sign(currentSnapDragDistance);
                            this.onSnapObservable.notifyObservers(tmpSnapEvent);
                            matrixChanged = true;
                        }
                    }
                }
                if (matrixChanged) {
                    this._matrixChanged();
                }
            }
        });
        this.dragBehavior.onDragStartObservable.add(()=>{
            this._dragging = true;
        });
        this.dragBehavior.onDragEndObservable.add(()=>{
            this._dragging = false;
        });
        const light = gizmoLayer._getSharedGizmoLight();
        light.includedOnlyMeshes = light.includedOnlyMeshes.concat(this._rootMesh.getChildMeshes(false));
        const cache = {
            gizmoMeshes: arrow.getChildMeshes(),
            colliderMeshes: collider.getChildMeshes(),
            material: this._coloredMaterial,
            hoverMaterial: this._hoverMaterial,
            disableMaterial: this._disableMaterial,
            active: false,
            dragBehavior: this.dragBehavior
        };
        this._parent?.addToAxisCache(collider, cache);
        this._pointerObserver = gizmoLayer.utilityLayerScene.onPointerObservable.add((pointerInfo)=>{
            if (this._customMeshSet) {
                return;
            }
            this._isHovered = !!(cache.colliderMeshes.indexOf(pointerInfo?.pickInfo?.pickedMesh) != -1);
            if (!this._parent) {
                const material = this.dragBehavior.enabled ? this._isHovered || this._dragging ? this._hoverMaterial : this._coloredMaterial : this._disableMaterial;
                this._setGizmoMeshMaterial(cache.gizmoMeshes, material);
            }
        });
        this.dragBehavior.onEnabledObservable.add((newState)=>{
            this._setGizmoMeshMaterial(cache.gizmoMeshes, newState ? cache.material : cache.disableMaterial);
        });
    }
    _attachedNodeChanged(value) {
        if (this.dragBehavior) {
            this.dragBehavior.enabled = value ? true : false;
        }
    }
    /**
     * If the gizmo is enabled
     */ set isEnabled(value) {
        this._isEnabled = value;
        if (!value) {
            this.attachedMesh = null;
            this.attachedNode = null;
        } else {
            if (this._parent) {
                this.attachedMesh = this._parent.attachedMesh;
                this.attachedNode = this._parent.attachedNode;
            }
        }
    }
    get isEnabled() {
        return this._isEnabled;
    }
    /**
     * Disposes of the gizmo
     */ dispose() {
        this.onSnapObservable.clear();
        this.gizmoLayer.utilityLayerScene.onPointerObservable.remove(this._pointerObserver);
        this.dragBehavior.detach();
        if (this._gizmoMesh) {
            this._gizmoMesh.dispose();
        }
        const mats = [
            this._coloredMaterial,
            this._hoverMaterial,
            this._disableMaterial
        ];
        for (const matl of mats){
            if (matl) {
                matl.dispose();
            }
        }
        super.dispose();
    }
} //# sourceMappingURL=axisDragGizmo.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Gizmos/axisScaleGizmo.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AxisScaleGizmo",
    ()=>AxisScaleGizmo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/observable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/mesh.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$boxBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/boxBuilder.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$cylinderBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/cylinderBuilder.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$standardMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/standardMaterial.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Behaviors$2f$Meshes$2f$pointerDragBehavior$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Behaviors/Meshes/pointerDragBehavior.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gizmos$2f$gizmo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Gizmos/gizmo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Rendering$2f$utilityLayerRenderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Rendering/utilityLayerRenderer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.color.js [app-client] (ecmascript)");
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
;
;
class AxisScaleGizmo extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gizmos$2f$gizmo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Gizmo"] {
    /** Default material used to render when gizmo is not disabled or hovered */ get coloredMaterial() {
        return this._coloredMaterial;
    }
    /** Material used to render when gizmo is hovered with mouse*/ get hoverMaterial() {
        return this._hoverMaterial;
    }
    /** Material used to render when gizmo is disabled. typically grey.*/ get disableMaterial() {
        return this._disableMaterial;
    }
    /**
     * Creates an AxisScaleGizmo
     * @param dragAxis The axis which the gizmo will be able to scale on
     * @param color The color of the gizmo
     * @param gizmoLayer The utility layer the gizmo will be added to
     * @param parent
     * @param thickness display gizmo axis thickness
     * @param hoverColor The color of the gizmo when hovering over and dragging
     * @param disableColor The Color of the gizmo when its disabled
     */ constructor(dragAxis, color = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color3"].Gray(), gizmoLayer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Rendering$2f$utilityLayerRenderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UtilityLayerRenderer"].DefaultUtilityLayer, parent = null, thickness = 1, hoverColor = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color3"].Yellow(), disableColor = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color3"].Gray()){
        super(gizmoLayer);
        this._pointerObserver = null;
        /**
         * Scale distance in babylon units that the gizmo will snap to when dragged (Default: 0)
         */ this.snapDistance = 0;
        /**
         * Event that fires each time the gizmo snaps to a new location.
         * * snapDistance is the change in distance
         */ this.onSnapObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * If the scaling operation should be done on all axis (default: false)
         */ this.uniformScaling = false;
        /**
         * Custom sensitivity value for the drag strength
         */ this.sensitivity = 1;
        /**
         * The magnitude of the drag strength (scaling factor)
         */ this.dragScale = 1;
        /**
         * Incremental snap scaling (default is false). When true, with a snapDistance of 0.1, scaling will be 1.1,1.2,1.3 instead of, when false: 1.1,1.21,1.33,...
         */ this.incrementalSnap = false;
        this._isEnabled = true;
        this._parent = null;
        this._dragging = false;
        this._tmpVector = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, 0);
        this._incrementalStartupValue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        this._parent = parent;
        // Create Material
        this._coloredMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$standardMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StandardMaterial"]("", gizmoLayer.utilityLayerScene);
        this._coloredMaterial.diffuseColor = color;
        this._coloredMaterial.specularColor = color.subtract(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color3"](0.1, 0.1, 0.1));
        this._hoverMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$standardMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StandardMaterial"]("", gizmoLayer.utilityLayerScene);
        this._hoverMaterial.diffuseColor = hoverColor;
        this._disableMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$standardMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StandardMaterial"]("", gizmoLayer.utilityLayerScene);
        this._disableMaterial.diffuseColor = disableColor;
        this._disableMaterial.alpha = 0.4;
        // Build mesh + Collider
        this._gizmoMesh = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"]("axis", gizmoLayer.utilityLayerScene);
        const { arrowMesh, arrowTail } = this._createGizmoMesh(this._gizmoMesh, thickness);
        const collider = this._createGizmoMesh(this._gizmoMesh, thickness + 4, true);
        this._gizmoMesh.lookAt(this._rootMesh.position.add(dragAxis));
        this._rootMesh.addChild(this._gizmoMesh, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gizmos$2f$gizmo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Gizmo"].PreserveScaling);
        this._gizmoMesh.scaling.scaleInPlace(1 / 3);
        // Closure of initial prop values for resetting
        const nodePosition = arrowMesh.position.clone();
        const linePosition = arrowTail.position.clone();
        const lineScale = arrowTail.scaling.clone();
        const increaseGizmoMesh = (dragDistance)=>{
            const dragStrength = dragDistance * (3 / this._rootMesh.scaling.length()) * 6;
            arrowMesh.position.z += dragStrength / 3.5;
            arrowTail.scaling.y += dragStrength;
            this.dragScale = arrowTail.scaling.y;
            arrowTail.position.z = arrowMesh.position.z / 2;
        };
        const resetGizmoMesh = ()=>{
            arrowMesh.position.set(nodePosition.x, nodePosition.y, nodePosition.z);
            arrowTail.position.set(linePosition.x, linePosition.y, linePosition.z);
            arrowTail.scaling.set(lineScale.x, lineScale.y, lineScale.z);
            this.dragScale = arrowTail.scaling.y;
            this._dragging = false;
        };
        // Add drag behavior to handle events when the gizmo is dragged
        this.dragBehavior = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Behaviors$2f$Meshes$2f$pointerDragBehavior$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointerDragBehavior"]({
            dragAxis: dragAxis
        });
        this.dragBehavior.moveAttached = false;
        this.dragBehavior.updateDragPlane = false;
        this._rootMesh.addBehavior(this.dragBehavior);
        let currentSnapDragDistance = 0;
        let currentSnapDragDistanceIncremental = 0;
        const tmpSnapEvent = {
            snapDistance: 0
        };
        this.dragBehavior.onDragObservable.add((event)=>{
            if (this.attachedNode) {
                // Drag strength is modified by the scale of the gizmo (eg. for small objects like boombox the strength will be increased to match the behavior of larger objects)
                const dragStrength = this.sensitivity * event.dragDistance * (this.scaleRatio * 3 / this._rootMesh.scaling.length());
                const tmpVector = this._tmpVector;
                // Snapping logic
                let snapped = false;
                let dragSteps = 0;
                if (this.uniformScaling) {
                    tmpVector.setAll(0.57735); // 1 / sqrt(3)
                } else {
                    tmpVector.copyFrom(dragAxis);
                }
                if (this.snapDistance == 0) {
                    tmpVector.scaleToRef(dragStrength, tmpVector);
                } else {
                    currentSnapDragDistance += dragStrength;
                    currentSnapDragDistanceIncremental += dragStrength;
                    const currentSnap = this.incrementalSnap ? currentSnapDragDistanceIncremental : currentSnapDragDistance;
                    if (Math.abs(currentSnap) > this.snapDistance) {
                        dragSteps = Math.floor(Math.abs(currentSnap) / this.snapDistance);
                        if (currentSnap < 0) {
                            dragSteps *= -1;
                        }
                        currentSnapDragDistance = currentSnapDragDistance % this.snapDistance;
                        tmpVector.scaleToRef(this.snapDistance * dragSteps, tmpVector);
                        snapped = true;
                    } else {
                        tmpVector.scaleInPlace(0);
                    }
                }
                tmpVector.addInPlaceFromFloats(1, 1, 1);
                // can't use Math.sign here because Math.sign(0) is 0 and it needs to be positive
                tmpVector.x = Math.abs(tmpVector.x) < AxisScaleGizmo.MinimumAbsoluteScale ? AxisScaleGizmo.MinimumAbsoluteScale * (tmpVector.x < 0 ? -1 : 1) : tmpVector.x;
                tmpVector.y = Math.abs(tmpVector.y) < AxisScaleGizmo.MinimumAbsoluteScale ? AxisScaleGizmo.MinimumAbsoluteScale * (tmpVector.y < 0 ? -1 : 1) : tmpVector.y;
                tmpVector.z = Math.abs(tmpVector.z) < AxisScaleGizmo.MinimumAbsoluteScale ? AxisScaleGizmo.MinimumAbsoluteScale * (tmpVector.z < 0 ? -1 : 1) : tmpVector.z;
                const transformNode = this.attachedNode._isMesh ? this.attachedNode : undefined;
                if (Math.abs(this.snapDistance) > 0 && this.incrementalSnap) {
                    // get current scaling
                    this.attachedNode.getWorldMatrix().decompose(undefined, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Quaternion[0], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[2], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gizmos$2f$gizmo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Gizmo"].PreserveScaling ? transformNode : undefined);
                    // apply incrementaly, without taking care of current scaling value
                    tmpVector.addInPlace(this._incrementalStartupValue);
                    tmpVector.addInPlaceFromFloats(-1, -1, -1);
                    // keep same sign or stretching close to 0 will change orientation at each drag and scaling will oscilate around 0
                    tmpVector.x = Math.abs(tmpVector.x) * (this._incrementalStartupValue.x > 0 ? 1 : -1);
                    tmpVector.y = Math.abs(tmpVector.y) * (this._incrementalStartupValue.y > 0 ? 1 : -1);
                    tmpVector.z = Math.abs(tmpVector.z) * (this._incrementalStartupValue.z > 0 ? 1 : -1);
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].ComposeToRef(tmpVector, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Quaternion[0], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[2], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[1]);
                } else {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].ScalingToRef(tmpVector.x, tmpVector.y, tmpVector.z, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[2]);
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[2].multiplyToRef(this.attachedNode.getWorldMatrix(), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[1]);
                }
                // check scaling are not out of bounds. If not, copy resulting temp matrix to node world matrix
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[1].decompose(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[1], undefined, undefined, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gizmos$2f$gizmo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Gizmo"].PreserveScaling ? transformNode : undefined);
                const maxScale = 100000;
                if (Math.abs(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[1].x) < maxScale && Math.abs(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[1].y) < maxScale && Math.abs(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[1].z) < maxScale) {
                    this.attachedNode.getWorldMatrix().copyFrom(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[1]);
                }
                // notify observers
                if (snapped) {
                    tmpSnapEvent.snapDistance = this.snapDistance * dragSteps;
                    this.onSnapObservable.notifyObservers(tmpSnapEvent);
                }
                this._matrixChanged();
            }
        });
        // On Drag Listener: to move gizmo mesh with user action
        this.dragBehavior.onDragStartObservable.add(()=>{
            this._dragging = true;
            const transformNode = this.attachedNode._isMesh ? this.attachedNode : undefined;
            this.attachedNode?.getWorldMatrix().decompose(this._incrementalStartupValue, undefined, undefined, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gizmos$2f$gizmo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Gizmo"].PreserveScaling ? transformNode : undefined);
            currentSnapDragDistance = 0;
            currentSnapDragDistanceIncremental = 0;
        });
        this.dragBehavior.onDragObservable.add((e)=>increaseGizmoMesh(e.dragDistance));
        this.dragBehavior.onDragEndObservable.add(resetGizmoMesh);
        // Listeners for Universal Scalar
        parent?.uniformScaleGizmo?.dragBehavior?.onDragObservable?.add((e)=>increaseGizmoMesh(e.delta.y));
        parent?.uniformScaleGizmo?.dragBehavior?.onDragEndObservable?.add(resetGizmoMesh);
        const cache = {
            gizmoMeshes: [
                arrowMesh,
                arrowTail
            ],
            colliderMeshes: [
                collider.arrowMesh,
                collider.arrowTail
            ],
            material: this._coloredMaterial,
            hoverMaterial: this._hoverMaterial,
            disableMaterial: this._disableMaterial,
            active: false,
            dragBehavior: this.dragBehavior
        };
        this._parent?.addToAxisCache(this._gizmoMesh, cache);
        this._pointerObserver = gizmoLayer.utilityLayerScene.onPointerObservable.add((pointerInfo)=>{
            if (this._customMeshSet) {
                return;
            }
            // axis mesh cache
            let meshCache = this._parent?.getAxisCache(this._gizmoMesh);
            this._isHovered = !!meshCache && !!(meshCache.colliderMeshes.indexOf(pointerInfo?.pickInfo?.pickedMesh) != -1);
            // uniform mesh cache
            meshCache = this._parent?.getAxisCache(this._rootMesh);
            this._isHovered || (this._isHovered = !!meshCache && !!(meshCache.colliderMeshes.indexOf(pointerInfo?.pickInfo?.pickedMesh) != -1));
            if (!this._parent) {
                const material = this.dragBehavior.enabled ? this._isHovered || this._dragging ? this._hoverMaterial : this._coloredMaterial : this._disableMaterial;
                this._setGizmoMeshMaterial(cache.gizmoMeshes, material);
            }
        });
        this.dragBehavior.onEnabledObservable.add((newState)=>{
            this._setGizmoMeshMaterial(cache.gizmoMeshes, newState ? this._coloredMaterial : this._disableMaterial);
        });
        const light = gizmoLayer._getSharedGizmoLight();
        light.includedOnlyMeshes = light.includedOnlyMeshes.concat(this._rootMesh.getChildMeshes());
    }
    /**
     * @internal
     * Create Geometry for Gizmo
     * @param parentMesh
     * @param thickness
     * @param isCollider
     * @returns the gizmo mesh
     */ _createGizmoMesh(parentMesh, thickness, isCollider = false) {
        const arrowMesh = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$boxBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreateBox"])("yPosMesh", {
            size: 0.4 * (1 + (thickness - 1) / 4)
        }, this.gizmoLayer.utilityLayerScene);
        const arrowTail = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$cylinderBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreateCylinder"])("cylinder", {
            diameterTop: 0.005 * thickness,
            height: 0.275,
            diameterBottom: 0.005 * thickness,
            tessellation: 96
        }, this.gizmoLayer.utilityLayerScene);
        // Position arrow pointing in its drag axis
        arrowMesh.scaling.scaleInPlace(0.1);
        arrowMesh.material = this._coloredMaterial;
        arrowMesh.rotation.x = Math.PI / 2;
        arrowMesh.position.z += 0.3;
        arrowTail.material = this._coloredMaterial;
        arrowTail.position.z += 0.275 / 2;
        arrowTail.rotation.x = Math.PI / 2;
        if (isCollider) {
            arrowMesh.visibility = 0;
            arrowTail.visibility = 0;
        }
        parentMesh.addChild(arrowMesh);
        parentMesh.addChild(arrowTail);
        return {
            arrowMesh,
            arrowTail
        };
    }
    _attachedNodeChanged(value) {
        if (this.dragBehavior) {
            this.dragBehavior.enabled = value ? true : false;
        }
    }
    /**
     * If the gizmo is enabled
     */ set isEnabled(value) {
        this._isEnabled = value;
        if (!value) {
            this.attachedMesh = null;
            this.attachedNode = null;
        } else {
            if (this._parent) {
                this.attachedMesh = this._parent.attachedMesh;
                this.attachedNode = this._parent.attachedNode;
            }
        }
    }
    get isEnabled() {
        return this._isEnabled;
    }
    /**
     * Disposes of the gizmo
     */ dispose() {
        this.onSnapObservable.clear();
        this.gizmoLayer.utilityLayerScene.onPointerObservable.remove(this._pointerObserver);
        this.dragBehavior.detach();
        if (this._gizmoMesh) {
            this._gizmoMesh.dispose();
        }
        const mats = [
            this._coloredMaterial,
            this._hoverMaterial,
            this._disableMaterial
        ];
        for (const matl of mats){
            if (matl) {
                matl.dispose();
            }
        }
        super.dispose();
    }
    /**
     * Disposes and replaces the current meshes in the gizmo with the specified mesh
     * @param mesh The mesh to replace the default mesh of the gizmo
     * @param useGizmoMaterial If the gizmo's default material should be used (default: false)
     */ setCustomMesh(mesh, useGizmoMaterial = false) {
        super.setCustomMesh(mesh);
        if (useGizmoMaterial) {
            const childMeshes = this._gizmoMesh.getChildMeshes();
            for (const m of childMeshes){
                m.material = this._coloredMaterial;
                if (m.color) {
                    m.color = this._coloredMaterial.diffuseColor;
                }
            }
            this._customMeshSet = false;
        }
    }
}
/**
 * The minimal absolute scale per component. can be positive or negative but never smaller.
 */ AxisScaleGizmo.MinimumAbsoluteScale = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Epsilon"]; //# sourceMappingURL=axisScaleGizmo.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Gizmos/boundingBoxGizmo.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BoundingBoxGizmo",
    ()=>BoundingBoxGizmo,
    "DragOperation",
    ()=>DragOperation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/observable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/mesh.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$boxBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/boxBuilder.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$linesBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/linesBuilder.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Behaviors$2f$Meshes$2f$pointerDragBehavior$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Behaviors/Meshes/pointerDragBehavior.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gizmos$2f$gizmo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Gizmos/gizmo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Rendering$2f$utilityLayerRenderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Rendering/utilityLayerRenderer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$standardMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/standardMaterial.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$pivotTools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/pivotTools.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.color.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$transformNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/transformNode.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
var DragOperation;
(function(DragOperation) {
    DragOperation[DragOperation["Rotation"] = 0] = "Rotation";
    DragOperation[DragOperation["Scaling"] = 1] = "Scaling";
})(DragOperation || (DragOperation = {}));
class BoundingBoxGizmo extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gizmos$2f$gizmo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Gizmo"] {
    /**
     * Sets the axis factor
     * @param factor the Vector3 value
     */ set axisFactor(factor) {
        this._axisFactor = factor;
        // update scale cube visibility
        const scaleBoxes = this._scaleBoxesParent.getChildMeshes();
        let index = 0;
        for(let i = 0; i < 3; i++){
            for(let j = 0; j < 3; j++){
                for(let k = 0; k < 3; k++){
                    const zeroAxisCount = (i === 1 ? 1 : 0) + (j === 1 ? 1 : 0) + (k === 1 ? 1 : 0);
                    if (zeroAxisCount === 1 || zeroAxisCount === 3) {
                        continue;
                    }
                    if (scaleBoxes[index]) {
                        const dragAxis = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](i - 1, j - 1, k - 1);
                        dragAxis.multiplyInPlace(this._axisFactor);
                        scaleBoxes[index].setEnabled(dragAxis.lengthSquared() > __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Epsilon"]);
                    }
                    index++;
                }
            }
        }
    }
    /**
     * Gets the axis factor
     * @returns the Vector3 factor value
     */ get axisFactor() {
        return this._axisFactor;
    }
    /**
     * Sets scale drag speed value
     * @param value the new speed value
     */ set scaleDragSpeed(value) {
        this._scaleDragSpeed = value;
    }
    /**
     * Gets scale drag speed
     * @returns the scale speed number
     */ get scaleDragSpeed() {
        return this._scaleDragSpeed;
    }
    /** Default material used to render when gizmo is not disabled or hovered */ get coloredMaterial() {
        return this._coloredMaterial;
    }
    /** Material used to render when gizmo is hovered with mouse*/ get hoverMaterial() {
        return this._hoverColoredMaterial;
    }
    /**
     * Get the pointerDragBehavior
     */ get pointerDragBehavior() {
        return this._pointerDragBehavior;
    }
    /** True when a rotation anchor or scale box or a attached mesh is dragged */ get isDragging() {
        return this._dragging || this._pointerDragBehavior.dragging;
    }
    /**
     * Sets the color of the bounding box gizmo
     * @param color the color to set
     */ setColor(color) {
        this._coloredMaterial.emissiveColor = color;
        this._hoverColoredMaterial.emissiveColor = color.clone().add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color3"](0.3, 0.3, 0.3));
        const children = this._lineBoundingBox.getChildren();
        for (const l of children){
            if (l.color) {
                l.color = color;
            }
        }
    }
    /**
     * Creates an BoundingBoxGizmo
     * @param color The color of the gizmo
     * @param gizmoLayer The utility layer the gizmo will be added to
     */ constructor(color = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color3"].Gray(), gizmoLayer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Rendering$2f$utilityLayerRenderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UtilityLayerRenderer"].DefaultKeepDepthUtilityLayer){
        super(gizmoLayer);
        this._boundingDimensions = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](1, 1, 1);
        this._renderObserver = null;
        this._pointerObserver = null;
        this._scaleDragSpeed = 0.2;
        this._rotateAnchorsDragBehaviors = [];
        this._scaleBoxesDragBehaviors = [];
        /**
         * boolean updated when a rotation anchor or scale box is dragged
         */ this._dragging = false;
        this._tmpQuaternion = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"]();
        this._tmpVector = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, 0);
        this._tmpRotationMatrix = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"]();
        this._incrementalStartupValue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        this._incrementalAnchorStartupValue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        /**
         * If child meshes should be ignored when calculating the bounding box. This should be set to true to avoid perf hits with heavily nested meshes (Default: false)
         */ this.ignoreChildren = false;
        /**
         * Returns true if a descendant should be included when computing the bounding box. When null, all descendants are included. If ignoreChildren is set this will be ignored. (Default: null)
         */ this.includeChildPredicate = null;
        /**
         * The size of the rotation anchors attached to the bounding box (Default: 0.1)
         */ this.rotationSphereSize = 0.1;
        /**
         * The size of the scale boxes attached to the bounding box (Default: 0.1)
         */ this.scaleBoxSize = 0.1;
        /**
         * If set, the rotation anchors and scale boxes will increase in size based on the distance away from the camera to have a consistent screen size (Default: false)
         * Note : fixedDragMeshScreenSize takes precedence over fixedDragMeshBoundsSize if both are true
         */ this.fixedDragMeshScreenSize = false;
        /**
         * If set, the rotation anchors and scale boxes will increase in size based on the size of the bounding box
         * Note : fixedDragMeshScreenSize takes precedence over fixedDragMeshBoundsSize if both are true
         */ this.fixedDragMeshBoundsSize = false;
        /**
         * The distance away from the object which the draggable meshes should appear world sized when fixedDragMeshScreenSize is set to true (default: 10)
         */ this.fixedDragMeshScreenSizeDistanceFactor = 10;
        /**
         * Drag distance in babylon units that the gizmo will snap scaling to when dragged
         */ this.scalingSnapDistance = 0;
        /**
         * Drag distance in babylon units that the gizmo will snap rotation to when dragged
         */ this.rotationSnapDistance = 0;
        /**
         * Fired when a rotation anchor or scale box is dragged
         */ this.onDragStartObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * Fired when the gizmo mesh hovering starts
         */ this.onHoverStartObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * Fired when the gizmo mesh hovering ends
         */ this.onHoverEndObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * Fired when a scale box is dragged
         */ this.onScaleBoxDragObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * Fired when a scale box drag is ended
         */ this.onScaleBoxDragEndObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * Fired when a rotation anchor is dragged
         */ this.onRotationSphereDragObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * Fired when a rotation anchor drag is ended
         */ this.onRotationSphereDragEndObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * Relative bounding box pivot used when scaling the attached node. When null object with scale from the opposite corner. 0.5,0.5,0.5 for center and 0.5,0,0.5 for bottom (Default: null)
         */ this.scalePivot = null;
        /**
         * Scale factor used for masking some axis
         */ this._axisFactor = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](1, 1, 1);
        /**
         * Incremental snap scaling (default is false). When true, with a snapDistance of 0.1, scaling will be 1.1,1.2,1.3 instead of, when false: 1.1,1.21,1.33,...
         */ this.incrementalSnap = false;
        this._existingMeshScale = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
        // Dragging
        this._dragMesh = null;
        this._pointerDragBehavior = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Behaviors$2f$Meshes$2f$pointerDragBehavior$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointerDragBehavior"]();
        // HL2 style corner mesh
        this._cornerMesh = null;
        // Do not update the gizmo's scale so it has a fixed size to the object its attached to
        this.updateScale = false;
        this._anchorMesh = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$transformNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransformNode"]("anchor", gizmoLayer.utilityLayerScene);
        // Create Materials
        this._coloredMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$standardMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StandardMaterial"]("", gizmoLayer.utilityLayerScene);
        this._coloredMaterial.disableLighting = true;
        this._hoverColoredMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$standardMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StandardMaterial"]("", gizmoLayer.utilityLayerScene);
        this._hoverColoredMaterial.disableLighting = true;
        // Build bounding box out of lines
        this._lineBoundingBox = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$transformNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransformNode"]("", gizmoLayer.utilityLayerScene);
        this._lineBoundingBox.rotationQuaternion = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"]();
        const lines = [
            [
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, 0),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](this._boundingDimensions.x, 0, 0)
            ],
            [
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, 0),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, this._boundingDimensions.y, 0)
            ],
            [
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, 0),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, this._boundingDimensions.z)
            ],
            [
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](this._boundingDimensions.x, 0, 0),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](this._boundingDimensions.x, this._boundingDimensions.y, 0)
            ],
            [
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](this._boundingDimensions.x, 0, 0),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](this._boundingDimensions.x, 0, this._boundingDimensions.z)
            ],
            [
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, this._boundingDimensions.y, 0),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](this._boundingDimensions.x, this._boundingDimensions.y, 0)
            ],
            [
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, this._boundingDimensions.y, 0),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, this._boundingDimensions.y, this._boundingDimensions.z)
            ],
            [
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, this._boundingDimensions.z),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](this._boundingDimensions.x, 0, this._boundingDimensions.z)
            ],
            [
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, this._boundingDimensions.z),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, this._boundingDimensions.y, this._boundingDimensions.z)
            ],
            [
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](this._boundingDimensions.x, this._boundingDimensions.y, this._boundingDimensions.z),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, this._boundingDimensions.y, this._boundingDimensions.z)
            ],
            [
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](this._boundingDimensions.x, this._boundingDimensions.y, this._boundingDimensions.z),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](this._boundingDimensions.x, 0, this._boundingDimensions.z)
            ],
            [
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](this._boundingDimensions.x, this._boundingDimensions.y, this._boundingDimensions.z),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](this._boundingDimensions.x, this._boundingDimensions.y, 0)
            ]
        ];
        const line = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$linesBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreateLineSystem"])("lines", {
            lines
        }, gizmoLayer.utilityLayerScene);
        line.color = color;
        line.position.addInPlace(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](-this._boundingDimensions.x / 2, -this._boundingDimensions.y / 2, -this._boundingDimensions.z / 2));
        line.isPickable = false;
        this._lineBoundingBox.addChild(line);
        this._rootMesh.addChild(this._lineBoundingBox);
        this.setColor(color);
        // Create rotation anchors
        this._rotateAnchorsParent = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$transformNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransformNode"]("", gizmoLayer.utilityLayerScene);
        this._rotateAnchorsParent.rotationQuaternion = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"]();
        for(let i = 0; i < 12; i++){
            const anchor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$boxBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreateBox"])("", {
                width: i < 4 || i >= 8 ? 1.6 : 0.4,
                height: i >= 4 && i < 8 ? 1.6 : 0.4,
                depth: 0.4
            }, gizmoLayer.utilityLayerScene);
            anchor.rotation.x = i < 4 || i >= 8 ? Math.PI * 0.25 : 0;
            anchor.rotation.y = i >= 4 && i < 8 ? Math.PI * 0.25 : 0;
            anchor.bakeTransformIntoVertices(anchor.computeWorldMatrix(true));
            anchor.rotationQuaternion = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"]();
            anchor.material = this._coloredMaterial;
            anchor.isNearGrabbable = true;
            // Drag behavior
            const rotateAnchorsDragBehavior = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Behaviors$2f$Meshes$2f$pointerDragBehavior$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointerDragBehavior"]({});
            rotateAnchorsDragBehavior.moveAttached = false;
            rotateAnchorsDragBehavior.updateDragPlane = false;
            anchor.addBehavior(rotateAnchorsDragBehavior);
            const startingTurnDirection = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](1, 0, 0);
            let totalTurnAmountOfDrag = 0;
            let previousProjectDist = 0;
            rotateAnchorsDragBehavior.onDragStartObservable.add(()=>{
                startingTurnDirection.copyFrom(anchor.forward);
                totalTurnAmountOfDrag = 0;
                previousProjectDist = 0;
            });
            const computeAxis = function() {
                const dragAxisIndex = Math.floor(i / 4);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0].set(dragAxisIndex == 0 ? 1 : 0, dragAxisIndex == 1 ? 1 : 0, dragAxisIndex == 2 ? 1 : 0);
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0];
            };
            rotateAnchorsDragBehavior.onDragObservable.add((event)=>{
                this.onRotationSphereDragObservable.notifyObservers({
                    dragOperation: 0 /* DragOperation.Rotation */ ,
                    dragAxis: computeAxis().clone()
                });
                if (this.attachedMesh) {
                    const originalParent = this.attachedMesh.parent;
                    if (originalParent && originalParent.scaling && originalParent.scaling.isNonUniformWithinEpsilon(0.001)) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Warn("BoundingBoxGizmo controls are not supported on child meshes with non-uniform parent scaling");
                        return;
                    }
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$pivotTools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PivotTools"]._RemoveAndStorePivotPoint(this.attachedMesh);
                    const worldDragDirection = startingTurnDirection;
                    // Project the world right on to the drag plane
                    const toSub = event.dragPlaneNormal.scale(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Dot(event.dragPlaneNormal, worldDragDirection));
                    const dragAxis = worldDragDirection.subtract(toSub).normalizeToNew();
                    // project drag delta on to the resulting drag axis and rotate based on that
                    let projectDist = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Dot(dragAxis, event.delta) < 0 ? Math.abs(event.delta.length()) : -Math.abs(event.delta.length());
                    // Make rotation relative to size of mesh.
                    projectDist = projectDist / this._boundingDimensions.length() * this._anchorMesh.scaling.length();
                    // Rotate based on axis
                    if (!this.attachedMesh.rotationQuaternion) {
                        this.attachedMesh.rotationQuaternion = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"].RotationYawPitchRoll(this.attachedMesh.rotation.y, this.attachedMesh.rotation.x, this.attachedMesh.rotation.z);
                    }
                    if (!this._anchorMesh.rotationQuaternion) {
                        this._anchorMesh.rotationQuaternion = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"].RotationYawPitchRoll(this._anchorMesh.rotation.y, this._anchorMesh.rotation.x, this._anchorMesh.rotation.z);
                    }
                    // Do not allow the object to turn more than a full circle
                    totalTurnAmountOfDrag += projectDist;
                    if (Math.abs(totalTurnAmountOfDrag) <= 2 * Math.PI) {
                        if (this.rotationSnapDistance > 0) {
                            const dragSteps = Math.floor(Math.abs(totalTurnAmountOfDrag) / this.rotationSnapDistance) * (totalTurnAmountOfDrag < 0 ? -1 : 1);
                            const angle = this.rotationSnapDistance * dragSteps;
                            projectDist = angle - previousProjectDist;
                            previousProjectDist = angle;
                        }
                        if (i >= 8) {
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"].RotationYawPitchRollToRef(0, 0, projectDist, this._tmpQuaternion);
                        } else if (i >= 4) {
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"].RotationYawPitchRollToRef(projectDist, 0, 0, this._tmpQuaternion);
                        } else {
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"].RotationYawPitchRollToRef(0, projectDist, 0, this._tmpQuaternion);
                        }
                        // if using pivot, move anchor so mesh will be at relative (0,0,0) when parented
                        if (this.attachedMesh.isUsingPivotMatrix()) {
                            this._anchorMesh.position.copyFrom(this.attachedMesh.position);
                        }
                        // Rotate around center of bounding box
                        this._anchorMesh.addChild(this.attachedMesh);
                        if (this._anchorMesh.getScene().useRightHandedSystem) {
                            this._tmpQuaternion.conjugateInPlace();
                        }
                        this._tmpQuaternion.normalize();
                        this._anchorMesh.rotationQuaternion.multiplyToRef(this._tmpQuaternion, this._anchorMesh.rotationQuaternion);
                        this._anchorMesh.rotationQuaternion.normalize();
                        this._anchorMesh.removeChild(this.attachedMesh);
                        this.attachedMesh.setParent(originalParent);
                    }
                    this.updateBoundingBox();
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$pivotTools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PivotTools"]._RestorePivotPoint(this.attachedMesh);
                }
                this._updateDummy();
            });
            // Selection/deselection
            rotateAnchorsDragBehavior.onDragStartObservable.add(()=>{
                this.onDragStartObservable.notifyObservers({
                    dragOperation: 0 /* DragOperation.Rotation */ ,
                    dragAxis: computeAxis().clone()
                });
                this._dragging = true;
                this._selectNode(anchor);
            });
            rotateAnchorsDragBehavior.onDragEndObservable.add((event)=>{
                this.onRotationSphereDragEndObservable.notifyObservers({
                    dragOperation: 0 /* DragOperation.Rotation */ ,
                    dragAxis: computeAxis().clone()
                });
                this._dragging = false;
                this._selectNode(null);
                this._updateDummy();
                this._unhoverMeshOnTouchUp(event.pointerInfo, anchor);
            });
            this._rotateAnchorsDragBehaviors.push(rotateAnchorsDragBehavior);
            this._rotateAnchorsParent.addChild(anchor);
        }
        this._rootMesh.addChild(this._rotateAnchorsParent);
        // Create scale cubes
        this._scaleBoxesParent = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$transformNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransformNode"]("", gizmoLayer.utilityLayerScene);
        this._scaleBoxesParent.rotationQuaternion = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"]();
        for(let i = 0; i < 3; i++){
            for(let j = 0; j < 3; j++){
                for(let k = 0; k < 3; k++){
                    // create box for relevant axis
                    const zeroAxisCount = (i === 1 ? 1 : 0) + (j === 1 ? 1 : 0) + (k === 1 ? 1 : 0);
                    if (zeroAxisCount === 1 || zeroAxisCount === 3) {
                        continue;
                    }
                    const box = zeroAxisCount === 2 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$boxBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreateBox"])("", {
                        size: 1
                    }, gizmoLayer.utilityLayerScene) : this._getCornerMesh(gizmoLayer);
                    if (zeroAxisCount === 0) {
                        box.rotationQuaternion = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"].FromEulerAngles(j * 0.25 * Math.PI, (k + 3 * i - i * k) * 0.25 * Math.PI, 0);
                    }
                    box.material = this._coloredMaterial;
                    box._internalMetadata = zeroAxisCount === 2; // None homogenous scale handle
                    box.isNearGrabbable = true;
                    // box is oriented so, transform world desired axis to local one
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0].set(i - 1, j - 1, k - 1);
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0].normalize();
                    box.computeWorldMatrix(true).invertToRef(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[0]);
                    const dragAxis = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinates(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[0]);
                    dragAxis.normalize();
                    // Dragging logic
                    const scaleBoxesDragBehavior = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Behaviors$2f$Meshes$2f$pointerDragBehavior$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointerDragBehavior"]({
                        dragAxis: dragAxis
                    });
                    scaleBoxesDragBehavior.updateDragPlane = false;
                    scaleBoxesDragBehavior.moveAttached = false;
                    let totalRelativeDragDistance = 0;
                    let previousScale = 0;
                    box.addBehavior(scaleBoxesDragBehavior);
                    scaleBoxesDragBehavior.onDragObservable.add((event)=>{
                        this.onScaleBoxDragObservable.notifyObservers({
                            dragOperation: 1 /* DragOperation.Scaling */ ,
                            dragAxis: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](i - 1, j - 1, k - 1)
                        });
                        if (this.attachedMesh) {
                            const originalParent = this.attachedMesh.parent;
                            if (originalParent && originalParent.scaling && originalParent.scaling.isNonUniformWithinEpsilon(0.001)) {
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Warn("BoundingBoxGizmo controls are not supported on child meshes with non-uniform parent scaling");
                                return;
                            }
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$pivotTools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PivotTools"]._RemoveAndStorePivotPoint(this.attachedMesh);
                            let relativeDragDistance = event.dragDistance / this._boundingDimensions.length() * this._anchorMesh.scaling.length();
                            totalRelativeDragDistance += relativeDragDistance;
                            if (this.scalingSnapDistance > 0) {
                                const dragSteps = Math.floor(Math.abs(totalRelativeDragDistance) / this.scalingSnapDistance) * (totalRelativeDragDistance < 0 ? -1 : 1);
                                const scale = this.scalingSnapDistance * dragSteps;
                                relativeDragDistance = scale - previousScale;
                                previousScale = scale;
                            }
                            const deltaScale = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](relativeDragDistance, relativeDragDistance, relativeDragDistance);
                            const fullScale = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](previousScale, previousScale, previousScale);
                            if (zeroAxisCount === 2) {
                                // scale on 1 axis when using the anchor box in the face middle
                                deltaScale.x *= Math.abs(dragAxis.x);
                                deltaScale.y *= Math.abs(dragAxis.y);
                                deltaScale.z *= Math.abs(dragAxis.z);
                            }
                            deltaScale.scaleInPlace(this._scaleDragSpeed);
                            deltaScale.multiplyInPlace(this._axisFactor);
                            fullScale.scaleInPlace(this._scaleDragSpeed);
                            fullScale.multiplyInPlace(this._axisFactor);
                            fullScale.addInPlace(this._incrementalStartupValue);
                            this.updateBoundingBox();
                            if (this.scalePivot) {
                                this.attachedMesh.getWorldMatrix().getRotationMatrixToRef(this._tmpRotationMatrix);
                                // Move anchor to desired pivot point (Bottom left corner + dimension/2)
                                this._boundingDimensions.scaleToRef(0.5, this._tmpVector);
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinatesToRef(this._tmpVector, this._tmpRotationMatrix, this._tmpVector);
                                this._anchorMesh.position.subtractInPlace(this._tmpVector);
                                this._boundingDimensions.multiplyToRef(this.scalePivot, this._tmpVector);
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinatesToRef(this._tmpVector, this._tmpRotationMatrix, this._tmpVector);
                                this._anchorMesh.position.addInPlace(this._tmpVector);
                            } else {
                                // Scale from the position of the opposite corner
                                box.absolutePosition.subtractToRef(this._anchorMesh.position, this._tmpVector);
                                this._anchorMesh.position.subtractInPlace(this._tmpVector);
                                if (this.attachedMesh.isUsingPivotMatrix()) {
                                    this._anchorMesh.position.subtractInPlace(this.attachedMesh.getPivotPoint());
                                }
                            }
                            this._anchorMesh.addChild(this.attachedMesh);
                            if (this.incrementalSnap) {
                                fullScale.x /= Math.abs(this._incrementalStartupValue.x) < __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Epsilon"] ? 1 : this._incrementalStartupValue.x;
                                fullScale.y /= Math.abs(this._incrementalStartupValue.y) < __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Epsilon"] ? 1 : this._incrementalStartupValue.y;
                                fullScale.z /= Math.abs(this._incrementalStartupValue.z) < __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Epsilon"] ? 1 : this._incrementalStartupValue.z;
                                fullScale.x = Math.max(this._incrementalAnchorStartupValue.x * fullScale.x, this.scalingSnapDistance);
                                fullScale.y = Math.max(this._incrementalAnchorStartupValue.y * fullScale.y, this.scalingSnapDistance);
                                fullScale.z = Math.max(this._incrementalAnchorStartupValue.z * fullScale.z, this.scalingSnapDistance);
                                this._anchorMesh.scaling.x += (fullScale.x - this._anchorMesh.scaling.x) * Math.abs(dragAxis.x);
                                this._anchorMesh.scaling.y += (fullScale.y - this._anchorMesh.scaling.y) * Math.abs(dragAxis.y);
                                this._anchorMesh.scaling.z += (fullScale.z - this._anchorMesh.scaling.z) * Math.abs(dragAxis.z);
                            } else {
                                this._anchorMesh.scaling.addInPlace(deltaScale);
                                if (this._anchorMesh.scaling.x < 0 || this._anchorMesh.scaling.y < 0 || this._anchorMesh.scaling.z < 0) {
                                    this._anchorMesh.scaling.subtractInPlace(deltaScale);
                                }
                            }
                            this._anchorMesh.removeChild(this.attachedMesh);
                            this.attachedMesh.setParent(originalParent);
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$pivotTools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PivotTools"]._RestorePivotPoint(this.attachedMesh);
                        }
                        this._updateDummy();
                    });
                    // Selection/deselection
                    scaleBoxesDragBehavior.onDragStartObservable.add(()=>{
                        this.onDragStartObservable.notifyObservers({
                            dragOperation: 1 /* DragOperation.Scaling */ ,
                            dragAxis: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](i - 1, j - 1, k - 1)
                        });
                        this._dragging = true;
                        this._selectNode(box);
                        totalRelativeDragDistance = 0;
                        previousScale = 0;
                        this._incrementalStartupValue.copyFrom(this.attachedMesh.scaling);
                        this._incrementalAnchorStartupValue.copyFrom(this._anchorMesh.scaling);
                    });
                    scaleBoxesDragBehavior.onDragEndObservable.add((event)=>{
                        this.onScaleBoxDragEndObservable.notifyObservers({
                            dragOperation: 1 /* DragOperation.Scaling */ ,
                            dragAxis: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](i - 1, j - 1, k - 1)
                        });
                        this._dragging = false;
                        this._selectNode(null);
                        this._updateDummy();
                        this._unhoverMeshOnTouchUp(event.pointerInfo, box);
                    });
                    this._scaleBoxesParent.addChild(box);
                    this._scaleBoxesDragBehaviors.push(scaleBoxesDragBehavior);
                }
            }
        }
        this._rootMesh.addChild(this._scaleBoxesParent);
        // Hover color change
        const pointerIds = [];
        this._pointerObserver = gizmoLayer.utilityLayerScene.onPointerObservable.add((pointerInfo)=>{
            if (!pointerIds[pointerInfo.event.pointerId]) {
                const meshes = this._rotateAnchorsParent.getChildMeshes().concat(this._scaleBoxesParent.getChildMeshes());
                for (const mesh of meshes){
                    if (pointerInfo.pickInfo && pointerInfo.pickInfo.pickedMesh == mesh) {
                        pointerIds[pointerInfo.event.pointerId] = mesh;
                        mesh.material = this._hoverColoredMaterial;
                        this.onHoverStartObservable.notifyObservers();
                        this._isHovered = true;
                    }
                }
            } else {
                if (pointerInfo.pickInfo && pointerInfo.pickInfo.pickedMesh != pointerIds[pointerInfo.event.pointerId]) {
                    pointerIds[pointerInfo.event.pointerId].material = this._coloredMaterial;
                    pointerIds.splice(pointerInfo.event.pointerId, 1);
                    this.onHoverEndObservable.notifyObservers();
                    this._isHovered = false;
                }
            }
        });
        // Update bounding box positions
        this._renderObserver = this.gizmoLayer.originalScene.onBeforeRenderObservable.add(()=>{
            // Only update the bounding box if scaling has changed
            if (this.attachedMesh && !this._existingMeshScale.equals(this.attachedMesh.scaling)) {
                this.updateBoundingBox();
            } else if (this.fixedDragMeshScreenSize || this.fixedDragMeshBoundsSize) {
                this._updateRotationAnchors();
                this._updateScaleBoxes();
            }
            // If drag mesh is enabled and dragging, update the attached mesh pose to match the drag mesh
            if (this._dragMesh && this.attachedMesh && this._pointerDragBehavior.dragging) {
                this._lineBoundingBox.position.rotateByQuaternionToRef(this._rootMesh.rotationQuaternion, this._tmpVector);
                this.attachedMesh.setAbsolutePosition(this._dragMesh.position.add(this._tmpVector.scale(-1)));
            }
        });
        this.updateBoundingBox();
    }
    _getCornerMesh(gizmoLayer) {
        if (!this._cornerMesh) {
            const boxZ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$boxBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreateBox"])("", {
                width: 0.4,
                height: 0.4,
                depth: 1.6
            }, gizmoLayer.utilityLayerScene);
            boxZ.position.z = 0.6;
            const boxY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$boxBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreateBox"])("", {
                width: 0.4,
                height: 1.6,
                depth: 0.4
            }, gizmoLayer.utilityLayerScene);
            boxY.position.y = 0.6;
            const boxX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$boxBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreateBox"])("", {
                width: 1.6,
                height: 0.4,
                depth: 0.4
            }, gizmoLayer.utilityLayerScene);
            boxX.position.x = 0.6;
            this._cornerMesh = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"].MergeMeshes([
                boxX,
                boxY,
                boxZ
            ], true);
            return this._cornerMesh;
        }
        return this._cornerMesh.clone();
    }
    /**
     * returns true if the combination of non uniform scaling and rotation of the attached mesh is not supported
     * In that case, the matrix is skewed and the bounding box gizmo will not work correctly
     * @returns True if the combination is not supported, otherwise false.
     */ _hasInvalidNonUniformScaling() {
        return this._attachedMesh?.parent instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$transformNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransformNode"] && this._attachedMesh?.parent.absoluteScaling.isNonUniformWithinEpsilon(0.001) && (this._attachedMesh?.rotationQuaternion && !this._attachedMesh?.rotationQuaternion.equalsWithEpsilon(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"].Identity(), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Epsilon"]) || this._attachedMesh?.rotation.equalsWithEpsilon(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero(), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Epsilon"]) === false);
    }
    _attachedNodeChanged(value) {
        if (value) {
            if (this._hasInvalidNonUniformScaling()) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Warn("BoundingBoxGizmo controls are not supported on meshes with non-uniform scaling and rotation");
                return;
            }
            // Reset anchor mesh to match attached mesh's scale
            // This is needed to avoid invalid box/anchor position on first drag
            this._anchorMesh.scaling.setAll(1);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$pivotTools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PivotTools"]._RemoveAndStorePivotPoint(value);
            const originalParent = value.parent;
            this._anchorMesh.addChild(value);
            this._anchorMesh.removeChild(value);
            value.setParent(originalParent);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$pivotTools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PivotTools"]._RestorePivotPoint(value);
            this.updateBoundingBox();
            const children = value.getChildMeshes(false);
            for (const m of children){
                m.markAsDirty("scaling");
            }
            this.gizmoLayer.utilityLayerScene.onAfterRenderObservable.addOnce(()=>{
                this._updateDummy();
            });
        }
    }
    _selectNode(selectedMesh) {
        const meshes = this._rotateAnchorsParent.getChildMeshes().concat(this._scaleBoxesParent.getChildMeshes());
        for (const m of meshes){
            m.isVisible = !selectedMesh || m == selectedMesh;
        }
    }
    _unhoverMeshOnTouchUp(pointerInfo, selectedMesh) {
        // force unhover mesh if not a mouse event
        if (pointerInfo?.event instanceof PointerEvent && pointerInfo?.event.pointerType === "touch") {
            selectedMesh.material = this._coloredMaterial;
        }
    }
    /**
     * returns an array containing all boxes used for scaling (in increasing x, y and z orders)
     * @returns array of scaling boxes
     */ getScaleBoxes() {
        return this._scaleBoxesParent.getChildMeshes();
    }
    /**
     * Updates the bounding box information for the Gizmo
     */ updateBoundingBox() {
        if (this.attachedMesh && !this._hasInvalidNonUniformScaling()) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$pivotTools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PivotTools"]._RemoveAndStorePivotPoint(this.attachedMesh);
            // Store original parent
            const originalParent = this.attachedMesh.parent;
            this.attachedMesh.setParent(null);
            this._update();
            // Rotate based on axis
            if (!this.attachedMesh.rotationQuaternion) {
                this.attachedMesh.rotationQuaternion = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"].RotationYawPitchRoll(this.attachedMesh.rotation.y, this.attachedMesh.rotation.x, this.attachedMesh.rotation.z);
            }
            if (!this._anchorMesh.rotationQuaternion) {
                this._anchorMesh.rotationQuaternion = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"].RotationYawPitchRoll(this._anchorMesh.rotation.y, this._anchorMesh.rotation.x, this._anchorMesh.rotation.z);
            }
            this._anchorMesh.rotationQuaternion.copyFrom(this.attachedMesh.rotationQuaternion);
            // Store original position and reset mesh to origin before computing the bounding box
            this._tmpQuaternion.copyFrom(this.attachedMesh.rotationQuaternion);
            this._tmpVector.copyFrom(this.attachedMesh.position);
            this.attachedMesh.rotationQuaternion.set(0, 0, 0, 1);
            this.attachedMesh.position.set(0, 0, 0);
            // Update bounding dimensions/positions
            const boundingMinMax = this.attachedMesh.getHierarchyBoundingVectors(!this.ignoreChildren, this.includeChildPredicate);
            boundingMinMax.max.subtractToRef(boundingMinMax.min, this._boundingDimensions);
            // Update gizmo to match bounding box scaling and rotation
            // The position set here is the offset from the origin for the boundingbox when the attached mesh is at the origin
            // The position of the gizmo is then set to the attachedMesh in gizmo._update
            this._lineBoundingBox.scaling.copyFrom(this._boundingDimensions);
            this._lineBoundingBox.position.set((boundingMinMax.max.x + boundingMinMax.min.x) / 2, (boundingMinMax.max.y + boundingMinMax.min.y) / 2, (boundingMinMax.max.z + boundingMinMax.min.z) / 2);
            this._rotateAnchorsParent.position.copyFrom(this._lineBoundingBox.position);
            this._scaleBoxesParent.position.copyFrom(this._lineBoundingBox.position);
            this._lineBoundingBox.computeWorldMatrix();
            this._anchorMesh.position.copyFrom(this._lineBoundingBox.absolutePosition);
            // Restore position/rotation values
            this.attachedMesh.rotationQuaternion.copyFrom(this._tmpQuaternion);
            this.attachedMesh.position.copyFrom(this._tmpVector);
            // Restore original parent
            this.attachedMesh.setParent(originalParent);
        }
        this._updateRotationAnchors();
        this._updateScaleBoxes();
        if (this.attachedMesh) {
            this._existingMeshScale.copyFrom(this.attachedMesh.scaling);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$pivotTools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PivotTools"]._RestorePivotPoint(this.attachedMesh);
        }
    }
    _updateRotationAnchors() {
        const rotateAnchors = this._rotateAnchorsParent.getChildMeshes();
        for(let i = 0; i < 3; i++){
            for(let j = 0; j < 2; j++){
                for(let k = 0; k < 2; k++){
                    const index = i * 4 + j * 2 + k;
                    rotateAnchors[index].position.normalizeToRef(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0]);
                    if (i == 0) {
                        rotateAnchors[index].position.set(0, this._boundingDimensions.y * (j - 0.5), this._boundingDimensions.z * (k - 0.5));
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[1].set(1, 0, 0);
                    }
                    if (i == 1) {
                        rotateAnchors[index].position.set(this._boundingDimensions.x * (j - 0.5), 0, this._boundingDimensions.z * (k - 0.5));
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[1].set(0, 1, 0);
                    }
                    if (i == 2) {
                        rotateAnchors[index].position.set(this._boundingDimensions.x * (j - 0.5), this._boundingDimensions.y * (k - 0.5), 0);
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[1].set(0, 0, 1);
                    }
                    const target = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[2];
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].CrossToRef(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[1], target);
                    target.normalize();
                    target.addInPlace(rotateAnchors[index].position);
                    rotateAnchors[index].lookAt(target);
                    if (this.fixedDragMeshScreenSize && this.gizmoLayer.utilityLayerScene.activeCamera) {
                        rotateAnchors[index].absolutePosition.subtractToRef(this.gizmoLayer.utilityLayerScene.activeCamera.position, this._tmpVector);
                        const distanceFromCamera = this.rotationSphereSize * this._tmpVector.length() / this.fixedDragMeshScreenSizeDistanceFactor;
                        rotateAnchors[index].scaling.set(distanceFromCamera, distanceFromCamera, distanceFromCamera);
                    } else if (this.fixedDragMeshBoundsSize) {
                        rotateAnchors[index].scaling.set(this.rotationSphereSize * this._boundingDimensions.x, this.rotationSphereSize * this._boundingDimensions.y, this.rotationSphereSize * this._boundingDimensions.z);
                    } else {
                        rotateAnchors[index].scaling.set(this.rotationSphereSize, this.rotationSphereSize, this.rotationSphereSize);
                    }
                }
            }
        }
    }
    _updateScaleBoxes() {
        const scaleBoxes = this._scaleBoxesParent.getChildMeshes();
        let index = 0;
        for(let i = 0; i < 3; i++){
            for(let j = 0; j < 3; j++){
                for(let k = 0; k < 3; k++){
                    const zeroAxisCount = (i === 1 ? 1 : 0) + (j === 1 ? 1 : 0) + (k === 1 ? 1 : 0);
                    if (zeroAxisCount === 1 || zeroAxisCount === 3) {
                        continue;
                    }
                    if (scaleBoxes[index]) {
                        scaleBoxes[index].position.set(this._boundingDimensions.x * (i / 2), this._boundingDimensions.y * (j / 2), this._boundingDimensions.z * (k / 2));
                        scaleBoxes[index].position.addInPlace(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](-this._boundingDimensions.x / 2, -this._boundingDimensions.y / 2, -this._boundingDimensions.z / 2));
                        if (this.fixedDragMeshScreenSize && this.gizmoLayer.utilityLayerScene.activeCamera) {
                            scaleBoxes[index].absolutePosition.subtractToRef(this.gizmoLayer.utilityLayerScene.activeCamera.globalPosition, this._tmpVector);
                            const distanceFromCamera = this.scaleBoxSize * this._tmpVector.length() / this.fixedDragMeshScreenSizeDistanceFactor;
                            scaleBoxes[index].scaling.set(distanceFromCamera, distanceFromCamera, distanceFromCamera);
                        } else if (this.fixedDragMeshBoundsSize) {
                            scaleBoxes[index].scaling.set(this.scaleBoxSize * this._boundingDimensions.x, this.scaleBoxSize * this._boundingDimensions.y, this.scaleBoxSize * this._boundingDimensions.z);
                        } else {
                            scaleBoxes[index].scaling.set(this.scaleBoxSize, this.scaleBoxSize, this.scaleBoxSize);
                        }
                    }
                    index++;
                }
            }
        }
    }
    /**
     * Enables rotation on the specified axis and disables rotation on the others
     * @param axis The list of axis that should be enabled (eg. "xy" or "xyz")
     */ setEnabledRotationAxis(axis) {
        const meshes = this._rotateAnchorsParent.getChildMeshes();
        for(let i = 0; i < meshes.length; i++){
            const m = meshes[i];
            if (i < 4) {
                m.setEnabled(axis.indexOf("x") != -1);
            } else if (i < 8) {
                m.setEnabled(axis.indexOf("y") != -1);
            } else {
                m.setEnabled(axis.indexOf("z") != -1);
            }
        }
    }
    /**
     * Enables/disables scaling
     * @param enable if scaling should be enabled
     * @param homogeneousScaling defines if scaling should only be homogeneous
     */ setEnabledScaling(enable, homogeneousScaling = false) {
        const meshes = this._scaleBoxesParent.getChildMeshes();
        for (const m of meshes){
            let enableMesh = enable;
            // Disable heterogeneous scale handles if requested.
            if (homogeneousScaling && m._internalMetadata === true) {
                enableMesh = false;
            }
            m.setEnabled(enableMesh);
        }
    }
    _updateDummy() {
        if (this._dragMesh) {
            this._dragMesh.position.copyFrom(this._lineBoundingBox.getAbsolutePosition());
            this._dragMesh.scaling.copyFrom(this._lineBoundingBox.scaling);
            this._dragMesh.rotationQuaternion.copyFrom(this._rootMesh.rotationQuaternion);
        }
    }
    /**
     * Enables a pointer drag behavior on the bounding box of the gizmo
     */ enableDragBehavior() {
        this._dragMesh = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$boxBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreateBox"])("dummy", {
            size: 1
        }, this.gizmoLayer.utilityLayerScene);
        this._dragMesh.visibility = 0;
        this._dragMesh.rotationQuaternion = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"]();
        this._pointerDragBehavior.useObjectOrientationForDragging = false;
        this._dragMesh.addBehavior(this._pointerDragBehavior);
    }
    /**
     * Force release the drag action by code
     */ releaseDrag() {
        for (const dragBehavior of this._scaleBoxesDragBehaviors){
            dragBehavior.releaseDrag();
        }
        for (const dragBehavior of this._rotateAnchorsDragBehaviors){
            dragBehavior.releaseDrag();
        }
        this._pointerDragBehavior.releaseDrag();
    }
    /**
     * Disposes of the gizmo
     */ dispose() {
        this.gizmoLayer.utilityLayerScene.onPointerObservable.remove(this._pointerObserver);
        this.gizmoLayer.originalScene.onBeforeRenderObservable.remove(this._renderObserver);
        this._lineBoundingBox.dispose();
        this._rotateAnchorsParent.dispose();
        this._scaleBoxesParent.dispose();
        if (this._dragMesh) {
            this._dragMesh.dispose();
        }
        this._scaleBoxesDragBehaviors.length = 0;
        this._rotateAnchorsDragBehaviors.length = 0;
        this.onDragStartObservable.clear();
        this.onHoverStartObservable.clear();
        this.onHoverEndObservable.clear();
        this.onScaleBoxDragObservable.clear();
        this.onScaleBoxDragEndObservable.clear();
        this.onRotationSphereDragObservable.clear();
        this.onRotationSphereDragEndObservable.clear();
        this._coloredMaterial.dispose();
        this._hoverColoredMaterial.dispose();
        super.dispose();
    }
    /**
     * Makes a mesh not pickable and wraps the mesh inside of a bounding box mesh that is pickable. (This is useful to avoid picking within complex geometry)
     * @param mesh the mesh to wrap in the bounding box mesh and make not pickable
     * @returns the bounding box mesh with the passed in mesh as a child
     */ static MakeNotPickableAndWrapInBoundingBox(mesh) {
        const makeNotPickable = (root)=>{
            root.isPickable = false;
            const children = root.getChildMeshes();
            for (const c of children){
                makeNotPickable(c);
            }
        };
        makeNotPickable(mesh);
        // Reset position to get bounding box from origin with no rotation
        if (!mesh.rotationQuaternion) {
            mesh.rotationQuaternion = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"].RotationYawPitchRoll(mesh.rotation.y, mesh.rotation.x, mesh.rotation.z);
        }
        const oldPos = mesh.position.clone();
        const oldRot = mesh.rotationQuaternion.clone();
        mesh.rotationQuaternion.set(0, 0, 0, 1);
        mesh.position.set(0, 0, 0);
        // Update bounding dimensions/positions
        const box = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$boxBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreateBox"])("box", {
            size: 1
        }, mesh.getScene());
        const boundingMinMax = mesh.getHierarchyBoundingVectors();
        boundingMinMax.max.subtractToRef(boundingMinMax.min, box.scaling);
        // Adjust scale to avoid undefined behavior when adding child
        if (box.scaling.y === 0) {
            box.scaling.y = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Epsilon"];
        }
        if (box.scaling.x === 0) {
            box.scaling.x = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Epsilon"];
        }
        if (box.scaling.z === 0) {
            box.scaling.z = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Epsilon"];
        }
        box.position.set((boundingMinMax.max.x + boundingMinMax.min.x) / 2, (boundingMinMax.max.y + boundingMinMax.min.y) / 2, (boundingMinMax.max.z + boundingMinMax.min.z) / 2);
        // Restore original positions
        mesh.addChild(box);
        mesh.rotationQuaternion.copyFrom(oldRot);
        mesh.position.copyFrom(oldPos);
        // Reverse parenting
        mesh.removeChild(box);
        box.addChild(mesh);
        box.visibility = 0;
        return box;
    }
    /**
     * CustomMeshes are not supported by this gizmo
     */ setCustomMesh() {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Error("Custom meshes are not supported on this gizmo");
    }
} //# sourceMappingURL=boundingBoxGizmo.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Gizmos/planeRotationGizmo.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PlaneRotationGizmo",
    ()=>PlaneRotationGizmo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/observable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.color.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$linesBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/linesBuilder.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/mesh.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Behaviors$2f$Meshes$2f$pointerDragBehavior$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Behaviors/Meshes/pointerDragBehavior.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gizmos$2f$gizmo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Gizmos/gizmo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Rendering$2f$utilityLayerRenderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Rendering/utilityLayerRenderer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$standardMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/standardMaterial.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$shaderMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/shaderMaterial.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$effect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/effect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$planeBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/planeBuilder.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$torusBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/torusBuilder.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/logger.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
class PlaneRotationGizmo extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gizmos$2f$gizmo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Gizmo"] {
    /** Default material used to render when gizmo is not disabled or hovered */ get coloredMaterial() {
        return this._coloredMaterial;
    }
    /** Material used to render when gizmo is hovered with mouse */ get hoverMaterial() {
        return this._hoverMaterial;
    }
    /** Color used to render the drag angle sector when gizmo is rotated with mouse */ set rotationColor(color) {
        this._rotationShaderMaterial.setColor3("rotationColor", color);
    }
    /** Material used to render when gizmo is disabled. typically grey. */ get disableMaterial() {
        return this._disableMaterial;
    }
    /**
     * Creates a PlaneRotationGizmo
     * @param planeNormal The normal of the plane which the gizmo will be able to rotate on
     * @param color The color of the gizmo
     * @param gizmoLayer The utility layer the gizmo will be added to
     * @param tessellation Amount of tessellation to be used when creating rotation circles
     * @param parent
     * @param useEulerRotation Use and update Euler angle instead of quaternion
     * @param thickness display gizmo axis thickness
     * @param hoverColor The color of the gizmo when hovering over and dragging
     * @param disableColor The Color of the gizmo when its disabled
     */ constructor(planeNormal, color = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color3"].Gray(), gizmoLayer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Rendering$2f$utilityLayerRenderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UtilityLayerRenderer"].DefaultUtilityLayer, tessellation = 32, parent = null, // eslint-disable-next-line @typescript-eslint/no-unused-vars
    useEulerRotation = false, thickness = 1, hoverColor = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color3"].Yellow(), disableColor = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color3"].Gray()){
        super(gizmoLayer);
        this._pointerObserver = null;
        /**
         * Rotation distance in radians that the gizmo will snap to (Default: 0)
         */ this.snapDistance = 0;
        /**
         * Event that fires each time the gizmo snaps to a new location.
         * * snapDistance is the change in distance
         */ this.onSnapObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * Accumulated relative angle value for rotation on the axis. Reset to 0 when a dragStart occurs
         */ this.angle = 0;
        /**
         * Custom sensitivity value for the drag strength
         */ this.sensitivity = 1;
        this._isEnabled = true;
        this._parent = null;
        this._dragging = false;
        this._angles = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
        this._parent = parent;
        // Create Material
        this._coloredMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$standardMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StandardMaterial"]("", gizmoLayer.utilityLayerScene);
        this._coloredMaterial.diffuseColor = color;
        this._coloredMaterial.specularColor = color.subtract(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color3"](0.1, 0.1, 0.1));
        this._hoverMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$standardMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StandardMaterial"]("", gizmoLayer.utilityLayerScene);
        this._hoverMaterial.diffuseColor = hoverColor;
        this._hoverMaterial.specularColor = hoverColor;
        this._disableMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$standardMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StandardMaterial"]("", gizmoLayer.utilityLayerScene);
        this._disableMaterial.diffuseColor = disableColor;
        this._disableMaterial.alpha = 0.4;
        // Build mesh on root node
        this._gizmoMesh = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"]("", gizmoLayer.utilityLayerScene);
        const { rotationMesh, collider } = this._createGizmoMesh(this._gizmoMesh, thickness, tessellation);
        // Setup Rotation Circle
        this._rotationDisplayPlane = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$planeBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreatePlane"])("rotationDisplay", {
            size: 0.6,
            updatable: false
        }, this.gizmoLayer.utilityLayerScene);
        this._rotationDisplayPlane.rotation.z = Math.PI * 0.5;
        this._rotationDisplayPlane.parent = this._gizmoMesh;
        this._rotationDisplayPlane.setEnabled(false);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$effect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Effect"].ShadersStore["rotationGizmoVertexShader"] = PlaneRotationGizmo._RotationGizmoVertexShader;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$effect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Effect"].ShadersStore["rotationGizmoFragmentShader"] = PlaneRotationGizmo._RotationGizmoFragmentShader;
        this._rotationShaderMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$shaderMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderMaterial"]("shader", this.gizmoLayer.utilityLayerScene, {
            vertex: "rotationGizmo",
            fragment: "rotationGizmo"
        }, {
            attributes: [
                "position",
                "uv"
            ],
            uniforms: [
                "worldViewProjection",
                "angles",
                "rotationColor"
            ]
        });
        this._rotationShaderMaterial.backFaceCulling = false;
        this.rotationColor = hoverColor;
        this._rotationDisplayPlane.material = this._rotationShaderMaterial;
        this._rotationDisplayPlane.visibility = 0.999;
        this._gizmoMesh.lookAt(this._rootMesh.position.add(planeNormal));
        this._rootMesh.addChild(this._gizmoMesh, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gizmos$2f$gizmo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Gizmo"].PreserveScaling);
        this._gizmoMesh.scaling.scaleInPlace(1 / 3);
        // Add drag behavior to handle events when the gizmo is dragged
        this.dragBehavior = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Behaviors$2f$Meshes$2f$pointerDragBehavior$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointerDragBehavior"]({
            dragPlaneNormal: planeNormal
        });
        this.dragBehavior.moveAttached = false;
        this.dragBehavior.maxDragAngle = PlaneRotationGizmo.MaxDragAngle;
        this.dragBehavior._useAlternatePickedPointAboveMaxDragAngle = true;
        this._rootMesh.addBehavior(this.dragBehavior);
        // Closures for drag logic
        const lastDragPosition = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
        const rotationMatrix = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"]();
        const planeNormalTowardsCamera = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
        let localPlaneNormalTowardsCamera = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
        this.dragBehavior.onDragStartObservable.add((e)=>{
            if (this.attachedNode) {
                lastDragPosition.copyFrom(e.dragPlanePoint);
                this._rotationDisplayPlane.setEnabled(true);
                this._rotationDisplayPlane.getWorldMatrix().invertToRef(rotationMatrix);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinatesToRef(e.dragPlanePoint, rotationMatrix, lastDragPosition);
                this._angles.x = Math.atan2(lastDragPosition.y, lastDragPosition.x) + Math.PI;
                this._angles.y = 0;
                this._angles.z = this.updateGizmoRotationToMatchAttachedMesh ? 1 : 0;
                this._dragging = true;
                lastDragPosition.copyFrom(e.dragPlanePoint);
                this._rotationShaderMaterial.setVector3("angles", this._angles);
                this.angle = 0;
            }
        });
        this.dragBehavior.onDragEndObservable.add(()=>{
            this._dragging = false;
            this._rotationDisplayPlane.setEnabled(false);
        });
        const tmpSnapEvent = {
            snapDistance: 0
        };
        let currentSnapDragDistance = 0;
        const tmpMatrix = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"]();
        const amountToRotate = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"]();
        this.dragBehavior.onDragObservable.add((event)=>{
            if (this.attachedNode) {
                // Calc angle over full 360 degree (https://stackoverflow.com/questions/43493711/the-angle-between-two-3d-vectors-with-a-result-range-0-360)
                const nodeScale = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](1, 1, 1);
                const nodeQuaternion = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"](0, 0, 0, 1);
                const nodeTranslation = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, 0);
                const attachedNodeTransform = this._attachedNode;
                // check there is an active pivot for the TransformNode attached
                if (attachedNodeTransform && attachedNodeTransform.isUsingPivotMatrix && attachedNodeTransform.isUsingPivotMatrix() && attachedNodeTransform.position) {
                    // When a TransformNode has an active pivot, even without parenting,
                    // translation from the world matrix is different from TransformNode.position.
                    // Pivot works like a virtual parent that's using the node orientation.
                    // As the world matrix is transformed by the gizmo and then decomposed to TRS
                    // its translation part must be set to the Node's position.
                    attachedNodeTransform.getWorldMatrix().setTranslation(attachedNodeTransform.position);
                }
                this.attachedNode.getWorldMatrix().decompose(nodeScale, nodeQuaternion, nodeTranslation);
                // uniform scaling of absolute value of components
                // (-1,1,1) is uniform but (1,1.001,1) is not
                const uniformScaling = Math.abs(Math.abs(nodeScale.x) - Math.abs(nodeScale.y)) <= __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Epsilon"] && Math.abs(Math.abs(nodeScale.x) - Math.abs(nodeScale.z)) <= __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Epsilon"];
                if (!uniformScaling && this.updateGizmoRotationToMatchAttachedMesh) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Warn("Unable to use a rotation gizmo matching mesh rotation with non uniform scaling. Use uniform scaling or set updateGizmoRotationToMatchAttachedMesh to false.");
                    return;
                }
                nodeQuaternion.normalize();
                const nodeTranslationForOperation = this.updateGizmoPositionToMatchAttachedMesh ? nodeTranslation : this._rootMesh.absolutePosition;
                const newVector = event.dragPlanePoint.subtract(nodeTranslationForOperation).normalize();
                const originalVector = lastDragPosition.subtract(nodeTranslationForOperation).normalize();
                const cross = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Cross(newVector, originalVector);
                const dot = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Dot(newVector, originalVector);
                let angle = Math.atan2(cross.length(), dot) * this.sensitivity;
                planeNormalTowardsCamera.copyFrom(planeNormal);
                localPlaneNormalTowardsCamera.copyFrom(planeNormal);
                if (this.updateGizmoRotationToMatchAttachedMesh) {
                    nodeQuaternion.toRotationMatrix(rotationMatrix);
                    localPlaneNormalTowardsCamera = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinates(planeNormalTowardsCamera, rotationMatrix);
                }
                // Flip up vector depending on which side the camera is on
                let cameraFlipped = false;
                if (gizmoLayer.utilityLayerScene.activeCamera) {
                    const camVec = gizmoLayer.utilityLayerScene.activeCamera.position.subtract(nodeTranslationForOperation).normalize();
                    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Dot(camVec, localPlaneNormalTowardsCamera) > 0) {
                        planeNormalTowardsCamera.scaleInPlace(-1);
                        localPlaneNormalTowardsCamera.scaleInPlace(-1);
                        cameraFlipped = true;
                    }
                }
                const halfCircleSide = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Dot(localPlaneNormalTowardsCamera, cross) > 0.0;
                if (halfCircleSide) {
                    angle = -angle;
                }
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0].set(angle, 0, 0);
                if (!this.dragBehavior.validateDrag(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0])) {
                    angle = 0;
                }
                // Snapping logic
                let snapped = false;
                if (this.snapDistance != 0) {
                    currentSnapDragDistance += angle;
                    if (Math.abs(currentSnapDragDistance) > this.snapDistance) {
                        let dragSteps = Math.floor(Math.abs(currentSnapDragDistance) / this.snapDistance);
                        if (currentSnapDragDistance < 0) {
                            dragSteps *= -1;
                        }
                        currentSnapDragDistance = currentSnapDragDistance % this.snapDistance;
                        angle = this.snapDistance * dragSteps;
                        snapped = true;
                    } else {
                        angle = 0;
                    }
                }
                // Convert angle and axis to quaternion (http://www.euclideanspace.com/maths/geometry/rotations/conversions/angleToQuaternion/index.htm)
                const quaternionCoefficient = Math.sin(angle / 2);
                amountToRotate.set(planeNormalTowardsCamera.x * quaternionCoefficient, planeNormalTowardsCamera.y * quaternionCoefficient, planeNormalTowardsCamera.z * quaternionCoefficient, Math.cos(angle / 2));
                // If the meshes local scale is inverted (eg. loaded gltf file parent with z scale of -1) the rotation needs to be inverted on the y axis
                if (tmpMatrix.determinant() > 0) {
                    const tmpVector = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
                    amountToRotate.toEulerAnglesToRef(tmpVector);
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"].RotationYawPitchRollToRef(tmpVector.y, -tmpVector.x, -tmpVector.z, amountToRotate);
                }
                if (this.updateGizmoRotationToMatchAttachedMesh) {
                    // Rotate selected mesh quaternion over fixed axis
                    nodeQuaternion.multiplyToRef(amountToRotate, nodeQuaternion);
                    nodeQuaternion.normalize();
                    // recompose matrix
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].ComposeToRef(nodeScale, nodeQuaternion, nodeTranslation, this.attachedNode.getWorldMatrix());
                } else {
                    // Rotate selected mesh quaternion over rotated axis
                    amountToRotate.toRotationMatrix(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[0]);
                    const translation = this.attachedNode.getWorldMatrix().getTranslation();
                    this.attachedNode.getWorldMatrix().multiplyToRef(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[0], this.attachedNode.getWorldMatrix());
                    this.attachedNode.getWorldMatrix().setTranslation(translation);
                }
                lastDragPosition.copyFrom(event.dragPlanePoint);
                if (snapped) {
                    tmpSnapEvent.snapDistance = angle;
                    this.onSnapObservable.notifyObservers(tmpSnapEvent);
                }
                this._angles.y += gizmoLayer.utilityLayerScene.useRightHandedSystem ? -angle : angle;
                this.angle += cameraFlipped ? -angle : angle;
                this._rotationShaderMaterial.setVector3("angles", this._angles);
                this._matrixChanged();
            }
        });
        const light = gizmoLayer._getSharedGizmoLight();
        light.includedOnlyMeshes = light.includedOnlyMeshes.concat(this._rootMesh.getChildMeshes(false));
        const cache = {
            colliderMeshes: [
                collider
            ],
            gizmoMeshes: [
                rotationMesh
            ],
            material: this._coloredMaterial,
            hoverMaterial: this._hoverMaterial,
            disableMaterial: this._disableMaterial,
            active: false,
            dragBehavior: this.dragBehavior
        };
        this._parent?.addToAxisCache(this._gizmoMesh, cache);
        this._pointerObserver = gizmoLayer.utilityLayerScene.onPointerObservable.add((pointerInfo)=>{
            if (this._customMeshSet) {
                return;
            }
            // updating here the maxangle because ondragstart is too late (value already used) and the updated value is not taken into account
            this.dragBehavior.maxDragAngle = PlaneRotationGizmo.MaxDragAngle;
            this._isHovered = !!(cache.colliderMeshes.indexOf(pointerInfo?.pickInfo?.pickedMesh) != -1);
            if (!this._parent) {
                const material = cache.dragBehavior.enabled ? this._isHovered || this._dragging ? this._hoverMaterial : this._coloredMaterial : this._disableMaterial;
                this._setGizmoMeshMaterial(cache.gizmoMeshes, material);
            }
        });
        this.dragBehavior.onEnabledObservable.add((newState)=>{
            this._setGizmoMeshMaterial(cache.gizmoMeshes, newState ? this._coloredMaterial : this._disableMaterial);
        });
    }
    /**
     * @internal
     * Create Geometry for Gizmo
     * @param parentMesh
     * @param thickness
     * @param tessellation
     * @returns
     */ _createGizmoMesh(parentMesh, thickness, tessellation) {
        const collider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$torusBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreateTorus"])("ignore", {
            diameter: 0.6,
            thickness: 0.03 * thickness,
            tessellation
        }, this.gizmoLayer.utilityLayerScene);
        collider.visibility = 0;
        const rotationMesh = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$torusBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreateTorus"])("", {
            diameter: 0.6,
            thickness: 0.005 * thickness,
            tessellation
        }, this.gizmoLayer.utilityLayerScene);
        rotationMesh.material = this._coloredMaterial;
        // Position arrow pointing in its drag axis
        rotationMesh.rotation.x = Math.PI / 2;
        collider.rotation.x = Math.PI / 2;
        parentMesh.addChild(rotationMesh, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gizmos$2f$gizmo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Gizmo"].PreserveScaling);
        parentMesh.addChild(collider, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gizmos$2f$gizmo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Gizmo"].PreserveScaling);
        return {
            rotationMesh,
            collider
        };
    }
    _attachedNodeChanged(value) {
        if (this.dragBehavior) {
            this.dragBehavior.enabled = value ? true : false;
        }
    }
    /**
     * If the gizmo is enabled
     */ set isEnabled(value) {
        this._isEnabled = value;
        if (!value) {
            this.attachedMesh = null;
        } else {
            if (this._parent) {
                this.attachedMesh = this._parent.attachedMesh;
            }
        }
    }
    get isEnabled() {
        return this._isEnabled;
    }
    /**
     * Disposes of the gizmo
     */ dispose() {
        this.onSnapObservable.clear();
        this.gizmoLayer.utilityLayerScene.onPointerObservable.remove(this._pointerObserver);
        this.dragBehavior.detach();
        if (this._gizmoMesh) {
            this._gizmoMesh.dispose();
        }
        if (this._rotationDisplayPlane) {
            this._rotationDisplayPlane.dispose();
        }
        if (this._rotationShaderMaterial) {
            this._rotationShaderMaterial.dispose();
        }
        const materials = [
            this._coloredMaterial,
            this._hoverMaterial,
            this._disableMaterial
        ];
        for (const matl of materials){
            if (matl) {
                matl.dispose();
            }
        }
        super.dispose();
    }
}
/**
 * The maximum angle between the camera and the rotation allowed for interaction
 * If a rotation plane appears 'flat', a lower value allows interaction.
 */ PlaneRotationGizmo.MaxDragAngle = Math.PI * 9 / 20;
PlaneRotationGizmo._RotationGizmoVertexShader = `
        precision highp float;
        attribute vec3 position;
        attribute vec2 uv;
        uniform mat4 worldViewProjection;
        varying vec3 vPosition;
        varying vec2 vUV;

        void main(void) {
            gl_Position = worldViewProjection * vec4(position, 1.0);
            vUV = uv;
        }`;
PlaneRotationGizmo._RotationGizmoFragmentShader = `
        precision highp float;
        varying vec2 vUV;
        varying vec3 vPosition;
        uniform vec3 angles;
        uniform vec3 rotationColor;

        #define twopi 6.283185307

        void main(void) {
            vec2 uv = vUV - vec2(0.5);
            float angle = atan(uv.y, uv.x) + 3.141592;
            float delta = gl_FrontFacing ? angles.y : -angles.y;
            float begin = angles.x - delta * angles.z;
            float start = (begin < (begin + delta)) ? begin : (begin + delta);
            float end = (begin > (begin + delta)) ? begin : (begin + delta);
            float len = sqrt(dot(uv,uv));
            float opacity = 1. - step(0.5, len);

            float base = abs(floor(start / twopi)) * twopi;
            start += base;
            end += base;

            float intensity = 0.;
            for (int i = 0; i < 5; i++)
            {
                intensity += max(step(start, angle) - step(end, angle), 0.);
                angle += twopi;
            }
            gl_FragColor = vec4(rotationColor, min(intensity * 0.25, 0.8)) * opacity;
        }
    `; //# sourceMappingURL=planeRotationGizmo.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Gizmos/rotationGizmo.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RotationGizmo",
    ()=>RotationGizmo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/observable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.color.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gizmos$2f$gizmo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Gizmos/gizmo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gizmos$2f$planeRotationGizmo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Gizmos/planeRotationGizmo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Rendering$2f$utilityLayerRenderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Rendering/utilityLayerRenderer.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
class RotationGizmo extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gizmos$2f$gizmo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Gizmo"] {
    get attachedMesh() {
        return this._meshAttached;
    }
    set attachedMesh(mesh) {
        this._meshAttached = mesh;
        this._nodeAttached = mesh;
        this._checkBillboardTransform();
        const gizmos = [
            this.xGizmo,
            this.yGizmo,
            this.zGizmo
        ];
        for (const gizmo of gizmos){
            if (gizmo.isEnabled) {
                gizmo.attachedMesh = mesh;
            } else {
                gizmo.attachedMesh = null;
            }
        }
    }
    get attachedNode() {
        return this._nodeAttached;
    }
    set attachedNode(node) {
        this._meshAttached = null;
        this._nodeAttached = node;
        this._checkBillboardTransform();
        const gizmos = [
            this.xGizmo,
            this.yGizmo,
            this.zGizmo
        ];
        for (const gizmo of gizmos){
            if (gizmo.isEnabled) {
                gizmo.attachedNode = node;
            } else {
                gizmo.attachedNode = null;
            }
        }
    }
    _checkBillboardTransform() {
        if (this._nodeAttached && this._nodeAttached.billboardMode) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Log("Rotation Gizmo will not work with transforms in billboard mode.");
        }
    }
    /**
     * Sensitivity factor for dragging (Default: 1)
     */ set sensitivity(value) {
        this._sensitivity = value;
        const gizmos = [
            this.xGizmo,
            this.yGizmo,
            this.zGizmo
        ];
        for (const gizmo of gizmos){
            if (gizmo) {
                gizmo.sensitivity = value;
            }
        }
    }
    get sensitivity() {
        return this._sensitivity;
    }
    /**
     * True when the mouse pointer is hovering a gizmo mesh
     */ get isHovered() {
        return this.xGizmo.isHovered || this.yGizmo.isHovered || this.zGizmo.isHovered;
    }
    /**
     * True when the mouse pointer is dragging a gizmo mesh
     */ get isDragging() {
        return this.xGizmo.dragBehavior.dragging || this.yGizmo.dragBehavior.dragging || this.zGizmo.dragBehavior.dragging;
    }
    get additionalTransformNode() {
        return this._additionalTransformNode;
    }
    set additionalTransformNode(transformNode) {
        const gizmos = [
            this.xGizmo,
            this.yGizmo,
            this.zGizmo
        ];
        for (const gizmo of gizmos){
            gizmo.additionalTransformNode = transformNode;
        }
    }
    /**
     * Creates a RotationGizmo
     * @param gizmoLayer The utility layer the gizmo will be added to
     * @param tessellation Amount of tessellation to be used when creating rotation circles
     * @param useEulerRotation Use and update Euler angle instead of quaternion
     * @param thickness display gizmo axis thickness
     * @param gizmoManager Gizmo manager
     * @param options More options
     */ constructor(gizmoLayer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Rendering$2f$utilityLayerRenderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UtilityLayerRenderer"].DefaultUtilityLayer, tessellation = 32, useEulerRotation = false, thickness = 1, gizmoManager, options){
        super(gizmoLayer);
        /** Fires an event when any of it's sub gizmos are dragged */ this.onDragStartObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]();
        /** Fires an event when any of it's sub gizmos are being dragged */ this.onDragObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]();
        /** Fires an event when any of it's sub gizmos are released from dragging */ this.onDragEndObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]();
        this._observables = [];
        this._sensitivity = 1;
        /** Node Caching for quick lookup */ this._gizmoAxisCache = new Map();
        const xColor = options && options.xOptions && options.xOptions.color ? options.xOptions.color : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color3"].Red().scale(0.5);
        const yColor = options && options.yOptions && options.yOptions.color ? options.yOptions.color : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color3"].Green().scale(0.5);
        const zColor = options && options.zOptions && options.zOptions.color ? options.zOptions.color : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color3"].Blue().scale(0.5);
        this.xGizmo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gizmos$2f$planeRotationGizmo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlaneRotationGizmo"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](1, 0, 0), xColor, gizmoLayer, tessellation, this, useEulerRotation, thickness);
        this.yGizmo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gizmos$2f$planeRotationGizmo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlaneRotationGizmo"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 1, 0), yColor, gizmoLayer, tessellation, this, useEulerRotation, thickness);
        this.zGizmo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gizmos$2f$planeRotationGizmo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlaneRotationGizmo"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, 1), zColor, gizmoLayer, tessellation, this, useEulerRotation, thickness);
        this.additionalTransformNode = options?.additionalTransformNode;
        // Relay drag events and set update scale
        const gizmos = [
            this.xGizmo,
            this.yGizmo,
            this.zGizmo
        ];
        for (const gizmo of gizmos){
            //must set updateScale on each gizmo, as setting it on root RotationGizmo doesnt prevent individual gizmos from updating
            //currently updateScale is a property with no getter/setter, so no good way to override behavior at runtime, so we will at least set it on startup
            if (options && options.updateScale != undefined) {
                gizmo.updateScale = options.updateScale;
            }
            gizmo.dragBehavior.onDragStartObservable.add((eventData, eventState)=>this.onDragStartObservable.notifyObservers(eventData, eventState.mask, eventState.target, eventState.currentTarget, eventState.userInfo));
            gizmo.dragBehavior.onDragObservable.add((eventData, eventState)=>this.onDragObservable.notifyObservers(eventData, eventState.mask, eventState.target, eventState.currentTarget, eventState.userInfo));
            gizmo.dragBehavior.onDragEndObservable.add((eventData, eventState)=>this.onDragEndObservable.notifyObservers(eventData, eventState.mask, eventState.target, eventState.currentTarget, eventState.userInfo));
        }
        this.attachedMesh = null;
        this.attachedNode = null;
        if (gizmoManager) {
            gizmoManager.addToAxisCache(this._gizmoAxisCache);
        } else {
            // Only subscribe to pointer event if gizmoManager isnt
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gizmos$2f$gizmo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Gizmo"].GizmoAxisPointerObserver(gizmoLayer, this._gizmoAxisCache);
        }
    }
    /**
     * If set the gizmo's rotation will be updated to match the attached mesh each frame (Default: true)
     * NOTE: This is only possible for meshes with uniform scaling, as otherwise it's not possible to decompose the rotation
     */ set updateGizmoRotationToMatchAttachedMesh(value) {
        if (this.xGizmo) {
            this.xGizmo.updateGizmoRotationToMatchAttachedMesh = value;
            this.yGizmo.updateGizmoRotationToMatchAttachedMesh = value;
            this.zGizmo.updateGizmoRotationToMatchAttachedMesh = value;
        }
    }
    get updateGizmoRotationToMatchAttachedMesh() {
        return this.xGizmo.updateGizmoRotationToMatchAttachedMesh;
    }
    set updateGizmoPositionToMatchAttachedMesh(value) {
        if (this.xGizmo) {
            this.xGizmo.updateGizmoPositionToMatchAttachedMesh = value;
            this.yGizmo.updateGizmoPositionToMatchAttachedMesh = value;
            this.zGizmo.updateGizmoPositionToMatchAttachedMesh = value;
        }
    }
    get updateGizmoPositionToMatchAttachedMesh() {
        return this.xGizmo.updateGizmoPositionToMatchAttachedMesh;
    }
    set anchorPoint(value) {
        this._anchorPoint = value;
        const gizmos = [
            this.xGizmo,
            this.yGizmo,
            this.zGizmo
        ];
        for (const gizmo of gizmos){
            gizmo.anchorPoint = value;
        }
    }
    get anchorPoint() {
        return this._anchorPoint;
    }
    /**
     * Set the coordinate system to use. By default it's local.
     * But it's possible for a user to tweak so its local for translation and world for rotation.
     * In that case, setting the coordinate system will change `updateGizmoRotationToMatchAttachedMesh` and `updateGizmoPositionToMatchAttachedMesh`
     */ set coordinatesMode(coordinatesMode) {
        const gizmos = [
            this.xGizmo,
            this.yGizmo,
            this.zGizmo
        ];
        for (const gizmo of gizmos){
            gizmo.coordinatesMode = coordinatesMode;
        }
    }
    set updateScale(value) {
        if (this.xGizmo) {
            this.xGizmo.updateScale = value;
            this.yGizmo.updateScale = value;
            this.zGizmo.updateScale = value;
        }
    }
    get updateScale() {
        return this.xGizmo.updateScale;
    }
    /**
     * Drag distance in babylon units that the gizmo will snap to when dragged (Default: 0)
     */ set snapDistance(value) {
        if (this.xGizmo) {
            this.xGizmo.snapDistance = value;
            this.yGizmo.snapDistance = value;
            this.zGizmo.snapDistance = value;
        }
    }
    get snapDistance() {
        return this.xGizmo.snapDistance;
    }
    /**
     * Ratio for the scale of the gizmo (Default: 1)
     */ set scaleRatio(value) {
        if (this.xGizmo) {
            this.xGizmo.scaleRatio = value;
            this.yGizmo.scaleRatio = value;
            this.zGizmo.scaleRatio = value;
        }
    }
    get scaleRatio() {
        return this.xGizmo.scaleRatio;
    }
    /**
     * posture that the gizmo will be display
     * When set null, default value will be used (Quaternion(0, 0, 0, 1))
     */ get customRotationQuaternion() {
        return this._customRotationQuaternion;
    }
    set customRotationQuaternion(customRotationQuaternion) {
        this._customRotationQuaternion = customRotationQuaternion;
        const gizmos = [
            this.xGizmo,
            this.yGizmo,
            this.zGizmo
        ];
        for (const gizmo of gizmos){
            if (gizmo) {
                gizmo.customRotationQuaternion = customRotationQuaternion;
            }
        }
    }
    /**
     * Builds Gizmo Axis Cache to enable features such as hover state preservation and graying out other axis during manipulation
     * @param mesh Axis gizmo mesh
     * @param cache Gizmo axis definition used for reactive gizmo UI
     */ addToAxisCache(mesh, cache) {
        this._gizmoAxisCache.set(mesh, cache);
    }
    /**
     * Force release the drag action by code
     */ releaseDrag() {
        this.xGizmo.dragBehavior.releaseDrag();
        this.yGizmo.dragBehavior.releaseDrag();
        this.zGizmo.dragBehavior.releaseDrag();
    }
    /**
     * Disposes of the gizmo
     */ dispose() {
        this.xGizmo.dispose();
        this.yGizmo.dispose();
        this.zGizmo.dispose();
        this.onDragStartObservable.clear();
        this.onDragObservable.clear();
        this.onDragEndObservable.clear();
        for (const obs of this._observables){
            this.gizmoLayer.utilityLayerScene.onPointerObservable.remove(obs);
        }
        super.dispose();
    }
    /**
     * CustomMeshes are not supported by this gizmo
     */ setCustomMesh() {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Error("Custom meshes are not supported on this gizmo, please set the custom meshes on the gizmos contained within this one (gizmo.xGizmo, gizmo.yGizmo, gizmo.zGizmo)");
    }
} //# sourceMappingURL=rotationGizmo.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Gizmos/planeDragGizmo.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PlaneDragGizmo",
    ()=>PlaneDragGizmo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/observable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.color.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$transformNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/transformNode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$planeBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/planeBuilder.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Behaviors$2f$Meshes$2f$pointerDragBehavior$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Behaviors/Meshes/pointerDragBehavior.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gizmos$2f$gizmo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Gizmos/gizmo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Rendering$2f$utilityLayerRenderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Rendering/utilityLayerRenderer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$standardMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/standardMaterial.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
class PlaneDragGizmo extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gizmos$2f$gizmo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Gizmo"] {
    /** Default material used to render when gizmo is not disabled or hovered */ get coloredMaterial() {
        return this._coloredMaterial;
    }
    /** Material used to render when gizmo is hovered with mouse*/ get hoverMaterial() {
        return this._hoverMaterial;
    }
    /** Material used to render when gizmo is disabled. typically grey.*/ get disableMaterial() {
        return this._disableMaterial;
    }
    /**
     * @internal
     */ static _CreatePlane(scene, material) {
        const plane = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$transformNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransformNode"]("plane", scene);
        //make sure plane is double sided
        const dragPlane = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$planeBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreatePlane"])("dragPlane", {
            width: 0.1375,
            height: 0.1375,
            sideOrientation: 2
        }, scene);
        dragPlane.material = material;
        dragPlane.parent = plane;
        return plane;
    }
    /**
     * Creates a PlaneDragGizmo
     * @param dragPlaneNormal The axis normal to which the gizmo will be able to drag on
     * @param color The color of the gizmo
     * @param gizmoLayer The utility layer the gizmo will be added to
     * @param parent
     * @param hoverColor The color of the gizmo when hovering over and dragging
     * @param disableColor The Color of the gizmo when its disabled
     */ constructor(dragPlaneNormal, color = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color3"].Gray(), gizmoLayer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Rendering$2f$utilityLayerRenderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UtilityLayerRenderer"].DefaultUtilityLayer, parent = null, hoverColor = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color3"].Yellow(), disableColor = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color3"].Gray()){
        super(gizmoLayer);
        this._pointerObserver = null;
        /**
         * Drag distance in babylon units that the gizmo will snap to when dragged (Default: 0)
         */ this.snapDistance = 0;
        /**
         * Event that fires each time the gizmo snaps to a new location.
         * * snapDistance is the change in distance
         */ this.onSnapObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]();
        this._isEnabled = false;
        this._parent = null;
        this._dragging = false;
        this._parent = parent;
        // Create Material
        this._coloredMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$standardMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StandardMaterial"]("", gizmoLayer.utilityLayerScene);
        this._coloredMaterial.diffuseColor = color;
        this._coloredMaterial.specularColor = color.subtract(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color3"](0.1, 0.1, 0.1));
        this._hoverMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$standardMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StandardMaterial"]("", gizmoLayer.utilityLayerScene);
        this._hoverMaterial.diffuseColor = hoverColor;
        this._disableMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$standardMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StandardMaterial"]("", gizmoLayer.utilityLayerScene);
        this._disableMaterial.diffuseColor = disableColor;
        this._disableMaterial.alpha = 0.4;
        // Build plane mesh on root node
        this._gizmoMesh = PlaneDragGizmo._CreatePlane(gizmoLayer.utilityLayerScene, this._coloredMaterial);
        this._gizmoMesh.lookAt(this._rootMesh.position.add(dragPlaneNormal));
        this._gizmoMesh.scaling.scaleInPlace(1 / 3);
        this._gizmoMesh.parent = this._rootMesh;
        const currentSnapDragDistance = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
        const tmpVector = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
        const tmpVector2 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
        const tmpSnapEvent = {
            snapDistance: 0
        };
        // Add dragPlaneNormal drag behavior to handle events when the gizmo is dragged
        this.dragBehavior = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Behaviors$2f$Meshes$2f$pointerDragBehavior$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointerDragBehavior"]({
            dragPlaneNormal: dragPlaneNormal
        });
        this.dragBehavior.moveAttached = false;
        this._rootMesh.addBehavior(this.dragBehavior);
        this.dragBehavior.onDragObservable.add((event)=>{
            if (this.attachedNode) {
                // Keep world translation and use it to update world transform
                // if the node has parent, the local transform properties (position, rotation, scale)
                // will be recomputed in _matrixChanged function
                // Snapping logic
                if (this.snapDistance == 0) {
                    this.attachedNode.getWorldMatrix().getTranslationToRef(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0]);
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0].addToRef(event.delta, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0]);
                    if (this.dragBehavior.validateDrag(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0])) {
                        this.attachedNode.getWorldMatrix().addTranslationFromFloats(event.delta.x, event.delta.y, event.delta.z);
                    }
                } else {
                    currentSnapDragDistance.addInPlace(event.delta);
                    tmpVector2.set(0, 0, 0);
                    const currentSnapDragDistanceArray = currentSnapDragDistance.asArray();
                    for(let axis = 0; axis < 3; axis++){
                        const axisDistance = currentSnapDragDistanceArray[axis];
                        if (Math.abs(axisDistance) > this.snapDistance) {
                            const dragSteps = (axisDistance < 0 ? Math.ceil : Math.floor)(axisDistance / this.snapDistance);
                            currentSnapDragDistanceArray[axis] = currentSnapDragDistanceArray[axis] % this.snapDistance;
                            tmpVector.set(axis == 0 ? 1 : 0, axis == 1 ? 1 : 0, axis == 2 ? 1 : 0);
                            tmpVector.scaleInPlace(this.snapDistance * dragSteps);
                            tmpVector2.addInPlace(tmpVector);
                        }
                    }
                    currentSnapDragDistance.fromArray(currentSnapDragDistanceArray);
                    this.attachedNode.getWorldMatrix().getTranslationToRef(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0]);
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0].addToRef(tmpVector2, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0]);
                    if (this.dragBehavior.validateDrag(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0])) {
                        this.attachedNode.getWorldMatrix().addTranslationFromFloats(tmpVector2.x, tmpVector2.y, tmpVector2.z);
                        tmpSnapEvent.snapDistance = tmpVector2.length();
                        this.onSnapObservable.notifyObservers(tmpSnapEvent);
                    }
                }
                this._matrixChanged();
            }
        });
        this.dragBehavior.onDragStartObservable.add(()=>{
            this._dragging = true;
        });
        this.dragBehavior.onDragEndObservable.add(()=>{
            this._dragging = false;
        });
        const light = gizmoLayer._getSharedGizmoLight();
        light.includedOnlyMeshes = light.includedOnlyMeshes.concat(this._rootMesh.getChildMeshes(false));
        const cache = {
            gizmoMeshes: this._gizmoMesh.getChildMeshes(),
            colliderMeshes: this._gizmoMesh.getChildMeshes(),
            material: this._coloredMaterial,
            hoverMaterial: this._hoverMaterial,
            disableMaterial: this._disableMaterial,
            active: false,
            dragBehavior: this.dragBehavior
        };
        this._parent?.addToAxisCache(this._gizmoMesh, cache);
        this._pointerObserver = gizmoLayer.utilityLayerScene.onPointerObservable.add((pointerInfo)=>{
            if (this._customMeshSet) {
                return;
            }
            this._isHovered = !!(cache.colliderMeshes.indexOf(pointerInfo?.pickInfo?.pickedMesh) != -1);
            if (!this._parent) {
                const material = cache.dragBehavior.enabled ? this._isHovered || this._dragging ? this._hoverMaterial : this._coloredMaterial : this._disableMaterial;
                this._setGizmoMeshMaterial(cache.gizmoMeshes, material);
            }
        });
        this.dragBehavior.onEnabledObservable.add((newState)=>{
            this._setGizmoMeshMaterial(cache.gizmoMeshes, newState ? this._coloredMaterial : this._disableMaterial);
        });
    }
    _attachedNodeChanged(value) {
        if (this.dragBehavior) {
            this.dragBehavior.enabled = value ? true : false;
        }
    }
    /**
     * If the gizmo is enabled
     */ set isEnabled(value) {
        this._isEnabled = value;
        if (!value) {
            this.attachedNode = null;
        } else {
            if (this._parent) {
                this.attachedNode = this._parent.attachedNode;
            }
        }
    }
    get isEnabled() {
        return this._isEnabled;
    }
    /**
     * Disposes of the gizmo
     */ dispose() {
        this.onSnapObservable.clear();
        this.gizmoLayer.utilityLayerScene.onPointerObservable.remove(this._pointerObserver);
        this.dragBehavior.detach();
        super.dispose();
        if (this._gizmoMesh) {
            this._gizmoMesh.dispose();
        }
        const materials = [
            this._coloredMaterial,
            this._hoverMaterial,
            this._disableMaterial
        ];
        for (const matl of materials){
            if (matl) {
                matl.dispose();
            }
        }
    }
} //# sourceMappingURL=planeDragGizmo.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Gizmos/positionGizmo.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PositionGizmo",
    ()=>PositionGizmo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/observable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.color.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gizmos$2f$gizmo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Gizmos/gizmo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gizmos$2f$axisDragGizmo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Gizmos/axisDragGizmo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gizmos$2f$planeDragGizmo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Gizmos/planeDragGizmo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Rendering$2f$utilityLayerRenderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Rendering/utilityLayerRenderer.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
class PositionGizmo extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gizmos$2f$gizmo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Gizmo"] {
    get attachedMesh() {
        return this._meshAttached;
    }
    set attachedMesh(mesh) {
        this._meshAttached = mesh;
        this._nodeAttached = mesh;
        const gizmos = [
            this.xGizmo,
            this.yGizmo,
            this.zGizmo,
            this.xPlaneGizmo,
            this.yPlaneGizmo,
            this.zPlaneGizmo
        ];
        for (const gizmo of gizmos){
            if (gizmo.isEnabled) {
                gizmo.attachedMesh = mesh;
            } else {
                gizmo.attachedMesh = null;
            }
        }
    }
    get attachedNode() {
        return this._nodeAttached;
    }
    set attachedNode(node) {
        this._meshAttached = null;
        this._nodeAttached = node;
        const gizmos = [
            this.xGizmo,
            this.yGizmo,
            this.zGizmo,
            this.xPlaneGizmo,
            this.yPlaneGizmo,
            this.zPlaneGizmo
        ];
        for (const gizmo of gizmos){
            if (gizmo.isEnabled) {
                gizmo.attachedNode = node;
            } else {
                gizmo.attachedNode = null;
            }
        }
    }
    /**
     * True when the mouse pointer is hovering a gizmo mesh
     */ get isHovered() {
        return this.xGizmo.isHovered || this.yGizmo.isHovered || this.zGizmo.isHovered || this.xPlaneGizmo.isHovered || this.yPlaneGizmo.isHovered || this.zPlaneGizmo.isHovered;
    }
    get isDragging() {
        return this.xGizmo.dragBehavior.dragging || this.yGizmo.dragBehavior.dragging || this.zGizmo.dragBehavior.dragging || this.xPlaneGizmo.dragBehavior.dragging || this.yPlaneGizmo.dragBehavior.dragging || this.zPlaneGizmo.dragBehavior.dragging;
    }
    get additionalTransformNode() {
        return this._additionalTransformNode;
    }
    set additionalTransformNode(transformNode) {
        const gizmos = [
            this.xGizmo,
            this.yGizmo,
            this.zGizmo,
            this.xPlaneGizmo,
            this.yPlaneGizmo,
            this.zPlaneGizmo
        ];
        for (const gizmo of gizmos){
            gizmo.additionalTransformNode = transformNode;
        }
    }
    /**
     * Creates a PositionGizmo
     * @param gizmoLayer The utility layer the gizmo will be added to
     * @param thickness display gizmo axis thickness
     * @param gizmoManager
     * @param options More options
     */ constructor(gizmoLayer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Rendering$2f$utilityLayerRenderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UtilityLayerRenderer"].DefaultUtilityLayer, thickness = 1, gizmoManager, options){
        super(gizmoLayer);
        /**
         * protected variables
         */ this._meshAttached = null;
        this._nodeAttached = null;
        this._observables = [];
        /** Node Caching for quick lookup */ this._gizmoAxisCache = new Map();
        /** Fires an event when any of it's sub gizmos are dragged */ this.onDragStartObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]();
        /** Fires an event when any of it's sub gizmos are being dragged */ this.onDragObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]();
        /** Fires an event when any of it's sub gizmos are released from dragging */ this.onDragEndObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * If set to true, planar drag is enabled
         */ this._planarGizmoEnabled = false;
        this.xGizmo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gizmos$2f$axisDragGizmo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AxisDragGizmo"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](1, 0, 0), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color3"].Red().scale(0.5), gizmoLayer, this, thickness);
        this.yGizmo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gizmos$2f$axisDragGizmo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AxisDragGizmo"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 1, 0), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color3"].Green().scale(0.5), gizmoLayer, this, thickness);
        this.zGizmo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gizmos$2f$axisDragGizmo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AxisDragGizmo"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, 1), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color3"].Blue().scale(0.5), gizmoLayer, this, thickness);
        this.xPlaneGizmo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gizmos$2f$planeDragGizmo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlaneDragGizmo"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](1, 0, 0), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color3"].Red().scale(0.5), this.gizmoLayer, this);
        this.yPlaneGizmo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gizmos$2f$planeDragGizmo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlaneDragGizmo"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 1, 0), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color3"].Green().scale(0.5), this.gizmoLayer, this);
        this.zPlaneGizmo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gizmos$2f$planeDragGizmo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlaneDragGizmo"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, 1), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color3"].Blue().scale(0.5), this.gizmoLayer, this);
        this.additionalTransformNode = options?.additionalTransformNode;
        // Relay drag events
        const gizmos = [
            this.xGizmo,
            this.yGizmo,
            this.zGizmo,
            this.xPlaneGizmo,
            this.yPlaneGizmo,
            this.zPlaneGizmo
        ];
        for (const gizmo of gizmos){
            gizmo.dragBehavior.onDragStartObservable.add((eventData, eventState)=>this.onDragStartObservable.notifyObservers(eventData, eventState.mask, eventState.target, eventState.currentTarget, eventState.userInfo));
            gizmo.dragBehavior.onDragObservable.add((eventData, eventState)=>this.onDragObservable.notifyObservers(eventData, eventState.mask, eventState.target, eventState.currentTarget, eventState.userInfo));
            gizmo.dragBehavior.onDragEndObservable.add((eventData, eventState)=>this.onDragEndObservable.notifyObservers(eventData, eventState.mask, eventState.target, eventState.currentTarget, eventState.userInfo));
        }
        this.attachedMesh = null;
        if (gizmoManager) {
            gizmoManager.addToAxisCache(this._gizmoAxisCache);
        } else {
            // Only subscribe to pointer event if gizmoManager isnt
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gizmos$2f$gizmo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Gizmo"].GizmoAxisPointerObserver(gizmoLayer, this._gizmoAxisCache);
        }
    }
    /**
     * If the planar drag gizmo is enabled
     * setting this will enable/disable XY, XZ and YZ planes regardless of individual gizmo settings.
     */ set planarGizmoEnabled(value) {
        this._planarGizmoEnabled = value;
        const gizmos = [
            this.xPlaneGizmo,
            this.yPlaneGizmo,
            this.zPlaneGizmo
        ];
        for (const gizmo of gizmos){
            if (gizmo) {
                gizmo.isEnabled = value;
                if (value) {
                    if (gizmo.attachedMesh) {
                        gizmo.attachedMesh = this.attachedMesh;
                    } else {
                        gizmo.attachedNode = this.attachedNode;
                    }
                }
            }
        }
    }
    get planarGizmoEnabled() {
        return this._planarGizmoEnabled;
    }
    /**
     * posture that the gizmo will be display
     * When set null, default value will be used (Quaternion(0, 0, 0, 1))
     */ get customRotationQuaternion() {
        return this._customRotationQuaternion;
    }
    set customRotationQuaternion(customRotationQuaternion) {
        this._customRotationQuaternion = customRotationQuaternion;
        const gizmos = [
            this.xGizmo,
            this.yGizmo,
            this.zGizmo,
            this.xPlaneGizmo,
            this.yPlaneGizmo,
            this.zPlaneGizmo
        ];
        for (const gizmo of gizmos){
            if (gizmo) {
                gizmo.customRotationQuaternion = customRotationQuaternion;
            }
        }
    }
    /**
     * If set the gizmo's rotation will be updated to match the attached mesh each frame (Default: true)
     * NOTE: This is only possible for meshes with uniform scaling, as otherwise it's not possible to decompose the rotation
     */ set updateGizmoRotationToMatchAttachedMesh(value) {
        this._updateGizmoRotationToMatchAttachedMesh = value;
        const gizmos = [
            this.xGizmo,
            this.yGizmo,
            this.zGizmo,
            this.xPlaneGizmo,
            this.yPlaneGizmo,
            this.zPlaneGizmo
        ];
        for (const gizmo of gizmos){
            if (gizmo) {
                gizmo.updateGizmoRotationToMatchAttachedMesh = value;
            }
        }
    }
    get updateGizmoRotationToMatchAttachedMesh() {
        return this._updateGizmoRotationToMatchAttachedMesh;
    }
    set updateGizmoPositionToMatchAttachedMesh(value) {
        this._updateGizmoPositionToMatchAttachedMesh = value;
        const gizmos = [
            this.xGizmo,
            this.yGizmo,
            this.zGizmo,
            this.xPlaneGizmo,
            this.yPlaneGizmo,
            this.zPlaneGizmo
        ];
        for (const gizmo of gizmos){
            if (gizmo) {
                gizmo.updateGizmoPositionToMatchAttachedMesh = value;
            }
        }
    }
    get updateGizmoPositionToMatchAttachedMesh() {
        return this._updateGizmoPositionToMatchAttachedMesh;
    }
    set anchorPoint(value) {
        this._anchorPoint = value;
        const gizmos = [
            this.xGizmo,
            this.yGizmo,
            this.zGizmo,
            this.xPlaneGizmo,
            this.yPlaneGizmo,
            this.zPlaneGizmo
        ];
        for (const gizmo of gizmos){
            gizmo.anchorPoint = value;
        }
    }
    get anchorPoint() {
        return this._anchorPoint;
    }
    /**
     * Set the coordinate system to use. By default it's local.
     * But it's possible for a user to tweak so its local for translation and world for rotation.
     * In that case, setting the coordinate system will change `updateGizmoRotationToMatchAttachedMesh` and `updateGizmoPositionToMatchAttachedMesh`
     */ set coordinatesMode(coordinatesMode) {
        const gizmos = [
            this.xGizmo,
            this.yGizmo,
            this.zGizmo,
            this.xPlaneGizmo,
            this.yPlaneGizmo,
            this.zPlaneGizmo
        ];
        for (const gizmo of gizmos){
            gizmo.coordinatesMode = coordinatesMode;
        }
    }
    set updateScale(value) {
        if (this.xGizmo) {
            this.xGizmo.updateScale = value;
            this.yGizmo.updateScale = value;
            this.zGizmo.updateScale = value;
        }
    }
    get updateScale() {
        return this.xGizmo.updateScale;
    }
    /**
     * Drag distance in babylon units that the gizmo will snap to when dragged (Default: 0)
     */ set snapDistance(value) {
        this._snapDistance = value;
        const gizmos = [
            this.xGizmo,
            this.yGizmo,
            this.zGizmo,
            this.xPlaneGizmo,
            this.yPlaneGizmo,
            this.zPlaneGizmo
        ];
        for (const gizmo of gizmos){
            if (gizmo) {
                gizmo.snapDistance = value;
            }
        }
    }
    get snapDistance() {
        return this._snapDistance;
    }
    /**
     * Ratio for the scale of the gizmo (Default: 1)
     */ set scaleRatio(value) {
        this._scaleRatio = value;
        const gizmos = [
            this.xGizmo,
            this.yGizmo,
            this.zGizmo,
            this.xPlaneGizmo,
            this.yPlaneGizmo,
            this.zPlaneGizmo
        ];
        for (const gizmo of gizmos){
            if (gizmo) {
                gizmo.scaleRatio = value;
            }
        }
    }
    get scaleRatio() {
        return this._scaleRatio;
    }
    /**
     * Builds Gizmo Axis Cache to enable features such as hover state preservation and graying out other axis during manipulation
     * @param mesh Axis gizmo mesh
     * @param cache Gizmo axis definition used for reactive gizmo UI
     */ addToAxisCache(mesh, cache) {
        this._gizmoAxisCache.set(mesh, cache);
    }
    /**
     * Force release the drag action by code
     */ releaseDrag() {
        this.xGizmo.dragBehavior.releaseDrag();
        this.yGizmo.dragBehavior.releaseDrag();
        this.zGizmo.dragBehavior.releaseDrag();
        this.xPlaneGizmo.dragBehavior.releaseDrag();
        this.yPlaneGizmo.dragBehavior.releaseDrag();
        this.zPlaneGizmo.dragBehavior.releaseDrag();
    }
    /**
     * Disposes of the gizmo
     */ dispose() {
        const gizmos = [
            this.xGizmo,
            this.yGizmo,
            this.zGizmo,
            this.xPlaneGizmo,
            this.yPlaneGizmo,
            this.zPlaneGizmo
        ];
        for (const gizmo of gizmos){
            if (gizmo) {
                gizmo.dispose();
            }
        }
        for (const obs of this._observables){
            this.gizmoLayer.utilityLayerScene.onPointerObservable.remove(obs);
        }
        this.onDragStartObservable.clear();
        this.onDragObservable.clear();
        this.onDragEndObservable.clear();
        super.dispose();
    }
    /**
     * CustomMeshes are not supported by this gizmo
     */ setCustomMesh() {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Error("Custom meshes are not supported on this gizmo, please set the custom meshes on the gizmos contained within this one (gizmo.xGizmo, gizmo.yGizmo, gizmo.zGizmo,gizmo.xPlaneGizmo, gizmo.yPlaneGizmo, gizmo.zPlaneGizmo)");
    }
} //# sourceMappingURL=positionGizmo.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Gizmos/scaleGizmo.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScaleGizmo",
    ()=>ScaleGizmo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/observable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.color.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$polyhedronBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/polyhedronBuilder.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gizmos$2f$gizmo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Gizmos/gizmo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gizmos$2f$axisScaleGizmo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Gizmos/axisScaleGizmo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Rendering$2f$utilityLayerRenderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Rendering/utilityLayerRenderer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$standardMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/standardMaterial.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
class ScaleGizmo extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gizmos$2f$gizmo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Gizmo"] {
    /** Default material used to render when gizmo is not disabled or hovered */ get coloredMaterial() {
        return this._coloredMaterial;
    }
    /** Material used to render when gizmo is hovered with mouse*/ get hoverMaterial() {
        return this._hoverMaterial;
    }
    /** Material used to render when gizmo is disabled. typically grey.*/ get disableMaterial() {
        return this._disableMaterial;
    }
    get attachedMesh() {
        return this._meshAttached;
    }
    set attachedMesh(mesh) {
        this._meshAttached = mesh;
        this._nodeAttached = mesh;
        const gizmos = [
            this.xGizmo,
            this.yGizmo,
            this.zGizmo,
            this.uniformScaleGizmo
        ];
        for (const gizmo of gizmos){
            if (gizmo.isEnabled) {
                gizmo.attachedMesh = mesh;
            } else {
                gizmo.attachedMesh = null;
            }
        }
    }
    get attachedNode() {
        return this._nodeAttached;
    }
    set attachedNode(node) {
        this._meshAttached = null;
        this._nodeAttached = node;
        const gizmos = [
            this.xGizmo,
            this.yGizmo,
            this.zGizmo,
            this.uniformScaleGizmo
        ];
        for (const gizmo of gizmos){
            if (gizmo.isEnabled) {
                gizmo.attachedNode = node;
            } else {
                gizmo.attachedNode = null;
            }
        }
    }
    set updateScale(value) {
        if (this.xGizmo) {
            this.xGizmo.updateScale = value;
            this.yGizmo.updateScale = value;
            this.zGizmo.updateScale = value;
        }
    }
    get updateScale() {
        return this.xGizmo.updateScale;
    }
    /**
     * True when the mouse pointer is hovering a gizmo mesh
     */ get isHovered() {
        return this.xGizmo.isHovered || this.yGizmo.isHovered || this.zGizmo.isHovered || this.uniformScaleGizmo.isHovered;
    }
    /**
     * True when the mouse pointer is dragging a gizmo mesh
     */ get isDragging() {
        return this.xGizmo.dragBehavior.dragging || this.yGizmo.dragBehavior.dragging || this.zGizmo.dragBehavior.dragging || this.uniformScaleGizmo.dragBehavior.dragging;
    }
    get additionalTransformNode() {
        return this._additionalTransformNode;
    }
    set additionalTransformNode(transformNode) {
        const gizmos = [
            this.xGizmo,
            this.yGizmo,
            this.zGizmo,
            this.uniformScaleGizmo
        ];
        for (const gizmo of gizmos){
            gizmo.additionalTransformNode = transformNode;
        }
    }
    /**
     * Creates a ScaleGizmo
     * @param gizmoLayer The utility layer the gizmo will be added to
     * @param thickness display gizmo axis thickness
     * @param gizmoManager
     * @param options More options
     */ constructor(gizmoLayer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Rendering$2f$utilityLayerRenderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UtilityLayerRenderer"].DefaultUtilityLayer, thickness = 1, gizmoManager, options){
        super(gizmoLayer);
        this._meshAttached = null;
        this._nodeAttached = null;
        this._incrementalSnap = false;
        this._sensitivity = 1;
        this._observables = [];
        /** Node Caching for quick lookup */ this._gizmoAxisCache = new Map();
        /** Fires an event when any of it's sub gizmos are dragged */ this.onDragStartObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]();
        /** Fires an event when any of it's sub gizmos are being dragged */ this.onDragObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]();
        /** Fires an event when any of it's sub gizmos are released from dragging */ this.onDragEndObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]();
        this.uniformScaleGizmo = this._createUniformScaleMesh();
        this.xGizmo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gizmos$2f$axisScaleGizmo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AxisScaleGizmo"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](1, 0, 0), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color3"].Red().scale(0.5), gizmoLayer, this, thickness);
        this.yGizmo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gizmos$2f$axisScaleGizmo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AxisScaleGizmo"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 1, 0), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color3"].Green().scale(0.5), gizmoLayer, this, thickness);
        this.zGizmo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gizmos$2f$axisScaleGizmo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AxisScaleGizmo"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, 1), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color3"].Blue().scale(0.5), gizmoLayer, this, thickness);
        this.additionalTransformNode = options?.additionalTransformNode;
        // Relay drag events
        const gizmos = [
            this.xGizmo,
            this.yGizmo,
            this.zGizmo,
            this.uniformScaleGizmo
        ];
        for (const gizmo of gizmos){
            gizmo.dragBehavior.onDragStartObservable.add((eventData, eventState)=>this.onDragStartObservable.notifyObservers(eventData, eventState.mask, eventState.target, eventState.currentTarget, eventState.userInfo));
            gizmo.dragBehavior.onDragObservable.add((eventData, eventState)=>this.onDragObservable.notifyObservers(eventData, eventState.mask, eventState.target, eventState.currentTarget, eventState.userInfo));
            gizmo.dragBehavior.onDragEndObservable.add((eventData, eventState)=>this.onDragEndObservable.notifyObservers(eventData, eventState.mask, eventState.target, eventState.currentTarget, eventState.userInfo));
        }
        this.attachedMesh = null;
        this.attachedNode = null;
        if (gizmoManager) {
            gizmoManager.addToAxisCache(this._gizmoAxisCache);
        } else {
            // Only subscribe to pointer event if gizmoManager isnt
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gizmos$2f$gizmo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Gizmo"].GizmoAxisPointerObserver(gizmoLayer, this._gizmoAxisCache);
        }
    }
    /**
     * @internal
     * Create Geometry for Gizmo
     */ _createUniformScaleMesh() {
        this._coloredMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$standardMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StandardMaterial"]("", this.gizmoLayer.utilityLayerScene);
        this._coloredMaterial.diffuseColor = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color3"].Gray();
        this._hoverMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$standardMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StandardMaterial"]("", this.gizmoLayer.utilityLayerScene);
        this._hoverMaterial.diffuseColor = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color3"].Yellow();
        this._disableMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$standardMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StandardMaterial"]("", this.gizmoLayer.utilityLayerScene);
        this._disableMaterial.diffuseColor = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color3"].Gray();
        this._disableMaterial.alpha = 0.4;
        const uniformScaleGizmo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gizmos$2f$axisScaleGizmo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AxisScaleGizmo"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 1, 0), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color3"].Gray().scale(0.5), this.gizmoLayer, this);
        uniformScaleGizmo.updateGizmoRotationToMatchAttachedMesh = false;
        uniformScaleGizmo.uniformScaling = true;
        this._uniformScalingMesh = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$polyhedronBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreatePolyhedron"])("uniform", {
            type: 1
        }, uniformScaleGizmo.gizmoLayer.utilityLayerScene);
        this._uniformScalingMesh.scaling.scaleInPlace(0.01);
        this._uniformScalingMesh.visibility = 0;
        this._octahedron = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$polyhedronBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreatePolyhedron"])("", {
            type: 1
        }, uniformScaleGizmo.gizmoLayer.utilityLayerScene);
        this._octahedron.scaling.scaleInPlace(0.007);
        this._uniformScalingMesh.addChild(this._octahedron);
        uniformScaleGizmo.setCustomMesh(this._uniformScalingMesh, true);
        const light = this.gizmoLayer._getSharedGizmoLight();
        light.includedOnlyMeshes = light.includedOnlyMeshes.concat(this._octahedron);
        const cache = {
            gizmoMeshes: [
                this._octahedron,
                this._uniformScalingMesh
            ],
            colliderMeshes: [
                this._octahedron,
                this._uniformScalingMesh
            ],
            material: this._coloredMaterial,
            hoverMaterial: this._hoverMaterial,
            disableMaterial: this._disableMaterial,
            active: false,
            dragBehavior: uniformScaleGizmo.dragBehavior
        };
        this.addToAxisCache(uniformScaleGizmo._rootMesh, cache);
        return uniformScaleGizmo;
    }
    set updateGizmoRotationToMatchAttachedMesh(value) {
        if (!value) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Warn("Setting updateGizmoRotationToMatchAttachedMesh = false on scaling gizmo is not supported.");
        } else {
            this._updateGizmoRotationToMatchAttachedMesh = value;
            const gizmos = [
                this.xGizmo,
                this.yGizmo,
                this.zGizmo,
                this.uniformScaleGizmo
            ];
            for (const gizmo of gizmos){
                if (gizmo) {
                    gizmo.updateGizmoRotationToMatchAttachedMesh = value;
                }
            }
        }
    }
    get updateGizmoRotationToMatchAttachedMesh() {
        return this._updateGizmoRotationToMatchAttachedMesh;
    }
    set anchorPoint(value) {
        this._anchorPoint = value;
        const gizmos = [
            this.xGizmo,
            this.yGizmo,
            this.zGizmo,
            this.uniformScaleGizmo
        ];
        for (const gizmo of gizmos){
            if (gizmo) {
                gizmo.anchorPoint = value;
            }
        }
    }
    get anchorPoint() {
        return this._anchorPoint;
    }
    /**
     * posture that the gizmo will be display
     * When set null, default value will be used (Quaternion(0, 0, 0, 1))
     */ get customRotationQuaternion() {
        return this._customRotationQuaternion;
    }
    set customRotationQuaternion(customRotationQuaternion) {
        this._customRotationQuaternion = customRotationQuaternion;
        const gizmos = [
            this.xGizmo,
            this.yGizmo,
            this.zGizmo,
            this.uniformScaleGizmo
        ];
        for (const gizmo of gizmos){
            if (gizmo) {
                gizmo.customRotationQuaternion = customRotationQuaternion;
            }
        }
    }
    /**
     * Set the coordinate system to use. By default it's local.
     * But it's possible for a user to tweak so its local for translation and world for rotation.
     * In that case, setting the coordinate system will change `updateGizmoRotationToMatchAttachedMesh` and `updateGizmoPositionToMatchAttachedMesh`
     */ set coordinatesMode(coordinatesMode) {
        if (coordinatesMode == 0 /* GizmoCoordinatesMode.World */ ) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Warn("Setting coordinates Mode to world on scaling gizmo is not supported.");
        }
        const gizmos = [
            this.xGizmo,
            this.yGizmo,
            this.zGizmo,
            this.uniformScaleGizmo
        ];
        for (const gizmo of gizmos){
            gizmo.coordinatesMode = 1 /* GizmoCoordinatesMode.Local */ ;
        }
    }
    /**
     * Drag distance in babylon units that the gizmo will snap to when dragged (Default: 0)
     */ set snapDistance(value) {
        this._snapDistance = value;
        const gizmos = [
            this.xGizmo,
            this.yGizmo,
            this.zGizmo,
            this.uniformScaleGizmo
        ];
        for (const gizmo of gizmos){
            if (gizmo) {
                gizmo.snapDistance = value;
            }
        }
    }
    get snapDistance() {
        return this._snapDistance;
    }
    /**
     * Incremental snap scaling (default is false). When true, with a snapDistance of 0.1, scaling will be 1.1,1.2,1.3 instead of, when false: 1.1,1.21,1.33,...
     */ set incrementalSnap(value) {
        this._incrementalSnap = value;
        const gizmos = [
            this.xGizmo,
            this.yGizmo,
            this.zGizmo,
            this.uniformScaleGizmo
        ];
        for (const gizmo of gizmos){
            if (gizmo) {
                gizmo.incrementalSnap = value;
            }
        }
    }
    get incrementalSnap() {
        return this._incrementalSnap;
    }
    /**
     * Ratio for the scale of the gizmo (Default: 1)
     */ set scaleRatio(value) {
        this._scaleRatio = value;
        const gizmos = [
            this.xGizmo,
            this.yGizmo,
            this.zGizmo,
            this.uniformScaleGizmo
        ];
        for (const gizmo of gizmos){
            if (gizmo) {
                gizmo.scaleRatio = value;
            }
        }
    }
    get scaleRatio() {
        return this._scaleRatio;
    }
    /**
     * Sensitivity factor for dragging (Default: 1)
     */ set sensitivity(value) {
        this._sensitivity = value;
        const gizmos = [
            this.xGizmo,
            this.yGizmo,
            this.zGizmo,
            this.uniformScaleGizmo
        ];
        for (const gizmo of gizmos){
            if (gizmo) {
                gizmo.sensitivity = value;
            }
        }
    }
    get sensitivity() {
        return this._sensitivity;
    }
    /**
     * Builds Gizmo Axis Cache to enable features such as hover state preservation and graying out other axis during manipulation
     * @param mesh Axis gizmo mesh
     * @param cache Gizmo axis definition used for reactive gizmo UI
     */ addToAxisCache(mesh, cache) {
        this._gizmoAxisCache.set(mesh, cache);
    }
    /**
     * Get the cache set with addToAxisCache for a specific mesh
     * @param mesh Axis gizmo mesh
     * @returns Gizmo axis definition used for reactive gizmo UI
     */ getAxisCache(mesh) {
        return this._gizmoAxisCache.get(mesh);
    }
    /**
     * Force release the drag action by code
     */ releaseDrag() {
        this.xGizmo.dragBehavior.releaseDrag();
        this.yGizmo.dragBehavior.releaseDrag();
        this.zGizmo.dragBehavior.releaseDrag();
        this.uniformScaleGizmo.dragBehavior.releaseDrag();
    }
    /**
     * Disposes of the gizmo
     */ dispose() {
        const gizmos = [
            this.xGizmo,
            this.yGizmo,
            this.zGizmo,
            this.uniformScaleGizmo
        ];
        for (const gizmo of gizmos){
            if (gizmo) {
                gizmo.dispose();
            }
        }
        for (const obs of this._observables){
            this.gizmoLayer.utilityLayerScene.onPointerObservable.remove(obs);
        }
        this.onDragStartObservable.clear();
        this.onDragObservable.clear();
        this.onDragEndObservable.clear();
        const meshes = [
            this._uniformScalingMesh,
            this._octahedron
        ];
        for (const msh of meshes){
            if (msh) {
                msh.dispose();
            }
        }
        const materials = [
            this._coloredMaterial,
            this._hoverMaterial,
            this._disableMaterial
        ];
        for (const matl of materials){
            if (matl) {
                matl.dispose();
            }
        }
    }
} //# sourceMappingURL=scaleGizmo.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Gizmos/gizmoManager.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GizmoManager",
    ()=>GizmoManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/observable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Events$2f$pointerEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Events/pointerEvents.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$abstractMesh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/abstractMesh.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Rendering$2f$utilityLayerRenderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Rendering/utilityLayerRenderer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.color.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Behaviors$2f$Meshes$2f$sixDofDragBehavior$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Behaviors/Meshes/sixDofDragBehavior.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gizmos$2f$gizmo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Gizmos/gizmo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gizmos$2f$rotationGizmo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Gizmos/rotationGizmo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gizmos$2f$positionGizmo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Gizmos/positionGizmo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gizmos$2f$scaleGizmo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Gizmos/scaleGizmo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gizmos$2f$boundingBoxGizmo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Gizmos/boundingBoxGizmo.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
class GizmoManager {
    /**
     * Utility layer that the bounding box gizmo belongs to
     */ get keepDepthUtilityLayer() {
        return this._defaultKeepDepthUtilityLayer;
    }
    /**
     * Utility layer that all gizmos besides bounding box belong to
     */ get utilityLayer() {
        return this._defaultUtilityLayer;
    }
    /**
     * True when the mouse pointer is hovering a gizmo mesh
     */ get isHovered() {
        let hovered = false;
        for(const key in this.gizmos){
            const gizmo = this.gizmos[key];
            if (gizmo && gizmo.isHovered) {
                hovered = true;
                break;
            }
        }
        return hovered;
    }
    /**
     * True when the mouse pointer is dragging a gizmo mesh
     */ get isDragging() {
        let dragging = false;
        const gizmos = [
            this.gizmos.positionGizmo,
            this.gizmos.rotationGizmo,
            this.gizmos.scaleGizmo,
            this.gizmos.boundingBoxGizmo
        ];
        for (const gizmo of gizmos){
            if (gizmo && gizmo.isDragging) {
                dragging = true;
            }
        }
        return dragging;
    }
    /**
     * Ratio for the scale of the gizmo (Default: 1)
     */ set scaleRatio(value) {
        this._scaleRatio = value;
        const gizmos = [
            this.gizmos.positionGizmo,
            this.gizmos.rotationGizmo,
            this.gizmos.scaleGizmo
        ];
        for (const gizmo of gizmos){
            if (gizmo) {
                gizmo.scaleRatio = value;
            }
        }
    }
    get scaleRatio() {
        return this._scaleRatio;
    }
    /**
     * Set the coordinate system to use. By default it's local.
     * But it's possible for a user to tweak so its local for translation and world for rotation.
     * In that case, setting the coordinate system will change `updateGizmoRotationToMatchAttachedMesh` and `updateGizmoPositionToMatchAttachedMesh`
     */ set coordinatesMode(coordinatesMode) {
        this._coordinatesMode = coordinatesMode;
        const gizmos = [
            this.gizmos.positionGizmo,
            this.gizmos.rotationGizmo,
            this.gizmos.scaleGizmo
        ];
        for (const gizmo of gizmos){
            if (gizmo) {
                gizmo.coordinatesMode = coordinatesMode;
            }
        }
    }
    get coordinatesMode() {
        return this._coordinatesMode;
    }
    /**
     * The mesh the gizmo's is attached to
     */ get attachedMesh() {
        return this._attachedMesh;
    }
    /**
     * The node the gizmo's is attached to
     */ get attachedNode() {
        return this._attachedNode;
    }
    /**
     * Additional transform node that will be used to transform all the gizmos
     */ get additionalTransformNode() {
        return this._additionalTransformNode;
    }
    /**
     * Instantiates a gizmo manager
     * @param _scene the scene to overlay the gizmos on top of
     * @param thickness display gizmo axis thickness
     * @param utilityLayer the layer where gizmos are rendered
     * @param keepDepthUtilityLayer the layer where occluded gizmos are rendered
     */ constructor(_scene, thickness = 1, utilityLayer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Rendering$2f$utilityLayerRenderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UtilityLayerRenderer"].DefaultUtilityLayer, keepDepthUtilityLayer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Rendering$2f$utilityLayerRenderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UtilityLayerRenderer"].DefaultKeepDepthUtilityLayer){
        this._scene = _scene;
        /** When true, the gizmo will be detached from the current object when a pointer down occurs with an empty picked mesh */ this.clearGizmoOnEmptyPointerEvent = false;
        /** When true (default), picking to attach a new mesh is enabled. This works in sync with inspector autopicking. */ this.enableAutoPicking = true;
        /** Fires an event when the manager is attached to a mesh */ this.onAttachedToMeshObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]();
        /** Fires an event when the manager is attached to a node */ this.onAttachedToNodeObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]();
        this._gizmosEnabled = {
            positionGizmo: false,
            rotationGizmo: false,
            scaleGizmo: false,
            boundingBoxGizmo: false
        };
        this._pointerObservers = [];
        this._attachedMesh = null;
        this._attachedNode = null;
        this._boundingBoxColor = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color3"].FromHexString("#0984e3");
        this._thickness = 1;
        this._scaleRatio = 1;
        this._coordinatesMode = 1 /* GizmoCoordinatesMode.Local */ ;
        /** Node Caching for quick lookup */ this._gizmoAxisCache = new Map();
        /**
         * When bounding box gizmo is enabled, this can be used to track drag/end events
         */ this.boundingBoxDragBehavior = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Behaviors$2f$Meshes$2f$sixDofDragBehavior$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SixDofDragBehavior"]();
        /**
         * Array of meshes which will have the gizmo attached when a pointer selected them. If null, all meshes are attachable. (Default: null)
         */ this.attachableMeshes = null;
        /**
         * Array of nodes which will have the gizmo attached when a pointer selected them. If null, all nodes are attachable. (Default: null)
         */ this.attachableNodes = null;
        /**
         * If pointer events should perform attaching/detaching a gizmo, if false this can be done manually via attachToMesh/attachToNode. (Default: true)
         */ this.usePointerToAttachGizmos = true;
        this._defaultUtilityLayer = utilityLayer;
        this._defaultKeepDepthUtilityLayer = keepDepthUtilityLayer;
        this._defaultKeepDepthUtilityLayer.utilityLayerScene.autoClearDepthAndStencil = false;
        this._thickness = thickness;
        this.gizmos = {
            positionGizmo: null,
            rotationGizmo: null,
            scaleGizmo: null,
            boundingBoxGizmo: null
        };
        const attachToMeshPointerObserver = this._attachToMeshPointerObserver(_scene);
        const gizmoAxisPointerObserver = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gizmos$2f$gizmo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Gizmo"].GizmoAxisPointerObserver(this._defaultUtilityLayer, this._gizmoAxisCache);
        this._pointerObservers = [
            attachToMeshPointerObserver,
            gizmoAxisPointerObserver
        ];
    }
    /**
     * @internal
     * Subscribes to pointer down events, for attaching and detaching mesh
     * @param scene The scene layer the observer will be added to
     * @returns the pointer observer
     */ _attachToMeshPointerObserver(scene) {
        // Instantiate/dispose gizmos based on pointer actions
        const pointerObserver = scene.onPointerObservable.add((pointerInfo)=>{
            if (!this.usePointerToAttachGizmos) {
                return;
            }
            if (pointerInfo.type == __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Events$2f$pointerEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointerEventTypes"].POINTERDOWN) {
                if (pointerInfo.pickInfo && pointerInfo.pickInfo.pickedMesh) {
                    if (this.enableAutoPicking) {
                        let node = pointerInfo.pickInfo.pickedMesh;
                        if (this.attachableMeshes == null) {
                            // Attach to the most parent node
                            while(node && node.parent != null){
                                node = node.parent;
                            }
                        } else {
                            // Attach to the parent node that is an attachableMesh
                            let found = false;
                            for (const mesh of this.attachableMeshes){
                                if (node && (node == mesh || node.isDescendantOf(mesh))) {
                                    node = mesh;
                                    found = true;
                                }
                            }
                            if (!found) {
                                node = null;
                            }
                        }
                        if (node instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$abstractMesh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AbstractMesh"]) {
                            if (this._attachedMesh != node) {
                                this.attachToMesh(node);
                            }
                        } else {
                            if (this.clearGizmoOnEmptyPointerEvent) {
                                this.attachToMesh(null);
                            }
                        }
                    }
                } else {
                    if (this.clearGizmoOnEmptyPointerEvent) {
                        this.attachToMesh(null);
                    }
                }
            }
        });
        return pointerObserver;
    }
    /**
     * Attaches a set of gizmos to the specified mesh
     * @param mesh The mesh the gizmo's should be attached to
     */ attachToMesh(mesh) {
        if (this._attachedMesh) {
            this._attachedMesh.removeBehavior(this.boundingBoxDragBehavior);
        }
        if (this._attachedNode) {
            this._attachedNode.removeBehavior(this.boundingBoxDragBehavior);
        }
        this._attachedMesh = mesh;
        this._attachedNode = null;
        for(const key in this.gizmos){
            const gizmo = this.gizmos[key];
            if (gizmo && this._gizmosEnabled[key]) {
                gizmo.attachedMesh = mesh;
            }
        }
        if (this.boundingBoxGizmoEnabled && this._attachedMesh) {
            this._attachedMesh.addBehavior(this.boundingBoxDragBehavior);
        }
        this.onAttachedToMeshObservable.notifyObservers(mesh);
    }
    /**
     * Attaches a set of gizmos to the specified node
     * @param node The node the gizmo's should be attached to
     */ attachToNode(node) {
        if (this._attachedMesh) {
            this._attachedMesh.removeBehavior(this.boundingBoxDragBehavior);
        }
        if (this._attachedNode) {
            this._attachedNode.removeBehavior(this.boundingBoxDragBehavior);
        }
        this._attachedMesh = null;
        this._attachedNode = node;
        for(const key in this.gizmos){
            const gizmo = this.gizmos[key];
            if (gizmo && this._gizmosEnabled[key]) {
                gizmo.attachedNode = node;
            }
        }
        if (this.boundingBoxGizmoEnabled && this._attachedNode) {
            this._attachedNode.addBehavior(this.boundingBoxDragBehavior);
        }
        this.onAttachedToNodeObservable.notifyObservers(node);
    }
    /**
     * If the position gizmo is enabled
     */ set positionGizmoEnabled(value) {
        if (value) {
            if (!this.gizmos.positionGizmo) {
                this.gizmos.positionGizmo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gizmos$2f$positionGizmo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PositionGizmo"](this._defaultUtilityLayer, this._thickness, this);
            }
            if (this._attachedNode) {
                this.gizmos.positionGizmo.attachedNode = this._attachedNode;
            } else {
                this.gizmos.positionGizmo.attachedMesh = this._attachedMesh;
            }
        } else if (this.gizmos.positionGizmo) {
            this.gizmos.positionGizmo.attachedNode = null;
        }
        this._gizmosEnabled.positionGizmo = value;
        this._setAdditionalTransformNode();
    }
    get positionGizmoEnabled() {
        return this._gizmosEnabled.positionGizmo;
    }
    /**
     * If the rotation gizmo is enabled
     */ set rotationGizmoEnabled(value) {
        if (value) {
            if (!this.gizmos.rotationGizmo) {
                this.gizmos.rotationGizmo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gizmos$2f$rotationGizmo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RotationGizmo"](this._defaultUtilityLayer, 32, false, this._thickness, this);
            }
            if (this._attachedNode) {
                this.gizmos.rotationGizmo.attachedNode = this._attachedNode;
            } else {
                this.gizmos.rotationGizmo.attachedMesh = this._attachedMesh;
            }
        } else if (this.gizmos.rotationGizmo) {
            this.gizmos.rotationGizmo.attachedNode = null;
        }
        this._gizmosEnabled.rotationGizmo = value;
        this._setAdditionalTransformNode();
    }
    get rotationGizmoEnabled() {
        return this._gizmosEnabled.rotationGizmo;
    }
    /**
     * If the scale gizmo is enabled
     */ set scaleGizmoEnabled(value) {
        if (value) {
            this.gizmos.scaleGizmo = this.gizmos.scaleGizmo || new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gizmos$2f$scaleGizmo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScaleGizmo"](this._defaultUtilityLayer, this._thickness, this);
            if (this._attachedNode) {
                this.gizmos.scaleGizmo.attachedNode = this._attachedNode;
            } else {
                this.gizmos.scaleGizmo.attachedMesh = this._attachedMesh;
            }
        } else if (this.gizmos.scaleGizmo) {
            this.gizmos.scaleGizmo.attachedNode = null;
        }
        this._gizmosEnabled.scaleGizmo = value;
        this._setAdditionalTransformNode();
    }
    get scaleGizmoEnabled() {
        return this._gizmosEnabled.scaleGizmo;
    }
    /**
     * If the boundingBox gizmo is enabled
     */ set boundingBoxGizmoEnabled(value) {
        if (value) {
            this.gizmos.boundingBoxGizmo = this.gizmos.boundingBoxGizmo || new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gizmos$2f$boundingBoxGizmo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoundingBoxGizmo"](this._boundingBoxColor, this._defaultKeepDepthUtilityLayer);
            if (this._attachedMesh) {
                this.gizmos.boundingBoxGizmo.attachedMesh = this._attachedMesh;
            } else {
                this.gizmos.boundingBoxGizmo.attachedNode = this._attachedNode;
            }
            if (this._attachedMesh) {
                this._attachedMesh.removeBehavior(this.boundingBoxDragBehavior);
                this._attachedMesh.addBehavior(this.boundingBoxDragBehavior);
            } else if (this._attachedNode) {
                this._attachedNode.removeBehavior(this.boundingBoxDragBehavior);
                this._attachedNode.addBehavior(this.boundingBoxDragBehavior);
            }
        } else if (this.gizmos.boundingBoxGizmo) {
            if (this._attachedMesh) {
                this._attachedMesh.removeBehavior(this.boundingBoxDragBehavior);
            } else if (this._attachedNode) {
                this._attachedNode.removeBehavior(this.boundingBoxDragBehavior);
            }
            this.gizmos.boundingBoxGizmo.attachedNode = null;
        }
        this._gizmosEnabled.boundingBoxGizmo = value;
        this._setAdditionalTransformNode();
    }
    get boundingBoxGizmoEnabled() {
        return this._gizmosEnabled.boundingBoxGizmo;
    }
    /**
     * Sets the additional transform applied to all the gizmos.
     * @See Gizmo.additionalTransformNode for more detail
     */ set additionalTransformNode(node) {
        this._additionalTransformNode = node;
        this._setAdditionalTransformNode();
    }
    _setAdditionalTransformNode() {
        for(const key in this.gizmos){
            const gizmo = this.gizmos[key];
            if (gizmo && this._gizmosEnabled[key]) {
                gizmo.additionalTransformNode = this._additionalTransformNode;
            }
        }
    }
    /**
     * Builds Gizmo Axis Cache to enable features such as hover state preservation and graying out other axis during manipulation
     * @param gizmoAxisCache Gizmo axis definition used for reactive gizmo UI
     */ addToAxisCache(gizmoAxisCache) {
        if (gizmoAxisCache.size > 0) {
            gizmoAxisCache.forEach((v, k)=>{
                this._gizmoAxisCache.set(k, v);
            });
        }
    }
    /**
     * Force release the drag action by code
     */ releaseDrag() {
        const gizmos = [
            this.gizmos.positionGizmo,
            this.gizmos.rotationGizmo,
            this.gizmos.scaleGizmo,
            this.gizmos.boundingBoxGizmo
        ];
        for (const gizmo of gizmos){
            gizmo?.releaseDrag();
        }
    }
    /**
     * Disposes of the gizmo manager
     */ dispose() {
        for (const observer of this._pointerObservers){
            this._scene.onPointerObservable.remove(observer);
        }
        for(const key in this.gizmos){
            const gizmo = this.gizmos[key];
            if (gizmo) {
                gizmo.dispose();
            }
        }
        if (this._defaultKeepDepthUtilityLayer !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Rendering$2f$utilityLayerRenderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UtilityLayerRenderer"]._DefaultKeepDepthUtilityLayer) {
            this._defaultKeepDepthUtilityLayer?.dispose();
        }
        if (this._defaultUtilityLayer !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Rendering$2f$utilityLayerRenderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UtilityLayerRenderer"]._DefaultUtilityLayer) {
            this._defaultUtilityLayer?.dispose();
        }
        this.boundingBoxDragBehavior.detach();
        this.onAttachedToMeshObservable.clear();
    }
} //# sourceMappingURL=gizmoManager.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Gizmos/lightGizmo.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LightGizmo",
    ()=>LightGizmo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.color.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/mesh.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gizmos$2f$gizmo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Gizmos/gizmo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Rendering$2f$utilityLayerRenderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Rendering/utilityLayerRenderer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$standardMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/standardMaterial.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$hemisphericLight$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Lights/hemisphericLight.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$directionalLight$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Lights/directionalLight.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$sphereBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/sphereBuilder.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$hemisphereBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/hemisphereBuilder.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$spotLight$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Lights/spotLight.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$transformNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/transformNode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Events$2f$pointerEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Events/pointerEvents.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/observable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$cylinderBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/cylinderBuilder.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/logger.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
class LightGizmo extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gizmos$2f$gizmo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Gizmo"] {
    /**
     * Creates a LightGizmo
     * @param gizmoLayer The utility layer the gizmo will be added to
     */ constructor(gizmoLayer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Rendering$2f$utilityLayerRenderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UtilityLayerRenderer"].DefaultUtilityLayer){
        super(gizmoLayer);
        this._cachedPosition = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
        this._cachedForward = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, 1);
        this._pointerObserver = null;
        /**
         * Event that fires each time the gizmo is clicked
         */ this.onClickedObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]();
        this._light = null;
        this.attachedMesh = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"]("", this.gizmoLayer.utilityLayerScene);
        this._attachedMeshParent = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$transformNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransformNode"]("parent", this.gizmoLayer.utilityLayerScene);
        this.attachedMesh.parent = this._attachedMeshParent;
        this._material = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$standardMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StandardMaterial"]("light", this.gizmoLayer.utilityLayerScene);
        this._material.diffuseColor = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color3"](0.5, 0.5, 0.5);
        this._material.specularColor = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color3"](0.1, 0.1, 0.1);
        this._pointerObserver = gizmoLayer.utilityLayerScene.onPointerObservable.add((pointerInfo)=>{
            if (!this._light) {
                return;
            }
            this._isHovered = !!(pointerInfo.pickInfo && this._rootMesh.getChildMeshes().indexOf(pointerInfo.pickInfo.pickedMesh) != -1);
            if (this._isHovered && pointerInfo.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Events$2f$pointerEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointerEventTypes"].POINTERDOWN && pointerInfo.event.button === 0) {
                this.onClickedObservable.notifyObservers(this._light);
            }
        });
    }
    /**
     * Override attachedNode because lightgizmo only support attached mesh
     * It will return the attached mesh (if any) and setting an attached node will log
     * a warning
     */ get attachedNode() {
        return this.attachedMesh;
    }
    set attachedNode(value) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Warn("Nodes cannot be attached to LightGizmo. Attach to a mesh instead.");
    }
    /**
     * The light that the gizmo is attached to
     */ set light(light) {
        this._light = light;
        if (light) {
            // Create the mesh for the given light type
            if (this._lightMesh) {
                this._lightMesh.dispose();
            }
            if (light instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$hemisphericLight$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HemisphericLight"]) {
                this._lightMesh = LightGizmo._CreateHemisphericLightMesh(this.gizmoLayer.utilityLayerScene);
            } else if (light instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$directionalLight$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DirectionalLight"]) {
                this._lightMesh = LightGizmo._CreateDirectionalLightMesh(this.gizmoLayer.utilityLayerScene);
            } else if (light instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$spotLight$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SpotLight"]) {
                this._lightMesh = LightGizmo._CreateSpotLightMesh(this.gizmoLayer.utilityLayerScene);
            } else {
                this._lightMesh = LightGizmo._CreatePointLightMesh(this.gizmoLayer.utilityLayerScene);
            }
            const children = this._lightMesh.getChildMeshes(false);
            for (const m of children){
                m.material = this._material;
            }
            this._lightMesh.parent = this._rootMesh;
            // Add lighting to the light gizmo
            const gizmoLight = this.gizmoLayer._getSharedGizmoLight();
            gizmoLight.includedOnlyMeshes = gizmoLight.includedOnlyMeshes.concat(this._lightMesh.getChildMeshes(false));
            this._lightMesh.rotationQuaternion = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"]();
            if (!this.attachedMesh.reservedDataStore) {
                this.attachedMesh.reservedDataStore = {};
            }
            this.attachedMesh.reservedDataStore.lightGizmo = this;
            if (light.parent) {
                this._attachedMeshParent.freezeWorldMatrix(light.parent.getWorldMatrix());
            }
            // Get update position and direction if the light has it
            if (light.position) {
                this.attachedMesh.position.copyFrom(light.position);
                this.attachedMesh.computeWorldMatrix(true);
                this._cachedPosition.copyFrom(this.attachedMesh.position);
            }
            if (light.direction) {
                this.attachedMesh.setDirection(light.direction);
                this.attachedMesh.computeWorldMatrix(true);
                const forward = this._getMeshForward();
                this._cachedForward.copyFrom(forward);
            }
            this._update();
        }
    }
    get light() {
        return this._light;
    }
    /**
     * Gets the material used to render the light gizmo
     */ get material() {
        return this._material;
    }
    /**
     * @internal
     * returns mesh forward
     */ _getMeshForward() {
        let forward = this.attachedMesh.forward;
        if (this.attachedMesh.getScene().useRightHandedSystem) {
            forward.negateToRef(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0]);
            forward = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0];
        }
        return forward;
    }
    /**
     * @internal
     * Updates the gizmo to match the attached mesh's position/rotation
     */ _update() {
        super._update();
        if (!this._light) {
            return;
        }
        if (this._light.parent) {
            this._attachedMeshParent.freezeWorldMatrix(this._light.parent.getWorldMatrix());
        }
        // For light position and direction, a dirty flag is set to true in the setter
        // It means setting values individually or copying values will not call setter and
        // dirty flag will not be set to true. Hence creating a new Vector3.
        if (this._light.position) {
            // If the gizmo is moved update the light otherwise update the gizmo to match the light
            if (!this.attachedMesh.position.equals(this._cachedPosition)) {
                // update light to match gizmo
                const position = this.attachedMesh.position;
                this._light.position = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](position.x, position.y, position.z);
                this._cachedPosition.copyFrom(this.attachedMesh.position);
            } else {
                // update gizmo to match light
                this.attachedMesh.position.copyFrom(this._light.position);
                this.attachedMesh.computeWorldMatrix(true);
                this._cachedPosition.copyFrom(this.attachedMesh.position);
            }
        }
        if (this._light.direction) {
            // If the gizmo is moved update the light otherwise update the gizmo to match the light
            const forward = this._getMeshForward();
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].DistanceSquared(forward, this._cachedForward) > 0.0001) {
                // update light to match gizmo
                const direction = forward;
                this._light.direction = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](direction.x, direction.y, direction.z);
                this._cachedForward.copyFrom(forward);
            } else if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].DistanceSquared(forward, this._light.direction) > 0.0001) {
                // update gizmo to match light
                this.attachedMesh.setDirection(this._light.direction);
                this.attachedMesh.computeWorldMatrix(true);
                this._cachedForward.copyFrom(forward);
            }
        }
    }
    /**
     * Disposes of the light gizmo
     */ dispose() {
        this.onClickedObservable.clear();
        this.gizmoLayer.utilityLayerScene.onPointerObservable.remove(this._pointerObserver);
        this._material.dispose();
        super.dispose();
        this._attachedMeshParent.dispose();
    }
    static _CreateHemisphericLightMesh(scene) {
        const root = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"]("hemisphereLight", scene);
        const hemisphere = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$hemisphereBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreateHemisphere"])(root.name, {
            segments: 10,
            diameter: 1
        }, scene);
        hemisphere.position.z = -0.15;
        hemisphere.rotation.x = Math.PI / 2;
        hemisphere.parent = root;
        const lines = this._CreateLightLines(3, scene);
        lines.parent = root;
        root.scaling.scaleInPlace(LightGizmo._Scale);
        root.rotation.x = Math.PI / 2;
        return root;
    }
    static _CreatePointLightMesh(scene) {
        const root = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"]("pointLight", scene);
        const sphere = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$sphereBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreateSphere"])(root.name, {
            segments: 10,
            diameter: 1
        }, scene);
        sphere.rotation.x = Math.PI / 2;
        sphere.parent = root;
        const lines = this._CreateLightLines(5, scene);
        lines.parent = root;
        root.scaling.scaleInPlace(LightGizmo._Scale);
        root.rotation.x = Math.PI / 2;
        return root;
    }
    static _CreateSpotLightMesh(scene) {
        const root = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"]("spotLight", scene);
        const sphere = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$sphereBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreateSphere"])(root.name, {
            segments: 10,
            diameter: 1
        }, scene);
        sphere.parent = root;
        const hemisphere = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$hemisphereBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreateHemisphere"])(root.name, {
            segments: 10,
            diameter: 2
        }, scene);
        hemisphere.parent = root;
        hemisphere.rotation.x = -Math.PI / 2;
        const lines = this._CreateLightLines(2, scene);
        lines.parent = root;
        root.scaling.scaleInPlace(LightGizmo._Scale);
        root.rotation.x = Math.PI / 2;
        return root;
    }
    static _CreateDirectionalLightMesh(scene) {
        const root = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"]("directionalLight", scene);
        const mesh = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](root.name, scene);
        mesh.parent = root;
        const sphere = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$sphereBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreateSphere"])(root.name, {
            diameter: 1.2,
            segments: 10
        }, scene);
        sphere.parent = mesh;
        const line = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$cylinderBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreateCylinder"])(root.name, {
            updatable: false,
            height: 6,
            diameterTop: 0.3,
            diameterBottom: 0.3,
            tessellation: 6,
            subdivisions: 1
        }, scene);
        line.parent = mesh;
        let left = line.clone(root.name);
        left.scaling.y = 0.5;
        left.position.x += 1.25;
        let right = line.clone(root.name);
        right.scaling.y = 0.5;
        right.position.x += -1.25;
        const arrowHead = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$cylinderBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreateCylinder"])(root.name, {
            updatable: false,
            height: 1,
            diameterTop: 0,
            diameterBottom: 0.6,
            tessellation: 6,
            subdivisions: 1
        }, scene);
        arrowHead.position.y += 3;
        arrowHead.parent = mesh;
        left = arrowHead.clone(root.name);
        left.position.y = 1.5;
        left.position.x += 1.25;
        right = arrowHead.clone(root.name);
        right.position.y = 1.5;
        right.position.x += -1.25;
        mesh.scaling.scaleInPlace(LightGizmo._Scale);
        mesh.rotation.z = Math.PI / 2;
        mesh.rotation.y = Math.PI / 2;
        return root;
    }
}
// Static helper methods
LightGizmo._Scale = 0.007;
/**
 * Creates the lines for a light mesh
 * @param levels
 * @param scene
 * @returns the light lines mesh
 */ LightGizmo._CreateLightLines = (levels, scene)=>{
    const distFromSphere = 1.2;
    const root = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"]("root", scene);
    root.rotation.x = Math.PI / 2;
    // Create the top line, this will be cloned for all other lines
    const linePivot = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"]("linePivot", scene);
    linePivot.parent = root;
    const line = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$cylinderBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreateCylinder"])("line", {
        updatable: false,
        height: 2,
        diameterTop: 0.2,
        diameterBottom: 0.3,
        tessellation: 6,
        subdivisions: 1
    }, scene);
    line.position.y = line.scaling.y / 2 + distFromSphere;
    line.parent = linePivot;
    if (levels < 2) {
        return linePivot;
    }
    for(let i = 0; i < 4; i++){
        const l = linePivot.clone("lineParentClone");
        l.rotation.z = Math.PI / 4;
        l.rotation.y = Math.PI / 2 + Math.PI / 2 * i;
        l.getChildMeshes()[0].scaling.y = 0.5;
        l.getChildMeshes()[0].scaling.x = l.getChildMeshes()[0].scaling.z = 0.8;
        l.getChildMeshes()[0].position.y = l.getChildMeshes()[0].scaling.y / 2 + distFromSphere;
    }
    if (levels < 3) {
        return root;
    }
    for(let i = 0; i < 4; i++){
        const l = linePivot.clone("linePivotClone");
        l.rotation.z = Math.PI / 2;
        l.rotation.y = Math.PI / 2 * i;
    }
    if (levels < 4) {
        return root;
    }
    for(let i = 0; i < 4; i++){
        const l = linePivot.clone("linePivotClone");
        l.rotation.z = Math.PI + Math.PI / 4;
        l.rotation.y = Math.PI / 2 + Math.PI / 2 * i;
        l.getChildMeshes()[0].scaling.y = 0.5;
        l.getChildMeshes()[0].scaling.x = l.getChildMeshes()[0].scaling.z = 0.8;
        l.getChildMeshes()[0].position.y = l.getChildMeshes()[0].scaling.y / 2 + distFromSphere;
    }
    if (levels < 5) {
        return root;
    }
    const l = linePivot.clone("linePivotClone");
    l.rotation.z = Math.PI;
    return root;
}; //# sourceMappingURL=lightGizmo.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Gizmos/cameraGizmo.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CameraGizmo",
    ()=>CameraGizmo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.color.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/mesh.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gizmos$2f$gizmo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Gizmos/gizmo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Rendering$2f$utilityLayerRenderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Rendering/utilityLayerRenderer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$standardMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/standardMaterial.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$boxBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/boxBuilder.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$cylinderBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/cylinderBuilder.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$linesBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/linesBuilder.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Events$2f$pointerEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Events/pointerEvents.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/observable.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
class CameraGizmo extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gizmos$2f$gizmo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Gizmo"] {
    /**
     * Creates a CameraGizmo
     * @param gizmoLayer The utility layer the gizmo will be added to
     * @param gizmoColor Camera mesh color. Default is Gray
     * @param frustumLinesColor Frustum lines color. Default is White
     */ constructor(gizmoLayer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Rendering$2f$utilityLayerRenderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UtilityLayerRenderer"].DefaultUtilityLayer, gizmoColor, frustumLinesColor){
        super(gizmoLayer);
        this._pointerObserver = null;
        /**
         * Event that fires each time the gizmo is clicked
         */ this.onClickedObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]();
        this._camera = null;
        this._invProjection = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"]();
        this._material = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$standardMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StandardMaterial"]("cameraGizmoMaterial", this.gizmoLayer.utilityLayerScene);
        this._frustumLinesColor = frustumLinesColor;
        this._material.diffuseColor = gizmoColor ?? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color3"](0.5, 0.5, 0.5);
        this._material.specularColor = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color3"](0.1, 0.1, 0.1);
        this._pointerObserver = gizmoLayer.utilityLayerScene.onPointerObservable.add((pointerInfo)=>{
            if (!this._camera) {
                return;
            }
            this._isHovered = !!(pointerInfo.pickInfo && this._rootMesh.getChildMeshes().indexOf(pointerInfo.pickInfo.pickedMesh) != -1);
            if (this._isHovered && pointerInfo.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Events$2f$pointerEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointerEventTypes"].POINTERDOWN && pointerInfo.event.button === 0) {
                this.onClickedObservable.notifyObservers(this._camera);
            }
        });
    }
    /** Gets or sets a boolean indicating if frustum lines must be rendered (true by default)) */ get displayFrustum() {
        return this._cameraLinesMesh.isEnabled();
    }
    set displayFrustum(value) {
        this._cameraLinesMesh.setEnabled(value);
    }
    /**
     * The camera that the gizmo is attached to
     */ set camera(camera) {
        this._camera = camera;
        this.attachedNode = camera;
        if (camera) {
            // Create the mesh for the given camera
            if (!this._customMeshSet) {
                if (this._cameraMesh) {
                    this._cameraMesh.dispose();
                }
                this._cameraMesh = CameraGizmo._CreateCameraMesh(this.gizmoLayer.utilityLayerScene);
                const childMeshes = this._cameraMesh.getChildMeshes(false);
                for (const m of childMeshes){
                    m.material = this._material;
                }
                this._cameraMesh.parent = this._rootMesh;
            }
            if (this._cameraLinesMesh) {
                this._cameraLinesMesh.dispose();
            }
            const linesColor = this._frustumLinesColor?.toColor4(1) ?? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color4"](1, 1, 1, 1);
            this._cameraLinesMesh = CameraGizmo._CreateCameraFrustum(this.gizmoLayer.utilityLayerScene, linesColor);
            this._cameraLinesMesh.parent = this._rootMesh;
            if (this.gizmoLayer.utilityLayerScene.activeCamera && this.gizmoLayer.utilityLayerScene.activeCamera != camera && this.gizmoLayer.utilityLayerScene.activeCamera.maxZ < camera.maxZ) {
                this.gizmoLayer.utilityLayerScene.activeCamera.maxZ = camera.maxZ;
            }
            if (!this.attachedNode.reservedDataStore) {
                this.attachedNode.reservedDataStore = {};
            }
            this.attachedNode.reservedDataStore.cameraGizmo = this;
            // Add lighting to the camera gizmo
            const gizmoLight = this.gizmoLayer._getSharedGizmoLight();
            gizmoLight.includedOnlyMeshes = gizmoLight.includedOnlyMeshes.concat(this._cameraMesh.getChildMeshes(false));
            this._update();
        }
    }
    get camera() {
        return this._camera;
    }
    /**
     * Gets the material used to render the camera gizmo
     */ get material() {
        return this._material;
    }
    /**
     * @internal
     * Updates the gizmo to match the attached mesh's position/rotation
     */ _update() {
        super._update();
        if (!this._camera) {
            return;
        }
        // frustum matrix
        this._camera.getProjectionMatrix().invertToRef(this._invProjection);
        this._cameraLinesMesh.setPivotMatrix(this._invProjection, false);
        this._cameraLinesMesh.scaling.x = 1 / this._rootMesh.scaling.x;
        this._cameraLinesMesh.scaling.y = 1 / this._rootMesh.scaling.y;
        this._cameraLinesMesh.scaling.z = 1 / this._rootMesh.scaling.z;
        // take care of coordinate system in camera scene to properly display the mesh with the good Y axis orientation in this scene
        this._cameraMesh.parent = null;
        this._cameraMesh.rotation.y = Math.PI * 0.5 * (this._camera.getScene().useRightHandedSystem ? 1 : -1);
        this._cameraMesh.parent = this._rootMesh;
    }
    /**
     * Disposes and replaces the current camera mesh in the gizmo with the specified mesh
     * @param mesh The mesh to replace the default mesh of the camera gizmo
     */ setCustomMesh(mesh) {
        if (mesh.getScene() != this.gizmoLayer.utilityLayerScene) {
            // eslint-disable-next-line no-throw-literal
            throw "When setting a custom mesh on a gizmo, the custom meshes scene must be the same as the gizmos (eg. gizmo.gizmoLayer.utilityLayerScene)";
        }
        if (this._cameraMesh) {
            this._cameraMesh.dispose();
        }
        this._cameraMesh = mesh;
        this._cameraMesh.parent = this._rootMesh;
        this._customMeshSet = true;
    }
    /**
     * Disposes of the camera gizmo
     */ dispose() {
        this.onClickedObservable.clear();
        this.gizmoLayer.utilityLayerScene.onPointerObservable.remove(this._pointerObserver);
        if (this._cameraMesh) {
            this._cameraMesh.dispose();
        }
        if (this._cameraLinesMesh) {
            this._cameraLinesMesh.dispose();
        }
        this._material.dispose();
        super.dispose();
    }
    static _CreateCameraMesh(scene) {
        const root = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"]("rootCameraGizmo", scene);
        const mesh = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](root.name, scene);
        mesh.parent = root;
        const box = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$boxBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreateBox"])(root.name, {
            width: 1.0,
            height: 0.8,
            depth: 0.5
        }, scene);
        box.parent = mesh;
        const cyl1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$cylinderBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreateCylinder"])(root.name, {
            height: 0.5,
            diameterTop: 0.8,
            diameterBottom: 0.8
        }, scene);
        cyl1.parent = mesh;
        cyl1.position.y = 0.3;
        cyl1.position.x = -0.6;
        cyl1.rotation.x = Math.PI * 0.5;
        const cyl2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$cylinderBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreateCylinder"])(root.name, {
            height: 0.5,
            diameterTop: 0.6,
            diameterBottom: 0.6
        }, scene);
        cyl2.parent = mesh;
        cyl2.position.y = 0.5;
        cyl2.position.x = 0.4;
        cyl2.rotation.x = Math.PI * 0.5;
        const cyl3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$cylinderBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreateCylinder"])(root.name, {
            height: 0.5,
            diameterTop: 0.5,
            diameterBottom: 0.5
        }, scene);
        cyl3.parent = mesh;
        cyl3.position.y = 0.0;
        cyl3.position.x = 0.6;
        cyl3.rotation.z = Math.PI * 0.5;
        root.scaling.scaleInPlace(CameraGizmo._Scale);
        mesh.position.x = -0.9;
        return root;
    }
    static _CreateCameraFrustum(scene, linesColor) {
        const root = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"]("rootCameraGizmo", scene);
        const mesh = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](root.name, scene);
        mesh.parent = root;
        const lines = [];
        const colors = [];
        for(let y = 0; y < 4; y += 2){
            for(let x = 0; x < 4; x += 2){
                lines.push([
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](-1 + x, -1 + y, -1),
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](-1 + x, -1 + y, 1)
                ]);
                lines.push([
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](-1, -1 + x, -1 + y),
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](1, -1 + x, -1 + y)
                ]);
                lines.push([
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](-1 + x, -1, -1 + y),
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](-1 + x, 1, -1 + y)
                ]);
                colors.push([
                    linesColor,
                    linesColor
                ], [
                    linesColor,
                    linesColor
                ], [
                    linesColor,
                    linesColor
                ]);
            }
        }
        const line = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$linesBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreateLineSystem"])("lines", {
            lines,
            colors
        }, scene);
        line.parent = mesh;
        line.alwaysSelectAsActiveMesh = true;
        line.isPickable = false;
        return root;
    }
}
// Static helper methods
CameraGizmo._Scale = 0.05; //# sourceMappingURL=cameraGizmo.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Gizmos/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gizmos$2f$axisDragGizmo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Gizmos/axisDragGizmo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gizmos$2f$axisScaleGizmo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Gizmos/axisScaleGizmo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gizmos$2f$boundingBoxGizmo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Gizmos/boundingBoxGizmo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gizmos$2f$gizmo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Gizmos/gizmo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gizmos$2f$gizmoManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Gizmos/gizmoManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gizmos$2f$planeRotationGizmo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Gizmos/planeRotationGizmo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gizmos$2f$positionGizmo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Gizmos/positionGizmo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gizmos$2f$rotationGizmo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Gizmos/rotationGizmo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gizmos$2f$scaleGizmo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Gizmos/scaleGizmo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gizmos$2f$lightGizmo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Gizmos/lightGizmo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gizmos$2f$cameraGizmo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Gizmos/cameraGizmo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gizmos$2f$planeDragGizmo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Gizmos/planeDragGizmo.js [app-client] (ecmascript)"); //# sourceMappingURL=index.js.map
;
;
;
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
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Gizmos/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AxisDragGizmo",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gizmos$2f$axisDragGizmo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AxisDragGizmo"],
    "AxisScaleGizmo",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gizmos$2f$axisScaleGizmo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AxisScaleGizmo"],
    "BoundingBoxGizmo",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gizmos$2f$boundingBoxGizmo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoundingBoxGizmo"],
    "CameraGizmo",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gizmos$2f$cameraGizmo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CameraGizmo"],
    "DragOperation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gizmos$2f$boundingBoxGizmo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DragOperation"],
    "Gizmo",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gizmos$2f$gizmo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Gizmo"],
    "GizmoAnchorPoint",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gizmos$2f$gizmo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GizmoAnchorPoint"],
    "GizmoCoordinatesMode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gizmos$2f$gizmo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GizmoCoordinatesMode"],
    "GizmoManager",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gizmos$2f$gizmoManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GizmoManager"],
    "LightGizmo",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gizmos$2f$lightGizmo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LightGizmo"],
    "PlaneDragGizmo",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gizmos$2f$planeDragGizmo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlaneDragGizmo"],
    "PlaneRotationGizmo",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gizmos$2f$planeRotationGizmo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlaneRotationGizmo"],
    "PositionGizmo",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gizmos$2f$positionGizmo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PositionGizmo"],
    "RotationGizmo",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gizmos$2f$rotationGizmo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RotationGizmo"],
    "ScaleGizmo",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gizmos$2f$scaleGizmo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScaleGizmo"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gizmos$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Gizmos/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gizmos$2f$axisDragGizmo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Gizmos/axisDragGizmo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gizmos$2f$axisScaleGizmo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Gizmos/axisScaleGizmo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gizmos$2f$boundingBoxGizmo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Gizmos/boundingBoxGizmo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gizmos$2f$gizmo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Gizmos/gizmo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gizmos$2f$gizmoManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Gizmos/gizmoManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gizmos$2f$planeRotationGizmo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Gizmos/planeRotationGizmo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gizmos$2f$positionGizmo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Gizmos/positionGizmo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gizmos$2f$rotationGizmo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Gizmos/rotationGizmo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gizmos$2f$scaleGizmo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Gizmos/scaleGizmo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gizmos$2f$lightGizmo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Gizmos/lightGizmo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gizmos$2f$cameraGizmo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Gizmos/cameraGizmo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gizmos$2f$planeDragGizmo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Gizmos/planeDragGizmo.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=dcdbf_%40babylonjs_core_Gizmos_d32810e6._.js.map