"use strict";
exports.id = 8478;
exports.ids = [8478];
exports.modules = {

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

/***/ 408478:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Pv: () => (/* binding */ deleteResponse),
  mi: () => (/* binding */ getResponse),
  zZ: () => (/* binding */ getResponseBySingleUseId),
  h4: () => (/* binding */ getResponseCountBySurveyId),
  J6: () => (/* binding */ getResponses),
  D7: () => (/* binding */ getResponsesByContactId),
  ym: () => (/* binding */ getResponsesByEnvironmentId),
  rm: () => (/* binding */ updateResponse)
});

// UNUSED EXPORTS: getIfResponseWithSurveyIdAndEmailExist, getResponseDownloadUrl, getResponseFilteringValues, responseSelection

// EXTERNAL MODULE: external "@prisma/client"
var client_ = __webpack_require__(896330);
// EXTERNAL MODULE: ../../node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js
var react = __webpack_require__(922728);
// EXTERNAL MODULE: ../../packages/database/src/index.ts + 1 modules
var src = __webpack_require__(527610);
// EXTERNAL MODULE: ../../packages/types/common.ts
var common = __webpack_require__(733735);
// EXTERNAL MODULE: ../../packages/types/errors.ts
var errors = __webpack_require__(470641);
// EXTERNAL MODULE: ../../packages/types/responses.ts + 1 modules
var responses = __webpack_require__(333418);
// EXTERNAL MODULE: ../../packages/types/surveys/types.ts + 2 modules
var types = __webpack_require__(875863);
// EXTERNAL MODULE: ../../packages/lib/cache.ts
var cache = __webpack_require__(794356);
// EXTERNAL MODULE: ../../packages/lib/constants.ts
var constants = __webpack_require__(836919);
// EXTERNAL MODULE: ../../packages/lib/utils/validate.ts
var validate = __webpack_require__(860988);
// EXTERNAL MODULE: ../../packages/lib/display/cache.ts
var display_cache = __webpack_require__(765501);
;// ../../packages/lib/display/service.ts









const selectDisplay = {
    id: true,
    createdAt: true,
    updatedAt: true,
    surveyId: true,
    contactId: true,
    status: true
};
const getDisplayCountBySurveyId = (0,react.cache)(async (surveyId, filters)=>(0,cache/* cache */.P)(async ()=>{
        (0,validate/* validateInputs */.C)([
            surveyId,
            common/* ZId */.i4
        ]);
        try {
            const displayCount = await src/* prisma */.z.display.count({
                where: {
                    surveyId: surveyId,
                    ...filters && filters.createdAt && {
                        createdAt: {
                            gte: filters.createdAt.min,
                            lte: filters.createdAt.max
                        }
                    }
                }
            });
            return displayCount;
        } catch (error) {
            if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
                throw new errors/* DatabaseError */.a$(error.message);
            }
            throw error;
        }
    }, [
        `getDisplayCountBySurveyId-${surveyId}-${JSON.stringify(filters)}`
    ], {
        tags: [
            display_cache/* displayCache */.x.tag.bySurveyId(surveyId)
        ]
    })());
const deleteDisplay = async (displayId)=>{
    (0,validate/* validateInputs */.C)([
        displayId,
        common/* ZId */.i4
    ]);
    try {
        const display = await src/* prisma */.z.display.delete({
            where: {
                id: displayId
            },
            select: selectDisplay
        });
        display_cache/* displayCache */.x.revalidate({
            id: display.id,
            contactId: display.contactId,
            surveyId: display.surveyId
        });
        return display;
    } catch (error) {
        if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
            throw new errors/* DatabaseError */.a$(error.message);
        }
        throw error;
    }
};

// EXTERNAL MODULE: ../../packages/lib/responseNote/cache.ts
var responseNote_cache = __webpack_require__(832094);
;// ../../packages/lib/responseNote/service.ts











const responseNoteSelect = {
    id: true,
    createdAt: true,
    updatedAt: true,
    text: true,
    isEdited: true,
    isResolved: true,
    user: {
        select: {
            id: true,
            name: true
        }
    },
    response: {
        select: {
            id: true,
            surveyId: true
        }
    }
};
const createResponseNote = async (responseId, userId, text)=>{
    validateInputs([
        responseId,
        ZId
    ], [
        userId,
        ZId
    ], [
        text,
        ZString
    ]);
    try {
        const responseNote = await prisma.responseNote.create({
            data: {
                responseId: responseId,
                userId: userId,
                text: text
            },
            select: responseNoteSelect
        });
        responseCache.revalidate({
            id: responseNote.response.id,
            surveyId: responseNote.response.surveyId
        });
        responseNoteCache.revalidate({
            id: responseNote.id,
            responseId: responseNote.response.id
        });
        return responseNote;
    } catch (error) {
        console.error(error);
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            throw new DatabaseError(error.message);
        }
        throw error;
    }
};
const getResponseNote = (0,react.cache)(async (responseNoteId)=>(0,cache/* cache */.P)(async ()=>{
        try {
            const responseNote = await src/* prisma */.z.responseNote.findUnique({
                where: {
                    id: responseNoteId
                },
                select: {
                    ...responseNoteSelect,
                    responseId: true
                }
            });
            return responseNote;
        } catch (error) {
            console.error(error);
            if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
                throw new errors/* DatabaseError */.a$(error.message);
            }
            throw error;
        }
    }, [
        `getResponseNote-${responseNoteId}`
    ], {
        tags: [
            responseNote_cache/* responseNoteCache */.S.tag.byId(responseNoteId)
        ]
    })());
const getResponseNotes = (0,react.cache)(async (responseId)=>(0,cache/* cache */.P)(async ()=>{
        try {
            (0,validate/* validateInputs */.C)([
                responseId,
                common/* ZId */.i4
            ]);
            const responseNotes = await src/* prisma */.z.responseNote.findMany({
                where: {
                    responseId
                },
                select: responseNoteSelect
            });
            if (!responseNotes) {
                throw new errors/* ResourceNotFoundError */.CE("Response Notes by ResponseId", responseId);
            }
            return responseNotes;
        } catch (error) {
            console.error(error);
            if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
                throw new errors/* DatabaseError */.a$(error.message);
            }
            throw error;
        }
    }, [
        `getResponseNotes-${responseId}`
    ], {
        tags: [
            responseNote_cache/* responseNoteCache */.S.tag.byResponseId(responseId)
        ]
    })());
const updateResponseNote = async (responseNoteId, text)=>{
    validateInputs([
        responseNoteId,
        ZString
    ], [
        text,
        ZString
    ]);
    try {
        const updatedResponseNote = await prisma.responseNote.update({
            where: {
                id: responseNoteId
            },
            data: {
                text: text,
                updatedAt: new Date(),
                isEdited: true
            },
            select: responseNoteSelect
        });
        responseCache.revalidate({
            id: updatedResponseNote.response.id,
            surveyId: updatedResponseNote.response.surveyId
        });
        responseNoteCache.revalidate({
            id: updatedResponseNote.id,
            responseId: updatedResponseNote.response.id
        });
        return updatedResponseNote;
    } catch (error) {
        console.error(error);
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            throw new DatabaseError(error.message);
        }
        throw error;
    }
};
const resolveResponseNote = async (responseNoteId)=>{
    validateInputs([
        responseNoteId,
        ZString
    ]);
    try {
        const responseNote = await prisma.responseNote.update({
            where: {
                id: responseNoteId
            },
            data: {
                updatedAt: new Date(),
                isResolved: true
            },
            select: responseNoteSelect
        });
        responseCache.revalidate({
            id: responseNote.response.id,
            surveyId: responseNote.response.surveyId
        });
        responseNoteCache.revalidate({
            id: responseNote.id,
            responseId: responseNote.response.id
        });
        return responseNote;
    } catch (error) {
        console.error(error);
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            throw new DatabaseError(error.message);
        }
        throw error;
    }
};

// EXTERNAL MODULE: ../../packages/lib/storage/service.ts
var service = __webpack_require__(888843);
// EXTERNAL MODULE: ../../packages/lib/survey/service.ts
var survey_service = __webpack_require__(222118);
// EXTERNAL MODULE: ../../packages/lib/response/cache.ts
var response_cache = __webpack_require__(122522);
// EXTERNAL MODULE: ../../packages/lib/response/utils.ts
var utils = __webpack_require__(669037);
;// ../../packages/lib/response/service.ts



















const RESPONSES_PER_PAGE = 10;
const responseSelection = {
    id: true,
    createdAt: true,
    updatedAt: true,
    surveyId: true,
    finished: true,
    endingId: true,
    data: true,
    meta: true,
    ttc: true,
    variables: true,
    contactAttributes: true,
    singleUseId: true,
    language: true,
    displayId: true,
    contact: {
        select: {
            id: true,
            attributes: {
                select: {
                    attributeKey: true,
                    value: true
                }
            }
        }
    },
    tags: {
        select: {
            tag: {
                select: {
                    id: true,
                    createdAt: true,
                    updatedAt: true,
                    name: true,
                    environmentId: true
                }
            }
        }
    },
    notes: {
        select: {
            id: true,
            createdAt: true,
            updatedAt: true,
            text: true,
            user: {
                select: {
                    id: true,
                    name: true
                }
            },
            isResolved: true,
            isEdited: true
        }
    }
};
const getResponseContact = (responsePrisma)=>{
    if (!responsePrisma.contact) return null;
    return {
        id: responsePrisma.contact.id,
        userId: responsePrisma.contact.attributes.find((attribute)=>attribute.attributeKey.key === "userId")?.value
    };
};
const getResponsesByContactId = (0,react.cache)((contactId, page)=>(0,cache/* cache */.P)(async ()=>{
        (0,validate/* validateInputs */.C)([
            contactId,
            common/* ZId */.i4
        ], [
            page,
            common/* ZOptionalNumber */.Wo
        ]);
        try {
            const responsePrisma = await src/* prisma */.z.response.findMany({
                where: {
                    contactId
                },
                select: responseSelection,
                take: page ? constants/* ITEMS_PER_PAGE */.re : undefined,
                skip: page ? constants/* ITEMS_PER_PAGE */.re * (page - 1) : undefined,
                orderBy: {
                    createdAt: "desc"
                }
            });
            if (!responsePrisma) {
                throw new errors/* ResourceNotFoundError */.CE("Response from ContactId", contactId);
            }
            let responses = [];
            await Promise.all(responsePrisma.map(async (response)=>{
                const responseNotes = await getResponseNotes(response.id);
                const responseContact = {
                    id: response.contact?.id,
                    userId: response.contact?.attributes.find((attribute)=>attribute.attributeKey.key === "userId")?.value
                };
                responses.push({
                    ...response,
                    contact: responseContact,
                    notes: responseNotes,
                    tags: response.tags.map((tagPrisma)=>tagPrisma.tag)
                });
            }));
            return responses;
        } catch (error) {
            if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
                throw new errors/* DatabaseError */.a$(error.message);
            }
            throw error;
        }
    }, [
        `getResponsesByContactId-${contactId}-${page}`
    ], {
        tags: [
            response_cache/* responseCache */.Q.tag.byContactId(contactId)
        ]
    })());
const getResponseBySingleUseId = (0,react.cache)(async (surveyId, singleUseId)=>(0,cache/* cache */.P)(async ()=>{
        (0,validate/* validateInputs */.C)([
            surveyId,
            common/* ZId */.i4
        ], [
            singleUseId,
            common/* ZString */.eI
        ]);
        try {
            const responsePrisma = await src/* prisma */.z.response.findUnique({
                where: {
                    surveyId_singleUseId: {
                        surveyId,
                        singleUseId
                    }
                },
                select: responseSelection
            });
            if (!responsePrisma) {
                return null;
            }
            const response = {
                ...responsePrisma,
                contact: getResponseContact(responsePrisma),
                tags: responsePrisma.tags.map((tagPrisma)=>tagPrisma.tag)
            };
            return response;
        } catch (error) {
            if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
                throw new errors/* DatabaseError */.a$(error.message);
            }
            throw error;
        }
    }, [
        `getResponseBySingleUseId-${surveyId}-${singleUseId}`
    ], {
        tags: [
            response_cache/* responseCache */.Q.tag.bySingleUseId(surveyId, singleUseId)
        ]
    })());
const getResponse = (0,react.cache)(async (responseId)=>(0,cache/* cache */.P)(async ()=>{
        (0,validate/* validateInputs */.C)([
            responseId,
            common/* ZId */.i4
        ]);
        try {
            const responsePrisma = await src/* prisma */.z.response.findUnique({
                where: {
                    id: responseId
                },
                select: responseSelection
            });
            if (!responsePrisma) {
                return null;
            }
            const response = {
                ...responsePrisma,
                contact: getResponseContact(responsePrisma),
                tags: responsePrisma.tags.map((tagPrisma)=>tagPrisma.tag)
            };
            return response;
        } catch (error) {
            if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
                throw new errors/* DatabaseError */.a$(error.message);
            }
            throw error;
        }
    }, [
        `getResponse-${responseId}`
    ], {
        tags: [
            response_cache/* responseCache */.Q.tag.byId(responseId),
            responseNote_cache/* responseNoteCache */.S.tag.byResponseId(responseId)
        ]
    })());
const getResponseFilteringValues = (0,react.cache)(async (surveyId)=>(0,cache/* cache */.P)(async ()=>{
        (0,validate/* validateInputs */.C)([
            surveyId,
            common/* ZId */.i4
        ]);
        try {
            const survey = await (0,survey_service/* getSurvey */.Dp)(surveyId);
            if (!survey) {
                throw new errors/* ResourceNotFoundError */.CE("Survey", surveyId);
            }
            const responses = await src/* prisma */.z.response.findMany({
                where: {
                    surveyId
                },
                select: {
                    data: true,
                    meta: true,
                    contactAttributes: true
                }
            });
            const contactAttributes = (0,utils/* getResponseContactAttributes */.Ji)(responses);
            const meta = (0,utils/* getResponseMeta */.Ph)(responses);
            const hiddenFields = (0,utils/* getResponseHiddenFields */.n7)(survey, responses);
            return {
                contactAttributes,
                meta,
                hiddenFields
            };
        } catch (error) {
            if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
                throw new errors/* DatabaseError */.a$(error.message);
            }
            throw error;
        }
    }, [
        `getResponseFilteringValues-${surveyId}`
    ], {
        tags: [
            response_cache/* responseCache */.Q.tag.bySurveyId(surveyId)
        ]
    })());
const getResponses = (0,react.cache)(async (surveyId, limit, offset, filterCriteria)=>(0,cache/* cache */.P)(async ()=>{
        (0,validate/* validateInputs */.C)([
            surveyId,
            common/* ZId */.i4
        ], [
            limit,
            common/* ZOptionalNumber */.Wo
        ], [
            offset,
            common/* ZOptionalNumber */.Wo
        ], [
            filterCriteria,
            responses/* ZResponseFilterCriteria */.jT.optional()
        ]);
        limit = limit ?? RESPONSES_PER_PAGE;
        const survey = await (0,survey_service/* getSurvey */.Dp)(surveyId);
        if (!survey) return [];
        try {
            const responses = await src/* prisma */.z.response.findMany({
                where: {
                    surveyId,
                    ...(0,utils/* buildWhereClause */.hv)(survey, filterCriteria)
                },
                select: responseSelection,
                orderBy: [
                    {
                        createdAt: "desc"
                    }
                ],
                take: limit ? limit : undefined,
                skip: offset ? offset : undefined
            });
            const transformedResponses = await Promise.all(responses.map((responsePrisma)=>{
                return {
                    ...responsePrisma,
                    contact: getResponseContact(responsePrisma),
                    tags: responsePrisma.tags.map((tagPrisma)=>tagPrisma.tag)
                };
            }));
            return transformedResponses;
        } catch (error) {
            if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
                throw new errors/* DatabaseError */.a$(error.message);
            }
            throw error;
        }
    }, [
        `getResponses-${surveyId}-${limit}-${offset}-${JSON.stringify(filterCriteria)}`
    ], {
        tags: [
            response_cache/* responseCache */.Q.tag.bySurveyId(surveyId)
        ]
    })());
const getResponseDownloadUrl = async (surveyId, format, filterCriteria)=>{
    validateInputs([
        surveyId,
        ZId
    ], [
        format,
        ZString
    ], [
        filterCriteria,
        ZResponseFilterCriteria.optional()
    ]);
    try {
        const survey = await getSurvey(surveyId);
        if (!survey) {
            throw new ResourceNotFoundError("Survey", surveyId);
        }
        const environmentId = survey.environmentId;
        const accessType = "private";
        const batchSize = 3000;
        const responseCount = await getResponseCountBySurveyId(surveyId, filterCriteria);
        const pages = Math.ceil(responseCount / batchSize);
        const responsesArray = await Promise.all(Array.from({
            length: pages
        }, (_, i)=>{
            return getResponses(surveyId, batchSize, i * batchSize, filterCriteria);
        }));
        const responses = responsesArray.flat();
        const { metaDataFields, questions, hiddenFields, variables, userAttributes } = extractSurveyDetails(survey, responses);
        const headers = [
            "No.",
            "Response ID",
            "Timestamp",
            "Finished",
            "Survey ID",
            "Formbricks ID (internal)",
            "User ID",
            "Notes",
            "Tags",
            ...metaDataFields,
            ...questions,
            ...variables,
            ...hiddenFields,
            ...userAttributes
        ];
        if (survey.isVerifyEmailEnabled) {
            headers.push("Verified Email");
        }
        const jsonData = getResponsesJson(survey, responses, questions, userAttributes, hiddenFields);
        const fileName = getResponsesFileName(survey?.name || "", format);
        let fileBuffer;
        if (format === "xlsx") {
            fileBuffer = convertToXlsxBuffer(headers, jsonData);
        } else {
            const csvFile = await convertToCsv(headers, jsonData);
            fileBuffer = Buffer.from(csvFile);
        }
        await putFile(fileName, fileBuffer, accessType, environmentId);
        return `${WEBAPP_URL}/storage/${environmentId}/${accessType}/${fileName}`;
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            throw new DatabaseError(error.message);
        }
        throw error;
    }
};
const getResponsesByEnvironmentId = (0,react.cache)(async (environmentId, limit, offset)=>(0,cache/* cache */.P)(async ()=>{
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
            const responses = await src/* prisma */.z.response.findMany({
                where: {
                    survey: {
                        environmentId
                    }
                },
                select: responseSelection,
                orderBy: [
                    {
                        createdAt: "desc"
                    }
                ],
                take: limit ? limit : undefined,
                skip: offset ? offset : undefined
            });
            const transformedResponses = await Promise.all(responses.map(async (responsePrisma)=>{
                return {
                    ...responsePrisma,
                    contact: getResponseContact(responsePrisma),
                    tags: responsePrisma.tags.map((tagPrisma)=>tagPrisma.tag)
                };
            }));
            return transformedResponses;
        } catch (error) {
            if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
                throw new errors/* DatabaseError */.a$(error.message);
            }
            throw error;
        }
    }, [
        `getResponsesByEnvironmentId-${environmentId}-${limit}-${offset}`
    ], {
        tags: [
            response_cache/* responseCache */.Q.tag.byEnvironmentId(environmentId)
        ]
    })());
const updateResponse = async (responseId, responseInput)=>{
    (0,validate/* validateInputs */.C)([
        responseId,
        common/* ZId */.i4
    ], [
        responseInput,
        responses/* ZResponseUpdateInput */.Pf
    ]);
    try {
        // const currentResponse = await getResponse(responseId);
        // use direct prisma call to avoid cache issues
        const currentResponse = await src/* prisma */.z.response.findUnique({
            where: {
                id: responseId
            },
            select: responseSelection
        });
        if (!currentResponse) {
            throw new errors/* ResourceNotFoundError */.CE("Response", responseId);
        }
        // merge data object
        const data = {
            ...currentResponse.data,
            ...responseInput.data
        };
        const ttc = responseInput.ttc ? responseInput.finished ? (0,utils/* calculateTtcTotal */.I)(responseInput.ttc) : responseInput.ttc : {};
        const language = responseInput.language;
        const variables = {
            ...currentResponse.variables,
            ...responseInput.variables
        };
        const responsePrisma = await src/* prisma */.z.response.update({
            where: {
                id: responseId
            },
            data: {
                finished: responseInput.finished,
                endingId: responseInput.endingId,
                data,
                ttc,
                language,
                variables
            },
            select: responseSelection
        });
        const response = {
            ...responsePrisma,
            contact: getResponseContact(responsePrisma),
            tags: responsePrisma.tags.map((tagPrisma)=>tagPrisma.tag)
        };
        response_cache/* responseCache */.Q.revalidate({
            id: response.id,
            contactId: response.contact?.id,
            surveyId: response.surveyId
        });
        responseNote_cache/* responseNoteCache */.S.revalidate({
            responseId: response.id
        });
        return response;
    } catch (error) {
        if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
            throw new errors/* DatabaseError */.a$(error.message);
        }
        throw error;
    }
};
const findAndDeleteUploadedFilesInResponse = async (response, survey)=>{
    const fileUploadQuestions = new Set(survey.questions.filter((question)=>question.type === types/* TSurveyQuestionTypeEnum */.wn.FileUpload).map((q)=>q.id));
    const fileUrls = Object.entries(response.data).filter(([questionId])=>fileUploadQuestions.has(questionId)).flatMap(([, questionResponse])=>questionResponse);
    const deletionPromises = fileUrls.map(async (fileUrl)=>{
        try {
            const { pathname } = new URL(fileUrl);
            const [, environmentId, accessType, fileName] = pathname.split("/").filter(Boolean);
            if (!environmentId || !accessType || !fileName) {
                throw new Error(`Invalid file path: ${pathname}`);
            }
            return (0,service/* deleteFile */.Ww)(environmentId, accessType, fileName);
        } catch (error) {
            console.error(`Failed to delete file ${fileUrl}:`, error);
        }
    });
    await Promise.all(deletionPromises);
};
const deleteResponse = async (responseId)=>{
    (0,validate/* validateInputs */.C)([
        responseId,
        common/* ZId */.i4
    ]);
    try {
        const responsePrisma = await src/* prisma */.z.response.delete({
            where: {
                id: responseId
            },
            select: responseSelection
        });
        const responseNotes = await getResponseNotes(responsePrisma.id);
        const response = {
            ...responsePrisma,
            contact: getResponseContact(responsePrisma),
            notes: responseNotes,
            tags: responsePrisma.tags.map((tagPrisma)=>tagPrisma.tag)
        };
        if (response.displayId) {
            deleteDisplay(response.displayId);
        }
        const survey = await (0,survey_service/* getSurvey */.Dp)(response.surveyId);
        if (survey) {
            await findAndDeleteUploadedFilesInResponse({
                ...responsePrisma,
                contact: getResponseContact(responsePrisma),
                tags: responsePrisma.tags.map((tag)=>tag.tag)
            }, survey);
        }
        response_cache/* responseCache */.Q.revalidate({
            environmentId: survey?.environmentId,
            id: response.id,
            contactId: response.contact?.id,
            surveyId: response.surveyId
        });
        responseNote_cache/* responseNoteCache */.S.revalidate({
            responseId: response.id
        });
        return response;
    } catch (error) {
        if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
            throw new errors/* DatabaseError */.a$(error.message);
        }
        throw error;
    }
};
const getResponseCountBySurveyId = (0,react.cache)(async (surveyId, filterCriteria)=>(0,cache/* cache */.P)(async ()=>{
        (0,validate/* validateInputs */.C)([
            surveyId,
            common/* ZId */.i4
        ], [
            filterCriteria,
            responses/* ZResponseFilterCriteria */.jT.optional()
        ]);
        try {
            const survey = await (0,survey_service/* getSurvey */.Dp)(surveyId);
            if (!survey) return 0;
            const responseCount = await src/* prisma */.z.response.count({
                where: {
                    surveyId: surveyId,
                    ...(0,utils/* buildWhereClause */.hv)(survey, filterCriteria)
                }
            });
            return responseCount;
        } catch (error) {
            if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
                throw new errors/* DatabaseError */.a$(error.message);
            }
            throw error;
        }
    }, [
        `getResponseCountBySurveyId-${surveyId}-${JSON.stringify(filterCriteria)}`
    ], {
        tags: [
            response_cache/* responseCache */.Q.tag.bySurveyId(surveyId)
        ]
    })());
const getIfResponseWithSurveyIdAndEmailExist = (0,react.cache)(async (surveyId, email)=>(0,cache/* cache */.P)(async ()=>{
        (0,validate/* validateInputs */.C)([
            surveyId,
            common/* ZId */.i4
        ], [
            email,
            common/* ZString */.eI
        ]);
        try {
            const response = await src/* prisma */.z.response.findFirst({
                where: {
                    surveyId,
                    data: {
                        path: [
                            "verifiedEmail"
                        ],
                        equals: email
                    }
                },
                select: {
                    id: true
                }
            });
            return !!response;
        } catch (error) {
            if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
                throw new errors/* DatabaseError */.a$(error.message);
            }
            throw error;
        }
    }, [
        `getIfResponseWithSurveyIdAndEmailExist-${surveyId}-${email}`
    ], {
        tags: [
            response_cache/* responseCache */.Q.tag.bySurveyId(surveyId)
        ]
    })());


/***/ }),

/***/ 669037:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ calculateTtcTotal),
/* harmony export */   Ji: () => (/* binding */ getResponseContactAttributes),
/* harmony export */   Ph: () => (/* binding */ getResponseMeta),
/* harmony export */   hv: () => (/* binding */ buildWhereClause),
/* harmony export */   n7: () => (/* binding */ getResponseHiddenFields)
/* harmony export */ });
/* unused harmony exports getResponsesFileName, extracMetadataKeys, extractSurveyDetails, getResponsesJson */
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(896330);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);







const calculateTtcTotal = (ttc)=>{
    const result = {
        ...ttc
    };
    result._total = Object.values(result).reduce((acc, val)=>acc + val, 0);
    return result;
};
const buildWhereClause = (survey, filterCriteria)=>{
    const whereClause = [];
    // For finished
    if (filterCriteria?.finished !== undefined) {
        whereClause.push({
            finished: filterCriteria?.finished
        });
    }
    // For Date range
    if (filterCriteria?.createdAt) {
        const createdAt = {};
        if (filterCriteria?.createdAt?.max) {
            createdAt.lte = filterCriteria?.createdAt?.max;
        }
        if (filterCriteria?.createdAt?.min) {
            createdAt.gte = filterCriteria?.createdAt?.min;
        }
        whereClause.push({
            createdAt
        });
    }
    // For Tags
    if (filterCriteria?.tags) {
        const tags = [];
        if (filterCriteria?.tags?.applied) {
            const appliedTags = filterCriteria.tags.applied.map((name)=>({
                    tags: {
                        some: {
                            tag: {
                                name
                            }
                        }
                    }
                }));
            tags.push(appliedTags);
        }
        if (filterCriteria?.tags?.notApplied) {
            const notAppliedTags = {
                tags: {
                    every: {
                        tag: {
                            name: {
                                notIn: filterCriteria.tags.notApplied
                            }
                        }
                    }
                }
            };
            tags.push(notAppliedTags);
        }
        whereClause.push({
            AND: tags.flat()
        });
    }
    // For Person Attributes
    if (filterCriteria?.contactAttributes) {
        const contactAttributes = [];
        Object.entries(filterCriteria.contactAttributes).forEach(([key, val])=>{
            switch(val.op){
                case "equals":
                    contactAttributes.push({
                        contactAttributes: {
                            path: [
                                key
                            ],
                            equals: val.value
                        }
                    });
                    break;
                case "notEquals":
                    contactAttributes.push({
                        contactAttributes: {
                            path: [
                                key
                            ],
                            not: val.value
                        }
                    });
                    break;
            }
        });
        whereClause.push({
            AND: contactAttributes
        });
    }
    // for meta
    if (filterCriteria?.meta) {
        const meta = [];
        Object.entries(filterCriteria.meta).forEach(([key, val])=>{
            let updatedKey = [];
            if ([
                "browser",
                "os",
                "device"
            ].includes(key)) {
                updatedKey = [
                    "userAgent",
                    key
                ];
            } else {
                updatedKey = [
                    key
                ];
            }
            switch(val.op){
                case "equals":
                    meta.push({
                        meta: {
                            path: updatedKey,
                            equals: val.value
                        }
                    });
                    break;
                case "notEquals":
                    meta.push({
                        meta: {
                            path: updatedKey,
                            not: val.value
                        }
                    });
                    break;
            }
        });
        whereClause.push({
            AND: meta
        });
    }
    // For Language
    if (filterCriteria?.others) {
        const others = [];
        Object.entries(filterCriteria.others).forEach(([key, val])=>{
            switch(val.op){
                case "equals":
                    others.push({
                        [key.toLocaleLowerCase()]: val.value
                    });
                    break;
                case "notEquals":
                    others.push({
                        [key.toLocaleLowerCase()]: {
                            not: val.value
                        }
                    });
                    break;
            }
        });
        whereClause.push({
            AND: others
        });
    }
    // For Questions Data
    if (filterCriteria?.data) {
        const data = [];
        Object.entries(filterCriteria.data).forEach(([key, val])=>{
            const question = survey.questions.find((question)=>question.id === key);
            switch(val.op){
                case "submitted":
                    data.push({
                        data: {
                            path: [
                                key
                            ],
                            not: _prisma_client__WEBPACK_IMPORTED_MODULE_0__.Prisma.DbNull
                        }
                    });
                    break;
                case "filledOut":
                    data.push({
                        data: {
                            path: [
                                key
                            ],
                            not: []
                        }
                    });
                    break;
                case "skipped":
                    data.push({
                        OR: [
                            {
                                data: {
                                    path: [
                                        key
                                    ],
                                    equals: _prisma_client__WEBPACK_IMPORTED_MODULE_0__.Prisma.DbNull
                                }
                            },
                            {
                                data: {
                                    path: [
                                        key
                                    ],
                                    equals: ""
                                }
                            },
                            // For address question
                            {
                                data: {
                                    path: [
                                        key
                                    ],
                                    equals: []
                                }
                            }
                        ]
                    });
                    break;
                case "equals":
                    data.push({
                        data: {
                            path: [
                                key
                            ],
                            equals: val.value
                        }
                    });
                    break;
                case "notEquals":
                    data.push({
                        OR: [
                            {
                                // for value not equal to val.value
                                data: {
                                    path: [
                                        key
                                    ],
                                    not: val.value
                                }
                            },
                            {
                                // for not answered
                                data: {
                                    path: [
                                        key
                                    ],
                                    equals: _prisma_client__WEBPACK_IMPORTED_MODULE_0__.Prisma.DbNull
                                }
                            }
                        ]
                    });
                    break;
                case "lessThan":
                    data.push({
                        data: {
                            path: [
                                key
                            ],
                            lt: val.value
                        }
                    });
                    break;
                case "lessEqual":
                    data.push({
                        data: {
                            path: [
                                key
                            ],
                            lte: val.value
                        }
                    });
                    break;
                case "greaterThan":
                    data.push({
                        data: {
                            path: [
                                key
                            ],
                            gt: val.value
                        }
                    });
                    break;
                case "greaterEqual":
                    data.push({
                        data: {
                            path: [
                                key
                            ],
                            gte: val.value
                        }
                    });
                    break;
                case "includesAll":
                    data.push({
                        data: {
                            path: [
                                key
                            ],
                            array_contains: val.value
                        }
                    });
                    break;
                case "includesOne":
                    // * If the question includes an 'other' choice and the user has selected it:
                    // *   - `predefinedLabels`: Collects labels from the question's choices that aren't selected by the user.
                    // *   - `subsets`: Generates all possible non-empty permutations of subsets of these predefined labels.
                    // *
                    // * Depending on the question type (multiple or single choice), the filter is constructed:
                    // *   - For "multipleChoiceMulti": Filters out any combinations of choices that match the subsets of predefined labels.
                    // *   - For "multipleChoiceSingle": Filters out any single predefined labels that match the user's selection.
                    const values = val.value.map((v)=>v.toString());
                    const otherChoice = question && (question.type === "multipleChoiceMulti" || question.type === "multipleChoiceSingle") ? question.choices.find((choice)=>choice.id === "other") : null;
                    if (question && (question.type === "multipleChoiceMulti" || question.type === "multipleChoiceSingle") && question.choices.map((choice)=>choice.id).includes("other") && otherChoice && values.includes(otherChoice.label.default)) {
                        const predefinedLabels = [];
                        question.choices.forEach((choice)=>{
                            Object.values(choice.label).forEach((label)=>{
                                if (!values.includes(label)) {
                                    predefinedLabels.push(label);
                                }
                            });
                        });
                        const subsets = generateAllPermutationsOfSubsets(predefinedLabels);
                        if (question.type === "multipleChoiceMulti") {
                            const subsetConditions = subsets.map((subset)=>({
                                    data: {
                                        path: [
                                            key
                                        ],
                                        equals: subset
                                    }
                                }));
                            data.push({
                                NOT: {
                                    OR: subsetConditions
                                }
                            });
                        } else {
                            data.push(// for MultipleChoiceSingle
                            {
                                AND: predefinedLabels.map((label)=>({
                                        NOT: {
                                            data: {
                                                path: [
                                                    key
                                                ],
                                                equals: label
                                            }
                                        }
                                    }))
                            });
                        }
                    } else {
                        data.push({
                            OR: val.value.map((value)=>({
                                    OR: [
                                        // for MultipleChoiceMulti
                                        {
                                            data: {
                                                path: [
                                                    key
                                                ],
                                                array_contains: [
                                                    value
                                                ]
                                            }
                                        },
                                        // for MultipleChoiceSingle
                                        {
                                            data: {
                                                path: [
                                                    key
                                                ],
                                                equals: value
                                            }
                                        }
                                    ]
                                }))
                        });
                    }
                    break;
                case "uploaded":
                    data.push({
                        data: {
                            path: [
                                key
                            ],
                            not: "skipped"
                        }
                    });
                    break;
                case "notUploaded":
                    data.push({
                        OR: [
                            {
                                // for skipped
                                data: {
                                    path: [
                                        key
                                    ],
                                    equals: "skipped"
                                }
                            },
                            {
                                // for not answered
                                data: {
                                    path: [
                                        key
                                    ],
                                    equals: _prisma_client__WEBPACK_IMPORTED_MODULE_0__.Prisma.DbNull
                                }
                            }
                        ]
                    });
                    break;
                case "clicked":
                    data.push({
                        data: {
                            path: [
                                key
                            ],
                            equals: "clicked"
                        }
                    });
                    break;
                case "accepted":
                    data.push({
                        data: {
                            path: [
                                key
                            ],
                            equals: "accepted"
                        }
                    });
                    break;
                case "booked":
                    data.push({
                        data: {
                            path: [
                                key
                            ],
                            equals: "booked"
                        }
                    });
                    break;
                case "matrix":
                    const rowLabel = Object.keys(val.value)[0];
                    data.push({
                        data: {
                            path: [
                                key,
                                rowLabel
                            ],
                            equals: val.value[rowLabel]
                        }
                    });
                    break;
            }
        });
        whereClause.push({
            AND: data
        });
    }
    return {
        AND: whereClause
    };
};
const getResponsesFileName = (surveyName, extension)=>{
    const sanitizedSurveyName = sanitizeString(surveyName);
    const formattedDateString = getTodaysDateTimeFormatted("-");
    return `export-${sanitizedSurveyName.split(" ").join("-")}-${formattedDateString}.${extension}`.toLocaleLowerCase();
};
const extracMetadataKeys = (obj)=>{
    let keys = [];
    Object.entries(obj ?? {}).forEach(([key, value])=>{
        if (typeof value === "object" && value !== null) {
            Object.entries(value).forEach(([subKey])=>{
                keys.push(key + " - " + subKey);
            });
        } else {
            keys.push(key);
        }
    });
    return keys;
};
const extractSurveyDetails = (survey, responses)=>{
    const metaDataFields = responses.length > 0 ? extracMetadataKeys(responses[0].meta) : [];
    const questions = survey.questions.map((question, idx)=>{
        const headline = getLocalizedValue(question.headline, "default") ?? question.id;
        return `${idx + 1}. ${headline}`;
    });
    const hiddenFields = survey.hiddenFields?.fieldIds || [];
    const userAttributes = survey.type === "app" ? Array.from(new Set(responses.map((response)=>Object.keys(response.contactAttributes ?? {})).flat())) : [];
    const variables = survey.variables?.map((variable)=>variable.name) || [];
    return {
        metaDataFields,
        questions,
        hiddenFields,
        variables,
        userAttributes
    };
};
const getResponsesJson = (survey, responses, questions, userAttributes, hiddenFields)=>{
    const jsonData = [];
    responses.forEach((response, idx)=>{
        // basic response details
        jsonData.push({
            "No.": idx + 1,
            "Response ID": response.id,
            Timestamp: getFormattedDateTimeString(response.createdAt),
            Finished: response.finished ? "Yes" : "No",
            "Survey ID": response.surveyId,
            "Formbricks ID (internal)": response.contact?.id || "",
            "User ID": response.contact?.userId || "",
            Notes: response.notes.map((note)=>`${note.user.name}: ${note.text}`).join("\n"),
            Tags: response.tags.map((tag)=>tag.name).join(", ")
        });
        // meta details
        Object.entries(response.meta ?? {}).forEach(([key, value])=>{
            if (typeof value === "object" && value !== null) {
                Object.entries(value).forEach(([subKey, subValue])=>{
                    jsonData[idx][key + " - " + subKey] = subValue;
                });
            } else {
                jsonData[idx][key] = value;
            }
        });
        // survey response data
        questions.forEach((question, i)=>{
            const questionId = survey?.questions[i].id || "";
            const answer = response.data[questionId];
            jsonData[idx][question] = processResponseData(answer);
        });
        survey.variables?.forEach((variable)=>{
            const answer = response.variables[variable.id];
            jsonData[idx][variable.name] = answer;
        });
        // user attributes
        userAttributes.forEach((attribute)=>{
            jsonData[idx][attribute] = response.contactAttributes?.[attribute] || "";
        });
        // hidden fields
        hiddenFields.forEach((field)=>{
            const value = response.data[field];
            if (Array.isArray(value)) {
                jsonData[idx][field] = value.join("; ");
            } else {
                jsonData[idx][field] = processResponseData(value);
            }
        });
        if (survey.isVerifyEmailEnabled) {
            const verifiedEmail = response.data["verifiedEmail"];
            jsonData[idx]["Verified Email"] = processResponseData(verifiedEmail);
        }
    });
    return jsonData;
};
const getResponseContactAttributes = (responses)=>{
    try {
        let attributes = {};
        responses.forEach((response)=>{
            Object.keys(response.contactAttributes ?? {}).forEach((key)=>{
                if (response.contactAttributes && attributes[key]) {
                    attributes[key].push(response.contactAttributes[key].toString());
                } else if (response.contactAttributes) {
                    attributes[key] = [
                        response.contactAttributes[key].toString()
                    ];
                }
            });
        });
        Object.keys(attributes).forEach((key)=>{
            attributes[key] = Array.from(new Set(attributes[key]));
        });
        return attributes;
    } catch (error) {
        throw error;
    }
};
const getResponseMeta = (responses)=>{
    try {
        const meta = {};
        responses.forEach((response)=>{
            Object.entries(response.meta).forEach(([key, value])=>{
                // skip url
                if (key === "url") return;
                // Handling nested objects (like userAgent)
                if (typeof value === "object" && value !== null) {
                    Object.entries(value).forEach(([nestedKey, nestedValue])=>{
                        if (typeof nestedValue === "string" && nestedValue) {
                            if (!meta[nestedKey]) {
                                meta[nestedKey] = new Set();
                            }
                            meta[nestedKey].add(nestedValue);
                        }
                    });
                } else if (typeof value === "string" && value) {
                    if (!meta[key]) {
                        meta[key] = new Set();
                    }
                    meta[key].add(value);
                }
            });
        });
        // Convert Set to Array
        const result = Object.fromEntries(Object.entries(meta).map(([key, valueSet])=>[
                key,
                Array.from(valueSet)
            ]));
        return result;
    } catch (error) {
        throw error;
    }
};
const getResponseHiddenFields = (survey, responses)=>{
    try {
        const hiddenFields = {};
        const surveyHiddenFields = survey?.hiddenFields.fieldIds;
        const hasHiddenFields = surveyHiddenFields && surveyHiddenFields.length > 0;
        if (hasHiddenFields) {
            // adding hidden fields to meta
            survey?.hiddenFields.fieldIds?.forEach((fieldId)=>{
                hiddenFields[fieldId] = new Set();
            });
            responses.forEach((response)=>{
                // Handling data fields(Hidden fields)
                surveyHiddenFields?.forEach((fieldId)=>{
                    const hiddenFieldValue = response.data[fieldId];
                    if (hiddenFieldValue) {
                        if (typeof hiddenFieldValue === "string") {
                            hiddenFields[fieldId].add(hiddenFieldValue);
                        }
                    }
                });
            });
        }
        // Convert Set to Array
        const result = Object.fromEntries(Object.entries(hiddenFields).map(([key, valueSet])=>[
                key,
                Array.from(valueSet)
            ]));
        return result;
    } catch (error) {
        throw error;
    }
};
const generateAllPermutationsOfSubsets = (array)=>{
    const subsets = [];
    // Helper function to generate permutations of an array
    const generatePermutations = (arr)=>{
        const permutations = [];
        // Recursive function to generate permutations
        const permute = (current, remaining)=>{
            if (remaining.length === 0) {
                permutations.push(current.slice()); // Make a copy of the current permutation
                return;
            }
            for(let i = 0; i < remaining.length; i++){
                current.push(remaining[i]);
                permute(current, remaining.slice(0, i).concat(remaining.slice(i + 1)));
                current.pop();
            }
        };
        permute([], arr);
        return permutations;
    };
    // Recursive function to generate subsets
    const findSubsets = (currentIndex, currentSubset)=>{
        if (currentIndex === array.length) {
            if (currentSubset.length > 0) {
                // Skip empty subset if not needed
                const allPermutations = generatePermutations(currentSubset);
                subsets.push(...allPermutations); // Spread operator to add all permutations individually
            }
            return;
        }
        // Include the current element
        findSubsets(currentIndex + 1, currentSubset.concat(array[currentIndex]));
        // Exclude the current element
        findSubsets(currentIndex + 1, currentSubset);
    };
    findSubsets(0, []);
    return subsets;
};


/***/ }),

/***/ 832094:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ responseNoteCache)
/* harmony export */ });
/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87863);
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

/***/ 888843:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BY: () => (/* binding */ putFileToLocalStorage),
/* harmony export */   H2: () => (/* binding */ getUploadSignedUrl),
/* harmony export */   IT: () => (/* binding */ getLocalFile),
/* harmony export */   Pe: () => (/* binding */ getS3File),
/* harmony export */   Ww: () => (/* binding */ deleteFile)
/* harmony export */ });
/* unused harmony exports getS3Client, testS3BucketAccess, getS3UploadSignedUrl, putFile, deleteLocalFile, deleteS3File, deleteS3FilesByEnvironmentId, deleteLocalFilesByEnvironmentId */
/* harmony import */ var _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(191043);
/* harmony import */ var _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _aws_sdk_s3_presigned_post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(741000);
/* harmony import */ var _aws_sdk_s3_presigned_post__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_aws_sdk_s3_presigned_post__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _aws_sdk_s3_request_presigner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(531701);
/* harmony import */ var _aws_sdk_s3_request_presigner__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_aws_sdk_s3_request_presigner__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(455511);
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(79748);
/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(fs_promises__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var mime_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(468728);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(333873);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(836919);
/* harmony import */ var _crypto__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(549673);
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(162437);










// S3Client Singleton
let s3ClientInstance = null;
const getS3Client = ()=>{
    if (!s3ClientInstance) {
        const credentials = _constants__WEBPACK_IMPORTED_MODULE_7__/* .S3_ACCESS_KEY */ .Ik && _constants__WEBPACK_IMPORTED_MODULE_7__/* .S3_SECRET_KEY */ .Wg ? {
            accessKeyId: _constants__WEBPACK_IMPORTED_MODULE_7__/* .S3_ACCESS_KEY */ .Ik,
            secretAccessKey: _constants__WEBPACK_IMPORTED_MODULE_7__/* .S3_SECRET_KEY */ .Wg
        } : undefined;
        s3ClientInstance = new _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_0__.S3Client({
            credentials,
            region: _constants__WEBPACK_IMPORTED_MODULE_7__/* .S3_REGION */ .Yj,
            ..._constants__WEBPACK_IMPORTED_MODULE_7__/* .S3_ENDPOINT_URL */ .Xc && {
                endpoint: _constants__WEBPACK_IMPORTED_MODULE_7__/* .S3_ENDPOINT_URL */ .Xc
            },
            forcePathStyle: _constants__WEBPACK_IMPORTED_MODULE_7__/* .S3_FORCE_PATH_STYLE */ .vh
        });
    }
    return s3ClientInstance;
};
const testS3BucketAccess = async ()=>{
    const s3Client = getS3Client();
    try {
        // Attempt to retrieve metadata about the bucket
        const headBucketCommand = new HeadBucketCommand({
            Bucket: S3_BUCKET_NAME
        });
        await s3Client.send(headBucketCommand);
        return true;
    } catch (error) {
        console.error(`Failed to access S3 bucket: ${error}`);
        throw new Error(`S3 Bucket Access Test Failed: ${error}`);
    }
};
const ensureDirectoryExists = async (dirPath)=>{
    try {
        await (0,fs_promises__WEBPACK_IMPORTED_MODULE_4__.access)(dirPath);
    } catch (error) {
        if (error.code === "ENOENT") {
            await (0,fs_promises__WEBPACK_IMPORTED_MODULE_4__.mkdir)(dirPath, {
                recursive: true
            });
        } else {
            throw error;
        }
    }
};
const getS3SignedUrl = async (fileKey)=>{
    const [_, accessType] = fileKey.split("/");
    const expiresIn = accessType === "public" ? 60 * 60 : 10 * 60;
    const getObjectCommand = new _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_0__.GetObjectCommand({
        Bucket: _constants__WEBPACK_IMPORTED_MODULE_7__/* .S3_BUCKET_NAME */ .MT,
        Key: fileKey
    });
    try {
        const s3Client = getS3Client();
        return await (0,_aws_sdk_s3_request_presigner__WEBPACK_IMPORTED_MODULE_2__.getSignedUrl)(s3Client, getObjectCommand, {
            expiresIn
        });
    } catch (err) {
        throw err;
    }
};
const getS3File = async (fileKey)=>{
    const signedUrl = await getS3SignedUrl(fileKey);
    return signedUrl;
};
const getLocalFile = async (filePath)=>{
    try {
        const safeFilePath = path__WEBPACK_IMPORTED_MODULE_6___default().resolve(process.cwd(), filePath);
        const file = await (0,fs_promises__WEBPACK_IMPORTED_MODULE_4__.readFile)(safeFilePath);
        let contentType = "";
        try {
            contentType = (0,mime_types__WEBPACK_IMPORTED_MODULE_5__.lookup)(filePath) || "";
        } catch (err) {
            throw err;
        }
        return {
            fileBuffer: file,
            metaData: {
                contentType: contentType ?? ""
            }
        };
    } catch (err) {
        throw err;
    }
};
// a single service for generating a signed url based on user's environment variables
const getUploadSignedUrl = async (fileName, environmentId, fileType, accessType, isBiggerFileUploadAllowed = false)=>{
    // add a unique id to the file name
    const fileExtension = fileName.split(".").pop();
    const fileNameWithoutExtension = fileName.split(".").slice(0, -1).join(".");
    if (!fileExtension) {
        throw new Error("File extension not found");
    }
    const updatedFileName = `${fileNameWithoutExtension}--fid--${(0,crypto__WEBPACK_IMPORTED_MODULE_3__.randomUUID)()}.${fileExtension}`;
    // handle the local storage case first
    if (!(0,_constants__WEBPACK_IMPORTED_MODULE_7__/* .isS3Configured */ .$Y)()) {
        try {
            const { signature, timestamp, uuid } = (0,_crypto__WEBPACK_IMPORTED_MODULE_8__/* .generateLocalSignedUrl */ .C7)(updatedFileName, environmentId, fileType);
            return {
                signedUrl: accessType === "private" ? new URL(`${_constants__WEBPACK_IMPORTED_MODULE_7__/* .WEBAPP_URL */ .YW}/api/v1/client/${environmentId}/storage/local`).href : new URL(`${_constants__WEBPACK_IMPORTED_MODULE_7__/* .WEBAPP_URL */ .YW}/api/v1/management/storage/local`).href,
                signingData: {
                    signature,
                    timestamp,
                    uuid
                },
                updatedFileName,
                fileUrl: new URL(`${_constants__WEBPACK_IMPORTED_MODULE_7__/* .WEBAPP_URL */ .YW}/storage/${environmentId}/${accessType}/${updatedFileName}`).href
            };
        } catch (err) {
            throw err;
        }
    }
    try {
        const { presignedFields, signedUrl } = await getS3UploadSignedUrl(updatedFileName, fileType, accessType, environmentId, isBiggerFileUploadAllowed);
        return {
            signedUrl,
            presignedFields,
            fileUrl: new URL(`${_constants__WEBPACK_IMPORTED_MODULE_7__/* .WEBAPP_URL */ .YW}/storage/${environmentId}/${accessType}/${updatedFileName}`).href
        };
    } catch (err) {
        throw err;
    }
};
const getS3UploadSignedUrl = async (fileName, contentType, accessType, environmentId, isBiggerFileUploadAllowed = false)=>{
    const maxSize = _constants__WEBPACK_IMPORTED_MODULE_7__/* .IS_FORMBRICKS_CLOUD */ .Si ? isBiggerFileUploadAllowed ? _constants__WEBPACK_IMPORTED_MODULE_7__/* .MAX_SIZES */ .gB.big : _constants__WEBPACK_IMPORTED_MODULE_7__/* .MAX_SIZES */ .gB.standard : Infinity;
    const postConditions = _constants__WEBPACK_IMPORTED_MODULE_7__/* .IS_FORMBRICKS_CLOUD */ .Si ? [
        [
            "content-length-range",
            0,
            maxSize
        ]
    ] : undefined;
    try {
        const s3Client = getS3Client();
        const { fields, url } = await (0,_aws_sdk_s3_presigned_post__WEBPACK_IMPORTED_MODULE_1__.createPresignedPost)(s3Client, {
            Expires: 10 * 60,
            Bucket: _env__WEBPACK_IMPORTED_MODULE_9__/* .env */ ._.S3_BUCKET_NAME,
            Key: `${environmentId}/${accessType}/${fileName}`,
            Fields: {
                "Content-Type": contentType,
                "Content-Encoding": "base64"
            },
            Conditions: postConditions
        });
        return {
            signedUrl: url,
            presignedFields: fields
        };
    } catch (err) {
        throw err;
    }
};
const putFileToLocalStorage = async (fileName, fileBuffer, accessType, environmentId, rootDir, isBiggerFileUploadAllowed = false)=>{
    try {
        await ensureDirectoryExists(`${rootDir}/${environmentId}/${accessType}`);
        const uploadPath = `${rootDir}/${environmentId}/${accessType}/${fileName}`;
        const buffer = Buffer.from(fileBuffer);
        const bufferBytes = buffer.byteLength;
        const maxSize = _constants__WEBPACK_IMPORTED_MODULE_7__/* .IS_FORMBRICKS_CLOUD */ .Si ? isBiggerFileUploadAllowed ? _constants__WEBPACK_IMPORTED_MODULE_7__/* .MAX_SIZES */ .gB.big : _constants__WEBPACK_IMPORTED_MODULE_7__/* .MAX_SIZES */ .gB.standard : Infinity;
        if (bufferBytes > maxSize) {
            const err = new Error(`File size exceeds the ${maxSize / (1024 * 1024)} MB limit`);
            err.name = "FileTooLargeError";
            throw err;
        }
        await (0,fs_promises__WEBPACK_IMPORTED_MODULE_4__.writeFile)(uploadPath, buffer);
    } catch (err) {
        throw err;
    }
};
// a single service to put file in the storage(local or S3), based on the S3 configuration
const putFile = async (fileName, fileBuffer, accessType, environmentId)=>{
    try {
        if (!isS3Configured()) {
            await putFileToLocalStorage(fileName, fileBuffer, accessType, environmentId, UPLOADS_DIR);
            return {
                success: true,
                message: "File uploaded"
            };
        } else {
            const input = {
                Body: fileBuffer,
                Bucket: S3_BUCKET_NAME,
                Key: `${environmentId}/${accessType}/${fileName}`
            };
            const command = new PutObjectCommand(input);
            const s3Client = getS3Client();
            await s3Client.send(command);
            return {
                success: true,
                message: "File uploaded"
            };
        }
    } catch (err) {
        throw err;
    }
};
const deleteFile = async (environmentId, accessType, fileName)=>{
    if (!(0,_constants__WEBPACK_IMPORTED_MODULE_7__/* .isS3Configured */ .$Y)()) {
        try {
            await deleteLocalFile(path__WEBPACK_IMPORTED_MODULE_6___default().join(_constants__WEBPACK_IMPORTED_MODULE_7__/* .UPLOADS_DIR */ .xG, environmentId, accessType, fileName));
            return {
                success: true,
                message: "File deleted"
            };
        } catch (err) {
            if (err.code !== "ENOENT") {
                return {
                    success: false,
                    message: err.message ?? "Something went wrong"
                };
            }
            return {
                success: false,
                message: "File not found",
                code: 404
            };
        }
    }
    try {
        await deleteS3File(`${environmentId}/${accessType}/${fileName}`);
        return {
            success: true,
            message: "File deleted"
        };
    } catch (err) {
        if (err.name === "NoSuchKey") {
            return {
                success: false,
                message: "File not found",
                code: 404
            };
        } else {
            return {
                success: false,
                message: err.message ?? "Something went wrong"
            };
        }
    }
};
const deleteLocalFile = async (filePath)=>{
    try {
        await (0,fs_promises__WEBPACK_IMPORTED_MODULE_4__.unlink)(filePath);
    } catch (err) {
        throw err;
    }
};
const deleteS3File = async (fileKey)=>{
    const deleteObjectCommand = new _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_0__.DeleteObjectCommand({
        Bucket: _constants__WEBPACK_IMPORTED_MODULE_7__/* .S3_BUCKET_NAME */ .MT,
        Key: fileKey
    });
    try {
        const s3Client = getS3Client();
        await s3Client.send(deleteObjectCommand);
    } catch (err) {
        throw err;
    }
};
const deleteS3FilesByEnvironmentId = async (environmentId)=>{
    try {
        // List all objects in the bucket with the prefix of environmentId
        const s3Client = getS3Client();
        const listObjectsOutput = await s3Client.send(new ListObjectsCommand({
            Bucket: S3_BUCKET_NAME,
            Prefix: environmentId
        }));
        if (listObjectsOutput.Contents) {
            const objectsToDelete = listObjectsOutput.Contents.map((obj)=>{
                return {
                    Key: obj.Key
                };
            });
            if (!objectsToDelete.length) {
                // no objects to delete
                return null;
            }
            // Delete the objects
            await s3Client.send(new DeleteObjectsCommand({
                Bucket: S3_BUCKET_NAME,
                Delete: {
                    Objects: objectsToDelete
                }
            }));
        } else {
            // no objects to delete
            return null;
        }
    } catch (err) {
        throw err;
    }
};
const deleteLocalFilesByEnvironmentId = async (environmentId)=>{
    const dirPath = join(UPLOADS_DIR, environmentId);
    try {
        await ensureDirectoryExists(dirPath);
        await rmdir(dirPath, {
            recursive: true
        });
    } catch (err) {
        throw err;
    }
};


/***/ }),

/***/ 333418:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  wc: () => (/* binding */ ZResponse),
  jT: () => (/* binding */ ZResponseFilterCriteria),
  ru: () => (/* binding */ ZResponseHiddenFieldValue),
  Wv: () => (/* binding */ ZResponseInput),
  $u: () => (/* binding */ ZResponseUpdate),
  Pf: () => (/* binding */ ZResponseUpdateInput)
});

// UNUSED EXPORTS: ZResponseContact, ZResponseContactAttributes, ZResponseData, ZResponseDataValue, ZResponseFilterCondition, ZResponseHiddenFieldsFilter, ZResponseMeta, ZResponseNote, ZResponseNoteUser, ZResponseTableData, ZResponseTtc, ZResponseVariables, ZResponseWithSurvey, ZSurveyContactAttributes, ZSurveyMetaFieldFilter

// EXTERNAL MODULE: ../../node_modules/zod/lib/index.mjs
var lib = __webpack_require__(545198);
// EXTERNAL MODULE: ../../packages/types/common.ts
var common = __webpack_require__(733735);
// EXTERNAL MODULE: ../../packages/types/surveys/types.ts + 2 modules
var types = __webpack_require__(875863);
;// ../../packages/types/tags.ts

const ZTag = lib.z.object({
    id: lib.z.string().cuid2(),
    createdAt: lib.z.date(),
    updatedAt: lib.z.date(),
    name: lib.z.string(),
    environmentId: lib.z.string()
});
const ZTagsCount = lib.z.array(lib.z.object({
    tagId: lib.z.string().cuid2(),
    count: lib.z.number()
}));
const ZTagsOnResponses = lib.z.object({
    responseId: lib.z.string(),
    tagId: lib.z.string()
});

;// ../../packages/types/responses.ts




const ZResponseDataValue = lib.z.union([
    lib.z.string(),
    lib.z.number(),
    lib.z.array(lib.z.string()),
    lib.z.record(lib.z.string())
]);
const ZResponseFilterCondition = lib.z.enum([
    "accepted",
    "clicked",
    "submitted",
    "skipped",
    "equals",
    "notEquals",
    "lessThan",
    "lessEqual",
    "greaterThan",
    "greaterEqual",
    "includesAll",
    "includesOne",
    "uploaded",
    "notUploaded",
    "booked",
    "isCompletelySubmitted",
    "isPartiallySubmitted"
]);
const ZResponseData = lib.z.record(ZResponseDataValue);
const ZResponseVariables = lib.z.record(lib.z.union([
    lib.z.string(),
    lib.z.number()
]));
const ZResponseTtc = lib.z.record(lib.z.number());
const ZResponseContactAttributes = lib.z.record(lib.z.string()).nullable();
const ZSurveyContactAttributes = lib.z.record(lib.z.array(lib.z.string()));
const ZSurveyMetaFieldFilter = lib.z.record(lib.z.array(lib.z.string()));
const ZResponseHiddenFieldsFilter = lib.z.record(lib.z.array(lib.z.string()));
const ZResponseFilterCriteriaDataLessThan = lib.z.object({
    op: lib.z.literal(ZResponseFilterCondition.Values.lessThan),
    value: lib.z.number()
});
const ZResponseFilterCriteriaDataLessEqual = lib.z.object({
    op: lib.z.literal(ZResponseFilterCondition.Values.lessEqual),
    value: lib.z.number()
});
const ZResponseFilterCriteriaDataGreaterEqual = lib.z.object({
    op: lib.z.literal(ZResponseFilterCondition.Values.greaterEqual),
    value: lib.z.number()
});
const ZResponseFilterCriteriaDataGreaterThan = lib.z.object({
    op: lib.z.literal(ZResponseFilterCondition.Values.greaterThan),
    value: lib.z.number()
});
const ZResponseFilterCriteriaDataIncludesOne = lib.z.object({
    op: lib.z.literal(ZResponseFilterCondition.Values.includesOne),
    value: lib.z.union([
        lib.z.array(lib.z.string()),
        lib.z.array(lib.z.number())
    ])
});
const ZResponseFilterCriteriaDataIncludesAll = lib.z.object({
    op: lib.z.literal(ZResponseFilterCondition.Values.includesAll),
    value: lib.z.array(lib.z.string())
});
const ZResponseFilterCriteriaDataEquals = lib.z.object({
    op: lib.z.literal(ZResponseFilterCondition.Values.equals),
    value: lib.z.union([
        lib.z.string(),
        lib.z.number()
    ])
});
const ZResponseFilterCriteriaDataNotEquals = lib.z.object({
    op: lib.z.literal(ZResponseFilterCondition.Values.notEquals),
    value: lib.z.union([
        lib.z.string(),
        lib.z.number()
    ])
});
const ZResponseFilterCriteriaDataAccepted = lib.z.object({
    op: lib.z.literal(ZResponseFilterCondition.Values.accepted)
});
const ZResponseFilterCriteriaDataClicked = lib.z.object({
    op: lib.z.literal(ZResponseFilterCondition.Values.clicked)
});
const ZResponseFilterCriteriaDataSubmitted = lib.z.object({
    op: lib.z.literal(ZResponseFilterCondition.Values.submitted)
});
const ZResponseFilterCriteriaDataSkipped = lib.z.object({
    op: lib.z.literal(ZResponseFilterCondition.Values.skipped)
});
const ZResponseFilterCriteriaDataUploaded = lib.z.object({
    op: lib.z.literal(ZResponseFilterCondition.Values.uploaded)
});
const ZResponseFilterCriteriaDataNotUploaded = lib.z.object({
    op: lib.z.literal(ZResponseFilterCondition.Values.notUploaded)
});
const ZResponseFilterCriteriaDataBooked = lib.z.object({
    op: lib.z.literal(ZResponseFilterCondition.Values.booked)
});
const ZResponseFilterCriteriaMatrix = lib.z.object({
    op: lib.z.literal("matrix"),
    value: lib.z.record(lib.z.string(), lib.z.string())
});
const ZResponseFilterCriteriaFilledOut = lib.z.object({
    op: lib.z.literal("filledOut")
});
const ZResponseFilterCriteria = lib.z.object({
    finished: lib.z.boolean().optional(),
    createdAt: lib.z.object({
        min: lib.z.date().optional(),
        max: lib.z.date().optional()
    }).optional(),
    contactAttributes: lib.z.record(lib.z.object({
        op: lib.z.enum([
            "equals",
            "notEquals"
        ]),
        value: lib.z.union([
            lib.z.string(),
            lib.z.number()
        ])
    })).optional(),
    data: lib.z.record(lib.z.union([
        ZResponseFilterCriteriaDataLessThan,
        ZResponseFilterCriteriaDataLessEqual,
        ZResponseFilterCriteriaDataGreaterEqual,
        ZResponseFilterCriteriaDataGreaterThan,
        ZResponseFilterCriteriaDataIncludesOne,
        ZResponseFilterCriteriaDataIncludesAll,
        ZResponseFilterCriteriaDataEquals,
        ZResponseFilterCriteriaDataNotEquals,
        ZResponseFilterCriteriaDataAccepted,
        ZResponseFilterCriteriaDataClicked,
        ZResponseFilterCriteriaDataSubmitted,
        ZResponseFilterCriteriaDataSkipped,
        ZResponseFilterCriteriaDataUploaded,
        ZResponseFilterCriteriaDataNotUploaded,
        ZResponseFilterCriteriaDataBooked,
        ZResponseFilterCriteriaMatrix,
        ZResponseFilterCriteriaFilledOut
    ])).optional(),
    tags: lib.z.object({
        applied: lib.z.array(lib.z.string()).optional(),
        notApplied: lib.z.array(lib.z.string()).optional()
    }).optional(),
    others: lib.z.record(lib.z.object({
        op: lib.z.enum([
            "equals",
            "notEquals"
        ]),
        value: lib.z.union([
            lib.z.string(),
            lib.z.number()
        ])
    })).optional(),
    meta: lib.z.record(lib.z.object({
        op: lib.z.enum([
            "equals",
            "notEquals"
        ]),
        value: lib.z.union([
            lib.z.string(),
            lib.z.number()
        ])
    })).optional()
});
const ZResponseContact = lib.z.object({
    id: common/* ZId */.i4,
    userId: lib.z.string()
});
const ZResponseNoteUser = lib.z.object({
    id: lib.z.string().cuid2(),
    name: lib.z.string().nullable()
});
const ZResponseNote = lib.z.object({
    updatedAt: lib.z.date(),
    createdAt: lib.z.date(),
    id: lib.z.string(),
    text: lib.z.string(),
    user: ZResponseNoteUser,
    isResolved: lib.z.boolean(),
    isEdited: lib.z.boolean()
});
const ZResponseMeta = lib.z.object({
    source: lib.z.string().optional(),
    url: lib.z.string().optional(),
    userAgent: lib.z.object({
        browser: lib.z.string().optional(),
        os: lib.z.string().optional(),
        device: lib.z.string().optional()
    }).optional(),
    country: lib.z.string().optional(),
    action: lib.z.string().optional()
});
const ZResponse = lib.z.object({
    id: lib.z.string().cuid2(),
    createdAt: lib.z.date(),
    updatedAt: lib.z.date(),
    surveyId: lib.z.string().cuid2(),
    displayId: lib.z.string().nullish(),
    contact: ZResponseContact.nullable(),
    contactAttributes: ZResponseContactAttributes,
    finished: lib.z.boolean(),
    endingId: lib.z.string().nullish(),
    data: ZResponseData,
    variables: ZResponseVariables,
    ttc: ZResponseTtc.optional(),
    notes: lib.z.array(ZResponseNote),
    tags: lib.z.array(ZTag),
    meta: ZResponseMeta,
    singleUseId: lib.z.string().nullable(),
    language: lib.z.string().nullable()
});
const ZResponseInput = lib.z.object({
    createdAt: lib.z.coerce.date().optional(),
    updatedAt: lib.z.coerce.date().optional(),
    environmentId: lib.z.string().cuid2(),
    surveyId: lib.z.string().cuid2(),
    userId: lib.z.string().nullish(),
    displayId: lib.z.string().nullish(),
    singleUseId: lib.z.string().nullable().optional(),
    finished: lib.z.boolean(),
    endingId: lib.z.string().nullish(),
    language: lib.z.string().optional(),
    data: ZResponseData,
    variables: ZResponseVariables.optional(),
    ttc: ZResponseTtc.optional(),
    meta: lib.z.object({
        source: lib.z.string().optional(),
        url: lib.z.string().optional(),
        userAgent: lib.z.object({
            browser: lib.z.string().optional(),
            device: lib.z.string().optional(),
            os: lib.z.string().optional()
        }).optional(),
        country: lib.z.string().optional(),
        action: lib.z.string().optional()
    }).optional()
});
const ZResponseUpdateInput = lib.z.object({
    finished: lib.z.boolean(),
    endingId: lib.z.string().nullish(),
    data: ZResponseData,
    variables: ZResponseVariables.optional(),
    ttc: ZResponseTtc.optional(),
    language: lib.z.string().optional()
});
const ZResponseWithSurvey = ZResponse.extend({
    survey: types/* ZSurvey */.pf
});
const ZResponseHiddenFieldValue = lib.z.record(lib.z.union([
    lib.z.string(),
    lib.z.number(),
    lib.z.array(lib.z.string())
]));
const ZResponseUpdate = lib.z.object({
    finished: lib.z.boolean(),
    data: ZResponseData,
    language: lib.z.string().optional(),
    variables: ZResponseVariables.optional(),
    ttc: ZResponseTtc.optional(),
    meta: lib.z.object({
        url: lib.z.string().optional(),
        source: lib.z.string().optional(),
        action: lib.z.string().optional()
    }).optional(),
    hiddenFields: ZResponseHiddenFieldValue.optional(),
    displayId: lib.z.string().nullish(),
    endingId: lib.z.string().nullish()
});
const ZResponseTableData = lib.z.object({
    responseId: lib.z.string(),
    createdAt: lib.z.date(),
    status: lib.z.string(),
    verifiedEmail: lib.z.string(),
    tags: lib.z.array(ZTag),
    notes: lib.z.array(ZResponseNote),
    language: lib.z.string().nullable(),
    responseData: ZResponseData,
    variables: lib.z.record(lib.z.union([
        lib.z.string(),
        lib.z.number()
    ])),
    person: ZResponseContact.nullable(),
    contactAttributes: ZResponseContactAttributes
});


/***/ })

};
;