exports.id = 4256;
exports.ids = [4256];
exports.modules = {

/***/ 591687:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 69427));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 483819));


/***/ }),

/***/ 321951:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 101907));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 125963));


/***/ }),

/***/ 785177:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 645237));


/***/ }),

/***/ 498329:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 986090));


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

/***/ 381733:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ layout)
});

// EXTERNAL MODULE: ../../node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-runtime.js
var react_jsx_runtime = __webpack_require__(891069);
// EXTERNAL MODULE: ./modules/auth/lib/authOptions.ts + 8 modules
var authOptions = __webpack_require__(136015);
// EXTERNAL MODULE: ./modules/ee/license-check/lib/utils.ts + 1 modules
var utils = __webpack_require__(532077);
// EXTERNAL MODULE: ../../node_modules/next-auth/index.js
var next_auth = __webpack_require__(963302);
// EXTERNAL MODULE: ../../node_modules/next/dist/api/navigation.react-server.js
var navigation_react_server = __webpack_require__(145796);
// EXTERNAL MODULE: ../../node_modules/react-hot-toast/dist/index.mjs
var dist = __webpack_require__(645237);
// EXTERNAL MODULE: ../../packages/lib/instance/service.ts
var service = __webpack_require__(232287);
;// ./modules/auth/layout.tsx







const AuthLayout = async ({ children })=>{
    const [session, isFreshInstance, isMultiOrgEnabled] = await Promise.all([
        (0,next_auth.getServerSession)(authOptions/* authOptions */.N),
        (0,service/* getIsFreshInstance */.E)(),
        (0,utils/* getIsMultiOrgEnabled */.pn)()
    ]);
    if (session) {
        (0,navigation_react_server.redirect)(`/`);
    }
    if (isFreshInstance && !isMultiOrgEnabled) {
        (0,navigation_react_server.redirect)("/setup/intro");
    }
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(dist.Toaster, {}),
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                className: "min-h-screen bg-slate-50",
                children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                    className: "isolate bg-white",
                    children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                        className: "bg-gradient-radial flex min-h-screen from-slate-200 to-slate-50",
                        children: children
                    })
                })
            })
        ]
    });
};

;// ./app/(auth)/auth/layout.tsx

/* harmony default export */ const layout = (AuthLayout);


/***/ }),

/***/ 496415:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(891069);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_IntercomClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69427);
/* harmony import */ var _modules_ui_components_no_mobile_overlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(483819);
/* harmony import */ var _formbricks_lib_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(836919);




const AppLayout = async ({ children })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_modules_ui_components_no_mobile_overlay__WEBPACK_IMPORTED_MODULE_2__.NoMobileOverlay, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_IntercomClient__WEBPACK_IMPORTED_MODULE_1__.IntercomClient, {
                isIntercomConfigured: _formbricks_lib_constants__WEBPACK_IMPORTED_MODULE_3__/* .IS_INTERCOM_CONFIGURED */ .Oz,
                intercomSecretKey: _formbricks_lib_constants__WEBPACK_IMPORTED_MODULE_3__/* .INTERCOM_SECRET_KEY */ .rU
            }),
            children
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

/***/ 487506:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  _: () => (/* binding */ FormWrapper)
});

// EXTERNAL MODULE: ../../node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-runtime.js
var react_jsx_runtime = __webpack_require__(891069);
;// ./modules/ui/components/logo/index.tsx

const Logo = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("svg", {
        viewBox: "0 0 697 150",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("path", {
                d: "M167 108H181V79.4H207.6V67H181V50.6H208.1V38H167V108ZM241.309 109.3C257.409 109.3 269.009 97.1 269.009 82.1C269.009 67.1 257.409 54.8 241.309 54.8C225.209 54.8 213.609 67.1 213.609 82.1C213.609 97.1 225.209 109.3 241.309 109.3ZM227.109 82.1C227.109 74 232.709 67.1 241.309 67.1C249.909 67.1 255.509 74 255.509 82.1C255.509 90.2 249.909 97 241.309 97C232.709 97 227.109 90.2 227.109 82.1ZM274.984 108H288.484V81.4C288.484 72.7 294.484 67.5 302.284 67.5H304.184V54.8C295.184 54.3 289.884 58.4 288.084 65.9V56H274.984V108ZM312.676 108H326.176V79.5C326.176 70.5 331.276 66.6 336.976 66.6C343.676 66.6 348.176 70.5 348.176 79.5V108H361.676V79.5C361.676 69.5 365.976 66.6 372.276 66.6C378.376 66.6 382.676 70.5 382.676 79.5V108H396.176V76.2C396.176 63.1 387.576 54.8 376.376 54.8C367.276 54.8 362.276 58.3 358.776 64.6C355.376 58.3 349.176 54.8 341.876 54.8C333.876 54.8 328.676 57.8 325.976 63.6V56H312.676V108ZM437.591 109.3C451.891 109.3 463.291 97.2 463.291 82.2C463.291 67.2 451.891 54.9 437.591 54.9C428.691 54.9 423.991 58.5 421.191 64V35H407.691V108H420.791V99.5C423.591 105.4 428.291 109.3 437.591 109.3ZM420.791 82.2C420.791 74.1 426.491 67.1 435.391 67.1C443.991 67.1 449.791 74 449.791 82.1C449.791 90 443.991 97.1 435.391 97.1C426.491 97.1 420.791 90.3 420.791 82.2ZM471.313 108H484.813V81.4C484.813 72.7 490.813 67.5 498.613 67.5H500.513V54.8C491.513 54.3 486.213 58.4 484.413 65.9V56H471.313V108ZM509.004 108H522.504V56H509.004V108ZM507.604 43.7C507.604 48.1 511.104 51.7 515.704 51.7C520.404 51.7 523.804 48.2 523.804 43.7C523.804 39.4 520.404 35.8 515.704 35.8C511.104 35.8 507.604 39.4 507.604 43.7ZM555.288 109.3C565.488 109.3 572.688 105.6 577.588 99.3L567.788 90.8C565.088 94.4 561.688 97 556.488 97C547.888 97 541.988 90.1 541.988 82C541.988 73.9 547.588 67 556.188 67C560.788 67 564.788 69.3 567.188 72.9L577.588 64.4C573.188 58.3 565.488 54.6 555.988 54.7C540.088 54.8 528.488 66.9 528.488 82C528.488 97.1 540.388 109.3 555.288 109.3ZM617.33 108H635.23L610.63 80.2L635.13 56H615.93L596.43 77V35H582.93V108H596.43V83.3L617.33 108ZM657.562 109.3C669.062 109.3 677.762 102.1 677.762 92.5C677.762 84.7 674.262 79.1 659.162 75.2C652.962 73.6 652.162 72 652.162 70.2C652.162 67 654.962 65.6 658.662 65.6C662.162 65.6 665.362 67.2 667.862 71.2L677.662 63.7C672.362 56.8 666.762 54.7 658.362 54.7C646.162 54.7 638.962 61.5 638.962 70.6C638.962 77.2 641.062 83.5 654.962 86.8C663.162 88.7 664.462 90.2 664.462 92.9C664.462 96 661.862 98.3 657.262 98.3C652.862 98.3 648.862 96.2 645.062 91.9L635.962 100.2C641.662 106.3 648.762 109.3 657.562 109.3Z",
                fill: "#0F172A"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("path", {
                d: "M21 93.6416H46.3585V106.321C46.3585 113.323 40.6818 119 33.6792 119C26.6767 119 21 113.323 21 106.321V93.6416Z",
                fill: "url(#paint0_linear_2810_6010)"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("path", {
                d: "M21 64.3208H71.717C78.7195 64.3208 84.3962 69.9975 84.3962 77C84.3962 84.0026 78.7195 89.6793 71.717 89.6793H21V64.3208Z",
                fill: "url(#paint1_linear_2810_6010)"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("path", {
                d: "M21 55C21 43.9543 29.9543 35 41 35H71.717C78.7195 35 84.3962 40.6767 84.3962 47.6792C84.3962 54.6818 78.7195 60.3585 71.717 60.3585H21V55Z",
                fill: "url(#paint2_linear_2810_6010)"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("mask", {
                id: "mask0_2810_6010",
                style: {
                    maskType: "alpha"
                },
                maskUnits: "userSpaceOnUse",
                x: "21",
                y: "35",
                width: "64",
                height: "84",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("path", {
                        d: "M21 93.6416H46.3585V106.321C46.3585 113.323 40.6818 119 33.6792 119C26.6767 119 21 113.323 21 106.321V93.6416Z",
                        fill: "url(#paint3_linear_2810_6010)"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("path", {
                        d: "M21 64.3208H71.717C78.7195 64.3208 84.3962 69.9975 84.3962 77C84.3962 84.0026 78.7195 89.6793 71.717 89.6793H21V64.3208Z",
                        fill: "url(#paint4_linear_2810_6010)"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("path", {
                        d: "M21 55C21 43.9543 29.9543 35 41 35H71.717C78.7195 35 84.3962 40.6767 84.3962 47.6792C84.3962 54.6818 78.7195 60.3585 71.717 60.3585H21V55Z",
                        fill: "url(#paint5_linear_2810_6010)"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("g", {
                mask: "url(#mask0_2810_6010)",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("g", {
                        filter: "url(#filter0_d_2810_6010)",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("mask", {
                                id: "mask1_2810_6010",
                                style: {
                                    maskType: "alpha"
                                },
                                maskUnits: "userSpaceOnUse",
                                x: "21",
                                y: "35",
                                width: "64",
                                height: "84",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("path", {
                                        d: "M21 93.6416H46.3585V106.321C46.3585 113.323 40.6818 119 33.6792 119C26.6767 119 21 113.323 21 106.321V93.6416Z",
                                        fill: "black",
                                        fillOpacity: "0.1"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("path", {
                                        d: "M21 55C21 43.9543 29.9543 35 41 35H71.717C78.7195 35 84.3962 40.6767 84.3962 47.6792C84.3962 54.6818 78.7195 60.3585 71.717 60.3585H21V55Z",
                                        fill: "black",
                                        fillOpacity: "0.1"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("path", {
                                        d: "M21 64.3208H71.717C78.7195 64.3208 84.3962 69.9975 84.3962 77C84.3962 84.0026 78.7195 89.6793 71.717 89.6793H21V64.3208Z",
                                        fill: "black",
                                        fillOpacity: "0.1"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("g", {
                                mask: "url(#mask1_2810_6010)",
                                children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("path", {
                                    d: "M22.3303 13.158C32.2638 3.46307 57.4526 13.158 57.4526 13.158H22.3303C19.8905 15.5391 18.3709 19.09 18.3709 24.2415C18.3709 50.3672 46.6715 59.8676 46.6715 78.0764C46.6715 95.9014 19.5515 106.898 18.4081 131.119H57.4526C57.4526 131.119 18.3709 158.037 18.3709 132.703C18.3709 132.169 18.3835 131.641 18.4081 131.119H1.18848L4.55759 13.158H22.3303Z",
                                    fill: "black",
                                    fillOpacity: "0.1"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("g", {
                        filter: "url(#filter1_f_2810_6010)",
                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("circle", {
                            cx: "13.0756",
                            cy: "107.906",
                            r: "23.7736",
                            fill: "#00C4B8"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("g", {
                        filter: "url(#filter2_f_2810_6010)",
                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("circle", {
                            cx: "13.0756",
                            cy: "47.6793",
                            r: "23.7736",
                            fill: "#00C4B8"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("line", {
                x1: "123.75",
                y1: "33",
                x2: "123.75",
                y2: "120",
                stroke: "#CBD5E1",
                strokeWidth: "1.5"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("defs", {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("filter", {
                        id: "filter0_d_2810_6010",
                        x: "19",
                        y: "23",
                        width: "60.4526",
                        height: "108",
                        filterUnits: "userSpaceOnUse",
                        colorInterpolationFilters: "sRGB",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("feFlood", {
                                floodOpacity: "0",
                                result: "BackgroundImageFix"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("feColorMatrix", {
                                in: "SourceAlpha",
                                type: "matrix",
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                result: "hardAlpha"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("feOffset", {
                                dx: "10"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("feGaussianBlur", {
                                stdDeviation: "6"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("feComposite", {
                                in2: "hardAlpha",
                                operator: "out"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("feColorMatrix", {
                                type: "matrix",
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("feBlend", {
                                mode: "normal",
                                in2: "BackgroundImageFix",
                                result: "effect1_dropShadow_2810_6010"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("feBlend", {
                                mode: "normal",
                                in: "SourceGraphic",
                                in2: "effect1_dropShadow_2810_6010",
                                result: "shape"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("filter", {
                        id: "filter1_f_2810_6010",
                        x: "-30.698",
                        y: "64.1321",
                        width: "87.5471",
                        height: "87.5471",
                        filterUnits: "userSpaceOnUse",
                        colorInterpolationFilters: "sRGB",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("feFlood", {
                                floodOpacity: "0",
                                result: "BackgroundImageFix"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("feBlend", {
                                mode: "normal",
                                in: "SourceGraphic",
                                in2: "BackgroundImageFix",
                                result: "shape"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("feGaussianBlur", {
                                stdDeviation: "10",
                                result: "effect1_foregroundBlur_2810_6010"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("filter", {
                        id: "filter2_f_2810_6010",
                        x: "-30.698",
                        y: "3.90576",
                        width: "87.5471",
                        height: "87.5471",
                        filterUnits: "userSpaceOnUse",
                        colorInterpolationFilters: "sRGB",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("feFlood", {
                                floodOpacity: "0",
                                result: "BackgroundImageFix"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("feBlend", {
                                mode: "normal",
                                in: "SourceGraphic",
                                in2: "BackgroundImageFix",
                                result: "shape"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("feGaussianBlur", {
                                stdDeviation: "10",
                                result: "effect1_foregroundBlur_2810_6010"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("linearGradient", {
                        id: "paint0_linear_2810_6010",
                        x1: "46.4688",
                        y1: "105.861",
                        x2: "20.9978",
                        y2: "105.964",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("stop", {
                                stopColor: "#00E6CA"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("stop", {
                                offset: "1",
                                stopColor: "#00C4B8"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("linearGradient", {
                        id: "paint1_linear_2810_6010",
                        x1: "84.6719",
                        y1: "76.5407",
                        x2: "21",
                        y2: "77.1838",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("stop", {
                                stopColor: "#00E6CA"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("stop", {
                                offset: "1",
                                stopColor: "#00C4B8"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("linearGradient", {
                        id: "paint2_linear_2810_6010",
                        x1: "84.6719",
                        y1: "47.2199",
                        x2: "21",
                        y2: "47.863",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("stop", {
                                stopColor: "#00E6CA"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("stop", {
                                offset: "1",
                                stopColor: "#00C4B8"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("linearGradient", {
                        id: "paint3_linear_2810_6010",
                        x1: "46.4688",
                        y1: "105.861",
                        x2: "20.9978",
                        y2: "105.964",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("stop", {
                                stopColor: "#00FFE1"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("stop", {
                                offset: "1",
                                stopColor: "#01E0C6"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("linearGradient", {
                        id: "paint4_linear_2810_6010",
                        x1: "84.6719",
                        y1: "76.5407",
                        x2: "21",
                        y2: "77.1838",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("stop", {
                                stopColor: "#00FFE1"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("stop", {
                                offset: "1",
                                stopColor: "#01E0C6"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("linearGradient", {
                        id: "paint5_linear_2810_6010",
                        x1: "84.6719",
                        y1: "47.2199",
                        x2: "21",
                        y2: "47.863",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("stop", {
                                stopColor: "#00FFE1"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("stop", {
                                offset: "1",
                                stopColor: "#01E0C6"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};

;// ./modules/auth/components/form-wrapper.tsx


const FormWrapper = ({ children })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
        className: "mx-auto flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24",
        children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
            className: "mx-auto w-full max-w-sm rounded-xl bg-white p-8 shadow-xl lg:w-96",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                    className: "mb-8 text-center",
                    children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(Logo, {
                        className: "mx-auto w-3/4"
                    })
                }),
                children
            ]
        })
    });
};


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

/***/ 232287:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ getIsFreshInstance),
/* harmony export */   s: () => (/* binding */ gethasNoOrganizations)
/* harmony export */ });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(896330);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(922728);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _formbricks_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(527610);
/* harmony import */ var _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(470641);
/* harmony import */ var _cache__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(794356);
/* harmony import */ var _organization_cache__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(530190);
/* harmony import */ var _user_cache__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(323798);








// Function to check if there are any users in the database
const getIsFreshInstance = (0,react__WEBPACK_IMPORTED_MODULE_1__.cache)(async ()=>(0,_cache__WEBPACK_IMPORTED_MODULE_3__/* .cache */ .P)(async ()=>{
        try {
            const userCount = await _formbricks_database__WEBPACK_IMPORTED_MODULE_2__/* .prisma */ .z.user.count();
            if (userCount === 0) return true;
            else return false;
        } catch (error) {
            if (error instanceof _prisma_client__WEBPACK_IMPORTED_MODULE_0__.Prisma.PrismaClientKnownRequestError) {
                throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_4__/* .DatabaseError */ .a$(error.message);
            }
            throw error;
        }
    }, [
        "getIsFreshInstance"
    ], {
        tags: [
            _user_cache__WEBPACK_IMPORTED_MODULE_5__/* .userCache */ .g.tag.byCount()
        ]
    })());
// Function to check if there are any organizations in the database
const gethasNoOrganizations = (0,react__WEBPACK_IMPORTED_MODULE_1__.cache)(async ()=>(0,_cache__WEBPACK_IMPORTED_MODULE_3__/* .cache */ .P)(async ()=>{
        try {
            const organizationCount = await _formbricks_database__WEBPACK_IMPORTED_MODULE_2__/* .prisma */ .z.organization.count();
            return organizationCount === 0;
        } catch (error) {
            if (error instanceof _prisma_client__WEBPACK_IMPORTED_MODULE_0__.Prisma.PrismaClientKnownRequestError) {
                throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_4__/* .DatabaseError */ .a$(error.message);
            }
            throw error;
        }
    }, [
        "gethasNoOrganizations"
    ], {
        tags: [
            _organization_cache__WEBPACK_IMPORTED_MODULE_6__/* .organizationCache */ .S.tag.byCount()
        ]
    })());


/***/ })

};
;