exports.id = 1629;
exports.ids = [1629];
exports.modules = {

/***/ 619492:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "7f11f2efac37ac84796e6cb223722dbe2e808e177f": () => (/* reexport */ services/* getResponse */.mi),
  "7f12957c3365cc2950bdc48f0118f82439eb6c23ec": () => (/* reexport */ services/* getSurvey */.Dp),
  "7f20db167926d501ff62b9525526548773c8a436d4": () => (/* reexport */ services/* isTeamPartOfOrganization */.l5),
  "7f36cf02b548a01d85112f587591e8c1e8390fa538": () => (/* reexport */ services/* isProjectPartOfOrganization */.Xj),
  "7f4f2c9c8b657cf906e9a25e65dafac6ec65967916": () => (/* reexport */ services/* getWebhook */.O0),
  "7f540889be00b7aa8c6ff1edc5cd79ece876954fd3": () => (/* reexport */ services/* getInvite */.I_),
  "7f60061b4b6be335eaa2facd1c5d8129b87f6923f4": () => (/* reexport */ services/* getActionClass */.Bx),
  "7f670a0537f96de8b5156e1b206124b2a990484370": () => (/* reexport */ services/* getApiKey */.CG),
  "7f74bd40a1f82de833915085152910f3ebd525b356": () => (/* reexport */ services/* getTeam */.Uo),
  "7fb9a3e6cbebea226c9a3678f31bfebf532ca7321e": () => (/* reexport */ services/* getResponseNote */.Wy),
  "7fc5117c6d27e507a6efd4e11ff01afa8b3c52f1a1": () => (/* reexport */ services/* getTag */.bH),
  "7fc6abb0838b6422ef7e81141fd6603883cd1990cf": () => (/* reexport */ services/* getDocument */.YE),
  "7fc856fe5dd5f698d2f54dacf4280d447336780427": () => (/* reexport */ services/* getLanguage */.Z0),
  "7fcda0e6bf50febdf861015e25ebdf74068a488dde": () => (/* reexport */ services/* getContact */.bl),
  "7fcfea9518c327899180b23cb3055005ba65cdef33": () => (/* reexport */ services/* getIntegration */.rg),
  "7fd205a99334cc4ef0f047f4108d296fe00fe608c8": () => (/* reexport */ actions/* createEmailTokenAction */.a),
  "7fdb06c584a2145e0f48be9ead409fc7f774731fde": () => (/* reexport */ services/* getEnvironment */.uc),
  "7fdcbaf3445e783557d350b55d91be1398fafca7d3": () => (/* reexport */ services/* getInsight */.zv),
  "7fe763f2c0d5f307cc75c26f23c693a54ac24a3112": () => (/* reexport */ services/* getProject */.U1),
  "7ff2d70774875ebd76597087e2614fcbb004543597": () => (/* reexport */ createUserAction),
  "7ffb22c619704253744e9b5fea4eccca8b0808fb64": () => (/* reexport */ services/* getSegment */.kn)
});

// EXTERNAL MODULE: ./lib/utils/services.ts
var services = __webpack_require__(883212);
// EXTERNAL MODULE: ../../node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js
var server_reference = __webpack_require__(286055);
// EXTERNAL MODULE: ../../node_modules/next/dist/server/app-render/encryption.js
var encryption = __webpack_require__(770767);
// EXTERNAL MODULE: ./lib/utils/action-client.ts
var action_client = __webpack_require__(308046);
// EXTERNAL MODULE: ./modules/auth/lib/user.ts
var lib_user = __webpack_require__(625944);
// EXTERNAL MODULE: ./lib/cache/invite.ts
var cache_invite = __webpack_require__(896484);
// EXTERNAL MODULE: external "@prisma/client"
var client_ = __webpack_require__(896330);
// EXTERNAL MODULE: ../../node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js
var react = __webpack_require__(645625);
// EXTERNAL MODULE: ../../packages/database/src/index.ts + 1 modules
var src = __webpack_require__(482859);
// EXTERNAL MODULE: ../../packages/lib/cache.ts
var cache = __webpack_require__(48165);
// EXTERNAL MODULE: ../../packages/types/errors.ts
var errors = __webpack_require__(207798);
;// ./modules/auth/signup/lib/invite.ts






const deleteInvite = async (inviteId)=>{
    try {
        const invite = await src/* prisma */.z.invite.delete({
            where: {
                id: inviteId
            },
            select: {
                id: true,
                organizationId: true
            }
        });
        if (!invite) {
            throw new errors/* ResourceNotFoundError */.CE("Invite", inviteId);
        }
        cache_invite/* inviteCache */.i.revalidate({
            id: invite.id,
            organizationId: invite.organizationId
        });
        return true;
    } catch (error) {
        if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
            throw new errors/* DatabaseError */.a$(error.message);
        }
        throw error;
    }
};
const getInvite = (0,react.cache)(async (inviteId)=>(0,cache/* cache */.P)(async ()=>{
        try {
            const invite = await src/* prisma */.z.invite.findUnique({
                where: {
                    id: inviteId
                },
                select: {
                    id: true,
                    organizationId: true,
                    role: true,
                    teamIds: true,
                    creator: {
                        select: {
                            name: true,
                            email: true,
                            locale: true
                        }
                    }
                }
            });
            return invite;
        } catch (error) {
            if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
                throw new errors/* DatabaseError */.a$(error.message);
            }
            throw error;
        }
    }, [
        `signup-getInvite-${inviteId}`
    ], {
        tags: [
            cache_invite/* inviteCache */.i.tag.byId(inviteId)
        ]
    })());

// EXTERNAL MODULE: ./lib/cache/team.ts
var team = __webpack_require__(753304);
// EXTERNAL MODULE: ../../packages/lib/membership/utils.ts
var utils = __webpack_require__(38431);
// EXTERNAL MODULE: ../../packages/lib/project/cache.ts
var project_cache = __webpack_require__(595111);
;// ./modules/auth/signup/lib/team.ts







const createTeamMembership = async (invite, userId)=>{
    const teamIds = invite.teamIds || [];
    const userMembershipRole = invite.role;
    const { isOwner, isManager } = (0,utils/* getAccessFlags */.c)(userMembershipRole);
    const validTeamIds = [];
    const validProjectIds = [];
    const isOwnerOrManager = isOwner || isManager;
    try {
        for (const teamId of teamIds){
            const team = await src/* prisma */.z.team.findUnique({
                where: {
                    id: teamId
                },
                select: {
                    projectTeams: {
                        select: {
                            projectId: true
                        }
                    }
                }
            });
            if (team) {
                await src/* prisma */.z.teamUser.create({
                    data: {
                        teamId,
                        userId,
                        role: isOwnerOrManager ? "admin" : "contributor"
                    }
                });
                validTeamIds.push(teamId);
                validProjectIds.push(...team.projectTeams.map((pt)=>pt.projectId));
            }
        }
        for (const projectId of validProjectIds){
            team/* teamCache */.g.revalidate({
                id: projectId
            });
        }
        for (const teamId of validTeamIds){
            team/* teamCache */.g.revalidate({
                id: teamId
            });
        }
        team/* teamCache */.g.revalidate({
            userId,
            organizationId: invite.organizationId
        });
        project_cache/* projectCache */.E.revalidate({
            userId,
            organizationId: invite.organizationId
        });
    } catch (error) {
        if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
            throw new errors/* DatabaseError */.a$(error.message);
        }
        throw error;
    }
};

// EXTERNAL MODULE: ../../node_modules/posthog-js/dist/module.js
var dist_module = __webpack_require__(947002);
;// ./modules/auth/signup/lib/utils.ts

const verifyTurnstileToken = async (secretKey, token)=>{
    const controller = new AbortController();
    const timeoutId = setTimeout(()=>controller.abort(), 5000);
    try {
        const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                secret: secretKey,
                response: token
            }),
            signal: controller.signal
        });
        if (!response.ok) {
            throw new Error(`Verification failed with status: ${response.status}`);
        }
        const data = await response.json();
        return data.success === true;
    } catch (error) {
        return false;
    } finally{
        clearTimeout(timeoutId);
    }
};
const captureFailedSignup = (email, name)=>{
    dist_module/* default */.Ay.capture("TELEMETRY_FAILED_SIGNUP", {
        email,
        name
    });
};

// EXTERNAL MODULE: ./modules/ee/license-check/lib/utils.ts + 1 modules
var lib_utils = __webpack_require__(725322);
// EXTERNAL MODULE: ./modules/email/index.tsx + 21 modules
var email = __webpack_require__(778015);
// EXTERNAL MODULE: ../../node_modules/zod/lib/index.mjs
var lib = __webpack_require__(283131);
// EXTERNAL MODULE: ../../packages/lib/auth.ts
var auth = __webpack_require__(985183);
// EXTERNAL MODULE: ../../packages/lib/constants.ts
var constants = __webpack_require__(711344);
// EXTERNAL MODULE: ../../packages/lib/jwt.ts
var jwt = __webpack_require__(394564);
// EXTERNAL MODULE: ../../packages/lib/membership/service.ts
var service = __webpack_require__(575361);
// EXTERNAL MODULE: ../../packages/lib/organization/service.ts
var organization_service = __webpack_require__(167440);
// EXTERNAL MODULE: ../../packages/types/memberships.ts
var memberships = __webpack_require__(76614);
// EXTERNAL MODULE: ../../packages/types/user.ts
var user = __webpack_require__(352750);
// EXTERNAL MODULE: ../../node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js
var action_validate = __webpack_require__(429931);
;// ./modules/auth/signup/actions.ts
/* __next_internal_action_entry_do_not_use__ {"7ff2d70774875ebd76597087e2614fcbb004543597":"createUserAction"} */ 

















const ZCreateUserAction = lib.z.object({
    name: user/* ZUserName */.pE,
    email: lib.z.string().max(255).email({
        message: "Invalid email"
    }),
    password: lib.z.string().min(8),
    inviteToken: lib.z.string().optional(),
    userLocale: user/* ZUserLocale */.i6.optional(),
    defaultOrganizationId: lib.z.string().optional(),
    defaultOrganizationRole: memberships/* ZOrganizationRole */.mp.optional(),
    emailVerificationDisabled: lib.z.boolean().optional(),
    turnstileToken: lib.z.string().optional().refine((token)=>!constants/* IS_TURNSTILE_CONFIGURED */.rC || constants/* IS_TURNSTILE_CONFIGURED */.rC && token, "CAPTCHA verification required")
});
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ createUserAction = action_client/* actionClient */._.schema(ZCreateUserAction).action(async ({ parsedInput })=>{
    if (constants/* IS_TURNSTILE_CONFIGURED */.rC) {
        if (!parsedInput.turnstileToken || !constants/* TURNSTILE_SECRET_KEY */.ER) {
            captureFailedSignup(parsedInput.email, parsedInput.name);
            throw new errors/* UnknownError */.Bk("Server configuration error");
        }
        const isHuman = await verifyTurnstileToken(constants/* TURNSTILE_SECRET_KEY */.ER, parsedInput.turnstileToken);
        if (!isHuman) {
            captureFailedSignup(parsedInput.email, parsedInput.name);
            throw new errors/* UnknownError */.Bk("reCAPTCHA verification failed");
        }
    }
    const { inviteToken, emailVerificationDisabled } = parsedInput;
    const hashedPassword = await (0,auth/* hashPassword */.Er)(parsedInput.password);
    const user = await (0,lib_user/* createUser */.kg)({
        email: parsedInput.email.toLowerCase(),
        name: parsedInput.name,
        password: hashedPassword,
        locale: parsedInput.userLocale
    });
    // Handle invite flow
    if (inviteToken) {
        const inviteTokenData = (0,jwt/* verifyInviteToken */.Oj)(inviteToken);
        const invite = await getInvite(inviteTokenData.inviteId);
        if (!invite) {
            throw new Error("Invalid invite ID");
        }
        await (0,service/* createMembership */.$)(invite.organizationId, user.id, {
            accepted: true,
            role: invite.role
        });
        if (invite.teamIds) {
            await createTeamMembership({
                organizationId: invite.organizationId,
                role: invite.role,
                teamIds: invite.teamIds
            }, user.id);
        }
        await (0,lib_user/* updateUser */.TK)(user.id, {
            notificationSettings: {
                alert: {},
                weeklySummary: {},
                unsubscribedOrganizationIds: [
                    invite.organizationId
                ]
            }
        });
        await (0,email/* sendInviteAcceptedEmail */.lO)(invite.creator.name ?? "", user.name, invite.creator.email);
        await deleteInvite(invite.id);
    } else {
        let organizationId;
        let role = "owner";
        if (parsedInput.defaultOrganizationId) {
            // Use existing or create organization with specific ID
            let organization = await (0,organization_service/* getOrganization */.SA)(parsedInput.defaultOrganizationId);
            if (!organization) {
                organization = await (0,organization_service/* createOrganization */.EC)({
                    id: parsedInput.defaultOrganizationId,
                    name: `${user.name}'s Organization`
                });
            } else {
                role = parsedInput.defaultOrganizationRole || "owner";
            }
            organizationId = organization.id;
        } else {
            const isMultiOrgEnabled = await (0,lib_utils/* getIsMultiOrgEnabled */.pn)();
            if (isMultiOrgEnabled) {
                // Create new organization
                const organization = await (0,organization_service/* createOrganization */.EC)({
                    name: `${user.name}'s Organization`
                });
                organizationId = organization.id;
            }
        }
        if (organizationId) {
            await (0,service/* createMembership */.$)(organizationId, user.id, {
                role,
                accepted: true
            });
            await (0,lib_user/* updateUser */.TK)(user.id, {
                notificationSettings: {
                    ...user.notificationSettings,
                    alert: {
                        ...user.notificationSettings?.alert
                    },
                    weeklySummary: {
                        ...user.notificationSettings?.weeklySummary
                    },
                    unsubscribedOrganizationIds: Array.from(new Set([
                        ...user.notificationSettings?.unsubscribedOrganizationIds || [],
                        organizationId
                    ]))
                }
            });
        }
    }
    // Send verification email if enabled
    if (!emailVerificationDisabled) {
        await (0,email/* sendVerificationEmail */.kH)(user);
    }
    return user;
});

(0,action_validate/* ensureServerEntryExports */.D)([
    createUserAction
]);
(0,server_reference/* registerServerReference */.A)(createUserAction, "7ff2d70774875ebd76597087e2614fcbb004543597", null);

// EXTERNAL MODULE: ./modules/auth/actions.ts
var actions = __webpack_require__(493830);
;// ../../node_modules/next/dist/build/webpack/loaders/next-flight-action-entry-loader.js?actions=%5B%5B%22%2FUsers%2Fkdy1%2Fprojects%2Fformbricks%2Fapps%2Fweb%2Flib%2Futils%2Fservices.ts%22%2C%5B%5B%227f11f2efac37ac84796e6cb223722dbe2e808e177f%22%2C%22getResponse%22%5D%2C%5B%227f12957c3365cc2950bdc48f0118f82439eb6c23ec%22%2C%22getSurvey%22%5D%2C%5B%227f20db167926d501ff62b9525526548773c8a436d4%22%2C%22isTeamPartOfOrganization%22%5D%2C%5B%227f36cf02b548a01d85112f587591e8c1e8390fa538%22%2C%22isProjectPartOfOrganization%22%5D%2C%5B%227f4f2c9c8b657cf906e9a25e65dafac6ec65967916%22%2C%22getWebhook%22%5D%2C%5B%227f540889be00b7aa8c6ff1edc5cd79ece876954fd3%22%2C%22getInvite%22%5D%2C%5B%227f60061b4b6be335eaa2facd1c5d8129b87f6923f4%22%2C%22getActionClass%22%5D%2C%5B%227f670a0537f96de8b5156e1b206124b2a990484370%22%2C%22getApiKey%22%5D%2C%5B%227f74bd40a1f82de833915085152910f3ebd525b356%22%2C%22getTeam%22%5D%2C%5B%227fb9a3e6cbebea226c9a3678f31bfebf532ca7321e%22%2C%22getResponseNote%22%5D%2C%5B%227fc5117c6d27e507a6efd4e11ff01afa8b3c52f1a1%22%2C%22getTag%22%5D%2C%5B%227fc6abb0838b6422ef7e81141fd6603883cd1990cf%22%2C%22getDocument%22%5D%2C%5B%227fc856fe5dd5f698d2f54dacf4280d447336780427%22%2C%22getLanguage%22%5D%2C%5B%227fcda0e6bf50febdf861015e25ebdf74068a488dde%22%2C%22getContact%22%5D%2C%5B%227fcfea9518c327899180b23cb3055005ba65cdef33%22%2C%22getIntegration%22%5D%2C%5B%227fdb06c584a2145e0f48be9ead409fc7f774731fde%22%2C%22getEnvironment%22%5D%2C%5B%227fdcbaf3445e783557d350b55d91be1398fafca7d3%22%2C%22getInsight%22%5D%2C%5B%227fe763f2c0d5f307cc75c26f23c693a54ac24a3112%22%2C%22getProject%22%5D%2C%5B%227ffb22c619704253744e9b5fea4eccca8b0808fb64%22%2C%22getSegment%22%5D%5D%5D%2C%5B%22%2FUsers%2Fkdy1%2Fprojects%2Fformbricks%2Fapps%2Fweb%2Fmodules%2Fauth%2Fsignup%2Factions.ts%22%2C%5B%5B%227ff2d70774875ebd76597087e2614fcbb004543597%22%2C%22createUserAction%22%5D%5D%5D%2C%5B%22%2FUsers%2Fkdy1%2Fprojects%2Fformbricks%2Fapps%2Fweb%2Fmodules%2Fauth%2Factions.ts%22%2C%5B%5B%227fd205a99334cc4ef0f047f4108d296fe00fe608c8%22%2C%22createEmailTokenAction%22%5D%5D%5D%5D&__client_imported__=true!
























/***/ }),

/***/ 785177:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 645237));


/***/ }),

/***/ 498329:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 986090));


/***/ }),

/***/ 309367:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: () => (/* binding */ PasswordChecks)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(642725);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tolgee_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(397674);
/* harmony import */ var _barrel_optimize_names_CheckIcon_lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(129170);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(891616);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* __next_internal_client_entry_do_not_use__ PasswordChecks auto */ 



const PASSWORD_REGEX = {
    UPPER_AND_LOWER: /^(?=.*[A-Z])(?=.*[a-z])/,
    NUMBER: /\d/
};
const ValidationIcon = ({ state })=>state ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_CheckIcon_lucide_react__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
        className: "h-5 w-5"
    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
        className: "flex h-5 w-5 items-center justify-center",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
            className: "inline-block h-2 w-2 rounded-full bg-slate-700"
        })
    });
const PasswordChecks = ({ password })=>{
    const { t } = (0,_tolgee_react__WEBPACK_IMPORTED_MODULE_3__/* .useTranslate */ .WD)();
    const DEFAULT_VALIDATIONS = [
        {
            label: t("auth.signup.password_validation_uppercase_and_lowercase"),
            state: false
        },
        {
            label: t("auth.signup.password_validation_minimum_8_and_maximum_128_characters"),
            state: false
        },
        {
            label: t("auth.signup.password_validation_contain_at_least_1_number"),
            state: false
        }
    ];
    const validations = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        if (password === null) return DEFAULT_VALIDATIONS;
        return [
            {
                label: t("auth.signup.password_validation_uppercase_and_lowercase"),
                state: PASSWORD_REGEX.UPPER_AND_LOWER.test(password)
            },
            {
                label: t("auth.signup.password_validation_minimum_8_and_maximum_128_characters"),
                state: password.length >= 8 && password.length <= 128
            },
            {
                label: t("auth.signup.password_validation_contain_at_least_1_number"),
                state: PASSWORD_REGEX.NUMBER.test(password)
            }
        ];
    }, [
        password
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "my-2 text-left text-slate-700 sm:text-sm",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul", {
            role: "list",
            "aria-label": "Password requirements",
            children: validations.map((validation)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                    className: "flex items-center",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ValidationIcon, {
                            state: validation.state
                        }),
                        validation.label
                    ]
                }, validation.label))
        })
    });
};


/***/ }),

/***/ 71138:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  SignupForm: () => (/* binding */ SignupForm)
});

// EXTERNAL MODULE: ../../node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js
var react_jsx_runtime = __webpack_require__(642725);
// EXTERNAL MODULE: ./lib/utils/helper.ts
var helper = __webpack_require__(856763);
// EXTERNAL MODULE: ../../node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js
var action_client_wrapper = __webpack_require__(308441);
;// ../../node_modules/next/dist/build/webpack/loaders/next-flight-server-reference-proxy-loader.js?id=7ff2d70774875ebd76597087e2614fcbb004543597&name=createUserAction!

const createUserAction = /*#__PURE__*/(0,action_client_wrapper.createServerReference)("7ff2d70774875ebd76597087e2614fcbb004543597", action_client_wrapper.callServer, undefined, action_client_wrapper.findSourceMapURL, "createUserAction")
// EXTERNAL MODULE: ../../node_modules/@tolgee/react/dist/tolgee-react.esm.js
var tolgee_react_esm = __webpack_require__(397674);
// EXTERNAL MODULE: ../../node_modules/next/dist/client/app-dir/link.js
var app_dir_link = __webpack_require__(36888);
var link_default = /*#__PURE__*/__webpack_require__.n(app_dir_link);
;// ./modules/auth/signup/components/terms-privacy-links.tsx
/* __next_internal_client_entry_do_not_use__ TermsPrivacyLinks auto */ 


const TermsPrivacyLinks = ({ termsUrl, privacyUrl })=>{
    const { t } = (0,tolgee_react_esm/* useTranslate */.WD)();
    if (!termsUrl && !privacyUrl) return null;
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
        className: "mt-3 text-center text-xs text-slate-500",
        children: [
            termsUrl && /*#__PURE__*/ (0,react_jsx_runtime.jsx)((link_default()), {
                className: "font-semibold",
                href: termsUrl,
                rel: "noreferrer",
                target: "_blank",
                children: t("auth.signup.terms_of_service")
            }),
            termsUrl && privacyUrl && /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("span", {
                children: [
                    " ",
                    t("common.and"),
                    " "
                ]
            }),
            privacyUrl && /*#__PURE__*/ (0,react_jsx_runtime.jsx)((link_default()), {
                className: "font-semibold",
                href: privacyUrl,
                rel: "noreferrer",
                target: "_blank",
                children: t("auth.signup.privacy_policy")
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("hr", {
                className: "mx-6 mt-3"
            })
        ]
    });
};

// EXTERNAL MODULE: ../../node_modules/posthog-js/dist/module.js
var dist_module = __webpack_require__(419965);
;// ./modules/auth/signup/lib/utils.ts

const verifyTurnstileToken = async (secretKey, token)=>{
    const controller = new AbortController();
    const timeoutId = setTimeout(()=>controller.abort(), 5000);
    try {
        const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                secret: secretKey,
                response: token
            }),
            signal: controller.signal
        });
        if (!response.ok) {
            throw new Error(`Verification failed with status: ${response.status}`);
        }
        const data = await response.json();
        return data.success === true;
    } catch (error) {
        return false;
    } finally{
        clearTimeout(timeoutId);
    }
};
const captureFailedSignup = (email, name)=>{
    dist_module/* default */.Ay.capture("TELEMETRY_FAILED_SIGNUP", {
        email,
        name
    });
};

// EXTERNAL MODULE: ./modules/ee/sso/components/sso-options.tsx + 4 modules
var sso_options = __webpack_require__(20156);
// EXTERNAL MODULE: ./modules/ui/components/button/index.tsx
var components_button = __webpack_require__(248852);
// EXTERNAL MODULE: ./modules/ui/components/form/index.tsx
var components_form = __webpack_require__(184142);
// EXTERNAL MODULE: ./modules/ui/components/input/index.tsx
var input = __webpack_require__(438624);
// EXTERNAL MODULE: ./modules/ui/components/password-input/index.tsx
var password_input = __webpack_require__(483268);
// EXTERNAL MODULE: ../../node_modules/@hookform/resolvers/zod/dist/zod.mjs + 1 modules
var zod = __webpack_require__(311159);
// EXTERNAL MODULE: ../../node_modules/next/dist/api/navigation.js
var navigation = __webpack_require__(470207);
// EXTERNAL MODULE: ../../node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js
var react = __webpack_require__(891616);
// EXTERNAL MODULE: ../../node_modules/react-hook-form/dist/index.esm.mjs
var index_esm = __webpack_require__(200667);
// EXTERNAL MODULE: ../../node_modules/react-hot-toast/dist/index.mjs + 1 modules
var dist = __webpack_require__(986090);
// EXTERNAL MODULE: ../../node_modules/react-turnstile/dist/index.js
var react_turnstile_dist = __webpack_require__(990351);
var dist_default = /*#__PURE__*/__webpack_require__.n(react_turnstile_dist);
// EXTERNAL MODULE: ../../node_modules/zod/lib/index.mjs
var lib = __webpack_require__(99922);
// EXTERNAL MODULE: ../../packages/lib/env.ts
var env = __webpack_require__(168109);
// EXTERNAL MODULE: ../../packages/types/user.ts
var user = __webpack_require__(959777);
// EXTERNAL MODULE: ../../node_modules/next/dist/build/webpack/loaders/next-flight-server-reference-proxy-loader.js?id=7fd205a99334cc4ef0f047f4108d296fe00fe608c8&name=createEmailTokenAction!
var next_flight_server_reference_proxy_loaderid_7fd205a99334cc4ef0f047f4108d296fe00fe608c8_name_createEmailTokenAction_ = __webpack_require__(251165);
// EXTERNAL MODULE: ./modules/auth/signup/components/password-checks.tsx
var password_checks = __webpack_require__(309367);
;// ./modules/auth/signup/components/signup-form.tsx
/* __next_internal_client_entry_do_not_use__ SignupForm auto */ 























const ZSignupInput = lib.z.object({
    name: user/* ZUserName */.pE,
    email: lib.z.string().email(),
    password: lib.z.string().min(8).regex(/^(?=.*[A-Z])(?=.*\d).*$/)
});
const turnstileSiteKey = env/* env */._.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
const SignupForm = ({ webAppUrl, privacyUrl, termsUrl, emailAuthEnabled, googleOAuthEnabled, githubOAuthEnabled, azureOAuthEnabled, oidcOAuthEnabled, oidcDisplayName, userLocale, emailFromSearchParams, emailVerificationDisabled, defaultOrganizationId, defaultOrganizationRole, isSSOEnabled, isTurnstileConfigured })=>{
    const [showLogin, setShowLogin] = (0,react.useState)(false);
    const searchParams = (0,navigation.useSearchParams)();
    const { t } = (0,tolgee_react_esm/* useTranslate */.WD)();
    const inviteToken = searchParams?.get("inviteToken");
    const router = (0,navigation.useRouter)();
    const [turnstileToken, setTurnstileToken] = (0,react.useState)();
    const turnstile = (0,react_turnstile_dist.useTurnstile)();
    const callbackUrl = (0,react.useMemo)(()=>{
        if (inviteToken) {
            return webAppUrl + "/invite?token=" + inviteToken;
        } else {
            return webAppUrl;
        }
    }, [
        inviteToken,
        webAppUrl
    ]);
    const form = (0,index_esm/* useForm */.mN)({
        defaultValues: {
            name: "",
            email: emailFromSearchParams || "",
            password: ""
        },
        resolver: (0,zod/* zodResolver */.u)(ZSignupInput)
    });
    const handleSubmit = async (data)=>{
        try {
            if (isTurnstileConfigured && !turnstileToken) {
                throw new Error(t("auth.signup.please_verify_captcha"));
            }
            const createUserResponse = await createUserAction({
                name: data.name,
                email: data.email,
                password: data.password,
                userLocale,
                inviteToken: inviteToken || "",
                emailVerificationDisabled,
                defaultOrganizationId,
                defaultOrganizationRole,
                turnstileToken
            });
            if (createUserResponse?.data) {
                const emailTokenActionResponse = await (0,next_flight_server_reference_proxy_loaderid_7fd205a99334cc4ef0f047f4108d296fe00fe608c8_name_createEmailTokenAction_/* createEmailTokenAction */.a)({
                    email: data.email
                });
                if (emailTokenActionResponse?.data) {
                    const token = emailTokenActionResponse?.data;
                    const url = emailVerificationDisabled ? `/auth/signup-without-verification-success` : `/auth/verification-requested?token=${token}`;
                    router.push(url);
                } else {
                    if (isTurnstileConfigured) {
                        setTurnstileToken(undefined);
                        turnstile.reset();
                    }
                    const errorMessage = (0,helper/* getFormattedErrorMessage */.g3)(emailTokenActionResponse);
                    dist/* default */.Ay.error(errorMessage);
                }
            } else {
                if (isTurnstileConfigured) {
                    setTurnstileToken(undefined);
                    turnstile.reset();
                }
                const errorMessage = (0,helper/* getFormattedErrorMessage */.g3)(createUserResponse);
                dist/* default */.Ay.error(errorMessage);
            }
        } catch (e) {
            dist/* default */.Ay.error(e.message);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
        className: "text-center",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("h1", {
                className: "mb-4 text-slate-700",
                children: t("auth.signup.title")
            }),
            emailAuthEnabled && /*#__PURE__*/ (0,react_jsx_runtime.jsx)(index_esm/* FormProvider */.Op, {
                ...form,
                children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("form", {
                    onSubmit: form.handleSubmit(handleSubmit),
                    className: "mb-2",
                    children: [
                        showLogin && /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_form/* FormField */.zB, {
                                            control: form.control,
                                            name: "name",
                                            render: ({ field, fieldState: { error } })=>/*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_form/* FormItem */.eI, {
                                                    className: "w-full",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_form/* FormControl */.MJ, {
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(input/* Input */.p, {
                                                                    value: field.value,
                                                                    name: "name",
                                                                    autoFocus: true,
                                                                    onChange: (name)=>field.onChange(name),
                                                                    placeholder: "Full name",
                                                                    className: "bg-white"
                                                                }),
                                                                error?.message && /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_form/* FormError */.jQ, {
                                                                    className: "text-left",
                                                                    children: error.message
                                                                })
                                                            ]
                                                        })
                                                    })
                                                })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_form/* FormField */.zB, {
                                            control: form.control,
                                            name: "email",
                                            render: ({ field, fieldState: { error } })=>/*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_form/* FormItem */.eI, {
                                                    className: "w-full",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_form/* FormControl */.MJ, {
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(input/* Input */.p, {
                                                                    value: field.value,
                                                                    name: "email",
                                                                    onChange: (email)=>field.onChange(email),
                                                                    placeholder: "work@email.com",
                                                                    className: "bg-white"
                                                                }),
                                                                error?.message && /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_form/* FormError */.jQ, {
                                                                    className: "text-left",
                                                                    children: error.message
                                                                })
                                                            ]
                                                        })
                                                    })
                                                })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_form/* FormField */.zB, {
                                            control: form.control,
                                            name: "password",
                                            render: ({ field, fieldState: { error } })=>/*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_form/* FormItem */.eI, {
                                                    className: "w-full",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_form/* FormControl */.MJ, {
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(password_input/* PasswordInput */.y, {
                                                                    id: "password",
                                                                    name: "password",
                                                                    value: field.value,
                                                                    onChange: (password)=>field.onChange(password),
                                                                    autoComplete: "current-password",
                                                                    placeholder: "*******",
                                                                    "aria-placeholder": "password",
                                                                    required: true,
                                                                    className: "focus:border-brand-dark focus:ring-brand-dark block w-full rounded-md shadow-sm sm:text-sm"
                                                                }),
                                                                error?.message && /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_form/* FormError */.jQ, {
                                                                    className: "text-left",
                                                                    children: error.message
                                                                })
                                                            ]
                                                        })
                                                    })
                                                })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(password_checks/* PasswordChecks */.t, {
                                    password: form.watch("password")
                                })
                            ]
                        }),
                        isTurnstileConfigured && showLogin && turnstileSiteKey && /*#__PURE__*/ (0,react_jsx_runtime.jsx)((dist_default()), {
                            sitekey: turnstileSiteKey,
                            onSuccess: (token)=>{
                                setTurnstileToken(token);
                            },
                            onError: ()=>{
                                setTurnstileToken(undefined);
                                dist/* default */.Ay.error(t("auth.signup.captcha_failed"));
                                captureFailedSignup(form.getValues("email"), form.getValues("name"));
                            }
                        }),
                        showLogin && /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_button/* Button */.$, {
                            type: "submit",
                            className: "h-10 w-full justify-center",
                            loading: form.formState.isSubmitting,
                            disabled: !form.formState.isValid,
                            children: t("auth.continue_with_email")
                        }),
                        !showLogin && /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_button/* Button */.$, {
                            type: "button",
                            onClick: ()=>{
                                setShowLogin(true);
                            },
                            className: "h-10 w-full justify-center",
                            children: t("auth.continue_with_email")
                        })
                    ]
                })
            }),
            isSSOEnabled && /*#__PURE__*/ (0,react_jsx_runtime.jsx)(sso_options/* SSOOptions */.a, {
                googleOAuthEnabled: googleOAuthEnabled,
                githubOAuthEnabled: githubOAuthEnabled,
                azureOAuthEnabled: azureOAuthEnabled,
                oidcOAuthEnabled: oidcOAuthEnabled,
                oidcDisplayName: oidcDisplayName,
                callbackUrl: callbackUrl
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(TermsPrivacyLinks, {
                termsUrl: termsUrl,
                privacyUrl: privacyUrl
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                className: "mt-9 text-center text-xs",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("span", {
                        className: "leading-5 text-slate-500",
                        children: t("auth.signup.have_an_account")
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("br", {}),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)((link_default()), {
                        href: inviteToken ? `/auth/login?callbackUrl=${callbackUrl}` : "/auth/login",
                        className: "font-semibold text-slate-600 underline hover:text-slate-700",
                        children: t("auth.signup.log_in")
                    })
                ]
            })
        ]
    });
};


/***/ }),

/***/ 959777:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B$: () => (/* binding */ ZUserPassword),
/* harmony export */   b5: () => (/* binding */ ZUserObjective),
/* harmony export */   pE: () => (/* binding */ ZUserName),
/* harmony export */   qf: () => (/* binding */ ZUser)
/* harmony export */ });
/* unused harmony exports ZUserLocale, ZUserNotificationSettings, ZUserEmail, ZUserUpdateInput, ZUserCreateInput */
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99922);

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


/***/ }),

/***/ 697423:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignupForm: () => (/* binding */ SignupForm)
/* harmony export */ });
/* harmony import */ var react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(672771);
/* harmony import */ var react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_0__);

const SignupForm = (0,react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_0__.registerClientReference)(
function() { throw new Error("Attempted to call SignupForm() from the server but SignupForm is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component."); },
"/Users/kdy1/projects/formbricks/apps/web/modules/auth/signup/components/signup-form.tsx",
"SignupForm",
);

/***/ }),

/***/ 725322:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  KH: () => (/* binding */ getIsAIEnabled),
  dZ: () => (/* binding */ getIsContactsEnabled),
  pn: () => (/* binding */ getIsMultiOrgEnabled),
  PN: () => (/* binding */ getIsOrganizationAIReady),
  LO: () => (/* binding */ getIsTwoFactorAuthEnabled),
  x: () => (/* binding */ getMultiLanguagePermission),
  Df: () => (/* binding */ getOrganizationProjectsLimit),
  tr: () => (/* binding */ getRemoveBrandingPermission),
  rQ: () => (/* binding */ getRoleManagementPermission),
  nX: () => (/* binding */ getWhiteLabelPermission)
});

// UNUSED EXPORTS: fetchLicense, getBiggerUploadFileSizePermission, getEnterpriseLicense, getIsSSOEnabled, getLicenseFeatures

// EXTERNAL MODULE: ../../node_modules/https-proxy-agent/dist/index.js
var dist = __webpack_require__(876930);
// EXTERNAL MODULE: ../../node_modules/next/dist/api/server.js
var server = __webpack_require__(995971);
// EXTERNAL MODULE: ./node_modules/node-fetch/src/index.js + 12 modules
var src = __webpack_require__(11886);
// EXTERNAL MODULE: ../../node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js
var react = __webpack_require__(645625);
// EXTERNAL MODULE: ../../packages/database/src/index.ts + 1 modules
var database_src = __webpack_require__(482859);
// EXTERNAL MODULE: ../../packages/lib/cache.ts
var cache = __webpack_require__(48165);
// EXTERNAL MODULE: ../../node_modules/next/cache.js
var next_cache = __webpack_require__(310256);
// EXTERNAL MODULE: ../../packages/lib/constants.ts
var constants = __webpack_require__(711344);
// EXTERNAL MODULE: ../../packages/lib/env.ts
var env = __webpack_require__(333258);
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
    if (constants/* E2E_TESTING */.oA) {
        const previousResult = await fetchLicenseForE2ETesting();
        return previousResult?.features?.removeBranding ?? false;
    }
    if (constants/* IS_FORMBRICKS_CLOUD */.Si && (await getEnterpriseLicense()).active) {
        return organization.billing.plan !== constants/* PROJECT_FEATURE_KEYS */.mu.FREE;
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
    if (IS_FORMBRICKS_CLOUD) return organization.billing.plan !== PROJECT_FEATURE_KEYS.FREE;
    else if (!IS_FORMBRICKS_CLOUD) return (await getEnterpriseLicense()).active;
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
    if (E2E_TESTING) {
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

/***/ 532077:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

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

/***/ 985183:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Er: () => (/* binding */ hashPassword)
/* harmony export */ });
/* unused harmony exports verifyPassword, hasOrganizationAccess, isManagerOrOwner, isOwner, hasOrganizationAuthority, hasOrganizationOwnership */
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(557038);
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _formbricks_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(482859);



const hashPassword = async (password)=>{
    const hashedPassword = await (0,bcryptjs__WEBPACK_IMPORTED_MODULE_0__.hash)(password, 12);
    return hashedPassword;
};
const verifyPassword = async (password, hashedPassword)=>{
    const isValid = await compare(password, hashedPassword);
    return isValid;
};
const hasOrganizationAccess = async (userId, organizationId)=>{
    const membership = await prisma.membership.findUnique({
        where: {
            userId_organizationId: {
                userId,
                organizationId
            }
        }
    });
    if (membership) {
        return true;
    }
    return false;
};
const isManagerOrOwner = async (userId, organizationId)=>{
    const membership = await prisma.membership.findUnique({
        where: {
            userId_organizationId: {
                userId,
                organizationId
            }
        }
    });
    if (membership && (membership.role === "owner" || membership.role === "manager")) {
        return true;
    }
    return false;
};
const isOwner = async (userId, organizationId)=>{
    const membership = await prisma.membership.findUnique({
        where: {
            userId_organizationId: {
                userId,
                organizationId
            }
        }
    });
    if (membership && membership.role === "owner") {
        return true;
    }
    return false;
};
const hasOrganizationAuthority = async (userId, organizationId)=>{
    const hasAccess = await hasOrganizationAccess(userId, organizationId);
    if (!hasAccess) {
        throw new AuthenticationError("Not authorized");
    }
    const isManagerOrOwnerAccess = await isManagerOrOwner(userId, organizationId);
    if (!isManagerOrOwnerAccess) {
        throw new AuthenticationError("You are not the manager or owner of this organization");
    }
    return true;
};
const hasOrganizationOwnership = async (userId, organizationId)=>{
    const hasAccess = await hasOrganizationAccess(userId, organizationId);
    if (!hasAccess) {
        throw new AuthenticationError("Not authorized");
    }
    const isOwnerAccess = await isOwner(userId, organizationId);
    if (!isOwnerAccess) {
        throw new AuthenticationError("You are not the owner of this organization");
    }
    return true;
};


/***/ }),

/***/ 232287:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ getIsFreshInstance),
/* harmony export */   s: () => (/* binding */ gethasNoOrganizations)
/* harmony export */ });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(896330);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(922728);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _formbricks_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(527610);
/* harmony import */ var _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(470641);
/* harmony import */ var _cache__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(794356);
/* harmony import */ var _organization_cache__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(530190);
/* harmony import */ var _user_cache__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(323798);








// Function to check if there are any users in the database
const getIsFreshInstance = (0,react__WEBPACK_IMPORTED_MODULE_1__.cache)(async ()=>(0,_cache__WEBPACK_IMPORTED_MODULE_3__/* .cache */ .P)(async ()=>{
        try {
            const userCount = await _formbricks_database__WEBPACK_IMPORTED_MODULE_2__/* .prisma */ .z.user.count();
            if (userCount === 0) return true;
            else return false;
        } catch (error) {
            if (error instanceof _prisma_client__WEBPACK_IMPORTED_MODULE_0__.Prisma.PrismaClientKnownRequestError) {
                throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_4__/* .DatabaseError */ .a$(error.message);
            }
            throw error;
        }
    }, [
        "getIsFreshInstance"
    ], {
        tags: [
            _user_cache__WEBPACK_IMPORTED_MODULE_5__/* .userCache */ .g.tag.byCount()
        ]
    })());
// Function to check if there are any organizations in the database
const gethasNoOrganizations = (0,react__WEBPACK_IMPORTED_MODULE_1__.cache)(async ()=>(0,_cache__WEBPACK_IMPORTED_MODULE_3__/* .cache */ .P)(async ()=>{
        try {
            const organizationCount = await _formbricks_database__WEBPACK_IMPORTED_MODULE_2__/* .prisma */ .z.organization.count();
            return organizationCount === 0;
        } catch (error) {
            if (error instanceof _prisma_client__WEBPACK_IMPORTED_MODULE_0__.Prisma.PrismaClientKnownRequestError) {
                throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_4__/* .DatabaseError */ .a$(error.message);
            }
            throw error;
        }
    }, [
        "gethasNoOrganizations"
    ], {
        tags: [
            _organization_cache__WEBPACK_IMPORTED_MODULE_6__/* .organizationCache */ .S.tag.byCount()
        ]
    })());


/***/ }),

/***/ 38431:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ getAccessFlags)
/* harmony export */ });
const getAccessFlags = (role)=>{
    const isOwner = role === "owner";
    const isManager = role === "manager";
    const isBilling = role === "billing";
    const isMember = role === "member";
    return {
        isManager,
        isOwner,
        isBilling,
        isMember
    };
};


/***/ })

};
;