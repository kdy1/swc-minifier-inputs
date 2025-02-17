"use strict";
exports.id = 4908;
exports.ids = [4908];
exports.modules = {

/***/ 720302:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  F0: () => (/* binding */ sendFollowUpEmail),
  lO: () => (/* binding */ sendInviteAcceptedEmail),
  JA: () => (/* binding */ sendNoLiveSurveyNotificationEmail),
  yx: () => (/* binding */ sendResponseFinishedEmail),
  d_: () => (/* binding */ sendWeeklySummaryNotificationEmail)
});

// UNUSED EXPORTS: IS_SMTP_CONFIGURED, sendEmail, sendEmailCustomizationPreviewEmail, sendEmbedSurveyPreviewEmail, sendForgotPasswordEmail, sendInviteMemberEmail, sendLinkSurveyToVerifiedEmail, sendPasswordResetNotifyEmail, sendVerificationEmail

// EXTERNAL MODULE: ../../node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-runtime.js
var react_jsx_runtime = __webpack_require__(891069);
// EXTERNAL MODULE: ./tolgee/server.tsx + 2 modules
var server = __webpack_require__(186184);
// EXTERNAL MODULE: ../../node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js
var react = __webpack_require__(922728);
// EXTERNAL MODULE: ../../node_modules/@react-email/html/dist/index.mjs
var dist = __webpack_require__(655492);
// EXTERNAL MODULE: ../../node_modules/@react-email/tailwind/dist/index.mjs
var tailwind_dist = __webpack_require__(433289);
// EXTERNAL MODULE: ../../node_modules/@react-email/body/dist/index.mjs
var body_dist = __webpack_require__(583593);
// EXTERNAL MODULE: ../../node_modules/@react-email/section/dist/index.mjs
var section_dist = __webpack_require__(752096);
// EXTERNAL MODULE: ../../node_modules/@react-email/link/dist/index.mjs
var link_dist = __webpack_require__(612781);
// EXTERNAL MODULE: ../../node_modules/@react-email/img/dist/index.mjs
var img_dist = __webpack_require__(118920);
// EXTERNAL MODULE: ../../node_modules/@react-email/container/dist/index.mjs
var container_dist = __webpack_require__(510956);
// EXTERNAL MODULE: ../../node_modules/@react-email/text/dist/index.mjs
var text_dist = __webpack_require__(619730);
// EXTERNAL MODULE: ../../packages/lib/constants.ts
var constants = __webpack_require__(836919);
;// ./modules/email/components/email-template.tsx



const fbLogoUrl = "https://s3.eu-central-1.amazonaws.com/listmonk-formbricks/Formbricks-Light-transparent.png";
const logoLink = "https://formbricks.com?utm_source=email_header&utm_medium=email";
async function email_template_EmailTemplate({ children, logoUrl, t }) {
    const isDefaultLogo = !logoUrl || logoUrl === fbLogoUrl;
    return /*#__PURE__*/ (0,react_jsx_runtime.jsx)(dist/* Html */.E, {
        children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(tailwind_dist/* Tailwind */.n, {
            children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(body_dist/* Body */.n, {
                className: "m-0 h-full w-full justify-center bg-slate-50 p-6 text-center text-base font-medium text-slate-800",
                style: {
                    fontFamily: "'Jost', 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'sans-serif'"
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(section_dist/* Section */.w, {
                        children: isDefaultLogo ? /*#__PURE__*/ (0,react_jsx_runtime.jsx)(link_dist/* Link */.N, {
                            href: logoLink,
                            target: "_blank",
                            children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(img_dist/* Img */.E, {
                                alt: "Logo",
                                className: "mx-auto w-80",
                                src: fbLogoUrl
                            })
                        }) : /*#__PURE__*/ (0,react_jsx_runtime.jsx)(img_dist/* Img */.E, {
                            alt: "Logo",
                            className: "mx-auto max-h-[100px] w-80 object-contain",
                            src: logoUrl
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(container_dist/* Container */.m, {
                        className: "mx-auto my-8 max-w-xl rounded-md bg-white p-4 text-left",
                        children: children
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(section_dist/* Section */.w, {
                        className: "mt-4 text-center text-sm",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(text_dist/* Text */.E, {
                                className: "m-0 font-normal text-slate-500",
                                children: t("emails.email_template_text_1")
                            }),
                            constants/* IMPRINT_ADDRESS */.T$ && /*#__PURE__*/ (0,react_jsx_runtime.jsx)(text_dist/* Text */.E, {
                                className: "m-0 font-normal text-slate-500 opacity-50",
                                children: constants/* IMPRINT_ADDRESS */.T$
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(text_dist/* Text */.E, {
                                className: "m-0 font-normal text-slate-500 opacity-50",
                                children: [
                                    constants/* IMPRINT_URL */.iO && /*#__PURE__*/ (0,react_jsx_runtime.jsx)(link_dist/* Link */.N, {
                                        href: constants/* IMPRINT_URL */.iO,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "text-slate-500",
                                        children: t("emails.imprint")
                                    }),
                                    constants/* IMPRINT_URL */.iO && constants/* PRIVACY_URL */.pk && "•",
                                    constants/* PRIVACY_URL */.pk && /*#__PURE__*/ (0,react_jsx_runtime.jsx)(link_dist/* Link */.N, {
                                        href: constants/* PRIVACY_URL */.pk,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "text-slate-500",
                                        children: t("emails.privacy_policy")
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
}

;// ./modules/email/emails/general/email-customization-preview-email.tsx





async function email_customization_preview_email_EmailCustomizationPreviewEmail({ userName, logoUrl }) {
    const t = await getTranslate();
    return /*#__PURE__*/ _jsx(EmailTemplate, {
        logoUrl: logoUrl,
        t: t,
        children: /*#__PURE__*/ _jsxs(Container, {
            children: [
                /*#__PURE__*/ _jsx(Heading, {
                    children: t("emails.email_customization_preview_email_heading", {
                        userName
                    })
                }),
                /*#__PURE__*/ _jsx(Text, {
                    children: t("emails.email_customization_preview_email_text")
                })
            ]
        })
    });
}
/* harmony default export */ const email_customization_preview_email = ((/* unused pure expression or super */ null && (email_customization_preview_email_EmailCustomizationPreviewEmail)));

// EXTERNAL MODULE: ../../node_modules/@react-email/render/dist/node/index.mjs + 31 modules
var node = __webpack_require__(264632);
// EXTERNAL MODULE: ../../node_modules/nodemailer/lib/nodemailer.js
var nodemailer = __webpack_require__(841966);
// EXTERNAL MODULE: ../../packages/lib/organization/service.ts
var service = __webpack_require__(353687);
// EXTERNAL MODULE: ../../packages/types/errors.ts
var errors = __webpack_require__(470641);
// EXTERNAL MODULE: ../../node_modules/@react-email/button/dist/index.mjs
var button_dist = __webpack_require__(415765);
;// ./modules/email/components/email-button.tsx



function email_button_EmailButton({ label, href }) {
    return /*#__PURE__*/ (0,react_jsx_runtime.jsx)(button_dist/* Button */.$, {
        className: "rounded-md bg-black px-6 py-3 text-white",
        href: href,
        children: label
    });
}
/* harmony default export */ const email_button = ((/* unused pure expression or super */ null && (email_button_EmailButton)));

;// ./modules/email/components/email-footer.tsx



function email_footer_EmailFooter({ t }) {
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(text_dist/* Text */.E, {
        children: [
            t("emails.email_footer_text_1"),
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("br", {}),
            t("emails.email_footer_text_2")
        ]
    });
}
/* harmony default export */ const email_footer = ((/* unused pure expression or super */ null && (email_footer_EmailFooter)));

;// ./modules/email/emails/auth/forgot-password-email.tsx







async function forgot_password_email_ForgotPasswordEmail({ verifyLink }) {
    const t = await getTranslate();
    return /*#__PURE__*/ _jsx(EmailTemplate, {
        t: t,
        children: /*#__PURE__*/ _jsxs(Container, {
            children: [
                /*#__PURE__*/ _jsx(Heading, {
                    children: t("emails.forgot_password_email_heading")
                }),
                /*#__PURE__*/ _jsx(Text, {
                    children: t("emails.forgot_password_email_text")
                }),
                /*#__PURE__*/ _jsx(EmailButton, {
                    href: verifyLink,
                    label: t("emails.forgot_password_email_change_password")
                }),
                /*#__PURE__*/ _jsx(Text, {
                    className: "font-bold",
                    children: t("emails.forgot_password_email_link_valid_for_24_hours")
                }),
                /*#__PURE__*/ _jsx(Text, {
                    className: "mb-0",
                    children: t("emails.forgot_password_email_did_not_request")
                }),
                /*#__PURE__*/ _jsx(EmailFooter, {
                    t: t
                })
            ]
        })
    });
}
/* harmony default export */ const forgot_password_email = ((/* unused pure expression or super */ null && (forgot_password_email_ForgotPasswordEmail)));

;// ./modules/email/emails/auth/password-reset-notify-email.tsx






async function password_reset_notify_email_PasswordResetNotifyEmail() {
    const t = await getTranslate();
    return /*#__PURE__*/ _jsx(EmailTemplate, {
        t: t,
        children: /*#__PURE__*/ _jsxs(Container, {
            children: [
                /*#__PURE__*/ _jsx(Heading, {
                    children: t("emails.password_changed_email_heading")
                }),
                /*#__PURE__*/ _jsx(Text, {
                    children: t("emails.password_changed_email_text")
                }),
                /*#__PURE__*/ _jsx(EmailFooter, {
                    t: t
                })
            ]
        })
    });
}
/* harmony default export */ const password_reset_notify_email = ((/* unused pure expression or super */ null && (password_reset_notify_email_PasswordResetNotifyEmail)));

;// ./modules/email/emails/auth/verification-email.tsx







async function verification_email_VerificationEmail({ verifyLink, verificationRequestLink }) {
    const t = await getTranslate();
    return /*#__PURE__*/ _jsx(EmailTemplate, {
        t: t,
        children: /*#__PURE__*/ _jsxs(Container, {
            children: [
                /*#__PURE__*/ _jsx(Heading, {
                    children: t("emails.verification_email_heading")
                }),
                /*#__PURE__*/ _jsx(Text, {
                    children: t("emails.verification_email_text")
                }),
                /*#__PURE__*/ _jsx(EmailButton, {
                    href: verifyLink,
                    label: t("emails.verification_email_verify_email")
                }),
                /*#__PURE__*/ _jsx(Text, {
                    children: t("emails.verification_email_click_on_this_link")
                }),
                /*#__PURE__*/ _jsx(Link, {
                    className: "break-all text-black",
                    href: verifyLink,
                    children: verifyLink
                }),
                /*#__PURE__*/ _jsx(Text, {
                    className: "font-bold",
                    children: t("emails.verification_email_link_valid_for_24_hours")
                }),
                /*#__PURE__*/ _jsxs(Text, {
                    children: [
                        t("emails.verification_email_if_expired_request_new_token"),
                        /*#__PURE__*/ _jsx(Link, {
                            className: "text-black underline",
                            href: verificationRequestLink,
                            children: t("emails.verification_email_request_new_verification")
                        })
                    ]
                }),
                /*#__PURE__*/ _jsx(EmailFooter, {
                    t: t
                })
            ]
        })
    });
}
/* harmony default export */ const verification_email = ((/* unused pure expression or super */ null && (verification_email_VerificationEmail)));

;// ./modules/email/emails/invite/invite-accepted-email.tsx






async function InviteAcceptedEmail({ inviterName, inviteeName }) {
    const t = await (0,server/* getTranslate */.r)();
    return /*#__PURE__*/ (0,react_jsx_runtime.jsx)(email_template_EmailTemplate, {
        t: t,
        children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(container_dist/* Container */.m, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(text_dist/* Text */.E, {
                    children: t("emails.invite_accepted_email_heading", {
                        inviterName
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(text_dist/* Text */.E, {
                    children: [
                        t("emails.invite_accepted_email_text_par1", {
                            inviteeName
                        }),
                        " ",
                        inviteeName,
                        " ",
                        t("emails.invite_accepted_email_text_par2")
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(email_footer_EmailFooter, {
                    t: t
                })
            ]
        })
    });
}
/* harmony default export */ const invite_accepted_email = ((/* unused pure expression or super */ null && (InviteAcceptedEmail)));

;// ./modules/email/emails/invite/invite-email.tsx







async function invite_email_InviteEmail({ inviteeName, inviterName, verifyLink }) {
    const t = await getTranslate();
    return /*#__PURE__*/ _jsx(EmailTemplate, {
        t: t,
        children: /*#__PURE__*/ _jsxs(Container, {
            children: [
                /*#__PURE__*/ _jsx(Text, {
                    children: t("emails.invite_email_heading", {
                        inviteeName
                    })
                }),
                /*#__PURE__*/ _jsxs(Text, {
                    children: [
                        t("emails.invite_email_text_par1", {
                            inviterName
                        }),
                        " ",
                        inviterName,
                        " ",
                        t("emails.invite_email_text_par2")
                    ]
                }),
                /*#__PURE__*/ _jsx(EmailButton, {
                    href: verifyLink,
                    label: t("emails.invite_email_button_label")
                }),
                /*#__PURE__*/ _jsx(EmailFooter, {
                    t: t
                })
            ]
        })
    });
}
/* harmony default export */ const invite_email = ((/* unused pure expression or super */ null && (invite_email_InviteEmail)));

;// ./modules/email/emails/invite/onboarding-invite-email.tsx






async function onboarding_invite_email_OnboardingInviteEmail({ inviteMessage, inviterName, verifyLink, inviteeName }) {
    const t = await getTranslate();
    return /*#__PURE__*/ _jsx(EmailTemplate, {
        t: t,
        children: /*#__PURE__*/ _jsxs(Container, {
            children: [
                /*#__PURE__*/ _jsx(Heading, {
                    children: t("emails.onboarding_invite_email_heading", {
                        inviteeName
                    })
                }),
                /*#__PURE__*/ _jsx(Text, {
                    children: inviteMessage
                }),
                /*#__PURE__*/ _jsx(Text, {
                    className: "font-medium",
                    children: t("emails.onboarding_invite_email_get_started_in_minutes")
                }),
                /*#__PURE__*/ _jsxs("ol", {
                    children: [
                        /*#__PURE__*/ _jsx("li", {
                            children: t("emails.onboarding_invite_email_create_account", {
                                inviterName
                            })
                        }),
                        /*#__PURE__*/ _jsx("li", {
                            children: t("emails.onboarding_invite_email_connect_formbricks")
                        }),
                        /*#__PURE__*/ _jsxs("li", {
                            children: [
                                t("emails.onboarding_invite_email_done"),
                                " ✅"
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ _jsx(EmailButton, {
                    href: verifyLink,
                    label: t("emails.onboarding_invite_email_button_label", {
                        inviterName
                    })
                }),
                /*#__PURE__*/ _jsx(EmailFooter, {
                    t: t
                })
            ]
        })
    });
}
/* harmony default export */ const onboarding_invite_email = ((/* unused pure expression or super */ null && (onboarding_invite_email_OnboardingInviteEmail)));

;// ./modules/email/emails/survey/embed-survey-preview-email.tsx





async function embed_survey_preview_email_EmbedSurveyPreviewEmail({ html, environmentId, logoUrl }) {
    const t = await getTranslate();
    return /*#__PURE__*/ _jsx(EmailTemplate, {
        logoUrl: logoUrl,
        t: t,
        children: /*#__PURE__*/ _jsxs(Container, {
            children: [
                /*#__PURE__*/ _jsx(Heading, {
                    children: t("emails.embed_survey_preview_email_heading")
                }),
                /*#__PURE__*/ _jsx(Text, {
                    children: t("emails.embed_survey_preview_email_text")
                }),
                /*#__PURE__*/ _jsxs(Text, {
                    className: "text-sm",
                    children: [
                        /*#__PURE__*/ _jsx("b", {
                            children: t("emails.embed_survey_preview_email_didnt_request")
                        }),
                        " ",
                        t("emails.embed_survey_preview_email_fight_spam")
                    ]
                }),
                /*#__PURE__*/ _jsx("div", {
                    dangerouslySetInnerHTML: {
                        __html: html
                    }
                }),
                /*#__PURE__*/ _jsxs(Text, {
                    className: "text-center text-sm text-slate-700",
                    children: [
                        t("emails.embed_survey_preview_email_environment_id"),
                        ": ",
                        environmentId
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const embed_survey_preview_email = ((/* unused pure expression or super */ null && (embed_survey_preview_email_EmbedSurveyPreviewEmail)));

// EXTERNAL MODULE: ../../node_modules/isomorphic-dompurify/index.js
var isomorphic_dompurify = __webpack_require__(482167);
var isomorphic_dompurify_default = /*#__PURE__*/__webpack_require__.n(isomorphic_dompurify);
;// ./modules/email/emails/survey/follow-up.tsx





async function FollowUpEmail({ html, logoUrl }) {
    const t = await (0,server/* getTranslate */.r)();
    return /*#__PURE__*/ (0,react_jsx_runtime.jsx)(dist/* Html */.E, {
        children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(tailwind_dist/* Tailwind */.n, {
            children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(body_dist/* Body */.n, {
                className: "m-0 h-full w-full justify-center bg-slate-50 p-6 text-center text-base font-medium text-slate-800",
                style: {
                    fontFamily: "'Jost', 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'sans-serif'"
                },
                children: [
                    logoUrl && /*#__PURE__*/ (0,react_jsx_runtime.jsx)(section_dist/* Section */.w, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(img_dist/* Img */.E, {
                            alt: "Logo",
                            className: "mx-auto max-h-[100px] w-80 object-contain",
                            src: logoUrl
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(container_dist/* Container */.m, {
                        className: "mx-auto my-8 max-w-xl rounded-md bg-white p-4 text-left",
                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                            dangerouslySetInnerHTML: {
                                __html: isomorphic_dompurify_default().sanitize(html, {
                                    ALLOWED_TAGS: [
                                        "p",
                                        "span",
                                        "b",
                                        "strong",
                                        "i",
                                        "em",
                                        "a",
                                        "br"
                                    ],
                                    ALLOWED_ATTR: [
                                        "href",
                                        "rel",
                                        "dir",
                                        "class"
                                    ],
                                    ALLOWED_URI_REGEXP: /^https?:\/\//,
                                    ADD_ATTR: [
                                        "target"
                                    ]
                                })
                            }
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(section_dist/* Section */.w, {
                        className: "mt-4 text-center text-sm",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(text_dist/* Text */.E, {
                                className: "m-0 font-normal text-slate-500",
                                children: t("emails.powered_by_formbricks")
                            }),
                            constants/* IMPRINT_ADDRESS */.T$ && /*#__PURE__*/ (0,react_jsx_runtime.jsx)(text_dist/* Text */.E, {
                                className: "m-0 font-normal text-slate-500 opacity-50",
                                children: constants/* IMPRINT_ADDRESS */.T$
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(text_dist/* Text */.E, {
                                className: "m-0 font-normal text-slate-500 opacity-50",
                                children: [
                                    constants/* IMPRINT_URL */.iO && /*#__PURE__*/ (0,react_jsx_runtime.jsx)(link_dist/* Link */.N, {
                                        href: constants/* IMPRINT_URL */.iO,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "text-slate-500",
                                        children: t("emails.imprint")
                                    }),
                                    constants/* IMPRINT_URL */.iO && constants/* PRIVACY_URL */.pk && "•",
                                    constants/* PRIVACY_URL */.pk && /*#__PURE__*/ (0,react_jsx_runtime.jsx)(link_dist/* Link */.N, {
                                        href: constants/* PRIVACY_URL */.pk,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "text-slate-500",
                                        children: t("emails.privacy_policy")
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
}

;// ./modules/email/emails/survey/link-survey-email.tsx







async function link_survey_email_LinkSurveyEmail({ surveyName, surveyLink, logoUrl }) {
    const t = await getTranslate();
    return /*#__PURE__*/ _jsx(EmailTemplate, {
        logoUrl: logoUrl,
        t: t,
        children: /*#__PURE__*/ _jsxs(Container, {
            children: [
                /*#__PURE__*/ _jsx(Heading, {
                    children: t("emails.verification_email_hey")
                }),
                /*#__PURE__*/ _jsx(Text, {
                    children: t("emails.verification_email_thanks")
                }),
                /*#__PURE__*/ _jsx(Text, {
                    children: t("emails.verification_email_to_fill_survey")
                }),
                /*#__PURE__*/ _jsx(EmailButton, {
                    href: surveyLink,
                    label: t("emails.verification_email_take_survey")
                }),
                /*#__PURE__*/ _jsxs(Text, {
                    className: "text-xs text-slate-400",
                    children: [
                        t("emails.verification_email_survey_name"),
                        ": ",
                        surveyName
                    ]
                }),
                /*#__PURE__*/ _jsx(EmailFooter, {
                    t: t
                })
            ]
        })
    });
}
/* harmony default export */ const link_survey_email = ((/* unused pure expression or super */ null && (link_survey_email_LinkSurveyEmail)));

// EXTERNAL MODULE: ../../node_modules/@react-email/row/dist/index.mjs
var row_dist = __webpack_require__(791807);
// EXTERNAL MODULE: ../../node_modules/@react-email/column/dist/index.mjs
var column_dist = __webpack_require__(790203);
// EXTERNAL MODULE: ../../node_modules/@react-email/hr/dist/index.mjs
var hr_dist = __webpack_require__(878371);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/file-digit.js
var file_digit = __webpack_require__(197098);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/file-type-2.js
var file_type_2 = __webpack_require__(298940);
// EXTERNAL MODULE: ../../packages/lib/responses.ts
var responses = __webpack_require__(328730);
;// ../../packages/lib/storage/utils.ts
const getOriginalFileNameFromUrl = (fileURL)=>{
    try {
        const fileNameFromURL = fileURL.startsWith("/storage/") ? fileURL.split("/").pop() : new URL(fileURL).pathname.split("/").pop();
        const fileExt = fileNameFromURL?.split(".").pop() ?? "";
        const originalFileName = fileNameFromURL?.split("--fid--")[0] ?? "";
        const fileId = fileNameFromURL?.split("--fid--")[1] ?? "";
        if (!fileId) {
            const fileName = originalFileName ? decodeURIComponent(originalFileName || "") : "";
            return fileName;
        }
        const fileName = originalFileName ? decodeURIComponent(`${originalFileName}.${fileExt}` || "") : "";
        return fileName;
    } catch (error) {
        console.error(`Error parsing file URL: ${error}`);
    }
};
const getFileNameWithIdFromUrl = (fileURL)=>{
    try {
        const fileNameFromURL = fileURL.startsWith("/storage/") ? fileURL.split("/").pop() : new URL(fileURL).pathname.split("/").pop();
        return fileNameFromURL ? decodeURIComponent(fileNameFromURL || "") : "";
    } catch (error) {
        console.error("Error parsing file URL:", error);
    }
};

// EXTERNAL MODULE: ../../packages/types/surveys/types.ts + 2 modules
var types = __webpack_require__(875863);
;// ./modules/email/emails/survey/response-finished-email.tsx









const renderEmailResponseValue = async (response, questionType)=>{
    switch(questionType){
        case types/* TSurveyQuestionTypeEnum */.wn.FileUpload:
            return /*#__PURE__*/ (0,react_jsx_runtime.jsx)(container_dist/* Container */.m, {
                children: Array.isArray(response) && response.map((responseItem)=>/*#__PURE__*/ (0,react_jsx_runtime.jsxs)(link_dist/* Link */.N, {
                        className: "mt-2 flex flex-col items-center justify-center rounded-lg bg-slate-200 p-2 text-black shadow-sm",
                        href: responseItem,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(FileIcon, {}),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(text_dist/* Text */.E, {
                                className: "mx-auto mb-0 truncate",
                                children: getOriginalFileNameFromUrl(responseItem)
                            })
                        ]
                    }, responseItem))
            });
        case types/* TSurveyQuestionTypeEnum */.wn.PictureSelection:
            return /*#__PURE__*/ (0,react_jsx_runtime.jsx)(container_dist/* Container */.m, {
                children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(row_dist/* Row */.f, {
                    children: Array.isArray(response) && response.map((responseItem)=>/*#__PURE__*/ (0,react_jsx_runtime.jsx)(column_dist/* Column */.V, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(img_dist/* Img */.E, {
                                alt: responseItem.split("/").pop(),
                                className: "m-2 h-28",
                                src: responseItem
                            })
                        }, responseItem))
                })
            });
        case types/* TSurveyQuestionTypeEnum */.wn.Ranking:
            return /*#__PURE__*/ (0,react_jsx_runtime.jsx)(container_dist/* Container */.m, {
                children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(row_dist/* Row */.f, {
                    className: "my-1 font-semibold text-slate-700",
                    dir: "auto",
                    children: Array.isArray(response) && response.map((item, index)=>item && /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(row_dist/* Row */.f, {
                            className: "mb-1 flex items-center",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(column_dist/* Column */.V, {
                                    className: "w-6 text-slate-400",
                                    children: [
                                        "#",
                                        index + 1
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(column_dist/* Column */.V, {
                                    className: "rounded bg-slate-100 px-2 py-1",
                                    children: item
                                })
                            ]
                        }, item))
                })
            });
        default:
            return /*#__PURE__*/ (0,react_jsx_runtime.jsx)(text_dist/* Text */.E, {
                className: "mt-0 whitespace-pre-wrap break-words font-bold",
                children: response
            });
    }
};
async function ResponseFinishedEmail({ survey, responseCount, response, WEBAPP_URL, environmentId, organization }) {
    const questions = (0,responses/* getQuestionResponseMapping */.G$)(survey, response);
    const t = await (0,server/* getTranslate */.r)();
    return /*#__PURE__*/ (0,react_jsx_runtime.jsx)(email_template_EmailTemplate, {
        t: t,
        children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(container_dist/* Container */.m, {
            children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(row_dist/* Row */.f, {
                children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(column_dist/* Column */.V, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(text_dist/* Text */.E, {
                            className: "mb-4 text-3xl font-bold",
                            children: [
                                " ",
                                t("emails.survey_response_finished_email_hey")
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)(text_dist/* Text */.E, {
                            className: "mb-4",
                            children: t("emails.survey_response_finished_email_congrats", {
                                surveyName: survey.name
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)(hr_dist.Hr, {}),
                        questions.map((question)=>{
                            if (!question.response) return;
                            return /*#__PURE__*/ (0,react_jsx_runtime.jsx)(row_dist/* Row */.f, {
                                children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(column_dist/* Column */.V, {
                                    className: "w-full",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)(text_dist/* Text */.E, {
                                            className: "mb-2 font-medium",
                                            children: question.question
                                        }),
                                        renderEmailResponseValue(question.response, question.type)
                                    ]
                                })
                            }, question.question);
                        }),
                        survey.variables.map((variable)=>{
                            const variableResponse = response.variables[variable.id];
                            if (variableResponse && [
                                "number",
                                "string"
                            ].includes(typeof variable)) {
                                return /*#__PURE__*/ (0,react_jsx_runtime.jsx)(row_dist/* Row */.f, {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(column_dist/* Column */.V, {
                                        className: "w-full",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(text_dist/* Text */.E, {
                                                className: "mb-2 flex items-center gap-2 font-medium",
                                                children: [
                                                    variable.type === "number" ? /*#__PURE__*/ (0,react_jsx_runtime.jsx)(file_digit/* default */.A, {
                                                        className: "h-4 w-4"
                                                    }) : /*#__PURE__*/ (0,react_jsx_runtime.jsx)(file_type_2/* default */.A, {
                                                        className: "h-4 w-4"
                                                    }),
                                                    variable.name
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(text_dist/* Text */.E, {
                                                className: "mt-0 whitespace-pre-wrap break-words font-bold",
                                                children: variableResponse
                                            })
                                        ]
                                    })
                                }, variable.id);
                            }
                            return null;
                        }),
                        survey.hiddenFields.fieldIds?.map((hiddenFieldId)=>{
                            const hiddenFieldResponse = response.data[hiddenFieldId];
                            if (hiddenFieldResponse && typeof hiddenFieldResponse === "string") {
                                return /*#__PURE__*/ (0,react_jsx_runtime.jsx)(row_dist/* Row */.f, {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(column_dist/* Column */.V, {
                                        className: "w-full",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(text_dist/* Text */.E, {
                                                className: "mb-2 flex items-center gap-2 font-medium",
                                                children: [
                                                    hiddenFieldId,
                                                    " ",
                                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(EyeOffIcon, {})
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(text_dist/* Text */.E, {
                                                className: "mt-0 whitespace-pre-wrap break-words font-bold",
                                                children: hiddenFieldResponse
                                            })
                                        ]
                                    })
                                }, hiddenFieldId);
                            }
                            return null;
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)(email_button_EmailButton, {
                            href: `${WEBAPP_URL}/environments/${environmentId}/surveys/${survey.id}/responses?utm_source=email_notification&utm_medium=email&utm_content=view_responses_CTA`,
                            label: responseCount > 1 ? t("emails.survey_response_finished_email_view_more_responses", {
                                responseCount: String(responseCount - 1)
                            }) : t("emails.survey_response_finished_email_view_survey_summary")
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)(hr_dist.Hr, {}),
                        /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(section_dist/* Section */.w, {
                            className: "mt-4 text-center text-sm",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(text_dist/* Text */.E, {
                                    className: "font-bold",
                                    children: t("emails.survey_response_finished_email_dont_want_notifications")
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(text_dist/* Text */.E, {
                                    className: "mb-0",
                                    children: [
                                        t("emails.survey_response_finished_email_turn_off_notifications"),
                                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)(link_dist/* Link */.N, {
                                            className: "text-black underline",
                                            href: `${WEBAPP_URL}/environments/${environmentId}/settings/notifications?type=alert&elementId=${survey.id}`,
                                            children: t("emails.survey_response_finished_email_this_form")
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(text_dist/* Text */.E, {
                                    className: "mt-0",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(link_dist/* Link */.N, {
                                        className: "text-black underline",
                                        href: `${WEBAPP_URL}/environments/${environmentId}/settings/notifications?type=unsubscribedOrganizationIds&elementId=${organization.id}`,
                                        children: t("emails.survey_response_finished_email_turn_off_notifications_for_all_new_forms")
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
}
function FileIcon() {
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("svg", {
        className: "lucide lucide-file",
        fill: "none",
        height: "24",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        viewBox: "0 0 24 24",
        width: "24",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("path", {
                d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("path", {
                d: "M14 2v4a2 2 0 0 0 2 2h4"
            })
        ]
    });
}
function EyeOffIcon() {
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: "lucide lucide-eye-off h-4 w-4 rounded-lg bg-slate-200 p-1",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("path", {
                d: "M9.88 9.88a3 3 0 1 0 4.24 4.24"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("path", {
                d: "M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("path", {
                d: "M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("line", {
                x1: "2",
                x2: "22",
                y1: "2",
                y2: "22"
            })
        ]
    });
}

;// ./modules/email/emails/weekly-summary/notification-footer.tsx





async function NotificationFooter({ environmentId }) {
    const t = await (0,server/* getTranslate */.r)();
    return /*#__PURE__*/ (0,react_jsx_runtime.jsx)(tailwind_dist/* Tailwind */.n, {
        children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(container_dist/* Container */.m, {
            className: "w-full",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(text_dist/* Text */.E, {
                    className: "mb-0 pt-4 font-medium",
                    children: t("emails.notification_footer_all_the_best")
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(text_dist/* Text */.E, {
                    className: "mt-0",
                    children: t("emails.notification_footer_the_formbricks_team")
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(container_dist/* Container */.m, {
                    className: "mt-0 w-full rounded-md bg-slate-100 px-4 text-center text-xs leading-5",
                    style: {
                        fontStyle: "italic"
                    },
                    children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(text_dist/* Text */.E, {
                        children: [
                            t("emails.notification_footer_to_halt_weekly_updates"),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(link_dist/* Link */.N, {
                                className: "text-black underline",
                                href: `${constants/* WEBAPP_URL */.YW}/environments/${environmentId}/settings/notifications`,
                                children: t("emails.notification_footer_please_turn_them_off")
                            }),
                            " ",
                            t("emails.notification_footer_in_your_settings"),
                            " \uD83D\uDE4F"
                        ]
                    })
                })
            ]
        })
    });
}

;// ./modules/email/emails/weekly-summary/create-reminder-notification-body.tsx







async function CreateReminderNotificationBody({ notificationData }) {
    const t = await (0,server/* getTranslate */.r)();
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(container_dist/* Container */.m, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(text_dist/* Text */.E, {
                children: t("emails.weekly_summary_create_reminder_notification_body_text", {
                    projectName: notificationData.projectName
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(text_dist/* Text */.E, {
                className: "pt-4 font-bold",
                children: t("emails.weekly_summary_create_reminder_notification_body_dont_let_a_week_pass")
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(email_button_EmailButton, {
                href: `${constants/* WEBAPP_URL */.YW}/environments/${notificationData.environmentId}/surveys?utm_source=weekly&utm_medium=email&utm_content=SetupANewSurveyCTA`,
                label: t("emails.weekly_summary_create_reminder_notification_body_setup_a_new_survey")
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(text_dist/* Text */.E, {
                className: "pt-4",
                children: [
                    t("emails.weekly_summary_create_reminder_notification_body_need_help"),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("a", {
                        href: "https://cal.com/johannes/15",
                        children: t("emails.weekly_summary_create_reminder_notification_body_cal_slot")
                    }),
                    t("emails.weekly_summary_create_reminder_notification_body_reply_email")
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(NotificationFooter, {
                environmentId: notificationData.environmentId
            })
        ]
    });
}

// EXTERNAL MODULE: ../../node_modules/@react-email/heading/dist/index.mjs
var heading_dist = __webpack_require__(361705);
;// ./modules/email/emails/weekly-summary/notification-header.tsx




async function NotificationHeader({ projectName, startDate, endDate, startYear, endYear }) {
    const t = await (0,server/* getTranslate */.r)();
    const getNotificationHeaderimePeriod = ()=>{
        if (startYear === endYear) {
            return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(text_dist/* Text */.E, {
                className: "m-0 text-right",
                children: [
                    startDate,
                    " - ",
                    endDate,
                    " ",
                    endYear
                ]
            });
        }
        return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(text_dist/* Text */.E, {
            className: "m-0 text-right",
            children: [
                startDate,
                " ",
                startYear,
                " - ",
                endDate,
                " ",
                endYear
            ]
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime.jsx)(container_dist/* Container */.m, {
        children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
            className: "block px-0 py-4",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                    className: "float-left mt-2",
                    children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(heading_dist/* Heading */.D, {
                        className: "m-0",
                        children: t("emails.notification_header_hey")
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                    className: "float-right",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(text_dist/* Text */.E, {
                            className: "m-0 text-right font-semibold",
                            children: [
                                t("emails.notification_header_weekly_report_for"),
                                " ",
                                projectName
                            ]
                        }),
                        getNotificationHeaderimePeriod()
                    ]
                })
            ]
        })
    });
}

;// ./modules/email/emails/weekly-summary/no-live-survey-notification-email.tsx




function NoLiveSurveyNotificationEmail({ notificationData, startDate, endDate, startYear, endYear }) {
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(NotificationHeader, {
                endDate: endDate,
                endYear: endYear,
                projectName: notificationData.projectName,
                startDate: startDate,
                startYear: startYear
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(CreateReminderNotificationBody, {
                notificationData: notificationData
            })
        ]
    });
}

;// ./modules/email/emails/weekly-summary/live-survey-notification.tsx







const getButtonLabel = (count, t)=>{
    if (count === 1) {
        return t("emails.live_survey_notification_view_response");
    }
    return t("emails.live_survey_notification_view_more_responses", {
        responseCount: count > 2 ? (count - 1).toString() : "1"
    });
};
const convertSurveyStatus = (status, t)=>{
    const statusMap = {
        inProgress: t("emails.live_survey_notification_in_progress"),
        paused: t("emails.live_survey_notification_paused"),
        completed: t("emails.live_survey_notification_completed"),
        draft: t("emails.live_survey_notification_draft"),
        scheduled: t("emails.live_survey_notification_scheduled")
    };
    return statusMap[status] || status;
};
async function LiveSurveyNotification({ environmentId, surveys }) {
    const t = await (0,server/* getTranslate */.r)();
    const createSurveyFields = (surveyResponses)=>{
        if (surveyResponses.length === 0) {
            return /*#__PURE__*/ (0,react_jsx_runtime.jsx)(container_dist/* Container */.m, {
                className: "mt-4",
                children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(text_dist/* Text */.E, {
                    className: "m-0 font-bold",
                    children: t("emails.live_survey_notification_no_responses_yet")
                })
            });
        }
        const surveyFields = [];
        const responseCount = surveyResponses.length;
        surveyResponses.forEach((surveyResponse, index)=>{
            if (!surveyResponse.responseValue) {
                return;
            }
            surveyFields.push(/*#__PURE__*/ (0,react_jsx_runtime.jsxs)(container_dist/* Container */.m, {
                className: "mt-4",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(text_dist/* Text */.E, {
                        className: "m-0",
                        children: surveyResponse.headline
                    }),
                    renderEmailResponseValue(surveyResponse.responseValue, surveyResponse.questionType)
                ]
            }, `${index.toString()}-${surveyResponse.headline}`));
            // Add <hr/> only when there are 2 or more responses to display, and it's not the last response
            if (responseCount >= 2 && index < responseCount - 1) {
                surveyFields.push(/*#__PURE__*/ (0,react_jsx_runtime.jsx)(hr_dist.Hr, {}, `hr-${index.toString()}`));
            }
        });
        return surveyFields;
    };
    if (!surveys.length) return [];
    return surveys.map((survey)=>{
        const displayStatus = convertSurveyStatus(survey.status, t);
        const isInProgress = displayStatus === "In Progress";
        const noResponseLastWeek = isInProgress && survey.responses.length === 0;
        return /*#__PURE__*/ (0,react_jsx_runtime.jsx)(tailwind_dist/* Tailwind */.n, {
            children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(container_dist/* Container */.m, {
                className: "mt-12",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(text_dist/* Text */.E, {
                        className: "mb-0 inline",
                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(link_dist/* Link */.N, {
                            className: "text-xl text-black underline",
                            href: `${constants/* WEBAPP_URL */.YW}/environments/${environmentId}/surveys/${survey.id}/responses?utm_source=weekly&utm_medium=email&utm_content=ViewResponsesCTA`,
                            children: survey.name
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(text_dist/* Text */.E, {
                        className: `ml-2 inline ${isInProgress ? "bg-green-400 text-slate-100" : "bg-slate-300 text-blue-800"} rounded-full px-2 py-1 text-sm`,
                        children: displayStatus
                    }),
                    noResponseLastWeek ? /*#__PURE__*/ (0,react_jsx_runtime.jsx)(text_dist/* Text */.E, {
                        children: t("emails.live_survey_notification_no_new_response")
                    }) : createSurveyFields(survey.responses),
                    survey.responseCount > 0 && /*#__PURE__*/ (0,react_jsx_runtime.jsx)(container_dist/* Container */.m, {
                        className: "mt-4 block",
                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(email_button_EmailButton, {
                            href: `${constants/* WEBAPP_URL */.YW}/environments/${environmentId}/surveys/${survey.id}/responses?utm_source=weekly&utm_medium=email&utm_content=ViewResponsesCTA`,
                            label: noResponseLastWeek ? t("emails.live_survey_notification_view_previous_responses") : getButtonLabel(survey.responseCount, t)
                        })
                    })
                ]
            })
        }, survey.id);
    });
}

;// ./modules/email/emails/weekly-summary/notification-insight.tsx




async function NotificationInsight({ insights }) {
    const t = await (0,server/* getTranslate */.r)();
    return /*#__PURE__*/ (0,react_jsx_runtime.jsx)(container_dist/* Container */.m, {
        children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(section_dist/* Section */.w, {
            className: "my-4 rounded-md bg-slate-100",
            children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(row_dist/* Row */.f, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(column_dist/* Column */.V, {
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(text_dist/* Text */.E, {
                                className: "text-sm",
                                children: t("emails.notification_insight_surveys")
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(text_dist/* Text */.E, {
                                className: "text-lg font-bold",
                                children: insights.numLiveSurvey
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(column_dist/* Column */.V, {
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(text_dist/* Text */.E, {
                                className: "text-sm",
                                children: t("emails.notification_insight_displays")
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(text_dist/* Text */.E, {
                                className: "text-lg font-bold",
                                children: insights.totalDisplays
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(column_dist/* Column */.V, {
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(text_dist/* Text */.E, {
                                className: "text-sm",
                                children: t("emails.notification_insight_responses")
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(text_dist/* Text */.E, {
                                className: "text-lg font-bold",
                                children: insights.totalResponses
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(column_dist/* Column */.V, {
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(text_dist/* Text */.E, {
                                className: "text-sm",
                                children: t("emails.notification_insight_completed")
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(text_dist/* Text */.E, {
                                className: "text-lg font-bold",
                                children: insights.totalCompletedResponses
                            })
                        ]
                    }),
                    insights.totalDisplays !== 0 ? /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(column_dist/* Column */.V, {
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(text_dist/* Text */.E, {
                                className: "text-sm",
                                children: t("emails.notification_insight_completion_rate")
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(text_dist/* Text */.E, {
                                className: "text-lg font-bold",
                                children: [
                                    Math.round(insights.completionRate),
                                    "%"
                                ]
                            })
                        ]
                    }) : ""
                ]
            })
        })
    });
}

;// ./modules/email/emails/weekly-summary/weekly-summary-notification-email.tsx







function WeeklySummaryNotificationEmail({ notificationData, startDate, endDate, startYear, endYear, t }) {
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(email_template_EmailTemplate, {
        t: t,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(NotificationHeader, {
                endDate: endDate,
                endYear: endYear,
                projectName: notificationData.projectName,
                startDate: startDate,
                startYear: startYear
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(NotificationInsight, {
                insights: notificationData.insights
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(LiveSurveyNotification, {
                environmentId: notificationData.environmentId,
                surveys: notificationData.surveys
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(NotificationFooter, {
                environmentId: notificationData.environmentId
            })
        ]
    });
}

;// ./modules/email/index.tsx




















const IS_SMTP_CONFIGURED = Boolean(constants/* SMTP_HOST */.SO && constants/* SMTP_PORT */.z5);
const sendEmail = async (emailData)=>{
    try {
        const transporter = (0,nodemailer/* createTransport */.oO)({
            host: constants/* SMTP_HOST */.SO,
            port: constants/* SMTP_PORT */.z5,
            secure: constants/* SMTP_SECURE_ENABLED */.Pd,
            ...constants/* SMTP_AUTHENTICATED */.n1 ? {
                auth: {
                    type: "LOGIN",
                    user: constants/* SMTP_USER */.Bk,
                    pass: constants/* SMTP_PASSWORD */.RN
                }
            } : {},
            tls: {
                rejectUnauthorized: constants/* SMTP_REJECT_UNAUTHORIZED_TLS */.ss
            },
            logger: constants/* DEBUG */.Oi,
            debug: constants/* DEBUG */.Oi
        });
        const emailDefaults = {
            from: `Formbricks <${constants/* MAIL_FROM */.T4 ?? "noreply@formbricks.com"}>`
        };
        await transporter.sendMail({
            ...emailDefaults,
            ...emailData
        });
        return true;
    } catch (error) {
        throw new errors/* InvalidInputError */.oC("Incorrect SMTP credentials");
    }
};
const sendVerificationEmail = async ({ id, email })=>{
    try {
        const t = await getTranslate();
        const token = createToken(id, email, {
            expiresIn: "1d"
        });
        const verifyLink = `${WEBAPP_URL}/auth/verify?token=${encodeURIComponent(token)}`;
        const verificationRequestLink = `${WEBAPP_URL}/auth/verification-requested?token=${encodeURIComponent(token)}`;
        const html = await render(await VerificationEmail({
            verificationRequestLink,
            verifyLink
        }));
        return await sendEmail({
            to: email,
            subject: t("emails.verification_email_subject"),
            html
        });
    } catch (error) {
        console.error("Error in sendVerificationEmail:", error);
        throw error; // Re-throw the error to maintain the original behavior
    }
};
const sendForgotPasswordEmail = async (user)=>{
    const t = await getTranslate();
    const token = createToken(user.id, user.email, {
        expiresIn: "1d"
    });
    const verifyLink = `${WEBAPP_URL}/auth/forgot-password/reset?token=${encodeURIComponent(token)}`;
    const html = await render(await ForgotPasswordEmail({
        verifyLink
    }));
    return await sendEmail({
        to: user.email,
        subject: t("emails.forgot_password_email_subject"),
        html
    });
};
const sendPasswordResetNotifyEmail = async (user)=>{
    const t = await getTranslate();
    const html = await render(await PasswordResetNotifyEmail());
    return await sendEmail({
        to: user.email,
        subject: t("emails.password_reset_notify_email_subject"),
        html
    });
};
const sendInviteMemberEmail = async (inviteId, email, inviterName, inviteeName, isOnboardingInvite, inviteMessage)=>{
    const token = createInviteToken(inviteId, email, {
        expiresIn: "7d"
    });
    const t = await getTranslate();
    const verifyLink = `${WEBAPP_URL}/invite?token=${encodeURIComponent(token)}`;
    if (isOnboardingInvite && inviteMessage) {
        const html = await render(await OnboardingInviteEmail({
            verifyLink,
            inviteMessage,
            inviterName,
            inviteeName
        }));
        return await sendEmail({
            to: email,
            subject: t("emails.onboarding_invite_email_subject", {
                inviterName
            }),
            html
        });
    } else {
        const t = await getTranslate();
        const html = await render(await InviteEmail({
            inviteeName,
            inviterName,
            verifyLink
        }));
        return await sendEmail({
            to: email,
            subject: t("emails.invite_member_email_subject"),
            html
        });
    }
};
const sendInviteAcceptedEmail = async (inviterName, inviteeName, email)=>{
    const t = await (0,server/* getTranslate */.r)();
    const html = await (0,node/* render */.XX)(await InviteAcceptedEmail({
        inviteeName,
        inviterName
    }));
    await sendEmail({
        to: email,
        subject: t("emails.invite_accepted_email_subject"),
        html
    });
};
const sendResponseFinishedEmail = async (email, environmentId, survey, response, responseCount)=>{
    const t = await (0,server/* getTranslate */.r)();
    const personEmail = response.contactAttributes?.email;
    const organization = await (0,service/* getOrganizationByEnvironmentId */.TK)(environmentId);
    if (!organization) {
        throw new Error("Organization not found");
    }
    const html = await (0,node/* render */.XX)(await ResponseFinishedEmail({
        survey,
        responseCount,
        response,
        WEBAPP_URL: constants/* WEBAPP_URL */.YW,
        environmentId,
        organization
    }));
    await sendEmail({
        to: email,
        subject: personEmail ? t("emails.response_finished_email_subject_with_email", {
            personEmail,
            surveyName: survey.name
        }) : t("emails.response_finished_email_subject", {
            surveyName: survey.name
        }),
        replyTo: personEmail?.toString() ?? constants/* MAIL_FROM */.T4,
        html
    });
};
const sendEmbedSurveyPreviewEmail = async (to, innerHtml, environmentId, logoUrl)=>{
    const t = await getTranslate();
    const html = await render(await EmbedSurveyPreviewEmail({
        html: innerHtml,
        environmentId,
        logoUrl
    }));
    return await sendEmail({
        to,
        subject: t("emails.embed_survey_preview_email_subject"),
        html
    });
};
const sendEmailCustomizationPreviewEmail = async (to, userName, logoUrl)=>{
    const t = await getTranslate();
    const emailHtmlBody = await render(await EmailCustomizationPreviewEmail({
        userName,
        logoUrl
    }));
    return await sendEmail({
        to,
        subject: t("emails.email_customization_preview_email_subject"),
        html: emailHtmlBody
    });
};
const sendLinkSurveyToVerifiedEmail = async (data)=>{
    const surveyId = data.surveyId;
    const email = data.email;
    const surveyName = data.surveyName;
    const singleUseId = data.suId;
    const logoUrl = data.logoUrl || "";
    const token = createTokenForLinkSurvey(surveyId, email);
    const t = await getTranslate();
    const getSurveyLink = ()=>{
        if (singleUseId) {
            return `${WEBAPP_URL}/s/${surveyId}?verify=${encodeURIComponent(token)}&suId=${singleUseId}`;
        }
        return `${WEBAPP_URL}/s/${surveyId}?verify=${encodeURIComponent(token)}`;
    };
    const surveyLink = getSurveyLink();
    const html = await render(await LinkSurveyEmail({
        surveyName,
        surveyLink,
        logoUrl
    }));
    return await sendEmail({
        to: data.email,
        subject: t("emails.verified_link_survey_email_subject"),
        html
    });
};
const sendWeeklySummaryNotificationEmail = async (email, notificationData)=>{
    const startDate = `${notificationData.lastWeekDate.getDate().toString()} ${notificationData.lastWeekDate.toLocaleString("default", {
        month: "short"
    })}`;
    const endDate = `${notificationData.currentDate.getDate().toString()} ${notificationData.currentDate.toLocaleString("default", {
        month: "short"
    })}`;
    const startYear = notificationData.lastWeekDate.getFullYear();
    const endYear = notificationData.currentDate.getFullYear();
    const t = await (0,server/* getTranslate */.r)();
    const html = await (0,node/* render */.XX)(WeeklySummaryNotificationEmail({
        notificationData,
        startDate,
        endDate,
        startYear,
        endYear,
        t
    }));
    await sendEmail({
        to: email,
        subject: t("emails.weekly_summary_email_subject", {
            projectName: notificationData.projectName
        }),
        html
    });
};
const sendNoLiveSurveyNotificationEmail = async (email, notificationData)=>{
    const startDate = `${notificationData.lastWeekDate.getDate().toString()} ${notificationData.lastWeekDate.toLocaleString("default", {
        month: "short"
    })}`;
    const endDate = `${notificationData.currentDate.getDate().toString()} ${notificationData.currentDate.toLocaleString("default", {
        month: "short"
    })}`;
    const startYear = notificationData.lastWeekDate.getFullYear();
    const endYear = notificationData.currentDate.getFullYear();
    const t = await (0,server/* getTranslate */.r)();
    const html = await (0,node/* render */.XX)(NoLiveSurveyNotificationEmail({
        notificationData,
        startDate,
        endDate,
        startYear,
        endYear
    }));
    await sendEmail({
        to: email,
        subject: t("emails.weekly_summary_email_subject", {
            projectName: notificationData.projectName
        }),
        html
    });
};
const sendFollowUpEmail = async (html, subject, to, replyTo, logoUrl)=>{
    const emailHtmlBody = await (0,node/* render */.XX)(await FollowUpEmail({
        html,
        logoUrl
    }));
    await sendEmail({
        to,
        replyTo: replyTo.join(", "),
        subject,
        html: emailHtmlBody
    });
};


/***/ }),

/***/ 921418:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bT: () => (/* binding */ getLocalizedValue)
/* harmony export */ });
/* unused harmony exports createI18nString, isI18nObject, isLabelValidForAllLanguages, extractLanguageCodes, getEnabledLanguages, extractLanguageIds, getLanguageCode, iso639Languages, iso639Identifiers, getLanguageLabel, addMultiLanguageLabels, appLanguages */

// Helper function to create an i18nString from a regular string.
const createI18nString = (text, languages, targetLanguageCode)=>{
    if (typeof text === "object") {
        // It's already an i18n object, so clone it
        const i18nString = structuredClone(text);
        // Add new language keys with empty strings if they don't exist
        languages?.forEach((language)=>{
            if (!(language in i18nString)) {
                i18nString[language] = "";
            }
        });
        // Remove language keys that are not in the languages array
        Object.keys(i18nString).forEach((key)=>{
            if (key !== (targetLanguageCode ?? "default") && languages && !languages.includes(key)) {
                delete i18nString[key];
            }
        });
        return i18nString;
    } else {
        // It's a regular string, so create a new i18n object
        const i18nString = {
            [targetLanguageCode ?? "default"]: text
        };
        // Initialize all provided languages with empty strings
        languages?.forEach((language)=>{
            if (language !== (targetLanguageCode ?? "default")) {
                i18nString[language] = "";
            }
        });
        return i18nString;
    }
};
// Type guard to check if an object is an I18nString
const isI18nObject = (obj)=>{
    return typeof obj === "object" && obj !== null && Object.keys(obj).includes("default");
};
const isLabelValidForAllLanguages = (label, languages)=>{
    return languages.every((language)=>label[language] && label[language].trim() !== "");
};
const getLocalizedValue = (value, languageId)=>{
    if (!value) {
        return "";
    }
    if (isI18nObject(value)) {
        if (value[languageId]) {
            return value[languageId];
        }
        return "";
    }
    return "";
};
const extractLanguageCodes = (surveyLanguages)=>{
    if (!surveyLanguages) return [];
    return surveyLanguages.map((surveyLanguage)=>surveyLanguage.default ? "default" : surveyLanguage.language.code);
};
const getEnabledLanguages = (surveyLanguages)=>{
    return surveyLanguages.filter((surveyLanguage)=>surveyLanguage.enabled);
};
const extractLanguageIds = (languages)=>{
    return languages.map((language)=>language.code);
};
const getLanguageCode = (surveyLanguages, languageCode)=>{
    if (!surveyLanguages?.length || !languageCode) return "default";
    const language = surveyLanguages.find((surveyLanguage)=>surveyLanguage.language.code === languageCode);
    return language?.default ? "default" : language?.language.code || "default";
};
const iso639Languages = [
    {
        alpha2: "aa",
        label: {
            "en-US": "Afar",
            "de-DE": "Afar",
            "pt-BR": "Afar",
            "fr-FR": "Afar"
        }
    },
    {
        alpha2: "ab",
        label: {
            "en-US": "Abkhazian",
            "de-DE": "Abchasisch",
            "pt-BR": "Abcásio",
            "fr-FR": "Abkhaze"
        }
    },
    {
        alpha2: "ae",
        label: {
            "en-US": "Avestan",
            "de-DE": "Avestisch",
            "pt-BR": "Avestano",
            "fr-FR": "Avestique"
        }
    },
    {
        alpha2: "af",
        label: {
            "en-US": "Afrikaans",
            "de-DE": "Afrikaans",
            "pt-BR": "Afrikâner",
            "fr-FR": "Afrikaans"
        }
    },
    {
        alpha2: "ak",
        label: {
            "en-US": "Akan",
            "de-DE": "Akan",
            "pt-BR": "Akan",
            "fr-FR": "Akan"
        }
    },
    {
        alpha2: "am",
        label: {
            "en-US": "Amharic",
            "de-DE": "Amharisch",
            "pt-BR": "Amárico",
            "fr-FR": "Amharique"
        }
    },
    {
        alpha2: "an",
        label: {
            "en-US": "Aragonese",
            "de-DE": "Aragonesisch",
            "pt-BR": "Aragonês",
            "fr-FR": "Aragonês"
        }
    },
    {
        alpha2: "ar",
        label: {
            "en-US": "Arabic",
            "de-DE": "Arabisch",
            "pt-BR": "Árabe",
            "fr-FR": "Arabe"
        }
    },
    {
        alpha2: "as",
        label: {
            "en-US": "Assamese",
            "de-DE": "Assamesisch",
            "pt-BR": "Assamês",
            "fr-FR": "Assamais"
        }
    },
    {
        alpha2: "av",
        label: {
            "en-US": "Avaric",
            "de-DE": "Avarisch",
            "pt-BR": "Avaric",
            "fr-FR": "Avaric"
        }
    },
    {
        alpha2: "ay",
        label: {
            "en-US": "Aymara",
            "de-DE": "Aymara",
            "pt-BR": "Aymara",
            "fr-FR": "Aymara"
        }
    },
    {
        alpha2: "az",
        label: {
            "en-US": "Azerbaijani",
            "de-DE": "Aserbaidschanisch",
            "pt-BR": "Azerbaijano",
            "fr-FR": "Azerbaïdjanais"
        }
    },
    {
        alpha2: "ba",
        label: {
            "en-US": "Bashkir",
            "de-DE": "Baschkirisch",
            "pt-BR": "Basco",
            "fr-FR": "Bashkir"
        }
    },
    {
        alpha2: "be",
        label: {
            "en-US": "Belarusian",
            "de-DE": "Weißrussisch",
            "pt-BR": "Bielorrusso",
            "fr-FR": "Biélorusse"
        }
    },
    {
        alpha2: "bg",
        label: {
            "en-US": "Bulgarian",
            "de-DE": "Bulgarisch",
            "pt-BR": "Búlgaro",
            "fr-FR": "Bulgare"
        }
    },
    {
        alpha2: "bh",
        label: {
            "en-US": "Bihari languages",
            "de-DE": "Biharische Sprachen",
            "pt-BR": "Bihari",
            "fr-FR": "Bihari"
        }
    },
    {
        alpha2: "bi",
        label: {
            "en-US": "Bislama",
            "de-DE": "Bislama",
            "pt-BR": "Bislama",
            "fr-FR": "Bislama"
        }
    },
    {
        alpha2: "bm",
        label: {
            "en-US": "Bambara",
            "de-DE": "Bambara",
            "pt-BR": "Bambara",
            "fr-FR": "Bambara"
        }
    },
    {
        alpha2: "bn",
        label: {
            "en-US": "Bengali",
            "de-DE": "Bengali",
            "pt-BR": "Bengali",
            "fr-FR": "Bengali"
        }
    },
    {
        alpha2: "bo",
        label: {
            "en-US": "Tibetan",
            "de-DE": "Tibetisch",
            "pt-BR": "Tibetano",
            "fr-FR": "Tibétain"
        }
    },
    {
        alpha2: "br",
        label: {
            "en-US": "Breton",
            "de-DE": "Bretonisch",
            "pt-BR": "Breton",
            "fr-FR": "Breton"
        }
    },
    {
        alpha2: "bs",
        label: {
            "en-US": "Bosnian",
            "de-DE": "Bosnisch",
            "pt-BR": "Bósnio",
            "fr-FR": "Bosnien"
        }
    },
    {
        alpha2: "ca",
        label: {
            "en-US": "Catalan; Valencian",
            "de-DE": "Katalanisch; Valencisch",
            "pt-BR": "Catalão; Valenciano",
            "fr-FR": "Catalan; Valencian"
        }
    },
    {
        alpha2: "ce",
        label: {
            "en-US": "Chechen",
            "de-DE": "Tschetschenisch",
            "pt-BR": "Checheno",
            "fr-FR": "Tchechen"
        }
    },
    {
        alpha2: "ch",
        label: {
            "en-US": "Chamorro",
            "de-DE": "Chamorro",
            "pt-BR": "Chamorro",
            "fr-FR": "Chamorro"
        }
    },
    {
        alpha2: "co",
        label: {
            "en-US": "Corsican",
            "de-DE": "Korsisch",
            "pt-BR": "Corsican",
            "fr-FR": "Corsican"
        }
    },
    {
        alpha2: "cr",
        label: {
            "en-US": "Cree",
            "de-DE": "Cree",
            "pt-BR": "Cree",
            "fr-FR": "Cree"
        }
    },
    {
        alpha2: "cs",
        label: {
            "en-US": "Czech",
            "de-DE": "Tschechisch",
            "pt-BR": "Tcheco",
            "fr-FR": "Tcheque"
        }
    },
    {
        alpha2: "cu",
        label: {
            "en-US": "Church Slavic; Old Slavonic; Church Slavonic; Old Bulgarian; Old Church Slavonic",
            "de-DE": "Kirchenslawisch; Altbulgarisch; Kirchenslawisch; Altbulgarisch; Altkirchliches Slawisch",
            "pt-BR": "Slavônico eclesiástico; Antigo eslavônico; Sânscrito eclesiástico; Antigo búlgaro; Antigo sânscrito eclesiástico",
            "fr-FR": "Slavon épiscopal; Ancien slave; Sanscrit épiscopal; Ancien bulgare; Ancien sanscrit épiscopal"
        }
    },
    {
        alpha2: "cv",
        label: {
            "en-US": "Chuvash",
            "de-DE": "Tschuwaschisch",
            "pt-BR": "Tchuvasco",
            "fr-FR": "Tchuvasche"
        }
    },
    {
        alpha2: "cy",
        label: {
            "en-US": "Welsh",
            "de-DE": "Walisisch",
            "pt-BR": "Galês",
            "fr-FR": "Gallois"
        }
    },
    {
        alpha2: "da",
        label: {
            "en-US": "Danish",
            "de-DE": "Dänisch",
            "pt-BR": "Dinamarquês",
            "fr-FR": "Danois"
        }
    },
    {
        alpha2: "de",
        label: {
            "en-US": "German",
            "de-DE": "Deutsch",
            "pt-BR": "Alemão",
            "fr-FR": "Allemand"
        }
    },
    {
        alpha2: "dv",
        label: {
            "en-US": "Divehi; Dhivehi; Maldivian",
            "de-DE": "Divehi; Dhivehi; Maldivisch",
            "pt-BR": "Divehi; Dhivehi; Maldiviano",
            "fr-FR": "Divehi; Dhivehi; Maldivien"
        }
    },
    {
        alpha2: "dz",
        label: {
            "en-US": "Dzongkha",
            "de-DE": "Dzongkha",
            "pt-BR": "Dzongkha",
            "fr-FR": "Dzongkha"
        }
    },
    {
        alpha2: "ee",
        label: {
            "en-US": "Ewe",
            "de-DE": "Ewe",
            "pt-BR": "Ewe",
            "fr-FR": "Ewe"
        }
    },
    {
        alpha2: "el",
        label: {
            "en-US": "Greek, Modern (1453-)",
            "de-DE": "Griechisch, Modern (ab 1453)",
            "pt-BR": "Grego moderno (1453-)",
            "fr-FR": "Grec moderne (après 1453)"
        }
    },
    {
        alpha2: "en",
        label: {
            "en-US": "English",
            "de-DE": "Englisch",
            "pt-BR": "Inglês",
            "fr-FR": "Anglais"
        }
    },
    {
        alpha2: "eo",
        label: {
            "en-US": "Esperanto",
            "de-DE": "Esperanto",
            "pt-BR": "Esperanto",
            "fr-FR": "Esperanto"
        }
    },
    {
        alpha2: "es",
        label: {
            "en-US": "Spanish; Castilian",
            "de-DE": "Spanisch; Kastilisch",
            "pt-BR": "Espanhol; Castelao",
            "fr-FR": "Espagnol; Castillan"
        }
    },
    {
        alpha2: "et",
        label: {
            "en-US": "Estonian",
            "de-DE": "Estnisch",
            "pt-BR": "Estoniano",
            "fr-FR": "Estonien"
        }
    },
    {
        alpha2: "eu",
        label: {
            "en-US": "Basque",
            "de-DE": "Baskisch",
            "pt-BR": "Basco",
            "fr-FR": "Basque"
        }
    },
    {
        alpha2: "fa",
        label: {
            "en-US": "Persian",
            "de-DE": "Persisch",
            "pt-BR": "Persa",
            "fr-FR": "Persan"
        }
    },
    {
        alpha2: "ff",
        label: {
            "en-US": "Fulah",
            "de-DE": "Fulah",
            "pt-BR": "Fulah",
            "fr-FR": "Fulah"
        }
    },
    {
        alpha2: "fi",
        label: {
            "en-US": "Finnish",
            "de-DE": "Finnisch",
            "pt-BR": "Finlandês",
            "fr-FR": "Finlandais"
        }
    },
    {
        alpha2: "fj",
        label: {
            "en-US": "Fijian",
            "de-DE": "Fidschianisch",
            "pt-BR": "Fijiano",
            "fr-FR": "Fijien"
        }
    },
    {
        alpha2: "fo",
        label: {
            "en-US": "Faroese",
            "de-DE": "Färöisch",
            "pt-BR": "Feroês",
            "fr-FR": "Féroïen"
        }
    },
    {
        alpha2: "fr",
        label: {
            "en-US": "French",
            "de-DE": "Französisch",
            "pt-BR": "Francês",
            "fr-FR": "Français"
        }
    },
    {
        alpha2: "fy",
        label: {
            "en-US": "Western Frisian",
            "de-DE": "Westfriesisch",
            "pt-BR": "Frísio ocidental",
            "fr-FR": "Frison occidental"
        }
    },
    {
        alpha2: "ga",
        label: {
            "en-US": "Irish",
            "de-DE": "Irischer",
            "pt-BR": "Irlandês",
            "fr-FR": "Irlandais"
        }
    },
    {
        alpha2: "gd",
        label: {
            "en-US": "Gaelic; Scottish Gaelic",
            "de-DE": "Gälisch; Schottisch Gälisch",
            "pt-BR": "Gaelico escocês; Gaélico escocês",
            "fr-FR": "Gaélique écossais; Gaélique écossais"
        }
    },
    {
        alpha2: "gl",
        label: {
            "en-US": "Galician",
            "de-DE": "Galicisch",
            "pt-BR": "Galego",
            "fr-FR": "Galicien"
        }
    },
    {
        alpha2: "gn",
        label: {
            "en-US": "Guarani",
            "de-DE": "Guarani",
            "pt-BR": "Guarani",
            "fr-FR": "Guarani"
        }
    },
    {
        alpha2: "gu",
        label: {
            "en-US": "Gujarati",
            "de-DE": "Gujarati",
            "pt-BR": "Gujarati",
            "fr-FR": "Gujarati"
        }
    },
    {
        alpha2: "gv",
        label: {
            "en-US": "Manx",
            "de-DE": "Manx",
            "pt-BR": "Manx",
            "fr-FR": "Manx"
        }
    },
    {
        alpha2: "ha",
        label: {
            "en-US": "Hausa",
            "de-DE": "Hausa",
            "pt-BR": "Hausa",
            "fr-FR": "Hausa"
        }
    },
    {
        alpha2: "he",
        label: {
            "en-US": "Hebrew",
            "de-DE": "Hebräisch",
            "pt-BR": "Hebraico",
            "fr-FR": "Hébreu"
        }
    },
    {
        alpha2: "hi",
        label: {
            "en-US": "Hindi",
            "de-DE": "Hindi",
            "pt-BR": "Hindi",
            "fr-FR": "Hindi"
        }
    },
    {
        alpha2: "ho",
        label: {
            "en-US": "Hiri Motu",
            "de-DE": "Hiri Motu",
            "pt-BR": "Hiri Motu",
            "fr-FR": "Hiri Motu"
        }
    },
    {
        alpha2: "hr",
        label: {
            "en-US": "Croatian",
            "de-DE": "Kroatisch",
            "pt-BR": "Croata",
            "fr-FR": "Croate"
        }
    },
    {
        alpha2: "ht",
        label: {
            "en-US": "Haitian; Haitian Creole",
            "de-DE": "Haitian; Haitian Creole",
            "pt-BR": "Haitiano; Crioulo haitiano",
            "fr-FR": "Haïtien; Créole haïtien"
        }
    },
    {
        alpha2: "hu",
        label: {
            "en-US": "Hungarian",
            "de-DE": "Ungarisch",
            "pt-BR": "Húngaro",
            "fr-FR": "Hongrois"
        }
    },
    {
        alpha2: "hy",
        label: {
            "en-US": "Armenian",
            "de-DE": "Armenisch",
            "pt-BR": "Armênio",
            "fr-FR": "Arménien"
        }
    },
    {
        alpha2: "hz",
        label: {
            "en-US": "Herero",
            "de-DE": "Herero",
            "pt-BR": "Herero",
            "fr-FR": "Herero"
        }
    },
    {
        alpha2: "ia",
        label: {
            "en-US": "Interlingua (International Auxiliary Language Association)",
            "de-DE": "Interlingua (Internationaler Hilfssprachverband)",
            "pt-BR": "Interlingua (Associação Internacional de Línguas Auxiliares)",
            "fr-FR": "Interlingua (Association internationale des langues auxiliaires)"
        }
    },
    {
        alpha2: "id",
        label: {
            "en-US": "Indonesian",
            "de-DE": "Indonesisch",
            "pt-BR": "Indonésio",
            "fr-FR": "Indonésien"
        }
    },
    {
        alpha2: "ie",
        label: {
            "en-US": "Interlingue; Occidental",
            "de-DE": "Interlingue; Occidental",
            "pt-BR": "Interlingue; Ocidental",
            "fr-FR": "Interlingue; Ocidental"
        }
    },
    {
        alpha2: "ig",
        label: {
            "en-US": "Igbo",
            "de-DE": "Igbo",
            "pt-BR": "Igbo",
            "fr-FR": "Igbo"
        }
    },
    {
        alpha2: "ii",
        label: {
            "en-US": "Sichuan Yi; Nuosu",
            "de-DE": "Sichuan Yi; Nuosu",
            "pt-BR": "Sichuan Yi; Nuosu",
            "fr-FR": "Sichuan Yi; Nuosu"
        }
    },
    {
        alpha2: "ik",
        label: {
            "en-US": "Inupiaq",
            "de-DE": "Inupiaq",
            "pt-BR": "Inupiaq",
            "fr-FR": "Inupiaq"
        }
    },
    {
        alpha2: "io",
        label: {
            "en-US": "Ido",
            "de-DE": "Ido",
            "pt-BR": "Ido",
            "fr-FR": "Ido"
        }
    },
    {
        alpha2: "is",
        label: {
            "en-US": "Icelandic",
            "de-DE": "Isländisch",
            "pt-BR": "Islandês",
            "fr-FR": "Islandais"
        }
    },
    {
        alpha2: "it",
        label: {
            "en-US": "Italian",
            "de-DE": "Italienisch",
            "pt-BR": "Italiano",
            "fr-FR": "Italien"
        }
    },
    {
        alpha2: "iu",
        label: {
            "en-US": "Inuktitut",
            "de-DE": "Inuktitut",
            "pt-BR": "Inuktitut",
            "fr-FR": "Inuktitut"
        }
    },
    {
        alpha2: "ja",
        label: {
            "en-US": "Japanese",
            "de-DE": "Japanisch",
            "pt-BR": "Japonês",
            "fr-FR": "Japonais"
        }
    },
    {
        alpha2: "jv",
        label: {
            "en-US": "Javanese",
            "de-DE": "Javanisch",
            "pt-BR": "Javonês",
            "fr-FR": "Javanais"
        }
    },
    {
        alpha2: "ka",
        label: {
            "en-US": "Georgian",
            "de-DE": "Georgisch",
            "pt-BR": "Georgiano",
            "fr-FR": "Géorgien"
        }
    },
    {
        alpha2: "kg",
        label: {
            "en-US": "Kongo",
            "de-DE": "Kongo",
            "pt-BR": "Kongo",
            "fr-FR": "Kongo"
        }
    },
    {
        alpha2: "ki",
        label: {
            "en-US": "Kikuyu; Gikuyu",
            "de-DE": "Kikuyu; Gikuyu",
            "pt-BR": "Kikuyu; Gikuyu",
            "fr-FR": "Kikuyu; Gikuyu"
        }
    },
    {
        alpha2: "kj",
        label: {
            "en-US": "Kuanyama; Kwanyama",
            "de-DE": "Kuanyama; Kwanyama",
            "pt-BR": "Kuanyama; Kwanyama",
            "fr-FR": "Kuanyama; Kwanyama"
        }
    },
    {
        alpha2: "kk",
        label: {
            "en-US": "Kazakh",
            "de-DE": "Kasachisch",
            "pt-BR": "Cazaque",
            "fr-FR": "Kazakh"
        }
    },
    {
        alpha2: "kl",
        label: {
            "en-US": "Kalaallisut; Greenlandic",
            "de-DE": "Kalaallisut; Grönländisch",
            "pt-BR": "Kalaallisut; Groelândico",
            "fr-FR": "Kalaallisut; Groenlandais"
        }
    },
    {
        alpha2: "km",
        label: {
            "en-US": "Central Khmer",
            "de-DE": "Zentral-Khmer",
            "pt-BR": "Khmer central",
            "fr-FR": "Khmer central"
        }
    },
    {
        alpha2: "kn",
        label: {
            "en-US": "Kannada",
            "de-DE": "Kannada",
            "pt-BR": "Canarês",
            "fr-FR": "Kannada"
        }
    },
    {
        alpha2: "ko",
        label: {
            "en-US": "Korean",
            "de-DE": "Koreanisch",
            "pt-BR": "Coreano",
            "fr-FR": "Coréen"
        }
    },
    {
        alpha2: "kr",
        label: {
            "en-US": "Kanuri",
            "de-DE": "Kanuri",
            "pt-BR": "Kanuri",
            "fr-FR": "Kanuri"
        }
    },
    {
        alpha2: "ks",
        label: {
            "en-US": "Kashmiri",
            "de-DE": "Kashmiri",
            "pt-BR": "Kashmiri",
            "fr-FR": "Kashmiri"
        }
    },
    {
        alpha2: "ku",
        label: {
            "en-US": "Kurdish",
            "de-DE": "Kurdisch",
            "pt-BR": "Curdo",
            "fr-FR": "Kurde"
        }
    },
    {
        alpha2: "kv",
        label: {
            "en-US": "Komi",
            "de-DE": "Komi",
            "pt-BR": "Komi",
            "fr-FR": "Komi"
        }
    },
    {
        alpha2: "kw",
        label: {
            "en-US": "Cornish",
            "de-DE": "Kornisch",
            "pt-BR": "Cornualles",
            "fr-FR": "Cornouaillois"
        }
    },
    {
        alpha2: "ky",
        label: {
            "en-US": "Kirghiz; Kyrgyz",
            "de-DE": "Kirgisisch; Kirgisischer",
            "pt-BR": "Kirguiz; Quirguiz",
            "fr-FR": "Kirghiz; Kyrgyz"
        }
    },
    {
        alpha2: "la",
        label: {
            "en-US": "Latin",
            "de-DE": "Lateinisch",
            "pt-BR": "Latim",
            "fr-FR": "Latin"
        }
    },
    {
        alpha2: "lb",
        label: {
            "en-US": "Luxembourgish; Letzeburgesch",
            "de-DE": "Luxemburgisch; Letzeburgesch",
            "pt-BR": "Luxemburguês; Luxemburguês",
            "fr-FR": "Luxembourgeois; Letzeburgesch"
        }
    },
    {
        alpha2: "lg",
        label: {
            "en-US": "Ganda",
            "de-DE": "Ganda",
            "pt-BR": "Ganda",
            "fr-FR": "Ganda"
        }
    },
    {
        alpha2: "li",
        label: {
            "en-US": "Limburgan; Limburger; Limburgish",
            "de-DE": "Limburgisch; Limburger; Limburgish",
            "pt-BR": "Limburguês; Limburguês; Limburguês",
            "fr-FR": "Limbourgeois; Limbourgeois; Limbourgeois"
        }
    },
    {
        alpha2: "ln",
        label: {
            "en-US": "Lingala",
            "de-DE": "Lingala",
            "pt-BR": "Lingala",
            "fr-FR": "Lingala"
        }
    },
    {
        alpha2: "lo",
        label: {
            "en-US": "Lao",
            "de-DE": "Lao",
            "pt-BR": "Lao",
            "fr-FR": "Lao"
        }
    },
    {
        alpha2: "lt",
        label: {
            "en-US": "Lithuanian",
            "de-DE": "Litauisch",
            "pt-BR": "Lituano",
            "fr-FR": "Lituanien"
        }
    },
    {
        alpha2: "lu",
        label: {
            "en-US": "Luba-Katanga",
            "de-DE": "Luba-Katanga",
            "pt-BR": "Luba-Katanga",
            "fr-FR": "Luba-Katanga"
        }
    },
    {
        alpha2: "lv",
        label: {
            "en-US": "Latvian",
            "de-DE": "Lettisch",
            "pt-BR": "Letão",
            "fr-FR": "Letton"
        }
    },
    {
        alpha2: "mg",
        label: {
            "en-US": "Malagasy",
            "de-DE": "Malagasy",
            "pt-BR": "Malagasy",
            "fr-FR": "Malagasy"
        }
    },
    {
        alpha2: "mh",
        label: {
            "en-US": "Marshallese",
            "de-DE": "Marshallese",
            "pt-BR": "Marshallês",
            "fr-FR": "Marshallese"
        }
    },
    {
        alpha2: "mi",
        label: {
            "en-US": "Maori",
            "de-DE": "Maori",
            "pt-BR": "Maori",
            "fr-FR": "Maori"
        }
    },
    {
        alpha2: "mk",
        label: {
            "en-US": "Macedonian",
            "de-DE": "Mazedonisch",
            "pt-BR": "Macedônio",
            "fr-FR": "Macédonien"
        }
    },
    {
        alpha2: "ml",
        label: {
            "en-US": "Malayalam",
            "de-DE": "Malayalam",
            "pt-BR": "Malayalam",
            "fr-FR": "Malayalam"
        }
    },
    {
        alpha2: "mn",
        label: {
            "en-US": "Mongolian",
            "de-DE": "Mongolisch",
            "pt-BR": "Mongol",
            "fr-FR": "Mongol"
        }
    },
    {
        alpha2: "mr",
        label: {
            "en-US": "Marathi",
            "de-DE": "Marathi",
            "pt-BR": "Marati",
            "fr-FR": "Marathi"
        }
    },
    {
        alpha2: "ms",
        label: {
            "en-US": "Malay",
            "de-DE": "Malay",
            "pt-BR": "Malaio",
            "fr-FR": "Malais"
        }
    },
    {
        alpha2: "mt",
        label: {
            "en-US": "Maltese",
            "de-DE": "Maltesisch",
            "pt-BR": "Maltês",
            "fr-FR": "Maltès"
        }
    },
    {
        alpha2: "my",
        label: {
            "en-US": "Burmese",
            "de-DE": "Birmanisch",
            "pt-BR": "Birmanês",
            "fr-FR": "Birman"
        }
    },
    {
        alpha2: "na",
        label: {
            "en-US": "Nauru",
            "de-DE": "Nauru",
            "pt-BR": "Nauru",
            "fr-FR": "Nauru"
        }
    },
    {
        alpha2: "nb",
        label: {
            "en-US": "Bokmål, Norwegian; Norwegian Bokmål",
            "de-DE": "Bokmål, Norwegisch; Norwegische Bokmål",
            "pt-BR": "Bokmål, Norueguês; Bokmål Norueguês",
            "fr-FR": "Bokmål, Norvégien; Bokmål Norvégien"
        }
    },
    {
        alpha2: "nd",
        label: {
            "en-US": "Ndebele, North; North Ndebele",
            "de-DE": "Ndebele, Nord; Nord Ndebele",
            "pt-BR": "Ndebele, Norte; Norte Ndebele",
            "fr-FR": "Ndebele, Nord; Nord Ndebele"
        }
    },
    {
        alpha2: "ne",
        label: {
            "en-US": "Nepali",
            "de-DE": "Nepali",
            "pt-BR": "Nepali",
            "fr-FR": "Népalais"
        }
    },
    {
        alpha2: "ng",
        label: {
            "en-US": "Ndonga",
            "de-DE": "Ndonga",
            "pt-BR": "Ndonga",
            "fr-FR": "Ndonga"
        }
    },
    {
        alpha2: "nl",
        label: {
            "en-US": "Dutch; Flemish",
            "de-DE": "Holländisch; Flämisch",
            "pt-BR": "Holandês; Flamengo",
            "fr-FR": "Néerlandais; Flamand"
        }
    },
    {
        alpha2: "nn",
        label: {
            "en-US": "Norwegian Nynorsk; Nynorsk, Norwegian",
            "de-DE": "Norwegische Nynorsk; Nynorsk, Norwegisch",
            "pt-BR": "Norwegian Nynorsk; Nynorsk, Norueguês",
            "fr-FR": "Norvégien Nynorsk; Nynorsk, Norvégien"
        }
    },
    {
        alpha2: "no",
        label: {
            "en-US": "Norwegian",
            "de-DE": "Norwegisch",
            "pt-BR": "Norueguês",
            "fr-FR": "Norvégien"
        }
    },
    {
        alpha2: "nr",
        label: {
            "en-US": "Ndebele, South; South Ndebele",
            "de-DE": "Ndebele, Süd; Süd Ndebele",
            "pt-BR": "Ndebele, Sul; Sul Ndebele",
            "fr-FR": "Ndebele, Sud; Sud Ndebele"
        }
    },
    {
        alpha2: "nv",
        label: {
            "en-US": "Navajo; Navaho",
            "de-DE": "Navajo; Navaho",
            "pt-BR": "Navajo; Navaho",
            "fr-FR": "Navajo; Navaho"
        }
    },
    {
        alpha2: "ny",
        label: {
            "en-US": "Chichewa; Chewa; Nyanja",
            "de-DE": "Chichewa; Chewa; Nyanja",
            "pt-BR": "Chichewa; Chewa; Nyanja",
            "fr-FR": "Chichewa; Chewa; Nyanja"
        }
    },
    {
        alpha2: "oc",
        label: {
            "en-US": "Occitan (post 1500)",
            "de-DE": "Occitan (post 1500)",
            "pt-BR": "Occitano (pós 1500)",
            "fr-FR": "Occitan (post 1500)"
        }
    },
    {
        alpha2: "oj",
        label: {
            "en-US": "Ojibwa",
            "de-DE": "Ojibwa",
            "pt-BR": "Ojibwa",
            "fr-FR": "Ojibwa"
        }
    },
    {
        alpha2: "om",
        label: {
            "en-US": "Oromo",
            "de-DE": "Oromo",
            "pt-BR": "Oromo",
            "fr-FR": "Oromo"
        }
    },
    {
        alpha2: "or",
        label: {
            "en-US": "Oriya",
            "de-DE": "Oriya",
            "pt-BR": "Oriya",
            "fr-FR": "Oriya"
        }
    },
    {
        alpha2: "os",
        label: {
            "en-US": "Ossetian; Ossetic",
            "de-DE": "Ossetian; Ossetic",
            "pt-BR": "Ossetiano; Ossético",
            "fr-FR": "Ossète; Ossète"
        }
    },
    {
        alpha2: "pa",
        label: {
            "en-US": "Panjabi; Punjabi",
            "de-DE": "Panjabi; Punjabi",
            "pt-BR": "Panjabi; Punjabi",
            "fr-FR": "Panjabi; Punjabi"
        }
    },
    {
        alpha2: "pi",
        label: {
            "en-US": "Pali",
            "de-DE": "Pali",
            "pt-BR": "Pali",
            "fr-FR": "Pali"
        }
    },
    {
        alpha2: "pl",
        label: {
            "en-US": "Polish",
            "de-DE": "Polnisch",
            "pt-BR": "Polonês",
            "fr-FR": "Polonais"
        }
    },
    {
        alpha2: "ps",
        label: {
            "en-US": "Pushto; Pashto",
            "de-DE": "Pushto; Pashto",
            "pt-BR": "Pushto; Pashto",
            "fr-FR": "Poushto; Pashto"
        }
    },
    {
        alpha2: "pt",
        label: {
            "en-US": "Portuguese",
            "de-DE": "Portugiesisch",
            "pt-BR": "Português",
            "fr-FR": "Portugais"
        }
    },
    {
        alpha2: "qu",
        label: {
            "en-US": "Quechua",
            "de-DE": "Quechua",
            "pt-BR": "Quechua",
            "fr-FR": "Quechua"
        }
    },
    {
        alpha2: "rm",
        label: {
            "en-US": "Romansh",
            "de-DE": "Rämisch",
            "pt-BR": "Romeno",
            "fr-FR": "Romansh"
        }
    },
    {
        alpha2: "rn",
        label: {
            "en-US": "Rundi",
            "de-DE": "Rundi",
            "pt-BR": "Rundi",
            "fr-FR": "Rundi"
        }
    },
    {
        alpha2: "ro",
        label: {
            "en-US": "Romanian; Moldavian; Moldovan",
            "de-DE": "Rumänisch; Moldauisch; Moldauisch",
            "pt-BR": "Romeno; Moldavo; Moldavo",
            "fr-FR": "Roumain; Moldave; Moldave"
        }
    },
    {
        alpha2: "ru",
        label: {
            "en-US": "Russian",
            "de-DE": "Russisch",
            "pt-BR": "Russo",
            "fr-FR": "Russe"
        }
    },
    {
        alpha2: "rw",
        label: {
            "en-US": "Kinyarwanda",
            "de-DE": "Kinyarwanda",
            "pt-BR": "Kinyarwanda",
            "fr-FR": "Kinyarwanda"
        }
    },
    {
        alpha2: "sa",
        label: {
            "en-US": "Sanskrit",
            "de-DE": "Sanskrit",
            "pt-BR": "Sânscrito",
            "fr-FR": "Sanskrit"
        }
    },
    {
        alpha2: "sc",
        label: {
            "en-US": "Sardinian",
            "de-DE": "Sardisch",
            "pt-BR": "Sardo",
            "fr-FR": "Sardien"
        }
    },
    {
        alpha2: "sd",
        label: {
            "en-US": "Sindhi",
            "de-DE": "Sindhi",
            "pt-BR": "Sindhi",
            "fr-FR": "Sindhi"
        }
    },
    {
        alpha2: "se",
        label: {
            "en-US": "Northern Sami",
            "de-DE": "Nordischer Sami",
            "pt-BR": "Sami do Norte",
            "fr-FR": "Sami du Nord"
        }
    },
    {
        alpha2: "sg",
        label: {
            "en-US": "Sango",
            "de-DE": "Sango",
            "pt-BR": "Sango",
            "fr-FR": "Sango"
        }
    },
    {
        alpha2: "si",
        label: {
            "en-US": "Sinhala; Sinhalese",
            "de-DE": "Sinhala; Sinhalese",
            "pt-BR": "Sinhala; Sinhalese",
            "fr-FR": "Sinhala; Sinhalese"
        }
    },
    {
        alpha2: "sk",
        label: {
            "en-US": "Slovak",
            "de-DE": "Slowakisch",
            "pt-BR": "Eslovaco",
            "fr-FR": "Slovaque"
        }
    },
    {
        alpha2: "sl",
        label: {
            "en-US": "Slovenian",
            "de-DE": "Slowenisch",
            "pt-BR": "Esloveno",
            "fr-FR": "Slovène"
        }
    },
    {
        alpha2: "sm",
        label: {
            "en-US": "Samoan",
            "de-DE": "Samoan",
            "pt-BR": "Samoano",
            "fr-FR": "Samoan"
        }
    },
    {
        alpha2: "sn",
        label: {
            "en-US": "Shona",
            "de-DE": "Shona",
            "pt-BR": "Shona",
            "fr-FR": "Shona"
        }
    },
    {
        alpha2: "so",
        label: {
            "en-US": "Somali",
            "de-DE": "Somali",
            "pt-BR": "Somali",
            "fr-FR": "Somali"
        }
    },
    {
        alpha2: "sq",
        label: {
            "en-US": "Albanian",
            "de-DE": "Albanisch",
            "pt-BR": "Albânico",
            "fr-FR": "Albanais"
        }
    },
    {
        alpha2: "sr",
        label: {
            "en-US": "Serbian",
            "de-DE": "Serbisch",
            "pt-BR": "Sérvio",
            "fr-FR": "Serbe"
        }
    },
    {
        alpha2: "ss",
        label: {
            "en-US": "Swati",
            "de-DE": "Swati",
            "pt-BR": "Swati",
            "fr-FR": "Swati"
        }
    },
    {
        alpha2: "st",
        label: {
            "en-US": "Sotho, Southern",
            "de-DE": "Sotho, Süd",
            "pt-BR": "Sotho, Sul",
            "fr-FR": "Sotho, Sud"
        }
    },
    {
        alpha2: "su",
        label: {
            "en-US": "Sundanese",
            "de-DE": "Sundanesisch",
            "pt-BR": "Sundanês",
            "fr-FR": "Sundanais"
        }
    },
    {
        alpha2: "sv",
        label: {
            "en-US": "Swedish",
            "de-DE": "Schwedisch",
            "pt-BR": "Sueco",
            "fr-FR": "Suédois"
        }
    },
    {
        alpha2: "sw",
        label: {
            "en-US": "Swahili",
            "de-DE": "Swahili",
            "pt-BR": "Swahili",
            "fr-FR": "Swahili"
        }
    },
    {
        alpha2: "ta",
        label: {
            "en-US": "Tamil",
            "de-DE": "Tamil",
            "pt-BR": "Tâmil",
            "fr-FR": "Tamoul"
        }
    },
    {
        alpha2: "te",
        label: {
            "en-US": "Telugu",
            "de-DE": "Telugu",
            "pt-BR": "Telugu",
            "fr-FR": "Telugu"
        }
    },
    {
        alpha2: "tg",
        label: {
            "en-US": "Tajik",
            "de-DE": "Tadschikisch",
            "pt-BR": "Tajique",
            "fr-FR": "Tadjik"
        }
    },
    {
        alpha2: "th",
        label: {
            "en-US": "Thai",
            "de-DE": "Thai",
            "pt-BR": "Tailandês",
            "fr-FR": "Thaïlandais"
        }
    },
    {
        alpha2: "ti",
        label: {
            "en-US": "Tigrinya",
            "de-DE": "Tigrinya",
            "pt-BR": "Tigrinya",
            "fr-FR": "Tigrinya"
        }
    },
    {
        alpha2: "tk",
        label: {
            "en-US": "Turkmen",
            "de-DE": "Turkmenisch",
            "pt-BR": "Turcomano",
            "fr-FR": "Turkmène"
        }
    },
    {
        alpha2: "tl",
        label: {
            "en-US": "Tagalog",
            "de-DE": "Tagalog",
            "pt-BR": "Tagalo",
            "fr-FR": "Tagalog"
        }
    },
    {
        alpha2: "tn",
        label: {
            "en-US": "Tswana",
            "de-DE": "Tswana",
            "pt-BR": "Tswana",
            "fr-FR": "Tswana"
        }
    },
    {
        alpha2: "to",
        label: {
            "en-US": "Tonga (Tonga Islands)",
            "de-DE": "Tonga (Tonga-Inseln)",
            "pt-BR": "Tonga (Ilhas Tonga)",
            "fr-FR": "Tonga (Îles Tonga)"
        }
    },
    {
        alpha2: "tr",
        label: {
            "en-US": "Turkish",
            "de-DE": "Türkisch",
            "pt-BR": "Turco",
            "fr-FR": "Turc"
        }
    },
    {
        alpha2: "ts",
        label: {
            "en-US": "Tsonga",
            "de-DE": "Tsonga",
            "pt-BR": "Tsonga",
            "fr-FR": "Tsonga"
        }
    },
    {
        alpha2: "tt",
        label: {
            "en-US": "Tatar",
            "de-DE": "Tatarisch",
            "pt-BR": "Tatar",
            "fr-FR": "Tatar"
        }
    },
    {
        alpha2: "tw",
        label: {
            "en-US": "Twi",
            "de-DE": "Twi",
            "pt-BR": "Twi",
            "fr-FR": "Twi"
        }
    },
    {
        alpha2: "ty",
        label: {
            "en-US": "Tahitian",
            "de-DE": "Tahitisch",
            "pt-BR": "Tahitiano",
            "fr-FR": "Tahitien"
        }
    },
    {
        alpha2: "ug",
        label: {
            "en-US": "Uighur; Uyghur",
            "de-DE": "Uighur; Uyghur",
            "pt-BR": "Uigur; Uigur",
            "fr-FR": "Uigur; Uigur"
        }
    },
    {
        alpha2: "uk",
        label: {
            "en-US": "Ukrainian",
            "de-DE": "Ukrainisch",
            "pt-BR": "Ucraniano",
            "fr-FR": "Ukrainien"
        }
    },
    {
        alpha2: "ur",
        label: {
            "en-US": "Urdu",
            "de-DE": "Urdu",
            "pt-BR": "Urdu",
            "fr-FR": "Urdu"
        }
    },
    {
        alpha2: "uz",
        label: {
            "en-US": "Uzbek",
            "de-DE": "Usbekisch",
            "pt-BR": "Usbeque",
            "fr-FR": "Ouzbek"
        }
    },
    {
        alpha2: "ve",
        label: {
            "en-US": "Venda",
            "de-DE": "Venda",
            "pt-BR": "Venda",
            "fr-FR": "Venda"
        }
    },
    {
        alpha2: "vi",
        label: {
            "en-US": "Vietnamese",
            "de-DE": "Vietnamesisch",
            "pt-BR": "Vietnamita",
            "fr-FR": "Vietnamien"
        }
    },
    {
        alpha2: "vo",
        label: {
            "en-US": "Volapük",
            "de-DE": "Volapük",
            "pt-BR": "Volapük",
            "fr-FR": "Volapük"
        }
    },
    {
        alpha2: "wa",
        label: {
            "en-US": "Walloon",
            "de-DE": "Wallonisch",
            "pt-BR": "Valão",
            "fr-FR": "Valon"
        }
    },
    {
        alpha2: "wo",
        label: {
            "en-US": "Wolof",
            "de-DE": "Wolof",
            "pt-BR": "Wolof",
            "fr-FR": "Wolof"
        }
    },
    {
        alpha2: "xh",
        label: {
            "en-US": "Xhosa",
            "de-DE": "Xhosa",
            "pt-BR": "Xhosa",
            "fr-FR": "Xhosa"
        }
    },
    {
        alpha2: "yi",
        label: {
            "en-US": "Yiddish",
            "de-DE": "Jiddisch",
            "pt-BR": "Iídiche",
            "fr-FR": "Yiddish"
        }
    },
    {
        alpha2: "yo",
        label: {
            "en-US": "Yoruba",
            "de-DE": "Yoruba",
            "pt-BR": "Iorubá",
            "fr-FR": "Yoruba"
        }
    },
    {
        alpha2: "za",
        label: {
            "en-US": "Zhuang; Chuang",
            "de-DE": "Zhuang; Chuang",
            "pt-BR": "Zhuang; Chuang",
            "fr-FR": "Zhuang; Chuang"
        }
    },
    {
        alpha2: "zh-Hans",
        label: {
            "en-US": "Chinese (Simplified)",
            "de-DE": "Chinesisch (Vereinfacht)",
            "pt-BR": "Chinês (Simplificado)",
            "fr-FR": "Chinois (Simplifié)"
        }
    },
    {
        alpha2: "zh-Hant",
        label: {
            "en-US": "Chinese (Traditional)",
            "de-DE": "Chinesisch (Traditionell)",
            "pt-BR": "Chinês (Tradicional)",
            "fr-FR": "Chinois (Traditionnel)"
        }
    },
    {
        alpha2: "zu",
        label: {
            "en-US": "Zulu",
            "de-DE": "Zulu",
            "pt-BR": "Zulu",
            "fr-FR": "Zulu"
        }
    }
];
const iso639Identifiers = iso639Languages.map((language)=>language.alpha2);
const getLanguageLabel = (languageCode, locale)=>{
    const language = iso639Languages.find((lang)=>lang.alpha2 === languageCode);
    // Type assertion to tell TypeScript that we know the structure of label
    return language?.label[locale];
};
// Helper function to add language keys to a multi-language object (e.g. survey or question)
// Iterates over the object recursively and adds empty strings for new language keys
const addMultiLanguageLabels = (object, languageSymbols)=>{
    // Helper function to add language keys to a multi-language object
    function addLanguageKeys(obj) {
        languageSymbols.forEach((lang)=>{
            if (!obj.hasOwnProperty(lang)) {
                obj[lang] = ""; // Add empty string for new language keys
            }
        });
    }
    // Recursive function to process an object or array
    function processObject(obj) {
        if (Array.isArray(obj)) {
            obj.forEach((item)=>processObject(item));
        } else if (obj && typeof obj === "object") {
            for(const key in obj){
                if (obj.hasOwnProperty(key)) {
                    if (key === "default" && typeof obj[key] === "string") {
                        addLanguageKeys(obj);
                    } else {
                        processObject(obj[key]);
                    }
                }
            }
        }
    }
    // Start processing the question object
    processObject(object);
    return object;
};
const appLanguages = [
    {
        code: "en-US",
        label: {
            "en-US": "English (US)",
            "de-DE": "Englisch (US)",
            "pt-BR": "Inglês (EUA)",
            "fr-FR": "Anglais (États-Unis)"
        }
    },
    {
        code: "de-DE",
        label: {
            "en-US": "German",
            "de-DE": "Deutsch",
            "pt-BR": "Alemão",
            "fr-FR": "Allemand"
        }
    },
    {
        code: "pt-BR",
        label: {
            "en-US": "Portuguese (Brazil)",
            "de-DE": "Portugiesisch (Brasilien)",
            "pt-BR": "Português (Brasil)",
            "fr-FR": "Portugais (Brésil)"
        }
    },
    {
        code: "fr-FR",
        label: {
            "en-US": "French",
            "de-DE": "Französisch",
            "pt-BR": "Francês",
            "fr-FR": "Français"
        }
    }
];


/***/ }),

/***/ 328730:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G$: () => (/* binding */ getQuestionResponseMapping),
/* harmony export */   fZ: () => (/* binding */ processResponseData),
/* harmony export */   sd: () => (/* binding */ convertResponseValue)
/* harmony export */ });
/* harmony import */ var _i18n_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(921418);
/* harmony import */ var _utils_recall__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(239949);


// function to convert response value of type string | number | string[] or Record<string, string> to string | string[]
const convertResponseValue = (answer, question)=>{
    switch(question.type){
        case "ranking":
        case "fileUpload":
            if (typeof answer === "string") {
                return [
                    answer
                ];
            } else return answer;
        case "pictureSelection":
            if (typeof answer === "string") {
                const imageUrl = question.choices.find((choice)=>choice.id === answer)?.imageUrl;
                return imageUrl ? [
                    imageUrl
                ] : [];
            } else if (Array.isArray(answer)) {
                return answer.map((answerId)=>question.choices.find((choice)=>choice.id === answerId)?.imageUrl).filter((url)=>url !== undefined);
            } else return [];
        default:
            return processResponseData(answer);
    }
};
const getQuestionResponseMapping = (survey, response)=>{
    const questionResponseMapping = [];
    for (const question of survey.questions){
        const answer = response.data[question.id];
        questionResponseMapping.push({
            question: (0,_utils_recall__WEBPACK_IMPORTED_MODULE_0__/* .parseRecallInfo */ .VY)((0,_i18n_utils__WEBPACK_IMPORTED_MODULE_1__/* .getLocalizedValue */ .bT)(question.headline, "default"), response.data),
            response: convertResponseValue(answer, question),
            type: question.type
        });
    }
    return questionResponseMapping;
};
const processResponseData = (responseData)=>{
    switch(typeof responseData){
        case "string":
            return responseData;
        case "number":
            return responseData.toString();
        case "object":
            if (Array.isArray(responseData)) {
                responseData = responseData.filter((item)=>item !== null && item !== undefined && item !== "").join(", ");
                return responseData;
            } else {
                const formattedString = Object.entries(responseData).filter(([_, value])=>value !== "").map(([key, value])=>`${key}: ${value}`).join("\n");
                return formattedString;
            }
        default:
            return "";
    }
};


/***/ }),

/***/ 722515:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HJ: () => (/* binding */ getFormattedDateTimeString),
/* harmony export */   Qr: () => (/* binding */ isValidDateString),
/* harmony export */   yr: () => (/* binding */ diffInDays),
/* harmony export */   zM: () => (/* binding */ formatDateWithOrdinal)
/* harmony export */ });
/* unused harmony exports getMonthName, getOrdinalDate */
const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
// Helper function to calculate difference in days between two dates
const diffInDays = (date1, date2)=>{
    const diffTime = Math.abs(date2.getTime() - date1.getTime());
    return Math.floor(diffTime / (1000 * 60 * 60 * 24));
};
// Helper function to get the month name
const getMonthName = (monthIndex)=>{
    return monthNames[monthIndex];
};
const formatDateWithOrdinal = (date)=>{
    const getOrdinalSuffix = (day)=>{
        const suffixes = [
            "th",
            "st",
            "nd",
            "rd"
        ];
        const relevantDigits = day < 30 ? day % 20 : day % 30;
        return suffixes[relevantDigits <= 3 ? relevantDigits : 0];
    };
    const dayOfWeekNames = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    const dayOfWeek = dayOfWeekNames[date.getDay()];
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
    return `${dayOfWeek}, ${monthNames[monthIndex]} ${day}${getOrdinalSuffix(day)}, ${year}`;
};
// Helper function to format the date with an ordinal suffix
const getOrdinalDate = (date)=>{
    const j = date % 10, k = date % 100;
    if (j === 1 && k !== 11) {
        return date + "st";
    }
    if (j === 2 && k !== 12) {
        return date + "nd";
    }
    if (j === 3 && k !== 13) {
        return date + "rd";
    }
    return date + "th";
};
const isValidDateString = (value)=>{
    const regex = /^(?:\d{4}-\d{2}-\d{2}|\d{2}-\d{2}-\d{4})$/;
    if (!regex.test(value)) {
        return false;
    }
    const date = new Date(value);
    return date;
};
const getFormattedDateTimeString = (date)=>{
    const options = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
    };
    return new Intl.DateTimeFormat("en-CA", options).format(date).replace(",", "");
};


/***/ }),

/***/ 239949:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  VY: () => (/* binding */ parseRecallInfo),
  uD: () => (/* binding */ replaceHeadlineRecall)
});

// UNUSED EXPORTS: checkForEmptyFallBackValue, extractFallbackValue, extractId, extractIds, extractRecallInfo, findRecallInfoById, getFallbackValues, getRecallItems, headlineToRecall, recallToHeadline, replaceRecallInfoWithUnderline

// EXTERNAL MODULE: ../../node_modules/@ungap/structured-clone/esm/index.js + 3 modules
var esm = __webpack_require__(551469);
;// ../../packages/lib/pollyfills/structuredClone.ts

let structuredCloneExport;
if (typeof structuredClone === "undefined") {
    structuredCloneExport = esm/* default */.Ay;
} else {
    // @ts-expect-error
    structuredCloneExport = structuredClone;
}


// EXTERNAL MODULE: ../../packages/lib/utils/datetime.ts
var datetime = __webpack_require__(722515);
;// ../../packages/lib/utils/recall.ts



// Extracts the ID of recall question from a string containing the "recall" pattern.
const extractId = (text)=>{
    const pattern = /#recall:([A-Za-z0-9_-]+)/;
    const match = text.match(pattern);
    if (match && match[1]) {
        return match[1];
    } else {
        return null;
    }
};
// If there are multiple recall infos in a string extracts all recall question IDs from that string and construct an array out of it.
const extractIds = (text)=>{
    const pattern = /#recall:([A-Za-z0-9_-]+)/g;
    const matches = Array.from(text.matchAll(pattern));
    return matches.map((match)=>match[1]).filter((id)=>id !== null);
};
// Extracts the fallback value from a string containing the "fallback" pattern.
const extractFallbackValue = (text)=>{
    const pattern = /fallback:(\S*)#/;
    const match = text.match(pattern);
    if (match && match[1]) {
        return match[1];
    } else {
        return "";
    }
};
// Extracts the complete recall information (ID and fallback) from a headline string.
const extractRecallInfo = (headline, id)=>{
    const idPattern = id ? id : "[A-Za-z0-9_-]+";
    const pattern = new RegExp(`#recall:(${idPattern})\\/fallback:(\\S*)#`);
    const match = headline.match(pattern);
    return match ? match[0] : null;
};
// Finds the recall information by a specific recall question ID within a text.
const findRecallInfoById = (text, id)=>{
    const pattern = new RegExp(`#recall:${id}\\/fallback:(\\S*)#`, "g");
    const match = text.match(pattern);
    return match ? match[0] : null;
};
const getRecallItemLabel = (recallItemId, survey, languageCode)=>{
    const isHiddenField = survey.hiddenFields.fieldIds?.includes(recallItemId);
    if (isHiddenField) return recallItemId;
    const surveyQuestion = survey.questions.find((question)=>question.id === recallItemId);
    if (surveyQuestion) return surveyQuestion.headline[languageCode];
    const variable = survey.variables?.find((variable)=>variable.id === recallItemId);
    if (variable) return variable.name;
};
// Converts recall information in a headline to a corresponding recall question headline, with or without a slash.
const recallToHeadline = (headline, survey, withSlash, languageCode)=>{
    let newHeadline = structuredCloneExport(headline);
    const localizedHeadline = newHeadline[languageCode];
    if (!localizedHeadline?.includes("#recall:")) return headline;
    const replaceNestedRecalls = (text)=>{
        while(text.includes("#recall:")){
            const recallInfo = extractRecallInfo(text);
            if (!recallInfo) break;
            const recallItemId = extractId(recallInfo);
            if (!recallItemId) break;
            let recallItemLabel = getRecallItemLabel(recallItemId, survey, languageCode) || recallItemId;
            while(recallItemLabel.includes("#recall:")){
                const nestedRecallInfo = extractRecallInfo(recallItemLabel);
                if (nestedRecallInfo) {
                    recallItemLabel = recallItemLabel.replace(nestedRecallInfo, "___");
                }
            }
            const replacement = withSlash ? `/${recallItemLabel}\\` : `@${recallItemLabel}`;
            text = text.replace(recallInfo, replacement);
        }
        return text;
    };
    newHeadline[languageCode] = replaceNestedRecalls(localizedHeadline);
    return newHeadline;
};
// Replaces recall information in a survey question's headline with an ___.
const replaceRecallInfoWithUnderline = (label)=>{
    let newLabel = label;
    while(newLabel.includes("#recall:")){
        const recallInfo = extractRecallInfo(newLabel);
        if (recallInfo) {
            newLabel = newLabel.replace(recallInfo, "___");
        }
    }
    return newLabel;
};
// Checks for survey questions with a "recall" pattern but no fallback value.
const checkForEmptyFallBackValue = (survey, language)=>{
    const findRecalls = (text)=>{
        const recalls = text.match(/#recall:[^ ]+/g);
        return recalls && recalls.some((recall)=>!extractFallbackValue(recall));
    };
    for (const question of survey.questions){
        if (findRecalls(getLocalizedValue(question.headline, language)) || question.subheader && findRecalls(getLocalizedValue(question.subheader, language))) {
            return question;
        }
    }
    return null;
};
// Processes each question in a survey to ensure headlines are formatted correctly for recall and return the modified survey.
const replaceHeadlineRecall = (survey, language)=>{
    const modifiedSurvey = structuredCloneExport(survey);
    modifiedSurvey.questions.forEach((question)=>{
        question.headline = recallToHeadline(question.headline, modifiedSurvey, false, language);
    });
    return modifiedSurvey;
};
// Retrieves an array of survey questions referenced in a text containing recall information.
const getRecallItems = (text, survey, languageCode)=>{
    if (!text.includes("#recall:")) return [];
    const ids = extractIds(text);
    let recallItems = [];
    ids.forEach((recallItemId)=>{
        const isHiddenField = survey.hiddenFields.fieldIds?.includes(recallItemId);
        const isSurveyQuestion = survey.questions.find((question)=>question.id === recallItemId);
        const isVariable = survey.variables.find((variable)=>variable.id === recallItemId);
        const recallItemLabel = getRecallItemLabel(recallItemId, survey, languageCode);
        const getRecallItemType = ()=>{
            if (isHiddenField) return "hiddenField";
            if (isSurveyQuestion) return "question";
            if (isVariable) return "variable";
        };
        if (recallItemLabel) {
            let recallItemLabelTemp = recallItemLabel;
            recallItemLabelTemp = replaceRecallInfoWithUnderline(recallItemLabelTemp);
            const recallItemType = getRecallItemType();
            if (recallItemType) {
                recallItems.push({
                    id: recallItemId,
                    label: recallItemLabelTemp,
                    type: recallItemType
                });
            }
        }
    });
    return recallItems;
};
// Constructs a fallbacks object from a text containing multiple recall and fallback patterns.
const getFallbackValues = (text)=>{
    if (!text.includes("#recall:")) return {};
    const pattern = /#recall:([A-Za-z0-9_-]+)\/fallback:([\S*]+)#/g;
    let match;
    const fallbacks = {};
    while((match = pattern.exec(text)) !== null){
        const id = match[1];
        const fallbackValue = match[2];
        fallbacks[id] = fallbackValue;
    }
    return fallbacks;
};
// Transforms headlines in a text to their corresponding recall information.
const headlineToRecall = (text, recallItems, fallbacks)=>{
    recallItems.forEach((recallItem)=>{
        const recallInfo = `#recall:${recallItem.id}/fallback:${fallbacks[recallItem.id]}#`;
        text = text.replace(`@${recallItem.label}`, recallInfo);
    });
    return text;
};
const parseRecallInfo = (text, responseData, variables, withSlash = false)=>{
    let modifiedText = text;
    const questionIds = responseData ? Object.keys(responseData) : [];
    const variableIds = Object.keys(variables || {});
    if (variables && variableIds.length > 0) {
        variableIds.forEach((variableId)=>{
            const recallPattern = `#recall:`;
            while(modifiedText.includes(recallPattern)){
                const recallInfo = extractRecallInfo(modifiedText, variableId);
                if (!recallInfo) break; // Exit the loop if no recall info is found
                const recallItemId = extractId(recallInfo);
                if (!recallItemId) continue; // Skip to the next iteration if no ID could be extracted
                const fallback = extractFallbackValue(recallInfo).replaceAll("nbsp", " ");
                let value = variables[variableId] || fallback;
                value = value.toString();
                if (withSlash) {
                    modifiedText = modifiedText.replace(recallInfo, "#/" + value + "\\#");
                } else {
                    modifiedText = modifiedText.replace(recallInfo, value);
                }
            }
        });
    }
    if (responseData && questionIds.length > 0) {
        while(modifiedText.includes("recall:")){
            const recallInfo = extractRecallInfo(modifiedText);
            if (!recallInfo) break; // Exit the loop if no recall info is found
            const recallItemId = extractId(recallInfo);
            if (!recallItemId) return modifiedText; // Return the text if no ID could be extracted
            const fallback = extractFallbackValue(recallInfo).replaceAll("nbsp", " ");
            let value;
            // Fetching value from responseData based on recallItemId
            if (responseData[recallItemId]) {
                value = responseData[recallItemId] ?? fallback;
            }
            // Additional value formatting if it exists
            if (value) {
                if ((0,datetime/* isValidDateString */.Qr)(value)) {
                    value = (0,datetime/* formatDateWithOrdinal */.zM)(new Date(value));
                } else if (Array.isArray(value)) {
                    value = value.filter((item)=>item).join(", "); // Filters out empty values and joins with a comma
                }
            }
            if (withSlash) {
                modifiedText = modifiedText.replace(recallInfo, "#/" + (value ?? fallback) + "\\#");
            } else {
                modifiedText = modifiedText.replace(recallInfo, value ?? fallback);
            }
        }
    }
    return modifiedText;
};


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


/***/ })

};
;