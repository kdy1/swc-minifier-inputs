"use strict";
(() => {
var exports = {};
exports.id = 1233;
exports.ids = [1233];
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

/***/ 594735:
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ 629021:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 781630:
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ 55591:
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ 321820:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 333873:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 927910:
/***/ ((module) => {

module.exports = require("stream");

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

/***/ 74075:
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ 977598:
/***/ ((module) => {

module.exports = require("node:crypto");

/***/ }),

/***/ 344708:
/***/ ((module) => {

module.exports = require("node:https");

/***/ }),

/***/ 776436:
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

// NAMESPACE OBJECT: ./app/api/v1/client/[environmentId]/app/sync/[userId]/route.ts
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  GET: () => (GET),
  OPTIONS: () => (OPTIONS)
});

// EXTERNAL MODULE: ../../node_modules/next/dist/server/route-modules/app-route/module.compiled.js
var module_compiled = __webpack_require__(831271);
// EXTERNAL MODULE: ../../node_modules/next/dist/server/route-kind.js
var route_kind = __webpack_require__(291232);
// EXTERNAL MODULE: ../../node_modules/next/dist/server/lib/patch-fetch.js
var patch_fetch = __webpack_require__(318079);
// EXTERNAL MODULE: ./lib/cache/contact.ts
var cache_contact = __webpack_require__(180868);
// EXTERNAL MODULE: ../../node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js
var react = __webpack_require__(922728);
// EXTERNAL MODULE: ../../packages/database/src/index.ts + 1 modules
var src = __webpack_require__(527610);
// EXTERNAL MODULE: ../../packages/lib/cache.ts
var cache = __webpack_require__(794356);
;// ./app/api/v1/client/[environmentId]/app/sync/lib/contact.ts





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
            },
            select: {
                id: true,
                attributes: {
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
        `getContactByUserId-sync-api-${environmentId}-${userId}`
    ], {
        tags: [
            cache_contact/* contactCache */.f.tag.byEnvironmentIdAndUserId(environmentId, userId)
        ]
    })());

// EXTERNAL MODULE: ./lib/cache/contact-attribute.ts
var contact_attribute = __webpack_require__(892865);
// EXTERNAL MODULE: ./modules/ee/contacts/segments/lib/segments.ts + 1 modules
var segments = __webpack_require__(927627);
// EXTERNAL MODULE: external "@prisma/client"
var client_ = __webpack_require__(896330);
// EXTERNAL MODULE: ../../packages/lib/display/cache.ts
var display_cache = __webpack_require__(765501);
// EXTERNAL MODULE: ../../packages/lib/project/cache.ts
var project_cache = __webpack_require__(236730);
// EXTERNAL MODULE: ../../packages/lib/project/service.ts
var service = __webpack_require__(529987);
// EXTERNAL MODULE: ../../packages/lib/survey/cache.ts
var survey_cache = __webpack_require__(249479);
// EXTERNAL MODULE: ../../packages/lib/survey/service.ts
var survey_service = __webpack_require__(222118);
// EXTERNAL MODULE: ../../packages/lib/survey/utils.ts
var utils = __webpack_require__(780564);
// EXTERNAL MODULE: ../../packages/lib/utils/datetime.ts
var datetime = __webpack_require__(722515);
// EXTERNAL MODULE: ../../packages/lib/utils/validate.ts
var validate = __webpack_require__(860988);
// EXTERNAL MODULE: ../../packages/types/common.ts
var common = __webpack_require__(733735);
// EXTERNAL MODULE: ../../packages/types/errors.ts
var errors = __webpack_require__(470641);
;// ./app/api/v1/client/[environmentId]/app/sync/lib/survey.ts


















const getSyncSurveys = (0,react.cache)((environmentId, contactId, contactAttributes, deviceType = "desktop")=>(0,cache/* cache */.P)(async ()=>{
        (0,validate/* validateInputs */.C)([
            environmentId,
            common/* ZId */.i4
        ]);
        try {
            const product = await (0,service/* getProjectByEnvironmentId */.bq)(environmentId);
            if (!product) {
                throw new Error("Product not found");
            }
            let surveys = await (0,survey_service/* getSurveys */.k_)(environmentId);
            // filtered surveys for running and web
            surveys = surveys.filter((survey)=>survey.status === "inProgress" && survey.type === "app");
            // if no surveys are left, return an empty array
            if (surveys.length === 0) {
                return [];
            }
            const displays = await src/* prisma */.z.display.findMany({
                where: {
                    contactId
                }
            });
            const responses = await src/* prisma */.z.response.findMany({
                where: {
                    contactId
                }
            });
            // filter surveys that meet the displayOption criteria
            surveys = surveys.filter((survey)=>{
                switch(survey.displayOption){
                    case "respondMultiple":
                        return true;
                    case "displayOnce":
                        return displays.filter((display)=>display.surveyId === survey.id).length === 0;
                    case "displayMultiple":
                        if (!responses) return true;
                        else {
                            return responses.filter((response)=>response.surveyId === survey.id).length === 0;
                        }
                    case "displaySome":
                        if (survey.displayLimit === null) {
                            return true;
                        }
                        if (responses && responses.filter((response)=>response.surveyId === survey.id).length !== 0) {
                            return false;
                        }
                        return displays.filter((display)=>display.surveyId === survey.id).length < survey.displayLimit;
                    default:
                        throw Error("Invalid displayOption");
                }
            });
            const latestDisplay = displays[0];
            // filter surveys that meet the recontactDays criteria
            surveys = surveys.filter((survey)=>{
                if (!latestDisplay) {
                    return true;
                } else if (survey.recontactDays !== null) {
                    const lastDisplaySurvey = displays.filter((display)=>display.surveyId === survey.id)[0];
                    if (!lastDisplaySurvey) {
                        return true;
                    }
                    return (0,datetime/* diffInDays */.yr)(new Date(), new Date(lastDisplaySurvey.createdAt)) >= survey.recontactDays;
                } else if (product.recontactDays !== null) {
                    return (0,datetime/* diffInDays */.yr)(new Date(), new Date(latestDisplay.createdAt)) >= product.recontactDays;
                } else {
                    return true;
                }
            });
            // if no surveys are left, return an empty array
            if (surveys.length === 0) {
                return [];
            }
            // if no surveys have segment filters, return the surveys
            if (!(0,utils/* anySurveyHasFilters */.as)(surveys)) {
                return surveys;
            }
            // the surveys now have segment filters, so we need to evaluate them
            const surveyPromises = surveys.map(async (survey)=>{
                const { segment } = survey;
                // if the survey has no segment, or the segment has no filters, we return the survey
                if (!segment || !segment.filters?.length) {
                    return survey;
                }
                // Evaluate the segment filters
                const result = await (0,segments/* evaluateSegment */.xF)({
                    attributes: contactAttributes ?? {},
                    deviceType,
                    environmentId,
                    contactId,
                    userId: String(contactAttributes.userId)
                }, segment.filters);
                return result ? survey : null;
            });
            const resolvedSurveys = await Promise.all(surveyPromises);
            surveys = resolvedSurveys.filter((survey)=>!!survey);
            if (!surveys) {
                throw new errors/* ResourceNotFoundError */.CE("Survey", environmentId);
            }
            return surveys;
        } catch (error) {
            if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
                console.error(error);
                throw new errors/* DatabaseError */.a$(error.message);
            }
            throw error;
        }
    }, [
        `getSyncSurveys-${environmentId}-${contactId}`
    ], {
        tags: [
            cache_contact/* contactCache */.f.tag.byEnvironmentId(environmentId),
            cache_contact/* contactCache */.f.tag.byId(contactId),
            display_cache/* displayCache */.x.tag.byContactId(contactId),
            survey_cache/* surveyCache */.$.tag.byEnvironmentId(environmentId),
            project_cache/* projectCache */.E.tag.byEnvironmentId(environmentId),
            contact_attribute/* contactAttributeCache */.r.tag.byContactId(contactId)
        ]
    })());

// EXTERNAL MODULE: ../../packages/lib/utils/recall.ts + 1 modules
var recall = __webpack_require__(239949);
;// ./app/api/v1/client/[environmentId]/app/sync/lib/utils.ts

const replaceAttributeRecall = (survey, attributes)=>{
    const surveyTemp = structuredClone(survey);
    const languages = surveyTemp.languages.map((surveyLanguage)=>{
        if (surveyLanguage.default) {
            return "default";
        }
        if (surveyLanguage.enabled) {
            return surveyLanguage.language.code;
        }
        return null;
    }).filter((language)=>language !== null);
    surveyTemp.questions.forEach((question)=>{
        languages.forEach((language)=>{
            if (question.headline[language]?.includes("recall:")) {
                question.headline[language] = (0,recall/* parseRecallInfo */.VY)(question.headline[language], attributes);
            }
            if (question.subheader && question.subheader[language]?.includes("recall:")) {
                question.subheader[language] = (0,recall/* parseRecallInfo */.VY)(question.subheader[language], attributes);
            }
        });
    });
    if (surveyTemp.welcomeCard.enabled && surveyTemp.welcomeCard.headline) {
        languages.forEach((language)=>{
            if (surveyTemp.welcomeCard.headline && surveyTemp.welcomeCard.headline[language]?.includes("recall:")) {
                surveyTemp.welcomeCard.headline[language] = (0,recall/* parseRecallInfo */.VY)(surveyTemp.welcomeCard.headline[language], attributes);
            }
        });
    }
    surveyTemp.endings.forEach((ending)=>{
        if (ending.type === "endScreen") {
            languages.forEach((language)=>{
                if (ending.headline && ending.headline[language]?.includes("recall:")) {
                    ending.headline[language] = (0,recall/* parseRecallInfo */.VY)(ending.headline[language], attributes);
                    if (ending.subheader && ending.subheader[language]?.includes("recall:")) {
                        ending.subheader[language] = (0,recall/* parseRecallInfo */.VY)(ending.subheader[language], attributes);
                    }
                }
            });
        }
    });
    return surveyTemp;
};

// EXTERNAL MODULE: ./app/lib/api/response.ts
var response = __webpack_require__(328779);
// EXTERNAL MODULE: ./app/lib/api/validator.ts
var validator = __webpack_require__(105032);
// EXTERNAL MODULE: ../../node_modules/next/dist/api/server.js
var server = __webpack_require__(861238);
// EXTERNAL MODULE: ../../packages/lib/actionClass/service.ts
var actionClass_service = __webpack_require__(440792);
// EXTERNAL MODULE: ../../packages/lib/constants.ts
var constants = __webpack_require__(836919);
// EXTERNAL MODULE: ../../packages/lib/environment/service.ts
var environment_service = __webpack_require__(32135);
// EXTERNAL MODULE: ../../packages/lib/organization/service.ts
var organization_service = __webpack_require__(353687);
// EXTERNAL MODULE: ../../packages/lib/posthogServer.ts
var posthogServer = __webpack_require__(544825);
// EXTERNAL MODULE: ../../packages/lib/styling/constants.ts
var styling_constants = __webpack_require__(460326);
// EXTERNAL MODULE: ../../packages/types/js.ts + 1 modules
var js = __webpack_require__(167229);
;// ./app/api/v1/client/[environmentId]/app/sync/[userId]/route.ts
// Deprecated: This api route is deprecated now and will be removed in the future.
// Deprecated: This is currently only being used for the older react native SDKs. Please upgrade to the latest SDKs.
















const OPTIONS = async ()=>{
    return response/* responses */.n.successResponse({}, true);
};
const GET = async (request, props)=>{
    const params = await props.params;
    try {
        const { device } = (0,server.userAgent)(request);
        // validate using zod
        const inputValidation = js/* ZJsPeopleUserIdInput */.Lv.safeParse({
            environmentId: params.environmentId,
            userId: params.userId
        });
        if (!inputValidation.success) {
            return response/* responses */.n.badRequestResponse("Fields are missing or incorrectly formatted", (0,validator/* transformErrorToDetails */.m)(inputValidation.error), true);
        }
        const { environmentId, userId } = inputValidation.data;
        const environment = await (0,environment_service/* getEnvironment */.uc)(environmentId);
        if (!environment) {
            throw new Error("Environment does not exist");
        }
        const project = await (0,service/* getProjectByEnvironmentId */.bq)(environmentId);
        if (!project) {
            throw new Error("Project not found");
        }
        if (!environment.appSetupCompleted) {
            await Promise.all([
                (0,environment_service/* updateEnvironment */.h8)(environment.id, {
                    appSetupCompleted: true
                }),
                (0,posthogServer/* capturePosthogEnvironmentEvent */.s)(environmentId, "app setup completed")
            ]);
        }
        // check organization subscriptions
        const organization = await (0,organization_service/* getOrganizationByEnvironmentId */.TK)(environmentId);
        if (!organization) {
            throw new Error("Organization does not exist");
        }
        // check if response limit is reached
        let isAppSurveyResponseLimitReached = false;
        if (constants/* IS_FORMBRICKS_CLOUD */.Si) {
            const currentResponseCount = await (0,organization_service/* getMonthlyOrganizationResponseCount */.XU)(organization.id);
            const monthlyResponseLimit = organization.billing.limits.monthly.responses;
            isAppSurveyResponseLimitReached = monthlyResponseLimit !== null && currentResponseCount >= monthlyResponseLimit;
            if (isAppSurveyResponseLimitReached) {
                try {
                    await (0,posthogServer/* sendPlanLimitsReachedEventToPosthogWeekly */.S)(environmentId, {
                        plan: organization.billing.plan,
                        limits: {
                            projects: null,
                            monthly: {
                                responses: monthlyResponseLimit,
                                miu: null
                            }
                        }
                    });
                } catch (error) {
                    console.error(`Error sending plan limits reached event to Posthog: ${error}`);
                }
            }
        }
        let contact = await getContactByUserId(environmentId, userId);
        if (!contact) {
            contact = await src/* prisma */.z.contact.create({
                data: {
                    attributes: {
                        create: {
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
                    },
                    environment: {
                        connect: {
                            id: environmentId
                        }
                    }
                },
                select: {
                    id: true,
                    attributes: {
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
            if (contact) {
                cache_contact/* contactCache */.f.revalidate({
                    userId: contact.attributes.find((attr)=>attr.attributeKey.key === "userId")?.value,
                    id: contact.id,
                    environmentId
                });
            }
        }
        const contactAttributes = contact.attributes.reduce((acc, attribute)=>{
            acc[attribute.attributeKey.key] = attribute.value;
            return acc;
        }, {});
        const [surveys, actionClasses] = await Promise.all([
            getSyncSurveys(environmentId, contact.id, contactAttributes, device.type === "mobile" ? "phone" : "desktop"),
            (0,actionClass_service/* getActionClasses */.nq)(environmentId)
        ]);
        if (!project) {
            throw new Error("Project not found");
        }
        const updatedProject = {
            ...project,
            brandColor: project.styling.brandColor?.light ?? styling_constants/* COLOR_DEFAULTS */.X.brandColor,
            ...project.styling.highlightBorderColor?.light && {
                highlightBorderColor: project.styling.highlightBorderColor.light
            }
        };
        const language = contactAttributes["language"];
        // Scenario 1: Multi language and updated trigger action classes supported.
        // Use the surveys as they are.
        let transformedSurveys = surveys;
        // creating state object
        let state = {
            surveys: !isAppSurveyResponseLimitReached ? transformedSurveys.map((survey)=>replaceAttributeRecall(survey, contactAttributes)) : [],
            actionClasses,
            language,
            project: updatedProject
        };
        return response/* responses */.n.successResponse({
            ...state
        }, true);
    } catch (error) {
        console.error(error);
        return response/* responses */.n.internalServerErrorResponse("Unable to handle the request: " + error.message, true);
    }
};

;// ../../node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?page=%2Fapi%2Fv1%2Fclient%2F%5BenvironmentId%5D%2Fapp%2Fsync%2F%5BuserId%5D%2Froute&name=app%2Fapi%2Fv1%2Fclient%2F%5BenvironmentId%5D%2Fapp%2Fsync%2F%5BuserId%5D%2Froute&pagePath=private-next-app-dir%2Fapi%2Fv1%2Fclient%2F%5BenvironmentId%5D%2Fapp%2Fsync%2F%5BuserId%5D%2Froute.ts&appDir=%2FUsers%2Fkdy1%2Fprojects%2Fformbricks%2Fapps%2Fweb%2Fapp&appPaths=%2Fapi%2Fv1%2Fclient%2F%5BenvironmentId%5D%2Fapp%2Fsync%2F%5BuserId%5D%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=standalone&nextConfigExperimentalUseEarlyImport=&preferredRegion=&middlewareConfig=e30%3D!




// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = "standalone"
const routeModule = new module_compiled.AppRouteRouteModule({
    definition: {
        kind: route_kind.RouteKind.APP_ROUTE,
        page: "/api/v1/client/[environmentId]/app/sync/[userId]/route",
        pathname: "/api/v1/client/[environmentId]/app/sync/[userId]",
        filename: "route",
        bundlePath: "app/api/v1/client/[environmentId]/app/sync/[userId]/route"
    },
    resolvedPagePath: "/Users/kdy1/projects/formbricks/apps/web/app/api/v1/client/[environmentId]/app/sync/[userId]/route.ts",
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

/***/ 460326:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* binding */ COLOR_DEFAULTS)
/* harmony export */ });
/* unused harmony export defaultStyling */
// https://github.com/airbnb/javascript/#naming--uppercase
const COLOR_DEFAULTS = {
    brandColor: "#64748b",
    questionColor: "#2b2524",
    inputColor: "#ffffff",
    inputBorderColor: "#cbd5e1",
    cardBackgroundColor: "#ffffff",
    cardBorderColor: "#f8fafc",
    cardShadowColor: "#000000",
    highlightBorderColor: "#64748b"
};
const defaultStyling = {
    allowStyleOverwrite: true,
    brandColor: {
        light: COLOR_DEFAULTS.brandColor
    },
    questionColor: {
        light: COLOR_DEFAULTS.questionColor
    },
    inputColor: {
        light: COLOR_DEFAULTS.inputColor
    },
    inputBorderColor: {
        light: COLOR_DEFAULTS.inputBorderColor
    },
    cardBackgroundColor: {
        light: COLOR_DEFAULTS.cardBackgroundColor
    },
    cardBorderColor: {
        light: COLOR_DEFAULTS.cardBorderColor
    },
    cardShadowColor: {
        light: COLOR_DEFAULTS.cardShadowColor
    },
    isLogoHidden: false,
    highlightBorderColor: undefined,
    isDarkModeEnabled: false,
    background: {
        bg: "#fff",
        bgType: "color"
    },
    roundness: 8,
    cardArrangement: {
        linkSurveys: "straight",
        appSurveys: "straight"
    }
};


/***/ }),

/***/ 722515:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HJ: () => (/* binding */ getFormattedDateTimeString),
/* harmony export */   Qr: () => (/* binding */ isValidDateString),
/* harmony export */   yr: () => (/* binding */ diffInDays),
/* harmony export */   zM: () => (/* binding */ formatDateWithOrdinal)
/* harmony export */ });
/* unused harmony exports getMonthName, getOrdinalDate */
const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
// Helper function to calculate difference in days between two dates
const diffInDays = (date1, date2)=>{
    const diffTime = Math.abs(date2.getTime() - date1.getTime());
    return Math.floor(diffTime / (1000 * 60 * 60 * 24));
};
// Helper function to get the month name
const getMonthName = (monthIndex)=>{
    return monthNames[monthIndex];
};
const formatDateWithOrdinal = (date)=>{
    const getOrdinalSuffix = (day)=>{
        const suffixes = [
            "th",
            "st",
            "nd",
            "rd"
        ];
        const relevantDigits = day < 30 ? day % 20 : day % 30;
        return suffixes[relevantDigits <= 3 ? relevantDigits : 0];
    };
    const dayOfWeekNames = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    const dayOfWeek = dayOfWeekNames[date.getDay()];
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
    return `${dayOfWeek}, ${monthNames[monthIndex]} ${day}${getOrdinalSuffix(day)}, ${year}`;
};
// Helper function to format the date with an ordinal suffix
const getOrdinalDate = (date)=>{
    const j = date % 10, k = date % 100;
    if (j === 1 && k !== 11) {
        return date + "st";
    }
    if (j === 2 && k !== 12) {
        return date + "nd";
    }
    if (j === 3 && k !== 13) {
        return date + "rd";
    }
    return date + "th";
};
const isValidDateString = (value)=>{
    const regex = /^(?:\d{4}-\d{2}-\d{2}|\d{2}-\d{2}-\d{4})$/;
    if (!regex.test(value)) {
        return false;
    }
    const date = new Date(value);
    return date;
};
const getFormattedDateTimeString = (date)=>{
    const options = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
    };
    return new Intl.DateTimeFormat("en-CA", options).format(date).replace(",", "");
};


/***/ }),

/***/ 239949:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  VY: () => (/* binding */ parseRecallInfo),
  uD: () => (/* binding */ replaceHeadlineRecall)
});

// UNUSED EXPORTS: checkForEmptyFallBackValue, extractFallbackValue, extractId, extractIds, extractRecallInfo, findRecallInfoById, getFallbackValues, getRecallItems, headlineToRecall, recallToHeadline, replaceRecallInfoWithUnderline

// EXTERNAL MODULE: ../../node_modules/@ungap/structured-clone/esm/index.js + 3 modules
var esm = __webpack_require__(551469);
;// ../../packages/lib/pollyfills/structuredClone.ts

let structuredCloneExport;
if (typeof structuredClone === "undefined") {
    structuredCloneExport = esm/* default */.Ay;
} else {
    // @ts-expect-error
    structuredCloneExport = structuredClone;
}


// EXTERNAL MODULE: ../../packages/lib/utils/datetime.ts
var datetime = __webpack_require__(722515);
;// ../../packages/lib/utils/recall.ts



// Extracts the ID of recall question from a string containing the "recall" pattern.
const extractId = (text)=>{
    const pattern = /#recall:([A-Za-z0-9_-]+)/;
    const match = text.match(pattern);
    if (match && match[1]) {
        return match[1];
    } else {
        return null;
    }
};
// If there are multiple recall infos in a string extracts all recall question IDs from that string and construct an array out of it.
const extractIds = (text)=>{
    const pattern = /#recall:([A-Za-z0-9_-]+)/g;
    const matches = Array.from(text.matchAll(pattern));
    return matches.map((match)=>match[1]).filter((id)=>id !== null);
};
// Extracts the fallback value from a string containing the "fallback" pattern.
const extractFallbackValue = (text)=>{
    const pattern = /fallback:(\S*)#/;
    const match = text.match(pattern);
    if (match && match[1]) {
        return match[1];
    } else {
        return "";
    }
};
// Extracts the complete recall information (ID and fallback) from a headline string.
const extractRecallInfo = (headline, id)=>{
    const idPattern = id ? id : "[A-Za-z0-9_-]+";
    const pattern = new RegExp(`#recall:(${idPattern})\\/fallback:(\\S*)#`);
    const match = headline.match(pattern);
    return match ? match[0] : null;
};
// Finds the recall information by a specific recall question ID within a text.
const findRecallInfoById = (text, id)=>{
    const pattern = new RegExp(`#recall:${id}\\/fallback:(\\S*)#`, "g");
    const match = text.match(pattern);
    return match ? match[0] : null;
};
const getRecallItemLabel = (recallItemId, survey, languageCode)=>{
    const isHiddenField = survey.hiddenFields.fieldIds?.includes(recallItemId);
    if (isHiddenField) return recallItemId;
    const surveyQuestion = survey.questions.find((question)=>question.id === recallItemId);
    if (surveyQuestion) return surveyQuestion.headline[languageCode];
    const variable = survey.variables?.find((variable)=>variable.id === recallItemId);
    if (variable) return variable.name;
};
// Converts recall information in a headline to a corresponding recall question headline, with or without a slash.
const recallToHeadline = (headline, survey, withSlash, languageCode)=>{
    let newHeadline = structuredCloneExport(headline);
    const localizedHeadline = newHeadline[languageCode];
    if (!localizedHeadline?.includes("#recall:")) return headline;
    const replaceNestedRecalls = (text)=>{
        while(text.includes("#recall:")){
            const recallInfo = extractRecallInfo(text);
            if (!recallInfo) break;
            const recallItemId = extractId(recallInfo);
            if (!recallItemId) break;
            let recallItemLabel = getRecallItemLabel(recallItemId, survey, languageCode) || recallItemId;
            while(recallItemLabel.includes("#recall:")){
                const nestedRecallInfo = extractRecallInfo(recallItemLabel);
                if (nestedRecallInfo) {
                    recallItemLabel = recallItemLabel.replace(nestedRecallInfo, "___");
                }
            }
            const replacement = withSlash ? `/${recallItemLabel}\\` : `@${recallItemLabel}`;
            text = text.replace(recallInfo, replacement);
        }
        return text;
    };
    newHeadline[languageCode] = replaceNestedRecalls(localizedHeadline);
    return newHeadline;
};
// Replaces recall information in a survey question's headline with an ___.
const replaceRecallInfoWithUnderline = (label)=>{
    let newLabel = label;
    while(newLabel.includes("#recall:")){
        const recallInfo = extractRecallInfo(newLabel);
        if (recallInfo) {
            newLabel = newLabel.replace(recallInfo, "___");
        }
    }
    return newLabel;
};
// Checks for survey questions with a "recall" pattern but no fallback value.
const checkForEmptyFallBackValue = (survey, language)=>{
    const findRecalls = (text)=>{
        const recalls = text.match(/#recall:[^ ]+/g);
        return recalls && recalls.some((recall)=>!extractFallbackValue(recall));
    };
    for (const question of survey.questions){
        if (findRecalls(getLocalizedValue(question.headline, language)) || question.subheader && findRecalls(getLocalizedValue(question.subheader, language))) {
            return question;
        }
    }
    return null;
};
// Processes each question in a survey to ensure headlines are formatted correctly for recall and return the modified survey.
const replaceHeadlineRecall = (survey, language)=>{
    const modifiedSurvey = structuredCloneExport(survey);
    modifiedSurvey.questions.forEach((question)=>{
        question.headline = recallToHeadline(question.headline, modifiedSurvey, false, language);
    });
    return modifiedSurvey;
};
// Retrieves an array of survey questions referenced in a text containing recall information.
const getRecallItems = (text, survey, languageCode)=>{
    if (!text.includes("#recall:")) return [];
    const ids = extractIds(text);
    let recallItems = [];
    ids.forEach((recallItemId)=>{
        const isHiddenField = survey.hiddenFields.fieldIds?.includes(recallItemId);
        const isSurveyQuestion = survey.questions.find((question)=>question.id === recallItemId);
        const isVariable = survey.variables.find((variable)=>variable.id === recallItemId);
        const recallItemLabel = getRecallItemLabel(recallItemId, survey, languageCode);
        const getRecallItemType = ()=>{
            if (isHiddenField) return "hiddenField";
            if (isSurveyQuestion) return "question";
            if (isVariable) return "variable";
        };
        if (recallItemLabel) {
            let recallItemLabelTemp = recallItemLabel;
            recallItemLabelTemp = replaceRecallInfoWithUnderline(recallItemLabelTemp);
            const recallItemType = getRecallItemType();
            if (recallItemType) {
                recallItems.push({
                    id: recallItemId,
                    label: recallItemLabelTemp,
                    type: recallItemType
                });
            }
        }
    });
    return recallItems;
};
// Constructs a fallbacks object from a text containing multiple recall and fallback patterns.
const getFallbackValues = (text)=>{
    if (!text.includes("#recall:")) return {};
    const pattern = /#recall:([A-Za-z0-9_-]+)\/fallback:([\S*]+)#/g;
    let match;
    const fallbacks = {};
    while((match = pattern.exec(text)) !== null){
        const id = match[1];
        const fallbackValue = match[2];
        fallbacks[id] = fallbackValue;
    }
    return fallbacks;
};
// Transforms headlines in a text to their corresponding recall information.
const headlineToRecall = (text, recallItems, fallbacks)=>{
    recallItems.forEach((recallItem)=>{
        const recallInfo = `#recall:${recallItem.id}/fallback:${fallbacks[recallItem.id]}#`;
        text = text.replace(`@${recallItem.label}`, recallInfo);
    });
    return text;
};
const parseRecallInfo = (text, responseData, variables, withSlash = false)=>{
    let modifiedText = text;
    const questionIds = responseData ? Object.keys(responseData) : [];
    const variableIds = Object.keys(variables || {});
    if (variables && variableIds.length > 0) {
        variableIds.forEach((variableId)=>{
            const recallPattern = `#recall:`;
            while(modifiedText.includes(recallPattern)){
                const recallInfo = extractRecallInfo(modifiedText, variableId);
                if (!recallInfo) break; // Exit the loop if no recall info is found
                const recallItemId = extractId(recallInfo);
                if (!recallItemId) continue; // Skip to the next iteration if no ID could be extracted
                const fallback = extractFallbackValue(recallInfo).replaceAll("nbsp", " ");
                let value = variables[variableId] || fallback;
                value = value.toString();
                if (withSlash) {
                    modifiedText = modifiedText.replace(recallInfo, "#/" + value + "\\#");
                } else {
                    modifiedText = modifiedText.replace(recallInfo, value);
                }
            }
        });
    }
    if (responseData && questionIds.length > 0) {
        while(modifiedText.includes("recall:")){
            const recallInfo = extractRecallInfo(modifiedText);
            if (!recallInfo) break; // Exit the loop if no recall info is found
            const recallItemId = extractId(recallInfo);
            if (!recallItemId) return modifiedText; // Return the text if no ID could be extracted
            const fallback = extractFallbackValue(recallInfo).replaceAll("nbsp", " ");
            let value;
            // Fetching value from responseData based on recallItemId
            if (responseData[recallItemId]) {
                value = responseData[recallItemId] ?? fallback;
            }
            // Additional value formatting if it exists
            if (value) {
                if ((0,datetime/* isValidDateString */.Qr)(value)) {
                    value = (0,datetime/* formatDateWithOrdinal */.zM)(new Date(value));
                } else if (Array.isArray(value)) {
                    value = value.filter((item)=>item).join(", "); // Filters out empty values and joins with a comma
                }
            }
            if (withSlash) {
                modifiedText = modifiedText.replace(recallInfo, "#/" + (value ?? fallback) + "\\#");
            } else {
                modifiedText = modifiedText.replace(recallInfo, value ?? fallback);
            }
        }
    }
    return modifiedText;
};


/***/ }),

/***/ 551469:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Ay: () => (/* binding */ esm)
});

// UNUSED EXPORTS: deserialize, serialize

;// ../../node_modules/@ungap/structured-clone/esm/types.js
const VOID       = -1;
const PRIMITIVE  = 0;
const ARRAY      = 1;
const OBJECT     = 2;
const DATE       = 3;
const REGEXP     = 4;
const MAP        = 5;
const SET        = 6;
const ERROR      = 7;
const BIGINT     = 8;
// export const SYMBOL = 9;

;// ../../node_modules/@ungap/structured-clone/esm/deserialize.js


const env = typeof self === 'object' ? self : globalThis;

const deserializer = ($, _) => {
  const as = (out, index) => {
    $.set(index, out);
    return out;
  };

  const unpair = index => {
    if ($.has(index))
      return $.get(index);

    const [type, value] = _[index];
    switch (type) {
      case PRIMITIVE:
      case VOID:
        return as(value, index);
      case ARRAY: {
        const arr = as([], index);
        for (const index of value)
          arr.push(unpair(index));
        return arr;
      }
      case OBJECT: {
        const object = as({}, index);
        for (const [key, index] of value)
          object[unpair(key)] = unpair(index);
        return object;
      }
      case DATE:
        return as(new Date(value), index);
      case REGEXP: {
        const {source, flags} = value;
        return as(new RegExp(source, flags), index);
      }
      case MAP: {
        const map = as(new Map, index);
        for (const [key, index] of value)
          map.set(unpair(key), unpair(index));
        return map;
      }
      case SET: {
        const set = as(new Set, index);
        for (const index of value)
          set.add(unpair(index));
        return set;
      }
      case ERROR: {
        const {name, message} = value;
        return as(new env[name](message), index);
      }
      case BIGINT:
        return as(BigInt(value), index);
      case 'BigInt':
        return as(Object(BigInt(value)), index);
      case 'ArrayBuffer':
        return as(new Uint8Array(value).buffer, value);
      case 'DataView': {
        const { buffer } = new Uint8Array(value);
        return as(new DataView(buffer), value);
      }
    }
    return as(new env[type](value), index);
  };

  return unpair;
};

/**
 * @typedef {Array<string,any>} Record a type representation
 */

/**
 * Returns a deserialized value from a serialized array of Records.
 * @param {Record[]} serialized a previously serialized value.
 * @returns {any}
 */
const deserialize = serialized => deserializer(new Map, serialized)(0);

;// ../../node_modules/@ungap/structured-clone/esm/serialize.js


const EMPTY = '';

const {toString: serialize_toString} = {};
const {keys} = Object;

const typeOf = value => {
  const type = typeof value;
  if (type !== 'object' || !value)
    return [PRIMITIVE, type];

  const asString = serialize_toString.call(value).slice(8, -1);
  switch (asString) {
    case 'Array':
      return [ARRAY, EMPTY];
    case 'Object':
      return [OBJECT, EMPTY];
    case 'Date':
      return [DATE, EMPTY];
    case 'RegExp':
      return [REGEXP, EMPTY];
    case 'Map':
      return [MAP, EMPTY];
    case 'Set':
      return [SET, EMPTY];
    case 'DataView':
      return [ARRAY, asString];
  }

  if (asString.includes('Array'))
    return [ARRAY, asString];

  if (asString.includes('Error'))
    return [ERROR, asString];

  return [OBJECT, asString];
};

const shouldSkip = ([TYPE, type]) => (
  TYPE === PRIMITIVE &&
  (type === 'function' || type === 'symbol')
);

const serializer = (strict, json, $, _) => {

  const as = (out, value) => {
    const index = _.push(out) - 1;
    $.set(value, index);
    return index;
  };

  const pair = value => {
    if ($.has(value))
      return $.get(value);

    let [TYPE, type] = typeOf(value);
    switch (TYPE) {
      case PRIMITIVE: {
        let entry = value;
        switch (type) {
          case 'bigint':
            TYPE = BIGINT;
            entry = value.toString();
            break;
          case 'function':
          case 'symbol':
            if (strict)
              throw new TypeError('unable to serialize ' + type);
            entry = null;
            break;
          case 'undefined':
            return as([VOID], value);
        }
        return as([TYPE, entry], value);
      }
      case ARRAY: {
        if (type) {
          let spread = value;
          if (type === 'DataView') {
            spread = new Uint8Array(value.buffer);
          }
          else if (type === 'ArrayBuffer') {
            spread = new Uint8Array(value);
          }
          return as([type, [...spread]], value);
        }

        const arr = [];
        const index = as([TYPE, arr], value);
        for (const entry of value)
          arr.push(pair(entry));
        return index;
      }
      case OBJECT: {
        if (type) {
          switch (type) {
            case 'BigInt':
              return as([type, value.toString()], value);
            case 'Boolean':
            case 'Number':
            case 'String':
              return as([type, value.valueOf()], value);
          }
        }

        if (json && ('toJSON' in value))
          return pair(value.toJSON());

        const entries = [];
        const index = as([TYPE, entries], value);
        for (const key of keys(value)) {
          if (strict || !shouldSkip(typeOf(value[key])))
            entries.push([pair(key), pair(value[key])]);
        }
        return index;
      }
      case DATE:
        return as([TYPE, value.toISOString()], value);
      case REGEXP: {
        const {source, flags} = value;
        return as([TYPE, {source, flags}], value);
      }
      case MAP: {
        const entries = [];
        const index = as([TYPE, entries], value);
        for (const [key, entry] of value) {
          if (strict || !(shouldSkip(typeOf(key)) || shouldSkip(typeOf(entry))))
            entries.push([pair(key), pair(entry)]);
        }
        return index;
      }
      case SET: {
        const entries = [];
        const index = as([TYPE, entries], value);
        for (const entry of value) {
          if (strict || !shouldSkip(typeOf(entry)))
            entries.push(pair(entry));
        }
        return index;
      }
    }

    const {message} = value;
    return as([TYPE, {name: type, message}], value);
  };

  return pair;
};

/**
 * @typedef {Array<string,any>} Record a type representation
 */

/**
 * Returns an array of serialized Records.
 * @param {any} value a serializable value.
 * @param {{json?: boolean, lossy?: boolean}?} options an object with a `lossy` or `json` property that,
 *  if `true`, will not throw errors on incompatible types, and behave more
 *  like JSON stringify would behave. Symbol and Function will be discarded.
 * @returns {Record[]}
 */
 const serialize = (value, {json, lossy} = {}) => {
  const _ = [];
  return serializer(!(json || lossy), !!json, new Map, _)(value), _;
};

;// ../../node_modules/@ungap/structured-clone/esm/index.js



/**
 * @typedef {Array<string,any>} Record a type representation
 */

/**
 * Returns an array of serialized Records.
 * @param {any} any a serializable value.
 * @param {{transfer?: any[], json?: boolean, lossy?: boolean}?} options an object with
 * a transfer option (ignored when polyfilled) and/or non standard fields that
 * fallback to the polyfill if present.
 * @returns {Record[]}
 */
/* harmony default export */ const esm = (typeof structuredClone === "function" ?
  /* c8 ignore start */
  (any, options) => (
    options && ('json' in options || 'lossy' in options) ?
      deserialize(serialize(any, options)) : structuredClone(any)
  ) :
  (any, options) => deserialize(serialize(any, options)));
  /* c8 ignore stop */




/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [8079,3073,7863,5069,6626,5570,1238,8728,9398,881,9358,3687,5863,7043,6483,836], () => (__webpack_exec__(776436)));
module.exports = __webpack_exports__;

})();