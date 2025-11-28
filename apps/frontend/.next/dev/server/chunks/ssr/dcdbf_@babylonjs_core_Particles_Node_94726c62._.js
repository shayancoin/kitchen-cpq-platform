module.exports = [
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Enums/nodeParticleBlockConnectionPointTypes.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Defines the kind of connection point for node geometry
 */ __turbopack_context__.s([
    "NodeParticleBlockConnectionPointTypes",
    ()=>NodeParticleBlockConnectionPointTypes
]);
var NodeParticleBlockConnectionPointTypes;
(function(NodeParticleBlockConnectionPointTypes) {
    /** Int */ NodeParticleBlockConnectionPointTypes[NodeParticleBlockConnectionPointTypes["Int"] = 1] = "Int";
    /** Float */ NodeParticleBlockConnectionPointTypes[NodeParticleBlockConnectionPointTypes["Float"] = 2] = "Float";
    /** Vector2 */ NodeParticleBlockConnectionPointTypes[NodeParticleBlockConnectionPointTypes["Vector2"] = 4] = "Vector2";
    /** Vector3 */ NodeParticleBlockConnectionPointTypes[NodeParticleBlockConnectionPointTypes["Vector3"] = 8] = "Vector3";
    /** Matrix */ NodeParticleBlockConnectionPointTypes[NodeParticleBlockConnectionPointTypes["Matrix"] = 16] = "Matrix";
    /** Particle */ NodeParticleBlockConnectionPointTypes[NodeParticleBlockConnectionPointTypes["Particle"] = 32] = "Particle";
    /** Texture */ NodeParticleBlockConnectionPointTypes[NodeParticleBlockConnectionPointTypes["Texture"] = 64] = "Texture";
    /** Color4 */ NodeParticleBlockConnectionPointTypes[NodeParticleBlockConnectionPointTypes["Color4"] = 128] = "Color4";
    /** FloatGradient */ NodeParticleBlockConnectionPointTypes[NodeParticleBlockConnectionPointTypes["FloatGradient"] = 256] = "FloatGradient";
    /** Vector2Gradient */ NodeParticleBlockConnectionPointTypes[NodeParticleBlockConnectionPointTypes["Vector2Gradient"] = 512] = "Vector2Gradient";
    /** Vector3Gradient */ NodeParticleBlockConnectionPointTypes[NodeParticleBlockConnectionPointTypes["Vector3Gradient"] = 1024] = "Vector3Gradient";
    /** Color4Gradient */ NodeParticleBlockConnectionPointTypes[NodeParticleBlockConnectionPointTypes["Color4Gradient"] = 2048] = "Color4Gradient";
    /** System */ NodeParticleBlockConnectionPointTypes[NodeParticleBlockConnectionPointTypes["System"] = 4096] = "System";
    /** Detect type based on connection */ NodeParticleBlockConnectionPointTypes[NodeParticleBlockConnectionPointTypes["AutoDetect"] = 8192] = "AutoDetect";
    /** Output type that will be defined by input type */ NodeParticleBlockConnectionPointTypes[NodeParticleBlockConnectionPointTypes["BasedOnInput"] = 16384] = "BasedOnInput";
    /** Undefined */ NodeParticleBlockConnectionPointTypes[NodeParticleBlockConnectionPointTypes["Undefined"] = 32768] = "Undefined";
    /** Bitmask of all types */ NodeParticleBlockConnectionPointTypes[NodeParticleBlockConnectionPointTypes["All"] = 65535] = "All";
})(NodeParticleBlockConnectionPointTypes || (NodeParticleBlockConnectionPointTypes = {})); //# sourceMappingURL=nodeParticleBlockConnectionPointTypes.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/nodeParticleBlockConnectionPoint.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NodeParticleConnectionPoint",
    ()=>NodeParticleConnectionPoint,
    "NodeParticleConnectionPointCompatibilityStates",
    ()=>NodeParticleConnectionPointCompatibilityStates,
    "NodeParticleConnectionPointDirection",
    ()=>NodeParticleConnectionPointDirection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/observable.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Enums/nodeParticleBlockConnectionPointTypes.js [app-ssr] (ecmascript)");
;
;
var NodeParticleConnectionPointCompatibilityStates;
(function(NodeParticleConnectionPointCompatibilityStates) {
    /** Points are compatibles */ NodeParticleConnectionPointCompatibilityStates[NodeParticleConnectionPointCompatibilityStates["Compatible"] = 0] = "Compatible";
    /** Points are incompatible because of their types */ NodeParticleConnectionPointCompatibilityStates[NodeParticleConnectionPointCompatibilityStates["TypeIncompatible"] = 1] = "TypeIncompatible";
    /** Points are incompatible because they are in the same hierarchy **/ NodeParticleConnectionPointCompatibilityStates[NodeParticleConnectionPointCompatibilityStates["HierarchyIssue"] = 2] = "HierarchyIssue";
})(NodeParticleConnectionPointCompatibilityStates || (NodeParticleConnectionPointCompatibilityStates = {}));
var NodeParticleConnectionPointDirection;
(function(NodeParticleConnectionPointDirection) {
    /** Input */ NodeParticleConnectionPointDirection[NodeParticleConnectionPointDirection["Input"] = 0] = "Input";
    /** Output */ NodeParticleConnectionPointDirection[NodeParticleConnectionPointDirection["Output"] = 1] = "Output";
})(NodeParticleConnectionPointDirection || (NodeParticleConnectionPointDirection = {}));
class NodeParticleConnectionPoint {
    /** Gets the direction of the point */ get direction() {
        return this._direction;
    }
    /**
     * Gets or sets the connection point type (default is float)
     */ get type() {
        if (this._type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].AutoDetect) {
            if (this._ownerBlock.isInput) {
                return this._ownerBlock.type;
            }
            if (this._connectedPoint) {
                return this._connectedPoint.type;
            }
            if (this._linkedConnectionSource) {
                if (this._linkedConnectionSource.isConnected) {
                    return this._linkedConnectionSource.type;
                }
                if (this._linkedConnectionSource._defaultConnectionPointType) {
                    return this._linkedConnectionSource._defaultConnectionPointType;
                }
            }
            if (this._defaultConnectionPointType) {
                return this._defaultConnectionPointType;
            }
        }
        if (this._type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].BasedOnInput) {
            if (this._typeConnectionSource) {
                if (!this._typeConnectionSource.isConnected && this._defaultConnectionPointType) {
                    return this._defaultConnectionPointType;
                }
                if (this._typeConnectionSourceTranslation) {
                    return this._typeConnectionSourceTranslation(this._typeConnectionSource.type);
                }
                return this._typeConnectionSource.type;
            } else if (this._defaultConnectionPointType) {
                return this._defaultConnectionPointType;
            }
        }
        return this._type;
    }
    set type(value) {
        this._type = value;
    }
    /**
     * Gets a boolean indicating that the current point is connected to another NodeMaterialBlock
     */ get isConnected() {
        return this.connectedPoint !== null || this.hasEndpoints;
    }
    /** Get the other side of the connection (if any) */ get connectedPoint() {
        return this._connectedPoint;
    }
    /** Get the block that owns this connection point */ get ownerBlock() {
        return this._ownerBlock;
    }
    /** Get the block connected on the other side of this connection (if any) */ get sourceBlock() {
        if (!this._connectedPoint) {
            return null;
        }
        return this._connectedPoint.ownerBlock;
    }
    /** Get the block connected on the endpoints of this connection (if any) */ get connectedBlocks() {
        if (this._endpoints.length === 0) {
            return [];
        }
        return this._endpoints.map((e)=>e.ownerBlock);
    }
    /** Gets the list of connected endpoints */ get endpoints() {
        return this._endpoints;
    }
    /** Gets a boolean indicating if that output point is connected to at least one input */ get hasEndpoints() {
        return this._endpoints && this._endpoints.length > 0;
    }
    /** Get the inner type (ie AutoDetect for instance instead of the inferred one) */ get innerType() {
        if (this._linkedConnectionSource && !this._isMainLinkSource && this._linkedConnectionSource.isConnected) {
            return this.type;
        }
        return this._type;
    }
    /**
     * Creates a new connection point
     * @param name defines the connection point name
     * @param ownerBlock defines the block hosting this connection point
     * @param direction defines the direction of the connection point
     */ constructor(name, ownerBlock, direction){
        /** @internal */ this._connectedPoint = null;
        /** @internal */ this._storedValue = null;
        /** @internal */ this._storedFunction = null;
        /** @internal */ this._acceptedConnectionPointType = null;
        this._endpoints = new Array();
        this._type = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Particle;
        /** @internal */ this._linkedConnectionSource = null;
        /** @internal */ this._typeConnectionSource = null;
        /** @internal */ this._typeConnectionSourceTranslation = null;
        /** @internal */ this._defaultConnectionPointType = null;
        /** @internal */ this._isMainLinkSource = false;
        /**
         * Gets or sets the additional types supported by this connection point
         */ this.acceptedConnectionPointTypes = [];
        /**
         * Gets or sets the additional types excluded by this connection point
         */ this.excludedConnectionPointTypes = [];
        /**
         * Observable triggered when this point is connected
         */ this.onConnectionObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * Observable triggered when this point is disconnected
         */ this.onDisconnectionObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * Gets or sets a boolean indicating that this connection point is exposed on a frame
         */ this.isExposedOnFrame = false;
        /**
         * Gets or sets number indicating the position that the port is exposed to on a frame
         */ this.exposedPortPosition = -1;
        /**
         * Gets the default value used for this point at creation time
         */ this.defaultValue = null;
        /**
         * Gets or sets the default value used for this point if nothing is connected
         */ this.value = null;
        /**
         * Gets or sets the min value accepted for this point if nothing is connected
         */ this.valueMin = null;
        /**
         * Gets or sets the max value accepted for this point if nothing is connected
         */ this.valueMax = null;
        this._ownerBlock = ownerBlock;
        this.name = name;
        this._direction = direction;
    }
    /**
     * Gets the current class name e.g. "NodeMaterialConnectionPoint"
     * @returns the class name
     */ getClassName() {
        return "NodeParticleConnectionPoint";
    }
    /**
     * Gets the value represented by this connection point
     * @param state current evaluation state
     * @returns the connected value or the value if nothing is connected
     */ getConnectedValue(state) {
        if (this.isConnected) {
            if (this._connectedPoint?._storedFunction) {
                return this._connectedPoint._storedFunction(state);
            }
            return this._connectedPoint._storedValue;
        }
        return this.value;
    }
    /**
     * Gets a boolean indicating if the current point can be connected to another point
     * @param connectionPoint defines the other connection point
     * @returns a boolean
     */ canConnectTo(connectionPoint) {
        return this.checkCompatibilityState(connectionPoint) === 0 /* NodeParticleConnectionPointCompatibilityStates.Compatible */ ;
    }
    /**
     * Gets a number indicating if the current point can be connected to another point
     * @param connectionPoint defines the other connection point
     * @returns a number defining the compatibility state
     */ checkCompatibilityState(connectionPoint) {
        const ownerBlock = this._ownerBlock;
        const otherBlock = connectionPoint.ownerBlock;
        if (this.type !== connectionPoint.type && connectionPoint.innerType !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].AutoDetect) {
            // Accepted types
            if (connectionPoint.acceptedConnectionPointTypes && connectionPoint.acceptedConnectionPointTypes.indexOf(this.type) !== -1) {
                return 0 /* NodeParticleConnectionPointCompatibilityStates.Compatible */ ;
            } else {
                return 1 /* NodeParticleConnectionPointCompatibilityStates.TypeIncompatible */ ;
            }
        }
        // Excluded
        if (connectionPoint.excludedConnectionPointTypes && connectionPoint.excludedConnectionPointTypes.indexOf(this.type) !== -1) {
            return 1 /* NodeParticleConnectionPointCompatibilityStates.TypeIncompatible */ ;
        }
        // Check hierarchy
        let targetBlock = otherBlock;
        let sourceBlock = ownerBlock;
        if (this.direction === 0 /* NodeParticleConnectionPointDirection.Input */ ) {
            targetBlock = ownerBlock;
            sourceBlock = otherBlock;
        }
        if (targetBlock.isAnAncestorOf(sourceBlock)) {
            return 2 /* NodeParticleConnectionPointCompatibilityStates.HierarchyIssue */ ;
        }
        return 0 /* NodeParticleConnectionPointCompatibilityStates.Compatible */ ;
    }
    /**
     * Connect this point to another connection point
     * @param connectionPoint defines the other connection point
     * @param ignoreConstraints defines if the system will ignore connection type constraints (default is false)
     * @returns the current connection point
     */ connectTo(connectionPoint, ignoreConstraints = false) {
        if (!ignoreConstraints && !this.canConnectTo(connectionPoint)) {
            // eslint-disable-next-line no-throw-literal
            throw `Cannot connect these two connectors. source: "${this.ownerBlock.name}".${this.name}, target: "${connectionPoint.ownerBlock.name}".${connectionPoint.name}`;
        }
        this._endpoints.push(connectionPoint);
        connectionPoint._connectedPoint = this;
        this.onConnectionObservable.notifyObservers(connectionPoint);
        connectionPoint.onConnectionObservable.notifyObservers(this);
        return this;
    }
    /**
     * Disconnect this point from one of his endpoint
     * @param endpoint defines the other connection point
     * @returns the current connection point
     */ disconnectFrom(endpoint) {
        const index = this._endpoints.indexOf(endpoint);
        if (index === -1) {
            return this;
        }
        this._endpoints.splice(index, 1);
        endpoint._connectedPoint = null;
        this.onDisconnectionObservable.notifyObservers(endpoint);
        endpoint.onDisconnectionObservable.notifyObservers(this);
        return this;
    }
    /**
     * Fill the list of excluded connection point types with all types other than those passed in the parameter
     * @param mask Types (ORed values of NodeMaterialBlockConnectionPointTypes) that are allowed, and thus will not be pushed to the excluded list
     */ addExcludedConnectionPointFromAllowedTypes(mask) {
        let bitmask = 1;
        while(bitmask < __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].All){
            if (!(mask & bitmask)) {
                this.excludedConnectionPointTypes.push(bitmask);
            }
            bitmask = bitmask << 1;
        }
    }
    /**
     * Serializes this point in a JSON representation
     * @param isInput defines if the connection point is an input (default is true)
     * @returns the serialized point object
     */ serialize(isInput = true) {
        const serializationObject = {};
        serializationObject.name = this.name;
        serializationObject.displayName = this.displayName;
        if (this.value !== undefined && this.value !== null) {
            if (this.value.asArray) {
                serializationObject.valueType = "BABYLON." + this.value.getClassName();
                serializationObject.value = this.value.asArray();
            } else {
                serializationObject.valueType = "number";
                serializationObject.value = this.value;
            }
        }
        if (isInput && this.connectedPoint) {
            serializationObject.inputName = this.name;
            serializationObject.targetBlockId = this.connectedPoint.ownerBlock.uniqueId;
            serializationObject.targetConnectionName = this.connectedPoint.name;
            serializationObject.isExposedOnFrame = true;
            serializationObject.exposedPortPosition = this.exposedPortPosition;
        }
        if (this.isExposedOnFrame || this.exposedPortPosition >= 0) {
            serializationObject.isExposedOnFrame = true;
            serializationObject.exposedPortPosition = this.exposedPortPosition;
        }
        return serializationObject;
    }
    /**
     * Release resources
     */ dispose() {
        this.onConnectionObservable.clear();
        this.onDisconnectionObservable.clear();
    }
} //# sourceMappingURL=nodeParticleBlockConnectionPoint.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/nodeParticleBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NodeParticleBlock",
    ()=>NodeParticleBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/tslib.es6.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/decorators.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$uniqueIdGenerator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/uniqueIdGenerator.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$nodeParticleBlockConnectionPoint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/nodeParticleBlockConnectionPoint.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/logger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/observable.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
class NodeParticleBlock {
    /**
     * Gets a boolean indicating if this block is a teleport out
     */ get isTeleportOut() {
        return this._isTeleportOut;
    }
    /**
     * Gets a boolean indicating if this block is a teleport in
     */ get isTeleportIn() {
        return this._isTeleportIn;
    }
    /**
     * Gets a boolean indicating that this block is a system block
     */ get isSystem() {
        return this._isSystem;
    }
    /**
     * Gets a boolean indicating that this block is an input block
     */ get isInput() {
        return this._isInput;
    }
    /**
     * Gets a boolean indicating if this block is a debug block
     */ get isDebug() {
        return this._isDebug;
    }
    /**
     * Gets or set the name of the block
     */ get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    /**
     * Gets the current class name e.g. "NodeParticleBlock"
     * @returns the class name
     */ getClassName() {
        return "NodeParticleBlock";
    }
    /**
     * Gets the list of input points
     */ get inputs() {
        return this._inputs;
    }
    /** Gets the list of output points */ get outputs() {
        return this._outputs;
    }
    /**
     * Creates a new NodeParticleBlock
     * @param name defines the block name
     */ constructor(name){
        this._name = "";
        this._isInput = false;
        this._isSystem = false;
        this._isDebug = false;
        this._isTeleportOut = false;
        this._isTeleportIn = false;
        /** @internal */ this._inputs = new Array();
        /** @internal */ this._outputs = new Array();
        /**
         * Gets an observable raised when the block is built
         */ this.onBuildObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * Gets an observable raised when the block is disposed
         */ this.onDisposeObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * Gets an observable raised when the inputs of the block change
         */ this.onInputChangedObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
        /** Gets or sets a boolean indicating that this input can be edited from a collapsed frame */ this.visibleOnFrame = false;
        this._name = name;
        this.uniqueId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$uniqueIdGenerator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UniqueIdGenerator"].UniqueId;
    }
    _inputRename(name) {
        return name;
    }
    _outputRename(name) {
        return name;
    }
    /**
     * Checks if the current block is an ancestor of a given block
     * @param block defines the potential descendant block to check
     * @returns true if block is a descendant
     */ isAnAncestorOf(block) {
        for (const output of this._outputs){
            if (!output.hasEndpoints) {
                continue;
            }
            for (const endpoint of output.endpoints){
                if (endpoint.ownerBlock === block) {
                    return true;
                }
                if (endpoint.ownerBlock.isAnAncestorOf(block)) {
                    return true;
                }
            }
        }
        return false;
    }
    /**
     * Checks if the current block is an ancestor of a given type
     * @param type defines the potential type to check
     * @returns true if block is a descendant
     */ isAnAncestorOfType(type) {
        if (this.getClassName() === type) {
            return true;
        }
        for (const output of this._outputs){
            if (!output.hasEndpoints) {
                continue;
            }
            for (const endpoint of output.endpoints){
                if (endpoint.ownerBlock.isAnAncestorOfType(type)) {
                    return true;
                }
            }
        }
        return false;
    }
    /**
     * Find an input by its name
     * @param name defines the name of the input to look for
     * @returns the input or null if not found
     */ getInputByName(name) {
        const filter = this._inputs.filter((e)=>e.name === name);
        if (filter.length) {
            return filter[0];
        }
        return null;
    }
    _linkConnectionTypes(inputIndex0, inputIndex1, looseCoupling = false) {
        if (looseCoupling) {
            this._inputs[inputIndex1]._acceptedConnectionPointType = this._inputs[inputIndex0];
        } else {
            this._inputs[inputIndex0]._linkedConnectionSource = this._inputs[inputIndex1];
            this._inputs[inputIndex0]._isMainLinkSource = true;
        }
        this._inputs[inputIndex1]._linkedConnectionSource = this._inputs[inputIndex0];
    }
    /**
     * Register a new input. Must be called inside a block constructor
     * @param name defines the connection point name
     * @param type defines the connection point type
     * @param isOptional defines a boolean indicating that this input can be omitted
     * @param value value to return if there is no connection
     * @param valueMin min value accepted for value
     * @param valueMax max value accepted for value
     * @returns the current block
     */ registerInput(name, type, isOptional = false, value, valueMin, valueMax) {
        const point = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$nodeParticleBlockConnectionPoint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleConnectionPoint"](name, this, 0 /* NodeParticleConnectionPointDirection.Input */ );
        point.type = type;
        point.isOptional = isOptional;
        point.defaultValue = value;
        point.value = value;
        point.valueMin = valueMin;
        point.valueMax = valueMax;
        this._inputs.push(point);
        this.onInputChangedObservable.notifyObservers(point);
        return this;
    }
    /**
     * Register a new output. Must be called inside a block constructor
     * @param name defines the connection point name
     * @param type defines the connection point type
     * @param point an already created connection point. If not provided, create a new one
     * @returns the current block
     */ registerOutput(name, type, point) {
        point = point ?? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$nodeParticleBlockConnectionPoint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleConnectionPoint"](name, this, 1 /* NodeParticleConnectionPointDirection.Output */ );
        point.type = type;
        this._outputs.push(point);
        return this;
    }
    /**
     * Builds the block. Must be implemented by derived classes.
     * @param _state defines the current build state
     */ _build(_state) {}
    _customBuildStep(_state) {
    // Must be implemented by children
    }
    /**
     * Builds the block
     * @param state defines the current build state
     * @returns the built block
     */ build(state) {
        if (this._buildId === state.buildId) {
            return true;
        }
        if (this._outputs.length > 0) {
            if (!this._outputs.some((o)=>o.hasEndpoints) && !this.isDebug && !this.isSystem) {
                return false;
            }
        }
        this._buildId = state.buildId;
        // Check if "parent" blocks are compiled
        for (const input of this._inputs){
            if (!input.connectedPoint) {
                if (!input.isOptional) {
                    // Emit a warning
                    state.notConnectedNonOptionalInputs.push(input);
                }
                continue;
            }
            const block = input.connectedPoint.ownerBlock;
            if (block && block !== this && !block.isSystem) {
                block.build(state);
            }
        }
        this._customBuildStep(state);
        // Logs
        if (state.verbose) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Log(`Building ${this.name} [${this.getClassName()}]`);
        }
        this._build(state);
        this.onBuildObservable.notifyObservers(this);
        return false;
    }
    /**
     * Serializes this block in a JSON representation
     * @returns the serialized block object
     */ serialize() {
        const serializationObject = {};
        serializationObject.customType = "BABYLON." + this.getClassName();
        serializationObject.id = this.uniqueId;
        serializationObject.name = this.name;
        serializationObject.visibleOnFrame = this.visibleOnFrame;
        serializationObject.comments = this.comments;
        serializationObject.inputs = [];
        serializationObject.outputs = [];
        for (const input of this.inputs){
            serializationObject.inputs.push(input.serialize());
        }
        for (const output of this.outputs){
            serializationObject.outputs.push(output.serialize(false));
        }
        return serializationObject;
    }
    /**
     * @internal
     */ _deserialize(serializationObject) {
        this._name = serializationObject.name;
        this.comments = serializationObject.comments;
        this.visibleOnFrame = !!serializationObject.visibleOnFrame;
        this._deserializePortDisplayNamesAndExposedOnFrame(serializationObject);
    }
    _deserializePortDisplayNamesAndExposedOnFrame(serializationObject) {
        const serializedInputs = serializationObject.inputs;
        const serializedOutputs = serializationObject.outputs;
        if (serializedInputs) {
            for (const port of serializedInputs){
                const input = this.inputs.find((i)=>i.name === port.name);
                if (!input) {
                    return;
                }
                if (port.displayName) {
                    input.displayName = port.displayName;
                }
                if (port.isExposedOnFrame) {
                    input.isExposedOnFrame = port.isExposedOnFrame;
                    input.exposedPortPosition = port.exposedPortPosition;
                }
                if (port.value !== undefined && port.value !== null) {
                    if (port.valueType === "number") {
                        input.value = port.value;
                    } else {
                        const valueType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GetClass"])(port.valueType);
                        if (valueType) {
                            input.value = valueType.FromArray(port.value);
                        }
                    }
                }
            }
        }
        if (serializedOutputs) {
            for(let i = 0; i < serializedOutputs.length; i++){
                const port = serializedOutputs[i];
                if (port.displayName) {
                    this.outputs[i].displayName = port.displayName;
                }
                if (port.isExposedOnFrame) {
                    this.outputs[i].isExposedOnFrame = port.isExposedOnFrame;
                    this.outputs[i].exposedPortPosition = port.exposedPortPosition;
                }
            }
        }
    }
    /**
     * Clone the current block to a new identical block
     * @returns a copy of the current block
     */ clone() {
        const serializationObject = this.serialize();
        const blockType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GetClass"])(serializationObject.customType);
        if (blockType) {
            const block = new blockType();
            block._deserialize(serializationObject);
            return block;
        }
        return null;
    }
    /**
     * Release resources
     */ dispose() {
        this.onDisposeObservable.notifyObservers(this);
        this.onDisposeObservable.clear();
        for (const input of this.inputs){
            input.dispose();
        }
        for (const output of this.outputs){
            output.dispose();
        }
        this.onBuildObservable.clear();
        this.onInputChangedObservable.clear();
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])("comment")
], NodeParticleBlock.prototype, "comments", void 0); //# sourceMappingURL=nodeParticleBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Enums/nodeParticleContextualSources.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable @typescript-eslint/naming-convention */ /**
 * Defines the kind of contextual sources for node particles
 */ __turbopack_context__.s([
    "NodeParticleContextualSources",
    ()=>NodeParticleContextualSources
]);
var NodeParticleContextualSources;
(function(NodeParticleContextualSources) {
    /** None */ NodeParticleContextualSources[NodeParticleContextualSources["None"] = 0] = "None";
    /** Position */ NodeParticleContextualSources[NodeParticleContextualSources["Position"] = 1] = "Position";
    /** Direction */ NodeParticleContextualSources[NodeParticleContextualSources["Direction"] = 2] = "Direction";
    /** Age */ NodeParticleContextualSources[NodeParticleContextualSources["Age"] = 3] = "Age";
    /** Lifetime */ NodeParticleContextualSources[NodeParticleContextualSources["Lifetime"] = 4] = "Lifetime";
    /** Color */ NodeParticleContextualSources[NodeParticleContextualSources["Color"] = 5] = "Color";
    /** ScaledDirection */ NodeParticleContextualSources[NodeParticleContextualSources["ScaledDirection"] = 6] = "ScaledDirection";
    /** Scale */ NodeParticleContextualSources[NodeParticleContextualSources["Scale"] = 7] = "Scale";
    /** AgeGradient */ NodeParticleContextualSources[NodeParticleContextualSources["AgeGradient"] = 8] = "AgeGradient";
    /** Angle */ NodeParticleContextualSources[NodeParticleContextualSources["Angle"] = 9] = "Angle";
    /** SpriteCellIndex */ NodeParticleContextualSources[NodeParticleContextualSources["SpriteCellIndex"] = 16] = "SpriteCellIndex";
    /** SpriteCellStart */ NodeParticleContextualSources[NodeParticleContextualSources["SpriteCellStart"] = 17] = "SpriteCellStart";
    /** SpriteCellEnd */ NodeParticleContextualSources[NodeParticleContextualSources["SpriteCellEnd"] = 18] = "SpriteCellEnd";
    /** Initial Color */ NodeParticleContextualSources[NodeParticleContextualSources["InitialColor"] = 19] = "InitialColor";
    /** Color Dead*/ NodeParticleContextualSources[NodeParticleContextualSources["ColorDead"] = 20] = "ColorDead";
    /** Initial Direction */ NodeParticleContextualSources[NodeParticleContextualSources["InitialDirection"] = 21] = "InitialDirection";
    /** Color Step */ NodeParticleContextualSources[NodeParticleContextualSources["ColorStep"] = 22] = "ColorStep";
    /** Scaled Color Step */ NodeParticleContextualSources[NodeParticleContextualSources["ScaledColorStep"] = 23] = "ScaledColorStep";
    /** Local Position Updated */ NodeParticleContextualSources[NodeParticleContextualSources["LocalPositionUpdated"] = 24] = "LocalPositionUpdated";
    /** Size */ NodeParticleContextualSources[NodeParticleContextualSources["Size"] = 25] = "Size";
    /** Direction Scale */ NodeParticleContextualSources[NodeParticleContextualSources["DirectionScale"] = 32] = "DirectionScale";
})(NodeParticleContextualSources || (NodeParticleContextualSources = {})); //# sourceMappingURL=nodeParticleContextualSources.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Enums/nodeParticleSystemSources.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Enum used to define system values e.g. values automatically provided by the system
 */ __turbopack_context__.s([
    "NodeParticleSystemSources",
    ()=>NodeParticleSystemSources
]);
var NodeParticleSystemSources;
(function(NodeParticleSystemSources) {
    /** None */ NodeParticleSystemSources[NodeParticleSystemSources["None"] = 0] = "None";
    /** Time */ NodeParticleSystemSources[NodeParticleSystemSources["Time"] = 1] = "Time";
    /** Delta time */ NodeParticleSystemSources[NodeParticleSystemSources["Delta"] = 2] = "Delta";
    /** Emitter */ NodeParticleSystemSources[NodeParticleSystemSources["Emitter"] = 3] = "Emitter";
    /** Camera position */ NodeParticleSystemSources[NodeParticleSystemSources["CameraPosition"] = 4] = "CameraPosition";
})(NodeParticleSystemSources || (NodeParticleSystemSources = {})); //# sourceMappingURL=nodeParticleSystemSources.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/nodeParticleBuildState.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NodeParticleBuildState",
    ()=>NodeParticleBuildState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.color.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Enums/nodeParticleBlockConnectionPointTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleContextualSources$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Enums/nodeParticleContextualSources.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleSystemSources$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Enums/nodeParticleSystemSources.js [app-ssr] (ecmascript)");
;
;
;
;
;
class NodeParticleBuildState {
    constructor(){
        /** Gets or sets the list of non connected mandatory inputs */ this.notConnectedNonOptionalInputs = [];
        /**
         * Gets or sets the particle context for contextual data
         */ this.particleContext = null;
        /**
         * Gets or sets the system context for contextual data
         */ this.systemContext = null;
        /**
         * Gets or sets the index of the gradient to use
         */ this.gradientIndex = 0;
        /**
         * Gets or sets next gradient in line
         */ this.nextGradientIndex = 0;
    }
    /**
     * Emits errors if any
     */ emitErrors() {
        let errorMessage = "";
        for (const notConnectedInput of this.notConnectedNonOptionalInputs){
            errorMessage += `input ${notConnectedInput.name} from block ${notConnectedInput.ownerBlock.name}[${notConnectedInput.ownerBlock.getClassName()}] is not connected and is not optional.\n`;
        }
        if (errorMessage) {
            // eslint-disable-next-line no-throw-literal
            throw "Build of Node Particle System Set failed:\n" + errorMessage;
        }
    }
    /**
     * Adapt a value to a target type
     * @param source defines the value to adapt
     * @param targetType defines the target type
     * @returns the adapted value
     */ adapt(source, targetType) {
        const value = source.getConnectedValue(this) || 0;
        if (source.type === targetType) {
            return value;
        }
        switch(targetType){
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Vector2:
                return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"](value, value);
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Vector3:
                return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](value, value, value);
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Color4:
                return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color4"](value, value, value, value);
        }
        return null;
    }
    /**
     * Gets the value associated with a contextual source
     * @param source Source of the contextual value
     * @returns the value associated with the source
     */ getContextualValue(source) {
        if (!this.particleContext || !this.systemContext) {
            return null;
        }
        switch(source){
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleContextualSources$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleContextualSources"].Position:
                return this.particleContext.position;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleContextualSources$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleContextualSources"].Direction:
                return this.particleContext.direction;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleContextualSources$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleContextualSources"].DirectionScale:
                return this.particleContext._directionScale;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleContextualSources$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleContextualSources"].ScaledDirection:
                this.particleContext.direction.scaleToRef(this.particleContext._directionScale, this.particleContext._scaledDirection);
                return this.particleContext._scaledDirection;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleContextualSources$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleContextualSources"].Color:
                return this.particleContext.color;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleContextualSources$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleContextualSources"].InitialColor:
                return this.particleContext.initialColor;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleContextualSources$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleContextualSources"].ColorDead:
                return this.particleContext.colorDead;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleContextualSources$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleContextualSources"].Age:
                return this.particleContext.age;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleContextualSources$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleContextualSources"].Lifetime:
                return this.particleContext.lifeTime;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleContextualSources$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleContextualSources"].Angle:
                return this.particleContext.angle;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleContextualSources$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleContextualSources"].Scale:
                return this.particleContext.scale;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleContextualSources$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleContextualSources"].Size:
                return this.particleContext.size;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleContextualSources$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleContextualSources"].AgeGradient:
                return this.particleContext.age / this.particleContext.lifeTime;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleContextualSources$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleContextualSources"].SpriteCellEnd:
                return this.systemContext.endSpriteCellID;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleContextualSources$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleContextualSources"].SpriteCellIndex:
                return this.particleContext.cellIndex;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleContextualSources$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleContextualSources"].SpriteCellStart:
                return this.systemContext.startSpriteCellID;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleContextualSources$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleContextualSources"].InitialDirection:
                return this.particleContext._initialDirection;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleContextualSources$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleContextualSources"].ColorStep:
                return this.particleContext.colorStep;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleContextualSources$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleContextualSources"].ScaledColorStep:
                this.particleContext.colorStep.scaleToRef(this.systemContext._scaledUpdateSpeed, this.systemContext._scaledColorStep);
                return this.systemContext._scaledColorStep;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleContextualSources$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleContextualSources"].LocalPositionUpdated:
                this.particleContext.direction.scaleToRef(this.particleContext._directionScale, this.particleContext._scaledDirection);
                this.particleContext._localPosition.addInPlace(this.particleContext._scaledDirection);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinatesToRef(this.particleContext._localPosition, this.systemContext._emitterWorldMatrix, this.particleContext.position);
                return this.particleContext.position;
        }
        return null;
    }
    /**
     * Gets the emitter world matrix
     */ get emitterWorldMatrix() {
        if (!this.systemContext) {
            return null;
        }
        return this.systemContext._emitterWorldMatrix;
    }
    /**
     * Gets the emitter inverse world matrix
     */ get emitterInverseWorldMatrix() {
        if (!this.systemContext) {
            return null;
        }
        return this.systemContext._emitterInverseWorldMatrix;
    }
    /**
     * Gets the emitter position
     */ get emitterPosition() {
        if (!this.systemContext) {
            return null;
        }
        if (!this.systemContext.emitter) {
            return null;
        }
        if (this.systemContext.emitter instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]) {
            return this.systemContext.emitter;
        }
        return this.systemContext.emitter.absolutePosition;
    }
    /**
     * Gets the value associated with a system source
     * @param source Source of the system value
     * @returns the value associated with the source
     */ getSystemValue(source) {
        if (!this.systemContext) {
            return null;
        }
        switch(source){
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleSystemSources$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleSystemSources"].Time:
                return this.systemContext._actualFrame;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleSystemSources$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleSystemSources"].Delta:
                return this.systemContext._scaledUpdateSpeed;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleSystemSources$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleSystemSources"].Emitter:
                return this.emitterPosition;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleSystemSources$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleSystemSources"].CameraPosition:
                return this.scene.activeCamera?.globalPosition || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        }
        return null;
    }
} //# sourceMappingURL=nodeParticleBuildState.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Triggers/triggerTools.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_TriggerSubEmitter",
    ()=>_TriggerSubEmitter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$nodeParticleBuildState$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/nodeParticleBuildState.js [app-ssr] (ecmascript)");
;
function _TriggerSubEmitter(template, scene, location) {
    const newState = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$nodeParticleBuildState$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBuildState"]();
    newState.scene = scene;
    const clone = template.createSystem(newState);
    clone.canStart = ()=>true; // Allow the cloned system to start
    clone.emitter = location.clone(); // Set the emitter to the particle's position
    clone.disposeOnStop = true; // Clean up the system when it stops
    clone.start();
    return clone;
} //# sourceMappingURL=triggerTools.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/systemBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SystemBlock",
    ()=>SystemBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/tslib.es6.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Decorators/nodeDecorator.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.color.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$baseParticleSystem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/baseParticleSystem.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$nodeParticleBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/nodeParticleBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Triggers$2f$triggerTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Triggers/triggerTools.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Enums/nodeParticleBlockConnectionPointTypes.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
class SystemBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$nodeParticleBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlock"] {
    /**
     * Create a new SystemBlock
     * @param name defines the block name
     */ constructor(name){
        super(name);
        /**
         * Gets or sets the blend mode for the particle system
         */ this.blendMode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$baseParticleSystem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseParticleSystem"].BLENDMODE_ONEONE;
        /**
         * Gets or sets the epsilon value used for comparison
         */ this.capacity = 1000;
        /**
         * Gets or sets the manual emit count
         */ this.manualEmitCount = -1;
        /**
         * Gets or sets the target stop duration for the particle system
         */ this.startDelay = 0;
        /**
         * Gets or sets the target stop duration for the particle system
         */ this.updateSpeed = 0.0167;
        /**
         * Gets or sets the number of pre-warm cycles before rendering the particle system
         */ this.preWarmCycles = 0;
        /**
         * Gets or sets the time step multiplier used for pre-warm
         */ this.preWarmStepOffset = 0;
        /**
         * Gets or sets a boolean indicating if the system is billboard based
         */ this.isBillboardBased = true;
        /**
         * Gets or sets a boolean indicating if the system coordinate space is local or global
         */ this.isLocal = false;
        /**
         * Gets or sets a boolean indicating if the system should be disposed when stopped
         */ this.disposeOnStop = false;
        /**
         * Gets or sets a boolean indicating if the system should not start automatically
         */ this.doNoStart = false;
        /** @internal */ this._internalId = SystemBlock._IdCounter++;
        this._isSystem = true;
        this.registerInput("particle", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Particle);
        this.registerInput("emitRate", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Int, true, 10, 0);
        this.registerInput("texture", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Texture);
        this.registerInput("translationPivot", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Vector2, true);
        this.registerInput("textureMask", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Color4, true);
        this.registerInput("targetStopDuration", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Float, true, 0, 0);
        this.registerInput("onStart", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].System, true);
        this.registerInput("onEnd", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].System, true);
        this.registerOutput("system", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].System);
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "SystemBlock";
    }
    /**
     * Gets the particle input component
     */ get particle() {
        return this._inputs[0];
    }
    /**
     * Gets the emitRate input component
     */ get emitRate() {
        return this._inputs[1];
    }
    /**
     * Gets the texture input component
     */ get texture() {
        return this._inputs[2];
    }
    /**
     * Gets the translationPivot input component
     */ get translationPivot() {
        return this._inputs[3];
    }
    /**
     * Gets the textureMask input component
     */ get textureMask() {
        return this._inputs[4];
    }
    /**
     * Gets the targetStopDuration input component
     */ get targetStopDuration() {
        return this._inputs[5];
    }
    /**
     * Gets the onStart input component
     */ get onStart() {
        return this._inputs[6];
    }
    /**
     * Gets the onEnd input component
     */ get onEnd() {
        return this._inputs[7];
    }
    /**
     * Gets the system output component
     */ get system() {
        return this._outputs[0];
    }
    /**
     * Builds the block and return a functional particle system
     * @param state defines the building state
     * @returns the built particle system
     */ createSystem(state) {
        state.capacity = this.capacity;
        state.buildId = this._buildId++;
        this.build(state);
        const particleSystem = this.particle.getConnectedValue(state);
        particleSystem.particleTexture = this.texture.getConnectedValue(state);
        particleSystem.emitRate = this.emitRate.getConnectedValue(state);
        particleSystem.manualEmitCount = this.manualEmitCount;
        particleSystem.updateSpeed = this.updateSpeed;
        particleSystem.preWarmCycles = this.preWarmCycles;
        particleSystem.preWarmStepOffset = this.preWarmStepOffset;
        particleSystem.blendMode = this.blendMode;
        particleSystem.name = this.name;
        particleSystem._targetStopDuration = this.targetStopDuration.getConnectedValue(state) ?? 0;
        particleSystem.startDelay = this.startDelay;
        particleSystem.isBillboardBased = this.isBillboardBased;
        particleSystem.translationPivot = this.translationPivot.getConnectedValue(state) || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"].Zero();
        particleSystem.textureMask = this.textureMask.getConnectedValue(state) ?? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color4"](1, 1, 1, 1);
        particleSystem.isLocal = this.isLocal;
        particleSystem.disposeOnStop = this.disposeOnStop;
        // The emit rate can vary if it is connected to another block like a gradient
        particleSystem._calculateEmitRate = ()=>{
            state.systemContext = particleSystem;
            return this.emitRate.getConnectedValue(state);
        };
        this.system._storedValue = this;
        particleSystem.canStart = ()=>{
            return !this.doNoStart;
        };
        particleSystem.onStartedObservable.add((system)=>{
            // Triggers
            const onStartSystem = this.onStart.getConnectedValue(state);
            if (onStartSystem) {
                system.onStartedObservable.addOnce(()=>{
                    state.systemContext = particleSystem;
                    const clone = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Triggers$2f$triggerTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_TriggerSubEmitter"])(onStartSystem, state.scene, state.emitterPosition);
                    this.onDisposeObservable.addOnce(()=>{
                        // Clean up the cloned system when the original system is disposed
                        clone.dispose();
                    });
                });
            }
            const onEndSystem = this.onEnd.getConnectedValue(state);
            if (onEndSystem) {
                system.onStoppedObservable.addOnce(()=>{
                    state.systemContext = particleSystem;
                    const clone = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Triggers$2f$triggerTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_TriggerSubEmitter"])(onEndSystem, state.scene, state.emitterPosition);
                    this.onDisposeObservable.addOnce(()=>{
                        // Clean up the cloned system when the original system is disposed
                        clone.dispose();
                    });
                });
            }
        });
        this.onDisposeObservable.addOnce(()=>{
            particleSystem.dispose();
        });
        // Return
        return particleSystem;
    }
    /**
     * Serializes the system block
     * @returns The serialized object
     */ serialize() {
        const serializationObject = super.serialize();
        serializationObject.capacity = this.capacity;
        serializationObject.manualEmitCount = this.manualEmitCount;
        serializationObject.blendMode = this.blendMode;
        serializationObject.updateSpeed = this.updateSpeed;
        serializationObject.preWarmCycles = this.preWarmCycles;
        serializationObject.preWarmStepOffset = this.preWarmStepOffset;
        serializationObject.isBillboardBased = this.isBillboardBased;
        serializationObject.isLocal = this.isLocal;
        serializationObject.disposeOnStop = this.disposeOnStop;
        serializationObject.doNoStart = this.doNoStart;
        serializationObject.startDelay = this.startDelay;
        return serializationObject;
    }
    /**
     * Deserializes the system block
     * @param serializationObject The serialized system
     */ _deserialize(serializationObject) {
        super._deserialize(serializationObject);
        this.capacity = serializationObject.capacity;
        this.manualEmitCount = serializationObject.manualEmitCount ?? -1;
        this.updateSpeed = serializationObject.updateSpeed ?? 0.0167;
        this.preWarmCycles = serializationObject.preWarmCycles ?? 0;
        this.preWarmStepOffset = serializationObject.preWarmStepOffset ?? 0;
        this.isBillboardBased = serializationObject.isBillboardBased ?? true;
        this.isLocal = serializationObject.isLocal ?? false;
        this.disposeOnStop = serializationObject.disposeOnStop ?? false;
        this.doNoStart = !!serializationObject.doNoStart;
        if (serializationObject.emitRate !== undefined) {
            this.emitRate.value = serializationObject.emitRate;
        }
        if (serializationObject.blendMode !== undefined) {
            this.blendMode = serializationObject.blendMode;
        }
        if (serializationObject.startDelay !== undefined) {
            this.startDelay = serializationObject.startDelay;
        }
    }
}
SystemBlock._IdCounter = 0;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["editableInPropertyPage"])("Blend mode", 5 /* PropertyTypeForEdition.List */ , "ADVANCED", {
        notifiers: {
            rebuild: true
        },
        embedded: true,
        options: [
            {
                label: "OneOne",
                value: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$baseParticleSystem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseParticleSystem"].BLENDMODE_ONEONE
            },
            {
                label: "Standard",
                value: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$baseParticleSystem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseParticleSystem"].BLENDMODE_STANDARD
            },
            {
                label: "Add",
                value: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$baseParticleSystem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseParticleSystem"].BLENDMODE_ADD
            },
            {
                label: "Multiply",
                value: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$baseParticleSystem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseParticleSystem"].BLENDMODE_MULTIPLY
            },
            {
                label: "MultiplyAdd",
                value: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$baseParticleSystem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseParticleSystem"].BLENDMODE_MULTIPLYADD
            }
        ]
    })
], SystemBlock.prototype, "blendMode", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["editableInPropertyPage"])("Capacity", 2 /* PropertyTypeForEdition.Int */ , "ADVANCED", {
        embedded: true,
        notifiers: {
            rebuild: true
        },
        min: 0,
        max: 10000
    })
], SystemBlock.prototype, "capacity", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["editableInPropertyPage"])("Manual emit count", 2 /* PropertyTypeForEdition.Int */ , "ADVANCED", {
        embedded: true,
        notifiers: {
            rebuild: true
        },
        min: -1
    })
], SystemBlock.prototype, "manualEmitCount", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["editableInPropertyPage"])("Delay start(ms)", 1 /* PropertyTypeForEdition.Float */ , "ADVANCED", {
        embedded: true,
        notifiers: {
            rebuild: true
        },
        min: 0
    })
], SystemBlock.prototype, "startDelay", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["editableInPropertyPage"])("updateSpeed", 1 /* PropertyTypeForEdition.Float */ , "ADVANCED", {
        embedded: true,
        notifiers: {
            rebuild: true
        },
        min: 0,
        max: 0.1
    })
], SystemBlock.prototype, "updateSpeed", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["editableInPropertyPage"])("Pre-warm cycles", 1 /* PropertyTypeForEdition.Float */ , "ADVANCED", {
        embedded: true,
        notifiers: {
            rebuild: true
        },
        min: 0
    })
], SystemBlock.prototype, "preWarmCycles", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["editableInPropertyPage"])("Pre-warm step multiplier", 1 /* PropertyTypeForEdition.Float */ , "ADVANCED", {
        embedded: true,
        notifiers: {
            rebuild: true
        },
        min: 0
    })
], SystemBlock.prototype, "preWarmStepOffset", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["editableInPropertyPage"])("Is billboard based", 0 /* PropertyTypeForEdition.Boolean */ , "ADVANCED", {
        embedded: true,
        notifiers: {
            rebuild: true
        }
    })
], SystemBlock.prototype, "isBillboardBased", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["editableInPropertyPage"])("Is local", 0 /* PropertyTypeForEdition.Boolean */ , "ADVANCED", {
        embedded: true,
        notifiers: {
            rebuild: true
        }
    })
], SystemBlock.prototype, "isLocal", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["editableInPropertyPage"])("Dispose on stop", 0 /* PropertyTypeForEdition.Boolean */ , "ADVANCED", {
        embedded: true,
        notifiers: {
            rebuild: true
        }
    })
], SystemBlock.prototype, "disposeOnStop", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["editableInPropertyPage"])("Do no start", 0 /* PropertyTypeForEdition.Boolean */ , "ADVANCED", {
        embedded: true,
        notifiers: {
            rebuild: true
        }
    })
], SystemBlock.prototype, "doNoStart", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.SystemBlock", SystemBlock); //# sourceMappingURL=systemBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/particleInputBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ParticleInputBlock",
    ()=>ParticleInputBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/observable.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$nodeParticleBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/nodeParticleBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Enums/nodeParticleBlockConnectionPointTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.color.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleContextualSources$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Enums/nodeParticleContextualSources.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleSystemSources$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Enums/nodeParticleSystemSources.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
class ParticleInputBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$nodeParticleBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlock"] {
    /**
     * Gets or sets the connection point type (default is float)
     */ get type() {
        if (this._type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].AutoDetect) {
            if (this.value != null) {
                if (!isNaN(this.value)) {
                    this._type = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Float;
                    return this._type;
                }
                switch(this.value.getClassName()){
                    case "Vector2":
                        this._type = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Vector2;
                        return this._type;
                    case "Vector3":
                        this._type = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Vector3;
                        return this._type;
                    case "Color4":
                        this._type = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Color4;
                        return this._type;
                    case "Matrix":
                        this._type = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Matrix;
                        return this._type;
                }
            }
        }
        return this._type;
    }
    /**
     * Gets a boolean indicating that the current connection point is a system source
     */ get isSystemSource() {
        return this._contextualSource === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleContextualSources$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleContextualSources"].None && this._systemSource !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleSystemSources$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleSystemSources"].None;
    }
    /**
     * Gets or sets the system source used by this input block
     */ get systemSource() {
        return this._systemSource;
    }
    set systemSource(value) {
        this._systemSource = value;
        if (value !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleSystemSources$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleSystemSources"].None) {
            this._contextualSource = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleContextualSources$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleContextualSources"].None;
            this._type = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Float;
            switch(value){
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleSystemSources$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleSystemSources"].Time:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleSystemSources$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleSystemSources"].Delta:
                    this._type = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Float;
                    break;
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleSystemSources$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleSystemSources"].Emitter:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleSystemSources$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleSystemSources"].CameraPosition:
                    this._type = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Vector3;
                    break;
            }
            if (this.output) {
                this.output.type = this._type;
            }
        }
    }
    /**
     * Gets a boolean indicating that the current connection point is a contextual value
     */ get isContextual() {
        return this._contextualSource !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleContextualSources$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleContextualSources"].None;
    }
    /**
     * Gets or sets the current contextual value
     */ get contextualValue() {
        return this._contextualSource;
    }
    set contextualValue(value) {
        this._contextualSource = value;
        if (value !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleContextualSources$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleContextualSources"].None) {
            this._systemSource = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleSystemSources$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleSystemSources"].None;
            switch(value){
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleContextualSources$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleContextualSources"].Scale:
                    this._type = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Vector2;
                    break;
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleContextualSources$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleContextualSources"].Position:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleContextualSources$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleContextualSources"].Direction:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleContextualSources$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleContextualSources"].ScaledDirection:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleContextualSources$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleContextualSources"].InitialDirection:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleContextualSources$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleContextualSources"].LocalPositionUpdated:
                    this._type = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Vector3;
                    break;
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleContextualSources$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleContextualSources"].Color:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleContextualSources$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleContextualSources"].InitialColor:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleContextualSources$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleContextualSources"].ColorDead:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleContextualSources$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleContextualSources"].ColorStep:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleContextualSources$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleContextualSources"].ScaledColorStep:
                    this._type = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Color4;
                    break;
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleContextualSources$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleContextualSources"].Age:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleContextualSources$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleContextualSources"].Lifetime:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleContextualSources$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleContextualSources"].Angle:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleContextualSources$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleContextualSources"].AgeGradient:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleContextualSources$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleContextualSources"].Size:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleContextualSources$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleContextualSources"].DirectionScale:
                    this._type = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Float;
                    break;
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleContextualSources$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleContextualSources"].SpriteCellEnd:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleContextualSources$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleContextualSources"].SpriteCellStart:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleContextualSources$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleContextualSources"].SpriteCellIndex:
                    this._type = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Int;
                    break;
            }
            if (this.output) {
                this.output.type = this._type;
            }
        }
    }
    /**
     * Creates a new InputBlock
     * @param name defines the block name
     * @param type defines the type of the input (can be set to NodeParticleBlockConnectionPointTypes.AutoDetect)
     */ constructor(name, type = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].AutoDetect){
        super(name);
        this._type = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Undefined;
        /** Gets or set a value used to limit the range of float values */ this.min = 0;
        /** Gets or set a value used to limit the range of float values */ this.max = 0;
        /** Gets or sets the group to use to display this block in the Inspector */ this.groupInInspector = "";
        /**
         * Gets or sets a boolean indicating that this input is displayed in the Inspector
         */ this.displayInInspector = true;
        /** Gets an observable raised when the value is changed */ this.onValueChangedObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
        /** @internal */ this._systemSource = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleSystemSources$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleSystemSources"].None;
        this._contextualSource = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleContextualSources$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleContextualSources"].None;
        this._type = type;
        this._isInput = true;
        this._storedValue = null;
        this.setDefaultValue();
        this.registerOutput("output", type);
    }
    /**
     * Gets or sets the value of that point.
     * Please note that this value will be ignored if valueCallback is defined
     */ get value() {
        return this._storedValue;
    }
    set value(value) {
        if (this.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Float) {
            if (this.min !== this.max) {
                value = Math.max(this.min, value);
                value = Math.min(this.max, value);
            }
        }
        this._storedValue = value;
        this.onValueChangedObservable.notifyObservers(this);
    }
    /**
     * Gets or sets a callback used to get the value of that point.
     * Please note that setting this value will force the connection point to ignore the value property
     */ get valueCallback() {
        return this._valueCallback;
    }
    set valueCallback(value) {
        this._valueCallback = value;
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "ParticleInputBlock";
    }
    /**
     * Gets the output component
     */ get output() {
        return this._outputs[0];
    }
    /**
     * Set the input block to its default value (based on its type)
     */ setDefaultValue() {
        switch(this.type){
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Int:
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Float:
                this.value = 0;
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Vector2:
                this.value = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"].Zero();
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Vector3:
                this.value = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Zero();
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Color4:
                this.value = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color4"](1, 1, 1, 1);
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Matrix:
                this.value = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"].Identity();
                break;
        }
    }
    _build(state) {
        super._build(state);
        if (this.isSystemSource) {
            this.output._storedValue = null;
            this.output._storedFunction = (state)=>{
                return state.getSystemValue(this._systemSource);
            };
        } else if (this.isContextual) {
            this.output._storedValue = null;
            this.output._storedFunction = (state)=>{
                return state.getContextualValue(this._contextualSource);
            };
        } else {
            this.output._storedValue = this.value;
            // As a function to let the user dynamically change the value at runtime
            this.output._storedFunction = ()=>{
                return this.value;
            };
        }
    }
    dispose() {
        this.onValueChangedObservable.clear();
        super.dispose();
    }
    serialize() {
        const serializationObject = super.serialize();
        serializationObject.type = this.type;
        serializationObject.contextualValue = this.contextualValue;
        serializationObject.systemSource = this.systemSource;
        serializationObject.min = this.min;
        serializationObject.max = this.max;
        serializationObject.groupInInspector = this.groupInInspector;
        serializationObject.displayInInspector = this.displayInInspector;
        if (this._storedValue !== null && !this.isContextual && !this.isSystemSource) {
            if (this._storedValue.asArray) {
                serializationObject.valueType = "BABYLON." + this._storedValue.getClassName();
                serializationObject.value = this._storedValue.asArray();
            } else {
                serializationObject.valueType = "number";
                serializationObject.value = this._storedValue;
            }
        }
        return serializationObject;
    }
    _deserialize(serializationObject) {
        super._deserialize(serializationObject);
        this._type = serializationObject.type;
        this.contextualValue = serializationObject.contextualValue;
        this.systemSource = serializationObject.systemSource || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleSystemSources$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleSystemSources"].None;
        this.min = serializationObject.min || 0;
        this.max = serializationObject.max || 0;
        this.groupInInspector = serializationObject.groupInInspector || "";
        if (serializationObject.displayInInspector !== undefined) {
            this.displayInInspector = serializationObject.displayInInspector;
        }
        if (!serializationObject.valueType) {
            return;
        }
        if (serializationObject.valueType === "number") {
            this._storedValue = serializationObject.value;
        } else {
            const valueType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GetClass"])(serializationObject.valueType);
            if (valueType) {
                this._storedValue = valueType.FromArray(serializationObject.value);
            }
        }
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.ParticleInputBlock", ParticleInputBlock); //# sourceMappingURL=particleInputBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/particleSourceTextureBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ParticleTextureSourceBlock",
    ()=>ParticleTextureSourceBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/texture.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Enums/nodeParticleBlockConnectionPointTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$nodeParticleBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/nodeParticleBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$textureTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/textureTools.js [app-ssr] (ecmascript)");
;
;
;
;
;
class ParticleTextureSourceBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$nodeParticleBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlock"] {
    /**
     * Gets or sets the URL of the texture to be used by this block.
     */ get url() {
        return this._url;
    }
    set url(value) {
        if (this._url === value) {
            return;
        }
        this._cachedData = null;
        this._url = value;
        this._textureDataUrl = "";
        this._sourceTexture = null;
    }
    /**
     * Gets or sets the data URL of the texture to be used by this block.
     * This is a base64 encoded string representing the texture data.
     */ get textureDataUrl() {
        return this._textureDataUrl;
    }
    set textureDataUrl(value) {
        if (this._textureDataUrl === value) {
            return;
        }
        this._cachedData = null;
        this._textureDataUrl = value;
        this._url = "";
        this._sourceTexture = null;
    }
    /**
     * Directly sets the texture to be used by this block.
     * This value will not be serialized.
     */ set sourceTexture(value) {
        if (this._sourceTexture === value) {
            return;
        }
        this._cachedData = null;
        this._sourceTexture = value;
        this._url = value.url || "";
        this._textureDataUrl = "";
    }
    /**
     * Create a new ParticleTextureSourceBlock
     * @param name defines the block name
     */ constructor(name){
        super(name);
        this._url = "";
        this._textureDataUrl = "";
        this._sourceTexture = null;
        this._cachedData = null;
        /**
         * Indicates if the texture data should be serialized as a base64 string.
         */ this.serializedCachedData = false;
        this.registerOutput("texture", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Texture);
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "ParticleTextureSourceBlock";
    }
    /**
     * Gets the texture output component
     */ get texture() {
        return this._outputs[0];
    }
    /**
     * Gets the texture content as a promise
     * @returns a promise that resolves to the texture content, including width, height, and pixel data
     */ async extractTextureContentAsync() {
        if (!this.texture._storedValue && !this._sourceTexture) {
            return null;
        }
        if (this._cachedData) {
            return this._cachedData;
        }
        const texture = this.texture._storedValue || this._sourceTexture;
        return await new Promise((resolve, reject)=>{
            if (!texture.isReady()) {
                // eslint-disable-next-line @typescript-eslint/no-misused-promises
                texture.onLoadObservable.addOnce(async ()=>{
                    try {
                        this._cachedData = await this.extractTextureContentAsync();
                        resolve(this._cachedData);
                    } catch (e) {
                        // eslint-disable-next-line @typescript-eslint/prefer-promise-reject-errors
                        reject(e);
                    }
                });
                return;
            }
            const size = texture.getSize();
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$textureTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TextureTools"].GetTextureDataAsync(texture, size.width, size.height)// eslint-disable-next-line github/no-then
            .then((data)=>{
                this._cachedData = {
                    width: size.width,
                    height: size.height,
                    data: new Uint8ClampedArray(data)
                };
                texture.dispose();
                resolve(this._cachedData);
            })// eslint-disable-next-line github/no-then
            .catch(reject);
        });
    }
    /**
     * Builds the block
     * @param state defines the current build state
     */ _build(state) {
        if (this._sourceTexture) {
            this.texture._storedValue = this._sourceTexture;
            return;
        }
        if (!this._textureDataUrl && !this._url) {
            this.texture._storedValue = null;
            return;
        }
        if (this._textureDataUrl) {
            this.texture._storedValue = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Texture"](this._textureDataUrl, state.scene);
            return;
        }
        this.texture._storedValue = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Texture"](this._url, state.scene);
    }
    serialize() {
        const serializationObject = super.serialize();
        serializationObject.url = this.url;
        serializationObject.serializedCachedData = this.serializedCachedData;
        if (this.serializedCachedData) {
            serializationObject.textureDataUrl = this.textureDataUrl;
        }
        return serializationObject;
    }
    _deserialize(serializationObject) {
        super._deserialize(serializationObject);
        this.url = serializationObject.url;
        this.serializedCachedData = !!serializationObject.serializedCachedData;
        if (serializationObject.textureDataUrl) {
            this.textureDataUrl = serializationObject.textureDataUrl;
        }
    }
    dispose() {
        if (!this._sourceTexture) {
            if (this.texture._storedValue) {
                this.texture._storedValue.dispose();
                this.texture._storedValue = null;
            }
        }
        super.dispose();
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.ParticleTextureSourceBlock", ParticleTextureSourceBlock); //# sourceMappingURL=particleSourceTextureBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Update/updatePositionBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UpdatePositionBlock",
    ()=>UpdatePositionBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Enums/nodeParticleBlockConnectionPointTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$nodeParticleBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/nodeParticleBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Queue$2f$executionQueue$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Queue/executionQueue.js [app-ssr] (ecmascript)");
;
;
;
;
class UpdatePositionBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$nodeParticleBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlock"] {
    /**
     * Create a new UpdateDirectionBlock
     * @param name defines the block name
     */ constructor(name){
        super(name);
        this.registerInput("particle", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Particle);
        this.registerInput("position", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Vector3);
        this.registerOutput("output", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Particle);
    }
    /**
     * Gets the particle component
     */ get particle() {
        return this._inputs[0];
    }
    /**
     * Gets the position input component
     */ get position() {
        return this._inputs[1];
    }
    /**
     * Gets the output component
     */ get output() {
        return this._outputs[0];
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "UpdatePositionBlock";
    }
    /**
     * Builds the block
     * @param state defines the current build state
     */ _build(state) {
        const system = this.particle.getConnectedValue(state);
        this.output._storedValue = system;
        if (!this.position.isConnected) {
            return;
        }
        const processPosition = (particle)=>{
            state.particleContext = particle;
            state.systemContext = system;
            particle.position.copyFrom(this.position.getConnectedValue(state));
        };
        const positionProcessing = {
            process: processPosition,
            previousItem: null,
            nextItem: null
        };
        if (system._updateQueueStart) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Queue$2f$executionQueue$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_ConnectAtTheEnd"])(positionProcessing, system._updateQueueStart);
        } else {
            system._updateQueueStart = positionProcessing;
        }
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.UpdatePositionBlock", UpdatePositionBlock); //# sourceMappingURL=updatePositionBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/particleMathBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ParticleMathBlock",
    ()=>ParticleMathBlock,
    "ParticleMathBlockOperations",
    ()=>ParticleMathBlockOperations
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/tslib.es6.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Decorators/nodeDecorator.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$nodeParticleBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/nodeParticleBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Enums/nodeParticleBlockConnectionPointTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.color.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
var ParticleMathBlockOperations;
(function(ParticleMathBlockOperations) {
    /** Add */ ParticleMathBlockOperations[ParticleMathBlockOperations["Add"] = 0] = "Add";
    /** Subtract */ ParticleMathBlockOperations[ParticleMathBlockOperations["Subtract"] = 1] = "Subtract";
    /** Multiply */ ParticleMathBlockOperations[ParticleMathBlockOperations["Multiply"] = 2] = "Multiply";
    /** Divide */ ParticleMathBlockOperations[ParticleMathBlockOperations["Divide"] = 3] = "Divide";
    /** Max */ ParticleMathBlockOperations[ParticleMathBlockOperations["Max"] = 4] = "Max";
    /** Min */ ParticleMathBlockOperations[ParticleMathBlockOperations["Min"] = 5] = "Min";
})(ParticleMathBlockOperations || (ParticleMathBlockOperations = {}));
class ParticleMathBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$nodeParticleBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlock"] {
    /**
     * Create a new ParticleMathBlock
     * @param name defines the block name
     */ constructor(name){
        super(name);
        /**
         * Gets or sets the operation applied by the block
         */ this.operation = ParticleMathBlockOperations.Add;
        this.registerInput("left", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].AutoDetect);
        this.registerInput("right", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].AutoDetect);
        this.registerOutput("output", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].BasedOnInput);
        this.output._typeConnectionSource = this.left;
        const excludedConnectionPointTypes = [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Matrix,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Particle,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Texture,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].System,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].FloatGradient,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Color4Gradient,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Vector2Gradient,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Vector3Gradient
        ];
        this.left.excludedConnectionPointTypes.push(...excludedConnectionPointTypes);
        this.right.excludedConnectionPointTypes.push(...excludedConnectionPointTypes);
        this._linkConnectionTypes(0, 1);
        this._connectionObservers = [
            this.left.onConnectionObservable.add(()=>this._updateInputOutputTypes()),
            this.left.onDisconnectionObservable.add(()=>this._updateInputOutputTypes()),
            this.right.onConnectionObservable.add(()=>this._updateInputOutputTypes()),
            this.right.onDisconnectionObservable.add(()=>this._updateInputOutputTypes())
        ];
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "ParticleMathBlock";
    }
    /**
     * Gets the left input component
     */ get left() {
        return this._inputs[0];
    }
    /**
     * Gets the right input component
     */ get right() {
        return this._inputs[1];
    }
    /**
     * Gets the geometry output component
     */ get output() {
        return this._outputs[0];
    }
    _build(state) {
        let func;
        const left = this.left;
        const right = this.right;
        if (!left.isConnected || !right.isConnected) {
            this.output._storedFunction = null;
            this.output._storedValue = null;
            return;
        }
        const leftIsScalar = left.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Float || left.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Int;
        const rightIsScalar = right.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Float || right.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Int;
        // If both input types are scalars, then this is a scalar operation.
        const isScalar = leftIsScalar && rightIsScalar;
        switch(this.operation){
            case ParticleMathBlockOperations.Add:
                {
                    if (isScalar) {
                        func = (state)=>{
                            return left.getConnectedValue(state) + right.getConnectedValue(state);
                        };
                    } else if (leftIsScalar) {
                        func = (state)=>{
                            return state.adapt(left, right.type).add(right.getConnectedValue(state));
                        };
                    } else {
                        func = (state)=>{
                            return left.getConnectedValue(state).add(state.adapt(right, left.type));
                        };
                    }
                    break;
                }
            case ParticleMathBlockOperations.Subtract:
                {
                    if (isScalar) {
                        func = (state)=>{
                            return left.getConnectedValue(state) - right.getConnectedValue(state);
                        };
                    } else if (leftIsScalar) {
                        func = (state)=>{
                            return state.adapt(left, right.type).subtract(right.getConnectedValue(state));
                        };
                    } else {
                        func = (state)=>{
                            return left.getConnectedValue(state).subtract(state.adapt(right, left.type));
                        };
                    }
                    break;
                }
            case ParticleMathBlockOperations.Multiply:
                {
                    if (isScalar) {
                        func = (state)=>{
                            return left.getConnectedValue(state) * right.getConnectedValue(state);
                        };
                    } else if (leftIsScalar) {
                        func = (state)=>{
                            return state.adapt(left, right.type).multiply(right.getConnectedValue(state));
                        };
                    } else {
                        func = (state)=>{
                            return left.getConnectedValue(state).multiply(state.adapt(right, left.type));
                        };
                    }
                    break;
                }
            case ParticleMathBlockOperations.Divide:
                {
                    if (isScalar) {
                        func = (state)=>{
                            return left.getConnectedValue(state) / right.getConnectedValue(state);
                        };
                    } else if (leftIsScalar) {
                        func = (state)=>{
                            return state.adapt(left, right.type).divide(right.getConnectedValue(state));
                        };
                    } else {
                        func = (state)=>{
                            return left.getConnectedValue(state).divide(state.adapt(right, left.type));
                        };
                    }
                    break;
                }
            case ParticleMathBlockOperations.Min:
                {
                    if (isScalar) {
                        func = (state)=>{
                            return Math.min(left.getConnectedValue(state), right.getConnectedValue(state));
                        };
                    } else {
                        const [vector, scalar] = leftIsScalar ? [
                            right,
                            left
                        ] : [
                            left,
                            right
                        ];
                        switch(vector.type){
                            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Vector2:
                                {
                                    func = (state)=>{
                                        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"].Minimize(vector.getConnectedValue(state), state.adapt(scalar, vector.type));
                                    };
                                    break;
                                }
                            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Vector3:
                                {
                                    func = (state)=>{
                                        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Minimize(vector.getConnectedValue(state), state.adapt(scalar, vector.type));
                                    };
                                    break;
                                }
                            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Color4:
                                {
                                    func = (state)=>{
                                        const other = vector.getConnectedValue(state);
                                        const { r, g, b, a } = state.adapt(scalar, vector.type);
                                        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color4"](Math.min(other.r, r), Math.min(other.g, g), Math.min(other.b, b), Math.min(other.a, a));
                                    };
                                    break;
                                }
                        }
                    }
                    break;
                }
            case ParticleMathBlockOperations.Max:
                {
                    if (isScalar) {
                        func = (state)=>{
                            return Math.max(left.getConnectedValue(state), right.getConnectedValue(state));
                        };
                    } else {
                        const [vector, scalar] = leftIsScalar ? [
                            right,
                            left
                        ] : [
                            left,
                            right
                        ];
                        switch(vector.type){
                            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Vector2:
                                {
                                    func = (state)=>{
                                        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"].Maximize(vector.getConnectedValue(state), state.adapt(scalar, vector.type));
                                    };
                                    break;
                                }
                            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Vector3:
                                {
                                    func = (state)=>{
                                        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Maximize(vector.getConnectedValue(state), state.adapt(scalar, vector.type));
                                    };
                                    break;
                                }
                            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Color4:
                                {
                                    func = (state)=>{
                                        const other = vector.getConnectedValue(state);
                                        const { r, g, b, a } = state.adapt(scalar, vector.type);
                                        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color4"](Math.max(other.r, r), Math.min(other.g, g), Math.min(other.b, b), Math.min(other.a, a));
                                    };
                                    break;
                                }
                        }
                        break;
                    }
                }
        }
        this.output._storedFunction = (state)=>{
            if (left.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Int) {
                return func(state) | 0;
            }
            return func(state);
        };
    }
    _updateInputOutputTypes() {
        // First update the output type with the initial assumption that we'll base it on the left input.
        this.output._typeConnectionSource = this.left;
        if (this.left.isConnected && this.right.isConnected) {
            // Both inputs are connected, so we need to determine the output type based on the input types.
            if (this.left.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Int || this.left.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Float && this.right.type !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Int) {
                this.output._typeConnectionSource = this.right;
            }
        } else if (this.left.isConnected !== this.right.isConnected) {
            // Only one input is connected, so we need to determine the output type based on the connected input.
            this.output._typeConnectionSource = this.left.isConnected ? this.left : this.right;
        }
        // Next update the accepted connection point types for the inputs based on the current input connection state.
        if (this.left.isConnected || this.right.isConnected) {
            for (const [first, second] of [
                [
                    this.left,
                    this.right
                ],
                [
                    this.right,
                    this.left
                ]
            ]){
                // Always allow Ints and Floats.
                first.acceptedConnectionPointTypes = [
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Int,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Float
                ];
                if (second.isConnected) {
                    // The same types as the connected input are always allowed.
                    first.acceptedConnectionPointTypes.push(second.type);
                    // If the other input is a scalar, then we also allow Vector types.
                    if (second.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Int || second.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Float) {
                        first.acceptedConnectionPointTypes.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Vector2, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Vector3, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Color4);
                    }
                }
            }
        }
    }
    /**
     * Release resources
     */ dispose() {
        super.dispose();
        for (const observer of this._connectionObservers){
            observer.remove();
        }
        this._connectionObservers.length = 0;
    }
    /**
     * Serializes this block in a JSON representation
     * @returns the serialized block object
     */ serialize() {
        const serializationObject = super.serialize();
        serializationObject.operation = this.operation;
        return serializationObject;
    }
    _deserialize(serializationObject) {
        super._deserialize(serializationObject);
        this.operation = serializationObject.operation;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["editableInPropertyPage"])("Operation", 5 /* PropertyTypeForEdition.List */ , "ADVANCED", {
        notifiers: {
            rebuild: true
        },
        embedded: true,
        options: [
            {
                label: "Add",
                value: ParticleMathBlockOperations.Add
            },
            {
                label: "Subtract",
                value: ParticleMathBlockOperations.Subtract
            },
            {
                label: "Multiply",
                value: ParticleMathBlockOperations.Multiply
            },
            {
                label: "Divide",
                value: ParticleMathBlockOperations.Divide
            },
            {
                label: "Max",
                value: ParticleMathBlockOperations.Max
            },
            {
                label: "Min",
                value: ParticleMathBlockOperations.Min
            }
        ]
    })
], ParticleMathBlock.prototype, "operation", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.ParticleMathBlock", ParticleMathBlock); //# sourceMappingURL=particleMathBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Emitters/emitters.functions.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Creates the local position data for the particle
 * @param particle The particle to update
 */ __turbopack_context__.s([
    "_CreateLocalPositionData",
    ()=>_CreateLocalPositionData
]);
function _CreateLocalPositionData(particle) {
    if (!particle._localPosition) {
        particle._localPosition = particle.position.clone();
    } else {
        particle._localPosition.copyFrom(particle.position);
    }
} //# sourceMappingURL=emitters.functions.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Emitters/boxShapeBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BoxShapeBlock",
    ()=>BoxShapeBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Enums/nodeParticleBlockConnectionPointTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$nodeParticleBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/nodeParticleBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.scalar.functions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Emitters$2f$emitters$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Emitters/emitters.functions.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
class BoxShapeBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$nodeParticleBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlock"] {
    /**
     * Create a new BoxShapeBlock
     * @param name defines the block name
     */ constructor(name){
        super(name);
        this.registerInput("particle", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Particle);
        this.registerInput("direction1", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Vector3, true, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](0, 1.0, 0));
        this.registerInput("direction2", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Vector3, true, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](0, 1.0, 0));
        this.registerInput("minEmitBox", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Vector3, true, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](-0.5, -0.5, -0.5));
        this.registerInput("maxEmitBox", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Vector3, true, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](0.5, 0.5, 0.5));
        this.registerOutput("output", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Particle);
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "BoxShapeBlock";
    }
    /**
     * Gets the particle input component
     */ get particle() {
        return this._inputs[0];
    }
    /**
     * Gets the direction1 input component
     */ get direction1() {
        return this._inputs[1];
    }
    /**
     * Gets the direction2 input component
     */ get direction2() {
        return this._inputs[2];
    }
    /**
     * Gets the minEmitBox input component
     */ get minEmitBox() {
        return this._inputs[3];
    }
    /**
     * Gets the maxEmitBox input component
     */ get maxEmitBox() {
        return this._inputs[4];
    }
    /**
     * Gets the output component
     */ get output() {
        return this._outputs[0];
    }
    /**
     * Builds the block
     * @param state defines the build state
     */ _build(state) {
        const system = this.particle.getConnectedValue(state);
        system._directionCreation.process = (particle)=>{
            state.particleContext = particle;
            state.systemContext = system;
            const direction1 = this.direction1.getConnectedValue(state);
            const direction2 = this.direction2.getConnectedValue(state);
            const randX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RandomRange"])(direction1.x, direction2.x);
            const randY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RandomRange"])(direction1.y, direction2.y);
            const randZ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RandomRange"])(direction1.z, direction2.z);
            if (system.isLocal) {
                particle.direction.copyFromFloats(randX, randY, randZ);
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].TransformNormalFromFloatsToRef(randX, randY, randZ, state.emitterWorldMatrix, particle.direction);
            }
            particle._initialDirection = particle.direction.clone();
        };
        system._positionCreation.process = (particle)=>{
            state.particleContext = particle;
            state.systemContext = system;
            const minEmitBox = this.minEmitBox.getConnectedValue(state);
            const maxEmitBox = this.maxEmitBox.getConnectedValue(state);
            const randX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RandomRange"])(minEmitBox.x, maxEmitBox.x);
            const randY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RandomRange"])(minEmitBox.y, maxEmitBox.y);
            const randZ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RandomRange"])(minEmitBox.z, maxEmitBox.z);
            if (system.isLocal) {
                particle.position.copyFromFloats(randX, randY, randZ);
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinatesFromFloatsToRef(randX, randY, randZ, state.emitterWorldMatrix, particle.position);
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Emitters$2f$emitters$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_CreateLocalPositionData"])(particle);
        };
        this.output._storedValue = system;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.BoxShapeBlock", BoxShapeBlock); //# sourceMappingURL=boxShapeBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Emitters/createParticleBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CreateParticleBlock",
    ()=>CreateParticleBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Enums/nodeParticleBlockConnectionPointTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$nodeParticleBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/nodeParticleBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$particleSystem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/particleSystem.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.color.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$EmitterTypes$2f$pointParticleEmitter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/EmitterTypes/pointParticleEmitter.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
const ColorDiff = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color4"]();
class CreateParticleBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$nodeParticleBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlock"] {
    /**
     * Create a new CreateParticleBlock
     * @param name defines the block name
     */ constructor(name){
        super(name);
        this.registerInput("emitPower", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Float, true, 1);
        this.registerInput("lifeTime", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Float, true, 1);
        this.registerInput("color", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Color4, true, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color4"](1, 1, 1, 1));
        this.registerInput("colorDead", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Color4, true, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color4"](0, 0, 0, 0));
        this.registerInput("scale", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Vector2, true, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"](1, 1));
        this.registerInput("angle", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Float, true, 0);
        this.registerInput("size", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Float, true, 1);
        this.registerOutput("particle", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Particle);
        this.scale.acceptedConnectionPointTypes.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Float);
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "CreateParticleBlock";
    }
    /**
     * Gets the emitPower input component
     */ get emitPower() {
        return this._inputs[0];
    }
    /**
     * Gets the lifeTime input component
     */ get lifeTime() {
        return this._inputs[1];
    }
    /**
     * Gets the color input component
     */ get color() {
        return this._inputs[2];
    }
    /**
     * Gets the color dead input component
     */ get colorDead() {
        return this._inputs[3];
    }
    /**
     * Gets the scale input component
     */ get scale() {
        return this._inputs[4];
    }
    /**
     * Gets the angle input component
     */ get angle() {
        return this._inputs[5];
    }
    /**
     * Gets the size component
     */ get size() {
        return this._inputs[6];
    }
    /**
     * Gets the particle output component
     */ get particle() {
        return this._outputs[0];
    }
    /**
     * @internal
     */ _build(state) {
        const system = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$particleSystem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleSystem"](this.name, state.capacity, state.scene, null, false, undefined, true);
        system.particleEmitterType = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$EmitterTypes$2f$pointParticleEmitter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PointParticleEmitter"]();
        // Creation
        system._lifeTimeCreation.process = (particle, system)=>{
            state.particleContext = particle;
            particle.lifeTime = this.lifeTime.getConnectedValue(state);
            system._emitPower = this.emitPower.getConnectedValue(state);
        };
        system._colorCreation.process = (particle)=>{
            state.particleContext = particle;
            const color = this.color.getConnectedValue(state);
            if (color !== undefined) {
                particle.color.copyFrom(color);
            }
        };
        system._colorDeadCreation.process = (particle)=>{
            state.particleContext = particle;
            particle.colorDead.copyFrom(this.colorDead.getConnectedValue(state));
            particle.initialColor.copyFrom(particle.color);
            particle.colorDead.subtractToRef(particle.initialColor, ColorDiff);
            ColorDiff.scaleToRef(1.0 / particle.lifeTime, particle.colorStep);
        };
        system._sizeCreation.process = (particle)=>{
            state.particleContext = particle;
            const size = this.size.getConnectedValue(state);
            if (size !== undefined) {
                particle.size = size;
            } else {
                particle.size = 1.0;
            }
            const scale = this.scale.getConnectedValue(state);
            if (scale.x !== undefined) {
                particle.scale.x = scale.x;
                particle.scale.y = scale.y;
            } else {
                particle.scale.x = scale;
                particle.scale.y = scale;
            }
        };
        system._angleCreation.process = (particle)=>{
            state.particleContext = particle;
            particle.angle = this.angle.getConnectedValue(state);
        };
        this.particle._storedValue = system;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.CreateParticleBlock", CreateParticleBlock); //# sourceMappingURL=createParticleBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/nodeParticleSystemSet.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NodeParticleSystemSet",
    ()=>NodeParticleSystemSet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/tslib.es6.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/decorators.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$particleSystemSet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/particleSystemSet.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$systemBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/systemBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$nodeParticleBuildState$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/nodeParticleBuildState.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/decorators.serialization.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/observable.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$webRequest$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/webRequest.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/tools.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/abstractEngine.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleInputBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/particleInputBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleSourceTextureBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/particleSourceTextureBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleContextualSources$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Enums/nodeParticleContextualSources.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Update$2f$updatePositionBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Update/updatePositionBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleMathBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/particleMathBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Emitters$2f$boxShapeBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Emitters/boxShapeBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Emitters$2f$createParticleBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Emitters/createParticleBlock.js [app-ssr] (ecmascript)");
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
class NodeParticleSystemSet {
    /**
     * Gets the system blocks
     */ get systemBlocks() {
        return this._systemBlocks;
    }
    /**
     * Gets the list of input blocks attached to this material
     * @returns an array of InputBlocks
     */ get inputBlocks() {
        const blocks = [];
        for (const block of this.attachedBlocks){
            if (block.isInput) {
                blocks.push(block);
            }
        }
        return blocks;
    }
    /**
     * Get a block by its name
     * @param name defines the name of the block to retrieve
     * @returns the required block or null if not found
     */ getBlockByName(name) {
        let result = null;
        for (const block of this.attachedBlocks){
            if (block.name === name) {
                if (!result) {
                    result = block;
                } else {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tools"].Warn("More than one block was found with the name `" + name + "`");
                    return result;
                }
            }
        }
        return result;
    }
    /**
     * Get a block using a predicate
     * @param predicate defines the predicate used to find the good candidate
     * @returns the required block or null if not found
     */ getBlockByPredicate(predicate) {
        for (const block of this.attachedBlocks){
            if (predicate(block)) {
                return block;
            }
        }
        return null;
    }
    /**
     * Get an input block using a predicate
     * @param predicate defines the predicate used to find the good candidate
     * @returns the required input block or null if not found
     */ getInputBlockByPredicate(predicate) {
        for (const block of this.attachedBlocks){
            if (block.isInput && predicate(block)) {
                return block;
            }
        }
        return null;
    }
    /**
     * Creates a new set
     * @param name defines the name of the set
     */ constructor(name){
        this._systemBlocks = [];
        this._buildId = 0;
        /**
         * Gets an array of blocks that needs to be serialized even if they are not yet connected
         */ this.attachedBlocks = [];
        /**
         * Gets or sets data used by visual editor
         * @see https://npe.babylonjs.com
         */ this.editorData = null;
        /**
         * Observable raised when the particle set is built
         */ this.onBuildObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
        this.BJSNODEPARTICLEEDITOR = this._getGlobalNodeParticleEditor();
        this.name = name;
    }
    /**
     * Gets the current class name of the node particle set e.g. "NodeParticleSystemSet"
     * @returns the class name
     */ getClassName() {
        return "NodeParticleSystemSet";
    }
    _initializeBlock(node, autoConfigure = true) {
        if (this.attachedBlocks.indexOf(node) === -1) {
            this.attachedBlocks.push(node);
        }
        for (const input of node.inputs){
            const connectedPoint = input.connectedPoint;
            if (connectedPoint) {
                const block = connectedPoint.ownerBlock;
                if (block !== node) {
                    this._initializeBlock(block, autoConfigure);
                }
            }
        }
    }
    /** Get the editor from bundle or global
     * @returns the global NPE
     */ _getGlobalNodeParticleEditor() {
        // UMD Global name detection from Webpack Bundle UMD Name.
        if (typeof NODEPARTICLEEDITOR !== "undefined") {
            return NODEPARTICLEEDITOR;
        }
        // In case of module let's check the global emitted from the editor entry point.
        if (typeof BABYLON !== "undefined" && typeof BABYLON.NodeParticleEditor !== "undefined") {
            return BABYLON;
        }
        return undefined;
    }
    /** Creates the node editor window.
     * @param additionalConfig Define the configuration of the editor
     */ _createNodeParticleEditor(additionalConfig) {
        const nodeEditorConfig = {
            nodeParticleSet: this,
            ...additionalConfig
        };
        this.BJSNODEPARTICLEEDITOR.NodeParticleEditor.Show(nodeEditorConfig);
    }
    /**
     * Launch the node particle editor
     * @param config Define the configuration of the editor
     * @returns a promise fulfilled when the node editor is visible
     */ async editAsync(config) {
        return await new Promise((resolve)=>{
            this.BJSNODEPARTICLEEDITOR = this.BJSNODEPARTICLEEDITOR || this._getGlobalNodeParticleEditor();
            if (typeof this.BJSNODEPARTICLEEDITOR == "undefined") {
                const editorUrl = config && config.editorURL ? config.editorURL : NodeParticleSystemSet.EditorURL;
                // Load editor and add it to the DOM
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tools"].LoadBabylonScript(editorUrl, ()=>{
                    this.BJSNODEPARTICLEEDITOR = this.BJSNODEPARTICLEEDITOR || this._getGlobalNodeParticleEditor();
                    this._createNodeParticleEditor(config?.nodeEditorConfig);
                    resolve();
                });
            } else {
                // Otherwise creates the editor
                this._createNodeParticleEditor(config?.nodeEditorConfig);
                resolve();
            }
        });
    }
    /**
     * Builds the particle system set from the defined blocks.
     * @param scene defines the hosting scene
     * @param verbose defines whether to log detailed information during the build process (false by default)
     * @returns a promise that resolves to the built particle system set
     */ async buildAsync(scene, verbose = false) {
        return await new Promise((resolve)=>{
            const output = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$particleSystemSet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleSystemSet"]();
            // Initialize all blocks
            for (const block of this._systemBlocks){
                this._initializeBlock(block);
            }
            // Build the blocks
            for (const block of this.systemBlocks){
                const state = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$nodeParticleBuildState$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBuildState"]();
                state.buildId = this._buildId++;
                state.scene = scene;
                state.verbose = verbose;
                const system = block.createSystem(state);
                system._source = this;
                system._blockReference = block._internalId;
                // Errors
                state.emitErrors();
                output.systems.push(system);
            }
            this.onBuildObservable.notifyObservers(this);
            resolve(output);
        });
    }
    /**
     * Clear the current node particle set
     */ clear() {
        this.attachedBlocks.length = 0;
        this._systemBlocks.length = 0;
    }
    /**
     * Clear the current set and restore it to a default state
     */ setToDefault() {
        this.clear();
        this.editorData = null;
        // Main system
        const system = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$systemBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SystemBlock"]("Particle system");
        // Update position
        const updatePositionBlock = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Update$2f$updatePositionBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UpdatePositionBlock"]("Update position");
        updatePositionBlock.output.connectTo(system.particle);
        // Contextual inputs
        const positionBlock = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleInputBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleInputBlock"]("Position");
        positionBlock.contextualValue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleContextualSources$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleContextualSources"].Position;
        const directionBlock = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleInputBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleInputBlock"]("Scaled direction");
        directionBlock.contextualValue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleContextualSources$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleContextualSources"].ScaledDirection;
        // Add
        const addBlock = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleMathBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleMathBlock"]("Add");
        addBlock.operation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleMathBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleMathBlockOperations"].Add;
        positionBlock.output.connectTo(addBlock.left);
        directionBlock.output.connectTo(addBlock.right);
        addBlock.output.connectTo(updatePositionBlock.position);
        // Create particle
        const createParticleBlock = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Emitters$2f$createParticleBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreateParticleBlock"]("Create particle");
        // Shape
        const emitterShape = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Emitters$2f$boxShapeBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BoxShapeBlock"]("Box shape");
        createParticleBlock.particle.connectTo(emitterShape.particle);
        emitterShape.output.connectTo(updatePositionBlock.particle);
        // Texture
        const textureBlock = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleSourceTextureBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleTextureSourceBlock"]("Texture");
        textureBlock.texture.connectTo(system.texture);
        textureBlock.url = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tools"].GetAssetUrl("https://assets.babylonjs.com/core/textures/flare.png");
        this._systemBlocks.push(system);
    }
    /**
     * Remove a block from the current system set
     * @param block defines the block to remove
     */ removeBlock(block) {
        const attachedBlockIndex = this.attachedBlocks.indexOf(block);
        if (attachedBlockIndex > -1) {
            this.attachedBlocks.splice(attachedBlockIndex, 1);
        }
        if (block.isSystem) {
            const index = this._systemBlocks.indexOf(block);
            if (index > -1) {
                this._systemBlocks.splice(index, 1);
            }
        }
    }
    /**
     * Clear the current graph and load a new one from a serialization object
     * @param source defines the JSON representation of the particle set
     * @param merge defines whether or not the source must be merged or replace the current content
     */ parseSerializedObject(source, merge = false) {
        if (!merge) {
            this.clear();
        }
        const map = {};
        // Create blocks
        for (const parsedBlock of source.blocks){
            const blockType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GetClass"])(parsedBlock.customType);
            if (blockType) {
                const block = new blockType();
                block._deserialize(parsedBlock);
                map[parsedBlock.id] = block;
                this.attachedBlocks.push(block);
                if (block.isSystem) {
                    this._systemBlocks.push(block);
                }
            }
        }
        // Reconnect teleportation
        for (const block of this.attachedBlocks){
            if (block.isTeleportOut) {
                const teleportOut = block;
                const id = teleportOut._tempEntryPointUniqueId;
                if (id) {
                    const source = map[id];
                    if (source) {
                        source.attachToEndpoint(teleportOut);
                    }
                }
            }
        }
        // Connections - Starts with input blocks only (except if in "merge" mode where we scan all blocks)
        for(let blockIndex = 0; blockIndex < source.blocks.length; blockIndex++){
            const parsedBlock = source.blocks[blockIndex];
            const block = map[parsedBlock.id];
            if (!block) {
                continue;
            }
            if (block.inputs.length && parsedBlock.inputs.some((i)=>i.targetConnectionName) && !merge) {
                continue;
            }
            this._restoreConnections(block, source, map);
        }
        // UI related info
        if (source.locations || source.editorData && source.editorData.locations) {
            const locations = source.locations || source.editorData.locations;
            for (const location of locations){
                if (map[location.blockId]) {
                    location.blockId = map[location.blockId].uniqueId;
                }
            }
            if (merge && this.editorData && this.editorData.locations) {
                locations.concat(this.editorData.locations);
            }
            if (source.locations) {
                this.editorData = {
                    locations: locations
                };
            } else {
                this.editorData = source.editorData;
                this.editorData.locations = locations;
            }
            const blockMap = {};
            for(const key in map){
                blockMap[key] = map[key].uniqueId;
            }
            this.editorData.map = blockMap;
        }
        this.comment = source.comment;
    }
    _restoreConnections(block, source, map) {
        for (const outputPoint of block.outputs){
            for (const candidate of source.blocks){
                const target = map[candidate.id];
                if (!target) {
                    continue;
                }
                for (const input of candidate.inputs){
                    if (map[input.targetBlockId] === block && input.targetConnectionName === outputPoint.name) {
                        const inputPoint = target.getInputByName(input.inputName);
                        if (!inputPoint || inputPoint.isConnected) {
                            continue;
                        }
                        outputPoint.connectTo(inputPoint, true);
                        this._restoreConnections(target, source, map);
                        continue;
                    }
                }
            }
        }
    }
    /**
     * Serializes this node particle set in a JSON representation
     * @param selectedBlocks defines the list of blocks to save (if null the whole node particle set will be saved)
     * @returns the serialized particle system set object
     */ serialize(selectedBlocks) {
        const serializationObject = selectedBlocks ? {} : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SerializationHelper"].Serialize(this);
        serializationObject.editorData = JSON.parse(JSON.stringify(this.editorData)); // Copy
        let blocks = [];
        if (selectedBlocks) {
            blocks = selectedBlocks;
        } else {
            serializationObject.customType = "BABYLON.NodeParticleSystemSet";
        }
        // Blocks
        serializationObject.blocks = [];
        for (const block of blocks){
            serializationObject.blocks.push(block.serialize());
        }
        if (!selectedBlocks) {
            for (const block of this.attachedBlocks){
                if (blocks.indexOf(block) !== -1) {
                    continue;
                }
                serializationObject.blocks.push(block.serialize());
            }
        }
        return serializationObject;
    }
    /**
     * Makes a duplicate of the current particle system set.
     * @param name defines the name to use for the new particle system set
     * @returns the cloned particle system set
     */ clone(name) {
        const serializationObject = this.serialize();
        const clone = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SerializationHelper"].Clone(()=>new NodeParticleSystemSet(name), this);
        clone.name = name;
        clone.snippetId = this.snippetId;
        clone.parseSerializedObject(serializationObject);
        clone._buildId = this._buildId;
        return clone;
    }
    /**
     * Disposes the resources
     */ dispose() {
        for (const block of this.attachedBlocks){
            block.dispose();
        }
        this.attachedBlocks.length = 0;
        this.onBuildObservable.clear();
    }
    /**
     * Creates a new node particle set set to default basic configuration
     * @param name defines the name of the particle set
     * @returns a new NodeParticleSystemSet
     */ static CreateDefault(name) {
        const nodeParticleSet = new NodeParticleSystemSet(name);
        nodeParticleSet.setToDefault();
        return nodeParticleSet;
    }
    /**
     * Creates a node particle set from parsed data
     * @param source defines the JSON representation of the particle set
     * @returns a new node particle set
     */ static Parse(source) {
        const nodeParticleSet = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SerializationHelper"].Parse(()=>new NodeParticleSystemSet(source.name), source, null);
        nodeParticleSet.parseSerializedObject(source);
        return nodeParticleSet;
    }
    /**
     * Creates a node particle set from a snippet saved in a remote file
     * @param name defines the name of the node particle set to create
     * @param url defines the url to load from
     * @param nodeParticleSet defines a node particle set to update (instead of creating a new one)
     * @returns a promise that will resolve to the new node particle set
     */ // eslint-disable-next-line @typescript-eslint/promise-function-async, no-restricted-syntax
    static ParseFromFileAsync(name, url, nodeParticleSet) {
        return new Promise((resolve, reject)=>{
            const request = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$webRequest$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebRequest"]();
            request.addEventListener("readystatechange", ()=>{
                if (request.readyState == 4) {
                    if (request.status == 200) {
                        const serializationObject = JSON.parse(request.responseText);
                        if (!nodeParticleSet) {
                            nodeParticleSet = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SerializationHelper"].Parse(()=>new NodeParticleSystemSet(name), serializationObject, null);
                        }
                        nodeParticleSet.parseSerializedObject(serializationObject);
                        resolve(nodeParticleSet);
                    } else {
                        // eslint-disable-next-line @typescript-eslint/prefer-promise-reject-errors
                        reject("Unable to load the node particle system set");
                    }
                }
            });
            request.open("GET", url);
            request.send();
        });
    }
    /**
     * Creates a node particle set from a snippet saved by the node particle editor
     * @param snippetId defines the snippet to load
     * @param nodeParticleSet defines a node particle set to update (instead of creating a new one)
     * @returns a promise that will resolve to the new node particle set
     */ // eslint-disable-next-line @typescript-eslint/promise-function-async, no-restricted-syntax
    static ParseFromSnippetAsync(snippetId, nodeParticleSet) {
        if (snippetId === "_BLANK") {
            return Promise.resolve(NodeParticleSystemSet.CreateDefault("blank"));
        }
        return new Promise((resolve, reject)=>{
            const request = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$webRequest$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebRequest"]();
            request.addEventListener("readystatechange", ()=>{
                if (request.readyState == 4) {
                    if (request.status == 200) {
                        const snippet = JSON.parse(JSON.parse(request.responseText).jsonPayload);
                        const serializationObject = JSON.parse(snippet.nodeParticle);
                        if (!nodeParticleSet) {
                            nodeParticleSet = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SerializationHelper"].Parse(()=>new NodeParticleSystemSet(snippetId), serializationObject, null);
                        }
                        nodeParticleSet.parseSerializedObject(serializationObject);
                        nodeParticleSet.snippetId = snippetId;
                        try {
                            resolve(nodeParticleSet);
                        } catch (err) {
                            // eslint-disable-next-line @typescript-eslint/prefer-promise-reject-errors
                            reject(err);
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
/** Define the Url to load node editor script */ NodeParticleSystemSet.EditorURL = `${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tools"]._DefaultCdnUrl}/v${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].Version}/nodeParticleEditor/babylon.nodeParticleEditor.js`;
/** Define the Url to load snippets */ NodeParticleSystemSet.SnippetUrl = `https://snippet.babylonjs.com`;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], NodeParticleSystemSet.prototype, "name", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])("comment")
], NodeParticleSystemSet.prototype, "comment", void 0); //# sourceMappingURL=nodeParticleSystemSet.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/particleConverterBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ParticleConverterBlock",
    ()=>ParticleConverterBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.color.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Enums/nodeParticleBlockConnectionPointTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$nodeParticleBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/nodeParticleBlock.js [app-ssr] (ecmascript)");
;
;
;
;
;
class ParticleConverterBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$nodeParticleBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlock"] {
    /**
     * Create a new ParticleConverterBlock
     * @param name defines the block name
     */ constructor(name){
        super(name);
        this.registerInput("color ", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Color4, true);
        this.registerInput("xyz ", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Vector3, true);
        this.registerInput("xy ", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Vector2, true);
        this.registerInput("zw ", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Vector2, true);
        this.registerInput("x ", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Float, true);
        this.registerInput("y ", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Float, true);
        this.registerInput("z ", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Float, true);
        this.registerInput("w ", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Float, true);
        this.registerOutput("color", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Color4);
        this.registerOutput("xyz", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Vector3);
        this.registerOutput("xy", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Vector2);
        this.registerOutput("zw", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Vector2);
        this.registerOutput("x", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Float);
        this.registerOutput("y", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Float);
        this.registerOutput("z", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Float);
        this.registerOutput("w", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Float);
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "ParticleConverterBlock";
    }
    /**
     * Gets the color component (input)
     */ get colorIn() {
        return this._inputs[0];
    }
    /**
     * Gets the xyz component (input)
     */ get xyzIn() {
        return this._inputs[1];
    }
    /**
     * Gets the xy component (input)
     */ get xyIn() {
        return this._inputs[2];
    }
    /**
     * Gets the zw component (input)
     */ get zwIn() {
        return this._inputs[3];
    }
    /**
     * Gets the x component (input)
     */ get xIn() {
        return this._inputs[4];
    }
    /**
     * Gets the y component (input)
     */ get yIn() {
        return this._inputs[5];
    }
    /**
     * Gets the z component (input)
     */ get zIn() {
        return this._inputs[6];
    }
    /**
     * Gets the w component (input)
     */ get wIn() {
        return this._inputs[7];
    }
    /**
     * Gets the xyzw component (output)
     */ get colorOut() {
        return this._outputs[0];
    }
    /**
     * Gets the xyz component (output)
     */ get xyzOut() {
        return this._outputs[1];
    }
    /**
     * Gets the xy component (output)
     */ get xyOut() {
        return this._outputs[2];
    }
    /**
     * Gets the zw component (output)
     */ get zwOut() {
        return this._outputs[3];
    }
    /**
     * Gets the x component (output)
     */ get xOut() {
        return this._outputs[4];
    }
    /**
     * Gets the y component (output)
     */ get yOut() {
        return this._outputs[5];
    }
    /**
     * Gets the z component (output)
     */ get zOut() {
        return this._outputs[6];
    }
    /**
     * Gets the w component (output)
     */ get wOut() {
        return this._outputs[7];
    }
    _inputRename(name) {
        if (name === "color ") {
            return "colorIn";
        }
        if (name === "xyz ") {
            return "xyzIn";
        }
        if (name === "xy ") {
            return "xyIn";
        }
        if (name === "zw ") {
            return "zwIn";
        }
        if (name === "x ") {
            return "xIn";
        }
        if (name === "y ") {
            return "yIn";
        }
        if (name === "z ") {
            return "zIn";
        }
        if (name === "w ") {
            return "wIn";
        }
        return name;
    }
    _outputRename(name) {
        switch(name){
            case "x":
                return "xOut";
            case "y":
                return "yOut";
            case "z":
                return "zOut";
            case "w":
                return "wOut";
            case "xy":
                return "xyOut";
            case "zw":
                return "zwOut";
            case "xyz":
                return "xyzOut";
            case "color":
                return "colorOut";
            default:
                return name;
        }
    }
    _build(state) {
        super._build(state);
        const xInput = this.xIn;
        const yInput = this.yIn;
        const zInput = this.zIn;
        const wInput = this.wIn;
        const xyInput = this.xyIn;
        const zwInput = this.zwIn;
        const xyzInput = this.xyzIn;
        const colorInput = this.colorIn;
        const colorOutput = this.colorOut;
        const xyzOutput = this.xyzOut;
        const xyOutput = this.xyOut;
        const zwOutput = this.zwOut;
        const xOutput = this.xOut;
        const yOutput = this.yOut;
        const zOutput = this.zOut;
        const wOutput = this.wOut;
        const getData = (state)=>{
            if (colorInput.isConnected) {
                return colorInput.getConnectedValue(state);
            }
            let x = 0;
            let y = 0;
            let z = 0;
            let w = 0;
            if (xInput.isConnected) {
                x = xInput.getConnectedValue(state);
            }
            if (yInput.isConnected) {
                y = yInput.getConnectedValue(state);
            }
            if (zInput.isConnected) {
                z = zInput.getConnectedValue(state);
            }
            if (wInput.isConnected) {
                w = wInput.getConnectedValue(state);
            }
            if (xyInput.isConnected) {
                const temp = xyInput.getConnectedValue(state);
                if (temp) {
                    x = temp.x;
                    y = temp.y;
                }
            }
            if (zwInput.isConnected) {
                const temp = zwInput.getConnectedValue(state);
                if (temp) {
                    z = temp.x;
                    w = temp.y;
                }
            }
            if (xyzInput.isConnected) {
                const temp = xyzInput.getConnectedValue(state);
                if (temp) {
                    x = temp.x;
                    y = temp.y;
                    z = temp.z;
                }
            }
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color4"](x, y, z, w);
        };
        colorOutput._storedFunction = (state)=>getData(state);
        xyzOutput._storedFunction = (state)=>{
            const data = getData(state);
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](data.r, data.g, data.b);
        };
        xyOutput._storedFunction = (state)=>{
            const data = getData(state);
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"](data.r, data.g);
        };
        zwOutput._storedFunction = (state)=>{
            const data = getData(state);
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"](data.b, data.a);
        };
        xOutput._storedFunction = (state)=>getData(state).r;
        yOutput._storedFunction = (state)=>getData(state).g;
        zOutput._storedFunction = (state)=>getData(state).b;
        wOutput._storedFunction = (state)=>getData(state).a;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.ParticleConverterBlock", ParticleConverterBlock); //# sourceMappingURL=particleConverterBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/particleFloatToIntBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ParticleFloatToIntBlock",
    ()=>ParticleFloatToIntBlock,
    "ParticleFloatToIntBlockOperations",
    ()=>ParticleFloatToIntBlockOperations
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/tslib.es6.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Decorators/nodeDecorator.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$nodeParticleBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/nodeParticleBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Enums/nodeParticleBlockConnectionPointTypes.js [app-ssr] (ecmascript)");
;
;
;
;
;
var ParticleFloatToIntBlockOperations;
(function(ParticleFloatToIntBlockOperations) {
    /** Round */ ParticleFloatToIntBlockOperations[ParticleFloatToIntBlockOperations["Round"] = 0] = "Round";
    /** Ceil */ ParticleFloatToIntBlockOperations[ParticleFloatToIntBlockOperations["Ceil"] = 1] = "Ceil";
    /** Floor */ ParticleFloatToIntBlockOperations[ParticleFloatToIntBlockOperations["Floor"] = 2] = "Floor";
    /** Truncate */ ParticleFloatToIntBlockOperations[ParticleFloatToIntBlockOperations["Truncate"] = 3] = "Truncate";
})(ParticleFloatToIntBlockOperations || (ParticleFloatToIntBlockOperations = {}));
class ParticleFloatToIntBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$nodeParticleBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlock"] {
    /**
     * Creates a new ParticleFloatToIntBlock
     * @param name defines the block name
     */ constructor(name){
        super(name);
        /**
         * Gets or sets the operation applied by the block
         */ this.operation = ParticleFloatToIntBlockOperations.Round;
        this.registerInput("input", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].AutoDetect);
        this.registerOutput("output", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Int);
        this._outputs[0]._typeConnectionSource = this._inputs[0];
        this._inputs[0].addExcludedConnectionPointFromAllowedTypes(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Float | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Int);
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "ParticleFloatToIntBlock";
    }
    /**
     * Gets the input component
     */ get input() {
        return this._inputs[0];
    }
    /**
     * Gets the output component
     */ get output() {
        return this._outputs[0];
    }
    _build(state) {
        super._build(state);
        let func = null;
        const input = this.input;
        switch(this.operation){
            case ParticleFloatToIntBlockOperations.Round:
                {
                    func = (state)=>{
                        return Math.round(input.getConnectedValue(state));
                    };
                    break;
                }
            case ParticleFloatToIntBlockOperations.Ceil:
                {
                    func = (state)=>{
                        return Math.ceil(input.getConnectedValue(state));
                    };
                    break;
                }
            case ParticleFloatToIntBlockOperations.Floor:
                {
                    func = (state)=>{
                        return Math.floor(input.getConnectedValue(state));
                    };
                    break;
                }
            case ParticleFloatToIntBlockOperations.Truncate:
                {
                    func = (state)=>{
                        return Math.trunc(input.getConnectedValue(state));
                    };
                    break;
                }
        }
        if (!func) {
            this.output._storedFunction = null;
            this.output._storedValue = null;
            return;
        }
        this.output._storedFunction = (state)=>{
            return func(state);
        };
    }
    serialize() {
        const serializationObject = super.serialize();
        serializationObject.operation = this.operation;
        return serializationObject;
    }
    _deserialize(serializationObject) {
        super._deserialize(serializationObject);
        this.operation = serializationObject.operation;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["editableInPropertyPage"])("Operation", 5 /* PropertyTypeForEdition.List */ , "ADVANCED", {
        notifiers: {
            rebuild: true
        },
        embedded: true,
        options: [
            {
                label: "Round",
                value: ParticleFloatToIntBlockOperations.Round
            },
            {
                label: "Ceil",
                value: ParticleFloatToIntBlockOperations.Ceil
            },
            {
                label: "Floor",
                value: ParticleFloatToIntBlockOperations.Floor
            },
            {
                label: "Truncate",
                value: ParticleFloatToIntBlockOperations.Truncate
            }
        ]
    })
], ParticleFloatToIntBlock.prototype, "operation", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.ParticleFloatToIntBlock", ParticleFloatToIntBlock); //# sourceMappingURL=particleFloatToIntBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/particleGradientBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ParticleGradientBlock",
    ()=>ParticleGradientBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$nodeParticleBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/nodeParticleBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Enums/nodeParticleBlockConnectionPointTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.scalar.functions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.color.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
class ParticleGradientBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$nodeParticleBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlock"] {
    /**
     * Creates a new ParticleGradientBlock
     * @param name defines the block name
     */ constructor(name){
        super(name);
        this._entryCount = 1;
        this.registerInput("gradient", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Float, true, 1, 0, 1);
        this.registerInput("value0", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].AutoDetect);
        this.registerOutput("output", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].BasedOnInput);
        this._outputs[0]._typeConnectionSource = this._inputs[1];
        this._outputs[0]._typeConnectionSourceTranslation = (type)=>{
            switch(type){
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].FloatGradient:
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Float;
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Vector2Gradient:
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Vector2;
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Vector3Gradient:
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Vector3;
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Color4Gradient:
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Color4;
            }
            return type;
        };
        this._inputs[1].addExcludedConnectionPointFromAllowedTypes(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].FloatGradient | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Vector2Gradient | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Vector3Gradient | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Color4Gradient);
        this._manageExtendedInputs(1);
    }
    _extend() {
        this._entryCount++;
        this.registerInput("value" + (this._entryCount - 1), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].AutoDetect, true);
        this._linkConnectionTypes(1, this._entryCount);
        this._manageExtendedInputs(this._entryCount);
    }
    _manageExtendedInputs(index) {
        this._inputs[index].onConnectionObservable.add(()=>{
            if (this._entryCount > index) {
                return;
            }
            this._extend();
        });
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "ParticleGradientBlock";
    }
    /**
     * Gets the gradient operand input component
     */ get gradient() {
        return this._inputs[0];
    }
    /**
     * Gets the output component
     */ get output() {
        return this._outputs[0];
    }
    _build() {
        // Building the list of entries in order
        const entries = [];
        for(let i = 1; i < this._inputs.length; i++){
            if (this._inputs[i].isConnected) {
                entries.push(this._inputs[i].connectedPoint?.ownerBlock);
            }
        }
        entries.sort((a, b)=>{
            return a.reference - b.reference;
        });
        this.output._storedFunction = (state)=>{
            const gradient = this.gradient.getConnectedValue(state);
            if (entries.length === 1) {
                return entries[0].value.getConnectedValue(state);
            }
            // Go down the entries list in reverse order
            let nextEntry = null;
            for(let i = entries.length - 1; i >= 0; i--){
                const entry = entries[i];
                if (entry.reference <= gradient) {
                    const currentValue = entry.value.getConnectedValue(state);
                    if (nextEntry) {
                        const nextValue = nextEntry.value.getConnectedValue(state);
                        const nextReference = nextEntry.reference;
                        const currentReference = entry.reference;
                        const scale = Math.max(0, Math.min(1, (gradient - currentReference) / (nextReference - currentReference)));
                        switch(this.output.type){
                            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Float:
                                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Lerp"])(currentValue, nextValue, scale);
                            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Vector2:
                                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"].Lerp(currentValue, nextValue, scale);
                            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Vector3:
                                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Lerp(currentValue, nextValue, scale);
                            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Color4:
                                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color4"].Lerp(currentValue, nextValue, scale);
                        }
                    }
                    return currentValue;
                }
                nextEntry = entry;
            }
            return 0;
        };
    }
    serialize() {
        const serializationObject = super.serialize();
        serializationObject._entryCount = this._entryCount;
        return serializationObject;
    }
    _deserialize(serializationObject) {
        super._deserialize(serializationObject);
        if (serializationObject._entryCount && serializationObject._entryCount > 1) {
            for(let i = 1; i < serializationObject._entryCount; i++){
                this._extend();
            }
        }
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.ParticleGradientBlock", ParticleGradientBlock); //# sourceMappingURL=particleGradientBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/particleGradientValueBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ParticleGradientValueBlock",
    ()=>ParticleGradientValueBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/tslib.es6.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$nodeParticleBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/nodeParticleBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Enums/nodeParticleBlockConnectionPointTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Decorators/nodeDecorator.js [app-ssr] (ecmascript)");
;
;
;
;
;
class ParticleGradientValueBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$nodeParticleBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlock"] {
    /**
     * Creates a new ParticleGradientEntryBlock
     * @param name defines the block name
     */ constructor(name){
        super(name);
        /**
         * Gets or sets the epsilon value used for comparison
         */ this.reference = 0;
        this.registerInput("value", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].AutoDetect);
        this.registerOutput("output", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].BasedOnInput);
        this._outputs[0]._typeConnectionSource = this._inputs[0];
        this._outputs[0]._typeConnectionSourceTranslation = (type)=>{
            switch(type){
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Float:
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].FloatGradient;
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Vector2:
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Vector2Gradient;
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Vector3:
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Vector3Gradient;
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Color4:
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Color4Gradient;
            }
            return type;
        };
        this._inputs[0].addExcludedConnectionPointFromAllowedTypes(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Float | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Vector2 | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Vector3 | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Color4);
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "ParticleGradientValueBlock";
    }
    /**
     * Gets the value operand input component
     */ get value() {
        return this._inputs[0];
    }
    /**
     * Gets the output component
     */ get output() {
        return this._outputs[0];
    }
    _build() {
        this.output._storedFunction = (state)=>{
            return null;
        };
    }
    serialize() {
        const serializationObject = super.serialize();
        serializationObject.reference = this.reference;
        return serializationObject;
    }
    _deserialize(serializationObject) {
        super._deserialize(serializationObject);
        this.reference = serializationObject.reference;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["editableInPropertyPage"])("Reference", 1 /* PropertyTypeForEdition.Float */ , "ADVANCED", {
        embedded: true,
        notifiers: {
            rebuild: true
        },
        min: 0,
        max: 1
    })
], ParticleGradientValueBlock.prototype, "reference", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.ParticleGradientValueBlock", ParticleGradientValueBlock); //# sourceMappingURL=particleGradientValueBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/particleRandomBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ParticleRandomBlock",
    ()=>ParticleRandomBlock,
    "ParticleRandomBlockLocks",
    ()=>ParticleRandomBlockLocks
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/tslib.es6.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Decorators/nodeDecorator.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.color.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$nodeParticleBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/nodeParticleBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Enums/nodeParticleBlockConnectionPointTypes.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
var ParticleRandomBlockLocks;
(function(ParticleRandomBlockLocks) {
    /** None */ ParticleRandomBlockLocks[ParticleRandomBlockLocks["None"] = 0] = "None";
    /** PerParticle */ ParticleRandomBlockLocks[ParticleRandomBlockLocks["PerParticle"] = 1] = "PerParticle";
    /** PerSystem */ ParticleRandomBlockLocks[ParticleRandomBlockLocks["PerSystem"] = 2] = "PerSystem";
    /** OncePerParticle */ ParticleRandomBlockLocks[ParticleRandomBlockLocks["OncePerParticle"] = 3] = "OncePerParticle";
})(ParticleRandomBlockLocks || (ParticleRandomBlockLocks = {}));
class ParticleRandomBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$nodeParticleBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlock"] {
    /**
     * Create a new ParticleRandomBlock
     * @param name defines the block name
     */ constructor(name){
        super(name);
        this._currentLockId = -2;
        this._oncePerParticleMap = new Map();
        /**
         * Gets or sets a value indicating if that block will lock its value for a specific event
         */ this.lockMode = ParticleRandomBlockLocks.PerParticle;
        this.registerInput("min", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].AutoDetect, true, 0);
        this.registerInput("max", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].AutoDetect, true, 1);
        this.registerOutput("output", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].BasedOnInput);
        this._inputs[0].addExcludedConnectionPointFromAllowedTypes(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Float | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Int | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Vector2 | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Vector3 | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Color4);
        this._inputs[1].addExcludedConnectionPointFromAllowedTypes(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Float | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Int | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Vector2 | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Vector3 | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Color4);
        this._outputs[0]._typeConnectionSource = this._inputs[0];
        this._outputs[0]._defaultConnectionPointType = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Float;
        this._linkConnectionTypes(0, 1);
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "ParticleRandomBlock";
    }
    /**
     * Gets the min input component
     */ get min() {
        return this._inputs[0];
    }
    /**
     * Gets the max input component
     */ get max() {
        return this._inputs[1];
    }
    /**
     * Gets the geometry output component
     */ get output() {
        return this._outputs[0];
    }
    _build() {
        let func = null;
        this._currentLockId = -2;
        this._oncePerParticleMap.clear();
        switch(this.min.type){
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].AutoDetect:
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Int:
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Float:
                {
                    func = (state)=>{
                        const min = this.min.getConnectedValue(state) ?? 0;
                        const max = this.max.getConnectedValue(state) ?? 1;
                        return min + Math.random() * (max - min);
                    };
                    break;
                }
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Vector2:
                {
                    func = (state)=>{
                        const min = this.min.getConnectedValue(state) ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"].Zero();
                        const max = this.max.getConnectedValue(state) ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"].One();
                        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"](min.x + Math.random() * (max.x - min.x), min.y + Math.random() * (max.y - min.y));
                    };
                    break;
                }
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Vector3:
                {
                    func = (state)=>{
                        const min = this.min.getConnectedValue(state) ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Zero();
                        const max = this.max.getConnectedValue(state) ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].One();
                        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](min.x + Math.random() * (max.x - min.x), min.y + Math.random() * (max.y - min.y), min.z + Math.random() * (max.z - min.z));
                    };
                    break;
                }
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Color4:
                {
                    func = (state)=>{
                        const min = this.min.getConnectedValue(state) ?? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color4"](0, 0, 0, 0);
                        const max = this.max.getConnectedValue(state) ?? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color4"](1, 1, 1, 1);
                        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color4"](min.r + Math.random() * (max.r - min.r), min.g + Math.random() * (max.g - min.g), min.b + Math.random() * (max.b - min.b), min.a + Math.random() * (max.a - min.a));
                    };
                    break;
                }
        }
        this.output._storedFunction = (state)=>{
            if (this.lockMode === ParticleRandomBlockLocks.OncePerParticle) {
                const particleId = state.particleContext?.id ?? -1;
                let cachedValue = this._oncePerParticleMap.get(particleId);
                if (!cachedValue) {
                    cachedValue = func(state);
                    this._oncePerParticleMap.set(particleId, cachedValue);
                }
                this.output._storedValue = cachedValue;
            } else {
                let lockId = -2;
                switch(this.lockMode){
                    case ParticleRandomBlockLocks.PerParticle:
                        lockId = state.particleContext?.id ?? -1;
                        break;
                    case ParticleRandomBlockLocks.PerSystem:
                        lockId = state.buildId ?? 0;
                        break;
                    default:
                        break;
                }
                if (this.lockMode === ParticleRandomBlockLocks.None || this._currentLockId !== lockId) {
                    if (this.lockMode !== ParticleRandomBlockLocks.None) {
                        this._currentLockId = lockId;
                    }
                    this.output._storedValue = func(state);
                }
            }
            return this.output._storedValue;
        };
    }
    /**
     * Serializes this block in a JSON representation
     * @returns the serialized block object
     */ serialize() {
        const serializationObject = super.serialize();
        serializationObject.lockMode = this.lockMode;
        return serializationObject;
    }
    _deserialize(serializationObject) {
        super._deserialize(serializationObject);
        this.lockMode = serializationObject.lockMode;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["editableInPropertyPage"])("LockMode", 5 /* PropertyTypeForEdition.List */ , "ADVANCED", {
        notifiers: {
            rebuild: true
        },
        embedded: true,
        options: [
            {
                label: "None",
                value: ParticleRandomBlockLocks.None
            },
            {
                label: "Per particle",
                value: ParticleRandomBlockLocks.PerParticle
            },
            {
                label: "Per system",
                value: ParticleRandomBlockLocks.PerSystem
            },
            {
                label: "Once per particle",
                value: ParticleRandomBlockLocks.OncePerParticle
            }
        ]
    })
], ParticleRandomBlock.prototype, "lockMode", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.ParticleRandomBlock", ParticleRandomBlock); //# sourceMappingURL=particleRandomBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/particleVectorLengthBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ParticleVectorLengthBlock",
    ()=>ParticleVectorLengthBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$nodeParticleBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/nodeParticleBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Enums/nodeParticleBlockConnectionPointTypes.js [app-ssr] (ecmascript)");
;
;
;
class ParticleVectorLengthBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$nodeParticleBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlock"] {
    /**
     * Creates a new ParticleVectorLengthBlock
     * @param name defines the block name
     */ constructor(name){
        super(name);
        this.registerInput("input", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].AutoDetect);
        this.registerOutput("output", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Float);
        this._inputs[0].addExcludedConnectionPointFromAllowedTypes(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Vector2 | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Vector3);
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "ParticleVectorLengthBlock";
    }
    /**
     * Gets the input operand input component
     */ get input() {
        return this._inputs[0];
    }
    /**
     * Gets the output component
     */ get output() {
        return this._outputs[0];
    }
    _build() {
        if (!this.input.isConnected) {
            this.output._storedFunction = null;
            this.output._storedValue = null;
            return;
        }
        this.output._storedFunction = (state)=>{
            const input = this.input.getConnectedValue(state);
            return input.length();
        };
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.ParticleVectorLengthBlock", ParticleVectorLengthBlock); //# sourceMappingURL=particleVectorLengthBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Conditions/particleConditionBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ParticleConditionBlock",
    ()=>ParticleConditionBlock,
    "ParticleConditionBlockTests",
    ()=>ParticleConditionBlockTests
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/tslib.es6.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.scalar.functions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Enums/nodeParticleBlockConnectionPointTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$nodeParticleBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/nodeParticleBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Decorators/nodeDecorator.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
var ParticleConditionBlockTests;
(function(ParticleConditionBlockTests) {
    /** Equal */ ParticleConditionBlockTests[ParticleConditionBlockTests["Equal"] = 0] = "Equal";
    /** NotEqual */ ParticleConditionBlockTests[ParticleConditionBlockTests["NotEqual"] = 1] = "NotEqual";
    /** LessThan */ ParticleConditionBlockTests[ParticleConditionBlockTests["LessThan"] = 2] = "LessThan";
    /** GreaterThan */ ParticleConditionBlockTests[ParticleConditionBlockTests["GreaterThan"] = 3] = "GreaterThan";
    /** LessOrEqual */ ParticleConditionBlockTests[ParticleConditionBlockTests["LessOrEqual"] = 4] = "LessOrEqual";
    /** GreaterOrEqual */ ParticleConditionBlockTests[ParticleConditionBlockTests["GreaterOrEqual"] = 5] = "GreaterOrEqual";
    /** Logical Exclusive OR */ ParticleConditionBlockTests[ParticleConditionBlockTests["Xor"] = 6] = "Xor";
    /** Logical Or */ ParticleConditionBlockTests[ParticleConditionBlockTests["Or"] = 7] = "Or";
    /** Logical And */ ParticleConditionBlockTests[ParticleConditionBlockTests["And"] = 8] = "And";
})(ParticleConditionBlockTests || (ParticleConditionBlockTests = {}));
class ParticleConditionBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$nodeParticleBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlock"] {
    /**
     * Create a new ParticleConditionBlock
     * @param name defines the block name
     */ constructor(name){
        super(name);
        /**
         * Gets or sets the test used by the block
         */ this.test = ParticleConditionBlockTests.Equal;
        /**
         * Gets or sets the epsilon value used for comparison
         */ this.epsilon = 0;
        this.registerInput("left", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Float);
        this.registerInput("right", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Float, true, 0);
        this.registerInput("ifTrue", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].AutoDetect, true, 1);
        this.registerInput("ifFalse", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].AutoDetect, true, 0);
        this.registerOutput("output", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].BasedOnInput);
        this.output._typeConnectionSource = this._inputs[2];
        this.output._defaultConnectionPointType = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Float;
        this._inputs[0].acceptedConnectionPointTypes.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Int);
        this._inputs[1].acceptedConnectionPointTypes.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Int);
        this._linkConnectionTypes(2, 3);
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "ParticleConditionBlock";
    }
    /**
     * Gets the left input component
     */ get left() {
        return this._inputs[0];
    }
    /**
     * Gets the right input component
     */ get right() {
        return this._inputs[1];
    }
    /**
     * Gets the ifTrue input component
     */ get ifTrue() {
        return this._inputs[2];
    }
    /**
     * Gets the ifFalse input component
     */ get ifFalse() {
        return this._inputs[3];
    }
    /**
     * Gets the output component
     */ get output() {
        return this._outputs[0];
    }
    _build() {
        const func = (state)=>{
            const left = this.left.getConnectedValue(state);
            const right = this.right.getConnectedValue(state);
            let condition = false;
            switch(this.test){
                case ParticleConditionBlockTests.Equal:
                    condition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WithinEpsilon"])(left, right, this.epsilon);
                    break;
                case ParticleConditionBlockTests.NotEqual:
                    condition = !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WithinEpsilon"])(left, right, this.epsilon);
                    break;
                case ParticleConditionBlockTests.LessThan:
                    condition = left < right + this.epsilon;
                    break;
                case ParticleConditionBlockTests.GreaterThan:
                    condition = left > right - this.epsilon;
                    break;
                case ParticleConditionBlockTests.LessOrEqual:
                    condition = left <= right + this.epsilon;
                    break;
                case ParticleConditionBlockTests.GreaterOrEqual:
                    condition = left >= right - this.epsilon;
                    break;
                case ParticleConditionBlockTests.Xor:
                    condition = !!left && !right || !left && !!right;
                    break;
                case ParticleConditionBlockTests.Or:
                    condition = !!left || !!right;
                    break;
                case ParticleConditionBlockTests.And:
                    condition = !!left && !!right;
                    break;
            }
            return condition;
        };
        this.output._storedFunction = (state)=>{
            if (func(state)) {
                return this.ifTrue.getConnectedValue(state);
            }
            return this.ifFalse.getConnectedValue(state);
        };
    }
    /**
     * Serializes this block in a JSON representation
     * @returns the serialized block object
     */ serialize() {
        const serializationObject = super.serialize();
        serializationObject.test = this.test;
        serializationObject.epsilon = this.epsilon;
        return serializationObject;
    }
    _deserialize(serializationObject) {
        super._deserialize(serializationObject);
        this.test = serializationObject.test;
        if (serializationObject.epsilon !== undefined) {
            this.epsilon = serializationObject.epsilon;
        }
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["editableInPropertyPage"])("Test", 5 /* PropertyTypeForEdition.List */ , "ADVANCED", {
        notifiers: {
            rebuild: true
        },
        embedded: true,
        options: [
            {
                label: "Equal",
                value: ParticleConditionBlockTests.Equal
            },
            {
                label: "NotEqual",
                value: ParticleConditionBlockTests.NotEqual
            },
            {
                label: "LessThan",
                value: ParticleConditionBlockTests.LessThan
            },
            {
                label: "GreaterThan",
                value: ParticleConditionBlockTests.GreaterThan
            },
            {
                label: "LessOrEqual",
                value: ParticleConditionBlockTests.LessOrEqual
            },
            {
                label: "GreaterOrEqual",
                value: ParticleConditionBlockTests.GreaterOrEqual
            },
            {
                label: "Xor",
                value: ParticleConditionBlockTests.Xor
            },
            {
                label: "Or",
                value: ParticleConditionBlockTests.Or
            },
            {
                label: "And",
                value: ParticleConditionBlockTests.And
            }
        ]
    })
], ParticleConditionBlock.prototype, "test", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["editableInPropertyPage"])("Epsilon", 1 /* PropertyTypeForEdition.Float */ , "ADVANCED", {
        embedded: true,
        notifiers: {
            rebuild: true
        }
    })
], ParticleConditionBlock.prototype, "epsilon", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.ParticleConditionBlock", ParticleConditionBlock); //# sourceMappingURL=particleConditionBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Emitters/coneShapeBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConeShapeBlock",
    ()=>ConeShapeBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/tslib.es6.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Enums/nodeParticleBlockConnectionPointTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$nodeParticleBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/nodeParticleBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.scalar.functions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Decorators/nodeDecorator.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Emitters$2f$emitters$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Emitters/emitters.functions.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
class ConeShapeBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$nodeParticleBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlock"] {
    /**
     * Create a new ConeShapeBlock
     * @param name defines the block name
     */ constructor(name){
        super(name);
        /**
         * Gets or sets a boolean indicating if the system should emit only from the spawn point
         * DirectionRandomizer will be used for the particles initial direction unless both direction1 and direction2 are connected.
         */ this.emitFromSpawnPointOnly = false;
        this.registerInput("particle", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Particle);
        this.registerInput("radius", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Float, true, 1);
        this.registerInput("angle", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Float, true, Math.PI);
        this.registerInput("radiusRange", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Float, true, 1);
        this.registerInput("heightRange", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Float, true, 1);
        this.registerInput("directionRandomizer", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Float, true, 0);
        this.registerInput("direction1", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Vector3, true);
        this.registerInput("direction2", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Vector3, true);
        this.registerOutput("output", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Particle);
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "ConeShapeBlock";
    }
    /**
     * Gets the particle input component
     */ get particle() {
        return this._inputs[0];
    }
    /**
     * Gets the radius input component
     */ get radius() {
        return this._inputs[1];
    }
    /**
     * Gets the angle input component
     */ get angle() {
        return this._inputs[2];
    }
    /**
     * Gets the radiusRange input component
     */ get radiusRange() {
        return this._inputs[3];
    }
    /**
     * Gets the heightRange input component
     */ get heightRange() {
        return this._inputs[4];
    }
    /**
     * Gets the directionRandomizer input component
     */ get directionRandomizer() {
        return this._inputs[5];
    }
    /**
     * Gets the direction1 input component
     */ get direction1() {
        return this._inputs[6];
    }
    /**
     * Gets the direction2 input component
     */ get direction2() {
        return this._inputs[7];
    }
    /**
     * Gets the output component
     */ get output() {
        return this._outputs[0];
    }
    /**
     * Builds the block
     * @param state defines the build state
     */ _build(state) {
        const system = this.particle.getConnectedValue(state);
        system._directionCreation.process = (particle)=>{
            state.particleContext = particle;
            state.systemContext = system;
            // We always use directionRandomizer unless both directions are connected
            if (this.direction1.isConnected === false || this.direction2.isConnected === false) {
                const directionRandomizer = this.directionRandomizer.getConnectedValue(state);
                const direction = particle.position.subtract(state.emitterPosition).normalize();
                const randX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RandomRange"])(0, directionRandomizer);
                const randY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RandomRange"])(0, directionRandomizer);
                const randZ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RandomRange"])(0, directionRandomizer);
                direction.x += randX;
                direction.y += randY;
                direction.z += randZ;
                direction.normalize();
                if (system.isLocal) {
                    particle.direction.copyFromFloats(direction.x, direction.y, direction.z);
                } else {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].TransformNormalFromFloatsToRef(direction.x, direction.y, direction.z, state.emitterWorldMatrix, particle.direction);
                }
            } else {
                const direction1 = this.direction1.getConnectedValue(state);
                const direction2 = this.direction2.getConnectedValue(state);
                const randX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RandomRange"])(direction1.x, direction2.x);
                const randY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RandomRange"])(direction1.y, direction2.y);
                const randZ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RandomRange"])(direction1.z, direction2.z);
                if (system.isLocal) {
                    particle.direction.copyFromFloats(randX, randY, randZ);
                } else {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].TransformNormalFromFloatsToRef(randX, randY, randZ, state.emitterWorldMatrix, particle.direction);
                }
            }
            particle._initialDirection = particle.direction.clone();
        };
        system._positionCreation.process = (particle)=>{
            state.particleContext = particle;
            state.systemContext = system;
            // Connected values
            const radius = this.radius.getConnectedValue(state);
            const angle = this.angle.getConnectedValue(state);
            const radiusRange = this.radiusRange.getConnectedValue(state);
            const heightRange = this.heightRange.getConnectedValue(state);
            // Calculate position creation logic
            let h;
            if (!this.emitFromSpawnPointOnly) {
                h = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RandomRange"])(0, heightRange);
                // Better distribution in a cone at normal angles.
                h = 1 - h * h;
            } else {
                h = 0.0001;
            }
            let newRadius = radius - (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RandomRange"])(0, radius * radiusRange);
            newRadius = newRadius * h;
            const s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RandomRange"])(0, Math.PI * 2);
            const randX = newRadius * Math.sin(s);
            const randZ = newRadius * Math.cos(s);
            const randY = h * this._calculateHeight(angle, radius);
            if (system.isLocal) {
                particle.position.copyFromFloats(randX, randY, randZ);
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinatesFromFloatsToRef(randX, randY, randZ, state.emitterWorldMatrix, particle.position);
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Emitters$2f$emitters$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_CreateLocalPositionData"])(particle);
        };
        this.output._storedValue = system;
    }
    _calculateHeight(angle, radius) {
        if (angle !== 0) {
            return radius / Math.tan(angle / 2);
        } else {
            return 1;
        }
    }
    serialize() {
        const serializationObject = super.serialize();
        serializationObject.emitFromSpawnPointOnly = this.emitFromSpawnPointOnly;
        return serializationObject;
    }
    _deserialize(serializationObject) {
        super._deserialize(serializationObject);
        this.emitFromSpawnPointOnly = serializationObject.emitFromSpawnPointOnly;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["editableInPropertyPage"])("Emit from spawn point only", 0 /* PropertyTypeForEdition.Boolean */ , "ADVANCED", {
        embedded: true,
        notifiers: {
            rebuild: true
        }
    })
], ConeShapeBlock.prototype, "emitFromSpawnPointOnly", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.ConeShapeBlock", ConeShapeBlock); //# sourceMappingURL=coneShapeBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Emitters/cylinderShapeBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CylinderShapeBlock",
    ()=>CylinderShapeBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.scalar.functions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Enums/nodeParticleBlockConnectionPointTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$nodeParticleBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/nodeParticleBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Emitters$2f$emitters$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Emitters/emitters.functions.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
class CylinderShapeBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$nodeParticleBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlock"] {
    /**
     * Create a new CylinderShapeBlock
     * @param name defines the block name
     */ constructor(name){
        super(name);
        this._tempVector = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        this.registerInput("particle", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Particle);
        this.registerInput("radius", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Float, true, 1);
        this.registerInput("height", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Float, true, 1, 0);
        this.registerInput("radiusRange", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Float, true, 1, 0, 1);
        this.registerInput("directionRandomizer", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Float, true, 0, 0, 1);
        this.registerInput("direction1", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Vector3, true);
        this.registerInput("direction2", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Vector3, true);
        this.registerOutput("output", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Particle);
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "CylinderShapeBlock";
    }
    /**
     * Gets the particle component
     */ get particle() {
        return this._inputs[0];
    }
    /**
     * Gets the radius input component
     */ get radius() {
        return this._inputs[1];
    }
    /**
     * Gets the height input component
     */ get height() {
        return this._inputs[2];
    }
    /**
     * Gets the radiusRange input component
     */ get radiusRange() {
        return this._inputs[3];
    }
    /**
     * Gets the directionRandomizer input component
     */ get directionRandomizer() {
        return this._inputs[4];
    }
    /**
     * Gets the direction1 input component
     */ get direction1() {
        return this._inputs[5];
    }
    /**
     * Gets the direction2 input component
     */ get direction2() {
        return this._inputs[6];
    }
    /**
     * Gets the output component
     */ get output() {
        return this._outputs[0];
    }
    /**
     * Builds the block
     * @param state defines the build state
     */ _build(state) {
        const system = this.particle.getConnectedValue(state);
        system._directionCreation.process = (particle)=>{
            state.particleContext = particle;
            state.systemContext = system;
            // We always use directionRandomizer unless both directions are connected
            if (this.direction1.isConnected === false || this.direction2.isConnected === false) {
                const directionRandomizer = this.directionRandomizer.getConnectedValue(state);
                particle.position.subtractToRef(state.emitterPosition, this._tempVector);
                this._tempVector.normalize();
                if (state.emitterInverseWorldMatrix) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].TransformNormalToRef(this._tempVector, state.emitterInverseWorldMatrix, this._tempVector);
                }
                const randY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RandomRange"])(-directionRandomizer / 2, directionRandomizer / 2);
                let angle = Math.atan2(this._tempVector.x, this._tempVector.z);
                angle += (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RandomRange"])(-Math.PI / 2, Math.PI / 2) * directionRandomizer;
                this._tempVector.y = randY; // set direction y to rand y to mirror normal of cylinder surface
                this._tempVector.x = Math.sin(angle);
                this._tempVector.z = Math.cos(angle);
                this._tempVector.normalize();
                if (system.isLocal) {
                    particle.direction.copyFrom(this._tempVector);
                } else {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].TransformNormalFromFloatsToRef(this._tempVector.x, this._tempVector.y, this._tempVector.z, state.emitterWorldMatrix, particle.direction);
                }
            } else {
                const direction1 = this.direction1.getConnectedValue(state);
                const direction2 = this.direction2.getConnectedValue(state);
                const randX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RandomRange"])(direction1.x, direction2.x);
                const randY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RandomRange"])(direction1.y, direction2.y);
                const randZ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RandomRange"])(direction1.z, direction2.z);
                if (system.isLocal) {
                    particle.direction.copyFromFloats(randX, randY, randZ);
                } else {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].TransformNormalFromFloatsToRef(randX, randY, randZ, state.emitterWorldMatrix, particle.direction);
                }
            }
            particle._initialDirection = particle.direction.clone();
        };
        system._positionCreation.process = (particle)=>{
            state.particleContext = particle;
            state.systemContext = system;
            const height = this.height.getConnectedValue(state);
            const radiusRange = this.radiusRange.getConnectedValue(state);
            const radius = this.radius.getConnectedValue(state);
            const yPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RandomRange"])(-height / 2, height / 2);
            const angle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RandomRange"])(0, 2 * Math.PI);
            // Pick a properly distributed point within the circle https://programming.guide/random-point-within-circle.html
            const radiusDistribution = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RandomRange"])((1 - radiusRange) * (1 - radiusRange), 1);
            const positionRadius = Math.sqrt(radiusDistribution) * radius;
            const xPos = positionRadius * Math.cos(angle);
            const zPos = positionRadius * Math.sin(angle);
            if (system.isLocal) {
                particle.position.copyFromFloats(xPos, yPos, zPos);
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinatesFromFloatsToRef(xPos, yPos, zPos, state.emitterWorldMatrix, particle.position);
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Emitters$2f$emitters$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_CreateLocalPositionData"])(particle);
        };
        this.output._storedValue = system;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.CylinderShapeBlock", CylinderShapeBlock); //# sourceMappingURL=cylinderShapeBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Emitters/customShapeBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CustomShapeBlock",
    ()=>CustomShapeBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$EmitterTypes$2f$customParticleEmitter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/EmitterTypes/customParticleEmitter.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$nodeParticleBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/nodeParticleBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Enums/nodeParticleBlockConnectionPointTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Emitters$2f$emitters$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Emitters/emitters.functions.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
class CustomShapeBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$nodeParticleBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlock"] {
    /**
     * Create a new CustomShapeBlock
     * @param name defines the block name
     */ constructor(name){
        super(name);
        /** The particle position generator function */ this.particlePositionGenerator = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$EmitterTypes$2f$customParticleEmitter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EmptyGeneratorFunc"];
        /** The particle destination generator function */ this.particleDestinationGenerator = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$EmitterTypes$2f$customParticleEmitter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EmptyGeneratorFunc"];
        /** The particle direction generator function */ this.particleDirectionGenerator = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$EmitterTypes$2f$customParticleEmitter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EmptyGeneratorFunc"];
        this.registerInput("particle", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Particle);
        this.registerOutput("output", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Particle);
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "CustomShapeBlock";
    }
    /**
     * Gets the particle component
     */ get particle() {
        return this._inputs[0];
    }
    /**
     * Gets the output component
     */ get output() {
        return this._outputs[0];
    }
    /**
     * Builds the block
     * @param state defines the build state
     */ _build(state) {
        const system = this.particle.getConnectedValue(state);
        system._directionCreation.process = (particle)=>{
            state.particleContext = particle;
            state.systemContext = system;
            const tmpVector = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0];
            if (this.particleDirectionGenerator && this.particleDirectionGenerator !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$EmitterTypes$2f$customParticleEmitter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EmptyGeneratorFunc"]) {
                this.particleDirectionGenerator(-1, particle, tmpVector);
            } else if (this.particleDestinationGenerator && this.particleDestinationGenerator !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$EmitterTypes$2f$customParticleEmitter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EmptyGeneratorFunc"]) {
                this.particleDestinationGenerator(-1, particle, tmpVector);
                // Get direction
                const diffVector = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[1];
                tmpVector.subtractToRef(particle.position, diffVector);
                diffVector.scaleToRef(1 / particle.lifeTime, tmpVector);
            } else {
                tmpVector.set(0, 0, 0);
            }
            if (system.isLocal) {
                particle.direction.copyFrom(tmpVector);
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].TransformNormalToRef(tmpVector, state.emitterWorldMatrix, particle.direction);
            }
            particle._initialDirection = particle.direction.clone();
        };
        system._positionCreation.process = (particle)=>{
            state.particleContext = particle;
            state.systemContext = system;
            const tmpVector = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0];
            if (this.particlePositionGenerator && this.particlePositionGenerator !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$EmitterTypes$2f$customParticleEmitter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EmptyGeneratorFunc"]) {
                this.particlePositionGenerator(-1, particle, tmpVector);
            } else {
                tmpVector.set(0, 0, 0);
            }
            if (system.isLocal) {
                particle.position.copyFrom(tmpVector);
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinatesToRef(tmpVector, state.emitterWorldMatrix, particle.position);
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Emitters$2f$emitters$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_CreateLocalPositionData"])(particle);
        };
        this.output._storedValue = system;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.CustomShapeBlock", CustomShapeBlock); //# sourceMappingURL=customShapeBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Emitters/meshShapeBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MeshShapeBlock",
    ()=>MeshShapeBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/tslib.es6.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$vertexData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/mesh.vertexData.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Decorators/nodeDecorator.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$nodeParticleBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/nodeParticleBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Enums/nodeParticleBlockConnectionPointTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.scalar.functions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Emitters$2f$emitters$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Emitters/emitters.functions.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
class MeshShapeBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$nodeParticleBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlock"] {
    /**
     * Gets or sets the mesh to use to get vertex data
     */ get mesh() {
        return this._mesh;
    }
    set mesh(value) {
        this._mesh = value;
    }
    /**
     * Create a new MeshShapeBlock
     * @param name defines the block name
     */ constructor(name){
        super(name);
        this._cachedVertexData = null;
        this._indices = null;
        this._positions = null;
        this._normals = null;
        this._colors = null;
        this._storedNormal = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        /**
         * Gets or sets a boolean indicating that this block should serialize its cached data
         */ this.serializedCachedData = false;
        /**
         * Gets or sets a boolean indicating if the mesh normals should be used for particle direction
         */ this.useMeshNormalsForDirection = true;
        /**
         * Gets or sets a boolean indicating if the mesh colors should be used for particle color
         */ this.useMeshColorForColor = false;
        /**
         * Gets or sets a boolean indicating if the coordinates should be in world space (local space by default)
         */ this.worldSpace = false;
        this.registerInput("particle", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Particle);
        this.registerInput("direction1", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Vector3, true, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](0, 1.0, 0));
        this.registerInput("direction2", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Vector3, true, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](0, 1.0, 0));
        this.registerOutput("output", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Particle);
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "MeshShapeBlock";
    }
    /**
     * Gets a boolean indicating if the block is using cached data
     */ get isUsingCachedData() {
        return !this.mesh && !!this._cachedVertexData;
    }
    /**
     * Gets the particle component
     */ get particle() {
        return this._inputs[0];
    }
    /**
     * Gets the direction1 input component
     */ get direction1() {
        return this._inputs[1];
    }
    /**
     * Gets the direction2 input component
     */ get direction2() {
        return this._inputs[2];
    }
    /**
     * Gets the output component
     */ get output() {
        return this._outputs[0];
    }
    /**
     * Remove stored data
     */ cleanData() {
        this._mesh = null;
        this._cachedVertexData = null;
    }
    /**
     * Builds the block
     * @param state defines the build state
     */ _build(state) {
        const system = this.particle.getConnectedValue(state);
        if (!this._mesh && !this._cachedVertexData) {
            this.output._storedValue = system;
            return;
        }
        if (this._mesh) {
            this._cachedVertexData = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$vertexData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexData"].ExtractFromMesh(this._mesh, false, true);
        }
        if (!this._cachedVertexData) {
            this.output._storedValue = system;
            return;
        }
        this._indices = this._cachedVertexData.indices;
        this._positions = this._cachedVertexData.positions;
        this._normals = this._cachedVertexData.normals;
        this._colors = this._cachedVertexData.colors;
        if (this.useMeshColorForColor && this._colors) {
            system._colorCreation.process = ()=>{};
        }
        system._directionCreation.process = (particle)=>{
            state.particleContext = particle;
            state.systemContext = system;
            if (this.useMeshNormalsForDirection && this._normals) {
                if (system.isLocal) {
                    particle.direction.copyFrom(this._storedNormal);
                } else {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].TransformNormalToRef(this._storedNormal, state.emitterWorldMatrix, particle.direction);
                }
                return;
            }
            const direction1 = this.direction1.getConnectedValue(state);
            const direction2 = this.direction2.getConnectedValue(state);
            const randX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RandomRange"])(direction1.x, direction2.x);
            const randY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RandomRange"])(direction1.y, direction2.y);
            const randZ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RandomRange"])(direction1.z, direction2.z);
            if (system.isLocal) {
                particle.direction.copyFromFloats(randX, randY, randZ);
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].TransformNormalFromFloatsToRef(randX, randY, randZ, state.emitterWorldMatrix, particle.direction);
            }
            particle._initialDirection = particle.direction.clone();
        };
        system._positionCreation.process = (particle)=>{
            state.particleContext = particle;
            state.systemContext = system;
            if (!this._indices || !this._positions) {
                return;
            }
            const randomFaceIndex = 3 * (Math.random() * (this._indices.length / 3) | 0);
            const bu = Math.random();
            const bv = Math.random() * (1.0 - bu);
            const bw = 1.0 - bu - bv;
            const faceIndexA = this._indices[randomFaceIndex];
            const faceIndexB = this._indices[randomFaceIndex + 1];
            const faceIndexC = this._indices[randomFaceIndex + 2];
            const vertexA = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0];
            const vertexB = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[1];
            const vertexC = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[2];
            const randomVertex = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[3];
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].FromArrayToRef(this._positions, faceIndexA * 3, vertexA);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].FromArrayToRef(this._positions, faceIndexB * 3, vertexB);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].FromArrayToRef(this._positions, faceIndexC * 3, vertexC);
            randomVertex.x = bu * vertexA.x + bv * vertexB.x + bw * vertexC.x;
            randomVertex.y = bu * vertexA.y + bv * vertexB.y + bw * vertexC.y;
            randomVertex.z = bu * vertexA.z + bv * vertexB.z + bw * vertexC.z;
            if (this.worldSpace && this.mesh) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinatesFromFloatsToRef(randomVertex.x, randomVertex.y, randomVertex.z, this.mesh.getWorldMatrix(), randomVertex);
            }
            if (system.isLocal) {
                particle.position.copyFromFloats(randomVertex.x, randomVertex.y, randomVertex.z);
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinatesFromFloatsToRef(randomVertex.x, randomVertex.y, randomVertex.z, state.emitterWorldMatrix, particle.position);
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Emitters$2f$emitters$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_CreateLocalPositionData"])(particle);
            if (this.useMeshNormalsForDirection && this._normals) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].FromArrayToRef(this._normals, faceIndexA * 3, vertexA);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].FromArrayToRef(this._normals, faceIndexB * 3, vertexB);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].FromArrayToRef(this._normals, faceIndexC * 3, vertexC);
                this._storedNormal.x = bu * vertexA.x + bv * vertexB.x + bw * vertexC.x;
                this._storedNormal.y = bu * vertexA.y + bv * vertexB.y + bw * vertexC.y;
                this._storedNormal.z = bu * vertexA.z + bv * vertexB.z + bw * vertexC.z;
            }
            if (this.useMeshColorForColor && this._colors) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector4"].FromArrayToRef(this._colors, faceIndexA * 4, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Vector4[0]);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector4"].FromArrayToRef(this._colors, faceIndexB * 4, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Vector4[1]);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector4"].FromArrayToRef(this._colors, faceIndexC * 4, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Vector4[2]);
                particle.color.copyFromFloats(bu * __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Vector4[0].x + bv * __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Vector4[1].x + bw * __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Vector4[2].x, bu * __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Vector4[0].y + bv * __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Vector4[1].y + bw * __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Vector4[2].y, bu * __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Vector4[0].z + bv * __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Vector4[1].z + bw * __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Vector4[2].z, bu * __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Vector4[0].w + bv * __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Vector4[1].w + bw * __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Vector4[2].w);
            }
        };
        this.output._storedValue = system;
    }
    /**
     * Serializes this block in a JSON representation
     * @returns the serialized block object
     */ serialize() {
        const serializationObject = super.serialize();
        serializationObject.serializedCachedData = this.serializedCachedData;
        if (this.serializedCachedData) {
            if (this._mesh) {
                serializationObject.cachedVertexData = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$vertexData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexData"].ExtractFromMesh(this._mesh, false, true).serialize();
            } else if (this._cachedVertexData) {
                serializationObject.cachedVertexData = this._cachedVertexData.serialize();
            }
        }
        serializationObject.useMeshNormalsForDirection = this.useMeshNormalsForDirection;
        serializationObject.useMeshColorForColor = this.useMeshColorForColor;
        serializationObject.worldSpace = this.worldSpace;
        return serializationObject;
    }
    _deserialize(serializationObject) {
        super._deserialize(serializationObject);
        if (serializationObject.cachedVertexData) {
            this._cachedVertexData = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$vertexData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexData"].Parse(serializationObject.cachedVertexData);
        }
        this.serializedCachedData = !!serializationObject.serializedCachedData;
        this.useMeshNormalsForDirection = !!serializationObject.useMeshNormalsForDirection;
        this.useMeshColorForColor = !!serializationObject.useMeshColorForColor;
        this.worldSpace = !!serializationObject.worldSpace;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["editableInPropertyPage"])("Serialize cached data", 0 /* PropertyTypeForEdition.Boolean */ , "ADVANCED", {
        embedded: true,
        notifiers: {
            rebuild: true
        }
    })
], MeshShapeBlock.prototype, "serializedCachedData", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["editableInPropertyPage"])("Use normals for direction", 0 /* PropertyTypeForEdition.Boolean */ , "ADVANCED", {
        embedded: true,
        notifiers: {
            rebuild: true
        }
    })
], MeshShapeBlock.prototype, "useMeshNormalsForDirection", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["editableInPropertyPage"])("Use vertex color for color", 0 /* PropertyTypeForEdition.Boolean */ , "ADVANCED", {
        embedded: true,
        notifiers: {
            rebuild: true
        }
    })
], MeshShapeBlock.prototype, "useMeshColorForColor", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["editableInPropertyPage"])("World space", 0 /* PropertyTypeForEdition.Boolean */ , "ADVANCED", {
        embedded: true,
        notifiers: {
            rebuild: true
        }
    })
], MeshShapeBlock.prototype, "worldSpace", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.MeshShapeBlock", MeshShapeBlock); //# sourceMappingURL=meshShapeBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Emitters/pointShapeBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PointShapeBlock",
    ()=>PointShapeBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Enums/nodeParticleBlockConnectionPointTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$nodeParticleBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/nodeParticleBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.scalar.functions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Emitters$2f$emitters$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Emitters/emitters.functions.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
class PointShapeBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$nodeParticleBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlock"] {
    /**
     * Create a new PointShapeBlock
     * @param name defines the block name
     */ constructor(name){
        super(name);
        this.registerInput("particle", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Particle);
        this.registerInput("direction1", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Vector3, true, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](0, 1.0, 0));
        this.registerInput("direction2", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Vector3, true, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](0, 1.0, 0));
        this.registerOutput("output", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Particle);
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "PointShapeBlock";
    }
    /**
     * Gets the particle component
     */ get particle() {
        return this._inputs[0];
    }
    /**
     * Gets the direction1 input component
     */ get direction1() {
        return this._inputs[1];
    }
    /**
     * Gets the direction2 input component
     */ get direction2() {
        return this._inputs[2];
    }
    /**
     * Gets the output component
     */ get output() {
        return this._outputs[0];
    }
    /**
     * Builds the block
     * @param state defines the build state
     */ _build(state) {
        const system = this.particle.getConnectedValue(state);
        system._directionCreation.process = (particle)=>{
            state.particleContext = particle;
            state.systemContext = system;
            const direction1 = this.direction1.getConnectedValue(state);
            const direction2 = this.direction2.getConnectedValue(state);
            const randX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RandomRange"])(direction1.x, direction2.x);
            const randY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RandomRange"])(direction1.y, direction2.y);
            const randZ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RandomRange"])(direction1.z, direction2.z);
            if (system.isLocal) {
                particle.direction.copyFromFloats(randX, randY, randZ);
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].TransformNormalFromFloatsToRef(randX, randY, randZ, state.emitterWorldMatrix, particle.direction);
            }
            particle._initialDirection = particle.direction.clone();
        };
        system._positionCreation.process = (particle)=>{
            state.systemContext = system;
            if (system.isLocal) {
                particle.position.copyFromFloats(0, 0, 0);
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinatesFromFloatsToRef(0, 0, 0, state.emitterWorldMatrix, particle.position);
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Emitters$2f$emitters$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_CreateLocalPositionData"])(particle);
        };
        this.output._storedValue = system;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.PointShapeBlock", PointShapeBlock); //# sourceMappingURL=pointShapeBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Emitters/sphereShapeBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SphereShapeBlock",
    ()=>SphereShapeBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/tslib.es6.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Enums/nodeParticleBlockConnectionPointTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$nodeParticleBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/nodeParticleBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.scalar.functions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Emitters$2f$emitters$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Emitters/emitters.functions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Decorators/nodeDecorator.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
class SphereShapeBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$nodeParticleBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlock"] {
    /**
     * Create a new SphereShapeBlock
     * @param name defines the block name
     */ constructor(name){
        super(name);
        /**
         * Gets or sets a boolean indicating whether to emit in a hemispheric mode (top half of the sphere) or not
         */ this.isHemispheric = false;
        this.registerInput("particle", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Particle);
        this.registerInput("radius", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Float, true, 1);
        this.registerInput("radiusRange", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Float, true, 1, 0, 1);
        this.registerInput("directionRandomizer", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Float, true, 0, 0, 1);
        this.registerInput("direction1", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Vector3, true);
        this.registerInput("direction2", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Vector3, true);
        this.registerOutput("output", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Particle);
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "SphereShapeBlock";
    }
    /**
     * Gets the particle component
     */ get particle() {
        return this._inputs[0];
    }
    /**
     * Gets the radius input component
     */ get radius() {
        return this._inputs[1];
    }
    /**
     * Gets the radiusRange input component
     */ get radiusRange() {
        return this._inputs[2];
    }
    /**
     * Gets the directionRandomizer input component
     */ get directionRandomizer() {
        return this._inputs[3];
    }
    /**
     * Gets the direction1 input component
     */ get direction1() {
        return this._inputs[4];
    }
    /**
     * Gets the direction2 input component
     */ get direction2() {
        return this._inputs[5];
    }
    /**
     * Gets the output component
     */ get output() {
        return this._outputs[0];
    }
    /**
     * Builds the block
     * @param state defines the build state
     */ _build(state) {
        const system = this.particle.getConnectedValue(state);
        system._directionCreation.process = (particle)=>{
            state.particleContext = particle;
            state.systemContext = system;
            // We always use directionRandomizer unless both directions are connected
            if (this.direction1.isConnected === false || this.direction2.isConnected === false) {
                const directionRandomizer = this.directionRandomizer.getConnectedValue(state);
                const direction = particle.position.subtract(state.emitterPosition).normalize();
                const randX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RandomRange"])(0, directionRandomizer);
                const randY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RandomRange"])(0, directionRandomizer);
                const randZ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RandomRange"])(0, directionRandomizer);
                direction.x += randX;
                direction.y += randY;
                direction.z += randZ;
                direction.normalize();
                if (system.isLocal) {
                    particle.direction.copyFromFloats(direction.x, direction.y, direction.z);
                } else {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].TransformNormalFromFloatsToRef(direction.x, direction.y, direction.z, state.emitterWorldMatrix, particle.direction);
                }
            } else {
                const direction1 = this.direction1.getConnectedValue(state);
                const direction2 = this.direction2.getConnectedValue(state);
                const randX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RandomRange"])(direction1.x, direction2.x);
                const randY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RandomRange"])(direction1.y, direction2.y);
                const randZ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RandomRange"])(direction1.z, direction2.z);
                if (system.isLocal) {
                    particle.direction.copyFromFloats(randX, randY, randZ);
                } else {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].TransformNormalFromFloatsToRef(randX, randY, randZ, state.emitterWorldMatrix, particle.direction);
                }
            }
            particle._initialDirection = particle.direction.clone();
        };
        system._positionCreation.process = (particle)=>{
            state.particleContext = particle;
            state.systemContext = system;
            const radius = this.radius.getConnectedValue(state);
            const radiusRange = this.radiusRange.getConnectedValue(state);
            const randRadius = radius - (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RandomRange"])(0, radius * radiusRange);
            const v = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RandomRange"])(0, 1.0);
            const phi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RandomRange"])(0, 2 * Math.PI);
            const theta = Math.acos(2 * v - 1);
            const randX = randRadius * Math.cos(phi) * Math.sin(theta);
            let randY = randRadius * Math.cos(theta);
            const randZ = randRadius * Math.sin(phi) * Math.sin(theta);
            if (this.isHemispheric) {
                randY = Math.abs(randY);
            }
            if (system.isLocal) {
                particle.position.copyFromFloats(randX, randY, randZ);
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinatesFromFloatsToRef(randX, randY, randZ, state.emitterWorldMatrix, particle.position);
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Emitters$2f$emitters$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_CreateLocalPositionData"])(particle);
        };
        this.output._storedValue = system;
    }
    serialize() {
        const serializationObject = super.serialize();
        serializationObject.isHemispheric = this.isHemispheric;
        return serializationObject;
    }
    _deserialize(serializationObject) {
        super._deserialize(serializationObject);
        this.isHemispheric = serializationObject.isHemispheric;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["editableInPropertyPage"])("Is hemispheric", 0 /* PropertyTypeForEdition.Boolean */ , "ADVANCED", {
        embedded: true,
        notifiers: {
            rebuild: true
        }
    })
], SphereShapeBlock.prototype, "isHemispheric", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.SphereShapeBlock", SphereShapeBlock); //# sourceMappingURL=sphereShapeBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Update/updateAngleBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UpdateAngleBlock",
    ()=>UpdateAngleBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Enums/nodeParticleBlockConnectionPointTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$nodeParticleBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/nodeParticleBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Queue$2f$executionQueue$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Queue/executionQueue.js [app-ssr] (ecmascript)");
;
;
;
;
class UpdateAngleBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$nodeParticleBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlock"] {
    /**
     * Create a new UpdateAngleBlock
     * @param name defines the block name
     */ constructor(name){
        super(name);
        this.registerInput("particle", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Particle);
        this.registerInput("angle", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Float);
        this.registerOutput("output", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Particle);
    }
    /**
     * Gets the particle component
     */ get particle() {
        return this._inputs[0];
    }
    /**
     * Gets the angle input component
     */ get angle() {
        return this._inputs[1];
    }
    /**
     * Gets the output component
     */ get output() {
        return this._outputs[0];
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "UpdateAngleBlock";
    }
    /**
     * Builds the block
     * @param state defines the current build state
     */ _build(state) {
        const system = this.particle.getConnectedValue(state);
        this.output._storedValue = system;
        if (!this.angle.isConnected) {
            return;
        }
        const processAngle = (particle)=>{
            state.particleContext = particle;
            state.systemContext = system;
            particle.angle = this.angle.getConnectedValue(state);
        };
        const angleProcessing = {
            process: processAngle,
            previousItem: null,
            nextItem: null
        };
        if (system._updateQueueStart) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Queue$2f$executionQueue$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_ConnectAtTheEnd"])(angleProcessing, system._updateQueueStart);
        } else {
            system._updateQueueStart = angleProcessing;
        }
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.UpdateAngleBlock", UpdateAngleBlock); //# sourceMappingURL=updateAngleBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Update/updateColorBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UpdateColorBlock",
    ()=>UpdateColorBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Enums/nodeParticleBlockConnectionPointTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$nodeParticleBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/nodeParticleBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Queue$2f$executionQueue$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Queue/executionQueue.js [app-ssr] (ecmascript)");
;
;
;
;
class UpdateColorBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$nodeParticleBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlock"] {
    /**
     * Create a new UpdateColorBlock
     * @param name defines the block name
     */ constructor(name){
        super(name);
        this.registerInput("particle", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Particle);
        this.registerInput("color", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Color4);
        this.registerOutput("output", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Particle);
    }
    /**
     * Gets the particle component
     */ get particle() {
        return this._inputs[0];
    }
    /**
     * Gets the color input component
     */ get color() {
        return this._inputs[1];
    }
    /**
     * Gets the output component
     */ get output() {
        return this._outputs[0];
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "UpdateColorBlock";
    }
    /**
     * Builds the block
     * @param state defines the current build state
     */ _build(state) {
        const system = this.particle.getConnectedValue(state);
        this.output._storedValue = system;
        if (!this.color.isConnected) {
            return;
        }
        const processColor = (particle)=>{
            state.particleContext = particle;
            state.systemContext = system;
            particle.color.copyFrom(this.color.getConnectedValue(state));
        };
        const colorProcessing = {
            process: processColor,
            previousItem: null,
            nextItem: null
        };
        if (system._updateQueueStart) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Queue$2f$executionQueue$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_ConnectAtTheEnd"])(colorProcessing, system._updateQueueStart);
        } else {
            system._updateQueueStart = colorProcessing;
        }
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.UpdateColorBlock", UpdateColorBlock); //# sourceMappingURL=updateColorBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Update/updateDirectionBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UpdateDirectionBlock",
    ()=>UpdateDirectionBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Enums/nodeParticleBlockConnectionPointTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$nodeParticleBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/nodeParticleBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Queue$2f$executionQueue$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Queue/executionQueue.js [app-ssr] (ecmascript)");
;
;
;
;
class UpdateDirectionBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$nodeParticleBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlock"] {
    /**
     * Create a new UpdateDirectionBlock
     * @param name defines the block name
     */ constructor(name){
        super(name);
        this.registerInput("particle", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Particle);
        this.registerInput("direction", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Vector3);
        this.registerOutput("output", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Particle);
    }
    /**
     * Gets the particle component
     */ get particle() {
        return this._inputs[0];
    }
    /**
     * Gets the direction input component
     */ get direction() {
        return this._inputs[1];
    }
    /**
     * Gets the output component
     */ get output() {
        return this._outputs[0];
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "UpdateDirectionBlock";
    }
    /**
     * Builds the block
     * @param state defines the current build state
     */ _build(state) {
        const system = this.particle.getConnectedValue(state);
        this.output._storedValue = system;
        if (!this.direction.isConnected) {
            return;
        }
        const processDirection = (particle)=>{
            state.particleContext = particle;
            state.systemContext = system;
            particle.direction.copyFrom(this.direction.getConnectedValue(state));
        };
        const directionProcessing = {
            process: processDirection,
            previousItem: null,
            nextItem: null
        };
        if (system._updateQueueStart) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Queue$2f$executionQueue$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_ConnectAtTheEnd"])(directionProcessing, system._updateQueueStart);
        } else {
            system._updateQueueStart = directionProcessing;
        }
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.UpdateDirectionBlock", UpdateDirectionBlock); //# sourceMappingURL=updateDirectionBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Update/updateSizeBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UpdateSizeBlock",
    ()=>UpdateSizeBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$nodeParticleBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/nodeParticleBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Enums/nodeParticleBlockConnectionPointTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Queue$2f$executionQueue$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Queue/executionQueue.js [app-ssr] (ecmascript)");
;
;
;
;
class UpdateSizeBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$nodeParticleBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlock"] {
    /**
     * Create a new UpdateSizeBlock
     * @param name defines the block name
     */ constructor(name){
        super(name);
        this.registerInput("particle", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Particle);
        this.registerInput("size", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Float);
        this.registerOutput("output", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Particle);
    }
    /**
     * Gets the particle component
     */ get particle() {
        return this._inputs[0];
    }
    /**
     * Gets the size input component
     */ get size() {
        return this._inputs[1];
    }
    /**
     * Gets the output component
     */ get output() {
        return this._outputs[0];
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "UpdateSizeBlock";
    }
    /**
     * Builds the block
     * @param state defines the current build state
     */ _build(state) {
        const system = this.particle.getConnectedValue(state);
        this.output._storedValue = system;
        if (!this.size.isConnected) {
            return;
        }
        const processSize = (particle)=>{
            state.particleContext = particle;
            state.systemContext = system;
            particle.size = this.size.getConnectedValue(state);
        };
        const sizeProcessing = {
            process: processSize,
            previousItem: null,
            nextItem: null
        };
        if (system._updateQueueStart) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Queue$2f$executionQueue$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_ConnectAtTheEnd"])(sizeProcessing, system._updateQueueStart);
        } else {
            system._updateQueueStart = sizeProcessing;
        }
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.UpdateSizeBlock", UpdateSizeBlock); //# sourceMappingURL=updateSizeBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/nodeParticleSystemSet.helper.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConvertToNodeParticleSystemSetAsync",
    ()=>ConvertToNodeParticleSystemSetAsync
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$nodeParticleSystemSet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/nodeParticleSystemSet.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleContextualSources$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Enums/nodeParticleContextualSources.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleSystemSources$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Enums/nodeParticleSystemSources.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleConverterBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/particleConverterBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleFloatToIntBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/particleFloatToIntBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleGradientBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/particleGradientBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleGradientValueBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/particleGradientValueBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleInputBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/particleInputBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleMathBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/particleMathBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleRandomBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/particleRandomBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleSourceTextureBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/particleSourceTextureBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleVectorLengthBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/particleVectorLengthBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$systemBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/systemBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Conditions$2f$particleConditionBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Conditions/particleConditionBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Emitters$2f$createParticleBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Emitters/createParticleBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Emitters$2f$boxShapeBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Emitters/boxShapeBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Emitters$2f$coneShapeBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Emitters/coneShapeBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Emitters$2f$cylinderShapeBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Emitters/cylinderShapeBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Emitters$2f$customShapeBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Emitters/customShapeBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Emitters$2f$meshShapeBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Emitters/meshShapeBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Emitters$2f$pointShapeBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Emitters/pointShapeBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Emitters$2f$sphereShapeBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Emitters/sphereShapeBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Update$2f$updateAngleBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Update/updateAngleBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Update$2f$updateColorBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Update/updateColorBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Update$2f$updateDirectionBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Update/updateDirectionBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Update$2f$updatePositionBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Update/updatePositionBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Update$2f$updateSizeBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Update/updateSizeBlock.js [app-ssr] (ecmascript)");
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
;
;
;
;
;
;
;
async function ConvertToNodeParticleSystemSetAsync(name, particleSystemsList) {
    if (!particleSystemsList || !particleSystemsList.length) {
        return null;
    }
    const nodeParticleSystemSet = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$nodeParticleSystemSet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleSystemSet"](name);
    const promises = [];
    for (const particleSystem of particleSystemsList){
        promises.push(_ExtractDatafromParticleSystemAsync(nodeParticleSystemSet, particleSystem, {}));
    }
    await Promise.all(promises);
    return nodeParticleSystemSet;
}
async function _ExtractDatafromParticleSystemAsync(newSet, oldSystem, context) {
    // CreateParticle block group
    const createParticleOutput = _CreateParticleBlockGroup(oldSystem, context);
    // Emitter Shape block
    const shapeOutput = _EmitterShapeBlock(oldSystem);
    createParticleOutput.particle.connectTo(shapeOutput.particle);
    // UpdateParticle block group
    const updateParticleOutput = _UpdateParticleBlockGroup(shapeOutput.output, oldSystem, context);
    // System block
    const newSystem = _SystemBlockGroup(oldSystem, context);
    updateParticleOutput.connectTo(newSystem.particle);
    // Register
    newSet.systemBlocks.push(newSystem);
}
// ------------- CREATE PARTICLE FUNCTIONS -------------
// The creation of the different properties follows the order they are added to the CreationQueue in ThinParticleSystem:
// Lifetime, Emit Power, Size, Scale/StartSize, Angle, Color, Noise, ColorDead, Ramp, Sheet
function _CreateParticleBlockGroup(oldSystem, context) {
    // Create particle block
    const createParticleBlock = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Emitters$2f$createParticleBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreateParticleBlock"]("Create Particle");
    _CreateParticleLifetimeBlockGroup(oldSystem, context).connectTo(createParticleBlock.lifeTime);
    _CreateParticleEmitPowerBlockGroup(oldSystem).connectTo(createParticleBlock.emitPower);
    _CreateParticleSizeBlockGroup(oldSystem, context).connectTo(createParticleBlock.size);
    _CreateParticleScaleBlockGroup(oldSystem, context).connectTo(createParticleBlock.scale);
    _CreateParticleAngleBlockGroup(oldSystem).connectTo(createParticleBlock.angle);
    _CreateParticleColorBlockGroup(oldSystem, context).connectTo(createParticleBlock.color);
    // Dead color
    _CreateAndConnectInput("Dead Color", oldSystem.colorDead, createParticleBlock.colorDead);
    return createParticleBlock;
}
/**
 * Creates the group of blocks that represent the particle lifetime
 * @param oldSystem The old particle system to convert
 * @param context The context of the current conversion
 * @returns The output of the group of blocks that represent the particle lifetime
 */ function _CreateParticleLifetimeBlockGroup(oldSystem, context) {
    if (oldSystem.targetStopDuration && oldSystem._lifeTimeGradients && oldSystem._lifeTimeGradients.length > 0) {
        context.timeToStopTimeRatioBlockGroupOutput = _CreateTimeToStopTimeRatioBlockGroup(oldSystem, context);
        const gradientBlockGroupOutput = _CreateGradientBlockGroup(context.timeToStopTimeRatioBlockGroupOutput, oldSystem._lifeTimeGradients, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleRandomBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleRandomBlockLocks"].PerParticle, "Lifetime");
        return gradientBlockGroupOutput;
    } else {
        const randomLifetimeBlock = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleRandomBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleRandomBlock"]("Random Lifetime");
        _CreateAndConnectInput("Min Lifetime", oldSystem.minLifeTime, randomLifetimeBlock.min);
        _CreateAndConnectInput("Max Lifetime", oldSystem.maxLifeTime, randomLifetimeBlock.max);
        return randomLifetimeBlock.output;
    }
}
/**
 * Creates the group of blocks that represent the particle emit power
 * @param oldSystem The old particle system to convert
 * @returns The output of the group of blocks that represent the particle emit power
 */ function _CreateParticleEmitPowerBlockGroup(oldSystem) {
    const randomEmitPowerBlock = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleRandomBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleRandomBlock"]("Random Emit Power");
    _CreateAndConnectInput("Min Emit Power", oldSystem.minEmitPower, randomEmitPowerBlock.min);
    _CreateAndConnectInput("Max Emit Power", oldSystem.maxEmitPower, randomEmitPowerBlock.max);
    return randomEmitPowerBlock.output;
}
/**
 * Creates the group of blocks that represent the particle size
 * @param oldSystem The old particle system to convert
 * @param context The context of the current conversion
 * @returns The output of the group of blocks that represent the particle size
 */ function _CreateParticleSizeBlockGroup(oldSystem, context) {
    if (oldSystem._sizeGradients && oldSystem._sizeGradients.length > 0) {
        context.sizeGradientValue0Output = _CreateParticleInitialValueFromGradient(oldSystem._sizeGradients);
        return context.sizeGradientValue0Output;
    } else {
        const randomSizeBlock = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleRandomBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleRandomBlock"]("Random size");
        _CreateAndConnectInput("Min size", oldSystem.minSize, randomSizeBlock.min);
        _CreateAndConnectInput("Max size", oldSystem.maxSize, randomSizeBlock.max);
        return randomSizeBlock.output;
    }
}
/**
 * Creates the group of blocks that represent the particle scale
 * @param oldSystem The old particle system to convert
 * @param context The context of the current conversion
 * @returns The output of the group of blocks that represent the particle scale
 */ function _CreateParticleScaleBlockGroup(oldSystem, context) {
    // Create the random scale
    const randomScaleBlock = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleRandomBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleRandomBlock"]("Random Scale");
    _CreateAndConnectInput("Min Scale", new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"](oldSystem.minScaleX, oldSystem.minScaleY), randomScaleBlock.min);
    _CreateAndConnectInput("Max Scale", new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"](oldSystem.maxScaleX, oldSystem.maxScaleY), randomScaleBlock.max);
    if (oldSystem.targetStopDuration && oldSystem._startSizeGradients && oldSystem._startSizeGradients.length > 0) {
        // Create the start size gradient
        context.timeToStopTimeRatioBlockGroupOutput = _CreateTimeToStopTimeRatioBlockGroup(oldSystem, context);
        const gradientBlockGroupOutput = _CreateGradientBlockGroup(context.timeToStopTimeRatioBlockGroupOutput, oldSystem._startSizeGradients, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleRandomBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleRandomBlockLocks"].PerParticle, "Start Size");
        // Multiply the initial random scale by the start size gradient
        const multiplyScaleBlock = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleMathBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleMathBlock"]("Multiply Scale by Start Size Gradient");
        multiplyScaleBlock.operation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleMathBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleMathBlockOperations"].Multiply;
        randomScaleBlock.output.connectTo(multiplyScaleBlock.left);
        gradientBlockGroupOutput.connectTo(multiplyScaleBlock.right);
        return multiplyScaleBlock.output;
    } else {
        return randomScaleBlock.output;
    }
}
/**
 * Creates the group of blocks that represent the particle angle (rotation)
 * @param oldSystem The old particle system to convert
 * @returns The output of the group of blocks that represent the particle angle (rotation)
 */ function _CreateParticleAngleBlockGroup(oldSystem) {
    const randomRotationBlock = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleRandomBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleRandomBlock"]("Random Rotation");
    _CreateAndConnectInput("Min Rotation", oldSystem.minInitialRotation, randomRotationBlock.min);
    _CreateAndConnectInput("Max Rotation", oldSystem.maxInitialRotation, randomRotationBlock.max);
    return randomRotationBlock.output;
}
/**
 * Creates the group of blocks that represent the particle color
 * @param oldSystem The old particle system to convert
 * @param context The context of the current conversion
 * @returns The output of the group of blocks that represent the particle color
 */ function _CreateParticleColorBlockGroup(oldSystem, context) {
    if (oldSystem._colorGradients && oldSystem._colorGradients.length > 0) {
        context.colorGradientValue0Output = _CreateParticleInitialValueFromGradient(oldSystem._colorGradients);
        return context.colorGradientValue0Output;
    } else {
        const randomColorBlock = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleRandomBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleRandomBlock"]("Random color");
        _CreateAndConnectInput("Color 1", oldSystem.color1, randomColorBlock.min);
        _CreateAndConnectInput("Color 2", oldSystem.color2, randomColorBlock.max);
        return randomColorBlock.output;
    }
}
function _CreateParticleInitialValueFromGradient(gradients) {
    if (gradients.length === 0) {
        throw new Error("No gradients provided.");
    }
    const gradientStep = gradients[0];
    const value1 = gradientStep.factor1 ?? gradientStep.color1;
    const value2 = gradientStep.factor2 ?? gradientStep.color2;
    if (value2 !== undefined) {
        // Create a random between value1 and value2
        const randomBlock = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleRandomBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleRandomBlock"]("Random Value 0");
        randomBlock.lockMode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleRandomBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleRandomBlockLocks"].OncePerParticle;
        _CreateAndConnectInput("Value 1", value1, randomBlock.min);
        _CreateAndConnectInput("Value 2", value2, randomBlock.max);
        return randomBlock.output;
    } else {
        // Single value
        const sizeBlock = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleInputBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleInputBlock"]("Value");
        sizeBlock.value = value1;
        return sizeBlock.output;
    }
}
// ------------- EMITTER SHAPE FUNCTIONS -------------
function _EmitterShapeBlock(oldSystem) {
    const emitter = oldSystem.particleEmitterType;
    if (!emitter) {
        throw new Error("Particle system has no emitter type.");
    }
    let shapeBlock = null;
    switch(emitter.getClassName()){
        case "BoxParticleEmitter":
            {
                const source = emitter;
                shapeBlock = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Emitters$2f$boxShapeBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BoxShapeBlock"]("Box Shape");
                const target = shapeBlock;
                _CreateAndConnectInput("Direction 1", source.direction1, target.direction1);
                _CreateAndConnectInput("Direction 2", source.direction2, target.direction2);
                _CreateAndConnectInput("Min Emit Box", source.minEmitBox, target.minEmitBox);
                _CreateAndConnectInput("Max Emit Box", source.maxEmitBox, target.maxEmitBox);
                break;
            }
        case "ConeParticleEmitter":
            {
                const source = emitter;
                shapeBlock = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Emitters$2f$coneShapeBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConeShapeBlock"]("Cone Shape");
                const target = shapeBlock;
                target.emitFromSpawnPointOnly = source.emitFromSpawnPointOnly;
                _CreateAndConnectInput("Radius", source.radius, target.radius);
                _CreateAndConnectInput("Angle", source.angle, target.angle);
                _CreateAndConnectInput("Radius Range", source.radiusRange, target.radiusRange);
                _CreateAndConnectInput("Height Range", source.heightRange, target.heightRange);
                _CreateAndConnectInput("Direction Randomizer", source.directionRandomizer, target.directionRandomizer);
                break;
            }
        case "ConeDirectedParticleEmitter":
            {
                const source = emitter;
                shapeBlock = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Emitters$2f$coneShapeBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConeShapeBlock"]("Cone Shape");
                const target = shapeBlock;
                target.emitFromSpawnPointOnly = source.emitFromSpawnPointOnly;
                _CreateAndConnectInput("Radius", source.radius, target.radius);
                _CreateAndConnectInput("Angle", source.angle, target.angle);
                _CreateAndConnectInput("Radius Range", source.radiusRange, target.radiusRange);
                _CreateAndConnectInput("Height Range", source.heightRange, target.heightRange);
                _CreateAndConnectInput("Direction 1", source.direction1, target.direction1);
                _CreateAndConnectInput("Direction 2", source.direction2, target.direction2);
                break;
            }
        case "CustomParticleEmitter":
            {
                const source = emitter;
                shapeBlock = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Emitters$2f$customShapeBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CustomShapeBlock"]("Custom Shape");
                const target = shapeBlock;
                target.particlePositionGenerator = source.particlePositionGenerator;
                target.particleDestinationGenerator = source.particleDestinationGenerator;
                target.particleDirectionGenerator = source.particleDirectionGenerator;
                break;
            }
        case "CylinderParticleEmitter":
            {
                const source = emitter;
                shapeBlock = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Emitters$2f$cylinderShapeBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CylinderShapeBlock"]("Cylinder Shape");
                const target = shapeBlock;
                _CreateAndConnectInput("Height", source.height, target.height);
                _CreateAndConnectInput("Radius", source.radius, target.radius);
                _CreateAndConnectInput("Radius Range", source.radiusRange, target.radiusRange);
                _CreateAndConnectInput("Direction Randomizer", source.directionRandomizer, target.directionRandomizer);
                break;
            }
        case "CylinderDirectedParticleEmitter":
            {
                const source = emitter;
                shapeBlock = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Emitters$2f$cylinderShapeBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CylinderShapeBlock"]("Cylinder Shape");
                const target = shapeBlock;
                _CreateAndConnectInput("Height", source.height, target.height);
                _CreateAndConnectInput("Radius", source.radius, target.radius);
                _CreateAndConnectInput("Radius Range", source.radiusRange, target.radiusRange);
                _CreateAndConnectInput("Direction 1", source.direction1, target.direction1);
                _CreateAndConnectInput("Direction 2", source.direction2, target.direction2);
                break;
            }
        case "HemisphericParticleEmitter":
            {
                const source = emitter;
                shapeBlock = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Emitters$2f$sphereShapeBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SphereShapeBlock"]("Sphere Shape");
                const target = shapeBlock;
                target.isHemispheric = true;
                _CreateAndConnectInput("Radius", source.radius, target.radius);
                _CreateAndConnectInput("Radius Range", source.radiusRange, target.radiusRange);
                _CreateAndConnectInput("Direction Randomizer", source.directionRandomizer, target.directionRandomizer);
                break;
            }
        case "MeshParticleEmitter":
            {
                const source = emitter;
                shapeBlock = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Emitters$2f$meshShapeBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshShapeBlock"]("Mesh Shape");
                const target = shapeBlock;
                target.useMeshNormalsForDirection = source.useMeshNormalsForDirection;
                _CreateAndConnectInput("Direction 1", source.direction1, target.direction1);
                _CreateAndConnectInput("Direction 2", source.direction2, target.direction2);
                target.mesh = source.mesh;
                break;
            }
        case "PointParticleEmitter":
            {
                const source = emitter;
                shapeBlock = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Emitters$2f$pointShapeBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PointShapeBlock"]("Point Shape");
                const target = shapeBlock;
                _CreateAndConnectInput("Direction 1", source.direction1, target.direction1);
                _CreateAndConnectInput("Direction 2", source.direction2, target.direction2);
                break;
            }
        case "SphereParticleEmitter":
            {
                const source = emitter;
                shapeBlock = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Emitters$2f$sphereShapeBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SphereShapeBlock"]("Sphere Shape");
                const target = shapeBlock;
                _CreateAndConnectInput("Radius", source.radius, target.radius);
                _CreateAndConnectInput("Radius Range", source.radiusRange, target.radiusRange);
                _CreateAndConnectInput("Direction Randomizer", source.directionRandomizer, target.directionRandomizer);
                break;
            }
        case "SphereDirectedParticleEmitter":
            {
                const source = emitter;
                shapeBlock = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Emitters$2f$sphereShapeBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SphereShapeBlock"]("Sphere Shape");
                const target = shapeBlock;
                _CreateAndConnectInput("Radius", source.radius, target.radius);
                _CreateAndConnectInput("Radius Range", source.radiusRange, target.radiusRange);
                _CreateAndConnectInput("Direction1", source.direction1, target.direction1);
                _CreateAndConnectInput("Direction2", source.direction2, target.direction2);
                break;
            }
    }
    if (!shapeBlock) {
        throw new Error(`Unsupported particle emitter type: ${emitter.getClassName()}`);
    }
    return shapeBlock;
}
// ------------- UPDATE PARTICLE FUNCTIONS -------------
/**
 * Creates the group of blocks that represent the particle system update
 * The creation of the different properties follows the order they are added to the ProcessQueue in ThinParticleSystem:
 * Color, AngularSpeedGradients, AngularSpeed, VelocityGradients, Direction, LimitVelocityGradients, DragGradients, Position, Noise, SizeGradients, Gravity, RemapGradients
 * @param inputParticle The particle input connection point
 * @param oldSystem The old particle system to convert
 * @param context The runtime conversion context
 * @returns The output connection point after all updates have been applied
 */ function _UpdateParticleBlockGroup(inputParticle, oldSystem, context) {
    let updateBlockGroupOutput = inputParticle;
    updateBlockGroupOutput = _UpdateParticleColorBlockGroup(updateBlockGroupOutput, oldSystem._colorGradients, context);
    updateBlockGroupOutput = _UpdateParticleAngleBlockGroup(updateBlockGroupOutput, oldSystem, context);
    if (oldSystem._velocityGradients && oldSystem._velocityGradients.length > 0) {
        context.scaledDirection = _UpdateParticleVelocityGradientBlockGroup(oldSystem._velocityGradients, context);
    }
    if (oldSystem._dragGradients && oldSystem._dragGradients.length > 0) {
        context.scaledDirection = _UpdateParticleDragGradientBlockGroup(oldSystem._dragGradients, context);
    }
    updateBlockGroupOutput = _UpdateParticlePositionBlockGroup(updateBlockGroupOutput, oldSystem.isLocal, context);
    if (oldSystem._limitVelocityGradients && oldSystem._limitVelocityGradients.length > 0 && oldSystem.limitVelocityDamping !== 0) {
        updateBlockGroupOutput = _UpdateParticleVelocityLimitGradientBlockGroup(updateBlockGroupOutput, oldSystem._limitVelocityGradients, oldSystem.limitVelocityDamping, context);
    }
    if (oldSystem._sizeGradients && oldSystem._sizeGradients.length > 0) {
        updateBlockGroupOutput = _UpdateParticleSizeGradientBlockGroup(updateBlockGroupOutput, oldSystem._sizeGradients, context);
    }
    if (oldSystem.gravity.equalsToFloats(0, 0, 0) === false) {
        updateBlockGroupOutput = _UpdateParticleGravityBlockGroup(updateBlockGroupOutput, oldSystem.gravity);
    }
    return updateBlockGroupOutput;
}
/**
 * Creates the group of blocks that represent the particle color update
 * @param inputParticle The input particle to update
 * @param colorGradients The color gradients (if any)
 * @param context The context of the current conversion
 * @returns The output of the group of blocks that represent the particle color update
 */ function _UpdateParticleColorBlockGroup(inputParticle, colorGradients, context) {
    let colorCalculation = undefined;
    if (colorGradients && colorGradients.length > 0) {
        if (context.colorGradientValue0Output === undefined) {
            throw new Error("Initial color gradient values not found in context.");
        }
        context.ageToLifeTimeRatioBlockGroupOutput = _CreateAgeToLifeTimeRatioBlockGroup(context);
        colorCalculation = _CreateGradientBlockGroup(context.ageToLifeTimeRatioBlockGroupOutput, colorGradients, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleRandomBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleRandomBlockLocks"].OncePerParticle, "Color", [
            context.colorGradientValue0Output
        ]);
    } else {
        colorCalculation = _BasicColorUpdateBlockGroup();
    }
    // Create the color update block clamping alpha >= 0
    const colorUpdateBlock = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Update$2f$updateColorBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UpdateColorBlock"]("Color update");
    inputParticle.connectTo(colorUpdateBlock.particle);
    _ClampUpdateColorAlpha(colorCalculation).connectTo(colorUpdateBlock.color);
    return colorUpdateBlock.output;
}
/**
 * Creates the group of blocks that represent the particle angle update
 * @param inputParticle The input particle to update
 * @param oldSystem The old particle system to convert
 * @param context The context of the current conversion
 * @returns The output of the group of blocks that represent the particle color update
 */ function _UpdateParticleAngleBlockGroup(inputParticle, oldSystem, context) {
    // We will try to use gradients if they exist
    // If not, we will try to use min/max angular speed
    let angularSpeedCalculation = null;
    if (oldSystem._angularSpeedGradients && oldSystem._angularSpeedGradients.length > 0) {
        angularSpeedCalculation = _UpdateParticleAngularSpeedGradientBlockGroup(oldSystem._angularSpeedGradients, context);
    } else if (oldSystem.minAngularSpeed !== 0 || oldSystem.maxAngularSpeed !== 0) {
        angularSpeedCalculation = _UpdateParticleAngularSpeedBlockGroup(oldSystem.minAngularSpeed, oldSystem.maxAngularSpeed);
    }
    // If we have an angular speed calculation, then update the angle
    if (angularSpeedCalculation) {
        // Create the angular speed delta
        const angleSpeedDeltaOutput = _CreateDeltaModifiedInput("Angular Speed", angularSpeedCalculation);
        // Add it to the angle
        const addAngle = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleMathBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleMathBlock"]("Add Angular Speed to Angle");
        addAngle.operation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleMathBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleMathBlockOperations"].Add;
        _CreateAndConnectContextualSource("Angle", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleContextualSources$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleContextualSources"].Angle, addAngle.left);
        angleSpeedDeltaOutput.connectTo(addAngle.right);
        // Update the particle angle
        const updateAngle = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Update$2f$updateAngleBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UpdateAngleBlock"]("Angle Update with Angular Speed");
        inputParticle.connectTo(updateAngle.particle);
        addAngle.output.connectTo(updateAngle.angle);
        return updateAngle.output;
    } else {
        return inputParticle;
    }
}
/**
 * Creates the group of blocks that represent the particle velocity update
 * @param velocityGradients The velocity gradients
 * @param context The context of the current conversion
 * @returns The output of the group of blocks that represent the particle velocity update
 */ function _UpdateParticleVelocityGradientBlockGroup(velocityGradients, context) {
    context.ageToLifeTimeRatioBlockGroupOutput = _CreateAgeToLifeTimeRatioBlockGroup(context);
    // Generate the gradient
    const velocityValueOutput = _CreateGradientBlockGroup(context.ageToLifeTimeRatioBlockGroupOutput, velocityGradients, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleRandomBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleRandomBlockLocks"].OncePerParticle, "Velocity");
    // Update the direction scale based on the velocity
    const multiplyScaleByVelocity = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleMathBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleMathBlock"]("Multiply Direction Scale by Velocity");
    multiplyScaleByVelocity.operation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleMathBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleMathBlockOperations"].Multiply;
    velocityValueOutput.connectTo(multiplyScaleByVelocity.left);
    _CreateAndConnectContextualSource("Direction Scale", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleContextualSources$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleContextualSources"].DirectionScale, multiplyScaleByVelocity.right);
    // Update the particle direction scale
    const multiplyDirection = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleMathBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleMathBlock"]("Scaled Direction");
    multiplyDirection.operation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleMathBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleMathBlockOperations"].Multiply;
    multiplyScaleByVelocity.output.connectTo(multiplyDirection.left);
    _CreateAndConnectContextualSource("Direction", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleContextualSources$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleContextualSources"].Direction, multiplyDirection.right);
    // Store the new calculation of the scaled direction in the context
    context.scaledDirection = multiplyDirection.output;
    return multiplyDirection.output;
}
/**
 * Creates the group of blocks that represent the particle velocity limit update
 * @param inputParticle The input particle to update
 * @param velocityLimitGradients The velocity limit gradients
 * @param limitVelocityDamping The limit velocity damping factor
 * @param context The context of the current conversion
 * @returns The output of the group of blocks that represent the particle velocity limit update
 */ function _UpdateParticleVelocityLimitGradientBlockGroup(inputParticle, velocityLimitGradients, limitVelocityDamping, context) {
    context.ageToLifeTimeRatioBlockGroupOutput = _CreateAgeToLifeTimeRatioBlockGroup(context);
    // Calculate the current speed
    const currentSpeedBlock = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleVectorLengthBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleVectorLengthBlock"]("Current Speed");
    _CreateAndConnectContextualSource("Direction", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleContextualSources$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleContextualSources"].Direction, currentSpeedBlock.input);
    // Calculate the velocity limit from the gradient
    const velocityLimitValueOutput = _CreateGradientBlockGroup(context.ageToLifeTimeRatioBlockGroupOutput, velocityLimitGradients, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleRandomBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleRandomBlockLocks"].OncePerParticle, "Velocity Limit");
    // Blocks that will calculate the new velocity if over the limit
    const damped = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleMathBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleMathBlock"]("Damped Speed");
    damped.operation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleMathBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleMathBlockOperations"].Multiply;
    _CreateAndConnectContextualSource("Direction", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleContextualSources$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleContextualSources"].Direction, damped.left);
    _CreateAndConnectInput("Limit Velocity Damping", limitVelocityDamping, damped.right);
    // Compare current speed and limit
    const compareSpeed = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Conditions$2f$particleConditionBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleConditionBlock"]("Compare Speed to Limit");
    compareSpeed.test = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Conditions$2f$particleConditionBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleConditionBlockTests"].GreaterThan;
    currentSpeedBlock.output.connectTo(compareSpeed.left);
    velocityLimitValueOutput.connectTo(compareSpeed.right);
    damped.output.connectTo(compareSpeed.ifTrue);
    _CreateAndConnectContextualSource("Direction", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleContextualSources$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleContextualSources"].Direction, compareSpeed.ifFalse);
    // Update the direction based on the calculted value
    const updateDirection = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Update$2f$updateDirectionBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UpdateDirectionBlock"]("Direction Update");
    inputParticle.connectTo(updateDirection.particle);
    compareSpeed.output.connectTo(updateDirection.direction);
    return updateDirection.output;
}
/**
 * Creates the group of blocks that represent the particle drag update
 * @param dragGradients The drag gradients
 * @param context The context of the current conversion
 * @returns The output of the group of blocks that represent the particle drag update
 */ function _UpdateParticleDragGradientBlockGroup(dragGradients, context) {
    context.ageToLifeTimeRatioBlockGroupOutput = _CreateAgeToLifeTimeRatioBlockGroup(context);
    // Generate the gradient
    const dragValueOutput = _CreateGradientBlockGroup(context.ageToLifeTimeRatioBlockGroupOutput, dragGradients, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleRandomBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleRandomBlockLocks"].OncePerParticle, "Drag");
    // Calculate drag factor
    const oneMinusDragBlock = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleMathBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleMathBlock"]("1 - Drag");
    oneMinusDragBlock.operation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleMathBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleMathBlockOperations"].Subtract;
    _CreateAndConnectInput("One", 1, oneMinusDragBlock.left);
    dragValueOutput.connectTo(oneMinusDragBlock.right);
    // Multiply the scaled direction by drag factor
    const multiplyDirection = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleMathBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleMathBlock"]("Scaled Direction with Drag");
    multiplyDirection.operation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleMathBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleMathBlockOperations"].Multiply;
    oneMinusDragBlock.output.connectTo(multiplyDirection.left);
    if (context.scaledDirection === undefined) {
        _CreateAndConnectContextualSource("Scaled Direction", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleContextualSources$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleContextualSources"].ScaledDirection, multiplyDirection.right);
    } else {
        context.scaledDirection.connectTo(multiplyDirection.right);
    }
    // Store the new calculation of the scaled direction in the context
    context.scaledDirection = multiplyDirection.output;
    return multiplyDirection.output;
}
/**
 * Creates the group of blocks that represent the particle position update
 * @param inputParticle The input particle to update
 * @param isLocal Whether the particle coordinate system is local or not
 * @param context The context of the current conversion
 * @returns The output of the group of blocks that represent the particle position update
 */ function _UpdateParticlePositionBlockGroup(inputParticle, isLocal, context) {
    // Update the particle position
    const updatePosition = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Update$2f$updatePositionBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UpdatePositionBlock"]("Position Update");
    inputParticle.connectTo(updatePosition.particle);
    if (isLocal) {
        _CreateAndConnectContextualSource("Local Position Updated", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleContextualSources$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleContextualSources"].LocalPositionUpdated, updatePosition.position);
    } else {
        // Calculate the new position
        const addPositionBlock = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleMathBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleMathBlock"]("Add Position");
        addPositionBlock.operation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleMathBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleMathBlockOperations"].Add;
        _CreateAndConnectContextualSource("Position", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleContextualSources$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleContextualSources"].Position, addPositionBlock.left);
        if (context.scaledDirection === undefined) {
            _CreateAndConnectContextualSource("Scaled Direction", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleContextualSources$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleContextualSources"].ScaledDirection, addPositionBlock.right);
        } else {
            context.scaledDirection.connectTo(addPositionBlock.right);
        }
        addPositionBlock.output.connectTo(updatePosition.position);
    }
    return updatePosition.output;
}
/**
 * Creates the group of blocks that represent the particle size update
 * @param inputParticle The input particle to update
 * @param sizeGradients The size gradients (if any)
 * @param context The context of the current conversion
 * @returns The output of the group of blocks that represent the particle size update
 */ function _UpdateParticleSizeGradientBlockGroup(inputParticle, sizeGradients, context) {
    if (context.sizeGradientValue0Output === undefined) {
        throw new Error("Initial size gradient values not found in context.");
    }
    context.ageToLifeTimeRatioBlockGroupOutput = _CreateAgeToLifeTimeRatioBlockGroup(context);
    // Generate the gradient
    const sizeValueOutput = _CreateGradientBlockGroup(context.ageToLifeTimeRatioBlockGroupOutput, sizeGradients, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleRandomBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleRandomBlockLocks"].OncePerParticle, "Size", [
        context.sizeGradientValue0Output
    ]);
    // Create the update size
    const updateSizeBlock = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Update$2f$updateSizeBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UpdateSizeBlock"]("Size Update");
    inputParticle.connectTo(updateSizeBlock.particle);
    sizeValueOutput.connectTo(updateSizeBlock.size);
    return updateSizeBlock.output;
}
/**
 * Creates the group of blocks that represent the particle gravity update
 * @param inputParticle The input particle to update
 * @param gravity The gravity vector to apply
 * @returns The output of the group of blocks that represent the particle gravity update
 */ function _UpdateParticleGravityBlockGroup(inputParticle, gravity) {
    // Create the gravity delta
    const gravityDeltaOutput = _CreateDeltaModifiedInput("Gravity", gravity);
    // Add it to the direction
    const addDirectionBlock = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleMathBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleMathBlock"]("Add Gravity to Direction");
    addDirectionBlock.operation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleMathBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleMathBlockOperations"].Add;
    _CreateAndConnectContextualSource("Direction", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleContextualSources$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleContextualSources"].Direction, addDirectionBlock.left);
    gravityDeltaOutput.connectTo(addDirectionBlock.right);
    // Update the particle direction
    const updateDirection = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Update$2f$updateDirectionBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UpdateDirectionBlock"]("Direction Update with Gravity");
    inputParticle.connectTo(updateDirection.particle);
    addDirectionBlock.output.connectTo(updateDirection.direction);
    return updateDirection.output;
}
function _UpdateParticleAngularSpeedGradientBlockGroup(angularSpeedGradients, context) {
    context.ageToLifeTimeRatioBlockGroupOutput = _CreateAgeToLifeTimeRatioBlockGroup(context);
    // Generate the gradient
    const angularSpeedValueOutput = _CreateGradientBlockGroup(context.ageToLifeTimeRatioBlockGroupOutput, angularSpeedGradients, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleRandomBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleRandomBlockLocks"].OncePerParticle, "Angular Speed");
    return angularSpeedValueOutput;
}
function _UpdateParticleAngularSpeedBlockGroup(minAngularSpeed, maxAngularSpeed) {
    // Random value between for the angular speed of the particle
    const randomAngularSpeedBlock = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleRandomBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleRandomBlock"]("Random Angular Speed");
    randomAngularSpeedBlock.lockMode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleRandomBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleRandomBlockLocks"].OncePerParticle;
    _CreateAndConnectInput("Min Angular Speed", minAngularSpeed, randomAngularSpeedBlock.min);
    _CreateAndConnectInput("Max Angular Speed", maxAngularSpeed, randomAngularSpeedBlock.max);
    return randomAngularSpeedBlock.output;
}
function _BasicColorUpdateBlockGroup() {
    const addColorBlock = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleMathBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleMathBlock"]("Add Color");
    addColorBlock.operation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleMathBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleMathBlockOperations"].Add;
    _CreateAndConnectContextualSource("Color", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleContextualSources$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleContextualSources"].Color, addColorBlock.left);
    _CreateAndConnectContextualSource("Scaled Color Step", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleContextualSources$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleContextualSources"].ScaledColorStep, addColorBlock.right);
    return addColorBlock.output;
}
function _ClampUpdateColorAlpha(colorCalculationOutput) {
    // Decompose color to clamp alpha
    const decomposeColorBlock = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleConverterBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleConverterBlock"]("Decompose Color");
    colorCalculationOutput.connectTo(decomposeColorBlock.colorIn);
    // Clamp alpha to be >= 0
    const maxAlphaBlock = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleMathBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleMathBlock"]("Alpha >= 0");
    maxAlphaBlock.operation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleMathBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleMathBlockOperations"].Max;
    decomposeColorBlock.wOut.connectTo(maxAlphaBlock.left);
    _CreateAndConnectInput("Zero", 0, maxAlphaBlock.right);
    // Recompose color
    const composeColorBlock = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleConverterBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleConverterBlock"]("Compose Color");
    decomposeColorBlock.xyzOut.connectTo(composeColorBlock.xyzIn);
    maxAlphaBlock.output.connectTo(composeColorBlock.wIn);
    return composeColorBlock.colorOut;
}
// ------------- SYSTEM FUNCTIONS -------------
function _SystemBlockGroup(oldSystem, context) {
    const newSystem = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$systemBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SystemBlock"](oldSystem.name);
    newSystem.translationPivot.value = oldSystem.translationPivot;
    newSystem.textureMask.value = oldSystem.textureMask;
    newSystem.manualEmitCount = oldSystem.manualEmitCount;
    newSystem.blendMode = oldSystem.blendMode;
    newSystem.capacity = oldSystem.getCapacity();
    newSystem.startDelay = oldSystem.startDelay;
    newSystem.updateSpeed = oldSystem.updateSpeed;
    newSystem.preWarmCycles = oldSystem.preWarmCycles;
    newSystem.preWarmStepOffset = oldSystem.preWarmStepOffset;
    newSystem.isBillboardBased = oldSystem.isBillboardBased;
    newSystem.isLocal = oldSystem.isLocal;
    newSystem.disposeOnStop = oldSystem.disposeOnStop;
    _SystemEmitRateValue(oldSystem, newSystem, context);
    _SystemTextureBlock(oldSystem).connectTo(newSystem.texture);
    _SystemTargetStopDuration(oldSystem, newSystem, context);
    return newSystem;
}
function _SystemEmitRateValue(oldSystem, newSystem, context) {
    const emitGradients = oldSystem.getEmitRateGradients();
    if (emitGradients && emitGradients.length > 0 && oldSystem.targetStopDuration > 0) {
        // Create the emit gradients
        context.timeToStopTimeRatioBlockGroupOutput = _CreateTimeToStopTimeRatioBlockGroup(oldSystem, context);
        const gradientValue = _CreateGradientBlockGroup(context.timeToStopTimeRatioBlockGroupOutput, emitGradients, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleRandomBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleRandomBlockLocks"].PerSystem, "Emit Rate");
        // Round the value to an int
        const roundBlock = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleFloatToIntBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleFloatToIntBlock"]("Round to Int");
        roundBlock.operation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleFloatToIntBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleFloatToIntBlockOperations"].Round;
        gradientValue.connectTo(roundBlock.input);
        roundBlock.output.connectTo(newSystem.emitRate);
    } else {
        newSystem.emitRate.value = oldSystem.emitRate;
    }
}
function _SystemTextureBlock(oldSystem) {
    // Texture
    const textureBlock = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleSourceTextureBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleTextureSourceBlock"]("Texture");
    const url = oldSystem.particleTexture.url || "";
    if (url) {
        textureBlock.url = url;
    } else {
        textureBlock.sourceTexture = oldSystem.particleTexture;
    }
    return textureBlock.texture;
}
function _SystemTargetStopDuration(oldSystem, newSystem, context) {
    // If something else uses the target stop duration (like a gradient),
    // then the block is already created and stored in the context
    if (context.targetStopDurationBlockOutput) {
        context.targetStopDurationBlockOutput.connectTo(newSystem.targetStopDuration);
    } else {
        // If no one used it, do not create a block just set the value
        newSystem.targetStopDuration.value = oldSystem.targetStopDuration;
    }
}
// ------------- UTILITY FUNCTIONS -------------
function _CreateDeltaModifiedInput(name, value) {
    const multiplyBlock = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleMathBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleMathBlock"]("Multiply by Delta");
    multiplyBlock.operation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleMathBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleMathBlockOperations"].Multiply;
    if (value instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]) {
        _CreateAndConnectInput(name, value, multiplyBlock.left);
    } else {
        value.connectTo(multiplyBlock.left);
    }
    _CreateAndConnectSystemSource("Delta", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleSystemSources$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleSystemSources"].Delta, multiplyBlock.right);
    return multiplyBlock.output;
}
function _CreateAndConnectInput(inputBlockName, value, targetToConnectTo, inputType) {
    const input = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleInputBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleInputBlock"](inputBlockName, inputType);
    input.value = value;
    input.output.connectTo(targetToConnectTo);
}
function _CreateAndConnectContextualSource(contextualBlockName, contextSource, targetToConnectTo) {
    const input = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleInputBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleInputBlock"](contextualBlockName);
    input.contextualValue = contextSource;
    input.output.connectTo(targetToConnectTo);
}
function _CreateAndConnectSystemSource(systemBlockName, systemSource, targetToConnectTo) {
    const input = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleInputBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleInputBlock"](systemBlockName);
    input.systemSource = systemSource;
    input.output.connectTo(targetToConnectTo);
}
/**
 * Creates the target stop duration input block, as it can be shared in multiple places
 * This block is stored in the context so the same block is shared in the graph
 * @param oldSystem The old particle system to convert
 * @param context The context of the current conversion
 * @returns
 */ function _CreateTargetStopDurationInputBlock(oldSystem, context) {
    // If we have already created the target stop duration input block, return it
    if (context.targetStopDurationBlockOutput) {
        return context.targetStopDurationBlockOutput;
    }
    // Create the target stop duration input block if not already created
    const targetStopDurationInputBlock = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleInputBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleInputBlock"]("Target Stop Duration");
    targetStopDurationInputBlock.value = oldSystem.targetStopDuration;
    // Save the output in our context to avoid regenerating it again
    context.targetStopDurationBlockOutput = targetStopDurationInputBlock.output;
    return context.targetStopDurationBlockOutput;
}
/**
 * Create a group of blocks that calculates the ratio between the actual frame and the target stop duration, clamped between 0 and 1.
 * This is used to simulate the behavior of the old particle system where several particle gradient values are affected by the target stop duration.
 * This block group is stored in the context so the same group is shared in the graph
 * @param oldSystem The old particle system to convert
 * @param context The context of the current conversion
 * @returns The ratio block output connection point
 */ function _CreateTimeToStopTimeRatioBlockGroup(oldSystem, context) {
    // If we have already generated this group, return it
    if (context.timeToStopTimeRatioBlockGroupOutput) {
        return context.timeToStopTimeRatioBlockGroupOutput;
    }
    context.targetStopDurationBlockOutput = _CreateTargetStopDurationInputBlock(oldSystem, context);
    // Find the ratio between the actual frame and the target stop duration
    const ratio = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleMathBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleMathBlock"]("Frame/Stop Ratio");
    ratio.operation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleMathBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleMathBlockOperations"].Divide;
    _CreateAndConnectSystemSource("Actual Frame", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleSystemSources$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleSystemSources"].Time, ratio.left);
    context.targetStopDurationBlockOutput.connectTo(ratio.right);
    // Make sure values is >=0
    const clampMin = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleMathBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleMathBlock"]("Clamp Min 0");
    clampMin.operation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleMathBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleMathBlockOperations"].Max;
    _CreateAndConnectInput("Zero", 0, clampMin.left);
    ratio.output.connectTo(clampMin.right);
    // Make sure values is <=1
    const clampMax = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleMathBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleMathBlock"]("Clamp Max 1");
    clampMax.operation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleMathBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleMathBlockOperations"].Min;
    _CreateAndConnectInput("One", 1, clampMax.left);
    clampMin.output.connectTo(clampMax.right);
    // Save the group output in our context to avoid regenerating it again
    context.timeToStopTimeRatioBlockGroupOutput = clampMax.output;
    return context.timeToStopTimeRatioBlockGroupOutput;
}
function _CreateAgeToLifeTimeRatioBlockGroup(context) {
    // If we have already generated this group, return it
    if (context.ageToLifeTimeRatioBlockGroupOutput) {
        return context.ageToLifeTimeRatioBlockGroupOutput;
    }
    // Find the ratio between the age and the lifetime
    const ratio = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleMathBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleMathBlock"]("Age/LifeTime Ratio");
    ratio.operation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleMathBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleMathBlockOperations"].Divide;
    _CreateAndConnectContextualSource("Age", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleContextualSources$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleContextualSources"].Age, ratio.left);
    _CreateAndConnectContextualSource("LifeTime", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleContextualSources$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleContextualSources"].Lifetime, ratio.right);
    // Save the group output in our context to avoid regenerating it again
    context.ageToLifeTimeRatioBlockGroupOutput = ratio.output;
    return ratio.output;
}
/**
 * Creates the blocks that represent a gradient
 * @param gradientSelector The value that determines which gradient to use
 * @param gradientValues The list of gradient values
 * @param randomLockMode The type of random to use for the gradient values
 * @param prefix The prefix to use for naming the blocks
 * @param initialValues Optional initial values to connect to the gradient inputs that were calculated during other steps of the conversion
 * @returns The output connection point of the gradient block
 */ function _CreateGradientBlockGroup(gradientSelector, gradientValues, randomLockMode, prefix, initialValues = []) {
    // Create the gradient block and connect the value that controls the gradient selection
    const gradientBlock = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleGradientBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleGradientBlock"](prefix + " Gradient Block");
    gradientSelector.connectTo(gradientBlock.gradient);
    // If initial values are provided, we use them instead of the values in the gradientValues array
    // These means this values were already transformed into blocks on a previous step of the conversion and we must reuse them
    for(let i = 0; i < initialValues.length; i++){
        const reference = i < gradientValues.length ? gradientValues[i].gradient : 1;
        const gradientValueBlock = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleGradientValueBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleGradientValueBlock"](prefix + " Gradient Value " + i);
        gradientValueBlock.reference = reference;
        initialValues[i].connectTo(gradientValueBlock.value);
        gradientValueBlock.output.connectTo(gradientBlock.inputs[i + 1]);
    }
    // Create the gradient values
    for(let i = 0 + initialValues.length; i < gradientValues.length; i++){
        const gradientValueBlockGroupOutput = _CreateGradientValueBlockGroup(gradientValues[i], randomLockMode, prefix, i);
        gradientValueBlockGroupOutput.connectTo(gradientBlock.inputs[i + 1]);
    }
    return gradientBlock.output;
}
/**
 * Creates the blocks that represent a gradient value
 * This can be either a single value or a random between two values
 * @param gradientStep The gradient step data
 * @param randomLockMode The lock mode to use for random values
 * @param prefix The prefix to use for naming the blocks
 * @param index The index of the gradient step
 * @returns The output connection point of the gradient value block
 */ function _CreateGradientValueBlockGroup(gradientStep, randomLockMode, prefix, index) {
    const gradientValueBlock = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleGradientValueBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleGradientValueBlock"](prefix + " Gradient Value " + index);
    gradientValueBlock.reference = gradientStep.gradient;
    const value1 = gradientStep.factor1 ?? gradientStep.color1;
    const value2 = gradientStep.factor2 ?? gradientStep.color2;
    if (value2 !== undefined) {
        // Create a random between value1 and value2
        const randomBlock = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleRandomBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleRandomBlock"]("Random Value " + index);
        randomBlock.lockMode = randomLockMode;
        _CreateAndConnectInput("Value 1", value1, randomBlock.min);
        _CreateAndConnectInput("Value 2", value2, randomBlock.max);
        randomBlock.output.connectTo(gradientValueBlock.value);
    } else {
        // Single value
        _CreateAndConnectInput("Value", value1, gradientValueBlock.value);
    }
    return gradientValueBlock.output;
} //# sourceMappingURL=nodeParticleSystemSet.helper.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/particleLerpBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ParticleLerpBlock",
    ()=>ParticleLerpBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$nodeParticleBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/nodeParticleBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Enums/nodeParticleBlockConnectionPointTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.color.js [app-ssr] (ecmascript)");
;
;
;
;
;
class ParticleLerpBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$nodeParticleBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlock"] {
    /**
     * Creates a new ParticleLerpBlock
     * @param name defines the block name
     */ constructor(name){
        super(name);
        this.registerInput("left", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].AutoDetect);
        this.registerInput("right", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].AutoDetect);
        this.registerInput("gradient", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Float, true, 0, 0, 1);
        this.registerOutput("output", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].BasedOnInput);
        this._outputs[0]._typeConnectionSource = this._inputs[0];
        this._linkConnectionTypes(0, 1);
        this._inputs[0].addExcludedConnectionPointFromAllowedTypes(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Float | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Int | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Vector2 | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Vector3 | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Color4);
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "ParticleLerpBlock";
    }
    /**
     * Gets the left operand input component
     */ get left() {
        return this._inputs[0];
    }
    /**
     * Gets the right operand input component
     */ get right() {
        return this._inputs[1];
    }
    /**
     * Gets the gradient operand input component
     */ get gradient() {
        return this._inputs[2];
    }
    /**
     * Gets the output component
     */ get output() {
        return this._outputs[0];
    }
    _build() {
        if (!this.left.isConnected || !this.right.isConnected) {
            this.output._storedFunction = null;
            this.output._storedValue = null;
            return;
        }
        const func = (gradient, left, right)=>{
            return (1 - gradient) * left + gradient * right;
        };
        this.output._storedFunction = (state)=>{
            const left = this.left.getConnectedValue(state);
            const right = this.right.getConnectedValue(state);
            const gradient = this.gradient.getConnectedValue(state);
            switch(this.left.type){
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Int:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Float:
                    {
                        return func(gradient, left, right);
                    }
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Vector2:
                    {
                        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"](func(gradient, left.x, right.x), func(gradient, left.y, right.y));
                    }
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Vector3:
                    {
                        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](func(gradient, left.x, right.x), func(gradient, left.y, right.y), func(gradient, left.z, right.z));
                    }
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Color4:
                    {
                        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color4"](func(gradient, left.r, right.r), func(gradient, left.g, right.g), func(gradient, left.b, right.b), func(gradient, left.a, right.a));
                    }
            }
            return 0;
        };
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.ParticleLerpBlock", ParticleLerpBlock); //# sourceMappingURL=particleLerpBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Update/updateScaleBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UpdateScaleBlock",
    ()=>UpdateScaleBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Enums/nodeParticleBlockConnectionPointTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$nodeParticleBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/nodeParticleBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Queue$2f$executionQueue$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Queue/executionQueue.js [app-ssr] (ecmascript)");
;
;
;
;
class UpdateScaleBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$nodeParticleBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlock"] {
    /**
     * Create a new UpdateScaleBlock
     * @param name defines the block name
     */ constructor(name){
        super(name);
        this.registerInput("particle", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Particle);
        this.registerInput("scale", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Vector2);
        this.registerOutput("output", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Particle);
    }
    /**
     * Gets the particle component
     */ get particle() {
        return this._inputs[0];
    }
    /**
     * Gets the scale input component
     */ get scale() {
        return this._inputs[1];
    }
    /**
     * Gets the output component
     */ get output() {
        return this._outputs[0];
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "UpdateScaleBlock";
    }
    /**
     * Builds the block
     * @param state defines the current build state
     */ _build(state) {
        const system = this.particle.getConnectedValue(state);
        this.output._storedValue = system;
        if (!this.scale.isConnected) {
            return;
        }
        const processScale = (particle)=>{
            state.particleContext = particle;
            state.systemContext = system;
            particle.scale.copyFrom(this.scale.getConnectedValue(state));
        };
        const scaleProcessing = {
            process: processScale,
            previousItem: null,
            nextItem: null
        };
        if (system._updateQueueStart) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Queue$2f$executionQueue$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_ConnectAtTheEnd"])(scaleProcessing, system._updateQueueStart);
        } else {
            system._updateQueueStart = scaleProcessing;
        }
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.UpdateScaleBlock", UpdateScaleBlock); //# sourceMappingURL=updateScaleBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Update/updateAgeBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UpdateAgeBlock",
    ()=>UpdateAgeBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Enums/nodeParticleBlockConnectionPointTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$nodeParticleBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/nodeParticleBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Queue$2f$executionQueue$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Queue/executionQueue.js [app-ssr] (ecmascript)");
;
;
;
;
class UpdateAgeBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$nodeParticleBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlock"] {
    /**
     * Create a new UpdateAgeBlock
     * @param name defines the block name
     */ constructor(name){
        super(name);
        this.registerInput("particle", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Particle);
        this.registerInput("age", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Float);
        this.registerOutput("output", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Particle);
    }
    /**
     * Gets the particle component
     */ get particle() {
        return this._inputs[0];
    }
    /**
     * Gets the age input component
     */ get age() {
        return this._inputs[1];
    }
    /**
     * Gets the output component
     */ get output() {
        return this._outputs[0];
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "UpdateAgeBlock";
    }
    /**
     * Builds the block
     * @param state defines the current build state
     */ _build(state) {
        const system = this.particle.getConnectedValue(state);
        this.output._storedValue = system;
        if (!this.age.isConnected) {
            return;
        }
        const processAge = (particle)=>{
            state.particleContext = particle;
            state.systemContext = system;
            particle.age = this.age.getConnectedValue(state);
        };
        const ageProcessing = {
            process: processAge,
            previousItem: null,
            nextItem: null
        };
        if (system._updateQueueStart) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Queue$2f$executionQueue$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_ConnectAtTheEnd"])(ageProcessing, system._updateQueueStart);
        } else {
            system._updateQueueStart = ageProcessing;
        }
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.UpdateAgeBlock", UpdateAgeBlock); //# sourceMappingURL=updateAgeBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Update/basicPositionUpdateBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BasicPositionUpdateBlock",
    ()=>BasicPositionUpdateBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Enums/nodeParticleBlockConnectionPointTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$nodeParticleBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/nodeParticleBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Queue$2f$executionQueue$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Queue/executionQueue.js [app-ssr] (ecmascript)");
;
;
;
;
class BasicPositionUpdateBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$nodeParticleBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlock"] {
    /**
     * Create a new BasicPositionUpdateBlock
     * @param name defines the block name
     */ constructor(name){
        super(name);
        this.registerInput("particle", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Particle);
        this.registerOutput("output", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Particle);
    }
    /**
     * Gets the particle component
     */ get particle() {
        return this._inputs[0];
    }
    /**
     * Gets the output component
     */ get output() {
        return this._outputs[0];
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "BasicPositionUpdateBlock";
    }
    /**
     * Builds the block
     * @param state defines the current build state
     */ _build(state) {
        const system = this.particle.getConnectedValue(state);
        const processPosition = (particle)=>{
            state.particleContext = particle;
            state.systemContext = system;
            particle.direction.scaleToRef(particle._directionScale, particle._scaledDirection);
            particle.position.addInPlace(particle._scaledDirection);
        };
        const positionProcessing = {
            process: processPosition,
            previousItem: null,
            nextItem: null
        };
        if (system._updateQueueStart) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Queue$2f$executionQueue$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_ConnectAtTheEnd"])(positionProcessing, system._updateQueueStart);
        } else {
            system._updateQueueStart = positionProcessing;
        }
        this.output._storedValue = system;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.BasicPositionUpdateBlock", BasicPositionUpdateBlock); //# sourceMappingURL=basicPositionUpdateBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Update/basicSpriteUpdateBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BasicSpriteUpdateBlock",
    ()=>BasicSpriteUpdateBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Enums/nodeParticleBlockConnectionPointTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$nodeParticleBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/nodeParticleBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Queue$2f$executionQueue$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Queue/executionQueue.js [app-ssr] (ecmascript)");
;
;
;
;
class BasicSpriteUpdateBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$nodeParticleBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlock"] {
    /**
     * Create a new BasicSpriteUpdateBlock
     * @param name defines the block name
     */ constructor(name){
        super(name);
        this.registerInput("particle", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Particle);
        this.registerOutput("output", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Particle);
    }
    /**
     * Gets the particle component
     */ get particle() {
        return this._inputs[0];
    }
    /**
     * Gets the output component
     */ get output() {
        return this._outputs[0];
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "BasicSpriteUpdateBlock";
    }
    /**
     * Builds the block
     * @param state defines the current build state
     */ _build(state) {
        const system = this.particle.getConnectedValue(state);
        const processSprite = (particle)=>{
            state.particleContext = particle;
            state.systemContext = system;
            particle.updateCellIndex();
        };
        const spriteProcessing = {
            process: processSprite,
            previousItem: null,
            nextItem: null
        };
        if (system._updateQueueStart) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Queue$2f$executionQueue$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_ConnectAtTheEnd"])(spriteProcessing, system._updateQueueStart);
        } else {
            system._updateQueueStart = spriteProcessing;
        }
        this.output._storedValue = system;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.BasicSpriteUpdateBlock", BasicSpriteUpdateBlock); //# sourceMappingURL=basicSpriteUpdateBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Update/basicColorUpdateBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BasicColorUpdateBlock",
    ()=>BasicColorUpdateBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Enums/nodeParticleBlockConnectionPointTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$nodeParticleBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/nodeParticleBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Queue$2f$executionQueue$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Queue/executionQueue.js [app-ssr] (ecmascript)");
;
;
;
;
class BasicColorUpdateBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$nodeParticleBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlock"] {
    /**
     * Create a new BasicColorUpdateBlock
     * @param name defines the block name
     */ constructor(name){
        super(name);
        this.registerInput("particle", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Particle);
        this.registerOutput("output", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Particle);
    }
    /**
     * Gets the particle component
     */ get particle() {
        return this._inputs[0];
    }
    /**
     * Gets the output component
     */ get output() {
        return this._outputs[0];
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "BasicColorUpdateBlock";
    }
    /**
     * Builds the block
     * @param state defines the current build state
     */ _build(state) {
        const system = this.particle.getConnectedValue(state);
        const processColor = (particle)=>{
            state.particleContext = particle;
            state.systemContext = system;
            particle.colorStep.scaleToRef(system._scaledUpdateSpeed, system._scaledColorStep);
            particle.color.addInPlace(system._scaledColorStep);
            if (particle.color.a < 0) {
                particle.color.a = 0;
            }
        };
        const colorProcessing = {
            process: processColor,
            previousItem: null,
            nextItem: null
        };
        if (system._updateQueueStart) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Queue$2f$executionQueue$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_ConnectAtTheEnd"])(colorProcessing, system._updateQueueStart);
        } else {
            system._updateQueueStart = colorProcessing;
        }
        this.output._storedValue = system;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.BasicColorUpdateBlock", BasicColorUpdateBlock); //# sourceMappingURL=basicColorUpdateBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Update/updateSpriteCellIndexBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UpdateSpriteCellIndexBlock",
    ()=>UpdateSpriteCellIndexBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Enums/nodeParticleBlockConnectionPointTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$nodeParticleBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/nodeParticleBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Queue$2f$executionQueue$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Queue/executionQueue.js [app-ssr] (ecmascript)");
;
;
;
;
class UpdateSpriteCellIndexBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$nodeParticleBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlock"] {
    /**
     * Create a new UpdateSpriteCellIndexBlock
     * @param name defines the block name
     */ constructor(name){
        super(name);
        this.registerInput("particle", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Particle);
        this.registerInput("cellIndex", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Int);
        this.registerOutput("output", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Particle);
        this.cellIndex.acceptedConnectionPointTypes = [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Float
        ];
    }
    /**
     * Gets the particle component
     */ get particle() {
        return this._inputs[0];
    }
    /**
     * Gets the cellIndex input component
     */ get cellIndex() {
        return this._inputs[1];
    }
    /**
     * Gets the output component
     */ get output() {
        return this._outputs[0];
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "UpdateSpriteCellIndexBlock";
    }
    /**
     * Builds the block
     * @param state defines the current build state
     */ _build(state) {
        const system = this.particle.getConnectedValue(state);
        this.output._storedValue = system;
        if (!this.cellIndex.isConnected) {
            return;
        }
        const processSpriteCellIndex = (particle)=>{
            state.particleContext = particle;
            state.systemContext = system;
            particle.cellIndex = Math.floor(this.cellIndex.getConnectedValue(state));
        };
        const spriteCellIndexProcessing = {
            process: processSpriteCellIndex,
            previousItem: null,
            nextItem: null
        };
        if (system._updateQueueStart) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Queue$2f$executionQueue$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_ConnectAtTheEnd"])(spriteCellIndexProcessing, system._updateQueueStart);
        } else {
            system._updateQueueStart = spriteCellIndexProcessing;
        }
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.UpdateSpriteCellIndexBlock", UpdateSpriteCellIndexBlock); //# sourceMappingURL=updateSpriteCellIndexBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Update/updateFlowMapBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UpdateFlowMapBlock",
    ()=>UpdateFlowMapBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/tslib.es6.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Enums/nodeParticleBlockConnectionPointTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$nodeParticleBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/nodeParticleBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Queue$2f$executionQueue$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Queue/executionQueue.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$flowMap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/flowMap.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Decorators/nodeDecorator.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
class UpdateFlowMapBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$nodeParticleBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlock"] {
    /**
     * Create a new UpdateFlowMapBlock
     * @param name defines the block name
     */ constructor(name){
        super(name);
        /**
         * Gets or sets the strenght of the flow map effect
         */ this.strength = 1;
        this.registerInput("particle", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Particle);
        this.registerInput("flowMap", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Texture);
        this.registerOutput("output", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Particle);
    }
    /**
     * Gets the particle component
     */ get particle() {
        return this._inputs[0];
    }
    /**
     * Gets the flowMap input component
     */ get flowMap() {
        return this._inputs[1];
    }
    /**
     * Gets the output component
     */ get output() {
        return this._outputs[0];
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "UpdateFlowMapBlock";
    }
    /**
     * Builds the block
     * @param state defines the current build state
     */ _build(state) {
        const system = this.particle.getConnectedValue(state);
        const scene = state.scene;
        const flowMapTexture = this.flowMap.connectedPoint?.ownerBlock;
        let flowMap;
        // eslint-disable-next-line github/no-then
        void flowMapTexture.extractTextureContentAsync().then((textureContent)=>{
            if (!textureContent) {
                return;
            }
            flowMap = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$flowMap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowMap"](textureContent.width, textureContent.height, textureContent.data);
        });
        const processFlowMap = (particle)=>{
            const matrix = scene.getTransformMatrix();
            if (!flowMap) {
                // If the flow map is not ready, we skip processing
                return;
            }
            flowMap._processParticle(particle, this.strength * system._tempScaledUpdateSpeed, matrix);
        };
        const flowMapProcessing = {
            process: processFlowMap,
            previousItem: null,
            nextItem: null
        };
        if (system._updateQueueStart) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Queue$2f$executionQueue$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_ConnectAtTheEnd"])(flowMapProcessing, system._updateQueueStart);
        } else {
            system._updateQueueStart = flowMapProcessing;
        }
        this.output._storedValue = system;
    }
    serialize() {
        const serializationObject = super.serialize();
        serializationObject.strength = this.strength;
        return serializationObject;
    }
    _deserialize(serializationObject) {
        super._deserialize(serializationObject);
        this.strength = serializationObject.strength;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["editableInPropertyPage"])("strength", 1 /* PropertyTypeForEdition.Float */ , "ADVANCED", {
        embedded: true,
        notifiers: {
            rebuild: true
        },
        min: 0
    })
], UpdateFlowMapBlock.prototype, "strength", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.UpdateFlowMapBlock", UpdateFlowMapBlock); //# sourceMappingURL=updateFlowMapBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Update/updateAttractorBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UpdateAttractorBlock",
    ()=>UpdateAttractorBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Enums/nodeParticleBlockConnectionPointTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$nodeParticleBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/nodeParticleBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Queue$2f$executionQueue$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Queue/executionQueue.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
;
;
;
;
;
const ToAttractor = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Zero();
const Force = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Zero();
const ScaledForce = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Zero();
class UpdateAttractorBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$nodeParticleBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlock"] {
    /**
     * Create a new UpdateAttractorBlock
     * @param name defines the block name
     */ constructor(name){
        super(name);
        this.registerInput("particle", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Particle);
        this.registerInput("attractor", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Vector3, true, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Zero());
        this.registerInput("strength", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Float, true, 1);
        this.registerOutput("output", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Particle);
    }
    /**
     * Gets the particle component
     */ get particle() {
        return this._inputs[0];
    }
    /**
     * Gets the attractor input component
     */ get attractor() {
        return this._inputs[1];
    }
    /**
     * Gets the strength input component
     */ get strength() {
        return this._inputs[2];
    }
    /**
     * Gets the output component
     */ get output() {
        return this._outputs[0];
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "UpdateAttractorBlock";
    }
    /**
     * Builds the block
     * @param state defines the current build state
     */ _build(state) {
        const system = this.particle.getConnectedValue(state);
        const processAttractor = (particle)=>{
            const attractorPosition = this.attractor.getConnectedValue(state);
            const strength = this.strength.getConnectedValue(state);
            attractorPosition.subtractToRef(particle.position, ToAttractor);
            const distanceSquared = ToAttractor.lengthSquared() + 1; // Avoid going under 1.0
            ToAttractor.normalize().scaleToRef(strength / distanceSquared, Force);
            Force.scaleToRef(system._tempScaledUpdateSpeed, ScaledForce);
            particle.direction.addInPlace(ScaledForce); // Update particle velocity
        };
        const attractorProcessing = {
            process: processAttractor,
            previousItem: null,
            nextItem: null
        };
        if (system._updateQueueStart) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Queue$2f$executionQueue$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_ConnectAtTheEnd"])(attractorProcessing, system._updateQueueStart);
        } else {
            system._updateQueueStart = attractorProcessing;
        }
        this.output._storedValue = system;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.UpdateAttractorBlock", UpdateAttractorBlock); //# sourceMappingURL=updateAttractorBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Update/alignAngleBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AlignAngleBlock",
    ()=>AlignAngleBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/tslib.es6.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Enums/nodeParticleBlockConnectionPointTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$nodeParticleBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/nodeParticleBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Queue$2f$executionQueue$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Queue/executionQueue.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Decorators/nodeDecorator.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
class AlignAngleBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$nodeParticleBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlock"] {
    /**
     * Create a new AlignAngleBlock
     * @param name defines the block name
     */ constructor(name){
        super(name);
        /**
         * Gets or sets the strenght of the flow map effect
         */ this.alignment = Math.PI / 2; // Default to 90 degrees, aligning +Y with direction
        this.registerInput("particle", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Particle);
        this.registerOutput("output", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Particle);
    }
    /**
     * Gets the particle component
     */ get particle() {
        return this._inputs[0];
    }
    /**
     * Gets the output component
     */ get output() {
        return this._outputs[0];
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "AlignAngleBlock";
    }
    /**
     * Builds the block
     * @param state defines the current build state
     */ _build(state) {
        const system = this.particle.getConnectedValue(state);
        this.output._storedValue = system;
        const tempVector3 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]();
        const processAngle = (particle)=>{
            const cam = state.scene.activeCamera;
            if (!cam) {
                return;
            }
            const dir = particle.direction;
            const view = cam.getViewMatrix();
            const dirInView = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].TransformNormalToRef(dir, view, tempVector3);
            // Angle so sprite’s +Y aligns with projected direction
            const angle = Math.atan2(dirInView.y, dirInView.x) + this.alignment;
            particle.angle = angle; // radians
        };
        const angleProcessing = {
            process: processAngle,
            previousItem: null,
            nextItem: null
        };
        if (system._updateQueueStart) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Queue$2f$executionQueue$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_ConnectAtTheEnd"])(angleProcessing, system._updateQueueStart);
        } else {
            system._updateQueueStart = angleProcessing;
        }
    }
    serialize() {
        const serializationObject = super.serialize();
        serializationObject.alignment = this.alignment;
        return serializationObject;
    }
    _deserialize(serializationObject) {
        super._deserialize(serializationObject);
        if (serializationObject.alignment !== undefined) {
            this.alignment = serializationObject.alignment;
        }
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["editableInPropertyPage"])("alignment", 1 /* PropertyTypeForEdition.Float */ , "ADVANCED", {
        embedded: true,
        notifiers: {
            rebuild: true
        },
        min: -0,
        max: 2 * Math.PI
    })
], AlignAngleBlock.prototype, "alignment", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.AlignAngleBlock", AlignAngleBlock); //# sourceMappingURL=alignAngleBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Emitters/setupSpriteSheetBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SetupSpriteSheetBlock",
    ()=>SetupSpriteSheetBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/tslib.es6.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Decorators/nodeDecorator.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Enums/nodeParticleBlockConnectionPointTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$nodeParticleBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/nodeParticleBlock.js [app-ssr] (ecmascript)");
;
;
;
;
;
class SetupSpriteSheetBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$nodeParticleBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlock"] {
    /**
     * Creates a new SetupSpriteSheetBlock
     * @param name defines the block name
     */ constructor(name){
        super(name);
        /**
         * Gets or sets the start cell of the sprite sheet
         */ this.start = 0;
        /**
         * Gets or sets the end cell of the sprite sheet
         */ this.end = 8;
        /**
         * Gets or sets the width of the sprite sheet
         */ this.width = 64;
        /**
         * Gets or sets the height of the sprite sheet
         */ this.height = 64;
        /**
         * Gets or sets a boolean indicating if the sprite sheet should loop
         */ this.loop = false;
        /**
         * Gets or sets a boolean indicating if the sprite sheet should start at a random cell
         */ this.randomStartCell = false;
        this.registerInput("particle", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Particle);
        this.registerOutput("output", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Particle);
        this._outputs[0]._typeConnectionSource = this._inputs[0];
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "SetupSpriteSheetBlock";
    }
    /**
     * Gets the particle component
     */ get particle() {
        return this._inputs[0];
    }
    /**
     * Gets the output component
     */ get output() {
        return this._outputs[0];
    }
    _build(state) {
        super._build(state);
        const system = this.particle.getConnectedValue(state);
        system._isAnimationSheetEnabled = true;
        system.spriteCellWidth = this.width;
        system.spriteCellHeight = this.height;
        system.startSpriteCellID = this.start;
        system.endSpriteCellID = this.end;
        system.spriteRandomStartCell = this.randomStartCell;
        this.output._storedValue = system;
    }
    serialize() {
        const serializationObject = super.serialize();
        serializationObject.width = this.width;
        serializationObject.height = this.height;
        serializationObject.start = this.start;
        serializationObject.end = this.end;
        serializationObject.randomStartCell = this.randomStartCell;
        return serializationObject;
    }
    _deserialize(serializationObject) {
        super._deserialize(serializationObject);
        this.width = serializationObject.width;
        this.height = serializationObject.height;
        this.start = serializationObject.start;
        this.end = serializationObject.end;
        this.randomStartCell = serializationObject.randomStartCell;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["editableInPropertyPage"])("Start", 2 /* PropertyTypeForEdition.Int */ , "ADVANCED", {
        embedded: true,
        notifiers: {
            rebuild: true
        },
        min: 0
    })
], SetupSpriteSheetBlock.prototype, "start", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["editableInPropertyPage"])("End", 2 /* PropertyTypeForEdition.Int */ , "ADVANCED", {
        embedded: true,
        notifiers: {
            rebuild: true
        },
        min: 0
    })
], SetupSpriteSheetBlock.prototype, "end", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["editableInPropertyPage"])("Width", 1 /* PropertyTypeForEdition.Float */ , "ADVANCED", {
        embedded: true,
        notifiers: {
            rebuild: true
        },
        min: 0
    })
], SetupSpriteSheetBlock.prototype, "width", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["editableInPropertyPage"])("Height", 1 /* PropertyTypeForEdition.Float */ , "ADVANCED", {
        embedded: true,
        notifiers: {
            rebuild: true
        },
        min: 0
    })
], SetupSpriteSheetBlock.prototype, "height", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["editableInPropertyPage"])("Loop", 0 /* PropertyTypeForEdition.Boolean */ , "ADVANCED", {
        embedded: true,
        notifiers: {
            rebuild: true
        }
    })
], SetupSpriteSheetBlock.prototype, "loop", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["editableInPropertyPage"])("Random start cell", 0 /* PropertyTypeForEdition.Boolean */ , "ADVANCED", {
        embedded: true,
        notifiers: {
            rebuild: true
        }
    })
], SetupSpriteSheetBlock.prototype, "randomStartCell", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.SetupSpriteSheetBlock", SetupSpriteSheetBlock); //# sourceMappingURL=setupSpriteSheetBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Emitters/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Emitters$2f$createParticleBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Emitters/createParticleBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Emitters$2f$boxShapeBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Emitters/boxShapeBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Emitters$2f$coneShapeBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Emitters/coneShapeBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Emitters$2f$cylinderShapeBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Emitters/cylinderShapeBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Emitters$2f$customShapeBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Emitters/customShapeBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Emitters$2f$meshShapeBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Emitters/meshShapeBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Emitters$2f$pointShapeBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Emitters/pointShapeBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Emitters$2f$setupSpriteSheetBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Emitters/setupSpriteSheetBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Emitters$2f$sphereShapeBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Emitters/sphereShapeBlock.js [app-ssr] (ecmascript)"); //# sourceMappingURL=index.js.map
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
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/particleTrigonometryBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ParticleTrigonometryBlock",
    ()=>ParticleTrigonometryBlock,
    "ParticleTrigonometryBlockOperations",
    ()=>ParticleTrigonometryBlockOperations
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/tslib.es6.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Decorators/nodeDecorator.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$nodeParticleBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/nodeParticleBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Enums/nodeParticleBlockConnectionPointTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.color.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
var ParticleTrigonometryBlockOperations;
(function(ParticleTrigonometryBlockOperations) {
    /** Cos */ ParticleTrigonometryBlockOperations[ParticleTrigonometryBlockOperations["Cos"] = 0] = "Cos";
    /** Sin */ ParticleTrigonometryBlockOperations[ParticleTrigonometryBlockOperations["Sin"] = 1] = "Sin";
    /** Abs */ ParticleTrigonometryBlockOperations[ParticleTrigonometryBlockOperations["Abs"] = 2] = "Abs";
    /** Exp */ ParticleTrigonometryBlockOperations[ParticleTrigonometryBlockOperations["Exp"] = 3] = "Exp";
    /** Exp2 */ ParticleTrigonometryBlockOperations[ParticleTrigonometryBlockOperations["Exp2"] = 4] = "Exp2";
    /** Round */ ParticleTrigonometryBlockOperations[ParticleTrigonometryBlockOperations["Round"] = 5] = "Round";
    /** Floor */ ParticleTrigonometryBlockOperations[ParticleTrigonometryBlockOperations["Floor"] = 6] = "Floor";
    /** Ceiling */ ParticleTrigonometryBlockOperations[ParticleTrigonometryBlockOperations["Ceiling"] = 7] = "Ceiling";
    /** Square root */ ParticleTrigonometryBlockOperations[ParticleTrigonometryBlockOperations["Sqrt"] = 8] = "Sqrt";
    /** Log */ ParticleTrigonometryBlockOperations[ParticleTrigonometryBlockOperations["Log"] = 9] = "Log";
    /** Tangent */ ParticleTrigonometryBlockOperations[ParticleTrigonometryBlockOperations["Tan"] = 10] = "Tan";
    /** Arc tangent */ ParticleTrigonometryBlockOperations[ParticleTrigonometryBlockOperations["ArcTan"] = 11] = "ArcTan";
    /** Arc cosinus */ ParticleTrigonometryBlockOperations[ParticleTrigonometryBlockOperations["ArcCos"] = 12] = "ArcCos";
    /** Arc sinus */ ParticleTrigonometryBlockOperations[ParticleTrigonometryBlockOperations["ArcSin"] = 13] = "ArcSin";
    /** Sign */ ParticleTrigonometryBlockOperations[ParticleTrigonometryBlockOperations["Sign"] = 14] = "Sign";
    /** Negate */ ParticleTrigonometryBlockOperations[ParticleTrigonometryBlockOperations["Negate"] = 15] = "Negate";
    /** OneMinus */ ParticleTrigonometryBlockOperations[ParticleTrigonometryBlockOperations["OneMinus"] = 16] = "OneMinus";
    /** Reciprocal */ ParticleTrigonometryBlockOperations[ParticleTrigonometryBlockOperations["Reciprocal"] = 17] = "Reciprocal";
    /** ToDegrees */ ParticleTrigonometryBlockOperations[ParticleTrigonometryBlockOperations["ToDegrees"] = 18] = "ToDegrees";
    /** ToRadians */ ParticleTrigonometryBlockOperations[ParticleTrigonometryBlockOperations["ToRadians"] = 19] = "ToRadians";
    /** Fract */ ParticleTrigonometryBlockOperations[ParticleTrigonometryBlockOperations["Fract"] = 20] = "Fract";
})(ParticleTrigonometryBlockOperations || (ParticleTrigonometryBlockOperations = {}));
class ParticleTrigonometryBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$nodeParticleBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlock"] {
    /**
     * Creates a new GeometryTrigonometryBlock
     * @param name defines the block name
     */ constructor(name){
        super(name);
        /**
         * Gets or sets the operation applied by the block
         */ this.operation = ParticleTrigonometryBlockOperations.Cos;
        this.registerInput("input", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].AutoDetect);
        this.registerOutput("output", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].BasedOnInput);
        this._outputs[0]._typeConnectionSource = this._inputs[0];
        this._inputs[0].addExcludedConnectionPointFromAllowedTypes(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Float | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Int | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Vector2 | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Vector3 | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Color4);
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "ParticleTrigonometryBlock";
    }
    /**
     * Gets the input component
     */ get input() {
        return this._inputs[0];
    }
    /**
     * Gets the output component
     */ get output() {
        return this._outputs[0];
    }
    _build(state) {
        super._build(state);
        let func = null;
        switch(this.operation){
            case ParticleTrigonometryBlockOperations.Cos:
                {
                    func = (value)=>Math.cos(value);
                    break;
                }
            case ParticleTrigonometryBlockOperations.Sin:
                {
                    func = (value)=>Math.sin(value);
                    break;
                }
            case ParticleTrigonometryBlockOperations.Abs:
                {
                    func = (value)=>Math.abs(value);
                    break;
                }
            case ParticleTrigonometryBlockOperations.Exp:
                {
                    func = (value)=>Math.exp(value);
                    break;
                }
            case ParticleTrigonometryBlockOperations.Exp2:
                {
                    func = (value)=>Math.pow(2, value);
                    break;
                }
            case ParticleTrigonometryBlockOperations.Round:
                {
                    func = (value)=>Math.round(value);
                    break;
                }
            case ParticleTrigonometryBlockOperations.Floor:
                {
                    func = (value)=>Math.floor(value);
                    break;
                }
            case ParticleTrigonometryBlockOperations.Ceiling:
                {
                    func = (value)=>Math.ceil(value);
                    break;
                }
            case ParticleTrigonometryBlockOperations.Sqrt:
                {
                    func = (value)=>Math.sqrt(value);
                    break;
                }
            case ParticleTrigonometryBlockOperations.Log:
                {
                    func = (value)=>Math.log(value);
                    break;
                }
            case ParticleTrigonometryBlockOperations.Tan:
                {
                    func = (value)=>Math.tan(value);
                    break;
                }
            case ParticleTrigonometryBlockOperations.ArcTan:
                {
                    func = (value)=>Math.atan(value);
                    break;
                }
            case ParticleTrigonometryBlockOperations.ArcCos:
                {
                    func = (value)=>Math.acos(value);
                    break;
                }
            case ParticleTrigonometryBlockOperations.ArcSin:
                {
                    func = (value)=>Math.asin(value);
                    break;
                }
            case ParticleTrigonometryBlockOperations.Sign:
                {
                    func = (value)=>Math.sign(value);
                    break;
                }
            case ParticleTrigonometryBlockOperations.Negate:
                {
                    func = (value)=>-value;
                    break;
                }
            case ParticleTrigonometryBlockOperations.OneMinus:
                {
                    func = (value)=>1 - value;
                    break;
                }
            case ParticleTrigonometryBlockOperations.Reciprocal:
                {
                    func = (value)=>1 / value;
                    break;
                }
            case ParticleTrigonometryBlockOperations.ToRadians:
                {
                    func = (value)=>value * Math.PI / 180;
                    break;
                }
            case ParticleTrigonometryBlockOperations.ToDegrees:
                {
                    func = (value)=>value * 180 / Math.PI;
                    break;
                }
            case ParticleTrigonometryBlockOperations.Fract:
                {
                    func = (value)=>{
                        if (value >= 0) {
                            return value - Math.floor(value);
                        } else {
                            return value - Math.ceil(value);
                        }
                    };
                    break;
                }
        }
        if (!func) {
            this.output._storedFunction = null;
            this.output._storedValue = null;
            return;
        }
        switch(this.input.type){
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Int:
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Float:
                {
                    this.output._storedFunction = (state)=>{
                        const source = this.input.getConnectedValue(state);
                        return func(source);
                    };
                    break;
                }
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Vector2:
                {
                    this.output._storedFunction = (state)=>{
                        const source = this.input.getConnectedValue(state);
                        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"](func(source.x), func(source.y));
                    };
                    break;
                }
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Vector3:
                {
                    this.output._storedFunction = (state)=>{
                        const source = this.input.getConnectedValue(state);
                        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](func(source.x), func(source.y), func(source.z));
                    };
                    break;
                }
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Color4:
                {
                    this.output._storedFunction = (state)=>{
                        const source = this.input.getConnectedValue(state);
                        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color4"](func(source.r), func(source.g), func(source.b), func(source.a));
                    };
                    break;
                }
        }
        return this;
    }
    serialize() {
        const serializationObject = super.serialize();
        serializationObject.operation = this.operation;
        return serializationObject;
    }
    _deserialize(serializationObject) {
        super._deserialize(serializationObject);
        this.operation = serializationObject.operation;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["editableInPropertyPage"])("Operation", 5 /* PropertyTypeForEdition.List */ , "ADVANCED", {
        embedded: true,
        notifiers: {
            rebuild: true
        },
        options: [
            {
                label: "Cos",
                value: ParticleTrigonometryBlockOperations.Cos
            },
            {
                label: "Sin",
                value: ParticleTrigonometryBlockOperations.Sin
            },
            {
                label: "Abs",
                value: ParticleTrigonometryBlockOperations.Abs
            },
            {
                label: "Exp",
                value: ParticleTrigonometryBlockOperations.Exp
            },
            {
                label: "Exp2",
                value: ParticleTrigonometryBlockOperations.Exp2
            },
            {
                label: "Round",
                value: ParticleTrigonometryBlockOperations.Round
            },
            {
                label: "Floor",
                value: ParticleTrigonometryBlockOperations.Floor
            },
            {
                label: "Ceiling",
                value: ParticleTrigonometryBlockOperations.Ceiling
            },
            {
                label: "Sqrt",
                value: ParticleTrigonometryBlockOperations.Sqrt
            },
            {
                label: "Log",
                value: ParticleTrigonometryBlockOperations.Log
            },
            {
                label: "Tan",
                value: ParticleTrigonometryBlockOperations.Tan
            },
            {
                label: "ArcTan",
                value: ParticleTrigonometryBlockOperations.ArcTan
            },
            {
                label: "ArcCos",
                value: ParticleTrigonometryBlockOperations.ArcCos
            },
            {
                label: "ArcSin",
                value: ParticleTrigonometryBlockOperations.ArcSin
            },
            {
                label: "Sign",
                value: ParticleTrigonometryBlockOperations.Sign
            },
            {
                label: "Negate",
                value: ParticleTrigonometryBlockOperations.Negate
            },
            {
                label: "OneMinus",
                value: ParticleTrigonometryBlockOperations.OneMinus
            },
            {
                label: "Reciprocal",
                value: ParticleTrigonometryBlockOperations.Reciprocal
            },
            {
                label: "ToDegrees",
                value: ParticleTrigonometryBlockOperations.ToDegrees
            },
            {
                label: "ToRadians",
                value: ParticleTrigonometryBlockOperations.ToRadians
            },
            {
                label: "Fract",
                value: ParticleTrigonometryBlockOperations.Fract
            }
        ]
    })
], ParticleTrigonometryBlock.prototype, "operation", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.ParticleTrigonometryBlock", ParticleTrigonometryBlock); //# sourceMappingURL=particleTrigonometryBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/particleDebugBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ParticleDebugBlock",
    ()=>ParticleDebugBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/tslib.es6.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Decorators/nodeDecorator.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.functions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Enums/nodeParticleBlockConnectionPointTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$nodeParticleBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/nodeParticleBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/observable.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
class ParticleDebugBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$nodeParticleBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlock"] {
    /**
     * Create a new ParticleDebugBlock
     * @param name defines the block name
     */ constructor(name){
        super(name);
        /**
         * Gets the log entries
         */ this.log = [];
        /**
         * Gets or sets the number of logs to keep
         */ this.stackSize = 10;
        /**
         * Observable raised when data is collected
         */ this.onDataCollectedObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"](undefined, true);
        this._isDebug = true;
        this.registerInput("input", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].AutoDetect);
        this.registerOutput("output", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].BasedOnInput);
        this._outputs[0]._typeConnectionSource = this._inputs[0];
        this._inputs[0].excludedConnectionPointTypes.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].FloatGradient);
        this._inputs[0].excludedConnectionPointTypes.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Vector2Gradient);
        this._inputs[0].excludedConnectionPointTypes.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Vector3Gradient);
        this._inputs[0].excludedConnectionPointTypes.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Color4Gradient);
        this._inputs[0].excludedConnectionPointTypes.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].System);
        this._inputs[0].excludedConnectionPointTypes.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Particle);
        this._inputs[0].excludedConnectionPointTypes.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Texture);
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "ParticleDebugBlock";
    }
    /**
     * Gets the input component
     */ get input() {
        return this._inputs[0];
    }
    /**
     * Gets the output component
     */ get output() {
        return this._outputs[0];
    }
    _build(state) {
        if (!this.input.isConnected) {
            this.output._storedFunction = null;
            this.output._storedValue = null;
            return;
        }
        this.log = [];
        const func = (state)=>{
            const input = this.input.getConnectedValue(state);
            if (this.log.length >= this.stackSize) {
                return input;
            }
            if (input === null || input === undefined) {
                this.log.push([
                    "null",
                    ""
                ]);
                return input;
            }
            switch(this.input.type){
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Vector2:
                    this.log.push([
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2ToFixed"])(input, 4),
                        input.toString()
                    ]);
                    break;
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Vector3:
                    this.log.push([
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3ToFixed"])(input, 4),
                        input.toString()
                    ]);
                    break;
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Color4:
                    this.log.push([
                        `{R: ${input.r.toFixed(4)} G: ${input.g.toFixed(4)} B: ${input.b.toFixed(4)} A: ${input.a.toFixed(4)}}`,
                        input.toString()
                    ]);
                    break;
                default:
                    this.log.push([
                        input.toString(),
                        input.toString()
                    ]);
                    break;
            }
            this.onDataCollectedObservable.notifyObservers(this);
            return input;
        };
        if (this.output.isConnected) {
            this.output._storedFunction = func;
        } else {
            this.output._storedValue = func(state);
        }
    }
    serialize() {
        const serializationObject = super.serialize();
        serializationObject.stackSize = this.stackSize;
        return serializationObject;
    }
    _deserialize(serializationObject) {
        super._deserialize(serializationObject);
        this.stackSize = serializationObject.stackSize;
    }
    dispose() {
        this.onDataCollectedObservable.clear();
        super.dispose();
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["editableInPropertyPage"])("Reference", 2 /* PropertyTypeForEdition.Int */ , "ADVANCED", {
        embedded: false,
        notifiers: {
            rebuild: true
        },
        min: 1,
        max: 100
    })
], ParticleDebugBlock.prototype, "stackSize", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.ParticleDebugBlock", ParticleDebugBlock); //# sourceMappingURL=particleDebugBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/particleElbowBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ParticleElbowBlock",
    ()=>ParticleElbowBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Enums/nodeParticleBlockConnectionPointTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$nodeParticleBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/nodeParticleBlock.js [app-ssr] (ecmascript)");
;
;
;
class ParticleElbowBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$nodeParticleBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlock"] {
    /**
     * Creates a new ParticleElbowBlock
     * @param name defines the block name
     */ constructor(name){
        super(name);
        this.registerInput("input", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].AutoDetect);
        this.registerOutput("output", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].BasedOnInput);
        this._outputs[0]._typeConnectionSource = this._inputs[0];
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "ParticleElbowBlock";
    }
    /**
     * Gets the input component
     */ get input() {
        return this._inputs[0];
    }
    /**
     * Gets the output component
     */ get output() {
        return this._outputs[0];
    }
    _build(state) {
        super._build(state);
        const output = this._outputs[0];
        const input = this._inputs[0];
        output._storedFunction = (state)=>{
            return input.getConnectedValue(state);
        };
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.ParticleElbowBlock", ParticleElbowBlock); //# sourceMappingURL=particleElbowBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Teleport/particleTeleportInBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ParticleTeleportInBlock",
    ()=>ParticleTeleportInBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$nodeParticleBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/nodeParticleBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Enums/nodeParticleBlockConnectionPointTypes.js [app-ssr] (ecmascript)");
;
;
;
class ParticleTeleportInBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$nodeParticleBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlock"] {
    /** Gets the list of attached endpoints */ get endpoints() {
        return this._endpoints;
    }
    /**
     * Create a new ParticleTeleportInBlock
     * @param name defines the block name
     */ constructor(name){
        super(name);
        this._endpoints = [];
        this._isTeleportIn = true;
        this.registerInput("input", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].AutoDetect);
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "ParticleTeleportInBlock";
    }
    /**
     * Gets the input component
     */ get input() {
        return this._inputs[0];
    }
    /**
     * Checks if the current block is an ancestor of a given type
     * @param type defines the potential type to check
     * @returns true if block is a descendant
     */ isAnAncestorOfType(type) {
        if (this.getClassName() === type) {
            return true;
        }
        for (const endpoint of this.endpoints){
            if (endpoint.isAnAncestorOfType(type)) {
                return true;
            }
        }
        return false;
    }
    /**
     * Checks if the current block is an ancestor of a given block
     * @param block defines the potential descendant block to check
     * @returns true if block is a descendant
     */ isAnAncestorOf(block) {
        for (const endpoint of this.endpoints){
            if (endpoint === block) {
                return true;
            }
            if (endpoint.isAnAncestorOf(block)) {
                return true;
            }
        }
        return false;
    }
    /**
     * Add an enpoint to this block
     * @param endpoint define the endpoint to attach to
     */ attachToEndpoint(endpoint) {
        endpoint.detach();
        this._endpoints.push(endpoint);
        endpoint._entryPoint = this;
        endpoint._outputs[0]._typeConnectionSource = this._inputs[0];
        endpoint._tempEntryPointUniqueId = null;
        endpoint.name = "> " + this.name;
    }
    /**
     * Remove enpoint from this block
     * @param endpoint define the endpoint to remove
     */ detachFromEndpoint(endpoint) {
        const index = this._endpoints.indexOf(endpoint);
        if (index !== -1) {
            this._endpoints.splice(index, 1);
            endpoint._outputs[0]._typeConnectionSource = null;
            endpoint._entryPoint = null;
        }
    }
    _build() {
        for (const endpoint of this._endpoints){
            endpoint.output._storedFunction = (state)=>{
                return this.input.getConnectedValue(state);
            };
        }
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.ParticleTeleportInBlock", ParticleTeleportInBlock); //# sourceMappingURL=particleTeleportInBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Teleport/particleTeleportOutBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ParticleTeleportOutBlock",
    ()=>ParticleTeleportOutBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$nodeParticleBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/nodeParticleBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Enums/nodeParticleBlockConnectionPointTypes.js [app-ssr] (ecmascript)");
;
;
;
class ParticleTeleportOutBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$nodeParticleBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlock"] {
    /**
     * Create a new ParticleTeleportOutBlock
     * @param name defines the block name
     */ constructor(name){
        super(name);
        /** @internal */ this._entryPoint = null;
        /** @internal */ this._tempEntryPointUniqueId = null;
        this._isTeleportOut = true;
        this.registerOutput("output", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].BasedOnInput);
    }
    /**
     * Gets the entry point
     */ get entryPoint() {
        return this._entryPoint;
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "ParticleTeleportOutBlock";
    }
    /**
     * Gets the output component
     */ get output() {
        return this._outputs[0];
    }
    /** Detach from entry point */ detach() {
        if (!this._entryPoint) {
            return;
        }
        this._entryPoint.detachFromEndpoint(this);
    }
    _build() {
    // Do nothing
    // All work done by the emitter
    }
    _customBuildStep(state) {
        if (this.entryPoint) {
            this.entryPoint.build(state);
        }
    }
    /**
     * Clone the current block to a new identical block
     * @returns a copy of the current block
     */ clone() {
        const clone = super.clone();
        if (this.entryPoint) {
            this.entryPoint.attachToEndpoint(clone);
        }
        return clone;
    }
    /**
     * Serializes this block in a JSON representation
     * @returns the serialized block object
     */ serialize() {
        const serializationObject = super.serialize();
        serializationObject.entryPoint = this.entryPoint?.uniqueId ?? "";
        return serializationObject;
    }
    _deserialize(serializationObject) {
        super._deserialize(serializationObject);
        this._tempEntryPointUniqueId = serializationObject.entryPoint;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.ParticleTeleportOutBlock", ParticleTeleportOutBlock); //# sourceMappingURL=particleTeleportOutBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Triggers/particleTriggerBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ParticleTriggerBlock",
    ()=>ParticleTriggerBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/tslib.es6.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$nodeParticleBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/nodeParticleBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Enums/nodeParticleBlockConnectionPointTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Queue$2f$executionQueue$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Queue/executionQueue.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Decorators/nodeDecorator.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Triggers$2f$triggerTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Triggers/triggerTools.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
class ParticleTriggerBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$nodeParticleBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlock"] {
    /**
     * Create a new ParticleTriggerBlock
     * @param name defines the block name
     */ constructor(name){
        super(name);
        this._triggerCount = 0;
        /**
         * Gets or sets the emit rate
         */ this.limit = 5;
        /**
         * Gets or sets the emit rate
         */ this.delay = 250;
        this._previousOne = null;
        this.registerInput("input", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Particle);
        this.registerInput("condition", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Float, true, 0);
        this.registerInput("system", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].System);
        this.registerOutput("output", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Particle);
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "ParticleTriggerBlock";
    }
    /**
     * Gets the input component
     */ get input() {
        return this._inputs[0];
    }
    /**
     * Gets the condition input component
     */ get condition() {
        return this._inputs[1];
    }
    /**
     * Gets the target system input component
     */ get system() {
        return this._inputs[2];
    }
    /**
     * Gets the output component
     */ get output() {
        return this._outputs[0];
    }
    _build(state) {
        this._triggerCount = 0;
        const system = this.input.getConnectedValue(state);
        const processCondition = (particle)=>{
            state.particleContext = particle;
            state.systemContext = system;
            if (this.condition.getConnectedValue(state) !== 0) {
                if (this.limit === 0 || this._triggerCount < this.limit) {
                    const now = new Date().getTime();
                    if (this._previousOne && now - this._previousOne < this.delay) {
                        return; // Skip if the delay has not passed
                    }
                    this._triggerCount++;
                    this._previousOne = now;
                    // Trigger the target particle system
                    const targetSystem = this.system.getConnectedValue(state);
                    if (targetSystem) {
                        const clone = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Triggers$2f$triggerTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_TriggerSubEmitter"])(targetSystem, state.scene, particle.position);
                        clone.onDisposeObservable.addOnce(()=>{
                            this._triggerCount--;
                        });
                        system.onDisposeObservable.addOnce(()=>{
                            // Clean up the cloned system when the original system is disposed
                            clone.dispose();
                        });
                    }
                }
            }
        };
        const conditionProcessing = {
            process: processCondition,
            previousItem: null,
            nextItem: null
        };
        if (system._updateQueueStart) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Queue$2f$executionQueue$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_ConnectAtTheEnd"])(conditionProcessing, system._updateQueueStart);
        } else {
            system._updateQueueStart = conditionProcessing;
        }
        this.output._storedValue = system;
    }
    serialize() {
        const serializationObject = super.serialize();
        serializationObject.limit = this.limit;
        serializationObject.delay = this.delay;
        return serializationObject;
    }
    _deserialize(serializationObject) {
        super._deserialize(serializationObject);
        if (serializationObject.limit !== undefined) {
            this.limit = serializationObject.limit;
        }
        if (serializationObject.delay !== undefined) {
            this.delay = serializationObject.delay;
        }
    }
    dispose() {
        super.dispose();
        this._triggerCount = 0;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["editableInPropertyPage"])("Max simultaneous", 2 /* PropertyTypeForEdition.Int */ , "ADVANCED", {
        embedded: true,
        notifiers: {
            rebuild: true
        },
        min: 0
    })
], ParticleTriggerBlock.prototype, "limit", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["editableInPropertyPage"])("Delay between calls (ms)", 2 /* PropertyTypeForEdition.Int */ , "ADVANCED", {
        embedded: true,
        notifiers: {
            rebuild: true
        },
        min: 0
    })
], ParticleTriggerBlock.prototype, "delay", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.ParticleTriggerBlock", ParticleTriggerBlock); //# sourceMappingURL=particleTriggerBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/particleLocalVariableBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ParticleLocalVariableBlock",
    ()=>ParticleLocalVariableBlock,
    "ParticleLocalVariableBlockScope",
    ()=>ParticleLocalVariableBlockScope
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/tslib.es6.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Decorators/nodeDecorator.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Enums/nodeParticleBlockConnectionPointTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$nodeParticleBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/nodeParticleBlock.js [app-ssr] (ecmascript)");
;
;
;
;
;
var ParticleLocalVariableBlockScope;
(function(ParticleLocalVariableBlockScope) {
    ParticleLocalVariableBlockScope[ParticleLocalVariableBlockScope["Particle"] = 0] = "Particle";
    ParticleLocalVariableBlockScope[ParticleLocalVariableBlockScope["Loop"] = 1] = "Loop";
})(ParticleLocalVariableBlockScope || (ParticleLocalVariableBlockScope = {}));
class ParticleLocalVariableBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$nodeParticleBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlock"] {
    /**
     * Create a new ParticleLocalVariableBlock
     * @param name defines the block name
     */ constructor(name){
        super(name);
        /**
         * Gets or sets the scope used by the block
         */ this.scope = ParticleLocalVariableBlockScope.Particle;
        this._isDebug = true;
        this.registerInput("input", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].AutoDetect);
        this.registerOutput("output", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].BasedOnInput);
        this._outputs[0]._typeConnectionSource = this._inputs[0];
        this._inputs[0].excludedConnectionPointTypes.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].FloatGradient);
        this._inputs[0].excludedConnectionPointTypes.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Vector2Gradient);
        this._inputs[0].excludedConnectionPointTypes.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Vector3Gradient);
        this._inputs[0].excludedConnectionPointTypes.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Color4Gradient);
        this._inputs[0].excludedConnectionPointTypes.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].System);
        this._inputs[0].excludedConnectionPointTypes.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Particle);
        this._inputs[0].excludedConnectionPointTypes.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Texture);
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "ParticleLocalVariableBlock";
    }
    /**
     * Gets the input component
     */ get input() {
        return this._inputs[0];
    }
    /**
     * Gets the output component
     */ get output() {
        return this._outputs[0];
    }
    _build(state) {
        if (!this.input.isConnected) {
            this.output._storedFunction = null;
            this.output._storedValue = null;
            return;
        }
        let storedValue = null;
        let localId = -1;
        const func = (state)=>{
            if (!state.particleContext && !state.systemContext) {
                storedValue = null;
                return null;
            }
            const id = (this.scope === ParticleLocalVariableBlockScope.Particle ? state.particleContext?.id : state.systemContext?.getScene().getFrameId()) || -1;
            if (localId !== id) {
                localId = id;
                storedValue = null;
            }
            if (storedValue === null) {
                storedValue = this.input.getConnectedValue(state);
            }
            return storedValue;
        };
        if (this.output.isConnected) {
            this.output._storedFunction = func;
        } else {
            this.output._storedValue = func(state);
        }
    }
    serialize() {
        const serializationObject = super.serialize();
        serializationObject.scope = this.scope;
        return serializationObject;
    }
    _deserialize(serializationObject) {
        super._deserialize(serializationObject);
        this.scope = serializationObject.scope;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["editableInPropertyPage"])("Scope", 5 /* PropertyTypeForEdition.List */ , "ADVANCED", {
        embedded: true,
        notifiers: {
            rebuild: true
        },
        options: [
            {
                label: "Particle",
                value: ParticleLocalVariableBlockScope.Particle
            },
            {
                label: "Loop",
                value: ParticleLocalVariableBlockScope.Loop
            }
        ]
    })
], ParticleLocalVariableBlock.prototype, "scope", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.ParticleLocalVariableBlock", ParticleLocalVariableBlock); //# sourceMappingURL=particleLocalVariableBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/particleFresnelBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ParticleFresnelBlock",
    ()=>ParticleFresnelBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$nodeParticleBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/nodeParticleBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Enums/nodeParticleBlockConnectionPointTypes.js [app-ssr] (ecmascript)");
;
;
;
;
class ParticleFresnelBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$nodeParticleBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlock"] {
    /**
     * Creates a new ParticleFresnelBlock
     * @param name defines the block name
     */ constructor(name){
        super(name);
        this.registerInput("view", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Vector3);
        this.registerInput("normal", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Vector3);
        this.registerOutput("output", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"].Float);
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "ParticleFresnelBlock";
    }
    /**
     * Gets the view input component
     */ get view() {
        return this._inputs[0];
    }
    /**
     * Gets the normal input component
     */ get normal() {
        return this._inputs[1];
    }
    /**
     * Gets the gradient operand input component
     */ get gradient() {
        return this._inputs[2];
    }
    /**
     * Gets the output component
     */ get output() {
        return this._outputs[0];
    }
    _build() {
        if (!this.view.isConnected || !this.normal.isConnected) {
            this.output._storedFunction = null;
            this.output._storedValue = null;
            return;
        }
        this.output._storedFunction = (state)=>{
            const view = this.view.getConnectedValue(state);
            const normal = this.normal.getConnectedValue(state);
            const f0 = 0.04; // base reflectance at normal incidence (e.g. 0.04 for dielectrics)
            const nLen = normal.length();
            const vLen = view.length();
            // Guard against zero-length inputs
            if (nLen < 1e-8 || vLen < 1e-8) {
                return f0;
            }
            const cosTheta = Math.min(Math.max(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Dot(normal, view) / (nLen * vLen), 0.0), 1.0);
            // Schlick approximation
            const oneMinusCos = 1.0 - cosTheta;
            return f0 + (1.0 - f0) * Math.pow(oneMinusCos, 5.0);
        };
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.ParticleFresnelBlock", ParticleFresnelBlock); //# sourceMappingURL=particleFresnelBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/* eslint-disable @typescript-eslint/no-restricted-imports */ __turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$systemBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/systemBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleFloatToIntBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/particleFloatToIntBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleInputBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/particleInputBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleSourceTextureBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/particleSourceTextureBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleMathBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/particleMathBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleLerpBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/particleLerpBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Update$2f$updateDirectionBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Update/updateDirectionBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Update$2f$updatePositionBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Update/updatePositionBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Update$2f$updateColorBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Update/updateColorBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Update$2f$updateScaleBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Update/updateScaleBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Update$2f$updateSizeBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Update/updateSizeBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Update$2f$updateAngleBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Update/updateAngleBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Update$2f$updateAgeBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Update/updateAgeBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Update$2f$basicPositionUpdateBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Update/basicPositionUpdateBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Update$2f$basicSpriteUpdateBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Update/basicSpriteUpdateBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Update$2f$basicColorUpdateBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Update/basicColorUpdateBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Update$2f$updateSpriteCellIndexBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Update/updateSpriteCellIndexBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Update$2f$updateFlowMapBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Update/updateFlowMapBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Update$2f$updateAttractorBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Update/updateAttractorBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Update$2f$alignAngleBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Update/alignAngleBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Emitters$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Emitters/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleGradientValueBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/particleGradientValueBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleGradientBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/particleGradientBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleConverterBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/particleConverterBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleTrigonometryBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/particleTrigonometryBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleRandomBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/particleRandomBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleDebugBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/particleDebugBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleElbowBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/particleElbowBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Teleport$2f$particleTeleportInBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Teleport/particleTeleportInBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Teleport$2f$particleTeleportOutBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Teleport/particleTeleportOutBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Conditions$2f$particleConditionBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Conditions/particleConditionBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Triggers$2f$particleTriggerBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Triggers/particleTriggerBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleLocalVariableBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/particleLocalVariableBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleVectorLengthBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/particleVectorLengthBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleFresnelBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/particleFresnelBlock.js [app-ssr] (ecmascript)"); //# sourceMappingURL=index.js.map
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
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/* eslint-disable @typescript-eslint/no-restricted-imports */ __turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$nodeParticleBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/nodeParticleBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$nodeParticleSystemSet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/nodeParticleSystemSet.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$nodeParticleSystemSet$2e$helper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/nodeParticleSystemSet.helper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$nodeParticleBlockConnectionPoint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/nodeParticleBlockConnectionPoint.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$nodeParticleBuildState$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/nodeParticleBuildState.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Enums/nodeParticleBlockConnectionPointTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleContextualSources$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Enums/nodeParticleContextualSources.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleSystemSources$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Enums/nodeParticleSystemSources.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/index.js [app-ssr] (ecmascript) <locals>"); //# sourceMappingURL=index.js.map
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
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Emitters/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BoxShapeBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Emitters$2f$boxShapeBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BoxShapeBlock"],
    "ConeShapeBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Emitters$2f$coneShapeBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConeShapeBlock"],
    "CreateParticleBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Emitters$2f$createParticleBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreateParticleBlock"],
    "CustomShapeBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Emitters$2f$customShapeBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CustomShapeBlock"],
    "CylinderShapeBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Emitters$2f$cylinderShapeBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CylinderShapeBlock"],
    "MeshShapeBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Emitters$2f$meshShapeBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshShapeBlock"],
    "PointShapeBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Emitters$2f$pointShapeBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PointShapeBlock"],
    "SetupSpriteSheetBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Emitters$2f$setupSpriteSheetBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SetupSpriteSheetBlock"],
    "SphereShapeBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Emitters$2f$sphereShapeBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SphereShapeBlock"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Emitters$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Emitters/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Emitters$2f$createParticleBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Emitters/createParticleBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Emitters$2f$boxShapeBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Emitters/boxShapeBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Emitters$2f$coneShapeBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Emitters/coneShapeBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Emitters$2f$cylinderShapeBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Emitters/cylinderShapeBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Emitters$2f$customShapeBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Emitters/customShapeBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Emitters$2f$meshShapeBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Emitters/meshShapeBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Emitters$2f$pointShapeBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Emitters/pointShapeBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Emitters$2f$setupSpriteSheetBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Emitters/setupSpriteSheetBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Emitters$2f$sphereShapeBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Emitters/sphereShapeBlock.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AlignAngleBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Update$2f$alignAngleBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlignAngleBlock"],
    "BasicColorUpdateBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Update$2f$basicColorUpdateBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BasicColorUpdateBlock"],
    "BasicPositionUpdateBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Update$2f$basicPositionUpdateBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BasicPositionUpdateBlock"],
    "BasicSpriteUpdateBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Update$2f$basicSpriteUpdateBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BasicSpriteUpdateBlock"],
    "BoxShapeBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Emitters$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BoxShapeBlock"],
    "ConeShapeBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Emitters$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConeShapeBlock"],
    "CreateParticleBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Emitters$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreateParticleBlock"],
    "CustomShapeBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Emitters$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CustomShapeBlock"],
    "CylinderShapeBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Emitters$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CylinderShapeBlock"],
    "MeshShapeBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Emitters$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshShapeBlock"],
    "ParticleConditionBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Conditions$2f$particleConditionBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleConditionBlock"],
    "ParticleConditionBlockTests",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Conditions$2f$particleConditionBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleConditionBlockTests"],
    "ParticleConverterBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleConverterBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleConverterBlock"],
    "ParticleDebugBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleDebugBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleDebugBlock"],
    "ParticleElbowBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleElbowBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleElbowBlock"],
    "ParticleFloatToIntBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleFloatToIntBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleFloatToIntBlock"],
    "ParticleFloatToIntBlockOperations",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleFloatToIntBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleFloatToIntBlockOperations"],
    "ParticleFresnelBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleFresnelBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleFresnelBlock"],
    "ParticleGradientBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleGradientBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleGradientBlock"],
    "ParticleGradientValueBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleGradientValueBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleGradientValueBlock"],
    "ParticleInputBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleInputBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleInputBlock"],
    "ParticleLerpBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleLerpBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleLerpBlock"],
    "ParticleLocalVariableBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleLocalVariableBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleLocalVariableBlock"],
    "ParticleLocalVariableBlockScope",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleLocalVariableBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleLocalVariableBlockScope"],
    "ParticleMathBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleMathBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleMathBlock"],
    "ParticleMathBlockOperations",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleMathBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleMathBlockOperations"],
    "ParticleRandomBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleRandomBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleRandomBlock"],
    "ParticleRandomBlockLocks",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleRandomBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleRandomBlockLocks"],
    "ParticleTeleportInBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Teleport$2f$particleTeleportInBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleTeleportInBlock"],
    "ParticleTeleportOutBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Teleport$2f$particleTeleportOutBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleTeleportOutBlock"],
    "ParticleTextureSourceBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleSourceTextureBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleTextureSourceBlock"],
    "ParticleTriggerBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Triggers$2f$particleTriggerBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleTriggerBlock"],
    "ParticleTrigonometryBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleTrigonometryBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleTrigonometryBlock"],
    "ParticleTrigonometryBlockOperations",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleTrigonometryBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleTrigonometryBlockOperations"],
    "ParticleVectorLengthBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleVectorLengthBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleVectorLengthBlock"],
    "PointShapeBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Emitters$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PointShapeBlock"],
    "SetupSpriteSheetBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Emitters$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SetupSpriteSheetBlock"],
    "SphereShapeBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Emitters$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SphereShapeBlock"],
    "SystemBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$systemBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SystemBlock"],
    "UpdateAgeBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Update$2f$updateAgeBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UpdateAgeBlock"],
    "UpdateAngleBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Update$2f$updateAngleBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UpdateAngleBlock"],
    "UpdateAttractorBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Update$2f$updateAttractorBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UpdateAttractorBlock"],
    "UpdateColorBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Update$2f$updateColorBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UpdateColorBlock"],
    "UpdateDirectionBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Update$2f$updateDirectionBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UpdateDirectionBlock"],
    "UpdateFlowMapBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Update$2f$updateFlowMapBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UpdateFlowMapBlock"],
    "UpdatePositionBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Update$2f$updatePositionBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UpdatePositionBlock"],
    "UpdateScaleBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Update$2f$updateScaleBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UpdateScaleBlock"],
    "UpdateSizeBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Update$2f$updateSizeBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UpdateSizeBlock"],
    "UpdateSpriteCellIndexBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Update$2f$updateSpriteCellIndexBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UpdateSpriteCellIndexBlock"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$systemBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/systemBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleFloatToIntBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/particleFloatToIntBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleInputBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/particleInputBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleSourceTextureBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/particleSourceTextureBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleMathBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/particleMathBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleLerpBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/particleLerpBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Update$2f$updateDirectionBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Update/updateDirectionBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Update$2f$updatePositionBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Update/updatePositionBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Update$2f$updateColorBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Update/updateColorBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Update$2f$updateScaleBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Update/updateScaleBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Update$2f$updateSizeBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Update/updateSizeBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Update$2f$updateAngleBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Update/updateAngleBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Update$2f$updateAgeBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Update/updateAgeBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Update$2f$basicPositionUpdateBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Update/basicPositionUpdateBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Update$2f$basicSpriteUpdateBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Update/basicSpriteUpdateBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Update$2f$basicColorUpdateBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Update/basicColorUpdateBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Update$2f$updateSpriteCellIndexBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Update/updateSpriteCellIndexBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Update$2f$updateFlowMapBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Update/updateFlowMapBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Update$2f$updateAttractorBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Update/updateAttractorBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Update$2f$alignAngleBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Update/alignAngleBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Emitters$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Emitters/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleGradientValueBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/particleGradientValueBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleGradientBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/particleGradientBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleConverterBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/particleConverterBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleTrigonometryBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/particleTrigonometryBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleRandomBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/particleRandomBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleDebugBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/particleDebugBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleElbowBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/particleElbowBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Teleport$2f$particleTeleportInBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Teleport/particleTeleportInBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Teleport$2f$particleTeleportOutBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Teleport/particleTeleportOutBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Conditions$2f$particleConditionBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Conditions/particleConditionBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$Triggers$2f$particleTriggerBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/Triggers/particleTriggerBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleLocalVariableBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/particleLocalVariableBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleVectorLengthBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/particleVectorLengthBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$particleFresnelBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/particleFresnelBlock.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AlignAngleBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlignAngleBlock"],
    "BasicColorUpdateBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BasicColorUpdateBlock"],
    "BasicPositionUpdateBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BasicPositionUpdateBlock"],
    "BasicSpriteUpdateBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BasicSpriteUpdateBlock"],
    "BoxShapeBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BoxShapeBlock"],
    "ConeShapeBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConeShapeBlock"],
    "ConvertToNodeParticleSystemSetAsync",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$nodeParticleSystemSet$2e$helper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConvertToNodeParticleSystemSetAsync"],
    "CreateParticleBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreateParticleBlock"],
    "CustomShapeBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CustomShapeBlock"],
    "CylinderShapeBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CylinderShapeBlock"],
    "MeshShapeBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshShapeBlock"],
    "NodeParticleBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$nodeParticleBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlock"],
    "NodeParticleBlockConnectionPointTypes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBlockConnectionPointTypes"],
    "NodeParticleBuildState",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$nodeParticleBuildState$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleBuildState"],
    "NodeParticleConnectionPoint",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$nodeParticleBlockConnectionPoint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleConnectionPoint"],
    "NodeParticleConnectionPointCompatibilityStates",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$nodeParticleBlockConnectionPoint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleConnectionPointCompatibilityStates"],
    "NodeParticleConnectionPointDirection",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$nodeParticleBlockConnectionPoint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleConnectionPointDirection"],
    "NodeParticleContextualSources",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleContextualSources$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleContextualSources"],
    "NodeParticleSystemSet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$nodeParticleSystemSet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleSystemSet"],
    "NodeParticleSystemSources",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleSystemSources$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeParticleSystemSources"],
    "ParticleConditionBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleConditionBlock"],
    "ParticleConditionBlockTests",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleConditionBlockTests"],
    "ParticleConverterBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleConverterBlock"],
    "ParticleDebugBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleDebugBlock"],
    "ParticleElbowBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleElbowBlock"],
    "ParticleFloatToIntBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleFloatToIntBlock"],
    "ParticleFloatToIntBlockOperations",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleFloatToIntBlockOperations"],
    "ParticleFresnelBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleFresnelBlock"],
    "ParticleGradientBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleGradientBlock"],
    "ParticleGradientValueBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleGradientValueBlock"],
    "ParticleInputBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleInputBlock"],
    "ParticleLerpBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleLerpBlock"],
    "ParticleLocalVariableBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleLocalVariableBlock"],
    "ParticleLocalVariableBlockScope",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleLocalVariableBlockScope"],
    "ParticleMathBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleMathBlock"],
    "ParticleMathBlockOperations",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleMathBlockOperations"],
    "ParticleRandomBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleRandomBlock"],
    "ParticleRandomBlockLocks",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleRandomBlockLocks"],
    "ParticleTeleportInBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleTeleportInBlock"],
    "ParticleTeleportOutBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleTeleportOutBlock"],
    "ParticleTextureSourceBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleTextureSourceBlock"],
    "ParticleTriggerBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleTriggerBlock"],
    "ParticleTrigonometryBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleTrigonometryBlock"],
    "ParticleTrigonometryBlockOperations",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleTrigonometryBlockOperations"],
    "ParticleVectorLengthBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleVectorLengthBlock"],
    "PointShapeBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PointShapeBlock"],
    "SetupSpriteSheetBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SetupSpriteSheetBlock"],
    "SphereShapeBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SphereShapeBlock"],
    "SystemBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SystemBlock"],
    "UpdateAgeBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UpdateAgeBlock"],
    "UpdateAngleBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UpdateAngleBlock"],
    "UpdateAttractorBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UpdateAttractorBlock"],
    "UpdateColorBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UpdateColorBlock"],
    "UpdateDirectionBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UpdateDirectionBlock"],
    "UpdateFlowMapBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UpdateFlowMapBlock"],
    "UpdatePositionBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UpdatePositionBlock"],
    "UpdateScaleBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UpdateScaleBlock"],
    "UpdateSizeBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UpdateSizeBlock"],
    "UpdateSpriteCellIndexBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UpdateSpriteCellIndexBlock"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$nodeParticleBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/nodeParticleBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$nodeParticleSystemSet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/nodeParticleSystemSet.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$nodeParticleSystemSet$2e$helper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/nodeParticleSystemSet.helper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$nodeParticleBlockConnectionPoint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/nodeParticleBlockConnectionPoint.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$nodeParticleBuildState$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/nodeParticleBuildState.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Enums/nodeParticleBlockConnectionPointTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleContextualSources$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Enums/nodeParticleContextualSources.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Enums$2f$nodeParticleSystemSources$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Enums/nodeParticleSystemSources.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Particles$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Particles/Node/Blocks/index.js [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=dcdbf_%40babylonjs_core_Particles_Node_94726c62._.js.map