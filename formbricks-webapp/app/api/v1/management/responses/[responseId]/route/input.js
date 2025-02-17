(() => {
var exports = {};
exports.id = 3501;
exports.ids = [3501];
exports.modules = {

/***/ 191043:
/***/ ((module) => {

"use strict";
module.exports = require("@aws-sdk/client-s3");

/***/ }),

/***/ 741000:
/***/ ((module) => {

"use strict";
module.exports = require("@aws-sdk/s3-presigned-post");

/***/ }),

/***/ 531701:
/***/ ((module) => {

"use strict";
module.exports = require("@aws-sdk/s3-request-presigner");

/***/ }),

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

/***/ 912412:
/***/ ((module) => {

"use strict";
module.exports = require("assert");

/***/ }),

/***/ 455511:
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ 594735:
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ 629021:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 79748:
/***/ ((module) => {

"use strict";
module.exports = require("fs/promises");

/***/ }),

/***/ 781630:
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ 55591:
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ 321820:
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ 333873:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 927910:
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ 583997:
/***/ ((module) => {

"use strict";
module.exports = require("tty");

/***/ }),

/***/ 379551:
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ 328354:
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ 74075:
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ }),

/***/ 977598:
/***/ ((module) => {

"use strict";
module.exports = require("node:crypto");

/***/ }),

/***/ 344708:
/***/ ((module) => {

"use strict";
module.exports = require("node:https");

/***/ }),

/***/ 141134:
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

// NAMESPACE OBJECT: ./app/api/v1/management/responses/[responseId]/route.ts
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
var api_response = __webpack_require__(328779);
// EXTERNAL MODULE: ./app/lib/api/validator.ts
var validator = __webpack_require__(105032);
// EXTERNAL MODULE: ../../packages/lib/environment/auth.ts
var environment_auth = __webpack_require__(266640);
// EXTERNAL MODULE: ../../packages/lib/response/service.ts + 2 modules
var service = __webpack_require__(408478);
// EXTERNAL MODULE: ../../packages/lib/survey/service.ts
var survey_service = __webpack_require__(222118);
// EXTERNAL MODULE: ../../packages/types/responses.ts + 1 modules
var responses = __webpack_require__(333418);
;// ./app/api/v1/management/responses/[responseId]/route.ts







const fetchAndValidateResponse = async (authentication, responseId)=>{
    const response = await (0,service/* getResponse */.mi)(responseId);
    if (!response || !await canUserAccessResponse(authentication, response)) {
        throw new Error("Unauthorized");
    }
    return response;
};
const canUserAccessResponse = async (authentication, response)=>{
    const survey = await (0,survey_service/* getSurvey */.Dp)(response.surveyId);
    if (!survey) return false;
    if (authentication.type === "session") {
        return await (0,environment_auth/* hasUserEnvironmentAccess */.n)(authentication.session.user.id, survey.environmentId);
    } else if (authentication.type === "apiKey") {
        return survey.environmentId === authentication.environmentId;
    } else {
        throw Error("Unknown authentication type");
    }
};
const GET = async (request, props)=>{
    const params = await props.params;
    try {
        const authentication = await (0,auth/* authenticateRequest */.b)(request);
        if (!authentication) return api_response/* responses */.n.notAuthenticatedResponse();
        const response = await fetchAndValidateResponse(authentication, params.responseId);
        if (response) {
            return api_response/* responses */.n.successResponse(response);
        }
        return api_response/* responses */.n.notFoundResponse("Response", params.responseId);
    } catch (error) {
        return (0,auth/* handleErrorResponse */.K)(error);
    }
};
const DELETE = async (request, props)=>{
    const params = await props.params;
    try {
        const authentication = await (0,auth/* authenticateRequest */.b)(request);
        if (!authentication) return api_response/* responses */.n.notAuthenticatedResponse();
        const response = await fetchAndValidateResponse(authentication, params.responseId);
        if (!response) {
            return api_response/* responses */.n.notFoundResponse("Response", params.responseId);
        }
        const deletedResponse = await (0,service/* deleteResponse */.Pv)(params.responseId);
        return api_response/* responses */.n.successResponse(deletedResponse);
    } catch (error) {
        return (0,auth/* handleErrorResponse */.K)(error);
    }
};
const PUT = async (request, props)=>{
    const params = await props.params;
    try {
        const authentication = await (0,auth/* authenticateRequest */.b)(request);
        if (!authentication) return api_response/* responses */.n.notAuthenticatedResponse();
        await fetchAndValidateResponse(authentication, params.responseId);
        let responseUpdate;
        try {
            responseUpdate = await request.json();
        } catch (error) {
            console.error(`Error parsing JSON: ${error}`);
            return api_response/* responses */.n.badRequestResponse("Malformed JSON input, please check your request body");
        }
        const inputValidation = responses/* ZResponseUpdateInput */.Pf.safeParse(responseUpdate);
        if (!inputValidation.success) {
            return api_response/* responses */.n.badRequestResponse("Fields are missing or incorrectly formatted", (0,validator/* transformErrorToDetails */.m)(inputValidation.error));
        }
        return api_response/* responses */.n.successResponse(await (0,service/* updateResponse */.rm)(params.responseId, inputValidation.data));
    } catch (error) {
        return (0,auth/* handleErrorResponse */.K)(error);
    }
};

;// ../../node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?page=%2Fapi%2Fv1%2Fmanagement%2Fresponses%2F%5BresponseId%5D%2Froute&name=app%2Fapi%2Fv1%2Fmanagement%2Fresponses%2F%5BresponseId%5D%2Froute&pagePath=private-next-app-dir%2Fapi%2Fv1%2Fmanagement%2Fresponses%2F%5BresponseId%5D%2Froute.ts&appDir=%2FUsers%2Fkdy1%2Fprojects%2Fformbricks%2Fapps%2Fweb%2Fapp&appPaths=%2Fapi%2Fv1%2Fmanagement%2Fresponses%2F%5BresponseId%5D%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=standalone&nextConfigExperimentalUseEarlyImport=&preferredRegion=&middlewareConfig=e30%3D!




// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = "standalone"
const routeModule = new module_compiled.AppRouteRouteModule({
    definition: {
        kind: route_kind.RouteKind.APP_ROUTE,
        page: "/api/v1/management/responses/[responseId]/route",
        pathname: "/api/v1/management/responses/[responseId]",
        filename: "route",
        bundlePath: "app/api/v1/management/responses/[responseId]/route"
    },
    resolvedPagePath: "/Users/kdy1/projects/formbricks/apps/web/app/api/v1/management/responses/[responseId]/route.ts",
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

/***/ 996016:
/***/ ((module) => {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function (val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isFinite(val)) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'weeks':
    case 'week':
    case 'w':
      return n * w;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (msAbs >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (msAbs >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (msAbs >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return plural(ms, msAbs, d, 'day');
  }
  if (msAbs >= h) {
    return plural(ms, msAbs, h, 'hour');
  }
  if (msAbs >= m) {
    return plural(ms, msAbs, m, 'minute');
  }
  if (msAbs >= s) {
    return plural(ms, msAbs, s, 'second');
  }
  return ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, msAbs, n, name) {
  var isPlural = msAbs >= n * 1.5;
  return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}


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

/***/ 65405:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KJ: () => (/* binding */ ZEnvironment),
/* harmony export */   fz: () => (/* binding */ ZEnvironmentUpdateInput)
/* harmony export */ });
/* unused harmony exports ZEnvironmentId, ZEnvironmentCreateInput */
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(545198);

const ZEnvironment = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    id: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().cuid2(),
    createdAt: zod__WEBPACK_IMPORTED_MODULE_0__.z.date(),
    updatedAt: zod__WEBPACK_IMPORTED_MODULE_0__.z.date(),
    type: zod__WEBPACK_IMPORTED_MODULE_0__.z.enum([
        "development",
        "production"
    ]),
    projectId: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),
    appSetupCompleted: zod__WEBPACK_IMPORTED_MODULE_0__.z.boolean()
});
const ZEnvironmentId = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    id: zod__WEBPACK_IMPORTED_MODULE_0__.z.string()
});
const ZEnvironmentUpdateInput = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    type: zod__WEBPACK_IMPORTED_MODULE_0__.z.enum([
        "development",
        "production"
    ]),
    projectId: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),
    appSetupCompleted: zod__WEBPACK_IMPORTED_MODULE_0__.z.boolean()
});
const ZEnvironmentCreateInput = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    type: zod__WEBPACK_IMPORTED_MODULE_0__.z.enum([
        "development",
        "production"
    ]).optional(),
    appSetupCompleted: zod__WEBPACK_IMPORTED_MODULE_0__.z.boolean().optional()
});


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [8079,3073,7863,5069,6626,5570,8728,9398,881,9358,3687,5863,7043,8478], () => (__webpack_exec__(141134)));
module.exports = __webpack_exports__;

})();