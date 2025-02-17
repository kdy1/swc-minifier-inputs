"use strict";
exports.id = 5317;
exports.ids = [5317];
exports.modules = {

/***/ 657079:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  TemplateList: () => (/* binding */ TemplateList)
});

// EXTERNAL MODULE: ../../node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js
var react_jsx_runtime = __webpack_require__(642725);
// EXTERNAL MODULE: ./app/lib/templates.ts
var templates = __webpack_require__(893902);
// EXTERNAL MODULE: ./lib/utils/helper.ts
var helper = __webpack_require__(856763);
// EXTERNAL MODULE: ../../node_modules/@tolgee/react/dist/tolgee-react.esm.js
var tolgee_react_esm = __webpack_require__(397674);
// EXTERNAL MODULE: ../../node_modules/next/dist/api/navigation.js
var navigation = __webpack_require__(470207);
// EXTERNAL MODULE: ../../node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js
var react = __webpack_require__(891616);
// EXTERNAL MODULE: ../../node_modules/react-hot-toast/dist/index.mjs + 1 modules
var dist = __webpack_require__(986090);
// EXTERNAL MODULE: ../../packages/types/project.ts + 1 modules
var types_project = __webpack_require__(19059);
// EXTERNAL MODULE: ../../node_modules/zod/lib/index.mjs
var lib = __webpack_require__(99922);
// EXTERNAL MODULE: ../../packages/types/surveys/types.ts + 3 modules
var types = __webpack_require__(102379);
// EXTERNAL MODULE: ../../packages/types/user.ts
var user = __webpack_require__(959777);
;// ../../packages/types/templates.ts




const ZTemplateRole = lib.z.enum([
    "productManager",
    "customerSuccess",
    "marketing",
    "sales",
    "peopleManager"
]);
const ZTemplate = lib.z.object({
    name: lib.z.string(),
    description: lib.z.string(),
    icon: lib.z.any().optional(),
    role: ZTemplateRole.optional(),
    channels: lib.z.array(lib.z.enum([
        "link",
        "app",
        "website"
    ])).optional(),
    industries: lib.z.array(lib.z.enum([
        "eCommerce",
        "saas",
        "other"
    ])).optional(),
    objectives: lib.z.array(user/* ZUserObjective */.b5).optional(),
    preset: lib.z.object({
        name: lib.z.string(),
        welcomeCard: types/* ZSurveyWelcomeCard */.zw,
        questions: types/* ZSurveyQuestions */.CA,
        endings: types/* ZSurveyEndings */.ZE,
        hiddenFields: types/* ZSurveyHiddenFields */.uv
    })
});
const ZXMTemplate = lib.z.object({
    name: lib.z.string(),
    questions: types/* ZSurveyQuestions */.CA,
    endings: types/* ZSurveyEndings */.ZE,
    styling: types/* ZSurveyStyling */.Ls
});
const ZTemplateFilter = lib.z.union([
    types_project/* ZProjectConfigChannel */.Rz,
    types_project/* ZProjectConfigIndustry */.Y,
    ZTemplateRole,
    lib.z.null()
]);

// EXTERNAL MODULE: ../../node_modules/next/dist/build/webpack/loaders/next-flight-server-reference-proxy-loader.js?id=7ff20090763891981ab1625ad83b771c8ef93748aa&name=createSurveyAction!
var next_flight_server_reference_proxy_loaderid_7ff20090763891981ab1625ad83b771c8ef93748aa_name_createSurveyAction_ = __webpack_require__(182711);
// EXTERNAL MODULE: ./modules/ui/components/button/index.tsx
var components_button = __webpack_require__(248852);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/circle-plus.js
var circle_plus = __webpack_require__(401633);
// EXTERNAL MODULE: ../../packages/lib/cn.ts
var cn = __webpack_require__(983773);
// EXTERNAL MODULE: ../../packages/lib/i18n/utils.ts
var utils = __webpack_require__(864698);
// EXTERNAL MODULE: ../../packages/lib/pollyfills/structuredClone.ts
var structuredClone = __webpack_require__(300189);
;// ./modules/surveys/components/TemplateList/lib/utils.ts


const replaceQuestionPresetPlaceholders = (question, project)=>{
    if (!project) return question;
    const newQuestion = (0,structuredClone/* structuredClone */.p)(question);
    const defaultLanguageCode = "default";
    if (newQuestion.headline) {
        newQuestion.headline[defaultLanguageCode] = (0,utils/* getLocalizedValue */.bT)(newQuestion.headline, defaultLanguageCode).replace("$[projectName]", project.name);
    }
    if (newQuestion.subheader) {
        newQuestion.subheader[defaultLanguageCode] = (0,utils/* getLocalizedValue */.bT)(newQuestion.subheader, defaultLanguageCode)?.replace("$[projectName]", project.name);
    }
    return newQuestion;
};
// replace all occurences of projectName with the actual project name in the current template
const replacePresetPlaceholders = (template, project)=>{
    const preset = (0,structuredClone/* structuredClone */.p)(template.preset);
    preset.name = preset.name.replace("$[projectName]", project.name);
    preset.questions = preset.questions.map((question)=>{
        return replaceQuestionPresetPlaceholders(question, project);
    });
    return {
        ...template,
        preset
    };
};
const getChannelMapping = (t)=>[
        {
            value: "website",
            label: t("common.website_survey")
        },
        {
            value: "app",
            label: t("common.app_survey")
        },
        {
            value: "link",
            label: t("common.link_survey")
        }
    ];
const getIndustryMapping = (t)=>[
        {
            value: "eCommerce",
            label: t("common.e_commerce")
        },
        {
            value: "saas",
            label: t("common.saas")
        },
        {
            value: "other",
            label: t("common.other")
        }
    ];
const getRoleMapping = (t)=>[
        {
            value: "productManager",
            label: t("common.product_manager")
        },
        {
            value: "customerSuccess",
            label: t("common.customer_success")
        },
        {
            value: "marketing",
            label: t("common.marketing")
        },
        {
            value: "sales",
            label: t("common.sales")
        },
        {
            value: "peopleManager",
            label: t("common.people_manager")
        }
    ];

;// ./modules/surveys/components/TemplateList/components/StartFromScratchTemplate.tsx
/* __next_internal_client_entry_do_not_use__ StartFromScratchTemplate auto */ 






const StartFromScratchTemplate = ({ activeTemplate, setActiveTemplate, onTemplateClick, project, createSurvey, loading, noPreview })=>{
    const { t } = (0,tolgee_react_esm/* useTranslate */.WD)();
    const customSurvey = (0,templates/* customSurveyTemplate */.C3)(t);
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
        onClick: ()=>{
            if (noPreview) {
                createSurvey(customSurvey);
                return;
            }
            const newTemplate = replacePresetPlaceholders(customSurvey, project);
            onTemplateClick(newTemplate);
            setActiveTemplate(newTemplate);
        },
        className: (0,cn.cn)(activeTemplate?.name === customSurvey.name ? "ring-brand-dark border-transparent ring-2" : "hover:border-brand-dark border-dashed border-slate-300", "duration-120 group relative rounded-lg border-2 bg-transparent p-6 transition-colors duration-150"),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(circle_plus/* default */.A, {
                className: "text-brand-dark h-8 w-8 transition-all duration-150 group-hover:scale-110"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("h3", {
                className: "text-md mb-1 mt-3 text-left font-bold text-slate-700",
                children: customSurvey.name
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                className: "text-left text-xs text-slate-600",
                children: customSurvey.description
            }),
            activeTemplate?.name === customSurvey.name && /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                className: "text-left",
                children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_button/* Button */.$, {
                    className: "mt-6 px-6 py-3",
                    disabled: activeTemplate === null,
                    loading: loading,
                    onClick: ()=>createSurvey(activeTemplate),
                    children: t("common.create_survey")
                })
            })
        ]
    });
};

// EXTERNAL MODULE: ./modules/ui/components/tooltip/index.tsx
var tooltip = __webpack_require__(163701);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/split.js
var split = __webpack_require__(111678);
;// ./modules/surveys/components/TemplateList/components/TemplateTags.tsx
/* __next_internal_client_entry_do_not_use__ TemplateTags auto */ 






const getRoleBasedStyling = (role)=>{
    switch(role){
        case "productManager":
            return "border-blue-300 bg-blue-50 text-blue-500";
        case "marketing":
            return "border-orange-300 bg-orange-50 text-orange-500";
        case "sales":
            return "border-emerald-300 bg-emerald-50 text-emerald-500";
        case "customerSuccess":
            return "border-violet-300 bg-violet-50 text-violet-500";
        case "peopleManager":
            return "border-pink-300 bg-pink-50 text-pink-500";
        default:
            return "border-slate-300 bg-slate-50 text-slate-500";
    }
};
const getChannelTag = (channels, t)=>{
    if (!channels) return undefined;
    const getLabel = (channelValue)=>getChannelMapping(t).find((channel)=>channel.value === channelValue)?.label;
    const labels = channels.map((channel)=>{
        const label = getLabel(channel);
        if (label) return t(label);
        return undefined;
    }).sort();
    const removeSurveySuffix = (label)=>label?.replace(" Survey", "");
    switch(channels.length){
        case 1:
            return labels[0];
        case 2:
            // Return labels for two channels concatenated with "or", removing "Survey"
            return labels.map(removeSurveySuffix).join(" " + t("common.or") + " ");
        case 3:
            return t("environments.surveys.templates.all_channels");
        default:
            return undefined;
    }
};
const TemplateTags = ({ template, selectedFilter })=>{
    const { t } = (0,tolgee_react_esm/* useTranslate */.WD)();
    const roleBasedStyling = (0,react.useMemo)(()=>getRoleBasedStyling(template.role), [
        template.role
    ]);
    const roleTag = (0,react.useMemo)(()=>getRoleMapping(t).find((roleMap)=>roleMap.value === template.role)?.label, [
        template.role
    ]);
    const channelTag = (0,react.useMemo)(()=>getChannelTag(template.channels, t), [
        template.channels
    ]);
    const getIndustryTag = (industries)=>{
        // if user selects an industry e.g. eCommerce than the tag should not say "Multiple industries" anymore but "E-Commerce".
        if (selectedFilter[1] !== null) {
            const industry = getIndustryMapping(t).find((industry)=>industry.value === selectedFilter[1]);
            if (industry) return t(industry.label);
        }
        if (!industries || industries.length === 0) return undefined;
        return industries.length > 1 ? t("environments.surveys.templates.multiple_industries") : t(getIndustryMapping(t).find((industry)=>industry.value === industries[0])?.label ?? "");
    };
    const industryTag = (0,react.useMemo)(()=>getIndustryTag(template.industries), [
        template.industries,
        selectedFilter
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
        className: "flex flex-wrap gap-1.5",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                className: (0,cn.cn)("rounded border px-1.5 py-0.5 text-xs", roleBasedStyling),
                children: t(roleTag ?? "")
            }),
            industryTag && /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                className: (0,cn.cn)("rounded border border-slate-300 bg-slate-50 px-1.5 py-0.5 text-xs text-slate-500"),
                children: industryTag
            }),
            channelTag && /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                className: (0,cn.cn)("flex-nowrap rounded border border-slate-300 bg-slate-50 px-1.5 py-0.5 text-xs text-slate-500"),
                children: channelTag
            }),
            template.preset.questions.some((question)=>question.logic && question.logic.length > 0) && /*#__PURE__*/ (0,react_jsx_runtime.jsx)(tooltip/* TooltipRenderer */.rE, {
                tooltipContent: t("environments.surveys.templates.uses_branching_logic"),
                shouldRender: true,
                children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(split/* default */.A, {
                    className: "h-5 w-5 rounded border border-slate-300 bg-slate-50 p-0.5 text-slate-400"
                })
            })
        ]
    });
};

;// ./modules/surveys/components/TemplateList/components/Template.tsx
/* __next_internal_client_entry_do_not_use__ Template auto */ 





const Template = ({ template, activeTemplate, setActiveTemplate, onTemplateClick = ()=>{}, project, createSurvey, loading, selectedFilter, noPreview })=>{
    const { t } = (0,tolgee_react_esm/* useTranslate */.WD)();
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
        onClick: ()=>{
            const newTemplate = replacePresetPlaceholders(template, project);
            if (noPreview) {
                createSurvey(newTemplate);
                return;
            }
            onTemplateClick(newTemplate);
            setActiveTemplate(newTemplate);
        },
        className: (0,cn.cn)(activeTemplate?.name === template.name && "ring-2 ring-slate-400", "duration-120 group relative cursor-pointer rounded-lg bg-white p-6 shadow transition-all duration-150 hover:ring-2 hover:ring-slate-300"),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(TemplateTags, {
                template: template,
                selectedFilter: selectedFilter
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("h3", {
                className: "text-md mb-1 mt-3 text-left font-bold text-slate-700",
                children: template.name
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                className: "text-left text-xs text-slate-600",
                children: template.description
            }),
            activeTemplate?.name === template.name && /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                className: "flex justify-start",
                children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_button/* Button */.$, {
                    className: "mt-6 px-6 py-3",
                    disabled: activeTemplate === null,
                    loading: loading,
                    onClick: ()=>createSurvey(activeTemplate),
                    children: t("environments.surveys.templates.use_this_template")
                })
            })
        ]
    }, template.name);
};

;// ./modules/surveys/components/TemplateList/components/TemplateFilters.tsx
/* __next_internal_client_entry_do_not_use__ TemplateFilters auto */ 



const TemplateFilters = ({ selectedFilter, setSelectedFilter, templateSearch, prefilledFilters })=>{
    const { t } = (0,tolgee_react_esm/* useTranslate */.WD)();
    const handleFilterSelect = (filterValue, index)=>{
        // If the filter value at a particular index is null, it indicates that no filter has been chosen, therefore all results are displayed
        const newFilter = [
            ...selectedFilter
        ];
        newFilter[index] = filterValue;
        setSelectedFilter(newFilter);
    };
    const allFilters = [
        getChannelMapping(t),
        getIndustryMapping(t),
        getRoleMapping(t)
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
        className: "mb-6 gap-3",
        children: allFilters.map((filters, index)=>{
            if (prefilledFilters[index] !== null) return;
            return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                className: "mt-2 flex flex-wrap gap-1 last:border-r-0",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("button", {
                        type: "button",
                        onClick: ()=>handleFilterSelect(null, index),
                        disabled: templateSearch && templateSearch.length > 0 ? true : false,
                        className: (0,cn.cn)(selectedFilter[index] === null ? "bg-slate-800 font-semibold text-white" : "bg-white text-slate-700 hover:bg-slate-100 focus:scale-105 focus:bg-slate-100 focus:outline-none focus:ring-0", "rounded border border-slate-800 px-2 py-1 text-xs transition-all duration-150"),
                        children: index === 0 ? t("environments.surveys.templates.all_channels") : index === 1 ? t("environments.surveys.templates.all_industries") : t("environments.surveys.templates.all_roles")
                    }),
                    filters.map((filter)=>/*#__PURE__*/ (0,react_jsx_runtime.jsx)("button", {
                            type: "button",
                            onClick: ()=>handleFilterSelect(filter.value, index),
                            disabled: templateSearch && templateSearch.length > 0 ? true : false,
                            className: (0,cn.cn)(selectedFilter[index] === filter.value ? "bg-slate-800 font-semibold text-white" : "bg-white text-slate-700 hover:bg-slate-100 focus:scale-105 focus:bg-slate-100 focus:outline-none focus:ring-0", "rounded border border-slate-800 px-2 py-1 text-xs transition-all duration-150"),
                            children: t(filter.label)
                        }, filter.value))
                ]
            }, filters[0]?.value || index);
        })
    });
};

;// ./modules/surveys/components/TemplateList/index.tsx
/* __next_internal_client_entry_do_not_use__ TemplateList auto */ 












const TemplateList = ({ user, project, environment, showFilters = true, templateSearch, prefilledFilters, onTemplateClick = ()=>{}, noPreview })=>{
    const { t } = (0,tolgee_react_esm/* useTranslate */.WD)();
    const router = (0,navigation.useRouter)();
    const [activeTemplate, setActiveTemplate] = (0,react.useState)(null);
    const [loading, setLoading] = (0,react.useState)(false);
    const [selectedFilter, setSelectedFilter] = (0,react.useState)(prefilledFilters);
    const surveyType = (0,react.useMemo)(()=>{
        if (project.config.channel) {
            if (project.config.channel === "website") {
                return "app";
            }
            return project.config.channel;
        }
        return "link";
    }, [
        project.config.channel
    ]);
    const createSurvey = async (activeTemplate)=>{
        setLoading(true);
        const augmentedTemplate = {
            ...activeTemplate.preset,
            type: surveyType,
            createdBy: user.id
        };
        const createSurveyResponse = await (0,next_flight_server_reference_proxy_loaderid_7ff20090763891981ab1625ad83b771c8ef93748aa_name_createSurveyAction_/* createSurveyAction */.H)({
            environmentId: environment.id,
            surveyBody: augmentedTemplate
        });
        if (createSurveyResponse?.data) {
            router.push(`/environments/${environment.id}/surveys/${createSurveyResponse.data.id}/edit`);
        } else {
            const errorMessage = (0,helper/* getFormattedErrorMessage */.g3)(createSurveyResponse);
            dist/* default */.Ay.error(errorMessage);
        }
    };
    const filteredTemplates = ()=>{
        return (0,templates/* templates */.kT)(t).filter((template)=>{
            if (templateSearch) {
                return template.name.toLowerCase().includes(templateSearch.toLowerCase());
            }
            // Parse and validate the filters
            const channelParseResult = types_project/* ZProjectConfigChannel */.Rz.nullable().safeParse(selectedFilter[0]);
            const industryParseResult = types_project/* ZProjectConfigIndustry */.Y.nullable().safeParse(selectedFilter[1]);
            const roleParseResult = ZTemplateRole.nullable().safeParse(selectedFilter[2]);
            // Ensure all validations are successful
            if (!channelParseResult.success || !industryParseResult.success || !roleParseResult.success) {
                // If any validation fails, skip this template
                return true;
            }
            // Access the validated data from the parse results
            const validatedChannel = channelParseResult.data;
            const validatedIndustry = industryParseResult.data;
            const validatedRole = roleParseResult.data;
            // Perform the filtering
            const channelMatch = validatedChannel === null || template.channels?.includes(validatedChannel);
            const industryMatch = validatedIndustry === null || template.industries?.includes(validatedIndustry);
            const roleMatch = validatedRole === null || template.role === validatedRole;
            return channelMatch && industryMatch && roleMatch;
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("main", {
        className: "relative z-0 flex-1 overflow-y-auto px-6 pb-6 pt-2 focus:outline-none",
        children: [
            showFilters && !templateSearch && /*#__PURE__*/ (0,react_jsx_runtime.jsx)(TemplateFilters, {
                selectedFilter: selectedFilter,
                setSelectedFilter: setSelectedFilter,
                templateSearch: templateSearch,
                prefilledFilters: prefilledFilters
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                className: "grid grid-cols-1 gap-4 sm:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(StartFromScratchTemplate, {
                        activeTemplate: activeTemplate,
                        setActiveTemplate: setActiveTemplate,
                        onTemplateClick: onTemplateClick,
                        project: project,
                        createSurvey: createSurvey,
                        loading: loading,
                        noPreview: noPreview
                    }),
                    ( false ? 0 : filteredTemplates()).map((template)=>{
                        return /*#__PURE__*/ (0,react_jsx_runtime.jsx)(Template, {
                            template: template,
                            activeTemplate: activeTemplate,
                            setActiveTemplate: setActiveTemplate,
                            onTemplateClick: onTemplateClick,
                            project: project,
                            createSurvey: createSurvey,
                            loading: loading,
                            selectedFilter: selectedFilter,
                            noPreview: noPreview
                        }, template.name);
                    })
                ]
            })
        ]
    });
};


/***/ }),

/***/ 617828:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ SearchBar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(642725);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _barrel_optimize_names_Search_lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(834096);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(891616);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(983773);




const SearchBar = ({ value, onChange, placeholder = "Search by survey name", className })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_2__.cn)("flex h-8 items-center rounded-lg border border-slate-300 bg-white px-4 text-slate-800", className),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Search_lucide_react__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
                className: "h-4 w-4"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
                type: "text",
                className: "w-full border-none bg-transparent text-sm focus:outline-none",
                placeholder: placeholder,
                value: value,
                onChange: (e)=>onChange(e.target.value)
            })
        ]
    });
};


/***/ }),

/***/ 547380:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.regionAPIs = void 0;
exports.regionAPIs = new Map([
    ["us", "https://api-iam.intercom.io"],
    ["eu", "https://api-iam.eu.intercom.io"],
    ["ap", "https://api-iam.au.intercom.io"]
]);


/***/ }),

/***/ 19061:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.onUserEmailSupplied = exports.showConversation = exports.showTicket = exports.startChecklist = exports.startSurvey = exports.showNews = exports.showArticle = exports.startTour = exports.getVisitorId = exports.trackEvent = exports.onUnreadCountChange = exports.onShow = exports.onHide = exports.showNewMessage = exports.showMessages = exports.showSpace = exports.show = exports.hide = exports.update = exports.shutdown = exports.boot = exports.Intercom = void 0;
const constants_1 = __webpack_require__(547380);
const instance_manager_1 = __webpack_require__(40384);
const callIntercomMethod = (method, ...args) => {
    // window is undefined on server-side and this breaks our widget
    if (typeof window !== undefined && window.Intercom) {
        window.Intercom(method, ...args);
    }
    else {
        console.warn("Please ensure Intercom is setup and running on client-side!");
    }
};
const Intercom = (props) => {
    if (typeof props !== "object") {
        console.warn("Intercom initialiser called with invalid parameters.");
        return;
    }
    const { region = "us" } = props, args = __rest(props, ["region"]);
    if (typeof window !== "undefined" && !instance_manager_1.ref) {
        window.intercomSettings = Object.assign(Object.assign({}, args), { api_base: constants_1.regionAPIs.get(region) });
        (0, instance_manager_1.init)();
    }
};
exports.Intercom = Intercom;
// Public functions that can be called from outside the module
exports["default"] = exports.Intercom;
const boot = (arg) => callIntercomMethod("boot", arg);
exports.boot = boot;
const shutdown = () => callIntercomMethod("shutdown");
exports.shutdown = shutdown;
const update = (arg) => callIntercomMethod("update", arg);
exports.update = update;
const hide = () => callIntercomMethod("hide");
exports.hide = hide;
const show = () => callIntercomMethod("show");
exports.show = show;
const showSpace = (spaceName) => callIntercomMethod("showSpace", spaceName);
exports.showSpace = showSpace;
const showMessages = () => callIntercomMethod("showMessages");
exports.showMessages = showMessages;
const showNewMessage = (prePopulatedContent) => callIntercomMethod("showNewMessage", prePopulatedContent);
exports.showNewMessage = showNewMessage;
const onHide = (callback) => callIntercomMethod("onHide", callback);
exports.onHide = onHide;
const onShow = (callback) => callIntercomMethod("onShow", callback);
exports.onShow = onShow;
const onUnreadCountChange = (callback) => callIntercomMethod("onUnreadCountChange", callback);
exports.onUnreadCountChange = onUnreadCountChange;
const trackEvent = (...args) => callIntercomMethod("trackEvent", ...args);
exports.trackEvent = trackEvent;
const getVisitorId = () => callIntercomMethod("getVisitorId");
exports.getVisitorId = getVisitorId;
const startTour = (tourId) => callIntercomMethod("startTour", tourId);
exports.startTour = startTour;
const showArticle = (articleId) => callIntercomMethod("showArticle", articleId);
exports.showArticle = showArticle;
const showNews = (newsItemId) => callIntercomMethod("showNews", newsItemId);
exports.showNews = showNews;
const startSurvey = (surveyId) => callIntercomMethod("startSurvey", surveyId);
exports.startSurvey = startSurvey;
const startChecklist = (checklistId) => callIntercomMethod("startChecklist", checklistId);
exports.startChecklist = startChecklist;
const showTicket = (ticketId) => callIntercomMethod("showTicket", ticketId);
exports.showTicket = showTicket;
const showConversation = (conversationId) => callIntercomMethod("showConversation", conversationId);
exports.showConversation = showConversation;
const onUserEmailSupplied = (callback) => callIntercomMethod("onUserEmailSupplied", callback);
exports.onUserEmailSupplied = onUserEmailSupplied;


/***/ }),

/***/ 40384:
/***/ (function(__unused_webpack_module, exports) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ref = exports.init = void 0;
const scriptElementId = "_intercom_npm_loader";
// This holds a queue of commands to be passed to the messenger widget API after it is added to the page
const queueHolder = function () {
    queueHolder.loaderQueue(arguments);
};
queueHolder.q = [];
queueHolder.loaderQueue = function (args) {
    queueHolder.q.push(args);
};
const addWidgetToPage = function () {
    var _a, _b;
    var d = document;
    if (d.getElementById(scriptElementId)) {
        // script is already in DOM
        return;
    }
    var s = d.createElement("script");
    s.type = "text/javascript";
    s.async = true;
    s.id = scriptElementId;
    s.src =
        "https://widget.intercom.io/widget/" + ((_a = window.intercomSettings) === null || _a === void 0 ? void 0 : _a.app_id);
    var x = d.getElementsByTagName("script")[0];
    (_b = x.parentNode) === null || _b === void 0 ? void 0 : _b.insertBefore(s, x);
};
const isDocumentReady = () => document.readyState === "complete" || document.readyState === "interactive";
const init = () => __awaiter(void 0, void 0, void 0, function* () {
    var w = window;
    var ic = w.Intercom;
    if (w.intercomSettings) {
        w.intercomSettings.installation_type = "npm-package";
    }
    if (typeof ic === "function") {
        ic("reattach_activator");
        ic("update", w.intercomSettings);
    }
    else {
        w.Intercom = queueHolder;
        if (isDocumentReady()) {
            addWidgetToPage();
        }
        else {
            document.addEventListener("readystatechange", function () {
                if (isDocumentReady()) {
                    addWidgetToPage();
                }
            });
            if (w.attachEvent) {
                w.attachEvent("onload", addWidgetToPage);
            }
            else {
                w.addEventListener("load", addWidgetToPage, false);
            }
        }
    }
});
exports.init = init;
exports.ref = undefined;


/***/ }),

/***/ 620394:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ ArrowUpRight)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58303);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const ArrowUpRight = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("ArrowUpRight", [
    [
        "path",
        {
            d: "M7 7h10v10",
            key: "1tivn9"
        }
    ],
    [
        "path",
        {
            d: "M7 17 17 7",
            key: "1vkiza"
        }
    ]
]);
 //# sourceMappingURL=arrow-up-right.js.map


/***/ }),

/***/ 959777:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 280612:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  F8: () => (/* binding */ checkMultiLanguagePermission),
  NA: () => (/* binding */ createLanguageAction),
  GX: () => (/* binding */ deleteLanguageAction),
  r2: () => (/* binding */ getSurveysUsingGivenLanguageAction),
  yE: () => (/* binding */ updateLanguageAction)
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
// EXTERNAL MODULE: ./modules/ee/license-check/lib/utils.ts + 1 modules
var utils = __webpack_require__(725322);
// EXTERNAL MODULE: ../../node_modules/zod/lib/index.mjs
var lib = __webpack_require__(283131);
// EXTERNAL MODULE: external "@prisma/client"
var client_ = __webpack_require__(896330);
// EXTERNAL MODULE: ../../node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js
var react = __webpack_require__(645625);
// EXTERNAL MODULE: ../../packages/database/src/index.ts + 1 modules
var src = __webpack_require__(482859);
// EXTERNAL MODULE: ../../packages/types/common.ts
var common = __webpack_require__(552224);
// EXTERNAL MODULE: ../../packages/types/errors.ts
var errors = __webpack_require__(207798);
// EXTERNAL MODULE: ../../packages/types/project.ts
var types_project = __webpack_require__(773518);
// EXTERNAL MODULE: ../../packages/lib/project/cache.ts
var cache = __webpack_require__(595111);
// EXTERNAL MODULE: ../../packages/lib/project/service.ts
var service = __webpack_require__(28492);
// EXTERNAL MODULE: ../../packages/lib/survey/cache.ts
var survey_cache = __webpack_require__(710528);
// EXTERNAL MODULE: ../../packages/lib/utils/validate.ts
var validate = __webpack_require__(472749);
;// ../../packages/lib/language/service.ts










const languageSelect = {
    id: true,
    code: true,
    alias: true,
    projectId: true,
    createdAt: true,
    updatedAt: true
};
const getLanguage = async (languageId)=>{
    try {
        validateInputs([
            languageId,
            ZId
        ]);
        const language = await prisma.language.findFirst({
            where: {
                id: languageId
            },
            select: {
                ...languageSelect,
                projectId: true
            }
        });
        if (!language) {
            throw new ResourceNotFoundError("Language", languageId);
        }
        return language;
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            console.error(error);
            throw new DatabaseError(error.message);
        }
        throw error;
    }
};
const createLanguage = async (projectId, languageInput)=>{
    try {
        (0,validate/* validateInputs */.C)([
            projectId,
            common/* ZId */.i4
        ], [
            languageInput,
            types_project/* ZLanguageInput */.DP
        ]);
        const project = await (0,service/* getProject */.U1)(projectId);
        if (!project) throw new errors/* ResourceNotFoundError */.CE("Project not found", projectId);
        if (!languageInput.code) {
            throw new errors/* ValidationError */.yI("Language code is required");
        }
        const language = await src/* prisma */.z.language.create({
            data: {
                ...languageInput,
                project: {
                    connect: {
                        id: projectId
                    }
                }
            },
            select: languageSelect
        });
        project.environments.forEach((environment)=>{
            cache/* projectCache */.E.revalidate({
                environmentId: environment.id
            });
        });
        return language;
    } catch (error) {
        if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
            console.error(error);
            throw new errors/* DatabaseError */.a$(error.message);
        }
        throw error;
    }
};
const getSurveysUsingGivenLanguage = (0,react.cache)(async (languageId)=>{
    try {
        // Check if the language is used in any survey
        const surveys = await src/* prisma */.z.surveyLanguage.findMany({
            where: {
                languageId: languageId
            },
            select: {
                survey: {
                    select: {
                        name: true
                    }
                }
            }
        });
        // Extracting survey names
        const surveyNames = surveys.map((s)=>s.survey.name);
        return surveyNames;
    } catch (error) {
        if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
            console.error(error);
            throw new errors/* DatabaseError */.a$(error.message);
        }
        throw error;
    }
});
const deleteLanguage = async (languageId, projectId)=>{
    try {
        (0,validate/* validateInputs */.C)([
            languageId,
            common/* ZId */.i4
        ], [
            projectId,
            common/* ZId */.i4
        ]);
        const project = await (0,service/* getProject */.U1)(projectId);
        if (!project) throw new errors/* ResourceNotFoundError */.CE("Project not found", projectId);
        const prismaLanguage = await src/* prisma */.z.language.delete({
            where: {
                id: languageId
            },
            select: {
                ...languageSelect,
                surveyLanguages: {
                    select: {
                        surveyId: true
                    }
                }
            }
        });
        project.environments.forEach((environment)=>{
            cache/* projectCache */.E.revalidate({
                id: prismaLanguage.projectId,
                environmentId: environment.id
            });
        });
        // delete unused surveyLanguages
        const language = {
            ...prismaLanguage,
            surveyLanguages: undefined
        };
        return language;
    } catch (error) {
        if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
            console.error(error);
            throw new errors/* DatabaseError */.a$(error.message);
        }
        throw error;
    }
};
const updateLanguage = async (projectId, languageId, languageInput)=>{
    try {
        (0,validate/* validateInputs */.C)([
            languageId,
            common/* ZId */.i4
        ], [
            languageInput,
            types_project/* ZLanguageUpdate */.Io
        ], [
            projectId,
            common/* ZId */.i4
        ]);
        const project = await (0,service/* getProject */.U1)(projectId);
        if (!project) throw new errors/* ResourceNotFoundError */.CE("Project not found", projectId);
        const prismaLanguage = await src/* prisma */.z.language.update({
            where: {
                id: languageId
            },
            data: {
                ...languageInput,
                updatedAt: new Date()
            },
            select: {
                ...languageSelect,
                surveyLanguages: {
                    select: {
                        surveyId: true
                    }
                }
            }
        });
        project.environments.forEach((environment)=>{
            cache/* projectCache */.E.revalidate({
                id: prismaLanguage.projectId,
                environmentId: environment.id
            });
            survey_cache/* surveyCache */.$.revalidate({
                environmentId: environment.id
            });
        });
        // revalidate cache of all connected surveys
        prismaLanguage.surveyLanguages.forEach((surveyLanguage)=>{
            survey_cache/* surveyCache */.$.revalidate({
                id: surveyLanguage.surveyId
            });
        });
        // delete unused surveyLanguages
        const language = {
            ...prismaLanguage,
            surveyLanguages: undefined
        };
        return language;
    } catch (error) {
        if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
            console.error(error);
            throw new errors/* DatabaseError */.a$(error.message);
        }
        throw error;
    }
};

// EXTERNAL MODULE: ../../packages/lib/organization/service.ts
var organization_service = __webpack_require__(167440);
// EXTERNAL MODULE: ../../node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js
var action_validate = __webpack_require__(429931);
;// ./modules/ee/multi-language-surveys/lib/actions.ts
/* __next_internal_action_entry_do_not_use__ {"7f3ebbecf8a294a6cc7639d9e61cc0217a977ee8d8":"createLanguageAction","7f547ea6b15b116a71ee21ed4d4b573d0f6326a3fe":"getSurveysUsingGivenLanguageAction","7f57d1747f6e09fffee26feb95a4076239973f57e4":"deleteLanguageAction","7f92f93083583537bb80ae660771e6bbc02cb356c0":"checkMultiLanguagePermission","7fde8a1c3557824f9bc1d8436ea91b5ae9fbfb0e4a":"updateLanguageAction"} */ 











const ZCreateLanguageAction = lib.z.object({
    projectId: common/* ZId */.i4,
    languageInput: types_project/* ZLanguageInput */.DP
});
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ checkMultiLanguagePermission = async (organizationId)=>{
    const organization = await (0,organization_service/* getOrganization */.SA)(organizationId);
    if (!organization) {
        throw new errors/* ResourceNotFoundError */.CE("Organization", organizationId);
    }
    const isMultiLanguageAllowed = await (0,utils/* getMultiLanguagePermission */.x)(organization);
    if (!isMultiLanguageAllowed) {
        throw new errors/* OperationNotAllowedError */.J4("Multi language is not allowed for this organization");
    }
};
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ createLanguageAction = action_client/* authenticatedActionClient */.D.schema(ZCreateLanguageAction).action(async ({ ctx, parsedInput })=>{
    const organizationId = await (0,helper/* getOrganizationIdFromProjectId */.x7)(parsedInput.projectId);
    await (0,action_client_middleware/* checkAuthorizationUpdated */.r)({
        userId: ctx.user.id,
        organizationId,
        access: [
            {
                type: "organization",
                schema: types_project/* ZLanguageInput */.DP,
                data: parsedInput.languageInput,
                roles: [
                    "owner",
                    "manager"
                ]
            },
            {
                type: "projectTeam",
                projectId: parsedInput.projectId,
                minPermission: "manage"
            }
        ]
    });
    await checkMultiLanguagePermission(organizationId);
    return await createLanguage(parsedInput.projectId, parsedInput.languageInput);
});
const ZDeleteLanguageAction = lib.z.object({
    languageId: common/* ZId */.i4,
    projectId: common/* ZId */.i4
});
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ deleteLanguageAction = action_client/* authenticatedActionClient */.D.schema(ZDeleteLanguageAction).action(async ({ ctx, parsedInput })=>{
    const languageProjectId = await (0,helper/* getProjectIdFromLanguageId */.GT)(parsedInput.languageId);
    if (languageProjectId !== parsedInput.projectId) {
        throw new Error("Invalid language id");
    }
    const organizationId = await (0,helper/* getOrganizationIdFromProjectId */.x7)(parsedInput.projectId);
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
                projectId: parsedInput.projectId,
                minPermission: "manage"
            }
        ]
    });
    await checkMultiLanguagePermission(organizationId);
    return await deleteLanguage(parsedInput.languageId, parsedInput.projectId);
});
const ZGetSurveysUsingGivenLanguageAction = lib.z.object({
    languageId: common/* ZId */.i4
});
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getSurveysUsingGivenLanguageAction = action_client/* authenticatedActionClient */.D.schema(ZGetSurveysUsingGivenLanguageAction).action(async ({ ctx, parsedInput })=>{
    const organizationId = await (0,helper/* getOrganizationIdFromLanguageId */.O$)(parsedInput.languageId);
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
                projectId: await (0,helper/* getProjectIdFromLanguageId */.GT)(parsedInput.languageId),
                minPermission: "manage"
            }
        ]
    });
    await checkMultiLanguagePermission(organizationId);
    return await getSurveysUsingGivenLanguage(parsedInput.languageId);
});
const ZUpdateLanguageAction = lib.z.object({
    projectId: common/* ZId */.i4,
    languageId: common/* ZId */.i4,
    languageInput: types_project/* ZLanguageInput */.DP
});
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ updateLanguageAction = action_client/* authenticatedActionClient */.D.schema(ZUpdateLanguageAction).action(async ({ ctx, parsedInput })=>{
    const languageProductId = await (0,helper/* getProjectIdFromLanguageId */.GT)(parsedInput.languageId);
    if (languageProductId !== parsedInput.projectId) {
        throw new Error("Invalid language id");
    }
    const organizationId = await (0,helper/* getOrganizationIdFromProjectId */.x7)(parsedInput.projectId);
    await (0,action_client_middleware/* checkAuthorizationUpdated */.r)({
        userId: ctx.user.id,
        organizationId,
        access: [
            {
                type: "organization",
                schema: types_project/* ZLanguageInput */.DP,
                data: parsedInput.languageInput,
                roles: [
                    "owner",
                    "manager"
                ]
            },
            {
                type: "projectTeam",
                projectId: parsedInput.projectId,
                minPermission: "manage"
            }
        ]
    });
    await checkMultiLanguagePermission(organizationId);
    return await updateLanguage(parsedInput.projectId, parsedInput.languageId, parsedInput.languageInput);
});

(0,action_validate/* ensureServerEntryExports */.D)([
    checkMultiLanguagePermission,
    createLanguageAction,
    deleteLanguageAction,
    getSurveysUsingGivenLanguageAction,
    updateLanguageAction
]);
(0,server_reference/* registerServerReference */.A)(checkMultiLanguagePermission, "7f92f93083583537bb80ae660771e6bbc02cb356c0", null);
(0,server_reference/* registerServerReference */.A)(createLanguageAction, "7f3ebbecf8a294a6cc7639d9e61cc0217a977ee8d8", null);
(0,server_reference/* registerServerReference */.A)(deleteLanguageAction, "7f57d1747f6e09fffee26feb95a4076239973f57e4", null);
(0,server_reference/* registerServerReference */.A)(getSurveysUsingGivenLanguageAction, "7f547ea6b15b116a71ee21ed4d4b573d0f6326a3fe", null);
(0,server_reference/* registerServerReference */.A)(updateLanguageAction, "7fde8a1c3557824f9bc1d8436ea91b5ae9fbfb0e4a", null);


/***/ }),

/***/ 596379:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 431751:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ getSurveyFollowUpsPermission)
/* harmony export */ });
/* harmony import */ var _formbricks_lib_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(711344);

const getSurveyFollowUpsPermission = async (organization)=>{
    if (_formbricks_lib_constants__WEBPACK_IMPORTED_MODULE_0__/* .IS_FORMBRICKS_CLOUD */ .Si) return organization.billing.plan !== _formbricks_lib_constants__WEBPACK_IMPORTED_MODULE_0__/* .PROJECT_FEATURE_KEYS */ .mu.FREE;
    return true;
};


/***/ }),

/***/ 590997:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ createSurveyAction)
/* harmony export */ });
/* harmony import */ var private_next_rsc_server_reference__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(286055);
/* harmony import */ var private_next_rsc_action_encryption__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(770767);
/* harmony import */ var private_next_rsc_action_encryption__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(private_next_rsc_action_encryption__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_utils_action_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(308046);
/* harmony import */ var _lib_utils_action_client_middleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(729455);
/* harmony import */ var _lib_utils_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(440388);
/* harmony import */ var _modules_ee_multi_language_surveys_lib_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(280612);
/* harmony import */ var _modules_survey_follow_ups_lib_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(431751);
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(283131);
/* harmony import */ var _formbricks_lib_organization_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(167440);
/* harmony import */ var _formbricks_lib_survey_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(939483);
/* harmony import */ var _formbricks_types_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(552224);
/* harmony import */ var _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(207798);
/* harmony import */ var _formbricks_types_surveys_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(797175);
/* harmony import */ var private_next_rsc_action_validate__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(429931);
/* __next_internal_action_entry_do_not_use__ {"7ff20090763891981ab1625ad83b771c8ef93748aa":"createSurveyAction"} */ 












const ZCreateSurveyAction = zod__WEBPACK_IMPORTED_MODULE_6__.z.object({
    environmentId: _formbricks_types_common__WEBPACK_IMPORTED_MODULE_7__/* .ZId */ .i4,
    surveyBody: _formbricks_types_surveys_types__WEBPACK_IMPORTED_MODULE_8__/* .ZSurveyCreateInput */ .Nm
});
/**
 * Checks if survey follow-ups are enabled for the given organization.
 *
 * @param { string } organizationId  The ID of the organization to check.
 * @returns { Promise<void> }  A promise that resolves if the permission is granted.
 * @throws { ResourceNotFoundError }  If the organization is not found.
 * @throws { OperationNotAllowedError }  If survey follow-ups are not enabled for the organization.
 */ const checkSurveyFollowUpsPermission = async (organizationId)=>{
    const organization = await (0,_formbricks_lib_organization_service__WEBPACK_IMPORTED_MODULE_9__/* .getOrganization */ .SA)(organizationId);
    if (!organization) {
        throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_10__/* .ResourceNotFoundError */ .CE("Organization not found", organizationId);
    }
    const isSurveyFollowUpsEnabled = await (0,_modules_survey_follow_ups_lib_utils__WEBPACK_IMPORTED_MODULE_11__/* .getSurveyFollowUpsPermission */ .T)(organization);
    if (!isSurveyFollowUpsEnabled) {
        throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_10__/* .OperationNotAllowedError */ .J4("Survey follow ups are not enabled for this organization");
    }
};
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ createSurveyAction = _lib_utils_action_client__WEBPACK_IMPORTED_MODULE_2__/* .authenticatedActionClient */ .D.schema(ZCreateSurveyAction).action(async ({ ctx, parsedInput })=>{
    const organizationId = await (0,_lib_utils_helper__WEBPACK_IMPORTED_MODULE_4__/* .getOrganizationIdFromEnvironmentId */ .X_)(parsedInput.environmentId);
    await (0,_lib_utils_action_client_middleware__WEBPACK_IMPORTED_MODULE_3__/* .checkAuthorizationUpdated */ .r)({
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
                projectId: await (0,_lib_utils_helper__WEBPACK_IMPORTED_MODULE_4__/* .getProjectIdFromEnvironmentId */ .DU)(parsedInput.environmentId)
            }
        ]
    });
    if (parsedInput.surveyBody.followUps?.length) {
        await checkSurveyFollowUpsPermission(organizationId);
    }
    if (parsedInput.surveyBody.languages?.length) {
        await (0,_modules_ee_multi_language_surveys_lib_actions__WEBPACK_IMPORTED_MODULE_5__/* .checkMultiLanguagePermission */ .F8)(organizationId);
    }
    return await (0,_formbricks_lib_survey_service__WEBPACK_IMPORTED_MODULE_12__/* .createSurvey */ .th)(parsedInput.environmentId, parsedInput.surveyBody);
});

(0,private_next_rsc_action_validate__WEBPACK_IMPORTED_MODULE_13__/* .ensureServerEntryExports */ .D)([
    createSurveyAction
]);
(0,private_next_rsc_server_reference__WEBPACK_IMPORTED_MODULE_0__/* .registerServerReference */ .A)(createSurveyAction, "7ff20090763891981ab1625ad83b771c8ef93748aa", null);


/***/ }),

/***/ 182711:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ createSurveyAction)
/* harmony export */ });
/* harmony import */ var private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(308441);
/* harmony import */ var private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_0__);

const createSurveyAction = /*#__PURE__*/(0,private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_0__.createServerReference)("7ff20090763891981ab1625ad83b771c8ef93748aa", private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_0__.callServer, undefined, private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_0__.findSourceMapURL, "createSurveyAction")

/***/ })

};
;