"use strict";
exports.id = 3840;
exports.ids = [3840];
exports.modules = {

/***/ 856763:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bp: () => (/* binding */ isStringMatch),
/* harmony export */   g3: () => (/* binding */ getFormattedErrorMessage)
/* harmony export */ });
/* unused harmony exports getOrganizationIdFromProjectId, getOrganizationIdFromEnvironmentId, getOrganizationIdFromSurveyId, getOrganizationIdFromResponseId, getOrganizationIdFromContactId, getProjectIdFromContactId, getOrganizationIdFromTagId, getOrganizationIdFromResponseNoteId, getOrganizationIdFromSegmentId, getOrganizationIdFromActionClassId, getOrganizationIdFromIntegrationId, getOrganizationIdFromWebhookId, getOrganizationIdFromApiKeyId, getOrganizationIdFromInviteId, getOrganizationIdFromLanguageId, getOrganizationIdFromTeamId, getOrganizationIdFromInsightId, getOrganizationIdFromDocumentId, getProjectIdFromEnvironmentId, getProjectIdFromSurveyId, getProjectIdFromInsightId, getProjectIdFromSegmentId, getProjectIdFromApiKeyId, getProjectIdFromActionClassId, getProjectIdFromTagId, getProjectIdFromLanguageId, getProjectIdFromResponseId, getProjectIdFromResponseNoteId, getProductIdFromContactId, getProjectIdFromDocumentId, getProjectIdFromIntegrationId, getProjectIdFromWebhookId, getEnvironmentIdFromSurveyId, getEnvironmentIdFromResponseId, getEnvironmentIdFromInsightId, getEnvironmentIdFromSegmentId, getEnvironmentIdFromTagId */


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
    const project = await getProject(projectId);
    if (!project) {
        throw new ResourceNotFoundError("project", projectId);
    }
    return project.organizationId;
};
const getOrganizationIdFromEnvironmentId = async (environmentId)=>{
    const environment = await getEnvironment(environmentId);
    if (!environment) {
        throw new ResourceNotFoundError("environment", environmentId);
    }
    return await getOrganizationIdFromProjectId(environment.projectId);
};
const getOrganizationIdFromSurveyId = async (surveyId)=>{
    const survey = await getSurvey(surveyId);
    if (!survey) {
        throw new ResourceNotFoundError("survey", surveyId);
    }
    return await getOrganizationIdFromEnvironmentId(survey.environmentId);
};
const getOrganizationIdFromResponseId = async (responseId)=>{
    const response = await getResponse(responseId);
    if (!response) {
        throw new ResourceNotFoundError("response", responseId);
    }
    return await getOrganizationIdFromSurveyId(response.surveyId);
};
const getOrganizationIdFromContactId = async (contactId)=>{
    const contact = await getContact(contactId);
    if (!contact) {
        throw new ResourceNotFoundError("contact", contactId);
    }
    return await getOrganizationIdFromEnvironmentId(contact.environmentId);
};
const getProjectIdFromContactId = async (contactId)=>{
    const contact = await getContact(contactId);
    if (!contact) {
        throw new ResourceNotFoundError("contact", contactId);
    }
    return await getProjectIdFromEnvironmentId(contact.environmentId);
};
const getOrganizationIdFromTagId = async (tagId)=>{
    const tag = await getTag(tagId);
    if (!tag) {
        throw new ResourceNotFoundError("tag", tagId);
    }
    return await getOrganizationIdFromEnvironmentId(tag.environmentId);
};
const getOrganizationIdFromResponseNoteId = async (responseNoteId)=>{
    const responseNote = await getResponseNote(responseNoteId);
    if (!responseNote) {
        throw new ResourceNotFoundError("responseNote", responseNoteId);
    }
    return await getOrganizationIdFromResponseId(responseNote.responseId);
};
const getOrganizationIdFromSegmentId = async (segmentId)=>{
    const segment = await getSegment(segmentId);
    if (!segment) {
        throw new ResourceNotFoundError("segment", segmentId);
    }
    return await getOrganizationIdFromEnvironmentId(segment.environmentId);
};
const getOrganizationIdFromActionClassId = async (actionClassId)=>{
    const actionClass = await getActionClass(actionClassId);
    if (!actionClass) {
        throw new ResourceNotFoundError("actionClass", actionClassId);
    }
    return await getOrganizationIdFromEnvironmentId(actionClass.environmentId);
};
const getOrganizationIdFromIntegrationId = async (integrationId)=>{
    const integration = await getIntegration(integrationId);
    if (!integration) {
        throw new ResourceNotFoundError("integration", integrationId);
    }
    return await getOrganizationIdFromEnvironmentId(integration.environmentId);
};
const getOrganizationIdFromWebhookId = async (webhookId)=>{
    const webhook = await getWebhook(webhookId);
    if (!webhook) {
        throw new ResourceNotFoundError("webhook", webhookId);
    }
    return await getOrganizationIdFromEnvironmentId(webhook.environmentId);
};
const getOrganizationIdFromApiKeyId = async (apiKeyId)=>{
    const apiKeyFromServer = await getApiKey(apiKeyId);
    if (!apiKeyFromServer) {
        throw new ResourceNotFoundError("apiKey", apiKeyId);
    }
    return await getOrganizationIdFromEnvironmentId(apiKeyFromServer.environmentId);
};
const getOrganizationIdFromInviteId = async (inviteId)=>{
    const invite = await getInvite(inviteId);
    if (!invite) {
        throw new ResourceNotFoundError("invite", inviteId);
    }
    return invite.organizationId;
};
const getOrganizationIdFromLanguageId = async (languageId)=>{
    const language = await getLanguage(languageId);
    if (!language) {
        throw new ResourceNotFoundError("language", languageId);
    }
    return await getOrganizationIdFromProjectId(language.projectId);
};
const getOrganizationIdFromTeamId = async (teamId)=>{
    const team = await getTeam(teamId);
    if (!team) {
        throw new ResourceNotFoundError("team", teamId);
    }
    return team.organizationId;
};
const getOrganizationIdFromInsightId = async (insightId)=>{
    const insight = await getInsight(insightId);
    if (!insight) {
        throw new ResourceNotFoundError("insight", insightId);
    }
    return await getOrganizationIdFromEnvironmentId(insight.environmentId);
};
const getOrganizationIdFromDocumentId = async (documentId)=>{
    const document = await getDocument(documentId);
    if (!document) {
        throw new ResourceNotFoundError("document", documentId);
    }
    return await getOrganizationIdFromEnvironmentId(document.environmentId);
};
// project id helpers
const getProjectIdFromEnvironmentId = async (environmentId)=>{
    const environment = await getEnvironment(environmentId);
    if (!environment) {
        throw new ResourceNotFoundError("environment", environmentId);
    }
    return environment.projectId;
};
const getProjectIdFromSurveyId = async (surveyId)=>{
    const survey = await getSurvey(surveyId);
    if (!survey) {
        throw new ResourceNotFoundError("survey", surveyId);
    }
    return await getProjectIdFromEnvironmentId(survey.environmentId);
};
const getProjectIdFromInsightId = async (insightId)=>{
    const insight = await getInsight(insightId);
    if (!insight) {
        throw new ResourceNotFoundError("insight", insightId);
    }
    return await getProjectIdFromEnvironmentId(insight.environmentId);
};
const getProjectIdFromSegmentId = async (segmentId)=>{
    const segment = await getSegment(segmentId);
    if (!segment) {
        throw new ResourceNotFoundError("segment", segmentId);
    }
    return await getProjectIdFromEnvironmentId(segment.environmentId);
};
const getProjectIdFromApiKeyId = async (apiKeyId)=>{
    const apiKey = await getApiKey(apiKeyId);
    if (!apiKey) {
        throw new ResourceNotFoundError("apiKey", apiKeyId);
    }
    return await getProjectIdFromEnvironmentId(apiKey.environmentId);
};
const getProjectIdFromActionClassId = async (actionClassId)=>{
    const actionClass = await getActionClass(actionClassId);
    if (!actionClass) {
        throw new ResourceNotFoundError("actionClass", actionClassId);
    }
    return await getProjectIdFromEnvironmentId(actionClass.environmentId);
};
const getProjectIdFromTagId = async (tagId)=>{
    const tag = await getTag(tagId);
    if (!tag) {
        throw new ResourceNotFoundError("tag", tagId);
    }
    return await getProjectIdFromEnvironmentId(tag.environmentId);
};
const getProjectIdFromLanguageId = async (languageId)=>{
    const language = await getLanguage(languageId);
    if (!language) {
        throw new ResourceNotFoundError("language", languageId);
    }
    return language.projectId;
};
const getProjectIdFromResponseId = async (responseId)=>{
    const response = await getResponse(responseId);
    if (!response) {
        throw new ResourceNotFoundError("response", responseId);
    }
    return await getProjectIdFromSurveyId(response.surveyId);
};
const getProjectIdFromResponseNoteId = async (responseNoteId)=>{
    const responseNote = await getResponseNote(responseNoteId);
    if (!responseNote) {
        throw new ResourceNotFoundError("responseNote", responseNoteId);
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
    const document = await getDocument(documentId);
    if (!document) {
        throw new ResourceNotFoundError("document", documentId);
    }
    return await getProjectIdFromEnvironmentId(document.environmentId);
};
const getProjectIdFromIntegrationId = async (integrationId)=>{
    const integration = await getIntegration(integrationId);
    if (!integration) {
        throw new ResourceNotFoundError("integration", integrationId);
    }
    return await getProjectIdFromEnvironmentId(integration.environmentId);
};
const getProjectIdFromWebhookId = async (webhookId)=>{
    const webhook = await getWebhook(webhookId);
    if (!webhook) {
        throw new ResourceNotFoundError("webhook", webhookId);
    }
    return await getProjectIdFromEnvironmentId(webhook.environmentId);
};
// environment id helpers
const getEnvironmentIdFromSurveyId = async (surveyId)=>{
    const survey = await getSurvey(surveyId);
    if (!survey) {
        throw new ResourceNotFoundError("survey", surveyId);
    }
    return survey.environmentId;
};
const getEnvironmentIdFromResponseId = async (responseId)=>{
    const response = await getResponse(responseId);
    if (!response) {
        throw new ResourceNotFoundError("response", responseId);
    }
    return await getEnvironmentIdFromSurveyId(response.surveyId);
};
const getEnvironmentIdFromInsightId = async (insightId)=>{
    const insight = await getInsight(insightId);
    if (!insight) {
        throw new ResourceNotFoundError("insight", insightId);
    }
    return insight.environmentId;
};
const getEnvironmentIdFromSegmentId = async (segmentId)=>{
    const segment = await getSegment(segmentId);
    if (!segment) {
        throw new ResourceNotFoundError("segment", segmentId);
    }
    return segment.environmentId;
};
const getEnvironmentIdFromTagId = async (tagId)=>{
    const tag = await getTag(tagId);
    if (!tag) {
        throw new ResourceNotFoundError("tag", tagId);
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

/***/ 16411:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ apiKeyCache)
/* harmony export */ });
/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(310256);
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

/***/ 976565:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ contactCache)
/* harmony export */ });
/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(310256);
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

/***/ 896484:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ inviteCache)
/* harmony export */ });
/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(310256);
/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_cache__WEBPACK_IMPORTED_MODULE_0__);

const inviteCache = {
    tag: {
        byId (id) {
            return `invites-${id}`;
        },
        byOrganizationId (organizationId) {
            return `organizations-${organizationId}-invites`;
        }
    },
    revalidate ({ id, organizationId }) {
        if (id) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(this.tag.byId(id));
        }
        if (organizationId) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(this.tag.byOrganizationId(organizationId));
        }
    }
};


/***/ }),

/***/ 753304:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ teamCache)
/* harmony export */ });
/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(310256);
/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_cache__WEBPACK_IMPORTED_MODULE_0__);

const teamCache = {
    tag: {
        byId (id) {
            return `team-${id}`;
        },
        byProjectId (projectId) {
            return `project-teams-${projectId}`;
        },
        byUserId (userId) {
            return `user-${userId}-teams`;
        },
        byOrganizationId (organizationId) {
            return `organization-${organizationId}-teams`;
        }
    },
    revalidate: ({ id, projectId, userId, organizationId })=>{
        if (id) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(teamCache.tag.byId(id));
        }
        if (projectId) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(teamCache.tag.byProjectId(projectId));
        }
        if (userId) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(teamCache.tag.byUserId(userId));
        }
        if (organizationId) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(teamCache.tag.byOrganizationId(organizationId));
        }
    }
};


/***/ }),

/***/ 638234:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ webhookCache)
/* harmony export */ });
/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(310256);
/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_cache__WEBPACK_IMPORTED_MODULE_0__);

const webhookCache = {
    tag: {
        byId (id) {
            return `webhooks-${id}`;
        },
        byEnvironmentId (environmentId) {
            return `environments-${environmentId}-webhooks`;
        },
        byEnvironmentIdAndSource (environmentId, source) {
            return `environments-${environmentId}-sources-${source}-webhooks`;
        }
    },
    revalidate ({ id, environmentId, source }) {
        if (id) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(this.tag.byId(id));
        }
        if (environmentId) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(this.tag.byEnvironmentId(environmentId));
        }
        if (environmentId && source) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(this.tag.byEnvironmentIdAndSource(environmentId, source));
        }
    }
};


/***/ }),

/***/ 883212:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Bx: () => (/* binding */ getActionClass),
/* harmony export */   CG: () => (/* binding */ getApiKey),
/* harmony export */   Dp: () => (/* binding */ getSurvey),
/* harmony export */   I_: () => (/* binding */ getInvite),
/* harmony export */   O0: () => (/* binding */ getWebhook),
/* harmony export */   U1: () => (/* binding */ getProject),
/* harmony export */   Uo: () => (/* binding */ getTeam),
/* harmony export */   Wy: () => (/* binding */ getResponseNote),
/* harmony export */   Xj: () => (/* binding */ isProjectPartOfOrganization),
/* harmony export */   YE: () => (/* binding */ getDocument),
/* harmony export */   Z0: () => (/* binding */ getLanguage),
/* harmony export */   bH: () => (/* binding */ getTag),
/* harmony export */   bl: () => (/* binding */ getContact),
/* harmony export */   kn: () => (/* binding */ getSegment),
/* harmony export */   l5: () => (/* binding */ isTeamPartOfOrganization),
/* harmony export */   mi: () => (/* binding */ getResponse),
/* harmony export */   rg: () => (/* binding */ getIntegration),
/* harmony export */   uc: () => (/* binding */ getEnvironment),
/* harmony export */   zv: () => (/* binding */ getInsight)
/* harmony export */ });
/* harmony import */ var private_next_rsc_server_reference__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(286055);
/* harmony import */ var private_next_rsc_action_encryption__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(770767);
/* harmony import */ var private_next_rsc_action_encryption__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(private_next_rsc_action_encryption__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_cache_api_key__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16411);
/* harmony import */ var _lib_cache_contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(976565);
/* harmony import */ var _lib_cache_invite__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(896484);
/* harmony import */ var _lib_cache_team__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(753304);
/* harmony import */ var _lib_cache_webhook__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(638234);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(896330);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(645625);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _formbricks_database__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(482859);
/* harmony import */ var _formbricks_lib_actionClass_cache__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(465382);
/* harmony import */ var _formbricks_lib_cache__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(48165);
/* harmony import */ var _formbricks_lib_cache_segment__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(857431);
/* harmony import */ var _formbricks_lib_environment_cache__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(37483);
/* harmony import */ var _formbricks_lib_integration_cache__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(646426);
/* harmony import */ var _formbricks_lib_project_cache__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(595111);
/* harmony import */ var _formbricks_lib_response_cache__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(813255);
/* harmony import */ var _formbricks_lib_responseNote_cache__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(667883);
/* harmony import */ var _formbricks_lib_survey_cache__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(710528);
/* harmony import */ var _formbricks_lib_tag_cache__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(366836);
/* harmony import */ var _formbricks_lib_utils_validate__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(472749);
/* harmony import */ var _formbricks_types_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(552224);
/* harmony import */ var _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(207798);
/* harmony import */ var private_next_rsc_action_validate__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(429931);
/* __next_internal_action_entry_do_not_use__ {"7f11f2efac37ac84796e6cb223722dbe2e808e177f":"getResponse","7f12957c3365cc2950bdc48f0118f82439eb6c23ec":"getSurvey","7f20db167926d501ff62b9525526548773c8a436d4":"isTeamPartOfOrganization","7f36cf02b548a01d85112f587591e8c1e8390fa538":"isProjectPartOfOrganization","7f4f2c9c8b657cf906e9a25e65dafac6ec65967916":"getWebhook","7f540889be00b7aa8c6ff1edc5cd79ece876954fd3":"getInvite","7f60061b4b6be335eaa2facd1c5d8129b87f6923f4":"getActionClass","7f670a0537f96de8b5156e1b206124b2a990484370":"getApiKey","7f74bd40a1f82de833915085152910f3ebd525b356":"getTeam","7fb9a3e6cbebea226c9a3678f31bfebf532ca7321e":"getResponseNote","7fc5117c6d27e507a6efd4e11ff01afa8b3c52f1a1":"getTag","7fc6abb0838b6422ef7e81141fd6603883cd1990cf":"getDocument","7fc856fe5dd5f698d2f54dacf4280d447336780427":"getLanguage","7fcda0e6bf50febdf861015e25ebdf74068a488dde":"getContact","7fcfea9518c327899180b23cb3055005ba65cdef33":"getIntegration","7fdb06c584a2145e0f48be9ead409fc7f774731fde":"getEnvironment","7fdcbaf3445e783557d350b55d91be1398fafca7d3":"getInsight","7fe763f2c0d5f307cc75c26f23c693a54ac24a3112":"getProject","7ffb22c619704253744e9b5fea4eccca8b0808fb64":"getSegment"} */ 






















const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getActionClass = (0,react__WEBPACK_IMPORTED_MODULE_8__.cache)(async (actionClassId)=>(0,_formbricks_lib_cache__WEBPACK_IMPORTED_MODULE_10__/* .cache */ .P)(async ()=>{
        (0,_formbricks_lib_utils_validate__WEBPACK_IMPORTED_MODULE_11__/* .validateInputs */ .C)([
            actionClassId,
            _formbricks_types_common__WEBPACK_IMPORTED_MODULE_12__/* .ZId */ .i4
        ]);
        try {
            const actionClass = await _formbricks_database__WEBPACK_IMPORTED_MODULE_9__/* .prisma */ .z.actionClass.findUnique({
                where: {
                    id: actionClassId
                },
                select: {
                    environmentId: true
                }
            });
            return actionClass;
        } catch (error) {
            throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_13__/* .DatabaseError */ .a$(`Database error when fetching action`);
        }
    }, [
        `utils-getActionClass-${actionClassId}`
    ], {
        tags: [
            _formbricks_lib_actionClass_cache__WEBPACK_IMPORTED_MODULE_14__/* .actionClassCache */ .j.tag.byId(actionClassId)
        ]
    })());
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getApiKey = (0,react__WEBPACK_IMPORTED_MODULE_8__.cache)(async (apiKeyId)=>(0,_formbricks_lib_cache__WEBPACK_IMPORTED_MODULE_10__/* .cache */ .P)(async ()=>{
        (0,_formbricks_lib_utils_validate__WEBPACK_IMPORTED_MODULE_11__/* .validateInputs */ .C)([
            apiKeyId,
            _formbricks_types_common__WEBPACK_IMPORTED_MODULE_12__/* .ZString */ .eI
        ]);
        if (!apiKeyId) {
            throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_13__/* .InvalidInputError */ .oC("API key cannot be null or undefined.");
        }
        try {
            const apiKeyData = await _formbricks_database__WEBPACK_IMPORTED_MODULE_9__/* .prisma */ .z.apiKey.findUnique({
                where: {
                    id: apiKeyId
                },
                select: {
                    environmentId: true
                }
            });
            return apiKeyData;
        } catch (error) {
            if (error instanceof _prisma_client__WEBPACK_IMPORTED_MODULE_7__.Prisma.PrismaClientKnownRequestError) {
                throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_13__/* .DatabaseError */ .a$(error.message);
            }
            throw error;
        }
    }, [
        `utils-getApiKey-${apiKeyId}`
    ], {
        tags: [
            _lib_cache_api_key__WEBPACK_IMPORTED_MODULE_2__/* .apiKeyCache */ .m.tag.byId(apiKeyId)
        ]
    })());
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getEnvironment = (0,react__WEBPACK_IMPORTED_MODULE_8__.cache)(async (environmentId)=>(0,_formbricks_lib_cache__WEBPACK_IMPORTED_MODULE_10__/* .cache */ .P)(async ()=>{
        (0,_formbricks_lib_utils_validate__WEBPACK_IMPORTED_MODULE_11__/* .validateInputs */ .C)([
            environmentId,
            _formbricks_types_common__WEBPACK_IMPORTED_MODULE_12__/* .ZId */ .i4
        ]);
        try {
            const environment = await _formbricks_database__WEBPACK_IMPORTED_MODULE_9__/* .prisma */ .z.environment.findUnique({
                where: {
                    id: environmentId
                },
                select: {
                    projectId: true
                }
            });
            return environment;
        } catch (error) {
            if (error instanceof _prisma_client__WEBPACK_IMPORTED_MODULE_7__.Prisma.PrismaClientKnownRequestError) {
                throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_13__/* .DatabaseError */ .a$(error.message);
            }
            throw error;
        }
    }, [
        `utils-getEnvironment-${environmentId}`
    ], {
        tags: [
            _formbricks_lib_environment_cache__WEBPACK_IMPORTED_MODULE_15__/* .environmentCache */ .e.tag.byId(environmentId)
        ]
    })());
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getIntegration = (0,react__WEBPACK_IMPORTED_MODULE_8__.cache)(async (integrationId)=>(0,_formbricks_lib_cache__WEBPACK_IMPORTED_MODULE_10__/* .cache */ .P)(async ()=>{
        try {
            const integration = await _formbricks_database__WEBPACK_IMPORTED_MODULE_9__/* .prisma */ .z.integration.findUnique({
                where: {
                    id: integrationId
                },
                select: {
                    environmentId: true
                }
            });
            return integration;
        } catch (error) {
            if (error instanceof _prisma_client__WEBPACK_IMPORTED_MODULE_7__.Prisma.PrismaClientKnownRequestError) {
                throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_13__/* .DatabaseError */ .a$(error.message);
            }
            throw error;
        }
    }, [
        `utils-getIntegration-${integrationId}`
    ], {
        tags: [
            _formbricks_lib_integration_cache__WEBPACK_IMPORTED_MODULE_16__/* .integrationCache */ .t.tag.byId(integrationId)
        ]
    })());
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getInvite = (0,react__WEBPACK_IMPORTED_MODULE_8__.cache)(async (inviteId)=>(0,_formbricks_lib_cache__WEBPACK_IMPORTED_MODULE_10__/* .cache */ .P)(async ()=>{
        (0,_formbricks_lib_utils_validate__WEBPACK_IMPORTED_MODULE_11__/* .validateInputs */ .C)([
            inviteId,
            _formbricks_types_common__WEBPACK_IMPORTED_MODULE_12__/* .ZString */ .eI
        ]);
        try {
            const invite = await _formbricks_database__WEBPACK_IMPORTED_MODULE_9__/* .prisma */ .z.invite.findUnique({
                where: {
                    id: inviteId
                },
                select: {
                    organizationId: true
                }
            });
            return invite;
        } catch (error) {
            if (error instanceof _prisma_client__WEBPACK_IMPORTED_MODULE_7__.Prisma.PrismaClientKnownRequestError) {
                throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_13__/* .DatabaseError */ .a$(error.message);
            }
            throw error;
        }
    }, [
        `utils-getInvite-${inviteId}`
    ], {
        tags: [
            _lib_cache_invite__WEBPACK_IMPORTED_MODULE_4__/* .inviteCache */ .i.tag.byId(inviteId)
        ]
    })());
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getLanguage = async (languageId)=>{
    try {
        (0,_formbricks_lib_utils_validate__WEBPACK_IMPORTED_MODULE_11__/* .validateInputs */ .C)([
            languageId,
            _formbricks_types_common__WEBPACK_IMPORTED_MODULE_12__/* .ZId */ .i4
        ]);
        const language = await _formbricks_database__WEBPACK_IMPORTED_MODULE_9__/* .prisma */ .z.language.findFirst({
            where: {
                id: languageId
            },
            select: {
                projectId: true
            }
        });
        if (!language) {
            throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_13__/* .ResourceNotFoundError */ .CE("Language", languageId);
        }
        return language;
    } catch (error) {
        if (error instanceof _prisma_client__WEBPACK_IMPORTED_MODULE_7__.Prisma.PrismaClientKnownRequestError) {
            throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_13__/* .DatabaseError */ .a$(error.message);
        }
        throw error;
    }
};
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getProject = (0,react__WEBPACK_IMPORTED_MODULE_8__.cache)(async (projectId)=>(0,_formbricks_lib_cache__WEBPACK_IMPORTED_MODULE_10__/* .cache */ .P)(async ()=>{
        try {
            const projectPrisma = await _formbricks_database__WEBPACK_IMPORTED_MODULE_9__/* .prisma */ .z.project.findUnique({
                where: {
                    id: projectId
                },
                select: {
                    organizationId: true
                }
            });
            return projectPrisma;
        } catch (error) {
            if (error instanceof _prisma_client__WEBPACK_IMPORTED_MODULE_7__.Prisma.PrismaClientKnownRequestError) {
                throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_13__/* .DatabaseError */ .a$(error.message);
            }
            throw error;
        }
    }, [
        `utils-getProject-${projectId}`
    ], {
        tags: [
            _formbricks_lib_project_cache__WEBPACK_IMPORTED_MODULE_17__/* .projectCache */ .E.tag.byId(projectId)
        ]
    })());
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getResponse = (0,react__WEBPACK_IMPORTED_MODULE_8__.cache)(async (responseId)=>(0,_formbricks_lib_cache__WEBPACK_IMPORTED_MODULE_10__/* .cache */ .P)(async ()=>{
        (0,_formbricks_lib_utils_validate__WEBPACK_IMPORTED_MODULE_11__/* .validateInputs */ .C)([
            responseId,
            _formbricks_types_common__WEBPACK_IMPORTED_MODULE_12__/* .ZId */ .i4
        ]);
        try {
            const response = await _formbricks_database__WEBPACK_IMPORTED_MODULE_9__/* .prisma */ .z.response.findUnique({
                where: {
                    id: responseId
                },
                select: {
                    surveyId: true
                }
            });
            return response;
        } catch (error) {
            if (error instanceof _prisma_client__WEBPACK_IMPORTED_MODULE_7__.Prisma.PrismaClientKnownRequestError) {
                throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_13__/* .DatabaseError */ .a$(error.message);
            }
            throw error;
        }
    }, [
        `utils-getResponse-${responseId}`
    ], {
        tags: [
            _formbricks_lib_response_cache__WEBPACK_IMPORTED_MODULE_18__/* .responseCache */ .Q.tag.byId(responseId),
            _formbricks_lib_responseNote_cache__WEBPACK_IMPORTED_MODULE_19__/* .responseNoteCache */ .S.tag.byResponseId(responseId)
        ]
    })());
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getResponseNote = (0,react__WEBPACK_IMPORTED_MODULE_8__.cache)(async (responseNoteId)=>(0,_formbricks_lib_cache__WEBPACK_IMPORTED_MODULE_10__/* .cache */ .P)(async ()=>{
        try {
            const responseNote = await _formbricks_database__WEBPACK_IMPORTED_MODULE_9__/* .prisma */ .z.responseNote.findUnique({
                where: {
                    id: responseNoteId
                },
                select: {
                    responseId: true
                }
            });
            return responseNote;
        } catch (error) {
            if (error instanceof _prisma_client__WEBPACK_IMPORTED_MODULE_7__.Prisma.PrismaClientKnownRequestError) {
                throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_13__/* .DatabaseError */ .a$(error.message);
            }
            throw error;
        }
    }, [
        `utils-getResponseNote-${responseNoteId}`
    ], {
        tags: [
            _formbricks_lib_responseNote_cache__WEBPACK_IMPORTED_MODULE_19__/* .responseNoteCache */ .S.tag.byId(responseNoteId)
        ]
    })());
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getSurvey = (0,react__WEBPACK_IMPORTED_MODULE_8__.cache)(async (surveyId)=>(0,_formbricks_lib_cache__WEBPACK_IMPORTED_MODULE_10__/* .cache */ .P)(async ()=>{
        (0,_formbricks_lib_utils_validate__WEBPACK_IMPORTED_MODULE_11__/* .validateInputs */ .C)([
            surveyId,
            _formbricks_types_common__WEBPACK_IMPORTED_MODULE_12__/* .ZId */ .i4
        ]);
        try {
            const survey = await _formbricks_database__WEBPACK_IMPORTED_MODULE_9__/* .prisma */ .z.survey.findUnique({
                where: {
                    id: surveyId
                },
                select: {
                    environmentId: true
                }
            });
            return survey;
        } catch (error) {
            if (error instanceof _prisma_client__WEBPACK_IMPORTED_MODULE_7__.Prisma.PrismaClientKnownRequestError) {
                throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_13__/* .DatabaseError */ .a$(error.message);
            }
            throw error;
        }
    }, [
        `utils-getSurvey-${surveyId}`
    ], {
        tags: [
            _formbricks_lib_survey_cache__WEBPACK_IMPORTED_MODULE_20__/* .surveyCache */ .$.tag.byId(surveyId)
        ]
    })());
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getTag = (0,react__WEBPACK_IMPORTED_MODULE_8__.cache)(async (id)=>(0,_formbricks_lib_cache__WEBPACK_IMPORTED_MODULE_10__/* .cache */ .P)(async ()=>{
        (0,_formbricks_lib_utils_validate__WEBPACK_IMPORTED_MODULE_11__/* .validateInputs */ .C)([
            id,
            _formbricks_types_common__WEBPACK_IMPORTED_MODULE_12__/* .ZId */ .i4
        ]);
        const tag = await _formbricks_database__WEBPACK_IMPORTED_MODULE_9__/* .prisma */ .z.tag.findUnique({
            where: {
                id
            },
            select: {
                environmentId: true
            }
        });
        return tag;
    }, [
        `utils-getTag-${id}`
    ], {
        tags: [
            _formbricks_lib_tag_cache__WEBPACK_IMPORTED_MODULE_21__/* .tagCache */ .J.tag.byId(id)
        ]
    })());
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getWebhook = async (id)=>(0,_formbricks_lib_cache__WEBPACK_IMPORTED_MODULE_10__/* .cache */ .P)(async ()=>{
        (0,_formbricks_lib_utils_validate__WEBPACK_IMPORTED_MODULE_11__/* .validateInputs */ .C)([
            id,
            _formbricks_types_common__WEBPACK_IMPORTED_MODULE_12__/* .ZId */ .i4
        ]);
        try {
            const webhook = await _formbricks_database__WEBPACK_IMPORTED_MODULE_9__/* .prisma */ .z.webhook.findUnique({
                where: {
                    id
                },
                select: {
                    environmentId: true
                }
            });
            return webhook;
        } catch (error) {
            if (error instanceof _prisma_client__WEBPACK_IMPORTED_MODULE_7__.Prisma.PrismaClientKnownRequestError) {
                throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_13__/* .DatabaseError */ .a$(error.message);
            }
            throw error;
        }
    }, [
        `utils-getWebhook-${id}`
    ], {
        tags: [
            _lib_cache_webhook__WEBPACK_IMPORTED_MODULE_6__/* .webhookCache */ .Q.tag.byId(id)
        ]
    })();
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getTeam = (0,react__WEBPACK_IMPORTED_MODULE_8__.cache)(async (teamId)=>(0,_formbricks_lib_cache__WEBPACK_IMPORTED_MODULE_10__/* .cache */ .P)(async ()=>{
        (0,_formbricks_lib_utils_validate__WEBPACK_IMPORTED_MODULE_11__/* .validateInputs */ .C)([
            teamId,
            _formbricks_types_common__WEBPACK_IMPORTED_MODULE_12__/* .ZString */ .eI
        ]);
        try {
            const team = await _formbricks_database__WEBPACK_IMPORTED_MODULE_9__/* .prisma */ .z.team.findUnique({
                where: {
                    id: teamId
                },
                select: {
                    organizationId: true
                }
            });
            return team;
        } catch (error) {
            if (error instanceof _prisma_client__WEBPACK_IMPORTED_MODULE_7__.Prisma.PrismaClientKnownRequestError) {
                throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_13__/* .DatabaseError */ .a$(error.message);
            }
            throw error;
        }
    }, [
        `utils-getTeam-${teamId}`
    ], {
        tags: [
            _lib_cache_team__WEBPACK_IMPORTED_MODULE_5__/* .teamCache */ .g.tag.byId(teamId)
        ]
    })());
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getInsight = (0,react__WEBPACK_IMPORTED_MODULE_8__.cache)(async (insightId)=>(0,_formbricks_lib_cache__WEBPACK_IMPORTED_MODULE_10__/* .cache */ .P)(async ()=>{
        (0,_formbricks_lib_utils_validate__WEBPACK_IMPORTED_MODULE_11__/* .validateInputs */ .C)([
            insightId,
            _formbricks_types_common__WEBPACK_IMPORTED_MODULE_12__/* .ZId */ .i4
        ]);
        try {
            const insight = await _formbricks_database__WEBPACK_IMPORTED_MODULE_9__/* .prisma */ .z.insight.findUnique({
                where: {
                    id: insightId
                },
                select: {
                    environmentId: true
                }
            });
            return insight;
        } catch (error) {
            if (error instanceof _prisma_client__WEBPACK_IMPORTED_MODULE_7__.Prisma.PrismaClientKnownRequestError) {
                throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_13__/* .DatabaseError */ .a$(error.message);
            }
            throw error;
        }
    }, [
        `utils-getInsight-${insightId}`
    ], {
        tags: [
            _formbricks_lib_tag_cache__WEBPACK_IMPORTED_MODULE_21__/* .tagCache */ .J.tag.byId(insightId)
        ]
    })());
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getDocument = (0,react__WEBPACK_IMPORTED_MODULE_8__.cache)(async (documentId)=>(0,_formbricks_lib_cache__WEBPACK_IMPORTED_MODULE_10__/* .cache */ .P)(async ()=>{
        (0,_formbricks_lib_utils_validate__WEBPACK_IMPORTED_MODULE_11__/* .validateInputs */ .C)([
            documentId,
            _formbricks_types_common__WEBPACK_IMPORTED_MODULE_12__/* .ZId */ .i4
        ]);
        try {
            const document = await _formbricks_database__WEBPACK_IMPORTED_MODULE_9__/* .prisma */ .z.document.findUnique({
                where: {
                    id: documentId
                },
                select: {
                    environmentId: true
                }
            });
            return document;
        } catch (error) {
            if (error instanceof _prisma_client__WEBPACK_IMPORTED_MODULE_7__.Prisma.PrismaClientKnownRequestError) {
                throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_13__/* .DatabaseError */ .a$(error.message);
            }
            throw error;
        }
    }, [
        `utils-getDocument-${documentId}`
    ], {
        tags: [
            _formbricks_lib_tag_cache__WEBPACK_IMPORTED_MODULE_21__/* .tagCache */ .J.tag.byId(documentId)
        ]
    })());
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ isProjectPartOfOrganization = async (organizationId, projectId)=>{
    const project = await getProject(projectId);
    if (!project) {
        throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_13__/* .ResourceNotFoundError */ .CE("Project", projectId);
    }
    return project.organizationId === organizationId;
};
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ isTeamPartOfOrganization = async (organizationId, teamId)=>{
    const team = await getTeam(teamId);
    if (!team) {
        throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_13__/* .ResourceNotFoundError */ .CE("Team", teamId);
    }
    return team.organizationId === organizationId;
};
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getContact = (0,react__WEBPACK_IMPORTED_MODULE_8__.cache)(async (contactId)=>(0,_formbricks_lib_cache__WEBPACK_IMPORTED_MODULE_10__/* .cache */ .P)(async ()=>{
        (0,_formbricks_lib_utils_validate__WEBPACK_IMPORTED_MODULE_11__/* .validateInputs */ .C)([
            contactId,
            _formbricks_types_common__WEBPACK_IMPORTED_MODULE_12__/* .ZId */ .i4
        ]);
        try {
            return await _formbricks_database__WEBPACK_IMPORTED_MODULE_9__/* .prisma */ .z.contact.findUnique({
                where: {
                    id: contactId
                },
                select: {
                    environmentId: true
                }
            });
        } catch (error) {
            if (error instanceof _prisma_client__WEBPACK_IMPORTED_MODULE_7__.Prisma.PrismaClientKnownRequestError) {
                throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_13__/* .DatabaseError */ .a$(error.message);
            }
            throw error;
        }
    }, [
        `utils-getPerson-${contactId}`
    ], {
        tags: [
            _lib_cache_contact__WEBPACK_IMPORTED_MODULE_3__/* .contactCache */ .f.tag.byId(contactId)
        ]
    })());
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getSegment = (0,react__WEBPACK_IMPORTED_MODULE_8__.cache)(async (segmentId)=>(0,_formbricks_lib_cache__WEBPACK_IMPORTED_MODULE_10__/* .cache */ .P)(async ()=>{
        (0,_formbricks_lib_utils_validate__WEBPACK_IMPORTED_MODULE_11__/* .validateInputs */ .C)([
            segmentId,
            _formbricks_types_common__WEBPACK_IMPORTED_MODULE_12__/* .ZId */ .i4
        ]);
        try {
            const segment = await _formbricks_database__WEBPACK_IMPORTED_MODULE_9__/* .prisma */ .z.segment.findUnique({
                where: {
                    id: segmentId
                },
                select: {
                    environmentId: true
                }
            });
            return segment;
        } catch (error) {
            if (error instanceof _prisma_client__WEBPACK_IMPORTED_MODULE_7__.Prisma.PrismaClientKnownRequestError) {
                throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_13__/* .DatabaseError */ .a$(error.message);
            }
            throw error;
        }
    }, [
        `utils-getSegment-${segmentId}`
    ], {
        tags: [
            _formbricks_lib_cache_segment__WEBPACK_IMPORTED_MODULE_22__/* .segmentCache */ .C.tag.byId(segmentId)
        ]
    })());

(0,private_next_rsc_action_validate__WEBPACK_IMPORTED_MODULE_23__/* .ensureServerEntryExports */ .D)([
    getActionClass,
    getApiKey,
    getEnvironment,
    getIntegration,
    getInvite,
    getLanguage,
    getProject,
    getResponse,
    getResponseNote,
    getSurvey,
    getTag,
    getWebhook,
    getTeam,
    getInsight,
    getDocument,
    isProjectPartOfOrganization,
    isTeamPartOfOrganization,
    getContact,
    getSegment
]);
(0,private_next_rsc_server_reference__WEBPACK_IMPORTED_MODULE_0__/* .registerServerReference */ .A)(getActionClass, "7f60061b4b6be335eaa2facd1c5d8129b87f6923f4", null);
(0,private_next_rsc_server_reference__WEBPACK_IMPORTED_MODULE_0__/* .registerServerReference */ .A)(getApiKey, "7f670a0537f96de8b5156e1b206124b2a990484370", null);
(0,private_next_rsc_server_reference__WEBPACK_IMPORTED_MODULE_0__/* .registerServerReference */ .A)(getEnvironment, "7fdb06c584a2145e0f48be9ead409fc7f774731fde", null);
(0,private_next_rsc_server_reference__WEBPACK_IMPORTED_MODULE_0__/* .registerServerReference */ .A)(getIntegration, "7fcfea9518c327899180b23cb3055005ba65cdef33", null);
(0,private_next_rsc_server_reference__WEBPACK_IMPORTED_MODULE_0__/* .registerServerReference */ .A)(getInvite, "7f540889be00b7aa8c6ff1edc5cd79ece876954fd3", null);
(0,private_next_rsc_server_reference__WEBPACK_IMPORTED_MODULE_0__/* .registerServerReference */ .A)(getLanguage, "7fc856fe5dd5f698d2f54dacf4280d447336780427", null);
(0,private_next_rsc_server_reference__WEBPACK_IMPORTED_MODULE_0__/* .registerServerReference */ .A)(getProject, "7fe763f2c0d5f307cc75c26f23c693a54ac24a3112", null);
(0,private_next_rsc_server_reference__WEBPACK_IMPORTED_MODULE_0__/* .registerServerReference */ .A)(getResponse, "7f11f2efac37ac84796e6cb223722dbe2e808e177f", null);
(0,private_next_rsc_server_reference__WEBPACK_IMPORTED_MODULE_0__/* .registerServerReference */ .A)(getResponseNote, "7fb9a3e6cbebea226c9a3678f31bfebf532ca7321e", null);
(0,private_next_rsc_server_reference__WEBPACK_IMPORTED_MODULE_0__/* .registerServerReference */ .A)(getSurvey, "7f12957c3365cc2950bdc48f0118f82439eb6c23ec", null);
(0,private_next_rsc_server_reference__WEBPACK_IMPORTED_MODULE_0__/* .registerServerReference */ .A)(getTag, "7fc5117c6d27e507a6efd4e11ff01afa8b3c52f1a1", null);
(0,private_next_rsc_server_reference__WEBPACK_IMPORTED_MODULE_0__/* .registerServerReference */ .A)(getWebhook, "7f4f2c9c8b657cf906e9a25e65dafac6ec65967916", null);
(0,private_next_rsc_server_reference__WEBPACK_IMPORTED_MODULE_0__/* .registerServerReference */ .A)(getTeam, "7f74bd40a1f82de833915085152910f3ebd525b356", null);
(0,private_next_rsc_server_reference__WEBPACK_IMPORTED_MODULE_0__/* .registerServerReference */ .A)(getInsight, "7fdcbaf3445e783557d350b55d91be1398fafca7d3", null);
(0,private_next_rsc_server_reference__WEBPACK_IMPORTED_MODULE_0__/* .registerServerReference */ .A)(getDocument, "7fc6abb0838b6422ef7e81141fd6603883cd1990cf", null);
(0,private_next_rsc_server_reference__WEBPACK_IMPORTED_MODULE_0__/* .registerServerReference */ .A)(isProjectPartOfOrganization, "7f36cf02b548a01d85112f587591e8c1e8390fa538", null);
(0,private_next_rsc_server_reference__WEBPACK_IMPORTED_MODULE_0__/* .registerServerReference */ .A)(isTeamPartOfOrganization, "7f20db167926d501ff62b9525526548773c8a436d4", null);
(0,private_next_rsc_server_reference__WEBPACK_IMPORTED_MODULE_0__/* .registerServerReference */ .A)(getContact, "7fcda0e6bf50febdf861015e25ebdf74068a488dde", null);
(0,private_next_rsc_server_reference__WEBPACK_IMPORTED_MODULE_0__/* .registerServerReference */ .A)(getSegment, "7ffb22c619704253744e9b5fea4eccca8b0808fb64", null);


/***/ }),

/***/ 465382:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ actionClassCache)
/* harmony export */ });
/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(310256);
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

/***/ 857431:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ segmentCache)
/* harmony export */ });
/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(310256);
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

/***/ 43264:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MO: () => (/* binding */ createEnvironment),
/* harmony export */   uc: () => (/* binding */ getEnvironment)
/* harmony export */ });
/* unused harmony exports getEnvironments, updateEnvironment, getFirstEnvironmentIdByUserId */
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(896330);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645625);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(283131);
/* harmony import */ var _formbricks_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(482859);
/* harmony import */ var _formbricks_types_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(552224);
/* harmony import */ var _formbricks_types_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(20770);
/* harmony import */ var _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(207798);
/* harmony import */ var _cache__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48165);
/* harmony import */ var _posthogServer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(976830);
/* harmony import */ var _utils_validate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(472749);
/* harmony import */ var _cache__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(37483);














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
    validateInputs([
        environmentId,
        ZId
    ], [
        data,
        ZEnvironmentUpdateInput.partial()
    ]);
    const newData = {
        ...data,
        updatedAt: new Date()
    };
    let updatedEnvironment;
    try {
        updatedEnvironment = await prisma.environment.update({
            where: {
                id: environmentId
            },
            data: newData
        });
        environmentCache.revalidate({
            id: environmentId,
            projectId: updatedEnvironment.projectId
        });
        return updatedEnvironment;
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            throw new DatabaseError(error.message);
        }
        throw error;
    }
};
const getFirstEnvironmentIdByUserId = async (userId)=>{
    try {
        const organizations = await getOrganizationsByUserId(userId);
        if (organizations.length === 0) {
            return null;
        }
        const firstOrganization = organizations[0];
        const projects = await getUserProjects(userId, firstOrganization.id);
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
    (0,_utils_validate__WEBPACK_IMPORTED_MODULE_4__/* .validateInputs */ .C)([
        projectId,
        _formbricks_types_common__WEBPACK_IMPORTED_MODULE_5__/* .ZId */ .i4
    ], [
        environmentInput,
        _formbricks_types_environment__WEBPACK_IMPORTED_MODULE_8__/* .ZEnvironmentCreateInput */ .up
    ]);
    try {
        const environment = await _formbricks_database__WEBPACK_IMPORTED_MODULE_2__/* .prisma */ .z.environment.create({
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
        _cache__WEBPACK_IMPORTED_MODULE_7__/* .environmentCache */ .e.revalidate({
            id: environment.id,
            projectId: environment.projectId
        });
        await (0,_posthogServer__WEBPACK_IMPORTED_MODULE_10__/* .capturePosthogEnvironmentEvent */ .s)(environment.id, "environment created", {
            environmentType: environment.type
        });
        return environment;
    } catch (error) {
        if (error instanceof _prisma_client__WEBPACK_IMPORTED_MODULE_0__.Prisma.PrismaClientKnownRequestError) {
            throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_6__/* .DatabaseError */ .a$(error.message);
        }
        throw error;
    }
};


/***/ }),

/***/ 646426:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: () => (/* binding */ integrationCache)
/* harmony export */ });
/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(310256);
/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_cache__WEBPACK_IMPORTED_MODULE_0__);

const integrationCache = {
    tag: {
        byId (id) {
            return `integrations-${id}`;
        },
        byEnvironmentId (environmentId) {
            return `environments-${environmentId}-integrations`;
        },
        byEnvironmentIdAndType (environmentId, type) {
            return `environments-${environmentId}-type-${type}-integrations`;
        }
    },
    revalidate ({ id, environmentId, type }) {
        if (id) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(this.tag.byId(id));
        }
        if (environmentId) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(this.tag.byEnvironmentId(environmentId));
        }
        if (environmentId && type) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(this.tag.byEnvironmentIdAndType(environmentId, type));
        }
    }
};


/***/ }),

/***/ 976830:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* binding */ capturePosthogEnvironmentEvent)
/* harmony export */ });
/* unused harmony export sendPlanLimitsReachedEventToPosthogWeekly */
/* harmony import */ var posthog_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(765667);
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(333258);



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
const sendPlanLimitsReachedEventToPosthogWeekly = (environmentId, billing)=>cache(async ()=>{
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

/***/ 813255:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ responseCache)
/* harmony export */ });
/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(310256);
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

/***/ 667883:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ responseNoteCache)
/* harmony export */ });
/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(310256);
/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_cache__WEBPACK_IMPORTED_MODULE_0__);

const responseNoteCache = {
    tag: {
        byId (id) {
            return `responseNotes-${id}`;
        },
        byResponseId (responseId) {
            return `responses-${responseId}-responseNote`;
        }
    },
    revalidate ({ id, responseId }) {
        if (id) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(this.tag.byId(id));
        }
        if (responseId) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(this.tag.byResponseId(responseId));
        }
    }
};


/***/ }),

/***/ 710528:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ surveyCache)
/* harmony export */ });
/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(310256);
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

/***/ 366836:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: () => (/* binding */ tagCache)
/* harmony export */ });
/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(310256);
/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_cache__WEBPACK_IMPORTED_MODULE_0__);

const tagCache = {
    tag: {
        byId (id) {
            return `tags-${id}`;
        },
        byEnvironmentId (environmentId) {
            return `environments-${environmentId}-tags`;
        }
    },
    revalidate ({ id, environmentId }) {
        if (id) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(this.tag.byId(id));
        }
        if (environmentId) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(this.tag.byEnvironmentId(environmentId));
        }
    }
};


/***/ }),

/***/ 20770:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KJ: () => (/* binding */ ZEnvironment),
/* harmony export */   up: () => (/* binding */ ZEnvironmentCreateInput)
/* harmony export */ });
/* unused harmony exports ZEnvironmentId, ZEnvironmentUpdateInput */
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(283131);

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

/***/ 773518:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AK: () => (/* binding */ ZProject),
/* harmony export */   DP: () => (/* binding */ ZLanguageInput),
/* harmony export */   Io: () => (/* binding */ ZLanguageUpdate),
/* harmony export */   LM: () => (/* binding */ ZLanguage),
/* harmony export */   RQ: () => (/* binding */ ZProjectUpdateInput)
/* harmony export */ });
/* unused harmony exports ZProjectStyling, ZProjectConfigIndustry, ZProjectConfigChannel, ZProjectMode, ZProjectConfig, ZLogo */
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(283131);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(552224);
/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20770);
/* harmony import */ var _styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36583);




const ZProjectStyling = _styling__WEBPACK_IMPORTED_MODULE_0__/* .ZBaseStyling */ .U6.extend({
    allowStyleOverwrite: zod__WEBPACK_IMPORTED_MODULE_1__.z.boolean()
});
const ZProjectConfigIndustry = zod__WEBPACK_IMPORTED_MODULE_1__.z.enum([
    "eCommerce",
    "saas",
    "other"
]).nullable();
const ZProjectConfigChannel = zod__WEBPACK_IMPORTED_MODULE_1__.z.enum([
    "link",
    "app",
    "website"
]).nullable();
const ZProjectMode = zod__WEBPACK_IMPORTED_MODULE_1__.z.enum([
    "surveys",
    "cx"
]);
const ZProjectConfig = zod__WEBPACK_IMPORTED_MODULE_1__.z.object({
    channel: ZProjectConfigChannel,
    industry: ZProjectConfigIndustry
});
const ZLanguage = zod__WEBPACK_IMPORTED_MODULE_1__.z.object({
    id: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().cuid2(),
    createdAt: zod__WEBPACK_IMPORTED_MODULE_1__.z.date(),
    updatedAt: zod__WEBPACK_IMPORTED_MODULE_1__.z.date(),
    code: zod__WEBPACK_IMPORTED_MODULE_1__.z.string(),
    alias: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().nullable()
});
const ZLanguageInput = zod__WEBPACK_IMPORTED_MODULE_1__.z.object({
    code: zod__WEBPACK_IMPORTED_MODULE_1__.z.string(),
    alias: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().nullable()
});
const ZLanguageUpdate = zod__WEBPACK_IMPORTED_MODULE_1__.z.object({
    alias: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().nullable()
});
const ZLogo = zod__WEBPACK_IMPORTED_MODULE_1__.z.object({
    url: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
    bgColor: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional()
});
const ZProject = zod__WEBPACK_IMPORTED_MODULE_1__.z.object({
    id: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().cuid2(),
    createdAt: zod__WEBPACK_IMPORTED_MODULE_1__.z.date(),
    updatedAt: zod__WEBPACK_IMPORTED_MODULE_1__.z.date(),
    name: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().trim().min(1, {
        message: "Project name cannot be empty"
    }),
    organizationId: zod__WEBPACK_IMPORTED_MODULE_1__.z.string(),
    styling: ZProjectStyling,
    recontactDays: zod__WEBPACK_IMPORTED_MODULE_1__.z.number({
        message: "Recontact days is required"
    }).int().min(0, {
        message: "Must be a positive number"
    }).max(365, {
        message: "Must be less than 365"
    }),
    inAppSurveyBranding: zod__WEBPACK_IMPORTED_MODULE_1__.z.boolean(),
    linkSurveyBranding: zod__WEBPACK_IMPORTED_MODULE_1__.z.boolean(),
    config: ZProjectConfig,
    placement: _common__WEBPACK_IMPORTED_MODULE_2__/* .ZPlacement */ .yO,
    clickOutsideClose: zod__WEBPACK_IMPORTED_MODULE_1__.z.boolean(),
    darkOverlay: zod__WEBPACK_IMPORTED_MODULE_1__.z.boolean(),
    environments: zod__WEBPACK_IMPORTED_MODULE_1__.z.array(_environment__WEBPACK_IMPORTED_MODULE_3__/* .ZEnvironment */ .KJ),
    languages: zod__WEBPACK_IMPORTED_MODULE_1__.z.array(ZLanguage),
    logo: ZLogo.nullish()
});
const ZProjectUpdateInput = zod__WEBPACK_IMPORTED_MODULE_1__.z.object({
    name: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().trim().min(1, {
        message: "Project name cannot be empty"
    }).optional(),
    organizationId: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
    highlightBorderColor: _common__WEBPACK_IMPORTED_MODULE_2__/* .ZColor */ .cf.nullish(),
    recontactDays: zod__WEBPACK_IMPORTED_MODULE_1__.z.number().int().optional(),
    inAppSurveyBranding: zod__WEBPACK_IMPORTED_MODULE_1__.z.boolean().optional(),
    linkSurveyBranding: zod__WEBPACK_IMPORTED_MODULE_1__.z.boolean().optional(),
    config: ZProjectConfig.optional(),
    placement: _common__WEBPACK_IMPORTED_MODULE_2__/* .ZPlacement */ .yO.optional(),
    clickOutsideClose: zod__WEBPACK_IMPORTED_MODULE_1__.z.boolean().optional(),
    darkOverlay: zod__WEBPACK_IMPORTED_MODULE_1__.z.boolean().optional(),
    environments: zod__WEBPACK_IMPORTED_MODULE_1__.z.array(_environment__WEBPACK_IMPORTED_MODULE_3__/* .ZEnvironment */ .KJ).optional(),
    styling: ZProjectStyling.optional(),
    logo: ZLogo.optional(),
    teamIds: zod__WEBPACK_IMPORTED_MODULE_1__.z.array(zod__WEBPACK_IMPORTED_MODULE_1__.z.string()).optional()
});


/***/ }),

/***/ 36583:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U6: () => (/* binding */ ZBaseStyling)
/* harmony export */ });
/* unused harmony exports ZStylingColor, ZCardArrangementOptions, ZCardArrangement, ZSurveyStylingBackground */
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(283131);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(552224);


const ZStylingColor = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    light: _common__WEBPACK_IMPORTED_MODULE_1__/* .ZColor */ .cf,
    dark: _common__WEBPACK_IMPORTED_MODULE_1__/* .ZColor */ .cf.nullish()
});
const ZCardArrangementOptions = zod__WEBPACK_IMPORTED_MODULE_0__.z.enum([
    "casual",
    "straight",
    "simple"
]);
const ZCardArrangement = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    linkSurveys: ZCardArrangementOptions,
    appSurveys: ZCardArrangementOptions
});
const ZSurveyStylingBackground = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    bg: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().nullish(),
    bgType: zod__WEBPACK_IMPORTED_MODULE_0__.z.enum([
        "animation",
        "color",
        "image",
        "upload"
    ]).nullish(),
    brightness: zod__WEBPACK_IMPORTED_MODULE_0__.z.number().nullish()
}).refine((surveyBackground)=>{
    if (surveyBackground.bgType === "upload") {
        return Boolean(surveyBackground.bg);
    }
    return true;
}, {
    message: "Invalid background"
});
const ZBaseStyling = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    brandColor: ZStylingColor.nullish(),
    questionColor: ZStylingColor.nullish(),
    inputColor: ZStylingColor.nullish(),
    inputBorderColor: ZStylingColor.nullish(),
    cardBackgroundColor: ZStylingColor.nullish(),
    cardBorderColor: ZStylingColor.nullish(),
    cardShadowColor: ZStylingColor.nullish(),
    highlightBorderColor: ZStylingColor.nullish(),
    isDarkModeEnabled: zod__WEBPACK_IMPORTED_MODULE_0__.z.boolean().nullish(),
    roundness: zod__WEBPACK_IMPORTED_MODULE_0__.z.number().nullish(),
    cardArrangement: ZCardArrangement.nullish(),
    background: ZSurveyStylingBackground.nullish(),
    hideProgressBar: zod__WEBPACK_IMPORTED_MODULE_0__.z.boolean().nullish(),
    isLogoHidden: zod__WEBPACK_IMPORTED_MODULE_0__.z.boolean().nullish()
});


/***/ })

};
;