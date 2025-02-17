"use strict";
(() => {
var exports = {};
exports.id = 120;
exports.ids = [120];
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

/***/ 684587:
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

// NAMESPACE OBJECT: ./app/api/v1/management/contact-attribute-keys/route.ts
var contact_attribute_keys_route_namespaceObject = {};
__webpack_require__.r(contact_attribute_keys_route_namespaceObject);
__webpack_require__.d(contact_attribute_keys_route_namespaceObject, {
  GET: () => (GET),
  POST: () => (POST)
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
// EXTERNAL MODULE: ./modules/ee/license-check/lib/utils.ts + 1 modules
var utils = __webpack_require__(532077);
// EXTERNAL MODULE: ../../packages/types/errors.ts
var errors = __webpack_require__(470641);
// EXTERNAL MODULE: ./modules/ee/contacts/api/management/contact-attribute-keys/[contactAttributeKeyId]/types/contact-attribute-keys.ts
var contact_attribute_keys = __webpack_require__(146943);
// EXTERNAL MODULE: ./lib/cache/contact-attribute-key.ts
var contact_attribute_key = __webpack_require__(495235);
// EXTERNAL MODULE: external "@prisma/client"
var client_ = __webpack_require__(896330);
// EXTERNAL MODULE: ../../node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js
var react = __webpack_require__(922728);
// EXTERNAL MODULE: ../../packages/database/src/index.ts + 1 modules
var src = __webpack_require__(527610);
// EXTERNAL MODULE: ../../packages/lib/cache.ts
var cache = __webpack_require__(794356);
// EXTERNAL MODULE: ../../packages/lib/constants.ts
var constants = __webpack_require__(836919);
// EXTERNAL MODULE: ../../packages/lib/utils/validate.ts
var validate = __webpack_require__(860988);
// EXTERNAL MODULE: ../../packages/types/common.ts
var common = __webpack_require__(733735);
// EXTERNAL MODULE: ../../node_modules/zod/lib/index.mjs
var lib = __webpack_require__(545198);
;// ../../packages/types/contact-attribute-key.ts

const ZContactAttributeKeyType = lib.z.enum([
    "default",
    "custom"
]);
const ZContactAttributeKey = lib.z.object({
    id: lib.z.string().cuid2(),
    createdAt: lib.z.date(),
    updatedAt: lib.z.date(),
    isUnique: lib.z.boolean().default(false),
    key: lib.z.string(),
    name: lib.z.string().nullable(),
    description: lib.z.string().nullable(),
    type: ZContactAttributeKeyType,
    environmentId: lib.z.string()
});

;// ./modules/ee/contacts/api/management/contact-attribute-keys/lib/contact-attribute-keys.ts










const getContactAttributeKeys = (0,react.cache)((environmentId)=>(0,cache/* cache */.P)(async ()=>{
        try {
            const contactAttributeKeys = await src/* prisma */.z.contactAttributeKey.findMany({
                where: {
                    environmentId
                }
            });
            return contactAttributeKeys;
        } catch (error) {
            if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
                throw new errors/* DatabaseError */.a$(error.message);
            }
            throw error;
        }
    }, [
        `getContactAttributeKeys-attribute-keys-management-api-${environmentId}`
    ], {
        tags: [
            contact_attribute_key/* contactAttributeKeyCache */.E.tag.byEnvironmentId(environmentId)
        ]
    })());
const createContactAttributeKey = async (environmentId, key, type)=>{
    (0,validate/* validateInputs */.C)([
        environmentId,
        common/* ZId */.i4
    ], [
        name,
        common/* ZString */.eI
    ], [
        type,
        ZContactAttributeKeyType
    ]);
    const contactAttributeKeysCount = await src/* prisma */.z.contactAttributeKey.count({
        where: {
            environmentId
        }
    });
    if (contactAttributeKeysCount >= constants/* MAX_ATTRIBUTE_CLASSES_PER_ENVIRONMENT */.LO) {
        throw new errors/* OperationNotAllowedError */.J4(`Maximum number of attribute classes (${constants/* MAX_ATTRIBUTE_CLASSES_PER_ENVIRONMENT */.LO}) reached for environment ${environmentId}`);
    }
    try {
        const contactAttributeKey = await src/* prisma */.z.contactAttributeKey.create({
            data: {
                key,
                name: key,
                type,
                environment: {
                    connect: {
                        id: environmentId
                    }
                }
            }
        });
        contact_attribute_key/* contactAttributeKeyCache */.E.revalidate({
            id: contactAttributeKey.id,
            environmentId: contactAttributeKey.environmentId,
            key: contactAttributeKey.key
        });
        return contactAttributeKey;
    } catch (error) {
        if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
            throw new errors/* DatabaseError */.a$(error.message);
        }
        throw error;
    }
};

;// ./modules/ee/contacts/api/management/contact-attribute-keys/route.ts







const GET = async (request)=>{
    try {
        const authentication = await (0,auth/* authenticateRequest */.b)(request);
        if (!authentication) return response/* responses */.n.notAuthenticatedResponse();
        const isContactsEnabled = await (0,utils/* getIsContactsEnabled */.dZ)();
        if (!isContactsEnabled) {
            return response/* responses */.n.forbiddenResponse("Contacts are only enabled for Enterprise Edition, please upgrade.");
        }
        const contactAttributeKeys = await getContactAttributeKeys(authentication.environmentId);
        return response/* responses */.n.successResponse(contactAttributeKeys);
    } catch (error) {
        if (error instanceof errors/* DatabaseError */.a$) {
            return response/* responses */.n.badRequestResponse(error.message);
        }
        throw error;
    }
};
const POST = async (request)=>{
    try {
        const authentication = await (0,auth/* authenticateRequest */.b)(request);
        if (!authentication) return response/* responses */.n.notAuthenticatedResponse();
        const isContactsEnabled = await (0,utils/* getIsContactsEnabled */.dZ)();
        if (!isContactsEnabled) {
            return response/* responses */.n.forbiddenResponse("Contacts are only enabled for Enterprise Edition, please upgrade.");
        }
        let contactAttibuteKeyInput;
        try {
            contactAttibuteKeyInput = await request.json();
        } catch (error) {
            console.error(`Error parsing JSON input: ${error}`);
            return response/* responses */.n.badRequestResponse("Malformed JSON input, please check your request body");
        }
        const inputValidation = contact_attribute_keys/* ZContactAttributeKeyCreateInput */.a.safeParse(contactAttibuteKeyInput);
        if (!inputValidation.success) {
            return response/* responses */.n.badRequestResponse("Fields are missing or incorrectly formatted", (0,validator/* transformErrorToDetails */.m)(inputValidation.error), true);
        }
        const contactAttributeKey = await createContactAttributeKey(authentication.environmentId, inputValidation.data.key, inputValidation.data.type);
        if (!contactAttributeKey) {
            return response/* responses */.n.internalServerErrorResponse("Failed creating attribute class");
        }
        return response/* responses */.n.successResponse(contactAttributeKey);
    } catch (error) {
        if (error instanceof errors/* DatabaseError */.a$) {
            return response/* responses */.n.badRequestResponse(error.message);
        }
        throw error;
    }
};

;// ./app/api/v1/management/contact-attribute-keys/route.ts



;// ../../node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?page=%2Fapi%2Fv1%2Fmanagement%2Fcontact-attribute-keys%2Froute&name=app%2Fapi%2Fv1%2Fmanagement%2Fcontact-attribute-keys%2Froute&pagePath=private-next-app-dir%2Fapi%2Fv1%2Fmanagement%2Fcontact-attribute-keys%2Froute.ts&appDir=%2FUsers%2Fkdy1%2Fprojects%2Fformbricks%2Fapps%2Fweb%2Fapp&appPaths=%2Fapi%2Fv1%2Fmanagement%2Fcontact-attribute-keys%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=standalone&nextConfigExperimentalUseEarlyImport=&preferredRegion=&middlewareConfig=e30%3D!




// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = "standalone"
const routeModule = new module_compiled.AppRouteRouteModule({
    definition: {
        kind: route_kind.RouteKind.APP_ROUTE,
        page: "/api/v1/management/contact-attribute-keys/route",
        pathname: "/api/v1/management/contact-attribute-keys",
        filename: "route",
        bundlePath: "app/api/v1/management/contact-attribute-keys/route"
    },
    resolvedPagePath: "/Users/kdy1/projects/formbricks/apps/web/app/api/v1/management/contact-attribute-keys/route.ts",
    nextConfigOutput,
    userland: contact_attribute_keys_route_namespaceObject
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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [8079,3073,7863,5069,5570,1238,9069,7762,1230], () => (__webpack_exec__(684587)));
module.exports = __webpack_exports__;

})();