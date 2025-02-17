exports.id = 8310;
exports.ids = [8310];
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

/***/ 571404:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  X: () => (/* binding */ CreateOrganizationModal)
});

// EXTERNAL MODULE: ../../node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js
var react_jsx_runtime = __webpack_require__(642725);
// EXTERNAL MODULE: ./lib/utils/helper.ts
var helper = __webpack_require__(856763);
// EXTERNAL MODULE: ../../node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js
var action_client_wrapper = __webpack_require__(308441);
;// ../../node_modules/next/dist/build/webpack/loaders/next-flight-server-reference-proxy-loader.js?id=7ff27151c29d7402abd744ae983a2c25b016ccf26f&name=createOrganizationAction!

const createOrganizationAction = /*#__PURE__*/(0,action_client_wrapper.createServerReference)("7ff27151c29d7402abd744ae983a2c25b016ccf26f", action_client_wrapper.callServer, undefined, action_client_wrapper.findSourceMapURL, "createOrganizationAction")
// EXTERNAL MODULE: ./modules/ui/components/button/index.tsx
var components_button = __webpack_require__(248852);
// EXTERNAL MODULE: ./modules/ui/components/input/index.tsx
var input = __webpack_require__(438624);
// EXTERNAL MODULE: ./modules/ui/components/label/index.tsx
var label = __webpack_require__(61330);
// EXTERNAL MODULE: ./modules/ui/components/modal/index.tsx
var modal = __webpack_require__(383207);
// EXTERNAL MODULE: ../../node_modules/@tolgee/react/dist/tolgee-react.esm.js
var tolgee_react_esm = __webpack_require__(397674);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/circle-plus.js
var circle_plus = __webpack_require__(401633);
// EXTERNAL MODULE: ../../node_modules/next/dist/api/navigation.js
var navigation = __webpack_require__(470207);
// EXTERNAL MODULE: ../../node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js
var react = __webpack_require__(891616);
// EXTERNAL MODULE: ../../node_modules/react-hook-form/dist/index.esm.mjs
var index_esm = __webpack_require__(200667);
// EXTERNAL MODULE: ../../node_modules/react-hot-toast/dist/index.mjs + 1 modules
var dist = __webpack_require__(986090);
;// ./modules/organization/components/CreateOrganizationModal/index.tsx
/* __next_internal_client_entry_do_not_use__ CreateOrganizationModal auto */ 












const CreateOrganizationModal = ({ open, setOpen })=>{
    const { t } = (0,tolgee_react_esm/* useTranslate */.WD)();
    const router = (0,navigation.useRouter)();
    const [loading, setLoading] = (0,react.useState)(false);
    const [organizationName, setOrganizationName] = (0,react.useState)("");
    const isOrganizationNameValid = organizationName.trim() !== "";
    const { register, handleSubmit } = (0,index_esm/* useForm */.mN)();
    const submitOrganization = async (data)=>{
        data.name = data.name.trim();
        if (!data.name) return;
        setLoading(true);
        const createOrganizationResponse = await createOrganizationAction({
            organizationName: data.name
        });
        if (createOrganizationResponse?.data) {
            dist/* default */.Ay.success(t("environments.settings.general.organization_created_successfully"));
            router.push(`/organizations/${createOrganizationResponse.data.id}`);
            setOpen(false);
        } else {
            const errorMessage = (0,helper/* getFormattedErrorMessage */.g3)(createOrganizationResponse);
            dist/* default */.Ay.error(errorMessage);
            console.error(errorMessage);
        }
        setLoading(false);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime.jsx)(modal/* Modal */.a, {
        open: open,
        setOpen: setOpen,
        noPadding: true,
        closeOnOutsideClick: false,
        children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
            className: "flex h-full flex-col rounded-lg",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                    className: "rounded-t-lg bg-slate-100",
                    children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                        className: "flex items-center justify-between p-6",
                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                            className: "flex items-center space-x-2",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                    className: "mr-1.5 h-10 w-10 text-slate-500",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(circle_plus/* default */.A, {
                                        className: "h-5 w-5"
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                            className: "text-xl font-medium text-slate-700",
                                            children: t("environments.settings.general.create_new_organization")
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                            className: "text-sm text-slate-500",
                                            children: t("environments.settings.general.create_new_organization_description")
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("form", {
                    onSubmit: handleSubmit(submitOrganization),
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                            className: "flex w-full justify-between space-y-4 rounded-lg p-6",
                            children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                className: "grid w-full gap-x-2",
                                children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)(label/* Label */.J, {
                                            children: t("environments.settings.general.organization_name")
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)(input/* Input */.p, {
                                            autoFocus: true,
                                            placeholder: t("environments.settings.general.organization_name_placeholder"),
                                            ...register("name", {
                                                required: true
                                            }),
                                            value: organizationName,
                                            onChange: (e)=>setOrganizationName(e.target.value)
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                            className: "flex justify-end border-t border-slate-200 p-6",
                            children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                className: "flex space-x-2",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_button/* Button */.$, {
                                        type: "button",
                                        variant: "ghost",
                                        onClick: ()=>{
                                            setOpen(false);
                                        },
                                        children: t("common.cancel")
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_button/* Button */.$, {
                                        type: "submit",
                                        loading: loading,
                                        disabled: !isOrganizationNameValid,
                                        children: t("environments.settings.general.create_new_organization")
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    });
};


/***/ }),

/***/ 939514:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ ProfileAvatar),
/* harmony export */   X: () => (/* binding */ PersonAvatar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(642725);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var boring_avatars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(844333);
/* harmony import */ var boring_avatars__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(boring_avatars__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(134088);



const colors = [
    "#00C4B8",
    "#ccfbf1",
    "#334155"
];
const PersonAvatar = ({ personId })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((boring_avatars__WEBPACK_IMPORTED_MODULE_1___default()), {
        size: 40,
        name: personId,
        variant: "beam",
        colors: colors
    });
};
const ProfileAvatar = ({ userId, imageUrl })=>{
    if (imageUrl) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_image__WEBPACK_IMPORTED_MODULE_2__["default"], {
            src: imageUrl,
            width: "40",
            height: "40",
            className: "h-10 w-10 rounded-full object-cover",
            alt: "Avatar placeholder"
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((boring_avatars__WEBPACK_IMPORTED_MODULE_1___default()), {
        size: 40,
        name: userId,
        variant: "bauhaus",
        colors: colors
    });
};


/***/ }),

/***/ 556825:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Hr: () => (/* binding */ DropdownMenuRadioGroup),
/* harmony export */   Ht: () => (/* binding */ DropdownMenuRadioItem),
/* harmony export */   I: () => (/* binding */ DropdownMenuGroup),
/* harmony export */   M5: () => (/* binding */ DropdownMenuSubContent),
/* harmony export */   SQ: () => (/* binding */ DropdownMenuContent),
/* harmony export */   _2: () => (/* binding */ DropdownMenuItem),
/* harmony export */   dc: () => (/* binding */ DropdownMenuPortal),
/* harmony export */   lv: () => (/* binding */ DropdownMenuSub),
/* harmony export */   mB: () => (/* binding */ DropdownMenuSeparator),
/* harmony export */   nV: () => (/* binding */ DropdownMenuSubTrigger),
/* harmony export */   rI: () => (/* binding */ DropdownMenu),
/* harmony export */   ty: () => (/* binding */ DropdownMenuTrigger)
/* harmony export */ });
/* unused harmony exports DropdownMenuCheckboxItem, DropdownMenuLabel, DropdownMenuShortcut */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(642725);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(551892);
/* harmony import */ var _barrel_optimize_names_Check_ChevronRight_Circle_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(115758);
/* harmony import */ var _barrel_optimize_names_Check_ChevronRight_Circle_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(129170);
/* harmony import */ var _barrel_optimize_names_Check_ChevronRight_Circle_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(648968);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(891616);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(983773);
/* __next_internal_client_entry_do_not_use__ DropdownMenu,DropdownMenuCheckboxItem,DropdownMenuContent,DropdownMenuGroup,DropdownMenuItem,DropdownMenuLabel,DropdownMenuPortal,DropdownMenuRadioGroup,DropdownMenuRadioItem,DropdownMenuSeparator,DropdownMenuShortcut,DropdownMenuSub,DropdownMenuSubContent,DropdownMenuSubTrigger,DropdownMenuTrigger auto */ 




const DropdownMenu = _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__/* .Root */ .bL;
const DropdownMenuTrigger = _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__/* .Trigger */ .l9;
const DropdownMenuGroup = _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__/* .Group */ .YJ;
const DropdownMenuPortal = _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__/* .Portal */ .ZL;
const DropdownMenuSub = _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__/* .Sub */ .Pb;
const DropdownMenuRadioGroup = _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__/* .RadioGroup */ .z6;
const DropdownMenuSubTrigger = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, inset, children, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__/* .SubTrigger */ .ZP, {
        ref: ref,
        className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_3__.cn)("flex cursor-default select-none items-center rounded-lg px-2 py-1.5 text-sm font-medium text-slate-600 outline-none hover:text-slate-700 focus:bg-slate-100 data-[state=open]:bg-slate-100", inset && "pl-8", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Check_ChevronRight_Circle_lucide_react__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
                className: "ml-auto h-4 w-4"
            })
        ]
    }));
DropdownMenuSubTrigger.displayName = _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__/* .SubTrigger */ .ZP.displayName;
const DropdownMenuSubContent = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__/* .SubContent */ .G5, {
        ref: ref,
        className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_3__.cn)("animate-in slide-in-from-left-1 z-50 min-w-[8rem] overflow-hidden rounded-lg border border-slate-200 bg-white p-1 font-medium text-slate-600 shadow-sm hover:text-slate-700", className),
        ...props
    }));
DropdownMenuSubContent.displayName = _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__/* .SubContent */ .G5.displayName;
const DropdownMenuContent = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, sideOffset = 4, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__/* .Portal */ .ZL, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__/* .Content */ .UC, {
            ref: ref,
            sideOffset: sideOffset,
            className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_3__.cn)("animate-in data-[side=right]:slide-in-from-left-2 data-[side=left]:slide-in-from-right-2 data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] overflow-hidden rounded-lg border border-slate-200 bg-white p-1 font-medium text-slate-700 shadow-sm", className),
            ...props
        })
    }));
DropdownMenuContent.displayName = _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__/* .Content */ .UC.displayName;
const DropdownMenuItem = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, children, inset, icon, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__/* .Item */ .q7, {
        ref: ref,
        className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_3__.cn)("relative flex w-full cursor-pointer select-none items-center gap-x-2 rounded-lg px-2 py-1.5 text-sm font-medium outline-none focus:bg-slate-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50", inset && "pl-8", className),
        ...props,
        children: [
            icon,
            children
        ]
    }));
DropdownMenuItem.displayName = _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__/* .Item */ .q7.displayName;
const DropdownMenuCheckboxItem = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, children, checked, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__/* .CheckboxItem */ .H_, {
        ref: ref,
        className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_3__.cn)("relative flex cursor-default select-none items-center rounded-lg py-1.5 pl-8 pr-2 text-sm font-medium outline-none focus:bg-slate-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
        checked: checked,
        ...props,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__/* .ItemIndicator */ .VF, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Check_ChevronRight_Circle_lucide_react__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
                        className: "h-4 w-4"
                    })
                })
            }),
            children
        ]
    }));
DropdownMenuCheckboxItem.displayName = _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__/* .CheckboxItem */ .H_.displayName;
const DropdownMenuRadioItem = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, children, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__/* .RadioItem */ .hN, {
        ref: ref,
        className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_3__.cn)("relative flex cursor-default select-none items-center rounded-lg py-1.5 pl-8 pr-2 text-sm font-medium outline-none focus:bg-slate-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
        ...props,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__/* .ItemIndicator */ .VF, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Check_ChevronRight_Circle_lucide_react__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
                        className: "h-2 w-2 fill-current"
                    })
                })
            }),
            children
        ]
    }));
DropdownMenuRadioItem.displayName = _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__/* .RadioItem */ .hN.displayName;
const DropdownMenuLabel = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, inset, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__/* .Label */ .JU, {
        ref: ref,
        className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_3__.cn)("px-2 py-1.5 text-sm font-semibold text-slate-900", inset && "pl-8", className),
        ...props
    }));
DropdownMenuLabel.displayName = _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__/* .Label */ .JU.displayName;
const DropdownMenuSeparator = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__/* .Separator */ .wv, {
        ref: ref,
        className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_3__.cn)("-mx-1 my-1 h-px bg-slate-100", className),
        ...props
    }));
DropdownMenuSeparator.displayName = _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__/* .Separator */ .wv.displayName;
const DropdownMenuShortcut = ({ className, ...props })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
        className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_3__.cn)("ml-auto text-xs tracking-widest text-slate-500", className),
        ...props
    });
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";



/***/ }),

/***/ 438624:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ Input)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(642725);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(891616);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(983773);



const Input = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, isInvalid, ...props }, ref)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
        className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_2__.cn)("focus:border-brand-dark flex h-10 w-full rounded-md border border-slate-300 bg-transparent px-3 py-2 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-500 dark:text-slate-300", className, isInvalid && "border border-red-500 focus:border-red-500"),
        ref: ref,
        ...props
    });
});
Input.displayName = "Input";



/***/ }),

/***/ 61330:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: () => (/* binding */ Label)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(642725);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _radix_ui_react_label__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(446470);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(891616);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(983773);
/* __next_internal_client_entry_do_not_use__ Label auto */ 



const Label = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_label__WEBPACK_IMPORTED_MODULE_2__/* .Root */ .b, {
        ref: ref,
        className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_3__.cn)("text-sm font-medium leading-none text-slate-800 disabled:opacity-70 peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-slate-400 dark:peer-disabled:opacity-70", className),
        ...props
    }));
Label.displayName = _radix_ui_react_label__WEBPACK_IMPORTED_MODULE_2__/* .Root */ .b.displayName;



/***/ }),

/***/ 383207:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ Modal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(642725);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(374560);
/* harmony import */ var _barrel_optimize_names_XIcon_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(673766);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(891616);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(983773);





const DialogPortal = _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__/* .Portal */ .ZL;
const DialogOverlay = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, blur, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__/* .Overlay */ .hJ, {
        ref: ref,
        className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_3__.cn)(blur && "backdrop-blur-md", "fixed inset-0 z-50 bg-slate-500 bg-opacity-30", "data-[state='closed']:animate-fadeOut data-[state='open']:animate-fadeIn"),
        ...props
    }));
DialogOverlay.displayName = _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__/* .Overlay */ .hJ.displayName;
const sizeClassName = {
    md: "sm:max-w-xl",
    lg: "sm:max-w-[820px]",
    xl: "sm:max-w-[960px] sm:max-h-[640px]",
    xxl: "sm:max-w-[1240px] sm:max-h-[760px]"
};
const DialogContent = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, children, blur, noPadding, size, hideCloseButton, restrictOverflow = false, closeOnOutsideClick, title, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(DialogPortal, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DialogOverlay, {
                blur: blur
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__/* .Content */ .UC, {
                ref: ref,
                className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_3__.cn)("fixed left-[50%] top-[50%] z-50 translate-x-[-50%] translate-y-[-50%] transform rounded-lg bg-white text-left shadow-xl transition-all sm:my-2 sm:w-full sm:max-w-xl", `${noPadding ? "" : "px-4 pb-4 pt-5 sm:p-6"}`, "data-[state='closed']:animate-fadeOut data-[state='open']:animate-fadeIn", size && sizeClassName && sizeClassName[size], !restrictOverflow && "overflow-hidden", className),
                ...props,
                onPointerDownOutside: (e)=>{
                    if (!closeOnOutsideClick) {
                        e.preventDefault();
                    }
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__/* .DialogTitle */ .L3, {
                        children: title && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                            className: "mb-4 text-xl font-bold text-slate-500",
                            children: title
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__/* .DialogDescription */ .rr, {}),
                    children,
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__/* .Close */ .bm, {
                        className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_3__.cn)("absolute right-0 top-0 hidden pr-4 pt-4 text-slate-400 hover:text-slate-500 focus:outline-none focus:ring-0 sm:block", hideCloseButton && "!hidden"),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_XIcon_lucide_react__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
                                className: "h-6 w-6 rounded-md bg-white"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                className: "sr-only",
                                children: "Close"
                            })
                        ]
                    })
                ]
            })
        ]
    }));
DialogContent.displayName = _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__/* .Content */ .UC.displayName;
const Modal = ({ open, setOpen, children, blur = true, size = "md", noPadding, hideCloseButton = false, closeOnOutsideClick = true, title, className, restrictOverflow = false })=>{
    if (!open) return null;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__/* .Root */ .bL, {
        open: open,
        onOpenChange: (open)=>setOpen(open),
        modal: true,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DialogContent, {
            blur: blur,
            size: size,
            noPadding: noPadding,
            hideCloseButton: hideCloseButton,
            closeOnOutsideClick: closeOnOutsideClick,
            title: title,
            className: className,
            restrictOverflow: restrictOverflow,
            children: children
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

/***/ 92018:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PH: () => (/* binding */ isCapitalized),
/* harmony export */   Zr: () => (/* binding */ capitalizeFirstLetter),
/* harmony export */   xv: () => (/* binding */ truncate)
/* harmony export */ });
/* unused harmony exports sanitizeString, startsWithVowel, truncateText */
const capitalizeFirstLetter = (string = "")=>{
    if (string === null) {
        return "";
    }
    return string.charAt(0).toUpperCase() + string.slice(1);
};
// write a function that takes a string and truncates it to the specified length
const truncate = (str, length)=>{
    if (!str) return "";
    if (str.length > length) {
        return str.substring(0, length) + "...";
    }
    return str;
};
// write a function that takes a string and removes all characters that could cause issues with the url and truncates it to the specified length
const sanitizeString = (str, delimiter = "_", length = 255)=>{
    return str.replace(/[^0-9a-zA-Z\-._]+/g, delimiter).substring(0, length);
};
const isCapitalized = (str)=>str.charAt(0) === str.charAt(0).toUpperCase();
const startsWithVowel = (str)=>{
    return /^[aeiouAEIOU]/.test(str);
};
const truncateText = (text, limit)=>{
    return text.length > limit ? `${text.substring(0, limit)}...` : text;
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

/***/ 57841:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* binding */ createOrganizationAction)
/* harmony export */ });
/* harmony import */ var private_next_rsc_server_reference__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(286055);
/* harmony import */ var private_next_rsc_action_encryption__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(770767);
/* harmony import */ var private_next_rsc_action_encryption__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(private_next_rsc_action_encryption__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_utils_action_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(308046);
/* harmony import */ var _modules_ee_license_check_lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(725322);
/* harmony import */ var _modules_projects_settings_lib_project__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(908740);
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(283131);
/* harmony import */ var _formbricks_lib_membership_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(575361);
/* harmony import */ var _formbricks_lib_organization_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(167440);
/* harmony import */ var _formbricks_lib_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(717080);
/* harmony import */ var _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(207798);
/* harmony import */ var private_next_rsc_action_validate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(429931);
/* __next_internal_action_entry_do_not_use__ {"7ff27151c29d7402abd744ae983a2c25b016ccf26f":"createOrganizationAction"} */ 









const ZCreateOrganizationAction = zod__WEBPACK_IMPORTED_MODULE_5__.z.object({
    organizationName: zod__WEBPACK_IMPORTED_MODULE_5__.z.string().min(1, "Organization name must be at least 1 character long")
});
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ createOrganizationAction = _lib_utils_action_client__WEBPACK_IMPORTED_MODULE_2__/* .authenticatedActionClient */ .D.schema(ZCreateOrganizationAction).action(async ({ ctx, parsedInput })=>{
    const isMultiOrgEnabled = await (0,_modules_ee_license_check_lib_utils__WEBPACK_IMPORTED_MODULE_3__/* .getIsMultiOrgEnabled */ .pn)();
    if (!isMultiOrgEnabled) throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_6__/* .OperationNotAllowedError */ .J4("Creating Multiple organization is restricted on your instance of Formbricks");
    const newOrganization = await (0,_formbricks_lib_organization_service__WEBPACK_IMPORTED_MODULE_7__/* .createOrganization */ .EC)({
        name: parsedInput.organizationName
    });
    await (0,_formbricks_lib_membership_service__WEBPACK_IMPORTED_MODULE_8__/* .createMembership */ .$)(newOrganization.id, ctx.user.id, {
        role: "owner",
        accepted: true
    });
    const project = await (0,_modules_projects_settings_lib_project__WEBPACK_IMPORTED_MODULE_4__/* .createProject */ .gA)(newOrganization.id, {
        name: "My Project"
    });
    const updatedNotificationSettings = {
        ...ctx.user.notificationSettings,
        alert: {
            ...ctx.user.notificationSettings?.alert
        },
        weeklySummary: {
            ...ctx.user.notificationSettings?.weeklySummary,
            [project.id]: true
        },
        unsubscribedOrganizationIds: Array.from(new Set([
            ...ctx.user.notificationSettings?.unsubscribedOrganizationIds || [],
            newOrganization.id
        ]))
    };
    await (0,_formbricks_lib_user_service__WEBPACK_IMPORTED_MODULE_9__/* .updateUser */ .TK)(ctx.user.id, {
        notificationSettings: updatedNotificationSettings
    });
    return newOrganization;
});

(0,private_next_rsc_action_validate__WEBPACK_IMPORTED_MODULE_10__/* .ensureServerEntryExports */ .D)([
    createOrganizationAction
]);
(0,private_next_rsc_server_reference__WEBPACK_IMPORTED_MODULE_0__/* .registerServerReference */ .A)(createOrganizationAction, "7ff27151c29d7402abd744ae983a2c25b016ccf26f", null);


/***/ }),

/***/ 908740:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   gA: () => (/* binding */ createProject),
/* harmony export */   vr: () => (/* binding */ updateProject),
/* harmony export */   xx: () => (/* binding */ deleteProject)
/* harmony export */ });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(896330);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(283131);
/* harmony import */ var _formbricks_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(482859);
/* harmony import */ var _formbricks_lib_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(711344);
/* harmony import */ var _formbricks_lib_environment_cache__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(37483);
/* harmony import */ var _formbricks_lib_environment_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(43264);
/* harmony import */ var _formbricks_lib_project_cache__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(595111);
/* harmony import */ var _formbricks_lib_storage_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(117396);
/* harmony import */ var _formbricks_lib_utils_validate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(472749);
/* harmony import */ var _formbricks_types_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(552224);
/* harmony import */ var _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(207798);
/* harmony import */ var _formbricks_types_project__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(773518);













const selectProject = {
    id: true,
    createdAt: true,
    updatedAt: true,
    name: true,
    organizationId: true,
    languages: true,
    recontactDays: true,
    linkSurveyBranding: true,
    inAppSurveyBranding: true,
    config: true,
    placement: true,
    clickOutsideClose: true,
    darkOverlay: true,
    environments: true,
    styling: true,
    logo: true
};
const updateProject = async (projectId, inputProject)=>{
    (0,_formbricks_lib_utils_validate__WEBPACK_IMPORTED_MODULE_2__/* .validateInputs */ .C)([
        projectId,
        _formbricks_types_common__WEBPACK_IMPORTED_MODULE_3__/* .ZId */ .i4
    ], [
        inputProject,
        _formbricks_types_project__WEBPACK_IMPORTED_MODULE_4__/* .ZProjectUpdateInput */ .RQ
    ]);
    const { environments, ...data } = inputProject;
    let updatedProject;
    try {
        updatedProject = await _formbricks_database__WEBPACK_IMPORTED_MODULE_1__/* .prisma */ .z.project.update({
            where: {
                id: projectId
            },
            data: {
                ...data,
                environments: {
                    connect: environments?.map((environment)=>({
                            id: environment.id
                        })) ?? []
                }
            },
            select: selectProject
        });
    } catch (error) {
        if (error instanceof _prisma_client__WEBPACK_IMPORTED_MODULE_0__.Prisma.PrismaClientKnownRequestError) {
            throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_5__/* .DatabaseError */ .a$(error.message);
        }
        throw error;
    }
    try {
        const project = _formbricks_types_project__WEBPACK_IMPORTED_MODULE_4__/* .ZProject */ .AK.parse(updatedProject);
        _formbricks_lib_project_cache__WEBPACK_IMPORTED_MODULE_6__/* .projectCache */ .E.revalidate({
            id: project.id,
            organizationId: project.organizationId
        });
        project.environments.forEach((environment)=>{
            // revalidate environment cache
            _formbricks_lib_project_cache__WEBPACK_IMPORTED_MODULE_6__/* .projectCache */ .E.revalidate({
                environmentId: environment.id
            });
        });
        return project;
    } catch (error) {
        if (error instanceof zod__WEBPACK_IMPORTED_MODULE_7__.z.ZodError) {
            console.error(JSON.stringify(error.errors, null, 2));
        }
        throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_5__/* .ValidationError */ .yI("Data validation of project failed");
    }
};
const createProject = async (organizationId, projectInput)=>{
    (0,_formbricks_lib_utils_validate__WEBPACK_IMPORTED_MODULE_2__/* .validateInputs */ .C)([
        organizationId,
        _formbricks_types_common__WEBPACK_IMPORTED_MODULE_3__/* .ZString */ .eI
    ], [
        projectInput,
        _formbricks_types_project__WEBPACK_IMPORTED_MODULE_4__/* .ZProjectUpdateInput */ .RQ.partial()
    ]);
    if (!projectInput.name) {
        throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_5__/* .ValidationError */ .yI("Project Name is required");
    }
    const { environments, teamIds, ...data } = projectInput;
    try {
        let project = await _formbricks_database__WEBPACK_IMPORTED_MODULE_1__/* .prisma */ .z.project.create({
            data: {
                config: {
                    channel: null,
                    industry: null
                },
                ...data,
                name: projectInput.name,
                organizationId
            },
            select: selectProject
        });
        if (teamIds) {
            await _formbricks_database__WEBPACK_IMPORTED_MODULE_1__/* .prisma */ .z.projectTeam.createMany({
                data: teamIds.map((teamId)=>({
                        projectId: project.id,
                        teamId
                    }))
            });
        }
        _formbricks_lib_project_cache__WEBPACK_IMPORTED_MODULE_6__/* .projectCache */ .E.revalidate({
            id: project.id,
            organizationId: project.organizationId
        });
        const devEnvironment = await (0,_formbricks_lib_environment_service__WEBPACK_IMPORTED_MODULE_8__/* .createEnvironment */ .MO)(project.id, {
            type: "development"
        });
        const prodEnvironment = await (0,_formbricks_lib_environment_service__WEBPACK_IMPORTED_MODULE_8__/* .createEnvironment */ .MO)(project.id, {
            type: "production"
        });
        const updatedProject = await updateProject(project.id, {
            environments: [
                devEnvironment,
                prodEnvironment
            ]
        });
        return updatedProject;
    } catch (error) {
        if (error instanceof _prisma_client__WEBPACK_IMPORTED_MODULE_0__.Prisma.PrismaClientKnownRequestError && error.code === "P2002") {
            throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_5__/* .InvalidInputError */ .oC("A project with this name already exists in your organization");
        }
        if (error instanceof _prisma_client__WEBPACK_IMPORTED_MODULE_0__.Prisma.PrismaClientKnownRequestError) {
            if (error.code === "P2002") {
                throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_5__/* .InvalidInputError */ .oC("A project with this name already exists in this organization");
            }
            throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_5__/* .DatabaseError */ .a$(error.message);
        }
        throw error;
    }
};
const deleteProject = async (projectId)=>{
    try {
        const project = await _formbricks_database__WEBPACK_IMPORTED_MODULE_1__/* .prisma */ .z.project.delete({
            where: {
                id: projectId
            },
            select: selectProject
        });
        if (project) {
            // delete all files from storage related to this project
            if ((0,_formbricks_lib_constants__WEBPACK_IMPORTED_MODULE_9__/* .isS3Configured */ .$Y)()) {
                const s3FilesPromises = project.environments.map(async (environment)=>{
                    return (0,_formbricks_lib_storage_service__WEBPACK_IMPORTED_MODULE_10__/* .deleteS3FilesByEnvironmentId */ .A6)(environment.id);
                });
                try {
                    await Promise.all(s3FilesPromises);
                } catch (err) {
                    // fail silently because we don't want to throw an error if the files are not deleted
                    console.error(err);
                }
            } else {
                const localFilesPromises = project.environments.map(async (environment)=>{
                    return (0,_formbricks_lib_storage_service__WEBPACK_IMPORTED_MODULE_10__/* .deleteLocalFilesByEnvironmentId */ .Z5)(environment.id);
                });
                try {
                    await Promise.all(localFilesPromises);
                } catch (err) {
                    // fail silently because we don't want to throw an error if the files are not deleted
                    console.error(err);
                }
            }
            _formbricks_lib_project_cache__WEBPACK_IMPORTED_MODULE_6__/* .projectCache */ .E.revalidate({
                id: project.id,
                organizationId: project.organizationId
            });
            _formbricks_lib_environment_cache__WEBPACK_IMPORTED_MODULE_11__/* .environmentCache */ .e.revalidate({
                projectId: project.id
            });
            project.environments.forEach((environment)=>{
                // revalidate project cache
                _formbricks_lib_project_cache__WEBPACK_IMPORTED_MODULE_6__/* .projectCache */ .E.revalidate({
                    environmentId: environment.id
                });
                _formbricks_lib_environment_cache__WEBPACK_IMPORTED_MODULE_11__/* .environmentCache */ .e.revalidate({
                    id: environment.id
                });
            });
        }
        return project;
    } catch (error) {
        if (error instanceof _prisma_client__WEBPACK_IMPORTED_MODULE_0__.Prisma.PrismaClientKnownRequestError) {
            throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_5__/* .DatabaseError */ .a$(error.message);
        }
        throw error;
    }
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

/***/ 117396:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A6: () => (/* binding */ deleteS3FilesByEnvironmentId),
/* harmony export */   UN: () => (/* binding */ putFile),
/* harmony export */   Ww: () => (/* binding */ deleteFile),
/* harmony export */   Z5: () => (/* binding */ deleteLocalFilesByEnvironmentId)
/* harmony export */ });
/* unused harmony exports getS3Client, testS3BucketAccess, getS3File, getLocalFile, getUploadSignedUrl, getS3UploadSignedUrl, putFileToLocalStorage, deleteLocalFile, deleteS3File */
/* harmony import */ var _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(191043);
/* harmony import */ var _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _aws_sdk_s3_presigned_post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(741000);
/* harmony import */ var _aws_sdk_s3_presigned_post__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_aws_sdk_s3_presigned_post__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _aws_sdk_s3_request_presigner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(531701);
/* harmony import */ var _aws_sdk_s3_request_presigner__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_aws_sdk_s3_request_presigner__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(455511);
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(79748);
/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(fs_promises__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var mime_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(564937);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(333873);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(711344);










// S3Client Singleton
let s3ClientInstance = null;
const getS3Client = ()=>{
    if (!s3ClientInstance) {
        const credentials = _constants__WEBPACK_IMPORTED_MODULE_7__/* .S3_ACCESS_KEY */ .Ik && _constants__WEBPACK_IMPORTED_MODULE_7__/* .S3_SECRET_KEY */ .Wg ? {
            accessKeyId: _constants__WEBPACK_IMPORTED_MODULE_7__/* .S3_ACCESS_KEY */ .Ik,
            secretAccessKey: _constants__WEBPACK_IMPORTED_MODULE_7__/* .S3_SECRET_KEY */ .Wg
        } : undefined;
        s3ClientInstance = new _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_0__.S3Client({
            credentials,
            region: _constants__WEBPACK_IMPORTED_MODULE_7__/* .S3_REGION */ .Yj,
            ..._constants__WEBPACK_IMPORTED_MODULE_7__/* .S3_ENDPOINT_URL */ .Xc && {
                endpoint: _constants__WEBPACK_IMPORTED_MODULE_7__/* .S3_ENDPOINT_URL */ .Xc
            },
            forcePathStyle: _constants__WEBPACK_IMPORTED_MODULE_7__/* .S3_FORCE_PATH_STYLE */ .vh
        });
    }
    return s3ClientInstance;
};
const testS3BucketAccess = async ()=>{
    const s3Client = getS3Client();
    try {
        // Attempt to retrieve metadata about the bucket
        const headBucketCommand = new HeadBucketCommand({
            Bucket: S3_BUCKET_NAME
        });
        await s3Client.send(headBucketCommand);
        return true;
    } catch (error) {
        console.error(`Failed to access S3 bucket: ${error}`);
        throw new Error(`S3 Bucket Access Test Failed: ${error}`);
    }
};
const ensureDirectoryExists = async (dirPath)=>{
    try {
        await (0,fs_promises__WEBPACK_IMPORTED_MODULE_4__.access)(dirPath);
    } catch (error) {
        if (error.code === "ENOENT") {
            await (0,fs_promises__WEBPACK_IMPORTED_MODULE_4__.mkdir)(dirPath, {
                recursive: true
            });
        } else {
            throw error;
        }
    }
};
const getS3SignedUrl = async (fileKey)=>{
    const [_, accessType] = fileKey.split("/");
    const expiresIn = accessType === "public" ? 60 * 60 : 10 * 60;
    const getObjectCommand = new GetObjectCommand({
        Bucket: S3_BUCKET_NAME,
        Key: fileKey
    });
    try {
        const s3Client = getS3Client();
        return await getSignedUrl(s3Client, getObjectCommand, {
            expiresIn
        });
    } catch (err) {
        throw err;
    }
};
const getS3File = async (fileKey)=>{
    const signedUrl = await getS3SignedUrl(fileKey);
    return signedUrl;
};
const getLocalFile = async (filePath)=>{
    try {
        const safeFilePath = path.resolve(process.cwd(), filePath);
        const file = await readFile(safeFilePath);
        let contentType = "";
        try {
            contentType = lookup(filePath) || "";
        } catch (err) {
            throw err;
        }
        return {
            fileBuffer: file,
            metaData: {
                contentType: contentType ?? ""
            }
        };
    } catch (err) {
        throw err;
    }
};
// a single service for generating a signed url based on user's environment variables
const getUploadSignedUrl = async (fileName, environmentId, fileType, accessType, isBiggerFileUploadAllowed = false)=>{
    // add a unique id to the file name
    const fileExtension = fileName.split(".").pop();
    const fileNameWithoutExtension = fileName.split(".").slice(0, -1).join(".");
    if (!fileExtension) {
        throw new Error("File extension not found");
    }
    const updatedFileName = `${fileNameWithoutExtension}--fid--${randomUUID()}.${fileExtension}`;
    // handle the local storage case first
    if (!isS3Configured()) {
        try {
            const { signature, timestamp, uuid } = generateLocalSignedUrl(updatedFileName, environmentId, fileType);
            return {
                signedUrl: accessType === "private" ? new URL(`${WEBAPP_URL}/api/v1/client/${environmentId}/storage/local`).href : new URL(`${WEBAPP_URL}/api/v1/management/storage/local`).href,
                signingData: {
                    signature,
                    timestamp,
                    uuid
                },
                updatedFileName,
                fileUrl: new URL(`${WEBAPP_URL}/storage/${environmentId}/${accessType}/${updatedFileName}`).href
            };
        } catch (err) {
            throw err;
        }
    }
    try {
        const { presignedFields, signedUrl } = await getS3UploadSignedUrl(updatedFileName, fileType, accessType, environmentId, isBiggerFileUploadAllowed);
        return {
            signedUrl,
            presignedFields,
            fileUrl: new URL(`${WEBAPP_URL}/storage/${environmentId}/${accessType}/${updatedFileName}`).href
        };
    } catch (err) {
        throw err;
    }
};
const getS3UploadSignedUrl = async (fileName, contentType, accessType, environmentId, isBiggerFileUploadAllowed = false)=>{
    const maxSize = IS_FORMBRICKS_CLOUD ? isBiggerFileUploadAllowed ? MAX_SIZES.big : MAX_SIZES.standard : Infinity;
    const postConditions = IS_FORMBRICKS_CLOUD ? [
        [
            "content-length-range",
            0,
            maxSize
        ]
    ] : undefined;
    try {
        const s3Client = getS3Client();
        const { fields, url } = await createPresignedPost(s3Client, {
            Expires: 10 * 60,
            Bucket: env.S3_BUCKET_NAME,
            Key: `${environmentId}/${accessType}/${fileName}`,
            Fields: {
                "Content-Type": contentType,
                "Content-Encoding": "base64"
            },
            Conditions: postConditions
        });
        return {
            signedUrl: url,
            presignedFields: fields
        };
    } catch (err) {
        throw err;
    }
};
const putFileToLocalStorage = async (fileName, fileBuffer, accessType, environmentId, rootDir, isBiggerFileUploadAllowed = false)=>{
    try {
        await ensureDirectoryExists(`${rootDir}/${environmentId}/${accessType}`);
        const uploadPath = `${rootDir}/${environmentId}/${accessType}/${fileName}`;
        const buffer = Buffer.from(fileBuffer);
        const bufferBytes = buffer.byteLength;
        const maxSize = _constants__WEBPACK_IMPORTED_MODULE_7__/* .IS_FORMBRICKS_CLOUD */ .Si ? isBiggerFileUploadAllowed ? _constants__WEBPACK_IMPORTED_MODULE_7__/* .MAX_SIZES */ .gB.big : _constants__WEBPACK_IMPORTED_MODULE_7__/* .MAX_SIZES */ .gB.standard : Infinity;
        if (bufferBytes > maxSize) {
            const err = new Error(`File size exceeds the ${maxSize / (1024 * 1024)} MB limit`);
            err.name = "FileTooLargeError";
            throw err;
        }
        await (0,fs_promises__WEBPACK_IMPORTED_MODULE_4__.writeFile)(uploadPath, buffer);
    } catch (err) {
        throw err;
    }
};
// a single service to put file in the storage(local or S3), based on the S3 configuration
const putFile = async (fileName, fileBuffer, accessType, environmentId)=>{
    try {
        if (!(0,_constants__WEBPACK_IMPORTED_MODULE_7__/* .isS3Configured */ .$Y)()) {
            await putFileToLocalStorage(fileName, fileBuffer, accessType, environmentId, _constants__WEBPACK_IMPORTED_MODULE_7__/* .UPLOADS_DIR */ .xG);
            return {
                success: true,
                message: "File uploaded"
            };
        } else {
            const input = {
                Body: fileBuffer,
                Bucket: _constants__WEBPACK_IMPORTED_MODULE_7__/* .S3_BUCKET_NAME */ .MT,
                Key: `${environmentId}/${accessType}/${fileName}`
            };
            const command = new _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_0__.PutObjectCommand(input);
            const s3Client = getS3Client();
            await s3Client.send(command);
            return {
                success: true,
                message: "File uploaded"
            };
        }
    } catch (err) {
        throw err;
    }
};
const deleteFile = async (environmentId, accessType, fileName)=>{
    if (!(0,_constants__WEBPACK_IMPORTED_MODULE_7__/* .isS3Configured */ .$Y)()) {
        try {
            await deleteLocalFile(path__WEBPACK_IMPORTED_MODULE_6___default().join(_constants__WEBPACK_IMPORTED_MODULE_7__/* .UPLOADS_DIR */ .xG, environmentId, accessType, fileName));
            return {
                success: true,
                message: "File deleted"
            };
        } catch (err) {
            if (err.code !== "ENOENT") {
                return {
                    success: false,
                    message: err.message ?? "Something went wrong"
                };
            }
            return {
                success: false,
                message: "File not found",
                code: 404
            };
        }
    }
    try {
        await deleteS3File(`${environmentId}/${accessType}/${fileName}`);
        return {
            success: true,
            message: "File deleted"
        };
    } catch (err) {
        if (err.name === "NoSuchKey") {
            return {
                success: false,
                message: "File not found",
                code: 404
            };
        } else {
            return {
                success: false,
                message: err.message ?? "Something went wrong"
            };
        }
    }
};
const deleteLocalFile = async (filePath)=>{
    try {
        await (0,fs_promises__WEBPACK_IMPORTED_MODULE_4__.unlink)(filePath);
    } catch (err) {
        throw err;
    }
};
const deleteS3File = async (fileKey)=>{
    const deleteObjectCommand = new _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_0__.DeleteObjectCommand({
        Bucket: _constants__WEBPACK_IMPORTED_MODULE_7__/* .S3_BUCKET_NAME */ .MT,
        Key: fileKey
    });
    try {
        const s3Client = getS3Client();
        await s3Client.send(deleteObjectCommand);
    } catch (err) {
        throw err;
    }
};
const deleteS3FilesByEnvironmentId = async (environmentId)=>{
    try {
        // List all objects in the bucket with the prefix of environmentId
        const s3Client = getS3Client();
        const listObjectsOutput = await s3Client.send(new _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_0__.ListObjectsCommand({
            Bucket: _constants__WEBPACK_IMPORTED_MODULE_7__/* .S3_BUCKET_NAME */ .MT,
            Prefix: environmentId
        }));
        if (listObjectsOutput.Contents) {
            const objectsToDelete = listObjectsOutput.Contents.map((obj)=>{
                return {
                    Key: obj.Key
                };
            });
            if (!objectsToDelete.length) {
                // no objects to delete
                return null;
            }
            // Delete the objects
            await s3Client.send(new _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_0__.DeleteObjectsCommand({
                Bucket: _constants__WEBPACK_IMPORTED_MODULE_7__/* .S3_BUCKET_NAME */ .MT,
                Delete: {
                    Objects: objectsToDelete
                }
            }));
        } else {
            // no objects to delete
            return null;
        }
    } catch (err) {
        throw err;
    }
};
const deleteLocalFilesByEnvironmentId = async (environmentId)=>{
    const dirPath = (0,path__WEBPACK_IMPORTED_MODULE_6__.join)(_constants__WEBPACK_IMPORTED_MODULE_7__/* .UPLOADS_DIR */ .xG, environmentId);
    try {
        await ensureDirectoryExists(dirPath);
        await (0,fs_promises__WEBPACK_IMPORTED_MODULE_4__.rmdir)(dirPath, {
            recursive: true
        });
    } catch (err) {
        throw err;
    }
};


/***/ }),

/***/ 775337:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/formbricks-wordmark.ebd7498b.svg","height":200,"width":795,"blurWidth":0,"blurHeight":0});

/***/ })

};
;