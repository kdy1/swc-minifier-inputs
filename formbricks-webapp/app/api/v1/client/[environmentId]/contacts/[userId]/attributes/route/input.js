"use strict";
(() => {
var exports = {};
exports.id = 1193;
exports.ids = [1193];
exports.modules = {

/***/ 896330:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 560483:
/***/ ((module) => {

module.exports = require("@prisma/client/scripts/default-index.js");

/***/ }),

/***/ 710846:
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.prod.js");

/***/ }),

/***/ 744870:
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.prod.js");

/***/ }),

/***/ 903295:
/***/ ((module) => {

module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ 529294:
/***/ ((module) => {

module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ 663033:
/***/ ((module) => {

module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ 912412:
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ 979428:
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ 455511:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 781630:
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ 55591:
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ 491645:
/***/ ((module) => {

module.exports = require("net");

/***/ }),

/***/ 321820:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 134631:
/***/ ((module) => {

module.exports = require("tls");

/***/ }),

/***/ 583997:
/***/ ((module) => {

module.exports = require("tty");

/***/ }),

/***/ 379551:
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ 328354:
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ 173566:
/***/ ((module) => {

module.exports = require("worker_threads");

/***/ }),

/***/ 504573:
/***/ ((module) => {

module.exports = require("node:buffer");

/***/ }),

/***/ 973024:
/***/ ((module) => {

module.exports = require("node:fs");

/***/ }),

/***/ 937067:
/***/ ((module) => {

module.exports = require("node:http");

/***/ }),

/***/ 344708:
/***/ ((module) => {

module.exports = require("node:https");

/***/ }),

/***/ 777030:
/***/ ((module) => {

module.exports = require("node:net");

/***/ }),

/***/ 176760:
/***/ ((module) => {

module.exports = require("node:path");

/***/ }),

/***/ 1708:
/***/ ((module) => {

module.exports = require("node:process");

/***/ }),

/***/ 157075:
/***/ ((module) => {

module.exports = require("node:stream");

/***/ }),

/***/ 337830:
/***/ ((module) => {

module.exports = require("node:stream/web");

/***/ }),

/***/ 173136:
/***/ ((module) => {

module.exports = require("node:url");

/***/ }),

/***/ 257975:
/***/ ((module) => {

module.exports = require("node:util");

/***/ }),

/***/ 638522:
/***/ ((module) => {

module.exports = require("node:zlib");

/***/ }),

/***/ 896702:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

// NAMESPACE OBJECT: ./app/api/v1/client/[environmentId]/contacts/[userId]/attributes/route.ts
var attributes_route_namespaceObject = {};
__webpack_require__.r(attributes_route_namespaceObject);
__webpack_require__.d(attributes_route_namespaceObject, {
  OPTIONS: () => (OPTIONS),
  PUT: () => (PUT)
});

// EXTERNAL MODULE: ../../node_modules/next/dist/server/route-modules/app-route/module.compiled.js
var module_compiled = __webpack_require__(831271);
// EXTERNAL MODULE: ../../node_modules/next/dist/server/route-kind.js
var route_kind = __webpack_require__(291232);
// EXTERNAL MODULE: ../../node_modules/next/dist/server/lib/patch-fetch.js
var patch_fetch = __webpack_require__(318079);
// EXTERNAL MODULE: ./app/lib/api/response.ts
var response = __webpack_require__(328779);
// EXTERNAL MODULE: ./app/lib/api/validator.ts
var validator = __webpack_require__(105032);
// EXTERNAL MODULE: ./modules/ee/contacts/lib/attributes.ts
var attributes = __webpack_require__(478845);
// EXTERNAL MODULE: ./modules/ee/license-check/lib/utils.ts + 1 modules
var utils = __webpack_require__(532077);
// EXTERNAL MODULE: ../../packages/types/errors.ts
var errors = __webpack_require__(470641);
// EXTERNAL MODULE: ../../packages/types/js.ts + 1 modules
var js = __webpack_require__(167229);
// EXTERNAL MODULE: ./lib/cache/contact.ts
var contact = __webpack_require__(180868);
// EXTERNAL MODULE: ./lib/cache/contact-attribute.ts
var contact_attribute = __webpack_require__(892865);
// EXTERNAL MODULE: ./lib/cache/contact-attribute-key.ts
var contact_attribute_key = __webpack_require__(495235);
// EXTERNAL MODULE: ../../node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js
var react = __webpack_require__(922728);
// EXTERNAL MODULE: ../../packages/database/src/index.ts + 1 modules
var src = __webpack_require__(527610);
// EXTERNAL MODULE: ../../packages/lib/cache.ts
var cache = __webpack_require__(794356);
;// ./modules/ee/contacts/api/client/[environmentId]/contacts/[userId]/attributes/lib/contact.ts






const getContactByUserIdWithAttributes = (0,react.cache)((environmentId, userId, updatedAttributes)=>(0,cache/* cache */.P)(async ()=>{
        const contact = await src/* prisma */.z.contact.findFirst({
            where: {
                environmentId,
                attributes: {
                    some: {
                        attributeKey: {
                            key: "userId",
                            environmentId
                        },
                        value: userId
                    }
                }
            },
            select: {
                id: true,
                attributes: {
                    where: {
                        attributeKey: {
                            key: {
                                in: Object.keys(updatedAttributes)
                            }
                        }
                    },
                    select: {
                        attributeKey: {
                            select: {
                                key: true
                            }
                        },
                        value: true
                    }
                }
            }
        });
        if (!contact) {
            return null;
        }
        return contact;
    }, [
        `getContactByUserIdWithAttributes-${environmentId}-${userId}-${JSON.stringify(updatedAttributes)}`
    ], {
        tags: [
            contact/* contactCache */.f.tag.byEnvironmentIdAndUserId(environmentId, userId),
            contact_attribute/* contactAttributeCache */.r.tag.byEnvironmentIdAndUserId(environmentId, userId),
            contact_attribute_key/* contactAttributeKeyCache */.E.tag.byEnvironmentId(environmentId)
        ]
    })());

;// ./modules/ee/contacts/api/client/[environmentId]/contacts/[userId]/attributes/route.ts







const OPTIONS = async ()=>{
    // cors headers
    return response/* responses */.n.successResponse({}, true);
};
const PUT = async (req, context)=>{
    try {
        const params = await context.params;
        const environmentId = params.environmentId;
        if (!environmentId) {
            return response/* responses */.n.badRequestResponse("environmentId is required", {
                environmentId
            }, true);
        }
        const userId = params.userId;
        if (!userId) {
            return response/* responses */.n.badRequestResponse("userId is required", {
                userId
            }, true);
        }
        const jsonInput = await req.json();
        const parsedInput = js/* ZJsContactsUpdateAttributeInput */.an.safeParse(jsonInput);
        if (!parsedInput.success) {
            return response/* responses */.n.badRequestResponse("Fields are missing or incorrectly formatted", (0,validator/* transformErrorToDetails */.m)(parsedInput.error), true);
        }
        // check for ee license:
        const isContactsEnabled = await (0,utils/* getIsContactsEnabled */.dZ)();
        if (!isContactsEnabled) {
            return response/* responses */.n.forbiddenResponse("User identification is only available for enterprise users.", true);
        }
        // ignore userId and id
        const { userId: userIdAttr, id: idAttr, ...updatedAttributes } = parsedInput.data.attributes;
        const contact = await getContactByUserIdWithAttributes(environmentId, userId, updatedAttributes);
        if (!contact) {
            return response/* responses */.n.notFoundResponse("contact", userId, true);
        }
        const oldAttributes = new Map(contact.attributes.map((attr)=>[
                attr.attributeKey.key,
                attr.value
            ]));
        let isUpToDate = true;
        for (const [key, value] of Object.entries(updatedAttributes)){
            if (value !== oldAttributes.get(key)) {
                isUpToDate = false;
                break;
            }
        }
        if (isUpToDate) {
            return response/* responses */.n.successResponse({
                changed: false,
                message: "No updates were necessary; the person is already up to date."
            }, true);
        }
        const { messages } = await (0,attributes/* updateAttributes */.F)(contact.id, userId, environmentId, updatedAttributes);
        return response/* responses */.n.successResponse({
            changed: true,
            message: "The person was successfully updated.",
            ...messages && messages.length > 0 ? {
                messages
            } : {}
        }, true);
    } catch (err) {
        console.error(err);
        if (err.statusCode === 403) {
            return response/* responses */.n.forbiddenResponse(err.message || "Forbidden", true, {
                ignore: true
            });
        }
        if (err instanceof errors/* ResourceNotFoundError */.CE) {
            return response/* responses */.n.notFoundResponse(err.resourceType, err.resourceId, true);
        }
        return response/* responses */.n.internalServerErrorResponse("Something went wrong", true);
    }
};

;// ./app/api/v1/client/[environmentId]/contacts/[userId]/attributes/route.ts



;// ../../node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?page=%2Fapi%2Fv1%2Fclient%2F%5BenvironmentId%5D%2Fcontacts%2F%5BuserId%5D%2Fattributes%2Froute&name=app%2Fapi%2Fv1%2Fclient%2F%5BenvironmentId%5D%2Fcontacts%2F%5BuserId%5D%2Fattributes%2Froute&pagePath=private-next-app-dir%2Fapi%2Fv1%2Fclient%2F%5BenvironmentId%5D%2Fcontacts%2F%5BuserId%5D%2Fattributes%2Froute.ts&appDir=%2FUsers%2Fkdy1%2Fprojects%2Fformbricks%2Fapps%2Fweb%2Fapp&appPaths=%2Fapi%2Fv1%2Fclient%2F%5BenvironmentId%5D%2Fcontacts%2F%5BuserId%5D%2Fattributes%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=standalone&nextConfigExperimentalUseEarlyImport=&preferredRegion=&middlewareConfig=e30%3D!




// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = "standalone"
const routeModule = new module_compiled.AppRouteRouteModule({
    definition: {
        kind: route_kind.RouteKind.APP_ROUTE,
        page: "/api/v1/client/[environmentId]/contacts/[userId]/attributes/route",
        pathname: "/api/v1/client/[environmentId]/contacts/[userId]/attributes",
        filename: "route",
        bundlePath: "app/api/v1/client/[environmentId]/contacts/[userId]/attributes/route"
    },
    resolvedPagePath: "/Users/kdy1/projects/formbricks/apps/web/app/api/v1/client/[environmentId]/contacts/[userId]/attributes/route.ts",
    nextConfigOutput,
    userland: attributes_route_namespaceObject
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

/***/ 892865:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ contactAttributeCache)
/* harmony export */ });
/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87863);
/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_cache__WEBPACK_IMPORTED_MODULE_0__);

const contactAttributeCache = {
    tag: {
        byContactId (contactId) {
            return `contact-${contactId}-contactAttributes`;
        },
        byEnvironmentIdAndUserId (environmentId, userId) {
            return `environments-${environmentId}-contact-userId-${userId}-contactAttributes`;
        },
        byKeyAndContactId (key, contactId) {
            return `contact-${contactId}-contactAttribute-${key}`;
        },
        byEnvironmentId (environmentId) {
            return `contactAttributes-${environmentId}`;
        }
    },
    revalidate: ({ contactId, environmentId, userId, key })=>{
        if (environmentId) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(contactAttributeCache.tag.byEnvironmentId(environmentId));
        }
        if (environmentId && userId) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(contactAttributeCache.tag.byEnvironmentIdAndUserId(environmentId, userId));
        }
        if (contactId) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(contactAttributeCache.tag.byContactId(contactId));
        }
        if (contactId && key) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(contactAttributeCache.tag.byKeyAndContactId(key, contactId));
        }
    }
};


/***/ }),

/***/ 180868:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ contactCache)
/* harmony export */ });
/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87863);
/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_cache__WEBPACK_IMPORTED_MODULE_0__);

const contactCache = {
    tag: {
        byId (id) {
            return `contacts-${id}`;
        },
        byEnvironmentId (environmentId) {
            return `environments-${environmentId}-contacts`;
        },
        byEnvironmentIdAndUserId (environmentId, userId) {
            return `environments-${environmentId}-contactByUserId-${userId}`;
        }
    },
    revalidate: ({ id, environmentId, userId })=>{
        if (id) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(contactCache.tag.byId(id));
        }
        if (environmentId) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(contactCache.tag.byEnvironmentId(environmentId));
        }
        if (environmentId && userId) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(contactCache.tag.byEnvironmentIdAndUserId(environmentId, userId));
        }
    }
};


/***/ }),

/***/ 527610:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


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

/***/ 794356:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 162437:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 860988:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 733735:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
var __webpack_require__ = require("../../../../../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [8079,3073,7863,5069,5570,1238,9069,7762,5863,6483,5617], () => (__webpack_exec__(896702)));
module.exports = __webpack_exports__;

})();