exports.id = 4105;
exports.ids = [4105,9242];
exports.modules = {

/***/ 587032:
/***/ (() => {



/***/ }),

/***/ 580408:
/***/ (() => {



/***/ }),

/***/ 313545:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ LoadingCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(642725);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_app_environments_environmentId_settings_components_SettingsCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(742264);
/* harmony import */ var _formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(983773);



const LoadingCard = ({ title, description, skeletonLines })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_app_environments_environmentId_settings_components_SettingsCard__WEBPACK_IMPORTED_MODULE_1__.SettingsCard, {
        title: title,
        description: description,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            className: "w-full space-y-4",
            children: skeletonLines.map((line, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_2__.cn)("animate-pulse rounded-full bg-slate-200", line.classes)
                    })
                }, index))
        })
    });
};


/***/ }),

/***/ 125632:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccountSettingsNavbar: () => (/* binding */ AccountSettingsNavbar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(642725);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_ui_components_secondary_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(630785);
/* harmony import */ var _tolgee_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(397674);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(470207);
/* __next_internal_client_entry_do_not_use__ AccountSettingsNavbar auto */ 



const AccountSettingsNavbar = ({ environmentId, activeId, loading })=>{
    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();
    const { t } = (0,_tolgee_react__WEBPACK_IMPORTED_MODULE_3__/* .useTranslate */ .WD)();
    const navigation = [
        {
            id: "profile",
            label: t("common.profile"),
            href: `/environments/${environmentId}/settings/profile`,
            current: pathname?.includes("/profile")
        },
        {
            id: "notifications",
            label: t("common.notifications"),
            href: `/environments/${environmentId}/settings/notifications`,
            current: pathname?.includes("/notifications")
        }
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_modules_ui_components_secondary_navigation__WEBPACK_IMPORTED_MODULE_1__/* .SecondaryNavigation */ .N, {
        navigation: navigation,
        activeId: activeId,
        loading: loading
    });
};


/***/ }),

/***/ 742264:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsCard: () => (/* binding */ SettingsCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(642725);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_ui_components_badge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(661989);
/* harmony import */ var _tolgee_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(397674);
/* harmony import */ var _formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(983773);
/* __next_internal_client_entry_do_not_use__ SettingsCard auto */ 



const SettingsCard = ({ title, description, children, soon = false, noPadding = false, beta, className })=>{
    const { t } = (0,_tolgee_react__WEBPACK_IMPORTED_MODULE_2__/* .useTranslate */ .WD)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_3__.cn)("relative my-4 w-full max-w-4xl rounded-xl border border-slate-200 bg-white py-4 text-left shadow-sm", className),
        id: title,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "border-b border-slate-200 px-4 pb-4",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", {
                                className: "text-lg font-medium capitalize leading-6 text-slate-900",
                                children: title
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "ml-2",
                                children: [
                                    beta && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_modules_ui_components_badge__WEBPACK_IMPORTED_MODULE_1__/* .Badge */ .E, {
                                        size: "normal",
                                        type: "warning",
                                        text: "Beta"
                                    }),
                                    soon && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_modules_ui_components_badge__WEBPACK_IMPORTED_MODULE_1__/* .Badge */ .E, {
                                        size: "normal",
                                        type: "success",
                                        text: t("environments.settings.enterprise.coming_soon")
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                        className: "mt-1 text-sm text-slate-500",
                        children: description
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_3__.cn)(noPadding ? "" : "px-4 pt-4"),
                children: children
            })
        ]
    });
};


/***/ }),

/***/ 661989:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ Badge)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(642725);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(983773);


const Badge = ({ text, type, size, className })=>{
    const bgColor = {
        warning: "bg-amber-100",
        success: "bg-emerald-100",
        error: "bg-red-100",
        gray: "bg-slate-100"
    };
    const borderColor = {
        warning: "border-amber-200",
        success: "border-emerald-200",
        error: "border-red-200",
        gray: "border-slate-200"
    };
    const textColor = {
        warning: "text-amber-800",
        success: "text-emerald-800",
        error: "text-red-800",
        gray: "text-slate-600"
    };
    const padding = {
        tiny: "px-1.5 py-0.5",
        normal: "px-2.5 py-0.5",
        large: "px-3.5 py-1"
    };
    const textSize = size === "large" ? "text-sm" : "text-xs";
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
        className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_1__.cn)("inline-flex cursor-default items-center rounded-full border font-medium", bgColor[type], borderColor[type], textColor[type], padding[size], textSize, className),
        children: text
    });
};


/***/ }),

/***/ 101499:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* binding */ PageContentWrapper)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(642725);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(983773);


const PageContentWrapper = ({ children, className })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_1__.cn)("h-full space-y-6 p-6", className),
        children: children
    });
};


/***/ }),

/***/ 662709:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: () => (/* binding */ PageHeader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(642725);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(983773);


const PageHeader = ({ cta, pageTitle, children })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "border-b border-slate-200",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex items-center justify-between space-x-4 pb-4",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1", {
                        className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_1__.cn)("text-3xl font-bold capitalize text-slate-800"),
                        children: pageTitle
                    }),
                    cta
                ]
            }),
            children
        ]
    });
};


/***/ }),

/***/ 630785:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ SecondaryNavigation)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(642725);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36888);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(983773);



const SecondaryNavigation = ({ navigation, activeId, loading, ...props })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "grid h-10 w-full grid-cols-[auto,1fr]",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("nav", {
                    className: "flex h-full min-w-full items-center space-x-4",
                    "aria-label": "Tabs",
                    children: loading ? navigation.map((navElem)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "group flex h-full flex-col",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                    "aria-disabled": "true",
                                    className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_2__.cn)(navElem.id === activeId ? "font-semibold text-slate-900" : "text-slate-500", "flex h-full items-center px-3 text-sm font-medium", navElem.hidden && "hidden"),
                                    "aria-current": navElem.id === activeId ? "page" : undefined,
                                    children: navElem.label
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                    className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_2__.cn)("bottom-0 mt-auto h-[2px] w-full rounded-t-lg transition-all duration-150 ease-in-out", navElem.id === activeId ? "bg-slate-300" : "bg-transparent group-hover:bg-slate-300", navElem.hidden && "hidden")
                                })
                            ]
                        }, navElem.id)) : navigation.map((navElem)=>!navElem.hidden && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "group flex h-full flex-col",
                            children: [
                                navElem.href ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    href: navElem.href,
                                    ...navElem.onClick ? {
                                        onClick: navElem.onClick
                                    } : {},
                                    className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_2__.cn)(navElem.id === activeId ? "font-semibold text-slate-900" : "text-slate-500 hover:text-slate-700", "flex h-full items-center px-3 text-sm font-medium", navElem.hidden && "hidden"),
                                    "aria-current": navElem.id === activeId ? "page" : undefined,
                                    children: navElem.label
                                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                                    ...navElem.onClick ? {
                                        onClick: navElem.onClick
                                    } : {},
                                    className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_2__.cn)(navElem.id === activeId ? "font-semibold text-slate-900" : "text-slate-500 hover:text-slate-700", "grow items-center px-3 text-sm font-medium transition-all duration-150 ease-in-out", navElem.hidden && "hidden"),
                                    "aria-current": navElem.id === activeId ? "page" : undefined,
                                    children: navElem.label
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                    className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_2__.cn)("bottom-0 mt-auto h-[2px] w-full rounded-t-lg transition-all duration-150 ease-in-out", navElem.id === activeId ? "bg-brand-dark" : "bg-transparent group-hover:bg-slate-300", navElem.hidden && "hidden")
                                })
                            ]
                        }, navElem.id))
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                    className: "justify-self-end"
                })
            ]
        })
    });
};


/***/ }),

/***/ 547380:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

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

"use strict";

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

"use strict";

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

/***/ 844333:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function(e,t){if(true)module.exports=t(__webpack_require__(891616));else { var l, r; }}(this,(function(e){return function(e){var t={};function r(l){if(t[l])return t[l].exports;var i=t[l]={i:l,l:!1,exports:{}};return e[l].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,l){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(r.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(l,i,function(t){return e[t]}.bind(null,i));return l},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=1)}([function(t,r){t.exports=e},function(e,t,r){e.exports=r(2)},function(e,t,r){"use strict";function l(e,t){if(null==e)return{};var r,l,i=function(e,t){if(null==e)return{};var r,l,i={},a=Object.keys(e);for(l=0;l<a.length;l++)r=a[l],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)r=a[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}r.r(t);var i=r(0),a=r.n(i),n=function(e){for(var t=0,r=0;r<e.length;r++){t=(t<<5)-t+e.charCodeAt(r),t&=t}return Math.abs(t)},c=function(e,t){return Math.floor(e/Math.pow(10,t)%10)},h=function(e,t){return!(c(e,t)%2)},o=function(e,t,r){var l=e%t;return r&&c(e,r)%2===0?-l:l},s=function(e,t,r){return t[e%r]};var f=function(e){var t=e.name,r=e.colors,a=e.title,c=e.square,h=e.size,f=l(e,["name","colors","title","square","size"]),m=function(e,t){var r=n(e),l=t&&t.length;return Array.from({length:3},(function(e,i){return{color:s(r+i,t,l),translateX:o(r*(i+1),8,1),translateY:o(r*(i+1),8,2),scale:1.2+o(r*(i+1),4)/10,rotate:o(r*(i+1),360,1)}}))}(t,r),d=i.useId();return i.createElement("svg",Object.assign({viewBox:"0 0 80 80",fill:"none",role:"img",xmlns:"http://www.w3.org/2000/svg",width:h,height:h},f),a&&i.createElement("title",null,t),i.createElement("mask",{id:d,maskUnits:"userSpaceOnUse",x:0,y:0,width:80,height:80},i.createElement("rect",{width:80,height:80,rx:c?void 0:160,fill:"#FFFFFF"})),i.createElement("g",{mask:"url(#".concat(d,")")},i.createElement("rect",{width:80,height:80,fill:m[0].color}),i.createElement("path",{filter:"url(#filter_".concat(d,")"),d:"M32.414 59.35L50.376 70.5H72.5v-71H33.728L26.5 13.381l19.057 27.08L32.414 59.35z",fill:m[1].color,transform:"translate("+m[1].translateX+" "+m[1].translateY+") rotate("+m[1].rotate+" 40 40) scale("+m[2].scale+")"}),i.createElement("path",{filter:"url(#filter_".concat(d,")"),style:{mixBlendMode:"overlay"},d:"M22.216 24L0 46.75l14.108 38.129L78 86l-3.081-59.276-22.378 4.005 12.972 20.186-23.35 27.395L22.215 24z",fill:m[2].color,transform:"translate("+m[2].translateX+" "+m[2].translateY+") rotate("+m[2].rotate+" 40 40) scale("+m[2].scale+")"})),i.createElement("defs",null,i.createElement("filter",{id:"filter_".concat(d),filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},i.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),i.createElement("feBlend",{in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),i.createElement("feGaussianBlur",{stdDeviation:7,result:"effect1_foregroundBlur"}))))},m={pixel:function(e){var t=e.name,r=e.colors,a=e.title,c=e.square,h=e.size,o=l(e,["name","colors","title","square","size"]),f=function(e,t){var r=n(e),l=t&&t.length;return Array.from({length:64},(function(e,i){return s(r%(i+1),t,l)}))}(t,r),m=i.useId();return i.createElement("svg",Object.assign({viewBox:"0 0 80 80",fill:"none",role:"img",xmlns:"http://www.w3.org/2000/svg",width:h,height:h},o),a&&i.createElement("title",null,t),i.createElement("mask",{id:m,"mask-type":"alpha",maskUnits:"userSpaceOnUse",x:0,y:0,width:80,height:80},i.createElement("rect",{width:80,height:80,rx:c?void 0:160,fill:"#FFFFFF"})),i.createElement("g",{mask:"url(#".concat(m,")")},i.createElement("rect",{width:10,height:10,fill:f[0]}),i.createElement("rect",{x:20,width:10,height:10,fill:f[1]}),i.createElement("rect",{x:40,width:10,height:10,fill:f[2]}),i.createElement("rect",{x:60,width:10,height:10,fill:f[3]}),i.createElement("rect",{x:10,width:10,height:10,fill:f[4]}),i.createElement("rect",{x:30,width:10,height:10,fill:f[5]}),i.createElement("rect",{x:50,width:10,height:10,fill:f[6]}),i.createElement("rect",{x:70,width:10,height:10,fill:f[7]}),i.createElement("rect",{y:10,width:10,height:10,fill:f[8]}),i.createElement("rect",{y:20,width:10,height:10,fill:f[9]}),i.createElement("rect",{y:30,width:10,height:10,fill:f[10]}),i.createElement("rect",{y:40,width:10,height:10,fill:f[11]}),i.createElement("rect",{y:50,width:10,height:10,fill:f[12]}),i.createElement("rect",{y:60,width:10,height:10,fill:f[13]}),i.createElement("rect",{y:70,width:10,height:10,fill:f[14]}),i.createElement("rect",{x:20,y:10,width:10,height:10,fill:f[15]}),i.createElement("rect",{x:20,y:20,width:10,height:10,fill:f[16]}),i.createElement("rect",{x:20,y:30,width:10,height:10,fill:f[17]}),i.createElement("rect",{x:20,y:40,width:10,height:10,fill:f[18]}),i.createElement("rect",{x:20,y:50,width:10,height:10,fill:f[19]}),i.createElement("rect",{x:20,y:60,width:10,height:10,fill:f[20]}),i.createElement("rect",{x:20,y:70,width:10,height:10,fill:f[21]}),i.createElement("rect",{x:40,y:10,width:10,height:10,fill:f[22]}),i.createElement("rect",{x:40,y:20,width:10,height:10,fill:f[23]}),i.createElement("rect",{x:40,y:30,width:10,height:10,fill:f[24]}),i.createElement("rect",{x:40,y:40,width:10,height:10,fill:f[25]}),i.createElement("rect",{x:40,y:50,width:10,height:10,fill:f[26]}),i.createElement("rect",{x:40,y:60,width:10,height:10,fill:f[27]}),i.createElement("rect",{x:40,y:70,width:10,height:10,fill:f[28]}),i.createElement("rect",{x:60,y:10,width:10,height:10,fill:f[29]}),i.createElement("rect",{x:60,y:20,width:10,height:10,fill:f[30]}),i.createElement("rect",{x:60,y:30,width:10,height:10,fill:f[31]}),i.createElement("rect",{x:60,y:40,width:10,height:10,fill:f[32]}),i.createElement("rect",{x:60,y:50,width:10,height:10,fill:f[33]}),i.createElement("rect",{x:60,y:60,width:10,height:10,fill:f[34]}),i.createElement("rect",{x:60,y:70,width:10,height:10,fill:f[35]}),i.createElement("rect",{x:10,y:10,width:10,height:10,fill:f[36]}),i.createElement("rect",{x:10,y:20,width:10,height:10,fill:f[37]}),i.createElement("rect",{x:10,y:30,width:10,height:10,fill:f[38]}),i.createElement("rect",{x:10,y:40,width:10,height:10,fill:f[39]}),i.createElement("rect",{x:10,y:50,width:10,height:10,fill:f[40]}),i.createElement("rect",{x:10,y:60,width:10,height:10,fill:f[41]}),i.createElement("rect",{x:10,y:70,width:10,height:10,fill:f[42]}),i.createElement("rect",{x:30,y:10,width:10,height:10,fill:f[43]}),i.createElement("rect",{x:30,y:20,width:10,height:10,fill:f[44]}),i.createElement("rect",{x:30,y:30,width:10,height:10,fill:f[45]}),i.createElement("rect",{x:30,y:40,width:10,height:10,fill:f[46]}),i.createElement("rect",{x:30,y:50,width:10,height:10,fill:f[47]}),i.createElement("rect",{x:30,y:60,width:10,height:10,fill:f[48]}),i.createElement("rect",{x:30,y:70,width:10,height:10,fill:f[49]}),i.createElement("rect",{x:50,y:10,width:10,height:10,fill:f[50]}),i.createElement("rect",{x:50,y:20,width:10,height:10,fill:f[51]}),i.createElement("rect",{x:50,y:30,width:10,height:10,fill:f[52]}),i.createElement("rect",{x:50,y:40,width:10,height:10,fill:f[53]}),i.createElement("rect",{x:50,y:50,width:10,height:10,fill:f[54]}),i.createElement("rect",{x:50,y:60,width:10,height:10,fill:f[55]}),i.createElement("rect",{x:50,y:70,width:10,height:10,fill:f[56]}),i.createElement("rect",{x:70,y:10,width:10,height:10,fill:f[57]}),i.createElement("rect",{x:70,y:20,width:10,height:10,fill:f[58]}),i.createElement("rect",{x:70,y:30,width:10,height:10,fill:f[59]}),i.createElement("rect",{x:70,y:40,width:10,height:10,fill:f[60]}),i.createElement("rect",{x:70,y:50,width:10,height:10,fill:f[61]}),i.createElement("rect",{x:70,y:60,width:10,height:10,fill:f[62]}),i.createElement("rect",{x:70,y:70,width:10,height:10,fill:f[63]})))},bauhaus:function(e){var t=e.name,r=e.colors,a=e.title,c=e.square,f=e.size,m=l(e,["name","colors","title","square","size"]),d=function(e,t){var r=n(e),l=t&&t.length;return Array.from({length:4},(function(e,i){return{color:s(r+i,t,l),translateX:o(r*(i+1),40-(i+17),1),translateY:o(r*(i+1),40-(i+17),2),rotate:o(r*(i+1),360),isSquare:h(r,2)}}))}(t,r),u=i.useId();return i.createElement("svg",Object.assign({viewBox:"0 0 80 80",fill:"none",role:"img",xmlns:"http://www.w3.org/2000/svg",width:f,height:f},m),a&&i.createElement("title",null,t),i.createElement("mask",{id:u,maskUnits:"userSpaceOnUse",x:0,y:0,width:80,height:80},i.createElement("rect",{width:80,height:80,rx:c?void 0:160,fill:"#FFFFFF"})),i.createElement("g",{mask:"url(#".concat(u,")")},i.createElement("rect",{width:80,height:80,fill:d[0].color}),i.createElement("rect",{x:10,y:30,width:80,height:d[1].isSquare?80:10,fill:d[1].color,transform:"translate("+d[1].translateX+" "+d[1].translateY+") rotate("+d[1].rotate+" 40 40)"}),i.createElement("circle",{cx:40,cy:40,fill:d[2].color,r:16,transform:"translate("+d[2].translateX+" "+d[2].translateY+")"}),i.createElement("line",{x1:0,y1:40,x2:80,y2:40,strokeWidth:2,stroke:d[3].color,transform:"translate("+d[3].translateX+" "+d[3].translateY+") rotate("+d[3].rotate+" 40 40)"})))},ring:function(e){var t=e.name,r=e.colors,i=e.title,c=e.square,h=e.size,o=l(e,["name","colors","title","square","size"]),f=function(e,t){var r=n(t),l=e&&e.length,i=Array.from({length:5},(function(t,i){return s(r+i,e,l)})),a=[];return a[0]=i[0],a[1]=i[1],a[2]=i[1],a[3]=i[2],a[4]=i[2],a[5]=i[3],a[6]=i[3],a[7]=i[0],a[8]=i[4],a}(r,t),m=a.a.useId();return a.a.createElement("svg",Object.assign({viewBox:"0 0 90 90",fill:"none",role:"img",xmlns:"http://www.w3.org/2000/svg",width:h,height:h},o),i&&a.a.createElement("title",null,t),a.a.createElement("mask",{id:m,maskUnits:"userSpaceOnUse",x:0,y:0,width:90,height:90},a.a.createElement("rect",{width:90,height:90,rx:c?void 0:180,fill:"#FFFFFF"})),a.a.createElement("g",{mask:"url(#".concat(m,")")},a.a.createElement("path",{d:"M0 0h90v45H0z",fill:f[0]}),a.a.createElement("path",{d:"M0 45h90v45H0z",fill:f[1]}),a.a.createElement("path",{d:"M83 45a38 38 0 00-76 0h76z",fill:f[2]}),a.a.createElement("path",{d:"M83 45a38 38 0 01-76 0h76z",fill:f[3]}),a.a.createElement("path",{d:"M77 45a32 32 0 10-64 0h64z",fill:f[4]}),a.a.createElement("path",{d:"M77 45a32 32 0 11-64 0h64z",fill:f[5]}),a.a.createElement("path",{d:"M71 45a26 26 0 00-52 0h52z",fill:f[6]}),a.a.createElement("path",{d:"M71 45a26 26 0 01-52 0h52z",fill:f[7]}),a.a.createElement("circle",{cx:45,cy:45,r:23,fill:f[8]})))},beam:function(e){var t=e.name,r=e.colors,a=e.title,c=e.square,f=e.size,m=l(e,["name","colors","title","square","size"]),d=function(e,t){var r,l=n(e),i=t&&t.length,a=s(l,t,i),c=o(l,10,1),f=c<5?c+4:c,m=o(l,10,2),d=m<5?m+4:m;return{wrapperColor:a,faceColor:(r=a,"#"===r.slice(0,1)&&(r=r.slice(1)),(299*parseInt(r.substr(0,2),16)+587*parseInt(r.substr(2,2),16)+114*parseInt(r.substr(4,2),16))/1e3>=128?"#000000":"#FFFFFF"),backgroundColor:s(l+13,t,i),wrapperTranslateX:f,wrapperTranslateY:d,wrapperRotate:o(l,360),wrapperScale:1+o(l,3)/10,isMouthOpen:h(l,2),isCircle:h(l,1),eyeSpread:o(l,5),mouthSpread:o(l,3),faceRotate:o(l,10,3),faceTranslateX:f>6?f/2:o(l,8,1),faceTranslateY:d>6?d/2:o(l,7,2)}}(t,r),u=i.useId();return i.createElement("svg",Object.assign({viewBox:"0 0 36 36",fill:"none",role:"img",xmlns:"http://www.w3.org/2000/svg",width:f,height:f},m),a&&i.createElement("title",null,t),i.createElement("mask",{id:u,maskUnits:"userSpaceOnUse",x:0,y:0,width:36,height:36},i.createElement("rect",{width:36,height:36,rx:c?void 0:72,fill:"#FFFFFF"})),i.createElement("g",{mask:"url(#".concat(u,")")},i.createElement("rect",{width:36,height:36,fill:d.backgroundColor}),i.createElement("rect",{x:"0",y:"0",width:36,height:36,transform:"translate("+d.wrapperTranslateX+" "+d.wrapperTranslateY+") rotate("+d.wrapperRotate+" 18 18) scale("+d.wrapperScale+")",fill:d.wrapperColor,rx:d.isCircle?36:6}),i.createElement("g",{transform:"translate("+d.faceTranslateX+" "+d.faceTranslateY+") rotate("+d.faceRotate+" 18 18)"},d.isMouthOpen?i.createElement("path",{d:"M15 "+(19+d.mouthSpread)+"c2 1 4 1 6 0",stroke:d.faceColor,fill:"none",strokeLinecap:"round"}):i.createElement("path",{d:"M13,"+(19+d.mouthSpread)+" a1,0.75 0 0,0 10,0",fill:d.faceColor}),i.createElement("rect",{x:14-d.eyeSpread,y:14,width:1.5,height:2,rx:1,stroke:"none",fill:d.faceColor}),i.createElement("rect",{x:20+d.eyeSpread,y:14,width:1.5,height:2,rx:1,stroke:"none",fill:d.faceColor}))))},sunset:function(e){var t=e.name,r=e.colors,a=e.title,c=e.square,h=e.size,o=l(e,["name","colors","title","square","size"]),f=function(e,t){var r=n(e),l=t&&t.length;return Array.from({length:4},(function(e,i){return s(r+i,t,l)}))}(t,r),m=t.replace(/\s/g,""),d=i.useId();return i.createElement("svg",Object.assign({viewBox:"0 0 80 80",fill:"none",role:"img",xmlns:"http://www.w3.org/2000/svg",width:h,height:h},o),a&&i.createElement("title",null,t),i.createElement("mask",{id:d,maskUnits:"userSpaceOnUse",x:0,y:0,width:80,height:80},i.createElement("rect",{width:80,height:80,rx:c?void 0:160,fill:"#FFFFFF"})),i.createElement("g",{mask:"url(#".concat(d,")")},i.createElement("path",{fill:"url(#gradient_paint0_linear_"+m+")",d:"M0 0h80v40H0z"}),i.createElement("path",{fill:"url(#gradient_paint1_linear_"+m+")",d:"M0 40h80v40H0z"})),i.createElement("defs",null,i.createElement("linearGradient",{id:"gradient_paint0_linear_"+m,x1:40,y1:0,x2:40,y2:40,gradientUnits:"userSpaceOnUse"},i.createElement("stop",{stopColor:f[0]}),i.createElement("stop",{offset:1,stopColor:f[1]})),i.createElement("linearGradient",{id:"gradient_paint1_linear_"+m,x1:40,y1:40,x2:40,y2:80,gradientUnits:"userSpaceOnUse"},i.createElement("stop",{stopColor:f[2]}),i.createElement("stop",{offset:1,stopColor:f[3]}))))},marble:f},d={geometric:"beam",abstract:"bauhaus"},u=function(e){var t=e.variant,r=void 0===t?"marble":t,i=e.colors,n=void 0===i?["#92A1C6","#146A7C","#F0AB3D","#C271B4","#C20D90"]:i,c=e.name,h=void 0===c?"Clara Barton":c,o=e.title,s=void 0!==o&&o,u=e.size,g=e.square,w=void 0!==g&&g,E=l(e,["variant","colors","name","title","size","square"]),p=m[d[r]||r]||f;return a.a.createElement(p,Object.assign({colors:n,name:h,title:s,size:u,square:w},E))};t.default=u}])}));

/***/ }),

/***/ 620394:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 537925:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Blend)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58303);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Blend = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("Blend", [
    [
        "circle",
        {
            cx: "9",
            cy: "9",
            r: "7",
            key: "p2h5vp"
        }
    ],
    [
        "circle",
        {
            cx: "15",
            cy: "15",
            r: "7",
            key: "19ennj"
        }
    ]
]);
 //# sourceMappingURL=blend.js.map


/***/ }),

/***/ 427434:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Blocks)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58303);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Blocks = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("Blocks", [
    [
        "rect",
        {
            width: "7",
            height: "7",
            x: "14",
            y: "3",
            rx: "1",
            key: "6d4xhi"
        }
    ],
    [
        "path",
        {
            d: "M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3",
            key: "1fpvtg"
        }
    ]
]);
 //# sourceMappingURL=blocks.js.map


/***/ }),

/***/ 401633:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ CirclePlus)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58303);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const CirclePlus = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("CirclePlus", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "path",
        {
            d: "M8 12h8",
            key: "1wcyev"
        }
    ],
    [
        "path",
        {
            d: "M12 8v8",
            key: "napkw2"
        }
    ]
]);
 //# sourceMappingURL=circle-plus.js.map


/***/ }),

/***/ 990082:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ CircleUser)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58303);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const CircleUser = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("CircleUser", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "10",
            r: "3",
            key: "ilqhr7"
        }
    ],
    [
        "path",
        {
            d: "M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662",
            key: "154egf"
        }
    ]
]);
 //# sourceMappingURL=circle-user.js.map


/***/ }),

/***/ 638817:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Cog)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58303);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Cog = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("Cog", [
    [
        "path",
        {
            d: "M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z",
            key: "sobvz5"
        }
    ],
    [
        "path",
        {
            d: "M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
            key: "11i496"
        }
    ],
    [
        "path",
        {
            d: "M12 2v2",
            key: "tus03m"
        }
    ],
    [
        "path",
        {
            d: "M12 22v-2",
            key: "1osdcq"
        }
    ],
    [
        "path",
        {
            d: "m17 20.66-1-1.73",
            key: "eq3orb"
        }
    ],
    [
        "path",
        {
            d: "M11 10.27 7 3.34",
            key: "16pf9h"
        }
    ],
    [
        "path",
        {
            d: "m20.66 17-1.73-1",
            key: "sg0v6f"
        }
    ],
    [
        "path",
        {
            d: "m3.34 7 1.73 1",
            key: "1ulond"
        }
    ],
    [
        "path",
        {
            d: "M14 12h8",
            key: "4f43i9"
        }
    ],
    [
        "path",
        {
            d: "M2 12h2",
            key: "1t8f8n"
        }
    ],
    [
        "path",
        {
            d: "m20.66 7-1.73 1",
            key: "1ow05n"
        }
    ],
    [
        "path",
        {
            d: "m3.34 17 1.73-1",
            key: "nuk764"
        }
    ],
    [
        "path",
        {
            d: "m17 3.34-1 1.73",
            key: "2wel8s"
        }
    ],
    [
        "path",
        {
            d: "m11 13.73-4 6.93",
            key: "794ttg"
        }
    ]
]);
 //# sourceMappingURL=cog.js.map


/***/ }),

/***/ 695164:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ CreditCard)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58303);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const CreditCard = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("CreditCard", [
    [
        "rect",
        {
            width: "20",
            height: "14",
            x: "2",
            y: "5",
            rx: "2",
            key: "ynyp8z"
        }
    ],
    [
        "line",
        {
            x1: "2",
            x2: "22",
            y1: "10",
            y2: "10",
            key: "1b3vmo"
        }
    ]
]);
 //# sourceMappingURL=credit-card.js.map


/***/ }),

/***/ 453779:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ GlobeLock)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58303);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const GlobeLock = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("GlobeLock", [
    [
        "path",
        {
            d: "M15.686 15A14.5 14.5 0 0 1 12 22a14.5 14.5 0 0 1 0-20 10 10 0 1 0 9.542 13",
            key: "qkt0x6"
        }
    ],
    [
        "path",
        {
            d: "M2 12h8.5",
            key: "ovaggd"
        }
    ],
    [
        "path",
        {
            d: "M20 6V4a2 2 0 1 0-4 0v2",
            key: "1of5e8"
        }
    ],
    [
        "rect",
        {
            width: "8",
            height: "5",
            x: "14",
            y: "6",
            rx: "1",
            key: "1fmf51"
        }
    ]
]);
 //# sourceMappingURL=globe-lock.js.map


/***/ }),

/***/ 178741:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 415140:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Link)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58303);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Link = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("Link", [
    [
        "path",
        {
            d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",
            key: "1cjeqo"
        }
    ],
    [
        "path",
        {
            d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
            key: "19qd67"
        }
    ]
]);
 //# sourceMappingURL=link.js.map


/***/ }),

/***/ 65433:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ LogOut)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58303);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const LogOut = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("LogOut", [
    [
        "path",
        {
            d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",
            key: "1uf3rs"
        }
    ],
    [
        "polyline",
        {
            points: "16 17 21 12 16 7",
            key: "1gabdz"
        }
    ],
    [
        "line",
        {
            x1: "21",
            x2: "9",
            y1: "12",
            y2: "12",
            key: "1uyos4"
        }
    ]
]);
 //# sourceMappingURL=log-out.js.map


/***/ }),

/***/ 117059:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ MessageCircleQuestion)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58303);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const MessageCircleQuestion = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("MessageCircleQuestion", [
    [
        "path",
        {
            d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z",
            key: "vv11sd"
        }
    ],
    [
        "path",
        {
            d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",
            key: "1u773s"
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
 //# sourceMappingURL=message-circle-question.js.map


/***/ }),

/***/ 76446:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ MessageCircle)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58303);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const MessageCircle = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("MessageCircle", [
    [
        "path",
        {
            d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z",
            key: "vv11sd"
        }
    ]
]);
 //# sourceMappingURL=message-circle.js.map


/***/ }),

/***/ 593517:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ PanelLeftClose)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58303);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const PanelLeftClose = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("PanelLeftClose", [
    [
        "rect",
        {
            width: "18",
            height: "18",
            x: "3",
            y: "3",
            rx: "2",
            key: "afitv7"
        }
    ],
    [
        "path",
        {
            d: "M9 3v18",
            key: "fh3hqa"
        }
    ],
    [
        "path",
        {
            d: "m16 15-3-3 3-3",
            key: "14y99z"
        }
    ]
]);
 //# sourceMappingURL=panel-left-close.js.map


/***/ }),

/***/ 168185:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ PanelLeftOpen)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58303);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const PanelLeftOpen = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("PanelLeftOpen", [
    [
        "rect",
        {
            width: "18",
            height: "18",
            x: "3",
            y: "3",
            rx: "2",
            key: "afitv7"
        }
    ],
    [
        "path",
        {
            d: "M9 3v18",
            key: "fh3hqa"
        }
    ],
    [
        "path",
        {
            d: "m14 9 3 3-3 3",
            key: "8010ee"
        }
    ]
]);
 //# sourceMappingURL=panel-left-open.js.map


/***/ }),

/***/ 133328:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Rocket)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58303);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Rocket = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("Rocket", [
    [
        "path",
        {
            d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",
            key: "m3kijz"
        }
    ],
    [
        "path",
        {
            d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",
            key: "1fmvmk"
        }
    ],
    [
        "path",
        {
            d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",
            key: "1f8sc4"
        }
    ],
    [
        "path",
        {
            d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",
            key: "qeys4"
        }
    ]
]);
 //# sourceMappingURL=rocket.js.map


/***/ }),

/***/ 467935:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

/***/ 186296:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccountSettingsNavbar: () => (/* binding */ AccountSettingsNavbar)
/* harmony export */ });
/* harmony import */ var react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(672771);
/* harmony import */ var react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_0__);

const AccountSettingsNavbar = (0,react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_0__.registerClientReference)(
function() { throw new Error("Attempted to call AccountSettingsNavbar() from the server but AccountSettingsNavbar is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component."); },
"/Users/kdy1/projects/formbricks/apps/web/app/(app)/environments/[environmentId]/settings/(account)/components/AccountSettingsNavbar.tsx",
"AccountSettingsNavbar",
);

/***/ }),

/***/ 64827:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(891069);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_auth_lib_authOptions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(136015);
/* harmony import */ var _tolgee_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(186184);
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(963302);
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _formbricks_lib_organization_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(353687);
/* harmony import */ var _formbricks_lib_project_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(529987);






const AccountSettingsLayout = async (props)=>{
    const params = await props.params;
    const { children } = props;
    const t = await (0,_tolgee_server__WEBPACK_IMPORTED_MODULE_2__/* .getTranslate */ .r)();
    const [organization, project, session] = await Promise.all([
        (0,_formbricks_lib_organization_service__WEBPACK_IMPORTED_MODULE_4__/* .getOrganizationByEnvironmentId */ .TK)(params.environmentId),
        (0,_formbricks_lib_project_service__WEBPACK_IMPORTED_MODULE_5__/* .getProjectByEnvironmentId */ .bq)(params.environmentId),
        (0,next_auth__WEBPACK_IMPORTED_MODULE_3__.getServerSession)(_modules_auth_lib_authOptions__WEBPACK_IMPORTED_MODULE_1__/* .authOptions */ .N)
    ]);
    if (!organization) {
        throw new Error(t("common.organization_not_found"));
    }
    if (!project) {
        throw new Error(t("common.project_not_found"));
    }
    if (!session) {
        throw new Error(t("common.session_not_found"));
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AccountSettingsLayout);


/***/ }),

/***/ 42304:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsCard: () => (/* binding */ SettingsCard)
/* harmony export */ });
/* harmony import */ var react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(672771);
/* harmony import */ var react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_0__);

const SettingsCard = (0,react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_0__.registerClientReference)(
function() { throw new Error("Attempted to call SettingsCard() from the server but SettingsCard is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component."); },
"/Users/kdy1/projects/formbricks/apps/web/app/(app)/environments/[environmentId]/settings/components/SettingsCard.tsx",
"SettingsCard",
);

/***/ }),

/***/ 746219:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* binding */ PageContentWrapper)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(891069);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(598597);


const PageContentWrapper = ({ children, className })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_1__.cn)("h-full space-y-6 p-6", className),
        children: children
    });
};


/***/ }),

/***/ 109053:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: () => (/* binding */ PageHeader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(891069);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(598597);


const PageHeader = ({ cta, pageTitle, children })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "border-b border-slate-200",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex items-center justify-between space-x-4 pb-4",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1", {
                        className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_1__.cn)("text-3xl font-bold capitalize text-slate-800"),
                        children: pageTitle
                    }),
                    cta
                ]
            }),
            children
        ]
    });
};


/***/ }),

/***/ 598597:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cn: () => (/* binding */ cn)
/* harmony export */ });
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(966190);
/* harmony import */ var tailwind_merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(263798);


const cn = (...inputs)=>{
    return (0,tailwind_merge__WEBPACK_IMPORTED_MODULE_0__/* .twMerge */ .QP)((0,clsx__WEBPACK_IMPORTED_MODULE_1__/* .clsx */ .$)(inputs));
};


/***/ }),

/***/ 635276:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
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


/***/ }),

/***/ 809391:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ usePrevious)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(891616);
// packages/react/use-previous/src/usePrevious.tsx

function usePrevious(value) {
  const ref = react__WEBPACK_IMPORTED_MODULE_0__.useRef({ value, previous: value });
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    if (ref.current.value !== value) {
      ref.current.previous = ref.current.value;
      ref.current.value = value;
    }
    return ref.current.previous;
  }, [value]);
}

//# sourceMappingURL=index.mjs.map


/***/ })

};
;