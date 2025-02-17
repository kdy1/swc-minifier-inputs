(() => {
var exports = {};
exports.id = 8750;
exports.ids = [8750];
exports.modules = {

/***/ 710846:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.prod.js");

/***/ }),

/***/ 744870:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.prod.js");

/***/ }),

/***/ 529294:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ 663033:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ 183725:
/***/ ((module) => {

"use strict";
module.exports = import("next/dist/compiled/@vercel/og/index.node.js");;

/***/ }),

/***/ 387994:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  patchFetch: () => (/* binding */ patchFetch),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  workAsyncStorage: () => (/* binding */ workAsyncStorage),
  workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)
});

// NAMESPACE OBJECT: ./app/api/v1/og/route.tsx
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  GET: () => (GET)
});

// EXTERNAL MODULE: ../../node_modules/next/dist/server/route-modules/app-route/module.compiled.js
var module_compiled = __webpack_require__(831271);
// EXTERNAL MODULE: ../../node_modules/next/dist/server/route-kind.js
var route_kind = __webpack_require__(291232);
// EXTERNAL MODULE: ../../node_modules/next/dist/server/lib/patch-fetch.js
var patch_fetch = __webpack_require__(318079);
// EXTERNAL MODULE: ../../node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-runtime.js
var react_jsx_runtime = __webpack_require__(891069);
// EXTERNAL MODULE: ../../node_modules/next/dist/server/og/image-response.js
var image_response = __webpack_require__(9380);
;// ./app/api/v1/og/route.tsx


const GET = async (req)=>{
    let name = req.nextUrl.searchParams.get("name");
    let brandColor = req.nextUrl.searchParams.get("brandColor");
    return new image_response/* ImageResponse */.f(/*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
        tw: `flex flex-col w-full h-full items-center  bg-[${brandColor}]/75 rounded-xl `,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                tw: "flex flex-col w-[80%] h-[60%] bg-white rounded-xl mt-13 absolute left-12 top-3 opacity-20",
                style: {
                    transform: "rotate(356deg)"
                }
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                tw: "flex flex-col w-[84%] h-[60%] bg-white rounded-xl mt-12 absolute top-5 left-13  border-2 opacity-60",
                style: {
                    transform: "rotate(357deg)"
                }
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                tw: "flex flex-col w-[85%] h-[67%] items-center  bg-white rounded-xl  mt-8 absolute top-[2.3rem] left-14",
                style: {
                    transform: "rotate(360deg)"
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                    tw: "flex flex-col w-full",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                            tw: "flex flex-col md:flex-row w-full md:items-center justify-between ",
                            children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                tw: "flex flex-col  px-8",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("h2", {
                                        tw: "flex flex-col text-[8] sm:text-4xl font-bold tracking-tight text-slate-900 text-left mt-15",
                                        children: name
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("span", {
                                        tw: "text-slate-600 text-xl",
                                        children: "Complete in ~ 4 minutes"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                            tw: "flex justify-end mr-10 ",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                    tw: "flex rounded-2xl absolute -right-2 mt-2",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("a", {
                                        tw: `rounded-xl border border-transparent bg-[${brandColor}] h-18 w-38 opacity-50`
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                    tw: "flex rounded-2xl shadow ",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("a", {
                                        tw: `flex items-center justify-center rounded-xl border border-transparent bg-[${brandColor}] text-2xl text-white h-18 w-38`,
                                        children: "Begin!"
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    }), {
        width: 800,
        height: 400,
        headers: {
            "Cache-Control": "public, s-maxage=600, max-age=1800, stale-while-revalidate=600, stale-if-error=600"
        }
    });
};

;// ../../node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?page=%2Fapi%2Fv1%2Fog%2Froute&name=app%2Fapi%2Fv1%2Fog%2Froute&pagePath=private-next-app-dir%2Fapi%2Fv1%2Fog%2Froute.tsx&appDir=%2FUsers%2Fkdy1%2Fprojects%2Fformbricks%2Fapps%2Fweb%2Fapp&appPaths=%2Fapi%2Fv1%2Fog%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=standalone&nextConfigExperimentalUseEarlyImport=&preferredRegion=&middlewareConfig=e30%3D!




// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = "standalone"
const routeModule = new module_compiled.AppRouteRouteModule({
    definition: {
        kind: route_kind.RouteKind.APP_ROUTE,
        page: "/api/v1/og/route",
        pathname: "/api/v1/og",
        filename: "route",
        bundlePath: "app/api/v1/og/route"
    },
    resolvedPagePath: "/Users/kdy1/projects/formbricks/apps/web/app/api/v1/og/route.tsx",
    nextConfigOutput,
    userland: route_namespaceObject
});
// Pull out the exports that we need to expose from the module. This should
// be eliminated when we've moved the other routes to the new format. These
// are used to hook into the route.
const { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;
function patchFetch() {
    return (0,patch_fetch.patchFetch)({
        workAsyncStorage,
        workUnitAsyncStorage
    });
}


//# sourceMappingURL=app-route.js.map

/***/ }),

/***/ 587032:
/***/ (() => {



/***/ }),

/***/ 580408:
/***/ (() => {



/***/ }),

/***/ 9380:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
Object.defineProperty(exports, "f", ({
    enumerable: true,
    get: function() {
        return ImageResponse;
    }
}));
function importModule() {
    return Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 183725));
}
class ImageResponse extends Response {
    static #_ = this.displayName = 'ImageResponse';
    constructor(...args){
        const readable = new ReadableStream({
            async start (controller) {
                const OGImageResponse = // So far we have to manually determine which build to use,
                // as the auto resolving is not working
                (await importModule()).ImageResponse;
                const imageResponse = new OGImageResponse(...args);
                if (!imageResponse.body) {
                    return controller.close();
                }
                const reader = imageResponse.body.getReader();
                while(true){
                    const { done, value } = await reader.read();
                    if (done) {
                        return controller.close();
                    }
                    controller.enqueue(value);
                }
            }
        });
        const options = args[1] || {};
        const headers = new Headers({
            'content-type': 'image/png',
            'cache-control':  false ? 0 : 'public, immutable, no-transform, max-age=31536000'
        });
        if (options.headers) {
            const newHeaders = new Headers(options.headers);
            newHeaders.forEach((value, key)=>headers.set(key, value));
        }
        super(readable, {
            headers,
            status: options.status,
            statusText: options.statusText
        });
    }
}

//# sourceMappingURL=image-response.js.map

/***/ }),

/***/ 891069:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

module.exports = __webpack_require__(290735).vendored["react-rsc"].ReactJsxRuntime;

//# sourceMappingURL=react-jsx-runtime.js.map

/***/ }),

/***/ 831271:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

if (false) {} else {
    if (false) {} else {
        if (false) {} else if (false) {} else {
            module.exports = __webpack_require__(744870);
        }
    }
}

//# sourceMappingURL=module.compiled.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [8079], () => (__webpack_exec__(387994)));
module.exports = __webpack_exports__;

})();