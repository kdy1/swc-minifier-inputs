"use strict";
exports.id = 5617;
exports.ids = [5617];
exports.modules = {

/***/ 495235:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ contactAttributeKeyCache)
/* harmony export */ });
/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87863);
/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_cache__WEBPACK_IMPORTED_MODULE_0__);

const contactAttributeKeyCache = {
    tag: {
        byId (id) {
            return `contactAttributeKey-${id}`;
        },
        byEnvironmentId (environmentId) {
            return `environments-${environmentId}-contactAttributeKeys`;
        },
        byEnvironmentIdAndKey (environmentId, key) {
            return `contactAttributeKey-environment-${environmentId}-key-${key}`;
        }
    },
    revalidate: ({ id, environmentId, key })=>{
        if (id) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(contactAttributeKeyCache.tag.byId(id));
        }
        if (environmentId) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(contactAttributeKeyCache.tag.byEnvironmentId(environmentId));
        }
        if (environmentId && key) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(contactAttributeKeyCache.tag.byEnvironmentIdAndKey(environmentId, key));
        }
    }
};


/***/ }),

/***/ 478845:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ updateAttributes)
/* harmony export */ });
/* harmony import */ var _lib_cache_contact_attribute__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(892865);
/* harmony import */ var _lib_cache_contact_attribute_key__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(495235);
/* harmony import */ var _formbricks_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(527610);
/* harmony import */ var _formbricks_lib_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(836919);
/* harmony import */ var _formbricks_lib_utils_validate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(860988);
/* harmony import */ var _formbricks_types_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(733735);
/* harmony import */ var _formbricks_types_contact_attribute__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(595313);
/* harmony import */ var _contacts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(465412);








const updateAttributes = async (contactId, userId, environmentId, contactAttributesParam)=>{
    (0,_formbricks_lib_utils_validate__WEBPACK_IMPORTED_MODULE_4__/* .validateInputs */ .C)([
        contactId,
        _formbricks_types_common__WEBPACK_IMPORTED_MODULE_5__/* .ZId */ .i4
    ], [
        userId,
        _formbricks_types_common__WEBPACK_IMPORTED_MODULE_5__/* .ZString */ .eI
    ], [
        environmentId,
        _formbricks_types_common__WEBPACK_IMPORTED_MODULE_5__/* .ZId */ .i4
    ], [
        contactAttributesParam,
        _formbricks_types_contact_attribute__WEBPACK_IMPORTED_MODULE_6__/* .ZContactAttributes */ .EE
    ]);
    // Fetch contact attribute keys and email check in parallel
    const [contactAttributeKeys, existingEmailAttribute] = await Promise.all([
        (0,_contacts__WEBPACK_IMPORTED_MODULE_3__/* .getContactAttributeKeys */ .fo)(environmentId),
        contactAttributesParam.email ? _formbricks_database__WEBPACK_IMPORTED_MODULE_2__/* .prisma */ .z.contactAttribute.findFirst({
            where: {
                AND: [
                    {
                        attributeKey: {
                            key: "email"
                        },
                        value: contactAttributesParam.email
                    },
                    {
                        NOT: {
                            contactId
                        }
                    }
                ]
            },
            select: {
                id: true
            }
        }) : Promise.resolve(null)
    ]);
    // Process email existence early
    const { email, ...remainingAttributes } = contactAttributesParam;
    const contactAttributes = existingEmailAttribute ? remainingAttributes : contactAttributesParam;
    const emailExists = !!existingEmailAttribute;
    // Create lookup map for attribute keys
    const contactAttributeKeyMap = new Map(contactAttributeKeys.map((ack)=>[
            ack.key,
            ack
        ]));
    // Separate existing and new attributes in a single pass
    const { existingAttributes, newAttributes } = Object.entries(contactAttributes).reduce((acc, [key, value])=>{
        const attributeKey = contactAttributeKeyMap.get(key);
        if (attributeKey) {
            acc.existingAttributes.push({
                key,
                value,
                attributeKeyId: attributeKey.id
            });
        } else {
            acc.newAttributes.push({
                key,
                value
            });
        }
        return acc;
    }, {
        existingAttributes: [],
        newAttributes: []
    });
    let messages = emailExists ? [
        "The email already exists for this environment and was not updated."
    ] : [];
    // First, update all existing attributes
    if (existingAttributes.length > 0) {
        await _formbricks_database__WEBPACK_IMPORTED_MODULE_2__/* .prisma */ .z.$transaction(existingAttributes.map(({ attributeKeyId, value })=>_formbricks_database__WEBPACK_IMPORTED_MODULE_2__/* .prisma */ .z.contactAttribute.upsert({
                where: {
                    contactId_attributeKeyId: {
                        contactId,
                        attributeKeyId
                    }
                },
                update: {
                    value
                },
                create: {
                    contactId,
                    attributeKeyId,
                    value
                }
            })));
        // Revalidate cache for existing attributes
        for (const attribute of existingAttributes){
            _lib_cache_contact_attribute__WEBPACK_IMPORTED_MODULE_0__/* .contactAttributeCache */ .r.revalidate({
                environmentId,
                contactId,
                userId,
                key: attribute.key
            });
        }
    }
    // Then, try to create new attributes if any exist
    if (newAttributes.length > 0) {
        const totalAttributeClassesLength = contactAttributeKeys.length + newAttributes.length;
        if (totalAttributeClassesLength > _formbricks_lib_constants__WEBPACK_IMPORTED_MODULE_7__/* .MAX_ATTRIBUTE_CLASSES_PER_ENVIRONMENT */ .LO) {
            // Add warning to details about skipped attributes
            messages.push(`Could not create ${newAttributes.length} new attribute(s) as it would exceed the maximum limit of ${_formbricks_lib_constants__WEBPACK_IMPORTED_MODULE_7__/* .MAX_ATTRIBUTE_CLASSES_PER_ENVIRONMENT */ .LO} attribute classes. Existing attributes were updated successfully.`);
        } else {
            // Create new attributes since we're under the limit
            await _formbricks_database__WEBPACK_IMPORTED_MODULE_2__/* .prisma */ .z.$transaction(newAttributes.map(({ key, value })=>_formbricks_database__WEBPACK_IMPORTED_MODULE_2__/* .prisma */ .z.contactAttributeKey.create({
                    data: {
                        key,
                        type: "custom",
                        environment: {
                            connect: {
                                id: environmentId
                            }
                        },
                        attributes: {
                            create: {
                                contactId,
                                value
                            }
                        }
                    }
                })));
            // Batch revalidate caches for new attributes
            for (const attribute of newAttributes){
                _lib_cache_contact_attribute_key__WEBPACK_IMPORTED_MODULE_1__/* .contactAttributeKeyCache */ .E.revalidate({
                    environmentId,
                    key: attribute.key
                });
                _lib_cache_contact_attribute__WEBPACK_IMPORTED_MODULE_0__/* .contactAttributeCache */ .r.revalidate({
                    environmentId,
                    contactId,
                    userId,
                    key: attribute.key
                });
            }
            _lib_cache_contact_attribute_key__WEBPACK_IMPORTED_MODULE_1__/* .contactAttributeKeyCache */ .E.revalidate({
                environmentId
            });
        }
    }
    return {
        success: true,
        messages
    };
};


/***/ }),

/***/ 465412:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  bl: () => (/* binding */ getContact),
  fo: () => (/* binding */ getContactAttributeKeys),
  qe: () => (/* binding */ getContactAttributes),
  kK: () => (/* binding */ getContacts)
});

// UNUSED EXPORTS: createContactsFromCSV, deleteContact

// EXTERNAL MODULE: ./lib/cache/contact.ts
var contact = __webpack_require__(180868);
// EXTERNAL MODULE: ./lib/cache/contact-attribute.ts
var contact_attribute = __webpack_require__(892865);
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
// EXTERNAL MODULE: ../../packages/lib/constants.ts
var constants = __webpack_require__(836919);
// EXTERNAL MODULE: ../../packages/lib/utils/validate.ts
var validate = __webpack_require__(860988);
// EXTERNAL MODULE: ../../packages/types/common.ts
var common = __webpack_require__(733735);
// EXTERNAL MODULE: ../../packages/types/errors.ts
var errors = __webpack_require__(470641);
// EXTERNAL MODULE: ../../node_modules/zod/lib/index.mjs
var lib = __webpack_require__(545198);
;// ./modules/ee/contacts/types/contact.ts

const ZContact = lib.z.object({
    id: lib.z.string().cuid2(),
    createdAt: lib.z.date(),
    updatedAt: lib.z.date(),
    environmentId: lib.z.string().cuid2()
});
const ZContactTableAttributeData = lib.z.object({
    key: lib.z.string(),
    name: lib.z.string().nullable(),
    value: lib.z.string().nullable()
});
const ZContactTableData = lib.z.object({
    id: lib.z.string(),
    userId: lib.z.string(),
    email: lib.z.string(),
    firstName: lib.z.string(),
    lastName: lib.z.string(),
    attributes: lib.z.array(ZContactTableAttributeData)
});
const ZContactWithAttributes = ZContact.extend({
    attributes: lib.z.record(lib.z.string())
});
// types related to the csv upload:
const contact_ZContactCSVDuplicateAction = lib.z.enum([
    "skip",
    "update",
    "overwrite"
]);
const contact_ZContactCSVUploadResponse = lib.z.array(lib.z.record(lib.z.string())).max(10000, {
    message: "Maximum 10000 records allowed at a time."
}).superRefine((data, ctx)=>{
    for (const record of data){
        if (!Object.keys(record).includes("email")) {
            return ctx.addIssue({
                code: lib.z.ZodIssueCode.custom,
                message: "Missing email field for one or more records"
            });
        }
        if (!record.email) {
            return ctx.addIssue({
                code: lib.z.ZodIssueCode.custom,
                message: "Email field is empty for one or more records"
            });
        }
    }
    // check for duplicate emails
    const emails = data.map((record)=>record.email);
    const emailSet = new Set(emails);
    if (emails.length !== emailSet.size) {
        return ctx.addIssue({
            code: lib.z.ZodIssueCode.custom,
            message: "Duplicate emails found in the records"
        });
    }
    // check for duplicate userIds if present
    const userIds = data.map((record)=>record.userId).filter(Boolean);
    if (userIds?.length > 0) {
        const userIdSet = new Set(userIds);
        if (userIds.length !== userIdSet.size) {
            return ctx.addIssue({
                code: lib.z.ZodIssueCode.custom,
                message: "Duplicate userIds found in the records"
            });
        }
    }
});
const contact_ZContactCSVAttributeMap = lib.z.record(lib.z.string(), lib.z.string()).superRefine((attributeMap, ctx)=>{
    const values = Object.values(attributeMap);
    if (new Set(values).size !== values.length) {
        return ctx.addIssue({
            code: lib.z.ZodIssueCode.custom,
            message: "Attribute map contains duplicate values"
        });
    }
});

// EXTERNAL MODULE: ./modules/ee/contacts/lib/utils.ts
var utils = __webpack_require__(414435);
;// ./modules/ee/contacts/lib/contacts.ts














const selectContact = {
    id: true,
    createdAt: true,
    updatedAt: true,
    environmentId: true,
    attributes: {
        select: {
            value: true,
            attributeKey: {
                select: {
                    key: true,
                    name: true
                }
            }
        }
    }
};
const selectContactAttribute = {
    value: true,
    attributeKey: {
        select: {
            key: true,
            name: true
        }
    }
};
const buildContactWhereClause = (environmentId, search)=>{
    const whereClause = {
        environmentId
    };
    if (search) {
        whereClause.OR = [
            {
                attributes: {
                    some: {
                        value: {
                            contains: search,
                            mode: "insensitive"
                        }
                    }
                }
            },
            {
                id: {
                    contains: search,
                    mode: "insensitive"
                }
            }
        ];
    }
    return whereClause;
};
const getContacts = (0,react.cache)((environmentId, offset, searchValue)=>(0,cache/* cache */.P)(async ()=>{
        (0,validate/* validateInputs */.C)([
            environmentId,
            common/* ZId */.i4
        ], [
            offset,
            common/* ZOptionalNumber */.Wo
        ], [
            searchValue,
            common/* ZOptionalString */.Ww
        ]);
        try {
            const contacts = await src/* prisma */.z.contact.findMany({
                where: buildContactWhereClause(environmentId, searchValue),
                select: selectContact,
                take: constants/* ITEMS_PER_PAGE */.re,
                skip: offset,
                orderBy: {
                    createdAt: "desc"
                }
            });
            return contacts.map((contact)=>(0,utils/* transformPrismaContact */.HZ)(contact));
        } catch (error) {
            if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
                throw new errors/* DatabaseError */.a$(error.message);
            }
            throw error;
        }
    }, [
        `getContacts-${environmentId}-${offset}-${searchValue ?? ""}`
    ], {
        tags: [
            contact/* contactCache */.f.tag.byEnvironmentId(environmentId)
        ]
    })());
const getContact = (0,react.cache)((contactId)=>(0,cache/* cache */.P)(async ()=>{
        (0,validate/* validateInputs */.C)([
            contactId,
            common/* ZId */.i4
        ]);
        try {
            return await src/* prisma */.z.contact.findUnique({
                where: {
                    id: contactId
                },
                select: selectContact
            });
        } catch (error) {
            if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
                throw new errors/* DatabaseError */.a$(error.message);
            }
            throw error;
        }
    }, [
        `getContact-${contactId}`
    ], {
        tags: [
            contact/* contactCache */.f.tag.byId(contactId)
        ]
    })());
const deleteContact = async (contactId)=>{
    validateInputs([
        contactId,
        ZId
    ]);
    try {
        const contact = await prisma.contact.delete({
            where: {
                id: contactId
            },
            select: selectContact
        });
        const contactUserId = contact.attributes.find((attr)=>attr.attributeKey.key === "userId")?.value;
        contactCache.revalidate({
            id: contact.id,
            environmentId: contact.environmentId,
            userId: contactUserId
        });
        return contact;
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            throw new DatabaseError(error.message);
        }
        throw error;
    }
};
const getContactAttributes = (0,react.cache)((contactId)=>(0,cache/* cache */.P)(async ()=>{
        (0,validate/* validateInputs */.C)([
            contactId,
            common/* ZId */.i4
        ]);
        try {
            const prismaAttributes = await src/* prisma */.z.contactAttribute.findMany({
                where: {
                    contactId
                },
                select: selectContactAttribute
            });
            // return convertPrismaContactAttributes(prismaAttributes);
            return prismaAttributes.reduce((acc, attr)=>{
                acc[attr.attributeKey.key] = attr.value;
                return acc;
            }, {});
        } catch (error) {
            if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
                throw new errors/* DatabaseError */.a$(error.message);
            }
            throw error;
        }
    }, [
        `getContactAttributes-${contactId}`
    ], {
        tags: [
            contact_attribute/* contactAttributeCache */.r.tag.byContactId(contactId)
        ]
    })());
const getContactAttributeKeys = (0,react.cache)((environmentId)=>(0,cache/* cache */.P)(async ()=>{
        return await src/* prisma */.z.contactAttributeKey.findMany({
            where: {
                environmentId
            }
        });
    }, [
        `getContactAttributeKeys-${environmentId}`
    ], {
        tags: [
            contact_attribute_key/* contactAttributeKeyCache */.E.tag.byEnvironmentId(environmentId)
        ]
    })());
const createContactsFromCSV = async (csvData, environmentId, duplicateContactsAction, attributeMap)=>{
    validateInputs([
        csvData,
        ZContactCSVUploadResponse
    ], [
        environmentId,
        ZId
    ], [
        duplicateContactsAction,
        ZContactCSVDuplicateAction
    ], [
        attributeMap,
        ZContactCSVAttributeMap
    ]);
    try {
        // Extract unique emails and userIds from CSV data
        const csvEmails = Array.from(new Set(csvData.map((r)=>r.email).filter(Boolean)));
        const csvUserIds = Array.from(new Set(csvData.map((r)=>r.userId).filter(Boolean)));
        // Fetch existing contacts by email
        const existingContactsByEmail = await prisma.contact.findMany({
            where: {
                environmentId,
                attributes: {
                    some: {
                        attributeKey: {
                            key: "email"
                        },
                        value: {
                            in: csvEmails
                        }
                    }
                }
            },
            select: {
                id: true,
                attributes: {
                    select: {
                        attributeKey: {
                            select: {
                                key: true,
                                id: true
                            }
                        },
                        value: true
                    }
                }
            }
        });
        // Map emails to existing contacts
        const emailToContactMap = new Map();
        existingContactsByEmail.forEach((contact)=>{
            const emailAttr = contact.attributes.find((attr)=>attr.attributeKey.key === "email");
            if (emailAttr) {
                emailToContactMap.set(emailAttr.value, contact);
            }
        });
        // Check for duplicate userIds
        const existingUserIds = await prisma.contactAttribute.findMany({
            where: {
                attributeKey: {
                    key: "userId",
                    environmentId
                },
                value: {
                    in: csvUserIds
                }
            },
            select: {
                value: true,
                contactId: true
            }
        });
        // Fetch existing attribute keys and cache them
        const existingAttributeKeys = await prisma.contactAttributeKey.findMany({
            where: {
                environmentId
            },
            select: {
                key: true,
                id: true
            }
        });
        const attributeKeyMap = new Map();
        existingAttributeKeys.forEach((attrKey)=>{
            attributeKeyMap.set(attrKey.key, attrKey.id);
        });
        // Identify missing attribute keys
        const csvKeys = new Set();
        csvData.forEach((record)=>{
            Object.keys(record).forEach((key)=>csvKeys.add(key));
        });
        const missingKeys = Array.from(csvKeys).filter((key)=>!attributeKeyMap.has(key));
        // Create missing attribute keys
        if (missingKeys.length > 0) {
            await prisma.contactAttributeKey.createMany({
                data: missingKeys.map((key)=>({
                        key,
                        name: key,
                        environmentId
                    })),
                skipDuplicates: true
            });
            // Fetch and update the attributeKeyMap with new keys
            const newAttributeKeys = await prisma.contactAttributeKey.findMany({
                where: {
                    key: {
                        in: missingKeys
                    },
                    environmentId
                },
                select: {
                    key: true,
                    id: true
                }
            });
            newAttributeKeys.forEach((attrKey)=>{
                attributeKeyMap.set(attrKey.key, attrKey.id);
            });
        }
        const createdContacts = [];
        // Process contacts in parallel
        const contactPromises = csvData.map(async (record)=>{
            // Skip records without email
            if (!record.email) {
                throw new ValidationError("Email is required for all contacts");
            }
            const existingContact = emailToContactMap.get(record.email);
            if (existingContact) {
                // Handle duplicates based on duplicateContactsAction
                switch(duplicateContactsAction){
                    case "skip":
                        return null;
                    case "update":
                        {
                            // if the record has a userId, check if it already exists
                            const existingUserId = existingUserIds.find((attr)=>attr.value === record.userId && attr.contactId !== existingContact.id);
                            let recordToProcess = {
                                ...record
                            };
                            if (existingUserId) {
                                const { userId, ...rest } = recordToProcess;
                                const existingContactUserId = existingContact.attributes.find((attr)=>attr.attributeKey.key === "userId")?.value;
                                recordToProcess = {
                                    ...rest,
                                    ...existingContactUserId && {
                                        userId: existingContactUserId
                                    }
                                };
                            }
                            const attributesToUpsert = Object.entries(recordToProcess).map(([key, value])=>({
                                    where: {
                                        contactId_attributeKeyId: {
                                            contactId: existingContact.id,
                                            attributeKeyId: attributeKeyMap.get(key)
                                        }
                                    },
                                    update: {
                                        value
                                    },
                                    create: {
                                        attributeKeyId: attributeKeyMap.get(key),
                                        value
                                    }
                                }));
                            // Update contact with upserted attributes
                            const updatedContact = prisma.contact.update({
                                where: {
                                    id: existingContact.id
                                },
                                data: {
                                    attributes: {
                                        // @ts-expect-error
                                        upsert: attributesToUpsert
                                    }
                                },
                                include: {
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
                            return updatedContact;
                        }
                    case "overwrite":
                        {
                            // if the record has a userId, check if it already exists
                            const existingUserId = existingUserIds.find((attr)=>attr.value === record.userId && attr.contactId !== existingContact.id);
                            let recordToProcess = {
                                ...record
                            };
                            if (existingUserId) {
                                const { userId, ...rest } = recordToProcess;
                                const existingContactUserId = existingContact.attributes.find((attr)=>attr.attributeKey.key === "userId")?.value;
                                recordToProcess = {
                                    ...rest,
                                    ...existingContactUserId && {
                                        userId: existingContactUserId
                                    }
                                };
                            }
                            // Overwrite by deleting existing attributes and creating new ones
                            await prisma.contactAttribute.deleteMany({
                                where: {
                                    contactId: existingContact.id
                                }
                            });
                            const newAttributes = Object.entries(recordToProcess).map(([key, value])=>({
                                    attributeKey: {
                                        connect: {
                                            key_environmentId: {
                                                key,
                                                environmentId
                                            }
                                        }
                                    },
                                    value
                                }));
                            const updatedContact = prisma.contact.update({
                                where: {
                                    id: existingContact.id
                                },
                                data: {
                                    attributes: {
                                        create: newAttributes
                                    }
                                },
                                include: {
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
                            return updatedContact;
                        }
                }
            } else {
                // Create new contact
                const newAttributes = Object.entries(record).map(([key, value])=>({
                        attributeKey: {
                            connect: {
                                key_environmentId: {
                                    key,
                                    environmentId
                                }
                            }
                        },
                        value
                    }));
                const newContact = prisma.contact.create({
                    data: {
                        environmentId,
                        attributes: {
                            create: newAttributes
                        }
                    },
                    include: {
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
                return newContact;
            }
        });
        const results = await Promise.all(contactPromises);
        const createdContactsFiltered = results.filter((contact)=>contact !== null);
        createdContacts.push(...createdContactsFiltered);
        contactCache.revalidate({
            environmentId
        });
        for (const contact of createdContactsFiltered){
            contactCache.revalidate({
                id: contact.id
            });
        }
        contactAttributeKeyCache.revalidate({
            environmentId
        });
        return createdContacts;
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            throw new DatabaseError(error.message);
        }
        throw error;
    }
};


/***/ }),

/***/ 414435:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HZ: () => (/* binding */ transformPrismaContact),
/* harmony export */   Sl: () => (/* binding */ getContactIdentifier)
/* harmony export */ });
/* unused harmony export convertPrismaContactAttributes */
const getContactIdentifier = (contactAttributes)=>{
    return contactAttributes?.email ?? contactAttributes?.userId ?? "";
};
const convertPrismaContactAttributes = (prismaAttributes)=>{
    return prismaAttributes.reduce((acc, attr)=>{
        acc[attr.attributeKey.key] = {
            name: attr.attributeKey.name,
            value: attr.value
        };
        return acc;
    }, {});
};
const transformPrismaContact = (person)=>{
    const attributes = person.attributes.reduce((acc, attr)=>{
        acc[attr.attributeKey.key] = attr.value;
        return acc;
    }, {});
    return {
        id: person.id,
        attributes,
        environmentId: person.environmentId,
        createdAt: new Date(person.createdAt),
        updatedAt: new Date(person.updatedAt)
    };
};


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

/***/ })

};
;