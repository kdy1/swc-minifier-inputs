"use strict";
(() => {
var exports = {};
exports.id = 47017;
exports.ids = [47017];
exports.modules = {

/***/ 47849:
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external");

/***/ }),

/***/ 72934:
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ 55403:
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external");

/***/ }),

/***/ 54580:
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ 94749:
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external");

/***/ }),

/***/ 45869:
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ 20399:
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.prod.js");

/***/ }),

/***/ 22482:
/***/ ((module) => {

module.exports = import("shiki");;

/***/ }),

/***/ 14300:
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 82361:
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ 57147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 31405:
/***/ ((module) => {

module.exports = require("inspector");

/***/ }),

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 71017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 4074:
/***/ ((module) => {

module.exports = require("perf_hooks");

/***/ }),

/***/ 89955:
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ 73837:
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ 4195:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlobalError: () => (/* reexport default from dynamic */ next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_7___default.a),
/* harmony export */   __next_app__: () => (/* binding */ __next_app__),
/* harmony export */   originalPathname: () => (/* binding */ originalPathname),
/* harmony export */   pages: () => (/* binding */ pages),
/* harmony export */   routeModule: () => (/* binding */ routeModule),
/* harmony export */   tree: () => (/* binding */ tree)
/* harmony export */ });
/* harmony import */ var _Users_kdy1_projects_shadcn_ui_apps_www_app_app_blocks_page_tsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12529);
/* harmony import */ var _Users_kdy1_projects_shadcn_ui_apps_www_app_app_blocks_layout_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52911);
/* harmony import */ var _Users_kdy1_projects_shadcn_ui_apps_www_app_app_layout_tsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86051);
/* harmony import */ var next_dist_client_components_not_found_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26424);
/* harmony import */ var next_dist_client_components_not_found_error__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_not_found_error__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Users_kdy1_projects_shadcn_ui_apps_www_app_layout_tsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1840);
/* harmony import */ var next_dist_server_future_route_modules_app_page_module_compiled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(89174);
/* harmony import */ var next_dist_server_future_route_modules_app_page_module_compiled__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_page_module_compiled__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13153);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(85894);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(42311);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_8__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_8__) if(["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_8__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Users_kdy1_projects_shadcn_ui_apps_www_app_app_blocks_page_tsx__WEBPACK_IMPORTED_MODULE_0__]);
_Users_kdy1_projects_shadcn_ui_apps_www_app_app_blocks_page_tsx__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





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
        children: [
        'blocks',
        {
        children: ['__PAGE__', {}, {
          page: [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 12529)), "/Users/kdy1/projects/shadcn-ui/apps/www/app/(app)/blocks/page.tsx"],
          
        }]
      },
        {
        'layout': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 52911)), "/Users/kdy1/projects/shadcn-ui/apps/www/app/(app)/blocks/layout.tsx"],
        
      }
      ]
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
const pages = ["/Users/kdy1/projects/shadcn-ui/apps/www/app/(app)/blocks/page.tsx"];


const __next_app_require__ = __webpack_require__
const __next_app_load_chunk__ = () => Promise.resolve()
const originalPathname = "/(app)/blocks/page";
const __next_app__ = {
    require: __next_app_require__,
    loadChunk: __next_app_load_chunk__
};

// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_future_route_modules_app_page_module_compiled__WEBPACK_IMPORTED_MODULE_5__.AppPageRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_6__/* .RouteKind */ .x.APP_PAGE,
        page: "/(app)/blocks/page",
        pathname: "/blocks",
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
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 12529:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BlocksPage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32379);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_block_display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26949);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_block_display__WEBPACK_IMPORTED_MODULE_1__]);
_components_block_display__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const FEATURED_BLOCKS = [
    "sidebar-07",
    "sidebar-03",
    "login-03",
    "login-04"
];
async function BlocksPage() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: FEATURED_BLOCKS.map((block)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "border-grid container border-b py-8 first:pt-6 last:border-b-0 md:py-12",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_block_display__WEBPACK_IMPORTED_MODULE_1__/* .BlockDisplay */ .q, {
                    name: block
                })
            }, block))
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [17161,91965,96821,9511,78688,1929,11282,15364,35843,16753,51515,65206,40450,51017,59882,3358,68501,35233,20576,31391,46498,30799,24634,27089,27739,4608,32562,39220,68396,78276,15717,23361,33066,89968,10354,77904,63063,49026], () => (__webpack_exec__(4195)));
module.exports = __webpack_exports__;

})();