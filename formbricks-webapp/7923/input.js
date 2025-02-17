exports.id = 7923;
exports.ids = [7923];
exports.modules = {

/***/ 546091:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 629498));


/***/ }),

/***/ 722115:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 251482));


/***/ }),

/***/ 587032:
/***/ (() => {



/***/ }),

/***/ 580408:
/***/ (() => {



/***/ }),

/***/ 895017:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  EnableInsightsBanner: () => (/* binding */ EnableInsightsBanner)
});

// EXTERNAL MODULE: ../../node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js
var react_jsx_runtime = __webpack_require__(642725);
// EXTERNAL MODULE: ../../node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js
var action_client_wrapper = __webpack_require__(308441);
;// ../../node_modules/next/dist/build/webpack/loaders/next-flight-server-reference-proxy-loader.js?id=7f4c227702efe911eae0c01a4a44ef8478ad6b17b0&name=generateInsightsForSurveyAction!

const generateInsightsForSurveyAction = /*#__PURE__*/(0,action_client_wrapper.createServerReference)("7f4c227702efe911eae0c01a4a44ef8478ad6b17b0", action_client_wrapper.callServer, undefined, action_client_wrapper.findSourceMapURL, "generateInsightsForSurveyAction")
// EXTERNAL MODULE: ./modules/ui/components/alert/index.tsx
var components_alert = __webpack_require__(886762);
// EXTERNAL MODULE: ./modules/ui/components/badge/index.tsx
var badge = __webpack_require__(661989);
// EXTERNAL MODULE: ./modules/ui/components/button/index.tsx
var components_button = __webpack_require__(248852);
// EXTERNAL MODULE: ./modules/ui/components/tooltip/index.tsx
var tooltip = __webpack_require__(163701);
// EXTERNAL MODULE: ../../node_modules/@tolgee/react/dist/tolgee-react.esm.js
var tolgee_react_esm = __webpack_require__(397674);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/sparkles.js
var sparkles = __webpack_require__(158539);
// EXTERNAL MODULE: ../../node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js
var react = __webpack_require__(891616);
// EXTERNAL MODULE: ../../node_modules/react-hot-toast/dist/index.mjs + 1 modules
var dist = __webpack_require__(986090);
;// ./app/(app)/environments/[environmentId]/surveys/[surveyId]/(analysis)/summary/components/EnableInsightsBanner.tsx
/* __next_internal_client_entry_do_not_use__ EnableInsightsBanner auto */ 









const EnableInsightsBanner = ({ surveyId, surveyResponseCount, maxResponseCount })=>{
    const { t } = (0,tolgee_react_esm/* useTranslate */.WD)();
    const [isGeneratingInsights, setIsGeneratingInsights] = (0,react.useState)(false);
    const handleInsightGeneration = async ()=>{
        dist/* default */.Ay.success("Generating insights for this survey. Please check back in a few minutes.", {
            duration: 3000
        });
        setIsGeneratingInsights(true);
        dist/* default */.Ay.success(t("environments.surveys.summary.enable_ai_insights_banner_success"));
        generateInsightsForSurveyAction({
            surveyId
        });
    };
    if (isGeneratingInsights) {
        return null;
    }
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(components_alert/* Alert */.Fc, {
        className: "mb-6 mt-4 flex items-center gap-4 border-slate-400 bg-white",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(sparkles/* default */.A, {
                    strokeWidth: 1.5,
                    className: "size-7 text-slate-700"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                className: "flex-1",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(components_alert/* AlertTitle */.XL, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("span", {
                                className: "mr-2",
                                children: t("environments.surveys.summary.enable_ai_insights_banner_title")
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(badge/* Badge */.E, {
                                type: "gray",
                                size: "normal",
                                text: "Beta"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_alert/* AlertDescription */.TN, {
                        className: "flex items-start justify-between gap-4",
                        children: t("environments.surveys.summary.enable_ai_insights_banner_description")
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(tooltip/* TooltipRenderer */.rE, {
                tooltipContent: surveyResponseCount > maxResponseCount ? t("environments.surveys.summary.enable_ai_insights_banner_tooltip") : undefined,
                children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_button/* Button */.$, {
                    size: "sm",
                    className: "shrink-0",
                    onClick: handleInsightGeneration,
                    loading: isGeneratingInsights,
                    disabled: surveyResponseCount > maxResponseCount,
                    children: t("environments.surveys.summary.enable_ai_insights_banner_button")
                })
            })
        ]
    });
};


/***/ }),

/***/ 379797:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  SurveyAnalysisCTA: () => (/* binding */ SurveyAnalysisCTA)
});

// EXTERNAL MODULE: ../../node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js
var react_jsx_runtime = __webpack_require__(642725);
// EXTERNAL MODULE: ../../node_modules/next/dist/build/webpack/loaders/next-flight-server-reference-proxy-loader.js?id=7fb159e4ce2653356d5be5228e43377c2514df080b&name=generateSingleUseIdAction!
var next_flight_server_reference_proxy_loaderid_7fb159e4ce2653356d5be5228e43377c2514df080b_name_generateSingleUseIdAction_ = __webpack_require__(745243);
// EXTERNAL MODULE: ./lib/utils/helper.ts
var helper = __webpack_require__(856763);
// EXTERNAL MODULE: ./modules/ui/components/button/index.tsx
var components_button = __webpack_require__(248852);
// EXTERNAL MODULE: ../../node_modules/@tolgee/react/dist/tolgee-react.esm.js
var tolgee_react_esm = __webpack_require__(397674);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/createLucideIcon.js + 3 modules
var createLucideIcon = __webpack_require__(58303);
;// ../../node_modules/lucide-react/dist/esm/icons/square-arrow-out-up-right.js
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const SquareArrowOutUpRight = (0,createLucideIcon/* default */.A)("SquareArrowOutUpRight", [
    [
        "path",
        {
            d: "M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6",
            key: "y09zxi"
        }
    ],
    [
        "path",
        {
            d: "m21 3-9 9",
            key: "mpx6sq"
        }
    ],
    [
        "path",
        {
            d: "M15 3h6v6",
            key: "1q9fwt"
        }
    ]
]);
 //# sourceMappingURL=square-arrow-out-up-right.js.map

// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/copy.js
var copy = __webpack_require__(875677);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/refresh-ccw.js
var refresh_ccw = __webpack_require__(44667);
// EXTERNAL MODULE: ../../node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js
var react = __webpack_require__(891616);
// EXTERNAL MODULE: ../../node_modules/react-hot-toast/dist/index.mjs + 1 modules
var dist = __webpack_require__(986090);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/languages.js
var languages = __webpack_require__(185861);
// EXTERNAL MODULE: ../../packages/lib/i18n/utils.ts
var utils = __webpack_require__(864698);
// EXTERNAL MODULE: ../../packages/lib/utils/hooks/useClickOutside.ts
var useClickOutside = __webpack_require__(593827);
;// ./modules/analysis/components/ShareSurveyLink/components/LanguageDropdown.tsx







const LanguageDropdown = ({ survey, setLanguage, locale })=>{
    const [showLanguageSelect, setShowLanguageSelect] = (0,react.useState)(false);
    const languageDropdownRef = (0,react.useRef)(null);
    const enabledLanguages = (0,utils/* getEnabledLanguages */.rc)(survey.languages ?? []);
    (0,useClickOutside/* useClickOutside */.L)(languageDropdownRef, ()=>setShowLanguageSelect(false));
    return enabledLanguages.length > 1 && /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
        className: "relative",
        children: [
            showLanguageSelect && /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                className: "absolute top-12 z-30 w-fit rounded-lg border bg-slate-900 p-1 text-sm text-white",
                ref: languageDropdownRef,
                children: enabledLanguages.map((surveyLanguage)=>/*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                        className: "rounded-md p-2 hover:cursor-pointer hover:bg-slate-700",
                        onClick: ()=>{
                            setLanguage(surveyLanguage.language.code);
                            setShowLanguageSelect(false);
                        },
                        children: (0,utils/* getLanguageLabel */.rJ)(surveyLanguage.language.code, locale)
                    }, surveyLanguage.language.code))
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_button/* Button */.$, {
                variant: "secondary",
                title: "Select Language",
                "aria-label": "Select Language",
                onClick: ()=>setShowLanguageSelect(!showLanguageSelect),
                children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(languages/* default */.A, {
                    className: "h-5 w-5"
                })
            })
        ]
    });
};

// EXTERNAL MODULE: ./modules/ui/components/input/index.tsx
var input = __webpack_require__(438624);
;// ./modules/analysis/components/ShareSurveyLink/components/SurveyLinkDisplay.tsx


const SurveyLinkDisplay = ({ surveyUrl })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime.jsx)(input/* Input */.p, {
        autoFocus: true,
        className: "mt-2 w-full min-w-96 text-ellipsis rounded-lg border bg-white px-4 py-2 text-center text-slate-800 caret-transparent",
        defaultValue: surveyUrl
    });
};

;// ./modules/analysis/components/ShareSurveyLink/index.tsx
/* __next_internal_client_entry_do_not_use__ ShareSurveyLink auto */ 









const ShareSurveyLink = ({ survey, webAppUrl, surveyUrl, setSurveyUrl, locale })=>{
    const { t } = (0,tolgee_react_esm/* useTranslate */.WD)();
    const [language, setLanguage] = (0,react.useState)("default");
    const getUrl = (0,react.useCallback)(async ()=>{
        let url = `${webAppUrl}/s/${survey.id}`;
        const queryParams = [];
        if (survey.singleUse?.enabled) {
            const singleUseIdResponse = await (0,next_flight_server_reference_proxy_loaderid_7fb159e4ce2653356d5be5228e43377c2514df080b_name_generateSingleUseIdAction_/* generateSingleUseIdAction */.o)({
                surveyId: survey.id,
                isEncrypted: survey.singleUse.isEncrypted
            });
            if (singleUseIdResponse?.data) {
                queryParams.push(`suId=${singleUseIdResponse.data}`);
            } else {
                const errorMessage = (0,helper/* getFormattedErrorMessage */.g3)(singleUseIdResponse);
                dist/* toast */.oR.error(errorMessage);
            }
        }
        if (language !== "default") {
            queryParams.push(`lang=${language}`);
        }
        if (queryParams.length) {
            url += `?${queryParams.join("&")}`;
        }
        setSurveyUrl(url);
    }, [
        survey,
        webAppUrl,
        language
    ]);
    const generateNewSingleUseLink = ()=>{
        getUrl();
        dist/* toast */.oR.success(t("environments.surveys.new_single_use_link_generated"));
    };
    (0,react.useEffect)(()=>{
        getUrl();
    }, [
        survey,
        getUrl,
        language
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
        className: `flex max-w-full flex-col items-center justify-center space-x-2 ${survey.singleUse?.enabled ? "flex-col" : "lg:flex-row"}`,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(SurveyLinkDisplay, {
                surveyUrl: surveyUrl
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                className: "mt-2 flex items-center justify-center space-x-2",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(LanguageDropdown, {
                        survey: survey,
                        setLanguage: setLanguage,
                        locale: locale
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(components_button/* Button */.$, {
                        title: t("environments.surveys.preview_survey_in_a_new_tab"),
                        "aria-label": t("environments.surveys.preview_survey_in_a_new_tab"),
                        onClick: ()=>{
                            let previewUrl = surveyUrl;
                            if (previewUrl.includes("?")) {
                                previewUrl += "&preview=true";
                            } else {
                                previewUrl += "?preview=true";
                            }
                            window.open(previewUrl, "_blank");
                        },
                        children: [
                            t("common.preview"),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(SquareArrowOutUpRight, {})
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(components_button/* Button */.$, {
                        variant: "secondary",
                        title: t("environments.surveys.copy_survey_link_to_clipboard"),
                        "aria-label": t("environments.surveys.copy_survey_link_to_clipboard"),
                        onClick: ()=>{
                            navigator.clipboard.writeText(surveyUrl);
                            dist/* toast */.oR.success(t("common.copied_to_clipboard"));
                        },
                        children: [
                            t("common.copy"),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(copy/* default */.A, {})
                        ]
                    }),
                    survey.singleUse?.enabled && /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_button/* Button */.$, {
                        title: "Regenerate single use survey link",
                        "aria-label": "Regenerate single use survey link",
                        onClick: generateNewSingleUseLink,
                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(refresh_ccw/* default */.A, {
                            className: "h-5 w-5"
                        })
                    })
                ]
            })
        ]
    });
};

// EXTERNAL MODULE: ./modules/ui/components/badge/index.tsx
var badge = __webpack_require__(661989);
// EXTERNAL MODULE: ./modules/ui/components/dialog/index.tsx
var dialog = __webpack_require__(728364);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/mail.js
var mail = __webpack_require__(247503);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/code-xml.js
var code_xml = __webpack_require__(217537);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/link.js
var icons_link = __webpack_require__(415140);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/smartphone.js
var smartphone = __webpack_require__(366947);
;// ../../node_modules/lucide-react/dist/esm/icons/bell-ring.js
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const BellRing = (0,createLucideIcon/* default */.A)("BellRing", [
    [
        "path",
        {
            d: "M10.268 21a2 2 0 0 0 3.464 0",
            key: "vwvbt9"
        }
    ],
    [
        "path",
        {
            d: "M22 8c0-2.3-.8-4.3-2-6",
            key: "5bb3ad"
        }
    ],
    [
        "path",
        {
            d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
            key: "11g9vi"
        }
    ],
    [
        "path",
        {
            d: "M4 2C2.8 3.7 2 5.7 2 8",
            key: "tap9e0"
        }
    ]
]);
 //# sourceMappingURL=bell-ring.js.map

// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/blocks.js
var blocks = __webpack_require__(427434);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/users-round.js
var users_round = __webpack_require__(211119);
// EXTERNAL MODULE: ../../node_modules/next/dist/client/app-dir/link.js
var app_dir_link = __webpack_require__(36888);
var link_default = /*#__PURE__*/__webpack_require__.n(app_dir_link);
// EXTERNAL MODULE: ../../node_modules/next/dist/api/navigation.js
var navigation = __webpack_require__(470207);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/arrow-left.js
var arrow_left = __webpack_require__(681129);
// EXTERNAL MODULE: ../../packages/lib/cn.ts
var cn = __webpack_require__(983773);
// EXTERNAL MODULE: ./modules/ui/components/options-switch/index.tsx
var options_switch = __webpack_require__(465775);
;// ./app/(app)/environments/[environmentId]/surveys/[surveyId]/(analysis)/summary/components/shareEmbedModal/AppTab.tsx
/* __next_internal_client_entry_do_not_use__ AppTab auto */ 




const AppTab = ({ environmentId })=>{
    const { t } = (0,tolgee_react_esm/* useTranslate */.WD)();
    const [selectedTab, setSelectedTab] = (0,react.useState)("webapp");
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
        className: "flex h-full grow flex-col",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(options_switch/* OptionsSwitch */.V, {
                options: [
                    {
                        value: "webapp",
                        label: t("environments.surveys.summary.web_app")
                    },
                    {
                        value: "mobile",
                        label: t("environments.surveys.summary.mobile_app")
                    }
                ],
                currentOption: selectedTab,
                handleOptionChange: (value)=>setSelectedTab(value)
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                className: "mt-4",
                children: selectedTab === "webapp" ? /*#__PURE__*/ (0,react_jsx_runtime.jsx)(WebAppTab, {
                    environmentId: environmentId
                }) : /*#__PURE__*/ (0,react_jsx_runtime.jsx)(MobileAppTab, {})
            })
        ]
    });
};
const MobileAppTab = ()=>{
    const { t } = (0,tolgee_react_esm/* useTranslate */.WD)();
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                className: "text-lg font-semibold text-slate-800",
                children: t("environments.surveys.summary.how_to_embed_a_survey_on_your_react_native_app")
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("ol", {
                className: "mt-4 list-decimal space-y-2 pl-5 text-sm text-slate-700",
                children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("li", {
                    children: [
                        t("common.follow_these"),
                        " ",
                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)((link_default()), {
                            href: "https://formbricks.com/docs/developer-docs/react-native-in-app-surveys",
                            target: "_blank",
                            className: "decoration-brand-dark font-medium underline underline-offset-2",
                            children: t("environments.surveys.summary.setup_instructions_for_react_native_apps")
                        }),
                        " ",
                        t("environments.surveys.summary.to_connect_your_app_with_formbricks")
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                className: "mt-2 text-sm italic text-slate-700",
                children: t("environments.surveys.summary.were_working_on_sdks_for_flutter_swift_and_kotlin")
            })
        ]
    });
};
const WebAppTab = ({ environmentId })=>{
    const { t } = (0,tolgee_react_esm/* useTranslate */.WD)();
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                className: "text-lg font-semibold text-slate-800",
                children: t("environments.surveys.summary.how_to_embed_a_survey_on_your_web_app")
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("ol", {
                className: "mt-4 list-decimal space-y-2 pl-5 text-sm text-slate-700",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("li", {
                        children: [
                            t("common.follow_these"),
                            " ",
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)((link_default()), {
                                href: `/environments/${environmentId}/project/app-connection`,
                                target: "_blank",
                                className: "decoration-brand-dark font-medium underline underline-offset-2",
                                children: t("environments.surveys.summary.setup_instructions")
                            }),
                            " ",
                            t("environments.surveys.summary.to_connect_your_web_app_with_formbricks")
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("li", {
                        children: [
                            t("environments.surveys.summary.learn_how_to"),
                            " ",
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)((link_default()), {
                                href: "https://formbricks.com/docs/app-surveys/user-identification",
                                target: "_blank",
                                className: "decoration-brand-dark font-medium underline underline-offset-2",
                                children: t("environments.surveys.summary.identify_users_and_set_attributes")
                            }),
                            " ",
                            t("environments.surveys.summary.to_run_highly_targeted_surveys"),
                            "."
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("li", {
                        children: [
                            t("environments.surveys.summary.make_sure_the_survey_type_is_set_to"),
                            " ",
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("b", {
                                children: t("common.app_survey")
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("li", {
                        children: t("environments.surveys.summary.define_when_and_where_the_survey_should_pop_up")
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                className: "mt-4",
                children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("video", {
                    autoPlay: true,
                    loop: true,
                    muted: true,
                    className: "w-full rounded-xl border border-slate-200",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)("source", {
                            src: "/video/tooltips/change-survey-type-app.mp4",
                            type: "video/mp4"
                        }),
                        t("environments.surveys.summary.unsupported_video_tag_warning")
                    ]
                })
            })
        ]
    });
};

// EXTERNAL MODULE: ./modules/ui/components/code-block/index.tsx
var code_block = __webpack_require__(859823);
// EXTERNAL MODULE: ./modules/ui/components/loading-spinner/index.tsx
var loading_spinner = __webpack_require__(829884);
// EXTERNAL MODULE: ../../node_modules/zod/lib/index.mjs
var lib = __webpack_require__(99922);
;// ../../packages/types/errors.ts

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
const ZErrorHandler = lib.z.function().args(lib.z.any()).returns(lib.z.void());


// EXTERNAL MODULE: ../../node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js
var action_client_wrapper = __webpack_require__(308441);
;// ../../node_modules/next/dist/build/webpack/loaders/next-flight-server-reference-proxy-loader.js?id=7f75dbf7cc4ee6daac4e8f4864033a340af5b84586&name=getEmailHtmlAction!

const getEmailHtmlAction = /*#__PURE__*/(0,action_client_wrapper.createServerReference)("7f75dbf7cc4ee6daac4e8f4864033a340af5b84586", action_client_wrapper.callServer, undefined, action_client_wrapper.findSourceMapURL, "getEmailHtmlAction")
;// ../../node_modules/next/dist/build/webpack/loaders/next-flight-server-reference-proxy-loader.js?id=7f64ed559b1cc12faaf39be6158bf6928d6fa7fecc&name=sendEmbedSurveyPreviewEmailAction!

const sendEmbedSurveyPreviewEmailAction = /*#__PURE__*/(0,action_client_wrapper.createServerReference)("7f64ed559b1cc12faaf39be6158bf6928d6fa7fecc", action_client_wrapper.callServer, undefined, action_client_wrapper.findSourceMapURL, "sendEmbedSurveyPreviewEmailAction")
;// ./app/(app)/environments/[environmentId]/surveys/[surveyId]/(analysis)/summary/components/shareEmbedModal/EmailTab.tsx
/* __next_internal_client_entry_do_not_use__ EmailTab auto */ 










const EmailTab = ({ surveyId, email })=>{
    const [showEmbed, setShowEmbed] = (0,react.useState)(false);
    const [emailHtmlPreview, setEmailHtmlPreview] = (0,react.useState)("");
    const { t } = (0,tolgee_react_esm/* useTranslate */.WD)();
    const emailHtml = (0,react.useMemo)(()=>{
        if (!emailHtmlPreview) return "";
        return emailHtmlPreview.replaceAll("?preview=true&amp;", "?").replaceAll("?preview=true&;", "?").replaceAll("?preview=true", "");
    }, [
        emailHtmlPreview
    ]);
    (0,react.useEffect)(()=>{
        const getData = async ()=>{
            const emailHtml = await getEmailHtmlAction({
                surveyId
            });
            setEmailHtmlPreview(emailHtml?.data || "");
        };
        getData();
    }, [
        surveyId
    ]);
    const sendPreviewEmail = async ()=>{
        try {
            const val = await sendEmbedSurveyPreviewEmailAction({
                surveyId
            });
            if (val?.data) {
                dist/* default */.Ay.success(t("environments.surveys.summary.email_sent"));
            } else {
                const errorMessage = (0,helper/* getFormattedErrorMessage */.g3)(val);
                dist/* default */.Ay.error(errorMessage);
            }
        } catch (err) {
            if (err instanceof AuthenticationError) {
                dist/* default */.Ay.error(t("common.not_authenticated"));
                return;
            }
            dist/* default */.Ay.error(t("common.something_went_wrong_please_try_again"));
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
        className: "flex flex-col gap-5",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                className: "flex items-center justify-end gap-4",
                children: [
                    showEmbed ? /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(components_button/* Button */.$, {
                        variant: "secondary",
                        title: "Embed survey in your website",
                        "aria-label": "Embed survey in your website",
                        onClick: ()=>{
                            dist/* default */.Ay.success(t("environments.surveys.summary.embed_code_copied_to_clipboard"));
                            navigator.clipboard.writeText(emailHtml);
                        },
                        className: "shrink-0",
                        children: [
                            t("common.copy_code"),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(copy/* default */.A, {})
                        ]
                    }) : /*#__PURE__*/ (0,react_jsx_runtime.jsx)(react_jsx_runtime.Fragment, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(components_button/* Button */.$, {
                            variant: "secondary",
                            title: "send preview email",
                            "aria-label": "send preview email",
                            onClick: ()=>sendPreviewEmail(),
                            className: "shrink-0",
                            children: [
                                t("environments.surveys.summary.send_preview"),
                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(mail/* default */.A, {})
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(components_button/* Button */.$, {
                        title: t("environments.surveys.summary.view_embed_code_for_email"),
                        "aria-label": t("environments.surveys.summary.view_embed_code_for_email"),
                        onClick: ()=>{
                            setShowEmbed(!showEmbed);
                        },
                        className: "shrink-0",
                        children: [
                            showEmbed ? t("environments.surveys.summary.hide_embed_code") : t("environments.surveys.summary.view_embed_code"),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(code_xml/* default */.A, {})
                        ]
                    })
                ]
            }),
            showEmbed ? /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                className: "prose prose-slate -mt-4 max-w-full",
                children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(code_block/* CodeBlock */.N, {
                    customCodeClass: "text-sm h-48 overflow-y-scroll",
                    language: "html",
                    showCopyToClipboard: false,
                    children: emailHtml
                })
            }) : /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                className: "mb-12 grow overflow-y-auto rounded-xl border border-slate-200 bg-white p-4",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                        className: "mb-6 flex gap-2",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                className: "h-3 w-3 rounded-full bg-red-500"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                className: "h-3 w-3 rounded-full bg-amber-500"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                className: "h-3 w-3 rounded-full bg-emerald-500"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                className: "mb-2 border-b border-slate-200 pb-2 text-sm",
                                children: [
                                    "To : ",
                                    email || "user@mail.com"
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                className: "border-b border-slate-200 pb-2 text-sm",
                                children: [
                                    "Subject : ",
                                    t("environments.surveys.summary.formbricks_email_survey_preview")
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                className: "p-4",
                                children: emailHtml ? /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                    dangerouslySetInnerHTML: {
                                        __html: emailHtmlPreview
                                    }
                                }) : /*#__PURE__*/ (0,react_jsx_runtime.jsx)(loading_spinner.LoadingSpinner, {})
                            })
                        ]
                    })
                ]
            })
        ]
    });
};

;// ./app/(app)/environments/[environmentId]/surveys/[surveyId]/(analysis)/summary/components/shareEmbedModal/LinkTab.tsx
/* __next_internal_client_entry_do_not_use__ LinkTab auto */ 



const LinkTab = ({ survey, webAppUrl, surveyUrl, setSurveyUrl, locale })=>{
    const { t } = (0,tolgee_react_esm/* useTranslate */.WD)();
    const docsLinks = [
        {
            title: t("environments.surveys.summary.identify_users"),
            description: t("environments.surveys.summary.identify_users_description"),
            link: "https://formbricks.com/docs/link-surveys/user-identification"
        },
        {
            title: t("environments.surveys.summary.data_prefilling"),
            description: t("environments.surveys.summary.data_prefilling_description"),
            link: "https://formbricks.com/docs/link-surveys/data-prefilling"
        },
        {
            title: t("environments.surveys.summary.source_tracking"),
            description: t("environments.surveys.summary.source_tracking_description"),
            link: "https://formbricks.com/docs/link-surveys/source-tracking"
        },
        {
            title: t("environments.surveys.summary.create_single_use_links"),
            description: t("environments.surveys.summary.create_single_use_links_description"),
            link: "https://formbricks.com/docs/link-surveys/single-use-links"
        }
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
        className: "flex h-full grow flex-col gap-6",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                        className: "text-lg font-semibold text-slate-800",
                        children: t("environments.surveys.summary.share_the_link_to_get_responses")
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(ShareSurveyLink, {
                        survey: survey,
                        webAppUrl: webAppUrl,
                        surveyUrl: surveyUrl,
                        setSurveyUrl: setSurveyUrl,
                        locale: locale
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                className: "flex flex-wrap justify-between gap-2",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("p", {
                        className: "pt-2 font-semibold text-slate-700",
                        children: [
                            t("environments.surveys.summary.you_can_do_a_lot_more_with_links_surveys"),
                            " \uD83D\uDCA1"
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                        className: "grid grid-cols-2 gap-2",
                        children: docsLinks.map((tip)=>/*#__PURE__*/ (0,react_jsx_runtime.jsxs)((link_default()), {
                                target: "_blank",
                                href: tip.link,
                                className: "relative w-full rounded-md border border-slate-100 bg-white px-6 py-4 text-sm text-slate-600 hover:bg-slate-50 hover:text-slate-800",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                                        className: "mb-1 font-semibold",
                                        children: tip.title
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                                        className: "text-slate-500 hover:text-slate-700",
                                        children: tip.description
                                    })
                                ]
                            }, tip.title))
                    })
                ]
            })
        ]
    });
};

// EXTERNAL MODULE: ./modules/ui/components/advanced-option-toggle/index.tsx
var advanced_option_toggle = __webpack_require__(115713);
;// ./app/(app)/environments/[environmentId]/surveys/[surveyId]/(analysis)/summary/components/shareEmbedModal/WebsiteTab.tsx
/* __next_internal_client_entry_do_not_use__ WebsiteTab auto */ 









const WebsiteTab = ({ surveyUrl, environmentId })=>{
    const [selectedTab, setSelectedTab] = (0,react.useState)("static");
    const { t } = (0,tolgee_react_esm/* useTranslate */.WD)();
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
        className: "flex h-full grow flex-col",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(options_switch/* OptionsSwitch */.V, {
                options: [
                    {
                        value: "static",
                        label: t("environments.surveys.summary.static_iframe")
                    },
                    {
                        value: "popup",
                        label: t("environments.surveys.summary.dynamic_popup")
                    }
                ],
                currentOption: selectedTab,
                handleOptionChange: (value)=>setSelectedTab(value)
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                className: "mt-4",
                children: selectedTab === "static" ? /*#__PURE__*/ (0,react_jsx_runtime.jsx)(StaticTab, {
                    surveyUrl: surveyUrl
                }) : /*#__PURE__*/ (0,react_jsx_runtime.jsx)(PopupTab, {
                    environmentId: environmentId
                })
            })
        ]
    });
};
const StaticTab = ({ surveyUrl })=>{
    const [embedModeEnabled, setEmbedModeEnabled] = (0,react.useState)(false);
    const { t } = (0,tolgee_react_esm/* useTranslate */.WD)();
    const iframeCode = `<div style="position: relative; height:80dvh; overflow:auto;"> 
  <iframe 
    src="${surveyUrl}${embedModeEnabled ? "?embed=true" : ""}" 
    frameborder="0" style="position: absolute; left:0; top:0; width:100%; height:100%; border:0;">
  </iframe>
</div>`;
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
        className: "flex h-full grow flex-col",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                className: "flex justify-between",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {}),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(components_button/* Button */.$, {
                        title: "Embed survey in your website",
                        "aria-label": "Embed survey in your website",
                        onClick: ()=>{
                            navigator.clipboard.writeText(iframeCode);
                            dist/* default */.Ay.success(t("environments.surveys.summary.embed_code_copied_to_clipboard"));
                        },
                        children: [
                            t("common.copy_code"),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(copy/* default */.A, {})
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                className: "prose prose-slate max-w-full",
                children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(code_block/* CodeBlock */.N, {
                    customCodeClass: "text-sm h-48 overflow-y-scroll text-sm",
                    language: "html",
                    showCopyToClipboard: false,
                    children: iframeCode
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                className: "mt-2 rounded-md border bg-white p-4",
                children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(advanced_option_toggle/* AdvancedOptionToggle */.S, {
                    htmlId: "enableEmbedMode",
                    isChecked: embedModeEnabled,
                    onToggle: setEmbedModeEnabled,
                    title: t("environments.surveys.summary.embed_mode"),
                    description: t("environments.surveys.summary.embed_mode_description"),
                    childBorder: true
                })
            })
        ]
    });
};
const PopupTab = ({ environmentId })=>{
    const { t } = (0,tolgee_react_esm/* useTranslate */.WD)();
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                className: "text-lg font-semibold text-slate-800",
                children: t("environments.surveys.summary.embed_pop_up_survey_title")
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("ol", {
                className: "mt-4 list-decimal space-y-2 pl-5 text-sm text-slate-700",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("li", {
                        children: [
                            t("common.follow_these"),
                            " ",
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)((link_default()), {
                                href: `/environments/${environmentId}/project/website-connection`,
                                target: "_blank",
                                className: "decoration-brand-dark font-medium underline underline-offset-2",
                                children: t("environments.surveys.summary.setup_instructions")
                            }),
                            " ",
                            t("environments.surveys.summary.to_connect_your_website_with_formbricks")
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("li", {
                        children: [
                            t("environments.surveys.summary.make_sure_the_survey_type_is_set_to"),
                            " ",
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("b", {
                                children: t("common.website_survey")
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("li", {
                        children: t("environments.surveys.summary.define_when_and_where_the_survey_should_pop_up")
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                className: "mt-4",
                children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("video", {
                    autoPlay: true,
                    loop: true,
                    muted: true,
                    className: "w-full rounded-xl border border-slate-200",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)("source", {
                            src: "/video/tooltips/change-survey-type.mp4",
                            type: "video/mp4"
                        }),
                        t("environments.surveys.summary.unsupported_video_tag_warning")
                    ]
                })
            })
        ]
    });
};

;// ./app/(app)/environments/[environmentId]/surveys/[surveyId]/(analysis)/summary/components/shareEmbedModal/EmbedView.tsx
/* __next_internal_client_entry_do_not_use__ EmbedView auto */ 








const EmbedView = ({ handleInitialPageButton, tabs, disableBack, activeId, setActiveId, environmentId, survey, email, surveyUrl, setSurveyUrl, webAppUrl, locale })=>{
    const { t } = (0,tolgee_react_esm/* useTranslate */.WD)();
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
        className: "h-full overflow-hidden",
        children: [
            !disableBack && /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                className: "border-b border-slate-200 py-2 pl-2",
                children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(components_button/* Button */.$, {
                    variant: "ghost",
                    className: "focus:ring-0",
                    onClick: handleInitialPageButton,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)(arrow_left/* default */.A, {}),
                        t("common.back")
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                className: "grid h-full grid-cols-4",
                children: [
                    survey.type === "link" && /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                        className: (0,cn.cn)("col-span-1 hidden flex-col gap-3 border-r border-slate-200 p-4 lg:flex"),
                        children: tabs.map((tab)=>/*#__PURE__*/ (0,react_jsx_runtime.jsxs)(components_button/* Button */.$, {
                                variant: "ghost",
                                onClick: ()=>setActiveId(tab.id),
                                autoFocus: tab.id === activeId,
                                className: (0,cn.cn)("flex justify-start rounded-md border px-4 py-2 text-slate-600", // "focus:ring-0 focus:ring-offset-0", // enable these classes to remove the focus rings on buttons
                                tab.id === activeId ? "border-slate-200 bg-slate-100 font-semibold text-slate-900" : "border-transparent text-slate-500 hover:text-slate-700"),
                                "aria-current": tab.id === activeId ? "page" : undefined,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(tab.icon, {}),
                                    tab.label
                                ]
                            }, tab.id))
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                        className: `col-span-4 h-full overflow-y-auto bg-slate-50 px-4 py-6 ${survey.type === "link" ? "lg:col-span-3" : ""} lg:p-6`,
                        children: [
                            activeId === "email" ? /*#__PURE__*/ (0,react_jsx_runtime.jsx)(EmailTab, {
                                surveyId: survey.id,
                                email: email
                            }) : activeId === "webpage" ? /*#__PURE__*/ (0,react_jsx_runtime.jsx)(WebsiteTab, {
                                surveyUrl: surveyUrl,
                                environmentId: environmentId
                            }) : activeId === "link" ? /*#__PURE__*/ (0,react_jsx_runtime.jsx)(LinkTab, {
                                survey: survey,
                                webAppUrl: webAppUrl,
                                surveyUrl: surveyUrl,
                                setSurveyUrl: setSurveyUrl,
                                locale: locale
                            }) : activeId === "app" ? /*#__PURE__*/ (0,react_jsx_runtime.jsx)(AppTab, {
                                environmentId: environmentId
                            }) : null,
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                className: "mt-2 rounded-md p-3 text-center lg:hidden",
                                children: tabs.slice(0, 2).map((tab)=>/*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_button/* Button */.$, {
                                        variant: "ghost",
                                        onClick: ()=>setActiveId(tab.id),
                                        className: (0,cn.cn)("rounded-md px-4 py-2", tab.id === activeId ? "bg-white text-slate-900 shadow-sm" : "border-transparent text-slate-700 hover:text-slate-900"),
                                        children: tab.label
                                    }, tab.id))
                            })
                        ]
                    })
                ]
            })
        ]
    });
};

;// ./images/prolific-logo.webp
/* harmony default export */ const prolific_logo = ({"src":"/_next/static/media/prolific-logo.4e211672.webp","height":205,"width":1217,"blurDataURL":"data:image/webp;base64,UklGRmIAAABXRUJQVlA4WAoAAAAQAAAABwAAAAAAQUxQSAkAAAAAZm5FUkdqa1AAVlA4IDIAAABwAQCdASoIAAEAAkA4JZACdAFAAAD++EebGlUHLiP+TGJbZWfFDzW9g7k64ubItIAAAA==","blurWidth":8,"blurHeight":1});
;// ./images/prolific-screenshot.webp
/* harmony default export */ const prolific_screenshot = ({"src":"/_next/static/media/prolific-screenshot.92969dcd.webp","height":1012,"width":1960,"blurDataURL":"data:image/webp;base64,UklGRjAAAABXRUJQVlA4ICQAAACQAQCdASoIAAQAAkA4JaQAAudGFIAA/vzyyDOJUzfJvUAAAAA=","blurWidth":8,"blurHeight":4});
// EXTERNAL MODULE: ../../node_modules/next/dist/api/image.js
var api_image = __webpack_require__(134088);
;// ./app/(app)/environments/[environmentId]/surveys/[surveyId]/(analysis)/summary/components/shareEmbedModal/PanelInfoView.tsx
/* __next_internal_client_entry_do_not_use__ PanelInfoView auto */ 







const PanelInfoView = ({ disableBack, handleInitialPageButton })=>{
    const { t } = (0,tolgee_react_esm/* useTranslate */.WD)();
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
        className: "h-full overflow-hidden text-slate-900",
        children: [
            !disableBack && /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                className: "border-b border-slate-200 py-2",
                children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(components_button/* Button */.$, {
                    variant: "ghost",
                    onClick: handleInitialPageButton,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)(arrow_left/* default */.A, {}),
                        t("common.back")
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                className: "grid h-full grid-cols-2",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                        className: "flex flex-col gap-y-6 border-r border-slate-200 p-8",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(api_image["default"], {
                                src: prolific_screenshot,
                                alt: "Prolific panel selection UI",
                                className: "rounded-lg shadow-lg"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                                        className: "text-md font-semibold",
                                        children: t("environments.surveys.summary.what_is_a_panel")
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                                        className: "text-slate-600",
                                        children: t("environments.surveys.summary.what_is_a_panel_answer")
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                                        className: "text-md font-semibold",
                                        children: t("environments.surveys.summary.when_do_i_need_it")
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                                        className: "text-slate-600",
                                        children: t("environments.surveys.summary.when_do_i_need_it_answer")
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                                        className: "text-md font-semibold",
                                        children: t("environments.surveys.summary.what_is_prolific")
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                                        className: "text-slate-600",
                                        children: t("environments.surveys.summary.what_is_prolific_answer")
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                        className: "relative flex flex-col gap-y-6 bg-slate-50 p-8",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(api_image["default"], {
                                src: prolific_logo,
                                alt: "Prolific panel selection UI",
                                className: "absolute right-8 top-8 w-32"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("h3", {
                                    className: "text-xl font-semibold",
                                    children: t("environments.surveys.summary.how_to_create_a_panel")
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                                        className: "text-md font-semibold",
                                        children: t("environments.surveys.summary.how_to_create_a_panel_step_1")
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                                        className: "text-slate-600",
                                        children: t("environments.surveys.summary.how_to_create_a_panel_step_1_description")
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                                        className: "text-md font-semibold",
                                        children: t("environments.surveys.summary.how_to_create_a_panel_step_2")
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                                        className: "text-slate-600",
                                        children: t("environments.surveys.summary.how_to_create_a_panel_step_2_description")
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                                        className: "text-md font-semibold",
                                        children: t("environments.surveys.summary.how_to_create_a_panel_step_3")
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                                        className: "text-slate-600",
                                        children: t("environments.surveys.summary.how_to_create_a_panel_step_3_description")
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                                        className: "text-md font-semibold",
                                        children: t("environments.surveys.summary.how_to_create_a_panel_step_4")
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                                        className: "text-slate-600",
                                        children: t("environments.surveys.summary.how_to_create_a_panel_step_4_description")
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_button/* Button */.$, {
                                className: "justify-center",
                                asChild: true,
                                children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)((link_default()), {
                                    href: "https://formbricks.com/docs/link-surveys/market-research-panel",
                                    target: "_blank",
                                    children: t("common.get_started")
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};

;// ./app/(app)/environments/[environmentId]/surveys/[surveyId]/(analysis)/summary/components/ShareEmbedSurvey.tsx
/* __next_internal_client_entry_do_not_use__ ShareEmbedSurvey auto */ 










const ShareEmbedSurvey = ({ survey, open, modalView, setOpen, webAppUrl, user })=>{
    const router = (0,navigation.useRouter)();
    const environmentId = survey.environmentId;
    const isSingleUseLinkSurvey = survey.singleUse?.enabled ?? false;
    const { email } = user;
    const { t } = (0,tolgee_react_esm/* useTranslate */.WD)();
    const tabs = (0,react.useMemo)(()=>[
            {
                id: "email",
                label: t("environments.surveys.summary.embed_in_an_email"),
                icon: mail/* default */.A
            },
            {
                id: "webpage",
                label: t("environments.surveys.summary.embed_on_website"),
                icon: code_xml/* default */.A
            },
            {
                id: "link",
                label: `${isSingleUseLinkSurvey ? t("environments.surveys.summary.single_use_links") : t("environments.surveys.summary.share_the_link")}`,
                icon: icons_link/* default */.A
            },
            {
                id: "app",
                label: t("environments.surveys.summary.embed_in_app"),
                icon: smartphone/* default */.A
            }
        ].filter((tab)=>!(survey.type === "link" && tab.id === "app")), [
        t,
        isSingleUseLinkSurvey,
        survey.type
    ]);
    const [activeId, setActiveId] = (0,react.useState)(survey.type === "link" ? tabs[0].id : tabs[3].id);
    const [showView, setShowView] = (0,react.useState)("start");
    const [surveyUrl, setSurveyUrl] = (0,react.useState)(webAppUrl + "/s/" + survey.id);
    (0,react.useEffect)(()=>{
        if (survey.type !== "link") {
            setActiveId(tabs[3].id);
        }
    }, [
        survey.type,
        tabs
    ]);
    (0,react.useEffect)(()=>{
        if (open) {
            setShowView(modalView);
        } else {
            setShowView("start");
        }
    }, [
        open,
        modalView
    ]);
    const handleOpenChange = (open)=>{
        setActiveId(survey.type === "link" ? tabs[0].id : tabs[3].id);
        setOpen(open);
        if (!open) {
            setShowView("start");
        }
        router.refresh();
    };
    const handleInitialPageButton = ()=>{
        setOpen(false);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(dialog/* Dialog */.lG, {
        open: open,
        onOpenChange: handleOpenChange,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(dialog/* DialogTitle */.L3, {
                className: "sr-only"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(dialog/* DialogContent */.Cf, {
                className: "w-full max-w-xl bg-white p-0 md:max-w-3xl lg:h-[700px] lg:max-w-5xl",
                children: showView === "start" ? /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                    className: "h-full max-w-full overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                            className: "flex h-[200px] w-full flex-col items-center justify-center space-y-6 p-8 text-center lg:h-2/5",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(dialog/* DialogTitle */.L3, {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("p", {
                                        className: "pt-2 text-xl font-semibold text-slate-800",
                                        children: [
                                            t("environments.surveys.summary.your_survey_is_public"),
                                            " \uD83C\uDF89"
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(dialog/* DialogDescription */.rr, {
                                    className: "hidden"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(ShareSurveyLink, {
                                    survey: survey,
                                    webAppUrl: webAppUrl,
                                    surveyUrl: surveyUrl,
                                    setSurveyUrl: setSurveyUrl,
                                    locale: user.locale
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                            className: "flex h-[300px] flex-col items-center justify-center gap-8 rounded-b-lg bg-slate-50 px-8 lg:h-3/5",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                                    className: "-mt-8 text-sm text-slate-500",
                                    children: t("environments.surveys.summary.whats_next")
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                    className: "grid grid-cols-4 gap-2",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("button", {
                                            type: "button",
                                            onClick: ()=>setShowView("embed"),
                                            className: "flex flex-col items-center gap-3 rounded-lg border border-slate-100 bg-white p-4 text-sm text-slate-500 hover:border-slate-200 md:p-8",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(code_xml/* default */.A, {
                                                    className: "h-6 w-6 text-slate-700"
                                                }),
                                                t("environments.surveys.summary.embed_survey")
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime.jsxs)((link_default()), {
                                            href: `/environments/${environmentId}/settings/notifications`,
                                            className: "flex flex-col items-center gap-3 rounded-lg border border-slate-100 bg-white p-4 text-sm text-slate-500 hover:border-slate-200 md:p-8",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(BellRing, {
                                                    className: "h-6 w-6 text-slate-700"
                                                }),
                                                t("environments.surveys.summary.configure_alerts")
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime.jsxs)((link_default()), {
                                            href: `/environments/${environmentId}/integrations`,
                                            className: "flex flex-col items-center gap-3 rounded-lg border border-slate-100 bg-white p-4 text-sm text-slate-500 hover:border-slate-200 md:p-8",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(blocks/* default */.A, {
                                                    className: "h-6 w-6 text-slate-700"
                                                }),
                                                t("environments.surveys.summary.setup_integrations")
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("button", {
                                            type: "button",
                                            onClick: ()=>setShowView("panel"),
                                            className: "relative flex flex-col items-center gap-3 rounded-lg border border-slate-100 bg-white p-4 text-sm text-slate-500 hover:border-slate-200 md:p-8",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(users_round/* default */.A, {
                                                    className: "h-6 w-6 text-slate-700"
                                                }),
                                                t("environments.surveys.summary.send_to_panel"),
                                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(badge/* Badge */.E, {
                                                    size: "tiny",
                                                    type: "success",
                                                    className: "absolute right-3 top-3",
                                                    text: t("common.new")
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }) : showView === "embed" ? /*#__PURE__*/ (0,react_jsx_runtime.jsx)(EmbedView, {
                    handleInitialPageButton: handleInitialPageButton,
                    tabs: survey.type === "link" ? tabs : [
                        tabs[3]
                    ],
                    disableBack: false,
                    activeId: activeId,
                    environmentId: environmentId,
                    setActiveId: setActiveId,
                    survey: survey,
                    email: email,
                    surveyUrl: surveyUrl,
                    setSurveyUrl: setSurveyUrl,
                    webAppUrl: webAppUrl,
                    locale: user.locale
                }) : showView === "panel" ? /*#__PURE__*/ (0,react_jsx_runtime.jsx)(PanelInfoView, {
                    handleInitialPageButton: handleInitialPageButton,
                    disableBack: false
                }) : null
            })
        ]
    });
};

// EXTERNAL MODULE: ./modules/ui/components/confetti/index.tsx + 5 modules
var components_confetti = __webpack_require__(428662);
;// ./app/(app)/environments/[environmentId]/surveys/[surveyId]/(analysis)/summary/components/SuccessMessage.tsx
/* __next_internal_client_entry_do_not_use__ SuccessMessage auto */ 





const SuccessMessage = ({ environment, survey })=>{
    const { t } = (0,tolgee_react_esm/* useTranslate */.WD)();
    const searchParams = (0,navigation.useSearchParams)();
    const [confetti, setConfetti] = (0,react.useState)(false);
    const isAppSurvey = survey.type === "app";
    const widgetSetupCompleted = environment.appSetupCompleted;
    (0,react.useEffect)(()=>{
        const newSurveyParam = searchParams?.get("success");
        if (newSurveyParam && survey && environment) {
            setConfetti(true);
            dist/* default */.Ay.success(isAppSurvey && !widgetSetupCompleted ? t("environments.surveys.summary.almost_there") : t("environments.surveys.summary.congrats"), {
                id: "survey-publish-success-toast",
                icon: isAppSurvey && !widgetSetupCompleted ? "🤏" : "🎉",
                duration: 5000,
                position: "bottom-right"
            });
            // Remove success param from url
            const url = new URL(window.location.href);
            url.searchParams.delete("success");
            if (survey.type === "link") {
                // Add share param to url to open share embed modal
                url.searchParams.set("share", "true");
            }
            window.history.replaceState({}, "", url.toString());
        }
    }, [
        environment,
        isAppSurvey,
        searchParams,
        survey,
        widgetSetupCompleted,
        t
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime.jsx)(react_jsx_runtime.Fragment, {
        children: confetti && /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_confetti/* Confetti */.N, {})
    });
};

// EXTERNAL MODULE: ./modules/ui/components/select/index.tsx
var components_select = __webpack_require__(678372);
// EXTERNAL MODULE: ./modules/ui/components/survey-status-indicator/index.tsx
var survey_status_indicator = __webpack_require__(838861);
// EXTERNAL MODULE: ./modules/ui/components/tooltip/index.tsx
var tooltip = __webpack_require__(163701);
;// ../../node_modules/next/dist/build/webpack/loaders/next-flight-server-reference-proxy-loader.js?id=7fb0b5f9c28bba4f951a5fb2237df27d92cf58a800&name=updateSurveyAction!

const updateSurveyAction = /*#__PURE__*/(0,action_client_wrapper.createServerReference)("7fb0b5f9c28bba4f951a5fb2237df27d92cf58a800", action_client_wrapper.callServer, undefined, action_client_wrapper.findSourceMapURL, "updateSurveyAction")
;// ./app/(app)/environments/[environmentId]/surveys/[surveyId]/components/SurveyStatusDropdown.tsx
/* __next_internal_client_entry_do_not_use__ SurveyStatusDropdown auto */ 







const SurveyStatusDropdown = ({ environment, updateLocalSurveyStatus, survey })=>{
    const { t } = (0,tolgee_react_esm/* useTranslate */.WD)();
    const isCloseOnDateEnabled = survey.closeOnDate !== null;
    const closeOnDate = survey.closeOnDate ? new Date(survey.closeOnDate) : null;
    const isStatusChangeDisabled = (survey.status === "scheduled" || isCloseOnDateEnabled && closeOnDate && closeOnDate < new Date()) ?? false;
    const handleStatusChange = async (status)=>{
        const updateSurveyActionResponse = await updateSurveyAction({
            ...survey,
            status
        });
        if (updateSurveyActionResponse?.data) {
            dist/* default */.Ay.success(status === "inProgress" ? t("common.survey_live") : status === "paused" ? t("common.survey_paused") : status === "completed" ? t("common.survey_completed") : "");
        } else {
            const errorMessage = (0,helper/* getFormattedErrorMessage */.g3)(updateSurveyActionResponse);
            dist/* default */.Ay.error(errorMessage);
        }
        if (updateLocalSurveyStatus) updateLocalSurveyStatus(status);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime.jsx)(react_jsx_runtime.Fragment, {
        children: survey.status === "draft" ? /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
            className: "flex items-center",
            children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                className: "text-sm italic text-slate-600",
                children: t("common.draft")
            })
        }) : /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_select/* Select */.l6, {
            value: survey.status,
            disabled: isStatusChangeDisabled,
            onValueChange: (value)=>{
                handleStatusChange(value);
            },
            children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(tooltip/* TooltipProvider */.Bc, {
                delayDuration: 50,
                children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(tooltip/* Tooltip */.m_, {
                    open: isStatusChangeDisabled ? undefined : false,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)(tooltip/* TooltipTrigger */.k$, {
                            asChild: true,
                            children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_select/* SelectTrigger */.bq, {
                                className: "w-[170px] bg-white md:w-[200px]",
                                children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_select/* SelectValue */.yv, {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                        className: "flex items-center",
                                        children: [
                                            (survey.type === "link" || environment.appSetupCompleted) && /*#__PURE__*/ (0,react_jsx_runtime.jsx)(survey_status_indicator/* SurveyStatusIndicator */.a, {
                                                status: survey.status
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("span", {
                                                className: "ml-2 text-sm text-slate-700",
                                                children: [
                                                    survey.status === "scheduled" && t("common.scheduled"),
                                                    survey.status === "inProgress" && t("common.in_progress"),
                                                    survey.status === "paused" && t("common.paused"),
                                                    survey.status === "completed" && t("common.completed")
                                                ]
                                            })
                                        ]
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(components_select/* SelectContent */.gC, {
                            className: "bg-white",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_select/* SelectItem */.eb, {
                                    className: "group font-normal hover:text-slate-900",
                                    value: "inProgress",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                        className: "flex w-full items-center justify-center gap-4",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(survey_status_indicator/* SurveyStatusIndicator */.a, {
                                                status: "inProgress"
                                            }),
                                            t("common.in_progress")
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_select/* SelectItem */.eb, {
                                    className: "group font-normal hover:text-slate-900",
                                    value: "paused",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                        className: "flex w-full items-center justify-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(survey_status_indicator/* SurveyStatusIndicator */.a, {
                                                status: "paused"
                                            }),
                                            t("common.paused")
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_select/* SelectItem */.eb, {
                                    className: "group font-normal hover:text-slate-900",
                                    value: "completed",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                        className: "flex w-full items-center justify-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(survey_status_indicator/* SurveyStatusIndicator */.a, {
                                                status: "completed"
                                            }),
                                            t("common.completed")
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)(tooltip/* TooltipContent */.ZI, {
                            children: t("environments.surveys.survey_status_tooltip")
                        })
                    ]
                })
            })
        })
    });
};

;// ./modules/ui/components/iconbar/index.tsx



const IconBar = ({ actions })=>{
    if (actions.length === 0) return null;
    return /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
        className: "flex items-center justify-center divide-x rounded-lg border border-slate-300 bg-white",
        role: "toolbar",
        "aria-label": "Action buttons",
        children: actions.filter((action)=>action.isVisible).map((action, index)=>/*#__PURE__*/ (0,react_jsx_runtime.jsx)("span", {
                children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(tooltip/* TooltipRenderer */.rE, {
                    tooltipContent: action.tooltip,
                    children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_button/* Button */.$, {
                        variant: "ghost",
                        className: "border-none hover:bg-slate-50",
                        size: "icon",
                        onClick: action.onClick,
                        "aria-label": action.tooltip,
                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(action.icon, {})
                    })
                })
            }, `${action.tooltip}-${index}`))
    });
};

// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/eye.js
var eye = __webpack_require__(45303);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/square-pen.js
var square_pen = __webpack_require__(660705);
;// ./app/(app)/environments/[environmentId]/surveys/[surveyId]/(analysis)/summary/components/SurveyAnalysisCTA.tsx
/* __next_internal_client_entry_do_not_use__ SurveyAnalysisCTA auto */ 










const SurveyAnalysisCTA = ({ survey, environment, isReadOnly, webAppUrl, user })=>{
    const { t } = (0,tolgee_react_esm/* useTranslate */.WD)();
    const searchParams = (0,navigation.useSearchParams)();
    const pathname = (0,navigation.usePathname)();
    const router = (0,navigation.useRouter)();
    const [modalState, setModalState] = (0,react.useState)({
        share: searchParams.get("share") === "true",
        embed: false,
        panel: false,
        dropdown: false
    });
    const surveyUrl = (0,react.useMemo)(()=>`${webAppUrl}/s/${survey.id}`, [
        survey.id,
        webAppUrl
    ]);
    const widgetSetupCompleted = survey.type === "app" && environment.appSetupCompleted;
    (0,react.useEffect)(()=>{
        setModalState((prev)=>({
                ...prev,
                share: searchParams.get("share") === "true"
            }));
    }, [
        searchParams
    ]);
    const handleShareModalToggle = (open)=>{
        const params = new URLSearchParams(window.location.search);
        if (open) {
            params.set("share", "true");
        } else {
            params.delete("share");
        }
        router.push(`${pathname}?${params.toString()}`);
        setModalState((prev)=>({
                ...prev,
                share: open
            }));
    };
    const handleCopyLink = ()=>{
        navigator.clipboard.writeText(surveyUrl).then(()=>{
            dist/* default */.Ay.success(t("common.copied_to_clipboard"));
        }).catch((err)=>{
            dist/* default */.Ay.error(t("environments.surveys.summary.failed_to_copy_link"));
            console.error(err);
        });
        setModalState((prev)=>({
                ...prev,
                dropdown: false
            }));
    };
    const getPreviewUrl = ()=>{
        const separator = surveyUrl.includes("?") ? "&" : "?";
        return `${surveyUrl}${separator}preview=true`;
    };
    const handleModalState = (modalView)=>{
        return (open)=>{
            const newValue = typeof open === "function" ? open(modalState[modalView]) : open;
            setModalState((prev)=>({
                    ...prev,
                    [modalView]: newValue
                }));
        };
    };
    const shareEmbedViews = [
        {
            key: "share",
            modalView: "start",
            setOpen: handleShareModalToggle
        },
        {
            key: "embed",
            modalView: "embed",
            setOpen: handleModalState("embed")
        },
        {
            key: "panel",
            modalView: "panel",
            setOpen: handleModalState("panel")
        }
    ];
    const iconActions = [
        {
            icon: eye/* default */.A,
            tooltip: t("common.preview"),
            onClick: ()=>window.open(getPreviewUrl(), "_blank"),
            isVisible: survey.type === "link"
        },
        {
            icon: icons_link/* default */.A,
            tooltip: t("common.copy_link"),
            onClick: handleCopyLink,
            isVisible: survey.type === "link"
        },
        {
            icon: code_xml/* default */.A,
            tooltip: t("common.embed"),
            onClick: ()=>handleModalState("embed")(true),
            isVisible: !isReadOnly
        },
        {
            icon: BellRing,
            tooltip: t("environments.surveys.summary.configure_alerts"),
            onClick: ()=>router.push(`/environments/${survey.environmentId}/settings/notifications`),
            isVisible: !isReadOnly
        },
        {
            icon: users_round/* default */.A,
            tooltip: t("environments.surveys.summary.send_to_panel"),
            onClick: ()=>{
                handleModalState("panel")(true);
                setModalState((prev)=>({
                        ...prev,
                        dropdown: false
                    }));
            },
            isVisible: !isReadOnly
        },
        {
            icon: square_pen/* default */.A,
            tooltip: t("common.edit"),
            onClick: ()=>router.push(`/environments/${environment.id}/surveys/${survey.id}/edit`),
            isVisible: !isReadOnly
        }
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
        className: "hidden justify-end gap-x-1.5 sm:flex",
        children: [
            survey.resultShareKey && /*#__PURE__*/ (0,react_jsx_runtime.jsx)(badge/* Badge */.E, {
                type: "warning",
                size: "normal",
                className: "rounded-lg",
                text: t("environments.surveys.summary.results_are_public")
            }),
            !isReadOnly && (widgetSetupCompleted || survey.type === "link") && survey.status !== "draft" && /*#__PURE__*/ (0,react_jsx_runtime.jsx)(SurveyStatusDropdown, {
                environment: environment,
                survey: survey
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(IconBar, {
                actions: iconActions
            }),
            user && /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, {
                children: [
                    shareEmbedViews.map(({ key, modalView, setOpen })=>/*#__PURE__*/ (0,react_jsx_runtime.jsx)(ShareEmbedSurvey, {
                            survey: survey,
                            open: modalState[key],
                            setOpen: setOpen,
                            webAppUrl: webAppUrl,
                            user: user,
                            modalView: modalView
                        }, key)),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(SuccessMessage, {
                        environment: environment,
                        survey: survey
                    })
                ]
            })
        ]
    });
};


/***/ }),

/***/ 856475:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: () => (/* binding */ SurveyLoading)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(642725);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* __next_internal_client_entry_do_not_use__ SurveyLoading auto */ 
const SurveyLoading = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "grid h-full w-full animate-pulse place-content-stretch gap-4",
        children: [
            1,
            2,
            3,
            4,
            5
        ].map((i)=>{
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: "relative flex h-16 flex-col justify-between rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-all ease-in-out",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex w-full items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                            className: "h-4 w-32 rounded-xl bg-slate-400"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                            className: "h-4 w-20 rounded-xl bg-slate-200"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                            className: "h-4 w-20 rounded-xl bg-slate-200"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                            className: "h-4 w-20 rounded-xl bg-slate-200"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                            className: "h-4 w-20 rounded-xl bg-slate-200"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                            className: "h-4 w-20 rounded-xl bg-slate-200"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                            className: "h-8 w-8 rounded-md bg-slate-300"
                        })
                    ]
                })
            }, i);
        })
    });
};


/***/ }),

/***/ 251482:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(642725);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_app_environments_environmentId_surveys_components_SurveyLoading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(856475);
/* harmony import */ var _modules_ui_components_page_content_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(101499);
/* harmony import */ var _modules_ui_components_page_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(662709);
/* harmony import */ var _tolgee_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(397674);
/* __next_internal_client_entry_do_not_use__ default auto */ 




const Loading = ()=>{
    const { t } = (0,_tolgee_react__WEBPACK_IMPORTED_MODULE_4__/* .useTranslate */ .WD)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_modules_ui_components_page_content_wrapper__WEBPACK_IMPORTED_MODULE_2__/* .PageContentWrapper */ .s, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_modules_ui_components_page_header__WEBPACK_IMPORTED_MODULE_3__/* .PageHeader */ .z, {
                pageTitle: t("common.surveys")
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex h-9 animate-pulse gap-2",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                className: "w-48 rounded-md bg-slate-300"
                            }),
                            [
                                1,
                                2,
                                3
                            ].map((i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                    className: "w-24 rounded-md bg-slate-300"
                                }, i))
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex h-9 animate-pulse gap-2",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                className: "w-9 rounded-md bg-slate-300"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                className: "w-9 rounded-md bg-slate-300"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                className: "w-36 rounded-md bg-slate-300"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_app_environments_environmentId_surveys_components_SurveyLoading__WEBPACK_IMPORTED_MODULE_1__/* .SurveyLoading */ .J, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loading);


/***/ }),

/***/ 115713:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ AdvancedOptionToggle)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(642725);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_ui_components_label__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61330);
/* harmony import */ var _modules_ui_components_switch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(493204);
/* harmony import */ var _formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(983773);




const AdvancedOptionToggle = ({ isChecked, onToggle, htmlId, title, description, children, childBorder, customContainerClass, disabled = false })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_3__.cn)("px-4 py-2", customContainerClass),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex items-center space-x-1",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_modules_ui_components_switch__WEBPACK_IMPORTED_MODULE_2__/* .Switch */ .d, {
                        id: htmlId,
                        checked: isChecked,
                        onCheckedChange: onToggle,
                        disabled: disabled
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_modules_ui_components_label__WEBPACK_IMPORTED_MODULE_1__/* .Label */ .J, {
                        htmlFor: htmlId,
                        className: "cursor-pointer rounded-l-lg",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "ml-2",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", {
                                    className: "text-sm font-semibold text-slate-700",
                                    children: title
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                    className: "text-xs font-normal text-slate-500",
                                    children: description
                                })
                            ]
                        })
                    })
                ]
            }),
            children && isChecked && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: `mt-4 flex w-full items-center space-x-1 rounded-lg ${childBorder ? "border" : ""} bg-slate-50`,
                children: children
            })
        ]
    });
};


/***/ }),

/***/ 886762:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Fc: () => (/* binding */ Alert),
/* harmony export */   TN: () => (/* binding */ AlertDescription),
/* harmony export */   XL: () => (/* binding */ AlertTitle)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(642725);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var class_variance_authority__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(607918);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(891616);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(983773);




const alertVariants = (0,class_variance_authority__WEBPACK_IMPORTED_MODULE_2__/* .cva */ .F)("relative w-full rounded-xl border p-3 [&>svg]:absolute [&>svg]:text-foreground [&>svg]:left-3 [&>svg]:top-3 [&>svg+div]:translate-y-[-3px] [&:has(svg)]:pl-9", {
    variants: {
        variant: {
            default: "bg-background text-foreground",
            destructive: "text-destructive border-destructive/50 dark:border-destructive [&>svg]:text-destructive text-destructive",
            info: "text-slate-800 bg-brand/5",
            warning: "text-yellow-700 bg-yellow-50",
            error: "border-error/50 dark:border-error [&>svg]:text-error text-error"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
const Alert = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, variant, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        ref: ref,
        role: "alert",
        className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_3__.cn)(alertVariants({
            variant
        }), className),
        ...props
    }));
Alert.displayName = "Alert";
const AlertTitle = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h5", {
        ref: ref,
        className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_3__.cn)("mb-1 cursor-default font-medium leading-none", className),
        ...props
    }));
AlertTitle.displayName = "AlertTitle";
const AlertDescription = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        ref: ref,
        className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_3__.cn)("cursor-default text-sm [&_p]:leading-relaxed", className),
        ...props
    }));
AlertDescription.displayName = "AlertDescription";



/***/ }),

/***/ 661989:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ Badge)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(642725);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(983773);


const Badge = ({ text, type, size, className })=>{
    const bgColor = {
        warning: "bg-amber-100",
        success: "bg-emerald-100",
        error: "bg-red-100",
        gray: "bg-slate-100"
    };
    const borderColor = {
        warning: "border-amber-200",
        success: "border-emerald-200",
        error: "border-red-200",
        gray: "border-slate-200"
    };
    const textColor = {
        warning: "text-amber-800",
        success: "text-emerald-800",
        error: "text-red-800",
        gray: "text-slate-600"
    };
    const padding = {
        tiny: "px-1.5 py-0.5",
        normal: "px-2.5 py-0.5",
        large: "px-3.5 py-1"
    };
    const textSize = size === "large" ? "text-sm" : "text-xs";
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
        className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_1__.cn)("inline-flex cursor-default items-center rounded-full border font-medium", bgColor[type], borderColor[type], textColor[type], padding[size], textSize, className),
        children: text
    });
};


/***/ }),

/***/ 859823:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ CodeBlock)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(642725);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tolgee_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(397674);
/* harmony import */ var _barrel_optimize_names_CopyIcon_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(875677);
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(973711);
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prismjs_themes_prism_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(976266);
/* harmony import */ var prismjs_themes_prism_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prismjs_themes_prism_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(891616);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(986090);
/* harmony import */ var _formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(983773);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(327968);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_5__);
/* __next_internal_client_entry_do_not_use__ CodeBlock auto */ 








const CodeBlock = ({ children, language, customEditorClass = "", customCodeClass = "", showCopyToClipboard = true })=>{
    const { t } = (0,_tolgee_react__WEBPACK_IMPORTED_MODULE_6__/* .useTranslate */ .WD)();
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        prismjs__WEBPACK_IMPORTED_MODULE_1___default().highlightAll();
    }, [
        children
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "group relative mt-4 rounded-md text-sm text-slate-200",
        children: [
            showCopyToClipboard && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: "absolute right-2 top-2 z-20 flex cursor-pointer items-center justify-center p-1.5 text-slate-500 hover:text-slate-900",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_CopyIcon_lucide_react__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
                    onClick: ()=>{
                        const childText = children?.toString() || "";
                        navigator.clipboard.writeText(childText);
                        react_hot_toast__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Ay.success(t("common.copied_to_clipboard"));
                    },
                    className: "h-4 w-4"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("pre", {
                className: customEditorClass,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
                    className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_8__.cn)(`language-${language} whitespace-pre-wrap`, customCodeClass),
                    children: children
                })
            })
        ]
    });
};


/***/ }),

/***/ 428662:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  N: () => (/* binding */ Confetti)
});

// EXTERNAL MODULE: ../../node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js
var react_jsx_runtime = __webpack_require__(642725);
// EXTERNAL MODULE: ../../node_modules/react-confetti/dist/react-confetti.min.js
var react_confetti_min = __webpack_require__(872495);
var react_confetti_min_default = /*#__PURE__*/__webpack_require__.n(react_confetti_min);
// EXTERNAL MODULE: ../../node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js
var react = __webpack_require__(891616);
;// ../../node_modules/react-use/esm/useEffectOnce.js

var useEffectOnce = function(effect) {
    (0,react.useEffect)(effect, []);
};
/* harmony default export */ const esm_useEffectOnce = (useEffectOnce);

;// ../../node_modules/react-use/esm/useUnmount.js


var useUnmount = function(fn) {
    var fnRef = (0,react.useRef)(fn);
    // update the ref each render so if it change the newest callback will be invoked
    fnRef.current = fn;
    esm_useEffectOnce(function() {
        return function() {
            return fnRef.current();
        };
    });
};
/* harmony default export */ const esm_useUnmount = (useUnmount);

;// ../../node_modules/react-use/esm/useRafState.js


var useRafState = function(initialState) {
    var frame = (0,react.useRef)(0);
    var _a = (0,react.useState)(initialState), state = _a[0], setState = _a[1];
    var setRafState = (0,react.useCallback)(function(value) {
        cancelAnimationFrame(frame.current);
        frame.current = requestAnimationFrame(function() {
            setState(value);
        });
    }, []);
    esm_useUnmount(function() {
        cancelAnimationFrame(frame.current);
    });
    return [
        state,
        setRafState
    ];
};
/* harmony default export */ const esm_useRafState = (useRafState);

;// ../../node_modules/react-use/esm/misc/util.js
var noop = function() {};
function on(obj) {
    var args = [];
    for(var _i = 1; _i < arguments.length; _i++){
        args[_i - 1] = arguments[_i];
    }
    if (obj && obj.addEventListener) {
        obj.addEventListener.apply(obj, args);
    }
}
function off(obj) {
    var args = [];
    for(var _i = 1; _i < arguments.length; _i++){
        args[_i - 1] = arguments[_i];
    }
    if (obj && obj.removeEventListener) {
        obj.removeEventListener.apply(obj, args);
    }
}
var isBrowser = "undefined" !== 'undefined';
var isNavigator = typeof navigator !== 'undefined';

;// ../../node_modules/react-use/esm/useWindowSize.js



var useWindowSize = function(_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.initialWidth, initialWidth = _c === void 0 ? Infinity : _c, _d = _b.initialHeight, initialHeight = _d === void 0 ? Infinity : _d, onChange = _b.onChange;
    // Use the useRafState hook to maintain the current window size (width and height)
    var _e = esm_useRafState({
        width: isBrowser ? window.innerWidth : initialWidth,
        height: isBrowser ? window.innerHeight : initialHeight
    }), state = _e[0], setState = _e[1];
    (0,react.useEffect)(function() {
        // Only run the effect on the browser (to avoid issues with SSR)
        if (isBrowser) {
            var handler_1 = function() {
                var width = window.innerWidth;
                var height = window.innerHeight;
                // Update the state with the new window size
                setState({
                    width: width,
                    height: height
                });
                // If an onChange callback is provided, call it with the new dimensions
                if (onChange) onChange(width, height);
            };
            // Add event listener for the resize event
            on(window, 'resize', handler_1);
            // Cleanup function to remove the event listener when the component is unmounted (it's for performance optimization)
            return function() {
                off(window, 'resize', handler_1);
            };
        }
    }, []);
    // Return the current window size (width and height)
    return state;
};
/* harmony default export */ const esm_useWindowSize = (useWindowSize);

;// ./modules/ui/components/confetti/index.tsx
/* __next_internal_client_entry_do_not_use__ Confetti auto */ 


const Confetti = ({ colors = [
    "#00C4B8",
    "#eee"
] })=>{
    const { width, height } = esm_useWindowSize();
    return /*#__PURE__*/ (0,react_jsx_runtime.jsx)((react_confetti_min_default()), {
        width: width,
        height: height,
        colors: colors,
        numberOfPieces: 400,
        recycle: false
    });
};


/***/ }),

/***/ 829884:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoadingSpinner: () => (/* binding */ LoadingSpinner)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(642725);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(983773);
/* __next_internal_client_entry_do_not_use__ LoadingSpinner auto */ 

const LoadingSpinner = ({ className = "h-6 w-6" })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "flex h-full w-full items-center justify-center",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
            className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_1__.cn)("m-2 animate-spin text-slate-700", className),
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", {
                    className: "opacity-25",
                    cx: "12",
                    cy: "12",
                    r: "10",
                    stroke: "currentColor",
                    strokeWidth: "4"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                    className: "opacity-75",
                    fill: "currentColor",
                    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                })
            ]
        })
    });
};


/***/ }),

/***/ 465775:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ OptionsSwitch)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(642725);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(891616);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const OptionsSwitch = ({ options: questionTypes, currentOption, handleOptionChange })=>{
    const [highlightStyle, setHighlightStyle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (containerRef.current) {
            const activeElement = containerRef.current.querySelector(`[data-value="${currentOption}"]`);
            if (activeElement) {
                const { offsetLeft, offsetWidth } = activeElement;
                setHighlightStyle({
                    left: `${offsetLeft}px`,
                    width: `${offsetWidth}px`
                });
            }
        }
    }, [
        currentOption
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        ref: containerRef,
        className: "relative flex w-full items-center justify-between rounded-md border bg-white p-1",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: "absolute bottom-1 top-1 rounded-md bg-slate-100 transition-all duration-300 ease-in-out",
                style: highlightStyle
            }),
            questionTypes.map((type)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                    "data-value": type.value,
                    onClick: ()=>!type.disabled && handleOptionChange(type.value),
                    className: `relative z-10 flex-grow rounded-md p-2 text-center transition-colors duration-200 ${type.disabled ? "cursor-not-allowed opacity-50" : currentOption === type.value ? "" : "cursor-pointer hover:bg-slate-50"}`,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex items-center justify-center space-x-2",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                className: "text-sm text-slate-900",
                                children: type.label
                            }),
                            type.icon && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                className: "h-4 w-4 text-slate-600 hover:text-slate-800",
                                children: type.icon
                            })
                        ]
                    })
                }, type.value))
        ]
    });
};


/***/ }),

/***/ 101499:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* binding */ PageContentWrapper)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(642725);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(983773);


const PageContentWrapper = ({ children, className })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_1__.cn)("h-full space-y-6 p-6", className),
        children: children
    });
};


/***/ }),

/***/ 662709:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: () => (/* binding */ PageHeader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(642725);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(983773);


const PageHeader = ({ cta, pageTitle, children })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "border-b border-slate-200",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex items-center justify-between space-x-4 pb-4",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1", {
                        className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_1__.cn)("text-3xl font-bold capitalize text-slate-800"),
                        children: pageTitle
                    }),
                    cta
                ]
            }),
            children
        ]
    });
};


/***/ }),

/***/ 678372:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bq: () => (/* binding */ SelectTrigger),
/* harmony export */   eb: () => (/* binding */ SelectItem),
/* harmony export */   gC: () => (/* binding */ SelectContent),
/* harmony export */   l6: () => (/* binding */ Select),
/* harmony export */   s3: () => (/* binding */ SelectGroup),
/* harmony export */   yv: () => (/* binding */ SelectValue)
/* harmony export */ });
/* unused harmony exports SelectLabel, SelectSeparator */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(642725);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(750408);
/* harmony import */ var _barrel_optimize_names_ChevronDown_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(668382);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(891616);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(983773);
/* __next_internal_client_entry_do_not_use__ Select,SelectContent,SelectGroup,SelectItem,SelectLabel,SelectSeparator,SelectTrigger,SelectValue auto */ 




const Select = _radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__/* .Root */ .bL;
const SelectGroup = _radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__/* .Group */ .YJ;
const SelectValue = _radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__/* .Value */ .WT;
const SelectTrigger = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, hideArrow, children, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__/* .Trigger */ .l9, {
        ref: ref,
        className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_3__.cn)("flex h-10 w-full items-center justify-between rounded-md border border-slate-300 bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 data-[placeholder]:text-slate-400", className),
        ...props,
        children: [
            children,
            !hideArrow ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_ChevronDown_lucide_react__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
                className: "h-4 w-4 opacity-50"
            }) : null
        ]
    }));
SelectTrigger.displayName = _radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__/* .Trigger */ .l9.displayName;
const SelectContent = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, children, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__/* .Portal */ .ZL, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__/* .Content */ .UC, {
            ref: ref,
            className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_3__.cn)("animate-in fade-in-80 relative z-50 min-w-[8rem] overflow-hidden rounded-md border border-slate-100 bg-white text-slate-700 shadow-md dark:bg-slate-700 dark:text-slate-300", className),
            ...props,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__/* .Viewport */ .LM, {
                className: "p-1",
                children: children
            })
        })
    }));
SelectContent.displayName = _radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__/* .Content */ .UC.displayName;
const SelectLabel = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__/* .Label */ .JU, {
        ref: ref,
        className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_3__.cn)("py-1.5 pl-8 pr-2 text-sm font-semibold text-slate-900 dark:text-slate-200", className),
        ...props
    }));
SelectLabel.displayName = _radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__/* .Label */ .JU.displayName;
const SelectItem = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, children, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__/* .Item */ .q7, {
        ref: ref,
        className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_3__.cn)("relative flex cursor-pointer select-none items-center rounded-md py-1.5 pl-2 pr-2 text-sm font-medium outline-none focus:bg-slate-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__/* .ItemText */ .p4, {
            children: children
        })
    }));
SelectItem.displayName = _radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__/* .Item */ .q7.displayName;
const SelectSeparator = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__/* .Separator */ .wv, {
        ref: ref,
        className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_3__.cn)("-mx-1 my-1 h-px bg-slate-100", className),
        ...props
    }));
SelectSeparator.displayName = _radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__/* .Separator */ .wv.displayName;



/***/ }),

/***/ 681129:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ ArrowLeft)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58303);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const ArrowLeft = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("ArrowLeft", [
    [
        "path",
        {
            d: "m12 19-7-7 7-7",
            key: "1l729n"
        }
    ],
    [
        "path",
        {
            d: "M19 12H5",
            key: "x3x0zl"
        }
    ]
]);
 //# sourceMappingURL=arrow-left.js.map


/***/ }),

/***/ 217537:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ CodeXml)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58303);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const CodeXml = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("CodeXml", [
    [
        "path",
        {
            d: "m18 16 4-4-4-4",
            key: "1inbqp"
        }
    ],
    [
        "path",
        {
            d: "m6 8-4 4 4 4",
            key: "15zrgr"
        }
    ],
    [
        "path",
        {
            d: "m14.5 4-5 16",
            key: "e7oirm"
        }
    ]
]);
 //# sourceMappingURL=code-xml.js.map


/***/ }),

/***/ 158539:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Sparkles)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58303);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Sparkles = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("Sparkles", [
    [
        "path",
        {
            d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
            key: "4pj2yx"
        }
    ],
    [
        "path",
        {
            d: "M20 3v4",
            key: "1olli1"
        }
    ],
    [
        "path",
        {
            d: "M22 5h-4",
            key: "1gvqau"
        }
    ],
    [
        "path",
        {
            d: "M4 17v2",
            key: "vumght"
        }
    ],
    [
        "path",
        {
            d: "M5 18H3",
            key: "zchphs"
        }
    ]
]);
 //# sourceMappingURL=sparkles.js.map


/***/ }),

/***/ 211119:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ UsersRound)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58303);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const UsersRound = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("UsersRound", [
    [
        "path",
        {
            d: "M18 21a8 8 0 0 0-16 0",
            key: "3ypg7q"
        }
    ],
    [
        "circle",
        {
            cx: "10",
            cy: "8",
            r: "5",
            key: "o932ke"
        }
    ],
    [
        "path",
        {
            d: "M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3",
            key: "10s06x"
        }
    ]
]);
 //# sourceMappingURL=users-round.js.map


/***/ }),

/***/ 872495:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function(t,e){ true?module.exports=e(__webpack_require__(891616)):0}("undefined"!=typeof self?self:this,(function(t){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=2)}([function(e,n){e.exports=t},function(t,e,n){"use strict";var r={linear:function(t,e,n,r){return(n-e)*t/r+e},easeInQuad:function(t,e,n,r){return(n-e)*(t/=r)*t+e},easeOutQuad:function(t,e,n,r){return-(n-e)*(t/=r)*(t-2)+e},easeInOutQuad:function(t,e,n,r){var i=n-e;return(t/=r/2)<1?i/2*t*t+e:-i/2*(--t*(t-2)-1)+e},easeInCubic:function(t,e,n,r){return(n-e)*(t/=r)*t*t+e},easeOutCubic:function(t,e,n,r){return(n-e)*((t=t/r-1)*t*t+1)+e},easeInOutCubic:function(t,e,n,r){var i=n-e;return(t/=r/2)<1?i/2*t*t*t+e:i/2*((t-=2)*t*t+2)+e},easeInQuart:function(t,e,n,r){return(n-e)*(t/=r)*t*t*t+e},easeOutQuart:function(t,e,n,r){return-(n-e)*((t=t/r-1)*t*t*t-1)+e},easeInOutQuart:function(t,e,n,r){var i=n-e;return(t/=r/2)<1?i/2*t*t*t*t+e:-i/2*((t-=2)*t*t*t-2)+e},easeInQuint:function(t,e,n,r){return(n-e)*(t/=r)*t*t*t*t+e},easeOutQuint:function(t,e,n,r){return(n-e)*((t=t/r-1)*t*t*t*t+1)+e},easeInOutQuint:function(t,e,n,r){var i=n-e;return(t/=r/2)<1?i/2*t*t*t*t*t+e:i/2*((t-=2)*t*t*t*t+2)+e},easeInSine:function(t,e,n,r){var i=n-e;return-i*Math.cos(t/r*(Math.PI/2))+i+e},easeOutSine:function(t,e,n,r){return(n-e)*Math.sin(t/r*(Math.PI/2))+e},easeInOutSine:function(t,e,n,r){return-(n-e)/2*(Math.cos(Math.PI*t/r)-1)+e},easeInExpo:function(t,e,n,r){return 0==t?e:(n-e)*Math.pow(2,10*(t/r-1))+e},easeOutExpo:function(t,e,n,r){var i=n-e;return t==r?e+i:i*(1-Math.pow(2,-10*t/r))+e},easeInOutExpo:function(t,e,n,r){var i=n-e;return 0===t?e:t===r?e+i:(t/=r/2)<1?i/2*Math.pow(2,10*(t-1))+e:i/2*(2-Math.pow(2,-10*--t))+e},easeInCirc:function(t,e,n,r){return-(n-e)*(Math.sqrt(1-(t/=r)*t)-1)+e},easeOutCirc:function(t,e,n,r){return(n-e)*Math.sqrt(1-(t=t/r-1)*t)+e},easeInOutCirc:function(t,e,n,r){var i=n-e;return(t/=r/2)<1?-i/2*(Math.sqrt(1-t*t)-1)+e:i/2*(Math.sqrt(1-(t-=2)*t)+1)+e},easeInElastic:function(t,e,n,r){var i,o,a,c=n-e;return a=1.70158,0===t?e:1==(t/=r)?e+c:((o=0)||(o=.3*r),(i=c)<Math.abs(c)?(i=c,a=o/4):a=o/(2*Math.PI)*Math.asin(c/i),-i*Math.pow(2,10*(t-=1))*Math.sin((t*r-a)*(2*Math.PI)/o)+e)},easeOutElastic:function(t,e,n,r){var i,o,a,c=n-e;return a=1.70158,0===t?e:1==(t/=r)?e+c:((o=0)||(o=.3*r),(i=c)<Math.abs(c)?(i=c,a=o/4):a=o/(2*Math.PI)*Math.asin(c/i),i*Math.pow(2,-10*t)*Math.sin((t*r-a)*(2*Math.PI)/o)+c+e)},easeInOutElastic:function(t,e,n,r){var i,o,a,c=n-e;return a=1.70158,0===t?e:2==(t/=r/2)?e+c:((o=0)||(o=r*(.3*1.5)),(i=c)<Math.abs(c)?(i=c,a=o/4):a=o/(2*Math.PI)*Math.asin(c/i),t<1?i*Math.pow(2,10*(t-=1))*Math.sin((t*r-a)*(2*Math.PI)/o)*-.5+e:i*Math.pow(2,-10*(t-=1))*Math.sin((t*r-a)*(2*Math.PI)/o)*.5+c+e)},easeInBack:function(t,e,n,r,i){return void 0===i&&(i=1.70158),(n-e)*(t/=r)*t*((i+1)*t-i)+e},easeOutBack:function(t,e,n,r,i){return void 0===i&&(i=1.70158),(n-e)*((t=t/r-1)*t*((i+1)*t+i)+1)+e},easeInOutBack:function(t,e,n,r,i){var o=n-e;return void 0===i&&(i=1.70158),(t/=r/2)<1?o/2*(t*t*((1+(i*=1.525))*t-i))+e:o/2*((t-=2)*t*((1+(i*=1.525))*t+i)+2)+e},easeInBounce:function(t,e,n,i){var o=n-e;return o-r.easeOutBounce(i-t,0,o,i)+e},easeOutBounce:function(t,e,n,r){var i=n-e;return(t/=r)<1/2.75?i*(7.5625*t*t)+e:t<2/2.75?i*(7.5625*(t-=1.5/2.75)*t+.75)+e:t<2.5/2.75?i*(7.5625*(t-=2.25/2.75)*t+.9375)+e:i*(7.5625*(t-=2.625/2.75)*t+.984375)+e},easeInOutBounce:function(t,e,n,i){var o=n-e;return t<i/2?.5*r.easeInBounce(2*t,0,o,i)+e:.5*r.easeOutBounce(2*t-i,0,o,i)+.5*o+e}};t.exports=r},function(t,e,n){t.exports=n(3)},function(t,e,n){"use strict";n.r(e),n.d(e,"ReactConfetti",(function(){return Q}));var r,i,o=n(0),a=n.n(o),c=n(1),s=n.n(c);function u(t,e){return t+Math.random()*(e-t)}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function h(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}!function(t){t[t.Circle=0]="Circle",t[t.Square=1]="Square",t[t.Strip=2]="Strip"}(r||(r={})),function(t){t[t.Positive=1]="Positive",t[t.Negative=-1]="Negative"}(i||(i={}));var l=function(){function t(e,n,r,o){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),h(this,"context",void 0),h(this,"radius",void 0),h(this,"x",void 0),h(this,"y",void 0),h(this,"w",void 0),h(this,"h",void 0),h(this,"vx",void 0),h(this,"vy",void 0),h(this,"shape",void 0),h(this,"angle",void 0),h(this,"angularSpin",void 0),h(this,"color",void 0),h(this,"rotateY",void 0),h(this,"rotationDirection",void 0),h(this,"getOptions",void 0),this.getOptions=n;var a,c,s=this.getOptions(),f=s.colors,l=s.initialVelocityX,p=s.initialVelocityY;this.context=e,this.x=r,this.y=o,this.w=u(5,20),this.h=u(5,20),this.radius=u(5,10),this.vx="number"==typeof l?u(-l,l):u(l.min,l.max),this.vy="number"==typeof p?u(-p,0):u(p.min,p.max),this.shape=(a=0,c=2,Math.floor(a+Math.random()*(c-a+1))),this.angle=u(0,360)*Math.PI/180,this.angularSpin=u(-.2,.2),this.color=f[Math.floor(Math.random()*f.length)],this.rotateY=u(0,1),this.rotationDirection=u(0,1)?i.Positive:i.Negative}var e,n,o;return e=t,(n=[{key:"update",value:function(){var t=this.getOptions(),e=t.gravity,n=t.wind,o=t.friction,a=t.opacity,c=t.drawShape;this.x+=this.vx,this.y+=this.vy,this.vy+=e,this.vx+=n,this.vx*=o,this.vy*=o,this.rotateY>=1&&this.rotationDirection===i.Positive?this.rotationDirection=i.Negative:this.rotateY<=-1&&this.rotationDirection===i.Negative&&(this.rotationDirection=i.Positive);var s=.1*this.rotationDirection;if(this.rotateY+=s,this.angle+=this.angularSpin,this.context.save(),this.context.translate(this.x,this.y),this.context.rotate(this.angle),this.context.scale(1,this.rotateY),this.context.rotate(this.angle),this.context.beginPath(),this.context.fillStyle=this.color,this.context.strokeStyle=this.color,this.context.globalAlpha=a,this.context.lineCap="round",this.context.lineWidth=2,c&&"function"==typeof c)c.call(this,this.context);else switch(this.shape){case r.Circle:this.context.beginPath(),this.context.arc(0,0,this.radius,0,2*Math.PI),this.context.fill();break;case r.Square:this.context.fillRect(-this.w/2,-this.h/2,this.w,this.h);break;case r.Strip:this.context.fillRect(-this.w/6,-this.h/2,this.w/3,this.h)}this.context.closePath(),this.context.restore()}}])&&f(e.prototype,n),o&&f(e,o),t}();function p(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var v=function t(e,n){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),p(this,"canvas",void 0),p(this,"context",void 0),p(this,"getOptions",void 0),p(this,"x",0),p(this,"y",0),p(this,"w",0),p(this,"h",0),p(this,"lastNumberOfPieces",0),p(this,"tweenInitTime",Date.now()),p(this,"particles",[]),p(this,"particlesGenerated",0),p(this,"removeParticleAt",(function(t){r.particles.splice(t,1)})),p(this,"getParticle",(function(){var t=u(r.x,r.w+r.x),e=u(r.y,r.h+r.y);return new l(r.context,r.getOptions,t,e)})),p(this,"animate",(function(){var t=r.canvas,e=r.context,n=r.particlesGenerated,i=r.lastNumberOfPieces,o=r.getOptions(),a=o.run,c=o.recycle,s=o.numberOfPieces,u=o.debug,f=o.tweenFunction,h=o.tweenDuration;if(!a)return!1;var l=r.particles.length,p=c?l:n,v=Date.now();if(p<s){i!==s&&(r.tweenInitTime=v,r.lastNumberOfPieces=s);for(var y=r.tweenInitTime,d=f(v-y>h?h:Math.max(0,v-y),p,s,h),b=Math.round(d-p),g=0;g<b;g++)r.particles.push(r.getParticle());r.particlesGenerated+=b}return u&&(e.font="12px sans-serif",e.fillStyle="#333",e.textAlign="right",e.fillText("Particles: ".concat(l),t.width-10,t.height-20)),r.particles.forEach((function(e,n){e.update(),(e.y>t.height||e.y<-100||e.x>t.width+100||e.x<-100)&&(c&&p<=s?r.particles[n]=r.getParticle():r.removeParticleAt(n))})),l>0||p<s})),this.canvas=e;var i=this.canvas.getContext("2d");if(!i)throw new Error("Could not get canvas context");this.context=i,this.getOptions=n};function y(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?y(Object(n),!0).forEach((function(e){g(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function b(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function g(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var O={width:"undefined"!=typeof window?window.innerWidth:300,height:"undefined"!=typeof window?window.innerHeight:200,numberOfPieces:200,friction:.99,wind:0,gravity:.1,initialVelocityX:4,initialVelocityY:10,colors:["#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4CAF50","#8BC34A","#CDDC39","#FFEB3B","#FFC107","#FF9800","#FF5722","#795548"],opacity:1,debug:!1,tweenFunction:s.a.easeInOutQuad,tweenDuration:5e3,recycle:!0,run:!0},w=function(){function t(e,n){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),g(this,"canvas",void 0),g(this,"context",void 0),g(this,"_options",void 0),g(this,"generator",void 0),g(this,"rafId",void 0),g(this,"setOptionsWithDefaults",(function(t){var e={confettiSource:{x:0,y:0,w:r.canvas.width,h:0}};r._options=d(d(d({},e),O),t),Object.assign(r,t.confettiSource)})),g(this,"update",(function(){var t=r.options,e=t.run,n=t.onConfettiComplete,i=r.canvas,o=r.context;e&&(o.fillStyle="white",o.clearRect(0,0,i.width,i.height)),r.generator.animate()?r.rafId=requestAnimationFrame(r.update):(n&&"function"==typeof n&&r.generator.particlesGenerated>0&&n.call(r,r),r._options.run=!1)})),g(this,"reset",(function(){r.generator&&r.generator.particlesGenerated>0&&(r.generator.particlesGenerated=0,r.generator.particles=[],r.generator.lastNumberOfPieces=0)})),g(this,"stop",(function(){r.options={run:!1},r.rafId&&(cancelAnimationFrame(r.rafId),r.rafId=void 0)})),this.canvas=e;var i=this.canvas.getContext("2d");if(!i)throw new Error("Could not get canvas context");this.context=i,this.generator=new v(this.canvas,(function(){return r.options})),this.options=n,this.update()}var e,n,r;return e=t,(n=[{key:"options",get:function(){return this._options},set:function(t){var e=this._options&&this._options.run,n=this._options&&this._options.recycle;this.setOptionsWithDefaults(t),this.generator&&(Object.assign(this.generator,this.options.confettiSource),"boolean"==typeof t.recycle&&t.recycle&&!1===n&&(this.generator.lastNumberOfPieces=this.generator.particles.length)),"boolean"==typeof t.run&&t.run&&!1===e&&this.update()}}])&&b(e.prototype,n),r&&b(e,r),t}();function m(t){return function(t){if(Array.isArray(t))return C(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||S(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(t){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function P(){return(P=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function j(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function M(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?j(Object(n),!0).forEach((function(e){T(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function I(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,i=!1,o=void 0;try{for(var a,c=t[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){i=!0,o=t}finally{try{r||null==c.return||c.return()}finally{if(i)throw o}}return n}(t,e)||S(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(t,e){if(t){if("string"==typeof t)return C(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?C(t,e):void 0}}function C(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function D(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function E(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _(t,e){return(_=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function R(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=F(t);if(e){var i=F(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return k(this,n)}}function k(t,e){return!e||"object"!==x(e)&&"function"!=typeof e?A(t):e}function A(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function F(t){return(F=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function T(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var B=a.a.createRef(),N=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_(t,e)}(o,t);var e,n,r,i=R(o);function o(t){var e;D(this,o);for(var n=arguments.length,r=new Array(n>1?n-1:0),c=1;c<n;c++)r[c-1]=arguments[c];return T(A(e=i.call.apply(i,[this,t].concat(r))),"canvas",a.a.createRef()),T(A(e),"confetti",void 0),e.canvas=t.canvasRef||B,e}return e=o,(n=[{key:"componentDidMount",value:function(){if(this.canvas.current){var t=q(this.props)[0];this.confetti=new w(this.canvas.current,t)}}},{key:"componentDidUpdate",value:function(){var t=q(this.props)[0];this.confetti&&(this.confetti.options=t)}},{key:"componentWillUnmount",value:function(){this.confetti&&this.confetti.stop(),this.confetti=void 0}},{key:"render",value:function(){var t=I(q(this.props),2),e=t[0],n=t[1],r=M({zIndex:2,position:"absolute",pointerEvents:"none",top:0,left:0,bottom:0,right:0},n.style);return a.a.createElement("canvas",P({width:e.width,height:e.height,ref:this.canvas},n,{style:r}))}}])&&E(e.prototype,n),r&&E(e,r),o}(o.Component);function q(t){var e={},n={},r=[].concat(m(Object.keys(O)),["confettiSource","drawShape","onConfettiComplete"]),i=["canvasRef"];for(var o in t){var a=t[o];r.includes(o)?e[o]=a:i.includes(o)?i[o]=a:n[o]=a}return[e,n,{}]}T(N,"defaultProps",M({},O)),T(N,"displayName","ReactConfetti");var Q=a.a.forwardRef((function(t,e){return a.a.createElement(N,P({canvasRef:e},t))}));e.default=Q}]).default}));
//# sourceMappingURL=react-confetti.min.js.map

/***/ }),

/***/ 274382:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   generateMetadata: () => (/* binding */ generateMetadata)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(891069);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_auth_lib_authOptions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(136015);
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(963302);
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _formbricks_lib_response_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(408478);
/* harmony import */ var _formbricks_lib_survey_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(222118);





const generateMetadata = async (props)=>{
    const params = await props.params;
    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_2__.getServerSession)(_modules_auth_lib_authOptions__WEBPACK_IMPORTED_MODULE_1__/* .authOptions */ .N);
    const survey = await (0,_formbricks_lib_survey_service__WEBPACK_IMPORTED_MODULE_3__/* .getSurvey */ .Dp)(params.surveyId);
    const responseCount = await (0,_formbricks_lib_response_service__WEBPACK_IMPORTED_MODULE_4__/* .getResponseCountBySurveyId */ .h4)(params.surveyId);
    if (session) {
        return {
            title: `${responseCount} Responses | ${survey?.name} Results`
        };
    }
    return {
        title: ""
    };
};
const SurveyLayout = async ({ children })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SurveyLayout);


/***/ }),

/***/ 755100:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EnableInsightsBanner: () => (/* binding */ EnableInsightsBanner)
/* harmony export */ });
/* harmony import */ var react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(672771);
/* harmony import */ var react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_0__);

const EnableInsightsBanner = (0,react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_0__.registerClientReference)(
function() { throw new Error("Attempted to call EnableInsightsBanner() from the server but EnableInsightsBanner is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component."); },
"/Users/kdy1/projects/formbricks/apps/web/app/(app)/environments/[environmentId]/surveys/[surveyId]/(analysis)/summary/components/EnableInsightsBanner.tsx",
"EnableInsightsBanner",
);

/***/ }),

/***/ 259028:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyAnalysisCTA: () => (/* binding */ SurveyAnalysisCTA)
/* harmony export */ });
/* harmony import */ var react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(672771);
/* harmony import */ var react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_0__);

const SurveyAnalysisCTA = (0,react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_0__.registerClientReference)(
function() { throw new Error("Attempted to call SurveyAnalysisCTA() from the server but SurveyAnalysisCTA is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component."); },
"/Users/kdy1/projects/formbricks/apps/web/app/(app)/environments/[environmentId]/surveys/[surveyId]/(analysis)/summary/components/SurveyAnalysisCTA.tsx",
"SurveyAnalysisCTA",
);

/***/ }),

/***/ 438136:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Rs: () => (/* binding */ needsInsightsGeneration)
/* harmony export */ });
/* unused harmony exports convertFloatToNDecimal, convertFloatTo2Decimal, constructToastMessage */
const convertFloatToNDecimal = (num, N = 2)=>{
    return Math.round(num * Math.pow(10, N)) / Math.pow(10, N);
};
const convertFloatTo2Decimal = (num)=>{
    return Math.round(num * 100) / 100;
};
const constructToastMessage = (questionType, filterValue, survey, questionId, t, filterComboBoxValue)=>{
    const questionIdx = survey.questions.findIndex((question)=>question.id === questionId);
    if (questionType === "matrix") {
        return t("environments.surveys.summary.added_filter_for_responses_where_answer_to_question", {
            questionIdx: questionIdx + 1,
            filterComboBoxValue: filterComboBoxValue?.toString() ?? "",
            filterValue
        });
    } else if (filterComboBoxValue === undefined) {
        return t("environments.surveys.summary.added_filter_for_responses_where_answer_to_question_is_skipped", {
            questionIdx: questionIdx + 1
        });
    } else {
        return t("environments.surveys.summary.added_filter_for_responses_where_answer_to_question", {
            questionIdx: questionIdx + 1,
            filterComboBoxValue: Array.isArray(filterComboBoxValue) ? filterComboBoxValue.join(",") : filterComboBoxValue,
            filterValue
        });
    }
};
const needsInsightsGeneration = (survey)=>{
    const openTextQuestions = survey.questions.filter((question)=>question.type === "openText");
    const questionWithoutInsightsEnabled = openTextQuestions.some((question)=>question.type === "openText" && typeof question.insightsEnabled === "undefined");
    return openTextQuestions.length > 0 && questionWithoutInsightsEnabled;
};


/***/ }),

/***/ 774035:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  yR: () => (/* binding */ copySurveyToOtherEnvironmentAction),
  Uc: () => (/* binding */ deleteSurveyAction),
  oC: () => (/* binding */ generateSingleUseIdAction),
  cI: () => (/* binding */ getProjectsByEnvironmentIdAction),
  fq: () => (/* binding */ getSurveyAction),
  Sc: () => (/* binding */ getSurveysAction)
});

// EXTERNAL MODULE: ../../node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js
var server_reference = __webpack_require__(286055);
// EXTERNAL MODULE: ../../node_modules/next/dist/server/app-render/encryption.js
var encryption = __webpack_require__(770767);
// EXTERNAL MODULE: external "@prisma/client"
var client_ = __webpack_require__(896330);
// EXTERNAL MODULE: ../../node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js
var react = __webpack_require__(645625);
// EXTERNAL MODULE: ../../packages/database/src/index.ts + 1 modules
var src = __webpack_require__(482859);
// EXTERNAL MODULE: ../../packages/lib/cache.ts
var cache = __webpack_require__(48165);
// EXTERNAL MODULE: ../../packages/lib/response/cache.ts
var response_cache = __webpack_require__(813255);
// EXTERNAL MODULE: ../../packages/lib/survey/cache.ts
var survey_cache = __webpack_require__(710528);
// EXTERNAL MODULE: ../../packages/lib/survey/service.ts + 2 modules
var service = __webpack_require__(939483);
// EXTERNAL MODULE: ../../packages/lib/survey/utils.ts
var utils = __webpack_require__(314437);
// EXTERNAL MODULE: ../../packages/lib/utils/validate.ts
var validate = __webpack_require__(472749);
// EXTERNAL MODULE: ../../packages/types/common.ts
var common = __webpack_require__(552224);
// EXTERNAL MODULE: ../../packages/types/errors.ts
var errors = __webpack_require__(207798);
;// ./app/(app)/environments/[environmentId]/surveys/lib/surveys.ts













const surveySelect = {
    id: true,
    createdAt: true,
    updatedAt: true,
    name: true,
    type: true,
    creator: {
        select: {
            name: true
        }
    },
    status: true,
    singleUse: true,
    environmentId: true,
    _count: {
        select: {
            responses: true
        }
    }
};
const getSurveys = (0,react.cache)(async (environmentId, limit, offset, filterCriteria)=>(0,cache/* cache */.P)(async ()=>{
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
            if (filterCriteria?.sortBy === "relevance") {
                // Call the sortByRelevance function
                return await getSurveysSortedByRelevance(environmentId, limit, offset ?? 0, filterCriteria);
            }
            // Fetch surveys normally with pagination and include response count
            const surveysPrisma = await src/* prisma */.z.survey.findMany({
                where: {
                    environmentId,
                    ...(0,utils/* buildWhereClause */.hv)(filterCriteria)
                },
                select: surveySelect,
                orderBy: (0,utils/* buildOrderByClause */.XF)(filterCriteria?.sortBy),
                take: limit,
                skip: offset
            });
            return surveysPrisma.map((survey)=>{
                return {
                    ...survey,
                    responseCount: survey._count.responses
                };
            });
        } catch (error) {
            if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
                console.error(error);
                throw new errors/* DatabaseError */.a$(error.message);
            }
            throw error;
        }
    }, [
        `surveyList-getSurveys-${environmentId}-${limit}-${offset}-${JSON.stringify(filterCriteria)}`
    ], {
        tags: [
            survey_cache/* surveyCache */.$.tag.byEnvironmentId(environmentId),
            response_cache/* responseCache */.Q.tag.byEnvironmentId(environmentId)
        ]
    })());
const getSurveysSortedByRelevance = (0,react.cache)(async (environmentId, limit, offset, filterCriteria)=>(0,cache/* cache */.P)(async ()=>{
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
            let surveys = [];
            const inProgressSurveyCount = await (0,service/* getInProgressSurveyCount */.Sm)(environmentId, filterCriteria);
            // Fetch surveys that are in progress first
            const inProgressSurveys = offset && offset > inProgressSurveyCount ? [] : await src/* prisma */.z.survey.findMany({
                where: {
                    environmentId,
                    status: "inProgress",
                    ...(0,utils/* buildWhereClause */.hv)(filterCriteria)
                },
                select: surveySelect,
                orderBy: (0,utils/* buildOrderByClause */.XF)("updatedAt"),
                take: limit,
                skip: offset
            });
            surveys = inProgressSurveys.map((survey)=>{
                return {
                    ...survey,
                    responseCount: survey._count.responses
                };
            });
            // Determine if additional surveys are needed
            if (offset !== undefined && limit && inProgressSurveys.length < limit) {
                const remainingLimit = limit - inProgressSurveys.length;
                const newOffset = Math.max(0, offset - inProgressSurveyCount);
                const additionalSurveys = await src/* prisma */.z.survey.findMany({
                    where: {
                        environmentId,
                        status: {
                            not: "inProgress"
                        },
                        ...(0,utils/* buildWhereClause */.hv)(filterCriteria)
                    },
                    select: surveySelect,
                    orderBy: (0,utils/* buildOrderByClause */.XF)("updatedAt"),
                    take: remainingLimit,
                    skip: newOffset
                });
                surveys = [
                    ...surveys,
                    ...additionalSurveys.map((survey)=>{
                        return {
                            ...survey,
                            responseCount: survey._count.responses
                        };
                    })
                ];
            }
            return surveys;
        } catch (error) {
            if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
                console.error(error);
                throw new errors/* DatabaseError */.a$(error.message);
            }
            throw error;
        }
    }, [
        `surveyList-getSurveysSortedByRelevance-${environmentId}-${limit}-${offset}-${JSON.stringify(filterCriteria)}`
    ], {
        tags: [
            survey_cache/* surveyCache */.$.tag.byEnvironmentId(environmentId),
            response_cache/* responseCache */.Q.tag.byEnvironmentId(environmentId)
        ]
    })());
const getSurvey = (0,react.cache)(async (surveyId)=>(0,cache/* cache */.P)(async ()=>{
        (0,validate/* validateInputs */.C)([
            surveyId,
            common/* ZId */.i4
        ]);
        let surveyPrisma;
        try {
            surveyPrisma = await src/* prisma */.z.survey.findUnique({
                where: {
                    id: surveyId
                },
                select: surveySelect
            });
        } catch (error) {
            if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
                console.error(error);
                throw new errors/* DatabaseError */.a$(error.message);
            }
            throw error;
        }
        if (!surveyPrisma) {
            return null;
        }
        return {
            ...surveyPrisma,
            responseCount: surveyPrisma?._count.responses
        };
    }, [
        `surveyList-getSurvey-${surveyId}`
    ], {
        tags: [
            survey_cache/* surveyCache */.$.tag.byId(surveyId),
            response_cache/* responseCache */.Q.tag.bySurveyId(surveyId)
        ]
    })());

// EXTERNAL MODULE: ./lib/utils/action-client.ts
var action_client = __webpack_require__(308046);
// EXTERNAL MODULE: ./lib/utils/action-client-middleware.ts
var action_client_middleware = __webpack_require__(729455);
// EXTERNAL MODULE: ./lib/utils/helper.ts
var helper = __webpack_require__(440388);
// EXTERNAL MODULE: ./lib/utils/services.ts
var services = __webpack_require__(883212);
// EXTERNAL MODULE: ../../node_modules/zod/lib/index.mjs
var lib = __webpack_require__(283131);
// EXTERNAL MODULE: ../../packages/lib/project/service.ts
var project_service = __webpack_require__(28492);
// EXTERNAL MODULE: ../../node_modules/@paralleldrive/cuid2/index.js
var _paralleldrive_cuid2 = __webpack_require__(730672);
// EXTERNAL MODULE: ../../packages/lib/crypto.ts
var lib_crypto = __webpack_require__(826478);
// EXTERNAL MODULE: ../../packages/lib/env.ts
var lib_env = __webpack_require__(333258);
;// ../../packages/lib/utils/singleUseSurveys.ts



// generate encrypted single use id for the survey
const generateSurveySingleUseId = (isEncrypted)=>{
    const cuid = _paralleldrive_cuid2.createId();
    if (!isEncrypted) {
        return cuid;
    }
    const encryptedCuid = (0,lib_crypto/* symmetricEncrypt */.vX)(cuid, lib_env/* env */._.ENCRYPTION_KEY);
    return encryptedCuid;
};
const generateSurveySingleUseIds = (count, isEncrypted)=>{
    const singleUseIds = [];
    for(let i = 0; i < count; i++){
        singleUseIds.push(generateSurveySingleUseId(isEncrypted));
    }
    return singleUseIds;
};
// validate the survey single use id
const validateSurveySingleUseId = (surveySingleUseId)=>{
    try {
        let decryptedCuid = null;
        if (surveySingleUseId.length === 64) {
            if (!env.FORMBRICKS_ENCRYPTION_KEY) {
                throw new Error("FORMBRICKS_ENCRYPTION_KEY is not defined");
            }
            decryptedCuid = decryptAES128(env.FORMBRICKS_ENCRYPTION_KEY, surveySingleUseId);
        } else {
            decryptedCuid = symmetricDecrypt(surveySingleUseId, env.ENCRYPTION_KEY);
        }
        if (cuid2.isCuid(decryptedCuid)) {
            return decryptedCuid;
        } else {
            return undefined;
        }
    } catch (error) {
        return undefined;
    }
};

// EXTERNAL MODULE: ../../packages/types/surveys/types.ts + 3 modules
var types = __webpack_require__(797175);
// EXTERNAL MODULE: ../../node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js
var action_validate = __webpack_require__(429931);
;// ./app/(app)/environments/[environmentId]/surveys/actions.ts
/* __next_internal_action_entry_do_not_use__ {"7f1c0fae59ee909a519774eb06858448309dc8cffe":"getSurveyAction","7f42cb18973c8ec15c58737d5c2a9a89707f690f46":"deleteSurveyAction","7f956cfa35fb51860782b1485c00722aaf7af7ccbb":"getSurveysAction","7f9706d8d4f156c9259b866b07de43b87ebfeb5657":"copySurveyToOtherEnvironmentAction","7fb159e4ce2653356d5be5228e43377c2514df080b":"generateSingleUseIdAction","7fc3ca83e6ad3202f0358512e148a77c3998fa320e":"getProjectsByEnvironmentIdAction"} */ 













const ZGetSurveyAction = lib.z.object({
    surveyId: common/* ZId */.i4
});
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getSurveyAction = action_client/* authenticatedActionClient */.D.schema(ZGetSurveyAction).action(async ({ ctx, parsedInput })=>{
    await (0,action_client_middleware/* checkAuthorizationUpdated */.r)({
        userId: ctx.user.id,
        organizationId: await (0,helper/* getOrganizationIdFromSurveyId */.a1)(parsedInput.surveyId),
        access: [
            {
                type: "organization",
                roles: [
                    "owner",
                    "manager"
                ]
            },
            {
                type: "projectTeam",
                minPermission: "read",
                projectId: await (0,helper/* getProjectIdFromSurveyId */.Y)(parsedInput.surveyId)
            }
        ]
    });
    return await getSurvey(parsedInput.surveyId);
});
const ZCopySurveyToOtherEnvironmentAction = lib.z.object({
    environmentId: common/* ZId */.i4,
    surveyId: common/* ZId */.i4,
    targetEnvironmentId: common/* ZId */.i4
});
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ copySurveyToOtherEnvironmentAction = action_client/* authenticatedActionClient */.D.schema(ZCopySurveyToOtherEnvironmentAction).action(async ({ ctx, parsedInput })=>{
    const sourceEnvironment = await (0,services/* getEnvironment */.uc)(parsedInput.environmentId);
    const targetEnvironment = await (0,services/* getEnvironment */.uc)(parsedInput.targetEnvironmentId);
    if (!sourceEnvironment || !targetEnvironment) {
        throw new errors/* ResourceNotFoundError */.CE("Environment", sourceEnvironment ? parsedInput.targetEnvironmentId : parsedInput.environmentId);
    }
    await (0,action_client_middleware/* checkAuthorizationUpdated */.r)({
        userId: ctx.user.id,
        organizationId: await (0,helper/* getOrganizationIdFromEnvironmentId */.X_)(parsedInput.environmentId),
        access: [
            {
                type: "organization",
                roles: [
                    "owner",
                    "manager"
                ]
            },
            {
                type: "projectTeam",
                minPermission: "readWrite",
                projectId: sourceEnvironment.projectId
            }
        ]
    });
    await (0,action_client_middleware/* checkAuthorizationUpdated */.r)({
        userId: ctx.user.id,
        organizationId: await (0,helper/* getOrganizationIdFromEnvironmentId */.X_)(parsedInput.environmentId),
        access: [
            {
                type: "organization",
                roles: [
                    "owner",
                    "manager"
                ]
            },
            {
                type: "projectTeam",
                minPermission: "readWrite",
                projectId: targetEnvironment.projectId
            }
        ]
    });
    return await (0,service/* copySurveyToOtherEnvironment */.Mv)(parsedInput.environmentId, parsedInput.surveyId, parsedInput.targetEnvironmentId, ctx.user.id);
});
const ZGetProjectsByEnvironmentIdAction = lib.z.object({
    environmentId: common/* ZId */.i4
});
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getProjectsByEnvironmentIdAction = action_client/* authenticatedActionClient */.D.schema(ZGetProjectsByEnvironmentIdAction).action(async ({ ctx, parsedInput })=>{
    const organizationId = await (0,helper/* getOrganizationIdFromEnvironmentId */.X_)(parsedInput.environmentId);
    await (0,action_client_middleware/* checkAuthorizationUpdated */.r)({
        userId: ctx.user.id,
        organizationId: organizationId,
        access: [
            {
                type: "organization",
                roles: [
                    "owner",
                    "manager"
                ]
            },
            {
                type: "projectTeam",
                minPermission: "readWrite",
                projectId: await (0,helper/* getProjectIdFromEnvironmentId */.DU)(parsedInput.environmentId)
            }
        ]
    });
    return await (0,project_service/* getUserProjects */._P)(ctx.user.id, organizationId);
});
const ZDeleteSurveyAction = lib.z.object({
    surveyId: common/* ZId */.i4
});
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ deleteSurveyAction = action_client/* authenticatedActionClient */.D.schema(ZDeleteSurveyAction).action(async ({ ctx, parsedInput })=>{
    await (0,action_client_middleware/* checkAuthorizationUpdated */.r)({
        userId: ctx.user.id,
        organizationId: await (0,helper/* getOrganizationIdFromSurveyId */.a1)(parsedInput.surveyId),
        access: [
            {
                type: "organization",
                roles: [
                    "owner",
                    "manager"
                ]
            },
            {
                type: "projectTeam",
                projectId: await (0,helper/* getProjectIdFromSurveyId */.Y)(parsedInput.surveyId),
                minPermission: "readWrite"
            }
        ]
    });
    await (0,service/* deleteSurvey */.MT)(parsedInput.surveyId);
});
const ZGenerateSingleUseIdAction = lib.z.object({
    surveyId: common/* ZId */.i4,
    isEncrypted: lib.z.boolean()
});
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ generateSingleUseIdAction = action_client/* authenticatedActionClient */.D.schema(ZGenerateSingleUseIdAction).action(async ({ ctx, parsedInput })=>{
    await (0,action_client_middleware/* checkAuthorizationUpdated */.r)({
        userId: ctx.user.id,
        organizationId: await (0,helper/* getOrganizationIdFromSurveyId */.a1)(parsedInput.surveyId),
        access: [
            {
                type: "organization",
                roles: [
                    "owner",
                    "manager"
                ]
            },
            {
                type: "projectTeam",
                projectId: await (0,helper/* getProjectIdFromSurveyId */.Y)(parsedInput.surveyId),
                minPermission: "readWrite"
            }
        ]
    });
    return generateSurveySingleUseId(parsedInput.isEncrypted);
});
const ZGetSurveysAction = lib.z.object({
    environmentId: common/* ZId */.i4,
    limit: lib.z.number().optional(),
    offset: lib.z.number().optional(),
    filterCriteria: types/* ZSurveyFilterCriteria */.ol.optional()
});
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getSurveysAction = action_client/* authenticatedActionClient */.D.schema(ZGetSurveysAction).action(async ({ ctx, parsedInput })=>{
    await (0,action_client_middleware/* checkAuthorizationUpdated */.r)({
        userId: ctx.user.id,
        organizationId: await (0,helper/* getOrganizationIdFromEnvironmentId */.X_)(parsedInput.environmentId),
        access: [
            {
                data: parsedInput.filterCriteria,
                schema: types/* ZSurveyFilterCriteria */.ol,
                type: "organization",
                roles: [
                    "owner",
                    "manager"
                ]
            },
            {
                type: "projectTeam",
                minPermission: "read",
                projectId: await (0,helper/* getProjectIdFromEnvironmentId */.DU)(parsedInput.environmentId)
            }
        ]
    });
    return await getSurveys(parsedInput.environmentId, parsedInput.limit, parsedInput.offset, parsedInput.filterCriteria);
});

(0,action_validate/* ensureServerEntryExports */.D)([
    getSurveyAction,
    copySurveyToOtherEnvironmentAction,
    getProjectsByEnvironmentIdAction,
    deleteSurveyAction,
    generateSingleUseIdAction,
    getSurveysAction
]);
(0,server_reference/* registerServerReference */.A)(getSurveyAction, "7f1c0fae59ee909a519774eb06858448309dc8cffe", null);
(0,server_reference/* registerServerReference */.A)(copySurveyToOtherEnvironmentAction, "7f9706d8d4f156c9259b866b07de43b87ebfeb5657", null);
(0,server_reference/* registerServerReference */.A)(getProjectsByEnvironmentIdAction, "7fc3ca83e6ad3202f0358512e148a77c3998fa320e", null);
(0,server_reference/* registerServerReference */.A)(deleteSurveyAction, "7f42cb18973c8ec15c58737d5c2a9a89707f690f46", null);
(0,server_reference/* registerServerReference */.A)(generateSingleUseIdAction, "7fb159e4ce2653356d5be5228e43377c2514df080b", null);
(0,server_reference/* registerServerReference */.A)(getSurveysAction, "7f956cfa35fb51860782b1485c00722aaf7af7ccbb", null);


/***/ }),

/***/ 629498:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(672771);
/* harmony import */ var react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_0__.registerClientReference)(
function() { throw new Error("Attempted to call the default export of \"/Users/kdy1/projects/formbricks/apps/web/app/(app)/environments/[environmentId]/surveys/loading.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component."); },
"/Users/kdy1/projects/formbricks/apps/web/app/(app)/environments/[environmentId]/surveys/loading.tsx",
"default",
));


/***/ }),

/***/ 596379:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   od: () => (/* binding */ getTeamPermissionFlags)
/* harmony export */ });
/* unused harmony exports TeamPermissionMapping, TeamRoleMapping, getTeamAccessFlags */
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(896330);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);

const TeamPermissionMapping = {
    [_prisma_client__WEBPACK_IMPORTED_MODULE_0__.ProjectTeamPermission.read]: "Read",
    [_prisma_client__WEBPACK_IMPORTED_MODULE_0__.ProjectTeamPermission.readWrite]: "Read & write",
    [_prisma_client__WEBPACK_IMPORTED_MODULE_0__.ProjectTeamPermission.manage]: "Manage"
};
const TeamRoleMapping = {
    [_prisma_client__WEBPACK_IMPORTED_MODULE_0__.TeamUserRole.admin]: "Team Admin",
    [_prisma_client__WEBPACK_IMPORTED_MODULE_0__.TeamUserRole.contributor]: "Contributor"
};
const getTeamAccessFlags = (role)=>{
    const isAdmin = role === TeamUserRole.admin;
    const isContributor = role === TeamUserRole.contributor;
    return {
        isAdmin,
        isContributor
    };
};
const getTeamPermissionFlags = (permissionLevel)=>{
    const hasReadAccess = permissionLevel === _prisma_client__WEBPACK_IMPORTED_MODULE_0__.ProjectTeamPermission.read;
    const hasReadWriteAccess = permissionLevel === _prisma_client__WEBPACK_IMPORTED_MODULE_0__.ProjectTeamPermission.readWrite;
    const hasManageAccess = permissionLevel === _prisma_client__WEBPACK_IMPORTED_MODULE_0__.ProjectTeamPermission.manage;
    return {
        hasReadAccess,
        hasReadWriteAccess,
        hasManageAccess
    };
};


/***/ }),

/***/ 745243:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ generateSingleUseIdAction)
/* harmony export */ });
/* harmony import */ var private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(308441);
/* harmony import */ var private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_0__);

const generateSingleUseIdAction = /*#__PURE__*/(0,private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_0__.createServerReference)("7fb159e4ce2653356d5be5228e43377c2514df080b", private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_0__.callServer, undefined, private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_0__.findSourceMapURL, "generateSingleUseIdAction")

/***/ }),

/***/ 327968:
/***/ (() => {



/***/ }),

/***/ 976266:
/***/ (() => {



/***/ })

};
;