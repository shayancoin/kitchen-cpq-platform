module.exports = [
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/DeviceInput/InputDevices/deviceEnums.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable @typescript-eslint/naming-convention */ /**
 * Enum for Device Types
 */ __turbopack_context__.s([
    "DeviceType",
    ()=>DeviceType,
    "DualSenseInput",
    ()=>DualSenseInput,
    "DualShockInput",
    ()=>DualShockInput,
    "NativePointerInput",
    ()=>NativePointerInput,
    "PointerInput",
    ()=>PointerInput,
    "SwitchInput",
    ()=>SwitchInput,
    "XboxInput",
    ()=>XboxInput
]);
var DeviceType;
(function(DeviceType) {
    /** Generic */ DeviceType[DeviceType["Generic"] = 0] = "Generic";
    /** Keyboard */ DeviceType[DeviceType["Keyboard"] = 1] = "Keyboard";
    /** Mouse */ DeviceType[DeviceType["Mouse"] = 2] = "Mouse";
    /** Touch Pointers */ DeviceType[DeviceType["Touch"] = 3] = "Touch";
    /** PS4 Dual Shock */ DeviceType[DeviceType["DualShock"] = 4] = "DualShock";
    /** Xbox */ DeviceType[DeviceType["Xbox"] = 5] = "Xbox";
    /** Switch Controller */ DeviceType[DeviceType["Switch"] = 6] = "Switch";
    /** PS5 DualSense */ DeviceType[DeviceType["DualSense"] = 7] = "DualSense";
})(DeviceType || (DeviceType = {}));
var PointerInput;
(function(PointerInput) {
    /** Horizontal Axis (Not used in events/observables; only in polling) */ PointerInput[PointerInput["Horizontal"] = 0] = "Horizontal";
    /** Vertical Axis (Not used in events/observables; only in polling) */ PointerInput[PointerInput["Vertical"] = 1] = "Vertical";
    /** Left Click or Touch */ PointerInput[PointerInput["LeftClick"] = 2] = "LeftClick";
    /** Middle Click */ PointerInput[PointerInput["MiddleClick"] = 3] = "MiddleClick";
    /** Right Click */ PointerInput[PointerInput["RightClick"] = 4] = "RightClick";
    /** Browser Back */ PointerInput[PointerInput["BrowserBack"] = 5] = "BrowserBack";
    /** Browser Forward */ PointerInput[PointerInput["BrowserForward"] = 6] = "BrowserForward";
    /** Mouse Wheel X */ PointerInput[PointerInput["MouseWheelX"] = 7] = "MouseWheelX";
    /** Mouse Wheel Y */ PointerInput[PointerInput["MouseWheelY"] = 8] = "MouseWheelY";
    /** Mouse Wheel Z */ PointerInput[PointerInput["MouseWheelZ"] = 9] = "MouseWheelZ";
    /** Used in events/observables to identify if x/y changes occurred */ PointerInput[PointerInput["Move"] = 12] = "Move";
})(PointerInput || (PointerInput = {}));
var NativePointerInput;
(function(NativePointerInput) {
    /** Horizontal Axis */ NativePointerInput[NativePointerInput["Horizontal"] = 0] = "Horizontal";
    /** Vertical Axis */ NativePointerInput[NativePointerInput["Vertical"] = 1] = "Vertical";
    /** Left Click or Touch */ NativePointerInput[NativePointerInput["LeftClick"] = 2] = "LeftClick";
    /** Middle Click */ NativePointerInput[NativePointerInput["MiddleClick"] = 3] = "MiddleClick";
    /** Right Click */ NativePointerInput[NativePointerInput["RightClick"] = 4] = "RightClick";
    /** Browser Back */ NativePointerInput[NativePointerInput["BrowserBack"] = 5] = "BrowserBack";
    /** Browser Forward */ NativePointerInput[NativePointerInput["BrowserForward"] = 6] = "BrowserForward";
    /** Mouse Wheel X */ NativePointerInput[NativePointerInput["MouseWheelX"] = 7] = "MouseWheelX";
    /** Mouse Wheel Y */ NativePointerInput[NativePointerInput["MouseWheelY"] = 8] = "MouseWheelY";
    /** Mouse Wheel Z */ NativePointerInput[NativePointerInput["MouseWheelZ"] = 9] = "MouseWheelZ";
    /** Delta X */ NativePointerInput[NativePointerInput["DeltaHorizontal"] = 10] = "DeltaHorizontal";
    /** Delta Y */ NativePointerInput[NativePointerInput["DeltaVertical"] = 11] = "DeltaVertical";
})(NativePointerInput || (NativePointerInput = {}));
var DualShockInput;
(function(DualShockInput) {
    /** Cross */ DualShockInput[DualShockInput["Cross"] = 0] = "Cross";
    /** Circle */ DualShockInput[DualShockInput["Circle"] = 1] = "Circle";
    /** Square */ DualShockInput[DualShockInput["Square"] = 2] = "Square";
    /** Triangle */ DualShockInput[DualShockInput["Triangle"] = 3] = "Triangle";
    /** L1 */ DualShockInput[DualShockInput["L1"] = 4] = "L1";
    /** R1 */ DualShockInput[DualShockInput["R1"] = 5] = "R1";
    /** L2 */ DualShockInput[DualShockInput["L2"] = 6] = "L2";
    /** R2 */ DualShockInput[DualShockInput["R2"] = 7] = "R2";
    /** Share */ DualShockInput[DualShockInput["Share"] = 8] = "Share";
    /** Options */ DualShockInput[DualShockInput["Options"] = 9] = "Options";
    /** L3 */ DualShockInput[DualShockInput["L3"] = 10] = "L3";
    /** R3 */ DualShockInput[DualShockInput["R3"] = 11] = "R3";
    /** DPadUp */ DualShockInput[DualShockInput["DPadUp"] = 12] = "DPadUp";
    /** DPadDown */ DualShockInput[DualShockInput["DPadDown"] = 13] = "DPadDown";
    /** DPadLeft */ DualShockInput[DualShockInput["DPadLeft"] = 14] = "DPadLeft";
    /** DRight */ DualShockInput[DualShockInput["DPadRight"] = 15] = "DPadRight";
    /** Home */ DualShockInput[DualShockInput["Home"] = 16] = "Home";
    /** TouchPad */ DualShockInput[DualShockInput["TouchPad"] = 17] = "TouchPad";
    /** LStickXAxis */ DualShockInput[DualShockInput["LStickXAxis"] = 18] = "LStickXAxis";
    /** LStickYAxis */ DualShockInput[DualShockInput["LStickYAxis"] = 19] = "LStickYAxis";
    /** RStickXAxis */ DualShockInput[DualShockInput["RStickXAxis"] = 20] = "RStickXAxis";
    /** RStickYAxis */ DualShockInput[DualShockInput["RStickYAxis"] = 21] = "RStickYAxis";
})(DualShockInput || (DualShockInput = {}));
var DualSenseInput;
(function(DualSenseInput) {
    /** Cross */ DualSenseInput[DualSenseInput["Cross"] = 0] = "Cross";
    /** Circle */ DualSenseInput[DualSenseInput["Circle"] = 1] = "Circle";
    /** Square */ DualSenseInput[DualSenseInput["Square"] = 2] = "Square";
    /** Triangle */ DualSenseInput[DualSenseInput["Triangle"] = 3] = "Triangle";
    /** L1 */ DualSenseInput[DualSenseInput["L1"] = 4] = "L1";
    /** R1 */ DualSenseInput[DualSenseInput["R1"] = 5] = "R1";
    /** L2 */ DualSenseInput[DualSenseInput["L2"] = 6] = "L2";
    /** R2 */ DualSenseInput[DualSenseInput["R2"] = 7] = "R2";
    /** Create */ DualSenseInput[DualSenseInput["Create"] = 8] = "Create";
    /** Options */ DualSenseInput[DualSenseInput["Options"] = 9] = "Options";
    /** L3 */ DualSenseInput[DualSenseInput["L3"] = 10] = "L3";
    /** R3 */ DualSenseInput[DualSenseInput["R3"] = 11] = "R3";
    /** DPadUp */ DualSenseInput[DualSenseInput["DPadUp"] = 12] = "DPadUp";
    /** DPadDown */ DualSenseInput[DualSenseInput["DPadDown"] = 13] = "DPadDown";
    /** DPadLeft */ DualSenseInput[DualSenseInput["DPadLeft"] = 14] = "DPadLeft";
    /** DRight */ DualSenseInput[DualSenseInput["DPadRight"] = 15] = "DPadRight";
    /** Home */ DualSenseInput[DualSenseInput["Home"] = 16] = "Home";
    /** TouchPad */ DualSenseInput[DualSenseInput["TouchPad"] = 17] = "TouchPad";
    /** LStickXAxis */ DualSenseInput[DualSenseInput["LStickXAxis"] = 18] = "LStickXAxis";
    /** LStickYAxis */ DualSenseInput[DualSenseInput["LStickYAxis"] = 19] = "LStickYAxis";
    /** RStickXAxis */ DualSenseInput[DualSenseInput["RStickXAxis"] = 20] = "RStickXAxis";
    /** RStickYAxis */ DualSenseInput[DualSenseInput["RStickYAxis"] = 21] = "RStickYAxis";
})(DualSenseInput || (DualSenseInput = {}));
var XboxInput;
(function(XboxInput) {
    /** A */ XboxInput[XboxInput["A"] = 0] = "A";
    /** B */ XboxInput[XboxInput["B"] = 1] = "B";
    /** X */ XboxInput[XboxInput["X"] = 2] = "X";
    /** Y */ XboxInput[XboxInput["Y"] = 3] = "Y";
    /** LB */ XboxInput[XboxInput["LB"] = 4] = "LB";
    /** RB */ XboxInput[XboxInput["RB"] = 5] = "RB";
    /** LT */ XboxInput[XboxInput["LT"] = 6] = "LT";
    /** RT */ XboxInput[XboxInput["RT"] = 7] = "RT";
    /** Back */ XboxInput[XboxInput["Back"] = 8] = "Back";
    /** Start */ XboxInput[XboxInput["Start"] = 9] = "Start";
    /** LS */ XboxInput[XboxInput["LS"] = 10] = "LS";
    /** RS */ XboxInput[XboxInput["RS"] = 11] = "RS";
    /** DPadUp */ XboxInput[XboxInput["DPadUp"] = 12] = "DPadUp";
    /** DPadDown */ XboxInput[XboxInput["DPadDown"] = 13] = "DPadDown";
    /** DPadLeft */ XboxInput[XboxInput["DPadLeft"] = 14] = "DPadLeft";
    /** DRight */ XboxInput[XboxInput["DPadRight"] = 15] = "DPadRight";
    /** Home */ XboxInput[XboxInput["Home"] = 16] = "Home";
    /** LStickXAxis */ XboxInput[XboxInput["LStickXAxis"] = 17] = "LStickXAxis";
    /** LStickYAxis */ XboxInput[XboxInput["LStickYAxis"] = 18] = "LStickYAxis";
    /** RStickXAxis */ XboxInput[XboxInput["RStickXAxis"] = 19] = "RStickXAxis";
    /** RStickYAxis */ XboxInput[XboxInput["RStickYAxis"] = 20] = "RStickYAxis";
})(XboxInput || (XboxInput = {}));
var SwitchInput;
(function(SwitchInput) {
    /** B */ SwitchInput[SwitchInput["B"] = 0] = "B";
    /** A */ SwitchInput[SwitchInput["A"] = 1] = "A";
    /** Y */ SwitchInput[SwitchInput["Y"] = 2] = "Y";
    /** X */ SwitchInput[SwitchInput["X"] = 3] = "X";
    /** L */ SwitchInput[SwitchInput["L"] = 4] = "L";
    /** R */ SwitchInput[SwitchInput["R"] = 5] = "R";
    /** ZL */ SwitchInput[SwitchInput["ZL"] = 6] = "ZL";
    /** ZR */ SwitchInput[SwitchInput["ZR"] = 7] = "ZR";
    /** Minus */ SwitchInput[SwitchInput["Minus"] = 8] = "Minus";
    /** Plus */ SwitchInput[SwitchInput["Plus"] = 9] = "Plus";
    /** LS */ SwitchInput[SwitchInput["LS"] = 10] = "LS";
    /** RS */ SwitchInput[SwitchInput["RS"] = 11] = "RS";
    /** DPadUp */ SwitchInput[SwitchInput["DPadUp"] = 12] = "DPadUp";
    /** DPadDown */ SwitchInput[SwitchInput["DPadDown"] = 13] = "DPadDown";
    /** DPadLeft */ SwitchInput[SwitchInput["DPadLeft"] = 14] = "DPadLeft";
    /** DRight */ SwitchInput[SwitchInput["DPadRight"] = 15] = "DPadRight";
    /** Home */ SwitchInput[SwitchInput["Home"] = 16] = "Home";
    /** Capture */ SwitchInput[SwitchInput["Capture"] = 17] = "Capture";
    /** LStickXAxis */ SwitchInput[SwitchInput["LStickXAxis"] = 18] = "LStickXAxis";
    /** LStickYAxis */ SwitchInput[SwitchInput["LStickYAxis"] = 19] = "LStickYAxis";
    /** RStickXAxis */ SwitchInput[SwitchInput["RStickXAxis"] = 20] = "RStickXAxis";
    /** RStickYAxis */ SwitchInput[SwitchInput["RStickYAxis"] = 21] = "RStickYAxis";
})(SwitchInput || (SwitchInput = {})); //# sourceMappingURL=deviceEnums.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/DeviceInput/eventFactory.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DeviceEventFactory",
    ()=>DeviceEventFactory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Events$2f$deviceInputEvents$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Events/deviceInputEvents.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/DeviceInput/InputDevices/deviceEnums.js [app-ssr] (ecmascript)");
;
;
class DeviceEventFactory {
    /**
     * Create device input events based on provided type and slot
     *
     * @param deviceType Type of device
     * @param deviceSlot "Slot" or index that device is referenced in
     * @param inputIndex Id of input to be checked
     * @param currentState Current value for given input
     * @param deviceInputSystem Reference to DeviceInputSystem
     * @param elementToAttachTo HTMLElement to reference as target for inputs
     * @param pointerId PointerId to use for pointer events
     * @returns IUIEvent object
     */ static CreateDeviceEvent(deviceType, deviceSlot, inputIndex, currentState, deviceInputSystem, elementToAttachTo, pointerId) {
        switch(deviceType){
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeviceType"].Keyboard:
                return this._CreateKeyboardEvent(inputIndex, currentState, deviceInputSystem, elementToAttachTo);
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeviceType"].Mouse:
                if (inputIndex === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PointerInput"].MouseWheelX || inputIndex === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PointerInput"].MouseWheelY || inputIndex === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PointerInput"].MouseWheelZ) {
                    return this._CreateWheelEvent(deviceType, deviceSlot, inputIndex, currentState, deviceInputSystem, elementToAttachTo);
                }
            // eslint-disable-next-line no-fallthrough
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeviceType"].Touch:
                return this._CreatePointerEvent(deviceType, deviceSlot, inputIndex, currentState, deviceInputSystem, elementToAttachTo, pointerId);
            default:
                // eslint-disable-next-line no-throw-literal
                throw `Unable to generate event for device ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeviceType"][deviceType]}`;
        }
    }
    /**
     * Creates pointer event
     *
     * @param deviceType Type of device
     * @param deviceSlot "Slot" or index that device is referenced in
     * @param inputIndex Id of input to be checked
     * @param currentState Current value for given input
     * @param deviceInputSystem Reference to DeviceInputSystem
     * @param elementToAttachTo HTMLElement to reference as target for inputs
     * @param pointerId PointerId to use for pointer events
     * @returns IUIEvent object (Pointer)
     */ static _CreatePointerEvent(deviceType, deviceSlot, inputIndex, currentState, deviceInputSystem, elementToAttachTo, pointerId) {
        const evt = this._CreateMouseEvent(deviceType, deviceSlot, inputIndex, currentState, deviceInputSystem, elementToAttachTo);
        if (deviceType === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeviceType"].Mouse) {
            evt.deviceType = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeviceType"].Mouse;
            evt.pointerId = 1;
            evt.pointerType = "mouse";
        } else {
            evt.deviceType = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeviceType"].Touch;
            evt.pointerId = pointerId ?? deviceSlot;
            evt.pointerType = "touch";
        }
        let buttons = 0;
        // Populate buttons property with current state of all mouse buttons
        // Uses values found on: https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/buttons
        buttons += deviceInputSystem.pollInput(deviceType, deviceSlot, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PointerInput"].LeftClick);
        buttons += deviceInputSystem.pollInput(deviceType, deviceSlot, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PointerInput"].RightClick) * 2;
        buttons += deviceInputSystem.pollInput(deviceType, deviceSlot, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PointerInput"].MiddleClick) * 4;
        evt.buttons = buttons;
        if (inputIndex === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PointerInput"].Move) {
            evt.type = "pointermove";
        } else if (inputIndex >= __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PointerInput"].LeftClick && inputIndex <= __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PointerInput"].RightClick) {
            evt.type = currentState === 1 ? "pointerdown" : "pointerup";
            evt.button = inputIndex - 2;
        }
        return evt;
    }
    /**
     * Create Mouse Wheel Event
     * @param deviceType Type of device
     * @param deviceSlot "Slot" or index that device is referenced in
     * @param inputIndex Id of input to be checked
     * @param currentState Current value for given input
     * @param deviceInputSystem Reference to DeviceInputSystem
     * @param elementToAttachTo HTMLElement to reference as target for inputs
     * @returns IUIEvent object (Wheel)
     */ static _CreateWheelEvent(deviceType, deviceSlot, inputIndex, currentState, deviceInputSystem, elementToAttachTo) {
        const evt = this._CreateMouseEvent(deviceType, deviceSlot, inputIndex, currentState, deviceInputSystem, elementToAttachTo);
        // While WheelEvents don't generally have a pointerId, we used to add one in the InputManager
        // This line has been added to make the InputManager more platform-agnostic
        // Similar code exists in the WebDeviceInputSystem to handle browser created events
        evt.pointerId = 1;
        evt.type = "wheel";
        evt.deltaMode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Events$2f$deviceInputEvents$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EventConstants"].DOM_DELTA_PIXEL;
        evt.deltaX = 0;
        evt.deltaY = 0;
        evt.deltaZ = 0;
        switch(inputIndex){
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PointerInput"].MouseWheelX:
                evt.deltaX = currentState;
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PointerInput"].MouseWheelY:
                evt.deltaY = currentState;
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PointerInput"].MouseWheelZ:
                evt.deltaZ = currentState;
                break;
        }
        return evt;
    }
    /**
     * Create Mouse Event
     * @param deviceType Type of device
     * @param deviceSlot "Slot" or index that device is referenced in
     * @param inputIndex Id of input to be checked
     * @param currentState Current value for given input
     * @param deviceInputSystem Reference to DeviceInputSystem
     * @param elementToAttachTo HTMLElement to reference as target for inputs
     * @returns IUIEvent object (Mouse)
     */ static _CreateMouseEvent(deviceType, deviceSlot, inputIndex, currentState, deviceInputSystem, elementToAttachTo) {
        const evt = this._CreateEvent(elementToAttachTo);
        const pointerX = deviceInputSystem.pollInput(deviceType, deviceSlot, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PointerInput"].Horizontal);
        const pointerY = deviceInputSystem.pollInput(deviceType, deviceSlot, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PointerInput"].Vertical);
        // Handle offsets/deltas based on existence of HTMLElement
        if (elementToAttachTo) {
            evt.movementX = 0;
            evt.movementY = 0;
            evt.offsetX = evt.movementX - elementToAttachTo.getBoundingClientRect().x;
            evt.offsetY = evt.movementY - elementToAttachTo.getBoundingClientRect().y;
        } else {
            evt.movementX = deviceInputSystem.pollInput(deviceType, deviceSlot, 10 /* NativePointerInput.DeltaHorizontal */ ); // DeltaHorizontal
            evt.movementY = deviceInputSystem.pollInput(deviceType, deviceSlot, 11 /* NativePointerInput.DeltaVertical */ ); // DeltaVertical
            evt.offsetX = 0;
            evt.offsetY = 0;
        }
        this._CheckNonCharacterKeys(evt, deviceInputSystem);
        evt.clientX = pointerX;
        evt.clientY = pointerY;
        evt.x = pointerX;
        evt.y = pointerY;
        evt.deviceType = deviceType;
        evt.deviceSlot = deviceSlot;
        evt.inputIndex = inputIndex;
        return evt;
    }
    /**
     * Create Keyboard Event
     * @param inputIndex Id of input to be checked
     * @param currentState Current value for given input
     * @param deviceInputSystem Reference to DeviceInputSystem
     * @param elementToAttachTo HTMLElement to reference as target for inputs
     * @returns IEvent object (Keyboard)
     */ static _CreateKeyboardEvent(inputIndex, currentState, deviceInputSystem, elementToAttachTo) {
        const evt = this._CreateEvent(elementToAttachTo);
        this._CheckNonCharacterKeys(evt, deviceInputSystem);
        evt.deviceType = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeviceType"].Keyboard;
        evt.deviceSlot = 0;
        evt.inputIndex = inputIndex;
        evt.type = currentState === 1 ? "keydown" : "keyup";
        evt.key = String.fromCharCode(inputIndex);
        evt.keyCode = inputIndex;
        return evt;
    }
    /**
     * Add parameters for non-character keys (Ctrl, Alt, Meta, Shift)
     * @param evt Event object to add parameters to
     * @param deviceInputSystem DeviceInputSystem to pull values from
     */ static _CheckNonCharacterKeys(evt, deviceInputSystem) {
        const isKeyboardActive = deviceInputSystem.isDeviceAvailable(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeviceType"].Keyboard);
        const altKey = isKeyboardActive && deviceInputSystem.pollInput(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeviceType"].Keyboard, 0, 18) === 1;
        const ctrlKey = isKeyboardActive && deviceInputSystem.pollInput(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeviceType"].Keyboard, 0, 17) === 1;
        const metaKey = isKeyboardActive && (deviceInputSystem.pollInput(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeviceType"].Keyboard, 0, 91) === 1 || deviceInputSystem.pollInput(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeviceType"].Keyboard, 0, 92) === 1 || deviceInputSystem.pollInput(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeviceType"].Keyboard, 0, 93) === 1);
        const shiftKey = isKeyboardActive && deviceInputSystem.pollInput(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeviceType"].Keyboard, 0, 16) === 1;
        evt.altKey = altKey;
        evt.ctrlKey = ctrlKey;
        evt.metaKey = metaKey;
        evt.shiftKey = shiftKey;
    }
    /**
     * Create base event object
     * @param elementToAttachTo Value to use as event target
     * @returns
     */ static _CreateEvent(elementToAttachTo) {
        const evt = {};
        evt.preventDefault = ()=>{};
        evt.target = elementToAttachTo;
        return evt;
    }
} //# sourceMappingURL=eventFactory.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/DeviceInput/nativeDeviceInputSystem.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NativeDeviceInputSystem",
    ()=>NativeDeviceInputSystem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$eventFactory$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/DeviceInput/eventFactory.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/DeviceInput/InputDevices/deviceEnums.js [app-ssr] (ecmascript)");
;
;
class NativeDeviceInputSystem {
    constructor(onDeviceConnected, onDeviceDisconnected, onInputChanged){
        this._nativeInput = _native.DeviceInputSystem ? new _native.DeviceInputSystem(onDeviceConnected, onDeviceDisconnected, (deviceType, deviceSlot, inputIndex, currentState)=>{
            const evt = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$eventFactory$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeviceEventFactory"].CreateDeviceEvent(deviceType, deviceSlot, inputIndex, currentState, this);
            onInputChanged(deviceType, deviceSlot, evt);
        }) : this._createDummyNativeInput();
    }
    // Public functions
    /**
     * Checks for current device input value, given an id and input index. Throws exception if requested device not initialized.
     * @param deviceType Enum specifying device type
     * @param deviceSlot "Slot" or index that device is referenced in
     * @param inputIndex Id of input to be checked
     * @returns Current value of input
     */ pollInput(deviceType, deviceSlot, inputIndex) {
        return this._nativeInput.pollInput(deviceType, deviceSlot, inputIndex);
    }
    /**
     * Check for a specific device in the DeviceInputSystem
     * @param deviceType Type of device to check for
     * @returns bool with status of device's existence
     */ isDeviceAvailable(deviceType) {
        //TODO: FIx native side first
        return deviceType === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeviceType"].Mouse || deviceType === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeviceType"].Touch;
    }
    /**
     * Dispose of all the observables
     */ dispose() {
        this._nativeInput.dispose();
    }
    /**
     * For versions of BabylonNative that don't have the NativeInput plugin initialized, create a dummy version
     * @returns Object with dummy functions
     */ _createDummyNativeInput() {
        const nativeInput = {
            pollInput: ()=>{
                return 0;
            },
            isDeviceAvailable: ()=>{
                return false;
            },
            dispose: ()=>{}
        };
        return nativeInput;
    }
} //# sourceMappingURL=nativeDeviceInputSystem.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/DeviceInput/webDeviceInputSystem.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WebDeviceInputSystem",
    ()=>WebDeviceInputSystem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$domManagement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/domManagement.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/tools.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$eventFactory$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/DeviceInput/eventFactory.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/DeviceInput/InputDevices/deviceEnums.js [app-ssr] (ecmascript)");
;
;
;
;
// eslint-disable-next-line @typescript-eslint/naming-convention
const MAX_KEYCODES = 255;
// eslint-disable-next-line @typescript-eslint/naming-convention
const MAX_POINTER_INPUTS = Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PointerInput"]).length / 2;
class WebDeviceInputSystem {
    /**
     * Constructor for the WebDeviceInputSystem
     * @param engine Engine to reference
     * @param onDeviceConnected Callback to execute when device is connected
     * @param onDeviceDisconnected Callback to execute when device is disconnected
     * @param onInputChanged Callback to execute when input changes on device
     */ constructor(engine, onDeviceConnected, onDeviceDisconnected, onInputChanged){
        // Private Members
        this._inputs = [];
        this._keyboardActive = false;
        this._pointerActive = false;
        this._usingSafari = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tools"].IsSafari();
        // Found solution for determining if MacOS is being used here:
        // https://stackoverflow.com/questions/10527983/best-way-to-detect-mac-os-x-or-windows-computers-with-javascript-or-jquery
        this._usingMacOs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$domManagement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IsNavigatorAvailable"])() && /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        this._keyboardDownEvent = (evt)=>{};
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        this._keyboardUpEvent = (evt)=>{};
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        this._keyboardBlurEvent = (evt)=>{};
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        this._pointerMoveEvent = (evt)=>{};
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        this._pointerDownEvent = (evt)=>{};
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        this._pointerUpEvent = (evt)=>{};
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        this._pointerCancelEvent = (evt)=>{};
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        this._pointerCancelTouch = (pointerId)=>{};
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        this._pointerLeaveEvent = (evt)=>{};
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        this._pointerWheelEvent = (evt)=>{};
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        this._pointerBlurEvent = (evt)=>{};
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        this._pointerMacOsChromeOutEvent = (evt)=>{};
        this._eventsAttached = false;
        this._mouseId = -1;
        this._isUsingFirefox = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$domManagement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IsNavigatorAvailable"])() && navigator.userAgent && navigator.userAgent.indexOf("Firefox") !== -1;
        this._isUsingChromium = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$domManagement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IsNavigatorAvailable"])() && navigator.userAgent && navigator.userAgent.indexOf("Chrome") !== -1;
        this._maxTouchPoints = 0;
        this._pointerInputClearObserver = null;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        this._gamepadConnectedEvent = (evt)=>{};
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        this._gamepadDisconnectedEvent = (evt)=>{};
        this._eventPrefix = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tools"].GetPointerPrefix(engine);
        this._engine = engine;
        this._onDeviceConnected = onDeviceConnected;
        this._onDeviceDisconnected = onDeviceDisconnected;
        this._onInputChanged = onInputChanged;
        // If we need a pointerId, set one for future use
        this._mouseId = this._isUsingFirefox ? 0 : 1;
        this._enableEvents();
        if (this._usingMacOs) {
            this._metaKeys = [];
        }
        // Set callback to enable event handler switching when inputElement changes
        if (!this._engine._onEngineViewChanged) {
            this._engine._onEngineViewChanged = ()=>{
                this._enableEvents();
            };
        }
    }
    // Public functions
    /**
     * Checks for current device input value, given an id and input index. Throws exception if requested device not initialized.
     * @param deviceType Enum specifying device type
     * @param deviceSlot "Slot" or index that device is referenced in
     * @param inputIndex Id of input to be checked
     * @returns Current value of input
     */ pollInput(deviceType, deviceSlot, inputIndex) {
        const device = this._inputs[deviceType][deviceSlot];
        if (!device) {
            // eslint-disable-next-line no-throw-literal
            throw `Unable to find device ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeviceType"][deviceType]}`;
        }
        if (deviceType >= __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeviceType"].DualShock && deviceType <= __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeviceType"].DualSense) {
            this._updateDevice(deviceType, deviceSlot, inputIndex);
        }
        const currentValue = device[inputIndex];
        if (currentValue === undefined) {
            // eslint-disable-next-line no-throw-literal
            throw `Unable to find input ${inputIndex} for device ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeviceType"][deviceType]} in slot ${deviceSlot}`;
        }
        if (inputIndex === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PointerInput"].Move) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tools"].Warn(`Unable to provide information for PointerInput.Move.  Try using PointerInput.Horizontal or PointerInput.Vertical for move data.`);
        }
        return currentValue;
    }
    /**
     * Check for a specific device in the DeviceInputSystem
     * @param deviceType Type of device to check for
     * @returns bool with status of device's existence
     */ isDeviceAvailable(deviceType) {
        return this._inputs[deviceType] !== undefined;
    }
    /**
     * Dispose of all the eventlisteners
     */ dispose() {
        // Callbacks
        this._onDeviceConnected = ()=>{};
        this._onDeviceDisconnected = ()=>{};
        this._onInputChanged = ()=>{};
        delete this._engine._onEngineViewChanged;
        if (this._elementToAttachTo) {
            this._disableEvents();
        }
    }
    /**
     * Enable listening for user input events
     */ _enableEvents() {
        const inputElement = this?._engine.getInputElement();
        if (inputElement && (!this._eventsAttached || this._elementToAttachTo !== inputElement)) {
            // Remove events before adding to avoid double events or simultaneous events on multiple canvases
            this._disableEvents();
            // If the inputs array has already been created, zero it out to before setting up events
            if (this._inputs) {
                for (const inputs of this._inputs){
                    if (inputs) {
                        for(const deviceSlotKey in inputs){
                            const deviceSlot = +deviceSlotKey;
                            const device = inputs[deviceSlot];
                            if (device) {
                                for(let inputIndex = 0; inputIndex < device.length; inputIndex++){
                                    device[inputIndex] = 0;
                                }
                            }
                        }
                    }
                }
            }
            this._elementToAttachTo = inputElement;
            // Set tab index for the inputElement to the engine's canvasTabIndex, if and only if the element's tab index is -1
            this._elementToAttachTo.tabIndex = this._elementToAttachTo.tabIndex !== -1 ? this._elementToAttachTo.tabIndex : this._engine.canvasTabIndex;
            this._handleKeyActions();
            this._handlePointerActions();
            this._handleGamepadActions();
            this._eventsAttached = true;
            // Check for devices that are already connected but aren't registered. Currently, only checks for gamepads and mouse
            this._checkForConnectedDevices();
        }
    }
    /**
     * Disable listening for user input events
     */ _disableEvents() {
        if (this._elementToAttachTo) {
            // Blur Events
            this._elementToAttachTo.removeEventListener("blur", this._keyboardBlurEvent);
            this._elementToAttachTo.removeEventListener("blur", this._pointerBlurEvent);
            // Keyboard Events
            this._elementToAttachTo.removeEventListener("keydown", this._keyboardDownEvent);
            this._elementToAttachTo.removeEventListener("keyup", this._keyboardUpEvent);
            // Pointer Events
            this._elementToAttachTo.removeEventListener(this._eventPrefix + "move", this._pointerMoveEvent);
            this._elementToAttachTo.removeEventListener(this._eventPrefix + "down", this._pointerDownEvent);
            this._elementToAttachTo.removeEventListener(this._eventPrefix + "up", this._pointerUpEvent);
            this._elementToAttachTo.removeEventListener(this._eventPrefix + "cancel", this._pointerCancelEvent);
            this._elementToAttachTo.removeEventListener(this._eventPrefix + "leave", this._pointerLeaveEvent);
            this._elementToAttachTo.removeEventListener(this._wheelEventName, this._pointerWheelEvent);
            if (this._usingMacOs && this._isUsingChromium) {
                this._elementToAttachTo.removeEventListener("lostpointercapture", this._pointerMacOsChromeOutEvent);
            }
            // Gamepad Events
            window.removeEventListener("gamepadconnected", this._gamepadConnectedEvent);
            window.removeEventListener("gamepaddisconnected", this._gamepadDisconnectedEvent);
        }
        if (this._pointerInputClearObserver) {
            this._engine.onEndFrameObservable.remove(this._pointerInputClearObserver);
        }
        this._eventsAttached = false;
    }
    /**
     * Checks for existing connections to devices and register them, if necessary
     * Currently handles gamepads and mouse
     */ _checkForConnectedDevices() {
        if (navigator.getGamepads) {
            const gamepads = navigator.getGamepads();
            for (const gamepad of gamepads){
                if (gamepad) {
                    this._addGamePad(gamepad);
                }
            }
        }
        // If the device in use has mouse capabilities, pre-register mouse
        if (typeof matchMedia === "function" && matchMedia("(pointer:fine)").matches) {
            // This will provide a dummy value for the cursor position and is expected to be overridden when the first mouse event happens.
            // There isn't any good way to get the current position outside of a pointer event so that's why this was done.
            this._addPointerDevice(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeviceType"].Mouse, 0, 0, 0);
        }
    }
    // Private functions
    /**
     * Add a gamepad to the DeviceInputSystem
     * @param gamepad A single DOM Gamepad object
     */ _addGamePad(gamepad) {
        const deviceType = this._getGamepadDeviceType(gamepad.id);
        const deviceSlot = gamepad.index;
        this._gamepads = this._gamepads || new Array(gamepad.index + 1);
        this._registerDevice(deviceType, deviceSlot, gamepad.buttons.length + gamepad.axes.length);
        this._gamepads[deviceSlot] = deviceType;
    }
    /**
     * Add pointer device to DeviceInputSystem
     * @param deviceType Type of Pointer to add
     * @param deviceSlot Pointer ID (0 for mouse, pointerId for Touch)
     * @param currentX Current X at point of adding
     * @param currentY Current Y at point of adding
     */ _addPointerDevice(deviceType, deviceSlot, currentX, currentY) {
        if (!this._pointerActive) {
            this._pointerActive = true;
        }
        this._registerDevice(deviceType, deviceSlot, MAX_POINTER_INPUTS);
        const pointer = this._inputs[deviceType][deviceSlot]; /* initialize our pointer position immediately after registration */ 
        pointer[0] = currentX;
        pointer[1] = currentY;
    }
    /**
     * Add device and inputs to device array
     * @param deviceType Enum specifying device type
     * @param deviceSlot "Slot" or index that device is referenced in
     * @param numberOfInputs Number of input entries to create for given device
     */ _registerDevice(deviceType, deviceSlot, numberOfInputs) {
        if (deviceSlot === undefined) {
            // eslint-disable-next-line no-throw-literal
            throw `Unable to register device ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeviceType"][deviceType]} to undefined slot.`;
        }
        if (!this._inputs[deviceType]) {
            this._inputs[deviceType] = {};
        }
        if (!this._inputs[deviceType][deviceSlot]) {
            const device = new Array(numberOfInputs);
            device.fill(0);
            this._inputs[deviceType][deviceSlot] = device;
            this._onDeviceConnected(deviceType, deviceSlot);
        }
    }
    /**
     * Given a specific device name, remove that device from the device map
     * @param deviceType Enum specifying device type
     * @param deviceSlot "Slot" or index that device is referenced in
     */ _unregisterDevice(deviceType, deviceSlot) {
        if (this._inputs[deviceType][deviceSlot]) {
            delete this._inputs[deviceType][deviceSlot];
            this._onDeviceDisconnected(deviceType, deviceSlot);
        }
    }
    /**
     * Handle all actions that come from keyboard interaction
     */ _handleKeyActions() {
        this._keyboardDownEvent = (evt)=>{
            if (!this._keyboardActive) {
                this._keyboardActive = true;
                this._registerDevice(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeviceType"].Keyboard, 0, MAX_KEYCODES);
            }
            const kbKey = this._inputs[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeviceType"].Keyboard][0];
            if (kbKey) {
                kbKey[evt.keyCode] = 1;
                const deviceEvent = evt;
                deviceEvent.inputIndex = evt.keyCode;
                if (this._usingMacOs && evt.metaKey && evt.key !== "Meta") {
                    if (!this._metaKeys.includes(evt.keyCode)) {
                        this._metaKeys.push(evt.keyCode);
                    }
                }
                this._onInputChanged(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeviceType"].Keyboard, 0, deviceEvent);
            }
        };
        this._keyboardUpEvent = (evt)=>{
            if (!this._keyboardActive) {
                this._keyboardActive = true;
                this._registerDevice(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeviceType"].Keyboard, 0, MAX_KEYCODES);
            }
            const kbKey = this._inputs[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeviceType"].Keyboard][0];
            if (kbKey) {
                kbKey[evt.keyCode] = 0;
                const deviceEvent = evt;
                deviceEvent.inputIndex = evt.keyCode;
                if (this._usingMacOs && evt.key === "Meta" && this._metaKeys.length > 0) {
                    for (const keyCode of this._metaKeys){
                        const deviceEvent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$eventFactory$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeviceEventFactory"].CreateDeviceEvent(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeviceType"].Keyboard, 0, keyCode, 0, this, this._elementToAttachTo);
                        kbKey[keyCode] = 0;
                        this._onInputChanged(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeviceType"].Keyboard, 0, deviceEvent);
                    }
                    this._metaKeys.splice(0, this._metaKeys.length);
                }
                this._onInputChanged(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeviceType"].Keyboard, 0, deviceEvent);
            }
        };
        this._keyboardBlurEvent = ()=>{
            if (this._keyboardActive) {
                const kbKey = this._inputs[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeviceType"].Keyboard][0];
                for(let i = 0; i < kbKey.length; i++){
                    if (kbKey[i] !== 0) {
                        kbKey[i] = 0;
                        const deviceEvent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$eventFactory$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeviceEventFactory"].CreateDeviceEvent(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeviceType"].Keyboard, 0, i, 0, this, this._elementToAttachTo);
                        this._onInputChanged(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeviceType"].Keyboard, 0, deviceEvent);
                    }
                }
                if (this._usingMacOs) {
                    this._metaKeys.splice(0, this._metaKeys.length);
                }
            }
        };
        this._elementToAttachTo.addEventListener("keydown", this._keyboardDownEvent);
        this._elementToAttachTo.addEventListener("keyup", this._keyboardUpEvent);
        this._elementToAttachTo.addEventListener("blur", this._keyboardBlurEvent);
    }
    /**
     * Handle all actions that come from pointer interaction
     */ _handlePointerActions() {
        // If maxTouchPoints is defined, use that value.  Otherwise, allow for a minimum for supported gestures like pinch
        this._maxTouchPoints = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$domManagement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IsNavigatorAvailable"])() && navigator.maxTouchPoints || 2;
        if (!this._activeTouchIds) {
            this._activeTouchIds = new Array(this._maxTouchPoints);
        }
        for(let i = 0; i < this._maxTouchPoints; i++){
            this._activeTouchIds[i] = -1;
        }
        this._pointerMoveEvent = (evt)=>{
            const deviceType = this._getPointerType(evt);
            let deviceSlot = deviceType === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeviceType"].Mouse ? 0 : this._activeTouchIds.indexOf(evt.pointerId);
            // In the event that we're getting pointermove events from touch inputs that we aren't tracking,
            // look for an available slot and retroactively connect it.
            if (deviceType === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeviceType"].Touch && deviceSlot === -1) {
                const idx = this._activeTouchIds.indexOf(-1);
                if (idx >= 0) {
                    deviceSlot = idx;
                    this._activeTouchIds[idx] = evt.pointerId;
                    // Because this is a "new" input, inform the connected callback
                    this._onDeviceConnected(deviceType, deviceSlot);
                } else {
                    // We can't find an open slot to store new pointer so just return (can only support max number of touches)
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tools"].Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
                    return;
                }
            }
            if (!this._inputs[deviceType]) {
                this._inputs[deviceType] = {};
            }
            if (!this._inputs[deviceType][deviceSlot]) {
                this._addPointerDevice(deviceType, deviceSlot, evt.clientX, evt.clientY);
            }
            const pointer = this._inputs[deviceType][deviceSlot];
            if (pointer) {
                const deviceEvent = evt;
                deviceEvent.inputIndex = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PointerInput"].Move;
                pointer[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PointerInput"].Horizontal] = evt.clientX;
                pointer[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PointerInput"].Vertical] = evt.clientY;
                // For touches that aren't started with a down, we need to set the button state to 1
                if (deviceType === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeviceType"].Touch && pointer[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PointerInput"].LeftClick] === 0) {
                    pointer[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PointerInput"].LeftClick] = 1;
                }
                if (evt.pointerId === undefined) {
                    evt.pointerId = this._mouseId;
                }
                this._onInputChanged(deviceType, deviceSlot, deviceEvent);
                // Lets Propagate the event for move with same position.
                if (!this._usingSafari && evt.button !== -1) {
                    deviceEvent.inputIndex = evt.button + 2;
                    pointer[evt.button + 2] = pointer[evt.button + 2] ? 0 : 1; // Reverse state of button if evt.button has value
                    this._onInputChanged(deviceType, deviceSlot, deviceEvent);
                }
            }
        };
        this._pointerDownEvent = (evt)=>{
            const deviceType = this._getPointerType(evt);
            let deviceSlot = deviceType === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeviceType"].Mouse ? 0 : evt.pointerId;
            if (deviceType === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeviceType"].Touch) {
                // See if this pointerId is already using an existing slot
                // (possible on some devices which raise the pointerMove event before the pointerDown event, e.g. when using a pen)
                let idx = this._activeTouchIds.indexOf(evt.pointerId);
                if (idx === -1) {
                    // If the pointerId wasn't already using a slot, find an open one
                    idx = this._activeTouchIds.indexOf(-1);
                }
                if (idx >= 0) {
                    deviceSlot = idx;
                    this._activeTouchIds[idx] = evt.pointerId;
                } else {
                    // We can't find an open slot to store new pointer so just return (can only support max number of touches)
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tools"].Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
                    return;
                }
            }
            if (!this._inputs[deviceType]) {
                this._inputs[deviceType] = {};
            }
            if (!this._inputs[deviceType][deviceSlot]) {
                this._addPointerDevice(deviceType, deviceSlot, evt.clientX, evt.clientY);
            } else if (deviceType === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeviceType"].Touch) {
                this._onDeviceConnected(deviceType, deviceSlot);
            }
            const pointer = this._inputs[deviceType][deviceSlot];
            if (pointer) {
                const previousHorizontal = pointer[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PointerInput"].Horizontal];
                const previousVertical = pointer[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PointerInput"].Vertical];
                if (deviceType === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeviceType"].Mouse) {
                    // Mouse; Set pointerId if undefined
                    if (evt.pointerId === undefined) {
                        evt.pointerId = this._mouseId;
                    }
                    if (!document.pointerLockElement) {
                        try {
                            this._elementToAttachTo.setPointerCapture(this._mouseId);
                        } catch (e) {
                        // DO NOTHING
                        }
                    }
                } else {
                    // Touch; Since touches are dynamically assigned, only set capture if we have an id
                    if (evt.pointerId && !document.pointerLockElement) {
                        try {
                            this._elementToAttachTo.setPointerCapture(evt.pointerId);
                        } catch (e) {
                        // DO NOTHING
                        }
                    }
                }
                pointer[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PointerInput"].Horizontal] = evt.clientX;
                pointer[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PointerInput"].Vertical] = evt.clientY;
                pointer[evt.button + 2] = 1;
                const deviceEvent = evt;
                // NOTE: The +2 used here to is because PointerInput has the same value progression for its mouse buttons as PointerEvent.button
                // However, we have our X and Y values front-loaded to group together the touch inputs but not break this progression
                // EG. ([X, Y, Left-click], Middle-click, etc...)
                deviceEvent.inputIndex = evt.button + 2;
                this._onInputChanged(deviceType, deviceSlot, deviceEvent);
                if (previousHorizontal !== evt.clientX || previousVertical !== evt.clientY) {
                    deviceEvent.inputIndex = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PointerInput"].Move;
                    this._onInputChanged(deviceType, deviceSlot, deviceEvent);
                }
            }
        };
        this._pointerUpEvent = (evt)=>{
            const deviceType = this._getPointerType(evt);
            const deviceSlot = deviceType === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeviceType"].Mouse ? 0 : this._activeTouchIds.indexOf(evt.pointerId);
            if (deviceType === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeviceType"].Touch) {
                // If we're getting a pointerup event for a touch that isn't active, just return.
                if (deviceSlot === -1) {
                    return;
                } else {
                    this._activeTouchIds[deviceSlot] = -1;
                }
            }
            const pointer = this._inputs[deviceType]?.[deviceSlot];
            let button = evt.button;
            let shouldProcessPointerUp = pointer && pointer[button + 2] !== 0;
            // Workaround for an issue in Firefox on MacOS only where the browser allows the user to change left button
            // actions into right button actions by holding down control. If the user starts a drag with the control button
            // down, then lifts control, then releases the mouse, we'll get mismatched up and down events (the down will be
            // the right button, and the up will be the left button). In that specific case, where we get an up from a button
            // which didn't have a corresponding down, and we are in Firefox on MacOS, we should process the up event as if it
            // was from the other button.
            // Ideally this would be fixed in Firefox so that if you start a drag with the control button down, then the button
            // passed along to both pointer down and up would be the right button regardless of the order in which control and the
            // mouse button were released.
            // If Firefox makes a fix to ensure this is the case, this workaround can be removed.
            // Relevant forum thread: https://forum.babylonjs.com/t/camera-pan-getting-stuck-in-firefox/57158
            if (!shouldProcessPointerUp && this._isUsingFirefox && this._usingMacOs && pointer) {
                // Try the other button (left or right button)
                button = button === 2 ? 0 : 2;
                shouldProcessPointerUp = pointer[button + 2] !== 0;
            }
            if (shouldProcessPointerUp) {
                const previousHorizontal = pointer[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PointerInput"].Horizontal];
                const previousVertical = pointer[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PointerInput"].Vertical];
                pointer[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PointerInput"].Horizontal] = evt.clientX;
                pointer[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PointerInput"].Vertical] = evt.clientY;
                pointer[button + 2] = 0;
                const deviceEvent = evt;
                if (evt.pointerId === undefined) {
                    evt.pointerId = this._mouseId;
                }
                if (previousHorizontal !== evt.clientX || previousVertical !== evt.clientY) {
                    deviceEvent.inputIndex = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PointerInput"].Move;
                    this._onInputChanged(deviceType, deviceSlot, deviceEvent);
                }
                // NOTE: The +2 used here to is because PointerInput has the same value progression for its mouse buttons as PointerEvent.button
                // However, we have our X and Y values front-loaded to group together the touch inputs but not break this progression
                // EG. ([X, Y, Left-click], Middle-click, etc...)
                deviceEvent.inputIndex = button + 2;
                if (deviceType === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeviceType"].Mouse && this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId)) {
                    this._elementToAttachTo.releasePointerCapture(this._mouseId);
                } else if (evt.pointerId && this._elementToAttachTo.hasPointerCapture?.(evt.pointerId)) {
                    this._elementToAttachTo.releasePointerCapture(evt.pointerId);
                }
                this._onInputChanged(deviceType, deviceSlot, deviceEvent);
                if (deviceType === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeviceType"].Touch) {
                    this._onDeviceDisconnected(deviceType, deviceSlot);
                }
            }
        };
        this._pointerCancelTouch = (pointerId)=>{
            const deviceSlot = this._activeTouchIds.indexOf(pointerId);
            // If we're getting a pointercancel event for a touch that isn't active, just return
            if (deviceSlot === -1) {
                return;
            }
            if (this._elementToAttachTo.hasPointerCapture?.(pointerId)) {
                this._elementToAttachTo.releasePointerCapture(pointerId);
            }
            this._inputs[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeviceType"].Touch][deviceSlot][__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PointerInput"].LeftClick] = 0;
            const deviceEvent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$eventFactory$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeviceEventFactory"].CreateDeviceEvent(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeviceType"].Touch, deviceSlot, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PointerInput"].LeftClick, 0, this, this._elementToAttachTo, pointerId);
            this._onInputChanged(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeviceType"].Touch, deviceSlot, deviceEvent);
            this._activeTouchIds[deviceSlot] = -1;
            this._onDeviceDisconnected(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeviceType"].Touch, deviceSlot);
        };
        this._pointerCancelEvent = (evt)=>{
            if (evt.pointerType === "mouse") {
                const pointer = this._inputs[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeviceType"].Mouse][0];
                if (this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId)) {
                    this._elementToAttachTo.releasePointerCapture(this._mouseId);
                }
                for(let inputIndex = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PointerInput"].LeftClick; inputIndex <= __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PointerInput"].BrowserForward; inputIndex++){
                    if (pointer[inputIndex] === 1) {
                        pointer[inputIndex] = 0;
                        const deviceEvent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$eventFactory$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeviceEventFactory"].CreateDeviceEvent(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeviceType"].Mouse, 0, inputIndex, 0, this, this._elementToAttachTo);
                        this._onInputChanged(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeviceType"].Mouse, 0, deviceEvent);
                    }
                }
            } else {
                this._pointerCancelTouch(evt.pointerId);
            }
        };
        this._pointerLeaveEvent = (evt)=>{
            if (evt.pointerType === "pen") {
                // If a pen leaves the hover range detectible by the hardware this event is raised and we need to cancel the operation
                // Note that pen operations are treated as touch operations
                this._pointerCancelTouch(evt.pointerId);
            }
        };
        // Set Wheel Event Name, code originally from scene.inputManager
        this._wheelEventName = "onwheel" in document.createElement("div") ? "wheel" // Modern browsers support "wheel"
         : document.onmousewheel !== undefined ? "mousewheel" // Webkit and IE support at least "mousewheel"
         : "DOMMouseScroll"; // let's assume that remaining browsers are older Firefox
        // Code originally in scene.inputManager.ts
        // Chrome reports warning in console if wheel listener doesn't set an explicit passive option.
        // IE11 only supports captureEvent:boolean, not options:object, and it defaults to false.
        // Feature detection technique copied from: https://github.com/github/eventlistener-polyfill (MIT license)
        let passiveSupported = false;
        const noop = function() {};
        try {
            const options = Object.defineProperty({}, "passive", {
                get: function() {
                    passiveSupported = true;
                }
            });
            this._elementToAttachTo.addEventListener("test", noop, options);
            this._elementToAttachTo.removeEventListener("test", noop, options);
        } catch (e) {
        /* */ }
        this._pointerBlurEvent = ()=>{
            // Handle mouse buttons
            if (this.isDeviceAvailable(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeviceType"].Mouse)) {
                const pointer = this._inputs[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeviceType"].Mouse][0];
                if (this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId)) {
                    this._elementToAttachTo.releasePointerCapture(this._mouseId);
                }
                for(let inputIndex = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PointerInput"].LeftClick; inputIndex <= __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PointerInput"].BrowserForward; inputIndex++){
                    if (pointer[inputIndex] === 1) {
                        pointer[inputIndex] = 0;
                        const deviceEvent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$eventFactory$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeviceEventFactory"].CreateDeviceEvent(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeviceType"].Mouse, 0, inputIndex, 0, this, this._elementToAttachTo);
                        this._onInputChanged(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeviceType"].Mouse, 0, deviceEvent);
                    }
                }
            }
            // Handle Active Touches
            if (this.isDeviceAvailable(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeviceType"].Touch)) {
                const pointer = this._inputs[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeviceType"].Touch];
                for(let deviceSlot = 0; deviceSlot < this._activeTouchIds.length; deviceSlot++){
                    const pointerId = this._activeTouchIds[deviceSlot];
                    if (this._elementToAttachTo.hasPointerCapture?.(pointerId)) {
                        this._elementToAttachTo.releasePointerCapture(pointerId);
                    }
                    if (pointerId !== -1 && pointer[deviceSlot]?.[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PointerInput"].LeftClick] === 1) {
                        pointer[deviceSlot][__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PointerInput"].LeftClick] = 0;
                        const deviceEvent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$eventFactory$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeviceEventFactory"].CreateDeviceEvent(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeviceType"].Touch, deviceSlot, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PointerInput"].LeftClick, 0, this, this._elementToAttachTo, pointerId);
                        this._onInputChanged(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeviceType"].Touch, deviceSlot, deviceEvent);
                        this._activeTouchIds[deviceSlot] = -1;
                        this._onDeviceDisconnected(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeviceType"].Touch, deviceSlot);
                    }
                }
            }
        };
        this._pointerWheelEvent = (evt)=>{
            const deviceType = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeviceType"].Mouse;
            const deviceSlot = 0;
            if (!this._inputs[deviceType]) {
                this._inputs[deviceType] = [];
            }
            if (!this._inputs[deviceType][deviceSlot]) {
                this._pointerActive = true;
                this._registerDevice(deviceType, deviceSlot, MAX_POINTER_INPUTS);
            }
            const pointer = this._inputs[deviceType][deviceSlot];
            if (pointer) {
                pointer[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PointerInput"].MouseWheelX] = evt.deltaX || 0;
                pointer[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PointerInput"].MouseWheelY] = evt.deltaY || evt.wheelDelta || 0;
                pointer[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PointerInput"].MouseWheelZ] = evt.deltaZ || 0;
                const deviceEvent = evt;
                // By default, there is no pointerId for mouse wheel events so we'll add one here
                // This logic was originally in the InputManager but was added here to make the
                // InputManager more platform-agnostic
                if (evt.pointerId === undefined) {
                    evt.pointerId = this._mouseId;
                }
                if (pointer[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PointerInput"].MouseWheelX] !== 0) {
                    deviceEvent.inputIndex = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PointerInput"].MouseWheelX;
                    this._onInputChanged(deviceType, deviceSlot, deviceEvent);
                }
                if (pointer[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PointerInput"].MouseWheelY] !== 0) {
                    deviceEvent.inputIndex = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PointerInput"].MouseWheelY;
                    this._onInputChanged(deviceType, deviceSlot, deviceEvent);
                }
                if (pointer[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PointerInput"].MouseWheelZ] !== 0) {
                    deviceEvent.inputIndex = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PointerInput"].MouseWheelZ;
                    this._onInputChanged(deviceType, deviceSlot, deviceEvent);
                }
            }
        };
        // Workaround for MacOS Chromium Browsers for lost pointer capture bug
        if (this._usingMacOs && this._isUsingChromium) {
            this._pointerMacOsChromeOutEvent = (evt)=>{
                if (evt.buttons > 1) {
                    this._pointerCancelEvent(evt);
                }
            };
            this._elementToAttachTo.addEventListener("lostpointercapture", this._pointerMacOsChromeOutEvent);
        }
        this._elementToAttachTo.addEventListener(this._eventPrefix + "move", this._pointerMoveEvent);
        this._elementToAttachTo.addEventListener(this._eventPrefix + "down", this._pointerDownEvent);
        this._elementToAttachTo.addEventListener(this._eventPrefix + "up", this._pointerUpEvent);
        this._elementToAttachTo.addEventListener(this._eventPrefix + "cancel", this._pointerCancelEvent);
        this._elementToAttachTo.addEventListener(this._eventPrefix + "leave", this._pointerLeaveEvent);
        this._elementToAttachTo.addEventListener("blur", this._pointerBlurEvent);
        this._elementToAttachTo.addEventListener(this._wheelEventName, this._pointerWheelEvent, passiveSupported ? {
            passive: false
        } : false);
        // Since there's no up or down event for mouse wheel or delta x/y, clear mouse values at end of frame
        this._pointerInputClearObserver = this._engine.onEndFrameObservable.add(()=>{
            if (this.isDeviceAvailable(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeviceType"].Mouse)) {
                const pointer = this._inputs[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeviceType"].Mouse][0];
                pointer[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PointerInput"].MouseWheelX] = 0;
                pointer[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PointerInput"].MouseWheelY] = 0;
                pointer[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PointerInput"].MouseWheelZ] = 0;
            }
        });
    }
    /**
     * Handle all actions that come from gamepad interaction
     */ _handleGamepadActions() {
        this._gamepadConnectedEvent = (evt)=>{
            this._addGamePad(evt.gamepad);
        };
        this._gamepadDisconnectedEvent = (evt)=>{
            if (this._gamepads) {
                const deviceType = this._getGamepadDeviceType(evt.gamepad.id);
                const deviceSlot = evt.gamepad.index;
                this._unregisterDevice(deviceType, deviceSlot);
                delete this._gamepads[deviceSlot];
            }
        };
        window.addEventListener("gamepadconnected", this._gamepadConnectedEvent);
        window.addEventListener("gamepaddisconnected", this._gamepadDisconnectedEvent);
    }
    /**
     * Update all non-event based devices with each frame
     * @param deviceType Enum specifying device type
     * @param deviceSlot "Slot" or index that device is referenced in
     * @param inputIndex Id of input to be checked
     */ _updateDevice(deviceType, deviceSlot, inputIndex) {
        // Gamepads
        const gp = navigator.getGamepads()[deviceSlot];
        if (gp && deviceType === this._gamepads[deviceSlot]) {
            const device = this._inputs[deviceType][deviceSlot];
            if (inputIndex >= gp.buttons.length) {
                device[inputIndex] = gp.axes[inputIndex - gp.buttons.length].valueOf();
            } else {
                device[inputIndex] = gp.buttons[inputIndex].value;
            }
        }
    }
    /**
     * Gets DeviceType from the device name
     * @param deviceName Name of Device from DeviceInputSystem
     * @returns DeviceType enum value
     */ _getGamepadDeviceType(deviceName) {
        if (deviceName.indexOf("054c") !== -1) {
            // DualShock 4 Gamepad
            return deviceName.indexOf("0ce6") !== -1 ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeviceType"].DualSense : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeviceType"].DualShock;
        } else if (deviceName.indexOf("Xbox One") !== -1 || deviceName.search("Xbox 360") !== -1 || deviceName.search("xinput") !== -1) {
            // Xbox Gamepad
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeviceType"].Xbox;
        } else if (deviceName.indexOf("057e") !== -1) {
            // Switch Gamepad
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeviceType"].Switch;
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeviceType"].Generic;
    }
    /**
     * Get DeviceType from a given pointer/mouse/touch event.
     * @param evt PointerEvent to evaluate
     * @returns DeviceType interpreted from event
     */ _getPointerType(evt) {
        let deviceType = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeviceType"].Mouse;
        if (evt.pointerType === "touch" || evt.pointerType === "pen" || evt.touches) {
            deviceType = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeviceType"].Touch;
        }
        return deviceType;
    }
} //# sourceMappingURL=webDeviceInputSystem.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/DeviceInput/InputDevices/deviceSource.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DeviceSource",
    ()=>DeviceSource
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/observable.js [app-ssr] (ecmascript)");
;
class DeviceSource {
    /**
     * Default Constructor
     * @param deviceInputSystem - Reference to DeviceInputSystem
     * @param deviceType - Type of device
     * @param deviceSlot - "Slot" or index that device is referenced in
     */ constructor(deviceInputSystem, /** Type of device */ deviceType, /** [0] "Slot" or index that device is referenced in */ deviceSlot = 0){
        this.deviceType = deviceType;
        this.deviceSlot = deviceSlot;
        // Public Members
        /**
         * Observable to handle device input changes per device
         */ this.onInputChangedObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
        this._deviceInputSystem = deviceInputSystem;
    }
    /**
     * Get input for specific input
     * @param inputIndex - index of specific input on device
     * @returns Input value from DeviceInputSystem
     */ getInput(inputIndex) {
        return this._deviceInputSystem.pollInput(this.deviceType, this.deviceSlot, inputIndex);
    }
} //# sourceMappingURL=deviceSource.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/DeviceInput/internalDeviceSourceManager.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InternalDeviceSourceManager",
    ()=>InternalDeviceSourceManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/DeviceInput/InputDevices/deviceEnums.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$nativeDeviceInputSystem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/DeviceInput/nativeDeviceInputSystem.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$webDeviceInputSystem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/DeviceInput/webDeviceInputSystem.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceSource$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/DeviceInput/InputDevices/deviceSource.js [app-ssr] (ecmascript)");
;
;
;
;
class InternalDeviceSourceManager {
    constructor(engine){
        this._registeredManagers = new Array();
        this._refCount = 0;
        // Public Functions
        this.registerManager = (manager)=>{
            for(let deviceType = 0; deviceType < this._devices.length; deviceType++){
                const device = this._devices[deviceType];
                for(const deviceSlotKey in device){
                    const deviceSlot = +deviceSlotKey;
                    manager._addDevice(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceSource$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeviceSource"](this._deviceInputSystem, deviceType, deviceSlot));
                }
            }
            this._registeredManagers.push(manager);
        };
        this.unregisterManager = (manager)=>{
            const idx = this._registeredManagers.indexOf(manager);
            if (idx > -1) {
                this._registeredManagers.splice(idx, 1);
            }
        };
        const numberOfDeviceTypes = Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeviceType"]).length / 2;
        this._devices = new Array(numberOfDeviceTypes);
        const onDeviceConnected = (deviceType, deviceSlot)=>{
            if (!this._devices[deviceType]) {
                this._devices[deviceType] = new Array();
            }
            if (!this._devices[deviceType][deviceSlot]) {
                this._devices[deviceType][deviceSlot] = deviceSlot;
            }
            for (const manager of this._registeredManagers){
                const deviceSource = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceSource$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeviceSource"](this._deviceInputSystem, deviceType, deviceSlot);
                manager._addDevice(deviceSource);
            }
        };
        const onDeviceDisconnected = (deviceType, deviceSlot)=>{
            if (this._devices[deviceType]?.[deviceSlot]) {
                delete this._devices[deviceType][deviceSlot];
            }
            for (const manager of this._registeredManagers){
                manager._removeDevice(deviceType, deviceSlot);
            }
        };
        const onInputChanged = (deviceType, deviceSlot, eventData)=>{
            if (eventData) {
                for (const manager of this._registeredManagers){
                    manager._onInputChanged(deviceType, deviceSlot, eventData);
                }
            }
        };
        if (typeof _native !== "undefined") {
            this._deviceInputSystem = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$nativeDeviceInputSystem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NativeDeviceInputSystem"](onDeviceConnected, onDeviceDisconnected, onInputChanged);
        } else {
            this._deviceInputSystem = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$webDeviceInputSystem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebDeviceInputSystem"](engine, onDeviceConnected, onDeviceDisconnected, onInputChanged);
        }
    }
    dispose() {
        this._deviceInputSystem.dispose();
    }
} //# sourceMappingURL=internalDeviceSourceManager.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/DeviceInput/InputDevices/deviceSourceManager.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DeviceSourceManager",
    ()=>DeviceSourceManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/DeviceInput/InputDevices/deviceEnums.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/observable.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$internalDeviceSourceManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/DeviceInput/internalDeviceSourceManager.js [app-ssr] (ecmascript)");
;
;
;
class DeviceSourceManager {
    // Public Functions
    /**
     * Gets a DeviceSource, given a type and slot
     * @param deviceType - Type of Device
     * @param deviceSlot - Slot or ID of device
     * @returns DeviceSource
     */ getDeviceSource(deviceType, deviceSlot) {
        if (deviceSlot === undefined) {
            if (this._firstDevice[deviceType] === undefined) {
                return null;
            }
            deviceSlot = this._firstDevice[deviceType];
        }
        if (!this._devices[deviceType] || this._devices[deviceType][deviceSlot] === undefined) {
            return null;
        }
        return this._devices[deviceType][deviceSlot];
    }
    /**
     * Gets an array of DeviceSource objects for a given device type
     * @param deviceType - Type of Device
     * @returns All available DeviceSources of a given type
     */ getDeviceSources(deviceType) {
        // If device type hasn't had any devices connected yet, return empty array.
        if (!this._devices[deviceType]) {
            return [];
        }
        return this._devices[deviceType].filter((source)=>{
            return !!source;
        });
    }
    /**
     * Default constructor
     * @param engine - Used to get canvas (if applicable)
     */ constructor(engine){
        const numberOfDeviceTypes = Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeviceType"]).length / 2;
        this._devices = new Array(numberOfDeviceTypes);
        this._firstDevice = new Array(numberOfDeviceTypes);
        this._engine = engine;
        if (!this._engine._deviceSourceManager) {
            this._engine._deviceSourceManager = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$internalDeviceSourceManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InternalDeviceSourceManager"](engine);
        }
        this._engine._deviceSourceManager._refCount++;
        // Observables
        this.onDeviceConnectedObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]((observer)=>{
            for (const devices of this._devices){
                if (devices) {
                    for (const device of devices){
                        if (device) {
                            this.onDeviceConnectedObservable.notifyObserver(observer, device);
                        }
                    }
                }
            }
        });
        this.onDeviceDisconnectedObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
        this._engine._deviceSourceManager.registerManager(this);
        this._onDisposeObserver = engine.onDisposeObservable.add(()=>{
            this.dispose();
        });
    }
    /**
     * Dispose of DeviceSourceManager
     */ dispose() {
        // Null out observable refs
        this.onDeviceConnectedObservable.clear();
        this.onDeviceDisconnectedObservable.clear();
        if (this._engine._deviceSourceManager) {
            this._engine._deviceSourceManager.unregisterManager(this);
            if (--this._engine._deviceSourceManager._refCount < 1) {
                this._engine._deviceSourceManager.dispose();
                delete this._engine._deviceSourceManager;
            }
        }
        this._engine.onDisposeObservable.remove(this._onDisposeObserver);
    }
    // Hidden Functions
    /**
     * @param deviceSource - Source to add
     * @internal
     */ _addDevice(deviceSource) {
        if (!this._devices[deviceSource.deviceType]) {
            this._devices[deviceSource.deviceType] = [];
        }
        if (!this._devices[deviceSource.deviceType][deviceSource.deviceSlot]) {
            this._devices[deviceSource.deviceType][deviceSource.deviceSlot] = deviceSource;
            this._updateFirstDevices(deviceSource.deviceType);
        }
        this.onDeviceConnectedObservable.notifyObservers(deviceSource);
    }
    /**
     * @param deviceType - DeviceType
     * @param deviceSlot - DeviceSlot
     * @internal
     */ _removeDevice(deviceType, deviceSlot) {
        const deviceSource = this._devices[deviceType]?.[deviceSlot]; // Grab local reference to use before removing from devices
        this.onDeviceDisconnectedObservable.notifyObservers(deviceSource);
        if (this._devices[deviceType]?.[deviceSlot]) {
            delete this._devices[deviceType][deviceSlot];
        }
        // Even if we don't delete a device, we should still check for the first device as things may have gotten out of sync.
        this._updateFirstDevices(deviceType);
    }
    /**
     * @param deviceType - DeviceType
     * @param deviceSlot - DeviceSlot
     * @param eventData - Event
     * @internal
     */ _onInputChanged(deviceType, deviceSlot, eventData) {
        this._devices[deviceType]?.[deviceSlot]?.onInputChangedObservable.notifyObservers(eventData);
    }
    // Private Functions
    _updateFirstDevices(type) {
        switch(type){
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeviceType"].Keyboard:
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeviceType"].Mouse:
                this._firstDevice[type] = 0;
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeviceType"].Touch:
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeviceType"].DualSense:
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeviceType"].DualShock:
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeviceType"].Xbox:
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeviceType"].Switch:
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeviceType"].Generic:
                {
                    delete this._firstDevice[type];
                    // eslint-disable-next-line no-case-declarations
                    const devices = this._devices[type];
                    if (devices) {
                        for(let i = 0; i < devices.length; i++){
                            if (devices[i]) {
                                this._firstDevice[type] = i;
                                break;
                            }
                        }
                    }
                    break;
                }
        }
    }
} //# sourceMappingURL=deviceSourceManager.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/DeviceInput/InputDevices/deviceTypes.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
 //# sourceMappingURL=deviceTypes.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/DeviceInput/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/DeviceInput/InputDevices/deviceEnums.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/DeviceInput/InputDevices/deviceTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceSource$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/DeviceInput/InputDevices/deviceSource.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceSourceManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/DeviceInput/InputDevices/deviceSourceManager.js [app-ssr] (ecmascript)"); //# sourceMappingURL=index.js.map
;
;
;
;
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/DeviceInput/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DeviceSource",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceSource$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeviceSource"],
    "DeviceSourceManager",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceSourceManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeviceSourceManager"],
    "DeviceType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeviceType"],
    "DualSenseInput",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DualSenseInput"],
    "DualShockInput",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DualShockInput"],
    "NativePointerInput",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NativePointerInput"],
    "PointerInput",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PointerInput"],
    "SwitchInput",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SwitchInput"],
    "XboxInput",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XboxInput"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/DeviceInput/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceEnums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/DeviceInput/InputDevices/deviceEnums.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/DeviceInput/InputDevices/deviceTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceSource$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/DeviceInput/InputDevices/deviceSource.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$DeviceInput$2f$InputDevices$2f$deviceSourceManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/DeviceInput/InputDevices/deviceSourceManager.js [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=dcdbf_%40babylonjs_core_DeviceInput_1fde1c49._.js.map