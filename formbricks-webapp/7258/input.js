exports.id = 7258;
exports.ids = [7258];
exports.modules = {

/***/ 587032:
/***/ (() => {



/***/ }),

/***/ 580408:
/***/ (() => {



/***/ }),

/***/ 949631:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  YF: () => (/* binding */ generateInsightsForSurveyResponsesConcept),
  B2: () => (/* binding */ handleInsightAssignments)
});

// UNUSED EXPORTS: createInsight, findNearestInsights, generateInsightsForSurveyResponses, getInsightVectorText, getQuestionResponseReferenceId

// EXTERNAL MODULE: ./lib/cache/document.ts
var cache_document = __webpack_require__(735027);
// EXTERNAL MODULE: external "@prisma/client"
var client_ = __webpack_require__(896330);
// EXTERNAL MODULE: ../../node_modules/ai/dist/index.mjs + 37 modules
var dist = __webpack_require__(850910);
// EXTERNAL MODULE: ../../node_modules/zod/lib/index.mjs
var lib = __webpack_require__(545198);
// EXTERNAL MODULE: ../../packages/database/src/index.ts + 1 modules
var src = __webpack_require__(527610);
// EXTERNAL MODULE: ../../packages/lib/aiModels.ts
var aiModels = __webpack_require__(709516);
// EXTERNAL MODULE: ../../packages/lib/utils/validate.ts
var validate = __webpack_require__(860988);
// EXTERNAL MODULE: ../../packages/types/documents.ts
var documents = __webpack_require__(927314);
// EXTERNAL MODULE: ../../packages/types/errors.ts
var errors = __webpack_require__(470641);
;// ./app/api/(internal)/insights/lib/document.ts









const document_createDocument = async (surveyName, documentInput)=>{
    (0,validate/* validateInputs */.C)([
        surveyName,
        lib.z.string()
    ], [
        documentInput,
        documents/* ZDocumentCreateInput */.mC
    ]);
    try {
        // Generate text embedding
        const { embedding } = await (0,dist/* embed */.E6)({
            model: aiModels/* embeddingsModel */.U,
            value: documentInput.text,
            experimental_telemetry: {
                isEnabled: true
            }
        });
        // generate sentiment and insights
        const { object } = await (0,dist/* generateObject */.pY)({
            model: aiModels/* llmModel */.V,
            schema: documents/* ZGenerateDocumentObjectSchema */.dV,
            system: `You are an XM researcher. You analyse a survey response (survey name, question headline & user answer) and generate insights from it. The insight title (1-3 words) should concisely answer the question, e.g., "What type of people do you think would most benefit" -> "Developers". You are very objective. For the insights, split the feedback into the smallest parts possible and only use the feedback itself to draw conclusions. You must output at least one insight. Always generate insights and titles in English, regardless of the input language.`,
            prompt: `Survey: ${surveyName}\n${documentInput.text}`,
            temperature: 0,
            experimental_telemetry: {
                isEnabled: true
            }
        });
        const sentiment = object.sentiment;
        const isSpam = object.isSpam;
        // create document
        const prismaDocument = await src/* prisma */.z.document.create({
            data: {
                ...documentInput,
                sentiment,
                isSpam
            }
        });
        const document = {
            ...prismaDocument,
            vector: embedding
        };
        // update document vector with the embedding
        const vectorString = `[${embedding.join(",")}]`;
        await src/* prisma */.z.$executeRaw`
          UPDATE "Document"
          SET "vector" = ${vectorString}::vector(512)
          WHERE "id" = ${document.id};
        `;
        cache_document/* documentCache */.O.revalidate({
            id: document.id,
            responseId: document.responseId,
            questionId: document.questionId
        });
        return {
            ...document,
            insights: object.insights,
            isSpam
        };
    } catch (error) {
        if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
            throw new errors/* DatabaseError */.a$(error.message);
        }
        throw error;
    }
};

// EXTERNAL MODULE: ./app/api/(internal)/insights/lib/utils.ts
var utils = __webpack_require__(418808);
// EXTERNAL MODULE: ../../node_modules/next/cache.js
var cache = __webpack_require__(87863);
;// ./lib/cache/insight.ts

const insightCache = {
    tag: {
        byId (id) {
            return `documentGroups-${id}`;
        },
        byEnvironmentId (environmentId) {
            return `environments-${environmentId}-documentGroups`;
        }
    },
    revalidate: ({ id, environmentId })=>{
        if (id) {
            (0,cache.revalidateTag)(insightCache.tag.byId(id));
        }
        if (environmentId) {
            (0,cache.revalidateTag)(insightCache.tag.byEnvironmentId(environmentId));
        }
    }
};

// EXTERNAL MODULE: ../../packages/lib/utils/ai.ts
var ai = __webpack_require__(483228);
// EXTERNAL MODULE: ../../packages/lib/utils/recall.ts + 1 modules
var recall = __webpack_require__(239949);
// EXTERNAL MODULE: ../../packages/types/common.ts
var common = __webpack_require__(733735);
// EXTERNAL MODULE: ../../packages/types/surveys/types.ts + 2 modules
var types = __webpack_require__(875863);
// EXTERNAL MODULE: ../../packages/database/zod/insights.ts
var insights = __webpack_require__(748047);
;// ./app/api/(internal)/insights/lib/types.ts


const ZInsightCreateInput = insights/* ZInsight */.x.pick({
    environmentId: true,
    title: true,
    description: true,
    category: true
}).extend({
    vector: lib.z.array(lib.z.number()).length(512)
});

;// ./app/api/(internal)/insights/lib/insights.ts















const generateInsightsForSurveyResponsesConcept = async (survey)=>{
    const { id: surveyId, name, environmentId, questions } = survey;
    (0,validate/* validateInputs */.C)([
        surveyId,
        common/* ZId */.i4
    ], [
        environmentId,
        common/* ZId */.i4
    ], [
        questions,
        types/* ZSurveyQuestions */.CA
    ]);
    try {
        const openTextQuestionsWithInsights = questions.filter((question)=>question.type === types/* TSurveyQuestionTypeEnum */.wn.OpenText && question.insightsEnabled);
        const openTextQuestionIds = openTextQuestionsWithInsights.map((question)=>question.id);
        if (openTextQuestionIds.length === 0) {
            return;
        }
        // Fetching responses
        const batchSize = 200;
        let skip = 0;
        let rateLimit;
        const spillover = [];
        let allResponsesProcessed = false;
        // Fetch the rate limit once, if not already set
        if (rateLimit === undefined) {
            const { rawResponse } = await (0,dist/* embed */.E6)({
                model: aiModels/* embeddingsModel */.U,
                value: "Test",
                experimental_telemetry: {
                    isEnabled: true
                }
            });
            const rateLimitHeader = rawResponse?.headers?.["x-ratelimit-remaining-requests"];
            rateLimit = rateLimitHeader ? parseInt(rateLimitHeader, 10) : undefined;
        }
        while(!allResponsesProcessed || spillover.length > 0){
            // If there are any spillover documents from the previous iteration, prioritize them
            let answersForDocumentCreation = [
                ...spillover
            ];
            spillover.length = 0; // Empty the spillover array after moving contents
            // Fetch new responses only if spillover is empty
            if (answersForDocumentCreation.length === 0 && !allResponsesProcessed) {
                const responses = await src/* prisma */.z.response.findMany({
                    where: {
                        surveyId,
                        documents: {
                            none: {}
                        },
                        finished: true
                    },
                    select: {
                        id: true,
                        data: true,
                        variables: true,
                        contactId: true,
                        language: true
                    },
                    take: batchSize,
                    skip
                });
                if (responses.length === 0 || responses.length < batchSize && rateLimit && responses.length < rateLimit) {
                    allResponsesProcessed = true; // Mark as finished when no more responses are found
                }
                const responsesWithOpenTextAnswers = responses.filter((response)=>(0,utils/* doesResponseHasAnyOpenTextAnswer */.Q$)(openTextQuestionIds, response.data));
                skip += batchSize - responsesWithOpenTextAnswers.length;
                const answersForDocumentCreationPromises = await Promise.all(responsesWithOpenTextAnswers.map(async (response)=>{
                    const responseEntries = openTextQuestionsWithInsights.map((question)=>{
                        const responseText = response.data[question.id];
                        if (!responseText) {
                            return;
                        }
                        const headline = (0,recall/* parseRecallInfo */.VY)(question.headline[response.language ?? "default"], response.data, response.variables);
                        const text = (0,ai/* getPromptText */.W)(headline, responseText);
                        return {
                            responseId: response.id,
                            questionId: question.id,
                            text
                        };
                    });
                    return responseEntries;
                }));
                const answersForDocumentCreationResult = answersForDocumentCreationPromises.flat();
                answersForDocumentCreationResult.forEach((answer)=>{
                    if (answer) {
                        answersForDocumentCreation.push(answer);
                    }
                });
            }
            // Process documents only up to the rate limit
            if (rateLimit !== undefined && rateLimit < answersForDocumentCreation.length) {
                // Push excess documents to the spillover array
                spillover.push(...answersForDocumentCreation.slice(rateLimit));
                answersForDocumentCreation = answersForDocumentCreation.slice(0, rateLimit);
            }
            const createDocumentPromises = answersForDocumentCreation.map((answer)=>{
                return document_createDocument(name, {
                    environmentId,
                    surveyId,
                    responseId: answer.responseId,
                    questionId: answer.questionId,
                    text: answer.text
                });
            });
            const createDocumentResults = await Promise.allSettled(createDocumentPromises);
            const fullfilledCreateDocumentResults = createDocumentResults.filter((result)=>result.status === "fulfilled");
            const createdDocuments = fullfilledCreateDocumentResults.filter(Boolean).map((result)=>result.value);
            for (const document of createdDocuments){
                if (document) {
                    const insightPromises = [];
                    const { insights, isSpam, id, environmentId } = document;
                    if (!isSpam) {
                        for (const insight of insights){
                            if (typeof insight.title !== "string" || typeof insight.description !== "string") {
                                throw new Error("Insight title and description must be a string");
                            }
                            // Create or connect the insight
                            insightPromises.push(handleInsightAssignments(environmentId, id, insight));
                        }
                        await Promise.allSettled(insightPromises);
                    }
                }
            }
            cache_document/* documentCache */.O.revalidate({
                environmentId: environmentId,
                surveyId: surveyId
            });
        }
        return;
    } catch (error) {
        if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
            throw new errors/* DatabaseError */.a$(error.message);
        }
        throw error;
    }
};
const generateInsightsForSurveyResponses = async (survey)=>{
    const { id: surveyId, name, environmentId, questions } = survey;
    validateInputs([
        surveyId,
        ZId
    ], [
        environmentId,
        ZId
    ], [
        questions,
        ZSurveyQuestions
    ]);
    try {
        const openTextQuestionsWithInsights = questions.filter((question)=>question.type === TSurveyQuestionTypeEnum.OpenText && question.insightsEnabled);
        const openTextQuestionIds = openTextQuestionsWithInsights.map((question)=>question.id);
        if (openTextQuestionIds.length === 0) {
            return;
        }
        // Fetching responses
        const batchSize = 200;
        let skip = 0;
        const totalResponseCount = await prisma.response.count({
            where: {
                surveyId,
                documents: {
                    none: {}
                },
                finished: true
            }
        });
        const pages = Math.ceil(totalResponseCount / batchSize);
        for(let i = 0; i < pages; i++){
            const responses = await prisma.response.findMany({
                where: {
                    surveyId,
                    documents: {
                        none: {}
                    },
                    finished: true
                },
                select: {
                    id: true,
                    data: true,
                    variables: true,
                    contactId: true,
                    language: true
                },
                take: batchSize,
                skip
            });
            const responsesWithOpenTextAnswers = responses.filter((response)=>doesResponseHasAnyOpenTextAnswer(openTextQuestionIds, response.data));
            skip += batchSize - responsesWithOpenTextAnswers.length;
            const createDocumentPromises = [];
            for (const response of responsesWithOpenTextAnswers){
                for (const question of openTextQuestionsWithInsights){
                    const responseText = response.data[question.id];
                    if (!responseText) {
                        continue;
                    }
                    const headline = parseRecallInfo(question.headline[response.language ?? "default"], response.data, response.variables);
                    const text = getPromptText(headline, responseText);
                    const createDocumentPromise = createDocument(name, {
                        environmentId,
                        surveyId,
                        responseId: response.id,
                        questionId: question.id,
                        text
                    });
                    createDocumentPromises.push(createDocumentPromise);
                }
            }
            const createdDocuments = (await Promise.all(createDocumentPromises)).filter(Boolean);
            for (const document of createdDocuments){
                if (document) {
                    const insightPromises = [];
                    const { insights, isSpam, id, environmentId } = document;
                    if (!isSpam) {
                        for (const insight of insights){
                            if (typeof insight.title !== "string" || typeof insight.description !== "string") {
                                throw new Error("Insight title and description must be a string");
                            }
                            // create or connect the insight
                            insightPromises.push(handleInsightAssignments(environmentId, id, insight));
                        }
                        await Promise.all(insightPromises);
                    }
                }
            }
            documentCache.revalidate({
                environmentId: environmentId,
                surveyId: surveyId
            });
        }
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            throw new DatabaseError(error.message);
        }
        throw error;
    }
};
const getQuestionResponseReferenceId = (surveyId, questionId)=>{
    return `${surveyId}-${questionId}`;
};
const createInsight = async (insightGroupInput)=>{
    (0,validate/* validateInputs */.C)([
        insightGroupInput,
        ZInsightCreateInput
    ]);
    try {
        // create document
        const { vector, ...data } = insightGroupInput;
        const insight = await src/* prisma */.z.insight.create({
            data
        });
        // update document vector with the embedding
        const vectorString = `[${insightGroupInput.vector.join(",")}]`;
        await src/* prisma */.z.$executeRaw`
      UPDATE "Insight"
      SET "vector" = ${vectorString}::vector(512)
      WHERE "id" = ${insight.id};
    `;
        insightCache.revalidate({
            id: insight.id,
            environmentId: insight.environmentId
        });
        return insight;
    } catch (error) {
        if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
            throw new errors/* DatabaseError */.a$(error.message);
        }
        throw error;
    }
};
const handleInsightAssignments = async (environmentId, documentId, insight)=>{
    try {
        // create embedding for insight
        const { embedding } = await (0,dist/* embed */.E6)({
            model: aiModels/* embeddingsModel */.U,
            value: getInsightVectorText(insight.title, insight.description),
            experimental_telemetry: {
                isEnabled: true
            }
        });
        // find close insight to merge it with
        const nearestInsights = await findNearestInsights(environmentId, embedding, 1, 0.2);
        if (nearestInsights.length > 0) {
            // create a documentInsight with this insight
            await src/* prisma */.z.documentInsight.create({
                data: {
                    documentId,
                    insightId: nearestInsights[0].id
                }
            });
            cache_document/* documentCache */.O.revalidate({
                insightId: nearestInsights[0].id
            });
        } else {
            // create new insight and documentInsight
            const newInsight = await createInsight({
                environmentId: environmentId,
                title: insight.title,
                description: insight.description,
                category: insight.category ?? "other",
                vector: embedding
            });
            // create a documentInsight with this insight
            await src/* prisma */.z.documentInsight.create({
                data: {
                    documentId,
                    insightId: newInsight.id
                }
            });
            cache_document/* documentCache */.O.revalidate({
                insightId: newInsight.id
            });
        }
    } catch (error) {
        throw error;
    }
};
const findNearestInsights = async (environmentId, vector, limit = 5, threshold = 0.5)=>{
    (0,validate/* validateInputs */.C)([
        environmentId,
        common/* ZId */.i4
    ]);
    // Convert the embedding array to a JSON-like string representation
    const vectorString = `[${vector.join(",")}]`;
    // Execute raw SQL query to find nearest neighbors and exclude the vector column
    const insights = await src/* prisma */.z.$queryRaw`
    SELECT
      id
    FROM "Insight" d
    WHERE d."environmentId" = ${environmentId}
      AND d."vector" <=> ${vectorString}::vector(512) <= ${threshold}
    ORDER BY d."vector" <=> ${vectorString}::vector(512)
    LIMIT ${limit};
  `;
    return insights;
};
const getInsightVectorText = (title, description)=>`${title}: ${description}`;


/***/ }),

/***/ 418808:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M6: () => (/* binding */ generateInsightsEnabledForSurveyQuestions),
/* harmony export */   Q$: () => (/* binding */ doesResponseHasAnyOpenTextAnswer)
/* harmony export */ });
/* unused harmony export generateInsightsForSurvey */
/* harmony import */ var _formbricks_lib_survey_cache__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(249479);
/* harmony import */ var _formbricks_lib_survey_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(222118);
/* harmony import */ var _formbricks_lib_survey_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(780564);
/* harmony import */ var _formbricks_lib_utils_validate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(860988);
/* harmony import */ var _formbricks_types_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(733735);
/* harmony import */ var _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(470641);








const generateInsightsForSurvey = (surveyId)=>{
    try {
        return fetch(`${WEBAPP_URL}/api/insights`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": CRON_SECRET
            },
            body: JSON.stringify({
                surveyId
            })
        });
    } catch (error) {
        return {
            ok: false,
            error: new Error(`Error while generating insights for survey: ${error.message}`)
        };
    }
};
const generateInsightsEnabledForSurveyQuestions = async (surveyId)=>{
    (0,_formbricks_lib_utils_validate__WEBPACK_IMPORTED_MODULE_0__/* .validateInputs */ .C)([
        surveyId,
        _formbricks_types_common__WEBPACK_IMPORTED_MODULE_1__/* .ZId */ .i4
    ]);
    try {
        const survey = await (0,_formbricks_lib_survey_service__WEBPACK_IMPORTED_MODULE_2__/* .getSurvey */ .Dp)(surveyId);
        if (!survey) {
            throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_3__/* .ResourceNotFoundError */ .CE("Survey", surveyId);
        }
        if (!(0,_formbricks_lib_survey_utils__WEBPACK_IMPORTED_MODULE_4__/* .doesSurveyHasOpenTextQuestion */ .dk)(survey.questions)) {
            return {
                success: false
            };
        }
        const openTextQuestions = survey.questions.filter((question)=>question.type === "openText");
        const openTextQuestionsWithoutInsightsEnabled = openTextQuestions.filter((question)=>question.type === "openText" && typeof question.insightsEnabled === "undefined");
        if (openTextQuestionsWithoutInsightsEnabled.length === 0) {
            return {
                success: false
            };
        }
        const updatedSurvey = await (0,_formbricks_lib_survey_service__WEBPACK_IMPORTED_MODULE_2__/* .updateSurvey */ .cU)(survey);
        if (!updatedSurvey) {
            throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_3__/* .ResourceNotFoundError */ .CE("Survey", surveyId);
        }
        const doesSurveyHasInsightsEnabledQuestion = updatedSurvey.questions.some((question)=>question.type === "openText" && question.insightsEnabled === true);
        _formbricks_lib_survey_cache__WEBPACK_IMPORTED_MODULE_5__/* .surveyCache */ .$.revalidate({
            id: surveyId,
            environmentId: survey.environmentId
        });
        if (doesSurveyHasInsightsEnabledQuestion) {
            return {
                success: true,
                survey: updatedSurvey
            };
        }
        return {
            success: false
        };
    } catch (error) {
        console.error("Error generating insights for surveys:", error);
        throw error;
    }
};
const doesResponseHasAnyOpenTextAnswer = (openTextQuestionIds, response)=>{
    return openTextQuestionIds.some((questionId)=>{
        const answer = response[questionId];
        return typeof answer === "string" && answer.length > 0;
    });
};


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

/***/ 735027:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ documentCache)
/* harmony export */ });
/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87863);
/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_cache__WEBPACK_IMPORTED_MODULE_0__);

const documentCache = {
    tag: {
        byId (id) {
            return `documents-${id}`;
        },
        byEnvironmentId (environmentId) {
            return `environments-${environmentId}-documents`;
        },
        byResponseId (responseId) {
            return `responses-${responseId}-documents`;
        },
        byResponseIdQuestionId (responseId, questionId) {
            return `responses-${responseId}-questions-${questionId}-documents`;
        },
        bySurveyId (surveyId) {
            return `surveys-${surveyId}-documents`;
        },
        bySurveyIdQuestionId (surveyId, questionId) {
            return `surveys-${surveyId}-questions-${questionId}-documents`;
        },
        byInsightId (insightId) {
            return `insights-${insightId}-documents`;
        },
        byInsightIdSurveyIdQuestionId (insightId, surveyId, questionId) {
            return `insights-${insightId}-surveys-${surveyId}-questions-${questionId}-documents`;
        }
    },
    revalidate: ({ id, environmentId, surveyId, responseId, questionId, insightId })=>{
        if (id) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(documentCache.tag.byId(id));
        }
        if (environmentId) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(documentCache.tag.byEnvironmentId(environmentId));
        }
        if (responseId) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(documentCache.tag.byResponseId(responseId));
        }
        if (surveyId) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(documentCache.tag.bySurveyId(surveyId));
        }
        if (responseId && questionId) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(documentCache.tag.byResponseIdQuestionId(responseId, questionId));
        }
        if (surveyId && questionId) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(documentCache.tag.bySurveyIdQuestionId(surveyId, questionId));
        }
        if (insightId) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(documentCache.tag.byInsightId(insightId));
        }
        if (insightId && surveyId && questionId) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(documentCache.tag.byInsightIdSurveyIdQuestionId(insightId, surveyId, questionId));
        }
    }
};


/***/ }),

/***/ 927314:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dV: () => (/* binding */ ZGenerateDocumentObjectSchema),
/* harmony export */   mC: () => (/* binding */ ZDocumentCreateInput),
/* harmony export */   nT: () => (/* binding */ ZDocumentSentiment)
/* harmony export */ });
/* unused harmony exports ZDocument, ZDocumentFilterCriteria */
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(545198);
/* harmony import */ var _formbricks_database_zod_insights__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(748047);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(733735);
/* harmony import */ var _surveys_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(875863);




const ZDocumentSentiment = zod__WEBPACK_IMPORTED_MODULE_1__.z.enum([
    "positive",
    "negative",
    "neutral"
]);
const ZDocument = zod__WEBPACK_IMPORTED_MODULE_1__.z.object({
    id: _common__WEBPACK_IMPORTED_MODULE_2__/* .ZId */ .i4,
    createdAt: zod__WEBPACK_IMPORTED_MODULE_1__.z.date(),
    updatedAt: zod__WEBPACK_IMPORTED_MODULE_1__.z.date(),
    environmentId: _common__WEBPACK_IMPORTED_MODULE_2__/* .ZId */ .i4,
    responseId: _common__WEBPACK_IMPORTED_MODULE_2__/* .ZId */ .i4.nullable(),
    questionId: _surveys_types__WEBPACK_IMPORTED_MODULE_3__/* .ZSurveyQuestionId */ .uD.nullable(),
    sentiment: ZDocumentSentiment,
    text: zod__WEBPACK_IMPORTED_MODULE_1__.z.string()
});
const ZDocumentCreateInput = zod__WEBPACK_IMPORTED_MODULE_1__.z.object({
    environmentId: _common__WEBPACK_IMPORTED_MODULE_2__/* .ZId */ .i4,
    surveyId: _common__WEBPACK_IMPORTED_MODULE_2__/* .ZId */ .i4,
    responseId: _common__WEBPACK_IMPORTED_MODULE_2__/* .ZId */ .i4,
    questionId: _surveys_types__WEBPACK_IMPORTED_MODULE_3__/* .ZSurveyQuestionId */ .uD,
    text: zod__WEBPACK_IMPORTED_MODULE_1__.z.string()
});
const ZDocumentFilterCriteria = zod__WEBPACK_IMPORTED_MODULE_1__.z.object({
    createdAt: zod__WEBPACK_IMPORTED_MODULE_1__.z.object({
        min: zod__WEBPACK_IMPORTED_MODULE_1__.z.date().optional(),
        max: zod__WEBPACK_IMPORTED_MODULE_1__.z.date().optional()
    }).optional()
});
const ZGenerateDocumentObjectSchema = zod__WEBPACK_IMPORTED_MODULE_1__.z.object({
    sentiment: ZDocumentSentiment,
    insights: zod__WEBPACK_IMPORTED_MODULE_1__.z.array(zod__WEBPACK_IMPORTED_MODULE_1__.z.object({
        title: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().describe("insight title, very specific"),
        description: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().describe("very brief insight description"),
        category: _formbricks_database_zod_insights__WEBPACK_IMPORTED_MODULE_0__/* .ZInsight */ .x.shape.category
    })),
    isSpam: zod__WEBPACK_IMPORTED_MODULE_1__.z.boolean()
});


/***/ })

};
;