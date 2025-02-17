"use strict";
(() => {
var exports = {};
exports.id = 1895;
exports.ids = [1895];
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

/***/ 889591:
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

// NAMESPACE OBJECT: ./app/api/v1/client/[environmentId]/environment/route.ts
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
// EXTERNAL MODULE: ../../packages/database/src/index.ts + 1 modules
var src = __webpack_require__(527610);
// EXTERNAL MODULE: ../../packages/lib/actionClass/cache.ts
var cache = __webpack_require__(204769);
// EXTERNAL MODULE: ../../packages/lib/cache.ts
var lib_cache = __webpack_require__(794356);
// EXTERNAL MODULE: ../../packages/lib/constants.ts
var constants = __webpack_require__(836919);
// EXTERNAL MODULE: ../../packages/lib/environment/cache.ts
var environment_cache = __webpack_require__(488734);
// EXTERNAL MODULE: ../../packages/lib/environment/service.ts
var service = __webpack_require__(32135);
// EXTERNAL MODULE: ../../packages/lib/organization/cache.ts
var organization_cache = __webpack_require__(530190);
// EXTERNAL MODULE: ../../packages/lib/organization/service.ts
var organization_service = __webpack_require__(353687);
// EXTERNAL MODULE: ../../packages/lib/posthogServer.ts
var posthogServer = __webpack_require__(544825);
// EXTERNAL MODULE: ../../packages/lib/project/cache.ts
var project_cache = __webpack_require__(236730);
// EXTERNAL MODULE: ../../packages/lib/survey/cache.ts
var survey_cache = __webpack_require__(249479);
// EXTERNAL MODULE: ../../packages/types/errors.ts
var errors = __webpack_require__(470641);
// EXTERNAL MODULE: ../../node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js
var react = __webpack_require__(922728);
// EXTERNAL MODULE: ../../packages/lib/utils/validate.ts
var validate = __webpack_require__(860988);
// EXTERNAL MODULE: ../../packages/types/common.ts
var common = __webpack_require__(733735);
;// ./app/api/v1/client/[environmentId]/environment/lib/actionClass.ts







const getActionClassesForEnvironmentState = (0,react.cache)(async (environmentId)=>(0,lib_cache/* cache */.P)(async ()=>{
        (0,validate/* validateInputs */.C)([
            environmentId,
            common/* ZId */.i4
        ]);
        try {
            return await src/* prisma */.z.actionClass.findMany({
                where: {
                    environmentId: environmentId
                },
                select: {
                    id: true,
                    type: true,
                    name: true,
                    key: true,
                    noCodeConfig: true
                }
            });
        } catch (error) {
            throw new errors/* DatabaseError */.a$(`Database error when fetching actions for environment ${environmentId}`);
        }
    }, [
        `getActionClassesForEnvironmentState-${environmentId}`
    ], {
        tags: [
            cache/* actionClassCache */.j.tag.byEnvironmentId(environmentId)
        ]
    })());

// EXTERNAL MODULE: external "@prisma/client"
var client_ = __webpack_require__(896330);
;// ./app/api/v1/client/[environmentId]/environment/lib/project.ts








const getProjectForEnvironmentState = (0,react.cache)(async (environmentId)=>(0,lib_cache/* cache */.P)(async ()=>{
        (0,validate/* validateInputs */.C)([
            environmentId,
            common/* ZId */.i4
        ]);
        try {
            return await src/* prisma */.z.project.findFirst({
                where: {
                    environments: {
                        some: {
                            id: environmentId
                        }
                    }
                },
                select: {
                    id: true,
                    recontactDays: true,
                    clickOutsideClose: true,
                    darkOverlay: true,
                    placement: true,
                    inAppSurveyBranding: true,
                    styling: true
                }
            });
        } catch (error) {
            if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
                console.error(error);
                throw new errors/* DatabaseError */.a$(error.message);
            }
            throw error;
        }
    }, [
        `getProjectForEnvironmentState-${environmentId}`
    ], {
        tags: [
            project_cache/* projectCache */.E.tag.byEnvironmentId(environmentId)
        ]
    })());

// EXTERNAL MODULE: ../../packages/lib/survey/utils.ts
var utils = __webpack_require__(780564);
;// ./app/api/v1/client/[environmentId]/environment/lib/survey.ts









const getSurveysForEnvironmentState = (0,react.cache)(async (environmentId)=>(0,lib_cache/* cache */.P)(async ()=>{
        (0,validate/* validateInputs */.C)([
            environmentId,
            common/* ZId */.i4
        ]);
        try {
            const surveysPrisma = await src/* prisma */.z.survey.findMany({
                where: {
                    environmentId
                },
                select: {
                    id: true,
                    welcomeCard: true,
                    name: true,
                    questions: true,
                    variables: true,
                    type: true,
                    showLanguageSwitch: true,
                    languages: {
                        select: {
                            default: true,
                            enabled: true,
                            language: {
                                select: {
                                    id: true,
                                    code: true,
                                    alias: true,
                                    createdAt: true,
                                    updatedAt: true,
                                    projectId: true
                                }
                            }
                        }
                    },
                    endings: true,
                    autoClose: true,
                    styling: true,
                    status: true,
                    segment: {
                        include: {
                            surveys: {
                                select: {
                                    id: true
                                }
                            }
                        }
                    },
                    recontactDays: true,
                    displayLimit: true,
                    displayOption: true,
                    hiddenFields: true,
                    triggers: {
                        select: {
                            actionClass: {
                                select: {
                                    name: true
                                }
                            }
                        }
                    },
                    displayPercentage: true,
                    delay: true
                }
            });
            return surveysPrisma.map((survey)=>(0,utils/* transformPrismaSurvey */.F0)(survey));
        } catch (error) {
            if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
                console.error(error);
                throw new errors/* DatabaseError */.a$(error.message);
            }
            throw error;
        }
    }, [
        `getSurveysForEnvironmentState-${environmentId}`
    ], {
        tags: [
            survey_cache/* surveyCache */.$.tag.byEnvironmentId(environmentId)
        ]
    })());

;// ./app/api/v1/client/[environmentId]/environment/lib/environmentState.ts















/**
 *
 * @param environmentId
 * @returns The environment state
 * @throws ResourceNotFoundError if the environment or organization does not exist
 */ const getEnvironmentState = async (environmentId)=>(0,lib_cache/* cache */.P)(async ()=>{
        let revalidateEnvironment = false;
        const [environment, organization, project] = await Promise.all([
            (0,service/* getEnvironment */.uc)(environmentId),
            (0,organization_service/* getOrganizationByEnvironmentId */.TK)(environmentId),
            getProjectForEnvironmentState(environmentId)
        ]);
        if (!environment) {
            throw new errors/* ResourceNotFoundError */.CE("environment", environmentId);
        }
        if (!organization) {
            throw new errors/* ResourceNotFoundError */.CE("organization", null);
        }
        if (!project) {
            throw new errors/* ResourceNotFoundError */.CE("project", null);
        }
        if (!environment.appSetupCompleted) {
            await Promise.all([
                src/* prisma */.z.environment.update({
                    where: {
                        id: environmentId
                    },
                    data: {
                        appSetupCompleted: true
                    }
                }),
                (0,posthogServer/* capturePosthogEnvironmentEvent */.s)(environmentId, "app setup completed")
            ]);
            revalidateEnvironment = true;
        }
        // check if MAU limit is reached
        let isMonthlyResponsesLimitReached = false;
        if (constants/* IS_FORMBRICKS_CLOUD */.Si) {
            const monthlyResponseLimit = organization.billing.limits.monthly.responses;
            const currentResponseCount = await (0,organization_service/* getMonthlyOrganizationResponseCount */.XU)(organization.id);
            isMonthlyResponsesLimitReached = monthlyResponseLimit !== null && currentResponseCount >= monthlyResponseLimit;
        }
        if (isMonthlyResponsesLimitReached) {
            try {
                await (0,posthogServer/* sendPlanLimitsReachedEventToPosthogWeekly */.S)(environmentId, {
                    plan: organization.billing.plan,
                    limits: {
                        projects: null,
                        monthly: {
                            miu: null,
                            responses: organization.billing.limits.monthly.responses
                        }
                    }
                });
            } catch (err) {
                console.error(`Error sending plan limits reached event to Posthog: ${err}`);
            }
        }
        const [surveys, actionClasses] = await Promise.all([
            getSurveysForEnvironmentState(environmentId),
            getActionClassesForEnvironmentState(environmentId)
        ]);
        const filteredSurveys = surveys.filter((survey)=>survey.type === "app" && survey.status === "inProgress");
        const data = {
            surveys: !isMonthlyResponsesLimitReached ? filteredSurveys : [],
            actionClasses,
            project: project
        };
        return {
            data,
            revalidateEnvironment
        };
    }, [
        `environmentState-${environmentId}`
    ], {
        ...constants/* IS_FORMBRICKS_CLOUD */.Si && {
            revalidate: 24 * 60 * 60
        },
        tags: [
            environment_cache/* environmentCache */.e.tag.byId(environmentId),
            organization_cache/* organizationCache */.S.tag.byEnvironmentId(environmentId),
            project_cache/* projectCache */.E.tag.byEnvironmentId(environmentId),
            survey_cache/* surveyCache */.$.tag.byEnvironmentId(environmentId),
            cache/* actionClassCache */.j.tag.byEnvironmentId(environmentId)
        ]
    })();

// EXTERNAL MODULE: ./app/lib/api/response.ts
var response = __webpack_require__(328779);
// EXTERNAL MODULE: ./app/lib/api/validator.ts
var validator = __webpack_require__(105032);
// EXTERNAL MODULE: ../../packages/types/js.ts + 1 modules
var js = __webpack_require__(167229);
;// ./app/api/v1/client/[environmentId]/environment/route.ts






const OPTIONS = async ()=>{
    return response/* responses */.n.successResponse({}, true);
};
const GET = async (_, props)=>{
    const params = await props.params;
    try {
        // validate using zod
        const inputValidation = js/* ZJsSyncInput */.Rl.safeParse({
            environmentId: params.environmentId
        });
        if (!inputValidation.success) {
            return response/* responses */.n.badRequestResponse("Fields are missing or incorrectly formatted", (0,validator/* transformErrorToDetails */.m)(inputValidation.error), true);
        }
        try {
            const environmentState = await getEnvironmentState(params.environmentId);
            const { data, revalidateEnvironment } = environmentState;
            if (revalidateEnvironment) {
                environment_cache/* environmentCache */.e.revalidate({
                    id: inputValidation.data.environmentId,
                    projectId: data.project.id
                });
            }
            return response/* responses */.n.successResponse({
                data,
                expiresAt: new Date(Date.now() + 1000 * 60 * 30)
            }, true, "public, s-maxage=600, max-age=840, stale-while-revalidate=600, stale-if-error=600");
        } catch (err) {
            if (err instanceof errors/* ResourceNotFoundError */.CE) {
                return response/* responses */.n.notFoundResponse(err.resourceType, err.resourceId);
            }
            console.error(err);
            return response/* responses */.n.internalServerErrorResponse(err.message, true);
        }
    } catch (error) {
        console.error(error);
        return response/* responses */.n.internalServerErrorResponse("Unable to handle the request: " + error.message, true);
    }
};

;// ../../node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?page=%2Fapi%2Fv1%2Fclient%2F%5BenvironmentId%5D%2Fenvironment%2Froute&name=app%2Fapi%2Fv1%2Fclient%2F%5BenvironmentId%5D%2Fenvironment%2Froute&pagePath=private-next-app-dir%2Fapi%2Fv1%2Fclient%2F%5BenvironmentId%5D%2Fenvironment%2Froute.ts&appDir=%2FUsers%2Fkdy1%2Fprojects%2Fformbricks%2Fapps%2Fweb%2Fapp&appPaths=%2Fapi%2Fv1%2Fclient%2F%5BenvironmentId%5D%2Fenvironment%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=standalone&nextConfigExperimentalUseEarlyImport=&preferredRegion=&middlewareConfig=e30%3D!




// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = "standalone"
const routeModule = new module_compiled.AppRouteRouteModule({
    definition: {
        kind: route_kind.RouteKind.APP_ROUTE,
        page: "/api/v1/client/[environmentId]/environment/route",
        pathname: "/api/v1/client/[environmentId]/environment",
        filename: "route",
        bundlePath: "app/api/v1/client/[environmentId]/environment/route"
    },
    resolvedPagePath: "/Users/kdy1/projects/formbricks/apps/web/app/api/v1/client/[environmentId]/environment/route.ts",
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

/***/ 709516:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ embeddingsModel),
/* harmony export */   V: () => (/* binding */ llmModel)
/* harmony export */ });
/* harmony import */ var _ai_sdk_azure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(237330);
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(162437);


const llmModel = (0,_ai_sdk_azure__WEBPACK_IMPORTED_MODULE_0__/* .createAzure */ .Q)({
    resourceName: _env__WEBPACK_IMPORTED_MODULE_1__/* .env */ ._.AI_AZURE_LLM_RESSOURCE_NAME,
    apiKey: _env__WEBPACK_IMPORTED_MODULE_1__/* .env */ ._.AI_AZURE_LLM_API_KEY
})(_env__WEBPACK_IMPORTED_MODULE_1__/* .env */ ._.AI_AZURE_LLM_DEPLOYMENT_ID || "llm");
const embeddingsModel = (0,_ai_sdk_azure__WEBPACK_IMPORTED_MODULE_0__/* .createAzure */ .Q)({
    resourceName: _env__WEBPACK_IMPORTED_MODULE_1__/* .env */ ._.AI_AZURE_EMBEDDINGS_RESSOURCE_NAME,
    apiKey: _env__WEBPACK_IMPORTED_MODULE_1__/* .env */ ._.AI_AZURE_EMBEDDINGS_API_KEY
}).embedding(_env__WEBPACK_IMPORTED_MODULE_1__/* .env */ ._.AI_AZURE_EMBEDDINGS_DEPLOYMENT_ID || "embeddings", {
    dimensions: 512
});


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

/***/ 544825:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ sendPlanLimitsReachedEventToPosthogWeekly),
/* harmony export */   s: () => (/* binding */ capturePosthogEnvironmentEvent)
/* harmony export */ });
/* harmony import */ var posthog_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(309398);
/* harmony import */ var _cache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(794356);
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(162437);



const enabled =  true && _env__WEBPACK_IMPORTED_MODULE_1__/* .env */ ._.NEXT_PUBLIC_POSTHOG_API_HOST && _env__WEBPACK_IMPORTED_MODULE_1__/* .env */ ._.NEXT_PUBLIC_POSTHOG_API_KEY;
const capturePosthogEnvironmentEvent = async (environmentId, eventName, properties = {})=>{
    if (!enabled || typeof _env__WEBPACK_IMPORTED_MODULE_1__/* .env */ ._.NEXT_PUBLIC_POSTHOG_API_HOST !== "string" || typeof _env__WEBPACK_IMPORTED_MODULE_1__/* .env */ ._.NEXT_PUBLIC_POSTHOG_API_KEY !== "string") {
        return;
    }
    try {
        const client = new posthog_node__WEBPACK_IMPORTED_MODULE_0__/* .PostHog */ .f2(_env__WEBPACK_IMPORTED_MODULE_1__/* .env */ ._.NEXT_PUBLIC_POSTHOG_API_KEY, {
            host: _env__WEBPACK_IMPORTED_MODULE_1__/* .env */ ._.NEXT_PUBLIC_POSTHOG_API_HOST
        });
        client.capture({
            // workaround with a static string as exaplained in PostHog docs: https://posthog.com/docs/product-analytics/group-analytics
            distinctId: "environmentEvents",
            event: eventName,
            groups: {
                environment: environmentId
            },
            properties
        });
        await client.shutdown();
    } catch (error) {
        console.error("error sending posthog event:", error);
    }
};
const sendPlanLimitsReachedEventToPosthogWeekly = (environmentId, billing)=>(0,_cache__WEBPACK_IMPORTED_MODULE_2__/* .cache */ .P)(async ()=>{
        try {
            await capturePosthogEnvironmentEvent(environmentId, "plan limit reached", {
                ...billing
            });
            return "success";
        } catch (error) {
            console.error(error);
            throw error;
        }
    }, [
        `sendPlanLimitsReachedEventToPosthogWeekly-${billing.plan}-${environmentId}`
    ], {
        revalidate: 60 * 60 * 24 * 7
    })();


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


/***/ }),

/***/ 780564:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F0: () => (/* binding */ transformPrismaSurvey),
/* harmony export */   XF: () => (/* binding */ buildOrderByClause),
/* harmony export */   as: () => (/* binding */ anySurveyHasFilters),
/* harmony export */   dk: () => (/* binding */ doesSurveyHasOpenTextQuestion),
/* harmony export */   hv: () => (/* binding */ buildWhereClause),
/* harmony export */   ne: () => (/* binding */ getInsightsEnabled)
/* harmony export */ });
/* harmony import */ var ai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(850910);
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(545198);
/* harmony import */ var _aiModels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(709516);




const transformPrismaSurvey = (surveyPrisma)=>{
    let segment = null;
    if (surveyPrisma.segment) {
        segment = {
            ...surveyPrisma.segment,
            surveys: surveyPrisma.segment.surveys.map((survey)=>survey.id)
        };
    }
    const transformedSurvey = {
        ...surveyPrisma,
        displayPercentage: Number(surveyPrisma.displayPercentage) || null,
        segment
    };
    return transformedSurvey;
};
const buildWhereClause = (filterCriteria)=>{
    const whereClause = [];
    // for name
    if (filterCriteria?.name) {
        whereClause.push({
            name: {
                contains: filterCriteria.name,
                mode: "insensitive"
            }
        });
    }
    // for status
    if (filterCriteria?.status && filterCriteria?.status?.length) {
        whereClause.push({
            status: {
                in: filterCriteria.status
            }
        });
    }
    // for type
    if (filterCriteria?.type && filterCriteria?.type?.length) {
        whereClause.push({
            type: {
                in: filterCriteria.type
            }
        });
    }
    // for createdBy
    if (filterCriteria?.createdBy?.value && filterCriteria?.createdBy?.value?.length) {
        if (filterCriteria.createdBy.value.length === 1) {
            if (filterCriteria.createdBy.value[0] === "you") {
                whereClause.push({
                    createdBy: filterCriteria.createdBy.userId
                });
            }
            if (filterCriteria.createdBy.value[0] === "others") {
                whereClause.push({
                    OR: [
                        {
                            createdBy: {
                                not: filterCriteria.createdBy.userId
                            }
                        },
                        {
                            createdBy: null
                        }
                    ]
                });
            }
        }
    }
    return {
        AND: whereClause
    };
};
const buildOrderByClause = (sortBy)=>{
    const orderMapping = {
        name: {
            name: "asc"
        },
        createdAt: {
            createdAt: "desc"
        },
        updatedAt: {
            updatedAt: "desc"
        }
    };
    return sortBy ? [
        orderMapping[sortBy] || {
            updatedAt: "desc"
        }
    ] : undefined;
};
const anySurveyHasFilters = (surveys)=>{
    return surveys.some((survey)=>{
        if ("segment" in survey && survey.segment) {
            return survey.segment.filters && survey.segment.filters.length > 0;
        }
        return false;
    });
};
const doesSurveyHasOpenTextQuestion = (questions)=>{
    return questions.some((question)=>question.type === "openText");
};
const getInsightsEnabled = async (question)=>{
    try {
        const { object } = await (0,ai__WEBPACK_IMPORTED_MODULE_0__/* .generateObject */ .pY)({
            model: _aiModels__WEBPACK_IMPORTED_MODULE_1__/* .llmModel */ .V,
            schema: zod__WEBPACK_IMPORTED_MODULE_2__.z.object({
                insightsEnabled: zod__WEBPACK_IMPORTED_MODULE_2__.z.boolean()
            }),
            prompt: `We extract insights (e.g. feature requests, complaints, other) from survey questions. Can we find them in this question?: ${question.headline.default}`,
            experimental_telemetry: {
                isEnabled: true
            }
        });
        return object.insightsEnabled;
    } catch (error) {
        throw error;
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [8079,3073,7863,5069,5570,8728,9398,881,3687,5863,6483], () => (__webpack_exec__(889591)));
module.exports = __webpack_exports__;

})();