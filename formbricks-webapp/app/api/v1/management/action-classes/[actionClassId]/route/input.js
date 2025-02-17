(() => {
var exports = {};
exports.id = 2753;
exports.ids = [2753];
exports.modules = {

/***/ 896330:
/***/ ((module) => {

"use strict";
module.exports = require("@prisma/client");

/***/ }),

/***/ 560483:
/***/ ((module) => {

"use strict";
module.exports = require("@prisma/client/scripts/default-index.js");

/***/ }),

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

/***/ 455511:
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ 344708:
/***/ ((module) => {

"use strict";
module.exports = require("node:https");

/***/ }),

/***/ 966300:
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

// NAMESPACE OBJECT: ./app/api/v1/management/action-classes/[actionClassId]/route.ts
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  DELETE: () => (DELETE),
  GET: () => (GET),
  PUT: () => (PUT)
});

// EXTERNAL MODULE: ../../node_modules/next/dist/server/route-modules/app-route/module.compiled.js
var module_compiled = __webpack_require__(831271);
// EXTERNAL MODULE: ../../node_modules/next/dist/server/route-kind.js
var route_kind = __webpack_require__(291232);
// EXTERNAL MODULE: ../../node_modules/next/dist/server/lib/patch-fetch.js
var patch_fetch = __webpack_require__(318079);
// EXTERNAL MODULE: ./app/api/v1/auth.ts
var auth = __webpack_require__(408498);
// EXTERNAL MODULE: ./app/lib/api/response.ts
var response = __webpack_require__(328779);
// EXTERNAL MODULE: ./app/lib/api/validator.ts
var validator = __webpack_require__(105032);
// EXTERNAL MODULE: ../../packages/lib/actionClass/service.ts
var service = __webpack_require__(440792);
// EXTERNAL MODULE: ../../packages/types/action-classes.ts
var action_classes = __webpack_require__(441313);
;// ./app/api/v1/management/action-classes/[actionClassId]/route.ts





const fetchAndAuthorizeActionClass = async (authentication, actionClassId)=>{
    const actionClass = await (0,service/* getActionClass */.Bx)(actionClassId);
    if (!actionClass) {
        return null;
    }
    if (actionClass.environmentId !== authentication.environmentId) {
        throw new Error("Unauthorized");
    }
    return actionClass;
};
const GET = async (request, props)=>{
    const params = await props.params;
    try {
        const authentication = await (0,auth/* authenticateRequest */.b)(request);
        if (!authentication) return response/* responses */.n.notAuthenticatedResponse();
        const actionClass = await fetchAndAuthorizeActionClass(authentication, params.actionClassId);
        if (actionClass) {
            return response/* responses */.n.successResponse(actionClass);
        }
        return response/* responses */.n.notFoundResponse("Action Class", params.actionClassId);
    } catch (error) {
        return (0,auth/* handleErrorResponse */.K)(error);
    }
};
const PUT = async (request, props)=>{
    const params = await props.params;
    try {
        const authentication = await (0,auth/* authenticateRequest */.b)(request);
        if (!authentication) return response/* responses */.n.notAuthenticatedResponse();
        const actionClass = await fetchAndAuthorizeActionClass(authentication, params.actionClassId);
        if (!actionClass) {
            return response/* responses */.n.notFoundResponse("Action Class", params.actionClassId);
        }
        let actionClassUpdate;
        try {
            actionClassUpdate = await request.json();
        } catch (error) {
            console.error(`Error parsing JSON: ${error}`);
            return response/* responses */.n.badRequestResponse("Malformed JSON input, please check your request body");
        }
        const inputValidation = action_classes/* ZActionClassInput */.Lu.safeParse(actionClassUpdate);
        if (!inputValidation.success) {
            return response/* responses */.n.badRequestResponse("Fields are missing or incorrectly formatted", (0,validator/* transformErrorToDetails */.m)(inputValidation.error));
        }
        const updatedActionClass = await (0,service/* updateActionClass */.Au)(inputValidation.data.environmentId, params.actionClassId, inputValidation.data);
        if (updatedActionClass) {
            return response/* responses */.n.successResponse(updatedActionClass);
        }
        return response/* responses */.n.internalServerErrorResponse("Some error ocured while updating action");
    } catch (error) {
        return (0,auth/* handleErrorResponse */.K)(error);
    }
};
const DELETE = async (request, props)=>{
    const params = await props.params;
    try {
        const authentication = await (0,auth/* authenticateRequest */.b)(request);
        if (!authentication) return response/* responses */.n.notAuthenticatedResponse();
        const actionClass = await fetchAndAuthorizeActionClass(authentication, params.actionClassId);
        if (!actionClass) {
            return response/* responses */.n.notFoundResponse("Action Class", params.actionClassId);
        }
        if (actionClass.type === "automatic") {
            return response/* responses */.n.badRequestResponse("Automatic action classes cannot be deleted");
        }
        const deletedActionClass = await (0,service/* deleteActionClass */.kz)(params.actionClassId);
        return response/* responses */.n.successResponse(deletedActionClass);
    } catch (error) {
        return (0,auth/* handleErrorResponse */.K)(error);
    }
};

;// ../../node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?page=%2Fapi%2Fv1%2Fmanagement%2Faction-classes%2F%5BactionClassId%5D%2Froute&name=app%2Fapi%2Fv1%2Fmanagement%2Faction-classes%2F%5BactionClassId%5D%2Froute&pagePath=private-next-app-dir%2Fapi%2Fv1%2Fmanagement%2Faction-classes%2F%5BactionClassId%5D%2Froute.ts&appDir=%2FUsers%2Fkdy1%2Fprojects%2Fformbricks%2Fapps%2Fweb%2Fapp&appPaths=%2Fapi%2Fv1%2Fmanagement%2Faction-classes%2F%5BactionClassId%5D%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=standalone&nextConfigExperimentalUseEarlyImport=&preferredRegion=&middlewareConfig=e30%3D!




// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = "standalone"
const routeModule = new module_compiled.AppRouteRouteModule({
    definition: {
        kind: route_kind.RouteKind.APP_ROUTE,
        page: "/api/v1/management/action-classes/[actionClassId]/route",
        pathname: "/api/v1/management/action-classes/[actionClassId]",
        filename: "route",
        bundlePath: "app/api/v1/management/action-classes/[actionClassId]/route"
    },
    resolvedPagePath: "/Users/kdy1/projects/formbricks/apps/web/app/api/v1/management/action-classes/[actionClassId]/route.ts",
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

/***/ 1364:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "7f1b556220bf4ac08874d777519911bebe955082e4": () => (/* reexport safe */ _Users_kdy1_projects_formbricks_packages_lib_actionClass_service_ts__WEBPACK_IMPORTED_MODULE_0__.mk),
/* harmony export */   "7f20500209bc286169b827d001b4cde399601a119b": () => (/* reexport safe */ _Users_kdy1_projects_formbricks_packages_lib_actionClass_service_ts__WEBPACK_IMPORTED_MODULE_0__.kz),
/* harmony export */   "7f2b7c0937a3e9c907813c07f30dc78738fa322507": () => (/* reexport safe */ _Users_kdy1_projects_formbricks_packages_lib_actionClass_service_ts__WEBPACK_IMPORTED_MODULE_0__.Bx),
/* harmony export */   "7f354d068ff8b16e63aacacbe36490ea1ca75c56a1": () => (/* reexport safe */ _Users_kdy1_projects_formbricks_packages_lib_actionClass_service_ts__WEBPACK_IMPORTED_MODULE_0__.nq),
/* harmony export */   "7f5e260153963cc526c85d8c8317f68f81420dca53": () => (/* reexport safe */ _Users_kdy1_projects_formbricks_packages_lib_actionClass_service_ts__WEBPACK_IMPORTED_MODULE_0__.Au),
/* harmony export */   "7f6529a5cd837e55a92a4915bec2fac176ab458396": () => (/* reexport safe */ _Users_kdy1_projects_formbricks_packages_lib_actionClass_service_ts__WEBPACK_IMPORTED_MODULE_0__.hE)
/* harmony export */ });
/* harmony import */ var _Users_kdy1_projects_formbricks_packages_lib_actionClass_service_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(440792);









/***/ }),

/***/ 587032:
/***/ (() => {



/***/ }),

/***/ 580408:
/***/ (() => {



/***/ }),

/***/ 408498:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ handleErrorResponse),
/* harmony export */   b: () => (/* binding */ authenticateRequest)
/* harmony export */ });
/* harmony import */ var _app_lib_api_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(328779);
/* harmony import */ var _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(470641);
/* harmony import */ var _lib_api_key__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(993240);



const authenticateRequest = async (request)=>{
    const apiKey = request.headers.get("x-api-key");
    if (apiKey) {
        const environmentId = await (0,_lib_api_key__WEBPACK_IMPORTED_MODULE_1__/* .getEnvironmentIdFromApiKey */ .m)(apiKey);
        if (environmentId) {
            const authentication = {
                type: "apiKey",
                environmentId
            };
            return authentication;
        }
        return null;
    }
    return null;
};
const handleErrorResponse = (error)=>{
    switch(error.message){
        case "NotAuthenticated":
            return _app_lib_api_response__WEBPACK_IMPORTED_MODULE_0__/* .responses */ .n.notAuthenticatedResponse();
        case "Unauthorized":
            return _app_lib_api_response__WEBPACK_IMPORTED_MODULE_0__/* .responses */ .n.unauthorizedResponse();
        default:
            if (error instanceof _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_2__/* .DatabaseError */ .a$ || error instanceof _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_2__/* .InvalidInputError */ .oC || error instanceof _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_2__/* .ResourceNotFoundError */ .CE) {
                return _app_lib_api_response__WEBPACK_IMPORTED_MODULE_0__/* .responses */ .n.badRequestResponse(error.message);
            }
            return _app_lib_api_response__WEBPACK_IMPORTED_MODULE_0__/* .responses */ .n.internalServerErrorResponse("Some error occurred");
    }
};


/***/ }),

/***/ 993240:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ getEnvironmentIdFromApiKey)
/* harmony export */ });
/* harmony import */ var _lib_cache_api_key__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(767630);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(896330);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(922728);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _formbricks_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(527610);
/* harmony import */ var _formbricks_lib_cache__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(794356);
/* harmony import */ var _formbricks_lib_crypto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(549673);
/* harmony import */ var _formbricks_lib_utils_validate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(860988);
/* harmony import */ var _formbricks_types_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(733735);
/* harmony import */ var _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(470641);










const getEnvironmentIdFromApiKey = (0,react__WEBPACK_IMPORTED_MODULE_2__.cache)(async (apiKey)=>{
    const hashedKey = (0,_formbricks_lib_crypto__WEBPACK_IMPORTED_MODULE_4__/* .getHash */ .Zd)(apiKey);
    return (0,_formbricks_lib_cache__WEBPACK_IMPORTED_MODULE_5__/* .cache */ .P)(async ()=>{
        (0,_formbricks_lib_utils_validate__WEBPACK_IMPORTED_MODULE_6__/* .validateInputs */ .C)([
            apiKey,
            _formbricks_types_common__WEBPACK_IMPORTED_MODULE_7__/* .ZString */ .eI
        ]);
        if (!apiKey) {
            throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_8__/* .InvalidInputError */ .oC("API key cannot be null or undefined.");
        }
        try {
            const apiKeyData = await _formbricks_database__WEBPACK_IMPORTED_MODULE_3__/* .prisma */ .z.apiKey.findUnique({
                where: {
                    hashedKey
                },
                select: {
                    environmentId: true
                }
            });
            if (!apiKeyData) {
                throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_8__/* .ResourceNotFoundError */ .CE("apiKey", apiKey);
            }
            return apiKeyData.environmentId;
        } catch (error) {
            if (error instanceof _prisma_client__WEBPACK_IMPORTED_MODULE_1__.Prisma.PrismaClientKnownRequestError) {
                throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_8__/* .DatabaseError */ .a$(error.message);
            }
            throw error;
        }
    }, [
        `getEnvironmentIdFromApiKey-${apiKey}`
    ], {
        tags: [
            _lib_cache_api_key__WEBPACK_IMPORTED_MODULE_0__/* .apiKeyCache */ .m.tag.byHashedKey(hashedKey)
        ]
    })();
});


/***/ }),

/***/ 328779:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ responses)
/* harmony export */ });
const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization"
};
const goneResponse = (message, details, cors = false, cache = "private, no-store")=>{
    const headers = {
        ...cors && corsHeaders,
        "Cache-Control": cache
    };
    return Response.json({
        code: "gone",
        message,
        details: details || {}
    }, {
        status: 410,
        headers
    });
};
const badRequestResponse = (message, details, cors = false, cache = "private, no-store")=>{
    const headers = {
        ...cors && corsHeaders,
        "Cache-Control": cache
    };
    return Response.json({
        code: "bad_request",
        message,
        details: details || {}
    }, {
        status: 400,
        headers
    });
};
const methodNotAllowedResponse = (res, allowedMethods, cors = false, cache = "private, no-store")=>{
    const headers = {
        ...cors && corsHeaders,
        "Cache-Control": cache
    };
    return Response.json({
        code: "method_not_allowed",
        message: `The HTTP ${res.req?.method} method is not supported by this route.`,
        details: {
            allowed_methods: allowedMethods
        }
    }, {
        status: 405,
        headers
    });
};
const notFoundResponse = (resourceType, resourceId, cors = false, cache = "private, no-store")=>{
    const headers = {
        ...cors && corsHeaders,
        "Cache-Control": cache
    };
    return Response.json({
        code: "not_found",
        message: `${resourceType} not found`,
        details: {
            resource_id: resourceId,
            resource_type: resourceType
        }
    }, {
        status: 404,
        headers
    });
};
const notAuthenticatedResponse = (cors = false, cache = "private, no-store")=>{
    const headers = {
        ...cors && corsHeaders,
        "Cache-Control": cache
    };
    return Response.json({
        code: "not_authenticated",
        message: "Not authenticated",
        details: {
            "x-Api-Key": "Header not provided or API Key invalid"
        }
    }, {
        status: 401,
        headers
    });
};
const unauthorizedResponse = (cors = false, cache = "private, no-store")=>{
    const headers = {
        ...cors && corsHeaders,
        "Cache-Control": cache
    };
    return Response.json({
        code: "unauthorized",
        message: "You are not authorized to access this resource",
        details: {}
    }, {
        status: 401,
        headers
    });
};
const forbiddenResponse = (message, cors = false, details = {}, cache = "private, no-store")=>{
    const headers = {
        ...cors && corsHeaders,
        "Cache-Control": cache
    };
    return Response.json({
        code: "forbidden",
        message,
        details
    }, {
        status: 403,
        headers
    });
};
const successResponse = (data, cors = false, cache = "private, no-store")=>{
    const headers = {
        ...cors && corsHeaders,
        "Cache-Control": cache
    };
    return Response.json({
        data
    }, {
        status: 200,
        headers
    });
};
const internalServerErrorResponse = (message, cors = false, cache = "private, no-store")=>{
    const headers = {
        ...cors && corsHeaders,
        "Cache-Control": cache
    };
    return Response.json({
        code: "internal_server_error",
        message,
        details: {}
    }, {
        status: 500,
        headers
    });
};
const tooManyRequestsResponse = (message, cors = false, cache = "private, no-store")=>{
    const headers = {
        ...cors && corsHeaders,
        "Cache-Control": cache
    };
    return Response.json({
        code: "internal_server_error",
        message,
        details: {}
    }, {
        status: 429,
        headers
    });
};
const responses = {
    goneResponse,
    badRequestResponse,
    internalServerErrorResponse,
    methodNotAllowedResponse,
    notAuthenticatedResponse,
    unauthorizedResponse,
    notFoundResponse,
    successResponse,
    tooManyRequestsResponse,
    forbiddenResponse
};


/***/ }),

/***/ 105032:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ transformErrorToDetails)
/* harmony export */ });
const transformErrorToDetails = (error)=>{
    const details = {};
    for (const issue of error.issues){
        details[issue.path.join(".")] = issue.message;
    }
    return details;
};


/***/ }),

/***/ 767630:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ apiKeyCache)
/* harmony export */ });
/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87863);
/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_cache__WEBPACK_IMPORTED_MODULE_0__);

const apiKeyCache = {
    tag: {
        byId (id) {
            return `apiKeys-${id}`;
        },
        byEnvironmentId (environmentId) {
            return `environments-${environmentId}-apiKeys`;
        },
        byHashedKey (hashedKey) {
            return `apiKeys-${hashedKey}-apiKey`;
        }
    },
    revalidate ({ id, environmentId, hashedKey }) {
        if (id) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(this.tag.byId(id));
        }
        if (environmentId) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(this.tag.byEnvironmentId(environmentId));
        }
        if (hashedKey) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(this.tag.byHashedKey(hashedKey));
        }
    }
};


/***/ }),

/***/ 7262:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
var __webpack_unused_export__;
// This function ensures that all the exported values are valid server actions,
// during the runtime. By definition all actions are required to be async
// functions, but here we can only check that they are functions.

__webpack_unused_export__ = ({
    value: true
});
Object.defineProperty(exports, "D", ({
    enumerable: true,
    get: function() {
        return ensureServerEntryExports;
    }
}));
function ensureServerEntryExports(actions) {
    for(let i = 0; i < actions.length; i++){
        const action = actions[i];
        if (typeof action !== 'function') {
            throw new Error(`A "use server" file can only export async functions, found ${typeof action}.\nRead more: https://nextjs.org/docs/messages/invalid-use-server-value`);
        }
    }
} //# sourceMappingURL=action-validate.js.map


/***/ }),

/***/ 910330:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;
/* eslint-disable import/no-extraneous-dependencies */ 
__webpack_unused_export__ = ({
    value: true
});
Object.defineProperty(exports, "A", ({
    enumerable: true,
    get: function() {
        return _serveredge.registerServerReference;
    }
}));
const _serveredge = __webpack_require__(672771);

//# sourceMappingURL=server-reference.js.map

/***/ }),

/***/ 438658:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    arrayBufferToString: function() {
        return arrayBufferToString;
    },
    decrypt: function() {
        return decrypt;
    },
    encrypt: function() {
        return encrypt;
    },
    getActionEncryptionKey: function() {
        return getActionEncryptionKey;
    },
    getClientReferenceManifestForRsc: function() {
        return getClientReferenceManifestForRsc;
    },
    getServerModuleMap: function() {
        return getServerModuleMap;
    },
    setReferenceManifestsSingleton: function() {
        return setReferenceManifestsSingleton;
    },
    stringToUint8Array: function() {
        return stringToUint8Array;
    }
});
const _invarianterror = __webpack_require__(260233);
const _apppaths = __webpack_require__(789322);
const _workasyncstorageexternal = __webpack_require__(529294);
let __next_loaded_action_key;
function arrayBufferToString(buffer) {
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    // @anonrig: V8 has a limit of 65535 arguments in a function.
    // For len < 65535, this is faster.
    // https://github.com/vercel/next.js/pull/56377#pullrequestreview-1656181623
    if (len < 65535) {
        return String.fromCharCode.apply(null, bytes);
    }
    let binary = '';
    for(let i = 0; i < len; i++){
        binary += String.fromCharCode(bytes[i]);
    }
    return binary;
}
function stringToUint8Array(binary) {
    const len = binary.length;
    const arr = new Uint8Array(len);
    for(let i = 0; i < len; i++){
        arr[i] = binary.charCodeAt(i);
    }
    return arr;
}
function encrypt(key, iv, data) {
    return crypto.subtle.encrypt({
        name: 'AES-GCM',
        iv
    }, key, data);
}
function decrypt(key, iv, data) {
    return crypto.subtle.decrypt({
        name: 'AES-GCM',
        iv
    }, key, data);
}
// This is a global singleton that is used to encode/decode the action bound args from
// the closure. This can't be using a AsyncLocalStorage as it might happen on the module
// level. Since the client reference manifest won't be mutated, let's use a global singleton
// to keep it.
const SERVER_ACTION_MANIFESTS_SINGLETON = Symbol.for('next.server.action-manifests');
function setReferenceManifestsSingleton({ page, clientReferenceManifest, serverActionsManifest, serverModuleMap }) {
    var _globalThis_SERVER_ACTION_MANIFESTS_SINGLETON;
    // @ts-expect-error
    const clientReferenceManifestsPerPage = (_globalThis_SERVER_ACTION_MANIFESTS_SINGLETON = globalThis[SERVER_ACTION_MANIFESTS_SINGLETON]) == null ? void 0 : _globalThis_SERVER_ACTION_MANIFESTS_SINGLETON.clientReferenceManifestsPerPage;
    // @ts-expect-error
    globalThis[SERVER_ACTION_MANIFESTS_SINGLETON] = {
        clientReferenceManifestsPerPage: {
            ...clientReferenceManifestsPerPage,
            [(0, _apppaths.normalizeAppPath)(page)]: clientReferenceManifest
        },
        serverActionsManifest,
        serverModuleMap
    };
}
function getServerModuleMap() {
    const serverActionsManifestSingleton = globalThis[SERVER_ACTION_MANIFESTS_SINGLETON];
    if (!serverActionsManifestSingleton) {
        throw new _invarianterror.InvariantError('Missing manifest for Server Actions.');
    }
    return serverActionsManifestSingleton.serverModuleMap;
}
function getClientReferenceManifestForRsc() {
    const serverActionsManifestSingleton = globalThis[SERVER_ACTION_MANIFESTS_SINGLETON];
    if (!serverActionsManifestSingleton) {
        throw new _invarianterror.InvariantError('Missing manifest for Server Actions.');
    }
    const { clientReferenceManifestsPerPage } = serverActionsManifestSingleton;
    const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    if (!workStore) {
        // If there's no work store defined, we can assume that a client reference
        // manifest is needed during module evaluation, e.g. to create a server
        // action using a higher-order function. This might also use client
        // components which need to be serialized by Flight, and therefore client
        // references need to be resolvable. To make this work, we're returning a
        // merged manifest across all pages. This is fine as long as the module IDs
        // are not page specific, which they are not for Webpack. TODO: Fix this in
        // Turbopack.
        return mergeClientReferenceManifests(clientReferenceManifestsPerPage);
    }
    const clientReferenceManifest = clientReferenceManifestsPerPage[workStore.route];
    if (!clientReferenceManifest) {
        throw new _invarianterror.InvariantError(`Missing Client Reference Manifest for ${workStore.route}.`);
    }
    return clientReferenceManifest;
}
async function getActionEncryptionKey() {
    if (__next_loaded_action_key) {
        return __next_loaded_action_key;
    }
    const serverActionsManifestSingleton = globalThis[SERVER_ACTION_MANIFESTS_SINGLETON];
    if (!serverActionsManifestSingleton) {
        throw new _invarianterror.InvariantError('Missing manifest for Server Actions.');
    }
    const rawKey = process.env.NEXT_SERVER_ACTIONS_ENCRYPTION_KEY || serverActionsManifestSingleton.serverActionsManifest.encryptionKey;
    if (rawKey === undefined) {
        throw new _invarianterror.InvariantError('Missing encryption key for Server Actions');
    }
    __next_loaded_action_key = await crypto.subtle.importKey('raw', stringToUint8Array(atob(rawKey)), 'AES-GCM', true, [
        'encrypt',
        'decrypt'
    ]);
    return __next_loaded_action_key;
}
function mergeClientReferenceManifests(clientReferenceManifestsPerPage) {
    const clientReferenceManifests = Object.values(clientReferenceManifestsPerPage);
    const mergedClientReferenceManifest = {
        clientModules: {},
        edgeRscModuleMapping: {},
        rscModuleMapping: {}
    };
    for (const clientReferenceManifest of clientReferenceManifests){
        mergedClientReferenceManifest.clientModules = {
            ...mergedClientReferenceManifest.clientModules,
            ...clientReferenceManifest.clientModules
        };
        mergedClientReferenceManifest.edgeRscModuleMapping = {
            ...mergedClientReferenceManifest.edgeRscModuleMapping,
            ...clientReferenceManifest.edgeRscModuleMapping
        };
        mergedClientReferenceManifest.rscModuleMapping = {
            ...mergedClientReferenceManifest.rscModuleMapping,
            ...clientReferenceManifest.rscModuleMapping
        };
    }
    return mergedClientReferenceManifest;
} //# sourceMappingURL=encryption-utils.js.map


/***/ }),

/***/ 208706:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* eslint-disable import/no-extraneous-dependencies */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    decryptActionBoundArgs: function() {
        return decryptActionBoundArgs;
    },
    encryptActionBoundArgs: function() {
        return encryptActionBoundArgs;
    }
});
__webpack_require__(47598);
const _serveredge = __webpack_require__(672771);
const _clientedge = __webpack_require__(979625);
const _nodewebstreamshelper = __webpack_require__(886023);
const _encryptionutils = __webpack_require__(438658);
const _workunitasyncstorageexternal = __webpack_require__(663033);
const isEdgeRuntime = "nodejs" === 'edge';
const textEncoder = new TextEncoder();
const textDecoder = new TextDecoder();
async function decodeActionBoundArg(actionId, arg) {
    const key = await (0, _encryptionutils.getActionEncryptionKey)();
    if (typeof key === 'undefined') {
        throw new Error(`Missing encryption key for Server Action. This is a bug in Next.js`);
    }
    // Get the iv (16 bytes) and the payload from the arg.
    const originalPayload = atob(arg);
    const ivValue = originalPayload.slice(0, 16);
    const payload = originalPayload.slice(16);
    const decrypted = textDecoder.decode(await (0, _encryptionutils.decrypt)(key, (0, _encryptionutils.stringToUint8Array)(ivValue), (0, _encryptionutils.stringToUint8Array)(payload)));
    if (!decrypted.startsWith(actionId)) {
        throw new Error('Invalid Server Action payload: failed to decrypt.');
    }
    return decrypted.slice(actionId.length);
}
/**
 * Encrypt the serialized string with the action id as the salt. Add a prefix to
 * later ensure that the payload is correctly decrypted, similar to a checksum.
 */ async function encodeActionBoundArg(actionId, arg) {
    const key = await (0, _encryptionutils.getActionEncryptionKey)();
    if (key === undefined) {
        throw new Error(`Missing encryption key for Server Action. This is a bug in Next.js`);
    }
    // Get 16 random bytes as iv.
    const randomBytes = new Uint8Array(16);
    _workunitasyncstorageexternal.workUnitAsyncStorage.exit(()=>crypto.getRandomValues(randomBytes));
    const ivValue = (0, _encryptionutils.arrayBufferToString)(randomBytes.buffer);
    const encrypted = await (0, _encryptionutils.encrypt)(key, randomBytes, textEncoder.encode(actionId + arg));
    return btoa(ivValue + (0, _encryptionutils.arrayBufferToString)(encrypted));
}
async function encryptActionBoundArgs(actionId, args) {
    const { clientModules } = (0, _encryptionutils.getClientReferenceManifestForRsc)();
    // Create an error before any asynchrounous calls, to capture the original
    // call stack in case we need it when the serialization errors.
    const error = new Error();
    Error.captureStackTrace(error, encryptActionBoundArgs);
    let didCatchError = false;
    // Using Flight to serialize the args into a string.
    const serialized = await (0, _nodewebstreamshelper.streamToString)((0, _serveredge.renderToReadableStream)(args, clientModules, {
        onError (err) {
            // We're only reporting one error at a time, starting with the first.
            if (didCatchError) {
                return;
            }
            didCatchError = true;
            // Use the original error message together with the previously created
            // stack, because err.stack is a useless Flight Server call stack.
            error.message = err instanceof Error ? err.message : String(err);
        }
    }));
    if (didCatchError) {
        if (false) {}
        throw error;
    }
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (!workUnitStore) {
        return encodeActionBoundArg(actionId, serialized);
    }
    const prerenderResumeDataCache = (0, _workunitasyncstorageexternal.getPrerenderResumeDataCache)(workUnitStore);
    const renderResumeDataCache = (0, _workunitasyncstorageexternal.getRenderResumeDataCache)(workUnitStore);
    const cacheKey = actionId + serialized;
    const cachedEncrypted = (prerenderResumeDataCache == null ? void 0 : prerenderResumeDataCache.encryptedBoundArgs.get(cacheKey)) ?? (renderResumeDataCache == null ? void 0 : renderResumeDataCache.encryptedBoundArgs.get(cacheKey));
    if (cachedEncrypted) {
        return cachedEncrypted;
    }
    const cacheSignal = workUnitStore.type === 'prerender' ? workUnitStore.cacheSignal : undefined;
    cacheSignal == null ? void 0 : cacheSignal.beginRead();
    const encrypted = await encodeActionBoundArg(actionId, serialized);
    cacheSignal == null ? void 0 : cacheSignal.endRead();
    prerenderResumeDataCache == null ? void 0 : prerenderResumeDataCache.encryptedBoundArgs.set(cacheKey, encrypted);
    return encrypted;
}
async function decryptActionBoundArgs(actionId, encrypted) {
    const { edgeRscModuleMapping, rscModuleMapping } = (0, _encryptionutils.getClientReferenceManifestForRsc)();
    // Decrypt the serialized string with the action id as the salt.
    const decrypted = await decodeActionBoundArg(actionId, await encrypted);
    // Using Flight to deserialize the args from the string.
    const deserialized = await (0, _clientedge.createFromReadableStream)(new ReadableStream({
        start (controller) {
            controller.enqueue(textEncoder.encode(decrypted));
            controller.close();
        }
    }), {
        serverConsumerManifest: {
            // moduleLoading must be null because we don't want to trigger preloads of ClientReferences
            // to be added to the current execution. Instead, we'll wait for any ClientReference
            // to be emitted which themselves will handle the preloading.
            moduleLoading: null,
            moduleMap: isEdgeRuntime ? edgeRscModuleMapping : rscModuleMapping,
            serverModuleMap: (0, _encryptionutils.getServerModuleMap)()
        }
    });
    return deserialized;
}

//# sourceMappingURL=encryption.js.map

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

/***/ }),

/***/ 527610:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  z: () => (/* reexport */ prisma)
});

// EXTERNAL MODULE: external "@prisma/client"
var client_ = __webpack_require__(896330);
// EXTERNAL MODULE: ../../node_modules/@prisma/extension-accelerate/dist/esm/entry.node.js + 4 modules
var entry_node = __webpack_require__(105775);
;// ../../packages/database/src/client.ts


const prismaClientSingleton = ()=>{
    return new client_.PrismaClient({
        datasources: {
            db: {
                url: process.env.DATABASE_URL
            }
        },
        ...process.env.DEBUG === "1" && {
            log: [
                "query",
                "info"
            ]
        }
    }).$extends((0,entry_node/* withAccelerate */.W)());
};
const globalForPrisma = globalThis;
const prisma = globalForPrisma.prisma ?? prismaClientSingleton();
if (false) {}

;// ../../packages/database/src/index.ts




/***/ }),

/***/ 204769:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ actionClassCache)
/* harmony export */ });
/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87863);
/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_cache__WEBPACK_IMPORTED_MODULE_0__);

const actionClassCache = {
    tag: {
        byNameAndEnvironmentId (name, environmentId) {
            return `environments-${environmentId}-actionClass-${name}`;
        },
        byEnvironmentId (environmentId) {
            return `environments-${environmentId}-actionClasses`;
        },
        byId (id) {
            return `actionClasses-${id}`;
        }
    },
    revalidate ({ environmentId, name, id }) {
        if (environmentId) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(this.tag.byEnvironmentId(environmentId));
        }
        if (id) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(this.tag.byId(id));
        }
        if (name && environmentId) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(this.tag.byNameAndEnvironmentId(name, environmentId));
        }
    }
};


/***/ }),

/***/ 440792:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Au: () => (/* binding */ updateActionClass),
/* harmony export */   Bx: () => (/* binding */ getActionClass),
/* harmony export */   hE: () => (/* binding */ createActionClass),
/* harmony export */   kz: () => (/* binding */ deleteActionClass),
/* harmony export */   mk: () => (/* binding */ getActionClassByEnvironmentIdAndName),
/* harmony export */   nq: () => (/* binding */ getActionClasses)
/* harmony export */ });
/* harmony import */ var private_next_rsc_server_reference__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(910330);
/* harmony import */ var private_next_rsc_action_encryption__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(208706);
/* harmony import */ var private_next_rsc_action_encryption__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(private_next_rsc_action_encryption__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(896330);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(922728);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _formbricks_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(527610);
/* harmony import */ var _formbricks_types_action_classes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(441313);
/* harmony import */ var _formbricks_types_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(733735);
/* harmony import */ var _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(470641);
/* harmony import */ var _cache__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(794356);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(836919);
/* harmony import */ var _survey_cache__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(249479);
/* harmony import */ var _utils_validate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(860988);
/* harmony import */ var _cache__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(204769);
/* harmony import */ var private_next_rsc_action_validate__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7262);
/* __next_internal_action_entry_do_not_use__ {"7f1b556220bf4ac08874d777519911bebe955082e4":"getActionClassByEnvironmentIdAndName","7f20500209bc286169b827d001b4cde399601a119b":"deleteActionClass","7f2b7c0937a3e9c907813c07f30dc78738fa322507":"getActionClass","7f354d068ff8b16e63aacacbe36490ea1ca75c56a1":"getActionClasses","7f5e260153963cc526c85d8c8317f68f81420dca53":"updateActionClass","7f6529a5cd837e55a92a4915bec2fac176ab458396":"createActionClass"} */ 














const selectActionClass = {
    id: true,
    createdAt: true,
    updatedAt: true,
    name: true,
    description: true,
    type: true,
    key: true,
    noCodeConfig: true,
    environmentId: true
};
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getActionClasses = (0,react__WEBPACK_IMPORTED_MODULE_3__.cache)(async (environmentId, page)=>(0,_cache__WEBPACK_IMPORTED_MODULE_5__/* .cache */ .P)(async ()=>{
        (0,_utils_validate__WEBPACK_IMPORTED_MODULE_6__/* .validateInputs */ .C)([
            environmentId,
            _formbricks_types_common__WEBPACK_IMPORTED_MODULE_7__/* .ZId */ .i4
        ], [
            page,
            _formbricks_types_common__WEBPACK_IMPORTED_MODULE_7__/* .ZOptionalNumber */ .Wo
        ]);
        try {
            return await _formbricks_database__WEBPACK_IMPORTED_MODULE_4__/* .prisma */ .z.actionClass.findMany({
                where: {
                    environmentId: environmentId
                },
                select: selectActionClass,
                take: page ? _constants__WEBPACK_IMPORTED_MODULE_8__/* .ITEMS_PER_PAGE */ .re : undefined,
                skip: page ? _constants__WEBPACK_IMPORTED_MODULE_8__/* .ITEMS_PER_PAGE */ .re * (page - 1) : undefined,
                orderBy: {
                    createdAt: "asc"
                }
            });
        } catch (error) {
            throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_9__/* .DatabaseError */ .a$(`Database error when fetching actions for environment ${environmentId}`);
        }
    }, [
        `getActionClasses-${environmentId}-${page}`
    ], {
        tags: [
            _cache__WEBPACK_IMPORTED_MODULE_10__/* .actionClassCache */ .j.tag.byEnvironmentId(environmentId)
        ]
    })());
// This function is used to get an action by its name and environmentId(it can return private actions as well)
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getActionClassByEnvironmentIdAndName = (0,react__WEBPACK_IMPORTED_MODULE_3__.cache)(async (environmentId, name)=>(0,_cache__WEBPACK_IMPORTED_MODULE_5__/* .cache */ .P)(async ()=>{
        (0,_utils_validate__WEBPACK_IMPORTED_MODULE_6__/* .validateInputs */ .C)([
            environmentId,
            _formbricks_types_common__WEBPACK_IMPORTED_MODULE_7__/* .ZId */ .i4
        ], [
            name,
            _formbricks_types_common__WEBPACK_IMPORTED_MODULE_7__/* .ZString */ .eI
        ]);
        try {
            const actionClass = await _formbricks_database__WEBPACK_IMPORTED_MODULE_4__/* .prisma */ .z.actionClass.findFirst({
                where: {
                    name,
                    environmentId
                },
                select: selectActionClass
            });
            return actionClass;
        } catch (error) {
            throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_9__/* .DatabaseError */ .a$(`Database error when fetching action`);
        }
    }, [
        `getActionClassByEnvironmentIdAndName-${environmentId}-${name}`
    ], {
        tags: [
            _cache__WEBPACK_IMPORTED_MODULE_10__/* .actionClassCache */ .j.tag.byNameAndEnvironmentId(name, environmentId)
        ]
    })());
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getActionClass = (0,react__WEBPACK_IMPORTED_MODULE_3__.cache)(async (actionClassId)=>(0,_cache__WEBPACK_IMPORTED_MODULE_5__/* .cache */ .P)(async ()=>{
        (0,_utils_validate__WEBPACK_IMPORTED_MODULE_6__/* .validateInputs */ .C)([
            actionClassId,
            _formbricks_types_common__WEBPACK_IMPORTED_MODULE_7__/* .ZId */ .i4
        ]);
        try {
            const actionClass = await _formbricks_database__WEBPACK_IMPORTED_MODULE_4__/* .prisma */ .z.actionClass.findUnique({
                where: {
                    id: actionClassId
                },
                select: selectActionClass
            });
            return actionClass;
        } catch (error) {
            throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_9__/* .DatabaseError */ .a$(`Database error when fetching action`);
        }
    }, [
        `getActionClass-${actionClassId}`
    ], {
        tags: [
            _cache__WEBPACK_IMPORTED_MODULE_10__/* .actionClassCache */ .j.tag.byId(actionClassId)
        ]
    })());
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ deleteActionClass = async (actionClassId)=>{
    (0,_utils_validate__WEBPACK_IMPORTED_MODULE_6__/* .validateInputs */ .C)([
        actionClassId,
        _formbricks_types_common__WEBPACK_IMPORTED_MODULE_7__/* .ZId */ .i4
    ]);
    try {
        const actionClass = await _formbricks_database__WEBPACK_IMPORTED_MODULE_4__/* .prisma */ .z.actionClass.delete({
            where: {
                id: actionClassId
            },
            select: selectActionClass
        });
        if (actionClass === null) throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_9__/* .ResourceNotFoundError */ .CE("Action", actionClassId);
        _cache__WEBPACK_IMPORTED_MODULE_10__/* .actionClassCache */ .j.revalidate({
            environmentId: actionClass.environmentId,
            id: actionClassId,
            name: actionClass.name
        });
        return actionClass;
    } catch (error) {
        if (error instanceof _prisma_client__WEBPACK_IMPORTED_MODULE_2__.Prisma.PrismaClientKnownRequestError) {
            throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_9__/* .DatabaseError */ .a$(error.message);
        }
        throw error;
    }
};
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ createActionClass = async (environmentId, actionClass)=>{
    (0,_utils_validate__WEBPACK_IMPORTED_MODULE_6__/* .validateInputs */ .C)([
        environmentId,
        _formbricks_types_common__WEBPACK_IMPORTED_MODULE_7__/* .ZId */ .i4
    ], [
        actionClass,
        _formbricks_types_action_classes__WEBPACK_IMPORTED_MODULE_11__/* .ZActionClassInput */ .Lu
    ]);
    const { environmentId: _, ...actionClassInput } = actionClass;
    try {
        const actionClassPrisma = await _formbricks_database__WEBPACK_IMPORTED_MODULE_4__/* .prisma */ .z.actionClass.create({
            data: {
                ...actionClassInput,
                environment: {
                    connect: {
                        id: environmentId
                    }
                },
                key: actionClassInput.type === "code" ? actionClassInput.key : undefined,
                noCodeConfig: actionClassInput.type === "noCode" ? actionClassInput.noCodeConfig || {} : undefined
            },
            select: selectActionClass
        });
        _cache__WEBPACK_IMPORTED_MODULE_10__/* .actionClassCache */ .j.revalidate({
            name: actionClassPrisma.name,
            environmentId: actionClassPrisma.environmentId,
            id: actionClassPrisma.id
        });
        return actionClassPrisma;
    } catch (error) {
        if (error instanceof _prisma_client__WEBPACK_IMPORTED_MODULE_2__.Prisma.PrismaClientKnownRequestError && error.code === "P2002") {
            throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_9__/* .DatabaseError */ .a$(`Action with ${error.meta?.target?.[0]} ${actionClass[error.meta?.target?.[0]]} already exists`);
        }
        throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_9__/* .DatabaseError */ .a$(`Database error when creating an action for environment ${environmentId}`);
    }
};
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ updateActionClass = async (environmentId, actionClassId, inputActionClass)=>{
    (0,_utils_validate__WEBPACK_IMPORTED_MODULE_6__/* .validateInputs */ .C)([
        environmentId,
        _formbricks_types_common__WEBPACK_IMPORTED_MODULE_7__/* .ZId */ .i4
    ], [
        actionClassId,
        _formbricks_types_common__WEBPACK_IMPORTED_MODULE_7__/* .ZId */ .i4
    ], [
        inputActionClass,
        _formbricks_types_action_classes__WEBPACK_IMPORTED_MODULE_11__/* .ZActionClassInput */ .Lu
    ]);
    const { environmentId: _, ...actionClassInput } = inputActionClass;
    try {
        const result = await _formbricks_database__WEBPACK_IMPORTED_MODULE_4__/* .prisma */ .z.actionClass.update({
            where: {
                id: actionClassId
            },
            data: {
                ...actionClassInput,
                environment: {
                    connect: {
                        id: environmentId
                    }
                },
                key: actionClassInput.type === "code" ? actionClassInput.key : undefined,
                noCodeConfig: actionClassInput.type === "noCode" ? actionClassInput.noCodeConfig || {} : undefined
            },
            select: {
                ...selectActionClass,
                surveyTriggers: {
                    select: {
                        surveyId: true
                    }
                }
            }
        });
        // revalidate cache
        _cache__WEBPACK_IMPORTED_MODULE_10__/* .actionClassCache */ .j.revalidate({
            environmentId: result.environmentId,
            name: result.name,
            id: result.id
        });
        // @ts-expect-error
        const surveyIds = result.surveyTriggers.map((survey)=>survey.surveyId);
        for (const surveyId of surveyIds){
            _survey_cache__WEBPACK_IMPORTED_MODULE_12__/* .surveyCache */ .$.revalidate({
                id: surveyId
            });
        }
        return result;
    } catch (error) {
        if (error instanceof _prisma_client__WEBPACK_IMPORTED_MODULE_2__.Prisma.PrismaClientKnownRequestError && error.code === "P2002") {
            throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_9__/* .DatabaseError */ .a$(`Action with ${error.meta?.target?.[0]} ${inputActionClass[error.meta?.target?.[0]]} already exists`);
        }
        if (error instanceof _prisma_client__WEBPACK_IMPORTED_MODULE_2__.Prisma.PrismaClientKnownRequestError) {
            throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_9__/* .DatabaseError */ .a$(error.message);
        }
        throw error;
    }
};

(0,private_next_rsc_action_validate__WEBPACK_IMPORTED_MODULE_13__/* .ensureServerEntryExports */ .D)([
    getActionClasses,
    getActionClassByEnvironmentIdAndName,
    getActionClass,
    deleteActionClass,
    createActionClass,
    updateActionClass
]);
(0,private_next_rsc_server_reference__WEBPACK_IMPORTED_MODULE_0__/* .registerServerReference */ .A)(getActionClasses, "7f354d068ff8b16e63aacacbe36490ea1ca75c56a1", null);
(0,private_next_rsc_server_reference__WEBPACK_IMPORTED_MODULE_0__/* .registerServerReference */ .A)(getActionClassByEnvironmentIdAndName, "7f1b556220bf4ac08874d777519911bebe955082e4", null);
(0,private_next_rsc_server_reference__WEBPACK_IMPORTED_MODULE_0__/* .registerServerReference */ .A)(getActionClass, "7f2b7c0937a3e9c907813c07f30dc78738fa322507", null);
(0,private_next_rsc_server_reference__WEBPACK_IMPORTED_MODULE_0__/* .registerServerReference */ .A)(deleteActionClass, "7f20500209bc286169b827d001b4cde399601a119b", null);
(0,private_next_rsc_server_reference__WEBPACK_IMPORTED_MODULE_0__/* .registerServerReference */ .A)(createActionClass, "7f6529a5cd837e55a92a4915bec2fac176ab458396", null);
(0,private_next_rsc_server_reference__WEBPACK_IMPORTED_MODULE_0__/* .registerServerReference */ .A)(updateActionClass, "7f5e260153963cc526c85d8c8317f68f81420dca53", null);


/***/ }),

/***/ 794356:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ cache)
/* harmony export */ });
/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87863);
/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_cache__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var superjson__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(535069);
// cache wrapper for unstable_cache
// workaround for https://github.com/vercel/next.js/issues/51613
// copied from https://github.com/vercel/next.js/issues/51613#issuecomment-1892644565



const cache = (fn, keys, opts)=>{
    const wrap = async (params)=>{
        const result = await fn(...params);
        return (0,superjson__WEBPACK_IMPORTED_MODULE_1__/* .stringify */ .As)(result);
    };
    const cachedFn = (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.unstable_cache)(wrap, keys, opts);
    return async (...params)=>{
        const result = await cachedFn(params);
        return (0,superjson__WEBPACK_IMPORTED_MODULE_1__/* .parse */ .qg)(result);
    };
};


/***/ }),

/***/ 836919:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $Y: () => (/* binding */ isS3Configured),
/* harmony export */   Bk: () => (/* binding */ SMTP_USER),
/* harmony export */   Bx: () => (/* binding */ NOTION_RICH_TEXT_LIMIT),
/* harmony export */   CT: () => (/* binding */ OIDC_SIGNING_ALGORITHM),
/* harmony export */   DR: () => (/* binding */ GOOGLE_SHEETS_CLIENT_ID),
/* harmony export */   E5: () => (/* binding */ GOOGLE_CLIENT_ID),
/* harmony export */   E7: () => (/* binding */ GITHUB_OAUTH_ENABLED),
/* harmony export */   Ik: () => (/* binding */ S3_ACCESS_KEY),
/* harmony export */   JB: () => (/* binding */ AIRTABLE_CLIENT_ID),
/* harmony export */   K8: () => (/* binding */ SLACK_CLIENT_SECRET),
/* harmony export */   Kd: () => (/* binding */ CRON_SECRET),
/* harmony export */   LO: () => (/* binding */ MAX_ATTRIBUTE_CLASSES_PER_ENVIRONMENT),
/* harmony export */   MF: () => (/* binding */ SURVEY_BG_COLORS),
/* harmony export */   MT: () => (/* binding */ S3_BUCKET_NAME),
/* harmony export */   Mo: () => (/* binding */ OIDC_ISSUER),
/* harmony export */   OC: () => (/* binding */ UNSPLASH_ACCESS_KEY),
/* harmony export */   Oi: () => (/* binding */ DEBUG),
/* harmony export */   Oz: () => (/* binding */ IS_INTERCOM_CONFIGURED),
/* harmony export */   Pd: () => (/* binding */ SMTP_SECURE_ENABLED),
/* harmony export */   Pr: () => (/* binding */ NOTION_AUTH_URL),
/* harmony export */   Q$: () => (/* binding */ EMAIL_VERIFICATION_DISABLED),
/* harmony export */   Qc: () => (/* binding */ AZURE_OAUTH_ENABLED),
/* harmony export */   Qf: () => (/* binding */ STRIPE_API_VERSION),
/* harmony export */   RN: () => (/* binding */ SMTP_PASSWORD),
/* harmony export */   RP: () => (/* binding */ AZUREAD_CLIENT_ID),
/* harmony export */   RR: () => (/* binding */ FORMBRICKS_ENCRYPTION_KEY),
/* harmony export */   SC: () => (/* binding */ AVAILABLE_LOCALES),
/* harmony export */   SO: () => (/* binding */ SMTP_HOST),
/* harmony export */   SP: () => (/* binding */ GOOGLE_SHEETS_REDIRECT_URL),
/* harmony export */   Si: () => (/* binding */ IS_FORMBRICKS_CLOUD),
/* harmony export */   T$: () => (/* binding */ IMPRINT_ADDRESS),
/* harmony export */   T1: () => (/* binding */ IS_AI_CONFIGURED),
/* harmony export */   T4: () => (/* binding */ MAIL_FROM),
/* harmony export */   Ui: () => (/* binding */ STRIPE_PRICE_LOOKUP_KEYS),
/* harmony export */   V9: () => (/* binding */ SIGNUP_ENABLED),
/* harmony export */   VC: () => (/* binding */ DOCUMENTS_PER_PAGE),
/* harmony export */   Wg: () => (/* binding */ S3_SECRET_KEY),
/* harmony export */   Xc: () => (/* binding */ S3_ENDPOINT_URL),
/* harmony export */   Xn: () => (/* binding */ DEFAULT_LOCALE),
/* harmony export */   Xu: () => (/* binding */ SLACK_MESSAGE_LIMIT),
/* harmony export */   YW: () => (/* binding */ WEBAPP_URL),
/* harmony export */   Yj: () => (/* binding */ S3_REGION),
/* harmony export */   _N: () => (/* binding */ GOOGLE_SHEET_MESSAGE_LIMIT),
/* harmony export */   aS: () => (/* binding */ BREVO_LIST_ID),
/* harmony export */   ac: () => (/* binding */ DEFAULT_ORGANIZATION_ID),
/* harmony export */   an: () => (/* binding */ ENTERPRISE_LICENSE_KEY),
/* harmony export */   br: () => (/* binding */ INVITE_DISABLED),
/* harmony export */   d1: () => (/* binding */ RESPONSES_PER_PAGE),
/* harmony export */   dq: () => (/* binding */ AIRTABLE_MESSAGE_LIMIT),
/* harmony export */   fT: () => (/* binding */ BILLING_LIMITS),
/* harmony export */   gB: () => (/* binding */ MAX_SIZES),
/* harmony export */   gK: () => (/* binding */ GITHUB_ID),
/* harmony export */   gQ: () => (/* binding */ NOTION_OAUTH_CLIENT_ID),
/* harmony export */   gu: () => (/* binding */ TERMS_URL),
/* harmony export */   h3: () => (/* binding */ NOTION_OAUTH_CLIENT_SECRET),
/* harmony export */   hP: () => (/* binding */ GITHUB_SECRET),
/* harmony export */   i4: () => (/* binding */ MAX_RESPONSES_FOR_INSIGHT_GENERATION),
/* harmony export */   iO: () => (/* binding */ IMPRINT_URL),
/* harmony export */   iw: () => (/* binding */ DEFAULT_BRAND_COLOR),
/* harmony export */   jH: () => (/* binding */ SLACK_CLIENT_ID),
/* harmony export */   jP: () => (/* binding */ OIDC_DISPLAY_NAME),
/* harmony export */   kK: () => (/* binding */ OIDC_CLIENT_ID),
/* harmony export */   kO: () => (/* binding */ AZUREAD_TENANT_ID),
/* harmony export */   mn: () => (/* binding */ AZUREAD_CLIENT_SECRET),
/* harmony export */   mu: () => (/* binding */ PROJECT_FEATURE_KEYS),
/* harmony export */   n$: () => (/* binding */ GOOGLE_CLIENT_SECRET),
/* harmony export */   n1: () => (/* binding */ SMTP_AUTHENTICATED),
/* harmony export */   o7: () => (/* binding */ ENCRYPTION_KEY),
/* harmony export */   oA: () => (/* binding */ E2E_TESTING),
/* harmony export */   oz: () => (/* binding */ BREVO_API_KEY),
/* harmony export */   pk: () => (/* binding */ PRIVACY_URL),
/* harmony export */   r4: () => (/* binding */ OIDC_CLIENT_SECRET),
/* harmony export */   rC: () => (/* binding */ IS_TURNSTILE_CONFIGURED),
/* harmony export */   rU: () => (/* binding */ INTERCOM_SECRET_KEY),
/* harmony export */   re: () => (/* binding */ ITEMS_PER_PAGE),
/* harmony export */   sh: () => (/* binding */ GOOGLE_OAUTH_ENABLED),
/* harmony export */   ss: () => (/* binding */ SMTP_REJECT_UNAUTHORIZED_TLS),
/* harmony export */   st: () => (/* binding */ SLACK_AUTH_URL),
/* harmony export */   tE: () => (/* binding */ DEFAULT_ORGANIZATION_ROLE),
/* harmony export */   tU: () => (/* binding */ PASSWORD_RESET_DISABLED),
/* harmony export */   uQ: () => (/* binding */ EMAIL_AUTH_ENABLED),
/* harmony export */   vh: () => (/* binding */ S3_FORCE_PATH_STYLE),
/* harmony export */   wG: () => (/* binding */ OIDC_OAUTH_ENABLED),
/* harmony export */   wI: () => (/* binding */ SURVEYS_PER_PAGE),
/* harmony export */   xG: () => (/* binding */ UPLOADS_DIR),
/* harmony export */   yW: () => (/* binding */ NOTION_REDIRECT_URI),
/* harmony export */   yg: () => (/* binding */ GOOGLE_SHEETS_CLIENT_SECRET),
/* harmony export */   z5: () => (/* binding */ SMTP_PORT)
/* harmony export */ });
/* unused harmony exports SHORT_URL_BASE, NEXTAUTH_SECRET, TEXT_RESPONSES_PER_PAGE, INSIGHTS_PER_PAGE, SIGNUP_RATE_LIMIT, LOGIN_RATE_LIMIT, CLIENT_SIDE_API_RATE_LIMIT, SHARE_RATE_LIMIT, FORGET_PASSWORD_RATE_LIMIT, RESET_PASSWORD_RATE_LIMIT, VERIFY_EMAIL_RATE_LIMIT, SYNC_USER_IDENTIFICATION_RATE_LIMIT, REDIS_URL, REDIS_HTTP_URL, RATE_LIMITING_DISABLED, UNSPLASH_ALLOWED_DOMAINS, STRIPE_PROJECT_NAMES, TURNSTILE_SECRET_KEY */
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(162437);


const IS_FORMBRICKS_CLOUD = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.IS_FORMBRICKS_CLOUD === "1";
// URLs
const WEBAPP_URL = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.WEBAPP_URL || (_env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.VERCEL_URL ? `https://${_env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.VERCEL_URL}` : false) || "http://localhost:3000";
const SHORT_URL_BASE = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.SHORT_URL_BASE ? _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.SHORT_URL_BASE : WEBAPP_URL;
// encryption keys
const FORMBRICKS_ENCRYPTION_KEY = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.FORMBRICKS_ENCRYPTION_KEY || undefined;
const ENCRYPTION_KEY = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.ENCRYPTION_KEY;
// Other
const CRON_SECRET = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.CRON_SECRET;
const DEFAULT_BRAND_COLOR = "#64748b";
const PRIVACY_URL = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.PRIVACY_URL;
const TERMS_URL = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.TERMS_URL;
const IMPRINT_URL = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.IMPRINT_URL;
const IMPRINT_ADDRESS = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.IMPRINT_ADDRESS;
const PASSWORD_RESET_DISABLED = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.PASSWORD_RESET_DISABLED === "1";
const EMAIL_VERIFICATION_DISABLED = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.EMAIL_VERIFICATION_DISABLED === "1";
const GOOGLE_OAUTH_ENABLED = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.GOOGLE_CLIENT_ID && _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.GOOGLE_CLIENT_SECRET ? true : false;
const GITHUB_OAUTH_ENABLED = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.GITHUB_ID && _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.GITHUB_SECRET ? true : false;
const AZURE_OAUTH_ENABLED = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.AZUREAD_CLIENT_ID && _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.AZUREAD_CLIENT_SECRET && _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.AZUREAD_TENANT_ID ? true : false;
const OIDC_OAUTH_ENABLED = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.OIDC_CLIENT_ID && _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.OIDC_CLIENT_SECRET && _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.OIDC_ISSUER ? true : false;
const GITHUB_ID = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.GITHUB_ID;
const GITHUB_SECRET = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.GITHUB_SECRET;
const GOOGLE_CLIENT_ID = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.GOOGLE_CLIENT_SECRET;
const AZUREAD_CLIENT_ID = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.AZUREAD_CLIENT_ID;
const AZUREAD_CLIENT_SECRET = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.AZUREAD_CLIENT_SECRET;
const AZUREAD_TENANT_ID = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.AZUREAD_TENANT_ID;
const OIDC_CLIENT_ID = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.OIDC_CLIENT_ID;
const OIDC_CLIENT_SECRET = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.OIDC_CLIENT_SECRET;
const OIDC_ISSUER = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.OIDC_ISSUER;
const OIDC_DISPLAY_NAME = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.OIDC_DISPLAY_NAME;
const OIDC_SIGNING_ALGORITHM = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.OIDC_SIGNING_ALGORITHM;
const SIGNUP_ENABLED = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.SIGNUP_DISABLED !== "1";
const EMAIL_AUTH_ENABLED = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.EMAIL_AUTH_DISABLED !== "1";
const INVITE_DISABLED = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.INVITE_DISABLED === "1";
const SLACK_CLIENT_SECRET = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.SLACK_CLIENT_SECRET;
const SLACK_CLIENT_ID = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.SLACK_CLIENT_ID;
const SLACK_AUTH_URL = `https://slack.com/oauth/v2/authorize?client_id=${_env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.SLACK_CLIENT_ID}&scope=channels:read,chat:write,chat:write.public,chat:write.customize,groups:read`;
const GOOGLE_SHEETS_CLIENT_ID = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.GOOGLE_SHEETS_CLIENT_ID;
const GOOGLE_SHEETS_CLIENT_SECRET = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.GOOGLE_SHEETS_CLIENT_SECRET;
const GOOGLE_SHEETS_REDIRECT_URL = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.GOOGLE_SHEETS_REDIRECT_URL;
const NOTION_OAUTH_CLIENT_ID = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.NOTION_OAUTH_CLIENT_ID;
const NOTION_OAUTH_CLIENT_SECRET = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.NOTION_OAUTH_CLIENT_SECRET;
const NOTION_REDIRECT_URI = `${WEBAPP_URL}/api/v1/integrations/notion/callback`;
const NOTION_AUTH_URL = `https://api.notion.com/v1/oauth/authorize?client_id=${_env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.NOTION_OAUTH_CLIENT_ID}&response_type=code&owner=user&redirect_uri=${NOTION_REDIRECT_URI}`;
const AIRTABLE_CLIENT_ID = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.AIRTABLE_CLIENT_ID;
const SMTP_HOST = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.SMTP_HOST;
const SMTP_PORT = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.SMTP_PORT;
const SMTP_SECURE_ENABLED = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.SMTP_SECURE_ENABLED === "1";
const SMTP_USER = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.SMTP_USER;
const SMTP_PASSWORD = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.SMTP_PASSWORD;
const SMTP_AUTHENTICATED = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.SMTP_AUTHENTICATED !== "0";
const SMTP_REJECT_UNAUTHORIZED_TLS = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.SMTP_REJECT_UNAUTHORIZED_TLS !== "0";
const MAIL_FROM = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.MAIL_FROM;
const NEXTAUTH_SECRET = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.NEXTAUTH_SECRET;
const ITEMS_PER_PAGE = 30;
const SURVEYS_PER_PAGE = 12;
const RESPONSES_PER_PAGE = 25;
const TEXT_RESPONSES_PER_PAGE = 5;
const INSIGHTS_PER_PAGE = 10;
const DOCUMENTS_PER_PAGE = 10;
const MAX_RESPONSES_FOR_INSIGHT_GENERATION = 500;
const DEFAULT_ORGANIZATION_ID = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.DEFAULT_ORGANIZATION_ID;
const DEFAULT_ORGANIZATION_ROLE = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.DEFAULT_ORGANIZATION_ROLE;
const SLACK_MESSAGE_LIMIT = 2995;
const GOOGLE_SHEET_MESSAGE_LIMIT = 49995;
const AIRTABLE_MESSAGE_LIMIT = 99995;
const NOTION_RICH_TEXT_LIMIT = 1995;
// Storage constants
const S3_ACCESS_KEY = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.S3_ACCESS_KEY;
const S3_SECRET_KEY = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.S3_SECRET_KEY;
const S3_REGION = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.S3_REGION;
const S3_ENDPOINT_URL = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.S3_ENDPOINT_URL;
const S3_BUCKET_NAME = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.S3_BUCKET_NAME;
const S3_FORCE_PATH_STYLE = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.S3_FORCE_PATH_STYLE === "1";
const UPLOADS_DIR = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.UPLOADS_DIR || "./uploads";
const MAX_SIZES = {
    standard: 1024 * 1024 * 10,
    big: 1024 * 1024 * 1024
};
// Function to check if the necessary S3 configuration is set up
const isS3Configured = ()=>{
    // This function checks if the S3 bucket name environment variable is defined.
    // The AWS SDK automatically resolves credentials through a chain,
    // so we do not need to explicitly check for AWS credentials like access key, secret key, or region.
    return !!S3_BUCKET_NAME;
};
// Colors for Survey Bg
const SURVEY_BG_COLORS = [
    "#FFFFFF",
    "#FFF2D8",
    "#EAD7BB",
    "#BCA37F",
    "#113946",
    "#04364A",
    "#176B87",
    "#64CCC5",
    "#DAFFFB",
    "#132043",
    "#1F4172",
    "#F1B4BB",
    "#FDF0F0",
    "#001524",
    "#445D48",
    "#D6CC99",
    "#FDE5D4",
    "#BEADFA",
    "#D0BFFF",
    "#DFCCFB",
    "#FFF8C9",
    "#FF8080",
    "#FFCF96",
    "#F6FDC3",
    "#CDFAD5"
];
// Rate Limiting
const SIGNUP_RATE_LIMIT = {
    interval: 60 * 60,
    allowedPerInterval: 30
};
const LOGIN_RATE_LIMIT = {
    interval: 15 * 60,
    allowedPerInterval: 30
};
const CLIENT_SIDE_API_RATE_LIMIT = {
    interval: 60,
    allowedPerInterval: 100
};
const SHARE_RATE_LIMIT = {
    interval: 60 * 60,
    allowedPerInterval: 100
};
const FORGET_PASSWORD_RATE_LIMIT = {
    interval: 60 * 60,
    allowedPerInterval: 5
};
const RESET_PASSWORD_RATE_LIMIT = {
    interval: 60 * 60,
    allowedPerInterval: 5
};
const VERIFY_EMAIL_RATE_LIMIT = {
    interval: 60 * 60,
    allowedPerInterval: 10
};
const SYNC_USER_IDENTIFICATION_RATE_LIMIT = {
    interval: 60,
    allowedPerInterval: 5
};
const DEBUG = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.DEBUG === "1";
const E2E_TESTING = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.E2E_TESTING === "1";
// Enterprise License constant
const ENTERPRISE_LICENSE_KEY = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.ENTERPRISE_LICENSE_KEY;
const REDIS_URL = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.REDIS_URL;
const REDIS_HTTP_URL = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.REDIS_HTTP_URL;
const RATE_LIMITING_DISABLED = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.RATE_LIMITING_DISABLED === "1";
const BREVO_API_KEY = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.BREVO_API_KEY;
const BREVO_LIST_ID = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.BREVO_LIST_ID;
const UNSPLASH_ACCESS_KEY = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.UNSPLASH_ACCESS_KEY;
const UNSPLASH_ALLOWED_DOMAINS = (/* unused pure expression or super */ null && ([
    "api.unsplash.com"
]));
const STRIPE_API_VERSION = "2024-06-20";
// Maximum number of attribute classes allowed:
const MAX_ATTRIBUTE_CLASSES_PER_ENVIRONMENT = 150;
const DEFAULT_LOCALE = "en-US";
const AVAILABLE_LOCALES = [
    "en-US",
    "de-DE",
    "pt-BR",
    "fr-FR"
];
// Billing constants
var PROJECT_FEATURE_KEYS = /*#__PURE__*/ function(PROJECT_FEATURE_KEYS) {
    PROJECT_FEATURE_KEYS["FREE"] = "free";
    PROJECT_FEATURE_KEYS["STARTUP"] = "startup";
    PROJECT_FEATURE_KEYS["SCALE"] = "scale";
    PROJECT_FEATURE_KEYS["ENTERPRISE"] = "enterprise";
    return PROJECT_FEATURE_KEYS;
}({});
var STRIPE_PROJECT_NAMES = /*#__PURE__*/ function(STRIPE_PROJECT_NAMES) {
    STRIPE_PROJECT_NAMES["STARTUP"] = "Formbricks Startup";
    STRIPE_PROJECT_NAMES["SCALE"] = "Formbricks Scale";
    STRIPE_PROJECT_NAMES["ENTERPRISE"] = "Formbricks Enterprise";
    return STRIPE_PROJECT_NAMES;
}({});
var STRIPE_PRICE_LOOKUP_KEYS = /*#__PURE__*/ function(STRIPE_PRICE_LOOKUP_KEYS) {
    STRIPE_PRICE_LOOKUP_KEYS["STARTUP_MONTHLY"] = "formbricks_startup_monthly";
    STRIPE_PRICE_LOOKUP_KEYS["STARTUP_YEARLY"] = "formbricks_startup_yearly";
    STRIPE_PRICE_LOOKUP_KEYS["SCALE_MONTHLY"] = "formbricks_scale_monthly";
    STRIPE_PRICE_LOOKUP_KEYS["SCALE_YEARLY"] = "formbricks_scale_yearly";
    return STRIPE_PRICE_LOOKUP_KEYS;
}({});
const BILLING_LIMITS = {
    FREE: {
        PROJECTS: 3,
        RESPONSES: 1500,
        MIU: 2000
    },
    STARTUP: {
        PROJECTS: 3,
        RESPONSES: 5000,
        MIU: 7500
    },
    SCALE: {
        PROJECTS: 5,
        RESPONSES: 10000,
        MIU: 30000
    }
};
const IS_AI_CONFIGURED = Boolean(_env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.AI_AZURE_EMBEDDINGS_API_KEY && _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.AI_AZURE_EMBEDDINGS_DEPLOYMENT_ID && _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.AI_AZURE_EMBEDDINGS_RESSOURCE_NAME && _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.AI_AZURE_LLM_API_KEY && _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.AI_AZURE_LLM_DEPLOYMENT_ID && _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.AI_AZURE_LLM_RESSOURCE_NAME);
const INTERCOM_SECRET_KEY = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.INTERCOM_SECRET_KEY;
const IS_INTERCOM_CONFIGURED = Boolean(_env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.NEXT_PUBLIC_INTERCOM_APP_ID && INTERCOM_SECRET_KEY);
const TURNSTILE_SECRET_KEY = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.TURNSTILE_SECRET_KEY;
const IS_TURNSTILE_CONFIGURED = Boolean(_env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.NEXT_PUBLIC_TURNSTILE_SITE_KEY && TURNSTILE_SECRET_KEY);


/***/ }),

/***/ 549673:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C7: () => (/* binding */ generateLocalSignedUrl),
/* harmony export */   Zd: () => (/* binding */ getHash),
/* harmony export */   gg: () => (/* binding */ decryptAES128),
/* harmony export */   jQ: () => (/* binding */ validateLocalSignedUrl),
/* harmony export */   vX: () => (/* binding */ symmetricEncrypt),
/* harmony export */   zp: () => (/* binding */ symmetricDecrypt)
/* harmony export */ });
/* unused harmony export encryptAES128 */
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(455511);
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(836919);



const ALGORITHM = "aes256";
const INPUT_ENCODING = "utf8";
const OUTPUT_ENCODING = "hex";
const BUFFER_ENCODING = _constants__WEBPACK_IMPORTED_MODULE_1__/* .ENCRYPTION_KEY */ .o7.length === 32 ? "latin1" : "hex";
const IV_LENGTH = 16; // AES blocksize
/**
 *
 * @param text Value to be encrypted
 * @param key Key used to encrypt value must be 32 bytes for AES256 encryption algorithm
 *
 * @returns Encrypted value using key
 */ const symmetricEncrypt = (text, key)=>{
    const _key = Buffer.from(key, BUFFER_ENCODING);
    const iv = crypto__WEBPACK_IMPORTED_MODULE_0___default().randomBytes(IV_LENGTH);
    // @ts-ignore -- the package needs to be built
    const cipher = crypto__WEBPACK_IMPORTED_MODULE_0___default().createCipheriv(ALGORITHM, _key, iv);
    let ciphered = cipher.update(text, INPUT_ENCODING, OUTPUT_ENCODING);
    ciphered += cipher.final(OUTPUT_ENCODING);
    const ciphertext = iv.toString(OUTPUT_ENCODING) + ":" + ciphered;
    return ciphertext;
};
/**
 *
 * @param text Value to decrypt
 * @param key Key used to decrypt value must be 32 bytes for AES256 encryption algorithm
 */ const symmetricDecrypt = (text, key)=>{
    const _key = Buffer.from(key, BUFFER_ENCODING);
    const components = text.split(":");
    const iv_from_ciphertext = Buffer.from(components.shift() || "", OUTPUT_ENCODING);
    // @ts-ignore -- the package needs to be built
    const decipher = crypto__WEBPACK_IMPORTED_MODULE_0___default().createDecipheriv(ALGORITHM, _key, iv_from_ciphertext);
    let deciphered = decipher.update(components.join(":"), OUTPUT_ENCODING, INPUT_ENCODING);
    deciphered += decipher.final(INPUT_ENCODING);
    return deciphered;
};
const getHash = (key)=>(0,crypto__WEBPACK_IMPORTED_MODULE_0__.createHash)("sha256").update(key).digest("hex");
// create an aes128 encryption function
const encryptAES128 = (encryptionKey, data)=>{
    // @ts-ignore -- the package needs to be built
    const cipher = createCipheriv("aes-128-ecb", Buffer.from(encryptionKey, "base64"), "");
    let encrypted = cipher.update(data, "utf-8", "hex");
    encrypted += cipher.final("hex");
    return encrypted;
};
// create an aes128 decryption function
const decryptAES128 = (encryptionKey, data)=>{
    // @ts-ignore -- the package needs to be built
    const cipher = (0,crypto__WEBPACK_IMPORTED_MODULE_0__.createDecipheriv)("aes-128-ecb", Buffer.from(encryptionKey, "base64"), "");
    let decrypted = cipher.update(data, "hex", "utf-8");
    decrypted += cipher.final("utf-8");
    return decrypted;
};
const generateLocalSignedUrl = (fileName, environmentId, fileType)=>{
    const uuid = (0,crypto__WEBPACK_IMPORTED_MODULE_0__.randomBytes)(16).toString("hex");
    const timestamp = Date.now();
    const data = `${uuid}:${fileName}:${environmentId}:${fileType}:${timestamp}`;
    const signature = (0,crypto__WEBPACK_IMPORTED_MODULE_0__.createHmac)("sha256", _constants__WEBPACK_IMPORTED_MODULE_1__/* .ENCRYPTION_KEY */ .o7).update(data).digest("hex");
    return {
        signature,
        uuid,
        timestamp
    };
};
const validateLocalSignedUrl = (uuid, fileName, environmentId, fileType, timestamp, signature, secret)=>{
    const data = `${uuid}:${fileName}:${environmentId}:${fileType}:${timestamp}`;
    const expectedSignature = (0,crypto__WEBPACK_IMPORTED_MODULE_0__.createHmac)("sha256", secret).update(data).digest("hex");
    if (expectedSignature !== signature) {
        return false;
    }
    // valid for 5 minutes
    if (Date.now() - timestamp > 1000 * 60 * 5) {
        return false;
    }
    return true;
};


/***/ }),

/***/ 162437:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ env)
/* harmony export */ });
/* harmony import */ var _t3_oss_env_nextjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(219650);
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(545198);


const env = (0,_t3_oss_env_nextjs__WEBPACK_IMPORTED_MODULE_0__/* .createEnv */ .w)({
    /*
   * Serverside Environment variables, not available on the client.
   * Will throw if you access these variables on the client.
   */ server: {
        AI_AZURE_EMBEDDINGS_API_KEY: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
        AI_AZURE_LLM_API_KEY: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
        AI_AZURE_EMBEDDINGS_DEPLOYMENT_ID: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
        AI_AZURE_LLM_DEPLOYMENT_ID: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
        AI_AZURE_EMBEDDINGS_RESSOURCE_NAME: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
        AI_AZURE_LLM_RESSOURCE_NAME: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
        AIRTABLE_CLIENT_ID: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
        AZUREAD_CLIENT_ID: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
        AZUREAD_CLIENT_SECRET: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
        AZUREAD_TENANT_ID: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
        CRON_SECRET: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().min(10),
        BREVO_API_KEY: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
        BREVO_LIST_ID: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
        DATABASE_URL: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().url(),
        DEBUG: zod__WEBPACK_IMPORTED_MODULE_1__.z.enum([
            "1",
            "0"
        ]).optional(),
        DEFAULT_ORGANIZATION_ID: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
        DEFAULT_ORGANIZATION_ROLE: zod__WEBPACK_IMPORTED_MODULE_1__.z.enum([
            "owner",
            "manager",
            "member",
            "billing"
        ]).optional(),
        E2E_TESTING: zod__WEBPACK_IMPORTED_MODULE_1__.z.enum([
            "1",
            "0"
        ]).optional(),
        EMAIL_AUTH_DISABLED: zod__WEBPACK_IMPORTED_MODULE_1__.z.enum([
            "1",
            "0"
        ]).optional(),
        EMAIL_VERIFICATION_DISABLED: zod__WEBPACK_IMPORTED_MODULE_1__.z.enum([
            "1",
            "0"
        ]).optional(),
        ENCRYPTION_KEY: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().length(64).or(zod__WEBPACK_IMPORTED_MODULE_1__.z.string().length(32)),
        ENTERPRISE_LICENSE_KEY: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
        FORMBRICKS_ENCRYPTION_KEY: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().length(24).or(zod__WEBPACK_IMPORTED_MODULE_1__.z.string().length(0)).optional(),
        GITHUB_ID: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
        GITHUB_SECRET: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
        GOOGLE_CLIENT_ID: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
        GOOGLE_CLIENT_SECRET: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
        GOOGLE_SHEETS_CLIENT_ID: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
        GOOGLE_SHEETS_CLIENT_SECRET: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
        GOOGLE_SHEETS_REDIRECT_URL: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
        HTTP_PROXY: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().url().optional(),
        HTTPS_PROXY: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().url().optional(),
        IMPRINT_URL: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().url().optional().or(zod__WEBPACK_IMPORTED_MODULE_1__.z.string().refine((str)=>str === "")),
        IMPRINT_ADDRESS: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
        INVITE_DISABLED: zod__WEBPACK_IMPORTED_MODULE_1__.z.enum([
            "1",
            "0"
        ]).optional(),
        INTERCOM_SECRET_KEY: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
        IS_FORMBRICKS_CLOUD: zod__WEBPACK_IMPORTED_MODULE_1__.z.enum([
            "1",
            "0"
        ]).optional(),
        MAIL_FROM: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().email().optional(),
        NEXTAUTH_SECRET: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().min(1),
        NOTION_OAUTH_CLIENT_ID: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
        NOTION_OAUTH_CLIENT_SECRET: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
        OIDC_CLIENT_ID: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
        OIDC_CLIENT_SECRET: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
        OIDC_DISPLAY_NAME: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
        OIDC_ISSUER: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
        OIDC_SIGNING_ALGORITHM: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
        OPENTELEMETRY_LISTENER_URL: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
        REDIS_URL: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
        REDIS_HTTP_URL: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
        PASSWORD_RESET_DISABLED: zod__WEBPACK_IMPORTED_MODULE_1__.z.enum([
            "1",
            "0"
        ]).optional(),
        PRIVACY_URL: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().url().optional().or(zod__WEBPACK_IMPORTED_MODULE_1__.z.string().refine((str)=>str === "")),
        RATE_LIMITING_DISABLED: zod__WEBPACK_IMPORTED_MODULE_1__.z.enum([
            "1",
            "0"
        ]).optional(),
        S3_ACCESS_KEY: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
        S3_BUCKET_NAME: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
        S3_REGION: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
        S3_SECRET_KEY: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
        S3_ENDPOINT_URL: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
        S3_FORCE_PATH_STYLE: zod__WEBPACK_IMPORTED_MODULE_1__.z.enum([
            "1",
            "0"
        ]).optional(),
        SHORT_URL_BASE: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().url().optional().or(zod__WEBPACK_IMPORTED_MODULE_1__.z.string().length(0)),
        SIGNUP_DISABLED: zod__WEBPACK_IMPORTED_MODULE_1__.z.enum([
            "1",
            "0"
        ]).optional(),
        SLACK_CLIENT_ID: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
        SLACK_CLIENT_SECRET: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
        SMTP_HOST: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().min(1).optional(),
        SMTP_PORT: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().min(1).optional(),
        SMTP_SECURE_ENABLED: zod__WEBPACK_IMPORTED_MODULE_1__.z.enum([
            "1",
            "0"
        ]).optional(),
        SMTP_USER: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().min(1).optional(),
        SMTP_PASSWORD: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().min(1).optional(),
        SMTP_AUTHENTICATED: zod__WEBPACK_IMPORTED_MODULE_1__.z.enum([
            "1",
            "0"
        ]).optional(),
        SMTP_REJECT_UNAUTHORIZED_TLS: zod__WEBPACK_IMPORTED_MODULE_1__.z.enum([
            "1",
            "0"
        ]).optional(),
        STRIPE_SECRET_KEY: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
        STRIPE_WEBHOOK_SECRET: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
        TELEMETRY_DISABLED: zod__WEBPACK_IMPORTED_MODULE_1__.z.enum([
            "1",
            "0"
        ]).optional(),
        TERMS_URL: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().url().optional().or(zod__WEBPACK_IMPORTED_MODULE_1__.z.string().refine((str)=>str === "")),
        TURNSTILE_SECRET_KEY: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
        UPLOADS_DIR: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().min(1).optional(),
        VERCEL_URL: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
        WEBAPP_URL: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().url().optional(),
        UNSPLASH_ACCESS_KEY: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
        LANGFUSE_SECRET_KEY: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
        LANGFUSE_PUBLIC_KEY: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
        LANGFUSE_BASEURL: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional()
    },
    /*
   * Environment variables available on the client (and server).
   *
   * 💡 You'll get type errors if these are not prefixed with NEXT_PUBLIC_.
   */ client: {
        NEXT_PUBLIC_FORMBRICKS_API_HOST: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().url().optional().or(zod__WEBPACK_IMPORTED_MODULE_1__.z.string().refine((str)=>str === "")),
        NEXT_PUBLIC_FORMBRICKS_ENVIRONMENT_ID: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
        NEXT_PUBLIC_FORMBRICKS_ONBOARDING_SURVEY_ID: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
        NEXT_PUBLIC_POSTHOG_API_KEY: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
        NEXT_PUBLIC_POSTHOG_API_HOST: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
        NEXT_PUBLIC_SENTRY_DSN: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
        NEXT_PUBLIC_INTERCOM_APP_ID: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
        NEXT_PUBLIC_TURNSTILE_SITE_KEY: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional()
    },
    /*
   * Due to how Next.js bundles environment variables on Edge and Client,
   * we need to manually destructure them to make sure all are included in bundle.
   *
   * 💡 You'll get type errors if not all variables from `server` & `client` are included here.
   */ runtimeEnv: {
        AI_AZURE_EMBEDDINGS_API_KEY: process.env.AI_AZURE_EMBEDDINGS_API_KEY,
        AI_AZURE_LLM_API_KEY: process.env.AI_AZURE_LLM_API_KEY,
        AI_AZURE_EMBEDDINGS_DEPLOYMENT_ID: process.env.AI_AZURE_EMBEDDINGS_DEPLOYMENT_ID,
        AI_AZURE_LLM_DEPLOYMENT_ID: process.env.AI_AZURE_LLM_DEPLOYMENT_ID,
        AI_AZURE_EMBEDDINGS_RESSOURCE_NAME: process.env.AI_AZURE_EMBEDDINGS_RESSOURCE_NAME,
        AI_AZURE_LLM_RESSOURCE_NAME: process.env.AI_AZURE_LLM_RESSOURCE_NAME,
        LANGFUSE_SECRET_KEY: process.env.LANGFUSE_SECRET_KEY,
        LANGFUSE_PUBLIC_KEY: process.env.LANGFUSE_PUBLIC_KEY,
        LANGFUSE_BASEURL: process.env.LANGFUSE_BASEURL,
        AIRTABLE_CLIENT_ID: process.env.AIRTABLE_CLIENT_ID,
        AZUREAD_CLIENT_ID: process.env.AZUREAD_CLIENT_ID,
        AZUREAD_CLIENT_SECRET: process.env.AZUREAD_CLIENT_SECRET,
        AZUREAD_TENANT_ID: process.env.AZUREAD_TENANT_ID,
        BREVO_API_KEY: process.env.BREVO_API_KEY,
        BREVO_LIST_ID: process.env.BREVO_LIST_ID,
        CRON_SECRET: process.env.CRON_SECRET,
        DATABASE_URL: process.env.DATABASE_URL,
        DEBUG: process.env.DEBUG,
        DEFAULT_ORGANIZATION_ID: process.env.DEFAULT_ORGANIZATION_ID,
        DEFAULT_ORGANIZATION_ROLE: process.env.DEFAULT_ORGANIZATION_ROLE,
        E2E_TESTING: process.env.E2E_TESTING,
        EMAIL_AUTH_DISABLED: process.env.EMAIL_AUTH_DISABLED,
        EMAIL_VERIFICATION_DISABLED: process.env.EMAIL_VERIFICATION_DISABLED,
        ENCRYPTION_KEY: process.env.ENCRYPTION_KEY,
        ENTERPRISE_LICENSE_KEY: process.env.ENTERPRISE_LICENSE_KEY,
        FORMBRICKS_ENCRYPTION_KEY: process.env.FORMBRICKS_ENCRYPTION_KEY,
        GITHUB_ID: process.env.GITHUB_ID,
        GITHUB_SECRET: process.env.GITHUB_SECRET,
        GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
        GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
        GOOGLE_SHEETS_CLIENT_ID: process.env.GOOGLE_SHEETS_CLIENT_ID,
        GOOGLE_SHEETS_CLIENT_SECRET: process.env.GOOGLE_SHEETS_CLIENT_SECRET,
        GOOGLE_SHEETS_REDIRECT_URL: process.env.GOOGLE_SHEETS_REDIRECT_URL,
        HTTP_PROXY: process.env.HTTP_PROXY,
        HTTPS_PROXY: process.env.HTTPS_PROXY,
        IMPRINT_URL: process.env.IMPRINT_URL,
        IMPRINT_ADDRESS: process.env.IMPRINT_ADDRESS,
        INVITE_DISABLED: process.env.INVITE_DISABLED,
        INTERCOM_SECRET_KEY: process.env.INTERCOM_SECRET_KEY,
        IS_FORMBRICKS_CLOUD: process.env.IS_FORMBRICKS_CLOUD,
        MAIL_FROM: process.env.MAIL_FROM,
        NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
        NEXT_PUBLIC_FORMBRICKS_API_HOST: "",
        NEXT_PUBLIC_FORMBRICKS_ENVIRONMENT_ID: "",
        NEXT_PUBLIC_FORMBRICKS_ONBOARDING_SURVEY_ID: "",
        NEXT_PUBLIC_POSTHOG_API_HOST: process.env.NEXT_PUBLIC_POSTHOG_API_HOST,
        NEXT_PUBLIC_POSTHOG_API_KEY: process.env.NEXT_PUBLIC_POSTHOG_API_KEY,
        NEXT_PUBLIC_SENTRY_DSN: process.env.NEXT_PUBLIC_SENTRY_DSN,
        NEXT_PUBLIC_TURNSTILE_SITE_KEY: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY,
        OPENTELEMETRY_LISTENER_URL: process.env.OPENTELEMETRY_LISTENER_URL,
        NEXT_PUBLIC_INTERCOM_APP_ID: process.env.NEXT_PUBLIC_INTERCOM_APP_ID,
        NOTION_OAUTH_CLIENT_ID: process.env.NOTION_OAUTH_CLIENT_ID,
        NOTION_OAUTH_CLIENT_SECRET: process.env.NOTION_OAUTH_CLIENT_SECRET,
        OIDC_CLIENT_ID: process.env.OIDC_CLIENT_ID,
        OIDC_CLIENT_SECRET: process.env.OIDC_CLIENT_SECRET,
        OIDC_DISPLAY_NAME: process.env.OIDC_DISPLAY_NAME,
        OIDC_ISSUER: process.env.OIDC_ISSUER,
        OIDC_SIGNING_ALGORITHM: process.env.OIDC_SIGNING_ALGORITHM,
        REDIS_URL: process.env.REDIS_URL,
        REDIS_HTTP_URL: process.env.REDIS_HTTP_URL,
        PASSWORD_RESET_DISABLED: process.env.PASSWORD_RESET_DISABLED,
        PRIVACY_URL: process.env.PRIVACY_URL,
        RATE_LIMITING_DISABLED: process.env.RATE_LIMITING_DISABLED,
        S3_ACCESS_KEY: process.env.S3_ACCESS_KEY,
        S3_BUCKET_NAME: process.env.S3_BUCKET_NAME,
        S3_REGION: process.env.S3_REGION,
        S3_SECRET_KEY: process.env.S3_SECRET_KEY,
        S3_ENDPOINT_URL: process.env.S3_ENDPOINT_URL,
        S3_FORCE_PATH_STYLE: process.env.S3_FORCE_PATH_STYLE,
        SHORT_URL_BASE: process.env.SHORT_URL_BASE,
        SIGNUP_DISABLED: process.env.SIGNUP_DISABLED,
        SLACK_CLIENT_ID: process.env.SLACK_CLIENT_ID,
        SLACK_CLIENT_SECRET: process.env.SLACK_CLIENT_SECRET,
        SMTP_HOST: process.env.SMTP_HOST,
        SMTP_PASSWORD: process.env.SMTP_PASSWORD,
        SMTP_PORT: process.env.SMTP_PORT,
        SMTP_SECURE_ENABLED: process.env.SMTP_SECURE_ENABLED,
        SMTP_USER: process.env.SMTP_USER,
        SMTP_REJECT_UNAUTHORIZED_TLS: process.env.SMTP_REJECT_UNAUTHORIZED_TLS,
        SMTP_AUTHENTICATED: process.env.SMTP_AUTHENTICATED,
        STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
        STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET,
        TELEMETRY_DISABLED: process.env.TELEMETRY_DISABLED,
        TURNSTILE_SECRET_KEY: process.env.TURNSTILE_SECRET_KEY,
        TERMS_URL: process.env.TERMS_URL,
        UPLOADS_DIR: process.env.UPLOADS_DIR,
        VERCEL_URL: process.env.VERCEL_URL,
        WEBAPP_URL: process.env.WEBAPP_URL,
        UNSPLASH_ACCESS_KEY: process.env.UNSPLASH_ACCESS_KEY
    }
});


/***/ }),

/***/ 249479:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ surveyCache)
/* harmony export */ });
/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87863);
/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_cache__WEBPACK_IMPORTED_MODULE_0__);

const surveyCache = {
    tag: {
        byId (id) {
            return `surveys-${id}`;
        },
        byEnvironmentId (environmentId) {
            return `environments-${environmentId}-surveys`;
        },
        byAttributeClassId (attributeClassId) {
            return `attributeFilters-${attributeClassId}-surveys`;
        },
        byActionClassId (actionClassId) {
            return `actionClasses-${actionClassId}-surveys`;
        },
        bySegmentId (segmentId) {
            return `segments-${segmentId}-surveys`;
        },
        byResultShareKey (resultShareKey) {
            return `surveys-resultShare-${resultShareKey}`;
        }
    },
    revalidate ({ id, attributeClassId, actionClassId, environmentId, segmentId, resultShareKey }) {
        if (id) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(this.tag.byId(id));
        }
        if (attributeClassId) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(this.tag.byAttributeClassId(attributeClassId));
        }
        if (actionClassId) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(this.tag.byActionClassId(actionClassId));
        }
        if (environmentId) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(this.tag.byEnvironmentId(environmentId));
        }
        if (segmentId) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(this.tag.bySegmentId(segmentId));
        }
        if (resultShareKey) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(this.tag.byResultShareKey(resultShareKey));
        }
    }
};


/***/ }),

/***/ 860988:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ validateInputs)
/* harmony export */ });
/* harmony import */ var _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(470641);

function validateInputs(...pairs) {
    const parsedData = [];
    for (const [value, schema] of pairs){
        const inputValidation = schema.safeParse(value);
        if (!inputValidation.success) {
            console.error(`Validation failed for ${JSON.stringify(value).substring(0, 100)} and ${JSON.stringify(schema)}: ${inputValidation.error.message}`);
            throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_0__/* .ValidationError */ .yI("Validation failed");
        }
        parsedData.push(inputValidation.data);
    }
    return parsedData;
}


/***/ }),

/***/ 441313:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Lu: () => (/* binding */ ZActionClassInput),
/* harmony export */   Zq: () => (/* binding */ ZActionClassNoCodeConfig),
/* harmony export */   vb: () => (/* binding */ ZActionClass)
/* harmony export */ });
/* unused harmony exports ZActionClassMatchType, ZActionClassPageUrlRule, ZActionClassType, ZActionClassInputCode */
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(545198);

const ZActionClassMatchType = zod__WEBPACK_IMPORTED_MODULE_0__.z.union([
    zod__WEBPACK_IMPORTED_MODULE_0__.z.literal("exactMatch"),
    zod__WEBPACK_IMPORTED_MODULE_0__.z.literal("contains"),
    zod__WEBPACK_IMPORTED_MODULE_0__.z.literal("startsWith"),
    zod__WEBPACK_IMPORTED_MODULE_0__.z.literal("endsWith"),
    zod__WEBPACK_IMPORTED_MODULE_0__.z.literal("notMatch"),
    zod__WEBPACK_IMPORTED_MODULE_0__.z.literal("notContains")
]);
const ZActionClassPageUrlRule = zod__WEBPACK_IMPORTED_MODULE_0__.z.union([
    zod__WEBPACK_IMPORTED_MODULE_0__.z.literal("exactMatch"),
    zod__WEBPACK_IMPORTED_MODULE_0__.z.literal("contains"),
    zod__WEBPACK_IMPORTED_MODULE_0__.z.literal("startsWith"),
    zod__WEBPACK_IMPORTED_MODULE_0__.z.literal("endsWith"),
    zod__WEBPACK_IMPORTED_MODULE_0__.z.literal("notMatch"),
    zod__WEBPACK_IMPORTED_MODULE_0__.z.literal("notContains")
]);
const ZActionClassNoCodeConfigBase = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    type: zod__WEBPACK_IMPORTED_MODULE_0__.z.enum([
        "click",
        "pageView",
        "exitIntent",
        "fiftyPercentScroll"
    ]),
    urlFilters: zod__WEBPACK_IMPORTED_MODULE_0__.z.array(zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
        value: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().trim().min(1, {
            message: "Value must contain atleast 1 character"
        }),
        rule: ZActionClassPageUrlRule
    }))
});
const ZActionClassNoCodeConfigClick = ZActionClassNoCodeConfigBase.extend({
    type: zod__WEBPACK_IMPORTED_MODULE_0__.z.literal("click"),
    elementSelector: zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
        cssSelector: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().trim().optional(),
        innerHtml: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().trim().optional()
    }).superRefine((data, ctx)=>{
        if (!data.cssSelector && !data.innerHtml) {
            ctx.addIssue({
                code: zod__WEBPACK_IMPORTED_MODULE_0__.z.ZodIssueCode.custom,
                message: `Either cssSelector or innerHtml must be provided`
            });
        }
    })
});
const ZActionClassNoCodeConfigPageView = ZActionClassNoCodeConfigBase.extend({
    type: zod__WEBPACK_IMPORTED_MODULE_0__.z.literal("pageView")
});
const ZActionClassNoCodeConfigExitIntent = ZActionClassNoCodeConfigBase.extend({
    type: zod__WEBPACK_IMPORTED_MODULE_0__.z.literal("exitIntent")
});
const ZActionClassNoCodeConfigfiftyPercentScroll = ZActionClassNoCodeConfigBase.extend({
    type: zod__WEBPACK_IMPORTED_MODULE_0__.z.literal("fiftyPercentScroll")
});
const ZActionClassNoCodeConfig = zod__WEBPACK_IMPORTED_MODULE_0__.z.union([
    ZActionClassNoCodeConfigClick,
    ZActionClassNoCodeConfigPageView,
    ZActionClassNoCodeConfigExitIntent,
    ZActionClassNoCodeConfigfiftyPercentScroll
]);
const ZActionClassType = zod__WEBPACK_IMPORTED_MODULE_0__.z.enum([
    "code",
    "noCode",
    "automatic"
]);
const ZActionClass = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    id: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().cuid2(),
    name: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().trim().min(1),
    description: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().nullable(),
    type: ZActionClassType,
    key: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().trim().min(1).nullable(),
    noCodeConfig: ZActionClassNoCodeConfig.nullable(),
    environmentId: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),
    createdAt: zod__WEBPACK_IMPORTED_MODULE_0__.z.date(),
    updatedAt: zod__WEBPACK_IMPORTED_MODULE_0__.z.date()
});
const ZActionClassInputBase = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    name: zod__WEBPACK_IMPORTED_MODULE_0__.z.string({
        message: "Name is required"
    }).trim().min(1, {
        message: "Name must be at least 1 character long"
    }),
    description: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().nullable(),
    environmentId: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),
    type: ZActionClassType
});
const ZActionClassInputCode = ZActionClassInputBase.extend({
    type: zod__WEBPACK_IMPORTED_MODULE_0__.z.literal("code"),
    key: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().trim().min(1).nullable()
});
const ZActionClassInputNoCode = ZActionClassInputBase.extend({
    type: zod__WEBPACK_IMPORTED_MODULE_0__.z.literal("noCode"),
    noCodeConfig: ZActionClassNoCodeConfig.nullable()
});
const ZActionClassInputAutomatic = ZActionClassInputBase.extend({
    type: zod__WEBPACK_IMPORTED_MODULE_0__.z.literal("automatic")
});
const ZActionClassInput = zod__WEBPACK_IMPORTED_MODULE_0__.z.union([
    ZActionClassInputCode,
    ZActionClassInputNoCode,
    ZActionClassInputAutomatic
]);


/***/ }),

/***/ 733735:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Wo: () => (/* binding */ ZOptionalNumber),
/* harmony export */   Ww: () => (/* binding */ ZOptionalString),
/* harmony export */   cf: () => (/* binding */ ZColor),
/* harmony export */   eI: () => (/* binding */ ZString),
/* harmony export */   gK: () => (/* binding */ ZAllowedFileExtension),
/* harmony export */   hF: () => (/* binding */ getZSafeUrl),
/* harmony export */   i4: () => (/* binding */ ZId),
/* harmony export */   yO: () => (/* binding */ ZPlacement)
/* harmony export */ });
/* unused harmony exports ZBoolean, ZNumber, ZNullableString, ZUuid */
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(545198);

const ZBoolean = zod__WEBPACK_IMPORTED_MODULE_0__.z.boolean();
const ZString = zod__WEBPACK_IMPORTED_MODULE_0__.z.string();
const ZNumber = zod__WEBPACK_IMPORTED_MODULE_0__.z.number();
const ZOptionalNumber = zod__WEBPACK_IMPORTED_MODULE_0__.z.number().optional();
const ZOptionalString = zod__WEBPACK_IMPORTED_MODULE_0__.z.string().optional();
const ZNullableString = zod__WEBPACK_IMPORTED_MODULE_0__.z.string().nullable();
const ZColor = zod__WEBPACK_IMPORTED_MODULE_0__.z.string().regex(/^#(?:[A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/);
const ZPlacement = zod__WEBPACK_IMPORTED_MODULE_0__.z.enum([
    "bottomLeft",
    "bottomRight",
    "topLeft",
    "topRight",
    "center"
]);
const ZAllowedFileExtension = zod__WEBPACK_IMPORTED_MODULE_0__.z.enum([
    "png",
    "jpeg",
    "jpg",
    "webp",
    "pdf",
    "doc",
    "docx",
    "xls",
    "xlsx",
    "ppt",
    "pptx",
    "plain",
    "csv",
    "mp4",
    "mov",
    "avi",
    "mkv",
    "webm",
    "zip",
    "rar",
    "7z",
    "tar"
]);
const ZId = zod__WEBPACK_IMPORTED_MODULE_0__.z.string().cuid2();
const ZUuid = zod__WEBPACK_IMPORTED_MODULE_0__.z.string().uuid();
const getZSafeUrl = (message)=>zod__WEBPACK_IMPORTED_MODULE_0__.z.string().url({
        message
    }).superRefine((url, ctx)=>{
        if (url.includes(" ")) {
            ctx.addIssue({
                code: zod__WEBPACK_IMPORTED_MODULE_0__.z.ZodIssueCode.custom,
                message: "URL must not contain spaces"
            });
        }
        if (!url.startsWith("https://")) {
            ctx.addIssue({
                code: zod__WEBPACK_IMPORTED_MODULE_0__.z.ZodIssueCode.custom,
                message: "URL must start with https://"
            });
        }
    });


/***/ }),

/***/ 470641:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Bk: () => (/* binding */ UnknownError),
/* harmony export */   CE: () => (/* binding */ ResourceNotFoundError),
/* harmony export */   J4: () => (/* binding */ OperationNotAllowedError),
/* harmony export */   a$: () => (/* binding */ DatabaseError),
/* harmony export */   oC: () => (/* binding */ InvalidInputError),
/* harmony export */   v3: () => (/* binding */ AuthenticationError),
/* harmony export */   yI: () => (/* binding */ ValidationError),
/* harmony export */   yi: () => (/* binding */ AuthorizationError)
/* harmony export */ });
/* unused harmony exports ZErrorHandler, UniqueConstraintError, ForeignKeyConstraintError */
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(545198);

class ResourceNotFoundError extends Error {
    constructor(resource, id){
        super(id ? `${resource} with ID ${id} not found` : `${resource} not found`), this.statusCode = 404;
        this.name = "ResourceNotFoundError";
        this.resourceType = resource;
        this.resourceId = id;
    }
}
class InvalidInputError extends Error {
    constructor(message){
        super(message), this.statusCode = 400;
        this.name = "InvalidInputError";
    }
}
class ValidationError extends Error {
    constructor(message){
        super(message), this.statusCode = 400;
        this.name = "ValidationError";
    }
}
class UnknownError extends Error {
    constructor(message){
        super(message), this.statusCode = 500;
        this.name = "UnknownError";
    }
}
class DatabaseError extends Error {
    constructor(message){
        super(message), this.statusCode = 500;
        this.name = "DatabaseError";
    }
}
class UniqueConstraintError extends Error {
    constructor(message){
        super(message), this.statusCode = 409;
        this.name = "UniqueConstraintError";
    }
}
class ForeignKeyConstraintError extends Error {
    constructor(message){
        super(message), this.statusCode = 409;
        this.name = "ForeignKeyConstraintError";
    }
}
class OperationNotAllowedError extends Error {
    constructor(message){
        super(message), this.statusCode = 403;
        this.name = "OperationNotAllowedError";
    }
}
class AuthenticationError extends Error {
    constructor(message){
        super(message), this.statusCode = 401;
        this.name = "AuthenticationError";
    }
}
class AuthorizationError extends Error {
    constructor(message){
        super(message), this.statusCode = 403;
        this.name = "AuthorizationError";
    }
}
const ZErrorHandler = zod__WEBPACK_IMPORTED_MODULE_0__.z.function().args(zod__WEBPACK_IMPORTED_MODULE_0__.z.any()).returns(zod__WEBPACK_IMPORTED_MODULE_0__.z.void());



/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [8079,3073,7863,5069,6626], () => (__webpack_exec__(966300)));
module.exports = __webpack_exports__;

})();