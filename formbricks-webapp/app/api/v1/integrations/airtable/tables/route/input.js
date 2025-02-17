(() => {
var exports = {};
exports.id = 4936;
exports.ids = [4936];
exports.modules = {

/***/ 896330:
/***/ ((module) => {

"use strict";
module.exports = require("@prisma/client");

/***/ }),

/***/ 560483:
/***/ ((module) => {

"use strict";
module.exports = require("@prisma/client/scripts/default-index.js");

/***/ }),

/***/ 710846:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.prod.js");

/***/ }),

/***/ 744870:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.prod.js");

/***/ }),

/***/ 903295:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ 529294:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ 663033:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ 912412:
/***/ ((module) => {

"use strict";
module.exports = require("assert");

/***/ }),

/***/ 979428:
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ 455511:
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ 594735:
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ 781630:
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ 55591:
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ 111723:
/***/ ((module) => {

"use strict";
module.exports = require("querystring");

/***/ }),

/***/ 927910:
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ 379551:
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ 328354:
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ 74075:
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ }),

/***/ 344708:
/***/ ((module) => {

"use strict";
module.exports = require("node:https");

/***/ }),

/***/ 563322:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

// NAMESPACE OBJECT: ./app/api/v1/integrations/airtable/tables/route.ts
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  GET: () => (GET)
});

// EXTERNAL MODULE: ../../node_modules/next/dist/server/route-modules/app-route/module.compiled.js
var module_compiled = __webpack_require__(831271);
// EXTERNAL MODULE: ../../node_modules/next/dist/server/route-kind.js
var route_kind = __webpack_require__(291232);
// EXTERNAL MODULE: ../../node_modules/next/dist/server/lib/patch-fetch.js
var patch_fetch = __webpack_require__(318079);
// EXTERNAL MODULE: ./app/lib/api/response.ts
var response = __webpack_require__(328779);
// EXTERNAL MODULE: ./modules/auth/lib/authOptions.ts + 8 modules
var authOptions = __webpack_require__(136015);
// EXTERNAL MODULE: ../../node_modules/next-auth/index.js
var next_auth = __webpack_require__(963302);
// EXTERNAL MODULE: ../../node_modules/zod/lib/index.mjs
var lib = __webpack_require__(545198);
// EXTERNAL MODULE: ../../packages/lib/airtable/service.ts
var service = __webpack_require__(831040);
// EXTERNAL MODULE: ../../packages/lib/environment/auth.ts
var auth = __webpack_require__(266640);
// EXTERNAL MODULE: ../../packages/lib/integration/service.ts + 3 modules
var integration_service = __webpack_require__(43684);
;// ./app/api/v1/integrations/airtable/tables/route.ts







const GET = async (req)=>{
    const url = req.url;
    const environmentId = req.headers.get("environmentId");
    const queryParams = new URLSearchParams(url.split("?")[1]);
    const session = await (0,next_auth.getServerSession)(authOptions/* authOptions */.N);
    const baseId = lib/* string */.Yj().safeParse(queryParams.get("baseId"));
    if (!baseId.success) {
        return response/* responses */.n.badRequestResponse("Base Id is Required");
    }
    if (!session) {
        return response/* responses */.n.notAuthenticatedResponse();
    }
    if (!environmentId) {
        return response/* responses */.n.badRequestResponse("environmentId is missing");
    }
    const canUserAccessEnvironment = await (0,auth/* hasUserEnvironmentAccess */.n)(session?.user.id, environmentId);
    if (!canUserAccessEnvironment || !environmentId) {
        return response/* responses */.n.unauthorizedResponse();
    }
    const integration = await (0,integration_service/* getIntegrationByType */.ks)(environmentId, "airtable");
    if (!integration) {
        return response/* responses */.n.notFoundResponse("Integration not found", environmentId);
    }
    const tables = await (0,service/* getTables */.oI)(integration.config.key, baseId.data);
    return response/* responses */.n.successResponse(tables);
};

;// ../../node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?page=%2Fapi%2Fv1%2Fintegrations%2Fairtable%2Ftables%2Froute&name=app%2Fapi%2Fv1%2Fintegrations%2Fairtable%2Ftables%2Froute&pagePath=private-next-app-dir%2Fapi%2Fv1%2Fintegrations%2Fairtable%2Ftables%2Froute.ts&appDir=%2FUsers%2Fkdy1%2Fprojects%2Fformbricks%2Fapps%2Fweb%2Fapp&appPaths=%2Fapi%2Fv1%2Fintegrations%2Fairtable%2Ftables%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=standalone&nextConfigExperimentalUseEarlyImport=&preferredRegion=&middlewareConfig=e30%3D!




// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = "standalone"
const routeModule = new module_compiled.AppRouteRouteModule({
    definition: {
        kind: route_kind.RouteKind.APP_ROUTE,
        page: "/api/v1/integrations/airtable/tables/route",
        pathname: "/api/v1/integrations/airtable/tables",
        filename: "route",
        bundlePath: "app/api/v1/integrations/airtable/tables/route"
    },
    resolvedPagePath: "/Users/kdy1/projects/formbricks/apps/web/app/api/v1/integrations/airtable/tables/route.ts",
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

/***/ 587032:
/***/ (() => {



/***/ }),

/***/ 580408:
/***/ (() => {



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

/***/ 136015:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  N: () => (/* binding */ authOptions)
});

// EXTERNAL MODULE: external "@prisma/client"
var client_ = __webpack_require__(896330);
// EXTERNAL MODULE: ../../node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js
var react = __webpack_require__(922728);
// EXTERNAL MODULE: ../../packages/database/src/index.ts + 1 modules
var src = __webpack_require__(527610);
// EXTERNAL MODULE: ../../packages/lib/cache.ts
var cache = __webpack_require__(794356);
// EXTERNAL MODULE: ../../packages/lib/user/cache.ts
var user_cache = __webpack_require__(323798);
// EXTERNAL MODULE: ../../packages/lib/utils/validate.ts
var validate = __webpack_require__(860988);
// EXTERNAL MODULE: ../../packages/types/common.ts
var common = __webpack_require__(733735);
// EXTERNAL MODULE: ../../packages/types/errors.ts
var errors = __webpack_require__(470641);
// EXTERNAL MODULE: ../../packages/types/user.ts
var user = __webpack_require__(354345);
;// ./modules/auth/lib/user.ts









const updateUser = async (id, data)=>{
    (0,validate/* validateInputs */.C)([
        id,
        common/* ZId */.i4
    ], [
        data,
        user/* ZUserUpdateInput */.rd.partial()
    ]);
    try {
        const updatedUser = await src/* prisma */.z.user.update({
            where: {
                id
            },
            data: data,
            select: {
                id: true,
                email: true,
                locale: true,
                emailVerified: true
            }
        });
        user_cache/* userCache */.g.revalidate({
            email: updatedUser.email,
            id: updatedUser.id
        });
        return updatedUser;
    } catch (error) {
        if (error instanceof client_.Prisma.PrismaClientKnownRequestError && error.code === "P2016") {
            throw new errors/* ResourceNotFoundError */.CE("User", id);
        }
        throw error;
    }
};
const getUserByEmail = (0,react.cache)(async (email)=>(0,cache/* cache */.P)(async ()=>{
        (0,validate/* validateInputs */.C)([
            email,
            user/* ZUserEmail */.sO
        ]);
        try {
            const user = await src/* prisma */.z.user.findFirst({
                where: {
                    email
                },
                select: {
                    id: true,
                    locale: true,
                    email: true,
                    emailVerified: true
                }
            });
            return user;
        } catch (error) {
            if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
                throw new errors/* DatabaseError */.a$(error.message);
            }
            throw error;
        }
    }, [
        `getUserByEmail-${email}`
    ], {
        tags: [
            user_cache/* userCache */.g.tag.byEmail(email)
        ]
    })());
const getUser = (0,react.cache)(async (id)=>(0,cache/* cache */.P)(async ()=>{
        (0,validate/* validateInputs */.C)([
            id,
            common/* ZId */.i4
        ]);
        try {
            const user = await src/* prisma */.z.user.findUnique({
                where: {
                    id
                },
                select: {
                    id: true
                }
            });
            if (!user) {
                return null;
            }
            return user;
        } catch (error) {
            if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
                throw new errors/* DatabaseError */.a$(error.message);
            }
            throw error;
        }
    }, [
        `getUser-${id}`
    ], {
        tags: [
            user_cache/* userCache */.g.tag.byId(id)
        ]
    })());
const createUser = async (data)=>{
    (0,validate/* validateInputs */.C)([
        data,
        user/* ZUserUpdateInput */.rd
    ]);
    try {
        const user = await src/* prisma */.z.user.create({
            data: data,
            select: {
                name: true,
                notificationSettings: true,
                id: true,
                email: true,
                locale: true
            }
        });
        user_cache/* userCache */.g.revalidate({
            email: user.email,
            id: user.id,
            count: true
        });
        return user;
    } catch (error) {
        if (error instanceof client_.Prisma.PrismaClientKnownRequestError && error.code === "P2002") {
            throw new errors/* InvalidInputError */.oC("User with this email already exists");
        }
        if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
            throw new errors/* DatabaseError */.a$(error.message);
        }
        throw error;
    }
};

// EXTERNAL MODULE: ../../node_modules/bcryptjs/index.js
var bcryptjs = __webpack_require__(765737);
;// ./modules/auth/lib/utils.ts

const hashPassword = async (password)=>{
    const hashedPassword = await hash(password, 12);
    return hashedPassword;
};
const verifyPassword = async (password, hashedPassword)=>{
    const isValid = await (0,bcryptjs.compare)(password, hashedPassword);
    return isValid;
};

// EXTERNAL MODULE: ../../node_modules/next-auth/providers/azure-ad.js
var azure_ad = __webpack_require__(790780);
// EXTERNAL MODULE: ../../node_modules/next-auth/providers/github.js
var github = __webpack_require__(377888);
// EXTERNAL MODULE: ../../node_modules/next-auth/providers/google.js
var google = __webpack_require__(222736);
// EXTERNAL MODULE: ../../packages/lib/constants.ts
var constants = __webpack_require__(836919);
;// ./modules/ee/sso/lib/providers.ts




const getSSOProviders = ()=>[
        (0,github/* default */.A)({
            clientId: constants/* GITHUB_ID */.gK || "",
            clientSecret: constants/* GITHUB_SECRET */.hP || ""
        }),
        (0,google/* default */.A)({
            clientId: constants/* GOOGLE_CLIENT_ID */.E5 || "",
            clientSecret: constants/* GOOGLE_CLIENT_SECRET */.n$ || "",
            allowDangerousEmailAccountLinking: true
        }),
        (0,azure_ad/* default */.A)({
            clientId: constants/* AZUREAD_CLIENT_ID */.RP || "",
            clientSecret: constants/* AZUREAD_CLIENT_SECRET */.mn || "",
            tenantId: constants/* AZUREAD_TENANT_ID */.kO || ""
        }),
        {
            id: "openid",
            name: constants/* OIDC_DISPLAY_NAME */.jP || "OpenId",
            type: "oauth",
            clientId: constants/* OIDC_CLIENT_ID */.kK || "",
            clientSecret: constants/* OIDC_CLIENT_SECRET */.r4 || "",
            wellKnown: `${constants/* OIDC_ISSUER */.Mo}/.well-known/openid-configuration`,
            authorization: {
                params: {
                    scope: "openid email profile"
                }
            },
            idToken: true,
            client: {
                id_token_signed_response_alg: constants/* OIDC_SIGNING_ALGORITHM */.CT || "RS256"
            },
            checks: [
                "pkce",
                "state"
            ],
            profile: (profile)=>{
                return {
                    id: profile.sub,
                    name: profile.name,
                    email: profile.email,
                    image: profile.picture
                };
            }
        }
    ];

;// ./modules/auth/lib/brevo.ts




const createBrevoCustomer = async ({ id, email })=>{
    if (!constants/* BREVO_API_KEY */.oz) {
        return;
    }
    (0,validate/* validateInputs */.C)([
        id,
        common/* ZId */.i4
    ], [
        email,
        user/* ZUserEmail */.sO
    ]);
    try {
        const requestBody = {
            email,
            ext_id: id,
            updateEnabled: false
        };
        // Add `listIds` only if `BREVO_LIST_ID` is defined
        const listId = constants/* BREVO_LIST_ID */.aS ? parseInt(constants/* BREVO_LIST_ID */.aS, 10) : null;
        if (listId && !Number.isNaN(listId)) {
            requestBody.listIds = [
                listId
            ];
        }
        const res = await fetch("https://api.brevo.com/v3/contacts", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "api-key": constants/* BREVO_API_KEY */.oz
            },
            body: JSON.stringify(requestBody)
        });
        if (res.status !== 200) {
            console.error("Error sending user to Brevo:", await res.text());
        }
    } catch (error) {
        console.error("Error sending user to Brevo:", error);
    }
};

// EXTERNAL MODULE: ../../node_modules/zod/lib/index.mjs
var lib = __webpack_require__(545198);
;// ../../packages/types/account.ts

const ZAccountInput = lib.z.object({
    userId: lib.z.string(),
    type: lib.z.string(),
    provider: lib.z.string(),
    providerAccountId: lib.z.string(),
    access_token: lib.z.string().nullish(),
    refresh_token: lib.z.string().nullish(),
    expires_at: lib.z.number().nullish(),
    scope: lib.z.string().nullish(),
    token_type: lib.z.string().nullish(),
    id_token: lib.z.string().nullish()
});
const ZAccount = lib.z.object({
    id: lib.z.string(),
    createdAt: lib.z.date(),
    updatedAt: lib.z.date(),
    userId: lib.z.string(),
    type: lib.z.string(),
    provider: lib.z.string(),
    providerAccountId: lib.z.string(),
    access_token: lib.z.string().nullable(),
    refresh_token: lib.z.string().nullable().optional(),
    expires_at: lib.z.number().nullable(),
    scope: lib.z.string().nullable(),
    token_type: lib.z.string().nullable(),
    id_token: lib.z.string().nullable()
});

;// ../../packages/lib/account/utils.ts

const filterAccountInputData = (account)=>{
    const supportedProps = Object.keys(ZAccountInput.shape);
    return supportedProps.reduce((acc, prop)=>{
        if (account.hasOwnProperty(prop)) {
            acc[prop] = account[prop];
        }
        return acc;
    }, {});
};

;// ../../packages/lib/account/service.ts






const createAccount = async (accountData)=>{
    (0,validate/* validateInputs */.C)([
        accountData,
        ZAccountInput
    ]);
    try {
        const supportedAccountData = filterAccountInputData(accountData);
        const account = await src/* prisma */.z.account.create({
            data: supportedAccountData
        });
        return account;
    } catch (error) {
        if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
            throw new errors/* DatabaseError */.a$(error.message);
        }
        throw error;
    }
};

// EXTERNAL MODULE: ../../packages/lib/membership/service.ts
var service = __webpack_require__(377968);
// EXTERNAL MODULE: ../../packages/lib/organization/service.ts
var organization_service = __webpack_require__(353687);
// EXTERNAL MODULE: ../../packages/lib/utils/locale.ts
var locale = __webpack_require__(615572);
;// ./modules/ee/sso/lib/sso-handlers.ts









const handleSSOCallback = async ({ user, account })=>{
    if (!user.email || account.type !== "oauth") {
        return false;
    }
    if (account.provider) {
        const provider = account.provider.toLowerCase().replace("-", "");
        // check if accounts for this provider / account Id already exists
        const existingUserWithAccount = await src/* prisma */.z.user.findFirst({
            include: {
                accounts: {
                    where: {
                        provider: account.provider
                    }
                }
            },
            where: {
                identityProvider: provider,
                identityProviderAccountId: account.providerAccountId
            }
        });
        if (existingUserWithAccount) {
            // User with this provider found
            // check if email still the same
            if (existingUserWithAccount.email === user.email) {
                return true;
            }
            // user seemed to change his email within the provider
            // check if user with this email already exist
            // if not found just update user with new email address
            // if found throw an error (TODO find better solution)
            const otherUserWithEmail = await getUserByEmail(user.email);
            if (!otherUserWithEmail) {
                await updateUser(existingUserWithAccount.id, {
                    email: user.email
                });
                return true;
            }
            throw new Error("Looks like you updated your email somewhere else. A user with this new email exists already.");
        }
        // There is no existing account for this identity provider / account id
        // check if user account with this email already exists
        // if user already exists throw error and request password login
        const existingUserWithEmail = await getUserByEmail(user.email);
        if (existingUserWithEmail) {
            // Sign in the user with the existing account
            return true;
        }
        const userProfile = await createUser({
            name: user.name || user.email.split("@")[0].replace(/[^'\p{L}\p{M}\s\d-]+/gu, " ").trim(),
            email: user.email,
            emailVerified: new Date(Date.now()),
            identityProvider: provider,
            identityProviderAccountId: account.providerAccountId,
            locale: await (0,locale/* findMatchingLocale */.$)()
        });
        // send new user to brevo
        createBrevoCustomer({
            id: user.id,
            email: user.email
        });
        // Default organization assignment if env variable is set
        if (constants/* DEFAULT_ORGANIZATION_ID */.ac && constants/* DEFAULT_ORGANIZATION_ID */.ac.length > 0) {
            // check if organization exists
            let organization = await (0,organization_service/* getOrganization */.SA)(constants/* DEFAULT_ORGANIZATION_ID */.ac);
            let isNewOrganization = false;
            if (!organization) {
                // create organization with id from env
                organization = await (0,organization_service/* createOrganization */.EC)({
                    id: constants/* DEFAULT_ORGANIZATION_ID */.ac,
                    name: userProfile.name + "'s Organization"
                });
                isNewOrganization = true;
            }
            const role = isNewOrganization ? "owner" : constants/* DEFAULT_ORGANIZATION_ROLE */.tE || "manager";
            await (0,service/* createMembership */.$)(organization.id, userProfile.id, {
                role: role,
                accepted: true
            });
            await createAccount({
                ...account,
                userId: userProfile.id
            });
            const updatedNotificationSettings = {
                ...userProfile.notificationSettings,
                alert: {
                    ...userProfile.notificationSettings?.alert
                },
                unsubscribedOrganizationIds: Array.from(new Set([
                    ...userProfile.notificationSettings?.unsubscribedOrganizationIds || [],
                    organization.id
                ])),
                weeklySummary: {
                    ...userProfile.notificationSettings?.weeklySummary
                }
            };
            await updateUser(userProfile.id, {
                notificationSettings: updatedNotificationSettings
            });
            return true;
        }
        // Without default organization assignment
        return true;
    }
    return true;
};

// EXTERNAL MODULE: ../../node_modules/next-auth/providers/credentials.js
var credentials = __webpack_require__(978357);
// EXTERNAL MODULE: ../../packages/lib/crypto.ts
var lib_crypto = __webpack_require__(549673);
// EXTERNAL MODULE: ../../packages/lib/jwt.ts
var jwt = __webpack_require__(360379);
;// ./modules/auth/lib/authOptions.ts










const authOptions = {
    providers: [
        (0,credentials/* default */.A)({
            id: "credentials",
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: "Credentials",
            // The credentials is used to generate a suitable form on the sign in page.
            // You can specify whatever fields you are expecting to be submitted.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                email: {
                    label: "Email Address",
                    type: "email",
                    placeholder: "Your email address"
                },
                password: {
                    label: "Password",
                    type: "password",
                    placeholder: "Your password"
                },
                totpCode: {
                    label: "Two-factor Code",
                    type: "input",
                    placeholder: "Code from authenticator app"
                },
                backupCode: {
                    label: "Backup Code",
                    type: "input",
                    placeholder: "Two-factor backup code"
                }
            },
            async authorize (credentials, _req) {
                if (!credentials) {
                    throw new Error("Invalid credentials");
                }
                let user;
                try {
                    user = await src/* prisma */.z.user.findUnique({
                        where: {
                            email: credentials?.email
                        }
                    });
                } catch (e) {
                    console.error(e);
                    throw Error("Internal server error. Please try again later");
                }
                if (!user) {
                    throw new Error("Invalid credentials");
                }
                if (!user.password) {
                    throw new Error("User has no password stored");
                }
                const isValid = await verifyPassword(credentials.password, user.password);
                if (!isValid) {
                    throw new Error("Invalid credentials");
                }
                if (user.twoFactorEnabled && credentials.backupCode) {
                    if (!constants/* ENCRYPTION_KEY */.o7) {
                        console.error("Missing encryption key; cannot proceed with backup code login.");
                        throw new Error("Internal Server Error");
                    }
                    if (!user.backupCodes) throw new Error("No backup codes found");
                    const backupCodes = JSON.parse((0,lib_crypto/* symmetricDecrypt */.zp)(user.backupCodes, constants/* ENCRYPTION_KEY */.o7));
                    // check if user-supplied code matches one
                    const index = backupCodes.indexOf(credentials.backupCode.replaceAll("-", ""));
                    if (index === -1) throw new Error("Invalid backup code");
                    // delete verified backup code and re-encrypt remaining
                    backupCodes[index] = null;
                    await src/* prisma */.z.user.update({
                        where: {
                            id: user.id
                        },
                        data: {
                            backupCodes: (0,lib_crypto/* symmetricEncrypt */.vX)(JSON.stringify(backupCodes), constants/* ENCRYPTION_KEY */.o7)
                        }
                    });
                } else if (user.twoFactorEnabled) {
                    if (!credentials.totpCode) {
                        throw new Error("second factor required");
                    }
                    if (!user.twoFactorSecret) {
                        throw new Error("Internal Server Error");
                    }
                    if (!constants/* ENCRYPTION_KEY */.o7) {
                        throw new Error("Internal Server Error");
                    }
                    const secret = (0,lib_crypto/* symmetricDecrypt */.zp)(user.twoFactorSecret, constants/* ENCRYPTION_KEY */.o7);
                    if (secret.length !== 32) {
                        throw new Error("Invalid two factor secret");
                    }
                    const isValidToken = (await __webpack_require__.e(/* import() */ 4081).then(__webpack_require__.bind(__webpack_require__, 134081))).totpAuthenticatorCheck(credentials.totpCode, secret);
                    if (!isValidToken) {
                        throw new Error("Invalid two factor code");
                    }
                }
                return {
                    id: user.id,
                    email: user.email,
                    emailVerified: user.emailVerified,
                    imageUrl: user.imageUrl
                };
            }
        }),
        (0,credentials/* default */.A)({
            id: "token",
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: "Token",
            // The credentials is used to generate a suitable form on the sign in page.
            // You can specify whatever fields you are expecting to be submitted.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                token: {
                    label: "Verification Token",
                    type: "string"
                }
            },
            async authorize (credentials, _req) {
                let user;
                try {
                    if (!credentials?.token) {
                        throw new Error("Token not found");
                    }
                    const { id } = await (0,jwt/* verifyToken */.nr)(credentials?.token);
                    user = await src/* prisma */.z.user.findUnique({
                        where: {
                            id: id
                        }
                    });
                } catch (e) {
                    throw new Error("Either a user does not match the provided token or the token is invalid");
                }
                if (!user) {
                    throw new Error("Either a user does not match the provided token or the token is invalid");
                }
                if (user.emailVerified) {
                    throw new Error("Email already verified");
                }
                user = await updateUser(user.id, {
                    emailVerified: new Date()
                });
                // send new user to brevo after email verification
                createBrevoCustomer({
                    id: user.id,
                    email: user.email
                });
                return user;
            }
        }),
        // Conditionally add enterprise SSO providers
        ...constants/* ENTERPRISE_LICENSE_KEY */.an ? getSSOProviders() : []
    ],
    callbacks: {
        async jwt ({ token }) {
            const existingUser = await getUserByEmail(token?.email);
            if (!existingUser) {
                return token;
            }
            return {
                ...token,
                profile: {
                    id: existingUser.id
                }
            };
        },
        async session ({ session, token }) {
            // @ts-expect-error
            session.user.id = token?.id;
            // @ts-expect-error
            session.user = token.profile;
            return session;
        },
        async signIn ({ user, account }) {
            if (account?.provider === "credentials" || account?.provider === "token") {
                // check if user's email is verified or not
                if (!user.emailVerified && !constants/* EMAIL_VERIFICATION_DISABLED */.Q$) {
                    throw new Error("Email Verification is Pending");
                }
                return true;
            }
            if (constants/* ENTERPRISE_LICENSE_KEY */.an) {
                return handleSSOCallback({
                    user,
                    account
                });
            }
            return true;
        }
    },
    pages: {
        signIn: "/auth/login",
        signOut: "/auth/logout",
        error: "/auth/login"
    }
};


/***/ }),

/***/ 831271:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

if (false) {} else {
    if (false) {} else {
        if (false) {} else if (false) {} else {
            module.exports = __webpack_require__(744870);
        }
    }
}

//# sourceMappingURL=module.compiled.js.map

/***/ }),

/***/ 831040:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Mr: () => (/* binding */ writeData),
/* harmony export */   Wd: () => (/* binding */ fetchAirtableAuthToken),
/* harmony export */   eZ: () => (/* binding */ getAirtableTables),
/* harmony export */   oI: () => (/* binding */ getTables)
/* harmony export */ });
/* unused harmony exports getBases, getAirtableToken */
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(896330);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(470641);
/* harmony import */ var _formbricks_types_integration_airtable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(367365);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(836919);
/* harmony import */ var _integration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43684);
/* harmony import */ var _utils_strings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(302722);






const getBases = async (key)=>{
    const req = await fetch("https://api.airtable.com/v0/meta/bases", {
        headers: {
            Authorization: `Bearer ${key}`
        }
    });
    const res = await req.json();
    return _formbricks_types_integration_airtable__WEBPACK_IMPORTED_MODULE_1__/* .ZIntegrationAirtableBases */ .PH.parse(res);
};
const tableFetcher = async (key, baseId)=>{
    const req = await fetch(`https://api.airtable.com/v0/meta/bases/${baseId}/tables`, {
        headers: {
            Authorization: `Bearer ${key.access_token}`
        }
    });
    const res = await req.json();
    return res;
};
const getTables = async (key, baseId)=>{
    const res = await tableFetcher(key, baseId);
    return _formbricks_types_integration_airtable__WEBPACK_IMPORTED_MODULE_1__/* .ZIntegrationAirtableTables */ .wh.parse(res);
};
const fetchAirtableAuthToken = async (formData)=>{
    const formBody = Object.keys(formData).map((key)=>`${encodeURIComponent(key)}=${encodeURIComponent(formData[key])}`).join("&");
    const tokenReq = await fetch("https://airtable.com/oauth2/v1/token", {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: formBody,
        method: "POST"
    });
    const tokenRes = await tokenReq.json();
    const parsedToken = _formbricks_types_integration_airtable__WEBPACK_IMPORTED_MODULE_1__/* .ZIntegrationAirtableTokenSchema */ .ho.safeParse(tokenRes);
    if (!parsedToken.success) {
        console.error(parsedToken.error);
        throw new Error(parsedToken.error.message);
    }
    const { access_token, refresh_token, expires_in } = parsedToken.data;
    const expiry_date = new Date();
    expiry_date.setSeconds(expiry_date.getSeconds() + expires_in);
    return {
        access_token,
        expiry_date: expiry_date.toISOString(),
        refresh_token
    };
};
const getAirtableToken = async (environmentId)=>{
    try {
        const airtableIntegration = await (0,_integration_service__WEBPACK_IMPORTED_MODULE_2__/* .getIntegrationByType */ .ks)(environmentId, "airtable");
        const { access_token, expiry_date, refresh_token } = _formbricks_types_integration_airtable__WEBPACK_IMPORTED_MODULE_1__/* .ZIntegrationAirtableCredential */ .kx.parse(airtableIntegration?.config.key);
        const expiryDate = new Date(expiry_date);
        const currentDate = new Date();
        if (currentDate >= expiryDate) {
            const client_id = _constants__WEBPACK_IMPORTED_MODULE_3__/* .AIRTABLE_CLIENT_ID */ .JB;
            const newToken = await fetchAirtableAuthToken({
                grant_type: "refresh_token",
                refresh_token,
                client_id
            });
            if (!newToken) {
                throw new Error("Failed to create new token");
            }
            await (0,_integration_service__WEBPACK_IMPORTED_MODULE_2__/* .createOrUpdateIntegration */ .d6)(environmentId, {
                type: "airtable",
                config: {
                    data: airtableIntegration?.config?.data ?? [],
                    email: airtableIntegration?.config?.email ?? "",
                    key: newToken
                }
            });
            return newToken.access_token;
        }
        return access_token;
    } catch (error) {
        await (0,_integration_service__WEBPACK_IMPORTED_MODULE_2__/* .deleteIntegration */ .qo)(environmentId);
        throw new Error("invalid token");
    }
};
const getAirtableTables = async (environmentId)=>{
    let tables = [];
    try {
        const token = await getAirtableToken(environmentId);
        tables = (await getBases(token)).bases;
        return tables;
    } catch (error) {
        if (error instanceof _prisma_client__WEBPACK_IMPORTED_MODULE_0__.Prisma.PrismaClientKnownRequestError) {
            throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_4__/* .DatabaseError */ .a$("Database operation failed");
        }
        throw error;
    }
};
const addRecords = async (key, baseId, tableId, data)=>{
    const req = await fetch(`https://api.airtable.com/v0/${baseId}/${tableId}`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${key.access_token}`,
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            fields: data,
            typecast: true
        })
    });
    const res = await req.json();
    return res;
};
const addField = async (key, baseId, tableId, data)=>{
    const req = await fetch(`https://api.airtable.com/v0/meta/bases/${baseId}/tables/${tableId}/fields`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${key.access_token}`,
            "Content-type": "application/json"
        },
        body: JSON.stringify(data)
    });
    return await req.json();
};
const writeData = async (key, configData, values)=>{
    const responses = values[0];
    const questions = values[1];
    const data = {};
    for(let i = 0; i < questions.length; i++){
        data[questions[i]] = responses[i].length > _constants__WEBPACK_IMPORTED_MODULE_3__/* .AIRTABLE_MESSAGE_LIMIT */ .dq ? (0,_utils_strings__WEBPACK_IMPORTED_MODULE_5__/* .truncateText */ .EJ)(responses[i], _constants__WEBPACK_IMPORTED_MODULE_3__/* .AIRTABLE_MESSAGE_LIMIT */ .dq) : responses[i];
    }
    const req = await tableFetcher(key, configData.baseId);
    const tables = _formbricks_types_integration_airtable__WEBPACK_IMPORTED_MODULE_1__/* .ZIntegrationAirtableTablesWithFields */ .jj.parse(req).tables;
    const currentTable = tables.find((table)=>table.id === configData.tableId);
    if (currentTable) {
        const currentFields = new Set(currentTable.fields.map((field)=>field.name));
        const fieldsToCreate = new Set();
        for (const field of questions){
            const hasField = currentFields.has(field);
            if (!hasField) {
                fieldsToCreate.add(field);
            }
        }
        if (fieldsToCreate.size > 0) {
            const createFieldPromise = [];
            fieldsToCreate.forEach((fieldName)=>{
                createFieldPromise.push(addField(key, configData.baseId, configData.tableId, {
                    name: fieldName,
                    type: "singleLineText"
                }));
            });
            await Promise.all(createFieldPromise);
        }
    }
    await addRecords(key, configData.baseId, configData.tableId, data);
};


/***/ }),

/***/ 549673:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C7: () => (/* binding */ generateLocalSignedUrl),
/* harmony export */   Zd: () => (/* binding */ getHash),
/* harmony export */   gg: () => (/* binding */ decryptAES128),
/* harmony export */   jQ: () => (/* binding */ validateLocalSignedUrl),
/* harmony export */   vX: () => (/* binding */ symmetricEncrypt),
/* harmony export */   zp: () => (/* binding */ symmetricDecrypt)
/* harmony export */ });
/* unused harmony export encryptAES128 */
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(455511);
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(836919);



const ALGORITHM = "aes256";
const INPUT_ENCODING = "utf8";
const OUTPUT_ENCODING = "hex";
const BUFFER_ENCODING = _constants__WEBPACK_IMPORTED_MODULE_1__/* .ENCRYPTION_KEY */ .o7.length === 32 ? "latin1" : "hex";
const IV_LENGTH = 16; // AES blocksize
/**
 *
 * @param text Value to be encrypted
 * @param key Key used to encrypt value must be 32 bytes for AES256 encryption algorithm
 *
 * @returns Encrypted value using key
 */ const symmetricEncrypt = (text, key)=>{
    const _key = Buffer.from(key, BUFFER_ENCODING);
    const iv = crypto__WEBPACK_IMPORTED_MODULE_0___default().randomBytes(IV_LENGTH);
    // @ts-ignore -- the package needs to be built
    const cipher = crypto__WEBPACK_IMPORTED_MODULE_0___default().createCipheriv(ALGORITHM, _key, iv);
    let ciphered = cipher.update(text, INPUT_ENCODING, OUTPUT_ENCODING);
    ciphered += cipher.final(OUTPUT_ENCODING);
    const ciphertext = iv.toString(OUTPUT_ENCODING) + ":" + ciphered;
    return ciphertext;
};
/**
 *
 * @param text Value to decrypt
 * @param key Key used to decrypt value must be 32 bytes for AES256 encryption algorithm
 */ const symmetricDecrypt = (text, key)=>{
    const _key = Buffer.from(key, BUFFER_ENCODING);
    const components = text.split(":");
    const iv_from_ciphertext = Buffer.from(components.shift() || "", OUTPUT_ENCODING);
    // @ts-ignore -- the package needs to be built
    const decipher = crypto__WEBPACK_IMPORTED_MODULE_0___default().createDecipheriv(ALGORITHM, _key, iv_from_ciphertext);
    let deciphered = decipher.update(components.join(":"), OUTPUT_ENCODING, INPUT_ENCODING);
    deciphered += decipher.final(INPUT_ENCODING);
    return deciphered;
};
const getHash = (key)=>(0,crypto__WEBPACK_IMPORTED_MODULE_0__.createHash)("sha256").update(key).digest("hex");
// create an aes128 encryption function
const encryptAES128 = (encryptionKey, data)=>{
    // @ts-ignore -- the package needs to be built
    const cipher = createCipheriv("aes-128-ecb", Buffer.from(encryptionKey, "base64"), "");
    let encrypted = cipher.update(data, "utf-8", "hex");
    encrypted += cipher.final("hex");
    return encrypted;
};
// create an aes128 decryption function
const decryptAES128 = (encryptionKey, data)=>{
    // @ts-ignore -- the package needs to be built
    const cipher = (0,crypto__WEBPACK_IMPORTED_MODULE_0__.createDecipheriv)("aes-128-ecb", Buffer.from(encryptionKey, "base64"), "");
    let decrypted = cipher.update(data, "hex", "utf-8");
    decrypted += cipher.final("utf-8");
    return decrypted;
};
const generateLocalSignedUrl = (fileName, environmentId, fileType)=>{
    const uuid = (0,crypto__WEBPACK_IMPORTED_MODULE_0__.randomBytes)(16).toString("hex");
    const timestamp = Date.now();
    const data = `${uuid}:${fileName}:${environmentId}:${fileType}:${timestamp}`;
    const signature = (0,crypto__WEBPACK_IMPORTED_MODULE_0__.createHmac)("sha256", _constants__WEBPACK_IMPORTED_MODULE_1__/* .ENCRYPTION_KEY */ .o7).update(data).digest("hex");
    return {
        signature,
        uuid,
        timestamp
    };
};
const validateLocalSignedUrl = (uuid, fileName, environmentId, fileType, timestamp, signature, secret)=>{
    const data = `${uuid}:${fileName}:${environmentId}:${fileType}:${timestamp}`;
    const expectedSignature = (0,crypto__WEBPACK_IMPORTED_MODULE_0__.createHmac)("sha256", secret).update(data).digest("hex");
    if (expectedSignature !== signature) {
        return false;
    }
    // valid for 5 minutes
    if (Date.now() - timestamp > 1000 * 60 * 5) {
        return false;
    }
    return true;
};


/***/ }),

/***/ 266640:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ hasUserEnvironmentAccess)
/* harmony export */ });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(896330);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _formbricks_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(527610);
/* harmony import */ var _formbricks_types_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(733735);
/* harmony import */ var _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(470641);
/* harmony import */ var _cache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(794356);
/* harmony import */ var _organization_cache__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(530190);
/* harmony import */ var _utils_validate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(860988);







const hasUserEnvironmentAccess = async (userId, environmentId)=>(0,_cache__WEBPACK_IMPORTED_MODULE_2__/* .cache */ .P)(async ()=>{
        (0,_utils_validate__WEBPACK_IMPORTED_MODULE_3__/* .validateInputs */ .C)([
            userId,
            _formbricks_types_common__WEBPACK_IMPORTED_MODULE_4__/* .ZId */ .i4
        ], [
            environmentId,
            _formbricks_types_common__WEBPACK_IMPORTED_MODULE_4__/* .ZId */ .i4
        ]);
        try {
            const orgMembership = await _formbricks_database__WEBPACK_IMPORTED_MODULE_1__/* .prisma */ .z.membership.findFirst({
                where: {
                    userId,
                    organization: {
                        projects: {
                            some: {
                                environments: {
                                    some: {
                                        id: environmentId
                                    }
                                }
                            }
                        }
                    }
                }
            });
            if (!orgMembership) return false;
            if (orgMembership.role === "owner" || orgMembership.role === "manager" || orgMembership.role === "billing") return true;
            const teamMembership = await _formbricks_database__WEBPACK_IMPORTED_MODULE_1__/* .prisma */ .z.teamUser.findFirst({
                where: {
                    userId,
                    team: {
                        projectTeams: {
                            some: {
                                project: {
                                    environments: {
                                        some: {
                                            id: environmentId
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            });
            if (teamMembership) return true;
            return false;
        } catch (error) {
            if (error instanceof _prisma_client__WEBPACK_IMPORTED_MODULE_0__.Prisma.PrismaClientKnownRequestError) {
                throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_5__/* .DatabaseError */ .a$(error.message);
            }
            throw error;
        }
    }, [
        `hasUserEnvironmentAccess-${userId}-${environmentId}`
    ], {
        tags: [
            _organization_cache__WEBPACK_IMPORTED_MODULE_6__/* .organizationCache */ .S.tag.byEnvironmentId(environmentId),
            _organization_cache__WEBPACK_IMPORTED_MODULE_6__/* .organizationCache */ .S.tag.byUserId(userId)
        ]
    })();


/***/ }),

/***/ 835093:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: () => (/* binding */ integrationCache)
/* harmony export */ });
/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87863);
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

/***/ 43684:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  d6: () => (/* binding */ createOrUpdateIntegration),
  qo: () => (/* binding */ deleteIntegration),
  ks: () => (/* binding */ getIntegrationByType),
  Yl: () => (/* binding */ getIntegrations)
});

// UNUSED EXPORTS: getIntegration

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
// EXTERNAL MODULE: ../../node_modules/zod/lib/index.mjs
var lib = __webpack_require__(545198);
// EXTERNAL MODULE: ../../packages/types/integration/airtable.ts
var airtable = __webpack_require__(367365);
// EXTERNAL MODULE: ../../packages/types/integration/google-sheet.ts
var google_sheet = __webpack_require__(816948);
// EXTERNAL MODULE: ../../packages/types/integration/shared-types.ts
var shared_types = __webpack_require__(965340);
;// ../../packages/types/integration/notion.ts


const ZIntegrationNotionCredential = lib.z.object({
    access_token: lib.z.string(),
    bot_id: lib.z.string(),
    token_type: lib.z.string(),
    duplicated_template_id: lib.z.string().nullable(),
    owner: lib.z.object({
        type: lib.z.string(),
        workspace: lib.z.boolean().nullish(),
        user: lib.z.object({
            id: lib.z.string(),
            name: lib.z.string().nullish(),
            type: lib.z.string().nullish(),
            object: lib.z.string(),
            person: lib.z.object({
                email: lib.z.string().email()
            }).nullish(),
            avatar_url: lib.z.string().nullish()
        }).nullable()
    }),
    workspace_icon: lib.z.string().nullable(),
    workspace_id: lib.z.string(),
    workspace_name: lib.z.string().nullable()
});
const ZIntegrationNotionConfigData = lib.z.object({
    // question -> notion database column mapping
    mapping: lib.z.array(lib.z.object({
        question: lib.z.object({
            id: lib.z.string(),
            name: lib.z.string(),
            type: lib.z.string()
        }),
        column: lib.z.object({
            id: lib.z.string(),
            name: lib.z.string(),
            type: lib.z.string()
        })
    })),
    databaseId: lib.z.string(),
    databaseName: lib.z.string()
}).merge(shared_types/* ZIntegrationBaseSurveyData */.g.omit({
    questionIds: true,
    questions: true
}));
const ZIntegrationNotionConfig = lib.z.object({
    key: ZIntegrationNotionCredential,
    data: lib.z.array(ZIntegrationNotionConfigData)
});
const ZIntegrationNotion = shared_types/* ZIntegrationBase */.U.extend({
    type: lib.z.literal("notion"),
    config: ZIntegrationNotionConfig
});
const ZIntegrationNotionInput = lib.z.object({
    type: lib.z.literal("notion"),
    config: ZIntegrationNotionConfig
});
const ZIntegrationNotionDatabase = lib.z.object({
    id: lib.z.string(),
    name: lib.z.string(),
    properties: lib.z.object({})
});

;// ../../packages/types/integration/slack.ts


const ZIntegrationSlackConfigData = lib.z.object({
    // Channel Mapped to a Particular Survey where we have to send the data from the above survey
    channelId: lib.z.string(),
    channelName: lib.z.string()
}).merge(shared_types/* ZIntegrationBaseSurveyData */.g);
const ZIntegrationSlackCredential = lib.z.object({
    app_id: lib.z.string(),
    authed_user: lib.z.object({
        id: lib.z.string()
    }),
    token_type: lib.z.literal("bot"),
    access_token: lib.z.string(),
    bot_user_id: lib.z.string(),
    team: lib.z.object({
        id: lib.z.string(),
        name: lib.z.string()
    })
});
const ZIntegrationSlackConfig = lib.z.object({
    key: ZIntegrationSlackCredential,
    data: lib.z.array(ZIntegrationSlackConfigData)
});
const ZIntegrationSlack = shared_types/* ZIntegrationBase */.U.extend({
    type: lib.z.literal("slack"),
    config: ZIntegrationSlackConfig
});
const ZIntegrationSlackInput = lib.z.object({
    type: lib.z.literal("slack"),
    config: ZIntegrationSlackConfig
});

;// ../../packages/types/integration/index.ts





const ZIntegrationType = lib.z.enum([
    "googleSheets",
    "n8n",
    "airtable",
    "notion",
    "slack"
]);
const ZIntegrationConfig = lib.z.union([
    google_sheet/* ZIntegrationGoogleSheetsConfig */.qO,
    airtable/* ZIntegrationAirtableConfig */.rO,
    ZIntegrationNotionConfig,
    ZIntegrationSlackConfig
]);
const ZIntegrationBase = lib.z.object({
    id: lib.z.string(),
    environmentId: lib.z.string()
});
const ZIntegration = ZIntegrationBase.extend({
    type: ZIntegrationType,
    config: ZIntegrationConfig
});
const ZIntegrationBaseSurveyData = lib.z.object({
    createdAt: lib.z.date(),
    questionIds: lib.z.array(lib.z.string()),
    questions: lib.z.string(),
    surveyId: lib.z.string(),
    surveyName: lib.z.string()
});
const ZIntegrationInput = lib.z.discriminatedUnion("type", [
    google_sheet/* ZIntegrationGoogleSheetsInput */.Q2,
    airtable/* ZIntegrationAirtableInput */.BZ,
    ZIntegrationNotionInput,
    ZIntegrationSlackInput
]);
const ZIntegrationItem = lib.z.object({
    name: lib.z.string(),
    id: lib.z.string()
});

// EXTERNAL MODULE: ../../packages/lib/cache.ts
var cache = __webpack_require__(794356);
// EXTERNAL MODULE: ../../packages/lib/constants.ts
var constants = __webpack_require__(836919);
// EXTERNAL MODULE: ../../packages/lib/utils/validate.ts
var validate = __webpack_require__(860988);
// EXTERNAL MODULE: ../../packages/lib/integration/cache.ts
var integration_cache = __webpack_require__(835093);
;// ../../packages/lib/integration/service.ts












const transformIntegration = (integration)=>{
    return {
        ...integration,
        config: {
            ...integration.config,
            data: integration.config.data.map((data)=>({
                    ...data,
                    createdAt: new Date(data.createdAt)
                }))
        }
    };
};
const createOrUpdateIntegration = async (environmentId, integrationData)=>{
    (0,validate/* validateInputs */.C)([
        environmentId,
        common/* ZId */.i4
    ]);
    try {
        const integration = await src/* prisma */.z.integration.upsert({
            where: {
                type_environmentId: {
                    environmentId,
                    type: integrationData.type
                }
            },
            update: {
                ...integrationData,
                environment: {
                    connect: {
                        id: environmentId
                    }
                }
            },
            create: {
                ...integrationData,
                environment: {
                    connect: {
                        id: environmentId
                    }
                }
            }
        });
        integration_cache/* integrationCache */.t.revalidate({
            environmentId,
            type: integrationData.type
        });
        return integration;
    } catch (error) {
        if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
            console.error(error);
            throw new errors/* DatabaseError */.a$(error.message);
        }
        throw error;
    }
};
const getIntegrations = (0,react.cache)(async (environmentId, page)=>(0,cache/* cache */.P)(async ()=>{
        (0,validate/* validateInputs */.C)([
            environmentId,
            common/* ZId */.i4
        ], [
            page,
            common/* ZOptionalNumber */.Wo
        ]);
        try {
            const integrations = await src/* prisma */.z.integration.findMany({
                where: {
                    environmentId
                },
                take: page ? constants/* ITEMS_PER_PAGE */.re : undefined,
                skip: page ? constants/* ITEMS_PER_PAGE */.re * (page - 1) : undefined
            });
            return integrations;
        } catch (error) {
            if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
                throw new errors/* DatabaseError */.a$(error.message);
            }
            throw error;
        }
    }, [
        `getIntegrations-${environmentId}-${page}`
    ], {
        tags: [
            integration_cache/* integrationCache */.t.tag.byEnvironmentId(environmentId)
        ]
    })().then((cachedIntegration)=>{
        return cachedIntegration.map((integration)=>transformIntegration(integration));
    }));
const getIntegration = (0,react.cache)(async (integrationId)=>(0,cache/* cache */.P)(async ()=>{
        try {
            const integration = await src/* prisma */.z.integration.findUnique({
                where: {
                    id: integrationId
                }
            });
            return integration;
        } catch (error) {
            if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
                throw new errors/* DatabaseError */.a$(error.message);
            }
            throw error;
        }
    }, [
        `getIntegration-${integrationId}`
    ], {
        tags: [
            integration_cache/* integrationCache */.t.tag.byId(integrationId)
        ]
    })());
const getIntegrationByType = (0,react.cache)(async (environmentId, type)=>(0,cache/* cache */.P)(async ()=>{
        (0,validate/* validateInputs */.C)([
            environmentId,
            common/* ZId */.i4
        ], [
            type,
            ZIntegrationType
        ]);
        try {
            const integration = await src/* prisma */.z.integration.findUnique({
                where: {
                    type_environmentId: {
                        environmentId,
                        type
                    }
                }
            });
            return integration;
        } catch (error) {
            if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
                throw new errors/* DatabaseError */.a$(error.message);
            }
            throw error;
        }
    }, [
        `getIntegrationByType-${environmentId}-${type}`
    ], {
        tags: [
            integration_cache/* integrationCache */.t.tag.byEnvironmentIdAndType(environmentId, type)
        ]
    })().then((cachedIntegration)=>{
        if (cachedIntegration) {
            return transformIntegration(cachedIntegration);
        } else return null;
    }));
const deleteIntegration = async (integrationId)=>{
    (0,validate/* validateInputs */.C)([
        integrationId,
        common/* ZString */.eI
    ]);
    try {
        const integrationData = await src/* prisma */.z.integration.delete({
            where: {
                id: integrationId
            }
        });
        integration_cache/* integrationCache */.t.revalidate({
            id: integrationData.id,
            environmentId: integrationData.environmentId,
            type: integrationData.type
        });
        return integrationData;
    } catch (error) {
        if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
            throw new errors/* DatabaseError */.a$(error.message);
        }
        throw error;
    }
};


/***/ }),

/***/ 360379:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CN: () => (/* binding */ verifyTokenForLinkSurvey),
/* harmony export */   Oj: () => (/* binding */ verifyInviteToken),
/* harmony export */   ao: () => (/* binding */ getEmailFromEmailToken),
/* harmony export */   nr: () => (/* binding */ verifyToken)
/* harmony export */ });
/* unused harmony exports createToken, createTokenForLinkSurvey, createEmailToken, createInviteToken */
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(900365);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _formbricks_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(527610);
/* harmony import */ var _crypto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(549673);
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(162437);




const createToken = (userId, userEmail, options = {})=>{
    const encryptedUserId = symmetricEncrypt(userId, env.ENCRYPTION_KEY);
    return jwt.sign({
        id: encryptedUserId
    }, env.NEXTAUTH_SECRET + userEmail, options);
};
const createTokenForLinkSurvey = (surveyId, userEmail)=>{
    const encryptedEmail = symmetricEncrypt(userEmail, env.ENCRYPTION_KEY);
    return jwt.sign({
        email: encryptedEmail
    }, env.NEXTAUTH_SECRET + surveyId);
};
const createEmailToken = (email)=>{
    const encryptedEmail = symmetricEncrypt(email, env.ENCRYPTION_KEY);
    return jwt.sign({
        email: encryptedEmail
    }, env.NEXTAUTH_SECRET);
};
const getEmailFromEmailToken = (token)=>{
    const payload = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(token, _env__WEBPACK_IMPORTED_MODULE_2__/* .env */ ._.NEXTAUTH_SECRET);
    try {
        // Try to decrypt first (for newer tokens)
        const decryptedEmail = (0,_crypto__WEBPACK_IMPORTED_MODULE_3__/* .symmetricDecrypt */ .zp)(payload.email, _env__WEBPACK_IMPORTED_MODULE_2__/* .env */ ._.ENCRYPTION_KEY);
        return decryptedEmail;
    } catch  {
        // If decryption fails, return the original email (for older tokens)
        return payload.email;
    }
};
const createInviteToken = (inviteId, email, options = {})=>{
    const encryptedInviteId = symmetricEncrypt(inviteId, env.ENCRYPTION_KEY);
    const encryptedEmail = symmetricEncrypt(email, env.ENCRYPTION_KEY);
    return jwt.sign({
        inviteId: encryptedInviteId,
        email: encryptedEmail
    }, env.NEXTAUTH_SECRET, options);
};
const verifyTokenForLinkSurvey = (token, surveyId)=>{
    try {
        const { email } = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(token, _env__WEBPACK_IMPORTED_MODULE_2__/* .env */ ._.NEXTAUTH_SECRET + surveyId);
        try {
            // Try to decrypt first (for newer tokens)
            const decryptedEmail = (0,_crypto__WEBPACK_IMPORTED_MODULE_3__/* .symmetricDecrypt */ .zp)(email, _env__WEBPACK_IMPORTED_MODULE_2__/* .env */ ._.ENCRYPTION_KEY);
            return decryptedEmail;
        } catch  {
            // If decryption fails, return the original email (for older tokens)
            return email;
        }
    } catch (err) {
        return null;
    }
};
const verifyToken = async (token)=>{
    // First decode to get the ID
    const decoded = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().decode(token);
    const payload = decoded;
    if (!payload) {
        throw new Error("Token is invalid");
    }
    const { id } = payload;
    if (!id) {
        throw new Error("Token missing required field: id");
    }
    // Try to decrypt the ID (for newer tokens), if it fails use the ID as-is (for older tokens)
    let decryptedId;
    try {
        decryptedId = (0,_crypto__WEBPACK_IMPORTED_MODULE_3__/* .symmetricDecrypt */ .zp)(id, _env__WEBPACK_IMPORTED_MODULE_2__/* .env */ ._.ENCRYPTION_KEY);
    } catch  {
        decryptedId = id;
    }
    // If no email provided, look up the user
    const foundUser = await _formbricks_database__WEBPACK_IMPORTED_MODULE_1__/* .prisma */ .z.user.findUnique({
        where: {
            id: decryptedId
        }
    });
    if (!foundUser) {
        throw new Error("User not found");
    }
    const userEmail = foundUser.email;
    return {
        id: decryptedId,
        email: userEmail
    };
};
const verifyInviteToken = (token)=>{
    try {
        const decoded = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().decode(token);
        const payload = decoded;
        const { inviteId, email } = payload;
        let decryptedInviteId;
        let decryptedEmail;
        try {
            // Try to decrypt first (for newer tokens)
            decryptedInviteId = (0,_crypto__WEBPACK_IMPORTED_MODULE_3__/* .symmetricDecrypt */ .zp)(inviteId, _env__WEBPACK_IMPORTED_MODULE_2__/* .env */ ._.ENCRYPTION_KEY);
            decryptedEmail = (0,_crypto__WEBPACK_IMPORTED_MODULE_3__/* .symmetricDecrypt */ .zp)(email, _env__WEBPACK_IMPORTED_MODULE_2__/* .env */ ._.ENCRYPTION_KEY);
        } catch  {
            // If decryption fails, use original values (for older tokens)
            decryptedInviteId = inviteId;
            decryptedEmail = email;
        }
        return {
            inviteId: decryptedInviteId,
            email: decryptedEmail
        };
    } catch (error) {
        console.error(`Error verifying invite token: ${error}`);
        throw new Error("Invalid or expired invite token");
    }
};


/***/ }),

/***/ 823609:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ membershipCache)
/* harmony export */ });
/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87863);
/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_cache__WEBPACK_IMPORTED_MODULE_0__);

const membershipCache = {
    tag: {
        byOrganizationId (organizationId) {
            return `organizations-${organizationId}-memberships`;
        },
        byUserId (userId) {
            return `users-${userId}-memberships`;
        }
    },
    revalidate ({ organizationId, userId }) {
        if (organizationId) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(this.tag.byOrganizationId(organizationId));
        }
        if (userId) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(this.tag.byUserId(userId));
        }
    }
};


/***/ }),

/***/ 377968:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ createMembership),
/* harmony export */   Y: () => (/* binding */ getMembershipByUserIdOrganizationId)
/* harmony export */ });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(896330);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(922728);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _formbricks_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(527610);
/* harmony import */ var _formbricks_types_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(733735);
/* harmony import */ var _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(470641);
/* harmony import */ var _formbricks_types_memberships__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(715521);
/* harmony import */ var _cache__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(794356);
/* harmony import */ var _membership_cache__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(823609);
/* harmony import */ var _organization_cache__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(530190);
/* harmony import */ var _utils_validate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(860988);











const getMembershipByUserIdOrganizationId = (0,react__WEBPACK_IMPORTED_MODULE_1__.cache)(async (userId, organizationId)=>(0,_cache__WEBPACK_IMPORTED_MODULE_3__/* .cache */ .P)(async ()=>{
        (0,_utils_validate__WEBPACK_IMPORTED_MODULE_4__/* .validateInputs */ .C)([
            userId,
            _formbricks_types_common__WEBPACK_IMPORTED_MODULE_5__/* .ZString */ .eI
        ], [
            organizationId,
            _formbricks_types_common__WEBPACK_IMPORTED_MODULE_5__/* .ZString */ .eI
        ]);
        try {
            const membership = await _formbricks_database__WEBPACK_IMPORTED_MODULE_2__/* .prisma */ .z.membership.findUnique({
                where: {
                    userId_organizationId: {
                        userId,
                        organizationId
                    }
                }
            });
            if (!membership) return null;
            return membership;
        } catch (error) {
            if (error instanceof _prisma_client__WEBPACK_IMPORTED_MODULE_0__.Prisma.PrismaClientKnownRequestError) {
                console.error(error);
                throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_6__/* .DatabaseError */ .a$(error.message);
            }
            throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_6__/* .UnknownError */ .Bk("Error while fetching membership");
        }
    }, [
        `getMembershipByUserIdOrganizationId-${userId}-${organizationId}`
    ], {
        tags: [
            _membership_cache__WEBPACK_IMPORTED_MODULE_7__/* .membershipCache */ .r.tag.byUserId(userId),
            _membership_cache__WEBPACK_IMPORTED_MODULE_7__/* .membershipCache */ .r.tag.byOrganizationId(organizationId)
        ]
    })());
const createMembership = async (organizationId, userId, data)=>{
    (0,_utils_validate__WEBPACK_IMPORTED_MODULE_4__/* .validateInputs */ .C)([
        organizationId,
        _formbricks_types_common__WEBPACK_IMPORTED_MODULE_5__/* .ZString */ .eI
    ], [
        userId,
        _formbricks_types_common__WEBPACK_IMPORTED_MODULE_5__/* .ZString */ .eI
    ], [
        data,
        _formbricks_types_memberships__WEBPACK_IMPORTED_MODULE_8__/* .ZMembership */ .rl.partial()
    ]);
    try {
        const membership = await _formbricks_database__WEBPACK_IMPORTED_MODULE_2__/* .prisma */ .z.membership.create({
            data: {
                userId,
                organizationId,
                accepted: data.accepted,
                role: data.role
            }
        });
        _organization_cache__WEBPACK_IMPORTED_MODULE_9__/* .organizationCache */ .S.revalidate({
            userId
        });
        _membership_cache__WEBPACK_IMPORTED_MODULE_7__/* .membershipCache */ .r.revalidate({
            userId,
            organizationId
        });
        return membership;
    } catch (error) {
        if (error instanceof _prisma_client__WEBPACK_IMPORTED_MODULE_0__.Prisma.PrismaClientKnownRequestError) {
            throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_6__/* .DatabaseError */ .a$(error.message);
        }
        throw error;
    }
};


/***/ }),

/***/ 615572:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ findMatchingLocale)
/* harmony export */ });
/* harmony import */ var next_headers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(680255);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(836919);


const findMatchingLocale = async ()=>{
    const headersList = await (0,next_headers__WEBPACK_IMPORTED_MODULE_0__.headers)();
    const acceptLanguage = headersList.get("accept-language");
    const userLocales = acceptLanguage?.split(",");
    if (!userLocales) {
        return _constants__WEBPACK_IMPORTED_MODULE_1__/* .DEFAULT_LOCALE */ .Xn;
    }
    // First, try to find an exact match without normalization
    for (const userLocale of userLocales){
        const exactMatch = _constants__WEBPACK_IMPORTED_MODULE_1__/* .AVAILABLE_LOCALES */ .SC.find((locale)=>locale === userLocale);
        if (exactMatch) return exactMatch;
    }
    // If no exact match is found, try matching with normalization
    const normalizedAvailableLocales = _constants__WEBPACK_IMPORTED_MODULE_1__/* .AVAILABLE_LOCALES */ .SC.map((locale)=>locale.toLowerCase().split("-")[0]);
    for (const userLocale of userLocales){
        const normalizedUserLocale = userLocale.toLowerCase().split("-")[0];
        const matchedIndex = normalizedAvailableLocales.findIndex((locale)=>locale.startsWith(normalizedUserLocale));
        if (matchedIndex !== -1) return _constants__WEBPACK_IMPORTED_MODULE_1__/* .AVAILABLE_LOCALES */ .SC[matchedIndex];
    }
    return _constants__WEBPACK_IMPORTED_MODULE_1__/* .DEFAULT_LOCALE */ .Xn;
};


/***/ }),

/***/ 302722:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EJ: () => (/* binding */ truncateText),
/* harmony export */   Zr: () => (/* binding */ capitalizeFirstLetter)
/* harmony export */ });
/* unused harmony exports truncate, sanitizeString, isCapitalized, startsWithVowel */
const capitalizeFirstLetter = (string = "")=>{
    if (string === null) {
        return "";
    }
    return string.charAt(0).toUpperCase() + string.slice(1);
};
// write a function that takes a string and truncates it to the specified length
const truncate = (str, length)=>{
    if (!str) return "";
    if (str.length > length) {
        return str.substring(0, length) + "...";
    }
    return str;
};
// write a function that takes a string and removes all characters that could cause issues with the url and truncates it to the specified length
const sanitizeString = (str, delimiter = "_", length = 255)=>{
    return str.replace(/[^0-9a-zA-Z\-._]+/g, delimiter).substring(0, length);
};
const isCapitalized = (str)=>str.charAt(0) === str.charAt(0).toUpperCase();
const startsWithVowel = (str)=>{
    return /^[aeiouAEIOU]/.test(str);
};
const truncateText = (text, limit)=>{
    return text.length > limit ? `${text.substring(0, limit)}...` : text;
};


/***/ }),

/***/ 367365:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BZ: () => (/* binding */ ZIntegrationAirtableInput),
/* harmony export */   PH: () => (/* binding */ ZIntegrationAirtableBases),
/* harmony export */   ho: () => (/* binding */ ZIntegrationAirtableTokenSchema),
/* harmony export */   jj: () => (/* binding */ ZIntegrationAirtableTablesWithFields),
/* harmony export */   kx: () => (/* binding */ ZIntegrationAirtableCredential),
/* harmony export */   rO: () => (/* binding */ ZIntegrationAirtableConfig),
/* harmony export */   wh: () => (/* binding */ ZIntegrationAirtableTables)
/* harmony export */ });
/* unused harmony exports ZIntegrationAirtableConfigData, ZIntegrationAirtable */
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(545198);
/* harmony import */ var _shared_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(965340);


const ZIntegrationAirtableCredential = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    expiry_date: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),
    access_token: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),
    refresh_token: zod__WEBPACK_IMPORTED_MODULE_0__.z.string()
});
const ZIntegrationAirtableConfigData = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    tableId: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),
    baseId: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),
    tableName: zod__WEBPACK_IMPORTED_MODULE_0__.z.string()
}).merge(_shared_types__WEBPACK_IMPORTED_MODULE_1__/* .ZIntegrationBaseSurveyData */ .g);
const ZIntegrationAirtableConfig = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    key: ZIntegrationAirtableCredential,
    data: zod__WEBPACK_IMPORTED_MODULE_0__.z.array(ZIntegrationAirtableConfigData),
    email: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().email()
});
const ZIntegrationAirtable = _shared_types__WEBPACK_IMPORTED_MODULE_1__/* .ZIntegrationBase */ .U.extend({
    type: zod__WEBPACK_IMPORTED_MODULE_0__.z.literal("airtable"),
    config: ZIntegrationAirtableConfig
});
const ZIntegrationAirtableInput = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    type: zod__WEBPACK_IMPORTED_MODULE_0__.z.literal("airtable"),
    config: ZIntegrationAirtableConfig
});
const ZIntegrationAirtableBases = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    bases: zod__WEBPACK_IMPORTED_MODULE_0__.z.array(zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
        id: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),
        name: zod__WEBPACK_IMPORTED_MODULE_0__.z.string()
    }))
});
const ZIntegrationAirtableTables = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    tables: zod__WEBPACK_IMPORTED_MODULE_0__.z.array(zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
        id: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),
        name: zod__WEBPACK_IMPORTED_MODULE_0__.z.string()
    }))
});
const ZIntegrationAirtableTokenSchema = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    access_token: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),
    refresh_token: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),
    expires_in: zod__WEBPACK_IMPORTED_MODULE_0__.z.coerce.number()
});
const ZIntegrationAirtableTablesWithFields = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    tables: zod__WEBPACK_IMPORTED_MODULE_0__.z.array(zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
        id: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),
        name: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),
        fields: zod__WEBPACK_IMPORTED_MODULE_0__.z.array(zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
            id: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),
            name: zod__WEBPACK_IMPORTED_MODULE_0__.z.string()
        }))
    }))
});


/***/ }),

/***/ 816948:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Gl: () => (/* binding */ ZIntegrationGoogleSheets),
/* harmony export */   Q2: () => (/* binding */ ZIntegrationGoogleSheetsInput),
/* harmony export */   qO: () => (/* binding */ ZIntegrationGoogleSheetsConfig)
/* harmony export */ });
/* unused harmony exports ZGoogleCredential, ZIntegrationGoogleSheetsConfigData, ZGoogleSheetIntegration, ZIntegrationGoogleSheetsCredential */
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(545198);
/* harmony import */ var _shared_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(965340);


const ZGoogleCredential = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    scope: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),
    token_type: zod__WEBPACK_IMPORTED_MODULE_0__.z.literal("Bearer"),
    expiry_date: zod__WEBPACK_IMPORTED_MODULE_0__.z.number(),
    access_token: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),
    refresh_token: zod__WEBPACK_IMPORTED_MODULE_0__.z.string()
});
const ZIntegrationGoogleSheetsConfigData = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    spreadsheetId: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),
    spreadsheetName: zod__WEBPACK_IMPORTED_MODULE_0__.z.string()
}).merge(_shared_types__WEBPACK_IMPORTED_MODULE_1__/* .ZIntegrationBaseSurveyData */ .g);
const ZIntegrationGoogleSheetsConfig = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    key: ZGoogleCredential,
    data: zod__WEBPACK_IMPORTED_MODULE_0__.z.array(ZIntegrationGoogleSheetsConfigData),
    email: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().email()
});
const ZGoogleSheetIntegration = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    id: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),
    type: zod__WEBPACK_IMPORTED_MODULE_0__.z.literal("googleSheets"),
    environmentId: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),
    config: ZIntegrationGoogleSheetsConfig
});
const ZIntegrationGoogleSheets = _shared_types__WEBPACK_IMPORTED_MODULE_1__/* .ZIntegrationBase */ .U.extend({
    type: zod__WEBPACK_IMPORTED_MODULE_0__.z.literal("googleSheets"),
    config: ZIntegrationGoogleSheetsConfig
});
const ZIntegrationGoogleSheetsInput = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    type: zod__WEBPACK_IMPORTED_MODULE_0__.z.literal("googleSheets"),
    config: ZIntegrationGoogleSheetsConfig
});
const ZIntegrationGoogleSheetsCredential = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    scope: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),
    token_type: zod__WEBPACK_IMPORTED_MODULE_0__.z.literal("Bearer"),
    expiry_date: zod__WEBPACK_IMPORTED_MODULE_0__.z.number(),
    access_token: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),
    refresh_token: zod__WEBPACK_IMPORTED_MODULE_0__.z.string()
});


/***/ }),

/***/ 965340:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ ZIntegrationBase),
/* harmony export */   g: () => (/* binding */ ZIntegrationBaseSurveyData)
/* harmony export */ });
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(545198);

const ZIntegrationBase = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    id: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),
    environmentId: zod__WEBPACK_IMPORTED_MODULE_0__.z.string()
});
const ZIntegrationBaseSurveyData = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    createdAt: zod__WEBPACK_IMPORTED_MODULE_0__.z.date(),
    questionIds: zod__WEBPACK_IMPORTED_MODULE_0__.z.array(zod__WEBPACK_IMPORTED_MODULE_0__.z.string()),
    includeVariables: zod__WEBPACK_IMPORTED_MODULE_0__.z.boolean().optional(),
    includeHiddenFields: zod__WEBPACK_IMPORTED_MODULE_0__.z.boolean().optional(),
    includeMetadata: zod__WEBPACK_IMPORTED_MODULE_0__.z.boolean().optional(),
    includeCreatedAt: zod__WEBPACK_IMPORTED_MODULE_0__.z.boolean().optional(),
    questions: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),
    surveyId: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),
    surveyName: zod__WEBPACK_IMPORTED_MODULE_0__.z.string()
});


/***/ }),

/***/ 715521:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mp: () => (/* binding */ ZOrganizationRole),
/* harmony export */   rl: () => (/* binding */ ZMembership)
/* harmony export */ });
/* unused harmony exports ZMembershipRole, ZMember, ZMembershipUpdateInput */
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(545198);

const ZMembershipRole = zod__WEBPACK_IMPORTED_MODULE_0__.z.enum([
    "owner",
    "admin",
    "editor",
    "developer",
    "viewer"
]);
const ZOrganizationRole = zod__WEBPACK_IMPORTED_MODULE_0__.z.enum([
    "owner",
    "manager",
    "member",
    "billing"
]);
const ZMembership = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    organizationId: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),
    userId: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),
    accepted: zod__WEBPACK_IMPORTED_MODULE_0__.z.boolean(),
    role: ZOrganizationRole
});
const ZMember = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    name: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().nullable(),
    email: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().email(),
    userId: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),
    accepted: zod__WEBPACK_IMPORTED_MODULE_0__.z.boolean(),
    role: ZOrganizationRole
});
const ZMembershipUpdateInput = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    role: ZOrganizationRole
});


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [8079,3073,7863,5069,255,9759,3687], () => (__webpack_exec__(563322)));
module.exports = __webpack_exports__;

})();