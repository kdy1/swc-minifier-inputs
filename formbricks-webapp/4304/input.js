exports.id = 4304;
exports.ids = [4304];
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

/***/ 142912:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 776741));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 300620));


/***/ }),

/***/ 6464:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 104061));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 961060));


/***/ }),

/***/ 774101:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 697412));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 853648, 23));


/***/ }),

/***/ 264373:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 829884));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 36888, 23));


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

/***/ 104061:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PosthogIdentify: () => (/* binding */ PosthogIdentify)
/* harmony export */ });
/* harmony import */ var posthog_js_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(700645);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(891616);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _formbricks_lib_env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(168109);
/* __next_internal_client_entry_do_not_use__ PosthogIdentify auto */ 


const posthogEnabled = _formbricks_lib_env__WEBPACK_IMPORTED_MODULE_2__/* .env */ ._.NEXT_PUBLIC_POSTHOG_API_KEY && _formbricks_lib_env__WEBPACK_IMPORTED_MODULE_2__/* .env */ ._.NEXT_PUBLIC_POSTHOG_API_HOST;
const PosthogIdentify = ({ session, user, environmentId, organizationId, organizationName, organizationBilling })=>{
    const posthog = (0,posthog_js_react__WEBPACK_IMPORTED_MODULE_0__/* .usePostHog */ .sf)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (posthogEnabled && session.user && posthog) {
            posthog.identify(session.user.id, {
                name: user.name,
                email: user.email,
                role: user.role,
                objective: user.objective
            });
            if (environmentId) {
                posthog.group("environment", environmentId, {
                    name: environmentId
                });
            }
            if (organizationId) {
                posthog.group("organization", organizationId, {
                    name: organizationName,
                    plan: organizationBilling?.plan,
                    responseLimit: organizationBilling?.limits.monthly.responses,
                    miuLimit: organizationBilling?.limits.monthly.miu
                });
            }
        }
    }, [
        posthog,
        session.user,
        environmentId,
        organizationId,
        organizationName,
        organizationBilling,
        user.name,
        user.email,
        user.role,
        user.objective
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

/***/ 829884:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoadingSpinner: () => (/* binding */ LoadingSpinner)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(642725);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(983773);
/* __next_internal_client_entry_do_not_use__ LoadingSpinner auto */ 

const LoadingSpinner = ({ className = "h-6 w-6" })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "flex h-full w-full items-center justify-center",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
            className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_1__.cn)("m-2 animate-spin text-slate-700", className),
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", {
                    className: "opacity-25",
                    cx: "12",
                    cy: "12",
                    r: "10",
                    stroke: "currentColor",
                    strokeWidth: "4"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                    className: "opacity-75",
                    fill: "currentColor",
                    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                })
            ]
        })
    });
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

/***/ 983773:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cn: () => (/* binding */ cn)
/* harmony export */ });
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(553626);
/* harmony import */ var tailwind_merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(550186);


const cn = (...inputs)=>{
    return (0,tailwind_merge__WEBPACK_IMPORTED_MODULE_0__/* .twMerge */ .QP)((0,clsx__WEBPACK_IMPORTED_MODULE_1__/* .clsx */ .$)(inputs));
};


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

/***/ 720017:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(891069);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_app_environments_environmentId_components_PosthogIdentify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(776741);
/* harmony import */ var _modules_auth_lib_authOptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(136015);
/* harmony import */ var _modules_ui_components_toaster_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(300620);
/* harmony import */ var _tolgee_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(186184);
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(963302);
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(145796);
/* harmony import */ var _formbricks_lib_organization_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(937440);
/* harmony import */ var _formbricks_lib_organization_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(353687);
/* harmony import */ var _formbricks_lib_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(184511);
/* harmony import */ var _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(470641);











const ProjectOnboardingLayout = async (props)=>{
    const params = await props.params;
    const { children } = props;
    const t = await (0,_tolgee_server__WEBPACK_IMPORTED_MODULE_4__/* .getTranslate */ .r)();
    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_5__.getServerSession)(_modules_auth_lib_authOptions__WEBPACK_IMPORTED_MODULE_2__/* .authOptions */ .N);
    if (!session || !session.user) {
        return (0,next_navigation__WEBPACK_IMPORTED_MODULE_6__.redirect)(`/auth/login`);
    }
    const user = await (0,_formbricks_lib_user_service__WEBPACK_IMPORTED_MODULE_7__/* .getUser */ .wz)(session.user.id);
    if (!user) {
        throw new Error(t("common.user_not_found"));
    }
    const isAuthorized = await (0,_formbricks_lib_organization_auth__WEBPACK_IMPORTED_MODULE_8__/* .canUserAccessOrganization */ .h)(session.user.id, params.organizationId);
    if (!isAuthorized) {
        throw _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_9__/* .AuthorizationError */ .yi;
    }
    const organization = await (0,_formbricks_lib_organization_service__WEBPACK_IMPORTED_MODULE_10__/* .getOrganization */ .SA)(params.organizationId);
    if (!organization) {
        throw new Error(t("common.organization_not_found"));
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex-1 bg-slate-50",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_app_environments_environmentId_components_PosthogIdentify__WEBPACK_IMPORTED_MODULE_1__.PosthogIdentify, {
                session: session,
                user: user,
                organizationId: organization.id,
                organizationName: organization.name,
                organizationBilling: organization.billing
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_modules_ui_components_toaster_client__WEBPACK_IMPORTED_MODULE_3__.ToasterClient, {}),
            children
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectOnboardingLayout);


/***/ }),

/***/ 473745:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(891069);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_auth_lib_authOptions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(136015);
/* harmony import */ var _modules_ee_license_check_lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(532077);
/* harmony import */ var _tolgee_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(186184);
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(963302);
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(145796);
/* harmony import */ var _formbricks_lib_membership_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(377968);
/* harmony import */ var _formbricks_lib_membership_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(159570);
/* harmony import */ var _formbricks_lib_organization_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(353687);
/* harmony import */ var _formbricks_lib_project_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(529987);










const OnboardingLayout = async (props)=>{
    const params = await props.params;
    const { children } = props;
    const t = await (0,_tolgee_server__WEBPACK_IMPORTED_MODULE_3__/* .getTranslate */ .r)();
    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_4__.getServerSession)(_modules_auth_lib_authOptions__WEBPACK_IMPORTED_MODULE_1__/* .authOptions */ .N);
    if (!session || !session.user) {
        return (0,next_navigation__WEBPACK_IMPORTED_MODULE_5__.redirect)(`/auth/login`);
    }
    const membership = await (0,_formbricks_lib_membership_service__WEBPACK_IMPORTED_MODULE_6__/* .getMembershipByUserIdOrganizationId */ .Y)(session.user.id, params.organizationId);
    const { isMember, isBilling } = (0,_formbricks_lib_membership_utils__WEBPACK_IMPORTED_MODULE_7__/* .getAccessFlags */ .c)(membership?.role);
    if (isMember || isBilling) return (0,next_navigation__WEBPACK_IMPORTED_MODULE_5__.notFound)();
    const organization = await (0,_formbricks_lib_organization_service__WEBPACK_IMPORTED_MODULE_8__/* .getOrganization */ .SA)(params.organizationId);
    if (!organization) {
        throw new Error(t("common.organization_not_found"));
    }
    const organizationProjectsLimit = await (0,_modules_ee_license_check_lib_utils__WEBPACK_IMPORTED_MODULE_2__/* .getOrganizationProjectsLimit */ .Df)(organization);
    const organizationProjectsCount = await (0,_formbricks_lib_project_service__WEBPACK_IMPORTED_MODULE_9__/* .getOrganizationProjectsCount */ .$v)(organization.id);
    if (organizationProjectsCount >= organizationProjectsLimit) {
        return (0,next_navigation__WEBPACK_IMPORTED_MODULE_5__.redirect)(`/`);
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OnboardingLayout);


/***/ }),

/***/ 250327:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  F: () => (/* binding */ OnboardingOptionsContainer)
});

// EXTERNAL MODULE: ../../node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-runtime.js
var react_jsx_runtime = __webpack_require__(891069);
// EXTERNAL MODULE: ./modules/ui/components/loading-spinner/index.tsx
var loading_spinner = __webpack_require__(697412);
// EXTERNAL MODULE: ../../node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js
var react = __webpack_require__(922728);
;// ./modules/ui/components/option-card/index.tsx



const sizeClasses = {
    sm: "p-4 rounded-lg w-60 shadow-md",
    md: "p-6 rounded-xl w-80  shadow-lg",
    lg: "p-8 rounded-2xl w-100 shadow-xl"
};
const OptionCard = ({ size, title, description, children, onSelect, loading, cssId })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
        className: "relative h-full",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                id: cssId,
                className: `flex cursor-pointer flex-col items-center justify-center border border-slate-200 bg-white transition-transform duration-200 hover:scale-[1.03] hover:border-slate-300 ${sizeClasses[size]}`,
                onClick: onSelect,
                role: "button",
                tabIndex: 0,
                children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                    className: "flex flex-col items-center space-y-4",
                    children: [
                        children,
                        /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                            className: "text-center",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                                    className: "text-lg font-medium text-slate-800",
                                    children: title
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                                    className: "text-sm text-slate-500",
                                    children: description
                                })
                            ]
                        })
                    ]
                })
            }),
            loading && /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                className: "absolute inset-0 flex items-center justify-center bg-slate-100/70",
                children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(loading_spinner.LoadingSpinner, {})
            })
        ]
    });
};

// EXTERNAL MODULE: ../../node_modules/next/dist/client/app-dir/link.js
var app_dir_link = __webpack_require__(853648);
var link_default = /*#__PURE__*/__webpack_require__.n(app_dir_link);
;// ./app/(app)/(onboarding)/organizations/components/OnboardingOptionsContainer.tsx



const OnboardingOptionsContainer = ({ options })=>{
    const getOptionCard = (option)=>{
        const Icon = option.icon;
        return /*#__PURE__*/ (0,react_jsx_runtime.jsx)(OptionCard, {
            size: "md",
            title: option.title,
            onSelect: option.onClick,
            description: option.description,
            loading: option.isLoading || false,
            children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                className: "flex flex-col items-center",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(Icon, {
                        className: "h-16 w-16 text-slate-600",
                        strokeWidth: 1
                    }),
                    option.iconText && /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                        className: "mt-4 w-fit rounded-xl bg-slate-200 px-4 text-sm text-slate-700",
                        children: option.iconText
                    })
                ]
            })
        }, option.title);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
        className: "flex w-full max-w-5xl flex-wrap justify-center gap-8 text-center",
        children: options.map((option)=>option.href ? /*#__PURE__*/ (0,react_jsx_runtime.jsx)((link_default()), {
                href: option.href,
                children: getOptionCard(option)
            }, option.title) : getOptionCard(option))
    });
};


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

/***/ 776741:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PosthogIdentify: () => (/* binding */ PosthogIdentify)
/* harmony export */ });
/* harmony import */ var react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(672771);
/* harmony import */ var react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_0__);

const PosthogIdentify = (0,react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_0__.registerClientReference)(
function() { throw new Error("Attempted to call PosthogIdentify() from the server but PosthogIdentify is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component."); },
"/Users/kdy1/projects/formbricks/apps/web/app/(app)/environments/[environmentId]/components/PosthogIdentify.tsx",
"PosthogIdentify",
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

/***/ 532077:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  AM: () => (/* binding */ getBiggerUploadFileSizePermission),
  Zd: () => (/* binding */ getEnterpriseLicense),
  KH: () => (/* binding */ getIsAIEnabled),
  dZ: () => (/* binding */ getIsContactsEnabled),
  pn: () => (/* binding */ getIsMultiOrgEnabled),
  PN: () => (/* binding */ getIsOrganizationAIReady),
  xT: () => (/* binding */ getIsSSOEnabled),
  LO: () => (/* binding */ getIsTwoFactorAuthEnabled),
  x: () => (/* binding */ getMultiLanguagePermission),
  Df: () => (/* binding */ getOrganizationProjectsLimit),
  rQ: () => (/* binding */ getRoleManagementPermission),
  nX: () => (/* binding */ getWhiteLabelPermission)
});

// UNUSED EXPORTS: fetchLicense, getLicenseFeatures, getRemoveBrandingPermission

// EXTERNAL MODULE: ../../node_modules/https-proxy-agent/dist/index.js
var dist = __webpack_require__(599069);
// EXTERNAL MODULE: ../../node_modules/next/dist/api/server.js
var server = __webpack_require__(861238);
// EXTERNAL MODULE: ./node_modules/node-fetch/src/index.js + 12 modules
var src = __webpack_require__(817762);
// EXTERNAL MODULE: ../../node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js
var react = __webpack_require__(922728);
// EXTERNAL MODULE: ../../packages/database/src/index.ts + 1 modules
var database_src = __webpack_require__(527610);
// EXTERNAL MODULE: ../../packages/lib/cache.ts
var cache = __webpack_require__(794356);
// EXTERNAL MODULE: ../../node_modules/next/cache.js
var next_cache = __webpack_require__(87863);
// EXTERNAL MODULE: ../../packages/lib/constants.ts
var constants = __webpack_require__(836919);
// EXTERNAL MODULE: ../../packages/lib/env.ts
var env = __webpack_require__(162437);
// EXTERNAL MODULE: external "crypto"
var external_crypto_ = __webpack_require__(455511);
var external_crypto_default = /*#__PURE__*/__webpack_require__.n(external_crypto_);
;// ../../packages/lib/hashString.ts

const hashString = (string)=>{
    return external_crypto_default().createHash("sha256").update(string).digest("hex");
};

;// ./modules/ee/license-check/lib/utils.ts










const hashedKey = constants/* ENTERPRISE_LICENSE_KEY */.an ? hashString(constants/* ENTERPRISE_LICENSE_KEY */.an) : undefined;
const PREVIOUS_RESULTS_CACHE_TAG_KEY = `getPreviousResult-${hashedKey}`;
// This function is used to get the previous result of the license check from the cache
// This might seem confusing at first since we only return the default value from this function,
// but since we are using a cache and the cache key is the same, the cache will return the previous result - so this function acts as a cache getter
const getPreviousResult = ()=>(0,cache/* cache */.P)(async ()=>({
            active: null,
            lastChecked: new Date(0),
            features: null
        }), [
        PREVIOUS_RESULTS_CACHE_TAG_KEY
    ], {
        tags: [
            PREVIOUS_RESULTS_CACHE_TAG_KEY
        ]
    })();
// This function is used to set the previous result of the license check to the cache so that we can use it in the next call
// Uses the same cache key as the getPreviousResult function
const setPreviousResult = async (previousResult)=>{
    const { lastChecked, active, features } = previousResult;
    await (0,cache/* cache */.P)(async ()=>({
            active,
            lastChecked,
            features
        }), [
        PREVIOUS_RESULTS_CACHE_TAG_KEY
    ], {
        tags: [
            PREVIOUS_RESULTS_CACHE_TAG_KEY
        ]
    })();
    (0,server.after)(()=>{
        (0,next_cache.revalidateTag)(PREVIOUS_RESULTS_CACHE_TAG_KEY);
    });
};
const fetchLicenseForE2ETesting = async ()=>{
    const currentTime = new Date();
    try {
        const previousResult = await getPreviousResult();
        if (previousResult.lastChecked.getTime() === new Date(0).getTime()) {
            // first call
            const newResult = {
                active: true,
                features: {
                    isMultiOrgEnabled: true,
                    twoFactorAuth: true,
                    sso: true,
                    contacts: true,
                    projects: 3,
                    whitelabel: true,
                    removeBranding: true,
                    ai: true
                },
                lastChecked: currentTime
            };
            await setPreviousResult(newResult);
            return newResult;
        } else if (currentTime.getTime() - previousResult.lastChecked.getTime() > 60 * 60 * 1000) {
            // Fail after 1 hour
            console.log("E2E_TESTING is enabled. Enterprise license was revoked after 1 hour.");
            return null;
        }
        return previousResult;
    } catch (error) {
        console.error("Error fetching license: ", error);
        return null;
    }
};
const getEnterpriseLicense = async ()=>{
    if (!constants/* ENTERPRISE_LICENSE_KEY */.an || constants/* ENTERPRISE_LICENSE_KEY */.an.length === 0) {
        return {
            active: false,
            features: null,
            lastChecked: new Date()
        };
    }
    if (constants/* E2E_TESTING */.oA) {
        const previousResult = await fetchLicenseForE2ETesting();
        return {
            active: previousResult?.active ?? false,
            features: previousResult ? previousResult.features : null,
            lastChecked: previousResult ? previousResult.lastChecked : new Date()
        };
    }
    // if the server responds with a boolean, we return it
    // if the server errors, we return null
    // null signifies an error
    const license = await fetchLicense();
    const isValid = license ? license.status === "active" : null;
    const threeDaysInMillis = 3 * 24 * 60 * 60 * 1000;
    const currentTime = new Date();
    const previousResult = await getPreviousResult();
    // Case: First time checking license and the server errors out
    if (previousResult.active === null) {
        if (isValid === null) {
            const newResult = {
                active: false,
                features: {
                    isMultiOrgEnabled: false,
                    projects: 3,
                    twoFactorAuth: false,
                    sso: false,
                    whitelabel: false,
                    removeBranding: false,
                    contacts: false,
                    ai: false
                },
                lastChecked: new Date()
            };
            await setPreviousResult(newResult);
            return newResult;
        }
    }
    if (isValid !== null && license) {
        const newResult = {
            active: isValid,
            features: license.features,
            lastChecked: new Date()
        };
        await setPreviousResult(newResult);
        return newResult;
    } else {
        // if result is undefined -> error
        // if the last check was less than 72 hours, return the previous value:
        const elapsedTime = currentTime.getTime() - previousResult.lastChecked.getTime();
        if (elapsedTime < threeDaysInMillis) {
            return {
                active: previousResult.active !== null ? previousResult.active : false,
                features: previousResult.features,
                lastChecked: previousResult.lastChecked,
                isPendingDowngrade: true
            };
        }
        // Log error only after 72 hours
        console.error("Error while checking license: The license check failed");
        return {
            active: false,
            features: null,
            lastChecked: previousResult.lastChecked,
            isPendingDowngrade: true
        };
    }
};
const getLicenseFeatures = async ()=>{
    const previousResult = await getPreviousResult();
    if (previousResult.features) {
        return previousResult.features;
    } else {
        const license = await fetchLicense();
        if (!license || !license.features) return null;
        return license.features;
    }
};
const fetchLicense = (0,react.cache)(async ()=>(0,cache/* cache */.P)(async ()=>{
        if (!env/* env */._.ENTERPRISE_LICENSE_KEY) return null;
        try {
            const now = new Date();
            const startOfYear = new Date(now.getFullYear(), 0, 1); // January 1st of the current year
            const endOfYear = new Date(now.getFullYear() + 1, 0, 0); // December 31st of the current year
            const responseCount = await database_src/* prisma */.z.response.count({
                where: {
                    createdAt: {
                        gte: startOfYear,
                        lt: endOfYear
                    }
                }
            });
            const proxyUrl = env/* env */._.HTTPS_PROXY || env/* env */._.HTTP_PROXY;
            const agent = proxyUrl ? new dist.HttpsProxyAgent(proxyUrl) : undefined;
            const res = await (0,src/* default */.Ay)("https://ee.formbricks.com/api/licenses/check", {
                body: JSON.stringify({
                    licenseKey: constants/* ENTERPRISE_LICENSE_KEY */.an,
                    usage: {
                        responseCount: responseCount
                    }
                }),
                headers: {
                    "Content-Type": "application/json"
                },
                method: "POST",
                agent
            });
            if (res.ok) {
                const responseJson = await res.json();
                return responseJson.data;
            }
            return null;
        } catch (error) {
            console.error("Error while checking license: ", error);
            return null;
        }
    }, [
        `fetchLicense-${hashedKey}`
    ], {
        revalidate: 60 * 60 * 24
    })());
const getRemoveBrandingPermission = async (organization)=>{
    if (E2E_TESTING) {
        const previousResult = await fetchLicenseForE2ETesting();
        return previousResult?.features?.removeBranding ?? false;
    }
    if (IS_FORMBRICKS_CLOUD && (await getEnterpriseLicense()).active) {
        return organization.billing.plan !== PROJECT_FEATURE_KEYS.FREE;
    } else {
        const licenseFeatures = await getLicenseFeatures();
        if (!licenseFeatures) return false;
        return licenseFeatures.removeBranding;
    }
};
const getWhiteLabelPermission = async (organization)=>{
    if (constants/* E2E_TESTING */.oA) {
        const previousResult = await fetchLicenseForE2ETesting();
        return previousResult?.features?.whitelabel ?? false;
    }
    if (constants/* IS_FORMBRICKS_CLOUD */.Si && (await getEnterpriseLicense()).active) {
        return organization.billing.plan !== constants/* PROJECT_FEATURE_KEYS */.mu.FREE;
    } else {
        const licenseFeatures = await getLicenseFeatures();
        if (!licenseFeatures) return false;
        return licenseFeatures.whitelabel;
    }
};
const getRoleManagementPermission = async (organization)=>{
    if (constants/* E2E_TESTING */.oA) {
        const previousResult = await fetchLicenseForE2ETesting();
        return previousResult && previousResult.active !== null ? previousResult.active : false;
    }
    if (constants/* IS_FORMBRICKS_CLOUD */.Si) return organization.billing.plan === constants/* PROJECT_FEATURE_KEYS */.mu.SCALE || organization.billing.plan === constants/* PROJECT_FEATURE_KEYS */.mu.ENTERPRISE;
    else if (!constants/* IS_FORMBRICKS_CLOUD */.Si) return (await getEnterpriseLicense()).active;
    return false;
};
const getBiggerUploadFileSizePermission = async (organization)=>{
    if (constants/* IS_FORMBRICKS_CLOUD */.Si) return organization.billing.plan !== constants/* PROJECT_FEATURE_KEYS */.mu.FREE;
    else if (!constants/* IS_FORMBRICKS_CLOUD */.Si) return (await getEnterpriseLicense()).active;
    return false;
};
const getMultiLanguagePermission = async (organization)=>{
    if (constants/* E2E_TESTING */.oA) {
        const previousResult = await fetchLicenseForE2ETesting();
        return previousResult && previousResult.active !== null ? previousResult.active : false;
    }
    if (constants/* IS_FORMBRICKS_CLOUD */.Si) return organization.billing.plan === constants/* PROJECT_FEATURE_KEYS */.mu.SCALE || organization.billing.plan === constants/* PROJECT_FEATURE_KEYS */.mu.ENTERPRISE;
    else if (!constants/* IS_FORMBRICKS_CLOUD */.Si) return (await getEnterpriseLicense()).active;
    return false;
};
const getIsMultiOrgEnabled = async ()=>{
    if (constants/* E2E_TESTING */.oA) {
        const previousResult = await fetchLicenseForE2ETesting();
        return previousResult && previousResult.features ? previousResult.features.isMultiOrgEnabled : false;
    }
    const licenseFeatures = await getLicenseFeatures();
    if (!licenseFeatures) return false;
    return licenseFeatures.isMultiOrgEnabled;
};
const getIsContactsEnabled = async ()=>{
    if (constants/* E2E_TESTING */.oA) {
        const previousResult = await fetchLicenseForE2ETesting();
        return previousResult && previousResult.features ? previousResult.features.contacts : false;
    }
    const licenseFeatures = await getLicenseFeatures();
    if (!licenseFeatures) return false;
    return licenseFeatures.contacts;
};
const getIsTwoFactorAuthEnabled = async ()=>{
    if (constants/* E2E_TESTING */.oA) {
        const previousResult = await fetchLicenseForE2ETesting();
        return previousResult && previousResult.features ? previousResult.features.twoFactorAuth : false;
    }
    const licenseFeatures = await getLicenseFeatures();
    if (!licenseFeatures) return false;
    return licenseFeatures.twoFactorAuth;
};
const getIsSSOEnabled = async ()=>{
    if (constants/* E2E_TESTING */.oA) {
        const previousResult = await fetchLicenseForE2ETesting();
        return previousResult && previousResult.features ? previousResult.features.sso : false;
    }
    const licenseFeatures = await getLicenseFeatures();
    if (!licenseFeatures) return false;
    return licenseFeatures.sso;
};
const getIsOrganizationAIReady = async (billingPlan)=>{
    if (!constants/* IS_AI_CONFIGURED */.T1) return false;
    if (constants/* E2E_TESTING */.oA) {
        const previousResult = await fetchLicenseForE2ETesting();
        return previousResult && previousResult.features ? previousResult.features.ai : false;
    }
    const license = await getEnterpriseLicense();
    if (constants/* IS_FORMBRICKS_CLOUD */.Si) {
        return Boolean(license.features?.ai && billingPlan !== constants/* PROJECT_FEATURE_KEYS */.mu.FREE);
    }
    return Boolean(license.features?.ai);
};
const getIsAIEnabled = async (organization)=>{
    return organization.isAIEnabled && await getIsOrganizationAIReady(organization.billing.plan);
};
const getOrganizationProjectsLimit = async (organization)=>{
    if (constants/* E2E_TESTING */.oA) {
        const previousResult = await fetchLicenseForE2ETesting();
        return previousResult && previousResult.features ? previousResult.features.projects ?? Infinity : 3;
    }
    let limit;
    if (constants/* IS_FORMBRICKS_CLOUD */.Si && (await getEnterpriseLicense()).active) {
        limit = organization.billing.limits.projects ?? Infinity;
    } else {
        const licenseFeatures = await getLicenseFeatures();
        if (!licenseFeatures) {
            limit = 3;
        } else {
            limit = licenseFeatures.projects ?? Infinity;
        }
    }
    return limit;
};


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

/***/ 697412:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoadingSpinner: () => (/* binding */ LoadingSpinner)
/* harmony export */ });
/* harmony import */ var react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(672771);
/* harmony import */ var react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_0__);

const LoadingSpinner = (0,react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_0__.registerClientReference)(
function() { throw new Error("Attempted to call LoadingSpinner() from the server but LoadingSpinner is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component."); },
"/Users/kdy1/projects/formbricks/apps/web/modules/ui/components/loading-spinner/index.tsx",
"LoadingSpinner",
);

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

/***/ 159570:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ getAccessFlags)
/* harmony export */ });
const getAccessFlags = (role)=>{
    const isOwner = role === "owner";
    const isManager = role === "manager";
    const isBilling = role === "billing";
    const isMember = role === "member";
    return {
        isManager,
        isOwner,
        isBilling,
        isMember
    };
};


/***/ }),

/***/ 937440:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ verifyUserRoleAccess),
/* harmony export */   h: () => (/* binding */ canUserAccessOrganization)
/* harmony export */ });
/* harmony import */ var _formbricks_types_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(733735);
/* harmony import */ var _cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(794356);
/* harmony import */ var _membership_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(377968);
/* harmony import */ var _membership_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(159570);
/* harmony import */ var _organization_cache__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(530190);
/* harmony import */ var _utils_validate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(860988);
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(353687);








const canUserAccessOrganization = (userId, organizationId)=>(0,_cache__WEBPACK_IMPORTED_MODULE_0__/* .cache */ .P)(async ()=>{
        (0,_utils_validate__WEBPACK_IMPORTED_MODULE_1__/* .validateInputs */ .C)([
            userId,
            _formbricks_types_common__WEBPACK_IMPORTED_MODULE_2__/* .ZId */ .i4
        ], [
            organizationId,
            _formbricks_types_common__WEBPACK_IMPORTED_MODULE_2__/* .ZId */ .i4
        ]);
        try {
            const userOrganizations = await (0,_service__WEBPACK_IMPORTED_MODULE_3__/* .getOrganizationsByUserId */ .s8)(userId);
            const givenOrganizationExists = userOrganizations.filter((organization)=>organization.id = organizationId);
            if (!givenOrganizationExists) {
                return false;
            }
            return true;
        } catch (error) {
            throw error;
        }
    }, [
        `canUserAccessOrganization-${userId}-${organizationId}`
    ], {
        tags: [
            _organization_cache__WEBPACK_IMPORTED_MODULE_4__/* .organizationCache */ .S.tag.byId(organizationId)
        ]
    })();
const verifyUserRoleAccess = async (organizationId, userId)=>{
    const accessObject = {
        hasCreateOrUpdateAccess: true,
        hasDeleteAccess: true,
        hasCreateOrUpdateMembersAccess: true,
        hasDeleteMembersAccess: true,
        hasBillingAccess: true
    };
    const currentUserMembership = await (0,_membership_service__WEBPACK_IMPORTED_MODULE_5__/* .getMembershipByUserIdOrganizationId */ .Y)(userId, organizationId);
    const { isOwner, isManager } = (0,_membership_utils__WEBPACK_IMPORTED_MODULE_6__/* .getAccessFlags */ .c)(currentUserMembership?.role);
    if (!isOwner) {
        accessObject.hasCreateOrUpdateAccess = false;
        accessObject.hasDeleteAccess = false;
        accessObject.hasCreateOrUpdateMembersAccess = false;
        accessObject.hasDeleteMembersAccess = false;
        accessObject.hasBillingAccess = false;
    }
    if (isManager) {
        accessObject.hasCreateOrUpdateMembersAccess = true;
        accessObject.hasDeleteMembersAccess = true;
        accessObject.hasBillingAccess = true;
    }
    return accessObject;
};


/***/ })

};
;