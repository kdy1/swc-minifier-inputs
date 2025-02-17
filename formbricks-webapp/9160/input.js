"use strict";
exports.id = 9160;
exports.ids = [9160];
exports.modules = {

/***/ 440388:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DU: () => (/* binding */ getProjectIdFromEnvironmentId),
/* harmony export */   EI: () => (/* binding */ getEnvironmentIdFromInsightId),
/* harmony export */   GT: () => (/* binding */ getProjectIdFromLanguageId),
/* harmony export */   HY: () => (/* binding */ getProjectIdFromApiKeyId),
/* harmony export */   IO: () => (/* binding */ getEnvironmentIdFromTagId),
/* harmony export */   Ie: () => (/* binding */ getOrganizationIdFromContactId),
/* harmony export */   M0: () => (/* binding */ getProjectIdFromTagId),
/* harmony export */   Mm: () => (/* binding */ getProjectIdFromInsightId),
/* harmony export */   ND: () => (/* binding */ getOrganizationIdFromResponseNoteId),
/* harmony export */   NZ: () => (/* binding */ getOrganizationIdFromApiKeyId),
/* harmony export */   O$: () => (/* binding */ getOrganizationIdFromLanguageId),
/* harmony export */   PO: () => (/* binding */ getEnvironmentIdFromSegmentId),
/* harmony export */   RM: () => (/* binding */ getProjectIdFromDocumentId),
/* harmony export */   U5: () => (/* binding */ getProjectIdFromIntegrationId),
/* harmony export */   Vd: () => (/* binding */ getOrganizationIdFromWebhookId),
/* harmony export */   X_: () => (/* binding */ getOrganizationIdFromEnvironmentId),
/* harmony export */   Y: () => (/* binding */ getProjectIdFromSurveyId),
/* harmony export */   Zi: () => (/* binding */ getOrganizationIdFromTeamId),
/* harmony export */   a1: () => (/* binding */ getOrganizationIdFromSurveyId),
/* harmony export */   b5: () => (/* binding */ getOrganizationIdFromInviteId),
/* harmony export */   cE: () => (/* binding */ getEnvironmentIdFromSurveyId),
/* harmony export */   gQ: () => (/* binding */ getOrganizationIdFromInsightId),
/* harmony export */   l$: () => (/* binding */ getProjectIdFromResponseId),
/* harmony export */   lp: () => (/* binding */ getProjectIdFromWebhookId),
/* harmony export */   o: () => (/* binding */ getProjectIdFromContactId),
/* harmony export */   pA: () => (/* binding */ getOrganizationIdFromDocumentId),
/* harmony export */   pH: () => (/* binding */ getProjectIdFromSegmentId),
/* harmony export */   qx: () => (/* binding */ getOrganizationIdFromTagId),
/* harmony export */   sD: () => (/* binding */ getProjectIdFromActionClassId),
/* harmony export */   sx: () => (/* binding */ getOrganizationIdFromActionClassId),
/* harmony export */   t1: () => (/* binding */ getEnvironmentIdFromResponseId),
/* harmony export */   tL: () => (/* binding */ getProjectIdFromResponseNoteId),
/* harmony export */   tT: () => (/* binding */ getOrganizationIdFromSegmentId),
/* harmony export */   vE: () => (/* binding */ getOrganizationIdFromResponseId),
/* harmony export */   x7: () => (/* binding */ getOrganizationIdFromProjectId),
/* harmony export */   yW: () => (/* binding */ getOrganizationIdFromIntegrationId)
/* harmony export */ });
/* unused harmony exports getFormattedErrorMessage, getProductIdFromContactId, isStringMatch */
/* harmony import */ var _lib_utils_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(883212);
/* harmony import */ var _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(207798);


const getFormattedErrorMessage = (result)=>{
    let message = "";
    if (result.serverError) {
        message = result.serverError;
    } else {
        const errors = result.validationErrors;
        message = Object.keys(errors || {}).map((key)=>{
            if (key === "_errors") return errors[key].join(", ");
            return `${key ? `${key}` : ""}${errors?.[key]?._errors?.join(", ")}`;
        }).join("\n");
    }
    return message;
};
/**
 * GET organization ID from RESOURCE ID
 */ const getOrganizationIdFromProjectId = async (projectId)=>{
    const project = await (0,_lib_utils_services__WEBPACK_IMPORTED_MODULE_0__/* .getProject */ .U1)(projectId);
    if (!project) {
        throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_1__/* .ResourceNotFoundError */ .CE("project", projectId);
    }
    return project.organizationId;
};
const getOrganizationIdFromEnvironmentId = async (environmentId)=>{
    const environment = await (0,_lib_utils_services__WEBPACK_IMPORTED_MODULE_0__/* .getEnvironment */ .uc)(environmentId);
    if (!environment) {
        throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_1__/* .ResourceNotFoundError */ .CE("environment", environmentId);
    }
    return await getOrganizationIdFromProjectId(environment.projectId);
};
const getOrganizationIdFromSurveyId = async (surveyId)=>{
    const survey = await (0,_lib_utils_services__WEBPACK_IMPORTED_MODULE_0__/* .getSurvey */ .Dp)(surveyId);
    if (!survey) {
        throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_1__/* .ResourceNotFoundError */ .CE("survey", surveyId);
    }
    return await getOrganizationIdFromEnvironmentId(survey.environmentId);
};
const getOrganizationIdFromResponseId = async (responseId)=>{
    const response = await (0,_lib_utils_services__WEBPACK_IMPORTED_MODULE_0__/* .getResponse */ .mi)(responseId);
    if (!response) {
        throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_1__/* .ResourceNotFoundError */ .CE("response", responseId);
    }
    return await getOrganizationIdFromSurveyId(response.surveyId);
};
const getOrganizationIdFromContactId = async (contactId)=>{
    const contact = await (0,_lib_utils_services__WEBPACK_IMPORTED_MODULE_0__/* .getContact */ .bl)(contactId);
    if (!contact) {
        throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_1__/* .ResourceNotFoundError */ .CE("contact", contactId);
    }
    return await getOrganizationIdFromEnvironmentId(contact.environmentId);
};
const getProjectIdFromContactId = async (contactId)=>{
    const contact = await (0,_lib_utils_services__WEBPACK_IMPORTED_MODULE_0__/* .getContact */ .bl)(contactId);
    if (!contact) {
        throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_1__/* .ResourceNotFoundError */ .CE("contact", contactId);
    }
    return await getProjectIdFromEnvironmentId(contact.environmentId);
};
const getOrganizationIdFromTagId = async (tagId)=>{
    const tag = await (0,_lib_utils_services__WEBPACK_IMPORTED_MODULE_0__/* .getTag */ .bH)(tagId);
    if (!tag) {
        throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_1__/* .ResourceNotFoundError */ .CE("tag", tagId);
    }
    return await getOrganizationIdFromEnvironmentId(tag.environmentId);
};
const getOrganizationIdFromResponseNoteId = async (responseNoteId)=>{
    const responseNote = await (0,_lib_utils_services__WEBPACK_IMPORTED_MODULE_0__/* .getResponseNote */ .Wy)(responseNoteId);
    if (!responseNote) {
        throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_1__/* .ResourceNotFoundError */ .CE("responseNote", responseNoteId);
    }
    return await getOrganizationIdFromResponseId(responseNote.responseId);
};
const getOrganizationIdFromSegmentId = async (segmentId)=>{
    const segment = await (0,_lib_utils_services__WEBPACK_IMPORTED_MODULE_0__/* .getSegment */ .kn)(segmentId);
    if (!segment) {
        throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_1__/* .ResourceNotFoundError */ .CE("segment", segmentId);
    }
    return await getOrganizationIdFromEnvironmentId(segment.environmentId);
};
const getOrganizationIdFromActionClassId = async (actionClassId)=>{
    const actionClass = await (0,_lib_utils_services__WEBPACK_IMPORTED_MODULE_0__/* .getActionClass */ .Bx)(actionClassId);
    if (!actionClass) {
        throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_1__/* .ResourceNotFoundError */ .CE("actionClass", actionClassId);
    }
    return await getOrganizationIdFromEnvironmentId(actionClass.environmentId);
};
const getOrganizationIdFromIntegrationId = async (integrationId)=>{
    const integration = await (0,_lib_utils_services__WEBPACK_IMPORTED_MODULE_0__/* .getIntegration */ .rg)(integrationId);
    if (!integration) {
        throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_1__/* .ResourceNotFoundError */ .CE("integration", integrationId);
    }
    return await getOrganizationIdFromEnvironmentId(integration.environmentId);
};
const getOrganizationIdFromWebhookId = async (webhookId)=>{
    const webhook = await (0,_lib_utils_services__WEBPACK_IMPORTED_MODULE_0__/* .getWebhook */ .O0)(webhookId);
    if (!webhook) {
        throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_1__/* .ResourceNotFoundError */ .CE("webhook", webhookId);
    }
    return await getOrganizationIdFromEnvironmentId(webhook.environmentId);
};
const getOrganizationIdFromApiKeyId = async (apiKeyId)=>{
    const apiKeyFromServer = await (0,_lib_utils_services__WEBPACK_IMPORTED_MODULE_0__/* .getApiKey */ .CG)(apiKeyId);
    if (!apiKeyFromServer) {
        throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_1__/* .ResourceNotFoundError */ .CE("apiKey", apiKeyId);
    }
    return await getOrganizationIdFromEnvironmentId(apiKeyFromServer.environmentId);
};
const getOrganizationIdFromInviteId = async (inviteId)=>{
    const invite = await (0,_lib_utils_services__WEBPACK_IMPORTED_MODULE_0__/* .getInvite */ .I_)(inviteId);
    if (!invite) {
        throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_1__/* .ResourceNotFoundError */ .CE("invite", inviteId);
    }
    return invite.organizationId;
};
const getOrganizationIdFromLanguageId = async (languageId)=>{
    const language = await (0,_lib_utils_services__WEBPACK_IMPORTED_MODULE_0__/* .getLanguage */ .Z0)(languageId);
    if (!language) {
        throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_1__/* .ResourceNotFoundError */ .CE("language", languageId);
    }
    return await getOrganizationIdFromProjectId(language.projectId);
};
const getOrganizationIdFromTeamId = async (teamId)=>{
    const team = await (0,_lib_utils_services__WEBPACK_IMPORTED_MODULE_0__/* .getTeam */ .Uo)(teamId);
    if (!team) {
        throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_1__/* .ResourceNotFoundError */ .CE("team", teamId);
    }
    return team.organizationId;
};
const getOrganizationIdFromInsightId = async (insightId)=>{
    const insight = await (0,_lib_utils_services__WEBPACK_IMPORTED_MODULE_0__/* .getInsight */ .zv)(insightId);
    if (!insight) {
        throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_1__/* .ResourceNotFoundError */ .CE("insight", insightId);
    }
    return await getOrganizationIdFromEnvironmentId(insight.environmentId);
};
const getOrganizationIdFromDocumentId = async (documentId)=>{
    const document = await (0,_lib_utils_services__WEBPACK_IMPORTED_MODULE_0__/* .getDocument */ .YE)(documentId);
    if (!document) {
        throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_1__/* .ResourceNotFoundError */ .CE("document", documentId);
    }
    return await getOrganizationIdFromEnvironmentId(document.environmentId);
};
// project id helpers
const getProjectIdFromEnvironmentId = async (environmentId)=>{
    const environment = await (0,_lib_utils_services__WEBPACK_IMPORTED_MODULE_0__/* .getEnvironment */ .uc)(environmentId);
    if (!environment) {
        throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_1__/* .ResourceNotFoundError */ .CE("environment", environmentId);
    }
    return environment.projectId;
};
const getProjectIdFromSurveyId = async (surveyId)=>{
    const survey = await (0,_lib_utils_services__WEBPACK_IMPORTED_MODULE_0__/* .getSurvey */ .Dp)(surveyId);
    if (!survey) {
        throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_1__/* .ResourceNotFoundError */ .CE("survey", surveyId);
    }
    return await getProjectIdFromEnvironmentId(survey.environmentId);
};
const getProjectIdFromInsightId = async (insightId)=>{
    const insight = await (0,_lib_utils_services__WEBPACK_IMPORTED_MODULE_0__/* .getInsight */ .zv)(insightId);
    if (!insight) {
        throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_1__/* .ResourceNotFoundError */ .CE("insight", insightId);
    }
    return await getProjectIdFromEnvironmentId(insight.environmentId);
};
const getProjectIdFromSegmentId = async (segmentId)=>{
    const segment = await (0,_lib_utils_services__WEBPACK_IMPORTED_MODULE_0__/* .getSegment */ .kn)(segmentId);
    if (!segment) {
        throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_1__/* .ResourceNotFoundError */ .CE("segment", segmentId);
    }
    return await getProjectIdFromEnvironmentId(segment.environmentId);
};
const getProjectIdFromApiKeyId = async (apiKeyId)=>{
    const apiKey = await (0,_lib_utils_services__WEBPACK_IMPORTED_MODULE_0__/* .getApiKey */ .CG)(apiKeyId);
    if (!apiKey) {
        throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_1__/* .ResourceNotFoundError */ .CE("apiKey", apiKeyId);
    }
    return await getProjectIdFromEnvironmentId(apiKey.environmentId);
};
const getProjectIdFromActionClassId = async (actionClassId)=>{
    const actionClass = await (0,_lib_utils_services__WEBPACK_IMPORTED_MODULE_0__/* .getActionClass */ .Bx)(actionClassId);
    if (!actionClass) {
        throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_1__/* .ResourceNotFoundError */ .CE("actionClass", actionClassId);
    }
    return await getProjectIdFromEnvironmentId(actionClass.environmentId);
};
const getProjectIdFromTagId = async (tagId)=>{
    const tag = await (0,_lib_utils_services__WEBPACK_IMPORTED_MODULE_0__/* .getTag */ .bH)(tagId);
    if (!tag) {
        throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_1__/* .ResourceNotFoundError */ .CE("tag", tagId);
    }
    return await getProjectIdFromEnvironmentId(tag.environmentId);
};
const getProjectIdFromLanguageId = async (languageId)=>{
    const language = await (0,_lib_utils_services__WEBPACK_IMPORTED_MODULE_0__/* .getLanguage */ .Z0)(languageId);
    if (!language) {
        throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_1__/* .ResourceNotFoundError */ .CE("language", languageId);
    }
    return language.projectId;
};
const getProjectIdFromResponseId = async (responseId)=>{
    const response = await (0,_lib_utils_services__WEBPACK_IMPORTED_MODULE_0__/* .getResponse */ .mi)(responseId);
    if (!response) {
        throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_1__/* .ResourceNotFoundError */ .CE("response", responseId);
    }
    return await getProjectIdFromSurveyId(response.surveyId);
};
const getProjectIdFromResponseNoteId = async (responseNoteId)=>{
    const responseNote = await (0,_lib_utils_services__WEBPACK_IMPORTED_MODULE_0__/* .getResponseNote */ .Wy)(responseNoteId);
    if (!responseNote) {
        throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_1__/* .ResourceNotFoundError */ .CE("responseNote", responseNoteId);
    }
    return await getProjectIdFromResponseId(responseNote.responseId);
};
const getProductIdFromContactId = async (contactId)=>{
    const contact = await getContact(contactId);
    if (!contact) {
        throw new ResourceNotFoundError("contact", contactId);
    }
    return await getProjectIdFromEnvironmentId(contact.environmentId);
};
const getProjectIdFromDocumentId = async (documentId)=>{
    const document = await (0,_lib_utils_services__WEBPACK_IMPORTED_MODULE_0__/* .getDocument */ .YE)(documentId);
    if (!document) {
        throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_1__/* .ResourceNotFoundError */ .CE("document", documentId);
    }
    return await getProjectIdFromEnvironmentId(document.environmentId);
};
const getProjectIdFromIntegrationId = async (integrationId)=>{
    const integration = await (0,_lib_utils_services__WEBPACK_IMPORTED_MODULE_0__/* .getIntegration */ .rg)(integrationId);
    if (!integration) {
        throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_1__/* .ResourceNotFoundError */ .CE("integration", integrationId);
    }
    return await getProjectIdFromEnvironmentId(integration.environmentId);
};
const getProjectIdFromWebhookId = async (webhookId)=>{
    const webhook = await (0,_lib_utils_services__WEBPACK_IMPORTED_MODULE_0__/* .getWebhook */ .O0)(webhookId);
    if (!webhook) {
        throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_1__/* .ResourceNotFoundError */ .CE("webhook", webhookId);
    }
    return await getProjectIdFromEnvironmentId(webhook.environmentId);
};
// environment id helpers
const getEnvironmentIdFromSurveyId = async (surveyId)=>{
    const survey = await (0,_lib_utils_services__WEBPACK_IMPORTED_MODULE_0__/* .getSurvey */ .Dp)(surveyId);
    if (!survey) {
        throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_1__/* .ResourceNotFoundError */ .CE("survey", surveyId);
    }
    return survey.environmentId;
};
const getEnvironmentIdFromResponseId = async (responseId)=>{
    const response = await (0,_lib_utils_services__WEBPACK_IMPORTED_MODULE_0__/* .getResponse */ .mi)(responseId);
    if (!response) {
        throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_1__/* .ResourceNotFoundError */ .CE("response", responseId);
    }
    return await getEnvironmentIdFromSurveyId(response.surveyId);
};
const getEnvironmentIdFromInsightId = async (insightId)=>{
    const insight = await (0,_lib_utils_services__WEBPACK_IMPORTED_MODULE_0__/* .getInsight */ .zv)(insightId);
    if (!insight) {
        throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_1__/* .ResourceNotFoundError */ .CE("insight", insightId);
    }
    return insight.environmentId;
};
const getEnvironmentIdFromSegmentId = async (segmentId)=>{
    const segment = await (0,_lib_utils_services__WEBPACK_IMPORTED_MODULE_0__/* .getSegment */ .kn)(segmentId);
    if (!segment) {
        throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_1__/* .ResourceNotFoundError */ .CE("segment", segmentId);
    }
    return segment.environmentId;
};
const getEnvironmentIdFromTagId = async (tagId)=>{
    const tag = await (0,_lib_utils_services__WEBPACK_IMPORTED_MODULE_0__/* .getTag */ .bH)(tagId);
    if (!tag) {
        throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_1__/* .ResourceNotFoundError */ .CE("tag", tagId);
    }
    return tag.environmentId;
};
const isStringMatch = (query, value)=>{
    // lowercase both query and value
    // replace all spaces with empty string
    // replace all underscores with empty string
    // replace all dashes with empty string
    const queryModified = query.toLowerCase().replace(/ /g, "").replace(/_/g, "").replace(/-/g, "");
    const valueModified = value.toLowerCase().replace(/ /g, "").replace(/_/g, "").replace(/-/g, "");
    return valueModified.includes(queryModified);
};


/***/ }),

/***/ 354024:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ ZInsight)
/* harmony export */ });
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(283131);

const ZInsight = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    id: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().cuid2(),
    createdAt: zod__WEBPACK_IMPORTED_MODULE_0__.z.date(),
    updatedAt: zod__WEBPACK_IMPORTED_MODULE_0__.z.date(),
    environmentId: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().cuid2(),
    title: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),
    description: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),
    category: zod__WEBPACK_IMPORTED_MODULE_0__.z.enum([
        "featureRequest",
        "complaint",
        "praise",
        "other"
    ])
});


/***/ }),

/***/ 972585:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Au: () => (/* binding */ updateActionClass),
/* harmony export */   Bx: () => (/* binding */ getActionClass),
/* harmony export */   hE: () => (/* binding */ createActionClass),
/* harmony export */   kz: () => (/* binding */ deleteActionClass),
/* harmony export */   nq: () => (/* binding */ getActionClasses)
/* harmony export */ });
/* unused harmony export getActionClassByEnvironmentIdAndName */
/* harmony import */ var private_next_rsc_server_reference__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(286055);
/* harmony import */ var private_next_rsc_action_encryption__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(770767);
/* harmony import */ var private_next_rsc_action_encryption__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(private_next_rsc_action_encryption__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(896330);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(645625);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _formbricks_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(482859);
/* harmony import */ var _formbricks_types_action_classes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(535526);
/* harmony import */ var _formbricks_types_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(552224);
/* harmony import */ var _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(207798);
/* harmony import */ var _cache__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(48165);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(711344);
/* harmony import */ var _survey_cache__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(710528);
/* harmony import */ var _utils_validate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(472749);
/* harmony import */ var _cache__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(465382);
/* harmony import */ var private_next_rsc_action_validate__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(429931);
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

/***/ 784765:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ llmModel)
/* harmony export */ });
/* unused harmony export embeddingsModel */
/* harmony import */ var _ai_sdk_azure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(900693);
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(333258);


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

/***/ 939483:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Mv: () => (/* binding */ copySurveyToOtherEnvironment),
  th: () => (/* binding */ createSurvey),
  MT: () => (/* binding */ deleteSurvey),
  Sm: () => (/* binding */ getInProgressSurveyCount),
  Dp: () => (/* binding */ getSurvey),
  s: () => (/* binding */ getSurveyIdByResultShareKey),
  sW: () => (/* binding */ getSurveysByActionClassId),
  Pq: () => (/* binding */ loadNewSegmentInSurvey),
  cU: () => (/* binding */ updateSurvey)
});

// UNUSED EXPORTS: getSurveyCount, getSurveys, getSurveysBySegmentId, selectSurvey

// EXTERNAL MODULE: ../../node_modules/@paralleldrive/cuid2/index.js
var cuid2 = __webpack_require__(730672);
// EXTERNAL MODULE: external "@prisma/client"
var client_ = __webpack_require__(896330);
// EXTERNAL MODULE: ../../node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js
var react = __webpack_require__(645625);
// EXTERNAL MODULE: ../../packages/database/src/index.ts + 1 modules
var src = __webpack_require__(482859);
// EXTERNAL MODULE: ../../packages/types/common.ts
var common = __webpack_require__(552224);
// EXTERNAL MODULE: ../../packages/types/errors.ts
var errors = __webpack_require__(207798);
// EXTERNAL MODULE: ../../packages/types/segment.ts
var types_segment = __webpack_require__(649490);
// EXTERNAL MODULE: ../../packages/types/surveys/types.ts + 3 modules
var types = __webpack_require__(797175);
// EXTERNAL MODULE: ../../packages/lib/actionClass/cache.ts
var cache = __webpack_require__(465382);
// EXTERNAL MODULE: ../../packages/lib/actionClass/service.ts
var service = __webpack_require__(972585);
// EXTERNAL MODULE: ../../packages/lib/cache.ts
var lib_cache = __webpack_require__(48165);
// EXTERNAL MODULE: ../../packages/lib/cache/segment.ts
var cache_segment = __webpack_require__(857431);
// EXTERNAL MODULE: ../../packages/lib/constants.ts
var constants = __webpack_require__(711344);
// EXTERNAL MODULE: ../../packages/lib/environment/service.ts
var environment_service = __webpack_require__(43264);
// EXTERNAL MODULE: ../../packages/lib/organization/service.ts
var organization_service = __webpack_require__(167440);
// EXTERNAL MODULE: ../../node_modules/@ungap/structured-clone/esm/index.js + 3 modules
var esm = __webpack_require__(696900);
;// ../../packages/lib/pollyfills/structuredClone.ts

let structuredCloneExport;
if (typeof structuredClone === "undefined") {
    structuredCloneExport = esm/* default */.Ay;
} else {
    // @ts-expect-error
    structuredCloneExport = structuredClone;
}


// EXTERNAL MODULE: ../../packages/lib/posthogServer.ts
var posthogServer = __webpack_require__(976830);
// EXTERNAL MODULE: ../../packages/lib/project/cache.ts
var project_cache = __webpack_require__(595111);
// EXTERNAL MODULE: ../../packages/lib/project/service.ts
var project_service = __webpack_require__(28492);
// EXTERNAL MODULE: ../../packages/lib/response/cache.ts
var response_cache = __webpack_require__(813255);
;// ../../packages/lib/utils/ai.ts

const getPromptText = (questionHeadline, response)=>{
    return `**${questionHeadline.trim()}**\n${response.trim()}`;
};
const getIsAIEnabled = async (organization)=>{
    // This is a temporary workaround to enable AI without checking the ee license validity, as the ee package is not available in the lib package.(but the billing plan check suffices the license check).
    const billingPlan = organization.billing.plan;
    return Boolean(organization.isAIEnabled && constants/* IS_AI_CONFIGURED */.T1 && (billingPlan === "startup" || billingPlan === "scale" || billingPlan === "enterprise"));
};

// EXTERNAL MODULE: ../../packages/lib/utils/validate.ts
var validate = __webpack_require__(472749);
// EXTERNAL MODULE: ../../packages/lib/survey/cache.ts
var survey_cache = __webpack_require__(710528);
// EXTERNAL MODULE: ../../packages/lib/survey/utils.ts
var utils = __webpack_require__(314437);
;// ../../packages/lib/survey/service.ts


























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
            throw new errors/* InvalidInputError */.oC("Invalid trigger id");
        }
    });
    // check if all the triggers are unique
    const triggerIds = triggers.map((trigger)=>trigger.actionClass.id);
    if (new Set(triggerIds).size !== triggerIds.length) {
        throw new errors/* InvalidInputError */.oC("Duplicate trigger id");
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
        survey_cache/* surveyCache */.$.revalidate({
            actionClassId: trigger.actionClass.id
        });
    });
    return triggersUpdate;
};
const getSurvey = (0,react.cache)(async (surveyId)=>(0,lib_cache/* cache */.P)(async ()=>{
        (0,validate/* validateInputs */.C)([
            surveyId,
            common/* ZId */.i4
        ]);
        let surveyPrisma;
        try {
            surveyPrisma = await src/* prisma */.z.survey.findUnique({
                where: {
                    id: surveyId
                },
                select: selectSurvey
            });
        } catch (error) {
            if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
                console.error(error);
                throw new errors/* DatabaseError */.a$(error.message);
            }
            throw error;
        }
        if (!surveyPrisma) {
            return null;
        }
        return (0,utils/* transformPrismaSurvey */.F0)(surveyPrisma);
    }, [
        `getSurvey-${surveyId}`
    ], {
        tags: [
            survey_cache/* surveyCache */.$.tag.byId(surveyId)
        ]
    })());
const getSurveysByActionClassId = (0,react.cache)(async (actionClassId, page)=>(0,lib_cache/* cache */.P)(async ()=>{
        (0,validate/* validateInputs */.C)([
            actionClassId,
            common/* ZId */.i4
        ], [
            page,
            common/* ZOptionalNumber */.Wo
        ]);
        let surveysPrisma;
        try {
            surveysPrisma = await src/* prisma */.z.survey.findMany({
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
                take: page ? constants/* ITEMS_PER_PAGE */.re : undefined,
                skip: page ? constants/* ITEMS_PER_PAGE */.re * (page - 1) : undefined
            });
        } catch (error) {
            if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
                console.error(error);
                throw new errors/* DatabaseError */.a$(error.message);
            }
            throw error;
        }
        const surveys = [];
        for (const surveyPrisma of surveysPrisma){
            const transformedSurvey = (0,utils/* transformPrismaSurvey */.F0)(surveyPrisma);
            surveys.push(transformedSurvey);
        }
        return surveys;
    }, [
        `getSurveysByActionClassId-${actionClassId}-${page}`
    ], {
        tags: [
            survey_cache/* surveyCache */.$.tag.byActionClassId(actionClassId)
        ]
    })());
const getSurveys = (0,react.cache)(async (environmentId, limit, offset, filterCriteria)=>(0,lib_cache/* cache */.P)(async ()=>{
        (0,validate/* validateInputs */.C)([
            environmentId,
            common/* ZId */.i4
        ], [
            limit,
            common/* ZOptionalNumber */.Wo
        ], [
            offset,
            common/* ZOptionalNumber */.Wo
        ]);
        try {
            const surveysPrisma = await src/* prisma */.z.survey.findMany({
                where: {
                    environmentId,
                    ...(0,utils/* buildWhereClause */.hv)(filterCriteria)
                },
                select: selectSurvey,
                orderBy: (0,utils/* buildOrderByClause */.XF)(filterCriteria?.sortBy),
                take: limit,
                skip: offset
            });
            return surveysPrisma.map((surveyPrisma)=>(0,utils/* transformPrismaSurvey */.F0)(surveyPrisma));
        } catch (error) {
            if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
                console.error(error);
                throw new errors/* DatabaseError */.a$(error.message);
            }
            throw error;
        }
    }, [
        `getSurveys-${environmentId}-${limit}-${offset}-${JSON.stringify(filterCriteria)}`
    ], {
        tags: [
            survey_cache/* surveyCache */.$.tag.byEnvironmentId(environmentId)
        ]
    })());
const getSurveyCount = (0,react.cache)(async (environmentId)=>(0,lib_cache/* cache */.P)(async ()=>{
        (0,validate/* validateInputs */.C)([
            environmentId,
            common/* ZId */.i4
        ]);
        try {
            const surveyCount = await src/* prisma */.z.survey.count({
                where: {
                    environmentId: environmentId
                }
            });
            return surveyCount;
        } catch (error) {
            if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
                console.error(error);
                throw new errors/* DatabaseError */.a$(error.message);
            }
            throw error;
        }
    }, [
        `getSurveyCount-${environmentId}`
    ], {
        tags: [
            survey_cache/* surveyCache */.$.tag.byEnvironmentId(environmentId)
        ]
    })());
const getInProgressSurveyCount = (0,react.cache)(async (environmentId, filterCriteria)=>(0,lib_cache/* cache */.P)(async ()=>{
        (0,validate/* validateInputs */.C)([
            environmentId,
            common/* ZId */.i4
        ]);
        try {
            const surveyCount = await src/* prisma */.z.survey.count({
                where: {
                    environmentId: environmentId,
                    status: "inProgress",
                    ...(0,utils/* buildWhereClause */.hv)(filterCriteria)
                }
            });
            return surveyCount;
        } catch (error) {
            if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
                console.error(error);
                throw new errors/* DatabaseError */.a$(error.message);
            }
            throw error;
        }
    }, [
        `getInProgressSurveyCount-${environmentId}-${JSON.stringify(filterCriteria)}`
    ], {
        tags: [
            survey_cache/* surveyCache */.$.tag.byEnvironmentId(environmentId)
        ]
    })());
const updateSurvey = async (updatedSurvey)=>{
    (0,validate/* validateInputs */.C)([
        updatedSurvey,
        types/* ZSurvey */.pf
    ]);
    try {
        const surveyId = updatedSurvey.id;
        let data = {};
        const actionClasses = await (0,service/* getActionClasses */.nq)(updatedSurvey.environmentId);
        const currentSurvey = await getSurvey(surveyId);
        if (!currentSurvey) {
            throw new errors/* ResourceNotFoundError */.CE("Survey", surveyId);
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
                const parsedFilters = types_segment/* ZSegmentFilters */.Ji.safeParse(segment.filters);
                if (!parsedFilters.success) {
                    throw new errors/* InvalidInputError */.oC("Invalid user segment filters");
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
                    const updatedSegment = await src/* prisma */.z.segment.update({
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
                    cache_segment/* segmentCache */.C.revalidate({
                        id: updatedSegment.id,
                        environmentId: updatedSegment.environmentId
                    });
                    updatedSegment.surveys.map((survey)=>survey_cache/* surveyCache */.$.revalidate({
                            id: survey.id
                        }));
                } catch (error) {
                    console.error(error);
                    throw new Error("Error updating survey");
                }
            } else {
                if (segment.isPrivate) {
                    // disconnect the private segment first and then delete:
                    await src/* prisma */.z.segment.update({
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
                    await src/* prisma */.z.segment.delete({
                        where: {
                            id: segment.id
                        }
                    });
                } else {
                    await src/* prisma */.z.survey.update({
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
            cache_segment/* segmentCache */.C.revalidate({
                id: segment.id,
                environmentId: segment.environmentId
            });
        } else if (type === "app") {
            if (!currentSurvey.segment) {
                await src/* prisma */.z.survey.update({
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
                cache_segment/* segmentCache */.C.revalidate({
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
        const organization = await (0,organization_service/* getOrganizationByEnvironmentId */.TK)(environmentId);
        if (!organization) {
            throw new errors/* ResourceNotFoundError */.CE("Organization", null);
        }
        //AI Insights
        const isAIEnabled = await getIsAIEnabled(organization);
        if (isAIEnabled) {
            if ((0,utils/* doesSurveyHasOpenTextQuestion */.dk)(data.questions ?? [])) {
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
                        const insightsEnabled = await (0,utils/* getInsightsEnabled */.ne)(question);
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
        const prismaSurvey = await src/* prisma */.z.survey.update({
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
        survey_cache/* surveyCache */.$.revalidate({
            id: modifiedSurvey.id,
            environmentId: modifiedSurvey.environmentId,
            segmentId: modifiedSurvey.segment?.id,
            resultShareKey: currentSurvey.resultShareKey ?? undefined
        });
        return modifiedSurvey;
    } catch (error) {
        if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
            console.error(error);
            throw new errors/* DatabaseError */.a$(error.message);
        }
        throw error;
    }
};
const deleteSurvey = async (surveyId)=>{
    (0,validate/* validateInputs */.C)([
        surveyId,
        common/* ZId */.i4
    ]);
    try {
        const deletedSurvey = await src/* prisma */.z.survey.delete({
            where: {
                id: surveyId
            },
            select: selectSurvey
        });
        if (deletedSurvey.type === "app" && deletedSurvey.segment?.isPrivate) {
            const deletedSegment = await src/* prisma */.z.segment.delete({
                where: {
                    id: deletedSurvey.segment.id
                }
            });
            if (deletedSegment) {
                cache_segment/* segmentCache */.C.revalidate({
                    id: deletedSegment.id,
                    environmentId: deletedSurvey.environmentId
                });
            }
        }
        response_cache/* responseCache */.Q.revalidate({
            surveyId,
            environmentId: deletedSurvey.environmentId
        });
        survey_cache/* surveyCache */.$.revalidate({
            id: deletedSurvey.id,
            environmentId: deletedSurvey.environmentId,
            resultShareKey: deletedSurvey.resultShareKey ?? undefined
        });
        if (deletedSurvey.segment?.id) {
            cache_segment/* segmentCache */.C.revalidate({
                id: deletedSurvey.segment.id,
                environmentId: deletedSurvey.environmentId
            });
        }
        // Revalidate public triggers by actionClassId
        deletedSurvey.triggers.forEach((trigger)=>{
            survey_cache/* surveyCache */.$.revalidate({
                actionClassId: trigger.actionClass.id
            });
        });
        return deletedSurvey;
    } catch (error) {
        if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
            console.error(error);
            throw new errors/* DatabaseError */.a$(error.message);
        }
        throw error;
    }
};
const createSurvey = async (environmentId, surveyBody)=>{
    const [parsedEnvironmentId, parsedSurveyBody] = (0,validate/* validateInputs */.C)([
        environmentId,
        common/* ZId */.i4
    ], [
        surveyBody,
        types/* ZSurveyCreateInput */.Nm
    ]);
    try {
        const { createdBy, ...restSurveyBody } = parsedSurveyBody;
        // empty languages array
        if (!restSurveyBody.languages?.length) {
            delete restSurveyBody.languages;
        }
        const actionClasses = await (0,service/* getActionClasses */.nq)(parsedEnvironmentId);
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
        const organization = await (0,organization_service/* getOrganizationByEnvironmentId */.TK)(parsedEnvironmentId);
        if (!organization) {
            throw new errors/* ResourceNotFoundError */.CE("Organization", null);
        }
        //AI Insights
        const isAIEnabled = await getIsAIEnabled(organization);
        if (isAIEnabled) {
            if ((0,utils/* doesSurveyHasOpenTextQuestion */.dk)(data.questions ?? [])) {
                const openTextQuestions = data.questions?.filter((question)=>question.type === "openText") ?? [];
                const insightsEnabledValues = await Promise.all(openTextQuestions.map(async (question)=>{
                    const insightsEnabled = await (0,utils/* getInsightsEnabled */.ne)(question);
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
        const survey = await src/* prisma */.z.survey.create({
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
            const newSegment = await src/* prisma */.z.segment.create({
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
            await src/* prisma */.z.survey.update({
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
            cache_segment/* segmentCache */.C.revalidate({
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
        survey_cache/* surveyCache */.$.revalidate({
            id: survey.id,
            environmentId: survey.environmentId,
            resultShareKey: survey.resultShareKey ?? undefined
        });
        if (createdBy) {
            await (0,organization_service/* subscribeOrganizationMembersToSurveyResponses */.Ss)(survey.id, createdBy);
        }
        await (0,posthogServer/* capturePosthogEnvironmentEvent */.s)(survey.environmentId, "survey created", {
            surveyId: survey.id,
            surveyType: survey.type
        });
        return transformedSurvey;
    } catch (error) {
        if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
            console.error(error);
            throw new errors/* DatabaseError */.a$(error.message);
        }
        throw error;
    }
};
const copySurveyToOtherEnvironment = async (environmentId, surveyId, targetEnvironmentId, userId)=>{
    (0,validate/* validateInputs */.C)([
        environmentId,
        common/* ZId */.i4
    ], [
        surveyId,
        common/* ZId */.i4
    ], [
        targetEnvironmentId,
        common/* ZId */.i4
    ], [
        userId,
        common/* ZId */.i4
    ]);
    try {
        const isSameEnvironment = environmentId === targetEnvironmentId;
        // Fetch required resources
        const [existingEnvironment, existingProject, existingSurvey] = await Promise.all([
            (0,environment_service/* getEnvironment */.uc)(environmentId),
            (0,project_service/* getProjectByEnvironmentId */.bq)(environmentId),
            getSurvey(surveyId)
        ]);
        if (!existingEnvironment) throw new errors/* ResourceNotFoundError */.CE("Environment", environmentId);
        if (!existingProject) throw new errors/* ResourceNotFoundError */.CE("Project", environmentId);
        if (!existingSurvey) throw new errors/* ResourceNotFoundError */.CE("Survey", surveyId);
        let targetEnvironment = null;
        let targetProject = null;
        if (isSameEnvironment) {
            targetEnvironment = existingEnvironment;
            targetProject = existingProject;
        } else {
            [targetEnvironment, targetProject] = await Promise.all([
                (0,environment_service/* getEnvironment */.uc)(targetEnvironmentId),
                (0,project_service/* getProjectByEnvironmentId */.bq)(targetEnvironmentId)
            ]);
            if (!targetEnvironment) throw new errors/* ResourceNotFoundError */.CE("Environment", targetEnvironmentId);
            if (!targetProject) throw new errors/* ResourceNotFoundError */.CE("Project", targetEnvironmentId);
        }
        const { environmentId: _, createdBy, id: existingSurveyId, createdAt, updatedAt, ...restExistingSurvey } = existingSurvey;
        const hasLanguages = existingSurvey.languages && existingSurvey.languages.length > 0;
        // Prepare survey data
        const surveyData = {
            ...restExistingSurvey,
            id: (0,cuid2.createId)(),
            name: `${existingSurvey.name} (copy)`,
            type: existingSurvey.type,
            status: "draft",
            welcomeCard: structuredCloneExport(existingSurvey.welcomeCard),
            questions: structuredCloneExport(existingSurvey.questions),
            endings: structuredCloneExport(existingSurvey.endings),
            variables: structuredCloneExport(existingSurvey.variables),
            hiddenFields: structuredCloneExport(existingSurvey.hiddenFields),
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
                                        noCodeConfig: trigger.actionClass.noCodeConfig ? structuredCloneExport(trigger.actionClass.noCodeConfig) : undefined
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
            surveyClosedMessage: existingSurvey.surveyClosedMessage ? structuredCloneExport(existingSurvey.surveyClosedMessage) : client_.Prisma.JsonNull,
            singleUse: existingSurvey.singleUse ? structuredCloneExport(existingSurvey.singleUse) : client_.Prisma.JsonNull,
            projectOverwrites: existingSurvey.projectOverwrites ? structuredCloneExport(existingSurvey.projectOverwrites) : client_.Prisma.JsonNull,
            styling: existingSurvey.styling ? structuredCloneExport(existingSurvey.styling) : client_.Prisma.JsonNull,
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
                const existingSegmentInTargetEnvironment = await src/* prisma */.z.segment.findFirst({
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
        const newSurvey = await src/* prisma */.z.survey.create({
            data: surveyData,
            select: selectSurvey
        });
        // Identify newly created action classes
        const newActionClasses = newSurvey.triggers.map((trigger)=>trigger.actionClass);
        // Revalidate cache only for newly created action classes
        for (const actionClass of newActionClasses){
            cache/* actionClassCache */.j.revalidate({
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
            project_cache/* projectCache */.E.revalidate({
                id: targetProject.id,
                environmentId: targetEnvironmentId
            });
        }
        survey_cache/* surveyCache */.$.revalidate({
            id: newSurvey.id,
            environmentId: newSurvey.environmentId,
            resultShareKey: newSurvey.resultShareKey ?? undefined
        });
        existingSurvey.triggers.forEach((trigger)=>{
            survey_cache/* surveyCache */.$.revalidate({
                actionClassId: trigger.actionClass.id
            });
        });
        if (newSurvey.segment) {
            cache_segment/* segmentCache */.C.revalidate({
                id: newSurvey.segment.id,
                environmentId: newSurvey.environmentId
            });
        }
        return newSurvey;
    } catch (error) {
        if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
            console.error(error);
            throw new errors/* DatabaseError */.a$(error.message);
        }
        throw error;
    }
};
const getSurveyIdByResultShareKey = (0,react.cache)(async (resultShareKey)=>(0,lib_cache/* cache */.P)(async ()=>{
        try {
            const survey = await src/* prisma */.z.survey.findFirst({
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
            if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
                throw new errors/* DatabaseError */.a$(error.message);
            }
            throw error;
        }
    }, [
        `getSurveyIdByResultShareKey-${resultShareKey}`
    ], {
        tags: [
            survey_cache/* surveyCache */.$.tag.byResultShareKey(resultShareKey)
        ]
    })());
const loadNewSegmentInSurvey = async (surveyId, newSegmentId)=>{
    (0,validate/* validateInputs */.C)([
        surveyId,
        common/* ZId */.i4
    ], [
        newSegmentId,
        common/* ZId */.i4
    ]);
    try {
        const currentSurvey = await getSurvey(surveyId);
        if (!currentSurvey) {
            throw new errors/* ResourceNotFoundError */.CE("survey", surveyId);
        }
        const currentSurveySegment = currentSurvey.segment;
        const newSegment = await src/* prisma */.z.segment.findUnique({
            where: {
                id: newSegmentId
            }
        });
        if (!newSegment) {
            throw new errors/* ResourceNotFoundError */.CE("segment", newSegmentId);
        }
        const prismaSurvey = await src/* prisma */.z.survey.update({
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
            const segment = await src/* prisma */.z.segment.delete({
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
            cache_segment/* segmentCache */.C.revalidate({
                id: currentSurveySegment.id
            });
            segment.surveys.map((survey)=>survey_cache/* surveyCache */.$.revalidate({
                    id: survey.id
                }));
            survey_cache/* surveyCache */.$.revalidate({
                environmentId: segment.environmentId
            });
        }
        cache_segment/* segmentCache */.C.revalidate({
            id: newSegmentId
        });
        survey_cache/* surveyCache */.$.revalidate({
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
        if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
            throw new errors/* DatabaseError */.a$(error.message);
        }
        throw error;
    }
};
const getSurveysBySegmentId = (0,react.cache)(async (segmentId)=>(0,lib_cache/* cache */.P)(async ()=>{
        try {
            const surveysPrisma = await src/* prisma */.z.survey.findMany({
                where: {
                    segmentId
                },
                select: selectSurvey
            });
            const surveys = [];
            for (const surveyPrisma of surveysPrisma){
                const transformedSurvey = (0,utils/* transformPrismaSurvey */.F0)(surveyPrisma);
                surveys.push(transformedSurvey);
            }
            return surveys;
        } catch (error) {
            if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
                throw new errors/* DatabaseError */.a$(error.message);
            }
            throw error;
        }
    }, [
        `getSurveysBySegmentId-${segmentId}`
    ], {
        tags: [
            survey_cache/* surveyCache */.$.tag.bySegmentId(segmentId),
            cache_segment/* segmentCache */.C.tag.byId(segmentId)
        ]
    })());


/***/ }),

/***/ 314437:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F0: () => (/* binding */ transformPrismaSurvey),
/* harmony export */   XF: () => (/* binding */ buildOrderByClause),
/* harmony export */   dk: () => (/* binding */ doesSurveyHasOpenTextQuestion),
/* harmony export */   hv: () => (/* binding */ buildWhereClause),
/* harmony export */   ne: () => (/* binding */ getInsightsEnabled)
/* harmony export */ });
/* unused harmony export anySurveyHasFilters */
/* harmony import */ var ai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(456);
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(283131);
/* harmony import */ var _aiModels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(784765);




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

/***/ 535526:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Lu: () => (/* binding */ ZActionClassInput),
/* harmony export */   Zq: () => (/* binding */ ZActionClassNoCodeConfig),
/* harmony export */   vb: () => (/* binding */ ZActionClass)
/* harmony export */ });
/* unused harmony exports ZActionClassMatchType, ZActionClassPageUrlRule, ZActionClassType, ZActionClassInputCode */
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(283131);

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

/***/ 65405:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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


/***/ }),

/***/ 649490:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ji: () => (/* binding */ ZSegmentFilters),
/* harmony export */   Js: () => (/* binding */ ZSegmentUpdateInput),
/* harmony export */   K5: () => (/* binding */ ZSegment),
/* harmony export */   YS: () => (/* binding */ ZSegmentCreateInput)
/* harmony export */ });
/* unused harmony exports BASE_OPERATORS, ARITHMETIC_OPERATORS, STRING_OPERATORS, ZBaseOperator, ATTRIBUTE_OPERATORS, PERSON_OPERATORS, SEGMENT_OPERATORS, DEVICE_OPERATORS, ALL_OPERATORS, ZAttributeOperator, ZPersonOperator, ZSegmentOperator, ZDeviceOperator, ZSegmentFilterValue, ZSegmentAttributeFilter, ZSegmentPersonFilter, ZSegmentSegmentFilter, ZSegmentDeviceFilter, ZSegmentFilter, ZSegmentConnector, ZBaseFilter, ZBaseFilters */
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(283131);

// The segment filter has operators, these are all the types of operators that can be used
const BASE_OPERATORS = [
    "lessThan",
    "lessEqual",
    "greaterThan",
    "greaterEqual",
    "equals",
    "notEquals"
];
const ARITHMETIC_OPERATORS = [
    "lessThan",
    "lessEqual",
    "greaterThan",
    "greaterEqual"
];
const STRING_OPERATORS = [
    "contains",
    "doesNotContain",
    "startsWith",
    "endsWith"
];
const ZBaseOperator = zod__WEBPACK_IMPORTED_MODULE_0__.z.enum(BASE_OPERATORS);
// An attribute filter can have these operators
const ATTRIBUTE_OPERATORS = [
    ...BASE_OPERATORS,
    "isSet",
    "isNotSet",
    "contains",
    "doesNotContain",
    "startsWith",
    "endsWith"
];
// the person filter currently has the same operators as the attribute filter
// but we might want to add more operators in the future, so we keep it separated
const PERSON_OPERATORS = ATTRIBUTE_OPERATORS;
// operators for segment filters
const SEGMENT_OPERATORS = [
    "userIsIn",
    "userIsNotIn"
];
// operators for device filters
const DEVICE_OPERATORS = [
    "equals",
    "notEquals"
];
// all operators
const ALL_OPERATORS = [
    ...ATTRIBUTE_OPERATORS,
    ...SEGMENT_OPERATORS
];
const ZAttributeOperator = zod__WEBPACK_IMPORTED_MODULE_0__.z.enum(ATTRIBUTE_OPERATORS);
const ZPersonOperator = zod__WEBPACK_IMPORTED_MODULE_0__.z.enum(PERSON_OPERATORS);
const ZSegmentOperator = zod__WEBPACK_IMPORTED_MODULE_0__.z.enum(SEGMENT_OPERATORS);
const ZDeviceOperator = zod__WEBPACK_IMPORTED_MODULE_0__.z.enum(DEVICE_OPERATORS);
const ZSegmentFilterValue = zod__WEBPACK_IMPORTED_MODULE_0__.z.union([
    zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),
    zod__WEBPACK_IMPORTED_MODULE_0__.z.number()
]);
// Each filter has a qualifier, which usually contains the operator for evaluating the filter.
// Attribute filter -> root will always have type "attribute"
const ZSegmentAttributeFilter = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    id: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().cuid2(),
    root: zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
        type: zod__WEBPACK_IMPORTED_MODULE_0__.z.literal("attribute"),
        contactAttributeKey: zod__WEBPACK_IMPORTED_MODULE_0__.z.string()
    }),
    value: ZSegmentFilterValue,
    qualifier: zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
        operator: ZAttributeOperator
    })
});
// Person filter -> root will always have type "person"
const ZSegmentPersonFilter = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    id: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().cuid2(),
    root: zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
        type: zod__WEBPACK_IMPORTED_MODULE_0__.z.literal("person"),
        personIdentifier: zod__WEBPACK_IMPORTED_MODULE_0__.z.string()
    }),
    value: ZSegmentFilterValue,
    qualifier: zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
        operator: ZPersonOperator
    })
});
// Segment filter -> root will always have type "segment"
const ZSegmentSegmentFilter = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    id: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().cuid2(),
    root: zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
        type: zod__WEBPACK_IMPORTED_MODULE_0__.z.literal("segment"),
        segmentId: zod__WEBPACK_IMPORTED_MODULE_0__.z.string()
    }),
    value: ZSegmentFilterValue,
    qualifier: zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
        operator: ZSegmentOperator
    })
});
// Device filter -> root will always have type "device"
const ZSegmentDeviceFilter = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    id: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().cuid2(),
    root: zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
        type: zod__WEBPACK_IMPORTED_MODULE_0__.z.literal("device"),
        deviceType: zod__WEBPACK_IMPORTED_MODULE_0__.z.string()
    }),
    value: ZSegmentFilterValue,
    qualifier: zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
        operator: ZDeviceOperator
    })
});
// A segment filter is a union of all the different filter types
const ZSegmentFilter = zod__WEBPACK_IMPORTED_MODULE_0__.z.union([
    ZSegmentAttributeFilter,
    ZSegmentPersonFilter,
    ZSegmentSegmentFilter,
    ZSegmentDeviceFilter
])// we need to refine the filter to make sure that the filter is valid
.refine((filter)=>{
    // if the operator is an arithmentic operator, the value must be a number
    if (ARITHMETIC_OPERATORS.includes(filter.qualifier.operator) && typeof filter.value !== "number") {
        return false;
    }
    // if the operator is a string operator, the value must be a string
    if (STRING_OPERATORS.includes(filter.qualifier.operator) && typeof filter.value !== "string") {
        return false;
    }
    return true;
}, {
    message: "Value must be a string for string operators and a number for arithmetic operators"
}).refine((filter)=>{
    const { value, qualifier } = filter;
    const { operator } = qualifier;
    // if the operator is "isSet" or "isNotSet", the value doesn't matter
    if (operator === "isSet" || operator === "isNotSet") {
        return true;
    }
    if (typeof value === "string") {
        return value.length > 0;
    }
    return true;
}, {
    message: "Invalid value for filters: please check your filter values"
});
const ZSegmentConnector = zod__WEBPACK_IMPORTED_MODULE_0__.z.enum([
    "and",
    "or"
]).nullable();
const ZBaseFilter = zod__WEBPACK_IMPORTED_MODULE_0__.z.lazy(()=>zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
        id: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().cuid2(),
        connector: ZSegmentConnector,
        resource: zod__WEBPACK_IMPORTED_MODULE_0__.z.union([
            ZSegmentFilter,
            ZBaseFilters
        ])
    }));
const ZBaseFilters = zod__WEBPACK_IMPORTED_MODULE_0__.z.lazy(()=>zod__WEBPACK_IMPORTED_MODULE_0__.z.array(ZBaseFilter));
// here again, we refine the filters to make sure that the filters are valid
const refineFilters = (filters)=>{
    let result = true;
    for(let i = 0; i < filters.length; i++){
        const group = filters[i];
        if (Array.isArray(group.resource)) {
            result = refineFilters(group.resource);
        } else if (i === 0 && group.connector !== null) {
            // if the connector for a "first" group is not null, it's invalid
            result = false;
            break;
        }
    }
    return result;
};
// The filters can be nested, so we need to use z.lazy to define the type
// more on recusrsive types -> https://zod.dev/?id=recursive-types
// TODO: Figure out why this is not working, and then remove the ts-ignore
const ZSegmentFilters = zod__WEBPACK_IMPORTED_MODULE_0__.z.array(zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    id: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().cuid2(),
    connector: ZSegmentConnector,
    resource: zod__WEBPACK_IMPORTED_MODULE_0__.z.union([
        ZSegmentFilter,
        zod__WEBPACK_IMPORTED_MODULE_0__.z.lazy(()=>ZSegmentFilters)
    ])
})).refine(refineFilters, {
    message: "Invalid filters applied"
});
const ZSegment = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    id: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),
    title: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),
    description: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().nullable(),
    isPrivate: zod__WEBPACK_IMPORTED_MODULE_0__.z.boolean().default(true),
    filters: ZSegmentFilters,
    environmentId: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),
    createdAt: zod__WEBPACK_IMPORTED_MODULE_0__.z.date(),
    updatedAt: zod__WEBPACK_IMPORTED_MODULE_0__.z.date(),
    surveys: zod__WEBPACK_IMPORTED_MODULE_0__.z.array(zod__WEBPACK_IMPORTED_MODULE_0__.z.string())
});
const ZSegmentCreateInput = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    environmentId: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),
    title: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),
    description: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().optional(),
    isPrivate: zod__WEBPACK_IMPORTED_MODULE_0__.z.boolean().default(true),
    filters: ZSegmentFilters,
    surveyId: zod__WEBPACK_IMPORTED_MODULE_0__.z.string()
});
const ZSegmentUpdateInput = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    title: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),
    description: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().nullable(),
    isPrivate: zod__WEBPACK_IMPORTED_MODULE_0__.z.boolean().default(true),
    filters: ZSegmentFilters,
    surveys: zod__WEBPACK_IMPORTED_MODULE_0__.z.array(zod__WEBPACK_IMPORTED_MODULE_0__.z.string())
}).partial();


/***/ }),

/***/ 797175:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  wn: () => (/* binding */ TSurveyQuestionTypeEnum),
  pf: () => (/* binding */ ZSurvey),
  Nm: () => (/* binding */ ZSurveyCreateInput),
  ol: () => (/* binding */ ZSurveyFilterCriteria),
  Br: () => (/* binding */ ZSurveyQuestion),
  uD: () => (/* binding */ ZSurveyQuestionId)
});

// UNUSED EXPORTS: ZActionCalculateNumber, ZActionCalculateText, ZActionNumberVariableCalculateOperator, ZActionObjective, ZActionTextVariableCalculateOperator, ZActionVariableValueType, ZDynamicLogicField, ZFilterOption, ZI18nString, ZRightOperand, ZRightOperandStatic, ZShuffleOption, ZSingleCondition, ZSortOption, ZSurveyAddressQuestion, ZSurveyBackgroundBgType, ZSurveyCTAQuestion, ZSurveyCalQuestion, ZSurveyClosedMessage, ZSurveyConsentQuestion, ZSurveyContactInfoQuestion, ZSurveyDateQuestion, ZSurveyDisplayOption, ZSurveyEndScreenCard, ZSurveyEnding, ZSurveyEndings, ZSurveyFileUploadQuestion, ZSurveyFilters, ZSurveyHiddenFields, ZSurveyInlineTriggers, ZSurveyLanguage, ZSurveyLogic, ZSurveyLogicAction, ZSurveyLogicConditionsOperator, ZSurveyMatrixQuestion, ZSurveyMultipleChoiceQuestion, ZSurveyNPSQuestion, ZSurveyOpenTextQuestion, ZSurveyOpenTextQuestionInputType, ZSurveyPictureChoice, ZSurveyPictureSelectionQuestion, ZSurveyProjectOverwrites, ZSurveyQuestionBase, ZSurveyQuestionChoice, ZSurveyQuestionSummary, ZSurveyQuestionSummaryAddress, ZSurveyQuestionSummaryCal, ZSurveyQuestionSummaryConsent, ZSurveyQuestionSummaryContactInfo, ZSurveyQuestionSummaryCta, ZSurveyQuestionSummaryDate, ZSurveyQuestionSummaryFileUpload, ZSurveyQuestionSummaryHiddenFields, ZSurveyQuestionSummaryMatrix, ZSurveyQuestionSummaryMultipleChoice, ZSurveyQuestionSummaryNps, ZSurveyQuestionSummaryOpenText, ZSurveyQuestionSummaryPictureSelection, ZSurveyQuestionSummaryRanking, ZSurveyQuestionSummaryRating, ZSurveyQuestionType, ZSurveyQuestions, ZSurveyQuestionsObject, ZSurveyRankingQuestion, ZSurveyRatingQuestion, ZSurveyRecallItem, ZSurveyRedirectUrlCard, ZSurveySingleUse, ZSurveyStatus, ZSurveyStyling, ZSurveySummary, ZSurveyType, ZSurveyUpdateInput, ZSurveyVariable, ZSurveyVariables, ZSurveyWelcomeCard

// EXTERNAL MODULE: ../../node_modules/zod/lib/index.mjs
var lib = __webpack_require__(283131);
;// ../../packages/database/types/survey-follow-up.ts

const ZSurveyFollowUpTrigger = lib.z.object({
    type: lib.z.enum([
        "response",
        "endings"
    ]),
    properties: lib.z.object({
        endingIds: lib.z.array(lib.z.string().cuid2())
    }).nullable()
}).superRefine((trigger, ctx)=>{
    if (trigger.type === "response") {
        if (trigger.properties) {
            ctx.addIssue({
                code: lib.z.ZodIssueCode.custom,
                message: "Properties should be null for response type"
            });
        }
    }
    if (trigger.type === "endings") {
        if (!trigger.properties) {
            ctx.addIssue({
                code: lib.z.ZodIssueCode.custom,
                message: "Properties must be defined for endings type"
            });
        }
    }
});
const ZSurveyFollowUpAction = lib.z.object({
    type: lib.z.literal("send-email"),
    properties: lib.z.object({
        to: lib.z.string(),
        from: lib.z.string().email(),
        replyTo: lib.z.array(lib.z.string().email()),
        subject: lib.z.string(),
        body: lib.z.string()
    })
});
const ZSurveyFollowUp = lib.z.object({
    id: lib.z.string().cuid2(),
    createdAt: lib.z.date(),
    updatedAt: lib.z.date(),
    name: lib.z.string(),
    trigger: ZSurveyFollowUpTrigger,
    action: ZSurveyFollowUpAction,
    surveyId: lib.z.string().cuid2()
});

// EXTERNAL MODULE: ../../packages/database/zod/insights.ts
var insights = __webpack_require__(354024);
// EXTERNAL MODULE: ../../packages/types/action-classes.ts
var action_classes = __webpack_require__(535526);
// EXTERNAL MODULE: ../../packages/types/common.ts
var common = __webpack_require__(552224);
;// ../../packages/types/contact-attribute.ts


const ZContactAttribute = lib.z.object({
    id: common/* ZId */.i4,
    createdAt: lib.z.date(),
    updatedAt: lib.z.date(),
    attributeKeyId: common/* ZId */.i4,
    contactId: common/* ZId */.i4,
    value: lib.z.string()
});
const ZContactAttributeUpdateInput = lib.z.object({
    environmentId: lib.z.string().cuid2(),
    contactId: lib.z.string(),
    attributes: lib.z.record(lib.z.union([
        lib.z.string(),
        lib.z.number()
    ]))
});
const ZContactAttributes = lib.z.record(lib.z.string());

// EXTERNAL MODULE: ../../packages/types/project.ts
var project = __webpack_require__(773518);
// EXTERNAL MODULE: ../../packages/types/segment.ts
var segment = __webpack_require__(649490);
// EXTERNAL MODULE: ../../packages/types/styling.ts
var styling = __webpack_require__(36583);
;// ../../packages/types/surveys/validation.ts

const FORBIDDEN_IDS = [
    "userId",
    "source",
    "suid",
    "end",
    "start",
    "welcomeCard",
    "hidden",
    "verifiedEmail",
    "multiLanguage",
    "embed",
    "verify"
];
const FIELD_TO_LABEL_MAP = {
    headline: "question",
    subheader: "description",
    buttonLabel: "next button label",
    backButtonLabel: "back button label",
    placeholder: "placeholder",
    upperLabel: "upper label",
    lowerLabel: "lower label",
    "consent.label": "checkbox label",
    dismissButtonLabel: "dismiss button label",
    html: "description",
    cardHeadline: "note",
    welcomeCardHtml: "welcome message",
    endingCardButtonLabel: "button label"
};
const extractLanguageCodes = (surveyLanguages)=>{
    if (!surveyLanguages) return [];
    return surveyLanguages.map((surveyLanguage)=>surveyLanguage.default ? "default" : surveyLanguage.language.code);
};
const validateLabelForAllLanguages = (label, surveyLanguages)=>{
    const enabledLanguages = surveyLanguages.filter((lang)=>lang.enabled);
    const languageCodes = extractLanguageCodes(enabledLanguages);
    const languages = !languageCodes.length ? [
        "default"
    ] : languageCodes;
    const invalidLanguageCodes = languages.filter((language)=>!label[language] || label[language].trim() === "");
    return invalidLanguageCodes.map((invalidLanguageCode)=>{
        if (invalidLanguageCode === "default") {
            return surveyLanguages.find((lang)=>lang.default)?.language.code ?? "default";
        }
        return invalidLanguageCode;
    });
};
const validateQuestionLabels = (field, fieldLabel, languages, questionIndex, skipArticle = false)=>{
    // fieldLabel should contain all the keys present in languages
    // even if one of the keys is an empty string, its okay but it shouldn't be undefined
    for (const language of languages){
        if (!language.default && // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- could be undefined
        fieldLabel[language.language.code] === undefined) {
            return {
                code: lib.z.ZodIssueCode.custom,
                message: `The ${field} in question ${String(questionIndex + 1)} is not present for the following languages: ${language.language.code}`,
                path: [
                    "questions",
                    questionIndex,
                    field
                ]
            };
        }
    }
    const invalidLanguageCodes = validateLabelForAllLanguages(fieldLabel, languages);
    const isDefaultOnly = invalidLanguageCodes.length === 1 && invalidLanguageCodes[0] === "default";
    const messagePrefix = skipArticle ? "" : "The ";
    const messageField = FIELD_TO_LABEL_MAP[field] ? FIELD_TO_LABEL_MAP[field] : field;
    const messageSuffix = isDefaultOnly ? " is missing" : " is missing for the following languages: ";
    const message = isDefaultOnly ? `${messagePrefix}${messageField} in question ${String(questionIndex + 1)}${messageSuffix}` : `${messagePrefix}${messageField} in question ${String(questionIndex + 1)}${messageSuffix} -fLang- ${invalidLanguageCodes.join()}`;
    if (invalidLanguageCodes.length) {
        return {
            code: lib.z.ZodIssueCode.custom,
            message,
            path: [
                "questions",
                questionIndex,
                field
            ],
            params: isDefaultOnly ? undefined : {
                invalidLanguageCodes
            }
        };
    }
    return null;
};
const validateCardFieldsForAllLanguages = (field, fieldLabel, languages, cardType, endingCardIndex, skipArticle = false)=>{
    // fieldLabel should contain all the keys present in languages
    // even if one of the keys is an empty string, its okay but it shouldn't be undefined
    const cardTypeLabel = cardType === "welcome" ? "Welcome card" : `Ending card ${((endingCardIndex ?? -1) + 1).toString()}`; // Ensure 1-based indexing
    const path = cardType === "welcome" ? [
        "welcomeCard",
        field
    ] : [
        "endings",
        endingCardIndex ?? -1,
        field
    ];
    for (const language of languages){
        if (!language.default && // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- could be undefined
        fieldLabel[language.language.code] === undefined) {
            return {
                code: lib.z.ZodIssueCode.custom,
                message: `The ${field} in ${cardTypeLabel} is not present for the following languages: ${language.language.code}`,
                path
            };
        }
    }
    const invalidLanguageCodes = validateLabelForAllLanguages(fieldLabel, languages);
    const isDefaultOnly = invalidLanguageCodes.length === 1 && invalidLanguageCodes[0] === "default";
    const messagePrefix = skipArticle ? "" : "The ";
    const messageField = FIELD_TO_LABEL_MAP[field] ? FIELD_TO_LABEL_MAP[field] : field;
    const messageSuffix = isDefaultOnly ? " is missing" : " is missing for the following languages: ";
    const message = isDefaultOnly ? `${messagePrefix}${messageField} on the ${cardTypeLabel}${messageSuffix}` : `${messagePrefix}${messageField} on the ${cardTypeLabel}${messageSuffix} -fLang- ${invalidLanguageCodes.join(", ")}`;
    if (invalidLanguageCodes.length) {
        return {
            code: lib.z.ZodIssueCode.custom,
            message,
            path,
            params: isDefaultOnly ? undefined : {
                invalidLanguageCodes
            }
        };
    }
    return null;
};
const findLanguageCodesForDuplicateLabels = (labels, surveyLanguages)=>{
    const enabledLanguages = surveyLanguages.filter((lang)=>lang.enabled);
    const languageCodes = extractLanguageCodes(enabledLanguages);
    const languagesToCheck = languageCodes.length === 0 ? [
        "default"
    ] : languageCodes;
    const duplicateLabels = new Set();
    for (const language of languagesToCheck){
        const labelTexts = labels.map((label)=>label[language].trim()).filter(Boolean);
        const uniqueLabels = new Set(labelTexts);
        if (uniqueLabels.size !== labelTexts.length) {
            duplicateLabels.add(language);
        }
    }
    return Array.from(duplicateLabels);
};
const findQuestionsWithCyclicLogic = (questions)=>{
    const visited = {};
    const recStack = {};
    const cyclicQuestions = new Set();
    const checkForCyclicLogic = (questionId)=>{
        if (!visited[questionId]) {
            visited[questionId] = true;
            recStack[questionId] = true;
            const question = questions.find((ques)=>ques.id === questionId);
            if (question?.logic && question.logic.length > 0) {
                for (const logic of question.logic){
                    const jumpActions = findJumpToQuestionActions(logic.actions);
                    for (const jumpAction of jumpActions){
                        const destination = jumpAction.target;
                        if (!visited[destination] && checkForCyclicLogic(destination)) {
                            cyclicQuestions.add(questionId);
                            return true;
                        } else if (recStack[destination]) {
                            cyclicQuestions.add(questionId);
                            return true;
                        }
                    }
                }
            }
            // Check fallback logic
            if (question?.logicFallback) {
                const fallbackQuestionId = question.logicFallback;
                if (!visited[fallbackQuestionId] && checkForCyclicLogic(fallbackQuestionId)) {
                    cyclicQuestions.add(questionId);
                    return true;
                } else if (recStack[fallbackQuestionId]) {
                    cyclicQuestions.add(questionId);
                    return true;
                }
            }
            // Handle default behavior: move to the next question if no jump actions or fallback logic is defined
            const nextQuestionIndex = questions.findIndex((ques)=>ques.id === questionId) + 1;
            const nextQuestion = questions[nextQuestionIndex];
            if (nextQuestion && !visited[nextQuestion.id] && checkForCyclicLogic(nextQuestion.id)) {
                return true;
            }
        }
        recStack[questionId] = false;
        return false;
    };
    for (const question of questions){
        checkForCyclicLogic(question.id);
    }
    return Array.from(cyclicQuestions);
};
// Helper function to find all "jumpToQuestion" actions in the logic
const findJumpToQuestionActions = (actions)=>{
    return actions.filter((action)=>action.objective === "jumpToQuestion");
};
// function to validate hidden field or question id
const validateId = (type, field, existingQuestionIds, existingEndingCardIds, existingHiddenFieldIds)=>{
    if (field.trim() === "") {
        return `Please enter a ${type} Id.`;
    }
    const combinedIds = [
        ...existingQuestionIds,
        ...existingHiddenFieldIds,
        ...existingEndingCardIds
    ];
    if (combinedIds.findIndex((id)=>id.toLowerCase() === field.toLowerCase()) !== -1) {
        return `${type} ID already exists in questions or hidden fields.`;
    }
    if (FORBIDDEN_IDS.includes(field)) {
        return `${type} ID is not allowed.`;
    }
    if (field.includes(" ")) {
        return `${type} ID cannot contain spaces. Please remove spaces.`;
    }
    if (!/^[a-zA-Z0-9_-]+$/.test(field)) {
        return `${type} ID is not allowed. Please use only alphanumeric characters, hyphens, or underscores.`;
    }
    return null;
};
const isConditionGroup = (condition)=>{
    return "conditions" in condition;
};

;// ../../packages/types/surveys/types.ts
/* eslint-disable no-new -- required for error */ 









const ZI18nString = lib.z.record(lib.z.string()).refine((obj)=>"default" in obj, {
    message: "Object must have a 'default' key"
});
const ZSurveyEndingBase = lib.z.object({
    id: lib.z.string().cuid2()
});
const ZSurveyEndScreenCard = ZSurveyEndingBase.extend({
    type: lib.z.literal("endScreen"),
    headline: ZI18nString.optional(),
    subheader: ZI18nString.optional(),
    buttonLabel: ZI18nString.optional(),
    buttonLink: (0,common/* getZSafeUrl */.hF)("Invalid Button Url in Ending card").optional(),
    imageUrl: lib.z.string().optional(),
    videoUrl: lib.z.string().optional()
});
const validateUrlWithRecall = (url)=>{
    try {
        if (!url.startsWith("https://")) {
            return "URL must start with https://";
        }
        if (url.includes(" ") && !url.endsWith(" ")) {
            return "URL must not contain spaces";
        }
        new URL(url);
        return null;
    } catch  {
        const hostname = url.split("https://")[1];
        if (hostname.includes("#recall:")) {
            return "Recall information cannot be used in the hostname part of the URL";
        }
        return "Invalid Redirect URL";
    }
};
const ZSurveyRedirectUrlCard = ZSurveyEndingBase.extend({
    type: lib.z.literal("redirectToUrl"),
    url: lib.z.string().optional().superRefine((url, ctx)=>{
        if (!url) return;
        const error = validateUrlWithRecall(url);
        if (error) {
            ctx.addIssue({
                code: lib.z.ZodIssueCode.custom,
                message: error
            });
        }
    }),
    label: lib.z.string().optional()
});
const ZSurveyEnding = lib.z.union([
    ZSurveyEndScreenCard,
    ZSurveyRedirectUrlCard
]);
const ZSurveyEndings = lib.z.array(ZSurveyEnding);
var TSurveyQuestionTypeEnum = /*#__PURE__*/ function(TSurveyQuestionTypeEnum) {
    TSurveyQuestionTypeEnum["FileUpload"] = "fileUpload";
    TSurveyQuestionTypeEnum["OpenText"] = "openText";
    TSurveyQuestionTypeEnum["MultipleChoiceSingle"] = "multipleChoiceSingle";
    TSurveyQuestionTypeEnum["MultipleChoiceMulti"] = "multipleChoiceMulti";
    TSurveyQuestionTypeEnum["NPS"] = "nps";
    TSurveyQuestionTypeEnum["CTA"] = "cta";
    TSurveyQuestionTypeEnum["Rating"] = "rating";
    TSurveyQuestionTypeEnum["Consent"] = "consent";
    TSurveyQuestionTypeEnum["PictureSelection"] = "pictureSelection";
    TSurveyQuestionTypeEnum["Cal"] = "cal";
    TSurveyQuestionTypeEnum["Date"] = "date";
    TSurveyQuestionTypeEnum["Matrix"] = "matrix";
    TSurveyQuestionTypeEnum["Address"] = "address";
    TSurveyQuestionTypeEnum["Ranking"] = "ranking";
    TSurveyQuestionTypeEnum["ContactInfo"] = "contactInfo";
    return TSurveyQuestionTypeEnum;
}({});
const ZSurveyQuestionId = lib.z.string().superRefine((id, ctx)=>{
    if (FORBIDDEN_IDS.includes(id)) {
        ctx.addIssue({
            code: lib.z.ZodIssueCode.custom,
            message: `Question id is not allowed`
        });
    }
    if (id.includes(" ")) {
        ctx.addIssue({
            code: lib.z.ZodIssueCode.custom,
            message: "Question id not allowed, avoid using spaces."
        });
    }
    if (!/^[a-zA-Z0-9_-]+$/.test(id)) {
        ctx.addIssue({
            code: lib.z.ZodIssueCode.custom,
            message: "Question id not allowed, use only alphanumeric characters, hyphens, or underscores."
        });
    }
});
const ZSurveyWelcomeCard = lib.z.object({
    enabled: lib.z.boolean(),
    headline: ZI18nString.optional(),
    html: ZI18nString.optional(),
    fileUrl: lib.z.string().optional(),
    buttonLabel: ZI18nString.optional(),
    timeToFinish: lib.z.boolean().default(true),
    showResponseCount: lib.z.boolean().default(false),
    videoUrl: lib.z.string().optional()
}).refine((schema)=>!(schema.enabled && !schema.headline), {
    message: "Welcome card must have a headline"
});
const ZSurveyHiddenFields = lib.z.object({
    enabled: lib.z.boolean(),
    fieldIds: lib.z.optional(lib.z.array(lib.z.string().superRefine((field, ctx)=>{
        if (FORBIDDEN_IDS.includes(field)) {
            ctx.addIssue({
                code: lib.z.ZodIssueCode.custom,
                message: `Hidden field id is not allowed`
            });
        }
        if (field.includes(" ")) {
            ctx.addIssue({
                code: lib.z.ZodIssueCode.custom,
                message: "Hidden field id not allowed, avoid using spaces."
            });
        }
        if (!/^[a-zA-Z0-9_-]+$/.test(field)) {
            ctx.addIssue({
                code: lib.z.ZodIssueCode.custom,
                message: "Hidden field id not allowed, use only alphanumeric characters, hyphens, or underscores."
            });
        }
    })))
});
const ZSurveyVariable = lib.z.discriminatedUnion("type", [
    lib.z.object({
        id: lib.z.string().cuid2(),
        name: lib.z.string(),
        type: lib.z.literal("number"),
        value: lib.z.number().default(0)
    }),
    lib.z.object({
        id: lib.z.string().cuid2(),
        name: lib.z.string(),
        type: lib.z.literal("text"),
        value: lib.z.string().default("")
    })
]).superRefine((data, ctx)=>{
    // variable name can only contain lowercase letters, numbers, and underscores
    if (!/^[a-z0-9_]+$/.test(data.name)) {
        ctx.addIssue({
            code: lib.z.ZodIssueCode.custom,
            message: "Variable name can only contain lowercase letters, numbers, and underscores",
            path: [
                "variables"
            ]
        });
    }
});
const ZSurveyVariables = lib.z.array(ZSurveyVariable);
const ZSurveyProjectOverwrites = lib.z.object({
    brandColor: common/* ZColor */.cf.nullish(),
    highlightBorderColor: common/* ZColor */.cf.nullish(),
    placement: common/* ZPlacement */.yO.nullish(),
    clickOutsideClose: lib.z.boolean().nullish(),
    darkOverlay: lib.z.boolean().nullish()
});
const ZSurveyBackgroundBgType = lib.z.enum([
    "animation",
    "color",
    "upload",
    "image"
]);
const ZSurveyStyling = styling/* ZBaseStyling */.U6.extend({
    overwriteThemeStyling: lib.z.boolean().nullish()
});
const ZSurveyClosedMessage = lib.z.object({
    enabled: lib.z.boolean().optional(),
    heading: lib.z.string().optional(),
    subheading: lib.z.string().optional()
}).nullable().optional();
const ZSurveySingleUse = lib.z.object({
    enabled: lib.z.boolean(),
    heading: lib.z.optional(lib.z.string()),
    subheading: lib.z.optional(lib.z.string()),
    isEncrypted: lib.z.boolean()
}).nullable();
const ZSurveyQuestionChoice = lib.z.object({
    id: lib.z.string(),
    label: ZI18nString
});
const ZSurveyPictureChoice = lib.z.object({
    id: lib.z.string(),
    imageUrl: lib.z.string()
});
// Logic types
const ZSurveyLogicConditionsOperator = lib.z.enum([
    "equals",
    "doesNotEqual",
    "contains",
    "doesNotContain",
    "startsWith",
    "doesNotStartWith",
    "endsWith",
    "doesNotEndWith",
    "isSubmitted",
    "isSkipped",
    "isGreaterThan",
    "isLessThan",
    "isGreaterThanOrEqual",
    "isLessThanOrEqual",
    "equalsOneOf",
    "includesAllOf",
    "includesOneOf",
    "doesNotIncludeOneOf",
    "doesNotIncludeAllOf",
    "isClicked",
    "isAccepted",
    "isBefore",
    "isAfter",
    "isBooked",
    "isPartiallySubmitted",
    "isCompletelySubmitted"
]);
const operatorsWithoutRightOperand = [
    ZSurveyLogicConditionsOperator.Enum.isSubmitted,
    ZSurveyLogicConditionsOperator.Enum.isSkipped,
    ZSurveyLogicConditionsOperator.Enum.isClicked,
    ZSurveyLogicConditionsOperator.Enum.isAccepted,
    ZSurveyLogicConditionsOperator.Enum.isBooked,
    ZSurveyLogicConditionsOperator.Enum.isPartiallySubmitted,
    ZSurveyLogicConditionsOperator.Enum.isCompletelySubmitted
];
const ZDynamicLogicField = lib.z.enum([
    "question",
    "variable",
    "hiddenField"
]);
const ZActionObjective = lib.z.enum([
    "calculate",
    "requireAnswer",
    "jumpToQuestion"
]);
const ZActionTextVariableCalculateOperator = lib.z.enum([
    "assign",
    "concat"
], {
    message: "Conditional Logic: Invalid operator for a text variable"
});
const ZActionNumberVariableCalculateOperator = lib.z.enum([
    "add",
    "subtract",
    "multiply",
    "divide",
    "assign"
], {
    message: "Conditional Logic: Invalid operator for a number variable"
});
const ZDynamicQuestion = lib.z.object({
    type: lib.z.literal("question"),
    value: lib.z.string().min(1, "Conditional Logic: Question id cannot be empty")
});
const ZDynamicVariable = lib.z.object({
    type: lib.z.literal("variable"),
    value: lib.z.string().cuid2({
        message: "Conditional Logic: Variable id must be a valid cuid"
    }).min(1, "Conditional Logic: Variable id cannot be empty")
});
const ZDynamicHiddenField = lib.z.object({
    type: lib.z.literal("hiddenField"),
    value: lib.z.string().min(1, "Conditional Logic: Hidden field id cannot be empty")
});
const ZDynamicLogicFieldValue = lib.z.union([
    ZDynamicQuestion,
    ZDynamicVariable,
    ZDynamicHiddenField
], {
    message: "Conditional Logic: Invalid dynamic field value"
});
// Conditions
const ZLeftOperand = ZDynamicLogicFieldValue;
const ZRightOperandStatic = lib.z.object({
    type: lib.z.literal("static"),
    value: lib.z.union([
        lib.z.string(),
        lib.z.number(),
        lib.z.array(lib.z.string())
    ])
});
const ZRightOperand = lib.z.union([
    ZRightOperandStatic,
    ZDynamicLogicFieldValue
]);
const ZSingleCondition = lib.z.object({
    id: common/* ZId */.i4,
    leftOperand: ZLeftOperand,
    operator: ZSurveyLogicConditionsOperator,
    rightOperand: ZRightOperand.optional()
}).and(lib.z.object({
    connector: lib.z.undefined()
})).superRefine((val, ctx)=>{
    if (!operatorsWithoutRightOperand.includes(val.operator)) {
        if (val.rightOperand === undefined) {
            ctx.addIssue({
                code: lib.z.ZodIssueCode.custom,
                message: `Conditional Logic: right operand is required for operator "${val.operator}"`,
                path: [
                    "rightOperand"
                ]
            });
        } else if (val.rightOperand.type === "static" && val.rightOperand.value === "") {
            ctx.addIssue({
                code: lib.z.ZodIssueCode.custom,
                message: `Conditional Logic: right operand value cannot be empty for operator "${val.operator}"`
            });
        }
    } else if (val.rightOperand !== undefined) {
        ctx.addIssue({
            code: lib.z.ZodIssueCode.custom,
            message: `Conditional Logic: right operand should not be present for operator "${val.operator}"`,
            path: [
                "rightOperand"
            ]
        });
    }
});
const ZConditionGroup = lib.z.lazy(()=>lib.z.object({
        id: common/* ZId */.i4,
        connector: lib.z.enum([
            "and",
            "or"
        ]),
        conditions: lib.z.array(lib.z.union([
            ZSingleCondition,
            ZConditionGroup
        ]))
    }));
// Actions
const ZActionVariableValueType = lib.z.union([
    lib.z.literal("static"),
    ZDynamicLogicField
]);
const ZActionBase = lib.z.object({
    id: common/* ZId */.i4,
    objective: ZActionObjective
});
const ZActionCalculateBase = ZActionBase.extend({
    objective: lib.z.literal("calculate"),
    variableId: lib.z.string()
});
const ZActionCalculateText = ZActionCalculateBase.extend({
    operator: ZActionTextVariableCalculateOperator,
    value: lib.z.union([
        lib.z.object({
            type: lib.z.literal("static"),
            value: lib.z.string({
                message: "Conditional Logic: Value must be a string for text variable"
            }).min(1, "Conditional Logic: Please enter a value in logic field")
        }),
        ZDynamicLogicFieldValue
    ])
});
const ZActionCalculateNumber = ZActionCalculateBase.extend({
    operator: ZActionNumberVariableCalculateOperator,
    value: lib.z.union([
        lib.z.object({
            type: lib.z.literal("static"),
            value: lib.z.number({
                message: "Conditional Logic: Value must be a number for number variable"
            })
        }),
        ZDynamicLogicFieldValue
    ])
}).superRefine((val, ctx)=>{
    if (val.operator === "divide" && val.value.type === "static" && val.value.value === 0) {
        ctx.addIssue({
            code: lib.z.ZodIssueCode.custom,
            message: "Conditional Logic: Cannot divide by zero",
            path: [
                "value",
                "value"
            ]
        });
    }
});
const ZActionCalculate = lib.z.union([
    ZActionCalculateText,
    ZActionCalculateNumber
]);
const ZActionRequireAnswer = ZActionBase.extend({
    objective: lib.z.literal("requireAnswer"),
    target: lib.z.string().min(1, "Conditional Logic: Target question id cannot be empty")
});
const ZActionJumpToQuestion = ZActionBase.extend({
    objective: lib.z.literal("jumpToQuestion"),
    target: lib.z.string().min(1, "Conditional Logic: Target question id cannot be empty")
});
const ZSurveyLogicAction = lib.z.union([
    ZActionCalculate,
    ZActionRequireAnswer,
    ZActionJumpToQuestion
]);
const ZSurveyLogicActions = lib.z.array(ZSurveyLogicAction);
const ZSurveyLogic = lib.z.object({
    id: common/* ZId */.i4,
    conditions: ZConditionGroup,
    actions: ZSurveyLogicActions
});
const ZSurveyQuestionBase = lib.z.object({
    id: ZSurveyQuestionId,
    type: lib.z.string(),
    headline: ZI18nString,
    subheader: ZI18nString.optional(),
    imageUrl: lib.z.string().optional(),
    videoUrl: lib.z.string().optional(),
    required: lib.z.boolean(),
    buttonLabel: ZI18nString.optional(),
    backButtonLabel: ZI18nString.optional(),
    scale: lib.z.enum([
        "number",
        "smiley",
        "star"
    ]).optional(),
    range: lib.z.union([
        lib.z.literal(5),
        lib.z.literal(3),
        lib.z.literal(4),
        lib.z.literal(7),
        lib.z.literal(10)
    ]).optional(),
    logic: lib.z.array(ZSurveyLogic).optional(),
    logicFallback: ZSurveyQuestionId.optional(),
    isDraft: lib.z.boolean().optional()
});
const ZSurveyOpenTextQuestionInputType = lib.z.enum([
    "text",
    "email",
    "url",
    "number",
    "phone"
]);
const ZSurveyOpenTextQuestion = ZSurveyQuestionBase.extend({
    type: lib.z.literal("openText"),
    placeholder: ZI18nString.optional(),
    longAnswer: lib.z.boolean().optional(),
    inputType: ZSurveyOpenTextQuestionInputType.optional().default("text"),
    insightsEnabled: lib.z.boolean().default(false).optional(),
    charLimit: lib.z.object({
        enabled: lib.z.boolean().default(false).optional(),
        min: lib.z.number().optional(),
        max: lib.z.number().optional()
    }).default({
        enabled: false
    })
}).superRefine((data, ctx)=>{
    if (data.charLimit.enabled && data.charLimit.min === undefined && data.charLimit.max === undefined) {
        ctx.addIssue({
            code: lib.z.ZodIssueCode.custom,
            message: "Enter the values for either minimum or maximum field"
        });
    }
    if (data.charLimit.min !== undefined && data.charLimit.min < 0 || data.charLimit.max !== undefined && data.charLimit.max < 0) {
        ctx.addIssue({
            code: lib.z.ZodIssueCode.custom,
            message: "The character limit values should be positive"
        });
    }
    if (data.charLimit.min !== undefined && data.charLimit.max !== undefined && data.charLimit.min > data.charLimit.max) {
        ctx.addIssue({
            code: lib.z.ZodIssueCode.custom,
            message: "Minimum value cannot be greater than the maximum value"
        });
    }
});
const ZSurveyConsentQuestion = ZSurveyQuestionBase.extend({
    type: lib.z.literal("consent"),
    html: ZI18nString.optional(),
    label: ZI18nString,
    placeholder: lib.z.string().optional()
});
const ZShuffleOption = lib.z.enum([
    "none",
    "all",
    "exceptLast"
]);
const ZSurveyMultipleChoiceQuestion = ZSurveyQuestionBase.extend({
    type: lib.z.union([
        lib.z.literal("multipleChoiceSingle"),
        lib.z.literal("multipleChoiceMulti")
    ]),
    choices: lib.z.array(ZSurveyQuestionChoice).min(2, {
        message: "Multiple Choice Question must have at least two choices"
    }),
    shuffleOption: ZShuffleOption.optional(),
    otherOptionPlaceholder: ZI18nString.optional()
});
const ZSurveyNPSQuestion = ZSurveyQuestionBase.extend({
    type: lib.z.literal("nps"),
    lowerLabel: ZI18nString.optional(),
    upperLabel: ZI18nString.optional(),
    isColorCodingEnabled: lib.z.boolean().optional().default(false)
});
const ZSurveyCTAQuestion = ZSurveyQuestionBase.extend({
    type: lib.z.literal("cta"),
    html: ZI18nString.optional(),
    buttonUrl: lib.z.string().optional(),
    buttonExternal: lib.z.boolean(),
    dismissButtonLabel: ZI18nString.optional()
});
const ZSurveyRatingQuestion = ZSurveyQuestionBase.extend({
    type: lib.z.literal("rating"),
    scale: lib.z.enum([
        "number",
        "smiley",
        "star"
    ]),
    range: lib.z.union([
        lib.z.literal(5),
        lib.z.literal(3),
        lib.z.literal(4),
        lib.z.literal(7),
        lib.z.literal(10)
    ]),
    lowerLabel: ZI18nString.optional(),
    upperLabel: ZI18nString.optional(),
    isColorCodingEnabled: lib.z.boolean().optional().default(false)
});
const ZSurveyDateQuestion = ZSurveyQuestionBase.extend({
    type: lib.z.literal("date"),
    html: ZI18nString.optional(),
    format: lib.z.enum([
        "M-d-y",
        "d-M-y",
        "y-M-d"
    ])
});
const ZSurveyPictureSelectionQuestion = ZSurveyQuestionBase.extend({
    type: lib.z.literal("pictureSelection"),
    allowMulti: lib.z.boolean().optional().default(false),
    choices: lib.z.array(ZSurveyPictureChoice).min(2, {
        message: "Picture Selection question must have atleast 2 choices"
    })
});
const ZSurveyFileUploadQuestion = ZSurveyQuestionBase.extend({
    type: lib.z.literal("fileUpload"),
    allowMultipleFiles: lib.z.boolean(),
    maxSizeInMB: lib.z.number().optional(),
    allowedFileExtensions: lib.z.array(common/* ZAllowedFileExtension */.gK).optional()
});
const ZSurveyCalQuestion = ZSurveyQuestionBase.extend({
    type: lib.z.literal("cal"),
    calUserName: lib.z.string().min(1, {
        message: "Cal user name is required"
    }),
    calHost: lib.z.string().optional()
});
const ZSurveyMatrixQuestion = ZSurveyQuestionBase.extend({
    type: lib.z.literal("matrix"),
    rows: lib.z.array(ZI18nString),
    columns: lib.z.array(ZI18nString),
    shuffleOption: ZShuffleOption.optional().default("none")
});
const ZToggleInputConfig = lib.z.object({
    show: lib.z.boolean(),
    required: lib.z.boolean(),
    placeholder: ZI18nString
});
const ZSurveyAddressQuestion = ZSurveyQuestionBase.extend({
    type: lib.z.literal("address"),
    addressLine1: ZToggleInputConfig,
    addressLine2: ZToggleInputConfig,
    city: ZToggleInputConfig,
    state: ZToggleInputConfig,
    zip: ZToggleInputConfig,
    country: ZToggleInputConfig
});
const ZSurveyContactInfoQuestion = ZSurveyQuestionBase.extend({
    type: lib.z.literal("contactInfo"),
    firstName: ZToggleInputConfig,
    lastName: ZToggleInputConfig,
    email: ZToggleInputConfig,
    phone: ZToggleInputConfig,
    company: ZToggleInputConfig
});
const ZSurveyRankingQuestion = ZSurveyQuestionBase.extend({
    type: lib.z.literal("ranking"),
    choices: lib.z.array(ZSurveyQuestionChoice).min(2, {
        message: "Ranking Question must have at least two options"
    }).max(25, {
        message: "Ranking Question can have at most 25 options"
    }),
    otherOptionPlaceholder: ZI18nString.optional(),
    shuffleOption: ZShuffleOption.optional()
});
const ZSurveyQuestion = lib.z.union([
    ZSurveyOpenTextQuestion,
    ZSurveyConsentQuestion,
    ZSurveyMultipleChoiceQuestion,
    ZSurveyNPSQuestion,
    ZSurveyCTAQuestion,
    ZSurveyRatingQuestion,
    ZSurveyPictureSelectionQuestion,
    ZSurveyDateQuestion,
    ZSurveyFileUploadQuestion,
    ZSurveyCalQuestion,
    ZSurveyMatrixQuestion,
    ZSurveyAddressQuestion,
    ZSurveyRankingQuestion,
    ZSurveyContactInfoQuestion
]);
const ZSurveyQuestions = lib.z.array(ZSurveyQuestion);
const ZSurveyQuestionType = lib.z.enum([
    "address",
    "cta",
    "consent",
    "date",
    "fileUpload",
    "matrix",
    "multipleChoiceMulti",
    "multipleChoiceSingle",
    "nps",
    "openText",
    "pictureSelection",
    "rating",
    "cal",
    "ranking",
    "contactInfo"
]);
const ZSurveyLanguage = lib.z.object({
    language: project/* ZLanguage */.LM,
    default: lib.z.boolean(),
    enabled: lib.z.boolean()
});
const ZSurveyQuestionsObject = lib.z.object({
    questions: ZSurveyQuestions,
    hiddenFields: ZSurveyHiddenFields
});
const ZSurveyDisplayOption = lib.z.enum([
    "displayOnce",
    "displayMultiple",
    "respondMultiple",
    "displaySome"
]);
const ZSurveyType = lib.z.enum([
    "link",
    "app"
]);
const ZSurveyStatus = lib.z.enum([
    "draft",
    "scheduled",
    "inProgress",
    "paused",
    "completed"
]);
const ZSurveyInlineTriggers = lib.z.object({
    codeConfig: lib.z.object({
        identifier: lib.z.string()
    }).optional(),
    noCodeConfig: action_classes/* ZActionClassNoCodeConfig */.Zq.optional()
});
const ZSurvey = lib.z.object({
    id: lib.z.string().cuid2(),
    createdAt: lib.z.date(),
    updatedAt: lib.z.date(),
    name: lib.z.string(),
    type: ZSurveyType,
    environmentId: lib.z.string(),
    createdBy: lib.z.string().nullable(),
    status: ZSurveyStatus,
    displayOption: ZSurveyDisplayOption,
    autoClose: lib.z.number().nullable(),
    triggers: lib.z.array(lib.z.object({
        actionClass: action_classes/* ZActionClass */.vb
    })),
    recontactDays: lib.z.number().nullable(),
    displayLimit: lib.z.number().nullable(),
    welcomeCard: ZSurveyWelcomeCard,
    questions: ZSurveyQuestions.min(1, {
        message: "Survey must have at least one question"
    }).superRefine((questions, ctx)=>{
        const questionIds = questions.map((q)=>q.id);
        const uniqueQuestionIds = new Set(questionIds);
        if (uniqueQuestionIds.size !== questionIds.length) {
            ctx.addIssue({
                code: lib.z.ZodIssueCode.custom,
                message: "Question IDs must be unique",
                path: [
                    questionIds.findIndex((id, index)=>questionIds.indexOf(id) !== index),
                    "id"
                ]
            });
        }
    }),
    endings: ZSurveyEndings.superRefine((endings, ctx)=>{
        const endingIds = endings.map((q)=>q.id);
        const uniqueEndingIds = new Set(endingIds);
        if (uniqueEndingIds.size !== endingIds.length) {
            ctx.addIssue({
                code: lib.z.ZodIssueCode.custom,
                message: "Ending IDs must be unique",
                path: [
                    endingIds.findIndex((id, index)=>endingIds.indexOf(id) !== index),
                    "id"
                ]
            });
        }
    }),
    hiddenFields: ZSurveyHiddenFields,
    variables: ZSurveyVariables.superRefine((variables, ctx)=>{
        // variable ids must be unique
        const variableIds = variables.map((v)=>v.id);
        const uniqueVariableIds = new Set(variableIds);
        if (uniqueVariableIds.size !== variableIds.length) {
            ctx.addIssue({
                code: lib.z.ZodIssueCode.custom,
                message: "Variable IDs must be unique",
                path: [
                    "variables"
                ]
            });
        }
        // variable names must be unique
        const variableNames = variables.map((v)=>v.name);
        const uniqueVariableNames = new Set(variableNames);
        if (uniqueVariableNames.size !== variableNames.length) {
            ctx.addIssue({
                code: lib.z.ZodIssueCode.custom,
                message: "Variable names must be unique",
                path: [
                    "variables"
                ]
            });
        }
    }),
    followUps: lib.z.array(ZSurveyFollowUp.extend({
        deleted: lib.z.boolean().optional()
    })),
    delay: lib.z.number(),
    autoComplete: lib.z.number().min(1, {
        message: "Response limit must be greater than 0"
    }).nullable(),
    runOnDate: lib.z.date().nullable(),
    closeOnDate: lib.z.date().nullable(),
    projectOverwrites: ZSurveyProjectOverwrites.nullable(),
    styling: ZSurveyStyling.nullable(),
    showLanguageSwitch: lib.z.boolean().nullable(),
    surveyClosedMessage: ZSurveyClosedMessage.nullable(),
    segment: segment/* ZSegment */.K5.nullable(),
    singleUse: ZSurveySingleUse.nullable(),
    isVerifyEmailEnabled: lib.z.boolean(),
    isSingleResponsePerEmailEnabled: lib.z.boolean(),
    pin: lib.z.string().min(4, {
        message: "PIN must be a four digit number"
    }).nullish(),
    resultShareKey: lib.z.string().nullable(),
    displayPercentage: lib.z.number().min(0.01).max(100).nullable(),
    languages: lib.z.array(ZSurveyLanguage)
}).superRefine((survey, ctx)=>{
    const { questions, languages, welcomeCard, endings } = survey;
    let multiLangIssue;
    // welcome card validations
    if (welcomeCard.enabled) {
        if (welcomeCard.headline) {
            multiLangIssue = validateCardFieldsForAllLanguages("cardHeadline", welcomeCard.headline, languages, "welcome");
            if (multiLangIssue) {
                ctx.addIssue(multiLangIssue);
            }
        }
        if (welcomeCard.html && welcomeCard.html.default.trim() !== "") {
            multiLangIssue = validateCardFieldsForAllLanguages("welcomeCardHtml", welcomeCard.html, languages, "welcome");
            if (multiLangIssue) {
                ctx.addIssue(multiLangIssue);
            }
        }
        if (welcomeCard.buttonLabel && welcomeCard.buttonLabel.default.trim() !== "") {
            multiLangIssue = validateCardFieldsForAllLanguages("buttonLabel", welcomeCard.buttonLabel, languages, "welcome");
            if (multiLangIssue) {
                ctx.addIssue(multiLangIssue);
            }
        }
    }
    // Custom default validation for each question
    questions.forEach((question, questionIndex)=>{
        multiLangIssue = validateQuestionLabels("headline", question.headline, languages, questionIndex);
        if (multiLangIssue) {
            ctx.addIssue(multiLangIssue);
        }
        if (question.subheader && question.subheader.default.trim() !== "") {
            multiLangIssue = validateQuestionLabels("subheader", question.subheader, languages, questionIndex);
            if (multiLangIssue) {
                ctx.addIssue(multiLangIssue);
            }
        }
        const defaultLanguageCode = "default";
        const initialFieldsToValidate = [
            "html",
            "buttonLabel",
            "upperLabel",
            "lowerLabel",
            "label",
            "placeholder"
        ];
        const fieldsToValidate = questionIndex === 0 ? initialFieldsToValidate : [
            ...initialFieldsToValidate,
            "backButtonLabel"
        ];
        for (const field of fieldsToValidate){
            // Skip label validation for consent questions as its called checkbox label
            if (field === "label" && question.type === "consent") {
                continue;
            }
            const questionFieldValue = question[field];
            if (typeof questionFieldValue?.[defaultLanguageCode] !== "undefined" && questionFieldValue[defaultLanguageCode].trim() !== "") {
                multiLangIssue = validateQuestionLabels(field, questionFieldValue, languages, questionIndex);
                if (multiLangIssue) {
                    ctx.addIssue(multiLangIssue);
                }
            }
        }
        if (question.type === "openText") {
            if (question.placeholder && question.placeholder[defaultLanguageCode].trim() !== "" && languages.length > 1) {
                multiLangIssue = validateQuestionLabels("placeholder", question.placeholder, languages, questionIndex);
                if (multiLangIssue) {
                    ctx.addIssue(multiLangIssue);
                }
            }
        }
        if (question.type === "multipleChoiceSingle" || question.type === "multipleChoiceMulti" || question.type === "ranking") {
            question.choices.forEach((choice, choiceIndex)=>{
                multiLangIssue = validateQuestionLabels(`Choice ${String(choiceIndex + 1)}`, choice.label, languages, questionIndex, true);
                if (multiLangIssue) {
                    ctx.addIssue(multiLangIssue);
                }
            });
            const duplicateChoicesLanguageCodes = findLanguageCodesForDuplicateLabels(question.choices.map((choice)=>choice.label), languages);
            if (duplicateChoicesLanguageCodes.length > 0) {
                const invalidLanguageCodes = duplicateChoicesLanguageCodes.map((invalidLanguageCode)=>invalidLanguageCode === "default" ? languages.find((lang)=>lang.default)?.language.code ?? "default" : invalidLanguageCode);
                const isDefaultOnly = invalidLanguageCodes.length === 1 && invalidLanguageCodes[0] === "default";
                ctx.addIssue({
                    code: lib.z.ZodIssueCode.custom,
                    message: `Question ${String(questionIndex + 1)} has duplicate choice labels ${isDefaultOnly ? "" : "for the following languages:"}`,
                    path: [
                        "questions",
                        questionIndex,
                        "choices"
                    ],
                    params: isDefaultOnly ? undefined : {
                        invalidLanguageCodes
                    }
                });
            }
        }
        if (question.type === "consent") {
            multiLangIssue = validateQuestionLabels("consent.label", question.label, languages, questionIndex);
            if (multiLangIssue) {
                ctx.addIssue(multiLangIssue);
            }
        }
        if (question.type === "cta") {
            if (!question.required && question.dismissButtonLabel) {
                multiLangIssue = validateQuestionLabels("dismissButtonLabel", question.dismissButtonLabel, languages, questionIndex);
                if (multiLangIssue) {
                    ctx.addIssue(multiLangIssue);
                }
            }
            if (question.buttonExternal) {
                const parsedButtonUrl = lib.z.string().url().safeParse(question.buttonUrl);
                if (!parsedButtonUrl.success) {
                    ctx.addIssue({
                        code: lib.z.ZodIssueCode.custom,
                        message: `Question ${String(questionIndex + 1)} has an invalid button URL`,
                        path: [
                            "questions",
                            questionIndex,
                            "buttonUrl"
                        ]
                    });
                }
            }
        }
        if (question.type === "matrix") {
            question.rows.forEach((row, rowIndex)=>{
                multiLangIssue = validateQuestionLabels(`Row ${String(rowIndex + 1)}`, row, languages, questionIndex, true);
                if (multiLangIssue) {
                    ctx.addIssue(multiLangIssue);
                }
            });
            question.columns.forEach((column, columnIndex)=>{
                multiLangIssue = validateQuestionLabels(`Column ${String(columnIndex + 1)}`, column, languages, questionIndex, true);
                if (multiLangIssue) {
                    ctx.addIssue(multiLangIssue);
                }
            });
            const duplicateRowsLanguageCodes = findLanguageCodesForDuplicateLabels(question.rows, languages);
            const duplicateColumnLanguageCodes = findLanguageCodesForDuplicateLabels(question.columns, languages);
            if (duplicateRowsLanguageCodes.length > 0) {
                const invalidLanguageCodes = duplicateRowsLanguageCodes.map((invalidLanguageCode)=>invalidLanguageCode === "default" ? languages.find((lang)=>lang.default)?.language.code ?? "default" : invalidLanguageCode);
                const isDefaultOnly = invalidLanguageCodes.length === 1 && invalidLanguageCodes[0] === "default";
                ctx.addIssue({
                    code: lib.z.ZodIssueCode.custom,
                    message: `Question ${String(questionIndex + 1)} has duplicate row labels ${isDefaultOnly ? "" : "for the following languages:"}`,
                    path: [
                        "questions",
                        questionIndex,
                        "rows"
                    ],
                    params: isDefaultOnly ? undefined : {
                        invalidLanguageCodes
                    }
                });
            }
            if (duplicateColumnLanguageCodes.length > 0) {
                const invalidLanguageCodes = duplicateColumnLanguageCodes.map((invalidLanguageCode)=>invalidLanguageCode === "default" ? languages.find((lang)=>lang.default)?.language.code ?? "default" : invalidLanguageCode);
                const isDefaultOnly = invalidLanguageCodes.length === 1 && invalidLanguageCodes[0] === "default";
                ctx.addIssue({
                    code: lib.z.ZodIssueCode.custom,
                    message: `Question ${String(questionIndex + 1)} has duplicate column labels ${isDefaultOnly ? "" : "for the following languages:"}`,
                    path: [
                        "questions",
                        questionIndex,
                        "columns"
                    ],
                    params: isDefaultOnly ? undefined : {
                        invalidLanguageCodes
                    }
                });
            }
        }
        if (question.type === "fileUpload") {
            // allowedFileExtensions must have atleast one element
            if (question.allowedFileExtensions && question.allowedFileExtensions.length === 0) {
                ctx.addIssue({
                    code: lib.z.ZodIssueCode.custom,
                    message: `Question ${String(questionIndex + 1)} must have atleast one allowed file extension`,
                    path: [
                        "questions",
                        questionIndex,
                        "allowedFileExtensions"
                    ]
                });
            }
        }
        if (question.type === "cal") {
            if (question.calHost !== undefined) {
                const hostnameRegex = /^(?!-)[a-zA-Z0-9-]{1,63}(?<!-)(?:\.(?!-)[a-zA-Z0-9-]{1,63}(?<!-)){1,}$/i;
                if (!hostnameRegex.test(question.calHost)) {
                    ctx.addIssue({
                        code: lib.z.ZodIssueCode.custom,
                        message: `Question ${String(questionIndex + 1)} must have a valid host name`,
                        path: [
                            "questions",
                            questionIndex,
                            "calHost"
                        ]
                    });
                }
            }
        }
        if (question.type === "contactInfo") {
            const { company, email, firstName, lastName, phone } = question;
            const fields = [
                {
                    ...company,
                    label: "Company"
                },
                {
                    ...email,
                    label: "Email"
                },
                {
                    ...firstName,
                    label: "First Name"
                },
                {
                    ...lastName,
                    label: "Last Name"
                },
                {
                    ...phone,
                    label: "Phone"
                }
            ];
            if (fields.every((field)=>!field.show)) {
                ctx.addIssue({
                    code: lib.z.ZodIssueCode.custom,
                    message: "At least one field must be shown in the Contact Info question",
                    path: [
                        "questions",
                        questionIndex
                    ]
                });
            }
            fields.forEach((field)=>{
                const multiLangIssueInPlaceholder = field.show && validateQuestionLabels(`Placeholder for field ${field.label}`, field.placeholder, languages, questionIndex, true);
                if (multiLangIssueInPlaceholder) {
                    ctx.addIssue(multiLangIssueInPlaceholder);
                }
            });
        }
        if (question.type === "address") {
            const { addressLine1, addressLine2, city, state, zip, country } = question;
            const fields = [
                {
                    ...addressLine1,
                    label: "Address Line 1"
                },
                {
                    ...addressLine2,
                    label: "Address Line 2"
                },
                {
                    ...city,
                    label: "City"
                },
                {
                    ...state,
                    label: "State"
                },
                {
                    ...zip,
                    label: "Zip"
                },
                {
                    ...country,
                    label: "Country"
                }
            ];
            if (fields.every((field)=>!field.show)) {
                ctx.addIssue({
                    code: lib.z.ZodIssueCode.custom,
                    message: "At least one field must be shown in the Address question",
                    path: [
                        "questions",
                        questionIndex
                    ]
                });
            }
            fields.forEach((field)=>{
                const multiLangIssueInPlaceholder = field.show && validateQuestionLabels(`Placeholder for field ${field.label}`, field.placeholder, languages, questionIndex, true);
                if (multiLangIssueInPlaceholder) {
                    ctx.addIssue(multiLangIssueInPlaceholder);
                }
            });
        }
        if (question.logic) {
            const logicIssues = validateLogic(survey, questionIndex, question.logic);
            logicIssues.forEach((issue)=>{
                ctx.addIssue(issue);
            });
        }
    });
    const questionsWithCyclicLogic = findQuestionsWithCyclicLogic(questions);
    if (questionsWithCyclicLogic.length > 0) {
        questionsWithCyclicLogic.forEach((questionId)=>{
            const questionIndex = questions.findIndex((q)=>q.id === questionId);
            ctx.addIssue({
                code: lib.z.ZodIssueCode.custom,
                message: `Conditional Logic: Cyclic logic detected 🔃 Please check the logic of question ${String(questionIndex + 1)}.`,
                path: [
                    "questions",
                    questionIndex,
                    "logic"
                ]
            });
        });
    }
    endings.forEach((ending, index)=>{
        // thank you card validations
        if (ending.type === "endScreen") {
            const multiLangIssueInHeadline = validateCardFieldsForAllLanguages("cardHeadline", ending.headline ?? {}, languages, "end", index);
            if (multiLangIssueInHeadline) {
                ctx.addIssue(multiLangIssueInHeadline);
            }
            if (ending.subheader) {
                const multiLangIssueInSubheader = validateCardFieldsForAllLanguages("subheader", ending.subheader, languages, "end", index);
                if (multiLangIssueInSubheader) {
                    ctx.addIssue(multiLangIssueInSubheader);
                }
            }
            if (ending.buttonLabel) {
                const multiLangIssueInButtonLabel = validateCardFieldsForAllLanguages("endingCardButtonLabel", ending.buttonLabel, languages, "end", index);
                if (multiLangIssueInButtonLabel) {
                    ctx.addIssue(multiLangIssueInButtonLabel);
                }
            }
        }
        if (ending.type === "redirectToUrl") {
            if (!ending.label || ending.label.trim() === "") {
                ctx.addIssue({
                    code: lib.z.ZodIssueCode.custom,
                    message: `Redirect Url label cannot be empty for ending Card ${String(index + 1)}.`,
                    path: [
                        "endings",
                        index,
                        "label"
                    ]
                });
            }
        }
    });
    if (survey.followUps.length) {
        survey.followUps.filter((followUp)=>!followUp.deleted).forEach((followUp, index)=>{
            if (followUp.action.properties.to) {
                const validOptions = [
                    ...survey.questions.filter((q)=>{
                        if (q.type === "openText") {
                            if (q.inputType === "email") {
                                return true;
                            }
                        }
                        if (q.type === "contactInfo") {
                            return true;
                        }
                        return false;
                    }).map((q)=>q.id),
                    ...survey.hiddenFields.fieldIds ?? []
                ];
                if (validOptions.findIndex((option)=>option === followUp.action.properties.to) === -1) {
                    ctx.addIssue({
                        code: lib.z.ZodIssueCode.custom,
                        message: `The action in follow up ${String(index + 1)} has an invalid email field`,
                        path: [
                            "followUps"
                        ]
                    });
                }
                if (followUp.trigger.type === "endings") {
                    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- endingIds is always defined
                    if (!followUp.trigger.properties?.endingIds?.length) {
                        ctx.addIssue({
                            code: lib.z.ZodIssueCode.custom,
                            message: `The trigger in follow up ${String(index + 1)} has no ending selected`,
                            path: [
                                "followUps"
                            ]
                        });
                    }
                }
            }
        });
    }
});
const isInvalidOperatorsForQuestionType = (question, operator)=>{
    let isInvalidOperator = false;
    const questionType = question.type;
    if (question.required && operator === "isSkipped") return true;
    switch(questionType){
        case "openText":
            switch(question.inputType){
                case "email":
                case "phone":
                case "text":
                case "url":
                    if (![
                        "equals",
                        "doesNotEqual",
                        "contains",
                        "doesNotContain",
                        "startsWith",
                        "doesNotStartWith",
                        "endsWith",
                        "doesNotEndWith",
                        "isSubmitted",
                        "isSkipped"
                    ].includes(operator)) {
                        isInvalidOperator = true;
                    }
                    break;
                case "number":
                    if (![
                        "equals",
                        "doesNotEqual",
                        "isGreaterThan",
                        "isLessThan",
                        "isGreaterThanOrEqual",
                        "isLessThanOrEqual",
                        "isSubmitted",
                        "isSkipped"
                    ].includes(operator)) {
                        isInvalidOperator = true;
                    }
            }
            break;
        case "multipleChoiceSingle":
            if (![
                "equals",
                "doesNotEqual",
                "equalsOneOf",
                "isSubmitted",
                "isSkipped"
            ].includes(operator)) {
                isInvalidOperator = true;
            }
            break;
        case "multipleChoiceMulti":
        case "pictureSelection":
            if (![
                "equals",
                "doesNotEqual",
                "includesAllOf",
                "includesOneOf",
                "doesNotIncludeAllOf",
                "doesNotIncludeOneOf",
                "isSubmitted",
                "isSkipped"
            ].includes(operator)) {
                isInvalidOperator = true;
            }
            break;
        case "nps":
        case "rating":
            if (![
                "equals",
                "doesNotEqual",
                "isGreaterThan",
                "isLessThan",
                "isGreaterThanOrEqual",
                "isLessThanOrEqual",
                "isSubmitted",
                "isSkipped"
            ].includes(operator)) {
                isInvalidOperator = true;
            }
            break;
        case "cta":
            if (![
                "isClicked",
                "isSkipped"
            ].includes(operator)) {
                isInvalidOperator = true;
            }
            break;
        case "consent":
            if (![
                "isAccepted",
                "isSkipped"
            ].includes(operator)) {
                isInvalidOperator = true;
            }
            break;
        case "date":
            if (![
                "equals",
                "doesNotEqual",
                "isBefore",
                "isAfter",
                "isSubmitted",
                "isSkipped"
            ].includes(operator)) {
                isInvalidOperator = true;
            }
            break;
        case "fileUpload":
        case "address":
        case "ranking":
            if (![
                "isSubmitted",
                "isSkipped"
            ].includes(operator)) {
                isInvalidOperator = true;
            }
            break;
        case "cal":
            if (![
                "isBooked",
                "isSkipped"
            ].includes(operator)) {
                isInvalidOperator = true;
            }
            break;
        case "matrix":
            if (![
                "isPartiallySubmitted",
                "isCompletelySubmitted",
                "isSkipped"
            ].includes(operator)) {
                isInvalidOperator = true;
            }
            break;
        case "contactInfo":
            if (![
                "isSubmitted",
                "isSkipped"
            ].includes(operator)) {
                isInvalidOperator = true;
            }
            break;
        default:
            isInvalidOperator = true;
    }
    return isInvalidOperator;
};
const isInvalidOperatorsForVariableType = (variableType, operator)=>{
    let isInvalidOperator = false;
    switch(variableType){
        case "text":
            if (![
                "equals",
                "doesNotEqual",
                "contains",
                "doesNotContain",
                "startsWith",
                "doesNotStartWith",
                "endsWith",
                "doesNotEndWith"
            ].includes(operator)) {
                isInvalidOperator = true;
            }
            break;
        case "number":
            if (![
                "equals",
                "doesNotEqual",
                "isGreaterThan",
                "isLessThan",
                "isGreaterThanOrEqual",
                "isLessThanOrEqual"
            ].includes(operator)) {
                isInvalidOperator = true;
            }
            break;
    }
    return isInvalidOperator;
};
const isInvalidOperatorsForHiddenFieldType = (operator)=>{
    let isInvalidOperator = false;
    if (![
        "equals",
        "doesNotEqual",
        "contains",
        "doesNotContain",
        "startsWith",
        "doesNotStartWith",
        "endsWith",
        "doesNotEndWith"
    ].includes(operator)) {
        isInvalidOperator = true;
    }
    return isInvalidOperator;
};
const validateConditions = (survey, questionIndex, logicIndex, conditions)=>{
    const issues = [];
    const validateSingleCondition = (condition)=>{
        const { leftOperand, operator, rightOperand } = condition;
        // Validate left operand
        if (leftOperand.type === "question") {
            const questionId = leftOperand.value;
            const questionIdx = survey.questions.findIndex((q)=>q.id === questionId);
            const question = questionIdx !== -1 ? survey.questions[questionIdx] : undefined;
            if (!question) {
                issues.push({
                    code: lib.z.ZodIssueCode.custom,
                    message: `Conditional Logic: Question ID ${questionId} does not exist in logic no: ${String(logicIndex + 1)} of question ${String(questionIndex + 1)}`,
                    path: [
                        "questions",
                        questionIndex,
                        "logic",
                        logicIndex,
                        "conditions"
                    ]
                });
                return;
            } else if (questionIndex < questionIdx) {
                issues.push({
                    code: lib.z.ZodIssueCode.custom,
                    message: `Conditional Logic: Question ${String(questionIndex + 1)} cannot refer to a question ${String(questionIdx + 1)} that appears later in the survey`,
                    path: [
                        "questions",
                        questionIndex,
                        "logic",
                        logicIndex,
                        "conditions"
                    ]
                });
                return;
            }
            // Validate operator based on question type
            const isInvalidOperator = isInvalidOperatorsForQuestionType(question, operator);
            if (isInvalidOperator) {
                issues.push({
                    code: lib.z.ZodIssueCode.custom,
                    message: `Conditional Logic: Invalid operator "${operator}" for question type "${question.type}" in logic no: ${String(logicIndex + 1)} of question ${String(questionIndex + 1)}`,
                    path: [
                        "questions",
                        questionIndex,
                        "logic",
                        logicIndex,
                        "conditions"
                    ]
                });
            }
            // Validate right operand
            if ([
                "isSubmitted",
                "isSkipped",
                "isClicked",
                "isAccepted",
                "isBooked",
                "isPartiallySubmitted",
                "isCompletelySubmitted"
            ].includes(operator)) {
                if (rightOperand !== undefined) {
                    issues.push({
                        code: lib.z.ZodIssueCode.custom,
                        message: `Conditional Logic: Right operand should not be defined for operator "${operator}" in logic no: ${String(logicIndex + 1)} of question ${String(questionIndex + 1)}`,
                        path: [
                            "questions",
                            questionIndex,
                            "logic",
                            logicIndex,
                            "conditions"
                        ]
                    });
                }
                return;
            }
            if (question.type === "openText") {
                // Validate right operand
                if (rightOperand?.type === "question") {
                    const quesId = rightOperand.value;
                    const ques = survey.questions.find((q)=>q.id === quesId);
                    if (!ques) {
                        issues.push({
                            code: lib.z.ZodIssueCode.custom,
                            message: `Conditional Logic: Question ID ${questionId} does not exist in logic no: ${String(logicIndex + 1)} of question ${String(questionIndex + 1)}`,
                            path: [
                                "questions",
                                questionIndex,
                                "logic",
                                logicIndex,
                                "conditions"
                            ]
                        });
                    } else {
                        const validQuestionTypes = [
                            "openText"
                        ];
                        if (question.inputType === "number") {
                            validQuestionTypes.push(...[
                                "rating",
                                "nps"
                            ]);
                        }
                        if ([
                            "equals",
                            "doesNotEqual"
                        ].includes(condition.operator)) {
                            if (question.inputType !== "number") {
                                validQuestionTypes.push(...[
                                    "date",
                                    "multipleChoiceSingle",
                                    "multipleChoiceMulti"
                                ]);
                            }
                        }
                        if (!validQuestionTypes.includes(ques.type)) {
                            issues.push({
                                code: lib.z.ZodIssueCode.custom,
                                message: `Conditional Logic: Invalid question type "${ques.type}" for right operand in logic no: ${String(logicIndex + 1)} of question ${String(questionIndex + 1)}`,
                                path: [
                                    "questions",
                                    questionIndex,
                                    "logic",
                                    logicIndex,
                                    "conditions"
                                ]
                            });
                        }
                    }
                } else if (rightOperand?.type === "variable") {
                    const variableId = rightOperand.value;
                    const variable = survey.variables.find((v)=>v.id === variableId);
                    if (!variable) {
                        issues.push({
                            code: lib.z.ZodIssueCode.custom,
                            message: `Conditional Logic: Variable ID ${variableId} does not exist in logic no: ${String(logicIndex + 1)} of question ${String(questionIndex + 1)}`,
                            path: [
                                "questions",
                                questionIndex,
                                "logic",
                                logicIndex,
                                "conditions"
                            ]
                        });
                    }
                } else if (rightOperand?.type === "hiddenField") {
                    const fieldId = rightOperand.value;
                    const field = survey.hiddenFields.fieldIds?.find((id)=>id === fieldId);
                    if (!field) {
                        issues.push({
                            code: lib.z.ZodIssueCode.custom,
                            message: `Conditional Logic: Hidden field ID ${fieldId} does not exist in logic no: ${String(logicIndex + 1)} of question ${String(questionIndex + 1)}`,
                            path: [
                                "questions",
                                questionIndex,
                                "logic",
                                logicIndex,
                                "conditions"
                            ]
                        });
                    }
                } else if (rightOperand?.type === "static") {
                    if (!rightOperand.value) {
                        issues.push({
                            code: lib.z.ZodIssueCode.custom,
                            message: `Conditional Logic: Static value is required in logic no: ${String(logicIndex + 1)} of question ${String(questionIndex + 1)}`,
                            path: [
                                "questions",
                                questionIndex,
                                "logic",
                                logicIndex,
                                "conditions"
                            ]
                        });
                    }
                }
            } else if (question.type === "multipleChoiceSingle") {
                if (rightOperand?.type !== "static") {
                    issues.push({
                        code: lib.z.ZodIssueCode.custom,
                        message: `Conditional Logic: Right operand should be a static value for "${operator}" in logic no: ${String(logicIndex + 1)} of question ${String(questionIndex + 1)}`,
                        path: [
                            "questions",
                            questionIndex,
                            "logic",
                            logicIndex,
                            "conditions"
                        ]
                    });
                } else if (condition.operator === "equals" || condition.operator === "doesNotEqual") {
                    if (typeof rightOperand.value !== "string") {
                        issues.push({
                            code: lib.z.ZodIssueCode.custom,
                            message: `Conditional Logic: Right operand should be a string for "${operator}" in logic no: ${String(logicIndex + 1)} of question ${String(questionIndex + 1)}`,
                            path: [
                                "questions",
                                questionIndex,
                                "logic",
                                logicIndex,
                                "conditions"
                            ]
                        });
                    } else {
                        const choice = question.choices.find((c)=>c.id === rightOperand.value);
                        if (!choice) {
                            issues.push({
                                code: lib.z.ZodIssueCode.custom,
                                message: `Conditional Logic: Choice with label "${rightOperand.value}" does not exist in question ${String(questionIndex + 1)}`,
                                path: [
                                    "questions",
                                    questionIndex,
                                    "logic",
                                    logicIndex,
                                    "conditions"
                                ]
                            });
                        }
                    }
                } else if (condition.operator === "equalsOneOf") {
                    if (!Array.isArray(rightOperand.value)) {
                        issues.push({
                            code: lib.z.ZodIssueCode.custom,
                            message: `Conditional Logic: Right operand should be an array for "${operator}" in logic no: ${String(logicIndex + 1)} of question ${String(questionIndex + 1)}`,
                            path: [
                                "questions",
                                questionIndex,
                                "logic",
                                logicIndex,
                                "conditions"
                            ]
                        });
                    } else {
                        rightOperand.value.forEach((value)=>{
                            if (typeof value !== "string") {
                                issues.push({
                                    code: lib.z.ZodIssueCode.custom,
                                    message: `Conditional Logic: Right operand should be an array of strings for "${operator}" in logic no: ${String(logicIndex + 1)} of question ${String(questionIndex + 1)}`,
                                    path: [
                                        "questions",
                                        questionIndex,
                                        "logic",
                                        logicIndex,
                                        "conditions"
                                    ]
                                });
                            }
                        });
                        const choices = question.choices.map((c)=>c.id);
                        if (rightOperand.value.some((value)=>!choices.includes(value))) {
                            issues.push({
                                code: lib.z.ZodIssueCode.custom,
                                message: `Conditional Logic: Choices selected in right operand does not exist in the choices of the question in logic no: ${String(logicIndex + 1)} of question ${String(questionIndex + 1)}`,
                                path: [
                                    "questions",
                                    questionIndex,
                                    "logic",
                                    logicIndex,
                                    "conditions"
                                ]
                            });
                        }
                    }
                }
            } else if (question.type === "multipleChoiceMulti" || question.type === "pictureSelection") {
                if (rightOperand?.type !== "static") {
                    issues.push({
                        code: lib.z.ZodIssueCode.custom,
                        message: `Conditional Logic: Right operand should be amongst the choice values for "${operator}" in logic no: ${String(logicIndex + 1)} of question ${String(questionIndex + 1)}`,
                        path: [
                            "questions",
                            questionIndex,
                            "logic",
                            logicIndex,
                            "conditions"
                        ]
                    });
                } else if (condition.operator === "equals" || condition.operator === "doesNotEqual") {
                    if (typeof rightOperand.value !== "string") {
                        issues.push({
                            code: lib.z.ZodIssueCode.custom,
                            message: `Conditional Logic: Right operand should be a string for "${operator}" in logic no: ${String(logicIndex + 1)} of question ${String(questionIndex + 1)}`,
                            path: [
                                "questions",
                                questionIndex,
                                "logic",
                                logicIndex,
                                "conditions"
                            ]
                        });
                    } else {
                        const choice = question.choices.find((c)=>c.id === rightOperand.value);
                        if (!choice) {
                            issues.push({
                                code: lib.z.ZodIssueCode.custom,
                                message: `Conditional Logic: Choice with label "${rightOperand.value}" does not exist in question ${String(questionIndex + 1)}`,
                                path: [
                                    "questions",
                                    questionIndex,
                                    "logic",
                                    logicIndex,
                                    "conditions"
                                ]
                            });
                        }
                    }
                } else if ([
                    "includesAllOf",
                    "includesOneOf",
                    "doesNotIncludeAllOf",
                    "doesNotIncludeOneOf"
                ].includes(condition.operator)) {
                    if (!Array.isArray(rightOperand.value)) {
                        issues.push({
                            code: lib.z.ZodIssueCode.custom,
                            message: `Conditional Logic: Right operand should be an array for "${operator}" in logic no: ${String(logicIndex + 1)} of question ${String(questionIndex + 1)}`,
                            path: [
                                "questions",
                                questionIndex,
                                "logic",
                                logicIndex,
                                "conditions"
                            ]
                        });
                    } else {
                        rightOperand.value.forEach((value)=>{
                            if (typeof value !== "string") {
                                issues.push({
                                    code: lib.z.ZodIssueCode.custom,
                                    message: `Conditional Logic: Right operand should be an array of strings for "${operator}" in logic no: ${String(logicIndex + 1)} of question ${String(questionIndex + 1)}`,
                                    path: [
                                        "questions",
                                        questionIndex,
                                        "logic",
                                        logicIndex,
                                        "conditions"
                                    ]
                                });
                            }
                        });
                        const choices = question.choices.map((c)=>c.id);
                        if (rightOperand.value.some((value)=>!choices.includes(value))) {
                            issues.push({
                                code: lib.z.ZodIssueCode.custom,
                                message: `Conditional Logic: Choices selected in right operand does not exist in the choices of the question in logic no: ${String(logicIndex + 1)} of question ${String(questionIndex + 1)}`,
                                path: [
                                    "questions",
                                    questionIndex,
                                    "logic",
                                    logicIndex,
                                    "conditions"
                                ]
                            });
                        }
                    }
                }
            } else if (question.type === "nps" || question.type === "rating") {
                if (rightOperand?.type === "variable") {
                    const variableId = rightOperand.value;
                    const variable = survey.variables.find((v)=>v.id === variableId);
                    if (!variable) {
                        issues.push({
                            code: lib.z.ZodIssueCode.custom,
                            message: `Conditional Logic: Variable ID ${variableId} does not exist in logic no: ${String(logicIndex + 1)} of question ${String(questionIndex + 1)}`,
                            path: [
                                "questions",
                                questionIndex,
                                "logic",
                                logicIndex,
                                "conditions"
                            ]
                        });
                    } else if (variable.type !== "number") {
                        issues.push({
                            code: lib.z.ZodIssueCode.custom,
                            message: `Conditional Logic: Variable type should be number in logic no: ${String(logicIndex + 1)} of question ${String(questionIndex + 1)}`,
                            path: [
                                "questions",
                                questionIndex,
                                "logic",
                                logicIndex,
                                "conditions"
                            ]
                        });
                    }
                } else if (rightOperand?.type === "static") {
                    if (typeof rightOperand.value !== "number") {
                        issues.push({
                            code: lib.z.ZodIssueCode.custom,
                            message: `Conditional Logic: Right operand should be a number for "${operator}" in logic no: ${String(logicIndex + 1)} of question ${String(questionIndex + 1)}`,
                            path: [
                                "questions",
                                questionIndex,
                                "logic",
                                logicIndex,
                                "conditions"
                            ]
                        });
                    } else if (question.type === "nps") {
                        if (rightOperand.value < 0 || rightOperand.value > 10) {
                            issues.push({
                                code: lib.z.ZodIssueCode.custom,
                                message: `Conditional Logic: NPS score should be between 0 and 10 for "${operator}" in logic no: ${String(logicIndex + 1)} of question ${String(questionIndex + 1)}`,
                                path: [
                                    "questions",
                                    questionIndex,
                                    "logic",
                                    logicIndex,
                                    "conditions"
                                ]
                            });
                        }
                    } else if (rightOperand.value < 1 || rightOperand.value > question.range) {
                        issues.push({
                            code: lib.z.ZodIssueCode.custom,
                            message: `Conditional Logic: Rating value should be between 1 and ${String(question.range)} for "${operator}" in logic no: ${String(logicIndex + 1)} of question ${String(questionIndex + 1)}`,
                            path: [
                                "questions",
                                questionIndex,
                                "logic",
                                logicIndex,
                                "conditions"
                            ]
                        });
                    }
                } else {
                    issues.push({
                        code: lib.z.ZodIssueCode.custom,
                        message: `Conditional Logic: Right operand should be a variable or a static value for "${operator}" in logic no: ${String(logicIndex + 1)} of question ${String(questionIndex + 1)}`,
                        path: [
                            "questions",
                            questionIndex,
                            "logic",
                            logicIndex,
                            "conditions"
                        ]
                    });
                }
            } else if (question.type === "date") {
                if (rightOperand?.type === "question") {
                    const quesId = rightOperand.value;
                    const ques = survey.questions.find((q)=>q.id === quesId);
                    if (!ques) {
                        issues.push({
                            code: lib.z.ZodIssueCode.custom,
                            message: `Conditional Logic: Question ID ${questionId} does not exist in logic no: ${String(logicIndex + 1)} of question ${String(questionIndex + 1)}`,
                            path: [
                                "questions",
                                questionIndex,
                                "logic",
                                logicIndex,
                                "conditions"
                            ]
                        });
                    } else {
                        const validQuestionTypes = [
                            "openText",
                            "date"
                        ];
                        if (!validQuestionTypes.includes(question.type)) {
                            issues.push({
                                code: lib.z.ZodIssueCode.custom,
                                message: `Conditional Logic: Invalid question type "${question.type}" for right operand in logic no: ${String(logicIndex + 1)} of question ${String(questionIndex + 1)}`,
                                path: [
                                    "questions",
                                    questionIndex,
                                    "logic",
                                    logicIndex,
                                    "conditions"
                                ]
                            });
                        }
                    }
                } else if (rightOperand?.type === "variable") {
                    const variableId = rightOperand.value;
                    const variable = survey.variables.find((v)=>v.id === variableId);
                    if (!variable) {
                        issues.push({
                            code: lib.z.ZodIssueCode.custom,
                            message: `Conditional Logic: Variable ID ${variableId} does not exist in logic no: ${String(logicIndex + 1)} of question ${String(questionIndex + 1)}`,
                            path: [
                                "questions",
                                questionIndex,
                                "logic",
                                logicIndex,
                                "conditions"
                            ]
                        });
                    } else if (variable.type !== "text") {
                        issues.push({
                            code: lib.z.ZodIssueCode.custom,
                            message: `Conditional Logic: Variable type should be text in logic no: ${String(logicIndex + 1)} of question ${String(questionIndex + 1)}`,
                            path: [
                                "questions",
                                questionIndex,
                                "logic",
                                logicIndex,
                                "conditions"
                            ]
                        });
                    }
                } else if (rightOperand?.type === "hiddenField") {
                    const fieldId = rightOperand.value;
                    const doesFieldExists = survey.hiddenFields.fieldIds?.includes(fieldId);
                    if (!doesFieldExists) {
                        issues.push({
                            code: lib.z.ZodIssueCode.custom,
                            message: `Conditional Logic: Hidden field ID ${fieldId} does not exist in logic no: ${String(logicIndex + 1)} of question ${String(questionIndex + 1)}`,
                            path: [
                                "questions",
                                questionIndex,
                                "logic",
                                logicIndex,
                                "conditions"
                            ]
                        });
                    }
                } else if (rightOperand?.type === "static") {
                    const date = rightOperand.value;
                    if (!date) {
                        issues.push({
                            code: lib.z.ZodIssueCode.custom,
                            message: `Conditional Logic: Please select a date value in logic no: ${String(logicIndex + 1)} of question ${String(questionIndex + 1)}`,
                            path: [
                                "questions",
                                questionIndex,
                                "logic",
                                logicIndex,
                                "conditions"
                            ]
                        });
                    } else if (isNaN(new Date(date).getTime())) {
                        issues.push({
                            code: lib.z.ZodIssueCode.custom,
                            message: `Conditional Logic: Invalid date format for right operand in logic no: ${String(logicIndex + 1)} of question ${String(questionIndex + 1)}`,
                            path: [
                                "questions",
                                questionIndex,
                                "logic",
                                logicIndex,
                                "conditions"
                            ]
                        });
                    }
                }
            }
        } else if (leftOperand.type === "variable") {
            const variableId = leftOperand.value;
            const variable = survey.variables.find((v)=>v.id === variableId);
            if (!variable) {
                issues.push({
                    code: lib.z.ZodIssueCode.custom,
                    message: `Conditional Logic: Variable ID ${variableId} does not exist in logic no: ${String(logicIndex + 1)} of question ${String(questionIndex + 1)}`,
                    path: [
                        "questions",
                        questionIndex,
                        "logic",
                        logicIndex,
                        "conditions"
                    ]
                });
            } else {
                // Validate operator based on variable type
                const isInvalidOperator = isInvalidOperatorsForVariableType(variable.type, operator);
                if (isInvalidOperator) {
                    issues.push({
                        code: lib.z.ZodIssueCode.custom,
                        message: `Conditional Logic: Invalid operator "${operator}" for variable ${variable.name} of type "${variable.type}" in logic no: ${String(logicIndex + 1)} of question ${String(questionIndex + 1)}`,
                        path: [
                            "questions",
                            questionIndex,
                            "logic",
                            logicIndex,
                            "conditions"
                        ]
                    });
                }
                // Validate right operand
                if (rightOperand?.type === "question") {
                    const questionId = rightOperand.value;
                    const question = survey.questions.find((q)=>q.id === questionId);
                    if (!question) {
                        issues.push({
                            code: lib.z.ZodIssueCode.custom,
                            message: `Conditional Logic: Question ID ${questionId} does not exist in logic no: ${String(logicIndex + 1)} of question ${String(questionIndex + 1)}`,
                            path: [
                                "questions",
                                questionIndex,
                                "logic",
                                logicIndex,
                                "conditions"
                            ]
                        });
                    } else if (variable.type === "number") {
                        const validQuestionTypes = [
                            "rating",
                            "nps"
                        ];
                        if (!validQuestionTypes.includes(question.type) && question.type === "openText" && question.inputType !== "number") {
                            issues.push({
                                code: lib.z.ZodIssueCode.custom,
                                message: `Conditional Logic: Invalid question type "${question.type}" for right operand in logic no: ${String(logicIndex + 1)} of question ${String(questionIndex + 1)}`,
                                path: [
                                    "questions",
                                    questionIndex,
                                    "logic",
                                    logicIndex,
                                    "conditions"
                                ]
                            });
                        }
                    } else {
                        const validQuestionTypes = [
                            "openText",
                            "multipleChoiceSingle"
                        ];
                        if ([
                            "equals",
                            "doesNotEqual"
                        ].includes(operator)) {
                            validQuestionTypes.push("multipleChoiceMulti", "date");
                        }
                        if (!validQuestionTypes.includes(question.type)) {
                            issues.push({
                                code: lib.z.ZodIssueCode.custom,
                                message: `Conditional Logic: Invalid question type "${question.type}" for right operand in logic no: ${String(logicIndex + 1)} of question ${String(questionIndex + 1)}`,
                                path: [
                                    "questions",
                                    questionIndex,
                                    "logic",
                                    logicIndex,
                                    "conditions"
                                ]
                            });
                        }
                    }
                } else if (rightOperand?.type === "variable") {
                    const id = rightOperand.value;
                    const foundVariable = survey.variables.find((v)=>v.id === id);
                    if (!foundVariable) {
                        issues.push({
                            code: lib.z.ZodIssueCode.custom,
                            message: `Conditional Logic: Variable ID ${variableId} does not exist in logic no: ${String(logicIndex + 1)} of question ${String(questionIndex + 1)}`,
                            path: [
                                "questions",
                                questionIndex,
                                "logic",
                                logicIndex,
                                "conditions"
                            ]
                        });
                    } else if (variable.type !== foundVariable.type) {
                        issues.push({
                            code: lib.z.ZodIssueCode.custom,
                            message: `Conditional Logic: Variable type mismatch in logic no: ${String(logicIndex + 1)} of question ${String(questionIndex + 1)}`,
                            path: [
                                "questions",
                                questionIndex,
                                "logic",
                                logicIndex,
                                "conditions"
                            ]
                        });
                    }
                } else if (rightOperand?.type === "hiddenField") {
                    const fieldId = rightOperand.value;
                    const field = survey.hiddenFields.fieldIds?.find((id)=>id === fieldId);
                    if (!field) {
                        issues.push({
                            code: lib.z.ZodIssueCode.custom,
                            message: `Conditional Logic: Hidden field ID ${fieldId} does not exist in logic no: ${String(logicIndex + 1)} of question ${String(questionIndex + 1)}`,
                            path: [
                                "questions",
                                questionIndex,
                                "logic",
                                logicIndex,
                                "conditions"
                            ]
                        });
                    }
                }
            }
        } else {
            const hiddenFieldId = leftOperand.value;
            const hiddenField = survey.hiddenFields.fieldIds?.find((fieldId)=>fieldId === hiddenFieldId);
            if (!hiddenField) {
                issues.push({
                    code: lib.z.ZodIssueCode.custom,
                    message: `Conditional Logic: Hidden field ID ${hiddenFieldId} does not exist in logic no: ${String(logicIndex + 1)} of question ${String(questionIndex + 1)}`,
                    path: [
                        "questions",
                        questionIndex,
                        "logic",
                        logicIndex,
                        "conditions"
                    ]
                });
            }
            // Validate operator based on hidden field type
            const isInvalidOperator = isInvalidOperatorsForHiddenFieldType(operator);
            if (isInvalidOperator) {
                issues.push({
                    code: lib.z.ZodIssueCode.custom,
                    message: `Conditional Logic: Invalid operator "${operator}" for hidden field in logic no: ${String(logicIndex + 1)} of question ${String(questionIndex + 1)}`,
                    path: [
                        "questions",
                        questionIndex,
                        "logic",
                        logicIndex,
                        "conditions"
                    ]
                });
            }
            // Validate right operand
            if (rightOperand?.type === "question") {
                const questionId = rightOperand.value;
                const question = survey.questions.find((q)=>q.id === questionId);
                if (!question) {
                    issues.push({
                        code: lib.z.ZodIssueCode.custom,
                        message: `Conditional Logic: Question ID ${questionId} does not exist in logic no: ${String(logicIndex + 1)} of question ${String(questionIndex + 1)}`,
                        path: [
                            "questions",
                            questionIndex,
                            "logic",
                            logicIndex,
                            "conditions"
                        ]
                    });
                } else {
                    const validQuestionTypes = [
                        "openText",
                        "multipleChoiceSingle"
                    ];
                    if ([
                        "equals",
                        "doesNotEqual"
                    ].includes(condition.operator)) {
                        validQuestionTypes.push("multipleChoiceMulti", "date");
                    }
                    if (!validQuestionTypes.includes(question.type)) {
                        issues.push({
                            code: lib.z.ZodIssueCode.custom,
                            message: `Conditional Logic: Invalid question type "${question.type}" for right operand in logic no: ${String(logicIndex + 1)} of question ${String(questionIndex + 1)}`,
                            path: [
                                "questions",
                                questionIndex,
                                "logic",
                                logicIndex,
                                "conditions"
                            ]
                        });
                    }
                }
            } else if (rightOperand?.type === "variable") {
                const variableId = rightOperand.value;
                const variable = survey.variables.find((v)=>v.id === variableId);
                if (!variable) {
                    issues.push({
                        code: lib.z.ZodIssueCode.custom,
                        message: `Conditional Logic: Variable ID ${variableId} does not exist in logic no: ${String(logicIndex + 1)} of question ${String(questionIndex + 1)}`,
                        path: [
                            "questions",
                            questionIndex,
                            "logic",
                            logicIndex,
                            "conditions"
                        ]
                    });
                } else if (variable.type !== "text") {
                    issues.push({
                        code: lib.z.ZodIssueCode.custom,
                        message: `Conditional Logic: Variable type should be text in logic no: ${String(logicIndex + 1)} of question ${String(questionIndex + 1)}`,
                        path: [
                            "questions",
                            questionIndex,
                            "logic",
                            logicIndex,
                            "conditions"
                        ]
                    });
                }
            } else if (rightOperand?.type === "hiddenField") {
                const fieldId = rightOperand.value;
                const field = survey.hiddenFields.fieldIds?.find((id)=>id === fieldId);
                if (!field) {
                    issues.push({
                        code: lib.z.ZodIssueCode.custom,
                        message: `Conditional Logic: Hidden field ID ${fieldId} does not exist in logic no: ${String(logicIndex + 1)} of question ${String(questionIndex + 1)}`,
                        path: [
                            "questions",
                            questionIndex,
                            "logic",
                            logicIndex,
                            "conditions"
                        ]
                    });
                }
            }
        }
    };
    const validateConditionGroup = (group)=>{
        group.conditions.forEach((condition)=>{
            if (isConditionGroup(condition)) {
                validateConditionGroup(condition);
            } else {
                validateSingleCondition(condition);
            }
        });
    };
    validateConditionGroup(conditions);
    return issues;
};
const validateActions = (survey, questionIndex, logicIndex, actions)=>{
    const previousQuestions = survey.questions.filter((_, idx)=>idx <= questionIndex);
    const nextQuestions = survey.questions.filter((_, idx)=>idx >= questionIndex);
    const nextQuestionsIds = nextQuestions.map((q)=>q.id);
    const actionIssues = actions.map((action)=>{
        if (action.objective === "calculate") {
            const variable = survey.variables.find((v)=>v.id === action.variableId);
            if (!variable) {
                return {
                    code: lib.z.ZodIssueCode.custom,
                    message: `Conditional Logic: Variable ID ${action.variableId} does not exist in logic no: ${String(logicIndex + 1)} of question ${String(questionIndex + 1)}`,
                    path: [
                        "questions",
                        questionIndex,
                        "logic",
                        logicIndex
                    ]
                };
            }
            if (action.value.type === "variable") {
                const selectedVariable = survey.variables.find((v)=>v.id === action.value.value);
                if (!selectedVariable || selectedVariable.type !== variable.type) {
                    return {
                        code: lib.z.ZodIssueCode.custom,
                        message: `Conditional Logic: Invalid variable type for variable in logic no: ${String(logicIndex + 1)} of question ${String(questionIndex + 1)}`,
                        path: [
                            "questions",
                            questionIndex,
                            "logic",
                            logicIndex
                        ]
                    };
                }
            }
            if (variable.type === "text") {
                const textVariableParseData = ZActionCalculateText.safeParse(action);
                if (!textVariableParseData.success) {
                    return {
                        code: lib.z.ZodIssueCode.custom,
                        message: textVariableParseData.error.errors[0].message,
                        path: [
                            "questions",
                            questionIndex,
                            "logic",
                            logicIndex
                        ]
                    };
                }
                if (action.value.type === "question") {
                    const allowedQuestions = [
                        "openText",
                        "multipleChoiceSingle",
                        "rating",
                        "nps",
                        "date"
                    ];
                    const selectedQuestion = survey.questions.find((q)=>q.id === action.value.value);
                    if (!selectedQuestion || !allowedQuestions.includes(selectedQuestion.type)) {
                        return {
                            code: lib.z.ZodIssueCode.custom,
                            message: `Conditional Logic: Invalid question type for text variable in logic no: ${String(logicIndex + 1)} of question ${String(questionIndex + 1)}`,
                            path: [
                                "questions",
                                questionIndex,
                                "logic",
                                logicIndex
                            ]
                        };
                    }
                }
                return undefined;
            }
            const numberVariableParseData = ZActionCalculateNumber.safeParse(action);
            if (!numberVariableParseData.success) {
                return {
                    code: lib.z.ZodIssueCode.custom,
                    message: numberVariableParseData.error.errors[0].message,
                    path: [
                        "questions",
                        questionIndex,
                        "logic",
                        logicIndex
                    ]
                };
            }
            if (action.value.type === "question") {
                const allowedQuestions = [
                    "rating",
                    "nps"
                ];
                const selectedQuestion = previousQuestions.find((q)=>q.id === action.value.value);
                if (!selectedQuestion || !allowedQuestions.includes(selectedQuestion.type) && selectedQuestion.type === "openText" && selectedQuestion.inputType !== "number") {
                    return {
                        code: lib.z.ZodIssueCode.custom,
                        message: `Conditional Logic: Invalid question type for number variable in logic no: ${String(logicIndex + 1)} of question ${String(questionIndex + 1)}`,
                        path: [
                            "questions",
                            questionIndex,
                            "logic",
                            logicIndex
                        ]
                    };
                }
            }
        } else {
            const endingIds = survey.endings.map((ending)=>ending.id);
            const possibleQuestionIds = action.objective === "jumpToQuestion" ? [
                ...nextQuestionsIds,
                ...endingIds
            ] : nextQuestionsIds;
            if (!possibleQuestionIds.includes(action.target)) {
                return {
                    code: lib.z.ZodIssueCode.custom,
                    message: `Question ID ${action.target} does not exist in logic no: ${String(logicIndex + 1)} of question ${String(questionIndex + 1)}`,
                    path: [
                        "questions",
                        questionIndex,
                        "logic"
                    ]
                };
            }
            if (action.objective === "requireAnswer") {
                const optionalQuestionIds = nextQuestions.filter((question)=>!question.required).map((question)=>question.id);
                if (!optionalQuestionIds.includes(action.target)) {
                    const quesIdx = survey.questions.findIndex((q)=>q.id === action.target);
                    return {
                        code: lib.z.ZodIssueCode.custom,
                        message: `Question ${String(quesIdx + 1)} is already required in logic no: ${String(logicIndex + 1)} of question ${String(questionIndex + 1)}`,
                        path: [
                            "questions",
                            questionIndex,
                            "logic",
                            logicIndex
                        ]
                    };
                }
            }
        }
        return undefined;
    });
    const jumpToQuestionActions = actions.filter((action)=>action.objective === "jumpToQuestion");
    if (jumpToQuestionActions.length > 1) {
        actionIssues.push({
            code: lib.z.ZodIssueCode.custom,
            message: `Conditional Logic: Multiple jump actions are not allowed in logic no: ${String(logicIndex + 1)} of question ${String(questionIndex + 1)}`,
            path: [
                "questions",
                questionIndex,
                "logic"
            ]
        });
    }
    const filteredActionIssues = actionIssues.filter((issue)=>issue !== undefined);
    return filteredActionIssues;
};
const validateLogicFallback = (survey, questionIdx)=>{
    const question = survey.questions[questionIdx];
    if (!question.logicFallback) return;
    if (!question.logic?.length && question.logicFallback) {
        return [
            {
                code: lib.z.ZodIssueCode.custom,
                message: `Conditional Logic: Fallback logic is defined without any logic in question ${String(questionIdx + 1)}`,
                path: [
                    "questions",
                    questionIdx
                ]
            }
        ];
    } else if (question.id === question.logicFallback) {
        return [
            {
                code: lib.z.ZodIssueCode.custom,
                message: `Conditional Logic: Fallback logic is defined with the same question in question ${String(questionIdx + 1)}`,
                path: [
                    "questions",
                    questionIdx
                ]
            }
        ];
    }
    const possibleFallbackIds = [];
    survey.questions.forEach((q, idx)=>{
        if (idx !== questionIdx) {
            possibleFallbackIds.push(q.id);
        }
    });
    survey.endings.forEach((e)=>{
        possibleFallbackIds.push(e.id);
    });
    if (!possibleFallbackIds.includes(question.logicFallback)) {
        return [
            {
                code: lib.z.ZodIssueCode.custom,
                message: `Conditional Logic: Fallback question ID ${question.logicFallback} does not exist in question ${String(questionIdx + 1)}`,
                path: [
                    "questions",
                    questionIdx
                ]
            }
        ];
    }
};
const validateLogic = (survey, questionIndex, logic)=>{
    const logicFallbackIssue = validateLogicFallback(survey, questionIndex);
    const logicIssues = logic.map((logicItem, logicIndex)=>{
        return [
            ...validateConditions(survey, questionIndex, logicIndex, logicItem.conditions),
            ...validateActions(survey, questionIndex, logicIndex, logicItem.actions)
        ];
    });
    return [
        ...logicIssues.flat(),
        ...logicFallbackIssue ? logicFallbackIssue : []
    ];
};
// ZSurvey is a refinement, so to extend it to ZSurveyUpdateInput, we need to transform the innerType and then apply the same refinements.
const ZSurveyUpdateInput = ZSurvey.innerType().omit({
    createdAt: true,
    updatedAt: true,
    followUps: true
}).extend({
    followUps: lib.z.array(ZSurveyFollowUp.omit({
        createdAt: true,
        updatedAt: true
    }).and(lib.z.object({
        createdAt: lib.z.coerce.date(),
        updatedAt: lib.z.coerce.date()
    }))).default([])
}).and(lib.z.object({
    createdAt: lib.z.coerce.date(),
    updatedAt: lib.z.coerce.date()
})).superRefine(ZSurvey._def.effect.type === "refinement" ? ZSurvey._def.effect.refinement : ()=>undefined);
// Helper function to make all properties of a Zod object schema optional
const makeSchemaOptional = (schema)=>{
    return schema.extend(Object.fromEntries(Object.entries(schema.shape).map(([key, value])=>[
            key,
            value.optional()
        ])));
};
const ZSurveyCreateInput = makeSchemaOptional(ZSurvey.innerType()).omit({
    id: true,
    createdAt: true,
    updatedAt: true,
    projectOverwrites: true,
    languages: true,
    followUps: true
}).extend({
    name: lib.z.string(),
    questions: ZSurvey.innerType().shape.questions,
    languages: lib.z.array(ZSurveyLanguage).default([]),
    welcomeCard: ZSurveyWelcomeCard.default({
        enabled: false
    }),
    endings: ZSurveyEndings.default([]),
    type: ZSurveyType.default("link"),
    followUps: lib.z.array(ZSurveyFollowUp.omit({
        createdAt: true,
        updatedAt: true
    })).default([])
}).superRefine(ZSurvey._def.effect.type === "refinement" ? ZSurvey._def.effect.refinement : ()=>null);
const ZSurveyQuestionSummaryOpenText = lib.z.object({
    type: lib.z.literal("openText"),
    question: ZSurveyOpenTextQuestion,
    responseCount: lib.z.number(),
    samples: lib.z.array(lib.z.object({
        id: lib.z.string(),
        updatedAt: lib.z.date(),
        value: lib.z.string(),
        contact: lib.z.object({
            id: common/* ZId */.i4,
            userId: lib.z.string()
        }).nullable(),
        contactAttributes: ZContactAttributes.nullable()
    })),
    insights: lib.z.array(insights/* ZInsight */.x.extend({
        _count: lib.z.object({
            documentInsights: lib.z.number()
        })
    })),
    insightsEnabled: lib.z.boolean().optional()
});
const ZSurveyQuestionSummaryMultipleChoice = lib.z.object({
    type: lib.z.union([
        lib.z.literal("multipleChoiceMulti"),
        lib.z.literal("multipleChoiceSingle")
    ]),
    question: ZSurveyMultipleChoiceQuestion,
    responseCount: lib.z.number(),
    selectionCount: lib.z.number(),
    choices: lib.z.array(lib.z.object({
        value: lib.z.string(),
        count: lib.z.number(),
        percentage: lib.z.number(),
        others: lib.z.array(lib.z.object({
            value: lib.z.string(),
            contact: lib.z.object({
                id: common/* ZId */.i4,
                userId: lib.z.string()
            }).nullable(),
            contactAttributes: ZContactAttributes.nullable()
        })).optional()
    }))
});
const ZSurveyQuestionSummaryPictureSelection = lib.z.object({
    type: lib.z.literal("pictureSelection"),
    question: ZSurveyPictureSelectionQuestion,
    responseCount: lib.z.number(),
    selectionCount: lib.z.number(),
    choices: lib.z.array(lib.z.object({
        id: lib.z.string(),
        imageUrl: lib.z.string(),
        count: lib.z.number(),
        percentage: lib.z.number()
    }))
});
const ZSurveyQuestionSummaryRating = lib.z.object({
    type: lib.z.literal("rating"),
    question: ZSurveyRatingQuestion,
    responseCount: lib.z.number(),
    average: lib.z.number(),
    choices: lib.z.array(lib.z.object({
        rating: lib.z.number(),
        count: lib.z.number(),
        percentage: lib.z.number()
    })),
    dismissed: lib.z.object({
        count: lib.z.number()
    })
});
const ZSurveyQuestionSummaryNps = lib.z.object({
    type: lib.z.literal("nps"),
    question: ZSurveyNPSQuestion,
    responseCount: lib.z.number(),
    total: lib.z.number(),
    score: lib.z.number(),
    promoters: lib.z.object({
        count: lib.z.number(),
        percentage: lib.z.number()
    }),
    passives: lib.z.object({
        count: lib.z.number(),
        percentage: lib.z.number()
    }),
    detractors: lib.z.object({
        count: lib.z.number(),
        percentage: lib.z.number()
    }),
    dismissed: lib.z.object({
        count: lib.z.number(),
        percentage: lib.z.number()
    })
});
const ZSurveyQuestionSummaryCta = lib.z.object({
    type: lib.z.literal("cta"),
    question: ZSurveyCTAQuestion,
    impressionCount: lib.z.number(),
    clickCount: lib.z.number(),
    skipCount: lib.z.number(),
    responseCount: lib.z.number(),
    ctr: lib.z.object({
        count: lib.z.number(),
        percentage: lib.z.number()
    })
});
const ZSurveyQuestionSummaryConsent = lib.z.object({
    type: lib.z.literal("consent"),
    question: ZSurveyConsentQuestion,
    responseCount: lib.z.number(),
    accepted: lib.z.object({
        count: lib.z.number(),
        percentage: lib.z.number()
    }),
    dismissed: lib.z.object({
        count: lib.z.number(),
        percentage: lib.z.number()
    })
});
const ZSurveyQuestionSummaryDate = lib.z.object({
    type: lib.z.literal("date"),
    question: ZSurveyDateQuestion,
    responseCount: lib.z.number(),
    samples: lib.z.array(lib.z.object({
        id: lib.z.string(),
        updatedAt: lib.z.date(),
        value: lib.z.string(),
        contact: lib.z.object({
            id: common/* ZId */.i4,
            userId: lib.z.string()
        }).nullable(),
        contactAttributes: ZContactAttributes.nullable()
    }))
});
const ZSurveyQuestionSummaryFileUpload = lib.z.object({
    type: lib.z.literal("fileUpload"),
    question: ZSurveyFileUploadQuestion,
    responseCount: lib.z.number(),
    files: lib.z.array(lib.z.object({
        id: lib.z.string(),
        updatedAt: lib.z.date(),
        value: lib.z.array(lib.z.string()),
        contact: lib.z.object({
            id: common/* ZId */.i4,
            userId: lib.z.string()
        }).nullable(),
        contactAttributes: ZContactAttributes.nullable()
    }))
});
const ZSurveyQuestionSummaryCal = lib.z.object({
    type: lib.z.literal("cal"),
    question: ZSurveyCalQuestion,
    responseCount: lib.z.number(),
    booked: lib.z.object({
        count: lib.z.number(),
        percentage: lib.z.number()
    }),
    skipped: lib.z.object({
        count: lib.z.number(),
        percentage: lib.z.number()
    })
});
const ZSurveyQuestionSummaryMatrix = lib.z.object({
    type: lib.z.literal("matrix"),
    question: ZSurveyMatrixQuestion,
    responseCount: lib.z.number(),
    data: lib.z.array(lib.z.object({
        rowLabel: lib.z.string(),
        columnPercentages: lib.z.array(lib.z.object({
            column: lib.z.string(),
            percentage: lib.z.number()
        })),
        totalResponsesForRow: lib.z.number()
    }))
});
const ZSurveyQuestionSummaryHiddenFields = lib.z.object({
    type: lib.z.literal("hiddenField"),
    id: lib.z.string(),
    responseCount: lib.z.number(),
    samples: lib.z.array(lib.z.object({
        updatedAt: lib.z.date(),
        value: lib.z.string(),
        contact: lib.z.object({
            id: common/* ZId */.i4,
            userId: lib.z.string()
        }).nullable(),
        contactAttributes: ZContactAttributes.nullable()
    }))
});
const ZSurveyQuestionSummaryAddress = lib.z.object({
    type: lib.z.literal("address"),
    question: ZSurveyAddressQuestion,
    responseCount: lib.z.number(),
    samples: lib.z.array(lib.z.object({
        id: lib.z.string(),
        updatedAt: lib.z.date(),
        value: lib.z.array(lib.z.string()),
        contact: lib.z.object({
            id: common/* ZId */.i4,
            userId: lib.z.string()
        }).nullable(),
        contactAttributes: ZContactAttributes.nullable()
    }))
});
const ZSurveyQuestionSummaryContactInfo = lib.z.object({
    type: lib.z.literal("contactInfo"),
    question: ZSurveyContactInfoQuestion,
    responseCount: lib.z.number(),
    samples: lib.z.array(lib.z.object({
        id: lib.z.string(),
        updatedAt: lib.z.date(),
        value: lib.z.array(lib.z.string()),
        contact: lib.z.object({
            id: common/* ZId */.i4,
            userId: lib.z.string()
        }).nullable(),
        contactAttributes: ZContactAttributes.nullable()
    }))
});
const ZSurveyQuestionSummaryRanking = lib.z.object({
    type: lib.z.literal("ranking"),
    question: ZSurveyRankingQuestion,
    responseCount: lib.z.number(),
    choices: lib.z.array(lib.z.object({
        value: lib.z.string(),
        count: lib.z.number(),
        avgRanking: lib.z.number(),
        others: lib.z.array(lib.z.object({
            value: lib.z.string(),
            contact: lib.z.object({
                id: common/* ZId */.i4,
                userId: lib.z.string()
            }).nullable(),
            contactAttributes: ZContactAttributes.nullable()
        })).optional()
    }))
});
const ZSurveyQuestionSummary = lib.z.union([
    ZSurveyQuestionSummaryOpenText,
    ZSurveyQuestionSummaryMultipleChoice,
    ZSurveyQuestionSummaryPictureSelection,
    ZSurveyQuestionSummaryRating,
    ZSurveyQuestionSummaryNps,
    ZSurveyQuestionSummaryCta,
    ZSurveyQuestionSummaryConsent,
    ZSurveyQuestionSummaryDate,
    ZSurveyQuestionSummaryFileUpload,
    ZSurveyQuestionSummaryCal,
    ZSurveyQuestionSummaryMatrix,
    ZSurveyQuestionSummaryAddress,
    ZSurveyQuestionSummaryRanking,
    ZSurveyQuestionSummaryContactInfo
]);
const ZSurveySummary = lib.z.object({
    meta: lib.z.object({
        displayCount: lib.z.number(),
        totalResponses: lib.z.number(),
        startsPercentage: lib.z.number(),
        completedResponses: lib.z.number(),
        completedPercentage: lib.z.number(),
        dropOffCount: lib.z.number(),
        dropOffPercentage: lib.z.number(),
        ttcAverage: lib.z.number()
    }),
    dropOff: lib.z.array(lib.z.object({
        questionId: lib.z.string().cuid2(),
        questionType: ZSurveyQuestionType,
        headline: lib.z.string(),
        ttc: lib.z.number(),
        impressions: lib.z.number(),
        dropOffCount: lib.z.number(),
        dropOffPercentage: lib.z.number()
    })),
    summary: lib.z.array(lib.z.union([
        ZSurveyQuestionSummary,
        ZSurveyQuestionSummaryHiddenFields
    ]))
});
const ZSurveyFilterCriteria = lib.z.object({
    name: lib.z.string().optional(),
    status: lib.z.array(ZSurveyStatus).optional(),
    type: lib.z.array(ZSurveyType).optional(),
    createdBy: lib.z.object({
        userId: lib.z.string(),
        value: lib.z.array(lib.z.enum([
            "you",
            "others"
        ]))
    }).optional(),
    sortBy: lib.z.enum([
        "createdAt",
        "updatedAt",
        "name",
        "relevance"
    ]).optional()
});
const ZSurveyFilters = lib.z.object({
    name: lib.z.string(),
    createdBy: lib.z.array(lib.z.enum([
        "you",
        "others"
    ])),
    status: lib.z.array(ZSurveyStatus),
    type: lib.z.array(ZSurveyType),
    sortBy: lib.z.enum([
        "createdAt",
        "updatedAt",
        "name",
        "relevance"
    ])
});
const ZFilterOption = lib.z.object({
    label: lib.z.string(),
    value: lib.z.string()
});
const ZSortOption = lib.z.object({
    label: lib.z.string(),
    value: lib.z.enum([
        "createdAt",
        "updatedAt",
        "name",
        "relevance"
    ])
});
const ZSurveyRecallItem = lib.z.object({
    id: lib.z.string(),
    label: lib.z.string(),
    type: lib.z.enum([
        "question",
        "hiddenField",
        "attributeClass",
        "variable"
    ])
});


/***/ })

};
;