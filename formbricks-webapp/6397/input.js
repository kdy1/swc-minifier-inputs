"use strict";
exports.id = 6397;
exports.ids = [6397];
exports.modules = {

/***/ 547380:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.regionAPIs = void 0;
exports.regionAPIs = new Map([
    ["us", "https://api-iam.intercom.io"],
    ["eu", "https://api-iam.eu.intercom.io"],
    ["ap", "https://api-iam.au.intercom.io"]
]);


/***/ }),

/***/ 19061:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.onUserEmailSupplied = exports.showConversation = exports.showTicket = exports.startChecklist = exports.startSurvey = exports.showNews = exports.showArticle = exports.startTour = exports.getVisitorId = exports.trackEvent = exports.onUnreadCountChange = exports.onShow = exports.onHide = exports.showNewMessage = exports.showMessages = exports.showSpace = exports.show = exports.hide = exports.update = exports.shutdown = exports.boot = exports.Intercom = void 0;
const constants_1 = __webpack_require__(547380);
const instance_manager_1 = __webpack_require__(40384);
const callIntercomMethod = (method, ...args) => {
    // window is undefined on server-side and this breaks our widget
    if (typeof window !== undefined && window.Intercom) {
        window.Intercom(method, ...args);
    }
    else {
        console.warn("Please ensure Intercom is setup and running on client-side!");
    }
};
const Intercom = (props) => {
    if (typeof props !== "object") {
        console.warn("Intercom initialiser called with invalid parameters.");
        return;
    }
    const { region = "us" } = props, args = __rest(props, ["region"]);
    if (typeof window !== "undefined" && !instance_manager_1.ref) {
        window.intercomSettings = Object.assign(Object.assign({}, args), { api_base: constants_1.regionAPIs.get(region) });
        (0, instance_manager_1.init)();
    }
};
exports.Intercom = Intercom;
// Public functions that can be called from outside the module
exports["default"] = exports.Intercom;
const boot = (arg) => callIntercomMethod("boot", arg);
exports.boot = boot;
const shutdown = () => callIntercomMethod("shutdown");
exports.shutdown = shutdown;
const update = (arg) => callIntercomMethod("update", arg);
exports.update = update;
const hide = () => callIntercomMethod("hide");
exports.hide = hide;
const show = () => callIntercomMethod("show");
exports.show = show;
const showSpace = (spaceName) => callIntercomMethod("showSpace", spaceName);
exports.showSpace = showSpace;
const showMessages = () => callIntercomMethod("showMessages");
exports.showMessages = showMessages;
const showNewMessage = (prePopulatedContent) => callIntercomMethod("showNewMessage", prePopulatedContent);
exports.showNewMessage = showNewMessage;
const onHide = (callback) => callIntercomMethod("onHide", callback);
exports.onHide = onHide;
const onShow = (callback) => callIntercomMethod("onShow", callback);
exports.onShow = onShow;
const onUnreadCountChange = (callback) => callIntercomMethod("onUnreadCountChange", callback);
exports.onUnreadCountChange = onUnreadCountChange;
const trackEvent = (...args) => callIntercomMethod("trackEvent", ...args);
exports.trackEvent = trackEvent;
const getVisitorId = () => callIntercomMethod("getVisitorId");
exports.getVisitorId = getVisitorId;
const startTour = (tourId) => callIntercomMethod("startTour", tourId);
exports.startTour = startTour;
const showArticle = (articleId) => callIntercomMethod("showArticle", articleId);
exports.showArticle = showArticle;
const showNews = (newsItemId) => callIntercomMethod("showNews", newsItemId);
exports.showNews = showNews;
const startSurvey = (surveyId) => callIntercomMethod("startSurvey", surveyId);
exports.startSurvey = startSurvey;
const startChecklist = (checklistId) => callIntercomMethod("startChecklist", checklistId);
exports.startChecklist = startChecklist;
const showTicket = (ticketId) => callIntercomMethod("showTicket", ticketId);
exports.showTicket = showTicket;
const showConversation = (conversationId) => callIntercomMethod("showConversation", conversationId);
exports.showConversation = showConversation;
const onUserEmailSupplied = (callback) => callIntercomMethod("onUserEmailSupplied", callback);
exports.onUserEmailSupplied = onUserEmailSupplied;


/***/ }),

/***/ 40384:
/***/ (function(__unused_webpack_module, exports) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ref = exports.init = void 0;
const scriptElementId = "_intercom_npm_loader";
// This holds a queue of commands to be passed to the messenger widget API after it is added to the page
const queueHolder = function () {
    queueHolder.loaderQueue(arguments);
};
queueHolder.q = [];
queueHolder.loaderQueue = function (args) {
    queueHolder.q.push(args);
};
const addWidgetToPage = function () {
    var _a, _b;
    var d = document;
    if (d.getElementById(scriptElementId)) {
        // script is already in DOM
        return;
    }
    var s = d.createElement("script");
    s.type = "text/javascript";
    s.async = true;
    s.id = scriptElementId;
    s.src =
        "https://widget.intercom.io/widget/" + ((_a = window.intercomSettings) === null || _a === void 0 ? void 0 : _a.app_id);
    var x = d.getElementsByTagName("script")[0];
    (_b = x.parentNode) === null || _b === void 0 ? void 0 : _b.insertBefore(s, x);
};
const isDocumentReady = () => document.readyState === "complete" || document.readyState === "interactive";
const init = () => __awaiter(void 0, void 0, void 0, function* () {
    var w = window;
    var ic = w.Intercom;
    if (w.intercomSettings) {
        w.intercomSettings.installation_type = "npm-package";
    }
    if (typeof ic === "function") {
        ic("reattach_activator");
        ic("update", w.intercomSettings);
    }
    else {
        w.Intercom = queueHolder;
        if (isDocumentReady()) {
            addWidgetToPage();
        }
        else {
            document.addEventListener("readystatechange", function () {
                if (isDocumentReady()) {
                    addWidgetToPage();
                }
            });
            if (w.attachEvent) {
                w.attachEvent("onload", addWidgetToPage);
            }
            else {
                w.addEventListener("load", addWidgetToPage, false);
            }
        }
    }
});
exports.init = init;
exports.ref = undefined;


/***/ }),

/***/ 620394:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ ArrowUpRight)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58303);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const ArrowUpRight = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("ArrowUpRight", [
    [
        "path",
        {
            d: "M7 7h10v10",
            key: "1tivn9"
        }
    ],
    [
        "path",
        {
            d: "M7 17 17 7",
            key: "1vkiza"
        }
    ]
]);
 //# sourceMappingURL=arrow-up-right.js.map


/***/ }),

/***/ 178741:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Key)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58303);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Key = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("Key", [
    [
        "path",
        {
            d: "m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",
            key: "g0fldk"
        }
    ],
    [
        "path",
        {
            d: "m21 2-9.6 9.6",
            key: "1j0ho8"
        }
    ],
    [
        "circle",
        {
            cx: "7.5",
            cy: "15.5",
            r: "5.5",
            key: "yqb3hr"
        }
    ]
]);
 //# sourceMappingURL=key.js.map


/***/ }),

/***/ 467935:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ TriangleAlert)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58303);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const TriangleAlert = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("TriangleAlert", [
    [
        "path",
        {
            d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
            key: "wmoenq"
        }
    ],
    [
        "path",
        {
            d: "M12 9v4",
            key: "juzpu7"
        }
    ],
    [
        "path",
        {
            d: "M12 17h.01",
            key: "p32p05"
        }
    ]
]);
 //# sourceMappingURL=triangle-alert.js.map


/***/ }),

/***/ 969614:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Users)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58303);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Users = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("Users", [
    [
        "path",
        {
            d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
            key: "1yyitq"
        }
    ],
    [
        "circle",
        {
            cx: "9",
            cy: "7",
            r: "4",
            key: "nufk8"
        }
    ],
    [
        "path",
        {
            d: "M22 21v-2a4 4 0 0 0-3-3.87",
            key: "kshegd"
        }
    ],
    [
        "path",
        {
            d: "M16 3.13a4 4 0 0 1 0 7.75",
            key: "1da9ce"
        }
    ]
]);
 //# sourceMappingURL=users.js.map


/***/ }),

/***/ 95679:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ clamp)
/* harmony export */ });
// packages/core/number/src/number.ts
function clamp(value, [min, max]) {
  return Math.min(max, Math.max(min, value));
}

//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ 750408:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JU: () => (/* binding */ Label),
/* harmony export */   LM: () => (/* binding */ Viewport),
/* harmony export */   UC: () => (/* binding */ Content2),
/* harmony export */   WT: () => (/* binding */ Value),
/* harmony export */   YJ: () => (/* binding */ Group),
/* harmony export */   ZL: () => (/* binding */ Portal),
/* harmony export */   bL: () => (/* binding */ Root2),
/* harmony export */   l9: () => (/* binding */ Trigger),
/* harmony export */   p4: () => (/* binding */ ItemText),
/* harmony export */   q7: () => (/* binding */ Item),
/* harmony export */   wv: () => (/* binding */ Separator)
/* harmony export */ });
/* unused harmony exports Arrow, Icon, ItemIndicator, ScrollDownButton, ScrollUpButton, Select, SelectArrow, SelectContent, SelectGroup, SelectIcon, SelectItem, SelectItemIndicator, SelectItemText, SelectLabel, SelectPortal, SelectScrollDownButton, SelectScrollUpButton, SelectSeparator, SelectTrigger, SelectValue, SelectViewport, createSelectScope */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(891616);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(787377);
/* harmony import */ var _radix_ui_number__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(95679);
/* harmony import */ var _radix_ui_primitive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(763095);
/* harmony import */ var _radix_ui_react_collection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(882756);
/* harmony import */ var _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(730613);
/* harmony import */ var _radix_ui_react_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(176235);
/* harmony import */ var _radix_ui_react_direction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(506737);
/* harmony import */ var _radix_ui_react_dismissable_layer__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(924166);
/* harmony import */ var _radix_ui_react_focus_guards__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(62949);
/* harmony import */ var _radix_ui_react_focus_scope__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(101125);
/* harmony import */ var _radix_ui_react_id__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(585925);
/* harmony import */ var _radix_ui_react_popper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(819778);
/* harmony import */ var _radix_ui_react_portal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(715318);
/* harmony import */ var _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(832713);
/* harmony import */ var _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(189300);
/* harmony import */ var _radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(555325);
/* harmony import */ var _radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(409689);
/* harmony import */ var _radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(473462);
/* harmony import */ var _radix_ui_react_use_previous__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(809391);
/* harmony import */ var _radix_ui_react_visually_hidden__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(607346);
/* harmony import */ var aria_hidden__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(99362);
/* harmony import */ var react_remove_scroll__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(745974);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(642725);
/* __next_internal_client_entry_do_not_use__ Arrow,Content,Group,Icon,Item,ItemIndicator,ItemText,Label,Portal,Root,ScrollDownButton,ScrollUpButton,Select,SelectArrow,SelectContent,SelectGroup,SelectIcon,SelectItem,SelectItemIndicator,SelectItemText,SelectLabel,SelectPortal,SelectScrollDownButton,SelectScrollUpButton,SelectSeparator,SelectTrigger,SelectValue,SelectViewport,Separator,Trigger,Value,Viewport,createSelectScope auto */ // packages/react/select/src/Select.tsx

























var OPEN_KEYS = [
    " ",
    "Enter",
    "ArrowUp",
    "ArrowDown"
];
var SELECTION_KEYS = [
    " ",
    "Enter"
];
var SELECT_NAME = "Select";
var [Collection, useCollection, createCollectionScope] = (0,_radix_ui_react_collection__WEBPACK_IMPORTED_MODULE_3__/* .createCollection */ .N)(SELECT_NAME);
var [createSelectContext, createSelectScope] = (0,_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_4__/* .createContextScope */ .A)(SELECT_NAME, [
    createCollectionScope,
    _radix_ui_react_popper__WEBPACK_IMPORTED_MODULE_5__/* .createPopperScope */ .Bk
]);
var usePopperScope = (0,_radix_ui_react_popper__WEBPACK_IMPORTED_MODULE_5__/* .createPopperScope */ .Bk)();
var [SelectProvider, useSelectContext] = createSelectContext(SELECT_NAME);
var [SelectNativeOptionsProvider, useSelectNativeOptionsContext] = createSelectContext(SELECT_NAME);
var Select = (props)=>{
    const { __scopeSelect, children, open: openProp, defaultOpen, onOpenChange, value: valueProp, defaultValue, onValueChange, dir, name, autoComplete, disabled, required, form } = props;
    const popperScope = usePopperScope(__scopeSelect);
    const [trigger, setTrigger] = react__WEBPACK_IMPORTED_MODULE_0__.useState(null);
    const [valueNode, setValueNode] = react__WEBPACK_IMPORTED_MODULE_0__.useState(null);
    const [valueNodeHasChildren, setValueNodeHasChildren] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);
    const direction = (0,_radix_ui_react_direction__WEBPACK_IMPORTED_MODULE_6__/* .useDirection */ .jH)(dir);
    const [open = false, setOpen] = (0,_radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_7__/* .useControllableState */ .i)({
        prop: openProp,
        defaultProp: defaultOpen,
        onChange: onOpenChange
    });
    const [value, setValue] = (0,_radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_7__/* .useControllableState */ .i)({
        prop: valueProp,
        defaultProp: defaultValue,
        onChange: onValueChange
    });
    const triggerPointerDownPosRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    const isFormControl = trigger ? form || !!trigger.closest("form") : true;
    const [nativeOptionsSet, setNativeOptionsSet] = react__WEBPACK_IMPORTED_MODULE_0__.useState(/* @__PURE__ */ new Set());
    const nativeSelectKey = Array.from(nativeOptionsSet).map((option)=>option.props.value).join(";");
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_radix_ui_react_popper__WEBPACK_IMPORTED_MODULE_5__/* .Root */ .bL, {
        ...popperScope,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(SelectProvider, {
            required,
            scope: __scopeSelect,
            trigger,
            onTriggerChange: setTrigger,
            valueNode,
            onValueNodeChange: setValueNode,
            valueNodeHasChildren,
            onValueNodeHasChildrenChange: setValueNodeHasChildren,
            contentId: (0,_radix_ui_react_id__WEBPACK_IMPORTED_MODULE_8__/* .useId */ .B)(),
            value,
            onValueChange: setValue,
            open,
            onOpenChange: setOpen,
            dir: direction,
            triggerPointerDownPosRef,
            disabled,
            children: [
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Collection.Provider, {
                    scope: __scopeSelect,
                    children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(SelectNativeOptionsProvider, {
                        scope: props.__scopeSelect,
                        onNativeOptionAdd: react__WEBPACK_IMPORTED_MODULE_0__.useCallback((option)=>{
                            setNativeOptionsSet((prev)=>new Set(prev).add(option));
                        }, []),
                        onNativeOptionRemove: react__WEBPACK_IMPORTED_MODULE_0__.useCallback((option)=>{
                            setNativeOptionsSet((prev)=>{
                                const optionsSet = new Set(prev);
                                optionsSet.delete(option);
                                return optionsSet;
                            });
                        }, []),
                        children
                    })
                }),
                isFormControl ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(BubbleSelect, {
                    "aria-hidden": true,
                    required,
                    tabIndex: -1,
                    name,
                    autoComplete,
                    value,
                    onChange: (event)=>setValue(event.target.value),
                    disabled,
                    form,
                    children: [
                        value === void 0 ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("option", {
                            value: ""
                        }) : null,
                        Array.from(nativeOptionsSet)
                    ]
                }, nativeSelectKey) : null
            ]
        })
    });
};
Select.displayName = SELECT_NAME;
var TRIGGER_NAME = "SelectTrigger";
var SelectTrigger = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
    const { __scopeSelect, disabled = false, ...triggerProps } = props;
    const popperScope = usePopperScope(__scopeSelect);
    const context = useSelectContext(TRIGGER_NAME, __scopeSelect);
    const isDisabled = context.disabled || disabled;
    const composedRefs = (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_9__/* .useComposedRefs */ .s)(forwardedRef, context.onTriggerChange);
    const getItems = useCollection(__scopeSelect);
    const pointerTypeRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef("touch");
    const [searchRef, handleTypeaheadSearch, resetTypeahead] = useTypeaheadSearch((search)=>{
        const enabledItems = getItems().filter((item)=>!item.disabled);
        const currentItem = enabledItems.find((item)=>item.value === context.value);
        const nextItem = findNextItem(enabledItems, search, currentItem);
        if (nextItem !== void 0) {
            context.onValueChange(nextItem.value);
        }
    });
    const handleOpen = (pointerEvent)=>{
        if (!isDisabled) {
            context.onOpenChange(true);
            resetTypeahead();
        }
        if (pointerEvent) {
            context.triggerPointerDownPosRef.current = {
                x: Math.round(pointerEvent.pageX),
                y: Math.round(pointerEvent.pageY)
            };
        }
    };
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_radix_ui_react_popper__WEBPACK_IMPORTED_MODULE_5__/* .Anchor */ .Mz, {
        asChild: true,
        ...popperScope,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_10__/* .Primitive */ .sG.button, {
            type: "button",
            role: "combobox",
            "aria-controls": context.contentId,
            "aria-expanded": context.open,
            "aria-required": context.required,
            "aria-autocomplete": "none",
            dir: context.dir,
            "data-state": context.open ? "open" : "closed",
            disabled: isDisabled,
            "data-disabled": isDisabled ? "" : void 0,
            "data-placeholder": shouldShowPlaceholder(context.value) ? "" : void 0,
            ...triggerProps,
            ref: composedRefs,
            onClick: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_11__/* .composeEventHandlers */ .m)(triggerProps.onClick, (event)=>{
                event.currentTarget.focus();
                if (pointerTypeRef.current !== "mouse") {
                    handleOpen(event);
                }
            }),
            onPointerDown: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_11__/* .composeEventHandlers */ .m)(triggerProps.onPointerDown, (event)=>{
                pointerTypeRef.current = event.pointerType;
                const target = event.target;
                if (target.hasPointerCapture(event.pointerId)) {
                    target.releasePointerCapture(event.pointerId);
                }
                if (event.button === 0 && event.ctrlKey === false && event.pointerType === "mouse") {
                    handleOpen(event);
                    event.preventDefault();
                }
            }),
            onKeyDown: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_11__/* .composeEventHandlers */ .m)(triggerProps.onKeyDown, (event)=>{
                const isTypingAhead = searchRef.current !== "";
                const isModifierKey = event.ctrlKey || event.altKey || event.metaKey;
                if (!isModifierKey && event.key.length === 1) handleTypeaheadSearch(event.key);
                if (isTypingAhead && event.key === " ") return;
                if (OPEN_KEYS.includes(event.key)) {
                    handleOpen();
                    event.preventDefault();
                }
            })
        })
    });
});
SelectTrigger.displayName = TRIGGER_NAME;
var VALUE_NAME = "SelectValue";
var SelectValue = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
    const { __scopeSelect, className, style, children, placeholder = "", ...valueProps } = props;
    const context = useSelectContext(VALUE_NAME, __scopeSelect);
    const { onValueNodeHasChildrenChange } = context;
    const hasChildren = children !== void 0;
    const composedRefs = (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_9__/* .useComposedRefs */ .s)(forwardedRef, context.onValueNodeChange);
    (0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_12__/* .useLayoutEffect */ .N)(()=>{
        onValueNodeHasChildrenChange(hasChildren);
    }, [
        onValueNodeHasChildrenChange,
        hasChildren
    ]);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_10__/* .Primitive */ .sG.span, {
        ...valueProps,
        ref: composedRefs,
        style: {
            pointerEvents: "none"
        },
        children: shouldShowPlaceholder(context.value) ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
            children: placeholder
        }) : children
    });
});
SelectValue.displayName = VALUE_NAME;
var ICON_NAME = "SelectIcon";
var SelectIcon = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
    const { __scopeSelect, children, ...iconProps } = props;
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_10__/* .Primitive */ .sG.span, {
        "aria-hidden": true,
        ...iconProps,
        ref: forwardedRef,
        children: children || "\u25BC"
    });
});
SelectIcon.displayName = ICON_NAME;
var PORTAL_NAME = "SelectPortal";
var SelectPortal = (props)=>{
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_radix_ui_react_portal__WEBPACK_IMPORTED_MODULE_13__/* .Portal */ .Z, {
        asChild: true,
        ...props
    });
};
SelectPortal.displayName = PORTAL_NAME;
var CONTENT_NAME = "SelectContent";
var SelectContent = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
    const context = useSelectContext(CONTENT_NAME, props.__scopeSelect);
    const [fragment, setFragment] = react__WEBPACK_IMPORTED_MODULE_0__.useState();
    (0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_12__/* .useLayoutEffect */ .N)(()=>{
        setFragment(new DocumentFragment());
    }, []);
    if (!context.open) {
        const frag = fragment;
        return frag ? /*#__PURE__*/ react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal(/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(SelectContentProvider, {
            scope: props.__scopeSelect,
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Collection.Slot, {
                scope: props.__scopeSelect,
                children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                    children: props.children
                })
            })
        }), frag) : null;
    }
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(SelectContentImpl, {
        ...props,
        ref: forwardedRef
    });
});
SelectContent.displayName = CONTENT_NAME;
var CONTENT_MARGIN = 10;
var [SelectContentProvider, useSelectContentContext] = createSelectContext(CONTENT_NAME);
var CONTENT_IMPL_NAME = "SelectContentImpl";
var SelectContentImpl = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
    const { __scopeSelect, position = "item-aligned", onCloseAutoFocus, onEscapeKeyDown, onPointerDownOutside, //
    // PopperContent props
    side, sideOffset, align, alignOffset, arrowPadding, collisionBoundary, collisionPadding, sticky, hideWhenDetached, avoidCollisions, //
    ...contentProps } = props;
    const context = useSelectContext(CONTENT_NAME, __scopeSelect);
    const [content, setContent] = react__WEBPACK_IMPORTED_MODULE_0__.useState(null);
    const [viewport, setViewport] = react__WEBPACK_IMPORTED_MODULE_0__.useState(null);
    const composedRefs = (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_9__/* .useComposedRefs */ .s)(forwardedRef, (node)=>setContent(node));
    const [selectedItem, setSelectedItem] = react__WEBPACK_IMPORTED_MODULE_0__.useState(null);
    const [selectedItemText, setSelectedItemText] = react__WEBPACK_IMPORTED_MODULE_0__.useState(null);
    const getItems = useCollection(__scopeSelect);
    const [isPositioned, setIsPositioned] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);
    const firstValidItemFoundRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{
        if (content) return (0,aria_hidden__WEBPACK_IMPORTED_MODULE_14__/* .hideOthers */ .Eq)(content);
    }, [
        content
    ]);
    (0,_radix_ui_react_focus_guards__WEBPACK_IMPORTED_MODULE_15__/* .useFocusGuards */ .Oh)();
    const focusFirst = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((candidates)=>{
        const [firstItem, ...restItems] = getItems().map((item)=>item.ref.current);
        const [lastItem] = restItems.slice(-1);
        const PREVIOUSLY_FOCUSED_ELEMENT = document.activeElement;
        for (const candidate of candidates){
            if (candidate === PREVIOUSLY_FOCUSED_ELEMENT) return;
            candidate?.scrollIntoView({
                block: "nearest"
            });
            if (candidate === firstItem && viewport) viewport.scrollTop = 0;
            if (candidate === lastItem && viewport) viewport.scrollTop = viewport.scrollHeight;
            candidate?.focus();
            if (document.activeElement !== PREVIOUSLY_FOCUSED_ELEMENT) return;
        }
    }, [
        getItems,
        viewport
    ]);
    const focusSelectedItem = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(()=>focusFirst([
            selectedItem,
            content
        ]), [
        focusFirst,
        selectedItem,
        content
    ]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{
        if (isPositioned) {
            focusSelectedItem();
        }
    }, [
        isPositioned,
        focusSelectedItem
    ]);
    const { onOpenChange, triggerPointerDownPosRef } = context;
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{
        if (content) {
            let pointerMoveDelta = {
                x: 0,
                y: 0
            };
            const handlePointerMove = (event)=>{
                pointerMoveDelta = {
                    x: Math.abs(Math.round(event.pageX) - (triggerPointerDownPosRef.current?.x ?? 0)),
                    y: Math.abs(Math.round(event.pageY) - (triggerPointerDownPosRef.current?.y ?? 0))
                };
            };
            const handlePointerUp = (event)=>{
                if (pointerMoveDelta.x <= 10 && pointerMoveDelta.y <= 10) {
                    event.preventDefault();
                } else {
                    if (!content.contains(event.target)) {
                        onOpenChange(false);
                    }
                }
                document.removeEventListener("pointermove", handlePointerMove);
                triggerPointerDownPosRef.current = null;
            };
            if (triggerPointerDownPosRef.current !== null) {
                document.addEventListener("pointermove", handlePointerMove);
                document.addEventListener("pointerup", handlePointerUp, {
                    capture: true,
                    once: true
                });
            }
            return ()=>{
                document.removeEventListener("pointermove", handlePointerMove);
                document.removeEventListener("pointerup", handlePointerUp, {
                    capture: true
                });
            };
        }
    }, [
        content,
        onOpenChange,
        triggerPointerDownPosRef
    ]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{
        const close = ()=>onOpenChange(false);
        window.addEventListener("blur", close);
        window.addEventListener("resize", close);
        return ()=>{
            window.removeEventListener("blur", close);
            window.removeEventListener("resize", close);
        };
    }, [
        onOpenChange
    ]);
    const [searchRef, handleTypeaheadSearch] = useTypeaheadSearch((search)=>{
        const enabledItems = getItems().filter((item)=>!item.disabled);
        const currentItem = enabledItems.find((item)=>item.ref.current === document.activeElement);
        const nextItem = findNextItem(enabledItems, search, currentItem);
        if (nextItem) {
            setTimeout(()=>nextItem.ref.current.focus());
        }
    });
    const itemRefCallback = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((node, value, disabled)=>{
        const isFirstValidItem = !firstValidItemFoundRef.current && !disabled;
        const isSelectedItem = context.value !== void 0 && context.value === value;
        if (isSelectedItem || isFirstValidItem) {
            setSelectedItem(node);
            if (isFirstValidItem) firstValidItemFoundRef.current = true;
        }
    }, [
        context.value
    ]);
    const handleItemLeave = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(()=>content?.focus(), [
        content
    ]);
    const itemTextRefCallback = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((node, value, disabled)=>{
        const isFirstValidItem = !firstValidItemFoundRef.current && !disabled;
        const isSelectedItem = context.value !== void 0 && context.value === value;
        if (isSelectedItem || isFirstValidItem) {
            setSelectedItemText(node);
        }
    }, [
        context.value
    ]);
    const SelectPosition = position === "popper" ? SelectPopperPosition : SelectItemAlignedPosition;
    const popperContentProps = SelectPosition === SelectPopperPosition ? {
        side,
        sideOffset,
        align,
        alignOffset,
        arrowPadding,
        collisionBoundary,
        collisionPadding,
        sticky,
        hideWhenDetached,
        avoidCollisions
    } : {};
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(SelectContentProvider, {
        scope: __scopeSelect,
        content,
        viewport,
        onViewportChange: setViewport,
        itemRefCallback,
        selectedItem,
        onItemLeave: handleItemLeave,
        itemTextRefCallback,
        focusSelectedItem,
        selectedItemText,
        position,
        isPositioned,
        searchRef,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_remove_scroll__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, {
            as: _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_17__/* .Slot */ .DX,
            allowPinchZoom: true,
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_radix_ui_react_focus_scope__WEBPACK_IMPORTED_MODULE_18__/* .FocusScope */ .n, {
                asChild: true,
                trapped: context.open,
                onMountAutoFocus: (event)=>{
                    event.preventDefault();
                },
                onUnmountAutoFocus: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_11__/* .composeEventHandlers */ .m)(onCloseAutoFocus, (event)=>{
                    context.trigger?.focus({
                        preventScroll: true
                    });
                    event.preventDefault();
                }),
                children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_radix_ui_react_dismissable_layer__WEBPACK_IMPORTED_MODULE_19__/* .DismissableLayer */ .qW, {
                    asChild: true,
                    disableOutsidePointerEvents: true,
                    onEscapeKeyDown,
                    onPointerDownOutside,
                    onFocusOutside: (event)=>event.preventDefault(),
                    onDismiss: ()=>context.onOpenChange(false),
                    children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(SelectPosition, {
                        role: "listbox",
                        id: context.contentId,
                        "data-state": context.open ? "open" : "closed",
                        dir: context.dir,
                        onContextMenu: (event)=>event.preventDefault(),
                        ...contentProps,
                        ...popperContentProps,
                        onPlaced: ()=>setIsPositioned(true),
                        ref: composedRefs,
                        style: {
                            // flex layout so we can place the scroll buttons properly
                            display: "flex",
                            flexDirection: "column",
                            // reset the outline by default as the content MAY get focused
                            outline: "none",
                            ...contentProps.style
                        },
                        onKeyDown: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_11__/* .composeEventHandlers */ .m)(contentProps.onKeyDown, (event)=>{
                            const isModifierKey = event.ctrlKey || event.altKey || event.metaKey;
                            if (event.key === "Tab") event.preventDefault();
                            if (!isModifierKey && event.key.length === 1) handleTypeaheadSearch(event.key);
                            if ([
                                "ArrowUp",
                                "ArrowDown",
                                "Home",
                                "End"
                            ].includes(event.key)) {
                                const items = getItems().filter((item)=>!item.disabled);
                                let candidateNodes = items.map((item)=>item.ref.current);
                                if ([
                                    "ArrowUp",
                                    "End"
                                ].includes(event.key)) {
                                    candidateNodes = candidateNodes.slice().reverse();
                                }
                                if ([
                                    "ArrowUp",
                                    "ArrowDown"
                                ].includes(event.key)) {
                                    const currentElement = event.target;
                                    const currentIndex = candidateNodes.indexOf(currentElement);
                                    candidateNodes = candidateNodes.slice(currentIndex + 1);
                                }
                                setTimeout(()=>focusFirst(candidateNodes));
                                event.preventDefault();
                            }
                        })
                    })
                })
            })
        })
    });
});
SelectContentImpl.displayName = CONTENT_IMPL_NAME;
var ITEM_ALIGNED_POSITION_NAME = "SelectItemAlignedPosition";
var SelectItemAlignedPosition = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
    const { __scopeSelect, onPlaced, ...popperProps } = props;
    const context = useSelectContext(CONTENT_NAME, __scopeSelect);
    const contentContext = useSelectContentContext(CONTENT_NAME, __scopeSelect);
    const [contentWrapper, setContentWrapper] = react__WEBPACK_IMPORTED_MODULE_0__.useState(null);
    const [content, setContent] = react__WEBPACK_IMPORTED_MODULE_0__.useState(null);
    const composedRefs = (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_9__/* .useComposedRefs */ .s)(forwardedRef, (node)=>setContent(node));
    const getItems = useCollection(__scopeSelect);
    const shouldExpandOnScrollRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
    const shouldRepositionRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(true);
    const { viewport, selectedItem, selectedItemText, focusSelectedItem } = contentContext;
    const position = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(()=>{
        if (context.trigger && context.valueNode && contentWrapper && content && viewport && selectedItem && selectedItemText) {
            const triggerRect = context.trigger.getBoundingClientRect();
            const contentRect = content.getBoundingClientRect();
            const valueNodeRect = context.valueNode.getBoundingClientRect();
            const itemTextRect = selectedItemText.getBoundingClientRect();
            if (context.dir !== "rtl") {
                const itemTextOffset = itemTextRect.left - contentRect.left;
                const left = valueNodeRect.left - itemTextOffset;
                const leftDelta = triggerRect.left - left;
                const minContentWidth = triggerRect.width + leftDelta;
                const contentWidth = Math.max(minContentWidth, contentRect.width);
                const rightEdge = window.innerWidth - CONTENT_MARGIN;
                const clampedLeft = (0,_radix_ui_number__WEBPACK_IMPORTED_MODULE_20__/* .clamp */ .q)(left, [
                    CONTENT_MARGIN,
                    // Prevents the content from going off the starting edge of the
                    // viewport. It may still go off the ending edge, but this can be
                    // controlled by the user since they may want to manage overflow in a
                    // specific way.
                    // https://github.com/radix-ui/primitives/issues/2049
                    Math.max(CONTENT_MARGIN, rightEdge - contentWidth)
                ]);
                contentWrapper.style.minWidth = minContentWidth + "px";
                contentWrapper.style.left = clampedLeft + "px";
            } else {
                const itemTextOffset = contentRect.right - itemTextRect.right;
                const right = window.innerWidth - valueNodeRect.right - itemTextOffset;
                const rightDelta = window.innerWidth - triggerRect.right - right;
                const minContentWidth = triggerRect.width + rightDelta;
                const contentWidth = Math.max(minContentWidth, contentRect.width);
                const leftEdge = window.innerWidth - CONTENT_MARGIN;
                const clampedRight = (0,_radix_ui_number__WEBPACK_IMPORTED_MODULE_20__/* .clamp */ .q)(right, [
                    CONTENT_MARGIN,
                    Math.max(CONTENT_MARGIN, leftEdge - contentWidth)
                ]);
                contentWrapper.style.minWidth = minContentWidth + "px";
                contentWrapper.style.right = clampedRight + "px";
            }
            const items = getItems();
            const availableHeight = window.innerHeight - CONTENT_MARGIN * 2;
            const itemsHeight = viewport.scrollHeight;
            const contentStyles = window.getComputedStyle(content);
            const contentBorderTopWidth = parseInt(contentStyles.borderTopWidth, 10);
            const contentPaddingTop = parseInt(contentStyles.paddingTop, 10);
            const contentBorderBottomWidth = parseInt(contentStyles.borderBottomWidth, 10);
            const contentPaddingBottom = parseInt(contentStyles.paddingBottom, 10);
            const fullContentHeight = contentBorderTopWidth + contentPaddingTop + itemsHeight + contentPaddingBottom + contentBorderBottomWidth;
            const minContentHeight = Math.min(selectedItem.offsetHeight * 5, fullContentHeight);
            const viewportStyles = window.getComputedStyle(viewport);
            const viewportPaddingTop = parseInt(viewportStyles.paddingTop, 10);
            const viewportPaddingBottom = parseInt(viewportStyles.paddingBottom, 10);
            const topEdgeToTriggerMiddle = triggerRect.top + triggerRect.height / 2 - CONTENT_MARGIN;
            const triggerMiddleToBottomEdge = availableHeight - topEdgeToTriggerMiddle;
            const selectedItemHalfHeight = selectedItem.offsetHeight / 2;
            const itemOffsetMiddle = selectedItem.offsetTop + selectedItemHalfHeight;
            const contentTopToItemMiddle = contentBorderTopWidth + contentPaddingTop + itemOffsetMiddle;
            const itemMiddleToContentBottom = fullContentHeight - contentTopToItemMiddle;
            const willAlignWithoutTopOverflow = contentTopToItemMiddle <= topEdgeToTriggerMiddle;
            if (willAlignWithoutTopOverflow) {
                const isLastItem = items.length > 0 && selectedItem === items[items.length - 1].ref.current;
                contentWrapper.style.bottom = "0px";
                const viewportOffsetBottom = content.clientHeight - viewport.offsetTop - viewport.offsetHeight;
                const clampedTriggerMiddleToBottomEdge = Math.max(triggerMiddleToBottomEdge, selectedItemHalfHeight + // viewport might have padding bottom, include it to avoid a scrollable viewport
                (isLastItem ? viewportPaddingBottom : 0) + viewportOffsetBottom + contentBorderBottomWidth);
                const height = contentTopToItemMiddle + clampedTriggerMiddleToBottomEdge;
                contentWrapper.style.height = height + "px";
            } else {
                const isFirstItem = items.length > 0 && selectedItem === items[0].ref.current;
                contentWrapper.style.top = "0px";
                const clampedTopEdgeToTriggerMiddle = Math.max(topEdgeToTriggerMiddle, contentBorderTopWidth + viewport.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
                (isFirstItem ? viewportPaddingTop : 0) + selectedItemHalfHeight);
                const height = clampedTopEdgeToTriggerMiddle + itemMiddleToContentBottom;
                contentWrapper.style.height = height + "px";
                viewport.scrollTop = contentTopToItemMiddle - topEdgeToTriggerMiddle + viewport.offsetTop;
            }
            contentWrapper.style.margin = `${CONTENT_MARGIN}px 0`;
            contentWrapper.style.minHeight = minContentHeight + "px";
            contentWrapper.style.maxHeight = availableHeight + "px";
            onPlaced?.();
            requestAnimationFrame(()=>shouldExpandOnScrollRef.current = true);
        }
    }, [
        getItems,
        context.trigger,
        context.valueNode,
        contentWrapper,
        content,
        viewport,
        selectedItem,
        selectedItemText,
        context.dir,
        onPlaced
    ]);
    (0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_12__/* .useLayoutEffect */ .N)(()=>position(), [
        position
    ]);
    const [contentZIndex, setContentZIndex] = react__WEBPACK_IMPORTED_MODULE_0__.useState();
    (0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_12__/* .useLayoutEffect */ .N)(()=>{
        if (content) setContentZIndex(window.getComputedStyle(content).zIndex);
    }, [
        content
    ]);
    const handleScrollButtonChange = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((node)=>{
        if (node && shouldRepositionRef.current === true) {
            position();
            focusSelectedItem?.();
            shouldRepositionRef.current = false;
        }
    }, [
        position,
        focusSelectedItem
    ]);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(SelectViewportProvider, {
        scope: __scopeSelect,
        contentWrapper,
        shouldExpandOnScrollRef,
        onScrollButtonChange: handleScrollButtonChange,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            ref: setContentWrapper,
            style: {
                display: "flex",
                flexDirection: "column",
                position: "fixed",
                zIndex: contentZIndex
            },
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_10__/* .Primitive */ .sG.div, {
                ...popperProps,
                ref: composedRefs,
                style: {
                    // When we get the height of the content, it includes borders. If we were to set
                    // the height without having `boxSizing: 'border-box'` it would be too big.
                    boxSizing: "border-box",
                    // We need to ensure the content doesn't get taller than the wrapper
                    maxHeight: "100%",
                    ...popperProps.style
                }
            })
        })
    });
});
SelectItemAlignedPosition.displayName = ITEM_ALIGNED_POSITION_NAME;
var POPPER_POSITION_NAME = "SelectPopperPosition";
var SelectPopperPosition = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
    const { __scopeSelect, align = "start", collisionPadding = CONTENT_MARGIN, ...popperProps } = props;
    const popperScope = usePopperScope(__scopeSelect);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_radix_ui_react_popper__WEBPACK_IMPORTED_MODULE_5__/* .Content */ .UC, {
        ...popperScope,
        ...popperProps,
        ref: forwardedRef,
        align,
        collisionPadding,
        style: {
            // Ensure border-box for floating-ui calculations
            boxSizing: "border-box",
            ...popperProps.style,
            // re-namespace exposed content custom properties
            ...{
                "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-select-content-available-width": "var(--radix-popper-available-width)",
                "--radix-select-content-available-height": "var(--radix-popper-available-height)",
                "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
            }
        }
    });
});
SelectPopperPosition.displayName = POPPER_POSITION_NAME;
var [SelectViewportProvider, useSelectViewportContext] = createSelectContext(CONTENT_NAME, {});
var VIEWPORT_NAME = "SelectViewport";
var SelectViewport = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
    const { __scopeSelect, nonce, ...viewportProps } = props;
    const contentContext = useSelectContentContext(VIEWPORT_NAME, __scopeSelect);
    const viewportContext = useSelectViewportContext(VIEWPORT_NAME, __scopeSelect);
    const composedRefs = (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_9__/* .useComposedRefs */ .s)(forwardedRef, contentContext.onViewportChange);
    const prevScrollTopRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(0);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
        children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("style", {
                dangerouslySetInnerHTML: {
                    __html: `[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}`
                },
                nonce
            }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Collection.Slot, {
                scope: __scopeSelect,
                children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_10__/* .Primitive */ .sG.div, {
                    "data-radix-select-viewport": "",
                    role: "presentation",
                    ...viewportProps,
                    ref: composedRefs,
                    style: {
                        // we use position: 'relative' here on the `viewport` so that when we call
                        // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
                        // (independent of the scrollUpButton).
                        position: "relative",
                        flex: 1,
                        // Viewport should only be scrollable in the vertical direction.
                        // This won't work in vertical writing modes, so we'll need to
                        // revisit this if/when that is supported
                        // https://developer.chrome.com/blog/vertical-form-controls
                        overflow: "hidden auto",
                        ...viewportProps.style
                    },
                    onScroll: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_11__/* .composeEventHandlers */ .m)(viewportProps.onScroll, (event)=>{
                        const viewport = event.currentTarget;
                        const { contentWrapper, shouldExpandOnScrollRef } = viewportContext;
                        if (shouldExpandOnScrollRef?.current && contentWrapper) {
                            const scrolledBy = Math.abs(prevScrollTopRef.current - viewport.scrollTop);
                            if (scrolledBy > 0) {
                                const availableHeight = window.innerHeight - CONTENT_MARGIN * 2;
                                const cssMinHeight = parseFloat(contentWrapper.style.minHeight);
                                const cssHeight = parseFloat(contentWrapper.style.height);
                                const prevHeight = Math.max(cssMinHeight, cssHeight);
                                if (prevHeight < availableHeight) {
                                    const nextHeight = prevHeight + scrolledBy;
                                    const clampedNextHeight = Math.min(availableHeight, nextHeight);
                                    const heightDiff = nextHeight - clampedNextHeight;
                                    contentWrapper.style.height = clampedNextHeight + "px";
                                    if (contentWrapper.style.bottom === "0px") {
                                        viewport.scrollTop = heightDiff > 0 ? heightDiff : 0;
                                        contentWrapper.style.justifyContent = "flex-end";
                                    }
                                }
                            }
                        }
                        prevScrollTopRef.current = viewport.scrollTop;
                    })
                })
            })
        ]
    });
});
SelectViewport.displayName = VIEWPORT_NAME;
var GROUP_NAME = "SelectGroup";
var [SelectGroupContextProvider, useSelectGroupContext] = createSelectContext(GROUP_NAME);
var SelectGroup = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
    const { __scopeSelect, ...groupProps } = props;
    const groupId = (0,_radix_ui_react_id__WEBPACK_IMPORTED_MODULE_8__/* .useId */ .B)();
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(SelectGroupContextProvider, {
        scope: __scopeSelect,
        id: groupId,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_10__/* .Primitive */ .sG.div, {
            role: "group",
            "aria-labelledby": groupId,
            ...groupProps,
            ref: forwardedRef
        })
    });
});
SelectGroup.displayName = GROUP_NAME;
var LABEL_NAME = "SelectLabel";
var SelectLabel = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
    const { __scopeSelect, ...labelProps } = props;
    const groupContext = useSelectGroupContext(LABEL_NAME, __scopeSelect);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_10__/* .Primitive */ .sG.div, {
        id: groupContext.id,
        ...labelProps,
        ref: forwardedRef
    });
});
SelectLabel.displayName = LABEL_NAME;
var ITEM_NAME = "SelectItem";
var [SelectItemContextProvider, useSelectItemContext] = createSelectContext(ITEM_NAME);
var SelectItem = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
    const { __scopeSelect, value, disabled = false, textValue: textValueProp, ...itemProps } = props;
    const context = useSelectContext(ITEM_NAME, __scopeSelect);
    const contentContext = useSelectContentContext(ITEM_NAME, __scopeSelect);
    const isSelected = context.value === value;
    const [textValue, setTextValue] = react__WEBPACK_IMPORTED_MODULE_0__.useState(textValueProp ?? "");
    const [isFocused, setIsFocused] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);
    const composedRefs = (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_9__/* .useComposedRefs */ .s)(forwardedRef, (node)=>contentContext.itemRefCallback?.(node, value, disabled));
    const textId = (0,_radix_ui_react_id__WEBPACK_IMPORTED_MODULE_8__/* .useId */ .B)();
    const pointerTypeRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef("touch");
    const handleSelect = ()=>{
        if (!disabled) {
            context.onValueChange(value);
            context.onOpenChange(false);
        }
    };
    if (value === "") {
        throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
    }
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(SelectItemContextProvider, {
        scope: __scopeSelect,
        value,
        disabled,
        textId,
        isSelected,
        onItemTextChange: react__WEBPACK_IMPORTED_MODULE_0__.useCallback((node)=>{
            setTextValue((prevTextValue)=>prevTextValue || (node?.textContent ?? "").trim());
        }, []),
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Collection.ItemSlot, {
            scope: __scopeSelect,
            value,
            disabled,
            textValue,
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_10__/* .Primitive */ .sG.div, {
                role: "option",
                "aria-labelledby": textId,
                "data-highlighted": isFocused ? "" : void 0,
                "aria-selected": isSelected && isFocused,
                "data-state": isSelected ? "checked" : "unchecked",
                "aria-disabled": disabled || void 0,
                "data-disabled": disabled ? "" : void 0,
                tabIndex: disabled ? void 0 : -1,
                ...itemProps,
                ref: composedRefs,
                onFocus: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_11__/* .composeEventHandlers */ .m)(itemProps.onFocus, ()=>setIsFocused(true)),
                onBlur: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_11__/* .composeEventHandlers */ .m)(itemProps.onBlur, ()=>setIsFocused(false)),
                onClick: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_11__/* .composeEventHandlers */ .m)(itemProps.onClick, ()=>{
                    if (pointerTypeRef.current !== "mouse") handleSelect();
                }),
                onPointerUp: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_11__/* .composeEventHandlers */ .m)(itemProps.onPointerUp, ()=>{
                    if (pointerTypeRef.current === "mouse") handleSelect();
                }),
                onPointerDown: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_11__/* .composeEventHandlers */ .m)(itemProps.onPointerDown, (event)=>{
                    pointerTypeRef.current = event.pointerType;
                }),
                onPointerMove: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_11__/* .composeEventHandlers */ .m)(itemProps.onPointerMove, (event)=>{
                    pointerTypeRef.current = event.pointerType;
                    if (disabled) {
                        contentContext.onItemLeave?.();
                    } else if (pointerTypeRef.current === "mouse") {
                        event.currentTarget.focus({
                            preventScroll: true
                        });
                    }
                }),
                onPointerLeave: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_11__/* .composeEventHandlers */ .m)(itemProps.onPointerLeave, (event)=>{
                    if (event.currentTarget === document.activeElement) {
                        contentContext.onItemLeave?.();
                    }
                }),
                onKeyDown: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_11__/* .composeEventHandlers */ .m)(itemProps.onKeyDown, (event)=>{
                    const isTypingAhead = contentContext.searchRef?.current !== "";
                    if (isTypingAhead && event.key === " ") return;
                    if (SELECTION_KEYS.includes(event.key)) handleSelect();
                    if (event.key === " ") event.preventDefault();
                })
            })
        })
    });
});
SelectItem.displayName = ITEM_NAME;
var ITEM_TEXT_NAME = "SelectItemText";
var SelectItemText = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
    const { __scopeSelect, className, style, ...itemTextProps } = props;
    const context = useSelectContext(ITEM_TEXT_NAME, __scopeSelect);
    const contentContext = useSelectContentContext(ITEM_TEXT_NAME, __scopeSelect);
    const itemContext = useSelectItemContext(ITEM_TEXT_NAME, __scopeSelect);
    const nativeOptionsContext = useSelectNativeOptionsContext(ITEM_TEXT_NAME, __scopeSelect);
    const [itemTextNode, setItemTextNode] = react__WEBPACK_IMPORTED_MODULE_0__.useState(null);
    const composedRefs = (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_9__/* .useComposedRefs */ .s)(forwardedRef, (node)=>setItemTextNode(node), itemContext.onItemTextChange, (node)=>contentContext.itemTextRefCallback?.(node, itemContext.value, itemContext.disabled));
    const textContent = itemTextNode?.textContent;
    const nativeOption = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("option", {
            value: itemContext.value,
            disabled: itemContext.disabled,
            children: textContent
        }, itemContext.value), [
        itemContext.disabled,
        itemContext.value,
        textContent
    ]);
    const { onNativeOptionAdd, onNativeOptionRemove } = nativeOptionsContext;
    (0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_12__/* .useLayoutEffect */ .N)(()=>{
        onNativeOptionAdd(nativeOption);
        return ()=>onNativeOptionRemove(nativeOption);
    }, [
        onNativeOptionAdd,
        onNativeOptionRemove,
        nativeOption
    ]);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
        children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_10__/* .Primitive */ .sG.span, {
                id: itemContext.textId,
                ...itemTextProps,
                ref: composedRefs
            }),
            itemContext.isSelected && context.valueNode && !context.valueNodeHasChildren ? /*#__PURE__*/ react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal(itemTextProps.children, context.valueNode) : null
        ]
    });
});
SelectItemText.displayName = ITEM_TEXT_NAME;
var ITEM_INDICATOR_NAME = "SelectItemIndicator";
var SelectItemIndicator = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
    const { __scopeSelect, ...itemIndicatorProps } = props;
    const itemContext = useSelectItemContext(ITEM_INDICATOR_NAME, __scopeSelect);
    return itemContext.isSelected ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_10__/* .Primitive */ .sG.span, {
        "aria-hidden": true,
        ...itemIndicatorProps,
        ref: forwardedRef
    }) : null;
});
SelectItemIndicator.displayName = ITEM_INDICATOR_NAME;
var SCROLL_UP_BUTTON_NAME = "SelectScrollUpButton";
var SelectScrollUpButton = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
    const contentContext = useSelectContentContext(SCROLL_UP_BUTTON_NAME, props.__scopeSelect);
    const viewportContext = useSelectViewportContext(SCROLL_UP_BUTTON_NAME, props.__scopeSelect);
    const [canScrollUp, setCanScrollUp] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);
    const composedRefs = (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_9__/* .useComposedRefs */ .s)(forwardedRef, viewportContext.onScrollButtonChange);
    (0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_12__/* .useLayoutEffect */ .N)(()=>{
        if (contentContext.viewport && contentContext.isPositioned) {
            let handleScroll2 = function() {
                const canScrollUp2 = viewport.scrollTop > 0;
                setCanScrollUp(canScrollUp2);
            };
            var handleScroll = handleScroll2;
            const viewport = contentContext.viewport;
            handleScroll2();
            viewport.addEventListener("scroll", handleScroll2);
            return ()=>viewport.removeEventListener("scroll", handleScroll2);
        }
    }, [
        contentContext.viewport,
        contentContext.isPositioned
    ]);
    return canScrollUp ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(SelectScrollButtonImpl, {
        ...props,
        ref: composedRefs,
        onAutoScroll: ()=>{
            const { viewport, selectedItem } = contentContext;
            if (viewport && selectedItem) {
                viewport.scrollTop = viewport.scrollTop - selectedItem.offsetHeight;
            }
        }
    }) : null;
});
SelectScrollUpButton.displayName = SCROLL_UP_BUTTON_NAME;
var SCROLL_DOWN_BUTTON_NAME = "SelectScrollDownButton";
var SelectScrollDownButton = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
    const contentContext = useSelectContentContext(SCROLL_DOWN_BUTTON_NAME, props.__scopeSelect);
    const viewportContext = useSelectViewportContext(SCROLL_DOWN_BUTTON_NAME, props.__scopeSelect);
    const [canScrollDown, setCanScrollDown] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);
    const composedRefs = (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_9__/* .useComposedRefs */ .s)(forwardedRef, viewportContext.onScrollButtonChange);
    (0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_12__/* .useLayoutEffect */ .N)(()=>{
        if (contentContext.viewport && contentContext.isPositioned) {
            let handleScroll2 = function() {
                const maxScroll = viewport.scrollHeight - viewport.clientHeight;
                const canScrollDown2 = Math.ceil(viewport.scrollTop) < maxScroll;
                setCanScrollDown(canScrollDown2);
            };
            var handleScroll = handleScroll2;
            const viewport = contentContext.viewport;
            handleScroll2();
            viewport.addEventListener("scroll", handleScroll2);
            return ()=>viewport.removeEventListener("scroll", handleScroll2);
        }
    }, [
        contentContext.viewport,
        contentContext.isPositioned
    ]);
    return canScrollDown ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(SelectScrollButtonImpl, {
        ...props,
        ref: composedRefs,
        onAutoScroll: ()=>{
            const { viewport, selectedItem } = contentContext;
            if (viewport && selectedItem) {
                viewport.scrollTop = viewport.scrollTop + selectedItem.offsetHeight;
            }
        }
    }) : null;
});
SelectScrollDownButton.displayName = SCROLL_DOWN_BUTTON_NAME;
var SelectScrollButtonImpl = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
    const { __scopeSelect, onAutoScroll, ...scrollIndicatorProps } = props;
    const contentContext = useSelectContentContext("SelectScrollButton", __scopeSelect);
    const autoScrollTimerRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    const getItems = useCollection(__scopeSelect);
    const clearAutoScrollTimer = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(()=>{
        if (autoScrollTimerRef.current !== null) {
            window.clearInterval(autoScrollTimerRef.current);
            autoScrollTimerRef.current = null;
        }
    }, []);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{
        return ()=>clearAutoScrollTimer();
    }, [
        clearAutoScrollTimer
    ]);
    (0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_12__/* .useLayoutEffect */ .N)(()=>{
        const activeItem = getItems().find((item)=>item.ref.current === document.activeElement);
        activeItem?.ref.current?.scrollIntoView({
            block: "nearest"
        });
    }, [
        getItems
    ]);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_10__/* .Primitive */ .sG.div, {
        "aria-hidden": true,
        ...scrollIndicatorProps,
        ref: forwardedRef,
        style: {
            flexShrink: 0,
            ...scrollIndicatorProps.style
        },
        onPointerDown: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_11__/* .composeEventHandlers */ .m)(scrollIndicatorProps.onPointerDown, ()=>{
            if (autoScrollTimerRef.current === null) {
                autoScrollTimerRef.current = window.setInterval(onAutoScroll, 50);
            }
        }),
        onPointerMove: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_11__/* .composeEventHandlers */ .m)(scrollIndicatorProps.onPointerMove, ()=>{
            contentContext.onItemLeave?.();
            if (autoScrollTimerRef.current === null) {
                autoScrollTimerRef.current = window.setInterval(onAutoScroll, 50);
            }
        }),
        onPointerLeave: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_11__/* .composeEventHandlers */ .m)(scrollIndicatorProps.onPointerLeave, ()=>{
            clearAutoScrollTimer();
        })
    });
});
var SEPARATOR_NAME = "SelectSeparator";
var SelectSeparator = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
    const { __scopeSelect, ...separatorProps } = props;
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_10__/* .Primitive */ .sG.div, {
        "aria-hidden": true,
        ...separatorProps,
        ref: forwardedRef
    });
});
SelectSeparator.displayName = SEPARATOR_NAME;
var ARROW_NAME = "SelectArrow";
var SelectArrow = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
    const { __scopeSelect, ...arrowProps } = props;
    const popperScope = usePopperScope(__scopeSelect);
    const context = useSelectContext(ARROW_NAME, __scopeSelect);
    const contentContext = useSelectContentContext(ARROW_NAME, __scopeSelect);
    return context.open && contentContext.position === "popper" ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_radix_ui_react_popper__WEBPACK_IMPORTED_MODULE_5__/* .Arrow */ .i3, {
        ...popperScope,
        ...arrowProps,
        ref: forwardedRef
    }) : null;
});
SelectArrow.displayName = ARROW_NAME;
function shouldShowPlaceholder(value) {
    return value === "" || value === void 0;
}
var BubbleSelect = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
    const { value, ...selectProps } = props;
    const ref = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    const composedRefs = (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_9__/* .useComposedRefs */ .s)(forwardedRef, ref);
    const prevValue = (0,_radix_ui_react_use_previous__WEBPACK_IMPORTED_MODULE_21__/* .usePrevious */ .Z)(value);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{
        const select = ref.current;
        const selectProto = window.HTMLSelectElement.prototype;
        const descriptor = Object.getOwnPropertyDescriptor(selectProto, "value");
        const setValue = descriptor.set;
        if (prevValue !== value && setValue) {
            const event = new Event("change", {
                bubbles: true
            });
            setValue.call(select, value);
            select.dispatchEvent(event);
        }
    }, [
        prevValue,
        value
    ]);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_radix_ui_react_visually_hidden__WEBPACK_IMPORTED_MODULE_22__/* .VisuallyHidden */ .s, {
        asChild: true,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("select", {
            ...selectProps,
            ref: composedRefs,
            defaultValue: value
        })
    });
});
BubbleSelect.displayName = "BubbleSelect";
function useTypeaheadSearch(onSearchChange) {
    const handleSearchChange = (0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_23__/* .useCallbackRef */ .c)(onSearchChange);
    const searchRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef("");
    const timerRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(0);
    const handleTypeaheadSearch = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((key)=>{
        const search = searchRef.current + key;
        handleSearchChange(search);
        (function updateSearch(value) {
            searchRef.current = value;
            window.clearTimeout(timerRef.current);
            if (value !== "") timerRef.current = window.setTimeout(()=>updateSearch(""), 1e3);
        })(search);
    }, [
        handleSearchChange
    ]);
    const resetTypeahead = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(()=>{
        searchRef.current = "";
        window.clearTimeout(timerRef.current);
    }, []);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{
        return ()=>window.clearTimeout(timerRef.current);
    }, []);
    return [
        searchRef,
        handleTypeaheadSearch,
        resetTypeahead
    ];
}
function findNextItem(items, search, currentItem) {
    const isRepeated = search.length > 1 && Array.from(search).every((char)=>char === search[0]);
    const normalizedSearch = isRepeated ? search[0] : search;
    const currentItemIndex = currentItem ? items.indexOf(currentItem) : -1;
    let wrappedItems = wrapArray(items, Math.max(currentItemIndex, 0));
    const excludeCurrentItem = normalizedSearch.length === 1;
    if (excludeCurrentItem) wrappedItems = wrappedItems.filter((v)=>v !== currentItem);
    const nextItem = wrappedItems.find((item)=>item.textValue.toLowerCase().startsWith(normalizedSearch.toLowerCase()));
    return nextItem !== currentItem ? nextItem : void 0;
}
function wrapArray(array, startIndex) {
    return array.map((_, index)=>array[(startIndex + index) % array.length]);
}
var Root2 = Select;
var Trigger = SelectTrigger;
var Value = SelectValue;
var Icon = (/* unused pure expression or super */ null && (SelectIcon));
var Portal = SelectPortal;
var Content2 = SelectContent;
var Viewport = SelectViewport;
var Group = SelectGroup;
var Label = SelectLabel;
var Item = SelectItem;
var ItemText = SelectItemText;
var ItemIndicator = (/* unused pure expression or super */ null && (SelectItemIndicator));
var ScrollUpButton = (/* unused pure expression or super */ null && (SelectScrollUpButton));
var ScrollDownButton = (/* unused pure expression or super */ null && (SelectScrollDownButton));
var Separator = SelectSeparator;
var Arrow2 = (/* unused pure expression or super */ null && (SelectArrow));
 //# sourceMappingURL=index.mjs.map


/***/ }),

/***/ 635276:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bL: () => (/* binding */ Root),
/* harmony export */   zi: () => (/* binding */ Thumb)
/* harmony export */ });
/* unused harmony exports Switch, SwitchThumb, createSwitchScope */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(891616);
/* harmony import */ var _radix_ui_primitive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(763095);
/* harmony import */ var _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(730613);
/* harmony import */ var _radix_ui_react_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(176235);
/* harmony import */ var _radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(409689);
/* harmony import */ var _radix_ui_react_use_previous__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(809391);
/* harmony import */ var _radix_ui_react_use_size__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(525611);
/* harmony import */ var _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(832713);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(642725);
/* __next_internal_client_entry_do_not_use__ Root,Switch,SwitchThumb,Thumb,createSwitchScope auto */ // packages/react/switch/src/Switch.tsx









var SWITCH_NAME = "Switch";
var [createSwitchContext, createSwitchScope] = (0,_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_2__/* .createContextScope */ .A)(SWITCH_NAME);
var [SwitchProvider, useSwitchContext] = createSwitchContext(SWITCH_NAME);
var Switch = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
    const { __scopeSwitch, name, checked: checkedProp, defaultChecked, required, disabled, value = "on", onCheckedChange, form, ...switchProps } = props;
    const [button, setButton] = react__WEBPACK_IMPORTED_MODULE_0__.useState(null);
    const composedRefs = (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_3__/* .useComposedRefs */ .s)(forwardedRef, (node)=>setButton(node));
    const hasConsumerStoppedPropagationRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
    const isFormControl = button ? form || !!button.closest("form") : true;
    const [checked = false, setChecked] = (0,_radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_4__/* .useControllableState */ .i)({
        prop: checkedProp,
        defaultProp: defaultChecked,
        onChange: onCheckedChange
    });
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(SwitchProvider, {
        scope: __scopeSwitch,
        checked,
        disabled,
        children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_5__/* .Primitive */ .sG.button, {
                type: "button",
                role: "switch",
                "aria-checked": checked,
                "aria-required": required,
                "data-state": getState(checked),
                "data-disabled": disabled ? "" : void 0,
                disabled,
                value,
                ...switchProps,
                ref: composedRefs,
                onClick: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_6__/* .composeEventHandlers */ .m)(props.onClick, (event)=>{
                    setChecked((prevChecked)=>!prevChecked);
                    if (isFormControl) {
                        hasConsumerStoppedPropagationRef.current = event.isPropagationStopped();
                        if (!hasConsumerStoppedPropagationRef.current) event.stopPropagation();
                    }
                })
            }),
            isFormControl && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(BubbleInput, {
                control: button,
                bubbles: !hasConsumerStoppedPropagationRef.current,
                name,
                value,
                checked,
                required,
                disabled,
                form,
                style: {
                    transform: "translateX(-100%)"
                }
            })
        ]
    });
});
Switch.displayName = SWITCH_NAME;
var THUMB_NAME = "SwitchThumb";
var SwitchThumb = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
    const { __scopeSwitch, ...thumbProps } = props;
    const context = useSwitchContext(THUMB_NAME, __scopeSwitch);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_5__/* .Primitive */ .sG.span, {
        "data-state": getState(context.checked),
        "data-disabled": context.disabled ? "" : void 0,
        ...thumbProps,
        ref: forwardedRef
    });
});
SwitchThumb.displayName = THUMB_NAME;
var BubbleInput = (props)=>{
    const { control, checked, bubbles = true, ...inputProps } = props;
    const ref = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    const prevChecked = (0,_radix_ui_react_use_previous__WEBPACK_IMPORTED_MODULE_7__/* .usePrevious */ .Z)(checked);
    const controlSize = (0,_radix_ui_react_use_size__WEBPACK_IMPORTED_MODULE_8__/* .useSize */ .X)(control);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{
        const input = ref.current;
        const inputProto = window.HTMLInputElement.prototype;
        const descriptor = Object.getOwnPropertyDescriptor(inputProto, "checked");
        const setChecked = descriptor.set;
        if (prevChecked !== checked && setChecked) {
            const event = new Event("click", {
                bubbles
            });
            setChecked.call(input, checked);
            input.dispatchEvent(event);
        }
    }, [
        prevChecked,
        checked,
        bubbles
    ]);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
        type: "checkbox",
        "aria-hidden": true,
        defaultChecked: checked,
        ...inputProps,
        tabIndex: -1,
        ref,
        style: {
            ...props.style,
            ...controlSize,
            position: "absolute",
            pointerEvents: "none",
            opacity: 0,
            margin: 0
        }
    });
};
function getState(checked) {
    return checked ? "checked" : "unchecked";
}
var Root = Switch;
var Thumb = SwitchThumb;
 //# sourceMappingURL=index.mjs.map


/***/ })

};
;