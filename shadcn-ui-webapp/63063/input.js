exports.id = 63063;
exports.ids = [63063];
exports.modules = {

/***/ 98578:
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = 98578;
module.exports = webpackEmptyContext;

/***/ }),

/***/ 15092:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const actions = {
'b54ca7098d0868021410e04eb2301e6d7d8ac885': () => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 38478)).then(mod => mod["editInV0"]),
}

async function endpoint(id, ...args) {
  const action = await actions[id]()
  return action.apply(null, args)
}

// Using CJS to avoid this to be tree-shaken away due to unused exports.
module.exports = {
  'b54ca7098d0868021410e04eb2301e6d7d8ac885': endpoint.bind(null, 'b54ca7098d0868021410e04eb2301e6d7d8ac885'),
}


/***/ }),

/***/ 65210:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  R: () => (/* binding */ V0Button)
});

// UNUSED EXPORTS: V0Logo

// EXTERNAL MODULE: ../../node_modules/.pnpm/next@14.3.0-canary.43_@babel+core@7.24.6_@opentelemetry+api@1.8.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-runtime.js
var react_jsx_runtime = __webpack_require__(78553);
// EXTERNAL MODULE: ../../node_modules/.pnpm/next@14.3.0-canary.43_@babel+core@7.24.6_@opentelemetry+api@1.8.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js
var react = __webpack_require__(70615);
// EXTERNAL MODULE: ../../node_modules/.pnpm/next@14.3.0-canary.43_@babel+core@7.24.6_@opentelemetry+api@1.8.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/client/app-call-server.js
var app_call_server = __webpack_require__(37309);
// EXTERNAL MODULE: ../../node_modules/.pnpm/next@14.3.0-canary.43_@babel+core@7.24.6_@opentelemetry+api@1.8.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js
var action_client_wrapper = __webpack_require__(64288);
;// CONCATENATED MODULE: ./actions/edit-in-v0.ts



function __build_action__(action, args) {
  return callServer(action.$$id, args)
}

/* __next_internal_action_entry_do_not_use__ {"b54ca7098d0868021410e04eb2301e6d7d8ac885":"editInV0"} */ var editInV0 = (0,action_client_wrapper/* createServerReference */.$)("b54ca7098d0868021410e04eb2301e6d7d8ac885");



// EXTERNAL MODULE: ../../node_modules/.pnpm/lucide-react@0.359.0_react@18.2.0/node_modules/lucide-react/dist/esm/icons/loader-circle.js
var loader_circle = __webpack_require__(43669);
// EXTERNAL MODULE: ../../node_modules/.pnpm/next@14.3.0-canary.43_@babel+core@7.24.6_@opentelemetry+api@1.8.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-dom.js
var react_dom = __webpack_require__(85544);
// EXTERNAL MODULE: ../../node_modules/.pnpm/sonner@1.2.3_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/sonner/dist/index.mjs
var dist = __webpack_require__(96264);
// EXTERNAL MODULE: ./lib/utils.ts
var utils = __webpack_require__(26910);
// EXTERNAL MODULE: ./registry/new-york/ui/button.tsx
var ui_button = __webpack_require__(37709);
// EXTERNAL MODULE: ./registry/new-york/ui/tooltip.tsx
var tooltip = __webpack_require__(46266);
;// CONCATENATED MODULE: ./components/v0-button.tsx
/* __next_internal_client_entry_do_not_use__ V0Button,V0Logo auto */ 








function V0Tooltip({ size, style = "default", children }) {
    if (size === "default") {
        return /*#__PURE__*/ react_jsx_runtime.jsx(react_jsx_runtime.Fragment, {
            children: children
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(tooltip.Tooltip, {
        children: [
            /*#__PURE__*/ react_jsx_runtime.jsx(tooltip.TooltipTrigger, {
                asChild: true,
                children: style === "new-york" ? /*#__PURE__*/ react_jsx_runtime.jsx("span", {
                    tabIndex: -1,
                    children: children
                }) : /*#__PURE__*/ react_jsx_runtime.jsx(react_jsx_runtime.Fragment, {
                    children: children
                })
            }),
            /*#__PURE__*/ react_jsx_runtime.jsx(tooltip.TooltipContent, {
                children: style === "new-york" ? /*#__PURE__*/ react_jsx_runtime.jsx(react_jsx_runtime.Fragment, {
                    children: "Not available in New York"
                }) : /*#__PURE__*/ react_jsx_runtime.jsx(react_jsx_runtime.Fragment, {
                    children: "Open in v0"
                })
            })
        ]
    });
}
function V0Button({ name, size = "default", disabled, className, ...props }) {
    const [url, setUrl] = react.useState("https://ui.shadcn.com");
    react.useEffect(()=>{
        setUrl(window.location.href);
    }, []);
    return /*#__PURE__*/ react_jsx_runtime.jsx("form", {
        action: async ()=>{
            try {
                const result = await editInV0({
                    name,
                    url
                });
                if (result?.error) {
                    throw new Error(result.error);
                }
                if (result?.url) {
                    const popupOpened = window.open(result.url, "_blank");
                    if (!popupOpened) {
                        dist/* toast */.A.warning("Pop-up window blocked.", {
                            description: "Click the pop-up button in your browser to continue.",
                            duration: 5000
                        });
                    }
                }
            } catch (error) {
                if (error instanceof Error) {
                    dist/* toast */.A.error(error.message);
                }
            }
        },
        children: /*#__PURE__*/ react_jsx_runtime.jsx(Form, {
            size: size,
            className: className,
            disabled: disabled,
            ...props
        })
    });
}
function Form({ disabled, size = "default", className, ...props }) {
    const { pending } = (0,react_dom.useFormStatus)();
    return /*#__PURE__*/ react_jsx_runtime.jsx(V0Tooltip, {
        size: size,
        children: /*#__PURE__*/ react_jsx_runtime.jsx(ui_button.Button, {
            "aria-label": "Open in v0",
            className: (0,utils.cn)("z-50 h-[calc(theme(spacing.7)_-_1px)] gap-1 rounded-[6px] bg-black px-3 text-xs text-white hover:bg-black hover:text-white dark:bg-white dark:text-black", size === "icon" && "h-7 w-7 p-0", className),
            disabled: disabled || pending,
            ...props,
            children: size === "icon" ? /*#__PURE__*/ react_jsx_runtime.jsx(react_jsx_runtime.Fragment, {
                children: pending ? /*#__PURE__*/ react_jsx_runtime.jsx(loader_circle/* default */.Z, {
                    className: "h-3.5 w-3.5 animate-spin"
                }) : /*#__PURE__*/ react_jsx_runtime.jsx(V0Logo, {
                    className: "h-4 w-4"
                })
            }) : /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, {
                children: [
                    pending && /*#__PURE__*/ react_jsx_runtime.jsx(loader_circle/* default */.Z, {
                        className: "h-3.5 w-3.5 animate-spin"
                    }),
                    "Open in ",
                    /*#__PURE__*/ react_jsx_runtime.jsx(V0Logo, {})
                ]
            })
        })
    });
}
function V0Logo({ className, ...props }) {
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("svg", {
        viewBox: "0 0 40 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: (0,utils.cn)("h-5 w-5 text-current", className),
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime.jsx("path", {
                d: "M23.3919 0H32.9188C36.7819 0 39.9136 3.13165 39.9136 6.99475V16.0805H36.0006V6.99475C36.0006 6.90167 35.9969 6.80925 35.9898 6.71766L26.4628 16.079C26.4949 16.08 26.5272 16.0805 26.5595 16.0805H36.0006V19.7762H26.5595C22.6964 19.7762 19.4788 16.6139 19.4788 12.7508V3.68923H23.3919V12.7508C23.3919 12.9253 23.4054 13.0977 23.4316 13.2668L33.1682 3.6995C33.0861 3.6927 33.003 3.68923 32.9188 3.68923H23.3919V0Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ react_jsx_runtime.jsx("path", {
                d: "M13.7688 19.0956L0 3.68759H5.53933L13.6231 12.7337V3.68759H17.7535V17.5746C17.7535 19.6705 15.1654 20.6584 13.7688 19.0956Z",
                fill: "currentColor"
            })
        ]
    });
}


/***/ }),

/***/ 43607:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ trackEvent)
/* harmony export */ });
/* harmony import */ var _vercel_analytics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3176);
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61968);


const eventSchema = zod__WEBPACK_IMPORTED_MODULE_1__.z.object({
    name: zod__WEBPACK_IMPORTED_MODULE_1__.z.enum([
        "copy_npm_command",
        "copy_usage_import_code",
        "copy_usage_code",
        "copy_primitive_code",
        "copy_theme_code",
        "copy_block_code",
        "copy_chunk_code",
        "enable_lift_mode",
        "copy_chart_code",
        "copy_chart_theme",
        "copy_chart_data",
        "copy_color"
    ]),
    // declare type AllowedPropertyValues = string | number | boolean | null
    properties: zod__WEBPACK_IMPORTED_MODULE_1__.z.record(zod__WEBPACK_IMPORTED_MODULE_1__.z.union([
        zod__WEBPACK_IMPORTED_MODULE_1__.z.string(),
        zod__WEBPACK_IMPORTED_MODULE_1__.z.number(),
        zod__WEBPACK_IMPORTED_MODULE_1__.z.boolean(),
        zod__WEBPACK_IMPORTED_MODULE_1__.z.null()
    ])).optional()
});
function trackEvent(input) {
    const event = eventSchema.parse(input);
    if (event) {
        _vercel_analytics__WEBPACK_IMPORTED_MODULE_0__/* ["default"].track */ .ZP.track(event.name, event.properties);
    }
}


/***/ }),

/***/ 73043:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Index: () => (/* binding */ Index)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52356);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
// @ts-nocheck
// This file is autogenerated by scripts/build-registry.ts
// Do not edit this file directly.

const Index = {
    "new-york": {
        "accordion": {
            name: "accordion",
            description: "",
            type: "registry:ui",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/new-york/ui/accordion.tsx",
                    type: "registry:ui",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 14838).then(__webpack_require__.bind(__webpack_require__, 14838))),
            source: "",
            meta: undefined
        },
        "alert": {
            name: "alert",
            description: "",
            type: "registry:ui",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/new-york/ui/alert.tsx",
                    type: "registry:ui",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(60808)]).then(__webpack_require__.bind(__webpack_require__, 60808))),
            source: "",
            meta: undefined
        },
        "alert-dialog": {
            name: "alert-dialog",
            description: "",
            type: "registry:ui",
            registryDependencies: [
                "button"
            ],
            files: [
                {
                    path: "registry/new-york/ui/alert-dialog.tsx",
                    type: "registry:ui",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 21061).then(__webpack_require__.bind(__webpack_require__, 21061))),
            source: "",
            meta: undefined
        },
        "aspect-ratio": {
            name: "aspect-ratio",
            description: "",
            type: "registry:ui",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/new-york/ui/aspect-ratio.tsx",
                    type: "registry:ui",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 60221).then(__webpack_require__.bind(__webpack_require__, 60221))),
            source: "",
            meta: undefined
        },
        "avatar": {
            name: "avatar",
            description: "",
            type: "registry:ui",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/new-york/ui/avatar.tsx",
                    type: "registry:ui",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 73643).then(__webpack_require__.bind(__webpack_require__, 73643))),
            source: "",
            meta: undefined
        },
        "badge": {
            name: "badge",
            description: "",
            type: "registry:ui",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/new-york/ui/badge.tsx",
                    type: "registry:ui",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(94902)]).then(__webpack_require__.bind(__webpack_require__, 94902))),
            source: "",
            meta: undefined
        },
        "breadcrumb": {
            name: "breadcrumb",
            description: "",
            type: "registry:ui",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/new-york/ui/breadcrumb.tsx",
                    type: "registry:ui",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(53134)]).then(__webpack_require__.bind(__webpack_require__, 53134))),
            source: "",
            meta: undefined
        },
        "button": {
            name: "button",
            description: "",
            type: "registry:ui",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/new-york/ui/button.tsx",
                    type: "registry:ui",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(68810)]).then(__webpack_require__.bind(__webpack_require__, 68810))),
            source: "",
            meta: undefined
        },
        "calendar": {
            name: "calendar",
            description: "",
            type: "registry:ui",
            registryDependencies: [
                "button"
            ],
            files: [
                {
                    path: "registry/new-york/ui/calendar.tsx",
                    type: "registry:ui",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 93523).then(__webpack_require__.bind(__webpack_require__, 93523))),
            source: "",
            meta: undefined
        },
        "card": {
            name: "card",
            description: "",
            type: "registry:ui",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/new-york/ui/card.tsx",
                    type: "registry:ui",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(57894)]).then(__webpack_require__.bind(__webpack_require__, 57894))),
            source: "",
            meta: undefined
        },
        "carousel": {
            name: "carousel",
            description: "",
            type: "registry:ui",
            registryDependencies: [
                "button"
            ],
            files: [
                {
                    path: "registry/new-york/ui/carousel.tsx",
                    type: "registry:ui",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 139).then(__webpack_require__.bind(__webpack_require__, 139))),
            source: "",
            meta: undefined
        },
        "chart": {
            name: "chart",
            description: "",
            type: "registry:ui",
            registryDependencies: [
                "card"
            ],
            files: [
                {
                    path: "registry/new-york/ui/chart.tsx",
                    type: "registry:ui",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 21610).then(__webpack_require__.bind(__webpack_require__, 21610))),
            source: "",
            meta: undefined
        },
        "checkbox": {
            name: "checkbox",
            description: "",
            type: "registry:ui",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/new-york/ui/checkbox.tsx",
                    type: "registry:ui",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 76123).then(__webpack_require__.bind(__webpack_require__, 76123))),
            source: "",
            meta: undefined
        },
        "collapsible": {
            name: "collapsible",
            description: "",
            type: "registry:ui",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/new-york/ui/collapsible.tsx",
                    type: "registry:ui",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 44187).then(__webpack_require__.bind(__webpack_require__, 44187))),
            source: "",
            meta: undefined
        },
        "command": {
            name: "command",
            description: "",
            type: "registry:ui",
            registryDependencies: [
                "dialog"
            ],
            files: [
                {
                    path: "registry/new-york/ui/command.tsx",
                    type: "registry:ui",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 82194).then(__webpack_require__.bind(__webpack_require__, 82194))),
            source: "",
            meta: undefined
        },
        "context-menu": {
            name: "context-menu",
            description: "",
            type: "registry:ui",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/new-york/ui/context-menu.tsx",
                    type: "registry:ui",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 53189).then(__webpack_require__.bind(__webpack_require__, 53189))),
            source: "",
            meta: undefined
        },
        "dialog": {
            name: "dialog",
            description: "",
            type: "registry:ui",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/new-york/ui/dialog.tsx",
                    type: "registry:ui",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 56821).then(__webpack_require__.bind(__webpack_require__, 56821))),
            source: "",
            meta: undefined
        },
        "drawer": {
            name: "drawer",
            description: "",
            type: "registry:ui",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/new-york/ui/drawer.tsx",
                    type: "registry:ui",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 48416).then(__webpack_require__.bind(__webpack_require__, 48416))),
            source: "",
            meta: undefined
        },
        "dropdown-menu": {
            name: "dropdown-menu",
            description: "",
            type: "registry:ui",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/new-york/ui/dropdown-menu.tsx",
                    type: "registry:ui",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 65892).then(__webpack_require__.bind(__webpack_require__, 65892))),
            source: "",
            meta: undefined
        },
        "form": {
            name: "form",
            description: "",
            type: "registry:ui",
            registryDependencies: [
                "button",
                "label"
            ],
            files: [
                {
                    path: "registry/new-york/ui/form.tsx",
                    type: "registry:ui",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 60633).then(__webpack_require__.bind(__webpack_require__, 60633))),
            source: "",
            meta: undefined
        },
        "hover-card": {
            name: "hover-card",
            description: "",
            type: "registry:ui",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/new-york/ui/hover-card.tsx",
                    type: "registry:ui",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 45828).then(__webpack_require__.bind(__webpack_require__, 45828))),
            source: "",
            meta: undefined
        },
        "input": {
            name: "input",
            description: "",
            type: "registry:ui",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/new-york/ui/input.tsx",
                    type: "registry:ui",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(3142)]).then(__webpack_require__.bind(__webpack_require__, 3142))),
            source: "",
            meta: undefined
        },
        "input-otp": {
            name: "input-otp",
            description: "",
            type: "registry:ui",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/new-york/ui/input-otp.tsx",
                    type: "registry:ui",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 97574).then(__webpack_require__.bind(__webpack_require__, 97574))),
            source: "",
            meta: undefined
        },
        "label": {
            name: "label",
            description: "",
            type: "registry:ui",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/new-york/ui/label.tsx",
                    type: "registry:ui",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 50080).then(__webpack_require__.bind(__webpack_require__, 50080))),
            source: "",
            meta: undefined
        },
        "menubar": {
            name: "menubar",
            description: "",
            type: "registry:ui",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/new-york/ui/menubar.tsx",
                    type: "registry:ui",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 22094).then(__webpack_require__.bind(__webpack_require__, 22094))),
            source: "",
            meta: undefined
        },
        "navigation-menu": {
            name: "navigation-menu",
            description: "",
            type: "registry:ui",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/new-york/ui/navigation-menu.tsx",
                    type: "registry:ui",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(41309), __webpack_require__.e(47849)]).then(__webpack_require__.bind(__webpack_require__, 47930))),
            source: "",
            meta: undefined
        },
        "pagination": {
            name: "pagination",
            description: "",
            type: "registry:ui",
            registryDependencies: [
                "button"
            ],
            files: [
                {
                    path: "registry/new-york/ui/pagination.tsx",
                    type: "registry:ui",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(96946)]).then(__webpack_require__.bind(__webpack_require__, 96946))),
            source: "",
            meta: undefined
        },
        "popover": {
            name: "popover",
            description: "",
            type: "registry:ui",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/new-york/ui/popover.tsx",
                    type: "registry:ui",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 55686).then(__webpack_require__.bind(__webpack_require__, 55686))),
            source: "",
            meta: undefined
        },
        "progress": {
            name: "progress",
            description: "",
            type: "registry:ui",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/new-york/ui/progress.tsx",
                    type: "registry:ui",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 18699).then(__webpack_require__.bind(__webpack_require__, 18699))),
            source: "",
            meta: undefined
        },
        "radio-group": {
            name: "radio-group",
            description: "",
            type: "registry:ui",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/new-york/ui/radio-group.tsx",
                    type: "registry:ui",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 94542).then(__webpack_require__.bind(__webpack_require__, 94542))),
            source: "",
            meta: undefined
        },
        "resizable": {
            name: "resizable",
            description: "",
            type: "registry:ui",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/new-york/ui/resizable.tsx",
                    type: "registry:ui",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 28968).then(__webpack_require__.bind(__webpack_require__, 28968))),
            source: "",
            meta: undefined
        },
        "scroll-area": {
            name: "scroll-area",
            description: "",
            type: "registry:ui",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/new-york/ui/scroll-area.tsx",
                    type: "registry:ui",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 96454).then(__webpack_require__.bind(__webpack_require__, 96454))),
            source: "",
            meta: undefined
        },
        "select": {
            name: "select",
            description: "",
            type: "registry:ui",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/new-york/ui/select.tsx",
                    type: "registry:ui",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 77003).then(__webpack_require__.bind(__webpack_require__, 77003))),
            source: "",
            meta: undefined
        },
        "separator": {
            name: "separator",
            description: "",
            type: "registry:ui",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/new-york/ui/separator.tsx",
                    type: "registry:ui",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 78243).then(__webpack_require__.bind(__webpack_require__, 78243))),
            source: "",
            meta: undefined
        },
        "sheet": {
            name: "sheet",
            description: "",
            type: "registry:ui",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/new-york/ui/sheet.tsx",
                    type: "registry:ui",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 25387).then(__webpack_require__.bind(__webpack_require__, 25387))),
            source: "",
            meta: undefined
        },
        "sidebar": {
            name: "sidebar",
            description: "",
            type: "registry:ui",
            registryDependencies: [
                "button",
                "separator",
                "sheet",
                "tooltip",
                "input",
                "use-mobile",
                "skeleton"
            ],
            files: [
                {
                    path: "registry/new-york/ui/sidebar.tsx",
                    type: "registry:ui",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 98093).then(__webpack_require__.bind(__webpack_require__, 98093))),
            source: "",
            meta: undefined
        },
        "skeleton": {
            name: "skeleton",
            description: "",
            type: "registry:ui",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/new-york/ui/skeleton.tsx",
                    type: "registry:ui",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(90684)]).then(__webpack_require__.bind(__webpack_require__, 90684))),
            source: "",
            meta: undefined
        },
        "slider": {
            name: "slider",
            description: "",
            type: "registry:ui",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/new-york/ui/slider.tsx",
                    type: "registry:ui",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 80009).then(__webpack_require__.bind(__webpack_require__, 80009))),
            source: "",
            meta: undefined
        },
        "sonner": {
            name: "sonner",
            description: "",
            type: "registry:ui",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/new-york/ui/sonner.tsx",
                    type: "registry:ui",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 85378).then(__webpack_require__.bind(__webpack_require__, 85378))),
            source: "",
            meta: undefined
        },
        "switch": {
            name: "switch",
            description: "",
            type: "registry:ui",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/new-york/ui/switch.tsx",
                    type: "registry:ui",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 51209).then(__webpack_require__.bind(__webpack_require__, 51209))),
            source: "",
            meta: undefined
        },
        "table": {
            name: "table",
            description: "",
            type: "registry:ui",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/new-york/ui/table.tsx",
                    type: "registry:ui",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(66822)]).then(__webpack_require__.bind(__webpack_require__, 66822))),
            source: "",
            meta: undefined
        },
        "tabs": {
            name: "tabs",
            description: "",
            type: "registry:ui",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/new-york/ui/tabs.tsx",
                    type: "registry:ui",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 68126).then(__webpack_require__.bind(__webpack_require__, 68126))),
            source: "",
            meta: undefined
        },
        "textarea": {
            name: "textarea",
            description: "",
            type: "registry:ui",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/new-york/ui/textarea.tsx",
                    type: "registry:ui",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(6349)]).then(__webpack_require__.bind(__webpack_require__, 6349))),
            source: "",
            meta: undefined
        },
        "toast": {
            name: "toast",
            description: "",
            type: "registry:ui",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/new-york/ui/toast.tsx",
                    type: "registry:ui",
                    target: ""
                },
                {
                    path: "registry/new-york/hooks/use-toast.ts",
                    type: "registry:hook",
                    target: ""
                },
                {
                    path: "registry/new-york/ui/toaster.tsx",
                    type: "registry:ui",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 57743).then(__webpack_require__.bind(__webpack_require__, 57743))),
            source: "",
            meta: undefined
        },
        "toggle": {
            name: "toggle",
            description: "",
            type: "registry:ui",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/new-york/ui/toggle.tsx",
                    type: "registry:ui",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 14047).then(__webpack_require__.bind(__webpack_require__, 14047))),
            source: "",
            meta: undefined
        },
        "toggle-group": {
            name: "toggle-group",
            description: "",
            type: "registry:ui",
            registryDependencies: [
                "toggle"
            ],
            files: [
                {
                    path: "registry/new-york/ui/toggle-group.tsx",
                    type: "registry:ui",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 90064).then(__webpack_require__.bind(__webpack_require__, 90064))),
            source: "",
            meta: undefined
        },
        "tooltip": {
            name: "tooltip",
            description: "",
            type: "registry:ui",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/new-york/ui/tooltip.tsx",
                    type: "registry:ui",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 12764).then(__webpack_require__.bind(__webpack_require__, 12764))),
            source: "",
            meta: undefined
        },
        "sidebar-01": {
            name: "sidebar-01",
            description: "A simple sidebar with navigation grouped by section.",
            type: "registry:block",
            registryDependencies: [
                "sidebar",
                "breadcrumb",
                "separator",
                "label",
                "dropdown-menu"
            ],
            files: [
                {
                    path: "registry/new-york/blocks/sidebar-01/page.tsx",
                    type: "registry:page",
                    target: "app/dashboard/page.tsx"
                },
                {
                    path: "registry/new-york/blocks/sidebar-01/components/app-sidebar.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/new-york/blocks/sidebar-01/components/search-form.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/new-york/blocks/sidebar-01/components/version-switcher.tsx",
                    type: "registry:component",
                    target: ""
                }
            ],
            categories: [
                "sidebar",
                "dashboard"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(12924)]).then(__webpack_require__.bind(__webpack_require__, 12924))),
            source: "__registry__/new-york/blocks/sidebar-01/page.tsx",
            meta: undefined
        },
        "sidebar-02": {
            name: "sidebar-02",
            description: "A sidebar with collapsible sections.",
            type: "registry:block",
            registryDependencies: [
                "sidebar",
                "breadcrumb",
                "separator",
                "label",
                "dropdown-menu"
            ],
            files: [
                {
                    path: "registry/new-york/blocks/sidebar-02/page.tsx",
                    type: "registry:page",
                    target: "app/dashboard/page.tsx"
                },
                {
                    path: "registry/new-york/blocks/sidebar-02/components/app-sidebar.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/new-york/blocks/sidebar-02/components/search-form.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/new-york/blocks/sidebar-02/components/version-switcher.tsx",
                    type: "registry:component",
                    target: ""
                }
            ],
            categories: [
                "sidebar",
                "dashboard"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(81703)]).then(__webpack_require__.bind(__webpack_require__, 81703))),
            source: "__registry__/new-york/blocks/sidebar-02/page.tsx",
            meta: undefined
        },
        "sidebar-03": {
            name: "sidebar-03",
            description: "A sidebar with submenus.",
            type: "registry:block",
            registryDependencies: [
                "sidebar",
                "breadcrumb"
            ],
            files: [
                {
                    path: "registry/new-york/blocks/sidebar-03/page.tsx",
                    type: "registry:page",
                    target: "app/dashboard/page.tsx"
                },
                {
                    path: "registry/new-york/blocks/sidebar-03/components/app-sidebar.tsx",
                    type: "registry:component",
                    target: ""
                }
            ],
            categories: [
                "sidebar",
                "dashboard"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(26242)]).then(__webpack_require__.bind(__webpack_require__, 36422))),
            source: "__registry__/new-york/blocks/sidebar-03/page.tsx",
            meta: undefined
        },
        "sidebar-04": {
            name: "sidebar-04",
            description: "A floating sidebar with submenus.",
            type: "registry:block",
            registryDependencies: [
                "sidebar",
                "breadcrumb",
                "separator"
            ],
            files: [
                {
                    path: "registry/new-york/blocks/sidebar-04/page.tsx",
                    type: "registry:page",
                    target: "app/dashboard/page.tsx"
                },
                {
                    path: "registry/new-york/blocks/sidebar-04/components/app-sidebar.tsx",
                    type: "registry:component",
                    target: ""
                }
            ],
            categories: [
                "sidebar",
                "dashboard"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(48125)]).then(__webpack_require__.bind(__webpack_require__, 48125))),
            source: "__registry__/new-york/blocks/sidebar-04/page.tsx",
            meta: undefined
        },
        "sidebar-05": {
            name: "sidebar-05",
            description: "A sidebar with collapsible submenus.",
            type: "registry:block",
            registryDependencies: [
                "sidebar",
                "breadcrumb",
                "separator",
                "label",
                "collapsible"
            ],
            files: [
                {
                    path: "registry/new-york/blocks/sidebar-05/page.tsx",
                    type: "registry:page",
                    target: "app/dashboard/page.tsx"
                },
                {
                    path: "registry/new-york/blocks/sidebar-05/components/app-sidebar.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/new-york/blocks/sidebar-05/components/search-form.tsx",
                    type: "registry:component",
                    target: ""
                }
            ],
            categories: [
                "sidebar",
                "dashboard"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(2012)]).then(__webpack_require__.bind(__webpack_require__, 2012))),
            source: "__registry__/new-york/blocks/sidebar-05/page.tsx",
            meta: undefined
        },
        "sidebar-06": {
            name: "sidebar-06",
            description: "A sidebar with submenus as dropdowns.",
            type: "registry:block",
            registryDependencies: [
                "sidebar",
                "breadcrumb",
                "separator",
                "card",
                "dropdown-menu"
            ],
            files: [
                {
                    path: "registry/new-york/blocks/sidebar-06/page.tsx",
                    type: "registry:page",
                    target: "app/dashboard/page.tsx"
                },
                {
                    path: "registry/new-york/blocks/sidebar-06/components/app-sidebar.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/new-york/blocks/sidebar-06/components/nav-main.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/new-york/blocks/sidebar-06/components/sidebar-opt-in-form.tsx",
                    type: "registry:component",
                    target: ""
                }
            ],
            categories: [
                "sidebar",
                "dashboard"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(19524)]).then(__webpack_require__.bind(__webpack_require__, 19524))),
            source: "__registry__/new-york/blocks/sidebar-06/page.tsx",
            meta: undefined
        },
        "sidebar-07": {
            name: "sidebar-07",
            description: "A sidebar that collapses to icons.",
            type: "registry:block",
            registryDependencies: [
                "sidebar",
                "breadcrumb",
                "separator",
                "collapsible",
                "dropdown-menu",
                "avatar"
            ],
            files: [
                {
                    path: "registry/new-york/blocks/sidebar-07/page.tsx",
                    type: "registry:page",
                    target: "app/dashboard/page.tsx"
                },
                {
                    path: "registry/new-york/blocks/sidebar-07/components/app-sidebar.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/new-york/blocks/sidebar-07/components/nav-main.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/new-york/blocks/sidebar-07/components/nav-projects.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/new-york/blocks/sidebar-07/components/nav-user.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/new-york/blocks/sidebar-07/components/team-switcher.tsx",
                    type: "registry:component",
                    target: ""
                }
            ],
            categories: [
                "sidebar",
                "dashboard"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(70366)]).then(__webpack_require__.bind(__webpack_require__, 70366))),
            source: "__registry__/new-york/blocks/sidebar-07/page.tsx",
            meta: undefined
        },
        "sidebar-08": {
            name: "sidebar-08",
            description: "An inset sidebar with secondary navigation.",
            type: "registry:block",
            registryDependencies: [
                "sidebar",
                "breadcrumb",
                "separator",
                "collapsible",
                "dropdown-menu",
                "avatar"
            ],
            files: [
                {
                    path: "registry/new-york/blocks/sidebar-08/page.tsx",
                    type: "registry:page",
                    target: "app/dashboard/page.tsx"
                },
                {
                    path: "registry/new-york/blocks/sidebar-08/components/app-sidebar.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/new-york/blocks/sidebar-08/components/nav-main.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/new-york/blocks/sidebar-08/components/nav-projects.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/new-york/blocks/sidebar-08/components/nav-secondary.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/new-york/blocks/sidebar-08/components/nav-user.tsx",
                    type: "registry:component",
                    target: ""
                }
            ],
            categories: [
                "sidebar",
                "dashboard"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(4832)]).then(__webpack_require__.bind(__webpack_require__, 4832))),
            source: "__registry__/new-york/blocks/sidebar-08/page.tsx",
            meta: undefined
        },
        "sidebar-09": {
            name: "sidebar-09",
            description: "Collapsible nested sidebars.",
            type: "registry:block",
            registryDependencies: [
                "sidebar",
                "breadcrumb",
                "separator",
                "collapsible",
                "dropdown-menu",
                "avatar",
                "switch"
            ],
            files: [
                {
                    path: "registry/new-york/blocks/sidebar-09/page.tsx",
                    type: "registry:page",
                    target: "app/dashboard/page.tsx"
                },
                {
                    path: "registry/new-york/blocks/sidebar-09/components/app-sidebar.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/new-york/blocks/sidebar-09/components/nav-user.tsx",
                    type: "registry:component",
                    target: ""
                }
            ],
            categories: [
                "sidebar",
                "dashboard"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(54968)]).then(__webpack_require__.bind(__webpack_require__, 54968))),
            source: "__registry__/new-york/blocks/sidebar-09/page.tsx",
            meta: undefined
        },
        "sidebar-10": {
            name: "sidebar-10",
            description: "A sidebar in a popover.",
            type: "registry:block",
            registryDependencies: [
                "sidebar",
                "breadcrumb",
                "separator",
                "popover",
                "collapsible",
                "dropdown-menu"
            ],
            files: [
                {
                    path: "registry/new-york/blocks/sidebar-10/page.tsx",
                    type: "registry:page",
                    target: "app/dashboard/page.tsx"
                },
                {
                    path: "registry/new-york/blocks/sidebar-10/components/app-sidebar.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/new-york/blocks/sidebar-10/components/nav-actions.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/new-york/blocks/sidebar-10/components/nav-favorites.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/new-york/blocks/sidebar-10/components/nav-main.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/new-york/blocks/sidebar-10/components/nav-secondary.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/new-york/blocks/sidebar-10/components/nav-workspaces.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/new-york/blocks/sidebar-10/components/team-switcher.tsx",
                    type: "registry:component",
                    target: ""
                }
            ],
            categories: [
                "sidebar",
                "dashboard"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(59239)]).then(__webpack_require__.bind(__webpack_require__, 59239))),
            source: "__registry__/new-york/blocks/sidebar-10/page.tsx",
            meta: undefined
        },
        "sidebar-11": {
            name: "sidebar-11",
            description: "A sidebar with a collapsible file tree.",
            type: "registry:block",
            registryDependencies: [
                "sidebar",
                "breadcrumb",
                "separator",
                "collapsible"
            ],
            files: [
                {
                    path: "registry/new-york/blocks/sidebar-11/page.tsx",
                    type: "registry:page",
                    target: "app/dashboard/page.tsx"
                },
                {
                    path: "registry/new-york/blocks/sidebar-11/components/app-sidebar.tsx",
                    type: "registry:component",
                    target: ""
                }
            ],
            categories: [
                "sidebar",
                "dashboard"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(23957)]).then(__webpack_require__.bind(__webpack_require__, 17195))),
            source: "__registry__/new-york/blocks/sidebar-11/page.tsx",
            meta: undefined
        },
        "sidebar-12": {
            name: "sidebar-12",
            description: "A sidebar with a calendar.",
            type: "registry:block",
            registryDependencies: [
                "sidebar",
                "breadcrumb",
                "separator",
                "collapsible",
                "calendar",
                "dropdown-menu",
                "avatar"
            ],
            files: [
                {
                    path: "registry/new-york/blocks/sidebar-12/page.tsx",
                    type: "registry:page",
                    target: "app/dashboard/page.tsx"
                },
                {
                    path: "registry/new-york/blocks/sidebar-12/components/app-sidebar.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/new-york/blocks/sidebar-12/components/calendars.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/new-york/blocks/sidebar-12/components/date-picker.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/new-york/blocks/sidebar-12/components/nav-user.tsx",
                    type: "registry:component",
                    target: ""
                }
            ],
            categories: [
                "sidebar",
                "dashboard"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(7713)]).then(__webpack_require__.bind(__webpack_require__, 7713))),
            source: "__registry__/new-york/blocks/sidebar-12/page.tsx",
            meta: undefined
        },
        "sidebar-13": {
            name: "sidebar-13",
            description: "A sidebar in a dialog.",
            type: "registry:block",
            registryDependencies: [
                "sidebar",
                "breadcrumb",
                "button",
                "dialog"
            ],
            files: [
                {
                    path: "registry/new-york/blocks/sidebar-13/page.tsx",
                    type: "registry:page",
                    target: "app/dashboard/page.tsx"
                },
                {
                    path: "registry/new-york/blocks/sidebar-13/components/settings-dialog.tsx",
                    type: "registry:component",
                    target: ""
                }
            ],
            categories: [
                "sidebar",
                "dashboard"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 1150).then(__webpack_require__.bind(__webpack_require__, 1150))),
            source: "__registry__/new-york/blocks/sidebar-13/page.tsx",
            meta: undefined
        },
        "sidebar-14": {
            name: "sidebar-14",
            description: "A sidebar on the right.",
            type: "registry:block",
            registryDependencies: [
                "sidebar",
                "breadcrumb"
            ],
            files: [
                {
                    path: "registry/new-york/blocks/sidebar-14/page.tsx",
                    type: "registry:page",
                    target: "app/dashboard/page.tsx"
                },
                {
                    path: "registry/new-york/blocks/sidebar-14/components/app-sidebar.tsx",
                    type: "registry:component",
                    target: ""
                }
            ],
            categories: [
                "sidebar",
                "dashboard"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(77701)]).then(__webpack_require__.bind(__webpack_require__, 77701))),
            source: "__registry__/new-york/blocks/sidebar-14/page.tsx",
            meta: undefined
        },
        "sidebar-15": {
            name: "sidebar-15",
            description: "A left and right sidebar.",
            type: "registry:block",
            registryDependencies: [
                "sidebar",
                "breadcrumb",
                "separator",
                "popover",
                "collapsible",
                "dropdown-menu",
                "calendar",
                "avatar"
            ],
            files: [
                {
                    path: "registry/new-york/blocks/sidebar-15/page.tsx",
                    type: "registry:page",
                    target: "app/dashboard/page.tsx"
                },
                {
                    path: "registry/new-york/blocks/sidebar-15/components/calendars.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/new-york/blocks/sidebar-15/components/date-picker.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/new-york/blocks/sidebar-15/components/nav-favorites.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/new-york/blocks/sidebar-15/components/nav-main.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/new-york/blocks/sidebar-15/components/nav-secondary.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/new-york/blocks/sidebar-15/components/nav-user.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/new-york/blocks/sidebar-15/components/nav-workspaces.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/new-york/blocks/sidebar-15/components/sidebar-left.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/new-york/blocks/sidebar-15/components/sidebar-right.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/new-york/blocks/sidebar-15/components/team-switcher.tsx",
                    type: "registry:component",
                    target: ""
                }
            ],
            categories: [
                "sidebar",
                "dashboard"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(27736)]).then(__webpack_require__.bind(__webpack_require__, 27736))),
            source: "__registry__/new-york/blocks/sidebar-15/page.tsx",
            meta: undefined
        },
        "login-01": {
            name: "login-01",
            description: "A simple login form.",
            type: "registry:block",
            registryDependencies: [
                "button",
                "card",
                "input",
                "label"
            ],
            files: [
                {
                    path: "registry/new-york/blocks/login-01/page.tsx",
                    type: "registry:page",
                    target: "app/login/page.tsx"
                },
                {
                    path: "registry/new-york/blocks/login-01/components/login-form.tsx",
                    type: "registry:component",
                    target: ""
                }
            ],
            categories: [
                "authentication",
                "login"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(95382)]).then(__webpack_require__.bind(__webpack_require__, 95382))),
            source: "__registry__/new-york/blocks/login-01/page.tsx",
            meta: undefined
        },
        "login-02": {
            name: "login-02",
            description: "A two column login page with a cover image.",
            type: "registry:block",
            registryDependencies: [
                "button",
                "card",
                "input",
                "label"
            ],
            files: [
                {
                    path: "registry/new-york/blocks/login-02/page.tsx",
                    type: "registry:page",
                    target: "app/login/page.tsx"
                },
                {
                    path: "registry/new-york/blocks/login-02/components/login-form.tsx",
                    type: "registry:component",
                    target: ""
                }
            ],
            categories: [
                "authentication",
                "login"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(66162)]).then(__webpack_require__.bind(__webpack_require__, 66162))),
            source: "__registry__/new-york/blocks/login-02/page.tsx",
            meta: undefined
        },
        "login-03": {
            name: "login-03",
            description: "A login page with a muted background color.",
            type: "registry:block",
            registryDependencies: [
                "button",
                "card",
                "input",
                "label"
            ],
            files: [
                {
                    path: "registry/new-york/blocks/login-03/page.tsx",
                    type: "registry:page",
                    target: "app/login/page.tsx"
                },
                {
                    path: "registry/new-york/blocks/login-03/components/login-form.tsx",
                    type: "registry:component",
                    target: ""
                }
            ],
            categories: [
                "authentication",
                "login"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(40716)]).then(__webpack_require__.bind(__webpack_require__, 40716))),
            source: "__registry__/new-york/blocks/login-03/page.tsx",
            meta: undefined
        },
        "login-04": {
            name: "login-04",
            description: "A login page with form and image.",
            type: "registry:block",
            registryDependencies: [
                "button",
                "card",
                "input",
                "label"
            ],
            files: [
                {
                    path: "registry/new-york/blocks/login-04/page.tsx",
                    type: "registry:page",
                    target: "app/login/page.tsx"
                },
                {
                    path: "registry/new-york/blocks/login-04/components/login-form.tsx",
                    type: "registry:component",
                    target: ""
                }
            ],
            categories: [
                "authentication",
                "login"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(7292)]).then(__webpack_require__.bind(__webpack_require__, 7292))),
            source: "__registry__/new-york/blocks/login-04/page.tsx",
            meta: undefined
        },
        "login-05": {
            name: "login-05",
            description: "A simple email-only login page.",
            type: "registry:block",
            registryDependencies: [
                "button",
                "card",
                "input",
                "label"
            ],
            files: [
                {
                    path: "registry/new-york/blocks/login-05/page.tsx",
                    type: "registry:page",
                    target: "app/login/page.tsx"
                },
                {
                    path: "registry/new-york/blocks/login-05/components/login-form.tsx",
                    type: "registry:component",
                    target: ""
                }
            ],
            categories: [
                "authentication",
                "login"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(23757)]).then(__webpack_require__.bind(__webpack_require__, 23757))),
            source: "__registry__/new-york/blocks/login-05/page.tsx",
            meta: undefined
        },
        "chart-area-axes": {
            name: "chart-area-axes",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/new-york/charts/chart-area-axes.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-area"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 34909).then(__webpack_require__.bind(__webpack_require__, 34909))),
            source: "__registry__/new-york/charts/chart-area-axes.tsx",
            meta: undefined
        },
        "chart-area-default": {
            name: "chart-area-default",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/new-york/charts/chart-area-default.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-area"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 29451).then(__webpack_require__.bind(__webpack_require__, 29451))),
            source: "__registry__/new-york/charts/chart-area-default.tsx",
            meta: undefined
        },
        "chart-area-gradient": {
            name: "chart-area-gradient",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/new-york/charts/chart-area-gradient.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-area"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 59222).then(__webpack_require__.bind(__webpack_require__, 59222))),
            source: "__registry__/new-york/charts/chart-area-gradient.tsx",
            meta: undefined
        },
        "chart-area-icons": {
            name: "chart-area-icons",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/new-york/charts/chart-area-icons.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-area"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 91037).then(__webpack_require__.bind(__webpack_require__, 91037))),
            source: "__registry__/new-york/charts/chart-area-icons.tsx",
            meta: undefined
        },
        "chart-area-interactive": {
            name: "chart-area-interactive",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart",
                "select"
            ],
            files: [
                {
                    path: "registry/new-york/charts/chart-area-interactive.tsx",
                    type: "registry:component",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-area"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 15224).then(__webpack_require__.bind(__webpack_require__, 15224))),
            source: "__registry__/new-york/charts/chart-area-interactive.tsx",
            meta: undefined
        },
        "chart-area-legend": {
            name: "chart-area-legend",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/new-york/charts/chart-area-legend.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-area"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 17339).then(__webpack_require__.bind(__webpack_require__, 17339))),
            source: "__registry__/new-york/charts/chart-area-legend.tsx",
            meta: undefined
        },
        "chart-area-linear": {
            name: "chart-area-linear",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/new-york/charts/chart-area-linear.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-area"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 17758).then(__webpack_require__.bind(__webpack_require__, 17758))),
            source: "__registry__/new-york/charts/chart-area-linear.tsx",
            meta: undefined
        },
        "chart-area-stacked-expand": {
            name: "chart-area-stacked-expand",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/new-york/charts/chart-area-stacked-expand.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-area"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 83236).then(__webpack_require__.bind(__webpack_require__, 83236))),
            source: "__registry__/new-york/charts/chart-area-stacked-expand.tsx",
            meta: undefined
        },
        "chart-area-stacked": {
            name: "chart-area-stacked",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/new-york/charts/chart-area-stacked.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-area"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 12148).then(__webpack_require__.bind(__webpack_require__, 12148))),
            source: "__registry__/new-york/charts/chart-area-stacked.tsx",
            meta: undefined
        },
        "chart-area-step": {
            name: "chart-area-step",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/new-york/charts/chart-area-step.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-area"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 92932).then(__webpack_require__.bind(__webpack_require__, 92932))),
            source: "__registry__/new-york/charts/chart-area-step.tsx",
            meta: undefined
        },
        "chart-bar-active": {
            name: "chart-bar-active",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/new-york/charts/chart-bar-active.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-bar"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 4641).then(__webpack_require__.bind(__webpack_require__, 4641))),
            source: "__registry__/new-york/charts/chart-bar-active.tsx",
            meta: undefined
        },
        "chart-bar-default": {
            name: "chart-bar-default",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/new-york/charts/chart-bar-default.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-bar"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 1339).then(__webpack_require__.bind(__webpack_require__, 1339))),
            source: "__registry__/new-york/charts/chart-bar-default.tsx",
            meta: undefined
        },
        "chart-bar-horizontal": {
            name: "chart-bar-horizontal",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/new-york/charts/chart-bar-horizontal.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-bar"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 64999).then(__webpack_require__.bind(__webpack_require__, 64999))),
            source: "__registry__/new-york/charts/chart-bar-horizontal.tsx",
            meta: undefined
        },
        "chart-bar-interactive": {
            name: "chart-bar-interactive",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/new-york/charts/chart-bar-interactive.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-bar"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 4490).then(__webpack_require__.bind(__webpack_require__, 4490))),
            source: "__registry__/new-york/charts/chart-bar-interactive.tsx",
            meta: undefined
        },
        "chart-bar-label-custom": {
            name: "chart-bar-label-custom",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/new-york/charts/chart-bar-label-custom.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-bar"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 20276).then(__webpack_require__.bind(__webpack_require__, 20276))),
            source: "__registry__/new-york/charts/chart-bar-label-custom.tsx",
            meta: undefined
        },
        "chart-bar-label": {
            name: "chart-bar-label",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/new-york/charts/chart-bar-label.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-bar"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 72129).then(__webpack_require__.bind(__webpack_require__, 72129))),
            source: "__registry__/new-york/charts/chart-bar-label.tsx",
            meta: undefined
        },
        "chart-bar-mixed": {
            name: "chart-bar-mixed",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/new-york/charts/chart-bar-mixed.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-bar"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 39058).then(__webpack_require__.bind(__webpack_require__, 39058))),
            source: "__registry__/new-york/charts/chart-bar-mixed.tsx",
            meta: undefined
        },
        "chart-bar-multiple": {
            name: "chart-bar-multiple",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/new-york/charts/chart-bar-multiple.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-bar"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 96944).then(__webpack_require__.bind(__webpack_require__, 96944))),
            source: "__registry__/new-york/charts/chart-bar-multiple.tsx",
            meta: undefined
        },
        "chart-bar-negative": {
            name: "chart-bar-negative",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/new-york/charts/chart-bar-negative.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-bar"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 34389).then(__webpack_require__.bind(__webpack_require__, 34389))),
            source: "__registry__/new-york/charts/chart-bar-negative.tsx",
            meta: undefined
        },
        "chart-bar-stacked": {
            name: "chart-bar-stacked",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/new-york/charts/chart-bar-stacked.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-bar"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 13741).then(__webpack_require__.bind(__webpack_require__, 13741))),
            source: "__registry__/new-york/charts/chart-bar-stacked.tsx",
            meta: undefined
        },
        "chart-line-default": {
            name: "chart-line-default",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/new-york/charts/chart-line-default.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-line"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 78687).then(__webpack_require__.bind(__webpack_require__, 78687))),
            source: "__registry__/new-york/charts/chart-line-default.tsx",
            meta: undefined
        },
        "chart-line-dots-colors": {
            name: "chart-line-dots-colors",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/new-york/charts/chart-line-dots-colors.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-line"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 75603).then(__webpack_require__.bind(__webpack_require__, 75603))),
            source: "__registry__/new-york/charts/chart-line-dots-colors.tsx",
            meta: undefined
        },
        "chart-line-dots-custom": {
            name: "chart-line-dots-custom",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/new-york/charts/chart-line-dots-custom.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-line"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 16099).then(__webpack_require__.bind(__webpack_require__, 16099))),
            source: "__registry__/new-york/charts/chart-line-dots-custom.tsx",
            meta: undefined
        },
        "chart-line-dots": {
            name: "chart-line-dots",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/new-york/charts/chart-line-dots.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-line"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 30392).then(__webpack_require__.bind(__webpack_require__, 30392))),
            source: "__registry__/new-york/charts/chart-line-dots.tsx",
            meta: undefined
        },
        "chart-line-interactive": {
            name: "chart-line-interactive",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/new-york/charts/chart-line-interactive.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-line"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 66038).then(__webpack_require__.bind(__webpack_require__, 66038))),
            source: "__registry__/new-york/charts/chart-line-interactive.tsx",
            meta: undefined
        },
        "chart-line-label-custom": {
            name: "chart-line-label-custom",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/new-york/charts/chart-line-label-custom.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-line"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 72827).then(__webpack_require__.bind(__webpack_require__, 72827))),
            source: "__registry__/new-york/charts/chart-line-label-custom.tsx",
            meta: undefined
        },
        "chart-line-label": {
            name: "chart-line-label",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/new-york/charts/chart-line-label.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-line"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 67899).then(__webpack_require__.bind(__webpack_require__, 67899))),
            source: "__registry__/new-york/charts/chart-line-label.tsx",
            meta: undefined
        },
        "chart-line-linear": {
            name: "chart-line-linear",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/new-york/charts/chart-line-linear.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-line"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 26141).then(__webpack_require__.bind(__webpack_require__, 26141))),
            source: "__registry__/new-york/charts/chart-line-linear.tsx",
            meta: undefined
        },
        "chart-line-multiple": {
            name: "chart-line-multiple",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/new-york/charts/chart-line-multiple.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-line"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 19483).then(__webpack_require__.bind(__webpack_require__, 19483))),
            source: "__registry__/new-york/charts/chart-line-multiple.tsx",
            meta: undefined
        },
        "chart-line-step": {
            name: "chart-line-step",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/new-york/charts/chart-line-step.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-line"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 58682).then(__webpack_require__.bind(__webpack_require__, 58682))),
            source: "__registry__/new-york/charts/chart-line-step.tsx",
            meta: undefined
        },
        "chart-pie-donut-active": {
            name: "chart-pie-donut-active",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/new-york/charts/chart-pie-donut-active.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-pie"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 37637).then(__webpack_require__.bind(__webpack_require__, 37637))),
            source: "__registry__/new-york/charts/chart-pie-donut-active.tsx",
            meta: undefined
        },
        "chart-pie-donut-text": {
            name: "chart-pie-donut-text",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/new-york/charts/chart-pie-donut-text.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-pie"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 2568).then(__webpack_require__.bind(__webpack_require__, 2568))),
            source: "__registry__/new-york/charts/chart-pie-donut-text.tsx",
            meta: undefined
        },
        "chart-pie-donut": {
            name: "chart-pie-donut",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/new-york/charts/chart-pie-donut.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-pie"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 69913).then(__webpack_require__.bind(__webpack_require__, 69913))),
            source: "__registry__/new-york/charts/chart-pie-donut.tsx",
            meta: undefined
        },
        "chart-pie-interactive": {
            name: "chart-pie-interactive",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/new-york/charts/chart-pie-interactive.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-pie"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 78990).then(__webpack_require__.bind(__webpack_require__, 78990))),
            source: "__registry__/new-york/charts/chart-pie-interactive.tsx",
            meta: undefined
        },
        "chart-pie-label-custom": {
            name: "chart-pie-label-custom",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/new-york/charts/chart-pie-label-custom.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-pie"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 99533).then(__webpack_require__.bind(__webpack_require__, 99533))),
            source: "__registry__/new-york/charts/chart-pie-label-custom.tsx",
            meta: undefined
        },
        "chart-pie-label-list": {
            name: "chart-pie-label-list",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/new-york/charts/chart-pie-label-list.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-pie"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 30505).then(__webpack_require__.bind(__webpack_require__, 30505))),
            source: "__registry__/new-york/charts/chart-pie-label-list.tsx",
            meta: undefined
        },
        "chart-pie-label": {
            name: "chart-pie-label",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/new-york/charts/chart-pie-label.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-pie"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 76459).then(__webpack_require__.bind(__webpack_require__, 76459))),
            source: "__registry__/new-york/charts/chart-pie-label.tsx",
            meta: undefined
        },
        "chart-pie-legend": {
            name: "chart-pie-legend",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/new-york/charts/chart-pie-legend.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-pie"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 83259).then(__webpack_require__.bind(__webpack_require__, 83259))),
            source: "__registry__/new-york/charts/chart-pie-legend.tsx",
            meta: undefined
        },
        "chart-pie-separator-none": {
            name: "chart-pie-separator-none",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/new-york/charts/chart-pie-separator-none.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-pie"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 31375).then(__webpack_require__.bind(__webpack_require__, 31375))),
            source: "__registry__/new-york/charts/chart-pie-separator-none.tsx",
            meta: undefined
        },
        "chart-pie-simple": {
            name: "chart-pie-simple",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/new-york/charts/chart-pie-simple.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-pie"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 26678).then(__webpack_require__.bind(__webpack_require__, 26678))),
            source: "__registry__/new-york/charts/chart-pie-simple.tsx",
            meta: undefined
        },
        "chart-pie-stacked": {
            name: "chart-pie-stacked",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/new-york/charts/chart-pie-stacked.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-pie"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 47879).then(__webpack_require__.bind(__webpack_require__, 47879))),
            source: "__registry__/new-york/charts/chart-pie-stacked.tsx",
            meta: undefined
        },
        "chart-radar-default": {
            name: "chart-radar-default",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/new-york/charts/chart-radar-default.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-radar"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 42865).then(__webpack_require__.bind(__webpack_require__, 42865))),
            source: "__registry__/new-york/charts/chart-radar-default.tsx",
            meta: undefined
        },
        "chart-radar-dots": {
            name: "chart-radar-dots",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/new-york/charts/chart-radar-dots.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-radar"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 20570).then(__webpack_require__.bind(__webpack_require__, 83914))),
            source: "__registry__/new-york/charts/chart-radar-dots.tsx",
            meta: undefined
        },
        "chart-radar-grid-circle-fill": {
            name: "chart-radar-grid-circle-fill",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/new-york/charts/chart-radar-grid-circle-fill.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-radar"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 44975).then(__webpack_require__.bind(__webpack_require__, 44975))),
            source: "__registry__/new-york/charts/chart-radar-grid-circle-fill.tsx",
            meta: undefined
        },
        "chart-radar-grid-circle-no-lines": {
            name: "chart-radar-grid-circle-no-lines",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/new-york/charts/chart-radar-grid-circle-no-lines.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-radar"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 50096).then(__webpack_require__.bind(__webpack_require__, 50096))),
            source: "__registry__/new-york/charts/chart-radar-grid-circle-no-lines.tsx",
            meta: undefined
        },
        "chart-radar-grid-circle": {
            name: "chart-radar-grid-circle",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/new-york/charts/chart-radar-grid-circle.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-radar"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 31197).then(__webpack_require__.bind(__webpack_require__, 31197))),
            source: "__registry__/new-york/charts/chart-radar-grid-circle.tsx",
            meta: undefined
        },
        "chart-radar-grid-custom": {
            name: "chart-radar-grid-custom",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/new-york/charts/chart-radar-grid-custom.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-radar"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 94700).then(__webpack_require__.bind(__webpack_require__, 94700))),
            source: "__registry__/new-york/charts/chart-radar-grid-custom.tsx",
            meta: undefined
        },
        "chart-radar-grid-fill": {
            name: "chart-radar-grid-fill",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/new-york/charts/chart-radar-grid-fill.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-radar"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 37807).then(__webpack_require__.bind(__webpack_require__, 37807))),
            source: "__registry__/new-york/charts/chart-radar-grid-fill.tsx",
            meta: undefined
        },
        "chart-radar-grid-none": {
            name: "chart-radar-grid-none",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/new-york/charts/chart-radar-grid-none.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-radar"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 7330).then(__webpack_require__.bind(__webpack_require__, 7330))),
            source: "__registry__/new-york/charts/chart-radar-grid-none.tsx",
            meta: undefined
        },
        "chart-radar-icons": {
            name: "chart-radar-icons",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/new-york/charts/chart-radar-icons.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-radar"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 45990).then(__webpack_require__.bind(__webpack_require__, 45990))),
            source: "__registry__/new-york/charts/chart-radar-icons.tsx",
            meta: undefined
        },
        "chart-radar-label-custom": {
            name: "chart-radar-label-custom",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/new-york/charts/chart-radar-label-custom.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-radar"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 87841).then(__webpack_require__.bind(__webpack_require__, 87841))),
            source: "__registry__/new-york/charts/chart-radar-label-custom.tsx",
            meta: undefined
        },
        "chart-radar-legend": {
            name: "chart-radar-legend",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/new-york/charts/chart-radar-legend.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-radar"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 92130).then(__webpack_require__.bind(__webpack_require__, 25683))),
            source: "__registry__/new-york/charts/chart-radar-legend.tsx",
            meta: undefined
        },
        "chart-radar-lines-only": {
            name: "chart-radar-lines-only",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/new-york/charts/chart-radar-lines-only.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-radar"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 92054).then(__webpack_require__.bind(__webpack_require__, 92054))),
            source: "__registry__/new-york/charts/chart-radar-lines-only.tsx",
            meta: undefined
        },
        "chart-radar-multiple": {
            name: "chart-radar-multiple",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/new-york/charts/chart-radar-multiple.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-radar"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 32625).then(__webpack_require__.bind(__webpack_require__, 32625))),
            source: "__registry__/new-york/charts/chart-radar-multiple.tsx",
            meta: undefined
        },
        "chart-radar-radius": {
            name: "chart-radar-radius",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/new-york/charts/chart-radar-radius.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-radar"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 6835).then(__webpack_require__.bind(__webpack_require__, 6835))),
            source: "__registry__/new-york/charts/chart-radar-radius.tsx",
            meta: undefined
        },
        "chart-radial-grid": {
            name: "chart-radial-grid",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/new-york/charts/chart-radial-grid.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-radial"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 30930).then(__webpack_require__.bind(__webpack_require__, 30930))),
            source: "__registry__/new-york/charts/chart-radial-grid.tsx",
            meta: undefined
        },
        "chart-radial-label": {
            name: "chart-radial-label",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/new-york/charts/chart-radial-label.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-radial"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 13131).then(__webpack_require__.bind(__webpack_require__, 13131))),
            source: "__registry__/new-york/charts/chart-radial-label.tsx",
            meta: undefined
        },
        "chart-radial-shape": {
            name: "chart-radial-shape",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/new-york/charts/chart-radial-shape.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-radial"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 9855).then(__webpack_require__.bind(__webpack_require__, 9855))),
            source: "__registry__/new-york/charts/chart-radial-shape.tsx",
            meta: undefined
        },
        "chart-radial-simple": {
            name: "chart-radial-simple",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/new-york/charts/chart-radial-simple.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-radial"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 80624).then(__webpack_require__.bind(__webpack_require__, 80624))),
            source: "__registry__/new-york/charts/chart-radial-simple.tsx",
            meta: undefined
        },
        "chart-radial-stacked": {
            name: "chart-radial-stacked",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/new-york/charts/chart-radial-stacked.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-radial"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 24929).then(__webpack_require__.bind(__webpack_require__, 24929))),
            source: "__registry__/new-york/charts/chart-radial-stacked.tsx",
            meta: undefined
        },
        "chart-radial-text": {
            name: "chart-radial-text",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/new-york/charts/chart-radial-text.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-radial"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 63190).then(__webpack_require__.bind(__webpack_require__, 63190))),
            source: "__registry__/new-york/charts/chart-radial-text.tsx",
            meta: undefined
        },
        "chart-tooltip-default": {
            name: "chart-tooltip-default",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/new-york/charts/chart-tooltip-default.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-tooltip"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 1916).then(__webpack_require__.bind(__webpack_require__, 1916))),
            source: "__registry__/new-york/charts/chart-tooltip-default.tsx",
            meta: undefined
        },
        "chart-tooltip-indicator-line": {
            name: "chart-tooltip-indicator-line",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/new-york/charts/chart-tooltip-indicator-line.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-tooltip"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 9295).then(__webpack_require__.bind(__webpack_require__, 9295))),
            source: "__registry__/new-york/charts/chart-tooltip-indicator-line.tsx",
            meta: undefined
        },
        "chart-tooltip-indicator-none": {
            name: "chart-tooltip-indicator-none",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/new-york/charts/chart-tooltip-indicator-none.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-tooltip"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 5857).then(__webpack_require__.bind(__webpack_require__, 5857))),
            source: "__registry__/new-york/charts/chart-tooltip-indicator-none.tsx",
            meta: undefined
        },
        "chart-tooltip-label-none": {
            name: "chart-tooltip-label-none",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/new-york/charts/chart-tooltip-label-none.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-tooltip"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 80631).then(__webpack_require__.bind(__webpack_require__, 80631))),
            source: "__registry__/new-york/charts/chart-tooltip-label-none.tsx",
            meta: undefined
        },
        "chart-tooltip-label-custom": {
            name: "chart-tooltip-label-custom",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/new-york/charts/chart-tooltip-label-custom.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-tooltip"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 63740).then(__webpack_require__.bind(__webpack_require__, 63740))),
            source: "__registry__/new-york/charts/chart-tooltip-label-custom.tsx",
            meta: undefined
        },
        "chart-tooltip-label-formatter": {
            name: "chart-tooltip-label-formatter",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/new-york/charts/chart-tooltip-label-formatter.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-tooltip"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 47871).then(__webpack_require__.bind(__webpack_require__, 47871))),
            source: "__registry__/new-york/charts/chart-tooltip-label-formatter.tsx",
            meta: undefined
        },
        "chart-tooltip-formatter": {
            name: "chart-tooltip-formatter",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/new-york/charts/chart-tooltip-formatter.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-tooltip"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 93723).then(__webpack_require__.bind(__webpack_require__, 93723))),
            source: "__registry__/new-york/charts/chart-tooltip-formatter.tsx",
            meta: undefined
        },
        "chart-tooltip-icons": {
            name: "chart-tooltip-icons",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/new-york/charts/chart-tooltip-icons.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-tooltip"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 22022).then(__webpack_require__.bind(__webpack_require__, 22022))),
            source: "__registry__/new-york/charts/chart-tooltip-icons.tsx",
            meta: undefined
        },
        "chart-tooltip-advanced": {
            name: "chart-tooltip-advanced",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/new-york/charts/chart-tooltip-advanced.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-tooltip"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 28365).then(__webpack_require__.bind(__webpack_require__, 28365))),
            source: "__registry__/new-york/charts/chart-tooltip-advanced.tsx",
            meta: undefined
        },
        "utils": {
            name: "utils",
            description: "",
            type: "registry:lib",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/new-york/lib/utils.ts",
                    type: "registry:lib",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(74957)]).then(__webpack_require__.bind(__webpack_require__, 74957))),
            source: "",
            meta: undefined
        },
        "use-mobile": {
            name: "use-mobile",
            description: "",
            type: "registry:hook",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/new-york/hooks/use-mobile.tsx",
                    type: "registry:hook",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 41448).then(__webpack_require__.bind(__webpack_require__, 41448))),
            source: "",
            meta: undefined
        },
        "use-toast": {
            name: "use-toast",
            description: "",
            type: "registry:hook",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/new-york/hooks/use-toast.ts",
                    type: "registry:hook",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 5963).then(__webpack_require__.bind(__webpack_require__, 5963))),
            source: "",
            meta: undefined
        },
        "sink": {
            name: "sink",
            description: "",
            type: "registry:internal",
            registryDependencies: [
                "accordion",
                "alert",
                "alert-dialog",
                "aspect-ratio",
                "avatar",
                "badge",
                "breadcrumb",
                "button",
                "calendar",
                "card",
                "carousel",
                "chart",
                "checkbox",
                "collapsible",
                "command",
                "context-menu",
                "dialog",
                "drawer",
                "dropdown-menu",
                "hover-card",
                "input",
                "input-otp",
                "label",
                "menubar",
                "navigation-menu",
                "pagination",
                "popover",
                "progress",
                "radio-group",
                "resizable",
                "scroll-area",
                "select",
                "separator",
                "sheet",
                "sidebar",
                "skeleton",
                "slider",
                "sonner",
                "switch",
                "table",
                "tabs",
                "textarea",
                "toast",
                "toggle",
                "toggle-group",
                "tooltip"
            ],
            files: [
                {
                    path: "registry/new-york/internal/sink/page.tsx",
                    type: "registry:page",
                    target: "app/sink/page.tsx"
                },
                {
                    path: "registry/new-york/internal/sink/components/app-sidebar.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/new-york/internal/sink/components/component-wrapper.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/new-york/internal/sink/components/nav-main.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/new-york/internal/sink/components/nav-projects.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/new-york/internal/sink/components/nav-user.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/new-york/internal/sink/components/team-switcher.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/new-york/internal/sink/components/accordion-demo.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/new-york/internal/sink/components/alert-demo.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/new-york/internal/sink/components/alert-dialog-demo.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/new-york/internal/sink/components/aspect-ratio-demo.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/new-york/internal/sink/components/avatar-demo.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/new-york/internal/sink/components/badge-demo.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/new-york/internal/sink/components/breadcrumb-demo.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/new-york/internal/sink/components/button-demo.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/new-york/internal/sink/components/calendar-demo.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/new-york/internal/sink/components/card-demo.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/new-york/internal/sink/components/carousel-demo.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/new-york/internal/sink/components/checkbox-demo.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/new-york/internal/sink/components/collapsible-demo.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/new-york/internal/sink/components/combobox-demo.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/new-york/internal/sink/components/command-demo.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/new-york/internal/sink/components/context-menu-demo.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/new-york/internal/sink/components/date-picker-demo.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/new-york/internal/sink/components/dialog-demo.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/new-york/internal/sink/components/drawer-demo.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/new-york/internal/sink/components/dropdown-menu-demo.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/new-york/internal/sink/components/hover-card-demo.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/new-york/internal/sink/components/input-demo.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/new-york/internal/sink/components/input-otp-demo.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/new-york/internal/sink/components/label-demo.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/new-york/internal/sink/components/menubar-demo.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/new-york/internal/sink/components/navigation-menu-demo.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/new-york/internal/sink/components/pagination-demo.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/new-york/internal/sink/components/popover-demo.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/new-york/internal/sink/components/progress-demo.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/new-york/internal/sink/components/radio-group-demo.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/new-york/internal/sink/components/resizable-handle.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/new-york/internal/sink/components/scroll-area-demo.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/new-york/internal/sink/components/select-demo.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/new-york/internal/sink/components/separator-demo.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/new-york/internal/sink/components/sheet-demo.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/new-york/internal/sink/components/skeleton-demo.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/new-york/internal/sink/components/slider-demo.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/new-york/internal/sink/components/sonner-demo.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/new-york/internal/sink/components/switch-demo.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/new-york/internal/sink/components/table-demo.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/new-york/internal/sink/components/tabs-demo.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/new-york/internal/sink/components/textarea-demo.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/new-york/internal/sink/components/toast-demo.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/new-york/internal/sink/components/toggle-demo.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/new-york/internal/sink/components/toggle-group-demo.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/new-york/internal/sink/components/tooltip-demo.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/new-york/internal/sink/components/badge-destructive.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/new-york/internal/sink/components/badge-outline.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/new-york/internal/sink/components/badge-secondary.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/new-york/internal/sink/components/button-destructive.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/new-york/internal/sink/components/button-ghost.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/new-york/internal/sink/components/button-link.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/new-york/internal/sink/components/button-loading.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/new-york/internal/sink/components/button-outline.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/new-york/internal/sink/components/button-secondary.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/new-york/internal/sink/components/button-with-icon.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/new-york/internal/sink/components/toggle-disabled.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/new-york/internal/sink/components/toggle-outline.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/new-york/internal/sink/components/toggle-with-text.tsx",
                    type: "registry:component",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(50736), __webpack_require__.e(15856)]).then(__webpack_require__.bind(__webpack_require__, 15856))),
            source: "",
            meta: undefined
        },
        "sidebar-demo": {
            name: "sidebar-demo",
            description: "",
            type: "registry:internal",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/new-york/internal/sidebar-demo.tsx",
                    type: "registry:component",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 83608).then(__webpack_require__.bind(__webpack_require__, 83608))),
            source: "",
            meta: undefined
        },
        "sidebar-header": {
            name: "sidebar-header",
            description: "",
            type: "registry:internal",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/new-york/internal/sidebar-header.tsx",
                    type: "registry:component",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 39780).then(__webpack_require__.bind(__webpack_require__, 39780))),
            source: "",
            meta: undefined
        },
        "sidebar-footer": {
            name: "sidebar-footer",
            description: "",
            type: "registry:internal",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/new-york/internal/sidebar-footer.tsx",
                    type: "registry:component",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 36042).then(__webpack_require__.bind(__webpack_require__, 36042))),
            source: "",
            meta: undefined
        },
        "sidebar-group": {
            name: "sidebar-group",
            description: "",
            type: "registry:internal",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/new-york/internal/sidebar-group.tsx",
                    type: "registry:component",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 61627).then(__webpack_require__.bind(__webpack_require__, 61627))),
            source: "",
            meta: undefined
        },
        "sidebar-group-collapsible": {
            name: "sidebar-group-collapsible",
            description: "",
            type: "registry:internal",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/new-york/internal/sidebar-group-collapsible.tsx",
                    type: "registry:component",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 16238).then(__webpack_require__.bind(__webpack_require__, 16238))),
            source: "",
            meta: undefined
        },
        "sidebar-group-action": {
            name: "sidebar-group-action",
            description: "",
            type: "registry:internal",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/new-york/internal/sidebar-group-action.tsx",
                    type: "registry:component",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 51270).then(__webpack_require__.bind(__webpack_require__, 51270))),
            source: "",
            meta: undefined
        },
        "sidebar-menu": {
            name: "sidebar-menu",
            description: "",
            type: "registry:internal",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/new-york/internal/sidebar-menu.tsx",
                    type: "registry:component",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 25929).then(__webpack_require__.bind(__webpack_require__, 25929))),
            source: "",
            meta: undefined
        },
        "sidebar-menu-action": {
            name: "sidebar-menu-action",
            description: "",
            type: "registry:internal",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/new-york/internal/sidebar-menu-action.tsx",
                    type: "registry:component",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 9519).then(__webpack_require__.bind(__webpack_require__, 9519))),
            source: "",
            meta: undefined
        },
        "sidebar-menu-sub": {
            name: "sidebar-menu-sub",
            description: "",
            type: "registry:internal",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/new-york/internal/sidebar-menu-sub.tsx",
                    type: "registry:component",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 57149).then(__webpack_require__.bind(__webpack_require__, 57149))),
            source: "",
            meta: undefined
        },
        "sidebar-menu-collapsible": {
            name: "sidebar-menu-collapsible",
            description: "",
            type: "registry:internal",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/new-york/internal/sidebar-menu-collapsible.tsx",
                    type: "registry:component",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 44947).then(__webpack_require__.bind(__webpack_require__, 44947))),
            source: "",
            meta: undefined
        },
        "sidebar-menu-badge": {
            name: "sidebar-menu-badge",
            description: "",
            type: "registry:internal",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/new-york/internal/sidebar-menu-badge.tsx",
                    type: "registry:component",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 59732).then(__webpack_require__.bind(__webpack_require__, 59732))),
            source: "",
            meta: undefined
        },
        "sidebar-rsc": {
            name: "sidebar-rsc",
            description: "",
            type: "registry:internal",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/new-york/internal/sidebar-rsc.tsx",
                    type: "registry:component",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 10017).then(__webpack_require__.bind(__webpack_require__, 10017))),
            source: "",
            meta: undefined
        },
        "sidebar-controlled": {
            name: "sidebar-controlled",
            description: "",
            type: "registry:internal",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/new-york/internal/sidebar-controlled.tsx",
                    type: "registry:component",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 77064).then(__webpack_require__.bind(__webpack_require__, 77064))),
            source: "",
            meta: undefined
        },
        "v0-sidebar-01": {
            name: "v0-sidebar-01",
            description: "",
            type: "registry:internal",
            registryDependencies: [
                "sidebar",
                "breadcrumb",
                "separator",
                "label",
                "dropdown-menu"
            ],
            files: [
                {
                    path: "registry/new-york/internal/sidebar-01.tsx",
                    type: "registry:component",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 25749).then(__webpack_require__.bind(__webpack_require__, 25749))),
            source: "",
            meta: undefined
        },
        "v0-sidebar-02": {
            name: "v0-sidebar-02",
            description: "",
            type: "registry:internal",
            registryDependencies: [
                "sidebar",
                "breadcrumb",
                "separator",
                "label",
                "dropdown-menu"
            ],
            files: [
                {
                    path: "registry/new-york/internal/sidebar-02.tsx",
                    type: "registry:internal",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 9612).then(__webpack_require__.bind(__webpack_require__, 9612))),
            source: "",
            meta: undefined
        },
        "v0-sidebar-03": {
            name: "v0-sidebar-03",
            description: "",
            type: "registry:internal",
            registryDependencies: [
                "sidebar",
                "breadcrumb"
            ],
            files: [
                {
                    path: "registry/new-york/internal/sidebar-03.tsx",
                    type: "registry:internal",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 71426).then(__webpack_require__.bind(__webpack_require__, 71426))),
            source: "",
            meta: undefined
        },
        "v0-sidebar-04": {
            name: "v0-sidebar-04",
            description: "",
            type: "registry:internal",
            registryDependencies: [
                "sidebar",
                "breadcrumb",
                "separator"
            ],
            files: [
                {
                    path: "registry/new-york/internal/sidebar-04.tsx",
                    type: "registry:internal",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 25672).then(__webpack_require__.bind(__webpack_require__, 25672))),
            source: "",
            meta: undefined
        },
        "v0-sidebar-05": {
            name: "v0-sidebar-05",
            description: "",
            type: "registry:internal",
            registryDependencies: [
                "sidebar",
                "breadcrumb",
                "separator",
                "label",
                "collapsible"
            ],
            files: [
                {
                    path: "registry/new-york/internal/sidebar-05.tsx",
                    type: "registry:internal",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(20664)]).then(__webpack_require__.bind(__webpack_require__, 20664))),
            source: "",
            meta: undefined
        },
        "v0-sidebar-06": {
            name: "v0-sidebar-06",
            description: "",
            type: "registry:internal",
            registryDependencies: [
                "sidebar",
                "breadcrumb",
                "separator",
                "card",
                "dropdown-menu"
            ],
            files: [
                {
                    path: "registry/new-york/internal/sidebar-06.tsx",
                    type: "registry:internal",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 96178).then(__webpack_require__.bind(__webpack_require__, 96178))),
            source: "",
            meta: undefined
        },
        "v0-sidebar-07": {
            name: "v0-sidebar-07",
            description: "",
            type: "registry:internal",
            registryDependencies: [
                "sidebar",
                "breadcrumb",
                "separator",
                "collapsible",
                "dropdown-menu",
                "avatar"
            ],
            files: [
                {
                    path: "registry/new-york/internal/sidebar-07.tsx",
                    type: "registry:internal",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 19119).then(__webpack_require__.bind(__webpack_require__, 19119))),
            source: "",
            meta: undefined
        },
        "v0-sidebar-08": {
            name: "v0-sidebar-08",
            description: "",
            type: "registry:internal",
            registryDependencies: [
                "sidebar",
                "breadcrumb",
                "separator",
                "collapsible",
                "dropdown-menu",
                "avatar"
            ],
            files: [
                {
                    path: "registry/new-york/internal/sidebar-08.tsx",
                    type: "registry:internal",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 13304).then(__webpack_require__.bind(__webpack_require__, 13304))),
            source: "",
            meta: undefined
        },
        "v0-sidebar-09": {
            name: "v0-sidebar-09",
            description: "",
            type: "registry:internal",
            registryDependencies: [
                "sidebar",
                "breadcrumb",
                "separator",
                "collapsible",
                "dropdown-menu",
                "avatar",
                "switch"
            ],
            files: [
                {
                    path: "registry/new-york/internal/sidebar-09.tsx",
                    type: "registry:internal",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 72443).then(__webpack_require__.bind(__webpack_require__, 72443))),
            source: "",
            meta: undefined
        },
        "v0-sidebar-10": {
            name: "v0-sidebar-10",
            description: "",
            type: "registry:internal",
            registryDependencies: [
                "sidebar",
                "breadcrumb",
                "separator",
                "popover",
                "collapsible",
                "dropdown-menu"
            ],
            files: [
                {
                    path: "registry/new-york/internal/sidebar-10.tsx",
                    type: "registry:internal",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 9835).then(__webpack_require__.bind(__webpack_require__, 9835))),
            source: "",
            meta: undefined
        },
        "v0-sidebar-11": {
            name: "v0-sidebar-11",
            description: "",
            type: "registry:internal",
            registryDependencies: [
                "sidebar",
                "breadcrumb",
                "separator",
                "collapsible"
            ],
            files: [
                {
                    path: "registry/new-york/internal/sidebar-11.tsx",
                    type: "registry:internal",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(60021)]).then(__webpack_require__.bind(__webpack_require__, 60021))),
            source: "",
            meta: undefined
        },
        "v0-sidebar-12": {
            name: "v0-sidebar-12",
            description: "",
            type: "registry:internal",
            registryDependencies: [
                "sidebar",
                "breadcrumb",
                "separator",
                "collapsible",
                "calendar",
                "dropdown-menu",
                "avatar"
            ],
            files: [
                {
                    path: "registry/new-york/internal/sidebar-12.tsx",
                    type: "registry:internal",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 81750).then(__webpack_require__.bind(__webpack_require__, 81750))),
            source: "",
            meta: undefined
        },
        "v0-sidebar-13": {
            name: "v0-sidebar-13",
            description: "",
            type: "registry:internal",
            registryDependencies: [
                "sidebar",
                "breadcrumb",
                "button",
                "dialog"
            ],
            files: [
                {
                    path: "registry/new-york/internal/sidebar-13.tsx",
                    type: "registry:internal",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 55734).then(__webpack_require__.bind(__webpack_require__, 55734))),
            source: "",
            meta: undefined
        },
        "v0-sidebar-14": {
            name: "v0-sidebar-14",
            description: "",
            type: "registry:internal",
            registryDependencies: [
                "sidebar",
                "breadcrumb"
            ],
            files: [
                {
                    path: "registry/new-york/internal/sidebar-14.tsx",
                    type: "registry:internal",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(10281)]).then(__webpack_require__.bind(__webpack_require__, 10281))),
            source: "",
            meta: undefined
        },
        "v0-sidebar-15": {
            name: "v0-sidebar-15",
            description: "",
            type: "registry:internal",
            registryDependencies: [
                "sidebar",
                "breadcrumb",
                "separator",
                "popover",
                "collapsible",
                "dropdown-menu",
                "calendar",
                "avatar"
            ],
            files: [
                {
                    path: "registry/new-york/internal/sidebar-15.tsx",
                    type: "registry:internal",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 75109).then(__webpack_require__.bind(__webpack_require__, 75109))),
            source: "",
            meta: undefined
        },
        "v0-login-01": {
            name: "v0-login-01",
            description: "",
            type: "registry:internal",
            registryDependencies: [
                "button",
                "card",
                "input",
                "label"
            ],
            files: [
                {
                    path: "registry/new-york/internal/login-01.tsx",
                    type: "registry:internal",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(49734)]).then(__webpack_require__.bind(__webpack_require__, 49734))),
            source: "",
            meta: undefined
        },
        "accordion-demo": {
            name: "accordion-demo",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "accordion"
            ],
            files: [
                {
                    path: "registry/new-york/examples/accordion-demo.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 98536).then(__webpack_require__.bind(__webpack_require__, 98536))),
            source: "",
            meta: undefined
        },
        "alert-demo": {
            name: "alert-demo",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "alert"
            ],
            files: [
                {
                    path: "registry/new-york/examples/alert-demo.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(15270)]).then(__webpack_require__.bind(__webpack_require__, 15270))),
            source: "",
            meta: undefined
        },
        "alert-destructive": {
            name: "alert-destructive",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "alert"
            ],
            files: [
                {
                    path: "registry/new-york/examples/alert-destructive.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(48129)]).then(__webpack_require__.bind(__webpack_require__, 48129))),
            source: "",
            meta: undefined
        },
        "alert-dialog-demo": {
            name: "alert-dialog-demo",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "alert-dialog",
                "button"
            ],
            files: [
                {
                    path: "registry/new-york/examples/alert-dialog-demo.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(2444)]).then(__webpack_require__.bind(__webpack_require__, 2444))),
            source: "",
            meta: undefined
        },
        "aspect-ratio-demo": {
            name: "aspect-ratio-demo",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "aspect-ratio"
            ],
            files: [
                {
                    path: "registry/new-york/examples/aspect-ratio-demo.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(50736), __webpack_require__.e(35150)]).then(__webpack_require__.bind(__webpack_require__, 35150))),
            source: "",
            meta: undefined
        },
        "avatar-demo": {
            name: "avatar-demo",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "avatar"
            ],
            files: [
                {
                    path: "registry/new-york/examples/avatar-demo.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 59212).then(__webpack_require__.bind(__webpack_require__, 59212))),
            source: "",
            meta: undefined
        },
        "badge-demo": {
            name: "badge-demo",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "badge"
            ],
            files: [
                {
                    path: "registry/new-york/examples/badge-demo.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(67181)]).then(__webpack_require__.bind(__webpack_require__, 67181))),
            source: "",
            meta: undefined
        },
        "badge-destructive": {
            name: "badge-destructive",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "badge"
            ],
            files: [
                {
                    path: "registry/new-york/examples/badge-destructive.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(38389)]).then(__webpack_require__.bind(__webpack_require__, 38389))),
            source: "",
            meta: undefined
        },
        "badge-outline": {
            name: "badge-outline",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "badge"
            ],
            files: [
                {
                    path: "registry/new-york/examples/badge-outline.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(97264)]).then(__webpack_require__.bind(__webpack_require__, 97264))),
            source: "",
            meta: undefined
        },
        "badge-secondary": {
            name: "badge-secondary",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "badge"
            ],
            files: [
                {
                    path: "registry/new-york/examples/badge-secondary.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(11332)]).then(__webpack_require__.bind(__webpack_require__, 11332))),
            source: "",
            meta: undefined
        },
        "breadcrumb-demo": {
            name: "breadcrumb-demo",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "breadcrumb"
            ],
            files: [
                {
                    path: "registry/new-york/examples/breadcrumb-demo.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(75339)]).then(__webpack_require__.bind(__webpack_require__, 75339))),
            source: "",
            meta: undefined
        },
        "breadcrumb-separator": {
            name: "breadcrumb-separator",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "breadcrumb"
            ],
            files: [
                {
                    path: "registry/new-york/examples/breadcrumb-separator.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(62062)]).then(__webpack_require__.bind(__webpack_require__, 62062))),
            source: "",
            meta: undefined
        },
        "breadcrumb-dropdown": {
            name: "breadcrumb-dropdown",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "breadcrumb"
            ],
            files: [
                {
                    path: "registry/new-york/examples/breadcrumb-dropdown.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(55007)]).then(__webpack_require__.bind(__webpack_require__, 55007))),
            source: "",
            meta: undefined
        },
        "breadcrumb-ellipsis": {
            name: "breadcrumb-ellipsis",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "breadcrumb"
            ],
            files: [
                {
                    path: "registry/new-york/examples/breadcrumb-ellipsis.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(71395)]).then(__webpack_require__.bind(__webpack_require__, 71395))),
            source: "",
            meta: undefined
        },
        "breadcrumb-link": {
            name: "breadcrumb-link",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "breadcrumb"
            ],
            files: [
                {
                    path: "registry/new-york/examples/breadcrumb-link.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(82787)]).then(__webpack_require__.bind(__webpack_require__, 82787))),
            source: "",
            meta: undefined
        },
        "breadcrumb-responsive": {
            name: "breadcrumb-responsive",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "breadcrumb"
            ],
            files: [
                {
                    path: "registry/new-york/examples/breadcrumb-responsive.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 67856).then(__webpack_require__.bind(__webpack_require__, 67856))),
            source: "",
            meta: undefined
        },
        "button-demo": {
            name: "button-demo",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "button"
            ],
            files: [
                {
                    path: "registry/new-york/examples/button-demo.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(79961)]).then(__webpack_require__.bind(__webpack_require__, 79961))),
            source: "",
            meta: undefined
        },
        "button-secondary": {
            name: "button-secondary",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "button"
            ],
            files: [
                {
                    path: "registry/new-york/examples/button-secondary.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(31567)]).then(__webpack_require__.bind(__webpack_require__, 31567))),
            source: "",
            meta: undefined
        },
        "button-destructive": {
            name: "button-destructive",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "button"
            ],
            files: [
                {
                    path: "registry/new-york/examples/button-destructive.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(40488)]).then(__webpack_require__.bind(__webpack_require__, 40488))),
            source: "",
            meta: undefined
        },
        "button-outline": {
            name: "button-outline",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "button"
            ],
            files: [
                {
                    path: "registry/new-york/examples/button-outline.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(2989)]).then(__webpack_require__.bind(__webpack_require__, 2989))),
            source: "",
            meta: undefined
        },
        "button-ghost": {
            name: "button-ghost",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "button"
            ],
            files: [
                {
                    path: "registry/new-york/examples/button-ghost.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(20700)]).then(__webpack_require__.bind(__webpack_require__, 20700))),
            source: "",
            meta: undefined
        },
        "button-link": {
            name: "button-link",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "button"
            ],
            files: [
                {
                    path: "registry/new-york/examples/button-link.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(95056)]).then(__webpack_require__.bind(__webpack_require__, 95056))),
            source: "",
            meta: undefined
        },
        "button-with-icon": {
            name: "button-with-icon",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "button"
            ],
            files: [
                {
                    path: "registry/new-york/examples/button-with-icon.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(45942)]).then(__webpack_require__.bind(__webpack_require__, 45942))),
            source: "",
            meta: undefined
        },
        "button-loading": {
            name: "button-loading",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "button"
            ],
            files: [
                {
                    path: "registry/new-york/examples/button-loading.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(95573)]).then(__webpack_require__.bind(__webpack_require__, 95573))),
            source: "",
            meta: undefined
        },
        "button-icon": {
            name: "button-icon",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "button"
            ],
            files: [
                {
                    path: "registry/new-york/examples/button-icon.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(60981)]).then(__webpack_require__.bind(__webpack_require__, 60981))),
            source: "",
            meta: undefined
        },
        "button-as-child": {
            name: "button-as-child",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "button"
            ],
            files: [
                {
                    path: "registry/new-york/examples/button-as-child.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(5817)]).then(__webpack_require__.bind(__webpack_require__, 5817))),
            source: "",
            meta: undefined
        },
        "calendar-demo": {
            name: "calendar-demo",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "calendar"
            ],
            files: [
                {
                    path: "registry/new-york/examples/calendar-demo.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 44627).then(__webpack_require__.bind(__webpack_require__, 44627))),
            source: "",
            meta: undefined
        },
        "calendar-form": {
            name: "calendar-form",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "calendar",
                "form",
                "popover"
            ],
            files: [
                {
                    path: "registry/new-york/examples/calendar-form.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 89767).then(__webpack_require__.bind(__webpack_require__, 89767))),
            source: "",
            meta: undefined
        },
        "card-demo": {
            name: "card-demo",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "card",
                "button",
                "switch"
            ],
            files: [
                {
                    path: "registry/new-york/examples/card-demo.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(17800)]).then(__webpack_require__.bind(__webpack_require__, 17800))),
            source: "",
            meta: undefined
        },
        "card-with-form": {
            name: "card-with-form",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "button",
                "card",
                "input",
                "label",
                "select"
            ],
            files: [
                {
                    path: "registry/new-york/examples/card-with-form.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(70417)]).then(__webpack_require__.bind(__webpack_require__, 70417))),
            source: "",
            meta: undefined
        },
        "carousel-demo": {
            name: "carousel-demo",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "carousel"
            ],
            files: [
                {
                    path: "registry/new-york/examples/carousel-demo.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(54702)]).then(__webpack_require__.bind(__webpack_require__, 45574))),
            source: "",
            meta: undefined
        },
        "carousel-size": {
            name: "carousel-size",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "carousel"
            ],
            files: [
                {
                    path: "registry/new-york/examples/carousel-size.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(78226)]).then(__webpack_require__.bind(__webpack_require__, 78226))),
            source: "",
            meta: undefined
        },
        "carousel-spacing": {
            name: "carousel-spacing",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "carousel"
            ],
            files: [
                {
                    path: "registry/new-york/examples/carousel-spacing.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(69199)]).then(__webpack_require__.bind(__webpack_require__, 65053))),
            source: "",
            meta: undefined
        },
        "carousel-orientation": {
            name: "carousel-orientation",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "carousel"
            ],
            files: [
                {
                    path: "registry/new-york/examples/carousel-orientation.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(24107)]).then(__webpack_require__.bind(__webpack_require__, 24107))),
            source: "",
            meta: undefined
        },
        "carousel-api": {
            name: "carousel-api",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "carousel"
            ],
            files: [
                {
                    path: "registry/new-york/examples/carousel-api.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(91877)]).then(__webpack_require__.bind(__webpack_require__, 91877))),
            source: "",
            meta: undefined
        },
        "carousel-plugin": {
            name: "carousel-plugin",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "carousel"
            ],
            files: [
                {
                    path: "registry/new-york/examples/carousel-plugin.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(62726)]).then(__webpack_require__.bind(__webpack_require__, 62726))),
            source: "",
            meta: undefined
        },
        "checkbox-demo": {
            name: "checkbox-demo",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "checkbox"
            ],
            files: [
                {
                    path: "registry/new-york/examples/checkbox-demo.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 30574).then(__webpack_require__.bind(__webpack_require__, 30574))),
            source: "",
            meta: undefined
        },
        "checkbox-disabled": {
            name: "checkbox-disabled",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "checkbox"
            ],
            files: [
                {
                    path: "registry/new-york/examples/checkbox-disabled.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 91200).then(__webpack_require__.bind(__webpack_require__, 91200))),
            source: "",
            meta: undefined
        },
        "checkbox-form-multiple": {
            name: "checkbox-form-multiple",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "checkbox",
                "form"
            ],
            files: [
                {
                    path: "registry/new-york/examples/checkbox-form-multiple.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 85725).then(__webpack_require__.bind(__webpack_require__, 85725))),
            source: "",
            meta: undefined
        },
        "checkbox-form-single": {
            name: "checkbox-form-single",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "checkbox",
                "form"
            ],
            files: [
                {
                    path: "registry/new-york/examples/checkbox-form-single.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 66176).then(__webpack_require__.bind(__webpack_require__, 66176))),
            source: "",
            meta: undefined
        },
        "checkbox-with-text": {
            name: "checkbox-with-text",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "checkbox"
            ],
            files: [
                {
                    path: "registry/new-york/examples/checkbox-with-text.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 92176).then(__webpack_require__.bind(__webpack_require__, 92176))),
            source: "",
            meta: undefined
        },
        "collapsible-demo": {
            name: "collapsible-demo",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "collapsible"
            ],
            files: [
                {
                    path: "registry/new-york/examples/collapsible-demo.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 31611).then(__webpack_require__.bind(__webpack_require__, 31611))),
            source: "",
            meta: undefined
        },
        "combobox-demo": {
            name: "combobox-demo",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "command"
            ],
            files: [
                {
                    path: "registry/new-york/examples/combobox-demo.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 25675).then(__webpack_require__.bind(__webpack_require__, 25675))),
            source: "",
            meta: undefined
        },
        "combobox-dropdown-menu": {
            name: "combobox-dropdown-menu",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "command",
                "dropdown-menu",
                "button"
            ],
            files: [
                {
                    path: "registry/new-york/examples/combobox-dropdown-menu.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 72237).then(__webpack_require__.bind(__webpack_require__, 72237))),
            source: "",
            meta: undefined
        },
        "combobox-form": {
            name: "combobox-form",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "command",
                "form"
            ],
            files: [
                {
                    path: "registry/new-york/examples/combobox-form.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 25768).then(__webpack_require__.bind(__webpack_require__, 25768))),
            source: "",
            meta: undefined
        },
        "combobox-popover": {
            name: "combobox-popover",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "combobox",
                "popover"
            ],
            files: [
                {
                    path: "registry/new-york/examples/combobox-popover.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 79536).then(__webpack_require__.bind(__webpack_require__, 79536))),
            source: "",
            meta: undefined
        },
        "combobox-responsive": {
            name: "combobox-responsive",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "combobox",
                "popover",
                "drawer"
            ],
            files: [
                {
                    path: "registry/new-york/examples/combobox-responsive.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 30359).then(__webpack_require__.bind(__webpack_require__, 30359))),
            source: "",
            meta: undefined
        },
        "command-demo": {
            name: "command-demo",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "command"
            ],
            files: [
                {
                    path: "registry/new-york/examples/command-demo.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 42802).then(__webpack_require__.bind(__webpack_require__, 42802))),
            source: "",
            meta: undefined
        },
        "command-dialog": {
            name: "command-dialog",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "command",
                "dialog"
            ],
            files: [
                {
                    path: "registry/new-york/examples/command-dialog.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 53684).then(__webpack_require__.bind(__webpack_require__, 53684))),
            source: "",
            meta: undefined
        },
        "context-menu-demo": {
            name: "context-menu-demo",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "context-menu"
            ],
            files: [
                {
                    path: "registry/new-york/examples/context-menu-demo.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 63553).then(__webpack_require__.bind(__webpack_require__, 63553))),
            source: "",
            meta: undefined
        },
        "data-table-demo": {
            name: "data-table-demo",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "data-table"
            ],
            files: [
                {
                    path: "registry/new-york/examples/data-table-demo.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 67840).then(__webpack_require__.bind(__webpack_require__, 67840))),
            source: "",
            meta: undefined
        },
        "date-picker-demo": {
            name: "date-picker-demo",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "button",
                "calendar",
                "popover"
            ],
            files: [
                {
                    path: "registry/new-york/examples/date-picker-demo.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 68730).then(__webpack_require__.bind(__webpack_require__, 68730))),
            source: "",
            meta: undefined
        },
        "date-picker-form": {
            name: "date-picker-form",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "button",
                "calendar",
                "form",
                "popover"
            ],
            files: [
                {
                    path: "registry/new-york/examples/date-picker-form.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 19082).then(__webpack_require__.bind(__webpack_require__, 19082))),
            source: "",
            meta: undefined
        },
        "date-picker-with-presets": {
            name: "date-picker-with-presets",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "button",
                "calendar",
                "popover",
                "select"
            ],
            files: [
                {
                    path: "registry/new-york/examples/date-picker-with-presets.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 33288).then(__webpack_require__.bind(__webpack_require__, 33288))),
            source: "",
            meta: undefined
        },
        "date-picker-with-range": {
            name: "date-picker-with-range",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "button",
                "calendar",
                "popover"
            ],
            files: [
                {
                    path: "registry/new-york/examples/date-picker-with-range.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 1514).then(__webpack_require__.bind(__webpack_require__, 1514))),
            source: "",
            meta: undefined
        },
        "dialog-demo": {
            name: "dialog-demo",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "dialog"
            ],
            files: [
                {
                    path: "registry/new-york/examples/dialog-demo.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(29326)]).then(__webpack_require__.bind(__webpack_require__, 29326))),
            source: "",
            meta: undefined
        },
        "dialog-close-button": {
            name: "dialog-close-button",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "dialog",
                "button"
            ],
            files: [
                {
                    path: "registry/new-york/examples/dialog-close-button.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(77858)]).then(__webpack_require__.bind(__webpack_require__, 77858))),
            source: "",
            meta: undefined
        },
        "drawer-demo": {
            name: "drawer-demo",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "drawer"
            ],
            files: [
                {
                    path: "registry/new-york/examples/drawer-demo.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 59389).then(__webpack_require__.bind(__webpack_require__, 59389))),
            source: "",
            meta: undefined
        },
        "drawer-dialog": {
            name: "drawer-dialog",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "drawer",
                "dialog"
            ],
            files: [
                {
                    path: "registry/new-york/examples/drawer-dialog.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(50619)]).then(__webpack_require__.bind(__webpack_require__, 50619))),
            source: "",
            meta: undefined
        },
        "dropdown-menu-demo": {
            name: "dropdown-menu-demo",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "dropdown-menu"
            ],
            files: [
                {
                    path: "registry/new-york/examples/dropdown-menu-demo.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(79760)]).then(__webpack_require__.bind(__webpack_require__, 79760))),
            source: "",
            meta: undefined
        },
        "dropdown-menu-checkboxes": {
            name: "dropdown-menu-checkboxes",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "dropdown-menu",
                "checkbox"
            ],
            files: [
                {
                    path: "registry/new-york/examples/dropdown-menu-checkboxes.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 51457).then(__webpack_require__.bind(__webpack_require__, 51457))),
            source: "",
            meta: undefined
        },
        "dropdown-menu-radio-group": {
            name: "dropdown-menu-radio-group",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "dropdown-menu",
                "radio-group"
            ],
            files: [
                {
                    path: "registry/new-york/examples/dropdown-menu-radio-group.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 5923).then(__webpack_require__.bind(__webpack_require__, 5923))),
            source: "",
            meta: undefined
        },
        "hover-card-demo": {
            name: "hover-card-demo",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "hover-card"
            ],
            files: [
                {
                    path: "registry/new-york/examples/hover-card-demo.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(84853)]).then(__webpack_require__.bind(__webpack_require__, 84853))),
            source: "",
            meta: undefined
        },
        "input-demo": {
            name: "input-demo",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "input"
            ],
            files: [
                {
                    path: "registry/new-york/examples/input-demo.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(58010)]).then(__webpack_require__.bind(__webpack_require__, 58010))),
            source: "",
            meta: undefined
        },
        "input-disabled": {
            name: "input-disabled",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "input"
            ],
            files: [
                {
                    path: "registry/new-york/examples/input-disabled.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(95178)]).then(__webpack_require__.bind(__webpack_require__, 95178))),
            source: "",
            meta: undefined
        },
        "input-file": {
            name: "input-file",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "input"
            ],
            files: [
                {
                    path: "registry/new-york/examples/input-file.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(8515)]).then(__webpack_require__.bind(__webpack_require__, 8515))),
            source: "",
            meta: undefined
        },
        "input-form": {
            name: "input-form",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "input",
                "button",
                "form"
            ],
            files: [
                {
                    path: "registry/new-york/examples/input-form.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 77928).then(__webpack_require__.bind(__webpack_require__, 77928))),
            source: "",
            meta: undefined
        },
        "input-with-button": {
            name: "input-with-button",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "input",
                "button"
            ],
            files: [
                {
                    path: "registry/new-york/examples/input-with-button.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(65856)]).then(__webpack_require__.bind(__webpack_require__, 65856))),
            source: "",
            meta: undefined
        },
        "input-with-label": {
            name: "input-with-label",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "input",
                "button",
                "label"
            ],
            files: [
                {
                    path: "registry/new-york/examples/input-with-label.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(46752)]).then(__webpack_require__.bind(__webpack_require__, 46752))),
            source: "",
            meta: undefined
        },
        "input-with-text": {
            name: "input-with-text",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "input",
                "button",
                "label"
            ],
            files: [
                {
                    path: "registry/new-york/examples/input-with-text.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(12448)]).then(__webpack_require__.bind(__webpack_require__, 12448))),
            source: "",
            meta: undefined
        },
        "input-otp-demo": {
            name: "input-otp-demo",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "input-otp"
            ],
            files: [
                {
                    path: "registry/new-york/examples/input-otp-demo.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 61110).then(__webpack_require__.bind(__webpack_require__, 61110))),
            source: "",
            meta: undefined
        },
        "input-otp-pattern": {
            name: "input-otp-pattern",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "input-otp"
            ],
            files: [
                {
                    path: "registry/new-york/examples/input-otp-pattern.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 72610).then(__webpack_require__.bind(__webpack_require__, 72610))),
            source: "",
            meta: undefined
        },
        "input-otp-separator": {
            name: "input-otp-separator",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "input-otp"
            ],
            files: [
                {
                    path: "registry/new-york/examples/input-otp-separator.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 89841).then(__webpack_require__.bind(__webpack_require__, 89841))),
            source: "",
            meta: undefined
        },
        "input-otp-controlled": {
            name: "input-otp-controlled",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "input-otp"
            ],
            files: [
                {
                    path: "registry/new-york/examples/input-otp-controlled.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 55134).then(__webpack_require__.bind(__webpack_require__, 55134))),
            source: "",
            meta: undefined
        },
        "input-otp-form": {
            name: "input-otp-form",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "input-otp",
                "form"
            ],
            files: [
                {
                    path: "registry/new-york/examples/input-otp-form.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 77197).then(__webpack_require__.bind(__webpack_require__, 77197))),
            source: "",
            meta: undefined
        },
        "label-demo": {
            name: "label-demo",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "label"
            ],
            files: [
                {
                    path: "registry/new-york/examples/label-demo.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 35782).then(__webpack_require__.bind(__webpack_require__, 35782))),
            source: "",
            meta: undefined
        },
        "menubar-demo": {
            name: "menubar-demo",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "menubar"
            ],
            files: [
                {
                    path: "registry/new-york/examples/menubar-demo.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 57339).then(__webpack_require__.bind(__webpack_require__, 57339))),
            source: "",
            meta: undefined
        },
        "navigation-menu-demo": {
            name: "navigation-menu-demo",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "navigation-menu"
            ],
            files: [
                {
                    path: "registry/new-york/examples/navigation-menu-demo.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 75854).then(__webpack_require__.bind(__webpack_require__, 75854))),
            source: "",
            meta: undefined
        },
        "pagination-demo": {
            name: "pagination-demo",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "pagination"
            ],
            files: [
                {
                    path: "registry/new-york/examples/pagination-demo.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(66951)]).then(__webpack_require__.bind(__webpack_require__, 66951))),
            source: "",
            meta: undefined
        },
        "popover-demo": {
            name: "popover-demo",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "popover"
            ],
            files: [
                {
                    path: "registry/new-york/examples/popover-demo.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(68348)]).then(__webpack_require__.bind(__webpack_require__, 68348))),
            source: "",
            meta: undefined
        },
        "progress-demo": {
            name: "progress-demo",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "progress"
            ],
            files: [
                {
                    path: "registry/new-york/examples/progress-demo.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 34522).then(__webpack_require__.bind(__webpack_require__, 34522))),
            source: "",
            meta: undefined
        },
        "radio-group-demo": {
            name: "radio-group-demo",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "radio-group"
            ],
            files: [
                {
                    path: "registry/new-york/examples/radio-group-demo.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 28117).then(__webpack_require__.bind(__webpack_require__, 28117))),
            source: "",
            meta: undefined
        },
        "radio-group-form": {
            name: "radio-group-form",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "radio-group",
                "form"
            ],
            files: [
                {
                    path: "registry/new-york/examples/radio-group-form.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 21962).then(__webpack_require__.bind(__webpack_require__, 21962))),
            source: "",
            meta: undefined
        },
        "resizable-demo": {
            name: "resizable-demo",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "resizable"
            ],
            files: [
                {
                    path: "registry/new-york/examples/resizable-demo.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 86723).then(__webpack_require__.bind(__webpack_require__, 86723))),
            source: "",
            meta: undefined
        },
        "resizable-demo-with-handle": {
            name: "resizable-demo-with-handle",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "resizable"
            ],
            files: [
                {
                    path: "registry/new-york/examples/resizable-demo-with-handle.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 15053).then(__webpack_require__.bind(__webpack_require__, 15053))),
            source: "",
            meta: undefined
        },
        "resizable-vertical": {
            name: "resizable-vertical",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "resizable"
            ],
            files: [
                {
                    path: "registry/new-york/examples/resizable-vertical.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 72462).then(__webpack_require__.bind(__webpack_require__, 72462))),
            source: "",
            meta: undefined
        },
        "resizable-handle": {
            name: "resizable-handle",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "resizable"
            ],
            files: [
                {
                    path: "registry/new-york/examples/resizable-handle.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 782).then(__webpack_require__.bind(__webpack_require__, 782))),
            source: "",
            meta: undefined
        },
        "scroll-area-demo": {
            name: "scroll-area-demo",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "scroll-area"
            ],
            files: [
                {
                    path: "registry/new-york/examples/scroll-area-demo.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 92265).then(__webpack_require__.bind(__webpack_require__, 92265))),
            source: "",
            meta: undefined
        },
        "scroll-area-horizontal-demo": {
            name: "scroll-area-horizontal-demo",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "scroll-area"
            ],
            files: [
                {
                    path: "registry/new-york/examples/scroll-area-horizontal-demo.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(50736), __webpack_require__.e(22406)]).then(__webpack_require__.bind(__webpack_require__, 22406))),
            source: "",
            meta: undefined
        },
        "select-demo": {
            name: "select-demo",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "select"
            ],
            files: [
                {
                    path: "registry/new-york/examples/select-demo.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 52546).then(__webpack_require__.bind(__webpack_require__, 52546))),
            source: "",
            meta: undefined
        },
        "select-scrollable": {
            name: "select-scrollable",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "select"
            ],
            files: [
                {
                    path: "registry/new-york/examples/select-scrollable.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 38180).then(__webpack_require__.bind(__webpack_require__, 38180))),
            source: "",
            meta: undefined
        },
        "select-form": {
            name: "select-form",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "select"
            ],
            files: [
                {
                    path: "registry/new-york/examples/select-form.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 91189).then(__webpack_require__.bind(__webpack_require__, 91189))),
            source: "",
            meta: undefined
        },
        "separator-demo": {
            name: "separator-demo",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "separator"
            ],
            files: [
                {
                    path: "registry/new-york/examples/separator-demo.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 12473).then(__webpack_require__.bind(__webpack_require__, 12473))),
            source: "",
            meta: undefined
        },
        "sheet-demo": {
            name: "sheet-demo",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "sheet"
            ],
            files: [
                {
                    path: "registry/new-york/examples/sheet-demo.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(31392)]).then(__webpack_require__.bind(__webpack_require__, 31392))),
            source: "",
            meta: undefined
        },
        "sheet-side": {
            name: "sheet-side",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "sheet"
            ],
            files: [
                {
                    path: "registry/new-york/examples/sheet-side.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 46514).then(__webpack_require__.bind(__webpack_require__, 46514))),
            source: "",
            meta: undefined
        },
        "skeleton-demo": {
            name: "skeleton-demo",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "skeleton"
            ],
            files: [
                {
                    path: "registry/new-york/examples/skeleton-demo.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(75898)]).then(__webpack_require__.bind(__webpack_require__, 75898))),
            source: "",
            meta: undefined
        },
        "skeleton-card": {
            name: "skeleton-card",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "skeleton"
            ],
            files: [
                {
                    path: "registry/new-york/examples/skeleton-card.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(66793)]).then(__webpack_require__.bind(__webpack_require__, 90370))),
            source: "",
            meta: undefined
        },
        "slider-demo": {
            name: "slider-demo",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "slider"
            ],
            files: [
                {
                    path: "registry/new-york/examples/slider-demo.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(75708)]).then(__webpack_require__.bind(__webpack_require__, 75708))),
            source: "",
            meta: undefined
        },
        "sonner-demo": {
            name: "sonner-demo",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "sonner"
            ],
            files: [
                {
                    path: "registry/new-york/examples/sonner-demo.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 40789).then(__webpack_require__.bind(__webpack_require__, 40789))),
            source: "",
            meta: undefined
        },
        "switch-demo": {
            name: "switch-demo",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "switch"
            ],
            files: [
                {
                    path: "registry/new-york/examples/switch-demo.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 66838).then(__webpack_require__.bind(__webpack_require__, 66838))),
            source: "",
            meta: undefined
        },
        "switch-form": {
            name: "switch-form",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "switch",
                "form"
            ],
            files: [
                {
                    path: "registry/new-york/examples/switch-form.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 11738).then(__webpack_require__.bind(__webpack_require__, 61984))),
            source: "",
            meta: undefined
        },
        "table-demo": {
            name: "table-demo",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "table"
            ],
            files: [
                {
                    path: "registry/new-york/examples/table-demo.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(97617)]).then(__webpack_require__.bind(__webpack_require__, 97617))),
            source: "",
            meta: undefined
        },
        "tabs-demo": {
            name: "tabs-demo",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "tabs"
            ],
            files: [
                {
                    path: "registry/new-york/examples/tabs-demo.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(23658)]).then(__webpack_require__.bind(__webpack_require__, 23658))),
            source: "",
            meta: undefined
        },
        "textarea-demo": {
            name: "textarea-demo",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "textarea"
            ],
            files: [
                {
                    path: "registry/new-york/examples/textarea-demo.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(54069)]).then(__webpack_require__.bind(__webpack_require__, 54069))),
            source: "",
            meta: undefined
        },
        "textarea-disabled": {
            name: "textarea-disabled",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "textarea"
            ],
            files: [
                {
                    path: "registry/new-york/examples/textarea-disabled.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(97051)]).then(__webpack_require__.bind(__webpack_require__, 97051))),
            source: "",
            meta: undefined
        },
        "textarea-form": {
            name: "textarea-form",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "textarea",
                "form"
            ],
            files: [
                {
                    path: "registry/new-york/examples/textarea-form.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 8324).then(__webpack_require__.bind(__webpack_require__, 8324))),
            source: "",
            meta: undefined
        },
        "textarea-with-button": {
            name: "textarea-with-button",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "textarea",
                "button"
            ],
            files: [
                {
                    path: "registry/new-york/examples/textarea-with-button.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(44880)]).then(__webpack_require__.bind(__webpack_require__, 44880))),
            source: "",
            meta: undefined
        },
        "textarea-with-label": {
            name: "textarea-with-label",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "textarea",
                "label"
            ],
            files: [
                {
                    path: "registry/new-york/examples/textarea-with-label.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(38811)]).then(__webpack_require__.bind(__webpack_require__, 38811))),
            source: "",
            meta: undefined
        },
        "textarea-with-text": {
            name: "textarea-with-text",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "textarea",
                "label"
            ],
            files: [
                {
                    path: "registry/new-york/examples/textarea-with-text.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(62730)]).then(__webpack_require__.bind(__webpack_require__, 62730))),
            source: "",
            meta: undefined
        },
        "toast-demo": {
            name: "toast-demo",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "toast"
            ],
            files: [
                {
                    path: "registry/new-york/examples/toast-demo.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 80080).then(__webpack_require__.bind(__webpack_require__, 80080))),
            source: "",
            meta: undefined
        },
        "toast-destructive": {
            name: "toast-destructive",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "toast"
            ],
            files: [
                {
                    path: "registry/new-york/examples/toast-destructive.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 28616).then(__webpack_require__.bind(__webpack_require__, 28616))),
            source: "",
            meta: undefined
        },
        "toast-simple": {
            name: "toast-simple",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "toast"
            ],
            files: [
                {
                    path: "registry/new-york/examples/toast-simple.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 32979).then(__webpack_require__.bind(__webpack_require__, 32979))),
            source: "",
            meta: undefined
        },
        "toast-with-action": {
            name: "toast-with-action",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "toast"
            ],
            files: [
                {
                    path: "registry/new-york/examples/toast-with-action.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 81199).then(__webpack_require__.bind(__webpack_require__, 81199))),
            source: "",
            meta: undefined
        },
        "toast-with-title": {
            name: "toast-with-title",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "toast"
            ],
            files: [
                {
                    path: "registry/new-york/examples/toast-with-title.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 40161).then(__webpack_require__.bind(__webpack_require__, 40161))),
            source: "",
            meta: undefined
        },
        "toggle-group-demo": {
            name: "toggle-group-demo",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "toggle-group"
            ],
            files: [
                {
                    path: "registry/new-york/examples/toggle-group-demo.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 8675).then(__webpack_require__.bind(__webpack_require__, 8675))),
            source: "",
            meta: undefined
        },
        "toggle-group-disabled": {
            name: "toggle-group-disabled",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "toggle-group"
            ],
            files: [
                {
                    path: "registry/new-york/examples/toggle-group-disabled.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 59842).then(__webpack_require__.bind(__webpack_require__, 59842))),
            source: "",
            meta: undefined
        },
        "toggle-group-lg": {
            name: "toggle-group-lg",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "toggle-group"
            ],
            files: [
                {
                    path: "registry/new-york/examples/toggle-group-lg.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 35572).then(__webpack_require__.bind(__webpack_require__, 35572))),
            source: "",
            meta: undefined
        },
        "toggle-group-outline": {
            name: "toggle-group-outline",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "toggle-group"
            ],
            files: [
                {
                    path: "registry/new-york/examples/toggle-group-outline.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 62833).then(__webpack_require__.bind(__webpack_require__, 62833))),
            source: "",
            meta: undefined
        },
        "toggle-group-sm": {
            name: "toggle-group-sm",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "toggle-group"
            ],
            files: [
                {
                    path: "registry/new-york/examples/toggle-group-sm.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 62714).then(__webpack_require__.bind(__webpack_require__, 62714))),
            source: "",
            meta: undefined
        },
        "toggle-group-single": {
            name: "toggle-group-single",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "toggle-group"
            ],
            files: [
                {
                    path: "registry/new-york/examples/toggle-group-single.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 1275).then(__webpack_require__.bind(__webpack_require__, 1275))),
            source: "",
            meta: undefined
        },
        "toggle-demo": {
            name: "toggle-demo",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "toggle"
            ],
            files: [
                {
                    path: "registry/new-york/examples/toggle-demo.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 92240).then(__webpack_require__.bind(__webpack_require__, 92240))),
            source: "",
            meta: undefined
        },
        "toggle-disabled": {
            name: "toggle-disabled",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "toggle"
            ],
            files: [
                {
                    path: "registry/new-york/examples/toggle-disabled.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 75463).then(__webpack_require__.bind(__webpack_require__, 75463))),
            source: "",
            meta: undefined
        },
        "toggle-lg": {
            name: "toggle-lg",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "toggle"
            ],
            files: [
                {
                    path: "registry/new-york/examples/toggle-lg.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 288).then(__webpack_require__.bind(__webpack_require__, 288))),
            source: "",
            meta: undefined
        },
        "toggle-outline": {
            name: "toggle-outline",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "toggle"
            ],
            files: [
                {
                    path: "registry/new-york/examples/toggle-outline.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 78914).then(__webpack_require__.bind(__webpack_require__, 78914))),
            source: "",
            meta: undefined
        },
        "toggle-sm": {
            name: "toggle-sm",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "toggle"
            ],
            files: [
                {
                    path: "registry/new-york/examples/toggle-sm.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 98727).then(__webpack_require__.bind(__webpack_require__, 98727))),
            source: "",
            meta: undefined
        },
        "toggle-with-text": {
            name: "toggle-with-text",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "toggle"
            ],
            files: [
                {
                    path: "registry/new-york/examples/toggle-with-text.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 97665).then(__webpack_require__.bind(__webpack_require__, 97665))),
            source: "",
            meta: undefined
        },
        "tooltip-demo": {
            name: "tooltip-demo",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "tooltip"
            ],
            files: [
                {
                    path: "registry/new-york/examples/tooltip-demo.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(58925)]).then(__webpack_require__.bind(__webpack_require__, 58925))),
            source: "",
            meta: undefined
        },
        "typography-blockquote": {
            name: "typography-blockquote",
            description: "",
            type: "registry:example",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/new-york/examples/typography-blockquote.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 86835).then(__webpack_require__.bind(__webpack_require__, 86835))),
            source: "",
            meta: undefined
        },
        "typography-demo": {
            name: "typography-demo",
            description: "",
            type: "registry:example",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/new-york/examples/typography-demo.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 46937).then(__webpack_require__.bind(__webpack_require__, 46937))),
            source: "",
            meta: undefined
        },
        "typography-h1": {
            name: "typography-h1",
            description: "",
            type: "registry:example",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/new-york/examples/typography-h1.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 60849).then(__webpack_require__.bind(__webpack_require__, 60849))),
            source: "",
            meta: undefined
        },
        "typography-h2": {
            name: "typography-h2",
            description: "",
            type: "registry:example",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/new-york/examples/typography-h2.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 54305).then(__webpack_require__.bind(__webpack_require__, 54305))),
            source: "",
            meta: undefined
        },
        "typography-h3": {
            name: "typography-h3",
            description: "",
            type: "registry:example",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/new-york/examples/typography-h3.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 74505).then(__webpack_require__.bind(__webpack_require__, 74505))),
            source: "",
            meta: undefined
        },
        "typography-h4": {
            name: "typography-h4",
            description: "",
            type: "registry:example",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/new-york/examples/typography-h4.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 43012).then(__webpack_require__.bind(__webpack_require__, 43012))),
            source: "",
            meta: undefined
        },
        "typography-inline-code": {
            name: "typography-inline-code",
            description: "",
            type: "registry:example",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/new-york/examples/typography-inline-code.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 64619).then(__webpack_require__.bind(__webpack_require__, 64619))),
            source: "",
            meta: undefined
        },
        "typography-large": {
            name: "typography-large",
            description: "",
            type: "registry:example",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/new-york/examples/typography-large.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 46341).then(__webpack_require__.bind(__webpack_require__, 47551))),
            source: "",
            meta: undefined
        },
        "typography-lead": {
            name: "typography-lead",
            description: "",
            type: "registry:example",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/new-york/examples/typography-lead.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 20318).then(__webpack_require__.bind(__webpack_require__, 20318))),
            source: "",
            meta: undefined
        },
        "typography-list": {
            name: "typography-list",
            description: "",
            type: "registry:example",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/new-york/examples/typography-list.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 78324).then(__webpack_require__.bind(__webpack_require__, 78324))),
            source: "",
            meta: undefined
        },
        "typography-muted": {
            name: "typography-muted",
            description: "",
            type: "registry:example",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/new-york/examples/typography-muted.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 51680).then(__webpack_require__.bind(__webpack_require__, 77465))),
            source: "",
            meta: undefined
        },
        "typography-p": {
            name: "typography-p",
            description: "",
            type: "registry:example",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/new-york/examples/typography-p.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 66258).then(__webpack_require__.bind(__webpack_require__, 66258))),
            source: "",
            meta: undefined
        },
        "typography-small": {
            name: "typography-small",
            description: "",
            type: "registry:example",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/new-york/examples/typography-small.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 86358).then(__webpack_require__.bind(__webpack_require__, 86358))),
            source: "",
            meta: undefined
        },
        "typography-table": {
            name: "typography-table",
            description: "",
            type: "registry:example",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/new-york/examples/typography-table.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 98255).then(__webpack_require__.bind(__webpack_require__, 98255))),
            source: "",
            meta: undefined
        },
        "mode-toggle": {
            name: "mode-toggle",
            description: "",
            type: "registry:example",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/new-york/examples/mode-toggle.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 56506).then(__webpack_require__.bind(__webpack_require__, 56506))),
            source: "",
            meta: undefined
        },
        "chart-bar-demo": {
            name: "chart-bar-demo",
            description: "",
            type: "registry:example",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/new-york/examples/chart-bar-demo.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 13941).then(__webpack_require__.bind(__webpack_require__, 13941))),
            source: "",
            meta: undefined
        },
        "chart-bar-demo-grid": {
            name: "chart-bar-demo-grid",
            description: "",
            type: "registry:example",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/new-york/examples/chart-bar-demo-grid.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 15299).then(__webpack_require__.bind(__webpack_require__, 15299))),
            source: "",
            meta: undefined
        },
        "chart-bar-demo-axis": {
            name: "chart-bar-demo-axis",
            description: "",
            type: "registry:example",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/new-york/examples/chart-bar-demo-axis.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 21998).then(__webpack_require__.bind(__webpack_require__, 21998))),
            source: "",
            meta: undefined
        },
        "chart-bar-demo-tooltip": {
            name: "chart-bar-demo-tooltip",
            description: "",
            type: "registry:example",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/new-york/examples/chart-bar-demo-tooltip.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 41423).then(__webpack_require__.bind(__webpack_require__, 41423))),
            source: "",
            meta: undefined
        },
        "chart-bar-demo-legend": {
            name: "chart-bar-demo-legend",
            description: "",
            type: "registry:example",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/new-york/examples/chart-bar-demo-legend.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 47054).then(__webpack_require__.bind(__webpack_require__, 47054))),
            source: "",
            meta: undefined
        },
        "chart-tooltip-demo": {
            name: "chart-tooltip-demo",
            description: "",
            type: "registry:example",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/new-york/examples/chart-tooltip-demo.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 31390).then(__webpack_require__.bind(__webpack_require__, 31390))),
            source: "",
            meta: undefined
        }
    },
    "default": {
        "accordion": {
            name: "accordion",
            description: "",
            type: "registry:ui",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/default/ui/accordion.tsx",
                    type: "registry:ui",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 69691).then(__webpack_require__.bind(__webpack_require__, 69691))),
            source: "",
            meta: undefined
        },
        "alert": {
            name: "alert",
            description: "",
            type: "registry:ui",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/default/ui/alert.tsx",
                    type: "registry:ui",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(27285)]).then(__webpack_require__.bind(__webpack_require__, 27285))),
            source: "",
            meta: undefined
        },
        "alert-dialog": {
            name: "alert-dialog",
            description: "",
            type: "registry:ui",
            registryDependencies: [
                "button"
            ],
            files: [
                {
                    path: "registry/default/ui/alert-dialog.tsx",
                    type: "registry:ui",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 73499).then(__webpack_require__.bind(__webpack_require__, 73499))),
            source: "",
            meta: undefined
        },
        "aspect-ratio": {
            name: "aspect-ratio",
            description: "",
            type: "registry:ui",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/default/ui/aspect-ratio.tsx",
                    type: "registry:ui",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 899).then(__webpack_require__.bind(__webpack_require__, 899))),
            source: "",
            meta: undefined
        },
        "avatar": {
            name: "avatar",
            description: "",
            type: "registry:ui",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/default/ui/avatar.tsx",
                    type: "registry:ui",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 94146).then(__webpack_require__.bind(__webpack_require__, 73192))),
            source: "",
            meta: undefined
        },
        "badge": {
            name: "badge",
            description: "",
            type: "registry:ui",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/default/ui/badge.tsx",
                    type: "registry:ui",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(23805)]).then(__webpack_require__.bind(__webpack_require__, 23805))),
            source: "",
            meta: undefined
        },
        "breadcrumb": {
            name: "breadcrumb",
            description: "",
            type: "registry:ui",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/default/ui/breadcrumb.tsx",
                    type: "registry:ui",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(51430)]).then(__webpack_require__.bind(__webpack_require__, 51430))),
            source: "",
            meta: undefined
        },
        "button": {
            name: "button",
            description: "",
            type: "registry:ui",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/default/ui/button.tsx",
                    type: "registry:ui",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(46472)]).then(__webpack_require__.bind(__webpack_require__, 46472))),
            source: "",
            meta: undefined
        },
        "calendar": {
            name: "calendar",
            description: "",
            type: "registry:ui",
            registryDependencies: [
                "button"
            ],
            files: [
                {
                    path: "registry/default/ui/calendar.tsx",
                    type: "registry:ui",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 84675).then(__webpack_require__.bind(__webpack_require__, 84675))),
            source: "",
            meta: undefined
        },
        "card": {
            name: "card",
            description: "",
            type: "registry:ui",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/default/ui/card.tsx",
                    type: "registry:ui",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(95290)]).then(__webpack_require__.bind(__webpack_require__, 95290))),
            source: "",
            meta: undefined
        },
        "carousel": {
            name: "carousel",
            description: "",
            type: "registry:ui",
            registryDependencies: [
                "button"
            ],
            files: [
                {
                    path: "registry/default/ui/carousel.tsx",
                    type: "registry:ui",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 57446).then(__webpack_require__.bind(__webpack_require__, 57446))),
            source: "",
            meta: undefined
        },
        "chart": {
            name: "chart",
            description: "",
            type: "registry:ui",
            registryDependencies: [
                "card"
            ],
            files: [
                {
                    path: "registry/default/ui/chart.tsx",
                    type: "registry:ui",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 34174).then(__webpack_require__.bind(__webpack_require__, 34174))),
            source: "",
            meta: undefined
        },
        "checkbox": {
            name: "checkbox",
            description: "",
            type: "registry:ui",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/default/ui/checkbox.tsx",
                    type: "registry:ui",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 44896).then(__webpack_require__.bind(__webpack_require__, 44896))),
            source: "",
            meta: undefined
        },
        "collapsible": {
            name: "collapsible",
            description: "",
            type: "registry:ui",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/default/ui/collapsible.tsx",
                    type: "registry:ui",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 6864).then(__webpack_require__.bind(__webpack_require__, 6864))),
            source: "",
            meta: undefined
        },
        "command": {
            name: "command",
            description: "",
            type: "registry:ui",
            registryDependencies: [
                "dialog"
            ],
            files: [
                {
                    path: "registry/default/ui/command.tsx",
                    type: "registry:ui",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 20051).then(__webpack_require__.bind(__webpack_require__, 20051))),
            source: "",
            meta: undefined
        },
        "context-menu": {
            name: "context-menu",
            description: "",
            type: "registry:ui",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/default/ui/context-menu.tsx",
                    type: "registry:ui",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 41165).then(__webpack_require__.bind(__webpack_require__, 41165))),
            source: "",
            meta: undefined
        },
        "dialog": {
            name: "dialog",
            description: "",
            type: "registry:ui",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/default/ui/dialog.tsx",
                    type: "registry:ui",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 91617).then(__webpack_require__.bind(__webpack_require__, 91617))),
            source: "",
            meta: undefined
        },
        "drawer": {
            name: "drawer",
            description: "",
            type: "registry:ui",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/default/ui/drawer.tsx",
                    type: "registry:ui",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 31788).then(__webpack_require__.bind(__webpack_require__, 31788))),
            source: "",
            meta: undefined
        },
        "dropdown-menu": {
            name: "dropdown-menu",
            description: "",
            type: "registry:ui",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/default/ui/dropdown-menu.tsx",
                    type: "registry:ui",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 46350).then(__webpack_require__.bind(__webpack_require__, 46350))),
            source: "",
            meta: undefined
        },
        "form": {
            name: "form",
            description: "",
            type: "registry:ui",
            registryDependencies: [
                "button",
                "label"
            ],
            files: [
                {
                    path: "registry/default/ui/form.tsx",
                    type: "registry:ui",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 18300).then(__webpack_require__.bind(__webpack_require__, 18300))),
            source: "",
            meta: undefined
        },
        "hover-card": {
            name: "hover-card",
            description: "",
            type: "registry:ui",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/default/ui/hover-card.tsx",
                    type: "registry:ui",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 66480).then(__webpack_require__.bind(__webpack_require__, 66480))),
            source: "",
            meta: undefined
        },
        "input": {
            name: "input",
            description: "",
            type: "registry:ui",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/default/ui/input.tsx",
                    type: "registry:ui",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(2147)]).then(__webpack_require__.bind(__webpack_require__, 2147))),
            source: "",
            meta: undefined
        },
        "input-otp": {
            name: "input-otp",
            description: "",
            type: "registry:ui",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/default/ui/input-otp.tsx",
                    type: "registry:ui",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 7329).then(__webpack_require__.bind(__webpack_require__, 7329))),
            source: "",
            meta: undefined
        },
        "label": {
            name: "label",
            description: "",
            type: "registry:ui",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/default/ui/label.tsx",
                    type: "registry:ui",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 43776).then(__webpack_require__.bind(__webpack_require__, 43776))),
            source: "",
            meta: undefined
        },
        "menubar": {
            name: "menubar",
            description: "",
            type: "registry:ui",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/default/ui/menubar.tsx",
                    type: "registry:ui",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 48150).then(__webpack_require__.bind(__webpack_require__, 48150))),
            source: "",
            meta: undefined
        },
        "navigation-menu": {
            name: "navigation-menu",
            description: "",
            type: "registry:ui",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/default/ui/navigation-menu.tsx",
                    type: "registry:ui",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(41309), __webpack_require__.e(90736)]).then(__webpack_require__.bind(__webpack_require__, 90736))),
            source: "",
            meta: undefined
        },
        "pagination": {
            name: "pagination",
            description: "",
            type: "registry:ui",
            registryDependencies: [
                "button"
            ],
            files: [
                {
                    path: "registry/default/ui/pagination.tsx",
                    type: "registry:ui",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(66293)]).then(__webpack_require__.bind(__webpack_require__, 66293))),
            source: "",
            meta: undefined
        },
        "popover": {
            name: "popover",
            description: "",
            type: "registry:ui",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/default/ui/popover.tsx",
                    type: "registry:ui",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 97078).then(__webpack_require__.bind(__webpack_require__, 97078))),
            source: "",
            meta: undefined
        },
        "progress": {
            name: "progress",
            description: "",
            type: "registry:ui",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/default/ui/progress.tsx",
                    type: "registry:ui",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 54348).then(__webpack_require__.bind(__webpack_require__, 54348))),
            source: "",
            meta: undefined
        },
        "radio-group": {
            name: "radio-group",
            description: "",
            type: "registry:ui",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/default/ui/radio-group.tsx",
                    type: "registry:ui",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 19670).then(__webpack_require__.bind(__webpack_require__, 19670))),
            source: "",
            meta: undefined
        },
        "resizable": {
            name: "resizable",
            description: "",
            type: "registry:ui",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/default/ui/resizable.tsx",
                    type: "registry:ui",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 92666).then(__webpack_require__.bind(__webpack_require__, 92666))),
            source: "",
            meta: undefined
        },
        "scroll-area": {
            name: "scroll-area",
            description: "",
            type: "registry:ui",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/default/ui/scroll-area.tsx",
                    type: "registry:ui",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 71391).then(__webpack_require__.bind(__webpack_require__, 71391))),
            source: "",
            meta: undefined
        },
        "select": {
            name: "select",
            description: "",
            type: "registry:ui",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/default/ui/select.tsx",
                    type: "registry:ui",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 13789).then(__webpack_require__.bind(__webpack_require__, 13789))),
            source: "",
            meta: undefined
        },
        "separator": {
            name: "separator",
            description: "",
            type: "registry:ui",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/default/ui/separator.tsx",
                    type: "registry:ui",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 90872).then(__webpack_require__.bind(__webpack_require__, 90872))),
            source: "",
            meta: undefined
        },
        "sheet": {
            name: "sheet",
            description: "",
            type: "registry:ui",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/default/ui/sheet.tsx",
                    type: "registry:ui",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 61489).then(__webpack_require__.bind(__webpack_require__, 92793))),
            source: "",
            meta: undefined
        },
        "sidebar": {
            name: "sidebar",
            description: "",
            type: "registry:ui",
            registryDependencies: [
                "button",
                "separator",
                "sheet",
                "tooltip",
                "input",
                "use-mobile",
                "skeleton"
            ],
            files: [
                {
                    path: "registry/default/ui/sidebar.tsx",
                    type: "registry:ui",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 72032).then(__webpack_require__.bind(__webpack_require__, 72032))),
            source: "",
            meta: undefined
        },
        "skeleton": {
            name: "skeleton",
            description: "",
            type: "registry:ui",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/default/ui/skeleton.tsx",
                    type: "registry:ui",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(17162)]).then(__webpack_require__.bind(__webpack_require__, 17162))),
            source: "",
            meta: undefined
        },
        "slider": {
            name: "slider",
            description: "",
            type: "registry:ui",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/default/ui/slider.tsx",
                    type: "registry:ui",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 91717).then(__webpack_require__.bind(__webpack_require__, 91717))),
            source: "",
            meta: undefined
        },
        "sonner": {
            name: "sonner",
            description: "",
            type: "registry:ui",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/default/ui/sonner.tsx",
                    type: "registry:ui",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 59550).then(__webpack_require__.bind(__webpack_require__, 59550))),
            source: "",
            meta: undefined
        },
        "switch": {
            name: "switch",
            description: "",
            type: "registry:ui",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/default/ui/switch.tsx",
                    type: "registry:ui",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 35788).then(__webpack_require__.bind(__webpack_require__, 35788))),
            source: "",
            meta: undefined
        },
        "table": {
            name: "table",
            description: "",
            type: "registry:ui",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/default/ui/table.tsx",
                    type: "registry:ui",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(80694)]).then(__webpack_require__.bind(__webpack_require__, 80694))),
            source: "",
            meta: undefined
        },
        "tabs": {
            name: "tabs",
            description: "",
            type: "registry:ui",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/default/ui/tabs.tsx",
                    type: "registry:ui",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 9706).then(__webpack_require__.bind(__webpack_require__, 9706))),
            source: "",
            meta: undefined
        },
        "textarea": {
            name: "textarea",
            description: "",
            type: "registry:ui",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/default/ui/textarea.tsx",
                    type: "registry:ui",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(15678)]).then(__webpack_require__.bind(__webpack_require__, 15678))),
            source: "",
            meta: undefined
        },
        "toast": {
            name: "toast",
            description: "",
            type: "registry:ui",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/default/ui/toast.tsx",
                    type: "registry:ui",
                    target: ""
                },
                {
                    path: "registry/default/hooks/use-toast.ts",
                    type: "registry:hook",
                    target: ""
                },
                {
                    path: "registry/default/ui/toaster.tsx",
                    type: "registry:ui",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 23943).then(__webpack_require__.bind(__webpack_require__, 23943))),
            source: "",
            meta: undefined
        },
        "toggle": {
            name: "toggle",
            description: "",
            type: "registry:ui",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/default/ui/toggle.tsx",
                    type: "registry:ui",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 83603).then(__webpack_require__.bind(__webpack_require__, 83603))),
            source: "",
            meta: undefined
        },
        "toggle-group": {
            name: "toggle-group",
            description: "",
            type: "registry:ui",
            registryDependencies: [
                "toggle"
            ],
            files: [
                {
                    path: "registry/default/ui/toggle-group.tsx",
                    type: "registry:ui",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 77109).then(__webpack_require__.bind(__webpack_require__, 77109))),
            source: "",
            meta: undefined
        },
        "tooltip": {
            name: "tooltip",
            description: "",
            type: "registry:ui",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/default/ui/tooltip.tsx",
                    type: "registry:ui",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 73519).then(__webpack_require__.bind(__webpack_require__, 73519))),
            source: "",
            meta: undefined
        },
        "sidebar-01": {
            name: "sidebar-01",
            description: "A simple sidebar with navigation grouped by section.",
            type: "registry:block",
            registryDependencies: [
                "sidebar",
                "breadcrumb",
                "separator",
                "label",
                "dropdown-menu"
            ],
            files: [
                {
                    path: "registry/default/blocks/sidebar-01/page.tsx",
                    type: "registry:page",
                    target: "app/dashboard/page.tsx"
                },
                {
                    path: "registry/default/blocks/sidebar-01/components/app-sidebar.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/default/blocks/sidebar-01/components/search-form.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/default/blocks/sidebar-01/components/version-switcher.tsx",
                    type: "registry:component",
                    target: ""
                }
            ],
            categories: [
                "sidebar",
                "dashboard"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(26106)]).then(__webpack_require__.bind(__webpack_require__, 26106))),
            source: "__registry__/default/blocks/sidebar-01/page.tsx",
            meta: undefined
        },
        "sidebar-02": {
            name: "sidebar-02",
            description: "A sidebar with collapsible sections.",
            type: "registry:block",
            registryDependencies: [
                "sidebar",
                "breadcrumb",
                "separator",
                "label",
                "dropdown-menu"
            ],
            files: [
                {
                    path: "registry/default/blocks/sidebar-02/page.tsx",
                    type: "registry:page",
                    target: "app/dashboard/page.tsx"
                },
                {
                    path: "registry/default/blocks/sidebar-02/components/app-sidebar.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/default/blocks/sidebar-02/components/search-form.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/default/blocks/sidebar-02/components/version-switcher.tsx",
                    type: "registry:component",
                    target: ""
                }
            ],
            categories: [
                "sidebar",
                "dashboard"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(54539)]).then(__webpack_require__.bind(__webpack_require__, 54539))),
            source: "__registry__/default/blocks/sidebar-02/page.tsx",
            meta: undefined
        },
        "sidebar-03": {
            name: "sidebar-03",
            description: "A sidebar with submenus.",
            type: "registry:block",
            registryDependencies: [
                "sidebar",
                "breadcrumb"
            ],
            files: [
                {
                    path: "registry/default/blocks/sidebar-03/page.tsx",
                    type: "registry:page",
                    target: "app/dashboard/page.tsx"
                },
                {
                    path: "registry/default/blocks/sidebar-03/components/app-sidebar.tsx",
                    type: "registry:component",
                    target: ""
                }
            ],
            categories: [
                "sidebar",
                "dashboard"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(96411)]).then(__webpack_require__.bind(__webpack_require__, 96411))),
            source: "__registry__/default/blocks/sidebar-03/page.tsx",
            meta: undefined
        },
        "sidebar-04": {
            name: "sidebar-04",
            description: "A floating sidebar with submenus.",
            type: "registry:block",
            registryDependencies: [
                "sidebar",
                "breadcrumb",
                "separator"
            ],
            files: [
                {
                    path: "registry/default/blocks/sidebar-04/page.tsx",
                    type: "registry:page",
                    target: "app/dashboard/page.tsx"
                },
                {
                    path: "registry/default/blocks/sidebar-04/components/app-sidebar.tsx",
                    type: "registry:component",
                    target: ""
                }
            ],
            categories: [
                "sidebar",
                "dashboard"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(50504)]).then(__webpack_require__.bind(__webpack_require__, 50504))),
            source: "__registry__/default/blocks/sidebar-04/page.tsx",
            meta: undefined
        },
        "sidebar-05": {
            name: "sidebar-05",
            description: "A sidebar with collapsible submenus.",
            type: "registry:block",
            registryDependencies: [
                "sidebar",
                "breadcrumb",
                "separator",
                "label",
                "collapsible"
            ],
            files: [
                {
                    path: "registry/default/blocks/sidebar-05/page.tsx",
                    type: "registry:page",
                    target: "app/dashboard/page.tsx"
                },
                {
                    path: "registry/default/blocks/sidebar-05/components/app-sidebar.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/default/blocks/sidebar-05/components/search-form.tsx",
                    type: "registry:component",
                    target: ""
                }
            ],
            categories: [
                "sidebar",
                "dashboard"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(23733)]).then(__webpack_require__.bind(__webpack_require__, 23733))),
            source: "__registry__/default/blocks/sidebar-05/page.tsx",
            meta: undefined
        },
        "sidebar-06": {
            name: "sidebar-06",
            description: "A sidebar with submenus as dropdowns.",
            type: "registry:block",
            registryDependencies: [
                "sidebar",
                "breadcrumb",
                "separator",
                "card",
                "dropdown-menu"
            ],
            files: [
                {
                    path: "registry/default/blocks/sidebar-06/page.tsx",
                    type: "registry:page",
                    target: "app/dashboard/page.tsx"
                },
                {
                    path: "registry/default/blocks/sidebar-06/components/app-sidebar.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/default/blocks/sidebar-06/components/nav-main.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/default/blocks/sidebar-06/components/sidebar-opt-in-form.tsx",
                    type: "registry:component",
                    target: ""
                }
            ],
            categories: [
                "sidebar",
                "dashboard"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(24436)]).then(__webpack_require__.bind(__webpack_require__, 24436))),
            source: "__registry__/default/blocks/sidebar-06/page.tsx",
            meta: undefined
        },
        "sidebar-07": {
            name: "sidebar-07",
            description: "A sidebar that collapses to icons.",
            type: "registry:block",
            registryDependencies: [
                "sidebar",
                "breadcrumb",
                "separator",
                "collapsible",
                "dropdown-menu",
                "avatar"
            ],
            files: [
                {
                    path: "registry/default/blocks/sidebar-07/page.tsx",
                    type: "registry:page",
                    target: "app/dashboard/page.tsx"
                },
                {
                    path: "registry/default/blocks/sidebar-07/components/app-sidebar.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/default/blocks/sidebar-07/components/nav-main.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/default/blocks/sidebar-07/components/nav-projects.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/default/blocks/sidebar-07/components/nav-user.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/default/blocks/sidebar-07/components/team-switcher.tsx",
                    type: "registry:component",
                    target: ""
                }
            ],
            categories: [
                "sidebar",
                "dashboard"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(23137)]).then(__webpack_require__.bind(__webpack_require__, 23137))),
            source: "__registry__/default/blocks/sidebar-07/page.tsx",
            meta: undefined
        },
        "sidebar-08": {
            name: "sidebar-08",
            description: "An inset sidebar with secondary navigation.",
            type: "registry:block",
            registryDependencies: [
                "sidebar",
                "breadcrumb",
                "separator",
                "collapsible",
                "dropdown-menu",
                "avatar"
            ],
            files: [
                {
                    path: "registry/default/blocks/sidebar-08/page.tsx",
                    type: "registry:page",
                    target: "app/dashboard/page.tsx"
                },
                {
                    path: "registry/default/blocks/sidebar-08/components/app-sidebar.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/default/blocks/sidebar-08/components/nav-main.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/default/blocks/sidebar-08/components/nav-projects.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/default/blocks/sidebar-08/components/nav-secondary.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/default/blocks/sidebar-08/components/nav-user.tsx",
                    type: "registry:component",
                    target: ""
                }
            ],
            categories: [
                "sidebar",
                "dashboard"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(90482)]).then(__webpack_require__.bind(__webpack_require__, 90482))),
            source: "__registry__/default/blocks/sidebar-08/page.tsx",
            meta: undefined
        },
        "sidebar-09": {
            name: "sidebar-09",
            description: "Collapsible nested sidebars.",
            type: "registry:block",
            registryDependencies: [
                "sidebar",
                "breadcrumb",
                "separator",
                "collapsible",
                "dropdown-menu",
                "avatar",
                "switch"
            ],
            files: [
                {
                    path: "registry/default/blocks/sidebar-09/page.tsx",
                    type: "registry:page",
                    target: "app/dashboard/page.tsx"
                },
                {
                    path: "registry/default/blocks/sidebar-09/components/app-sidebar.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/default/blocks/sidebar-09/components/nav-user.tsx",
                    type: "registry:component",
                    target: ""
                }
            ],
            categories: [
                "sidebar",
                "dashboard"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(93123)]).then(__webpack_require__.bind(__webpack_require__, 93123))),
            source: "__registry__/default/blocks/sidebar-09/page.tsx",
            meta: undefined
        },
        "sidebar-10": {
            name: "sidebar-10",
            description: "A sidebar in a popover.",
            type: "registry:block",
            registryDependencies: [
                "sidebar",
                "breadcrumb",
                "separator",
                "popover",
                "collapsible",
                "dropdown-menu"
            ],
            files: [
                {
                    path: "registry/default/blocks/sidebar-10/page.tsx",
                    type: "registry:page",
                    target: "app/dashboard/page.tsx"
                },
                {
                    path: "registry/default/blocks/sidebar-10/components/app-sidebar.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/default/blocks/sidebar-10/components/nav-actions.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/default/blocks/sidebar-10/components/nav-favorites.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/default/blocks/sidebar-10/components/nav-main.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/default/blocks/sidebar-10/components/nav-secondary.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/default/blocks/sidebar-10/components/nav-workspaces.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/default/blocks/sidebar-10/components/team-switcher.tsx",
                    type: "registry:component",
                    target: ""
                }
            ],
            categories: [
                "sidebar",
                "dashboard"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(3360)]).then(__webpack_require__.bind(__webpack_require__, 3360))),
            source: "__registry__/default/blocks/sidebar-10/page.tsx",
            meta: undefined
        },
        "sidebar-11": {
            name: "sidebar-11",
            description: "A sidebar with a collapsible file tree.",
            type: "registry:block",
            registryDependencies: [
                "sidebar",
                "breadcrumb",
                "separator",
                "collapsible"
            ],
            files: [
                {
                    path: "registry/default/blocks/sidebar-11/page.tsx",
                    type: "registry:page",
                    target: "app/dashboard/page.tsx"
                },
                {
                    path: "registry/default/blocks/sidebar-11/components/app-sidebar.tsx",
                    type: "registry:component",
                    target: ""
                }
            ],
            categories: [
                "sidebar",
                "dashboard"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(25389)]).then(__webpack_require__.bind(__webpack_require__, 25389))),
            source: "__registry__/default/blocks/sidebar-11/page.tsx",
            meta: undefined
        },
        "sidebar-12": {
            name: "sidebar-12",
            description: "A sidebar with a calendar.",
            type: "registry:block",
            registryDependencies: [
                "sidebar",
                "breadcrumb",
                "separator",
                "collapsible",
                "calendar",
                "dropdown-menu",
                "avatar"
            ],
            files: [
                {
                    path: "registry/default/blocks/sidebar-12/page.tsx",
                    type: "registry:page",
                    target: "app/dashboard/page.tsx"
                },
                {
                    path: "registry/default/blocks/sidebar-12/components/app-sidebar.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/default/blocks/sidebar-12/components/calendars.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/default/blocks/sidebar-12/components/date-picker.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/default/blocks/sidebar-12/components/nav-user.tsx",
                    type: "registry:component",
                    target: ""
                }
            ],
            categories: [
                "sidebar",
                "dashboard"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(99590)]).then(__webpack_require__.bind(__webpack_require__, 99590))),
            source: "__registry__/default/blocks/sidebar-12/page.tsx",
            meta: undefined
        },
        "sidebar-13": {
            name: "sidebar-13",
            description: "A sidebar in a dialog.",
            type: "registry:block",
            registryDependencies: [
                "sidebar",
                "breadcrumb",
                "button",
                "dialog"
            ],
            files: [
                {
                    path: "registry/default/blocks/sidebar-13/page.tsx",
                    type: "registry:page",
                    target: "app/dashboard/page.tsx"
                },
                {
                    path: "registry/default/blocks/sidebar-13/components/settings-dialog.tsx",
                    type: "registry:component",
                    target: ""
                }
            ],
            categories: [
                "sidebar",
                "dashboard"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 81796).then(__webpack_require__.bind(__webpack_require__, 81796))),
            source: "__registry__/default/blocks/sidebar-13/page.tsx",
            meta: undefined
        },
        "sidebar-14": {
            name: "sidebar-14",
            description: "A sidebar on the right.",
            type: "registry:block",
            registryDependencies: [
                "sidebar",
                "breadcrumb"
            ],
            files: [
                {
                    path: "registry/default/blocks/sidebar-14/page.tsx",
                    type: "registry:page",
                    target: "app/dashboard/page.tsx"
                },
                {
                    path: "registry/default/blocks/sidebar-14/components/app-sidebar.tsx",
                    type: "registry:component",
                    target: ""
                }
            ],
            categories: [
                "sidebar",
                "dashboard"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(85444)]).then(__webpack_require__.bind(__webpack_require__, 85444))),
            source: "__registry__/default/blocks/sidebar-14/page.tsx",
            meta: undefined
        },
        "sidebar-15": {
            name: "sidebar-15",
            description: "A left and right sidebar.",
            type: "registry:block",
            registryDependencies: [
                "sidebar",
                "breadcrumb",
                "separator",
                "popover",
                "collapsible",
                "dropdown-menu",
                "calendar",
                "avatar"
            ],
            files: [
                {
                    path: "registry/default/blocks/sidebar-15/page.tsx",
                    type: "registry:page",
                    target: "app/dashboard/page.tsx"
                },
                {
                    path: "registry/default/blocks/sidebar-15/components/calendars.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/default/blocks/sidebar-15/components/date-picker.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/default/blocks/sidebar-15/components/nav-favorites.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/default/blocks/sidebar-15/components/nav-main.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/default/blocks/sidebar-15/components/nav-secondary.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/default/blocks/sidebar-15/components/nav-user.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/default/blocks/sidebar-15/components/nav-workspaces.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/default/blocks/sidebar-15/components/sidebar-left.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/default/blocks/sidebar-15/components/sidebar-right.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/default/blocks/sidebar-15/components/team-switcher.tsx",
                    type: "registry:component",
                    target: ""
                }
            ],
            categories: [
                "sidebar",
                "dashboard"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(36199)]).then(__webpack_require__.bind(__webpack_require__, 36199))),
            source: "__registry__/default/blocks/sidebar-15/page.tsx",
            meta: undefined
        },
        "login-01": {
            name: "login-01",
            description: "A simple login form.",
            type: "registry:block",
            registryDependencies: [
                "button",
                "card",
                "input",
                "label"
            ],
            files: [
                {
                    path: "registry/default/blocks/login-01/page.tsx",
                    type: "registry:page",
                    target: "app/login/page.tsx"
                },
                {
                    path: "registry/default/blocks/login-01/components/login-form.tsx",
                    type: "registry:component",
                    target: ""
                }
            ],
            categories: [
                "authentication",
                "login"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(84446)]).then(__webpack_require__.bind(__webpack_require__, 84446))),
            source: "__registry__/default/blocks/login-01/page.tsx",
            meta: undefined
        },
        "login-02": {
            name: "login-02",
            description: "A two column login page with a cover image.",
            type: "registry:block",
            registryDependencies: [
                "button",
                "card",
                "input",
                "label"
            ],
            files: [
                {
                    path: "registry/default/blocks/login-02/page.tsx",
                    type: "registry:page",
                    target: "app/login/page.tsx"
                },
                {
                    path: "registry/default/blocks/login-02/components/login-form.tsx",
                    type: "registry:component",
                    target: ""
                }
            ],
            categories: [
                "authentication",
                "login"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(22824)]).then(__webpack_require__.bind(__webpack_require__, 22824))),
            source: "__registry__/default/blocks/login-02/page.tsx",
            meta: undefined
        },
        "login-03": {
            name: "login-03",
            description: "A login page with a muted background color.",
            type: "registry:block",
            registryDependencies: [
                "button",
                "card",
                "input",
                "label"
            ],
            files: [
                {
                    path: "registry/default/blocks/login-03/page.tsx",
                    type: "registry:page",
                    target: "app/login/page.tsx"
                },
                {
                    path: "registry/default/blocks/login-03/components/login-form.tsx",
                    type: "registry:component",
                    target: ""
                }
            ],
            categories: [
                "authentication",
                "login"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(21858)]).then(__webpack_require__.bind(__webpack_require__, 21858))),
            source: "__registry__/default/blocks/login-03/page.tsx",
            meta: undefined
        },
        "login-04": {
            name: "login-04",
            description: "A login page with form and image.",
            type: "registry:block",
            registryDependencies: [
                "button",
                "card",
                "input",
                "label"
            ],
            files: [
                {
                    path: "registry/default/blocks/login-04/page.tsx",
                    type: "registry:page",
                    target: "app/login/page.tsx"
                },
                {
                    path: "registry/default/blocks/login-04/components/login-form.tsx",
                    type: "registry:component",
                    target: ""
                }
            ],
            categories: [
                "authentication",
                "login"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(83337)]).then(__webpack_require__.bind(__webpack_require__, 83337))),
            source: "__registry__/default/blocks/login-04/page.tsx",
            meta: undefined
        },
        "login-05": {
            name: "login-05",
            description: "A simple email-only login page.",
            type: "registry:block",
            registryDependencies: [
                "button",
                "card",
                "input",
                "label"
            ],
            files: [
                {
                    path: "registry/default/blocks/login-05/page.tsx",
                    type: "registry:page",
                    target: "app/login/page.tsx"
                },
                {
                    path: "registry/default/blocks/login-05/components/login-form.tsx",
                    type: "registry:component",
                    target: ""
                }
            ],
            categories: [
                "authentication",
                "login"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(55702)]).then(__webpack_require__.bind(__webpack_require__, 55702))),
            source: "__registry__/default/blocks/login-05/page.tsx",
            meta: undefined
        },
        "chart-area-axes": {
            name: "chart-area-axes",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/default/charts/chart-area-axes.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-area"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 72477).then(__webpack_require__.bind(__webpack_require__, 72477))),
            source: "__registry__/default/charts/chart-area-axes.tsx",
            meta: undefined
        },
        "chart-area-default": {
            name: "chart-area-default",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/default/charts/chart-area-default.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-area"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 5005).then(__webpack_require__.bind(__webpack_require__, 5005))),
            source: "__registry__/default/charts/chart-area-default.tsx",
            meta: undefined
        },
        "chart-area-gradient": {
            name: "chart-area-gradient",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/default/charts/chart-area-gradient.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-area"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 84376).then(__webpack_require__.bind(__webpack_require__, 84376))),
            source: "__registry__/default/charts/chart-area-gradient.tsx",
            meta: undefined
        },
        "chart-area-icons": {
            name: "chart-area-icons",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/default/charts/chart-area-icons.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-area"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 91057).then(__webpack_require__.bind(__webpack_require__, 91057))),
            source: "__registry__/default/charts/chart-area-icons.tsx",
            meta: undefined
        },
        "chart-area-interactive": {
            name: "chart-area-interactive",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart",
                "select"
            ],
            files: [
                {
                    path: "registry/default/charts/chart-area-interactive.tsx",
                    type: "registry:component",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-area"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 88925).then(__webpack_require__.bind(__webpack_require__, 88925))),
            source: "__registry__/default/charts/chart-area-interactive.tsx",
            meta: undefined
        },
        "chart-area-legend": {
            name: "chart-area-legend",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/default/charts/chart-area-legend.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-area"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 92793).then(__webpack_require__.bind(__webpack_require__, 40722))),
            source: "__registry__/default/charts/chart-area-legend.tsx",
            meta: undefined
        },
        "chart-area-linear": {
            name: "chart-area-linear",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/default/charts/chart-area-linear.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-area"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 70218).then(__webpack_require__.bind(__webpack_require__, 85540))),
            source: "__registry__/default/charts/chart-area-linear.tsx",
            meta: undefined
        },
        "chart-area-stacked-expand": {
            name: "chart-area-stacked-expand",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/default/charts/chart-area-stacked-expand.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-area"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 93760).then(__webpack_require__.bind(__webpack_require__, 93760))),
            source: "__registry__/default/charts/chart-area-stacked-expand.tsx",
            meta: undefined
        },
        "chart-area-stacked": {
            name: "chart-area-stacked",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/default/charts/chart-area-stacked.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-area"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 65422).then(__webpack_require__.bind(__webpack_require__, 65422))),
            source: "__registry__/default/charts/chart-area-stacked.tsx",
            meta: undefined
        },
        "chart-area-step": {
            name: "chart-area-step",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/default/charts/chart-area-step.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-area"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 77760).then(__webpack_require__.bind(__webpack_require__, 77760))),
            source: "__registry__/default/charts/chart-area-step.tsx",
            meta: undefined
        },
        "chart-bar-active": {
            name: "chart-bar-active",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/default/charts/chart-bar-active.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-bar"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 23771).then(__webpack_require__.bind(__webpack_require__, 23771))),
            source: "__registry__/default/charts/chart-bar-active.tsx",
            meta: undefined
        },
        "chart-bar-default": {
            name: "chart-bar-default",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/default/charts/chart-bar-default.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-bar"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 58362).then(__webpack_require__.bind(__webpack_require__, 58362))),
            source: "__registry__/default/charts/chart-bar-default.tsx",
            meta: undefined
        },
        "chart-bar-horizontal": {
            name: "chart-bar-horizontal",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/default/charts/chart-bar-horizontal.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-bar"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 1777).then(__webpack_require__.bind(__webpack_require__, 1777))),
            source: "__registry__/default/charts/chart-bar-horizontal.tsx",
            meta: undefined
        },
        "chart-bar-interactive": {
            name: "chart-bar-interactive",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/default/charts/chart-bar-interactive.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-bar"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 91246).then(__webpack_require__.bind(__webpack_require__, 91246))),
            source: "__registry__/default/charts/chart-bar-interactive.tsx",
            meta: undefined
        },
        "chart-bar-label-custom": {
            name: "chart-bar-label-custom",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/default/charts/chart-bar-label-custom.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-bar"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 48201).then(__webpack_require__.bind(__webpack_require__, 48201))),
            source: "__registry__/default/charts/chart-bar-label-custom.tsx",
            meta: undefined
        },
        "chart-bar-label": {
            name: "chart-bar-label",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/default/charts/chart-bar-label.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-bar"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 82356).then(__webpack_require__.bind(__webpack_require__, 82356))),
            source: "__registry__/default/charts/chart-bar-label.tsx",
            meta: undefined
        },
        "chart-bar-mixed": {
            name: "chart-bar-mixed",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/default/charts/chart-bar-mixed.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-bar"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 74214).then(__webpack_require__.bind(__webpack_require__, 74214))),
            source: "__registry__/default/charts/chart-bar-mixed.tsx",
            meta: undefined
        },
        "chart-bar-multiple": {
            name: "chart-bar-multiple",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/default/charts/chart-bar-multiple.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-bar"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 28803).then(__webpack_require__.bind(__webpack_require__, 28803))),
            source: "__registry__/default/charts/chart-bar-multiple.tsx",
            meta: undefined
        },
        "chart-bar-negative": {
            name: "chart-bar-negative",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/default/charts/chart-bar-negative.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-bar"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 73636).then(__webpack_require__.bind(__webpack_require__, 73636))),
            source: "__registry__/default/charts/chart-bar-negative.tsx",
            meta: undefined
        },
        "chart-bar-stacked": {
            name: "chart-bar-stacked",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/default/charts/chart-bar-stacked.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-bar"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 1132).then(__webpack_require__.bind(__webpack_require__, 1132))),
            source: "__registry__/default/charts/chart-bar-stacked.tsx",
            meta: undefined
        },
        "chart-line-default": {
            name: "chart-line-default",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/default/charts/chart-line-default.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-line"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 37376).then(__webpack_require__.bind(__webpack_require__, 37376))),
            source: "__registry__/default/charts/chart-line-default.tsx",
            meta: undefined
        },
        "chart-line-dots-colors": {
            name: "chart-line-dots-colors",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/default/charts/chart-line-dots-colors.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-line"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 27870).then(__webpack_require__.bind(__webpack_require__, 27870))),
            source: "__registry__/default/charts/chart-line-dots-colors.tsx",
            meta: undefined
        },
        "chart-line-dots-custom": {
            name: "chart-line-dots-custom",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/default/charts/chart-line-dots-custom.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-line"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 81183).then(__webpack_require__.bind(__webpack_require__, 81183))),
            source: "__registry__/default/charts/chart-line-dots-custom.tsx",
            meta: undefined
        },
        "chart-line-dots": {
            name: "chart-line-dots",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/default/charts/chart-line-dots.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-line"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 17623).then(__webpack_require__.bind(__webpack_require__, 17623))),
            source: "__registry__/default/charts/chart-line-dots.tsx",
            meta: undefined
        },
        "chart-line-interactive": {
            name: "chart-line-interactive",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/default/charts/chart-line-interactive.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-line"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 79099).then(__webpack_require__.bind(__webpack_require__, 79099))),
            source: "__registry__/default/charts/chart-line-interactive.tsx",
            meta: undefined
        },
        "chart-line-label-custom": {
            name: "chart-line-label-custom",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/default/charts/chart-line-label-custom.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-line"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 4625).then(__webpack_require__.bind(__webpack_require__, 4625))),
            source: "__registry__/default/charts/chart-line-label-custom.tsx",
            meta: undefined
        },
        "chart-line-label": {
            name: "chart-line-label",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/default/charts/chart-line-label.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-line"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 50588).then(__webpack_require__.bind(__webpack_require__, 50588))),
            source: "__registry__/default/charts/chart-line-label.tsx",
            meta: undefined
        },
        "chart-line-linear": {
            name: "chart-line-linear",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/default/charts/chart-line-linear.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-line"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 98374).then(__webpack_require__.bind(__webpack_require__, 98374))),
            source: "__registry__/default/charts/chart-line-linear.tsx",
            meta: undefined
        },
        "chart-line-multiple": {
            name: "chart-line-multiple",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/default/charts/chart-line-multiple.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-line"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 64825).then(__webpack_require__.bind(__webpack_require__, 64825))),
            source: "__registry__/default/charts/chart-line-multiple.tsx",
            meta: undefined
        },
        "chart-line-step": {
            name: "chart-line-step",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/default/charts/chart-line-step.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-line"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 56774).then(__webpack_require__.bind(__webpack_require__, 56774))),
            source: "__registry__/default/charts/chart-line-step.tsx",
            meta: undefined
        },
        "chart-pie-donut-active": {
            name: "chart-pie-donut-active",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/default/charts/chart-pie-donut-active.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-pie"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 36251).then(__webpack_require__.bind(__webpack_require__, 36251))),
            source: "__registry__/default/charts/chart-pie-donut-active.tsx",
            meta: undefined
        },
        "chart-pie-donut-text": {
            name: "chart-pie-donut-text",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/default/charts/chart-pie-donut-text.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-pie"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 92817).then(__webpack_require__.bind(__webpack_require__, 92817))),
            source: "__registry__/default/charts/chart-pie-donut-text.tsx",
            meta: undefined
        },
        "chart-pie-donut": {
            name: "chart-pie-donut",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/default/charts/chart-pie-donut.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-pie"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 73504).then(__webpack_require__.bind(__webpack_require__, 73504))),
            source: "__registry__/default/charts/chart-pie-donut.tsx",
            meta: undefined
        },
        "chart-pie-interactive": {
            name: "chart-pie-interactive",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/default/charts/chart-pie-interactive.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-pie"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 68163).then(__webpack_require__.bind(__webpack_require__, 68163))),
            source: "__registry__/default/charts/chart-pie-interactive.tsx",
            meta: undefined
        },
        "chart-pie-label-custom": {
            name: "chart-pie-label-custom",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/default/charts/chart-pie-label-custom.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-pie"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 18517).then(__webpack_require__.bind(__webpack_require__, 18517))),
            source: "__registry__/default/charts/chart-pie-label-custom.tsx",
            meta: undefined
        },
        "chart-pie-label-list": {
            name: "chart-pie-label-list",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/default/charts/chart-pie-label-list.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-pie"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 34611).then(__webpack_require__.bind(__webpack_require__, 34611))),
            source: "__registry__/default/charts/chart-pie-label-list.tsx",
            meta: undefined
        },
        "chart-pie-label": {
            name: "chart-pie-label",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/default/charts/chart-pie-label.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-pie"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 70889).then(__webpack_require__.bind(__webpack_require__, 70889))),
            source: "__registry__/default/charts/chart-pie-label.tsx",
            meta: undefined
        },
        "chart-pie-legend": {
            name: "chart-pie-legend",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/default/charts/chart-pie-legend.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-pie"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 568).then(__webpack_require__.bind(__webpack_require__, 568))),
            source: "__registry__/default/charts/chart-pie-legend.tsx",
            meta: undefined
        },
        "chart-pie-separator-none": {
            name: "chart-pie-separator-none",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/default/charts/chart-pie-separator-none.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-pie"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 49772).then(__webpack_require__.bind(__webpack_require__, 49772))),
            source: "__registry__/default/charts/chart-pie-separator-none.tsx",
            meta: undefined
        },
        "chart-pie-simple": {
            name: "chart-pie-simple",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/default/charts/chart-pie-simple.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-pie"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 1488).then(__webpack_require__.bind(__webpack_require__, 1488))),
            source: "__registry__/default/charts/chart-pie-simple.tsx",
            meta: undefined
        },
        "chart-pie-stacked": {
            name: "chart-pie-stacked",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/default/charts/chart-pie-stacked.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-pie"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 69373).then(__webpack_require__.bind(__webpack_require__, 69373))),
            source: "__registry__/default/charts/chart-pie-stacked.tsx",
            meta: undefined
        },
        "chart-radar-default": {
            name: "chart-radar-default",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/default/charts/chart-radar-default.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-radar"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 11648).then(__webpack_require__.bind(__webpack_require__, 11648))),
            source: "__registry__/default/charts/chart-radar-default.tsx",
            meta: undefined
        },
        "chart-radar-dots": {
            name: "chart-radar-dots",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/default/charts/chart-radar-dots.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-radar"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 8506).then(__webpack_require__.bind(__webpack_require__, 8506))),
            source: "__registry__/default/charts/chart-radar-dots.tsx",
            meta: undefined
        },
        "chart-radar-grid-circle-fill": {
            name: "chart-radar-grid-circle-fill",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/default/charts/chart-radar-grid-circle-fill.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-radar"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 59525).then(__webpack_require__.bind(__webpack_require__, 59525))),
            source: "__registry__/default/charts/chart-radar-grid-circle-fill.tsx",
            meta: undefined
        },
        "chart-radar-grid-circle-no-lines": {
            name: "chart-radar-grid-circle-no-lines",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/default/charts/chart-radar-grid-circle-no-lines.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-radar"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 68899).then(__webpack_require__.bind(__webpack_require__, 68899))),
            source: "__registry__/default/charts/chart-radar-grid-circle-no-lines.tsx",
            meta: undefined
        },
        "chart-radar-grid-circle": {
            name: "chart-radar-grid-circle",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/default/charts/chart-radar-grid-circle.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-radar"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 37683).then(__webpack_require__.bind(__webpack_require__, 37683))),
            source: "__registry__/default/charts/chart-radar-grid-circle.tsx",
            meta: undefined
        },
        "chart-radar-grid-custom": {
            name: "chart-radar-grid-custom",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/default/charts/chart-radar-grid-custom.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-radar"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 99527).then(__webpack_require__.bind(__webpack_require__, 99527))),
            source: "__registry__/default/charts/chart-radar-grid-custom.tsx",
            meta: undefined
        },
        "chart-radar-grid-fill": {
            name: "chart-radar-grid-fill",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/default/charts/chart-radar-grid-fill.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-radar"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 20980).then(__webpack_require__.bind(__webpack_require__, 20980))),
            source: "__registry__/default/charts/chart-radar-grid-fill.tsx",
            meta: undefined
        },
        "chart-radar-grid-none": {
            name: "chart-radar-grid-none",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/default/charts/chart-radar-grid-none.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-radar"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 82319).then(__webpack_require__.bind(__webpack_require__, 82319))),
            source: "__registry__/default/charts/chart-radar-grid-none.tsx",
            meta: undefined
        },
        "chart-radar-icons": {
            name: "chart-radar-icons",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/default/charts/chart-radar-icons.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-radar"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 67305).then(__webpack_require__.bind(__webpack_require__, 67305))),
            source: "__registry__/default/charts/chart-radar-icons.tsx",
            meta: undefined
        },
        "chart-radar-label-custom": {
            name: "chart-radar-label-custom",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/default/charts/chart-radar-label-custom.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-radar"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 70817).then(__webpack_require__.bind(__webpack_require__, 70817))),
            source: "__registry__/default/charts/chart-radar-label-custom.tsx",
            meta: undefined
        },
        "chart-radar-legend": {
            name: "chart-radar-legend",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/default/charts/chart-radar-legend.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-radar"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 79394).then(__webpack_require__.bind(__webpack_require__, 79394))),
            source: "__registry__/default/charts/chart-radar-legend.tsx",
            meta: undefined
        },
        "chart-radar-lines-only": {
            name: "chart-radar-lines-only",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/default/charts/chart-radar-lines-only.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-radar"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 37535).then(__webpack_require__.bind(__webpack_require__, 37535))),
            source: "__registry__/default/charts/chart-radar-lines-only.tsx",
            meta: undefined
        },
        "chart-radar-multiple": {
            name: "chart-radar-multiple",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/default/charts/chart-radar-multiple.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-radar"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 71602).then(__webpack_require__.bind(__webpack_require__, 71602))),
            source: "__registry__/default/charts/chart-radar-multiple.tsx",
            meta: undefined
        },
        "chart-radar-radius": {
            name: "chart-radar-radius",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/default/charts/chart-radar-radius.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-radar"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 84247).then(__webpack_require__.bind(__webpack_require__, 84247))),
            source: "__registry__/default/charts/chart-radar-radius.tsx",
            meta: undefined
        },
        "chart-radial-grid": {
            name: "chart-radial-grid",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/default/charts/chart-radial-grid.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-radial"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 93567).then(__webpack_require__.bind(__webpack_require__, 93567))),
            source: "__registry__/default/charts/chart-radial-grid.tsx",
            meta: undefined
        },
        "chart-radial-label": {
            name: "chart-radial-label",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/default/charts/chart-radial-label.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-radial"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 54443).then(__webpack_require__.bind(__webpack_require__, 54443))),
            source: "__registry__/default/charts/chart-radial-label.tsx",
            meta: undefined
        },
        "chart-radial-shape": {
            name: "chart-radial-shape",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/default/charts/chart-radial-shape.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-radial"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 87300).then(__webpack_require__.bind(__webpack_require__, 87300))),
            source: "__registry__/default/charts/chart-radial-shape.tsx",
            meta: undefined
        },
        "chart-radial-simple": {
            name: "chart-radial-simple",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/default/charts/chart-radial-simple.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-radial"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 17619).then(__webpack_require__.bind(__webpack_require__, 17619))),
            source: "__registry__/default/charts/chart-radial-simple.tsx",
            meta: undefined
        },
        "chart-radial-stacked": {
            name: "chart-radial-stacked",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/default/charts/chart-radial-stacked.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-radial"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 91992).then(__webpack_require__.bind(__webpack_require__, 91992))),
            source: "__registry__/default/charts/chart-radial-stacked.tsx",
            meta: undefined
        },
        "chart-radial-text": {
            name: "chart-radial-text",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/default/charts/chart-radial-text.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-radial"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 57445).then(__webpack_require__.bind(__webpack_require__, 57445))),
            source: "__registry__/default/charts/chart-radial-text.tsx",
            meta: undefined
        },
        "chart-tooltip-default": {
            name: "chart-tooltip-default",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/default/charts/chart-tooltip-default.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-tooltip"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 97655).then(__webpack_require__.bind(__webpack_require__, 97655))),
            source: "__registry__/default/charts/chart-tooltip-default.tsx",
            meta: undefined
        },
        "chart-tooltip-indicator-line": {
            name: "chart-tooltip-indicator-line",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/default/charts/chart-tooltip-indicator-line.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-tooltip"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 82077).then(__webpack_require__.bind(__webpack_require__, 82077))),
            source: "__registry__/default/charts/chart-tooltip-indicator-line.tsx",
            meta: undefined
        },
        "chart-tooltip-indicator-none": {
            name: "chart-tooltip-indicator-none",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/default/charts/chart-tooltip-indicator-none.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-tooltip"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 63783).then(__webpack_require__.bind(__webpack_require__, 63783))),
            source: "__registry__/default/charts/chart-tooltip-indicator-none.tsx",
            meta: undefined
        },
        "chart-tooltip-label-none": {
            name: "chart-tooltip-label-none",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/default/charts/chart-tooltip-label-none.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-tooltip"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 86035).then(__webpack_require__.bind(__webpack_require__, 86035))),
            source: "__registry__/default/charts/chart-tooltip-label-none.tsx",
            meta: undefined
        },
        "chart-tooltip-label-custom": {
            name: "chart-tooltip-label-custom",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/default/charts/chart-tooltip-label-custom.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-tooltip"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 74423).then(__webpack_require__.bind(__webpack_require__, 74423))),
            source: "__registry__/default/charts/chart-tooltip-label-custom.tsx",
            meta: undefined
        },
        "chart-tooltip-label-formatter": {
            name: "chart-tooltip-label-formatter",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/default/charts/chart-tooltip-label-formatter.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-tooltip"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 92746).then(__webpack_require__.bind(__webpack_require__, 92746))),
            source: "__registry__/default/charts/chart-tooltip-label-formatter.tsx",
            meta: undefined
        },
        "chart-tooltip-formatter": {
            name: "chart-tooltip-formatter",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/default/charts/chart-tooltip-formatter.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-tooltip"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 9478).then(__webpack_require__.bind(__webpack_require__, 9478))),
            source: "__registry__/default/charts/chart-tooltip-formatter.tsx",
            meta: undefined
        },
        "chart-tooltip-icons": {
            name: "chart-tooltip-icons",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/default/charts/chart-tooltip-icons.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-tooltip"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 1872).then(__webpack_require__.bind(__webpack_require__, 1872))),
            source: "__registry__/default/charts/chart-tooltip-icons.tsx",
            meta: undefined
        },
        "chart-tooltip-advanced": {
            name: "chart-tooltip-advanced",
            description: "",
            type: "registry:block",
            registryDependencies: [
                "card",
                "chart"
            ],
            files: [
                {
                    path: "registry/default/charts/chart-tooltip-advanced.tsx",
                    type: "registry:block",
                    target: ""
                }
            ],
            categories: [
                "charts",
                "charts-tooltip"
            ],
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 70102).then(__webpack_require__.bind(__webpack_require__, 70102))),
            source: "__registry__/default/charts/chart-tooltip-advanced.tsx",
            meta: undefined
        },
        "utils": {
            name: "utils",
            description: "",
            type: "registry:lib",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/default/lib/utils.ts",
                    type: "registry:lib",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(55383)]).then(__webpack_require__.bind(__webpack_require__, 55383))),
            source: "",
            meta: undefined
        },
        "use-mobile": {
            name: "use-mobile",
            description: "",
            type: "registry:hook",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/default/hooks/use-mobile.tsx",
                    type: "registry:hook",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 85562).then(__webpack_require__.bind(__webpack_require__, 53170))),
            source: "",
            meta: undefined
        },
        "use-toast": {
            name: "use-toast",
            description: "",
            type: "registry:hook",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/default/hooks/use-toast.ts",
                    type: "registry:hook",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 34634).then(__webpack_require__.bind(__webpack_require__, 34634))),
            source: "",
            meta: undefined
        },
        "sink": {
            name: "sink",
            description: "",
            type: "registry:internal",
            registryDependencies: [
                "accordion",
                "alert",
                "alert-dialog",
                "aspect-ratio",
                "avatar",
                "badge",
                "breadcrumb",
                "button",
                "calendar",
                "card",
                "carousel",
                "chart",
                "checkbox",
                "collapsible",
                "command",
                "context-menu",
                "dialog",
                "drawer",
                "dropdown-menu",
                "hover-card",
                "input",
                "input-otp",
                "label",
                "menubar",
                "navigation-menu",
                "pagination",
                "popover",
                "progress",
                "radio-group",
                "resizable",
                "scroll-area",
                "select",
                "separator",
                "sheet",
                "sidebar",
                "skeleton",
                "slider",
                "sonner",
                "switch",
                "table",
                "tabs",
                "textarea",
                "toast",
                "toggle",
                "toggle-group",
                "tooltip"
            ],
            files: [
                {
                    path: "registry/default/internal/sink/page.tsx",
                    type: "registry:page",
                    target: "app/sink/page.tsx"
                },
                {
                    path: "registry/default/internal/sink/components/app-sidebar.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/default/internal/sink/components/component-wrapper.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/default/internal/sink/components/nav-main.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/default/internal/sink/components/nav-projects.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/default/internal/sink/components/nav-user.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/default/internal/sink/components/team-switcher.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/default/internal/sink/components/accordion-demo.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/default/internal/sink/components/alert-demo.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/default/internal/sink/components/alert-dialog-demo.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/default/internal/sink/components/aspect-ratio-demo.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/default/internal/sink/components/avatar-demo.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/default/internal/sink/components/badge-demo.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/default/internal/sink/components/breadcrumb-demo.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/default/internal/sink/components/button-demo.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/default/internal/sink/components/calendar-demo.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/default/internal/sink/components/card-demo.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/default/internal/sink/components/carousel-demo.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/default/internal/sink/components/checkbox-demo.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/default/internal/sink/components/collapsible-demo.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/default/internal/sink/components/combobox-demo.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/default/internal/sink/components/command-demo.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/default/internal/sink/components/context-menu-demo.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/default/internal/sink/components/date-picker-demo.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/default/internal/sink/components/dialog-demo.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/default/internal/sink/components/drawer-demo.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/default/internal/sink/components/dropdown-menu-demo.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/default/internal/sink/components/hover-card-demo.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/default/internal/sink/components/input-demo.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/default/internal/sink/components/input-otp-demo.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/default/internal/sink/components/label-demo.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/default/internal/sink/components/menubar-demo.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/default/internal/sink/components/navigation-menu-demo.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/default/internal/sink/components/pagination-demo.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/default/internal/sink/components/popover-demo.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/default/internal/sink/components/progress-demo.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/default/internal/sink/components/radio-group-demo.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/default/internal/sink/components/resizable-handle.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/default/internal/sink/components/scroll-area-demo.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/default/internal/sink/components/select-demo.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/default/internal/sink/components/separator-demo.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/default/internal/sink/components/sheet-demo.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/default/internal/sink/components/skeleton-demo.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/default/internal/sink/components/slider-demo.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/default/internal/sink/components/sonner-demo.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/default/internal/sink/components/switch-demo.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/default/internal/sink/components/table-demo.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/default/internal/sink/components/tabs-demo.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/default/internal/sink/components/textarea-demo.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/default/internal/sink/components/toast-demo.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/default/internal/sink/components/toggle-demo.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/default/internal/sink/components/toggle-group-demo.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/default/internal/sink/components/tooltip-demo.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/default/internal/sink/components/badge-destructive.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/default/internal/sink/components/badge-outline.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/default/internal/sink/components/badge-secondary.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/default/internal/sink/components/button-destructive.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/default/internal/sink/components/button-ghost.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/default/internal/sink/components/button-link.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/default/internal/sink/components/button-loading.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/default/internal/sink/components/button-outline.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/default/internal/sink/components/button-secondary.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/default/internal/sink/components/button-with-icon.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/default/internal/sink/components/toggle-disabled.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/default/internal/sink/components/toggle-outline.tsx",
                    type: "registry:component",
                    target: ""
                },
                {
                    path: "registry/default/internal/sink/components/toggle-with-text.tsx",
                    type: "registry:component",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(50736), __webpack_require__.e(26433)]).then(__webpack_require__.bind(__webpack_require__, 26433))),
            source: "",
            meta: undefined
        },
        "sidebar-demo": {
            name: "sidebar-demo",
            description: "",
            type: "registry:internal",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/default/internal/sidebar-demo.tsx",
                    type: "registry:component",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 91895).then(__webpack_require__.bind(__webpack_require__, 91895))),
            source: "",
            meta: undefined
        },
        "sidebar-header": {
            name: "sidebar-header",
            description: "",
            type: "registry:internal",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/default/internal/sidebar-header.tsx",
                    type: "registry:component",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 20874).then(__webpack_require__.bind(__webpack_require__, 20874))),
            source: "",
            meta: undefined
        },
        "sidebar-footer": {
            name: "sidebar-footer",
            description: "",
            type: "registry:internal",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/default/internal/sidebar-footer.tsx",
                    type: "registry:component",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 62267).then(__webpack_require__.bind(__webpack_require__, 62267))),
            source: "",
            meta: undefined
        },
        "sidebar-group": {
            name: "sidebar-group",
            description: "",
            type: "registry:internal",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/default/internal/sidebar-group.tsx",
                    type: "registry:component",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 14706).then(__webpack_require__.bind(__webpack_require__, 14706))),
            source: "",
            meta: undefined
        },
        "sidebar-group-collapsible": {
            name: "sidebar-group-collapsible",
            description: "",
            type: "registry:internal",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/default/internal/sidebar-group-collapsible.tsx",
                    type: "registry:component",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 74748).then(__webpack_require__.bind(__webpack_require__, 74748))),
            source: "",
            meta: undefined
        },
        "sidebar-group-action": {
            name: "sidebar-group-action",
            description: "",
            type: "registry:internal",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/default/internal/sidebar-group-action.tsx",
                    type: "registry:component",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 52268).then(__webpack_require__.bind(__webpack_require__, 52268))),
            source: "",
            meta: undefined
        },
        "sidebar-menu": {
            name: "sidebar-menu",
            description: "",
            type: "registry:internal",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/default/internal/sidebar-menu.tsx",
                    type: "registry:component",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 82614).then(__webpack_require__.bind(__webpack_require__, 82614))),
            source: "",
            meta: undefined
        },
        "sidebar-menu-action": {
            name: "sidebar-menu-action",
            description: "",
            type: "registry:internal",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/default/internal/sidebar-menu-action.tsx",
                    type: "registry:component",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 33571).then(__webpack_require__.bind(__webpack_require__, 33571))),
            source: "",
            meta: undefined
        },
        "sidebar-menu-sub": {
            name: "sidebar-menu-sub",
            description: "",
            type: "registry:internal",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/default/internal/sidebar-menu-sub.tsx",
                    type: "registry:component",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 78577).then(__webpack_require__.bind(__webpack_require__, 78577))),
            source: "",
            meta: undefined
        },
        "sidebar-menu-collapsible": {
            name: "sidebar-menu-collapsible",
            description: "",
            type: "registry:internal",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/default/internal/sidebar-menu-collapsible.tsx",
                    type: "registry:component",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 56144).then(__webpack_require__.bind(__webpack_require__, 56144))),
            source: "",
            meta: undefined
        },
        "sidebar-menu-badge": {
            name: "sidebar-menu-badge",
            description: "",
            type: "registry:internal",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/default/internal/sidebar-menu-badge.tsx",
                    type: "registry:component",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 63082).then(__webpack_require__.bind(__webpack_require__, 63082))),
            source: "",
            meta: undefined
        },
        "sidebar-rsc": {
            name: "sidebar-rsc",
            description: "",
            type: "registry:internal",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/default/internal/sidebar-rsc.tsx",
                    type: "registry:component",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 87802).then(__webpack_require__.bind(__webpack_require__, 87802))),
            source: "",
            meta: undefined
        },
        "sidebar-controlled": {
            name: "sidebar-controlled",
            description: "",
            type: "registry:internal",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/default/internal/sidebar-controlled.tsx",
                    type: "registry:component",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 98205).then(__webpack_require__.bind(__webpack_require__, 98205))),
            source: "",
            meta: undefined
        },
        "v0-sidebar-01": {
            name: "v0-sidebar-01",
            description: "",
            type: "registry:internal",
            registryDependencies: [
                "sidebar",
                "breadcrumb",
                "separator",
                "label",
                "dropdown-menu"
            ],
            files: [
                {
                    path: "registry/default/internal/sidebar-01.tsx",
                    type: "registry:component",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 16329).then(__webpack_require__.bind(__webpack_require__, 16329))),
            source: "",
            meta: undefined
        },
        "v0-sidebar-02": {
            name: "v0-sidebar-02",
            description: "",
            type: "registry:internal",
            registryDependencies: [
                "sidebar",
                "breadcrumb",
                "separator",
                "label",
                "dropdown-menu"
            ],
            files: [
                {
                    path: "registry/default/internal/sidebar-02.tsx",
                    type: "registry:internal",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 71389).then(__webpack_require__.bind(__webpack_require__, 71389))),
            source: "",
            meta: undefined
        },
        "v0-sidebar-03": {
            name: "v0-sidebar-03",
            description: "",
            type: "registry:internal",
            registryDependencies: [
                "sidebar",
                "breadcrumb"
            ],
            files: [
                {
                    path: "registry/default/internal/sidebar-03.tsx",
                    type: "registry:internal",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 44206).then(__webpack_require__.bind(__webpack_require__, 44206))),
            source: "",
            meta: undefined
        },
        "v0-sidebar-04": {
            name: "v0-sidebar-04",
            description: "",
            type: "registry:internal",
            registryDependencies: [
                "sidebar",
                "breadcrumb",
                "separator"
            ],
            files: [
                {
                    path: "registry/default/internal/sidebar-04.tsx",
                    type: "registry:internal",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 95509).then(__webpack_require__.bind(__webpack_require__, 95509))),
            source: "",
            meta: undefined
        },
        "v0-sidebar-05": {
            name: "v0-sidebar-05",
            description: "",
            type: "registry:internal",
            registryDependencies: [
                "sidebar",
                "breadcrumb",
                "separator",
                "label",
                "collapsible"
            ],
            files: [
                {
                    path: "registry/default/internal/sidebar-05.tsx",
                    type: "registry:internal",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(92719)]).then(__webpack_require__.bind(__webpack_require__, 92719))),
            source: "",
            meta: undefined
        },
        "v0-sidebar-06": {
            name: "v0-sidebar-06",
            description: "",
            type: "registry:internal",
            registryDependencies: [
                "sidebar",
                "breadcrumb",
                "separator",
                "card",
                "dropdown-menu"
            ],
            files: [
                {
                    path: "registry/default/internal/sidebar-06.tsx",
                    type: "registry:internal",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 37211).then(__webpack_require__.bind(__webpack_require__, 25437))),
            source: "",
            meta: undefined
        },
        "v0-sidebar-07": {
            name: "v0-sidebar-07",
            description: "",
            type: "registry:internal",
            registryDependencies: [
                "sidebar",
                "breadcrumb",
                "separator",
                "collapsible",
                "dropdown-menu",
                "avatar"
            ],
            files: [
                {
                    path: "registry/default/internal/sidebar-07.tsx",
                    type: "registry:internal",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 35574).then(__webpack_require__.bind(__webpack_require__, 35574))),
            source: "",
            meta: undefined
        },
        "v0-sidebar-08": {
            name: "v0-sidebar-08",
            description: "",
            type: "registry:internal",
            registryDependencies: [
                "sidebar",
                "breadcrumb",
                "separator",
                "collapsible",
                "dropdown-menu",
                "avatar"
            ],
            files: [
                {
                    path: "registry/default/internal/sidebar-08.tsx",
                    type: "registry:internal",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 35666).then(__webpack_require__.bind(__webpack_require__, 35666))),
            source: "",
            meta: undefined
        },
        "v0-sidebar-09": {
            name: "v0-sidebar-09",
            description: "",
            type: "registry:internal",
            registryDependencies: [
                "sidebar",
                "breadcrumb",
                "separator",
                "collapsible",
                "dropdown-menu",
                "avatar",
                "switch"
            ],
            files: [
                {
                    path: "registry/default/internal/sidebar-09.tsx",
                    type: "registry:internal",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 20683).then(__webpack_require__.bind(__webpack_require__, 20683))),
            source: "",
            meta: undefined
        },
        "v0-sidebar-10": {
            name: "v0-sidebar-10",
            description: "",
            type: "registry:internal",
            registryDependencies: [
                "sidebar",
                "breadcrumb",
                "separator",
                "popover",
                "collapsible",
                "dropdown-menu"
            ],
            files: [
                {
                    path: "registry/default/internal/sidebar-10.tsx",
                    type: "registry:internal",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 85845).then(__webpack_require__.bind(__webpack_require__, 85845))),
            source: "",
            meta: undefined
        },
        "v0-sidebar-11": {
            name: "v0-sidebar-11",
            description: "",
            type: "registry:internal",
            registryDependencies: [
                "sidebar",
                "breadcrumb",
                "separator",
                "collapsible"
            ],
            files: [
                {
                    path: "registry/default/internal/sidebar-11.tsx",
                    type: "registry:internal",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(48664)]).then(__webpack_require__.bind(__webpack_require__, 48664))),
            source: "",
            meta: undefined
        },
        "v0-sidebar-12": {
            name: "v0-sidebar-12",
            description: "",
            type: "registry:internal",
            registryDependencies: [
                "sidebar",
                "breadcrumb",
                "separator",
                "collapsible",
                "calendar",
                "dropdown-menu",
                "avatar"
            ],
            files: [
                {
                    path: "registry/default/internal/sidebar-12.tsx",
                    type: "registry:internal",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 23673).then(__webpack_require__.bind(__webpack_require__, 23673))),
            source: "",
            meta: undefined
        },
        "v0-sidebar-13": {
            name: "v0-sidebar-13",
            description: "",
            type: "registry:internal",
            registryDependencies: [
                "sidebar",
                "breadcrumb",
                "button",
                "dialog"
            ],
            files: [
                {
                    path: "registry/default/internal/sidebar-13.tsx",
                    type: "registry:internal",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 43415).then(__webpack_require__.bind(__webpack_require__, 43415))),
            source: "",
            meta: undefined
        },
        "v0-sidebar-14": {
            name: "v0-sidebar-14",
            description: "",
            type: "registry:internal",
            registryDependencies: [
                "sidebar",
                "breadcrumb"
            ],
            files: [
                {
                    path: "registry/default/internal/sidebar-14.tsx",
                    type: "registry:internal",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(29328)]).then(__webpack_require__.bind(__webpack_require__, 29328))),
            source: "",
            meta: undefined
        },
        "v0-sidebar-15": {
            name: "v0-sidebar-15",
            description: "",
            type: "registry:internal",
            registryDependencies: [
                "sidebar",
                "breadcrumb",
                "separator",
                "popover",
                "collapsible",
                "dropdown-menu",
                "calendar",
                "avatar"
            ],
            files: [
                {
                    path: "registry/default/internal/sidebar-15.tsx",
                    type: "registry:internal",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 73404).then(__webpack_require__.bind(__webpack_require__, 73404))),
            source: "",
            meta: undefined
        },
        "v0-login-01": {
            name: "v0-login-01",
            description: "",
            type: "registry:internal",
            registryDependencies: [
                "button",
                "card",
                "input",
                "label"
            ],
            files: [
                {
                    path: "registry/default/internal/login-01.tsx",
                    type: "registry:internal",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(61912)]).then(__webpack_require__.bind(__webpack_require__, 61912))),
            source: "",
            meta: undefined
        },
        "accordion-demo": {
            name: "accordion-demo",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "accordion"
            ],
            files: [
                {
                    path: "registry/default/examples/accordion-demo.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 95525).then(__webpack_require__.bind(__webpack_require__, 95525))),
            source: "",
            meta: undefined
        },
        "alert-demo": {
            name: "alert-demo",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "alert"
            ],
            files: [
                {
                    path: "registry/default/examples/alert-demo.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(19286)]).then(__webpack_require__.bind(__webpack_require__, 19286))),
            source: "",
            meta: undefined
        },
        "alert-destructive": {
            name: "alert-destructive",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "alert"
            ],
            files: [
                {
                    path: "registry/default/examples/alert-destructive.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(91963)]).then(__webpack_require__.bind(__webpack_require__, 91963))),
            source: "",
            meta: undefined
        },
        "alert-dialog-demo": {
            name: "alert-dialog-demo",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "alert-dialog",
                "button"
            ],
            files: [
                {
                    path: "registry/default/examples/alert-dialog-demo.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(16787)]).then(__webpack_require__.bind(__webpack_require__, 16787))),
            source: "",
            meta: undefined
        },
        "aspect-ratio-demo": {
            name: "aspect-ratio-demo",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "aspect-ratio"
            ],
            files: [
                {
                    path: "registry/default/examples/aspect-ratio-demo.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(50736), __webpack_require__.e(50137)]).then(__webpack_require__.bind(__webpack_require__, 50137))),
            source: "",
            meta: undefined
        },
        "avatar-demo": {
            name: "avatar-demo",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "avatar"
            ],
            files: [
                {
                    path: "registry/default/examples/avatar-demo.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 24837).then(__webpack_require__.bind(__webpack_require__, 24837))),
            source: "",
            meta: undefined
        },
        "badge-demo": {
            name: "badge-demo",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "badge"
            ],
            files: [
                {
                    path: "registry/default/examples/badge-demo.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(17020)]).then(__webpack_require__.bind(__webpack_require__, 17020))),
            source: "",
            meta: undefined
        },
        "badge-destructive": {
            name: "badge-destructive",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "badge"
            ],
            files: [
                {
                    path: "registry/default/examples/badge-destructive.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(42316)]).then(__webpack_require__.bind(__webpack_require__, 42316))),
            source: "",
            meta: undefined
        },
        "badge-outline": {
            name: "badge-outline",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "badge"
            ],
            files: [
                {
                    path: "registry/default/examples/badge-outline.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(81850)]).then(__webpack_require__.bind(__webpack_require__, 81850))),
            source: "",
            meta: undefined
        },
        "badge-secondary": {
            name: "badge-secondary",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "badge"
            ],
            files: [
                {
                    path: "registry/default/examples/badge-secondary.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(52750)]).then(__webpack_require__.bind(__webpack_require__, 52750))),
            source: "",
            meta: undefined
        },
        "breadcrumb-demo": {
            name: "breadcrumb-demo",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "breadcrumb"
            ],
            files: [
                {
                    path: "registry/default/examples/breadcrumb-demo.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(93762)]).then(__webpack_require__.bind(__webpack_require__, 93762))),
            source: "",
            meta: undefined
        },
        "breadcrumb-separator": {
            name: "breadcrumb-separator",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "breadcrumb"
            ],
            files: [
                {
                    path: "registry/default/examples/breadcrumb-separator.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(85618)]).then(__webpack_require__.bind(__webpack_require__, 85618))),
            source: "",
            meta: undefined
        },
        "breadcrumb-dropdown": {
            name: "breadcrumb-dropdown",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "breadcrumb"
            ],
            files: [
                {
                    path: "registry/default/examples/breadcrumb-dropdown.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(61471)]).then(__webpack_require__.bind(__webpack_require__, 61471))),
            source: "",
            meta: undefined
        },
        "breadcrumb-ellipsis": {
            name: "breadcrumb-ellipsis",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "breadcrumb"
            ],
            files: [
                {
                    path: "registry/default/examples/breadcrumb-ellipsis.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(74074)]).then(__webpack_require__.bind(__webpack_require__, 74074))),
            source: "",
            meta: undefined
        },
        "breadcrumb-link": {
            name: "breadcrumb-link",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "breadcrumb"
            ],
            files: [
                {
                    path: "registry/default/examples/breadcrumb-link.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(64965)]).then(__webpack_require__.bind(__webpack_require__, 64965))),
            source: "",
            meta: undefined
        },
        "breadcrumb-responsive": {
            name: "breadcrumb-responsive",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "breadcrumb"
            ],
            files: [
                {
                    path: "registry/default/examples/breadcrumb-responsive.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 5932).then(__webpack_require__.bind(__webpack_require__, 5932))),
            source: "",
            meta: undefined
        },
        "button-demo": {
            name: "button-demo",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "button"
            ],
            files: [
                {
                    path: "registry/default/examples/button-demo.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(57955)]).then(__webpack_require__.bind(__webpack_require__, 57955))),
            source: "",
            meta: undefined
        },
        "button-secondary": {
            name: "button-secondary",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "button"
            ],
            files: [
                {
                    path: "registry/default/examples/button-secondary.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(8223)]).then(__webpack_require__.bind(__webpack_require__, 8223))),
            source: "",
            meta: undefined
        },
        "button-destructive": {
            name: "button-destructive",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "button"
            ],
            files: [
                {
                    path: "registry/default/examples/button-destructive.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(31961)]).then(__webpack_require__.bind(__webpack_require__, 31961))),
            source: "",
            meta: undefined
        },
        "button-outline": {
            name: "button-outline",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "button"
            ],
            files: [
                {
                    path: "registry/default/examples/button-outline.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(5032)]).then(__webpack_require__.bind(__webpack_require__, 5032))),
            source: "",
            meta: undefined
        },
        "button-ghost": {
            name: "button-ghost",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "button"
            ],
            files: [
                {
                    path: "registry/default/examples/button-ghost.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(16703)]).then(__webpack_require__.bind(__webpack_require__, 16703))),
            source: "",
            meta: undefined
        },
        "button-link": {
            name: "button-link",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "button"
            ],
            files: [
                {
                    path: "registry/default/examples/button-link.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(84957)]).then(__webpack_require__.bind(__webpack_require__, 84957))),
            source: "",
            meta: undefined
        },
        "button-with-icon": {
            name: "button-with-icon",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "button"
            ],
            files: [
                {
                    path: "registry/default/examples/button-with-icon.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(47003)]).then(__webpack_require__.bind(__webpack_require__, 47003))),
            source: "",
            meta: undefined
        },
        "button-loading": {
            name: "button-loading",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "button"
            ],
            files: [
                {
                    path: "registry/default/examples/button-loading.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(13905)]).then(__webpack_require__.bind(__webpack_require__, 13905))),
            source: "",
            meta: undefined
        },
        "button-icon": {
            name: "button-icon",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "button"
            ],
            files: [
                {
                    path: "registry/default/examples/button-icon.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(13935)]).then(__webpack_require__.bind(__webpack_require__, 13935))),
            source: "",
            meta: undefined
        },
        "button-as-child": {
            name: "button-as-child",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "button"
            ],
            files: [
                {
                    path: "registry/default/examples/button-as-child.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(54867)]).then(__webpack_require__.bind(__webpack_require__, 54867))),
            source: "",
            meta: undefined
        },
        "calendar-demo": {
            name: "calendar-demo",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "calendar"
            ],
            files: [
                {
                    path: "registry/default/examples/calendar-demo.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 85211).then(__webpack_require__.bind(__webpack_require__, 85211))),
            source: "",
            meta: undefined
        },
        "calendar-form": {
            name: "calendar-form",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "calendar",
                "form",
                "popover"
            ],
            files: [
                {
                    path: "registry/default/examples/calendar-form.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 70273).then(__webpack_require__.bind(__webpack_require__, 70273))),
            source: "",
            meta: undefined
        },
        "card-demo": {
            name: "card-demo",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "card",
                "button",
                "switch"
            ],
            files: [
                {
                    path: "registry/default/examples/card-demo.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(25840)]).then(__webpack_require__.bind(__webpack_require__, 25840))),
            source: "",
            meta: undefined
        },
        "card-with-form": {
            name: "card-with-form",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "button",
                "card",
                "input",
                "label",
                "select"
            ],
            files: [
                {
                    path: "registry/default/examples/card-with-form.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(79454)]).then(__webpack_require__.bind(__webpack_require__, 970))),
            source: "",
            meta: undefined
        },
        "carousel-demo": {
            name: "carousel-demo",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "carousel"
            ],
            files: [
                {
                    path: "registry/default/examples/carousel-demo.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(1383)]).then(__webpack_require__.bind(__webpack_require__, 1383))),
            source: "",
            meta: undefined
        },
        "carousel-size": {
            name: "carousel-size",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "carousel"
            ],
            files: [
                {
                    path: "registry/default/examples/carousel-size.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(88477)]).then(__webpack_require__.bind(__webpack_require__, 88477))),
            source: "",
            meta: undefined
        },
        "carousel-spacing": {
            name: "carousel-spacing",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "carousel"
            ],
            files: [
                {
                    path: "registry/default/examples/carousel-spacing.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(8986)]).then(__webpack_require__.bind(__webpack_require__, 8986))),
            source: "",
            meta: undefined
        },
        "carousel-orientation": {
            name: "carousel-orientation",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "carousel"
            ],
            files: [
                {
                    path: "registry/default/examples/carousel-orientation.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(56957)]).then(__webpack_require__.bind(__webpack_require__, 56957))),
            source: "",
            meta: undefined
        },
        "carousel-api": {
            name: "carousel-api",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "carousel"
            ],
            files: [
                {
                    path: "registry/default/examples/carousel-api.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(97716)]).then(__webpack_require__.bind(__webpack_require__, 97716))),
            source: "",
            meta: undefined
        },
        "carousel-plugin": {
            name: "carousel-plugin",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "carousel"
            ],
            files: [
                {
                    path: "registry/default/examples/carousel-plugin.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(73943)]).then(__webpack_require__.bind(__webpack_require__, 73943))),
            source: "",
            meta: undefined
        },
        "checkbox-demo": {
            name: "checkbox-demo",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "checkbox"
            ],
            files: [
                {
                    path: "registry/default/examples/checkbox-demo.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 74586).then(__webpack_require__.bind(__webpack_require__, 74586))),
            source: "",
            meta: undefined
        },
        "checkbox-disabled": {
            name: "checkbox-disabled",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "checkbox"
            ],
            files: [
                {
                    path: "registry/default/examples/checkbox-disabled.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 31580).then(__webpack_require__.bind(__webpack_require__, 31580))),
            source: "",
            meta: undefined
        },
        "checkbox-form-multiple": {
            name: "checkbox-form-multiple",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "checkbox",
                "form"
            ],
            files: [
                {
                    path: "registry/default/examples/checkbox-form-multiple.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 59033).then(__webpack_require__.bind(__webpack_require__, 59033))),
            source: "",
            meta: undefined
        },
        "checkbox-form-single": {
            name: "checkbox-form-single",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "checkbox",
                "form"
            ],
            files: [
                {
                    path: "registry/default/examples/checkbox-form-single.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 97919).then(__webpack_require__.bind(__webpack_require__, 97919))),
            source: "",
            meta: undefined
        },
        "checkbox-with-text": {
            name: "checkbox-with-text",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "checkbox"
            ],
            files: [
                {
                    path: "registry/default/examples/checkbox-with-text.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 20942).then(__webpack_require__.bind(__webpack_require__, 20942))),
            source: "",
            meta: undefined
        },
        "collapsible-demo": {
            name: "collapsible-demo",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "collapsible"
            ],
            files: [
                {
                    path: "registry/default/examples/collapsible-demo.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 18269).then(__webpack_require__.bind(__webpack_require__, 18269))),
            source: "",
            meta: undefined
        },
        "combobox-demo": {
            name: "combobox-demo",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "command"
            ],
            files: [
                {
                    path: "registry/default/examples/combobox-demo.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 72708).then(__webpack_require__.bind(__webpack_require__, 72708))),
            source: "",
            meta: undefined
        },
        "combobox-dropdown-menu": {
            name: "combobox-dropdown-menu",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "command",
                "dropdown-menu",
                "button"
            ],
            files: [
                {
                    path: "registry/default/examples/combobox-dropdown-menu.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 31351).then(__webpack_require__.bind(__webpack_require__, 31351))),
            source: "",
            meta: undefined
        },
        "combobox-form": {
            name: "combobox-form",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "command",
                "form"
            ],
            files: [
                {
                    path: "registry/default/examples/combobox-form.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 23643).then(__webpack_require__.bind(__webpack_require__, 23643))),
            source: "",
            meta: undefined
        },
        "combobox-popover": {
            name: "combobox-popover",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "combobox",
                "popover"
            ],
            files: [
                {
                    path: "registry/default/examples/combobox-popover.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 18458).then(__webpack_require__.bind(__webpack_require__, 18458))),
            source: "",
            meta: undefined
        },
        "combobox-responsive": {
            name: "combobox-responsive",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "combobox",
                "popover",
                "drawer"
            ],
            files: [
                {
                    path: "registry/default/examples/combobox-responsive.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 69536).then(__webpack_require__.bind(__webpack_require__, 69536))),
            source: "",
            meta: undefined
        },
        "command-demo": {
            name: "command-demo",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "command"
            ],
            files: [
                {
                    path: "registry/default/examples/command-demo.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 39040).then(__webpack_require__.bind(__webpack_require__, 39040))),
            source: "",
            meta: undefined
        },
        "command-dialog": {
            name: "command-dialog",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "command",
                "dialog"
            ],
            files: [
                {
                    path: "registry/default/examples/command-dialog.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 39947).then(__webpack_require__.bind(__webpack_require__, 39947))),
            source: "",
            meta: undefined
        },
        "context-menu-demo": {
            name: "context-menu-demo",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "context-menu"
            ],
            files: [
                {
                    path: "registry/default/examples/context-menu-demo.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 29185).then(__webpack_require__.bind(__webpack_require__, 29185))),
            source: "",
            meta: undefined
        },
        "data-table-demo": {
            name: "data-table-demo",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "data-table"
            ],
            files: [
                {
                    path: "registry/default/examples/data-table-demo.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 59332).then(__webpack_require__.bind(__webpack_require__, 59332))),
            source: "",
            meta: undefined
        },
        "date-picker-demo": {
            name: "date-picker-demo",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "button",
                "calendar",
                "popover"
            ],
            files: [
                {
                    path: "registry/default/examples/date-picker-demo.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 68456).then(__webpack_require__.bind(__webpack_require__, 68456))),
            source: "",
            meta: undefined
        },
        "date-picker-form": {
            name: "date-picker-form",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "button",
                "calendar",
                "form",
                "popover"
            ],
            files: [
                {
                    path: "registry/default/examples/date-picker-form.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 13956).then(__webpack_require__.bind(__webpack_require__, 13956))),
            source: "",
            meta: undefined
        },
        "date-picker-with-presets": {
            name: "date-picker-with-presets",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "button",
                "calendar",
                "popover",
                "select"
            ],
            files: [
                {
                    path: "registry/default/examples/date-picker-with-presets.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 91581).then(__webpack_require__.bind(__webpack_require__, 91581))),
            source: "",
            meta: undefined
        },
        "date-picker-with-range": {
            name: "date-picker-with-range",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "button",
                "calendar",
                "popover"
            ],
            files: [
                {
                    path: "registry/default/examples/date-picker-with-range.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 11635).then(__webpack_require__.bind(__webpack_require__, 11635))),
            source: "",
            meta: undefined
        },
        "dialog-demo": {
            name: "dialog-demo",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "dialog"
            ],
            files: [
                {
                    path: "registry/default/examples/dialog-demo.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(86582)]).then(__webpack_require__.bind(__webpack_require__, 86582))),
            source: "",
            meta: undefined
        },
        "dialog-close-button": {
            name: "dialog-close-button",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "dialog",
                "button"
            ],
            files: [
                {
                    path: "registry/default/examples/dialog-close-button.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(29073)]).then(__webpack_require__.bind(__webpack_require__, 29073))),
            source: "",
            meta: undefined
        },
        "drawer-demo": {
            name: "drawer-demo",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "drawer"
            ],
            files: [
                {
                    path: "registry/default/examples/drawer-demo.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 52043).then(__webpack_require__.bind(__webpack_require__, 52043))),
            source: "",
            meta: undefined
        },
        "drawer-dialog": {
            name: "drawer-dialog",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "drawer",
                "dialog"
            ],
            files: [
                {
                    path: "registry/default/examples/drawer-dialog.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(56823)]).then(__webpack_require__.bind(__webpack_require__, 56823))),
            source: "",
            meta: undefined
        },
        "dropdown-menu-demo": {
            name: "dropdown-menu-demo",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "dropdown-menu"
            ],
            files: [
                {
                    path: "registry/default/examples/dropdown-menu-demo.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(54178)]).then(__webpack_require__.bind(__webpack_require__, 54178))),
            source: "",
            meta: undefined
        },
        "dropdown-menu-checkboxes": {
            name: "dropdown-menu-checkboxes",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "dropdown-menu",
                "checkbox"
            ],
            files: [
                {
                    path: "registry/default/examples/dropdown-menu-checkboxes.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 67016).then(__webpack_require__.bind(__webpack_require__, 67016))),
            source: "",
            meta: undefined
        },
        "dropdown-menu-radio-group": {
            name: "dropdown-menu-radio-group",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "dropdown-menu",
                "radio-group"
            ],
            files: [
                {
                    path: "registry/default/examples/dropdown-menu-radio-group.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 92851).then(__webpack_require__.bind(__webpack_require__, 92851))),
            source: "",
            meta: undefined
        },
        "hover-card-demo": {
            name: "hover-card-demo",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "hover-card"
            ],
            files: [
                {
                    path: "registry/default/examples/hover-card-demo.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(41463)]).then(__webpack_require__.bind(__webpack_require__, 41463))),
            source: "",
            meta: undefined
        },
        "input-demo": {
            name: "input-demo",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "input"
            ],
            files: [
                {
                    path: "registry/default/examples/input-demo.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(51431)]).then(__webpack_require__.bind(__webpack_require__, 51431))),
            source: "",
            meta: undefined
        },
        "input-disabled": {
            name: "input-disabled",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "input"
            ],
            files: [
                {
                    path: "registry/default/examples/input-disabled.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(59511)]).then(__webpack_require__.bind(__webpack_require__, 59511))),
            source: "",
            meta: undefined
        },
        "input-file": {
            name: "input-file",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "input"
            ],
            files: [
                {
                    path: "registry/default/examples/input-file.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(56294)]).then(__webpack_require__.bind(__webpack_require__, 56294))),
            source: "",
            meta: undefined
        },
        "input-form": {
            name: "input-form",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "input",
                "button",
                "form"
            ],
            files: [
                {
                    path: "registry/default/examples/input-form.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 88003).then(__webpack_require__.bind(__webpack_require__, 88003))),
            source: "",
            meta: undefined
        },
        "input-with-button": {
            name: "input-with-button",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "input",
                "button"
            ],
            files: [
                {
                    path: "registry/default/examples/input-with-button.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(45655)]).then(__webpack_require__.bind(__webpack_require__, 45655))),
            source: "",
            meta: undefined
        },
        "input-with-label": {
            name: "input-with-label",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "input",
                "button",
                "label"
            ],
            files: [
                {
                    path: "registry/default/examples/input-with-label.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(69616)]).then(__webpack_require__.bind(__webpack_require__, 69616))),
            source: "",
            meta: undefined
        },
        "input-with-text": {
            name: "input-with-text",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "input",
                "button",
                "label"
            ],
            files: [
                {
                    path: "registry/default/examples/input-with-text.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(47772)]).then(__webpack_require__.bind(__webpack_require__, 47772))),
            source: "",
            meta: undefined
        },
        "input-otp-demo": {
            name: "input-otp-demo",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "input-otp"
            ],
            files: [
                {
                    path: "registry/default/examples/input-otp-demo.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 95635).then(__webpack_require__.bind(__webpack_require__, 95635))),
            source: "",
            meta: undefined
        },
        "input-otp-pattern": {
            name: "input-otp-pattern",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "input-otp"
            ],
            files: [
                {
                    path: "registry/default/examples/input-otp-pattern.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 59953).then(__webpack_require__.bind(__webpack_require__, 59953))),
            source: "",
            meta: undefined
        },
        "input-otp-separator": {
            name: "input-otp-separator",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "input-otp"
            ],
            files: [
                {
                    path: "registry/default/examples/input-otp-separator.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 24895).then(__webpack_require__.bind(__webpack_require__, 24895))),
            source: "",
            meta: undefined
        },
        "input-otp-controlled": {
            name: "input-otp-controlled",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "input-otp"
            ],
            files: [
                {
                    path: "registry/default/examples/input-otp-controlled.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 87305).then(__webpack_require__.bind(__webpack_require__, 87305))),
            source: "",
            meta: undefined
        },
        "input-otp-form": {
            name: "input-otp-form",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "input-otp",
                "form"
            ],
            files: [
                {
                    path: "registry/default/examples/input-otp-form.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 87260).then(__webpack_require__.bind(__webpack_require__, 87260))),
            source: "",
            meta: undefined
        },
        "label-demo": {
            name: "label-demo",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "label"
            ],
            files: [
                {
                    path: "registry/default/examples/label-demo.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 48086).then(__webpack_require__.bind(__webpack_require__, 48086))),
            source: "",
            meta: undefined
        },
        "menubar-demo": {
            name: "menubar-demo",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "menubar"
            ],
            files: [
                {
                    path: "registry/default/examples/menubar-demo.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 13323).then(__webpack_require__.bind(__webpack_require__, 13323))),
            source: "",
            meta: undefined
        },
        "navigation-menu-demo": {
            name: "navigation-menu-demo",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "navigation-menu"
            ],
            files: [
                {
                    path: "registry/default/examples/navigation-menu-demo.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 16828).then(__webpack_require__.bind(__webpack_require__, 16828))),
            source: "",
            meta: undefined
        },
        "pagination-demo": {
            name: "pagination-demo",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "pagination"
            ],
            files: [
                {
                    path: "registry/default/examples/pagination-demo.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(28904)]).then(__webpack_require__.bind(__webpack_require__, 28904))),
            source: "",
            meta: undefined
        },
        "popover-demo": {
            name: "popover-demo",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "popover"
            ],
            files: [
                {
                    path: "registry/default/examples/popover-demo.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(87023)]).then(__webpack_require__.bind(__webpack_require__, 87023))),
            source: "",
            meta: undefined
        },
        "progress-demo": {
            name: "progress-demo",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "progress"
            ],
            files: [
                {
                    path: "registry/default/examples/progress-demo.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 90140).then(__webpack_require__.bind(__webpack_require__, 90140))),
            source: "",
            meta: undefined
        },
        "radio-group-demo": {
            name: "radio-group-demo",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "radio-group"
            ],
            files: [
                {
                    path: "registry/default/examples/radio-group-demo.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 52495).then(__webpack_require__.bind(__webpack_require__, 52495))),
            source: "",
            meta: undefined
        },
        "radio-group-form": {
            name: "radio-group-form",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "radio-group",
                "form"
            ],
            files: [
                {
                    path: "registry/default/examples/radio-group-form.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 75860).then(__webpack_require__.bind(__webpack_require__, 75860))),
            source: "",
            meta: undefined
        },
        "resizable-demo": {
            name: "resizable-demo",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "resizable"
            ],
            files: [
                {
                    path: "registry/default/examples/resizable-demo.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 28459).then(__webpack_require__.bind(__webpack_require__, 28459))),
            source: "",
            meta: undefined
        },
        "resizable-demo-with-handle": {
            name: "resizable-demo-with-handle",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "resizable"
            ],
            files: [
                {
                    path: "registry/default/examples/resizable-demo-with-handle.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 71952).then(__webpack_require__.bind(__webpack_require__, 71952))),
            source: "",
            meta: undefined
        },
        "resizable-vertical": {
            name: "resizable-vertical",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "resizable"
            ],
            files: [
                {
                    path: "registry/default/examples/resizable-vertical.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 12202).then(__webpack_require__.bind(__webpack_require__, 12202))),
            source: "",
            meta: undefined
        },
        "resizable-handle": {
            name: "resizable-handle",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "resizable"
            ],
            files: [
                {
                    path: "registry/default/examples/resizable-handle.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 79468).then(__webpack_require__.bind(__webpack_require__, 79468))),
            source: "",
            meta: undefined
        },
        "scroll-area-demo": {
            name: "scroll-area-demo",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "scroll-area"
            ],
            files: [
                {
                    path: "registry/default/examples/scroll-area-demo.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 59038).then(__webpack_require__.bind(__webpack_require__, 59038))),
            source: "",
            meta: undefined
        },
        "scroll-area-horizontal-demo": {
            name: "scroll-area-horizontal-demo",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "scroll-area"
            ],
            files: [
                {
                    path: "registry/default/examples/scroll-area-horizontal-demo.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(50736), __webpack_require__.e(84102)]).then(__webpack_require__.bind(__webpack_require__, 84102))),
            source: "",
            meta: undefined
        },
        "select-demo": {
            name: "select-demo",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "select"
            ],
            files: [
                {
                    path: "registry/default/examples/select-demo.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 18429).then(__webpack_require__.bind(__webpack_require__, 18429))),
            source: "",
            meta: undefined
        },
        "select-scrollable": {
            name: "select-scrollable",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "select"
            ],
            files: [
                {
                    path: "registry/default/examples/select-scrollable.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 86115).then(__webpack_require__.bind(__webpack_require__, 86115))),
            source: "",
            meta: undefined
        },
        "select-form": {
            name: "select-form",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "select"
            ],
            files: [
                {
                    path: "registry/default/examples/select-form.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 20387).then(__webpack_require__.bind(__webpack_require__, 20387))),
            source: "",
            meta: undefined
        },
        "separator-demo": {
            name: "separator-demo",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "separator"
            ],
            files: [
                {
                    path: "registry/default/examples/separator-demo.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 93031).then(__webpack_require__.bind(__webpack_require__, 93031))),
            source: "",
            meta: undefined
        },
        "sheet-demo": {
            name: "sheet-demo",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "sheet"
            ],
            files: [
                {
                    path: "registry/default/examples/sheet-demo.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(31115)]).then(__webpack_require__.bind(__webpack_require__, 31115))),
            source: "",
            meta: undefined
        },
        "sheet-side": {
            name: "sheet-side",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "sheet"
            ],
            files: [
                {
                    path: "registry/default/examples/sheet-side.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 34571).then(__webpack_require__.bind(__webpack_require__, 34571))),
            source: "",
            meta: undefined
        },
        "skeleton-demo": {
            name: "skeleton-demo",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "skeleton"
            ],
            files: [
                {
                    path: "registry/default/examples/skeleton-demo.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(16799)]).then(__webpack_require__.bind(__webpack_require__, 16799))),
            source: "",
            meta: undefined
        },
        "skeleton-card": {
            name: "skeleton-card",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "skeleton"
            ],
            files: [
                {
                    path: "registry/default/examples/skeleton-card.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(40876)]).then(__webpack_require__.bind(__webpack_require__, 40876))),
            source: "",
            meta: undefined
        },
        "slider-demo": {
            name: "slider-demo",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "slider"
            ],
            files: [
                {
                    path: "registry/default/examples/slider-demo.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(1986)]).then(__webpack_require__.bind(__webpack_require__, 1986))),
            source: "",
            meta: undefined
        },
        "sonner-demo": {
            name: "sonner-demo",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "sonner"
            ],
            files: [
                {
                    path: "registry/default/examples/sonner-demo.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 88595).then(__webpack_require__.bind(__webpack_require__, 88595))),
            source: "",
            meta: undefined
        },
        "switch-demo": {
            name: "switch-demo",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "switch"
            ],
            files: [
                {
                    path: "registry/default/examples/switch-demo.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 57495).then(__webpack_require__.bind(__webpack_require__, 57495))),
            source: "",
            meta: undefined
        },
        "switch-form": {
            name: "switch-form",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "switch",
                "form"
            ],
            files: [
                {
                    path: "registry/default/examples/switch-form.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 40438).then(__webpack_require__.bind(__webpack_require__, 40438))),
            source: "",
            meta: undefined
        },
        "table-demo": {
            name: "table-demo",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "table"
            ],
            files: [
                {
                    path: "registry/default/examples/table-demo.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(37763)]).then(__webpack_require__.bind(__webpack_require__, 37763))),
            source: "",
            meta: undefined
        },
        "tabs-demo": {
            name: "tabs-demo",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "tabs"
            ],
            files: [
                {
                    path: "registry/default/examples/tabs-demo.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(26524)]).then(__webpack_require__.bind(__webpack_require__, 26524))),
            source: "",
            meta: undefined
        },
        "textarea-demo": {
            name: "textarea-demo",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "textarea"
            ],
            files: [
                {
                    path: "registry/default/examples/textarea-demo.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(89069)]).then(__webpack_require__.bind(__webpack_require__, 89069))),
            source: "",
            meta: undefined
        },
        "textarea-disabled": {
            name: "textarea-disabled",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "textarea"
            ],
            files: [
                {
                    path: "registry/default/examples/textarea-disabled.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(73596)]).then(__webpack_require__.bind(__webpack_require__, 73596))),
            source: "",
            meta: undefined
        },
        "textarea-form": {
            name: "textarea-form",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "textarea",
                "form"
            ],
            files: [
                {
                    path: "registry/default/examples/textarea-form.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 49498).then(__webpack_require__.bind(__webpack_require__, 49498))),
            source: "",
            meta: undefined
        },
        "textarea-with-button": {
            name: "textarea-with-button",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "textarea",
                "button"
            ],
            files: [
                {
                    path: "registry/default/examples/textarea-with-button.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(28647)]).then(__webpack_require__.bind(__webpack_require__, 28647))),
            source: "",
            meta: undefined
        },
        "textarea-with-label": {
            name: "textarea-with-label",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "textarea",
                "label"
            ],
            files: [
                {
                    path: "registry/default/examples/textarea-with-label.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(35179)]).then(__webpack_require__.bind(__webpack_require__, 35179))),
            source: "",
            meta: undefined
        },
        "textarea-with-text": {
            name: "textarea-with-text",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "textarea",
                "label"
            ],
            files: [
                {
                    path: "registry/default/examples/textarea-with-text.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(16747)]).then(__webpack_require__.bind(__webpack_require__, 16747))),
            source: "",
            meta: undefined
        },
        "toast-demo": {
            name: "toast-demo",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "toast"
            ],
            files: [
                {
                    path: "registry/default/examples/toast-demo.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 38567).then(__webpack_require__.bind(__webpack_require__, 38567))),
            source: "",
            meta: undefined
        },
        "toast-destructive": {
            name: "toast-destructive",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "toast"
            ],
            files: [
                {
                    path: "registry/default/examples/toast-destructive.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 49379).then(__webpack_require__.bind(__webpack_require__, 49379))),
            source: "",
            meta: undefined
        },
        "toast-simple": {
            name: "toast-simple",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "toast"
            ],
            files: [
                {
                    path: "registry/default/examples/toast-simple.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 8699).then(__webpack_require__.bind(__webpack_require__, 8699))),
            source: "",
            meta: undefined
        },
        "toast-with-action": {
            name: "toast-with-action",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "toast"
            ],
            files: [
                {
                    path: "registry/default/examples/toast-with-action.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 39285).then(__webpack_require__.bind(__webpack_require__, 39285))),
            source: "",
            meta: undefined
        },
        "toast-with-title": {
            name: "toast-with-title",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "toast"
            ],
            files: [
                {
                    path: "registry/default/examples/toast-with-title.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 24341).then(__webpack_require__.bind(__webpack_require__, 24341))),
            source: "",
            meta: undefined
        },
        "toggle-group-demo": {
            name: "toggle-group-demo",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "toggle-group"
            ],
            files: [
                {
                    path: "registry/default/examples/toggle-group-demo.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 66080).then(__webpack_require__.bind(__webpack_require__, 66080))),
            source: "",
            meta: undefined
        },
        "toggle-group-disabled": {
            name: "toggle-group-disabled",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "toggle-group"
            ],
            files: [
                {
                    path: "registry/default/examples/toggle-group-disabled.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 44871).then(__webpack_require__.bind(__webpack_require__, 44871))),
            source: "",
            meta: undefined
        },
        "toggle-group-lg": {
            name: "toggle-group-lg",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "toggle-group"
            ],
            files: [
                {
                    path: "registry/default/examples/toggle-group-lg.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 14506).then(__webpack_require__.bind(__webpack_require__, 14506))),
            source: "",
            meta: undefined
        },
        "toggle-group-outline": {
            name: "toggle-group-outline",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "toggle-group"
            ],
            files: [
                {
                    path: "registry/default/examples/toggle-group-outline.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 91792).then(__webpack_require__.bind(__webpack_require__, 91792))),
            source: "",
            meta: undefined
        },
        "toggle-group-sm": {
            name: "toggle-group-sm",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "toggle-group"
            ],
            files: [
                {
                    path: "registry/default/examples/toggle-group-sm.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 73202).then(__webpack_require__.bind(__webpack_require__, 73202))),
            source: "",
            meta: undefined
        },
        "toggle-group-single": {
            name: "toggle-group-single",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "toggle-group"
            ],
            files: [
                {
                    path: "registry/default/examples/toggle-group-single.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 10415).then(__webpack_require__.bind(__webpack_require__, 10415))),
            source: "",
            meta: undefined
        },
        "toggle-demo": {
            name: "toggle-demo",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "toggle"
            ],
            files: [
                {
                    path: "registry/default/examples/toggle-demo.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 43282).then(__webpack_require__.bind(__webpack_require__, 43282))),
            source: "",
            meta: undefined
        },
        "toggle-disabled": {
            name: "toggle-disabled",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "toggle"
            ],
            files: [
                {
                    path: "registry/default/examples/toggle-disabled.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 39702).then(__webpack_require__.bind(__webpack_require__, 39702))),
            source: "",
            meta: undefined
        },
        "toggle-lg": {
            name: "toggle-lg",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "toggle"
            ],
            files: [
                {
                    path: "registry/default/examples/toggle-lg.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 78056).then(__webpack_require__.bind(__webpack_require__, 78056))),
            source: "",
            meta: undefined
        },
        "toggle-outline": {
            name: "toggle-outline",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "toggle"
            ],
            files: [
                {
                    path: "registry/default/examples/toggle-outline.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 21219).then(__webpack_require__.bind(__webpack_require__, 21219))),
            source: "",
            meta: undefined
        },
        "toggle-sm": {
            name: "toggle-sm",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "toggle"
            ],
            files: [
                {
                    path: "registry/default/examples/toggle-sm.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 39148).then(__webpack_require__.bind(__webpack_require__, 39148))),
            source: "",
            meta: undefined
        },
        "toggle-with-text": {
            name: "toggle-with-text",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "toggle"
            ],
            files: [
                {
                    path: "registry/default/examples/toggle-with-text.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 14266).then(__webpack_require__.bind(__webpack_require__, 14266))),
            source: "",
            meta: undefined
        },
        "tooltip-demo": {
            name: "tooltip-demo",
            description: "",
            type: "registry:example",
            registryDependencies: [
                "tooltip"
            ],
            files: [
                {
                    path: "registry/default/examples/tooltip-demo.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(84299), __webpack_require__.e(37780)]).then(__webpack_require__.bind(__webpack_require__, 37780))),
            source: "",
            meta: undefined
        },
        "typography-blockquote": {
            name: "typography-blockquote",
            description: "",
            type: "registry:example",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/default/examples/typography-blockquote.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 26800).then(__webpack_require__.bind(__webpack_require__, 26800))),
            source: "",
            meta: undefined
        },
        "typography-demo": {
            name: "typography-demo",
            description: "",
            type: "registry:example",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/default/examples/typography-demo.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 943).then(__webpack_require__.bind(__webpack_require__, 943))),
            source: "",
            meta: undefined
        },
        "typography-h1": {
            name: "typography-h1",
            description: "",
            type: "registry:example",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/default/examples/typography-h1.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 63921).then(__webpack_require__.bind(__webpack_require__, 63921))),
            source: "",
            meta: undefined
        },
        "typography-h2": {
            name: "typography-h2",
            description: "",
            type: "registry:example",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/default/examples/typography-h2.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 44897).then(__webpack_require__.bind(__webpack_require__, 44897))),
            source: "",
            meta: undefined
        },
        "typography-h3": {
            name: "typography-h3",
            description: "",
            type: "registry:example",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/default/examples/typography-h3.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 81473).then(__webpack_require__.bind(__webpack_require__, 81473))),
            source: "",
            meta: undefined
        },
        "typography-h4": {
            name: "typography-h4",
            description: "",
            type: "registry:example",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/default/examples/typography-h4.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 99366).then(__webpack_require__.bind(__webpack_require__, 99366))),
            source: "",
            meta: undefined
        },
        "typography-inline-code": {
            name: "typography-inline-code",
            description: "",
            type: "registry:example",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/default/examples/typography-inline-code.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 63199).then(__webpack_require__.bind(__webpack_require__, 63199))),
            source: "",
            meta: undefined
        },
        "typography-large": {
            name: "typography-large",
            description: "",
            type: "registry:example",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/default/examples/typography-large.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 95719).then(__webpack_require__.bind(__webpack_require__, 95719))),
            source: "",
            meta: undefined
        },
        "typography-lead": {
            name: "typography-lead",
            description: "",
            type: "registry:example",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/default/examples/typography-lead.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 30825).then(__webpack_require__.bind(__webpack_require__, 30825))),
            source: "",
            meta: undefined
        },
        "typography-list": {
            name: "typography-list",
            description: "",
            type: "registry:example",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/default/examples/typography-list.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 35490).then(__webpack_require__.bind(__webpack_require__, 35490))),
            source: "",
            meta: undefined
        },
        "typography-muted": {
            name: "typography-muted",
            description: "",
            type: "registry:example",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/default/examples/typography-muted.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 36877).then(__webpack_require__.bind(__webpack_require__, 36877))),
            source: "",
            meta: undefined
        },
        "typography-p": {
            name: "typography-p",
            description: "",
            type: "registry:example",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/default/examples/typography-p.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 72035).then(__webpack_require__.bind(__webpack_require__, 72035))),
            source: "",
            meta: undefined
        },
        "typography-small": {
            name: "typography-small",
            description: "",
            type: "registry:example",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/default/examples/typography-small.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 61313).then(__webpack_require__.bind(__webpack_require__, 61313))),
            source: "",
            meta: undefined
        },
        "typography-table": {
            name: "typography-table",
            description: "",
            type: "registry:example",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/default/examples/typography-table.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 17981).then(__webpack_require__.bind(__webpack_require__, 17981))),
            source: "",
            meta: undefined
        },
        "mode-toggle": {
            name: "mode-toggle",
            description: "",
            type: "registry:example",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/default/examples/mode-toggle.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 34202).then(__webpack_require__.bind(__webpack_require__, 34202))),
            source: "",
            meta: undefined
        },
        "chart-bar-demo": {
            name: "chart-bar-demo",
            description: "",
            type: "registry:example",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/default/examples/chart-bar-demo.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 68256).then(__webpack_require__.bind(__webpack_require__, 68256))),
            source: "",
            meta: undefined
        },
        "chart-bar-demo-grid": {
            name: "chart-bar-demo-grid",
            description: "",
            type: "registry:example",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/default/examples/chart-bar-demo-grid.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 92916).then(__webpack_require__.bind(__webpack_require__, 92916))),
            source: "",
            meta: undefined
        },
        "chart-bar-demo-axis": {
            name: "chart-bar-demo-axis",
            description: "",
            type: "registry:example",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/default/examples/chart-bar-demo-axis.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 4063).then(__webpack_require__.bind(__webpack_require__, 4063))),
            source: "",
            meta: undefined
        },
        "chart-bar-demo-tooltip": {
            name: "chart-bar-demo-tooltip",
            description: "",
            type: "registry:example",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/default/examples/chart-bar-demo-tooltip.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 72922).then(__webpack_require__.bind(__webpack_require__, 72922))),
            source: "",
            meta: undefined
        },
        "chart-bar-demo-legend": {
            name: "chart-bar-demo-legend",
            description: "",
            type: "registry:example",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/default/examples/chart-bar-demo-legend.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 11537).then(__webpack_require__.bind(__webpack_require__, 11537))),
            source: "",
            meta: undefined
        },
        "chart-tooltip-demo": {
            name: "chart-tooltip-demo",
            description: "",
            type: "registry:example",
            registryDependencies: undefined,
            files: [
                {
                    path: "registry/default/examples/chart-tooltip-demo.tsx",
                    type: "registry:example",
                    target: ""
                }
            ],
            categories: undefined,
            component: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 84685).then(__webpack_require__.bind(__webpack_require__, 84685))),
            source: "",
            meta: undefined
        }
    }
};


/***/ }),

/***/ 38478:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   editInV0: () => (/* binding */ editInV0)
/* harmony export */ });
/* harmony import */ var private_next_rsc_server_reference__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68457);
/* harmony import */ var private_next_rsc_action_encryption__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38065);
/* harmony import */ var private_next_rsc_action_encryption__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(private_next_rsc_action_encryption__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _vercel_analytics_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37578);
/* harmony import */ var _vercel_analytics_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_vercel_analytics_server__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var change_case__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99143);
/* harmony import */ var _lib_registry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57820);
/* harmony import */ var private_next_rsc_action_validate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(43581);
/* __next_internal_action_entry_do_not_use__ {"b54ca7098d0868021410e04eb2301e6d7d8ac885":"editInV0"} */ 




async function editInV0({ name, style, url }) {
    style = style ?? "new-york";
    try {
        const registryItem = await (0,_lib_registry__WEBPACK_IMPORTED_MODULE_3__.getRegistryItem)(name, style);
        if (!registryItem) {
            return {
                error: "Something went wrong. Please try again later."
            };
        }
        await (0,_vercel_analytics_server__WEBPACK_IMPORTED_MODULE_2__.track)("edit_in_v0", {
            name,
            title: registryItem.name,
            description: registryItem.description ?? registryItem.name,
            style,
            url
        });
        // Remove v0 prefix from the name
        registryItem.name = registryItem.name.replace(/^v0-/, "");
        const projectName = (0,change_case__WEBPACK_IMPORTED_MODULE_4__.capitalCase)(name.replace(/\d+/g, ""));
        registryItem.description = registryItem.description || projectName;
        // Replace `@/registry/new-york/` in files.
        registryItem.files = registryItem.files?.map((file)=>{
            if (file.content?.includes("@/registry/new-york/ui")) {
                file.content = file.content?.replaceAll("@/registry/new-york/ui", "@/components/ui");
            }
            return file;
        });
        const payload = {
            version: 2,
            payload: registryItem,
            source: {
                title: "shadcn/ui",
                url
            },
            meta: {
                project: projectName,
                file: `${name}.tsx`
            }
        };
        const response = await fetch(`${process.env.V0_URL}/chat/api/open-in-v0`, {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
                "x-v0-edit-secret": process.env.V0_EDIT_SECRET,
                "x-vercel-protection-bypass": process.env.DEPLOYMENT_PROTECTION_BYPASS || "not-set",
                "Content-Type": "application/json"
            }
        });
        if (!response.ok) {
            if (response.status === 403) {
                throw new Error("Unauthorized");
            }
            console.error(response.statusText);
            throw new Error("Something went wrong. Please try again later.");
        }
        const result = await response.json();
        return {
            ...result,
            url: `${process.env.V0_URL}/chat/api/open-in-v0/${result.id}`
        };
    } catch (error) {
        console.error(error);
        if (error instanceof Error) {
            return {
                error: error.message
            };
        }
    }
}

(0,private_next_rsc_action_validate__WEBPACK_IMPORTED_MODULE_5__.ensureServerEntryExports)([
    editInV0
]);
(0,private_next_rsc_server_reference__WEBPACK_IMPORTED_MODULE_0__.registerServerReference)("b54ca7098d0868021410e04eb2301e6d7d8ac885", editInV0);


/***/ }),

/***/ 57820:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getRegistryItem: () => (/* binding */ getRegistryItem)
/* harmony export */ });
/* unused harmony exports DEFAULT_REGISTRY_STYLE, getRegistryComponent, fixImport, createFileTreeForRegistryItemFiles */
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22037);
/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(os__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _registry___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73043);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'shadcn/registry'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var ts_morph__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(44288);






const DEFAULT_REGISTRY_STYLE = "new-york";
const memoizedIndex = Object.fromEntries(Object.entries(_registry___WEBPACK_IMPORTED_MODULE_3__.Index).map(([style, items])=>[
        style,
        {
            ...items
        }
    ]));
function getRegistryComponent(name, style = DEFAULT_REGISTRY_STYLE) {
    return memoizedIndex[style][name]?.component;
}
async function getRegistryItem(name, style = DEFAULT_REGISTRY_STYLE) {
    const item = memoizedIndex[style][name];
    if (!item) {
        return null;
    }
    // Convert all file paths to object.
    // TODO: remove when we migrate to new registry.
    item.files = item.files.map((file)=>typeof file === "string" ? {
            path: file
        } : file);
    // Fail early before doing expensive file operations.
    const result = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'shadcn/registry'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).safeParse(item);
    if (!result.success) {
        return null;
    }
    let files = [];
    for (const file of item.files){
        const content = await getFileContent(file);
        const relativePath = path__WEBPACK_IMPORTED_MODULE_2___default().relative(process.cwd(), file.path);
        files.push({
            ...file,
            path: relativePath,
            content
        });
    }
    // Get meta.
    // Assume the first file is the main file.
    // const meta = await getFileMeta(files[0].path)
    // Fix file paths.
    files = fixFilePaths(files);
    const parsed = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'shadcn/registry'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).safeParse({
        ...result.data,
        files
    });
    if (!parsed.success) {
        console.error(parsed.error.message);
        return null;
    }
    return parsed.data;
}
async function getFileContent(file) {
    const raw = await fs__WEBPACK_IMPORTED_MODULE_0__.promises.readFile(file.path, "utf-8");
    const project = new ts_morph__WEBPACK_IMPORTED_MODULE_5__.Project({
        compilerOptions: {}
    });
    const tempFile = await createTempSourceFile(file.path);
    const sourceFile = project.createSourceFile(tempFile, raw, {
        scriptKind: ts_morph__WEBPACK_IMPORTED_MODULE_5__.ScriptKind.TSX
    });
    // Remove meta variables.
    removeVariable(sourceFile, "iframeHeight");
    removeVariable(sourceFile, "containerClassName");
    removeVariable(sourceFile, "description");
    let code = sourceFile.getFullText();
    // Some registry items uses default export.
    // We want to use named export instead.
    // TODO: do we really need this? - @shadcn.
    if (file.type !== "registry:page") {
        code = code.replaceAll("export default", "export");
    }
    // Fix imports.
    code = fixImport(code);
    return code;
}
async function getFileMeta(filePath) {
    const raw = await fs.readFile(filePath, "utf-8");
    const project = new Project({
        compilerOptions: {}
    });
    const tempFile = await createTempSourceFile(filePath);
    const sourceFile = project.createSourceFile(tempFile, raw, {
        scriptKind: ScriptKind.TSX
    });
    const iframeHeight = extractVariable(sourceFile, "iframeHeight");
    const containerClassName = extractVariable(sourceFile, "containerClassName");
    const description = extractVariable(sourceFile, "description");
    return {
        iframeHeight,
        containerClassName,
        description
    };
}
function getFileTarget(file) {
    let target = file.target;
    if (!target || target === "") {
        const fileName = file.path.split("/").pop();
        if (file.type === "registry:block" || file.type === "registry:component" || file.type === "registry:example") {
            target = `components/${fileName}`;
        }
        if (file.type === "registry:ui") {
            target = `components/ui/${fileName}`;
        }
        if (file.type === "registry:hook") {
            target = `hooks/${fileName}`;
        }
        if (file.type === "registry:lib") {
            target = `lib/${fileName}`;
        }
    }
    return target;
}
async function createTempSourceFile(filename) {
    const dir = await fs__WEBPACK_IMPORTED_MODULE_0__.promises.mkdtemp(path__WEBPACK_IMPORTED_MODULE_2___default().join((0,os__WEBPACK_IMPORTED_MODULE_1__.tmpdir)(), "shadcn-"));
    return path__WEBPACK_IMPORTED_MODULE_2___default().join(dir, filename);
}
function removeVariable(sourceFile, name) {
    sourceFile.getVariableDeclaration(name)?.remove();
}
function extractVariable(sourceFile, name) {
    const variable = sourceFile.getVariableDeclaration(name);
    if (!variable) {
        return null;
    }
    const value = variable.getInitializerIfKindOrThrow(SyntaxKind.StringLiteral).getLiteralValue();
    variable.remove();
    return value;
}
function fixFilePaths(files) {
    if (!files) {
        return [];
    }
    // Resolve all paths relative to the first file's directory.
    const firstFilePath = files[0].path;
    const firstFilePathDir = path__WEBPACK_IMPORTED_MODULE_2___default().dirname(firstFilePath);
    return files.map((file)=>{
        return {
            ...file,
            path: path__WEBPACK_IMPORTED_MODULE_2___default().relative(firstFilePathDir, file.path),
            target: getFileTarget(file)
        };
    });
}
function fixImport(content) {
    const regex = /@\/(.+?)\/((?:.*?\/)?(?:components|ui|hooks|lib))\/([\w-]+)/g;
    const replacement = (match, path, type, component)=>{
        if (type.endsWith("components")) {
            return `@/components/${component}`;
        } else if (type.endsWith("ui")) {
            return `@/components/ui/${component}`;
        } else if (type.endsWith("hooks")) {
            return `@/hooks/${component}`;
        } else if (type.endsWith("lib")) {
            return `@/lib/${component}`;
        }
        return match;
    };
    return content.replace(regex, replacement);
}
function createFileTreeForRegistryItemFiles(files) {
    const root = [];
    for (const file of files){
        const path = file.target ?? file.path;
        const parts = path.split("/");
        let currentLevel = root;
        for(let i = 0; i < parts.length; i++){
            const part = parts[i];
            const isFile = i === parts.length - 1;
            const existingNode = currentLevel.find((node)=>node.name === part);
            if (existingNode) {
                if (isFile) {
                    // Update existing file node with full path
                    existingNode.path = path;
                } else {
                    // Move to next level in the tree
                    currentLevel = existingNode.children;
                }
            } else {
                const newNode = isFile ? {
                    name: part,
                    path
                } : {
                    name: part,
                    children: []
                };
                currentLevel.push(newNode);
                if (!isFile) {
                    currentLevel = newNode.children;
                }
            }
        }
    }
    return root;
}


/***/ })

};
;