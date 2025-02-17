"use strict";
exports.id = 7043;
exports.ids = [7043];
exports.modules = {

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


/***/ }),

/***/ 222118:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Dp: () => (/* binding */ getSurvey),
/* harmony export */   MT: () => (/* binding */ deleteSurvey),
/* harmony export */   Yt: () => (/* binding */ getSurveyCount),
/* harmony export */   cU: () => (/* binding */ updateSurvey),
/* harmony export */   k_: () => (/* binding */ getSurveys),
/* harmony export */   s: () => (/* binding */ getSurveyIdByResultShareKey),
/* harmony export */   th: () => (/* binding */ createSurvey),
/* harmony export */   xc: () => (/* binding */ getSurveysBySegmentId)
/* harmony export */ });
/* unused harmony exports selectSurvey, getSurveysByActionClassId, getInProgressSurveyCount, copySurveyToOtherEnvironment, loadNewSegmentInSurvey */
/* harmony import */ var _paralleldrive_cuid2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(311287);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(896330);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(922728);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _formbricks_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(527610);
/* harmony import */ var _formbricks_types_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(733735);
/* harmony import */ var _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(470641);
/* harmony import */ var _formbricks_types_segment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(657773);
/* harmony import */ var _formbricks_types_surveys_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(875863);
/* harmony import */ var _actionClass_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(440792);
/* harmony import */ var _cache__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(794356);
/* harmony import */ var _cache_segment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(337386);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(836919);
/* harmony import */ var _organization_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(353687);
/* harmony import */ var _posthogServer__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(544825);
/* harmony import */ var _response_cache__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(122522);
/* harmony import */ var _utils_ai__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(483228);
/* harmony import */ var _utils_validate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(860988);
/* harmony import */ var _cache__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(249479);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(780564);


























const selectSurvey = {
    id: true,
    createdAt: true,
    updatedAt: true,
    name: true,
    type: true,
    environmentId: true,
    createdBy: true,
    status: true,
    welcomeCard: true,
    questions: true,
    endings: true,
    hiddenFields: true,
    variables: true,
    displayOption: true,
    recontactDays: true,
    displayLimit: true,
    autoClose: true,
    runOnDate: true,
    closeOnDate: true,
    delay: true,
    displayPercentage: true,
    autoComplete: true,
    isVerifyEmailEnabled: true,
    isSingleResponsePerEmailEnabled: true,
    redirectUrl: true,
    projectOverwrites: true,
    styling: true,
    surveyClosedMessage: true,
    singleUse: true,
    pin: true,
    resultShareKey: true,
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
    triggers: {
        select: {
            actionClass: {
                select: {
                    id: true,
                    createdAt: true,
                    updatedAt: true,
                    environmentId: true,
                    name: true,
                    description: true,
                    type: true,
                    key: true,
                    noCodeConfig: true
                }
            }
        }
    },
    segment: {
        include: {
            surveys: {
                select: {
                    id: true
                }
            }
        }
    },
    followUps: true
};
const checkTriggersValidity = (triggers, actionClasses)=>{
    if (!triggers) return;
    // check if all the triggers are valid
    triggers.forEach((trigger)=>{
        if (!actionClasses.find((actionClass)=>actionClass.id === trigger.actionClass.id)) {
            throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_4__/* .InvalidInputError */ .oC("Invalid trigger id");
        }
    });
    // check if all the triggers are unique
    const triggerIds = triggers.map((trigger)=>trigger.actionClass.id);
    if (new Set(triggerIds).size !== triggerIds.length) {
        throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_4__/* .InvalidInputError */ .oC("Duplicate trigger id");
    }
};
const handleTriggerUpdates = (updatedTriggers, currentTriggers, actionClasses)=>{
    if (!updatedTriggers) return {};
    checkTriggersValidity(updatedTriggers, actionClasses);
    const currentTriggerIds = currentTriggers.map((trigger)=>trigger.actionClass.id);
    const updatedTriggerIds = updatedTriggers.map((trigger)=>trigger.actionClass.id);
    // added triggers are triggers that are not in the current triggers and are there in the new triggers
    const addedTriggers = updatedTriggers.filter((trigger)=>!currentTriggerIds.includes(trigger.actionClass.id));
    // deleted triggers are triggers that are not in the new triggers and are there in the current triggers
    const deletedTriggers = currentTriggers.filter((trigger)=>!updatedTriggerIds.includes(trigger.actionClass.id));
    // Construct the triggers update object
    const triggersUpdate = {};
    if (addedTriggers.length > 0) {
        triggersUpdate.create = addedTriggers.map((trigger)=>({
                actionClassId: trigger.actionClass.id
            }));
    }
    if (deletedTriggers.length > 0) {
        // disconnect the public triggers from the survey
        triggersUpdate.deleteMany = {
            actionClassId: {
                in: deletedTriggers.map((trigger)=>trigger.actionClass.id)
            }
        };
    }
    [
        ...addedTriggers,
        ...deletedTriggers
    ].forEach((trigger)=>{
        _cache__WEBPACK_IMPORTED_MODULE_5__/* .surveyCache */ .$.revalidate({
            actionClassId: trigger.actionClass.id
        });
    });
    return triggersUpdate;
};
const getSurvey = (0,react__WEBPACK_IMPORTED_MODULE_2__.cache)(async (surveyId)=>(0,_cache__WEBPACK_IMPORTED_MODULE_6__/* .cache */ .P)(async ()=>{
        (0,_utils_validate__WEBPACK_IMPORTED_MODULE_7__/* .validateInputs */ .C)([
            surveyId,
            _formbricks_types_common__WEBPACK_IMPORTED_MODULE_8__/* .ZId */ .i4
        ]);
        let surveyPrisma;
        try {
            surveyPrisma = await _formbricks_database__WEBPACK_IMPORTED_MODULE_3__/* .prisma */ .z.survey.findUnique({
                where: {
                    id: surveyId
                },
                select: selectSurvey
            });
        } catch (error) {
            if (error instanceof _prisma_client__WEBPACK_IMPORTED_MODULE_1__.Prisma.PrismaClientKnownRequestError) {
                console.error(error);
                throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_4__/* .DatabaseError */ .a$(error.message);
            }
            throw error;
        }
        if (!surveyPrisma) {
            return null;
        }
        return (0,_utils__WEBPACK_IMPORTED_MODULE_9__/* .transformPrismaSurvey */ .F0)(surveyPrisma);
    }, [
        `getSurvey-${surveyId}`
    ], {
        tags: [
            _cache__WEBPACK_IMPORTED_MODULE_5__/* .surveyCache */ .$.tag.byId(surveyId)
        ]
    })());
const getSurveysByActionClassId = (0,react__WEBPACK_IMPORTED_MODULE_2__.cache)(async (actionClassId, page)=>(0,_cache__WEBPACK_IMPORTED_MODULE_6__/* .cache */ .P)(async ()=>{
        (0,_utils_validate__WEBPACK_IMPORTED_MODULE_7__/* .validateInputs */ .C)([
            actionClassId,
            _formbricks_types_common__WEBPACK_IMPORTED_MODULE_8__/* .ZId */ .i4
        ], [
            page,
            _formbricks_types_common__WEBPACK_IMPORTED_MODULE_8__/* .ZOptionalNumber */ .Wo
        ]);
        let surveysPrisma;
        try {
            surveysPrisma = await _formbricks_database__WEBPACK_IMPORTED_MODULE_3__/* .prisma */ .z.survey.findMany({
                where: {
                    triggers: {
                        some: {
                            actionClass: {
                                id: actionClassId
                            }
                        }
                    }
                },
                select: selectSurvey,
                take: page ? _constants__WEBPACK_IMPORTED_MODULE_10__/* .ITEMS_PER_PAGE */ .re : undefined,
                skip: page ? _constants__WEBPACK_IMPORTED_MODULE_10__/* .ITEMS_PER_PAGE */ .re * (page - 1) : undefined
            });
        } catch (error) {
            if (error instanceof _prisma_client__WEBPACK_IMPORTED_MODULE_1__.Prisma.PrismaClientKnownRequestError) {
                console.error(error);
                throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_4__/* .DatabaseError */ .a$(error.message);
            }
            throw error;
        }
        const surveys = [];
        for (const surveyPrisma of surveysPrisma){
            const transformedSurvey = (0,_utils__WEBPACK_IMPORTED_MODULE_9__/* .transformPrismaSurvey */ .F0)(surveyPrisma);
            surveys.push(transformedSurvey);
        }
        return surveys;
    }, [
        `getSurveysByActionClassId-${actionClassId}-${page}`
    ], {
        tags: [
            _cache__WEBPACK_IMPORTED_MODULE_5__/* .surveyCache */ .$.tag.byActionClassId(actionClassId)
        ]
    })());
const getSurveys = (0,react__WEBPACK_IMPORTED_MODULE_2__.cache)(async (environmentId, limit, offset, filterCriteria)=>(0,_cache__WEBPACK_IMPORTED_MODULE_6__/* .cache */ .P)(async ()=>{
        (0,_utils_validate__WEBPACK_IMPORTED_MODULE_7__/* .validateInputs */ .C)([
            environmentId,
            _formbricks_types_common__WEBPACK_IMPORTED_MODULE_8__/* .ZId */ .i4
        ], [
            limit,
            _formbricks_types_common__WEBPACK_IMPORTED_MODULE_8__/* .ZOptionalNumber */ .Wo
        ], [
            offset,
            _formbricks_types_common__WEBPACK_IMPORTED_MODULE_8__/* .ZOptionalNumber */ .Wo
        ]);
        try {
            const surveysPrisma = await _formbricks_database__WEBPACK_IMPORTED_MODULE_3__/* .prisma */ .z.survey.findMany({
                where: {
                    environmentId,
                    ...(0,_utils__WEBPACK_IMPORTED_MODULE_9__/* .buildWhereClause */ .hv)(filterCriteria)
                },
                select: selectSurvey,
                orderBy: (0,_utils__WEBPACK_IMPORTED_MODULE_9__/* .buildOrderByClause */ .XF)(filterCriteria?.sortBy),
                take: limit,
                skip: offset
            });
            return surveysPrisma.map((surveyPrisma)=>(0,_utils__WEBPACK_IMPORTED_MODULE_9__/* .transformPrismaSurvey */ .F0)(surveyPrisma));
        } catch (error) {
            if (error instanceof _prisma_client__WEBPACK_IMPORTED_MODULE_1__.Prisma.PrismaClientKnownRequestError) {
                console.error(error);
                throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_4__/* .DatabaseError */ .a$(error.message);
            }
            throw error;
        }
    }, [
        `getSurveys-${environmentId}-${limit}-${offset}-${JSON.stringify(filterCriteria)}`
    ], {
        tags: [
            _cache__WEBPACK_IMPORTED_MODULE_5__/* .surveyCache */ .$.tag.byEnvironmentId(environmentId)
        ]
    })());
const getSurveyCount = (0,react__WEBPACK_IMPORTED_MODULE_2__.cache)(async (environmentId)=>(0,_cache__WEBPACK_IMPORTED_MODULE_6__/* .cache */ .P)(async ()=>{
        (0,_utils_validate__WEBPACK_IMPORTED_MODULE_7__/* .validateInputs */ .C)([
            environmentId,
            _formbricks_types_common__WEBPACK_IMPORTED_MODULE_8__/* .ZId */ .i4
        ]);
        try {
            const surveyCount = await _formbricks_database__WEBPACK_IMPORTED_MODULE_3__/* .prisma */ .z.survey.count({
                where: {
                    environmentId: environmentId
                }
            });
            return surveyCount;
        } catch (error) {
            if (error instanceof _prisma_client__WEBPACK_IMPORTED_MODULE_1__.Prisma.PrismaClientKnownRequestError) {
                console.error(error);
                throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_4__/* .DatabaseError */ .a$(error.message);
            }
            throw error;
        }
    }, [
        `getSurveyCount-${environmentId}`
    ], {
        tags: [
            _cache__WEBPACK_IMPORTED_MODULE_5__/* .surveyCache */ .$.tag.byEnvironmentId(environmentId)
        ]
    })());
const getInProgressSurveyCount = (0,react__WEBPACK_IMPORTED_MODULE_2__.cache)(async (environmentId, filterCriteria)=>(0,_cache__WEBPACK_IMPORTED_MODULE_6__/* .cache */ .P)(async ()=>{
        (0,_utils_validate__WEBPACK_IMPORTED_MODULE_7__/* .validateInputs */ .C)([
            environmentId,
            _formbricks_types_common__WEBPACK_IMPORTED_MODULE_8__/* .ZId */ .i4
        ]);
        try {
            const surveyCount = await _formbricks_database__WEBPACK_IMPORTED_MODULE_3__/* .prisma */ .z.survey.count({
                where: {
                    environmentId: environmentId,
                    status: "inProgress",
                    ...(0,_utils__WEBPACK_IMPORTED_MODULE_9__/* .buildWhereClause */ .hv)(filterCriteria)
                }
            });
            return surveyCount;
        } catch (error) {
            if (error instanceof _prisma_client__WEBPACK_IMPORTED_MODULE_1__.Prisma.PrismaClientKnownRequestError) {
                console.error(error);
                throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_4__/* .DatabaseError */ .a$(error.message);
            }
            throw error;
        }
    }, [
        `getInProgressSurveyCount-${environmentId}-${JSON.stringify(filterCriteria)}`
    ], {
        tags: [
            _cache__WEBPACK_IMPORTED_MODULE_5__/* .surveyCache */ .$.tag.byEnvironmentId(environmentId)
        ]
    })());
const updateSurvey = async (updatedSurvey)=>{
    (0,_utils_validate__WEBPACK_IMPORTED_MODULE_7__/* .validateInputs */ .C)([
        updatedSurvey,
        _formbricks_types_surveys_types__WEBPACK_IMPORTED_MODULE_11__/* .ZSurvey */ .pf
    ]);
    try {
        const surveyId = updatedSurvey.id;
        let data = {};
        const actionClasses = await (0,_actionClass_service__WEBPACK_IMPORTED_MODULE_12__/* .getActionClasses */ .nq)(updatedSurvey.environmentId);
        const currentSurvey = await getSurvey(surveyId);
        if (!currentSurvey) {
            throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_4__/* .ResourceNotFoundError */ .CE("Survey", surveyId);
        }
        const { triggers, environmentId, segment, questions, languages, type, followUps, ...surveyData } = updatedSurvey;
        if (languages) {
            // Process languages update logic here
            // Extract currentLanguageIds and updatedLanguageIds
            const currentLanguageIds = currentSurvey.languages ? currentSurvey.languages.map((l)=>l.language.id) : [];
            const updatedLanguageIds = languages.length > 1 ? updatedSurvey.languages.map((l)=>l.language.id) : [];
            const enabledLanguageIds = languages.map((language)=>{
                if (language.enabled) return language.language.id;
            });
            // Determine languages to add and remove
            const languagesToAdd = updatedLanguageIds.filter((id)=>!currentLanguageIds.includes(id));
            const languagesToRemove = currentLanguageIds.filter((id)=>!updatedLanguageIds.includes(id));
            const defaultLanguageId = updatedSurvey.languages.find((l)=>l.default)?.language.id;
            // Prepare data for Prisma update
            data.languages = {};
            // Update existing languages for default value changes
            data.languages.updateMany = currentSurvey.languages.map((surveyLanguage)=>({
                    where: {
                        languageId: surveyLanguage.language.id
                    },
                    data: {
                        default: surveyLanguage.language.id === defaultLanguageId,
                        enabled: enabledLanguageIds.includes(surveyLanguage.language.id)
                    }
                }));
            // Add new languages
            if (languagesToAdd.length > 0) {
                data.languages.create = languagesToAdd.map((languageId)=>({
                        languageId: languageId,
                        default: languageId === defaultLanguageId,
                        enabled: enabledLanguageIds.includes(languageId)
                    }));
            }
            // Remove languages no longer associated with the survey
            if (languagesToRemove.length > 0) {
                data.languages.deleteMany = languagesToRemove.map((languageId)=>({
                        languageId: languageId,
                        enabled: enabledLanguageIds.includes(languageId)
                    }));
            }
        }
        if (triggers) {
            data.triggers = handleTriggerUpdates(triggers, currentSurvey.triggers, actionClasses);
        }
        // if the survey body has type other than "app" but has a private segment, we delete that segment, and if it has a public segment, we disconnect from to the survey
        if (segment) {
            if (type === "app") {
                // parse the segment filters:
                const parsedFilters = _formbricks_types_segment__WEBPACK_IMPORTED_MODULE_13__/* .ZSegmentFilters */ .Ji.safeParse(segment.filters);
                if (!parsedFilters.success) {
                    throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_4__/* .InvalidInputError */ .oC("Invalid user segment filters");
                }
                try {
                    // update the segment:
                    let updatedInput = {
                        ...segment,
                        surveys: undefined
                    };
                    if (segment.surveys) {
                        updatedInput = {
                            ...segment,
                            surveys: {
                                connect: segment.surveys.map((surveyId)=>({
                                        id: surveyId
                                    }))
                            }
                        };
                    }
                    const updatedSegment = await _formbricks_database__WEBPACK_IMPORTED_MODULE_3__/* .prisma */ .z.segment.update({
                        where: {
                            id: segment.id
                        },
                        data: updatedInput,
                        select: {
                            surveys: {
                                select: {
                                    id: true
                                }
                            },
                            environmentId: true,
                            id: true
                        }
                    });
                    _cache_segment__WEBPACK_IMPORTED_MODULE_14__/* .segmentCache */ .C.revalidate({
                        id: updatedSegment.id,
                        environmentId: updatedSegment.environmentId
                    });
                    updatedSegment.surveys.map((survey)=>_cache__WEBPACK_IMPORTED_MODULE_5__/* .surveyCache */ .$.revalidate({
                            id: survey.id
                        }));
                } catch (error) {
                    console.error(error);
                    throw new Error("Error updating survey");
                }
            } else {
                if (segment.isPrivate) {
                    // disconnect the private segment first and then delete:
                    await _formbricks_database__WEBPACK_IMPORTED_MODULE_3__/* .prisma */ .z.segment.update({
                        where: {
                            id: segment.id
                        },
                        data: {
                            surveys: {
                                disconnect: {
                                    id: surveyId
                                }
                            }
                        }
                    });
                    // delete the private segment:
                    await _formbricks_database__WEBPACK_IMPORTED_MODULE_3__/* .prisma */ .z.segment.delete({
                        where: {
                            id: segment.id
                        }
                    });
                } else {
                    await _formbricks_database__WEBPACK_IMPORTED_MODULE_3__/* .prisma */ .z.survey.update({
                        where: {
                            id: surveyId
                        },
                        data: {
                            segment: {
                                disconnect: true
                            }
                        }
                    });
                }
            }
            _cache_segment__WEBPACK_IMPORTED_MODULE_14__/* .segmentCache */ .C.revalidate({
                id: segment.id,
                environmentId: segment.environmentId
            });
        } else if (type === "app") {
            if (!currentSurvey.segment) {
                await _formbricks_database__WEBPACK_IMPORTED_MODULE_3__/* .prisma */ .z.survey.update({
                    where: {
                        id: surveyId
                    },
                    data: {
                        segment: {
                            connectOrCreate: {
                                where: {
                                    environmentId_title: {
                                        environmentId,
                                        title: surveyId
                                    }
                                },
                                create: {
                                    title: surveyId,
                                    isPrivate: true,
                                    filters: [],
                                    environment: {
                                        connect: {
                                            id: environmentId
                                        }
                                    }
                                }
                            }
                        }
                    }
                });
                _cache_segment__WEBPACK_IMPORTED_MODULE_14__/* .segmentCache */ .C.revalidate({
                    environmentId
                });
            }
        }
        if (followUps) {
            // Separate follow-ups into categories based on deletion flag
            const deletedFollowUps = followUps.filter((followUp)=>followUp.deleted);
            const nonDeletedFollowUps = followUps.filter((followUp)=>!followUp.deleted);
            // Get set of existing follow-up IDs from currentSurvey
            const existingFollowUpIds = new Set(currentSurvey.followUps.map((f)=>f.id));
            // Separate non-deleted follow-ups into new and existing
            const existingFollowUps = nonDeletedFollowUps.filter((followUp)=>existingFollowUpIds.has(followUp.id));
            const newFollowUps = nonDeletedFollowUps.filter((followUp)=>!existingFollowUpIds.has(followUp.id));
            data.followUps = {
                // Update existing follow-ups
                updateMany: existingFollowUps.map((followUp)=>({
                        where: {
                            id: followUp.id
                        },
                        data: {
                            name: followUp.name,
                            trigger: followUp.trigger,
                            action: followUp.action
                        }
                    })),
                // Create new follow-ups
                createMany: newFollowUps.length > 0 ? {
                    data: newFollowUps.map((followUp)=>({
                            name: followUp.name,
                            trigger: followUp.trigger,
                            action: followUp.action
                        }))
                } : undefined,
                // Delete follow-ups marked as deleted, regardless of whether they exist in DB
                deleteMany: deletedFollowUps.length > 0 ? deletedFollowUps.map((followUp)=>({
                        id: followUp.id
                    })) : undefined
            };
        }
        data.questions = questions.map((question)=>{
            const { isDraft, ...rest } = question;
            return rest;
        });
        const organization = await (0,_organization_service__WEBPACK_IMPORTED_MODULE_15__/* .getOrganizationByEnvironmentId */ .TK)(environmentId);
        if (!organization) {
            throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_4__/* .ResourceNotFoundError */ .CE("Organization", null);
        }
        //AI Insights
        const isAIEnabled = await (0,_utils_ai__WEBPACK_IMPORTED_MODULE_16__/* .getIsAIEnabled */ .K)(organization);
        if (isAIEnabled) {
            if ((0,_utils__WEBPACK_IMPORTED_MODULE_9__/* .doesSurveyHasOpenTextQuestion */ .dk)(data.questions ?? [])) {
                const openTextQuestions = data.questions?.filter((question)=>question.type === "openText") ?? [];
                const currentSurveyOpenTextQuestions = currentSurvey.questions?.filter((question)=>question.type === "openText");
                // find the questions that have been updated or added
                const questionsToCheckForInsights = [];
                for (const question of openTextQuestions){
                    const existingQuestion = currentSurveyOpenTextQuestions?.find((ques)=>ques.id === question.id);
                    const isExistingQuestion = !!existingQuestion;
                    if (isExistingQuestion && question.headline.default === existingQuestion.headline.default && existingQuestion.insightsEnabled !== undefined) {
                        continue;
                    } else {
                        questionsToCheckForInsights.push(question);
                    }
                }
                if (questionsToCheckForInsights.length > 0) {
                    const insightsEnabledValues = await Promise.all(questionsToCheckForInsights.map(async (question)=>{
                        const insightsEnabled = await (0,_utils__WEBPACK_IMPORTED_MODULE_9__/* .getInsightsEnabled */ .ne)(question);
                        return {
                            id: question.id,
                            insightsEnabled
                        };
                    }));
                    data.questions = data.questions?.map((question)=>{
                        const index = insightsEnabledValues.findIndex((item)=>item.id === question.id);
                        if (index !== -1) {
                            return {
                                ...question,
                                insightsEnabled: insightsEnabledValues[index].insightsEnabled
                            };
                        }
                        return question;
                    });
                }
            }
        } else {
            // check if an existing question got changed that had insights enabled
            const insightsEnabledOpenTextQuestions = currentSurvey.questions?.filter((question)=>question.type === "openText" && question.insightsEnabled !== undefined);
            // if question headline changed, remove insightsEnabled
            for (const question of insightsEnabledOpenTextQuestions){
                const updatedQuestion = data.questions?.find((q)=>q.id === question.id);
                if (updatedQuestion && updatedQuestion.headline.default !== question.headline.default) {
                    updatedQuestion.insightsEnabled = undefined;
                }
            }
        }
        surveyData.updatedAt = new Date();
        data = {
            ...surveyData,
            ...data,
            type
        };
        // Remove scheduled status when runOnDate is not set
        if (data.status === "scheduled" && data.runOnDate === null) {
            data.status = "inProgress";
        }
        // Set scheduled status when runOnDate is set and in the future on completed surveys
        if ((data.status === "completed" || data.status === "paused" || data.status === "inProgress") && data.runOnDate && data.runOnDate > new Date()) {
            data.status = "scheduled";
        }
        delete data.createdBy;
        const prismaSurvey = await _formbricks_database__WEBPACK_IMPORTED_MODULE_3__/* .prisma */ .z.survey.update({
            where: {
                id: surveyId
            },
            data,
            select: selectSurvey
        });
        let surveySegment = null;
        if (prismaSurvey.segment) {
            surveySegment = {
                ...prismaSurvey.segment,
                surveys: prismaSurvey.segment.surveys.map((survey)=>survey.id)
            };
        }
        // TODO: Fix this, this happens because the survey type "web" is no longer in the zod types but its required in the schema for migration
        // @ts-expect-error
        const modifiedSurvey = {
            ...prismaSurvey,
            displayPercentage: Number(prismaSurvey.displayPercentage) || null,
            segment: surveySegment
        };
        _cache__WEBPACK_IMPORTED_MODULE_5__/* .surveyCache */ .$.revalidate({
            id: modifiedSurvey.id,
            environmentId: modifiedSurvey.environmentId,
            segmentId: modifiedSurvey.segment?.id,
            resultShareKey: currentSurvey.resultShareKey ?? undefined
        });
        return modifiedSurvey;
    } catch (error) {
        if (error instanceof _prisma_client__WEBPACK_IMPORTED_MODULE_1__.Prisma.PrismaClientKnownRequestError) {
            console.error(error);
            throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_4__/* .DatabaseError */ .a$(error.message);
        }
        throw error;
    }
};
const deleteSurvey = async (surveyId)=>{
    (0,_utils_validate__WEBPACK_IMPORTED_MODULE_7__/* .validateInputs */ .C)([
        surveyId,
        _formbricks_types_common__WEBPACK_IMPORTED_MODULE_8__/* .ZId */ .i4
    ]);
    try {
        const deletedSurvey = await _formbricks_database__WEBPACK_IMPORTED_MODULE_3__/* .prisma */ .z.survey.delete({
            where: {
                id: surveyId
            },
            select: selectSurvey
        });
        if (deletedSurvey.type === "app" && deletedSurvey.segment?.isPrivate) {
            const deletedSegment = await _formbricks_database__WEBPACK_IMPORTED_MODULE_3__/* .prisma */ .z.segment.delete({
                where: {
                    id: deletedSurvey.segment.id
                }
            });
            if (deletedSegment) {
                _cache_segment__WEBPACK_IMPORTED_MODULE_14__/* .segmentCache */ .C.revalidate({
                    id: deletedSegment.id,
                    environmentId: deletedSurvey.environmentId
                });
            }
        }
        _response_cache__WEBPACK_IMPORTED_MODULE_17__/* .responseCache */ .Q.revalidate({
            surveyId,
            environmentId: deletedSurvey.environmentId
        });
        _cache__WEBPACK_IMPORTED_MODULE_5__/* .surveyCache */ .$.revalidate({
            id: deletedSurvey.id,
            environmentId: deletedSurvey.environmentId,
            resultShareKey: deletedSurvey.resultShareKey ?? undefined
        });
        if (deletedSurvey.segment?.id) {
            _cache_segment__WEBPACK_IMPORTED_MODULE_14__/* .segmentCache */ .C.revalidate({
                id: deletedSurvey.segment.id,
                environmentId: deletedSurvey.environmentId
            });
        }
        // Revalidate public triggers by actionClassId
        deletedSurvey.triggers.forEach((trigger)=>{
            _cache__WEBPACK_IMPORTED_MODULE_5__/* .surveyCache */ .$.revalidate({
                actionClassId: trigger.actionClass.id
            });
        });
        return deletedSurvey;
    } catch (error) {
        if (error instanceof _prisma_client__WEBPACK_IMPORTED_MODULE_1__.Prisma.PrismaClientKnownRequestError) {
            console.error(error);
            throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_4__/* .DatabaseError */ .a$(error.message);
        }
        throw error;
    }
};
const createSurvey = async (environmentId, surveyBody)=>{
    const [parsedEnvironmentId, parsedSurveyBody] = (0,_utils_validate__WEBPACK_IMPORTED_MODULE_7__/* .validateInputs */ .C)([
        environmentId,
        _formbricks_types_common__WEBPACK_IMPORTED_MODULE_8__/* .ZId */ .i4
    ], [
        surveyBody,
        _formbricks_types_surveys_types__WEBPACK_IMPORTED_MODULE_11__/* .ZSurveyCreateInput */ .Nm
    ]);
    try {
        const { createdBy, ...restSurveyBody } = parsedSurveyBody;
        // empty languages array
        if (!restSurveyBody.languages?.length) {
            delete restSurveyBody.languages;
        }
        const actionClasses = await (0,_actionClass_service__WEBPACK_IMPORTED_MODULE_12__/* .getActionClasses */ .nq)(parsedEnvironmentId);
        // @ts-expect-error
        let data = {
            ...restSurveyBody,
            // TODO: Create with attributeFilters
            triggers: restSurveyBody.triggers ? handleTriggerUpdates(restSurveyBody.triggers, [], actionClasses) : undefined,
            attributeFilters: undefined
        };
        if (createdBy) {
            data.creator = {
                connect: {
                    id: createdBy
                }
            };
        }
        const organization = await (0,_organization_service__WEBPACK_IMPORTED_MODULE_15__/* .getOrganizationByEnvironmentId */ .TK)(parsedEnvironmentId);
        if (!organization) {
            throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_4__/* .ResourceNotFoundError */ .CE("Organization", null);
        }
        //AI Insights
        const isAIEnabled = await (0,_utils_ai__WEBPACK_IMPORTED_MODULE_16__/* .getIsAIEnabled */ .K)(organization);
        if (isAIEnabled) {
            if ((0,_utils__WEBPACK_IMPORTED_MODULE_9__/* .doesSurveyHasOpenTextQuestion */ .dk)(data.questions ?? [])) {
                const openTextQuestions = data.questions?.filter((question)=>question.type === "openText") ?? [];
                const insightsEnabledValues = await Promise.all(openTextQuestions.map(async (question)=>{
                    const insightsEnabled = await (0,_utils__WEBPACK_IMPORTED_MODULE_9__/* .getInsightsEnabled */ .ne)(question);
                    return {
                        id: question.id,
                        insightsEnabled
                    };
                }));
                data.questions = data.questions?.map((question)=>{
                    const index = insightsEnabledValues.findIndex((item)=>item.id === question.id);
                    if (index !== -1) {
                        return {
                            ...question,
                            insightsEnabled: insightsEnabledValues[index].insightsEnabled
                        };
                    }
                    return question;
                });
            }
        }
        // Survey follow-ups
        if (restSurveyBody.followUps?.length) {
            data.followUps = {
                create: restSurveyBody.followUps.map((followUp)=>({
                        name: followUp.name,
                        trigger: followUp.trigger,
                        action: followUp.action
                    }))
            };
        } else {
            delete data.followUps;
        }
        const survey = await _formbricks_database__WEBPACK_IMPORTED_MODULE_3__/* .prisma */ .z.survey.create({
            data: {
                ...data,
                environment: {
                    connect: {
                        id: parsedEnvironmentId
                    }
                }
            },
            select: selectSurvey
        });
        // if the survey created is an "app" survey, we also create a private segment for it.
        if (survey.type === "app") {
            // const newSegment = await createSegment({
            //   environmentId: parsedEnvironmentId,
            //   surveyId: survey.id,
            //   filters: [],
            //   title: survey.id,
            //   isPrivate: true,
            // });
            const newSegment = await _formbricks_database__WEBPACK_IMPORTED_MODULE_3__/* .prisma */ .z.segment.create({
                data: {
                    title: survey.id,
                    filters: [],
                    isPrivate: true,
                    environment: {
                        connect: {
                            id: parsedEnvironmentId
                        }
                    }
                }
            });
            await _formbricks_database__WEBPACK_IMPORTED_MODULE_3__/* .prisma */ .z.survey.update({
                where: {
                    id: survey.id
                },
                data: {
                    segment: {
                        connect: {
                            id: newSegment.id
                        }
                    }
                }
            });
            _cache_segment__WEBPACK_IMPORTED_MODULE_14__/* .segmentCache */ .C.revalidate({
                id: newSegment.id,
                environmentId: survey.environmentId
            });
        }
        // TODO: Fix this, this happens because the survey type "web" is no longer in the zod types but its required in the schema for migration
        // @ts-expect-error
        const transformedSurvey = {
            ...survey,
            ...survey.segment && {
                segment: {
                    ...survey.segment,
                    surveys: survey.segment.surveys.map((survey)=>survey.id)
                }
            }
        };
        _cache__WEBPACK_IMPORTED_MODULE_5__/* .surveyCache */ .$.revalidate({
            id: survey.id,
            environmentId: survey.environmentId,
            resultShareKey: survey.resultShareKey ?? undefined
        });
        if (createdBy) {
            await (0,_organization_service__WEBPACK_IMPORTED_MODULE_15__/* .subscribeOrganizationMembersToSurveyResponses */ .Ss)(survey.id, createdBy);
        }
        await (0,_posthogServer__WEBPACK_IMPORTED_MODULE_18__/* .capturePosthogEnvironmentEvent */ .s)(survey.environmentId, "survey created", {
            surveyId: survey.id,
            surveyType: survey.type
        });
        return transformedSurvey;
    } catch (error) {
        if (error instanceof _prisma_client__WEBPACK_IMPORTED_MODULE_1__.Prisma.PrismaClientKnownRequestError) {
            console.error(error);
            throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_4__/* .DatabaseError */ .a$(error.message);
        }
        throw error;
    }
};
const copySurveyToOtherEnvironment = async (environmentId, surveyId, targetEnvironmentId, userId)=>{
    validateInputs([
        environmentId,
        ZId
    ], [
        surveyId,
        ZId
    ], [
        targetEnvironmentId,
        ZId
    ], [
        userId,
        ZId
    ]);
    try {
        const isSameEnvironment = environmentId === targetEnvironmentId;
        // Fetch required resources
        const [existingEnvironment, existingProject, existingSurvey] = await Promise.all([
            getEnvironment(environmentId),
            getProjectByEnvironmentId(environmentId),
            getSurvey(surveyId)
        ]);
        if (!existingEnvironment) throw new ResourceNotFoundError("Environment", environmentId);
        if (!existingProject) throw new ResourceNotFoundError("Project", environmentId);
        if (!existingSurvey) throw new ResourceNotFoundError("Survey", surveyId);
        let targetEnvironment = null;
        let targetProject = null;
        if (isSameEnvironment) {
            targetEnvironment = existingEnvironment;
            targetProject = existingProject;
        } else {
            [targetEnvironment, targetProject] = await Promise.all([
                getEnvironment(targetEnvironmentId),
                getProjectByEnvironmentId(targetEnvironmentId)
            ]);
            if (!targetEnvironment) throw new ResourceNotFoundError("Environment", targetEnvironmentId);
            if (!targetProject) throw new ResourceNotFoundError("Project", targetEnvironmentId);
        }
        const { environmentId: _, createdBy, id: existingSurveyId, createdAt, updatedAt, ...restExistingSurvey } = existingSurvey;
        const hasLanguages = existingSurvey.languages && existingSurvey.languages.length > 0;
        // Prepare survey data
        const surveyData = {
            ...restExistingSurvey,
            id: createId(),
            name: `${existingSurvey.name} (copy)`,
            type: existingSurvey.type,
            status: "draft",
            welcomeCard: structuredClone(existingSurvey.welcomeCard),
            questions: structuredClone(existingSurvey.questions),
            endings: structuredClone(existingSurvey.endings),
            variables: structuredClone(existingSurvey.variables),
            hiddenFields: structuredClone(existingSurvey.hiddenFields),
            languages: hasLanguages ? {
                create: existingSurvey.languages.map((surveyLanguage)=>({
                        language: {
                            connectOrCreate: {
                                where: {
                                    projectId_code: {
                                        code: surveyLanguage.language.code,
                                        projectId: targetProject.id
                                    }
                                },
                                create: {
                                    code: surveyLanguage.language.code,
                                    alias: surveyLanguage.language.alias,
                                    projectId: targetProject.id
                                }
                            }
                        },
                        default: surveyLanguage.default,
                        enabled: surveyLanguage.enabled
                    }))
            } : undefined,
            triggers: {
                create: existingSurvey.triggers.map((trigger)=>{
                    const baseActionClassData = {
                        name: trigger.actionClass.name,
                        environment: {
                            connect: {
                                id: targetEnvironmentId
                            }
                        },
                        description: trigger.actionClass.description,
                        type: trigger.actionClass.type
                    };
                    if (isSameEnvironment) {
                        return {
                            actionClass: {
                                connect: {
                                    id: trigger.actionClass.id
                                }
                            }
                        };
                    } else if (trigger.actionClass.type === "code") {
                        return {
                            actionClass: {
                                connectOrCreate: {
                                    where: {
                                        key_environmentId: {
                                            key: trigger.actionClass.key,
                                            environmentId: targetEnvironmentId
                                        }
                                    },
                                    create: {
                                        ...baseActionClassData,
                                        key: trigger.actionClass.key
                                    }
                                }
                            }
                        };
                    } else {
                        return {
                            actionClass: {
                                connectOrCreate: {
                                    where: {
                                        name_environmentId: {
                                            name: trigger.actionClass.name,
                                            environmentId: targetEnvironmentId
                                        }
                                    },
                                    create: {
                                        ...baseActionClassData,
                                        noCodeConfig: trigger.actionClass.noCodeConfig ? structuredClone(trigger.actionClass.noCodeConfig) : undefined
                                    }
                                }
                            }
                        };
                    }
                })
            },
            environment: {
                connect: {
                    id: targetEnvironmentId
                }
            },
            creator: {
                connect: {
                    id: userId
                }
            },
            surveyClosedMessage: existingSurvey.surveyClosedMessage ? structuredClone(existingSurvey.surveyClosedMessage) : Prisma.JsonNull,
            singleUse: existingSurvey.singleUse ? structuredClone(existingSurvey.singleUse) : Prisma.JsonNull,
            projectOverwrites: existingSurvey.projectOverwrites ? structuredClone(existingSurvey.projectOverwrites) : Prisma.JsonNull,
            styling: existingSurvey.styling ? structuredClone(existingSurvey.styling) : Prisma.JsonNull,
            segment: undefined,
            followUps: {
                createMany: {
                    data: existingSurvey.followUps.map((followUp)=>({
                            name: followUp.name,
                            trigger: followUp.trigger,
                            action: followUp.action
                        }))
                }
            }
        };
        // Handle segment
        if (existingSurvey.segment) {
            if (existingSurvey.segment.isPrivate) {
                surveyData.segment = {
                    create: {
                        title: surveyData.id,
                        isPrivate: true,
                        filters: existingSurvey.segment.filters,
                        environment: {
                            connect: {
                                id: targetEnvironmentId
                            }
                        }
                    }
                };
            } else if (isSameEnvironment) {
                surveyData.segment = {
                    connect: {
                        id: existingSurvey.segment.id
                    }
                };
            } else {
                const existingSegmentInTargetEnvironment = await prisma.segment.findFirst({
                    where: {
                        title: existingSurvey.segment.title,
                        isPrivate: false,
                        environmentId: targetEnvironmentId
                    }
                });
                surveyData.segment = {
                    create: {
                        title: existingSegmentInTargetEnvironment ? `${existingSurvey.segment.title}-${Date.now()}` : existingSurvey.segment.title,
                        isPrivate: false,
                        filters: existingSurvey.segment.filters,
                        environment: {
                            connect: {
                                id: targetEnvironmentId
                            }
                        }
                    }
                };
            }
        }
        const targetProjectLanguageCodes = targetProject.languages.map((language)=>language.code);
        const newSurvey = await prisma.survey.create({
            data: surveyData,
            select: selectSurvey
        });
        // Identify newly created action classes
        const newActionClasses = newSurvey.triggers.map((trigger)=>trigger.actionClass);
        // Revalidate cache only for newly created action classes
        for (const actionClass of newActionClasses){
            actionClassCache.revalidate({
                environmentId: actionClass.environmentId,
                name: actionClass.name,
                id: actionClass.id
            });
        }
        let newLanguageCreated = false;
        if (existingSurvey.languages && existingSurvey.languages.length > 0) {
            const targetLanguageCodes = newSurvey.languages.map((lang)=>lang.language.code);
            newLanguageCreated = targetLanguageCodes.length > targetProjectLanguageCodes.length;
        }
        // Invalidate caches
        if (newLanguageCreated) {
            projectCache.revalidate({
                id: targetProject.id,
                environmentId: targetEnvironmentId
            });
        }
        surveyCache.revalidate({
            id: newSurvey.id,
            environmentId: newSurvey.environmentId,
            resultShareKey: newSurvey.resultShareKey ?? undefined
        });
        existingSurvey.triggers.forEach((trigger)=>{
            surveyCache.revalidate({
                actionClassId: trigger.actionClass.id
            });
        });
        if (newSurvey.segment) {
            segmentCache.revalidate({
                id: newSurvey.segment.id,
                environmentId: newSurvey.environmentId
            });
        }
        return newSurvey;
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            console.error(error);
            throw new DatabaseError(error.message);
        }
        throw error;
    }
};
const getSurveyIdByResultShareKey = (0,react__WEBPACK_IMPORTED_MODULE_2__.cache)(async (resultShareKey)=>(0,_cache__WEBPACK_IMPORTED_MODULE_6__/* .cache */ .P)(async ()=>{
        try {
            const survey = await _formbricks_database__WEBPACK_IMPORTED_MODULE_3__/* .prisma */ .z.survey.findFirst({
                where: {
                    resultShareKey
                },
                select: {
                    id: true
                }
            });
            if (!survey) {
                return null;
            }
            return survey.id;
        } catch (error) {
            if (error instanceof _prisma_client__WEBPACK_IMPORTED_MODULE_1__.Prisma.PrismaClientKnownRequestError) {
                throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_4__/* .DatabaseError */ .a$(error.message);
            }
            throw error;
        }
    }, [
        `getSurveyIdByResultShareKey-${resultShareKey}`
    ], {
        tags: [
            _cache__WEBPACK_IMPORTED_MODULE_5__/* .surveyCache */ .$.tag.byResultShareKey(resultShareKey)
        ]
    })());
const loadNewSegmentInSurvey = async (surveyId, newSegmentId)=>{
    validateInputs([
        surveyId,
        ZId
    ], [
        newSegmentId,
        ZId
    ]);
    try {
        const currentSurvey = await getSurvey(surveyId);
        if (!currentSurvey) {
            throw new ResourceNotFoundError("survey", surveyId);
        }
        const currentSurveySegment = currentSurvey.segment;
        const newSegment = await prisma.segment.findUnique({
            where: {
                id: newSegmentId
            }
        });
        if (!newSegment) {
            throw new ResourceNotFoundError("segment", newSegmentId);
        }
        const prismaSurvey = await prisma.survey.update({
            where: {
                id: surveyId
            },
            select: selectSurvey,
            data: {
                segment: {
                    connect: {
                        id: newSegmentId
                    }
                }
            }
        });
        if (currentSurveySegment && currentSurveySegment.isPrivate && currentSurveySegment.title === currentSurvey.id) {
            const segment = await prisma.segment.delete({
                where: {
                    id: currentSurveySegment.id
                },
                select: {
                    environmentId: true,
                    surveys: {
                        select: {
                            id: true
                        }
                    }
                }
            });
            segmentCache.revalidate({
                id: currentSurveySegment.id
            });
            segment.surveys.map((survey)=>surveyCache.revalidate({
                    id: survey.id
                }));
            surveyCache.revalidate({
                environmentId: segment.environmentId
            });
        }
        segmentCache.revalidate({
            id: newSegmentId
        });
        surveyCache.revalidate({
            id: surveyId
        });
        let surveySegment = null;
        if (prismaSurvey.segment) {
            surveySegment = {
                ...prismaSurvey.segment,
                surveys: prismaSurvey.segment.surveys.map((survey)=>survey.id)
            };
        }
        // TODO: Fix this, this happens because the survey type "web" is no longer in the zod types but its required in the schema for migration
        // @ts-expect-error
        const modifiedSurvey = {
            ...prismaSurvey,
            segment: surveySegment
        };
        return modifiedSurvey;
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            throw new DatabaseError(error.message);
        }
        throw error;
    }
};
const getSurveysBySegmentId = (0,react__WEBPACK_IMPORTED_MODULE_2__.cache)(async (segmentId)=>(0,_cache__WEBPACK_IMPORTED_MODULE_6__/* .cache */ .P)(async ()=>{
        try {
            const surveysPrisma = await _formbricks_database__WEBPACK_IMPORTED_MODULE_3__/* .prisma */ .z.survey.findMany({
                where: {
                    segmentId
                },
                select: selectSurvey
            });
            const surveys = [];
            for (const surveyPrisma of surveysPrisma){
                const transformedSurvey = (0,_utils__WEBPACK_IMPORTED_MODULE_9__/* .transformPrismaSurvey */ .F0)(surveyPrisma);
                surveys.push(transformedSurvey);
            }
            return surveys;
        } catch (error) {
            if (error instanceof _prisma_client__WEBPACK_IMPORTED_MODULE_1__.Prisma.PrismaClientKnownRequestError) {
                throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_4__/* .DatabaseError */ .a$(error.message);
            }
            throw error;
        }
    }, [
        `getSurveysBySegmentId-${segmentId}`
    ], {
        tags: [
            _cache__WEBPACK_IMPORTED_MODULE_5__/* .surveyCache */ .$.tag.bySegmentId(segmentId),
            _cache_segment__WEBPACK_IMPORTED_MODULE_14__/* .segmentCache */ .C.tag.byId(segmentId)
        ]
    })());


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


/***/ }),

/***/ 483228:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ getIsAIEnabled),
/* harmony export */   W: () => (/* binding */ getPromptText)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(836919);

const getPromptText = (questionHeadline, response)=>{
    return `**${questionHeadline.trim()}**\n${response.trim()}`;
};
const getIsAIEnabled = async (organization)=>{
    // This is a temporary workaround to enable AI without checking the ee license validity, as the ee package is not available in the lib package.(but the billing plan check suffices the license check).
    const billingPlan = organization.billing.plan;
    return Boolean(organization.isAIEnabled && _constants__WEBPACK_IMPORTED_MODULE_0__/* .IS_AI_CONFIGURED */ .T1 && (billingPlan === "startup" || billingPlan === "scale" || billingPlan === "enterprise"));
};


/***/ })

};
;