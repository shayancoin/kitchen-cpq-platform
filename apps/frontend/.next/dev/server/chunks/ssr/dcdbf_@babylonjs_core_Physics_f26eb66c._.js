module.exports = [
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/v1/physicsJoint.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * This is a holder class for the physics joint created by the physics plugin
 * It holds a set of functions to control the underlying joint
 * @see https://doc.babylonjs.com/features/featuresDeepDive/physics/usingPhysicsEngine
 */ __turbopack_context__.s([
    "DistanceJoint",
    ()=>DistanceJoint,
    "Hinge2Joint",
    ()=>Hinge2Joint,
    "HingeJoint",
    ()=>HingeJoint,
    "MotorEnabledJoint",
    ()=>MotorEnabledJoint,
    "PhysicsJoint",
    ()=>PhysicsJoint
]);
class PhysicsJoint {
    /**
     * Initializes the physics joint
     * @param type The type of the physics joint
     * @param jointData The data for the physics joint
     */ constructor(/**
     * The type of the physics joint
     */ type, /**
     * The data for the physics joint
     */ jointData){
        this.type = type;
        this.jointData = jointData;
        jointData.nativeParams = jointData.nativeParams || {};
    }
    /**
     * Gets the physics joint
     */ get physicsJoint() {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return this._physicsJoint;
    }
    /**
     * Sets the physics joint
     */ set physicsJoint(newJoint) {
        this._physicsJoint = newJoint;
    }
    /**
     * Sets the physics plugin
     */ set physicsPlugin(physicsPlugin) {
        this._physicsPlugin = physicsPlugin;
    }
    /**
     * Execute a function that is physics-plugin specific.
     * @param {Function} func the function that will be executed.
     *                        It accepts two parameters: the physics world and the physics joint
     */ executeNativeFunction(func) {
        func(this._physicsPlugin.world, this._physicsJoint);
    }
}
//TODO check if the native joints are the same
//Joint Types
/**
 * Distance-Joint type
 */ PhysicsJoint.DistanceJoint = 0;
/**
 * Hinge-Joint type
 */ PhysicsJoint.HingeJoint = 1;
/**
 * Ball-and-Socket joint type
 */ PhysicsJoint.BallAndSocketJoint = 2;
/**
 * Wheel-Joint type
 */ PhysicsJoint.WheelJoint = 3;
/**
 * Slider-Joint type
 */ PhysicsJoint.SliderJoint = 4;
//OIMO
/**
 * Prismatic-Joint type
 */ PhysicsJoint.PrismaticJoint = 5;
//
/**
 * Universal-Joint type
 * ENERGY FTW! (compare with this - @see http://ode-wiki.org/wiki/index.php?title=Manual:_Joint_Types_and_Functions)
 */ PhysicsJoint.UniversalJoint = 6;
/**
 * Hinge-Joint 2 type
 */ PhysicsJoint.Hinge2Joint = PhysicsJoint.WheelJoint;
//Cannon
/**
 * Point to Point Joint type.  Similar to a Ball-Joint.  Different in parameters
 */ PhysicsJoint.PointToPointJoint = 8;
//Cannon only at the moment
/**
 * Spring-Joint type
 */ PhysicsJoint.SpringJoint = 9;
/**
 * Lock-Joint type
 */ PhysicsJoint.LockJoint = 10;
class DistanceJoint extends PhysicsJoint {
    /**
     *
     * @param jointData The data for the Distance-Joint
     */ constructor(jointData){
        super(PhysicsJoint.DistanceJoint, jointData);
    }
    /**
     * Update the predefined distance.
     * @param maxDistance The maximum preferred distance
     * @param minDistance The minimum preferred distance
     */ updateDistance(maxDistance, minDistance) {
        this._physicsPlugin.updateDistanceJoint(this, maxDistance, minDistance);
    }
}
class MotorEnabledJoint extends PhysicsJoint {
    /**
     * Initializes the Motor-Enabled Joint
     * @param type The type of the joint
     * @param jointData The physical joint data for the joint
     */ constructor(type, jointData){
        super(type, jointData);
    }
    /**
     * Set the motor values.
     * Attention, this function is plugin specific. Engines won't react 100% the same.
     * @param force the force to apply
     * @param maxForce max force for this motor.
     */ setMotor(force, maxForce) {
        this._physicsPlugin.setMotor(this, force || 0, maxForce);
    }
    /**
     * Set the motor's limits.
     * Attention, this function is plugin specific. Engines won't react 100% the same.
     * @param upperLimit The upper limit of the motor
     * @param lowerLimit The lower limit of the motor
     */ setLimit(upperLimit, lowerLimit) {
        this._physicsPlugin.setLimit(this, upperLimit, lowerLimit);
    }
}
class HingeJoint extends MotorEnabledJoint {
    /**
     * Initializes the Hinge-Joint
     * @param jointData The joint data for the Hinge-Joint
     */ constructor(jointData){
        super(PhysicsJoint.HingeJoint, jointData);
    }
    /**
     * Set the motor values.
     * Attention, this function is plugin specific. Engines won't react 100% the same.
     * @param {number} force the force to apply
     * @param {number} maxForce max force for this motor.
     */ setMotor(force, maxForce) {
        this._physicsPlugin.setMotor(this, force || 0, maxForce);
    }
    /**
     * Set the motor's limits.
     * Attention, this function is plugin specific. Engines won't react 100% the same.
     * @param upperLimit The upper limit of the motor
     * @param lowerLimit The lower limit of the motor
     */ setLimit(upperLimit, lowerLimit) {
        this._physicsPlugin.setLimit(this, upperLimit, lowerLimit);
    }
}
class Hinge2Joint extends MotorEnabledJoint {
    /**
     * Initializes the Hinge2-Joint
     * @param jointData The joint data for the Hinge2-Joint
     */ constructor(jointData){
        super(PhysicsJoint.Hinge2Joint, jointData);
    }
    /**
     * Set the motor values.
     * Attention, this function is plugin specific. Engines won't react 100% the same.
     * @param targetSpeed the speed the motor is to reach
     * @param maxForce max force for this motor.
     * @param motorIndex motor's index, 0 or 1.
     */ setMotor(targetSpeed, maxForce, motorIndex = 0) {
        this._physicsPlugin.setMotor(this, targetSpeed || 0, maxForce, motorIndex);
    }
    /**
     * Set the motor limits.
     * Attention, this function is plugin specific. Engines won't react 100% the same.
     * @param upperLimit the upper limit
     * @param lowerLimit lower limit
     * @param motorIndex the motor's index, 0 or 1.
     */ setLimit(upperLimit, lowerLimit, motorIndex = 0) {
        this._physicsPlugin.setLimit(this, upperLimit, lowerLimit, motorIndex);
    }
} //# sourceMappingURL=physicsJoint.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/v1/physicsImpostor.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PhysicsImpostor",
    ()=>PhysicsImpostor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/logger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$arrayTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/arrayTools.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$abstractMesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/abstractMesh.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/mesh.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$physicsJoint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/v1/physicsJoint.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"]._PhysicsImpostorParser = function(scene, physicObject, jsonObject) {
    return new PhysicsImpostor(physicObject, jsonObject.physicsImpostor, {
        mass: jsonObject.physicsMass,
        friction: jsonObject.physicsFriction,
        restitution: jsonObject.physicsRestitution
    }, scene);
};
class PhysicsImpostor {
    /**
     * Specifies if the physics imposter is disposed
     */ get isDisposed() {
        return this._isDisposed;
    }
    /**
     * Gets the mass of the physics imposter
     */ get mass() {
        return this._physicsEngine ? this._physicsEngine.getPhysicsPlugin().getBodyMass(this) : 0;
    }
    set mass(value) {
        this.setMass(value);
    }
    /**
     * Gets the coefficient of friction
     */ get friction() {
        return this._physicsEngine ? this._physicsEngine.getPhysicsPlugin().getBodyFriction(this) : 0;
    }
    /**
     * Sets the coefficient of friction
     */ set friction(value) {
        if (!this._physicsEngine) {
            return;
        }
        this._physicsEngine.getPhysicsPlugin().setBodyFriction(this, value);
    }
    /**
     * Gets the coefficient of restitution
     */ get restitution() {
        return this._physicsEngine ? this._physicsEngine.getPhysicsPlugin().getBodyRestitution(this) : 0;
    }
    /**
     * Sets the coefficient of restitution
     */ set restitution(value) {
        if (!this._physicsEngine) {
            return;
        }
        this._physicsEngine.getPhysicsPlugin().setBodyRestitution(this, value);
    }
    /**
     * Gets the pressure of a soft body; only supported by the AmmoJSPlugin
     */ get pressure() {
        if (!this._physicsEngine) {
            return 0;
        }
        const plugin = this._physicsEngine.getPhysicsPlugin();
        if (!plugin.setBodyPressure) {
            return 0;
        }
        return plugin.getBodyPressure(this);
    }
    /**
     * Sets the pressure of a soft body; only supported by the AmmoJSPlugin
     */ set pressure(value) {
        if (!this._physicsEngine) {
            return;
        }
        const plugin = this._physicsEngine.getPhysicsPlugin();
        if (!plugin.setBodyPressure) {
            return;
        }
        plugin.setBodyPressure(this, value);
    }
    /**
     * Gets the stiffness of a soft body; only supported by the AmmoJSPlugin
     */ get stiffness() {
        if (!this._physicsEngine) {
            return 0;
        }
        const plugin = this._physicsEngine.getPhysicsPlugin();
        if (!plugin.getBodyStiffness) {
            return 0;
        }
        return plugin.getBodyStiffness(this);
    }
    /**
     * Sets the stiffness of a soft body; only supported by the AmmoJSPlugin
     */ set stiffness(value) {
        if (!this._physicsEngine) {
            return;
        }
        const plugin = this._physicsEngine.getPhysicsPlugin();
        if (!plugin.setBodyStiffness) {
            return;
        }
        plugin.setBodyStiffness(this, value);
    }
    /**
     * Gets the velocityIterations of a soft body; only supported by the AmmoJSPlugin
     */ get velocityIterations() {
        if (!this._physicsEngine) {
            return 0;
        }
        const plugin = this._physicsEngine.getPhysicsPlugin();
        if (!plugin.getBodyVelocityIterations) {
            return 0;
        }
        return plugin.getBodyVelocityIterations(this);
    }
    /**
     * Sets the velocityIterations of a soft body; only supported by the AmmoJSPlugin
     */ set velocityIterations(value) {
        if (!this._physicsEngine) {
            return;
        }
        const plugin = this._physicsEngine.getPhysicsPlugin();
        if (!plugin.setBodyVelocityIterations) {
            return;
        }
        plugin.setBodyVelocityIterations(this, value);
    }
    /**
     * Gets the positionIterations of a soft body; only supported by the AmmoJSPlugin
     */ get positionIterations() {
        if (!this._physicsEngine) {
            return 0;
        }
        const plugin = this._physicsEngine.getPhysicsPlugin();
        if (!plugin.getBodyPositionIterations) {
            return 0;
        }
        return plugin.getBodyPositionIterations(this);
    }
    /**
     * Sets the positionIterations of a soft body; only supported by the AmmoJSPlugin
     */ set positionIterations(value) {
        if (!this._physicsEngine) {
            return;
        }
        const plugin = this._physicsEngine.getPhysicsPlugin();
        if (!plugin.setBodyPositionIterations) {
            return;
        }
        plugin.setBodyPositionIterations(this, value);
    }
    /**
     * Initializes the physics imposter
     * @param object The physics-enabled object used as the physics imposter
     * @param type The type of the physics imposter. Types are available as static members of this class.
     * @param _options The options for the physics imposter
     * @param _scene The Babylon scene
     */ constructor(/**
     * The physics-enabled object used as the physics imposter
     */ object, /**
     * The type of the physics imposter
     */ type, _options = {
        mass: 0
    }, _scene){
        this.object = object;
        this.type = type;
        this._options = _options;
        this._scene = _scene;
        /** @internal */ this._pluginData = {};
        this._bodyUpdateRequired = false;
        this._onBeforePhysicsStepCallbacks = new Array();
        this._onAfterPhysicsStepCallbacks = new Array();
        /** @internal */ this._onPhysicsCollideCallbacks = [];
        this._deltaPosition = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        this._isDisposed = false;
        /**
         * @internal
         */ this.soft = false;
        /**
         * @internal
         */ this.segments = 0;
        //temp variables for parent rotation calculations
        //private _mats: Array<Matrix> = [new Matrix(), new Matrix()];
        this._tmpQuat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Quaternion"]();
        this._tmpQuat2 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Quaternion"]();
        /**
         * this function is executed by the physics engine.
         */ this.beforeStep = ()=>{
            if (!this._physicsEngine) {
                return;
            }
            this.object.translate(this._deltaPosition, -1);
            if (this._deltaRotationConjugated && this.object.rotationQuaternion) {
                this.object.rotationQuaternion.multiplyToRef(this._deltaRotationConjugated, this.object.rotationQuaternion);
            }
            this.object.computeWorldMatrix(false);
            if (this.object.parent && this.object.rotationQuaternion) {
                this.getParentsRotation();
                this._tmpQuat.multiplyToRef(this.object.rotationQuaternion, this._tmpQuat);
            } else {
                this._tmpQuat.copyFrom(this.object.rotationQuaternion || new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Quaternion"]());
            }
            if (!this._options.disableBidirectionalTransformation) {
                if (this.object.rotationQuaternion) {
                    this._physicsEngine.getPhysicsPlugin().setPhysicsBodyTransformation(this, /*bInfo.boundingBox.centerWorld*/ this.object.getAbsolutePosition(), this._tmpQuat);
                }
            }
            for (const func of this._onBeforePhysicsStepCallbacks){
                func(this);
            }
        };
        /**
         * this function is executed by the physics engine
         */ this.afterStep = ()=>{
            if (!this._physicsEngine) {
                return;
            }
            for (const func of this._onAfterPhysicsStepCallbacks){
                func(this);
            }
            this._physicsEngine.getPhysicsPlugin().setTransformationFromPhysicsBody(this);
            // object has now its world rotation. needs to be converted to local.
            if (this.object.parent && this.object.rotationQuaternion) {
                this.getParentsRotation();
                this._tmpQuat.conjugateInPlace();
                this._tmpQuat.multiplyToRef(this.object.rotationQuaternion, this.object.rotationQuaternion);
            }
            // take the position set and make it the absolute position of this object.
            this.object.setAbsolutePosition(this.object.position);
            if (this._deltaRotation) {
                if (this.object.rotationQuaternion) {
                    this.object.rotationQuaternion.multiplyToRef(this._deltaRotation, this.object.rotationQuaternion);
                }
                this._deltaPosition.applyRotationQuaternionToRef(this._deltaRotation, PhysicsImpostor._TmpVecs[0]);
                this.object.translate(PhysicsImpostor._TmpVecs[0], 1);
            } else {
                this.object.translate(this._deltaPosition, 1);
            }
            this.object.computeWorldMatrix(true);
        };
        /**
         * Legacy collision detection event support
         */ this.onCollideEvent = null;
        /**
         *  define an onCollide function to call when this impostor collides against a different body
         * @param e collide event data
         */ this.onCollide = (e)=>{
            if (!this._onPhysicsCollideCallbacks.length && !this.onCollideEvent) {
                return;
            }
            if (!this._physicsEngine) {
                return;
            }
            const otherImpostor = this._physicsEngine.getImpostorWithPhysicsBody(e.body);
            if (otherImpostor) {
                // Legacy collision detection event support
                if (this.onCollideEvent) {
                    this.onCollideEvent(this, otherImpostor);
                }
                const callbacks = this._onPhysicsCollideCallbacks.filter((obj)=>{
                    return obj.otherImpostors.indexOf(otherImpostor) !== -1;
                });
                for (const obj of callbacks){
                    obj.callback(this, otherImpostor, e.point, e.distance, e.impulse, e.normal);
                }
            }
        };
        //sanity check!
        if (!this.object) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Error("No object was provided. A physics object is obligatory");
            return;
        }
        if (this.object.parent && _options.mass !== 0) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Warn("A physics impostor has been created for an object which has a parent. Babylon physics currently works in local space so unexpected issues may occur.");
        }
        // Legacy support for old syntax.
        if (!this._scene && object.getScene) {
            this._scene = object.getScene();
        }
        if (!this._scene) {
            return;
        }
        if (this.type > 100) {
            this.soft = true;
        }
        this._physicsEngine = this._scene.getPhysicsEngine();
        if (!this._physicsEngine) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Error("Physics not enabled. Please use scene.enablePhysics(...) before creating impostors.");
        } else {
            //set the object's quaternion, if not set
            if (!this.object.rotationQuaternion) {
                if (this.object.rotation) {
                    this.object.rotationQuaternion = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Quaternion"].RotationYawPitchRoll(this.object.rotation.y, this.object.rotation.x, this.object.rotation.z);
                } else {
                    this.object.rotationQuaternion = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Quaternion"]();
                }
            }
            //default options params
            this._options.mass = _options.mass === void 0 ? 0 : _options.mass;
            this._options.friction = _options.friction === void 0 ? 0.2 : _options.friction;
            this._options.restitution = _options.restitution === void 0 ? 0.2 : _options.restitution;
            if (this.soft) {
                //softbody mass must be above 0;
                this._options.mass = this._options.mass > 0 ? this._options.mass : 1;
                this._options.pressure = _options.pressure === void 0 ? 200 : _options.pressure;
                this._options.stiffness = _options.stiffness === void 0 ? 1 : _options.stiffness;
                this._options.velocityIterations = _options.velocityIterations === void 0 ? 20 : _options.velocityIterations;
                this._options.positionIterations = _options.positionIterations === void 0 ? 20 : _options.positionIterations;
                this._options.fixedPoints = _options.fixedPoints === void 0 ? 0 : _options.fixedPoints;
                this._options.margin = _options.margin === void 0 ? 0 : _options.margin;
                this._options.damping = _options.damping === void 0 ? 0 : _options.damping;
                this._options.path = _options.path === void 0 ? null : _options.path;
                this._options.shape = _options.shape === void 0 ? null : _options.shape;
            }
            this._joints = [];
            //If the mesh has a parent, don't initialize the physicsBody. Instead wait for the parent to do that.
            if (!this.object.parent || this._options.ignoreParent) {
                this._init();
            } else if (this.object.parent.physicsImpostor) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Warn("You must affect impostors to children before affecting impostor to parent.");
            }
        }
    }
    /**
     * This function will completely initialize this impostor.
     * It will create a new body - but only if this mesh has no parent.
     * If it has, this impostor will not be used other than to define the impostor
     * of the child mesh.
     * @internal
     */ _init() {
        if (!this._physicsEngine) {
            return;
        }
        this._physicsEngine.removeImpostor(this);
        this.physicsBody = null;
        this._parent = this._parent || this._getPhysicsParent();
        if (!this._isDisposed && (!this.parent || this._options.ignoreParent)) {
            this._physicsEngine.addImpostor(this);
        }
    }
    _getPhysicsParent() {
        if (this.object.parent instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$abstractMesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractMesh"]) {
            const parentMesh = this.object.parent;
            return parentMesh.physicsImpostor;
        }
        return null;
    }
    /**
     * Should a new body be generated.
     * @returns boolean specifying if body initialization is required
     */ isBodyInitRequired() {
        return this._bodyUpdateRequired || !this._physicsBody && (!this._parent || !!this._options.ignoreParent);
    }
    /**
     * Sets the updated scaling
     */ setScalingUpdated() {
        this.forceUpdate();
    }
    /**
     * Force a regeneration of this or the parent's impostor's body.
     * Use with caution - This will remove all previously-instantiated joints.
     */ forceUpdate() {
        this._init();
        if (this.parent && !this._options.ignoreParent) {
            this.parent.forceUpdate();
        }
    }
    /*public get mesh(): AbstractMesh {
        return this._mesh;
    }*/ /**
     * Gets the body that holds this impostor. Either its own, or its parent.
     */ get physicsBody() {
        return this._parent && !this._options.ignoreParent ? this._parent.physicsBody : this._physicsBody;
    }
    /**
     * Get the parent of the physics imposter
     * @returns Physics imposter or null
     */ get parent() {
        return !this._options.ignoreParent && this._parent ? this._parent : null;
    }
    /**
     * Sets the parent of the physics imposter
     */ set parent(value) {
        this._parent = value;
    }
    /**
     * Set the physics body. Used mainly by the physics engine/plugin
     */ set physicsBody(physicsBody) {
        if (this._physicsBody && this._physicsEngine) {
            this._physicsEngine.getPhysicsPlugin().removePhysicsBody(this);
        }
        this._physicsBody = physicsBody;
        this.resetUpdateFlags();
    }
    /**
     * Resets the update flags
     */ resetUpdateFlags() {
        this._bodyUpdateRequired = false;
    }
    /**
     * Gets the object extents
     * @returns the object extents
     */ getObjectExtents() {
        if (this.object.getBoundingInfo) {
            const q = this.object.rotationQuaternion;
            const scaling = this.object.scaling.clone();
            //reset rotation
            this.object.rotationQuaternion = PhysicsImpostor.IDENTITY_QUATERNION;
            //calculate the world matrix with no rotation
            const worldMatrix = this.object.computeWorldMatrix && this.object.computeWorldMatrix(true);
            if (worldMatrix) {
                worldMatrix.decompose(scaling, undefined, undefined);
            }
            const boundingInfo = this.object.getBoundingInfo();
            // get the global scaling of the object
            const size = boundingInfo.boundingBox.extendSize.scale(2).multiplyInPlace(scaling);
            size.x = Math.abs(size.x);
            size.y = Math.abs(size.y);
            size.z = Math.abs(size.z);
            //bring back the rotation
            this.object.rotationQuaternion = q;
            //calculate the world matrix with the new rotation
            if (this.object.computeWorldMatrix) {
                this.object.computeWorldMatrix(true);
            }
            return size;
        } else {
            return PhysicsImpostor.DEFAULT_OBJECT_SIZE;
        }
    }
    /**
     * Gets the object center
     * @returns The object center
     */ getObjectCenter() {
        if (this.object.getBoundingInfo) {
            const boundingInfo = this.object.getBoundingInfo();
            return boundingInfo.boundingBox.centerWorld;
        } else {
            return this.object.position;
        }
    }
    /**
     * Get a specific parameter from the options parameters
     * @param paramName The object parameter name
     * @returns The object parameter
     */ getParam(paramName) {
        return this._options[paramName];
    }
    /**
     * Sets a specific parameter in the options given to the physics plugin
     * @param paramName The parameter name
     * @param value The value of the parameter
     */ setParam(paramName, value) {
        this._options[paramName] = value;
        this._bodyUpdateRequired = true;
    }
    /**
     * Specifically change the body's mass. Won't recreate the physics body object
     * @param mass The mass of the physics imposter
     */ setMass(mass) {
        if (this.getParam("mass") !== mass) {
            this.setParam("mass", mass);
        }
        if (this._physicsEngine) {
            this._physicsEngine.getPhysicsPlugin().setBodyMass(this, mass);
        }
    }
    /**
     * Gets the linear velocity
     * @returns  linear velocity or null
     */ getLinearVelocity() {
        return this._physicsEngine ? this._physicsEngine.getPhysicsPlugin().getLinearVelocity(this) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Zero();
    }
    /**
     * Sets the linear velocity
     * @param velocity  linear velocity or null
     */ setLinearVelocity(velocity) {
        if (this._physicsEngine) {
            this._physicsEngine.getPhysicsPlugin().setLinearVelocity(this, velocity);
        }
    }
    /**
     * Gets the angular velocity
     * @returns angular velocity or null
     */ getAngularVelocity() {
        return this._physicsEngine ? this._physicsEngine.getPhysicsPlugin().getAngularVelocity(this) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Zero();
    }
    /**
     * Sets the angular velocity
     * @param velocity The velocity or null
     */ setAngularVelocity(velocity) {
        if (this._physicsEngine) {
            this._physicsEngine.getPhysicsPlugin().setAngularVelocity(this, velocity);
        }
    }
    /**
     * Execute a function with the physics plugin native code
     * Provide a function the will have two variables - the world object and the physics body object
     * @param func The function to execute with the physics plugin native code
     */ executeNativeFunction(func) {
        if (this._physicsEngine) {
            func(this._physicsEngine.getPhysicsPlugin().world, this.physicsBody);
        }
    }
    /**
     * Register a function that will be executed before the physics world is stepping forward
     * @param func The function to execute before the physics world is stepped forward
     */ registerBeforePhysicsStep(func) {
        this._onBeforePhysicsStepCallbacks.push(func);
    }
    /**
     * Unregister a function that will be executed before the physics world is stepping forward
     * @param func The function to execute before the physics world is stepped forward
     */ unregisterBeforePhysicsStep(func) {
        const index = this._onBeforePhysicsStepCallbacks.indexOf(func);
        if (index > -1) {
            this._onBeforePhysicsStepCallbacks.splice(index, 1);
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Warn("Function to remove was not found");
        }
    }
    /**
     * Register a function that will be executed after the physics step
     * @param func The function to execute after physics step
     */ registerAfterPhysicsStep(func) {
        this._onAfterPhysicsStepCallbacks.push(func);
    }
    /**
     * Unregisters a function that will be executed after the physics step
     * @param func The function to execute after physics step
     */ unregisterAfterPhysicsStep(func) {
        const index = this._onAfterPhysicsStepCallbacks.indexOf(func);
        if (index > -1) {
            this._onAfterPhysicsStepCallbacks.splice(index, 1);
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Warn("Function to remove was not found");
        }
    }
    /**
     * register a function that will be executed when this impostor collides against a different body
     * @param collideAgainst Physics imposter, or array of physics imposters to collide against
     * @param func Callback that is executed on collision
     */ registerOnPhysicsCollide(collideAgainst, func) {
        const collidedAgainstList = collideAgainst instanceof Array ? collideAgainst : [
            collideAgainst
        ];
        this._onPhysicsCollideCallbacks.push({
            callback: func,
            otherImpostors: collidedAgainstList
        });
    }
    /**
     * Unregisters the physics imposter's collision callback
     * @param collideAgainst The physics object to collide against
     * @param func Callback to execute on collision
     */ unregisterOnPhysicsCollide(collideAgainst, func) {
        const collidedAgainstList = collideAgainst instanceof Array ? collideAgainst : [
            collideAgainst
        ];
        let index = -1;
        const found = this._onPhysicsCollideCallbacks.some((cbDef, idx)=>{
            if (cbDef.callback === func && cbDef.otherImpostors.length === collidedAgainstList.length) {
                // chcek the arrays match
                const sameList = cbDef.otherImpostors.every((impostor)=>{
                    return collidedAgainstList.indexOf(impostor) > -1;
                });
                if (sameList) {
                    index = idx;
                }
                return sameList;
            }
            return false;
        });
        if (found) {
            this._onPhysicsCollideCallbacks.splice(index, 1);
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Warn("Function to remove was not found");
        }
    }
    /**
     * Get the parent rotation
     * @returns The parent rotation
     */ getParentsRotation() {
        let parent = this.object.parent;
        this._tmpQuat.copyFromFloats(0, 0, 0, 1);
        while(parent){
            if (parent.rotationQuaternion) {
                this._tmpQuat2.copyFrom(parent.rotationQuaternion);
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Quaternion"].RotationYawPitchRollToRef(parent.rotation.y, parent.rotation.x, parent.rotation.z, this._tmpQuat2);
            }
            this._tmpQuat.multiplyToRef(this._tmpQuat2, this._tmpQuat);
            parent = parent.parent;
        }
        return this._tmpQuat;
    }
    /**
     * Apply a force
     * @param force The force to apply
     * @param contactPoint The contact point for the force
     * @returns The physics imposter
     */ applyForce(force, contactPoint) {
        if (this._physicsEngine) {
            this._physicsEngine.getPhysicsPlugin().applyForce(this, force, contactPoint);
        }
        return this;
    }
    /**
     * Apply an impulse
     * @param force The impulse force
     * @param contactPoint The contact point for the impulse force
     * @returns The physics imposter
     */ applyImpulse(force, contactPoint) {
        if (this._physicsEngine) {
            this._physicsEngine.getPhysicsPlugin().applyImpulse(this, force, contactPoint);
        }
        return this;
    }
    /**
     * A help function to create a joint
     * @param otherImpostor A physics imposter used to create a joint
     * @param jointType The type of joint
     * @param jointData The data for the joint
     * @returns The physics imposter
     */ createJoint(otherImpostor, jointType, jointData) {
        const joint = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$physicsJoint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsJoint"](jointType, jointData);
        this.addJoint(otherImpostor, joint);
        return this;
    }
    /**
     * Add a joint to this impostor with a different impostor
     * @param otherImpostor A physics imposter used to add a joint
     * @param joint The joint to add
     * @returns The physics imposter
     */ addJoint(otherImpostor, joint) {
        this._joints.push({
            otherImpostor: otherImpostor,
            joint: joint
        });
        if (this._physicsEngine) {
            this._physicsEngine.addJoint(this, otherImpostor, joint);
        }
        return this;
    }
    /**
     * Add an anchor to a cloth impostor
     * @param otherImpostor rigid impostor to anchor to
     * @param width ratio across width from 0 to 1
     * @param height ratio up height from 0 to 1
     * @param influence the elasticity between cloth impostor and anchor from 0, very stretchy to 1, little stretch
     * @param noCollisionBetweenLinkedBodies when true collisions between cloth impostor and anchor are ignored; default false
     * @returns impostor the soft imposter
     */ addAnchor(otherImpostor, width, height, influence, noCollisionBetweenLinkedBodies) {
        if (!this._physicsEngine) {
            return this;
        }
        const plugin = this._physicsEngine.getPhysicsPlugin();
        if (!plugin.appendAnchor) {
            return this;
        }
        if (this._physicsEngine) {
            plugin.appendAnchor(this, otherImpostor, width, height, influence, noCollisionBetweenLinkedBodies);
        }
        return this;
    }
    /**
     * Add a hook to a rope impostor
     * @param otherImpostor rigid impostor to anchor to
     * @param length ratio across rope from 0 to 1
     * @param influence the elasticity between rope impostor and anchor from 0, very stretchy to 1, little stretch
     * @param noCollisionBetweenLinkedBodies when true collisions between soft impostor and anchor are ignored; default false
     * @returns impostor the rope imposter
     */ addHook(otherImpostor, length, influence, noCollisionBetweenLinkedBodies) {
        if (!this._physicsEngine) {
            return this;
        }
        const plugin = this._physicsEngine.getPhysicsPlugin();
        if (!plugin.appendAnchor) {
            return this;
        }
        if (this._physicsEngine) {
            plugin.appendHook(this, otherImpostor, length, influence, noCollisionBetweenLinkedBodies);
        }
        return this;
    }
    /**
     * Will keep this body still, in a sleep mode.
     * @returns the physics imposter
     */ sleep() {
        if (this._physicsEngine) {
            this._physicsEngine.getPhysicsPlugin().sleepBody(this);
        }
        return this;
    }
    /**
     * Wake the body up.
     * @returns The physics imposter
     */ wakeUp() {
        if (this._physicsEngine) {
            this._physicsEngine.getPhysicsPlugin().wakeUpBody(this);
        }
        return this;
    }
    /**
     * Clones the physics imposter
     * @param newObject The physics imposter clones to this physics-enabled object
     * @returns A nullable physics imposter
     */ clone(newObject) {
        if (!newObject) {
            return null;
        }
        return new PhysicsImpostor(newObject, this.type, this._options, this._scene);
    }
    /**
     * Disposes the physics imposter
     */ dispose() {
        //no dispose if no physics engine is available.
        if (!this._physicsEngine) {
            return;
        }
        for (const j of this._joints){
            if (this._physicsEngine) {
                this._physicsEngine.removeJoint(this, j.otherImpostor, j.joint);
            }
        }
        //dispose the physics body
        this._physicsEngine.removeImpostor(this);
        if (this.parent) {
            this.parent.forceUpdate();
        }
        this._isDisposed = true;
    }
    /**
     * Sets the delta position
     * @param position The delta position amount
     */ setDeltaPosition(position) {
        this._deltaPosition.copyFrom(position);
    }
    /**
     * Sets the delta rotation
     * @param rotation The delta rotation amount
     */ setDeltaRotation(rotation) {
        if (!this._deltaRotation) {
            this._deltaRotation = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Quaternion"]();
        }
        this._deltaRotation.copyFrom(rotation);
        this._deltaRotationConjugated = this._deltaRotation.conjugate();
    }
    /**
     * Gets the box size of the physics imposter and stores the result in the input parameter
     * @param result Stores the box size
     * @returns The physics imposter
     */ getBoxSizeToRef(result) {
        if (this._physicsEngine) {
            this._physicsEngine.getPhysicsPlugin().getBoxSizeToRef(this, result);
        }
        return this;
    }
    /**
     * Gets the radius of the physics imposter
     * @returns Radius of the physics imposter
     */ getRadius() {
        return this._physicsEngine ? this._physicsEngine.getPhysicsPlugin().getRadius(this) : 0;
    }
    /**
     * Sync a bone with this impostor
     * @param bone The bone to sync to the impostor.
     * @param boneMesh The mesh that the bone is influencing.
     * @param jointPivot The pivot of the joint / bone in local space.
     * @param distToJoint Optional distance from the impostor to the joint.
     * @param adjustRotation Optional quaternion for adjusting the local rotation of the bone.
     */ syncBoneWithImpostor(bone, boneMesh, jointPivot, distToJoint, adjustRotation) {
        const tempVec = PhysicsImpostor._TmpVecs[0];
        const mesh = this.object;
        if (mesh.rotationQuaternion) {
            if (adjustRotation) {
                const tempQuat = PhysicsImpostor._TmpQuat;
                mesh.rotationQuaternion.multiplyToRef(adjustRotation, tempQuat);
                bone.setRotationQuaternion(tempQuat, 1 /* Space.WORLD */ , boneMesh);
            } else {
                bone.setRotationQuaternion(mesh.rotationQuaternion, 1 /* Space.WORLD */ , boneMesh);
            }
        }
        tempVec.x = 0;
        tempVec.y = 0;
        tempVec.z = 0;
        if (jointPivot) {
            tempVec.x = jointPivot.x;
            tempVec.y = jointPivot.y;
            tempVec.z = jointPivot.z;
            bone.getDirectionToRef(tempVec, boneMesh, tempVec);
            if (distToJoint === undefined || distToJoint === null) {
                distToJoint = jointPivot.length();
            }
            tempVec.x *= distToJoint;
            tempVec.y *= distToJoint;
            tempVec.z *= distToJoint;
        }
        if (bone.getParent()) {
            tempVec.addInPlace(mesh.getAbsolutePosition());
            bone.setAbsolutePosition(tempVec, boneMesh);
        } else {
            boneMesh.setAbsolutePosition(mesh.getAbsolutePosition());
            boneMesh.position.x -= tempVec.x;
            boneMesh.position.y -= tempVec.y;
            boneMesh.position.z -= tempVec.z;
        }
    }
    /**
     * Sync impostor to a bone
     * @param bone The bone that the impostor will be synced to.
     * @param boneMesh The mesh that the bone is influencing.
     * @param jointPivot The pivot of the joint / bone in local space.
     * @param distToJoint Optional distance from the impostor to the joint.
     * @param adjustRotation Optional quaternion for adjusting the local rotation of the bone.
     * @param boneAxis Optional vector3 axis the bone is aligned with
     */ syncImpostorWithBone(bone, boneMesh, jointPivot, distToJoint, adjustRotation, boneAxis) {
        const mesh = this.object;
        if (mesh.rotationQuaternion) {
            if (adjustRotation) {
                const tempQuat = PhysicsImpostor._TmpQuat;
                bone.getRotationQuaternionToRef(1 /* Space.WORLD */ , boneMesh, tempQuat);
                tempQuat.multiplyToRef(adjustRotation, mesh.rotationQuaternion);
            } else {
                bone.getRotationQuaternionToRef(1 /* Space.WORLD */ , boneMesh, mesh.rotationQuaternion);
            }
        }
        const pos = PhysicsImpostor._TmpVecs[0];
        const boneDir = PhysicsImpostor._TmpVecs[1];
        if (!boneAxis) {
            boneAxis = PhysicsImpostor._TmpVecs[2];
            boneAxis.x = 0;
            boneAxis.y = 1;
            boneAxis.z = 0;
        }
        bone.getDirectionToRef(boneAxis, boneMesh, boneDir);
        bone.getAbsolutePositionToRef(boneMesh, pos);
        if ((distToJoint === undefined || distToJoint === null) && jointPivot) {
            distToJoint = jointPivot.length();
        }
        if (distToJoint !== undefined && distToJoint !== null) {
            pos.x += boneDir.x * distToJoint;
            pos.y += boneDir.y * distToJoint;
            pos.z += boneDir.z * distToJoint;
        }
        mesh.setAbsolutePosition(pos);
    }
}
/**
 * The default object size of the imposter
 */ PhysicsImpostor.DEFAULT_OBJECT_SIZE = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](1, 1, 1);
/**
 * The identity quaternion of the imposter
 */ PhysicsImpostor.IDENTITY_QUATERNION = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Quaternion"].Identity();
PhysicsImpostor._TmpVecs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$arrayTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BuildArray"])(3, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Zero);
PhysicsImpostor._TmpQuat = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Quaternion"].Identity();
//Impostor types
/**
 * No-Imposter type
 */ PhysicsImpostor.NoImpostor = 0;
/**
 * Sphere-Imposter type
 */ PhysicsImpostor.SphereImpostor = 1;
/**
 * Box-Imposter type
 */ PhysicsImpostor.BoxImpostor = 2;
/**
 * Plane-Imposter type
 */ PhysicsImpostor.PlaneImpostor = 3;
/**
 * Mesh-imposter type (Only available to objects with vertices data)
 */ PhysicsImpostor.MeshImpostor = 4;
/**
 * Capsule-Impostor type (Ammo.js plugin only)
 */ PhysicsImpostor.CapsuleImpostor = 6;
/**
 * Cylinder-Imposter type
 */ PhysicsImpostor.CylinderImpostor = 7;
/**
 * Particle-Imposter type
 */ PhysicsImpostor.ParticleImpostor = 8;
/**
 * Heightmap-Imposter type
 */ PhysicsImpostor.HeightmapImpostor = 9;
/**
 * ConvexHull-Impostor type (Ammo.js plugin only)
 */ PhysicsImpostor.ConvexHullImpostor = 10;
/**
 * Custom-Imposter type (Ammo.js plugin only)
 */ PhysicsImpostor.CustomImpostor = 100;
/**
 * Rope-Imposter type
 */ PhysicsImpostor.RopeImpostor = 101;
/**
 * Cloth-Imposter type
 */ PhysicsImpostor.ClothImpostor = 102;
/**
 * Softbody-Imposter type
 */ PhysicsImpostor.SoftbodyImpostor = 103; //# sourceMappingURL=physicsImpostor.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/castingResult.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CastingResult",
    ()=>CastingResult
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
;
class CastingResult {
    constructor(){
        this._hasHit = false;
        this._hitNormal = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        this._hitPoint = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        this._triangleIndex = -1;
    }
    /**
     * Gets the hit point.
     */ get hitPoint() {
        return this._hitPoint;
    }
    /**
     * Gets the hit normal.
     */ get hitNormal() {
        return this._hitNormal;
    }
    /**
     * Gets if there was a hit
     */ get hasHit() {
        return this._hasHit;
    }
    /*
     * The index of the original triangle which was hit. Will be -1 if contact point is not on a mesh shape
     */ get triangleIndex() {
        return this._triangleIndex;
    }
    /**
     * Sets the hit data
     * @param hitNormal defines the normal in world space
     * @param hitPoint defines the point in world space
     * @param triangleIndex defines the index of the triangle in case of mesh shape
     */ setHitData(hitNormal, hitPoint, triangleIndex) {
        this._hasHit = true;
        this._hitNormal.set(hitNormal.x, hitNormal.y, hitNormal.z);
        this._hitPoint.set(hitPoint.x, hitPoint.y, hitPoint.z);
        this._triangleIndex = triangleIndex ?? -1;
    }
    /**
     * Resets all the values to default
     */ reset() {
        this._hasHit = false;
        this._hitNormal.setAll(0);
        this._hitPoint.setAll(0);
        this._triangleIndex = -1;
        this.body = undefined;
        this.bodyIndex = undefined;
        this.shape = undefined;
    }
} //# sourceMappingURL=castingResult.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/physicsRaycastResult.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PhysicsRaycastResult",
    ()=>PhysicsRaycastResult
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$castingResult$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/castingResult.js [app-ssr] (ecmascript)");
;
;
class PhysicsRaycastResult extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$castingResult$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CastingResult"] {
    constructor(){
        super(...arguments);
        this._hitDistance = 0;
        this._rayFromWorld = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        this._rayToWorld = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Zero();
    }
    /**
     * Gets the distance from the hit
     */ get hitDistance() {
        return this._hitDistance;
    }
    /**
     * Gets the hit normal/direction in the world
     */ get hitNormalWorld() {
        return this._hitNormal;
    }
    /**
     * Gets the hit point in the world
     */ get hitPointWorld() {
        return this._hitPoint;
    }
    /**
     * Gets the ray "start point" of the ray in the world
     */ get rayFromWorld() {
        return this._rayFromWorld;
    }
    /**
     * Gets the ray "end point" of the ray in the world
     */ get rayToWorld() {
        return this._rayToWorld;
    }
    /**
     * Sets the distance from the start point to the hit point
     * @param distance defines the distance to set
     */ setHitDistance(distance) {
        this._hitDistance = distance;
    }
    /**
     * Calculates the distance manually
     */ calculateHitDistance() {
        this._hitDistance = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Distance(this._rayFromWorld, this._hitPoint);
    }
    /**
     * Resets all the values to default
     * @param from The from point on world space
     * @param to The to point on world space
     */ reset(from = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Zero(), to = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Zero()) {
        super.reset();
        this._rayFromWorld.copyFrom(from);
        this._rayToWorld.copyFrom(to);
        this._hitDistance = 0;
    }
} //# sourceMappingURL=physicsRaycastResult.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/v1/physicsEngine.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PhysicsEngine",
    ()=>PhysicsEngine
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$devTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/devTools.js [app-ssr] (ecmascript)");
;
;
class PhysicsEngine {
    /**
     *
     * @returns version
     */ getPluginVersion() {
        return this._physicsPlugin.getPluginVersion();
    }
    /**
     * @virtual
     * Factory used to create the default physics plugin.
     * @returns The default physics plugin
     */ static DefaultPluginFactory() {
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$devTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_WarnImport"])("CannonJSPlugin");
    }
    /**
     * Creates a new Physics Engine
     * @param gravity defines the gravity vector used by the simulation
     * @param _physicsPlugin defines the plugin to use (CannonJS by default)
     */ constructor(gravity, _physicsPlugin = PhysicsEngine.DefaultPluginFactory()){
        this._physicsPlugin = _physicsPlugin;
        /**
         * Global value used to control the smallest number supported by the simulation
         */ this._impostors = [];
        this._joints = [];
        this._subTimeStep = 0;
        this._uniqueIdCounter = 0;
        if (!this._physicsPlugin.isSupported()) {
            throw new Error("Physics Engine " + this._physicsPlugin.name + " cannot be found. " + "Please make sure it is included.");
        }
        gravity = gravity || new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](0, -9.807, 0);
        this.setGravity(gravity);
        this.setTimeStep();
    }
    /**
     * Sets the gravity vector used by the simulation
     * @param gravity defines the gravity vector to use
     */ setGravity(gravity) {
        this.gravity = gravity;
        this._physicsPlugin.setGravity(this.gravity);
    }
    /**
     * Set the time step of the physics engine.
     * Default is 1/60.
     * To slow it down, enter 1/600 for example.
     * To speed it up, 1/30
     * @param newTimeStep defines the new timestep to apply to this world.
     */ setTimeStep(newTimeStep = 1 / 60) {
        this._physicsPlugin.setTimeStep(newTimeStep);
    }
    /**
     * Get the time step of the physics engine.
     * @returns the current time step
     */ getTimeStep() {
        return this._physicsPlugin.getTimeStep();
    }
    /**
     * Set the sub time step of the physics engine.
     * Default is 0 meaning there is no sub steps
     * To increase physics resolution precision, set a small value (like 1 ms)
     * @param subTimeStep defines the new sub timestep used for physics resolution.
     */ setSubTimeStep(subTimeStep = 0) {
        this._subTimeStep = subTimeStep;
    }
    /**
     * Get the sub time step of the physics engine.
     * @returns the current sub time step
     */ getSubTimeStep() {
        return this._subTimeStep;
    }
    /**
     * Release all resources
     */ dispose() {
        for (const impostor of this._impostors){
            impostor.dispose();
        }
        this._physicsPlugin.dispose();
    }
    /**
     * Gets the name of the current physics plugin
     * @returns the name of the plugin
     */ getPhysicsPluginName() {
        return this._physicsPlugin.name;
    }
    /**
     * Adding a new impostor for the impostor tracking.
     * This will be done by the impostor itself.
     * @param impostor the impostor to add
     */ addImpostor(impostor) {
        this._impostors.push(impostor);
        impostor.uniqueId = this._uniqueIdCounter++;
        //if no parent, generate the body
        if (!impostor.parent) {
            this._physicsPlugin.generatePhysicsBody(impostor);
        }
    }
    /**
     * Remove an impostor from the engine.
     * This impostor and its mesh will not longer be updated by the physics engine.
     * @param impostor the impostor to remove
     */ removeImpostor(impostor) {
        const index = this._impostors.indexOf(impostor);
        if (index > -1) {
            const removed = this._impostors.splice(index, 1);
            //Is it needed?
            if (removed.length) {
                this.getPhysicsPlugin().removePhysicsBody(impostor);
            }
        }
    }
    /**
     * Add a joint to the physics engine
     * @param mainImpostor defines the main impostor to which the joint is added.
     * @param connectedImpostor defines the impostor that is connected to the main impostor using this joint
     * @param joint defines the joint that will connect both impostors.
     */ addJoint(mainImpostor, connectedImpostor, joint) {
        const impostorJoint = {
            mainImpostor: mainImpostor,
            connectedImpostor: connectedImpostor,
            joint: joint
        };
        joint.physicsPlugin = this._physicsPlugin;
        this._joints.push(impostorJoint);
        this._physicsPlugin.generateJoint(impostorJoint);
    }
    /**
     * Removes a joint from the simulation
     * @param mainImpostor defines the impostor used with the joint
     * @param connectedImpostor defines the other impostor connected to the main one by the joint
     * @param joint defines the joint to remove
     */ removeJoint(mainImpostor, connectedImpostor, joint) {
        const matchingJoints = this._joints.filter(function(impostorJoint) {
            return impostorJoint.connectedImpostor === connectedImpostor && impostorJoint.joint === joint && impostorJoint.mainImpostor === mainImpostor;
        });
        if (matchingJoints.length) {
            this._physicsPlugin.removeJoint(matchingJoints[0]);
        //TODO remove it from the list as well
        }
    }
    /**
     * Called by the scene. No need to call it.
     * @param delta defines the timespan between frames
     */ _step(delta) {
        //check if any mesh has no body / requires an update
        for (const impostor of this._impostors){
            if (impostor.isBodyInitRequired()) {
                this._physicsPlugin.generatePhysicsBody(impostor);
            }
        }
        if (delta > 0.1) {
            delta = 0.1;
        } else if (delta <= 0) {
            delta = 1.0 / 60.0;
        }
        this._physicsPlugin.executeStep(delta, this._impostors);
    }
    /**
     * Gets the current plugin used to run the simulation
     * @returns current plugin
     */ getPhysicsPlugin() {
        return this._physicsPlugin;
    }
    /**
     * Gets the list of physic impostors
     * @returns an array of PhysicsImpostor
     */ getImpostors() {
        return this._impostors;
    }
    /**
     * Gets the impostor for a physics enabled object
     * @param object defines the object impersonated by the impostor
     * @returns the PhysicsImpostor or null if not found
     */ getImpostorForPhysicsObject(object) {
        for(let i = 0; i < this._impostors.length; ++i){
            if (this._impostors[i].object === object) {
                return this._impostors[i];
            }
        }
        return null;
    }
    /**
     * Gets the impostor for a physics body object
     * @param body defines physics body used by the impostor
     * @returns the PhysicsImpostor or null if not found
     */ getImpostorWithPhysicsBody(body) {
        for(let i = 0; i < this._impostors.length; ++i){
            if (this._impostors[i].physicsBody === body) {
                return this._impostors[i];
            }
        }
        return null;
    }
    /**
     * Does a raycast in the physics world
     * @param from when should the ray start?
     * @param to when should the ray end?
     * @returns PhysicsRaycastResult
     */ raycast(from, to) {
        return this._physicsPlugin.raycast(from, to);
    }
    /**
     * Does a raycast in the physics world
     * @param from when should the ray start?
     * @param to when should the ray end?
     * @param result resulting PhysicsRaycastResult
     * @returns true if the ray hits an impostor, else false
     */ raycastToRef(from, to, result) {
        return this._physicsPlugin.raycastToRef(from, to, result);
    }
} //# sourceMappingURL=physicsEngine.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/v1/Plugins/cannonJSPlugin.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CannonJSPlugin",
    ()=>CannonJSPlugin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/logger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Buffers/buffer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$physicsImpostor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/v1/physicsImpostor.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$physicsJoint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/v1/physicsJoint.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$physicsRaycastResult$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/physicsRaycastResult.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$physicsEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/v1/physicsEngine.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.constants.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
class CannonJSPlugin {
    constructor(_useDeltaForWorldStep = true, iterations = 10, cannonInjection = CANNON){
        this._useDeltaForWorldStep = _useDeltaForWorldStep;
        this.name = "CannonJSPlugin";
        this._physicsMaterials = [];
        this._fixedTimeStep = 1 / 60;
        this._physicsBodiesToRemoveAfterStep = new Array();
        this._firstFrame = true;
        this._tmpQuaternion = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Quaternion"]();
        this._minus90X = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Quaternion"](-0.7071067811865475, 0, 0, 0.7071067811865475);
        this._plus90X = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Quaternion"](0.7071067811865475, 0, 0, 0.7071067811865475);
        this._tmpPosition = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        this._tmpDeltaPosition = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        this._tmpUnityRotation = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Quaternion"]();
        this.BJSCANNON = cannonInjection;
        if (!this.isSupported()) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Error("CannonJS is not available. Please make sure you included the js file.");
            return;
        }
        this._extendNamespace();
        this.world = new this.BJSCANNON.World();
        this.world.broadphase = new this.BJSCANNON.NaiveBroadphase();
        this.world.solver.iterations = iterations;
        this._cannonRaycastResult = new this.BJSCANNON.RaycastResult();
        this._raycastResult = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$physicsRaycastResult$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsRaycastResult"]();
    }
    /**
     *
     * @returns plugin version
     */ getPluginVersion() {
        return 1;
    }
    setGravity(gravity) {
        const vec = gravity;
        this.world.gravity.set(vec.x, vec.y, vec.z);
    }
    setTimeStep(timeStep) {
        this._fixedTimeStep = timeStep;
    }
    getTimeStep() {
        return this._fixedTimeStep;
    }
    executeStep(delta, impostors) {
        // due to cannon's architecture, the first frame's before-step is skipped.
        if (this._firstFrame) {
            this._firstFrame = false;
            for (const impostor of impostors){
                if (!(impostor.type == __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$physicsImpostor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsImpostor"].HeightmapImpostor || impostor.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$physicsImpostor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsImpostor"].PlaneImpostor)) {
                    impostor.beforeStep();
                }
            }
        }
        this.world.step(this._useDeltaForWorldStep ? delta : this._fixedTimeStep);
        this._removeMarkedPhysicsBodiesFromWorld();
    }
    _removeMarkedPhysicsBodiesFromWorld() {
        if (this._physicsBodiesToRemoveAfterStep.length > 0) {
            for (const physicsBody of this._physicsBodiesToRemoveAfterStep){
                if (typeof this.world.removeBody === "function") {
                    this.world.removeBody(physicsBody);
                } else {
                    this.world.remove(physicsBody);
                }
            }
            this._physicsBodiesToRemoveAfterStep.length = 0;
        }
    }
    applyImpulse(impostor, force, contactPoint) {
        const worldPoint = new this.BJSCANNON.Vec3(contactPoint.x, contactPoint.y, contactPoint.z);
        const impulse = new this.BJSCANNON.Vec3(force.x, force.y, force.z);
        impostor.physicsBody.applyImpulse(impulse, worldPoint);
    }
    applyForce(impostor, force, contactPoint) {
        const worldPoint = new this.BJSCANNON.Vec3(contactPoint.x, contactPoint.y, contactPoint.z);
        const impulse = new this.BJSCANNON.Vec3(force.x, force.y, force.z);
        impostor.physicsBody.applyForce(impulse, worldPoint);
    }
    generatePhysicsBody(impostor) {
        // When calling forceUpdate generatePhysicsBody is called again, ensure that the updated body does not instantly collide with removed body
        this._removeMarkedPhysicsBodiesFromWorld();
        //parent-child relationship. Does this impostor have a parent impostor?
        if (impostor.parent) {
            if (impostor.physicsBody) {
                this.removePhysicsBody(impostor);
                //TODO is that needed?
                impostor.forceUpdate();
            }
            return;
        }
        //should a new body be created for this impostor?
        if (impostor.isBodyInitRequired()) {
            const shape = this._createShape(impostor);
            if (!shape) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Warn("It was not possible to create a physics body for this object.");
                return;
            }
            //unregister events if body is being changed
            const oldBody = impostor.physicsBody;
            if (oldBody) {
                this.removePhysicsBody(impostor);
            }
            //create the body and material
            const material = this._addMaterial("mat-" + impostor.uniqueId, impostor.getParam("friction"), impostor.getParam("restitution"));
            const bodyCreationObject = {
                mass: impostor.getParam("mass"),
                material: material
            };
            // A simple extend, in case native options were used.
            const nativeOptions = impostor.getParam("nativeOptions");
            for(const key in nativeOptions){
                if (Object.prototype.hasOwnProperty.call(nativeOptions, key)) {
                    bodyCreationObject[key] = nativeOptions[key];
                }
            }
            impostor.physicsBody = new this.BJSCANNON.Body(bodyCreationObject);
            impostor.physicsBody.addEventListener("collide", impostor.onCollide);
            this.world.addEventListener("preStep", impostor.beforeStep);
            this.world.addEventListener("postStep", impostor.afterStep);
            impostor.physicsBody.addShape(shape);
            if (typeof this.world.addBody === "function") {
                this.world.addBody(impostor.physicsBody);
            } else {
                this.world.add(impostor.physicsBody);
            }
            //try to keep the body moving in the right direction by taking old properties.
            //Should be tested!
            if (oldBody) {
                const props = [
                    "force",
                    "torque",
                    "velocity",
                    "angularVelocity"
                ];
                for (const param of props){
                    const vec = oldBody[param];
                    impostor.physicsBody[param].set(vec.x, vec.y, vec.z);
                }
            }
            this._processChildMeshes(impostor);
        }
        //now update the body's transformation
        this._updatePhysicsBodyTransformation(impostor);
    }
    _processChildMeshes(mainImpostor) {
        const meshChildren = mainImpostor.object.getChildMeshes ? mainImpostor.object.getChildMeshes(true) : [];
        const mainRotation = mainImpostor.object.rotationQuaternion;
        if (mainRotation) {
            mainRotation.conjugateToRef(this._tmpQuaternion);
        } else {
            this._tmpQuaternion.set(0, 0, 0, 1);
        }
        if (meshChildren.length) {
            const processMesh = (mesh)=>{
                if (!mesh.rotationQuaternion) {
                    return;
                }
                const childImpostor = mesh.getPhysicsImpostor();
                if (childImpostor) {
                    const parent = childImpostor.parent;
                    if (parent !== mainImpostor && mesh.parent) {
                        const pPosition = mesh.getAbsolutePosition().subtract(mesh.parent.getAbsolutePosition());
                        const q = mesh.rotationQuaternion.multiply(this._tmpQuaternion);
                        if (childImpostor.physicsBody) {
                            this.removePhysicsBody(childImpostor);
                            childImpostor.physicsBody = null;
                        }
                        childImpostor.parent = mainImpostor;
                        childImpostor.resetUpdateFlags();
                        mainImpostor.physicsBody.addShape(this._createShape(childImpostor), new this.BJSCANNON.Vec3(pPosition.x, pPosition.y, pPosition.z), new this.BJSCANNON.Quaternion(q.x, q.y, q.z, q.w));
                        //Add the mass of the children.
                        mainImpostor.physicsBody.mass += childImpostor.getParam("mass");
                    }
                }
                const meshes = mesh.getChildMeshes(true).filter((m)=>!!m.physicsImpostor);
                for (const mesh of meshes){
                    processMesh(mesh);
                }
            };
            const meshes = meshChildren.filter((m)=>!!m.physicsImpostor);
            for (const mesh of meshes){
                processMesh(mesh);
            }
        }
    }
    removePhysicsBody(impostor) {
        impostor.physicsBody.removeEventListener("collide", impostor.onCollide);
        this.world.removeEventListener("preStep", impostor.beforeStep);
        this.world.removeEventListener("postStep", impostor.afterStep);
        // Only remove the physics body after the physics step to avoid disrupting cannon's internal state
        if (this._physicsBodiesToRemoveAfterStep.indexOf(impostor.physicsBody) === -1) {
            this._physicsBodiesToRemoveAfterStep.push(impostor.physicsBody);
        }
    }
    generateJoint(impostorJoint) {
        const mainBody = impostorJoint.mainImpostor.physicsBody;
        const connectedBody = impostorJoint.connectedImpostor.physicsBody;
        if (!mainBody || !connectedBody) {
            return;
        }
        let constraint;
        const jointData = impostorJoint.joint.jointData;
        //TODO - https://github.com/schteppe/this.BJSCANNON.js/blob/gh-pages/demos/collisionFilter.html
        const constraintData = {
            pivotA: jointData.mainPivot ? new this.BJSCANNON.Vec3().set(jointData.mainPivot.x, jointData.mainPivot.y, jointData.mainPivot.z) : null,
            pivotB: jointData.connectedPivot ? new this.BJSCANNON.Vec3().set(jointData.connectedPivot.x, jointData.connectedPivot.y, jointData.connectedPivot.z) : null,
            axisA: jointData.mainAxis ? new this.BJSCANNON.Vec3().set(jointData.mainAxis.x, jointData.mainAxis.y, jointData.mainAxis.z) : null,
            axisB: jointData.connectedAxis ? new this.BJSCANNON.Vec3().set(jointData.connectedAxis.x, jointData.connectedAxis.y, jointData.connectedAxis.z) : null,
            maxForce: jointData.nativeParams.maxForce,
            collideConnected: !!jointData.collision
        };
        switch(impostorJoint.joint.type){
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$physicsJoint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsJoint"].HingeJoint:
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$physicsJoint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsJoint"].Hinge2Joint:
                constraint = new this.BJSCANNON.HingeConstraint(mainBody, connectedBody, constraintData);
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$physicsJoint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsJoint"].DistanceJoint:
                constraint = new this.BJSCANNON.DistanceConstraint(mainBody, connectedBody, jointData.maxDistance || 2);
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$physicsJoint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsJoint"].SpringJoint:
                {
                    const springData = jointData;
                    constraint = new this.BJSCANNON.Spring(mainBody, connectedBody, {
                        restLength: springData.length,
                        stiffness: springData.stiffness,
                        damping: springData.damping,
                        localAnchorA: constraintData.pivotA,
                        localAnchorB: constraintData.pivotB
                    });
                    break;
                }
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$physicsJoint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsJoint"].LockJoint:
                constraint = new this.BJSCANNON.LockConstraint(mainBody, connectedBody, constraintData);
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$physicsJoint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsJoint"].PointToPointJoint:
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$physicsJoint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsJoint"].BallAndSocketJoint:
            default:
                constraint = new this.BJSCANNON.PointToPointConstraint(mainBody, constraintData.pivotA, connectedBody, constraintData.pivotB, constraintData.maxForce);
                break;
        }
        //set the collideConnected flag after the creation, since DistanceJoint ignores it.
        constraint.collideConnected = !!jointData.collision;
        impostorJoint.joint.physicsJoint = constraint;
        //don't add spring as constraint, as it is not one.
        if (impostorJoint.joint.type !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$physicsJoint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsJoint"].SpringJoint) {
            this.world.addConstraint(constraint);
        } else {
            impostorJoint.joint.jointData.forceApplicationCallback = impostorJoint.joint.jointData.forceApplicationCallback || function() {
                constraint.applyForce();
            };
            impostorJoint.mainImpostor.registerAfterPhysicsStep(impostorJoint.joint.jointData.forceApplicationCallback);
        }
    }
    removeJoint(impostorJoint) {
        if (impostorJoint.joint.type !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$physicsJoint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsJoint"].SpringJoint) {
            this.world.removeConstraint(impostorJoint.joint.physicsJoint);
        } else {
            impostorJoint.mainImpostor.unregisterAfterPhysicsStep(impostorJoint.joint.jointData.forceApplicationCallback);
        }
    }
    _addMaterial(name, friction, restitution) {
        let index;
        let mat;
        for(index = 0; index < this._physicsMaterials.length; index++){
            mat = this._physicsMaterials[index];
            if (mat.friction === friction && mat.restitution === restitution) {
                return mat;
            }
        }
        const currentMat = new this.BJSCANNON.Material(name);
        currentMat.friction = friction;
        currentMat.restitution = restitution;
        this._physicsMaterials.push(currentMat);
        return currentMat;
    }
    _checkWithEpsilon(value) {
        return value < __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Epsilon"] ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Epsilon"] : value;
    }
    _createShape(impostor) {
        const object = impostor.object;
        let returnValue;
        const impostorExtents = impostor.getObjectExtents();
        switch(impostor.type){
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$physicsImpostor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsImpostor"].SphereImpostor:
                {
                    const radiusX = impostorExtents.x;
                    const radiusY = impostorExtents.y;
                    const radiusZ = impostorExtents.z;
                    returnValue = new this.BJSCANNON.Sphere(Math.max(this._checkWithEpsilon(radiusX), this._checkWithEpsilon(radiusY), this._checkWithEpsilon(radiusZ)) / 2);
                    break;
                }
            //TMP also for cylinder - TODO Cannon supports cylinder natively.
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$physicsImpostor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsImpostor"].CylinderImpostor:
                {
                    let nativeParams = impostor.getParam("nativeOptions");
                    if (!nativeParams) {
                        nativeParams = {};
                    }
                    const radiusTop = nativeParams.radiusTop !== undefined ? nativeParams.radiusTop : this._checkWithEpsilon(impostorExtents.x) / 2;
                    const radiusBottom = nativeParams.radiusBottom !== undefined ? nativeParams.radiusBottom : this._checkWithEpsilon(impostorExtents.x) / 2;
                    const height = nativeParams.height !== undefined ? nativeParams.height : this._checkWithEpsilon(impostorExtents.y);
                    const numSegments = nativeParams.numSegments !== undefined ? nativeParams.numSegments : 16;
                    returnValue = new this.BJSCANNON.Cylinder(radiusTop, radiusBottom, height, numSegments);
                    // Rotate 90 degrees as this shape is horizontal in cannon
                    const quat = new this.BJSCANNON.Quaternion();
                    quat.setFromAxisAngle(new this.BJSCANNON.Vec3(1, 0, 0), -Math.PI / 2);
                    const translation = new this.BJSCANNON.Vec3(0, 0, 0);
                    returnValue.transformAllPoints(translation, quat);
                    break;
                }
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$physicsImpostor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsImpostor"].BoxImpostor:
                {
                    const box = impostorExtents.scale(0.5);
                    returnValue = new this.BJSCANNON.Box(new this.BJSCANNON.Vec3(this._checkWithEpsilon(box.x), this._checkWithEpsilon(box.y), this._checkWithEpsilon(box.z)));
                    break;
                }
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$physicsImpostor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsImpostor"].PlaneImpostor:
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Warn("Attention, PlaneImposter might not behave as you expect. Consider using BoxImposter instead");
                returnValue = new this.BJSCANNON.Plane();
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$physicsImpostor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsImpostor"].MeshImpostor:
                {
                    // should transform the vertex data to world coordinates!!
                    const rawVerts = object.getVerticesData ? object.getVerticesData(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexBuffer"].PositionKind) : [];
                    const rawFaces = object.getIndices ? object.getIndices() : [];
                    if (!rawVerts) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Warn("Tried to create a MeshImpostor for an object without vertices. This will fail.");
                        return;
                    }
                    // get only scale! so the object could transform correctly.
                    const oldPosition = object.position.clone();
                    const oldRotation = object.rotation && object.rotation.clone();
                    const oldQuaternion = object.rotationQuaternion && object.rotationQuaternion.clone();
                    object.position.copyFromFloats(0, 0, 0);
                    object.rotation && object.rotation.copyFromFloats(0, 0, 0);
                    object.rotationQuaternion && object.rotationQuaternion.copyFrom(impostor.getParentsRotation());
                    object.rotationQuaternion && object.parent && object.rotationQuaternion.conjugateInPlace();
                    const transform = object.computeWorldMatrix(true);
                    // convert rawVerts to object space
                    const transformedVertices = [];
                    let index;
                    for(index = 0; index < rawVerts.length; index += 3){
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinates(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].FromArray(rawVerts, index), transform).toArray(transformedVertices, index);
                    }
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Warn("MeshImpostor only collides against spheres.");
                    returnValue = new this.BJSCANNON.Trimesh(transformedVertices, rawFaces);
                    //now set back the transformation!
                    object.position.copyFrom(oldPosition);
                    oldRotation && object.rotation && object.rotation.copyFrom(oldRotation);
                    oldQuaternion && object.rotationQuaternion && object.rotationQuaternion.copyFrom(oldQuaternion);
                    break;
                }
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$physicsImpostor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsImpostor"].HeightmapImpostor:
                {
                    const oldPosition2 = object.position.clone();
                    const oldRotation2 = object.rotation && object.rotation.clone();
                    const oldQuaternion2 = object.rotationQuaternion && object.rotationQuaternion.clone();
                    object.position.copyFromFloats(0, 0, 0);
                    object.rotation && object.rotation.copyFromFloats(0, 0, 0);
                    object.rotationQuaternion && object.rotationQuaternion.copyFrom(impostor.getParentsRotation());
                    object.rotationQuaternion && object.parent && object.rotationQuaternion.conjugateInPlace();
                    object.rotationQuaternion && object.rotationQuaternion.multiplyInPlace(this._minus90X);
                    returnValue = this._createHeightmap(object);
                    object.position.copyFrom(oldPosition2);
                    oldRotation2 && object.rotation && object.rotation.copyFrom(oldRotation2);
                    oldQuaternion2 && object.rotationQuaternion && object.rotationQuaternion.copyFrom(oldQuaternion2);
                    object.computeWorldMatrix(true);
                    break;
                }
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$physicsImpostor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsImpostor"].ParticleImpostor:
                returnValue = new this.BJSCANNON.Particle();
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$physicsImpostor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsImpostor"].NoImpostor:
                returnValue = new this.BJSCANNON.Box(new this.BJSCANNON.Vec3(0, 0, 0));
                break;
        }
        return returnValue;
    }
    _createHeightmap(object, pointDepth) {
        let pos = object.getVerticesData(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexBuffer"].PositionKind);
        const transform = object.computeWorldMatrix(true);
        // convert rawVerts to object space
        const transformedVertices = [];
        let index;
        for(index = 0; index < pos.length; index += 3){
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinates(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].FromArray(pos, index), transform).toArray(transformedVertices, index);
        }
        pos = transformedVertices;
        const matrix = new Array();
        //For now pointDepth will not be used and will be automatically calculated.
        //Future reference - try and find the best place to add a reference to the pointDepth variable.
        const arraySize = pointDepth || ~~(Math.sqrt(pos.length / 3) - 1);
        const boundingInfo = object.getBoundingInfo();
        const dim = Math.min(boundingInfo.boundingBox.extendSizeWorld.x, boundingInfo.boundingBox.extendSizeWorld.y);
        const minY = boundingInfo.boundingBox.extendSizeWorld.z;
        const elementSize = dim * 2 / arraySize;
        for(let i = 0; i < pos.length; i = i + 3){
            const x = Math.round(pos[i + 0] / elementSize + arraySize / 2);
            const z = Math.round((pos[i + 1] / elementSize - arraySize / 2) * -1);
            const y = -pos[i + 2] + minY;
            if (!matrix[x]) {
                matrix[x] = [];
            }
            if (!matrix[x][z]) {
                matrix[x][z] = y;
            }
            matrix[x][z] = Math.max(y, matrix[x][z]);
        }
        for(let x = 0; x <= arraySize; ++x){
            if (!matrix[x]) {
                let loc = 1;
                while(!matrix[(x + loc) % arraySize]){
                    loc++;
                }
                matrix[x] = matrix[(x + loc) % arraySize].slice();
            //console.log("missing x", x);
            }
            for(let z = 0; z <= arraySize; ++z){
                if (!matrix[x][z]) {
                    let loc = 1;
                    let newValue;
                    while(newValue === undefined){
                        newValue = matrix[x][(z + loc++) % arraySize];
                    }
                    matrix[x][z] = newValue;
                }
            }
        }
        const shape = new this.BJSCANNON.Heightfield(matrix, {
            elementSize: elementSize
        });
        //For future reference, needed for body transformation
        shape.minY = minY;
        return shape;
    }
    _updatePhysicsBodyTransformation(impostor) {
        const object = impostor.object;
        //make sure it is updated...
        object.computeWorldMatrix && object.computeWorldMatrix(true);
        if (!object.getBoundingInfo()) {
            return;
        }
        const center = impostor.getObjectCenter();
        //m.getAbsolutePosition().subtract(m.getBoundingInfo().boundingBox.centerWorld)
        // The delta between the mesh position and the mesh bounding box center
        this._tmpDeltaPosition.copyFrom(object.getAbsolutePivotPoint().subtract(center));
        this._tmpDeltaPosition.divideInPlace(impostor.object.scaling);
        this._tmpPosition.copyFrom(center);
        let quaternion = object.rotationQuaternion;
        if (!quaternion) {
            return;
        }
        //is shape is a plane or a heightmap, it must be rotated 90 degs in the X axis.
        //ideally these would be rotated at time of creation like cylinder but they dont extend ConvexPolyhedron
        if (impostor.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$physicsImpostor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsImpostor"].PlaneImpostor || impostor.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$physicsImpostor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsImpostor"].HeightmapImpostor) {
            //-90 DEG in X, precalculated
            quaternion = quaternion.multiply(this._minus90X);
            //Invert! (Precalculated, 90 deg in X)
            //No need to clone. this will never change.
            impostor.setDeltaRotation(this._plus90X);
        }
        //If it is a heightfield, if should be centered.
        if (impostor.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$physicsImpostor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsImpostor"].HeightmapImpostor) {
            const mesh = object;
            let boundingInfo = mesh.getBoundingInfo();
            //calculate the correct body position:
            const rotationQuaternion = mesh.rotationQuaternion;
            mesh.rotationQuaternion = this._tmpUnityRotation;
            mesh.computeWorldMatrix(true);
            //get original center with no rotation
            const c = center.clone();
            let oldPivot = mesh.getPivotMatrix();
            if (oldPivot) {
                // create a copy the pivot Matrix as it is modified in place
                oldPivot = oldPivot.clone();
            } else {
                oldPivot = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"].Identity();
            }
            //calculate the new center using a pivot (since this.BJSCANNON.js doesn't center height maps)
            const p = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"].Translation(boundingInfo.boundingBox.extendSizeWorld.x, 0, -boundingInfo.boundingBox.extendSizeWorld.z);
            mesh.setPreTransformMatrix(p);
            mesh.computeWorldMatrix(true);
            // force bounding box recomputation
            boundingInfo = mesh.getBoundingInfo();
            //calculate the translation
            const translation = boundingInfo.boundingBox.centerWorld.subtract(center).subtract(mesh.position).negate();
            this._tmpPosition.copyFromFloats(translation.x, translation.y - boundingInfo.boundingBox.extendSizeWorld.y, translation.z);
            //add it inverted to the delta
            this._tmpDeltaPosition.copyFrom(boundingInfo.boundingBox.centerWorld.subtract(c));
            this._tmpDeltaPosition.y += boundingInfo.boundingBox.extendSizeWorld.y;
            //rotation is back
            mesh.rotationQuaternion = rotationQuaternion;
            mesh.setPreTransformMatrix(oldPivot);
            mesh.computeWorldMatrix(true);
        } else if (impostor.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$physicsImpostor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsImpostor"].MeshImpostor) {
            this._tmpDeltaPosition.copyFromFloats(0, 0, 0);
        }
        impostor.setDeltaPosition(this._tmpDeltaPosition);
        //Now update the impostor object
        impostor.physicsBody.position.set(this._tmpPosition.x, this._tmpPosition.y, this._tmpPosition.z);
        impostor.physicsBody.quaternion.set(quaternion.x, quaternion.y, quaternion.z, quaternion.w);
    }
    setTransformationFromPhysicsBody(impostor) {
        impostor.object.position.set(impostor.physicsBody.position.x, impostor.physicsBody.position.y, impostor.physicsBody.position.z);
        if (impostor.object.rotationQuaternion) {
            const q = impostor.physicsBody.quaternion;
            impostor.object.rotationQuaternion.set(q.x, q.y, q.z, q.w);
        }
    }
    setPhysicsBodyTransformation(impostor, newPosition, newRotation) {
        impostor.physicsBody.position.set(newPosition.x, newPosition.y, newPosition.z);
        impostor.physicsBody.quaternion.set(newRotation.x, newRotation.y, newRotation.z, newRotation.w);
    }
    isSupported() {
        return this.BJSCANNON !== undefined;
    }
    setLinearVelocity(impostor, velocity) {
        impostor.physicsBody.velocity.set(velocity.x, velocity.y, velocity.z);
    }
    setAngularVelocity(impostor, velocity) {
        impostor.physicsBody.angularVelocity.set(velocity.x, velocity.y, velocity.z);
    }
    getLinearVelocity(impostor) {
        const v = impostor.physicsBody.velocity;
        if (!v) {
            return null;
        }
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](v.x, v.y, v.z);
    }
    getAngularVelocity(impostor) {
        const v = impostor.physicsBody.angularVelocity;
        if (!v) {
            return null;
        }
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](v.x, v.y, v.z);
    }
    setBodyMass(impostor, mass) {
        impostor.physicsBody.mass = mass;
        impostor.physicsBody.updateMassProperties();
    }
    getBodyMass(impostor) {
        return impostor.physicsBody.mass;
    }
    getBodyFriction(impostor) {
        return impostor.physicsBody.material.friction;
    }
    setBodyFriction(impostor, friction) {
        impostor.physicsBody.material.friction = friction;
    }
    getBodyRestitution(impostor) {
        return impostor.physicsBody.material.restitution;
    }
    setBodyRestitution(impostor, restitution) {
        impostor.physicsBody.material.restitution = restitution;
    }
    sleepBody(impostor) {
        impostor.physicsBody.sleep();
    }
    wakeUpBody(impostor) {
        impostor.physicsBody.wakeUp();
    }
    updateDistanceJoint(joint, maxDistance) {
        joint.physicsJoint.distance = maxDistance;
    }
    setMotor(joint, speed, maxForce, motorIndex) {
        if (!motorIndex) {
            joint.physicsJoint.enableMotor();
            joint.physicsJoint.setMotorSpeed(speed);
            if (maxForce) {
                this.setLimit(joint, maxForce);
            }
        }
    }
    setLimit(joint, minForce, maxForce) {
        joint.physicsJoint.motorEquation.maxForce = maxForce;
        joint.physicsJoint.motorEquation.minForce = minForce === void 0 ? -minForce : minForce;
    }
    syncMeshWithImpostor(mesh, impostor) {
        const body = impostor.physicsBody;
        mesh.position.x = body.position.x;
        mesh.position.y = body.position.y;
        mesh.position.z = body.position.z;
        if (mesh.rotationQuaternion) {
            mesh.rotationQuaternion.x = body.quaternion.x;
            mesh.rotationQuaternion.y = body.quaternion.y;
            mesh.rotationQuaternion.z = body.quaternion.z;
            mesh.rotationQuaternion.w = body.quaternion.w;
        }
    }
    getRadius(impostor) {
        const shape = impostor.physicsBody.shapes[0];
        return shape.boundingSphereRadius;
    }
    getBoxSizeToRef(impostor, result) {
        const shape = impostor.physicsBody.shapes[0];
        result.x = shape.halfExtents.x * 2;
        result.y = shape.halfExtents.y * 2;
        result.z = shape.halfExtents.z * 2;
    }
    dispose() {}
    _extendNamespace() {
        //this will force cannon to execute at least one step when using interpolation
        const step_tmp1 = new this.BJSCANNON.Vec3();
        const engine = this.BJSCANNON;
        this.BJSCANNON.World.prototype.step = function(dt, timeSinceLastCalled, maxSubSteps) {
            maxSubSteps = maxSubSteps || 10;
            timeSinceLastCalled = timeSinceLastCalled || 0;
            if (timeSinceLastCalled === 0) {
                this.internalStep(dt);
                this.time += dt;
            } else {
                let internalSteps = Math.floor((this.time + timeSinceLastCalled) / dt) - Math.floor(this.time / dt);
                internalSteps = Math.min(internalSteps, maxSubSteps) || 1;
                const t0 = performance.now();
                for(let i = 0; i !== internalSteps; i++){
                    this.internalStep(dt);
                    if (performance.now() - t0 > dt * 1000) {
                        break;
                    }
                }
                this.time += timeSinceLastCalled;
                const h = this.time % dt;
                const h_div_dt = h / dt;
                const interpvelo = step_tmp1;
                const bodies = this.bodies;
                for(let j = 0; j !== bodies.length; j++){
                    const b = bodies[j];
                    if (b.type !== engine.Body.STATIC && b.sleepState !== engine.Body.SLEEPING) {
                        b.position.vsub(b.previousPosition, interpvelo);
                        interpvelo.scale(h_div_dt, interpvelo);
                        b.position.vadd(interpvelo, b.interpolatedPosition);
                    } else {
                        b.interpolatedPosition.set(b.position.x, b.position.y, b.position.z);
                        b.interpolatedQuaternion.set(b.quaternion.x, b.quaternion.y, b.quaternion.z, b.quaternion.w);
                    }
                }
            }
        };
    }
    /**
     * Does a raycast in the physics world
     * @param from when should the ray start?
     * @param to when should the ray end?
     * @returns PhysicsRaycastResult
     */ raycast(from, to) {
        this._raycastResult.reset(from, to);
        this.raycastToRef(from, to, this._raycastResult);
        return this._raycastResult;
    }
    /**
     * Does a raycast in the physics world
     * @param from when should the ray start?
     * @param to when should the ray end?
     * @param result resulting PhysicsRaycastResult
     */ raycastToRef(from, to, result) {
        this._cannonRaycastResult.reset();
        this.world.raycastClosest(from, to, {}, this._cannonRaycastResult);
        result.reset(from, to);
        if (this._cannonRaycastResult.hasHit) {
            // TODO: do we also want to get the body it hit?
            result.setHitData({
                x: this._cannonRaycastResult.hitNormalWorld.x,
                y: this._cannonRaycastResult.hitNormalWorld.y,
                z: this._cannonRaycastResult.hitNormalWorld.z
            }, {
                x: this._cannonRaycastResult.hitPointWorld.x,
                y: this._cannonRaycastResult.hitPointWorld.y,
                z: this._cannonRaycastResult.hitPointWorld.z
            });
            result.setHitDistance(this._cannonRaycastResult.distance);
        }
    }
}
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$physicsEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsEngine"].DefaultPluginFactory = ()=>{
    return new CannonJSPlugin();
}; //# sourceMappingURL=cannonJSPlugin.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/v1/Plugins/oimoJSPlugin.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OimoJSPlugin",
    ()=>OimoJSPlugin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$physicsImpostor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/v1/physicsImpostor.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$physicsJoint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/v1/physicsJoint.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/logger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$physicsRaycastResult$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/physicsRaycastResult.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.constants.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
class OimoJSPlugin {
    constructor(_useDeltaForWorldStep = true, iterations, oimoInjection = OIMO){
        this._useDeltaForWorldStep = _useDeltaForWorldStep;
        this.name = "OimoJSPlugin";
        this._fixedTimeStep = 1 / 60;
        this._tmpImpostorsArray = [];
        this._tmpPositionVector = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        this.BJSOIMO = oimoInjection;
        this.world = new this.BJSOIMO.World({
            iterations: iterations
        });
        this.world.clear();
        this._raycastResult = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$physicsRaycastResult$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsRaycastResult"]();
    }
    /**
     *
     * @returns plugin version
     */ getPluginVersion() {
        return 1;
    }
    setGravity(gravity) {
        this.world.gravity.set(gravity.x, gravity.y, gravity.z);
    }
    setTimeStep(timeStep) {
        this.world.timeStep = timeStep;
    }
    getTimeStep() {
        return this.world.timeStep;
    }
    executeStep(delta, impostors) {
        for (const impostor of impostors){
            impostor.beforeStep();
        }
        this.world.timeStep = this._useDeltaForWorldStep ? delta : this._fixedTimeStep;
        this.world.step();
        for (const impostor of impostors){
            impostor.afterStep();
            //update the ordered impostors array
            this._tmpImpostorsArray[impostor.uniqueId] = impostor;
        }
        //check for collisions
        let contact = this.world.contacts;
        while(contact !== null){
            if (contact.touching && !contact.body1.sleeping && !contact.body2.sleeping) {
                contact = contact.next;
                continue;
            }
            //is this body colliding with any other? get the impostor
            const mainImpostor = this._tmpImpostorsArray[+contact.body1.name];
            const collidingImpostor = this._tmpImpostorsArray[+contact.body2.name];
            if (!mainImpostor || !collidingImpostor) {
                contact = contact.next;
                continue;
            }
            mainImpostor.onCollide({
                body: collidingImpostor.physicsBody,
                point: null,
                distance: 0,
                impulse: 0,
                normal: null
            });
            collidingImpostor.onCollide({
                body: mainImpostor.physicsBody,
                point: null,
                distance: 0,
                impulse: 0,
                normal: null
            });
            contact = contact.next;
        }
    }
    applyImpulse(impostor, force, contactPoint) {
        const mass = impostor.physicsBody.mass;
        impostor.physicsBody.applyImpulse(contactPoint.scale(this.world.invScale), force.scale(this.world.invScale * mass));
    }
    applyForce(impostor, force, contactPoint) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Warn("Oimo doesn't support applying force. Using impulse instead.");
        this.applyImpulse(impostor, force, contactPoint);
    }
    generatePhysicsBody(impostor) {
        //parent-child relationship. Does this impostor has a parent impostor?
        if (impostor.parent) {
            if (impostor.physicsBody) {
                this.removePhysicsBody(impostor);
                //TODO is that needed?
                impostor.forceUpdate();
            }
            return;
        }
        if (impostor.isBodyInitRequired()) {
            const bodyConfig = {
                name: impostor.uniqueId,
                //Oimo must have mass, also for static objects.
                config: [
                    impostor.getParam("mass") || 0.001,
                    impostor.getParam("friction"),
                    impostor.getParam("restitution")
                ],
                size: [],
                type: [],
                pos: [],
                posShape: [],
                rot: [],
                rotShape: [],
                move: impostor.getParam("mass") !== 0,
                density: impostor.getParam("mass"),
                friction: impostor.getParam("friction"),
                restitution: impostor.getParam("restitution"),
                //Supporting older versions of Oimo
                world: this.world
            };
            const impostors = [
                impostor
            ];
            const addToArray = (parent)=>{
                if (!parent.getChildMeshes) {
                    return;
                }
                const meshes = parent.getChildMeshes();
                for (const m of meshes){
                    if (m.physicsImpostor) {
                        impostors.push(m.physicsImpostor);
                    //m.physicsImpostor._init();
                    }
                }
            };
            addToArray(impostor.object);
            const checkWithEpsilon = (value)=>{
                return Math.max(value, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Epsilon"]);
            };
            const globalQuaternion = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Quaternion"]();
            for (const i of impostors){
                if (!i.object.rotationQuaternion) {
                    continue;
                }
                //get the correct bounding box
                const oldQuaternion = i.object.rotationQuaternion;
                globalQuaternion.copyFrom(oldQuaternion);
                i.object.rotationQuaternion.set(0, 0, 0, 1);
                i.object.computeWorldMatrix(true);
                const rot = globalQuaternion.toEulerAngles();
                const impostorExtents = i.getObjectExtents();
                // eslint-disable-next-line no-loss-of-precision
                const radToDeg = 57.295779513082320876;
                if (i === impostor) {
                    const center = impostor.getObjectCenter();
                    impostor.object.getAbsolutePivotPoint().subtractToRef(center, this._tmpPositionVector);
                    this._tmpPositionVector.divideInPlace(impostor.object.scaling);
                    //Can also use Array.prototype.push.apply
                    bodyConfig.pos.push(center.x);
                    bodyConfig.pos.push(center.y);
                    bodyConfig.pos.push(center.z);
                    bodyConfig.posShape.push(0, 0, 0);
                    bodyConfig.rotShape.push(0, 0, 0);
                } else {
                    const localPosition = i.object.position.clone();
                    bodyConfig.posShape.push(localPosition.x);
                    bodyConfig.posShape.push(localPosition.y);
                    bodyConfig.posShape.push(localPosition.z);
                    // bodyConfig.pos.push(0, 0, 0);
                    bodyConfig.rotShape.push(rot.x * radToDeg, rot.y * radToDeg, rot.z * radToDeg);
                }
                i.object.rotationQuaternion.copyFrom(globalQuaternion);
                // register mesh
                switch(i.type){
                    case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$physicsImpostor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsImpostor"].ParticleImpostor:
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Warn("No Particle support in OIMO.js. using SphereImpostor instead");
                    // eslint-disable-next-line no-fallthrough
                    case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$physicsImpostor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsImpostor"].SphereImpostor:
                        {
                            const radiusX = impostorExtents.x;
                            const radiusY = impostorExtents.y;
                            const radiusZ = impostorExtents.z;
                            const size = Math.max(checkWithEpsilon(radiusX), checkWithEpsilon(radiusY), checkWithEpsilon(radiusZ)) / 2;
                            bodyConfig.type.push("sphere");
                            //due to the way oimo works with compounds, add 3 times
                            bodyConfig.size.push(size);
                            bodyConfig.size.push(size);
                            bodyConfig.size.push(size);
                            break;
                        }
                    case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$physicsImpostor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsImpostor"].CylinderImpostor:
                        {
                            const sizeX = checkWithEpsilon(impostorExtents.x) / 2;
                            const sizeY = checkWithEpsilon(impostorExtents.y);
                            bodyConfig.type.push("cylinder");
                            bodyConfig.size.push(sizeX);
                            bodyConfig.size.push(sizeY);
                            //due to the way oimo works with compounds, add one more value.
                            bodyConfig.size.push(sizeY);
                            break;
                        }
                    case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$physicsImpostor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsImpostor"].PlaneImpostor:
                    case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$physicsImpostor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsImpostor"].BoxImpostor:
                    default:
                        {
                            const sizeX = checkWithEpsilon(impostorExtents.x);
                            const sizeY = checkWithEpsilon(impostorExtents.y);
                            const sizeZ = checkWithEpsilon(impostorExtents.z);
                            bodyConfig.type.push("box");
                            //if (i === impostor) {
                            bodyConfig.size.push(sizeX);
                            bodyConfig.size.push(sizeY);
                            bodyConfig.size.push(sizeZ);
                            break;
                        }
                }
                //actually not needed, but hey...
                i.object.rotationQuaternion = oldQuaternion;
            }
            impostor.physicsBody = this.world.add(bodyConfig);
            // set the quaternion, ignoring the previously defined (euler) rotation
            impostor.physicsBody.resetQuaternion(globalQuaternion);
            // update with delta 0, so the body will receive the new rotation.
            impostor.physicsBody.updatePosition(0);
        } else {
            this._tmpPositionVector.copyFromFloats(0, 0, 0);
        }
        impostor.setDeltaPosition(this._tmpPositionVector);
    //this._tmpPositionVector.addInPlace(impostor.mesh.getBoundingInfo().boundingBox.center);
    //this.setPhysicsBodyTransformation(impostor, this._tmpPositionVector, impostor.mesh.rotationQuaternion);
    }
    removePhysicsBody(impostor) {
        //impostor.physicsBody.dispose();
        this.world.removeRigidBody(impostor.physicsBody);
    }
    generateJoint(impostorJoint) {
        const mainBody = impostorJoint.mainImpostor.physicsBody;
        const connectedBody = impostorJoint.connectedImpostor.physicsBody;
        if (!mainBody || !connectedBody) {
            return;
        }
        const jointData = impostorJoint.joint.jointData;
        const options = jointData.nativeParams || {};
        let type;
        const nativeJointData = {
            body1: mainBody,
            body2: connectedBody,
            axe1: options.axe1 || (jointData.mainAxis ? jointData.mainAxis.asArray() : null),
            axe2: options.axe2 || (jointData.connectedAxis ? jointData.connectedAxis.asArray() : null),
            pos1: options.pos1 || (jointData.mainPivot ? jointData.mainPivot.asArray() : null),
            pos2: options.pos2 || (jointData.connectedPivot ? jointData.connectedPivot.asArray() : null),
            min: options.min,
            max: options.max,
            collision: options.collision || jointData.collision,
            spring: options.spring,
            //supporting older version of Oimo
            world: this.world
        };
        switch(impostorJoint.joint.type){
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$physicsJoint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsJoint"].BallAndSocketJoint:
                type = "jointBall";
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$physicsJoint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsJoint"].SpringJoint:
                {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Warn("OIMO.js doesn't support Spring Constraint. Simulating using DistanceJoint instead");
                    const springData = jointData;
                    nativeJointData.min = springData.length || nativeJointData.min;
                    //Max should also be set, just make sure it is at least min
                    nativeJointData.max = Math.max(nativeJointData.min, nativeJointData.max);
                }
            // eslint-disable-next-line no-fallthrough
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$physicsJoint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsJoint"].DistanceJoint:
                type = "jointDistance";
                nativeJointData.max = jointData.maxDistance;
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$physicsJoint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsJoint"].PrismaticJoint:
                type = "jointPrisme";
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$physicsJoint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsJoint"].SliderJoint:
                type = "jointSlide";
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$physicsJoint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsJoint"].WheelJoint:
                type = "jointWheel";
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$physicsJoint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsJoint"].HingeJoint:
            default:
                type = "jointHinge";
                break;
        }
        nativeJointData.type = type;
        impostorJoint.joint.physicsJoint = this.world.add(nativeJointData);
    }
    removeJoint(impostorJoint) {
        //Bug in Oimo prevents us from disposing a joint in the playground
        //joint.joint.physicsJoint.dispose();
        //So we will bruteforce it!
        try {
            this.world.removeJoint(impostorJoint.joint.physicsJoint);
        } catch (e) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Warn(e);
        }
    }
    isSupported() {
        return this.BJSOIMO !== undefined;
    }
    setTransformationFromPhysicsBody(impostor) {
        if (!impostor.physicsBody.sleeping) {
            if (impostor.physicsBody.shapes.next) {
                let parent = impostor.physicsBody.shapes;
                while(parent.next){
                    parent = parent.next;
                }
                impostor.object.position.set(parent.position.x, parent.position.y, parent.position.z);
            } else {
                const pos = impostor.physicsBody.getPosition();
                impostor.object.position.set(pos.x, pos.y, pos.z);
            }
            if (impostor.object.rotationQuaternion) {
                const quat = impostor.physicsBody.getQuaternion();
                impostor.object.rotationQuaternion.set(quat.x, quat.y, quat.z, quat.w);
            }
        }
    }
    setPhysicsBodyTransformation(impostor, newPosition, newRotation) {
        const body = impostor.physicsBody;
        // disable bidirectional for compound meshes
        if (impostor.physicsBody.shapes.next) {
            return;
        }
        body.position.set(newPosition.x, newPosition.y, newPosition.z);
        body.orientation.set(newRotation.x, newRotation.y, newRotation.z, newRotation.w);
        body.syncShapes();
        body.awake();
    }
    /*private _getLastShape(body: any): any {
        var lastShape = body.shapes;
        while (lastShape.next) {
            lastShape = lastShape.next;
        }
        return lastShape;
    }*/ setLinearVelocity(impostor, velocity) {
        impostor.physicsBody.linearVelocity.set(velocity.x, velocity.y, velocity.z);
    }
    setAngularVelocity(impostor, velocity) {
        impostor.physicsBody.angularVelocity.set(velocity.x, velocity.y, velocity.z);
    }
    getLinearVelocity(impostor) {
        const v = impostor.physicsBody.linearVelocity;
        if (!v) {
            return null;
        }
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](v.x, v.y, v.z);
    }
    getAngularVelocity(impostor) {
        const v = impostor.physicsBody.angularVelocity;
        if (!v) {
            return null;
        }
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](v.x, v.y, v.z);
    }
    setBodyMass(impostor, mass) {
        const staticBody = mass === 0;
        //this will actually set the body's density and not its mass.
        //But this is how oimo treats the mass variable.
        impostor.physicsBody.shapes.density = staticBody ? 1 : mass;
        impostor.physicsBody.setupMass(staticBody ? 0x2 : 0x1);
    }
    getBodyMass(impostor) {
        return impostor.physicsBody.shapes.density;
    }
    getBodyFriction(impostor) {
        return impostor.physicsBody.shapes.friction;
    }
    setBodyFriction(impostor, friction) {
        impostor.physicsBody.shapes.friction = friction;
    }
    getBodyRestitution(impostor) {
        return impostor.physicsBody.shapes.restitution;
    }
    setBodyRestitution(impostor, restitution) {
        impostor.physicsBody.shapes.restitution = restitution;
    }
    sleepBody(impostor) {
        impostor.physicsBody.sleep();
    }
    wakeUpBody(impostor) {
        impostor.physicsBody.awake();
    }
    updateDistanceJoint(joint, maxDistance, minDistance) {
        joint.physicsJoint.limitMotor.upperLimit = maxDistance;
        if (minDistance !== void 0) {
            joint.physicsJoint.limitMotor.lowerLimit = minDistance;
        }
    }
    setMotor(joint, speed, force, motorIndex) {
        if (force !== undefined) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Warn("OimoJS plugin currently has unexpected behavior when using setMotor with force parameter");
        } else {
            force = 1e6;
        }
        speed *= -1;
        //TODO separate rotational and transational motors.
        const motor = motorIndex ? joint.physicsJoint.rotationalLimitMotor2 : joint.physicsJoint.rotationalLimitMotor1 || joint.physicsJoint.rotationalLimitMotor || joint.physicsJoint.limitMotor;
        if (motor) {
            motor.setMotor(speed, force);
        }
    }
    setLimit(joint, upperLimit, lowerLimit, motorIndex) {
        //TODO separate rotational and transational motors.
        const motor = motorIndex ? joint.physicsJoint.rotationalLimitMotor2 : joint.physicsJoint.rotationalLimitMotor1 || joint.physicsJoint.rotationalLimitMotor || joint.physicsJoint.limitMotor;
        if (motor) {
            motor.setLimit(upperLimit, lowerLimit === void 0 ? -upperLimit : lowerLimit);
        }
    }
    syncMeshWithImpostor(mesh, impostor) {
        const body = impostor.physicsBody;
        mesh.position.x = body.position.x;
        mesh.position.y = body.position.y;
        mesh.position.z = body.position.z;
        if (mesh.rotationQuaternion) {
            mesh.rotationQuaternion.x = body.orientation.x;
            mesh.rotationQuaternion.y = body.orientation.y;
            mesh.rotationQuaternion.z = body.orientation.z;
            mesh.rotationQuaternion.w = body.orientation.w;
        }
    }
    getRadius(impostor) {
        return impostor.physicsBody.shapes.radius;
    }
    getBoxSizeToRef(impostor, result) {
        const shape = impostor.physicsBody.shapes;
        result.x = shape.halfWidth * 2;
        result.y = shape.halfHeight * 2;
        result.z = shape.halfDepth * 2;
    }
    dispose() {
        this.world.clear();
    }
    /**
     * Does a raycast in the physics world
     * @param from when should the ray start?
     * @param to when should the ray end?
     * @returns PhysicsRaycastResult
     */ raycast(from, to) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Warn("raycast is not currently supported by the Oimo physics plugin");
        this._raycastResult.reset(from, to);
        return this._raycastResult;
    }
    /**
     * Does a raycast in the physics world
     * @param from when should the ray start?
     * @param to when should the ray end?
     * @param result resulting PhysicsRaycastResult
     */ raycastToRef(from, to, result) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Warn("raycast is not currently supported by the Oimo physics plugin");
        result.reset(from, to);
    }
} //# sourceMappingURL=oimoJSPlugin.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/v1/Plugins/ammoJSPlugin.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AmmoJSPlugin",
    ()=>AmmoJSPlugin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/logger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$physicsImpostor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/v1/physicsImpostor.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$physicsJoint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/v1/physicsJoint.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Buffers/buffer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$vertexData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/mesh.vertexData.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$shapeBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/shapeBuilder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$linesBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/linesBuilder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$physicsRaycastResult$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/physicsRaycastResult.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.scalar.functions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.constants.js [app-ssr] (ecmascript)");
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
class AmmoJSPlugin {
    /**
     * Initializes the ammoJS plugin
     * @param _useDeltaForWorldStep if the time between frames should be used when calculating physics steps (Default: true)
     * @param ammoInjection can be used to inject your own ammo reference
     * @param overlappingPairCache can be used to specify your own overlapping pair cache
     */ constructor(_useDeltaForWorldStep = true, ammoInjection = Ammo, overlappingPairCache = null){
        this._useDeltaForWorldStep = _useDeltaForWorldStep;
        /**
         * Reference to the Ammo library
         */ // eslint-disable-next-line @typescript-eslint/naming-convention
        this.bjsAMMO = {};
        /**
         * Name of the plugin
         */ this.name = "AmmoJSPlugin";
        this._timeStep = 1 / 60;
        this._fixedTimeStep = 1 / 60;
        this._maxSteps = 5;
        this._tmpQuaternion = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Quaternion"]();
        this._tmpContactCallbackResult = false;
        this._tmpContactPoint = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]();
        this._tmpContactNormal = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]();
        this._tmpVec3 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]();
        this._tmpMatrix = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"]();
        if (typeof ammoInjection === "function") {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Error("AmmoJS is not ready. Please make sure you await Ammo() before using the plugin.");
            return;
        } else {
            this.bjsAMMO = ammoInjection;
        }
        if (!this.isSupported()) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Error("AmmoJS is not available. Please make sure you included the js file.");
            return;
        }
        // Initialize the physics world
        this._collisionConfiguration = new this.bjsAMMO.btSoftBodyRigidBodyCollisionConfiguration();
        this._dispatcher = new this.bjsAMMO.btCollisionDispatcher(this._collisionConfiguration);
        this._overlappingPairCache = overlappingPairCache || new this.bjsAMMO.btDbvtBroadphase();
        this._solver = new this.bjsAMMO.btSequentialImpulseConstraintSolver();
        this._softBodySolver = new this.bjsAMMO.btDefaultSoftBodySolver();
        this.world = new this.bjsAMMO.btSoftRigidDynamicsWorld(this._dispatcher, this._overlappingPairCache, this._solver, this._collisionConfiguration, this._softBodySolver);
        this._tmpAmmoConcreteContactResultCallback = new this.bjsAMMO.ConcreteContactResultCallback();
        this._tmpAmmoConcreteContactResultCallback.addSingleResult = (contactPoint)=>{
            contactPoint = this.bjsAMMO.wrapPointer(contactPoint, this.bjsAMMO.btManifoldPoint);
            const worldPoint = contactPoint.getPositionWorldOnA();
            const worldNormal = contactPoint.m_normalWorldOnB;
            this._tmpContactPoint.x = worldPoint.x();
            this._tmpContactPoint.y = worldPoint.y();
            this._tmpContactPoint.z = worldPoint.z();
            this._tmpContactNormal.x = worldNormal.x();
            this._tmpContactNormal.y = worldNormal.y();
            this._tmpContactNormal.z = worldNormal.z();
            this._tmpContactImpulse = contactPoint.getAppliedImpulse();
            this._tmpContactDistance = contactPoint.getDistance();
            this._tmpContactCallbackResult = true;
        };
        this._raycastResult = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$physicsRaycastResult$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsRaycastResult"]();
        // Create temp ammo variables
        this._tmpAmmoTransform = new this.bjsAMMO.btTransform();
        this._tmpAmmoTransform.setIdentity();
        this._tmpAmmoQuaternion = new this.bjsAMMO.btQuaternion(0, 0, 0, 1);
        this._tmpAmmoVectorA = new this.bjsAMMO.btVector3(0, 0, 0);
        this._tmpAmmoVectorB = new this.bjsAMMO.btVector3(0, 0, 0);
        this._tmpAmmoVectorC = new this.bjsAMMO.btVector3(0, 0, 0);
        this._tmpAmmoVectorD = new this.bjsAMMO.btVector3(0, 0, 0);
    }
    /**
     *
     * @returns plugin version
     */ getPluginVersion() {
        return 1;
    }
    /**
     * Sets the gravity of the physics world (m/(s^2))
     * @param gravity Gravity to set
     */ setGravity(gravity) {
        this._tmpAmmoVectorA.setValue(gravity.x, gravity.y, gravity.z);
        this.world.setGravity(this._tmpAmmoVectorA);
        this.world.getWorldInfo().set_m_gravity(this._tmpAmmoVectorA);
    }
    /**
     * Amount of time to step forward on each frame (only used if useDeltaForWorldStep is false in the constructor)
     * @param timeStep timestep to use in seconds
     */ setTimeStep(timeStep) {
        this._timeStep = timeStep;
    }
    /**
     * Increment to step forward in the physics engine (If timeStep is set to 1/60 and fixedTimeStep is set to 1/120 the physics engine should run 2 steps per frame) (Default: 1/60)
     * @param fixedTimeStep fixedTimeStep to use in seconds
     */ setFixedTimeStep(fixedTimeStep) {
        this._fixedTimeStep = fixedTimeStep;
    }
    /**
     * Sets the maximum number of steps by the physics engine per frame (Default: 5)
     * @param maxSteps the maximum number of steps by the physics engine per frame
     */ setMaxSteps(maxSteps) {
        this._maxSteps = maxSteps;
    }
    /**
     * Gets the current timestep (only used if useDeltaForWorldStep is false in the constructor)
     * @returns the current timestep in seconds
     */ getTimeStep() {
        return this._timeStep;
    }
    // Ammo's contactTest and contactPairTest take a callback that runs synchronously, wrap them so that they are easier to consume
    _isImpostorInContact(impostor) {
        this._tmpContactCallbackResult = false;
        this.world.contactTest(impostor.physicsBody, this._tmpAmmoConcreteContactResultCallback);
        return this._tmpContactCallbackResult;
    }
    // Ammo's collision events have some weird quirks
    // contactPairTest fires too many events as it fires events even when objects are close together but contactTest does not
    // so only fire event if both contactTest and contactPairTest have a hit
    _isImpostorPairInContact(impostorA, impostorB) {
        this._tmpContactCallbackResult = false;
        this.world.contactPairTest(impostorA.physicsBody, impostorB.physicsBody, this._tmpAmmoConcreteContactResultCallback);
        return this._tmpContactCallbackResult;
    }
    // Ammo's behavior when maxSteps > 0 does not behave as described in docs
    // @see http://www.bulletphysics.org/mediawiki-1.5.8/index.php/Stepping_The_World
    //
    // When maxSteps is 0 do the entire simulation in one step
    // When maxSteps is > 0, run up to maxStep times, if on the last step the (remaining step - fixedTimeStep) is < fixedTimeStep, the remainder will be used for the step. (eg. if remainder is 1.001 and fixedTimeStep is 1 the last step will be 1.001, if instead it did 2 steps (1, 0.001) issues occuered when having a tiny step in ammo)
    // Note: To get deterministic physics, timeStep would always need to be divisible by fixedTimeStep
    _stepSimulation(timeStep = 1 / 60, maxSteps = 10, fixedTimeStep = 1 / 60) {
        if (maxSteps == 0) {
            this.world.stepSimulation(timeStep, 0);
        } else {
            while(maxSteps > 0 && timeStep > 0){
                if (timeStep - fixedTimeStep < fixedTimeStep) {
                    this.world.stepSimulation(timeStep, 0);
                    timeStep = 0;
                } else {
                    timeStep -= fixedTimeStep;
                    this.world.stepSimulation(fixedTimeStep, 0);
                }
                maxSteps--;
            }
        }
    }
    /**
     * Moves the physics simulation forward delta seconds and updates the given physics imposters
     * Prior to the step the imposters physics location is set to the position of the babylon meshes
     * After the step the babylon meshes are set to the position of the physics imposters
     * @param delta amount of time to step forward
     * @param impostors array of imposters to update before/after the step
     */ executeStep(delta, impostors) {
        for (const impostor of impostors){
            // Update physics world objects to match babylon world
            if (!impostor.soft) {
                impostor.beforeStep();
            }
        }
        this._stepSimulation(this._useDeltaForWorldStep ? delta : this._timeStep, this._maxSteps, this._fixedTimeStep);
        for (const mainImpostor of impostors){
            // After physics update make babylon world objects match physics world objects
            if (mainImpostor.soft) {
                this._afterSoftStep(mainImpostor);
            } else {
                mainImpostor.afterStep();
            }
            // Handle collision event
            if (mainImpostor._onPhysicsCollideCallbacks.length > 0) {
                if (this._isImpostorInContact(mainImpostor)) {
                    for (const collideCallback of mainImpostor._onPhysicsCollideCallbacks){
                        for (const otherImpostor of collideCallback.otherImpostors){
                            if (mainImpostor.physicsBody.isActive() || otherImpostor.physicsBody.isActive()) {
                                if (this._isImpostorPairInContact(mainImpostor, otherImpostor)) {
                                    mainImpostor.onCollide({
                                        body: otherImpostor.physicsBody,
                                        point: this._tmpContactPoint,
                                        distance: this._tmpContactDistance,
                                        impulse: this._tmpContactImpulse,
                                        normal: this._tmpContactNormal
                                    });
                                    otherImpostor.onCollide({
                                        body: mainImpostor.physicsBody,
                                        point: this._tmpContactPoint,
                                        distance: this._tmpContactDistance,
                                        impulse: this._tmpContactImpulse,
                                        normal: this._tmpContactNormal
                                    });
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    /**
     * Update babylon mesh to match physics world object
     * @param impostor imposter to match
     */ _afterSoftStep(impostor) {
        if (impostor.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$physicsImpostor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsImpostor"].RopeImpostor) {
            this._ropeStep(impostor);
        } else {
            this._softbodyOrClothStep(impostor);
        }
    }
    /**
     * Update babylon mesh vertices vertices to match physics world softbody or cloth
     * @param impostor imposter to match
     */ _ropeStep(impostor) {
        const bodyVertices = impostor.physicsBody.get_m_nodes();
        const nbVertices = bodyVertices.size();
        let node;
        let nodePositions;
        let x, y, z;
        const path = [];
        for(let n = 0; n < nbVertices; n++){
            node = bodyVertices.at(n);
            nodePositions = node.get_m_x();
            x = nodePositions.x();
            y = nodePositions.y();
            z = nodePositions.z();
            path.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](x, y, z));
        }
        const object = impostor.object;
        const shape = impostor.getParam("shape");
        if (impostor._isFromLine) {
            impostor.object = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$linesBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreateLines"])("lines", {
                points: path,
                instance: object
            });
        } else {
            impostor.object = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$shapeBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ExtrudeShape"])("ext", {
                shape: shape,
                path: path,
                instance: object
            });
        }
    }
    /**
     * Update babylon mesh vertices vertices to match physics world softbody or cloth
     * @param impostor imposter to match
     */ _softbodyOrClothStep(impostor) {
        const normalDirection = impostor.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$physicsImpostor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsImpostor"].ClothImpostor ? 1 : -1;
        const object = impostor.object;
        let vertexPositions = object.getVerticesData(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexBuffer"].PositionKind);
        if (!vertexPositions) {
            vertexPositions = [];
        }
        let vertexNormals = object.getVerticesData(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexBuffer"].NormalKind);
        if (!vertexNormals) {
            vertexNormals = [];
        }
        const nbVertices = vertexPositions.length / 3;
        const bodyVertices = impostor.physicsBody.get_m_nodes();
        let node;
        let nodePositions;
        let x, y, z;
        let nx, ny, nz;
        for(let n = 0; n < nbVertices; n++){
            node = bodyVertices.at(n);
            nodePositions = node.get_m_x();
            x = nodePositions.x();
            y = nodePositions.y();
            z = nodePositions.z() * normalDirection;
            const nodeNormals = node.get_m_n();
            nx = nodeNormals.x();
            ny = nodeNormals.y();
            nz = nodeNormals.z() * normalDirection;
            vertexPositions[3 * n] = x;
            vertexPositions[3 * n + 1] = y;
            vertexPositions[3 * n + 2] = z;
            vertexNormals[3 * n] = nx;
            vertexNormals[3 * n + 1] = ny;
            vertexNormals[3 * n + 2] = nz;
        }
        const vertexData = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$vertexData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexData"]();
        vertexData.positions = vertexPositions;
        vertexData.normals = vertexNormals;
        vertexData.uvs = object.getVerticesData(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexBuffer"].UVKind);
        vertexData.colors = object.getVerticesData(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexBuffer"].ColorKind);
        if (object && object.getIndices) {
            vertexData.indices = object.getIndices();
        }
        vertexData.applyToMesh(object);
    }
    /**
     * Applies an impulse on the imposter
     * @param impostor imposter to apply impulse to
     * @param force amount of force to be applied to the imposter
     * @param contactPoint the location to apply the impulse on the imposter
     */ applyImpulse(impostor, force, contactPoint) {
        if (!impostor.soft) {
            impostor.physicsBody.activate();
            const worldPoint = this._tmpAmmoVectorA;
            const impulse = this._tmpAmmoVectorB;
            // Convert contactPoint relative to center of mass
            if (impostor.object && impostor.object.getWorldMatrix) {
                contactPoint.subtractInPlace(impostor.object.getWorldMatrix().getTranslation());
            }
            worldPoint.setValue(contactPoint.x, contactPoint.y, contactPoint.z);
            impulse.setValue(force.x, force.y, force.z);
            impostor.physicsBody.applyImpulse(impulse, worldPoint);
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Warn("Cannot be applied to a soft body");
        }
    }
    /**
     * Applies a force on the imposter
     * @param impostor imposter to apply force
     * @param force amount of force to be applied to the imposter
     * @param contactPoint the location to apply the force on the imposter
     */ applyForce(impostor, force, contactPoint) {
        if (!impostor.soft) {
            impostor.physicsBody.activate();
            const worldPoint = this._tmpAmmoVectorA;
            const impulse = this._tmpAmmoVectorB;
            // Convert contactPoint relative to center of mass
            if (impostor.object && impostor.object.getWorldMatrix) {
                const localTranslation = impostor.object.getWorldMatrix().getTranslation();
                worldPoint.setValue(contactPoint.x - localTranslation.x, contactPoint.y - localTranslation.y, contactPoint.z - localTranslation.z);
            } else {
                worldPoint.setValue(contactPoint.x, contactPoint.y, contactPoint.z);
            }
            impulse.setValue(force.x, force.y, force.z);
            impostor.physicsBody.applyForce(impulse, worldPoint);
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Warn("Cannot be applied to a soft body");
        }
    }
    /**
     * Creates a physics body using the plugin
     * @param impostor the imposter to create the physics body on
     */ generatePhysicsBody(impostor) {
        // Note: this method will not be called on child imposotrs for compound impostors
        impostor._pluginData.toDispose = [];
        //parent-child relationship
        if (impostor.parent) {
            if (impostor.physicsBody) {
                this.removePhysicsBody(impostor);
                impostor.forceUpdate();
            }
            return;
        }
        if (impostor.isBodyInitRequired()) {
            const colShape = this._createShape(impostor);
            const mass = impostor.getParam("mass");
            impostor._pluginData.mass = mass;
            if (impostor.soft) {
                colShape.get_m_cfg().set_collisions(0x11);
                colShape.get_m_cfg().set_kDP(impostor.getParam("damping"));
                this.bjsAMMO.castObject(colShape, this.bjsAMMO.btCollisionObject).getCollisionShape().setMargin(impostor.getParam("margin"));
                colShape.setActivationState(AmmoJSPlugin._DISABLE_DEACTIVATION_FLAG);
                this.world.addSoftBody(colShape, 1, -1);
                impostor.physicsBody = colShape;
                impostor._pluginData.toDispose.push(colShape);
                this.setBodyPressure(impostor, 0);
                if (impostor.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$physicsImpostor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsImpostor"].SoftbodyImpostor) {
                    this.setBodyPressure(impostor, impostor.getParam("pressure"));
                }
                this.setBodyStiffness(impostor, impostor.getParam("stiffness"));
                this.setBodyVelocityIterations(impostor, impostor.getParam("velocityIterations"));
                this.setBodyPositionIterations(impostor, impostor.getParam("positionIterations"));
            } else {
                const localInertia = new this.bjsAMMO.btVector3(0, 0, 0);
                const startTransform = new this.bjsAMMO.btTransform();
                impostor.object.computeWorldMatrix(true);
                startTransform.setIdentity();
                if (mass !== 0) {
                    colShape.calculateLocalInertia(mass, localInertia);
                }
                this._tmpAmmoVectorA.setValue(impostor.object.position.x, impostor.object.position.y, impostor.object.position.z);
                this._tmpAmmoQuaternion.setValue(impostor.object.rotationQuaternion.x, impostor.object.rotationQuaternion.y, impostor.object.rotationQuaternion.z, impostor.object.rotationQuaternion.w);
                startTransform.setOrigin(this._tmpAmmoVectorA);
                startTransform.setRotation(this._tmpAmmoQuaternion);
                const myMotionState = new this.bjsAMMO.btDefaultMotionState(startTransform);
                const rbInfo = new this.bjsAMMO.btRigidBodyConstructionInfo(mass, myMotionState, colShape, localInertia);
                const body = new this.bjsAMMO.btRigidBody(rbInfo);
                // Make objects kinematic if it's mass is 0
                if (mass === 0) {
                    body.setCollisionFlags(body.getCollisionFlags() | AmmoJSPlugin._KINEMATIC_FLAG);
                    body.setActivationState(AmmoJSPlugin._DISABLE_DEACTIVATION_FLAG);
                }
                // Disable collision if NoImpostor, but keep collision if shape is btCompoundShape
                if (impostor.type == __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$physicsImpostor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsImpostor"].NoImpostor && !colShape.getChildShape) {
                    body.setCollisionFlags(body.getCollisionFlags() | AmmoJSPlugin._DISABLE_COLLISION_FLAG);
                }
                // compute delta position: compensate the difference between shape center and mesh origin
                if (impostor.type !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$physicsImpostor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsImpostor"].MeshImpostor && impostor.type !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$physicsImpostor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsImpostor"].NoImpostor) {
                    const boundingInfo = impostor.object.getBoundingInfo();
                    this._tmpVec3.copyFrom(impostor.object.getAbsolutePosition());
                    this._tmpVec3.subtractInPlace(boundingInfo.boundingBox.centerWorld);
                    this._tmpVec3.x /= impostor.object.scaling.x;
                    this._tmpVec3.y /= impostor.object.scaling.y;
                    this._tmpVec3.z /= impostor.object.scaling.z;
                    impostor.setDeltaPosition(this._tmpVec3);
                }
                const group = impostor.getParam("group");
                const mask = impostor.getParam("mask");
                if (group && mask) {
                    this.world.addRigidBody(body, group, mask);
                } else {
                    this.world.addRigidBody(body);
                }
                impostor.physicsBody = body;
                impostor._pluginData.toDispose = impostor._pluginData.toDispose.concat([
                    body,
                    rbInfo,
                    myMotionState,
                    startTransform,
                    localInertia,
                    colShape
                ]);
            }
            this.setBodyRestitution(impostor, impostor.getParam("restitution"));
            this.setBodyFriction(impostor, impostor.getParam("friction"));
        }
    }
    /**
     * Removes the physics body from the imposter and disposes of the body's memory
     * @param impostor imposter to remove the physics body from
     */ removePhysicsBody(impostor) {
        if (this.world) {
            if (impostor.soft) {
                this.world.removeSoftBody(impostor.physicsBody);
            } else {
                this.world.removeRigidBody(impostor.physicsBody);
            }
            if (impostor._pluginData) {
                for (const d of impostor._pluginData.toDispose){
                    this.bjsAMMO.destroy(d);
                }
                impostor._pluginData.toDispose = [];
            }
        }
    }
    /**
     * Generates a joint
     * @param impostorJoint the imposter joint to create the joint with
     */ generateJoint(impostorJoint) {
        const mainBody = impostorJoint.mainImpostor.physicsBody;
        const connectedBody = impostorJoint.connectedImpostor.physicsBody;
        if (!mainBody || !connectedBody) {
            return;
        }
        // if the joint is already created, don't create it again for preventing memory leaks
        if (impostorJoint.joint.physicsJoint) {
            return;
        }
        const jointData = impostorJoint.joint.jointData;
        if (!jointData.mainPivot) {
            jointData.mainPivot = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](0, 0, 0);
        }
        if (!jointData.connectedPivot) {
            jointData.connectedPivot = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](0, 0, 0);
        }
        let joint;
        switch(impostorJoint.joint.type){
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$physicsJoint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsJoint"].DistanceJoint:
                {
                    const distance = jointData.maxDistance;
                    if (distance) {
                        jointData.mainPivot = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](0, -distance / 2, 0);
                        jointData.connectedPivot = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](0, distance / 2, 0);
                    }
                    const mainPivot = this._tmpAmmoVectorA;
                    mainPivot.setValue(jointData.mainPivot.x, jointData.mainPivot.y, jointData.mainPivot.z);
                    const connectedPivot = this._tmpAmmoVectorB;
                    connectedPivot.setValue(jointData.connectedPivot.x, jointData.connectedPivot.y, jointData.connectedPivot.z);
                    joint = new this.bjsAMMO.btPoint2PointConstraint(mainBody, connectedBody, mainPivot, connectedPivot);
                    break;
                }
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$physicsJoint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsJoint"].HingeJoint:
                {
                    if (!jointData.mainAxis) {
                        jointData.mainAxis = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](0, 0, 0);
                    }
                    if (!jointData.connectedAxis) {
                        jointData.connectedAxis = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](0, 0, 0);
                    }
                    const mainPivot = this._tmpAmmoVectorA;
                    mainPivot.setValue(jointData.mainPivot.x, jointData.mainPivot.y, jointData.mainPivot.z);
                    const connectedPivot = this._tmpAmmoVectorB;
                    connectedPivot.setValue(jointData.connectedPivot.x, jointData.connectedPivot.y, jointData.connectedPivot.z);
                    const mainAxis = this._tmpAmmoVectorC;
                    mainAxis.setValue(jointData.mainAxis.x, jointData.mainAxis.y, jointData.mainAxis.z);
                    const connectedAxis = this._tmpAmmoVectorD;
                    connectedAxis.setValue(jointData.connectedAxis.x, jointData.connectedAxis.y, jointData.connectedAxis.z);
                    joint = new this.bjsAMMO.btHingeConstraint(mainBody, connectedBody, mainPivot, connectedPivot, mainAxis, connectedAxis);
                    break;
                }
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$physicsJoint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsJoint"].BallAndSocketJoint:
                {
                    const mainPivot = this._tmpAmmoVectorA;
                    mainPivot.setValue(jointData.mainPivot.x, jointData.mainPivot.y, jointData.mainPivot.z);
                    const connectedPivot = this._tmpAmmoVectorB;
                    connectedPivot.setValue(jointData.connectedPivot.x, jointData.connectedPivot.y, jointData.connectedPivot.z);
                    joint = new this.bjsAMMO.btPoint2PointConstraint(mainBody, connectedBody, mainPivot, connectedPivot);
                    break;
                }
            default:
                {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Warn("JointType not currently supported by the Ammo plugin, falling back to PhysicsJoint.BallAndSocketJoint");
                    const mainPivot = this._tmpAmmoVectorA;
                    mainPivot.setValue(jointData.mainPivot.x, jointData.mainPivot.y, jointData.mainPivot.z);
                    const connectedPivot = this._tmpAmmoVectorB;
                    connectedPivot.setValue(jointData.connectedPivot.x, jointData.connectedPivot.y, jointData.connectedPivot.z);
                    joint = new this.bjsAMMO.btPoint2PointConstraint(mainBody, connectedBody, mainPivot, connectedPivot);
                    break;
                }
        }
        this.world.addConstraint(joint, !impostorJoint.joint.jointData.collision);
        impostorJoint.joint.physicsJoint = joint;
    }
    /**
     * Removes a joint
     * @param impostorJoint the imposter joint to remove the joint from
     */ removeJoint(impostorJoint) {
        if (this.world) {
            this.world.removeConstraint(impostorJoint.joint.physicsJoint);
        }
        this.bjsAMMO.destroy(impostorJoint.joint.physicsJoint);
    }
    // adds all verticies (including child verticies) to the triangle mesh
    _addMeshVerts(btTriangleMesh, topLevelObject, object) {
        let triangleCount = 0;
        if (object && object.getIndices && object.getWorldMatrix && object.getChildMeshes) {
            let indices = object.getIndices();
            if (!indices) {
                indices = [];
            }
            let vertexPositions = object.getVerticesData(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexBuffer"].PositionKind);
            if (!vertexPositions) {
                vertexPositions = [];
            }
            let localMatrix;
            if (topLevelObject && topLevelObject !== object) {
                // top level matrix used for shape transform doesn't take scale into account.
                // Moreover, every children vertex position must be in that space.
                // So, each vertex position here is transform by (mesh world matrix * toplevelMatrix -1)
                let topLevelQuaternion;
                if (topLevelObject.rotationQuaternion) {
                    topLevelQuaternion = topLevelObject.rotationQuaternion;
                } else if (topLevelObject.rotation) {
                    topLevelQuaternion = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Quaternion"].FromEulerAngles(topLevelObject.rotation.x, topLevelObject.rotation.y, topLevelObject.rotation.z);
                } else {
                    topLevelQuaternion = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Quaternion"].Identity();
                }
                const topLevelMatrix = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"].Compose(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].One(), topLevelQuaternion, topLevelObject.position);
                topLevelMatrix.invertToRef(this._tmpMatrix);
                const wm = object.computeWorldMatrix(false);
                localMatrix = wm.multiply(this._tmpMatrix);
            } else {
                // current top level is same as object level -> only use local scaling
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"].ScalingToRef(object.scaling.x, object.scaling.y, object.scaling.z, this._tmpMatrix);
                localMatrix = this._tmpMatrix;
            }
            const faceCount = indices.length / 3;
            for(let i = 0; i < faceCount; i++){
                const triPoints = [];
                for(let point = 0; point < 3; point++){
                    let v = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](vertexPositions[indices[i * 3 + point] * 3 + 0], vertexPositions[indices[i * 3 + point] * 3 + 1], vertexPositions[indices[i * 3 + point] * 3 + 2]);
                    v = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinates(v, localMatrix);
                    let vec;
                    if (point == 0) {
                        vec = this._tmpAmmoVectorA;
                    } else if (point == 1) {
                        vec = this._tmpAmmoVectorB;
                    } else {
                        vec = this._tmpAmmoVectorC;
                    }
                    vec.setValue(v.x, v.y, v.z);
                    triPoints.push(vec);
                }
                btTriangleMesh.addTriangle(triPoints[0], triPoints[1], triPoints[2]);
                triangleCount++;
            }
            const childMeshes = object.getChildMeshes();
            for (const m of childMeshes){
                triangleCount += this._addMeshVerts(btTriangleMesh, topLevelObject, m);
            }
        }
        return triangleCount;
    }
    /**
     * Initialise the soft body vertices to match its object's (mesh) vertices
     * Softbody vertices (nodes) are in world space and to match this
     * The object's position and rotation is set to zero and so its vertices are also then set in world space
     * @param impostor to create the softbody for
     * @returns the number of vertices added to the softbody
     */ _softVertexData(impostor) {
        const object = impostor.object;
        if (object && object.getIndices && object.getWorldMatrix && object.getChildMeshes) {
            let indices = object.getIndices();
            if (!indices) {
                indices = [];
            }
            let vertexPositions = object.getVerticesData(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexBuffer"].PositionKind);
            if (!vertexPositions) {
                vertexPositions = [];
            }
            let vertexNormals = object.getVerticesData(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexBuffer"].NormalKind);
            if (!vertexNormals) {
                vertexNormals = [];
            }
            object.computeWorldMatrix(false);
            const newPoints = [];
            const newNorms = [];
            for(let i = 0; i < vertexPositions.length; i += 3){
                let v = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](vertexPositions[i], vertexPositions[i + 1], vertexPositions[i + 2]);
                let n = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](vertexNormals[i], vertexNormals[i + 1], vertexNormals[i + 2]);
                v = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinates(v, object.getWorldMatrix());
                n = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].TransformNormal(n, object.getWorldMatrix());
                newPoints.push(v.x, v.y, v.z);
                newNorms.push(n.x, n.y, n.z);
            }
            const vertexData = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$vertexData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexData"]();
            vertexData.positions = newPoints;
            vertexData.normals = newNorms;
            vertexData.uvs = object.getVerticesData(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexBuffer"].UVKind);
            vertexData.colors = object.getVerticesData(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexBuffer"].ColorKind);
            if (object && object.getIndices) {
                vertexData.indices = object.getIndices();
            }
            vertexData.applyToMesh(object);
            object.position = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Zero();
            object.rotationQuaternion = null;
            object.rotation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Zero();
            object.computeWorldMatrix(true);
            return vertexData;
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$vertexData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexData"].ExtractFromMesh(object);
    }
    /**
     * Create an impostor's soft body
     * @param impostor to create the softbody for
     * @returns the softbody
     */ _createSoftbody(impostor) {
        const object = impostor.object;
        if (object && object.getIndices) {
            let indices = object.getIndices();
            if (!indices) {
                indices = [];
            }
            const vertexData = this._softVertexData(impostor);
            const vertexPositions = vertexData.positions;
            const vertexNormals = vertexData.normals;
            if (vertexPositions === null || vertexNormals === null) {
                return new this.bjsAMMO.btCompoundShape();
            } else {
                const triPoints = [];
                const triNorms = [];
                for(let i = 0; i < vertexPositions.length; i += 3){
                    const v = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](vertexPositions[i], vertexPositions[i + 1], vertexPositions[i + 2]);
                    const n = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](vertexNormals[i], vertexNormals[i + 1], vertexNormals[i + 2]);
                    triPoints.push(v.x, v.y, -v.z);
                    triNorms.push(n.x, n.y, -n.z);
                }
                const softBody = new this.bjsAMMO.btSoftBodyHelpers().CreateFromTriMesh(this.world.getWorldInfo(), triPoints, object.getIndices(), indices.length / 3, true);
                const nbVertices = vertexPositions.length / 3;
                const bodyVertices = softBody.get_m_nodes();
                let node;
                let nodeNormals;
                for(let i = 0; i < nbVertices; i++){
                    node = bodyVertices.at(i);
                    nodeNormals = node.get_m_n();
                    nodeNormals.setX(triNorms[3 * i]);
                    nodeNormals.setY(triNorms[3 * i + 1]);
                    nodeNormals.setZ(triNorms[3 * i + 2]);
                }
                return softBody;
            }
        }
    }
    /**
     * Create cloth for an impostor
     * @param impostor to create the softbody for
     * @returns the cloth
     */ _createCloth(impostor) {
        const object = impostor.object;
        if (object && object.getIndices) {
            let indices = object.getIndices();
            if (!indices) {
                indices = [];
            }
            const vertexData = this._softVertexData(impostor);
            const vertexPositions = vertexData.positions;
            const vertexNormals = vertexData.normals;
            if (vertexPositions === null || vertexNormals === null) {
                return new this.bjsAMMO.btCompoundShape();
            } else {
                const len = vertexPositions.length;
                const segments = Math.sqrt(len / 3);
                impostor.segments = segments;
                const segs = segments - 1;
                this._tmpAmmoVectorA.setValue(vertexPositions[0], vertexPositions[1], vertexPositions[2]);
                this._tmpAmmoVectorB.setValue(vertexPositions[3 * segs], vertexPositions[3 * segs + 1], vertexPositions[3 * segs + 2]);
                this._tmpAmmoVectorD.setValue(vertexPositions[len - 3], vertexPositions[len - 2], vertexPositions[len - 1]);
                this._tmpAmmoVectorC.setValue(vertexPositions[len - 3 - 3 * segs], vertexPositions[len - 2 - 3 * segs], vertexPositions[len - 1 - 3 * segs]);
                const clothBody = new this.bjsAMMO.btSoftBodyHelpers().CreatePatch(this.world.getWorldInfo(), this._tmpAmmoVectorA, this._tmpAmmoVectorB, this._tmpAmmoVectorC, this._tmpAmmoVectorD, segments, segments, impostor.getParam("fixedPoints"), true);
                return clothBody;
            }
        }
    }
    /**
     * Create rope for an impostor
     * @param impostor to create the softbody for
     * @returns the rope
     */ _createRope(impostor) {
        let len;
        let segments;
        const vertexData = this._softVertexData(impostor);
        const vertexPositions = vertexData.positions;
        const vertexNormals = vertexData.normals;
        if (vertexPositions === null || vertexNormals === null) {
            return new this.bjsAMMO.btCompoundShape();
        }
        //force the mesh to be updatable
        vertexData.applyToMesh(impostor.object, true);
        impostor._isFromLine = true;
        // If in lines mesh all normals will be zero
        const vertexSquared = vertexNormals.map((x)=>x * x);
        const reducer = (accumulator, currentValue)=>accumulator + currentValue;
        const reduced = vertexSquared.reduce(reducer);
        if (reduced === 0) {
            // line mesh
            len = vertexPositions.length;
            segments = len / 3 - 1;
            this._tmpAmmoVectorA.setValue(vertexPositions[0], vertexPositions[1], vertexPositions[2]);
            this._tmpAmmoVectorB.setValue(vertexPositions[len - 3], vertexPositions[len - 2], vertexPositions[len - 1]);
        } else {
            //extruded mesh
            impostor._isFromLine = false;
            const pathVectors = impostor.getParam("path");
            const shape = impostor.getParam("shape");
            if (shape === null) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Warn("No shape available for extruded mesh");
                return new this.bjsAMMO.btCompoundShape();
            }
            len = pathVectors.length;
            segments = len - 1;
            this._tmpAmmoVectorA.setValue(pathVectors[0].x, pathVectors[0].y, pathVectors[0].z);
            this._tmpAmmoVectorB.setValue(pathVectors[len - 1].x, pathVectors[len - 1].y, pathVectors[len - 1].z);
        }
        impostor.segments = segments;
        let fixedPoints = impostor.getParam("fixedPoints");
        fixedPoints = fixedPoints > 3 ? 3 : fixedPoints;
        const ropeBody = new this.bjsAMMO.btSoftBodyHelpers().CreateRope(this.world.getWorldInfo(), this._tmpAmmoVectorA, this._tmpAmmoVectorB, segments - 1, fixedPoints);
        ropeBody.get_m_cfg().set_collisions(0x11);
        return ropeBody;
    }
    /**
     * Create a custom physics impostor shape using the plugin's onCreateCustomShape handler
     * @param impostor to create the custom physics shape for
     * @returns the custom physics shape
     */ _createCustom(impostor) {
        let returnValue = null;
        if (this.onCreateCustomShape) {
            returnValue = this.onCreateCustomShape(impostor);
        }
        if (returnValue == null) {
            returnValue = new this.bjsAMMO.btCompoundShape();
        }
        return returnValue;
    }
    // adds all verticies (including child verticies) to the convex hull shape
    _addHullVerts(btConvexHullShape, topLevelObject, object) {
        let triangleCount = 0;
        if (object && object.getIndices && object.getWorldMatrix && object.getChildMeshes) {
            let indices = object.getIndices();
            if (!indices) {
                indices = [];
            }
            let vertexPositions = object.getVerticesData(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexBuffer"].PositionKind);
            if (!vertexPositions) {
                vertexPositions = [];
            }
            object.computeWorldMatrix(false);
            const faceCount = indices.length / 3;
            for(let i = 0; i < faceCount; i++){
                const triPoints = [];
                for(let point = 0; point < 3; point++){
                    let v = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](vertexPositions[indices[i * 3 + point] * 3 + 0], vertexPositions[indices[i * 3 + point] * 3 + 1], vertexPositions[indices[i * 3 + point] * 3 + 2]);
                    // Adjust for initial scaling
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"].ScalingToRef(object.scaling.x, object.scaling.y, object.scaling.z, this._tmpMatrix);
                    v = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinates(v, this._tmpMatrix);
                    let vec;
                    if (point == 0) {
                        vec = this._tmpAmmoVectorA;
                    } else if (point == 1) {
                        vec = this._tmpAmmoVectorB;
                    } else {
                        vec = this._tmpAmmoVectorC;
                    }
                    vec.setValue(v.x, v.y, v.z);
                    triPoints.push(vec);
                }
                btConvexHullShape.addPoint(triPoints[0], true);
                btConvexHullShape.addPoint(triPoints[1], true);
                btConvexHullShape.addPoint(triPoints[2], true);
                triangleCount++;
            }
            const childMeshes = object.getChildMeshes();
            for (const m of childMeshes){
                triangleCount += this._addHullVerts(btConvexHullShape, topLevelObject, m);
            }
        }
        return triangleCount;
    }
    _createShape(impostor, ignoreChildren = false) {
        const object = impostor.object;
        let returnValue;
        const impostorExtents = impostor.getObjectExtents();
        if (!ignoreChildren) {
            const meshChildren = impostor.object.getChildMeshes ? impostor.object.getChildMeshes(true) : [];
            returnValue = new this.bjsAMMO.btCompoundShape();
            // Add shape of all children to the compound shape
            let childrenAdded = 0;
            for (const childMesh of meshChildren){
                const childImpostor = childMesh.getPhysicsImpostor();
                if (childImpostor) {
                    if (childImpostor.type == __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$physicsImpostor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsImpostor"].MeshImpostor) {
                        // eslint-disable-next-line no-throw-literal
                        throw "A child MeshImpostor is not supported. Only primitive impostors are supported as children (eg. box or sphere)";
                    }
                    const shape = this._createShape(childImpostor);
                    // Position needs to be scaled based on parent's scaling
                    const parentMat = childMesh.parent.getWorldMatrix().clone();
                    const s = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]();
                    parentMat.decompose(s);
                    this._tmpAmmoTransform.getOrigin().setValue(childMesh.position.x * s.x, childMesh.position.y * s.y, childMesh.position.z * s.z);
                    this._tmpAmmoQuaternion.setValue(childMesh.rotationQuaternion.x, childMesh.rotationQuaternion.y, childMesh.rotationQuaternion.z, childMesh.rotationQuaternion.w);
                    this._tmpAmmoTransform.setRotation(this._tmpAmmoQuaternion);
                    returnValue.addChildShape(this._tmpAmmoTransform, shape);
                    childImpostor.dispose();
                    childrenAdded++;
                }
            }
            if (childrenAdded > 0) {
                // Add parents shape as a child if present
                if (impostor.type != __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$physicsImpostor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsImpostor"].NoImpostor) {
                    const shape = this._createShape(impostor, true);
                    if (shape) {
                        this._tmpAmmoTransform.getOrigin().setValue(0, 0, 0);
                        this._tmpAmmoQuaternion.setValue(0, 0, 0, 1);
                        this._tmpAmmoTransform.setRotation(this._tmpAmmoQuaternion);
                        returnValue.addChildShape(this._tmpAmmoTransform, shape);
                    }
                }
                return returnValue;
            } else {
                // If no children with impostors create the actual shape below instead
                this.bjsAMMO.destroy(returnValue);
                returnValue = null;
            }
        }
        switch(impostor.type){
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$physicsImpostor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsImpostor"].SphereImpostor:
                // Is there a better way to compare floats number? With an epsilon or with a Math function
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WithinEpsilon"])(impostorExtents.x, impostorExtents.y, 0.0001) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WithinEpsilon"])(impostorExtents.x, impostorExtents.z, 0.0001)) {
                    returnValue = new this.bjsAMMO.btSphereShape(impostorExtents.x / 2);
                } else {
                    // create a btMultiSphereShape because it's not possible to set a local scaling on a btSphereShape
                    this._tmpAmmoVectorA.setValue(0, 0, 0);
                    const positions = [
                        this._tmpAmmoVectorA
                    ];
                    const radii = [
                        1
                    ];
                    returnValue = new this.bjsAMMO.btMultiSphereShape(positions, radii, 1);
                    this._tmpAmmoVectorA.setValue(impostorExtents.x / 2, impostorExtents.y / 2, impostorExtents.z / 2);
                    returnValue.setLocalScaling(this._tmpAmmoVectorA);
                }
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$physicsImpostor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsImpostor"].CapsuleImpostor:
                {
                    // https://pybullet.org/Bullet/BulletFull/classbtCapsuleShape.html#details
                    // Height is just the height between the center of each 'sphere' of the capsule caps
                    const capRadius = impostorExtents.x / 2;
                    returnValue = new this.bjsAMMO.btCapsuleShape(capRadius, impostorExtents.y - capRadius * 2);
                }
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$physicsImpostor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsImpostor"].CylinderImpostor:
                this._tmpAmmoVectorA.setValue(impostorExtents.x / 2, impostorExtents.y / 2, impostorExtents.z / 2);
                returnValue = new this.bjsAMMO.btCylinderShape(this._tmpAmmoVectorA);
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$physicsImpostor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsImpostor"].PlaneImpostor:
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$physicsImpostor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsImpostor"].BoxImpostor:
                this._tmpAmmoVectorA.setValue(impostorExtents.x / 2, impostorExtents.y / 2, impostorExtents.z / 2);
                returnValue = new this.bjsAMMO.btBoxShape(this._tmpAmmoVectorA);
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$physicsImpostor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsImpostor"].MeshImpostor:
                {
                    if (impostor.getParam("mass") == 0) {
                        // Only create btBvhTriangleMeshShape if the impostor is static
                        // See https://pybullet.org/Bullet/phpBB3/viewtopic.php?t=7283
                        if (this.onCreateCustomMeshImpostor) {
                            returnValue = this.onCreateCustomMeshImpostor(impostor);
                        } else {
                            const triMesh = new this.bjsAMMO.btTriangleMesh();
                            impostor._pluginData.toDispose.push(triMesh);
                            const triangleCount = this._addMeshVerts(triMesh, object, object);
                            if (triangleCount == 0) {
                                returnValue = new this.bjsAMMO.btCompoundShape();
                            } else {
                                returnValue = new this.bjsAMMO.btBvhTriangleMeshShape(triMesh);
                            }
                        }
                        break;
                    }
                }
            // Otherwise create convexHullImpostor
            // eslint-disable-next-line no-fallthrough
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$physicsImpostor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsImpostor"].ConvexHullImpostor:
                {
                    if (this.onCreateCustomConvexHullImpostor) {
                        returnValue = this.onCreateCustomConvexHullImpostor(impostor);
                    } else {
                        const convexHull = new this.bjsAMMO.btConvexHullShape();
                        const triangleCount = this._addHullVerts(convexHull, object, object);
                        if (triangleCount == 0) {
                            // Cleanup Unused Convex Hull Shape
                            impostor._pluginData.toDispose.push(convexHull);
                            returnValue = new this.bjsAMMO.btCompoundShape();
                        } else {
                            returnValue = convexHull;
                        }
                    }
                    break;
                }
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$physicsImpostor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsImpostor"].NoImpostor:
                // Fill with sphere but collision is disabled on the rigid body in generatePhysicsBody, using an empty shape caused unexpected movement with joints
                returnValue = new this.bjsAMMO.btSphereShape(impostorExtents.x / 2);
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$physicsImpostor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsImpostor"].CustomImpostor:
                // Only usable when the plugin's onCreateCustomShape is set
                returnValue = this._createCustom(impostor);
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$physicsImpostor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsImpostor"].SoftbodyImpostor:
                // Only usable with a mesh that has sufficient and shared vertices
                returnValue = this._createSoftbody(impostor);
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$physicsImpostor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsImpostor"].ClothImpostor:
                // Only usable with a ground mesh that has sufficient and shared vertices
                returnValue = this._createCloth(impostor);
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$physicsImpostor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsImpostor"].RopeImpostor:
                // Only usable with a line mesh or an extruded mesh that is updatable
                returnValue = this._createRope(impostor);
                break;
            default:
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Warn("The impostor type is not currently supported by the ammo plugin.");
                break;
        }
        return returnValue;
    }
    /**
     * Sets the mesh body position/rotation from the babylon impostor
     * @param impostor imposter containing the physics body and babylon object
     */ setTransformationFromPhysicsBody(impostor) {
        impostor.physicsBody.getMotionState().getWorldTransform(this._tmpAmmoTransform);
        impostor.object.position.set(this._tmpAmmoTransform.getOrigin().x(), this._tmpAmmoTransform.getOrigin().y(), this._tmpAmmoTransform.getOrigin().z());
        if (!impostor.object.rotationQuaternion) {
            if (impostor.object.rotation) {
                this._tmpQuaternion.set(this._tmpAmmoTransform.getRotation().x(), this._tmpAmmoTransform.getRotation().y(), this._tmpAmmoTransform.getRotation().z(), this._tmpAmmoTransform.getRotation().w());
                this._tmpQuaternion.toEulerAnglesToRef(impostor.object.rotation);
            }
        } else {
            impostor.object.rotationQuaternion.set(this._tmpAmmoTransform.getRotation().x(), this._tmpAmmoTransform.getRotation().y(), this._tmpAmmoTransform.getRotation().z(), this._tmpAmmoTransform.getRotation().w());
        }
    }
    /**
     * Sets the babylon object's position/rotation from the physics body's position/rotation
     * @param impostor imposter containing the physics body and babylon object
     * @param newPosition new position
     * @param newRotation new rotation
     */ setPhysicsBodyTransformation(impostor, newPosition, newRotation) {
        const trans = impostor.physicsBody.getWorldTransform();
        // If rotation/position has changed update and activate rigged body
        if (Math.abs(trans.getOrigin().x() - newPosition.x) > __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Epsilon"] || Math.abs(trans.getOrigin().y() - newPosition.y) > __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Epsilon"] || Math.abs(trans.getOrigin().z() - newPosition.z) > __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Epsilon"] || Math.abs(trans.getRotation().x() - newRotation.x) > __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Epsilon"] || Math.abs(trans.getRotation().y() - newRotation.y) > __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Epsilon"] || Math.abs(trans.getRotation().z() - newRotation.z) > __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Epsilon"] || Math.abs(trans.getRotation().w() - newRotation.w) > __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Epsilon"]) {
            this._tmpAmmoVectorA.setValue(newPosition.x, newPosition.y, newPosition.z);
            trans.setOrigin(this._tmpAmmoVectorA);
            this._tmpAmmoQuaternion.setValue(newRotation.x, newRotation.y, newRotation.z, newRotation.w);
            trans.setRotation(this._tmpAmmoQuaternion);
            impostor.physicsBody.setWorldTransform(trans);
            if (impostor.mass == 0) {
                // Kinematic objects must be updated using motion state
                const motionState = impostor.physicsBody.getMotionState();
                if (motionState) {
                    motionState.setWorldTransform(trans);
                }
            } else {
                impostor.physicsBody.activate();
            }
        }
    }
    /**
     * If this plugin is supported
     * @returns true if its supported
     */ isSupported() {
        return this.bjsAMMO !== undefined;
    }
    /**
     * Sets the linear velocity of the physics body
     * @param impostor imposter to set the velocity on
     * @param velocity velocity to set
     */ setLinearVelocity(impostor, velocity) {
        this._tmpAmmoVectorA.setValue(velocity.x, velocity.y, velocity.z);
        if (impostor.soft) {
            impostor.physicsBody.linearVelocity(this._tmpAmmoVectorA);
        } else {
            impostor.physicsBody.setLinearVelocity(this._tmpAmmoVectorA);
        }
    }
    /**
     * Sets the angular velocity of the physics body
     * @param impostor imposter to set the velocity on
     * @param velocity velocity to set
     */ setAngularVelocity(impostor, velocity) {
        this._tmpAmmoVectorA.setValue(velocity.x, velocity.y, velocity.z);
        if (impostor.soft) {
            impostor.physicsBody.angularVelocity(this._tmpAmmoVectorA);
        } else {
            impostor.physicsBody.setAngularVelocity(this._tmpAmmoVectorA);
        }
    }
    /**
     * gets the linear velocity
     * @param impostor imposter to get linear velocity from
     * @returns linear velocity
     */ getLinearVelocity(impostor) {
        let v;
        if (impostor.soft) {
            v = impostor.physicsBody.linearVelocity();
        } else {
            v = impostor.physicsBody.getLinearVelocity();
        }
        if (!v) {
            return null;
        }
        const result = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](v.x(), v.y(), v.z());
        this.bjsAMMO.destroy(v);
        return result;
    }
    /**
     * gets the angular velocity
     * @param impostor imposter to get angular velocity from
     * @returns angular velocity
     */ getAngularVelocity(impostor) {
        let v;
        if (impostor.soft) {
            v = impostor.physicsBody.angularVelocity();
        } else {
            v = impostor.physicsBody.getAngularVelocity();
        }
        if (!v) {
            return null;
        }
        const result = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](v.x(), v.y(), v.z());
        this.bjsAMMO.destroy(v);
        return result;
    }
    /**
     * Sets the mass of physics body
     * @param impostor imposter to set the mass on
     * @param mass mass to set
     */ setBodyMass(impostor, mass) {
        if (impostor.soft) {
            impostor.physicsBody.setTotalMass(mass, false);
        } else {
            impostor.physicsBody.setMassProps(mass);
        }
        impostor._pluginData.mass = mass;
    }
    /**
     * Gets the mass of the physics body
     * @param impostor imposter to get the mass from
     * @returns mass
     */ getBodyMass(impostor) {
        return impostor._pluginData.mass || 0;
    }
    /**
     * Gets friction of the impostor
     * @param impostor impostor to get friction from
     * @returns friction value
     */ getBodyFriction(impostor) {
        return impostor._pluginData.friction || 0;
    }
    /**
     * Sets friction of the impostor
     * @param impostor impostor to set friction on
     * @param friction friction value
     */ setBodyFriction(impostor, friction) {
        if (impostor.soft) {
            impostor.physicsBody.get_m_cfg().set_kDF(friction);
        } else {
            impostor.physicsBody.setFriction(friction);
        }
        impostor._pluginData.friction = friction;
    }
    /**
     * Gets restitution of the impostor
     * @param impostor impostor to get restitution from
     * @returns restitution value
     */ getBodyRestitution(impostor) {
        return impostor._pluginData.restitution || 0;
    }
    /**
     * Sets restitution of the impostor
     * @param impostor impostor to set resitution on
     * @param restitution resitution value
     */ setBodyRestitution(impostor, restitution) {
        impostor.physicsBody.setRestitution(restitution);
        impostor._pluginData.restitution = restitution;
    }
    /**
     * Gets pressure inside the impostor
     * @param impostor impostor to get pressure from
     * @returns pressure value
     */ getBodyPressure(impostor) {
        if (!impostor.soft) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Warn("Pressure is not a property of a rigid body");
            return 0;
        }
        return impostor._pluginData.pressure || 0;
    }
    /**
     * Sets pressure inside a soft body impostor
     * Cloth and rope must remain 0 pressure
     * @param impostor impostor to set pressure on
     * @param pressure pressure value
     */ setBodyPressure(impostor, pressure) {
        if (impostor.soft) {
            if (impostor.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$physicsImpostor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsImpostor"].SoftbodyImpostor) {
                impostor.physicsBody.get_m_cfg().set_kPR(pressure);
                impostor._pluginData.pressure = pressure;
            } else {
                impostor.physicsBody.get_m_cfg().set_kPR(0);
                impostor._pluginData.pressure = 0;
            }
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Warn("Pressure can only be applied to a softbody");
        }
    }
    /**
     * Gets stiffness of the impostor
     * @param impostor impostor to get stiffness from
     * @returns pressure value
     */ getBodyStiffness(impostor) {
        if (!impostor.soft) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Warn("Stiffness is not a property of a rigid body");
            return 0;
        }
        return impostor._pluginData.stiffness || 0;
    }
    /**
     * Sets stiffness of the impostor
     * @param impostor impostor to set stiffness on
     * @param stiffness stiffness value from 0 to 1
     */ setBodyStiffness(impostor, stiffness) {
        if (impostor.soft) {
            stiffness = stiffness < 0 ? 0 : stiffness;
            stiffness = stiffness > 1 ? 1 : stiffness;
            impostor.physicsBody.get_m_materials().at(0).set_m_kLST(stiffness);
            impostor._pluginData.stiffness = stiffness;
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Warn("Stiffness cannot be applied to a rigid body");
        }
    }
    /**
     * Gets velocityIterations of the impostor
     * @param impostor impostor to get velocity iterations from
     * @returns velocityIterations value
     */ getBodyVelocityIterations(impostor) {
        if (!impostor.soft) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Warn("Velocity iterations is not a property of a rigid body");
            return 0;
        }
        return impostor._pluginData.velocityIterations || 0;
    }
    /**
     * Sets velocityIterations of the impostor
     * @param impostor impostor to set velocity iterations on
     * @param velocityIterations velocityIterations value
     */ setBodyVelocityIterations(impostor, velocityIterations) {
        if (impostor.soft) {
            velocityIterations = velocityIterations < 0 ? 0 : velocityIterations;
            impostor.physicsBody.get_m_cfg().set_viterations(velocityIterations);
            impostor._pluginData.velocityIterations = velocityIterations;
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Warn("Velocity iterations cannot be applied to a rigid body");
        }
    }
    /**
     * Gets positionIterations of the impostor
     * @param impostor impostor to get position iterations from
     * @returns positionIterations value
     */ getBodyPositionIterations(impostor) {
        if (!impostor.soft) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Warn("Position iterations is not a property of a rigid body");
            return 0;
        }
        return impostor._pluginData.positionIterations || 0;
    }
    /**
     * Sets positionIterations of the impostor
     * @param impostor impostor to set position on
     * @param positionIterations positionIterations value
     */ setBodyPositionIterations(impostor, positionIterations) {
        if (impostor.soft) {
            positionIterations = positionIterations < 0 ? 0 : positionIterations;
            impostor.physicsBody.get_m_cfg().set_piterations(positionIterations);
            impostor._pluginData.positionIterations = positionIterations;
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Warn("Position iterations cannot be applied to a rigid body");
        }
    }
    /**
     * Append an anchor to a cloth object
     * @param impostor is the cloth impostor to add anchor to
     * @param otherImpostor is the rigid impostor to anchor to
     * @param width ratio across width from 0 to 1
     * @param height ratio up height from 0 to 1
     * @param influence the elasticity between cloth impostor and anchor from 0, very stretchy to 1, little stretch
     * @param noCollisionBetweenLinkedBodies when true collisions between soft impostor and anchor are ignored; default false
     */ appendAnchor(impostor, otherImpostor, width, height, influence = 1, noCollisionBetweenLinkedBodies = false) {
        const segs = impostor.segments;
        const nbAcross = Math.round((segs - 1) * width);
        const nbUp = Math.round((segs - 1) * height);
        const nbDown = segs - 1 - nbUp;
        const node = nbAcross + segs * nbDown;
        impostor.physicsBody.appendAnchor(node, otherImpostor.physicsBody, noCollisionBetweenLinkedBodies, influence);
    }
    /**
     * Append an hook to a rope object
     * @param impostor is the rope impostor to add hook to
     * @param otherImpostor is the rigid impostor to hook to
     * @param length ratio along the rope from 0 to 1
     * @param influence the elasticity between soft impostor and anchor from 0, very stretchy to 1, little stretch
     * @param noCollisionBetweenLinkedBodies when true collisions between soft impostor and anchor are ignored; default false
     */ appendHook(impostor, otherImpostor, length, influence = 1, noCollisionBetweenLinkedBodies = false) {
        const node = Math.round(impostor.segments * length);
        impostor.physicsBody.appendAnchor(node, otherImpostor.physicsBody, noCollisionBetweenLinkedBodies, influence);
    }
    /**
     * Sleeps the physics body and stops it from being active
     * @param impostor impostor to sleep
     */ sleepBody(impostor) {
        impostor.physicsBody.forceActivationState(0);
    }
    /**
     * Activates the physics body
     * @param impostor impostor to activate
     */ wakeUpBody(impostor) {
        impostor.physicsBody.activate();
    }
    /**
     * Updates the distance parameters of the joint
     */ updateDistanceJoint() {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Warn("updateDistanceJoint is not currently supported by the Ammo physics plugin");
    }
    /**
     * Sets a motor on the joint
     * @param joint joint to set motor on
     * @param speed speed of the motor
     * @param maxForce maximum force of the motor
     */ setMotor(joint, speed, maxForce) {
        joint.physicsJoint.enableAngularMotor(true, speed, maxForce);
    }
    /**
     * Sets the motors limit
     */ setLimit() {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Warn("setLimit is not currently supported by the Ammo physics plugin");
    }
    /**
     * Syncs the position and rotation of a mesh with the impostor
     * @param mesh mesh to sync
     * @param impostor impostor to update the mesh with
     */ syncMeshWithImpostor(mesh, impostor) {
        const body = impostor.physicsBody;
        body.getMotionState().getWorldTransform(this._tmpAmmoTransform);
        mesh.position.x = this._tmpAmmoTransform.getOrigin().x();
        mesh.position.y = this._tmpAmmoTransform.getOrigin().y();
        mesh.position.z = this._tmpAmmoTransform.getOrigin().z();
        if (mesh.rotationQuaternion) {
            mesh.rotationQuaternion.x = this._tmpAmmoTransform.getRotation().x();
            mesh.rotationQuaternion.y = this._tmpAmmoTransform.getRotation().y();
            mesh.rotationQuaternion.z = this._tmpAmmoTransform.getRotation().z();
            mesh.rotationQuaternion.w = this._tmpAmmoTransform.getRotation().w();
        }
    }
    /**
     * Gets the radius of the impostor
     * @param impostor impostor to get radius from
     * @returns the radius
     */ getRadius(impostor) {
        const extents = impostor.getObjectExtents();
        return extents.x / 2;
    }
    /**
     * Gets the box size of the impostor
     * @param impostor impostor to get box size from
     * @param result the resulting box size
     */ getBoxSizeToRef(impostor, result) {
        const extents = impostor.getObjectExtents();
        result.x = extents.x;
        result.y = extents.y;
        result.z = extents.z;
    }
    /**
     * Disposes of the impostor
     */ dispose() {
        // Dispose of world
        this.bjsAMMO.destroy(this.world);
        this.bjsAMMO.destroy(this._softBodySolver);
        this.bjsAMMO.destroy(this._solver);
        this.bjsAMMO.destroy(this._overlappingPairCache);
        this.bjsAMMO.destroy(this._dispatcher);
        this.bjsAMMO.destroy(this._collisionConfiguration);
        // Dispose of temp variables
        this.bjsAMMO.destroy(this._tmpAmmoVectorA);
        this.bjsAMMO.destroy(this._tmpAmmoVectorB);
        this.bjsAMMO.destroy(this._tmpAmmoVectorC);
        this.bjsAMMO.destroy(this._tmpAmmoVectorD);
        this.bjsAMMO.destroy(this._tmpAmmoTransform);
        this.bjsAMMO.destroy(this._tmpAmmoQuaternion);
        this.bjsAMMO.destroy(this._tmpAmmoConcreteContactResultCallback);
        this.world = null;
    }
    /**
     * Does a raycast in the physics world
     * @param from where should the ray start?
     * @param to where should the ray end?
     * @returns PhysicsRaycastResult
     */ raycast(from, to) {
        this.raycastToRef(from, to, this._raycastResult);
        return this._raycastResult;
    }
    /**
     * Does a raycast in the physics world
     * @param from when should the ray start?
     * @param to when should the ray end?
     * @param result resulting PhysicsRaycastResult
     */ raycastToRef(from, to, result) {
        this._tmpAmmoVectorRCA = new this.bjsAMMO.btVector3(from.x, from.y, from.z);
        this._tmpAmmoVectorRCB = new this.bjsAMMO.btVector3(to.x, to.y, to.z);
        const rayCallback = new this.bjsAMMO.ClosestRayResultCallback(this._tmpAmmoVectorRCA, this._tmpAmmoVectorRCB);
        this.world.rayTest(this._tmpAmmoVectorRCA, this._tmpAmmoVectorRCB, rayCallback);
        result.reset(from, to);
        if (rayCallback.hasHit()) {
            // TODO: do we want/need the body? If so, set all the data
            /*
            var rigidBody = this.bjsAMMO.btRigidBody.prototype.upcast(
                rayCallback.get_m_collisionObject()
            );
            var body = {};
            */ result.setHitData({
                x: rayCallback.get_m_hitNormalWorld().x(),
                y: rayCallback.get_m_hitNormalWorld().y(),
                z: rayCallback.get_m_hitNormalWorld().z()
            }, {
                x: rayCallback.get_m_hitPointWorld().x(),
                y: rayCallback.get_m_hitPointWorld().y(),
                z: rayCallback.get_m_hitPointWorld().z()
            });
            result.calculateHitDistance();
        }
        this.bjsAMMO.destroy(rayCallback);
        this.bjsAMMO.destroy(this._tmpAmmoVectorRCA);
        this.bjsAMMO.destroy(this._tmpAmmoVectorRCB);
    }
}
AmmoJSPlugin._DISABLE_COLLISION_FLAG = 4;
AmmoJSPlugin._KINEMATIC_FLAG = 2;
AmmoJSPlugin._DISABLE_DEACTIVATION_FLAG = 4; //# sourceMappingURL=ammoJSPlugin.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/v1/IPhysicsEnginePlugin.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
 //# sourceMappingURL=IPhysicsEnginePlugin.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/v1/physicsEngineComponent.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$abstractMesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/abstractMesh.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$physicsJoint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/v1/physicsJoint.js [app-ssr] (ecmascript)");
;
;
Object.defineProperty(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$abstractMesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractMesh"].prototype, "physicsImpostor", {
    get: function() {
        return this._physicsImpostor;
    },
    set: function(value) {
        if (this._physicsImpostor === value) {
            return;
        }
        if (this._disposePhysicsObserver) {
            this.onDisposeObservable.remove(this._disposePhysicsObserver);
        }
        this._physicsImpostor = value;
        if (value) {
            this._disposePhysicsObserver = this.onDisposeObservable.add(()=>{
                // Physics
                if (this.physicsImpostor) {
                    this.physicsImpostor.dispose();
                    this.physicsImpostor = null;
                }
            });
        }
    },
    enumerable: true,
    configurable: true
});
/**
 * Gets the current physics impostor
 * @see https://doc.babylonjs.com/features/featuresDeepDive/physics
 * @returns a physics impostor or null
 */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$abstractMesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractMesh"].prototype.getPhysicsImpostor = function() {
    return this.physicsImpostor;
};
/**
 * Apply a physic impulse to the mesh
 * @param force defines the force to apply
 * @param contactPoint defines where to apply the force
 * @returns the current mesh
 * @see https://doc.babylonjs.com/features/featuresDeepDive/physics/usingPhysicsEngine
 */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$abstractMesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractMesh"].prototype.applyImpulse = function(force, contactPoint) {
    if (!this.physicsImpostor) {
        return this;
    }
    this.physicsImpostor.applyImpulse(force, contactPoint);
    return this;
};
/**
 * Creates a physic joint between two meshes
 * @param otherMesh defines the other mesh to use
 * @param pivot1 defines the pivot to use on this mesh
 * @param pivot2 defines the pivot to use on the other mesh
 * @param options defines additional options (can be plugin dependent)
 * @returns the current mesh
 * @see https://www.babylonjs-playground.com/#0BS5U0#0
 */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$abstractMesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractMesh"].prototype.setPhysicsLinkWith = function(otherMesh, pivot1, pivot2, options) {
    if (!this.physicsImpostor || !otherMesh.physicsImpostor) {
        return this;
    }
    this.physicsImpostor.createJoint(otherMesh.physicsImpostor, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$physicsJoint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsJoint"].HingeJoint, {
        mainPivot: pivot1,
        connectedPivot: pivot2,
        nativeParams: options
    });
    return this;
}; //# sourceMappingURL=physicsEngineComponent.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/v1/Plugins/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$Plugins$2f$cannonJSPlugin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/v1/Plugins/cannonJSPlugin.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$Plugins$2f$ammoJSPlugin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/v1/Plugins/ammoJSPlugin.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$Plugins$2f$oimoJSPlugin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/v1/Plugins/oimoJSPlugin.js [app-ssr] (ecmascript)"); //# sourceMappingURL=index.js.map
;
;
;
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/v1/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/* eslint-disable @typescript-eslint/no-restricted-imports */ __turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$IPhysicsEnginePlugin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/v1/IPhysicsEnginePlugin.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$physicsEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/v1/physicsEngine.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$physicsEngineComponent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/v1/physicsEngineComponent.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$physicsImpostor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/v1/physicsImpostor.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$physicsJoint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/v1/physicsJoint.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$Plugins$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/v1/Plugins/index.js [app-ssr] (ecmascript) <locals>"); //# sourceMappingURL=index.js.map
;
;
;
;
;
;
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/v2/physicsEngine.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PhysicsEngine",
    ()=>PhysicsEngine
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$physicsRaycastResult$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/physicsRaycastResult.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$devTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/devTools.js [app-ssr] (ecmascript)");
;
;
;
class PhysicsEngine {
    /**
     *
     * @returns physics plugin version
     */ getPluginVersion() {
        return this._physicsPlugin.getPluginVersion();
    }
    // eslint-disable-next-line jsdoc/require-returns-check
    /**
     * Factory used to create the default physics plugin.
     * @returns The default physics plugin
     */ static DefaultPluginFactory() {
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$devTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_WarnImport"])("");
    }
    /**
     * Creates a new Physics Engine
     * @param gravity defines the gravity vector used by the simulation
     * @param _physicsPlugin defines the plugin to use (CannonJS by default)
     */ constructor(gravity, _physicsPlugin = PhysicsEngine.DefaultPluginFactory()){
        this._physicsPlugin = _physicsPlugin;
        /** @internal */ this._physicsBodies = [];
        this._subTimeStep = 0;
        gravity = gravity || new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](0, -9.807, 0);
        this.setGravity(gravity);
        this.setTimeStep();
    }
    /**
     * Sets the gravity vector used by the simulation
     * @param gravity defines the gravity vector to use
     */ setGravity(gravity) {
        this.gravity = gravity;
        this._physicsPlugin.setGravity(this.gravity);
    }
    /**
     * Set the time step of the physics engine.
     * Default is 1/60.
     * To slow it down, enter 1/600 for example.
     * To speed it up, 1/30
     * Unit is seconds.
     * @param newTimeStep defines the new timestep to apply to this world.
     */ setTimeStep(newTimeStep = 1 / 60) {
        this._physicsPlugin.setTimeStep(newTimeStep);
    }
    /**
     * Get the time step of the physics engine.
     * @returns the current time step
     */ getTimeStep() {
        return this._physicsPlugin.getTimeStep();
    }
    /**
     * Set the sub time step of the physics engine.
     * Default is 0 meaning there is no sub steps
     * To increase physics resolution precision, set a small value (like 1 ms)
     * @param subTimeStep defines the new sub timestep used for physics resolution.
     */ setSubTimeStep(subTimeStep = 0) {
        this._subTimeStep = subTimeStep;
    }
    /**
     * Get the sub time step of the physics engine.
     * @returns the current sub time step
     */ getSubTimeStep() {
        return this._subTimeStep;
    }
    /**
     * Release all resources
     */ dispose() {
        this._physicsPlugin.dispose();
    }
    /**
     * Gets the name of the current physics plugin
     * @returns the name of the plugin
     */ getPhysicsPluginName() {
        return this._physicsPlugin.name;
    }
    /**
     * Set the maximum allowed linear and angular velocities
     * @param maxLinearVelocity maximum allowed linear velocity
     * @param maxAngularVelocity maximum allowed angular velocity
     */ setVelocityLimits(maxLinearVelocity, maxAngularVelocity) {
        this._physicsPlugin.setVelocityLimits(maxLinearVelocity, maxAngularVelocity);
    }
    /**
     * @returns maximum allowed linear velocity
     */ getMaxLinearVelocity() {
        return this._physicsPlugin.getMaxLinearVelocity();
    }
    /**
     * @returns maximum allowed angular velocity
     */ getMaxAngularVelocity() {
        return this._physicsPlugin.getMaxAngularVelocity();
    }
    /**
     * Adding a new impostor for the impostor tracking.
     * This will be done by the impostor itself.
     * @param impostor the impostor to add
     */ /**
     * Called by the scene. No need to call it.
     * @param delta defines the timespan between frames
     */ _step(delta) {
        if (delta > 0.1) {
            delta = 0.1;
        } else if (delta <= 0) {
            delta = 1.0 / 60.0;
        }
        this._physicsPlugin.executeStep(delta, this._physicsBodies);
    }
    /**
     * Add a body as an active component of this engine
     * @param physicsBody The body to add
     */ addBody(physicsBody) {
        this._physicsBodies.push(physicsBody);
    }
    /**
     * Removes a particular body from this engine
     * @param physicsBody The body to remove from the simulation
     */ removeBody(physicsBody) {
        const index = this._physicsBodies.indexOf(physicsBody);
        if (index > -1) {
            /*const removed =*/ this._physicsBodies.splice(index, 1);
        }
    }
    /**
     * @returns an array of bodies added to this engine
     */ getBodies() {
        return this._physicsBodies;
    }
    /**
     * Gets the current plugin used to run the simulation
     * @returns current plugin
     */ getPhysicsPlugin() {
        return this._physicsPlugin;
    }
    /**
     * Does a raycast in the physics world
     * @param from when should the ray start?
     * @param to when should the ray end?
     * @param result resulting PhysicsRaycastResult or array of PhysicsRaycastResults
     * @param query raycast query object
     * If result is an empty array, it will be populated with every detected raycast hit.
     * If result is a populated array, it will only fill the PhysicsRaycastResults present in the array.
     */ raycastToRef(from, to, result, query) {
        this._physicsPlugin.raycast(from, to, result, query);
    }
    /**
     * Does a raycast in the physics world
     * @param from when should the ray start?
     * @param to when should the ray end?
     * @param query raycast query object
     * @returns PhysicsRaycastResult
     */ raycast(from, to, query) {
        const result = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$physicsRaycastResult$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsRaycastResult"]();
        this._physicsPlugin.raycast(from, to, result, query);
        return result;
    }
    /**
     * Does a raycast through multiple objects in the physics world
     * @param from when should the ray start?
     * @param to when should the ray end?
     * @param query raycast query object
     * @returns array of PhysicsRaycastResult
     */ raycastMulti(from, to, query) {
        const result = [];
        this._physicsPlugin.raycast(from, to, result, query);
        return result;
    }
} //# sourceMappingURL=physicsEngine.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/v2/IPhysicsEnginePlugin.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** How a specific axis can be constrained */ __turbopack_context__.s([
    "PhysicsActivationControl",
    ()=>PhysicsActivationControl,
    "PhysicsConstraintAxis",
    ()=>PhysicsConstraintAxis,
    "PhysicsConstraintAxisLimitMode",
    ()=>PhysicsConstraintAxisLimitMode,
    "PhysicsConstraintMotorType",
    ()=>PhysicsConstraintMotorType,
    "PhysicsConstraintType",
    ()=>PhysicsConstraintType,
    "PhysicsEventType",
    ()=>PhysicsEventType,
    "PhysicsMotionType",
    ()=>PhysicsMotionType,
    "PhysicsPrestepType",
    ()=>PhysicsPrestepType,
    "PhysicsShapeType",
    ()=>PhysicsShapeType
]);
var PhysicsConstraintAxisLimitMode;
(function(PhysicsConstraintAxisLimitMode) {
    /*
     * The axis is not restricted at all
     */ PhysicsConstraintAxisLimitMode[PhysicsConstraintAxisLimitMode["FREE"] = 0] = "FREE";
    /*
     * The axis has a minimum/maximum limit
     */ PhysicsConstraintAxisLimitMode[PhysicsConstraintAxisLimitMode["LIMITED"] = 1] = "LIMITED";
    /*
     * The axis allows no relative movement of the pivots
     */ PhysicsConstraintAxisLimitMode[PhysicsConstraintAxisLimitMode["LOCKED"] = 2] = "LOCKED";
})(PhysicsConstraintAxisLimitMode || (PhysicsConstraintAxisLimitMode = {}));
var PhysicsConstraintAxis;
(function(PhysicsConstraintAxis) {
    /*
     * Translation along the primary axis of the constraint (i.e. the
     * direction specified by PhysicsConstraintParameters.axisA/axisB)
     */ PhysicsConstraintAxis[PhysicsConstraintAxis["LINEAR_X"] = 0] = "LINEAR_X";
    /*
     * Translation along the second axis of the constraint (i.e. the
     * direction specified by PhysicsConstraintParameters.perpAxisA/perpAxisB)
     */ PhysicsConstraintAxis[PhysicsConstraintAxis["LINEAR_Y"] = 1] = "LINEAR_Y";
    /*
     * Translation along the third axis of the constraint. This axis is
     * computed from the cross product of axisA/axisB and perpAxisA/perpAxisB)
     */ PhysicsConstraintAxis[PhysicsConstraintAxis["LINEAR_Z"] = 2] = "LINEAR_Z";
    /*
     * Rotation around the primary axis of the constraint (i.e. the
     * axis specified by PhysicsConstraintParameters.axisA/axisB)
     */ PhysicsConstraintAxis[PhysicsConstraintAxis["ANGULAR_X"] = 3] = "ANGULAR_X";
    /*
     * Rotation around the second axis of the constraint (i.e. the
     * axis specified by PhysicsConstraintParameters.perpAxisA/perpAxisB)
     */ PhysicsConstraintAxis[PhysicsConstraintAxis["ANGULAR_Y"] = 4] = "ANGULAR_Y";
    /*
     * Rotation around the third axis of the constraint. This axis is
     * computed from the cross product of axisA/axisB and perpAxisA/perpAxisB)
     */ PhysicsConstraintAxis[PhysicsConstraintAxis["ANGULAR_Z"] = 5] = "ANGULAR_Z";
    /*
     * A 3D distance limit; similar to specifying the LINEAR_X/Y/Z axes
     * individually, but the distance calculation uses all three axes
     * simultaneously, instead of individually.
     */ PhysicsConstraintAxis[PhysicsConstraintAxis["LINEAR_DISTANCE"] = 6] = "LINEAR_DISTANCE";
})(PhysicsConstraintAxis || (PhysicsConstraintAxis = {}));
var PhysicsConstraintType;
(function(PhysicsConstraintType) {
    /**
     * A ball and socket constraint will attempt to line up the pivot
     * positions in each body, and have no restrictions on rotation
     */ PhysicsConstraintType[PhysicsConstraintType["BALL_AND_SOCKET"] = 1] = "BALL_AND_SOCKET";
    /**
     * A distance constraint will attempt to keep the pivot locations
     * within a specified distance.
     */ PhysicsConstraintType[PhysicsConstraintType["DISTANCE"] = 2] = "DISTANCE";
    /**
     * A hinge constraint will keep the pivot positions aligned as well
     * as two angular axes. The remaining angular axis will be free to rotate.
     */ PhysicsConstraintType[PhysicsConstraintType["HINGE"] = 3] = "HINGE";
    /**
     * A slider constraint allows bodies to translate along one axis and
     * rotate about the same axis. The remaining two axes are locked in
     * place
     */ PhysicsConstraintType[PhysicsConstraintType["SLIDER"] = 4] = "SLIDER";
    /**
     * A lock constraint will attempt to keep the pivots completely lined
     * up between both bodies, allowing no relative movement.
     */ PhysicsConstraintType[PhysicsConstraintType["LOCK"] = 5] = "LOCK";
    /*
     * A prismatic will lock the rotations of the bodies, and allow translation
     * only along one axis
     */ PhysicsConstraintType[PhysicsConstraintType["PRISMATIC"] = 6] = "PRISMATIC";
    /*
     * A generic constraint; this starts with no limits on how the bodies can
     * move relative to each other, but limits can be added via the PhysicsConstraint
     * interfaces. This can be used to specify a large variety of constraints
     */ PhysicsConstraintType[PhysicsConstraintType["SIX_DOF"] = 7] = "SIX_DOF";
})(PhysicsConstraintType || (PhysicsConstraintType = {}));
var PhysicsShapeType;
(function(PhysicsShapeType) {
    PhysicsShapeType[PhysicsShapeType["SPHERE"] = 0] = "SPHERE";
    PhysicsShapeType[PhysicsShapeType["CAPSULE"] = 1] = "CAPSULE";
    PhysicsShapeType[PhysicsShapeType["CYLINDER"] = 2] = "CYLINDER";
    PhysicsShapeType[PhysicsShapeType["BOX"] = 3] = "BOX";
    PhysicsShapeType[PhysicsShapeType["CONVEX_HULL"] = 4] = "CONVEX_HULL";
    PhysicsShapeType[PhysicsShapeType["CONTAINER"] = 5] = "CONTAINER";
    PhysicsShapeType[PhysicsShapeType["MESH"] = 6] = "MESH";
    PhysicsShapeType[PhysicsShapeType["HEIGHTFIELD"] = 7] = "HEIGHTFIELD";
})(PhysicsShapeType || (PhysicsShapeType = {}));
var PhysicsConstraintMotorType;
(function(PhysicsConstraintMotorType) {
    PhysicsConstraintMotorType[PhysicsConstraintMotorType["NONE"] = 0] = "NONE";
    PhysicsConstraintMotorType[PhysicsConstraintMotorType["VELOCITY"] = 1] = "VELOCITY";
    PhysicsConstraintMotorType[PhysicsConstraintMotorType["POSITION"] = 2] = "POSITION";
})(PhysicsConstraintMotorType || (PhysicsConstraintMotorType = {}));
var PhysicsEventType;
(function(PhysicsEventType) {
    PhysicsEventType["COLLISION_STARTED"] = "COLLISION_STARTED";
    PhysicsEventType["COLLISION_CONTINUED"] = "COLLISION_CONTINUED";
    PhysicsEventType["COLLISION_FINISHED"] = "COLLISION_FINISHED";
    PhysicsEventType["TRIGGER_ENTERED"] = "TRIGGER_ENTERED";
    PhysicsEventType["TRIGGER_EXITED"] = "TRIGGER_EXITED";
})(PhysicsEventType || (PhysicsEventType = {}));
var PhysicsMotionType;
(function(PhysicsMotionType) {
    PhysicsMotionType[PhysicsMotionType["STATIC"] = 0] = "STATIC";
    PhysicsMotionType[PhysicsMotionType["ANIMATED"] = 1] = "ANIMATED";
    PhysicsMotionType[PhysicsMotionType["DYNAMIC"] = 2] = "DYNAMIC";
})(PhysicsMotionType || (PhysicsMotionType = {}));
var PhysicsPrestepType;
(function(PhysicsPrestepType) {
    PhysicsPrestepType[PhysicsPrestepType["DISABLED"] = 0] = "DISABLED";
    PhysicsPrestepType[PhysicsPrestepType["TELEPORT"] = 1] = "TELEPORT";
    PhysicsPrestepType[PhysicsPrestepType["ACTION"] = 2] = "ACTION";
})(PhysicsPrestepType || (PhysicsPrestepType = {}));
var PhysicsActivationControl;
(function(PhysicsActivationControl) {
    PhysicsActivationControl[PhysicsActivationControl["SIMULATION_CONTROLLED"] = 0] = "SIMULATION_CONTROLLED";
    PhysicsActivationControl[PhysicsActivationControl["ALWAYS_ACTIVE"] = 1] = "ALWAYS_ACTIVE";
    PhysicsActivationControl[PhysicsActivationControl["ALWAYS_INACTIVE"] = 2] = "ALWAYS_INACTIVE";
})(PhysicsActivationControl || (PhysicsActivationControl = {})); //# sourceMappingURL=IPhysicsEnginePlugin.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/v2/physicsBody.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PhysicsBody",
    ()=>PhysicsBody
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$IPhysicsEnginePlugin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/v2/IPhysicsEnginePlugin.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
;
;
class PhysicsBody {
    /**
     * Disable pre-step that consists in updating Physics Body from Transform Node Translation/Orientation.
     * True by default for maximum performance.
     */ get disablePreStep() {
        return this._prestepType == __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$IPhysicsEnginePlugin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsPrestepType"].DISABLED;
    }
    set disablePreStep(value) {
        this._prestepType = value ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$IPhysicsEnginePlugin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsPrestepType"].DISABLED : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$IPhysicsEnginePlugin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsPrestepType"].TELEPORT;
    }
    /**
     * Constructs a new physics body for the given node.
     * @param transformNode - The Transform Node to construct the physics body for. For better performance, it is advised that this node does not have a parent.
     * @param motionType - The motion type of the physics body. The options are:
     *  - PhysicsMotionType.STATIC - Static bodies are not moving and unaffected by forces or collisions. They are good for level boundaries or terrain.
     *  - PhysicsMotionType.DYNAMIC - Dynamic bodies are fully simulated. They can move and collide with other objects.
     *  - PhysicsMotionType.ANIMATED - They behave like dynamic bodies, but they won't be affected by other bodies, but still push other bodies out of the way.
     * @param startsAsleep - Whether the physics body should start in a sleeping state (not a guarantee). Defaults to false.
     * @param scene - The scene containing the physics engine.
     *
     * This code is useful for creating a physics body for a given Transform Node in a scene.
     * It checks the version of the physics engine and the physics plugin, and initializes the body accordingly.
     * It also sets the node's rotation quaternion if it is not already set. Finally, it adds the body to the physics engine.
     */ constructor(transformNode, motionType, startsAsleep, scene){
        /**
         * V2 Physics plugin private data for single Transform
         */ this._pluginData = undefined;
        /**
         * V2 Physics plugin private data for instances
         */ this._pluginDataInstances = [];
        /**
         * If the collision callback is enabled
         */ this._collisionCBEnabled = false;
        /**
         * If the collision ended callback is enabled
         */ this._collisionEndedCBEnabled = false;
        /**
         * Disable sync from physics to transformNode. This value is set to true at body creation or at motionType setting when the body is not dynamic.
         */ this.disableSync = false;
        this._isDisposed = false;
        this._shape = null;
        this._prestepType = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$IPhysicsEnginePlugin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsPrestepType"].DISABLED;
        if (!scene) {
            return;
        }
        const physicsEngine = scene.getPhysicsEngine();
        if (!physicsEngine) {
            throw new Error("No Physics Engine available.");
        }
        this._physicsEngine = physicsEngine;
        if (physicsEngine.getPluginVersion() != 2) {
            throw new Error("Plugin version is incorrect. Expected version 2.");
        }
        const physicsPlugin = physicsEngine.getPhysicsPlugin();
        if (!physicsPlugin) {
            throw new Error("No Physics Plugin available.");
        }
        this._physicsPlugin = physicsPlugin;
        if (!transformNode.rotationQuaternion) {
            transformNode.rotationQuaternion = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Quaternion"].FromEulerAngles(transformNode.rotation.x, transformNode.rotation.y, transformNode.rotation.z);
        }
        this.startAsleep = startsAsleep;
        // only dynamic and animated body needs sync from physics to transformNode
        this.disableSync = motionType == 0 /* PhysicsMotionType.STATIC */ ;
        // instances?
        const m = transformNode;
        if (m.hasThinInstances) {
            this._physicsPlugin.initBodyInstances(this, motionType, m);
        } else {
            // single instance
            if (transformNode.parent) {
                // Force computation of world matrix so that the parent transforms are correctly reflected in absolutePosition/absoluteRotationQuaternion.
                transformNode.computeWorldMatrix(true);
            }
            this._physicsPlugin.initBody(this, motionType, transformNode.absolutePosition, transformNode.absoluteRotationQuaternion);
        }
        this.transformNode = transformNode;
        transformNode.physicsBody = this;
        physicsEngine.addBody(this);
        this._nodeDisposeObserver = transformNode.onDisposeObservable.add(()=>{
            this.dispose();
        });
    }
    /**
     * Returns the string "PhysicsBody".
     * @returns "PhysicsBody"
     */ getClassName() {
        return "PhysicsBody";
    }
    /**
     * Clone the PhysicsBody to a new body and assign it to the transformNode parameter
     * @param transformNode transformNode that will be used for the cloned PhysicsBody
     * @returns the newly cloned PhysicsBody
     */ clone(transformNode) {
        const clonedBody = new PhysicsBody(transformNode, this.getMotionType(), this.startAsleep, this.transformNode.getScene());
        clonedBody.shape = this.shape;
        clonedBody.setMassProperties(this.getMassProperties());
        clonedBody.setLinearDamping(this.getLinearDamping());
        clonedBody.setAngularDamping(this.getAngularDamping());
        return clonedBody;
    }
    /**
     * If a physics body is connected to an instanced node, update the number physic instances to match the number of node instances.
     */ updateBodyInstances() {
        const m = this.transformNode;
        if (m.hasThinInstances) {
            this._physicsPlugin.updateBodyInstances(this, m);
        }
    }
    /**
     * This returns the number of internal instances of the physics body
     */ get numInstances() {
        return this._pluginDataInstances.length;
    }
    /**
     * Get the motion type of the physics body. Can be STATIC, DYNAMIC, or ANIMATED.
     */ get motionType() {
        return this._physicsPlugin.getMotionType(this);
    }
    /**
     * Sets the shape of the physics body.
     * @param shape - The shape of the physics body.
     *
     * This method is useful for setting the shape of the physics body, which is necessary for the physics engine to accurately simulate the body's behavior.
     * The shape is used to calculate the body's mass, inertia, and other properties.
     */ set shape(shape) {
        this._shape = shape;
        if (shape) {
            this._physicsPlugin.setShape(this, shape);
        }
    }
    /**
     * Retrieves the physics shape associated with this object.
     *
     * @returns The physics shape associated with this object, or `undefined` if no
     * shape is associated.
     *
     * This method is useful for retrieving the physics shape associated with this object,
     * which can be used to apply physical forces to the object or to detect collisions.
     */ get shape() {
        return this._shape;
    }
    /**
     * Returns the bounding box of the physics body.
     * @returns The bounding box of the physics body.
     */ getBoundingBox() {
        return this._physicsPlugin.getBodyBoundingBox(this);
    }
    /**
     * Sets the event mask for the physics engine.
     *
     * @param eventMask - A bitmask that determines which events will be sent to the physics engine.
     * @param instanceIndex - If this body is instanced, the index of the instance to set the event mask for.
     *
     * This method is useful for setting the event mask for the physics engine, which determines which events
     * will be sent to the physics engine. This allows the user to control which events the physics engine will respond to.
     */ setEventMask(eventMask, instanceIndex) {
        this._physicsPlugin.setEventMask(this, eventMask, instanceIndex);
    }
    /**
     * Gets the event mask of the physics engine.
     * @param instanceIndex - If this body is instanced, the index of the instance to get the event mask for.
     * @returns The event mask of the physics engine.
     *
     * This method is useful for getting the event mask of the physics engine,
     * which is used to determine which events the engine will respond to.
     * This is important for ensuring that the engine is responding to the correct events and not
     * wasting resources on unnecessary events.
     */ getEventMask(instanceIndex) {
        return this._physicsPlugin.getEventMask(this, instanceIndex);
    }
    /**
     * Sets the motion type of the physics body. Can be STATIC, DYNAMIC, or ANIMATED.
     * @param motionType - The motion type to set.
     * @param instanceIndex - If this body is instanced, the index of the instance to set the motion type for. If body is instanced but instanceIndex is undefined, the motion type will be set for all instances.
     */ setMotionType(motionType, instanceIndex) {
        this.disableSync = instanceIndex === undefined && motionType == 0 /* PhysicsMotionType.STATIC */ ;
        this._physicsPlugin.setMotionType(this, motionType, instanceIndex);
    }
    /**
     * Gets the motion type of the physics body. Can be STATIC, DYNAMIC, or ANIMATED.
     * @param instanceIndex - If this body is instanced, the index of the instance to get the motion type for.
     * @returns The motion type of the physics body.
     */ getMotionType(instanceIndex) {
        return this._physicsPlugin.getMotionType(this, instanceIndex);
    }
    /**
     * Set the prestep type of the body
     * @param prestepType prestep type provided by PhysicsPrestepType
     */ setPrestepType(prestepType) {
        this._prestepType = prestepType;
    }
    /**
     * Get the current prestep type of the body
     * @returns the type of prestep associated with the body and its instance index
     */ getPrestepType() {
        return this._prestepType;
    }
    /**
     * Computes the mass properties of the physics object, based on the set of physics shapes this body uses.
     * This method is useful for computing the initial mass properties of a physics object, such as its mass,
     * inertia, and center of mass; these values are important for accurately simulating the physics of the
     * object in the physics engine, and computing values based on the shape will provide you with reasonable
     * initial values, which you can then customize.
     * @param instanceIndex - The index of the instance to compute the mass properties for.
     * @returns The mass properties of the object.
     */ computeMassProperties(instanceIndex) {
        return this._physicsPlugin.computeMassProperties(this, instanceIndex);
    }
    /**
     * Sets the mass properties of the physics object.
     *
     * @param massProps - The mass properties to set.
     * @param instanceIndex - The index of the instance to set the mass properties for. If not defined, the mass properties will be set for all instances.
     *
     * This method is useful for setting the mass properties of a physics object, such as its mass,
     * inertia, and center of mass. This is important for accurately simulating the physics of the object in the physics engine.
     */ setMassProperties(massProps, instanceIndex) {
        this._physicsPlugin.setMassProperties(this, massProps, instanceIndex);
    }
    /**
     * Retrieves the mass properties of the object.
     * @param instanceIndex - If this body is instanced, the index of the instance to get the mass properties for.
     * @returns The mass properties of the object.
     *
     * This method is useful for physics simulations, as it allows the user to
     * retrieve the mass properties of the object, such as its mass, center of mass,
     * and moment of inertia. This information is necessary for accurate physics
     * simulations.
     */ getMassProperties(instanceIndex) {
        return this._physicsPlugin.getMassProperties(this, instanceIndex);
    }
    /**
     * Sets the linear damping of the physics body.
     *
     * @param damping - The linear damping value.
     * @param instanceIndex - If this body is instanced, the index of the instance to set the linear damping for.
     *
     * This method is useful for controlling the linear damping of the physics body,
     * which is the rate at which the body's velocity decreases over time. This is useful for simulating
     * the effects of air resistance or other forms of friction.
     */ setLinearDamping(damping, instanceIndex) {
        this._physicsPlugin.setLinearDamping(this, damping, instanceIndex);
    }
    /**
     * Gets the linear damping of the physics body.
     * @param instanceIndex - If this body is instanced, the index of the instance to get the linear damping for.
     * @returns The linear damping of the physics body.
     *
     * This method is useful for retrieving the linear damping of the physics body, which is the amount of
     * resistance the body has to linear motion. This is useful for simulating realistic physics behavior
     * in a game.
     */ getLinearDamping(instanceIndex) {
        return this._physicsPlugin.getLinearDamping(this, instanceIndex);
    }
    /**
     * Sets the angular damping of the physics body.
     * @param damping The angular damping of the body.
     * @param instanceIndex - If this body is instanced, the index of the instance to set the angular damping for.
     *
     * This method is useful for controlling the angular velocity of a physics body.
     * By setting the damping, the body's angular velocity will be reduced over time, simulating the effect of friction.
     * This can be used to create realistic physical behavior in a physics engine.
     */ setAngularDamping(damping, instanceIndex) {
        this._physicsPlugin.setAngularDamping(this, damping, instanceIndex);
    }
    /**
     * Gets the angular damping of the physics body.
     * @param instanceIndex - If this body is instanced, the index of the instance to get the angular damping for.
     *
     * @returns The angular damping of the physics body.
     *
     * This method is useful for getting the angular damping of the physics body,
     * which is the rate of reduction of the angular velocity over time.
     * This is important for simulating realistic physics behavior in a game.
     */ getAngularDamping(instanceIndex) {
        return this._physicsPlugin.getAngularDamping(this, instanceIndex);
    }
    /**
     * Sets the linear velocity of the physics object.
     * @param linVel - The linear velocity to set.
     * @param instanceIndex - If this body is instanced, the index of the instance to set the linear velocity for.
     *
     * This method is useful for setting the linear velocity of a physics object,
     * which is necessary for simulating realistic physics in a game engine.
     * By setting the linear velocity, the physics object will move in the direction and speed specified by the vector.
     * This allows for realistic physics simulations, such as simulating the motion of a ball rolling down a hill.
     */ setLinearVelocity(linVel, instanceIndex) {
        this._physicsPlugin.setLinearVelocity(this, linVel, instanceIndex);
    }
    /**
     * Gets the linear velocity of the physics body and stores it in the given vector3.
     * @param linVel - The vector3 to store the linear velocity in.
     * @param instanceIndex - If this body is instanced, the index of the instance to get the linear velocity for.
     *
     * This method is useful for getting the linear velocity of a physics body in a physics engine.
     * This can be used to determine the speed and direction of the body, which can be used to calculate the motion of the body.
     */ getLinearVelocityToRef(linVel, instanceIndex) {
        this._physicsPlugin.getLinearVelocityToRef(this, linVel, instanceIndex);
    }
    /**
     * Gets the linear velocity of the physics body as a new vector3.
     * @param instanceIndex - If this body is instanced, the index of the instance to get the linear velocity for.
     * @returns The linear velocity of the physics body.
     *
     * This method is useful for getting the linear velocity of a physics body in a physics engine.
     * This can be used to determine the speed and direction of the body, which can be used to calculate the motion of the body.
     */ getLinearVelocity(instanceIndex) {
        const ref = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]();
        this.getLinearVelocityToRef(ref, instanceIndex);
        return ref;
    }
    /**
     * Sets the angular velocity of the physics object.
     * @param angVel - The angular velocity to set.
     * @param instanceIndex - If this body is instanced, the index of the instance to set the angular velocity for.
     *
     * This method is useful for setting the angular velocity of a physics object, which is necessary for
     * simulating realistic physics behavior. The angular velocity is used to determine the rate of rotation of the object,
     * which is important for simulating realistic motion.
     */ setAngularVelocity(angVel, instanceIndex) {
        this._physicsPlugin.setAngularVelocity(this, angVel, instanceIndex);
    }
    /**
     * Gets the angular velocity of the physics body and stores it in the given vector3.
     * @param angVel - The vector3 to store the angular velocity in.
     * @param instanceIndex - If this body is instanced, the index of the instance to get the angular velocity for.
     *
     * This method is useful for getting the angular velocity of a physics body, which can be used to determine the body's
     * rotational speed. This information can be used to create realistic physics simulations.
     */ getAngularVelocityToRef(angVel, instanceIndex) {
        this._physicsPlugin.getAngularVelocityToRef(this, angVel, instanceIndex);
    }
    /**
     * Gets the angular velocity of the physics body as a new vector3.
     * @param instanceIndex - If this body is instanced, the index of the instance to get the angular velocity for.
     * @returns The angular velocity of the physics body.
     *
     * This method is useful for getting the angular velocity of a physics body, which can be used to determine the body's
     * rotational speed. This information can be used to create realistic physics simulations.
     */ getAngularVelocity(instanceIndex) {
        const ref = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]();
        this.getAngularVelocityToRef(ref, instanceIndex);
        return ref;
    }
    /**
     * Applies an impulse to the physics object.
     *
     * @param impulse The impulse vector.
     * @param location The location of the impulse.
     * @param instanceIndex For a instanced body, the instance to where the impulse should be applied. If not specified, the impulse is applied to all instances.
     *
     * This method is useful for applying an impulse to a physics object, which can be used to simulate physical forces such as gravity,
     * collisions, and explosions. This can be used to create realistic physics simulations in a game or other application.
     */ applyImpulse(impulse, location, instanceIndex) {
        this._physicsPlugin.applyImpulse(this, impulse, location, instanceIndex);
    }
    /**
     * Add torque to a physics body
     * @param angularImpulse The angular impulse vector.
     * @param instanceIndex For a instanced body, the instance to where the impulse should be applied. If not specified, the impulse is applied to all instances.
     */ applyAngularImpulse(angularImpulse, instanceIndex) {
        this._physicsPlugin.applyAngularImpulse(this, angularImpulse, instanceIndex);
    }
    /**
     * Applies a force to the physics object.
     *
     * @param force The force vector.
     * @param location The location of the force.
     * @param instanceIndex For a instanced body, the instance to where the force should be applied. If not specified, the force is applied to all instances.
     *
     * This method is useful for applying a force to a physics object, which can be used to simulate physical forces such as gravity,
     * collisions, and explosions. This can be used to create realistic physics simulations in a game or other application.
     */ applyForce(force, location, instanceIndex) {
        this._physicsPlugin.applyForce(this, force, location, instanceIndex);
    }
    /**
     * Retrieves the geometry of the body from the physics plugin.
     *
     * @returns The geometry of the body.
     *
     * This method is useful for retrieving the geometry of the body from the physics plugin, which can be used for various physics calculations.
     */ getGeometry() {
        return this._physicsPlugin.getBodyGeometry(this);
    }
    /**
     * Returns an observable that will be notified for when a collision starts or continues for this PhysicsBody
     * @returns Observable
     */ getCollisionObservable() {
        return this._physicsPlugin.getCollisionObservable(this);
    }
    /**
     * Returns an observable that will be notified when the body has finished colliding with another body
     * @returns
     */ getCollisionEndedObservable() {
        return this._physicsPlugin.getCollisionEndedObservable(this);
    }
    /**
     * Enable or disable collision callback for this PhysicsBody.
     * @param enabled true if PhysicsBody's collision will rise a collision event and notifies the observable
     */ setCollisionCallbackEnabled(enabled) {
        this._collisionCBEnabled = enabled;
        this._physicsPlugin.setCollisionCallbackEnabled(this, enabled);
    }
    /**
     * Enable or disable collision ended callback for this PhysicsBody.
     * @param enabled true if PhysicsBody's collision ended will rise a collision event and notifies the observable
     */ setCollisionEndedCallbackEnabled(enabled) {
        this._collisionEndedCBEnabled = enabled;
        this._physicsPlugin.setCollisionEndedCallbackEnabled(this, enabled);
    }
    /**
     * Get the center of the object in world space.
     * @param instanceIndex - If this body is instanced, the index of the instance to get the center for.
     * @returns geometric center of the associated mesh
     */ getObjectCenterWorld(instanceIndex) {
        const ref = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]();
        return this.getObjectCenterWorldToRef(ref, instanceIndex);
    }
    /**
     * Get the center of the object in world space.
     * @param ref - The vector3 to store the result in.
     * @param instanceIndex - If this body is instanced, the index of the instance to get the center for.
     * @returns geometric center of the associated mesh
     */ getObjectCenterWorldToRef(ref, instanceIndex) {
        if (this._pluginDataInstances?.length > 0) {
            const index = instanceIndex || 0;
            const matrixData = this.transformNode._thinInstanceDataStorage.matrixData;
            if (matrixData) {
                ref.set(matrixData[index * 16 + 12], matrixData[index * 16 + 13], matrixData[index * 16 + 14]);
            }
        } else {
            ref.copyFrom(this.transformNode.position);
        }
        return ref;
    }
    /**
     * Adds a constraint to the physics engine.
     *
     * @param childBody - The body to which the constraint will be applied.
     * @param constraint - The constraint to be applied.
     * @param instanceIndex - If this body is instanced, the index of the instance to which the constraint will be applied. If not specified, no constraint will be applied.
     * @param childInstanceIndex - If the child body is instanced, the index of the instance to which the constraint will be applied. If not specified, no constraint will be applied.
     *
     */ addConstraint(childBody, constraint, instanceIndex, childInstanceIndex) {
        this._physicsPlugin.addConstraint(this, childBody, constraint, instanceIndex, childInstanceIndex);
    }
    /**
     * Sync with a bone
     * @param bone The bone that the impostor will be synced to.
     * @param boneMesh The mesh that the bone is influencing.
     * @param jointPivot The pivot of the joint / bone in local space.
     * @param distToJoint Optional distance from the impostor to the joint.
     * @param adjustRotation Optional quaternion for adjusting the local rotation of the bone.
     * @param boneAxis Optional vector3 axis the bone is aligned with
     */ syncWithBone(bone, boneMesh, jointPivot, distToJoint, adjustRotation, boneAxis) {
        const mesh = this.transformNode;
        if (mesh.rotationQuaternion) {
            if (adjustRotation) {
                const tempQuat = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Quaternion[0];
                bone.getRotationQuaternionToRef(1 /* Space.WORLD */ , boneMesh, tempQuat);
                tempQuat.multiplyToRef(adjustRotation, mesh.rotationQuaternion);
            } else {
                bone.getRotationQuaternionToRef(1 /* Space.WORLD */ , boneMesh, mesh.rotationQuaternion);
            }
        }
        const pos = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0];
        const boneDir = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[1];
        if (!boneAxis) {
            boneAxis = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[2];
            boneAxis.x = 0;
            boneAxis.y = 1;
            boneAxis.z = 0;
        }
        bone.getDirectionToRef(boneAxis, boneMesh, boneDir);
        bone.getAbsolutePositionToRef(boneMesh, pos);
        if ((distToJoint === undefined || distToJoint === null) && jointPivot) {
            distToJoint = jointPivot.length();
        }
        if (distToJoint !== undefined && distToJoint !== null) {
            pos.x += boneDir.x * distToJoint;
            pos.y += boneDir.y * distToJoint;
            pos.z += boneDir.z * distToJoint;
        }
        mesh.setAbsolutePosition(pos);
    }
    /**
     * Executes a callback on the body or all of the instances of a body
     * @param callback the callback to execute
     */ iterateOverAllInstances(callback) {
        if (this._pluginDataInstances?.length > 0) {
            for(let i = 0; i < this._pluginDataInstances.length; i++){
                callback(this, i);
            }
        } else {
            callback(this, undefined);
        }
    }
    /**
     * Sets the gravity factor of the physics body
     * @param factor the gravity factor to set
     * @param instanceIndex the instance of the body to set, if undefined all instances will be set
     */ setGravityFactor(factor, instanceIndex) {
        this._physicsPlugin.setGravityFactor(this, factor, instanceIndex);
    }
    /**
     * Gets the gravity factor of the physics body
     * @param instanceIndex the instance of the body to get, if undefined the value of first instance will be returned
     * @returns the gravity factor
     */ getGravityFactor(instanceIndex) {
        return this._physicsPlugin.getGravityFactor(this, instanceIndex);
    }
    /**
     * Set the target transformation (position and rotation) of the body, such that the body will set its velocity to reach that target
     * @param position The target position
     * @param rotation The target rotation
     * @param instanceIndex The index of the instance in an instanced body
     */ setTargetTransform(position, rotation, instanceIndex) {
        this._physicsPlugin.setTargetTransform(this, position, rotation, instanceIndex);
    }
    /**
     * Returns if the body has been disposed.
     * @returns true if disposed, false otherwise.
     */ get isDisposed() {
        return this._isDisposed;
    }
    /**
     * Disposes the body from the physics engine.
     *
     * This method is useful for cleaning up the physics engine when a body is no longer needed. Disposing the body will free up resources and prevent memory leaks.
     */ dispose() {
        if (this._isDisposed) {
            return;
        }
        // Disable collisions CB so it doesn't fire when the body is disposed
        if (this._collisionCBEnabled) {
            this.setCollisionCallbackEnabled(false);
        }
        if (this._collisionEndedCBEnabled) {
            this.setCollisionEndedCallbackEnabled(false);
        }
        if (this._nodeDisposeObserver) {
            this.transformNode.onDisposeObservable.remove(this._nodeDisposeObserver);
            this._nodeDisposeObserver = null;
        }
        this._physicsEngine.removeBody(this);
        this._physicsPlugin.removeBody(this);
        this._physicsPlugin.disposeBody(this);
        this.transformNode.physicsBody = null;
        this._pluginData = null;
        this._pluginDataInstances.length = 0;
        this._isDisposed = true;
        this.shape = null;
    }
} //# sourceMappingURL=physicsBody.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/v2/physicsShape.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PhysicsShape",
    ()=>PhysicsShape,
    "PhysicsShapeBox",
    ()=>PhysicsShapeBox,
    "PhysicsShapeCapsule",
    ()=>PhysicsShapeCapsule,
    "PhysicsShapeContainer",
    ()=>PhysicsShapeContainer,
    "PhysicsShapeConvexHull",
    ()=>PhysicsShapeConvexHull,
    "PhysicsShapeCylinder",
    ()=>PhysicsShapeCylinder,
    "PhysicsShapeGroundMesh",
    ()=>PhysicsShapeGroundMesh,
    "PhysicsShapeHeightField",
    ()=>PhysicsShapeHeightField,
    "PhysicsShapeMesh",
    ()=>PhysicsShapeMesh,
    "PhysicsShapeSphere",
    ()=>PhysicsShapeSphere
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
;
class PhysicsShape {
    /**
     * Constructs a new physics shape.
     * @param options The options for the physics shape. These are:
     *  * type: The type of the shape. This can be one of the following: SPHERE, BOX, CAPSULE, CYLINDER, CONVEX_HULL, MESH, HEIGHTFIELD, CONTAINER
     *  * parameters: The parameters of the shape.
     *  * pluginData: The plugin data of the shape. This is used if you already have a reference to the object on the plugin side.
     * You need to specify either type or pluginData.
     * @param scene The scene the shape belongs to.
     *
     * This code is useful for creating a new physics shape with the given type, options, and scene.
     * It also checks that the physics engine and plugin version are correct.
     * If not, it throws an error. This ensures that the shape is created with the correct parameters and is compatible with the physics engine.
     */ constructor(options, scene){
        /**
         * V2 Physics plugin private data for single shape
         */ this._pluginData = undefined;
        this._isTrigger = false;
        this._isDisposed = false;
        if (!scene) {
            return;
        }
        const physicsEngine = scene.getPhysicsEngine();
        if (!physicsEngine) {
            throw new Error("No Physics Engine available.");
        }
        if (physicsEngine.getPluginVersion() != 2) {
            throw new Error("Plugin version is incorrect. Expected version 2.");
        }
        const physicsPlugin = physicsEngine.getPhysicsPlugin();
        if (!physicsPlugin) {
            throw new Error("No Physics Plugin available.");
        }
        this._physicsPlugin = physicsPlugin;
        if (options.pluginData !== undefined && options.pluginData !== null) {
            this._pluginData = options.pluginData;
            this._type = this._physicsPlugin.getShapeType(this);
        } else if (options.type !== undefined && options.type !== null) {
            this._type = options.type;
            const parameters = options.parameters ?? {};
            this._physicsPlugin.initShape(this, options.type, parameters);
        }
    }
    /**
     * Returns the string "PhysicsShape".
     * @returns "PhysicsShape"
     */ getClassName() {
        return "PhysicsShape";
    }
    /**
     * Returns the type of the physics shape.
     * @returns The type of the physics shape.
     */ get type() {
        return this._type;
    }
    /**
     * Set the membership mask of a shape. This is a bitfield of arbitrary
     * "categories" to which the shape is a member. This is used in combination
     * with the collide mask to determine if this shape should collide with
     * another.
     *
     * @param membershipMask Bitfield of categories of this shape.
     */ set filterMembershipMask(membershipMask) {
        this._physicsPlugin.setShapeFilterMembershipMask(this, membershipMask);
    }
    /**
     * Get the membership mask of a shape.
     * @returns Bitmask of categories which this shape is a member of.
     */ get filterMembershipMask() {
        return this._physicsPlugin.getShapeFilterMembershipMask(this);
    }
    /**
     * Sets the collide mask of a shape. This is a bitfield of arbitrary
     * "categories" to which this shape collides with. Given two shapes,
     * the engine will check if the collide mask and membership overlap:
     * shapeA.filterMembershipMask & shapeB.filterCollideMask
     *
     * If this value is zero (i.e. shapeB only collides with categories
     * which shapeA is _not_ a member of) then the shapes will not collide.
     *
     * Note, the engine will also perform the same test with shapeA and
     * shapeB swapped; the shapes will not collide if either shape has
     * a collideMask which prevents collision with the other shape.
     *
     * @param collideMask Bitmask of categories this shape should collide with
     */ set filterCollideMask(collideMask) {
        this._physicsPlugin.setShapeFilterCollideMask(this, collideMask);
    }
    /**
     *
     * @returns Bitmask of categories that this shape should collide with
     */ get filterCollideMask() {
        return this._physicsPlugin.getShapeFilterCollideMask(this);
    }
    /**
     *
     * @param material
     */ set material(material) {
        this._physicsPlugin.setMaterial(this, material);
        this._material = material;
    }
    /**
     * Returns the material of the physics shape.
     * @returns The material of the physics shape.
     */ get material() {
        if (!this._material) {
            this._material = this._physicsPlugin.getMaterial(this);
        }
        return this._material;
    }
    /**
     * Sets the density of the physics shape.
     * @param density The density of the physics shape.
     */ set density(density) {
        this._physicsPlugin.setDensity(this, density);
    }
    /**
     * Returns the density of the physics shape.
     * @returns The density of the physics shape.
     */ get density() {
        return this._physicsPlugin.getDensity(this);
    }
    /**
     * Utility to add a child shape to this container,
     * automatically computing the relative transform between
     * the container shape and the child instance.
     *
     * @param parentTransform The transform node associated with this shape
     * @param newChild The new PhysicsShape to add
     * @param childTransform The transform node associated with the child shape
     */ addChildFromParent(parentTransform, newChild, childTransform) {
        const childToWorld = childTransform.computeWorldMatrix(true);
        const parentToWorld = parentTransform.computeWorldMatrix(true);
        const childToParent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[0];
        childToWorld.multiplyToRef(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"].Invert(parentToWorld), childToParent);
        const translation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0];
        const rotation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Quaternion[0];
        const scale = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[1];
        childToParent.decompose(scale, rotation, translation);
        this._physicsPlugin.addChild(this, newChild, translation, rotation, scale);
    }
    /**
     * Adds a child shape to a container with an optional transform
     * @param newChild The new PhysicsShape to add
     * @param translation Optional position of the child shape relative to this shape
     * @param rotation Optional rotation of the child shape relative to this shape
     * @param scale Optional scale of the child shape relative to this shape
     */ addChild(newChild, translation, rotation, scale) {
        this._physicsPlugin.addChild(this, newChild, translation, rotation, scale);
    }
    /**
     * Removes a child shape from this shape.
     * @param childIndex The index of the child shape to remove
     */ removeChild(childIndex) {
        this._physicsPlugin.removeChild(this, childIndex);
    }
    /**
     * Returns the number of children of a physics shape.
     * @returns The number of children of a physics shape.
     */ getNumChildren() {
        return this._physicsPlugin.getNumChildren(this);
    }
    /**
     * Returns the bounding box of the physics shape.
     * @returns The bounding box of the physics shape.
     */ getBoundingBox() {
        return this._physicsPlugin.getBoundingBox(this);
    }
    set isTrigger(isTrigger) {
        if (this._isTrigger === isTrigger) {
            return;
        }
        this._isTrigger = isTrigger;
        this._physicsPlugin.setTrigger(this, isTrigger);
    }
    get isTrigger() {
        return this._isTrigger;
    }
    /**
     * Dispose the shape and release its associated resources.
     */ dispose() {
        if (this._isDisposed) {
            return;
        }
        this._physicsPlugin.disposeShape(this);
        this._isDisposed = true;
    }
}
class PhysicsShapeSphere extends PhysicsShape {
    /**
     * Constructor for the Sphere Shape
     * @param center local center of the sphere
     * @param radius radius
     * @param scene scene to attach to
     */ constructor(center, radius, scene){
        super({
            type: 0 /* PhysicsShapeType.SPHERE */ ,
            parameters: {
                center: center,
                radius: radius
            }
        }, scene);
    }
    /**
     * Derive an approximate sphere from the mesh.
     * @param mesh node from which to derive the sphere shape
     * @returns PhysicsShapeSphere
     */ static FromMesh(mesh) {
        const bounds = mesh.getBoundingInfo();
        const centerLocal = bounds.boundingSphere.center;
        const he = bounds.boundingBox.extendSize;
        const radius = Math.max(he.x, he.y, he.z);
        return new PhysicsShapeSphere(centerLocal, radius, mesh.getScene());
    }
}
class PhysicsShapeCapsule extends PhysicsShape {
    /**
     *
     * @param pointA Starting point that defines the capsule segment
     * @param pointB ending point of that same segment
     * @param radius radius
     * @param scene scene to attach to
     */ constructor(pointA, pointB, radius, scene){
        super({
            type: 1 /* PhysicsShapeType.CAPSULE */ ,
            parameters: {
                pointA: pointA,
                pointB: pointB,
                radius: radius
            }
        }, scene);
    }
    /**
     * Derive an approximate capsule from the mesh. Note, this is
     * not the optimal bounding capsule.
     * @param mesh Node from which to derive a cylinder shape
     * @returns Physics Shape Capsule
     */ static FromMesh(mesh) {
        const boundsLocal = mesh.getBoundingInfo();
        const radius = boundsLocal.boundingBox.extendSize.x;
        const pointFromCenter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](0, boundsLocal.boundingBox.extendSize.y - radius, 0);
        const pointA = boundsLocal.boundingBox.center.add(pointFromCenter);
        const pointB = boundsLocal.boundingBox.center.subtract(pointFromCenter);
        return new PhysicsShapeCapsule(pointA, pointB, radius, mesh.getScene());
    }
}
class PhysicsShapeCylinder extends PhysicsShape {
    /**
     *
     * @param pointA Starting point that defines the cylinder segment
     * @param pointB ending point of that same segment
     * @param radius radius
     * @param scene scene to attach to
     */ constructor(pointA, pointB, radius, scene){
        super({
            type: 2 /* PhysicsShapeType.CYLINDER */ ,
            parameters: {
                pointA: pointA,
                pointB: pointB,
                radius: radius
            }
        }, scene);
    }
    /**
     * Derive an approximate cylinder from the mesh. Note, this is
     * not the optimal bounding cylinder.
     * @param mesh Node from which to derive a cylinder shape
     * @returns Physics Shape Cylinder
     */ static FromMesh(mesh) {
        const boundsLocal = mesh.getBoundingInfo();
        const radius = boundsLocal.boundingBox.extendSize.x;
        const pointFromCenter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](0, boundsLocal.boundingBox.extendSize.y, 0);
        const pointA = boundsLocal.boundingBox.center.add(pointFromCenter);
        const pointB = boundsLocal.boundingBox.center.subtract(pointFromCenter);
        return new PhysicsShapeCylinder(pointA, pointB, radius, mesh.getScene());
    }
}
class PhysicsShapeBox extends PhysicsShape {
    /**
     *
     * @param center local center of the box
     * @param rotation local orientation
     * @param extents size of the box in each direction
     * @param scene scene to attach to
     */ constructor(center, rotation, extents, scene){
        super({
            type: 3 /* PhysicsShapeType.BOX */ ,
            parameters: {
                center: center,
                rotation: rotation,
                extents: extents
            }
        }, scene);
    }
    /**
     *
     * @param mesh
     * @returns PhysicsShapeBox
     */ static FromMesh(mesh) {
        const bounds = mesh.getBoundingInfo();
        const centerLocal = bounds.boundingBox.center;
        const extents = bounds.boundingBox.extendSize.scale(2.0); //<todo.eoin extendSize seems to really be half-extents?
        return new PhysicsShapeBox(centerLocal, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Quaternion"].Identity(), extents, mesh.getScene());
    }
}
class PhysicsShapeConvexHull extends PhysicsShape {
    /**
     *
     * @param mesh the mesh to be used as topology infos for the convex hull
     * @param scene scene to attach to
     */ constructor(mesh, scene){
        super({
            type: 4 /* PhysicsShapeType.CONVEX_HULL */ ,
            parameters: {
                mesh: mesh
            }
        }, scene);
    }
}
class PhysicsShapeMesh extends PhysicsShape {
    /**
     *
     * @param mesh the mesh topology that will be used to create the shape
     * @param scene scene to attach to
     */ constructor(mesh, scene){
        super({
            type: 6 /* PhysicsShapeType.MESH */ ,
            parameters: {
                mesh: mesh
            }
        }, scene);
    }
}
class PhysicsShapeContainer extends PhysicsShape {
    /**
     * Constructor of the Shape container
     * @param scene scene to attach to
     */ constructor(scene){
        super({
            type: 5 /* PhysicsShapeType.CONTAINER */ ,
            parameters: {}
        }, scene);
    }
}
class PhysicsShapeHeightField extends PhysicsShape {
    /**
     * Constructor of the Shape heightfield
     * @param heightFieldSizeX The size of the heightfield in the X axis
     * @param heightFieldSizeZ The size of the heightfield in the Z axis
     * @param numHeightFieldSamplesX The number of samples along the X axis
     * @param numHeightFieldSamplesZ The number of samples along the Z axis
     * @param heightFieldData The data for the heightfield
     * @param scene scene to attach to
     */ constructor(heightFieldSizeX, heightFieldSizeZ, numHeightFieldSamplesX, numHeightFieldSamplesZ, heightFieldData, scene){
        super({
            type: 7 /* PhysicsShapeType.HEIGHTFIELD */ ,
            parameters: {
                heightFieldSizeX: heightFieldSizeX,
                heightFieldSizeZ: heightFieldSizeZ,
                numHeightFieldSamplesX: numHeightFieldSamplesX,
                numHeightFieldSamplesZ: numHeightFieldSamplesZ,
                heightFieldData: heightFieldData
            }
        }, scene);
    }
}
class PhysicsShapeGroundMesh extends PhysicsShape {
    /**
     * Constructor of the Shape heightfield
     * @param groundMesh ground mesh used for display
     * @param scene scene to attach to
     */ constructor(groundMesh, scene){
        super({
            type: 7 /* PhysicsShapeType.HEIGHTFIELD */ ,
            parameters: {
                groundMesh: groundMesh
            }
        }, scene);
    }
} //# sourceMappingURL=physicsShape.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/v2/physicsConstraint.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * This is a holder class for the physics constraint created by the physics plugin
 * It holds a set of functions to control the underlying constraint
 * @see https://doc.babylonjs.com/features/featuresDeepDive/physics/usingPhysicsEngine
 */ __turbopack_context__.s([
    "BallAndSocketConstraint",
    ()=>BallAndSocketConstraint,
    "DistanceConstraint",
    ()=>DistanceConstraint,
    "HingeConstraint",
    ()=>HingeConstraint,
    "LockConstraint",
    ()=>LockConstraint,
    "Physics6DoFConstraint",
    ()=>Physics6DoFConstraint,
    "Physics6DoFLimit",
    ()=>Physics6DoFLimit,
    "PhysicsConstraint",
    ()=>PhysicsConstraint,
    "PrismaticConstraint",
    ()=>PrismaticConstraint,
    "SliderConstraint",
    ()=>SliderConstraint,
    "SpringConstraint",
    ()=>SpringConstraint
]);
class PhysicsConstraint {
    /**
     * Constructs a new constraint for the physics constraint.
     * @param type The type of constraint to create.
     * @param options The options for the constraint.
     * @param scene The scene the constraint belongs to.
     *
     * This code is useful for creating a new constraint for the physics engine. It checks if the scene has a physics engine, and if the plugin version is correct.
     * If all checks pass, it initializes the constraint with the given type and options.
     */ constructor(type, options, scene){
        /**
         * V2 Physics plugin private data for a physics material
         */ this._pluginData = undefined;
        if (!scene) {
            throw new Error("Missing scene parameter for constraint constructor.");
        }
        const physicsEngine = scene.getPhysicsEngine();
        if (!physicsEngine) {
            throw new Error("No Physics Engine available.");
        }
        if (physicsEngine.getPluginVersion() != 2) {
            throw new Error("Plugin version is incorrect. Expected version 2.");
        }
        const physicsPlugin = physicsEngine.getPhysicsPlugin();
        if (!physicsPlugin) {
            throw new Error("No Physics Plugin available.");
        }
        this._physicsPlugin = physicsPlugin;
        this._options = options;
        this._type = type;
    }
    /**
     * Gets the type of the constraint.
     *
     * @returns The type of the constraint.
     *
     */ get type() {
        return this._type;
    }
    /**
     * Retrieves the options of the physics constraint.
     *
     * @returns The physics constraint parameters.
     *
     */ get options() {
        return this._options;
    }
    /**
     * Enable/disable the constraint
     * @param isEnabled value for the constraint
     */ set isEnabled(isEnabled) {
        this._physicsPlugin.setEnabled(this, isEnabled);
    }
    /**
     *
     * @returns true if constraint is enabled
     */ get isEnabled() {
        return this._physicsPlugin.getEnabled(this);
    }
    /**
     * Enables or disables collisions for the physics engine.
     *
     * @param isEnabled - A boolean value indicating whether collisions should be enabled or disabled.
     *
     */ set isCollisionsEnabled(isEnabled) {
        this._physicsPlugin.setCollisionsEnabled(this, isEnabled);
    }
    /**
     * Gets whether collisions are enabled for this physics object.
     *
     * @returns `true` if collisions are enabled, `false` otherwise.
     *
     */ get isCollisionsEnabled() {
        return this._physicsPlugin.getCollisionsEnabled(this);
    }
    /**
     * Gets all bodies that are using this constraint
     * @returns
     */ getBodiesUsingConstraint() {
        return this._physicsPlugin.getBodiesUsingConstraint(this);
    }
    /**
     * Disposes the constraint from the physics engine.
     *
     * This method is useful for cleaning up the physics engine when a body is no longer needed. Disposing the body will free up resources and prevent memory leaks.
     */ dispose() {
        this._physicsPlugin.disposeConstraint(this);
    }
}
class Physics6DoFLimit {
}
class Physics6DoFConstraint extends PhysicsConstraint {
    constructor(constraintParams, limits, scene){
        super(7 /* PhysicsConstraintType.SIX_DOF */ , constraintParams, scene);
        this.limits = limits;
    }
    /**
     * Sets the friction of the given axis of the physics engine.
     * @param axis - The axis of the physics engine to set the friction for.
     * @param friction - The friction to set for the given axis.
     *
     */ setAxisFriction(axis, friction) {
        this._physicsPlugin.setAxisFriction(this, axis, friction);
    }
    /**
     * Gets the friction of the given axis of the physics engine.
     * @param axis - The axis of the physics engine.
     * @returns The friction of the given axis, or null if the constraint hasn't been initialized yet.
     *
     */ getAxisFriction(axis) {
        return this._physicsPlugin.getAxisFriction(this, axis);
    }
    /**
     * Sets the limit mode for the given axis of the constraint.
     * @param axis The axis to set the limit mode for.
     * @param limitMode The limit mode to set.
     *
     * This method is useful for setting the limit mode for a given axis of the constraint. This is important for
     * controlling the behavior of the physics engine when the constraint is reached. By setting the limit mode,
     * the engine can be configured to either stop the motion of the objects, or to allow them to continue
     * moving beyond the constraint.
     */ setAxisMode(axis, limitMode) {
        this._physicsPlugin.setAxisMode(this, axis, limitMode);
    }
    /**
     * Gets the limit mode of the given axis of the constraint.
     *
     * @param axis - The axis of the constraint.
     * @returns The limit mode of the given axis, or null if the constraint hasn't been initialized yet.
     *
     */ getAxisMode(axis) {
        return this._physicsPlugin.getAxisMode(this, axis);
    }
    /**
     * Sets the minimum limit of a given axis of a constraint.
     * @param axis - The axis of the constraint.
     * @param minLimit - The minimum limit of the axis.
     *
     */ setAxisMinLimit(axis, minLimit) {
        this._physicsPlugin.setAxisMinLimit(this, axis, minLimit);
    }
    /**
     * Gets the minimum limit of the given axis of the physics engine.
     * @param axis - The axis of the physics engine.
     * @returns The minimum limit of the given axis, or null if the constraint hasn't been initialized yet.
     *
     */ getAxisMinLimit(axis) {
        return this._physicsPlugin.getAxisMinLimit(this, axis);
    }
    /**
     * Sets the maximum limit of the given axis for the physics engine.
     * @param axis - The axis to set the limit for.
     * @param limit - The maximum limit of the axis.
     *
     * This method is useful for setting the maximum limit of the given axis for the physics engine,
     * which can be used to control the movement of the physics object. This helps to ensure that the
     * physics object does not move beyond the given limit.
     */ setAxisMaxLimit(axis, limit) {
        this._physicsPlugin.setAxisMaxLimit(this, axis, limit);
    }
    /**
     * Gets the maximum limit of the given axis of the physics engine.
     * @param axis - The axis of the physics engine.
     * @returns The maximum limit of the given axis, or null if the constraint hasn't been initialized yet.
     *
     */ getAxisMaxLimit(axis) {
        return this._physicsPlugin.getAxisMaxLimit(this, axis);
    }
    /**
     * Sets the motor type of the given axis of the constraint.
     * @param axis - The axis of the constraint.
     * @param motorType - The type of motor to use.
     */ setAxisMotorType(axis, motorType) {
        this._physicsPlugin.setAxisMotorType(this, axis, motorType);
    }
    /**
     * Gets the motor type of the specified axis of the constraint.
     *
     * @param axis - The axis of the constraint.
     * @returns The motor type of the specified axis, or null if the constraint hasn't been initialized yet.
     *
     */ getAxisMotorType(axis) {
        return this._physicsPlugin.getAxisMotorType(this, axis);
    }
    /**
     * Sets the target velocity of the motor associated with the given axis of the constraint.
     * @param axis - The axis of the constraint.
     * @param target - The target velocity of the motor.
     *
     * This method is useful for setting the target velocity of the motor associated with the given axis of the constraint.
     */ setAxisMotorTarget(axis, target) {
        this._physicsPlugin.setAxisMotorTarget(this, axis, target);
    }
    /**
     * Gets the target velocity of the motor associated to the given constraint axis.
     * @param axis - The constraint axis associated to the motor.
     * @returns The target velocity of the motor, or null if the constraint hasn't been initialized yet.
     *
     */ getAxisMotorTarget(axis) {
        return this._physicsPlugin.getAxisMotorTarget(this, axis);
    }
    /**
     * Sets the maximum force of the motor of the given axis of the constraint.
     * @param axis - The axis of the constraint.
     * @param maxForce - The maximum force of the motor.
     *
     */ setAxisMotorMaxForce(axis, maxForce) {
        this._physicsPlugin.setAxisMotorMaxForce(this, axis, maxForce);
    }
    /**
     * Gets the maximum force of the motor of the given axis of the constraint.
     * @param axis - The axis of the constraint.
     * @returns The maximum force of the motor, or null if the constraint hasn't been initialized yet.
     *
     */ getAxisMotorMaxForce(axis) {
        return this._physicsPlugin.getAxisMotorMaxForce(this, axis);
    }
}
class BallAndSocketConstraint extends PhysicsConstraint {
    constructor(pivotA, pivotB, axisA, axisB, scene){
        super(1 /* PhysicsConstraintType.BALL_AND_SOCKET */ , {
            pivotA: pivotA,
            pivotB: pivotB,
            axisA: axisA,
            axisB: axisB
        }, scene);
    }
}
class DistanceConstraint extends PhysicsConstraint {
    constructor(maxDistance, scene){
        super(2 /* PhysicsConstraintType.DISTANCE */ , {
            maxDistance: maxDistance
        }, scene);
    }
}
class HingeConstraint extends PhysicsConstraint {
    constructor(pivotA, pivotB, axisA, axisB, scene){
        super(3 /* PhysicsConstraintType.HINGE */ , {
            pivotA: pivotA,
            pivotB: pivotB,
            axisA: axisA,
            axisB: axisB
        }, scene);
    }
}
class SliderConstraint extends PhysicsConstraint {
    constructor(pivotA, pivotB, axisA, axisB, scene){
        super(4 /* PhysicsConstraintType.SLIDER */ , {
            pivotA: pivotA,
            pivotB: pivotB,
            axisA: axisA,
            axisB: axisB
        }, scene);
    }
}
class LockConstraint extends PhysicsConstraint {
    constructor(pivotA, pivotB, axisA, axisB, scene){
        super(5 /* PhysicsConstraintType.LOCK */ , {
            pivotA: pivotA,
            pivotB: pivotB,
            axisA: axisA,
            axisB: axisB
        }, scene);
    }
}
class PrismaticConstraint extends PhysicsConstraint {
    constructor(pivotA, pivotB, axisA, axisB, scene){
        super(6 /* PhysicsConstraintType.PRISMATIC */ , {
            pivotA: pivotA,
            pivotB: pivotB,
            axisA: axisA,
            axisB: axisB
        }, scene);
    }
}
class SpringConstraint extends Physics6DoFConstraint {
    constructor(pivotA, pivotB, axisA, axisB, minDistance, maxDistance, stiffness, damping, scene){
        super({
            pivotA,
            pivotB,
            axisA,
            axisB
        }, [
            {
                axis: 6 /* PhysicsConstraintAxis.LINEAR_DISTANCE */ ,
                minLimit: minDistance,
                maxLimit: maxDistance,
                stiffness,
                damping
            }
        ], scene);
    }
} //# sourceMappingURL=physicsConstraint.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/v2/physicsMaterial.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Determines how values from the PhysicsMaterial are combined when
 * two objects are in contact. When each PhysicsMaterial specifies
 * a different combine mode for some property, the combine mode which
 * is used will be selected based on their order in this enum - i.e.
 * a value later in this list will be preferentially used.
 */ __turbopack_context__.s([
    "PhysicsMaterialCombineMode",
    ()=>PhysicsMaterialCombineMode
]);
var PhysicsMaterialCombineMode;
(function(PhysicsMaterialCombineMode) {
    /**
     * The final value will be the geometric mean of the two values:
     * sqrt( valueA *  valueB )
     */ PhysicsMaterialCombineMode[PhysicsMaterialCombineMode["GEOMETRIC_MEAN"] = 0] = "GEOMETRIC_MEAN";
    /**
     * The final value will be the smaller of the two:
     * min( valueA , valueB )
     */ PhysicsMaterialCombineMode[PhysicsMaterialCombineMode["MINIMUM"] = 1] = "MINIMUM";
    /* The final value will be the larger of the two:
     * max( valueA , valueB )
     */ PhysicsMaterialCombineMode[PhysicsMaterialCombineMode["MAXIMUM"] = 2] = "MAXIMUM";
    /* The final value will be the arithmetic mean of the two values:
     * (valueA + valueB) / 2
     */ PhysicsMaterialCombineMode[PhysicsMaterialCombineMode["ARITHMETIC_MEAN"] = 3] = "ARITHMETIC_MEAN";
    /**
     * The final value will be the product of the two values:
     * valueA * valueB
     */ PhysicsMaterialCombineMode[PhysicsMaterialCombineMode["MULTIPLY"] = 4] = "MULTIPLY";
})(PhysicsMaterialCombineMode || (PhysicsMaterialCombineMode = {})); //# sourceMappingURL=physicsMaterial.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/v2/physicsAggregate.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PhysicsAggregate",
    ()=>PhysicsAggregate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$physicsBody$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/v2/physicsBody.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$physicsShape$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/v2/physicsShape.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/logger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.scalar.functions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$boundingBox$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Culling/boundingBox.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
class PhysicsAggregate {
    constructor(/**
     * The physics-enabled object used as the physics aggregate
     */ transformNode, /**
     * The type of the physics aggregate
     */ type, _options = {
        mass: 0
    }, _scene){
        this.transformNode = transformNode;
        this.type = type;
        this._options = _options;
        this._scene = _scene;
        this._disposeShapeWhenDisposed = true;
        //sanity check!
        if (!this.transformNode) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Error("No object was provided. A physics object is obligatory");
            return;
        }
        const m = transformNode;
        if (this.transformNode.parent && this._options.mass !== 0 && m.hasThinInstances) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Warn("A physics body has been created for an object which has a parent and thin instances. Babylon physics currently works in local space so unexpected issues may occur.");
        }
        // Legacy support for old syntax.
        if (!this._scene && transformNode.getScene) {
            this._scene = transformNode.getScene();
        }
        if (!this._scene) {
            return;
        }
        //default options params
        this._options.mass = _options.mass === void 0 ? 0 : _options.mass;
        this._options.friction = _options.friction === void 0 ? 0.2 : _options.friction;
        this._options.restitution = _options.restitution === void 0 ? 0.2 : _options.restitution;
        const motionType = this._options.mass === 0 ? 0 /* PhysicsMotionType.STATIC */  : 2 /* PhysicsMotionType.DYNAMIC */ ;
        const startAsleep = this._options.startAsleep ?? false;
        this.body = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$physicsBody$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsBody"](transformNode, motionType, startAsleep, this._scene);
        this._addSizeOptions();
        if (type.getClassName && type.getClassName() === "PhysicsShape") {
            this.shape = type;
            this._disposeShapeWhenDisposed = false;
        } else {
            this.shape = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$physicsShape$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsShape"]({
                type: type,
                parameters: this._options
            }, this._scene);
        }
        if (this._options.isTriggerShape) {
            this.shape.isTrigger = true;
        }
        this.material = {
            friction: this._options.friction,
            restitution: this._options.restitution
        };
        this.body.shape = this.shape;
        this.shape.material = this.material;
        this.body.setMassProperties({
            mass: this._options.mass
        });
        this._nodeDisposeObserver = this.transformNode.onDisposeObservable.add(()=>{
            this.dispose();
        });
    }
    _getObjectBoundingBox() {
        if (this.transformNode.getRawBoundingInfo) {
            return this.transformNode.getRawBoundingInfo().boundingBox;
        } else {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$boundingBox$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BoundingBox"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](-0.5, -0.5, -0.5), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](0.5, 0.5, 0.5));
        }
    }
    _hasVertices(node) {
        return node?.getTotalVertices() > 0;
    }
    _addSizeOptions() {
        this.transformNode.computeWorldMatrix(true);
        const bb = this._getObjectBoundingBox();
        const extents = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0];
        extents.copyFrom(bb.extendSize);
        extents.scaleInPlace(2);
        extents.multiplyInPlace(this.transformNode.absoluteScaling);
        // In case we had any negative scaling, we need to take the absolute value of the extents.
        extents.x = Math.abs(extents.x);
        extents.y = Math.abs(extents.y);
        extents.z = Math.abs(extents.z);
        const min = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[1];
        min.copyFrom(bb.minimum);
        min.multiplyInPlace(this.transformNode.absoluteScaling);
        if (!this._options.center) {
            const center = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]();
            center.copyFrom(bb.center);
            center.multiplyInPlace(this.transformNode.absoluteScaling);
            this._options.center = center;
        }
        switch(this.type){
            case 0 /* PhysicsShapeType.SPHERE */ :
                if (!this._options.radius && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WithinEpsilon"])(extents.x, extents.y, 0.0001) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WithinEpsilon"])(extents.x, extents.z, 0.0001)) {
                    this._options.radius = extents.x / 2;
                } else if (!this._options.radius) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Warn("Non uniform scaling is unsupported for sphere shapes. Setting the radius to the biggest bounding box extent.");
                    this._options.radius = Math.max(extents.x, extents.y, extents.z) / 2;
                }
                break;
            case 1 /* PhysicsShapeType.CAPSULE */ :
                {
                    const capRadius = extents.x / 2;
                    this._options.radius = this._options.radius ?? capRadius;
                    this._options.pointA = this._options.pointA ?? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](0, min.y + capRadius, 0);
                    this._options.pointB = this._options.pointB ?? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](0, min.y + extents.y - capRadius, 0);
                }
                break;
            case 2 /* PhysicsShapeType.CYLINDER */ :
                {
                    const capRadius = extents.x / 2;
                    this._options.radius = this._options.radius ?? capRadius;
                    this._options.pointA = this._options.pointA ?? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](0, min.y, 0);
                    this._options.pointB = this._options.pointB ?? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](0, min.y + extents.y, 0);
                }
                break;
            case 6 /* PhysicsShapeType.MESH */ :
            case 4 /* PhysicsShapeType.CONVEX_HULL */ :
            case 7 /* PhysicsShapeType.HEIGHTFIELD */ :
                if (!this._options.mesh && this._hasVertices(this.transformNode)) {
                    this._options.mesh = this.transformNode;
                } else if (!this._options.mesh || !this._hasVertices(this._options.mesh)) {
                    throw new Error("No valid mesh was provided for mesh or convex hull shape parameter. Please provide a mesh with valid geometry (number of vertices greater than 0).");
                }
                break;
            case 3 /* PhysicsShapeType.BOX */ :
                this._options.extents = this._options.extents ?? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](extents.x, extents.y, extents.z);
                this._options.rotation = this._options.rotation ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Quaternion"].Identity();
                break;
        }
    }
    /**
     * Releases the body, shape and material
     */ dispose() {
        if (this._nodeDisposeObserver) {
            this.body.transformNode.onDisposeObservable.remove(this._nodeDisposeObserver);
            this._nodeDisposeObserver = null;
        }
        this.body.dispose();
        if (this._disposeShapeWhenDisposed) {
            this.shape.dispose();
        }
    }
} //# sourceMappingURL=physicsAggregate.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/v2/ragdoll.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Ragdoll",
    ()=>Ragdoll,
    "RagdollBoneProperties",
    ()=>RagdollBoneProperties
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$physicsAggregate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/v2/physicsAggregate.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$physicsConstraint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/v2/physicsConstraint.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$axis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.axis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/logger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$transformNode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/transformNode.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
class RagdollBoneProperties {
}
class Ragdoll {
    /**
     * Construct a new Ragdoll object. Once ready, it can be made dynamic by calling `Ragdoll` method
     * @param skeleton The skeleton containing bones to be physicalized
     * @param rootTransformNode The mesh or its transform used by the skeleton
     * @param config an array of `RagdollBoneProperties` corresponding to bones and their properties used to instanciate physics bodies
     */ constructor(skeleton, rootTransformNode, config){
        this._boxConfigs = new Array();
        this._constraints = new Array();
        this._bones = new Array();
        this._initialRotation = new Array();
        // without mesh transform, to figure out later
        this._initialRotation2 = new Array();
        this._boneNames = [];
        this._transforms = new Array();
        this._aggregates = new Array();
        this._ragdollMode = false;
        this._rootBoneName = "";
        this._rootBoneIndex = -1;
        this._mass = 10;
        this._restitution = 0;
        this._beforeRenderObserver = null;
        /**
         * Pause synchronization between physics and bone position/orientation
         */ this.pauseSync = false;
        this._defaultJoint = 3 /* PhysicsConstraintType.HINGE */ ;
        this._defaultJointMin = -90;
        this._defaultJointMax = 90;
        this._skeleton = skeleton;
        this._scene = skeleton.getScene();
        this._rootTransformNode = rootTransformNode;
        this._config = config; // initial, user defined box configs. May have several box configs jammed into 1 index.
        this._boxConfigs = []; // final box configs. Every element is a separate box config (this.config may have several configs jammed into 1 index).
        this._putBoxesInBoneCenter = false;
        this._defaultJoint = 3 /* PhysicsConstraintType.HINGE */ ;
        this._init();
    }
    /**
     * returns an array of created constraints
     * @returns array of created constraints
     */ getConstraints() {
        return this._constraints;
    }
    /**
     * Returns the aggregate corresponding to the ragdoll bone index
     * @param index ragdoll bone aggregate index
     * @returns the aggregate for the bone index for the root aggregate if index is invalid
     */ getAggregate(index) {
        if (index < 0 || index >= this._aggregates.length) {
            return this._aggregates[this._rootBoneIndex];
        }
        return this._aggregates[index];
    }
    _createColliders() {
        this._rootTransformNode.computeWorldMatrix();
        this._skeleton.computeAbsoluteMatrices(true);
        this._skeleton.prepare(true);
        const config = this._config;
        for(let i = 0; i < config.length; i++){
            const boneNames = config[i].bone !== undefined ? [
                config[i].bone
            ] : config[i].bones;
            for(let ii = 0; ii < boneNames.length; ii++){
                const currentBone = this._skeleton.bones[this._skeleton.getBoneIndexByName(boneNames[ii])];
                if (currentBone == undefined) {
                    return;
                }
                // First define the box dimensions, so we can then use them when calling CreateBox().
                const currentRagdollBoneProperties = {
                    width: this._config[i].width,
                    depth: this._config[i].depth,
                    height: this._config[i].height,
                    size: this._config[i].size
                };
                currentRagdollBoneProperties.width = currentRagdollBoneProperties.width ?? currentRagdollBoneProperties.size;
                currentRagdollBoneProperties.depth = currentRagdollBoneProperties.depth ?? currentRagdollBoneProperties.size;
                currentRagdollBoneProperties.height = currentRagdollBoneProperties.height ?? currentRagdollBoneProperties.size;
                const transform = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$transformNode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TransformNode"](boneNames[ii] + "_transform", this._scene);
                // Define the rest of the box properties.
                currentRagdollBoneProperties.joint = config[i].joint !== undefined ? config[i].joint : this._defaultJoint;
                currentRagdollBoneProperties.rotationAxis = config[i].rotationAxis !== undefined ? config[i].rotationAxis : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$axis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Axis"].X;
                currentRagdollBoneProperties.min = config[i].min !== undefined ? config[i].min : this._defaultJointMin;
                currentRagdollBoneProperties.max = config[i].max !== undefined ? config[i].max : this._defaultJointMax;
                // Offset value.
                let boxOffset = 0;
                if (config[i].putBoxInBoneCenter !== undefined && config[i].putBoxInBoneCenter || this._putBoxesInBoneCenter) {
                    if (currentBone.length === undefined) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Log("The length property is not defined for bone " + currentBone.name);
                    }
                    boxOffset = currentBone.length / 2;
                } else if (config[i].boxOffset !== undefined) {
                    boxOffset = config[i].boxOffset;
                }
                currentRagdollBoneProperties.boxOffset = boxOffset;
                // Offset axis.
                const boneOffsetAxis = config[i].boneOffsetAxis !== undefined ? config[i].boneOffsetAxis : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$axis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Axis"].Y;
                const boneDir = currentBone.getDirection(boneOffsetAxis, this._rootTransformNode);
                currentRagdollBoneProperties.boneOffsetAxis = boneOffsetAxis;
                transform.position = currentBone.getAbsolutePosition(this._rootTransformNode).add(boneDir.scale(boxOffset));
                const mass = config[i].mass !== undefined ? config[i].mass : this._mass;
                const restitution = config[i].restitution !== undefined ? config[i].restitution : this._restitution;
                const aggregate = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$physicsAggregate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsAggregate"](transform, 3 /* PhysicsShapeType.BOX */ , {
                    mass: mass,
                    restitution: restitution,
                    friction: 0.6,
                    extents: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](currentRagdollBoneProperties.width, currentRagdollBoneProperties.height, currentRagdollBoneProperties.depth)
                }, this._scene);
                aggregate.body.setCollisionCallbackEnabled(true);
                aggregate.body.disablePreStep = false;
                aggregate.body.setMotionType(1 /* PhysicsMotionType.ANIMATED */ );
                this._aggregates.push(aggregate);
                this._bones.push(currentBone);
                this._boneNames.push(currentBone.name);
                this._transforms.push(transform);
                this._boxConfigs.push(currentRagdollBoneProperties);
                this._initialRotation.push(currentBone.getRotationQuaternion(1 /* Space.WORLD */ , this._rootTransformNode));
                this._initialRotation2.push(currentBone.getRotationQuaternion(1 /* Space.WORLD */ ));
            }
        }
    }
    _initJoints() {
        this._rootTransformNode.computeWorldMatrix();
        for(let i = 0; i < this._bones.length; i++){
            // The root bone has no joints.
            if (i == this._rootBoneIndex) {
                continue;
            }
            const nearestParent = this._findNearestParent(i);
            if (nearestParent == null) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Warn("Couldn't find a nearest parent bone in the configs for bone called " + this._boneNames[i]);
                return;
            }
            const boneParentIndex = this._boneNames.indexOf(nearestParent.name);
            let distanceFromParentBoxToBone = this._bones[i].getAbsolutePosition(this._rootTransformNode).subtract(this._transforms[boneParentIndex].position);
            const wmat = this._transforms[boneParentIndex].computeWorldMatrix();
            const invertedWorldMat = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"].Invert(wmat);
            distanceFromParentBoxToBone = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinates(this._bones[i].getAbsolutePosition(this._rootTransformNode), invertedWorldMat);
            const boneAbsPos = this._bones[i].getAbsolutePosition(this._rootTransformNode);
            const boxAbsPos = this._transforms[i].position.clone();
            const myConnectedPivot = boneAbsPos.subtract(boxAbsPos);
            const constraintType = this._boxConfigs[i].joint ?? this._defaultJoint;
            const constraint = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$physicsConstraint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsConstraint"](constraintType, {
                pivotA: distanceFromParentBoxToBone,
                pivotB: myConnectedPivot,
                axisA: this._boxConfigs[i].rotationAxis,
                axisB: this._boxConfigs[i].rotationAxis,
                collision: false
            }, this._scene);
            this._aggregates[boneParentIndex].body.addConstraint(this._aggregates[i].body, constraint);
            constraint.isEnabled = false;
            this._constraints.push(constraint);
        }
    }
    // set physics body orientation/position from bones
    _syncBonesToPhysics() {
        const rootMatrix = this._rootTransformNode.getWorldMatrix();
        for(let i = 0; i < this._bones.length; i++){
            // position
            const transform = this._aggregates[i].transformNode;
            const rootPos = this._bones[i].getAbsolutePosition();
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinatesToRef(rootPos, rootMatrix, transform.position);
            // added offset
            this._bones[i].getDirectionToRef(this._boxConfigs[i].boneOffsetAxis, this._rootTransformNode, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0]);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0].scaleInPlace(this._boxConfigs[i].boxOffset ?? 0);
            transform.position.addInPlace(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0]);
            this._setBoneOrientationToBody(i);
        }
    }
    _setBoneOrientationToBody(boneIndex) {
        const transform = this._aggregates[boneIndex].transformNode;
        const bone = this._bones[boneIndex];
        this._initialRotation[boneIndex].conjugateToRef(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Quaternion[0]);
        bone.getRotationQuaternionToRef(1 /* Space.WORLD */ , this._rootTransformNode, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Quaternion[1]);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Quaternion[1].multiplyToRef(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Quaternion[0], transform.rotationQuaternion);
        transform.rotationQuaternion.normalize();
    }
    _syncBonesAndBoxes() {
        if (this.pauseSync) {
            return;
        }
        if (this._ragdollMode) {
            this._setBodyOrientationToBone(this._rootBoneIndex);
            const rootPos = this._aggregates[this._rootBoneIndex].body.transformNode.position;
            this._rootTransformNode.getWorldMatrix().invertToRef(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[0]);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinatesToRef(rootPos, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[0], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0]);
            this._bones[this._rootBoneIndex].setAbsolutePosition(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0]);
            for(let i = 0; i < this._bones.length; i++){
                if (i == this._rootBoneIndex) {
                    continue;
                }
                this._setBodyOrientationToBone(i);
            }
        } else {
            this._syncBonesToPhysics();
        }
    }
    _setBodyOrientationToBone(boneIndex) {
        const qmesh = this._rootTransformNode.rotationQuaternion ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Quaternion"].FromEulerAngles(this._rootTransformNode.rotation.x, this._rootTransformNode.rotation.y, this._rootTransformNode.rotation.z);
        const qbind = this._initialRotation2[boneIndex];
        const qphys = this._aggregates[boneIndex].body?.transformNode?.rotationQuaternion;
        qmesh.multiplyToRef(qbind, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Quaternion[1]);
        qphys?.multiplyToRef(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Quaternion[1], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Quaternion[0]);
        this._bones[boneIndex].setRotationQuaternion(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Quaternion[0], 1 /* Space.WORLD */ , this._rootTransformNode);
    }
    // Return true if root bone is valid/exists in this.bonesNames. false otherwise.
    _defineRootBone() {
        const skeletonRoots = this._skeleton.getChildren();
        if (skeletonRoots.length != 1) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Log("Ragdoll creation failed: there can only be one root in the skeleton.");
            return false;
        }
        this._rootBoneName = skeletonRoots[0].name;
        this._rootBoneIndex = this._boneNames.indexOf(this._rootBoneName);
        if (this._rootBoneIndex == -1) {
            // eslint-disable-next-line @typescript-eslint/restrict-plus-operands, @typescript-eslint/no-base-to-string
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Log("Ragdoll creation failed: the array boneNames doesn't have the root bone. The root bone is " + this._skeleton.getChildren());
            return false;
        }
        return true;
    }
    _findNearestParent(boneIndex) {
        let nearestParent = this._bones[boneIndex].getParent();
        do {
            if (nearestParent != null && this._boneNames.includes(nearestParent.name)) {
                break;
            }
            nearestParent = nearestParent?.getParent();
        }while (nearestParent != null)
        return nearestParent;
    }
    _init() {
        this._createColliders();
        // If this.defineRootBone() returns ... there is not root bone.
        if (!this._defineRootBone()) {
            return;
        }
        this._initJoints();
        this._beforeRenderObserver = this._scene.onBeforeRenderObservable.add(()=>{
            this._syncBonesAndBoxes();
        });
        this._syncBonesToPhysics();
    }
    /**
     * Enable ragdoll mode. Create physics objects and make them dynamic.
     */ ragdoll() {
        this._ragdollMode = true;
        // detach bones with link transform to let physics have control
        for (const bone of this._skeleton.bones){
            bone.linkTransformNode(null);
        }
        for(let i = 0; i < this._constraints.length; i++){
            this._constraints[i].isEnabled = true;
        }
        for(let i = 0; i < this._aggregates.length; i++){
            this._aggregates[i].body.setMotionType(2 /* PhysicsMotionType.DYNAMIC */ );
        }
    }
    /**
     * Dispose resources and remove physics objects
     */ dispose() {
        for (const aggregate of this._aggregates){
            aggregate.dispose();
        }
        this._aggregates.length = 0;
        for (const transform of this._transforms){
            transform.dispose();
        }
        this._transforms.length = 0;
        for (const constraint of this._constraints){
            constraint.dispose();
        }
        this._constraints.length = 0;
        if (this._beforeRenderObserver) {
            this._scene.onBeforeRenderObservable.remove(this._beforeRenderObserver);
            this._beforeRenderObserver = null;
        }
    }
} //# sourceMappingURL=ragdoll.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/v2/characterController.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CharacterSupportedState",
    ()=>CharacterSupportedState,
    "PhysicsCharacterController",
    ()=>PhysicsCharacterController
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$physicsShape$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/v2/physicsShape.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$arrayTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/arrayTools.js [app-ssr] (ecmascript)");
;
;
;
var CharacterSupportedState;
(function(CharacterSupportedState) {
    CharacterSupportedState[CharacterSupportedState["UNSUPPORTED"] = 0] = "UNSUPPORTED";
    CharacterSupportedState[CharacterSupportedState["SLIDING"] = 1] = "SLIDING";
    CharacterSupportedState[CharacterSupportedState["SUPPORTED"] = 2] = "SUPPORTED";
})(CharacterSupportedState || (CharacterSupportedState = {}));
var SurfaceConstraintInteractionStatus;
(function(SurfaceConstraintInteractionStatus) {
    SurfaceConstraintInteractionStatus[SurfaceConstraintInteractionStatus["OK"] = 0] = "OK";
    SurfaceConstraintInteractionStatus[SurfaceConstraintInteractionStatus["FAILURE_3D"] = 1] = "FAILURE_3D";
    SurfaceConstraintInteractionStatus[SurfaceConstraintInteractionStatus["FAILURE_2D"] = 2] = "FAILURE_2D";
})(SurfaceConstraintInteractionStatus || (SurfaceConstraintInteractionStatus = {}));
/** @internal */ class SimplexSolverOutput {
}
/** @internal */ class SimplexSolverActivePlanes {
    /** @internal */ copyFrom(other) {
        this.index = other.index;
        this.constraint = other.constraint;
        this.interaction = other.interaction;
    }
}
/** @internal */ class SimplexSolverInfo {
    constructor(){
        /** @internal */ this.supportPlanes = new Array(4);
        /** @internal */ this.numSupportPlanes = 0;
        /** @internal */ this.currentTime = 0;
    }
    /** @internal */ getOutput(constraint) {
        return this.outputInteractions[this.inputConstraints.indexOf(constraint)]; //<todo.eoin This is O(1) in C++! Equivalent in TS?
    }
}
/** @internal */ function ContactFromCast(hp, cp /*ContactPoint*/ , castPath, hitFraction, keepDistance) {
    const bodyMap = hp._bodies;
    const normal = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].FromArray(cp[4]);
    const dist = -hitFraction * castPath.dot(normal);
    return {
        position: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].FromArray(cp[3]),
        normal: normal,
        distance: dist,
        fraction: hitFraction,
        bodyB: bodyMap.get(cp[0][0]),
        allowedPenetration: Math.min(Math.max(keepDistance - dist, 0.0), keepDistance)
    };
}
class PhysicsCharacterController {
    /**
     * instanciate a new characterController
     * @param position Initial position
     * @param characterShapeOptions character physics shape options
     * @param scene Scene
     */ constructor(position, characterShapeOptions, scene){
        this._orientation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Quaternion"].Identity();
        this._manifold = [];
        this._contactAngleSensitivity = 10.0;
        this._tmpMatrix = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"]();
        this._tmpVecs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$arrayTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BuildArray"])(31, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Zero);
        /**
         * minimum distance to make contact
         * default 0.05
         */ this.keepDistance = 0.05;
        /**
         * maximum distance to keep contact
         * default 0.1
         */ this.keepContactTolerance = 0.1;
        /**
         * maximum number of raycast per integration starp
         * default 10
         */ this.maxCastIterations = 10;
        /**
         * speed when recovery from penetration
         * default 1.0
         */ this.penetrationRecoverySpeed = 1.0;
        /**
         * friction with static surfaces
         * default 0
         */ this.staticFriction = 0;
        /**
         * friction with dynamic surfaces
         * default 1
         */ this.dynamicFriction = 1;
        /**
         * cosine value of slope angle that can be climbed
         * computed as `Math.cos(Math.PI * (angleInDegree / 180.0));`
         * default 0.5 (value for a 60deg angle)
         */ this.maxSlopeCosine = 0.5;
        /**
         * character maximum speed
         * default 10
         */ this.maxCharacterSpeedForSolver = 10.0;
        /**
         * up vector
         */ this.up = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](0, 1, 0);
        /**
         * Strength when pushing other bodies
         * default 1e38
         */ this.characterStrength = 1e38;
        /**
         * Acceleration factor. A value of 1 means reaching max velocity immediately
         */ this.acceleration = 0.05;
        /**
         * maximum acceleration in world space coordinate
         */ this.maxAcceleration = 50;
        /**
         * character mass
         * default 0
         */ this.characterMass = 0;
        this._position = position.clone();
        this._velocity = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        this._lastVelocity = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        const r = characterShapeOptions.capsuleRadius ?? 0.6;
        const h = characterShapeOptions.capsuleHeight ?? 1.8;
        this._tmpVecs[0].set(0, h * 0.5 - r, 0);
        this._tmpVecs[1].set(0, -h * 0.5 + r, 0);
        this._ownShape = !characterShapeOptions.shape;
        this._shape = characterShapeOptions.shape ?? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$physicsShape$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsShapeCapsule"](this._tmpVecs[0], this._tmpVecs[1], r, scene);
        this._lastInvDeltaTime = 1.0 / 60.0;
        this._lastDisplacement = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        this._scene = scene;
        const hk = this._scene.getPhysicsEngine().getPhysicsPlugin();
        const hknp = hk._hknp;
        this._startCollector = hknp.HP_QueryCollector_Create(16)[1];
        this._castCollector = hknp.HP_QueryCollector_Create(16)[1];
    }
    /**
     * Get shape used for collision
     */ get shape() {
        return this._shape;
    }
    /**
     * Set shape used for collision
     */ set shape(value) {
        if (this._ownShape) {
            this._shape.dispose();
        }
        this._shape = value;
        this._ownShape = false;
    }
    /**
     * Character position
     * @returns Character position
     */ getPosition() {
        return this._position;
    }
    /**
     * Teleport character to a new position
     * @param position new position
     */ setPosition(position) {
        this._position.copyFrom(position);
    }
    /**
     * Character velocity
     * @returns Character velocity vector
     */ getVelocity() {
        return this._velocity;
    }
    /**
     * Set velocity vector
     * @param velocity vector
     */ setVelocity(velocity) {
        this._velocity.copyFrom(velocity);
    }
    _validateManifold() {
        const newManifold = [];
        for(let i = 0; i < this._manifold.length; i++){
            if (!this._manifold[i].bodyB.body.isDisposed) {
                newManifold.push(this._manifold[i]);
            }
        }
        this._manifold = newManifold;
    }
    _getPointVelocityToRef(body, pointWorld, result) {
        //<todo does this really not exist in body interface?
        const comWorld = this._tmpVecs[10];
        this._getComWorldToRef(body, comWorld);
        const relPos = this._tmpVecs[11];
        pointWorld.subtractToRef(comWorld, relPos);
        const av = this._tmpVecs[12];
        body.body.getAngularVelocityToRef(av, body.index);
        const arm = this._tmpVecs[13];
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].CrossToRef(av, relPos, arm);
        arm.addToRef(body.body.getLinearVelocity(body.index), result);
    }
    _compareContacts(contactA, contactB) {
        const angSquared = (1.0 - contactA.normal.dot(contactB.normal)) * this._contactAngleSensitivity * this._contactAngleSensitivity;
        const planeDistSquared = (contactA.distance - contactB.distance) * (contactA.distance * contactB.distance);
        const p1Vel = this._tmpVecs[7];
        this._getPointVelocityToRef(contactA.bodyB, contactA.position, p1Vel);
        const p2Vel = this._tmpVecs[8];
        this._getPointVelocityToRef(contactB.bodyB, contactB.position, p2Vel);
        const velocityDiff = this._tmpVecs[9];
        p1Vel.subtractToRef(p2Vel, velocityDiff);
        const velocityDiffSquared = velocityDiff.lengthSquared();
        const fitness = angSquared * 10.0 + velocityDiffSquared * 0.1 + planeDistSquared;
        return fitness;
    }
    _findContact(referenceContact, contactList, threshold) {
        let bestIdx = -1;
        let bestFitness = threshold;
        for(let i = 0; i < contactList.length; i++){
            const fitness = this._compareContacts(referenceContact, contactList[i]);
            if (fitness < bestFitness) {
                bestFitness = fitness;
                bestIdx = i;
            }
        }
        return bestIdx;
    }
    _updateManifold(startCollector /*HP_CollectorId*/ , castCollector /*HP_CollectorId*/ , castPath) {
        const hk = this._scene.getPhysicsEngine().getPhysicsPlugin();
        const hknp = hk._hknp;
        const numProximityHits = hknp.HP_QueryCollector_GetNumHits(startCollector)[1];
        if (numProximityHits > 0) {
            const newContacts = [];
            let minDistance = 1e38;
            const bodyMap = hk._bodies;
            for(let i = 0; i < numProximityHits; i++){
                const [distance, , contactWorld] = hknp.HP_QueryCollector_GetShapeProximityResult(startCollector, i)[1];
                minDistance = Math.min(minDistance, distance);
                newContacts.push({
                    position: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].FromArray(contactWorld[3]),
                    normal: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].FromArray(contactWorld[4]),
                    distance: distance,
                    fraction: 0,
                    bodyB: bodyMap.get(contactWorld[0][0]),
                    allowedPenetration: Math.min(Math.max(this.keepDistance - distance, 0.0), this.keepDistance)
                });
            }
            for(let i = this._manifold.length - 1; i >= 0; i--){
                const currentContact = this._manifold[i];
                const bestMatch = this._findContact(currentContact, newContacts, 1.1);
                if (bestMatch >= 0) {
                    const newAllowedPenetration = Math.min(Math.max(this.keepDistance - newContacts[bestMatch].distance, 0.0), currentContact.allowedPenetration);
                    this._manifold[i] = newContacts[bestMatch];
                    this._manifold[i].allowedPenetration = newAllowedPenetration;
                    newContacts.splice(bestMatch, 1);
                } else {
                    this._manifold.splice(i, 1);
                }
            }
            const closestContactIndex = newContacts.findIndex((c)=>c.distance == minDistance);
            if (closestContactIndex >= 0) {
                const bestMatch = this._findContact(newContacts[closestContactIndex], this._manifold, 0.1);
                if (bestMatch >= 0) {
                    const newAllowedPenetration = Math.min(Math.max(this.keepDistance - newContacts[closestContactIndex].distance, 0.0), this._manifold[bestMatch].allowedPenetration);
                    this._manifold[bestMatch] = newContacts[closestContactIndex];
                    this._manifold[bestMatch].allowedPenetration = newAllowedPenetration;
                } else {
                    this._manifold.push(newContacts[closestContactIndex]);
                }
            }
        } else {
            // No start hits; clear manifold completely
            this._manifold.length = 0;
        }
        let numHitBodies = 0; //< == CASTCOLLECTOR_HIT_SINGLE_BODY
        // Process shape cast results if any
        const numCastHits = hknp.HP_QueryCollector_GetNumHits(castCollector)[1];
        if (numCastHits > 0) {
            let closestHitBody = null;
            for(let i = 0; i < numCastHits; i++){
                const [fraction, , hitWorld] = hknp.HP_QueryCollector_GetShapeCastResult(castCollector, i)[1];
                if (closestHitBody == null) {
                    const contact = ContactFromCast(hk, hitWorld, castPath, fraction, this.keepDistance);
                    closestHitBody = hitWorld[0][0];
                    const bestMatch = this._findContact(contact, this._manifold, 0.1);
                    if (bestMatch == -1) {
                        this._manifold.push(contact);
                    }
                    if (contact.bodyB.body.getMotionType(contact.bodyB.index) == 0 /* PhysicsMotionType.STATIC */ ) {
                        break;
                    }
                } else if (closestHitBody._pluginData && hitWorld[0] != closestHitBody._pluginData.hpBodyId) {
                    numHitBodies++;
                    break;
                }
            }
        }
        // Remove from the manifold contacts that are too similar as the simplex does not handle parallel planes
        for(let e1 = this._manifold.length - 1; e1 >= 0; e1--){
            let e2 = e1 - 1;
            for(; e2 >= 0; e2--){
                const fitness = this._compareContacts(this._manifold[e1], this._manifold[e2]);
                if (fitness < 0.1) {
                    break;
                }
            }
            if (e2 >= 0) {
                this._manifold.slice(e1, 1);
            }
        }
        return numHitBodies;
    }
    _createSurfaceConstraint(contact, timeTravelled) {
        const constraint = {
            //let distance = contact.distance - this.keepDistance;
            planeNormal: contact.normal.clone(),
            planeDistance: contact.distance,
            staticFriction: this.staticFriction,
            dynamicFriction: this.dynamicFriction,
            extraUpStaticFriction: 0,
            extraDownStaticFriction: 0,
            velocity: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Zero(),
            angularVelocity: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Zero(),
            priority: 0
        };
        const maxSlopeCosEps = 0.1;
        const maxSlopeCosine = Math.max(this.maxSlopeCosine, maxSlopeCosEps);
        const normalDotUp = contact.normal.dot(this.up);
        const contactPosition = contact.position.clone();
        if (normalDotUp > maxSlopeCosine) {
            const com = this.getPosition();
            const contactArm = this._tmpVecs[20];
            contact.position.subtractToRef(com, contactArm);
            const scale = contact.normal.dot(contactArm);
            contactPosition.x = com.x + this.up.x * scale;
            contactPosition.y = com.y + this.up.y * scale;
            contactPosition.z = com.z + this.up.z * scale;
        }
        const motionType = contact.bodyB.body.getMotionType(contact.bodyB.index);
        if (motionType != 0 /* PhysicsMotionType.STATIC */ ) {
        //<todo Need hknpMotionUtil::predictPontVelocity
        }
        const shift = constraint.velocity.dot(constraint.planeNormal) * timeTravelled;
        constraint.planeDistance -= shift;
        if (motionType == 0 /* PhysicsMotionType.STATIC */ ) {
            constraint.priority = 2;
        } else if (motionType == 1 /* PhysicsMotionType.ANIMATED */ ) {
            constraint.priority = 1;
        }
        return constraint;
    }
    _addMaxSlopePlane(maxSlopeCos, up, index, constraints, allowedPenetration) {
        const verticalComponent = constraints[index].planeNormal.dot(up);
        if (verticalComponent > 0.01 && verticalComponent < maxSlopeCos) {
            const newConstraint = {
                planeNormal: constraints[index].planeNormal.clone(),
                planeDistance: constraints[index].planeDistance,
                velocity: constraints[index].velocity.clone(),
                angularVelocity: constraints[index].angularVelocity.clone(),
                priority: constraints[index].priority,
                dynamicFriction: constraints[index].dynamicFriction,
                staticFriction: constraints[index].staticFriction,
                extraDownStaticFriction: constraints[index].extraDownStaticFriction,
                extraUpStaticFriction: constraints[index].extraUpStaticFriction
            };
            const distance = newConstraint.planeDistance;
            newConstraint.planeNormal.subtractInPlace(up.scale(verticalComponent));
            newConstraint.planeNormal.normalize();
            if (distance >= 0) {
                newConstraint.planeDistance = distance * newConstraint.planeNormal.dot(constraints[index].planeNormal);
            } else {
                const penetrationToResolve = Math.min(0, distance + allowedPenetration);
                newConstraint.planeDistance = penetrationToResolve / newConstraint.planeNormal.dot(constraints[index].planeNormal);
                constraints[index].planeDistance = 0;
                this._resolveConstraintPenetration(newConstraint, this.penetrationRecoverySpeed);
            }
            constraints.push(newConstraint);
            return true;
        }
        return false;
    }
    _resolveConstraintPenetration(constraint, penetrationRecoverySpeed) {
        // If penetrating we add extra velocity to push the character back out
        const eps = 1e-6;
        if (constraint.planeDistance < -eps) {
            constraint.planeNormal.scaleToRef(constraint.planeDistance * penetrationRecoverySpeed, this._tmpVecs[6]);
            constraint.velocity.subtractInPlace(this._tmpVecs[6]);
        }
    }
    _createConstraintsFromManifold(dt, timeTravelled) {
        const constraints = [];
        for(let i = 0; i < this._manifold.length; i++){
            const surfaceConstraint = this._createSurfaceConstraint(this._manifold[i], timeTravelled);
            constraints.push(surfaceConstraint);
            this._addMaxSlopePlane(this.maxSlopeCosine, this.up, i, constraints, this._manifold[i].allowedPenetration);
            this._resolveConstraintPenetration(surfaceConstraint, this.penetrationRecoverySpeed);
        }
        return constraints;
    }
    _simplexSolverSortInfo(info) {
        // simple bubble sort by (priority,velocity)
        for(let i = 0; i < info.numSupportPlanes - 1; i++){
            for(let j = i + 1; j < info.numSupportPlanes; j++){
                const p0 = info.supportPlanes[i];
                const p1 = info.supportPlanes[j];
                if (p0.constraint.priority < p1.constraint.priority) {
                    continue;
                }
                if (p0.constraint.priority == p1.constraint.priority) {
                    const vel0 = p0.constraint.velocity.lengthSquared();
                    const vel1 = p1.constraint.velocity.lengthSquared();
                    if (vel0 < vel1) {
                        continue;
                    }
                }
                info.supportPlanes[i] = p1;
                info.supportPlanes[j] = p0;
            }
        }
    }
    _simplexSolverSolve1d(info, sci, velocityIn, velocityOut) {
        const eps = 1e-5;
        const groundVelocity = sci.velocity;
        const relativeVelocity = this._tmpVecs[22];
        velocityIn.subtractToRef(groundVelocity, relativeVelocity);
        const planeVel = relativeVelocity.dot(sci.planeNormal);
        const origVelocity2 = relativeVelocity.lengthSquared();
        relativeVelocity.subtractInPlace(sci.planeNormal.scale(planeVel));
        {
            const vp2 = planeVel * planeVel;
            // static friction is active if
            //  velProjPlane * friction > |(velParallel)|
            //      vplane   *     f    >         vpar
            //      vp       *     f    >         vpar
            //      vp2      *     f2   >         vpar2
            const extraStaticFriction = relativeVelocity.dot(this.up) > 0 ? sci.extraUpStaticFriction : sci.extraDownStaticFriction;
            if (extraStaticFriction > 0) {
                const horizontal = this.up.cross(sci.planeNormal);
                const hor2 = horizontal.lengthSquared();
                let horVel = 0.0;
                if (hor2 > eps) {
                    horizontal.scaleInPlace(1 / Math.sqrt(hor2));
                    horVel = relativeVelocity.dot(horizontal);
                    // horizontal component
                    {
                        const horVel2 = horVel * horVel;
                        const f2 = sci.staticFriction * sci.staticFriction;
                        if (vp2 * f2 >= horVel2) {
                            relativeVelocity.subtractInPlace(horizontal.scale(horVel));
                            horVel = 0;
                        }
                    }
                }
                // vert component
                {
                    const vertVel2 = origVelocity2 - horVel * horVel - vp2;
                    const f2 = (sci.staticFriction + extraStaticFriction) * (sci.staticFriction + extraStaticFriction);
                    if (vp2 * f2 >= vertVel2) {
                        if (horVel == 0.0) {
                            velocityOut.copyFrom(groundVelocity);
                            return;
                        }
                    }
                }
            } else {
                // static friction is active if
                //  velProjPlane * friction > |(vel-velProjPlane)|
                //      vp       *     f    >         rvProj
                //
                //  -> vp * f >= rvProj
                //  -> vp * f >= sqrt( vel^2 - vp^2 )
                //  -> vp^2 ( f^2 + 1 ) >= vel^2
                const f2 = sci.staticFriction * sci.staticFriction;
                if (vp2 * (1 + f2) >= origVelocity2) {
                    velocityOut.copyFrom(groundVelocity);
                    return;
                }
            }
        }
        if (sci.dynamicFriction < 1) {
            //  apply dynamic friction 0 = conserve input velocity 1 = clip against normal
            const velOut2 = relativeVelocity.lengthSquared();
            if (velOut2 >= eps) {
                if (velOut2 > 1e-4 * origVelocity2) {
                    let f = Math.sqrt(origVelocity2 / velOut2);
                    f = sci.dynamicFriction + (1 - sci.dynamicFriction) * f;
                    relativeVelocity.scaleInPlace(f);
                    const p = sci.planeNormal.dot(relativeVelocity);
                    relativeVelocity.subtractInPlace(sci.planeNormal.scale(p));
                }
            }
        }
        velocityOut.copyFrom(relativeVelocity);
        velocityOut.addInPlace(groundVelocity);
    }
    _simplexSolverSolveTest1d(sci, velocityIn) {
        const eps = 1e-3;
        const relativeVelocity = this._tmpVecs[23];
        velocityIn.subtractToRef(sci.velocity, relativeVelocity);
        return relativeVelocity.dot(sci.planeNormal) < -eps;
    }
    _simplexSolverSolve2d(info, maxSurfaceVelocity, sci0, sci1, velocityIn, velocityOut) {
        const eps = 1e-5;
        const axis = sci0.planeNormal.cross(sci1.planeNormal);
        const axisLen2 = axis.lengthSquared();
        let solveSequentially = false;
        let axisVel = null;
        // eslint-disable-next-line no-constant-condition
        while(true){
            // Check for parallel planes
            if (axisLen2 <= eps || solveSequentially) {
                info.getOutput(sci0).status = 2 /* SurfaceConstraintInteractionStatus.FAILURE_2D */ ;
                info.getOutput(sci1).status = 2 /* SurfaceConstraintInteractionStatus.FAILURE_2D */ ;
                if (sci0.priority > sci1.priority) {
                    this._simplexSolverSolve1d(info, sci1, velocityIn, velocityOut);
                    this._simplexSolverSolve1d(info, sci0, velocityIn, velocityOut);
                } else {
                    this._simplexSolverSolve1d(info, sci0, velocityIn, velocityOut);
                    this._simplexSolverSolve1d(info, sci1, velocityIn, velocityOut);
                }
                return;
            }
            const invAxisLen = 1.0 / Math.sqrt(axisLen2);
            axis.scaleInPlace(invAxisLen);
            //  Calculate the velocity of the free axis
            {
                const r0 = sci0.planeNormal.cross(sci1.planeNormal);
                const r1 = sci1.planeNormal.cross(axis);
                const r2 = axis.cross(sci0.planeNormal);
                const sVel = sci0.velocity.add(sci1.velocity);
                const t = this._tmpVecs[2];
                t.set(0.5 * axis.dot(sVel), sci0.planeNormal.dot(sci0.velocity), sci1.planeNormal.dot(sci1.velocity));
                const m = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"].FromValues(r0.x, r1.x, r2.x, 0, r0.y, r1.y, r2.y, 0, r0.z, r1.z, r2.z, 0, 0, 0, 0, 1);
                axisVel = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].TransformNormal(t, m);
                axisVel.scaleInPlace(invAxisLen);
                if (Math.abs(axisVel.x) > maxSurfaceVelocity.x || Math.abs(axisVel.y) > maxSurfaceVelocity.y || Math.abs(axisVel.z) > maxSurfaceVelocity.z) {
                    solveSequentially = true;
                } else {
                    break;
                }
            }
        }
        const groundVelocity = axisVel;
        const relativeVelocity = this._tmpVecs[24];
        velocityIn.subtractToRef(groundVelocity, relativeVelocity);
        const vel2 = relativeVelocity.lengthSquared();
        const axisVert = this.up.dot(axis);
        let axisProjVelocity = relativeVelocity.dot(axis);
        let staticFriction = sci0.staticFriction + sci1.staticFriction;
        if (axisVert * axisProjVelocity > 0) {
            staticFriction += (sci0.extraUpStaticFriction + sci1.extraUpStaticFriction) * axisVert;
        } else {
            staticFriction += (sci0.extraDownStaticFriction + sci1.extraDownStaticFriction) * axisVert;
        }
        staticFriction *= 0.5;
        const dynamicFriction = (sci0.dynamicFriction + sci1.dynamicFriction) * 0.5;
        // static friction is active if
        //  |vel-axisProjVelocity|(rv) * friction(f) > axisProjVelocity(av)
        //  -> sqrt( vel2 - av2 ) * f > av
        //  -> (vel2 - av2) * f2  > av2
        const f2 = staticFriction * staticFriction;
        const av2 = axisProjVelocity * axisProjVelocity;
        if ((vel2 - av2) * f2 >= av2) {
            // static friction kicks in
            velocityOut.copyFrom(groundVelocity);
            return;
        }
        if (dynamicFriction < 1) {
            //  apply dynamic friction
            if (axisProjVelocity * axisProjVelocity > 1e-4 * vel2) {
                const tmp = 1.0 / axisProjVelocity;
                const f = Math.abs(tmp) * Math.sqrt(vel2) * (1.0 - dynamicFriction) + dynamicFriction;
                axisProjVelocity *= f;
            }
        }
        velocityOut.copyFrom(groundVelocity);
        velocityOut.addInPlace(axis.scale(axisProjVelocity));
    }
    _simplexSolverSolve3d(info, maxSurfaceVelocity, sci0, sci1, sci2, allowResort, velocityIn, velocityOut) {
        const eps = 1e-5;
        //  Calculate the velocity of the point axis
        let pointVel = null;
        {
            const r0 = sci1.planeNormal.cross(sci2.planeNormal);
            const r1 = sci2.planeNormal.cross(sci0.planeNormal);
            const r2 = sci0.planeNormal.cross(sci1.planeNormal);
            const det = r0.dot(sci0.planeNormal);
            let solveSequentially = false;
            // eslint-disable-next-line no-constant-condition
            while(true){
                if (Math.abs(det) < eps || solveSequentially) {
                    if (allowResort) {
                        this._simplexSolverSortInfo(info);
                        sci0 = info.supportPlanes[0].constraint;
                        sci1 = info.supportPlanes[1].constraint;
                        sci2 = info.supportPlanes[2].constraint;
                    }
                    info.getOutput(sci0).status = 1 /* SurfaceConstraintInteractionStatus.FAILURE_3D */ ;
                    info.getOutput(sci1).status = 1 /* SurfaceConstraintInteractionStatus.FAILURE_3D */ ;
                    info.getOutput(sci2).status = 1 /* SurfaceConstraintInteractionStatus.FAILURE_3D */ ;
                    const oldNum = info.numSupportPlanes;
                    this._simplexSolverSolve2d(info, maxSurfaceVelocity, sci0, sci1, velocityIn, velocityOut);
                    if (oldNum == info.numSupportPlanes) {
                        this._simplexSolverSolve2d(info, maxSurfaceVelocity, sci0, sci2, velocityIn, velocityOut);
                    }
                    if (oldNum == info.numSupportPlanes) {
                        this._simplexSolverSolve2d(info, maxSurfaceVelocity, sci1, sci2, velocityIn, velocityOut);
                    }
                    return;
                }
                const t = this._tmpVecs[2];
                t.set(sci0.planeNormal.dot(sci0.velocity), sci1.planeNormal.dot(sci1.velocity), sci2.planeNormal.dot(sci2.velocity));
                const m = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"].FromValues(r0.x, r0.y, r0.z, 0, r1.x, r1.y, r1.z, 0, r2.x, r2.y, r2.z, 0, 0, 0, 0, 1);
                pointVel = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].TransformNormal(t, m);
                pointVel.scaleInPlace(1 / det);
                if (Math.abs(pointVel.x) > maxSurfaceVelocity.x || Math.abs(pointVel.y) > maxSurfaceVelocity.y || Math.abs(pointVel.z) > maxSurfaceVelocity.z) {
                    solveSequentially = true;
                } else {
                    break;
                }
            }
        }
        velocityOut.copyFrom(pointVel);
    }
    _simplexSolverExamineActivePlanes(info, maxSurfaceVelocity, velocityIn, velocityOut) {
        // eslint-disable-next-line no-constant-condition
        while(true){
            switch(info.numSupportPlanes){
                case 1:
                    {
                        const sci = info.supportPlanes[0].constraint;
                        this._simplexSolverSolve1d(info, sci, velocityIn, velocityOut);
                        return;
                    }
                case 2:
                    {
                        const velocity = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Zero();
                        this._simplexSolverSolve1d(info, info.supportPlanes[1].constraint, velocityIn, velocity);
                        const plane0Used = this._simplexSolverSolveTest1d(info.supportPlanes[0].constraint, velocity);
                        if (!plane0Used) {
                            // Only need plane 1, so remove plane 0
                            info.supportPlanes[0].copyFrom(info.supportPlanes[1]);
                            info.numSupportPlanes = 1;
                            velocityOut.copyFrom(velocity);
                        } else {
                            this._simplexSolverSolve2d(info, maxSurfaceVelocity, info.supportPlanes[0].constraint, info.supportPlanes[1].constraint, velocityIn, velocityOut);
                        }
                        return;
                    }
                case 3:
                    {
                        // Try to drop both planes
                        {
                            const velocity = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Zero();
                            this._simplexSolverSolve1d(info, info.supportPlanes[2].constraint, velocityIn, velocityOut);
                            const plane0Used = this._simplexSolverSolveTest1d(info.supportPlanes[0].constraint, velocity);
                            if (!plane0Used) {
                                const plane1Used = this._simplexSolverSolveTest1d(info.supportPlanes[1].constraint, velocity);
                                if (!plane1Used) {
                                    velocityOut.copyFrom(velocity);
                                    info.supportPlanes[0].copyFrom(info.supportPlanes[2]);
                                    info.numSupportPlanes = 1;
                                    continue;
                                }
                            }
                        }
                        //  Try to drop plane 0 or 1
                        {
                            let droppedAPlane = false;
                            for(let testPlane = 0; testPlane < 2; testPlane++){
                                const velocity = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Zero();
                                this._simplexSolverSolve2d(info, maxSurfaceVelocity, info.supportPlanes[testPlane].constraint, info.supportPlanes[2].constraint, velocityIn, velocityOut);
                                const planeUsed = this._simplexSolverSolveTest1d(info.supportPlanes[1 - testPlane].constraint, velocity);
                                if (!planeUsed) {
                                    info.supportPlanes[0].copyFrom(info.supportPlanes[testPlane]);
                                    info.supportPlanes[1].copyFrom(info.supportPlanes[2]);
                                    info.numSupportPlanes--;
                                    droppedAPlane = true;
                                    break;
                                }
                            }
                            if (droppedAPlane) {
                                continue;
                            }
                        }
                        // Otherwise, try and solve all three planes:
                        this._simplexSolverSolve3d(info, maxSurfaceVelocity, info.supportPlanes[0].constraint, info.supportPlanes[1].constraint, info.supportPlanes[2].constraint, true, velocityIn, velocityOut);
                        return;
                    }
                case 4:
                    {
                        this._simplexSolverSortInfo(info);
                        let droppedAPlane = false;
                        for(let i = 0; i < 3; i++){
                            const velocity = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Zero();
                            this._simplexSolverSolve3d(info, maxSurfaceVelocity, info.supportPlanes[(i + 1) % 3].constraint, info.supportPlanes[(i + 2) % 3].constraint, info.supportPlanes[3].constraint, false, velocityIn, velocity);
                            const planeUsed = this._simplexSolverSolveTest1d(info.supportPlanes[i].constraint, velocity);
                            if (!planeUsed) {
                                info.supportPlanes[i].copyFrom(info.supportPlanes[2]);
                                info.supportPlanes[2].copyFrom(info.supportPlanes[3]);
                                info.numSupportPlanes = 3;
                                droppedAPlane = true;
                                break;
                            }
                        }
                        if (droppedAPlane) {
                            continue;
                        }
                        // Nothing can be dropped so we've failed to solve
                        // Now we try all 3d combinations
                        {
                            const velocity = velocityIn.clone();
                            const sci0 = info.supportPlanes[0].constraint;
                            const sci1 = info.supportPlanes[1].constraint;
                            const sci2 = info.supportPlanes[2].constraint;
                            const sci3 = info.supportPlanes[3].constraint;
                            const oldNum = info.numSupportPlanes;
                            if (oldNum == info.numSupportPlanes) {
                                this._simplexSolverSolve3d(info, maxSurfaceVelocity, sci0, sci1, sci2, false, velocity, velocity);
                            // eslint-disable-next-line no-dupe-else-if
                            } else if (oldNum == info.numSupportPlanes) {
                                this._simplexSolverSolve3d(info, maxSurfaceVelocity, sci0, sci1, sci3, false, velocity, velocity);
                            // eslint-disable-next-line no-dupe-else-if
                            } else if (oldNum == info.numSupportPlanes) {
                                this._simplexSolverSolve3d(info, maxSurfaceVelocity, sci0, sci2, sci3, false, velocity, velocity);
                            // eslint-disable-next-line no-dupe-else-if
                            } else if (oldNum == info.numSupportPlanes) {
                                this._simplexSolverSolve3d(info, maxSurfaceVelocity, sci1, sci2, sci3, false, velocity, velocity);
                            }
                            velocityOut.copyFrom(velocity);
                        }
                        //  Search a plane to drop
                        {
                            //  Search the highest penalty value
                            let maxStatus = 0 /* SurfaceConstraintInteractionStatus.OK */ ;
                            for(let i = 0; i < 4; i++){
                                maxStatus = Math.max(maxStatus, info.supportPlanes[i].interaction.status);
                            }
                            // Remove the place with the lowest priority and the highest penalty
                            let i = 0;
                            for(; i < 4; i++){
                                if (maxStatus == info.supportPlanes[i].interaction.status) {
                                    info.supportPlanes[i].copyFrom(info.supportPlanes[3]);
                                    break;
                                }
                                info.numSupportPlanes--;
                            }
                        }
                        //  Clear penalty flags for the other planes
                        for(let i = 0; i < 3; i++){
                            info.supportPlanes[i].interaction.status = 0 /* SurfaceConstraintInteractionStatus.OK */ ;
                        }
                        continue;
                    }
            }
        }
    }
    _simplexSolverSolve(constraints, velocity, deltaTime, minDeltaTime, up, maxSurfaceVelocity) {
        const eps = 1e-6;
        const output = new SimplexSolverOutput();
        output.position = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        output.velocity = velocity.clone();
        output.planeInteractions = [];
        let remainingTime = deltaTime;
        for(let i = 0; i < constraints.length; i++){
            output.planeInteractions.push({
                touched: false,
                stopped: false,
                surfaceTime: 0,
                penaltyDistance: 0,
                status: 0 /* SurfaceConstraintInteractionStatus.OK */ 
            });
        }
        const info = new SimplexSolverInfo();
        info.inputConstraints = constraints;
        info.outputInteractions = output.planeInteractions;
        info.supportPlanes[0] = new SimplexSolverActivePlanes();
        info.supportPlanes[1] = new SimplexSolverActivePlanes();
        info.supportPlanes[2] = new SimplexSolverActivePlanes();
        info.supportPlanes[3] = new SimplexSolverActivePlanes();
        while(remainingTime > 0){
            // search for a plane which collides our current direction
            let hitIndex = -1;
            let minCollisionTime = remainingTime;
            for(let i = 0; i < constraints.length; i++){
                //  Do not search existing active planes
                if (info.numSupportPlanes >= 1 && info.supportPlanes[0].index == i) {
                    continue;
                }
                if (info.numSupportPlanes >= 2 && info.supportPlanes[1].index == i) {
                    continue;
                }
                if (info.numSupportPlanes >= 3 && info.supportPlanes[2].index == i) {
                    continue;
                }
                if (output.planeInteractions[i].status != 0 /* SurfaceConstraintInteractionStatus.OK */ ) {
                    continue;
                }
                // Try to find the plane with the shortest time to move
                const sci = constraints[i];
                const relativeVel = this._tmpVecs[25];
                output.velocity.subtractToRef(sci.velocity, relativeVel);
                const relativeProjectedVel = -relativeVel.dot(sci.planeNormal);
                // if projected velocity is pointing away skip it
                if (relativeProjectedVel <= 0) {
                    continue;
                }
                //  Calculate the time of impact
                const relativePos = this._tmpVecs[26];
                sci.velocity.scaleToRef(info.currentTime, this._tmpVecs[27]);
                output.position.subtractToRef(this._tmpVecs[27], relativePos);
                let projectedPos = sci.planeNormal.dot(relativePos);
                // treat penetrations
                const penaltyDist = output.planeInteractions[i].penaltyDistance;
                if (penaltyDist < eps) {
                    projectedPos = 0;
                }
                projectedPos += penaltyDist;
                // check for new hit
                if (projectedPos < minCollisionTime * relativeProjectedVel) {
                    minCollisionTime = projectedPos / relativeProjectedVel;
                    hitIndex = i;
                }
            }
            //  integrate: Walk to our hitPosition we must walk more than 10 microseconds into the future to consider it valid.
            const minAcceptableCollisionTime = 1e-4;
            if (minCollisionTime > minAcceptableCollisionTime) {
                info.currentTime += minCollisionTime;
                remainingTime -= minCollisionTime;
                output.position.addInPlace(output.velocity.scale(minCollisionTime));
                for(let i = 0; i < info.numSupportPlanes; i++){
                    info.supportPlanes[i].interaction.surfaceTime += minCollisionTime;
                    info.supportPlanes[i].interaction.touched = true;
                }
                output.deltaTime = info.currentTime;
                if (info.currentTime > minDeltaTime) {
                    return output;
                }
            }
            //  If we have no hit than we are done
            if (hitIndex < 0) {
                output.deltaTime = deltaTime;
                break;
            }
            //  Add our hit to our current list of active planes
            const supportPlane = info.supportPlanes[info.numSupportPlanes++];
            supportPlane.constraint = constraints[hitIndex];
            supportPlane.interaction = output.planeInteractions[hitIndex];
            supportPlane.interaction.penaltyDistance = (supportPlane.interaction.penaltyDistance + eps) * 2.0;
            supportPlane.index = hitIndex;
            // Move our character along the current set of active planes
            this._simplexSolverExamineActivePlanes(info, maxSurfaceVelocity, velocity, output.velocity);
        }
        return output;
    }
    /**
     * Compute a CharacterSurfaceInfo from current state and a direction
     * @param deltaTime frame delta time in seconds. When using scene.deltaTime divide by 1000.0
     * @param direction direction to check, usually gravity direction
     * @returns a CharacterSurfaceInfo object
     */ checkSupport(deltaTime, direction) {
        const surfaceInfo = {
            isSurfaceDynamic: false,
            supportedState: 0 /* CharacterSupportedState.UNSUPPORTED */ ,
            averageSurfaceNormal: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Zero(),
            averageSurfaceVelocity: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Zero(),
            averageAngularSurfaceVelocity: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Zero()
        };
        this.checkSupportToRef(deltaTime, direction, surfaceInfo);
        return surfaceInfo;
    }
    /**
     * Compute a CharacterSurfaceInfo from current state and a direction
     * @param deltaTime frame delta time in seconds. When using scene.deltaTime divide by 1000.0
     * @param direction direction to check, usually gravity direction
     * @param surfaceInfo output for surface info
     */ checkSupportToRef(deltaTime, direction, surfaceInfo) {
        const eps = 1e-4;
        this._validateManifold();
        const constraints = this._createConstraintsFromManifold(deltaTime, 0.0);
        const storedVelocities = [];
        // Remove velocities and friction to make this a query of the static geometry
        for(let i = 0; i < constraints.length; i++){
            storedVelocities.push(constraints[i].velocity.clone());
            constraints[i].velocity.setAll(0);
        }
        const maxSurfaceVelocity = this._tmpVecs[3];
        maxSurfaceVelocity.set(this.maxCharacterSpeedForSolver, this.maxCharacterSpeedForSolver, this.maxCharacterSpeedForSolver);
        const output = this._simplexSolverSolve(constraints, direction, deltaTime, deltaTime, this.up, maxSurfaceVelocity);
        surfaceInfo.averageSurfaceVelocity.setAll(0);
        surfaceInfo.averageAngularSurfaceVelocity.setAll(0);
        surfaceInfo.averageSurfaceNormal.setAll(0);
        surfaceInfo.isSurfaceDynamic = false;
        // If the constraints did not affect the character movement then it is unsupported and we can finish
        if (output.velocity.equalsWithEpsilon(direction, eps)) {
            surfaceInfo.supportedState = 0 /* CharacterSupportedState.UNSUPPORTED */ ;
            return;
        }
        // Check how was the input velocity modified to determine if the character is supported or sliding
        if (output.velocity.lengthSquared() < eps) {
            surfaceInfo.supportedState = 2 /* CharacterSupportedState.SUPPORTED */ ;
        } else {
            output.velocity.normalize();
            const angleSin = output.velocity.dot(direction);
            const cosSqr = 1 - angleSin * angleSin;
            if (cosSqr < this.maxSlopeCosine * this.maxSlopeCosine) {
                surfaceInfo.supportedState = 1 /* CharacterSupportedState.SLIDING */ ;
            } else {
                surfaceInfo.supportedState = 2 /* CharacterSupportedState.SUPPORTED */ ;
            }
        }
        // Add all supporting constraints to the ground information
        let numTouching = 0;
        for(let i = -0; i < constraints.length; i++){
            if (output.planeInteractions[i].touched && constraints[i].planeNormal.dot(direction) < -0.08) {
                surfaceInfo.averageSurfaceNormal.addInPlace(constraints[i].planeNormal);
                surfaceInfo.averageSurfaceVelocity.addInPlace(storedVelocities[i]);
                surfaceInfo.averageAngularSurfaceVelocity.addInPlace(constraints[i].angularVelocity);
                numTouching++;
            }
        }
        if (numTouching > 0) {
            surfaceInfo.averageSurfaceNormal.normalize();
            surfaceInfo.averageSurfaceVelocity.scaleInPlace(1 / numTouching);
            surfaceInfo.averageAngularSurfaceVelocity.scaleInPlace(1 / numTouching);
        }
        // isSurfaceDynamic update
        if (surfaceInfo.supportedState == 2 /* CharacterSupportedState.SUPPORTED */ ) {
            for(let i = 0; i < this._manifold.length; i++){
                const manifold = this._manifold[i];
                const bodyB = manifold.bodyB;
                if (this._manifold[i].normal.dot(direction) < -0.08 && bodyB.body.getMotionType(0) == 2 /* PhysicsMotionType.DYNAMIC */ ) {
                    surfaceInfo.isSurfaceDynamic = true;
                    break;
                }
            }
        }
    }
    _castWithCollectors(startPos, endPos, castCollector /*HP_CollectorId*/ , startCollector /*HP_CollectorId*/ ) {
        const hk = this._scene.getPhysicsEngine().getPhysicsPlugin();
        const hknp = hk._hknp;
        const startNative = [
            startPos.x,
            startPos.y,
            startPos.z
        ];
        const orientation = [
            this._orientation.x,
            this._orientation.y,
            this._orientation.z,
            this._orientation.w
        ];
        if (startCollector != null) {
            const query /*: ShapeProximityInput*/  = [
                this._shape._pluginData,
                startNative,
                orientation,
                this.keepDistance + this.keepContactTolerance,
                false,
                [
                    BigInt(0)
                ]
            ];
            hknp.HP_World_ShapeProximityWithCollector(hk.world, startCollector, query);
        }
        {
            const query /*: ShapeCastInput*/  = [
                this._shape._pluginData,
                orientation,
                startNative,
                [
                    endPos.x,
                    endPos.y,
                    endPos.z
                ],
                false,
                [
                    BigInt(0)
                ]
            ];
            hknp.HP_World_ShapeCastWithCollector(hk.world, castCollector, query);
        }
    }
    _resolveContacts(deltaTime, gravity) {
        const eps = 1e-12;
        //<todo object interactions out
        for(let i = 0; i < this._manifold.length; i++){
            const contact = this._manifold[i];
            const bodyB = this._manifold[i].bodyB;
            //<todo test if bodyB is another character with a proxy body
            // Skip fixed or keyframed bodies as we won't apply impulses to them
            if (bodyB.body.getMotionType(bodyB.index) != 2 /* PhysicsMotionType.DYNAMIC */ ) {
                continue;
            }
            // Calculate and apply impulse on contacted body
            {
                //<todo input/output for callbacks
                let inputObjectMassInv = 0;
                let inputObjectImpulse = 0;
                let outputObjectImpulse = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Zero();
                const outputImpulsePosition = contact.position;
                // Calculate relative normal velocity of the contact point in the contacted body
                const pointRelVel = this._tmpVecs[19];
                this._getPointVelocityToRef(bodyB, contact.position, pointRelVel);
                pointRelVel.subtractInPlace(this._velocity);
                const inputProjectedVelocity = pointRelVel.dot(contact.normal);
                const dampFactor = 0.9;
                // Change velocity
                let deltaVelocity = -inputProjectedVelocity * dampFactor;
                // Apply an extra impulse if the collision is actually penetrating
                if (contact.distance < 0) {
                    const recoveryTau = 0.4;
                    deltaVelocity += contact.distance * recoveryTau / deltaTime;
                }
                // Apply impulse if required to keep bodies apart
                if (deltaVelocity < 0) {
                    //  Calculate the impulse magnitude
                    const invInertia = this._getInverseInertiaWorld(bodyB);
                    const comWorld = this._tmpVecs[15];
                    this._getComWorldToRef(bodyB, comWorld);
                    const r = this._tmpVecs[16];
                    contact.position.subtractToRef(comWorld, r);
                    const jacAng = this._tmpVecs[17];
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].CrossToRef(r, contact.normal, jacAng);
                    const rc = this._tmpVecs[18];
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].TransformNormalToRef(jacAng, invInertia, rc);
                    inputObjectMassInv = rc.dot(jacAng) + this._getInvMass(bodyB);
                    inputObjectImpulse = deltaVelocity / inputObjectMassInv;
                    // Clamp impulse magnitude if required and apply it to the normal direction
                    const maxPushImpulse = -this.characterStrength * deltaTime;
                    if (inputObjectImpulse < maxPushImpulse) {
                        inputObjectImpulse = maxPushImpulse;
                    }
                    outputObjectImpulse = contact.normal.scale(inputObjectImpulse);
                } else {
                    inputObjectImpulse = 0;
                    inputObjectMassInv = this._getInvMass(bodyB);
                }
                // Add gravity
                {
                    // Calculate effect of gravity on the velocity of the character in the contact normal direction
                    let relVelN = contact.normal.dot(gravity.scale(deltaTime));
                    // If it is a separating contact subtract the separation velocity
                    if (inputProjectedVelocity < 0) {
                        relVelN -= inputProjectedVelocity;
                    }
                    // If the resulting velocity is negative an impulse is applied to stop the character from falling into
                    // the contacted body
                    if (relVelN < -eps) {
                        outputObjectImpulse.addInPlace(contact.normal.scale(this.characterMass * relVelN));
                    }
                }
                //<todo Fire callback to allow user to change impulse + use the info / play sounds
                bodyB.body.applyImpulse(outputObjectImpulse, outputImpulsePosition, bodyB.index);
            }
        }
    }
    _getInverseInertiaWorld(body) {
        const mp = body.body.getMassProperties(body.index);
        if (!mp.inertia || !mp.inertiaOrientation) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"].IdentityReadOnly;
        }
        const invOrientation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"].FromQuaternionToRef(mp.inertiaOrientation, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[0]).invert();
        const it = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[1];
        const ir = invOrientation.getRowToRef(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Vector4[0]);
        it.setRowFromFloats(0, mp.inertia.x * ir.x, mp.inertia.x * ir.y, mp.inertia.x * ir.z, 0);
        invOrientation.getRowToRef(1, ir);
        it.setRowFromFloats(0, mp.inertia.y * ir.x, mp.inertia.y * ir.y, mp.inertia.y * ir.z, 0);
        invOrientation.getRowToRef(2, ir);
        it.setRowFromFloats(0, mp.inertia.z * ir.x, mp.inertia.z * ir.y, mp.inertia.z * ir.z, 0);
        invOrientation.multiplyToRef(it, this._tmpMatrix);
        return this._tmpMatrix;
    }
    _getComWorldToRef(body, result) {
        const mp = body.body.getMassProperties(body.index);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinatesToRef(mp.centerOfMass, body.body.transformNode.getWorldMatrix(), result);
    }
    _getInvMass(body) {
        return 1 / body.body.getMassProperties(body.index).mass;
    }
    /**
     * Update internal state. Must be called once per frame
     * @param deltaTime frame delta time in seconds. When using scene.deltaTime divide by 1000.0
     * @param surfaceInfo surface information returned by checkSupport
     * @param gravity gravity applied to the character. Can be different that world gravity
     */ integrate(deltaTime, surfaceInfo, gravity) {
        const hk = this._scene.getPhysicsEngine().getPhysicsPlugin();
        const invDeltaTime = 1 / deltaTime;
        let remainingTime = deltaTime;
        let newVelocity = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        // If the difference between the cast displacement and the simplex solver output position is less than this
        // value (per component), do not do a second cast to check if it's possible to reach the output position.
        const displacementEps = 1e-4;
        const epsSqrd = 1e-8;
        // Choose the first cast direction.  If velocity hasn't changed from the previous integrate, guess that the
        // displacement will be the same as last integrate, scaled by relative step length.  Otherwise, guess based
        // on current velocity.
        {
            const tolerance = displacementEps * invDeltaTime;
            if (this._velocity.equalsWithEpsilon(this._lastVelocity, tolerance)) {
                this._lastDisplacement.scaleInPlace(remainingTime * this._lastInvDeltaTime);
            } else {
                const displacementVelocity = this._velocity;
                if (surfaceInfo.supportedState == 2 /* CharacterSupportedState.SUPPORTED */ ) {
                    const relativeVelocity = this._tmpVecs[28];
                    this._velocity.subtractToRef(surfaceInfo.averageSurfaceVelocity, relativeVelocity);
                    const normalDotVelocity = surfaceInfo.averageSurfaceNormal.dot(relativeVelocity);
                    if (normalDotVelocity < 0) {
                        relativeVelocity.subtractInPlace(surfaceInfo.averageSurfaceNormal.scale(normalDotVelocity));
                        displacementVelocity.copyFrom(relativeVelocity);
                        displacementVelocity.addInPlace(surfaceInfo.averageSurfaceVelocity);
                    }
                }
                this._lastDisplacement.copyFrom(displacementVelocity);
                this._lastDisplacement.scaleInPlace(remainingTime);
            }
            this._lastVelocity.copyFrom(this._velocity);
            this._lastInvDeltaTime = invDeltaTime;
        }
        // Make sure that contact with bodies that have been removed since the call to checkSupport() are removed from the
        // manifold
        this._validateManifold();
        for(let iter = 0; iter < this.maxCastIterations && remainingTime > 1e-5; iter++){
            this._castWithCollectors(this._position, this._position.add(this._lastDisplacement), this._castCollector, this._startCollector);
            const updateResult = this._updateManifold(this._startCollector, this._castCollector, this._lastDisplacement);
            // Create surface constraints from the manifold contacts.
            const constraints = this._createConstraintsFromManifold(deltaTime, deltaTime - remainingTime);
            const maxSurfaceVelocity = this._tmpVecs[3];
            maxSurfaceVelocity.set(this.maxCharacterSpeedForSolver, this.maxCharacterSpeedForSolver, this.maxCharacterSpeedForSolver);
            const minDeltaTime = this._velocity.lengthSquared() == 0 ? 0.0 : 0.5 * this.keepDistance / this._velocity.length();
            const solveResults = this._simplexSolverSolve(constraints, this._velocity, remainingTime, minDeltaTime, this.up, maxSurfaceVelocity);
            const newDisplacement = solveResults.position;
            const solverDeltaTime = solveResults.deltaTime;
            newVelocity = solveResults.velocity;
            this._resolveContacts(deltaTime, gravity);
            let newContactIndex = -1;
            // todo if (updateResult == hit multiple bodies) ... cast again
            // If castCollector had hits on different bodies (so we're not sure if some non-closest body could be in our way) OR
            // the simplex has given an output direction different from the cast guess
            // we re-cast to check we can move there. There is no need to get the start points again.
            if (updateResult != 0 || newDisplacement.lengthSquared() > epsSqrd && !this._lastDisplacement.equalsWithEpsilon(newDisplacement, displacementEps)) {
                this._castWithCollectors(this._position, this._position.add(newDisplacement), this._castCollector, this._startCollector);
                const hknp = hk._hknp;
                const numCastHits = hknp.HP_QueryCollector_GetNumHits(this._castCollector)[1];
                // Find the first contact that isn't already in the manifold
                if (numCastHits > 0) {
                    //<todo sortHits()
                    for(let i = 0; i < numCastHits; i++){
                        // eslint-disable-next-line @typescript-eslint/no-unused-vars
                        const [fraction, _hitLocal, hitWorld] = hknp.HP_QueryCollector_GetShapeCastResult(this._castCollector, i)[1];
                        const newContact = ContactFromCast(hk, hitWorld, newDisplacement, fraction, this.keepDistance);
                        if (this._findContact(newContact, this._manifold, 0.1) == -1) {
                            //<todo fireContactAdded
                            newContactIndex = this._manifold.length;
                            this._manifold.push(newContact);
                            break;
                        }
                    }
                }
            }
            if (newContactIndex >= 0) {
                const newContact = this._manifold[newContactIndex];
                const displacementLengthInv = 1.0 / newDisplacement.length();
                const angleBetweenMovementAndSurface = newDisplacement.dot(newContact.normal) * displacementLengthInv;
                const keepDistanceAlongMovement = this.keepDistance / -angleBetweenMovementAndSurface;
                const distance = newContact.fraction;
                let fraction = distance - keepDistanceAlongMovement * displacementLengthInv;
                fraction = Math.min(Math.max(fraction, 0.0), 1.0);
                const displacement = newDisplacement.scale(fraction);
                this._position.addInPlace(displacement);
                remainingTime -= solverDeltaTime * fraction;
            } else {
                this._position.addInPlace(newDisplacement);
                remainingTime -= solverDeltaTime;
            }
            this._lastDisplacement.copyFrom(newDisplacement);
        }
        this._velocity.copyFrom(newVelocity);
    }
    /**
     * Helper function to calculate velocity based on surface informations and current velocity state and target
     * @param deltaTime frame delta time in seconds. When using scene.deltaTime divide by 1000.0
     * @param forwardWorld character forward in world coordinates
     * @param surfaceNormal surface normal direction
     * @param currentVelocity current velocity
     * @param surfaceVelocity velocity induced by the surface
     * @param desiredVelocity desired character velocity
     * @param upWorld up vector in world space
     * @param result resulting velocity vector
     * @returns boolean true if result has been computed
     */ calculateMovementToRef(deltaTime, forwardWorld, surfaceNormal, currentVelocity, surfaceVelocity, desiredVelocity, upWorld, result) {
        const eps = 1e-5;
        let binorm = forwardWorld.cross(upWorld);
        if (binorm.lengthSquared() < eps) {
            return false;
        }
        binorm.normalize();
        const tangent = binorm.cross(surfaceNormal);
        tangent.normalize();
        binorm = tangent.cross(surfaceNormal);
        binorm.normalize();
        const surfaceFrame = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"].FromValues(tangent.x, tangent.y, tangent.z, 0, binorm.x, binorm.y, binorm.z, 0, surfaceNormal.x, surfaceNormal.y, surfaceNormal.z, 0, 0, 0, 0, 1);
        const invSurfaceFrame = surfaceFrame.clone().invert();
        currentVelocity.subtractToRef(surfaceVelocity, this._tmpVecs[29]);
        const relative = this._tmpVecs[30];
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].TransformNormalToRef(this._tmpVecs[29], invSurfaceFrame, relative);
        const sideVec = upWorld.cross(forwardWorld);
        const fwd = desiredVelocity.dot(forwardWorld);
        const side = desiredVelocity.dot(sideVec);
        const len = desiredVelocity.length();
        const desiredVelocitySF = this._tmpVecs[4];
        desiredVelocitySF.set(-fwd, side, 0);
        desiredVelocitySF.normalize();
        desiredVelocitySF.scaleInPlace(len);
        const diff = this._tmpVecs[5];
        desiredVelocitySF.subtractToRef(relative, diff);
        // Clamp it by maxAcceleration and limit it by gain.
        {
            const lenSq = diff.lengthSquared();
            const maxVelocityDelta = this.maxAcceleration * deltaTime;
            let tmp;
            if (lenSq * this.acceleration * this.acceleration > maxVelocityDelta * maxVelocityDelta) {
                tmp = maxVelocityDelta / Math.sqrt(lenSq);
            } else {
                tmp = this.acceleration;
            }
            diff.scaleInPlace(tmp);
        }
        relative.addInPlace(diff);
        // Transform back to world space and apply
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].TransformNormalToRef(relative, surfaceFrame, result);
        // Add back in the surface velocity
        result.addInPlace(surfaceVelocity);
        return true;
    }
    /**
     * Helper function to calculate velocity based on surface informations and current velocity state and target
     * @param deltaTime frame delta time in seconds. When using scene.deltaTime divide by 1000.0
     * @param forwardWorld character forward in world coordinates
     * @param surfaceNormal surface normal direction
     * @param currentVelocity current velocity
     * @param surfaceVelocity velocity induced by the surface
     * @param desiredVelocity desired character velocity
     * @param upWorld up vector in world space
     * @returns a new velocity vector
     */ calculateMovement(deltaTime, forwardWorld, surfaceNormal, currentVelocity, surfaceVelocity, desiredVelocity, upWorld) {
        const result = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](0, 0, 0);
        this.calculateMovementToRef(deltaTime, forwardWorld, surfaceNormal, currentVelocity, surfaceVelocity, desiredVelocity, upWorld, result);
        return result;
    }
} //# sourceMappingURL=characterController.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/v2/Plugins/havokPlugin.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable @typescript-eslint/no-unsafe-return */ /* eslint-disable @typescript-eslint/naming-convention */ __turbopack_context__.s([
    "HavokPlugin",
    ()=>HavokPlugin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$IPhysicsEnginePlugin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/v2/IPhysicsEnginePlugin.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$physicsRaycastResult$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/physicsRaycastResult.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/logger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$physicsShape$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/v2/physicsShape.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$boundingBox$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Culling/boundingBox.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/mesh.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$instancedMesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/instancedMesh.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Buffers/buffer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$arrayTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/arrayTools.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/observable.js [app-ssr] (ecmascript)");
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
class MeshAccumulator {
    /**
     * Constructor of the mesh accumulator
     * @param mesh - The mesh used to compute the world matrix.
     * @param collectIndices - use mesh indices
     * @param scene - The scene used to determine the right handed system.
     *
     * Merge mesh and its children so whole hierarchy can be used as a mesh shape or convex hull
     */ constructor(mesh, collectIndices, scene){
        this._vertices = []; /// Vertices in body space
        this._indices = [];
        this._isRightHanded = scene.useRightHandedSystem;
        this._collectIndices = collectIndices;
    }
    /**
     * Adds a mesh to the physics engine.
     * @param mesh The mesh to add.
     * @param includeChildren Whether to include the children of the mesh.
     *
     * This method adds a mesh to the physics engine by computing the world matrix,
     * multiplying it with the body from world matrix, and then transforming the
     * coordinates of the mesh's vertices. It also adds the indices of the mesh
     * to the physics engine. If includeChildren is true, it will also add the
     * children of the mesh to the physics engine, ignoring any children which
     * have a physics impostor. This is useful for creating a physics engine
     * that accurately reflects the mesh and its children.
     */ addNodeMeshes(mesh, includeChildren) {
        // Force absoluteScaling to be computed; we're going to use that to bake
        // the scale of any parent nodes into this shape, as physics engines
        // usually use rigid transforms, so can't handle arbitrary scale.
        mesh.computeWorldMatrix(true);
        const rootScaled = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[0];
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"].ScalingToRef(mesh.absoluteScaling.x, mesh.absoluteScaling.y, mesh.absoluteScaling.z, rootScaled);
        if (mesh instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"]) {
            this._addMesh(mesh, rootScaled);
        } else if (mesh instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$instancedMesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InstancedMesh"]) {
            this._addMesh(mesh.sourceMesh, rootScaled);
        }
        if (includeChildren) {
            const worldToRoot = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[1];
            mesh.computeWorldMatrix().invertToRef(worldToRoot);
            const worldToRootScaled = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[2];
            worldToRoot.multiplyToRef(rootScaled, worldToRootScaled);
            const children = mesh.getChildMeshes(false);
            //  Ignore any children which have a physics body.
            //  Other plugin implementations do not have this check, which appears to be
            //  a bug, as otherwise, the mesh will have a duplicate collider
            const transformNodes = children.filter((m)=>!m.physicsBody);
            for (const m of transformNodes){
                const childToWorld = m.computeWorldMatrix();
                const childToRootScaled = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[3];
                childToWorld.multiplyToRef(worldToRootScaled, childToRootScaled);
                if (m instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"]) {
                    this._addMesh(m, childToRootScaled);
                } else if (m instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$instancedMesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InstancedMesh"]) {
                    this._addMesh(m.sourceMesh, childToRootScaled);
                }
            }
        }
    }
    _addMesh(mesh, meshToRoot) {
        const vertexData = mesh.getVerticesData(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexBuffer"].PositionKind) || [];
        const numVerts = vertexData.length / 3;
        const indexOffset = this._vertices.length;
        for(let v = 0; v < numVerts; v++){
            const pos = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](vertexData[v * 3 + 0], vertexData[v * 3 + 1], vertexData[v * 3 + 2]);
            this._vertices.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinates(pos, meshToRoot));
        }
        if (this._collectIndices) {
            const meshIndices = mesh.getIndices();
            if (meshIndices) {
                for(let i = 0; i < meshIndices.length; i += 3){
                    // Havok wants the correct triangle winding to enable the interior triangle optimization
                    if (this._isRightHanded) {
                        this._indices.push(meshIndices[i + 0] + indexOffset);
                        this._indices.push(meshIndices[i + 1] + indexOffset);
                        this._indices.push(meshIndices[i + 2] + indexOffset);
                    } else {
                        this._indices.push(meshIndices[i + 2] + indexOffset);
                        this._indices.push(meshIndices[i + 1] + indexOffset);
                        this._indices.push(meshIndices[i + 0] + indexOffset);
                    }
                }
            }
        }
    }
    /**
     * Allocate and populate the vertex positions inside the physics plugin.
     *
     * @param plugin - The plugin to allocate the memory in.
     * @returns An array of floats, whose backing memory is inside the plugin. The array contains the
     * positions of the mesh vertices, where a position is defined by three floats. You must call
     * freeBuffer() on the returned array once you have finished with it, in order to free the
     * memory inside the plugin..
     */ getVertices(plugin) {
        const nFloats = this._vertices.length * 3;
        const bytesPerFloat = 4;
        const nBytes = nFloats * bytesPerFloat;
        const bufferBegin = plugin._malloc(nBytes);
        const ret = new Float32Array(plugin.HEAPU8.buffer, bufferBegin, nFloats);
        for(let i = 0; i < this._vertices.length; i++){
            ret[i * 3 + 0] = this._vertices[i].x;
            ret[i * 3 + 1] = this._vertices[i].y;
            ret[i * 3 + 2] = this._vertices[i].z;
        }
        return {
            offset: bufferBegin,
            numObjects: nFloats
        };
    }
    freeBuffer(plugin, arr) {
        plugin._free(arr.offset);
    }
    /**
     * Allocate and populate the triangle indices inside the physics plugin
     *
     * @param plugin - The plugin to allocate the memory in.
     * @returns A new Int32Array, whose backing memory is inside the plugin. The array contains the indices
     * of the triangle positions, where a single triangle is defined by three indices. You must call
     * freeBuffer() on this array once you have finished with it, to free the memory inside the plugin..
     */ getTriangles(plugin) {
        const bytesPerInt = 4;
        const nBytes = this._indices.length * bytesPerInt;
        const bufferBegin = plugin._malloc(nBytes);
        const ret = new Int32Array(plugin.HEAPU8.buffer, bufferBegin, this._indices.length);
        for(let i = 0; i < this._indices.length; i++){
            ret[i] = this._indices[i];
        }
        return {
            offset: bufferBegin,
            numObjects: this._indices.length
        };
    }
}
class BodyPluginData {
    constructor(bodyId){
        this.hpBodyId = bodyId;
        this.userMassProps = {
            centerOfMass: undefined,
            mass: undefined,
            inertia: undefined,
            inertiaOrientation: undefined
        };
    }
}
/*
class ShapePath
{
    public colliderId: number;
    public pathData: number;
}
*/ class CollisionContactPoint {
    constructor(){
        this.bodyId = BigInt(0); //0,2
        //public colliderId: number = 0; //2,4
        //public shapePath: ShapePath = new ShapePath(); //4,8
        this.position = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](); //8,11
        this.normal = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](); //11,14
    //public triIdx: number = 0; //14,15
    }
}
class CollisionEvent {
    constructor(){
        this.contactOnA = new CollisionContactPoint(); //1
        this.contactOnB = new CollisionContactPoint();
        this.impulseApplied = 0;
        this.type = 0;
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention
    static readToRef(buffer, offset, eventOut) {
        const intBuf = new Int32Array(buffer, offset);
        const floatBuf = new Float32Array(buffer, offset);
        const offA = 2;
        eventOut.contactOnA.bodyId = BigInt(intBuf[offA]); //<todo Need to get the high+low words!
        eventOut.contactOnA.position.set(floatBuf[offA + 8], floatBuf[offA + 9], floatBuf[offA + 10]);
        eventOut.contactOnA.normal.set(floatBuf[offA + 11], floatBuf[offA + 12], floatBuf[offA + 13]);
        const offB = 18;
        eventOut.contactOnB.bodyId = BigInt(intBuf[offB]);
        eventOut.contactOnB.position.set(floatBuf[offB + 8], floatBuf[offB + 9], floatBuf[offB + 10]);
        eventOut.contactOnB.normal.set(floatBuf[offB + 11], floatBuf[offB + 12], floatBuf[offB + 13]);
        eventOut.impulseApplied = floatBuf[offB + 13 + 3];
        eventOut.type = intBuf[0];
    }
}
class TriggerEvent {
    constructor(){
        this.bodyIdA = BigInt(0);
        this.bodyIdB = BigInt(0);
        this.type = 0;
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention
    static readToRef(buffer, offset, eventOut) {
        const intBuf = new Int32Array(buffer, offset);
        eventOut.type = intBuf[0];
        eventOut.bodyIdA = BigInt(intBuf[2]);
        eventOut.bodyIdB = BigInt(intBuf[6]);
    }
}
class HavokPlugin {
    constructor(_useDeltaForWorldStep = true, hpInjection = HK, parameters = {}){
        this._useDeltaForWorldStep = _useDeltaForWorldStep;
        /**
         * Reference to the WASM library
         */ this._hknp = {};
        /**
         * Name of the plugin
         */ this.name = "HavokPlugin";
        this._multiQueryCollector = undefined;
        this._fixedTimeStep = 1 / 60;
        this._maxQueryCollectorHits = 1;
        this._tmpVec3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$arrayTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BuildArray"])(3, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Zero);
        this._bodies = new Map();
        this._shapes = new Map();
        this._bodyCollisionObservable = new Map();
        // Map from constraint id to the pair of bodies, where the first is the parent and the second is the child
        this._constraintToBodyIdPair = new Map();
        this._bodyCollisionEndedObservable = new Map();
        /**
         * Observable for collision started and collision continued events
         */ this.onCollisionObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * Observable for collision ended events
         */ this.onCollisionEndedObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * Observable for trigger entered and trigger exited events
         */ this.onTriggerCollisionObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
        if (typeof hpInjection === "function") {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Error("Havok is not ready. Please make sure you await HK() before using the plugin.");
            return;
        } else {
            this._hknp = hpInjection;
        }
        if (!this.isSupported()) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Error("Havok is not available. Please make sure you included the js file.");
            return;
        }
        this.world = this._hknp.HP_World_Create()[1];
        this._queryCollector = this._hknp.HP_QueryCollector_Create(1)[1];
        this.setMaxQueryCollectorHits(parameters.maxQueryCollectorHits ?? 1);
    }
    /**
     * If this plugin is supported
     * @returns true if its supported
     */ isSupported() {
        return this._hknp !== undefined;
    }
    /**
     * Sets the gravity of the physics world.
     *
     * @param gravity - The gravity vector to set.
     *
     */ setGravity(gravity) {
        this._hknp.HP_World_SetGravity(this.world, this._bVecToV3(gravity));
    }
    /**
     * Sets the fixed time step for the physics engine.
     *
     * @param timeStep - The fixed time step to use for the physics engine.
     *
     */ setTimeStep(timeStep) {
        this._fixedTimeStep = timeStep;
    }
    /**
     * Gets the fixed time step used by the physics engine.
     *
     * @returns The fixed time step used by the physics engine.
     *
     */ getTimeStep() {
        return this._fixedTimeStep;
    }
    /**
     * Sets the maximum number of raycast hits to process.
     *
     * @param maxQueryCollectorHits - The maximum number of raycast hits to process.
     */ setMaxQueryCollectorHits(maxQueryCollectorHits) {
        if (maxQueryCollectorHits === this._maxQueryCollectorHits) {
            return;
        }
        if (this._multiQueryCollector) {
            this._hknp.HP_QueryCollector_Release(this._multiQueryCollector);
            this._multiQueryCollector = undefined;
        }
        if (maxQueryCollectorHits > 1) {
            this._multiQueryCollector = this._hknp.HP_QueryCollector_Create(maxQueryCollectorHits)[1];
        }
    }
    /**
     * Gets the maximum number of raycast hits to process.
     *
     * @returns The maximum number of raycast hits to process.
     */ getMaxQueryCollectorHits() {
        return this._maxQueryCollectorHits;
    }
    /**
     * Executes a single step of the physics engine.
     *
     * @param delta The time delta in seconds since the last step.
     * @param physicsBodies An array of physics bodies to be simulated.
     *
     * This method is useful for simulating the physics engine. It sets the physics body transformation,
     * steps the world, syncs the physics body, and notifies collisions. This allows for the physics engine
     * to accurately simulate the physics bodies in the world.
     */ executeStep(delta, physicsBodies) {
        for (const physicsBody of physicsBodies){
            if (physicsBody.disablePreStep) {
                continue;
            }
            this.setPhysicsBodyTransformation(physicsBody, physicsBody.transformNode);
        }
        const deltaTime = this._useDeltaForWorldStep ? delta : this._fixedTimeStep;
        this._hknp.HP_World_SetIdealStepTime(this.world, deltaTime);
        this._hknp.HP_World_Step(this.world, deltaTime);
        this._bodyBuffer = this._hknp.HP_World_GetBodyBuffer(this.world)[1];
        for (const physicsBody of physicsBodies){
            if (!physicsBody.disableSync) {
                this.sync(physicsBody);
            }
        }
        this._notifyCollisions();
        this._notifyTriggers();
    }
    /**
     * Returns the version of the physics engine plugin.
     *
     * @returns The version of the physics engine plugin.
     *
     * This method is useful for determining the version of the physics engine plugin that is currently running.
     */ getPluginVersion() {
        return 2;
    }
    /**
     * Set the maximum allowed linear and angular velocities
     * @param maxLinearVelocity maximum allowed linear velocity
     * @param maxAngularVelocity maximum allowed angular velocity
     */ setVelocityLimits(maxLinearVelocity, maxAngularVelocity) {
        this._hknp.HP_World_SetSpeedLimit(this.world, maxLinearVelocity, maxAngularVelocity);
    }
    /**
     * @returns maximum allowed linear velocity
     */ getMaxLinearVelocity() {
        const limits = this._hknp.HP_World_GetSpeedLimit(this.world);
        return limits[1];
    }
    /**
     * @returns maximum allowed angular velocity
     */ getMaxAngularVelocity() {
        const limits = this._hknp.HP_World_GetSpeedLimit(this.world);
        return limits[2];
    }
    /**
     * Initializes a physics body with the given position and orientation.
     *
     * @param body - The physics body to initialize.
     * @param motionType - The motion type of the body.
     * @param position - The position of the body.
     * @param orientation - The orientation of the body.
     * This code is useful for initializing a physics body with the given position and orientation.
     * It creates a plugin data for the body and adds it to the world. It then converts the position
     * and orientation to a transform and sets the body's transform to the given values.
     */ initBody(body, motionType, position, orientation) {
        body._pluginData = new BodyPluginData(this._hknp.HP_Body_Create()[1]);
        this._internalSetMotionType(body._pluginData, motionType);
        const transform = [
            this._bVecToV3(position),
            this._bQuatToV4(orientation)
        ]; //<todo temp transform?
        this._hknp.HP_Body_SetQTransform(body._pluginData.hpBodyId, transform);
        this._hknp.HP_World_AddBody(this.world, body._pluginData.hpBodyId, body.startAsleep);
        this._bodies.set(body._pluginData.hpBodyId[0], {
            body: body,
            index: 0
        });
    }
    /**
     * Removes a body from the world. To dispose of a body, it is necessary to remove it from the world first.
     *
     * @param body - The body to remove.
     */ removeBody(body) {
        if (body._pluginDataInstances && body._pluginDataInstances.length > 0) {
            for (const instance of body._pluginDataInstances){
                this._bodyCollisionObservable.delete(instance.hpBodyId[0]);
                this._hknp.HP_World_RemoveBody(this.world, instance.hpBodyId);
                this._bodies.delete(instance.hpBodyId[0]);
            }
        }
        if (body._pluginData) {
            this._bodyCollisionObservable.delete(body._pluginData.hpBodyId[0]);
            this._hknp.HP_World_RemoveBody(this.world, body._pluginData.hpBodyId);
            this._bodies.delete(body._pluginData.hpBodyId[0]);
        }
    }
    /**
     * Initializes the body instances for a given physics body and mesh.
     *
     * @param body - The physics body to initialize.
     * @param motionType - How the body will be handled by the engine
     * @param mesh - The mesh to initialize.
     *
     * This code is useful for creating a physics body from a mesh. It creates a
     * body instance for each instance of the mesh and adds it to the world. It also
     * sets the position of the body instance to the position of the mesh instance.
     * This allows for the physics engine to accurately simulate the mesh in the
     * world.
     */ initBodyInstances(body, motionType, mesh) {
        const instancesCount = mesh._thinInstanceDataStorage?.instancesCount ?? 0;
        const matrixData = mesh._thinInstanceDataStorage.matrixData;
        if (!matrixData) {
            return; // TODO: error handling
        }
        this._createOrUpdateBodyInstances(body, motionType, matrixData, 0, instancesCount, false);
        for(let index = 0; index < body._pluginDataInstances.length; index++){
            const bodyId = body._pluginDataInstances[index];
            this._bodies.set(bodyId.hpBodyId[0], {
                body: body,
                index: index
            });
        }
    }
    _createOrUpdateBodyInstances(body, motionType, matrixData, startIndex, endIndex, update) {
        const rotation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Quaternion[0];
        const rotationMatrix = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"].Identity();
        for(let i = startIndex; i < endIndex; i++){
            const position = [
                matrixData[i * 16 + 12],
                matrixData[i * 16 + 13],
                matrixData[i * 16 + 14]
            ];
            let hkbody;
            if (!update) {
                hkbody = this._hknp.HP_Body_Create()[1];
            } else {
                hkbody = body._pluginDataInstances[i].hpBodyId;
            }
            rotationMatrix.setRowFromFloats(0, matrixData[i * 16 + 0], matrixData[i * 16 + 1], matrixData[i * 16 + 2], 0);
            rotationMatrix.setRowFromFloats(1, matrixData[i * 16 + 4], matrixData[i * 16 + 5], matrixData[i * 16 + 6], 0);
            rotationMatrix.setRowFromFloats(2, matrixData[i * 16 + 8], matrixData[i * 16 + 9], matrixData[i * 16 + 10], 0);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Quaternion"].FromRotationMatrixToRef(rotationMatrix, rotation);
            const transform = [
                position,
                [
                    rotation.x,
                    rotation.y,
                    rotation.z,
                    rotation.w
                ]
            ];
            this._hknp.HP_Body_SetQTransform(hkbody, transform);
            if (!update) {
                const pluginData = new BodyPluginData(hkbody);
                if (body._pluginDataInstances.length) {
                    // If an instance already exists, copy any user-provided mass properties
                    pluginData.userMassProps = body._pluginDataInstances[0].userMassProps;
                }
                this._internalSetMotionType(pluginData, motionType);
                this._internalUpdateMassProperties(pluginData);
                body._pluginDataInstances.push(pluginData);
                this._hknp.HP_World_AddBody(this.world, hkbody, body.startAsleep);
                pluginData.worldTransformOffset = this._hknp.HP_Body_GetWorldTransformOffset(hkbody)[1];
            }
        }
    }
    /**
     * Update the internal body instances for a given physics body to match the instances in a mesh.
     * @param body the body that will be updated
     * @param mesh the mesh with reference instances
     */ updateBodyInstances(body, mesh) {
        const instancesCount = mesh._thinInstanceDataStorage?.instancesCount ?? 0;
        const matrixData = mesh._thinInstanceDataStorage.matrixData;
        if (!matrixData) {
            return; // TODO: error handling
        }
        const pluginInstancesCount = body._pluginDataInstances.length;
        const motionType = this.getMotionType(body);
        if (instancesCount > pluginInstancesCount) {
            this._createOrUpdateBodyInstances(body, motionType, matrixData, pluginInstancesCount, instancesCount, false);
            const firstBodyShape = this._hknp.HP_Body_GetShape(body._pluginDataInstances[0].hpBodyId)[1];
            // firstBodyShape[0] might be 0 in the case where thin instances data is set (with thinInstancesSetBuffer call) after body creation
            // in that case, use the shape provided at body creation.
            if (!firstBodyShape[0]) {
                firstBodyShape[0] = body.shape?._pluginData[0];
            }
            for(let i = pluginInstancesCount; i < instancesCount; i++){
                this._hknp.HP_Body_SetShape(body._pluginDataInstances[i].hpBodyId, firstBodyShape);
                this._internalUpdateMassProperties(body._pluginDataInstances[i]);
                this._bodies.set(body._pluginDataInstances[i].hpBodyId[0], {
                    body: body,
                    index: i
                });
            }
        } else if (instancesCount < pluginInstancesCount) {
            const instancesToRemove = pluginInstancesCount - instancesCount;
            for(let i = 0; i < instancesToRemove; i++){
                const hkbody = body._pluginDataInstances.pop();
                this._bodies.delete(hkbody.hpBodyId[0]);
                this._hknp.HP_World_RemoveBody(this.world, hkbody.hpBodyId);
                this._hknp.HP_Body_Release(hkbody.hpBodyId);
            }
            this._createOrUpdateBodyInstances(body, motionType, matrixData, 0, instancesCount, true);
        }
    }
    /**
     * Synchronizes the transform of a physics body with its transform node.
     * @param body - The physics body to synchronize.
     *
     * This function is useful for keeping the physics body's transform in sync with its transform node.
     * This is important for ensuring that the physics body is accurately represented in the physics engine.
     */ sync(body) {
        this.syncTransform(body, body.transformNode);
    }
    /**
     * Synchronizes the transform of a physics body with the transform of its
     * corresponding transform node.
     *
     * @param body - The physics body to synchronize.
     * @param transformNode - The destination Transform Node.
     *
     * This code is useful for synchronizing the position and orientation of a
     * physics body with the position and orientation of its corresponding
     * transform node. This is important for ensuring that the physics body and
     * the transform node are in the same position and orientation in the scene.
     * This is necessary for the physics engine to accurately simulate the
     * physical behavior of the body.
     */ syncTransform(body, transformNode) {
        if (body._pluginDataInstances.length) {
            // instances
            const m = transformNode;
            const matrixData = m._thinInstanceDataStorage.matrixData;
            if (!matrixData) {
                return; // TODO: error handling
            }
            const instancesCount = body._pluginDataInstances.length;
            for(let i = 0; i < instancesCount; i++){
                const bufOffset = body._pluginDataInstances[i].worldTransformOffset;
                const transformBuffer = new Float32Array(this._hknp.HEAPU8.buffer, this._bodyBuffer + bufOffset, 16);
                const index = i * 16;
                for(let mi = 0; mi < 15; mi++){
                    if ((mi & 3) != 3) {
                        matrixData[index + mi] = transformBuffer[mi];
                    }
                }
                matrixData[index + 15] = 1;
            }
            m.thinInstanceBufferUpdated("matrix");
        } else {
            try {
                // regular
                const bodyTransform = this._hknp.HP_Body_GetQTransform(body._pluginData.hpBodyId)[1];
                const bodyTranslation = bodyTransform[0];
                const bodyOrientation = bodyTransform[1];
                const quat = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Quaternion[0];
                quat.set(bodyOrientation[0], bodyOrientation[1], bodyOrientation[2], bodyOrientation[3]);
                const parent = transformNode.parent;
                // transform position/orientation in parent space
                if (parent && !parent.getWorldMatrix().isIdentity()) {
                    parent.computeWorldMatrix(true);
                    // Save scaling for future use
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[1].copyFrom(transformNode.scaling);
                    quat.normalize();
                    const finalTransform = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[0];
                    const finalTranslation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0];
                    finalTranslation.copyFromFloats(bodyTranslation[0], bodyTranslation[1], bodyTranslation[2]);
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"].ComposeToRef(transformNode.absoluteScaling, quat, finalTranslation, finalTransform);
                    const parentInverseTransform = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[1];
                    parent.getWorldMatrix().invertToRef(parentInverseTransform);
                    const localTransform = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[2];
                    finalTransform.multiplyToRef(parentInverseTransform, localTransform);
                    localTransform.decomposeToTransformNode(transformNode);
                    transformNode.rotationQuaternion?.normalize();
                    // Keep original scaling. Re-injecting scaling can introduce discontinuity between frames. Basically, it grows or shrinks.
                    transformNode.scaling.copyFrom(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[1]);
                } else {
                    transformNode.position.set(bodyTranslation[0], bodyTranslation[1], bodyTranslation[2]);
                    if (transformNode.rotationQuaternion) {
                        transformNode.rotationQuaternion.copyFrom(quat);
                    } else {
                        quat.toEulerAnglesToRef(transformNode.rotation);
                    }
                }
            } catch (e) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Error(`Syncing transform failed for node ${transformNode.name}: ${e.message}...`);
            }
        }
    }
    /**
     * Sets the shape of a physics body.
     * @param body - The physics body to set the shape for.
     * @param shape - The physics shape to set.
     *
     * This function is used to set the shape of a physics body. It is useful for
     * creating a physics body with a specific shape, such as a box or a sphere,
     * which can then be used to simulate physical interactions in a physics engine.
     * This function is especially useful for meshes with multiple instances, as it
     * will set the shape for each instance of the mesh.
     */ setShape(body, shape) {
        const shapeHandle = shape && shape._pluginData ? shape._pluginData : BigInt(0);
        if (!(body.transformNode instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"]) || !body.transformNode._thinInstanceDataStorage?.matrixData) {
            this._hknp.HP_Body_SetShape(body._pluginData.hpBodyId, shapeHandle);
            this._internalUpdateMassProperties(body._pluginData);
            return;
        }
        const m = body.transformNode;
        const instancesCount = m._thinInstanceDataStorage?.instancesCount ?? 0;
        for(let i = 0; i < instancesCount; i++){
            this._hknp.HP_Body_SetShape(body._pluginDataInstances[i].hpBodyId, shapeHandle);
            this._internalUpdateMassProperties(body._pluginDataInstances[i]);
        }
    }
    /**
     * Returns a reference to the first instance of the plugin data for a physics body.
     * @param body
     * @param instanceIndex
     * @returns a reference to the first instance
     */ _getPluginReference(body, instanceIndex) {
        return body._pluginDataInstances?.length ? body._pluginDataInstances[instanceIndex ?? 0] : body._pluginData;
    }
    /**
     * Gets the shape of a physics body. This will create a new shape object
     *
     * @param body - The physics body.
     * @returns The shape of the physics body.
     *
     */ getShape(body) {
        const pluginRef = this._getPluginReference(body);
        const shapePluginData = this._hknp.HP_Body_GetShape(pluginRef.hpBodyId)[1];
        if (shapePluginData != 0) {
            const scene = body.transformNode.getScene();
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$physicsShape$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsShape"]({
                pluginData: shapePluginData
            }, scene);
        }
        return null;
    }
    /**
     * Gets the type of a physics shape.
     * @param shape - The physics shape to get the type for.
     * @returns The type of the physics shape.
     *
     */ getShapeType(shape) {
        if (shape.type) {
            return shape.type;
        } else {
            //<todo This returns a native type!
            return this._hknp.HP_Shape_GetType(shape._pluginData);
        }
    }
    /**
     * Sets the event mask of a physics body.
     * @param body - The physics body to set the event mask for.
     * @param eventMask - The event mask to set.
     * @param instanceIndex - The index of the instance to set the event mask for
     *
     * This function is useful for setting the event mask of a physics body, which is used to determine which events the body will respond to. This is important for ensuring that the physics engine is able to accurately simulate the behavior of the body in the game world.
     */ setEventMask(body, eventMask, instanceIndex) {
        this._applyToBodyOrInstances(body, (bodyPluginData)=>{
            this._hknp.HP_Body_SetEventMask(bodyPluginData.hpBodyId, eventMask);
        }, instanceIndex);
    }
    /**
     * Retrieves the event mask of a physics body.
     *
     * @param body - The physics body to retrieve the event mask from.
     * @param instanceIndex - The index of the instance to retrieve the event mask from.
     * @returns The event mask of the physics body.
     *
     */ getEventMask(body, instanceIndex) {
        const pluginRef = this._getPluginReference(body, instanceIndex);
        return this._hknp.HP_Body_GetEventMask(pluginRef.hpBodyId)[1];
    }
    _fromMassPropertiesTuple(massPropsTuple) {
        return {
            centerOfMass: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].FromArray(massPropsTuple[0]),
            mass: massPropsTuple[1],
            inertia: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].FromArray(massPropsTuple[2]),
            inertiaOrientation: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Quaternion"].FromArray(massPropsTuple[3])
        };
    }
    _internalUpdateMassProperties(pluginData) {
        // Recompute the mass based on the shape
        const newProps = this._internalComputeMassProperties(pluginData);
        const massProps = pluginData.userMassProps;
        // Override the computed values with any the user has set
        if (massProps.centerOfMass) {
            newProps[0] = massProps.centerOfMass.asArray();
        }
        if (massProps.mass != undefined) {
            newProps[1] = massProps.mass;
        }
        if (massProps.inertia) {
            newProps[2] = massProps.inertia.asArray();
        }
        if (massProps.inertiaOrientation) {
            newProps[3] = massProps.inertiaOrientation.asArray();
        }
        this._hknp.HP_Body_SetMassProperties(pluginData.hpBodyId, newProps);
    }
    _internalSetMotionType(pluginData, motionType) {
        switch(motionType){
            case 0 /* PhysicsMotionType.STATIC */ :
                this._hknp.HP_Body_SetMotionType(pluginData.hpBodyId, this._hknp.MotionType.STATIC);
                break;
            case 1 /* PhysicsMotionType.ANIMATED */ :
                this._hknp.HP_Body_SetMotionType(pluginData.hpBodyId, this._hknp.MotionType.KINEMATIC);
                break;
            case 2 /* PhysicsMotionType.DYNAMIC */ :
                this._hknp.HP_Body_SetMotionType(pluginData.hpBodyId, this._hknp.MotionType.DYNAMIC);
                break;
        }
    }
    /**
     * sets the motion type of a physics body.
     * @param body - The physics body to set the motion type for.
     * @param motionType - The motion type to set.
     * @param instanceIndex - The index of the instance to set the motion type for. If undefined, the motion type of all the bodies will be set.
     */ setMotionType(body, motionType, instanceIndex) {
        this._applyToBodyOrInstances(body, (pluginData)=>{
            this._internalSetMotionType(pluginData, motionType);
        }, instanceIndex);
    }
    /**
     * Gets the motion type of a physics body.
     * @param body - The physics body to get the motion type from.
     * @param instanceIndex - The index of the instance to get the motion type from. If not specified, the motion type of the first instance will be returned.
     * @returns The motion type of the physics body.
     */ getMotionType(body, instanceIndex) {
        const pluginRef = this._getPluginReference(body, instanceIndex);
        const type = this._hknp.HP_Body_GetMotionType(pluginRef.hpBodyId)[1];
        switch(type){
            case this._hknp.MotionType.STATIC:
                return 0 /* PhysicsMotionType.STATIC */ ;
            case this._hknp.MotionType.KINEMATIC:
                return 1 /* PhysicsMotionType.ANIMATED */ ;
            case this._hknp.MotionType.DYNAMIC:
                return 2 /* PhysicsMotionType.DYNAMIC */ ;
        }
        throw new Error("Unknown motion type: " + type);
    }
    /**
     * sets the activation control mode of a physics body, for instance if you need the body to never sleep.
     * @param body - The physics body to set the activation control mode.
     * @param controlMode - The activation control mode.
     */ setActivationControl(body, controlMode) {
        switch(controlMode){
            case 1 /* PhysicsActivationControl.ALWAYS_ACTIVE */ :
                this._hknp.HP_Body_SetActivationControl(body._pluginData.hpBodyId, this._hknp.ActivationControl.ALWAYS_ACTIVE);
                break;
            case 2 /* PhysicsActivationControl.ALWAYS_INACTIVE */ :
                this._hknp.HP_Body_SetActivationControl(body._pluginData.hpBodyId, this._hknp.ActivationControl.ALWAYS_INACTIVE);
                break;
            case 0 /* PhysicsActivationControl.SIMULATION_CONTROLLED */ :
                this._hknp.HP_Body_SetActivationControl(body._pluginData.hpBodyId, this._hknp.ActivationControl.SIMULATION_CONTROLLED);
                break;
        }
    }
    _internalComputeMassProperties(pluginData) {
        const shapeRes = this._hknp.HP_Body_GetShape(pluginData.hpBodyId);
        if (shapeRes[0] == this._hknp.Result.RESULT_OK) {
            const shapeMass = this._hknp.HP_Shape_BuildMassProperties(shapeRes[1]);
            if (shapeMass[0] == this._hknp.Result.RESULT_OK) {
                return shapeMass[1];
            }
        }
        // Failed; return a unit inertia
        return [
            [
                0,
                0,
                0
            ],
            1,
            [
                1,
                1,
                1
            ],
            [
                0,
                0,
                0,
                1
            ]
        ];
    }
    /**
     * Computes the mass properties of a physics body, from it's shape
     *
     * @param body - The physics body to copmute the mass properties of
     * @param instanceIndex - The index of the instance to compute the mass properties of.
     * @returns The mass properties of the physics body.
     */ computeMassProperties(body, instanceIndex) {
        const pluginRef = this._getPluginReference(body, instanceIndex);
        const computed = this._internalComputeMassProperties(pluginRef);
        return this._fromMassPropertiesTuple(computed);
    }
    /**
     * Sets the mass properties of a physics body.
     *
     * @param body - The physics body to set the mass properties of.
     * @param massProps - The mass properties to set.
     * @param instanceIndex - The index of the instance to set the mass properties of. If undefined, the mass properties of all the bodies will be set.
     * This function is useful for setting the mass properties of a physics body,
     * such as its mass, inertia, and center of mass. This is important for
     * accurately simulating the physics of the body in the physics engine.
     *
     */ setMassProperties(body, massProps, instanceIndex) {
        this._applyToBodyOrInstances(body, (pluginData)=>{
            pluginData.userMassProps = massProps;
            this._internalUpdateMassProperties(pluginData);
        }, instanceIndex);
    }
    /**
     * Gets the mass properties of a physics body.
     * @param body - The physics body to get the mass properties from.
     * @param instanceIndex - The index of the instance to get the mass properties from. If not specified, the mass properties of the first instance will be returned.
     * @returns The mass properties of the physics body.
     */ getMassProperties(body, instanceIndex) {
        const pluginRef = this._getPluginReference(body, instanceIndex);
        const massPropsTuple = this._hknp.HP_Body_GetMassProperties(pluginRef.hpBodyId)[1];
        return this._fromMassPropertiesTuple(massPropsTuple);
    }
    /**
     * Sets the linear damping of the given body.
     * @param body - The body to set the linear damping for.
     * @param damping - The linear damping to set.
     * @param instanceIndex - The index of the instance to set the linear damping for. If not specified, the linear damping of the first instance will be set.
     *
     * This method is useful for controlling the linear damping of a body in a physics engine.
     * Linear damping is a force that opposes the motion of the body, and is proportional to the velocity of the body.
     * This method allows the user to set the linear damping of a body, which can be used to control the motion of the body.
     */ setLinearDamping(body, damping, instanceIndex) {
        this._applyToBodyOrInstances(body, (pluginData)=>{
            this._hknp.HP_Body_SetLinearDamping(pluginData.hpBodyId, damping);
        }, instanceIndex);
    }
    /**
     * Gets the linear damping of the given body.
     * @param body - The body to get the linear damping from.
     * @param instanceIndex - The index of the instance to get the linear damping from. If not specified, the linear damping of the first instance will be returned.
     * @returns The linear damping of the given body.
     *
     * This method is useful for getting the linear damping of a body in a physics engine.
     * Linear damping is a force that opposes the motion of the body and is proportional to the velocity of the body.
     * It is used to simulate the effects of air resistance and other forms of friction.
     */ getLinearDamping(body, instanceIndex) {
        const pluginRef = this._getPluginReference(body, instanceIndex);
        return this._hknp.HP_Body_GetLinearDamping(pluginRef.hpBodyId)[1];
    }
    /**
     * Sets the angular damping of a physics body.
     * @param body - The physics body to set the angular damping for.
     * @param damping - The angular damping value to set.
     * @param instanceIndex - The index of the instance to set the angular damping for. If not specified, the angular damping of the first instance will be set.
     *
     * This function is useful for controlling the angular velocity of a physics body.
     * By setting the angular damping, the body's angular velocity will be reduced over time, allowing for more realistic physics simulations.
     */ setAngularDamping(body, damping, instanceIndex) {
        this._applyToBodyOrInstances(body, (pluginData)=>{
            this._hknp.HP_Body_SetAngularDamping(pluginData.hpBodyId, damping);
        }, instanceIndex);
    }
    /**
     * Gets the angular damping of a physics body.
     * @param body - The physics body to get the angular damping from.
     * @param instanceIndex - The index of the instance to get the angular damping from. If not specified, the angular damping of the first instance will be returned.
     * @returns The angular damping of the body.
     *
     * This function is useful for retrieving the angular damping of a physics body,
     * which is used to control the rotational motion of the body. The angular damping is a value between 0 and 1, where 0 is no damping and 1 is full damping.
     */ getAngularDamping(body, instanceIndex) {
        const pluginRef = this._getPluginReference(body, instanceIndex);
        return this._hknp.HP_Body_GetAngularDamping(pluginRef.hpBodyId)[1];
    }
    /**
     * Sets the linear velocity of a physics body.
     * @param body - The physics body to set the linear velocity of.
     * @param linVel - The linear velocity to set.
     * @param instanceIndex - The index of the instance to set the linear velocity of. If not specified, the linear velocity of the first instance will be set.
     *
     * This function is useful for setting the linear velocity of a physics body, which is necessary for simulating
     * motion in a physics engine. The linear velocity is the speed and direction of the body's movement.
     */ setLinearVelocity(body, linVel, instanceIndex) {
        this._applyToBodyOrInstances(body, (pluginData)=>{
            this._hknp.HP_Body_SetLinearVelocity(pluginData.hpBodyId, this._bVecToV3(linVel));
        }, instanceIndex);
    }
    /**
     * Gets the linear velocity of a physics body and stores it in a given vector.
     * @param body - The physics body to get the linear velocity from.
     * @param linVel - The vector to store the linear velocity in.
     * @param instanceIndex - The index of the instance to get the linear velocity from. If not specified, the linear velocity of the first instance will be returned.
     *
     * This function is useful for retrieving the linear velocity of a physics body,
     * which can be used to determine the speed and direction of the body. This
     * information can be used to simulate realistic physics behavior in a game.
     */ getLinearVelocityToRef(body, linVel, instanceIndex) {
        const pluginRef = this._getPluginReference(body, instanceIndex);
        const lv = this._hknp.HP_Body_GetLinearVelocity(pluginRef.hpBodyId)[1];
        this._v3ToBvecRef(lv, linVel);
    }
    /*
     * Apply an operation either to all instances of a body, if instanceIndex is not specified, or to a specific instance.
     */ _applyToBodyOrInstances(body, fnToApply, instanceIndex) {
        if (body._pluginDataInstances?.length > 0 && instanceIndex === undefined) {
            for(let i = 0; i < body._pluginDataInstances.length; i++){
                fnToApply(body._pluginDataInstances[i]);
            }
        } else {
            fnToApply(this._getPluginReference(body, instanceIndex));
        }
    }
    /**
     * Applies an impulse to a physics body at a given location.
     * @param body - The physics body to apply the impulse to.
     * @param impulse - The impulse vector to apply.
     * @param location - The location in world space to apply the impulse.
     * @param instanceIndex - The index of the instance to apply the impulse to. If not specified, the impulse will be applied to all instances.
     *
     * This method is useful for applying an impulse to a physics body at a given location.
     * This can be used to simulate physical forces such as explosions, collisions, and gravity.
     */ applyImpulse(body, impulse, location, instanceIndex) {
        this._applyToBodyOrInstances(body, (pluginRef)=>{
            this._hknp.HP_Body_ApplyImpulse(pluginRef.hpBodyId, this._bVecToV3(location), this._bVecToV3(impulse));
        }, instanceIndex);
    }
    /**
     * Applies an angular impulse(torque) to a physics body
     * @param body - The physics body to apply the impulse to.
     * @param angularImpulse - The torque value
     * @param instanceIndex - The index of the instance to apply the impulse to. If not specified, the impulse will be applied to all instances.
     */ applyAngularImpulse(body, angularImpulse, instanceIndex) {
        this._applyToBodyOrInstances(body, (pluginRef)=>{
            this._hknp.HP_Body_ApplyAngularImpulse(pluginRef.hpBodyId, this._bVecToV3(angularImpulse));
        }, instanceIndex);
    }
    /**
     * Applies a force to a physics body at a given location.
     * @param body - The physics body to apply the impulse to.
     * @param force - The force vector to apply.
     * @param location - The location in world space to apply the impulse.
     * @param instanceIndex - The index of the instance to apply the force to. If not specified, the force will be applied to all instances.
     *
     * This method is useful for applying a force to a physics body at a given location.
     * This can be used to simulate physical forces such as explosions, collisions, and gravity.
     */ applyForce(body, force, location, instanceIndex) {
        force.scaleToRef(this.getTimeStep(), this._tmpVec3[0]);
        this.applyImpulse(body, this._tmpVec3[0], location, instanceIndex);
    }
    /**
     * Sets the angular velocity of a physics body.
     *
     * @param body - The physics body to set the angular velocity of.
     * @param angVel - The angular velocity to set.
     * @param instanceIndex - The index of the instance to set the angular velocity of. If not specified, the angular velocity of the first instance will be set.
     *
     * This function is useful for setting the angular velocity of a physics body in a physics engine.
     * This allows for more realistic simulations of physical objects, as they can be given a rotational velocity.
     */ setAngularVelocity(body, angVel, instanceIndex) {
        this._applyToBodyOrInstances(body, (pluginRef)=>{
            this._hknp.HP_Body_SetAngularVelocity(pluginRef.hpBodyId, this._bVecToV3(angVel));
        }, instanceIndex);
    }
    /**
     * Gets the angular velocity of a body.
     * @param body - The body to get the angular velocity from.
     * @param angVel - The vector3 to store the angular velocity.
     * @param instanceIndex - The index of the instance to get the angular velocity from. If not specified, the angular velocity of the first instance will be returned.
     *
     * This method is useful for getting the angular velocity of a body in a physics engine. It
     * takes the body and a vector3 as parameters and stores the angular velocity of the body
     * in the vector3. This is useful for getting the angular velocity of a body in order to
     * calculate the motion of the body in the physics engine.
     */ getAngularVelocityToRef(body, angVel, instanceIndex) {
        const pluginRef = this._getPluginReference(body, instanceIndex);
        const av = this._hknp.HP_Body_GetAngularVelocity(pluginRef.hpBodyId)[1];
        this._v3ToBvecRef(av, angVel);
    }
    /**
     * Sets the transformation of the given physics body to the given transform node.
     * @param body The physics body to set the transformation for.
     * @param node The transform node to set the transformation from.
     * Sets the transformation of the given physics body to the given transform node.
     *
     * This function is useful for setting the transformation of a physics body to a
     * transform node, which is necessary for the physics engine to accurately simulate
     * the motion of the body. It also takes into account instances of the transform
     * node, which is necessary for accurate simulation of multiple bodies with the
     * same transformation.
     */ setPhysicsBodyTransformation(body, node) {
        if (body.getPrestepType() == __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$IPhysicsEnginePlugin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsPrestepType"].TELEPORT) {
            const transformNode = body.transformNode;
            if (body.numInstances > 0) {
                // instances
                const m = transformNode;
                const matrixData = m._thinInstanceDataStorage.matrixData;
                if (!matrixData) {
                    return; // TODO: error handling
                }
                const instancesCount = body.numInstances;
                this._createOrUpdateBodyInstances(body, body.getMotionType(), matrixData, 0, instancesCount, true);
            } else {
                // regular
                this._hknp.HP_Body_SetQTransform(body._pluginData.hpBodyId, this._getTransformInfos(node));
            }
        } else if (body.getPrestepType() == __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$IPhysicsEnginePlugin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsPrestepType"].ACTION) {
            this.setTargetTransform(body, node.absolutePosition, node.absoluteRotationQuaternion);
        } else if (body.getPrestepType() == __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$IPhysicsEnginePlugin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsPrestepType"].DISABLED) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Warn("Prestep type is set to DISABLED. Unable to set physics body transformation.");
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Warn("Invalid prestep type set to physics body.");
        }
    }
    /**
     * Set the target transformation (position and rotation) of the body, such that the body will set its velocity to reach that target
     * @param body The physics body to set the target transformation for.
     * @param position The target position
     * @param rotation The target rotation
     * @param instanceIndex The index of the instance in an instanced body
     */ setTargetTransform(body, position, rotation, instanceIndex) {
        this._applyToBodyOrInstances(body, (pluginRef)=>{
            this._hknp.HP_Body_SetTargetQTransform(pluginRef.hpBodyId, [
                this._bVecToV3(position),
                this._bQuatToV4(rotation)
            ]);
        }, instanceIndex);
    }
    /**
     * Sets the gravity factor of a body
     * @param body the physics body to set the gravity factor for
     * @param factor the gravity factor
     * @param instanceIndex the index of the instance in an instanced body
     */ setGravityFactor(body, factor, instanceIndex) {
        this._applyToBodyOrInstances(body, (pluginRef)=>{
            this._hknp.HP_Body_SetGravityFactor(pluginRef.hpBodyId, factor);
        }, instanceIndex);
    }
    /**
     * Get the gravity factor of a body
     * @param body the physics body to get the gravity factor from
     * @param instanceIndex the index of the instance in an instanced body. If not specified, the gravity factor of the first instance will be returned.
     * @returns the gravity factor
     */ getGravityFactor(body, instanceIndex) {
        const pluginRef = this._getPluginReference(body, instanceIndex);
        return this._hknp.HP_Body_GetGravityFactor(pluginRef.hpBodyId)[1];
    }
    /**
     * Disposes a physics body.
     *
     * @param body - The physics body to dispose.
     *
     * This method is useful for releasing the resources associated with a physics body when it is no longer needed.
     * This is important for avoiding memory leaks in the physics engine.
     */ disposeBody(body) {
        if (body._pluginDataInstances && body._pluginDataInstances.length > 0) {
            for (const instance of body._pluginDataInstances){
                this._hknp.HP_Body_Release(instance.hpBodyId);
                instance.hpBodyId = undefined;
            }
        }
        if (body._pluginData) {
            this._hknp.HP_Body_Release(body._pluginData.hpBodyId);
            body._pluginData.hpBodyId = undefined;
        }
    }
    _createOptionsFromGroundMesh(options) {
        const mesh = options.groundMesh;
        if (!mesh) {
            return;
        }
        let pos = mesh.getVerticesData(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexBuffer"].PositionKind);
        const transform = mesh.computeWorldMatrix(true);
        // convert rawVerts to object space
        const transformedVertices = [];
        let index;
        for(index = 0; index < pos.length; index += 3){
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].FromArrayToRef(pos, index, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0]);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinatesToRef(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0], transform, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[1]);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[1].toArray(transformedVertices, index);
        }
        pos = transformedVertices;
        const arraySize = ~~(Math.sqrt(pos.length / 3) - 1);
        const boundingInfo = mesh.getBoundingInfo();
        const dim = Math.min(boundingInfo.boundingBox.extendSizeWorld.x, boundingInfo.boundingBox.extendSizeWorld.z);
        const minX = boundingInfo.boundingBox.minimumWorld.x;
        const minY = boundingInfo.boundingBox.minimumWorld.y;
        const minZ = boundingInfo.boundingBox.minimumWorld.z;
        const matrix = new Float32Array((arraySize + 1) * (arraySize + 1));
        const elementSize = dim * 2 / arraySize;
        for(let i = 0; i < matrix.length; i++){
            matrix[i] = minY;
        }
        for(let i = 0; i < pos.length; i = i + 3){
            const x = Math.round((pos[i + 0] - minX) / elementSize);
            const z = arraySize - Math.round((pos[i + 2] - minZ) / elementSize);
            const y = pos[i + 1] - minY;
            matrix[z * (arraySize + 1) + x] = y;
        }
        options.numHeightFieldSamplesX = arraySize + 1;
        options.numHeightFieldSamplesZ = arraySize + 1;
        options.heightFieldSizeX = boundingInfo.boundingBox.extendSizeWorld.x * 2;
        options.heightFieldSizeZ = boundingInfo.boundingBox.extendSizeWorld.z * 2;
        options.heightFieldData = matrix;
    }
    /**
     * Initializes a physics shape with the given type and parameters.
     * @param shape - The physics shape to initialize.
     * @param type - The type of shape to initialize.
     * @param options - The parameters for the shape.
     *
     * This code is useful for initializing a physics shape with the given type and parameters.
     * It allows for the creation of a sphere, box, capsule, container, cylinder, mesh, and heightfield.
     * Depending on the type of shape, different parameters are required.
     * For example, a sphere requires a radius, while a box requires extents and a rotation.
     */ initShape(shape, type, options) {
        switch(type){
            case 0 /* PhysicsShapeType.SPHERE */ :
                {
                    const radius = options.radius || 1;
                    const center = options.center ? this._bVecToV3(options.center) : [
                        0,
                        0,
                        0
                    ];
                    shape._pluginData = this._hknp.HP_Shape_CreateSphere(center, radius)[1];
                }
                break;
            case 3 /* PhysicsShapeType.BOX */ :
                {
                    const rotation = options.rotation ? this._bQuatToV4(options.rotation) : [
                        0,
                        0,
                        0,
                        1
                    ];
                    const extent = options.extents ? this._bVecToV3(options.extents) : [
                        1,
                        1,
                        1
                    ];
                    const center = options.center ? this._bVecToV3(options.center) : [
                        0,
                        0,
                        0
                    ];
                    shape._pluginData = this._hknp.HP_Shape_CreateBox(center, rotation, extent)[1];
                }
                break;
            case 1 /* PhysicsShapeType.CAPSULE */ :
                {
                    const pointA = options.pointA ? this._bVecToV3(options.pointA) : [
                        0,
                        0,
                        0
                    ];
                    const pointB = options.pointB ? this._bVecToV3(options.pointB) : [
                        0,
                        1,
                        0
                    ];
                    const radius = options.radius || 0;
                    shape._pluginData = this._hknp.HP_Shape_CreateCapsule(pointA, pointB, radius)[1];
                }
                break;
            case 5 /* PhysicsShapeType.CONTAINER */ :
                {
                    shape._pluginData = this._hknp.HP_Shape_CreateContainer()[1];
                }
                break;
            case 2 /* PhysicsShapeType.CYLINDER */ :
                {
                    const pointA = options.pointA ? this._bVecToV3(options.pointA) : [
                        0,
                        0,
                        0
                    ];
                    const pointB = options.pointB ? this._bVecToV3(options.pointB) : [
                        0,
                        1,
                        0
                    ];
                    const radius = options.radius || 0;
                    shape._pluginData = this._hknp.HP_Shape_CreateCylinder(pointA, pointB, radius)[1];
                }
                break;
            case 4 /* PhysicsShapeType.CONVEX_HULL */ :
            case 6 /* PhysicsShapeType.MESH */ :
                {
                    const mesh = options.mesh;
                    if (mesh) {
                        const includeChildMeshes = !!options.includeChildMeshes;
                        const needIndices = type != 4 /* PhysicsShapeType.CONVEX_HULL */ ;
                        const accum = new MeshAccumulator(mesh, needIndices, mesh?.getScene());
                        accum.addNodeMeshes(mesh, includeChildMeshes);
                        const positions = accum.getVertices(this._hknp);
                        const numVec3s = positions.numObjects / 3;
                        if (type == 4 /* PhysicsShapeType.CONVEX_HULL */ ) {
                            shape._pluginData = this._hknp.HP_Shape_CreateConvexHull(positions.offset, numVec3s)[1];
                        } else {
                            const triangles = accum.getTriangles(this._hknp);
                            const numTriangles = triangles.numObjects / 3;
                            shape._pluginData = this._hknp.HP_Shape_CreateMesh(positions.offset, numVec3s, triangles.offset, numTriangles)[1];
                            accum.freeBuffer(this._hknp, triangles);
                        }
                        accum.freeBuffer(this._hknp, positions);
                    } else {
                        throw new Error("No mesh provided to create physics shape.");
                    }
                }
                break;
            case 7 /* PhysicsShapeType.HEIGHTFIELD */ :
                {
                    if (options.groundMesh) {
                        // update options with datas from groundMesh
                        this._createOptionsFromGroundMesh(options);
                    }
                    if (options.numHeightFieldSamplesX && options.numHeightFieldSamplesZ && options.heightFieldSizeX && options.heightFieldSizeZ && options.heightFieldData) {
                        const totalNumHeights = options.numHeightFieldSamplesX * options.numHeightFieldSamplesZ;
                        const numBytes = totalNumHeights * 4;
                        const bufferBegin = this._hknp._malloc(numBytes);
                        const heightBuffer = new Float32Array(this._hknp.HEAPU8.buffer, bufferBegin, totalNumHeights);
                        for(let x = 0; x < options.numHeightFieldSamplesX; x++){
                            for(let z = 0; z < options.numHeightFieldSamplesZ; z++){
                                const hkBufferIndex = z * options.numHeightFieldSamplesX + x;
                                const bjsBufferIndex = (options.numHeightFieldSamplesX - 1 - x) * options.numHeightFieldSamplesZ + z;
                                heightBuffer[hkBufferIndex] = options.heightFieldData[bjsBufferIndex];
                            }
                        }
                        const scaleX = options.heightFieldSizeX / (options.numHeightFieldSamplesX - 1);
                        const scaleZ = options.heightFieldSizeZ / (options.numHeightFieldSamplesZ - 1);
                        shape._pluginData = this._hknp.HP_Shape_CreateHeightField(options.numHeightFieldSamplesX, options.numHeightFieldSamplesZ, [
                            scaleX,
                            1,
                            scaleZ
                        ], bufferBegin)[1];
                        this._hknp._free(bufferBegin);
                    } else {
                        throw new Error("Missing required heightfield parameters");
                    }
                }
                break;
            default:
                throw new Error("Unsupported Shape Type.");
                break;
        }
        this._shapes.set(shape._pluginData[0], shape);
    }
    /**
     * Sets the shape filter membership mask of a body
     * @param shape - The physics body to set the shape filter membership mask for.
     * @param membershipMask - The shape filter membership mask to set.
     */ setShapeFilterMembershipMask(shape, membershipMask) {
        const collideWith = this._hknp.HP_Shape_GetFilterInfo(shape._pluginData)[1][1];
        this._hknp.HP_Shape_SetFilterInfo(shape._pluginData, [
            membershipMask,
            collideWith
        ]);
    }
    /**
     * Gets the shape filter membership mask of a body
     * @param shape - The physics body to get the shape filter membership mask from.
     * @returns The shape filter membership mask of the given body.
     */ getShapeFilterMembershipMask(shape) {
        return this._hknp.HP_Shape_GetFilterInfo(shape._pluginData)[1][0];
    }
    /**
     * Sets the shape filter collide mask of a body
     * @param shape - The physics body to set the shape filter collide mask for.
     * @param collideMask - The shape filter collide mask to set.
     */ setShapeFilterCollideMask(shape, collideMask) {
        const membership = this._hknp.HP_Shape_GetFilterInfo(shape._pluginData)[1][0];
        this._hknp.HP_Shape_SetFilterInfo(shape._pluginData, [
            membership,
            collideMask
        ]);
    }
    /**
     * Gets the shape filter collide mask of a body
     * @param shape - The physics body to get the shape filter collide mask from.
     * @returns The shape filter collide mask of the given body.
     */ getShapeFilterCollideMask(shape) {
        return this._hknp.HP_Shape_GetFilterInfo(shape._pluginData)[1][1];
    }
    /**
     * Sets the material of a physics shape.
     * @param shape - The physics shape to set the material of.
     * @param material - The material to set.
     *
     */ setMaterial(shape, material) {
        const dynamicFriction = material.friction ?? 0.5;
        const staticFriction = material.staticFriction ?? dynamicFriction;
        const restitution = material.restitution ?? 0.0;
        const frictionCombine = material.frictionCombine ?? 1 /* PhysicsMaterialCombineMode.MINIMUM */ ;
        const restitutionCombine = material.restitutionCombine ?? 2 /* PhysicsMaterialCombineMode.MAXIMUM */ ;
        const hpMaterial = [
            staticFriction,
            dynamicFriction,
            restitution,
            this._materialCombineToNative(frictionCombine),
            this._materialCombineToNative(restitutionCombine)
        ];
        this._hknp.HP_Shape_SetMaterial(shape._pluginData, hpMaterial);
    }
    /**
     * Gets the material associated with a physics shape.
     * @param shape - The shape to get the material from.
     * @returns The material associated with the shape.
     */ getMaterial(shape) {
        const hkMaterial = this._hknp.HP_Shape_GetMaterial(shape._pluginData)[1];
        return {
            staticFriction: hkMaterial[0],
            friction: hkMaterial[1],
            restitution: hkMaterial[2],
            frictionCombine: this._nativeToMaterialCombine(hkMaterial[3]),
            restitutionCombine: this._nativeToMaterialCombine(hkMaterial[4])
        };
    }
    /**
     * Sets the density of a physics shape.
     * @param shape - The physics shape to set the density of.
     * @param density - The density to set.
     *
     */ setDensity(shape, density) {
        this._hknp.HP_Shape_SetDensity(shape._pluginData, density);
    }
    /**
     * Calculates the density of a given physics shape.
     *
     * @param shape - The physics shape to calculate the density of.
     * @returns The density of the given physics shape.
     *
     */ getDensity(shape) {
        return this._hknp.HP_Shape_GetDensity(shape._pluginData)[1];
    }
    /**
     * Gets the transform infos of a given transform node.
     * This code is useful for getting the position and orientation of a given transform node.
     * It first checks if the node has a rotation quaternion, and if not, it creates one from the node's rotation.
     * It then creates an array containing the position and orientation of the node and returns it.
     * @param node - The transform node.
     * @returns An array containing the position and orientation of the node.
     */ _getTransformInfos(node) {
        if (node.parent) {
            node.computeWorldMatrix(true);
            return [
                this._bVecToV3(node.absolutePosition),
                this._bQuatToV4(node.absoluteRotationQuaternion)
            ];
        }
        let orientation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Quaternion[0];
        if (node.rotationQuaternion) {
            orientation = node.rotationQuaternion;
        } else {
            const r = node.rotation;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Quaternion"].FromEulerAnglesToRef(r.x, r.y, r.z, orientation);
        }
        const transform = [
            this._bVecToV3(node.position),
            this._bQuatToV4(orientation)
        ];
        return transform;
    }
    /**
     * Adds a child shape to the given shape.
     * @param shape - The parent shape.
     * @param newChild - The child shape to add.
     * @param translation - The relative translation of the child from the parent shape
     * @param rotation - The relative rotation of the child from the parent shape
     * @param scale - The relative scale scale of the child from the parent shaep
     *
     */ addChild(shape, newChild, translation, rotation, scale) {
        const transformNative = [
            translation ? this._bVecToV3(translation) : [
                0,
                0,
                0
            ],
            rotation ? this._bQuatToV4(rotation) : [
                0,
                0,
                0,
                1
            ],
            scale ? this._bVecToV3(scale) : [
                1,
                1,
                1
            ]
        ];
        this._hknp.HP_Shape_AddChild(shape._pluginData, newChild._pluginData, transformNative);
    }
    /**
     * Removes a child shape from a parent shape.
     * @param shape - The parent shape.
     * @param childIndex - The index of the child shape to remove.
     *
     */ removeChild(shape, childIndex) {
        this._hknp.HP_Shape_RemoveChild(shape._pluginData, childIndex);
    }
    /**
     * Returns the number of children of the given shape.
     *
     * @param shape - The shape to get the number of children from.
     * @returns The number of children of the given shape.
     *
     */ getNumChildren(shape) {
        return this._hknp.HP_Shape_GetNumChildren(shape._pluginData)[1];
    }
    /**
     * Marks the shape as a trigger
     * @param shape the shape to mark as a trigger
     * @param isTrigger if the shape is a trigger
     */ setTrigger(shape, isTrigger) {
        this._hknp.HP_Shape_SetTrigger(shape._pluginData, isTrigger);
    }
    /**
     * Calculates the bounding box of a given physics shape.
     *
     * @param _shape - The physics shape to calculate the bounding box for.
     * @returns The calculated bounding box.
     *
     * This method is useful for physics engines as it allows to calculate the
     * boundaries of a given shape. Knowing the boundaries of a shape is important
     * for collision detection and other physics calculations.
     */ getBoundingBox(_shape) {
        // get local AABB
        const aabb = this._hknp.HP_Shape_GetBoundingBox(_shape._pluginData, [
            [
                0,
                0,
                0
            ],
            [
                0,
                0,
                0,
                1
            ]
        ])[1];
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0].set(aabb[0][0], aabb[0][1], aabb[0][2]); // min
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[1].set(aabb[1][0], aabb[1][1], aabb[1][2]); // max
        const boundingbox = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$boundingBox$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BoundingBox"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[1], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"].IdentityReadOnly);
        return boundingbox;
    }
    /**
     * Calculates the world bounding box of a given physics body.
     *
     * @param body - The physics body to calculate the bounding box for.
     * @returns The calculated bounding box.
     *
     * This method is useful for physics engines as it allows to calculate the
     * boundaries of a given body.
     */ getBodyBoundingBox(body) {
        // get local AABB
        const aabb = this.getBoundingBox(body.shape);
        const boundingbox = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$boundingBox$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BoundingBox"](aabb.minimum, aabb.maximum, body.transformNode.getWorldMatrix());
        return boundingbox;
    }
    /**
     * Gets the geometry of a physics body.
     *
     * @param body - The physics body.
     * @returns An object containing the positions and indices of the body's geometry.
     *
     */ getBodyGeometry(body) {
        const dataInfo = body._pluginDataInstances?.length > 0 ? body._pluginDataInstances[0] : body._pluginData;
        const shape = this._hknp.HP_Body_GetShape(dataInfo.hpBodyId)[1];
        const geometryRes = this._hknp.HP_Shape_CreateDebugDisplayGeometry(shape);
        if (geometryRes[0] != this._hknp.Result.RESULT_OK) {
            return {
                positions: [],
                indices: []
            };
        }
        const geometryInfo = this._hknp.HP_DebugGeometry_GetInfo(geometryRes[1])[1];
        const positionsInPlugin = new Float32Array(this._hknp.HEAPU8.buffer, geometryInfo[0], geometryInfo[1] * 3); // 3 floats per position
        const indicesInPlugin = new Uint32Array(this._hknp.HEAPU8.buffer, geometryInfo[2], geometryInfo[3] * 3); // 3 indices per triangle
        // HP_DebugGeometry_Release will free the buffer in the plugin. To avoid a
        // use-after-free, we need  to make a copy of the data here.
        const positions = positionsInPlugin.slice(0);
        const indices = indicesInPlugin.slice(0);
        this._hknp.HP_DebugGeometry_Release(geometryRes[1]);
        return {
            positions: positions,
            indices: indices
        };
    }
    /**
     * Releases a physics shape from the physics engine.
     *
     * @param shape - The physics shape to be released.
     *
     * This method is useful for releasing a physics shape from the physics engine, freeing up resources and preventing memory leaks.
     */ disposeShape(shape) {
        this._shapes.delete(shape._pluginData[0]);
        this._hknp.HP_Shape_Release(shape._pluginData);
        shape._pluginData = undefined;
    }
    // constraint
    /**
     * Initializes a physics constraint with the given parameters.
     *
     * @param constraint - The physics constraint to be initialized.
     * @param body - The main body
     * @param childBody - The child body.
     * @param instanceIndex - If this body is instanced, the index of the instance to which the constraint will be applied. If not specified, no constraint will be applied.
     * @param childInstanceIndex - If the child body is instanced, the index of the instance to which the constraint will be applied. If not specified, no constraint will be applied.
     *
     * This function is useful for setting up a physics constraint in a physics engine.
     */ initConstraint(constraint, body, childBody, instanceIndex, childInstanceIndex) {
        const type = constraint.type;
        const options = constraint.options;
        if (!type || !options) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Warn("No constraint type or options. Constraint is invalid.");
            return;
        }
        if (body._pluginDataInstances.length > 0 && instanceIndex === undefined || childBody._pluginDataInstances.length > 0 && childInstanceIndex === undefined) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Warn("Body is instanced but no instance index was specified. Constraint will not be applied.");
            return;
        }
        constraint._pluginData = constraint._pluginData ?? [];
        const jointId = this._hknp.HP_Constraint_Create()[1];
        constraint._pluginData.push(jointId);
        // body parenting
        const bodyA = this._getPluginReference(body, instanceIndex).hpBodyId;
        const bodyB = this._getPluginReference(childBody, childInstanceIndex).hpBodyId;
        this._hknp.HP_Constraint_SetParentBody(jointId, bodyA);
        this._hknp.HP_Constraint_SetChildBody(jointId, bodyB);
        this._constraintToBodyIdPair.set(jointId[0], [
            bodyA[0],
            bodyB[0]
        ]);
        // anchors
        const pivotA = options.pivotA ? this._bVecToV3(options.pivotA) : this._bVecToV3(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Zero());
        const axisA = options.axisA ?? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](1, 0, 0);
        const perpAxisA = this._tmpVec3[0];
        if (options.perpAxisA) {
            perpAxisA.copyFrom(options.perpAxisA);
        } else {
            axisA.getNormalToRef(perpAxisA);
        }
        this._hknp.HP_Constraint_SetAnchorInParent(jointId, pivotA, this._bVecToV3(axisA), this._bVecToV3(perpAxisA));
        const pivotB = options.pivotB ? this._bVecToV3(options.pivotB) : this._bVecToV3(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Zero());
        const axisB = options.axisB ?? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](1, 0, 0);
        const perpAxisB = this._tmpVec3[0];
        if (options.perpAxisB) {
            perpAxisB.copyFrom(options.perpAxisB);
        } else {
            axisB.getNormalToRef(perpAxisB);
        }
        this._hknp.HP_Constraint_SetAnchorInChild(jointId, pivotB, this._bVecToV3(axisB), this._bVecToV3(perpAxisB));
        // Save the options that were used for initializing the constraint for debugging purposes
        // Check first to avoid copying the same options multiple times
        if (!constraint._initOptions) {
            constraint._initOptions = {
                axisA: axisA.clone(),
                axisB: axisB.clone(),
                perpAxisA: perpAxisA.clone(),
                perpAxisB: perpAxisB.clone(),
                pivotA: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](pivotA[0], pivotA[1], pivotA[2]),
                pivotB: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](pivotB[0], pivotB[1], pivotB[2])
            };
        }
        if (type == 5 /* PhysicsConstraintType.LOCK */ ) {
            this._hknp.HP_Constraint_SetAxisMode(jointId, this._hknp.ConstraintAxis.LINEAR_X, this._hknp.ConstraintAxisLimitMode.LOCKED);
            this._hknp.HP_Constraint_SetAxisMode(jointId, this._hknp.ConstraintAxis.LINEAR_Y, this._hknp.ConstraintAxisLimitMode.LOCKED);
            this._hknp.HP_Constraint_SetAxisMode(jointId, this._hknp.ConstraintAxis.LINEAR_Z, this._hknp.ConstraintAxisLimitMode.LOCKED);
            this._hknp.HP_Constraint_SetAxisMode(jointId, this._hknp.ConstraintAxis.ANGULAR_X, this._hknp.ConstraintAxisLimitMode.LOCKED);
            this._hknp.HP_Constraint_SetAxisMode(jointId, this._hknp.ConstraintAxis.ANGULAR_Y, this._hknp.ConstraintAxisLimitMode.LOCKED);
            this._hknp.HP_Constraint_SetAxisMode(jointId, this._hknp.ConstraintAxis.ANGULAR_Z, this._hknp.ConstraintAxisLimitMode.LOCKED);
        } else if (type == 2 /* PhysicsConstraintType.DISTANCE */ ) {
            const distance = options.maxDistance || 0;
            const dist3d = this._hknp.ConstraintAxis.LINEAR_DISTANCE;
            this._hknp.HP_Constraint_SetAxisMode(jointId, dist3d, this._hknp.ConstraintAxisLimitMode.LIMITED);
            this._hknp.HP_Constraint_SetAxisMinLimit(jointId, dist3d, distance);
            this._hknp.HP_Constraint_SetAxisMaxLimit(jointId, dist3d, distance);
        } else if (type == 3 /* PhysicsConstraintType.HINGE */ ) {
            this._hknp.HP_Constraint_SetAxisMode(jointId, this._hknp.ConstraintAxis.LINEAR_X, this._hknp.ConstraintAxisLimitMode.LOCKED);
            this._hknp.HP_Constraint_SetAxisMode(jointId, this._hknp.ConstraintAxis.LINEAR_Y, this._hknp.ConstraintAxisLimitMode.LOCKED);
            this._hknp.HP_Constraint_SetAxisMode(jointId, this._hknp.ConstraintAxis.LINEAR_Z, this._hknp.ConstraintAxisLimitMode.LOCKED);
            this._hknp.HP_Constraint_SetAxisMode(jointId, this._hknp.ConstraintAxis.ANGULAR_Y, this._hknp.ConstraintAxisLimitMode.LOCKED);
            this._hknp.HP_Constraint_SetAxisMode(jointId, this._hknp.ConstraintAxis.ANGULAR_Z, this._hknp.ConstraintAxisLimitMode.LOCKED);
        } else if (type == 6 /* PhysicsConstraintType.PRISMATIC */ ) {
            this._hknp.HP_Constraint_SetAxisMode(jointId, this._hknp.ConstraintAxis.LINEAR_Y, this._hknp.ConstraintAxisLimitMode.LOCKED);
            this._hknp.HP_Constraint_SetAxisMode(jointId, this._hknp.ConstraintAxis.LINEAR_Z, this._hknp.ConstraintAxisLimitMode.LOCKED);
            this._hknp.HP_Constraint_SetAxisMode(jointId, this._hknp.ConstraintAxis.ANGULAR_X, this._hknp.ConstraintAxisLimitMode.LOCKED);
            this._hknp.HP_Constraint_SetAxisMode(jointId, this._hknp.ConstraintAxis.ANGULAR_Y, this._hknp.ConstraintAxisLimitMode.LOCKED);
            this._hknp.HP_Constraint_SetAxisMode(jointId, this._hknp.ConstraintAxis.ANGULAR_Z, this._hknp.ConstraintAxisLimitMode.LOCKED);
        } else if (type == 4 /* PhysicsConstraintType.SLIDER */ ) {
            this._hknp.HP_Constraint_SetAxisMode(jointId, this._hknp.ConstraintAxis.LINEAR_Y, this._hknp.ConstraintAxisLimitMode.LOCKED);
            this._hknp.HP_Constraint_SetAxisMode(jointId, this._hknp.ConstraintAxis.LINEAR_Z, this._hknp.ConstraintAxisLimitMode.LOCKED);
            this._hknp.HP_Constraint_SetAxisMode(jointId, this._hknp.ConstraintAxis.ANGULAR_Y, this._hknp.ConstraintAxisLimitMode.LOCKED);
            this._hknp.HP_Constraint_SetAxisMode(jointId, this._hknp.ConstraintAxis.ANGULAR_Z, this._hknp.ConstraintAxisLimitMode.LOCKED);
        } else if (type == 1 /* PhysicsConstraintType.BALL_AND_SOCKET */ ) {
            this._hknp.HP_Constraint_SetAxisMode(jointId, this._hknp.ConstraintAxis.LINEAR_X, this._hknp.ConstraintAxisLimitMode.LOCKED);
            this._hknp.HP_Constraint_SetAxisMode(jointId, this._hknp.ConstraintAxis.LINEAR_Y, this._hknp.ConstraintAxisLimitMode.LOCKED);
            this._hknp.HP_Constraint_SetAxisMode(jointId, this._hknp.ConstraintAxis.LINEAR_Z, this._hknp.ConstraintAxisLimitMode.LOCKED);
        } else if (type == 7 /* PhysicsConstraintType.SIX_DOF */ ) {
            const sixdofData = constraint;
            for (const l of sixdofData.limits){
                const axId = this._constraintAxisToNative(l.axis);
                if ((l.minLimit ?? -1) == 0 && (l.maxLimit ?? -1) == 0) {
                    this._hknp.HP_Constraint_SetAxisMode(jointId, axId, this._hknp.ConstraintAxisLimitMode.LOCKED);
                } else {
                    if (l.minLimit != undefined) {
                        this._hknp.HP_Constraint_SetAxisMode(jointId, axId, this._hknp.ConstraintAxisLimitMode.LIMITED);
                        this._hknp.HP_Constraint_SetAxisMinLimit(jointId, axId, l.minLimit);
                    }
                    if (l.maxLimit != undefined) {
                        this._hknp.HP_Constraint_SetAxisMode(jointId, axId, this._hknp.ConstraintAxisLimitMode.LIMITED);
                        this._hknp.HP_Constraint_SetAxisMaxLimit(jointId, axId, l.maxLimit);
                    }
                }
                if (l.stiffness) {
                    this._hknp.HP_Constraint_SetAxisStiffness(jointId, axId, l.stiffness);
                }
                if (l.damping) {
                    this._hknp.HP_Constraint_SetAxisDamping(jointId, axId, l.damping);
                }
            }
        } else {
            throw new Error("Unsupported Constraint Type.");
        }
        const collisionEnabled = !!options.collision;
        this._hknp.HP_Constraint_SetCollisionsEnabled(jointId, collisionEnabled);
        this._hknp.HP_Constraint_SetEnabled(jointId, true);
    }
    /**
     * Get a list of all the pairs of bodies that are connected by this constraint.
     * @param constraint the constraint to search from
     * @returns a list of parent, child pairs
     */ getBodiesUsingConstraint(constraint) {
        const pairs = [];
        for (const jointId of constraint._pluginData){
            const bodyIds = this._constraintToBodyIdPair.get(jointId[0]);
            if (bodyIds) {
                const parentBodyInfo = this._bodies.get(bodyIds[0]);
                const childBodyInfo = this._bodies.get(bodyIds[1]);
                if (parentBodyInfo && childBodyInfo) {
                    pairs.push({
                        parentBody: parentBodyInfo.body,
                        parentBodyIndex: parentBodyInfo.index,
                        childBody: childBodyInfo.body,
                        childBodyIndex: childBodyInfo.index
                    });
                }
            }
        }
        return pairs;
    }
    /**
     * Adds a constraint to the physics engine.
     *
     * @param body - The main body to which the constraint is applied.
     * @param childBody - The body to which the constraint is applied.
     * @param constraint - The constraint to be applied.
     * @param instanceIndex - If this body is instanced, the index of the instance to which the constraint will be applied. If not specified, no constraint will be applied.
     * @param childInstanceIndex - If the child body is instanced, the index of the instance to which the constraint will be applied. If not specified, no constraint will be applied.
     */ addConstraint(body, childBody, constraint, instanceIndex, childInstanceIndex) {
        //<todo It's real weird that initConstraint() is called only after adding to a body!
        this.initConstraint(constraint, body, childBody, instanceIndex, childInstanceIndex);
    }
    /**
     * Enables or disables a constraint in the physics engine.
     * @param constraint - The constraint to enable or disable.
     * @param isEnabled - Whether the constraint should be enabled or disabled.
     *
     */ setEnabled(constraint, isEnabled) {
        for (const jointId of constraint._pluginData){
            this._hknp.HP_Constraint_SetEnabled(jointId, isEnabled);
        }
    }
    /**
     * Gets the enabled state of the given constraint.
     * @param constraint - The constraint to get the enabled state from.
     * @returns The enabled state of the given constraint.
     *
     */ getEnabled(constraint) {
        const firstId = constraint._pluginData && constraint._pluginData[0];
        if (firstId) {
            return this._hknp.HP_Constraint_GetEnabled(firstId)[1];
        }
        return false;
    }
    /**
     * Enables or disables collisions for the given constraint.
     * @param constraint - The constraint to enable or disable collisions for.
     * @param isEnabled - Whether collisions should be enabled or disabled.
     *
     */ setCollisionsEnabled(constraint, isEnabled) {
        for (const jointId of constraint._pluginData){
            this._hknp.HP_Constraint_SetCollisionsEnabled(jointId, isEnabled);
        }
    }
    /**
     * Gets whether collisions are enabled for the given constraint.
     * @param constraint - The constraint to get collisions enabled for.
     * @returns Whether collisions are enabled for the given constraint.
     *
     */ getCollisionsEnabled(constraint) {
        const firstId = constraint._pluginData && constraint._pluginData[0];
        if (firstId) {
            return this._hknp.HP_Constraint_GetCollisionsEnabled(firstId)[1];
        }
        return false;
    }
    /**
     * Sets the friction of the given axis of the given constraint.
     *
     * @param constraint - The constraint to set the friction of.
     * @param axis - The axis of the constraint to set the friction of.
     * @param friction - The friction to set.
     *
     */ setAxisFriction(constraint, axis, friction) {
        for (const jointId of constraint._pluginData){
            this._hknp.HP_Constraint_SetAxisFriction(jointId, this._constraintAxisToNative(axis), friction);
        }
    }
    /**
     * Gets the friction value of the specified axis of the given constraint.
     *
     * @param constraint - The constraint to get the axis friction from.
     * @param axis - The axis to get the friction from.
     * @returns The friction value of the specified axis.
     *
     */ getAxisFriction(constraint, axis) {
        const firstId = constraint._pluginData && constraint._pluginData[0];
        if (firstId) {
            return this._hknp.HP_Constraint_GetAxisFriction(firstId, this._constraintAxisToNative(axis))[1];
        }
        return null;
    }
    /**
     * Sets the limit mode of the specified axis of the given constraint.
     * @param constraint - The constraint to set the axis mode of.
     * @param axis - The axis to set the limit mode of.
     * @param limitMode - The limit mode to set.
     */ setAxisMode(constraint, axis, limitMode) {
        for (const jointId of constraint._pluginData){
            this._hknp.HP_Constraint_SetAxisMode(jointId, this._constraintAxisToNative(axis), this._limitModeToNative(limitMode));
        }
    }
    /**
     * Gets the axis limit mode of the given constraint.
     *
     * @param constraint - The constraint to get the axis limit mode from.
     * @param axis - The axis to get the limit mode from.
     * @returns The axis limit mode of the given constraint.
     *
     */ getAxisMode(constraint, axis) {
        const firstId = constraint._pluginData && constraint._pluginData[0];
        if (firstId) {
            const mode = this._hknp.HP_Constraint_GetAxisMode(firstId, this._constraintAxisToNative(axis))[1];
            return this._nativeToLimitMode(mode);
        }
        return null;
    }
    /**
     * Sets the minimum limit of the given axis of the given constraint.
     * @param constraint - The constraint to set the minimum limit of.
     * @param axis - The axis to set the minimum limit of.
     * @param limit - The minimum limit to set.
     *
     */ setAxisMinLimit(constraint, axis, limit) {
        for (const jointId of constraint._pluginData){
            this._hknp.HP_Constraint_SetAxisMinLimit(jointId, this._constraintAxisToNative(axis), limit);
        }
    }
    /**
     * Gets the minimum limit of the specified axis of the given constraint.
     * @param constraint - The constraint to get the minimum limit from.
     * @param axis - The axis to get the minimum limit from.
     * @returns The minimum limit of the specified axis of the given constraint.
     *
     */ getAxisMinLimit(constraint, axis) {
        const firstId = constraint._pluginData && constraint._pluginData[0];
        if (firstId) {
            return this._hknp.HP_Constraint_GetAxisMinLimit(firstId, this._constraintAxisToNative(axis))[1];
        }
        return null;
    }
    /**
     * Sets the maximum limit of the given axis of the given constraint.
     * @param constraint - The constraint to set the maximum limit of the given axis.
     * @param axis - The axis to set the maximum limit of.
     * @param limit - The maximum limit to set.
     *
     */ setAxisMaxLimit(constraint, axis, limit) {
        for (const jointId of constraint._pluginData){
            this._hknp.HP_Constraint_SetAxisMaxLimit(jointId, this._constraintAxisToNative(axis), limit);
        }
    }
    /**
     * Gets the maximum limit of the given axis of the given constraint.
     *
     * @param constraint - The constraint to get the maximum limit from.
     * @param axis - The axis to get the maximum limit from.
     * @returns The maximum limit of the given axis of the given constraint.
     *
     */ getAxisMaxLimit(constraint, axis) {
        const firstId = constraint._pluginData && constraint._pluginData[0];
        if (firstId) {
            return this._hknp.HP_Constraint_GetAxisMaxLimit(firstId, this._constraintAxisToNative(axis))[1];
        }
        return null;
    }
    /**
     * Sets the motor type of the given axis of the given constraint.
     * @param constraint - The constraint to set the motor type of.
     * @param axis - The axis of the constraint to set the motor type of.
     * @param motorType - The motor type to set.
     *
     */ setAxisMotorType(constraint, axis, motorType) {
        for (const jointId of constraint._pluginData){
            this._hknp.HP_Constraint_SetAxisMotorType(jointId, this._constraintAxisToNative(axis), this._constraintMotorTypeToNative(motorType));
        }
    }
    /**
     * Gets the motor type of the specified axis of the given constraint.
     * @param constraint - The constraint to get the motor type from.
     * @param axis - The axis of the constraint to get the motor type from.
     * @returns The motor type of the specified axis of the given constraint.
     *
     */ getAxisMotorType(constraint, axis) {
        const firstId = constraint._pluginData && constraint._pluginData[0];
        if (firstId) {
            return this._nativeToMotorType(this._hknp.HP_Constraint_GetAxisMotorType(firstId, this._constraintAxisToNative(axis))[1]);
        }
        return null;
    }
    /**
     * Sets the target of an axis motor of a constraint.
     *
     * @param constraint - The constraint to set the axis motor target of.
     * @param axis - The axis of the constraint to set the motor target of.
     * @param target - The target of the axis motor.
     *
     */ setAxisMotorTarget(constraint, axis, target) {
        for (const jointId of constraint._pluginData){
            this._hknp.HP_Constraint_SetAxisMotorTarget(jointId, this._constraintAxisToNative(axis), target);
        }
    }
    /**
     * Gets the target of the motor of the given axis of the given constraint.
     *
     * @param constraint - The constraint to get the motor target from.
     * @param axis - The axis of the constraint to get the motor target from.
     * @returns The target of the motor of the given axis of the given constraint.
     *
     */ getAxisMotorTarget(constraint, axis) {
        const firstId = constraint._pluginData && constraint._pluginData[0];
        if (firstId) {
            return this._hknp.HP_Constraint_GetAxisMotorTarget(constraint._pluginData, this._constraintAxisToNative(axis))[1];
        }
        return null;
    }
    /**
     * Sets the maximum force that can be applied by the motor of the given constraint axis.
     * @param constraint - The constraint to set the motor max force for.
     * @param axis - The axis of the constraint to set the motor max force for.
     * @param maxForce - The maximum force that can be applied by the motor.
     *
     */ setAxisMotorMaxForce(constraint, axis, maxForce) {
        for (const jointId of constraint._pluginData){
            this._hknp.HP_Constraint_SetAxisMotorMaxForce(jointId, this._constraintAxisToNative(axis), maxForce);
        }
    }
    /**
     * Gets the maximum force of the motor of the given constraint axis.
     *
     * @param constraint - The constraint to get the motor maximum force from.
     * @param axis - The axis of the constraint to get the motor maximum force from.
     * @returns The maximum force of the motor of the given constraint axis.
     *
     */ getAxisMotorMaxForce(constraint, axis) {
        const firstId = constraint._pluginData && constraint._pluginData[0];
        if (firstId) {
            return this._hknp.HP_Constraint_GetAxisMotorMaxForce(firstId, this._constraintAxisToNative(axis))[1];
        }
        return null;
    }
    /**
     * Disposes a physics constraint.
     *
     * @param constraint - The physics constraint to dispose.
     *
     * This method is useful for releasing the resources associated with a physics constraint, such as
     * the Havok constraint, when it is no longer needed. This is important for avoiding memory leaks.
     */ disposeConstraint(constraint) {
        for (const jointId of constraint._pluginData){
            this._hknp.HP_Constraint_SetEnabled(jointId, false);
            this._hknp.HP_Constraint_Release(jointId);
        }
        constraint._pluginData.length = 0;
    }
    _populateHitData(hitData, result) {
        const hitBody = this._bodies.get(hitData[0][0]);
        result.body = hitBody?.body;
        result.bodyIndex = hitBody?.index;
        const hitShape = this._shapes.get(hitData[1][0]);
        result.shape = hitShape;
        const hitPos = hitData[3];
        const hitNormal = hitData[4];
        const hitTriangle = hitData[5];
        result.setHitData({
            x: hitNormal[0],
            y: hitNormal[1],
            z: hitNormal[2]
        }, {
            x: hitPos[0],
            y: hitPos[1],
            z: hitPos[2]
        }, hitTriangle);
    }
    /**
     * Performs a raycast from a given start point to a given end point and stores the result in a given PhysicsRaycastResult object.
     *
     * @param from - The start point of the raycast.
     * @param to - The end point of the raycast.
     * @param result - The PhysicsRaycastResult object (or array of PhysicsRaycastResults) to store the result of the raycast.
     * @param query - The raycast query options. See [[IRaycastQuery]] for more information.
     *
     * Performs a raycast. It takes in two points, from and to, and a PhysicsRaycastResult object to store the result of the raycast.
     * It then performs the raycast and stores the hit data in the PhysicsRaycastResult object.
     * If result is an empty array, it will be populated with every detected raycast hit.
     * If result is a populated array, it will only fill the PhysicsRaycastResults present in the array.
     */ raycast(from, to, result, query) {
        const queryMembership = query?.membership ?? ~0;
        const queryCollideWith = query?.collideWith ?? ~0;
        const shouldHitTriggers = query?.shouldHitTriggers ?? false;
        const bodyToIgnore = query?.ignoreBody ? [
            BigInt(query.ignoreBody._pluginData.hpBodyId[0])
        ] : [
            BigInt(0)
        ];
        const results = Array.isArray(result) ? result : [
            result
        ];
        for (const raycastResult of results){
            raycastResult.reset(from, to);
        }
        const hkQuery = [
            this._bVecToV3(from),
            this._bVecToV3(to),
            [
                queryMembership,
                queryCollideWith
            ],
            shouldHitTriggers,
            bodyToIgnore
        ];
        const queryCollector = results.length === 1 || !this._multiQueryCollector ? this._queryCollector : this._multiQueryCollector;
        this._hknp.HP_World_CastRayWithCollector(this.world, queryCollector, hkQuery);
        const numHits = this._hknp.HP_QueryCollector_GetNumHits(queryCollector)[1];
        if (numHits <= 0) {
            return;
        }
        if (!results.length) {
            for(let i = 0; i < numHits; i++){
                const raycastResult = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$physicsRaycastResult$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsRaycastResult"]();
                raycastResult.reset(from, to);
                results.push(raycastResult);
            }
        }
        // QueryCollector results are not sorted by distance, so we need to sort them manually
        const hitDatas = new Array(numHits);
        for(let i = 0; i < numHits; i++){
            const [, hitData] = this._hknp.HP_QueryCollector_GetCastRayResult(queryCollector, i)[1];
            const hitPos = hitData[3];
            from.subtractFromFloatsToRef(hitPos[0], hitPos[1], hitPos[2], this._tmpVec3[0]);
            const distance = this._tmpVec3[0].lengthSquared();
            hitDatas[i] = {
                hitData,
                distance: distance
            };
        }
        hitDatas.sort((a, b)=>a.distance - b.distance);
        for(let i = 0; i < Math.min(numHits, results.length); i++){
            const raycastResult = results[i];
            const hitData = hitDatas[i];
            this._populateHitData(hitData.hitData, raycastResult);
            raycastResult.setHitDistance(Math.sqrt(hitData.distance));
        }
    }
    /**
     * Given a point, returns the closest physics
     * body to that point.
     * @param query the query to perform. @see IPhysicsPointProximityQuery
     * @param result contact point on the hit shape, in world space
     */ pointProximity(query, result) {
        const queryMembership = query?.collisionFilter?.membership ?? ~0;
        const queryCollideWith = query?.collisionFilter?.collideWith ?? ~0;
        result.reset();
        const bodyToIgnore = query.ignoreBody ? [
            BigInt(query.ignoreBody._pluginData.hpBodyId[0])
        ] : [
            BigInt(0)
        ];
        const hkQuery = [
            this._bVecToV3(query.position),
            query.maxDistance,
            [
                queryMembership,
                queryCollideWith
            ],
            query.shouldHitTriggers,
            bodyToIgnore
        ];
        this._hknp.HP_World_PointProximityWithCollector(this.world, this._queryCollector, hkQuery);
        if (this._hknp.HP_QueryCollector_GetNumHits(this._queryCollector)[1] > 0) {
            const [distance, hitData] = this._hknp.HP_QueryCollector_GetPointProximityResult(this._queryCollector, 0)[1];
            this._populateHitData(hitData, result);
            result.setHitDistance(distance);
        }
    }
    /**
     * Given a shape in a specific position and orientation, returns the closest point to that shape.
     * @param query the query to perform. @see IPhysicsShapeProximityCastQuery
     * @param inputShapeResult contact point on input shape, in input shape space
     * @param hitShapeResult contact point on hit shape, in world space
     */ shapeProximity(query, inputShapeResult, hitShapeResult) {
        inputShapeResult.reset();
        hitShapeResult.reset();
        const shapeId = query.shape._pluginData;
        const bodyToIgnore = query.ignoreBody ? [
            BigInt(query.ignoreBody._pluginData.hpBodyId[0])
        ] : [
            BigInt(0)
        ];
        const hkQuery = [
            shapeId,
            this._bVecToV3(query.position),
            this._bQuatToV4(query.rotation),
            query.maxDistance,
            query.shouldHitTriggers,
            bodyToIgnore
        ];
        this._hknp.HP_World_ShapeProximityWithCollector(this.world, this._queryCollector, hkQuery);
        if (this._hknp.HP_QueryCollector_GetNumHits(this._queryCollector)[1] > 0) {
            const [distance, hitInputData, hitShapeData] = this._hknp.HP_QueryCollector_GetShapeProximityResult(this._queryCollector, 0)[1];
            this._populateHitData(hitInputData, inputShapeResult);
            this._populateHitData(hitShapeData, hitShapeResult);
            inputShapeResult.setHitDistance(distance);
            hitShapeResult.setHitDistance(distance);
        }
    }
    /**
     * Given a shape in a specific orientation, cast it from the start to end position specified by the query, and return the first hit.
     * @param query the query to perform. @see IPhysicsShapeCastQuery
     * @param inputShapeResult contact point on input shape, in input shape space
     * @param hitShapeResult contact point on hit shape, in world space
     */ shapeCast(query, inputShapeResult, hitShapeResult) {
        inputShapeResult.reset();
        hitShapeResult.reset();
        const shapeId = query.shape._pluginData;
        const bodyToIgnore = query.ignoreBody ? [
            BigInt(query.ignoreBody._pluginData.hpBodyId[0])
        ] : [
            BigInt(0)
        ];
        const hkQuery = [
            shapeId,
            this._bQuatToV4(query.rotation),
            this._bVecToV3(query.startPosition),
            this._bVecToV3(query.endPosition),
            query.shouldHitTriggers,
            bodyToIgnore
        ];
        this._hknp.HP_World_ShapeCastWithCollector(this.world, this._queryCollector, hkQuery);
        if (this._hknp.HP_QueryCollector_GetNumHits(this._queryCollector)[1] > 0) {
            const [fractionAlongRay, hitInputData, hitShapeData] = this._hknp.HP_QueryCollector_GetShapeCastResult(this._queryCollector, 0)[1];
            this._populateHitData(hitInputData, inputShapeResult);
            this._populateHitData(hitShapeData, hitShapeResult);
            inputShapeResult.setHitFraction(fractionAlongRay);
            hitShapeResult.setHitFraction(fractionAlongRay);
        }
    }
    /**
     * Return the collision observable for a particular physics body.
     * @param body the physics body
     * @returns the collision observable for the body
     */ getCollisionObservable(body) {
        const bodyId = body._pluginData.hpBodyId[0];
        let observable = this._bodyCollisionObservable.get(bodyId);
        if (!observable) {
            observable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
            this._bodyCollisionObservable.set(bodyId, observable);
        }
        return observable;
    }
    /**
     * Return the collision ended observable for a particular physics body.
     * @param body the physics body
     * @returns
     */ getCollisionEndedObservable(body) {
        const bodyId = body._pluginData.hpBodyId[0];
        let observable = this._bodyCollisionEndedObservable.get(bodyId);
        if (!observable) {
            observable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
            this._bodyCollisionEndedObservable.set(bodyId, observable);
        }
        return observable;
    }
    /**
     * Enable collision to be reported for a body when a callback is setup on the world
     * @param body the physics body
     * @param enabled whether to enable or disable collision events
     */ setCollisionCallbackEnabled(body, enabled) {
        // Register for collide events by default
        const collideEvents = this._hknp.EventType.COLLISION_STARTED.value | this._hknp.EventType.COLLISION_CONTINUED.value | this._hknp.EventType.COLLISION_FINISHED.value;
        if (body._pluginDataInstances && body._pluginDataInstances.length) {
            for(let index = 0; index < body._pluginDataInstances.length; index++){
                const bodyId = body._pluginDataInstances[index];
                this._hknp.HP_Body_SetEventMask(bodyId.hpBodyId, enabled ? collideEvents : 0);
            }
        } else if (body._pluginData) {
            this._hknp.HP_Body_SetEventMask(body._pluginData.hpBodyId, enabled ? collideEvents : 0);
        }
    }
    /**
     * Enable collision ended to be reported for a body when a callback is setup on the world
     * @param body the physics body
     * @param enabled whether to enable or disable collision ended events
     */ setCollisionEndedCallbackEnabled(body, enabled) {
        // Register to collide ended events
        const pluginRef = this._getPluginReference(body);
        let currentCollideEvents = this._hknp.HP_Body_GetEventMask(pluginRef.hpBodyId)[1];
        // update with the ended mask
        currentCollideEvents = enabled ? currentCollideEvents | this._hknp.EventType.COLLISION_FINISHED.value : currentCollideEvents & ~this._hknp.EventType.COLLISION_FINISHED.value;
        if (body._pluginDataInstances && body._pluginDataInstances.length) {
            for(let index = 0; index < body._pluginDataInstances.length; index++){
                const bodyId = body._pluginDataInstances[index];
                this._hknp.HP_Body_SetEventMask(bodyId.hpBodyId, currentCollideEvents);
            }
        } else if (body._pluginData) {
            this._hknp.HP_Body_SetEventMask(body._pluginData.hpBodyId, currentCollideEvents);
        }
    }
    _notifyTriggers() {
        let eventAddress = this._hknp.HP_World_GetTriggerEvents(this.world)[1];
        const event = new TriggerEvent();
        while(eventAddress){
            TriggerEvent.readToRef(this._hknp.HEAPU8.buffer, eventAddress, event);
            const bodyInfoA = this._bodies.get(event.bodyIdA);
            const bodyInfoB = this._bodies.get(event.bodyIdB);
            // Bodies may have been disposed between events. Check both still exist.
            if (bodyInfoA && bodyInfoB) {
                const triggerCollisionInfo = {
                    collider: bodyInfoA.body,
                    colliderIndex: bodyInfoA.index,
                    collidedAgainst: bodyInfoB.body,
                    collidedAgainstIndex: bodyInfoB.index,
                    type: this._nativeTriggerCollisionValueToCollisionType(event.type)
                };
                this.onTriggerCollisionObservable.notifyObservers(triggerCollisionInfo);
            }
            eventAddress = this._hknp.HP_World_GetNextTriggerEvent(this.world, eventAddress);
        }
    }
    /**
     * Runs thru all detected collisions and filter by body
     */ _notifyCollisions() {
        let eventAddress = this._hknp.HP_World_GetCollisionEvents(this.world)[1];
        const event = new CollisionEvent();
        const worldAddr = Number(this.world);
        while(eventAddress){
            CollisionEvent.readToRef(this._hknp.HEAPU8.buffer, eventAddress, event);
            const bodyInfoA = this._bodies.get(event.contactOnA.bodyId);
            const bodyInfoB = this._bodies.get(event.contactOnB.bodyId);
            // Bodies may have been disposed between events. Check both still exist.
            if (bodyInfoA && bodyInfoB) {
                const collisionInfo = {
                    collider: bodyInfoA.body,
                    colliderIndex: bodyInfoA.index,
                    collidedAgainst: bodyInfoB.body,
                    collidedAgainstIndex: bodyInfoB.index,
                    type: this._nativeCollisionValueToCollisionType(event.type)
                };
                if (collisionInfo.type === "COLLISION_FINISHED" /* PhysicsEventType.COLLISION_FINISHED */ ) {
                    this.onCollisionEndedObservable.notifyObservers(collisionInfo);
                } else {
                    event.contactOnB.position.subtractToRef(event.contactOnA.position, this._tmpVec3[0]);
                    const distance = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Dot(this._tmpVec3[0], event.contactOnA.normal);
                    collisionInfo.point = event.contactOnA.position;
                    collisionInfo.distance = distance;
                    collisionInfo.impulse = event.impulseApplied;
                    collisionInfo.normal = event.contactOnA.normal;
                    this.onCollisionObservable.notifyObservers(collisionInfo);
                }
                if (this._bodyCollisionObservable.size && collisionInfo.type !== "COLLISION_FINISHED" /* PhysicsEventType.COLLISION_FINISHED */ ) {
                    const observableA = this._bodyCollisionObservable.get(event.contactOnA.bodyId);
                    const observableB = this._bodyCollisionObservable.get(event.contactOnB.bodyId);
                    event.contactOnA.position.subtractToRef(event.contactOnB.position, this._tmpVec3[0]);
                    const distance = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Dot(this._tmpVec3[0], event.contactOnB.normal);
                    if (observableA) {
                        observableA.notifyObservers(collisionInfo);
                    }
                    if (observableB) {
                        const collisionInfoB = {
                            collider: bodyInfoB.body,
                            colliderIndex: bodyInfoB.index,
                            collidedAgainst: bodyInfoA.body,
                            collidedAgainstIndex: bodyInfoA.index,
                            point: event.contactOnB.position,
                            distance: distance,
                            impulse: event.impulseApplied,
                            normal: event.contactOnB.normal,
                            type: this._nativeCollisionValueToCollisionType(event.type)
                        };
                        observableB.notifyObservers(collisionInfoB);
                    }
                } else if (this._bodyCollisionEndedObservable.size) {
                    const observableA = this._bodyCollisionEndedObservable.get(event.contactOnA.bodyId);
                    const observableB = this._bodyCollisionEndedObservable.get(event.contactOnB.bodyId);
                    event.contactOnA.position.subtractToRef(event.contactOnB.position, this._tmpVec3[0]);
                    const distance = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Dot(this._tmpVec3[0], event.contactOnB.normal);
                    if (observableA) {
                        observableA.notifyObservers(collisionInfo);
                    }
                    if (observableB) {
                        const collisionInfoB = {
                            collider: bodyInfoB.body,
                            colliderIndex: bodyInfoB.index,
                            collidedAgainst: bodyInfoA.body,
                            collidedAgainstIndex: bodyInfoA.index,
                            point: event.contactOnB.position,
                            distance: distance,
                            impulse: event.impulseApplied,
                            normal: event.contactOnB.normal,
                            type: this._nativeCollisionValueToCollisionType(event.type)
                        };
                        observableB.notifyObservers(collisionInfoB);
                    }
                }
            }
            eventAddress = this._hknp.HP_World_GetNextCollisionEvent(worldAddr, eventAddress);
        }
    }
    /**
     * Gets the number of bodies in the world
     */ get numBodies() {
        return this._hknp.HP_World_GetNumBodies(this.world)[1];
    }
    /**
     * Dispose the world and free resources
     */ dispose() {
        if (this._queryCollector) {
            this._hknp.HP_QueryCollector_Release(this._queryCollector);
            this._queryCollector = undefined;
        }
        if (this._multiQueryCollector) {
            this._hknp.HP_QueryCollector_Release(this._multiQueryCollector);
            this._multiQueryCollector;
        }
        if (this.world) {
            this._hknp.HP_World_Release(this.world);
            this.world = undefined;
        }
    }
    _v3ToBvecRef(v, vec3) {
        vec3.set(v[0], v[1], v[2]);
    }
    _bVecToV3(v) {
        return [
            v._x,
            v._y,
            v._z
        ];
    }
    _bQuatToV4(q) {
        return [
            q._x,
            q._y,
            q._z,
            q._w
        ];
    }
    _constraintMotorTypeToNative(motorType) {
        switch(motorType){
            case 2 /* PhysicsConstraintMotorType.POSITION */ :
                return this._hknp.ConstraintMotorType.POSITION;
            case 1 /* PhysicsConstraintMotorType.VELOCITY */ :
                return this._hknp.ConstraintMotorType.VELOCITY;
        }
        return this._hknp.ConstraintMotorType.NONE;
    }
    _nativeToMotorType(motorType) {
        switch(motorType){
            case this._hknp.ConstraintMotorType.POSITION:
                return 2 /* PhysicsConstraintMotorType.POSITION */ ;
            case this._hknp.ConstraintMotorType.VELOCITY:
                return 1 /* PhysicsConstraintMotorType.VELOCITY */ ;
        }
        return 0 /* PhysicsConstraintMotorType.NONE */ ;
    }
    _materialCombineToNative(mat) {
        switch(mat){
            case 0 /* PhysicsMaterialCombineMode.GEOMETRIC_MEAN */ :
                return this._hknp.MaterialCombine.GEOMETRIC_MEAN;
            case 1 /* PhysicsMaterialCombineMode.MINIMUM */ :
                return this._hknp.MaterialCombine.MINIMUM;
            case 2 /* PhysicsMaterialCombineMode.MAXIMUM */ :
                return this._hknp.MaterialCombine.MAXIMUM;
            case 3 /* PhysicsMaterialCombineMode.ARITHMETIC_MEAN */ :
                return this._hknp.MaterialCombine.ARITHMETIC_MEAN;
            case 4 /* PhysicsMaterialCombineMode.MULTIPLY */ :
                return this._hknp.MaterialCombine.MULTIPLY;
        }
    }
    _nativeToMaterialCombine(mat) {
        switch(mat){
            case this._hknp.MaterialCombine.GEOMETRIC_MEAN:
                return 0 /* PhysicsMaterialCombineMode.GEOMETRIC_MEAN */ ;
            case this._hknp.MaterialCombine.MINIMUM:
                return 1 /* PhysicsMaterialCombineMode.MINIMUM */ ;
            case this._hknp.MaterialCombine.MAXIMUM:
                return 2 /* PhysicsMaterialCombineMode.MAXIMUM */ ;
            case this._hknp.MaterialCombine.ARITHMETIC_MEAN:
                return 3 /* PhysicsMaterialCombineMode.ARITHMETIC_MEAN */ ;
            case this._hknp.MaterialCombine.MULTIPLY:
                return 4 /* PhysicsMaterialCombineMode.MULTIPLY */ ;
            default:
                return undefined;
        }
    }
    _constraintAxisToNative(axId) {
        switch(axId){
            case 0 /* PhysicsConstraintAxis.LINEAR_X */ :
                return this._hknp.ConstraintAxis.LINEAR_X;
            case 1 /* PhysicsConstraintAxis.LINEAR_Y */ :
                return this._hknp.ConstraintAxis.LINEAR_Y;
            case 2 /* PhysicsConstraintAxis.LINEAR_Z */ :
                return this._hknp.ConstraintAxis.LINEAR_Z;
            case 3 /* PhysicsConstraintAxis.ANGULAR_X */ :
                return this._hknp.ConstraintAxis.ANGULAR_X;
            case 4 /* PhysicsConstraintAxis.ANGULAR_Y */ :
                return this._hknp.ConstraintAxis.ANGULAR_Y;
            case 5 /* PhysicsConstraintAxis.ANGULAR_Z */ :
                return this._hknp.ConstraintAxis.ANGULAR_Z;
            case 6 /* PhysicsConstraintAxis.LINEAR_DISTANCE */ :
                return this._hknp.ConstraintAxis.LINEAR_DISTANCE;
        }
    }
    _nativeToLimitMode(mode) {
        switch(mode){
            case this._hknp.ConstraintAxisLimitMode.FREE:
                return 0 /* PhysicsConstraintAxisLimitMode.FREE */ ;
            case this._hknp.ConstraintAxisLimitMode.LIMITED:
                return 1 /* PhysicsConstraintAxisLimitMode.LIMITED */ ;
            case this._hknp.ConstraintAxisLimitMode.LOCKED:
                return 2 /* PhysicsConstraintAxisLimitMode.LOCKED */ ;
        }
        return 0 /* PhysicsConstraintAxisLimitMode.FREE */ ;
    }
    _limitModeToNative(mode) {
        switch(mode){
            case 0 /* PhysicsConstraintAxisLimitMode.FREE */ :
                return this._hknp.ConstraintAxisLimitMode.FREE;
            case 1 /* PhysicsConstraintAxisLimitMode.LIMITED */ :
                return this._hknp.ConstraintAxisLimitMode.LIMITED;
            case 2 /* PhysicsConstraintAxisLimitMode.LOCKED */ :
                return this._hknp.ConstraintAxisLimitMode.LOCKED;
        }
    }
    _nativeCollisionValueToCollisionType(type) {
        switch(type){
            case this._hknp.EventType.COLLISION_STARTED.value:
                return "COLLISION_STARTED" /* PhysicsEventType.COLLISION_STARTED */ ;
            case this._hknp.EventType.COLLISION_FINISHED.value:
                return "COLLISION_FINISHED" /* PhysicsEventType.COLLISION_FINISHED */ ;
            case this._hknp.EventType.COLLISION_CONTINUED.value:
                return "COLLISION_CONTINUED" /* PhysicsEventType.COLLISION_CONTINUED */ ;
        }
        return "COLLISION_STARTED" /* PhysicsEventType.COLLISION_STARTED */ ;
    }
    _nativeTriggerCollisionValueToCollisionType(type) {
        switch(type){
            case 8:
                return "TRIGGER_ENTERED" /* PhysicsEventType.TRIGGER_ENTERED */ ;
            case 16:
                return "TRIGGER_EXITED" /* PhysicsEventType.TRIGGER_EXITED */ ;
        }
        return "TRIGGER_ENTERED" /* PhysicsEventType.TRIGGER_ENTERED */ ;
    }
} //# sourceMappingURL=havokPlugin.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/v2/Plugins/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$Plugins$2f$havokPlugin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/v2/Plugins/havokPlugin.js [app-ssr] (ecmascript)"); //# sourceMappingURL=index.js.map
;
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/v2/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/* eslint-disable @typescript-eslint/no-restricted-imports */ __turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$physicsEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/v2/physicsEngine.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$physicsBody$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/v2/physicsBody.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$physicsShape$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/v2/physicsShape.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$physicsConstraint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/v2/physicsConstraint.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$physicsMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/v2/physicsMaterial.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$physicsAggregate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/v2/physicsAggregate.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$ragdoll$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/v2/ragdoll.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$IPhysicsEnginePlugin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/v2/IPhysicsEnginePlugin.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$characterController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/v2/characterController.js [app-ssr] (ecmascript)");
/* eslint-disable @typescript-eslint/no-restricted-imports */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$Plugins$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/v2/Plugins/index.js [app-ssr] (ecmascript) <locals>"); //# sourceMappingURL=index.js.map
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
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/joinedPhysicsEngineComponent.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PhysicsEngineSceneComponent",
    ()=>PhysicsEngineSceneComponent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/logger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/observable.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$sceneComponent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/sceneComponent.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$scene$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/scene.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$physicsEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/v1/physicsEngine.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$physicsEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/v2/physicsEngine.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
/**
 * Gets the current physics engine
 * @returns a IPhysicsEngine or null if none attached
 */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$scene$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Scene"].prototype.getPhysicsEngine = function() {
    return this._physicsEngine ?? null;
};
/**
 * Enables physics to the current scene
 * @param gravity defines the scene's gravity for the physics engine
 * @param plugin defines the physics engine to be used. defaults to CannonJS.
 * @returns a boolean indicating if the physics engine was initialized
 */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$scene$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Scene"].prototype.enablePhysics = function(gravity = null, plugin) {
    if (this._physicsEngine) {
        return true;
    }
    // Register the component to the scene
    let component = this._getComponent(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$sceneComponent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SceneComponentConstants"].NAME_PHYSICSENGINE);
    if (!component) {
        component = new PhysicsEngineSceneComponent(this);
        this._addComponent(component);
    }
    try {
        if (!plugin || plugin?.getPluginVersion() === 1) {
            this._physicsEngine = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$physicsEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsEngine"](gravity, plugin);
        } else if (plugin?.getPluginVersion() === 2) {
            this._physicsEngine = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$physicsEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsEngine"](gravity, plugin);
        } else {
            throw new Error("Unsupported Physics plugin version.");
        }
        this._physicsTimeAccumulator = 0;
        return true;
    } catch (e) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Error(e.message);
        return false;
    }
};
/**
 * Disables and disposes the physics engine associated with the scene
 */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$scene$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Scene"].prototype.disablePhysicsEngine = function() {
    if (!this._physicsEngine) {
        return;
    }
    this._physicsEngine.dispose();
    this._physicsEngine = null;
};
/**
 * Gets a boolean indicating if there is an active physics engine
 * @returns a boolean indicating if there is an active physics engine
 */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$scene$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Scene"].prototype.isPhysicsEnabled = function() {
    return this._physicsEngine !== undefined;
};
/**
 * Deletes a physics compound impostor
 * @param compound defines the compound to delete
 */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$scene$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Scene"].prototype.deleteCompoundImpostor = function(compound) {
    const mesh = compound.parts[0].mesh;
    if (mesh.physicsImpostor) {
        mesh.physicsImpostor.dispose();
        mesh.physicsImpostor = null;
    }
};
/**
 * @internal
 */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$scene$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Scene"].prototype._advancePhysicsEngineStep = function(step) {
    if (this._physicsEngine) {
        const subTime = this._physicsEngine.getSubTimeStep();
        if (subTime > 0) {
            this._physicsTimeAccumulator += step;
            while(this._physicsTimeAccumulator > subTime){
                this.onBeforePhysicsObservable.notifyObservers(this);
                this._physicsEngine._step(subTime / 1000);
                this.onAfterPhysicsObservable.notifyObservers(this);
                this._physicsTimeAccumulator -= subTime;
            }
        } else {
            this.onBeforePhysicsObservable.notifyObservers(this);
            this._physicsEngine._step(step / 1000);
            this.onAfterPhysicsObservable.notifyObservers(this);
        }
    }
};
class PhysicsEngineSceneComponent {
    /**
     * Creates a new instance of the component for the given scene
     * @param scene Defines the scene to register the component in
     */ constructor(scene){
        /**
         * The component name helpful to identify the component in the list of scene components.
         */ this.name = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$sceneComponent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SceneComponentConstants"].NAME_PHYSICSENGINE;
        this.scene = scene;
        this.scene.onBeforePhysicsObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
        this.scene.onAfterPhysicsObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
        // Replace the function used to get the deterministic frame time
        this.scene.getDeterministicFrameTime = ()=>{
            if (this.scene._physicsEngine) {
                return this.scene._physicsEngine.getTimeStep() * 1000;
            }
            return 1000.0 / 60.0;
        };
    }
    /**
     * Registers the component in a given scene
     */ register() {}
    /**
     * Rebuilds the elements related to this component in case of
     * context lost for instance.
     */ rebuild() {
    // Nothing to do for this component
    }
    /**
     * Disposes the component and the associated resources
     */ dispose() {
        this.scene.onBeforePhysicsObservable.clear();
        this.scene.onAfterPhysicsObservable.clear();
        if (this.scene._physicsEngine) {
            this.scene.disablePhysicsEngine();
        }
    }
} //# sourceMappingURL=joinedPhysicsEngineComponent.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/v2/physicsEngineComponent.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$transformNode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/transformNode.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$joinedPhysicsEngineComponent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/joinedPhysicsEngineComponent.js [app-ssr] (ecmascript)");
;
;
Object.defineProperty(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$transformNode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TransformNode"].prototype, "physicsBody", {
    get: function() {
        return this._physicsBody;
    },
    set: function(value) {
        if (this._physicsBody === value) {
            return;
        }
        if (this._disposePhysicsObserver) {
            this.onDisposeObservable.remove(this._disposePhysicsObserver);
        }
        this._physicsBody = value;
        if (value) {
            this._disposePhysicsObserver = this.onDisposeObservable.add(()=>{
                // Physics
                if (this.physicsBody) {
                    this.physicsBody.dispose();
                    this.physicsBody = null;
                }
            });
        }
    },
    enumerable: true,
    configurable: true
});
/**
 * Gets the current physics body
 * @returns a physics body or null
 */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$transformNode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TransformNode"].prototype.getPhysicsBody = function() {
    return this.physicsBody;
};
/**
 * Apply a physic impulse to the mesh
 * @param force defines the force to apply
 * @param contactPoint defines where to apply the force
 * @returns the current mesh
 * @see https://doc.babylonjs.com/features/featuresDeepDive/physics/usingPhysicsEngine
 */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$transformNode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TransformNode"].prototype.applyImpulse = function(force, contactPoint) {
    if (!this.physicsBody) {
        throw new Error("No Physics Body for TransformNode");
    }
    this.physicsBody.applyImpulse(force, contactPoint);
    return this;
};
/**
 * Apply a physic angular impulse to the mesh
 * @param angularImpulse defines the torque to apply
 * @returns the current mesh
 * @see https://doc.babylonjs.com/features/featuresDeepDive/physics/usingPhysicsEngine
 */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$transformNode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TransformNode"].prototype.applyAngularImpulse = function(angularImpulse) {
    if (!this.physicsBody) {
        throw new Error("No Physics Body for TransformNode");
    }
    this.physicsBody.applyAngularImpulse(angularImpulse);
    return this;
}; //# sourceMappingURL=physicsEngineComponent.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/physicsEngineComponent.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// back compat
__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$joinedPhysicsEngineComponent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/joinedPhysicsEngineComponent.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$physicsEngineComponent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/v1/physicsEngineComponent.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$physicsEngineComponent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/v2/physicsEngineComponent.js [app-ssr] (ecmascript)"); //# sourceMappingURL=physicsEngineComponent.js.map
;
;
;
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/physicsHelper.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PhysicsHelper",
    ()=>PhysicsHelper,
    "PhysicsRadialExplosionEventOptions",
    ()=>PhysicsRadialExplosionEventOptions,
    "PhysicsRadialImpulseFalloff",
    ()=>PhysicsRadialImpulseFalloff,
    "PhysicsUpdraftEventOptions",
    ()=>PhysicsUpdraftEventOptions,
    "PhysicsUpdraftMode",
    ()=>PhysicsUpdraftMode,
    "PhysicsVortexEventOptions",
    ()=>PhysicsVortexEventOptions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/logger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$sphereBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/sphereBuilder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$cylinderBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/cylinderBuilder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$ray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Culling/ray.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$ray$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Culling/ray.core.js [app-ssr] (ecmascript)");
;
;
;
;
;
class HelperTools {
    /*
     * Gets the hit contact point between a mesh and a ray. The method varies between
     * the different plugin versions; V1 uses a mesh intersection, V2 uses the physics body instance/object center (to avoid a raycast and improve perf).
     */ static GetContactPointToRef(mesh, origin, direction, result, instanceIndex) {
        const engine = mesh.getScene().getPhysicsEngine();
        const pluginVersion = engine?.getPluginVersion();
        if (pluginVersion === 1) {
            const ray = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$ray$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Ray"](origin, direction);
            const hit = ray.intersectsMesh(mesh);
            if (hit.hit && hit.pickedPoint) {
                result.copyFrom(hit.pickedPoint);
                return true;
            }
        } else if (pluginVersion === 2) {
            mesh.physicsBody.getObjectCenterWorldToRef(result, instanceIndex);
            return true;
        }
        return false;
    }
    /**
     * Checks if a body will be affected by forces
     * @param body the body to check
     * @param instanceIndex for instanced bodies, the index of the instance to check
     * @returns
     */ static HasAppliedForces(body, instanceIndex) {
        return body.getMotionType(instanceIndex) === 0 /* PhysicsMotionType.STATIC */  || (body.getMassProperties(instanceIndex)?.mass ?? 0) === 0 || body.transformNode?.getTotalVertices() === 0;
    }
    /**
     * Checks if a point is inside a cylinder
     * @param point point to check
     * @param origin cylinder origin on the bottom
     * @param radius cylinder radius
     * @param height cylinder height
     * @returns
     */ static IsInsideCylinder(point, origin, radius, height) {
        const distance = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0];
        point.subtractToRef(origin, distance);
        return Math.abs(distance.x) <= radius && Math.abs(distance.z) <= radius && distance.y >= 0 && distance.y <= height;
    }
}
class PhysicsHelper {
    /**
     * Initializes the Physics helper
     * @param scene Babylon.js scene
     */ constructor(scene){
        this._hitData = {
            force: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](),
            contactPoint: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](),
            distanceFromOrigin: 0
        };
        this._scene = scene;
        this._physicsEngine = this._scene.getPhysicsEngine();
        if (!this._physicsEngine) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Warn("Physics engine not enabled. Please enable the physics before you can use the methods.");
            return;
        }
    }
    /**
     * Applies a radial explosion impulse
     * @param origin the origin of the explosion
     * @param radiusOrEventOptions the radius or the options of radial explosion
     * @param strength the explosion strength
     * @param falloff possible options: Constant & Linear. Defaults to Constant
     * @returns A physics radial explosion event, or null
     */ applyRadialExplosionImpulse(origin, radiusOrEventOptions, strength, falloff) {
        if (!this._physicsEngine) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Warn("Physics engine not enabled. Please enable the physics before you call this method.");
            return null;
        }
        if (this._physicsEngine.getPluginVersion() === 1 && this._physicsEngine.getImpostors().length === 0) {
            return null;
        }
        if (this._physicsEngine.getPluginVersion() === 2 && this._physicsEngine.getBodies().length === 0) {
            return null;
        }
        let useCallback = false;
        if (typeof radiusOrEventOptions === "number") {
            const r = radiusOrEventOptions;
            radiusOrEventOptions = new PhysicsRadialExplosionEventOptions();
            radiusOrEventOptions.radius = r;
            radiusOrEventOptions.strength = strength ?? radiusOrEventOptions.strength;
            radiusOrEventOptions.falloff = falloff ?? radiusOrEventOptions.falloff;
        } else {
            useCallback = !!(radiusOrEventOptions.affectedImpostorsCallback || radiusOrEventOptions.affectedBodiesCallback);
        }
        const event = new PhysicsRadialExplosionEvent(this._scene, radiusOrEventOptions);
        const hitData = this._hitData;
        if (this._physicsEngine.getPluginVersion() === 1) {
            const affectedImpostorsWithData = Array();
            const impostors = this._physicsEngine.getImpostors();
            for (const impostor of impostors){
                if (!event.getImpostorHitData(impostor, origin, hitData)) {
                    continue;
                }
                impostor.applyImpulse(hitData.force, hitData.contactPoint);
                if (useCallback) {
                    affectedImpostorsWithData.push({
                        impostor: impostor,
                        hitData: this._copyPhysicsHitData(hitData)
                    });
                }
            }
            event.triggerAffectedImpostorsCallback(affectedImpostorsWithData);
        } else {
            this._applicationForBodies(event, origin, hitData, useCallback, (body, hitData)=>{
                body.applyImpulse(hitData.force, hitData.contactPoint, hitData.instanceIndex);
            });
        }
        event.dispose(false);
        return event;
    }
    /**
     * Applies a radial explosion force
     * @param origin the origin of the explosion
     * @param radiusOrEventOptions the radius or the options of radial explosion
     * @param strength the explosion strength
     * @param falloff possible options: Constant & Linear. Defaults to Constant
     * @returns A physics radial explosion event, or null
     */ applyRadialExplosionForce(origin, radiusOrEventOptions, strength, falloff) {
        if (!this._physicsEngine) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Warn("Physics engine not enabled. Please enable the physics before you call the PhysicsHelper.");
            return null;
        }
        if (this._physicsEngine.getPluginVersion() === 1 && this._physicsEngine.getImpostors().length === 0) {
            return null;
        }
        if (this._physicsEngine.getPluginVersion() === 2 && this._physicsEngine.getBodies().length === 0) {
            return null;
        }
        let useCallback = false;
        if (typeof radiusOrEventOptions === "number") {
            const r = radiusOrEventOptions;
            radiusOrEventOptions = new PhysicsRadialExplosionEventOptions();
            radiusOrEventOptions.radius = r;
            radiusOrEventOptions.strength = strength ?? radiusOrEventOptions.strength;
            radiusOrEventOptions.falloff = falloff ?? radiusOrEventOptions.falloff;
        } else {
            useCallback = !!(radiusOrEventOptions.affectedImpostorsCallback || radiusOrEventOptions.affectedBodiesCallback);
        }
        const event = new PhysicsRadialExplosionEvent(this._scene, radiusOrEventOptions);
        const hitData = this._hitData;
        if (this._physicsEngine.getPluginVersion() === 1) {
            const affectedImpostorsWithData = Array();
            const impostors = this._physicsEngine.getImpostors();
            for (const impostor of impostors){
                if (!event.getImpostorHitData(impostor, origin, hitData)) {
                    continue;
                }
                impostor.applyForce(hitData.force, hitData.contactPoint);
                if (useCallback) {
                    affectedImpostorsWithData.push({
                        impostor: impostor,
                        hitData: this._copyPhysicsHitData(hitData)
                    });
                }
            }
            event.triggerAffectedImpostorsCallback(affectedImpostorsWithData);
        } else {
            this._applicationForBodies(event, origin, hitData, useCallback, (body, hitData)=>{
                body.applyForce(hitData.force, hitData.contactPoint, hitData.instanceIndex);
            });
        }
        event.dispose(false);
        return event;
    }
    _applicationForBodies(event, origin, hitData, useCallback, fnApplication) {
        const affectedBodiesWithData = Array();
        const bodies = this._physicsEngine.getBodies();
        for (const body of bodies){
            body.iterateOverAllInstances((body, instanceIndex)=>{
                if (!event.getBodyHitData(body, origin, hitData, instanceIndex)) {
                    return;
                }
                fnApplication(body, hitData);
                if (useCallback) {
                    affectedBodiesWithData.push({
                        body: body,
                        hitData: this._copyPhysicsHitData(hitData)
                    });
                }
            });
        }
        event.triggerAffectedBodiesCallback(affectedBodiesWithData);
    }
    /**
     * Creates a gravitational field
     * @param origin the origin of the gravitational field
     * @param radiusOrEventOptions the radius or the options of radial gravitational field
     * @param strength the gravitational field strength
     * @param falloff possible options: Constant & Linear. Defaults to Constant
     * @returns A physics gravitational field event, or null
     */ gravitationalField(origin, radiusOrEventOptions, strength, falloff) {
        if (!this._physicsEngine) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Warn("Physics engine not enabled. Please enable the physics before you call the PhysicsHelper.");
            return null;
        }
        if (this._physicsEngine.getPluginVersion() === 1 && this._physicsEngine.getImpostors().length === 0) {
            return null;
        }
        if (this._physicsEngine.getPluginVersion() === 2 && this._physicsEngine.getBodies().length === 0) {
            return null;
        }
        if (typeof radiusOrEventOptions === "number") {
            const r = radiusOrEventOptions;
            radiusOrEventOptions = new PhysicsRadialExplosionEventOptions();
            radiusOrEventOptions.radius = r;
            radiusOrEventOptions.strength = strength ?? radiusOrEventOptions.strength;
            radiusOrEventOptions.falloff = falloff ?? radiusOrEventOptions.falloff;
        }
        const event = new PhysicsGravitationalFieldEvent(this, this._scene, origin, radiusOrEventOptions);
        event.dispose(false);
        return event;
    }
    /**
     * Creates a physics updraft event
     * @param origin the origin of the updraft
     * @param radiusOrEventOptions the radius or the options of the updraft
     * @param strength the strength of the updraft
     * @param height the height of the updraft
     * @param updraftMode possible options: Center & Perpendicular. Defaults to Center
     * @returns A physics updraft event, or null
     */ updraft(origin, radiusOrEventOptions, strength, height, updraftMode) {
        if (!this._physicsEngine) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Warn("Physics engine not enabled. Please enable the physics before you call the PhysicsHelper.");
            return null;
        }
        if (this._physicsEngine.getPluginVersion() === 1 && this._physicsEngine.getImpostors().length === 0) {
            return null;
        }
        if (this._physicsEngine.getPluginVersion() === 2 && this._physicsEngine.getBodies().length === 0) {
            return null;
        }
        if (typeof radiusOrEventOptions === "number") {
            const r = radiusOrEventOptions;
            radiusOrEventOptions = new PhysicsUpdraftEventOptions();
            radiusOrEventOptions.radius = r;
            radiusOrEventOptions.strength = strength ?? radiusOrEventOptions.strength;
            radiusOrEventOptions.height = height ?? radiusOrEventOptions.height;
            radiusOrEventOptions.updraftMode = updraftMode ?? radiusOrEventOptions.updraftMode;
        }
        const event = new PhysicsUpdraftEvent(this._scene, origin, radiusOrEventOptions);
        event.dispose(false);
        return event;
    }
    /**
     * Creates a physics vortex event
     * @param origin the of the vortex
     * @param radiusOrEventOptions the radius or the options of the vortex
     * @param strength the strength of the vortex
     * @param height   the height of the vortex
     * @returns a Physics vortex event, or null
     * A physics vortex event or null
     */ vortex(origin, radiusOrEventOptions, strength, height) {
        if (!this._physicsEngine) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Warn("Physics engine not enabled. Please enable the physics before you call the PhysicsHelper.");
            return null;
        }
        if (this._physicsEngine.getPluginVersion() === 1 && this._physicsEngine.getImpostors().length === 0) {
            return null;
        }
        if (this._physicsEngine.getPluginVersion() === 2 && this._physicsEngine.getBodies().length === 0) {
            return null;
        }
        if (typeof radiusOrEventOptions === "number") {
            const r = radiusOrEventOptions;
            radiusOrEventOptions = new PhysicsVortexEventOptions();
            radiusOrEventOptions.radius = r;
            radiusOrEventOptions.strength = strength ?? radiusOrEventOptions.strength;
            radiusOrEventOptions.height = height ?? radiusOrEventOptions.height;
        }
        const event = new PhysicsVortexEvent(this._scene, origin, radiusOrEventOptions);
        event.dispose(false);
        return event;
    }
    _copyPhysicsHitData(data) {
        return {
            force: data.force.clone(),
            contactPoint: data.contactPoint.clone(),
            distanceFromOrigin: data.distanceFromOrigin,
            instanceIndex: data.instanceIndex
        };
    }
}
/**
 * Represents a physics radial explosion event
 */ class PhysicsRadialExplosionEvent {
    /**
     * Initializes a radial explosion event
     * @param _scene BabylonJS scene
     * @param _options The options for the vortex event
     */ constructor(_scene, _options){
        this._scene = _scene;
        this._options = _options;
        this._dataFetched = false; // check if the data has been fetched. If not, do cleanup
        this._options = {
            ...new PhysicsRadialExplosionEventOptions(),
            ...this._options
        };
    }
    /**
     * Returns the data related to the radial explosion event (sphere).
     * @returns The radial explosion event data
     */ getData() {
        this._dataFetched = true;
        return {
            sphere: this._sphere
        };
    }
    _getHitData(mesh, center, origin, data) {
        const direction = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0];
        direction.copyFrom(center).subtractInPlace(origin);
        const contactPoint = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[1];
        const hasContactPoint = HelperTools.GetContactPointToRef(mesh, origin, direction, contactPoint, data.instanceIndex);
        if (!hasContactPoint) {
            return false;
        }
        const distanceFromOrigin = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Distance(origin, contactPoint);
        if (distanceFromOrigin > this._options.radius) {
            return false;
        }
        const multiplier = this._options.falloff === 0 /* PhysicsRadialImpulseFalloff.Constant */  ? this._options.strength : this._options.strength * (1 - distanceFromOrigin / this._options.radius);
        // Direction x multiplier equals force
        direction.scaleInPlace(multiplier);
        data.force.copyFrom(direction);
        data.contactPoint.copyFrom(contactPoint);
        data.distanceFromOrigin = distanceFromOrigin;
        return true;
    }
    /**
     * Returns the force and contact point of the body or false, if the body is not affected by the force/impulse.
     * @param body A physics body where the transform node is an AbstractMesh
     * @param origin the origin of the explosion
     * @param data the data of the hit
     * @param instanceIndex the instance index of the body
     * @returns if there was a hit
     */ getBodyHitData(body, origin, data, instanceIndex) {
        // No force will be applied in these cases, so we skip calculation
        if (HelperTools.HasAppliedForces(body, instanceIndex)) {
            return false;
        }
        const mesh = body.transformNode;
        const bodyObjectCenter = body.getObjectCenterWorld(instanceIndex);
        data.instanceIndex = instanceIndex;
        return this._getHitData(mesh, bodyObjectCenter, origin, data);
    }
    /**
     * Returns the force and contact point of the impostor or false, if the impostor is not affected by the force/impulse.
     * @param impostor A physics imposter
     * @param origin the origin of the explosion
     * @param data the data of the hit
     * @returns A physics force and contact point, or null
     */ getImpostorHitData(impostor, origin, data) {
        if (impostor.mass === 0) {
            return false;
        }
        if (impostor.object.getClassName() !== "Mesh" && impostor.object.getClassName() !== "InstancedMesh") {
            return false;
        }
        const mesh = impostor.object;
        if (!this._intersectsWithSphere(mesh, origin, this._options.radius)) {
            return false;
        }
        const impostorObjectCenter = impostor.getObjectCenter();
        this._getHitData(mesh, impostorObjectCenter, origin, data);
        return true;
    }
    /**
     * Triggers affected impostors callbacks
     * @param affectedImpostorsWithData defines the list of affected impostors (including associated data)
     */ triggerAffectedImpostorsCallback(affectedImpostorsWithData) {
        if (this._options.affectedImpostorsCallback) {
            this._options.affectedImpostorsCallback(affectedImpostorsWithData);
        }
    }
    /**
     * Triggers affected bodies callbacks
     * @param affectedBodiesWithData defines the list of affected bodies (including associated data)
     */ triggerAffectedBodiesCallback(affectedBodiesWithData) {
        if (this._options.affectedBodiesCallback) {
            this._options.affectedBodiesCallback(affectedBodiesWithData);
        }
    }
    /**
     * Disposes the sphere.
     * @param force Specifies if the sphere should be disposed by force
     */ dispose(force = true) {
        if (this._sphere) {
            if (force) {
                this._sphere.dispose();
            } else {
                setTimeout(()=>{
                    if (!this._dataFetched) {
                        this._sphere.dispose();
                    }
                }, 0);
            }
        }
    }
    /*** Helpers ***/ _prepareSphere() {
        if (!this._sphere) {
            this._sphere = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$sphereBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreateSphere"])("radialExplosionEventSphere", this._options.sphere, this._scene);
            this._sphere.isVisible = false;
        }
    }
    _intersectsWithSphere(mesh, origin, radius) {
        this._prepareSphere();
        this._sphere.position = origin;
        this._sphere.scaling.setAll(radius * 2);
        this._sphere._updateBoundingInfo();
        this._sphere.computeWorldMatrix(true);
        return this._sphere.intersectsMesh(mesh, true);
    }
}
/**
 * Represents a gravitational field event
 */ class PhysicsGravitationalFieldEvent {
    /**
     * Initializes the physics gravitational field event
     * @param _physicsHelper A physics helper
     * @param _scene BabylonJS scene
     * @param _origin The origin position of the gravitational field event
     * @param _options The options for the vortex event
     */ constructor(_physicsHelper, _scene, _origin, _options){
        this._physicsHelper = _physicsHelper;
        this._scene = _scene;
        this._origin = _origin;
        this._options = _options;
        this._dataFetched = false; // check if the has been fetched the data. If not, do cleanup
        this._options = {
            ...new PhysicsRadialExplosionEventOptions(),
            ...this._options
        };
        this._tickCallback = ()=>this._tick();
        this._options.strength = this._options.strength * -1;
    }
    /**
     * Returns the data related to the gravitational field event (sphere).
     * @returns A gravitational field event
     */ getData() {
        this._dataFetched = true;
        return {
            sphere: this._sphere
        };
    }
    /**
     * Enables the gravitational field.
     */ enable() {
        this._tickCallback.call(this);
        this._scene.registerBeforeRender(this._tickCallback);
    }
    /**
     * Disables the gravitational field.
     */ disable() {
        this._scene.unregisterBeforeRender(this._tickCallback);
    }
    /**
     * Disposes the sphere.
     * @param force The force to dispose from the gravitational field event
     */ dispose(force = true) {
        if (!this._sphere) {
            return;
        }
        if (force) {
            this._sphere.dispose();
        } else {
            setTimeout(()=>{
                if (!this._dataFetched) {
                    this._sphere.dispose();
                }
            }, 0);
        }
    }
    _tick() {
        // Since the params won't change, we fetch the event only once
        if (this._sphere) {
            this._physicsHelper.applyRadialExplosionForce(this._origin, this._options);
        } else {
            const radialExplosionEvent = this._physicsHelper.applyRadialExplosionForce(this._origin, this._options);
            if (radialExplosionEvent) {
                this._sphere = radialExplosionEvent.getData().sphere?.clone("radialExplosionEventSphereClone");
            }
        }
    }
}
/**
 * Represents a physics updraft event
 */ class PhysicsUpdraftEvent {
    /**
     * Initializes the physics updraft event
     * @param _scene BabylonJS scene
     * @param _origin The origin position of the updraft
     * @param _options The options for the updraft event
     */ constructor(_scene, _origin, _options){
        this._scene = _scene;
        this._origin = _origin;
        this._options = _options;
        this._originTop = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Zero(); // the most upper part of the cylinder
        this._originDirection = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Zero(); // used if the updraftMode is perpendicular
        this._cylinderPosition = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Zero(); // to keep the cylinders position, because normally the origin is in the center and not on the bottom
        this._dataFetched = false; // check if the has been fetched the data. If not, do cleanup
        this._physicsEngine = this._scene.getPhysicsEngine();
        this._options = {
            ...new PhysicsUpdraftEventOptions(),
            ...this._options
        };
        this._origin.addToRef(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](0, this._options.height / 2, 0), this._cylinderPosition);
        this._origin.addToRef(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](0, this._options.height, 0), this._originTop);
        if (this._options.updraftMode === 1 /* PhysicsUpdraftMode.Perpendicular */ ) {
            this._originDirection = this._origin.subtract(this._originTop).normalize();
        }
        this._tickCallback = ()=>this._tick();
        if (this._physicsEngine.getPluginVersion() === 1) {
            this._prepareCylinder();
        }
    }
    /**
     * Returns the data related to the updraft event (cylinder).
     * @returns A physics updraft event
     */ getData() {
        this._dataFetched = true;
        return {
            cylinder: this._cylinder
        };
    }
    /**
     * Enables the updraft.
     */ enable() {
        this._tickCallback.call(this);
        this._scene.registerBeforeRender(this._tickCallback);
    }
    /**
     * Disables the updraft.
     */ disable() {
        this._scene.unregisterBeforeRender(this._tickCallback);
    }
    /**
     * Disposes the cylinder.
     * @param force Specifies if the updraft should be disposed by force
     */ dispose(force = true) {
        if (!this._cylinder) {
            return;
        }
        if (force) {
            this._cylinder.dispose();
            this._cylinder = undefined;
        } else {
            setTimeout(()=>{
                if (!this._dataFetched && this._cylinder) {
                    this._cylinder.dispose();
                    this._cylinder = undefined;
                }
            }, 0);
        }
    }
    _getHitData(center, data) {
        let direction;
        if (this._options.updraftMode === 1 /* PhysicsUpdraftMode.Perpendicular */ ) {
            direction = this._originDirection;
        } else {
            direction = center.subtract(this._originTop);
        }
        const distanceFromOrigin = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Distance(this._origin, center);
        const multiplier = this._options.strength * -1;
        const force = direction.multiplyByFloats(multiplier, multiplier, multiplier);
        data.force.copyFrom(force);
        data.contactPoint.copyFrom(center);
        data.distanceFromOrigin = distanceFromOrigin;
    }
    _getBodyHitData(body, data, instanceIndex) {
        if (HelperTools.HasAppliedForces(body)) {
            return false;
        }
        const center = body.getObjectCenterWorld(instanceIndex);
        if (!HelperTools.IsInsideCylinder(center, this._origin, this._options.radius, this._options.height)) {
            return false;
        }
        data.instanceIndex = instanceIndex;
        this._getHitData(center, data);
        return true;
    }
    _getImpostorHitData(impostor, data) {
        if (impostor.mass === 0) {
            return false;
        }
        const impostorObject = impostor.object;
        if (!this._intersectsWithCylinder(impostorObject)) {
            return false;
        }
        const center = impostor.getObjectCenter();
        this._getHitData(center, data);
        return true;
    }
    _tick() {
        const hitData = PhysicsUpdraftEvent._HitData;
        if (this._physicsEngine.getPluginVersion() === 1) {
            const impostors = this._physicsEngine.getImpostors();
            for (const impostor of impostors){
                if (!this._getImpostorHitData(impostor, hitData)) {
                    continue;
                }
                impostor.applyForce(hitData.force, hitData.contactPoint);
            }
        } else {
            // V2
            const bodies = this._physicsEngine.getBodies();
            for (const body of bodies){
                body.iterateOverAllInstances((body, instanceIndex)=>{
                    if (!this._getBodyHitData(body, hitData, instanceIndex)) {
                        return;
                    }
                    body.applyForce(hitData.force, hitData.contactPoint, hitData.instanceIndex);
                });
            }
        }
    }
    /*** Helpers ***/ _prepareCylinder() {
        if (!this._cylinder) {
            this._cylinder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$cylinderBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreateCylinder"])("updraftEventCylinder", {
                height: this._options.height,
                diameter: this._options.radius * 2
            }, this._scene);
            this._cylinder.isVisible = false;
        }
    }
    _intersectsWithCylinder(mesh) {
        if (!this._cylinder) {
            return false;
        }
        this._cylinder.position = this._cylinderPosition;
        return this._cylinder.intersectsMesh(mesh, true);
    }
}
PhysicsUpdraftEvent._HitData = {
    force: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](),
    contactPoint: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](),
    distanceFromOrigin: 0
};
/**
 * Represents a physics vortex event
 */ class PhysicsVortexEvent {
    /**
     * Initializes the physics vortex event
     * @param _scene The BabylonJS scene
     * @param _origin The origin position of the vortex
     * @param _options The options for the vortex event
     */ constructor(_scene, _origin, _options){
        this._scene = _scene;
        this._origin = _origin;
        this._options = _options;
        this._originTop = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Zero(); // the most upper part of the cylinder
        this._cylinderPosition = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Zero(); // to keep the cylinders position, because normally the origin is in the center and not on the bottom
        this._dataFetched = false; // check if the has been fetched the data. If not, do cleanup
        this._physicsEngine = this._scene.getPhysicsEngine();
        this._options = {
            ...new PhysicsVortexEventOptions(),
            ...this._options
        };
        this._origin.addToRef(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](0, this._options.height / 2, 0), this._cylinderPosition);
        this._origin.addToRef(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](0, this._options.height, 0), this._originTop);
        this._tickCallback = ()=>this._tick();
        if (this._physicsEngine.getPluginVersion() === 1) {
            this._prepareCylinder();
        }
    }
    /**
     * Returns the data related to the vortex event (cylinder).
     * @returns The physics vortex event data
     */ getData() {
        this._dataFetched = true;
        return {
            cylinder: this._cylinder
        };
    }
    /**
     * Enables the vortex.
     */ enable() {
        this._tickCallback.call(this);
        this._scene.registerBeforeRender(this._tickCallback);
    }
    /**
     * Disables the cortex.
     */ disable() {
        this._scene.unregisterBeforeRender(this._tickCallback);
    }
    /**
     * Disposes the sphere.
     * @param force
     */ dispose(force = true) {
        if (!this._cylinder) {
            return;
        }
        if (force) {
            this._cylinder.dispose();
        } else {
            setTimeout(()=>{
                if (!this._dataFetched) {
                    this._cylinder.dispose();
                }
            }, 0);
        }
    }
    _getHitData(mesh, center, data) {
        const originOnPlane = PhysicsVortexEvent._OriginOnPlane;
        originOnPlane.set(this._origin.x, center.y, this._origin.z); // the distance to the origin as if both objects were on a plane (Y-axis)
        const originToImpostorDirection = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0];
        center.subtractToRef(originOnPlane, originToImpostorDirection);
        const contactPoint = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[1];
        const hasContactPoint = HelperTools.GetContactPointToRef(mesh, originOnPlane, originToImpostorDirection, contactPoint, data.instanceIndex);
        if (!hasContactPoint) {
            return false;
        }
        const distance = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Distance(contactPoint, originOnPlane);
        const absoluteDistanceFromOrigin = distance / this._options.radius;
        const directionToOrigin = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[2];
        contactPoint.normalizeToRef(directionToOrigin);
        if (absoluteDistanceFromOrigin > this._options.centripetalForceThreshold) {
            directionToOrigin.negateInPlace();
        }
        let forceX;
        let forceY;
        let forceZ;
        if (absoluteDistanceFromOrigin > this._options.centripetalForceThreshold) {
            forceX = directionToOrigin.x * this._options.centripetalForceMultiplier;
            forceY = directionToOrigin.y * this._options.updraftForceMultiplier;
            forceZ = directionToOrigin.z * this._options.centripetalForceMultiplier;
        } else {
            const perpendicularDirection = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Cross(originOnPlane, center).normalize();
            forceX = (perpendicularDirection.x + directionToOrigin.x) * this._options.centrifugalForceMultiplier;
            forceY = this._originTop.y * this._options.updraftForceMultiplier;
            forceZ = (perpendicularDirection.z + directionToOrigin.z) * this._options.centrifugalForceMultiplier;
        }
        const force = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[3];
        force.set(forceX, forceY, forceZ);
        force.scaleInPlace(this._options.strength);
        data.force.copyFrom(force);
        data.contactPoint.copyFrom(center);
        data.distanceFromOrigin = absoluteDistanceFromOrigin;
        return true;
    }
    _getBodyHitData(body, data, instanceIndex) {
        if (HelperTools.HasAppliedForces(body, instanceIndex)) {
            return false;
        }
        const bodyObject = body.transformNode;
        const bodyCenter = body.getObjectCenterWorld(instanceIndex);
        if (!HelperTools.IsInsideCylinder(bodyCenter, this._origin, this._options.radius, this._options.height)) {
            return false;
        }
        data.instanceIndex = instanceIndex;
        return this._getHitData(bodyObject, bodyCenter, data);
    }
    _getImpostorHitData(impostor, data) {
        if (impostor.mass === 0) {
            return false;
        }
        if (impostor.object.getClassName() !== "Mesh" && impostor.object.getClassName() !== "InstancedMesh") {
            return false;
        }
        const impostorObject = impostor.object;
        if (!this._intersectsWithCylinder(impostorObject)) {
            return false;
        }
        const impostorObjectCenter = impostor.getObjectCenter();
        this._getHitData(impostorObject, impostorObjectCenter, data);
        return true;
    }
    _tick() {
        const hitData = PhysicsVortexEvent._HitData;
        if (this._physicsEngine.getPluginVersion() === 1) {
            const impostors = this._physicsEngine.getImpostors();
            for (const impostor of impostors){
                if (!this._getImpostorHitData(impostor, hitData)) {
                    continue;
                }
                impostor.applyForce(hitData.force, hitData.contactPoint);
            }
        } else {
            const bodies = this._physicsEngine.getBodies();
            for (const body of bodies){
                body.iterateOverAllInstances((body, instanceIndex)=>{
                    if (!this._getBodyHitData(body, hitData, instanceIndex)) {
                        return;
                    }
                    body.applyForce(hitData.force, hitData.contactPoint, hitData.instanceIndex);
                });
            }
        }
    }
    /*** Helpers ***/ _prepareCylinder() {
        if (!this._cylinder) {
            this._cylinder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$cylinderBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreateCylinder"])("vortexEventCylinder", {
                height: this._options.height,
                diameter: this._options.radius * 2
            }, this._scene);
            this._cylinder.isVisible = false;
        }
    }
    _intersectsWithCylinder(mesh) {
        this._cylinder.position = this._cylinderPosition;
        return this._cylinder.intersectsMesh(mesh, true);
    }
}
PhysicsVortexEvent._OriginOnPlane = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Zero();
PhysicsVortexEvent._HitData = {
    force: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](),
    contactPoint: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](),
    distanceFromOrigin: 0
};
class PhysicsRadialExplosionEventOptions {
    constructor(){
        /**
         * The radius of the sphere for the radial explosion.
         */ this.radius = 5;
        /**
         * The strength of the explosion.
         */ this.strength = 10;
        /**
         * The strength of the force in correspondence to the distance of the affected object
         */ this.falloff = 0 /* PhysicsRadialImpulseFalloff.Constant */ ;
        /**
         * Sphere options for the radial explosion.
         */ this.sphere = {
            segments: 32,
            diameter: 1
        };
    }
}
class PhysicsUpdraftEventOptions {
    constructor(){
        /**
         * The radius of the cylinder for the vortex
         */ this.radius = 5;
        /**
         * The strength of the updraft.
         */ this.strength = 10;
        /**
         * The height of the cylinder for the updraft.
         */ this.height = 10;
        /**
         * The mode for the updraft.
         */ this.updraftMode = 0 /* PhysicsUpdraftMode.Center */ ;
    }
}
class PhysicsVortexEventOptions {
    constructor(){
        /**
         * The radius of the cylinder for the vortex
         */ this.radius = 5;
        /**
         * The strength of the vortex.
         */ this.strength = 10;
        /**
         * The height of the cylinder for the vortex.
         */ this.height = 10;
        /**
         * At which distance, relative to the radius the centripetal forces should kick in? Range: 0-1
         */ this.centripetalForceThreshold = 0.7;
        /**
         * This multiplier determines with how much force the objects will be pushed sideways/around the vortex, when below the threshold.
         */ this.centripetalForceMultiplier = 5;
        /**
         * This multiplier determines with how much force the objects will be pushed sideways/around the vortex, when above the threshold.
         */ this.centrifugalForceMultiplier = 0.5;
        /**
         * This multiplier determines with how much force the objects will be pushed upwards, when in the vortex.
         */ this.updraftForceMultiplier = 0.02;
    }
}
var PhysicsRadialImpulseFalloff;
(function(PhysicsRadialImpulseFalloff) {
    /** Defines that impulse is constant in strength across it's whole radius */ PhysicsRadialImpulseFalloff[PhysicsRadialImpulseFalloff["Constant"] = 0] = "Constant";
    /** Defines that impulse gets weaker if it's further from the origin */ PhysicsRadialImpulseFalloff[PhysicsRadialImpulseFalloff["Linear"] = 1] = "Linear";
})(PhysicsRadialImpulseFalloff || (PhysicsRadialImpulseFalloff = {}));
var PhysicsUpdraftMode;
(function(PhysicsUpdraftMode) {
    /** Defines that the upstream forces will pull towards the top center of the cylinder */ PhysicsUpdraftMode[PhysicsUpdraftMode["Center"] = 0] = "Center";
    /** Defines that once a impostor is inside the cylinder, it will shoot out perpendicular from the ground of the cylinder */ PhysicsUpdraftMode[PhysicsUpdraftMode["Perpendicular"] = 1] = "Perpendicular";
})(PhysicsUpdraftMode || (PhysicsUpdraftMode = {})); //# sourceMappingURL=physicsHelper.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/proximityCastResult.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProximityCastResult",
    ()=>ProximityCastResult
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$castingResult$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/castingResult.js [app-ssr] (ecmascript)");
;
class ProximityCastResult extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$castingResult$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CastingResult"] {
    constructor(){
        super(...arguments);
        this._hitDistance = 0;
    }
    /**
     * Gets the distance from the hit
     */ get hitDistance() {
        return this._hitDistance;
    }
    /**
     * Sets the distance from the start point to the hit point
     * @param distance
     */ setHitDistance(distance) {
        this._hitDistance = distance;
    }
    /**
     * Resets all the values to default
     */ reset() {
        super.reset();
        this._hitDistance = 0;
    }
} //# sourceMappingURL=proximityCastResult.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/physicsPointProximityQuery.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
 //# sourceMappingURL=physicsPointProximityQuery.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/physicsShapeProximityCastQuery.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
 //# sourceMappingURL=physicsShapeProximityCastQuery.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/shapeCastResult.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ShapeCastResult",
    ()=>ShapeCastResult
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$castingResult$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/castingResult.js [app-ssr] (ecmascript)");
;
class ShapeCastResult extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$castingResult$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CastingResult"] {
    constructor(){
        super(...arguments);
        this._hitFraction = 0;
    }
    /**
     * Gets the hit fraction along the casting ray
     */ get hitFraction() {
        return this._hitFraction;
    }
    /**
     * Sets the hit fraction along the casting ray
     * @param fraction
     */ setHitFraction(fraction) {
        this._hitFraction = fraction;
    }
} //# sourceMappingURL=shapeCastResult.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/* eslint-disable @typescript-eslint/no-restricted-imports */ __turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/v1/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/v2/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$physicsEngineComponent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/physicsEngineComponent.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$physicsEngineComponent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/v1/physicsEngineComponent.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$physicsHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/physicsHelper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$physicsRaycastResult$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/physicsRaycastResult.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$proximityCastResult$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/proximityCastResult.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$physicsPointProximityQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/physicsPointProximityQuery.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$physicsShapeProximityCastQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/physicsShapeProximityCastQuery.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$shapeCastResult$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/shapeCastResult.js [app-ssr] (ecmascript)"); //# sourceMappingURL=index.js.map
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
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/v1/Plugins/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AmmoJSPlugin",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$Plugins$2f$ammoJSPlugin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AmmoJSPlugin"],
    "CannonJSPlugin",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$Plugins$2f$cannonJSPlugin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CannonJSPlugin"],
    "OimoJSPlugin",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$Plugins$2f$oimoJSPlugin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OimoJSPlugin"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$Plugins$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/v1/Plugins/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$Plugins$2f$cannonJSPlugin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/v1/Plugins/cannonJSPlugin.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$Plugins$2f$ammoJSPlugin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/v1/Plugins/ammoJSPlugin.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$Plugins$2f$oimoJSPlugin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/v1/Plugins/oimoJSPlugin.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/v1/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AmmoJSPlugin",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$Plugins$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AmmoJSPlugin"],
    "CannonJSPlugin",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$Plugins$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CannonJSPlugin"],
    "DistanceJoint",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$physicsJoint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DistanceJoint"],
    "Hinge2Joint",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$physicsJoint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Hinge2Joint"],
    "HingeJoint",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$physicsJoint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HingeJoint"],
    "MotorEnabledJoint",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$physicsJoint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MotorEnabledJoint"],
    "OimoJSPlugin",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$Plugins$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OimoJSPlugin"],
    "PhysicsEngine",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$physicsEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsEngine"],
    "PhysicsImpostor",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$physicsImpostor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsImpostor"],
    "PhysicsJoint",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$physicsJoint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsJoint"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/v1/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$IPhysicsEnginePlugin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/v1/IPhysicsEnginePlugin.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$physicsEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/v1/physicsEngine.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$physicsEngineComponent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/v1/physicsEngineComponent.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$physicsImpostor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/v1/physicsImpostor.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$physicsJoint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/v1/physicsJoint.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$Plugins$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/v1/Plugins/index.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/v2/Plugins/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HavokPlugin",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$Plugins$2f$havokPlugin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HavokPlugin"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$Plugins$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/v2/Plugins/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$Plugins$2f$havokPlugin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/v2/Plugins/havokPlugin.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/v2/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BallAndSocketConstraint",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$physicsConstraint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BallAndSocketConstraint"],
    "CharacterSupportedState",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$characterController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CharacterSupportedState"],
    "DistanceConstraint",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$physicsConstraint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DistanceConstraint"],
    "HavokPlugin",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$Plugins$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HavokPlugin"],
    "HingeConstraint",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$physicsConstraint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HingeConstraint"],
    "LockConstraint",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$physicsConstraint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LockConstraint"],
    "Physics6DoFConstraint",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$physicsConstraint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Physics6DoFConstraint"],
    "Physics6DoFLimit",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$physicsConstraint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Physics6DoFLimit"],
    "PhysicsActivationControl",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$IPhysicsEnginePlugin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsActivationControl"],
    "PhysicsAggregate",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$physicsAggregate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsAggregate"],
    "PhysicsBody",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$physicsBody$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsBody"],
    "PhysicsCharacterController",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$characterController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsCharacterController"],
    "PhysicsConstraint",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$physicsConstraint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsConstraint"],
    "PhysicsConstraintAxis",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$IPhysicsEnginePlugin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsConstraintAxis"],
    "PhysicsConstraintAxisLimitMode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$IPhysicsEnginePlugin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsConstraintAxisLimitMode"],
    "PhysicsConstraintMotorType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$IPhysicsEnginePlugin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsConstraintMotorType"],
    "PhysicsConstraintType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$IPhysicsEnginePlugin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsConstraintType"],
    "PhysicsEngineV2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$physicsEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsEngine"],
    "PhysicsEventType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$IPhysicsEnginePlugin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsEventType"],
    "PhysicsMaterialCombineMode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$physicsMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsMaterialCombineMode"],
    "PhysicsMotionType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$IPhysicsEnginePlugin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsMotionType"],
    "PhysicsPrestepType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$IPhysicsEnginePlugin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsPrestepType"],
    "PhysicsShape",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$physicsShape$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsShape"],
    "PhysicsShapeBox",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$physicsShape$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsShapeBox"],
    "PhysicsShapeCapsule",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$physicsShape$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsShapeCapsule"],
    "PhysicsShapeContainer",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$physicsShape$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsShapeContainer"],
    "PhysicsShapeConvexHull",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$physicsShape$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsShapeConvexHull"],
    "PhysicsShapeCylinder",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$physicsShape$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsShapeCylinder"],
    "PhysicsShapeGroundMesh",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$physicsShape$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsShapeGroundMesh"],
    "PhysicsShapeHeightField",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$physicsShape$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsShapeHeightField"],
    "PhysicsShapeMesh",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$physicsShape$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsShapeMesh"],
    "PhysicsShapeSphere",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$physicsShape$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsShapeSphere"],
    "PhysicsShapeType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$IPhysicsEnginePlugin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsShapeType"],
    "PrismaticConstraint",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$physicsConstraint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PrismaticConstraint"],
    "Ragdoll",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$ragdoll$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Ragdoll"],
    "RagdollBoneProperties",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$ragdoll$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RagdollBoneProperties"],
    "SliderConstraint",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$physicsConstraint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SliderConstraint"],
    "SpringConstraint",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$physicsConstraint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SpringConstraint"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/v2/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$physicsEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/v2/physicsEngine.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$physicsBody$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/v2/physicsBody.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$physicsShape$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/v2/physicsShape.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$physicsConstraint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/v2/physicsConstraint.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$physicsMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/v2/physicsMaterial.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$physicsAggregate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/v2/physicsAggregate.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$ragdoll$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/v2/ragdoll.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$IPhysicsEnginePlugin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/v2/IPhysicsEnginePlugin.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$characterController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/v2/characterController.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$Plugins$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/v2/Plugins/index.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AmmoJSPlugin",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AmmoJSPlugin"],
    "BallAndSocketConstraint",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BallAndSocketConstraint"],
    "CannonJSPlugin",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CannonJSPlugin"],
    "CharacterSupportedState",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CharacterSupportedState"],
    "DistanceConstraint",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DistanceConstraint"],
    "DistanceJoint",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DistanceJoint"],
    "HavokPlugin",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HavokPlugin"],
    "Hinge2Joint",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Hinge2Joint"],
    "HingeConstraint",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HingeConstraint"],
    "HingeJoint",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HingeJoint"],
    "LockConstraint",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LockConstraint"],
    "MotorEnabledJoint",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MotorEnabledJoint"],
    "OimoJSPlugin",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OimoJSPlugin"],
    "Physics6DoFConstraint",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Physics6DoFConstraint"],
    "Physics6DoFLimit",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Physics6DoFLimit"],
    "PhysicsActivationControl",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsActivationControl"],
    "PhysicsAggregate",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsAggregate"],
    "PhysicsBody",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsBody"],
    "PhysicsCharacterController",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsCharacterController"],
    "PhysicsConstraint",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsConstraint"],
    "PhysicsConstraintAxis",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsConstraintAxis"],
    "PhysicsConstraintAxisLimitMode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsConstraintAxisLimitMode"],
    "PhysicsConstraintMotorType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsConstraintMotorType"],
    "PhysicsConstraintType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsConstraintType"],
    "PhysicsEngine",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsEngine"],
    "PhysicsEngineV2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsEngineV2"],
    "PhysicsEventType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsEventType"],
    "PhysicsHelper",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$physicsHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsHelper"],
    "PhysicsImpostor",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsImpostor"],
    "PhysicsJoint",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsJoint"],
    "PhysicsMaterialCombineMode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsMaterialCombineMode"],
    "PhysicsMotionType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsMotionType"],
    "PhysicsPrestepType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsPrestepType"],
    "PhysicsRadialExplosionEventOptions",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$physicsHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsRadialExplosionEventOptions"],
    "PhysicsRadialImpulseFalloff",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$physicsHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsRadialImpulseFalloff"],
    "PhysicsRaycastResult",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$physicsRaycastResult$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsRaycastResult"],
    "PhysicsShape",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsShape"],
    "PhysicsShapeBox",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsShapeBox"],
    "PhysicsShapeCapsule",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsShapeCapsule"],
    "PhysicsShapeContainer",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsShapeContainer"],
    "PhysicsShapeConvexHull",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsShapeConvexHull"],
    "PhysicsShapeCylinder",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsShapeCylinder"],
    "PhysicsShapeGroundMesh",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsShapeGroundMesh"],
    "PhysicsShapeHeightField",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsShapeHeightField"],
    "PhysicsShapeMesh",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsShapeMesh"],
    "PhysicsShapeSphere",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsShapeSphere"],
    "PhysicsShapeType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsShapeType"],
    "PhysicsUpdraftEventOptions",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$physicsHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsUpdraftEventOptions"],
    "PhysicsUpdraftMode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$physicsHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsUpdraftMode"],
    "PhysicsVortexEventOptions",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$physicsHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsVortexEventOptions"],
    "PrismaticConstraint",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PrismaticConstraint"],
    "ProximityCastResult",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$proximityCastResult$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProximityCastResult"],
    "Ragdoll",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Ragdoll"],
    "RagdollBoneProperties",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RagdollBoneProperties"],
    "ShapeCastResult",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$shapeCastResult$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShapeCastResult"],
    "SliderConstraint",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SliderConstraint"],
    "SpringConstraint",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SpringConstraint"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/v1/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v2$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/v2/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$physicsEngineComponent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/physicsEngineComponent.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$physicsEngineComponent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/v1/physicsEngineComponent.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$physicsHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/physicsHelper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$physicsRaycastResult$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/physicsRaycastResult.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$proximityCastResult$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/proximityCastResult.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$physicsPointProximityQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/physicsPointProximityQuery.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$physicsShapeProximityCastQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/physicsShapeProximityCastQuery.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$shapeCastResult$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/shapeCastResult.js [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=dcdbf_%40babylonjs_core_Physics_f26eb66c._.js.map