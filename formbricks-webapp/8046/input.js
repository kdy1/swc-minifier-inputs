"use strict";
exports.id = 8046;
exports.ids = [8046];
exports.modules = {

/***/ 308046:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ authenticatedActionClient),
/* harmony export */   _: () => (/* binding */ actionClient)
/* harmony export */ });
/* harmony import */ var _modules_auth_lib_authOptions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(396548);
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(330291);
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_safe_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(717921);
/* harmony import */ var _formbricks_lib_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(717080);
/* harmony import */ var _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(207798);





const actionClient = (0,next_safe_action__WEBPACK_IMPORTED_MODULE_2__/* .createSafeActionClient */ .FQ)({
    handleServerError (e) {
        if (e instanceof _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_3__/* .ResourceNotFoundError */ .CE || e instanceof _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_3__/* .AuthorizationError */ .yi || e instanceof _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_3__/* .InvalidInputError */ .oC || e instanceof _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_3__/* .UnknownError */ .Bk || e instanceof _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_3__/* .AuthenticationError */ .v3 || e instanceof _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_3__/* .OperationNotAllowedError */ .J4) {
            return e.message;
        }
        // eslint-disable-next-line no-console -- This error needs to be logged for debugging server-side errors
        console.error("SERVER ERROR: ", e);
        return next_safe_action__WEBPACK_IMPORTED_MODULE_2__/* .DEFAULT_SERVER_ERROR_MESSAGE */ .nL;
    }
});
const authenticatedActionClient = actionClient.use(async ({ next })=>{
    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_1__.getServerSession)(_modules_auth_lib_authOptions__WEBPACK_IMPORTED_MODULE_0__/* .authOptions */ .N);
    if (!session?.user) {
        throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_3__/* .AuthenticationError */ .v3("Not authenticated");
    }
    const userId = session.user.id;
    const user = await (0,_formbricks_lib_user_service__WEBPACK_IMPORTED_MODULE_4__/* .getUser */ .wz)(userId);
    if (!user) {
        throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_3__/* .AuthorizationError */ .yi("User not found");
    }
    return next({
        ctx: {
            user
        }
    });
});


/***/ }),

/***/ 396548:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  N: () => (/* binding */ authOptions)
});

// EXTERNAL MODULE: ./modules/auth/lib/user.ts
var lib_user = __webpack_require__(625944);
// EXTERNAL MODULE: ./modules/auth/lib/utils.ts
var utils = __webpack_require__(659356);
// EXTERNAL MODULE: ../../node_modules/next-auth/providers/azure-ad.js
var azure_ad = __webpack_require__(602605);
// EXTERNAL MODULE: ../../node_modules/next-auth/providers/github.js
var github = __webpack_require__(82481);
// EXTERNAL MODULE: ../../node_modules/next-auth/providers/google.js
var google = __webpack_require__(70241);
// EXTERNAL MODULE: ../../packages/lib/constants.ts
var constants = __webpack_require__(711344);
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

// EXTERNAL MODULE: ../../packages/lib/utils/validate.ts
var validate = __webpack_require__(472749);
// EXTERNAL MODULE: ../../packages/types/common.ts
var common = __webpack_require__(552224);
// EXTERNAL MODULE: ../../packages/types/user.ts
var user = __webpack_require__(352750);
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

// EXTERNAL MODULE: ../../packages/database/src/index.ts + 1 modules
var src = __webpack_require__(482859);
// EXTERNAL MODULE: external "@prisma/client"
var client_ = __webpack_require__(896330);
// EXTERNAL MODULE: ../../node_modules/zod/lib/index.mjs
var lib = __webpack_require__(283131);
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

// EXTERNAL MODULE: ../../packages/types/errors.ts
var errors = __webpack_require__(207798);
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
var service = __webpack_require__(575361);
// EXTERNAL MODULE: ../../packages/lib/organization/service.ts
var organization_service = __webpack_require__(167440);
// EXTERNAL MODULE: ../../packages/lib/utils/locale.ts
var locale = __webpack_require__(71813);
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
            const otherUserWithEmail = await (0,lib_user/* getUserByEmail */.ht)(user.email);
            if (!otherUserWithEmail) {
                await (0,lib_user/* updateUser */.TK)(existingUserWithAccount.id, {
                    email: user.email
                });
                return true;
            }
            throw new Error("Looks like you updated your email somewhere else. A user with this new email exists already.");
        }
        // There is no existing account for this identity provider / account id
        // check if user account with this email already exists
        // if user already exists throw error and request password login
        const existingUserWithEmail = await (0,lib_user/* getUserByEmail */.ht)(user.email);
        if (existingUserWithEmail) {
            // Sign in the user with the existing account
            return true;
        }
        const userProfile = await (0,lib_user/* createUser */.kg)({
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
            await (0,lib_user/* updateUser */.TK)(userProfile.id, {
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
var credentials = __webpack_require__(432762);
// EXTERNAL MODULE: ../../packages/lib/crypto.ts
var lib_crypto = __webpack_require__(826478);
// EXTERNAL MODULE: ../../packages/lib/jwt.ts
var jwt = __webpack_require__(394564);
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
                const isValid = await (0,utils/* verifyPassword */.B)(credentials.password, user.password);
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
                    const isValidToken = (await __webpack_require__.e(/* import() */ 1782).then(__webpack_require__.bind(__webpack_require__, 331782))).totpAuthenticatorCheck(credentials.totpCode, secret);
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
                user = await (0,lib_user/* updateUser */.TK)(user.id, {
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
            const existingUser = await (0,lib_user/* getUserByEmail */.ht)(token?.email);
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

/***/ 625944:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TK: () => (/* binding */ updateUser),
/* harmony export */   ht: () => (/* binding */ getUserByEmail),
/* harmony export */   kg: () => (/* binding */ createUser),
/* harmony export */   wz: () => (/* binding */ getUser)
/* harmony export */ });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(896330);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645625);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _formbricks_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(482859);
/* harmony import */ var _formbricks_lib_cache__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(48165);
/* harmony import */ var _formbricks_lib_user_cache__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(981347);
/* harmony import */ var _formbricks_lib_utils_validate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(472749);
/* harmony import */ var _formbricks_types_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(552224);
/* harmony import */ var _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(207798);
/* harmony import */ var _formbricks_types_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(352750);









const updateUser = async (id, data)=>{
    (0,_formbricks_lib_utils_validate__WEBPACK_IMPORTED_MODULE_3__/* .validateInputs */ .C)([
        id,
        _formbricks_types_common__WEBPACK_IMPORTED_MODULE_4__/* .ZId */ .i4
    ], [
        data,
        _formbricks_types_user__WEBPACK_IMPORTED_MODULE_5__/* .ZUserUpdateInput */ .rd.partial()
    ]);
    try {
        const updatedUser = await _formbricks_database__WEBPACK_IMPORTED_MODULE_2__/* .prisma */ .z.user.update({
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
        _formbricks_lib_user_cache__WEBPACK_IMPORTED_MODULE_6__/* .userCache */ .g.revalidate({
            email: updatedUser.email,
            id: updatedUser.id
        });
        return updatedUser;
    } catch (error) {
        if (error instanceof _prisma_client__WEBPACK_IMPORTED_MODULE_0__.Prisma.PrismaClientKnownRequestError && error.code === "P2016") {
            throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_7__/* .ResourceNotFoundError */ .CE("User", id);
        }
        throw error;
    }
};
const getUserByEmail = (0,react__WEBPACK_IMPORTED_MODULE_1__.cache)(async (email)=>(0,_formbricks_lib_cache__WEBPACK_IMPORTED_MODULE_8__/* .cache */ .P)(async ()=>{
        (0,_formbricks_lib_utils_validate__WEBPACK_IMPORTED_MODULE_3__/* .validateInputs */ .C)([
            email,
            _formbricks_types_user__WEBPACK_IMPORTED_MODULE_5__/* .ZUserEmail */ .sO
        ]);
        try {
            const user = await _formbricks_database__WEBPACK_IMPORTED_MODULE_2__/* .prisma */ .z.user.findFirst({
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
            if (error instanceof _prisma_client__WEBPACK_IMPORTED_MODULE_0__.Prisma.PrismaClientKnownRequestError) {
                throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_7__/* .DatabaseError */ .a$(error.message);
            }
            throw error;
        }
    }, [
        `getUserByEmail-${email}`
    ], {
        tags: [
            _formbricks_lib_user_cache__WEBPACK_IMPORTED_MODULE_6__/* .userCache */ .g.tag.byEmail(email)
        ]
    })());
const getUser = (0,react__WEBPACK_IMPORTED_MODULE_1__.cache)(async (id)=>(0,_formbricks_lib_cache__WEBPACK_IMPORTED_MODULE_8__/* .cache */ .P)(async ()=>{
        (0,_formbricks_lib_utils_validate__WEBPACK_IMPORTED_MODULE_3__/* .validateInputs */ .C)([
            id,
            _formbricks_types_common__WEBPACK_IMPORTED_MODULE_4__/* .ZId */ .i4
        ]);
        try {
            const user = await _formbricks_database__WEBPACK_IMPORTED_MODULE_2__/* .prisma */ .z.user.findUnique({
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
            if (error instanceof _prisma_client__WEBPACK_IMPORTED_MODULE_0__.Prisma.PrismaClientKnownRequestError) {
                throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_7__/* .DatabaseError */ .a$(error.message);
            }
            throw error;
        }
    }, [
        `getUser-${id}`
    ], {
        tags: [
            _formbricks_lib_user_cache__WEBPACK_IMPORTED_MODULE_6__/* .userCache */ .g.tag.byId(id)
        ]
    })());
const createUser = async (data)=>{
    (0,_formbricks_lib_utils_validate__WEBPACK_IMPORTED_MODULE_3__/* .validateInputs */ .C)([
        data,
        _formbricks_types_user__WEBPACK_IMPORTED_MODULE_5__/* .ZUserUpdateInput */ .rd
    ]);
    try {
        const user = await _formbricks_database__WEBPACK_IMPORTED_MODULE_2__/* .prisma */ .z.user.create({
            data: data,
            select: {
                name: true,
                notificationSettings: true,
                id: true,
                email: true,
                locale: true
            }
        });
        _formbricks_lib_user_cache__WEBPACK_IMPORTED_MODULE_6__/* .userCache */ .g.revalidate({
            email: user.email,
            id: user.id,
            count: true
        });
        return user;
    } catch (error) {
        if (error instanceof _prisma_client__WEBPACK_IMPORTED_MODULE_0__.Prisma.PrismaClientKnownRequestError && error.code === "P2002") {
            throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_7__/* .InvalidInputError */ .oC("User with this email already exists");
        }
        if (error instanceof _prisma_client__WEBPACK_IMPORTED_MODULE_0__.Prisma.PrismaClientKnownRequestError) {
            throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_7__/* .DatabaseError */ .a$(error.message);
        }
        throw error;
    }
};


/***/ }),

/***/ 659356:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ verifyPassword)
/* harmony export */ });
/* unused harmony export hashPassword */
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(557038);
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_0__);

const hashPassword = async (password)=>{
    const hashedPassword = await hash(password, 12);
    return hashedPassword;
};
const verifyPassword = async (password, hashedPassword)=>{
    const isValid = await (0,bcryptjs__WEBPACK_IMPORTED_MODULE_0__.compare)(password, hashedPassword);
    return isValid;
};


/***/ }),

/***/ 482859:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  z: () => (/* reexport */ prisma)
});

// EXTERNAL MODULE: external "@prisma/client"
var client_ = __webpack_require__(896330);
// EXTERNAL MODULE: ../../node_modules/@prisma/extension-accelerate/dist/esm/entry.node.js + 4 modules
var entry_node = __webpack_require__(527586);
;// ../../packages/database/src/client.ts


const prismaClientSingleton = ()=>{
    return new client_.PrismaClient({
        datasources: {
            db: {
                url: process.env.DATABASE_URL
            }
        },
        ...process.env.DEBUG === "1" && {
            log: [
                "query",
                "info"
            ]
        }
    }).$extends((0,entry_node/* withAccelerate */.W)());
};
const globalForPrisma = globalThis;
const prisma = globalForPrisma.prisma ?? prismaClientSingleton();
if (false) {}

;// ../../packages/database/src/index.ts




/***/ }),

/***/ 48165:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ cache)
/* harmony export */ });
/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(310256);
/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_cache__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var superjson__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(641657);
// cache wrapper for unstable_cache
// workaround for https://github.com/vercel/next.js/issues/51613
// copied from https://github.com/vercel/next.js/issues/51613#issuecomment-1892644565



const cache = (fn, keys, opts)=>{
    const wrap = async (params)=>{
        const result = await fn(...params);
        return (0,superjson__WEBPACK_IMPORTED_MODULE_1__/* .stringify */ .As)(result);
    };
    const cachedFn = (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.unstable_cache)(wrap, keys, opts);
    return async (...params)=>{
        const result = await cachedFn(params);
        return (0,superjson__WEBPACK_IMPORTED_MODULE_1__/* .parse */ .qg)(result);
    };
};


/***/ }),

/***/ 711344:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $Y: () => (/* binding */ isS3Configured),
/* harmony export */   Bk: () => (/* binding */ SMTP_USER),
/* harmony export */   CT: () => (/* binding */ OIDC_SIGNING_ALGORITHM),
/* harmony export */   DR: () => (/* binding */ GOOGLE_SHEETS_CLIENT_ID),
/* harmony export */   E5: () => (/* binding */ GOOGLE_CLIENT_ID),
/* harmony export */   ER: () => (/* binding */ TURNSTILE_SECRET_KEY),
/* harmony export */   Ik: () => (/* binding */ S3_ACCESS_KEY),
/* harmony export */   Kd: () => (/* binding */ CRON_SECRET),
/* harmony export */   MT: () => (/* binding */ S3_BUCKET_NAME),
/* harmony export */   Mo: () => (/* binding */ OIDC_ISSUER),
/* harmony export */   OC: () => (/* binding */ UNSPLASH_ACCESS_KEY),
/* harmony export */   Oi: () => (/* binding */ DEBUG),
/* harmony export */   Pd: () => (/* binding */ SMTP_SECURE_ENABLED),
/* harmony export */   Q$: () => (/* binding */ EMAIL_VERIFICATION_DISABLED),
/* harmony export */   Qf: () => (/* binding */ STRIPE_API_VERSION),
/* harmony export */   RN: () => (/* binding */ SMTP_PASSWORD),
/* harmony export */   RP: () => (/* binding */ AZUREAD_CLIENT_ID),
/* harmony export */   SC: () => (/* binding */ AVAILABLE_LOCALES),
/* harmony export */   SO: () => (/* binding */ SMTP_HOST),
/* harmony export */   SP: () => (/* binding */ GOOGLE_SHEETS_REDIRECT_URL),
/* harmony export */   Si: () => (/* binding */ IS_FORMBRICKS_CLOUD),
/* harmony export */   T$: () => (/* binding */ IMPRINT_ADDRESS),
/* harmony export */   T1: () => (/* binding */ IS_AI_CONFIGURED),
/* harmony export */   T4: () => (/* binding */ MAIL_FROM),
/* harmony export */   Ui: () => (/* binding */ STRIPE_PRICE_LOOKUP_KEYS),
/* harmony export */   Uu: () => (/* binding */ INSIGHTS_PER_PAGE),
/* harmony export */   VC: () => (/* binding */ DOCUMENTS_PER_PAGE),
/* harmony export */   Wg: () => (/* binding */ S3_SECRET_KEY),
/* harmony export */   Xc: () => (/* binding */ S3_ENDPOINT_URL),
/* harmony export */   Xn: () => (/* binding */ DEFAULT_LOCALE),
/* harmony export */   YW: () => (/* binding */ WEBAPP_URL),
/* harmony export */   Yj: () => (/* binding */ S3_REGION),
/* harmony export */   aS: () => (/* binding */ BREVO_LIST_ID),
/* harmony export */   ac: () => (/* binding */ DEFAULT_ORGANIZATION_ID),
/* harmony export */   an: () => (/* binding */ ENTERPRISE_LICENSE_KEY),
/* harmony export */   br: () => (/* binding */ INVITE_DISABLED),
/* harmony export */   d1: () => (/* binding */ RESPONSES_PER_PAGE),
/* harmony export */   eu: () => (/* binding */ UNSPLASH_ALLOWED_DOMAINS),
/* harmony export */   fT: () => (/* binding */ BILLING_LIMITS),
/* harmony export */   gB: () => (/* binding */ MAX_SIZES),
/* harmony export */   gK: () => (/* binding */ GITHUB_ID),
/* harmony export */   hP: () => (/* binding */ GITHUB_SECRET),
/* harmony export */   iO: () => (/* binding */ IMPRINT_URL),
/* harmony export */   jP: () => (/* binding */ OIDC_DISPLAY_NAME),
/* harmony export */   kK: () => (/* binding */ OIDC_CLIENT_ID),
/* harmony export */   kO: () => (/* binding */ AZUREAD_TENANT_ID),
/* harmony export */   mn: () => (/* binding */ AZUREAD_CLIENT_SECRET),
/* harmony export */   mu: () => (/* binding */ PROJECT_FEATURE_KEYS),
/* harmony export */   n$: () => (/* binding */ GOOGLE_CLIENT_SECRET),
/* harmony export */   n1: () => (/* binding */ SMTP_AUTHENTICATED),
/* harmony export */   o7: () => (/* binding */ ENCRYPTION_KEY),
/* harmony export */   oA: () => (/* binding */ E2E_TESTING),
/* harmony export */   oz: () => (/* binding */ BREVO_API_KEY),
/* harmony export */   pk: () => (/* binding */ PRIVACY_URL),
/* harmony export */   r4: () => (/* binding */ OIDC_CLIENT_SECRET),
/* harmony export */   rC: () => (/* binding */ IS_TURNSTILE_CONFIGURED),
/* harmony export */   re: () => (/* binding */ ITEMS_PER_PAGE),
/* harmony export */   ss: () => (/* binding */ SMTP_REJECT_UNAUTHORIZED_TLS),
/* harmony export */   tE: () => (/* binding */ DEFAULT_ORGANIZATION_ROLE),
/* harmony export */   vh: () => (/* binding */ S3_FORCE_PATH_STYLE),
/* harmony export */   xG: () => (/* binding */ UPLOADS_DIR),
/* harmony export */   yg: () => (/* binding */ GOOGLE_SHEETS_CLIENT_SECRET),
/* harmony export */   z5: () => (/* binding */ SMTP_PORT)
/* harmony export */ });
/* unused harmony exports SHORT_URL_BASE, FORMBRICKS_ENCRYPTION_KEY, DEFAULT_BRAND_COLOR, TERMS_URL, PASSWORD_RESET_DISABLED, GOOGLE_OAUTH_ENABLED, GITHUB_OAUTH_ENABLED, AZURE_OAUTH_ENABLED, OIDC_OAUTH_ENABLED, SIGNUP_ENABLED, EMAIL_AUTH_ENABLED, SLACK_CLIENT_SECRET, SLACK_CLIENT_ID, SLACK_AUTH_URL, NOTION_OAUTH_CLIENT_ID, NOTION_OAUTH_CLIENT_SECRET, NOTION_REDIRECT_URI, NOTION_AUTH_URL, AIRTABLE_CLIENT_ID, NEXTAUTH_SECRET, SURVEYS_PER_PAGE, TEXT_RESPONSES_PER_PAGE, MAX_RESPONSES_FOR_INSIGHT_GENERATION, SLACK_MESSAGE_LIMIT, GOOGLE_SHEET_MESSAGE_LIMIT, AIRTABLE_MESSAGE_LIMIT, NOTION_RICH_TEXT_LIMIT, SURVEY_BG_COLORS, SIGNUP_RATE_LIMIT, LOGIN_RATE_LIMIT, CLIENT_SIDE_API_RATE_LIMIT, SHARE_RATE_LIMIT, FORGET_PASSWORD_RATE_LIMIT, RESET_PASSWORD_RATE_LIMIT, VERIFY_EMAIL_RATE_LIMIT, SYNC_USER_IDENTIFICATION_RATE_LIMIT, REDIS_URL, REDIS_HTTP_URL, RATE_LIMITING_DISABLED, MAX_ATTRIBUTE_CLASSES_PER_ENVIRONMENT, STRIPE_PROJECT_NAMES, INTERCOM_SECRET_KEY, IS_INTERCOM_CONFIGURED */
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(333258);


const IS_FORMBRICKS_CLOUD = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.IS_FORMBRICKS_CLOUD === "1";
// URLs
const WEBAPP_URL = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.WEBAPP_URL || (_env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.VERCEL_URL ? `https://${_env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.VERCEL_URL}` : false) || "http://localhost:3000";
const SHORT_URL_BASE = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.SHORT_URL_BASE ? _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.SHORT_URL_BASE : WEBAPP_URL;
// encryption keys
const FORMBRICKS_ENCRYPTION_KEY = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.FORMBRICKS_ENCRYPTION_KEY || undefined;
const ENCRYPTION_KEY = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.ENCRYPTION_KEY;
// Other
const CRON_SECRET = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.CRON_SECRET;
const DEFAULT_BRAND_COLOR = "#64748b";
const PRIVACY_URL = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.PRIVACY_URL;
const TERMS_URL = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.TERMS_URL;
const IMPRINT_URL = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.IMPRINT_URL;
const IMPRINT_ADDRESS = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.IMPRINT_ADDRESS;
const PASSWORD_RESET_DISABLED = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.PASSWORD_RESET_DISABLED === "1";
const EMAIL_VERIFICATION_DISABLED = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.EMAIL_VERIFICATION_DISABLED === "1";
const GOOGLE_OAUTH_ENABLED = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.GOOGLE_CLIENT_ID && _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.GOOGLE_CLIENT_SECRET ? true : false;
const GITHUB_OAUTH_ENABLED = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.GITHUB_ID && _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.GITHUB_SECRET ? true : false;
const AZURE_OAUTH_ENABLED = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.AZUREAD_CLIENT_ID && _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.AZUREAD_CLIENT_SECRET && _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.AZUREAD_TENANT_ID ? true : false;
const OIDC_OAUTH_ENABLED = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.OIDC_CLIENT_ID && _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.OIDC_CLIENT_SECRET && _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.OIDC_ISSUER ? true : false;
const GITHUB_ID = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.GITHUB_ID;
const GITHUB_SECRET = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.GITHUB_SECRET;
const GOOGLE_CLIENT_ID = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.GOOGLE_CLIENT_SECRET;
const AZUREAD_CLIENT_ID = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.AZUREAD_CLIENT_ID;
const AZUREAD_CLIENT_SECRET = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.AZUREAD_CLIENT_SECRET;
const AZUREAD_TENANT_ID = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.AZUREAD_TENANT_ID;
const OIDC_CLIENT_ID = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.OIDC_CLIENT_ID;
const OIDC_CLIENT_SECRET = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.OIDC_CLIENT_SECRET;
const OIDC_ISSUER = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.OIDC_ISSUER;
const OIDC_DISPLAY_NAME = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.OIDC_DISPLAY_NAME;
const OIDC_SIGNING_ALGORITHM = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.OIDC_SIGNING_ALGORITHM;
const SIGNUP_ENABLED = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.SIGNUP_DISABLED !== "1";
const EMAIL_AUTH_ENABLED = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.EMAIL_AUTH_DISABLED !== "1";
const INVITE_DISABLED = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.INVITE_DISABLED === "1";
const SLACK_CLIENT_SECRET = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.SLACK_CLIENT_SECRET;
const SLACK_CLIENT_ID = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.SLACK_CLIENT_ID;
const SLACK_AUTH_URL = (/* unused pure expression or super */ null && (`https://slack.com/oauth/v2/authorize?client_id=${env.SLACK_CLIENT_ID}&scope=channels:read,chat:write,chat:write.public,chat:write.customize,groups:read`));
const GOOGLE_SHEETS_CLIENT_ID = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.GOOGLE_SHEETS_CLIENT_ID;
const GOOGLE_SHEETS_CLIENT_SECRET = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.GOOGLE_SHEETS_CLIENT_SECRET;
const GOOGLE_SHEETS_REDIRECT_URL = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.GOOGLE_SHEETS_REDIRECT_URL;
const NOTION_OAUTH_CLIENT_ID = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.NOTION_OAUTH_CLIENT_ID;
const NOTION_OAUTH_CLIENT_SECRET = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.NOTION_OAUTH_CLIENT_SECRET;
const NOTION_REDIRECT_URI = (/* unused pure expression or super */ null && (`${WEBAPP_URL}/api/v1/integrations/notion/callback`));
const NOTION_AUTH_URL = (/* unused pure expression or super */ null && (`https://api.notion.com/v1/oauth/authorize?client_id=${env.NOTION_OAUTH_CLIENT_ID}&response_type=code&owner=user&redirect_uri=${NOTION_REDIRECT_URI}`));
const AIRTABLE_CLIENT_ID = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.AIRTABLE_CLIENT_ID;
const SMTP_HOST = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.SMTP_HOST;
const SMTP_PORT = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.SMTP_PORT;
const SMTP_SECURE_ENABLED = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.SMTP_SECURE_ENABLED === "1";
const SMTP_USER = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.SMTP_USER;
const SMTP_PASSWORD = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.SMTP_PASSWORD;
const SMTP_AUTHENTICATED = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.SMTP_AUTHENTICATED !== "0";
const SMTP_REJECT_UNAUTHORIZED_TLS = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.SMTP_REJECT_UNAUTHORIZED_TLS !== "0";
const MAIL_FROM = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.MAIL_FROM;
const NEXTAUTH_SECRET = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.NEXTAUTH_SECRET;
const ITEMS_PER_PAGE = 30;
const SURVEYS_PER_PAGE = 12;
const RESPONSES_PER_PAGE = 25;
const TEXT_RESPONSES_PER_PAGE = 5;
const INSIGHTS_PER_PAGE = 10;
const DOCUMENTS_PER_PAGE = 10;
const MAX_RESPONSES_FOR_INSIGHT_GENERATION = 500;
const DEFAULT_ORGANIZATION_ID = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.DEFAULT_ORGANIZATION_ID;
const DEFAULT_ORGANIZATION_ROLE = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.DEFAULT_ORGANIZATION_ROLE;
const SLACK_MESSAGE_LIMIT = 2995;
const GOOGLE_SHEET_MESSAGE_LIMIT = 49995;
const AIRTABLE_MESSAGE_LIMIT = 99995;
const NOTION_RICH_TEXT_LIMIT = 1995;
// Storage constants
const S3_ACCESS_KEY = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.S3_ACCESS_KEY;
const S3_SECRET_KEY = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.S3_SECRET_KEY;
const S3_REGION = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.S3_REGION;
const S3_ENDPOINT_URL = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.S3_ENDPOINT_URL;
const S3_BUCKET_NAME = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.S3_BUCKET_NAME;
const S3_FORCE_PATH_STYLE = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.S3_FORCE_PATH_STYLE === "1";
const UPLOADS_DIR = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.UPLOADS_DIR || "./uploads";
const MAX_SIZES = {
    standard: 1024 * 1024 * 10,
    big: 1024 * 1024 * 1024
};
// Function to check if the necessary S3 configuration is set up
const isS3Configured = ()=>{
    // This function checks if the S3 bucket name environment variable is defined.
    // The AWS SDK automatically resolves credentials through a chain,
    // so we do not need to explicitly check for AWS credentials like access key, secret key, or region.
    return !!S3_BUCKET_NAME;
};
// Colors for Survey Bg
const SURVEY_BG_COLORS = (/* unused pure expression or super */ null && ([
    "#FFFFFF",
    "#FFF2D8",
    "#EAD7BB",
    "#BCA37F",
    "#113946",
    "#04364A",
    "#176B87",
    "#64CCC5",
    "#DAFFFB",
    "#132043",
    "#1F4172",
    "#F1B4BB",
    "#FDF0F0",
    "#001524",
    "#445D48",
    "#D6CC99",
    "#FDE5D4",
    "#BEADFA",
    "#D0BFFF",
    "#DFCCFB",
    "#FFF8C9",
    "#FF8080",
    "#FFCF96",
    "#F6FDC3",
    "#CDFAD5"
]));
// Rate Limiting
const SIGNUP_RATE_LIMIT = {
    interval: 60 * 60,
    allowedPerInterval: 30
};
const LOGIN_RATE_LIMIT = {
    interval: 15 * 60,
    allowedPerInterval: 30
};
const CLIENT_SIDE_API_RATE_LIMIT = {
    interval: 60,
    allowedPerInterval: 100
};
const SHARE_RATE_LIMIT = {
    interval: 60 * 60,
    allowedPerInterval: 100
};
const FORGET_PASSWORD_RATE_LIMIT = {
    interval: 60 * 60,
    allowedPerInterval: 5
};
const RESET_PASSWORD_RATE_LIMIT = {
    interval: 60 * 60,
    allowedPerInterval: 5
};
const VERIFY_EMAIL_RATE_LIMIT = {
    interval: 60 * 60,
    allowedPerInterval: 10
};
const SYNC_USER_IDENTIFICATION_RATE_LIMIT = {
    interval: 60,
    allowedPerInterval: 5
};
const DEBUG = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.DEBUG === "1";
const E2E_TESTING = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.E2E_TESTING === "1";
// Enterprise License constant
const ENTERPRISE_LICENSE_KEY = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.ENTERPRISE_LICENSE_KEY;
const REDIS_URL = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.REDIS_URL;
const REDIS_HTTP_URL = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.REDIS_HTTP_URL;
const RATE_LIMITING_DISABLED = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.RATE_LIMITING_DISABLED === "1";
const BREVO_API_KEY = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.BREVO_API_KEY;
const BREVO_LIST_ID = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.BREVO_LIST_ID;
const UNSPLASH_ACCESS_KEY = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.UNSPLASH_ACCESS_KEY;
const UNSPLASH_ALLOWED_DOMAINS = [
    "api.unsplash.com"
];
const STRIPE_API_VERSION = "2024-06-20";
// Maximum number of attribute classes allowed:
const MAX_ATTRIBUTE_CLASSES_PER_ENVIRONMENT = 150;
const DEFAULT_LOCALE = "en-US";
const AVAILABLE_LOCALES = [
    "en-US",
    "de-DE",
    "pt-BR",
    "fr-FR"
];
// Billing constants
var PROJECT_FEATURE_KEYS = /*#__PURE__*/ function(PROJECT_FEATURE_KEYS) {
    PROJECT_FEATURE_KEYS["FREE"] = "free";
    PROJECT_FEATURE_KEYS["STARTUP"] = "startup";
    PROJECT_FEATURE_KEYS["SCALE"] = "scale";
    PROJECT_FEATURE_KEYS["ENTERPRISE"] = "enterprise";
    return PROJECT_FEATURE_KEYS;
}({});
var STRIPE_PROJECT_NAMES = /*#__PURE__*/ function(STRIPE_PROJECT_NAMES) {
    STRIPE_PROJECT_NAMES["STARTUP"] = "Formbricks Startup";
    STRIPE_PROJECT_NAMES["SCALE"] = "Formbricks Scale";
    STRIPE_PROJECT_NAMES["ENTERPRISE"] = "Formbricks Enterprise";
    return STRIPE_PROJECT_NAMES;
}({});
var STRIPE_PRICE_LOOKUP_KEYS = /*#__PURE__*/ function(STRIPE_PRICE_LOOKUP_KEYS) {
    STRIPE_PRICE_LOOKUP_KEYS["STARTUP_MONTHLY"] = "formbricks_startup_monthly";
    STRIPE_PRICE_LOOKUP_KEYS["STARTUP_YEARLY"] = "formbricks_startup_yearly";
    STRIPE_PRICE_LOOKUP_KEYS["SCALE_MONTHLY"] = "formbricks_scale_monthly";
    STRIPE_PRICE_LOOKUP_KEYS["SCALE_YEARLY"] = "formbricks_scale_yearly";
    return STRIPE_PRICE_LOOKUP_KEYS;
}({});
const BILLING_LIMITS = {
    FREE: {
        PROJECTS: 3,
        RESPONSES: 1500,
        MIU: 2000
    },
    STARTUP: {
        PROJECTS: 3,
        RESPONSES: 5000,
        MIU: 7500
    },
    SCALE: {
        PROJECTS: 5,
        RESPONSES: 10000,
        MIU: 30000
    }
};
const IS_AI_CONFIGURED = Boolean(_env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.AI_AZURE_EMBEDDINGS_API_KEY && _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.AI_AZURE_EMBEDDINGS_DEPLOYMENT_ID && _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.AI_AZURE_EMBEDDINGS_RESSOURCE_NAME && _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.AI_AZURE_LLM_API_KEY && _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.AI_AZURE_LLM_DEPLOYMENT_ID && _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.AI_AZURE_LLM_RESSOURCE_NAME);
const INTERCOM_SECRET_KEY = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.INTERCOM_SECRET_KEY;
const IS_INTERCOM_CONFIGURED = Boolean(_env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.NEXT_PUBLIC_INTERCOM_APP_ID && INTERCOM_SECRET_KEY);
const TURNSTILE_SECRET_KEY = _env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.TURNSTILE_SECRET_KEY;
const IS_TURNSTILE_CONFIGURED = Boolean(_env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.NEXT_PUBLIC_TURNSTILE_SITE_KEY && TURNSTILE_SECRET_KEY);


/***/ }),

/***/ 826478:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   vX: () => (/* binding */ symmetricEncrypt),
/* harmony export */   zp: () => (/* binding */ symmetricDecrypt)
/* harmony export */ });
/* unused harmony exports getHash, encryptAES128, decryptAES128, generateLocalSignedUrl, validateLocalSignedUrl */
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(455511);
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(711344);



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
const getHash = (key)=>createHash("sha256").update(key).digest("hex");
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
    const cipher = createDecipheriv("aes-128-ecb", Buffer.from(encryptionKey, "base64"), "");
    let decrypted = cipher.update(data, "hex", "utf-8");
    decrypted += cipher.final("utf-8");
    return decrypted;
};
const generateLocalSignedUrl = (fileName, environmentId, fileType)=>{
    const uuid = randomBytes(16).toString("hex");
    const timestamp = Date.now();
    const data = `${uuid}:${fileName}:${environmentId}:${fileType}:${timestamp}`;
    const signature = createHmac("sha256", ENCRYPTION_KEY).update(data).digest("hex");
    return {
        signature,
        uuid,
        timestamp
    };
};
const validateLocalSignedUrl = (uuid, fileName, environmentId, fileType, timestamp, signature, secret)=>{
    const data = `${uuid}:${fileName}:${environmentId}:${fileType}:${timestamp}`;
    const expectedSignature = createHmac("sha256", secret).update(data).digest("hex");
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

/***/ 333258:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ env)
/* harmony export */ });
/* harmony import */ var _t3_oss_env_nextjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87286);
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(283131);


const env = (0,_t3_oss_env_nextjs__WEBPACK_IMPORTED_MODULE_0__/* .createEnv */ .w)({
    /*
   * Serverside Environment variables, not available on the client.
   * Will throw if you access these variables on the client.
   */ server: {
        AI_AZURE_EMBEDDINGS_API_KEY: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
        AI_AZURE_LLM_API_KEY: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
        AI_AZURE_EMBEDDINGS_DEPLOYMENT_ID: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
        AI_AZURE_LLM_DEPLOYMENT_ID: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
        AI_AZURE_EMBEDDINGS_RESSOURCE_NAME: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
        AI_AZURE_LLM_RESSOURCE_NAME: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
        AIRTABLE_CLIENT_ID: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
        AZUREAD_CLIENT_ID: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
        AZUREAD_CLIENT_SECRET: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
        AZUREAD_TENANT_ID: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
        CRON_SECRET: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().min(10),
        BREVO_API_KEY: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
        BREVO_LIST_ID: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
        DATABASE_URL: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().url(),
        DEBUG: zod__WEBPACK_IMPORTED_MODULE_1__.z.enum([
            "1",
            "0"
        ]).optional(),
        DEFAULT_ORGANIZATION_ID: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
        DEFAULT_ORGANIZATION_ROLE: zod__WEBPACK_IMPORTED_MODULE_1__.z.enum([
            "owner",
            "manager",
            "member",
            "billing"
        ]).optional(),
        E2E_TESTING: zod__WEBPACK_IMPORTED_MODULE_1__.z.enum([
            "1",
            "0"
        ]).optional(),
        EMAIL_AUTH_DISABLED: zod__WEBPACK_IMPORTED_MODULE_1__.z.enum([
            "1",
            "0"
        ]).optional(),
        EMAIL_VERIFICATION_DISABLED: zod__WEBPACK_IMPORTED_MODULE_1__.z.enum([
            "1",
            "0"
        ]).optional(),
        ENCRYPTION_KEY: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().length(64).or(zod__WEBPACK_IMPORTED_MODULE_1__.z.string().length(32)),
        ENTERPRISE_LICENSE_KEY: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
        FORMBRICKS_ENCRYPTION_KEY: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().length(24).or(zod__WEBPACK_IMPORTED_MODULE_1__.z.string().length(0)).optional(),
        GITHUB_ID: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
        GITHUB_SECRET: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
        GOOGLE_CLIENT_ID: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
        GOOGLE_CLIENT_SECRET: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
        GOOGLE_SHEETS_CLIENT_ID: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
        GOOGLE_SHEETS_CLIENT_SECRET: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
        GOOGLE_SHEETS_REDIRECT_URL: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
        HTTP_PROXY: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().url().optional(),
        HTTPS_PROXY: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().url().optional(),
        IMPRINT_URL: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().url().optional().or(zod__WEBPACK_IMPORTED_MODULE_1__.z.string().refine((str)=>str === "")),
        IMPRINT_ADDRESS: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
        INVITE_DISABLED: zod__WEBPACK_IMPORTED_MODULE_1__.z.enum([
            "1",
            "0"
        ]).optional(),
        INTERCOM_SECRET_KEY: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
        IS_FORMBRICKS_CLOUD: zod__WEBPACK_IMPORTED_MODULE_1__.z.enum([
            "1",
            "0"
        ]).optional(),
        MAIL_FROM: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().email().optional(),
        NEXTAUTH_SECRET: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().min(1),
        NOTION_OAUTH_CLIENT_ID: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
        NOTION_OAUTH_CLIENT_SECRET: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
        OIDC_CLIENT_ID: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
        OIDC_CLIENT_SECRET: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
        OIDC_DISPLAY_NAME: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
        OIDC_ISSUER: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
        OIDC_SIGNING_ALGORITHM: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
        OPENTELEMETRY_LISTENER_URL: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
        REDIS_URL: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
        REDIS_HTTP_URL: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
        PASSWORD_RESET_DISABLED: zod__WEBPACK_IMPORTED_MODULE_1__.z.enum([
            "1",
            "0"
        ]).optional(),
        PRIVACY_URL: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().url().optional().or(zod__WEBPACK_IMPORTED_MODULE_1__.z.string().refine((str)=>str === "")),
        RATE_LIMITING_DISABLED: zod__WEBPACK_IMPORTED_MODULE_1__.z.enum([
            "1",
            "0"
        ]).optional(),
        S3_ACCESS_KEY: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
        S3_BUCKET_NAME: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
        S3_REGION: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
        S3_SECRET_KEY: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
        S3_ENDPOINT_URL: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
        S3_FORCE_PATH_STYLE: zod__WEBPACK_IMPORTED_MODULE_1__.z.enum([
            "1",
            "0"
        ]).optional(),
        SHORT_URL_BASE: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().url().optional().or(zod__WEBPACK_IMPORTED_MODULE_1__.z.string().length(0)),
        SIGNUP_DISABLED: zod__WEBPACK_IMPORTED_MODULE_1__.z.enum([
            "1",
            "0"
        ]).optional(),
        SLACK_CLIENT_ID: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
        SLACK_CLIENT_SECRET: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
        SMTP_HOST: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().min(1).optional(),
        SMTP_PORT: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().min(1).optional(),
        SMTP_SECURE_ENABLED: zod__WEBPACK_IMPORTED_MODULE_1__.z.enum([
            "1",
            "0"
        ]).optional(),
        SMTP_USER: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().min(1).optional(),
        SMTP_PASSWORD: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().min(1).optional(),
        SMTP_AUTHENTICATED: zod__WEBPACK_IMPORTED_MODULE_1__.z.enum([
            "1",
            "0"
        ]).optional(),
        SMTP_REJECT_UNAUTHORIZED_TLS: zod__WEBPACK_IMPORTED_MODULE_1__.z.enum([
            "1",
            "0"
        ]).optional(),
        STRIPE_SECRET_KEY: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
        STRIPE_WEBHOOK_SECRET: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
        TELEMETRY_DISABLED: zod__WEBPACK_IMPORTED_MODULE_1__.z.enum([
            "1",
            "0"
        ]).optional(),
        TERMS_URL: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().url().optional().or(zod__WEBPACK_IMPORTED_MODULE_1__.z.string().refine((str)=>str === "")),
        TURNSTILE_SECRET_KEY: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
        UPLOADS_DIR: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().min(1).optional(),
        VERCEL_URL: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
        WEBAPP_URL: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().url().optional(),
        UNSPLASH_ACCESS_KEY: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
        LANGFUSE_SECRET_KEY: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
        LANGFUSE_PUBLIC_KEY: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
        LANGFUSE_BASEURL: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional()
    },
    /*
   * Environment variables available on the client (and server).
   *
   * 💡 You'll get type errors if these are not prefixed with NEXT_PUBLIC_.
   */ client: {
        NEXT_PUBLIC_FORMBRICKS_API_HOST: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().url().optional().or(zod__WEBPACK_IMPORTED_MODULE_1__.z.string().refine((str)=>str === "")),
        NEXT_PUBLIC_FORMBRICKS_ENVIRONMENT_ID: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
        NEXT_PUBLIC_FORMBRICKS_ONBOARDING_SURVEY_ID: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
        NEXT_PUBLIC_POSTHOG_API_KEY: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
        NEXT_PUBLIC_POSTHOG_API_HOST: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
        NEXT_PUBLIC_SENTRY_DSN: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
        NEXT_PUBLIC_INTERCOM_APP_ID: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
        NEXT_PUBLIC_TURNSTILE_SITE_KEY: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional()
    },
    /*
   * Due to how Next.js bundles environment variables on Edge and Client,
   * we need to manually destructure them to make sure all are included in bundle.
   *
   * 💡 You'll get type errors if not all variables from `server` & `client` are included here.
   */ runtimeEnv: {
        AI_AZURE_EMBEDDINGS_API_KEY: process.env.AI_AZURE_EMBEDDINGS_API_KEY,
        AI_AZURE_LLM_API_KEY: process.env.AI_AZURE_LLM_API_KEY,
        AI_AZURE_EMBEDDINGS_DEPLOYMENT_ID: process.env.AI_AZURE_EMBEDDINGS_DEPLOYMENT_ID,
        AI_AZURE_LLM_DEPLOYMENT_ID: process.env.AI_AZURE_LLM_DEPLOYMENT_ID,
        AI_AZURE_EMBEDDINGS_RESSOURCE_NAME: process.env.AI_AZURE_EMBEDDINGS_RESSOURCE_NAME,
        AI_AZURE_LLM_RESSOURCE_NAME: process.env.AI_AZURE_LLM_RESSOURCE_NAME,
        LANGFUSE_SECRET_KEY: process.env.LANGFUSE_SECRET_KEY,
        LANGFUSE_PUBLIC_KEY: process.env.LANGFUSE_PUBLIC_KEY,
        LANGFUSE_BASEURL: process.env.LANGFUSE_BASEURL,
        AIRTABLE_CLIENT_ID: process.env.AIRTABLE_CLIENT_ID,
        AZUREAD_CLIENT_ID: process.env.AZUREAD_CLIENT_ID,
        AZUREAD_CLIENT_SECRET: process.env.AZUREAD_CLIENT_SECRET,
        AZUREAD_TENANT_ID: process.env.AZUREAD_TENANT_ID,
        BREVO_API_KEY: process.env.BREVO_API_KEY,
        BREVO_LIST_ID: process.env.BREVO_LIST_ID,
        CRON_SECRET: process.env.CRON_SECRET,
        DATABASE_URL: process.env.DATABASE_URL,
        DEBUG: process.env.DEBUG,
        DEFAULT_ORGANIZATION_ID: process.env.DEFAULT_ORGANIZATION_ID,
        DEFAULT_ORGANIZATION_ROLE: process.env.DEFAULT_ORGANIZATION_ROLE,
        E2E_TESTING: process.env.E2E_TESTING,
        EMAIL_AUTH_DISABLED: process.env.EMAIL_AUTH_DISABLED,
        EMAIL_VERIFICATION_DISABLED: process.env.EMAIL_VERIFICATION_DISABLED,
        ENCRYPTION_KEY: process.env.ENCRYPTION_KEY,
        ENTERPRISE_LICENSE_KEY: process.env.ENTERPRISE_LICENSE_KEY,
        FORMBRICKS_ENCRYPTION_KEY: process.env.FORMBRICKS_ENCRYPTION_KEY,
        GITHUB_ID: process.env.GITHUB_ID,
        GITHUB_SECRET: process.env.GITHUB_SECRET,
        GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
        GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
        GOOGLE_SHEETS_CLIENT_ID: process.env.GOOGLE_SHEETS_CLIENT_ID,
        GOOGLE_SHEETS_CLIENT_SECRET: process.env.GOOGLE_SHEETS_CLIENT_SECRET,
        GOOGLE_SHEETS_REDIRECT_URL: process.env.GOOGLE_SHEETS_REDIRECT_URL,
        HTTP_PROXY: process.env.HTTP_PROXY,
        HTTPS_PROXY: process.env.HTTPS_PROXY,
        IMPRINT_URL: process.env.IMPRINT_URL,
        IMPRINT_ADDRESS: process.env.IMPRINT_ADDRESS,
        INVITE_DISABLED: process.env.INVITE_DISABLED,
        INTERCOM_SECRET_KEY: process.env.INTERCOM_SECRET_KEY,
        IS_FORMBRICKS_CLOUD: process.env.IS_FORMBRICKS_CLOUD,
        MAIL_FROM: process.env.MAIL_FROM,
        NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
        NEXT_PUBLIC_FORMBRICKS_API_HOST: "",
        NEXT_PUBLIC_FORMBRICKS_ENVIRONMENT_ID: "",
        NEXT_PUBLIC_FORMBRICKS_ONBOARDING_SURVEY_ID: "",
        NEXT_PUBLIC_POSTHOG_API_HOST: process.env.NEXT_PUBLIC_POSTHOG_API_HOST,
        NEXT_PUBLIC_POSTHOG_API_KEY: process.env.NEXT_PUBLIC_POSTHOG_API_KEY,
        NEXT_PUBLIC_SENTRY_DSN: process.env.NEXT_PUBLIC_SENTRY_DSN,
        NEXT_PUBLIC_TURNSTILE_SITE_KEY: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY,
        OPENTELEMETRY_LISTENER_URL: process.env.OPENTELEMETRY_LISTENER_URL,
        NEXT_PUBLIC_INTERCOM_APP_ID: process.env.NEXT_PUBLIC_INTERCOM_APP_ID,
        NOTION_OAUTH_CLIENT_ID: process.env.NOTION_OAUTH_CLIENT_ID,
        NOTION_OAUTH_CLIENT_SECRET: process.env.NOTION_OAUTH_CLIENT_SECRET,
        OIDC_CLIENT_ID: process.env.OIDC_CLIENT_ID,
        OIDC_CLIENT_SECRET: process.env.OIDC_CLIENT_SECRET,
        OIDC_DISPLAY_NAME: process.env.OIDC_DISPLAY_NAME,
        OIDC_ISSUER: process.env.OIDC_ISSUER,
        OIDC_SIGNING_ALGORITHM: process.env.OIDC_SIGNING_ALGORITHM,
        REDIS_URL: process.env.REDIS_URL,
        REDIS_HTTP_URL: process.env.REDIS_HTTP_URL,
        PASSWORD_RESET_DISABLED: process.env.PASSWORD_RESET_DISABLED,
        PRIVACY_URL: process.env.PRIVACY_URL,
        RATE_LIMITING_DISABLED: process.env.RATE_LIMITING_DISABLED,
        S3_ACCESS_KEY: process.env.S3_ACCESS_KEY,
        S3_BUCKET_NAME: process.env.S3_BUCKET_NAME,
        S3_REGION: process.env.S3_REGION,
        S3_SECRET_KEY: process.env.S3_SECRET_KEY,
        S3_ENDPOINT_URL: process.env.S3_ENDPOINT_URL,
        S3_FORCE_PATH_STYLE: process.env.S3_FORCE_PATH_STYLE,
        SHORT_URL_BASE: process.env.SHORT_URL_BASE,
        SIGNUP_DISABLED: process.env.SIGNUP_DISABLED,
        SLACK_CLIENT_ID: process.env.SLACK_CLIENT_ID,
        SLACK_CLIENT_SECRET: process.env.SLACK_CLIENT_SECRET,
        SMTP_HOST: process.env.SMTP_HOST,
        SMTP_PASSWORD: process.env.SMTP_PASSWORD,
        SMTP_PORT: process.env.SMTP_PORT,
        SMTP_SECURE_ENABLED: process.env.SMTP_SECURE_ENABLED,
        SMTP_USER: process.env.SMTP_USER,
        SMTP_REJECT_UNAUTHORIZED_TLS: process.env.SMTP_REJECT_UNAUTHORIZED_TLS,
        SMTP_AUTHENTICATED: process.env.SMTP_AUTHENTICATED,
        STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
        STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET,
        TELEMETRY_DISABLED: process.env.TELEMETRY_DISABLED,
        TURNSTILE_SECRET_KEY: process.env.TURNSTILE_SECRET_KEY,
        TERMS_URL: process.env.TERMS_URL,
        UPLOADS_DIR: process.env.UPLOADS_DIR,
        VERCEL_URL: process.env.VERCEL_URL,
        WEBAPP_URL: process.env.WEBAPP_URL,
        UNSPLASH_ACCESS_KEY: process.env.UNSPLASH_ACCESS_KEY
    }
});


/***/ }),

/***/ 37483:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ environmentCache)
/* harmony export */ });
/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(310256);
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

/***/ 394564:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CN: () => (/* binding */ verifyTokenForLinkSurvey),
/* harmony export */   DF: () => (/* binding */ createInviteToken),
/* harmony export */   Ey: () => (/* binding */ createToken),
/* harmony export */   Oj: () => (/* binding */ verifyInviteToken),
/* harmony export */   l7: () => (/* binding */ createTokenForLinkSurvey),
/* harmony export */   nr: () => (/* binding */ verifyToken),
/* harmony export */   qk: () => (/* binding */ createEmailToken)
/* harmony export */ });
/* unused harmony export getEmailFromEmailToken */
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34418);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _formbricks_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(482859);
/* harmony import */ var _crypto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(826478);
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(333258);




const createToken = (userId, userEmail, options = {})=>{
    const encryptedUserId = (0,_crypto__WEBPACK_IMPORTED_MODULE_2__/* .symmetricEncrypt */ .vX)(userId, _env__WEBPACK_IMPORTED_MODULE_3__/* .env */ ._.ENCRYPTION_KEY);
    return jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().sign({
        id: encryptedUserId
    }, _env__WEBPACK_IMPORTED_MODULE_3__/* .env */ ._.NEXTAUTH_SECRET + userEmail, options);
};
const createTokenForLinkSurvey = (surveyId, userEmail)=>{
    const encryptedEmail = (0,_crypto__WEBPACK_IMPORTED_MODULE_2__/* .symmetricEncrypt */ .vX)(userEmail, _env__WEBPACK_IMPORTED_MODULE_3__/* .env */ ._.ENCRYPTION_KEY);
    return jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().sign({
        email: encryptedEmail
    }, _env__WEBPACK_IMPORTED_MODULE_3__/* .env */ ._.NEXTAUTH_SECRET + surveyId);
};
const createEmailToken = (email)=>{
    const encryptedEmail = (0,_crypto__WEBPACK_IMPORTED_MODULE_2__/* .symmetricEncrypt */ .vX)(email, _env__WEBPACK_IMPORTED_MODULE_3__/* .env */ ._.ENCRYPTION_KEY);
    return jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().sign({
        email: encryptedEmail
    }, _env__WEBPACK_IMPORTED_MODULE_3__/* .env */ ._.NEXTAUTH_SECRET);
};
const getEmailFromEmailToken = (token)=>{
    const payload = jwt.verify(token, env.NEXTAUTH_SECRET);
    try {
        // Try to decrypt first (for newer tokens)
        const decryptedEmail = symmetricDecrypt(payload.email, env.ENCRYPTION_KEY);
        return decryptedEmail;
    } catch  {
        // If decryption fails, return the original email (for older tokens)
        return payload.email;
    }
};
const createInviteToken = (inviteId, email, options = {})=>{
    const encryptedInviteId = (0,_crypto__WEBPACK_IMPORTED_MODULE_2__/* .symmetricEncrypt */ .vX)(inviteId, _env__WEBPACK_IMPORTED_MODULE_3__/* .env */ ._.ENCRYPTION_KEY);
    const encryptedEmail = (0,_crypto__WEBPACK_IMPORTED_MODULE_2__/* .symmetricEncrypt */ .vX)(email, _env__WEBPACK_IMPORTED_MODULE_3__/* .env */ ._.ENCRYPTION_KEY);
    return jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().sign({
        inviteId: encryptedInviteId,
        email: encryptedEmail
    }, _env__WEBPACK_IMPORTED_MODULE_3__/* .env */ ._.NEXTAUTH_SECRET, options);
};
const verifyTokenForLinkSurvey = (token, surveyId)=>{
    try {
        const { email } = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(token, _env__WEBPACK_IMPORTED_MODULE_3__/* .env */ ._.NEXTAUTH_SECRET + surveyId);
        try {
            // Try to decrypt first (for newer tokens)
            const decryptedEmail = (0,_crypto__WEBPACK_IMPORTED_MODULE_2__/* .symmetricDecrypt */ .zp)(email, _env__WEBPACK_IMPORTED_MODULE_3__/* .env */ ._.ENCRYPTION_KEY);
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
        decryptedId = (0,_crypto__WEBPACK_IMPORTED_MODULE_2__/* .symmetricDecrypt */ .zp)(id, _env__WEBPACK_IMPORTED_MODULE_3__/* .env */ ._.ENCRYPTION_KEY);
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
            decryptedInviteId = (0,_crypto__WEBPACK_IMPORTED_MODULE_2__/* .symmetricDecrypt */ .zp)(inviteId, _env__WEBPACK_IMPORTED_MODULE_3__/* .env */ ._.ENCRYPTION_KEY);
            decryptedEmail = (0,_crypto__WEBPACK_IMPORTED_MODULE_2__/* .symmetricDecrypt */ .zp)(email, _env__WEBPACK_IMPORTED_MODULE_3__/* .env */ ._.ENCRYPTION_KEY);
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

/***/ 920318:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ membershipCache)
/* harmony export */ });
/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(310256);
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

/***/ 575361:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ createMembership),
/* harmony export */   Y: () => (/* binding */ getMembershipByUserIdOrganizationId)
/* harmony export */ });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(896330);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645625);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _formbricks_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(482859);
/* harmony import */ var _formbricks_types_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(552224);
/* harmony import */ var _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(207798);
/* harmony import */ var _formbricks_types_memberships__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(76614);
/* harmony import */ var _cache__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48165);
/* harmony import */ var _membership_cache__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(920318);
/* harmony import */ var _organization_cache__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(189147);
/* harmony import */ var _utils_validate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(472749);











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

/***/ 189147:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ organizationCache)
/* harmony export */ });
/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(310256);
/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_cache__WEBPACK_IMPORTED_MODULE_0__);

const organizationCache = {
    tag: {
        byId (id) {
            return `organizations-${id}`;
        },
        byUserId (userId) {
            return `users-${userId}-organizations`;
        },
        byEnvironmentId (environmentId) {
            return `environments-${environmentId}-organizations`;
        },
        byCount () {
            return "organizations-count";
        }
    },
    revalidate ({ id, userId, environmentId, count }) {
        if (id) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(this.tag.byId(id));
        }
        if (userId) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(this.tag.byUserId(userId));
        }
        if (environmentId) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(this.tag.byEnvironmentId(environmentId));
        }
        if (count) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(this.tag.byCount());
        }
    }
};


/***/ }),

/***/ 167440:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Dp: () => (/* binding */ deleteOrganization),
/* harmony export */   EC: () => (/* binding */ createOrganization),
/* harmony export */   L_: () => (/* binding */ updateOrganization),
/* harmony export */   SA: () => (/* binding */ getOrganization),
/* harmony export */   Ss: () => (/* binding */ subscribeOrganizationMembersToSurveyResponses),
/* harmony export */   TK: () => (/* binding */ getOrganizationByEnvironmentId),
/* harmony export */   yN: () => (/* binding */ getOrganizationsWhereUserIsSingleOwner)
/* harmony export */ });
/* unused harmony exports select, getOrganizationsTag, getOrganizationsByUserIdCacheTag, getOrganizationByEnvironmentIdCacheTag, getOrganizationsByUserId, getMonthlyActiveOrganizationPeopleCount, getMonthlyOrganizationResponseCount */
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(896330);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645625);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _formbricks_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(482859);
/* harmony import */ var _formbricks_types_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(552224);
/* harmony import */ var _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(207798);
/* harmony import */ var _formbricks_types_organizations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(320917);
/* harmony import */ var _cache__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48165);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(711344);
/* harmony import */ var _environment_cache__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(37483);
/* harmony import */ var _project_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(28492);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(717080);
/* harmony import */ var _utils_validate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(472749);
/* harmony import */ var _cache__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(189147);















const select = {
    id: true,
    createdAt: true,
    updatedAt: true,
    name: true,
    billing: true,
    isAIEnabled: true,
    whitelabel: true
};
const getOrganizationsTag = (organizationId)=>`organizations-${organizationId}`;
const getOrganizationsByUserIdCacheTag = (userId)=>`users-${userId}-organizations`;
const getOrganizationByEnvironmentIdCacheTag = (environmentId)=>`environments-${environmentId}-organization`;
const getOrganizationsByUserId = (0,react__WEBPACK_IMPORTED_MODULE_1__.cache)(async (userId, page)=>(0,_cache__WEBPACK_IMPORTED_MODULE_3__/* .cache */ .P)(async ()=>{
        (0,_utils_validate__WEBPACK_IMPORTED_MODULE_4__/* .validateInputs */ .C)([
            userId,
            _formbricks_types_common__WEBPACK_IMPORTED_MODULE_5__/* .ZString */ .eI
        ], [
            page,
            _formbricks_types_common__WEBPACK_IMPORTED_MODULE_5__/* .ZOptionalNumber */ .Wo
        ]);
        try {
            const organizations = await _formbricks_database__WEBPACK_IMPORTED_MODULE_2__/* .prisma */ .z.organization.findMany({
                where: {
                    memberships: {
                        some: {
                            userId
                        }
                    }
                },
                select,
                take: page ? _constants__WEBPACK_IMPORTED_MODULE_6__/* .ITEMS_PER_PAGE */ .re : undefined,
                skip: page ? _constants__WEBPACK_IMPORTED_MODULE_6__/* .ITEMS_PER_PAGE */ .re * (page - 1) : undefined
            });
            if (!organizations) {
                throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_7__/* .ResourceNotFoundError */ .CE("Organizations by UserId", userId);
            }
            return organizations;
        } catch (error) {
            if (error instanceof _prisma_client__WEBPACK_IMPORTED_MODULE_0__.Prisma.PrismaClientKnownRequestError) {
                throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_7__/* .DatabaseError */ .a$(error.message);
            }
            throw error;
        }
    }, [
        `getOrganizationsByUserId-${userId}-${page}`
    ], {
        tags: [
            _cache__WEBPACK_IMPORTED_MODULE_8__/* .organizationCache */ .S.tag.byUserId(userId)
        ]
    })());
const getOrganizationByEnvironmentId = (0,react__WEBPACK_IMPORTED_MODULE_1__.cache)(async (environmentId)=>(0,_cache__WEBPACK_IMPORTED_MODULE_3__/* .cache */ .P)(async ()=>{
        (0,_utils_validate__WEBPACK_IMPORTED_MODULE_4__/* .validateInputs */ .C)([
            environmentId,
            _formbricks_types_common__WEBPACK_IMPORTED_MODULE_5__/* .ZId */ .i4
        ]);
        try {
            const organization = await _formbricks_database__WEBPACK_IMPORTED_MODULE_2__/* .prisma */ .z.organization.findFirst({
                where: {
                    projects: {
                        some: {
                            environments: {
                                some: {
                                    id: environmentId
                                }
                            }
                        }
                    }
                },
                select: {
                    ...select,
                    memberships: true
                }
            });
            return organization;
        } catch (error) {
            if (error instanceof _prisma_client__WEBPACK_IMPORTED_MODULE_0__.Prisma.PrismaClientKnownRequestError) {
                console.error(error);
                throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_7__/* .DatabaseError */ .a$(error.message);
            }
            throw error;
        }
    }, [
        `getOrganizationByEnvironmentId-${environmentId}`
    ], {
        tags: [
            _cache__WEBPACK_IMPORTED_MODULE_8__/* .organizationCache */ .S.tag.byEnvironmentId(environmentId)
        ]
    })());
const getOrganization = (0,react__WEBPACK_IMPORTED_MODULE_1__.cache)(async (organizationId)=>(0,_cache__WEBPACK_IMPORTED_MODULE_3__/* .cache */ .P)(async ()=>{
        (0,_utils_validate__WEBPACK_IMPORTED_MODULE_4__/* .validateInputs */ .C)([
            organizationId,
            _formbricks_types_common__WEBPACK_IMPORTED_MODULE_5__/* .ZString */ .eI
        ]);
        try {
            const organization = await _formbricks_database__WEBPACK_IMPORTED_MODULE_2__/* .prisma */ .z.organization.findUnique({
                where: {
                    id: organizationId
                },
                select
            });
            return organization;
        } catch (error) {
            if (error instanceof _prisma_client__WEBPACK_IMPORTED_MODULE_0__.Prisma.PrismaClientKnownRequestError) {
                throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_7__/* .DatabaseError */ .a$(error.message);
            }
            throw error;
        }
    }, [
        `getOrganization-${organizationId}`
    ], {
        tags: [
            _cache__WEBPACK_IMPORTED_MODULE_8__/* .organizationCache */ .S.tag.byId(organizationId)
        ]
    })());
const createOrganization = async (organizationInput)=>{
    try {
        (0,_utils_validate__WEBPACK_IMPORTED_MODULE_4__/* .validateInputs */ .C)([
            organizationInput,
            _formbricks_types_organizations__WEBPACK_IMPORTED_MODULE_9__/* .ZOrganizationCreateInput */ .uh
        ]);
        const organization = await _formbricks_database__WEBPACK_IMPORTED_MODULE_2__/* .prisma */ .z.organization.create({
            data: {
                ...organizationInput,
                billing: {
                    plan: _constants__WEBPACK_IMPORTED_MODULE_6__/* .PROJECT_FEATURE_KEYS */ .mu.FREE,
                    limits: {
                        projects: _constants__WEBPACK_IMPORTED_MODULE_6__/* .BILLING_LIMITS */ .fT.FREE.PROJECTS,
                        monthly: {
                            responses: _constants__WEBPACK_IMPORTED_MODULE_6__/* .BILLING_LIMITS */ .fT.FREE.RESPONSES,
                            miu: _constants__WEBPACK_IMPORTED_MODULE_6__/* .BILLING_LIMITS */ .fT.FREE.MIU
                        }
                    },
                    stripeCustomerId: null,
                    periodStart: new Date(),
                    period: "monthly"
                }
            },
            select
        });
        _cache__WEBPACK_IMPORTED_MODULE_8__/* .organizationCache */ .S.revalidate({
            id: organization.id,
            count: true
        });
        return organization;
    } catch (error) {
        if (error instanceof _prisma_client__WEBPACK_IMPORTED_MODULE_0__.Prisma.PrismaClientKnownRequestError) {
            throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_7__/* .DatabaseError */ .a$(error.message);
        }
        throw error;
    }
};
const updateOrganization = async (organizationId, data)=>{
    try {
        const updatedOrganization = await _formbricks_database__WEBPACK_IMPORTED_MODULE_2__/* .prisma */ .z.organization.update({
            where: {
                id: organizationId
            },
            data,
            select: {
                ...select,
                memberships: true,
                projects: {
                    select: {
                        environments: true
                    }
                }
            }
        });
        // revalidate cache for members
        updatedOrganization?.memberships.forEach((membership)=>{
            _cache__WEBPACK_IMPORTED_MODULE_8__/* .organizationCache */ .S.revalidate({
                userId: membership.userId
            });
        });
        // revalidate cache for environments
        for (const project of updatedOrganization.projects){
            for (const environment of project.environments){
                _cache__WEBPACK_IMPORTED_MODULE_8__/* .organizationCache */ .S.revalidate({
                    environmentId: environment.id
                });
            }
        }
        const organization = {
            ...updatedOrganization,
            memberships: undefined,
            projects: undefined
        };
        _cache__WEBPACK_IMPORTED_MODULE_8__/* .organizationCache */ .S.revalidate({
            id: organization.id
        });
        return organization;
    } catch (error) {
        if (error instanceof _prisma_client__WEBPACK_IMPORTED_MODULE_0__.Prisma.PrismaClientKnownRequestError && error.code === "P2016") {
            throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_7__/* .ResourceNotFoundError */ .CE("Organization", organizationId);
        }
        throw error; // Re-throw any other errors
    }
};
const deleteOrganization = async (organizationId)=>{
    (0,_utils_validate__WEBPACK_IMPORTED_MODULE_4__/* .validateInputs */ .C)([
        organizationId,
        _formbricks_types_common__WEBPACK_IMPORTED_MODULE_5__/* .ZId */ .i4
    ]);
    try {
        const deletedOrganization = await _formbricks_database__WEBPACK_IMPORTED_MODULE_2__/* .prisma */ .z.organization.delete({
            where: {
                id: organizationId
            },
            select: {
                id: true,
                name: true,
                memberships: {
                    select: {
                        userId: true
                    }
                },
                projects: {
                    select: {
                        id: true,
                        environments: {
                            select: {
                                id: true
                            }
                        }
                    }
                }
            }
        });
        // revalidate cache for members
        deletedOrganization?.memberships.forEach((membership)=>{
            _cache__WEBPACK_IMPORTED_MODULE_8__/* .organizationCache */ .S.revalidate({
                userId: membership.userId
            });
        });
        // revalidate cache for environments
        deletedOrganization?.projects.forEach((project)=>{
            project.environments.forEach((environment)=>{
                _environment_cache__WEBPACK_IMPORTED_MODULE_10__/* .environmentCache */ .e.revalidate({
                    id: environment.id
                });
                _cache__WEBPACK_IMPORTED_MODULE_8__/* .organizationCache */ .S.revalidate({
                    environmentId: environment.id
                });
            });
        });
        const organization = {
            ...deletedOrganization,
            memberships: undefined,
            projects: undefined
        };
        _cache__WEBPACK_IMPORTED_MODULE_8__/* .organizationCache */ .S.revalidate({
            id: organization.id,
            count: true
        });
    } catch (error) {
        if (error instanceof _prisma_client__WEBPACK_IMPORTED_MODULE_0__.Prisma.PrismaClientKnownRequestError) {
            throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_7__/* .DatabaseError */ .a$(error.message);
        }
        throw error;
    }
};
const getMonthlyActiveOrganizationPeopleCount = (0,react__WEBPACK_IMPORTED_MODULE_1__.cache)(async (organizationId)=>(0,_cache__WEBPACK_IMPORTED_MODULE_3__/* .cache */ .P)(async ()=>{
        (0,_utils_validate__WEBPACK_IMPORTED_MODULE_4__/* .validateInputs */ .C)([
            organizationId,
            _formbricks_types_common__WEBPACK_IMPORTED_MODULE_5__/* .ZId */ .i4
        ]);
        try {
            // temporary solution until we have a better way to track active users
            return 0;
        } catch (error) {
            if (error instanceof _prisma_client__WEBPACK_IMPORTED_MODULE_0__.Prisma.PrismaClientKnownRequestError) {
                throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_7__/* .DatabaseError */ .a$(error.message);
            }
            throw error;
        }
    }, [
        `getMonthlyActiveOrganizationPeopleCount-${organizationId}`
    ], {
        revalidate: 60 * 60 * 2
    })());
const getMonthlyOrganizationResponseCount = (0,react__WEBPACK_IMPORTED_MODULE_1__.cache)(async (organizationId)=>(0,_cache__WEBPACK_IMPORTED_MODULE_3__/* .cache */ .P)(async ()=>{
        (0,_utils_validate__WEBPACK_IMPORTED_MODULE_4__/* .validateInputs */ .C)([
            organizationId,
            _formbricks_types_common__WEBPACK_IMPORTED_MODULE_5__/* .ZId */ .i4
        ]);
        try {
            const organization = await getOrganization(organizationId);
            if (!organization) {
                throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_7__/* .ResourceNotFoundError */ .CE("Organization", organizationId);
            }
            // Determine the start date based on the plan type
            let startDate;
            if (organization.billing.plan === "free") {
                // For free plans, use the first day of the current calendar month
                const now = new Date();
                startDate = new Date(now.getFullYear(), now.getMonth(), 1);
            } else {
                // For other plans, use the periodStart from billing
                if (!organization.billing.periodStart) {
                    throw new Error("Organization billing period start is not set");
                }
                startDate = organization.billing.periodStart;
            }
            // Get all environment IDs for the organization
            const projects = await (0,_project_service__WEBPACK_IMPORTED_MODULE_11__/* .getProjects */ .JQ)(organizationId);
            const environmentIds = projects.flatMap((project)=>project.environments.map((env)=>env.id));
            // Use Prisma's aggregate to count responses for all environments
            const responseAggregations = await _formbricks_database__WEBPACK_IMPORTED_MODULE_2__/* .prisma */ .z.response.aggregate({
                _count: {
                    id: true
                },
                where: {
                    AND: [
                        {
                            survey: {
                                environmentId: {
                                    in: environmentIds
                                }
                            }
                        },
                        {
                            createdAt: {
                                gte: startDate
                            }
                        }
                    ]
                }
            });
            // The result is an aggregation of the total count
            return responseAggregations._count.id;
        } catch (error) {
            if (error instanceof _prisma_client__WEBPACK_IMPORTED_MODULE_0__.Prisma.PrismaClientKnownRequestError) {
                throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_7__/* .DatabaseError */ .a$(error.message);
            }
            throw error;
        }
    }, [
        `getMonthlyOrganizationResponseCount-${organizationId}`
    ], {
        revalidate: 60 * 60 * 2
    })());
const subscribeOrganizationMembersToSurveyResponses = async (surveyId, createdBy)=>{
    try {
        const surveyCreator = await _formbricks_database__WEBPACK_IMPORTED_MODULE_2__/* .prisma */ .z.user.findUnique({
            where: {
                id: createdBy
            }
        });
        if (!surveyCreator) {
            throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_7__/* .ResourceNotFoundError */ .CE("User", createdBy);
        }
        const defaultSettings = {
            alert: {},
            weeklySummary: {}
        };
        const updatedNotificationSettings = {
            ...defaultSettings,
            ...surveyCreator.notificationSettings
        };
        updatedNotificationSettings.alert[surveyId] = true;
        await (0,_user_service__WEBPACK_IMPORTED_MODULE_12__/* .updateUser */ .TK)(surveyCreator.id, {
            notificationSettings: updatedNotificationSettings
        });
    } catch (error) {
        throw error;
    }
};
const getOrganizationsWhereUserIsSingleOwner = (0,react__WEBPACK_IMPORTED_MODULE_1__.cache)(async (userId)=>(0,_cache__WEBPACK_IMPORTED_MODULE_3__/* .cache */ .P)(async ()=>{
        (0,_utils_validate__WEBPACK_IMPORTED_MODULE_4__/* .validateInputs */ .C)([
            userId,
            _formbricks_types_common__WEBPACK_IMPORTED_MODULE_5__/* .ZString */ .eI
        ]);
        try {
            const orgs = await _formbricks_database__WEBPACK_IMPORTED_MODULE_2__/* .prisma */ .z.organization.findMany({
                where: {
                    memberships: {
                        some: {
                            userId,
                            role: "owner"
                        }
                    }
                },
                select: {
                    ...select,
                    memberships: {
                        where: {
                            role: "owner"
                        }
                    }
                }
            });
            // Filter to only include orgs where there is exactly one owner
            const filteredOrgs = orgs.filter((org)=>org.memberships.length === 1).map((org)=>({
                    ...org,
                    memberships: undefined
                }));
            return filteredOrgs;
        } catch (error) {
            if (error instanceof _prisma_client__WEBPACK_IMPORTED_MODULE_0__.Prisma.PrismaClientKnownRequestError) {
                throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_7__/* .DatabaseError */ .a$(error.message);
            }
            throw error;
        }
    }, [
        `getOrganizationsWhereUserIsSingleOwner-${userId}`
    ], {
        tags: [
            _cache__WEBPACK_IMPORTED_MODULE_8__/* .organizationCache */ .S.tag.byUserId(userId)
        ]
    })());


/***/ }),

/***/ 595111:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ projectCache)
/* harmony export */ });
/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(310256);
/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_cache__WEBPACK_IMPORTED_MODULE_0__);

const projectCache = {
    tag: {
        byId (id) {
            return `project-${id}`;
        },
        byUserId (userId) {
            return `users-${userId}-projects`;
        },
        byOrganizationId (organizationId) {
            return `organizations-${organizationId}-projects`;
        },
        byEnvironmentId (environmentId) {
            return `environments-${environmentId}-projects`;
        }
    },
    revalidate ({ id, userId, organizationId, environmentId }) {
        if (id) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(this.tag.byId(id));
        }
        if (organizationId) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(this.tag.byOrganizationId(organizationId));
        }
        if (environmentId) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(this.tag.byEnvironmentId(environmentId));
        }
        if (userId) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(this.tag.byUserId(userId));
        }
    }
};


/***/ }),

/***/ 28492:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $v: () => (/* binding */ getOrganizationProjectsCount),
/* harmony export */   JQ: () => (/* binding */ getProjects),
/* harmony export */   U1: () => (/* binding */ getProject),
/* harmony export */   _P: () => (/* binding */ getUserProjects),
/* harmony export */   bq: () => (/* binding */ getProjectByEnvironmentId)
/* harmony export */ });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(896330);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645625);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _formbricks_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(482859);
/* harmony import */ var _formbricks_types_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(552224);
/* harmony import */ var _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(207798);
/* harmony import */ var _cache__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48165);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(711344);
/* harmony import */ var _utils_validate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(472749);
/* harmony import */ var _cache__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(595111);











const selectProject = {
    id: true,
    createdAt: true,
    updatedAt: true,
    name: true,
    organizationId: true,
    languages: true,
    recontactDays: true,
    linkSurveyBranding: true,
    inAppSurveyBranding: true,
    config: true,
    placement: true,
    clickOutsideClose: true,
    darkOverlay: true,
    environments: true,
    styling: true,
    logo: true
};
const getUserProjects = (0,react__WEBPACK_IMPORTED_MODULE_1__.cache)(async (userId, organizationId, page)=>(0,_cache__WEBPACK_IMPORTED_MODULE_3__/* .cache */ .P)(async ()=>{
        (0,_utils_validate__WEBPACK_IMPORTED_MODULE_4__/* .validateInputs */ .C)([
            userId,
            _formbricks_types_common__WEBPACK_IMPORTED_MODULE_5__/* .ZString */ .eI
        ], [
            organizationId,
            _formbricks_types_common__WEBPACK_IMPORTED_MODULE_5__/* .ZId */ .i4
        ], [
            page,
            _formbricks_types_common__WEBPACK_IMPORTED_MODULE_5__/* .ZOptionalNumber */ .Wo
        ]);
        const orgMembership = await _formbricks_database__WEBPACK_IMPORTED_MODULE_2__/* .prisma */ .z.membership.findFirst({
            where: {
                userId,
                organizationId
            }
        });
        if (!orgMembership) {
            throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_6__/* .ValidationError */ .yI("User is not a member of this organization");
        }
        let projectWhereClause = {};
        if (orgMembership.role === "member") {
            projectWhereClause = {
                projectTeams: {
                    some: {
                        team: {
                            teamUsers: {
                                some: {
                                    userId
                                }
                            }
                        }
                    }
                }
            };
        }
        try {
            const projects = await _formbricks_database__WEBPACK_IMPORTED_MODULE_2__/* .prisma */ .z.project.findMany({
                where: {
                    organizationId,
                    ...projectWhereClause
                },
                select: selectProject,
                take: page ? _constants__WEBPACK_IMPORTED_MODULE_7__/* .ITEMS_PER_PAGE */ .re : undefined,
                skip: page ? _constants__WEBPACK_IMPORTED_MODULE_7__/* .ITEMS_PER_PAGE */ .re * (page - 1) : undefined
            });
            return projects;
        } catch (error) {
            if (error instanceof _prisma_client__WEBPACK_IMPORTED_MODULE_0__.Prisma.PrismaClientKnownRequestError) {
                throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_6__/* .DatabaseError */ .a$(error.message);
            }
            throw error;
        }
    }, [
        `getUserProjects-${userId}-${organizationId}-${page}`
    ], {
        tags: [
            _cache__WEBPACK_IMPORTED_MODULE_8__/* .projectCache */ .E.tag.byUserId(userId),
            _cache__WEBPACK_IMPORTED_MODULE_8__/* .projectCache */ .E.tag.byOrganizationId(organizationId)
        ]
    })());
const getProjects = (0,react__WEBPACK_IMPORTED_MODULE_1__.cache)(async (organizationId, page)=>(0,_cache__WEBPACK_IMPORTED_MODULE_3__/* .cache */ .P)(async ()=>{
        (0,_utils_validate__WEBPACK_IMPORTED_MODULE_4__/* .validateInputs */ .C)([
            organizationId,
            _formbricks_types_common__WEBPACK_IMPORTED_MODULE_5__/* .ZId */ .i4
        ], [
            page,
            _formbricks_types_common__WEBPACK_IMPORTED_MODULE_5__/* .ZOptionalNumber */ .Wo
        ]);
        try {
            const projects = await _formbricks_database__WEBPACK_IMPORTED_MODULE_2__/* .prisma */ .z.project.findMany({
                where: {
                    organizationId
                },
                select: selectProject,
                take: page ? _constants__WEBPACK_IMPORTED_MODULE_7__/* .ITEMS_PER_PAGE */ .re : undefined,
                skip: page ? _constants__WEBPACK_IMPORTED_MODULE_7__/* .ITEMS_PER_PAGE */ .re * (page - 1) : undefined
            });
            return projects;
        } catch (error) {
            if (error instanceof _prisma_client__WEBPACK_IMPORTED_MODULE_0__.Prisma.PrismaClientKnownRequestError) {
                throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_6__/* .DatabaseError */ .a$(error.message);
            }
            throw error;
        }
    }, [
        `getProjects-${organizationId}-${page}`
    ], {
        tags: [
            _cache__WEBPACK_IMPORTED_MODULE_8__/* .projectCache */ .E.tag.byOrganizationId(organizationId)
        ]
    })());
const getProjectByEnvironmentId = (0,react__WEBPACK_IMPORTED_MODULE_1__.cache)(async (environmentId)=>(0,_cache__WEBPACK_IMPORTED_MODULE_3__/* .cache */ .P)(async ()=>{
        (0,_utils_validate__WEBPACK_IMPORTED_MODULE_4__/* .validateInputs */ .C)([
            environmentId,
            _formbricks_types_common__WEBPACK_IMPORTED_MODULE_5__/* .ZId */ .i4
        ]);
        let projectPrisma;
        try {
            projectPrisma = await _formbricks_database__WEBPACK_IMPORTED_MODULE_2__/* .prisma */ .z.project.findFirst({
                where: {
                    environments: {
                        some: {
                            id: environmentId
                        }
                    }
                },
                select: selectProject
            });
            return projectPrisma;
        } catch (error) {
            if (error instanceof _prisma_client__WEBPACK_IMPORTED_MODULE_0__.Prisma.PrismaClientKnownRequestError) {
                console.error(error);
                throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_6__/* .DatabaseError */ .a$(error.message);
            }
            throw error;
        }
    }, [
        `getProjectByEnvironmentId-${environmentId}`
    ], {
        tags: [
            _cache__WEBPACK_IMPORTED_MODULE_8__/* .projectCache */ .E.tag.byEnvironmentId(environmentId)
        ]
    })());
const getProject = (0,react__WEBPACK_IMPORTED_MODULE_1__.cache)(async (projectId)=>(0,_cache__WEBPACK_IMPORTED_MODULE_3__/* .cache */ .P)(async ()=>{
        let projectPrisma;
        try {
            projectPrisma = await _formbricks_database__WEBPACK_IMPORTED_MODULE_2__/* .prisma */ .z.project.findUnique({
                where: {
                    id: projectId
                },
                select: selectProject
            });
            return projectPrisma;
        } catch (error) {
            if (error instanceof _prisma_client__WEBPACK_IMPORTED_MODULE_0__.Prisma.PrismaClientKnownRequestError) {
                throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_6__/* .DatabaseError */ .a$(error.message);
            }
            throw error;
        }
    }, [
        `getProject-${projectId}`
    ], {
        tags: [
            _cache__WEBPACK_IMPORTED_MODULE_8__/* .projectCache */ .E.tag.byId(projectId)
        ]
    })());
const getOrganizationProjectsCount = (0,react__WEBPACK_IMPORTED_MODULE_1__.cache)(async (organizationId)=>(0,_cache__WEBPACK_IMPORTED_MODULE_3__/* .cache */ .P)(async ()=>{
        (0,_utils_validate__WEBPACK_IMPORTED_MODULE_4__/* .validateInputs */ .C)([
            organizationId,
            _formbricks_types_common__WEBPACK_IMPORTED_MODULE_5__/* .ZId */ .i4
        ]);
        try {
            const projects = await _formbricks_database__WEBPACK_IMPORTED_MODULE_2__/* .prisma */ .z.project.count({
                where: {
                    organizationId
                }
            });
            return projects;
        } catch (error) {
            if (error instanceof _prisma_client__WEBPACK_IMPORTED_MODULE_0__.Prisma.PrismaClientKnownRequestError) {
                throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_6__/* .DatabaseError */ .a$(error.message);
            }
            throw error;
        }
    }, [
        `getOrganizationProjectsCount-${organizationId}`
    ], {
        revalidate: 60 * 60 * 2,
        tags: [
            _cache__WEBPACK_IMPORTED_MODULE_8__/* .projectCache */ .E.tag.byOrganizationId(organizationId)
        ]
    })());


/***/ }),

/***/ 981347:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ userCache)
/* harmony export */ });
/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(310256);
/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_cache__WEBPACK_IMPORTED_MODULE_0__);

const userCache = {
    tag: {
        byId (id) {
            return `users-${id}`;
        },
        byEmail (email) {
            return `users-${email}`;
        },
        byCount () {
            return "users-count";
        }
    },
    revalidate ({ id, email, count }) {
        if (id) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(this.tag.byId(id));
        }
        if (email) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(this.tag.byEmail(email));
        }
        if (count) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(this.tag.byCount());
        }
    }
};


/***/ }),

/***/ 717080:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TK: () => (/* binding */ updateUser),
/* harmony export */   YK: () => (/* binding */ getUserLocale),
/* harmony export */   hG: () => (/* binding */ deleteUser),
/* harmony export */   ht: () => (/* binding */ getUserByEmail),
/* harmony export */   wz: () => (/* binding */ getUser)
/* harmony export */ });
/* unused harmony export getUsersWithOrganization */
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(896330);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645625);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(283131);
/* harmony import */ var _formbricks_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(482859);
/* harmony import */ var _formbricks_types_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(552224);
/* harmony import */ var _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(207798);
/* harmony import */ var _formbricks_types_user__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(352750);
/* harmony import */ var _cache__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48165);
/* harmony import */ var _organization_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(167440);
/* harmony import */ var _utils_validate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(472749);
/* harmony import */ var _cache__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(981347);












const responseSelection = {
    id: true,
    name: true,
    email: true,
    emailVerified: true,
    imageUrl: true,
    createdAt: true,
    updatedAt: true,
    role: true,
    twoFactorEnabled: true,
    identityProvider: true,
    objective: true,
    notificationSettings: true,
    locale: true
};
// function to retrive basic information about a user's user
const getUser = (0,react__WEBPACK_IMPORTED_MODULE_1__.cache)(async (id)=>(0,_cache__WEBPACK_IMPORTED_MODULE_3__/* .cache */ .P)(async ()=>{
        (0,_utils_validate__WEBPACK_IMPORTED_MODULE_4__/* .validateInputs */ .C)([
            id,
            _formbricks_types_common__WEBPACK_IMPORTED_MODULE_5__/* .ZId */ .i4
        ]);
        try {
            const user = await _formbricks_database__WEBPACK_IMPORTED_MODULE_2__/* .prisma */ .z.user.findUnique({
                where: {
                    id
                },
                select: responseSelection
            });
            if (!user) {
                return null;
            }
            return user;
        } catch (error) {
            if (error instanceof _prisma_client__WEBPACK_IMPORTED_MODULE_0__.Prisma.PrismaClientKnownRequestError) {
                throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_6__/* .DatabaseError */ .a$(error.message);
            }
            throw error;
        }
    }, [
        `getUser-${id}`
    ], {
        tags: [
            _cache__WEBPACK_IMPORTED_MODULE_7__/* .userCache */ .g.tag.byId(id)
        ]
    })());
const getUserByEmail = (0,react__WEBPACK_IMPORTED_MODULE_1__.cache)(async (email)=>(0,_cache__WEBPACK_IMPORTED_MODULE_3__/* .cache */ .P)(async ()=>{
        (0,_utils_validate__WEBPACK_IMPORTED_MODULE_4__/* .validateInputs */ .C)([
            email,
            zod__WEBPACK_IMPORTED_MODULE_8__.z.string().email()
        ]);
        try {
            const user = await _formbricks_database__WEBPACK_IMPORTED_MODULE_2__/* .prisma */ .z.user.findFirst({
                where: {
                    email
                },
                select: responseSelection
            });
            return user;
        } catch (error) {
            if (error instanceof _prisma_client__WEBPACK_IMPORTED_MODULE_0__.Prisma.PrismaClientKnownRequestError) {
                throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_6__/* .DatabaseError */ .a$(error.message);
            }
            throw error;
        }
    }, [
        `getUserByEmail-${email}`
    ], {
        tags: [
            _cache__WEBPACK_IMPORTED_MODULE_7__/* .userCache */ .g.tag.byEmail(email)
        ]
    })());
// function to update a user's user
const updateUser = async (personId, data)=>{
    (0,_utils_validate__WEBPACK_IMPORTED_MODULE_4__/* .validateInputs */ .C)([
        personId,
        _formbricks_types_common__WEBPACK_IMPORTED_MODULE_5__/* .ZId */ .i4
    ], [
        data,
        _formbricks_types_user__WEBPACK_IMPORTED_MODULE_9__/* .ZUserUpdateInput */ .rd.partial()
    ]);
    try {
        const updatedUser = await _formbricks_database__WEBPACK_IMPORTED_MODULE_2__/* .prisma */ .z.user.update({
            where: {
                id: personId
            },
            data: data,
            select: responseSelection
        });
        _cache__WEBPACK_IMPORTED_MODULE_7__/* .userCache */ .g.revalidate({
            email: updatedUser.email,
            id: updatedUser.id
        });
        return updatedUser;
    } catch (error) {
        if (error instanceof _prisma_client__WEBPACK_IMPORTED_MODULE_0__.Prisma.PrismaClientKnownRequestError && error.code === "P2016") {
            throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_6__/* .ResourceNotFoundError */ .CE("User", personId);
        }
        throw error; // Re-throw any other errors
    }
};
const deleteUserById = async (id)=>{
    (0,_utils_validate__WEBPACK_IMPORTED_MODULE_4__/* .validateInputs */ .C)([
        id,
        _formbricks_types_common__WEBPACK_IMPORTED_MODULE_5__/* .ZId */ .i4
    ]);
    try {
        const user = await _formbricks_database__WEBPACK_IMPORTED_MODULE_2__/* .prisma */ .z.user.delete({
            where: {
                id
            },
            select: responseSelection
        });
        _cache__WEBPACK_IMPORTED_MODULE_7__/* .userCache */ .g.revalidate({
            email: user.email,
            id,
            count: true
        });
        return user;
    } catch (error) {
        if (error instanceof _prisma_client__WEBPACK_IMPORTED_MODULE_0__.Prisma.PrismaClientKnownRequestError) {
            throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_6__/* .DatabaseError */ .a$(error.message);
        }
        throw error;
    }
};
// function to delete a user's user including organizations
const deleteUser = async (id)=>{
    (0,_utils_validate__WEBPACK_IMPORTED_MODULE_4__/* .validateInputs */ .C)([
        id,
        _formbricks_types_common__WEBPACK_IMPORTED_MODULE_5__/* .ZId */ .i4
    ]);
    try {
        const organizationsWithSingleOwner = await (0,_organization_service__WEBPACK_IMPORTED_MODULE_10__/* .getOrganizationsWhereUserIsSingleOwner */ .yN)(id);
        for (const organization of organizationsWithSingleOwner){
            await (0,_organization_service__WEBPACK_IMPORTED_MODULE_10__/* .deleteOrganization */ .Dp)(organization.id);
        }
        const deletedUser = await deleteUserById(id);
        return deletedUser;
    } catch (error) {
        if (error instanceof _prisma_client__WEBPACK_IMPORTED_MODULE_0__.Prisma.PrismaClientKnownRequestError) {
            throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_6__/* .DatabaseError */ .a$(error.message);
        }
        throw error;
    }
};
const getUsersWithOrganization = async (organizationId)=>{
    validateInputs([
        organizationId,
        ZId
    ]);
    try {
        const users = await prisma.user.findMany({
            where: {
                memberships: {
                    some: {
                        organizationId
                    }
                }
            },
            select: responseSelection
        });
        return users;
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            throw new DatabaseError(error.message);
        }
        throw error;
    }
};
const getUserLocale = (0,react__WEBPACK_IMPORTED_MODULE_1__.cache)(async (id)=>(0,_cache__WEBPACK_IMPORTED_MODULE_3__/* .cache */ .P)(async ()=>{
        (0,_utils_validate__WEBPACK_IMPORTED_MODULE_4__/* .validateInputs */ .C)([
            id,
            _formbricks_types_common__WEBPACK_IMPORTED_MODULE_5__/* .ZId */ .i4
        ]);
        try {
            const user = await _formbricks_database__WEBPACK_IMPORTED_MODULE_2__/* .prisma */ .z.user.findUnique({
                where: {
                    id
                },
                select: responseSelection
            });
            if (!user) {
                return undefined;
            }
            return user.locale;
        } catch (error) {
            if (error instanceof _prisma_client__WEBPACK_IMPORTED_MODULE_0__.Prisma.PrismaClientKnownRequestError) {
                throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_6__/* .DatabaseError */ .a$(error.message);
            }
            throw error;
        }
    }, [
        `getUserLocale-${id}`
    ], {
        tags: [
            _cache__WEBPACK_IMPORTED_MODULE_7__/* .userCache */ .g.tag.byId(id)
        ]
    })());


/***/ }),

/***/ 71813:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ findMatchingLocale)
/* harmony export */ });
/* harmony import */ var next_headers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(686424);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(711344);


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

/***/ 472749:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ validateInputs)
/* harmony export */ });
/* harmony import */ var _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(207798);

function validateInputs(...pairs) {
    const parsedData = [];
    for (const [value, schema] of pairs){
        const inputValidation = schema.safeParse(value);
        if (!inputValidation.success) {
            console.error(`Validation failed for ${JSON.stringify(value).substring(0, 100)} and ${JSON.stringify(schema)}: ${inputValidation.error.message}`);
            throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_0__/* .ValidationError */ .yI("Validation failed");
        }
        parsedData.push(inputValidation.data);
    }
    return parsedData;
}


/***/ }),

/***/ 552224:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C7: () => (/* binding */ ZUuid),
/* harmony export */   Wo: () => (/* binding */ ZOptionalNumber),
/* harmony export */   Ww: () => (/* binding */ ZOptionalString),
/* harmony export */   cf: () => (/* binding */ ZColor),
/* harmony export */   eI: () => (/* binding */ ZString),
/* harmony export */   gK: () => (/* binding */ ZAllowedFileExtension),
/* harmony export */   hF: () => (/* binding */ getZSafeUrl),
/* harmony export */   i4: () => (/* binding */ ZId),
/* harmony export */   yO: () => (/* binding */ ZPlacement)
/* harmony export */ });
/* unused harmony exports ZBoolean, ZNumber, ZNullableString */
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(283131);

const ZBoolean = zod__WEBPACK_IMPORTED_MODULE_0__.z.boolean();
const ZString = zod__WEBPACK_IMPORTED_MODULE_0__.z.string();
const ZNumber = zod__WEBPACK_IMPORTED_MODULE_0__.z.number();
const ZOptionalNumber = zod__WEBPACK_IMPORTED_MODULE_0__.z.number().optional();
const ZOptionalString = zod__WEBPACK_IMPORTED_MODULE_0__.z.string().optional();
const ZNullableString = zod__WEBPACK_IMPORTED_MODULE_0__.z.string().nullable();
const ZColor = zod__WEBPACK_IMPORTED_MODULE_0__.z.string().regex(/^#(?:[A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/);
const ZPlacement = zod__WEBPACK_IMPORTED_MODULE_0__.z.enum([
    "bottomLeft",
    "bottomRight",
    "topLeft",
    "topRight",
    "center"
]);
const ZAllowedFileExtension = zod__WEBPACK_IMPORTED_MODULE_0__.z.enum([
    "png",
    "jpeg",
    "jpg",
    "webp",
    "pdf",
    "doc",
    "docx",
    "xls",
    "xlsx",
    "ppt",
    "pptx",
    "plain",
    "csv",
    "mp4",
    "mov",
    "avi",
    "mkv",
    "webm",
    "zip",
    "rar",
    "7z",
    "tar"
]);
const ZId = zod__WEBPACK_IMPORTED_MODULE_0__.z.string().cuid2();
const ZUuid = zod__WEBPACK_IMPORTED_MODULE_0__.z.string().uuid();
const getZSafeUrl = (message)=>zod__WEBPACK_IMPORTED_MODULE_0__.z.string().url({
        message
    }).superRefine((url, ctx)=>{
        if (url.includes(" ")) {
            ctx.addIssue({
                code: zod__WEBPACK_IMPORTED_MODULE_0__.z.ZodIssueCode.custom,
                message: "URL must not contain spaces"
            });
        }
        if (!url.startsWith("https://")) {
            ctx.addIssue({
                code: zod__WEBPACK_IMPORTED_MODULE_0__.z.ZodIssueCode.custom,
                message: "URL must start with https://"
            });
        }
    });


/***/ }),

/***/ 207798:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Bk: () => (/* binding */ UnknownError),
/* harmony export */   CE: () => (/* binding */ ResourceNotFoundError),
/* harmony export */   J4: () => (/* binding */ OperationNotAllowedError),
/* harmony export */   a$: () => (/* binding */ DatabaseError),
/* harmony export */   oC: () => (/* binding */ InvalidInputError),
/* harmony export */   v3: () => (/* binding */ AuthenticationError),
/* harmony export */   yI: () => (/* binding */ ValidationError),
/* harmony export */   yi: () => (/* binding */ AuthorizationError)
/* harmony export */ });
/* unused harmony exports ZErrorHandler, UniqueConstraintError, ForeignKeyConstraintError */
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(283131);

class ResourceNotFoundError extends Error {
    constructor(resource, id){
        super(id ? `${resource} with ID ${id} not found` : `${resource} not found`), this.statusCode = 404;
        this.name = "ResourceNotFoundError";
        this.resourceType = resource;
        this.resourceId = id;
    }
}
class InvalidInputError extends Error {
    constructor(message){
        super(message), this.statusCode = 400;
        this.name = "InvalidInputError";
    }
}
class ValidationError extends Error {
    constructor(message){
        super(message), this.statusCode = 400;
        this.name = "ValidationError";
    }
}
class UnknownError extends Error {
    constructor(message){
        super(message), this.statusCode = 500;
        this.name = "UnknownError";
    }
}
class DatabaseError extends Error {
    constructor(message){
        super(message), this.statusCode = 500;
        this.name = "DatabaseError";
    }
}
class UniqueConstraintError extends Error {
    constructor(message){
        super(message), this.statusCode = 409;
        this.name = "UniqueConstraintError";
    }
}
class ForeignKeyConstraintError extends Error {
    constructor(message){
        super(message), this.statusCode = 409;
        this.name = "ForeignKeyConstraintError";
    }
}
class OperationNotAllowedError extends Error {
    constructor(message){
        super(message), this.statusCode = 403;
        this.name = "OperationNotAllowedError";
    }
}
class AuthenticationError extends Error {
    constructor(message){
        super(message), this.statusCode = 401;
        this.name = "AuthenticationError";
    }
}
class AuthorizationError extends Error {
    constructor(message){
        super(message), this.statusCode = 403;
        this.name = "AuthorizationError";
    }
}
const ZErrorHandler = zod__WEBPACK_IMPORTED_MODULE_0__.z.function().args(zod__WEBPACK_IMPORTED_MODULE_0__.z.any()).returns(zod__WEBPACK_IMPORTED_MODULE_0__.z.void());



/***/ }),

/***/ 76614:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   io: () => (/* binding */ ZMembershipUpdateInput),
/* harmony export */   mp: () => (/* binding */ ZOrganizationRole),
/* harmony export */   rl: () => (/* binding */ ZMembership)
/* harmony export */ });
/* unused harmony exports ZMembershipRole, ZMember */
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(283131);

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


/***/ }),

/***/ 320917:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   uh: () => (/* binding */ ZOrganizationCreateInput),
/* harmony export */   zJ: () => (/* binding */ ZOrganizationUpdateInput)
/* harmony export */ });
/* unused harmony exports ZOrganizationBillingPlan, ZOrganizationBillingPeriod, ZOrganizationBillingPlanLimits, ZOrganizationBilling, ZOrganizationWhitelabel, ZOrganization */
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(283131);

const ZOrganizationBillingPlan = zod__WEBPACK_IMPORTED_MODULE_0__.z.enum([
    "free",
    "startup",
    "scale",
    "enterprise"
]);
const ZOrganizationBillingPeriod = zod__WEBPACK_IMPORTED_MODULE_0__.z.enum([
    "monthly",
    "yearly"
]);
// responses and miu can be null to support the unlimited plan
const ZOrganizationBillingPlanLimits = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    projects: zod__WEBPACK_IMPORTED_MODULE_0__.z.number().nullable(),
    monthly: zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
        responses: zod__WEBPACK_IMPORTED_MODULE_0__.z.number().nullable(),
        miu: zod__WEBPACK_IMPORTED_MODULE_0__.z.number().nullable()
    })
});
const ZOrganizationBilling = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    stripeCustomerId: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().nullable(),
    plan: ZOrganizationBillingPlan.default("free"),
    period: ZOrganizationBillingPeriod.default("monthly"),
    limits: ZOrganizationBillingPlanLimits.default({
        projects: 3,
        monthly: {
            responses: 1500,
            miu: 2000
        }
    }),
    periodStart: zod__WEBPACK_IMPORTED_MODULE_0__.z.date()
});
const ZOrganizationWhitelabel = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    logoUrl: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().nullable()
});
const ZOrganization = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    id: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().cuid2(),
    createdAt: zod__WEBPACK_IMPORTED_MODULE_0__.z.date(),
    updatedAt: zod__WEBPACK_IMPORTED_MODULE_0__.z.date(),
    name: zod__WEBPACK_IMPORTED_MODULE_0__.z.string({
        message: "Organization name is required"
    }).trim().min(1, {
        message: "Organization name must be at least 1 character long"
    }),
    whitelabel: ZOrganizationWhitelabel.optional(),
    billing: ZOrganizationBilling,
    isAIEnabled: zod__WEBPACK_IMPORTED_MODULE_0__.z.boolean().default(false)
});
const ZOrganizationCreateInput = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    id: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().cuid2().optional(),
    name: zod__WEBPACK_IMPORTED_MODULE_0__.z.string()
});
const ZOrganizationUpdateInput = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    name: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),
    whitelabel: ZOrganizationWhitelabel.optional(),
    billing: ZOrganizationBilling.optional(),
    isAIEnabled: zod__WEBPACK_IMPORTED_MODULE_0__.z.boolean().optional()
});


/***/ }),

/***/ 352750:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B$: () => (/* binding */ ZUserPassword),
/* harmony export */   Ev: () => (/* binding */ ZUserNotificationSettings),
/* harmony export */   i6: () => (/* binding */ ZUserLocale),
/* harmony export */   pE: () => (/* binding */ ZUserName),
/* harmony export */   rd: () => (/* binding */ ZUserUpdateInput),
/* harmony export */   sO: () => (/* binding */ ZUserEmail)
/* harmony export */ });
/* unused harmony exports ZUserObjective, ZUser, ZUserCreateInput */
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(283131);

const ZRole = zod__WEBPACK_IMPORTED_MODULE_0__.z.enum([
    "project_manager",
    "engineer",
    "founder",
    "marketing_specialist",
    "other"
]);
const ZUserLocale = zod__WEBPACK_IMPORTED_MODULE_0__.z.enum([
    "en-US",
    "de-DE",
    "pt-BR",
    "fr-FR"
]);
const ZUserObjective = zod__WEBPACK_IMPORTED_MODULE_0__.z.enum([
    "increase_conversion",
    "improve_user_retention",
    "increase_user_adoption",
    "sharpen_marketing_messaging",
    "support_sales",
    "other"
]);
const ZUserNotificationSettings = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    alert: zod__WEBPACK_IMPORTED_MODULE_0__.z.record(zod__WEBPACK_IMPORTED_MODULE_0__.z.boolean()),
    weeklySummary: zod__WEBPACK_IMPORTED_MODULE_0__.z.record(zod__WEBPACK_IMPORTED_MODULE_0__.z.boolean()),
    unsubscribedOrganizationIds: zod__WEBPACK_IMPORTED_MODULE_0__.z.array(zod__WEBPACK_IMPORTED_MODULE_0__.z.string()).optional()
});
const ZUserName = zod__WEBPACK_IMPORTED_MODULE_0__.z.string().trim().min(1, {
    message: "Name should be at least 1 character long"
}).regex(/^[\p{L}\p{M}\s'\d-]+$/u, "Invalid name format");
const ZUserEmail = zod__WEBPACK_IMPORTED_MODULE_0__.z.string().email({
    message: "Invalid email"
});
const ZUserPassword = zod__WEBPACK_IMPORTED_MODULE_0__.z.string().min(8).regex(/^(?=.*[A-Z])(?=.*\d).*$/);
const ZUser = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    id: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),
    name: ZUserName,
    email: ZUserEmail,
    emailVerified: zod__WEBPACK_IMPORTED_MODULE_0__.z.date().nullable(),
    imageUrl: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().url().nullable(),
    twoFactorEnabled: zod__WEBPACK_IMPORTED_MODULE_0__.z.boolean(),
    identityProvider: zod__WEBPACK_IMPORTED_MODULE_0__.z.enum([
        "email",
        "google",
        "github",
        "azuread",
        "openid"
    ]),
    createdAt: zod__WEBPACK_IMPORTED_MODULE_0__.z.date(),
    updatedAt: zod__WEBPACK_IMPORTED_MODULE_0__.z.date(),
    role: ZRole.nullable(),
    objective: ZUserObjective.nullable(),
    notificationSettings: ZUserNotificationSettings,
    locale: ZUserLocale
});
const ZUserUpdateInput = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    name: ZUserName.optional(),
    email: ZUserEmail.optional(),
    emailVerified: zod__WEBPACK_IMPORTED_MODULE_0__.z.date().nullish(),
    password: ZUserPassword.optional(),
    role: ZRole.optional(),
    objective: ZUserObjective.nullish(),
    imageUrl: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().nullish(),
    notificationSettings: ZUserNotificationSettings.optional(),
    locale: ZUserLocale.optional()
});
const ZUserCreateInput = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    name: ZUserName,
    email: ZUserEmail,
    password: ZUserPassword.optional(),
    emailVerified: zod__WEBPACK_IMPORTED_MODULE_0__.z.date().optional(),
    role: ZRole.optional(),
    objective: ZUserObjective.nullish(),
    identityProvider: zod__WEBPACK_IMPORTED_MODULE_0__.z.enum([
        "email",
        "google",
        "github",
        "azuread",
        "openid"
    ]).optional(),
    identityProviderAccountId: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().optional(),
    locale: ZUserLocale.optional()
});


/***/ })

};
;