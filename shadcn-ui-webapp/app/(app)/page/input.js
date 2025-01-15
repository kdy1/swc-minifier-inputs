(() => {
var exports = {};
exports.id = 67198;
exports.ids = [67198,23254];
exports.modules = {

/***/ 47849:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/client/components/action-async-storage.external");

/***/ }),

/***/ 72934:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ 55403:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/client/components/request-async-storage.external");

/***/ }),

/***/ 54580:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ 94749:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/client/components/static-generation-async-storage.external");

/***/ }),

/***/ 45869:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ 20399:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.prod.js");

/***/ }),

/***/ 75163:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlobalError: () => (/* reexport default from dynamic */ next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_6___default.a),
/* harmony export */   __next_app__: () => (/* binding */ __next_app__),
/* harmony export */   originalPathname: () => (/* binding */ originalPathname),
/* harmony export */   pages: () => (/* binding */ pages),
/* harmony export */   routeModule: () => (/* binding */ routeModule),
/* harmony export */   tree: () => (/* binding */ tree)
/* harmony export */ });
/* harmony import */ var _Users_kdy1_projects_shadcn_ui_apps_www_app_app_page_tsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90610);
/* harmony import */ var _Users_kdy1_projects_shadcn_ui_apps_www_app_app_layout_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86051);
/* harmony import */ var next_dist_client_components_not_found_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26424);
/* harmony import */ var next_dist_client_components_not_found_error__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_not_found_error__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Users_kdy1_projects_shadcn_ui_apps_www_app_layout_tsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1840);
/* harmony import */ var next_dist_server_future_route_modules_app_page_module_compiled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(89174);
/* harmony import */ var next_dist_server_future_route_modules_app_page_module_compiled__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_page_module_compiled__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13153);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(85894);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(42311);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_7__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_7__) if(["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_7__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);




'TURBOPACK { transition: next-ssr }';


// We inject the tree and pages here so that we can use them in the route
// module.
const tree = {
        children: [
        '',
        {
        children: [
        '(app)',
        {
        children: ['__PAGE__', {}, {
          page: [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 90610)), "/Users/kdy1/projects/shadcn-ui/apps/www/app/(app)/page.tsx"],
          
        }]
      },
        {
        'layout': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 86051)), "/Users/kdy1/projects/shadcn-ui/apps/www/app/(app)/layout.tsx"],
'not-found': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 26424, 23)), "next/dist/client/components/not-found-error"],
        
      }
      ]
      },
        {
        'layout': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 1840)), "/Users/kdy1/projects/shadcn-ui/apps/www/app/layout.tsx"],
'not-found': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 26424, 23)), "next/dist/client/components/not-found-error"],
        
      }
      ]
      }.children;
const pages = ["/Users/kdy1/projects/shadcn-ui/apps/www/app/(app)/page.tsx"];


const __next_app_require__ = __webpack_require__
const __next_app_load_chunk__ = () => Promise.resolve()
const originalPathname = "/(app)/page";
const __next_app__ = {
    require: __next_app_require__,
    loadChunk: __next_app_load_chunk__
};

// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_future_route_modules_app_page_module_compiled__WEBPACK_IMPORTED_MODULE_4__.AppPageRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_5__/* .RouteKind */ .x.APP_PAGE,
        page: "/(app)/page",
        pathname: "/",
        // The following aren't used in production.
        bundlePath: '',
        filename: '',
        appPaths: []
    },
    userland: {
        loaderTree: tree
    }
});

//# sourceMappingURL=app-page.js.map

/***/ }),

/***/ 50468:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 88216));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 15689));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 38933));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 81193));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 41510));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 50871));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 28120));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 39696));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 37921));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 7073));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 62373));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 96255));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 81365));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3358, 23));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 40450, 23));


/***/ }),

/***/ 81365:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExamplesNav: () => (/* binding */ ExamplesNav)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78553);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42869);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94667);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26910);
/* harmony import */ var _registry_new_york_ui_scroll_area__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23254);
/* __next_internal_client_entry_do_not_use__ ExamplesNav auto */ 




const examples = [
    {
        name: "Mail",
        href: "/examples/mail",
        code: "https://github.com/shadcn/ui/tree/main/apps/www/app/(app)/examples/mail",
        hidden: false
    },
    {
        name: "Dashboard",
        href: "/examples/dashboard",
        code: "https://github.com/shadcn/ui/tree/main/apps/www/app/(app)/examples/dashboard",
        hidden: false
    },
    {
        name: "Tasks",
        href: "/examples/tasks",
        code: "https://github.com/shadcn/ui/tree/main/apps/www/app/(app)/examples/tasks",
        hidden: false
    },
    {
        name: "Playground",
        href: "/examples/playground",
        code: "https://github.com/shadcn/ui/tree/main/apps/www/app/(app)/examples/playground",
        hidden: false
    },
    {
        name: "Forms",
        href: "/examples/forms",
        code: "https://github.com/shadcn/ui/tree/main/apps/www/app/(app)/examples/forms",
        hidden: false
    },
    {
        name: "Music",
        href: "/examples/music",
        code: "https://github.com/shadcn/ui/tree/main/apps/www/app/(app)/examples/music",
        hidden: false
    },
    {
        name: "Authentication",
        href: "/examples/authentication",
        code: "https://github.com/shadcn/ui/tree/main/apps/www/app/(app)/examples/authentication",
        hidden: false
    }
];
function ExamplesNav({ className, ...props }) {
    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "relative",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_scroll_area__WEBPACK_IMPORTED_MODULE_3__.ScrollArea, {
            className: "max-w-[600px] lg:max-w-none",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)("flex items-center", className),
                    ...props,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ExampleLink, {
                            example: {
                                name: "Examples",
                                href: "/",
                                code: "",
                                hidden: false
                            },
                            isActive: pathname === "/"
                        }),
                        examples.map((example)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ExampleLink, {
                                example: example,
                                isActive: pathname?.startsWith(example.href) ?? false
                            }, example.href))
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_scroll_area__WEBPACK_IMPORTED_MODULE_3__.ScrollBar, {
                    orientation: "horizontal",
                    className: "invisible"
                })
            ]
        })
    });
}
function ExampleLink({ example, isActive }) {
    if (example.hidden) {
        return null;
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
        href: example.href,
        className: "flex h-7 items-center justify-center rounded-full px-4 text-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary data-[active=true]:bg-muted data-[active=true]:text-primary",
        "data-active": isActive,
        children: example.name
    }, example.href);
}


/***/ }),

/***/ 23254:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScrollArea: () => (/* binding */ ScrollArea),
/* harmony export */   ScrollBar: () => (/* binding */ ScrollBar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78553);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70615);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _radix_ui_react_scroll_area__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15364);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26910);
/* __next_internal_client_entry_do_not_use__ ScrollArea,ScrollBar auto */ 



const ScrollArea = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, children, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_radix_ui_react_scroll_area__WEBPACK_IMPORTED_MODULE_2__/* .Root */ .fC, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("relative overflow-hidden", className),
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_scroll_area__WEBPACK_IMPORTED_MODULE_2__/* .Viewport */ .l_, {
                className: "h-full w-full rounded-[inherit]",
                children: children
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ScrollBar, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_scroll_area__WEBPACK_IMPORTED_MODULE_2__/* .Corner */ .Ns, {})
        ]
    }));
ScrollArea.displayName = _radix_ui_react_scroll_area__WEBPACK_IMPORTED_MODULE_2__/* .Root */ .fC.displayName;
const ScrollBar = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, orientation = "vertical", ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_scroll_area__WEBPACK_IMPORTED_MODULE_2__/* .ScrollAreaScrollbar */ .gb, {
        ref: ref,
        orientation: orientation,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("flex touch-none select-none transition-colors", orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]", orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]", className),
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_scroll_area__WEBPACK_IMPORTED_MODULE_2__/* .ScrollAreaThumb */ .q4, {
            className: "relative flex-1 rounded-full bg-border"
        })
    }));
ScrollBar.displayName = _radix_ui_react_scroll_area__WEBPACK_IMPORTED_MODULE_2__/* .ScrollAreaScrollbar */ .gb.displayName;



/***/ }),

/***/ 40891:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ File)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85721);
/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const File = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("File", [
    [
        "path",
        {
            d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
            key: "1rqfz7"
        }
    ],
    [
        "path",
        {
            d: "M14 2v4a2 2 0 0 0 2 2h4",
            key: "tnqrlb"
        }
    ]
]);
 //# sourceMappingURL=file.js.map


/***/ }),

/***/ 76693:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Moon)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85721);
/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Moon = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("Moon", [
    [
        "path",
        {
            d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",
            key: "a7tn18"
        }
    ]
]);
 //# sourceMappingURL=moon.js.map


/***/ }),

/***/ 28776:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Sun)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85721);
/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Sun = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("Sun", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "4",
            key: "4exip2"
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
            d: "M12 20v2",
            key: "1lh1kg"
        }
    ],
    [
        "path",
        {
            d: "m4.93 4.93 1.41 1.41",
            key: "149t6j"
        }
    ],
    [
        "path",
        {
            d: "m17.66 17.66 1.41 1.41",
            key: "ptbguv"
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
            d: "M20 12h2",
            key: "1q8mjw"
        }
    ],
    [
        "path",
        {
            d: "m6.34 17.66-1.41 1.41",
            key: "1m8zz5"
        }
    ],
    [
        "path",
        {
            d: "m19.07 4.93-1.41 1.41",
            key: "1shlcs"
        }
    ]
]);
 //# sourceMappingURL=sun.js.map


/***/ }),

/***/ 90610:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IndexPage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32379);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42290);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(95308);
/* harmony import */ var _components_announcement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18808);
/* harmony import */ var _components_cards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12210);
/* harmony import */ var _components_examples_nav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(75661);
/* harmony import */ var _components_page_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(18383);
/* harmony import */ var _registry_new_york_ui_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(11474);








function IndexPage() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_page_header__WEBPACK_IMPORTED_MODULE_6__/* .PageHeader */ .mr, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_announcement__WEBPACK_IMPORTED_MODULE_3__/* .Announcement */ .I, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_page_header__WEBPACK_IMPORTED_MODULE_6__/* .PageHeaderHeading */ .vT, {
                        children: "Build your component library"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_page_header__WEBPACK_IMPORTED_MODULE_6__/* .PageHeaderDescription */ .uv, {
                        children: "Beautifully designed components that you can copy and paste into your apps. Made with Tailwind CSS. Open source."
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_page_header__WEBPACK_IMPORTED_MODULE_6__/* .PageActions */ .QJ, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_button__WEBPACK_IMPORTED_MODULE_7__.Button, {
                                asChild: true,
                                size: "sm",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                    href: "/docs",
                                    children: "Get Started"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_button__WEBPACK_IMPORTED_MODULE_7__.Button, {
                                asChild: true,
                                size: "sm",
                                variant: "ghost",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                    href: "/blocks",
                                    children: "Browse Blocks"
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "border-grid border-b",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container-wrapper",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "container py-4",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_examples_nav__WEBPACK_IMPORTED_MODULE_5__/* .ExamplesNav */ .x, {
                            className: "[&>a:first-child]:text-primary"
                        })
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container-wrapper",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "container py-6",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                            className: "overflow-hidden rounded-lg border bg-background shadow-md md:hidden md:shadow-xl",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                    src: "/examples/cards-light.png",
                                    width: 1280,
                                    height: 1214,
                                    alt: "Cards",
                                    className: "block dark:hidden"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                    src: "/examples/cards-dark.png",
                                    width: 1280,
                                    height: 1214,
                                    alt: "Cards",
                                    className: "hidden dark:block"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                            className: "hidden md:block [&>div]:p-0",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_cards__WEBPACK_IMPORTED_MODULE_4__/* .CardsDemo */ .$, {})
                        })
                    ]
                })
            })
        ]
    });
}


/***/ }),

/***/ 75661:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ e0)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62053);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/components/examples-nav.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/components/examples-nav.tsx#ExamplesNav`);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [17161,91965,96821,78688,1929,15364,16753,65206,40450,51017,42290,3358,20576,31391,30799,39220,84535,23361,33066,55131], () => (__webpack_exec__(75163)));
module.exports = __webpack_exports__;

})();