"use strict";
exports.id = 8015;
exports.ids = [8015];
exports.modules = {

/***/ 778015:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Gh: () => (/* binding */ sendEmailCustomizationPreviewEmail),
  OB: () => (/* binding */ sendEmbedSurveyPreviewEmail),
  bE: () => (/* binding */ sendForgotPasswordEmail),
  lO: () => (/* binding */ sendInviteAcceptedEmail),
  S0: () => (/* binding */ sendInviteMemberEmail),
  Ah: () => (/* binding */ sendLinkSurveyToVerifiedEmail),
  y: () => (/* binding */ sendPasswordResetNotifyEmail),
  kH: () => (/* binding */ sendVerificationEmail)
});

// UNUSED EXPORTS: IS_SMTP_CONFIGURED, sendEmail, sendFollowUpEmail, sendNoLiveSurveyNotificationEmail, sendResponseFinishedEmail, sendWeeklySummaryNotificationEmail

// EXTERNAL MODULE: ../../node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-runtime.js
var react_jsx_runtime = __webpack_require__(470306);
// EXTERNAL MODULE: ./tolgee/server.tsx + 3 modules
var server = __webpack_require__(380145);
// EXTERNAL MODULE: ../../node_modules/@react-email/container/dist/index.mjs
var dist = __webpack_require__(117085);
// EXTERNAL MODULE: ../../node_modules/@react-email/heading/dist/index.mjs
var heading_dist = __webpack_require__(93358);
// EXTERNAL MODULE: ../../node_modules/@react-email/text/dist/index.mjs
var text_dist = __webpack_require__(593567);
// EXTERNAL MODULE: ../../node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js
var react = __webpack_require__(645625);
// EXTERNAL MODULE: ../../node_modules/@react-email/html/dist/index.mjs
var html_dist = __webpack_require__(737077);
// EXTERNAL MODULE: ../../node_modules/@react-email/tailwind/dist/index.mjs
var tailwind_dist = __webpack_require__(213902);
// EXTERNAL MODULE: ../../node_modules/@react-email/body/dist/index.mjs
var body_dist = __webpack_require__(484718);
// EXTERNAL MODULE: ../../node_modules/@react-email/section/dist/index.mjs
var section_dist = __webpack_require__(473201);
// EXTERNAL MODULE: ../../node_modules/@react-email/link/dist/index.mjs
var link_dist = __webpack_require__(899218);
// EXTERNAL MODULE: ../../node_modules/@react-email/img/dist/index.mjs
var img_dist = __webpack_require__(707993);
// EXTERNAL MODULE: ../../packages/lib/constants.ts
var constants = __webpack_require__(711344);
;// ./modules/email/components/email-template.tsx



const fbLogoUrl = "https://s3.eu-central-1.amazonaws.com/listmonk-formbricks/Formbricks-Light-transparent.png";
const logoLink = "https://formbricks.com?utm_source=email_header&utm_medium=email";
async function email_template_EmailTemplate({ children, logoUrl, t }) {
    const isDefaultLogo = !logoUrl || logoUrl === fbLogoUrl;
    return /*#__PURE__*/ (0,react_jsx_runtime.jsx)(html_dist/* Html */.E, {
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
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(dist/* Container */.m, {
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





async function EmailCustomizationPreviewEmail({ userName, logoUrl }) {
    const t = await (0,server/* getTranslate */.r)();
    return /*#__PURE__*/ (0,react_jsx_runtime.jsx)(email_template_EmailTemplate, {
        logoUrl: logoUrl,
        t: t,
        children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(dist/* Container */.m, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(heading_dist/* Heading */.D, {
                    children: t("emails.email_customization_preview_email_heading", {
                        userName
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(text_dist/* Text */.E, {
                    children: t("emails.email_customization_preview_email_text")
                })
            ]
        })
    });
}
/* harmony default export */ const email_customization_preview_email = ((/* unused pure expression or super */ null && (EmailCustomizationPreviewEmail)));

// EXTERNAL MODULE: ../../node_modules/@react-email/render/dist/node/index.mjs + 31 modules
var node = __webpack_require__(65316);
// EXTERNAL MODULE: ../../node_modules/nodemailer/lib/nodemailer.js
var nodemailer = __webpack_require__(823419);
// EXTERNAL MODULE: ../../packages/lib/jwt.ts
var jwt = __webpack_require__(394564);
// EXTERNAL MODULE: ../../packages/types/errors.ts
var errors = __webpack_require__(207798);
// EXTERNAL MODULE: ../../node_modules/@react-email/button/dist/index.mjs
var button_dist = __webpack_require__(389082);
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



function EmailFooter({ t }) {
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(text_dist/* Text */.E, {
        children: [
            t("emails.email_footer_text_1"),
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("br", {}),
            t("emails.email_footer_text_2")
        ]
    });
}
/* harmony default export */ const email_footer = ((/* unused pure expression or super */ null && (EmailFooter)));

;// ./modules/email/emails/auth/forgot-password-email.tsx







async function ForgotPasswordEmail({ verifyLink }) {
    const t = await (0,server/* getTranslate */.r)();
    return /*#__PURE__*/ (0,react_jsx_runtime.jsx)(email_template_EmailTemplate, {
        t: t,
        children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(dist/* Container */.m, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(heading_dist/* Heading */.D, {
                    children: t("emails.forgot_password_email_heading")
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(text_dist/* Text */.E, {
                    children: t("emails.forgot_password_email_text")
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(email_button_EmailButton, {
                    href: verifyLink,
                    label: t("emails.forgot_password_email_change_password")
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(text_dist/* Text */.E, {
                    className: "font-bold",
                    children: t("emails.forgot_password_email_link_valid_for_24_hours")
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(text_dist/* Text */.E, {
                    className: "mb-0",
                    children: t("emails.forgot_password_email_did_not_request")
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(EmailFooter, {
                    t: t
                })
            ]
        })
    });
}
/* harmony default export */ const forgot_password_email = ((/* unused pure expression or super */ null && (ForgotPasswordEmail)));

;// ./modules/email/emails/auth/password-reset-notify-email.tsx






async function PasswordResetNotifyEmail() {
    const t = await (0,server/* getTranslate */.r)();
    return /*#__PURE__*/ (0,react_jsx_runtime.jsx)(email_template_EmailTemplate, {
        t: t,
        children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(dist/* Container */.m, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(heading_dist/* Heading */.D, {
                    children: t("emails.password_changed_email_heading")
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(text_dist/* Text */.E, {
                    children: t("emails.password_changed_email_text")
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(EmailFooter, {
                    t: t
                })
            ]
        })
    });
}
/* harmony default export */ const password_reset_notify_email = ((/* unused pure expression or super */ null && (PasswordResetNotifyEmail)));

;// ./modules/email/emails/auth/verification-email.tsx







async function VerificationEmail({ verifyLink, verificationRequestLink }) {
    const t = await (0,server/* getTranslate */.r)();
    return /*#__PURE__*/ (0,react_jsx_runtime.jsx)(email_template_EmailTemplate, {
        t: t,
        children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(dist/* Container */.m, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(heading_dist/* Heading */.D, {
                    children: t("emails.verification_email_heading")
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(text_dist/* Text */.E, {
                    children: t("emails.verification_email_text")
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(email_button_EmailButton, {
                    href: verifyLink,
                    label: t("emails.verification_email_verify_email")
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(text_dist/* Text */.E, {
                    children: t("emails.verification_email_click_on_this_link")
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(link_dist/* Link */.N, {
                    className: "break-all text-black",
                    href: verifyLink,
                    children: verifyLink
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(text_dist/* Text */.E, {
                    className: "font-bold",
                    children: t("emails.verification_email_link_valid_for_24_hours")
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(text_dist/* Text */.E, {
                    children: [
                        t("emails.verification_email_if_expired_request_new_token"),
                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)(link_dist/* Link */.N, {
                            className: "text-black underline",
                            href: verificationRequestLink,
                            children: t("emails.verification_email_request_new_verification")
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(EmailFooter, {
                    t: t
                })
            ]
        })
    });
}
/* harmony default export */ const verification_email = ((/* unused pure expression or super */ null && (VerificationEmail)));

;// ./modules/email/emails/invite/invite-accepted-email.tsx






async function InviteAcceptedEmail({ inviterName, inviteeName }) {
    const t = await (0,server/* getTranslate */.r)();
    return /*#__PURE__*/ (0,react_jsx_runtime.jsx)(email_template_EmailTemplate, {
        t: t,
        children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(dist/* Container */.m, {
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
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(EmailFooter, {
                    t: t
                })
            ]
        })
    });
}
/* harmony default export */ const invite_accepted_email = ((/* unused pure expression or super */ null && (InviteAcceptedEmail)));

;// ./modules/email/emails/invite/invite-email.tsx







async function InviteEmail({ inviteeName, inviterName, verifyLink }) {
    const t = await (0,server/* getTranslate */.r)();
    return /*#__PURE__*/ (0,react_jsx_runtime.jsx)(email_template_EmailTemplate, {
        t: t,
        children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(dist/* Container */.m, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(text_dist/* Text */.E, {
                    children: t("emails.invite_email_heading", {
                        inviteeName
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(text_dist/* Text */.E, {
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
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(email_button_EmailButton, {
                    href: verifyLink,
                    label: t("emails.invite_email_button_label")
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(EmailFooter, {
                    t: t
                })
            ]
        })
    });
}
/* harmony default export */ const invite_email = ((/* unused pure expression or super */ null && (InviteEmail)));

;// ./modules/email/emails/invite/onboarding-invite-email.tsx






async function OnboardingInviteEmail({ inviteMessage, inviterName, verifyLink, inviteeName }) {
    const t = await (0,server/* getTranslate */.r)();
    return /*#__PURE__*/ (0,react_jsx_runtime.jsx)(email_template_EmailTemplate, {
        t: t,
        children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(dist/* Container */.m, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(heading_dist/* Heading */.D, {
                    children: t("emails.onboarding_invite_email_heading", {
                        inviteeName
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(text_dist/* Text */.E, {
                    children: inviteMessage
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(text_dist/* Text */.E, {
                    className: "font-medium",
                    children: t("emails.onboarding_invite_email_get_started_in_minutes")
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("ol", {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)("li", {
                            children: t("emails.onboarding_invite_email_create_account", {
                                inviterName
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)("li", {
                            children: t("emails.onboarding_invite_email_connect_formbricks")
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("li", {
                            children: [
                                t("emails.onboarding_invite_email_done"),
                                " ✅"
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(email_button_EmailButton, {
                    href: verifyLink,
                    label: t("emails.onboarding_invite_email_button_label", {
                        inviterName
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(EmailFooter, {
                    t: t
                })
            ]
        })
    });
}
/* harmony default export */ const onboarding_invite_email = ((/* unused pure expression or super */ null && (OnboardingInviteEmail)));

;// ./modules/email/emails/survey/embed-survey-preview-email.tsx





async function EmbedSurveyPreviewEmail({ html, environmentId, logoUrl }) {
    const t = await (0,server/* getTranslate */.r)();
    return /*#__PURE__*/ (0,react_jsx_runtime.jsx)(email_template_EmailTemplate, {
        logoUrl: logoUrl,
        t: t,
        children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(dist/* Container */.m, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(heading_dist/* Heading */.D, {
                    children: t("emails.embed_survey_preview_email_heading")
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(text_dist/* Text */.E, {
                    children: t("emails.embed_survey_preview_email_text")
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(text_dist/* Text */.E, {
                    className: "text-sm",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)("b", {
                            children: t("emails.embed_survey_preview_email_didnt_request")
                        }),
                        " ",
                        t("emails.embed_survey_preview_email_fight_spam")
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                    dangerouslySetInnerHTML: {
                        __html: html
                    }
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(text_dist/* Text */.E, {
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
/* harmony default export */ const embed_survey_preview_email = ((/* unused pure expression or super */ null && (EmbedSurveyPreviewEmail)));

// EXTERNAL MODULE: ../../node_modules/isomorphic-dompurify/index.js
var isomorphic_dompurify = __webpack_require__(20016);
;// ./modules/email/emails/survey/follow-up.tsx





async function follow_up_FollowUpEmail({ html, logoUrl }) {
    const t = await getTranslate();
    return /*#__PURE__*/ _jsx(Html, {
        children: /*#__PURE__*/ _jsx(Tailwind, {
            children: /*#__PURE__*/ _jsxs(Body, {
                className: "m-0 h-full w-full justify-center bg-slate-50 p-6 text-center text-base font-medium text-slate-800",
                style: {
                    fontFamily: "'Jost', 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'sans-serif'"
                },
                children: [
                    logoUrl && /*#__PURE__*/ _jsx(Section, {
                        children: /*#__PURE__*/ _jsx(Img, {
                            alt: "Logo",
                            className: "mx-auto max-h-[100px] w-80 object-contain",
                            src: logoUrl
                        })
                    }),
                    /*#__PURE__*/ _jsx(Container, {
                        className: "mx-auto my-8 max-w-xl rounded-md bg-white p-4 text-left",
                        children: /*#__PURE__*/ _jsx("div", {
                            dangerouslySetInnerHTML: {
                                __html: dompurify.sanitize(html, {
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
                    /*#__PURE__*/ _jsxs(Section, {
                        className: "mt-4 text-center text-sm",
                        children: [
                            /*#__PURE__*/ _jsx(Text, {
                                className: "m-0 font-normal text-slate-500",
                                children: t("emails.powered_by_formbricks")
                            }),
                            IMPRINT_ADDRESS && /*#__PURE__*/ _jsx(Text, {
                                className: "m-0 font-normal text-slate-500 opacity-50",
                                children: IMPRINT_ADDRESS
                            }),
                            /*#__PURE__*/ _jsxs(Text, {
                                className: "m-0 font-normal text-slate-500 opacity-50",
                                children: [
                                    IMPRINT_URL && /*#__PURE__*/ _jsx(Link, {
                                        href: IMPRINT_URL,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "text-slate-500",
                                        children: t("emails.imprint")
                                    }),
                                    IMPRINT_URL && PRIVACY_URL && "•",
                                    PRIVACY_URL && /*#__PURE__*/ _jsx(Link, {
                                        href: PRIVACY_URL,
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







async function LinkSurveyEmail({ surveyName, surveyLink, logoUrl }) {
    const t = await (0,server/* getTranslate */.r)();
    return /*#__PURE__*/ (0,react_jsx_runtime.jsx)(email_template_EmailTemplate, {
        logoUrl: logoUrl,
        t: t,
        children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(dist/* Container */.m, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(heading_dist/* Heading */.D, {
                    children: t("emails.verification_email_hey")
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(text_dist/* Text */.E, {
                    children: t("emails.verification_email_thanks")
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(text_dist/* Text */.E, {
                    children: t("emails.verification_email_to_fill_survey")
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(email_button_EmailButton, {
                    href: surveyLink,
                    label: t("emails.verification_email_take_survey")
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(text_dist/* Text */.E, {
                    className: "text-xs text-slate-400",
                    children: [
                        t("emails.verification_email_survey_name"),
                        ": ",
                        surveyName
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(EmailFooter, {
                    t: t
                })
            ]
        })
    });
}
/* harmony default export */ const link_survey_email = ((/* unused pure expression or super */ null && (LinkSurveyEmail)));

;// ./modules/email/emails/survey/response-finished-email.tsx









const response_finished_email_renderEmailResponseValue = async (response, questionType)=>{
    switch(questionType){
        case TSurveyQuestionTypeEnum.FileUpload:
            return /*#__PURE__*/ _jsx(Container, {
                children: Array.isArray(response) && response.map((responseItem)=>/*#__PURE__*/ _jsxs(Link, {
                        className: "mt-2 flex flex-col items-center justify-center rounded-lg bg-slate-200 p-2 text-black shadow-sm",
                        href: responseItem,
                        children: [
                            /*#__PURE__*/ _jsx(FileIcon, {}),
                            /*#__PURE__*/ _jsx(Text, {
                                className: "mx-auto mb-0 truncate",
                                children: getOriginalFileNameFromUrl(responseItem)
                            })
                        ]
                    }, responseItem))
            });
        case TSurveyQuestionTypeEnum.PictureSelection:
            return /*#__PURE__*/ _jsx(Container, {
                children: /*#__PURE__*/ _jsx(Row, {
                    children: Array.isArray(response) && response.map((responseItem)=>/*#__PURE__*/ _jsx(Column, {
                            children: /*#__PURE__*/ _jsx(Img, {
                                alt: responseItem.split("/").pop(),
                                className: "m-2 h-28",
                                src: responseItem
                            })
                        }, responseItem))
                })
            });
        case TSurveyQuestionTypeEnum.Ranking:
            return /*#__PURE__*/ _jsx(Container, {
                children: /*#__PURE__*/ _jsx(Row, {
                    className: "my-1 font-semibold text-slate-700",
                    dir: "auto",
                    children: Array.isArray(response) && response.map((item, index)=>item && /*#__PURE__*/ _jsxs(Row, {
                            className: "mb-1 flex items-center",
                            children: [
                                /*#__PURE__*/ _jsxs(Column, {
                                    className: "w-6 text-slate-400",
                                    children: [
                                        "#",
                                        index + 1
                                    ]
                                }),
                                /*#__PURE__*/ _jsx(Column, {
                                    className: "rounded bg-slate-100 px-2 py-1",
                                    children: item
                                })
                            ]
                        }, item))
                })
            });
        default:
            return /*#__PURE__*/ _jsx(Text, {
                className: "mt-0 whitespace-pre-wrap break-words font-bold",
                children: response
            });
    }
};
async function response_finished_email_ResponseFinishedEmail({ survey, responseCount, response, WEBAPP_URL, environmentId, organization }) {
    const questions = getQuestionResponseMapping(survey, response);
    const t = await getTranslate();
    return /*#__PURE__*/ _jsx(EmailTemplate, {
        t: t,
        children: /*#__PURE__*/ _jsx(Container, {
            children: /*#__PURE__*/ _jsx(Row, {
                children: /*#__PURE__*/ _jsxs(Column, {
                    children: [
                        /*#__PURE__*/ _jsxs(Text, {
                            className: "mb-4 text-3xl font-bold",
                            children: [
                                " ",
                                t("emails.survey_response_finished_email_hey")
                            ]
                        }),
                        /*#__PURE__*/ _jsx(Text, {
                            className: "mb-4",
                            children: t("emails.survey_response_finished_email_congrats", {
                                surveyName: survey.name
                            })
                        }),
                        /*#__PURE__*/ _jsx(Hr, {}),
                        questions.map((question)=>{
                            if (!question.response) return;
                            return /*#__PURE__*/ _jsx(Row, {
                                children: /*#__PURE__*/ _jsxs(Column, {
                                    className: "w-full",
                                    children: [
                                        /*#__PURE__*/ _jsx(Text, {
                                            className: "mb-2 font-medium",
                                            children: question.question
                                        }),
                                        response_finished_email_renderEmailResponseValue(question.response, question.type)
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
                                return /*#__PURE__*/ _jsx(Row, {
                                    children: /*#__PURE__*/ _jsxs(Column, {
                                        className: "w-full",
                                        children: [
                                            /*#__PURE__*/ _jsxs(Text, {
                                                className: "mb-2 flex items-center gap-2 font-medium",
                                                children: [
                                                    variable.type === "number" ? /*#__PURE__*/ _jsx(FileDigitIcon, {
                                                        className: "h-4 w-4"
                                                    }) : /*#__PURE__*/ _jsx(FileType2Icon, {
                                                        className: "h-4 w-4"
                                                    }),
                                                    variable.name
                                                ]
                                            }),
                                            /*#__PURE__*/ _jsx(Text, {
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
                                return /*#__PURE__*/ _jsx(Row, {
                                    children: /*#__PURE__*/ _jsxs(Column, {
                                        className: "w-full",
                                        children: [
                                            /*#__PURE__*/ _jsxs(Text, {
                                                className: "mb-2 flex items-center gap-2 font-medium",
                                                children: [
                                                    hiddenFieldId,
                                                    " ",
                                                    /*#__PURE__*/ _jsx(EyeOffIcon, {})
                                                ]
                                            }),
                                            /*#__PURE__*/ _jsx(Text, {
                                                className: "mt-0 whitespace-pre-wrap break-words font-bold",
                                                children: hiddenFieldResponse
                                            })
                                        ]
                                    })
                                }, hiddenFieldId);
                            }
                            return null;
                        }),
                        /*#__PURE__*/ _jsx(EmailButton, {
                            href: `${WEBAPP_URL}/environments/${environmentId}/surveys/${survey.id}/responses?utm_source=email_notification&utm_medium=email&utm_content=view_responses_CTA`,
                            label: responseCount > 1 ? t("emails.survey_response_finished_email_view_more_responses", {
                                responseCount: String(responseCount - 1)
                            }) : t("emails.survey_response_finished_email_view_survey_summary")
                        }),
                        /*#__PURE__*/ _jsx(Hr, {}),
                        /*#__PURE__*/ _jsxs(Section, {
                            className: "mt-4 text-center text-sm",
                            children: [
                                /*#__PURE__*/ _jsx(Text, {
                                    className: "font-bold",
                                    children: t("emails.survey_response_finished_email_dont_want_notifications")
                                }),
                                /*#__PURE__*/ _jsxs(Text, {
                                    className: "mb-0",
                                    children: [
                                        t("emails.survey_response_finished_email_turn_off_notifications"),
                                        /*#__PURE__*/ _jsx(Link, {
                                            className: "text-black underline",
                                            href: `${WEBAPP_URL}/environments/${environmentId}/settings/notifications?type=alert&elementId=${survey.id}`,
                                            children: t("emails.survey_response_finished_email_this_form")
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsx(Text, {
                                    className: "mt-0",
                                    children: /*#__PURE__*/ _jsx(Link, {
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
    return /*#__PURE__*/ _jsxs("svg", {
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
            /*#__PURE__*/ _jsx("path", {
                d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M14 2v4a2 2 0 0 0 2 2h4"
            })
        ]
    });
}
function EyeOffIcon() {
    return /*#__PURE__*/ _jsxs("svg", {
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
            /*#__PURE__*/ _jsx("path", {
                d: "M9.88 9.88a3 3 0 1 0 4.24 4.24"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"
            }),
            /*#__PURE__*/ _jsx("line", {
                x1: "2",
                x2: "22",
                y1: "2",
                y2: "22"
            })
        ]
    });
}

;// ./modules/email/emails/weekly-summary/notification-footer.tsx





async function notification_footer_NotificationFooter({ environmentId }) {
    const t = await getTranslate();
    return /*#__PURE__*/ _jsx(Tailwind, {
        children: /*#__PURE__*/ _jsxs(Container, {
            className: "w-full",
            children: [
                /*#__PURE__*/ _jsx(Text, {
                    className: "mb-0 pt-4 font-medium",
                    children: t("emails.notification_footer_all_the_best")
                }),
                /*#__PURE__*/ _jsx(Text, {
                    className: "mt-0",
                    children: t("emails.notification_footer_the_formbricks_team")
                }),
                /*#__PURE__*/ _jsx(Container, {
                    className: "mt-0 w-full rounded-md bg-slate-100 px-4 text-center text-xs leading-5",
                    style: {
                        fontStyle: "italic"
                    },
                    children: /*#__PURE__*/ _jsxs(Text, {
                        children: [
                            t("emails.notification_footer_to_halt_weekly_updates"),
                            /*#__PURE__*/ _jsx(Link, {
                                className: "text-black underline",
                                href: `${WEBAPP_URL}/environments/${environmentId}/settings/notifications`,
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







async function create_reminder_notification_body_CreateReminderNotificationBody({ notificationData }) {
    const t = await getTranslate();
    return /*#__PURE__*/ _jsxs(Container, {
        children: [
            /*#__PURE__*/ _jsx(Text, {
                children: t("emails.weekly_summary_create_reminder_notification_body_text", {
                    projectName: notificationData.projectName
                })
            }),
            /*#__PURE__*/ _jsx(Text, {
                className: "pt-4 font-bold",
                children: t("emails.weekly_summary_create_reminder_notification_body_dont_let_a_week_pass")
            }),
            /*#__PURE__*/ _jsx(EmailButton, {
                href: `${WEBAPP_URL}/environments/${notificationData.environmentId}/surveys?utm_source=weekly&utm_medium=email&utm_content=SetupANewSurveyCTA`,
                label: t("emails.weekly_summary_create_reminder_notification_body_setup_a_new_survey")
            }),
            /*#__PURE__*/ _jsxs(Text, {
                className: "pt-4",
                children: [
                    t("emails.weekly_summary_create_reminder_notification_body_need_help"),
                    /*#__PURE__*/ _jsx("a", {
                        href: "https://cal.com/johannes/15",
                        children: t("emails.weekly_summary_create_reminder_notification_body_cal_slot")
                    }),
                    t("emails.weekly_summary_create_reminder_notification_body_reply_email")
                ]
            }),
            /*#__PURE__*/ _jsx(NotificationFooter, {
                environmentId: notificationData.environmentId
            })
        ]
    });
}

;// ./modules/email/emails/weekly-summary/notification-header.tsx




async function notification_header_NotificationHeader({ projectName, startDate, endDate, startYear, endYear }) {
    const t = await getTranslate();
    const getNotificationHeaderimePeriod = ()=>{
        if (startYear === endYear) {
            return /*#__PURE__*/ _jsxs(Text, {
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
        return /*#__PURE__*/ _jsxs(Text, {
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
    return /*#__PURE__*/ _jsx(Container, {
        children: /*#__PURE__*/ _jsxs("div", {
            className: "block px-0 py-4",
            children: [
                /*#__PURE__*/ _jsx("div", {
                    className: "float-left mt-2",
                    children: /*#__PURE__*/ _jsx(Heading, {
                        className: "m-0",
                        children: t("emails.notification_header_hey")
                    })
                }),
                /*#__PURE__*/ _jsxs("div", {
                    className: "float-right",
                    children: [
                        /*#__PURE__*/ _jsxs(Text, {
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




function no_live_survey_notification_email_NoLiveSurveyNotificationEmail({ notificationData, startDate, endDate, startYear, endYear }) {
    return /*#__PURE__*/ _jsxs("div", {
        children: [
            /*#__PURE__*/ _jsx(NotificationHeader, {
                endDate: endDate,
                endYear: endYear,
                projectName: notificationData.projectName,
                startDate: startDate,
                startYear: startYear
            }),
            /*#__PURE__*/ _jsx(CreateReminderNotificationBody, {
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
async function live_survey_notification_LiveSurveyNotification({ environmentId, surveys }) {
    const t = await getTranslate();
    const createSurveyFields = (surveyResponses)=>{
        if (surveyResponses.length === 0) {
            return /*#__PURE__*/ _jsx(Container, {
                className: "mt-4",
                children: /*#__PURE__*/ _jsx(Text, {
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
            surveyFields.push(/*#__PURE__*/ _jsxs(Container, {
                className: "mt-4",
                children: [
                    /*#__PURE__*/ _jsx(Text, {
                        className: "m-0",
                        children: surveyResponse.headline
                    }),
                    renderEmailResponseValue(surveyResponse.responseValue, surveyResponse.questionType)
                ]
            }, `${index.toString()}-${surveyResponse.headline}`));
            // Add <hr/> only when there are 2 or more responses to display, and it's not the last response
            if (responseCount >= 2 && index < responseCount - 1) {
                surveyFields.push(/*#__PURE__*/ _jsx(Hr, {}, `hr-${index.toString()}`));
            }
        });
        return surveyFields;
    };
    if (!surveys.length) return [];
    return surveys.map((survey)=>{
        const displayStatus = convertSurveyStatus(survey.status, t);
        const isInProgress = displayStatus === "In Progress";
        const noResponseLastWeek = isInProgress && survey.responses.length === 0;
        return /*#__PURE__*/ _jsx(Tailwind, {
            children: /*#__PURE__*/ _jsxs(Container, {
                className: "mt-12",
                children: [
                    /*#__PURE__*/ _jsx(Text, {
                        className: "mb-0 inline",
                        children: /*#__PURE__*/ _jsx(Link, {
                            className: "text-xl text-black underline",
                            href: `${WEBAPP_URL}/environments/${environmentId}/surveys/${survey.id}/responses?utm_source=weekly&utm_medium=email&utm_content=ViewResponsesCTA`,
                            children: survey.name
                        })
                    }),
                    /*#__PURE__*/ _jsx(Text, {
                        className: `ml-2 inline ${isInProgress ? "bg-green-400 text-slate-100" : "bg-slate-300 text-blue-800"} rounded-full px-2 py-1 text-sm`,
                        children: displayStatus
                    }),
                    noResponseLastWeek ? /*#__PURE__*/ _jsx(Text, {
                        children: t("emails.live_survey_notification_no_new_response")
                    }) : createSurveyFields(survey.responses),
                    survey.responseCount > 0 && /*#__PURE__*/ _jsx(Container, {
                        className: "mt-4 block",
                        children: /*#__PURE__*/ _jsx(EmailButton, {
                            href: `${WEBAPP_URL}/environments/${environmentId}/surveys/${survey.id}/responses?utm_source=weekly&utm_medium=email&utm_content=ViewResponsesCTA`,
                            label: noResponseLastWeek ? t("emails.live_survey_notification_view_previous_responses") : getButtonLabel(survey.responseCount, t)
                        })
                    })
                ]
            })
        }, survey.id);
    });
}

;// ./modules/email/emails/weekly-summary/notification-insight.tsx




async function notification_insight_NotificationInsight({ insights }) {
    const t = await getTranslate();
    return /*#__PURE__*/ _jsx(Container, {
        children: /*#__PURE__*/ _jsx(Section, {
            className: "my-4 rounded-md bg-slate-100",
            children: /*#__PURE__*/ _jsxs(Row, {
                children: [
                    /*#__PURE__*/ _jsxs(Column, {
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ _jsx(Text, {
                                className: "text-sm",
                                children: t("emails.notification_insight_surveys")
                            }),
                            /*#__PURE__*/ _jsx(Text, {
                                className: "text-lg font-bold",
                                children: insights.numLiveSurvey
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxs(Column, {
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ _jsx(Text, {
                                className: "text-sm",
                                children: t("emails.notification_insight_displays")
                            }),
                            /*#__PURE__*/ _jsx(Text, {
                                className: "text-lg font-bold",
                                children: insights.totalDisplays
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxs(Column, {
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ _jsx(Text, {
                                className: "text-sm",
                                children: t("emails.notification_insight_responses")
                            }),
                            /*#__PURE__*/ _jsx(Text, {
                                className: "text-lg font-bold",
                                children: insights.totalResponses
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxs(Column, {
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ _jsx(Text, {
                                className: "text-sm",
                                children: t("emails.notification_insight_completed")
                            }),
                            /*#__PURE__*/ _jsx(Text, {
                                className: "text-lg font-bold",
                                children: insights.totalCompletedResponses
                            })
                        ]
                    }),
                    insights.totalDisplays !== 0 ? /*#__PURE__*/ _jsxs(Column, {
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ _jsx(Text, {
                                className: "text-sm",
                                children: t("emails.notification_insight_completion_rate")
                            }),
                            /*#__PURE__*/ _jsxs(Text, {
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







function weekly_summary_notification_email_WeeklySummaryNotificationEmail({ notificationData, startDate, endDate, startYear, endYear, t }) {
    return /*#__PURE__*/ _jsxs(EmailTemplate, {
        t: t,
        children: [
            /*#__PURE__*/ _jsx(NotificationHeader, {
                endDate: endDate,
                endYear: endYear,
                projectName: notificationData.projectName,
                startDate: startDate,
                startYear: startYear
            }),
            /*#__PURE__*/ _jsx(NotificationInsight, {
                insights: notificationData.insights
            }),
            /*#__PURE__*/ _jsx(LiveSurveyNotification, {
                environmentId: notificationData.environmentId,
                surveys: notificationData.surveys
            }),
            /*#__PURE__*/ _jsx(NotificationFooter, {
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
        const t = await (0,server/* getTranslate */.r)();
        const token = (0,jwt/* createToken */.Ey)(id, email, {
            expiresIn: "1d"
        });
        const verifyLink = `${constants/* WEBAPP_URL */.YW}/auth/verify?token=${encodeURIComponent(token)}`;
        const verificationRequestLink = `${constants/* WEBAPP_URL */.YW}/auth/verification-requested?token=${encodeURIComponent(token)}`;
        const html = await (0,node/* render */.XX)(await VerificationEmail({
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
    const t = await (0,server/* getTranslate */.r)();
    const token = (0,jwt/* createToken */.Ey)(user.id, user.email, {
        expiresIn: "1d"
    });
    const verifyLink = `${constants/* WEBAPP_URL */.YW}/auth/forgot-password/reset?token=${encodeURIComponent(token)}`;
    const html = await (0,node/* render */.XX)(await ForgotPasswordEmail({
        verifyLink
    }));
    return await sendEmail({
        to: user.email,
        subject: t("emails.forgot_password_email_subject"),
        html
    });
};
const sendPasswordResetNotifyEmail = async (user)=>{
    const t = await (0,server/* getTranslate */.r)();
    const html = await (0,node/* render */.XX)(await PasswordResetNotifyEmail());
    return await sendEmail({
        to: user.email,
        subject: t("emails.password_reset_notify_email_subject"),
        html
    });
};
const sendInviteMemberEmail = async (inviteId, email, inviterName, inviteeName, isOnboardingInvite, inviteMessage)=>{
    const token = (0,jwt/* createInviteToken */.DF)(inviteId, email, {
        expiresIn: "7d"
    });
    const t = await (0,server/* getTranslate */.r)();
    const verifyLink = `${constants/* WEBAPP_URL */.YW}/invite?token=${encodeURIComponent(token)}`;
    if (isOnboardingInvite && inviteMessage) {
        const html = await (0,node/* render */.XX)(await OnboardingInviteEmail({
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
        const t = await (0,server/* getTranslate */.r)();
        const html = await (0,node/* render */.XX)(await InviteEmail({
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
    const t = await getTranslate();
    const personEmail = response.contactAttributes?.email;
    const organization = await getOrganizationByEnvironmentId(environmentId);
    if (!organization) {
        throw new Error("Organization not found");
    }
    const html = await render(await ResponseFinishedEmail({
        survey,
        responseCount,
        response,
        WEBAPP_URL,
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
        replyTo: personEmail?.toString() ?? MAIL_FROM,
        html
    });
};
const sendEmbedSurveyPreviewEmail = async (to, innerHtml, environmentId, logoUrl)=>{
    const t = await (0,server/* getTranslate */.r)();
    const html = await (0,node/* render */.XX)(await EmbedSurveyPreviewEmail({
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
    const t = await (0,server/* getTranslate */.r)();
    const emailHtmlBody = await (0,node/* render */.XX)(await EmailCustomizationPreviewEmail({
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
    const token = (0,jwt/* createTokenForLinkSurvey */.l7)(surveyId, email);
    const t = await (0,server/* getTranslate */.r)();
    const getSurveyLink = ()=>{
        if (singleUseId) {
            return `${constants/* WEBAPP_URL */.YW}/s/${surveyId}?verify=${encodeURIComponent(token)}&suId=${singleUseId}`;
        }
        return `${constants/* WEBAPP_URL */.YW}/s/${surveyId}?verify=${encodeURIComponent(token)}`;
    };
    const surveyLink = getSurveyLink();
    const html = await (0,node/* render */.XX)(await LinkSurveyEmail({
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
    const t = await getTranslate();
    const html = await render(WeeklySummaryNotificationEmail({
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
    const t = await getTranslate();
    const html = await render(NoLiveSurveyNotificationEmail({
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
    const emailHtmlBody = await render(await FollowUpEmail({
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

/***/ 380145:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  r: () => (/* binding */ getTranslate)
});

// UNUSED EXPORTS: T, getTolgee

// EXTERNAL MODULE: ../../node_modules/@tolgee/react/dist/tolgee-react-server.esm.js
var tolgee_react_server_esm = __webpack_require__(791203);
;// ../../branch.json
const branch_namespaceObject = {"a":"main"};
// EXTERNAL MODULE: ./modules/auth/lib/authOptions.ts + 6 modules
var authOptions = __webpack_require__(396548);
// EXTERNAL MODULE: ../../node_modules/next-auth/index.js
var next_auth = __webpack_require__(330291);
// EXTERNAL MODULE: ../../packages/lib/constants.ts
var constants = __webpack_require__(711344);
// EXTERNAL MODULE: ../../packages/lib/user/service.ts
var service = __webpack_require__(717080);
// EXTERNAL MODULE: ../../packages/lib/utils/locale.ts
var utils_locale = __webpack_require__(71813);
;// ./tolgee/language.ts





async function getLocale() {
    const session = await (0,next_auth.getServerSession)(authOptions/* authOptions */.N);
    let locale = session ? await (0,service/* getUserLocale */.YK)(session.user?.id) : await (0,utils_locale/* findMatchingLocale */.$)();
    locale = locale ? locale : constants/* DEFAULT_LOCALE */.Xn;
    return locale;
}

// EXTERNAL MODULE: ../../node_modules/@tolgee/format-icu/dist/tolgee-format-icu.esm.js
var tolgee_format_icu_esm = __webpack_require__(931347);
// EXTERNAL MODULE: ../../node_modules/@tolgee/web/dist/tolgee-web.production.esm.js
var tolgee_web_production_esm = __webpack_require__(351962);
;// ./tolgee/shared.ts


const apiKey = process.env.NEXT_PUBLIC_TOLGEE_API_KEY;
const apiUrl = process.env.NEXT_PUBLIC_TOLGEE_API_URL;
const ALL_LANGUAGES = (/* unused pure expression or super */ null && ([
    "en-US",
    "de-DE",
    "fr-FR",
    "pt-BR"
]));
const DEFAULT_LANGUAGE = "en-US";
function TolgeeBase() {
    return (0,tolgee_web_production_esm/* Tolgee */.H_)().use((0,tolgee_format_icu_esm/* FormatIcu */.X)()).use((0,tolgee_web_production_esm/* DevTools */.VD)()).updateDefaults({
        apiKey,
        apiUrl,
        staticData: {
            "en-US": ()=>__webpack_require__.e(/* import() */ 6735).then(__webpack_require__.t.bind(__webpack_require__, 66735, 19)),
            "de-DE": ()=>__webpack_require__.e(/* import() */ 1553).then(__webpack_require__.t.bind(__webpack_require__, 663934, 19)),
            "fr-FR": ()=>__webpack_require__.e(/* import() */ 328).then(__webpack_require__.t.bind(__webpack_require__, 550328, 19)),
            "pt-BR": ()=>__webpack_require__.e(/* import() */ 3392).then(__webpack_require__.t.bind(__webpack_require__, 313392, 19))
        }
    });
}

;// ./tolgee/server.tsx




const { getTolgee, getTranslate, T } = (0,tolgee_react_server_esm/* createServerInstance */.RE)({
    getLocale: getLocale,
    createTolgee: async (language)=>{
        return TolgeeBase().init({
            tagNewKeys: [
                `draft: ${branch_namespaceObject.a}`
            ],
            observerOptions: {
                fullKeyEncode: true
            },
            language
        });
    }
});


/***/ })

};
;