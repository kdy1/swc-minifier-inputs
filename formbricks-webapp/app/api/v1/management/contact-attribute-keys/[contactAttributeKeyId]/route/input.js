"use strict";
(() => {
var exports = {};
exports.id = 2113;
exports.ids = [2113];
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

/***/ 798997:
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

// NAMESPACE OBJECT: ./app/api/v1/management/contact-attribute-keys/[contactAttributeKeyId]/route.ts
var _contactAttributeKeyId_route_namespaceObject = {};
__webpack_require__.r(_contactAttributeKeyId_route_namespaceObject);
__webpack_require__.d(_contactAttributeKeyId_route_namespaceObject, {
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
// EXTERNAL MODULE: ./modules/ee/license-check/lib/utils.ts + 1 modules
var utils = __webpack_require__(532077);
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
// EXTERNAL MODULE: ../../packages/lib/utils/validate.ts
var validate = __webpack_require__(860988);
// EXTERNAL MODULE: ../../packages/types/common.ts
var common = __webpack_require__(733735);
// EXTERNAL MODULE: ../../packages/types/errors.ts
var errors = __webpack_require__(470641);
// EXTERNAL MODULE: ./modules/ee/contacts/api/management/contact-attribute-keys/[contactAttributeKeyId]/types/contact-attribute-keys.ts
var contact_attribute_keys = __webpack_require__(146943);
;// ./modules/ee/contacts/api/management/contact-attribute-keys/[contactAttributeKeyId]/lib/contact-attribute-key.ts











const getContactAttributeKey = (0,react.cache)((contactAttributeKeyId)=>(0,cache/* cache */.P)(async ()=>{
        try {
            const contactAttributeKey = await src/* prisma */.z.contactAttributeKey.findUnique({
                where: {
                    id: contactAttributeKeyId
                }
            });
            return contactAttributeKey;
        } catch (error) {
            if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
                throw new errors/* DatabaseError */.a$(error.message);
            }
            throw error;
        }
    }, [
        `getContactAttributeKey-attribute-keys-management-api-${contactAttributeKeyId}`
    ], {
        tags: [
            contact_attribute_key/* contactAttributeKeyCache */.E.tag.byId(contactAttributeKeyId)
        ]
    })());
const createContactAttributeKey = async (environmentId, key, type)=>{
    validateInputs([
        environmentId,
        ZId
    ], [
        name,
        ZString
    ], [
        type,
        ZContactAttributeKeyType
    ]);
    const contactAttributeKeysCount = await prisma.contactAttributeKey.count({
        where: {
            environmentId
        }
    });
    if (contactAttributeKeysCount >= MAX_ATTRIBUTE_CLASSES_PER_ENVIRONMENT) {
        throw new OperationNotAllowedError(`Maximum number of attribute classes (${MAX_ATTRIBUTE_CLASSES_PER_ENVIRONMENT}) reached for environment ${environmentId}`);
    }
    try {
        const contactAttributeKey = await prisma.contactAttributeKey.create({
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
        contactAttributeKeyCache.revalidate({
            id: contactAttributeKey.id,
            environmentId: contactAttributeKey.environmentId,
            key: contactAttributeKey.key
        });
        return contactAttributeKey;
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            throw new DatabaseError(error.message);
        }
        throw error;
    }
};
const deleteContactAttributeKey = async (contactAttributeKeyId)=>{
    (0,validate/* validateInputs */.C)([
        contactAttributeKeyId,
        common/* ZId */.i4
    ]);
    try {
        const deletedContactAttributeKey = await src/* prisma */.z.contactAttributeKey.delete({
            where: {
                id: contactAttributeKeyId
            }
        });
        contact_attribute_key/* contactAttributeKeyCache */.E.revalidate({
            id: deletedContactAttributeKey.id,
            environmentId: deletedContactAttributeKey.environmentId,
            key: deletedContactAttributeKey.key
        });
        return deletedContactAttributeKey;
    } catch (error) {
        if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
            throw new errors/* DatabaseError */.a$(error.message);
        }
        throw error;
    }
};
const updateContactAttributeKey = async (contactAttributeKeyId, data)=>{
    (0,validate/* validateInputs */.C)([
        contactAttributeKeyId,
        common/* ZId */.i4
    ], [
        data,
        contact_attribute_keys/* ZContactAttributeKeyUpdateInput */.p
    ]);
    try {
        const contactAttributeKey = await src/* prisma */.z.contactAttributeKey.update({
            where: {
                id: contactAttributeKeyId
            },
            data: {
                description: data.description
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

;// ./modules/ee/contacts/api/management/contact-attribute-keys/[contactAttributeKeyId]/route.ts






const fetchAndAuthorizeContactAttributeKey = async (authentication, contactAttributeKeyId)=>{
    const contactAttributeKey = await getContactAttributeKey(contactAttributeKeyId);
    if (!contactAttributeKey) {
        return null;
    }
    if (contactAttributeKey.environmentId !== authentication.environmentId) {
        throw new Error("Unauthorized");
    }
    return contactAttributeKey;
};
const GET = async (request, { params: paramsPromise })=>{
    try {
        const params = await paramsPromise;
        const authentication = await (0,auth/* authenticateRequest */.b)(request);
        if (!authentication) return response/* responses */.n.notAuthenticatedResponse();
        const isContactsEnabled = await (0,utils/* getIsContactsEnabled */.dZ)();
        if (!isContactsEnabled) {
            return response/* responses */.n.forbiddenResponse("Contacts are only enabled for Enterprise Edition, please upgrade.");
        }
        const contactAttributeKey = await fetchAndAuthorizeContactAttributeKey(authentication, params.contactAttributeKeyId);
        if (contactAttributeKey) {
            return response/* responses */.n.successResponse(contactAttributeKey);
        }
        return response/* responses */.n.notFoundResponse("Contact Attribute Key", params.contactAttributeKeyId);
    } catch (error) {
        return (0,auth/* handleErrorResponse */.K)(error);
    }
};
const DELETE = async (request, { params: paramsPromise })=>{
    try {
        const params = await paramsPromise;
        const authentication = await (0,auth/* authenticateRequest */.b)(request);
        if (!authentication) return response/* responses */.n.notAuthenticatedResponse();
        const isContactsEnabled = await (0,utils/* getIsContactsEnabled */.dZ)();
        if (!isContactsEnabled) {
            return response/* responses */.n.forbiddenResponse("Contacts are only enabled for Enterprise Edition, please upgrade.");
        }
        const contactAttributeKey = await fetchAndAuthorizeContactAttributeKey(authentication, params.contactAttributeKeyId);
        if (!contactAttributeKey) {
            return response/* responses */.n.notFoundResponse("Contact Attribute Key", params.contactAttributeKeyId);
        }
        if (contactAttributeKey.type === "default") {
            return response/* responses */.n.badRequestResponse("Default Contact Attribute Keys cannot be deleted");
        }
        const deletedContactAttributeKey = await deleteContactAttributeKey(params.contactAttributeKeyId);
        return response/* responses */.n.successResponse(deletedContactAttributeKey);
    } catch (error) {
        return (0,auth/* handleErrorResponse */.K)(error);
    }
};
const PUT = async (request, { params: paramsPromise })=>{
    try {
        const params = await paramsPromise;
        const authentication = await (0,auth/* authenticateRequest */.b)(request);
        if (!authentication) return response/* responses */.n.notAuthenticatedResponse();
        const isContactsEnabled = await (0,utils/* getIsContactsEnabled */.dZ)();
        if (!isContactsEnabled) {
            return response/* responses */.n.forbiddenResponse("Contacts are only enabled for Enterprise Edition, please upgrade.");
        }
        const contactAttributeKey = await fetchAndAuthorizeContactAttributeKey(authentication, params.contactAttributeKeyId);
        if (!contactAttributeKey) {
            return response/* responses */.n.notFoundResponse("Contact Attribute Key", params.contactAttributeKeyId);
        }
        let contactAttributeKeyUpdate;
        try {
            contactAttributeKeyUpdate = await request.json();
        } catch (error) {
            console.error(`Error parsing JSON input: ${error}`);
            return response/* responses */.n.badRequestResponse("Malformed JSON input, please check your request body");
        }
        const inputValidation = contact_attribute_keys/* ZContactAttributeKeyUpdateInput */.p.safeParse(contactAttributeKeyUpdate);
        if (!inputValidation.success) {
            return response/* responses */.n.badRequestResponse("Fields are missing or incorrectly formatted", (0,validator/* transformErrorToDetails */.m)(inputValidation.error));
        }
        const updatedAttributeClass = await updateContactAttributeKey(params.contactAttributeKeyId, inputValidation.data);
        if (updatedAttributeClass) {
            return response/* responses */.n.successResponse(updatedAttributeClass);
        }
        return response/* responses */.n.internalServerErrorResponse("Some error ocured while updating action");
    } catch (error) {
        return (0,auth/* handleErrorResponse */.K)(error);
    }
};

;// ./app/api/v1/management/contact-attribute-keys/[contactAttributeKeyId]/route.ts



;// ../../node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?page=%2Fapi%2Fv1%2Fmanagement%2Fcontact-attribute-keys%2F%5BcontactAttributeKeyId%5D%2Froute&name=app%2Fapi%2Fv1%2Fmanagement%2Fcontact-attribute-keys%2F%5BcontactAttributeKeyId%5D%2Froute&pagePath=private-next-app-dir%2Fapi%2Fv1%2Fmanagement%2Fcontact-attribute-keys%2F%5BcontactAttributeKeyId%5D%2Froute.ts&appDir=%2FUsers%2Fkdy1%2Fprojects%2Fformbricks%2Fapps%2Fweb%2Fapp&appPaths=%2Fapi%2Fv1%2Fmanagement%2Fcontact-attribute-keys%2F%5BcontactAttributeKeyId%5D%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=standalone&nextConfigExperimentalUseEarlyImport=&preferredRegion=&middlewareConfig=e30%3D!




// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = "standalone"
const routeModule = new module_compiled.AppRouteRouteModule({
    definition: {
        kind: route_kind.RouteKind.APP_ROUTE,
        page: "/api/v1/management/contact-attribute-keys/[contactAttributeKeyId]/route",
        pathname: "/api/v1/management/contact-attribute-keys/[contactAttributeKeyId]",
        filename: "route",
        bundlePath: "app/api/v1/management/contact-attribute-keys/[contactAttributeKeyId]/route"
    },
    resolvedPagePath: "/Users/kdy1/projects/formbricks/apps/web/app/api/v1/management/contact-attribute-keys/[contactAttributeKeyId]/route.ts",
    nextConfigOutput,
    userland: _contactAttributeKeyId_route_namespaceObject
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
var __webpack_require__ = require("../../../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [8079,3073,7863,5069,5570,1238,9069,7762,1230], () => (__webpack_exec__(798997)));
module.exports = __webpack_exports__;

})();