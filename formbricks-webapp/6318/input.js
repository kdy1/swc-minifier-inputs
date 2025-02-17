exports.id = 6318;
exports.ids = [6318];
exports.modules = {

/***/ 738369:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 921074));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 776741));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 319053));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 795648));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 300620));


/***/ }),

/***/ 451521:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 276386));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 104061));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 300677));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 589128));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 961060));


/***/ }),

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

/***/ 589128:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DevEnvironmentBanner: () => (/* binding */ DevEnvironmentBanner)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(642725);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tolgee_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(397674);
/* __next_internal_client_entry_do_not_use__ DevEnvironmentBanner auto */ 

const DevEnvironmentBanner = ({ environment })=>{
    const { t } = (0,_tolgee_react__WEBPACK_IMPORTED_MODULE_1__/* .useTranslate */ .WD)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: environment.type === "development" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            className: "z-40 flex h-5 items-center justify-center bg-orange-800 text-center text-xs text-white",
            children: t("common.development_environment_banner")
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

/***/ 395781:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  V: () => (/* binding */ PreviewSurvey)
});

// UNUSED EXPORTS: getPlacementStyle

// EXTERNAL MODULE: ../../node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js
var react_jsx_runtime = __webpack_require__(642725);
// EXTERNAL MODULE: ./modules/ui/components/client-logo/index.tsx
var client_logo = __webpack_require__(653239);
// EXTERNAL MODULE: ./modules/ui/components/media-background/index.tsx
var media_background = __webpack_require__(956721);
// EXTERNAL MODULE: ./modules/ui/components/reset-progress-button/index.tsx
var reset_progress_button = __webpack_require__(443636);
// EXTERNAL MODULE: ./modules/ui/components/survey/index.tsx
var components_survey = __webpack_require__(965694);
// EXTERNAL MODULE: ../../node_modules/@tolgee/react/dist/tolgee-react.esm.js
var tolgee_react_esm = __webpack_require__(397674);
// EXTERNAL MODULE: ../../node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs + 263 modules
var proxy = __webpack_require__(106631);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/createLucideIcon.js + 3 modules
var createLucideIcon = __webpack_require__(58303);
;// ../../node_modules/lucide-react/dist/esm/icons/shrink.js
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Shrink = (0,createLucideIcon/* default */.A)("Shrink", [
    [
        "path",
        {
            d: "m15 15 6 6m-6-6v4.8m0-4.8h4.8",
            key: "17vawe"
        }
    ],
    [
        "path",
        {
            d: "M9 19.8V15m0 0H4.2M9 15l-6 6",
            key: "chjx8e"
        }
    ],
    [
        "path",
        {
            d: "M15 4.2V9m0 0h4.8M15 9l6-6",
            key: "lav6yq"
        }
    ],
    [
        "path",
        {
            d: "M9 4.2V9m0 0H4.2M9 9 3 3",
            key: "1pxi2q"
        }
    ]
]);
 //# sourceMappingURL=shrink.js.map

;// ../../node_modules/lucide-react/dist/esm/icons/expand.js
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Expand = (0,createLucideIcon/* default */.A)("Expand", [
    [
        "path",
        {
            d: "m21 21-6-6m6 6v-4.8m0 4.8h-4.8",
            key: "1c15vz"
        }
    ],
    [
        "path",
        {
            d: "M3 16.2V21m0 0h4.8M3 21l6-6",
            key: "1fsnz2"
        }
    ],
    [
        "path",
        {
            d: "M21 7.8V3m0 0h-4.8M21 3l-6 6",
            key: "hawz9i"
        }
    ],
    [
        "path",
        {
            d: "M3 7.8V3m0 0h4.8M3 3l6 6",
            key: "u9ee12"
        }
    ]
]);
 //# sourceMappingURL=expand.js.map

// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/smartphone.js
var smartphone = __webpack_require__(366947);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/monitor.js
var monitor = __webpack_require__(923136);
// EXTERNAL MODULE: ../../node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js
var react = __webpack_require__(891616);
// EXTERNAL MODULE: ./modules/ui/components/preview-survey/components/modal.tsx
var modal = __webpack_require__(320213);
;// ./modules/ui/components/preview-survey/components/tab-option.tsx

const TabOption = ({ active, icon, onClick })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
        className: `${active ? "rounded-full bg-slate-200" : ""} cursor-pointer`,
        onClick: onClick,
        children: icon
    });
};

;// ./modules/ui/components/preview-survey/index.tsx
/* __next_internal_client_entry_do_not_use__ PreviewSurvey,getPlacementStyle auto */ 










let surveyNameTemp;
const previewParentContainerVariant = {
    expanded: {
        position: "fixed",
        height: "100%",
        width: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        backdropFilter: "blur(15px)",
        left: 0,
        top: 0,
        zIndex: 1040,
        transition: {
            ease: "easeIn",
            duration: 0.001
        }
    },
    shrink: {
        display: "none",
        position: "fixed",
        backgroundColor: "rgba(0, 0, 0, 0.0)",
        backdropFilter: "blur(0px)",
        transition: {
            duration: 0
        },
        zIndex: -1
    }
};
let setQuestionId = (_)=>{};
const PreviewSurvey = ({ questionId, survey, previewType, project, environment, languageCode, onFileUpload })=>{
    const [isModalOpen, setIsModalOpen] = (0,react.useState)(true);
    const [isFullScreenPreview, setIsFullScreenPreview] = (0,react.useState)(false);
    const { t } = (0,tolgee_react_esm/* useTranslate */.WD)();
    const [appSetupCompleted, setAppSetupCompleted] = (0,react.useState)(false);
    const [previewMode, setPreviewMode] = (0,react.useState)("desktop");
    const [previewPosition, setPreviewPosition] = (0,react.useState)("relative");
    const ContentRef = (0,react.useRef)(null);
    const [shrink, setShrink] = (0,react.useState)(false);
    const { projectOverwrites } = survey || {};
    const previewScreenVariants = {
        expanded: {
            right: "5%",
            bottom: "10%",
            top: "12%",
            width: "40%",
            position: "fixed",
            height: "80%",
            zIndex: 1050,
            boxShadow: "0px 4px 5px 4px rgba(169, 169, 169, 0.25)",
            transition: {
                ease: "easeInOut",
                duration: shrink ? 0.3 : 0
            }
        },
        expanded_with_fixed_positioning: {
            zIndex: 1050,
            position: "fixed",
            top: "5%",
            right: "5%",
            bottom: "10%",
            width: "90%",
            height: "90%",
            transition: {
                ease: "easeOut",
                duration: 0.4
            }
        },
        shrink: {
            display: "relative",
            width: [
                "95%"
            ],
            height: [
                "95%"
            ]
        }
    };
    const { placement: surveyPlacement } = projectOverwrites || {};
    const { darkOverlay: surveyDarkOverlay } = projectOverwrites || {};
    const { clickOutsideClose: surveyClickOutsideClose } = projectOverwrites || {};
    const placement = surveyPlacement || project.placement;
    const darkOverlay = surveyDarkOverlay ?? project.darkOverlay;
    const clickOutsideClose = surveyClickOutsideClose ?? project.clickOutsideClose;
    const widgetSetupCompleted = appSetupCompleted;
    const styling = (0,react.useMemo)(()=>{
        // allow style overwrite is disabled from the project
        if (!project.styling.allowStyleOverwrite) {
            return project.styling;
        }
        // allow style overwrite is enabled from the project
        if (project.styling.allowStyleOverwrite) {
            // survey style overwrite is disabled
            if (!survey.styling?.overwriteThemeStyling) {
                return project.styling;
            }
            // survey style overwrite is enabled
            return survey.styling;
        }
        return project.styling;
    }, [
        project.styling,
        survey.styling
    ]);
    const updateQuestionId = (0,react.useCallback)((newQuestionId)=>{
        if (!newQuestionId || newQuestionId === "hidden" || newQuestionId === "multiLanguage" || newQuestionId.includes("fb-variables-")) return;
        if (newQuestionId === "start" && !survey.welcomeCard.enabled) return;
        setQuestionId(newQuestionId);
    }, [
        survey.welcomeCard.enabled
    ]);
    (0,react.useEffect)(()=>{
        if (questionId) {
            updateQuestionId(questionId);
        }
    }, [
        questionId,
        updateQuestionId
    ]);
    const onFinished = ()=>{
        // close modal if there are no questions left
        if (survey.type === "app" && survey.endings.length === 0) {
            setIsModalOpen(false);
            setTimeout(()=>{
                setQuestionId(survey.questions[0]?.id);
                setIsModalOpen(true);
            }, 500);
        }
    };
    // this useEffect is for refreshing the survey preview only if user is switching between templates on survey templates page and hence we are checking for survey.id === "someUniqeId1" which is a common Id for all templates
    (0,react.useEffect)(()=>{
        if (survey.name !== surveyNameTemp && survey.id === "someUniqueId1") {
            resetQuestionProgress();
            surveyNameTemp = survey.name;
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        survey
    ]);
    const resetQuestionProgress = ()=>{
        let storePreviewMode = previewMode;
        setPreviewMode("null");
        setTimeout(()=>{
            setPreviewMode(storePreviewMode);
        }, 10);
        setQuestionId(survey.welcomeCard.enabled ? "start" : survey?.questions[0]?.id);
    };
    (0,react.useEffect)(()=>{
        if (environment) {
            setAppSetupCompleted(environment.appSetupCompleted);
        }
    }, [
        environment
    ]);
    const handlePreviewModalClose = ()=>{
        setIsModalOpen(false);
        setTimeout(()=>{
            setIsModalOpen(true);
            resetQuestionProgress();
        }, 1000);
    };
    if (!previewType) {
        previewType = widgetSetupCompleted ? "modal" : "fullwidth";
        if (!questionId) {
            return /*#__PURE__*/ (0,react_jsx_runtime.jsx)(react_jsx_runtime.Fragment, {});
        }
    }
    const handlePreviewModeChange = (mode)=>{
        setPreviewMode(mode);
        requestAnimationFrame(()=>{
            if (questionId) {
                setQuestionId(questionId);
            }
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
        className: "flex h-full w-full flex-col items-center justify-items-center py-4",
        id: "survey-preview",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(proxy/* motion */.P.div, {
                variants: previewParentContainerVariant,
                animate: isFullScreenPreview ? "expanded" : "shrink"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(proxy/* motion */.P.div, {
                layout: true,
                variants: previewScreenVariants,
                animate: isFullScreenPreview ? previewPosition === "relative" ? "expanded" : "expanded_with_fixed_positioning" : "shrink",
                className: "relative flex h-full w-[95%] items-center justify-center rounded-lg border border-slate-300 bg-slate-200",
                children: [
                    previewMode === "mobile" && /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                                className: "absolute left-0 top-0 m-2 rounded bg-slate-100 px-2 py-1 text-xs text-slate-400",
                                children: "Preview"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                className: "absolute right-0 top-0 m-2",
                                children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(reset_progress_button/* ResetProgressButton */.$, {
                                    onClick: resetQuestionProgress
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(media_background/* MediaBackground */.p, {
                                survey: survey,
                                project: project,
                                ContentRef: ContentRef,
                                isMobilePreview: true,
                                children: previewType === "modal" ? /*#__PURE__*/ (0,react_jsx_runtime.jsx)(modal/* Modal */.a, {
                                    isOpen: isModalOpen,
                                    placement: placement,
                                    previewMode: "mobile",
                                    darkOverlay: darkOverlay,
                                    clickOutsideClose: clickOutsideClose,
                                    borderRadius: styling?.roundness ?? 8,
                                    background: styling?.cardBackgroundColor?.light,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_survey/* SurveyInline */.K, {
                                        survey: survey,
                                        isBrandingEnabled: project.inAppSurveyBranding,
                                        isRedirectDisabled: true,
                                        languageCode: languageCode,
                                        onFileUpload: onFileUpload,
                                        styling: styling,
                                        isCardBorderVisible: !styling.highlightBorderColor?.light,
                                        onClose: handlePreviewModalClose,
                                        getSetQuestionId: (f)=>{
                                            setQuestionId = f;
                                        },
                                        onFinished: onFinished
                                    })
                                }) : /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                    className: "flex h-full w-full flex-col justify-center px-1",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                            className: "absolute left-5 top-5",
                                            children: !styling.isLogoHidden && /*#__PURE__*/ (0,react_jsx_runtime.jsx)(client_logo/* ClientLogo */.L, {
                                                environmentId: environment.id,
                                                project: project,
                                                previewSurvey: true
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                            className: "z-10 w-full max-w-md rounded-lg border border-transparent",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_survey/* SurveyInline */.K, {
                                                survey: {
                                                    ...survey,
                                                    type: "link"
                                                },
                                                isBrandingEnabled: project.linkSurveyBranding,
                                                onFileUpload: onFileUpload,
                                                languageCode: languageCode,
                                                responseCount: 42,
                                                styling: styling,
                                                getSetQuestionId: (f)=>{
                                                    setQuestionId = f;
                                                }
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    previewMode === "desktop" && /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                        className: "flex h-full flex-1 flex-col",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                className: "flex h-8 w-full items-center rounded-t-lg bg-slate-100",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                        className: "ml-6 flex space-x-2",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                                className: "h-3 w-3 rounded-full bg-red-500"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                                className: "h-3 w-3 rounded-full bg-amber-500"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("button", {
                                                className: "h-3 w-3 cursor-pointer rounded-full bg-emerald-500",
                                                onClick: ()=>{
                                                    if (isFullScreenPreview) {
                                                        setShrink(true);
                                                        setPreviewPosition("relative");
                                                        setTimeout(()=>setIsFullScreenPreview(false), 300);
                                                    } else {
                                                        setShrink(false);
                                                        setIsFullScreenPreview(true);
                                                        setTimeout(()=>setPreviewPosition("fixed"), 300);
                                                    }
                                                },
                                                "aria-label": isFullScreenPreview ? "Shrink Preview" : "Expand Preview"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                        className: "ml-4 flex w-full justify-between font-mono text-sm text-slate-400",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                                                children: previewType === "modal" ? t("environments.surveys.edit.your_web_app") : t("common.preview")
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                                className: "flex items-center",
                                                children: [
                                                    isFullScreenPreview ? /*#__PURE__*/ (0,react_jsx_runtime.jsx)(Shrink, {
                                                        className: "mr-1 h-[22px] w-[22px] cursor-pointer rounded-md bg-white p-1 text-slate-500 hover:text-slate-700",
                                                        onClick: ()=>{
                                                            setShrink(true);
                                                            setPreviewPosition("relative");
                                                            setTimeout(()=>setIsFullScreenPreview(false), 300);
                                                        }
                                                    }) : /*#__PURE__*/ (0,react_jsx_runtime.jsx)(Expand, {
                                                        className: "mr-1 h-[22px] w-[22px] cursor-pointer rounded-md bg-white p-1 text-slate-500 hover:text-slate-700",
                                                        onClick: ()=>{
                                                            setShrink(false);
                                                            setIsFullScreenPreview(true);
                                                            setTimeout(()=>setPreviewPosition("fixed"), 300);
                                                        }
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(reset_progress_button/* ResetProgressButton */.$, {
                                                        onClick: resetQuestionProgress
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            previewType === "modal" ? /*#__PURE__*/ (0,react_jsx_runtime.jsx)(modal/* Modal */.a, {
                                isOpen: isModalOpen,
                                placement: placement,
                                clickOutsideClose: clickOutsideClose,
                                darkOverlay: darkOverlay,
                                previewMode: "desktop",
                                borderRadius: styling.roundness ?? 8,
                                background: styling.cardBackgroundColor?.light,
                                children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_survey/* SurveyInline */.K, {
                                    survey: survey,
                                    isBrandingEnabled: project.inAppSurveyBranding,
                                    isRedirectDisabled: true,
                                    languageCode: languageCode,
                                    onFileUpload: onFileUpload,
                                    styling: styling,
                                    isCardBorderVisible: !styling.highlightBorderColor?.light,
                                    onClose: handlePreviewModalClose,
                                    getSetQuestionId: (f)=>{
                                        setQuestionId = f;
                                    },
                                    onFinished: onFinished
                                })
                            }) : /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(media_background/* MediaBackground */.p, {
                                survey: survey,
                                project: project,
                                ContentRef: ContentRef,
                                isEditorView: true,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                        className: "absolute left-5 top-5",
                                        children: !styling.isLogoHidden && /*#__PURE__*/ (0,react_jsx_runtime.jsx)(client_logo/* ClientLogo */.L, {
                                            environmentId: environment.id,
                                            project: project,
                                            previewSurvey: true
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                        className: "z-0 w-full max-w-lg rounded-lg border-transparent",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_survey/* SurveyInline */.K, {
                                            survey: {
                                                ...survey,
                                                type: "link"
                                            },
                                            isBrandingEnabled: project.linkSurveyBranding,
                                            isRedirectDisabled: true,
                                            onFileUpload: onFileUpload,
                                            languageCode: languageCode,
                                            responseCount: 42,
                                            styling: styling,
                                            getSetQuestionId: (f)=>{
                                                setQuestionId = f;
                                            }
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                className: "mt-2 flex rounded-full border-2 border-slate-300 p-1",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(TabOption, {
                        active: previewMode === "mobile",
                        icon: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(smartphone/* default */.A, {
                            className: "mx-4 my-2 h-4 w-4 text-slate-700"
                        }),
                        onClick: ()=>handlePreviewModeChange("mobile")
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(TabOption, {
                        active: previewMode === "desktop",
                        icon: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(monitor/* default */.A, {
                            className: "mx-4 my-2 h-4 w-4 text-slate-700"
                        }),
                        onClick: ()=>handlePreviewModeChange("desktop")
                    })
                ]
            })
        ]
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

/***/ 681129:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ ArrowLeft)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58303);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const ArrowLeft = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("ArrowLeft", [
    [
        "path",
        {
            d: "m12 19-7-7 7-7",
            key: "1l729n"
        }
    ],
    [
        "path",
        {
            d: "M19 12H5",
            key: "x3x0zl"
        }
    ]
]);
 //# sourceMappingURL=arrow-left.js.map


/***/ }),

/***/ 923136:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Monitor)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58303);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Monitor = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("Monitor", [
    [
        "rect",
        {
            width: "20",
            height: "14",
            x: "2",
            y: "3",
            rx: "2",
            key: "48i651"
        }
    ],
    [
        "line",
        {
            x1: "8",
            x2: "16",
            y1: "21",
            y2: "21",
            key: "1svkeh"
        }
    ],
    [
        "line",
        {
            x1: "12",
            x2: "12",
            y1: "17",
            y2: "21",
            key: "vw1qmm"
        }
    ]
]);
 //# sourceMappingURL=monitor.js.map


/***/ }),

/***/ 111678:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Split)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58303);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Split = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("Split", [
    [
        "path",
        {
            d: "M16 3h5v5",
            key: "1806ms"
        }
    ],
    [
        "path",
        {
            d: "M8 3H3v5",
            key: "15dfkv"
        }
    ],
    [
        "path",
        {
            d: "M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3",
            key: "1qrqzj"
        }
    ],
    [
        "path",
        {
            d: "m15 9 6-6",
            key: "ko1vev"
        }
    ]
]);
 //# sourceMappingURL=split.js.map


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

/***/ 179182:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(891069);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_app_components_FormbricksClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(921074);
/* harmony import */ var _app_app_environments_environmentId_components_PosthogIdentify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(776741);
/* harmony import */ var _app_app_environments_environmentId_components_ResponseFilterContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(319053);
/* harmony import */ var _modules_auth_lib_authOptions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(136015);
/* harmony import */ var _modules_ui_components_dev_environment_banner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(795648);
/* harmony import */ var _modules_ui_components_toaster_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(300620);
/* harmony import */ var _tolgee_server__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(186184);
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(963302);
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(145796);
/* harmony import */ var _formbricks_lib_environment_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(266640);
/* harmony import */ var _formbricks_lib_environment_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(32135);
/* harmony import */ var _formbricks_lib_organization_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(353687);
/* harmony import */ var _formbricks_lib_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(184511);
/* harmony import */ var _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(470641);















const SurveyEditorEnvironmentLayout = async (props)=>{
    const params = await props.params;
    const { children } = props;
    const t = await (0,_tolgee_server__WEBPACK_IMPORTED_MODULE_7__/* .getTranslate */ .r)();
    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_8__.getServerSession)(_modules_auth_lib_authOptions__WEBPACK_IMPORTED_MODULE_4__/* .authOptions */ .N);
    if (!session || !session.user) {
        return (0,next_navigation__WEBPACK_IMPORTED_MODULE_9__.redirect)(`/auth/login`);
    }
    const user = await (0,_formbricks_lib_user_service__WEBPACK_IMPORTED_MODULE_10__/* .getUser */ .wz)(session.user.id);
    if (!user) {
        throw new Error(t("common.user_not_found"));
    }
    const hasAccess = await (0,_formbricks_lib_environment_auth__WEBPACK_IMPORTED_MODULE_11__/* .hasUserEnvironmentAccess */ .n)(session.user.id, params.environmentId);
    if (!hasAccess) {
        throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_12__/* .AuthorizationError */ .yi(t("common.not_authorized"));
    }
    const organization = await (0,_formbricks_lib_organization_service__WEBPACK_IMPORTED_MODULE_13__/* .getOrganizationByEnvironmentId */ .TK)(params.environmentId);
    if (!organization) {
        throw new Error(t("common.organization_not_found"));
    }
    const environment = await (0,_formbricks_lib_environment_service__WEBPACK_IMPORTED_MODULE_14__/* .getEnvironment */ .uc)(params.environmentId);
    if (!environment) {
        throw new Error(t("common.environment_not_found"));
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_app_app_environments_environmentId_components_ResponseFilterContext__WEBPACK_IMPORTED_MODULE_3__.ResponseFilterProvider, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_app_environments_environmentId_components_PosthogIdentify__WEBPACK_IMPORTED_MODULE_2__.PosthogIdentify, {
                    session: session,
                    user: user,
                    environmentId: params.environmentId,
                    organizationId: organization.id,
                    organizationName: organization.name,
                    organizationBilling: organization.billing
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_app_components_FormbricksClient__WEBPACK_IMPORTED_MODULE_1__.FormbricksClient, {
                    userId: user.id,
                    email: user.email
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_modules_ui_components_toaster_client__WEBPACK_IMPORTED_MODULE_6__.ToasterClient, {}),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex h-screen flex-col",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_modules_ui_components_dev_environment_banner__WEBPACK_IMPORTED_MODULE_5__.DevEnvironmentBanner, {
                            environment: environment
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                            className: "h-full overflow-y-auto bg-slate-50",
                            children: children
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SurveyEditorEnvironmentLayout);


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

/***/ 441215:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ teamCache)
/* harmony export */ });
/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87863);
/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_cache__WEBPACK_IMPORTED_MODULE_0__);

const teamCache = {
    tag: {
        byId (id) {
            return `team-${id}`;
        },
        byProjectId (projectId) {
            return `project-teams-${projectId}`;
        },
        byUserId (userId) {
            return `user-${userId}-teams`;
        },
        byOrganizationId (organizationId) {
            return `organization-${organizationId}-teams`;
        }
    },
    revalidate: ({ id, projectId, userId, organizationId })=>{
        if (id) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(teamCache.tag.byId(id));
        }
        if (projectId) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(teamCache.tag.byProjectId(projectId));
        }
        if (userId) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(teamCache.tag.byUserId(userId));
        }
        if (organizationId) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(teamCache.tag.byOrganizationId(organizationId));
        }
    }
};


/***/ }),

/***/ 389846:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ getProjectPermissionByUserId)
/* harmony export */ });
/* unused harmony export getTeamRoleByTeamIdUserId */
/* harmony import */ var _lib_cache_team__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(441215);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(896330);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(922728);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _formbricks_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(527610);
/* harmony import */ var _formbricks_lib_cache__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(794356);
/* harmony import */ var _formbricks_lib_membership_cache__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(823609);
/* harmony import */ var _formbricks_lib_utils_validate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(860988);
/* harmony import */ var _formbricks_types_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(733735);
/* harmony import */ var _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(470641);










const getProjectPermissionByUserId = (0,react__WEBPACK_IMPORTED_MODULE_2__.cache)(async (userId, projectId)=>(0,_formbricks_lib_cache__WEBPACK_IMPORTED_MODULE_4__/* .cache */ .P)(async ()=>{
        (0,_formbricks_lib_utils_validate__WEBPACK_IMPORTED_MODULE_5__/* .validateInputs */ .C)([
            userId,
            _formbricks_types_common__WEBPACK_IMPORTED_MODULE_6__/* .ZString */ .eI
        ], [
            projectId,
            _formbricks_types_common__WEBPACK_IMPORTED_MODULE_6__/* .ZString */ .eI
        ]);
        try {
            const projectMemberships = await _formbricks_database__WEBPACK_IMPORTED_MODULE_3__/* .prisma */ .z.projectTeam.findMany({
                where: {
                    projectId,
                    team: {
                        teamUsers: {
                            some: {
                                userId
                            }
                        }
                    }
                }
            });
            if (!projectMemberships) return null;
            let highestPermission = null;
            for (const membership of projectMemberships){
                if (membership.permission === "manage") {
                    highestPermission = "manage";
                } else if (membership.permission === "readWrite" && highestPermission !== "manage") {
                    highestPermission = "readWrite";
                } else if (membership.permission === "read" && highestPermission !== "manage" && highestPermission !== "readWrite") {
                    highestPermission = "read";
                }
            }
            return highestPermission;
        } catch (error) {
            if (error instanceof _prisma_client__WEBPACK_IMPORTED_MODULE_1__.Prisma.PrismaClientKnownRequestError) {
                console.error(error);
                throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_7__/* .DatabaseError */ .a$(error.message);
            }
            throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_7__/* .UnknownError */ .Bk("Error while fetching membership");
        }
    }, [
        `getProjectPermissionByUserId-${userId}-${projectId}`
    ], {
        tags: [
            _lib_cache_team__WEBPACK_IMPORTED_MODULE_0__/* .teamCache */ .g.tag.byUserId(userId),
            _lib_cache_team__WEBPACK_IMPORTED_MODULE_0__/* .teamCache */ .g.tag.byProjectId(projectId)
        ]
    })());
const getTeamRoleByTeamIdUserId = (0,react__WEBPACK_IMPORTED_MODULE_2__.cache)(async (teamId, userId)=>(0,_formbricks_lib_cache__WEBPACK_IMPORTED_MODULE_4__/* .cache */ .P)(async ()=>{
        (0,_formbricks_lib_utils_validate__WEBPACK_IMPORTED_MODULE_5__/* .validateInputs */ .C)([
            teamId,
            _formbricks_types_common__WEBPACK_IMPORTED_MODULE_6__/* .ZId */ .i4
        ], [
            userId,
            _formbricks_types_common__WEBPACK_IMPORTED_MODULE_6__/* .ZId */ .i4
        ]);
        try {
            const teamUser = await _formbricks_database__WEBPACK_IMPORTED_MODULE_3__/* .prisma */ .z.teamUser.findUnique({
                where: {
                    teamId_userId: {
                        teamId,
                        userId
                    }
                }
            });
            if (!teamUser) {
                return null;
            }
            return teamUser.role;
        } catch (error) {
            if (error instanceof _prisma_client__WEBPACK_IMPORTED_MODULE_1__.Prisma.PrismaClientKnownRequestError) {
                throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_7__/* .DatabaseError */ .a$(error.message);
            }
            throw error;
        }
    }, [
        `getTeamMembershipByTeamIdUserId-${teamId}-${userId}`
    ], {
        tags: [
            _lib_cache_team__WEBPACK_IMPORTED_MODULE_0__/* .teamCache */ .g.tag.byId(teamId),
            _formbricks_lib_membership_cache__WEBPACK_IMPORTED_MODULE_8__/* .membershipCache */ .r.tag.byUserId(userId)
        ]
    })());


/***/ }),

/***/ 795648:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DevEnvironmentBanner: () => (/* binding */ DevEnvironmentBanner)
/* harmony export */ });
/* harmony import */ var react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(672771);
/* harmony import */ var react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_0__);

const DevEnvironmentBanner = (0,react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_0__.registerClientReference)(
function() { throw new Error("Attempted to call DevEnvironmentBanner() from the server but DevEnvironmentBanner is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component."); },
"/Users/kdy1/projects/formbricks/apps/web/modules/ui/components/dev-environment-banner/index.tsx",
"DevEnvironmentBanner",
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


/***/ })

};
;