exports.id = 4974;
exports.ids = [4974];
exports.modules = {

/***/ 587032:
/***/ (() => {



/***/ }),

/***/ 580408:
/***/ (() => {



/***/ }),

/***/ 108462:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   aN: () => (/* binding */ getSessionUser),
/* harmony export */   kk: () => (/* binding */ hashApiKey),
/* harmony export */   s8: () => (/* binding */ hasOrganizationAccess)
/* harmony export */ });
/* unused harmony exports hasEnvironmentAccess, hasApiEnvironmentAccess */
/* harmony import */ var _modules_auth_lib_authOptions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(136015);
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(455511);
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(963302);
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _formbricks_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(527610);





const hashApiKey = (key)=>(0,crypto__WEBPACK_IMPORTED_MODULE_1__.createHash)("sha256").update(key).digest("hex");
const hasEnvironmentAccess = async (req, res, environmentId)=>{
    if (req.headers["x-api-key"]) {
        const ownership = await hasApiEnvironmentAccess(req.headers["x-api-key"].toString(), environmentId);
        if (!ownership) {
            return false;
        }
    } else {
        const user = await getSessionUser(req, res);
        if (!user) {
            return false;
        }
        const ownership = await hasUserEnvironmentAccess(user.id, environmentId);
        if (!ownership) {
            return false;
        }
    }
    return true;
};
const hasApiEnvironmentAccess = async (apiKey, environmentId)=>{
    // write function to check if the API Key has access to the environment
    const apiKeyData = await prisma.apiKey.findUnique({
        where: {
            hashedKey: hashApiKey(apiKey)
        },
        select: {
            environmentId: true
        }
    });
    if (apiKeyData?.environmentId === environmentId) {
        return true;
    }
    return false;
};
const hasOrganizationAccess = async (user, organizationId)=>{
    const membership = await _formbricks_database__WEBPACK_IMPORTED_MODULE_3__/* .prisma */ .z.membership.findUnique({
        where: {
            userId_organizationId: {
                userId: user.id,
                organizationId: organizationId
            }
        }
    });
    if (membership) {
        return true;
    }
    return false;
};
const getSessionUser = async (req, res)=>{
    // check for session (browser usage)
    let session;
    if (req && res) {
        session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_2__.getServerSession)(req, res, _modules_auth_lib_authOptions__WEBPACK_IMPORTED_MODULE_0__/* .authOptions */ .N);
    } else {
        session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_2__.getServerSession)(_modules_auth_lib_authOptions__WEBPACK_IMPORTED_MODULE_0__/* .authOptions */ .N);
    }
    if (session && "user" in session) return session.user;
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