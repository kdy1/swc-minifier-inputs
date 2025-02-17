"use strict";
(() => {
var exports = {};
exports.id = 3028;
exports.ids = [3028];
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

/***/ 977598:
/***/ ((module) => {

module.exports = require("node:crypto");

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

/***/ 472366:
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

// NAMESPACE OBJECT: ./app/api/v1/client/[environmentId]/identify/contacts/[userId]/route.ts
var _userId_route_namespaceObject = {};
__webpack_require__.r(_userId_route_namespaceObject);
__webpack_require__.d(_userId_route_namespaceObject, {
  GET: () => (GET),
  OPTIONS: () => (OPTIONS)
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
// EXTERNAL MODULE: ./lib/cache/contact.ts
var contact = __webpack_require__(180868);
// EXTERNAL MODULE: ./modules/ee/license-check/lib/utils.ts + 1 modules
var utils = __webpack_require__(532077);
// EXTERNAL MODULE: ../../node_modules/next/dist/api/server.js
var server = __webpack_require__(861238);
// EXTERNAL MODULE: ../../packages/types/errors.ts
var errors = __webpack_require__(470641);
// EXTERNAL MODULE: ../../packages/types/js.ts + 1 modules
var js = __webpack_require__(167229);
// EXTERNAL MODULE: ./lib/cache/contact-attribute.ts
var contact_attribute = __webpack_require__(892865);
// EXTERNAL MODULE: ../../node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js
var react = __webpack_require__(922728);
// EXTERNAL MODULE: ../../packages/database/src/index.ts + 1 modules
var src = __webpack_require__(527610);
// EXTERNAL MODULE: ../../packages/lib/cache.ts
var cache = __webpack_require__(794356);
;// ./modules/ee/contacts/api/client/[environmentId]/identify/contacts/[userId]/lib/contact.ts




const getContactByUserId = (0,react.cache)((environmentId, userId)=>(0,cache/* cache */.P)(async ()=>{
        const contact = await src/* prisma */.z.contact.findFirst({
            where: {
                attributes: {
                    some: {
                        attributeKey: {
                            key: "userId",
                            environmentId
                        },
                        value: userId
                    }
                }
            }
        });
        if (!contact) {
            return null;
        }
        return contact;
    }, [
        `getContactByUserId-${environmentId}-${userId}`
    ], {
        tags: [
            contact/* contactCache */.f.tag.byEnvironmentIdAndUserId(environmentId, userId)
        ]
    })());

// EXTERNAL MODULE: ../../packages/lib/cache/segment.ts
var segment = __webpack_require__(337386);
// EXTERNAL MODULE: ../../packages/lib/constants.ts
var constants = __webpack_require__(836919);
// EXTERNAL MODULE: ../../packages/lib/display/cache.ts
var display_cache = __webpack_require__(765501);
// EXTERNAL MODULE: ../../packages/lib/environment/cache.ts
var environment_cache = __webpack_require__(488734);
// EXTERNAL MODULE: ../../packages/lib/environment/service.ts
var service = __webpack_require__(32135);
// EXTERNAL MODULE: ../../packages/lib/organization/cache.ts
var organization_cache = __webpack_require__(530190);
// EXTERNAL MODULE: ../../packages/lib/organization/service.ts
var organization_service = __webpack_require__(353687);
// EXTERNAL MODULE: ../../packages/lib/response/cache.ts
var response_cache = __webpack_require__(122522);
// EXTERNAL MODULE: ../../packages/lib/utils/validate.ts
var validate = __webpack_require__(860988);
// EXTERNAL MODULE: ../../packages/types/common.ts
var common = __webpack_require__(733735);
;// ./modules/ee/contacts/api/client/[environmentId]/identify/contacts/[userId]/lib/attributes.ts






const getContactAttributes = (0,react.cache)((contactId)=>(0,cache/* cache */.P)(async ()=>{
        (0,validate/* validateInputs */.C)([
            contactId,
            common/* ZId */.i4
        ]);
        const contactAttributes = await src/* prisma */.z.contactAttribute.findMany({
            where: {
                contactId
            },
            select: {
                attributeKey: {
                    select: {
                        key: true
                    }
                },
                value: true
            }
        });
        const transformedContactAttributes = contactAttributes.reduce((acc, attr)=>{
            acc[attr.attributeKey.key] = attr.value;
            return acc;
        }, {});
        return transformedContactAttributes;
    }, [
        `getContactAttrubutes-contactId-${contactId}`
    ], {
        tags: [
            contact_attribute/* contactAttributeCache */.r.tag.byContactId(contactId)
        ]
    })());

// EXTERNAL MODULE: ./modules/ee/contacts/segments/lib/segments.ts + 1 modules
var lib_segments = __webpack_require__(927627);
// EXTERNAL MODULE: external "@prisma/client"
var client_ = __webpack_require__(896330);
;// ./modules/ee/contacts/api/client/[environmentId]/identify/contacts/[userId]/lib/segments.ts











const getSegments = (0,react.cache)((environmentId)=>(0,cache/* cache */.P)(async ()=>{
        try {
            return src/* prisma */.z.segment.findMany({
                where: {
                    environmentId
                },
                select: {
                    id: true,
                    filters: true
                }
            });
        } catch (error) {
            if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
                throw new errors/* DatabaseError */.a$(error.message);
            }
            throw error;
        }
    }, [
        `getSegments-environmentId-${environmentId}`
    ], {
        tags: [
            segment/* segmentCache */.C.tag.byEnvironmentId(environmentId)
        ]
    })());
const getPersonSegmentIds = (environmentId, contactId, contactUserId, deviceType)=>(0,cache/* cache */.P)(async ()=>{
        (0,validate/* validateInputs */.C)([
            environmentId,
            common/* ZId */.i4
        ], [
            contactId,
            common/* ZId */.i4
        ], [
            contactUserId,
            common/* ZString */.eI
        ]);
        const segments = await getSegments(environmentId);
        // fast path; if there are no segments, return an empty array
        if (!segments) {
            return [];
        }
        const contactAttributes = await getContactAttributes(contactId);
        const personSegments = [];
        for (const segment of segments){
            const isIncluded = await (0,lib_segments/* evaluateSegment */.xF)({
                attributes: contactAttributes,
                deviceType,
                environmentId,
                contactId: contactId,
                userId: contactUserId
            }, segment.filters);
            if (isIncluded) {
                personSegments.push(segment);
            }
        }
        return personSegments.map((segment)=>segment.id);
    }, [
        `getPersonSegmentIds-${environmentId}-${contactId}-${deviceType}`
    ], {
        tags: [
            segment/* segmentCache */.C.tag.byEnvironmentId(environmentId),
            contact_attribute/* contactAttributeCache */.r.tag.byContactId(contactId)
        ]
    })();

;// ./modules/ee/contacts/api/client/[environmentId]/identify/contacts/[userId]/lib/personState.ts















/**
 *
 * @param environmentId - The environment id
 * @param userId - The user id
 * @param device - The device type
 * @returns The person state
 * @throws {ValidationError} - If the input is invalid
 * @throws {ResourceNotFoundError} - If the environment or organization is not found
 */ const getPersonState = async ({ environmentId, userId, device })=>(0,cache/* cache */.P)(async ()=>{
        let revalidatePerson = false;
        const environment = await (0,service/* getEnvironment */.uc)(environmentId);
        if (!environment) {
            throw new errors/* ResourceNotFoundError */.CE(`environment`, environmentId);
        }
        const organization = await (0,organization_service/* getOrganizationByEnvironmentId */.TK)(environmentId);
        if (!organization) {
            throw new errors/* ResourceNotFoundError */.CE(`organization`, environmentId);
        }
        let contact = await getContactByUserId(environmentId, userId);
        if (!contact) {
            contact = await src/* prisma */.z.contact.create({
                data: {
                    environment: {
                        connect: {
                            id: environmentId
                        }
                    },
                    attributes: {
                        create: [
                            {
                                attributeKey: {
                                    connect: {
                                        key_environmentId: {
                                            key: "userId",
                                            environmentId
                                        }
                                    }
                                },
                                value: userId
                            }
                        ]
                    }
                }
            });
            revalidatePerson = true;
        }
        const contactResponses = await src/* prisma */.z.response.findMany({
            where: {
                contactId: contact.id
            },
            select: {
                surveyId: true
            }
        });
        const contactDisplayes = await src/* prisma */.z.display.findMany({
            where: {
                contactId: contact.id
            },
            select: {
                surveyId: true,
                createdAt: true
            }
        });
        const segments = await getPersonSegmentIds(environmentId, contact.id, userId, device);
        // If the person exists, return the persons's state
        const userState = {
            userId,
            segments,
            displays: contactDisplayes?.map((display)=>({
                    surveyId: display.surveyId,
                    createdAt: display.createdAt
                })) ?? [],
            responses: contactResponses?.map((response)=>response.surveyId) ?? [],
            lastDisplayAt: contactDisplayes.length > 0 ? contactDisplayes.sort((a, b)=>b.createdAt.getTime() - a.createdAt.getTime())[0].createdAt : null
        };
        return {
            state: userState,
            revalidateProps: revalidatePerson ? {
                contactId: contact.id,
                revalidate: true
            } : undefined
        };
    }, [
        `personState-${environmentId}-${userId}-${device}`
    ], {
        ...constants/* IS_FORMBRICKS_CLOUD */.Si && {
            revalidate: 24 * 60 * 60
        },
        tags: [
            environment_cache/* environmentCache */.e.tag.byId(environmentId),
            organization_cache/* organizationCache */.S.tag.byEnvironmentId(environmentId),
            contact/* contactCache */.f.tag.byEnvironmentIdAndUserId(environmentId, userId),
            contact_attribute/* contactAttributeCache */.r.tag.byEnvironmentIdAndUserId(environmentId, userId),
            display_cache/* displayCache */.x.tag.byEnvironmentIdAndUserId(environmentId, userId),
            response_cache/* responseCache */.Q.tag.byEnvironmentIdAndUserId(environmentId, userId),
            segment/* segmentCache */.C.tag.byEnvironmentId(environmentId)
        ]
    })();

;// ./modules/ee/contacts/api/client/[environmentId]/identify/contacts/[userId]/route.ts








const OPTIONS = async ()=>{
    return response/* responses */.n.successResponse({}, true);
};
const GET = async (request, props)=>{
    const params = await props.params;
    try {
        const { environmentId, userId } = params;
        // Validate input
        const syncInputValidation = js/* ZJsUserIdentifyInput */.$U.safeParse({
            environmentId,
            userId
        });
        if (!syncInputValidation.success) {
            return response/* responses */.n.badRequestResponse("Fields are missing or incorrectly formatted", (0,validator/* transformErrorToDetails */.m)(syncInputValidation.error), true);
        }
        const isContactsEnabled = await (0,utils/* getIsContactsEnabled */.dZ)();
        if (!isContactsEnabled) {
            return response/* responses */.n.forbiddenResponse("User identification is only available for enterprise users.", true);
        }
        const { device } = (0,server.userAgent)(request);
        const deviceType = device ? "phone" : "desktop";
        try {
            const personState = await getPersonState({
                environmentId,
                userId,
                device: deviceType
            });
            if (personState.revalidateProps?.revalidate) {
                contact/* contactCache */.f.revalidate({
                    environmentId,
                    userId,
                    id: personState.revalidateProps.contactId
                });
            }
            return response/* responses */.n.successResponse(personState.state, true);
        } catch (err) {
            if (err instanceof errors/* ResourceNotFoundError */.CE) {
                return response/* responses */.n.notFoundResponse(err.resourceType, err.resourceId);
            }
            console.error(err);
            return response/* responses */.n.internalServerErrorResponse(err.message ?? "Unable to fetch person state", true);
        }
    } catch (error) {
        console.error(error);
        return response/* responses */.n.internalServerErrorResponse(`Unable to complete response: ${error.message}`, true);
    }
};

;// ./app/api/v1/client/[environmentId]/identify/contacts/[userId]/route.ts



;// ../../node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?page=%2Fapi%2Fv1%2Fclient%2F%5BenvironmentId%5D%2Fidentify%2Fcontacts%2F%5BuserId%5D%2Froute&name=app%2Fapi%2Fv1%2Fclient%2F%5BenvironmentId%5D%2Fidentify%2Fcontacts%2F%5BuserId%5D%2Froute&pagePath=private-next-app-dir%2Fapi%2Fv1%2Fclient%2F%5BenvironmentId%5D%2Fidentify%2Fcontacts%2F%5BuserId%5D%2Froute.ts&appDir=%2FUsers%2Fkdy1%2Fprojects%2Fformbricks%2Fapps%2Fweb%2Fapp&appPaths=%2Fapi%2Fv1%2Fclient%2F%5BenvironmentId%5D%2Fidentify%2Fcontacts%2F%5BuserId%5D%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=standalone&nextConfigExperimentalUseEarlyImport=&preferredRegion=&middlewareConfig=e30%3D!




// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = "standalone"
const routeModule = new module_compiled.AppRouteRouteModule({
    definition: {
        kind: route_kind.RouteKind.APP_ROUTE,
        page: "/api/v1/client/[environmentId]/identify/contacts/[userId]/route",
        pathname: "/api/v1/client/[environmentId]/identify/contacts/[userId]",
        filename: "route",
        bundlePath: "app/api/v1/client/[environmentId]/identify/contacts/[userId]/route"
    },
    resolvedPagePath: "/Users/kdy1/projects/formbricks/apps/web/app/api/v1/client/[environmentId]/identify/contacts/[userId]/route.ts",
    nextConfigOutput,
    userland: _userId_route_namespaceObject
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

/***/ 532077:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


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

/***/ 883367:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


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
    describeHasCheckingStringProperty: function() {
        return describeHasCheckingStringProperty;
    },
    describeStringPropertyAccess: function() {
        return describeStringPropertyAccess;
    },
    isRequestAPICallableInsideAfter: function() {
        return isRequestAPICallableInsideAfter;
    },
    throwWithStaticGenerationBailoutError: function() {
        return throwWithStaticGenerationBailoutError;
    },
    throwWithStaticGenerationBailoutErrorWithDynamicError: function() {
        return throwWithStaticGenerationBailoutErrorWithDynamicError;
    },
    wellKnownProperties: function() {
        return wellKnownProperties;
    }
});
const _staticgenerationbailout = __webpack_require__(617663);
const _aftertaskasyncstorageexternal = __webpack_require__(903295);
// This regex will have fast negatives meaning valid identifiers may not pass
// this test. However this is only used during static generation to provide hints
// about why a page bailed out of some or all prerendering and we can use bracket notation
// for example while `ಠ_ಠ` is a valid identifier it's ok to print `searchParams['ಠ_ಠ']`
// even if this would have been fine too `searchParams.ಠ_ಠ`
const isDefinitelyAValidIdentifier = /^[A-Za-z_$][A-Za-z0-9_$]*$/;
function describeStringPropertyAccess(target, prop) {
    if (isDefinitelyAValidIdentifier.test(prop)) {
        return `\`${target}.${prop}\``;
    }
    return `\`${target}[${JSON.stringify(prop)}]\``;
}
function describeHasCheckingStringProperty(target, prop) {
    const stringifiedProp = JSON.stringify(prop);
    return `\`Reflect.has(${target}, ${stringifiedProp})\`, \`${stringifiedProp} in ${target}\`, or similar`;
}
function throwWithStaticGenerationBailoutError(route, expression) {
    throw new _staticgenerationbailout.StaticGenBailoutError(`Route ${route} couldn't be rendered statically because it used ${expression}. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`);
}
function throwWithStaticGenerationBailoutErrorWithDynamicError(route, expression) {
    throw new _staticgenerationbailout.StaticGenBailoutError(`Route ${route} with \`dynamic = "error"\` couldn't be rendered statically because it used ${expression}. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`);
}
function isRequestAPICallableInsideAfter() {
    const afterTaskStore = _aftertaskasyncstorageexternal.afterTaskAsyncStorage.getStore();
    return (afterTaskStore == null ? void 0 : afterTaskStore.rootTaskSpawnPhase) === 'action';
}
const wellKnownProperties = new Set([
    'hasOwnProperty',
    'isPrototypeOf',
    'propertyIsEnumerable',
    'toString',
    'valueOf',
    'toLocaleString',
    // Promise prototype
    // fallthrough
    'then',
    'catch',
    'finally',
    // React Promise extension
    // fallthrough
    'status',
    // React introspection
    'displayName',
    // Common tested properties
    // fallthrough
    'toJSON',
    '$$typeof',
    '__esModule'
]);

//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 652123:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "ReflectAdapter", ({
    enumerable: true,
    get: function() {
        return ReflectAdapter;
    }
}));
class ReflectAdapter {
    static get(target, prop, receiver) {
        const value = Reflect.get(target, prop, receiver);
        if (typeof value === 'function') {
            return value.bind(target);
        }
        return value;
    }
    static set(target, prop, value, receiver) {
        return Reflect.set(target, prop, value, receiver);
    }
    static has(target, prop) {
        return Reflect.has(target, prop);
    }
    static deleteProperty(target, prop) {
        return Reflect.deleteProperty(target, prop);
    }
}

//# sourceMappingURL=reflect.js.map

/***/ }),

/***/ 204769:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 337386:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ segmentCache)
/* harmony export */ });
/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87863);
/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_cache__WEBPACK_IMPORTED_MODULE_0__);

const segmentCache = {
    tag: {
        byId (id) {
            return `segment-${id}`;
        },
        byEnvironmentId (environmentId) {
            return `environments-${environmentId}-segements`;
        },
        byAttributeKey (attributeKey) {
            return `attribute-${attributeKey}-segements`;
        }
    },
    revalidate ({ id, environmentId, attributeKey }) {
        if (id) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(this.tag.byId(id));
        }
        if (environmentId) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(this.tag.byEnvironmentId(environmentId));
        }
        if (attributeKey) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(this.tag.byAttributeKey(attributeKey));
        }
    }
};


/***/ }),

/***/ 765501:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ displayCache)
/* harmony export */ });
/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87863);
/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_cache__WEBPACK_IMPORTED_MODULE_0__);

const displayCache = {
    tag: {
        byId (id) {
            return `displays-${id}`;
        },
        bySurveyId (surveyId) {
            return `surveys-${surveyId}-displays`;
        },
        byContactId (contactId) {
            return `contacts-${contactId}-displays`;
        },
        byEnvironmentIdAndUserId (environmentId, userId) {
            return `environments-${environmentId}-users-${userId}-displays`;
        },
        byEnvironmentId (environmentId) {
            return `environments-${environmentId}-displays`;
        }
    },
    revalidate ({ id, surveyId, contactId, environmentId, userId }) {
        if (environmentId && userId) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(this.tag.byEnvironmentIdAndUserId(environmentId, userId));
        }
        if (id) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(this.tag.byId(id));
        }
        if (surveyId) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(this.tag.bySurveyId(surveyId));
        }
        if (contactId) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(this.tag.byContactId(contactId));
        }
        if (environmentId) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(this.tag.byEnvironmentId(environmentId));
        }
    }
};


/***/ }),

/***/ 488734:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ environmentCache)
/* harmony export */ });
/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87863);
/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_cache__WEBPACK_IMPORTED_MODULE_0__);

const environmentCache = {
    tag: {
        byId (id) {
            return `environments-${id}`;
        },
        byProjectId (projectId) {
            return `projects-${projectId}-environments`;
        }
    },
    revalidate ({ id, projectId: projectId }) {
        if (id) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(this.tag.byId(id));
        }
        if (projectId) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(this.tag.byProjectId(projectId));
        }
    }
};


/***/ }),

/***/ 32135:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DL: () => (/* binding */ getEnvironments),
/* harmony export */   aN: () => (/* binding */ getFirstEnvironmentIdByUserId),
/* harmony export */   h8: () => (/* binding */ updateEnvironment),
/* harmony export */   uc: () => (/* binding */ getEnvironment)
/* harmony export */ });
/* unused harmony export createEnvironment */
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(896330);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(922728);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(545198);
/* harmony import */ var _formbricks_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(527610);
/* harmony import */ var _formbricks_types_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(733735);
/* harmony import */ var _formbricks_types_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(65405);
/* harmony import */ var _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(470641);
/* harmony import */ var _cache__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(794356);
/* harmony import */ var _organization_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(353687);
/* harmony import */ var _project_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(529987);
/* harmony import */ var _utils_validate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(860988);
/* harmony import */ var _cache__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(488734);














const getEnvironment = (0,react__WEBPACK_IMPORTED_MODULE_1__.cache)(async (environmentId)=>(0,_cache__WEBPACK_IMPORTED_MODULE_3__/* .cache */ .P)(async ()=>{
        (0,_utils_validate__WEBPACK_IMPORTED_MODULE_4__/* .validateInputs */ .C)([
            environmentId,
            _formbricks_types_common__WEBPACK_IMPORTED_MODULE_5__/* .ZId */ .i4
        ]);
        try {
            const environment = await _formbricks_database__WEBPACK_IMPORTED_MODULE_2__/* .prisma */ .z.environment.findUnique({
                where: {
                    id: environmentId
                }
            });
            return environment;
        } catch (error) {
            if (error instanceof _prisma_client__WEBPACK_IMPORTED_MODULE_0__.Prisma.PrismaClientKnownRequestError) {
                console.error(error);
                throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_6__/* .DatabaseError */ .a$(error.message);
            }
            throw error;
        }
    }, [
        `getEnvironment-${environmentId}`
    ], {
        tags: [
            _cache__WEBPACK_IMPORTED_MODULE_7__/* .environmentCache */ .e.tag.byId(environmentId)
        ]
    })());
const getEnvironments = (0,react__WEBPACK_IMPORTED_MODULE_1__.cache)(async (projectId)=>(0,_cache__WEBPACK_IMPORTED_MODULE_3__/* .cache */ .P)(async ()=>{
        (0,_utils_validate__WEBPACK_IMPORTED_MODULE_4__/* .validateInputs */ .C)([
            projectId,
            _formbricks_types_common__WEBPACK_IMPORTED_MODULE_5__/* .ZId */ .i4
        ]);
        let projectPrisma;
        try {
            projectPrisma = await _formbricks_database__WEBPACK_IMPORTED_MODULE_2__/* .prisma */ .z.project.findFirst({
                where: {
                    id: projectId
                },
                include: {
                    environments: true
                }
            });
            if (!projectPrisma) {
                throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_6__/* .ResourceNotFoundError */ .CE("Project", projectId);
            }
        } catch (error) {
            if (error instanceof _prisma_client__WEBPACK_IMPORTED_MODULE_0__.Prisma.PrismaClientKnownRequestError) {
                throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_6__/* .DatabaseError */ .a$(error.message);
            }
            throw error;
        }
        const environments = [];
        for (let environment of projectPrisma.environments){
            let targetEnvironment = _formbricks_types_environment__WEBPACK_IMPORTED_MODULE_8__/* .ZEnvironment */ .KJ.parse(environment);
            environments.push(targetEnvironment);
        }
        try {
            return environments;
        } catch (error) {
            if (error instanceof zod__WEBPACK_IMPORTED_MODULE_9__.z.ZodError) {
                console.error(JSON.stringify(error.errors, null, 2));
            }
            throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_6__/* .ValidationError */ .yI("Data validation of environments array failed");
        }
    }, [
        `getEnvironments-${projectId}`
    ], {
        tags: [
            _cache__WEBPACK_IMPORTED_MODULE_7__/* .environmentCache */ .e.tag.byProjectId(projectId)
        ]
    })());
const updateEnvironment = async (environmentId, data)=>{
    (0,_utils_validate__WEBPACK_IMPORTED_MODULE_4__/* .validateInputs */ .C)([
        environmentId,
        _formbricks_types_common__WEBPACK_IMPORTED_MODULE_5__/* .ZId */ .i4
    ], [
        data,
        _formbricks_types_environment__WEBPACK_IMPORTED_MODULE_8__/* .ZEnvironmentUpdateInput */ .fz.partial()
    ]);
    const newData = {
        ...data,
        updatedAt: new Date()
    };
    let updatedEnvironment;
    try {
        updatedEnvironment = await _formbricks_database__WEBPACK_IMPORTED_MODULE_2__/* .prisma */ .z.environment.update({
            where: {
                id: environmentId
            },
            data: newData
        });
        _cache__WEBPACK_IMPORTED_MODULE_7__/* .environmentCache */ .e.revalidate({
            id: environmentId,
            projectId: updatedEnvironment.projectId
        });
        return updatedEnvironment;
    } catch (error) {
        if (error instanceof _prisma_client__WEBPACK_IMPORTED_MODULE_0__.Prisma.PrismaClientKnownRequestError) {
            throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_6__/* .DatabaseError */ .a$(error.message);
        }
        throw error;
    }
};
const getFirstEnvironmentIdByUserId = async (userId)=>{
    try {
        const organizations = await (0,_organization_service__WEBPACK_IMPORTED_MODULE_10__/* .getOrganizationsByUserId */ .s8)(userId);
        if (organizations.length === 0) {
            return null;
        }
        const firstOrganization = organizations[0];
        const projects = await (0,_project_service__WEBPACK_IMPORTED_MODULE_11__/* .getUserProjects */ ._P)(userId, firstOrganization.id);
        if (projects.length === 0) {
            return null;
        }
        const firstProject = projects[0];
        const productionEnvironment = firstProject.environments.find((environment)=>environment.type === "production");
        if (!productionEnvironment) {
            return null;
        }
        return productionEnvironment.id;
    } catch (error) {
        throw error;
    }
};
const createEnvironment = async (projectId, environmentInput)=>{
    validateInputs([
        projectId,
        ZId
    ], [
        environmentInput,
        ZEnvironmentCreateInput
    ]);
    try {
        const environment = await prisma.environment.create({
            data: {
                type: environmentInput.type || "development",
                project: {
                    connect: {
                        id: projectId
                    }
                },
                appSetupCompleted: environmentInput.appSetupCompleted || false,
                actionClasses: {
                    create: [
                        {
                            name: "New Session",
                            description: "Gets fired when a new session is created",
                            type: "automatic"
                        }
                    ]
                },
                attributeKeys: {
                    create: [
                        {
                            key: "userId",
                            name: "User Id",
                            description: "The user id of a contact",
                            type: "default",
                            isUnique: true
                        },
                        {
                            key: "email",
                            name: "Email",
                            description: "The email of a contact",
                            type: "default",
                            isUnique: true
                        },
                        {
                            key: "firstName",
                            name: "First Name",
                            description: "Your contact's first name",
                            type: "default"
                        },
                        {
                            key: "lastName",
                            name: "Last Name",
                            description: "Your contact's last name",
                            type: "default"
                        }
                    ]
                }
            }
        });
        environmentCache.revalidate({
            id: environment.id,
            projectId: environment.projectId
        });
        await capturePosthogEnvironmentEvent(environment.id, "environment created", {
            environmentType: environment.type
        });
        return environment;
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            throw new DatabaseError(error.message);
        }
        throw error;
    }
};


/***/ }),

/***/ 122522:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ responseCache)
/* harmony export */ });
/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87863);
/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_cache__WEBPACK_IMPORTED_MODULE_0__);

const responseCache = {
    tag: {
        byId (responseId) {
            return `responses-${responseId}`;
        },
        byEnvironmentId (environmentId) {
            return `environments-${environmentId}-responses`;
        },
        byContactId (contactId) {
            return `contacts-${contactId}-responses`;
        },
        byEnvironmentIdAndUserId (environmentId, userId) {
            return `environments-${environmentId}-users-${userId}-responses`;
        },
        bySingleUseId (surveyId, singleUseId) {
            return `surveys-${surveyId}-singleUse-${singleUseId}-responses`;
        },
        bySurveyId (surveyId) {
            return `surveys-${surveyId}-responses`;
        }
    },
    revalidate ({ environmentId, contactId, id, singleUseId, surveyId, userId }) {
        if (id) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(this.tag.byId(id));
        }
        if (contactId) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(this.tag.byContactId(contactId));
        }
        if (surveyId) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(this.tag.bySurveyId(surveyId));
        }
        if (environmentId) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(this.tag.byEnvironmentId(environmentId));
        }
        if (environmentId && userId) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(this.tag.byEnvironmentIdAndUserId(environmentId, userId));
        }
        if (surveyId && singleUseId) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(this.tag.bySingleUseId(surveyId, singleUseId));
        }
    }
};


/***/ }),

/***/ 249479:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [8079,3073,7863,5069,6626,5570,1238,9069,7762,9358,3687,5863,6483,836], () => (__webpack_exec__(472366)));
module.exports = __webpack_exports__;

})();