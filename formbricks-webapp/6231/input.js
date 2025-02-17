"use strict";
exports.id = 6231;
exports.ids = [6231];
exports.modules = {

/***/ 424684:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  SummaryPage: () => (/* binding */ SummaryPage)
});

// EXTERNAL MODULE: ../../node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js
var react_jsx_runtime = __webpack_require__(642725);
// EXTERNAL MODULE: ./app/(app)/environments/[environmentId]/components/ResponseFilterContext.tsx
var ResponseFilterContext = __webpack_require__(300677);
// EXTERNAL MODULE: ../../node_modules/next/dist/build/webpack/loaders/next-flight-server-reference-proxy-loader.js?id=7fc40fcf4d8238c50e0ee14725c1e9b7cc636f4788&name=getResponseCountAction!
var next_flight_server_reference_proxy_loaderid_7fc40fcf4d8238c50e0ee14725c1e9b7cc636f4788_name_getResponseCountAction_ = __webpack_require__(475221);
// EXTERNAL MODULE: ../../node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js
var action_client_wrapper = __webpack_require__(308441);
;// ../../node_modules/next/dist/build/webpack/loaders/next-flight-server-reference-proxy-loader.js?id=7f88c3ec2a43c4ca4f41e882464c602eb6821d8801&name=getSurveySummaryAction!

const getSurveySummaryAction = /*#__PURE__*/(0,action_client_wrapper.createServerReference)("7f88c3ec2a43c4ca4f41e882464c602eb6821d8801", action_client_wrapper.callServer, undefined, action_client_wrapper.findSourceMapURL, "getSurveySummaryAction")
// EXTERNAL MODULE: ../../node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js
var react = __webpack_require__(891616);
;// ./app/(app)/environments/[environmentId]/surveys/[surveyId]/(analysis)/summary/components/ScrollToTop.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 

const ScrollToTop = ({ containerId })=>{
    const [showButton, setShowButton] = (0,react.useState)(false);
    // Show the button when scrolling down
    (0,react.useEffect)(()=>{
        const container = document.getElementById(containerId);
        if (!container) return;
        const handleScroll = ()=>{
            if (container.scrollTop > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };
        container.addEventListener("scroll", handleScroll);
        return ()=>{
            container.removeEventListener("scroll", handleScroll);
        };
    }, [
        containerId
    ]);
    // Scroll to top function
    const scrollToTop = ()=>{
        const container = document.getElementById(containerId);
        if (container) {
            container.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime.jsx)("button", {
        onClick: scrollToTop,
        className: `fixed bottom-4 right-4 z-[1] flex h-10 w-10 justify-center rounded-md bg-slate-500 p-2 text-white transition-opacity ${showButton ? "opacity-80" : "opacity-0"}`,
        children: "↑"
    });
};
/* harmony default export */ const components_ScrollToTop = (ScrollToTop);

// EXTERNAL MODULE: ./modules/ui/components/tooltip/index.tsx
var tooltip = __webpack_require__(163701);
// EXTERNAL MODULE: ../../node_modules/@tolgee/react/dist/tolgee-react.esm.js
var tolgee_react_esm = __webpack_require__(397674);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/timer.js
var timer = __webpack_require__(266635);
// EXTERNAL MODULE: ../../packages/lib/utils/questions.tsx
var questions = __webpack_require__(4659);
// EXTERNAL MODULE: ../../packages/lib/utils/recall.ts
var recall = __webpack_require__(654931);
;// ./app/(app)/environments/[environmentId]/surveys/[surveyId]/(analysis)/summary/components/SummaryDropOffs.tsx
/* __next_internal_client_entry_do_not_use__ SummaryDropOffs auto */ 





const SummaryDropOffs = ({ dropOff, survey })=>{
    const { t } = (0,tolgee_react_esm/* useTranslate */.WD)();
    const getIcon = (questionType)=>{
        const Icon = (0,questions/* getQuestionIcon */.y9)(questionType, t);
        return /*#__PURE__*/ (0,react_jsx_runtime.jsx)(Icon, {
            className: "mt-[3px] h-5 w-5 shrink-0 text-slate-600"
        });
    };
    const formatTextWithSlashes = (text)=>{
        const regex = /\/(.*?)\\/g;
        const parts = text.split(regex);
        return parts.map((part, index)=>{
            // Check if the part was inside slashes
            if (index % 2 !== 0) {
                return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("span", {
                    className: "mx-1 rounded-md bg-slate-100 p-1 px-2 text-lg",
                    children: [
                        "@",
                        part
                    ]
                }, index);
            } else {
                return part;
            }
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
        className: "rounded-xl border border-slate-200 bg-white shadow-sm",
        children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
            className: "",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                    className: "grid h-10 grid-cols-6 items-center border-y border-slate-200 bg-slate-100 text-sm font-semibold text-slate-600",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                            className: "col-span-3 pl-4 md:pl-6",
                            children: t("common.questions")
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                            className: "flex justify-center",
                            children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(tooltip/* TooltipProvider */.Bc, {
                                delayDuration: 50,
                                children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(tooltip/* Tooltip */.m_, {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)(tooltip/* TooltipTrigger */.k$, {
                                            children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(timer/* default */.A, {
                                                className: "h-5 w-5"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)(tooltip/* TooltipContent */.ZI, {
                                            side: "top",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                                                className: "text-center font-normal",
                                                children: t("environments.surveys.summary.ttc_tooltip")
                                            })
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                            className: "px-4 text-center md:px-6",
                            children: t("environments.surveys.summary.impressions")
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                            className: "pr-6 text-center md:pl-6",
                            children: t("environments.surveys.summary.drop_offs")
                        })
                    ]
                }),
                dropOff.map((quesDropOff)=>/*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                        className: "grid grid-cols-6 items-center border-b border-slate-100 py-2 text-sm text-slate-800 md:text-base",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                className: "col-span-3 flex gap-3 pl-4 md:pl-6",
                                children: [
                                    getIcon(quesDropOff.questionType),
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                                        children: formatTextWithSlashes((0,recall/* recallToHeadline */.fV)({
                                            ["default"]: quesDropOff.headline
                                        }, survey, true, "default")["default"])
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                className: "whitespace-pre-wrap text-center font-semibold",
                                children: quesDropOff.ttc > 0 ? (quesDropOff.ttc / 1000).toFixed(2) + "s" : "N/A"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                className: "whitespace-pre-wrap text-center font-semibold",
                                children: quesDropOff.impressions
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                className: "pl-6 text-center md:px-6",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("span", {
                                        className: "mr-1.5 font-semibold",
                                        children: quesDropOff.dropOffCount
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("span", {
                                        children: [
                                            "(",
                                            Math.round(quesDropOff.dropOffPercentage),
                                            "%)"
                                        ]
                                    })
                                ]
                            })
                        ]
                    }, quesDropOff.questionId))
            ]
        })
    });
};

// EXTERNAL MODULE: ./app/(app)/environments/[environmentId]/surveys/[surveyId]/components/CustomFilter.tsx + 6 modules
var CustomFilter = __webpack_require__(151979);
// EXTERNAL MODULE: ./app/(app)/environments/[environmentId]/surveys/[surveyId]/components/ResultsShareButton.tsx + 4 modules
var ResultsShareButton = __webpack_require__(412643);
// EXTERNAL MODULE: ./app/lib/surveys/surveys.ts
var surveys = __webpack_require__(291786);
// EXTERNAL MODULE: ../../node_modules/next/dist/build/webpack/loaders/next-flight-server-reference-proxy-loader.js?id=7f6b86dfb9f916340e09181cf5b45bed7b1e7c65db&name=getResponseCountBySurveySharingKeyAction!
var next_flight_server_reference_proxy_loaderid_7f6b86dfb9f916340e09181cf5b45bed7b1e7c65db_name_getResponseCountBySurveySharingKeyAction_ = __webpack_require__(788253);
;// ../../node_modules/next/dist/build/webpack/loaders/next-flight-server-reference-proxy-loader.js?id=7f9f47866d05f41a9e5ac975a6f9adff5a5cf9a780&name=getSummaryBySurveySharingKeyAction!

const getSummaryBySurveySharingKeyAction = /*#__PURE__*/(0,action_client_wrapper.createServerReference)("7f9f47866d05f41a9e5ac975a6f9adff5a5cf9a780", action_client_wrapper.callServer, undefined, action_client_wrapper.findSourceMapURL, "getSummaryBySurveySharingKeyAction")
// EXTERNAL MODULE: ../../node_modules/next/dist/api/navigation.js
var navigation = __webpack_require__(470207);
// EXTERNAL MODULE: ../../packages/lib/utils/hooks/useIntervalWhenFocused.ts
var useIntervalWhenFocused = __webpack_require__(871900);
// EXTERNAL MODULE: ./modules/ui/components/button/index.tsx
var components_button = __webpack_require__(248852);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/unplug.js
var unplug = __webpack_require__(333539);
// EXTERNAL MODULE: ../../node_modules/next/dist/client/app-dir/link.js
var app_dir_link = __webpack_require__(36888);
var link_default = /*#__PURE__*/__webpack_require__.n(app_dir_link);
;// ./app/(app)/environments/[environmentId]/surveys/[surveyId]/(analysis)/components/EmptyInAppSurveys.tsx
/* __next_internal_client_entry_do_not_use__ EmptyAppSurveys auto */ 




const EmptyAppSurveys = ({ environment })=>{
    const { t } = (0,tolgee_react_esm/* useTranslate */.WD)();
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
        className: "flex w-full items-center justify-center gap-8 bg-slate-100 py-12",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                className: "flex h-20 w-20 items-center justify-center rounded-full border border-slate-200 bg-white",
                children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(unplug/* default */.A, {
                    size: 48,
                    className: "text-amber-500",
                    absoluteStrokeWidth: true
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                className: "flex flex-col",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("h1", {
                        className: "text-xl font-semibold text-slate-900",
                        children: t("environments.surveys.summary.youre_not_plugged_in_yet")
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                        className: "mt-2 text-sm text-slate-600",
                        children: t("environments.surveys.summary.connect_your_website_or_app_with_formbricks_to_get_started")
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)((link_default()), {
                        className: "mt-2",
                        href: `/environments/${environment.id}/project/app-connection`,
                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_button/* Button */.$, {
                            size: "sm",
                            className: "flex w-[120px] justify-center",
                            children: t("common.connect")
                        })
                    })
                ]
            })
        ]
    });
};

// EXTERNAL MODULE: ../../packages/lib/cn.ts
var cn = __webpack_require__(983773);
;// ./modules/ui/components/progress-bar/index.tsx
/* __next_internal_client_entry_do_not_use__ ProgressBar,HalfCircle auto */ 

const ProgressBar = ({ progress, barColor, height = 5 })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
        className: (0,cn.cn)(height === 2 ? "h-2" : height === 5 ? "h-5" : "", "w-full rounded-full bg-slate-200"),
        children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
            className: (0,cn.cn)("h-full rounded-full", barColor),
            style: {
                width: `${Math.floor(progress * 100)}%`,
                transition: "width 0.5s ease-out"
            }
        })
    });
};
const HalfCircle = ({ value })=>{
    const normalizedValue = (value + 100) / 200;
    const mappedValue = (normalizedValue * 180 - 180).toString() + "deg";
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
        className: "w-fit",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                className: "relative flex h-28 w-52 items-end justify-center overflow-hidden",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                        className: "absolute h-24 w-48 origin-bottom rounded-tl-full rounded-tr-full bg-slate-200"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                        className: "bg-brand-dark absolute h-24 w-48 origin-bottom rounded-tl-full rounded-tr-full",
                        style: {
                            rotate: mappedValue
                        }
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                        className: "absolute h-20 w-40 rounded-tl-full rounded-tr-full bg-white"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                className: "flex justify-between text-sm leading-10 text-slate-600",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                        children: "-100"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                        className: "text-2xl text-black md:text-4xl",
                        children: Math.round(value)
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                        children: "100"
                    })
                ]
            })
        ]
    });
};

// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/inbox.js
var inbox = __webpack_require__(245198);
;// ./app/(app)/environments/[environmentId]/surveys/[surveyId]/(analysis)/summary/lib/utils.ts
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

;// ./app/(app)/environments/[environmentId]/surveys/[surveyId]/(analysis)/summary/components/QuestionSummaryHeader.tsx
/* __next_internal_client_entry_do_not_use__ QuestionSummaryHeader auto */ 




const QuestionSummaryHeader = ({ questionSummary, additionalInfo, showResponses = true, survey })=>{
    const { t } = (0,tolgee_react_esm/* useTranslate */.WD)();
    const questionType = (0,questions/* getQuestionTypes */._2)(t).find((type)=>type.id === questionSummary.question.type);
    // formats the text to highlight specific parts of the text with slashes
    const formatTextWithSlashes = (text)=>{
        const regex = /\/(.*?)\\/g;
        const parts = text.split(regex);
        return parts.map((part, index)=>{
            // Check if the part was inside slashes
            if (index % 2 !== 0) {
                return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("span", {
                    className: "mx-1 rounded-md bg-slate-100 p-1 px-2 text-lg",
                    children: [
                        "@",
                        part
                    ]
                }, index);
            } else {
                return part;
            }
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
        className: "space-y-2 px-4 pb-5 pt-6 md:px-6",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                className: "align-center flex justify-between gap-4",
                children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("h3", {
                    className: "pb-1 text-lg font-semibold text-slate-900 md:text-xl",
                    children: formatTextWithSlashes((0,recall/* recallToHeadline */.fV)(questionSummary.question.headline, survey, true, "default")["default"])
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                className: "flex space-x-2 text-xs font-semibold text-slate-600 md:text-sm",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                        className: "flex items-center rounded-lg bg-slate-100 p-2",
                        children: [
                            questionType && /*#__PURE__*/ (0,react_jsx_runtime.jsx)(questionType.icon, {
                                className: "mr-2 h-4 w-4"
                            }),
                            questionType ? questionType.label : t("environments.surveys.summary.unknown_question_type"),
                            " ",
                            t("common.question")
                        ]
                    }),
                    showResponses && /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                        className: "flex items-center rounded-lg bg-slate-100 p-2",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(inbox/* default */.A, {
                                className: "mr-2 h-4 w-4"
                            }),
                            `${questionSummary.responseCount} ${t("common.responses")}`
                        ]
                    }),
                    additionalInfo,
                    !questionSummary.question.required && /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                        className: "flex items-center rounded-lg bg-slate-100 p-2",
                        children: t("environments.surveys.edit.optional")
                    })
                ]
            })
        ]
    });
};

;// ./app/(app)/environments/[environmentId]/surveys/[surveyId]/(analysis)/summary/components/CTASummary.tsx
/* __next_internal_client_entry_do_not_use__ CTASummary auto */ 





const CTASummary = ({ questionSummary, survey })=>{
    const { t } = (0,tolgee_react_esm/* useTranslate */.WD)();
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
        className: "rounded-xl border border-slate-200 bg-white shadow-sm",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(QuestionSummaryHeader, {
                survey: survey,
                questionSummary: questionSummary,
                showResponses: false,
                additionalInfo: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                            className: "flex items-center rounded-lg bg-slate-100 p-2",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(inbox/* default */.A, {
                                    className: "mr-2 h-4 w-4"
                                }),
                                `${questionSummary.impressionCount} ${t("common.impressions")}`
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                            className: "flex items-center rounded-lg bg-slate-100 p-2",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(inbox/* default */.A, {
                                    className: "mr-2 h-4 w-4"
                                }),
                                `${questionSummary.clickCount} ${t("common.clicks")}`
                            ]
                        }),
                        !questionSummary.question.required && /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                            className: "flex items-center rounded-lg bg-slate-100 p-2",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(inbox/* default */.A, {
                                    className: "mr-2 h-4 w-4"
                                }),
                                `${questionSummary.skipCount} ${t("common.skips")}`
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                className: "space-y-5 px-4 pb-6 pt-4 text-sm md:px-6 md:text-base",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                        className: "text flex justify-between px-2 pb-2",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                className: "mr-8 flex space-x-1",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                                        className: "font-semibold text-slate-700",
                                        children: "CTR"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("p", {
                                            className: "rounded-lg bg-slate-100 px-2 text-slate-700",
                                            children: [
                                                convertFloatToNDecimal(questionSummary.ctr.percentage, 2),
                                                "%"
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("p", {
                                className: "flex w-32 items-end justify-end text-slate-600",
                                children: [
                                    questionSummary.ctr.count,
                                    " ",
                                    questionSummary.ctr.count === 1 ? t("common.click") : t("common.clicks")
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(ProgressBar, {
                        barColor: "bg-brand-dark",
                        progress: questionSummary.ctr.percentage / 100
                    })
                ]
            })
        ]
    });
};

;// ./app/(app)/environments/[environmentId]/surveys/[surveyId]/(analysis)/summary/components/CalSummary.tsx
/* __next_internal_client_entry_do_not_use__ CalSummary auto */ 




const CalSummary = ({ questionSummary, survey })=>{
    const { t } = (0,tolgee_react_esm/* useTranslate */.WD)();
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
        className: "rounded-xl border border-slate-200 bg-white shadow-sm",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(QuestionSummaryHeader, {
                questionSummary: questionSummary,
                survey: survey
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                className: "space-y-5 px-4 pb-6 pt-4 text-sm md:px-6 md:text-base",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                className: "text flex justify-between px-2 pb-2",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                        className: "mr-8 flex space-x-1",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                                                className: "font-semibold text-slate-700",
                                                children: t("common.booked")
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("p", {
                                                    className: "rounded-lg bg-slate-100 px-2 text-slate-700",
                                                    children: [
                                                        convertFloatToNDecimal(questionSummary.booked.percentage, 2),
                                                        "%"
                                                    ]
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("p", {
                                        className: "flex w-32 items-end justify-end text-slate-600",
                                        children: [
                                            questionSummary.booked.count,
                                            " ",
                                            questionSummary.booked.count === 1 ? t("common.response") : t("common.responses")
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(ProgressBar, {
                                barColor: "bg-brand-dark",
                                progress: questionSummary.booked.percentage / 100
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                className: "text flex justify-between px-2 pb-2",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                        className: "mr-8 flex space-x-1",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                                                className: "font-semibold text-slate-700",
                                                children: t("common.dismissed")
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("p", {
                                                    className: "rounded-lg bg-slate-100 px-2 text-slate-700",
                                                    children: [
                                                        convertFloatToNDecimal(questionSummary.skipped.percentage, 2),
                                                        "%"
                                                    ]
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("p", {
                                        className: "flex w-32 items-end justify-end text-slate-600",
                                        children: [
                                            questionSummary.skipped.count,
                                            " ",
                                            questionSummary.skipped.count === 1 ? t("common.response") : t("common.responses")
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(ProgressBar, {
                                barColor: "bg-brand-dark",
                                progress: questionSummary.skipped.percentage / 100
                            })
                        ]
                    })
                ]
            })
        ]
    });
};

;// ./app/(app)/environments/[environmentId]/surveys/[surveyId]/(analysis)/summary/components/ConsentSummary.tsx
/* __next_internal_client_entry_do_not_use__ ConsentSummary auto */ 




const ConsentSummary = ({ questionSummary, survey, setFilter })=>{
    const { t } = (0,tolgee_react_esm/* useTranslate */.WD)();
    const summaryItems = [
        {
            title: t("common.accepted"),
            percentage: questionSummary.accepted.percentage,
            count: questionSummary.accepted.count
        },
        {
            title: t("common.dismissed"),
            percentage: questionSummary.dismissed.percentage,
            count: questionSummary.dismissed.count
        }
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
        className: "rounded-xl border border-slate-200 bg-white shadow-sm",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(QuestionSummaryHeader, {
                questionSummary: questionSummary,
                survey: survey
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                className: "space-y-5 px-4 pb-6 pt-4 text-sm md:px-6 md:text-base",
                children: summaryItems.map((summaryItem)=>{
                    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                        className: "group cursor-pointer",
                        onClick: ()=>setFilter(questionSummary.question.id, questionSummary.question.headline, questionSummary.question.type, "is", summaryItem.title),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                className: "text flex justify-between px-2 pb-2",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                        className: "mr-8 flex space-x-1",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                                                className: "font-semibold text-slate-700 underline-offset-4 group-hover:underline",
                                                children: summaryItem.title
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("p", {
                                                    className: "rounded-lg bg-slate-100 px-2 text-slate-700",
                                                    children: [
                                                        convertFloatToNDecimal(summaryItem.percentage, 2),
                                                        "%"
                                                    ]
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("p", {
                                        className: "flex w-32 items-end justify-end text-slate-600",
                                        children: [
                                            summaryItem.count,
                                            " ",
                                            summaryItem.count === 1 ? t("common.response") : t("common.responses")
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                className: "group-hover:opacity-80",
                                children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(ProgressBar, {
                                    barColor: "bg-brand-dark",
                                    progress: summaryItem.percentage / 100
                                })
                            })
                        ]
                    }, summaryItem.title);
                })
            })
        ]
    });
};

// EXTERNAL MODULE: ./modules/ui/components/array-response/index.tsx
var array_response = __webpack_require__(720489);
// EXTERNAL MODULE: ./modules/ui/components/avatars/index.tsx
var avatars = __webpack_require__(939514);
// EXTERNAL MODULE: ../../packages/lib/time.ts
var time = __webpack_require__(775453);
// EXTERNAL MODULE: ../../packages/lib/utils/contact.ts
var contact = __webpack_require__(669756);
;// ./app/(app)/environments/[environmentId]/surveys/[surveyId]/(analysis)/summary/components/ContactInfoSummary.tsx
/* __next_internal_client_entry_do_not_use__ ContactInfoSummary auto */ 







const ContactInfoSummary = ({ questionSummary, environmentId, survey, locale })=>{
    const { t } = (0,tolgee_react_esm/* useTranslate */.WD)();
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
        className: "rounded-xl border border-slate-200 bg-white shadow-sm",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(QuestionSummaryHeader, {
                questionSummary: questionSummary,
                survey: survey
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                        className: "grid h-10 grid-cols-4 items-center border-y border-slate-200 bg-slate-100 text-sm font-bold text-slate-600",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                className: "pl-4 md:pl-6",
                                children: t("common.user")
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                className: "col-span-2 pl-4 md:pl-6",
                                children: t("common.response")
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                className: "px-4 md:px-6",
                                children: t("common.time")
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                        className: "max-h-[62vh] w-full overflow-y-auto",
                        children: questionSummary.samples.map((response)=>{
                            return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                className: "grid grid-cols-4 items-center border-b border-slate-100 py-2 text-sm text-slate-800 last:border-transparent md:text-base",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                        className: "pl-4 md:pl-6",
                                        children: response.contact ? /*#__PURE__*/ (0,react_jsx_runtime.jsxs)((link_default()), {
                                            className: "ph-no-capture group flex items-center",
                                            href: `/environments/${environmentId}/contacts/${response.contact.id}`,
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                                    className: "hidden md:flex",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(avatars/* PersonAvatar */.X, {
                                                        personId: response.contact.id
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                                                    className: "ph-no-capture break-all text-slate-600 group-hover:underline md:ml-2",
                                                    children: (0,contact/* getContactIdentifier */.S)(response.contact, response.contactAttributes)
                                                })
                                            ]
                                        }) : /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                            className: "group flex items-center",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                                    className: "hidden md:flex",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(avatars/* PersonAvatar */.X, {
                                                        personId: "anonymous"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                                                    className: "break-all text-slate-600 md:ml-2",
                                                    children: t("common.anonymous")
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                        className: "ph-no-capture col-span-2 pl-6 font-semibold",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(array_response/* ArrayResponse */.x, {
                                            value: response.value
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                        className: "px-4 text-slate-500 md:px-6",
                                        children: (0,time/* timeSince */._D)(new Date(response.updatedAt).toISOString(), locale)
                                    })
                                ]
                            }, response.id);
                        })
                    })
                ]
            })
        ]
    });
};

// EXTERNAL MODULE: ../../packages/lib/utils/datetime.ts
var datetime = __webpack_require__(915139);
;// ./app/(app)/environments/[environmentId]/surveys/[surveyId]/(analysis)/summary/components/DateQuestionSummary.tsx
/* __next_internal_client_entry_do_not_use__ DateQuestionSummary auto */ 









const DateQuestionSummary = ({ questionSummary, environmentId, survey, locale })=>{
    const { t } = (0,tolgee_react_esm/* useTranslate */.WD)();
    const [visibleResponses, setVisibleResponses] = (0,react.useState)(10);
    const handleLoadMore = ()=>{
        // Increase the number of visible responses by 10, not exceeding the total number of responses
        setVisibleResponses((prevVisibleResponses)=>Math.min(prevVisibleResponses + 10, questionSummary.samples.length));
    };
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
        className: "rounded-xl border border-slate-200 bg-white shadow-sm",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(QuestionSummaryHeader, {
                questionSummary: questionSummary,
                survey: survey
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                className: "",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                        className: "grid h-10 grid-cols-4 items-center border-y border-slate-200 bg-slate-100 text-sm font-bold text-slate-600",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                className: "pl-4 md:pl-6",
                                children: t("common.user")
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                className: "col-span-2 pl-4 md:pl-6",
                                children: t("common.response")
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                className: "px-4 md:px-6",
                                children: t("common.time")
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                        className: "max-h-[62vh] w-full overflow-y-auto",
                        children: questionSummary.samples.slice(0, visibleResponses).map((response)=>/*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                className: "grid grid-cols-4 items-center border-b border-slate-100 py-2 text-sm text-slate-800 last:border-transparent md:text-base",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                        className: "pl-4 md:pl-6",
                                        children: response.contact ? /*#__PURE__*/ (0,react_jsx_runtime.jsxs)((link_default()), {
                                            className: "ph-no-capture group flex items-center",
                                            href: `/environments/${environmentId}/contacts/${response.contact.id}`,
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                                    className: "hidden md:flex",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(avatars/* PersonAvatar */.X, {
                                                        personId: response.contact.id
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                                                    className: "ph-no-capture break-all text-slate-600 group-hover:underline md:ml-2",
                                                    children: (0,contact/* getContactIdentifier */.S)(response.contact, response.contactAttributes)
                                                })
                                            ]
                                        }) : /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                            className: "group flex items-center",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                                    className: "hidden md:flex",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(avatars/* PersonAvatar */.X, {
                                                        personId: "anonymous"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                                                    className: "break-all text-slate-600 md:ml-2",
                                                    children: t("common.anonymous")
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                        className: "ph-no-capture col-span-2 whitespace-pre-wrap pl-6 font-semibold",
                                        children: (0,datetime/* formatDateWithOrdinal */.zM)(new Date(response.value))
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                        className: "px-4 text-slate-500 md:px-6",
                                        children: (0,time/* timeSince */._D)(new Date(response.updatedAt).toISOString(), locale)
                                    })
                                ]
                            }, response.id))
                    }),
                    visibleResponses < questionSummary.samples.length && /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                        className: "flex justify-center py-4",
                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_button/* Button */.$, {
                            onClick: handleLoadMore,
                            variant: "secondary",
                            size: "sm",
                            children: t("common.load_more")
                        })
                    })
                ]
            })
        ]
    });
};

// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/download.js
var download = __webpack_require__(516940);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/file.js
var file = __webpack_require__(787970);
// EXTERNAL MODULE: ../../packages/lib/storage/utils.ts
var utils = __webpack_require__(904477);
;// ./app/(app)/environments/[environmentId]/surveys/[surveyId]/(analysis)/summary/components/FileUploadSummary.tsx
/* __next_internal_client_entry_do_not_use__ FileUploadSummary auto */ 










const FileUploadSummary = ({ questionSummary, environmentId, survey, locale })=>{
    const [visibleResponses, setVisibleResponses] = (0,react.useState)(10);
    const { t } = (0,tolgee_react_esm/* useTranslate */.WD)();
    const handleLoadMore = ()=>{
        // Increase the number of visible responses by 10, not exceeding the total number of responses
        setVisibleResponses((prevVisibleResponses)=>Math.min(prevVisibleResponses + 10, questionSummary.files.length));
    };
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
        className: "rounded-xl border border-slate-200 bg-white shadow-sm",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(QuestionSummaryHeader, {
                questionSummary: questionSummary,
                survey: survey
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                className: "",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                        className: "grid h-10 grid-cols-4 items-center border-y border-slate-200 bg-slate-100 text-sm font-bold text-slate-600",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                className: "pl-4 md:pl-6",
                                children: t("common.user")
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                className: "col-span-2 pl-4 md:pl-6",
                                children: t("common.response")
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                className: "px-4 md:px-6",
                                children: t("common.time")
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                        className: "max-h-[62vh] w-full overflow-y-auto",
                        children: questionSummary.files.slice(0, visibleResponses).map((response)=>/*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                className: "grid grid-cols-4 items-center border-b border-slate-100 py-2 text-sm text-slate-800 last:border-transparent md:text-base",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                        className: "pl-4 md:pl-6",
                                        children: response.contact ? /*#__PURE__*/ (0,react_jsx_runtime.jsxs)((link_default()), {
                                            className: "ph-no-capture group flex items-center",
                                            href: `/environments/${environmentId}/contacts/${response.contact.id}`,
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                                    className: "hidden md:flex",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(avatars/* PersonAvatar */.X, {
                                                        personId: response.contact.id
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                                                    className: "ph-no-capture break-all text-slate-600 group-hover:underline md:ml-2",
                                                    children: (0,contact/* getContactIdentifier */.S)(response.contact, response.contactAttributes)
                                                })
                                            ]
                                        }) : /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                            className: "group flex items-center",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                                    className: "hidden md:flex",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(avatars/* PersonAvatar */.X, {
                                                        personId: "anonymous"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                                                    className: "break-all text-slate-600 md:ml-2",
                                                    children: t("common.anonymous")
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                        className: "col-span-2 grid",
                                        children: Array.isArray(response.value) && (response.value.length > 0 ? response.value.map((fileUrl, index)=>{
                                            const fileName = (0,utils/* getOriginalFileNameFromUrl */.x)(fileUrl);
                                            return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                                className: "relative m-2 rounded-lg bg-slate-200",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("a", {
                                                        href: fileUrl,
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                                            className: "absolute right-0 top-0 m-2",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                                                className: "flex h-8 w-8 items-center justify-center rounded-lg bg-slate-50 hover:bg-white",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(download/* default */.A, {
                                                                    className: "h-6 text-slate-500"
                                                                })
                                                            })
                                                        })
                                                    }, index),
                                                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                                        className: "flex flex-col items-center justify-center p-2",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(file/* default */.A, {
                                                                className: "h-6 text-slate-500"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                                                                className: "mt-2 text-sm text-slate-500 dark:text-slate-400",
                                                                children: fileName
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }, fileUrl);
                                        }) : /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                            className: "flex w-full flex-col items-center justify-center p-2",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                                                className: "mt-2 text-sm font-semibold text-slate-500 dark:text-slate-400",
                                                children: t("common.skipped")
                                            })
                                        }))
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                        className: "px-4 text-slate-500 md:px-6",
                                        children: (0,time/* timeSince */._D)(new Date(response.updatedAt).toISOString(), locale)
                                    })
                                ]
                            }, response.id))
                    }),
                    visibleResponses < questionSummary.files.length && /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                        className: "flex justify-center py-4",
                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_button/* Button */.$, {
                            onClick: handleLoadMore,
                            variant: "secondary",
                            size: "sm",
                            children: t("common.load_more")
                        })
                    })
                ]
            })
        ]
    });
};

// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/message-square-text.js
var message_square_text = __webpack_require__(624653);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/link.js
var icons_link = __webpack_require__(415140);
;// ./app/(app)/environments/[environmentId]/surveys/[surveyId]/(analysis)/summary/components/HiddenFieldsSummary.tsx
/* __next_internal_client_entry_do_not_use__ HiddenFieldsSummary auto */ 







const HiddenFieldsSummary = ({ environment, questionSummary, locale })=>{
    const [visibleResponses, setVisibleResponses] = (0,react.useState)(10);
    const { t } = (0,tolgee_react_esm/* useTranslate */.WD)();
    const handleLoadMore = ()=>{
        // Increase the number of visible responses by 10, not exceeding the total number of responses
        setVisibleResponses((prevVisibleResponses)=>Math.min(prevVisibleResponses + 10, questionSummary.samples.length));
    };
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
        className: "rounded-xl border border-slate-200 bg-white shadow-sm",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                className: "space-y-2 px-4 pb-5 pt-6 md:px-6",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                        className: "align-center flex justify-between gap-4",
                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("h3", {
                            className: "pb-1 text-lg font-semibold text-slate-900 md:text-xl",
                            children: questionSummary.id
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                        className: "flex space-x-2 text-xs font-semibold text-slate-600 md:text-sm",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                className: "flex items-center rounded-lg bg-slate-100 p-2",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(message_square_text/* default */.A, {
                                        className: "mr-2 h-4 w-4"
                                    }),
                                    "Hidden Field"
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                className: "flex items-center rounded-lg bg-slate-100 p-2",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(inbox/* default */.A, {
                                        className: "mr-2 h-4 w-4"
                                    }),
                                    questionSummary.responseCount,
                                    " ",
                                    questionSummary.responseCount === 1 ? t("common.response") : t("common.responses")
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                className: "rounded-b-lg bg-white",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                        className: "grid h-10 grid-cols-4 items-center border-y border-slate-200 bg-slate-100 text-sm font-bold text-slate-600",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                className: "pl-4 md:pl-6",
                                children: t("common.user")
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                className: "col-span-2 pl-4 md:pl-6",
                                children: t("common.response")
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                className: "px-4 md:px-6",
                                children: t("common.time")
                            })
                        ]
                    }),
                    questionSummary.samples.slice(0, visibleResponses).map((response)=>/*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                            className: "grid grid-cols-4 items-center border-b border-slate-100 py-2 text-sm text-slate-800 md:text-base",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                    className: "pl-4 md:pl-6",
                                    children: response.contact ? /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(icons_link/* default */.A, {
                                        className: "ph-no-capture group flex items-center",
                                        href: `/environments/${environment.id}/contacts/${response.contact.id}`,
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                                className: "hidden md:flex",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(avatars/* PersonAvatar */.X, {
                                                    personId: response.contact.id
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                                                className: "ph-no-capture break-all text-slate-600 group-hover:underline md:ml-2",
                                                children: (0,contact/* getContactIdentifier */.S)(response.contact, response.contactAttributes)
                                            })
                                        ]
                                    }) : /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                        className: "group flex items-center",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                                className: "hidden md:flex",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(avatars/* PersonAvatar */.X, {
                                                    personId: "anonymous"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                                                className: "break-all text-slate-600 md:ml-2",
                                                children: t("common.anonymous")
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                    className: "ph-no-capture col-span-2 whitespace-pre-wrap pl-6 font-semibold",
                                    children: response.value
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                    className: "px-4 text-slate-500 md:px-6",
                                    children: (0,time/* timeSince */._D)(new Date(response.updatedAt).toISOString(), locale)
                                })
                            ]
                        }, response.value)),
                    visibleResponses < questionSummary.samples.length && /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                        className: "flex justify-center py-4",
                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_button/* Button */.$, {
                            onClick: handleLoadMore,
                            variant: "secondary",
                            size: "sm",
                            children: t("common.load_more")
                        })
                    })
                ]
            })
        ]
    });
};

;// ./app/(app)/environments/[environmentId]/surveys/[surveyId]/(analysis)/summary/components/MatrixQuestionSummary.tsx
/* __next_internal_client_entry_do_not_use__ MatrixQuestionSummary auto */ 



const MatrixQuestionSummary = ({ questionSummary, survey, setFilter })=>{
    const { t } = (0,tolgee_react_esm/* useTranslate */.WD)();
    const getOpacityLevel = (percentage)=>{
        const parsedPercentage = percentage;
        const opacity = parsedPercentage * 0.75 + 15;
        return (opacity / 100).toFixed(2);
    };
    const getTooltipContent = (label, percentage, totalResponsesForRow)=>{
        if (label) {
            return label;
        } else if (percentage !== undefined && totalResponsesForRow !== undefined) {
            return `${Math.round(percentage / 100 * totalResponsesForRow)} ${t("common.responses")}`;
        }
        return "";
    };
    const columns = questionSummary.data[0] ? questionSummary.data[0].columnPercentages.map((c)=>c.column) : [];
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
        className: "rounded-xl border border-slate-200 bg-white shadow-sm",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(QuestionSummaryHeader, {
                questionSummary: questionSummary,
                survey: survey
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                className: "overflow-x-auto p-6",
                children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("table", {
                    className: "mx-auto border-collapse cursor-default text-left",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)("thead", {
                            children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("tr", {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("th", {
                                        className: "p-4 pb-3 pt-0 font-medium text-slate-400 dark:border-slate-600 dark:text-slate-200"
                                    }),
                                    columns.map((column)=>/*#__PURE__*/ (0,react_jsx_runtime.jsx)("th", {
                                            className: "text-center font-medium",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(tooltip/* TooltipRenderer */.rE, {
                                                tooltipContent: getTooltipContent(column),
                                                shouldRender: true,
                                                children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                                                    className: "max-w-40 overflow-hidden text-ellipsis whitespace-nowrap",
                                                    children: column
                                                })
                                            })
                                        }, column))
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)("tbody", {
                            children: questionSummary.data.map(({ rowLabel, columnPercentages }, rowIndex)=>/*#__PURE__*/ (0,react_jsx_runtime.jsxs)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)("td", {
                                            className: "max-w-60 overflow-hidden text-ellipsis whitespace-nowrap p-4",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(tooltip/* TooltipRenderer */.rE, {
                                                tooltipContent: getTooltipContent(rowLabel),
                                                shouldRender: true,
                                                children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                                                    className: "max-w-40 overflow-hidden text-ellipsis whitespace-nowrap",
                                                    children: rowLabel
                                                })
                                            })
                                        }),
                                        columnPercentages.map(({ column, percentage })=>/*#__PURE__*/ (0,react_jsx_runtime.jsx)("td", {
                                                className: "text-center text-slate-500 dark:border-slate-700 dark:text-slate-400",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(tooltip/* TooltipRenderer */.rE, {
                                                    shouldRender: true,
                                                    tooltipContent: getTooltipContent(undefined, percentage, questionSummary.data[rowIndex].totalResponsesForRow),
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                                        style: {
                                                            backgroundColor: `rgba(0,196,184,${getOpacityLevel(percentage)})`
                                                        },
                                                        className: "hover:outline-brand-dark m-1 flex h-full w-40 cursor-pointer items-center justify-center rounded p-4 text-sm text-slate-950 hover:outline",
                                                        onClick: ()=>setFilter(questionSummary.question.id, questionSummary.question.headline, questionSummary.question.type, rowLabel, column),
                                                        children: percentage
                                                    })
                                                })
                                            }, column))
                                    ]
                                }, rowLabel))
                        })
                    ]
                })
            })
        ]
    });
};

;// ./app/(app)/environments/[environmentId]/surveys/[surveyId]/(analysis)/summary/components/MultipleChoiceSummary.tsx
/* __next_internal_client_entry_do_not_use__ MultipleChoiceSummary auto */ 










const MultipleChoiceSummary = ({ questionSummary, environmentId, surveyType, survey, setFilter })=>{
    const { t } = (0,tolgee_react_esm/* useTranslate */.WD)();
    const [visibleOtherResponses, setVisibleOtherResponses] = (0,react.useState)(10);
    const otherValue = questionSummary.question.choices.find((choice)=>choice.id === "other")?.label.default;
    // sort by count and transform to array
    const results = Object.values(questionSummary.choices).sort((a, b)=>{
        if (a.others) return 1; // Always put a after b if a has 'others'
        if (b.others) return -1; // Always put b after a if b has 'others'
        return b.count - a.count; // Sort by count
    });
    const handleLoadMore = (e)=>{
        e.stopPropagation();
        const lastChoice = results[results.length - 1];
        const hasOthers = lastChoice.others && lastChoice.others.length > 0;
        if (!hasOthers) return; // If there are no 'others' to show, don't increase the visible options
        // Increase the number of visible responses by 10, not exceeding the total number of responses
        setVisibleOtherResponses((prevVisibleOptions)=>Math.min(prevVisibleOptions + 10, lastChoice.others?.length || 0));
    };
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
        className: "rounded-xl border border-slate-200 bg-white shadow-sm",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(QuestionSummaryHeader, {
                questionSummary: questionSummary,
                survey: survey,
                additionalInfo: questionSummary.type === "multipleChoiceMulti" ? /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                    className: "flex items-center rounded-lg bg-slate-100 p-2",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)(inbox/* default */.A, {
                            className: "mr-2 h-4 w-4"
                        }),
                        `${questionSummary.selectionCount} ${t("common.selections")}`
                    ]
                }) : undefined
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                className: "space-y-5 px-4 pb-6 pt-4 text-sm md:px-6 md:text-base",
                children: results.map((result, resultsIdx)=>/*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                        className: "group cursor-pointer",
                        onClick: ()=>setFilter(questionSummary.question.id, questionSummary.question.headline, questionSummary.question.type, questionSummary.type === "multipleChoiceSingle" || otherValue === result.value ? t("environments.surveys.summary.includes_either") : t("environments.surveys.summary.includes_all"), [
                                result.value
                            ]),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                className: "text flex flex-col justify-between px-2 pb-2 sm:flex-row",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                        className: "mr-8 flex w-full justify-between space-x-1 sm:justify-normal",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("p", {
                                                className: "font-semibold text-slate-700 underline-offset-4 group-hover:underline",
                                                children: [
                                                    results.length - resultsIdx,
                                                    " - ",
                                                    result.value
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("p", {
                                                    className: "rounded-lg bg-slate-100 px-2 text-slate-700",
                                                    children: [
                                                        convertFloatToNDecimal(result.percentage, 2),
                                                        "%"
                                                    ]
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("p", {
                                        className: "flex w-full pt-1 text-slate-600 sm:items-end sm:justify-end sm:pt-0",
                                        children: [
                                            result.count,
                                            " ",
                                            result.count === 1 ? t("common.selection") : t("common.selections")
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                className: "group-hover:opacity-80",
                                children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(ProgressBar, {
                                    barColor: "bg-brand-dark",
                                    progress: result.percentage / 100
                                })
                            }),
                            result.others && result.others.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                className: "mt-4 rounded-lg border border-slate-200",
                                onClick: (e)=>e.stopPropagation(),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                        className: "grid h-12 grid-cols-2 content-center rounded-t-lg bg-slate-100 text-left text-sm font-semibold text-slate-900",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                                className: "col-span-1 pl-6",
                                                children: t("environments.surveys.summary.other_values_found")
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                                className: "col-span-1 pl-6",
                                                children: surveyType === "app" && t("common.user")
                                            })
                                        ]
                                    }),
                                    result.others.filter((otherValue)=>otherValue.value !== "").slice(0, visibleOtherResponses).map((otherValue, idx)=>/*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                            dir: "auto",
                                            children: [
                                                surveyType === "link" && /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                                    className: "ph-no-capture col-span-1 m-2 flex h-10 items-center rounded-lg pl-4 text-sm font-medium text-slate-900",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("span", {
                                                        children: otherValue.value
                                                    })
                                                }, idx),
                                                surveyType === "app" && otherValue.contact && /*#__PURE__*/ (0,react_jsx_runtime.jsxs)((link_default()), {
                                                    href: otherValue.contact.id ? `/environments/${environmentId}/contacts/${otherValue.contact.id}` : {
                                                        pathname: null
                                                    },
                                                    className: "m-2 grid h-16 grid-cols-2 items-center rounded-lg text-sm hover:bg-slate-100",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                                            className: "ph-no-capture col-span-1 pl-4 font-medium text-slate-900",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("span", {
                                                                children: otherValue.value
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                                            className: "ph-no-capture col-span-1 flex items-center space-x-4 pl-6 font-medium text-slate-900",
                                                            children: [
                                                                otherValue.contact.id && /*#__PURE__*/ (0,react_jsx_runtime.jsx)(avatars/* PersonAvatar */.X, {
                                                                    personId: otherValue.contact.id
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("span", {
                                                                    children: (0,contact/* getContactIdentifier */.S)(otherValue.contact, otherValue.contactAttributes)
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }, idx)
                                            ]
                                        }, idx)),
                                    visibleOtherResponses < result.others.length && /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                        className: "flex justify-center py-4",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_button/* Button */.$, {
                                            onClick: handleLoadMore,
                                            variant: "secondary",
                                            size: "sm",
                                            children: t("common.load_more")
                                        })
                                    })
                                ]
                            })
                        ]
                    }, result.value))
            })
        ]
    });
};

;// ./app/(app)/environments/[environmentId]/surveys/[surveyId]/(analysis)/summary/components/NPSSummary.tsx
/* __next_internal_client_entry_do_not_use__ NPSSummary auto */ 




const NPSSummary = ({ questionSummary, survey, setFilter })=>{
    const { t } = (0,tolgee_react_esm/* useTranslate */.WD)();
    const applyFilter = (group)=>{
        const filters = {
            promoters: {
                comparison: t("environments.surveys.summary.includes_either"),
                values: [
                    "9",
                    "10"
                ]
            },
            passives: {
                comparison: t("environments.surveys.summary.includes_either"),
                values: [
                    "7",
                    "8"
                ]
            },
            detractors: {
                comparison: t("environments.surveys.summary.is_less_than"),
                values: "7"
            },
            dismissed: {
                comparison: t("common.skipped"),
                values: undefined
            }
        };
        const filter = filters[group];
        if (filter) {
            setFilter(questionSummary.question.id, questionSummary.question.headline, questionSummary.question.type, filter.comparison, filter.values);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
        className: "rounded-xl border border-slate-200 bg-white shadow-sm",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(QuestionSummaryHeader, {
                questionSummary: questionSummary,
                survey: survey
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                className: "space-y-5 px-4 pb-6 pt-4 text-sm md:px-6 md:text-base",
                children: [
                    "promoters",
                    "passives",
                    "detractors",
                    "dismissed"
                ].map((group)=>/*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                        className: "cursor-pointer hover:opacity-80",
                        onClick: ()=>applyFilter(group),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                className: `mb-2 flex justify-between ${group === "dismissed" ? "mb-2 border-t bg-white pt-4 text-sm md:text-base" : ""}`,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                        className: "mr-8 flex space-x-1",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                                                className: `font-semibold capitalize text-slate-700 ${group === "dismissed" ? "" : "text-slate-700"}`,
                                                children: group
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("p", {
                                                    className: "rounded-lg bg-slate-100 px-2 text-slate-700",
                                                    children: [
                                                        convertFloatToNDecimal(questionSummary[group]?.percentage, 2),
                                                        "%"
                                                    ]
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("p", {
                                        className: "flex w-32 items-end justify-end text-slate-600",
                                        children: [
                                            questionSummary[group]?.count,
                                            " ",
                                            questionSummary[group]?.count === 1 ? t("common.response") : t("common.responses")
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(ProgressBar, {
                                barColor: group === "dismissed" ? "bg-slate-600" : "bg-brand-dark",
                                progress: questionSummary[group]?.percentage / 100
                            })
                        ]
                    }, group))
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                className: "flex justify-center pb-4 pt-4",
                children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(HalfCircle, {
                    value: questionSummary.score
                })
            })
        ]
    });
};

// EXTERNAL MODULE: ./modules/analysis/utils.tsx
var analysis_utils = __webpack_require__(930465);
// EXTERNAL MODULE: ./lib/utils/helper.ts
var helper = __webpack_require__(856763);
// EXTERNAL MODULE: ./modules/ui/components/card/index.tsx
var card = __webpack_require__(24818);
// EXTERNAL MODULE: ../../node_modules/@radix-ui/react-dialog/dist/index.mjs
var dist = __webpack_require__(374560);
// EXTERNAL MODULE: ../../node_modules/class-variance-authority/dist/index.mjs
var class_variance_authority_dist = __webpack_require__(607918);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/x.js
var x = __webpack_require__(673766);
;// ./modules/ui/components/sheet/index.tsx
/* __next_internal_client_entry_do_not_use__ Sheet,SheetClose,SheetContent,SheetDescription,SheetFooter,SheetHeader,SheetOverlay,SheetPortal,SheetTitle,SheetTrigger auto */ 





const Sheet = dist/* Root */.bL;
const SheetTrigger = dist/* Trigger */.l9;
const SheetClose = dist/* Close */.bm;
const SheetPortal = dist/* Portal */.ZL;
const SheetOverlay = /*#__PURE__*/ react.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime.jsx)(dist/* Overlay */.hJ, {
        className: (0,cn.cn)("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80", className),
        ...props,
        ref: ref
    }));
SheetOverlay.displayName = dist/* Overlay */.hJ.displayName;
const sheetVariants = (0,class_variance_authority_dist/* cva */.F)("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500", {
    variants: {
        side: {
            top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
            bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
            left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-md",
            right: "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-md"
        }
    },
    defaultVariants: {
        side: "right"
    }
});
const SheetContent = /*#__PURE__*/ react.forwardRef(({ side = "right", className, children, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime.jsxs)(SheetPortal, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(SheetOverlay, {}),
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(dist/* Content */.UC, {
                ref: ref,
                className: (0,cn.cn)(sheetVariants({
                    side
                }), className),
                ...props,
                children: [
                    children,
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(dist/* Close */.bm, {
                        className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(x/* default */.A, {
                                className: "h-4 w-4"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("span", {
                                className: "sr-only",
                                children: "Close"
                            })
                        ]
                    })
                ]
            })
        ]
    }));
SheetContent.displayName = dist/* Content */.UC.displayName;
const SheetHeader = ({ className, ...props })=>/*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
        className: (0,cn.cn)("flex flex-col space-y-2 text-center sm:text-left", className),
        ...props
    });
SheetHeader.displayName = "SheetHeader";
const SheetFooter = ({ className, ...props })=>/*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
        className: (0,cn.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
        ...props
    });
SheetFooter.displayName = "SheetFooter";
const SheetTitle = /*#__PURE__*/ react.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime.jsx)(dist/* Title */.hE, {
        ref: ref,
        className: (0,cn.cn)("text-foreground flex items-center text-lg font-semibold", className),
        ...props
    }));
SheetTitle.displayName = dist/* Title */.hE.displayName;
const SheetDescription = /*#__PURE__*/ react.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime.jsx)(dist/* Description */.VY, {
        ref: ref,
        className: (0,cn.cn)("text-muted-foreground text-sm", className),
        ...props
    }));
SheetDescription.displayName = dist/* Description */.VY.displayName;


// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/thumbs-up.js
var thumbs_up = __webpack_require__(787823);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/thumbs-down.js
var thumbs_down = __webpack_require__(548094);
// EXTERNAL MODULE: ../../node_modules/react-markdown/lib/index.js + 123 modules
var lib = __webpack_require__(138918);
// EXTERNAL MODULE: ./modules/ui/components/dropdown-menu/index.tsx
var dropdown_menu = __webpack_require__(556825);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/chevron-down.js
var chevron_down = __webpack_require__(668382);
// EXTERNAL MODULE: ../../node_modules/zod/lib/index.mjs
var zod_lib = __webpack_require__(99922);
;// ./modules/ui/components/badge-select/index.tsx






const ZBadgeSelectOptionSchema = zod_lib.z.object({
    text: zod_lib.z.string(),
    type: zod_lib.z.enum([
        "warning",
        "success",
        "error",
        "gray"
    ])
});
const ZBadgeSelectPropsSchema = zod_lib.z.object({
    text: zod_lib.z.string().optional(),
    type: zod_lib.z.enum([
        "warning",
        "success",
        "error",
        "gray"
    ]).optional(),
    options: zod_lib.z.array(ZBadgeSelectOptionSchema).optional(),
    selectedIndex: zod_lib.z.number().optional(),
    onChange: zod_lib.z.function().args(zod_lib.z.number()).returns(zod_lib.z.void()).optional(),
    size: zod_lib.z.enum([
        "tiny",
        "normal",
        "large"
    ]),
    className: zod_lib.z.string().optional(),
    isLoading: zod_lib.z.boolean().optional()
});
const BadgeSelect = ({ text, type, options, selectedIndex = 0, onChange, size, className, isLoading = false })=>{
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
    const currentOption = options ? options[selectedIndex] : {
        text,
        type: type || "gray"
    };
    const renderContent = ()=>{
        if (isLoading) {
            return /*#__PURE__*/ (0,react_jsx_runtime.jsx)("span", {
                className: "animate-pulse",
                "aria-busy": "true",
                children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("span", {
                    className: (0,cn.cn)("inline-block h-2 w-8 rounded-full bg-black/10")
                })
            });
        }
        return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, {
            children: [
                currentOption.text,
                options && /*#__PURE__*/ (0,react_jsx_runtime.jsx)(chevron_down/* default */.A, {
                    className: "ml-1 h-3 w-3",
                    "aria-hidden": "true"
                })
            ]
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(dropdown_menu/* DropdownMenu */.rI, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(dropdown_menu/* DropdownMenuTrigger */.ty, {
                asChild: true,
                children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("span", {
                    className: (0,cn.cn)("inline-flex items-center rounded-full border border-opacity-50 font-medium", options && !isLoading ? "cursor-pointer hover:border-opacity-100" : "pointer-events-none", bgColor[currentOption.type], borderColor[currentOption.type], textColor[currentOption.type], padding[size], textSize, className),
                    children: renderContent()
                })
            }),
            options && /*#__PURE__*/ (0,react_jsx_runtime.jsx)(dropdown_menu/* DropdownMenuContent */.SQ, {
                className: "mt-1 bg-white shadow-lg",
                children: options.map((option, index)=>/*#__PURE__*/ (0,react_jsx_runtime.jsx)(dropdown_menu/* DropdownMenuItem */._2, {
                        className: (0,cn.cn)("cursor-pointer px-4 py-2 hover:bg-slate-100", textSize),
                        onClick: (event)=>{
                            event.stopPropagation();
                            onChange?.(index);
                        },
                        children: option.text
                    }, index))
            })
        ]
    });
};

// EXTERNAL MODULE: ../../node_modules/react-hot-toast/dist/index.mjs + 1 modules
var react_hot_toast_dist = __webpack_require__(986090);
;// ../../node_modules/next/dist/build/webpack/loaders/next-flight-server-reference-proxy-loader.js?id=7fb6d730bd2b6727e3fc5da067f043e2a9f372c43a&name=updateInsightAction!

const updateInsightAction = /*#__PURE__*/(0,action_client_wrapper.createServerReference)("7fb6d730bd2b6727e3fc5da067f043e2a9f372c43a", action_client_wrapper.callServer, undefined, action_client_wrapper.findSourceMapURL, "updateInsightAction")
;// ./modules/ee/insights/experience/components/category-select.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 





const categoryOptions = [
    {
        text: "Complaint",
        type: "error"
    },
    {
        text: "Request",
        type: "warning"
    },
    {
        text: "Praise",
        type: "success"
    },
    {
        text: "Other",
        type: "gray"
    }
];
const categoryMapping = {
    Complaint: "complaint",
    Request: "featureRequest",
    Praise: "praise",
    Other: "other"
};
const getCategoryIndex = (category)=>{
    switch(category){
        case "complaint":
            return 0;
        case "featureRequest":
            return 1;
        case "praise":
            return 2;
        default:
            return 3;
    }
};
const CategoryBadge = ({ category, insightId, onCategoryChange })=>{
    const [isUpdating, setIsUpdating] = (0,react.useState)(false);
    const { t } = (0,tolgee_react_esm/* useTranslate */.WD)();
    const handleUpdateCategory = async (newCategory)=>{
        setIsUpdating(true);
        try {
            await updateInsightAction({
                insightId,
                data: {
                    category: newCategory
                }
            });
            onCategoryChange?.(insightId, newCategory);
            react_hot_toast_dist/* toast */.oR.success(t("environments.experience.category_updated_successfully"));
        } catch (error) {
            console.error(t("environments.experience.failed_to_update_category"), error);
            react_hot_toast_dist/* toast */.oR.error(t("environments.experience.failed_to_update_category"));
        } finally{
            setIsUpdating(false);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime.jsx)(BadgeSelect, {
        options: categoryOptions,
        selectedIndex: getCategoryIndex(category),
        onChange: (newIndex)=>{
            const newCategoryText = categoryOptions[newIndex].text;
            const newCategory = categoryMapping[newCategoryText];
            handleUpdateCategory(newCategory);
        },
        size: "tiny",
        isLoading: isUpdating
    });
};
/* harmony default export */ const category_select = (CategoryBadge);

;// ../../node_modules/next/dist/build/webpack/loaders/next-flight-server-reference-proxy-loader.js?id=7f8586576a8648fc28cad6387c8e0c6a6779a9fc79&name=updateDocumentAction!

const updateDocumentAction = /*#__PURE__*/(0,action_client_wrapper.createServerReference)("7f8586576a8648fc28cad6387c8e0c6a6779a9fc79", action_client_wrapper.callServer, undefined, action_client_wrapper.findSourceMapURL, "updateDocumentAction")
;// ./modules/ee/insights/components/sentiment-select.tsx




const sentimentOptions = [
    {
        text: "Positive",
        type: "success"
    },
    {
        text: "Neutral",
        type: "gray"
    },
    {
        text: "Negative",
        type: "error"
    }
];
const getSentimentIndex = (sentiment)=>{
    switch(sentiment){
        case "positive":
            return 0;
        case "neutral":
            return 1;
        case "negative":
            return 2;
        default:
            return 1; // Default to neutral
    }
};
const SentimentSelect = ({ sentiment, documentId })=>{
    const [currentSentiment, setCurrentSentiment] = (0,react.useState)(sentiment);
    const [isUpdating, setIsUpdating] = (0,react.useState)(false);
    const handleUpdateSentiment = async (newSentiment)=>{
        setIsUpdating(true);
        try {
            await updateDocumentAction({
                documentId,
                data: {
                    sentiment: newSentiment
                }
            });
            setCurrentSentiment(newSentiment); // Update the state with the new sentiment
        } catch (error) {
            console.error("Failed to update document sentiment:", error);
        } finally{
            setIsUpdating(false);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime.jsx)(BadgeSelect, {
        options: sentimentOptions,
        selectedIndex: getSentimentIndex(currentSentiment),
        onChange: (newIndex)=>{
            const newSentiment = sentimentOptions[newIndex].text.toLowerCase();
            handleUpdateSentiment(newSentiment);
        },
        size: "tiny",
        isLoading: isUpdating
    });
};
/* harmony default export */ const sentiment_select = (SentimentSelect);

;// ../../node_modules/next/dist/build/webpack/loaders/next-flight-server-reference-proxy-loader.js?id=7fb20df224da70402e4cd960f7c456b9ef5af99ab8&name=getDocumentsByInsightIdSurveyIdQuestionIdAction!

const getDocumentsByInsightIdSurveyIdQuestionIdAction = /*#__PURE__*/(0,action_client_wrapper.createServerReference)("7fb20df224da70402e4cd960f7c456b9ef5af99ab8", action_client_wrapper.callServer, undefined, action_client_wrapper.findSourceMapURL, "getDocumentsByInsightIdSurveyIdQuestionIdAction")
;// ../../node_modules/next/dist/build/webpack/loaders/next-flight-server-reference-proxy-loader.js?id=7f7479bf15667eb2a17de498042aaa59cdf4dd16d9&name=getDocumentsByInsightIdAction!

const getDocumentsByInsightIdAction = /*#__PURE__*/(0,action_client_wrapper.createServerReference)("7f7479bf15667eb2a17de498042aaa59cdf4dd16d9", action_client_wrapper.callServer, undefined, action_client_wrapper.findSourceMapURL, "getDocumentsByInsightIdAction")
;// ./modules/ee/insights/components/insight-sheet/index.tsx
/* __next_internal_client_entry_do_not_use__ InsightSheet auto */ 












const InsightSheet = ({ isOpen, setIsOpen, insight, surveyId, questionId, handleFeedback, documentsFilter, documentsPerPage = 10, locale })=>{
    const { t } = (0,tolgee_react_esm/* useTranslate */.WD)();
    const [documents, setDocuments] = (0,react.useState)([]);
    const [page, setPage] = (0,react.useState)(1);
    const [isLoading, setIsLoading] = (0,react.useState)(false); // New state for loading
    const [hasMore, setHasMore] = (0,react.useState)(false);
    (0,react.useEffect)(()=>{
        if (isOpen) {
            setDocuments([]);
            setPage(1);
            setHasMore(false); // Reset hasMore when the sheet is opened
        }
        if (isOpen && insight) {
            fetchDocuments();
        }
        async function fetchDocuments() {
            if (!insight) return;
            if (isLoading) return; // Prevent fetching if already loading
            setIsLoading(true); // Set loading state to true
            try {
                let documentsResponse;
                if (questionId && surveyId) {
                    documentsResponse = await getDocumentsByInsightIdSurveyIdQuestionIdAction({
                        insightId: insight.id,
                        surveyId,
                        questionId,
                        limit: documentsPerPage,
                        offset: (page - 1) * documentsPerPage
                    });
                } else {
                    documentsResponse = await getDocumentsByInsightIdAction({
                        insightId: insight.id,
                        filterCriteria: documentsFilter,
                        limit: documentsPerPage,
                        offset: (page - 1) * documentsPerPage
                    });
                }
                if (!documentsResponse?.data) {
                    const errorMessage = (0,helper/* getFormattedErrorMessage */.g3)(documentsResponse);
                    console.error(errorMessage);
                    return;
                }
                const fetchedDocuments = documentsResponse.data;
                setDocuments((prevDocuments)=>{
                    // Remove duplicates based on document ID
                    const uniqueDocuments = new Map([
                        ...prevDocuments.map((doc)=>[
                                doc.id,
                                doc
                            ]),
                        ...fetchedDocuments.map((doc)=>[
                                doc.id,
                                doc
                            ])
                    ]);
                    return Array.from(uniqueDocuments.values());
                });
                setHasMore(fetchedDocuments.length === documentsPerPage);
            } finally{
                setIsLoading(false); // Reset loading state
            }
        }
    }, [
        isOpen,
        insight
    ]);
    const deferredDocuments = (0,react.useDeferredValue)(documents);
    const handleFeedbackClick = (feedback)=>{
        setIsOpen(false);
        handleFeedback(feedback);
    };
    const loadMoreDocuments = ()=>{
        if (hasMore) {
            setPage((prevPage)=>prevPage + 1);
        }
    };
    if (!insight) {
        return null;
    }
    return /*#__PURE__*/ (0,react_jsx_runtime.jsx)(Sheet, {
        open: isOpen,
        onOpenChange: (v)=>setIsOpen(v),
        children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(SheetContent, {
            className: "flex h-full flex-col bg-white",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(SheetHeader, {
                    className: "flex flex-col gap-1.5",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(SheetTitle, {
                            className: "flex items-center gap-x-2",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("span", {
                                    children: insight.title
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(category_select, {
                                    category: insight.category,
                                    insightId: insight.id
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)(SheetDescription, {
                            children: insight.description
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                            className: "flex w-fit items-center gap-2 rounded-lg border border-slate-300 px-2 py-1 text-sm text-slate-600",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                                    children: t("environments.experience.did_you_find_this_insight_helpful")
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(thumbs_up/* default */.A, {
                                    className: "upvote h-4 w-4 cursor-pointer text-slate-700 hover:text-emerald-500",
                                    onClick: ()=>handleFeedbackClick("positive")
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(thumbs_down/* default */.A, {
                                    className: "downvote h-4 w-4 cursor-pointer text-slate-700 hover:text-amber-600",
                                    onClick: ()=>handleFeedbackClick("negative")
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("hr", {
                    className: "my-2"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                    className: "flex flex-1 flex-col gap-y-2 overflow-auto",
                    children: deferredDocuments.map((document, index)=>/*#__PURE__*/ (0,react_jsx_runtime.jsxs)(card/* Card */.Zp, {
                            className: "transition-opacity duration-200",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(card/* CardContent */.Wu, {
                                    className: "p-4 text-sm",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(lib/* Markdown */.o, {
                                        className: "whitespace-pre-wrap",
                                        children: document.text
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(card/* CardFooter */.wL, {
                                    className: "flex justify-between rounded-bl-xl rounded-br-xl border-t border-slate-200 bg-slate-50 px-4 py-3 text-xs text-slate-600",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("p", {
                                            children: [
                                                "Sentiment: ",
                                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(sentiment_select, {
                                                    documentId: document.id,
                                                    sentiment: document.sentiment
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                                            children: (0,time/* timeSince */._D)(new Date(document.createdAt).toISOString(), locale)
                                        })
                                    ]
                                })
                            ]
                        }, `${document.id}-${index}`))
                }),
                hasMore && /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                    className: "flex justify-center py-5",
                    children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_button/* Button */.$, {
                        onClick: loadMoreDocuments,
                        variant: "secondary",
                        size: "sm",
                        children: "Load more"
                    })
                })
            ]
        })
    });
};

// EXTERNAL MODULE: ./modules/ui/components/table/index.tsx
var table = __webpack_require__(162000);
// EXTERNAL MODULE: ../../node_modules/@radix-ui/react-tabs/dist/index.mjs
var react_tabs_dist = __webpack_require__(624860);
;// ./modules/ui/components/tabs/index.tsx
/* __next_internal_client_entry_do_not_use__ Tabs,TabsContent,TabsList,TabsTrigger auto */ 



const Tabs = react_tabs_dist/* Root */.bL;
const TabsList = /*#__PURE__*/ react.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime.jsx)(react_tabs_dist/* List */.B8, {
        ref: ref,
        className: (0,cn.cn)("inline-flex h-10 items-center justify-center rounded-lg bg-slate-100 p-1 text-slate-500 dark:bg-slate-800 dark:text-slate-400", className),
        ...props
    }));
TabsList.displayName = react_tabs_dist/* List */.B8.displayName;
const TabsTrigger = /*#__PURE__*/ react.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime.jsx)(react_tabs_dist/* Trigger */.l9, {
        ref: ref,
        className: (0,cn.cn)("inline-flex items-center justify-center whitespace-nowrap rounded-lg px-3 py-1.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white data-[state=active]:text-slate-950 data-[state=active]:shadow-sm dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 dark:data-[state=active]:bg-slate-950 dark:data-[state=active]:text-slate-50", className),
        ...props
    }));
TabsTrigger.displayName = react_tabs_dist/* Trigger */.l9.displayName;
const TabsContent = /*#__PURE__*/ react.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime.jsx)(react_tabs_dist/* Content */.UC, {
        ref: ref,
        className: (0,cn.cn)("mt-2 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300", className),
        ...props
    }));
TabsContent.displayName = react_tabs_dist/* Content */.UC.displayName;


// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/user.js
var user = __webpack_require__(732995);
;// ./modules/ee/insights/components/insights-view.tsx
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@formbricks/js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* __next_internal_client_entry_do_not_use__ InsightView auto */ 










const InsightView = ({ insights, questionId, surveyId, documentsFilter, isFetching, documentsPerPage, locale })=>{
    const { t } = (0,tolgee_react_esm/* useTranslate */.WD)();
    const [isInsightSheetOpen, setIsInsightSheetOpen] = (0,react.useState)(true);
    const [localInsights, setLocalInsights] = (0,react.useState)(insights);
    const [currentInsight, setCurrentInsight] = (0,react.useState)(null);
    const [activeTab, setActiveTab] = (0,react.useState)("all");
    const [visibleInsights, setVisibleInsights] = (0,react.useState)(10);
    const handleFeedback = (feedback)=>{
        Object(function webpackMissingModule() { var e = new Error("Cannot find module '@formbricks/js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("AI Insight Feedback", {
            hiddenFields: {
                feedbackSentiment: feedback,
                insightId: currentInsight?.id,
                insightTitle: currentInsight?.title,
                insightDescription: currentInsight?.description,
                insightCategory: currentInsight?.category,
                environmentId: currentInsight?.environmentId,
                surveyId,
                questionId
            }
        });
    };
    const handleFilterSelect = (0,react.useCallback)((filterValue)=>{
        setActiveTab(filterValue);
        if (filterValue === "all") {
            setLocalInsights(insights);
        } else {
            setLocalInsights(insights.filter((insight)=>insight.category === filterValue));
        }
    }, [
        insights
    ]);
    (0,react.useEffect)(()=>{
        handleFilterSelect(activeTab);
        // Update currentInsight if it exists in the new insights array
        if (currentInsight) {
            const updatedInsight = insights.find((insight)=>insight.id === currentInsight.id);
            if (updatedInsight) {
                setCurrentInsight(updatedInsight);
            } else {
                setCurrentInsight(null);
                setIsInsightSheetOpen(false);
            }
        }
    }, [
        insights,
        activeTab,
        handleFilterSelect
    ]);
    const handleLoadMore = ()=>{
        setVisibleInsights((prevVisibleInsights)=>Math.min(prevVisibleInsights + 10, insights.length));
    };
    const updateLocalInsight = (insightId, updates)=>{
        setLocalInsights((prevInsights)=>prevInsights.map((insight)=>insight.id === insightId ? {
                    ...insight,
                    ...updates
                } : insight));
    };
    const onCategoryChange = async (insightId, newCategory)=>{
        updateLocalInsight(insightId, {
            category: newCategory
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
        className: (0,cn.cn)("mt-2"),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(Tabs, {
                defaultValue: "all",
                onValueChange: handleFilterSelect,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(TabsList, {
                        className: (0,cn.cn)("ml-2"),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(TabsTrigger, {
                                value: "all",
                                children: t("environments.experience.all")
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(TabsTrigger, {
                                value: "complaint",
                                children: t("environments.experience.complaint")
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(TabsTrigger, {
                                value: "featureRequest",
                                children: t("environments.experience.feature_request")
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(TabsTrigger, {
                                value: "praise",
                                children: t("environments.experience.praise")
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(TabsTrigger, {
                                value: "other",
                                children: t("common.other")
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(TabsContent, {
                        value: activeTab,
                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(table/* Table */.XI, {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(table/* TableHeader */.A0, {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(table/* TableRow */.Hj, {
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(table/* TableHead */.nd, {
                                                className: "w-[50px]",
                                                children: "#"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(table/* TableHead */.nd, {
                                                children: t("common.title")
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(table/* TableHead */.nd, {
                                                children: t("common.description")
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(table/* TableHead */.nd, {
                                                children: t("environments.experience.category")
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(table/* TableBody */.BF, {
                                    children: isFetching ? null : insights.length === 0 ? /*#__PURE__*/ (0,react_jsx_runtime.jsx)(table/* TableRow */.Hj, {
                                        className: "pointer-events-none",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(table/* TableCell */.nA, {
                                            colSpan: 4,
                                            className: "py-8 text-center",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                                                className: "text-slate-500",
                                                children: t("environments.experience.no_insights_found")
                                            })
                                        })
                                    }) : localInsights.length === 0 ? /*#__PURE__*/ (0,react_jsx_runtime.jsx)(table/* TableRow */.Hj, {
                                        className: "pointer-events-none",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(table/* TableCell */.nA, {
                                            colSpan: 4,
                                            className: "py-8 text-center",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                                                className: "text-slate-500",
                                                children: t("environments.experience.no_insights_for_this_filter")
                                            })
                                        })
                                    }) : localInsights.slice(0, visibleInsights).map((insight)=>/*#__PURE__*/ (0,react_jsx_runtime.jsxs)(table/* TableRow */.Hj, {
                                            className: "group cursor-pointer hover:bg-slate-50",
                                            onClick: ()=>{
                                                setCurrentInsight(insight);
                                                setIsInsightSheetOpen(true);
                                            },
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(table/* TableCell */.nA, {
                                                    className: "flex font-medium",
                                                    children: [
                                                        insight._count.documentInsights,
                                                        " ",
                                                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)(user/* default */.A, {
                                                            className: "ml-2 h-4 w-4"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(table/* TableCell */.nA, {
                                                    className: "font-medium",
                                                    children: insight.title
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(table/* TableCell */.nA, {
                                                    className: "underline-offset-2 group-hover:underline",
                                                    children: insight.description
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(table/* TableCell */.nA, {
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(category_select, {
                                                        category: insight.category,
                                                        insightId: insight.id,
                                                        onCategoryChange: onCategoryChange
                                                    })
                                                })
                                            ]
                                        }, insight.id))
                                })
                            ]
                        })
                    })
                ]
            }),
            visibleInsights < localInsights.length && /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                className: "flex justify-center py-4",
                children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_button/* Button */.$, {
                    onClick: handleLoadMore,
                    variant: "secondary",
                    size: "sm",
                    children: t("common.load_more")
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(InsightSheet, {
                isOpen: isInsightSheetOpen,
                setIsOpen: setIsInsightSheetOpen,
                insight: currentInsight,
                surveyId: surveyId,
                questionId: questionId,
                handleFeedback: handleFeedback,
                documentsFilter: documentsFilter,
                documentsPerPage: documentsPerPage,
                locale: locale
            })
        ]
    });
};

// EXTERNAL MODULE: ./modules/ui/components/secondary-navigation/index.tsx
var secondary_navigation = __webpack_require__(630785);
;// ./app/(app)/environments/[environmentId]/surveys/[surveyId]/(analysis)/summary/components/OpenTextSummary.tsx
/* __next_internal_client_entry_do_not_use__ OpenTextSummary auto */ 












const OpenTextSummary = ({ questionSummary, environmentId, survey, isAIEnabled, documentsPerPage, locale })=>{
    const { t } = (0,tolgee_react_esm/* useTranslate */.WD)();
    const isInsightsEnabled = isAIEnabled && questionSummary.insightsEnabled;
    const [visibleResponses, setVisibleResponses] = (0,react.useState)(10);
    const [activeTab, setActiveTab] = (0,react.useState)(isInsightsEnabled && questionSummary.insights.length ? "insights" : "responses");
    const handleLoadMore = ()=>{
        // Increase the number of visible responses by 10, not exceeding the total number of responses
        setVisibleResponses((prevVisibleResponses)=>Math.min(prevVisibleResponses + 10, questionSummary.samples.length));
    };
    const tabNavigation = [
        {
            id: "insights",
            label: t("common.insights"),
            onClick: ()=>setActiveTab("insights")
        },
        {
            id: "responses",
            label: t("common.responses"),
            onClick: ()=>setActiveTab("responses")
        }
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
        className: "overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(QuestionSummaryHeader, {
                questionSummary: questionSummary,
                survey: survey,
                additionalInfo: isAIEnabled && questionSummary.insightsEnabled === false ? /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                    className: "flex items-center space-x-2",
                    children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                        className: "flex items-center rounded-lg bg-slate-100 p-2",
                        children: t("environments.surveys.summary.insights_disabled")
                    })
                }) : undefined
            }),
            isInsightsEnabled && /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                className: "ml-4",
                children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(secondary_navigation/* SecondaryNavigation */.N, {
                    activeId: activeTab,
                    navigation: tabNavigation
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                className: "border-t border-slate-200"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                className: "max-h-[40vh] overflow-y-auto",
                children: activeTab === "insights" ? /*#__PURE__*/ (0,react_jsx_runtime.jsx)(InsightView, {
                    insights: questionSummary.insights,
                    questionId: questionSummary.question.id,
                    surveyId: survey.id,
                    documentsPerPage: documentsPerPage,
                    locale: locale
                }) : activeTab === "responses" ? /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(table/* Table */.XI, {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(table/* TableHeader */.A0, {
                                    className: "bg-slate-100",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(table/* TableRow */.Hj, {
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(table/* TableHead */.nd, {
                                                children: t("common.user")
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(table/* TableHead */.nd, {
                                                children: t("common.response")
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(table/* TableHead */.nd, {
                                                children: t("common.time")
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(table/* TableBody */.BF, {
                                    children: questionSummary.samples.slice(0, visibleResponses).map((response)=>/*#__PURE__*/ (0,react_jsx_runtime.jsxs)(table/* TableRow */.Hj, {
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(table/* TableCell */.nA, {
                                                    children: response.contact ? /*#__PURE__*/ (0,react_jsx_runtime.jsxs)((link_default()), {
                                                        className: "ph-no-capture group flex items-center",
                                                        href: `/environments/${environmentId}/contacts/${response.contact.id}`,
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                                                className: "hidden md:flex",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(avatars/* PersonAvatar */.X, {
                                                                    personId: response.contact.id
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                                                                className: "ph-no-capture break-all text-slate-600 group-hover:underline md:ml-2",
                                                                children: (0,contact/* getContactIdentifier */.S)(response.contact, response.contactAttributes)
                                                            })
                                                        ]
                                                    }) : /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                                        className: "group flex items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                                                className: "hidden md:flex",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(avatars/* PersonAvatar */.X, {
                                                                    personId: "anonymous"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                                                                className: "break-normal text-slate-600 md:ml-2",
                                                                children: t("common.anonymous")
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(table/* TableCell */.nA, {
                                                    className: "font-medium",
                                                    children: typeof response.value === "string" ? (0,analysis_utils/* renderHyperlinkedContent */.N)(response.value) : response.value
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(table/* TableCell */.nA, {
                                                    width: 120,
                                                    children: (0,time/* timeSince */._D)(new Date(response.updatedAt).toISOString(), locale)
                                                })
                                            ]
                                        }, response.id))
                                })
                            ]
                        }),
                        visibleResponses < questionSummary.samples.length && /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                            className: "flex justify-center py-4",
                            children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_button/* Button */.$, {
                                onClick: handleLoadMore,
                                variant: "secondary",
                                size: "sm",
                                children: t("common.load_more")
                            })
                        })
                    ]
                }) : null
            })
        ]
    });
};

// EXTERNAL MODULE: ../../node_modules/next/dist/api/image.js
var api_image = __webpack_require__(134088);
;// ./app/(app)/environments/[environmentId]/surveys/[surveyId]/(analysis)/summary/components/PictureChoiceSummary.tsx
/* __next_internal_client_entry_do_not_use__ PictureChoiceSummary auto */ 






const PictureChoiceSummary = ({ questionSummary, survey, setFilter })=>{
    const results = questionSummary.choices;
    const { t } = (0,tolgee_react_esm/* useTranslate */.WD)();
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
        className: "rounded-xl border border-slate-200 bg-white shadow-sm",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(QuestionSummaryHeader, {
                questionSummary: questionSummary,
                survey: survey,
                additionalInfo: questionSummary.question.allowMulti ? /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                    className: "flex items-center rounded-lg bg-slate-100 p-2",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)(inbox/* default */.A, {
                            className: "mr-2 h-4 w-4"
                        }),
                        `${questionSummary.selectionCount} ${t("common.selections")}`
                    ]
                }) : undefined
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                className: "space-y-5 px-4 pb-6 pt-4 text-sm md:px-6 md:text-base",
                children: results.map((result, index)=>/*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                        className: "cursor-pointer hover:opacity-80",
                        onClick: ()=>setFilter(questionSummary.question.id, questionSummary.question.headline, questionSummary.question.type, t("environments.surveys.summary.includes_all"), [
                                `${t("environments.surveys.edit.picture_idx", {
                                    idx: index + 1
                                })}`
                            ]),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                className: "text flex flex-col justify-between px-2 pb-2 sm:flex-row",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                        className: "mr-8 flex w-full justify-between space-x-1 sm:justify-normal",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                                className: "relative h-32 w-[220px]",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(api_image["default"], {
                                                    src: result.imageUrl,
                                                    alt: "choice-image",
                                                    layout: "fill",
                                                    objectFit: "cover",
                                                    className: "rounded-md"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                                className: "self-end",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("p", {
                                                    className: "rounded-lg bg-slate-100 px-2 text-slate-700",
                                                    children: [
                                                        convertFloatToNDecimal(result.percentage, 2),
                                                        "%"
                                                    ]
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("p", {
                                        className: "flex w-full pt-1 text-slate-600 sm:items-end sm:justify-end sm:pt-0",
                                        children: [
                                            result.count,
                                            " ",
                                            result.count === 1 ? t("common.selection") : t("common.selections")
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(ProgressBar, {
                                barColor: "bg-brand-dark",
                                progress: result.percentage / 100 || 0
                            })
                        ]
                    }, result.id))
            })
        ]
    });
};

;// ./app/(app)/environments/[environmentId]/surveys/[surveyId]/(analysis)/summary/components/RankingSummary.tsx




const RankingSummary = ({ questionSummary, surveyType, survey })=>{
    // sort by count and transform to array
    const { t } = (0,tolgee_react_esm/* useTranslate */.WD)();
    const results = Object.values(questionSummary.choices).sort((a, b)=>{
        return a.avgRanking - b.avgRanking; // Sort by count
    });
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
        className: "rounded-xl border border-slate-200 bg-white shadow-sm",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(QuestionSummaryHeader, {
                questionSummary: questionSummary,
                survey: survey
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                className: "space-y-5 px-4 pb-6 pt-4 text-sm md:px-6 md:text-base",
                children: results.map((result, resultsIdx)=>/*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                        className: "group cursor-pointer",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                className: "text flex flex-col justify-between px-2 pb-2 sm:flex-row",
                                children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                    className: "mr-8 flex w-full justify-between space-x-1 sm:justify-normal",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                        className: "flex w-full items-center",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("span", {
                                                className: "mr-2 text-slate-400",
                                                children: [
                                                    "#",
                                                    resultsIdx + 1
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                                className: "rounded bg-slate-100 px-2 py-1",
                                                children: result.value
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("span", {
                                                className: "ml-auto flex items-center space-x-1",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("span", {
                                                        className: "font-bold text-slate-600",
                                                        children: [
                                                            "#",
                                                            convertFloatToNDecimal(result.avgRanking, 2)
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("span", {
                                                        children: t("environments.surveys.summary.average")
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            }),
                            result.others && result.others.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                className: "mt-4 rounded-lg border border-slate-200",
                                children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                    className: "grid h-12 grid-cols-2 content-center rounded-t-lg bg-slate-100 text-left text-sm font-semibold text-slate-900",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                            className: "col-span-1 pl-6",
                                            children: t("environments.surveys.summary.other_values_found")
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                            className: "col-span-1 pl-6",
                                            children: surveyType === "app" && t("common.user")
                                        })
                                    ]
                                })
                            })
                        ]
                    }, result.value))
            })
        ]
    });
};

// EXTERNAL MODULE: ./modules/ui/components/rating-response/index.tsx + 2 modules
var rating_response = __webpack_require__(438501);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/circle-slash-2.js
var circle_slash_2 = __webpack_require__(123919);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/star.js
var star = __webpack_require__(696340);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/smile.js
var smile = __webpack_require__(691794);
;// ./app/(app)/environments/[environmentId]/surveys/[surveyId]/(analysis)/summary/components/RatingSummary.tsx
/* __next_internal_client_entry_do_not_use__ RatingSummary auto */ 







const RatingSummary = ({ questionSummary, survey, setFilter })=>{
    const { t } = (0,tolgee_react_esm/* useTranslate */.WD)();
    const getIconBasedOnScale = (0,react.useMemo)(()=>{
        const scale = questionSummary.question.scale;
        if (scale === "number") return /*#__PURE__*/ (0,react_jsx_runtime.jsx)(circle_slash_2/* default */.A, {
            className: "h-4 w-4"
        });
        else if (scale === "star") return /*#__PURE__*/ (0,react_jsx_runtime.jsx)(star/* default */.A, {
            fill: "rgb(250 204 21)",
            className: "h-4 w-4 text-yellow-400"
        });
        else if (scale === "smiley") return /*#__PURE__*/ (0,react_jsx_runtime.jsx)(smile/* default */.A, {
            className: "h-4 w-4"
        });
    }, [
        questionSummary
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
        className: "rounded-xl border border-slate-200 bg-white shadow-sm",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(QuestionSummaryHeader, {
                questionSummary: questionSummary,
                survey: survey,
                additionalInfo: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                    className: "flex items-center space-x-2 rounded-lg bg-slate-100 p-2",
                    children: [
                        getIconBasedOnScale,
                        /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                            children: [
                                t("environments.surveys.summary.overall"),
                                ": ",
                                questionSummary.average.toFixed(2)
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                className: "space-y-5 px-4 pb-6 pt-4 text-sm md:px-6 md:text-base",
                children: questionSummary.choices.map((result)=>/*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                        className: "cursor-pointer hover:opacity-80",
                        onClick: ()=>setFilter(questionSummary.question.id, questionSummary.question.headline, questionSummary.question.type, t("environments.surveys.summary.is_equal_to"), result.rating.toString()),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                className: "text flex justify-between px-2 pb-2",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                        className: "mr-8 flex items-center space-x-1",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                                className: "font-semibold text-slate-700",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(rating_response/* RatingResponse */.j, {
                                                    scale: questionSummary.question.scale,
                                                    answer: result.rating,
                                                    range: questionSummary.question.range,
                                                    addColors: questionSummary.question.isColorCodingEnabled
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("p", {
                                                    className: "rounded-lg bg-slate-100 px-2 text-slate-700",
                                                    children: [
                                                        convertFloatToNDecimal(result.percentage, 2),
                                                        "%"
                                                    ]
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("p", {
                                        className: "flex w-32 items-end justify-end text-slate-600",
                                        children: [
                                            result.count,
                                            " ",
                                            result.count === 1 ? t("common.response") : t("common.responses")
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(ProgressBar, {
                                barColor: "bg-brand-dark",
                                progress: result.percentage / 100
                            })
                        ]
                    }, result.rating))
            }),
            questionSummary.dismissed && questionSummary.dismissed.count > 0 && /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                className: "rounded-b-lg border-t bg-white px-6 py-4",
                children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                    children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                        className: "text flex justify-between px-2",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                                className: "font-semibold text-slate-700",
                                children: t("common.dismissed")
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("p", {
                                className: "flex w-32 items-end justify-end text-slate-600",
                                children: [
                                    questionSummary.dismissed.count,
                                    " ",
                                    questionSummary.dismissed.count === 1 ? t("common.response") : t("common.responses")
                                ]
                            })
                        ]
                    })
                }, "dismissed")
            })
        ]
    });
};

// EXTERNAL MODULE: ./app/(app)/environments/[environmentId]/surveys/[surveyId]/components/QuestionsComboBox.tsx
var QuestionsComboBox = __webpack_require__(267779);
// EXTERNAL MODULE: ./modules/ui/components/empty-space-filler/index.tsx
var empty_space_filler = __webpack_require__(443757);
// EXTERNAL MODULE: ./modules/ui/components/skeleton-loader/index.tsx
var skeleton_loader = __webpack_require__(901979);
// EXTERNAL MODULE: ../../packages/lib/i18n/utils.ts
var i18n_utils = __webpack_require__(864698);
// EXTERNAL MODULE: ../../packages/types/surveys/types.ts + 3 modules
var types = __webpack_require__(102379);
;// ./app/(app)/environments/[environmentId]/surveys/[surveyId]/(analysis)/summary/components/AddressSummary.tsx
/* __next_internal_client_entry_do_not_use__ AddressSummary auto */ 







const AddressSummary = ({ questionSummary, environmentId, survey, locale })=>{
    const { t } = (0,tolgee_react_esm/* useTranslate */.WD)();
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
        className: "rounded-xl border border-slate-200 bg-white shadow-sm",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(QuestionSummaryHeader, {
                questionSummary: questionSummary,
                survey: survey
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                        className: "grid h-10 grid-cols-4 items-center border-y border-slate-200 bg-slate-100 text-sm font-bold text-slate-600",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                className: "pl-4 md:pl-6",
                                children: t("common.user")
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                className: "col-span-2 pl-4 md:pl-6",
                                children: t("common.response")
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                className: "px-4 md:px-6",
                                children: t("common.time")
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                        className: "max-h-[62vh] w-full overflow-y-auto",
                        children: questionSummary.samples.map((response)=>{
                            return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                className: "grid grid-cols-4 items-center border-b border-slate-100 py-2 text-sm text-slate-800 last:border-transparent md:text-base",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                        className: "pl-4 md:pl-6",
                                        children: response.contact ? /*#__PURE__*/ (0,react_jsx_runtime.jsxs)((link_default()), {
                                            className: "ph-no-capture group flex items-center",
                                            href: `/environments/${environmentId}/contacts/${response.contact.id}`,
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                                    className: "hidden md:flex",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(avatars/* PersonAvatar */.X, {
                                                        personId: response.contact.id
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                                                    className: "ph-no-capture break-all text-slate-600 group-hover:underline md:ml-2",
                                                    children: (0,contact/* getContactIdentifier */.S)(response.contact, response.contactAttributes)
                                                })
                                            ]
                                        }) : /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                            className: "group flex items-center",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                                    className: "hidden md:flex",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(avatars/* PersonAvatar */.X, {
                                                        personId: "anonymous"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                                                    className: "break-all text-slate-600 md:ml-2",
                                                    children: t("common.anonymous")
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                        className: "ph-no-capture col-span-2 pl-6 font-semibold",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(array_response/* ArrayResponse */.x, {
                                            value: response.value
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                        className: "px-4 text-slate-500 md:px-6",
                                        children: (0,time/* timeSince */._D)(new Date(response.updatedAt).toISOString(), locale)
                                    })
                                ]
                            }, response.id);
                        })
                    })
                ]
            })
        ]
    });
};

;// ./app/(app)/environments/[environmentId]/surveys/[surveyId]/(analysis)/summary/components/SummaryList.tsx
/* __next_internal_client_entry_do_not_use__ SummaryList auto */ 

























const SummaryList = ({ summary, environment, responseCount, survey, totalResponseCount, isAIEnabled, documentsPerPage, locale })=>{
    const { setSelectedFilter, selectedFilter } = (0,ResponseFilterContext/* useResponseFilter */.S)();
    const { t } = (0,tolgee_react_esm/* useTranslate */.WD)();
    const setFilter = (questionId, label, questionType, filterValue, filterComboBoxValue)=>{
        const filterObject = {
            ...selectedFilter
        };
        const value = {
            id: questionId,
            label: (0,i18n_utils/* getLocalizedValue */.bT)(label, "default"),
            questionType: questionType,
            type: QuestionsComboBox/* OptionsType */.T.QUESTIONS
        };
        // Find the index of the existing filter with the same questionId
        const existingFilterIndex = filterObject.filter.findIndex((filter)=>filter.questionType.id === questionId);
        if (existingFilterIndex !== -1) {
            // Replace the existing filter
            filterObject.filter[existingFilterIndex] = {
                questionType: value,
                filterType: {
                    filterComboBoxValue: filterComboBoxValue,
                    filterValue: filterValue
                }
            };
            react_hot_toast_dist/* toast */.oR.success(t("environments.surveys.summary.filter_updated_successfully"), {
                duration: 5000
            });
        } else {
            // Add new filter
            filterObject.filter.push({
                questionType: value,
                filterType: {
                    filterComboBoxValue: filterComboBoxValue,
                    filterValue: filterValue
                }
            });
            react_hot_toast_dist/* toast */.oR.success(constructToastMessage(questionType, filterValue, survey, questionId, t, filterComboBoxValue) ?? t("environments.surveys.summary.filter_added_successfully"), {
                duration: 5000
            });
        }
        setSelectedFilter({
            filter: [
                ...filterObject.filter
            ],
            onlyComplete: filterObject.onlyComplete
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
        className: "mt-10 space-y-8",
        children: survey.type === "app" && responseCount === 0 && !environment.appSetupCompleted ? /*#__PURE__*/ (0,react_jsx_runtime.jsx)(EmptyAppSurveys, {
            environment: environment
        }) : summary.length === 0 ? /*#__PURE__*/ (0,react_jsx_runtime.jsx)(skeleton_loader/* SkeletonLoader */.j, {
            type: "summary"
        }) : responseCount === 0 ? /*#__PURE__*/ (0,react_jsx_runtime.jsx)(empty_space_filler/* EmptySpaceFiller */.y, {
            type: "response",
            environment: environment,
            noWidgetRequired: survey.type === "link",
            emptyMessage: totalResponseCount === 0 ? undefined : t("environments.surveys.summary.no_response_matches_filter")
        }) : summary.map((questionSummary)=>{
            if (questionSummary.type === types/* TSurveyQuestionTypeEnum */.wn.OpenText) {
                return /*#__PURE__*/ (0,react_jsx_runtime.jsx)(OpenTextSummary, {
                    questionSummary: questionSummary,
                    environmentId: environment.id,
                    survey: survey,
                    isAIEnabled: isAIEnabled,
                    documentsPerPage: documentsPerPage,
                    locale: locale
                }, questionSummary.question.id);
            }
            if (questionSummary.type === types/* TSurveyQuestionTypeEnum */.wn.MultipleChoiceSingle || questionSummary.type === types/* TSurveyQuestionTypeEnum */.wn.MultipleChoiceMulti) {
                return /*#__PURE__*/ (0,react_jsx_runtime.jsx)(MultipleChoiceSummary, {
                    questionSummary: questionSummary,
                    environmentId: environment.id,
                    surveyType: survey.type,
                    survey: survey,
                    setFilter: setFilter
                }, questionSummary.question.id);
            }
            if (questionSummary.type === types/* TSurveyQuestionTypeEnum */.wn.NPS) {
                return /*#__PURE__*/ (0,react_jsx_runtime.jsx)(NPSSummary, {
                    questionSummary: questionSummary,
                    survey: survey,
                    setFilter: setFilter
                }, questionSummary.question.id);
            }
            if (questionSummary.type === types/* TSurveyQuestionTypeEnum */.wn.CTA) {
                return /*#__PURE__*/ (0,react_jsx_runtime.jsx)(CTASummary, {
                    questionSummary: questionSummary,
                    survey: survey
                }, questionSummary.question.id);
            }
            if (questionSummary.type === types/* TSurveyQuestionTypeEnum */.wn.Rating) {
                return /*#__PURE__*/ (0,react_jsx_runtime.jsx)(RatingSummary, {
                    questionSummary: questionSummary,
                    survey: survey,
                    setFilter: setFilter
                }, questionSummary.question.id);
            }
            if (questionSummary.type === types/* TSurveyQuestionTypeEnum */.wn.Consent) {
                return /*#__PURE__*/ (0,react_jsx_runtime.jsx)(ConsentSummary, {
                    questionSummary: questionSummary,
                    survey: survey,
                    setFilter: setFilter
                }, questionSummary.question.id);
            }
            if (questionSummary.type === types/* TSurveyQuestionTypeEnum */.wn.PictureSelection) {
                return /*#__PURE__*/ (0,react_jsx_runtime.jsx)(PictureChoiceSummary, {
                    questionSummary: questionSummary,
                    survey: survey,
                    setFilter: setFilter
                }, questionSummary.question.id);
            }
            if (questionSummary.type === types/* TSurveyQuestionTypeEnum */.wn.Date) {
                return /*#__PURE__*/ (0,react_jsx_runtime.jsx)(DateQuestionSummary, {
                    questionSummary: questionSummary,
                    environmentId: environment.id,
                    survey: survey,
                    locale: locale
                }, questionSummary.question.id);
            }
            if (questionSummary.type === types/* TSurveyQuestionTypeEnum */.wn.FileUpload) {
                return /*#__PURE__*/ (0,react_jsx_runtime.jsx)(FileUploadSummary, {
                    questionSummary: questionSummary,
                    environmentId: environment.id,
                    survey: survey,
                    locale: locale
                }, questionSummary.question.id);
            }
            if (questionSummary.type === types/* TSurveyQuestionTypeEnum */.wn.Cal) {
                return /*#__PURE__*/ (0,react_jsx_runtime.jsx)(CalSummary, {
                    questionSummary: questionSummary,
                    environmentId: environment.id,
                    survey: survey
                }, questionSummary.question.id);
            }
            if (questionSummary.type === types/* TSurveyQuestionTypeEnum */.wn.Matrix) {
                return /*#__PURE__*/ (0,react_jsx_runtime.jsx)(MatrixQuestionSummary, {
                    questionSummary: questionSummary,
                    survey: survey,
                    setFilter: setFilter
                }, questionSummary.question.id);
            }
            if (questionSummary.type === types/* TSurveyQuestionTypeEnum */.wn.Address) {
                return /*#__PURE__*/ (0,react_jsx_runtime.jsx)(AddressSummary, {
                    questionSummary: questionSummary,
                    environmentId: environment.id,
                    survey: survey,
                    locale: locale
                }, questionSummary.question.id);
            }
            if (questionSummary.type === types/* TSurveyQuestionTypeEnum */.wn.Ranking) {
                return /*#__PURE__*/ (0,react_jsx_runtime.jsx)(RankingSummary, {
                    questionSummary: questionSummary,
                    surveyType: survey.type,
                    survey: survey
                }, questionSummary.question.id);
            }
            if (questionSummary.type === "hiddenField") {
                return /*#__PURE__*/ (0,react_jsx_runtime.jsx)(HiddenFieldsSummary, {
                    questionSummary: questionSummary,
                    environment: environment,
                    locale: locale
                }, questionSummary.id);
            }
            if (questionSummary.type === types/* TSurveyQuestionTypeEnum */.wn.ContactInfo) {
                return /*#__PURE__*/ (0,react_jsx_runtime.jsx)(ContactInfoSummary, {
                    questionSummary: questionSummary,
                    environmentId: environment.id,
                    survey: survey,
                    locale: locale
                }, questionSummary.question.id);
            }
            return null;
        })
    });
};

// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/chevron-up.js
var chevron_up = __webpack_require__(397903);
;// ./app/(app)/environments/[environmentId]/surveys/[surveyId]/(analysis)/summary/components/SummaryMetadata.tsx
/* __next_internal_client_entry_do_not_use__ SummaryMetadata auto */ 



const StatCard = ({ label, percentage, value, tooltipText, isLoading })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime.jsx)(tooltip/* TooltipProvider */.Bc, {
        delayDuration: 50,
        children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(tooltip/* Tooltip */.m_, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(tooltip/* TooltipTrigger */.k$, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                        className: "flex h-full cursor-default flex-col justify-between space-y-2 rounded-xl border border-slate-200 bg-white p-4 text-left shadow-sm",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("p", {
                                className: "flex items-center gap-1 text-sm text-slate-600",
                                children: [
                                    label,
                                    typeof percentage === "number" && !isNaN(percentage) && !isLoading && /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("span", {
                                        className: "ml-1 rounded-xl bg-slate-100 px-2 py-1 text-xs",
                                        children: [
                                            percentage,
                                            "%"
                                        ]
                                    })
                                ]
                            }),
                            isLoading ? /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                className: "h-6 w-12 animate-pulse rounded-full bg-slate-200"
                            }) : /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                                className: "text-2xl font-bold text-slate-800",
                                children: value
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(tooltip/* TooltipContent */.ZI, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                        children: tooltipText
                    })
                })
            ]
        })
    });
};
const formatTime = (ttc)=>{
    const seconds = ttc / 1000;
    let formattedValue;
    if (seconds >= 60) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        formattedValue = `${minutes}m ${remainingSeconds.toFixed(2)}s`;
    } else {
        formattedValue = `${seconds.toFixed(2)}s`;
    }
    return formattedValue;
};
const SummaryMetadata = ({ setShowDropOffs, showDropOffs, surveySummary, isLoading })=>{
    const { completedPercentage, completedResponses, displayCount, dropOffPercentage, dropOffCount, startsPercentage, totalResponses, ttcAverage } = surveySummary;
    const { t } = (0,tolgee_react_esm/* useTranslate */.WD)();
    return /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
        children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
            className: "grid grid-cols-2 gap-4 md:grid-cols-5 md:gap-x-2 lg:col-span-4",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(StatCard, {
                    label: t("environments.surveys.summary.impressions"),
                    percentage: null,
                    value: displayCount === 0 ? /*#__PURE__*/ (0,react_jsx_runtime.jsx)("span", {
                        children: "-"
                    }) : displayCount,
                    tooltipText: t("environments.surveys.summary.impressions_tooltip"),
                    isLoading: isLoading
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(StatCard, {
                    label: t("environments.surveys.summary.starts"),
                    percentage: Math.round(startsPercentage) > 100 ? null : Math.round(startsPercentage),
                    value: totalResponses === 0 ? /*#__PURE__*/ (0,react_jsx_runtime.jsx)("span", {
                        children: "-"
                    }) : totalResponses,
                    tooltipText: t("environments.surveys.summary.starts_tooltip"),
                    isLoading: isLoading
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(StatCard, {
                    label: t("environments.surveys.summary.completed"),
                    percentage: Math.round(completedPercentage) > 100 ? null : Math.round(completedPercentage),
                    value: completedResponses === 0 ? /*#__PURE__*/ (0,react_jsx_runtime.jsx)("span", {
                        children: "-"
                    }) : completedResponses,
                    tooltipText: t("environments.surveys.summary.completed_tooltip"),
                    isLoading: isLoading
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(tooltip/* TooltipProvider */.Bc, {
                    delayDuration: 50,
                    children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(tooltip/* Tooltip */.m_, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(tooltip/* TooltipTrigger */.k$, {
                                children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                    onClick: ()=>setShowDropOffs(!showDropOffs),
                                    className: "group flex h-full w-full cursor-pointer flex-col justify-between space-y-2 rounded-lg border border-slate-200 bg-white p-4 text-left shadow-sm",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("span", {
                                            className: "text-sm text-slate-600",
                                            children: [
                                                t("environments.surveys.summary.drop_offs"),
                                                `${Math.round(dropOffPercentage)}%` !== "NaN%" && !isLoading && /*#__PURE__*/ (0,react_jsx_runtime.jsx)("span", {
                                                    className: "ml-1 rounded-xl bg-slate-100 px-2 py-1 text-xs",
                                                    children: `${Math.round(dropOffPercentage)}%`
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                            className: "flex w-full items-end justify-between",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("span", {
                                                    className: "text-2xl font-bold text-slate-800",
                                                    children: isLoading ? /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                                        className: "h-6 w-12 animate-pulse rounded-full bg-slate-200"
                                                    }) : dropOffCount === 0 ? /*#__PURE__*/ (0,react_jsx_runtime.jsx)("span", {
                                                        children: "-"
                                                    }) : dropOffCount
                                                }),
                                                !isLoading && /*#__PURE__*/ (0,react_jsx_runtime.jsx)("span", {
                                                    className: "ml-1 flex items-center rounded-md bg-slate-800 px-2 py-1 text-xs text-slate-50 group-hover:bg-slate-700",
                                                    children: showDropOffs ? /*#__PURE__*/ (0,react_jsx_runtime.jsx)(chevron_up/* default */.A, {
                                                        className: "h-4 w-4"
                                                    }) : /*#__PURE__*/ (0,react_jsx_runtime.jsx)(chevron_down/* default */.A, {
                                                        className: "h-4 w-4"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(tooltip/* TooltipContent */.ZI, {
                                children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                                    children: t("environments.surveys.summary.drop_offs_tooltip")
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(StatCard, {
                    label: t("environments.surveys.summary.time_to_complete"),
                    percentage: null,
                    value: ttcAverage === 0 ? /*#__PURE__*/ (0,react_jsx_runtime.jsx)("span", {
                        children: "-"
                    }) : `${formatTime(ttcAverage)}`,
                    tooltipText: t("environments.surveys.summary.ttc_tooltip"),
                    isLoading: isLoading
                })
            ]
        })
    });
};

;// ./app/(app)/environments/[environmentId]/surveys/[surveyId]/(analysis)/summary/components/SummaryPage.tsx
/* __next_internal_client_entry_do_not_use__ SummaryPage auto */ 














const initialSurveySummary = {
    meta: {
        completedPercentage: 0,
        completedResponses: 0,
        displayCount: 0,
        dropOffPercentage: 0,
        dropOffCount: 0,
        startsPercentage: 0,
        totalResponses: 0,
        ttcAverage: 0
    },
    dropOff: [],
    summary: []
};
const SummaryPage = ({ environment, survey, surveyId, webAppUrl, totalResponseCount, isAIEnabled, documentsPerPage, locale, isReadOnly })=>{
    const params = (0,navigation.useParams)();
    const sharingKey = params.sharingKey;
    const isSharingPage = !!sharingKey;
    const searchParams = (0,navigation.useSearchParams)();
    const isShareEmbedModalOpen = searchParams.get("share") === "true";
    const [responseCount, setResponseCount] = (0,react.useState)(null);
    const [surveySummary, setSurveySummary] = (0,react.useState)(initialSurveySummary);
    const [showDropOffs, setShowDropOffs] = (0,react.useState)(false);
    const [isLoading, setIsLoading] = (0,react.useState)(true);
    const { selectedFilter, dateRange, resetState } = (0,ResponseFilterContext/* useResponseFilter */.S)();
    const filters = (0,react.useMemo)(()=>(0,surveys/* getFormattedFilters */.QR)(survey, selectedFilter, dateRange), [
        selectedFilter,
        dateRange,
        survey
    ]);
    // Use a ref to keep the latest state and props
    const latestFiltersRef = (0,react.useRef)(filters);
    latestFiltersRef.current = filters;
    const getResponseCount = (0,react.useCallback)(()=>{
        if (isSharingPage) return (0,next_flight_server_reference_proxy_loaderid_7f6b86dfb9f916340e09181cf5b45bed7b1e7c65db_name_getResponseCountBySurveySharingKeyAction_/* getResponseCountBySurveySharingKeyAction */.v)({
            sharingKey,
            filterCriteria: latestFiltersRef.current
        });
        return (0,next_flight_server_reference_proxy_loaderid_7fc40fcf4d8238c50e0ee14725c1e9b7cc636f4788_name_getResponseCountAction_/* getResponseCountAction */.X)({
            surveyId,
            filterCriteria: latestFiltersRef.current
        });
    }, [
        isSharingPage,
        sharingKey,
        surveyId
    ]);
    const getSummary = (0,react.useCallback)(()=>{
        if (isSharingPage) return getSummaryBySurveySharingKeyAction({
            sharingKey,
            filterCriteria: latestFiltersRef.current
        });
        return getSurveySummaryAction({
            surveyId,
            filterCriteria: latestFiltersRef.current
        });
    }, [
        isSharingPage,
        sharingKey,
        surveyId
    ]);
    const handleInitialData = (0,react.useCallback)(async (isInitialLoad = false)=>{
        if (isInitialLoad) {
            setIsLoading(true);
        }
        try {
            const [updatedResponseCountData, updatedSurveySummary] = await Promise.all([
                getResponseCount(),
                getSummary()
            ]);
            const responseCount = updatedResponseCountData?.data ?? 0;
            const surveySummary = updatedSurveySummary?.data ?? initialSurveySummary;
            setResponseCount(responseCount);
            setSurveySummary(surveySummary);
        } catch (error) {
            console.error(error);
        } finally{
            if (isInitialLoad) {
                setIsLoading(false);
            }
        }
    }, [
        getResponseCount,
        getSummary
    ]);
    (0,react.useEffect)(()=>{
        handleInitialData(true);
    }, [
        filters,
        isSharingPage,
        sharingKey,
        surveyId,
        handleInitialData
    ]);
    (0,useIntervalWhenFocused/* useIntervalWhenFocused */.y)(()=>{
        handleInitialData(false);
    }, 10000, !isShareEmbedModalOpen, false);
    const surveyMemoized = (0,react.useMemo)(()=>{
        return (0,recall/* replaceHeadlineRecall */.uD)(survey, "default");
    }, [
        survey
    ]);
    (0,react.useEffect)(()=>{
        if (!searchParams?.get("referer")) {
            resetState();
        }
    }, [
        searchParams,
        resetState
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(SummaryMetadata, {
                surveySummary: surveySummary.meta,
                showDropOffs: showDropOffs,
                setShowDropOffs: setShowDropOffs,
                isLoading: isLoading
            }),
            showDropOffs && /*#__PURE__*/ (0,react_jsx_runtime.jsx)(SummaryDropOffs, {
                dropOff: surveySummary.dropOff,
                survey: surveyMemoized
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                className: "flex gap-1.5",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(CustomFilter/* CustomFilter */.Y, {
                        survey: surveyMemoized
                    }),
                    !isReadOnly && !isSharingPage && /*#__PURE__*/ (0,react_jsx_runtime.jsx)(ResultsShareButton/* ResultsShareButton */.k, {
                        survey: surveyMemoized,
                        webAppUrl: webAppUrl
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_ScrollToTop, {
                containerId: "mainContent"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(SummaryList, {
                summary: surveySummary.summary,
                responseCount: responseCount,
                survey: surveyMemoized,
                environment: environment,
                totalResponseCount: totalResponseCount,
                isAIEnabled: isAIEnabled,
                documentsPerPage: documentsPerPage,
                locale: locale
            })
        ]
    });
};


/***/ }),

/***/ 24818:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BT: () => (/* binding */ CardDescription),
/* harmony export */   Wu: () => (/* binding */ CardContent),
/* harmony export */   ZB: () => (/* binding */ CardTitle),
/* harmony export */   Zp: () => (/* binding */ Card),
/* harmony export */   aR: () => (/* binding */ CardHeader),
/* harmony export */   wL: () => (/* binding */ CardFooter)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(642725);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(891616);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(983773);



const Card = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, label, description, connectText, connectHref, connectNewTab, docsText, docsHref, docsNewTab, connected, statusText, icon, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        ref: ref,
        className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_2__.cn)("text-card-foreground rounded-xl border border-slate-200 bg-white shadow-sm", className),
        ...props
    }));
Card.displayName = "Card";
const CardHeader = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        ref: ref,
        className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_2__.cn)("flex flex-col space-y-1.5 p-6", className),
        ...props
    }));
CardHeader.displayName = "CardHeader";
const CardTitle = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", {
        ref: ref,
        className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_2__.cn)("text-2xl font-semibold leading-none tracking-tight", className),
        ...props
    }));
CardTitle.displayName = "CardTitle";
const CardDescription = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
        ref: ref,
        className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_2__.cn)("text-muted-foreground text-sm", className),
        ...props
    }));
CardDescription.displayName = "CardDescription";
const CardContent = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        ref: ref,
        className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_2__.cn)("p-6 pt-0", className),
        ...props
    }));
CardContent.displayName = "CardContent";
const CardFooter = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        ref: ref,
        className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_2__.cn)("flex items-center p-6 pt-0", className),
        ...props
    }));
CardFooter.displayName = "CardFooter";



/***/ }),

/***/ 443757:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   y: () => (/* binding */ EmptySpaceFiller)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(642725);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_ui_components_skeleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(290205);
/* harmony import */ var _tolgee_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(397674);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36888);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* __next_internal_client_entry_do_not_use__ EmptySpaceFiller auto */ 



const EmptySpaceFiller = ({ type, environment, noWidgetRequired, emptyMessage })=>{
    const { t } = (0,_tolgee_react__WEBPACK_IMPORTED_MODULE_3__/* .useTranslate */ .WD)();
    if (type === "table") {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            className: "shadow-xs group rounded-xl border border-slate-100 bg-white p-4",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "w-full space-y-3",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        className: "h-16 w-full rounded-lg bg-slate-50"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex h-16 w-full flex-col items-center justify-center rounded-lg bg-slate-50 text-slate-700 transition-all duration-300 ease-in-out hover:bg-slate-100",
                        children: [
                            !environment.appSetupCompleted && !noWidgetRequired && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                className: "flex w-full items-center justify-center",
                                href: `/environments/${environment.id}/project/app-connection`,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                    className: "decoration-brand-dark underline transition-all duration-300 ease-in-out",
                                    children: [
                                        t("environments.surveys.summary.install_widget"),
                                        " ",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("strong", {
                                            children: [
                                                t("environments.surveys.summary.go_to_setup_checklist"),
                                                " "
                                            ]
                                        })
                                    ]
                                })
                            }),
                            (environment.appSetupCompleted || noWidgetRequired) && emptyMessage || t("environments.surveys.summary.waiting_for_response")
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        className: "h-16 w-full rounded-lg bg-slate-50"
                    })
                ]
            })
        });
    }
    if (type === "response") {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "group space-y-4 rounded-lg bg-white p-6",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex items-center space-x-4",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                            className: "h-12 w-12 flex-shrink-0 rounded-full bg-slate-100"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                            className: "h-6 w-full rounded-full bg-slate-100"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                            className: "h-12 w-full rounded-full bg-slate-100"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex h-12 w-full items-center justify-center rounded-full bg-slate-50 text-sm text-slate-500 hover:bg-slate-100",
                            children: [
                                !environment.appSetupCompleted && !noWidgetRequired && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    className: "flex h-full w-full items-center justify-center",
                                    href: `/environments/${environment.id}/project/app-connection`,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        className: "decoration-brand-dark underline transition-all duration-300 ease-in-out",
                                        children: [
                                            t("environments.surveys.summary.install_widget"),
                                            " ",
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("strong", {
                                                children: [
                                                    t("environments.surveys.summary.go_to_setup_checklist"),
                                                    " "
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                (environment.appSetupCompleted || noWidgetRequired) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                    className: "bg-light-background-primary-500 text-center",
                                    children: emptyMessage ?? t("environments.surveys.summary.waiting_for_response")
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                            className: "h-12 w-full rounded-full bg-slate-50/50"
                        })
                    ]
                })
            ]
        });
    }
    if (type === "tag") {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "group space-y-4 rounded-lg bg-white p-6",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex items-center space-x-4",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                            className: "h-12 w-12 flex-shrink-0 rounded-full bg-slate-100"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                            className: "h-6 w-full rounded-full bg-slate-100"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                            className: "h-12 w-full rounded-full bg-slate-100"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex h-12 w-full items-center justify-center rounded-full bg-slate-50 text-sm text-slate-500 hover:bg-slate-100",
                            children: [
                                !environment.appSetupCompleted && !noWidgetRequired && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    className: "flex h-full w-full items-center justify-center",
                                    href: `/environments/${environment.id}/project/app-connection`,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        className: "decoration-brand-dark underline transition-all duration-300 ease-in-out",
                                        children: [
                                            t("environments.surveys.summary.install_widget"),
                                            " ",
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("strong", {
                                                children: [
                                                    t("environments.surveys.summary.go_to_setup_checklist"),
                                                    " \uD83D\uDC49"
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                (environment.appSetupCompleted || noWidgetRequired) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                    className: "text-center",
                                    children: t("environments.project.tags.empty_message")
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                            className: "h-12 w-full rounded-full bg-slate-50/50"
                        })
                    ]
                })
            ]
        });
    }
    if (type === "summary") {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            className: "rounded-xl border border-slate-200 bg-white shadow-sm",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_modules_ui_components_skeleton__WEBPACK_IMPORTED_MODULE_1__/* .Skeleton */ .E, {
                className: "group space-y-4 rounded-lg bg-white p-6",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        className: "flex items-center space-x-4",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                            className: "h-6 w-full rounded-full bg-slate-100"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex gap-4",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                        className: "h-6 w-24 rounded-full bg-slate-100"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                        className: "h-6 w-24 rounded-full bg-slate-100"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                className: "flex h-12 w-full items-center justify-center rounded-full bg-slate-50 text-sm text-slate-500 hover:bg-slate-100"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                className: "h-12 w-full rounded-full bg-slate-50/50"
                            })
                        ]
                    })
                ]
            })
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "group space-y-4 rounded-lg bg-white p-6",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex items-center space-x-4",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        className: "h-12 w-12 flex-shrink-0 rounded-full bg-slate-100"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        className: "h-6 w-full rounded-full bg-slate-100"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        className: "h-12 w-full rounded-full bg-slate-100"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex h-12 w-full items-center justify-center rounded-full bg-slate-50 text-sm text-slate-500 hover:bg-slate-100",
                        children: [
                            !environment.appSetupCompleted && !noWidgetRequired && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                className: "flex h-full w-full items-center justify-center",
                                href: `/environments/${environment.id}/project/app-connection`,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                    className: "decoration-brand-dark underline transition-all duration-300 ease-in-out",
                                    children: [
                                        t("environments.surveys.summary.install_widget"),
                                        " ",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("strong", {
                                            children: [
                                                t("environments.surveys.summary.go_to_setup_checklist"),
                                                " \uD83D\uDC49"
                                            ]
                                        })
                                    ]
                                })
                            }),
                            (environment.appSetupCompleted || noWidgetRequired) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                className: "text-center",
                                children: t("environments.surveys.summary.waiting_for_response")
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        className: "h-12 w-full rounded-full bg-slate-50/50"
                    })
                ]
            })
        ]
    });
};


/***/ }),

/***/ 901979:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ SkeletonLoader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(642725);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_ui_components_skeleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(290205);


const SkeletonLoader = ({ type })=>{
    if (type === "summary") {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            className: "rounded-xl border border-slate-200 bg-white shadow-sm",
            "data-testid": "skeleton-loader-summary",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_modules_ui_components_skeleton__WEBPACK_IMPORTED_MODULE_1__/* .Skeleton */ .E, {
                className: "group space-y-4 rounded-xl bg-white p-6",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex gap-4",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                    className: "h-6 w-24 rounded-full bg-slate-200"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                    className: "h-6 w-24 rounded-full bg-slate-200"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                            className: "flex h-12 w-full items-center justify-center rounded-full bg-slate-200 text-sm text-slate-500"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                            className: "h-12 w-full rounded-full bg-slate-200"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                            className: "h-12 w-full rounded-full bg-slate-200"
                        })
                    ]
                })
            })
        });
    }
    if (type === "response") {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "group space-y-4 rounded-lg bg-white p-6",
            "data-testid": "skeleton-loader-response",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex items-center space-x-4",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_modules_ui_components_skeleton__WEBPACK_IMPORTED_MODULE_1__/* .Skeleton */ .E, {
                            className: "h-12 w-12 flex-shrink-0 rounded-full bg-slate-200"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_modules_ui_components_skeleton__WEBPACK_IMPORTED_MODULE_1__/* .Skeleton */ .E, {
                            className: "h-6 w-full rounded-full bg-slate-200"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_modules_ui_components_skeleton__WEBPACK_IMPORTED_MODULE_1__/* .Skeleton */ .E, {
                            className: "h-12 w-full rounded-full bg-slate-200"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_modules_ui_components_skeleton__WEBPACK_IMPORTED_MODULE_1__/* .Skeleton */ .E, {
                            className: "flex h-12 w-full items-center justify-center rounded-full bg-slate-200 text-sm text-slate-500"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_modules_ui_components_skeleton__WEBPACK_IMPORTED_MODULE_1__/* .Skeleton */ .E, {
                            className: "h-12 w-full rounded-full bg-slate-200"
                        })
                    ]
                })
            ]
        });
    }
};


/***/ }),

/***/ 688471:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SummaryPage: () => (/* binding */ SummaryPage)
/* harmony export */ });
/* harmony import */ var react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(672771);
/* harmony import */ var react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_0__);

const SummaryPage = (0,react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_0__.registerClientReference)(
function() { throw new Error("Attempted to call SummaryPage() from the server but SummaryPage is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component."); },
"/Users/kdy1/projects/formbricks/apps/web/app/(app)/environments/[environmentId]/surveys/[surveyId]/(analysis)/summary/components/SummaryPage.tsx",
"SummaryPage",
);

/***/ }),

/***/ 778305:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ insightCache)
/* harmony export */ });
/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(310256);
/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_cache__WEBPACK_IMPORTED_MODULE_0__);

const insightCache = {
    tag: {
        byId (id) {
            return `documentGroups-${id}`;
        },
        byEnvironmentId (environmentId) {
            return `environments-${environmentId}-documentGroups`;
        }
    },
    revalidate: ({ id, environmentId })=>{
        if (id) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(insightCache.tag.byId(id));
        }
        if (environmentId) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(insightCache.tag.byEnvironmentId(environmentId));
        }
    }
};


/***/ }),

/***/ 286678:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KX: () => (/* binding */ checkAIPermission),
/* harmony export */   Q: () => (/* binding */ generateInsightsForSurveyAction),
/* harmony export */   ob: () => (/* binding */ updateOrganizationAIEnabledAction)
/* harmony export */ });
/* harmony import */ var private_next_rsc_server_reference__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(286055);
/* harmony import */ var private_next_rsc_action_encryption__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(770767);
/* harmony import */ var private_next_rsc_action_encryption__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(private_next_rsc_action_encryption__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_api_internal_insights_lib_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(493814);
/* harmony import */ var _lib_utils_action_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(308046);
/* harmony import */ var _lib_utils_action_client_middleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(729455);
/* harmony import */ var _lib_utils_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(440388);
/* harmony import */ var _modules_ee_license_check_lib_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(725322);
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(283131);
/* harmony import */ var _formbricks_lib_organization_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(167440);
/* harmony import */ var _formbricks_types_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(552224);
/* harmony import */ var _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(207798);
/* harmony import */ var _formbricks_types_organizations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(320917);
/* harmony import */ var private_next_rsc_action_validate__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(429931);
/* __next_internal_action_entry_do_not_use__ {"7f1a8db8532decc855712a56923614c8aa0564feaf":"updateOrganizationAIEnabledAction","7f4c227702efe911eae0c01a4a44ef8478ad6b17b0":"generateInsightsForSurveyAction","7fcc8a3963874c1e4030b369bc2f12e37920af4136":"checkAIPermission"} */ 











const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ checkAIPermission = async (organizationId)=>{
    const organization = await (0,_formbricks_lib_organization_service__WEBPACK_IMPORTED_MODULE_6__/* .getOrganization */ .SA)(organizationId);
    if (!organization) {
        throw new Error("Organization not found");
    }
    const isAIEnabled = await (0,_modules_ee_license_check_lib_utils__WEBPACK_IMPORTED_MODULE_5__/* .getIsAIEnabled */ .KH)(organization);
    if (!isAIEnabled) {
        throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_7__/* .OperationNotAllowedError */ .J4("AI is not enabled for this organization");
    }
};
const ZGenerateInsightsForSurveyAction = zod__WEBPACK_IMPORTED_MODULE_8__.z.object({
    surveyId: _formbricks_types_common__WEBPACK_IMPORTED_MODULE_9__/* .ZId */ .i4
});
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ generateInsightsForSurveyAction = _lib_utils_action_client__WEBPACK_IMPORTED_MODULE_2__/* .authenticatedActionClient */ .D.schema(ZGenerateInsightsForSurveyAction).action(async ({ ctx, parsedInput })=>{
    const organizationId = await (0,_lib_utils_helper__WEBPACK_IMPORTED_MODULE_4__/* .getOrganizationIdFromSurveyId */ .a1)(parsedInput.surveyId);
    await (0,_lib_utils_action_client_middleware__WEBPACK_IMPORTED_MODULE_3__/* .checkAuthorizationUpdated */ .r)({
        userId: ctx.user.id,
        organizationId,
        access: [
            {
                type: "organization",
                schema: ZGenerateInsightsForSurveyAction,
                data: parsedInput,
                roles: [
                    "owner",
                    "manager"
                ]
            },
            {
                type: "projectTeam",
                projectId: await (0,_lib_utils_helper__WEBPACK_IMPORTED_MODULE_4__/* .getProjectIdFromSurveyId */ .Y)(parsedInput.surveyId),
                minPermission: "readWrite"
            }
        ]
    });
    await checkAIPermission(organizationId);
    (0,_app_api_internal_insights_lib_utils__WEBPACK_IMPORTED_MODULE_10__/* .generateInsightsForSurvey */ .Mv)(parsedInput.surveyId);
});
const ZUpdateOrganizationAIEnabledAction = zod__WEBPACK_IMPORTED_MODULE_8__.z.object({
    organizationId: _formbricks_types_common__WEBPACK_IMPORTED_MODULE_9__/* .ZId */ .i4,
    data: _formbricks_types_organizations__WEBPACK_IMPORTED_MODULE_11__/* .ZOrganizationUpdateInput */ .zJ.pick({
        isAIEnabled: true
    })
});
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ updateOrganizationAIEnabledAction = _lib_utils_action_client__WEBPACK_IMPORTED_MODULE_2__/* .authenticatedActionClient */ .D.schema(ZUpdateOrganizationAIEnabledAction).action(async ({ parsedInput, ctx })=>{
    const organizationId = parsedInput.organizationId;
    await (0,_lib_utils_action_client_middleware__WEBPACK_IMPORTED_MODULE_3__/* .checkAuthorizationUpdated */ .r)({
        userId: ctx.user.id,
        organizationId,
        access: [
            {
                type: "organization",
                schema: _formbricks_types_organizations__WEBPACK_IMPORTED_MODULE_11__/* .ZOrganizationUpdateInput */ .zJ.pick({
                    isAIEnabled: true
                }),
                data: parsedInput.data,
                roles: [
                    "owner",
                    "manager"
                ]
            }
        ]
    });
    const organization = await (0,_formbricks_lib_organization_service__WEBPACK_IMPORTED_MODULE_6__/* .getOrganization */ .SA)(organizationId);
    if (!organization) {
        throw new Error("Organization not found");
    }
    const isOrganizationAIReady = await (0,_modules_ee_license_check_lib_utils__WEBPACK_IMPORTED_MODULE_5__/* .getIsOrganizationAIReady */ .PN)(organization.billing.plan);
    if (!isOrganizationAIReady) {
        throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_7__/* .OperationNotAllowedError */ .J4("AI is not ready for this organization");
    }
    return await (0,_formbricks_lib_organization_service__WEBPACK_IMPORTED_MODULE_6__/* .updateOrganization */ .L_)(parsedInput.organizationId, parsedInput.data);
});

(0,private_next_rsc_action_validate__WEBPACK_IMPORTED_MODULE_12__/* .ensureServerEntryExports */ .D)([
    checkAIPermission,
    generateInsightsForSurveyAction,
    updateOrganizationAIEnabledAction
]);
(0,private_next_rsc_server_reference__WEBPACK_IMPORTED_MODULE_0__/* .registerServerReference */ .A)(checkAIPermission, "7fcc8a3963874c1e4030b369bc2f12e37920af4136", null);
(0,private_next_rsc_server_reference__WEBPACK_IMPORTED_MODULE_0__/* .registerServerReference */ .A)(generateInsightsForSurveyAction, "7f4c227702efe911eae0c01a4a44ef8478ad6b17b0", null);
(0,private_next_rsc_server_reference__WEBPACK_IMPORTED_MODULE_0__/* .registerServerReference */ .A)(updateOrganizationAIEnabledAction, "7f1a8db8532decc855712a56923614c8aa0564feaf", null);


/***/ }),

/***/ 635740:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Rg: () => (/* binding */ getDocumentsByInsightIdAction),
  ln: () => (/* binding */ getDocumentsByInsightIdSurveyIdQuestionIdAction),
  lJ: () => (/* binding */ updateDocumentAction)
});

// EXTERNAL MODULE: ../../node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js
var server_reference = __webpack_require__(286055);
// EXTERNAL MODULE: ../../node_modules/next/dist/server/app-render/encryption.js
var encryption = __webpack_require__(770767);
// EXTERNAL MODULE: ./lib/utils/action-client.ts
var action_client = __webpack_require__(308046);
// EXTERNAL MODULE: ./lib/utils/action-client-middleware.ts
var action_client_middleware = __webpack_require__(729455);
// EXTERNAL MODULE: ./lib/utils/helper.ts
var helper = __webpack_require__(440388);
// EXTERNAL MODULE: ./modules/ee/insights/actions.ts
var actions = __webpack_require__(286678);
// EXTERNAL MODULE: ./lib/cache/document.ts
var cache_document = __webpack_require__(729468);
// EXTERNAL MODULE: ./lib/cache/insight.ts
var insight = __webpack_require__(778305);
// EXTERNAL MODULE: external "@prisma/client"
var client_ = __webpack_require__(896330);
// EXTERNAL MODULE: ../../node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js
var react = __webpack_require__(645625);
// EXTERNAL MODULE: ../../node_modules/zod/lib/index.mjs
var lib = __webpack_require__(283131);
// EXTERNAL MODULE: ../../packages/database/src/index.ts + 1 modules
var src = __webpack_require__(482859);
// EXTERNAL MODULE: ../../packages/lib/cache.ts
var cache = __webpack_require__(48165);
// EXTERNAL MODULE: ../../packages/lib/constants.ts
var constants = __webpack_require__(711344);
// EXTERNAL MODULE: ../../packages/lib/utils/validate.ts
var validate = __webpack_require__(472749);
// EXTERNAL MODULE: ../../packages/types/common.ts
var common = __webpack_require__(552224);
// EXTERNAL MODULE: ../../packages/database/zod/insights.ts
var insights = __webpack_require__(354024);
// EXTERNAL MODULE: ../../packages/types/surveys/types.ts + 3 modules
var types = __webpack_require__(797175);
;// ../../packages/types/documents.ts




const ZDocumentSentiment = lib.z.enum([
    "positive",
    "negative",
    "neutral"
]);
const ZDocument = lib.z.object({
    id: common/* ZId */.i4,
    createdAt: lib.z.date(),
    updatedAt: lib.z.date(),
    environmentId: common/* ZId */.i4,
    responseId: common/* ZId */.i4.nullable(),
    questionId: types/* ZSurveyQuestionId */.uD.nullable(),
    sentiment: ZDocumentSentiment,
    text: lib.z.string()
});
const ZDocumentCreateInput = lib.z.object({
    environmentId: common/* ZId */.i4,
    surveyId: common/* ZId */.i4,
    responseId: common/* ZId */.i4,
    questionId: types/* ZSurveyQuestionId */.uD,
    text: lib.z.string()
});
const ZDocumentFilterCriteria = lib.z.object({
    createdAt: lib.z.object({
        min: lib.z.date().optional(),
        max: lib.z.date().optional()
    }).optional()
});
const ZGenerateDocumentObjectSchema = lib.z.object({
    sentiment: ZDocumentSentiment,
    insights: lib.z.array(lib.z.object({
        title: lib.z.string().describe("insight title, very specific"),
        description: lib.z.string().describe("very brief insight description"),
        category: insights/* ZInsight */.x.shape.category
    })),
    isSpam: lib.z.boolean()
});

// EXTERNAL MODULE: ../../packages/types/errors.ts
var errors = __webpack_require__(207798);
;// ./modules/ee/insights/components/insight-sheet/lib/documents.ts













const getDocumentsByInsightId = (0,react.cache)(async (insightId, limit, offset, filterCriteria)=>(0,cache/* cache */.P)(async ()=>{
        (0,validate/* validateInputs */.C)([
            insightId,
            common/* ZId */.i4
        ], [
            limit,
            lib.z.number().optional()
        ], [
            offset,
            lib.z.number().optional()
        ], [
            filterCriteria,
            ZDocumentFilterCriteria.optional()
        ]);
        limit = limit ?? constants/* DOCUMENTS_PER_PAGE */.VC;
        try {
            const documents = await src/* prisma */.z.document.findMany({
                where: {
                    documentInsights: {
                        some: {
                            insightId
                        }
                    },
                    createdAt: {
                        gte: filterCriteria?.createdAt?.min,
                        lte: filterCriteria?.createdAt?.max
                    }
                },
                orderBy: [
                    {
                        createdAt: "desc"
                    }
                ],
                take: limit ? limit : undefined,
                skip: offset ? offset : undefined
            });
            return documents;
        } catch (error) {
            if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
                throw new errors/* DatabaseError */.a$(error.message);
            }
            throw error;
        }
    }, [
        `getDocumentsByInsightId-${insightId}-${limit}-${offset}`
    ], {
        tags: [
            cache_document/* documentCache */.O.tag.byInsightId(insightId),
            insight/* insightCache */.j.tag.byId(insightId)
        ]
    })());
const getDocumentsByInsightIdSurveyIdQuestionId = (0,react.cache)(async (insightId, surveyId, questionId, limit, offset)=>(0,cache/* cache */.P)(async ()=>{
        (0,validate/* validateInputs */.C)([
            insightId,
            common/* ZId */.i4
        ], [
            surveyId,
            common/* ZId */.i4
        ], [
            questionId,
            types/* ZSurveyQuestionId */.uD
        ], [
            limit,
            lib.z.number().optional()
        ], [
            offset,
            lib.z.number().optional()
        ]);
        limit = limit ?? constants/* DOCUMENTS_PER_PAGE */.VC;
        try {
            const documents = await src/* prisma */.z.document.findMany({
                where: {
                    questionId,
                    surveyId,
                    documentInsights: {
                        some: {
                            insightId
                        }
                    }
                },
                orderBy: [
                    {
                        createdAt: "desc"
                    }
                ],
                take: limit ? limit : undefined,
                skip: offset ? offset : undefined
            });
            return documents;
        } catch (error) {
            if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
                throw new errors/* DatabaseError */.a$(error.message);
            }
            throw error;
        }
    }, [
        `getDocumentsByInsightIdSurveyIdQuestionId-${insightId}-${surveyId}-${questionId}-${limit}-${offset}`
    ], {
        tags: [
            cache_document/* documentCache */.O.tag.byInsightIdSurveyIdQuestionId(insightId, surveyId, questionId),
            cache_document/* documentCache */.O.tag.byInsightId(insightId),
            insight/* insightCache */.j.tag.byId(insightId)
        ]
    })());
const getDocument = (0,react.cache)(async (documentId)=>(0,cache/* cache */.P)(async ()=>{
        (0,validate/* validateInputs */.C)([
            documentId,
            common/* ZId */.i4
        ]);
        try {
            const document = await src/* prisma */.z.document.findUnique({
                where: {
                    id: documentId
                }
            });
            return document;
        } catch (error) {
            if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
                throw new errors/* DatabaseError */.a$(error.message);
            }
            throw error;
        }
    }, [
        `getDocumentById-${documentId}`
    ], {
        tags: [
            cache_document/* documentCache */.O.tag.byId(documentId)
        ]
    })());
const updateDocument = async (documentId, data)=>{
    (0,validate/* validateInputs */.C)([
        documentId,
        common/* ZId */.i4
    ], [
        data,
        ZDocument.partial()
    ]);
    try {
        const updatedDocument = await src/* prisma */.z.document.update({
            where: {
                id: documentId
            },
            data,
            select: {
                environmentId: true,
                documentInsights: {
                    select: {
                        insightId: true
                    }
                }
            }
        });
        cache_document/* documentCache */.O.revalidate({
            environmentId: updatedDocument.environmentId
        });
        for (const { insightId } of updatedDocument.documentInsights){
            cache_document/* documentCache */.O.revalidate({
                insightId
            });
        }
    } catch (error) {
        if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
            throw new errors/* DatabaseError */.a$(error.message);
        }
        throw error;
    }
};

// EXTERNAL MODULE: ../../node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js
var action_validate = __webpack_require__(429931);
;// ./modules/ee/insights/components/insight-sheet/actions.ts
/* __next_internal_action_entry_do_not_use__ {"7f7479bf15667eb2a17de498042aaa59cdf4dd16d9":"getDocumentsByInsightIdAction","7f8586576a8648fc28cad6387c8e0c6a6779a9fc79":"updateDocumentAction","7fb20df224da70402e4cd960f7c456b9ef5af99ab8":"getDocumentsByInsightIdSurveyIdQuestionIdAction"} */ 











const ZGetDocumentsByInsightIdSurveyIdQuestionIdAction = lib.z.object({
    insightId: common/* ZId */.i4,
    surveyId: common/* ZId */.i4,
    questionId: types/* ZSurveyQuestionId */.uD,
    limit: lib.z.number().optional(),
    offset: lib.z.number().optional()
});
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getDocumentsByInsightIdSurveyIdQuestionIdAction = action_client/* authenticatedActionClient */.D.schema(ZGetDocumentsByInsightIdSurveyIdQuestionIdAction).action(async ({ ctx, parsedInput })=>{
    const insightEnvironmentId = await (0,helper/* getEnvironmentIdFromInsightId */.EI)(parsedInput.insightId);
    const surveyEnvironmentId = await (0,helper/* getEnvironmentIdFromSurveyId */.cE)(parsedInput.surveyId);
    if (insightEnvironmentId !== surveyEnvironmentId) {
        throw new Error("Insight and survey are not in the same environment");
    }
    const organizationId = await (0,helper/* getOrganizationIdFromEnvironmentId */.X_)(surveyEnvironmentId);
    await (0,action_client_middleware/* checkAuthorizationUpdated */.r)({
        userId: ctx.user.id,
        organizationId,
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
                projectId: await (0,helper/* getProjectIdFromEnvironmentId */.DU)(surveyEnvironmentId)
            }
        ]
    });
    await (0,actions/* checkAIPermission */.KX)(organizationId);
    return await getDocumentsByInsightIdSurveyIdQuestionId(parsedInput.insightId, parsedInput.surveyId, parsedInput.questionId, parsedInput.limit, parsedInput.offset);
});
const ZGetDocumentsByInsightIdAction = lib.z.object({
    insightId: common/* ZId */.i4,
    limit: lib.z.number().optional(),
    offset: lib.z.number().optional(),
    filterCriteria: ZDocumentFilterCriteria.optional()
});
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getDocumentsByInsightIdAction = action_client/* authenticatedActionClient */.D.schema(ZGetDocumentsByInsightIdAction).action(async ({ ctx, parsedInput })=>{
    const organizationId = await (0,helper/* getOrganizationIdFromInsightId */.gQ)(parsedInput.insightId);
    await (0,action_client_middleware/* checkAuthorizationUpdated */.r)({
        userId: ctx.user.id,
        organizationId,
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
                projectId: await (0,helper/* getProjectIdFromInsightId */.Mm)(parsedInput.insightId)
            }
        ]
    });
    await (0,actions/* checkAIPermission */.KX)(organizationId);
    return await getDocumentsByInsightId(parsedInput.insightId, parsedInput.limit, parsedInput.offset, parsedInput.filterCriteria);
});
const ZUpdateDocumentAction = lib.z.object({
    documentId: common/* ZId */.i4,
    data: lib.z.object({
        sentiment: lib.z.enum([
            "positive",
            "negative",
            "neutral"
        ]).optional()
    }).strict()
});
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ updateDocumentAction = action_client/* authenticatedActionClient */.D.schema(ZUpdateDocumentAction).action(async ({ ctx, parsedInput })=>{
    const organizationId = await (0,helper/* getOrganizationIdFromDocumentId */.pA)(parsedInput.documentId);
    await (0,action_client_middleware/* checkAuthorizationUpdated */.r)({
        userId: ctx.user.id,
        organizationId,
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
                projectId: await (0,helper/* getProjectIdFromDocumentId */.RM)(parsedInput.documentId)
            }
        ]
    });
    await (0,actions/* checkAIPermission */.KX)(organizationId);
    return await updateDocument(parsedInput.documentId, parsedInput.data);
});

(0,action_validate/* ensureServerEntryExports */.D)([
    getDocumentsByInsightIdSurveyIdQuestionIdAction,
    getDocumentsByInsightIdAction,
    updateDocumentAction
]);
(0,server_reference/* registerServerReference */.A)(getDocumentsByInsightIdSurveyIdQuestionIdAction, "7fb20df224da70402e4cd960f7c456b9ef5af99ab8", null);
(0,server_reference/* registerServerReference */.A)(getDocumentsByInsightIdAction, "7f7479bf15667eb2a17de498042aaa59cdf4dd16d9", null);
(0,server_reference/* registerServerReference */.A)(updateDocumentAction, "7f8586576a8648fc28cad6387c8e0c6a6779a9fc79", null);


/***/ }),

/***/ 573997:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  rA: () => (/* binding */ getEnvironmentInsightsAction),
  cr: () => (/* binding */ getStatsAction),
  _Z: () => (/* binding */ updateInsightAction)
});

// EXTERNAL MODULE: ../../node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js
var server_reference = __webpack_require__(286055);
// EXTERNAL MODULE: ../../node_modules/next/dist/server/app-render/encryption.js
var encryption = __webpack_require__(770767);
// EXTERNAL MODULE: ./lib/utils/action-client.ts
var action_client = __webpack_require__(308046);
// EXTERNAL MODULE: ./lib/utils/action-client-middleware.ts
var action_client_middleware = __webpack_require__(729455);
// EXTERNAL MODULE: ./lib/utils/helper.ts
var helper = __webpack_require__(440388);
// EXTERNAL MODULE: ./modules/ee/insights/actions.ts
var actions = __webpack_require__(286678);
// EXTERNAL MODULE: ../../node_modules/zod/lib/index.mjs
var lib = __webpack_require__(283131);
// EXTERNAL MODULE: ../../packages/database/zod/insights.ts
var insights = __webpack_require__(354024);
;// ./modules/ee/insights/experience/types/insights.ts


const ZInsightFilterCriteria = lib.z.object({
    documentCreatedAt: lib.z.object({
        min: lib.z.date().optional(),
        max: lib.z.date().optional()
    }).optional(),
    category: insights/* ZInsight */.x.shape.category.optional()
});

// EXTERNAL MODULE: ../../packages/types/common.ts
var common = __webpack_require__(552224);
// EXTERNAL MODULE: ./lib/cache/insight.ts
var insight = __webpack_require__(778305);
// EXTERNAL MODULE: external "@prisma/client"
var client_ = __webpack_require__(896330);
// EXTERNAL MODULE: ../../node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js
var react = __webpack_require__(645625);
// EXTERNAL MODULE: ../../packages/database/src/index.ts + 1 modules
var src = __webpack_require__(482859);
// EXTERNAL MODULE: ../../packages/lib/cache.ts
var cache = __webpack_require__(48165);
// EXTERNAL MODULE: ../../packages/lib/constants.ts
var constants = __webpack_require__(711344);
// EXTERNAL MODULE: ../../packages/lib/response/cache.ts
var response_cache = __webpack_require__(813255);
// EXTERNAL MODULE: ../../packages/lib/utils/validate.ts
var validate = __webpack_require__(472749);
// EXTERNAL MODULE: ../../packages/types/errors.ts
var errors = __webpack_require__(207798);
;// ./modules/ee/insights/experience/lib/insights.ts











const getInsights = (0,react.cache)(async (environmentId, limit, offset, filterCriteria)=>(0,cache/* cache */.P)(async ()=>{
        (0,validate/* validateInputs */.C)([
            environmentId,
            common/* ZId */.i4
        ], [
            limit,
            common/* ZOptionalNumber */.Wo
        ], [
            offset,
            common/* ZOptionalNumber */.Wo
        ], [
            filterCriteria,
            ZInsightFilterCriteria.optional()
        ]);
        limit = limit ?? constants/* INSIGHTS_PER_PAGE */.Uu;
        try {
            const insights = await src/* prisma */.z.insight.findMany({
                where: {
                    environmentId,
                    documentInsights: {
                        some: {
                            document: {
                                createdAt: {
                                    gte: filterCriteria?.documentCreatedAt?.min,
                                    lte: filterCriteria?.documentCreatedAt?.max
                                }
                            }
                        }
                    },
                    category: filterCriteria?.category
                },
                include: {
                    _count: {
                        select: {
                            documentInsights: {
                                where: {
                                    document: {
                                        createdAt: {
                                            gte: filterCriteria?.documentCreatedAt?.min,
                                            lte: filterCriteria?.documentCreatedAt?.max
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                orderBy: [
                    {
                        createdAt: "desc"
                    }
                ],
                take: limit ? limit : undefined,
                skip: offset ? offset : undefined
            });
            return insights;
        } catch (error) {
            if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
                throw new errors/* DatabaseError */.a$(error.message);
            }
            throw error;
        }
    }, [
        `experience-getInsights-${environmentId}-${limit}-${offset}-${JSON.stringify(filterCriteria)}`
    ], {
        tags: [
            insight/* insightCache */.j.tag.byEnvironmentId(environmentId)
        ]
    })());
const updateInsight = async (insightId, updates)=>{
    try {
        const updatedInsight = await src/* prisma */.z.insight.update({
            where: {
                id: insightId
            },
            data: updates,
            select: {
                environmentId: true,
                documentInsights: {
                    select: {
                        document: {
                            select: {
                                surveyId: true
                            }
                        }
                    }
                }
            }
        });
        const uniqueSurveyIds = Array.from(new Set(updatedInsight.documentInsights.map((di)=>di.document.surveyId)));
        insight/* insightCache */.j.revalidate({
            id: insightId,
            environmentId: updatedInsight.environmentId
        });
        for (const surveyId of uniqueSurveyIds){
            if (surveyId) {
                response_cache/* responseCache */.Q.revalidate({
                    surveyId
                });
            }
        }
    } catch (error) {
        console.error("Error in updateInsight:", error);
        if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
            throw new errors/* DatabaseError */.a$(error.message);
        }
        throw error;
    }
};

// EXTERNAL MODULE: ./lib/cache/document.ts
var cache_document = __webpack_require__(729468);
;// ./modules/ee/insights/experience/lib/stats.ts










const getStats = (0,react.cache)(async (environmentId, statsFrom)=>(0,cache/* cache */.P)(async ()=>{
        (0,validate/* validateInputs */.C)([
            environmentId,
            common/* ZId */.i4
        ]);
        try {
            const groupedResponesPromise = src/* prisma */.z.response.groupBy({
                by: [
                    "surveyId"
                ],
                _count: {
                    surveyId: true
                },
                where: {
                    survey: {
                        environmentId
                    },
                    createdAt: {
                        gte: statsFrom
                    }
                }
            });
            const groupedSentimentsPromise = src/* prisma */.z.document.groupBy({
                by: [
                    "sentiment"
                ],
                _count: {
                    sentiment: true
                },
                where: {
                    environmentId,
                    createdAt: {
                        gte: statsFrom
                    }
                }
            });
            const [groupedRespones, groupedSentiments] = await Promise.all([
                groupedResponesPromise,
                groupedSentimentsPromise
            ]);
            const activeSurveys = groupedRespones.length;
            const newResponses = groupedRespones.reduce((acc, { _count })=>acc + _count.surveyId, 0);
            const sentimentCounts = groupedSentiments.reduce((acc, { sentiment, _count })=>{
                acc[sentiment] = _count.sentiment;
                return acc;
            }, {
                positive: 0,
                negative: 0,
                neutral: 0
            });
            // analysed feedbacks is the sum of all the sentiments
            const analysedFeedbacks = Object.values(sentimentCounts).reduce((acc, count)=>acc + count, 0);
            // the sentiment score is the ratio of positive to total (positive + negative) sentiment counts. For this we ignore neutral sentiment counts.
            let sentimentScore = 0, overallSentiment;
            if (sentimentCounts.positive || sentimentCounts.negative) {
                sentimentScore = sentimentCounts.positive / (sentimentCounts.positive + sentimentCounts.negative);
                overallSentiment = sentimentScore > 0.5 ? "positive" : sentimentScore < 0.5 ? "negative" : "neutral";
            }
            return {
                newResponses,
                activeSurveys,
                analysedFeedbacks,
                sentimentScore,
                overallSentiment
            };
        } catch (error) {
            if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
                console.error(error);
                throw new errors/* DatabaseError */.a$(error.message);
            }
            throw error;
        }
    }, [
        `stats-${environmentId}-${statsFrom?.toDateString()}`
    ], {
        tags: [
            response_cache/* responseCache */.Q.tag.byEnvironmentId(environmentId),
            cache_document/* documentCache */.O.tag.byEnvironmentId(environmentId)
        ]
    })());

// EXTERNAL MODULE: ../../node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js
var action_validate = __webpack_require__(429931);
;// ./modules/ee/insights/experience/actions.ts
/* __next_internal_action_entry_do_not_use__ {"7f2b1f00f63d33592241a96ff880e6fd9caf93c8fe":"getEnvironmentInsightsAction","7f97e78e2c9927368da28e3de4f4443f259d3508be":"getStatsAction","7fb6d730bd2b6727e3fc5da067f043e2a9f372c43a":"updateInsightAction"} */ 











const ZGetEnvironmentInsightsAction = lib.z.object({
    environmentId: common/* ZId */.i4,
    limit: lib.z.number().optional(),
    offset: lib.z.number().optional(),
    insightsFilter: ZInsightFilterCriteria.optional()
});
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getEnvironmentInsightsAction = action_client/* authenticatedActionClient */.D.schema(ZGetEnvironmentInsightsAction).action(async ({ ctx, parsedInput })=>{
    const organizationId = await (0,helper/* getOrganizationIdFromEnvironmentId */.X_)(parsedInput.environmentId);
    await (0,action_client_middleware/* checkAuthorizationUpdated */.r)({
        userId: ctx.user.id,
        organizationId,
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
                projectId: await (0,helper/* getProjectIdFromEnvironmentId */.DU)(parsedInput.environmentId)
            }
        ]
    });
    await (0,actions/* checkAIPermission */.KX)(organizationId);
    return await getInsights(parsedInput.environmentId, parsedInput.limit, parsedInput.offset, parsedInput.insightsFilter);
});
const ZGetStatsAction = lib.z.object({
    environmentId: common/* ZId */.i4,
    statsFrom: lib.z.date().optional()
});
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getStatsAction = action_client/* authenticatedActionClient */.D.schema(ZGetStatsAction).action(async ({ ctx, parsedInput })=>{
    const organizationId = await (0,helper/* getOrganizationIdFromEnvironmentId */.X_)(parsedInput.environmentId);
    await (0,action_client_middleware/* checkAuthorizationUpdated */.r)({
        userId: ctx.user.id,
        organizationId,
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
                projectId: await (0,helper/* getProjectIdFromEnvironmentId */.DU)(parsedInput.environmentId)
            }
        ]
    });
    await (0,actions/* checkAIPermission */.KX)(organizationId);
    return await getStats(parsedInput.environmentId, parsedInput.statsFrom);
});
const ZUpdateInsightAction = lib.z.object({
    insightId: common/* ZId */.i4,
    data: insights/* ZInsight */.x.partial()
});
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ updateInsightAction = action_client/* authenticatedActionClient */.D.schema(ZUpdateInsightAction).action(async ({ ctx, parsedInput })=>{
    try {
        const organizationId = await (0,helper/* getOrganizationIdFromInsightId */.gQ)(parsedInput.insightId);
        await (0,action_client_middleware/* checkAuthorizationUpdated */.r)({
            userId: ctx.user.id,
            organizationId,
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
                    projectId: await (0,helper/* getProjectIdFromInsightId */.Mm)(parsedInput.insightId),
                    minPermission: "readWrite"
                }
            ]
        });
        await (0,actions/* checkAIPermission */.KX)(organizationId);
        return await updateInsight(parsedInput.insightId, parsedInput.data);
    } catch (error) {
        console.error("Error updating insight:", {
            insightId: parsedInput.insightId,
            error
        });
        if (error instanceof Error) {
            throw new Error(`Failed to update insight: ${error.message}`);
        }
        throw new Error("An unexpected error occurred while updating the insight");
    }
});

(0,action_validate/* ensureServerEntryExports */.D)([
    getEnvironmentInsightsAction,
    getStatsAction,
    updateInsightAction
]);
(0,server_reference/* registerServerReference */.A)(getEnvironmentInsightsAction, "7f2b1f00f63d33592241a96ff880e6fd9caf93c8fe", null);
(0,server_reference/* registerServerReference */.A)(getStatsAction, "7f97e78e2c9927368da28e3de4f4443f259d3508be", null);
(0,server_reference/* registerServerReference */.A)(updateInsightAction, "7fb6d730bd2b6727e3fc5da067f043e2a9f372c43a", null);


/***/ })

};
;