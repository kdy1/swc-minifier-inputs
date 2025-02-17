"use strict";
exports.id = 836;
exports.ids = [836];
exports.modules = {

/***/ 892865:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ contactAttributeCache)
/* harmony export */ });
/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87863);
/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_cache__WEBPACK_IMPORTED_MODULE_0__);

const contactAttributeCache = {
    tag: {
        byContactId (contactId) {
            return `contact-${contactId}-contactAttributes`;
        },
        byEnvironmentIdAndUserId (environmentId, userId) {
            return `environments-${environmentId}-contact-userId-${userId}-contactAttributes`;
        },
        byKeyAndContactId (key, contactId) {
            return `contact-${contactId}-contactAttribute-${key}`;
        },
        byEnvironmentId (environmentId) {
            return `contactAttributes-${environmentId}`;
        }
    },
    revalidate: ({ contactId, environmentId, userId, key })=>{
        if (environmentId) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(contactAttributeCache.tag.byEnvironmentId(environmentId));
        }
        if (environmentId && userId) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(contactAttributeCache.tag.byEnvironmentIdAndUserId(environmentId, userId));
        }
        if (contactId) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(contactAttributeCache.tag.byContactId(contactId));
        }
        if (contactId && key) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(contactAttributeCache.tag.byKeyAndContactId(key, contactId));
        }
    }
};


/***/ }),

/***/ 180868:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ contactCache)
/* harmony export */ });
/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87863);
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

/***/ 927627:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  xF: () => (/* binding */ evaluateSegment),
  Ln: () => (/* binding */ getSegments)
});

// UNUSED EXPORTS: cloneSegment, compareValues, createSegment, deleteSegment, getSegment, getSegmentsByAttributeKey, resetSegmentInSurvey, selectSegment, transformPrismaSegment, updateSegment

// EXTERNAL MODULE: ../../node_modules/@paralleldrive/cuid2/index.js
var cuid2 = __webpack_require__(311287);
;// ./modules/ee/contacts/segments/lib/utils.ts

// type guard to check if a resource is a filter
const isResourceFilter = (resource)=>{
    return resource.root !== undefined;
};
const convertOperatorToText = (operator)=>{
    switch(operator){
        case "equals":
            return "=";
        case "notEquals":
            return "!=";
        case "lessThan":
            return "<";
        case "lessEqual":
            return "<=";
        case "greaterThan":
            return ">";
        case "greaterEqual":
            return ">=";
        case "isSet":
            return "is set";
        case "isNotSet":
            return "is not set";
        case "contains":
            return "contains ";
        case "doesNotContain":
            return "does not contain";
        case "startsWith":
            return "starts with";
        case "endsWith":
            return "ends with";
        case "userIsIn":
            return "User is in";
        case "userIsNotIn":
            return "User is not in";
        default:
            return operator;
    }
};
const convertOperatorToTitle = (operator)=>{
    switch(operator){
        case "equals":
            return "Equals";
        case "notEquals":
            return "Not equals to";
        case "lessThan":
            return "Less than";
        case "lessEqual":
            return "Less than or equal to";
        case "greaterThan":
            return "Greater than";
        case "greaterEqual":
            return "Greater than or equal to";
        case "isSet":
            return "Is set";
        case "isNotSet":
            return "Is not set";
        case "contains":
            return "Contains";
        case "doesNotContain":
            return "Does not contain";
        case "startsWith":
            return "Starts with";
        case "endsWith":
            return "Ends with";
        case "userIsIn":
            return "User is in";
        case "userIsNotIn":
            return "User is not in";
        default:
            return operator;
    }
};
const addFilterBelow = (group, resourceId, filter)=>{
    for(let i = 0; i < group.length; i++){
        const { resource } = group[i];
        if (isResourceFilter(resource)) {
            if (resource.id === resourceId) {
                group.splice(i + 1, 0, filter);
                break;
            }
        } else {
            if (group[i].id === resourceId) {
                group.splice(i + 1, 0, filter);
                break;
            } else {
                addFilterBelow(resource, resourceId, filter);
            }
        }
    }
};
const createGroupFromResource = (group, resourceId)=>{
    for(let i = 0; i < group.length; i++){
        const filters = group[i];
        if (isResourceFilter(filters.resource)) {
            if (filters.resource.id === resourceId) {
                const newGroupToAdd = {
                    id: createId(),
                    connector: filters.connector,
                    resource: [
                        {
                            ...filters,
                            connector: null
                        }
                    ]
                };
                group.splice(i, 1, newGroupToAdd);
                break;
            }
        } else {
            if (group[i].id === resourceId) {
                // make an outer group, wrap the current group in it and add a filter below it
                const outerGroup = {
                    connector: filters.connector,
                    id: createId(),
                    resource: [
                        {
                            ...filters,
                            connector: null
                        }
                    ]
                };
                group.splice(i, 1, outerGroup);
                break;
            } else {
                createGroupFromResource(filters.resource, resourceId);
            }
        }
    }
};
const moveResourceUp = (group, i)=>{
    if (i === 0) {
        return;
    }
    const previousTemp = group[i - 1];
    group[i - 1] = group[i];
    group[i] = previousTemp;
    if (i - 1 === 0) {
        const newConnector = group[i - 1].connector;
        group[i - 1].connector = null;
        group[i].connector = newConnector;
    }
};
const moveResourceDown = (group, i)=>{
    if (i === group.length - 1) {
        return;
    }
    const temp = group[i + 1];
    group[i + 1] = group[i];
    group[i] = temp;
    // after the swap, determine if the connector should be null or not
    if (i === 0) {
        const nextConnector = group[i].connector;
        group[i].connector = null;
        group[i + 1].connector = nextConnector;
    }
};
const moveResource = (group, resourceId, direction)=>{
    for(let i = 0; i < group.length; i++){
        const { resource } = group[i];
        if (isResourceFilter(resource)) {
            if (resource.id === resourceId) {
                if (direction === "up") {
                    moveResourceUp(group, i);
                    break;
                } else {
                    moveResourceDown(group, i);
                    break;
                }
            }
        } else {
            if (group[i].id === resourceId) {
                if (direction === "up") {
                    moveResourceUp(group, i);
                    break;
                } else {
                    moveResourceDown(group, i);
                    break;
                }
            }
            moveResource(resource, resourceId, direction);
        }
    }
};
const deleteResource = (group, resourceId)=>{
    for(let i = 0; i < group.length; i++){
        const { resource } = group[i];
        if (isResourceFilter(resource) && resource.id === resourceId) {
            group.splice(i, 1);
            if (group.length) {
                group[0].connector = null;
            }
            break;
        } else if (!isResourceFilter(resource) && group[i].id === resourceId) {
            group.splice(i, 1);
            if (group.length) {
                group[0].connector = null;
            }
            break;
        } else if (!isResourceFilter(resource)) {
            deleteResource(resource, resourceId);
        }
    }
    // check and delete all empty groups
    deleteEmptyGroups(group);
};
const deleteEmptyGroups = (group)=>{
    for(let i = 0; i < group.length; i++){
        const { resource } = group[i];
        if (!isResourceFilter(resource) && resource.length === 0) {
            group.splice(i, 1);
        } else if (!isResourceFilter(resource)) {
            deleteEmptyGroups(resource);
        }
    }
};
const addFilterInGroup = (group, groupId, filter)=>{
    for(let i = 0; i < group.length; i++){
        const { resource } = group[i];
        if (isResourceFilter(resource)) {
            continue;
        } else {
            if (group[i].id === groupId) {
                const { resource } = group[i];
                if (!isResourceFilter(resource)) {
                    if (resource.length === 0) {
                        resource.push({
                            ...filter,
                            connector: null
                        });
                    } else {
                        resource.push(filter);
                    }
                }
                break;
            } else {
                addFilterInGroup(resource, groupId, filter);
            }
        }
    }
};
const toggleGroupConnector = (group, groupId, newConnectorValue)=>{
    for(let i = 0; i < group.length; i++){
        const { resource } = group[i];
        if (!isResourceFilter(resource)) {
            if (group[i].id === groupId) {
                group[i].connector = newConnectorValue;
                break;
            } else {
                toggleGroupConnector(resource, groupId, newConnectorValue);
            }
        }
    }
};
const toggleFilterConnector = (group, filterId, newConnectorValue)=>{
    for(let i = 0; i < group.length; i++){
        const { resource } = group[i];
        if (isResourceFilter(resource)) {
            if (resource.id === filterId) {
                group[i].connector = newConnectorValue;
            }
        } else {
            toggleFilterConnector(resource, filterId, newConnectorValue);
        }
    }
};
const updateOperatorInFilter = (group, filterId, newOperator)=>{
    for(let i = 0; i < group.length; i++){
        const { resource } = group[i];
        if (isResourceFilter(resource)) {
            if (resource.id === filterId) {
                resource.qualifier.operator = newOperator;
                break;
            }
        } else {
            updateOperatorInFilter(resource, filterId, newOperator);
        }
    }
};
const updateContactAttributeKeyInFilter = (group, filterId, newContactAttributeKey)=>{
    for(let i = 0; i < group.length; i++){
        const { resource } = group[i];
        if (isResourceFilter(resource)) {
            if (resource.id === filterId) {
                resource.root.contactAttributeKey = newContactAttributeKey;
                break;
            }
        } else {
            updateContactAttributeKeyInFilter(resource, filterId, newContactAttributeKey);
        }
    }
};
const updatePersonIdentifierInFilter = (group, filterId, newPersonIdentifier)=>{
    for(let i = 0; i < group.length; i++){
        const { resource } = group[i];
        if (isResourceFilter(resource)) {
            if (resource.id === filterId) {
                resource.root.personIdentifier = newPersonIdentifier;
            }
        } else {
            updatePersonIdentifierInFilter(resource, filterId, newPersonIdentifier);
        }
    }
};
const updateSegmentIdInFilter = (group, filterId, newSegmentId)=>{
    for(let i = 0; i < group.length; i++){
        const { resource } = group[i];
        if (isResourceFilter(resource)) {
            if (resource.id === filterId) {
                resource.root.segmentId = newSegmentId;
                resource.value = newSegmentId;
                break;
            }
        } else {
            updateSegmentIdInFilter(resource, filterId, newSegmentId);
        }
    }
};
const updateFilterValue = (group, filterId, newValue)=>{
    for(let i = 0; i < group.length; i++){
        const { resource } = group[i];
        if (isResourceFilter(resource)) {
            if (resource.id === filterId) {
                resource.value = newValue;
                break;
            }
        } else {
            updateFilterValue(resource, filterId, newValue);
        }
    }
};
const updateDeviceTypeInFilter = (group, filterId, newDeviceType)=>{
    for(let i = 0; i < group.length; i++){
        const { resource } = group[i];
        if (isResourceFilter(resource)) {
            if (resource.id === filterId) {
                resource.root.deviceType = newDeviceType;
                resource.value = newDeviceType;
                break;
            }
        } else {
            updateDeviceTypeInFilter(resource, filterId, newDeviceType);
        }
    }
};
const formatSegmentDateFields = (segment)=>{
    if (typeof segment.createdAt === "string") {
        segment.createdAt = new Date(segment.createdAt);
    }
    if (typeof segment.updatedAt === "string") {
        segment.updatedAt = new Date(segment.updatedAt);
    }
    return segment;
};
const searchForAttributeKeyInSegment = (filters, attributeKey)=>{
    for (let filter of filters){
        const { resource } = filter;
        if (isResourceFilter(resource)) {
            const { root } = resource;
            const { type } = root;
            if (type === "attribute") {
                const { contactAttributeKey: key } = root;
                if (key === attributeKey) {
                    return true;
                }
            }
        } else {
            const found = searchForAttributeKeyInSegment(resource, attributeKey);
            if (found) {
                return true;
            }
        }
    }
    return false;
};
// check if a segment has a filter with "type" other than "attribute" or "person"
// if it does, this is an advanced segment
const isAdvancedSegment = (filters)=>{
    for (let filter of filters){
        const { resource } = filter;
        if (isResourceFilter(resource)) {
            const { root } = resource;
            const { type } = root;
            if (type !== "attribute" && type !== "person") {
                return true;
            }
        } else {
            // the resource is a group, so we don't need to recurse, we know that this is an advanced segment
            return true;
        }
    }
    return false;
};

// EXTERNAL MODULE: external "@prisma/client"
var client_ = __webpack_require__(896330);
// EXTERNAL MODULE: ../../node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js
var react = __webpack_require__(922728);
// EXTERNAL MODULE: ../../packages/database/src/index.ts + 1 modules
var src = __webpack_require__(527610);
// EXTERNAL MODULE: ../../packages/lib/cache.ts
var cache = __webpack_require__(794356);
// EXTERNAL MODULE: ../../packages/lib/cache/segment.ts
var segment = __webpack_require__(337386);
// EXTERNAL MODULE: ../../packages/lib/utils/validate.ts
var validate = __webpack_require__(860988);
// EXTERNAL MODULE: ../../packages/types/common.ts
var common = __webpack_require__(733735);
// EXTERNAL MODULE: ../../packages/types/errors.ts
var errors = __webpack_require__(470641);
// EXTERNAL MODULE: ../../packages/types/segment.ts
var types_segment = __webpack_require__(657773);
;// ./modules/ee/contacts/segments/lib/segments.ts












const selectSegment = {
    id: true,
    createdAt: true,
    updatedAt: true,
    title: true,
    description: true,
    environmentId: true,
    filters: true,
    isPrivate: true,
    surveys: {
        select: {
            id: true,
            name: true,
            status: true
        }
    }
};
const transformPrismaSegment = (segment)=>{
    return {
        ...segment,
        surveys: segment.surveys.map((survey)=>survey.id)
    };
};
const getSegment = (0,react.cache)(async (segmentId)=>(0,cache/* cache */.P)(async ()=>{
        (0,validate/* validateInputs */.C)([
            segmentId,
            common/* ZId */.i4
        ]);
        try {
            const segment = await src/* prisma */.z.segment.findUnique({
                where: {
                    id: segmentId
                },
                select: selectSegment
            });
            if (!segment) {
                throw new errors/* ResourceNotFoundError */.CE("segment", segmentId);
            }
            return transformPrismaSegment(segment);
        } catch (error) {
            if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
                throw new errors/* DatabaseError */.a$(error.message);
            }
            throw error;
        }
    }, [
        `getSegment-${segmentId}`
    ], {
        tags: [
            segment/* segmentCache */.C.tag.byId(segmentId)
        ]
    })());
const getSegments = (0,react.cache)((environmentId)=>(0,cache/* cache */.P)(async ()=>{
        (0,validate/* validateInputs */.C)([
            environmentId,
            common/* ZId */.i4
        ]);
        try {
            const segments = await src/* prisma */.z.segment.findMany({
                where: {
                    environmentId
                },
                select: selectSegment
            });
            if (!segments) {
                return [];
            }
            return segments.map((segment)=>transformPrismaSegment(segment));
        } catch (error) {
            if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
                throw new errors/* DatabaseError */.a$(error.message);
            }
            throw error;
        }
    }, [
        `getSegments-${environmentId}`
    ], {
        tags: [
            segment/* segmentCache */.C.tag.byEnvironmentId(environmentId)
        ]
    })());
const createSegment = async (segmentCreateInput)=>{
    validateInputs([
        segmentCreateInput,
        ZSegmentCreateInput
    ]);
    const { description, environmentId, filters, isPrivate, surveyId, title } = segmentCreateInput;
    let data = {
        environmentId,
        title,
        description,
        isPrivate,
        filters
    };
    if (surveyId) {
        data = {
            ...data,
            surveys: {
                connect: {
                    id: surveyId
                }
            }
        };
    }
    try {
        const segment = await prisma.segment.create({
            data,
            select: selectSegment
        });
        segmentCache.revalidate({
            id: segment.id,
            environmentId
        });
        surveyCache.revalidate({
            id: surveyId
        });
        return transformPrismaSegment(segment);
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            throw new DatabaseError(error.message);
        }
        throw error;
    }
};
const cloneSegment = async (segmentId, surveyId)=>{
    validateInputs([
        segmentId,
        ZId
    ], [
        surveyId,
        ZId
    ]);
    try {
        const segment = await getSegment(segmentId);
        if (!segment) {
            throw new ResourceNotFoundError("segment", segmentId);
        }
        const allSegments = await getSegments(segment.environmentId);
        // Find the last "Copy of" title and extract the number from it
        const lastCopyTitle = allSegments.map((existingSegment)=>existingSegment.title).filter((title)=>title.startsWith(`Copy of ${segment.title}`)).pop();
        let suffix = 1;
        if (lastCopyTitle) {
            const match = lastCopyTitle.match(/\((\d+)\)$/);
            if (match) {
                suffix = parseInt(match[1], 10) + 1;
            }
        }
        // Construct the title for the cloned segment
        const clonedTitle = `Copy of ${segment.title} (${suffix})`;
        // parse the filters and update the user segment
        const parsedFilters = ZSegmentFilters.safeParse(segment.filters);
        if (!parsedFilters.success) {
            throw new ValidationError("Invalid filters");
        }
        const clonedSegment = await prisma.segment.create({
            data: {
                title: clonedTitle,
                description: segment.description,
                isPrivate: segment.isPrivate,
                environmentId: segment.environmentId,
                filters: segment.filters,
                surveys: {
                    connect: {
                        id: surveyId
                    }
                }
            },
            select: selectSegment
        });
        segmentCache.revalidate({
            id: clonedSegment.id,
            environmentId: clonedSegment.environmentId
        });
        surveyCache.revalidate({
            id: surveyId
        });
        return transformPrismaSegment(clonedSegment);
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            throw new DatabaseError(error.message);
        }
        throw error;
    }
};
const deleteSegment = async (segmentId)=>{
    validateInputs([
        segmentId,
        ZId
    ]);
    try {
        const currentSegment = await getSegment(segmentId);
        if (!currentSegment) {
            throw new ResourceNotFoundError("segment", segmentId);
        }
        if (currentSegment.surveys?.length) {
            throw new OperationNotAllowedError("Cannot delete a segment that is associated with a survey");
        }
        const segment = await prisma.segment.delete({
            where: {
                id: segmentId
            },
            select: selectSegment
        });
        segmentCache.revalidate({
            id: segmentId,
            environmentId: segment.environmentId
        });
        segment.surveys.map((survey)=>surveyCache.revalidate({
                id: survey.id
            }));
        surveyCache.revalidate({
            environmentId: currentSegment.environmentId
        });
        return transformPrismaSegment(segment);
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            throw new DatabaseError(error.message);
        }
        throw error;
    }
};
const resetSegmentInSurvey = async (surveyId)=>{
    validateInputs([
        surveyId,
        ZId
    ]);
    const survey = await getSurvey(surveyId);
    if (!survey) {
        throw new ResourceNotFoundError("survey", surveyId);
    }
    try {
        return await prisma.$transaction(async (tx)=>{
            // for this survey, does a private segment already exist
            const segment = await tx.segment.findFirst({
                where: {
                    title: `${surveyId}`,
                    isPrivate: true
                },
                select: selectSegment
            });
            // if a private segment already exists, connect it to the survey
            if (segment) {
                await tx.survey.update({
                    where: {
                        id: surveyId
                    },
                    data: {
                        segment: {
                            connect: {
                                id: segment.id
                            }
                        }
                    }
                });
                // reset the filters
                const updatedSegment = await tx.segment.update({
                    where: {
                        id: segment.id
                    },
                    data: {
                        filters: []
                    },
                    select: selectSegment
                });
                surveyCache.revalidate({
                    id: surveyId
                });
                segmentCache.revalidate({
                    environmentId: survey.environmentId
                });
                return transformPrismaSegment(updatedSegment);
            } else {
                // This case should never happen because a private segment with the title of the surveyId
                // should always exist. But, handling it just in case.
                // if a private segment does not exist, create one
                const newPrivateSegment = await tx.segment.create({
                    data: {
                        title: `${surveyId}`,
                        isPrivate: true,
                        filters: [],
                        surveys: {
                            connect: {
                                id: surveyId
                            }
                        },
                        environment: {
                            connect: {
                                id: survey?.environmentId
                            }
                        }
                    },
                    select: selectSegment
                });
                surveyCache.revalidate({
                    id: surveyId
                });
                segmentCache.revalidate({
                    environmentId: survey.environmentId
                });
                return transformPrismaSegment(newPrivateSegment);
            }
        });
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            throw new DatabaseError(error.message);
        }
        throw error;
    }
};
const updateSegment = async (segmentId, data)=>{
    validateInputs([
        segmentId,
        ZId
    ], [
        data,
        ZSegmentUpdateInput
    ]);
    try {
        let updatedInput = {
            ...data,
            surveys: undefined
        };
        if (data.surveys) {
            updatedInput = {
                ...data,
                surveys: {
                    connect: data.surveys.map((surveyId)=>({
                            id: surveyId
                        }))
                }
            };
        }
        const currentSegment = await getSegment(segmentId);
        if (!currentSegment) {
            throw new ResourceNotFoundError("segment", segmentId);
        }
        const segment = await prisma.segment.update({
            where: {
                id: segmentId
            },
            data: updatedInput,
            select: selectSegment
        });
        segmentCache.revalidate({
            id: segmentId,
            environmentId: segment.environmentId
        });
        segment.surveys.map((survey)=>surveyCache.revalidate({
                id: survey.id
            }));
        return transformPrismaSegment(segment);
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            throw new DatabaseError(error.message);
        }
        throw error;
    }
};
const getSegmentsByAttributeKey = (0,react.cache)((environmentId, attributeKey)=>(0,cache/* cache */.P)(async ()=>{
        (0,validate/* validateInputs */.C)([
            environmentId,
            common/* ZId */.i4
        ], [
            attributeKey,
            common/* ZString */.eI
        ]);
        try {
            const segments = await src/* prisma */.z.segment.findMany({
                where: {
                    environmentId
                },
                select: selectSegment
            });
            // search for contactAttributeKey in the filters
            const clonedSegments = structuredClone(segments);
            const filteredSegments = clonedSegments.filter((segment)=>{
                return searchForAttributeKeyInSegment(segment.filters, attributeKey);
            });
            return filteredSegments;
        } catch (error) {
            if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
                throw new errors/* DatabaseError */.a$(error.message);
            }
            throw error;
        }
    }, [
        `getSegmentsByAttributeKey-${environmentId}-${attributeKey}`
    ], {
        tags: [
            segment/* segmentCache */.C.tag.byEnvironmentId(environmentId),
            segment/* segmentCache */.C.tag.byAttributeKey(attributeKey)
        ]
    })());
const evaluateAttributeFilter = (attributes, filter)=>{
    const { value, qualifier, root } = filter;
    const { contactAttributeKey } = root;
    const attributeValue = attributes[contactAttributeKey];
    if (!attributeValue) {
        return false;
    }
    const attResult = compareValues(attributeValue, value, qualifier.operator);
    return attResult;
};
const evaluatePersonFilter = (userId, filter)=>{
    const { value, qualifier, root } = filter;
    const { personIdentifier } = root;
    if (personIdentifier === "userId") {
        const attResult = compareValues(userId, value, qualifier.operator);
        return attResult;
    }
    return false;
};
const evaluateSegmentFilter = async (userData, filter)=>{
    const { qualifier, root } = filter;
    const { segmentId } = root;
    const { operator } = qualifier;
    const segment = await getSegment(segmentId);
    if (!segment) {
        return false;
    }
    const parsedFilters = types_segment/* ZSegmentFilters */.Ji.safeParse(segment.filters);
    if (!parsedFilters.success) {
        return false;
    }
    const isInSegment = await evaluateSegment(userData, parsedFilters.data);
    if (operator === "userIsIn") {
        return isInSegment;
    }
    if (operator === "userIsNotIn") {
        return !isInSegment;
    }
    return false;
};
const evaluateDeviceFilter = (device, filter)=>{
    const { value, qualifier } = filter;
    return compareValues(device, value, qualifier.operator);
};
const compareValues = (a, b, operator)=>{
    switch(operator){
        case "equals":
            return a === b;
        case "notEquals":
            return a !== b;
        case "lessThan":
            return a < b;
        case "lessEqual":
            return a <= b;
        case "greaterThan":
            return a > b;
        case "greaterEqual":
            return a >= b;
        case "isSet":
            return a !== undefined;
        case "isNotSet":
            return a === "" || a === null || a === undefined;
        case "contains":
            return a.includes(b);
        case "doesNotContain":
            return !a.includes(b);
        case "startsWith":
            return a.startsWith(b);
        case "endsWith":
            return a.endsWith(b);
        default:
            throw new Error(`Unexpected operator: ${operator}`);
    }
};
const evaluateSegment = async (userData, filters)=>{
    if (!filters.length) {
        // if there are no filters, the segment will be evaluated as true
        return true;
    }
    let resultPairs = [];
    try {
        for (let filterItem of filters){
            const { resource } = filterItem;
            let result;
            if (isResourceFilter(resource)) {
                const { root } = resource;
                const { type } = root;
                if (type === "attribute") {
                    result = evaluateAttributeFilter(userData.attributes, resource);
                    resultPairs.push({
                        result,
                        connector: filterItem.connector
                    });
                }
                if (type === "person") {
                    result = evaluatePersonFilter(userData.userId, resource);
                    resultPairs.push({
                        result,
                        connector: filterItem.connector
                    });
                }
                if (type === "segment") {
                    result = await evaluateSegmentFilter(userData, resource);
                    resultPairs.push({
                        result,
                        connector: filterItem.connector
                    });
                }
                if (type === "device") {
                    result = evaluateDeviceFilter(userData.deviceType, resource);
                    resultPairs.push({
                        result,
                        connector: filterItem.connector
                    });
                }
            } else {
                result = await evaluateSegment(userData, resource);
                // this is a sub-group and we need to evaluate the sub-group
                resultPairs.push({
                    result,
                    connector: filterItem.connector
                });
            }
        }
        if (!resultPairs.length) {
            return false;
        }
        // We first evaluate all `and` conditions consecutively
        let intermediateResults = [];
        // Given that the first filter in every group/sub-group always has a connector value of "null",
        // we initialize the finalResult with the result of the first filter.
        let currentAndGroupResult = resultPairs[0].result;
        for(let i = 1; i < resultPairs.length; i++){
            const { result, connector } = resultPairs[i];
            if (connector === "and") {
                currentAndGroupResult = currentAndGroupResult && result;
            } else if (connector === "or") {
                intermediateResults.push(currentAndGroupResult);
                currentAndGroupResult = result;
            }
        }
        // Push the final `and` group result
        intermediateResults.push(currentAndGroupResult);
        // Now we can evaluate the `or` conditions
        let finalResult = intermediateResults[0];
        for(let i = 1; i < intermediateResults.length; i++){
            finalResult = finalResult || intermediateResults[i];
        }
        return finalResult;
    } catch (error) {
        throw error;
    }
};


/***/ })

};
;