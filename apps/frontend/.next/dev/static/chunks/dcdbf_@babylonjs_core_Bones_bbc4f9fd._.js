(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Bones/bone.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Bone",
    ()=>Bone
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$arrayTools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/arrayTools.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/node.js [app-client] (ecmascript)");
;
;
;
class Bone extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node"] {
    /** @internal */ get _matrix() {
        this._compose();
        return this._localMatrix;
    }
    /** @internal */ set _matrix(value) {
        // skip if the matrices are the same
        if (value.updateFlag === this._localMatrix.updateFlag && !this._needToCompose) {
            return;
        }
        this._needToCompose = false; // in case there was a pending compose
        this._localMatrix.copyFrom(value);
        this._markAsDirtyAndDecompose();
    }
    /**
     * Create a new bone
     * @param name defines the bone name
     * @param skeleton defines the parent skeleton
     * @param parentBone defines the parent (can be null if the bone is the root)
     * @param localMatrix defines the local matrix (default: identity)
     * @param restMatrix defines the rest matrix (default: localMatrix)
     * @param bindMatrix defines the bind matrix (default: localMatrix)
     * @param index defines index of the bone in the hierarchy (default: null)
     */ constructor(/**
     * defines the bone name
     */ name, skeleton, parentBone = null, localMatrix = null, restMatrix = null, bindMatrix = null, index = null){
        super(name, skeleton.getScene(), false);
        this.name = name;
        /**
         * Gets the list of child bones
         */ this.children = [];
        /** Gets the animations associated with this bone */ this.animations = [];
        /**
         * @internal Internal only
         * Set this value to map this bone to a different index in the transform matrices
         * Set this value to -1 to exclude the bone from the transform matrices
         */ this._index = null;
        this._scalingDeterminant = 1;
        this._needToDecompose = true;
        this._needToCompose = false;
        /** @internal */ this._linkedTransformNode = null;
        /** @internal */ this._waitingTransformNodeId = null;
        this._skeleton = skeleton;
        this._localMatrix = localMatrix?.clone() ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].Identity();
        this._restMatrix = restMatrix ?? this._localMatrix.clone();
        this._bindMatrix = bindMatrix ?? this._localMatrix.clone();
        this._index = index;
        this._absoluteMatrix = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"]();
        this._absoluteBindMatrix = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"]();
        this._absoluteInverseBindMatrix = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"]();
        this._finalMatrix = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"]();
        skeleton.bones.push(this);
        this.setParent(parentBone, false);
        this._updateAbsoluteBindMatrices();
    }
    /**
     * Gets the current object class name.
     * @returns the class name
     */ getClassName() {
        return "Bone";
    }
    // Members
    /**
     * Gets the parent skeleton
     * @returns a skeleton
     */ getSkeleton() {
        return this._skeleton;
    }
    get parent() {
        return this._parentNode;
    }
    /**
     * Gets parent bone
     * @returns a bone or null if the bone is the root of the bone hierarchy
     */ getParent() {
        return this.parent;
    }
    /**
     * Returns an array containing the children of the bone
     * @returns an array containing the children of the bone (can be empty if the bone has no children)
     */ getChildren() {
        return this.children;
    }
    /**
     * Gets the node index in matrix array generated for rendering
     * @returns the node index
     */ getIndex() {
        return this._index === null ? this.getSkeleton().bones.indexOf(this) : this._index;
    }
    set parent(newParent) {
        this.setParent(newParent);
    }
    /**
     * Sets the parent bone
     * @param parent defines the parent (can be null if the bone is the root)
     * @param updateAbsoluteBindMatrices defines if the absolute bind and absolute inverse bind matrices must be updated
     */ setParent(parent, updateAbsoluteBindMatrices = true) {
        if (this.parent === parent) {
            return;
        }
        if (this.parent) {
            const index = this.parent.children.indexOf(this);
            if (index !== -1) {
                this.parent.children.splice(index, 1);
            }
        }
        this._parentNode = parent;
        if (this.parent) {
            this.parent.children.push(this);
        }
        if (updateAbsoluteBindMatrices) {
            this._updateAbsoluteBindMatrices();
        }
        this.markAsDirty();
    }
    /**
     * Gets the local matrix
     * @returns the local matrix
     */ getLocalMatrix() {
        this._compose();
        return this._localMatrix;
    }
    /**
     * Gets the bind matrix
     * @returns the bind matrix
     */ getBindMatrix() {
        return this._bindMatrix;
    }
    /**
     * Gets the bind matrix.
     * @returns the bind matrix
     * @deprecated Please use getBindMatrix instead
     */ getBaseMatrix() {
        return this.getBindMatrix();
    }
    /**
     * Gets the rest matrix
     * @returns the rest matrix
     */ getRestMatrix() {
        return this._restMatrix;
    }
    /**
     * Gets the rest matrix
     * @returns the rest matrix
     * @deprecated Please use getRestMatrix instead
     */ getRestPose() {
        return this.getRestMatrix();
    }
    /**
     * Sets the rest matrix
     * @param matrix the local-space rest matrix to set for this bone
     */ setRestMatrix(matrix) {
        this._restMatrix.copyFrom(matrix);
    }
    /**
     * Sets the rest matrix
     * @param matrix the local-space rest to set for this bone
     * @deprecated Please use setRestMatrix instead
     */ setRestPose(matrix) {
        this.setRestMatrix(matrix);
    }
    /**
     * Gets the bind matrix
     * @returns the bind matrix
     * @deprecated Please use getBindMatrix instead
     */ getBindPose() {
        return this.getBindMatrix();
    }
    /**
     * Sets the bind matrix
     * This will trigger a recomputation of the absolute bind and absolute inverse bind matrices for this bone and its children
     * Note that the local matrix will also be set with the matrix passed in parameter!
     * @param matrix the local-space bind matrix to set for this bone
     */ setBindMatrix(matrix) {
        this.updateMatrix(matrix);
    }
    /**
     * Sets the bind matrix
     * @param matrix the local-space bind to set for this bone
     * @deprecated Please use setBindMatrix instead
     */ setBindPose(matrix) {
        this.setBindMatrix(matrix);
    }
    /**
     * Gets the matrix used to store the final world transformation of the bone (ie. the matrix sent to shaders)
     * @returns the final world matrix
     */ getFinalMatrix() {
        return this._finalMatrix;
    }
    /**
     * Gets the matrix used to store the final world transformation of the bone (ie. the matrix sent to shaders)
     * @deprecated Please use getFinalMatrix instead
     * @returns the final world matrix
     */ getWorldMatrix() {
        return this.getFinalMatrix();
    }
    /**
     * Sets the local matrix to the rest matrix
     */ returnToRest() {
        if (this._linkedTransformNode) {
            const localScaling = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0];
            const localRotation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Quaternion[0];
            const localPosition = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[1];
            this.getRestMatrix().decompose(localScaling, localRotation, localPosition);
            this._linkedTransformNode.position.copyFrom(localPosition);
            this._linkedTransformNode.rotationQuaternion = this._linkedTransformNode.rotationQuaternion ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"].Identity();
            this._linkedTransformNode.rotationQuaternion.copyFrom(localRotation);
            this._linkedTransformNode.scaling.copyFrom(localScaling);
        } else {
            this._matrix = this._restMatrix;
        }
    }
    /**
     * Gets the inverse of the bind matrix, in world space (relative to the skeleton root)
     * @returns the inverse bind matrix, in world space
     */ getAbsoluteInverseBindMatrix() {
        return this._absoluteInverseBindMatrix;
    }
    /**
     * Gets the inverse of the bind matrix, in world space (relative to the skeleton root)
     * @returns the inverse bind matrix, in world space
     * @deprecated Please use getAbsoluteInverseBindMatrix instead
     */ getInvertedAbsoluteTransform() {
        return this.getAbsoluteInverseBindMatrix();
    }
    /**
     * Gets the bone matrix, in world space (relative to the skeleton root)
     * @returns the bone matrix, in world space
     */ getAbsoluteMatrix() {
        this._skeleton.computeAbsoluteMatrices();
        return this._absoluteMatrix;
    }
    /**
     * Gets the bone matrix, in world space (relative to the skeleton root)
     * @returns the bone matrix, in world space
     * @deprecated Please use getAbsoluteMatrix instead
     */ getAbsoluteTransform() {
        return this.getAbsoluteMatrix();
    }
    /**
     * Links with the given transform node.
     * The local matrix of this bone is overwritten by the transform of the node every frame.
     * @param transformNode defines the transform node to link to
     */ linkTransformNode(transformNode) {
        if (this._linkedTransformNode) {
            this._skeleton._numBonesWithLinkedTransformNode--;
        }
        this._linkedTransformNode = transformNode;
        if (this._linkedTransformNode) {
            this._skeleton._numBonesWithLinkedTransformNode++;
        }
    }
    // Properties (matches TransformNode properties)
    /**
     * Gets the node used to drive the bone's transformation
     * @returns a transform node or null
     */ getTransformNode() {
        return this._linkedTransformNode;
    }
    /** Gets or sets current position (in local space) */ get position() {
        this._decompose();
        return this._localPosition;
    }
    set position(newPosition) {
        this._decompose();
        this._localPosition.copyFrom(newPosition);
        this._markAsDirtyAndCompose();
    }
    /** Gets or sets current rotation (in local space) */ get rotation() {
        return this.getRotation();
    }
    set rotation(newRotation) {
        this.setRotation(newRotation);
    }
    /** Gets or sets current rotation quaternion (in local space) */ get rotationQuaternion() {
        this._decompose();
        return this._localRotation;
    }
    set rotationQuaternion(newRotation) {
        this.setRotationQuaternion(newRotation);
    }
    /** Gets or sets current scaling (in local space) */ get scaling() {
        return this.getScale();
    }
    set scaling(newScaling) {
        this.setScale(newScaling);
    }
    /**
     * Gets the animation properties override
     */ get animationPropertiesOverride() {
        return this._skeleton.animationPropertiesOverride;
    }
    // Methods
    _decompose() {
        if (!this._needToDecompose) {
            return;
        }
        this._needToDecompose = false;
        if (!this._localScaling) {
            this._localScaling = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
            this._localRotation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"].Zero();
            this._localPosition = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        }
        this._localMatrix.decompose(this._localScaling, this._localRotation, this._localPosition);
    }
    _compose() {
        if (!this._needToCompose) {
            return;
        }
        if (!this._localScaling) {
            this._needToCompose = false;
            return;
        }
        this._needToCompose = false;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].ComposeToRef(this._localScaling, this._localRotation, this._localPosition, this._localMatrix);
    }
    /**
     * Update the bind (and optionally the local) matrix
     * @param bindMatrix defines the new matrix to set to the bind/local matrix, in local space
     * @param updateAbsoluteBindMatrices defines if the absolute bind and absolute inverse bind matrices must be recomputed (default: true)
     * @param updateLocalMatrix defines if the local matrix should also be updated with the matrix passed in parameter (default: true)
     */ updateMatrix(bindMatrix, updateAbsoluteBindMatrices = true, updateLocalMatrix = true) {
        this._bindMatrix.copyFrom(bindMatrix);
        if (updateAbsoluteBindMatrices) {
            this._updateAbsoluteBindMatrices();
        }
        if (updateLocalMatrix) {
            this._matrix = bindMatrix;
        } else {
            this.markAsDirty();
        }
    }
    /**
     * @internal
     */ _updateAbsoluteBindMatrices(bindMatrix, updateChildren = true) {
        if (!bindMatrix) {
            bindMatrix = this._bindMatrix;
        }
        if (this.parent) {
            bindMatrix.multiplyToRef(this.parent._absoluteBindMatrix, this._absoluteBindMatrix);
        } else {
            this._absoluteBindMatrix.copyFrom(bindMatrix);
        }
        this._absoluteBindMatrix.invertToRef(this._absoluteInverseBindMatrix);
        if (updateChildren) {
            for(let index = 0; index < this.children.length; index++){
                this.children[index]._updateAbsoluteBindMatrices();
            }
        }
        this._scalingDeterminant = this._absoluteBindMatrix.determinant() < 0 ? -1 : 1;
    }
    /**
     * Flag the bone as dirty (Forcing it to update everything)
     * @returns this bone
     */ markAsDirty() {
        this._currentRenderId++;
        this._childUpdateId++;
        this._skeleton._markAsDirty();
        return this;
    }
    /** @internal */ _markAsDirtyAndCompose() {
        this.markAsDirty();
        this._needToCompose = true;
    }
    _markAsDirtyAndDecompose() {
        this.markAsDirty();
        this._needToDecompose = true;
    }
    _updatePosition(vec, space = 0 /* Space.LOCAL */ , tNode, translationMode = true) {
        const lm = this.getLocalMatrix();
        if (space == 0 /* Space.LOCAL */ ) {
            if (translationMode) {
                lm.addAtIndex(12, vec.x);
                lm.addAtIndex(13, vec.y);
                lm.addAtIndex(14, vec.z);
            } else {
                lm.setTranslationFromFloats(vec.x, vec.y, vec.z);
            }
        } else {
            const tmat = Bone._TmpMats[0];
            const tvec = Bone._TmpVecs[0];
            if (this.parent) {
                tmat.copyFrom(this.parent.getAbsoluteMatrix());
                if (tNode) {
                    tmat.multiplyToRef(tNode.getWorldMatrix(), tmat);
                }
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].IdentityToRef(tmat);
            }
            if (translationMode) {
                tmat.setTranslationFromFloats(0, 0, 0);
            }
            tmat.invert();
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinatesToRef(vec, tmat, tvec);
            if (translationMode) {
                lm.addAtIndex(12, tvec.x);
                lm.addAtIndex(13, tvec.y);
                lm.addAtIndex(14, tvec.z);
            } else {
                lm.setTranslationFromFloats(tvec.x, tvec.y, tvec.z);
            }
        }
        this._markAsDirtyAndDecompose();
    }
    /**
     * Translate the bone in local or world space
     * @param vec The amount to translate the bone
     * @param space The space that the translation is in (default: Space.LOCAL)
     * @param tNode A TransformNode whose world matrix is to be applied to the calculated absolute matrix. In most cases, you'll want to pass the mesh associated with the skeleton from which this bone comes. Used only when space=Space.WORLD
     */ translate(vec, space = 0 /* Space.LOCAL */ , tNode) {
        this._updatePosition(vec, space, tNode, true);
    }
    /**
     * Set the position of the bone in local or world space
     * @param position The position to set the bone
     * @param space The space that the position is in (default: Space.LOCAL)
     * @param tNode A TransformNode whose world matrix is to be applied to the calculated absolute matrix. In most cases, you'll want to pass the mesh associated with the skeleton from which this bone comes. Used only when space=Space.WORLD
     */ setPosition(position, space = 0 /* Space.LOCAL */ , tNode) {
        this._updatePosition(position, space, tNode, false);
    }
    /**
     * Set the absolute position of the bone (world space)
     * @param position The position to set the bone
     * @param tNode A TransformNode whose world matrix is to be applied to the calculated absolute matrix. In most cases, you'll want to pass the mesh associated with the skeleton from which this bone comes. Used only when space=Space.WORLD
     */ setAbsolutePosition(position, tNode) {
        this.setPosition(position, 1 /* Space.WORLD */ , tNode);
    }
    /**
     * Scale the bone on the x, y and z axes (in local space)
     * @param x The amount to scale the bone on the x axis
     * @param y The amount to scale the bone on the y axis
     * @param z The amount to scale the bone on the z axis
     * @param scaleChildren sets this to true if children of the bone should be scaled as well (false by default)
     */ scale(x, y, z, scaleChildren = false) {
        const locMat = this.getLocalMatrix();
        // Apply new scaling on top of current local matrix
        const scaleMat = Bone._TmpMats[0];
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].ScalingToRef(x, y, z, scaleMat);
        scaleMat.multiplyToRef(locMat, locMat);
        // Invert scaling matrix and apply the inverse to all children
        scaleMat.invert();
        for (const child of this.children){
            const cm = child.getLocalMatrix();
            cm.multiplyToRef(scaleMat, cm);
            cm.multiplyAtIndex(12, x);
            cm.multiplyAtIndex(13, y);
            cm.multiplyAtIndex(14, z);
            child._markAsDirtyAndDecompose();
        }
        this._markAsDirtyAndDecompose();
        if (scaleChildren) {
            for (const child of this.children){
                child.scale(x, y, z, scaleChildren);
            }
        }
    }
    /**
     * Set the bone scaling in local space
     * @param scale defines the scaling vector
     */ setScale(scale) {
        this._decompose();
        this._localScaling.copyFrom(scale);
        this._markAsDirtyAndCompose();
    }
    /**
     * Gets the current scaling in local space
     * @returns the current scaling vector
     */ getScale() {
        this._decompose();
        return this._localScaling;
    }
    /**
     * Gets the current scaling in local space and stores it in a target vector
     * @param result defines the target vector
     */ getScaleToRef(result) {
        this._decompose();
        result.copyFrom(this._localScaling);
    }
    /**
     * Set the yaw, pitch, and roll of the bone in local or world space
     * @param yaw The rotation of the bone on the y axis
     * @param pitch The rotation of the bone on the x axis
     * @param roll The rotation of the bone on the z axis
     * @param space The space that the axes of rotation are in
     * @param tNode A TransformNode whose world matrix is to be applied to the calculated absolute matrix. In most cases, you'll want to pass the mesh associated with the skeleton from which this bone comes. Used only when space=Space.WORLD
     */ setYawPitchRoll(yaw, pitch, roll, space = 0 /* Space.LOCAL */ , tNode) {
        if (space === 0 /* Space.LOCAL */ ) {
            const quat = Bone._TmpQuat;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"].RotationYawPitchRollToRef(yaw, pitch, roll, quat);
            this.setRotationQuaternion(quat, space, tNode);
            return;
        }
        const rotMatInv = Bone._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(rotMatInv, tNode)) {
            return;
        }
        const rotMat = Bone._TmpMats[1];
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].RotationYawPitchRollToRef(yaw, pitch, roll, rotMat);
        rotMatInv.multiplyToRef(rotMat, rotMat);
        this._rotateWithMatrix(rotMat, space, tNode);
    }
    /**
     * Add a rotation to the bone on an axis in local or world space
     * @param axis The axis to rotate the bone on
     * @param amount The amount to rotate the bone
     * @param space The space that the axis is in
     * @param tNode A TransformNode whose world matrix is to be applied to the calculated absolute matrix. In most cases, you'll want to pass the mesh associated with the skeleton from which this bone comes. Used only when space=Space.WORLD
     */ rotate(axis, amount, space = 0 /* Space.LOCAL */ , tNode) {
        const rmat = Bone._TmpMats[0];
        rmat.setTranslationFromFloats(0, 0, 0);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].RotationAxisToRef(axis, amount, rmat);
        this._rotateWithMatrix(rmat, space, tNode);
    }
    /**
     * Set the rotation of the bone to a particular axis angle in local or world space
     * @param axis The axis to rotate the bone on
     * @param angle The angle that the bone should be rotated to
     * @param space The space that the axis is in
     * @param tNode A TransformNode whose world matrix is to be applied to the calculated absolute matrix. In most cases, you'll want to pass the mesh associated with the skeleton from which this bone comes. Used only when space=Space.WORLD
     */ setAxisAngle(axis, angle, space = 0 /* Space.LOCAL */ , tNode) {
        if (space === 0 /* Space.LOCAL */ ) {
            const quat = Bone._TmpQuat;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"].RotationAxisToRef(axis, angle, quat);
            this.setRotationQuaternion(quat, space, tNode);
            return;
        }
        const rotMatInv = Bone._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(rotMatInv, tNode)) {
            return;
        }
        const rotMat = Bone._TmpMats[1];
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].RotationAxisToRef(axis, angle, rotMat);
        rotMatInv.multiplyToRef(rotMat, rotMat);
        this._rotateWithMatrix(rotMat, space, tNode);
    }
    /**
     * Set the euler rotation of the bone in local or world space
     * @param rotation The euler rotation that the bone should be set to
     * @param space The space that the rotation is in
     * @param tNode A TransformNode whose world matrix is to be applied to the calculated absolute matrix. In most cases, you'll want to pass the mesh associated with the skeleton from which this bone comes. Used only when space=Space.WORLD
     */ setRotation(rotation, space = 0 /* Space.LOCAL */ , tNode) {
        this.setYawPitchRoll(rotation.y, rotation.x, rotation.z, space, tNode);
    }
    /**
     * Set the quaternion rotation of the bone in local or world space
     * @param quat The quaternion rotation that the bone should be set to
     * @param space The space that the rotation is in
     * @param tNode A TransformNode whose world matrix is to be applied to the calculated absolute matrix. In most cases, you'll want to pass the mesh associated with the skeleton from which this bone comes. Used only when space=Space.WORLD
     */ setRotationQuaternion(quat, space = 0 /* Space.LOCAL */ , tNode) {
        if (space === 0 /* Space.LOCAL */ ) {
            this._decompose();
            this._localRotation.copyFrom(quat);
            this._markAsDirtyAndCompose();
            return;
        }
        const rotMatInv = Bone._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(rotMatInv, tNode)) {
            return;
        }
        const rotMat = Bone._TmpMats[1];
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].FromQuaternionToRef(quat, rotMat);
        rotMatInv.multiplyToRef(rotMat, rotMat);
        this._rotateWithMatrix(rotMat, space, tNode);
    }
    /**
     * Set the rotation matrix of the bone in local or world space
     * @param rotMat The rotation matrix that the bone should be set to
     * @param space The space that the rotation is in
     * @param tNode A TransformNode whose world matrix is to be applied to the calculated absolute matrix. In most cases, you'll want to pass the mesh associated with the skeleton from which this bone comes. Used only when space=Space.WORLD
     */ setRotationMatrix(rotMat, space = 0 /* Space.LOCAL */ , tNode) {
        if (space === 0 /* Space.LOCAL */ ) {
            const quat = Bone._TmpQuat;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"].FromRotationMatrixToRef(rotMat, quat);
            this.setRotationQuaternion(quat, space, tNode);
            return;
        }
        const rotMatInv = Bone._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(rotMatInv, tNode)) {
            return;
        }
        const rotMat2 = Bone._TmpMats[1];
        rotMat2.copyFrom(rotMat);
        rotMatInv.multiplyToRef(rotMat, rotMat2);
        this._rotateWithMatrix(rotMat2, space, tNode);
    }
    _rotateWithMatrix(rmat, space = 0 /* Space.LOCAL */ , tNode) {
        const lmat = this.getLocalMatrix();
        const lx = lmat.m[12];
        const ly = lmat.m[13];
        const lz = lmat.m[14];
        const parent = this.getParent();
        const parentScale = Bone._TmpMats[3];
        const parentScaleInv = Bone._TmpMats[4];
        if (parent && space == 1 /* Space.WORLD */ ) {
            if (tNode) {
                parentScale.copyFrom(tNode.getWorldMatrix());
                parent.getAbsoluteMatrix().multiplyToRef(parentScale, parentScale);
            } else {
                parentScale.copyFrom(parent.getAbsoluteMatrix());
            }
            parentScaleInv.copyFrom(parentScale);
            parentScaleInv.invert();
            lmat.multiplyToRef(parentScale, lmat);
            lmat.multiplyToRef(rmat, lmat);
            lmat.multiplyToRef(parentScaleInv, lmat);
        } else {
            if (space == 1 /* Space.WORLD */  && tNode) {
                parentScale.copyFrom(tNode.getWorldMatrix());
                parentScaleInv.copyFrom(parentScale);
                parentScaleInv.invert();
                lmat.multiplyToRef(parentScale, lmat);
                lmat.multiplyToRef(rmat, lmat);
                lmat.multiplyToRef(parentScaleInv, lmat);
            } else {
                lmat.multiplyToRef(rmat, lmat);
            }
        }
        lmat.setTranslationFromFloats(lx, ly, lz);
        this._markAsDirtyAndDecompose();
    }
    _getAbsoluteInverseMatrixUnscaledToRef(rotMatInv, tNode) {
        const scaleMatrix = Bone._TmpMats[2];
        rotMatInv.copyFrom(this.getAbsoluteMatrix());
        if (tNode) {
            rotMatInv.multiplyToRef(tNode.getWorldMatrix(), rotMatInv);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].ScalingToRef(tNode.scaling.x, tNode.scaling.y, tNode.scaling.z, scaleMatrix);
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].IdentityToRef(scaleMatrix);
        }
        rotMatInv.invert();
        if (isNaN(rotMatInv.m[0])) {
            // Matrix failed to invert.
            // This can happen if scale is zero for example.
            return false;
        }
        scaleMatrix.multiplyAtIndex(0, this._scalingDeterminant);
        rotMatInv.multiplyToRef(scaleMatrix, rotMatInv);
        return true;
    }
    /**
     * Get the position of the bone in local or world space
     * @param space The space that the returned position is in
     * @param tNode A TransformNode whose world matrix is to be applied to the calculated absolute matrix. In most cases, you'll want to pass the mesh associated with the skeleton from which this bone comes. Used only when space=Space.WORLD
     * @returns The position of the bone
     */ getPosition(space = 0 /* Space.LOCAL */ , tNode = null) {
        const pos = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        this.getPositionToRef(space, tNode, pos);
        return pos;
    }
    /**
     * Copy the position of the bone to a vector3 in local or world space
     * @param space The space that the returned position is in
     * @param tNode A TransformNode whose world matrix is to be applied to the calculated absolute matrix. In most cases, you'll want to pass the mesh associated with the skeleton from which this bone comes. Used only when space=Space.WORLD
     * @param result The vector3 to copy the position to
     */ getPositionToRef(space = 0 /* Space.LOCAL */ , tNode, result) {
        if (space == 0 /* Space.LOCAL */ ) {
            const lm = this.getLocalMatrix();
            result.x = lm.m[12];
            result.y = lm.m[13];
            result.z = lm.m[14];
        } else {
            const tmat = Bone._TmpMats[0].copyFrom(this.getAbsoluteMatrix());
            if (tNode) {
                tmat.multiplyToRef(tNode.getWorldMatrix(), tmat);
            }
            result.x = tmat.m[12];
            result.y = tmat.m[13];
            result.z = tmat.m[14];
        }
    }
    /**
     * Get the absolute position of the bone (world space)
     * @param tNode A TransformNode whose world matrix is to be applied to the calculated absolute matrix. In most cases, you'll want to pass the mesh associated with the skeleton from which this bone comes. Used only when space=Space.WORLD
     * @returns The absolute position of the bone
     */ getAbsolutePosition(tNode = null) {
        const pos = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        this.getPositionToRef(1 /* Space.WORLD */ , tNode, pos);
        return pos;
    }
    /**
     * Copy the absolute position of the bone (world space) to the result param
     * @param tNode A TransformNode whose world matrix is to be applied to the calculated absolute matrix. In most cases, you'll want to pass the mesh associated with the skeleton from which this bone comes. Used only when space=Space.WORLD
     * @param result The vector3 to copy the absolute position to
     */ getAbsolutePositionToRef(tNode, result) {
        this.getPositionToRef(1 /* Space.WORLD */ , tNode, result);
    }
    /**
     * Compute the absolute matrices of this bone and its children
     */ computeAbsoluteMatrices() {
        this._compose();
        if (this.parent) {
            this._localMatrix.multiplyToRef(this.parent._absoluteMatrix, this._absoluteMatrix);
        } else {
            this._absoluteMatrix.copyFrom(this._localMatrix);
            const poseMatrix = this._skeleton.getPoseMatrix();
            if (poseMatrix) {
                this._absoluteMatrix.multiplyToRef(poseMatrix, this._absoluteMatrix);
            }
        }
        const children = this.children;
        const len = children.length;
        for(let i = 0; i < len; i++){
            children[i].computeAbsoluteMatrices();
        }
    }
    /**
     * Compute the absolute matrices of this bone and its children
     * @deprecated Please use computeAbsoluteMatrices instead
     */ computeAbsoluteTransforms() {
        this.computeAbsoluteMatrices();
    }
    /**
     * Get the world direction from an axis that is in the local space of the bone
     * @param localAxis The local direction that is used to compute the world direction
     * @param tNode A TransformNode whose world matrix is to be applied to the calculated absolute matrix. In most cases, you'll want to pass the mesh associated with the skeleton from which this bone comes. Used only when space=Space.WORLD
     * @returns The world direction
     */ getDirection(localAxis, tNode = null) {
        const result = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        this.getDirectionToRef(localAxis, tNode, result);
        return result;
    }
    /**
     * Copy the world direction to a vector3 from an axis that is in the local space of the bone
     * @param localAxis The local direction that is used to compute the world direction
     * @param tNode A TransformNode whose world matrix is to be applied to the calculated absolute matrix. In most cases, you'll want to pass the mesh associated with the skeleton from which this bone comes. Used only when space=Space.WORLD
     * @param result The vector3 that the world direction will be copied to
     */ getDirectionToRef(localAxis, tNode = null, result) {
        const tMat = Bone._TmpMats[0].copyFrom(this.getAbsoluteMatrix());
        if (tNode) {
            tMat.multiplyToRef(tNode.getWorldMatrix(), tMat);
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].TransformNormalToRef(localAxis, tMat, result);
        result.normalize();
    }
    /**
     * Get the euler rotation of the bone in local or world space
     * @param space The space that the rotation should be in
     * @param tNode A TransformNode whose world matrix is to be applied to the calculated absolute matrix. In most cases, you'll want to pass the mesh associated with the skeleton from which this bone comes. Used only when space=Space.WORLD
     * @returns The euler rotation
     */ getRotation(space = 0 /* Space.LOCAL */ , tNode = null) {
        const result = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        this.getRotationToRef(space, tNode, result);
        return result;
    }
    /**
     * Copy the euler rotation of the bone to a vector3.  The rotation can be in either local or world space
     * @param space The space that the rotation should be in
     * @param tNode A TransformNode whose world matrix is to be applied to the calculated absolute matrix. In most cases, you'll want to pass the mesh associated with the skeleton from which this bone comes. Used only when space=Space.WORLD
     * @param result The vector3 that the rotation should be copied to
     */ getRotationToRef(space = 0 /* Space.LOCAL */ , tNode = null, result) {
        const quat = Bone._TmpQuat;
        this.getRotationQuaternionToRef(space, tNode, quat);
        quat.toEulerAnglesToRef(result);
    }
    /**
     * Get the quaternion rotation of the bone in either local or world space
     * @param space The space that the rotation should be in
     * @param tNode A TransformNode whose world matrix is to be applied to the calculated absolute matrix. In most cases, you'll want to pass the mesh associated with the skeleton from which this bone comes. Used only when space=Space.WORLD
     * @returns The quaternion rotation
     */ getRotationQuaternion(space = 0 /* Space.LOCAL */ , tNode = null) {
        const result = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"].Identity();
        this.getRotationQuaternionToRef(space, tNode, result);
        return result;
    }
    /**
     * Copy the quaternion rotation of the bone to a quaternion.  The rotation can be in either local or world space
     * @param space The space that the rotation should be in
     * @param tNode A TransformNode whose world matrix is to be applied to the calculated absolute matrix. In most cases, you'll want to pass the mesh associated with the skeleton from which this bone comes. Used only when space=Space.WORLD
     * @param result The quaternion that the rotation should be copied to
     */ getRotationQuaternionToRef(space = 0 /* Space.LOCAL */ , tNode = null, result) {
        if (space == 0 /* Space.LOCAL */ ) {
            this._decompose();
            result.copyFrom(this._localRotation);
        } else {
            const mat = Bone._TmpMats[0];
            const amat = this.getAbsoluteMatrix();
            if (tNode) {
                amat.multiplyToRef(tNode.getWorldMatrix(), mat);
            } else {
                mat.copyFrom(amat);
            }
            mat.multiplyAtIndex(0, this._scalingDeterminant);
            mat.multiplyAtIndex(1, this._scalingDeterminant);
            mat.multiplyAtIndex(2, this._scalingDeterminant);
            mat.decompose(undefined, result, undefined);
        }
    }
    /**
     * Get the rotation matrix of the bone in local or world space
     * @param space The space that the rotation should be in
     * @param tNode A TransformNode whose world matrix is to be applied to the calculated absolute matrix. In most cases, you'll want to pass the mesh associated with the skeleton from which this bone comes. Used only when space=Space.WORLD
     * @returns The rotation matrix
     */ getRotationMatrix(space = 0 /* Space.LOCAL */ , tNode) {
        const result = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].Identity();
        this.getRotationMatrixToRef(space, tNode, result);
        return result;
    }
    /**
     * Copy the rotation matrix of the bone to a matrix.  The rotation can be in either local or world space
     * @param space The space that the rotation should be in
     * @param tNode A TransformNode whose world matrix is to be applied to the calculated absolute matrix. In most cases, you'll want to pass the mesh associated with the skeleton from which this bone comes. Used only when space=Space.WORLD
     * @param result The quaternion that the rotation should be copied to
     */ getRotationMatrixToRef(space = 0 /* Space.LOCAL */ , tNode, result) {
        if (space == 0 /* Space.LOCAL */ ) {
            this.getLocalMatrix().getRotationMatrixToRef(result);
        } else {
            const mat = Bone._TmpMats[0];
            const amat = this.getAbsoluteMatrix();
            if (tNode) {
                amat.multiplyToRef(tNode.getWorldMatrix(), mat);
            } else {
                mat.copyFrom(amat);
            }
            mat.multiplyAtIndex(0, this._scalingDeterminant);
            mat.multiplyAtIndex(1, this._scalingDeterminant);
            mat.multiplyAtIndex(2, this._scalingDeterminant);
            mat.getRotationMatrixToRef(result);
        }
    }
    /**
     * Get the world position of a point that is in the local space of the bone
     * @param position The local position
     * @param tNode A TransformNode whose world matrix is to be applied to the calculated absolute matrix. In most cases, you'll want to pass the mesh associated with the skeleton from which this bone comes. Used only when space=Space.WORLD
     * @returns The world position
     */ getAbsolutePositionFromLocal(position, tNode = null) {
        const result = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        this.getAbsolutePositionFromLocalToRef(position, tNode, result);
        return result;
    }
    /**
     * Get the world position of a point that is in the local space of the bone and copy it to the result param
     * @param position The local position
     * @param tNode A TransformNode whose world matrix is to be applied to the calculated absolute matrix. In most cases, you'll want to pass the mesh associated with the skeleton from which this bone comes. Used only when space=Space.WORLD
     * @param result The vector3 that the world position should be copied to
     */ getAbsolutePositionFromLocalToRef(position, tNode = null, result) {
        const tmat = Bone._TmpMats[0].copyFrom(this.getAbsoluteMatrix());
        if (tNode) {
            tmat.multiplyToRef(tNode.getWorldMatrix(), tmat);
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinatesToRef(position, tmat, result);
    }
    /**
     * Get the local position of a point that is in world space
     * @param position The world position
     * @param tNode A TransformNode whose world matrix is to be applied to the calculated absolute matrix. In most cases, you'll want to pass the mesh associated with the skeleton from which this bone comes. Used only when space=Space.WORLD
     * @returns The local position
     */ getLocalPositionFromAbsolute(position, tNode = null) {
        const result = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        this.getLocalPositionFromAbsoluteToRef(position, tNode, result);
        return result;
    }
    /**
     * Get the local position of a point that is in world space and copy it to the result param
     * @param position The world position
     * @param tNode A TransformNode whose world matrix is to be applied to the calculated absolute matrix. In most cases, you'll want to pass the mesh associated with the skeleton from which this bone comes. Used only when space=Space.WORLD
     * @param result The vector3 that the local position should be copied to
     */ getLocalPositionFromAbsoluteToRef(position, tNode = null, result) {
        const tmat = Bone._TmpMats[0].copyFrom(this.getAbsoluteMatrix());
        if (tNode) {
            tmat.multiplyToRef(tNode.getWorldMatrix(), tmat);
        }
        tmat.invert();
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinatesToRef(position, tmat, result);
    }
    /**
     * Set the current local matrix as the restMatrix for this bone.
     */ setCurrentPoseAsRest() {
        this.setRestMatrix(this.getLocalMatrix());
    }
    /**
     * Releases associated resources
     */ dispose() {
        this._linkedTransformNode = null;
        const index = this._skeleton.bones.indexOf(this);
        if (index !== -1) {
            this._skeleton.bones.splice(index, 1);
        }
        if (this._parentNode && this._parentNode.children) {
            const children = this._parentNode.children;
            const index = children.indexOf(this);
            if (index !== -1) {
                children.splice(index, 1);
            }
        }
        super.dispose();
    }
}
Bone._TmpVecs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$arrayTools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BuildArray"])(2, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero);
Bone._TmpQuat = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"].Identity();
Bone._TmpMats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$arrayTools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BuildArray"])(5, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].Identity); //# sourceMappingURL=bone.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Bones/skeleton.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Skeleton",
    ()=>Skeleton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Bones$2f$bone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Bones/bone.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/observable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$rawTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/rawTexture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Animations/animation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animationRange$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Animations/animationRange.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/engineStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$deepCopier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/deepCopier.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
class Skeleton {
    /**
     * Gets or sets a boolean indicating that bone matrices should be stored as a texture instead of using shader uniforms (default is true).
     * Please note that this option is not available if the hardware does not support it
     */ get useTextureToStoreBoneMatrices() {
        return this._useTextureToStoreBoneMatrices;
    }
    set useTextureToStoreBoneMatrices(value) {
        this._useTextureToStoreBoneMatrices = value;
        this._markAsDirty();
    }
    /**
     * Gets or sets the animation properties override
     */ get animationPropertiesOverride() {
        if (!this._animationPropertiesOverride) {
            return this._scene.animationPropertiesOverride;
        }
        return this._animationPropertiesOverride;
    }
    set animationPropertiesOverride(value) {
        this._animationPropertiesOverride = value;
    }
    /**
     * Gets a boolean indicating that the skeleton effectively stores matrices into a texture
     */ get isUsingTextureForMatrices() {
        return this.useTextureToStoreBoneMatrices && this._canUseTextureForBones;
    }
    /**
     * Gets the unique ID of this skeleton
     */ get uniqueId() {
        return this._uniqueId;
    }
    /**
     * Creates a new skeleton
     * @param name defines the skeleton name
     * @param id defines the skeleton Id
     * @param scene defines the hosting scene
     */ constructor(/** defines the skeleton name */ name, /** defines the skeleton Id */ id, scene){
        this.name = name;
        this.id = id;
        /**
         * Defines the list of child bones
         */ this.bones = [];
        /**
         * Defines a boolean indicating if the root matrix is provided by meshes or by the current skeleton (this is the default value)
         */ this.needInitialSkinMatrix = false;
        this._isDirty = true;
        this._meshesWithPoseMatrix = new Array();
        this._identity = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].Identity();
        this._currentRenderId = -1;
        this._ranges = {};
        this._absoluteTransformIsDirty = true;
        this._canUseTextureForBones = false;
        this._uniqueId = 0;
        /** @internal */ this._numBonesWithLinkedTransformNode = 0;
        /** @internal */ this._hasWaitingData = null;
        /** @internal */ this._parentContainer = null;
        /**
         * Specifies if the skeleton should be serialized
         */ this.doNotSerialize = false;
        this._useTextureToStoreBoneMatrices = true;
        this._animationPropertiesOverride = null;
        // Events
        /**
         * An observable triggered before computing the skeleton's matrices
         */ this.onBeforeComputeObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * Gets or sets an object used to store user defined information for the skeleton
         */ this.metadata = null;
        this.bones = [];
        this._scene = scene || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EngineStore"].LastCreatedScene;
        this._uniqueId = this._scene.getUniqueId();
        this._scene.addSkeleton(this);
        //make sure it will recalculate the matrix next time prepare is called.
        this._isDirty = true;
        const engineCaps = this._scene.getEngine().getCaps();
        this._canUseTextureForBones = engineCaps.textureFloat && engineCaps.maxVertexTextureImageUnits > 0;
    }
    /**
     * Gets the current object class name.
     * @returns the class name
     */ getClassName() {
        return "Skeleton";
    }
    /**
     * Returns an array containing the root bones
     * @returns an array containing the root bones
     */ getChildren() {
        return this.bones.filter((b)=>!b.getParent());
    }
    // Members
    /**
     * Gets the list of transform matrices to send to shaders (one matrix per bone)
     * @param mesh defines the mesh to use to get the root matrix (if needInitialSkinMatrix === true)
     * @returns a Float32Array containing matrices data
     */ getTransformMatrices(mesh) {
        if (this.needInitialSkinMatrix) {
            if (!mesh) {
                throw new Error("getTransformMatrices: When using the needInitialSkinMatrix flag, a mesh must be provided");
            }
            if (!mesh._bonesTransformMatrices) {
                this.prepare(true);
            }
            return mesh._bonesTransformMatrices;
        }
        if (!this._transformMatrices || this._isDirty) {
            this.prepare(!this._transformMatrices);
        }
        return this._transformMatrices;
    }
    /**
     * Gets the list of transform matrices to send to shaders inside a texture (one matrix per bone)
     * @param mesh defines the mesh to use to get the root matrix (if needInitialSkinMatrix === true)
     * @returns a raw texture containing the data
     */ getTransformMatrixTexture(mesh) {
        if (this.needInitialSkinMatrix && mesh._transformMatrixTexture) {
            return mesh._transformMatrixTexture;
        }
        return this._transformMatrixTexture;
    }
    /**
     * Gets the current hosting scene
     * @returns a scene object
     */ getScene() {
        return this._scene;
    }
    // Methods
    /**
     * Gets a string representing the current skeleton data
     * @param fullDetails defines a boolean indicating if we want a verbose version
     * @returns a string representing the current skeleton data
     */ toString(fullDetails) {
        let ret = `Name: ${this.name}, nBones: ${this.bones.length}`;
        ret += `, nAnimationRanges: ${this._ranges ? Object.keys(this._ranges).length : "none"}`;
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
     * Get bone's index searching by name
     * @param name defines bone's name to search for
     * @returns the indice of the bone. Returns -1 if not found
     */ getBoneIndexByName(name) {
        for(let boneIndex = 0, cache = this.bones.length; boneIndex < cache; boneIndex++){
            if (this.bones[boneIndex].name === name) {
                return boneIndex;
            }
        }
        return -1;
    }
    /**
     * Create a new animation range
     * @param name defines the name of the range
     * @param from defines the start key
     * @param to defines the end key
     */ createAnimationRange(name, from, to) {
        // check name not already in use
        if (!this._ranges[name]) {
            this._ranges[name] = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animationRange$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimationRange"](name, from, to);
            for(let i = 0, nBones = this.bones.length; i < nBones; i++){
                if (this.bones[i].animations[0]) {
                    this.bones[i].animations[0].createRange(name, from, to);
                }
            }
        }
    }
    /**
     * Delete a specific animation range
     * @param name defines the name of the range
     * @param deleteFrames defines if frames must be removed as well
     */ deleteAnimationRange(name, deleteFrames = true) {
        for(let i = 0, nBones = this.bones.length; i < nBones; i++){
            if (this.bones[i].animations[0]) {
                this.bones[i].animations[0].deleteRange(name, deleteFrames);
            }
        }
        this._ranges[name] = null; // said much faster than 'delete this._range[name]'
    }
    /**
     * Gets a specific animation range
     * @param name defines the name of the range to look for
     * @returns the requested animation range or null if not found
     */ getAnimationRange(name) {
        return this._ranges[name] || null;
    }
    /**
     * Gets the list of all animation ranges defined on this skeleton
     * @returns an array
     */ getAnimationRanges() {
        const animationRanges = [];
        let name;
        for(name in this._ranges){
            animationRanges.push(this._ranges[name]);
        }
        return animationRanges;
    }
    /**
     * Copy animation range from a source skeleton.
     * This is not for a complete retargeting, only between very similar skeleton's with only possible bone length differences
     * @param source defines the source skeleton
     * @param name defines the name of the range to copy
     * @param rescaleAsRequired defines if rescaling must be applied if required
     * @returns true if operation was successful
     */ copyAnimationRange(source, name, rescaleAsRequired = false) {
        if (this._ranges[name] || !source.getAnimationRange(name)) {
            return false;
        }
        let ret = true;
        const frameOffset = this._getHighestAnimationFrame() + 1;
        // make a dictionary of source skeleton's bones, so exact same order or doubly nested loop is not required
        const boneDict = {};
        const sourceBones = source.bones;
        let nBones;
        let i;
        for(i = 0, nBones = sourceBones.length; i < nBones; i++){
            boneDict[sourceBones[i].name] = sourceBones[i];
        }
        if (this.bones.length !== sourceBones.length) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Warn(`copyAnimationRange: this rig has ${this.bones.length} bones, while source as ${sourceBones.length}`);
            ret = false;
        }
        const skelDimensionsRatio = rescaleAsRequired && this.dimensionsAtRest && source.dimensionsAtRest ? this.dimensionsAtRest.divide(source.dimensionsAtRest) : null;
        for(i = 0, nBones = this.bones.length; i < nBones; i++){
            const boneName = this.bones[i].name;
            const sourceBone = boneDict[boneName];
            if (sourceBone) {
                ret = ret && this.bones[i].copyAnimationRange(sourceBone, name, frameOffset, rescaleAsRequired, skelDimensionsRatio);
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Warn("copyAnimationRange: not same rig, missing source bone " + boneName);
                ret = false;
            }
        }
        // do not call createAnimationRange(), since it also is done to bones, which was already done
        const range = source.getAnimationRange(name);
        if (range) {
            this._ranges[name] = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animationRange$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimationRange"](name, range.from + frameOffset, range.to + frameOffset);
        }
        return ret;
    }
    /**
     * Forces the skeleton to go to rest pose
     */ returnToRest() {
        for (const bone of this.bones){
            if (bone._index !== -1) {
                bone.returnToRest();
            }
        }
    }
    _getHighestAnimationFrame() {
        let ret = 0;
        for(let i = 0, nBones = this.bones.length; i < nBones; i++){
            if (this.bones[i].animations[0]) {
                const highest = this.bones[i].animations[0].getHighestFrame();
                if (ret < highest) {
                    ret = highest;
                }
            }
        }
        return ret;
    }
    /**
     * Begin a specific animation range
     * @param name defines the name of the range to start
     * @param loop defines if looping must be turned on (false by default)
     * @param speedRatio defines the speed ratio to apply (1 by default)
     * @param onAnimationEnd defines a callback which will be called when animation will end
     * @returns a new animatable
     */ beginAnimation(name, loop, speedRatio, onAnimationEnd) {
        const range = this.getAnimationRange(name);
        if (!range) {
            return null;
        }
        return this._scene.beginAnimation(this, range.from, range.to, loop, speedRatio, onAnimationEnd);
    }
    /**
     * Convert the keyframes for a range of animation on a skeleton to be relative to a given reference frame.
     * @param skeleton defines the Skeleton containing the animation range to convert
     * @param referenceFrame defines the frame that keyframes in the range will be relative to
     * @param range defines the name of the AnimationRange belonging to the Skeleton to convert
     * @returns the original skeleton
     */ static MakeAnimationAdditive(skeleton, referenceFrame = 0, range) {
        const rangeValue = skeleton.getAnimationRange(range);
        // We can't make a range additive if it doesn't exist
        if (!rangeValue) {
            return null;
        }
        // Find any current scene-level animatable belonging to the target that matches the range
        const sceneAnimatables = skeleton._scene.getAllAnimatablesByTarget(skeleton);
        let rangeAnimatable = null;
        for(let index = 0; index < sceneAnimatables.length; index++){
            const sceneAnimatable = sceneAnimatables[index];
            if (sceneAnimatable.fromFrame === rangeValue?.from && sceneAnimatable.toFrame === rangeValue?.to) {
                rangeAnimatable = sceneAnimatable;
                break;
            }
        }
        // Convert the animations belonging to the skeleton to additive keyframes
        const animatables = skeleton.getAnimatables();
        for(let index = 0; index < animatables.length; index++){
            const animatable = animatables[index];
            const animations = animatable.animations;
            if (!animations) {
                continue;
            }
            for(let animIndex = 0; animIndex < animations.length; animIndex++){
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Animation"].MakeAnimationAdditive(animations[animIndex], referenceFrame, range);
            }
        }
        // Mark the scene-level animatable as additive
        if (rangeAnimatable) {
            rangeAnimatable.isAdditive = true;
        }
        return skeleton;
    }
    /** @internal */ _markAsDirty() {
        this._isDirty = true;
        this._absoluteTransformIsDirty = true;
    }
    /**
     * @internal
     */ _registerMeshWithPoseMatrix(mesh) {
        this._meshesWithPoseMatrix.push(mesh);
    }
    /**
     * @internal
     */ _unregisterMeshWithPoseMatrix(mesh) {
        const index = this._meshesWithPoseMatrix.indexOf(mesh);
        if (index > -1) {
            this._meshesWithPoseMatrix.splice(index, 1);
        }
    }
    _computeTransformMatrices(targetMatrix, initialSkinMatrix) {
        this.onBeforeComputeObservable.notifyObservers(this);
        for(let index = 0; index < this.bones.length; index++){
            const bone = this.bones[index];
            bone._childUpdateId++;
            const parentBone = bone.getParent();
            if (parentBone) {
                bone.getLocalMatrix().multiplyToRef(parentBone.getFinalMatrix(), bone.getFinalMatrix());
            } else {
                if (initialSkinMatrix) {
                    bone.getLocalMatrix().multiplyToRef(initialSkinMatrix, bone.getFinalMatrix());
                } else {
                    bone.getFinalMatrix().copyFrom(bone.getLocalMatrix());
                }
            }
            if (bone._index !== -1) {
                const mappedIndex = bone._index === null ? index : bone._index;
                bone.getAbsoluteInverseBindMatrix().multiplyToArray(bone.getFinalMatrix(), targetMatrix, mappedIndex * 16);
            }
        }
        this._identity.copyToArray(targetMatrix, this.bones.length * 16);
    }
    /**
     * Build all resources required to render a skeleton
     * @param dontCheckFrameId defines a boolean indicating if prepare should be run without checking first the current frame id (default: false)
     */ prepare(dontCheckFrameId = false) {
        if (!dontCheckFrameId) {
            const currentRenderId = this.getScene().getRenderId();
            if (this._currentRenderId === currentRenderId) {
                return;
            }
            this._currentRenderId = currentRenderId;
        }
        // Update the local matrix of bones with linked transform nodes.
        if (this._numBonesWithLinkedTransformNode > 0) {
            for (const bone of this.bones){
                if (bone._linkedTransformNode) {
                    const node = bone._linkedTransformNode;
                    bone.position = node.position;
                    if (node.rotationQuaternion) {
                        bone.rotationQuaternion = node.rotationQuaternion;
                    } else {
                        bone.rotation = node.rotation;
                    }
                    bone.scaling = node.scaling;
                }
            }
        }
        if (this.needInitialSkinMatrix) {
            for (const mesh of this._meshesWithPoseMatrix){
                const poseMatrix = mesh.getPoseMatrix();
                let needsUpdate = this._isDirty;
                if (!mesh._bonesTransformMatrices || mesh._bonesTransformMatrices.length !== 16 * (this.bones.length + 1)) {
                    mesh._bonesTransformMatrices = new Float32Array(16 * (this.bones.length + 1));
                    needsUpdate = true;
                }
                if (!needsUpdate) {
                    continue;
                }
                if (this._synchronizedWithMesh !== mesh) {
                    this._synchronizedWithMesh = mesh;
                    // Prepare bones
                    for (const bone of this.bones){
                        if (!bone.getParent()) {
                            const matrix = bone.getBindMatrix();
                            matrix.multiplyToRef(poseMatrix, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[1]);
                            bone._updateAbsoluteBindMatrices(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[1]);
                        }
                    }
                    if (this.isUsingTextureForMatrices) {
                        const textureWidth = (this.bones.length + 1) * 4;
                        if (!mesh._transformMatrixTexture || mesh._transformMatrixTexture.getSize().width !== textureWidth) {
                            if (mesh._transformMatrixTexture) {
                                mesh._transformMatrixTexture.dispose();
                            }
                            mesh._transformMatrixTexture = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$rawTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RawTexture"].CreateRGBATexture(mesh._bonesTransformMatrices, (this.bones.length + 1) * 4, 1, this._scene, false, false, 1, 1);
                        }
                    }
                }
                this._computeTransformMatrices(mesh._bonesTransformMatrices, poseMatrix);
                if (this.isUsingTextureForMatrices && mesh._transformMatrixTexture) {
                    mesh._transformMatrixTexture.update(mesh._bonesTransformMatrices);
                }
            }
        } else {
            if (!this._isDirty) {
                return;
            }
            if (!this._transformMatrices || this._transformMatrices.length !== 16 * (this.bones.length + 1)) {
                this._transformMatrices = new Float32Array(16 * (this.bones.length + 1));
                if (this.isUsingTextureForMatrices) {
                    if (this._transformMatrixTexture) {
                        this._transformMatrixTexture.dispose();
                    }
                    this._transformMatrixTexture = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$rawTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RawTexture"].CreateRGBATexture(this._transformMatrices, (this.bones.length + 1) * 4, 1, this._scene, false, false, 1, 1);
                }
            }
            this._computeTransformMatrices(this._transformMatrices, null);
            if (this.isUsingTextureForMatrices && this._transformMatrixTexture) {
                this._transformMatrixTexture.update(this._transformMatrices);
            }
        }
        this._isDirty = false;
    }
    /**
     * Gets the list of animatables currently running for this skeleton
     * @returns an array of animatables
     */ getAnimatables() {
        if (!this._animatables || this._animatables.length !== this.bones.length) {
            this._animatables = [];
            for(let index = 0; index < this.bones.length; index++){
                this._animatables.push(this.bones[index]);
            }
        }
        return this._animatables;
    }
    /**
     * Clone the current skeleton
     * @param name defines the name of the new skeleton
     * @param id defines the id of the new skeleton
     * @returns the new skeleton
     */ clone(name, id) {
        const result = new Skeleton(name, id || name, this._scene);
        result.needInitialSkinMatrix = this.needInitialSkinMatrix;
        result.metadata = this.metadata;
        for(let index = 0; index < this.bones.length; index++){
            const source = this.bones[index];
            let parentBone = null;
            const parent = source.getParent();
            if (parent) {
                const parentIndex = this.bones.indexOf(parent);
                parentBone = result.bones[parentIndex];
            }
            const bone = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Bones$2f$bone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bone"](source.name, result, parentBone, source.getBindMatrix().clone(), source.getRestMatrix().clone());
            bone._index = source._index;
            if (source._linkedTransformNode) {
                bone.linkTransformNode(source._linkedTransformNode);
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$deepCopier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DeepCopier"].DeepCopy(source.animations, bone.animations);
        }
        if (this._ranges) {
            result._ranges = {};
            for(const rangeName in this._ranges){
                const range = this._ranges[rangeName];
                if (range) {
                    result._ranges[rangeName] = range.clone();
                }
            }
        }
        this._isDirty = true;
        result.prepare(true);
        return result;
    }
    /**
     * Enable animation blending for this skeleton
     * @param blendingSpeed defines the blending speed to apply
     * @see https://doc.babylonjs.com/features/featuresDeepDive/animation/advanced_animations#animation-blending
     */ enableBlending(blendingSpeed = 0.01) {
        for (const bone of this.bones){
            for (const animation of bone.animations){
                animation.enableBlending = true;
                animation.blendingSpeed = blendingSpeed;
            }
        }
    }
    /**
     * Releases all resources associated with the current skeleton
     */ dispose() {
        this._meshesWithPoseMatrix.length = 0;
        this.metadata = null;
        // Animations
        this.getScene().stopAnimation(this);
        // Remove from scene
        this.getScene().removeSkeleton(this);
        if (this._parentContainer) {
            const index = this._parentContainer.skeletons.indexOf(this);
            if (index > -1) {
                this._parentContainer.skeletons.splice(index, 1);
            }
            this._parentContainer = null;
        }
        if (this._transformMatrixTexture) {
            this._transformMatrixTexture.dispose();
            this._transformMatrixTexture = null;
        }
    }
    /**
     * Serialize the skeleton in a JSON object
     * @returns a JSON object
     */ serialize() {
        const serializationObject = {};
        serializationObject.name = this.name;
        serializationObject.id = this.id;
        if (this.dimensionsAtRest) {
            serializationObject.dimensionsAtRest = this.dimensionsAtRest.asArray();
        }
        serializationObject.bones = [];
        serializationObject.needInitialSkinMatrix = this.needInitialSkinMatrix;
        if (this.metadata) {
            serializationObject.metadata = this.metadata;
        }
        for(let index = 0; index < this.bones.length; index++){
            const bone = this.bones[index];
            const parent = bone.getParent();
            const serializedBone = {
                parentBoneIndex: parent ? this.bones.indexOf(parent) : -1,
                index: bone.getIndex(),
                name: bone.name,
                id: bone.id,
                matrix: bone.getBindMatrix().asArray(),
                rest: bone.getRestMatrix().asArray(),
                linkedTransformNodeId: bone.getTransformNode()?.id
            };
            serializationObject.bones.push(serializedBone);
            if (bone.length) {
                serializedBone.length = bone.length;
            }
            if (bone.metadata) {
                serializedBone.metadata = bone.metadata;
            }
            if (bone.animations && bone.animations.length > 0) {
                serializedBone.animation = bone.animations[0].serialize();
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
        }
        return serializationObject;
    }
    /**
     * Creates a new skeleton from serialized data
     * @param parsedSkeleton defines the serialized data
     * @param scene defines the hosting scene
     * @returns a new skeleton
     */ static Parse(parsedSkeleton, scene) {
        const skeleton = new Skeleton(parsedSkeleton.name, parsedSkeleton.id, scene);
        if (parsedSkeleton.dimensionsAtRest) {
            skeleton.dimensionsAtRest = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].FromArray(parsedSkeleton.dimensionsAtRest);
        }
        skeleton.needInitialSkinMatrix = parsedSkeleton.needInitialSkinMatrix;
        if (parsedSkeleton.metadata) {
            skeleton.metadata = parsedSkeleton.metadata;
        }
        let index;
        for(index = 0; index < parsedSkeleton.bones.length; index++){
            const parsedBone = parsedSkeleton.bones[index];
            const parsedBoneIndex = parsedSkeleton.bones[index].index;
            let parentBone = null;
            if (parsedBone.parentBoneIndex > -1) {
                parentBone = skeleton.bones[parsedBone.parentBoneIndex];
            }
            const rest = parsedBone.rest ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].FromArray(parsedBone.rest) : null;
            const bone = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Bones$2f$bone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bone"](parsedBone.name, skeleton, parentBone, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].FromArray(parsedBone.matrix), rest, null, parsedBoneIndex);
            if (parsedBone.id !== undefined && parsedBone.id !== null) {
                bone.id = parsedBone.id;
            }
            if (parsedBone.length) {
                bone.length = parsedBone.length;
            }
            if (parsedBone.metadata) {
                bone.metadata = parsedBone.metadata;
            }
            if (parsedBone.animation) {
                bone.animations.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Animation"].Parse(parsedBone.animation));
            }
            if (parsedBone.linkedTransformNodeId !== undefined && parsedBone.linkedTransformNodeId !== null) {
                skeleton._hasWaitingData = true;
                bone._waitingTransformNodeId = parsedBone.linkedTransformNodeId;
            }
        }
        // placed after bones, so createAnimationRange can cascade down
        if (parsedSkeleton.ranges) {
            for(index = 0; index < parsedSkeleton.ranges.length; index++){
                const data = parsedSkeleton.ranges[index];
                skeleton.createAnimationRange(data.name, data.from, data.to);
            }
        }
        return skeleton;
    }
    /**
     * Compute all node absolute matrices
     * @param forceUpdate defines if computation must be done even if cache is up to date
     */ computeAbsoluteMatrices(forceUpdate = false) {
        if (this._absoluteTransformIsDirty || forceUpdate) {
            this.bones[0].computeAbsoluteMatrices();
            this._absoluteTransformIsDirty = false;
        }
    }
    /**
     * Compute all node absolute matrices
     * @param forceUpdate defines if computation must be done even if cache is up to date
     * @deprecated Please use computeAbsoluteMatrices instead
     */ computeAbsoluteTransforms(forceUpdate = false) {
        this.computeAbsoluteMatrices(forceUpdate);
    }
    /**
     * Gets the root pose matrix
     * @returns a matrix
     */ getPoseMatrix() {
        let poseMatrix = null;
        if (this._meshesWithPoseMatrix.length > 0) {
            poseMatrix = this._meshesWithPoseMatrix[0].getPoseMatrix();
        }
        return poseMatrix;
    }
    /**
     * Sorts bones per internal index
     */ sortBones() {
        const bones = [];
        const visited = new Array(this.bones.length);
        for(let index = 0; index < this.bones.length; index++){
            this._sortBones(index, bones, visited);
        }
        this.bones = bones;
    }
    _sortBones(index, bones, visited) {
        if (visited[index]) {
            return;
        }
        visited[index] = true;
        const bone = this.bones[index];
        if (!bone) {
            return;
        }
        if (bone._index === undefined) {
            bone._index = index;
        }
        const parentBone = bone.getParent();
        if (parentBone) {
            this._sortBones(this.bones.indexOf(parentBone), bones, visited);
        }
        bones.push(bone);
    }
    /**
     * Set the current local matrix as the restPose for all bones in the skeleton.
     */ setCurrentPoseAsRest() {
        for (const b of this.bones){
            b.setCurrentPoseAsRest();
        }
    }
} //# sourceMappingURL=skeleton.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Bones/boneIKController.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BoneIKController",
    ()=>BoneIKController
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/logger.js [app-client] (ecmascript)");
;
;
class BoneIKController {
    /**
     * Gets or sets maximum allowed angle
     */ get maxAngle() {
        return this._maxAngle;
    }
    set maxAngle(value) {
        this._setMaxAngle(value);
    }
    /**
     * Creates a new BoneIKController
     * @param mesh defines the TransformNode to control
     * @param bone defines the bone to control. The bone needs to have a parent bone. It also needs to have a length greater than 0 or a children we can use to infer its length.
     * @param options defines options to set up the controller
     * @param options.targetMesh
     * @param options.poleTargetMesh
     * @param options.poleTargetBone
     * @param options.poleTargetLocalOffset
     * @param options.poleAngle
     * @param options.bendAxis
     * @param options.maxAngle
     * @param options.slerpAmount
     */ constructor(mesh, bone, options){
        /**
         * Gets or sets the target position
         */ this.targetPosition = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        /**
         * Gets or sets the pole target position
         */ this.poleTargetPosition = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        /**
         * Gets or sets the pole target local offset
         */ this.poleTargetLocalOffset = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        /**
         * Gets or sets the pole angle
         */ this.poleAngle = 0;
        /**
         * The amount to slerp (spherical linear interpolation) to the target.  Set this to a value between 0 and 1 (a value of 1 disables slerp)
         */ this.slerpAmount = 1;
        this._bone1Quat = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"].Identity();
        this._bone1Mat = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].Identity();
        this._bone2Ang = Math.PI;
        this._maxAngle = Math.PI;
        this._rightHandedSystem = false;
        this._bendAxis = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Right();
        this._slerping = false;
        this._adjustRoll = 0;
        this._notEnoughInformation = false;
        this._bone2 = bone;
        const bone1 = bone.getParent();
        if (!bone1) {
            this._notEnoughInformation = true;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Error("BoneIKController: bone must have a parent for IK to work.");
            return;
        }
        this._bone1 = bone1;
        if (this._bone2.children.length === 0 && !this._bone2.length) {
            this._notEnoughInformation = true;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Error("BoneIKController: bone must not be a leaf or it should have a length for IK to work.");
            return;
        }
        this.mesh = mesh;
        bone.getSkeleton().computeAbsoluteMatrices();
        const bonePos = bone.getPosition();
        if (bone.getAbsoluteMatrix().determinant() > 0) {
            this._rightHandedSystem = true;
            this._bendAxis.x = 0;
            this._bendAxis.y = 0;
            this._bendAxis.z = -1;
            if (bonePos.x > bonePos.y && bonePos.x > bonePos.z) {
                this._adjustRoll = Math.PI * 0.5;
                this._bendAxis.z = 1;
            }
        }
        if (this._bone1.length && this._bone2.length) {
            const boneScale1 = this._bone1.getScale();
            const boneScale2 = this._bone2.getScale();
            this._bone1Length = this._bone1.length * boneScale1.y * this.mesh.scaling.y;
            this._bone2Length = this._bone2.length * boneScale2.y * this.mesh.scaling.y;
        } else if (this._bone2.children[0]) {
            mesh.computeWorldMatrix(true);
            const pos1 = this._bone2.children[0].getAbsolutePosition(mesh);
            const pos2 = this._bone2.getAbsolutePosition(mesh);
            const pos3 = this._bone1.getAbsolutePosition(mesh);
            this._bone2Length = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Distance(pos1, pos2);
            this._bone1Length = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Distance(pos2, pos3);
        } else {
            mesh.computeWorldMatrix(true);
            const boneScale2 = this._bone2.getScale();
            this._bone2Length = this._bone2.length * boneScale2.y * this.mesh.scaling.y;
            const pos2 = this._bone2.getAbsolutePosition(mesh);
            const pos3 = this._bone1.getAbsolutePosition(mesh);
            this._bone1Length = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Distance(pos2, pos3);
        }
        this._bone1.getRotationMatrixToRef(1 /* Space.WORLD */ , mesh, this._bone1Mat);
        this.maxAngle = Math.PI;
        if (options) {
            if (options.targetMesh) {
                this.targetMesh = options.targetMesh;
                this.targetMesh.computeWorldMatrix(true);
            }
            if (options.poleTargetMesh) {
                this.poleTargetMesh = options.poleTargetMesh;
                this.poleTargetMesh.computeWorldMatrix(true);
            } else if (options.poleTargetBone) {
                this.poleTargetBone = options.poleTargetBone;
            } else if (this._bone1.getParent()) {
                this.poleTargetBone = this._bone1.getParent();
            }
            if (options.poleTargetLocalOffset) {
                this.poleTargetLocalOffset.copyFrom(options.poleTargetLocalOffset);
            }
            if (options.poleAngle) {
                this.poleAngle = options.poleAngle;
            }
            if (options.bendAxis) {
                this._bendAxis.copyFrom(options.bendAxis);
            }
            if (options.maxAngle) {
                this.maxAngle = options.maxAngle;
            }
            if (options.slerpAmount) {
                this.slerpAmount = options.slerpAmount;
            }
        }
    }
    _setMaxAngle(ang) {
        if (ang < 0) {
            ang = 0;
        }
        if (ang > Math.PI || ang == undefined) {
            ang = Math.PI;
        }
        this._maxAngle = ang;
        const a = this._bone1Length;
        const b = this._bone2Length;
        this._maxReach = Math.sqrt(a * a + b * b - 2 * a * b * Math.cos(ang));
    }
    /**
     * Force the controller to update the bones
     */ update() {
        if (this._notEnoughInformation) {
            return;
        }
        const target = this.targetPosition;
        const poleTarget = this.poleTargetPosition;
        const mat1 = BoneIKController._TmpMats[0];
        const mat2 = BoneIKController._TmpMats[1];
        if (this.targetMesh) {
            target.copyFrom(this.targetMesh.getAbsolutePosition());
        }
        if (this.poleTargetBone) {
            this.poleTargetBone.getAbsolutePositionFromLocalToRef(this.poleTargetLocalOffset, this.mesh, poleTarget);
        } else if (this.poleTargetMesh) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinatesToRef(this.poleTargetLocalOffset, this.poleTargetMesh.getWorldMatrix(), poleTarget);
        }
        const bonePos = BoneIKController._TmpVecs[0];
        const zaxis = BoneIKController._TmpVecs[1];
        const xaxis = BoneIKController._TmpVecs[2];
        const yaxis = BoneIKController._TmpVecs[3];
        const upAxis = BoneIKController._TmpVecs[4];
        const tmpQuat = BoneIKController._TmpQuat;
        this._bone1.getAbsolutePositionToRef(this.mesh, bonePos);
        poleTarget.subtractToRef(bonePos, upAxis);
        if (upAxis.x == 0 && upAxis.y == 0 && upAxis.z == 0) {
            upAxis.y = 1;
        } else {
            upAxis.normalize();
        }
        target.subtractToRef(bonePos, yaxis);
        yaxis.normalize();
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].CrossToRef(yaxis, upAxis, zaxis);
        zaxis.normalize();
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].CrossToRef(yaxis, zaxis, xaxis);
        xaxis.normalize();
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].FromXYZAxesToRef(xaxis, yaxis, zaxis, mat1);
        const a = this._bone1Length;
        const b = this._bone2Length;
        let c = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Distance(bonePos, target);
        if (this._maxReach > 0) {
            c = Math.min(this._maxReach, c);
        }
        let acosa = (b * b + c * c - a * a) / (2 * b * c);
        let acosb = (c * c + a * a - b * b) / (2 * c * a);
        if (acosa > 1) {
            acosa = 1;
        }
        if (acosb > 1) {
            acosb = 1;
        }
        if (acosa < -1) {
            acosa = -1;
        }
        if (acosb < -1) {
            acosb = -1;
        }
        const angA = Math.acos(acosa);
        const angB = Math.acos(acosb);
        let angC = -angA - angB;
        if (this._rightHandedSystem) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].RotationYawPitchRollToRef(0, 0, this._adjustRoll, mat2);
            mat2.multiplyToRef(mat1, mat1);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].RotationAxisToRef(this._bendAxis, angB, mat2);
            mat2.multiplyToRef(mat1, mat1);
        } else {
            const _tmpVec = BoneIKController._TmpVecs[5];
            _tmpVec.copyFrom(this._bendAxis);
            _tmpVec.x *= -1;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].RotationAxisToRef(_tmpVec, -angB, mat2);
            mat2.multiplyToRef(mat1, mat1);
        }
        if (this.poleAngle) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].RotationAxisToRef(yaxis, this.poleAngle, mat2);
            mat1.multiplyToRef(mat2, mat1);
        }
        if (this._bone1) {
            if (this.slerpAmount < 1) {
                if (!this._slerping) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"].FromRotationMatrixToRef(this._bone1Mat, this._bone1Quat);
                }
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"].FromRotationMatrixToRef(mat1, tmpQuat);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"].SlerpToRef(this._bone1Quat, tmpQuat, this.slerpAmount, this._bone1Quat);
                angC = this._bone2Ang * (1.0 - this.slerpAmount) + angC * this.slerpAmount;
                this._bone1.setRotationQuaternion(this._bone1Quat, 1 /* Space.WORLD */ , this.mesh);
                this._slerping = true;
            } else {
                this._bone1.setRotationMatrix(mat1, 1 /* Space.WORLD */ , this.mesh);
                this._bone1Mat.copyFrom(mat1);
                this._slerping = false;
            }
            this._updateLinkedTransformRotation(this._bone1);
        }
        this._bone2.setAxisAngle(this._bendAxis, angC, 0 /* Space.LOCAL */ );
        this._updateLinkedTransformRotation(this._bone2);
        this._bone2Ang = angC;
    }
    _updateLinkedTransformRotation(bone) {
        if (bone._linkedTransformNode) {
            if (!bone._linkedTransformNode.rotationQuaternion) {
                bone._linkedTransformNode.rotationQuaternion = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"]();
            }
            bone.getRotationQuaternionToRef(0 /* Space.LOCAL */ , null, bone._linkedTransformNode.rotationQuaternion);
        }
    }
}
BoneIKController._TmpVecs = [
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero(),
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero(),
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero(),
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero(),
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero(),
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero()
];
BoneIKController._TmpQuat = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"].Identity();
BoneIKController._TmpMats = [
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].Identity(),
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].Identity()
]; //# sourceMappingURL=boneIKController.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Bones/boneLookController.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BoneLookController",
    ()=>BoneLookController
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$arrayTools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/arrayTools.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$axis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.axis.js [app-client] (ecmascript)");
;
;
;
class BoneLookController {
    /**
     * Gets or sets the minimum yaw angle that the bone can look to
     */ get minYaw() {
        return this._minYaw;
    }
    set minYaw(value) {
        this._minYaw = value;
        this._minYawSin = Math.sin(value);
        this._minYawCos = Math.cos(value);
        if (this._maxYaw != null) {
            this._midYawConstraint = this._getAngleDiff(this._minYaw, this._maxYaw) * 0.5 + this._minYaw;
            this._yawRange = this._maxYaw - this._minYaw;
        }
    }
    /**
     * Gets or sets the maximum yaw angle that the bone can look to
     */ get maxYaw() {
        return this._maxYaw;
    }
    set maxYaw(value) {
        this._maxYaw = value;
        this._maxYawSin = Math.sin(value);
        this._maxYawCos = Math.cos(value);
        if (this._minYaw != null) {
            this._midYawConstraint = this._getAngleDiff(this._minYaw, this._maxYaw) * 0.5 + this._minYaw;
            this._yawRange = this._maxYaw - this._minYaw;
        }
    }
    /**
     * Gets or sets the minimum pitch angle that the bone can look to
     */ get minPitch() {
        return this._minPitch;
    }
    set minPitch(value) {
        this._minPitch = value;
        this._minPitchTan = Math.tan(value);
    }
    /**
     * Gets or sets the maximum pitch angle that the bone can look to
     */ get maxPitch() {
        return this._maxPitch;
    }
    set maxPitch(value) {
        this._maxPitch = value;
        this._maxPitchTan = Math.tan(value);
    }
    /**
     * Create a BoneLookController
     * @param mesh the TransformNode that the bone belongs to
     * @param bone the bone that will be looking to the target
     * @param target the target Vector3 to look at
     * @param options optional settings:
     * * maxYaw: the maximum angle the bone will yaw to
     * * minYaw: the minimum angle the bone will yaw to
     * * maxPitch: the maximum angle the bone will pitch to
     * * minPitch: the minimum angle the bone will yaw to
     * * slerpAmount: set the between 0 and 1 to make the bone slerp to the target.
     * * upAxis: the up axis of the coordinate system
     * * upAxisSpace: the space that the up axis is in - Space.BONE, Space.LOCAL (default), or Space.WORLD.
     * * yawAxis: set yawAxis if the bone does not yaw on the y axis
     * * pitchAxis: set pitchAxis if the bone does not pitch on the x axis
     * * adjustYaw: used to make an adjustment to the yaw of the bone
     * * adjustPitch: used to make an adjustment to the pitch of the bone
     * * adjustRoll: used to make an adjustment to the roll of the bone
     * @param options.maxYaw
     * @param options.minYaw
     * @param options.maxPitch
     * @param options.minPitch
     * @param options.slerpAmount
     * @param options.upAxis
     * @param options.upAxisSpace
     * @param options.yawAxis
     * @param options.pitchAxis
     * @param options.adjustYaw
     * @param options.adjustPitch
     * @param options.adjustRoll
     **/ constructor(mesh, bone, target, options){
        /**
         * The up axis of the coordinate system that is used when the bone is rotated
         */ this.upAxis = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Up();
        /**
         * The space that the up axis is in - Space.BONE, Space.LOCAL (default), or Space.WORLD
         */ this.upAxisSpace = 0 /* Space.LOCAL */ ;
        /**
         * Used to make an adjustment to the yaw of the bone
         */ this.adjustYaw = 0;
        /**
         * Used to make an adjustment to the pitch of the bone
         */ this.adjustPitch = 0;
        /**
         * Used to make an adjustment to the roll of the bone
         */ this.adjustRoll = 0;
        /**
         * The amount to slerp (spherical linear interpolation) to the target.  Set this to a value between 0 and 1 (a value of 1 disables slerp)
         */ this.slerpAmount = 1;
        this._boneQuat = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"].Identity();
        this._slerping = false;
        this._firstFrameSkipped = false;
        this._fowardAxis = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Forward();
        /**
         * Use the absolute value for yaw when checking the min/max constraints
         */ this.useAbsoluteValueForYaw = false;
        this.mesh = mesh;
        this.bone = bone;
        this.target = target;
        if (options) {
            if (options.adjustYaw) {
                this.adjustYaw = options.adjustYaw;
            }
            if (options.adjustPitch) {
                this.adjustPitch = options.adjustPitch;
            }
            if (options.adjustRoll) {
                this.adjustRoll = options.adjustRoll;
            }
            if (options.maxYaw != null) {
                this.maxYaw = options.maxYaw;
            } else {
                this.maxYaw = Math.PI;
            }
            if (options.minYaw != null) {
                this.minYaw = options.minYaw;
            } else {
                this.minYaw = -Math.PI;
            }
            if (options.maxPitch != null) {
                this.maxPitch = options.maxPitch;
            } else {
                this.maxPitch = Math.PI;
            }
            if (options.minPitch != null) {
                this.minPitch = options.minPitch;
            } else {
                this.minPitch = -Math.PI;
            }
            if (options.slerpAmount != null) {
                this.slerpAmount = options.slerpAmount;
            }
            if (options.upAxis != null) {
                this.upAxis = options.upAxis;
            }
            if (options.upAxisSpace != null) {
                this.upAxisSpace = options.upAxisSpace;
            }
            if (options.yawAxis != null || options.pitchAxis != null) {
                let newYawAxis = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$axis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Axis"].Y;
                let newPitchAxis = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$axis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Axis"].X;
                if (options.yawAxis != null) {
                    newYawAxis = options.yawAxis.clone();
                    newYawAxis.normalize();
                }
                if (options.pitchAxis != null) {
                    newPitchAxis = options.pitchAxis.clone();
                    newPitchAxis.normalize();
                }
                const newRollAxis = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Cross(newPitchAxis, newYawAxis);
                this._transformYawPitch = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].Identity();
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].FromXYZAxesToRef(newPitchAxis, newYawAxis, newRollAxis, this._transformYawPitch);
                this._transformYawPitchInv = this._transformYawPitch.clone();
                this._transformYawPitch.invert();
            }
            if (options.useAbsoluteValueForYaw !== undefined) {
                this.useAbsoluteValueForYaw = options.useAbsoluteValueForYaw;
            }
        }
        if (!bone.getParent() && this.upAxisSpace == 2 /* Space.BONE */ ) {
            this.upAxisSpace = 0 /* Space.LOCAL */ ;
        }
    }
    /**
     * Update the bone to look at the target.  This should be called before the scene is rendered (use scene.registerBeforeRender())
     */ update() {
        //skip the first frame when slerping so that the TransformNode rotation is correct
        if (this.slerpAmount < 1 && !this._firstFrameSkipped) {
            this._firstFrameSkipped = true;
            return;
        }
        const bone = this.bone;
        const bonePos = BoneLookController._TmpVecs[0];
        bone.getAbsolutePositionToRef(this.mesh, bonePos);
        let target = this.target;
        const _tmpMat1 = BoneLookController._TmpMats[0];
        const _tmpMat2 = BoneLookController._TmpMats[1];
        const mesh = this.mesh;
        const parentBone = bone.getParent();
        const upAxis = BoneLookController._TmpVecs[1];
        upAxis.copyFrom(this.upAxis);
        if (this.upAxisSpace == 2 /* Space.BONE */  && parentBone) {
            if (this._transformYawPitch) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinatesToRef(upAxis, this._transformYawPitchInv, upAxis);
            }
            parentBone.getDirectionToRef(upAxis, this.mesh, upAxis);
        } else if (this.upAxisSpace == 0 /* Space.LOCAL */ ) {
            mesh.getDirectionToRef(upAxis, upAxis);
            if (mesh.scaling.x != 1 || mesh.scaling.y != 1 || mesh.scaling.z != 1) {
                upAxis.normalize();
            }
        }
        let checkYaw = false;
        let checkPitch = false;
        if (this._maxYaw != Math.PI || this._minYaw != -Math.PI) {
            checkYaw = true;
        }
        if (this._maxPitch != Math.PI || this._minPitch != -Math.PI) {
            checkPitch = true;
        }
        if (checkYaw || checkPitch) {
            const spaceMat = BoneLookController._TmpMats[2];
            const spaceMatInv = BoneLookController._TmpMats[3];
            if (this.upAxisSpace == 2 /* Space.BONE */  && upAxis.y == 1 && parentBone) {
                parentBone.getRotationMatrixToRef(1 /* Space.WORLD */ , this.mesh, spaceMat);
            } else if (this.upAxisSpace == 0 /* Space.LOCAL */  && upAxis.y == 1 && !parentBone) {
                spaceMat.copyFrom(mesh.getWorldMatrix());
            } else {
                let forwardAxis = BoneLookController._TmpVecs[2];
                forwardAxis.copyFrom(this._fowardAxis);
                if (this._transformYawPitch) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinatesToRef(forwardAxis, this._transformYawPitchInv, forwardAxis);
                }
                if (parentBone) {
                    parentBone.getDirectionToRef(forwardAxis, this.mesh, forwardAxis);
                } else {
                    mesh.getDirectionToRef(forwardAxis, forwardAxis);
                }
                const rightAxis = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Cross(upAxis, forwardAxis);
                rightAxis.normalize();
                forwardAxis = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Cross(rightAxis, upAxis);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].FromXYZAxesToRef(rightAxis, upAxis, forwardAxis, spaceMat);
            }
            spaceMat.invertToRef(spaceMatInv);
            let xzlen = null;
            if (checkPitch) {
                const localTarget = BoneLookController._TmpVecs[3];
                target.subtractToRef(bonePos, localTarget);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinatesToRef(localTarget, spaceMatInv, localTarget);
                xzlen = Math.sqrt(localTarget.x * localTarget.x + localTarget.z * localTarget.z);
                const pitch = Math.atan2(localTarget.y, xzlen);
                let newPitch = pitch;
                if (pitch > this._maxPitch) {
                    localTarget.y = this._maxPitchTan * xzlen;
                    newPitch = this._maxPitch;
                } else if (pitch < this._minPitch) {
                    localTarget.y = this._minPitchTan * xzlen;
                    newPitch = this._minPitch;
                }
                if (pitch != newPitch) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinatesToRef(localTarget, spaceMat, localTarget);
                    localTarget.addInPlace(bonePos);
                    target = localTarget;
                }
            }
            if (checkYaw) {
                const localTarget = BoneLookController._TmpVecs[4];
                target.subtractToRef(bonePos, localTarget);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinatesToRef(localTarget, spaceMatInv, localTarget);
                const yaw = Math.atan2(localTarget.x, localTarget.z);
                const yawCheck = this.useAbsoluteValueForYaw ? Math.abs(yaw) : yaw;
                let newYaw = yaw;
                if (yawCheck > this._maxYaw || yawCheck < this._minYaw) {
                    if (xzlen == null) {
                        xzlen = Math.sqrt(localTarget.x * localTarget.x + localTarget.z * localTarget.z);
                    }
                    if (this._yawRange > Math.PI) {
                        if (this._isAngleBetween(yaw, this._maxYaw, this._midYawConstraint)) {
                            localTarget.z = this._maxYawCos * xzlen;
                            localTarget.x = this._maxYawSin * xzlen;
                            newYaw = this._maxYaw;
                        } else if (this._isAngleBetween(yaw, this._midYawConstraint, this._minYaw)) {
                            localTarget.z = this._minYawCos * xzlen;
                            localTarget.x = this._minYawSin * xzlen;
                            newYaw = this._minYaw;
                        }
                    } else {
                        if (yawCheck > this._maxYaw) {
                            localTarget.z = this._maxYawCos * xzlen;
                            localTarget.x = this._maxYawSin * xzlen;
                            if (yaw < 0 && this.useAbsoluteValueForYaw) {
                                localTarget.x *= -1;
                            }
                            newYaw = this._maxYaw;
                        } else if (yawCheck < this._minYaw) {
                            localTarget.z = this._minYawCos * xzlen;
                            localTarget.x = this._minYawSin * xzlen;
                            if (yaw < 0 && this.useAbsoluteValueForYaw) {
                                localTarget.x *= -1;
                            }
                            newYaw = this._minYaw;
                        }
                    }
                }
                if (this._slerping && this._yawRange > Math.PI) {
                    //are we going to be crossing into the min/max region?
                    const boneFwd = BoneLookController._TmpVecs[8];
                    boneFwd.copyFrom(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$axis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Axis"].Z);
                    if (this._transformYawPitch) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinatesToRef(boneFwd, this._transformYawPitchInv, boneFwd);
                    }
                    const boneRotMat = BoneLookController._TmpMats[4];
                    this._boneQuat.toRotationMatrix(boneRotMat);
                    this.mesh.getWorldMatrix().multiplyToRef(boneRotMat, boneRotMat);
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinatesToRef(boneFwd, boneRotMat, boneFwd);
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinatesToRef(boneFwd, spaceMatInv, boneFwd);
                    const boneYaw = Math.atan2(boneFwd.x, boneFwd.z);
                    const angBtwTar = this._getAngleBetween(boneYaw, yaw);
                    const angBtwMidYaw = this._getAngleBetween(boneYaw, this._midYawConstraint);
                    if (angBtwTar > angBtwMidYaw) {
                        if (xzlen == null) {
                            xzlen = Math.sqrt(localTarget.x * localTarget.x + localTarget.z * localTarget.z);
                        }
                        const angBtwMax = this._getAngleBetween(boneYaw, this._maxYaw);
                        const angBtwMin = this._getAngleBetween(boneYaw, this._minYaw);
                        if (angBtwMin < angBtwMax) {
                            newYaw = boneYaw + Math.PI * 0.75;
                            localTarget.z = Math.cos(newYaw) * xzlen;
                            localTarget.x = Math.sin(newYaw) * xzlen;
                        } else {
                            newYaw = boneYaw - Math.PI * 0.75;
                            localTarget.z = Math.cos(newYaw) * xzlen;
                            localTarget.x = Math.sin(newYaw) * xzlen;
                        }
                    }
                }
                if (yaw != newYaw) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinatesToRef(localTarget, spaceMat, localTarget);
                    localTarget.addInPlace(bonePos);
                    target = localTarget;
                }
            }
        }
        const zaxis = BoneLookController._TmpVecs[5];
        const xaxis = BoneLookController._TmpVecs[6];
        const yaxis = BoneLookController._TmpVecs[7];
        const tmpQuat = BoneLookController._TmpQuat;
        const boneScaling = BoneLookController._TmpVecs[9];
        target.subtractToRef(bonePos, zaxis);
        zaxis.normalize();
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].CrossToRef(upAxis, zaxis, xaxis);
        xaxis.normalize();
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].CrossToRef(zaxis, xaxis, yaxis);
        yaxis.normalize();
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].FromXYZAxesToRef(xaxis, yaxis, zaxis, _tmpMat1);
        if (xaxis.x === 0 && xaxis.y === 0 && xaxis.z === 0) {
            return;
        }
        if (yaxis.x === 0 && yaxis.y === 0 && yaxis.z === 0) {
            return;
        }
        if (zaxis.x === 0 && zaxis.y === 0 && zaxis.z === 0) {
            return;
        }
        if (this.adjustYaw || this.adjustPitch || this.adjustRoll) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].RotationYawPitchRollToRef(this.adjustYaw, this.adjustPitch, this.adjustRoll, _tmpMat2);
            _tmpMat2.multiplyToRef(_tmpMat1, _tmpMat1);
        }
        boneScaling.copyFrom(this.bone.getScale());
        if (this.slerpAmount < 1) {
            if (!this._slerping) {
                this.bone.getRotationQuaternionToRef(1 /* Space.WORLD */ , this.mesh, this._boneQuat);
            }
            if (this._transformYawPitch) {
                this._transformYawPitch.multiplyToRef(_tmpMat1, _tmpMat1);
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"].FromRotationMatrixToRef(_tmpMat1, tmpQuat);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"].SlerpToRef(this._boneQuat, tmpQuat, this.slerpAmount, this._boneQuat);
            this.bone.setRotationQuaternion(this._boneQuat, 1 /* Space.WORLD */ , this.mesh);
            this._slerping = true;
        } else {
            if (this._transformYawPitch) {
                this._transformYawPitch.multiplyToRef(_tmpMat1, _tmpMat1);
            }
            this.bone.setRotationMatrix(_tmpMat1, 1 /* Space.WORLD */ , this.mesh);
            this._slerping = false;
        }
        this.bone.setScale(boneScaling);
        this._updateLinkedTransformRotation();
    }
    _getAngleDiff(ang1, ang2) {
        let angDiff = ang2 - ang1;
        angDiff %= Math.PI * 2;
        if (angDiff > Math.PI) {
            angDiff -= Math.PI * 2;
        } else if (angDiff < -Math.PI) {
            angDiff += Math.PI * 2;
        }
        return angDiff;
    }
    _getAngleBetween(ang1, ang2) {
        ang1 %= 2 * Math.PI;
        ang1 = ang1 < 0 ? ang1 + 2 * Math.PI : ang1;
        ang2 %= 2 * Math.PI;
        ang2 = ang2 < 0 ? ang2 + 2 * Math.PI : ang2;
        let ab = 0;
        if (ang1 < ang2) {
            ab = ang2 - ang1;
        } else {
            ab = ang1 - ang2;
        }
        if (ab > Math.PI) {
            ab = Math.PI * 2 - ab;
        }
        return ab;
    }
    _isAngleBetween(ang, ang1, ang2) {
        ang %= 2 * Math.PI;
        ang = ang < 0 ? ang + 2 * Math.PI : ang;
        ang1 %= 2 * Math.PI;
        ang1 = ang1 < 0 ? ang1 + 2 * Math.PI : ang1;
        ang2 %= 2 * Math.PI;
        ang2 = ang2 < 0 ? ang2 + 2 * Math.PI : ang2;
        if (ang1 < ang2) {
            if (ang > ang1 && ang < ang2) {
                return true;
            }
        } else {
            if (ang > ang2 && ang < ang1) {
                return true;
            }
        }
        return false;
    }
    _updateLinkedTransformRotation() {
        const bone = this.bone;
        if (bone._linkedTransformNode) {
            if (!bone._linkedTransformNode.rotationQuaternion) {
                bone._linkedTransformNode.rotationQuaternion = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"]();
            }
            bone.getRotationQuaternionToRef(0 /* Space.LOCAL */ , null, bone._linkedTransformNode.rotationQuaternion);
        }
    }
}
BoneLookController._TmpVecs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$arrayTools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BuildArray"])(10, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero);
BoneLookController._TmpQuat = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"].Identity();
BoneLookController._TmpMats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$arrayTools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BuildArray"])(5, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].Identity); //# sourceMappingURL=boneLookController.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Bones/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Bones$2f$bone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Bones/bone.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Bones$2f$boneIKController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Bones/boneIKController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Bones$2f$boneLookController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Bones/boneLookController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Bones$2f$skeleton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Bones/skeleton.js [app-client] (ecmascript)"); //# sourceMappingURL=index.js.map
;
;
;
;
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Bones/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Bone",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Bones$2f$bone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bone"],
    "BoneIKController",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Bones$2f$boneIKController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoneIKController"],
    "BoneLookController",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Bones$2f$boneLookController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoneLookController"],
    "Skeleton",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Bones$2f$skeleton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Bones$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Bones/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Bones$2f$bone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Bones/bone.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Bones$2f$boneIKController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Bones/boneIKController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Bones$2f$boneLookController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Bones/boneLookController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Bones$2f$skeleton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Bones/skeleton.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=dcdbf_%40babylonjs_core_Bones_bbc4f9fd._.js.map