(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Debug/axesViewer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AxesViewer",
    ()=>AxesViewer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$standardMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/standardMaterial.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gizmos$2f$axisDragGizmo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Gizmos/axisDragGizmo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.color.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/engineStore.js [app-client] (ecmascript)");
;
;
;
;
;
class AxesViewer {
    /**
     * Gets or sets a number used to scale line length
     */ get scaleLines() {
        return this._scaleLines;
    }
    set scaleLines(value) {
        this._scaleLines = value;
        this._xAxis.scaling.setAll(this._scaleLines * this._scaleLinesFactor);
        this._yAxis.scaling.setAll(this._scaleLines * this._scaleLinesFactor);
        this._zAxis.scaling.setAll(this._scaleLines * this._scaleLinesFactor);
    }
    /** Gets the node hierarchy used to render x-axis */ get xAxis() {
        return this._xAxis;
    }
    /** Gets the node hierarchy used to render y-axis */ get yAxis() {
        return this._yAxis;
    }
    /** Gets the node hierarchy used to render z-axis */ get zAxis() {
        return this._zAxis;
    }
    /**
     * Creates a new AxesViewer
     * @param scene defines the hosting scene
     * @param scaleLines defines a number used to scale line length (1 by default)
     * @param renderingGroupId defines a number used to set the renderingGroupId of the meshes (2 by default)
     * @param xAxis defines the node hierarchy used to render the x-axis
     * @param yAxis defines the node hierarchy used to render the y-axis
     * @param zAxis defines the node hierarchy used to render the z-axis
     * @param lineThickness The line thickness to use when creating the arrow. defaults to 1.
     */ constructor(scene, scaleLines = 1, renderingGroupId = 2, xAxis, yAxis, zAxis, lineThickness = 1){
        this._scaleLinesFactor = 4;
        this._instanced = false;
        /**
         * Gets the hosting scene
         */ this.scene = null;
        this._scaleLines = 1;
        scene = scene || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EngineStore"].LastCreatedScene;
        if (!scene) {
            return;
        }
        if (!xAxis) {
            const redColoredMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$standardMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StandardMaterial"]("xAxisMaterial", scene);
            redColoredMaterial.disableLighting = true;
            redColoredMaterial.emissiveColor = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color3"].Red().scale(0.5);
            xAxis = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gizmos$2f$axisDragGizmo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AxisDragGizmo"]._CreateArrow(scene, redColoredMaterial, lineThickness);
        }
        if (!yAxis) {
            const greenColoredMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$standardMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StandardMaterial"]("yAxisMaterial", scene);
            greenColoredMaterial.disableLighting = true;
            greenColoredMaterial.emissiveColor = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color3"].Green().scale(0.5);
            yAxis = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gizmos$2f$axisDragGizmo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AxisDragGizmo"]._CreateArrow(scene, greenColoredMaterial, lineThickness);
        }
        if (!zAxis) {
            const blueColoredMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$standardMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StandardMaterial"]("zAxisMaterial", scene);
            blueColoredMaterial.disableLighting = true;
            blueColoredMaterial.emissiveColor = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color3"].Blue().scale(0.5);
            zAxis = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gizmos$2f$axisDragGizmo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AxisDragGizmo"]._CreateArrow(scene, blueColoredMaterial, lineThickness);
        }
        this._xAxis = xAxis;
        this._yAxis = yAxis;
        this._zAxis = zAxis;
        this.scaleLines = scaleLines;
        if (renderingGroupId != null) {
            AxesViewer._SetRenderingGroupId(this._xAxis, renderingGroupId);
            AxesViewer._SetRenderingGroupId(this._yAxis, renderingGroupId);
            AxesViewer._SetRenderingGroupId(this._zAxis, renderingGroupId);
        }
        this.scene = scene;
        this.update(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Right(), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Up(), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Forward());
    }
    /**
     * Force the viewer to update
     * @param position defines the position of the viewer
     * @param xaxis defines the x axis of the viewer
     * @param yaxis defines the y axis of the viewer
     * @param zaxis defines the z axis of the viewer
     */ update(position, xaxis, yaxis, zaxis) {
        this._xAxis.position.copyFrom(position);
        this._xAxis.setDirection(xaxis);
        this._yAxis.position.copyFrom(position);
        this._yAxis.setDirection(yaxis);
        this._zAxis.position.copyFrom(position);
        this._zAxis.setDirection(zaxis);
    }
    /**
     * Creates an instance of this axes viewer.
     * @returns a new axes viewer with instanced meshes
     */ createInstance() {
        const xAxis = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gizmos$2f$axisDragGizmo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AxisDragGizmo"]._CreateArrowInstance(this.scene, this._xAxis);
        const yAxis = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gizmos$2f$axisDragGizmo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AxisDragGizmo"]._CreateArrowInstance(this.scene, this._yAxis);
        const zAxis = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Gizmos$2f$axisDragGizmo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AxisDragGizmo"]._CreateArrowInstance(this.scene, this._zAxis);
        const axesViewer = new AxesViewer(this.scene, this.scaleLines, null, xAxis, yAxis, zAxis);
        axesViewer._instanced = true;
        return axesViewer;
    }
    /** Releases resources */ dispose() {
        if (this._xAxis) {
            this._xAxis.dispose(false, !this._instanced);
        }
        if (this._yAxis) {
            this._yAxis.dispose(false, !this._instanced);
        }
        if (this._zAxis) {
            this._zAxis.dispose(false, !this._instanced);
        }
        this.scene = null;
    }
    static _SetRenderingGroupId(node, id) {
        const meshes = node.getChildMeshes();
        for (const mesh of meshes){
            mesh.renderingGroupId = id;
        }
    }
} //# sourceMappingURL=axesViewer.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Debug/boneAxesViewer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BoneAxesViewer",
    ()=>BoneAxesViewer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Debug$2f$axesViewer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Debug/axesViewer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$axis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.axis.js [app-client] (ecmascript)");
;
;
;
class BoneAxesViewer extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Debug$2f$axesViewer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AxesViewer"] {
    /**
     * Creates a new BoneAxesViewer
     * @param scene defines the hosting scene
     * @param bone defines the target bone
     * @param mesh defines the target mesh
     * @param scaleLines defines a scaling factor for line length (1 by default)
     */ constructor(scene, bone, mesh, scaleLines = 1){
        super(scene, scaleLines);
        /** Gets current position */ this.pos = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        /** Gets direction of X axis */ this.xaxis = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        /** Gets direction of Y axis */ this.yaxis = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        /** Gets direction of Z axis */ this.zaxis = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        this.mesh = mesh;
        this.bone = bone;
    }
    /**
     * Force the viewer to update
     */ update() {
        if (!this.mesh || !this.bone) {
            return;
        }
        const bone = this.bone;
        bone.getAbsolutePositionToRef(this.mesh, this.pos);
        bone.getDirectionToRef(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$axis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Axis"].X, this.mesh, this.xaxis);
        bone.getDirectionToRef(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$axis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Axis"].Y, this.mesh, this.yaxis);
        bone.getDirectionToRef(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$axis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Axis"].Z, this.mesh, this.zaxis);
        super.update(this.pos, this.xaxis, this.yaxis, this.zaxis);
    }
    /** Releases resources */ dispose() {
        if (this.mesh) {
            this.mesh = null;
            this.bone = null;
            super.dispose();
        }
    }
} //# sourceMappingURL=boneAxesViewer.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Debug/debugLayer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DebugLayer",
    ()=>DebugLayer,
    "DebugLayerTab",
    ()=>DebugLayerTab
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/tools.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/observable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$scene$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/scene.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/engineStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/abstractEngine.js [app-client] (ecmascript)");
;
;
;
;
;
Object.defineProperty(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$scene$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scene"].prototype, "debugLayer", {
    get: function() {
        if (!this._debugLayer) {
            this._debugLayer = new DebugLayer(this);
        }
        return this._debugLayer;
    },
    enumerable: true,
    configurable: true
});
var DebugLayerTab;
(function(DebugLayerTab) {
    /**
     * Properties tag (default)
     */ DebugLayerTab[DebugLayerTab["Properties"] = 0] = "Properties";
    /**
     * Debug tab
     */ DebugLayerTab[DebugLayerTab["Debug"] = 1] = "Debug";
    /**
     * Statistics tab
     */ DebugLayerTab[DebugLayerTab["Statistics"] = 2] = "Statistics";
    /**
     * Tools tab
     */ DebugLayerTab[DebugLayerTab["Tools"] = 3] = "Tools";
    /**
     * Settings tab
     */ DebugLayerTab[DebugLayerTab["Settings"] = 4] = "Settings";
})(DebugLayerTab || (DebugLayerTab = {}));
class DebugLayer {
    /**
     * Observable triggered when a property is changed through the inspector.
     */ get onPropertyChangedObservable() {
        if (this.BJSINSPECTOR && this.BJSINSPECTOR.Inspector) {
            return this.BJSINSPECTOR.Inspector.OnPropertyChangedObservable;
        }
        if (!this._onPropertyChangedObservable) {
            this._onPropertyChangedObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]();
        }
        return this._onPropertyChangedObservable;
    }
    /**
     * Observable triggered when the selection is changed through the inspector.
     */ get onSelectionChangedObservable() {
        if (this.BJSINSPECTOR && this.BJSINSPECTOR.Inspector) {
            return this.BJSINSPECTOR.Inspector.OnSelectionChangeObservable;
        }
        if (!this._onSelectionChangedObservable) {
            this._onSelectionChangedObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]();
        }
        return this._onSelectionChangedObservable;
    }
    /**
     * Instantiates a new debug layer.
     * The debug layer (aka Inspector) is the go to tool in order to better understand
     * what is happening in your scene
     * @see https://doc.babylonjs.com/toolsAndResources/inspector
     * @param scene Defines the scene to inspect
     */ constructor(scene){
        // eslint-disable-next-line @typescript-eslint/naming-convention
        this.BJSINSPECTOR = this._getGlobalInspector();
        this._scene = scene || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EngineStore"].LastCreatedScene;
        if (!this._scene) {
            return;
        }
        this._scene.onDisposeObservable.add(()=>{
            // Debug layer
            if (this._scene._debugLayer) {
                this._scene._debugLayer.hide();
            }
        });
    }
    /**
     * Creates the inspector window.
     * @param config
     */ _createInspector(config) {
        if (this.isVisible()) {
            return;
        }
        if (this._onPropertyChangedObservable) {
            for (const observer of this._onPropertyChangedObservable.observers){
                this.BJSINSPECTOR.Inspector.OnPropertyChangedObservable.add(observer);
            }
            this._onPropertyChangedObservable.clear();
            this._onPropertyChangedObservable = undefined;
        }
        if (this._onSelectionChangedObservable) {
            for (const observer of this._onSelectionChangedObservable.observers){
                this.BJSINSPECTOR.Inspector.OnSelectionChangedObservable.add(observer);
            }
            this._onSelectionChangedObservable.clear();
            this._onSelectionChangedObservable = undefined;
        }
        const userOptions = {
            ...DebugLayer.Config,
            ...config
        };
        this.BJSINSPECTOR = this.BJSINSPECTOR || this._getGlobalInspector();
        this.BJSINSPECTOR.Inspector.Show(this._scene, userOptions);
    }
    /**
     * Select a specific entity in the scene explorer and highlight a specific block in that entity property grid
     * @param entity defines the entity to select
     * @param lineContainerTitles defines the specific blocks to highlight (could be a string or an array of strings)
     */ select(entity, lineContainerTitles) {
        if (this.BJSINSPECTOR) {
            if (lineContainerTitles) {
                if (Object.prototype.toString.call(lineContainerTitles) == "[object String]") {
                    this.BJSINSPECTOR.Inspector.MarkLineContainerTitleForHighlighting(lineContainerTitles);
                } else {
                    this.BJSINSPECTOR.Inspector.MarkMultipleLineContainerTitlesForHighlighting(lineContainerTitles);
                }
            }
            if (!this.BJSINSPECTOR.Inspector.IsVisible) {
                setTimeout(()=>{
                    this.select(entity, lineContainerTitles);
                }, 100);
            } else {
                this.BJSINSPECTOR.Inspector.OnSelectionChangeObservable.notifyObservers(entity);
            }
        }
    }
    /**
     * Get the inspector from bundle or global
     * @returns the inspector instance if found otherwise, null
     */ _getGlobalInspector() {
        // UMD Global name detection from Webpack Bundle UMD Name.
        if (typeof INSPECTOR !== "undefined") {
            return INSPECTOR;
        }
        // In case of module let s check the global emitted from the Inspector entry point.
        if (typeof BABYLON !== "undefined" && typeof BABYLON.Inspector !== "undefined") {
            return BABYLON;
        }
        return undefined;
    }
    /**
     * Get if the inspector is visible or not.
     * @returns true if visible otherwise, false
     */ isVisible() {
        return this.BJSINSPECTOR && this.BJSINSPECTOR.Inspector.IsVisible;
    }
    /**
     * Hide the inspector and close its window.
     */ hide() {
        if (this.BJSINSPECTOR) {
            this.BJSINSPECTOR.Inspector.Hide();
        }
    }
    /**
     * Get the number of opened panes in the inspector
     */ get openedPanes() {
        if (this.BJSINSPECTOR) {
            return this.BJSINSPECTOR.Inspector._OpenedPane;
        }
        return 0;
    }
    /**
     * Update the scene in the inspector
     */ setAsActiveScene() {
        if (this.BJSINSPECTOR) {
            this.BJSINSPECTOR.Inspector._SetNewScene(this._scene);
        }
    }
    popupSceneExplorer() {
        if (this.BJSINSPECTOR) {
            this.BJSINSPECTOR.Inspector.PopupSceneExplorer();
        }
    }
    popupInspector() {
        if (this.BJSINSPECTOR) {
            this.BJSINSPECTOR.Inspector.PopupInspector();
        }
    }
    popupEmbed() {
        if (this.BJSINSPECTOR) {
            this.BJSINSPECTOR.Inspector.PopupEmbed();
        }
    }
    /**
     * Launch the debugLayer.
     * @param config Define the configuration of the inspector
     * @returns a promise fulfilled when the debug layer is visible
     */ // eslint-disable-next-line @typescript-eslint/naming-convention
    async show(config) {
        return await new Promise((resolve)=>{
            if (typeof this.BJSINSPECTOR == "undefined") {
                const inspectorUrl = config && config.inspectorURL ? config.inspectorURL : DebugLayer.InspectorURL;
                // Load inspector and add it to the DOM
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tools"].LoadBabylonScript(inspectorUrl, ()=>{
                    this._createInspector(config);
                    resolve(this);
                });
            } else {
                // Otherwise creates the inspector
                this._createInspector(config);
                resolve(this);
            }
        });
    }
}
/**
 * Define the url to get the inspector script from.
 * By default it uses the babylonjs CDN.
 * @ignoreNaming
 */ DebugLayer.InspectorURL = `${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tools"]._DefaultCdnUrl}/v${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AbstractEngine"].Version}/inspector/babylon.inspector.bundle.js`;
/**
 * The default configuration of the inspector
 */ DebugLayer.Config = {
    overlay: false,
    showExplorer: true,
    showInspector: true,
    embedMode: false,
    handleResize: true,
    enablePopup: true
}; //# sourceMappingURL=debugLayer.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Debug/physicsViewer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PhysicsViewer",
    ()=>PhysicsViewer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/mesh.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$boxBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/boxBuilder.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$sphereBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/sphereBuilder.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.color.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/engineStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$standardMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/standardMaterial.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$physicsImpostor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/v1/physicsImpostor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Rendering$2f$utilityLayerRenderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Rendering/utilityLayerRenderer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$cylinderBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/cylinderBuilder.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$capsuleBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/capsuleBuilder.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$vertexData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/mesh.vertexData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$meshBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/meshBuilder.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Debug$2f$axesViewer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Debug/axesViewer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$transformNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/transformNode.js [app-client] (ecmascript)");
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
;
;
;
;
;
;
class PhysicsViewer {
    /**
     * Creates a new PhysicsViewer
     * @param scene defines the hosting scene
     * @param size Physics V2 size scalar
     * @param utilityLayer The utility layer the viewer will be added to
     */ constructor(scene, size, utilityLayer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Rendering$2f$utilityLayerRenderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UtilityLayerRenderer"].DefaultUtilityLayer){
        /** @internal */ this._impostors = [];
        /** @internal */ this._meshes = [];
        /** @internal */ this._bodies = [];
        /** @internal */ this._inertiaBodies = [];
        /** @internal */ this._constraints = [];
        /** @internal */ this._bodyMeshes = [];
        /** @internal */ this._inertiaMeshes = [];
        /** @internal */ this._constraintMeshes = [];
        /** @internal */ this._numMeshes = 0;
        /** @internal */ this._numBodies = 0;
        /** @internal */ this._numInertiaBodies = 0;
        /** @internal */ this._numConstraints = 0;
        this._ownUtilityLayer = false;
        this._debugMeshMeshes = new Array();
        this._constraintAxesSize = 0.4;
        this._constraintAngularSize = 0.4;
        this._scene = scene || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EngineStore"].LastCreatedScene;
        if (!this._scene) {
            return;
        }
        const physicEngine = this._scene.getPhysicsEngine();
        if (physicEngine) {
            this._physicsEnginePlugin = physicEngine.getPhysicsPlugin();
        }
        if (utilityLayer) {
            this._utilityLayer = utilityLayer;
        } else {
            this._utilityLayer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Rendering$2f$utilityLayerRenderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UtilityLayerRenderer"](this._scene, false);
            this._utilityLayer.pickUtilitySceneFirst = false;
            this._utilityLayer.utilityLayerScene.autoClearDepthAndStencil = true;
            this._ownUtilityLayer = true;
        }
        if (size) {
            this._constraintAxesSize = 0.4 * size;
            this._constraintAngularSize = 0.4 * size;
        }
    }
    /**
     * Updates the debug meshes of the physics engine.
     *
     * This code is useful for synchronizing the debug meshes of the physics engine with the physics impostor and mesh.
     * It checks if the impostor is disposed and if the plugin version is 1, then it syncs the mesh with the impostor.
     * This ensures that the debug meshes are up to date with the physics engine.
     */ _updateDebugMeshes() {
        const plugin = this._physicsEnginePlugin;
        if (plugin?.getPluginVersion() === 1) {
            this._updateDebugMeshesV1();
        } else {
            this._updateDebugMeshesV2();
        }
    }
    /**
     * Updates the debug meshes of the physics engine.
     *
     * This method is useful for synchronizing the debug meshes with the physics impostors.
     * It iterates through the impostors and meshes, and if the plugin version is 1, it syncs the mesh with the impostor.
     * This ensures that the debug meshes accurately reflect the physics impostors, which is important for debugging the physics engine.
     */ _updateDebugMeshesV1() {
        const plugin = this._physicsEnginePlugin;
        for(let i = 0; i < this._numMeshes; i++){
            const impostor = this._impostors[i];
            if (!impostor) {
                continue;
            }
            if (impostor.isDisposed) {
                this.hideImpostor(this._impostors[i--]);
            } else {
                if (impostor.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$physicsImpostor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PhysicsImpostor"].MeshImpostor) {
                    continue;
                }
                const mesh = this._meshes[i];
                if (mesh && plugin) {
                    plugin.syncMeshWithImpostor(mesh, impostor);
                }
            }
        }
    }
    /**
     * Updates the debug meshes of the physics engine for V2 plugin.
     *
     * This method is useful for synchronizing the debug meshes of the physics engine with the current state of the bodies.
     * It iterates through the bodies array and updates the debug meshes with the current transform of each body.
     * This ensures that the debug meshes accurately reflect the current state of the physics engine.
     */ _updateDebugMeshesV2() {
        const plugin = this._physicsEnginePlugin;
        for(let i = 0; i < this._numBodies;){
            const body = this._bodies[i];
            if (body && body.isDisposed && this.hideBody(body)) {
                continue;
            }
            const transform = this._bodyMeshes[i];
            if (body && transform) {
                plugin.syncTransform(body, transform);
            }
            i++;
        }
    }
    _updateInertiaMeshes() {
        for(let i = 0; i < this._numInertiaBodies;){
            const body = this._inertiaBodies[i];
            if (body && body.isDisposed && this.hideInertia(body)) {
                continue;
            }
            const mesh = this._inertiaMeshes[i];
            if (body && mesh) {
                this._updateDebugInertia(body, mesh);
            }
            i++;
        }
    }
    _updateDebugInertia(body, inertiaMesh) {
        const inertiaMatrixRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].Identity();
        const transformMatrixRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].Identity();
        const finalMatrixRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].Identity();
        if (body._pluginDataInstances.length) {
            const inertiaAsMesh = inertiaMesh;
            const inertiaMeshMatrixData = inertiaAsMesh._thinInstanceDataStorage.matrixData;
            const bodyTransformMatrixData = body.transformNode._thinInstanceDataStorage.matrixData;
            for(let i = 0; i < body._pluginDataInstances.length; i++){
                const props = body.getMassProperties(i);
                this._getMeshDebugInertiaMatrixToRef(props, inertiaMatrixRef);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].FromArrayToRef(bodyTransformMatrixData, i * 16, transformMatrixRef);
                inertiaMatrixRef.multiplyToRef(transformMatrixRef, finalMatrixRef);
                finalMatrixRef.copyToArray(inertiaMeshMatrixData, i * 16);
            }
            inertiaAsMesh.thinInstanceBufferUpdated("matrix");
        } else {
            const props = body.getMassProperties();
            this._getMeshDebugInertiaMatrixToRef(props, inertiaMatrixRef);
            body.transformNode.rotationQuaternion?.toRotationMatrix(transformMatrixRef);
            transformMatrixRef.setTranslation(body.transformNode.position);
            if (body.transformNode.parent) {
                const parentTransform = body.transformNode.parent.computeWorldMatrix(true);
                transformMatrixRef.multiplyToRef(parentTransform, transformMatrixRef);
            }
            inertiaMatrixRef.multiplyToRef(transformMatrixRef, inertiaMatrixRef);
            inertiaMatrixRef.decomposeToTransformNode(inertiaMesh);
        }
    }
    _updateDebugConstraints() {
        for(let i = 0; i < this._numConstraints; i++){
            const constraint = this._constraints[i];
            const mesh = this._constraintMeshes[i];
            if (constraint && mesh) {
                this._updateDebugConstraint(constraint, mesh[0]);
            }
        }
    }
    /**
     * Given a scaling vector, make all of its components
     * 1, preserving the sign
     * @param scaling
     */ _makeScalingUnitInPlace(scaling) {
        if (Math.abs(scaling.x - 1) > __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Epsilon"]) {
            scaling.x = 1 * Math.sign(scaling.x);
        }
        if (Math.abs(scaling.y - 1) > __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Epsilon"]) {
            scaling.y = 1 * Math.sign(scaling.y);
        }
        if (Math.abs(scaling.z - 1) > __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Epsilon"]) {
            scaling.z = 1 * Math.sign(scaling.z);
        }
    }
    _updateDebugConstraint(constraint, parentingMesh) {
        if (!constraint._initOptions) {
            return;
        }
        // Get constraint pivot and axes
        const { pivotA, pivotB, axisA, axisB, perpAxisA, perpAxisB } = constraint._initOptions;
        if (!pivotA || !pivotB || !axisA || !axisB || !perpAxisA || !perpAxisB) {
            return;
        }
        const descendants = parentingMesh.getDescendants(true);
        for (const parentConstraintMesh of descendants){
            // Get the parent transform
            const parentCoordSystemNode = parentConstraintMesh.getDescendants(true)[0];
            const childCoordSystemNode = parentConstraintMesh.getDescendants(true)[1];
            const { parentBody, parentBodyIndex } = parentCoordSystemNode.metadata;
            const { childBody, childBodyIndex } = childCoordSystemNode.metadata;
            const parentTransform = this._getTransformFromBodyToRef(parentBody, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[0], parentBodyIndex);
            const childTransform = this._getTransformFromBodyToRef(childBody, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[1], childBodyIndex);
            parentTransform.decomposeToTransformNode(parentCoordSystemNode);
            this._makeScalingUnitInPlace(parentCoordSystemNode.scaling);
            childTransform.decomposeToTransformNode(childCoordSystemNode);
            this._makeScalingUnitInPlace(childCoordSystemNode.scaling);
            // Create a transform node and set its matrix
            const parentTransformNode = parentCoordSystemNode.getDescendants(true)[0];
            parentTransformNode.position.copyFrom(pivotA);
            const childTransformNode = childCoordSystemNode.getDescendants(true)[0];
            childTransformNode.position.copyFrom(pivotB);
            // Get the transform to align the XYZ axes to the constraint axes
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"].FromRotationMatrixToRef(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].FromXYZAxesToRef(axisA, perpAxisA, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].CrossToRef(axisA, perpAxisA, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0]), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[0]), parentTransformNode.rotationQuaternion);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"].FromRotationMatrixToRef(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].FromXYZAxesToRef(axisB, perpAxisB, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].CrossToRef(axisB, perpAxisB, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[1]), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[1]), childTransformNode.rotationQuaternion);
        }
    }
    /**
     * Renders a specified physic impostor
     * @param impostor defines the impostor to render
     * @param targetMesh defines the mesh represented by the impostor
     * @returns the new debug mesh used to render the impostor
     */ showImpostor(impostor, targetMesh) {
        if (!this._scene) {
            return null;
        }
        for(let i = 0; i < this._numMeshes; i++){
            if (this._impostors[i] == impostor) {
                return null;
            }
        }
        const debugMesh = this._getDebugMesh(impostor, targetMesh);
        if (debugMesh) {
            this._impostors[this._numMeshes] = impostor;
            this._meshes[this._numMeshes] = debugMesh;
            if (this._numMeshes === 0) {
                this._renderFunction = ()=>this._updateDebugMeshes();
                this._scene.registerBeforeRender(this._renderFunction);
            }
            this._numMeshes++;
        }
        return debugMesh;
    }
    /**
     * Shows a debug mesh for a given physics body.
     * @param body The physics body to show.
     * @returns The debug mesh, or null if the body is already shown.
     *
     * This function is useful for visualizing the physics body in the scene.
     * It creates a debug mesh for the given body and adds it to the scene.
     * It also registers a before render function to update the debug mesh position and rotation.
     */ showBody(body) {
        if (!this._scene) {
            return null;
        }
        for(let i = 0; i < this._numBodies; i++){
            if (this._bodies[i] == body) {
                return null;
            }
        }
        const debugMesh = this._getDebugBodyMesh(body);
        if (debugMesh) {
            this._bodies[this._numBodies] = body;
            this._bodyMeshes[this._numBodies] = debugMesh;
            if (this._numBodies === 0) {
                this._renderFunction = ()=>this._updateDebugMeshes();
                this._scene.registerBeforeRender(this._renderFunction);
            }
            this._numBodies++;
        }
        return debugMesh;
    }
    /**
     * Shows a debug box corresponding to the inertia of a given body
     * @param body the physics body used to get the inertia
     * @returns the debug mesh used to show the inertia, or null if the body is already shown
     */ showInertia(body) {
        if (!this._scene) {
            return null;
        }
        for(let i = 0; i < this._numInertiaBodies; i++){
            if (this._inertiaBodies[i] == body) {
                return null;
            }
        }
        const debugMesh = this._getDebugInertiaMesh(body);
        if (debugMesh) {
            this._inertiaBodies[this._numInertiaBodies] = body;
            this._inertiaMeshes[this._numInertiaBodies] = debugMesh;
            if (this._numInertiaBodies === 0) {
                this._inertiaRenderFunction = ()=>this._updateInertiaMeshes();
                this._scene.registerBeforeRender(this._inertiaRenderFunction);
            }
            this._numInertiaBodies++;
        }
        return debugMesh;
    }
    /**
     * Shows a debug mesh for a given physics constraint.
     * @param constraint the physics constraint to show
     * @returns the debug mesh, or null if the constraint is already shown
     */ showConstraint(constraint) {
        if (!this._scene) {
            return null;
        }
        for(let i = 0; i < this._numConstraints; i++){
            if (this._constraints[i] == constraint) {
                return null;
            }
        }
        const debugMesh = this._getDebugConstraintMesh(constraint);
        if (debugMesh) {
            this._constraints[this._numConstraints] = constraint;
            this._constraintMeshes[this._numConstraints] = debugMesh;
            if (this._numConstraints === 0) {
                this._constraintRenderFunction = ()=>this._updateDebugConstraints();
                this._scene.registerBeforeRender(this._constraintRenderFunction);
            }
            this._numConstraints++;
        }
        return debugMesh ? debugMesh[0] : null;
    }
    /**
     * Hides an impostor from the scene.
     * @param impostor - The impostor to hide.
     *
     * This method is useful for hiding an impostor from the scene. It removes the
     * impostor from the utility layer scene, disposes the mesh, and removes the
     * impostor from the list of impostors. If the impostor is the last one in the
     * list, it also unregisters the render function.
     */ hideImpostor(impostor) {
        if (!impostor || !this._scene || !this._utilityLayer) {
            return;
        }
        let removed = false;
        const utilityLayerScene = this._utilityLayer.utilityLayerScene;
        for(let i = 0; i < this._numMeshes; i++){
            if (this._impostors[i] == impostor) {
                const mesh = this._meshes[i];
                if (!mesh) {
                    continue;
                }
                utilityLayerScene.removeMesh(mesh);
                mesh.dispose();
                const index = this._debugMeshMeshes.indexOf(mesh);
                if (index > -1) {
                    this._debugMeshMeshes.splice(index, 1);
                }
                this._numMeshes--;
                if (this._numMeshes > 0) {
                    this._meshes[i] = this._meshes[this._numMeshes];
                    this._impostors[i] = this._impostors[this._numMeshes];
                    this._meshes[this._numMeshes] = null;
                    this._impostors[this._numMeshes] = null;
                } else {
                    this._meshes[0] = null;
                    this._impostors[0] = null;
                }
                removed = true;
                break;
            }
        }
        if (removed && this._numMeshes === 0) {
            this._scene.unregisterBeforeRender(this._renderFunction);
        }
    }
    /**
     * Hides a body from the physics engine.
     * @param body - The body to hide.
     * @returns true if body actually removed
     *
     * This function is useful for hiding a body from the physics engine.
     * It removes the body from the utility layer scene and disposes the mesh associated with it.
     * It also unregisters the render function if the number of bodies is 0.
     * This is useful for hiding a body from the physics engine without deleting it.
     */ hideBody(body) {
        if (!body || !this._scene || !this._utilityLayer) {
            return false;
        }
        let removed = false;
        const utilityLayerScene = this._utilityLayer.utilityLayerScene;
        for(let i = 0; i < this._numBodies; i++){
            if (this._bodies[i] === body) {
                const mesh = this._bodyMeshes[i];
                if (!mesh) {
                    continue;
                }
                utilityLayerScene.removeMesh(mesh);
                mesh.dispose();
                this._numBodies--;
                if (this._numBodies > 0) {
                    this._bodyMeshes[i] = this._bodyMeshes[this._numBodies];
                    this._bodies[i] = this._bodies[this._numBodies];
                    this._bodyMeshes[this._numBodies] = null;
                    this._bodies[this._numBodies] = null;
                } else {
                    this._bodyMeshes[0] = null;
                    this._bodies[0] = null;
                }
                removed = true;
                break;
            }
        }
        if (removed && this._numBodies === 0) {
            this._scene.unregisterBeforeRender(this._renderFunction);
        }
        return removed;
    }
    /**
     * Hides a body's inertia from the viewer utility layer
     * @param body the body to hide
     * @returns true if inertia actually removed
     */ hideInertia(body) {
        if (!body || !this._scene || !this._utilityLayer) {
            return false;
        }
        let removed = false;
        const utilityLayerScene = this._utilityLayer.utilityLayerScene;
        for(let i = 0; i < this._numInertiaBodies; i++){
            if (this._inertiaBodies[i] === body) {
                const mesh = this._inertiaMeshes[i];
                if (!mesh) {
                    continue;
                }
                utilityLayerScene.removeMesh(mesh);
                mesh.dispose();
                this._inertiaBodies.splice(i, 1);
                this._inertiaMeshes.splice(i, 1);
                this._numInertiaBodies--;
                removed = true;
                break;
            }
        }
        if (removed && this._numInertiaBodies === 0) {
            this._scene.unregisterBeforeRender(this._inertiaRenderFunction);
        }
        return removed;
    }
    /**
     * Hide a physics constraint from the viewer utility layer
     * @param constraint the constraint to hide
     */ hideConstraint(constraint) {
        if (!constraint || !this._scene || !this._utilityLayer) {
            return;
        }
        let removed = false;
        const utilityLayerScene = this._utilityLayer.utilityLayerScene;
        for(let i = 0; i < this._numConstraints; i++){
            if (this._constraints[i] === constraint) {
                const meshes = this._constraintMeshes[i];
                if (!meshes) {
                    continue;
                }
                for (const mesh of meshes){
                    utilityLayerScene.removeMesh(mesh);
                    mesh.dispose();
                }
                this._constraints.splice(i, 1);
                this._constraintMeshes.splice(i, 1);
                this._numConstraints--;
                if (this._numConstraints > 0) {
                    this._constraints[i] = this._constraints[this._numConstraints];
                    this._constraintMeshes[i] = this._constraintMeshes[this._numConstraints];
                    this._constraints[this._numConstraints] = null;
                    this._constraintMeshes[this._numConstraints] = null;
                } else {
                    this._constraints[0] = null;
                    this._constraintMeshes[0] = null;
                }
                removed = true;
                break;
            }
        }
        if (removed && this._numConstraints === 0) {
            this._scene.unregisterBeforeRender(this._constraintRenderFunction);
        }
    }
    _getDebugMaterial(scene) {
        if (!this._debugMaterial) {
            this._debugMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$standardMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StandardMaterial"]("", scene);
            this._debugMaterial.wireframe = true;
            this._debugMaterial.emissiveColor = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color3"].White();
            this._debugMaterial.disableLighting = true;
        }
        return this._debugMaterial;
    }
    _getDebugInertiaMaterial(scene) {
        if (!this._debugInertiaMaterial) {
            this._debugInertiaMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$standardMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StandardMaterial"]("", scene);
            this._debugInertiaMaterial.disableLighting = true;
            this._debugInertiaMaterial.alpha = 0.0;
        }
        return this._debugInertiaMaterial;
    }
    _getDebugAxisColoredMaterial(axisNumber, scene) {
        const material = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$standardMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StandardMaterial"]("", scene);
        material.emissiveColor = axisNumber == 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color3"].Red() : axisNumber == 1 ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color3"].Green() : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color3"].Blue();
        material.disableLighting = true;
        return material;
    }
    _getDebugBoxMesh(scene) {
        if (!this._debugBoxMesh) {
            this._debugBoxMesh = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$boxBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreateBox"])("physicsBodyBoxViewMesh", {
                size: 1
            }, scene);
            this._debugBoxMesh.rotationQuaternion = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"].Identity();
            this._debugBoxMesh.material = this._getDebugMaterial(scene);
            this._debugBoxMesh.setEnabled(false);
        }
        return this._debugBoxMesh.createInstance("physicsBodyBoxViewInstance");
    }
    _getDebugSphereMesh(scene) {
        if (!this._debugSphereMesh) {
            this._debugSphereMesh = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$sphereBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreateSphere"])("physicsBodySphereViewMesh", {
                diameter: 1
            }, scene);
            this._debugSphereMesh.rotationQuaternion = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"].Identity();
            this._debugSphereMesh.material = this._getDebugMaterial(scene);
            this._debugSphereMesh.setEnabled(false);
        }
        return this._debugSphereMesh.createInstance("physicsBodySphereViewInstance");
    }
    _getDebugCapsuleMesh(scene) {
        if (!this._debugCapsuleMesh) {
            this._debugCapsuleMesh = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$capsuleBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreateCapsule"])("physicsBodyCapsuleViewMesh", {
                height: 1
            }, scene);
            this._debugCapsuleMesh.rotationQuaternion = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"].Identity();
            this._debugCapsuleMesh.material = this._getDebugMaterial(scene);
            this._debugCapsuleMesh.setEnabled(false);
        }
        return this._debugCapsuleMesh.createInstance("physicsBodyCapsuleViewInstance");
    }
    _getDebugCylinderMesh(scene) {
        if (!this._debugCylinderMesh) {
            this._debugCylinderMesh = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$cylinderBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreateCylinder"])("physicsBodyCylinderViewMesh", {
                diameterTop: 1,
                diameterBottom: 1,
                height: 1
            }, scene);
            this._debugCylinderMesh.rotationQuaternion = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"].Identity();
            this._debugCylinderMesh.material = this._getDebugMaterial(scene);
            this._debugCylinderMesh.setEnabled(false);
        }
        return this._debugCylinderMesh.createInstance("physicsBodyCylinderViewInstance");
    }
    _getDebugMeshMesh(mesh, scene) {
        const wireframeOver = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](mesh.name, scene, null, mesh);
        wireframeOver.setParent(mesh);
        wireframeOver.position = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        wireframeOver.material = this._getDebugMaterial(scene);
        this._debugMeshMeshes.push(wireframeOver);
        return wireframeOver;
    }
    _getDebugMesh(impostor, targetMesh) {
        if (!this._utilityLayer) {
            return null;
        }
        // Only create child impostor debug meshes when evaluating the parent
        if (targetMesh && targetMesh.parent && targetMesh.parent.physicsImpostor) {
            return null;
        }
        let mesh = null;
        const utilityLayerScene = this._utilityLayer.utilityLayerScene;
        if (!impostor.physicsBody) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Warn("Unable to get physicsBody of impostor. It might be initialized later by its parent's impostor.");
            return null;
        }
        switch(impostor.type){
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$physicsImpostor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PhysicsImpostor"].BoxImpostor:
                mesh = this._getDebugBoxMesh(utilityLayerScene);
                impostor.getBoxSizeToRef(mesh.scaling);
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$physicsImpostor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PhysicsImpostor"].SphereImpostor:
                {
                    mesh = this._getDebugSphereMesh(utilityLayerScene);
                    const radius = impostor.getRadius();
                    mesh.scaling.x = radius * 2;
                    mesh.scaling.y = radius * 2;
                    mesh.scaling.z = radius * 2;
                    break;
                }
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$physicsImpostor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PhysicsImpostor"].CapsuleImpostor:
                {
                    mesh = this._getDebugCapsuleMesh(utilityLayerScene);
                    const bi = impostor.object.getBoundingInfo();
                    mesh.scaling.x = (bi.boundingBox.maximum.x - bi.boundingBox.minimum.x) * 2 * impostor.object.scaling.x;
                    mesh.scaling.y = (bi.boundingBox.maximum.y - bi.boundingBox.minimum.y) * impostor.object.scaling.y;
                    mesh.scaling.z = (bi.boundingBox.maximum.z - bi.boundingBox.minimum.z) * 2 * impostor.object.scaling.z;
                    break;
                }
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$physicsImpostor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PhysicsImpostor"].MeshImpostor:
                if (targetMesh) {
                    mesh = this._getDebugMeshMesh(targetMesh, utilityLayerScene);
                }
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$physicsImpostor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PhysicsImpostor"].NoImpostor:
                if (targetMesh) {
                    // Handle compound impostors
                    const childMeshes = targetMesh.getChildMeshes().filter((c)=>{
                        return c.physicsImpostor ? 1 : 0;
                    });
                    for (const m of childMeshes){
                        if (m.physicsImpostor && m.getClassName() === "Mesh") {
                            const boundingInfo = m.getBoundingInfo();
                            const min = boundingInfo.boundingBox.minimum;
                            const max = boundingInfo.boundingBox.maximum;
                            switch(m.physicsImpostor.type){
                                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$physicsImpostor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PhysicsImpostor"].BoxImpostor:
                                    mesh = this._getDebugBoxMesh(utilityLayerScene);
                                    mesh.position.copyFrom(min);
                                    mesh.position.addInPlace(max);
                                    mesh.position.scaleInPlace(0.5);
                                    break;
                                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$physicsImpostor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PhysicsImpostor"].SphereImpostor:
                                    mesh = this._getDebugSphereMesh(utilityLayerScene);
                                    break;
                                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$physicsImpostor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PhysicsImpostor"].CylinderImpostor:
                                    mesh = this._getDebugCylinderMesh(utilityLayerScene);
                                    break;
                                default:
                                    mesh = null;
                                    break;
                            }
                            if (mesh) {
                                mesh.scaling.x = max.x - min.x;
                                mesh.scaling.y = max.y - min.y;
                                mesh.scaling.z = max.z - min.z;
                                mesh.parent = m;
                            }
                        }
                    }
                } else {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Warn("No target mesh parameter provided for NoImpostor. Skipping.");
                }
                mesh = null;
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$physicsImpostor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PhysicsImpostor"].CylinderImpostor:
                {
                    mesh = this._getDebugCylinderMesh(utilityLayerScene);
                    const bi = impostor.object.getBoundingInfo();
                    mesh.scaling.x = (bi.boundingBox.maximum.x - bi.boundingBox.minimum.x) * impostor.object.scaling.x;
                    mesh.scaling.y = (bi.boundingBox.maximum.y - bi.boundingBox.minimum.y) * impostor.object.scaling.y;
                    mesh.scaling.z = (bi.boundingBox.maximum.z - bi.boundingBox.minimum.z) * impostor.object.scaling.z;
                    break;
                }
        }
        return mesh;
    }
    /**
     * Creates a debug mesh for a given physics body
     * @param body The physics body to create the debug mesh for
     * @returns The created debug mesh or null if the utility layer is not available
     *
     * This code is useful for creating a debug mesh for a given physics body.
     * It creates a Mesh object with a VertexData object containing the positions and indices
     * of the geometry of the body. The mesh is then assigned a debug material from the utility layer scene.
     * This allows for visualizing the physics body in the scene.
     */ _getDebugBodyMesh(body) {
        if (!this._utilityLayer) {
            return null;
        }
        const utilityLayerScene = this._utilityLayer.utilityLayerScene;
        const mesh = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"]("custom", utilityLayerScene);
        const vertexData = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$vertexData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VertexData"]();
        const geometry = body.getGeometry();
        vertexData.positions = geometry.positions;
        vertexData.indices = geometry.indices;
        vertexData.applyToMesh(mesh);
        if (body._pluginDataInstances) {
            const instanceBuffer = new Float32Array(body._pluginDataInstances.length * 16);
            mesh.thinInstanceSetBuffer("matrix", instanceBuffer, 16, false);
        }
        mesh.material = this._getDebugMaterial(utilityLayerScene);
        return mesh;
    }
    _getMeshDebugInertiaMatrixToRef(massProps, matrix) {
        const orientation = massProps.inertiaOrientation ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"].Identity();
        const inertiaLocal = massProps.inertia ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        const center = massProps.centerOfMass ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        const betaSqrd = (inertiaLocal.x - inertiaLocal.y + inertiaLocal.z) * 6;
        const beta = Math.sqrt(Math.max(betaSqrd, 0)); // Safety check for zeroed elements!
        const gammaSqrd = inertiaLocal.x * 12 - betaSqrd;
        const gamma = Math.sqrt(Math.max(gammaSqrd, 0)); // Safety check for zeroed elements!
        const alphaSqrd = inertiaLocal.z * 12 - betaSqrd;
        const alpha = Math.sqrt(Math.max(alphaSqrd, 0)); // Safety check for zeroed elements!
        const extents = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0];
        extents.set(alpha, beta, gamma);
        const scaling = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].ScalingToRef(extents.x, extents.y, extents.z, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[0]);
        const rotation = orientation.toRotationMatrix(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[1]);
        const translation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].TranslationToRef(center.x, center.y, center.z, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[2]);
        scaling.multiplyToRef(rotation, matrix);
        matrix.multiplyToRef(translation, matrix);
        return matrix;
    }
    _getDebugInertiaMesh(body) {
        if (!this._utilityLayer) {
            return null;
        }
        const utilityLayerScene = this._utilityLayer.utilityLayerScene;
        // The base inertia mesh is going to be a 1x1 cube that's scaled and rotated according to the inertia
        const inertiaBoxMesh = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$meshBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshBuilder"].CreateBox("custom", {
            size: 1
        }, utilityLayerScene);
        const matrixRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].Identity();
        if (body._pluginDataInstances.length) {
            const instanceBuffer = new Float32Array(body._pluginDataInstances.length * 16);
            for(let i = 0; i < body._pluginDataInstances.length; ++i){
                const props = body.getMassProperties(i);
                this._getMeshDebugInertiaMatrixToRef(props, matrixRef);
                matrixRef.copyToArray(instanceBuffer, i * 16);
            }
            inertiaBoxMesh.thinInstanceSetBuffer("matrix", instanceBuffer, 16, false);
        } else {
            const props = body.getMassProperties();
            this._getMeshDebugInertiaMatrixToRef(props, matrixRef);
            matrixRef.decomposeToTransformNode(inertiaBoxMesh);
        }
        inertiaBoxMesh.enableEdgesRendering();
        inertiaBoxMesh.edgesWidth = 2.0;
        inertiaBoxMesh.edgesColor = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color4"](1, 0, 1, 1);
        inertiaBoxMesh.material = this._getDebugInertiaMaterial(utilityLayerScene);
        return inertiaBoxMesh;
    }
    _getTransformFromBodyToRef(body, matrix, instanceIndex) {
        const tnode = body.transformNode;
        if (instanceIndex && instanceIndex >= 0) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].FromArrayToRef(tnode._thinInstanceDataStorage.matrixData, instanceIndex, matrix);
        } else {
            return matrix.copyFrom(tnode.getWorldMatrix());
        }
    }
    _createAngularConstraintMesh(minLimit, maxLimit, axisNumber, parent, scene) {
        const arcAngle = (maxLimit - minLimit) / (Math.PI * 2);
        const mesh = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$meshBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshBuilder"].CreateCylinder("ConstraintCylinder", {
            height: 0.0001,
            diameter: 3 * this._constraintAngularSize,
            arc: arcAngle
        }, scene);
        mesh.material = this._getDebugAxisColoredMaterial(axisNumber, scene);
        mesh.parent = parent;
        const parentScaling = parent.absoluteScaling;
        switch(axisNumber){
            case 0:
                mesh.rotation.z = Math.PI * 0.5;
                mesh.rotation.x = -minLimit + Math.PI * 0.5;
                // scaling on y,z
                mesh.scaling.x = 1 / parentScaling.x;
                mesh.scaling.y = 1 / parentScaling.z;
                mesh.scaling.z = 1 / parentScaling.y;
                break;
            case 1:
                mesh.rotation.y = Math.PI * 1.5 + minLimit;
                // flip x,z
                mesh.scaling.x = 1 / parentScaling.z;
                mesh.scaling.y = 1 / parentScaling.y;
                mesh.scaling.z = 1 / parentScaling.x;
                break;
            case 2:
                mesh.rotation.x = Math.PI * 0.5;
                // flip z,y
                mesh.scaling.x = 1 / parentScaling.x;
                mesh.scaling.y = 1 / parentScaling.z;
                mesh.scaling.z = 1 / parentScaling.y;
                break;
        }
        return mesh;
    }
    _createCage(parent, scene) {
        const cage = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$meshBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshBuilder"].CreateBox("cage", {
            size: 1
        }, scene);
        cage.setPivotPoint(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](-0.5, -0.5, -0.5));
        const transparentMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$standardMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StandardMaterial"]("cage_material", scene);
        transparentMaterial.alpha = 0; // Fully transparent
        cage.material = transparentMaterial;
        cage.enableEdgesRendering();
        cage.edgesWidth = 4.0;
        cage.edgesColor = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color4"](1, 1, 1, 1);
        cage.parent = parent;
        return cage;
    }
    _getDebugConstraintMesh(constraint) {
        if (!this._utilityLayer) {
            return null;
        }
        const utilityLayerScene = this._utilityLayer.utilityLayerScene;
        if (!constraint._initOptions) {
            return null;
        }
        // Get constraint pivot and axes
        const { pivotA, pivotB, axisA, axisB, perpAxisA, perpAxisB } = constraint._initOptions;
        if (!pivotA || !pivotB || !axisA || !axisB || !perpAxisA || !perpAxisB) {
            return null;
        }
        // Create a mesh to parent all the constraint debug meshes to
        const parentingMesh = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"]("parentingDebugConstraint", utilityLayerScene);
        // First, get a reference to all physic bodies that are using this constraint
        const bodiesUsingConstraint = constraint.getBodiesUsingConstraint();
        const parentedConstraintMeshes = [];
        parentedConstraintMeshes.push(parentingMesh);
        for (const bodyPairInfo of bodiesUsingConstraint){
            // Create a mesh to keep the pair of constraint axes
            const parentOfPair = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$transformNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransformNode"]("parentOfPair", utilityLayerScene);
            parentOfPair.parent = parentingMesh;
            const { parentBody, parentBodyIndex, childBody, childBodyIndex } = bodyPairInfo;
            // Get the parent transform
            const parentTransform = this._getTransformFromBodyToRef(parentBody, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[0], parentBodyIndex);
            const childTransform = this._getTransformFromBodyToRef(childBody, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[1], childBodyIndex);
            const parentCoordSystemNode = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$transformNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransformNode"]("parentCoordSystem", utilityLayerScene);
            // parentCoordSystemNode.parent = parentingMesh;
            parentCoordSystemNode.parent = parentOfPair;
            // Save parent and index here to be able to get the transform on update
            parentCoordSystemNode.metadata = {
                parentBody,
                parentBodyIndex
            };
            parentTransform.decomposeToTransformNode(parentCoordSystemNode);
            const childCoordSystemNode = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$transformNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransformNode"]("childCoordSystem", utilityLayerScene);
            // childCoordSystemNode.parent = parentingMesh;
            childCoordSystemNode.parent = parentOfPair;
            // Save child and index here to be able to get the transform on update
            childCoordSystemNode.metadata = {
                childBody,
                childBodyIndex
            };
            childTransform.decomposeToTransformNode(childCoordSystemNode);
            // Get the transform to align the XYZ axes to the constraint axes
            const rotTransformParent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"].FromRotationMatrix(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].FromXYZAxesToRef(axisA, perpAxisA, axisA.cross(perpAxisA), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[0]));
            const rotTransformChild = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"].FromRotationMatrix(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].FromXYZAxesToRef(axisB, perpAxisB, axisB.cross(perpAxisB), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[0]));
            const translateTransformParent = pivotA;
            const translateTransformChild = pivotB;
            // Create a transform node and set its matrix
            const parentTransformNode = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$transformNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransformNode"]("constraint_parent", utilityLayerScene);
            parentTransformNode.position.copyFrom(translateTransformParent);
            parentTransformNode.rotationQuaternion = rotTransformParent;
            parentTransformNode.parent = parentCoordSystemNode;
            const childTransformNode = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$transformNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransformNode"]("constraint_child", utilityLayerScene);
            childTransformNode.parent = childCoordSystemNode;
            childTransformNode.position.copyFrom(translateTransformChild);
            childTransformNode.rotationQuaternion = rotTransformChild;
            // Create axes for the constraint
            const parentAxes = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Debug$2f$axesViewer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AxesViewer"](utilityLayerScene, this._constraintAxesSize);
            parentAxes.xAxis.parent = parentTransformNode;
            parentAxes.yAxis.parent = parentTransformNode;
            parentAxes.zAxis.parent = parentTransformNode;
            const childAxes = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Debug$2f$axesViewer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AxesViewer"](utilityLayerScene, this._constraintAxesSize);
            childAxes.xAxis.parent = childTransformNode;
            childAxes.yAxis.parent = childTransformNode;
            childAxes.zAxis.parent = childTransformNode;
            // constrain vis
            const engine = this._physicsEnginePlugin;
            const constraintAxisAngular = [
                3 /* PhysicsConstraintAxis.ANGULAR_X */ ,
                4 /* PhysicsConstraintAxis.ANGULAR_Y */ ,
                5 /* PhysicsConstraintAxis.ANGULAR_Z */ 
            ];
            const constraintAxisLinear = [
                0 /* PhysicsConstraintAxis.LINEAR_X */ ,
                1 /* PhysicsConstraintAxis.LINEAR_Y */ ,
                2 /* PhysicsConstraintAxis.LINEAR_Z */ 
            ];
            const constraintAxis = [
                constraintAxisAngular,
                constraintAxisLinear
            ];
            // count axis. Angular and Linear
            const lockCount = [
                0,
                0
            ];
            for(let angularLinear = 0; angularLinear < 2; angularLinear++){
                for(let axis = 0; axis < 3; axis++){
                    const constraintAxisValue = constraintAxis[angularLinear][axis];
                    const axisMode = engine.getAxisMode(constraint, constraintAxisValue);
                    if (axisMode == 2 /* PhysicsConstraintAxisLimitMode.LOCKED */ ) {
                        lockCount[angularLinear]++;
                    }
                }
            }
            // Any free/limited Linear axis
            if (lockCount[1] != 3) {
                const cage = this._createCage(parentTransformNode, utilityLayerScene);
                const min = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0];
                const max = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[1];
                const limited = [
                    false,
                    false,
                    false
                ];
                limited[0] = engine.getAxisMode(constraint, 0 /* PhysicsConstraintAxis.LINEAR_X */ ) == 1 /* PhysicsConstraintAxisLimitMode.LIMITED */ ;
                limited[1] = engine.getAxisMode(constraint, 1 /* PhysicsConstraintAxis.LINEAR_Y */ ) == 1 /* PhysicsConstraintAxisLimitMode.LIMITED */ ;
                limited[2] = engine.getAxisMode(constraint, 2 /* PhysicsConstraintAxis.LINEAR_Z */ ) == 1 /* PhysicsConstraintAxisLimitMode.LIMITED */ ;
                min.x = limited[0] ? engine.getAxisMinLimit(constraint, 0 /* PhysicsConstraintAxis.LINEAR_X */ ) : 0;
                max.x = limited[0] ? engine.getAxisMaxLimit(constraint, 0 /* PhysicsConstraintAxis.LINEAR_X */ ) : 0;
                min.y = limited[1] ? engine.getAxisMinLimit(constraint, 1 /* PhysicsConstraintAxis.LINEAR_Y */ ) : 0;
                max.y = limited[1] ? engine.getAxisMaxLimit(constraint, 1 /* PhysicsConstraintAxis.LINEAR_Y */ ) : 0;
                min.z = limited[2] ? engine.getAxisMinLimit(constraint, 2 /* PhysicsConstraintAxis.LINEAR_Z */ ) : 0;
                max.z = limited[2] ? engine.getAxisMaxLimit(constraint, 2 /* PhysicsConstraintAxis.LINEAR_Z */ ) : 0;
                cage.position.x = min.x + 0.5;
                cage.position.y = min.y + 0.5;
                cage.position.z = min.z + 0.5;
                cage.scaling.x = max.x - min.x + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Epsilon"];
                cage.scaling.y = max.y - min.y + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Epsilon"];
                cage.scaling.z = max.z - min.z + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Epsilon"];
                parentedConstraintMeshes.push(cage);
            }
            // Angular
            if (lockCount[0] != 3) {
                for(let axisIndex = 0; axisIndex < 3; axisIndex++){
                    const axis = constraintAxisAngular[axisIndex];
                    const axisMode = engine.getAxisMode(constraint, axis);
                    let minLimit = 0;
                    let maxLimit = Math.PI * 2;
                    if (axisMode == 1 /* PhysicsConstraintAxisLimitMode.LIMITED */ ) {
                        minLimit = engine.getAxisMinLimit(constraint, axis);
                        maxLimit = engine.getAxisMaxLimit(constraint, axis);
                    }
                    if (axisMode != 2 /* PhysicsConstraintAxisLimitMode.LOCKED */  && constraint.options.pivotB) {
                        const mesh = this._createAngularConstraintMesh(minLimit, maxLimit, axisIndex, childBody.transformNode, utilityLayerScene);
                        mesh.position.copyFrom(constraint.options.pivotB);
                        parentedConstraintMeshes.push(mesh);
                    }
                }
            }
        }
        return parentedConstraintMeshes;
    }
    /**
     * Clean up physics debug display
     */ dispose() {
        // impostors
        for(let index = this._numMeshes - 1; index >= 0; index--){
            this.hideImpostor(this._impostors[0]);
        }
        // bodies
        for(let index = this._numBodies - 1; index >= 0; index--){
            this.hideBody(this._bodies[0]);
        }
        // inertia
        for(let index = this._numInertiaBodies - 1; index >= 0; index--){
            this.hideInertia(this._inertiaBodies[0]);
        }
        if (this._debugBoxMesh) {
            this._debugBoxMesh.dispose();
        }
        if (this._debugSphereMesh) {
            this._debugSphereMesh.dispose();
        }
        if (this._debugCylinderMesh) {
            this._debugCylinderMesh.dispose();
        }
        if (this._debugMaterial) {
            this._debugMaterial.dispose();
        }
        this._impostors.length = 0;
        this._scene = null;
        this._physicsEnginePlugin = null;
        if (this._ownUtilityLayer && this._utilityLayer) {
            this._utilityLayer.dispose();
            this._utilityLayer = null;
        }
    }
} //# sourceMappingURL=physicsViewer.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Debug/rayHelper.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RayHelper",
    ()=>RayHelper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$linesBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/linesBuilder.js [app-client] (ecmascript)");
;
;
class RayHelper {
    /**
     * Helper function to create a colored helper in a scene in one line.
     * @param ray Defines the ray we are currently trying to visualize
     * @param scene Defines the scene the ray is used in
     * @param color Defines the color we want to see the ray in
     * @returns The newly created ray helper.
     */ static CreateAndShow(ray, scene, color) {
        const helper = new RayHelper(ray);
        helper.show(scene, color);
        return helper;
    }
    /**
     * Instantiate a new ray helper.
     * As raycast might be hard to debug, the RayHelper can help rendering the different rays
     * in order to better appreciate the issue one might have.
     * @see https://doc.babylonjs.com/features/featuresDeepDive/mesh/interactions/picking_collisions#debugging
     * @param ray Defines the ray we are currently trying to visualize
     */ constructor(ray){
        this.ray = ray;
    }
    /**
     * Shows the ray we are willing to debug.
     * @param scene Defines the scene the ray needs to be rendered in
     * @param color Defines the color the ray needs to be rendered in
     */ show(scene, color) {
        if (!this._renderFunction && this.ray) {
            const ray = this.ray;
            this._renderFunction = ()=>this._render();
            this._scene = scene;
            this._renderPoints = [
                ray.origin,
                ray.origin.add(ray.direction.scale(ray.length))
            ];
            this._renderLine = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$linesBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreateLines"])("ray", {
                points: this._renderPoints,
                updatable: true
            }, scene);
            this._renderLine.isPickable = false;
            if (this._renderFunction) {
                this._scene.registerBeforeRender(this._renderFunction);
            }
        }
        if (color && this._renderLine) {
            this._renderLine.color.copyFrom(color);
        }
    }
    /**
     * Hides the ray we are debugging.
     */ hide() {
        if (this._renderFunction && this._scene) {
            this._scene.unregisterBeforeRender(this._renderFunction);
            this._scene = null;
            this._renderFunction = null;
            if (this._renderLine) {
                this._renderLine.dispose();
                this._renderLine = null;
            }
            this._renderPoints = [];
        }
    }
    _render() {
        const ray = this.ray;
        if (!ray) {
            return;
        }
        const point = this._renderPoints[1];
        const len = Math.min(ray.length, 1000000);
        point.copyFrom(ray.direction);
        point.scaleInPlace(len);
        point.addInPlace(ray.origin);
        this._renderPoints[0].copyFrom(ray.origin);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$linesBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreateLines"])("ray", {
            points: this._renderPoints,
            updatable: true,
            instance: this._renderLine
        }, this._scene);
        this._renderLine?.refreshBoundingInfo();
    }
    /**
     * Attach a ray helper to a mesh so that we can easily see its orientation for instance or information like its normals.
     * @param mesh Defines the mesh we want the helper attached to
     * @param meshSpaceDirection Defines the direction of the Ray in mesh space (local space of the mesh node)
     * @param meshSpaceOrigin Defines the origin of the Ray in mesh space (local space of the mesh node)
     * @param length Defines the length of the ray
     */ attachToMesh(mesh, meshSpaceDirection, meshSpaceOrigin, length) {
        this._attachedToMesh = mesh;
        const ray = this.ray;
        if (!ray) {
            return;
        }
        if (!ray.direction) {
            ray.direction = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        }
        if (!ray.origin) {
            ray.origin = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        }
        if (length) {
            ray.length = length;
        }
        if (!meshSpaceOrigin) {
            meshSpaceOrigin = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        }
        if (!meshSpaceDirection) {
            // -1 so that this will work with Mesh.lookAt
            meshSpaceDirection = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, -1);
        }
        if (!this._scene) {
            this._scene = mesh.getScene();
        }
        if (!this._meshSpaceDirection) {
            this._meshSpaceDirection = meshSpaceDirection.clone();
            this._meshSpaceOrigin = meshSpaceOrigin.clone();
        } else {
            this._meshSpaceDirection.copyFrom(meshSpaceDirection);
            this._meshSpaceOrigin.copyFrom(meshSpaceOrigin);
        }
        if (!this._onAfterRenderObserver) {
            this._onAfterRenderObserver = this._scene.onBeforeRenderObservable.add(()=>this._updateToMesh());
            this._onAfterStepObserver = this._scene.onAfterStepObservable.add(()=>this._updateToMesh());
        }
        // force world matrix computation before the first ray helper computation
        this._attachedToMesh.computeWorldMatrix(true);
        this._updateToMesh();
    }
    /**
     * Detach the ray helper from the mesh it has previously been attached to.
     */ detachFromMesh() {
        if (this._attachedToMesh && this._scene) {
            if (this._onAfterRenderObserver) {
                this._scene.onBeforeRenderObservable.remove(this._onAfterRenderObserver);
                this._scene.onAfterStepObservable.remove(this._onAfterStepObserver);
            }
            this._attachedToMesh = null;
            this._onAfterRenderObserver = null;
            this._onAfterStepObserver = null;
            this._scene = null;
        }
    }
    _updateToMesh() {
        const ray = this.ray;
        if (!this._attachedToMesh || !ray) {
            return;
        }
        if (this._attachedToMesh.isDisposed()) {
            this.detachFromMesh();
            return;
        }
        this._attachedToMesh.getDirectionToRef(this._meshSpaceDirection, ray.direction);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinatesToRef(this._meshSpaceOrigin, this._attachedToMesh.getWorldMatrix(), ray.origin);
    }
    /**
     * Dispose the helper and release its associated resources.
     */ dispose() {
        this.hide();
        this.detachFromMesh();
        this.ray = null;
    }
} //# sourceMappingURL=rayHelper.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Debug/skeletonViewer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SkeletonViewer",
    ()=>SkeletonViewer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.color.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/mesh.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$linesBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/linesBuilder.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Rendering$2f$utilityLayerRenderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Rendering/utilityLayerRenderer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$material$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/material.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$shaderMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/shaderMaterial.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$dynamicTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/dynamicTexture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Buffers/buffer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$effect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/effect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$sphereBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/sphereBuilder.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$shapeBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/shapeBuilder.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$transformNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/transformNode.js [app-client] (ecmascript)");
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
class SkeletonViewer {
    /** public static method to create a BoneWeight Shader
     * @param options The constructor options
     * @param scene The scene that the shader is scoped to
     * @returns The created ShaderMaterial
     * @see http://www.babylonjs-playground.com/#1BZJVJ#395
     */ static CreateBoneWeightShader(options, scene) {
        const skeleton = options.skeleton;
        const colorBase = options.colorBase ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color3"].Black();
        const colorZero = options.colorZero ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color3"].Blue();
        const colorQuarter = options.colorQuarter ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color3"].Green();
        const colorHalf = options.colorHalf ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color3"].Yellow();
        const colorFull = options.colorFull ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color3"].Red();
        const targetBoneIndex = options.targetBoneIndex ?? 0;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$effect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Effect"].ShadersStore["boneWeights:" + skeleton.name + "VertexShader"] = `precision highp float;

        attribute vec3 position;
        attribute vec2 uv;

        uniform mat4 view;
        uniform mat4 projection;
        uniform mat4 worldViewProjection;

        #include<bonesDeclaration>
        #if NUM_BONE_INFLUENCERS == 0
            attribute vec4 matricesIndices;
            attribute vec4 matricesWeights;
        #endif
        #include<bakedVertexAnimationDeclaration>

        #include<instancesDeclaration>

        varying vec3 vColor;

        uniform vec3 colorBase;
        uniform vec3 colorZero;
        uniform vec3 colorQuarter;
        uniform vec3 colorHalf;
        uniform vec3 colorFull;

        uniform float targetBoneIndex;

        void main() {
            vec3 positionUpdated = position;

            #include<instancesVertex>
            #include<bonesVertex>
            #include<bakedVertexAnimation>

            vec4 worldPos = finalWorld * vec4(positionUpdated, 1.0);

            vec3 color = colorBase;
            float totalWeight = 0.;
            if(matricesIndices[0] == targetBoneIndex && matricesWeights[0] > 0.){
                totalWeight += matricesWeights[0];
            }
            if(matricesIndices[1] == targetBoneIndex && matricesWeights[1] > 0.){
                totalWeight += matricesWeights[1];
            }
            if(matricesIndices[2] == targetBoneIndex && matricesWeights[2] > 0.){
                totalWeight += matricesWeights[2];
            }
            if(matricesIndices[3] == targetBoneIndex && matricesWeights[3] > 0.){
                totalWeight += matricesWeights[3];
            }

            color = mix(color, colorZero, smoothstep(0., 0.25, totalWeight));
            color = mix(color, colorQuarter, smoothstep(0.25, 0.5, totalWeight));
            color = mix(color, colorHalf, smoothstep(0.5, 0.75, totalWeight));
            color = mix(color, colorFull, smoothstep(0.75, 1.0, totalWeight));
            vColor = color;

        gl_Position = projection * view * worldPos;
        }`;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$effect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Effect"].ShadersStore["boneWeights:" + skeleton.name + "FragmentShader"] = `
            precision highp float;
            varying vec3 vPosition;

            varying vec3 vColor;

            void main() {
                vec4 color = vec4(vColor, 1.0);
                gl_FragColor = color;
            }
        `;
        const shader = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$shaderMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderMaterial"]("boneWeight:" + skeleton.name, scene, {
            vertex: "boneWeights:" + skeleton.name,
            fragment: "boneWeights:" + skeleton.name
        }, {
            attributes: [
                "position",
                "normal",
                "matricesIndices",
                "matricesWeights"
            ],
            uniforms: [
                "world",
                "worldView",
                "worldViewProjection",
                "view",
                "projection",
                "viewProjection",
                "colorBase",
                "colorZero",
                "colorQuarter",
                "colorHalf",
                "colorFull",
                "targetBoneIndex"
            ]
        });
        shader.setColor3("colorBase", colorBase);
        shader.setColor3("colorZero", colorZero);
        shader.setColor3("colorQuarter", colorQuarter);
        shader.setColor3("colorHalf", colorHalf);
        shader.setColor3("colorFull", colorFull);
        shader.setFloat("targetBoneIndex", targetBoneIndex);
        shader.getClassName = ()=>{
            return "BoneWeightShader";
        };
        shader.transparencyMode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$material$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Material"].MATERIAL_OPAQUE;
        return shader;
    }
    /** public static method to create a BoneWeight Shader
     * @param options The constructor options
     * @param scene The scene that the shader is scoped to
     * @returns The created ShaderMaterial
     */ static CreateSkeletonMapShader(options, scene) {
        const skeleton = options.skeleton;
        const colorMap = options.colorMap ?? [
            {
                color: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color3"](1, 0.38, 0.18),
                location: 0
            },
            {
                color: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color3"](0.59, 0.18, 1.0),
                location: 0.2
            },
            {
                color: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color3"](0.59, 1, 0.18),
                location: 0.4
            },
            {
                color: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color3"](1, 0.87, 0.17),
                location: 0.6
            },
            {
                color: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color3"](1, 0.17, 0.42),
                location: 0.8
            },
            {
                color: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color3"](0.17, 0.68, 1.0),
                location: 1.0
            }
        ];
        const bufferWidth = skeleton.bones.length + 1;
        const colorMapBuffer = SkeletonViewer._CreateBoneMapColorBuffer(bufferWidth, colorMap, scene);
        const shader = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$shaderMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderMaterial"]("boneWeights:" + skeleton.name, scene, {
            vertexSource: `precision highp float;

            attribute vec3 position;
            attribute vec2 uv;

            uniform mat4 view;
            uniform mat4 projection;
            uniform mat4 worldViewProjection;
            uniform float colorMap[` + skeleton.bones.length * 4 + `];

            #include<bonesDeclaration>
            #if NUM_BONE_INFLUENCERS == 0
                attribute vec4 matricesIndices;
                attribute vec4 matricesWeights;
            #endif
            #include<bakedVertexAnimationDeclaration>
            #include<instancesDeclaration>

            varying vec3 vColor;

            void main() {
                vec3 positionUpdated = position;

                #include<instancesVertex>
                #include<bonesVertex>
                #include<bakedVertexAnimation>

                vec3 color = vec3(0.);
                bool first = true;

                for (int i = 0; i < 4; i++) {
                    int boneIdx = int(matricesIndices[i]);
                    float boneWgt = matricesWeights[i];

                    vec3 c = vec3(colorMap[boneIdx * 4 + 0], colorMap[boneIdx * 4 + 1], colorMap[boneIdx * 4 + 2]);

                    if (boneWgt > 0.) {
                        if (first) {
                            first = false;
                            color = c;
                        } else {
                            color = mix(color, c, boneWgt);
                        }
                    }
                }

                vColor = color;

                vec4 worldPos = finalWorld * vec4(positionUpdated, 1.0);

                gl_Position = projection * view * worldPos;
            }`,
            fragmentSource: `
            precision highp float;
            varying vec3 vColor;

            void main() {
                vec4 color = vec4( vColor, 1.0 );
                gl_FragColor = color;
            }
            `
        }, {
            attributes: [
                "position",
                "normal",
                "matricesIndices",
                "matricesWeights"
            ],
            uniforms: [
                "world",
                "worldView",
                "worldViewProjection",
                "view",
                "projection",
                "viewProjection",
                "colorMap"
            ]
        });
        shader.setFloats("colorMap", colorMapBuffer);
        shader.getClassName = ()=>{
            return "SkeletonMapShader";
        };
        shader.transparencyMode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$material$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Material"].MATERIAL_OPAQUE;
        return shader;
    }
    /** private static method to create a BoneWeight Shader
     * @param size The size of the buffer to create (usually the bone count)
     * @param colorMap The gradient data to generate
     * @param scene The scene that the shader is scoped to
     * @returns an Array of floats from the color gradient values
     */ static _CreateBoneMapColorBuffer(size, colorMap, scene) {
        const tempGrad = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$dynamicTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DynamicTexture"]("temp", {
            width: size,
            height: 1
        }, scene, false);
        const ctx = tempGrad.getContext();
        const grad = ctx.createLinearGradient(0, 0, size, 0);
        for (const stop of colorMap){
            grad.addColorStop(stop.location, stop.color.toHexString());
        }
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, size, 1);
        tempGrad.update();
        const buffer = [];
        const data = ctx.getImageData(0, 0, size, 1).data;
        const rUnit = 1 / 255;
        for(let i = 0; i < data.length; i++){
            buffer.push(data[i] * rUnit);
        }
        tempGrad.dispose();
        return buffer;
    }
    /** Gets the Scene. */ get scene() {
        return this._scene;
    }
    /** Gets the utilityLayer. */ get utilityLayer() {
        return this._utilityLayer;
    }
    /** Checks Ready Status. */ get isReady() {
        return this._ready;
    }
    /** Sets Ready Status. */ set ready(value) {
        this._ready = value;
    }
    /** Gets the debugMesh */ get debugMesh() {
        return this._debugMesh;
    }
    /** Sets the debugMesh */ set debugMesh(value) {
        this._debugMesh = value;
    }
    /** Gets the displayMode */ get displayMode() {
        return this.options.displayMode || SkeletonViewer.DISPLAY_LINES;
    }
    /** Sets the displayMode */ set displayMode(value) {
        if (value > SkeletonViewer.DISPLAY_SPHERE_AND_SPURS) {
            value = SkeletonViewer.DISPLAY_LINES;
        }
        this.options.displayMode = value;
    }
    /**
     * Creates a new SkeletonViewer
     * @param skeleton defines the skeleton to render
     * @param mesh defines the mesh attached to the skeleton
     * @param scene defines the hosting scene
     * @param autoUpdateBonesMatrices defines a boolean indicating if bones matrices must be forced to update before rendering (true by default)
     * @param renderingGroupId defines the rendering group id to use with the viewer
     * @param options All of the extra constructor options for the SkeletonViewer
     */ constructor(/** defines the skeleton to render */ skeleton, /** defines the mesh attached to the skeleton */ mesh, /** The Scene scope*/ scene, /** [true] defines a boolean indicating if bones matrices must be forced to update before rendering (true by default)  */ autoUpdateBonesMatrices = true, /** [3] defines the rendering group id to use with the viewer */ renderingGroupId = 3, /** [Object] is the options for the viewer */ options = {}){
        this.skeleton = skeleton;
        this.mesh = mesh;
        this.autoUpdateBonesMatrices = autoUpdateBonesMatrices;
        this.renderingGroupId = renderingGroupId;
        this.options = options;
        /** Gets or sets the color used to render the skeleton */ this.color = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color3"].White();
        /** Array of the points of the skeleton fo the line view. */ this._debugLines = new Array();
        /** The local axes Meshes. */ this._localAxes = null;
        /** If SkeletonViewer is enabled. */ this._isEnabled = true;
        /** SkeletonViewer render observable. */ this._obs = null;
        this._scene = scene;
        this._ready = false;
        //Defaults
        options.pauseAnimations = options.pauseAnimations ?? true;
        options.returnToRest = options.returnToRest ?? false;
        options.displayMode = options.displayMode ?? SkeletonViewer.DISPLAY_LINES;
        options.displayOptions = options.displayOptions ?? {};
        options.displayOptions.midStep = options.displayOptions.midStep ?? 0.235;
        options.displayOptions.midStepFactor = options.displayOptions.midStepFactor ?? 0.155;
        options.displayOptions.sphereBaseSize = options.displayOptions.sphereBaseSize ?? 0.15;
        options.displayOptions.sphereScaleUnit = options.displayOptions.sphereScaleUnit ?? 2;
        options.displayOptions.sphereFactor = options.displayOptions.sphereFactor ?? 0.865;
        options.displayOptions.spurFollowsChild = options.displayOptions.spurFollowsChild ?? false;
        options.displayOptions.showLocalAxes = options.displayOptions.showLocalAxes ?? false;
        options.displayOptions.localAxesSize = options.displayOptions.localAxesSize ?? 0.075;
        options.computeBonesUsingShaders = options.computeBonesUsingShaders ?? true;
        options.useAllBones = options.useAllBones ?? true;
        this._boneIndices = new Set();
        if (!options.useAllBones) {
            const initialMeshBoneIndices = mesh?.getVerticesData(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VertexBuffer"].MatricesIndicesKind);
            const initialMeshBoneWeights = mesh?.getVerticesData(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VertexBuffer"].MatricesWeightsKind);
            if (initialMeshBoneIndices && initialMeshBoneWeights) {
                for(let i = 0; i < initialMeshBoneIndices.length; ++i){
                    const index = initialMeshBoneIndices[i], weight = initialMeshBoneWeights[i];
                    if (weight !== 0) {
                        this._boneIndices.add(index);
                    }
                }
            }
        }
        /* Create Utility Layer */ this._utilityLayer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Rendering$2f$utilityLayerRenderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UtilityLayerRenderer"](this._scene, false);
        this._utilityLayer.pickUtilitySceneFirst = false;
        this._utilityLayer.utilityLayerScene.autoClearDepthAndStencil = true;
        let displayMode = this.options.displayMode || 0;
        if (displayMode > SkeletonViewer.DISPLAY_SPHERE_AND_SPURS) {
            displayMode = SkeletonViewer.DISPLAY_LINES;
        }
        this.displayMode = displayMode;
        //Prep the Systems
        this.update();
        this._bindObs();
    }
    /** The Dynamic bindings for the update functions */ _bindObs() {
        switch(this.displayMode){
            case SkeletonViewer.DISPLAY_LINES:
                {
                    this._obs = this.scene.onBeforeRenderObservable.add(()=>{
                        this._displayLinesUpdate();
                    });
                    break;
                }
        }
    }
    /** Update the viewer to sync with current skeleton state, only used to manually update. */ update() {
        switch(this.displayMode){
            case SkeletonViewer.DISPLAY_LINES:
                {
                    this._displayLinesUpdate();
                    break;
                }
            case SkeletonViewer.DISPLAY_SPHERES:
                {
                    this._buildSpheresAndSpurs(true);
                    break;
                }
            case SkeletonViewer.DISPLAY_SPHERE_AND_SPURS:
                {
                    this._buildSpheresAndSpurs(false);
                    break;
                }
        }
        this._buildLocalAxes();
    }
    /** Gets or sets a boolean indicating if the viewer is enabled */ set isEnabled(value) {
        if (this.isEnabled === value) {
            return;
        }
        this._isEnabled = value;
        if (this.debugMesh) {
            this.debugMesh.setEnabled(value);
        }
        if (value && !this._obs) {
            this._bindObs();
        } else if (!value && this._obs) {
            this.scene.onBeforeRenderObservable.remove(this._obs);
            this._obs = null;
        }
    }
    get isEnabled() {
        return this._isEnabled;
    }
    _getBonePosition(position, bone, meshMat, x = 0, y = 0, z = 0) {
        const tmat = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[0];
        const parentBone = bone.getParent();
        tmat.copyFrom(bone.getLocalMatrix());
        if (x !== 0 || y !== 0 || z !== 0) {
            const tmat2 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[1];
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].IdentityToRef(tmat2);
            tmat2.setTranslationFromFloats(x, y, z);
            tmat2.multiplyToRef(tmat, tmat);
        }
        if (parentBone) {
            tmat.multiplyToRef(parentBone.getAbsoluteMatrix(), tmat);
        }
        tmat.multiplyToRef(meshMat, tmat);
        position.x = tmat.m[12];
        position.y = tmat.m[13];
        position.z = tmat.m[14];
    }
    _getLinesForBonesWithLength(bones, mesh) {
        const len = bones.length;
        let matrix;
        let meshPos;
        if (mesh) {
            matrix = mesh.getWorldMatrix();
            meshPos = mesh.position;
        } else {
            matrix = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"]();
            meshPos = bones[0].position;
        }
        let idx = 0;
        for(let i = 0; i < len; i++){
            const bone = bones[i];
            let points = this._debugLines[idx];
            if (bone._index === -1 || !this._boneIndices.has(bone.getIndex()) && !this.options.useAllBones) {
                continue;
            }
            if (!points) {
                points = [
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero(),
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero()
                ];
                this._debugLines[idx] = points;
            }
            this._getBonePosition(points[0], bone, matrix);
            this._getBonePosition(points[1], bone, matrix, 0, bone.length, 0);
            points[0].subtractInPlace(meshPos);
            points[1].subtractInPlace(meshPos);
            idx++;
        }
    }
    _getLinesForBonesNoLength(bones) {
        const len = bones.length;
        let boneNum = 0;
        const mesh = this.mesh;
        let transformNode;
        let meshPos;
        if (mesh) {
            transformNode = mesh;
            meshPos = mesh.position;
        } else {
            transformNode = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$transformNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransformNode"]("");
            meshPos = bones[0].position;
        }
        for(let i = len - 1; i >= 0; i--){
            const childBone = bones[i];
            const parentBone = childBone.getParent();
            if (!parentBone || !this._boneIndices.has(childBone.getIndex()) && !this.options.useAllBones) {
                continue;
            }
            let points = this._debugLines[boneNum];
            if (!points) {
                points = [
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero(),
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero()
                ];
                this._debugLines[boneNum] = points;
            }
            childBone.getAbsolutePositionToRef(transformNode, points[0]);
            parentBone.getAbsolutePositionToRef(transformNode, points[1]);
            points[0].subtractInPlace(meshPos);
            points[1].subtractInPlace(meshPos);
            boneNum++;
        }
        if (!mesh) {
            transformNode.dispose();
        }
    }
    /**
     * function to revert the mesh and scene back to the initial state.
     * @param animationState
     */ _revert(animationState) {
        if (this.options.pauseAnimations) {
            this.scene.animationsEnabled = animationState;
            this.utilityLayer.utilityLayerScene.animationsEnabled = animationState;
        }
    }
    /**
     * function to get the absolute bind pose of a bone by accumulating transformations up the bone hierarchy.
     * @param bone
     * @param matrix
     */ _getAbsoluteBindPoseToRef(bone, matrix) {
        if (bone === null || bone._index === -1) {
            matrix.copyFrom(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].Identity());
            return;
        }
        this._getAbsoluteBindPoseToRef(bone.getParent(), matrix);
        bone.getBindMatrix().multiplyToRef(matrix, matrix);
        return;
    }
    _createSpur(anchorPoint, bone, childPoint, childBone, displayOptions, utilityLayerScene) {
        const dir = childPoint.subtract(anchorPoint);
        const h = dir.length();
        const up = dir.normalize().scale(h);
        const midStep = displayOptions.midStep || 0.165;
        const midStepFactor = displayOptions.midStepFactor || 0.215;
        const up0 = up.scale(midStep);
        const spur = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$shapeBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExtrudeShapeCustom"])("skeletonViewer", {
            shape: [
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](1, -1, 0),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](1, 1, 0),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](-1, 1, 0),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](-1, -1, 0),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](1, -1, 0)
            ],
            path: [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero(),
                up0,
                up
            ],
            scaleFunction: (i)=>{
                switch(i){
                    case 0:
                    case 2:
                        return 0;
                    case 1:
                        return h * midStepFactor;
                }
                return 0;
            },
            sideOrientation: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"].DEFAULTSIDE,
            updatable: false
        }, utilityLayerScene);
        const numVertices = spur.getTotalVertices();
        const mwk = [], mik = [];
        for(let i = 0; i < numVertices; i++){
            mwk.push(1, 0, 0, 0);
            // Select verts at end of spur (ie vert 10 to 14) and bind to child
            // bone if spurFollowsChild is enabled.
            if (childBone && displayOptions.spurFollowsChild && i > 9) {
                mik.push(childBone.getIndex(), 0, 0, 0);
            } else {
                mik.push(bone.getIndex(), 0, 0, 0);
            }
        }
        spur.position = anchorPoint.clone();
        spur.setVerticesData(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VertexBuffer"].MatricesWeightsKind, mwk, false);
        spur.setVerticesData(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VertexBuffer"].MatricesIndicesKind, mik, false);
        spur.convertToFlatShadedMesh();
        return spur;
    }
    _getBoundingSphereForBone(boneIndex) {
        if (!this.mesh) {
            return null;
        }
        const positions = this.mesh.getVerticesData(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VertexBuffer"].PositionKind);
        const indices = this.mesh.getIndices();
        const boneWeights = this.mesh.getVerticesData(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VertexBuffer"].MatricesWeightsKind);
        const boneIndices = this.mesh.getVerticesData(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VertexBuffer"].MatricesIndicesKind);
        if (!positions || !indices || !boneWeights || !boneIndices) {
            return null;
        }
        const min = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
        const max = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
        let found = 0;
        for(let i = 0; i < indices.length; ++i){
            const vertexIndex = indices[i];
            for(let b = 0; b < 4; ++b){
                const bIndex = boneIndices[vertexIndex * 4 + b];
                const bWeight = boneWeights[vertexIndex * 4 + b];
                if (bIndex === boneIndex && bWeight > 1e-5) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].FromArrayToRef(positions, vertexIndex * 3, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0]);
                    min.minimizeInPlace(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0]);
                    max.maximizeInPlace(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0]);
                    found++;
                    break;
                }
            }
        }
        return found > 1 ? {
            center: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Center(min, max),
            radius: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Distance(min, max) / 2
        } : null;
    }
    /**
     * function to build and bind sphere joint points and spur bone representations.
     * @param spheresOnly
     */ _buildSpheresAndSpurs(spheresOnly = true) {
        if (this._debugMesh) {
            this._debugMesh.dispose();
            this._debugMesh = null;
            this.ready = false;
        }
        this._ready = false;
        const utilityLayerScene = this.utilityLayer?.utilityLayerScene;
        const bones = this.skeleton.bones;
        const spheres = [];
        const spurs = [];
        const animationState = this.scene.animationsEnabled;
        try {
            if (this.options.pauseAnimations) {
                this.scene.animationsEnabled = false;
                utilityLayerScene.animationsEnabled = false;
            }
            if (this.options.returnToRest) {
                this.skeleton.returnToRest();
            }
            if (this.autoUpdateBonesMatrices) {
                this.skeleton.computeAbsoluteMatrices();
            }
            let longestBoneLength = Number.NEGATIVE_INFINITY;
            const displayOptions = this.options.displayOptions || {};
            for(let i = 0; i < bones.length; i++){
                const bone = bones[i];
                if (bone._index === -1 || !this._boneIndices.has(bone.getIndex()) && !this.options.useAllBones) {
                    continue;
                }
                const boneAbsoluteBindPoseTransform = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"]();
                this._getAbsoluteBindPoseToRef(bone, boneAbsoluteBindPoseTransform);
                const anchorPoint = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
                boneAbsoluteBindPoseTransform.decompose(undefined, undefined, anchorPoint);
                if (bone.children.length > 0) {
                    for (const bc of bone.children){
                        const childAbsoluteBindPoseTransform = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"]();
                        bc.getLocalMatrix().multiplyToRef(boneAbsoluteBindPoseTransform, childAbsoluteBindPoseTransform);
                        const childPoint = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
                        childAbsoluteBindPoseTransform.decompose(undefined, undefined, childPoint);
                        const distanceFromParent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Distance(anchorPoint, childPoint);
                        if (distanceFromParent > longestBoneLength) {
                            longestBoneLength = distanceFromParent;
                        }
                        if (spheresOnly) {
                            return;
                        }
                        spurs.push(this._createSpur(anchorPoint, bone, childPoint, bc, displayOptions, utilityLayerScene));
                    }
                } else {
                    const boundingSphere = this._getBoundingSphereForBone(bone.getIndex());
                    if (boundingSphere) {
                        if (boundingSphere.radius > longestBoneLength) {
                            longestBoneLength = boundingSphere.radius;
                        }
                        if (!spheresOnly) {
                            let childPoint;
                            const parentBone = bone.getParent();
                            if (parentBone) {
                                this._getAbsoluteBindPoseToRef(parentBone, boneAbsoluteBindPoseTransform);
                                boneAbsoluteBindPoseTransform.decompose(undefined, undefined, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0]);
                                childPoint = anchorPoint.subtract(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0]).normalize().scale(boundingSphere.radius).add(anchorPoint);
                            } else {
                                childPoint = boundingSphere.center.subtract(anchorPoint).normalize().scale(boundingSphere.radius).add(anchorPoint);
                            }
                            spurs.push(this._createSpur(anchorPoint, bone, childPoint, null, displayOptions, utilityLayerScene));
                        }
                    }
                }
                const sphereBaseSize = displayOptions.sphereBaseSize || 0.2;
                const sphere = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$sphereBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreateSphere"])("skeletonViewer", {
                    segments: 6,
                    diameter: sphereBaseSize,
                    updatable: true
                }, utilityLayerScene);
                const numVertices = sphere.getTotalVertices();
                const mwk = [], mik = [];
                for(let i = 0; i < numVertices; i++){
                    mwk.push(1, 0, 0, 0);
                    mik.push(bone.getIndex(), 0, 0, 0);
                }
                sphere.setVerticesData(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VertexBuffer"].MatricesWeightsKind, mwk, false);
                sphere.setVerticesData(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VertexBuffer"].MatricesIndicesKind, mik, false);
                sphere.position = anchorPoint.clone();
                spheres.push([
                    sphere,
                    bone
                ]);
            }
            const sphereScaleUnit = displayOptions.sphereScaleUnit || 2;
            const sphereFactor = displayOptions.sphereFactor || 0.85;
            const meshes = [];
            for(let i = 0; i < spheres.length; i++){
                const [sphere, bone] = spheres[i];
                const scale = 1 / (sphereScaleUnit / longestBoneLength);
                let _stepsOut = 0;
                let _b = bone;
                while(_b.getParent() && _b.getParent().getIndex() !== -1){
                    _stepsOut++;
                    _b = _b.getParent();
                }
                sphere.scaling.scaleInPlace(scale * Math.pow(sphereFactor, _stepsOut));
                meshes.push(sphere);
            }
            this.debugMesh = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"].MergeMeshes(meshes.concat(spurs), true, true);
            if (this.debugMesh) {
                this.debugMesh.renderingGroupId = this.renderingGroupId;
                this.debugMesh.skeleton = this.skeleton;
                this.debugMesh.parent = this.mesh;
                this.debugMesh.computeBonesUsingShaders = this.options.computeBonesUsingShaders ?? true;
                this.debugMesh.alwaysSelectAsActiveMesh = true;
            }
            const light = this.utilityLayer._getSharedGizmoLight();
            light.intensity = 0.7;
            this._revert(animationState);
            this.ready = true;
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Error(err);
            this._revert(animationState);
            this.dispose();
        }
    }
    _buildLocalAxes() {
        if (this._localAxes) {
            this._localAxes.dispose();
        }
        this._localAxes = null;
        const displayOptions = this.options.displayOptions || {};
        if (!displayOptions.showLocalAxes) {
            return;
        }
        const targetScene = this._utilityLayer.utilityLayerScene;
        const size = displayOptions.localAxesSize || 0.075;
        const lines = [];
        const colors = [];
        const red = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color4"](1, 0, 0, 1);
        const green = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color4"](0, 1, 0, 1);
        const blue = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color4"](0, 0, 1, 1);
        const mwk = [];
        const mik = [];
        const vertsPerBone = 6;
        for(const i in this.skeleton.bones){
            const bone = this.skeleton.bones[i];
            if (bone._index === -1 || !this._boneIndices.has(bone.getIndex()) && !this.options.useAllBones) {
                continue;
            }
            const boneAbsoluteBindPoseTransform = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"]();
            const boneOrigin = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
            this._getAbsoluteBindPoseToRef(bone, boneAbsoluteBindPoseTransform);
            boneAbsoluteBindPoseTransform.decompose(undefined, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Quaternion[0], boneOrigin);
            const m = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"]();
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Quaternion[0].toRotationMatrix(m);
            const boneAxisX = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinates(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0 + size, 0, 0), m);
            const boneAxisY = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinates(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0 + size, 0), m);
            const boneAxisZ = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinates(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, 0 + size), m);
            const axisX = [
                boneOrigin,
                boneOrigin.add(boneAxisX)
            ];
            const axisY = [
                boneOrigin,
                boneOrigin.add(boneAxisY)
            ];
            const axisZ = [
                boneOrigin,
                boneOrigin.add(boneAxisZ)
            ];
            const linePoints = [
                axisX,
                axisY,
                axisZ
            ];
            const lineColors = [
                [
                    red,
                    red
                ],
                [
                    green,
                    green
                ],
                [
                    blue,
                    blue
                ]
            ];
            lines.push(...linePoints);
            colors.push(...lineColors);
            for(let j = 0; j < vertsPerBone; j++){
                mwk.push(1, 0, 0, 0);
                mik.push(bone.getIndex(), 0, 0, 0);
            }
        }
        this._localAxes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$linesBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreateLineSystem"])("localAxes", {
            lines: lines,
            colors: colors,
            updatable: true
        }, targetScene);
        this._localAxes.setVerticesData(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VertexBuffer"].MatricesWeightsKind, mwk, false);
        this._localAxes.setVerticesData(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VertexBuffer"].MatricesIndicesKind, mik, false);
        this._localAxes.skeleton = this.skeleton;
        this._localAxes.renderingGroupId = this.renderingGroupId + 1;
        this._localAxes.parent = this.mesh;
        this._localAxes.computeBonesUsingShaders = this.options.computeBonesUsingShaders ?? true;
    }
    /** Update the viewer to sync with current skeleton state, only used for the line display. */ _displayLinesUpdate() {
        if (!this._utilityLayer) {
            return;
        }
        if (this.autoUpdateBonesMatrices) {
            this.skeleton.computeAbsoluteMatrices();
        }
        if (this.skeleton.bones[0].length === undefined) {
            this._getLinesForBonesNoLength(this.skeleton.bones);
        } else {
            this._getLinesForBonesWithLength(this.skeleton.bones, this.mesh);
        }
        const targetScene = this._utilityLayer.utilityLayerScene;
        if (targetScene) {
            if (!this._debugMesh) {
                this._debugMesh = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$linesBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreateLineSystem"])("", {
                    lines: this._debugLines,
                    updatable: true,
                    instance: null
                }, targetScene);
                this._debugMesh.renderingGroupId = this.renderingGroupId;
            } else {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$linesBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreateLineSystem"])("", {
                    lines: this._debugLines,
                    updatable: true,
                    instance: this._debugMesh
                }, targetScene);
            }
            if (this.mesh) {
                this._debugMesh.position.copyFrom(this.mesh.position);
            } else {
                this._debugMesh.position.copyFrom(this.skeleton.bones[0].position);
            }
            this._debugMesh.color = this.color;
        }
    }
    /** Changes the displayMode of the skeleton viewer
     * @param mode The displayMode numerical value
     */ changeDisplayMode(mode) {
        const wasEnabled = this.isEnabled ? true : false;
        if (this.displayMode !== mode) {
            this.isEnabled = false;
            if (this._debugMesh) {
                this._debugMesh.dispose();
                this._debugMesh = null;
                this.ready = false;
            }
            this.displayMode = mode;
            this.update();
            this._bindObs();
            this.isEnabled = wasEnabled;
        }
    }
    /** Sets a display option of the skeleton viewer
     *
     * | Option           | Type    | Default | Description |
     * | ---------------- | ------- | ------- | ----------- |
     * | midStep          | float   | 0.235   | A percentage between a bone and its child that determines the widest part of a spur. Only used when `displayMode` is set to `DISPLAY_SPHERE_AND_SPURS`. |
     * | midStepFactor    | float   | 0.15    | Mid step width expressed as a factor of the length. A value of 0.5 makes the spur width half of the spur length. Only used when `displayMode` is set to `DISPLAY_SPHERE_AND_SPURS`. |
     * | sphereBaseSize   | float   | 2       | Sphere base size. Only used when `displayMode` is set to `DISPLAY_SPHERE_AND_SPURS`. |
     * | sphereScaleUnit  | float   | 0.865   | Sphere scale factor used to scale spheres in relation to the longest bone. Only used when `displayMode` is set to `DISPLAY_SPHERE_AND_SPURS`. |
     * | spurFollowsChild | boolean | false   | Whether a spur should attach its far end to the child bone. |
     * | showLocalAxes    | boolean | false   | Displays local axes on all bones. |
     * | localAxesSize    | float   | 0.075   | Determines the length of each local axis. |
     *
     * @param option String of the option name
     * @param value The numerical option value
     */ changeDisplayOptions(option, value) {
        const wasEnabled = this.isEnabled ? true : false;
        this.options.displayOptions[option] = value;
        this.isEnabled = false;
        if (this._debugMesh) {
            this._debugMesh.dispose();
            this._debugMesh = null;
            this.ready = false;
        }
        this.update();
        this._bindObs();
        this.isEnabled = wasEnabled;
    }
    /** Release associated resources */ dispose() {
        this.isEnabled = false;
        if (this._debugMesh) {
            this._debugMesh.dispose();
            this._debugMesh = null;
        }
        if (this._utilityLayer) {
            this._utilityLayer.dispose();
            this._utilityLayer = null;
        }
        this.ready = false;
    }
}
/** public Display constants BABYLON.SkeletonViewer.DISPLAY_LINES */ SkeletonViewer.DISPLAY_LINES = 0;
/** public Display constants BABYLON.SkeletonViewer.DISPLAY_SPHERES */ SkeletonViewer.DISPLAY_SPHERES = 1;
/** public Display constants BABYLON.SkeletonViewer.DISPLAY_SPHERE_AND_SPURS */ SkeletonViewer.DISPLAY_SPHERE_AND_SPURS = 2; //# sourceMappingURL=skeletonViewer.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Debug/ISkeletonViewer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
 //# sourceMappingURL=ISkeletonViewer.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Debug/directionalLightFrustumViewer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DirectionalLightFrustumViewer",
    ()=>DirectionalLightFrustumViewer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$standardMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/standardMaterial.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.color.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$linesBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/linesBuilder.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/mesh.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$vertexData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/mesh.vertexData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$transformNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/transformNode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FrameGraph$2f$frameGraphUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FrameGraph/frameGraphUtils.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
class DirectionalLightFrustumViewer {
    /**
     * Gets or sets the transparency of the frustum planes
     */ get transparency() {
        return this._transparency;
    }
    set transparency(alpha) {
        this._transparency = alpha;
        for(let i = 6; i < 12; ++i){
            this._lightHelperFrustumMeshes[i].material.alpha = alpha;
        }
    }
    /**
     * true to display the edges of the frustum
     */ get showLines() {
        return this._showLines;
    }
    set showLines(show) {
        if (this._showLines === show) {
            return;
        }
        this._showLines = show;
        for(let i = 0; i < 6; ++i){
            this._lightHelperFrustumMeshes[i].setEnabled(show);
        }
    }
    /**
     * true to display the planes of the frustum
     */ get showPlanes() {
        return this._showPlanes;
    }
    set showPlanes(show) {
        if (this._showPlanes === show) {
            return;
        }
        this._showPlanes = show;
        for(let i = 6; i < 12; ++i){
            this._lightHelperFrustumMeshes[i].setEnabled(show);
        }
    }
    /**
     * Creates a new frustum viewer
     * @param light directional light to display the frustum for
     * @param camera camera used to retrieve the minZ / maxZ values if the shadowMinZ/shadowMaxZ values of the light are not setup
     */ constructor(light, camera = null){
        this._oldPosition = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](Number.NaN, Number.NaN, Number.NaN);
        this._oldDirection = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](Number.NaN, Number.NaN, Number.NaN);
        this._transparency = 0.3;
        this._showLines = true;
        this._showPlanes = true;
        this._scene = light.getScene();
        this._light = light;
        this._camera = camera;
        this._inverseViewMatrix = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].Identity();
        this._lightHelperFrustumMeshes = [];
        this._createGeometry();
        this.show();
        this.update();
    }
    /**
     * Shows the frustum
     */ show() {
        if (this._scene.frameGraph) {
            this._removeMeshesFromFrameGraph(this._scene.frameGraph);
            this._addMeshesToFrameGraph(this._scene.frameGraph);
        }
        this._lightHelperFrustumMeshes.forEach((mesh, index)=>{
            mesh.setEnabled(index < 6 && this._showLines || index >= 6 && this._showPlanes);
        });
        this._oldPosition.set(Number.NaN, Number.NaN, Number.NaN);
        this._visible = true;
    }
    /**
     * Hides the frustum
     */ hide() {
        if (this._scene.frameGraph) {
            this._removeMeshesFromFrameGraph(this._scene.frameGraph);
        }
        for (const mesh of this._lightHelperFrustumMeshes){
            mesh.setEnabled(false);
        }
        this._visible = false;
    }
    _addMeshesToFrameGraph(frameGraph) {
        const objectRenderer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FrameGraph$2f$frameGraphUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FrameGraphUtils"].FindMainObjectRenderer(frameGraph);
        if (objectRenderer && objectRenderer.objectList.meshes) {
            for (const mesh of this._lightHelperFrustumMeshes){
                objectRenderer.objectList.meshes.push(mesh);
            }
        }
    }
    _removeMeshesFromFrameGraph(frameGraph) {
        const objectRenderer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FrameGraph$2f$frameGraphUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FrameGraphUtils"].FindMainObjectRenderer(frameGraph);
        if (objectRenderer && objectRenderer.objectList.meshes) {
            for (const mesh of this._lightHelperFrustumMeshes){
                const index = objectRenderer.objectList.meshes.indexOf(mesh);
                if (index !== -1) {
                    objectRenderer.objectList.meshes.splice(index, 1);
                }
            }
        }
    }
    /**
     * Updates the frustum.
     * Call this method to update the frustum view if the light has changed position/direction
     */ update() {
        if (!this._visible) {
            return;
        }
        if (this._oldPosition.equals(this._light.position) && this._oldDirection.equals(this._light.direction) && this._oldAutoCalc === this._light.autoCalcShadowZBounds && this._oldMinZ === this._light.shadowMinZ && this._oldMaxZ === this._light.shadowMaxZ && this._oldOrthoLeft === this._light.orthoLeft && this._oldOrthoRight === this._light.orthoRight && this._oldOrthoTop === this._light.orthoTop && this._oldOrthoBottom === this._light.orthoBottom) {
            return;
        }
        this._oldPosition.copyFrom(this._light.position);
        this._oldDirection.copyFrom(this._light.direction);
        this._oldAutoCalc = this._light.autoCalcShadowZBounds;
        this._oldMinZ = this._light.shadowMinZ;
        this._oldMaxZ = this._light.shadowMaxZ;
        this._oldOrthoLeft = this._light.orthoLeft;
        this._oldOrthoRight = this._light.orthoRight;
        this._oldOrthoTop = this._light.orthoTop;
        this._oldOrthoBottom = this._light.orthoBottom;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0].set(this._light.orthoLeft, this._light.orthoBottom, this._light.shadowMinZ !== undefined ? this._light.shadowMinZ : this._camera?.minZ ?? 0); // min light extents
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[1].set(this._light.orthoRight, this._light.orthoTop, this._light.shadowMaxZ !== undefined ? this._light.shadowMaxZ : this._camera?.maxZ ?? 10000); // max light extents
        const invLightView = this._getInvertViewMatrix();
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[2].copyFromFloats(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[1].x, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[1].y, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0].z); // n1
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[3].copyFromFloats(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[1].x, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0].y, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0].z); // n2
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[4].copyFromFloats(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0].x, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0].y, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0].z); // n3
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[5].copyFromFloats(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0].x, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[1].y, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0].z); // n4
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinatesToRef(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[2], invLightView, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[2]); // near1
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinatesToRef(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[3], invLightView, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[3]); // near2
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinatesToRef(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[4], invLightView, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[4]); // near3
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinatesToRef(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[5], invLightView, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[5]); // near4
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[6].copyFromFloats(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[1].x, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[1].y, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[1].z); // f1
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[7].copyFromFloats(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[1].x, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0].y, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[1].z); // f2
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[8].copyFromFloats(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0].x, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0].y, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[1].z); // f3
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[9].copyFromFloats(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0].x, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[1].y, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[1].z); // f4
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinatesToRef(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[6], invLightView, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[6]); // far1
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinatesToRef(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[7], invLightView, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[7]); // far2
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinatesToRef(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[8], invLightView, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[8]); // far3
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinatesToRef(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[9], invLightView, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[9]); // far4
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$linesBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreateLines"])("nearlines", {
            updatable: true,
            points: this._nearLinesPoints,
            instance: this._lightHelperFrustumMeshes[0]
        }, this._scene);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$linesBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreateLines"])("farlines", {
            updatable: true,
            points: this._farLinesPoints,
            instance: this._lightHelperFrustumMeshes[1]
        }, this._scene);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$linesBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreateLines"])("trlines", {
            updatable: true,
            points: this._trLinesPoints,
            instance: this._lightHelperFrustumMeshes[2]
        }, this._scene);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$linesBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreateLines"])("brlines", {
            updatable: true,
            points: this._brLinesPoints,
            instance: this._lightHelperFrustumMeshes[3]
        }, this._scene);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$linesBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreateLines"])("tllines", {
            updatable: true,
            points: this._tlLinesPoints,
            instance: this._lightHelperFrustumMeshes[4]
        }, this._scene);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$linesBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreateLines"])("bllines", {
            updatable: true,
            points: this._blLinesPoints,
            instance: this._lightHelperFrustumMeshes[5]
        }, this._scene);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[2].toArray(this._nearPlaneVertices, 0);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[3].toArray(this._nearPlaneVertices, 3);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[4].toArray(this._nearPlaneVertices, 6);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[5].toArray(this._nearPlaneVertices, 9);
        this._lightHelperFrustumMeshes[6].geometry?.updateVerticesDataDirectly("position", this._nearPlaneVertices, 0);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[6].toArray(this._farPlaneVertices, 0);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[7].toArray(this._farPlaneVertices, 3);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[8].toArray(this._farPlaneVertices, 6);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[9].toArray(this._farPlaneVertices, 9);
        this._lightHelperFrustumMeshes[7].geometry?.updateVerticesDataDirectly("position", this._farPlaneVertices, 0);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[2].toArray(this._rightPlaneVertices, 0);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[6].toArray(this._rightPlaneVertices, 3);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[7].toArray(this._rightPlaneVertices, 6);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[3].toArray(this._rightPlaneVertices, 9);
        this._lightHelperFrustumMeshes[8].geometry?.updateVerticesDataDirectly("position", this._rightPlaneVertices, 0);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[5].toArray(this._leftPlaneVertices, 0);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[9].toArray(this._leftPlaneVertices, 3);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[8].toArray(this._leftPlaneVertices, 6);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[4].toArray(this._leftPlaneVertices, 9);
        this._lightHelperFrustumMeshes[9].geometry?.updateVerticesDataDirectly("position", this._leftPlaneVertices, 0);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[2].toArray(this._topPlaneVertices, 0);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[6].toArray(this._topPlaneVertices, 3);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[9].toArray(this._topPlaneVertices, 6);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[5].toArray(this._topPlaneVertices, 9);
        this._lightHelperFrustumMeshes[10].geometry?.updateVerticesDataDirectly("position", this._topPlaneVertices, 0);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[3].toArray(this._bottomPlaneVertices, 0);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[7].toArray(this._bottomPlaneVertices, 3);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[8].toArray(this._bottomPlaneVertices, 6);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[4].toArray(this._bottomPlaneVertices, 9);
        this._lightHelperFrustumMeshes[11].geometry?.updateVerticesDataDirectly("position", this._bottomPlaneVertices, 0);
    }
    /**
     * Dispose of the class / remove the frustum view
     */ dispose() {
        if (this._scene.frameGraph) {
            this._removeMeshesFromFrameGraph(this._scene.frameGraph);
        }
        for (const mesh of this._lightHelperFrustumMeshes){
            mesh.material?.dispose();
            mesh.dispose();
        }
        this._rootNode.dispose();
    }
    _createGeometry() {
        this._rootNode = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$transformNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransformNode"]("directionalLightHelperRoot_" + this._light.name, this._scene);
        this._rootNode.parent = this._light.parent;
        this._nearLinesPoints = [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[1],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[2],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[3],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[4]
        ];
        const nearLines = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$linesBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreateLines"])("nearlines", {
            updatable: true,
            points: this._nearLinesPoints
        }, this._scene);
        nearLines.parent = this._rootNode;
        nearLines.alwaysSelectAsActiveMesh = true;
        this._farLinesPoints = [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[5],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[6],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[7],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[8],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[9]
        ];
        const farLines = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$linesBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreateLines"])("farlines", {
            updatable: true,
            points: this._farLinesPoints
        }, this._scene);
        farLines.parent = this._rootNode;
        farLines.alwaysSelectAsActiveMesh = true;
        this._trLinesPoints = [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[10],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[11]
        ];
        const trLines = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$linesBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreateLines"])("trlines", {
            updatable: true,
            points: this._trLinesPoints
        }, this._scene);
        trLines.parent = this._rootNode;
        trLines.alwaysSelectAsActiveMesh = true;
        this._brLinesPoints = [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[12],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0]
        ];
        const brLines = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$linesBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreateLines"])("brlines", {
            updatable: true,
            points: this._brLinesPoints
        }, this._scene);
        brLines.parent = this._rootNode;
        brLines.alwaysSelectAsActiveMesh = true;
        this._tlLinesPoints = [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[1],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[2]
        ];
        const tlLines = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$linesBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreateLines"])("tllines", {
            updatable: true,
            points: this._tlLinesPoints
        }, this._scene);
        tlLines.parent = this._rootNode;
        tlLines.alwaysSelectAsActiveMesh = true;
        this._blLinesPoints = [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[3],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[4]
        ];
        const blLines = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$linesBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreateLines"])("bllines", {
            updatable: true,
            points: this._blLinesPoints
        }, this._scene);
        blLines.parent = this._rootNode;
        blLines.alwaysSelectAsActiveMesh = true;
        this._lightHelperFrustumMeshes.push(nearLines, farLines, trLines, brLines, tlLines, blLines);
        const makePlane = (name, color, positions)=>{
            const plane = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](name + "plane", this._scene);
            const mat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$standardMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StandardMaterial"](name + "PlaneMat", this._scene);
            plane.material = mat;
            plane.parent = this._rootNode;
            plane.alwaysSelectAsActiveMesh = true;
            mat.emissiveColor = color;
            mat.alpha = this.transparency;
            mat.backFaceCulling = false;
            mat.disableLighting = true;
            const indices = [
                0,
                1,
                2,
                0,
                2,
                3
            ];
            const vertexData = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$vertexData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VertexData"]();
            vertexData.positions = positions;
            vertexData.indices = indices;
            vertexData.applyToMesh(plane, true);
            this._lightHelperFrustumMeshes.push(plane);
        };
        this._nearPlaneVertices = [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ];
        this._farPlaneVertices = [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ];
        this._rightPlaneVertices = [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ];
        this._leftPlaneVertices = [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ];
        this._topPlaneVertices = [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ];
        this._bottomPlaneVertices = [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ];
        makePlane("near", new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color3"](1, 0, 0), this._nearPlaneVertices);
        makePlane("far", new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color3"](0.3, 0, 0), this._farPlaneVertices);
        makePlane("right", new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color3"](0, 1, 0), this._rightPlaneVertices);
        makePlane("left", new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color3"](0, 0.3, 0), this._leftPlaneVertices);
        makePlane("top", new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color3"](0, 0, 1), this._topPlaneVertices);
        makePlane("bottom", new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color3"](0, 0, 0.3), this._bottomPlaneVertices);
        this._nearLinesPoints[0] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[2];
        this._nearLinesPoints[1] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[3];
        this._nearLinesPoints[2] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[4];
        this._nearLinesPoints[3] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[5];
        this._nearLinesPoints[4] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[2];
        this._farLinesPoints[0] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[6];
        this._farLinesPoints[1] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[7];
        this._farLinesPoints[2] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[8];
        this._farLinesPoints[3] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[9];
        this._farLinesPoints[4] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[6];
        this._trLinesPoints[0] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[2];
        this._trLinesPoints[1] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[6];
        this._brLinesPoints[0] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[3];
        this._brLinesPoints[1] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[7];
        this._tlLinesPoints[0] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[4];
        this._tlLinesPoints[1] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[8];
        this._blLinesPoints[0] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[5];
        this._blLinesPoints[1] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[9];
    }
    _getInvertViewMatrix() {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].LookAtLHToRef(this._light.position, this._light.position.add(this._light.direction), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].UpReadOnly, this._inverseViewMatrix);
        this._inverseViewMatrix.invertToRef(this._inverseViewMatrix);
        return this._inverseViewMatrix;
    }
} //# sourceMappingURL=directionalLightFrustumViewer.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Debug/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Debug$2f$axesViewer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Debug/axesViewer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Debug$2f$boneAxesViewer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Debug/boneAxesViewer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Debug$2f$debugLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Debug/debugLayer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Debug$2f$physicsViewer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Debug/physicsViewer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Debug$2f$rayHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Debug/rayHelper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Debug$2f$skeletonViewer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Debug/skeletonViewer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Debug$2f$ISkeletonViewer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Debug/ISkeletonViewer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Debug$2f$directionalLightFrustumViewer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Debug/directionalLightFrustumViewer.js [app-client] (ecmascript)"); //# sourceMappingURL=index.js.map
;
;
;
;
;
;
;
;
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Debug/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AxesViewer",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Debug$2f$axesViewer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AxesViewer"],
    "BoneAxesViewer",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Debug$2f$boneAxesViewer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoneAxesViewer"],
    "DebugLayer",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Debug$2f$debugLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DebugLayer"],
    "DebugLayerTab",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Debug$2f$debugLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DebugLayerTab"],
    "DirectionalLightFrustumViewer",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Debug$2f$directionalLightFrustumViewer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DirectionalLightFrustumViewer"],
    "PhysicsViewer",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Debug$2f$physicsViewer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PhysicsViewer"],
    "RayHelper",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Debug$2f$rayHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RayHelper"],
    "SkeletonViewer",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Debug$2f$skeletonViewer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SkeletonViewer"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Debug$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Debug/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Debug$2f$axesViewer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Debug/axesViewer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Debug$2f$boneAxesViewer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Debug/boneAxesViewer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Debug$2f$debugLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Debug/debugLayer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Debug$2f$physicsViewer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Debug/physicsViewer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Debug$2f$rayHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Debug/rayHelper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Debug$2f$skeletonViewer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Debug/skeletonViewer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Debug$2f$ISkeletonViewer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Debug/ISkeletonViewer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Debug$2f$directionalLightFrustumViewer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Debug/directionalLightFrustumViewer.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=dcdbf_%40babylonjs_core_Debug_be9aa11c._.js.map