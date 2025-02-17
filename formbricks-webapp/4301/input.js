exports.id = 4301;
exports.ids = [4301];
exports.modules = {

/***/ 566300:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 921074));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 69427));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 483819));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 695353));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 300620));


/***/ }),

/***/ 24444:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 276386));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 101907));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 125963));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 489521));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 961060));


/***/ }),

/***/ 587032:
/***/ (() => {



/***/ }),

/***/ 580408:
/***/ (() => {



/***/ }),

/***/ 276386:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormbricksClient: () => (/* binding */ FormbricksClient)
/* harmony export */ });
/* harmony import */ var _app_lib_formbricks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(909013);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(470207);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(891616);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@formbricks/js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _formbricks_lib_env__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(168109);
/* __next_internal_client_entry_do_not_use__ FormbricksClient auto */ 




const FormbricksClient = ({ userId, email })=>{
    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.usePathname)();
    const searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useSearchParams)();
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (_app_lib_formbricks__WEBPACK_IMPORTED_MODULE_0__/* .formbricksEnabled */ .K && userId) {
            Object(function webpackMissingModule() { var e = new Error("Cannot find module '@formbricks/js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
                environmentId: _formbricks_lib_env__WEBPACK_IMPORTED_MODULE_4__/* .env */ ._.NEXT_PUBLIC_FORMBRICKS_ENVIRONMENT_ID || "",
                apiHost: _formbricks_lib_env__WEBPACK_IMPORTED_MODULE_4__/* .env */ ._.NEXT_PUBLIC_FORMBRICKS_API_HOST || "",
                userId
            });
            Object(function webpackMissingModule() { var e = new Error("Cannot find module '@formbricks/js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(email);
        }
    }, [
        userId,
        email
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (_app_lib_formbricks__WEBPACK_IMPORTED_MODULE_0__/* .formbricksEnabled */ .K) {
            Object(function webpackMissingModule() { var e = new Error("Cannot find module '@formbricks/js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        }
    }, [
        pathname,
        searchParams
    ]);
    return null;
};


/***/ }),

/***/ 101907:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IntercomClient: () => (/* binding */ IntercomClient)
/* harmony export */ });
/* harmony import */ var _intercom_messenger_js_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19061);
/* harmony import */ var _intercom_messenger_js_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_intercom_messenger_js_sdk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(455511);
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(891616);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _formbricks_lib_env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(168109);
/* __next_internal_client_entry_do_not_use__ IntercomClient auto */ 



const intercomAppId = _formbricks_lib_env__WEBPACK_IMPORTED_MODULE_3__/* .env */ ._.NEXT_PUBLIC_INTERCOM_APP_ID;
const IntercomClient = ({ user, intercomSecretKey, isIntercomConfigured })=>{
    const initializeIntercom = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>{
        let initParams = {};
        if (user) {
            const { id, name, email, createdAt } = user;
            const hash = (0,crypto__WEBPACK_IMPORTED_MODULE_1__.createHmac)("sha256", intercomSecretKey).update(user?.id).digest("hex");
            initParams = {
                user_id: id,
                user_hash: hash,
                name,
                email,
                created_at: createdAt ? Math.floor(createdAt.getTime() / 1000) : undefined
            };
        }
        _intercom_messenger_js_sdk__WEBPACK_IMPORTED_MODULE_0___default()({
            app_id: intercomAppId,
            ...initParams
        });
    }, [
        user,
        intercomSecretKey
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        try {
            if (isIntercomConfigured) initializeIntercom();
            return ()=>{
                // Shutdown Intercom when component unmounts
                if (false) {}
            };
        } catch (error) {
            console.error("Failed to initialize Intercom:", error);
        }
    }, [
        isIntercomConfigured,
        initializeIntercom
    ]);
    return null;
};


/***/ }),

/***/ 909013:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ formbricksEnabled),
/* harmony export */   X: () => (/* binding */ formbricksLogout)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@formbricks/js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _formbricks_lib_env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(168109);
/* harmony import */ var _formbricks_lib_localStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(563896);



const formbricksEnabled = typeof _formbricks_lib_env__WEBPACK_IMPORTED_MODULE_1__/* .env */ ._.NEXT_PUBLIC_FORMBRICKS_API_HOST && _formbricks_lib_env__WEBPACK_IMPORTED_MODULE_1__/* .env */ ._.NEXT_PUBLIC_FORMBRICKS_ENVIRONMENT_ID;
const formbricksLogout = async ()=>{
    const loggedInWith = localStorage.getItem(_formbricks_lib_localStorage__WEBPACK_IMPORTED_MODULE_2__/* .FORMBRICKS_LOGGED_IN_WITH_LS */ .b9);
    localStorage.clear();
    if (loggedInWith) {
        localStorage.setItem(_formbricks_lib_localStorage__WEBPACK_IMPORTED_MODULE_2__/* .FORMBRICKS_LOGGED_IN_WITH_LS */ .b9, loggedInWith);
    }
    return await Object(function webpackMissingModule() { var e = new Error("Cannot find module '@formbricks/js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
};


/***/ }),

/***/ 125963:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NoMobileOverlay: () => (/* binding */ NoMobileOverlay)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(642725);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tolgee_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(397674);
/* harmony import */ var _barrel_optimize_names_SmartphoneIcon_XIcon_lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(673766);
/* harmony import */ var _barrel_optimize_names_SmartphoneIcon_XIcon_lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(366947);
/* __next_internal_client_entry_do_not_use__ NoMobileOverlay auto */ 


const NoMobileOverlay = ()=>{
    const { t } = (0,_tolgee_react__WEBPACK_IMPORTED_MODULE_1__/* .useTranslate */ .WD)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "fixed inset-0 z-[9999] flex items-center justify-center sm:hidden",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                    className: "relative h-full w-full bg-slate-50"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "bg-slate-850 absolute mx-8 flex flex-col items-center gap-6 rounded-lg px-8 py-10 text-center",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_SmartphoneIcon_XIcon_lucide_react__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
                            className: "absolute top-14 h-8 w-8 text-slate-500"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_SmartphoneIcon_XIcon_lucide_react__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
                            className: "h-16 w-16 text-slate-500"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                            className: "text-slate-500",
                            children: t("common.mobile_overlay_text")
                        })
                    ]
                })
            ]
        })
    });
};


/***/ }),

/***/ 961060:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ToasterClient: () => (/* binding */ ToasterClient)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(642725);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(986090);
/* __next_internal_client_entry_do_not_use__ ToasterClient auto */ 

const ToasterClient = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_hot_toast__WEBPACK_IMPORTED_MODULE_1__.Toaster, {
        toastOptions: {
            success: {
                className: "formbricks__toast__success"
            },
            error: {
                className: "formbricks__toast__error"
            }
        }
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

/***/ 366947:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Smartphone)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58303);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Smartphone = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("Smartphone", [
    [
        "rect",
        {
            width: "14",
            height: "20",
            x: "5",
            y: "2",
            rx: "2",
            ry: "2",
            key: "1yt0o3"
        }
    ],
    [
        "path",
        {
            d: "M12 18h.01",
            key: "mhygvu"
        }
    ]
]);
 //# sourceMappingURL=smartphone.js.map


/***/ }),

/***/ 673766:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ X)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58303);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const X = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("X", [
    [
        "path",
        {
            d: "M18 6 6 18",
            key: "1bl5f8"
        }
    ],
    [
        "path",
        {
            d: "m6 6 12 12",
            key: "d8bk6v"
        }
    ]
]);
 //# sourceMappingURL=x.js.map


/***/ }),

/***/ 563896:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $w: () => (/* binding */ FORMBRICKS_SURVEYS_FILTERS_KEY_LS),
/* harmony export */   b9: () => (/* binding */ FORMBRICKS_LOGGED_IN_WITH_LS),
/* harmony export */   x9: () => (/* binding */ FORMBRICKS_ENVIRONMENT_ID_LS)
/* harmony export */ });
const FORMBRICKS_SURVEYS_FILTERS_KEY_LS = "formbricks-surveys-filters";
const FORMBRICKS_ENVIRONMENT_ID_LS = "formbricks-environment-id";
const FORMBRICKS_LOGGED_IN_WITH_LS = "formbricks-logged-in-with";


/***/ }),

/***/ 980737:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(891069);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_auth_lib_authOptions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(136015);
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(963302);
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(145796);
/* harmony import */ var _formbricks_lib_environment_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(266640);
/* harmony import */ var _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(470641);






const OnboardingLayout = async (props)=>{
    const params = await props.params;
    const { children } = props;
    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_2__.getServerSession)(_modules_auth_lib_authOptions__WEBPACK_IMPORTED_MODULE_1__/* .authOptions */ .N);
    if (!session || !session.user) {
        return (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.redirect)(`/auth/login`);
    }
    const isAuthorized = await (0,_formbricks_lib_environment_auth__WEBPACK_IMPORTED_MODULE_4__/* .hasUserEnvironmentAccess */ .n)(session.user.id, params.environmentId);
    if (!isAuthorized) {
        throw _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_5__/* .AuthorizationError */ .yi;
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "flex-1 bg-slate-50",
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OnboardingLayout);


/***/ }),

/***/ 921074:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormbricksClient: () => (/* binding */ FormbricksClient)
/* harmony export */ });
/* harmony import */ var react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(672771);
/* harmony import */ var react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_0__);

const FormbricksClient = (0,react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_0__.registerClientReference)(
function() { throw new Error("Attempted to call FormbricksClient() from the server but FormbricksClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component."); },
"/Users/kdy1/projects/formbricks/apps/web/app/(app)/components/FormbricksClient.tsx",
"FormbricksClient",
);

/***/ }),

/***/ 524160:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(891069);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_app_components_FormbricksClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(921074);
/* harmony import */ var _app_IntercomClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69427);
/* harmony import */ var _modules_auth_lib_authOptions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(136015);
/* harmony import */ var _modules_ui_components_no_mobile_overlay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(483819);
/* harmony import */ var _modules_ui_components_post_hog_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(695353);
/* harmony import */ var _modules_ui_components_toaster_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(300620);
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(963302);
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(922728);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _formbricks_lib_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(836919);
/* harmony import */ var _formbricks_lib_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(184511);











const AppLayout = async ({ children })=>{
    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_7__.getServerSession)(_modules_auth_lib_authOptions__WEBPACK_IMPORTED_MODULE_3__/* .authOptions */ .N);
    const user = session?.user?.id ? await (0,_formbricks_lib_user_service__WEBPACK_IMPORTED_MODULE_9__/* .getUser */ .wz)(session.user.id) : null;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_modules_ui_components_no_mobile_overlay__WEBPACK_IMPORTED_MODULE_4__.NoMobileOverlay, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react__WEBPACK_IMPORTED_MODULE_8__.Suspense, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_modules_ui_components_post_hog_client__WEBPACK_IMPORTED_MODULE_5__.PostHogPageview, {})
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_modules_ui_components_post_hog_client__WEBPACK_IMPORTED_MODULE_5__.PHProvider, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        user ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_app_components_FormbricksClient__WEBPACK_IMPORTED_MODULE_1__.FormbricksClient, {
                            userId: user.id,
                            email: user.email
                        }) : null,
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_IntercomClient__WEBPACK_IMPORTED_MODULE_2__.IntercomClient, {
                            isIntercomConfigured: _formbricks_lib_constants__WEBPACK_IMPORTED_MODULE_10__/* .IS_INTERCOM_CONFIGURED */ .Oz,
                            intercomSecretKey: _formbricks_lib_constants__WEBPACK_IMPORTED_MODULE_10__/* .INTERCOM_SECRET_KEY */ .rU,
                            user: user
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_modules_ui_components_toaster_client__WEBPACK_IMPORTED_MODULE_6__.ToasterClient, {}),
                        children
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppLayout);


/***/ }),

/***/ 69427:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IntercomClient: () => (/* binding */ IntercomClient)
/* harmony export */ });
/* harmony import */ var react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(672771);
/* harmony import */ var react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_0__);

const IntercomClient = (0,react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_0__.registerClientReference)(
function() { throw new Error("Attempted to call IntercomClient() from the server but IntercomClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component."); },
"/Users/kdy1/projects/formbricks/apps/web/app/IntercomClient.tsx",
"IntercomClient",
);

/***/ }),

/***/ 27287:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y: () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(891069);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(922728);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Header = ({ title, subtitle })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "space-y-8 text-center",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                className: "text-4xl font-medium text-slate-800",
                children: title
            }),
            subtitle && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                className: "text-slate-500",
                children: subtitle
            })
        ]
    });
};


/***/ }),

/***/ 483819:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NoMobileOverlay: () => (/* binding */ NoMobileOverlay)
/* harmony export */ });
/* harmony import */ var react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(672771);
/* harmony import */ var react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_0__);

const NoMobileOverlay = (0,react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_0__.registerClientReference)(
function() { throw new Error("Attempted to call NoMobileOverlay() from the server but NoMobileOverlay is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component."); },
"/Users/kdy1/projects/formbricks/apps/web/modules/ui/components/no-mobile-overlay/index.tsx",
"NoMobileOverlay",
);

/***/ }),

/***/ 300620:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ToasterClient: () => (/* binding */ ToasterClient)
/* harmony export */ });
/* harmony import */ var react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(672771);
/* harmony import */ var react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_0__);

const ToasterClient = (0,react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_0__.registerClientReference)(
function() { throw new Error("Attempted to call ToasterClient() from the server but ToasterClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component."); },
"/Users/kdy1/projects/formbricks/apps/web/modules/ui/components/toaster-client/index.tsx",
"ToasterClient",
);

/***/ }),

/***/ 438150:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ X)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(652793);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const X = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("X", [
    [
        "path",
        {
            d: "M18 6 6 18",
            key: "1bl5f8"
        }
    ],
    [
        "path",
        {
            d: "m6 6 12 12",
            key: "d8bk6v"
        }
    ]
]);
 //# sourceMappingURL=x.js.map


/***/ }),

/***/ 266640:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ hasUserEnvironmentAccess)
/* harmony export */ });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(896330);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _formbricks_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(527610);
/* harmony import */ var _formbricks_types_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(733735);
/* harmony import */ var _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(470641);
/* harmony import */ var _cache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(794356);
/* harmony import */ var _organization_cache__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(530190);
/* harmony import */ var _utils_validate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(860988);







const hasUserEnvironmentAccess = async (userId, environmentId)=>(0,_cache__WEBPACK_IMPORTED_MODULE_2__/* .cache */ .P)(async ()=>{
        (0,_utils_validate__WEBPACK_IMPORTED_MODULE_3__/* .validateInputs */ .C)([
            userId,
            _formbricks_types_common__WEBPACK_IMPORTED_MODULE_4__/* .ZId */ .i4
        ], [
            environmentId,
            _formbricks_types_common__WEBPACK_IMPORTED_MODULE_4__/* .ZId */ .i4
        ]);
        try {
            const orgMembership = await _formbricks_database__WEBPACK_IMPORTED_MODULE_1__/* .prisma */ .z.membership.findFirst({
                where: {
                    userId,
                    organization: {
                        projects: {
                            some: {
                                environments: {
                                    some: {
                                        id: environmentId
                                    }
                                }
                            }
                        }
                    }
                }
            });
            if (!orgMembership) return false;
            if (orgMembership.role === "owner" || orgMembership.role === "manager" || orgMembership.role === "billing") return true;
            const teamMembership = await _formbricks_database__WEBPACK_IMPORTED_MODULE_1__/* .prisma */ .z.teamUser.findFirst({
                where: {
                    userId,
                    team: {
                        projectTeams: {
                            some: {
                                project: {
                                    environments: {
                                        some: {
                                            id: environmentId
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            });
            if (teamMembership) return true;
            return false;
        } catch (error) {
            if (error instanceof _prisma_client__WEBPACK_IMPORTED_MODULE_0__.Prisma.PrismaClientKnownRequestError) {
                throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_5__/* .DatabaseError */ .a$(error.message);
            }
            throw error;
        }
    }, [
        `hasUserEnvironmentAccess-${userId}-${environmentId}`
    ], {
        tags: [
            _organization_cache__WEBPACK_IMPORTED_MODULE_6__/* .organizationCache */ .S.tag.byEnvironmentId(environmentId),
            _organization_cache__WEBPACK_IMPORTED_MODULE_6__/* .organizationCache */ .S.tag.byUserId(userId)
        ]
    })();


/***/ }),

/***/ 488734:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ environmentCache)
/* harmony export */ });
/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87863);
/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_cache__WEBPACK_IMPORTED_MODULE_0__);

const environmentCache = {
    tag: {
        byId (id) {
            return `environments-${id}`;
        },
        byProjectId (projectId) {
            return `projects-${projectId}-environments`;
        }
    },
    revalidate ({ id, projectId: projectId }) {
        if (id) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(this.tag.byId(id));
        }
        if (projectId) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(this.tag.byProjectId(projectId));
        }
    }
};


/***/ }),

/***/ 32135:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DL: () => (/* binding */ getEnvironments),
/* harmony export */   aN: () => (/* binding */ getFirstEnvironmentIdByUserId),
/* harmony export */   h8: () => (/* binding */ updateEnvironment),
/* harmony export */   uc: () => (/* binding */ getEnvironment)
/* harmony export */ });
/* unused harmony export createEnvironment */
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(896330);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(922728);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(545198);
/* harmony import */ var _formbricks_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(527610);
/* harmony import */ var _formbricks_types_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(733735);
/* harmony import */ var _formbricks_types_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(65405);
/* harmony import */ var _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(470641);
/* harmony import */ var _cache__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(794356);
/* harmony import */ var _organization_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(353687);
/* harmony import */ var _project_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(529987);
/* harmony import */ var _utils_validate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(860988);
/* harmony import */ var _cache__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(488734);














const getEnvironment = (0,react__WEBPACK_IMPORTED_MODULE_1__.cache)(async (environmentId)=>(0,_cache__WEBPACK_IMPORTED_MODULE_3__/* .cache */ .P)(async ()=>{
        (0,_utils_validate__WEBPACK_IMPORTED_MODULE_4__/* .validateInputs */ .C)([
            environmentId,
            _formbricks_types_common__WEBPACK_IMPORTED_MODULE_5__/* .ZId */ .i4
        ]);
        try {
            const environment = await _formbricks_database__WEBPACK_IMPORTED_MODULE_2__/* .prisma */ .z.environment.findUnique({
                where: {
                    id: environmentId
                }
            });
            return environment;
        } catch (error) {
            if (error instanceof _prisma_client__WEBPACK_IMPORTED_MODULE_0__.Prisma.PrismaClientKnownRequestError) {
                console.error(error);
                throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_6__/* .DatabaseError */ .a$(error.message);
            }
            throw error;
        }
    }, [
        `getEnvironment-${environmentId}`
    ], {
        tags: [
            _cache__WEBPACK_IMPORTED_MODULE_7__/* .environmentCache */ .e.tag.byId(environmentId)
        ]
    })());
const getEnvironments = (0,react__WEBPACK_IMPORTED_MODULE_1__.cache)(async (projectId)=>(0,_cache__WEBPACK_IMPORTED_MODULE_3__/* .cache */ .P)(async ()=>{
        (0,_utils_validate__WEBPACK_IMPORTED_MODULE_4__/* .validateInputs */ .C)([
            projectId,
            _formbricks_types_common__WEBPACK_IMPORTED_MODULE_5__/* .ZId */ .i4
        ]);
        let projectPrisma;
        try {
            projectPrisma = await _formbricks_database__WEBPACK_IMPORTED_MODULE_2__/* .prisma */ .z.project.findFirst({
                where: {
                    id: projectId
                },
                include: {
                    environments: true
                }
            });
            if (!projectPrisma) {
                throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_6__/* .ResourceNotFoundError */ .CE("Project", projectId);
            }
        } catch (error) {
            if (error instanceof _prisma_client__WEBPACK_IMPORTED_MODULE_0__.Prisma.PrismaClientKnownRequestError) {
                throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_6__/* .DatabaseError */ .a$(error.message);
            }
            throw error;
        }
        const environments = [];
        for (let environment of projectPrisma.environments){
            let targetEnvironment = _formbricks_types_environment__WEBPACK_IMPORTED_MODULE_8__/* .ZEnvironment */ .KJ.parse(environment);
            environments.push(targetEnvironment);
        }
        try {
            return environments;
        } catch (error) {
            if (error instanceof zod__WEBPACK_IMPORTED_MODULE_9__.z.ZodError) {
                console.error(JSON.stringify(error.errors, null, 2));
            }
            throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_6__/* .ValidationError */ .yI("Data validation of environments array failed");
        }
    }, [
        `getEnvironments-${projectId}`
    ], {
        tags: [
            _cache__WEBPACK_IMPORTED_MODULE_7__/* .environmentCache */ .e.tag.byProjectId(projectId)
        ]
    })());
const updateEnvironment = async (environmentId, data)=>{
    (0,_utils_validate__WEBPACK_IMPORTED_MODULE_4__/* .validateInputs */ .C)([
        environmentId,
        _formbricks_types_common__WEBPACK_IMPORTED_MODULE_5__/* .ZId */ .i4
    ], [
        data,
        _formbricks_types_environment__WEBPACK_IMPORTED_MODULE_8__/* .ZEnvironmentUpdateInput */ .fz.partial()
    ]);
    const newData = {
        ...data,
        updatedAt: new Date()
    };
    let updatedEnvironment;
    try {
        updatedEnvironment = await _formbricks_database__WEBPACK_IMPORTED_MODULE_2__/* .prisma */ .z.environment.update({
            where: {
                id: environmentId
            },
            data: newData
        });
        _cache__WEBPACK_IMPORTED_MODULE_7__/* .environmentCache */ .e.revalidate({
            id: environmentId,
            projectId: updatedEnvironment.projectId
        });
        return updatedEnvironment;
    } catch (error) {
        if (error instanceof _prisma_client__WEBPACK_IMPORTED_MODULE_0__.Prisma.PrismaClientKnownRequestError) {
            throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_6__/* .DatabaseError */ .a$(error.message);
        }
        throw error;
    }
};
const getFirstEnvironmentIdByUserId = async (userId)=>{
    try {
        const organizations = await (0,_organization_service__WEBPACK_IMPORTED_MODULE_10__/* .getOrganizationsByUserId */ .s8)(userId);
        if (organizations.length === 0) {
            return null;
        }
        const firstOrganization = organizations[0];
        const projects = await (0,_project_service__WEBPACK_IMPORTED_MODULE_11__/* .getUserProjects */ ._P)(userId, firstOrganization.id);
        if (projects.length === 0) {
            return null;
        }
        const firstProject = projects[0];
        const productionEnvironment = firstProject.environments.find((environment)=>environment.type === "production");
        if (!productionEnvironment) {
            return null;
        }
        return productionEnvironment.id;
    } catch (error) {
        throw error;
    }
};
const createEnvironment = async (projectId, environmentInput)=>{
    validateInputs([
        projectId,
        ZId
    ], [
        environmentInput,
        ZEnvironmentCreateInput
    ]);
    try {
        const environment = await prisma.environment.create({
            data: {
                type: environmentInput.type || "development",
                project: {
                    connect: {
                        id: projectId
                    }
                },
                appSetupCompleted: environmentInput.appSetupCompleted || false,
                actionClasses: {
                    create: [
                        {
                            name: "New Session",
                            description: "Gets fired when a new session is created",
                            type: "automatic"
                        }
                    ]
                },
                attributeKeys: {
                    create: [
                        {
                            key: "userId",
                            name: "User Id",
                            description: "The user id of a contact",
                            type: "default",
                            isUnique: true
                        },
                        {
                            key: "email",
                            name: "Email",
                            description: "The email of a contact",
                            type: "default",
                            isUnique: true
                        },
                        {
                            key: "firstName",
                            name: "First Name",
                            description: "Your contact's first name",
                            type: "default"
                        },
                        {
                            key: "lastName",
                            name: "Last Name",
                            description: "Your contact's last name",
                            type: "default"
                        }
                    ]
                }
            }
        });
        environmentCache.revalidate({
            id: environment.id,
            projectId: environment.projectId
        });
        await capturePosthogEnvironmentEvent(environment.id, "environment created", {
            environmentType: environment.type
        });
        return environment;
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            throw new DatabaseError(error.message);
        }
        throw error;
    }
};


/***/ })

};
;