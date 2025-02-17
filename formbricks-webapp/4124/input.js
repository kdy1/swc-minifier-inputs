"use strict";
exports.id = 4124;
exports.ids = [4124];
exports.modules = {

/***/ 10015:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AM: () => (/* binding */ Popover),
/* harmony export */   Wv: () => (/* binding */ PopoverTrigger),
/* harmony export */   hl: () => (/* binding */ PopoverContent)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(642725);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _radix_ui_react_popover__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(578661);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(891616);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(983773);
/* __next_internal_client_entry_do_not_use__ Popover,PopoverTrigger,PopoverContent auto */ 



const Popover = _radix_ui_react_popover__WEBPACK_IMPORTED_MODULE_2__/* .Root */ .bL;
const PopoverTrigger = _radix_ui_react_popover__WEBPACK_IMPORTED_MODULE_2__/* .Trigger */ .l9;
const PopoverContent = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_popover__WEBPACK_IMPORTED_MODULE_2__/* .Portal */ .ZL, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_popover__WEBPACK_IMPORTED_MODULE_2__/* .Content */ .UC, {
            ref: ref,
            align: align,
            sideOffset: sideOffset,
            className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_3__.cn)("animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2 data-[side=right]:slide-in-from-left-2 data-[side=left]:slide-in-from-right-2 z-50 w-72 rounded-md border border-slate-100 bg-white p-4 shadow-md outline-none", className),
            ...props
        })
    }));
PopoverContent.displayName = _radix_ui_react_popover__WEBPACK_IMPORTED_MODULE_2__/* .Content */ .UC.displayName;



/***/ }),

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

/***/ 88515:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ CircleAlert)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58303);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const CircleAlert = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("CircleAlert", [
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
        "line",
        {
            x1: "12",
            x2: "12",
            y1: "8",
            y2: "12",
            key: "1pkeuh"
        }
    ],
    [
        "line",
        {
            x1: "12",
            x2: "12.01",
            y1: "16",
            y2: "16",
            key: "4dfq90"
        }
    ]
]);
 //# sourceMappingURL=circle-alert.js.map


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

/***/ 495235:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ contactAttributeKeyCache)
/* harmony export */ });
/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87863);
/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_cache__WEBPACK_IMPORTED_MODULE_0__);

const contactAttributeKeyCache = {
    tag: {
        byId (id) {
            return `contactAttributeKey-${id}`;
        },
        byEnvironmentId (environmentId) {
            return `environments-${environmentId}-contactAttributeKeys`;
        },
        byEnvironmentIdAndKey (environmentId, key) {
            return `contactAttributeKey-environment-${environmentId}-key-${key}`;
        }
    },
    revalidate: ({ id, environmentId, key })=>{
        if (id) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(contactAttributeKeyCache.tag.byId(id));
        }
        if (environmentId) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(contactAttributeKeyCache.tag.byEnvironmentId(environmentId));
        }
        if (environmentId && key) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(contactAttributeKeyCache.tag.byEnvironmentIdAndKey(environmentId, key));
        }
    }
};


/***/ }),

/***/ 892865:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ contactAttributeCache)
/* harmony export */ });
/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87863);
/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_cache__WEBPACK_IMPORTED_MODULE_0__);

const contactAttributeCache = {
    tag: {
        byContactId (contactId) {
            return `contact-${contactId}-contactAttributes`;
        },
        byEnvironmentIdAndUserId (environmentId, userId) {
            return `environments-${environmentId}-contact-userId-${userId}-contactAttributes`;
        },
        byKeyAndContactId (key, contactId) {
            return `contact-${contactId}-contactAttribute-${key}`;
        },
        byEnvironmentId (environmentId) {
            return `contactAttributes-${environmentId}`;
        }
    },
    revalidate: ({ contactId, environmentId, userId, key })=>{
        if (environmentId) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(contactAttributeCache.tag.byEnvironmentId(environmentId));
        }
        if (environmentId && userId) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(contactAttributeCache.tag.byEnvironmentIdAndUserId(environmentId, userId));
        }
        if (contactId) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(contactAttributeCache.tag.byContactId(contactId));
        }
        if (contactId && key) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(contactAttributeCache.tag.byKeyAndContactId(key, contactId));
        }
    }
};


/***/ }),

/***/ 180868:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ contactCache)
/* harmony export */ });
/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87863);
/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_cache__WEBPACK_IMPORTED_MODULE_0__);

const contactCache = {
    tag: {
        byId (id) {
            return `contacts-${id}`;
        },
        byEnvironmentId (environmentId) {
            return `environments-${environmentId}-contacts`;
        },
        byEnvironmentIdAndUserId (environmentId, userId) {
            return `environments-${environmentId}-contactByUserId-${userId}`;
        }
    },
    revalidate: ({ id, environmentId, userId })=>{
        if (id) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(contactCache.tag.byId(id));
        }
        if (environmentId) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(contactCache.tag.byEnvironmentId(environmentId));
        }
        if (environmentId && userId) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(contactCache.tag.byEnvironmentIdAndUserId(environmentId, userId));
        }
    }
};


/***/ }),

/***/ 416428:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  sY: () => (/* binding */ createContactsFromCSVAction),
  uc: () => (/* binding */ deleteContactAction),
  QF: () => (/* binding */ getContactsAction)
});

// EXTERNAL MODULE: ../../node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js
var server_reference = __webpack_require__(286055);
// EXTERNAL MODULE: ../../node_modules/next/dist/server/app-render/encryption.js
var encryption = __webpack_require__(770767);
// EXTERNAL MODULE: ./lib/utils/action-client.ts
var action_client = __webpack_require__(308046);
// EXTERNAL MODULE: ./lib/utils/action-client-middleware.ts
var action_client_middleware = __webpack_require__(729455);
// EXTERNAL MODULE: ./lib/utils/helper.ts
var helper = __webpack_require__(440388);
// EXTERNAL MODULE: ../../node_modules/zod/lib/index.mjs
var lib = __webpack_require__(283131);
// EXTERNAL MODULE: ../../packages/types/common.ts
var common = __webpack_require__(552224);
// EXTERNAL MODULE: ./lib/cache/contact.ts
var cache_contact = __webpack_require__(976565);
// EXTERNAL MODULE: ../../node_modules/next/cache.js
var cache = __webpack_require__(310256);
;// ./lib/cache/contact-attribute.ts

const contactAttributeCache = {
    tag: {
        byContactId (contactId) {
            return `contact-${contactId}-contactAttributes`;
        },
        byEnvironmentIdAndUserId (environmentId, userId) {
            return `environments-${environmentId}-contact-userId-${userId}-contactAttributes`;
        },
        byKeyAndContactId (key, contactId) {
            return `contact-${contactId}-contactAttribute-${key}`;
        },
        byEnvironmentId (environmentId) {
            return `contactAttributes-${environmentId}`;
        }
    },
    revalidate: ({ contactId, environmentId, userId, key })=>{
        if (environmentId) {
            (0,cache.revalidateTag)(contactAttributeCache.tag.byEnvironmentId(environmentId));
        }
        if (environmentId && userId) {
            (0,cache.revalidateTag)(contactAttributeCache.tag.byEnvironmentIdAndUserId(environmentId, userId));
        }
        if (contactId) {
            (0,cache.revalidateTag)(contactAttributeCache.tag.byContactId(contactId));
        }
        if (contactId && key) {
            (0,cache.revalidateTag)(contactAttributeCache.tag.byKeyAndContactId(key, contactId));
        }
    }
};

;// ./lib/cache/contact-attribute-key.ts

const contactAttributeKeyCache = {
    tag: {
        byId (id) {
            return `contactAttributeKey-${id}`;
        },
        byEnvironmentId (environmentId) {
            return `environments-${environmentId}-contactAttributeKeys`;
        },
        byEnvironmentIdAndKey (environmentId, key) {
            return `contactAttributeKey-environment-${environmentId}-key-${key}`;
        }
    },
    revalidate: ({ id, environmentId, key })=>{
        if (id) {
            (0,cache.revalidateTag)(contactAttributeKeyCache.tag.byId(id));
        }
        if (environmentId) {
            (0,cache.revalidateTag)(contactAttributeKeyCache.tag.byEnvironmentId(environmentId));
        }
        if (environmentId && key) {
            (0,cache.revalidateTag)(contactAttributeKeyCache.tag.byEnvironmentIdAndKey(environmentId, key));
        }
    }
};

// EXTERNAL MODULE: external "@prisma/client"
var client_ = __webpack_require__(896330);
// EXTERNAL MODULE: ../../node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js
var react = __webpack_require__(645625);
// EXTERNAL MODULE: ../../packages/database/src/index.ts + 1 modules
var src = __webpack_require__(482859);
// EXTERNAL MODULE: ../../packages/lib/cache.ts
var lib_cache = __webpack_require__(48165);
// EXTERNAL MODULE: ../../packages/lib/constants.ts
var constants = __webpack_require__(711344);
// EXTERNAL MODULE: ../../packages/lib/utils/validate.ts
var validate = __webpack_require__(472749);
// EXTERNAL MODULE: ../../packages/types/errors.ts
var errors = __webpack_require__(207798);
;// ./modules/ee/contacts/types/contact.ts

const ZContact = lib.z.object({
    id: lib.z.string().cuid2(),
    createdAt: lib.z.date(),
    updatedAt: lib.z.date(),
    environmentId: lib.z.string().cuid2()
});
const ZContactTableAttributeData = lib.z.object({
    key: lib.z.string(),
    name: lib.z.string().nullable(),
    value: lib.z.string().nullable()
});
const ZContactTableData = lib.z.object({
    id: lib.z.string(),
    userId: lib.z.string(),
    email: lib.z.string(),
    firstName: lib.z.string(),
    lastName: lib.z.string(),
    attributes: lib.z.array(ZContactTableAttributeData)
});
const ZContactWithAttributes = ZContact.extend({
    attributes: lib.z.record(lib.z.string())
});
// types related to the csv upload:
const ZContactCSVDuplicateAction = lib.z.enum([
    "skip",
    "update",
    "overwrite"
]);
const ZContactCSVUploadResponse = lib.z.array(lib.z.record(lib.z.string())).max(10000, {
    message: "Maximum 10000 records allowed at a time."
}).superRefine((data, ctx)=>{
    for (const record of data){
        if (!Object.keys(record).includes("email")) {
            return ctx.addIssue({
                code: lib.z.ZodIssueCode.custom,
                message: "Missing email field for one or more records"
            });
        }
        if (!record.email) {
            return ctx.addIssue({
                code: lib.z.ZodIssueCode.custom,
                message: "Email field is empty for one or more records"
            });
        }
    }
    // check for duplicate emails
    const emails = data.map((record)=>record.email);
    const emailSet = new Set(emails);
    if (emails.length !== emailSet.size) {
        return ctx.addIssue({
            code: lib.z.ZodIssueCode.custom,
            message: "Duplicate emails found in the records"
        });
    }
    // check for duplicate userIds if present
    const userIds = data.map((record)=>record.userId).filter(Boolean);
    if (userIds?.length > 0) {
        const userIdSet = new Set(userIds);
        if (userIds.length !== userIdSet.size) {
            return ctx.addIssue({
                code: lib.z.ZodIssueCode.custom,
                message: "Duplicate userIds found in the records"
            });
        }
    }
});
const ZContactCSVAttributeMap = lib.z.record(lib.z.string(), lib.z.string()).superRefine((attributeMap, ctx)=>{
    const values = Object.values(attributeMap);
    if (new Set(values).size !== values.length) {
        return ctx.addIssue({
            code: lib.z.ZodIssueCode.custom,
            message: "Attribute map contains duplicate values"
        });
    }
});

;// ./modules/ee/contacts/lib/utils.ts
const getContactIdentifier = (contactAttributes)=>{
    return contactAttributes?.email ?? contactAttributes?.userId ?? "";
};
const convertPrismaContactAttributes = (prismaAttributes)=>{
    return prismaAttributes.reduce((acc, attr)=>{
        acc[attr.attributeKey.key] = {
            name: attr.attributeKey.name,
            value: attr.value
        };
        return acc;
    }, {});
};
const transformPrismaContact = (person)=>{
    const attributes = person.attributes.reduce((acc, attr)=>{
        acc[attr.attributeKey.key] = attr.value;
        return acc;
    }, {});
    return {
        id: person.id,
        attributes,
        environmentId: person.environmentId,
        createdAt: new Date(person.createdAt),
        updatedAt: new Date(person.updatedAt)
    };
};

;// ./modules/ee/contacts/lib/contacts.ts














const selectContact = {
    id: true,
    createdAt: true,
    updatedAt: true,
    environmentId: true,
    attributes: {
        select: {
            value: true,
            attributeKey: {
                select: {
                    key: true,
                    name: true
                }
            }
        }
    }
};
const selectContactAttribute = {
    value: true,
    attributeKey: {
        select: {
            key: true,
            name: true
        }
    }
};
const buildContactWhereClause = (environmentId, search)=>{
    const whereClause = {
        environmentId
    };
    if (search) {
        whereClause.OR = [
            {
                attributes: {
                    some: {
                        value: {
                            contains: search,
                            mode: "insensitive"
                        }
                    }
                }
            },
            {
                id: {
                    contains: search,
                    mode: "insensitive"
                }
            }
        ];
    }
    return whereClause;
};
const getContacts = (0,react.cache)((environmentId, offset, searchValue)=>(0,lib_cache/* cache */.P)(async ()=>{
        (0,validate/* validateInputs */.C)([
            environmentId,
            common/* ZId */.i4
        ], [
            offset,
            common/* ZOptionalNumber */.Wo
        ], [
            searchValue,
            common/* ZOptionalString */.Ww
        ]);
        try {
            const contacts = await src/* prisma */.z.contact.findMany({
                where: buildContactWhereClause(environmentId, searchValue),
                select: selectContact,
                take: constants/* ITEMS_PER_PAGE */.re,
                skip: offset,
                orderBy: {
                    createdAt: "desc"
                }
            });
            return contacts.map((contact)=>transformPrismaContact(contact));
        } catch (error) {
            if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
                throw new errors/* DatabaseError */.a$(error.message);
            }
            throw error;
        }
    }, [
        `getContacts-${environmentId}-${offset}-${searchValue ?? ""}`
    ], {
        tags: [
            cache_contact/* contactCache */.f.tag.byEnvironmentId(environmentId)
        ]
    })());
const getContact = (0,react.cache)((contactId)=>(0,lib_cache/* cache */.P)(async ()=>{
        (0,validate/* validateInputs */.C)([
            contactId,
            common/* ZId */.i4
        ]);
        try {
            return await src/* prisma */.z.contact.findUnique({
                where: {
                    id: contactId
                },
                select: selectContact
            });
        } catch (error) {
            if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
                throw new errors/* DatabaseError */.a$(error.message);
            }
            throw error;
        }
    }, [
        `getContact-${contactId}`
    ], {
        tags: [
            cache_contact/* contactCache */.f.tag.byId(contactId)
        ]
    })());
const deleteContact = async (contactId)=>{
    (0,validate/* validateInputs */.C)([
        contactId,
        common/* ZId */.i4
    ]);
    try {
        const contact = await src/* prisma */.z.contact.delete({
            where: {
                id: contactId
            },
            select: selectContact
        });
        const contactUserId = contact.attributes.find((attr)=>attr.attributeKey.key === "userId")?.value;
        cache_contact/* contactCache */.f.revalidate({
            id: contact.id,
            environmentId: contact.environmentId,
            userId: contactUserId
        });
        return contact;
    } catch (error) {
        if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
            throw new errors/* DatabaseError */.a$(error.message);
        }
        throw error;
    }
};
const getContactAttributes = (0,react.cache)((contactId)=>(0,lib_cache/* cache */.P)(async ()=>{
        (0,validate/* validateInputs */.C)([
            contactId,
            common/* ZId */.i4
        ]);
        try {
            const prismaAttributes = await src/* prisma */.z.contactAttribute.findMany({
                where: {
                    contactId
                },
                select: selectContactAttribute
            });
            // return convertPrismaContactAttributes(prismaAttributes);
            return prismaAttributes.reduce((acc, attr)=>{
                acc[attr.attributeKey.key] = attr.value;
                return acc;
            }, {});
        } catch (error) {
            if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
                throw new errors/* DatabaseError */.a$(error.message);
            }
            throw error;
        }
    }, [
        `getContactAttributes-${contactId}`
    ], {
        tags: [
            contactAttributeCache.tag.byContactId(contactId)
        ]
    })());
const getContactAttributeKeys = (0,react.cache)((environmentId)=>(0,lib_cache/* cache */.P)(async ()=>{
        return await src/* prisma */.z.contactAttributeKey.findMany({
            where: {
                environmentId
            }
        });
    }, [
        `getContactAttributeKeys-${environmentId}`
    ], {
        tags: [
            contactAttributeKeyCache.tag.byEnvironmentId(environmentId)
        ]
    })());
const createContactsFromCSV = async (csvData, environmentId, duplicateContactsAction, attributeMap)=>{
    (0,validate/* validateInputs */.C)([
        csvData,
        ZContactCSVUploadResponse
    ], [
        environmentId,
        common/* ZId */.i4
    ], [
        duplicateContactsAction,
        ZContactCSVDuplicateAction
    ], [
        attributeMap,
        ZContactCSVAttributeMap
    ]);
    try {
        // Extract unique emails and userIds from CSV data
        const csvEmails = Array.from(new Set(csvData.map((r)=>r.email).filter(Boolean)));
        const csvUserIds = Array.from(new Set(csvData.map((r)=>r.userId).filter(Boolean)));
        // Fetch existing contacts by email
        const existingContactsByEmail = await src/* prisma */.z.contact.findMany({
            where: {
                environmentId,
                attributes: {
                    some: {
                        attributeKey: {
                            key: "email"
                        },
                        value: {
                            in: csvEmails
                        }
                    }
                }
            },
            select: {
                id: true,
                attributes: {
                    select: {
                        attributeKey: {
                            select: {
                                key: true,
                                id: true
                            }
                        },
                        value: true
                    }
                }
            }
        });
        // Map emails to existing contacts
        const emailToContactMap = new Map();
        existingContactsByEmail.forEach((contact)=>{
            const emailAttr = contact.attributes.find((attr)=>attr.attributeKey.key === "email");
            if (emailAttr) {
                emailToContactMap.set(emailAttr.value, contact);
            }
        });
        // Check for duplicate userIds
        const existingUserIds = await src/* prisma */.z.contactAttribute.findMany({
            where: {
                attributeKey: {
                    key: "userId",
                    environmentId
                },
                value: {
                    in: csvUserIds
                }
            },
            select: {
                value: true,
                contactId: true
            }
        });
        // Fetch existing attribute keys and cache them
        const existingAttributeKeys = await src/* prisma */.z.contactAttributeKey.findMany({
            where: {
                environmentId
            },
            select: {
                key: true,
                id: true
            }
        });
        const attributeKeyMap = new Map();
        existingAttributeKeys.forEach((attrKey)=>{
            attributeKeyMap.set(attrKey.key, attrKey.id);
        });
        // Identify missing attribute keys
        const csvKeys = new Set();
        csvData.forEach((record)=>{
            Object.keys(record).forEach((key)=>csvKeys.add(key));
        });
        const missingKeys = Array.from(csvKeys).filter((key)=>!attributeKeyMap.has(key));
        // Create missing attribute keys
        if (missingKeys.length > 0) {
            await src/* prisma */.z.contactAttributeKey.createMany({
                data: missingKeys.map((key)=>({
                        key,
                        name: key,
                        environmentId
                    })),
                skipDuplicates: true
            });
            // Fetch and update the attributeKeyMap with new keys
            const newAttributeKeys = await src/* prisma */.z.contactAttributeKey.findMany({
                where: {
                    key: {
                        in: missingKeys
                    },
                    environmentId
                },
                select: {
                    key: true,
                    id: true
                }
            });
            newAttributeKeys.forEach((attrKey)=>{
                attributeKeyMap.set(attrKey.key, attrKey.id);
            });
        }
        const createdContacts = [];
        // Process contacts in parallel
        const contactPromises = csvData.map(async (record)=>{
            // Skip records without email
            if (!record.email) {
                throw new errors/* ValidationError */.yI("Email is required for all contacts");
            }
            const existingContact = emailToContactMap.get(record.email);
            if (existingContact) {
                // Handle duplicates based on duplicateContactsAction
                switch(duplicateContactsAction){
                    case "skip":
                        return null;
                    case "update":
                        {
                            // if the record has a userId, check if it already exists
                            const existingUserId = existingUserIds.find((attr)=>attr.value === record.userId && attr.contactId !== existingContact.id);
                            let recordToProcess = {
                                ...record
                            };
                            if (existingUserId) {
                                const { userId, ...rest } = recordToProcess;
                                const existingContactUserId = existingContact.attributes.find((attr)=>attr.attributeKey.key === "userId")?.value;
                                recordToProcess = {
                                    ...rest,
                                    ...existingContactUserId && {
                                        userId: existingContactUserId
                                    }
                                };
                            }
                            const attributesToUpsert = Object.entries(recordToProcess).map(([key, value])=>({
                                    where: {
                                        contactId_attributeKeyId: {
                                            contactId: existingContact.id,
                                            attributeKeyId: attributeKeyMap.get(key)
                                        }
                                    },
                                    update: {
                                        value
                                    },
                                    create: {
                                        attributeKeyId: attributeKeyMap.get(key),
                                        value
                                    }
                                }));
                            // Update contact with upserted attributes
                            const updatedContact = src/* prisma */.z.contact.update({
                                where: {
                                    id: existingContact.id
                                },
                                data: {
                                    attributes: {
                                        // @ts-expect-error
                                        upsert: attributesToUpsert
                                    }
                                },
                                include: {
                                    attributes: {
                                        select: {
                                            attributeKey: {
                                                select: {
                                                    key: true
                                                }
                                            },
                                            value: true
                                        }
                                    }
                                }
                            });
                            return updatedContact;
                        }
                    case "overwrite":
                        {
                            // if the record has a userId, check if it already exists
                            const existingUserId = existingUserIds.find((attr)=>attr.value === record.userId && attr.contactId !== existingContact.id);
                            let recordToProcess = {
                                ...record
                            };
                            if (existingUserId) {
                                const { userId, ...rest } = recordToProcess;
                                const existingContactUserId = existingContact.attributes.find((attr)=>attr.attributeKey.key === "userId")?.value;
                                recordToProcess = {
                                    ...rest,
                                    ...existingContactUserId && {
                                        userId: existingContactUserId
                                    }
                                };
                            }
                            // Overwrite by deleting existing attributes and creating new ones
                            await src/* prisma */.z.contactAttribute.deleteMany({
                                where: {
                                    contactId: existingContact.id
                                }
                            });
                            const newAttributes = Object.entries(recordToProcess).map(([key, value])=>({
                                    attributeKey: {
                                        connect: {
                                            key_environmentId: {
                                                key,
                                                environmentId
                                            }
                                        }
                                    },
                                    value
                                }));
                            const updatedContact = src/* prisma */.z.contact.update({
                                where: {
                                    id: existingContact.id
                                },
                                data: {
                                    attributes: {
                                        create: newAttributes
                                    }
                                },
                                include: {
                                    attributes: {
                                        select: {
                                            attributeKey: {
                                                select: {
                                                    key: true
                                                }
                                            },
                                            value: true
                                        }
                                    }
                                }
                            });
                            return updatedContact;
                        }
                }
            } else {
                // Create new contact
                const newAttributes = Object.entries(record).map(([key, value])=>({
                        attributeKey: {
                            connect: {
                                key_environmentId: {
                                    key,
                                    environmentId
                                }
                            }
                        },
                        value
                    }));
                const newContact = src/* prisma */.z.contact.create({
                    data: {
                        environmentId,
                        attributes: {
                            create: newAttributes
                        }
                    },
                    include: {
                        attributes: {
                            select: {
                                attributeKey: {
                                    select: {
                                        key: true
                                    }
                                },
                                value: true
                            }
                        }
                    }
                });
                return newContact;
            }
        });
        const results = await Promise.all(contactPromises);
        const createdContactsFiltered = results.filter((contact)=>contact !== null);
        createdContacts.push(...createdContactsFiltered);
        cache_contact/* contactCache */.f.revalidate({
            environmentId
        });
        for (const contact of createdContactsFiltered){
            cache_contact/* contactCache */.f.revalidate({
                id: contact.id
            });
        }
        contactAttributeKeyCache.revalidate({
            environmentId
        });
        return createdContacts;
    } catch (error) {
        if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
            throw new errors/* DatabaseError */.a$(error.message);
        }
        throw error;
    }
};

// EXTERNAL MODULE: ../../node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js
var action_validate = __webpack_require__(429931);
;// ./modules/ee/contacts/actions.ts
/* __next_internal_action_entry_do_not_use__ {"7f12c609da9913f184fbd147593babde9f9bde2e7d":"deleteContactAction","7f2aab56d1389d0c3027efd40998d972d4268e90aa":"getContactsAction","7f4fa35baa8c62da2750fa071953797195fb3181bf":"createContactsFromCSVAction"} */ 








const ZGetContactsAction = lib.z.object({
    environmentId: common/* ZId */.i4,
    offset: lib.z.number().int().nonnegative(),
    searchValue: lib.z.string().optional()
});
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getContactsAction = action_client/* authenticatedActionClient */.D.schema(ZGetContactsAction).action(async ({ ctx, parsedInput })=>{
    await (0,action_client_middleware/* checkAuthorizationUpdated */.r)({
        userId: ctx.user.id,
        organizationId: await (0,helper/* getOrganizationIdFromEnvironmentId */.X_)(parsedInput.environmentId),
        access: [
            {
                type: "organization",
                roles: [
                    "owner",
                    "manager"
                ]
            },
            {
                type: "projectTeam",
                minPermission: "read",
                projectId: await (0,helper/* getProjectIdFromEnvironmentId */.DU)(parsedInput.environmentId)
            }
        ]
    });
    return getContacts(parsedInput.environmentId, parsedInput.offset, parsedInput.searchValue);
});
const ZContactDeleteAction = lib.z.object({
    contactId: common/* ZId */.i4
});
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ deleteContactAction = action_client/* authenticatedActionClient */.D.schema(ZContactDeleteAction).action(async ({ ctx, parsedInput })=>{
    const organizationId = await (0,helper/* getOrganizationIdFromContactId */.Ie)(parsedInput.contactId);
    const projectId = await (0,helper/* getProjectIdFromContactId */.o)(parsedInput.contactId);
    await (0,action_client_middleware/* checkAuthorizationUpdated */.r)({
        userId: ctx.user.id,
        organizationId,
        access: [
            {
                type: "organization",
                roles: [
                    "owner",
                    "manager"
                ]
            },
            {
                type: "projectTeam",
                minPermission: "readWrite",
                projectId
            }
        ]
    });
    return await deleteContact(parsedInput.contactId);
});
const ZCreateContactsFromCSV = lib.z.object({
    csvData: ZContactCSVUploadResponse,
    environmentId: common/* ZId */.i4,
    duplicateContactsAction: ZContactCSVDuplicateAction,
    attributeMap: ZContactCSVAttributeMap
});
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ createContactsFromCSVAction = action_client/* authenticatedActionClient */.D.schema(ZCreateContactsFromCSV).action(async ({ ctx, parsedInput })=>{
    await (0,action_client_middleware/* checkAuthorizationUpdated */.r)({
        userId: ctx.user.id,
        organizationId: await (0,helper/* getOrganizationIdFromEnvironmentId */.X_)(parsedInput.environmentId),
        access: [
            {
                type: "organization",
                roles: [
                    "owner",
                    "manager"
                ]
            },
            {
                type: "projectTeam",
                projectId: await (0,helper/* getProjectIdFromEnvironmentId */.DU)(parsedInput.environmentId),
                minPermission: "readWrite"
            }
        ]
    });
    const result = await createContactsFromCSV(parsedInput.csvData, parsedInput.environmentId, parsedInput.duplicateContactsAction, parsedInput.attributeMap);
    return result;
});

(0,action_validate/* ensureServerEntryExports */.D)([
    getContactsAction,
    deleteContactAction,
    createContactsFromCSVAction
]);
(0,server_reference/* registerServerReference */.A)(getContactsAction, "7f2aab56d1389d0c3027efd40998d972d4268e90aa", null);
(0,server_reference/* registerServerReference */.A)(deleteContactAction, "7f12c609da9913f184fbd147593babde9f9bde2e7d", null);
(0,server_reference/* registerServerReference */.A)(createContactsFromCSVAction, "7f4fa35baa8c62da2750fa071953797195fb3181bf", null);


/***/ }),

/***/ 465412:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  bl: () => (/* binding */ getContact),
  fo: () => (/* binding */ getContactAttributeKeys),
  qe: () => (/* binding */ getContactAttributes),
  kK: () => (/* binding */ getContacts)
});

// UNUSED EXPORTS: createContactsFromCSV, deleteContact

// EXTERNAL MODULE: ./lib/cache/contact.ts
var contact = __webpack_require__(180868);
// EXTERNAL MODULE: ./lib/cache/contact-attribute.ts
var contact_attribute = __webpack_require__(892865);
// EXTERNAL MODULE: ./lib/cache/contact-attribute-key.ts
var contact_attribute_key = __webpack_require__(495235);
// EXTERNAL MODULE: external "@prisma/client"
var client_ = __webpack_require__(896330);
// EXTERNAL MODULE: ../../node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js
var react = __webpack_require__(922728);
// EXTERNAL MODULE: ../../packages/database/src/index.ts + 1 modules
var src = __webpack_require__(527610);
// EXTERNAL MODULE: ../../packages/lib/cache.ts
var cache = __webpack_require__(794356);
// EXTERNAL MODULE: ../../packages/lib/constants.ts
var constants = __webpack_require__(836919);
// EXTERNAL MODULE: ../../packages/lib/utils/validate.ts
var validate = __webpack_require__(860988);
// EXTERNAL MODULE: ../../packages/types/common.ts
var common = __webpack_require__(733735);
// EXTERNAL MODULE: ../../packages/types/errors.ts
var errors = __webpack_require__(470641);
// EXTERNAL MODULE: ../../node_modules/zod/lib/index.mjs
var lib = __webpack_require__(545198);
;// ./modules/ee/contacts/types/contact.ts

const ZContact = lib.z.object({
    id: lib.z.string().cuid2(),
    createdAt: lib.z.date(),
    updatedAt: lib.z.date(),
    environmentId: lib.z.string().cuid2()
});
const ZContactTableAttributeData = lib.z.object({
    key: lib.z.string(),
    name: lib.z.string().nullable(),
    value: lib.z.string().nullable()
});
const ZContactTableData = lib.z.object({
    id: lib.z.string(),
    userId: lib.z.string(),
    email: lib.z.string(),
    firstName: lib.z.string(),
    lastName: lib.z.string(),
    attributes: lib.z.array(ZContactTableAttributeData)
});
const ZContactWithAttributes = ZContact.extend({
    attributes: lib.z.record(lib.z.string())
});
// types related to the csv upload:
const contact_ZContactCSVDuplicateAction = lib.z.enum([
    "skip",
    "update",
    "overwrite"
]);
const contact_ZContactCSVUploadResponse = lib.z.array(lib.z.record(lib.z.string())).max(10000, {
    message: "Maximum 10000 records allowed at a time."
}).superRefine((data, ctx)=>{
    for (const record of data){
        if (!Object.keys(record).includes("email")) {
            return ctx.addIssue({
                code: lib.z.ZodIssueCode.custom,
                message: "Missing email field for one or more records"
            });
        }
        if (!record.email) {
            return ctx.addIssue({
                code: lib.z.ZodIssueCode.custom,
                message: "Email field is empty for one or more records"
            });
        }
    }
    // check for duplicate emails
    const emails = data.map((record)=>record.email);
    const emailSet = new Set(emails);
    if (emails.length !== emailSet.size) {
        return ctx.addIssue({
            code: lib.z.ZodIssueCode.custom,
            message: "Duplicate emails found in the records"
        });
    }
    // check for duplicate userIds if present
    const userIds = data.map((record)=>record.userId).filter(Boolean);
    if (userIds?.length > 0) {
        const userIdSet = new Set(userIds);
        if (userIds.length !== userIdSet.size) {
            return ctx.addIssue({
                code: lib.z.ZodIssueCode.custom,
                message: "Duplicate userIds found in the records"
            });
        }
    }
});
const contact_ZContactCSVAttributeMap = lib.z.record(lib.z.string(), lib.z.string()).superRefine((attributeMap, ctx)=>{
    const values = Object.values(attributeMap);
    if (new Set(values).size !== values.length) {
        return ctx.addIssue({
            code: lib.z.ZodIssueCode.custom,
            message: "Attribute map contains duplicate values"
        });
    }
});

// EXTERNAL MODULE: ./modules/ee/contacts/lib/utils.ts
var utils = __webpack_require__(414435);
;// ./modules/ee/contacts/lib/contacts.ts














const selectContact = {
    id: true,
    createdAt: true,
    updatedAt: true,
    environmentId: true,
    attributes: {
        select: {
            value: true,
            attributeKey: {
                select: {
                    key: true,
                    name: true
                }
            }
        }
    }
};
const selectContactAttribute = {
    value: true,
    attributeKey: {
        select: {
            key: true,
            name: true
        }
    }
};
const buildContactWhereClause = (environmentId, search)=>{
    const whereClause = {
        environmentId
    };
    if (search) {
        whereClause.OR = [
            {
                attributes: {
                    some: {
                        value: {
                            contains: search,
                            mode: "insensitive"
                        }
                    }
                }
            },
            {
                id: {
                    contains: search,
                    mode: "insensitive"
                }
            }
        ];
    }
    return whereClause;
};
const getContacts = (0,react.cache)((environmentId, offset, searchValue)=>(0,cache/* cache */.P)(async ()=>{
        (0,validate/* validateInputs */.C)([
            environmentId,
            common/* ZId */.i4
        ], [
            offset,
            common/* ZOptionalNumber */.Wo
        ], [
            searchValue,
            common/* ZOptionalString */.Ww
        ]);
        try {
            const contacts = await src/* prisma */.z.contact.findMany({
                where: buildContactWhereClause(environmentId, searchValue),
                select: selectContact,
                take: constants/* ITEMS_PER_PAGE */.re,
                skip: offset,
                orderBy: {
                    createdAt: "desc"
                }
            });
            return contacts.map((contact)=>(0,utils/* transformPrismaContact */.HZ)(contact));
        } catch (error) {
            if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
                throw new errors/* DatabaseError */.a$(error.message);
            }
            throw error;
        }
    }, [
        `getContacts-${environmentId}-${offset}-${searchValue ?? ""}`
    ], {
        tags: [
            contact/* contactCache */.f.tag.byEnvironmentId(environmentId)
        ]
    })());
const getContact = (0,react.cache)((contactId)=>(0,cache/* cache */.P)(async ()=>{
        (0,validate/* validateInputs */.C)([
            contactId,
            common/* ZId */.i4
        ]);
        try {
            return await src/* prisma */.z.contact.findUnique({
                where: {
                    id: contactId
                },
                select: selectContact
            });
        } catch (error) {
            if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
                throw new errors/* DatabaseError */.a$(error.message);
            }
            throw error;
        }
    }, [
        `getContact-${contactId}`
    ], {
        tags: [
            contact/* contactCache */.f.tag.byId(contactId)
        ]
    })());
const deleteContact = async (contactId)=>{
    validateInputs([
        contactId,
        ZId
    ]);
    try {
        const contact = await prisma.contact.delete({
            where: {
                id: contactId
            },
            select: selectContact
        });
        const contactUserId = contact.attributes.find((attr)=>attr.attributeKey.key === "userId")?.value;
        contactCache.revalidate({
            id: contact.id,
            environmentId: contact.environmentId,
            userId: contactUserId
        });
        return contact;
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            throw new DatabaseError(error.message);
        }
        throw error;
    }
};
const getContactAttributes = (0,react.cache)((contactId)=>(0,cache/* cache */.P)(async ()=>{
        (0,validate/* validateInputs */.C)([
            contactId,
            common/* ZId */.i4
        ]);
        try {
            const prismaAttributes = await src/* prisma */.z.contactAttribute.findMany({
                where: {
                    contactId
                },
                select: selectContactAttribute
            });
            // return convertPrismaContactAttributes(prismaAttributes);
            return prismaAttributes.reduce((acc, attr)=>{
                acc[attr.attributeKey.key] = attr.value;
                return acc;
            }, {});
        } catch (error) {
            if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
                throw new errors/* DatabaseError */.a$(error.message);
            }
            throw error;
        }
    }, [
        `getContactAttributes-${contactId}`
    ], {
        tags: [
            contact_attribute/* contactAttributeCache */.r.tag.byContactId(contactId)
        ]
    })());
const getContactAttributeKeys = (0,react.cache)((environmentId)=>(0,cache/* cache */.P)(async ()=>{
        return await src/* prisma */.z.contactAttributeKey.findMany({
            where: {
                environmentId
            }
        });
    }, [
        `getContactAttributeKeys-${environmentId}`
    ], {
        tags: [
            contact_attribute_key/* contactAttributeKeyCache */.E.tag.byEnvironmentId(environmentId)
        ]
    })());
const createContactsFromCSV = async (csvData, environmentId, duplicateContactsAction, attributeMap)=>{
    validateInputs([
        csvData,
        ZContactCSVUploadResponse
    ], [
        environmentId,
        ZId
    ], [
        duplicateContactsAction,
        ZContactCSVDuplicateAction
    ], [
        attributeMap,
        ZContactCSVAttributeMap
    ]);
    try {
        // Extract unique emails and userIds from CSV data
        const csvEmails = Array.from(new Set(csvData.map((r)=>r.email).filter(Boolean)));
        const csvUserIds = Array.from(new Set(csvData.map((r)=>r.userId).filter(Boolean)));
        // Fetch existing contacts by email
        const existingContactsByEmail = await prisma.contact.findMany({
            where: {
                environmentId,
                attributes: {
                    some: {
                        attributeKey: {
                            key: "email"
                        },
                        value: {
                            in: csvEmails
                        }
                    }
                }
            },
            select: {
                id: true,
                attributes: {
                    select: {
                        attributeKey: {
                            select: {
                                key: true,
                                id: true
                            }
                        },
                        value: true
                    }
                }
            }
        });
        // Map emails to existing contacts
        const emailToContactMap = new Map();
        existingContactsByEmail.forEach((contact)=>{
            const emailAttr = contact.attributes.find((attr)=>attr.attributeKey.key === "email");
            if (emailAttr) {
                emailToContactMap.set(emailAttr.value, contact);
            }
        });
        // Check for duplicate userIds
        const existingUserIds = await prisma.contactAttribute.findMany({
            where: {
                attributeKey: {
                    key: "userId",
                    environmentId
                },
                value: {
                    in: csvUserIds
                }
            },
            select: {
                value: true,
                contactId: true
            }
        });
        // Fetch existing attribute keys and cache them
        const existingAttributeKeys = await prisma.contactAttributeKey.findMany({
            where: {
                environmentId
            },
            select: {
                key: true,
                id: true
            }
        });
        const attributeKeyMap = new Map();
        existingAttributeKeys.forEach((attrKey)=>{
            attributeKeyMap.set(attrKey.key, attrKey.id);
        });
        // Identify missing attribute keys
        const csvKeys = new Set();
        csvData.forEach((record)=>{
            Object.keys(record).forEach((key)=>csvKeys.add(key));
        });
        const missingKeys = Array.from(csvKeys).filter((key)=>!attributeKeyMap.has(key));
        // Create missing attribute keys
        if (missingKeys.length > 0) {
            await prisma.contactAttributeKey.createMany({
                data: missingKeys.map((key)=>({
                        key,
                        name: key,
                        environmentId
                    })),
                skipDuplicates: true
            });
            // Fetch and update the attributeKeyMap with new keys
            const newAttributeKeys = await prisma.contactAttributeKey.findMany({
                where: {
                    key: {
                        in: missingKeys
                    },
                    environmentId
                },
                select: {
                    key: true,
                    id: true
                }
            });
            newAttributeKeys.forEach((attrKey)=>{
                attributeKeyMap.set(attrKey.key, attrKey.id);
            });
        }
        const createdContacts = [];
        // Process contacts in parallel
        const contactPromises = csvData.map(async (record)=>{
            // Skip records without email
            if (!record.email) {
                throw new ValidationError("Email is required for all contacts");
            }
            const existingContact = emailToContactMap.get(record.email);
            if (existingContact) {
                // Handle duplicates based on duplicateContactsAction
                switch(duplicateContactsAction){
                    case "skip":
                        return null;
                    case "update":
                        {
                            // if the record has a userId, check if it already exists
                            const existingUserId = existingUserIds.find((attr)=>attr.value === record.userId && attr.contactId !== existingContact.id);
                            let recordToProcess = {
                                ...record
                            };
                            if (existingUserId) {
                                const { userId, ...rest } = recordToProcess;
                                const existingContactUserId = existingContact.attributes.find((attr)=>attr.attributeKey.key === "userId")?.value;
                                recordToProcess = {
                                    ...rest,
                                    ...existingContactUserId && {
                                        userId: existingContactUserId
                                    }
                                };
                            }
                            const attributesToUpsert = Object.entries(recordToProcess).map(([key, value])=>({
                                    where: {
                                        contactId_attributeKeyId: {
                                            contactId: existingContact.id,
                                            attributeKeyId: attributeKeyMap.get(key)
                                        }
                                    },
                                    update: {
                                        value
                                    },
                                    create: {
                                        attributeKeyId: attributeKeyMap.get(key),
                                        value
                                    }
                                }));
                            // Update contact with upserted attributes
                            const updatedContact = prisma.contact.update({
                                where: {
                                    id: existingContact.id
                                },
                                data: {
                                    attributes: {
                                        // @ts-expect-error
                                        upsert: attributesToUpsert
                                    }
                                },
                                include: {
                                    attributes: {
                                        select: {
                                            attributeKey: {
                                                select: {
                                                    key: true
                                                }
                                            },
                                            value: true
                                        }
                                    }
                                }
                            });
                            return updatedContact;
                        }
                    case "overwrite":
                        {
                            // if the record has a userId, check if it already exists
                            const existingUserId = existingUserIds.find((attr)=>attr.value === record.userId && attr.contactId !== existingContact.id);
                            let recordToProcess = {
                                ...record
                            };
                            if (existingUserId) {
                                const { userId, ...rest } = recordToProcess;
                                const existingContactUserId = existingContact.attributes.find((attr)=>attr.attributeKey.key === "userId")?.value;
                                recordToProcess = {
                                    ...rest,
                                    ...existingContactUserId && {
                                        userId: existingContactUserId
                                    }
                                };
                            }
                            // Overwrite by deleting existing attributes and creating new ones
                            await prisma.contactAttribute.deleteMany({
                                where: {
                                    contactId: existingContact.id
                                }
                            });
                            const newAttributes = Object.entries(recordToProcess).map(([key, value])=>({
                                    attributeKey: {
                                        connect: {
                                            key_environmentId: {
                                                key,
                                                environmentId
                                            }
                                        }
                                    },
                                    value
                                }));
                            const updatedContact = prisma.contact.update({
                                where: {
                                    id: existingContact.id
                                },
                                data: {
                                    attributes: {
                                        create: newAttributes
                                    }
                                },
                                include: {
                                    attributes: {
                                        select: {
                                            attributeKey: {
                                                select: {
                                                    key: true
                                                }
                                            },
                                            value: true
                                        }
                                    }
                                }
                            });
                            return updatedContact;
                        }
                }
            } else {
                // Create new contact
                const newAttributes = Object.entries(record).map(([key, value])=>({
                        attributeKey: {
                            connect: {
                                key_environmentId: {
                                    key,
                                    environmentId
                                }
                            }
                        },
                        value
                    }));
                const newContact = prisma.contact.create({
                    data: {
                        environmentId,
                        attributes: {
                            create: newAttributes
                        }
                    },
                    include: {
                        attributes: {
                            select: {
                                attributeKey: {
                                    select: {
                                        key: true
                                    }
                                },
                                value: true
                            }
                        }
                    }
                });
                return newContact;
            }
        });
        const results = await Promise.all(contactPromises);
        const createdContactsFiltered = results.filter((contact)=>contact !== null);
        createdContacts.push(...createdContactsFiltered);
        contactCache.revalidate({
            environmentId
        });
        for (const contact of createdContactsFiltered){
            contactCache.revalidate({
                id: contact.id
            });
        }
        contactAttributeKeyCache.revalidate({
            environmentId
        });
        return createdContacts;
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            throw new DatabaseError(error.message);
        }
        throw error;
    }
};


/***/ }),

/***/ 414435:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HZ: () => (/* binding */ transformPrismaContact),
/* harmony export */   Sl: () => (/* binding */ getContactIdentifier)
/* harmony export */ });
/* unused harmony export convertPrismaContactAttributes */
const getContactIdentifier = (contactAttributes)=>{
    return contactAttributes?.email ?? contactAttributes?.userId ?? "";
};
const convertPrismaContactAttributes = (prismaAttributes)=>{
    return prismaAttributes.reduce((acc, attr)=>{
        acc[attr.attributeKey.key] = {
            name: attr.attributeKey.name,
            value: attr.value
        };
        return acc;
    }, {});
};
const transformPrismaContact = (person)=>{
    const attributes = person.attributes.reduce((acc, attr)=>{
        acc[attr.attributeKey.key] = attr.value;
        return acc;
    }, {});
    return {
        id: person.id,
        attributes,
        environmentId: person.environmentId,
        createdAt: new Date(person.createdAt),
        updatedAt: new Date(person.updatedAt)
    };
};


/***/ }),

/***/ 596379:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   od: () => (/* binding */ getTeamPermissionFlags)
/* harmony export */ });
/* unused harmony exports TeamPermissionMapping, TeamRoleMapping, getTeamAccessFlags */
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(896330);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);

const TeamPermissionMapping = {
    [_prisma_client__WEBPACK_IMPORTED_MODULE_0__.ProjectTeamPermission.read]: "Read",
    [_prisma_client__WEBPACK_IMPORTED_MODULE_0__.ProjectTeamPermission.readWrite]: "Read & write",
    [_prisma_client__WEBPACK_IMPORTED_MODULE_0__.ProjectTeamPermission.manage]: "Manage"
};
const TeamRoleMapping = {
    [_prisma_client__WEBPACK_IMPORTED_MODULE_0__.TeamUserRole.admin]: "Team Admin",
    [_prisma_client__WEBPACK_IMPORTED_MODULE_0__.TeamUserRole.contributor]: "Contributor"
};
const getTeamAccessFlags = (role)=>{
    const isAdmin = role === TeamUserRole.admin;
    const isContributor = role === TeamUserRole.contributor;
    return {
        isAdmin,
        isContributor
    };
};
const getTeamPermissionFlags = (permissionLevel)=>{
    const hasReadAccess = permissionLevel === _prisma_client__WEBPACK_IMPORTED_MODULE_0__.ProjectTeamPermission.read;
    const hasReadWriteAccess = permissionLevel === _prisma_client__WEBPACK_IMPORTED_MODULE_0__.ProjectTeamPermission.readWrite;
    const hasManageAccess = permissionLevel === _prisma_client__WEBPACK_IMPORTED_MODULE_0__.ProjectTeamPermission.manage;
    return {
        hasReadAccess,
        hasReadWriteAccess,
        hasManageAccess
    };
};


/***/ }),

/***/ 746219:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cn: () => (/* binding */ cn)
/* harmony export */ });
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(966190);
/* harmony import */ var tailwind_merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(263798);


const cn = (...inputs)=>{
    return (0,tailwind_merge__WEBPACK_IMPORTED_MODULE_0__/* .twMerge */ .QP)((0,clsx__WEBPACK_IMPORTED_MODULE_1__/* .clsx */ .$)(inputs));
};


/***/ }),

/***/ 289463:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: () => (/* binding */ deleteContactAction)
/* harmony export */ });
/* harmony import */ var private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(308441);
/* harmony import */ var private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_0__);

const deleteContactAction = /*#__PURE__*/(0,private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_0__.createServerReference)("7f12c609da9913f184fbd147593babde9f9bde2e7d", private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_0__.callServer, undefined, private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_0__.findSourceMapURL, "deleteContactAction")

/***/ }),

/***/ 578661:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UC: () => (/* binding */ Content2),
/* harmony export */   ZL: () => (/* binding */ Portal),
/* harmony export */   bL: () => (/* binding */ Root2),
/* harmony export */   l9: () => (/* binding */ Trigger)
/* harmony export */ });
/* unused harmony exports Anchor, Arrow, Close, Popover, PopoverAnchor, PopoverArrow, PopoverClose, PopoverContent, PopoverPortal, PopoverTrigger, createPopoverScope */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(891616);
/* harmony import */ var _radix_ui_primitive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(763095);
/* harmony import */ var _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(730613);
/* harmony import */ var _radix_ui_react_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(176235);
/* harmony import */ var _radix_ui_react_dismissable_layer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(924166);
/* harmony import */ var _radix_ui_react_focus_guards__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(62949);
/* harmony import */ var _radix_ui_react_focus_scope__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(101125);
/* harmony import */ var _radix_ui_react_id__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(585925);
/* harmony import */ var _radix_ui_react_popper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(819778);
/* harmony import */ var _radix_ui_react_portal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(715318);
/* harmony import */ var _radix_ui_react_presence__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(602397);
/* harmony import */ var _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(832713);
/* harmony import */ var _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(189300);
/* harmony import */ var _radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(409689);
/* harmony import */ var aria_hidden__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(99362);
/* harmony import */ var react_remove_scroll__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(745974);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(642725);
/* __next_internal_client_entry_do_not_use__ Anchor,Arrow,Close,Content,Popover,PopoverAnchor,PopoverArrow,PopoverClose,PopoverContent,PopoverPortal,PopoverTrigger,Portal,Root,Trigger,createPopoverScope auto */ // packages/react/popover/src/Popover.tsx


















var POPOVER_NAME = "Popover";
var [createPopoverContext, createPopoverScope] = (0,_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_2__/* .createContextScope */ .A)(POPOVER_NAME, [
    _radix_ui_react_popper__WEBPACK_IMPORTED_MODULE_3__/* .createPopperScope */ .Bk
]);
var usePopperScope = (0,_radix_ui_react_popper__WEBPACK_IMPORTED_MODULE_3__/* .createPopperScope */ .Bk)();
var [PopoverProvider, usePopoverContext] = createPopoverContext(POPOVER_NAME);
var Popover = (props)=>{
    const { __scopePopover, children, open: openProp, defaultOpen, onOpenChange, modal = false } = props;
    const popperScope = usePopperScope(__scopePopover);
    const triggerRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    const [hasCustomAnchor, setHasCustomAnchor] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);
    const [open = false, setOpen] = (0,_radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_4__/* .useControllableState */ .i)({
        prop: openProp,
        defaultProp: defaultOpen,
        onChange: onOpenChange
    });
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_popper__WEBPACK_IMPORTED_MODULE_3__/* .Root */ .bL, {
        ...popperScope,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(PopoverProvider, {
            scope: __scopePopover,
            contentId: (0,_radix_ui_react_id__WEBPACK_IMPORTED_MODULE_5__/* .useId */ .B)(),
            triggerRef,
            open,
            onOpenChange: setOpen,
            onOpenToggle: react__WEBPACK_IMPORTED_MODULE_0__.useCallback(()=>setOpen((prevOpen)=>!prevOpen), [
                setOpen
            ]),
            hasCustomAnchor,
            onCustomAnchorAdd: react__WEBPACK_IMPORTED_MODULE_0__.useCallback(()=>setHasCustomAnchor(true), []),
            onCustomAnchorRemove: react__WEBPACK_IMPORTED_MODULE_0__.useCallback(()=>setHasCustomAnchor(false), []),
            modal,
            children
        })
    });
};
Popover.displayName = POPOVER_NAME;
var ANCHOR_NAME = "PopoverAnchor";
var PopoverAnchor = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
    const { __scopePopover, ...anchorProps } = props;
    const context = usePopoverContext(ANCHOR_NAME, __scopePopover);
    const popperScope = usePopperScope(__scopePopover);
    const { onCustomAnchorAdd, onCustomAnchorRemove } = context;
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{
        onCustomAnchorAdd();
        return ()=>onCustomAnchorRemove();
    }, [
        onCustomAnchorAdd,
        onCustomAnchorRemove
    ]);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_popper__WEBPACK_IMPORTED_MODULE_3__/* .Anchor */ .Mz, {
        ...popperScope,
        ...anchorProps,
        ref: forwardedRef
    });
});
PopoverAnchor.displayName = ANCHOR_NAME;
var TRIGGER_NAME = "PopoverTrigger";
var PopoverTrigger = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
    const { __scopePopover, ...triggerProps } = props;
    const context = usePopoverContext(TRIGGER_NAME, __scopePopover);
    const popperScope = usePopperScope(__scopePopover);
    const composedTriggerRef = (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_6__/* .useComposedRefs */ .s)(forwardedRef, context.triggerRef);
    const trigger = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_7__/* .Primitive */ .sG.button, {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": context.open,
        "aria-controls": context.contentId,
        "data-state": getState(context.open),
        ...triggerProps,
        ref: composedTriggerRef,
        onClick: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_8__/* .composeEventHandlers */ .m)(props.onClick, context.onOpenToggle)
    });
    return context.hasCustomAnchor ? trigger : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_popper__WEBPACK_IMPORTED_MODULE_3__/* .Anchor */ .Mz, {
        asChild: true,
        ...popperScope,
        children: trigger
    });
});
PopoverTrigger.displayName = TRIGGER_NAME;
var PORTAL_NAME = "PopoverPortal";
var [PortalProvider, usePortalContext] = createPopoverContext(PORTAL_NAME, {
    forceMount: void 0
});
var PopoverPortal = (props)=>{
    const { __scopePopover, forceMount, children, container } = props;
    const context = usePopoverContext(PORTAL_NAME, __scopePopover);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(PortalProvider, {
        scope: __scopePopover,
        forceMount,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_presence__WEBPACK_IMPORTED_MODULE_9__/* .Presence */ .C, {
            present: forceMount || context.open,
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_portal__WEBPACK_IMPORTED_MODULE_10__/* .Portal */ .Z, {
                asChild: true,
                container,
                children
            })
        })
    });
};
PopoverPortal.displayName = PORTAL_NAME;
var CONTENT_NAME = "PopoverContent";
var PopoverContent = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
    const portalContext = usePortalContext(CONTENT_NAME, props.__scopePopover);
    const { forceMount = portalContext.forceMount, ...contentProps } = props;
    const context = usePopoverContext(CONTENT_NAME, props.__scopePopover);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_presence__WEBPACK_IMPORTED_MODULE_9__/* .Presence */ .C, {
        present: forceMount || context.open,
        children: context.modal ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(PopoverContentModal, {
            ...contentProps,
            ref: forwardedRef
        }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(PopoverContentNonModal, {
            ...contentProps,
            ref: forwardedRef
        })
    });
});
PopoverContent.displayName = CONTENT_NAME;
var PopoverContentModal = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
    const context = usePopoverContext(CONTENT_NAME, props.__scopePopover);
    const contentRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    const composedRefs = (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_6__/* .useComposedRefs */ .s)(forwardedRef, contentRef);
    const isRightClickOutsideRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{
        const content = contentRef.current;
        if (content) return (0,aria_hidden__WEBPACK_IMPORTED_MODULE_11__/* .hideOthers */ .Eq)(content);
    }, []);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_remove_scroll__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
        as: _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_13__/* .Slot */ .DX,
        allowPinchZoom: true,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(PopoverContentImpl, {
            ...props,
            ref: composedRefs,
            trapFocus: context.open,
            disableOutsidePointerEvents: true,
            onCloseAutoFocus: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_8__/* .composeEventHandlers */ .m)(props.onCloseAutoFocus, (event)=>{
                event.preventDefault();
                if (!isRightClickOutsideRef.current) context.triggerRef.current?.focus();
            }),
            onPointerDownOutside: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_8__/* .composeEventHandlers */ .m)(props.onPointerDownOutside, (event)=>{
                const originalEvent = event.detail.originalEvent;
                const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
                const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
                isRightClickOutsideRef.current = isRightClick;
            }, {
                checkForDefaultPrevented: false
            }),
            onFocusOutside: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_8__/* .composeEventHandlers */ .m)(props.onFocusOutside, (event)=>event.preventDefault(), {
                checkForDefaultPrevented: false
            })
        })
    });
});
var PopoverContentNonModal = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
    const context = usePopoverContext(CONTENT_NAME, props.__scopePopover);
    const hasInteractedOutsideRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
    const hasPointerDownOutsideRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(PopoverContentImpl, {
        ...props,
        ref: forwardedRef,
        trapFocus: false,
        disableOutsidePointerEvents: false,
        onCloseAutoFocus: (event)=>{
            props.onCloseAutoFocus?.(event);
            if (!event.defaultPrevented) {
                if (!hasInteractedOutsideRef.current) context.triggerRef.current?.focus();
                event.preventDefault();
            }
            hasInteractedOutsideRef.current = false;
            hasPointerDownOutsideRef.current = false;
        },
        onInteractOutside: (event)=>{
            props.onInteractOutside?.(event);
            if (!event.defaultPrevented) {
                hasInteractedOutsideRef.current = true;
                if (event.detail.originalEvent.type === "pointerdown") {
                    hasPointerDownOutsideRef.current = true;
                }
            }
            const target = event.target;
            const targetIsTrigger = context.triggerRef.current?.contains(target);
            if (targetIsTrigger) event.preventDefault();
            if (event.detail.originalEvent.type === "focusin" && hasPointerDownOutsideRef.current) {
                event.preventDefault();
            }
        }
    });
});
var PopoverContentImpl = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
    const { __scopePopover, trapFocus, onOpenAutoFocus, onCloseAutoFocus, disableOutsidePointerEvents, onEscapeKeyDown, onPointerDownOutside, onFocusOutside, onInteractOutside, ...contentProps } = props;
    const context = usePopoverContext(CONTENT_NAME, __scopePopover);
    const popperScope = usePopperScope(__scopePopover);
    (0,_radix_ui_react_focus_guards__WEBPACK_IMPORTED_MODULE_14__/* .useFocusGuards */ .Oh)();
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_focus_scope__WEBPACK_IMPORTED_MODULE_15__/* .FocusScope */ .n, {
        asChild: true,
        loop: true,
        trapped: trapFocus,
        onMountAutoFocus: onOpenAutoFocus,
        onUnmountAutoFocus: onCloseAutoFocus,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_dismissable_layer__WEBPACK_IMPORTED_MODULE_16__/* .DismissableLayer */ .qW, {
            asChild: true,
            disableOutsidePointerEvents,
            onInteractOutside,
            onEscapeKeyDown,
            onPointerDownOutside,
            onFocusOutside,
            onDismiss: ()=>context.onOpenChange(false),
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_popper__WEBPACK_IMPORTED_MODULE_3__/* .Content */ .UC, {
                "data-state": getState(context.open),
                role: "dialog",
                id: context.contentId,
                ...popperScope,
                ...contentProps,
                ref: forwardedRef,
                style: {
                    ...contentProps.style,
                    // re-namespace exposed content custom properties
                    ...{
                        "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
                        "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
                        "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
                        "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
                        "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
                    }
                }
            })
        })
    });
});
var CLOSE_NAME = "PopoverClose";
var PopoverClose = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
    const { __scopePopover, ...closeProps } = props;
    const context = usePopoverContext(CLOSE_NAME, __scopePopover);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_7__/* .Primitive */ .sG.button, {
        type: "button",
        ...closeProps,
        ref: forwardedRef,
        onClick: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_8__/* .composeEventHandlers */ .m)(props.onClick, ()=>context.onOpenChange(false))
    });
});
PopoverClose.displayName = CLOSE_NAME;
var ARROW_NAME = "PopoverArrow";
var PopoverArrow = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
    const { __scopePopover, ...arrowProps } = props;
    const popperScope = usePopperScope(__scopePopover);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_popper__WEBPACK_IMPORTED_MODULE_3__/* .Arrow */ .i3, {
        ...popperScope,
        ...arrowProps,
        ref: forwardedRef
    });
});
PopoverArrow.displayName = ARROW_NAME;
function getState(open) {
    return open ? "open" : "closed";
}
var Root2 = Popover;
var Anchor2 = (/* unused pure expression or super */ null && (PopoverAnchor));
var Trigger = PopoverTrigger;
var Portal = PopoverPortal;
var Content2 = PopoverContent;
var Close = (/* unused pure expression or super */ null && (PopoverClose));
var Arrow2 = (/* unused pure expression or super */ null && (PopoverArrow));
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