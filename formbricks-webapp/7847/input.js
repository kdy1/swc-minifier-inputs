exports.id = 7847;
exports.ids = [7847];
exports.modules = {

/***/ 688751:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./de-DE.json": 663934,
	"./en-US.json": 66735,
	"./fr-FR.json": 550328,
	"./pt-BR.json": 313392,
	"./zh-Hant-TW.json": 819759
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 688751;

/***/ }),

/***/ 292170:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  SurveyAnalysisNavigation: () => (/* binding */ SurveyAnalysisNavigation)
});

// EXTERNAL MODULE: ../../node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js
var react_jsx_runtime = __webpack_require__(642725);
// EXTERNAL MODULE: ./app/(app)/environments/[environmentId]/components/ResponseFilterContext.tsx
var ResponseFilterContext = __webpack_require__(300677);
// EXTERNAL MODULE: ../../node_modules/next/dist/build/webpack/loaders/next-flight-server-reference-proxy-loader.js?id=7fc40fcf4d8238c50e0ee14725c1e9b7cc636f4788&name=getResponseCountAction!
var next_flight_server_reference_proxy_loaderid_7fc40fcf4d8238c50e0ee14725c1e9b7cc636f4788_name_getResponseCountAction_ = __webpack_require__(475221);
// EXTERNAL MODULE: ../../node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js
var action_client_wrapper = __webpack_require__(308441);
;// ../../node_modules/next/dist/build/webpack/loaders/next-flight-server-reference-proxy-loader.js?id=7f7ce9467586d1b8044c1acac25e7b329b0fb32cc8&name=revalidateSurveyIdPath!

const revalidateSurveyIdPath = /*#__PURE__*/(0,action_client_wrapper.createServerReference)("7f7ce9467586d1b8044c1acac25e7b329b0fb32cc8", action_client_wrapper.callServer, undefined, action_client_wrapper.findSourceMapURL, "revalidateSurveyIdPath")
// EXTERNAL MODULE: ./app/lib/surveys/surveys.ts
var surveys = __webpack_require__(291786);
// EXTERNAL MODULE: ../../node_modules/next/dist/build/webpack/loaders/next-flight-server-reference-proxy-loader.js?id=7f6b86dfb9f916340e09181cf5b45bed7b1e7c65db&name=getResponseCountBySurveySharingKeyAction!
var next_flight_server_reference_proxy_loaderid_7f6b86dfb9f916340e09181cf5b45bed7b1e7c65db_name_getResponseCountBySurveySharingKeyAction_ = __webpack_require__(788253);
// EXTERNAL MODULE: ./modules/ui/components/secondary-navigation/index.tsx
var secondary_navigation = __webpack_require__(630785);
// EXTERNAL MODULE: ../../node_modules/@tolgee/react/dist/tolgee-react.esm.js
var tolgee_react_esm = __webpack_require__(397674);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/presentation.js
var presentation = __webpack_require__(523528);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/inbox.js
var inbox = __webpack_require__(245198);
// EXTERNAL MODULE: ../../node_modules/next/dist/api/navigation.js
var api_navigation = __webpack_require__(470207);
// EXTERNAL MODULE: ../../node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js
var react = __webpack_require__(891616);
// EXTERNAL MODULE: ../../packages/lib/utils/hooks/useIntervalWhenFocused.ts
var useIntervalWhenFocused = __webpack_require__(871900);
;// ./app/(app)/environments/[environmentId]/surveys/[surveyId]/(analysis)/components/SurveyAnalysisNavigation.tsx
/* __next_internal_client_entry_do_not_use__ SurveyAnalysisNavigation auto */ 










const SurveyAnalysisNavigation = ({ environmentId, survey, initialTotalResponseCount, activeId })=>{
    const pathname = (0,api_navigation.usePathname)();
    const { t } = (0,tolgee_react_esm/* useTranslate */.WD)();
    const params = (0,api_navigation.useParams)();
    const [filteredResponseCount, setFilteredResponseCount] = (0,react.useState)(null);
    const [totalResponseCount, setTotalResponseCount] = (0,react.useState)(initialTotalResponseCount);
    const sharingKey = params.sharingKey;
    const isSharingPage = !!sharingKey;
    const searchParams = (0,api_navigation.useSearchParams)();
    const isShareEmbedModalOpen = searchParams.get("share") === "true";
    const url = isSharingPage ? `/share/${sharingKey}` : `/environments/${environmentId}/surveys/${survey.id}`;
    const { selectedFilter, dateRange } = (0,ResponseFilterContext/* useResponseFilter */.S)();
    const filters = (0,react.useMemo)(()=>(0,surveys/* getFormattedFilters */.QR)(survey, selectedFilter, dateRange), [
        selectedFilter,
        dateRange,
        survey
    ]);
    const latestFiltersRef = (0,react.useRef)(filters);
    latestFiltersRef.current = filters;
    const getResponseCount = ()=>{
        if (isSharingPage) return (0,next_flight_server_reference_proxy_loaderid_7f6b86dfb9f916340e09181cf5b45bed7b1e7c65db_name_getResponseCountBySurveySharingKeyAction_/* getResponseCountBySurveySharingKeyAction */.v)({
            sharingKey
        });
        return (0,next_flight_server_reference_proxy_loaderid_7fc40fcf4d8238c50e0ee14725c1e9b7cc636f4788_name_getResponseCountAction_/* getResponseCountAction */.X)({
            surveyId: survey.id
        });
    };
    const fetchResponseCount = async ()=>{
        const count = await getResponseCount();
        const responseCount = count?.data ?? 0;
        setTotalResponseCount(responseCount);
    };
    const getFilteredResponseCount = (0,react.useCallback)(()=>{
        if (isSharingPage) return (0,next_flight_server_reference_proxy_loaderid_7f6b86dfb9f916340e09181cf5b45bed7b1e7c65db_name_getResponseCountBySurveySharingKeyAction_/* getResponseCountBySurveySharingKeyAction */.v)({
            sharingKey,
            filterCriteria: latestFiltersRef.current
        });
        return (0,next_flight_server_reference_proxy_loaderid_7fc40fcf4d8238c50e0ee14725c1e9b7cc636f4788_name_getResponseCountAction_/* getResponseCountAction */.X)({
            surveyId: survey.id,
            filterCriteria: latestFiltersRef.current
        });
    }, [
        isSharingPage,
        sharingKey,
        survey.id
    ]);
    const fetchFilteredResponseCount = (0,react.useCallback)(async ()=>{
        const count = await getFilteredResponseCount();
        const responseCount = count?.data ?? 0;
        setFilteredResponseCount(responseCount);
    }, [
        getFilteredResponseCount
    ]);
    (0,react.useEffect)(()=>{
        fetchFilteredResponseCount();
    }, [
        filters,
        isSharingPage,
        sharingKey,
        survey.id,
        fetchFilteredResponseCount
    ]);
    (0,useIntervalWhenFocused/* useIntervalWhenFocused */.y)(()=>{
        fetchResponseCount();
        fetchFilteredResponseCount();
    }, 10000, !isShareEmbedModalOpen, false);
    const getResponseCountString = ()=>{
        if (totalResponseCount === null) return "";
        if (filteredResponseCount === null) return `(${totalResponseCount})`;
        const totalCount = Math.max(totalResponseCount, filteredResponseCount);
        if (totalCount === filteredResponseCount) return `(${totalCount})`;
        return `(${filteredResponseCount} of ${totalCount})`;
    };
    const navigation = [
        {
            id: "summary",
            label: t("common.summary"),
            icon: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(presentation/* default */.A, {
                className: "h-5 w-5"
            }),
            href: `${url}/summary?referer=true`,
            current: pathname?.includes("/summary"),
            onClick: ()=>{
                revalidateSurveyIdPath(environmentId, survey.id);
            }
        },
        {
            id: "responses",
            label: `${t("common.responses")} ${getResponseCountString()}`,
            icon: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(inbox/* default */.A, {
                className: "h-5 w-5"
            }),
            href: `${url}/responses?referer=true`,
            current: pathname?.includes("/responses"),
            onClick: ()=>{
                revalidateSurveyIdPath(environmentId, survey.id);
            }
        }
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime.jsx)(secondary_navigation/* SecondaryNavigation */.N, {
        navigation: navigation,
        activeId: activeId
    });
};


/***/ }),

/***/ 151979:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Y: () => (/* binding */ CustomFilter)
});

// EXTERNAL MODULE: ../../node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js
var react_jsx_runtime = __webpack_require__(642725);
// EXTERNAL MODULE: ./app/(app)/environments/[environmentId]/components/ResponseFilterContext.tsx
var ResponseFilterContext = __webpack_require__(300677);
// EXTERNAL MODULE: ../../node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js
var action_client_wrapper = __webpack_require__(308441);
;// ../../node_modules/next/dist/build/webpack/loaders/next-flight-server-reference-proxy-loader.js?id=7f8fa2b402579cb2f263e2b1efb771533751dfc73b&name=getResponsesDownloadUrlAction!

const getResponsesDownloadUrlAction = /*#__PURE__*/(0,action_client_wrapper.createServerReference)("7f8fa2b402579cb2f263e2b1efb771533751dfc73b", action_client_wrapper.callServer, undefined, action_client_wrapper.findSourceMapURL, "getResponsesDownloadUrlAction")
// EXTERNAL MODULE: ./app/lib/surveys/surveys.ts
var surveys = __webpack_require__(291786);
// EXTERNAL MODULE: ./lib/utils/helper.ts
var helper = __webpack_require__(856763);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/chevron-left.js
var chevron_left = __webpack_require__(914879);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/chevron-right.js
var chevron_right = __webpack_require__(115758);
// EXTERNAL MODULE: ../../node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js
var react = __webpack_require__(891616);
var react_default = /*#__PURE__*/__webpack_require__.n(react);
// EXTERNAL MODULE: ../../node_modules/react-day-picker/dist/esm/index.js + 118 modules
var esm = __webpack_require__(343223);
// EXTERNAL MODULE: ../../packages/lib/cn.ts
var cn = __webpack_require__(983773);
;// ./modules/ui/components/calendar/index.tsx
/* __next_internal_client_entry_do_not_use__ Calendar auto */ 




const Calendar = ({ className, classNames, showOutsideDays = true, ...props })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime.jsx)(esm/* DayPicker */.hv, {
        showOutsideDays: showOutsideDays,
        className: (0,cn.cn)("p-3", className),
        classNames: {
            months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
            month: "space-y-4",
            caption: "flex justify-center pt-1 relative items-center",
            caption_label: "text-sm font-medium",
            nav: "space-x-1 flex items-center",
            nav_button: (0,cn.cn)("hover:text-slate-700 hover:bg-slate-200 flex justify-center items-center rounded-md transition-colors duration-150 ease-in-out h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"),
            nav_button_previous: "absolute left-1",
            nav_button_next: "absolute right-1",
            table: "w-full border-collapse space-y-1",
            head_row: "flex",
            head_cell: "text-slate-500 rounded-md w-9 font-normal text-[0.8rem]",
            row: "flex w-full mt-2",
            cell: "text-center text-sm p-0 relative [&:has([aria-selected])]:bg-slate-200 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
            day: (0,cn.cn)("hover:bg-slate-200 rounded-md p-0", "h-9 w-9 p-0 font-normal aria-selected:opacity-100 text-center"),
            day_selected: "bg-black text-white aria-selected:bg-black aria-selected:text-white",
            day_today: "bg-slate-200 aria-selected:bg-black aria-selected:text-white",
            day_outside: "text-slate-500 opacity-50",
            day_disabled: "text-slate-500 opacity-50 cursor-not-allowed",
            day_range_middle: "aria-selected:bg-slate-200",
            day_hidden: "invisible",
            ...classNames
        },
        components: {
            Chevron: (props)=>{
                if (props.orientation === "left") {
                    return /*#__PURE__*/ (0,react_jsx_runtime.jsx)(chevron_left/* default */.A, {
                        className: "h-4 w-4"
                    });
                } else if (props.orientation === "right") {
                    return /*#__PURE__*/ (0,react_jsx_runtime.jsx)(chevron_right/* default */.A, {
                        className: "h-4 w-4"
                    });
                }
                return /*#__PURE__*/ (0,react_jsx_runtime.jsx)(esm/* Chevron */.cL, {
                    ...props
                });
            }
        },
        ...props
    });
};
Calendar.displayName = "Calendar";

// EXTERNAL MODULE: ./modules/ui/components/dropdown-menu/index.tsx
var dropdown_menu = __webpack_require__(556825);
// EXTERNAL MODULE: ../../node_modules/@tolgee/react/dist/tolgee-react.esm.js
var tolgee_react_esm = __webpack_require__(397674);
// EXTERNAL MODULE: ../../node_modules/date-fns/differenceInDays.js
var differenceInDays = __webpack_require__(613547);
// EXTERNAL MODULE: ../../node_modules/date-fns/format.js + 7 modules
var format = __webpack_require__(73696);
// EXTERNAL MODULE: ../../node_modules/date-fns/startOfMonth.js
var startOfMonth = __webpack_require__(880681);
// EXTERNAL MODULE: ../../node_modules/date-fns/subMonths.js
var subMonths = __webpack_require__(799639);
// EXTERNAL MODULE: ../../node_modules/date-fns/endOfMonth.js
var endOfMonth = __webpack_require__(173098);
// EXTERNAL MODULE: ../../node_modules/date-fns/startOfQuarter.js
var startOfQuarter = __webpack_require__(37199);
// EXTERNAL MODULE: ../../node_modules/date-fns/endOfQuarter.js
var endOfQuarter = __webpack_require__(762980);
// EXTERNAL MODULE: ../../node_modules/date-fns/subQuarters.js + 1 modules
var subQuarters = __webpack_require__(903437);
// EXTERNAL MODULE: ../../node_modules/date-fns/startOfYear.js
var startOfYear = __webpack_require__(55814);
// EXTERNAL MODULE: ../../node_modules/date-fns/endOfYear.js
var endOfYear = __webpack_require__(560215);
// EXTERNAL MODULE: ../../node_modules/date-fns/subYears.js
var subYears = __webpack_require__(238036);
// EXTERNAL MODULE: ../../node_modules/date-fns/startOfDay.js
var startOfDay = __webpack_require__(848109);
// EXTERNAL MODULE: ../../node_modules/date-fns/subDays.js
var subDays = __webpack_require__(857223);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/chevron-up.js
var chevron_up = __webpack_require__(397903);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/chevron-down.js
var chevron_down = __webpack_require__(668382);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/arrow-down-to-line.js
var arrow_down_to_line = __webpack_require__(350503);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/download.js
var download = __webpack_require__(516940);
// EXTERNAL MODULE: ../../node_modules/next/dist/api/navigation.js
var navigation = __webpack_require__(470207);
// EXTERNAL MODULE: ../../node_modules/react-hot-toast/dist/index.mjs + 1 modules
var dist = __webpack_require__(986090);
// EXTERNAL MODULE: ../../packages/lib/utils/hooks/useClickOutside.ts
var useClickOutside = __webpack_require__(593827);
;// ../../node_modules/next/dist/build/webpack/loaders/next-flight-server-reference-proxy-loader.js?id=7ff28395ef910324905bcd03fc7f726a14fe4d60ec&name=getSurveyFilterDataAction!

const getSurveyFilterDataAction = /*#__PURE__*/(0,action_client_wrapper.createServerReference)("7ff28395ef910324905bcd03fc7f726a14fe4d60ec", action_client_wrapper.callServer, undefined, action_client_wrapper.findSourceMapURL, "getSurveyFilterDataAction")
// EXTERNAL MODULE: ./modules/ui/components/command/index.tsx
var command = __webpack_require__(454319);
// EXTERNAL MODULE: ../../node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(553626);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/x.js
var x = __webpack_require__(673766);
// EXTERNAL MODULE: ../../packages/lib/i18n/utils.ts
var utils = __webpack_require__(864698);
// EXTERNAL MODULE: ../../packages/types/surveys/types.ts + 3 modules
var types = __webpack_require__(102379);
;// ./app/(app)/environments/[environmentId]/surveys/[surveyId]/components/QuestionFilterComboBox.tsx
/* __next_internal_client_entry_do_not_use__ QuestionFilterComboBox auto */ 









const QuestionFilterComboBox = ({ filterComboBoxOptions, filterComboBoxValue, filterOptions, filterValue, onChangeFilterComboBoxValue, onChangeFilterValue, type, handleRemoveMultiSelect, disabled = false })=>{
    const [open, setOpen] = react.useState(false);
    const [openFilterValue, setOpenFilterValue] = react.useState(false);
    const commandRef = react.useRef(null);
    const defaultLanguageCode = "default";
    (0,useClickOutside/* useClickOutside */.L)(commandRef, ()=>setOpen(false));
    const { t } = (0,tolgee_react_esm/* useTranslate */.WD)();
    // multiple when question type is multi selection
    const isMultiple = type === types/* TSurveyQuestionTypeEnum */.wn.MultipleChoiceMulti || type === types/* TSurveyQuestionTypeEnum */.wn.MultipleChoiceSingle || type === types/* TSurveyQuestionTypeEnum */.wn.PictureSelection || type === types/* TSurveyQuestionTypeEnum */.wn.NPS && filterValue === "Includes either";
    // when question type is multi selection so we remove the option from the options which has been already selected
    const options = isMultiple ? filterComboBoxOptions?.filter((o)=>!filterComboBoxValue?.includes(typeof o === "object" ? (0,utils/* getLocalizedValue */.bT)(o, defaultLanguageCode) : o)) : filterComboBoxOptions;
    // disable the combo box for selection of value when question type is nps or rating and selected value is submitted or skipped
    const isDisabledComboBox = (type === types/* TSurveyQuestionTypeEnum */.wn.NPS || type === types/* TSurveyQuestionTypeEnum */.wn.Rating) && (filterValue === "Submitted" || filterValue === "Skipped");
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
        className: "inline-flex w-full flex-row",
        children: [
            filterOptions && filterOptions?.length <= 1 ? /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                className: "h-9 max-w-fit rounded-md rounded-r-none border-r-[1px] border-slate-300 bg-white p-2 text-sm text-slate-600",
                children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                    className: "mr-1 max-w-[50px] truncate text-slate-600 sm:max-w-[100px]",
                    children: filterValue
                })
            }) : /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(dropdown_menu/* DropdownMenu */.rI, {
                onOpenChange: (value)=>{
                    value && setOpen(false);
                    setOpenFilterValue(value);
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(dropdown_menu/* DropdownMenuTrigger */.ty, {
                        disabled: disabled,
                        className: (0,clsx/* default */.A)("h-9 max-w-fit rounded-md rounded-r-none border-r-[1px] border-slate-300 bg-white p-2 text-sm text-slate-600 focus:outline-transparent focus:ring-0", !disabled ? "cursor-pointer" : "opacity-50"),
                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                            className: "flex items-center justify-between",
                            children: [
                                !filterValue ? /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("p", {
                                    className: "text-slate-400",
                                    children: [
                                        t("common.select"),
                                        "..."
                                    ]
                                }) : /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                                    className: "mr-1 max-w-[50px] truncate text-slate-600 sm:max-w-[80px]",
                                    children: filterValue
                                }),
                                filterOptions && filterOptions.length > 1 && /*#__PURE__*/ (0,react_jsx_runtime.jsx)(react_jsx_runtime.Fragment, {
                                    children: openFilterValue ? /*#__PURE__*/ (0,react_jsx_runtime.jsx)(chevron_up/* default */.A, {
                                        className: "ml-2 h-4 w-4 opacity-50"
                                    }) : /*#__PURE__*/ (0,react_jsx_runtime.jsx)(chevron_down/* default */.A, {
                                        className: "ml-2 h-4 w-4 opacity-50"
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(dropdown_menu/* DropdownMenuContent */.SQ, {
                        className: "bg-white p-2",
                        children: filterOptions?.map((o, index)=>/*#__PURE__*/ (0,react_jsx_runtime.jsx)(dropdown_menu/* DropdownMenuItem */._2, {
                                className: "px-0.5 py-1 dark:bg-slate-700 dark:text-slate-300 dark:ring-slate-700",
                                onClick: ()=>onChangeFilterValue(o),
                                children: o
                            }, `${o}-${index}`))
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(command/* Command */.uB, {
                ref: commandRef,
                className: "h-10 overflow-visible bg-transparent",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                        onClick: ()=>!disabled && !isDisabledComboBox && filterValue && setOpen(true),
                        className: (0,clsx/* default */.A)("group flex items-center justify-between rounded-md rounded-l-none bg-white px-3 py-2 text-sm", disabled || isDisabledComboBox || !filterValue ? "opacity-50" : "cursor-pointer"),
                        children: [
                            filterComboBoxValue && filterComboBoxValue?.length > 0 ? !Array.isArray(filterComboBoxValue) ? /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                                className: "text-slate-600",
                                children: filterComboBoxValue
                            }) : /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                className: "no-scrollbar flex w-[7rem] gap-3 overflow-auto md:w-[10rem] lg:w-[18rem]",
                                children: typeof filterComboBoxValue !== "string" && filterComboBoxValue?.map((o, index)=>/*#__PURE__*/ (0,react_jsx_runtime.jsxs)("button", {
                                        type: "button",
                                        onClick: ()=>handleRemoveMultiSelect(filterComboBoxValue.filter((i)=>i !== o)),
                                        className: "w-30 flex items-center whitespace-nowrap bg-slate-100 px-2 text-slate-600",
                                        children: [
                                            o,
                                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(x/* default */.A, {
                                                width: 14,
                                                height: 14,
                                                className: "ml-2"
                                            })
                                        ]
                                    }, `${o}-${index}`))
                            }) : /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("p", {
                                className: "text-slate-400",
                                children: [
                                    t("common.select"),
                                    "..."
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                children: open ? /*#__PURE__*/ (0,react_jsx_runtime.jsx)(chevron_up/* default */.A, {
                                    className: "ml-2 h-4 w-4 opacity-50"
                                }) : /*#__PURE__*/ (0,react_jsx_runtime.jsx)(chevron_down/* default */.A, {
                                    className: "ml-2 h-4 w-4 opacity-50"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                        className: "relative mt-2 h-full",
                        children: open && /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                            className: "animate-in bg-popover absolute top-0 z-10 max-h-52 w-full overflow-auto rounded-md bg-white outline-none",
                            children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(command/* CommandList */.oI, {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(command/* CommandEmpty */.xL, {
                                        children: t("common.no_result_found")
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(command/* CommandGroup */.L$, {
                                        children: options?.map((o)=>/*#__PURE__*/ (0,react_jsx_runtime.jsx)(command/* CommandItem */.h_, {
                                                onSelect: ()=>{
                                                    !isMultiple ? onChangeFilterComboBoxValue(typeof o === "object" ? (0,utils/* getLocalizedValue */.bT)(o, defaultLanguageCode) : o) : onChangeFilterComboBoxValue(Array.isArray(filterComboBoxValue) ? [
                                                        ...filterComboBoxValue,
                                                        typeof o === "object" ? (0,utils/* getLocalizedValue */.bT)(o, defaultLanguageCode) : o
                                                    ] : [
                                                        typeof o === "object" ? (0,utils/* getLocalizedValue */.bT)(o, defaultLanguageCode) : o
                                                    ]);
                                                    !isMultiple && setOpen(false);
                                                },
                                                className: "cursor-pointer",
                                                children: typeof o === "object" ? (0,utils/* getLocalizedValue */.bT)(o, defaultLanguageCode) : o
                                            }))
                                    })
                                ]
                            })
                        })
                    })
                ]
            })
        ]
    });
};

;// ../../node_modules/next/dist/build/webpack/loaders/next-flight-server-reference-proxy-loader.js?id=7fe46bdcfbed76f5af3916a3d164c50653809a133a&name=getSurveyFilterDataBySurveySharingKeyAction!

const getSurveyFilterDataBySurveySharingKeyAction = /*#__PURE__*/(0,action_client_wrapper.createServerReference)("7fe46bdcfbed76f5af3916a3d164c50653809a133a", action_client_wrapper.callServer, undefined, action_client_wrapper.findSourceMapURL, "getSurveyFilterDataBySurveySharingKeyAction")
// EXTERNAL MODULE: ./modules/ui/components/button/index.tsx
var components_button = __webpack_require__(248852);
// EXTERNAL MODULE: ./modules/ui/components/checkbox/index.tsx
var components_checkbox = __webpack_require__(879387);
// EXTERNAL MODULE: ./modules/ui/components/popover/index.tsx
var popover = __webpack_require__(10015);
// EXTERNAL MODULE: ../../node_modules/@formkit/auto-animate/react/index.mjs + 1 modules
var auto_animate_react = __webpack_require__(611569);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/trash.js
var trash = __webpack_require__(721964);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/plus.js
var plus = __webpack_require__(108996);
// EXTERNAL MODULE: ./app/(app)/environments/[environmentId]/surveys/[surveyId]/components/QuestionsComboBox.tsx
var QuestionsComboBox = __webpack_require__(267779);
;// ./app/(app)/environments/[environmentId]/surveys/[surveyId]/components/ResponseFilter.tsx
/* __next_internal_client_entry_do_not_use__ ResponseFilter auto */ 















const ResponseFilter = ({ survey })=>{
    const { t } = (0,tolgee_react_esm/* useTranslate */.WD)();
    const params = (0,navigation.useParams)();
    const [parent] = (0,auto_animate_react/* useAutoAnimate */.Q)();
    const sharingKey = params.sharingKey;
    const isSharingPage = !!sharingKey;
    const { selectedFilter, setSelectedFilter, selectedOptions, setSelectedOptions } = (0,ResponseFilterContext/* useResponseFilter */.S)();
    const [isOpen, setIsOpen] = (0,react.useState)(false);
    const [filterValue, setFilterValue] = (0,react.useState)(selectedFilter);
    (0,react.useEffect)(()=>{
        // Fetch the initial data for the filter and load it into the state
        const handleInitialData = async ()=>{
            if (isOpen) {
                const surveyFilterData = isSharingPage ? await getSurveyFilterDataBySurveySharingKeyAction({
                    sharingKey,
                    environmentId: survey.environmentId
                }) : await getSurveyFilterDataAction({
                    surveyId: survey.id
                });
                if (!surveyFilterData?.data) return;
                const { attributes, meta, environmentTags, hiddenFields } = surveyFilterData.data;
                const { questionFilterOptions, questionOptions } = (0,surveys/* generateQuestionAndFilterOptions */.nl)(survey, environmentTags, attributes, meta, hiddenFields);
                setSelectedOptions({
                    questionFilterOptions,
                    questionOptions
                });
            }
        };
        handleInitialData();
    }, [
        isOpen,
        isSharingPage,
        setSelectedOptions,
        sharingKey,
        survey
    ]);
    const handleOnChangeQuestionComboBoxValue = (value, index)=>{
        if (filterValue.filter[index].questionType) {
            // Create a new array and copy existing values from SelectedFilter
            filterValue.filter[index] = {
                questionType: value,
                filterType: {
                    filterComboBoxValue: undefined,
                    filterValue: selectedOptions.questionFilterOptions.find((q)=>q.type === value.type || q.type === value.questionType)?.filterOptions[0]
                }
            };
            setFilterValue({
                filter: [
                    ...filterValue.filter
                ],
                onlyComplete: filterValue.onlyComplete
            });
        } else {
            // Update the existing value at the specified index
            filterValue.filter[index].questionType = value;
            filterValue.filter[index].filterType = {
                filterComboBoxValue: undefined,
                filterValue: selectedOptions.questionFilterOptions.find((q)=>q.type === value.type || q.type === value.questionType)?.filterOptions[0]
            };
            setFilterValue({
                ...filterValue
            });
        }
    };
    // when filter is opened and added a filter without selecting any option clear out that value
    const clearItem = ()=>{
        setFilterValue({
            filter: filterValue.filter.filter((s)=>{
                // keep the filter if questionType is selected and filterComboBoxValue is selected
                return s.questionType.hasOwnProperty("label") && s.filterType.filterComboBoxValue?.length;
            }),
            onlyComplete: filterValue.onlyComplete
        });
    };
    // remove the added filter if nothing is selected when filter is closed
    (0,react.useEffect)(()=>{
        if (!isOpen) {
            clearItem();
            handleApplyFilters();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        isOpen
    ]);
    const handleAddNewFilter = ()=>{
        setFilterValue({
            ...filterValue,
            filter: [
                ...filterValue.filter,
                {
                    questionType: {},
                    filterType: {
                        filterComboBoxValue: undefined,
                        filterValue: undefined
                    }
                }
            ]
        });
    };
    const handleClearAllFilters = ()=>{
        setFilterValue((filterValue)=>({
                ...filterValue,
                filter: []
            }));
        setSelectedFilter((selectedFilters)=>({
                ...selectedFilters,
                filter: []
            }));
        setIsOpen(false);
    };
    const handleDeleteFilter = (index)=>{
        filterValue.filter.splice(index, 1);
        setFilterValue({
            ...filterValue
        });
    };
    const handleOnChangeFilterComboBoxValue = (o, index)=>{
        filterValue.filter[index] = {
            ...filterValue.filter[index],
            filterType: {
                filterComboBoxValue: o,
                filterValue: filterValue.filter[index].filterType.filterValue
            }
        };
        setFilterValue({
            ...filterValue
        });
    };
    const handleOnChangeFilterValue = (o, index)=>{
        filterValue.filter[index] = {
            ...filterValue.filter[index],
            filterType: {
                filterComboBoxValue: undefined,
                filterValue: o
            }
        };
        setFilterValue({
            ...filterValue
        });
    };
    const handleRemoveMultiSelect = (value, index)=>{
        filterValue.filter[index] = {
            ...filterValue.filter[index],
            filterType: {
                filterComboBoxValue: value,
                filterValue: filterValue.filter[index].filterType.filterValue
            }
        };
        setFilterValue({
            ...filterValue
        });
    };
    const handleCheckOnlyComplete = (checked)=>{
        setFilterValue({
            ...filterValue,
            onlyComplete: checked
        });
    };
    // remove the filter which has already been selected
    const questionComboBoxOptions = selectedOptions.questionOptions.map((q)=>{
        return {
            ...q,
            option: q.option.filter((o)=>!filterValue.filter.some((f)=>f?.questionType?.id === o?.id))
        };
    });
    const handleApplyFilters = ()=>{
        clearItem();
        setSelectedFilter(filterValue);
        setIsOpen(false);
    };
    const handleOpenChange = (open)=>{
        if (!open) {
            handleApplyFilters();
        }
        setIsOpen(open);
    };
    (0,react.useEffect)(()=>{
        setFilterValue(selectedFilter);
    }, [
        selectedFilter
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(popover/* Popover */.AM, {
        open: isOpen,
        onOpenChange: handleOpenChange,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(popover/* PopoverTrigger */.Wv, {
                className: "flex min-w-[8rem] items-center justify-between rounded border border-slate-200 bg-white p-3 text-sm text-slate-600 hover:border-slate-300 sm:min-w-[11rem] sm:px-6 sm:py-3",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("span", {
                        children: [
                            "Filter ",
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("b", {
                                children: filterValue.filter.length > 0 && `(${filterValue.filter.length})`
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                        className: "ml-3",
                        children: isOpen ? /*#__PURE__*/ (0,react_jsx_runtime.jsx)(chevron_up/* default */.A, {
                            className: "ml-2 h-4 w-4 opacity-50"
                        }) : /*#__PURE__*/ (0,react_jsx_runtime.jsx)(chevron_down/* default */.A, {
                            className: "ml-2 h-4 w-4 opacity-50"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(popover/* PopoverContent */.hl, {
                align: "start",
                className: "w-[300px] border-slate-200 bg-slate-100 p-6 sm:w-[400px] md:w-[750px] lg:w-[1000px]",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                        className: "mb-8 flex flex-wrap items-start justify-between",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                                className: "text-slate800 hidden text-lg font-semibold sm:block",
                                children: t("environments.surveys.summary.show_all_responses_that_match")
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                                className: "block text-base text-slate-500 sm:hidden",
                                children: t("environments.surveys.summary.show_all_responses_where")
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                className: "flex items-center space-x-2",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("label", {
                                        className: "text-sm font-normal text-slate-600",
                                        children: t("environments.surveys.summary.only_completed")
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_checkbox/* Checkbox */.S, {
                                        className: (0,clsx/* default */.A)("rounded-md", filterValue.onlyComplete && "bg-black text-white"),
                                        checked: filterValue.onlyComplete,
                                        onCheckedChange: (checked)=>{
                                            typeof checked === "boolean" && handleCheckOnlyComplete(checked);
                                        }
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                        ref: parent,
                        children: filterValue.filter?.map((s, i)=>/*#__PURE__*/ (0,react_jsx_runtime.jsxs)((react_default()).Fragment, {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                        className: "flex w-full flex-wrap gap-3 md:flex-nowrap",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                                className: "grid w-full grid-cols-1 items-center gap-3 md:grid-cols-2",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(QuestionsComboBox/* QuestionsComboBox */.r, {
                                                        options: questionComboBoxOptions,
                                                        selected: s.questionType,
                                                        onChangeValue: (value)=>handleOnChangeQuestionComboBoxValue(value, i)
                                                    }, `${s.questionType.label}-${i}`),
                                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(QuestionFilterComboBox, {
                                                        filterOptions: selectedOptions.questionFilterOptions.find((q)=>(q.type === s.questionType.questionType || q.type === s.questionType.type) && q.id === s.questionType.id)?.filterOptions,
                                                        filterComboBoxOptions: selectedOptions.questionFilterOptions.find((q)=>(q.type === s.questionType.questionType || q.type === s.questionType.type) && q.id === s.questionType.id)?.filterComboBoxOptions,
                                                        filterValue: filterValue.filter[i].filterType.filterValue,
                                                        filterComboBoxValue: filterValue.filter[i].filterType.filterComboBoxValue,
                                                        type: s?.questionType?.type === QuestionsComboBox/* OptionsType */.T.QUESTIONS ? s?.questionType?.questionType : s?.questionType?.type,
                                                        handleRemoveMultiSelect: (value)=>handleRemoveMultiSelect(value, i),
                                                        onChangeFilterComboBoxValue: (value)=>handleOnChangeFilterComboBoxValue(value, i),
                                                        onChangeFilterValue: (value)=>handleOnChangeFilterValue(value, i),
                                                        disabled: !s?.questionType?.label
                                                    }, `${s.questionType.id}-${i}`)
                                                ]
                                            }, `${s.questionType.id}-${i}`),
                                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                                className: "flex w-full items-center justify-end gap-1 md:w-auto",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                                                        className: "block font-light text-slate-500 md:hidden",
                                                        children: "Delete"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(trash/* default */.A, {
                                                        className: "w-4 cursor-pointer text-slate-500 md:text-black",
                                                        onClick: ()=>handleDeleteFilter(i)
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    i !== filterValue.filter.length - 1 && /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                        className: "my-6 flex items-center",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                                                className: "mr-6 text-base text-slate-600",
                                                children: "And"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("hr", {
                                                className: "w-full text-slate-600"
                                            })
                                        ]
                                    })
                                ]
                            }, i))
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                        className: "mt-8 flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(components_button/* Button */.$, {
                                size: "sm",
                                variant: "secondary",
                                onClick: handleAddNewFilter,
                                children: [
                                    t("common.add_filter"),
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(plus/* default */.A, {
                                        width: 18,
                                        height: 18,
                                        className: "ml-2"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                className: "flex gap-2",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_button/* Button */.$, {
                                        size: "sm",
                                        onClick: handleApplyFilters,
                                        children: t("common.apply_filters")
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_button/* Button */.$, {
                                        size: "sm",
                                        variant: "ghost",
                                        onClick: handleClearAllFilters,
                                        children: t("common.clear_all")
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};

;// ./app/(app)/environments/[environmentId]/surveys/[surveyId]/components/CustomFilter.tsx
/* __next_internal_client_entry_do_not_use__ CustomFilter auto */ 














var DateSelected = /*#__PURE__*/ function(DateSelected) {
    DateSelected["FROM"] = "common.from";
    DateSelected["TO"] = "common.to";
    return DateSelected;
}(DateSelected || {});
var FilterDownload = /*#__PURE__*/ function(FilterDownload) {
    FilterDownload["ALL"] = "common.all";
    FilterDownload["FILTER"] = "common.filter";
    return FilterDownload;
}(FilterDownload || {});
const getFilterDropDownLabels = (t)=>({
        ALL_TIME: t("environments.surveys.summary.all_time"),
        LAST_7_DAYS: t("environments.surveys.summary.last_7_days"),
        LAST_30_DAYS: t("environments.surveys.summary.last_30_days"),
        THIS_MONTH: t("environments.surveys.summary.this_month"),
        LAST_MONTH: t("environments.surveys.summary.last_month"),
        LAST_6_MONTHS: t("environments.surveys.summary.last_6_months"),
        THIS_QUARTER: t("environments.surveys.summary.this_quarter"),
        LAST_QUARTER: t("environments.surveys.summary.last_quarter"),
        THIS_YEAR: t("environments.surveys.summary.this_year"),
        LAST_YEAR: t("environments.surveys.summary.last_year"),
        CUSTOM_RANGE: t("environments.surveys.summary.custom_range")
    });
const getDateRangeLabel = (from, to, t)=>{
    const dateRanges = [
        {
            label: getFilterDropDownLabels(t).LAST_7_DAYS,
            matches: ()=>(0,differenceInDays/* differenceInDays */.c)(to, from) === 7
        },
        {
            label: getFilterDropDownLabels(t).LAST_30_DAYS,
            matches: ()=>(0,differenceInDays/* differenceInDays */.c)(to, from) === 30
        },
        {
            label: getFilterDropDownLabels(t).THIS_MONTH,
            matches: ()=>(0,format/* format */.GP)(from, "yyyy-MM-dd") === (0,format/* format */.GP)((0,startOfMonth/* startOfMonth */.w)(new Date()), "yyyy-MM-dd") && (0,format/* format */.GP)(to, "yyyy-MM-dd") === (0,format/* format */.GP)((0,surveys/* getTodayDate */.ak)(), "yyyy-MM-dd")
        },
        {
            label: getFilterDropDownLabels(t).LAST_MONTH,
            matches: ()=>(0,format/* format */.GP)(from, "yyyy-MM-dd") === (0,format/* format */.GP)((0,startOfMonth/* startOfMonth */.w)((0,subMonths/* subMonths */.a)(new Date(), 1)), "yyyy-MM-dd") && (0,format/* format */.GP)(to, "yyyy-MM-dd") === (0,format/* format */.GP)((0,endOfMonth/* endOfMonth */.p)((0,subMonths/* subMonths */.a)((0,surveys/* getTodayDate */.ak)(), 1)), "yyyy-MM-dd")
        },
        {
            label: getFilterDropDownLabels(t).LAST_6_MONTHS,
            matches: ()=>(0,format/* format */.GP)(from, "yyyy-MM-dd") === (0,format/* format */.GP)((0,startOfMonth/* startOfMonth */.w)((0,subMonths/* subMonths */.a)(new Date(), 6)), "yyyy-MM-dd") && (0,format/* format */.GP)(to, "yyyy-MM-dd") === (0,format/* format */.GP)((0,endOfMonth/* endOfMonth */.p)((0,surveys/* getTodayDate */.ak)()), "yyyy-MM-dd")
        },
        {
            label: getFilterDropDownLabels(t).THIS_QUARTER,
            matches: ()=>(0,format/* format */.GP)(from, "yyyy-MM-dd") === (0,format/* format */.GP)((0,startOfQuarter/* startOfQuarter */.a)(new Date()), "yyyy-MM-dd") && (0,format/* format */.GP)(to, "yyyy-MM-dd") === (0,format/* format */.GP)((0,endOfQuarter/* endOfQuarter */.j)((0,surveys/* getTodayDate */.ak)()), "yyyy-MM-dd")
        },
        {
            label: getFilterDropDownLabels(t).LAST_QUARTER,
            matches: ()=>(0,format/* format */.GP)(from, "yyyy-MM-dd") === (0,format/* format */.GP)((0,startOfQuarter/* startOfQuarter */.a)((0,subQuarters/* subQuarters */.c)(new Date(), 1)), "yyyy-MM-dd") && (0,format/* format */.GP)(to, "yyyy-MM-dd") === (0,format/* format */.GP)((0,endOfQuarter/* endOfQuarter */.j)((0,subQuarters/* subQuarters */.c)((0,surveys/* getTodayDate */.ak)(), 1)), "yyyy-MM-dd")
        },
        {
            label: getFilterDropDownLabels(t).THIS_YEAR,
            matches: ()=>(0,format/* format */.GP)(from, "yyyy-MM-dd") === (0,format/* format */.GP)((0,startOfYear/* startOfYear */.D)(new Date()), "yyyy-MM-dd") && (0,format/* format */.GP)(to, "yyyy-MM-dd") === (0,format/* format */.GP)((0,endOfYear/* endOfYear */.Q)((0,surveys/* getTodayDate */.ak)()), "yyyy-MM-dd")
        },
        {
            label: getFilterDropDownLabels(t).LAST_YEAR,
            matches: ()=>(0,format/* format */.GP)(from, "yyyy-MM-dd") === (0,format/* format */.GP)((0,startOfYear/* startOfYear */.D)((0,subYears/* subYears */.d)(new Date(), 1)), "yyyy-MM-dd") && (0,format/* format */.GP)(to, "yyyy-MM-dd") === (0,format/* format */.GP)((0,endOfYear/* endOfYear */.Q)((0,subYears/* subYears */.d)((0,surveys/* getTodayDate */.ak)(), 1)), "yyyy-MM-dd")
        }
    ];
    const matchedRange = dateRanges.find((range)=>range.matches());
    return matchedRange ? matchedRange.label : getFilterDropDownLabels(t).CUSTOM_RANGE;
};
const CustomFilter = ({ survey })=>{
    const params = (0,navigation.useParams)();
    const isSharingPage = !!params.sharingKey;
    const { t } = (0,tolgee_react_esm/* useTranslate */.WD)();
    const { selectedFilter, dateRange, setDateRange, resetState } = (0,ResponseFilterContext/* useResponseFilter */.S)();
    const [filterRange, setFilterRange] = (0,react.useState)(dateRange.from && dateRange.to ? getDateRangeLabel(dateRange.from, dateRange.to, t) : getFilterDropDownLabels(t).ALL_TIME);
    const [selectingDate, setSelectingDate] = (0,react.useState)("common.from");
    const [isDatePickerOpen, setIsDatePickerOpen] = (0,react.useState)(false);
    const [isFilterDropDownOpen, setIsFilterDropDownOpen] = (0,react.useState)(false);
    const [hoveredRange, setHoveredRange] = (0,react.useState)(null);
    const firstMountRef = (0,react.useRef)(true);
    (0,react.useEffect)(()=>{
        if (!firstMountRef.current) {
            firstMountRef.current = false;
            return;
        }
    }, []);
    (0,react.useEffect)(()=>{
        if (!firstMountRef.current) {
            resetState();
        }
    }, [
        survey?.id,
        resetState
    ]);
    const filters = (0,react.useMemo)(()=>(0,surveys/* getFormattedFilters */.QR)(survey, selectedFilter, dateRange), // eslint-disable-next-line react-hooks/exhaustive-deps
    [
        selectedFilter,
        dateRange
    ]);
    const datePickerRef = (0,react.useRef)(null);
    const extracMetadataKeys = (0,react.useCallback)((obj, parentKey = "")=>{
        let keys = [];
        for(let key in obj){
            if (typeof obj[key] === "object" && obj[key] !== null) {
                keys = keys.concat(extracMetadataKeys(obj[key], parentKey + key + " - "));
            } else {
                keys.push(parentKey + key);
            }
        }
        return keys;
    }, []);
    const handleDateHoveredChange = (date)=>{
        if (selectingDate === "common.from") {
            const startOfRange = new Date(date);
            startOfRange.setHours(0, 0, 0, 0); // Set to the start of the selected day
            // Check if the selected date is after the current 'to' date
            if (startOfRange > dateRange?.to) {
                return;
            } else {
                setHoveredRange({
                    from: startOfRange,
                    to: dateRange.to
                });
            }
        } else {
            const endOfRange = new Date(date);
            endOfRange.setHours(23, 59, 59, 999); // Set to the end of the selected day
            // Check if the selected date is before the current 'from' date
            if (endOfRange < dateRange?.from) {
                return;
            } else {
                setHoveredRange({
                    from: dateRange.from,
                    to: endOfRange
                });
            }
        }
    };
    const handleDateChange = (date)=>{
        if (selectingDate === "common.from") {
            const startOfRange = new Date(date);
            startOfRange.setHours(0, 0, 0, 0); // Set to the start of the selected day
            // Check if the selected date is after the current 'to' date
            if (startOfRange > dateRange?.to) {
                const nextDay = new Date(startOfRange);
                nextDay.setDate(nextDay.getDate() + 1);
                nextDay.setHours(23, 59, 59, 999);
                setDateRange({
                    from: startOfRange,
                    to: nextDay
                });
            } else {
                setDateRange((prevData)=>({
                        from: startOfRange,
                        to: prevData.to
                    }));
            }
            setSelectingDate("common.to");
        } else {
            const endOfRange = new Date(date);
            endOfRange.setHours(23, 59, 59, 999); // Set to the end of the selected day
            // Check if the selected date is before the current 'from' date
            if (endOfRange < dateRange?.from) {
                const previousDay = new Date(endOfRange);
                previousDay.setDate(previousDay.getDate() - 1);
                previousDay.setHours(0, 0, 0, 0); // Set to the start of the selected day
                setDateRange({
                    from: previousDay,
                    to: endOfRange
                });
            } else {
                setDateRange((prevData)=>({
                        from: prevData?.from,
                        to: endOfRange
                    }));
            }
            setIsDatePickerOpen(false);
            setSelectingDate("common.from");
        }
    };
    const handleDatePickerClose = ()=>{
        setIsDatePickerOpen(false);
        setSelectingDate("common.from");
    };
    const handleDowndloadResponses = async (filter, filetype)=>{
        try {
            const responseFilters = filter === "common.all" ? {} : filters;
            const responsesDownloadUrlResponse = await getResponsesDownloadUrlAction({
                surveyId: survey.id,
                format: filetype,
                filterCriteria: responseFilters
            });
            if (responsesDownloadUrlResponse?.data) {
                const link = document.createElement("a");
                link.href = responsesDownloadUrlResponse.data;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            } else {
                const errorMessage = (0,helper/* getFormattedErrorMessage */.g3)(responsesDownloadUrlResponse);
                dist/* default */.Ay.error(errorMessage);
            }
        } catch (error) {
            dist/* default */.Ay.error("Error downloading responses");
        }
    };
    (0,useClickOutside/* useClickOutside */.L)(datePickerRef, ()=>handleDatePickerClose());
    return /*#__PURE__*/ (0,react_jsx_runtime.jsx)(react_jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
            className: "relative flex justify-between",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                    className: "flex justify-stretch gap-x-1.5",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)(ResponseFilter, {
                            survey: survey
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(dropdown_menu/* DropdownMenu */.rI, {
                            onOpenChange: (value)=>{
                                value && handleDatePickerClose();
                                setIsFilterDropDownOpen(value);
                            },
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(dropdown_menu/* DropdownMenuTrigger */.ty, {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                        className: "flex min-w-[8rem] items-center justify-between rounded-md border border-slate-200 bg-white p-3 hover:border-slate-300 sm:min-w-[11rem] sm:px-6 sm:py-3",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("span", {
                                                className: "text-sm text-slate-700",
                                                children: filterRange === getFilterDropDownLabels(t).CUSTOM_RANGE ? `${dateRange?.from ? (0,format/* format */.GP)(dateRange?.from, "dd LLL") : "Select first date"} - ${dateRange?.to ? (0,format/* format */.GP)(dateRange.to, "dd LLL") : "Select last date"}` : t(filterRange)
                                            }),
                                            isFilterDropDownOpen ? /*#__PURE__*/ (0,react_jsx_runtime.jsx)(chevron_up/* default */.A, {
                                                className: "ml-2 h-4 w-4 opacity-50"
                                            }) : /*#__PURE__*/ (0,react_jsx_runtime.jsx)(chevron_down/* default */.A, {
                                                className: "ml-2 h-4 w-4 opacity-50"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(dropdown_menu/* DropdownMenuContent */.SQ, {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)(dropdown_menu/* DropdownMenuItem */._2, {
                                            onClick: ()=>{
                                                setFilterRange(getFilterDropDownLabels(t).ALL_TIME);
                                                setDateRange({
                                                    from: undefined,
                                                    to: (0,surveys/* getTodayDate */.ak)()
                                                });
                                            },
                                            children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                                                className: "text-slate-700",
                                                children: t(getFilterDropDownLabels(t).ALL_TIME)
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)(dropdown_menu/* DropdownMenuItem */._2, {
                                            onClick: ()=>{
                                                setFilterRange(getFilterDropDownLabels(t).LAST_7_DAYS);
                                                setDateRange({
                                                    from: (0,startOfDay/* startOfDay */.o)((0,subDays/* subDays */.e)(new Date(), 7)),
                                                    to: (0,surveys/* getTodayDate */.ak)()
                                                });
                                            },
                                            children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                                                className: "text-slate-700",
                                                children: t(getFilterDropDownLabels(t).LAST_7_DAYS)
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)(dropdown_menu/* DropdownMenuItem */._2, {
                                            onClick: ()=>{
                                                setFilterRange(getFilterDropDownLabels(t).LAST_30_DAYS);
                                                setDateRange({
                                                    from: (0,startOfDay/* startOfDay */.o)((0,subDays/* subDays */.e)(new Date(), 30)),
                                                    to: (0,surveys/* getTodayDate */.ak)()
                                                });
                                            },
                                            children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                                                className: "text-slate-700",
                                                children: t(getFilterDropDownLabels(t).LAST_30_DAYS)
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)(dropdown_menu/* DropdownMenuItem */._2, {
                                            onClick: ()=>{
                                                setFilterRange(getFilterDropDownLabels(t).THIS_MONTH);
                                                setDateRange({
                                                    from: (0,startOfMonth/* startOfMonth */.w)(new Date()),
                                                    to: (0,surveys/* getTodayDate */.ak)()
                                                });
                                            },
                                            children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                                                className: "text-slate-700",
                                                children: t(getFilterDropDownLabels(t).THIS_MONTH)
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)(dropdown_menu/* DropdownMenuItem */._2, {
                                            onClick: ()=>{
                                                setFilterRange(getFilterDropDownLabels(t).LAST_MONTH);
                                                setDateRange({
                                                    from: (0,startOfMonth/* startOfMonth */.w)((0,subMonths/* subMonths */.a)(new Date(), 1)),
                                                    to: (0,endOfMonth/* endOfMonth */.p)((0,subMonths/* subMonths */.a)((0,surveys/* getTodayDate */.ak)(), 1))
                                                });
                                            },
                                            children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                                                className: "text-slate-700",
                                                children: t(getFilterDropDownLabels(t).LAST_MONTH)
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)(dropdown_menu/* DropdownMenuItem */._2, {
                                            onClick: ()=>{
                                                setFilterRange(getFilterDropDownLabels(t).THIS_QUARTER);
                                                setDateRange({
                                                    from: (0,startOfQuarter/* startOfQuarter */.a)(new Date()),
                                                    to: (0,endOfQuarter/* endOfQuarter */.j)((0,surveys/* getTodayDate */.ak)())
                                                });
                                            },
                                            children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                                                className: "text-slate-700",
                                                children: t(getFilterDropDownLabels(t).THIS_QUARTER)
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)(dropdown_menu/* DropdownMenuItem */._2, {
                                            onClick: ()=>{
                                                setFilterRange(getFilterDropDownLabels(t).LAST_QUARTER);
                                                setDateRange({
                                                    from: (0,startOfQuarter/* startOfQuarter */.a)((0,subQuarters/* subQuarters */.c)(new Date(), 1)),
                                                    to: (0,endOfQuarter/* endOfQuarter */.j)((0,subQuarters/* subQuarters */.c)((0,surveys/* getTodayDate */.ak)(), 1))
                                                });
                                            },
                                            children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                                                className: "text-slate-700",
                                                children: t(getFilterDropDownLabels(t).LAST_QUARTER)
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)(dropdown_menu/* DropdownMenuItem */._2, {
                                            onClick: ()=>{
                                                setFilterRange(getFilterDropDownLabels(t).LAST_6_MONTHS);
                                                setDateRange({
                                                    from: (0,startOfMonth/* startOfMonth */.w)((0,subMonths/* subMonths */.a)(new Date(), 6)),
                                                    to: (0,endOfMonth/* endOfMonth */.p)((0,surveys/* getTodayDate */.ak)())
                                                });
                                            },
                                            children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                                                className: "text-slate-700",
                                                children: t(getFilterDropDownLabels(t).LAST_6_MONTHS)
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)(dropdown_menu/* DropdownMenuItem */._2, {
                                            onClick: ()=>{
                                                setFilterRange(getFilterDropDownLabels(t).THIS_YEAR);
                                                setDateRange({
                                                    from: (0,startOfYear/* startOfYear */.D)(new Date()),
                                                    to: (0,endOfYear/* endOfYear */.Q)((0,surveys/* getTodayDate */.ak)())
                                                });
                                            },
                                            children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                                                className: "text-slate-700",
                                                children: t(getFilterDropDownLabels(t).THIS_YEAR)
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)(dropdown_menu/* DropdownMenuItem */._2, {
                                            onClick: ()=>{
                                                setFilterRange(getFilterDropDownLabels(t).LAST_YEAR);
                                                setDateRange({
                                                    from: (0,startOfYear/* startOfYear */.D)((0,subYears/* subYears */.d)(new Date(), 1)),
                                                    to: (0,endOfYear/* endOfYear */.Q)((0,subYears/* subYears */.d)((0,surveys/* getTodayDate */.ak)(), 1))
                                                });
                                            },
                                            children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                                                className: "text-slate-700",
                                                children: t(getFilterDropDownLabels(t).LAST_YEAR)
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)(dropdown_menu/* DropdownMenuItem */._2, {
                                            onClick: ()=>{
                                                setIsDatePickerOpen(true);
                                                setFilterRange(getFilterDropDownLabels(t).CUSTOM_RANGE);
                                                setSelectingDate("common.from");
                                            },
                                            children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                                                className: "text-sm text-slate-700 hover:ring-0",
                                                children: t(getFilterDropDownLabels(t).CUSTOM_RANGE)
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        !isSharingPage && /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(dropdown_menu/* DropdownMenu */.rI, {
                            onOpenChange: (value)=>{
                                value && handleDatePickerClose();
                            },
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(dropdown_menu/* DropdownMenuTrigger */.ty, {
                                    asChild: true,
                                    className: "focus:bg-muted cursor-pointer outline-none",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                        className: "min-w-auto h-auto rounded-md border border-slate-200 bg-white p-3 hover:border-slate-300 sm:flex sm:px-6 sm:py-3",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                                className: "hidden w-full items-center justify-between sm:flex",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("span", {
                                                        className: "text-sm text-slate-700",
                                                        children: t("common.download")
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(arrow_down_to_line/* default */.A, {
                                                        className: "ml-2 h-4 w-4"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(download/* default */.A, {
                                                className: "block h-4 sm:hidden"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(dropdown_menu/* DropdownMenuContent */.SQ, {
                                    align: "start",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)(dropdown_menu/* DropdownMenuItem */._2, {
                                            onClick: ()=>{
                                                handleDowndloadResponses("common.all", "csv");
                                            },
                                            children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                                                className: "text-slate-700",
                                                children: t("environments.surveys.summary.all_responses_csv")
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)(dropdown_menu/* DropdownMenuItem */._2, {
                                            onClick: ()=>{
                                                handleDowndloadResponses("common.all", "xlsx");
                                            },
                                            children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                                                className: "text-slate-700",
                                                children: t("environments.surveys.summary.all_responses_excel")
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)(dropdown_menu/* DropdownMenuItem */._2, {
                                            onClick: ()=>{
                                                handleDowndloadResponses("common.filter", "csv");
                                            },
                                            children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                                                className: "text-slate-700",
                                                children: t("environments.surveys.summary.current_selection_csv")
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)(dropdown_menu/* DropdownMenuItem */._2, {
                                            onClick: ()=>{
                                                handleDowndloadResponses("common.filter", "xlsx");
                                            },
                                            children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                                                className: "text-slate-700",
                                                children: t("environments.surveys.summary.current_selection_excel")
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                isDatePickerOpen && /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                    ref: datePickerRef,
                    className: "absolute top-full z-50 my-2 rounded-md border bg-white",
                    children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(Calendar, {
                        autoFocus: true,
                        mode: "range",
                        defaultMonth: dateRange?.from,
                        selected: hoveredRange ? hoveredRange : dateRange,
                        numberOfMonths: 2,
                        onDayClick: (date)=>handleDateChange(date),
                        onDayMouseEnter: handleDateHoveredChange,
                        onDayMouseLeave: ()=>setHoveredRange(null),
                        classNames: {
                            day_today: "hover:bg-slate-200 bg-white"
                        }
                    })
                })
            ]
        })
    });
};


/***/ }),

/***/ 412643:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  k: () => (/* binding */ ResultsShareButton)
});

// EXTERNAL MODULE: ../../node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js
var react_jsx_runtime = __webpack_require__(642725);
// EXTERNAL MODULE: ../../node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js
var action_client_wrapper = __webpack_require__(308441);
;// ../../node_modules/next/dist/build/webpack/loaders/next-flight-server-reference-proxy-loader.js?id=7fa4f19ab4986af355f71ff25dc7d879f955f45fc0&name=generateResultShareUrlAction!

const generateResultShareUrlAction = /*#__PURE__*/(0,action_client_wrapper.createServerReference)("7fa4f19ab4986af355f71ff25dc7d879f955f45fc0", action_client_wrapper.callServer, undefined, action_client_wrapper.findSourceMapURL, "generateResultShareUrlAction")
;// ../../node_modules/next/dist/build/webpack/loaders/next-flight-server-reference-proxy-loader.js?id=7fc832ebe26c06e3d1b70d8cde4d8813ce90197707&name=deleteResultShareUrlAction!

const deleteResultShareUrlAction = /*#__PURE__*/(0,action_client_wrapper.createServerReference)("7fc832ebe26c06e3d1b70d8cde4d8813ce90197707", action_client_wrapper.callServer, undefined, action_client_wrapper.findSourceMapURL, "deleteResultShareUrlAction")
;// ../../node_modules/next/dist/build/webpack/loaders/next-flight-server-reference-proxy-loader.js?id=7f5389f29d7c7d5592a4111508b6188a3a279edb58&name=getResultShareUrlAction!

const getResultShareUrlAction = /*#__PURE__*/(0,action_client_wrapper.createServerReference)("7f5389f29d7c7d5592a4111508b6188a3a279edb58", action_client_wrapper.callServer, undefined, action_client_wrapper.findSourceMapURL, "getResultShareUrlAction")
// EXTERNAL MODULE: ./lib/utils/helper.ts
var helper = __webpack_require__(856763);
// EXTERNAL MODULE: ./modules/ui/components/dropdown-menu/index.tsx
var dropdown_menu = __webpack_require__(556825);
// EXTERNAL MODULE: ../../node_modules/@tolgee/react/dist/tolgee-react.esm.js
var tolgee_react_esm = __webpack_require__(397674);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/link.js
var icons_link = __webpack_require__(415140);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/download.js
var download = __webpack_require__(516940);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/copy.js
var copy = __webpack_require__(875677);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/globe.js
var globe = __webpack_require__(103635);
// EXTERNAL MODULE: ../../node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js
var react = __webpack_require__(891616);
// EXTERNAL MODULE: ../../node_modules/react-hot-toast/dist/index.mjs + 1 modules
var dist = __webpack_require__(986090);
// EXTERNAL MODULE: ./modules/ui/components/button/index.tsx
var components_button = __webpack_require__(248852);
// EXTERNAL MODULE: ./modules/ui/components/modal/index.tsx
var modal = __webpack_require__(383207);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/circle-check.js
var circle_check = __webpack_require__(794669);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/circle-alert.js
var circle_alert = __webpack_require__(88515);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/clipboard.js
var clipboard = __webpack_require__(724552);
// EXTERNAL MODULE: ../../node_modules/next/dist/client/app-dir/link.js
var app_dir_link = __webpack_require__(36888);
var link_default = /*#__PURE__*/__webpack_require__.n(app_dir_link);
;// ./app/(app)/environments/[environmentId]/surveys/[surveyId]/(analysis)/summary/components/ShareSurveyResults.tsx
/* __next_internal_client_entry_do_not_use__ ShareSurveyResults auto */ 







const ShareSurveyResults = ({ open, setOpen, handlePublish, handleUnpublish, showPublishModal, surveyUrl })=>{
    const { t } = (0,tolgee_react_esm/* useTranslate */.WD)();
    return /*#__PURE__*/ (0,react_jsx_runtime.jsx)(modal/* Modal */.a, {
        open: open,
        setOpen: setOpen,
        size: "lg",
        children: showPublishModal && surveyUrl ? /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
            className: "flex flex-col rounded-2xl bg-white px-12 py-6",
            children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                className: "flex flex-col items-center gap-y-6 text-center",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(circle_check/* default */.A, {
                        className: "h-20 w-20 text-slate-300"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                                className: "text-lg font-medium text-slate-600",
                                children: t("environments.surveys.summary.survey_results_are_public")
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                                className: "text-balanced mt-2 text-sm text-slate-500",
                                children: t("environments.surveys.summary.survey_results_are_shared_with_anyone_who_has_the_link")
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                className: "whitespace-nowrap rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-800",
                                children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("span", {
                                    children: surveyUrl
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_button/* Button */.$, {
                                variant: "secondary",
                                size: "sm",
                                title: "Copy survey link to clipboard",
                                "aria-label": "Copy survey link to clipboard",
                                className: "hover:cursor-pointer",
                                onClick: ()=>{
                                    navigator.clipboard.writeText(surveyUrl);
                                    dist/* toast */.oR.success(t("common.link_copied"));
                                },
                                children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(clipboard/* default */.A, {})
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_button/* Button */.$, {
                                type: "submit",
                                variant: "secondary",
                                className: "text-center",
                                onClick: ()=>handleUnpublish(),
                                children: t("environments.surveys.summary.unpublish_from_web")
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_button/* Button */.$, {
                                className: "text-center",
                                asChild: true,
                                children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)((link_default()), {
                                    href: surveyUrl,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: t("environments.surveys.summary.view_site")
                                })
                            })
                        ]
                    })
                ]
            })
        }) : /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
            className: "flex flex-col rounded-2xl bg-white p-8",
            children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                className: "flex flex-col items-center gap-y-6 text-center",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(circle_alert/* default */.A, {
                        className: "h-20 w-20 text-slate-300"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                                className: "text-lg font-medium text-slate-600",
                                children: t("environments.surveys.summary.publish_to_web_warning")
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                                className: "text-balanced mt-2 text-sm text-slate-500",
                                children: t("environments.surveys.summary.publish_to_web_warning_description")
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_button/* Button */.$, {
                        type: "submit",
                        className: "h-full text-center",
                        onClick: ()=>handlePublish(),
                        children: t("environments.surveys.summary.publish_to_web")
                    })
                ]
            })
        })
    });
};

;// ./app/(app)/environments/[environmentId]/surveys/[surveyId]/components/ResultsShareButton.tsx
/* __next_internal_client_entry_do_not_use__ ResultsShareButton auto */ 








const ResultsShareButton = ({ survey, webAppUrl })=>{
    const { t } = (0,tolgee_react_esm/* useTranslate */.WD)();
    const [showResultsLinkModal, setShowResultsLinkModal] = (0,react.useState)(false);
    const [showPublishModal, setShowPublishModal] = (0,react.useState)(false);
    const [surveyUrl, setSurveyUrl] = (0,react.useState)("");
    const handlePublish = async ()=>{
        const resultShareKeyResponse = await generateResultShareUrlAction({
            surveyId: survey.id
        });
        if (resultShareKeyResponse?.data) {
            setSurveyUrl(webAppUrl + "/share/" + resultShareKeyResponse.data);
            setShowPublishModal(true);
        } else {
            const errorMessage = (0,helper/* getFormattedErrorMessage */.g3)(resultShareKeyResponse);
            dist/* default */.Ay.error(errorMessage);
        }
    };
    const handleUnpublish = ()=>{
        deleteResultShareUrlAction({
            surveyId: survey.id
        }).then((deleteResultShareUrlResponse)=>{
            if (deleteResultShareUrlResponse?.data) {
                dist/* default */.Ay.success(t("environments.surveys.results_unpublished_successfully"));
                setShowPublishModal(false);
            } else {
                const errorMessage = (0,helper/* getFormattedErrorMessage */.g3)(deleteResultShareUrlResponse);
                dist/* default */.Ay.error(errorMessage);
            }
        });
    };
    (0,react.useEffect)(()=>{
        const fetchSharingKey = async ()=>{
            const resultShareUrlResponse = await getResultShareUrlAction({
                surveyId: survey.id
            });
            if (resultShareUrlResponse?.data) {
                setSurveyUrl(webAppUrl + "/share/" + resultShareUrlResponse.data);
                setShowPublishModal(true);
            }
        };
        fetchSharingKey();
    }, [
        survey.id,
        webAppUrl
    ]);
    const copyUrlToClipboard = ()=>{
        if (false) {} else {
            dist/* default */.Ay.error(t("environments.surveys.failed_to_copy_url"));
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(dropdown_menu/* DropdownMenu */.rI, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(dropdown_menu/* DropdownMenuTrigger */.ty, {
                        asChild: true,
                        className: "focus:bg-muted cursor-pointer border border-slate-200 outline-none hover:border-slate-300",
                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                            className: "min-w-auto h-auto rounded-md border bg-white p-3 sm:flex sm:min-w-[7rem] sm:px-6 sm:py-3",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                    className: "hidden w-full items-center justify-between sm:flex",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)("span", {
                                            className: "text-sm text-slate-700",
                                            children: t("environments.surveys.summary.share_results")
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)(icons_link/* default */.A, {
                                            className: "ml-2 h-4 w-4"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(download/* default */.A, {
                                    className: "block h-4 sm:hidden"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(dropdown_menu/* DropdownMenuContent */.SQ, {
                        align: "start",
                        children: [
                            survey.resultShareKey ? /*#__PURE__*/ (0,react_jsx_runtime.jsx)(dropdown_menu/* DropdownMenuItem */._2, {
                                onClick: ()=>{
                                    navigator.clipboard.writeText(surveyUrl);
                                    dist/* default */.Ay.success(t("environments.surveys.summary.link_to_public_results_copied"));
                                },
                                icon: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(copy/* default */.A, {
                                    className: "ml-1.5 inline h-4 w-4"
                                }),
                                children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                                    className: "text-slate-700",
                                    children: t("environments.surveys.summary.copy_link_to_public_results")
                                })
                            }) : /*#__PURE__*/ (0,react_jsx_runtime.jsx)(dropdown_menu/* DropdownMenuItem */._2, {
                                onClick: ()=>{
                                    copyUrlToClipboard();
                                },
                                icon: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(copy/* default */.A, {
                                    className: "ml-1.5 h-4 w-4"
                                }),
                                children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                                    className: "flex items-center text-slate-700",
                                    children: t("common.copy_link")
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(dropdown_menu/* DropdownMenuItem */._2, {
                                onClick: ()=>{
                                    setShowResultsLinkModal(true);
                                },
                                icon: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(globe/* default */.A, {
                                    className: "ml-1.5 h-4 w-4"
                                }),
                                children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                                    className: "flex items-center text-slate-700",
                                    children: survey.resultShareKey ? t("environments.surveys.summary.unpublish_from_web") : t("environments.surveys.summary.publish_to_web")
                                })
                            })
                        ]
                    })
                ]
            }),
            showResultsLinkModal && /*#__PURE__*/ (0,react_jsx_runtime.jsx)(ShareSurveyResults, {
                open: showResultsLinkModal,
                setOpen: setShowResultsLinkModal,
                surveyUrl: surveyUrl,
                handlePublish: handlePublish,
                handleUnpublish: handleUnpublish,
                showPublishModal: showPublishModal
            })
        ]
    });
};


/***/ }),

/***/ 930465:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ renderHyperlinkedContent)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(642725);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
// Utility function to render hyperlinked content

const renderHyperlinkedContent = (data)=>{
    // More specific URL pattern
    const urlPattern = /(https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&//=]*[-a-zA-Z0-9@%_\+~#//=])?)/g;
    const parts = data.split(urlPattern);
    const isValidUrl = (url)=>{
        try {
            new URL(url);
            return true;
        } catch  {
            return false;
        }
    };
    return parts.map((part, index)=>part.match(urlPattern) && isValidUrl(part) ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
            href: part,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "text-blue-500",
            children: part
        }, index) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
            children: part
        }, index));
};


/***/ }),

/***/ 720489:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ ArrayResponse)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(642725);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const ArrayResponse = ({ value })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "my-1 font-normal text-slate-700",
        dir: "auto",
        children: value.map((item, index)=>item && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    item,
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {})
                ]
            }, index))
    });
};


/***/ }),

/***/ 879387:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ Checkbox)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(642725);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _radix_ui_react_checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20913);
/* harmony import */ var _barrel_optimize_names_Check_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(129170);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(891616);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(983773);
/* __next_internal_client_entry_do_not_use__ Checkbox auto */ 




const Checkbox = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_checkbox__WEBPACK_IMPORTED_MODULE_2__/* .Root */ .bL, {
        ref: ref,
        className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_3__.cn)("peer h-5 w-5 shrink-0 rounded-md border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:text-slate-600 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900", className),
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_checkbox__WEBPACK_IMPORTED_MODULE_2__/* .Indicator */ .C1, {
            className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_3__.cn)("flex items-center justify-center"),
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Check_lucide_react__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
                className: "h-4 w-4"
            })
        })
    }));
Checkbox.displayName = _radix_ui_react_checkbox__WEBPACK_IMPORTED_MODULE_2__/* .Root */ .bL.displayName;



/***/ }),

/***/ 10015:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AM: () => (/* binding */ Popover),
/* harmony export */   Wv: () => (/* binding */ PopoverTrigger),
/* harmony export */   hl: () => (/* binding */ PopoverContent)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(642725);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _radix_ui_react_popover__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(578661);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(891616);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(983773);
/* __next_internal_client_entry_do_not_use__ Popover,PopoverTrigger,PopoverContent auto */ 



const Popover = _radix_ui_react_popover__WEBPACK_IMPORTED_MODULE_2__/* .Root */ .bL;
const PopoverTrigger = _radix_ui_react_popover__WEBPACK_IMPORTED_MODULE_2__/* .Trigger */ .l9;
const PopoverContent = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_popover__WEBPACK_IMPORTED_MODULE_2__/* .Portal */ .ZL, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_popover__WEBPACK_IMPORTED_MODULE_2__/* .Content */ .UC, {
            ref: ref,
            align: align,
            sideOffset: sideOffset,
            className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_3__.cn)("animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2 data-[side=right]:slide-in-from-left-2 data-[side=left]:slide-in-from-right-2 z-50 w-72 rounded-md border border-slate-100 bg-white p-4 shadow-md outline-none", className),
            ...props
        })
    }));
PopoverContent.displayName = _radix_ui_react_popover__WEBPACK_IMPORTED_MODULE_2__/* .Content */ .UC.displayName;



/***/ }),

/***/ 438501:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  j: () => (/* binding */ RatingResponse)
});

// EXTERNAL MODULE: ../../node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js
var react_jsx_runtime = __webpack_require__(642725);
;// ./modules/analysis/components/SingleResponseCard/components/Smileys.tsx

const TiredFace = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime.jsx)("svg", {
        viewBox: "0 0 72 72",
        xmlns: "http://www.w3.org/2000/svg",
        width: 36,
        height: 36,
        children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("g", {
            id: "line",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("circle", {
                    cx: "36",
                    cy: "36",
                    r: "23",
                    fill: "none",
                    stroke: "currentColor",
                    strokeMiterlimit: "10",
                    strokeWidth: "2",
                    ...props
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("path", {
                    fill: "none",
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: "10",
                    strokeWidth: "2",
                    d: "m21.88 23.92c5.102-0.06134 7.273-1.882 8.383-3.346"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("path", {
                    stroke: "currentColor",
                    strokeMiterlimit: "10",
                    strokeWidth: "2",
                    d: "m46.24 47.56c0-2.592-2.867-7.121-10.25-6.93-6.974 0.1812-10.22 4.518-10.22 7.111s4.271-1.611 10.05-1.492c6.317 0.13 10.43 3.903 10.43 1.311z"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("path", {
                    fill: "none",
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: "10",
                    strokeWidth: "2",
                    d: "m23.16 28.47c5.215 1.438 5.603 0.9096 8.204 1.207 1.068 0.1221-2.03 2.67-7.282 4.397"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("path", {
                    fill: "none",
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: "10",
                    strokeWidth: "2",
                    d: "m50.12 23.92c-5.102-0.06134-7.273-1.882-8.383-3.346"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("path", {
                    fill: "none",
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: "10",
                    strokeWidth: "2",
                    d: "m48.84 28.47c-5.215 1.438-5.603 0.9096-8.204 1.207-1.068 0.1221 2.03 2.67 7.282 4.397"
                })
            ]
        })
    });
};
const WearyFace = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime.jsx)("svg", {
        viewBox: "0 0 72 72",
        xmlns: "http://www.w3.org/2000/svg",
        width: 36,
        height: 36,
        children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("g", {
            id: "line",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("circle", {
                    cx: "36",
                    cy: "36",
                    r: "23",
                    fill: "none",
                    stroke: "currentColor",
                    strokeMiterlimit: "10",
                    strokeWidth: "2",
                    ...props
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("path", {
                    fill: "none",
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: "10",
                    strokeWidth: "2",
                    d: "m22.88 23.92c5.102-0.06134 7.273-1.882 8.383-3.346"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("path", {
                    stroke: "currentColor",
                    strokeMiterlimit: "10",
                    strokeWidth: "2",
                    d: "m46.24 47.56c0-2.592-2.867-7.121-10.25-6.93-6.974 0.1812-10.22 4.518-10.22 7.111s4.271-1.611 10.05-1.492c6.317 0.13 10.43 3.903 10.43 1.311z"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("path", {
                    fill: "none",
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: "10",
                    strokeWidth: "2",
                    d: "m49.12 23.92c-5.102-0.06134-7.273-1.882-8.383-3.346"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("path", {
                    fill: "none",
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: "10",
                    strokeWidth: "2",
                    d: "m48.24 30.51c-6.199 1.47-7.079 1.059-8.868-1.961"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("path", {
                    fill: "none",
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: "10",
                    strokeWidth: "2",
                    d: "m23.76 30.51c6.199 1.47 7.079 1.059 8.868-1.961"
                })
            ]
        })
    });
};
const PerseveringFace = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime.jsx)("svg", {
        viewBox: "0 0 72 72",
        xmlns: "http://www.w3.org/2000/svg",
        width: 36,
        height: 36,
        children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("g", {
            id: "line",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("circle", {
                    cx: "36",
                    cy: "36",
                    r: "23",
                    fill: "none",
                    stroke: "currentColor",
                    strokeMiterlimit: "10",
                    strokeWidth: "2",
                    ...props
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("line", {
                    x1: "44.5361",
                    x2: "50.9214",
                    y1: "21.4389",
                    y2: "24.7158",
                    fill: "none",
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: "10",
                    strokeWidth: "2"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("line", {
                    x1: "26.9214",
                    x2: "20.5361",
                    y1: "21.4389",
                    y2: "24.7158",
                    fill: "none",
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: "10",
                    strokeWidth: "2"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("path", {
                    fill: "none",
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: "10",
                    strokeWidth: "2",
                    d: "M24,28c2.3334,1.3333,4.6666,2.6667,7,4c-2.3334,1.3333-4.6666,2.6667-7,4"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("path", {
                    fill: "none",
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: "10",
                    strokeWidth: "2",
                    d: "M48,28c-2.3334,1.3333-4.6666,2.6667-7,4c2.3334,1.3333,4.6666,2.6667,7,4"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("path", {
                    fill: "none",
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: "10",
                    strokeWidth: "2",
                    d: "M28,51c0.2704-0.3562,1-8,8.4211-8.0038C43,42.9929,43.6499,50.5372,44,51C38.6667,51,33.3333,51,28,51z"
                })
            ]
        })
    });
};
const FrowningFace = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime.jsx)("svg", {
        viewBox: "0 0 72 72",
        xmlns: "http://www.w3.org/2000/svg",
        width: 36,
        height: 36,
        children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("g", {
            id: "line",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("circle", {
                    cx: "36",
                    cy: "36",
                    r: "23",
                    fill: "none",
                    stroke: "currentColor",
                    strokeMiterlimit: "10",
                    strokeWidth: "2",
                    ...props
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("path", {
                    fill: "none",
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: "10",
                    strokeWidth: "2",
                    d: "M26.5,48c1.8768-3.8326,5.8239-6.1965,10-6c3.8343,0.1804,7.2926,2.4926,9,6"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("path", {
                    d: "M30,31c0,1.6568-1.3448,3-3,3c-1.6553,0-3-1.3433-3-3c0-1.6552,1.3447-3,3-3C28.6552,28,30,29.3448,30,31"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("path", {
                    d: "M48,31c0,1.6568-1.3447,3-3,3s-3-1.3433-3-3c0-1.6552,1.3447-3,3-3S48,29.3448,48,31"
                })
            ]
        })
    });
};
const ConfusedFace = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime.jsx)("svg", {
        viewBox: "0 0 72 72",
        xmlns: "http://www.w3.org/2000/svg",
        width: 36,
        height: 36,
        children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("g", {
            id: "line",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("circle", {
                    cx: "36",
                    cy: "36",
                    r: "23",
                    fill: "none",
                    stroke: "currentColor",
                    strokeMiterlimit: "10",
                    strokeWidth: "2",
                    ...props
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("path", {
                    fill: "none",
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    d: "m44.7 43.92c-6.328-1.736-11.41-0.906-17.4 1.902"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("path", {
                    d: "M30,31c0,1.6568-1.3448,3-3,3c-1.6553,0-3-1.3433-3-3c0-1.6552,1.3447-3,3-3C28.6552,28,30,29.3448,30,31"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("path", {
                    d: "M48,31c0,1.6568-1.3447,3-3,3s-3-1.3433-3-3c0-1.6552,1.3447-3,3-3S48,29.3448,48,31"
                })
            ]
        })
    });
};
const NeutralFace = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime.jsx)("svg", {
        viewBox: "0 0 72 72",
        xmlns: "http://www.w3.org/2000/svg",
        width: 36,
        height: 36,
        children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("g", {
            id: "line",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("circle", {
                    cx: "36",
                    cy: "36",
                    r: "23",
                    fill: "none",
                    stroke: "currentColor",
                    strokeMiterlimit: "10",
                    strokeWidth: "2",
                    ...props
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("line", {
                    x1: "27",
                    x2: "45",
                    y1: "43",
                    y2: "43",
                    fill: "none",
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: "10",
                    strokeWidth: "2"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("path", {
                    d: "M30,31c0,1.6568-1.3448,3-3,3c-1.6553,0-3-1.3433-3-3c0-1.6552,1.3447-3,3-3C28.6552,28,30,29.3448,30,31"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("path", {
                    d: "M48,31c0,1.6568-1.3447,3-3,3s-3-1.3433-3-3c0-1.6552,1.3447-3,3-3S48,29.3448,48,31"
                })
            ]
        })
    });
};
const SlightlySmilingFace = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime.jsx)("svg", {
        viewBox: "0 0 72 72",
        xmlns: "http://www.w3.org/2000/svg",
        width: 36,
        height: 36,
        children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("g", {
            id: "line",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("circle", {
                    cx: "36",
                    cy: "36",
                    r: "23",
                    fill: "none",
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    ...props
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("path", {
                    fill: "none",
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    d: "M45.8149,44.9293 c-2.8995,1.6362-6.2482,2.5699-9.8149,2.5699s-6.9153-0.9336-9.8149-2.5699"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("path", {
                    d: "M30,31c0,1.6568-1.3448,3-3,3c-1.6553,0-3-1.3433-3-3c0-1.6552,1.3447-3,3-3C28.6552,28,30,29.3448,30,31"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("path", {
                    d: "M48,31c0,1.6568-1.3447,3-3,3s-3-1.3433-3-3c0-1.6552,1.3447-3,3-3S48,29.3448,48,31"
                })
            ]
        })
    });
};
const SmilingFaceWithSmilingEyes = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime.jsx)("svg", {
        viewBox: "0 0 72 72",
        xmlns: "http://www.w3.org/2000/svg",
        width: 36,
        height: 36,
        children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("g", {
            id: "line",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("circle", {
                    cx: "36",
                    cy: "36",
                    r: "23",
                    fill: "none",
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    ...props
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("path", {
                    fill: "none",
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    d: "M45.8147,45.2268a15.4294,15.4294,0,0,1-19.6294,0"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("path", {
                    fill: "none",
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeMiterlimit: "10",
                    strokeWidth: "2",
                    d: "M31.6941,33.4036a4.7262,4.7262,0,0,0-8.6382,0"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("path", {
                    fill: "none",
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeMiterlimit: "10",
                    strokeWidth: "2",
                    d: "M48.9441,33.4036a4.7262,4.7262,0,0,0-8.6382,0"
                })
            ]
        })
    });
};
const GrinningFaceWithSmilingEyes = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime.jsx)("svg", {
        viewBox: "0 0 72 72",
        xmlns: "http://www.w3.org/2000/svg",
        width: 36,
        height: 36,
        children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("g", {
            id: "line",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("circle", {
                    cx: "36",
                    cy: "36",
                    r: "23",
                    fill: "none",
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    ...props
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("path", {
                    fill: "none",
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    d: "M50.595,41.64a11.5554,11.5554,0,0,1-.87,4.49c-12.49,3.03-25.43.34-27.49-.13a11.4347,11.4347,0,0,1-.83-4.36h.11s14.8,3.59,28.89.07Z"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("path", {
                    fill: "none",
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    d: "M49.7251,46.13c-1.79,4.27-6.35,7.23-13.69,7.23-7.41,0-12.03-3.03-13.8-7.36C24.2951,46.47,37.235,49.16,49.7251,46.13Z"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("path", {
                    fill: "none",
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeMiterlimit: "10",
                    strokeWidth: "2",
                    d: "M31.6941,32.4036a4.7262,4.7262,0,0,0-8.6382,0"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("path", {
                    fill: "none",
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeMiterlimit: "10",
                    strokeWidth: "2",
                    d: "M48.9441,32.4036a4.7262,4.7262,0,0,0-8.6382,0"
                })
            ]
        })
    });
};
const GrinningSquintingFace = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime.jsx)("svg", {
        viewBox: "0 0 72 72",
        xmlns: "http://www.w3.org/2000/svg",
        width: 36,
        height: 36,
        children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("g", {
            id: "line",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("circle", {
                    cx: "36",
                    cy: "36",
                    r: "23",
                    fill: "none",
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    ...props
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("polyline", {
                    fill: "none",
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    points: "25.168 27.413 31.755 31.427 25.168 35.165"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("polyline", {
                    fill: "none",
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    points: "46.832 27.413 40.245 31.427 46.832 35.165"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("path", {
                    fill: "none",
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    d: "M50.595,41.64a11.5554,11.5554,0,0,1-.87,4.49c-12.49,3.03-25.43.34-27.49-.13a11.4347,11.4347,0,0,1-.83-4.36h.11s14.8,3.59,28.89.07Z"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("path", {
                    fill: "none",
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    d: "M49.7251,46.13c-1.79,4.27-6.35,7.23-13.69,7.23-7.41,0-12.03-3.03-13.8-7.36C24.2951,46.47,37.235,49.16,49.7251,46.13Z"
                })
            ]
        })
    });
};

;// ./modules/analysis/components/RatingSmiley/index.tsx


const getSmileyColor = (range, idx)=>{
    if (range > 5) {
        if (range - idx < 3) return "fill-emerald-100";
        if (range - idx < 5) return "fill-orange-100";
        return "fill-rose-100";
    } else if (range < 5) {
        if (range - idx < 2) return "fill-emerald-100";
        if (range - idx < 3) return "fill-orange-100";
        return "fill-rose-100";
    } else {
        if (range - idx < 3) return "fill-emerald-100";
        if (range - idx < 4) return "fill-orange-100";
        return "fill-rose-100";
    }
};
const getSmiley = (iconIdx, idx, range, active, addColors)=>{
    const activeColor = "fill-rating-fill";
    const inactiveColor = addColors ? getSmileyColor(range, idx) : "fill-none";
    const icons = [
        /*#__PURE__*/ (0,react_jsx_runtime.jsx)(TiredFace, {
            className: active ? activeColor : inactiveColor
        }),
        /*#__PURE__*/ (0,react_jsx_runtime.jsx)(WearyFace, {
            className: active ? activeColor : inactiveColor
        }),
        /*#__PURE__*/ (0,react_jsx_runtime.jsx)(PerseveringFace, {
            className: active ? activeColor : inactiveColor
        }),
        /*#__PURE__*/ (0,react_jsx_runtime.jsx)(FrowningFace, {
            className: active ? activeColor : inactiveColor
        }),
        /*#__PURE__*/ (0,react_jsx_runtime.jsx)(ConfusedFace, {
            className: active ? activeColor : inactiveColor
        }),
        /*#__PURE__*/ (0,react_jsx_runtime.jsx)(NeutralFace, {
            className: active ? activeColor : inactiveColor
        }),
        /*#__PURE__*/ (0,react_jsx_runtime.jsx)(SlightlySmilingFace, {
            className: active ? activeColor : inactiveColor
        }),
        /*#__PURE__*/ (0,react_jsx_runtime.jsx)(SmilingFaceWithSmilingEyes, {
            className: active ? activeColor : inactiveColor
        }),
        /*#__PURE__*/ (0,react_jsx_runtime.jsx)(GrinningFaceWithSmilingEyes, {
            className: active ? activeColor : inactiveColor
        }),
        /*#__PURE__*/ (0,react_jsx_runtime.jsx)(GrinningSquintingFace, {
            className: active ? activeColor : inactiveColor
        })
    ];
    return icons[iconIdx];
};
const RatingSmiley = ({ active, idx, range, addColors = false })=>{
    let iconsIdx = [];
    if (range === 10) iconsIdx = [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9
    ];
    else if (range === 7) iconsIdx = [
        1,
        3,
        4,
        5,
        6,
        8,
        9
    ];
    else if (range === 5) iconsIdx = [
        3,
        4,
        5,
        6,
        7
    ];
    else if (range === 4) iconsIdx = [
        4,
        5,
        6,
        7
    ];
    else if (range === 3) iconsIdx = [
        4,
        5,
        7
    ];
    return getSmiley(iconsIdx[idx], idx, range, active, addColors);
};

// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/star.js
var star = __webpack_require__(696340);
;// ./modules/ui/components/rating-response/index.tsx



const RatingResponse = ({ scale, range, answer, addColors = false })=>{
    if (typeof answer !== "number") return null;
    if (typeof scale === "undefined" || typeof range === "undefined") return answer;
    if (scale === "star") {
        // show number of stars according to answer value
        const stars = [];
        for(let i = 0; i < range; i++){
            if (i < parseInt(answer.toString())) {
                stars.push(/*#__PURE__*/ (0,react_jsx_runtime.jsx)(star/* default */.A, {
                    fill: "rgb(250 204 21)",
                    className: "h-7 text-yellow-400"
                }, i));
            } else {
                stars.push(/*#__PURE__*/ (0,react_jsx_runtime.jsx)(star/* default */.A, {
                    className: "h-7 text-slate-300"
                }, i));
            }
        }
        return /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
            className: "flex",
            children: stars
        });
    }
    if (scale === "smiley") return /*#__PURE__*/ (0,react_jsx_runtime.jsx)(RatingSmiley, {
        active: false,
        idx: answer - 1,
        range: range,
        addColors: addColors
    });
    return answer;
};


/***/ }),

/***/ 630785:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ SecondaryNavigation)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(642725);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36888);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(983773);



const SecondaryNavigation = ({ navigation, activeId, loading, ...props })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "grid h-10 w-full grid-cols-[auto,1fr]",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("nav", {
                    className: "flex h-full min-w-full items-center space-x-4",
                    "aria-label": "Tabs",
                    children: loading ? navigation.map((navElem)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "group flex h-full flex-col",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                    "aria-disabled": "true",
                                    className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_2__.cn)(navElem.id === activeId ? "font-semibold text-slate-900" : "text-slate-500", "flex h-full items-center px-3 text-sm font-medium", navElem.hidden && "hidden"),
                                    "aria-current": navElem.id === activeId ? "page" : undefined,
                                    children: navElem.label
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                    className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_2__.cn)("bottom-0 mt-auto h-[2px] w-full rounded-t-lg transition-all duration-150 ease-in-out", navElem.id === activeId ? "bg-slate-300" : "bg-transparent group-hover:bg-slate-300", navElem.hidden && "hidden")
                                })
                            ]
                        }, navElem.id)) : navigation.map((navElem)=>!navElem.hidden && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "group flex h-full flex-col",
                            children: [
                                navElem.href ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    href: navElem.href,
                                    ...navElem.onClick ? {
                                        onClick: navElem.onClick
                                    } : {},
                                    className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_2__.cn)(navElem.id === activeId ? "font-semibold text-slate-900" : "text-slate-500 hover:text-slate-700", "flex h-full items-center px-3 text-sm font-medium", navElem.hidden && "hidden"),
                                    "aria-current": navElem.id === activeId ? "page" : undefined,
                                    children: navElem.label
                                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                                    ...navElem.onClick ? {
                                        onClick: navElem.onClick
                                    } : {},
                                    className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_2__.cn)(navElem.id === activeId ? "font-semibold text-slate-900" : "text-slate-500 hover:text-slate-700", "grow items-center px-3 text-sm font-medium transition-all duration-150 ease-in-out", navElem.hidden && "hidden"),
                                    "aria-current": navElem.id === activeId ? "page" : undefined,
                                    children: navElem.label
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                    className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_2__.cn)("bottom-0 mt-auto h-[2px] w-full rounded-t-lg transition-all duration-150 ease-in-out", navElem.id === activeId ? "bg-brand-dark" : "bg-transparent group-hover:bg-slate-300", navElem.hidden && "hidden")
                                })
                            ]
                        }, navElem.id))
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                    className: "justify-self-end"
                })
            ]
        })
    });
};


/***/ }),

/***/ 290205:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ Skeleton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(642725);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(983773);


const Skeleton = ({ className, ...props })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_1__.cn)("animate-pulse rounded-full bg-slate-200", className),
        ...props
    });
};


/***/ }),

/***/ 162000:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A0: () => (/* binding */ TableHeader),
/* harmony export */   BF: () => (/* binding */ TableBody),
/* harmony export */   Hj: () => (/* binding */ TableRow),
/* harmony export */   XI: () => (/* binding */ Table),
/* harmony export */   nA: () => (/* binding */ TableCell),
/* harmony export */   nd: () => (/* binding */ TableHead)
/* harmony export */ });
/* unused harmony exports TableCaption, TableFooter */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(642725);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(891616);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(983773);



const Table = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "relative overflow-auto",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("table", {
            ref: ref,
            className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_2__.cn)("w-full caption-bottom text-sm", className),
            ...props
        })
    }));
Table.displayName = "Table";
const TableHeader = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("thead", {
        ref: ref,
        className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_2__.cn)("pointer-events-none text-slate-800 [&_tr]:border-b", className),
        ...props
    }));
TableHeader.displayName = "TableHeader";
const TableBody = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tbody", {
        ref: ref,
        className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_2__.cn)("[&_tr:last-child]:border-0", className),
        ...props
    }));
TableBody.displayName = "TableBody";
const TableFooter = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tfoot", {
        ref: ref,
        className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_2__.cn)("border-t [&>tr]:last:border-b-0", className),
        ...props
    }));
TableFooter.displayName = "TableFooter";
const TableRow = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tr", {
        ref: ref,
        className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_2__.cn)("border-b bg-white transition-colors hover:bg-slate-100 data-[state=selected]:bg-slate-100", className),
        ...props
    }));
TableRow.displayName = "TableRow";
const TableHead = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", {
        ref: ref,
        className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_2__.cn)("h-12 px-4 text-left align-middle [&:has([role=checkbox])]:pr-0", className),
        ...props
    }));
TableHead.displayName = "TableHead";
const TableCell = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", {
        ref: ref,
        className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_2__.cn)("p-4 align-middle [&:has([role=checkbox])]:pr-0", className),
        ...props
    }));
TableCell.displayName = "TableCell";
const TableCaption = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("caption", {
        ref: ref,
        className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_2__.cn)("mt-4 text-sm", className),
        ...props
    }));
TableCaption.displayName = "TableCaption";



/***/ }),

/***/ 904477:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ getOriginalFileNameFromUrl)
/* harmony export */ });
/* unused harmony export getFileNameWithIdFromUrl */
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


/***/ }),

/***/ 775453:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $B: () => (/* binding */ convertDateString),
/* harmony export */   Yq: () => (/* binding */ formatDate),
/* harmony export */   _D: () => (/* binding */ timeSince),
/* harmony export */   oS: () => (/* binding */ timeSinceDate),
/* harmony export */   qb: () => (/* binding */ convertDateTimeStringShort)
/* harmony export */ });
/* unused harmony exports convertDateTimeString, convertTimeString, getTodaysDateFormatted, getTodaysDateTimeFormatted, convertDatesInObject */
/* harmony import */ var _barrel_optimize_names_formatDistance_intlFormat_date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(527348);
/* harmony import */ var _barrel_optimize_names_formatDistance_intlFormat_date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15056);
/* harmony import */ var date_fns_locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(154445);
/* harmony import */ var date_fns_locale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(119472);
/* harmony import */ var date_fns_locale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(907374);
/* harmony import */ var date_fns_locale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(144208);


const convertDateString = (dateString)=>{
    if (!dateString) {
        return dateString;
    }
    const date = new Date(dateString);
    return (0,_barrel_optimize_names_formatDistance_intlFormat_date_fns__WEBPACK_IMPORTED_MODULE_0__/* .intlFormat */ .b)(date, {
        year: "numeric",
        month: "short",
        day: "numeric"
    }, {
        locale: "en"
    });
};
const convertDateTimeString = (dateString)=>{
    if (!dateString) {
        return dateString;
    }
    const date = new Date(dateString);
    return intlFormat(date, {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit"
    }, {
        locale: "en"
    });
};
const convertDateTimeStringShort = (dateString)=>{
    if (!dateString) {
        return dateString;
    }
    const date = new Date(dateString);
    return (0,_barrel_optimize_names_formatDistance_intlFormat_date_fns__WEBPACK_IMPORTED_MODULE_0__/* .intlFormat */ .b)(date, {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit"
    }, {
        locale: "en"
    });
};
const convertTimeString = (dateString)=>{
    const date = new Date(dateString);
    return intlFormat(date, {
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit"
    }, {
        locale: "en"
    });
};
const getLocaleForTimeSince = (locale)=>{
    switch(locale){
        case "de-DE":
            return date_fns_locale__WEBPACK_IMPORTED_MODULE_1__.de;
        case "en-US":
            return date_fns_locale__WEBPACK_IMPORTED_MODULE_2__/* .enUS */ .c;
        case "pt-BR":
            return date_fns_locale__WEBPACK_IMPORTED_MODULE_3__/* .ptBR */ .F;
        case "fr-FR":
            return date_fns_locale__WEBPACK_IMPORTED_MODULE_4__.fr;
    }
};
const timeSince = (dateString, locale)=>{
    const date = new Date(dateString);
    return (0,_barrel_optimize_names_formatDistance_intlFormat_date_fns__WEBPACK_IMPORTED_MODULE_5__/* .formatDistance */ .B)(date, new Date(), {
        addSuffix: true,
        locale: getLocaleForTimeSince(locale)
    });
};
const timeSinceDate = (date)=>{
    return (0,_barrel_optimize_names_formatDistance_intlFormat_date_fns__WEBPACK_IMPORTED_MODULE_5__/* .formatDistance */ .B)(date, new Date(), {
        addSuffix: true
    });
};
const formatDate = (date)=>{
    return (0,_barrel_optimize_names_formatDistance_intlFormat_date_fns__WEBPACK_IMPORTED_MODULE_0__/* .intlFormat */ .b)(date, {
        year: "numeric",
        month: "long",
        day: "numeric"
    });
};
const getTodaysDateFormatted = (seperator)=>{
    const date = new Date();
    const formattedDate = date.toISOString().split("T")[0].split("-").join(seperator);
    return formattedDate;
};
const getTodaysDateTimeFormatted = (seperator)=>{
    const date = new Date();
    const formattedDate = date.toISOString().split("T")[0].split("-").join(seperator);
    const formattedTime = date.toTimeString().split(" ")[0].split(":").join(seperator);
    return [
        formattedDate,
        formattedTime
    ].join(seperator);
};
const convertDatesInObject = (obj)=>{
    if (obj === null || typeof obj !== "object") {
        return obj; // Return if obj is not an object
    }
    if (Array.isArray(obj)) {
        // Handle arrays by mapping each element through the function
        return obj.map((item)=>convertDatesInObject(item));
    }
    const newObj = {};
    for(const key in obj){
        if ((key === "createdAt" || key === "updatedAt") && typeof obj[key] === "string" && !isNaN(Date.parse(obj[key]))) {
            newObj[key] = new Date(obj[key]);
        } else if (typeof obj[key] === "object" && obj[key] !== null) {
            newObj[key] = convertDatesInObject(obj[key]);
        } else {
            newObj[key] = obj[key];
        }
    }
    return newObj;
};


/***/ }),

/***/ 669756:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ getContactIdentifier)
/* harmony export */ });
const getContactIdentifier = (contact, contactAttributes)=>{
    return contactAttributes?.email || contact?.userId || "";
};


/***/ }),

/***/ 871900:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   y: () => (/* binding */ useIntervalWhenFocused)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(891616);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useIntervalWhenFocused = (callback, intervalDuration, isActive, shouldExecuteImmediately = true)=>{
    const intervalRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const handleFocus = ()=>{
        if (isActive) {
            if (shouldExecuteImmediately) {
                // Execute the callback immediately when the tab comes into focus
                callback();
            }
            // Set the interval to execute the callback every `intervalDuration` milliseconds
            intervalRef.current = setInterval(()=>{
                callback();
            }, intervalDuration);
        }
    };
    const handleBlur = ()=>{
        // Clear the interval when the tab loses focus
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        // Attach focus and blur event listeners
        window.addEventListener("focus", handleFocus);
        window.addEventListener("blur", handleBlur);
        // Handle initial focus
        handleFocus();
        // Cleanup interval and event listeners when the component unmounts or dependencies change
        return ()=>{
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
            window.removeEventListener("focus", handleFocus);
            window.removeEventListener("blur", handleBlur);
        };
    }, [
        isActive,
        intervalDuration
    ]);
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (useIntervalWhenFocused)));


/***/ }),

/***/ 4659:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ax: () => (/* binding */ getQuestionIconMap),
/* harmony export */   T_: () => (/* binding */ VARIABLES_ICON_MAP),
/* harmony export */   _2: () => (/* binding */ getQuestionTypes),
/* harmony export */   di: () => (/* binding */ getCXQuestionTypes),
/* harmony export */   iZ: () => (/* binding */ getQuestionNameMap),
/* harmony export */   qV: () => (/* binding */ universalQuestionPresets),
/* harmony export */   tb: () => (/* binding */ getCXQuestionNameMap),
/* harmony export */   vV: () => (/* binding */ getTSurveyQuestionTypeEnumName),
/* harmony export */   xu: () => (/* binding */ getQuestionDefaults),
/* harmony export */   y9: () => (/* binding */ getQuestionIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(642725);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _paralleldrive_cuid2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(489415);
/* harmony import */ var _barrel_optimize_names_ArrowUpFromLineIcon_CalendarDaysIcon_CheckIcon_ContactIcon_FileDigitIcon_FileType2Icon_Grid3X3Icon_HomeIcon_ImageIcon_ListIcon_ListOrderedIcon_MessageSquareTextIcon_MousePointerClickIcon_PhoneIcon_PresentationIcon_Rows3Icon_StarIcon_lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(624653);
/* harmony import */ var _barrel_optimize_names_ArrowUpFromLineIcon_CalendarDaysIcon_CheckIcon_ContactIcon_FileDigitIcon_FileType2Icon_Grid3X3Icon_HomeIcon_ImageIcon_ListIcon_ListOrderedIcon_MessageSquareTextIcon_MousePointerClickIcon_PhoneIcon_PresentationIcon_Rows3Icon_StarIcon_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(187201);
/* harmony import */ var _barrel_optimize_names_ArrowUpFromLineIcon_CalendarDaysIcon_CheckIcon_ContactIcon_FileDigitIcon_FileType2Icon_Grid3X3Icon_HomeIcon_ImageIcon_ListIcon_ListOrderedIcon_MessageSquareTextIcon_MousePointerClickIcon_PhoneIcon_PresentationIcon_Rows3Icon_StarIcon_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(766792);
/* harmony import */ var _barrel_optimize_names_ArrowUpFromLineIcon_CalendarDaysIcon_CheckIcon_ContactIcon_FileDigitIcon_FileType2Icon_Grid3X3Icon_HomeIcon_ImageIcon_ListIcon_ListOrderedIcon_MessageSquareTextIcon_MousePointerClickIcon_PhoneIcon_PresentationIcon_Rows3Icon_StarIcon_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(484667);
/* harmony import */ var _barrel_optimize_names_ArrowUpFromLineIcon_CalendarDaysIcon_CheckIcon_ContactIcon_FileDigitIcon_FileType2Icon_Grid3X3Icon_HomeIcon_ImageIcon_ListIcon_ListOrderedIcon_MessageSquareTextIcon_MousePointerClickIcon_PhoneIcon_PresentationIcon_Rows3Icon_StarIcon_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(696340);
/* harmony import */ var _barrel_optimize_names_ArrowUpFromLineIcon_CalendarDaysIcon_CheckIcon_ContactIcon_FileDigitIcon_FileType2Icon_Grid3X3Icon_HomeIcon_ImageIcon_ListIcon_ListOrderedIcon_MessageSquareTextIcon_MousePointerClickIcon_PhoneIcon_PresentationIcon_Rows3Icon_StarIcon_lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(523528);
/* harmony import */ var _barrel_optimize_names_ArrowUpFromLineIcon_CalendarDaysIcon_CheckIcon_ContactIcon_FileDigitIcon_FileType2Icon_Grid3X3Icon_HomeIcon_ImageIcon_ListIcon_ListOrderedIcon_MessageSquareTextIcon_MousePointerClickIcon_PhoneIcon_PresentationIcon_Rows3Icon_StarIcon_lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(16568);
/* harmony import */ var _barrel_optimize_names_ArrowUpFromLineIcon_CalendarDaysIcon_CheckIcon_ContactIcon_FileDigitIcon_FileType2Icon_Grid3X3Icon_HomeIcon_ImageIcon_ListIcon_ListOrderedIcon_MessageSquareTextIcon_MousePointerClickIcon_PhoneIcon_PresentationIcon_Rows3Icon_StarIcon_lucide_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(994413);
/* harmony import */ var _barrel_optimize_names_ArrowUpFromLineIcon_CalendarDaysIcon_CheckIcon_ContactIcon_FileDigitIcon_FileType2Icon_Grid3X3Icon_HomeIcon_ImageIcon_ListIcon_ListOrderedIcon_MessageSquareTextIcon_MousePointerClickIcon_PhoneIcon_PresentationIcon_Rows3Icon_StarIcon_lucide_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(277792);
/* harmony import */ var _barrel_optimize_names_ArrowUpFromLineIcon_CalendarDaysIcon_CheckIcon_ContactIcon_FileDigitIcon_FileType2Icon_Grid3X3Icon_HomeIcon_ImageIcon_ListIcon_ListOrderedIcon_MessageSquareTextIcon_MousePointerClickIcon_PhoneIcon_PresentationIcon_Rows3Icon_StarIcon_lucide_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(129170);
/* harmony import */ var _barrel_optimize_names_ArrowUpFromLineIcon_CalendarDaysIcon_CheckIcon_ContactIcon_FileDigitIcon_FileType2Icon_Grid3X3Icon_HomeIcon_ImageIcon_ListIcon_ListOrderedIcon_MessageSquareTextIcon_MousePointerClickIcon_PhoneIcon_PresentationIcon_Rows3Icon_StarIcon_lucide_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(552285);
/* harmony import */ var _barrel_optimize_names_ArrowUpFromLineIcon_CalendarDaysIcon_CheckIcon_ContactIcon_FileDigitIcon_FileType2Icon_Grid3X3Icon_HomeIcon_ImageIcon_ListIcon_ListOrderedIcon_MessageSquareTextIcon_MousePointerClickIcon_PhoneIcon_PresentationIcon_Rows3Icon_StarIcon_lucide_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(617836);
/* harmony import */ var _barrel_optimize_names_ArrowUpFromLineIcon_CalendarDaysIcon_CheckIcon_ContactIcon_FileDigitIcon_FileType2Icon_Grid3X3Icon_HomeIcon_ImageIcon_ListIcon_ListOrderedIcon_MessageSquareTextIcon_MousePointerClickIcon_PhoneIcon_PresentationIcon_Rows3Icon_StarIcon_lucide_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(321070);
/* harmony import */ var _barrel_optimize_names_ArrowUpFromLineIcon_CalendarDaysIcon_CheckIcon_ContactIcon_FileDigitIcon_FileType2Icon_Grid3X3Icon_HomeIcon_ImageIcon_ListIcon_ListOrderedIcon_MessageSquareTextIcon_MousePointerClickIcon_PhoneIcon_PresentationIcon_Rows3Icon_StarIcon_lucide_react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(338490);
/* harmony import */ var _barrel_optimize_names_ArrowUpFromLineIcon_CalendarDaysIcon_CheckIcon_ContactIcon_FileDigitIcon_FileType2Icon_Grid3X3Icon_HomeIcon_ImageIcon_ListIcon_ListOrderedIcon_MessageSquareTextIcon_MousePointerClickIcon_PhoneIcon_PresentationIcon_Rows3Icon_StarIcon_lucide_react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(359802);
/* harmony import */ var _barrel_optimize_names_ArrowUpFromLineIcon_CalendarDaysIcon_CheckIcon_ContactIcon_FileDigitIcon_FileType2Icon_Grid3X3Icon_HomeIcon_ImageIcon_ListIcon_ListOrderedIcon_MessageSquareTextIcon_MousePointerClickIcon_PhoneIcon_PresentationIcon_Rows3Icon_StarIcon_lucide_react__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(341556);
/* harmony import */ var _barrel_optimize_names_ArrowUpFromLineIcon_CalendarDaysIcon_CheckIcon_ContactIcon_FileDigitIcon_FileType2Icon_Grid3X3Icon_HomeIcon_ImageIcon_ListIcon_ListOrderedIcon_MessageSquareTextIcon_MousePointerClickIcon_PhoneIcon_PresentationIcon_Rows3Icon_StarIcon_lucide_react__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(412090);
/* harmony import */ var _formbricks_types_surveys_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(102379);
/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(93139);





const getQuestionTypes = (t)=>[
        {
            id: _formbricks_types_surveys_types__WEBPACK_IMPORTED_MODULE_2__/* .TSurveyQuestionTypeEnum */ .wn.OpenText,
            label: t("templates.free_text"),
            description: t("templates.free_text_description"),
            icon: _barrel_optimize_names_ArrowUpFromLineIcon_CalendarDaysIcon_CheckIcon_ContactIcon_FileDigitIcon_FileType2Icon_Grid3X3Icon_HomeIcon_ImageIcon_ListIcon_ListOrderedIcon_MessageSquareTextIcon_MousePointerClickIcon_PhoneIcon_PresentationIcon_Rows3Icon_StarIcon_lucide_react__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,
            preset: {
                headline: {
                    default: ""
                },
                placeholder: {
                    default: t("templates.free_text_placeholder")
                },
                longAnswer: true,
                inputType: "text",
                buttonLabel: {
                    default: t("templates.next")
                },
                backButtonLabel: {
                    default: t("templates.back")
                }
            }
        },
        {
            id: _formbricks_types_surveys_types__WEBPACK_IMPORTED_MODULE_2__/* .TSurveyQuestionTypeEnum */ .wn.MultipleChoiceSingle,
            label: t("templates.single_select"),
            description: t("templates.single_select_description"),
            icon: _barrel_optimize_names_ArrowUpFromLineIcon_CalendarDaysIcon_CheckIcon_ContactIcon_FileDigitIcon_FileType2Icon_Grid3X3Icon_HomeIcon_ImageIcon_ListIcon_ListOrderedIcon_MessageSquareTextIcon_MousePointerClickIcon_PhoneIcon_PresentationIcon_Rows3Icon_StarIcon_lucide_react__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,
            preset: {
                headline: {
                    default: ""
                },
                choices: [
                    {
                        id: (0,_paralleldrive_cuid2__WEBPACK_IMPORTED_MODULE_1__/* .createId */ .sX)(),
                        label: {
                            default: ""
                        }
                    },
                    {
                        id: (0,_paralleldrive_cuid2__WEBPACK_IMPORTED_MODULE_1__/* .createId */ .sX)(),
                        label: {
                            default: ""
                        }
                    }
                ],
                shuffleOption: "none",
                buttonLabel: {
                    default: t("templates.next")
                },
                backButtonLabel: {
                    default: t("templates.back")
                }
            }
        },
        {
            id: _formbricks_types_surveys_types__WEBPACK_IMPORTED_MODULE_2__/* .TSurveyQuestionTypeEnum */ .wn.MultipleChoiceMulti,
            label: t("templates.multi_select"),
            description: t("templates.multi_select_description"),
            icon: _barrel_optimize_names_ArrowUpFromLineIcon_CalendarDaysIcon_CheckIcon_ContactIcon_FileDigitIcon_FileType2Icon_Grid3X3Icon_HomeIcon_ImageIcon_ListIcon_ListOrderedIcon_MessageSquareTextIcon_MousePointerClickIcon_PhoneIcon_PresentationIcon_Rows3Icon_StarIcon_lucide_react__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A,
            preset: {
                headline: {
                    default: ""
                },
                choices: [
                    {
                        id: (0,_paralleldrive_cuid2__WEBPACK_IMPORTED_MODULE_1__/* .createId */ .sX)(),
                        label: {
                            default: ""
                        }
                    },
                    {
                        id: (0,_paralleldrive_cuid2__WEBPACK_IMPORTED_MODULE_1__/* .createId */ .sX)(),
                        label: {
                            default: ""
                        }
                    },
                    {
                        id: (0,_paralleldrive_cuid2__WEBPACK_IMPORTED_MODULE_1__/* .createId */ .sX)(),
                        label: {
                            default: ""
                        }
                    }
                ],
                shuffleOption: "none",
                buttonLabel: {
                    default: t("templates.next")
                },
                backButtonLabel: {
                    default: t("templates.back")
                }
            }
        },
        {
            id: _formbricks_types_surveys_types__WEBPACK_IMPORTED_MODULE_2__/* .TSurveyQuestionTypeEnum */ .wn.PictureSelection,
            label: t("templates.picture_selection"),
            description: t("templates.picture_selection_description"),
            icon: _barrel_optimize_names_ArrowUpFromLineIcon_CalendarDaysIcon_CheckIcon_ContactIcon_FileDigitIcon_FileType2Icon_Grid3X3Icon_HomeIcon_ImageIcon_ListIcon_ListOrderedIcon_MessageSquareTextIcon_MousePointerClickIcon_PhoneIcon_PresentationIcon_Rows3Icon_StarIcon_lucide_react__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,
            preset: {
                headline: {
                    default: ""
                },
                allowMulti: true,
                choices: [],
                buttonLabel: {
                    default: t("templates.next")
                },
                backButtonLabel: {
                    default: t("templates.back")
                }
            }
        },
        {
            id: _formbricks_types_surveys_types__WEBPACK_IMPORTED_MODULE_2__/* .TSurveyQuestionTypeEnum */ .wn.Rating,
            label: t("templates.rating"),
            description: t("templates.rating_description"),
            icon: _barrel_optimize_names_ArrowUpFromLineIcon_CalendarDaysIcon_CheckIcon_ContactIcon_FileDigitIcon_FileType2Icon_Grid3X3Icon_HomeIcon_ImageIcon_ListIcon_ListOrderedIcon_MessageSquareTextIcon_MousePointerClickIcon_PhoneIcon_PresentationIcon_Rows3Icon_StarIcon_lucide_react__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A,
            preset: {
                headline: {
                    default: ""
                },
                scale: "star",
                range: 5,
                lowerLabel: {
                    default: t("templates.rating_lower_label")
                },
                upperLabel: {
                    default: t("templates.rating_upper_label")
                },
                buttonLabel: {
                    default: t("templates.next")
                },
                backButtonLabel: {
                    default: t("templates.back")
                }
            }
        },
        {
            id: _formbricks_types_surveys_types__WEBPACK_IMPORTED_MODULE_2__/* .TSurveyQuestionTypeEnum */ .wn.NPS,
            label: t("templates.nps"),
            description: t("templates.nps_description"),
            icon: _barrel_optimize_names_ArrowUpFromLineIcon_CalendarDaysIcon_CheckIcon_ContactIcon_FileDigitIcon_FileType2Icon_Grid3X3Icon_HomeIcon_ImageIcon_ListIcon_ListOrderedIcon_MessageSquareTextIcon_MousePointerClickIcon_PhoneIcon_PresentationIcon_Rows3Icon_StarIcon_lucide_react__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A,
            preset: {
                headline: {
                    default: ""
                },
                lowerLabel: {
                    default: t("templates.nps_lower_label")
                },
                upperLabel: {
                    default: t("templates.nps_upper_label")
                },
                buttonLabel: {
                    default: t("templates.next")
                },
                backButtonLabel: {
                    default: t("templates.back")
                }
            }
        },
        {
            id: _formbricks_types_surveys_types__WEBPACK_IMPORTED_MODULE_2__/* .TSurveyQuestionTypeEnum */ .wn.Ranking,
            label: t("templates.ranking"),
            description: t("templates.ranking_description"),
            icon: _barrel_optimize_names_ArrowUpFromLineIcon_CalendarDaysIcon_CheckIcon_ContactIcon_FileDigitIcon_FileType2Icon_Grid3X3Icon_HomeIcon_ImageIcon_ListIcon_ListOrderedIcon_MessageSquareTextIcon_MousePointerClickIcon_PhoneIcon_PresentationIcon_Rows3Icon_StarIcon_lucide_react__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A,
            preset: {
                headline: {
                    default: ""
                },
                choices: [
                    {
                        id: (0,_paralleldrive_cuid2__WEBPACK_IMPORTED_MODULE_1__/* .createId */ .sX)(),
                        label: {
                            default: ""
                        }
                    },
                    {
                        id: (0,_paralleldrive_cuid2__WEBPACK_IMPORTED_MODULE_1__/* .createId */ .sX)(),
                        label: {
                            default: ""
                        }
                    }
                ],
                buttonLabel: {
                    default: t("templates.next")
                },
                backButtonLabel: {
                    default: t("templates.back")
                }
            }
        },
        {
            id: _formbricks_types_surveys_types__WEBPACK_IMPORTED_MODULE_2__/* .TSurveyQuestionTypeEnum */ .wn.Matrix,
            label: t("templates.matrix"),
            description: t("templates.matrix_description"),
            icon: _barrel_optimize_names_ArrowUpFromLineIcon_CalendarDaysIcon_CheckIcon_ContactIcon_FileDigitIcon_FileType2Icon_Grid3X3Icon_HomeIcon_ImageIcon_ListIcon_ListOrderedIcon_MessageSquareTextIcon_MousePointerClickIcon_PhoneIcon_PresentationIcon_Rows3Icon_StarIcon_lucide_react__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A,
            preset: {
                headline: {
                    default: ""
                },
                rows: [
                    {
                        default: ""
                    },
                    {
                        default: ""
                    }
                ],
                columns: [
                    {
                        default: ""
                    },
                    {
                        default: ""
                    }
                ],
                buttonLabel: {
                    default: t("templates.next")
                },
                backButtonLabel: {
                    default: t("templates.back")
                }
            }
        },
        {
            id: _formbricks_types_surveys_types__WEBPACK_IMPORTED_MODULE_2__/* .TSurveyQuestionTypeEnum */ .wn.CTA,
            label: t("templates.statement_call_to_action"),
            description: t("templates.cta_description"),
            icon: _barrel_optimize_names_ArrowUpFromLineIcon_CalendarDaysIcon_CheckIcon_ContactIcon_FileDigitIcon_FileType2Icon_Grid3X3Icon_HomeIcon_ImageIcon_ListIcon_ListOrderedIcon_MessageSquareTextIcon_MousePointerClickIcon_PhoneIcon_PresentationIcon_Rows3Icon_StarIcon_lucide_react__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A,
            preset: {
                headline: {
                    default: ""
                },
                html: {
                    default: ""
                },
                buttonLabel: {
                    default: t("templates.book_interview")
                },
                buttonExternal: false,
                dismissButtonLabel: {
                    default: t("templates.skip")
                },
                backButtonLabel: {
                    default: t("templates.back")
                }
            }
        },
        {
            id: _formbricks_types_surveys_types__WEBPACK_IMPORTED_MODULE_2__/* .TSurveyQuestionTypeEnum */ .wn.Consent,
            label: t("templates.consent"),
            description: t("templates.consent_description"),
            icon: _barrel_optimize_names_ArrowUpFromLineIcon_CalendarDaysIcon_CheckIcon_ContactIcon_FileDigitIcon_FileType2Icon_Grid3X3Icon_HomeIcon_ImageIcon_ListIcon_ListOrderedIcon_MessageSquareTextIcon_MousePointerClickIcon_PhoneIcon_PresentationIcon_Rows3Icon_StarIcon_lucide_react__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A,
            preset: {
                headline: {
                    default: ""
                },
                html: {
                    default: ""
                },
                label: {
                    default: ""
                },
                buttonLabel: {
                    default: t("templates.next")
                },
                backButtonLabel: {
                    default: t("templates.back")
                }
            }
        },
        {
            id: _formbricks_types_surveys_types__WEBPACK_IMPORTED_MODULE_2__/* .TSurveyQuestionTypeEnum */ .wn.FileUpload,
            label: t("templates.file_upload"),
            description: t("templates.file_upload_description"),
            icon: _barrel_optimize_names_ArrowUpFromLineIcon_CalendarDaysIcon_CheckIcon_ContactIcon_FileDigitIcon_FileType2Icon_Grid3X3Icon_HomeIcon_ImageIcon_ListIcon_ListOrderedIcon_MessageSquareTextIcon_MousePointerClickIcon_PhoneIcon_PresentationIcon_Rows3Icon_StarIcon_lucide_react__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A,
            preset: {
                headline: {
                    default: ""
                },
                allowMultipleFiles: false,
                buttonLabel: {
                    default: t("templates.next")
                },
                backButtonLabel: {
                    default: t("templates.back")
                }
            }
        },
        {
            id: _formbricks_types_surveys_types__WEBPACK_IMPORTED_MODULE_2__/* .TSurveyQuestionTypeEnum */ .wn.Date,
            label: t("templates.date"),
            description: t("templates.date_description"),
            icon: _barrel_optimize_names_ArrowUpFromLineIcon_CalendarDaysIcon_CheckIcon_ContactIcon_FileDigitIcon_FileType2Icon_Grid3X3Icon_HomeIcon_ImageIcon_ListIcon_ListOrderedIcon_MessageSquareTextIcon_MousePointerClickIcon_PhoneIcon_PresentationIcon_Rows3Icon_StarIcon_lucide_react__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A,
            preset: {
                headline: {
                    default: ""
                },
                format: "M-d-y",
                buttonLabel: {
                    default: t("templates.next")
                },
                backButtonLabel: {
                    default: t("templates.back")
                }
            }
        },
        {
            id: _formbricks_types_surveys_types__WEBPACK_IMPORTED_MODULE_2__/* .TSurveyQuestionTypeEnum */ .wn.Cal,
            label: t("templates.schedule_a_meeting"),
            description: t("templates.schedule_a_meeting_description"),
            icon: _barrel_optimize_names_ArrowUpFromLineIcon_CalendarDaysIcon_CheckIcon_ContactIcon_FileDigitIcon_FileType2Icon_Grid3X3Icon_HomeIcon_ImageIcon_ListIcon_ListOrderedIcon_MessageSquareTextIcon_MousePointerClickIcon_PhoneIcon_PresentationIcon_Rows3Icon_StarIcon_lucide_react__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A,
            preset: {
                headline: {
                    default: ""
                },
                calUserName: "rick/get-rick-rolled",
                buttonLabel: {
                    default: t("templates.next")
                },
                backButtonLabel: {
                    default: t("templates.back")
                }
            }
        },
        {
            id: _formbricks_types_surveys_types__WEBPACK_IMPORTED_MODULE_2__/* .TSurveyQuestionTypeEnum */ .wn.Address,
            label: t("templates.address"),
            description: t("templates.address_description"),
            icon: _barrel_optimize_names_ArrowUpFromLineIcon_CalendarDaysIcon_CheckIcon_ContactIcon_FileDigitIcon_FileType2Icon_Grid3X3Icon_HomeIcon_ImageIcon_ListIcon_ListOrderedIcon_MessageSquareTextIcon_MousePointerClickIcon_PhoneIcon_PresentationIcon_Rows3Icon_StarIcon_lucide_react__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A,
            preset: {
                headline: {
                    default: ""
                },
                addressLine1: {
                    show: true,
                    required: true,
                    placeholder: {
                        default: "Address Line 1"
                    }
                },
                addressLine2: {
                    show: true,
                    required: true,
                    placeholder: {
                        default: "Address Line 2"
                    }
                },
                city: {
                    show: true,
                    required: true,
                    placeholder: {
                        default: "City"
                    }
                },
                state: {
                    show: true,
                    required: true,
                    placeholder: {
                        default: "State"
                    }
                },
                zip: {
                    show: true,
                    required: true,
                    placeholder: {
                        default: "Zip"
                    }
                },
                country: {
                    show: true,
                    required: true,
                    placeholder: {
                        default: "Country"
                    }
                },
                buttonLabel: {
                    default: t("templates.next")
                },
                backButtonLabel: {
                    default: t("templates.back")
                }
            }
        },
        {
            id: _formbricks_types_surveys_types__WEBPACK_IMPORTED_MODULE_2__/* .TSurveyQuestionTypeEnum */ .wn.ContactInfo,
            label: t("templates.contact_info"),
            description: t("templates.contact_info_description"),
            icon: _barrel_optimize_names_ArrowUpFromLineIcon_CalendarDaysIcon_CheckIcon_ContactIcon_FileDigitIcon_FileType2Icon_Grid3X3Icon_HomeIcon_ImageIcon_ListIcon_ListOrderedIcon_MessageSquareTextIcon_MousePointerClickIcon_PhoneIcon_PresentationIcon_Rows3Icon_StarIcon_lucide_react__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A,
            preset: {
                headline: {
                    default: ""
                },
                firstName: {
                    show: true,
                    required: true,
                    placeholder: {
                        default: "First Name"
                    }
                },
                lastName: {
                    show: true,
                    required: true,
                    placeholder: {
                        default: "Last Name"
                    }
                },
                email: {
                    show: true,
                    required: true,
                    placeholder: {
                        default: "Email"
                    }
                },
                phone: {
                    show: true,
                    required: true,
                    placeholder: {
                        default: "Phone"
                    }
                },
                company: {
                    show: true,
                    required: true,
                    placeholder: {
                        default: "Company"
                    }
                },
                buttonLabel: {
                    default: t("templates.next")
                },
                backButtonLabel: {
                    default: t("templates.back")
                }
            }
        }
    ];
const getCXQuestionTypes = (t)=>getQuestionTypes(t).filter((questionType)=>{
        return [
            _formbricks_types_surveys_types__WEBPACK_IMPORTED_MODULE_2__/* .TSurveyQuestionTypeEnum */ .wn.OpenText,
            _formbricks_types_surveys_types__WEBPACK_IMPORTED_MODULE_2__/* .TSurveyQuestionTypeEnum */ .wn.MultipleChoiceSingle,
            _formbricks_types_surveys_types__WEBPACK_IMPORTED_MODULE_2__/* .TSurveyQuestionTypeEnum */ .wn.MultipleChoiceMulti,
            _formbricks_types_surveys_types__WEBPACK_IMPORTED_MODULE_2__/* .TSurveyQuestionTypeEnum */ .wn.Rating,
            _formbricks_types_surveys_types__WEBPACK_IMPORTED_MODULE_2__/* .TSurveyQuestionTypeEnum */ .wn.NPS,
            _formbricks_types_surveys_types__WEBPACK_IMPORTED_MODULE_2__/* .TSurveyQuestionTypeEnum */ .wn.Consent,
            _formbricks_types_surveys_types__WEBPACK_IMPORTED_MODULE_2__/* .TSurveyQuestionTypeEnum */ .wn.CTA
        ].includes(questionType.id);
    });
const getQuestionIconMap = (t)=>getQuestionTypes(t).reduce((prev, curr)=>({
            ...prev,
            [curr.id]: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(curr.icon, {
                className: "h-4 w-4"
            })
        }), {});
const getQuestionNameMap = (t)=>getQuestionTypes(t).reduce((prev, curr)=>({
            ...prev,
            [curr.id]: curr.label
        }), {});
const getQuestionIcon = (type, t)=>{
    return getQuestionTypes(t).find((questionType)=>questionType.id === type)?.icon;
};
const VARIABLES_ICON_MAP = {
    text: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_ArrowUpFromLineIcon_CalendarDaysIcon_CheckIcon_ContactIcon_FileDigitIcon_FileType2Icon_Grid3X3Icon_HomeIcon_ImageIcon_ListIcon_ListOrderedIcon_MessageSquareTextIcon_MousePointerClickIcon_PhoneIcon_PresentationIcon_Rows3Icon_StarIcon_lucide_react__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A, {
        className: "h-4 w-4"
    }),
    number: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_ArrowUpFromLineIcon_CalendarDaysIcon_CheckIcon_ContactIcon_FileDigitIcon_FileType2Icon_Grid3X3Icon_HomeIcon_ImageIcon_ListIcon_ListOrderedIcon_MessageSquareTextIcon_MousePointerClickIcon_PhoneIcon_PresentationIcon_Rows3Icon_StarIcon_lucide_react__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A, {
        className: "h-4 w-4"
    })
};
const getCXQuestionNameMap = (t)=>getCXQuestionTypes(t).reduce((prev, curr)=>({
            ...prev,
            [curr.id]: curr.label
        }), {});
const universalQuestionPresets = {
    required: true
};
const getQuestionDefaults = (id, project, t)=>{
    const questionType = getQuestionTypes(t).find((questionType)=>questionType.id === id);
    return (0,_templates__WEBPACK_IMPORTED_MODULE_20__/* .replaceQuestionPresetPlaceholders */ .G)(questionType?.preset, project);
};
const getTSurveyQuestionTypeEnumName = (id, t)=>{
    const questionType = getQuestionTypes(t).find((questionType)=>questionType.id === id);
    return questionType?.label;
};


/***/ }),

/***/ 93139:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ replaceQuestionPresetPlaceholders)
/* harmony export */ });
/* unused harmony export replacePresetPlaceholders */
/* harmony import */ var _i18n_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(864698);
/* harmony import */ var _pollyfills_structuredClone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(300189);


const replaceQuestionPresetPlaceholders = (question, project)=>{
    if (!project) return question;
    const newQuestion = (0,_pollyfills_structuredClone__WEBPACK_IMPORTED_MODULE_0__/* .structuredClone */ .p)(question);
    const defaultLanguageCode = "default";
    if (newQuestion.headline) {
        newQuestion.headline[defaultLanguageCode] = (0,_i18n_utils__WEBPACK_IMPORTED_MODULE_1__/* .getLocalizedValue */ .bT)(newQuestion.headline, defaultLanguageCode).replace("{{projectName}}", project.name);
    }
    if (newQuestion.subheader) {
        newQuestion.subheader[defaultLanguageCode] = (0,_i18n_utils__WEBPACK_IMPORTED_MODULE_1__/* .getLocalizedValue */ .bT)(newQuestion.subheader, defaultLanguageCode)?.replace("{{projectName}}", project.name);
    }
    return newQuestion;
};
// replace all occurences of projectName with the actual project name in the current template
const replacePresetPlaceholders = (template, project)=>{
    const preset = structuredClone(template.preset);
    preset.name = preset.name.replace("{{projectName}}", project.name);
    preset.questions = preset.questions.map((question)=>{
        return replaceQuestionPresetPlaceholders(question, project);
    });
    return {
        ...template,
        preset
    };
};


/***/ }),

/***/ 715626:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Pw: () => (/* binding */ getResponsesAction),
/* harmony export */   Q: () => (/* binding */ generateInsightsForSurveyAction),
/* harmony export */   Xx: () => (/* binding */ getResponseCountAction),
/* harmony export */   aV: () => (/* binding */ revalidateSurveyIdPath),
/* harmony export */   jt: () => (/* binding */ getSurveySummaryAction)
/* harmony export */ });
/* harmony import */ var private_next_rsc_server_reference__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(286055);
/* harmony import */ var private_next_rsc_action_encryption__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(770767);
/* harmony import */ var private_next_rsc_action_encryption__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(private_next_rsc_action_encryption__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_api_internal_insights_lib_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(493814);
/* harmony import */ var _lib_utils_action_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(308046);
/* harmony import */ var _lib_utils_action_client_middleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(729455);
/* harmony import */ var _lib_utils_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(440388);
/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(310256);
/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_cache__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(283131);
/* harmony import */ var _formbricks_lib_response_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(535874);
/* harmony import */ var _formbricks_types_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(552224);
/* harmony import */ var _formbricks_types_responses__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(131116);
/* harmony import */ var _summary_lib_surveySummary__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(319607);
/* harmony import */ var private_next_rsc_action_validate__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(429931);
/* __next_internal_action_entry_do_not_use__ {"7f7ce9467586d1b8044c1acac25e7b329b0fb32cc8":"revalidateSurveyIdPath","7f88c3ec2a43c4ca4f41e882464c602eb6821d8801":"getSurveySummaryAction","7fc40fcf4d8238c50e0ee14725c1e9b7cc636f4788":"getResponseCountAction","7fd73d1497a560cbeee5172423313870fb38d2878a":"getResponsesAction","7feb9d6cc472595c84de8ff53385fd3485b86dfbdd":"generateInsightsForSurveyAction"} */ 











const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ revalidateSurveyIdPath = async (environmentId, surveyId)=>{
    (0,next_cache__WEBPACK_IMPORTED_MODULE_5__.revalidatePath)(`/environments/${environmentId}/surveys/${surveyId}`);
};
const ZGetResponsesAction = zod__WEBPACK_IMPORTED_MODULE_7__.z.object({
    surveyId: _formbricks_types_common__WEBPACK_IMPORTED_MODULE_8__/* .ZId */ .i4,
    limit: zod__WEBPACK_IMPORTED_MODULE_7__.z.number().optional(),
    offset: zod__WEBPACK_IMPORTED_MODULE_7__.z.number().optional(),
    filterCriteria: _formbricks_types_responses__WEBPACK_IMPORTED_MODULE_9__/* .ZResponseFilterCriteria */ .jT.optional()
});
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getResponsesAction = _lib_utils_action_client__WEBPACK_IMPORTED_MODULE_2__/* .authenticatedActionClient */ .D.schema(ZGetResponsesAction).action(async ({ ctx, parsedInput })=>{
    await (0,_lib_utils_action_client_middleware__WEBPACK_IMPORTED_MODULE_3__/* .checkAuthorizationUpdated */ .r)({
        userId: ctx.user.id,
        organizationId: await (0,_lib_utils_helper__WEBPACK_IMPORTED_MODULE_4__/* .getOrganizationIdFromSurveyId */ .a1)(parsedInput.surveyId),
        access: [
            {
                type: "organization",
                schema: _formbricks_types_responses__WEBPACK_IMPORTED_MODULE_9__/* .ZResponseFilterCriteria */ .jT,
                data: parsedInput.filterCriteria,
                roles: [
                    "owner",
                    "manager"
                ]
            },
            {
                type: "projectTeam",
                minPermission: "read",
                projectId: await (0,_lib_utils_helper__WEBPACK_IMPORTED_MODULE_4__/* .getProjectIdFromSurveyId */ .Y)(parsedInput.surveyId)
            }
        ]
    });
    return (0,_formbricks_lib_response_service__WEBPACK_IMPORTED_MODULE_10__/* .getResponses */ .J6)(parsedInput.surveyId, parsedInput.limit, parsedInput.offset, parsedInput.filterCriteria);
});
const ZGetSurveySummaryAction = zod__WEBPACK_IMPORTED_MODULE_7__.z.object({
    surveyId: _formbricks_types_common__WEBPACK_IMPORTED_MODULE_8__/* .ZId */ .i4,
    filterCriteria: _formbricks_types_responses__WEBPACK_IMPORTED_MODULE_9__/* .ZResponseFilterCriteria */ .jT.optional()
});
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getSurveySummaryAction = _lib_utils_action_client__WEBPACK_IMPORTED_MODULE_2__/* .authenticatedActionClient */ .D.schema(ZGetSurveySummaryAction).action(async ({ ctx, parsedInput })=>{
    await (0,_lib_utils_action_client_middleware__WEBPACK_IMPORTED_MODULE_3__/* .checkAuthorizationUpdated */ .r)({
        userId: ctx.user.id,
        organizationId: await (0,_lib_utils_helper__WEBPACK_IMPORTED_MODULE_4__/* .getOrganizationIdFromSurveyId */ .a1)(parsedInput.surveyId),
        access: [
            {
                type: "organization",
                schema: _formbricks_types_responses__WEBPACK_IMPORTED_MODULE_9__/* .ZResponseFilterCriteria */ .jT,
                data: parsedInput.filterCriteria,
                roles: [
                    "owner",
                    "manager"
                ]
            },
            {
                type: "projectTeam",
                minPermission: "read",
                projectId: await (0,_lib_utils_helper__WEBPACK_IMPORTED_MODULE_4__/* .getProjectIdFromSurveyId */ .Y)(parsedInput.surveyId)
            }
        ]
    });
    return (0,_summary_lib_surveySummary__WEBPACK_IMPORTED_MODULE_6__/* .getSurveySummary */ .n2)(parsedInput.surveyId, parsedInput.filterCriteria);
});
const ZGetResponseCountAction = zod__WEBPACK_IMPORTED_MODULE_7__.z.object({
    surveyId: _formbricks_types_common__WEBPACK_IMPORTED_MODULE_8__/* .ZId */ .i4,
    filterCriteria: _formbricks_types_responses__WEBPACK_IMPORTED_MODULE_9__/* .ZResponseFilterCriteria */ .jT.optional()
});
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getResponseCountAction = _lib_utils_action_client__WEBPACK_IMPORTED_MODULE_2__/* .authenticatedActionClient */ .D.schema(ZGetResponseCountAction).action(async ({ ctx, parsedInput })=>{
    await (0,_lib_utils_action_client_middleware__WEBPACK_IMPORTED_MODULE_3__/* .checkAuthorizationUpdated */ .r)({
        userId: ctx.user.id,
        organizationId: await (0,_lib_utils_helper__WEBPACK_IMPORTED_MODULE_4__/* .getOrganizationIdFromSurveyId */ .a1)(parsedInput.surveyId),
        access: [
            {
                type: "organization",
                schema: _formbricks_types_responses__WEBPACK_IMPORTED_MODULE_9__/* .ZResponseFilterCriteria */ .jT,
                data: parsedInput.filterCriteria,
                roles: [
                    "owner",
                    "manager"
                ]
            },
            {
                type: "projectTeam",
                minPermission: "read",
                projectId: await (0,_lib_utils_helper__WEBPACK_IMPORTED_MODULE_4__/* .getProjectIdFromSurveyId */ .Y)(parsedInput.surveyId)
            }
        ]
    });
    return (0,_formbricks_lib_response_service__WEBPACK_IMPORTED_MODULE_10__/* .getResponseCountBySurveyId */ .h4)(parsedInput.surveyId, parsedInput.filterCriteria);
});
const ZGenerateInsightsForSurveyAction = zod__WEBPACK_IMPORTED_MODULE_7__.z.object({
    surveyId: _formbricks_types_common__WEBPACK_IMPORTED_MODULE_8__/* .ZId */ .i4
});
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ generateInsightsForSurveyAction = _lib_utils_action_client__WEBPACK_IMPORTED_MODULE_2__/* .authenticatedActionClient */ .D.schema(ZGenerateInsightsForSurveyAction).action(async ({ ctx, parsedInput })=>{
    await (0,_lib_utils_action_client_middleware__WEBPACK_IMPORTED_MODULE_3__/* .checkAuthorizationUpdated */ .r)({
        userId: ctx.user.id,
        organizationId: await (0,_lib_utils_helper__WEBPACK_IMPORTED_MODULE_4__/* .getOrganizationIdFromSurveyId */ .a1)(parsedInput.surveyId),
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
    (0,_app_api_internal_insights_lib_utils__WEBPACK_IMPORTED_MODULE_11__/* .generateInsightsForSurvey */ .Mv)(parsedInput.surveyId);
});

(0,private_next_rsc_action_validate__WEBPACK_IMPORTED_MODULE_12__/* .ensureServerEntryExports */ .D)([
    revalidateSurveyIdPath,
    getResponsesAction,
    getSurveySummaryAction,
    getResponseCountAction,
    generateInsightsForSurveyAction
]);
(0,private_next_rsc_server_reference__WEBPACK_IMPORTED_MODULE_0__/* .registerServerReference */ .A)(revalidateSurveyIdPath, "7f7ce9467586d1b8044c1acac25e7b329b0fb32cc8", null);
(0,private_next_rsc_server_reference__WEBPACK_IMPORTED_MODULE_0__/* .registerServerReference */ .A)(getResponsesAction, "7fd73d1497a560cbeee5172423313870fb38d2878a", null);
(0,private_next_rsc_server_reference__WEBPACK_IMPORTED_MODULE_0__/* .registerServerReference */ .A)(getSurveySummaryAction, "7f88c3ec2a43c4ca4f41e882464c602eb6821d8801", null);
(0,private_next_rsc_server_reference__WEBPACK_IMPORTED_MODULE_0__/* .registerServerReference */ .A)(getResponseCountAction, "7fc40fcf4d8238c50e0ee14725c1e9b7cc636f4788", null);
(0,private_next_rsc_server_reference__WEBPACK_IMPORTED_MODULE_0__/* .registerServerReference */ .A)(generateInsightsForSurveyAction, "7feb9d6cc472595c84de8ff53385fd3485b86dfbdd", null);


/***/ }),

/***/ 171059:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyAnalysisNavigation: () => (/* binding */ SurveyAnalysisNavigation)
/* harmony export */ });
/* harmony import */ var react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(672771);
/* harmony import */ var react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_0__);

const SurveyAnalysisNavigation = (0,react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_0__.registerClientReference)(
function() { throw new Error("Attempted to call SurveyAnalysisNavigation() from the server but SurveyAnalysisNavigation is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component."); },
"/Users/kdy1/projects/formbricks/apps/web/app/(app)/environments/[environmentId]/surveys/[surveyId]/(analysis)/components/SurveyAnalysisNavigation.tsx",
"SurveyAnalysisNavigation",
);

/***/ }),

/***/ 525122:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Ph: () => (/* binding */ deleteResultShareUrlAction),
  J0: () => (/* binding */ generateResultShareUrlAction),
  C7: () => (/* binding */ getEmailHtmlAction),
  WI: () => (/* binding */ getResultShareUrlAction),
  WY: () => (/* binding */ sendEmbedSurveyPreviewEmailAction)
});

// EXTERNAL MODULE: ../../node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js
var server_reference = __webpack_require__(286055);
// EXTERNAL MODULE: ../../node_modules/next/dist/server/app-render/encryption.js
var encryption = __webpack_require__(770767);
// EXTERNAL MODULE: ../../node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-runtime.js
var react_jsx_runtime = __webpack_require__(470306);
;// ./modules/analysis/components/SingleResponseCard/components/Smileys.tsx

const TiredFace = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime.jsx)("svg", {
        viewBox: "0 0 72 72",
        xmlns: "http://www.w3.org/2000/svg",
        width: 36,
        height: 36,
        children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("g", {
            id: "line",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("circle", {
                    cx: "36",
                    cy: "36",
                    r: "23",
                    fill: "none",
                    stroke: "currentColor",
                    strokeMiterlimit: "10",
                    strokeWidth: "2",
                    ...props
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("path", {
                    fill: "none",
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: "10",
                    strokeWidth: "2",
                    d: "m21.88 23.92c5.102-0.06134 7.273-1.882 8.383-3.346"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("path", {
                    stroke: "currentColor",
                    strokeMiterlimit: "10",
                    strokeWidth: "2",
                    d: "m46.24 47.56c0-2.592-2.867-7.121-10.25-6.93-6.974 0.1812-10.22 4.518-10.22 7.111s4.271-1.611 10.05-1.492c6.317 0.13 10.43 3.903 10.43 1.311z"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("path", {
                    fill: "none",
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: "10",
                    strokeWidth: "2",
                    d: "m23.16 28.47c5.215 1.438 5.603 0.9096 8.204 1.207 1.068 0.1221-2.03 2.67-7.282 4.397"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("path", {
                    fill: "none",
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: "10",
                    strokeWidth: "2",
                    d: "m50.12 23.92c-5.102-0.06134-7.273-1.882-8.383-3.346"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("path", {
                    fill: "none",
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: "10",
                    strokeWidth: "2",
                    d: "m48.84 28.47c-5.215 1.438-5.603 0.9096-8.204 1.207-1.068 0.1221 2.03 2.67 7.282 4.397"
                })
            ]
        })
    });
};
const WearyFace = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime.jsx)("svg", {
        viewBox: "0 0 72 72",
        xmlns: "http://www.w3.org/2000/svg",
        width: 36,
        height: 36,
        children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("g", {
            id: "line",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("circle", {
                    cx: "36",
                    cy: "36",
                    r: "23",
                    fill: "none",
                    stroke: "currentColor",
                    strokeMiterlimit: "10",
                    strokeWidth: "2",
                    ...props
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("path", {
                    fill: "none",
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: "10",
                    strokeWidth: "2",
                    d: "m22.88 23.92c5.102-0.06134 7.273-1.882 8.383-3.346"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("path", {
                    stroke: "currentColor",
                    strokeMiterlimit: "10",
                    strokeWidth: "2",
                    d: "m46.24 47.56c0-2.592-2.867-7.121-10.25-6.93-6.974 0.1812-10.22 4.518-10.22 7.111s4.271-1.611 10.05-1.492c6.317 0.13 10.43 3.903 10.43 1.311z"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("path", {
                    fill: "none",
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: "10",
                    strokeWidth: "2",
                    d: "m49.12 23.92c-5.102-0.06134-7.273-1.882-8.383-3.346"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("path", {
                    fill: "none",
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: "10",
                    strokeWidth: "2",
                    d: "m48.24 30.51c-6.199 1.47-7.079 1.059-8.868-1.961"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("path", {
                    fill: "none",
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: "10",
                    strokeWidth: "2",
                    d: "m23.76 30.51c6.199 1.47 7.079 1.059 8.868-1.961"
                })
            ]
        })
    });
};
const PerseveringFace = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime.jsx)("svg", {
        viewBox: "0 0 72 72",
        xmlns: "http://www.w3.org/2000/svg",
        width: 36,
        height: 36,
        children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("g", {
            id: "line",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("circle", {
                    cx: "36",
                    cy: "36",
                    r: "23",
                    fill: "none",
                    stroke: "currentColor",
                    strokeMiterlimit: "10",
                    strokeWidth: "2",
                    ...props
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("line", {
                    x1: "44.5361",
                    x2: "50.9214",
                    y1: "21.4389",
                    y2: "24.7158",
                    fill: "none",
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: "10",
                    strokeWidth: "2"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("line", {
                    x1: "26.9214",
                    x2: "20.5361",
                    y1: "21.4389",
                    y2: "24.7158",
                    fill: "none",
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: "10",
                    strokeWidth: "2"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("path", {
                    fill: "none",
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: "10",
                    strokeWidth: "2",
                    d: "M24,28c2.3334,1.3333,4.6666,2.6667,7,4c-2.3334,1.3333-4.6666,2.6667-7,4"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("path", {
                    fill: "none",
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: "10",
                    strokeWidth: "2",
                    d: "M48,28c-2.3334,1.3333-4.6666,2.6667-7,4c2.3334,1.3333,4.6666,2.6667,7,4"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("path", {
                    fill: "none",
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: "10",
                    strokeWidth: "2",
                    d: "M28,51c0.2704-0.3562,1-8,8.4211-8.0038C43,42.9929,43.6499,50.5372,44,51C38.6667,51,33.3333,51,28,51z"
                })
            ]
        })
    });
};
const FrowningFace = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime.jsx)("svg", {
        viewBox: "0 0 72 72",
        xmlns: "http://www.w3.org/2000/svg",
        width: 36,
        height: 36,
        children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("g", {
            id: "line",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("circle", {
                    cx: "36",
                    cy: "36",
                    r: "23",
                    fill: "none",
                    stroke: "currentColor",
                    strokeMiterlimit: "10",
                    strokeWidth: "2",
                    ...props
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("path", {
                    fill: "none",
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: "10",
                    strokeWidth: "2",
                    d: "M26.5,48c1.8768-3.8326,5.8239-6.1965,10-6c3.8343,0.1804,7.2926,2.4926,9,6"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("path", {
                    d: "M30,31c0,1.6568-1.3448,3-3,3c-1.6553,0-3-1.3433-3-3c0-1.6552,1.3447-3,3-3C28.6552,28,30,29.3448,30,31"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("path", {
                    d: "M48,31c0,1.6568-1.3447,3-3,3s-3-1.3433-3-3c0-1.6552,1.3447-3,3-3S48,29.3448,48,31"
                })
            ]
        })
    });
};
const ConfusedFace = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime.jsx)("svg", {
        viewBox: "0 0 72 72",
        xmlns: "http://www.w3.org/2000/svg",
        width: 36,
        height: 36,
        children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("g", {
            id: "line",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("circle", {
                    cx: "36",
                    cy: "36",
                    r: "23",
                    fill: "none",
                    stroke: "currentColor",
                    strokeMiterlimit: "10",
                    strokeWidth: "2",
                    ...props
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("path", {
                    fill: "none",
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    d: "m44.7 43.92c-6.328-1.736-11.41-0.906-17.4 1.902"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("path", {
                    d: "M30,31c0,1.6568-1.3448,3-3,3c-1.6553,0-3-1.3433-3-3c0-1.6552,1.3447-3,3-3C28.6552,28,30,29.3448,30,31"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("path", {
                    d: "M48,31c0,1.6568-1.3447,3-3,3s-3-1.3433-3-3c0-1.6552,1.3447-3,3-3S48,29.3448,48,31"
                })
            ]
        })
    });
};
const NeutralFace = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime.jsx)("svg", {
        viewBox: "0 0 72 72",
        xmlns: "http://www.w3.org/2000/svg",
        width: 36,
        height: 36,
        children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("g", {
            id: "line",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("circle", {
                    cx: "36",
                    cy: "36",
                    r: "23",
                    fill: "none",
                    stroke: "currentColor",
                    strokeMiterlimit: "10",
                    strokeWidth: "2",
                    ...props
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("line", {
                    x1: "27",
                    x2: "45",
                    y1: "43",
                    y2: "43",
                    fill: "none",
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: "10",
                    strokeWidth: "2"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("path", {
                    d: "M30,31c0,1.6568-1.3448,3-3,3c-1.6553,0-3-1.3433-3-3c0-1.6552,1.3447-3,3-3C28.6552,28,30,29.3448,30,31"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("path", {
                    d: "M48,31c0,1.6568-1.3447,3-3,3s-3-1.3433-3-3c0-1.6552,1.3447-3,3-3S48,29.3448,48,31"
                })
            ]
        })
    });
};
const SlightlySmilingFace = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime.jsx)("svg", {
        viewBox: "0 0 72 72",
        xmlns: "http://www.w3.org/2000/svg",
        width: 36,
        height: 36,
        children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("g", {
            id: "line",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("circle", {
                    cx: "36",
                    cy: "36",
                    r: "23",
                    fill: "none",
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    ...props
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("path", {
                    fill: "none",
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    d: "M45.8149,44.9293 c-2.8995,1.6362-6.2482,2.5699-9.8149,2.5699s-6.9153-0.9336-9.8149-2.5699"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("path", {
                    d: "M30,31c0,1.6568-1.3448,3-3,3c-1.6553,0-3-1.3433-3-3c0-1.6552,1.3447-3,3-3C28.6552,28,30,29.3448,30,31"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("path", {
                    d: "M48,31c0,1.6568-1.3447,3-3,3s-3-1.3433-3-3c0-1.6552,1.3447-3,3-3S48,29.3448,48,31"
                })
            ]
        })
    });
};
const SmilingFaceWithSmilingEyes = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime.jsx)("svg", {
        viewBox: "0 0 72 72",
        xmlns: "http://www.w3.org/2000/svg",
        width: 36,
        height: 36,
        children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("g", {
            id: "line",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("circle", {
                    cx: "36",
                    cy: "36",
                    r: "23",
                    fill: "none",
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    ...props
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("path", {
                    fill: "none",
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    d: "M45.8147,45.2268a15.4294,15.4294,0,0,1-19.6294,0"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("path", {
                    fill: "none",
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeMiterlimit: "10",
                    strokeWidth: "2",
                    d: "M31.6941,33.4036a4.7262,4.7262,0,0,0-8.6382,0"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("path", {
                    fill: "none",
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeMiterlimit: "10",
                    strokeWidth: "2",
                    d: "M48.9441,33.4036a4.7262,4.7262,0,0,0-8.6382,0"
                })
            ]
        })
    });
};
const GrinningFaceWithSmilingEyes = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime.jsx)("svg", {
        viewBox: "0 0 72 72",
        xmlns: "http://www.w3.org/2000/svg",
        width: 36,
        height: 36,
        children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("g", {
            id: "line",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("circle", {
                    cx: "36",
                    cy: "36",
                    r: "23",
                    fill: "none",
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    ...props
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("path", {
                    fill: "none",
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    d: "M50.595,41.64a11.5554,11.5554,0,0,1-.87,4.49c-12.49,3.03-25.43.34-27.49-.13a11.4347,11.4347,0,0,1-.83-4.36h.11s14.8,3.59,28.89.07Z"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("path", {
                    fill: "none",
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    d: "M49.7251,46.13c-1.79,4.27-6.35,7.23-13.69,7.23-7.41,0-12.03-3.03-13.8-7.36C24.2951,46.47,37.235,49.16,49.7251,46.13Z"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("path", {
                    fill: "none",
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeMiterlimit: "10",
                    strokeWidth: "2",
                    d: "M31.6941,32.4036a4.7262,4.7262,0,0,0-8.6382,0"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("path", {
                    fill: "none",
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeMiterlimit: "10",
                    strokeWidth: "2",
                    d: "M48.9441,32.4036a4.7262,4.7262,0,0,0-8.6382,0"
                })
            ]
        })
    });
};
const GrinningSquintingFace = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime.jsx)("svg", {
        viewBox: "0 0 72 72",
        xmlns: "http://www.w3.org/2000/svg",
        width: 36,
        height: 36,
        children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("g", {
            id: "line",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("circle", {
                    cx: "36",
                    cy: "36",
                    r: "23",
                    fill: "none",
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    ...props
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("polyline", {
                    fill: "none",
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    points: "25.168 27.413 31.755 31.427 25.168 35.165"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("polyline", {
                    fill: "none",
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    points: "46.832 27.413 40.245 31.427 46.832 35.165"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("path", {
                    fill: "none",
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    d: "M50.595,41.64a11.5554,11.5554,0,0,1-.87,4.49c-12.49,3.03-25.43.34-27.49-.13a11.4347,11.4347,0,0,1-.83-4.36h.11s14.8,3.59,28.89.07Z"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("path", {
                    fill: "none",
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    d: "M49.7251,46.13c-1.79,4.27-6.35,7.23-13.69,7.23-7.41,0-12.03-3.03-13.8-7.36C24.2951,46.47,37.235,49.16,49.7251,46.13Z"
                })
            ]
        })
    });
};

;// ./modules/analysis/components/RatingSmiley/index.tsx


const getSmileyColor = (range, idx)=>{
    if (range > 5) {
        if (range - idx < 3) return "fill-emerald-100";
        if (range - idx < 5) return "fill-orange-100";
        return "fill-rose-100";
    } else if (range < 5) {
        if (range - idx < 2) return "fill-emerald-100";
        if (range - idx < 3) return "fill-orange-100";
        return "fill-rose-100";
    } else {
        if (range - idx < 3) return "fill-emerald-100";
        if (range - idx < 4) return "fill-orange-100";
        return "fill-rose-100";
    }
};
const getSmiley = (iconIdx, idx, range, active, addColors)=>{
    const activeColor = "fill-rating-fill";
    const inactiveColor = addColors ? getSmileyColor(range, idx) : "fill-none";
    const icons = [
        /*#__PURE__*/ (0,react_jsx_runtime.jsx)(TiredFace, {
            className: active ? activeColor : inactiveColor
        }),
        /*#__PURE__*/ (0,react_jsx_runtime.jsx)(WearyFace, {
            className: active ? activeColor : inactiveColor
        }),
        /*#__PURE__*/ (0,react_jsx_runtime.jsx)(PerseveringFace, {
            className: active ? activeColor : inactiveColor
        }),
        /*#__PURE__*/ (0,react_jsx_runtime.jsx)(FrowningFace, {
            className: active ? activeColor : inactiveColor
        }),
        /*#__PURE__*/ (0,react_jsx_runtime.jsx)(ConfusedFace, {
            className: active ? activeColor : inactiveColor
        }),
        /*#__PURE__*/ (0,react_jsx_runtime.jsx)(NeutralFace, {
            className: active ? activeColor : inactiveColor
        }),
        /*#__PURE__*/ (0,react_jsx_runtime.jsx)(SlightlySmilingFace, {
            className: active ? activeColor : inactiveColor
        }),
        /*#__PURE__*/ (0,react_jsx_runtime.jsx)(SmilingFaceWithSmilingEyes, {
            className: active ? activeColor : inactiveColor
        }),
        /*#__PURE__*/ (0,react_jsx_runtime.jsx)(GrinningFaceWithSmilingEyes, {
            className: active ? activeColor : inactiveColor
        }),
        /*#__PURE__*/ (0,react_jsx_runtime.jsx)(GrinningSquintingFace, {
            className: active ? activeColor : inactiveColor
        })
    ];
    return icons[iconIdx];
};
const RatingSmiley = ({ active, idx, range, addColors = false })=>{
    let iconsIdx = [];
    if (range === 10) iconsIdx = [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9
    ];
    else if (range === 7) iconsIdx = [
        1,
        3,
        4,
        5,
        6,
        8,
        9
    ];
    else if (range === 5) iconsIdx = [
        3,
        4,
        5,
        6,
        7
    ];
    else if (range === 4) iconsIdx = [
        4,
        5,
        6,
        7
    ];
    else if (range === 3) iconsIdx = [
        4,
        5,
        7
    ];
    return getSmiley(iconsIdx[idx], idx, range, active, addColors);
};

// EXTERNAL MODULE: ../../node_modules/@react-email/text/dist/index.mjs
var dist = __webpack_require__(593567);
// EXTERNAL MODULE: ../../node_modules/@react-email/section/dist/index.mjs
var section_dist = __webpack_require__(473201);
// EXTERNAL MODULE: ../../node_modules/@react-email/container/dist/index.mjs
var container_dist = __webpack_require__(117085);
// EXTERNAL MODULE: ../../node_modules/@react-email/button/dist/index.mjs
var button_dist = __webpack_require__(389082);
// EXTERNAL MODULE: ../../node_modules/@react-email/row/dist/index.mjs
var row_dist = __webpack_require__(166680);
// EXTERNAL MODULE: ../../node_modules/@react-email/column/dist/index.mjs
var column_dist = __webpack_require__(916228);
// EXTERNAL MODULE: ../../node_modules/@react-email/link/dist/index.mjs
var link_dist = __webpack_require__(899218);
// EXTERNAL MODULE: ../../node_modules/@react-email/img/dist/index.mjs
var img_dist = __webpack_require__(707993);
// EXTERNAL MODULE: ../../node_modules/@react-email/tailwind/dist/index.mjs
var tailwind_dist = __webpack_require__(213902);
// EXTERNAL MODULE: ../../node_modules/@react-email/render/dist/node/index.mjs + 31 modules
var node = __webpack_require__(65316);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/calendar-days.js
var calendar_days = __webpack_require__(692437);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/upload.js
var upload = __webpack_require__(969470);
// EXTERNAL MODULE: ../../node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js
var react = __webpack_require__(645625);
// EXTERNAL MODULE: ../../node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(825211);
// EXTERNAL MODULE: ../../packages/lib/node_modules/tailwind-merge/dist/bundle-mjs.mjs
var bundle_mjs = __webpack_require__(363459);
;// ../../packages/lib/cn.ts


const cn = (...inputs)=>{
    return (0,bundle_mjs/* twMerge */.QP)((0,clsx/* clsx */.$)(inputs));
};

// EXTERNAL MODULE: ../../packages/lib/i18n/utils.ts
var utils = __webpack_require__(319671);
;// ../../packages/lib/styling/constants.ts
// https://github.com/airbnb/javascript/#naming--uppercase
const COLOR_DEFAULTS = {
    brandColor: "#64748b",
    questionColor: "#2b2524",
    inputColor: "#ffffff",
    inputBorderColor: "#cbd5e1",
    cardBackgroundColor: "#ffffff",
    cardBorderColor: "#f8fafc",
    cardShadowColor: "#000000",
    highlightBorderColor: "#64748b"
};
const defaultStyling = {
    allowStyleOverwrite: true,
    brandColor: {
        light: COLOR_DEFAULTS.brandColor
    },
    questionColor: {
        light: COLOR_DEFAULTS.questionColor
    },
    inputColor: {
        light: COLOR_DEFAULTS.inputColor
    },
    inputBorderColor: {
        light: COLOR_DEFAULTS.inputBorderColor
    },
    cardBackgroundColor: {
        light: COLOR_DEFAULTS.cardBackgroundColor
    },
    cardBorderColor: {
        light: COLOR_DEFAULTS.cardBorderColor
    },
    cardShadowColor: {
        light: COLOR_DEFAULTS.cardShadowColor
    },
    isLogoHidden: false,
    highlightBorderColor: undefined,
    isDarkModeEnabled: false,
    background: {
        bg: "#fff",
        bgType: "color"
    },
    roundness: 8,
    cardArrangement: {
        linkSurveys: "straight",
        appSurveys: "straight"
    }
};

;// ../../packages/lib/utils/colors.ts
const hexToRGBA = (hex, opacity)=>{
    // return undefined if hex is undefined, this is important for adding the default values to the CSS variables
    // TODO: find a better way to handle this
    if (!hex || hex === "") return undefined;
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    let shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, (_, r, g, b)=>r + r + g + g + b + b);
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (!result) return "";
    let r = parseInt(result[1], 16);
    let g = parseInt(result[2], 16);
    let b = parseInt(result[3], 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};
const lightenDarkenColor = (hexColor, magnitude)=>{
    hexColor = hexColor.replace(`#`, ``);
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    if (hexColor.length === 3) {
        hexColor = hexColor.split("").map((char)=>char + char).join("");
    }
    if (hexColor.length === 6) {
        let decimalColor = parseInt(hexColor, 16);
        let r = (decimalColor >> 16) + magnitude;
        r = Math.max(0, Math.min(255, r)); // Clamp value between 0 and 255
        let g = (decimalColor >> 8 & 0x00ff) + magnitude;
        g = Math.max(0, Math.min(255, g)); // Clamp value between 0 and 255
        let b = (decimalColor & 0x0000ff) + magnitude;
        b = Math.max(0, Math.min(255, b)); // Clamp value between 0 and 255
        // Convert back to hex and return
        return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
    } else {
        // Return the original color if it's neither 3 nor 6 characters
        return hexColor;
    }
};
const mixColor = (hexColor, mixWithHex, weight)=>{
    // Convert both colors to RGBA format
    const color1 = hexToRGBA(hexColor, 1) || "";
    const color2 = hexToRGBA(mixWithHex, 1) || "";
    // Extract RGBA values
    const [r1, g1, b1] = color1.match(/\d+/g)?.map(Number) || [
        0,
        0,
        0
    ];
    const [r2, g2, b2] = color2.match(/\d+/g)?.map(Number) || [
        0,
        0,
        0
    ];
    // Mix the colors
    const r = Math.round(r1 * (1 - weight) + r2 * weight);
    const g = Math.round(g1 * (1 - weight) + g2 * weight);
    const b = Math.round(b1 * (1 - weight) + b2 * weight);
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
};
const isLight = (color)=>{
    let r, g, b;
    if (color.length === 4) {
        r = parseInt(color[1] + color[1], 16);
        g = parseInt(color[2] + color[2], 16);
        b = parseInt(color[3] + color[3], 16);
    } else if (color.length === 7) {
        r = parseInt(color[1] + color[2], 16);
        g = parseInt(color[3] + color[4], 16);
        b = parseInt(color[5] + color[6], 16);
    }
    if (r === undefined || g === undefined || b === undefined) {
        throw new Error("Invalid color");
    }
    return r * 0.299 + g * 0.587 + b * 0.114 > 128;
};

// EXTERNAL MODULE: ../../packages/types/surveys/types.ts + 3 modules
var types = __webpack_require__(797175);
;// ./modules/email/lib/utils.ts
const getNPSOptionColor = (idx)=>{
    if (idx > 8) return "bg-emerald-100";
    if (idx > 6) return "bg-orange-100";
    return "bg-rose-100";
};
const getRatingNumberOptionColor = (range, idx)=>{
    if (range > 5) {
        if (range - idx < 2) return "bg-emerald-100";
        if (range - idx < 4) return "bg-orange-100";
        return "bg-rose-100";
    } else if (range < 5) {
        if (range - idx < 1) return "bg-emerald-100";
        if (range - idx < 2) return "bg-orange-100";
        return "bg-rose-100";
    }
    if (range - idx < 2) return "bg-emerald-100";
    if (range - idx < 3) return "bg-orange-100";
    return "bg-rose-100";
};
const defaultLocale = "en-US";
const getMessages = (locale)=>{
    const messages = __webpack_require__(688751)(`./${locale}.json`);
    return messages.emails;
};
const translateEmailText = (text, locale, replacements)=>{
    const messages = getMessages(locale || defaultLocale);
    let translatedText = messages[text] || text;
    if (replacements) {
        Object.entries(replacements).forEach(([key, value])=>{
            translatedText = translatedText.replace(new RegExp(`\\{${key}\\}`, "g"), value);
        });
    }
    return translatedText;
};

;// ./modules/email/components/preview-email-template.tsx












const getPreviewEmailTemplateHtml = async (survey, surveyUrl, styling, locale, t)=>{
    return (0,node/* render */.XX)(/*#__PURE__*/ (0,react_jsx_runtime.jsx)(PreviewEmailTemplate, {
        styling: styling,
        survey: survey,
        surveyUrl: surveyUrl,
        locale: locale,
        t: t
    }), {
        pretty: true
    });
};
async function PreviewEmailTemplate({ survey, surveyUrl, styling, t }) {
    const url = `${surveyUrl}?preview=true`;
    const urlWithPrefilling = `${surveyUrl}?preview=true&skipPrefilled=true&`;
    const defaultLanguageCode = "default";
    const firstQuestion = survey.questions[0];
    const brandColor = styling.brandColor?.light ?? COLOR_DEFAULTS.brandColor;
    switch(firstQuestion.type){
        case types/* TSurveyQuestionTypeEnum */.wn.OpenText:
            return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(EmailTemplateWrapper, {
                styling: styling,
                surveyUrl: url,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(dist/* Text */.E, {
                        className: "text-question-color m-0 mr-8 block p-0 text-base font-semibold leading-6",
                        children: (0,utils/* getLocalizedValue */.bT)(firstQuestion.headline, defaultLanguageCode)
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(dist/* Text */.E, {
                        className: "text-question-color m-0 block p-0 text-sm font-normal leading-6",
                        children: (0,utils/* getLocalizedValue */.bT)(firstQuestion.subheader, defaultLanguageCode)
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(section_dist/* Section */.w, {
                        className: "border-input-border-color rounded-custom mt-4 block h-20 w-full border border-solid bg-slate-50"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(EmailFooter, {})
                ]
            });
        case types/* TSurveyQuestionTypeEnum */.wn.Consent:
            return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(EmailTemplateWrapper, {
                styling: styling,
                surveyUrl: url,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(dist/* Text */.E, {
                        className: "text-question-color m-0 block text-base font-semibold leading-6",
                        children: (0,utils/* getLocalizedValue */.bT)(firstQuestion.headline, defaultLanguageCode)
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(container_dist/* Container */.m, {
                        className: "text-question-color m-0 text-sm font-normal leading-6",
                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                            className: "m-0 p-0",
                            dangerouslySetInnerHTML: {
                                __html: (0,utils/* getLocalizedValue */.bT)(firstQuestion.html, defaultLanguageCode) || ""
                            }
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(container_dist/* Container */.m, {
                        className: "border-input-border-color bg-input-color rounded-custom m-0 mt-4 block w-full max-w-none border border-solid p-4 font-medium text-slate-800",
                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(dist/* Text */.E, {
                            className: "text-question-color m-0 inline-block",
                            children: (0,utils/* getLocalizedValue */.bT)(firstQuestion.label, defaultLanguageCode)
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(container_dist/* Container */.m, {
                        className: "mx-0 mt-4 flex max-w-none justify-end",
                        children: [
                            !firstQuestion.required && /*#__PURE__*/ (0,react_jsx_runtime.jsx)(button_dist/* Button */.$, {
                                className: "rounded-custom inline-flex cursor-pointer appearance-none px-6 py-3 text-sm font-medium text-black",
                                href: `${urlWithPrefilling}${firstQuestion.id}=dismissed`,
                                children: t("emails.reject")
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(button_dist/* Button */.$, {
                                className: cn("bg-brand-color rounded-custom ml-2 inline-flex cursor-pointer appearance-none px-6 py-3 text-sm font-medium", isLight(brandColor) ? "text-black" : "text-white"),
                                href: `${urlWithPrefilling}${firstQuestion.id}=accepted`,
                                children: t("emails.accept")
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(EmailFooter, {})
                ]
            });
        case types/* TSurveyQuestionTypeEnum */.wn.NPS:
            return /*#__PURE__*/ (0,react_jsx_runtime.jsx)(EmailTemplateWrapper, {
                styling: styling,
                surveyUrl: url,
                children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(section_dist/* Section */.w, {
                    className: "w-full justify-center",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)(dist/* Text */.E, {
                            className: "text-question-color m-0 block w-full text-base font-semibold leading-6",
                            children: (0,utils/* getLocalizedValue */.bT)(firstQuestion.headline, defaultLanguageCode)
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)(dist/* Text */.E, {
                            className: "text-question-color m-0 block w-full p-0 text-sm font-normal leading-6",
                            children: (0,utils/* getLocalizedValue */.bT)(firstQuestion.subheader, defaultLanguageCode)
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(container_dist/* Container */.m, {
                            className: "mx-0 mt-4 w-full items-center justify-center",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(section_dist/* Section */.w, {
                                    className: cn("w-full overflow-hidden", {
                                        "border border-solid border-slate-200": firstQuestion.scale === "number"
                                    }),
                                    children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(row_dist/* Row */.f, {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(column_dist/* Column */.V, {
                                            className: "mb-4 flex w-full justify-between gap-0",
                                            children: Array.from({
                                                length: 11
                                            }, (_, i)=>/*#__PURE__*/ (0,react_jsx_runtime.jsxs)(button_dist/* Button */.$, {
                                                    href: `${urlWithPrefilling}${firstQuestion.id}=${i.toString()}`,
                                                    className: cn(firstQuestion.isColorCodingEnabled ? "h-[46px]" : "h-10", "relative m-0 w-full overflow-hidden border border-l-0 border-solid border-slate-200 p-0 text-center align-middle leading-10 text-slate-800", {
                                                        "rounded-l-lg border-l": i === 0
                                                    }, {
                                                        "rounded-r-lg": i === 10
                                                    }),
                                                    children: [
                                                        firstQuestion.isColorCodingEnabled ? /*#__PURE__*/ (0,react_jsx_runtime.jsx)(section_dist/* Section */.w, {
                                                            className: `absolute left-0 top-0 h-[6px] w-full ${getNPSOptionColor(i)}`
                                                        }) : null,
                                                        i
                                                    ]
                                                }, i))
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(section_dist/* Section */.w, {
                                    className: "text-question-color mt-2 px-1.5 text-xs leading-6",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(row_dist/* Row */.f, {
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(column_dist/* Column */.V, {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(dist/* Text */.E, {
                                                    className: "m-0 inline-block w-max p-0",
                                                    children: (0,utils/* getLocalizedValue */.bT)(firstQuestion.lowerLabel, defaultLanguageCode)
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(column_dist/* Column */.V, {
                                                className: "text-right",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(dist/* Text */.E, {
                                                    className: "m-0 inline-block w-max p-0 text-right",
                                                    children: (0,utils/* getLocalizedValue */.bT)(firstQuestion.upperLabel, defaultLanguageCode)
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)(EmailFooter, {})
                    ]
                })
            });
        case types/* TSurveyQuestionTypeEnum */.wn.CTA:
            return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(EmailTemplateWrapper, {
                styling: styling,
                surveyUrl: url,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(dist/* Text */.E, {
                        className: "text-question-color m-0 block text-base font-semibold leading-6",
                        children: (0,utils/* getLocalizedValue */.bT)(firstQuestion.headline, defaultLanguageCode)
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(container_dist/* Container */.m, {
                        className: "text-question-color ml-0 mt-2 text-sm font-normal leading-6",
                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                            className: "m-0 p-0",
                            dangerouslySetInnerHTML: {
                                __html: (0,utils/* getLocalizedValue */.bT)(firstQuestion.html, defaultLanguageCode) || ""
                            }
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(container_dist/* Container */.m, {
                        className: "mx-0 mt-4 max-w-none",
                        children: [
                            !firstQuestion.required && /*#__PURE__*/ (0,react_jsx_runtime.jsx)(button_dist/* Button */.$, {
                                className: "rounded-custom inline-flex cursor-pointer appearance-none px-6 py-3 text-sm font-medium text-black",
                                href: `${urlWithPrefilling}${firstQuestion.id}=dismissed`,
                                children: (0,utils/* getLocalizedValue */.bT)(firstQuestion.dismissButtonLabel, defaultLanguageCode) || "Skip"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(button_dist/* Button */.$, {
                                className: cn("bg-brand-color rounded-custom inline-flex cursor-pointer appearance-none px-6 py-3 text-sm font-medium", isLight(brandColor) ? "text-black" : "text-white"),
                                href: `${urlWithPrefilling}${firstQuestion.id}=clicked`,
                                children: (0,utils/* getLocalizedValue */.bT)(firstQuestion.buttonLabel, defaultLanguageCode)
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(EmailFooter, {})
                ]
            });
        case types/* TSurveyQuestionTypeEnum */.wn.Rating:
            return /*#__PURE__*/ (0,react_jsx_runtime.jsx)(EmailTemplateWrapper, {
                styling: styling,
                surveyUrl: url,
                children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(section_dist/* Section */.w, {
                    className: "w-full",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)(dist/* Text */.E, {
                            className: "text-question-color m-0 block text-base font-semibold leading-6",
                            children: (0,utils/* getLocalizedValue */.bT)(firstQuestion.headline, defaultLanguageCode)
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)(dist/* Text */.E, {
                            className: "text-question-color m-0 block p-0 text-sm font-normal leading-6",
                            children: (0,utils/* getLocalizedValue */.bT)(firstQuestion.subheader, defaultLanguageCode)
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(container_dist/* Container */.m, {
                            className: "mx-0 mt-4 w-full items-center justify-center",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(section_dist/* Section */.w, {
                                    className: "w-full overflow-hidden",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(row_dist/* Row */.f, {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(column_dist/* Column */.V, {
                                            className: "flex w-full justify-around",
                                            children: Array.from({
                                                length: firstQuestion.range
                                            }, (_, i)=>/*#__PURE__*/ (0,react_jsx_runtime.jsxs)(button_dist/* Button */.$, {
                                                    className: cn("relative m-0 flex w-full items-center justify-center overflow-hidden border border-l-0 border-solid border-gray-200 p-0 text-center align-middle leading-10 text-slate-800", {
                                                        "rounded-l-lg border-l": i === 0
                                                    }, {
                                                        "rounded-r-lg": i === firstQuestion.range - 1
                                                    }, firstQuestion.isColorCodingEnabled && firstQuestion.scale === "number" ? "h-[46px]" : "h-10", firstQuestion.scale === "star" ? "h-12" : "h-10"),
                                                    href: `${urlWithPrefilling}${firstQuestion.id}=${(i + 1).toString()}`,
                                                    children: [
                                                        firstQuestion.scale === "smiley" && /*#__PURE__*/ (0,react_jsx_runtime.jsx)(RatingSmiley, {
                                                            active: false,
                                                            idx: i,
                                                            range: firstQuestion.range,
                                                            addColors: firstQuestion.isColorCodingEnabled
                                                        }),
                                                        firstQuestion.scale === "number" && /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, {
                                                            children: [
                                                                firstQuestion.isColorCodingEnabled ? /*#__PURE__*/ (0,react_jsx_runtime.jsx)(section_dist/* Section */.w, {
                                                                    className: `absolute left-0 top-0 h-[6px] w-full ${getRatingNumberOptionColor(firstQuestion.range, i + 1)}`
                                                                }) : null,
                                                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(dist/* Text */.E, {
                                                                    className: "m-0 flex h-10 items-center",
                                                                    children: i + 1
                                                                })
                                                            ]
                                                        }),
                                                        firstQuestion.scale === "star" && /*#__PURE__*/ (0,react_jsx_runtime.jsx)(dist/* Text */.E, {
                                                            className: "m-0 text-3xl",
                                                            children: "⭐"
                                                        })
                                                    ]
                                                }, i))
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(section_dist/* Section */.w, {
                                    className: "text-question-color m-0 px-1.5 text-xs leading-6",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(row_dist/* Row */.f, {
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(column_dist/* Column */.V, {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(dist/* Text */.E, {
                                                    className: "m-0 inline-block p-0",
                                                    children: (0,utils/* getLocalizedValue */.bT)(firstQuestion.lowerLabel, defaultLanguageCode)
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(column_dist/* Column */.V, {
                                                className: "text-right",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(dist/* Text */.E, {
                                                    className: "m-0 inline-block p-0 text-right",
                                                    children: (0,utils/* getLocalizedValue */.bT)(firstQuestion.upperLabel, defaultLanguageCode)
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)(EmailFooter, {})
                    ]
                })
            });
        case types/* TSurveyQuestionTypeEnum */.wn.MultipleChoiceMulti:
            return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(EmailTemplateWrapper, {
                styling: styling,
                surveyUrl: url,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(dist/* Text */.E, {
                        className: "text-question-color m-0 mr-8 block p-0 text-base font-semibold leading-6",
                        children: (0,utils/* getLocalizedValue */.bT)(firstQuestion.headline, defaultLanguageCode)
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(dist/* Text */.E, {
                        className: "text-question-color m-0 mb-2 block p-0 text-sm font-normal leading-6",
                        children: (0,utils/* getLocalizedValue */.bT)(firstQuestion.subheader, defaultLanguageCode)
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(container_dist/* Container */.m, {
                        className: "mx-0 max-w-none",
                        children: firstQuestion.choices.map((choice)=>/*#__PURE__*/ (0,react_jsx_runtime.jsx)(section_dist/* Section */.w, {
                                className: "border-input-border-color bg-input-color text-question-color rounded-custom mt-2 block w-full border border-solid p-4",
                                children: (0,utils/* getLocalizedValue */.bT)(choice.label, defaultLanguageCode)
                            }, choice.id))
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(EmailFooter, {})
                ]
            });
        case types/* TSurveyQuestionTypeEnum */.wn.Ranking:
            return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(EmailTemplateWrapper, {
                styling: styling,
                surveyUrl: url,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(dist/* Text */.E, {
                        className: "text-question-color m-0 mr-8 block p-0 text-base font-semibold leading-6",
                        children: (0,utils/* getLocalizedValue */.bT)(firstQuestion.headline, defaultLanguageCode)
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(dist/* Text */.E, {
                        className: "text-question-color m-0 mb-2 block p-0 text-sm font-normal leading-6",
                        children: (0,utils/* getLocalizedValue */.bT)(firstQuestion.subheader, defaultLanguageCode)
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(container_dist/* Container */.m, {
                        className: "mx-0 max-w-none",
                        children: firstQuestion.choices.map((choice)=>/*#__PURE__*/ (0,react_jsx_runtime.jsx)(section_dist/* Section */.w, {
                                className: "border-input-border-color bg-input-color text-question-color rounded-custom mt-2 block w-full border border-solid p-4",
                                children: (0,utils/* getLocalizedValue */.bT)(choice.label, defaultLanguageCode)
                            }, choice.id))
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(EmailFooter, {})
                ]
            });
        case types/* TSurveyQuestionTypeEnum */.wn.MultipleChoiceSingle:
            return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(EmailTemplateWrapper, {
                styling: styling,
                surveyUrl: url,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(dist/* Text */.E, {
                        className: "text-question-color m-0 mr-8 block p-0 text-base font-semibold leading-6",
                        children: (0,utils/* getLocalizedValue */.bT)(firstQuestion.headline, defaultLanguageCode)
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(dist/* Text */.E, {
                        className: "text-question-color m-0 mb-2 block p-0 text-sm font-normal leading-6",
                        children: (0,utils/* getLocalizedValue */.bT)(firstQuestion.subheader, defaultLanguageCode)
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(container_dist/* Container */.m, {
                        className: "mx-0 max-w-none",
                        children: firstQuestion.choices.map((choice)=>/*#__PURE__*/ (0,react_jsx_runtime.jsx)(link_dist/* Link */.N, {
                                className: "border-input-border-color bg-input-color text-question-color rounded-custom mt-2 block border border-solid p-4 hover:bg-slate-100",
                                href: `${urlWithPrefilling}${firstQuestion.id}=${(0,utils/* getLocalizedValue */.bT)(choice.label, defaultLanguageCode)}`,
                                children: (0,utils/* getLocalizedValue */.bT)(choice.label, defaultLanguageCode)
                            }, choice.id))
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(EmailFooter, {})
                ]
            });
        case types/* TSurveyQuestionTypeEnum */.wn.PictureSelection:
            return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(EmailTemplateWrapper, {
                styling: styling,
                surveyUrl: url,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(dist/* Text */.E, {
                        className: "text-question-color m-0 mr-8 block p-0 text-base font-semibold leading-6",
                        children: (0,utils/* getLocalizedValue */.bT)(firstQuestion.headline, defaultLanguageCode)
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(dist/* Text */.E, {
                        className: "text-question-color m-0 mb-2 block p-0 text-sm font-normal leading-6",
                        children: (0,utils/* getLocalizedValue */.bT)(firstQuestion.subheader, defaultLanguageCode)
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(section_dist/* Section */.w, {
                        className: "mx-0",
                        children: firstQuestion.choices.map((choice)=>firstQuestion.allowMulti ? /*#__PURE__*/ (0,react_jsx_runtime.jsx)(img_dist/* Img */.E, {
                                className: "rounded-custom mb-1 mr-1 inline-block h-[140px] w-[220px]",
                                src: choice.imageUrl
                            }, choice.id) : /*#__PURE__*/ (0,react_jsx_runtime.jsx)(link_dist/* Link */.N, {
                                className: "rounded-custom mb-1 mr-1 inline-block h-[140px] w-[220px]",
                                href: `${urlWithPrefilling}${firstQuestion.id}=${choice.id}`,
                                target: "_blank",
                                children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(img_dist/* Img */.E, {
                                    className: "rounded-custom h-full w-full",
                                    src: choice.imageUrl
                                })
                            }, choice.id))
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(EmailFooter, {})
                ]
            });
        case types/* TSurveyQuestionTypeEnum */.wn.Cal:
            return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(EmailTemplateWrapper, {
                styling: styling,
                surveyUrl: url,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(container_dist/* Container */.m, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(dist/* Text */.E, {
                                className: "text-question-color m-0 mb-2 block p-0 text-sm font-normal leading-6",
                                children: (0,utils/* getLocalizedValue */.bT)(firstQuestion.headline, defaultLanguageCode)
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(dist/* Text */.E, {
                                className: "text-question-color m-0 mb-2 block p-0 text-sm font-normal leading-6",
                                children: (0,utils/* getLocalizedValue */.bT)(firstQuestion.subheader, defaultLanguageCode)
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(button_dist/* Button */.$, {
                                className: cn("bg-brand-color rounded-custom mx-auto block w-max cursor-pointer appearance-none px-6 py-3 text-sm font-medium", isLight(brandColor) ? "text-black" : "text-white"),
                                children: t("emails.schedule_your_meeting")
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(EmailFooter, {})
                ]
            });
        case types/* TSurveyQuestionTypeEnum */.wn.Date:
            return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(EmailTemplateWrapper, {
                styling: styling,
                surveyUrl: url,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(dist/* Text */.E, {
                        className: "text-question-color m-0 mr-8 block p-0 text-base font-semibold leading-6",
                        children: (0,utils/* getLocalizedValue */.bT)(firstQuestion.headline, defaultLanguageCode)
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(dist/* Text */.E, {
                        className: "text-question-color m-0 block p-0 text-sm font-normal leading-6",
                        children: (0,utils/* getLocalizedValue */.bT)(firstQuestion.subheader, defaultLanguageCode)
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(section_dist/* Section */.w, {
                        className: "border-input-border-color bg-input-color rounded-custom mt-4 flex h-12 w-full items-center justify-center border border-solid",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(calendar_days/* default */.A, {
                                className: "text-question-color inline h-4 w-4"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(dist/* Text */.E, {
                                className: "text-question-color inline text-sm font-medium",
                                children: t("emails.select_a_date")
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(EmailFooter, {})
                ]
            });
        case types/* TSurveyQuestionTypeEnum */.wn.Matrix:
            return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(EmailTemplateWrapper, {
                styling: styling,
                surveyUrl: url,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(dist/* Text */.E, {
                        className: "text-question-color m-0 mr-8 block p-0 text-base font-semibold leading-6",
                        children: (0,utils/* getLocalizedValue */.bT)(firstQuestion.headline, "default")
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(dist/* Text */.E, {
                        className: "text-question-color m-0 mb-2 block p-0 text-sm font-normal leading-6",
                        children: (0,utils/* getLocalizedValue */.bT)(firstQuestion.subheader, "default")
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(container_dist/* Container */.m, {
                        className: "mx-0",
                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(section_dist/* Section */.w, {
                            className: "w-full table-auto",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(row_dist/* Row */.f, {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)(column_dist/* Column */.V, {
                                            className: "w-40 break-words px-4 py-2"
                                        }),
                                        firstQuestion.columns.map((column)=>{
                                            return /*#__PURE__*/ (0,react_jsx_runtime.jsx)(column_dist/* Column */.V, {
                                                className: "text-question-color max-w-40 break-words px-4 py-2 text-center",
                                                children: (0,utils/* getLocalizedValue */.bT)(column, "default")
                                            }, (0,utils/* getLocalizedValue */.bT)(column, "default"));
                                        })
                                    ]
                                }),
                                firstQuestion.rows.map((row, rowIndex)=>{
                                    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(row_dist/* Row */.f, {
                                        className: `${rowIndex % 2 === 0 ? "bg-input-color" : ""} rounded-custom`,
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(column_dist/* Column */.V, {
                                                className: "w-40 break-words px-4 py-2",
                                                children: (0,utils/* getLocalizedValue */.bT)(row, "default")
                                            }),
                                            firstQuestion.columns.map((_)=>{
                                                return /*#__PURE__*/ (0,react_jsx_runtime.jsx)(column_dist/* Column */.V, {
                                                    className: "text-question-color px-4 py-2",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(section_dist/* Section */.w, {
                                                        className: "bg-card-bg-color h-4 w-4 rounded-full p-2 outline"
                                                    })
                                                }, (0,utils/* getLocalizedValue */.bT)(_, "default"));
                                            })
                                        ]
                                    }, (0,utils/* getLocalizedValue */.bT)(row, "default"));
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(EmailFooter, {})
                ]
            });
        case types/* TSurveyQuestionTypeEnum */.wn.Address:
        case types/* TSurveyQuestionTypeEnum */.wn.ContactInfo:
            return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(EmailTemplateWrapper, {
                styling: styling,
                surveyUrl: url,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(dist/* Text */.E, {
                        className: "text-question-color m-0 mr-8 block p-0 text-base font-semibold leading-6",
                        children: (0,utils/* getLocalizedValue */.bT)(firstQuestion.headline, defaultLanguageCode)
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(dist/* Text */.E, {
                        className: "text-question-color m-0 block p-0 text-sm font-normal leading-6",
                        children: (0,utils/* getLocalizedValue */.bT)(firstQuestion.subheader, defaultLanguageCode)
                    }),
                    [
                        "First Name",
                        "Last Name",
                        "Email",
                        "Phone",
                        "Company"
                    ].map((label)=>/*#__PURE__*/ (0,react_jsx_runtime.jsx)(section_dist/* Section */.w, {
                            className: "border-input-border-color bg-input-color rounded-custom mt-4 block h-10 w-full border border-solid py-2 pl-2 text-slate-400",
                            children: label
                        }, label)),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(EmailFooter, {})
                ]
            });
        case types/* TSurveyQuestionTypeEnum */.wn.FileUpload:
            return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(EmailTemplateWrapper, {
                styling: styling,
                surveyUrl: url,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(dist/* Text */.E, {
                        className: "text-question-color m-0 mr-8 block p-0 text-base font-semibold leading-6",
                        children: (0,utils/* getLocalizedValue */.bT)(firstQuestion.headline, defaultLanguageCode)
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(dist/* Text */.E, {
                        className: "text-question-color m-0 block p-0 text-sm font-normal leading-6",
                        children: (0,utils/* getLocalizedValue */.bT)(firstQuestion.subheader, defaultLanguageCode)
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(section_dist/* Section */.w, {
                        className: "border-input-border-color rounded-custom mt-4 flex h-24 w-full items-center justify-center border border-dashed bg-slate-50",
                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(container_dist/* Container */.m, {
                            className: "mx-auto flex items-center text-center",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(upload/* default */.A, {
                                    className: "mt-6 inline h-5 w-5 text-slate-400"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(dist/* Text */.E, {
                                    className: "text-slate-400",
                                    children: t("emails.click_or_drag_to_upload_files")
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(EmailFooter, {})
                ]
            });
    }
}
function EmailTemplateWrapper({ children, surveyUrl, styling }) {
    let signatureColor = "";
    const colors = {
        "brand-color": styling.brandColor?.light ?? COLOR_DEFAULTS.brandColor,
        "card-bg-color": styling.cardBackgroundColor?.light ?? COLOR_DEFAULTS.cardBackgroundColor,
        "input-color": styling.inputColor?.light ?? COLOR_DEFAULTS.inputColor,
        "input-border-color": styling.inputBorderColor?.light ?? COLOR_DEFAULTS.inputBorderColor,
        "card-border-color": styling.cardBorderColor?.light ?? COLOR_DEFAULTS.cardBorderColor,
        "question-color": styling.questionColor?.light ?? COLOR_DEFAULTS.questionColor
    };
    if (isLight(colors["question-color"])) {
        signatureColor = mixColor(colors["question-color"], "#000000", 0.2);
    } else {
        signatureColor = mixColor(colors["question-color"], "#ffffff", 0.2);
    }
    return /*#__PURE__*/ (0,react_jsx_runtime.jsx)(tailwind_dist/* Tailwind */.n, {
        config: {
            theme: {
                extend: {
                    colors: {
                        ...colors,
                        "signature-color": signatureColor
                    },
                    borderRadius: {
                        custom: `${(styling.roundness ?? 8).toString()}px`
                    }
                }
            }
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(link_dist/* Link */.N, {
            className: "bg-card-bg-color border-card-border-color rounded-custom mx-0 my-2 block overflow-auto border border-solid p-8 font-sans text-inherit",
            href: surveyUrl,
            target: "_blank",
            children: children
        })
    });
}
function EmailFooter() {
    return /*#__PURE__*/ (0,react_jsx_runtime.jsx)(container_dist/* Container */.m, {
        className: "m-auto mt-8 text-center",
        children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(link_dist/* Link */.N, {
            className: "text-signature-color text-xs",
            href: "https://formbricks.com/",
            target: "_blank",
            children: "Powered by Formbricks"
        })
    });
}

// EXTERNAL MODULE: ./tolgee/server.tsx + 3 modules
var server = __webpack_require__(380145);
// EXTERNAL MODULE: ../../packages/lib/constants.ts
var constants = __webpack_require__(711344);
// EXTERNAL MODULE: ../../packages/lib/project/service.ts
var service = __webpack_require__(28492);
// EXTERNAL MODULE: ../../packages/lib/survey/service.ts + 2 modules
var survey_service = __webpack_require__(939483);
;// ../../packages/lib/utils/styling.ts
const getStyling = (project, survey)=>{
    // allow style overwrite is disabled from the project
    if (!project.styling.allowStyleOverwrite) {
        return project.styling;
    }
    // allow style overwrite is enabled from the project
    if (project.styling.allowStyleOverwrite) {
        // survey style overwrite is disabled
        if (!survey.styling?.overwriteThemeStyling) {
            return project.styling;
        }
        // survey style overwrite is enabled
        return survey.styling;
    }
    return project.styling;
};

;// ./app/(app)/environments/[environmentId]/surveys/[surveyId]/(analysis)/summary/lib/emailTemplate.tsx






const getEmailTemplateHtml = async (surveyId, locale)=>{
    const t = await (0,server/* getTranslate */.r)();
    const survey = await (0,survey_service/* getSurvey */.Dp)(surveyId);
    if (!survey) {
        throw new Error("Survey not found");
    }
    const project = await (0,service/* getProjectByEnvironmentId */.bq)(survey.environmentId);
    if (!project) {
        throw new Error("Project not found");
    }
    const styling = getStyling(project, survey);
    const surveyUrl = constants/* WEBAPP_URL */.YW + "/s/" + survey.id;
    const html = await getPreviewEmailTemplateHtml(survey, surveyUrl, styling, locale, t);
    const doctype = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">';
    const htmlCleaned = html.toString().replace(doctype, "");
    return htmlCleaned;
};

// EXTERNAL MODULE: ./lib/utils/action-client.ts
var action_client = __webpack_require__(308046);
// EXTERNAL MODULE: ./lib/utils/action-client-middleware.ts
var action_client_middleware = __webpack_require__(729455);
// EXTERNAL MODULE: ./lib/utils/helper.ts
var helper = __webpack_require__(440388);
// EXTERNAL MODULE: ./modules/ee/whitelabel/email-customization/lib/organization.ts
var organization = __webpack_require__(582899);
// EXTERNAL MODULE: ./modules/email/index.tsx + 21 modules
var email = __webpack_require__(778015);
// EXTERNAL MODULE: ../../node_modules/nanoid/index.js
var nanoid = __webpack_require__(834318);
// EXTERNAL MODULE: ../../node_modules/zod/lib/index.mjs
var lib = __webpack_require__(283131);
// EXTERNAL MODULE: ../../packages/types/common.ts
var common = __webpack_require__(552224);
// EXTERNAL MODULE: ../../packages/types/errors.ts
var errors = __webpack_require__(207798);
// EXTERNAL MODULE: ../../node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js
var action_validate = __webpack_require__(429931);
;// ./app/(app)/environments/[environmentId]/surveys/[surveyId]/(analysis)/summary/actions.ts
/* __next_internal_action_entry_do_not_use__ {"7f5389f29d7c7d5592a4111508b6188a3a279edb58":"getResultShareUrlAction","7f64ed559b1cc12faaf39be6158bf6928d6fa7fecc":"sendEmbedSurveyPreviewEmailAction","7f75dbf7cc4ee6daac4e8f4864033a340af5b84586":"getEmailHtmlAction","7fa4f19ab4986af355f71ff25dc7d879f955f45fc0":"generateResultShareUrlAction","7fc832ebe26c06e3d1b70d8cde4d8813ce90197707":"deleteResultShareUrlAction"} */ 












const ZSendEmbedSurveyPreviewEmailAction = lib.z.object({
    surveyId: common/* ZId */.i4
});
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ sendEmbedSurveyPreviewEmailAction = action_client/* authenticatedActionClient */.D.schema(ZSendEmbedSurveyPreviewEmailAction).action(async ({ ctx, parsedInput })=>{
    const organizationId = await (0,helper/* getOrganizationIdFromSurveyId */.a1)(parsedInput.surveyId);
    const organizationLogoUrl = await (0,organization/* getOrganizationLogoUrl */.ew)(organizationId);
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
                projectId: await (0,helper/* getProjectIdFromSurveyId */.Y)(parsedInput.surveyId)
            }
        ]
    });
    const survey = await (0,survey_service/* getSurvey */.Dp)(parsedInput.surveyId);
    if (!survey) {
        throw new errors/* ResourceNotFoundError */.CE("Survey", parsedInput.surveyId);
    }
    const rawEmailHtml = await getEmailTemplateHtml(parsedInput.surveyId, ctx.user.locale);
    const emailHtml = rawEmailHtml.replaceAll("?preview=true&amp;", "?").replaceAll("?preview=true&;", "?").replaceAll("?preview=true", "");
    return await (0,email/* sendEmbedSurveyPreviewEmail */.OB)(ctx.user.email, emailHtml, survey.environmentId, organizationLogoUrl || "");
});
const ZGenerateResultShareUrlAction = lib.z.object({
    surveyId: common/* ZId */.i4
});
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ generateResultShareUrlAction = action_client/* authenticatedActionClient */.D.schema(ZGenerateResultShareUrlAction).action(async ({ ctx, parsedInput })=>{
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
                minPermission: "readWrite",
                projectId: await (0,helper/* getProjectIdFromSurveyId */.Y)(parsedInput.surveyId)
            }
        ]
    });
    const survey = await (0,survey_service/* getSurvey */.Dp)(parsedInput.surveyId);
    if (!survey) {
        throw new errors/* ResourceNotFoundError */.CE("Survey", parsedInput.surveyId);
    }
    const resultShareKey = (0,nanoid/* customAlphabet */.d_)("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", 20)();
    await (0,survey_service/* updateSurvey */.cU)({
        ...survey,
        resultShareKey
    });
    return resultShareKey;
});
const ZGetResultShareUrlAction = lib.z.object({
    surveyId: common/* ZId */.i4
});
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getResultShareUrlAction = action_client/* authenticatedActionClient */.D.schema(ZGetResultShareUrlAction).action(async ({ ctx, parsedInput })=>{
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
    const survey = await (0,survey_service/* getSurvey */.Dp)(parsedInput.surveyId);
    if (!survey) {
        throw new errors/* ResourceNotFoundError */.CE("Survey", parsedInput.surveyId);
    }
    return survey.resultShareKey;
});
const ZDeleteResultShareUrlAction = lib.z.object({
    surveyId: common/* ZId */.i4
});
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ deleteResultShareUrlAction = action_client/* authenticatedActionClient */.D.schema(ZDeleteResultShareUrlAction).action(async ({ ctx, parsedInput })=>{
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
                minPermission: "readWrite",
                projectId: await (0,helper/* getProjectIdFromSurveyId */.Y)(parsedInput.surveyId)
            }
        ]
    });
    const survey = await (0,survey_service/* getSurvey */.Dp)(parsedInput.surveyId);
    if (!survey) {
        throw new errors/* ResourceNotFoundError */.CE("Survey", parsedInput.surveyId);
    }
    return await (0,survey_service/* updateSurvey */.cU)({
        ...survey,
        resultShareKey: null
    });
});
const ZGetEmailHtmlAction = lib.z.object({
    surveyId: common/* ZId */.i4
});
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getEmailHtmlAction = action_client/* authenticatedActionClient */.D.schema(ZGetEmailHtmlAction).action(async ({ ctx, parsedInput })=>{
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
                minPermission: "readWrite",
                projectId: await (0,helper/* getProjectIdFromSurveyId */.Y)(parsedInput.surveyId)
            }
        ]
    });
    return await getEmailTemplateHtml(parsedInput.surveyId, ctx.user.locale);
});

(0,action_validate/* ensureServerEntryExports */.D)([
    sendEmbedSurveyPreviewEmailAction,
    generateResultShareUrlAction,
    getResultShareUrlAction,
    deleteResultShareUrlAction,
    getEmailHtmlAction
]);
(0,server_reference/* registerServerReference */.A)(sendEmbedSurveyPreviewEmailAction, "7f64ed559b1cc12faaf39be6158bf6928d6fa7fecc", null);
(0,server_reference/* registerServerReference */.A)(generateResultShareUrlAction, "7fa4f19ab4986af355f71ff25dc7d879f955f45fc0", null);
(0,server_reference/* registerServerReference */.A)(getResultShareUrlAction, "7f5389f29d7c7d5592a4111508b6188a3a279edb58", null);
(0,server_reference/* registerServerReference */.A)(deleteResultShareUrlAction, "7fc832ebe26c06e3d1b70d8cde4d8813ce90197707", null);
(0,server_reference/* registerServerReference */.A)(getEmailHtmlAction, "7f75dbf7cc4ee6daac4e8f4864033a340af5b84586", null);


/***/ }),

/***/ 319607:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  n2: () => (/* binding */ getSurveySummary)
});

// UNUSED EXPORTS: getQuestionSummary, getResponsesForSummary, getSurveySummaryDropOff, getSurveySummaryMeta

// EXTERNAL MODULE: ./lib/cache/document.ts
var cache_document = __webpack_require__(729468);
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
// EXTERNAL MODULE: ../../packages/lib/utils/validate.ts
var validate = __webpack_require__(472749);
// EXTERNAL MODULE: ../../packages/types/common.ts
var common = __webpack_require__(552224);
// EXTERNAL MODULE: ../../packages/types/errors.ts
var errors = __webpack_require__(207798);
// EXTERNAL MODULE: ../../packages/types/surveys/types.ts + 3 modules
var types = __webpack_require__(797175);
;// ./app/(app)/environments/[environmentId]/surveys/[surveyId]/(analysis)/summary/lib/insights.ts










const getInsightsBySurveyIdQuestionId = (0,react.cache)(async (surveyId, questionId, limit, offset)=>(0,cache/* cache */.P)(async ()=>{
        (0,validate/* validateInputs */.C)([
            surveyId,
            common/* ZId */.i4
        ], [
            questionId,
            types/* ZSurveyQuestionId */.uD
        ]);
        limit = limit ?? constants/* INSIGHTS_PER_PAGE */.Uu;
        try {
            const insights = await src/* prisma */.z.insight.findMany({
                where: {
                    documentInsights: {
                        some: {
                            document: {
                                surveyId,
                                questionId
                            }
                        }
                    }
                },
                include: {
                    _count: {
                        select: {
                            documentInsights: {
                                where: {
                                    document: {
                                        surveyId,
                                        questionId
                                    }
                                }
                            }
                        }
                    }
                },
                orderBy: [
                    {
                        documentInsights: {
                            _count: "desc"
                        }
                    },
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
        `getInsightsBySurveyIdQuestionId-${surveyId}-${limit}-${offset}`
    ], {
        tags: [
            cache_document/* documentCache */.O.tag.bySurveyId(surveyId)
        ]
    })());

// EXTERNAL MODULE: ../../packages/lib/display/cache.ts
var display_cache = __webpack_require__(423650);
// EXTERNAL MODULE: ../../packages/lib/display/service.ts
var service = __webpack_require__(168677);
// EXTERNAL MODULE: ../../packages/lib/i18n/utils.ts
var utils = __webpack_require__(319671);
// EXTERNAL MODULE: ../../packages/lib/response/cache.ts
var response_cache = __webpack_require__(813255);
// EXTERNAL MODULE: ../../packages/lib/response/service.ts + 1 modules
var response_service = __webpack_require__(535874);
// EXTERNAL MODULE: ../../packages/lib/response/utils.ts + 4 modules
var response_utils = __webpack_require__(362002);
// EXTERNAL MODULE: ../../packages/lib/survey/cache.ts
var survey_cache = __webpack_require__(710528);
// EXTERNAL MODULE: ../../packages/lib/survey/service.ts + 2 modules
var survey_service = __webpack_require__(939483);
// EXTERNAL MODULE: ../../node_modules/@paralleldrive/cuid2/index.js
var cuid2 = __webpack_require__(730672);
;// ../../packages/lib/surveyLogic/utils.ts



const isConditionGroup = (condition)=>{
    return condition.connector !== undefined;
};
const duplicateLogicItem = (logicItem)=>{
    const duplicateConditionGroup = (group)=>{
        return {
            ...group,
            id: createId(),
            conditions: group.conditions.map((condition)=>{
                if (isConditionGroup(condition)) {
                    return duplicateConditionGroup(condition);
                } else {
                    return duplicateCondition(condition);
                }
            })
        };
    };
    const duplicateCondition = (condition)=>{
        return {
            ...condition,
            id: createId()
        };
    };
    const duplicateAction = (action)=>{
        return {
            ...action,
            id: createId()
        };
    };
    return {
        ...logicItem,
        id: createId(),
        conditions: duplicateConditionGroup(logicItem.conditions),
        actions: logicItem.actions.map(duplicateAction)
    };
};
const addConditionBelow = (group, resourceId, condition)=>{
    for(let i = 0; i < group.conditions.length; i++){
        const item = group.conditions[i];
        if (isConditionGroup(item)) {
            if (item.id === resourceId) {
                group.conditions.splice(i + 1, 0, condition);
                break;
            } else {
                addConditionBelow(item, resourceId, condition);
            }
        } else {
            if (item.id === resourceId) {
                group.conditions.splice(i + 1, 0, condition);
                break;
            }
        }
    }
};
const toggleGroupConnector = (group, resourceId)=>{
    if (group.id === resourceId) {
        group.connector = group.connector === "and" ? "or" : "and";
        return;
    }
    for (const condition of group.conditions){
        if (condition.connector) {
            toggleGroupConnector(condition, resourceId);
        }
    }
};
const removeCondition = (group, resourceId)=>{
    for(let i = 0; i < group.conditions.length; i++){
        const item = group.conditions[i];
        if (item.id === resourceId) {
            group.conditions.splice(i, 1);
            return;
        }
        if (isConditionGroup(item)) {
            removeCondition(item, resourceId);
        }
    }
    deleteEmptyGroups(group);
};
const duplicateCondition = (group, resourceId)=>{
    for(let i = 0; i < group.conditions.length; i++){
        const item = group.conditions[i];
        if (item.id === resourceId) {
            const newItem = {
                ...item,
                id: createId()
            };
            group.conditions.splice(i + 1, 0, newItem);
            return;
        }
        if (item.connector) {
            duplicateCondition(item, resourceId);
        }
    }
};
const deleteEmptyGroups = (group)=>{
    for(let i = 0; i < group.conditions.length; i++){
        const resource = group.conditions[i];
        if (isConditionGroup(resource) && resource.conditions.length === 0) {
            group.conditions.splice(i, 1);
        } else if (isConditionGroup(resource)) {
            deleteEmptyGroups(resource);
        }
    }
};
const createGroupFromResource = (group, resourceId)=>{
    for(let i = 0; i < group.conditions.length; i++){
        const item = group.conditions[i];
        if (item.id === resourceId) {
            const newGroup = {
                id: createId(),
                connector: "and",
                conditions: [
                    item
                ]
            };
            group.conditions[i] = newGroup;
            group.connector = group.connector ?? "and";
            return;
        }
        if (isConditionGroup(item)) {
            createGroupFromResource(item, resourceId);
        }
    }
};
const updateCondition = (group, resourceId, condition)=>{
    for(let i = 0; i < group.conditions.length; i++){
        const item = group.conditions[i];
        if (item.id === resourceId && !("connector" in item)) {
            group.conditions[i] = {
                ...item,
                ...condition
            };
            return;
        }
        if (isConditionGroup(item)) {
            updateCondition(item, resourceId, condition);
        }
    }
};
const getUpdatedActionBody = (action, objective)=>{
    if (objective === action.objective) return action;
    switch(objective){
        case "calculate":
            return {
                id: action.id,
                objective: "calculate",
                variableId: "",
                operator: "assign",
                value: {
                    type: "static",
                    value: ""
                }
            };
        case "requireAnswer":
            return {
                id: action.id,
                objective: "requireAnswer",
                target: ""
            };
        case "jumpToQuestion":
            return {
                id: action.id,
                objective: "jumpToQuestion",
                target: ""
            };
    }
};
const evaluateLogic = (localSurvey, data, variablesData, conditions, selectedLanguage)=>{
    const evaluateConditionGroup = (group)=>{
        const results = group.conditions.map((condition)=>{
            if (isConditionGroup(condition)) {
                return evaluateConditionGroup(condition);
            } else {
                return evaluateSingleCondition(localSurvey, data, variablesData, condition, selectedLanguage);
            }
        });
        return group.connector === "or" ? results.some((r)=>r) : results.every((r)=>r);
    };
    return evaluateConditionGroup(conditions);
};
const evaluateSingleCondition = (localSurvey, data, variablesData, condition, selectedLanguage)=>{
    try {
        let leftValue = getLeftOperandValue(localSurvey, data, variablesData, condition.leftOperand, selectedLanguage);
        let rightValue = condition.rightOperand ? getRightOperandValue(localSurvey, data, variablesData, condition.rightOperand) : undefined;
        let leftField;
        if (condition.leftOperand?.type === "question") {
            leftField = localSurvey.questions.find((q)=>q.id === condition.leftOperand?.value);
        } else if (condition.leftOperand?.type === "variable") {
            leftField = localSurvey.variables.find((v)=>v.id === condition.leftOperand?.value);
        } else if (condition.leftOperand?.type === "hiddenField") {
            leftField = condition.leftOperand.value;
        } else {
            leftField = "";
        }
        let rightField;
        if (condition.rightOperand?.type === "question") {
            rightField = localSurvey.questions.find((q)=>q.id === condition.rightOperand?.value);
        } else if (condition.rightOperand?.type === "variable") {
            rightField = localSurvey.variables.find((v)=>v.id === condition.rightOperand?.value);
        } else if (condition.rightOperand?.type === "hiddenField") {
            rightField = condition.rightOperand.value;
        } else {
            rightField = "";
        }
        if (condition.leftOperand.type === "variable" && leftField.type === "number" && condition.rightOperand?.type === "hiddenField") {
            rightValue = Number(rightValue);
        }
        switch(condition.operator){
            case "equals":
                if (condition.leftOperand.type === "question") {
                    if (leftField.type === types/* TSurveyQuestionTypeEnum */.wn.Date && typeof leftValue === "string" && typeof rightValue === "string") {
                        // when left value is of date question and right value is string
                        return new Date(leftValue).getTime() === new Date(rightValue).getTime();
                    }
                }
                // when left value is of openText, hiddenField, variable and right value is of multichoice
                if (condition.rightOperand?.type === "question") {
                    if (rightField.type === types/* TSurveyQuestionTypeEnum */.wn.MultipleChoiceMulti) {
                        if (Array.isArray(rightValue) && typeof leftValue === "string" && rightValue.length === 1) {
                            return rightValue.includes(leftValue);
                        } else return false;
                    } else if (rightField.type === types/* TSurveyQuestionTypeEnum */.wn.Date && typeof leftValue === "string" && typeof rightValue === "string") {
                        return new Date(leftValue).getTime() === new Date(rightValue).getTime();
                    }
                }
                return Array.isArray(leftValue) && leftValue.length === 1 && typeof rightValue === "string" && leftValue.includes(rightValue) || leftValue === rightValue;
            case "doesNotEqual":
                // when left value is of picture selection question and right value is its option
                if (condition.leftOperand.type === "question" && leftField.type === types/* TSurveyQuestionTypeEnum */.wn.PictureSelection && Array.isArray(leftValue) && leftValue.length > 0 && typeof rightValue === "string") {
                    return !leftValue.includes(rightValue);
                }
                // when left value is of date question and right value is string
                if (condition.leftOperand.type === "question" && leftField.type === types/* TSurveyQuestionTypeEnum */.wn.Date && typeof leftValue === "string" && typeof rightValue === "string") {
                    return new Date(leftValue).getTime() !== new Date(rightValue).getTime();
                }
                // when left value is of openText, hiddenField, variable and right value is of multichoice
                if (condition.rightOperand?.type === "question") {
                    if (rightField.type === types/* TSurveyQuestionTypeEnum */.wn.MultipleChoiceMulti) {
                        if (Array.isArray(rightValue) && typeof leftValue === "string" && rightValue.length === 1) {
                            return !rightValue.includes(leftValue);
                        } else return false;
                    } else if (rightField.type === types/* TSurveyQuestionTypeEnum */.wn.Date && typeof leftValue === "string" && typeof rightValue === "string") {
                        return new Date(leftValue).getTime() !== new Date(rightValue).getTime();
                    }
                }
                return Array.isArray(leftValue) && leftValue.length === 1 && typeof rightValue === "string" && !leftValue.includes(rightValue) || leftValue !== rightValue;
            case "contains":
                return String(leftValue).includes(String(rightValue));
            case "doesNotContain":
                return !String(leftValue).includes(String(rightValue));
            case "startsWith":
                return String(leftValue).startsWith(String(rightValue));
            case "doesNotStartWith":
                return !String(leftValue).startsWith(String(rightValue));
            case "endsWith":
                return String(leftValue).endsWith(String(rightValue));
            case "doesNotEndWith":
                return !String(leftValue).endsWith(String(rightValue));
            case "isSubmitted":
                if (typeof leftValue === "string") {
                    if (condition.leftOperand.type === "question" && leftField.type === types/* TSurveyQuestionTypeEnum */.wn.FileUpload && leftValue) {
                        return leftValue !== "skipped";
                    }
                    return leftValue !== "" && leftValue !== null;
                } else if (Array.isArray(leftValue)) {
                    return leftValue.length > 0;
                } else if (typeof leftValue === "number") {
                    return leftValue !== null;
                }
                return false;
            case "isSkipped":
                return Array.isArray(leftValue) && leftValue.length === 0 || leftValue === "" || leftValue === null || leftValue === undefined || typeof leftValue === "object" && Object.entries(leftValue).length === 0;
            case "isGreaterThan":
                return Number(leftValue) > Number(rightValue);
            case "isLessThan":
                return Number(leftValue) < Number(rightValue);
            case "isGreaterThanOrEqual":
                return Number(leftValue) >= Number(rightValue);
            case "isLessThanOrEqual":
                return Number(leftValue) <= Number(rightValue);
            case "equalsOneOf":
                return Array.isArray(rightValue) && typeof leftValue === "string" && rightValue.includes(leftValue);
            case "includesAllOf":
                return Array.isArray(leftValue) && Array.isArray(rightValue) && rightValue.every((v)=>leftValue.includes(v));
            case "includesOneOf":
                return Array.isArray(leftValue) && Array.isArray(rightValue) && rightValue.some((v)=>leftValue.includes(v));
            case "doesNotIncludeAllOf":
                return Array.isArray(leftValue) && Array.isArray(rightValue) && rightValue.every((v)=>!leftValue.includes(v));
            case "doesNotIncludeOneOf":
                return Array.isArray(leftValue) && Array.isArray(rightValue) && rightValue.some((v)=>!leftValue.includes(v));
            case "isAccepted":
                return leftValue === "accepted";
            case "isClicked":
                return leftValue === "clicked";
            case "isAfter":
                return new Date(String(leftValue)) > new Date(String(rightValue));
            case "isBefore":
                return new Date(String(leftValue)) < new Date(String(rightValue));
            case "isBooked":
                return leftValue === "booked" || !!(leftValue && leftValue !== "");
            case "isPartiallySubmitted":
                if (typeof leftValue === "object") {
                    return Object.values(leftValue).includes("");
                } else return false;
            case "isCompletelySubmitted":
                if (typeof leftValue === "object") {
                    const values = Object.values(leftValue);
                    return values.length > 0 && !values.includes("");
                } else return false;
            default:
                return false;
        }
    } catch (e) {
        return false;
    }
};
const getVariableValue = (variables, variableId, variablesData)=>{
    const variable = variables.find((v)=>v.id === variableId);
    if (!variable) return undefined;
    const variableValue = variablesData[variableId];
    return variable.type === "number" ? Number(variableValue) || 0 : variableValue || "";
};
const getLeftOperandValue = (localSurvey, data, variablesData, leftOperand, selectedLanguage)=>{
    switch(leftOperand.type){
        case "question":
            const currentQuestion = localSurvey.questions.find((q)=>q.id === leftOperand.value);
            if (!currentQuestion) return undefined;
            const responseValue = data[leftOperand.value];
            if (currentQuestion.type === "openText" && currentQuestion.inputType === "number") {
                return Number(responseValue) || undefined;
            }
            if (currentQuestion.type === "multipleChoiceSingle" || currentQuestion.type === "multipleChoiceMulti") {
                const isOthersEnabled = currentQuestion.choices.at(-1)?.id === "other";
                if (typeof responseValue === "string") {
                    const choice = currentQuestion.choices.find((choice)=>{
                        return (0,utils/* getLocalizedValue */.bT)(choice.label, selectedLanguage) === responseValue;
                    });
                    if (!choice) {
                        if (isOthersEnabled) {
                            return "other";
                        }
                        return undefined;
                    }
                    return choice.id;
                } else if (Array.isArray(responseValue)) {
                    let choices = [];
                    responseValue.forEach((value)=>{
                        const foundChoice = currentQuestion.choices.find((choice)=>{
                            return (0,utils/* getLocalizedValue */.bT)(choice.label, selectedLanguage) === value;
                        });
                        if (foundChoice) {
                            choices.push(foundChoice.id);
                        } else if (isOthersEnabled) {
                            choices.push("other");
                        }
                    });
                    if (choices) {
                        return Array.from(new Set(choices));
                    }
                }
            }
            return data[leftOperand.value];
        case "variable":
            const variables = localSurvey.variables || [];
            return getVariableValue(variables, leftOperand.value, variablesData);
        case "hiddenField":
            return data[leftOperand.value];
        default:
            return undefined;
    }
};
const getRightOperandValue = (localSurvey, data, variablesData, rightOperand)=>{
    if (!rightOperand) return undefined;
    switch(rightOperand.type){
        case "question":
            return data[rightOperand.value];
        case "variable":
            const variables = localSurvey.variables || [];
            return getVariableValue(variables, rightOperand.value, variablesData);
        case "hiddenField":
            return data[rightOperand.value];
        case "static":
            return rightOperand.value;
        default:
            return undefined;
    }
};
const performActions = (survey, actions, data, calculationResults)=>{
    let jumpTarget;
    const requiredQuestionIds = [];
    const calculations = {
        ...calculationResults
    };
    actions.forEach((action)=>{
        switch(action.objective){
            case "calculate":
                const result = performCalculation(survey, action, data, calculations);
                if (result !== undefined) calculations[action.variableId] = result;
                break;
            case "requireAnswer":
                requiredQuestionIds.push(action.target);
                break;
            case "jumpToQuestion":
                if (!jumpTarget) {
                    jumpTarget = action.target;
                }
                break;
        }
    });
    return {
        jumpTarget,
        requiredQuestionIds,
        calculations
    };
};
const performCalculation = (survey, action, data, calculations)=>{
    const variables = survey.variables || [];
    const variable = variables.find((v)=>v.id === action.variableId);
    if (!variable) return undefined;
    let currentValue = calculations[action.variableId];
    if (currentValue === undefined) {
        currentValue = variable.type === "number" ? 0 : "";
    }
    let operandValue;
    // Determine the operand value based on the action.value type
    switch(action.value.type){
        case "static":
            operandValue = action.value.value;
            break;
        case "variable":
            const value = calculations[action.value.value];
            if (typeof value === "number" || typeof value === "string") {
                operandValue = value;
            }
            break;
        case "question":
        case "hiddenField":
            const val = data[action.value.value];
            if (typeof val === "number" || typeof val === "string") {
                if (variable.type === "number" && !isNaN(Number(val))) {
                    operandValue = Number(val);
                }
                operandValue = val;
            }
            break;
    }
    if (operandValue === undefined || operandValue === null) return undefined;
    let result;
    switch(action.operator){
        case "add":
            result = Number(currentValue) + Number(operandValue);
            break;
        case "subtract":
            result = Number(currentValue) - Number(operandValue);
            break;
        case "multiply":
            result = Number(currentValue) * Number(operandValue);
            break;
        case "divide":
            if (Number(operandValue) === 0) return undefined;
            result = Number(currentValue) / Number(operandValue);
            break;
        case "assign":
            result = operandValue;
            break;
        case "concat":
            result = String(currentValue) + String(operandValue);
            break;
    }
    return result;
};

// EXTERNAL MODULE: ../../packages/types/responses.ts + 1 modules
var responses = __webpack_require__(131116);
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

;// ./app/(app)/environments/[environmentId]/surveys/[surveyId]/(analysis)/summary/lib/surveySummary.ts






















const getSurveySummaryMeta = (responses, displayCount)=>{
    const completedResponses = responses.filter((response)=>response.finished).length;
    let ttcResponseCount = 0;
    const ttcSum = responses.reduce((acc, response)=>{
        if (response.ttc?._total) {
            ttcResponseCount++;
            return acc + response.ttc._total;
        }
        return acc;
    }, 0);
    const responseCount = responses.length;
    const startsPercentage = displayCount > 0 ? responseCount / displayCount * 100 : 0;
    const completedPercentage = displayCount > 0 ? completedResponses / displayCount * 100 : 0;
    const dropOffCount = responseCount - completedResponses;
    const dropOffPercentage = responseCount > 0 ? dropOffCount / responseCount * 100 : 0;
    const ttcAverage = ttcResponseCount > 0 ? ttcSum / ttcResponseCount : 0;
    return {
        displayCount: displayCount || 0,
        totalResponses: responseCount,
        startsPercentage: convertFloatTo2Decimal(startsPercentage),
        completedResponses,
        completedPercentage: convertFloatTo2Decimal(completedPercentage),
        dropOffCount,
        dropOffPercentage: convertFloatTo2Decimal(dropOffPercentage),
        ttcAverage: convertFloatTo2Decimal(ttcAverage)
    };
};
const evaluateLogicAndGetNextQuestionId = (localSurvey, data, localVariables, currentQuestionIndex, currQuesTemp, selectedLanguage)=>{
    const questions = localSurvey.questions;
    let updatedSurvey = {
        ...localSurvey
    };
    let updatedVariables = {
        ...localVariables
    };
    let firstJumpTarget;
    if (currQuesTemp.logic && currQuesTemp.logic.length > 0) {
        for (const logic of currQuesTemp.logic){
            if (evaluateLogic(localSurvey, data, localVariables, logic.conditions, selectedLanguage ?? "default")) {
                const { jumpTarget, requiredQuestionIds, calculations } = performActions(updatedSurvey, logic.actions, data, updatedVariables);
                if (requiredQuestionIds.length > 0) {
                    updatedSurvey.questions = updatedSurvey.questions.map((q)=>requiredQuestionIds.includes(q.id) ? {
                            ...q,
                            required: true
                        } : q);
                }
                updatedVariables = {
                    ...updatedVariables,
                    ...calculations
                };
                if (jumpTarget && !firstJumpTarget) {
                    firstJumpTarget = jumpTarget;
                }
            }
        }
    }
    // If no jump target was set, check for a fallback logic
    if (!firstJumpTarget && currQuesTemp.logicFallback) {
        firstJumpTarget = currQuesTemp.logicFallback;
    }
    // Return the first jump target if found, otherwise go to the next question
    const nextQuestionId = firstJumpTarget || questions[currentQuestionIndex + 1]?.id || undefined;
    return {
        nextQuestionId,
        updatedSurvey,
        updatedVariables
    };
};
const getSurveySummaryDropOff = (survey, responses, displayCount)=>{
    const initialTtc = survey.questions.reduce((acc, question)=>{
        acc[question.id] = 0;
        return acc;
    }, {});
    let totalTtc = {
        ...initialTtc
    };
    let responseCounts = {
        ...initialTtc
    };
    let dropOffArr = new Array(survey.questions.length).fill(0);
    let impressionsArr = new Array(survey.questions.length).fill(0);
    let dropOffPercentageArr = new Array(survey.questions.length).fill(0);
    const surveyVariablesData = survey.variables?.reduce((acc, variable)=>{
        acc[variable.id] = variable.value;
        return acc;
    }, {});
    responses.forEach((response)=>{
        // Calculate total time-to-completion
        Object.keys(totalTtc).forEach((questionId)=>{
            if (response.ttc && response.ttc[questionId]) {
                totalTtc[questionId] += response.ttc[questionId];
                responseCounts[questionId]++;
            }
        });
        let localSurvey = structuredClone(survey);
        let localResponseData = {
            ...response.data
        };
        let localVariables = {
            ...surveyVariablesData
        };
        let currQuesIdx = 0;
        while(currQuesIdx < localSurvey.questions.length){
            const currQues = localSurvey.questions[currQuesIdx];
            if (!currQues) break;
            // question is not answered and required
            if (response.data[currQues.id] === undefined && currQues.required) {
                dropOffArr[currQuesIdx]++;
                impressionsArr[currQuesIdx]++;
                break;
            }
            impressionsArr[currQuesIdx]++;
            const { nextQuestionId, updatedSurvey, updatedVariables } = evaluateLogicAndGetNextQuestionId(localSurvey, localResponseData, localVariables, currQuesIdx, currQues, response.language);
            localSurvey = updatedSurvey;
            localVariables = updatedVariables;
            if (nextQuestionId) {
                const nextQuesIdx = survey.questions.findIndex((q)=>q.id === nextQuestionId);
                if (!response.data[nextQuestionId] && !response.finished) {
                    dropOffArr[nextQuesIdx]++;
                    impressionsArr[nextQuesIdx]++;
                    break;
                }
                currQuesIdx = nextQuesIdx;
            } else {
                currQuesIdx++;
            }
        }
    });
    // Calculate the average time for each question
    Object.keys(totalTtc).forEach((questionId)=>{
        totalTtc[questionId] = responseCounts[questionId] > 0 ? totalTtc[questionId] / responseCounts[questionId] : 0;
    });
    if (!survey.welcomeCard.enabled) {
        dropOffArr[0] = displayCount - impressionsArr[0];
        if (impressionsArr[0] > displayCount) dropOffPercentageArr[0] = 0;
        dropOffPercentageArr[0] = impressionsArr[0] - displayCount >= 0 ? 0 : (displayCount - impressionsArr[0]) / displayCount * 100 || 0;
        impressionsArr[0] = displayCount;
    } else {
        dropOffPercentageArr[0] = dropOffArr[0] / impressionsArr[0] * 100;
    }
    for(let i = 1; i < survey.questions.length; i++){
        if (impressionsArr[i] !== 0) {
            dropOffPercentageArr[i] = dropOffArr[i] / impressionsArr[i] * 100;
        }
    }
    const dropOff = survey.questions.map((question, index)=>{
        return {
            questionId: question.id,
            questionType: question.type,
            headline: (0,utils/* getLocalizedValue */.bT)(question.headline, "default"),
            ttc: convertFloatTo2Decimal(totalTtc[question.id]) || 0,
            impressions: impressionsArr[index] || 0,
            dropOffCount: dropOffArr[index] || 0,
            dropOffPercentage: convertFloatTo2Decimal(dropOffPercentageArr[index]) || 0
        };
    });
    return dropOff;
};
const getLanguageCode = (surveyLanguages, languageCode)=>{
    if (!surveyLanguages?.length || !languageCode) return "default";
    const language = surveyLanguages.find((surveyLanguage)=>surveyLanguage.language.code === languageCode);
    return language?.default ? "default" : language?.language.code || "default";
};
const checkForI18n = (responseData, id, survey, languageCode)=>{
    const question = survey.questions.find((question)=>question.id === id);
    if (question?.type === "multipleChoiceMulti" || question?.type === "ranking") {
        // Initialize an array to hold the choice values
        let choiceValues = [];
        (typeof responseData[id] === "string" ? [
            responseData[id]
        ] : responseData[id])?.forEach((data)=>{
            choiceValues.push((0,utils/* getLocalizedValue */.bT)(question.choices.find((choice)=>choice.label[languageCode] === data)?.label, "default") || data);
        });
        // Return the array of localized choice values of multiSelect multi questions
        return choiceValues;
    }
    // Return the localized value of the choice fo multiSelect single question
    const choice = question?.choices.find((choice)=>choice.label[languageCode] === responseData[id]);
    return (0,utils/* getLocalizedValue */.bT)(choice?.label, "default") || responseData[id];
};
const getQuestionSummary = async (survey, responses, dropOff)=>{
    const VALUES_LIMIT = 50;
    let summary = [];
    for (const question of survey.questions){
        switch(question.type){
            case types/* TSurveyQuestionTypeEnum */.wn.OpenText:
                {
                    let values = [];
                    responses.forEach((response)=>{
                        const answer = response.data[question.id];
                        if (answer && typeof answer === "string") {
                            values.push({
                                id: response.id,
                                updatedAt: response.updatedAt,
                                value: answer,
                                contact: response.contact,
                                contactAttributes: response.contactAttributes
                            });
                        }
                    });
                    const insights = await getInsightsBySurveyIdQuestionId(survey.id, question.id, 50);
                    summary.push({
                        type: question.type,
                        question,
                        responseCount: values.length,
                        samples: values.slice(0, VALUES_LIMIT),
                        insights,
                        insightsEnabled: question.insightsEnabled
                    });
                    values = [];
                    break;
                }
            case types/* TSurveyQuestionTypeEnum */.wn.MultipleChoiceSingle:
            case types/* TSurveyQuestionTypeEnum */.wn.MultipleChoiceMulti:
                {
                    let values = [];
                    // check last choice is others or not
                    const lastChoice = question.choices[question.choices.length - 1];
                    const isOthersEnabled = lastChoice.id === "other";
                    const questionChoices = question.choices.map((choice)=>(0,utils/* getLocalizedValue */.bT)(choice.label, "default"));
                    if (isOthersEnabled) {
                        questionChoices.pop();
                    }
                    const choiceCountMap = questionChoices.reduce((acc, choice)=>{
                        acc[choice] = 0;
                        return acc;
                    }, {});
                    const otherValues = [];
                    let totalSelectionCount = 0;
                    let totalResponseCount = 0;
                    responses.forEach((response)=>{
                        const responseLanguageCode = getLanguageCode(survey.languages, response.language);
                        const answer = responseLanguageCode === "default" ? response.data[question.id] : checkForI18n(response.data, question.id, survey, responseLanguageCode);
                        let hasValidAnswer = false;
                        if (Array.isArray(answer)) {
                            answer.forEach((value)=>{
                                if (value) {
                                    totalSelectionCount++;
                                    if (questionChoices.includes(value)) {
                                        choiceCountMap[value]++;
                                    } else if (isOthersEnabled) {
                                        otherValues.push({
                                            value,
                                            contact: response.contact,
                                            contactAttributes: response.contactAttributes
                                        });
                                    }
                                    hasValidAnswer = true;
                                }
                            });
                        } else if (typeof answer === "string") {
                            if (answer) {
                                totalSelectionCount++;
                                if (questionChoices.includes(answer)) {
                                    choiceCountMap[answer]++;
                                } else if (isOthersEnabled) {
                                    otherValues.push({
                                        value: answer,
                                        contact: response.contact,
                                        contactAttributes: response.contactAttributes
                                    });
                                }
                                hasValidAnswer = true;
                            }
                        }
                        if (hasValidAnswer) {
                            totalResponseCount++;
                        }
                    });
                    Object.entries(choiceCountMap).map(([label, count])=>{
                        values.push({
                            value: label,
                            count,
                            percentage: totalResponseCount > 0 ? convertFloatTo2Decimal(count / totalResponseCount * 100) : 0
                        });
                    });
                    if (isOthersEnabled) {
                        values.push({
                            value: (0,utils/* getLocalizedValue */.bT)(lastChoice.label, "default") || "Other",
                            count: otherValues.length,
                            percentage: totalResponseCount > 0 ? convertFloatTo2Decimal(otherValues.length / totalResponseCount * 100) : 0,
                            others: otherValues.slice(0, VALUES_LIMIT)
                        });
                    }
                    summary.push({
                        type: question.type,
                        question,
                        responseCount: totalResponseCount,
                        selectionCount: totalSelectionCount,
                        choices: values
                    });
                    values = [];
                    break;
                }
            case types/* TSurveyQuestionTypeEnum */.wn.PictureSelection:
                {
                    let values = [];
                    const choiceCountMap = {};
                    question.choices.forEach((choice)=>{
                        choiceCountMap[choice.id] = 0;
                    });
                    let totalResponseCount = 0;
                    let totalSelectionCount = 0;
                    responses.forEach((response)=>{
                        const answer = response.data[question.id];
                        if (Array.isArray(answer)) {
                            totalResponseCount++;
                            answer.forEach((value)=>{
                                totalSelectionCount++;
                                choiceCountMap[value]++;
                            });
                        }
                    });
                    question.choices.forEach((choice)=>{
                        values.push({
                            id: choice.id,
                            imageUrl: choice.imageUrl,
                            count: choiceCountMap[choice.id],
                            percentage: totalResponseCount > 0 ? convertFloatTo2Decimal(choiceCountMap[choice.id] / totalResponseCount * 100) : 0
                        });
                    });
                    summary.push({
                        type: question.type,
                        question,
                        responseCount: totalResponseCount,
                        selectionCount: totalSelectionCount,
                        choices: values
                    });
                    values = [];
                    break;
                }
            case types/* TSurveyQuestionTypeEnum */.wn.Rating:
                {
                    let values = [];
                    const choiceCountMap = {};
                    const range = question.range;
                    for(let i = 1; i <= range; i++){
                        choiceCountMap[i] = 0;
                    }
                    let totalResponseCount = 0;
                    let totalRating = 0;
                    let dismissed = 0;
                    responses.forEach((response)=>{
                        const answer = response.data[question.id];
                        if (typeof answer === "number") {
                            totalResponseCount++;
                            choiceCountMap[answer]++;
                            totalRating += answer;
                        } else if (response.ttc && response.ttc[question.id] > 0) {
                            dismissed++;
                        }
                    });
                    Object.entries(choiceCountMap).map(([label, count])=>{
                        values.push({
                            rating: parseInt(label),
                            count,
                            percentage: totalResponseCount > 0 ? convertFloatTo2Decimal(count / totalResponseCount * 100) : 0
                        });
                    });
                    summary.push({
                        type: question.type,
                        question,
                        average: convertFloatTo2Decimal(totalRating / totalResponseCount) || 0,
                        responseCount: totalResponseCount,
                        choices: values,
                        dismissed: {
                            count: dismissed
                        }
                    });
                    values = [];
                    break;
                }
            case types/* TSurveyQuestionTypeEnum */.wn.NPS:
                {
                    const data = {
                        promoters: 0,
                        passives: 0,
                        detractors: 0,
                        dismissed: 0,
                        total: 0,
                        score: 0
                    };
                    responses.forEach((response)=>{
                        const value = response.data[question.id];
                        if (typeof value === "number") {
                            data.total++;
                            if (value >= 9) {
                                data.promoters++;
                            } else if (value >= 7) {
                                data.passives++;
                            } else {
                                data.detractors++;
                            }
                        } else if (response.ttc && response.ttc[question.id] > 0) {
                            data.total++;
                            data.dismissed++;
                        }
                    });
                    data.score = data.total > 0 ? convertFloatTo2Decimal((data.promoters - data.detractors) / data.total * 100) : 0;
                    summary.push({
                        type: question.type,
                        question,
                        responseCount: data.total,
                        total: data.total,
                        score: data.score,
                        promoters: {
                            count: data.promoters,
                            percentage: data.total > 0 ? convertFloatTo2Decimal(data.promoters / data.total * 100) : 0
                        },
                        passives: {
                            count: data.passives,
                            percentage: data.total > 0 ? convertFloatTo2Decimal(data.passives / data.total * 100) : 0
                        },
                        detractors: {
                            count: data.detractors,
                            percentage: data.total > 0 ? convertFloatTo2Decimal(data.detractors / data.total * 100) : 0
                        },
                        dismissed: {
                            count: data.dismissed,
                            percentage: data.total > 0 ? convertFloatTo2Decimal(data.dismissed / data.total * 100) : 0
                        }
                    });
                    break;
                }
            case types/* TSurveyQuestionTypeEnum */.wn.CTA:
                {
                    const data = {
                        clicked: 0,
                        dismissed: 0
                    };
                    responses.forEach((response)=>{
                        const value = response.data[question.id];
                        if (value === "clicked") {
                            data.clicked++;
                        } else if (value === "dismissed") {
                            data.dismissed++;
                        }
                    });
                    const totalResponses = data.clicked + data.dismissed;
                    const idx = survey.questions.findIndex((q)=>q.id === question.id);
                    const impressions = dropOff[idx].impressions;
                    summary.push({
                        type: question.type,
                        question,
                        impressionCount: impressions,
                        clickCount: data.clicked,
                        skipCount: data.dismissed,
                        responseCount: totalResponses,
                        ctr: {
                            count: data.clicked,
                            percentage: impressions > 0 ? convertFloatTo2Decimal(data.clicked / impressions * 100) : 0
                        }
                    });
                    break;
                }
            case types/* TSurveyQuestionTypeEnum */.wn.Consent:
                {
                    const data = {
                        accepted: 0,
                        dismissed: 0
                    };
                    responses.forEach((response)=>{
                        const value = response.data[question.id];
                        if (value === "accepted") {
                            data.accepted++;
                        } else if (response.ttc && response.ttc[question.id] > 0) {
                            data.dismissed++;
                        }
                    });
                    const totalResponses = data.accepted + data.dismissed;
                    summary.push({
                        type: question.type,
                        question,
                        responseCount: totalResponses,
                        accepted: {
                            count: data.accepted,
                            percentage: totalResponses > 0 ? convertFloatTo2Decimal(data.accepted / totalResponses * 100) : 0
                        },
                        dismissed: {
                            count: data.dismissed,
                            percentage: totalResponses > 0 ? convertFloatTo2Decimal(data.dismissed / totalResponses * 100) : 0
                        }
                    });
                    break;
                }
            case types/* TSurveyQuestionTypeEnum */.wn.Date:
                {
                    let values = [];
                    responses.forEach((response)=>{
                        const answer = response.data[question.id];
                        if (answer && typeof answer === "string") {
                            values.push({
                                id: response.id,
                                updatedAt: response.updatedAt,
                                value: answer,
                                contact: response.contact,
                                contactAttributes: response.contactAttributes
                            });
                        }
                    });
                    summary.push({
                        type: question.type,
                        question,
                        responseCount: values.length,
                        samples: values.slice(0, VALUES_LIMIT)
                    });
                    values = [];
                    break;
                }
            case types/* TSurveyQuestionTypeEnum */.wn.FileUpload:
                {
                    let values = [];
                    responses.forEach((response)=>{
                        const answer = response.data[question.id];
                        if (Array.isArray(answer)) {
                            values.push({
                                id: response.id,
                                updatedAt: response.updatedAt,
                                value: answer,
                                contact: response.contact,
                                contactAttributes: response.contactAttributes
                            });
                        }
                    });
                    summary.push({
                        type: question.type,
                        question,
                        responseCount: values.length,
                        files: values.slice(0, VALUES_LIMIT)
                    });
                    values = [];
                    break;
                }
            case types/* TSurveyQuestionTypeEnum */.wn.Cal:
                {
                    const data = {
                        booked: 0,
                        skipped: 0
                    };
                    responses.forEach((response)=>{
                        const value = response.data[question.id];
                        if (value === "booked") {
                            data.booked++;
                        } else if (response.ttc && response.ttc[question.id] > 0) {
                            data.skipped++;
                        }
                    });
                    const totalResponses = data.booked + data.skipped;
                    summary.push({
                        type: question.type,
                        question,
                        responseCount: totalResponses,
                        booked: {
                            count: data.booked,
                            percentage: totalResponses > 0 ? convertFloatTo2Decimal(data.booked / totalResponses * 100) : 0
                        },
                        skipped: {
                            count: data.skipped,
                            percentage: totalResponses > 0 ? convertFloatTo2Decimal(data.skipped / totalResponses * 100) : 0
                        }
                    });
                    break;
                }
            case types/* TSurveyQuestionTypeEnum */.wn.Matrix:
                {
                    const rows = question.rows.map((row)=>(0,utils/* getLocalizedValue */.bT)(row, "default"));
                    const columns = question.columns.map((column)=>(0,utils/* getLocalizedValue */.bT)(column, "default"));
                    let totalResponseCount = 0;
                    // Initialize count object
                    const countMap = rows.reduce((acc, row)=>{
                        acc[row] = columns.reduce((colAcc, col)=>{
                            colAcc[col] = 0;
                            return colAcc;
                        }, {});
                        return acc;
                    }, {});
                    responses.forEach((response)=>{
                        const selectedResponses = response.data[question.id];
                        const responseLanguageCode = getLanguageCode(survey.languages, response.language);
                        if (selectedResponses) {
                            totalResponseCount++;
                            question.rows.forEach((row)=>{
                                const localizedRow = (0,utils/* getLocalizedValue */.bT)(row, responseLanguageCode);
                                const colValue = question.columns.find((column)=>{
                                    return (0,utils/* getLocalizedValue */.bT)(column, responseLanguageCode) === selectedResponses[localizedRow];
                                });
                                const colValueInDefaultLanguage = (0,utils/* getLocalizedValue */.bT)(colValue, "default");
                                if (colValueInDefaultLanguage && columns.includes(colValueInDefaultLanguage)) {
                                    countMap[(0,utils/* getLocalizedValue */.bT)(row, "default")][colValueInDefaultLanguage] += 1;
                                }
                            });
                        }
                    });
                    const matrixSummary = rows.map((row)=>{
                        let totalResponsesForRow = 0;
                        columns.forEach((col)=>{
                            totalResponsesForRow += countMap[row][col];
                        });
                        const columnPercentages = columns.map((col)=>{
                            const count = countMap[row][col];
                            const percentage = totalResponsesForRow > 0 ? (count / totalResponsesForRow * 100).toFixed(2) : "0.00";
                            return {
                                column: col,
                                percentage: Number(percentage)
                            };
                        });
                        return {
                            rowLabel: row,
                            columnPercentages,
                            totalResponsesForRow
                        };
                    });
                    summary.push({
                        type: question.type,
                        question,
                        responseCount: totalResponseCount,
                        data: matrixSummary
                    });
                    break;
                }
            case types/* TSurveyQuestionTypeEnum */.wn.Address:
            case types/* TSurveyQuestionTypeEnum */.wn.ContactInfo:
                {
                    let values = [];
                    responses.forEach((response)=>{
                        const answer = response.data[question.id];
                        if (Array.isArray(answer) && answer.length > 0) {
                            values.push({
                                id: response.id,
                                updatedAt: response.updatedAt,
                                value: answer,
                                contact: response.contact,
                                contactAttributes: response.contactAttributes
                            });
                        }
                    });
                    summary.push({
                        type: question.type,
                        question: question,
                        responseCount: values.length,
                        samples: values.slice(0, VALUES_LIMIT)
                    });
                    values = [];
                    break;
                }
            case types/* TSurveyQuestionTypeEnum */.wn.Ranking:
                {
                    let values = [];
                    const questionChoices = question.choices.map((choice)=>(0,utils/* getLocalizedValue */.bT)(choice.label, "default"));
                    let totalResponseCount = 0;
                    const choiceRankSums = {};
                    const choiceCountMap = {};
                    questionChoices.forEach((choice)=>{
                        choiceRankSums[choice] = 0;
                        choiceCountMap[choice] = 0;
                    });
                    responses.forEach((response)=>{
                        const responseLanguageCode = getLanguageCode(survey.languages, response.language);
                        const answer = responseLanguageCode === "default" ? response.data[question.id] : checkForI18n(response.data, question.id, survey, responseLanguageCode);
                        if (Array.isArray(answer)) {
                            totalResponseCount++;
                            answer.forEach((value, index)=>{
                                const ranking = index + 1; // Calculate ranking based on index
                                if (questionChoices.includes(value)) {
                                    choiceRankSums[value] += ranking;
                                    choiceCountMap[value]++;
                                }
                            });
                        }
                    });
                    questionChoices.forEach((choice)=>{
                        const count = choiceCountMap[choice];
                        const avgRanking = count > 0 ? choiceRankSums[choice] / count : 0;
                        values.push({
                            value: choice,
                            count,
                            avgRanking: convertFloatTo2Decimal(avgRanking)
                        });
                    });
                    summary.push({
                        type: question.type,
                        question,
                        responseCount: totalResponseCount,
                        choices: values
                    });
                    break;
                }
        }
    }
    survey.hiddenFields?.fieldIds?.forEach((hiddenFieldId)=>{
        let values = [];
        responses.forEach((response)=>{
            const answer = response.data[hiddenFieldId];
            if (answer && typeof answer === "string") {
                values.push({
                    updatedAt: response.updatedAt,
                    value: answer,
                    contact: response.contact,
                    contactAttributes: response.contactAttributes
                });
            }
        });
        summary.push({
            type: "hiddenField",
            id: hiddenFieldId,
            responseCount: values.length,
            samples: values.slice(0, VALUES_LIMIT)
        });
        values = [];
    });
    return summary;
};
const getSurveySummary = (0,react.cache)(async (surveyId, filterCriteria)=>(0,cache/* cache */.P)(async ()=>{
        (0,validate/* validateInputs */.C)([
            surveyId,
            common/* ZId */.i4
        ], [
            filterCriteria,
            responses/* ZResponseFilterCriteria */.jT.optional()
        ]);
        try {
            const survey = await (0,survey_service/* getSurvey */.Dp)(surveyId);
            if (!survey) {
                throw new errors/* ResourceNotFoundError */.CE("Survey", surveyId);
            }
            const batchSize = 5000;
            const responseCount = await (0,response_service/* getResponseCountBySurveyId */.h4)(surveyId, filterCriteria);
            const hasFilter = Object.keys(filterCriteria ?? {}).length > 0;
            const pages = Math.ceil(responseCount / batchSize);
            // Create an array of batch fetch promises
            const batchPromises = Array.from({
                length: pages
            }, (_, i)=>getResponsesForSummary(surveyId, batchSize, i * batchSize, filterCriteria));
            // Fetch all batches in parallel
            const batchResults = await Promise.all(batchPromises);
            // Combine all batch results
            const responses = batchResults.flat();
            const responseIds = hasFilter ? responses.map((response)=>response.id) : [];
            const displayCount = await (0,service/* getDisplayCountBySurveyId */.K6)(surveyId, {
                createdAt: filterCriteria?.createdAt,
                ...hasFilter && {
                    responseIds
                }
            });
            const dropOff = getSurveySummaryDropOff(survey, responses, displayCount);
            const [meta, questionWiseSummary] = await Promise.all([
                getSurveySummaryMeta(responses, displayCount),
                getQuestionSummary(survey, responses, dropOff)
            ]);
            return {
                meta,
                dropOff,
                summary: questionWiseSummary
            };
        } catch (error) {
            if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
                throw new errors/* DatabaseError */.a$(error.message);
            }
            throw error;
        }
    }, [
        `getSurveySummary-${surveyId}-${JSON.stringify(filterCriteria)}`
    ], {
        tags: [
            survey_cache/* surveyCache */.$.tag.byId(surveyId),
            response_cache/* responseCache */.Q.tag.bySurveyId(surveyId),
            display_cache/* displayCache */.x.tag.bySurveyId(surveyId)
        ]
    })());
const getResponsesForSummary = (0,react.cache)(async (surveyId, limit, offset, filterCriteria)=>(0,cache/* cache */.P)(async ()=>{
        (0,validate/* validateInputs */.C)([
            surveyId,
            common/* ZId */.i4
        ], [
            limit,
            common/* ZOptionalNumber */.Wo
        ], [
            offset,
            common/* ZOptionalNumber */.Wo
        ], [
            filterCriteria,
            responses/* ZResponseFilterCriteria */.jT.optional()
        ]);
        const queryLimit = limit ?? constants/* RESPONSES_PER_PAGE */.d1;
        const survey = await (0,survey_service/* getSurvey */.Dp)(surveyId);
        if (!survey) return [];
        try {
            const responses = await src/* prisma */.z.response.findMany({
                where: {
                    surveyId,
                    ...(0,response_utils/* buildWhereClause */.hv)(survey, filterCriteria)
                },
                select: {
                    id: true,
                    data: true,
                    updatedAt: true,
                    contact: {
                        select: {
                            id: true,
                            attributes: {
                                select: {
                                    attributeKey: true,
                                    value: true
                                }
                            }
                        }
                    },
                    contactAttributes: true,
                    language: true,
                    ttc: true,
                    finished: true
                },
                orderBy: [
                    {
                        createdAt: "desc"
                    }
                ],
                take: queryLimit,
                skip: offset
            });
            const transformedResponses = await Promise.all(responses.map((responsePrisma)=>{
                return {
                    ...responsePrisma,
                    contact: responsePrisma.contact ? {
                        id: responsePrisma.contact.id,
                        userId: responsePrisma.contact.attributes.find((attribute)=>attribute.attributeKey.key === "userId")?.value
                    } : null
                };
            }));
            return transformedResponses;
        } catch (error) {
            if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
                throw new errors/* DatabaseError */.a$(error.message);
            }
            throw error;
        }
    }, [
        `getResponsesForSummary-${surveyId}-${limit}-${offset}-${JSON.stringify(filterCriteria)}`
    ], {
        tags: [
            response_cache/* responseCache */.Q.tag.bySurveyId(surveyId)
        ]
    })());


/***/ }),

/***/ 460002:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UF: () => (/* binding */ getResponsesDownloadUrlAction),
/* harmony export */   VC: () => (/* binding */ getSurveyFilterDataAction),
/* harmony export */   q4: () => (/* binding */ updateSurveyAction)
/* harmony export */ });
/* harmony import */ var private_next_rsc_server_reference__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(286055);
/* harmony import */ var private_next_rsc_action_encryption__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(770767);
/* harmony import */ var private_next_rsc_action_encryption__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(private_next_rsc_action_encryption__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_utils_action_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(308046);
/* harmony import */ var _lib_utils_action_client_middleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(729455);
/* harmony import */ var _lib_utils_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(440388);
/* harmony import */ var _modules_ee_multi_language_surveys_lib_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(280612);
/* harmony import */ var _modules_survey_follow_ups_lib_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(431751);
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(283131);
/* harmony import */ var _formbricks_lib_organization_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(167440);
/* harmony import */ var _formbricks_lib_response_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(535874);
/* harmony import */ var _formbricks_lib_survey_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(939483);
/* harmony import */ var _formbricks_lib_tag_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(189687);
/* harmony import */ var _formbricks_types_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(552224);
/* harmony import */ var _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(207798);
/* harmony import */ var _formbricks_types_responses__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(131116);
/* harmony import */ var _formbricks_types_surveys_types__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(797175);
/* harmony import */ var private_next_rsc_action_validate__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(429931);
/* __next_internal_action_entry_do_not_use__ {"7f8fa2b402579cb2f263e2b1efb771533751dfc73b":"getResponsesDownloadUrlAction","7fb0b5f9c28bba4f951a5fb2237df27d92cf58a800":"updateSurveyAction","7ff28395ef910324905bcd03fc7f726a14fe4d60ec":"getSurveyFilterDataAction"} */ 















const ZGetResponsesDownloadUrlAction = zod__WEBPACK_IMPORTED_MODULE_6__.z.object({
    surveyId: _formbricks_types_common__WEBPACK_IMPORTED_MODULE_7__/* .ZId */ .i4,
    format: zod__WEBPACK_IMPORTED_MODULE_6__.z.union([
        zod__WEBPACK_IMPORTED_MODULE_6__.z.literal("csv"),
        zod__WEBPACK_IMPORTED_MODULE_6__.z.literal("xlsx")
    ]),
    filterCriteria: _formbricks_types_responses__WEBPACK_IMPORTED_MODULE_8__/* .ZResponseFilterCriteria */ .jT
});
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getResponsesDownloadUrlAction = _lib_utils_action_client__WEBPACK_IMPORTED_MODULE_2__/* .authenticatedActionClient */ .D.schema(ZGetResponsesDownloadUrlAction).action(async ({ ctx, parsedInput })=>{
    await (0,_lib_utils_action_client_middleware__WEBPACK_IMPORTED_MODULE_3__/* .checkAuthorizationUpdated */ .r)({
        userId: ctx.user.id,
        organizationId: await (0,_lib_utils_helper__WEBPACK_IMPORTED_MODULE_4__/* .getOrganizationIdFromSurveyId */ .a1)(parsedInput.surveyId),
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
                projectId: await (0,_lib_utils_helper__WEBPACK_IMPORTED_MODULE_4__/* .getProjectIdFromSurveyId */ .Y)(parsedInput.surveyId)
            }
        ]
    });
    return (0,_formbricks_lib_response_service__WEBPACK_IMPORTED_MODULE_9__/* .getResponseDownloadUrl */ .x0)(parsedInput.surveyId, parsedInput.format, parsedInput.filterCriteria);
});
const ZGetSurveyFilterDataAction = zod__WEBPACK_IMPORTED_MODULE_6__.z.object({
    surveyId: _formbricks_types_common__WEBPACK_IMPORTED_MODULE_7__/* .ZId */ .i4
});
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getSurveyFilterDataAction = _lib_utils_action_client__WEBPACK_IMPORTED_MODULE_2__/* .authenticatedActionClient */ .D.schema(ZGetSurveyFilterDataAction).action(async ({ ctx, parsedInput })=>{
    const survey = await (0,_formbricks_lib_survey_service__WEBPACK_IMPORTED_MODULE_10__/* .getSurvey */ .Dp)(parsedInput.surveyId);
    if (!survey) {
        throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_11__/* .ResourceNotFoundError */ .CE("Survey", parsedInput.surveyId);
    }
    await (0,_lib_utils_action_client_middleware__WEBPACK_IMPORTED_MODULE_3__/* .checkAuthorizationUpdated */ .r)({
        userId: ctx.user.id,
        organizationId: await (0,_lib_utils_helper__WEBPACK_IMPORTED_MODULE_4__/* .getOrganizationIdFromSurveyId */ .a1)(parsedInput.surveyId),
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
                projectId: await (0,_lib_utils_helper__WEBPACK_IMPORTED_MODULE_4__/* .getProjectIdFromSurveyId */ .Y)(parsedInput.surveyId)
            }
        ]
    });
    const [tags, { contactAttributes: attributes, meta, hiddenFields }] = await Promise.all([
        (0,_formbricks_lib_tag_service__WEBPACK_IMPORTED_MODULE_12__/* .getTagsByEnvironmentId */ .Dj)(survey.environmentId),
        (0,_formbricks_lib_response_service__WEBPACK_IMPORTED_MODULE_9__/* .getResponseFilteringValues */ .wx)(parsedInput.surveyId)
    ]);
    return {
        environmentTags: tags,
        attributes,
        meta,
        hiddenFields
    };
});
/**
 * Checks if survey follow-ups are enabled for the given organization.
 *
 * @param {string} organizationId  The ID of the organization to check.
 * @returns {Promise<void>}  A promise that resolves if the permission is granted.
 * @throws {ResourceNotFoundError}  If the organization is not found.
 * @throws {OperationNotAllowedError}  If survey follow-ups are not enabled for the organization.
 */ const checkSurveyFollowUpsPermission = async (organizationId)=>{
    const organization = await (0,_formbricks_lib_organization_service__WEBPACK_IMPORTED_MODULE_13__/* .getOrganization */ .SA)(organizationId);
    if (!organization) {
        throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_11__/* .ResourceNotFoundError */ .CE("Organization not found", organizationId);
    }
    const isSurveyFollowUpsEnabled = (0,_modules_survey_follow_ups_lib_utils__WEBPACK_IMPORTED_MODULE_14__/* .getSurveyFollowUpsPermission */ .T)(organization);
    if (!isSurveyFollowUpsEnabled) {
        throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_11__/* .OperationNotAllowedError */ .J4("Survey follow ups are not enabled for this organization");
    }
};
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ updateSurveyAction = _lib_utils_action_client__WEBPACK_IMPORTED_MODULE_2__/* .authenticatedActionClient */ .D.schema(_formbricks_types_surveys_types__WEBPACK_IMPORTED_MODULE_15__/* .ZSurvey */ .pf).action(async ({ ctx, parsedInput })=>{
    const organizationId = await (0,_lib_utils_helper__WEBPACK_IMPORTED_MODULE_4__/* .getOrganizationIdFromSurveyId */ .a1)(parsedInput.id);
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
                projectId: await (0,_lib_utils_helper__WEBPACK_IMPORTED_MODULE_4__/* .getProjectIdFromSurveyId */ .Y)(parsedInput.id),
                minPermission: "readWrite"
            }
        ]
    });
    const { followUps } = parsedInput;
    if (followUps?.length) {
        await checkSurveyFollowUpsPermission(organizationId);
    }
    if (parsedInput.languages?.length) {
        await (0,_modules_ee_multi_language_surveys_lib_actions__WEBPACK_IMPORTED_MODULE_5__/* .checkMultiLanguagePermission */ .F8)(organizationId);
    }
    return await (0,_formbricks_lib_survey_service__WEBPACK_IMPORTED_MODULE_10__/* .updateSurvey */ .cU)(parsedInput);
});

(0,private_next_rsc_action_validate__WEBPACK_IMPORTED_MODULE_16__/* .ensureServerEntryExports */ .D)([
    getResponsesDownloadUrlAction,
    getSurveyFilterDataAction,
    updateSurveyAction
]);
(0,private_next_rsc_server_reference__WEBPACK_IMPORTED_MODULE_0__/* .registerServerReference */ .A)(getResponsesDownloadUrlAction, "7f8fa2b402579cb2f263e2b1efb771533751dfc73b", null);
(0,private_next_rsc_server_reference__WEBPACK_IMPORTED_MODULE_0__/* .registerServerReference */ .A)(getSurveyFilterDataAction, "7ff28395ef910324905bcd03fc7f726a14fe4d60ec", null);
(0,private_next_rsc_server_reference__WEBPACK_IMPORTED_MODULE_0__/* .registerServerReference */ .A)(updateSurveyAction, "7fb0b5f9c28bba4f951a5fb2237df27d92cf58a800", null);


/***/ }),

/***/ 493814:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Mv: () => (/* binding */ generateInsightsForSurvey)
/* harmony export */ });
/* unused harmony exports generateInsightsEnabledForSurveyQuestions, doesResponseHasAnyOpenTextAnswer */
/* harmony import */ var _formbricks_lib_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(711344);








const generateInsightsForSurvey = (surveyId)=>{
    try {
        return fetch(`${_formbricks_lib_constants__WEBPACK_IMPORTED_MODULE_0__/* .WEBAPP_URL */ .YW}/api/insights`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": _formbricks_lib_constants__WEBPACK_IMPORTED_MODULE_0__/* .CRON_SECRET */ .Kd
            },
            body: JSON.stringify({
                surveyId
            })
        });
    } catch (error) {
        return {
            ok: false,
            error: new Error(`Error while generating insights for survey: ${error.message}`)
        };
    }
};
const generateInsightsEnabledForSurveyQuestions = async (surveyId)=>{
    validateInputs([
        surveyId,
        ZId
    ]);
    try {
        const survey = await getSurvey(surveyId);
        if (!survey) {
            throw new ResourceNotFoundError("Survey", surveyId);
        }
        if (!doesSurveyHasOpenTextQuestion(survey.questions)) {
            return {
                success: false
            };
        }
        const openTextQuestions = survey.questions.filter((question)=>question.type === "openText");
        const openTextQuestionsWithoutInsightsEnabled = openTextQuestions.filter((question)=>question.type === "openText" && typeof question.insightsEnabled === "undefined");
        if (openTextQuestionsWithoutInsightsEnabled.length === 0) {
            return {
                success: false
            };
        }
        const updatedSurvey = await updateSurvey(survey);
        if (!updatedSurvey) {
            throw new ResourceNotFoundError("Survey", surveyId);
        }
        const doesSurveyHasInsightsEnabledQuestion = updatedSurvey.questions.some((question)=>question.type === "openText" && question.insightsEnabled === true);
        surveyCache.revalidate({
            id: surveyId,
            environmentId: survey.environmentId
        });
        if (doesSurveyHasInsightsEnabledQuestion) {
            return {
                success: true,
                survey: updatedSurvey
            };
        }
        return {
            success: false
        };
    } catch (error) {
        console.error("Error generating insights for surveys:", error);
        throw error;
    }
};
const doesResponseHasAnyOpenTextAnswer = (openTextQuestionIds, response)=>{
    return openTextQuestionIds.some((questionId)=>{
        const answer = response[questionId];
        return typeof answer === "string" && answer.length > 0;
    });
};


/***/ }),

/***/ 703053:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Dc: () => (/* binding */ getResponsesBySurveySharingKeyAction),
/* harmony export */   lV: () => (/* binding */ getSummaryBySurveySharingKeyAction),
/* harmony export */   vr: () => (/* binding */ getResponseCountBySurveySharingKeyAction),
/* harmony export */   xW: () => (/* binding */ getSurveyFilterDataBySurveySharingKeyAction)
/* harmony export */ });
/* harmony import */ var private_next_rsc_server_reference__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(286055);
/* harmony import */ var private_next_rsc_action_encryption__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(770767);
/* harmony import */ var private_next_rsc_action_encryption__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(private_next_rsc_action_encryption__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_utils_action_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(308046);
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(283131);
/* harmony import */ var _formbricks_lib_response_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(535874);
/* harmony import */ var _formbricks_lib_survey_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(939483);
/* harmony import */ var _formbricks_lib_tag_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(189687);
/* harmony import */ var _formbricks_types_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(552224);
/* harmony import */ var _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(207798);
/* harmony import */ var _formbricks_types_responses__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(131116);
/* harmony import */ var _app_environments_environmentId_surveys_surveyId_analysis_summary_lib_surveySummary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(319607);
/* harmony import */ var private_next_rsc_action_validate__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(429931);
/* __next_internal_action_entry_do_not_use__ {"7f5ceff134805ecbfd64e844b03442fedc085165f8":"getResponsesBySurveySharingKeyAction","7f6b86dfb9f916340e09181cf5b45bed7b1e7c65db":"getResponseCountBySurveySharingKeyAction","7f9f47866d05f41a9e5ac975a6f9adff5a5cf9a780":"getSummaryBySurveySharingKeyAction","7fe46bdcfbed76f5af3916a3d164c50653809a133a":"getSurveyFilterDataBySurveySharingKeyAction"} */ 










const ZGetResponsesBySurveySharingKeyAction = zod__WEBPACK_IMPORTED_MODULE_4__.z.object({
    sharingKey: zod__WEBPACK_IMPORTED_MODULE_4__.z.string(),
    limit: zod__WEBPACK_IMPORTED_MODULE_4__.z.number().optional(),
    offset: zod__WEBPACK_IMPORTED_MODULE_4__.z.number().optional(),
    filterCriteria: _formbricks_types_responses__WEBPACK_IMPORTED_MODULE_5__/* .ZResponseFilterCriteria */ .jT.optional()
});
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getResponsesBySurveySharingKeyAction = _lib_utils_action_client__WEBPACK_IMPORTED_MODULE_2__/* .actionClient */ ._.schema(ZGetResponsesBySurveySharingKeyAction).action(async ({ parsedInput })=>{
    const surveyId = await (0,_formbricks_lib_survey_service__WEBPACK_IMPORTED_MODULE_6__/* .getSurveyIdByResultShareKey */ .s)(parsedInput.sharingKey);
    if (!surveyId) throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_7__/* .AuthorizationError */ .yi("Not authorized");
    const responses = await (0,_formbricks_lib_response_service__WEBPACK_IMPORTED_MODULE_8__/* .getResponses */ .J6)(surveyId, parsedInput.limit, parsedInput.offset, parsedInput.filterCriteria);
    return responses;
});
const ZGetSummaryBySurveySharingKeyAction = zod__WEBPACK_IMPORTED_MODULE_4__.z.object({
    sharingKey: zod__WEBPACK_IMPORTED_MODULE_4__.z.string(),
    filterCriteria: _formbricks_types_responses__WEBPACK_IMPORTED_MODULE_5__/* .ZResponseFilterCriteria */ .jT.optional()
});
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getSummaryBySurveySharingKeyAction = _lib_utils_action_client__WEBPACK_IMPORTED_MODULE_2__/* .actionClient */ ._.schema(ZGetSummaryBySurveySharingKeyAction).action(async ({ parsedInput })=>{
    const surveyId = await (0,_formbricks_lib_survey_service__WEBPACK_IMPORTED_MODULE_6__/* .getSurveyIdByResultShareKey */ .s)(parsedInput.sharingKey);
    if (!surveyId) throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_7__/* .AuthorizationError */ .yi("Not authorized");
    return await (0,_app_environments_environmentId_surveys_surveyId_analysis_summary_lib_surveySummary__WEBPACK_IMPORTED_MODULE_3__/* .getSurveySummary */ .n2)(surveyId, parsedInput.filterCriteria);
});
const ZGetResponseCountBySurveySharingKeyAction = zod__WEBPACK_IMPORTED_MODULE_4__.z.object({
    sharingKey: zod__WEBPACK_IMPORTED_MODULE_4__.z.string(),
    filterCriteria: _formbricks_types_responses__WEBPACK_IMPORTED_MODULE_5__/* .ZResponseFilterCriteria */ .jT.optional()
});
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getResponseCountBySurveySharingKeyAction = _lib_utils_action_client__WEBPACK_IMPORTED_MODULE_2__/* .actionClient */ ._.schema(ZGetResponseCountBySurveySharingKeyAction).action(async ({ parsedInput })=>{
    const surveyId = await (0,_formbricks_lib_survey_service__WEBPACK_IMPORTED_MODULE_6__/* .getSurveyIdByResultShareKey */ .s)(parsedInput.sharingKey);
    if (!surveyId) throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_7__/* .AuthorizationError */ .yi("Not authorized");
    return await (0,_formbricks_lib_response_service__WEBPACK_IMPORTED_MODULE_8__/* .getResponseCountBySurveyId */ .h4)(surveyId, parsedInput.filterCriteria);
});
const ZGetSurveyFilterDataBySurveySharingKeyAction = zod__WEBPACK_IMPORTED_MODULE_4__.z.object({
    sharingKey: zod__WEBPACK_IMPORTED_MODULE_4__.z.string(),
    environmentId: _formbricks_types_common__WEBPACK_IMPORTED_MODULE_9__/* .ZId */ .i4
});
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getSurveyFilterDataBySurveySharingKeyAction = _lib_utils_action_client__WEBPACK_IMPORTED_MODULE_2__/* .actionClient */ ._.schema(ZGetSurveyFilterDataBySurveySharingKeyAction).action(async ({ parsedInput })=>{
    const surveyId = await (0,_formbricks_lib_survey_service__WEBPACK_IMPORTED_MODULE_6__/* .getSurveyIdByResultShareKey */ .s)(parsedInput.sharingKey);
    if (!surveyId) throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_7__/* .AuthorizationError */ .yi("Not authorized");
    const [tags, { contactAttributes: attributes, meta, hiddenFields }] = await Promise.all([
        (0,_formbricks_lib_tag_service__WEBPACK_IMPORTED_MODULE_10__/* .getTagsByEnvironmentId */ .Dj)(parsedInput.environmentId),
        (0,_formbricks_lib_response_service__WEBPACK_IMPORTED_MODULE_8__/* .getResponseFilteringValues */ .wx)(surveyId)
    ]);
    return {
        environmentTags: tags,
        attributes,
        meta,
        hiddenFields
    };
});

(0,private_next_rsc_action_validate__WEBPACK_IMPORTED_MODULE_11__/* .ensureServerEntryExports */ .D)([
    getResponsesBySurveySharingKeyAction,
    getSummaryBySurveySharingKeyAction,
    getResponseCountBySurveySharingKeyAction,
    getSurveyFilterDataBySurveySharingKeyAction
]);
(0,private_next_rsc_server_reference__WEBPACK_IMPORTED_MODULE_0__/* .registerServerReference */ .A)(getResponsesBySurveySharingKeyAction, "7f5ceff134805ecbfd64e844b03442fedc085165f8", null);
(0,private_next_rsc_server_reference__WEBPACK_IMPORTED_MODULE_0__/* .registerServerReference */ .A)(getSummaryBySurveySharingKeyAction, "7f9f47866d05f41a9e5ac975a6f9adff5a5cf9a780", null);
(0,private_next_rsc_server_reference__WEBPACK_IMPORTED_MODULE_0__/* .registerServerReference */ .A)(getResponseCountBySurveySharingKeyAction, "7f6b86dfb9f916340e09181cf5b45bed7b1e7c65db", null);
(0,private_next_rsc_server_reference__WEBPACK_IMPORTED_MODULE_0__/* .registerServerReference */ .A)(getSurveyFilterDataBySurveySharingKeyAction, "7fe46bdcfbed76f5af3916a3d164c50653809a133a", null);


/***/ }),

/***/ 729468:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ documentCache)
/* harmony export */ });
/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(310256);
/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_cache__WEBPACK_IMPORTED_MODULE_0__);

const documentCache = {
    tag: {
        byId (id) {
            return `documents-${id}`;
        },
        byEnvironmentId (environmentId) {
            return `environments-${environmentId}-documents`;
        },
        byResponseId (responseId) {
            return `responses-${responseId}-documents`;
        },
        byResponseIdQuestionId (responseId, questionId) {
            return `responses-${responseId}-questions-${questionId}-documents`;
        },
        bySurveyId (surveyId) {
            return `surveys-${surveyId}-documents`;
        },
        bySurveyIdQuestionId (surveyId, questionId) {
            return `surveys-${surveyId}-questions-${questionId}-documents`;
        },
        byInsightId (insightId) {
            return `insights-${insightId}-documents`;
        },
        byInsightIdSurveyIdQuestionId (insightId, surveyId, questionId) {
            return `insights-${insightId}-surveys-${surveyId}-questions-${questionId}-documents`;
        }
    },
    revalidate: ({ id, environmentId, surveyId, responseId, questionId, insightId })=>{
        if (id) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(documentCache.tag.byId(id));
        }
        if (environmentId) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(documentCache.tag.byEnvironmentId(environmentId));
        }
        if (responseId) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(documentCache.tag.byResponseId(responseId));
        }
        if (surveyId) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(documentCache.tag.bySurveyId(surveyId));
        }
        if (responseId && questionId) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(documentCache.tag.byResponseIdQuestionId(responseId, questionId));
        }
        if (surveyId && questionId) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(documentCache.tag.bySurveyIdQuestionId(surveyId, questionId));
        }
        if (insightId) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(documentCache.tag.byInsightId(insightId));
        }
        if (insightId && surveyId && questionId) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(documentCache.tag.byInsightIdSurveyIdQuestionId(insightId, surveyId, questionId));
        }
    }
};


/***/ }),

/***/ 280612:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

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

/***/ 582899:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ew: () => (/* binding */ getOrganizationLogoUrl),
/* harmony export */   pr: () => (/* binding */ updateOrganizationEmailLogoUrl),
/* harmony export */   wi: () => (/* binding */ removeOrganizationEmailLogoUrl)
/* harmony export */ });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(896330);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645625);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _formbricks_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(482859);
/* harmony import */ var _formbricks_lib_cache__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(48165);
/* harmony import */ var _formbricks_lib_organization_cache__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(189147);
/* harmony import */ var _formbricks_lib_project_cache__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(595111);
/* harmony import */ var _formbricks_lib_utils_validate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(472749);
/* harmony import */ var _formbricks_types_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(552224);
/* harmony import */ var _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(207798);










const updateOrganizationEmailLogoUrl = async (organizationId, logoUrl)=>{
    (0,_formbricks_lib_utils_validate__WEBPACK_IMPORTED_MODULE_3__/* .validateInputs */ .C)([
        organizationId,
        _formbricks_types_common__WEBPACK_IMPORTED_MODULE_4__/* .ZId */ .i4
    ], [
        logoUrl,
        _formbricks_types_common__WEBPACK_IMPORTED_MODULE_4__/* .ZString */ .eI
    ]);
    try {
        const organization = await _formbricks_database__WEBPACK_IMPORTED_MODULE_2__/* .prisma */ .z.organization.findUnique({
            where: {
                id: organizationId
            }
        });
        if (!organization) {
            throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_5__/* .ResourceNotFoundError */ .CE("Organization", organizationId);
        }
        const updatedOrganization = await _formbricks_database__WEBPACK_IMPORTED_MODULE_2__/* .prisma */ .z.organization.update({
            where: {
                id: organizationId
            },
            data: {
                whitelabel: {
                    ...organization.whitelabel,
                    logoUrl
                }
            },
            select: {
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
        _formbricks_lib_organization_cache__WEBPACK_IMPORTED_MODULE_6__/* .organizationCache */ .S.revalidate({
            id: organizationId
        });
        for (const project of updatedOrganization.projects){
            for (const environment of project.environments){
                _formbricks_lib_organization_cache__WEBPACK_IMPORTED_MODULE_6__/* .organizationCache */ .S.revalidate({
                    environmentId: environment.id
                });
            }
        }
        _formbricks_lib_project_cache__WEBPACK_IMPORTED_MODULE_7__/* .projectCache */ .E.revalidate({
            organizationId: organizationId
        });
        return true;
    } catch (error) {
        if (error instanceof _prisma_client__WEBPACK_IMPORTED_MODULE_0__.Prisma.PrismaClientKnownRequestError && error.code === "P2016") {
            throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_5__/* .ResourceNotFoundError */ .CE("Organization", organizationId);
        }
        throw error;
    }
};
const removeOrganizationEmailLogoUrl = async (organizationId)=>{
    (0,_formbricks_lib_utils_validate__WEBPACK_IMPORTED_MODULE_3__/* .validateInputs */ .C)([
        organizationId,
        _formbricks_types_common__WEBPACK_IMPORTED_MODULE_4__/* .ZId */ .i4
    ]);
    try {
        const organization = await _formbricks_database__WEBPACK_IMPORTED_MODULE_2__/* .prisma */ .z.organization.findUnique({
            where: {
                id: organizationId
            },
            select: {
                whitelabel: true,
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
        if (!organization) {
            throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_5__/* .ResourceNotFoundError */ .CE("Organization", organizationId);
        }
        await _formbricks_database__WEBPACK_IMPORTED_MODULE_2__/* .prisma */ .z.organization.update({
            where: {
                id: organizationId
            },
            data: {
                whitelabel: {
                    ...organization.whitelabel,
                    logoUrl: null
                }
            }
        });
        _formbricks_lib_organization_cache__WEBPACK_IMPORTED_MODULE_6__/* .organizationCache */ .S.revalidate({
            id: organizationId
        });
        for (const project of organization.projects){
            for (const environment of project.environments){
                _formbricks_lib_organization_cache__WEBPACK_IMPORTED_MODULE_6__/* .organizationCache */ .S.revalidate({
                    environmentId: environment.id
                });
            }
        }
        _formbricks_lib_project_cache__WEBPACK_IMPORTED_MODULE_7__/* .projectCache */ .E.revalidate({
            organizationId: organizationId
        });
        return true;
    } catch (error) {
        if (error instanceof _prisma_client__WEBPACK_IMPORTED_MODULE_0__.Prisma.PrismaClientKnownRequestError && error.code === "P2016") {
            throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_5__/* .ResourceNotFoundError */ .CE("Organization", organizationId);
        }
        throw error;
    }
};
const getOrganizationLogoUrl = (0,react__WEBPACK_IMPORTED_MODULE_1__.cache)(async (organizationId)=>(0,_formbricks_lib_cache__WEBPACK_IMPORTED_MODULE_8__/* .cache */ .P)(async ()=>{
        (0,_formbricks_lib_utils_validate__WEBPACK_IMPORTED_MODULE_3__/* .validateInputs */ .C)([
            organizationId,
            _formbricks_types_common__WEBPACK_IMPORTED_MODULE_4__/* .ZId */ .i4
        ]);
        try {
            const organization = await _formbricks_database__WEBPACK_IMPORTED_MODULE_2__/* .prisma */ .z.organization.findUnique({
                where: {
                    id: organizationId
                },
                select: {
                    whitelabel: true
                }
            });
            return organization?.whitelabel?.logoUrl ?? null;
        } catch (error) {
            if (error instanceof _prisma_client__WEBPACK_IMPORTED_MODULE_0__.Prisma.PrismaClientKnownRequestError) {
                throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_5__/* .DatabaseError */ .a$(error.message);
            }
            throw error;
        }
    }, [
        `getOrganizationLogoUrl-${organizationId}`
    ], {
        tags: [
            _formbricks_lib_organization_cache__WEBPACK_IMPORTED_MODULE_6__/* .organizationCache */ .S.tag.byId(organizationId)
        ]
    })());


/***/ }),

/***/ 431751:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ getSurveyFollowUpsPermission)
/* harmony export */ });
/* harmony import */ var _formbricks_lib_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(711344);

const getSurveyFollowUpsPermission = async (organization)=>{
    if (_formbricks_lib_constants__WEBPACK_IMPORTED_MODULE_0__/* .IS_FORMBRICKS_CLOUD */ .Si) return organization.billing.plan !== _formbricks_lib_constants__WEBPACK_IMPORTED_MODULE_0__/* .PROJECT_FEATURE_KEYS */ .mu.FREE;
    return true;
};


/***/ }),

/***/ 746219:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* binding */ PageContentWrapper)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(891069);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(598597);


const PageContentWrapper = ({ children, className })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_1__.cn)("h-full space-y-6 p-6", className),
        children: children
    });
};


/***/ }),

/***/ 109053:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: () => (/* binding */ PageHeader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(891069);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(598597);


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

/***/ 598597:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cn: () => (/* binding */ cn)
/* harmony export */ });
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(966190);
/* harmony import */ var tailwind_merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(263798);


const cn = (...inputs)=>{
    return (0,tailwind_merge__WEBPACK_IMPORTED_MODULE_0__/* .twMerge */ .QP)((0,clsx__WEBPACK_IMPORTED_MODULE_1__/* .clsx */ .$)(inputs));
};


/***/ }),

/***/ 189687:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Dj: () => (/* binding */ getTagsByEnvironmentId),
/* harmony export */   VZ: () => (/* binding */ createTag)
/* harmony export */ });
/* unused harmony export getTag */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(645625);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _formbricks_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(482859);
/* harmony import */ var _formbricks_types_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(552224);
/* harmony import */ var _cache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48165);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(711344);
/* harmony import */ var _utils_validate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(472749);
/* harmony import */ var _cache__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(366836);









const getTagsByEnvironmentId = (0,react__WEBPACK_IMPORTED_MODULE_0__.cache)(async (environmentId, page)=>(0,_cache__WEBPACK_IMPORTED_MODULE_2__/* .cache */ .P)(async ()=>{
        (0,_utils_validate__WEBPACK_IMPORTED_MODULE_3__/* .validateInputs */ .C)([
            environmentId,
            _formbricks_types_common__WEBPACK_IMPORTED_MODULE_4__/* .ZId */ .i4
        ], [
            page,
            _formbricks_types_common__WEBPACK_IMPORTED_MODULE_4__/* .ZOptionalNumber */ .Wo
        ]);
        try {
            const tags = await _formbricks_database__WEBPACK_IMPORTED_MODULE_1__/* .prisma */ .z.tag.findMany({
                where: {
                    environmentId
                },
                take: page ? _constants__WEBPACK_IMPORTED_MODULE_5__/* .ITEMS_PER_PAGE */ .re : undefined,
                skip: page ? _constants__WEBPACK_IMPORTED_MODULE_5__/* .ITEMS_PER_PAGE */ .re * (page - 1) : undefined
            });
            return tags;
        } catch (error) {
            throw error;
        }
    }, [
        `getTagsByEnvironmentId-${environmentId}-${page}`
    ], {
        tags: [
            _cache__WEBPACK_IMPORTED_MODULE_6__/* .tagCache */ .J.tag.byEnvironmentId(environmentId)
        ]
    })());
const getTag = (0,react__WEBPACK_IMPORTED_MODULE_0__.cache)(async (id)=>(0,_cache__WEBPACK_IMPORTED_MODULE_2__/* .cache */ .P)(async ()=>{
        (0,_utils_validate__WEBPACK_IMPORTED_MODULE_3__/* .validateInputs */ .C)([
            id,
            _formbricks_types_common__WEBPACK_IMPORTED_MODULE_4__/* .ZId */ .i4
        ]);
        try {
            const tag = await _formbricks_database__WEBPACK_IMPORTED_MODULE_1__/* .prisma */ .z.tag.findUnique({
                where: {
                    id
                }
            });
            return tag;
        } catch (error) {
            throw error;
        }
    }, [
        `getTag-${id}`
    ], {
        tags: [
            _cache__WEBPACK_IMPORTED_MODULE_6__/* .tagCache */ .J.tag.byId(id)
        ]
    })());
const createTag = async (environmentId, name)=>{
    (0,_utils_validate__WEBPACK_IMPORTED_MODULE_3__/* .validateInputs */ .C)([
        environmentId,
        _formbricks_types_common__WEBPACK_IMPORTED_MODULE_4__/* .ZId */ .i4
    ], [
        name,
        _formbricks_types_common__WEBPACK_IMPORTED_MODULE_4__/* .ZString */ .eI
    ]);
    try {
        const tag = await _formbricks_database__WEBPACK_IMPORTED_MODULE_1__/* .prisma */ .z.tag.create({
            data: {
                name,
                environmentId
            }
        });
        _cache__WEBPACK_IMPORTED_MODULE_6__/* .tagCache */ .J.revalidate({
            id: tag.id,
            environmentId
        });
        return tag;
    } catch (error) {
        throw error;
    }
};


/***/ }),

/***/ 788253:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ getResponseCountBySurveySharingKeyAction)
/* harmony export */ });
/* harmony import */ var private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(308441);
/* harmony import */ var private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_0__);

const getResponseCountBySurveySharingKeyAction = /*#__PURE__*/(0,private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_0__.createServerReference)("7f6b86dfb9f916340e09181cf5b45bed7b1e7c65db", private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_0__.callServer, undefined, private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_0__.findSourceMapURL, "getResponseCountBySurveySharingKeyAction")

/***/ }),

/***/ 475221:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* binding */ getResponseCountAction)
/* harmony export */ });
/* harmony import */ var private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(308441);
/* harmony import */ var private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_0__);

const getResponseCountAction = /*#__PURE__*/(0,private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_0__.createServerReference)("7fc40fcf4d8238c50e0ee14725c1e9b7cc636f4788", private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_0__.callServer, undefined, private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_0__.findSourceMapURL, "getResponseCountAction")

/***/ }),

/***/ 819759:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"auth":{"continue_with_azure":"使用 Azure 繼續","continue_with_email":"使用電子郵件繼續","continue_with_github":"使用 GitHub 繼續","continue_with_google":"使用 Google 繼續","continue_with_oidc":"使用 \'{\'oidcDisplayName\'}\' 繼續","continue_with_openid":"使用 OpenID 繼續","forgot-password":{"back_to_login":"返回登入","email-sent":{"heading":"已成功請求重設密碼","text":"如果此電子郵件存在帳戶，您將很快收到重設密碼的說明。"},"reset":{"confirm_password":"確認密碼","new_password":"新密碼","no_token_provided":"未提供權杖","passwords_do_not_match":"密碼不符","success":{"heading":"密碼重設成功","text":"您現在可以使用新密碼登入"}},"reset_password":"重設密碼"},"invite":{"create_account":"建立帳戶","email_does_not_match":"哎呀！電子郵件不符 🤦","email_does_not_match_description":"邀請中的電子郵件與您的不符。","go_to_app":"前往應用程式","happy_to_have_you":"很高興能有你 🤗","happy_to_have_you_description":"請建立帳戶或登入。","invite_expired":"邀請已過期 😥","invite_expired_description":"邀請有效期為 7 天。請請求新的邀請。","invite_not_found":"找不到邀請 😥","invite_not_found_description":"找不到邀請碼或已使用過。","login":"登入","welcome_to_organization":"您已加入 🎉","welcome_to_organization_description":"歡迎加入組織。"},"last_used":"上次使用","login":{"backup_code":"備份碼","create_an_account":"建立帳戶","enter_your_backup_code":"輸入您的備份碼","enter_your_two_factor_authentication_code":"輸入您的雙重驗證碼","forgot_your_password":"忘記密碼？","login_to_your_account":"登入您的帳戶","login_with_email":"使用電子郵件登入","lost_access":"無法存取？","new_to_formbricks":"初次使用 Formbricks？","use_a_backup_code":"使用備份碼"},"signup":{"captcha_failed":"驗證碼失敗","have_an_account":"已有帳戶？","log_in":"登入","password_validation_contain_at_least_1_number":"包含至少 1 個數字","password_validation_minimum_8_and_maximum_128_characters":"最少 8 個 & 最多 128 個字元","password_validation_uppercase_and_lowercase":"混合使用大小寫字母","please_verify_captcha":"請驗證 reCAPTCHA","privacy_policy":"隱私權政策","terms_of_service":"服務條款","title":"建立您的 Formbricks 帳戶"},"signup_without_verification_success":{"user_successfully_created":"使用者建立成功","user_successfully_created_description":"您的新使用者已成功建立。請點擊下方按鈕並登入您的帳戶。"},"testimonial_1":"我們在同一個平台上測量文件的清晰度，並從客戶流失中學習。很棒的產品，團隊反應非常迅速！","testimonial_all_features_included":"包含所有功能","testimonial_free_and_open_source":"免費且開源","testimonial_no_credit_card_required":"無需信用卡","testimonial_title":"將客戶洞察轉化為無法抗拒的體驗。","verification-requested":{"invalid_email_address":"無效的電子郵件地址","invalid_token":"無效的權杖 ☹️","no_email_provided":"未提供電子郵件","please_click_the_link_in_the_email_to_activate_your_account":"請點擊電子郵件中的連結以啟用您的帳戶。","please_confirm_your_email_address":"請確認您的電子郵件地址","resend_verification_email":"重新發送驗證電子郵件","verification_email_successfully_sent":"驗證電子郵件已成功發送。請檢查您的收件匣。","we_sent_an_email_to":"我們已發送一封電子郵件至 <email>\'{\'email\'}\'</email>。","you_didnt_receive_an_email_or_your_link_expired":"您沒有收到電子郵件或您的連結已過期？"},"verify":{"no_token_provided":"未提供權杖","verifying":"驗證中..."}},"billing_confirmation":{"back_to_billing_overview":"返回帳單概覽","thanks_for_upgrading":"非常感謝您升級您的 Formbricks 訂閱。","upgrade_successful":"升級成功"},"common":{"accepted":"已接受","account":"帳戶","account_settings":"帳戶設定","action":"操作","actions":"操作","active_surveys":"啟用中的問卷","activity":"活動","add":"新增","add_action":"新增操作","add_filter":"新增篩選器","add_logo":"新增標誌","add_project":"新增專案","add_to_team":"新增至團隊","all":"全部","all_questions":"所有問題","allow":"允許","allow_users_to_exit_by_clicking_outside_the_survey":"允許使用者點擊問卷外退出","an_unknown_error_occurred_while_deleting_table_items":"刪除 \'{\'type\'}\' 時發生未知錯誤","and":"且","and_response_limit_of":"且回應上限為","anonymous":"匿名","api_keys":"API 金鑰","app":"應用程式","app_survey":"應用程式問卷","apply_filters":"套用篩選器","are_you_sure":"您確定嗎？","are_you_sure_this_action_cannot_be_undone":"您確定嗎？此操作無法復原。","attributes":"屬性","automatic":"自動","avatar":"頭像","back":"返回","billing":"帳單","booked":"已預訂","bottom_left":"左下","bottom_right":"右下","cancel":"取消","centered_modal":"置中彈窗","choices":"選項","clear_all":"全部清除","clear_filters":"清除篩選器","clear_selection":"清除選取","click":"點擊","clicks":"點擊數","close":"關閉","code":"程式碼","collapse_rows":"摺疊列","completed":"已完成","configuration":"組態","confirm":"確認","connect":"連線","connect_formbricks":"連線 Formbricks","connected":"已連線","contacts":"聯絡人","copied_to_clipboard":"已複製到剪貼簿","copy":"複製","copy_code":"複製程式碼","copy_link":"複製連結","create_new_organization":"建立新組織","create_segment":"建立區隔","create_survey":"建立問卷","created":"已建立","created_at":"建立時間","created_by":"建立者","customer_success":"客戶成功","danger_zone":"危險區域","dark_overlay":"深色覆蓋","date":"日期","default":"預設","delete":"刪除","description":"描述","dev_env":"開發環境","development_environment_banner":"您正在開發環境中。設定它以測試問卷、操作和屬性。","disable":"停用","disallow":"不允許","discard":"捨棄","dismissed":"已關閉","docs":"文件","documentation":"文件","download":"下載","draft":"草稿","duplicate":"複製","e_commerce":"電子商務","edit":"編輯","email":"電子郵件","embed":"嵌入","enable":"啟用","enterprise_license":"企業授權","environment_not_found":"找不到環境","environment_notice":"您目前在 \'{\'environment\'}\' 環境中。","error":"錯誤","error_component_description":"此資源不存在或您沒有存取權限。","error_component_title":"載入資源錯誤","expand_rows":"展開列","finish":"完成","follow_these":"按照這些步驟","formbricks_version":"Formbricks 版本","full_name":"全名","gathering_responses":"收集回應中","general":"一般","get_started":"開始使用","go_back":"返回","go_to_dashboard":"前往儀表板","hidden":"隱藏","hidden_field":"隱藏欄位","hidden_fields":"隱藏欄位","hide":"隱藏","hide_column":"隱藏欄位","image":"圖片","images":"圖片","import":"匯入","impressions":"曝光數","imprint":"版本訊息","in_progress":"進行中","inactive_surveys":"停用中的問卷","input_type":"輸入類型","insights":"洞察","integration":"整合","integrations":"整合","invalid_file_type":"無效的檔案類型","invite":"邀請","invite_them":"邀請他們","key":"金鑰","label":"標籤","language":"語言","learn_more":"瞭解更多","license":"授權","light_overlay":"淺色覆蓋","limits_reached":"已達上限","link":"連結","link_and_email":"連結與電子郵件","link_copied":"連結已複製到剪貼簿！","link_survey":"連結問卷","link_surveys":"連結問卷","load_more":"載入更多","loading":"載入中","logo":"標誌","logout":"登出","look_and_feel":"外觀與風格","manage":"管理","marketing":"行銷","maximum":"最大值","member":"成員","members":"成員","metadata":"元數據","minimum":"最小值","mobile_overlay_text":"Formbricks 不適用於較小解析度的裝置。","move_down":"下移","move_up":"上移","multiple_languages":"多種語言","name":"名稱","negative":"負面","neutral":"中性","new":"新增","new_survey":"新增問卷","new_version_available":"Formbricks \'{\'version\'}\' 已推出。立即升級！","next":"下一步","no_background_image_found":"找不到背景圖片。","no_code":"無程式碼","no_files_uploaded":"沒有上傳任何檔案","no_result_found":"找不到結果","no_results":"沒有結果","no_surveys_found":"找不到問卷。","not_authenticated":"您未經授權執行此操作。","not_authorized":"未授權","not_connected":"未連線","note":"筆記","notes":"筆記","notifications":"通知","number":"數字","off":"關閉","on":"開啟","only_one_file_allowed":"僅允許一個檔案","only_owners_managers_and_manage_access_members_can_perform_this_action":"只有擁有者、管理員和管理存取權限的成員才能執行此操作。","or":"或","organization":"組織","organization_not_found":"找不到組織","organization_teams_not_found":"找不到組織團隊","other":"其他","others":"其他","overview":"概覽","password":"密碼","paused":"已暫停","pending_downgrade":"等待降級","people_manager":"人事經理","person":"人員","phone":"電話","photo_by":"照片來源：","pick_a_date":"選擇日期","placeholder":"提示文字","please_select_at_least_one_survey":"請選擇至少一個問卷","please_select_at_least_one_trigger":"請選擇至少一個觸發器","please_upgrade_your_plan":"請升級您的方案。","positive":"正面","preview":"預覽","preview_survey":"預覽問卷","privacy":"隱私權政策","privacy_policy":"隱私權政策","product_manager":"產品經理","product_not_found":"找不到產品","profile":"個人資料","project":"專案","project_configuration":"專案組態","project_id":"專案 ID","project_name":"專案名稱","project_not_found":"找不到專案","project_permission_not_found":"找不到專案權限","projects":"專案","projects_limit_reached":"已達到專案上限","question":"問題","question_id":"問題 ID","questions":"問題","read_docs":"閱讀文件","remove":"移除","reorder_and_hide_columns":"重新排序和隱藏欄位","report_survey":"報告問卷","reset_to_default":"重設為預設值","response":"回應","responses":"回應","restart":"重新開始","role":"角色","role_organization":"角色（組織）","saas":"SaaS","sales":"銷售","save":"儲存","save_changes":"儲存變更","scheduled":"已排程","search":"搜尋","security":"安全性","segment":"區隔","segments":"區隔","select":"選擇","select_all":"全選","select_survey":"選擇問卷","selected":"已選取","selected_questions":"選取的問題","selection":"選取","selections":"選取","send":"發送","send_test_email":"發送測試電子郵件","session_not_found":"找不到工作階段","settings":"設定","share_feedback":"分享回饋","show":"顯示","show_response_count":"顯示回應數","shown":"已顯示","size":"大小","skipped":"已跳過","skips":"跳過次數","some_files_failed_to_upload":"部分檔案上傳失敗","something_went_wrong_please_try_again":"發生錯誤。請再試一次。","sort_by":"排序方式","start_free_trial":"開始免費試用","status":"狀態","step_by_step_manual":"逐步手冊","styling":"樣式設定","submit":"提交","summary":"摘要","survey":"問卷","survey_completed":"問卷已完成。","survey_languages":"問卷語言","survey_live":"問卷已上線","survey_not_found":"找不到問卷","survey_paused":"問卷已暫停。","survey_scheduled":"問卷已排程。","survey_type":"問卷類型","surveys":"問卷","switch_organization":"切換組織","switch_to":"切換至 \'{\'environment\'}\'","table_items_deleted_successfully":"\'{\'type\'}\' 已成功刪除","table_settings":"表格設定","tags":"標籤","targeting":"目標設定","team":"團隊","team_access":"團隊存取權限","team_name":"團隊名稱","teams":"團隊","teams_not_found":"找不到團隊","text":"文字","time":"時間","time_to_finish":"完成時間","title":"標題","top_left":"左上","top_right":"右上","try_again":"再試一次","type":"類型","unlock_more_projects_with_a_higher_plan":"使用更高等級的方案解鎖更多專案。","update":"更新","updated":"已更新","updated_at":"更新時間","upload":"上傳","upload_input_description":"點擊或拖曳以上傳檔案。","url":"網址","user":"使用者","user_id":"使用者 ID","user_not_found":"找不到使用者","variable":"變數","variables":"變數","verified_email":"已驗證的電子郵件","video":"影片","warning":"警告","we_were_unable_to_verify_your_license_because_the_license_server_is_unreachable":"我們無法驗證您的授權，因為授權伺服器無法連線。","webhook":"Webhook","webhooks":"Webhooks","website_and_app_connection":"網站與應用程式連線","website_app_survey":"網站與應用程式問卷","website_survey":"網站問卷","weekly_summary":"每週摘要","welcome_card":"歡迎卡片","yes":"是","you":"您","you_are_downgraded_to_the_community_edition":"您已降級至社群版。","you_are_not_authorised_to_perform_this_action":"您未獲授權執行此操作。","you_have_reached_your_limit_of_project_limit":"您已達到 \'{\'projectLimit\'}\' 個專案的上限。","you_have_reached_your_monthly_miu_limit_of":"您已達到每月 MIU 上限：","you_have_reached_your_monthly_response_limit_of":"您已達到每月回應上限：","you_will_be_downgraded_to_the_community_edition_on_date":"您將於 \'{\'date\'}\' 降級至社群版。"},"emails":{"accept":"接受","click_or_drag_to_upload_files":"點擊或拖曳以上傳檔案。","email_customization_preview_email_heading":"嗨，\'{\'userName\'}\'","email_customization_preview_email_subject":"Formbricks 電子郵件自訂預覽","email_customization_preview_email_text":"這是電子郵件預覽，向您展示電子郵件中將呈現哪個標誌。","email_footer_text_1":"祝你有美好的一天！","email_footer_text_2":"Formbricks 團隊","email_template_text_1":"此電子郵件是通過 Formbricks 發送的。","embed_survey_preview_email_didnt_request":"沒有要求這個？","embed_survey_preview_email_environment_id":"環境 ID","embed_survey_preview_email_fight_spam":"幫助我們打擊垃圾郵件，並將此郵件轉寄至 hola@formbricks.com","embed_survey_preview_email_heading":"預覽電子郵件嵌入","embed_survey_preview_email_subject":"Formbricks 電子郵件問卷預覽","embed_survey_preview_email_text":"這是程式碼片段嵌入電子郵件中的樣子：","forgot_password_email_change_password":"變更密碼","forgot_password_email_did_not_request":"如果您沒有要求此操作，請忽略此電子郵件。","forgot_password_email_heading":"變更密碼","forgot_password_email_link_valid_for_24_hours":"此連結有效期為 24 小時。","forgot_password_email_subject":"重設您的 Formbricks 密碼","forgot_password_email_text":"您已請求變更密碼的連結。您可以點擊以下連結來執行此操作：","imprint":"版本訊息","invite_accepted_email_heading":"嗨","invite_accepted_email_subject":"您有一位新的組織成員！","invite_accepted_email_text_par1":"通知您，","invite_accepted_email_text_par2":"接受了您的邀請。合作愉快！","invite_email_button_label":"加入組織","invite_email_heading":"嗨","invite_email_text_par1":"您的同事","invite_email_text_par2":"邀請您加入 Formbricks。若要接受邀請，請點擊以下連結：","invite_member_email_subject":"您被邀請協作 Formbricks！","live_survey_notification_completed":"已完成","live_survey_notification_draft":"草稿","live_survey_notification_in_progress":"進行中","live_survey_notification_no_new_response":"本週沒有收到新的回應 🕵️","live_survey_notification_no_responses_yet":"尚無回應！","live_survey_notification_paused":"已暫停","live_survey_notification_scheduled":"已排程","live_survey_notification_view_more_responses":"檢視另外 \'{\'responseCount\'}\' 個回應","live_survey_notification_view_previous_responses":"檢視先前的回應","live_survey_notification_view_response":"檢視回應","notification_footer_all_the_best":"祝您一切順利，","notification_footer_in_your_settings":"在您的設定中 🙏","notification_footer_please_turn_them_off":"請關閉它們","notification_footer_the_formbricks_team":"Formbricks 團隊 🤍","notification_footer_to_halt_weekly_updates":"若要停止每週更新，","notification_header_hey":"嗨 👋","notification_header_weekly_report_for":"每週報告，適用於","notification_insight_completed":"已完成","notification_insight_completion_rate":"完成率 %","notification_insight_displays":"顯示次數","notification_insight_responses":"回應數","notification_insight_surveys":"問卷數","onboarding_invite_email_button_label":"加入 {inviterName} 的組織","onboarding_invite_email_connect_formbricks":"在幾分鐘內透過 HTML 片段或 NPM 將 Formbricks 連接到您的應用程式或網站。","onboarding_invite_email_create_account":"建立帳戶以加入 \'{\'inviterName\'}\' 的組織。","onboarding_invite_email_done":"完成 ✅","onboarding_invite_email_get_started_in_minutes":"在幾分鐘內開始使用","onboarding_invite_email_heading":"嗨 ","onboarding_invite_email_subject":"{inviterName} 需要幫忙設置 Formbricks。你能幫忙嗎？","password_changed_email_heading":"密碼已變更","password_changed_email_text":"您的密碼已成功變更。","password_reset_notify_email_subject":"您的 Formbricks 密碼已變更","powered_by_formbricks":"由 Formbricks 提供技術支援","privacy_policy":"隱私權政策","reject":"拒絕","response_finished_email_subject":"{surveyName} 的回應已完成 ✅","response_finished_email_subject_with_email":"{personEmail} 剛剛完成了您的 {surveyName} 調查 ✅","schedule_your_meeting":"安排你的會議","select_a_date":"選擇日期","survey_response_finished_email_congrats":"恭喜，您收到了新的問卷回應！有人剛完成您的問卷：\'{\'surveyName\'}\'","survey_response_finished_email_dont_want_notifications":"不想收到這些通知？","survey_response_finished_email_hey":"嗨 👋","survey_response_finished_email_this_form":"這個表單","survey_response_finished_email_turn_off_notifications":"關閉通知，適用於","survey_response_finished_email_turn_off_notifications_for_all_new_forms":"關閉所有新建立表單的通知","survey_response_finished_email_view_more_responses":"檢視另外 \'{\'responseCount\'}\' 個回應","survey_response_finished_email_view_survey_summary":"檢視問卷摘要","verification_email_click_on_this_link":"您也可以點擊此連結：","verification_email_heading":"快完成了！","verification_email_hey":"嗨 👋","verification_email_if_expired_request_new_token":"如果已過期，請在此處請求新的權杖：","verification_email_link_valid_for_24_hours":"此連結有效期為 24 小時。","verification_email_request_new_verification":"請求新的驗證","verification_email_subject":"請驗證您的電子郵件以使用 Formbricks","verification_email_survey_name":"問卷名稱","verification_email_take_survey":"填寫問卷","verification_email_text":"若要開始使用 Formbricks，請驗證您下方的電子郵件：","verification_email_thanks":"感謝您驗證您的電子郵件！","verification_email_to_fill_survey":"若要填寫問卷，請點擊下方的按鈕：","verification_email_verify_email":"驗證電子郵件","verified_link_survey_email_subject":"您的 survey 已準備好填寫。","weekly_summary_create_reminder_notification_body_cal_slot":"在我們 CEO 的日曆中選擇一個 15 分鐘的時段","weekly_summary_create_reminder_notification_body_dont_let_a_week_pass":"不要讓一週過去而沒有了解您的使用者：","weekly_summary_create_reminder_notification_body_need_help":"需要協助找到適合您產品的問卷嗎？","weekly_summary_create_reminder_notification_body_reply_email":"或回覆此電子郵件 :)","weekly_summary_create_reminder_notification_body_setup_a_new_survey":"設定新的問卷","weekly_summary_create_reminder_notification_body_text":"我們很樂意向您發送每週摘要，但目前 \'{\'projectName\'}\' 沒有正在執行的問卷。","weekly_summary_email_subject":"{projectName} 用戶洞察 - 上週 by Formbricks"},"environments":{"actions":{"action_copied_successfully":"操作已成功複製","action_copy_failed":"操作複製失敗","action_created_successfully":"操作已成功建立","action_deleted_successfully":"操作已成功刪除","action_type":"操作類型","action_updated_successfully":"操作已成功更新","action_with_key_already_exists":"金鑰為 \'{\'key\'}\' 的操作已存在","action_with_name_already_exists":"名稱為 \'{\'name\'}\' 的操作已存在","add_css_class_or_id":"新增 CSS 類別或 ID","add_url":"新增網址","click":"點擊","contains":"包含","create_action":"建立操作","css_selector":"CSS 選取器","delete_action_text":"您確定要刪除此操作嗎？這也會從您的所有問卷中移除此操作作為觸發器。","display_name":"顯示名稱","does_not_contain":"不包含","does_not_exactly_match":"不完全相符","eg_clicked_download":"例如，點擊下載","eg_download_cta_click_on_home":"例如，download_cta_click_on_home","eg_install_app":"例如，安裝應用程式","eg_user_clicked_download_button":"例如，使用者點擊了下載按鈕","ends_with":"結尾為","enter_a_url_to_see_if_a_user_visiting_it_would_be_tracked":"輸入網址以查看造訪該網址的使用者是否會被追蹤。","exactly_matches":"完全相符","exit_intent":"離開意圖","fifty_percent_scroll":"50% 捲動","how_do_code_actions_work":"程式碼操作如何運作？","if_a_user_clicks_a_button_with_a_specific_css_class_or_id":"如果使用者點擊具有特定 CSS 類別或 ID 的按鈕","if_a_user_clicks_a_button_with_a_specific_text":"如果使用者點擊具有特定文字的按鈕","in_your_code_read_more_in_our":"在您的程式碼中。在我們的文件中閱讀更多內容","inner_text":"內部文字","invalid_css_selector":"無效的 CSS 選取器","limit_the_pages_on_which_this_action_gets_captured":"限制擷取此操作的頁面","limit_to_specific_pages":"限制為特定頁面","on_all_pages":"在所有頁面上","page_filter":"頁面篩選器","page_view":"頁面檢視","select_match_type":"選取比對類型","starts_with":"開頭為","test_match":"測試比對","test_your_url":"測試您的網址","this_action_was_created_automatically_you_cannot_make_changes_to_it":"此操作是自動建立的。您無法對其進行變更。","this_action_will_be_triggered_when_the_page_is_loaded":"當頁面載入時，將觸發此操作。","this_action_will_be_triggered_when_the_user_scrolls_50_percent_of_the_page":"當使用者捲動頁面 50% 時，將觸發此操作。","this_action_will_be_triggered_when_the_user_tries_to_leave_the_page":"當使用者嘗試離開頁面時，將觸發此操作。","this_is_a_code_action_please_make_changes_in_your_code_base":"這是一個 code 動作。請在您的 code base 中進行更改。","track_new_user_action":"追蹤新使用者操作","track_user_action_to_display_surveys_or_create_user_segment":"追蹤使用者操作以顯示問卷或建立使用者區隔。","url":"網址","user_actions":"使用者操作","user_clicked_download_button":"使用者點擊了下載按鈕","what_did_your_user_do":"您的使用者做了什麼？","what_is_the_user_doing":"使用者正在做什麼？","you_can_track_code_action_anywhere_in_your_app_using":"您可以使用以下方式在您的應用程式中的任何位置追蹤程式碼操作"},"connect":{"congrats":"恭喜！","connection_successful_message":"做得好！我們已連線。","do_it_later":"稍後再做","finish_onboarding":"完成新手上路","headline":"連線您的應用程式或網站","import_formbricks_and_initialize_the_widget_in_your_component":"匯入 Formbricks 並在您的元件中初始化小工具（例如，App.tsx）：","insert_this_code_into_the_head_tag_of_your_website":"將此程式碼插入您網站的 head 標籤中：","subtitle":"只需不到 4 分鐘。","waiting_for_your_signal":"正在等待您的訊號..."},"contacts":{"contact_deleted_successfully":"聯絡人已成功刪除","contact_not_found":"找不到此聯絡人","contacts_table_refresh":"重新整理聯絡人","contacts_table_refresh_error":"重新整理聯絡人時發生錯誤，請再試一次","contacts_table_refresh_success":"聯絡人已成功重新整理","first_name":"名字","last_name":"姓氏","no_responses_found":"找不到回應","not_provided":"未提供","search_contact":"搜尋聯絡人","select_attribute":"選取屬性","unlock_contacts_description":"管理聯絡人並發送目標問卷","unlock_contacts_title":"使用更高等級的方案解鎖聯絡人","upload_contacts_modal_attributes_description":"將 CSV 中的欄位對應到 Formbricks 中的屬性。","upload_contacts_modal_attributes_new":"新增屬性","upload_contacts_modal_attributes_search_or_add":"搜尋或新增屬性","upload_contacts_modal_attributes_should_be_mapped_to":"應對應到","upload_contacts_modal_attributes_title":"屬性","upload_contacts_modal_description":"上傳 CSV 以快速匯入具有屬性的聯絡人","upload_contacts_modal_download_example_csv":"下載範例 CSV","upload_contacts_modal_duplicates_description":"如果聯絡人已存在於您的聯絡人中，我們應該如何處理？","upload_contacts_modal_duplicates_overwrite_description":"覆寫現有聯絡人","upload_contacts_modal_duplicates_overwrite_title":"覆寫","upload_contacts_modal_duplicates_skip_description":"略過重複的聯絡人","upload_contacts_modal_duplicates_skip_title":"略過","upload_contacts_modal_duplicates_title":"重複項目","upload_contacts_modal_duplicates_update_description":"更新現有聯絡人","upload_contacts_modal_duplicates_update_title":"更新","upload_contacts_modal_pick_different_file":"選取不同的檔案","upload_contacts_modal_preview":"這是您的資料預覽。","upload_contacts_modal_upload_btn":"上傳聯絡人"},"experience":{"all":"全部","all_time":"全部時間","analysed_feedbacks":"已分析的自由文字答案","category":"類別","category_updated_successfully":"類別已成功更新！","complaint":"投訴","did_you_find_this_insight_helpful":"您覺得此洞察有幫助嗎？","failed_to_update_category":"更新類別失敗","feature_request":"請求","good_afternoon":"🌤️ 午安","good_evening":"🌙 晚安","good_morning":"☀️ 早安","insights_description":"從您所有問卷的回應中產生的所有洞察","insights_for_project":"\'{\'projectName\'}\' 的洞察","new_responses":"回應數","no_insights_for_this_filter":"此篩選器沒有洞察","no_insights_found":"找不到洞察。收集更多問卷回應或為您現有的問卷啟用洞察以開始使用。","praise":"讚美","sentiment_score":"情緒分數","templates_card_description":"選擇一個範本或從頭開始","templates_card_title":"衡量您的客戶體驗","this_month":"本月","this_quarter":"本季","this_week":"本週","today":"今天"},"formbricks_logo":"Formbricks 標誌","integrations":{"activepieces_integration_description":"立即將 Formbricks 與熱門應用程式連接，以在無需編碼的情況下自動執行任務。","additional_settings":"其他設定","airtable":{"airtable_base":"Airtable 資料庫","airtable_integration":"Airtable 整合","airtable_integration_description":"直接與 Airtable 同步回應。","airtable_integration_is_not_configured":"尚未設定 Airtable 整合","connect_with_airtable":"連線 Airtable","link_airtable_table":"連結 Airtable 表格","link_new_table":"連結新表格","no_bases_found":"找不到 Airtable 資料庫","no_integrations_yet":"您的 airtable 整合將在您新增後立即顯示在此處。⏲️","please_create_a_base":"請在 Airtable 上建立資料庫","please_select_a_base":"請選取資料庫","please_select_a_table":"請選取表格","sync_responses_with_airtable":"與 Airtable 同步回應","table_name":"表格名稱"},"airtable_integration_description":"使用問卷資料立即填入您的 Airtable 表格","connected_with_email":"已與 \'{\'email\'}\' 連線","connecting_integration_failed_please_try_again":"連線整合失敗。請再試一次！","create_survey_warning":"您必須建立問卷才能設定此整合","delete_integration":"刪除整合","delete_integration_confirmation":"您確定要刪除此整合嗎？","google_sheet_integration_description":"使用問卷資料立即填入您的試算表","google_sheets":{"connect_with_google_sheets":"連線 Google 試算表","enter_a_valid_spreadsheet_url_error":"請輸入有效的試算表網址","google_connection":"Google 連線","google_connection_deletion_description":"直接與 Google 試算表同步回應。","google_sheet_integration_is_not_configured":"您的 Formbricks 執行個體中尚未設定 Google 試算表整合。","google_sheet_logo":"Google 試算表標誌","google_sheet_name":"Google 試算表名稱","google_sheets_integration":"Google 試算表整合","google_sheets_integration_description":"直接與 Google 試算表同步回應。","link_google_sheet":"連結 Google 試算表","link_new_sheet":"連結新試算表","no_integrations_yet":"您的 Google 試算表整合將在您新增後立即顯示在此處。⏲️","spreadsheet_url":"試算表網址"},"include_created_at":"包含建立於","include_hidden_fields":"包含隱藏欄位","include_metadata":"包含元數據（瀏覽器、國家/地區等）","include_variables":"包含變數","integration_added_successfully":"整合已成功新增","integration_removed_successfully":"整合已成功移除","integration_updated_successfully":"整合已成功更新","make_integration_description":"透過 Make 將 Formbricks 與 1000 多個應用程式整合","manage_webhooks":"管理 Webhook","n8n_integration_description":"透過 n8n 將 Formbricks 與 350 多個應用程式整合","notion":{"col_name_of_type_is_not_supported":"Notion API 不支援類型為 \'{\'type\'}\' 的 \'{\'col_name\'}\'。資料將不會反映在您的 Notion 資料庫中。","connect_with_notion":"連線 Notion","connected_with_workspace":"已與 \'{\'workspace\'}\' 工作區連線","create_at_least_one_database_to_setup_this_integration":"您必須建立至少一個資料庫才能設定此整合","database_name":"資料庫名稱","duplicate_connection_warning":"與此資料庫的連線處於活動狀態。請謹慎變更。","link_database":"連結資料庫","link_new_database":"連結新資料庫","link_notion_database":"連結 Notion 資料庫","map_formbricks_fields_to_notion_property":"將 Formbricks 欄位對應到 Notion 屬性","no_databases_found":"您的 Notion 整合將在您新增後立即顯示在此處。⏲️","notion_integration":"Notion 整合","notion_integration_description":"直接將回應傳送至 Notion。","notion_integration_is_not_configured":"您的 Formbricks 執行個體中尚未設定 Notion 整合。","notion_logo":"Notion 標誌","please_complete_mapping_fields_with_notion_property":"請完成將欄位對應到 Notion 屬性","please_resolve_mapping_errors":"請解決對應錯誤","please_select_a_database":"請選取資料庫","please_select_at_least_one_mapping":"請選取至少一個對應","que_name_of_type_cant_be_mapped_to":"類型為 \'{\'question_label\'}\' 的 \'{\'que_name\'}\' 無法對應到類型為 \'{\'col_type\'}\' 的欄位 \'{\'col_name\'}\'。請改用類型為 \'{\'mapped_type\'}\' 的欄位。","select_a_database":"選取資料庫","select_a_field_to_map":"選取要對應的欄位","select_a_survey_question":"選取問卷問題","sync_responses_with_a_notion_database":"與 Notion 資料庫同步回應","update_connection":"重新連線 Notion","update_connection_tooltip":"重新連接整合以包含新添加的資料庫。您現有的整合將保持不變。"},"notion_integration_description":"將資料傳送至您的 Notion 資料庫","please_select_a_survey_error":"請選取問卷","select_at_least_one_question_error":"請選取至少一個問題","slack":{"already_connected_another_survey":"您已將另一個問卷連線到此頻道。","channel_name":"頻道名稱","connect_with_slack":"連線 Slack","connect_your_first_slack_channel":"連線您的第一個 Slack 頻道以開始使用。","connected_with_team":"已與 \'{\'team\'}\' 連線","create_at_least_one_channel_error":"您必須建立至少一個頻道才能設定此整合","dont_see_your_channel":"找不到您的頻道？","link_channel":"連結頻道","link_slack_channel":"連結 Slack 頻道","please_select_a_channel":"請選取頻道","select_channel":"選取頻道","slack_integration":"Slack 整合","slack_integration_description":"直接將回應傳送至 Slack。","slack_integration_is_not_configured":"您的 Formbricks 執行個體中尚未設定 Slack 整合。","slack_reconnect_button":"重新連線","slack_reconnect_button_description":"<b>注意：</b>我們最近變更了我們的 Slack 整合以支援私人頻道。請重新連線您的 Slack 工作區。"},"slack_integration_description":"將您的 Slack 工作區與 Formbricks 立即連線","to_configure_it":"進行設定。","webhook_integration_description":"根據您問卷中的操作觸發 Webhook","webhooks":{"add_webhook":"新增 Webhook","add_webhook_description":"將問卷回應資料傳送至自訂端點","all_current_and_new_surveys":"所有目前和新的問卷","created_by_third_party":"由第三方建立","discord_webhook_not_supported":"目前不支援 Discord webhooks。","empty_webhook_message":"您的 Webhook 將在您新增後立即顯示在此處。⏲️","endpoint_pinged":"耶！我們能夠 ping Webhook！","endpoint_pinged_error":"無法 ping Webhook！","please_check_console":"請檢查主控台以取得更多詳細資料","please_enter_a_url":"請輸入網址","response_created":"已建立回應","response_finished":"已完成回應","response_updated":"已更新回應","source":"來源","test_endpoint":"測試端點","triggers":"觸發器","webhook_added_successfully":"Webhook 已成功新增","webhook_delete_confirmation":"您確定要刪除此 Webhook 嗎？這將停止向您發送任何進一步的通知。","webhook_deleted_successfully":"Webhook 已成功刪除","webhook_name_placeholder":"選填：為您的 Webhook 加上標籤以便於識別","webhook_test_failed_due_to":"Webhook 測試因以下原因失敗","webhook_updated_successfully":"Webhook 已成功更新。","webhook_url_placeholder":"貼上您要觸發事件的網址"},"website_or_app_integration_description":"將 Formbricks 整合到您的網站或應用程式中","zapier_integration_description":"透過 Zapier 將 Formbricks 與 5000 多個應用程式整合"},"project":{"api-keys":{"add_api_key":"新增 API 金鑰","add_env_api_key":"新增 \'{\'environmentType\'}\' API 金鑰","api_key":"API 金鑰","api_key_copied_to_clipboard":"API 金鑰已複製到剪貼簿","api_key_created":"API 金鑰已建立","api_key_deleted":"API 金鑰已刪除","api_key_label":"API 金鑰標籤","api_key_security_warning":"為安全起見，API 金鑰僅在建立後顯示一次。請立即將其複製到您的目的地。","dev_api_keys":"開發環境金鑰","dev_api_keys_description":"為您的開發環境新增和移除 API 金鑰。","no_api_keys_yet":"您還沒有任何 API 金鑰","prod_api_keys":"生產環境金鑰","prod_api_keys_description":"為您的生產環境新增和移除 API 金鑰。","secret":"密碼","unable_to_delete_api_key":"無法刪除 API 金鑰"},"app-connection":{"api_host_description":"這是您 Formbricks 後端的網址。","app_connection":"應用程式連線","app_connection_description":"將您的應用程式連線至 Formbricks。","check_out_the_docs":"查看文件。","dive_into_the_docs":"深入瞭解文件。","does_your_widget_work":"您的小工具運作嗎？","environment_id":"您的 EnvironmentId","environment_id_description":"此 ID 可唯一識別此 Formbricks 環境。","environment_id_description_with_environment_id":"用於識別正確的環境：\'{\'environmentId\'}\' 是您的。","formbricks_sdk":"Formbricks SDK","formbricks_sdk_connected":"Formbricks SDK 已連線","formbricks_sdk_not_connected":"Formbricks SDK 尚未連線。","formbricks_sdk_not_connected_description":"將您的網站或應用程式與 Formbricks 連線","function":"函式","have_a_problem":"有問題嗎？","how_to_setup":"如何設定","how_to_setup_description":"請按照這些步驟在您的應用程式中設定 Formbricks 小工具。","identifying_your_users":"識別您的使用者","if_you_are_planning_to":"如果您計劃","insert_this_code_into_the":"將此程式碼插入","need_a_more_detailed_setup_guide_for":"需要更詳細的設定指南，適用於","not_working":"無法運作？","open_an_issue_on_github":"在 GitHub 上開啟問題","open_the_browser_console_to_see_the_logs":"開啟瀏覽器主控台以查看記錄。","receiving_data":"正在接收資料 💃🕺","recheck":"重新檢查","scroll_to_the_top":"捲動至頂端！","step_1":"步驟 1：使用 pnpm、npm 或 yarn 安裝","step_2":"步驟 2：初始化小工具","step_2_description":"匯入 Formbricks 並在您的元件中初始化小工具（例如，App.tsx）：","step_3":"步驟 3：偵錯模式","switch_on_the_debug_mode_by_appending":"藉由附加以下項目開啟偵錯模式","tag_of_your_app":"您應用程式的標籤","to_the":"到","to_the_url_where_you_load_the":"到您載入","want_to_learn_how_to_add_user_attributes":"想瞭解如何新增使用者屬性、自訂事件等嗎？","you_also_need_to_pass_a":"您還需要傳遞","you_are_done":"您已完成 🎉","your_app_now_communicates_with_formbricks":"您的應用程式現在可與 Formbricks 通訊 - 自動傳送事件和載入問卷！"},"general":{"cannot_delete_only_project":"這是您唯一的專案，無法刪除。請先建立新專案。","delete_project":"刪除專案","delete_project_confirmation":"您確定要刪除 \'{\'projectName\'}\' 嗎？此操作無法復原。","delete_project_name_includes_surveys_responses_people_and_more":"刪除 \'{\'projectName\'}\'，包括所有問卷、回應、人員、操作和屬性。","delete_project_settings_description":"刪除包含所有問卷、回應、人員、操作和屬性的專案。此操作無法復原。","error_saving_project_information":"儲存專案資訊時發生錯誤","only_owners_or_managers_can_delete_projects":"只有擁有者或管理員可以刪除專案","project_deleted_successfully":"專案已成功刪除","project_name_settings_description":"變更您的專案名稱。","project_name_updated_successfully":"專案名稱已成功更新","recontact_waiting_time":"重新聯絡等待時間","recontact_waiting_time_settings_description":"控制使用者在所有應用程式問卷中可以被調查的頻率。","this_action_cannot_be_undone":"此操作無法復原。","wait_x_days_before_showing_next_survey":"在顯示下一個問卷之前等待 X 天：","waiting_period_updated_successfully":"等待時間已成功更新","whats_your_project_called":"您的專案名稱為何？"},"languages":{"add_language":"新增語言","alias":"別名","alias_tooltip":"別名是替代名稱，用於在連結問卷和 SDK 中識別語言（選填）","cannot_remove_language_warning":"您無法移除此語言，因為它仍在這些問卷中使用：","conflict_between_identifier_and_alias":"新增語言的識別碼與您的別名之一之間存在衝突。別名和識別碼不能相同。","conflict_between_selected_alias_and_another_language":"所選別名與另一個具有此識別碼的語言之間存在衝突。請將具有此識別碼的語言新增至您的專案，以避免不一致。","delete_language_confirmation":"您確定要刪除此語言嗎？此操作無法復原。","duplicate_language_or_language_id":"重複的語言或語言 ID","edit_languages":"編輯語言","identifier":"識別碼 (ISO)","incomplete_translations":"不完整的翻譯","language":"語言","language_deleted_successfully":"語言已成功刪除","languages_updated_successfully":"語言已成功更新","multi_language_surveys":"多語言問卷","multi_language_surveys_description":"新增語言以建立多語言問卷。","no_language_found":"找不到語言。在下方新增您的第一個語言。","please_select_a_language":"請選取語言","remove_language":"移除語言","remove_language_from_surveys_to_remove_it_from_project":"請從這些問卷中移除語言，以便從專案中移除。","search_items":"搜尋項目","translate":"翻譯"},"look":{"add_background_color":"新增背景顏色","add_background_color_description":"將背景顏色新增至標誌容器。","app_survey_placement":"應用程式問卷位置","app_survey_placement_settings_description":"變更問卷在您的 Web 應用程式或網站中的顯示位置。","centered_modal_overlay_color":"置中彈窗覆蓋顏色","email_customization":"電子郵件自訂","email_customization_description":"變更 Formbricks 代表您發送的電子郵件的外觀和風格。","enable_custom_styling":"啟用自訂樣式","enable_custom_styling_description":"允許使用者在問卷編輯器中覆寫此主題。","failed_to_remove_logo":"無法移除標誌","failed_to_update_logo":"無法更新標誌","formbricks_branding":"Formbricks 品牌","formbricks_branding_hidden":"Formbricks 品牌已隱藏。","formbricks_branding_settings_description":"我們很感謝您的支持，但如果您關閉它，我們也理解。","formbricks_branding_shown":"Formbricks 品牌已顯示。","logo_removed_successfully":"標誌已成功移除","logo_settings_description":"上傳您的公司標誌以品牌化問卷和連結預覽。","logo_updated_successfully":"標誌已成功更新","logo_upload_failed":"標誌上傳失敗。請再試一次。","placement_updated_successfully":"位置已成功更新","remove_branding_with_a_higher_plan":"使用更高等級的方案移除品牌","remove_logo":"移除標誌","remove_logo_confirmation":"您確定要移除標誌嗎？","replace_logo":"取代標誌","reset_styling":"重設樣式","reset_styling_confirmation":"您確定要將樣式重設為預設值嗎？","show_formbricks_branding_in":"在 \'{\'type\'}\' 問卷中顯示 Formbricks 品牌","show_powered_by_formbricks":"顯示「由 Formbricks 提供技術支援」簽名","styling_updated_successfully":"樣式已成功更新","theme":"主題","theme_settings_description":"為所有問卷建立樣式主題。您可以為每個問卷啟用自訂樣式。"},"tags":{"add":"新增","add_tag":"新增標籤","count":"計數","delete_tag_confirmation":"您確定要刪除此標籤嗎？","empty_message":"標記提交內容，在此處找到您的標籤清單。","manage_tags":"管理標籤","manage_tags_description":"合併和移除回應標籤。","merge":"合併","no_tag_found":"找不到標籤","search_tags":"搜尋標籤...","tag":"標籤","tag_already_exists":"標籤已存在","tag_deleted":"標籤已刪除","tag_updated":"標籤已更新","tags_merged":"標籤已合併","unique_constraint_failed_on_the_fields":"欄位上唯一性限制失敗"},"teams":{"manage_teams":"管理團隊","no_teams_found":"找不到團隊","only_organization_owners_and_managers_can_manage_teams":"只有組織擁有者和管理員才能管理團隊。","permission":"權限","team_name":"團隊名稱","team_settings_description":"查看哪些團隊可以存取此專案。"}},"projects_environments_organizations_not_found":"找不到專案、環境或組織","segments":{"add_filter_below":"在下方新增篩選器","add_your_first_filter_to_get_started":"新增您的第一個篩選器以開始使用","cannot_delete_segment_used_in_surveys":"您無法刪除此區隔，因為它仍在這些問卷中使用：","clone_and_edit_segment":"複製和編輯區隔","create_group":"建立群組","create_your_first_segment":"建立您的第一個區隔以開始使用","delete_segment":"刪除區隔","desktop":"桌面版","devices":"裝置","edit_segment":"編輯區隔","error_resetting_filters":"重設篩選器時發生錯誤","error_saving_segment":"儲存區隔時發生錯誤","ex_fully_activated_recurring_users":"例如：完全啟用的定期使用者","ex_power_users":"例如：進階使用者","filters_reset_successfully":"篩選器已成功重設","here":"這裡","hide_filters":"隱藏篩選器","identifying_users":"識別使用者","invalid_segment":"無效區隔","invalid_segment_filters":"無效的篩選器。請檢查篩選器並再試一次。","load_segment":"載入區隔","most_active_users_in_the_last_30_days":"最近 30 天內最活躍的使用者","no_attributes_yet":"尚無屬性！","no_filters_yet":"尚無篩選器！","no_segments_yet":"您目前沒有已儲存的區隔。","person_and_attributes":"人員與屬性","phone":"電話","please_remove_the_segment_from_these_surveys_in_order_to_delete_it":"請從這些問卷中移除區隔，以便將其刪除。","pre_segment_users":"使用屬性篩選器預先區隔您的使用者。","remove_all_filters":"移除所有篩選器","reset_all_filters":"重設所有篩選器","save_as_new_segment":"另存為新區隔","save_your_filters_as_a_segment_to_use_it_in_other_surveys":"將您的篩選器儲存為區隔，以便在其他問卷中使用","segment_created_successfully":"區隔已成功建立！","segment_deleted_successfully":"區隔已成功刪除！","segment_saved_successfully":"區隔已成功儲存","segment_updated_successfully":"區隔已成功更新！","segments_help_you_target_users_with_same_characteristics_easily":"區隔可協助您輕鬆針對具有相同特徵的使用者","target_audience":"目標受眾","this_action_resets_all_filters_in_this_survey":"此操作會重設此問卷中的所有篩選器。","this_segment_is_used_in_other_surveys":"此區隔在其他問卷中使用。請謹慎變更","title_is_required":"標題為必填項。","unknown_filter_type":"未知的篩選器類型","unlock_segments_description":"將聯絡人整理到區隔中，以鎖定特定的使用者群組","unlock_segments_title":"使用更高等級的方案解鎖區隔","user_targeting_is_currently_only_available_when":"使用者目標設定目前僅在以下情況下可用：","value_cannot_be_empty":"值不能為空。","value_must_be_a_number":"值必須是數字。","view_filters":"檢視篩選器","where":"何處","with_the_formbricks_sdk":"使用 Formbricks SDK"},"settings":{"billing":{"10000_monthly_responses":"10000 個每月回應","1500_monthly_responses":"1500 個每月回應","2000_monthly_identified_users":"2000 個每月識別使用者","30000_monthly_identified_users":"30000 個每月識別使用者","3_projects":"3 個專案","5000_monthly_responses":"5000 個每月回應","5_projects":"5 個專案","7500_monthly_identified_users":"7500 個每月識別使用者","advanced_targeting":"進階目標設定","all_integrations":"所有整合","all_surveying_features":"所有調查功能","annually":"每年","api_webhooks":"API 和 Webhook","app_surveys":"應用程式問卷","contact_us":"聯絡我們","current":"目前","current_plan":"目前方案","current_tier_limit":"目前層級限制","custom_miu_limit":"自訂 MIU 上限","custom_project_limit":"自訂專案上限","customer_success_manager":"客戶成功經理","email_embedded_surveys":"電子郵件嵌入式問卷","email_support":"電子郵件支援","enterprise":"企業版","enterprise_description":"頂級支援和自訂限制。","everybody_has_the_free_plan_by_default":"每個人預設都有免費方案！","everything_in_free":"免費方案中的所有功能","everything_in_scale":"進階方案中的所有功能","everything_in_startup":"啟動方案中的所有功能","free":"免費","free_description":"無限問卷、團隊成員等。","get_2_months_free":"免費獲得 2 個月","get_in_touch":"取得聯繫","link_surveys":"連結問卷（可分享）","logic_jumps_hidden_fields_recurring_surveys":"邏輯跳躍、隱藏欄位、定期問卷等。","manage_card_details":"管理卡片詳細資料","manage_subscription":"管理訂閱","monthly":"每月","monthly_identified_users":"每月識別使用者","multi_language_surveys":"多語言問卷","plan_upgraded_successfully":"方案已成功升級","premium_support_with_slas":"具有 SLA 的頂級支援","priority_support":"優先支援","remove_branding":"移除品牌","say_hi":"打個招呼！","scale":"進階版","scale_description":"用於擴展業務的進階功能。","startup":"啟動版","startup_description":"免費方案中的所有功能以及其他功能。","switch_plan":"切換方案","switch_plan_confirmation_text":"您確定要切換至 \'{\'plan\'}\' 方案嗎？您將每月被收取 \'{\'price\'}\'。","team_access_roles":"團隊存取角色","technical_onboarding":"技術新手上路","unable_to_upgrade_plan":"無法升級方案","unlimited_apps_websites":"無限應用程式和網站","unlimited_miu":"無限 MIU","unlimited_projects":"無限專案","unlimited_responses":"無限回應","unlimited_surveys":"無限問卷","unlimited_team_members":"無限團隊成員","upgrade":"升級","uptime_sla_99":"正常運作時間 SLA (99%)","website_surveys":"網站問卷"},"enterprise":{"ai":"AI 分析","audit_logs":"稽核記錄","coming_soon":"即將推出","contacts_and_segments":"聯絡人管理和區隔","enterprise_features":"企業版功能","get_an_enterprise_license_to_get_access_to_all_features":"取得企業授權以存取所有功能。","keep_full_control_over_your_data_privacy_and_security":"完全掌控您的資料隱私權和安全性。","no_call_needed_no_strings_attached_request_a_free_30_day_trial_license_to_test_all_features_by_filling_out_this_form":"無需通話，無附加條件：填寫此表單，請求免費 30 天試用授權以測試所有功能：","no_credit_card_no_sales_call_just_test_it":"無需信用卡。無需銷售電話。只需測試一下 :)","on_request":"依要求","organization_roles":"組織角色（管理員、編輯者、開發人員等）","questions_please_reach_out_to":"有任何問題？請聯絡","request_30_day_trial_license":"請求 30 天試用授權","saml_sso":"SAML SSO","service_level_agreement":"服務等級協定","soc2_hipaa_iso_27001_compliance_check":"SOC2、HIPAA、ISO 27001 合規性檢查","sso":"SSO（Google、Microsoft、OpenID Connect）","teams":"團隊和存取角色（讀取、讀取和寫入、管理）","unlock_the_full_power_of_formbricks_free_for_30_days":"免費解鎖 Formbricks 的全部功能，為期 30 天。","your_enterprise_license_is_active_all_features_unlocked":"您的企業授權處於活動狀態。所有功能都已解鎖。"},"general":{"bulk_invite_warning_description":"在免費方案中，所有組織成員始終會被指派「擁有者」角色。","cannot_delete_only_organization":"這是您唯一的組織，無法刪除。請先建立新組織。","cannot_leave_only_organization":"您無法離開此組織，因為它是您唯一的組織。請先建立新組織。","copy_invite_link_to_clipboard":"將邀請連結複製到剪貼簿","create_new_organization":"建立新組織","create_new_organization_description":"建立新組織以處理一組不同的專案。","customize_email_with_a_higher_plan":"使用更高等級的方案自訂電子郵件","delete_organization":"刪除組織","delete_organization_description":"刪除包含所有專案的組織，包括所有問卷、回應、人員、操作和屬性","delete_organization_warning":"在您繼續刪除此組織之前，請注意以下後果：","delete_organization_warning_1":"永久移除與此組織相關聯的所有專案。","delete_organization_warning_2":"此操作無法復原。一旦刪除，即永久消失。","delete_organization_warning_3":"請在下列欄位中輸入 \'{\'organizationName\'}\' 以確認永久刪除此組織：","eliminate_branding_with_whitelabel":"消除 Formbricks 品牌並啟用其他白標自訂選項。","email_customization_preview_email_heading":"嗨，\'{\'userName\'}\'","email_customization_preview_email_text":"這是電子郵件預覽，向您展示電子郵件中將呈現哪個標誌。","enable_formbricks_ai":"啟用 Formbricks AI","error_deleting_organization_please_try_again":"刪除組織時發生錯誤。請再試一次。","formbricks_ai":"Formbricks AI","formbricks_ai_description":"使用 Formbricks AI 從您的問卷回應中取得個人化洞察","formbricks_ai_disable_success_message":"已成功停用 Formbricks AI。","formbricks_ai_enable_success_message":"已成功啟用 Formbricks AI。","formbricks_ai_privacy_policy_text":"藉由啟用 Formbricks AI，您同意更新後的","from_your_organization":"來自您的組織","invitation_sent_once_more":"已再次發送邀請。","invite_deleted_successfully":"邀請已成功刪除","invited_on":"邀請於 \'{\'date\'}\'","invites_failed":"邀請失敗","leave_organization":"離開組織","leave_organization_description":"您將離開此組織並失去對所有問卷和回應的存取權限。只有再次收到邀請，您才能重新加入。","leave_organization_ok_btn_text":"是，離開組織","leave_organization_title":"您確定嗎？","logo_in_email_header":"電子郵件頁首中的標誌","logo_removed_successfully":"標誌已成功移除","logo_saved_successfully":"標誌已成功儲存","manage_members":"管理成員","manage_members_description":"新增或移除您組織中的成員。","member_deleted_successfully":"成員已成功刪除","member_invited_successfully":"成員已成功邀請","once_its_gone_its_gone":"一旦刪除，即永久消失。","only_org_owner_can_perform_action":"只有組織擁有者才能存取此設定。","organization_created_successfully":"組織已成功建立！","organization_deleted_successfully":"組織已成功刪除。","organization_invite_link_ready":"您的組織邀請連結已準備就緒！","organization_name":"組織名稱","organization_name_description":"為您的組織提供描述性名稱。","organization_name_placeholder":"例如：飛天小女警","organization_name_updated_successfully":"組織名稱已成功更新","organization_settings":"組織設定","please_add_a_logo":"請新增標誌","please_check_csv_file":"請檢查 CSV 檔案，並確保其符合我們的格式","please_save_logo_before_sending_test_email":"請在發送測試電子郵件之前儲存標誌。","remove_logo":"移除標誌","replace_logo":"取代標誌","resend_invitation_email":"重新發送邀請電子郵件","share_invite_link":"分享邀請連結","share_this_link_to_let_your_organization_member_join_your_organization":"分享此連結以讓您的組織成員加入您的組織：","test_email_sent_successfully":"測試電子郵件已成功發送"},"notifications":{"auto_subscribe_to_new_surveys":"自動訂閱新問卷","email_alerts_surveys":"電子郵件警示（問卷）","every_response":"每個回應","every_response_tooltip":"傳送完整的回應，沒有部分回應。","need_slack_or_discord_notifications":"需要 Slack 或 Discord 通知嗎？","notification_settings_updated":"通知設定已更新","set_up_an_alert_to_get_an_email_on_new_responses":"設定警示以在收到新回應時收到電子郵件","stay_up_to_date_with_a_Weekly_every_Monday":"每週一使用每週摘要保持最新資訊","use_the_integration":"使用整合","want_to_loop_in_organization_mates":"想要讓組織夥伴也參與嗎？","weekly_summary_projects":"每週摘要（專案）","you_will_not_be_auto_subscribed_to_this_organizations_surveys_anymore":"您將不會再自動訂閱此組織的問卷！","you_will_not_receive_any_more_emails_for_responses_on_this_survey":"您將不會再收到此問卷回應的電子郵件！"},"profile":{"account_deletion_consequences_warning":"帳戶刪除後果","avatar_update_failed":"頭像更新失敗。請再試一次。","backup_code":"備份碼","change_image":"變更圖片","confirm_delete_account":"刪除您的帳戶以及您的所有個人資訊和資料","confirm_delete_my_account":"刪除我的帳戶","confirm_your_current_password_to_get_started":"確認您目前的密碼以開始使用。","delete_account":"刪除帳戶","disable_two_factor_authentication":"停用雙重驗證","disable_two_factor_authentication_description":"如果您需要停用 2FA，我們建議您盡快重新啟用它。","each_backup_code_can_be_used_exactly_once_to_grant_access_without_your_authenticator":"每個備份碼只能使用一次，以便在沒有驗證器的情況下授予存取權限。","enable_two_factor_authentication":"啟用雙重驗證","enter_the_code_from_your_authenticator_app_below":"在下方輸入您驗證器應用程式中的程式碼。","file_size_must_be_less_than_10mb":"檔案大小必須小於 10MB。","invalid_file_type":"無效的檔案類型。僅允許 JPEG、PNG 和 WEBP 檔案。","lost_access":"無法存取","or_enter_the_following_code_manually":"或手動輸入下列程式碼：","organization_identification":"協助您的組織在 Formbricks 上識別您","organizations_delete_message":"您是這些組織的唯一擁有者，因此它們也 <b>將被刪除。</b>","permanent_removal_of_all_of_your_personal_information_and_data":"永久移除您的所有個人資訊和資料","personal_information":"個人資訊","please_enter_email_to_confirm_account_deletion":"請在以下欄位中輸入 \'{\'email\'}\' 以確認永久刪除您的帳戶：","profile_updated_successfully":"您的個人資料已成功更新","remove_image":"移除圖片","save_the_following_backup_codes_in_a_safe_place":"將下列備份碼儲存在安全的地方。","scan_the_qr_code_below_with_your_authenticator_app":"使用您的驗證器應用程式掃描下方的 QR 碼。","security_description":"管理您的密碼和其他安全性設定。","two_factor_authentication":"雙重驗證","two_factor_authentication_description":"在您的密碼被盜時，為您的帳戶新增額外的安全層。","two_factor_authentication_enabled_please_enter_the_six_digit_code_from_your_authenticator_app":"已啟用雙重驗證。請輸入您驗證器應用程式中的六位數程式碼。","two_factor_code":"雙重驗證碼","unlock_two_factor_authentication":"使用更高等級的方案解鎖雙重驗證","update_personal_info":"更新您的個人資訊","upload_image":"上傳圖片","warning_cannot_delete_account":"您是此組織的唯一擁有者。請先將所有權轉讓給其他成員。","warning_cannot_undo":"此操作無法復原","you_must_select_a_file":"您必須選取檔案。"},"teams":{"add_members_description":"將成員新增至團隊並確定其角色。","add_projects_description":"控制團隊成員可以存取哪些專案。","all_members_added":"所有成員都已新增至此團隊。","all_projects_added":"所有專案都已新增至此團隊。","are_you_sure_you_want_to_delete_this_team":"您確定要刪除此團隊嗎？這也會移除對此團隊相關的所有專案和問卷的存取權限。","billing_role_description":"只能存取帳單資訊。","bulk_invite":"大量邀請","contributor":"投稿人","create":"建立","create_first_team_message":"您必須先建立團隊。","create_new_team":"建立新團隊","delete_team":"刪除團隊","empty_teams_state":"建立您的第一個團隊。","enter_team_name":"輸入團隊名稱","individual":"個人","invite_member":"邀請成員","invite_member_description":"將您的同事新增至此組織。","manage":"管理","manage_team":"管理團隊","manage_team_disabled":"只有組織擁有者、管理員和團隊管理員才能管理團隊。","manager_role_description":"管理員可以存取所有專案，並新增和移除成員。","member_role_description":"成員可以在選定的專案中工作。","member_role_info_message":"若要授予新成員存取專案的權限，請將他們新增至下方的團隊。藉由團隊，您可以管理誰可以存取哪些專案。","owner_role_description":"擁有者對組織具有完全控制權。","please_fill_all_member_fields":"請填寫所有欄位以新增新成員。","please_fill_all_project_fields":"請填寫所有欄位以新增新專案。","read":"讀取","read_write":"讀取和寫入","team_admin":"團隊管理員","team_created_successfully":"團隊已成功建立。","team_deleted_successfully":"團隊已成功刪除。","team_deletion_not_allowed":"您不得刪除此團隊。","team_name":"團隊名稱","team_name_settings_title":"\'{\'teamName\'}\' 設定","team_select_placeholder":"搜尋團隊名稱...","team_settings_description":"管理團隊成員、存取權限等。","team_updated_successfully":"團隊已成功更新","teams":"團隊","teams_description":"將成員指派到團隊中，並授予團隊存取專案的權限。","unlock_teams_description":"管理哪些組織成員可以存取特定專案和問卷。","unlock_teams_title":"使用更高等級的方案解鎖團隊。","upgrade_plan_notice_message":"使用更高等級的方案解鎖組織角色。","you_are_a_member":"您是成員"}},"surveys":{"all_set_time_to_create_first_survey":"您已準備就緒！是時候建立您的第一個問卷","alphabetical":"依字母順序","copy_survey":"複製問卷","copy_survey_description":"將此問卷複製到另一個環境","copy_survey_error":"無法複製問卷","copy_survey_link_to_clipboard":"將問卷連結複製到剪貼簿","copy_survey_success":"問卷已成功複製！","delete_survey_and_responses_warning":"您確定要刪除此問卷及其所有回應嗎？此操作無法復原。","edit":{"1_choose_the_default_language_for_this_survey":"1. 選擇此問卷的預設語言：","2_activate_translation_for_specific_languages":"2. 啟用特定語言的翻譯：","add":"新增 +","add_a_delay_or_auto_close_the_survey":"新增延遲或自動關閉問卷","add_a_four_digit_pin":"新增四位數 PIN 碼","add_a_new_question_to_your_survey":"在您的問卷中新增一個新問題","add_a_variable_to_calculate":"新增要計算的變數","add_action_below":"在下方新增操作","add_choice_below":"在下方新增選項","add_color_coding":"新增顏色編碼","add_color_coding_description":"為選項新增紅色、橘色和綠色顏色代碼。","add_column":"新增欄位","add_condition_below":"在下方新增條件","add_custom_styles":"新增自訂樣式","add_delay_before_showing_survey":"新增顯示問卷之前的延遲","add_description":"新增描述","add_ending":"新增結尾","add_ending_below":"在下方新增結尾","add_hidden_field_id":"新增隱藏欄位 ID","add_highlight_border":"新增醒目提示邊框","add_highlight_border_description":"在您的問卷卡片新增外邊框。","add_logic":"新增邏輯","add_option":"新增選項","add_other":"新增「其他」","add_photo_or_video":"新增照片或影片","add_pin":"新增 PIN 碼","add_question":"新增問題","add_question_below":"在下方新增問題","add_row":"新增列","add_variable":"新增變數","address_fields":"地址欄位","address_line_1":"地址 1","address_line_2":"地址 2","adjust_survey_closed_message":"調整「問卷已關閉」訊息","adjust_survey_closed_message_description":"變更訪客在問卷關閉時看到的訊息。","adjust_the_theme_in_the":"在","all_other_answers_will_continue_to":"所有其他答案將繼續","allow_file_type":"允許檔案類型","allow_multi_select":"允許多重選取","allow_multiple_files":"允許上傳多個檔案","allow_users_to_select_more_than_one_image":"允許使用者選取多張圖片","always_show_survey":"始終顯示問卷","and_launch_surveys_in_your_website_or_app":"並在您的網站或應用程式中啟動問卷。","animation":"動畫","app_survey_description":"將問卷嵌入您的 Web 應用程式或網站中以收集回應。","assign":"等於 =","audience":"受眾","auto_close_on_inactivity":"非活動時自動關閉","automatically_close_survey_after":"在指定時間自動關閉問卷","automatically_close_the_survey_after_a_certain_number_of_responses":"在收到一定數量的回覆後自動關閉問卷。","automatically_close_the_survey_if_the_user_does_not_respond_after_certain_number_of_seconds":"如果用戶在特定秒數後未回應，則自動關閉問卷。","automatically_closes_the_survey_at_the_beginning_of_the_day_utc":"在指定日期（UTC時間）自動關閉問卷。","automatically_mark_the_survey_as_complete_after":"在指定時間後自動將問卷標記為完成","automatically_release_the_survey_at_the_beginning_of_the_day_utc":"在指定日期（UTC時間）自動發佈問卷。","back_button_label":"「返回」按鈕標籤","background_styling":"背景樣式設定","blocks_survey_if_a_submission_with_the_single_use_id_suid_exists_already":"如果已存在具有單次使用 ID (suId) 的提交，則封鎖問卷。","blocks_survey_if_the_survey_url_has_no_single_use_id_suid":"如果問卷網址沒有單次使用 ID (suId)，則封鎖問卷。","brand_color":"品牌顏色","brightness":"亮度","button_label":"按鈕標籤","button_to_continue_in_survey":"問卷中繼續的按鈕","button_to_link_to_external_url":"連結到外部網址的按鈕","button_url":"按鈕網址","cal_username":"Cal.com 使用者名稱或使用者名稱/事件","calculate":"計算","capture_a_new_action_to_trigger_a_survey_on":"擷取新的操作以觸發問卷。","capture_new_action":"擷取新操作","card_arrangement_for_survey_type_derived":"\'{\'surveyTypeDerived\'}\' 問卷的卡片排列","card_background_color":"卡片背景顏色","card_border_color":"卡片邊框顏色","card_shadow_color":"卡片陰影顏色","card_styling":"卡片樣式設定","casual":"隨意","caution_text":"變更會導致不一致","centered_modal_overlay_color":"置中彈窗覆蓋顏色","change_anyway":"仍然變更","change_background":"變更背景","change_question_type":"變更問題類型","change_the_background_color_of_the_card":"變更卡片的背景顏色。","change_the_background_color_of_the_input_fields":"變更輸入欄位的背景顏色。","change_the_background_to_a_color_image_or_animation":"將背景變更為顏色、圖片或動畫。","change_the_border_color_of_the_card":"變更卡片的邊框顏色。","change_the_border_color_of_the_input_fields":"變更輸入欄位的邊框顏色。","change_the_border_radius_of_the_card_and_the_inputs":"變更卡片和輸入的邊框半徑。","change_the_brand_color_of_the_survey":"變更問卷的品牌顏色。","change_the_placement_of_this_survey":"變更此問卷的位置。","change_the_question_color_of_the_survey":"變更問卷的問題顏色。","change_the_shadow_color_of_the_card":"變更卡片的陰影顏色。","changes_saved":"已儲存變更。","character_limit_toggle_description":"限制答案的長度或短度。","character_limit_toggle_title":"新增字元限制","checkbox_label":"核取方塊標籤","choose_the_actions_which_trigger_the_survey":"選擇觸發問卷的操作。","choose_where_to_run_the_survey":"選擇在哪裡執行問卷。","city":"城市","close_survey_on_date":"在指定日期關閉問卷","close_survey_on_response_limit":"在回應次數上限關閉問卷","color":"顏色","columns":"欄位","company":"公司","company_logo":"公司標誌","completed_responses":"完成的回應。","concat":"串連 +","conditional_logic":"條件邏輯","confirm_default_language":"確認預設語言","confirm_survey_changes":"確認問卷變更","contact_fields":"聯絡人欄位","contains":"包含","continue_to_settings":"繼續設定","control_which_file_types_can_be_uploaded":"控制可以上傳哪些檔案類型。","convert_to_multiple_choice":"轉換為多選","convert_to_single_choice":"轉換為單選","country":"國家/地區","create_group":"建立群組","create_your_own_survey":"建立您自己的問卷","css_selector":"CSS 選取器","custom_hostname":"自訂主機名稱","darken_or_lighten_background_of_your_choice":"變暗或變亮您選擇的背景。","date_format":"日期格式","days_before_showing_this_survey_again":"天後再次顯示此問卷。","decide_how_often_people_can_answer_this_survey":"決定人們可以回答此問卷的頻率。","delete_choice":"刪除選項","description":"描述","disable_the_visibility_of_survey_progress":"停用問卷進度的可見性。","display_an_estimate_of_completion_time_for_survey":"顯示問卷的估計完成時間","display_number_of_responses_for_survey":"顯示問卷的回應數","divide":"除 /","does_not_contain":"不包含","does_not_end_with":"不以...結尾","does_not_equal":"不等於","does_not_include_all_of":"不包含全部","does_not_include_one_of":"不包含其中之一","does_not_start_with":"不以...開頭","edit_recall":"編輯回憶","edit_translations":"編輯 \'{\'language\'}\' 翻譯","enable_encryption_of_single_use_id_suid_in_survey_url":"啟用問卷網址中單次使用 ID (suId) 的加密。","enable_participants_to_switch_the_survey_language_at_any_point_during_the_survey":"允許參與者在問卷中的任何時間點切換問卷語言。","end_screen_card":"結束畫面卡片","ending_card":"結尾卡片","ending_card_used_in_logic":"此結尾卡片用於問題 \'{\'questionIndex\'}\' 的邏輯中。","ends_with":"結尾為","equals":"等於","equals_one_of":"等於其中之一","error_publishing_survey":"發布問卷時發生錯誤。","error_saving_changes":"儲存變更時發生錯誤","even_after_they_submitted_a_response_e_g_feedback_box":"即使他們提交回應之後（例如，意見反應方塊）","everyone":"所有人","fallback_missing":"遺失的回退","fieldId_is_used_in_logic_of_question_please_remove_it_from_logic_first":"\'{\'fieldId\'}\' 用於問題 \'{\'questionIndex\'}\' 的邏輯中。請先從邏輯中移除。","field_name_eg_score_price":"欄位名稱，例如：分數、價格","first_name":"名字","five_points_recommended":"5 分（建議）","follow_ups":"後續追蹤","follow_ups_delete_modal_text":"您確定要刪除此後續追蹤嗎？","follow_ups_delete_modal_title":"刪除後續追蹤？","follow_ups_empty_description":"向回應者、您自己或團隊夥伴傳送訊息。","follow_ups_empty_heading":"傳送自動後續追蹤","follow_ups_ending_card_delete_modal_text":"此結尾卡片用於後續追蹤中。刪除它將會從所有後續追蹤中移除。您確定要刪除它嗎？","follow_ups_ending_card_delete_modal_title":"刪除結尾卡片？","follow_ups_hidden_field_error":"隱藏欄位在後續追蹤中使用。請先從後續追蹤中移除。","follow_ups_item_ending_tag":"結尾","follow_ups_item_issue_detected_tag":"偵測到問題","follow_ups_item_response_tag":"任何回應","follow_ups_item_send_email_tag":"發送電子郵件","follow_ups_modal_action_body_label":"內文","follow_ups_modal_action_body_placeholder":"電子郵件內文","follow_ups_modal_action_email_content":"電子郵件內容","follow_ups_modal_action_email_settings":"電子郵件設定","follow_ups_modal_action_from_description":"傳送電子郵件的電子郵件地址","follow_ups_modal_action_from_label":"寄件者","follow_ups_modal_action_label":"操作","follow_ups_modal_action_replyTo_description":"如果收件者按下回覆，則以下電子郵件地址將會收到","follow_ups_modal_action_replyTo_label":"回覆至","follow_ups_modal_action_subject":"感謝您的回答！","follow_ups_modal_action_subject_label":"主旨","follow_ups_modal_action_subject_placeholder":"電子郵件主旨","follow_ups_modal_action_to_description":"傳送電子郵件的電子郵件地址","follow_ups_modal_action_to_label":"收件者","follow_ups_modal_action_to_warning":"問卷中未偵測到電子郵件欄位","follow_ups_modal_create_heading":"建立新的後續追蹤","follow_ups_modal_edit_heading":"編輯此後續追蹤","follow_ups_modal_edit_no_id":"未提供問卷後續追蹤 ID，無法更新問卷後續追蹤","follow_ups_modal_name_label":"後續追蹤名稱","follow_ups_modal_name_placeholder":"為您的後續追蹤命名","follow_ups_modal_subheading":"向回應者、您自己或團隊夥伴傳送訊息","follow_ups_modal_trigger_description":"應在何時觸發此後續追蹤？","follow_ups_modal_trigger_label":"觸發器","follow_ups_modal_trigger_type_ending":"回應者看到特定結尾","follow_ups_modal_trigger_type_ending_select":"選取結尾：","follow_ups_modal_trigger_type_ending_warning":"問卷中找不到結尾！","follow_ups_modal_trigger_type_response":"回應者完成問卷","follow_ups_new":"新增後續追蹤","follow_ups_upgrade_button_text":"升級以啟用後續追蹤","form_styling":"表單樣式設定","formbricks_ai_description":"描述您的問卷並讓 Formbricks AI 為您建立問卷","formbricks_ai_generate":"產生","formbricks_ai_prompt_placeholder":"輸入問卷資訊（例如，要涵蓋的關鍵主題）","formbricks_sdk_is_not_connected":"Formbricks SDK 未連線","four_points":"4 分","heading":"標題","hidden_field_added_successfully":"隱藏欄位已成功新增","hide_advanced_settings":"隱藏進階設定","hide_logo":"隱藏標誌","hide_progress_bar":"隱藏進度列","hide_the_logo_in_this_specific_survey":"在此特定問卷中隱藏標誌","hostname":"主機名稱","how_funky_do_you_want_your_cards_in_survey_type_derived_surveys":"您希望 \'{\'surveyTypeDerived\'}\' 問卷中的卡片有多酷炫","how_it_works":"運作方式","if_you_need_more_please":"如果您需要更多，請","if_you_really_want_that_answer_ask_until_you_get_it":"如果您真的想要該答案，請詢問直到您獲得它。","ignore_waiting_time_between_surveys":"忽略問卷之間的等待時間","image":"圖片","includes_all_of":"包含全部","includes_one_of":"包含其中之一","initial_value":"初始值","inner_text":"內部文字","input_border_color":"輸入邊框顏色","input_color":"輸入顏色","invalid_targeting":"目標設定無效：請檢查您的受眾篩選器","invalid_video_url_warning":"請輸入有效的 YouTube、Vimeo 或 Loom 網址。我們目前不支援其他影片託管提供者。","invalid_youtube_url":"無效的 YouTube 網址","is_accepted":"已接受","is_after":"在之後","is_before":"在之前","is_booked":"已預訂","is_clicked":"已點擊","is_completely_submitted":"已完全提交","is_partially_submitted":"已部分提交","is_skipped":"已跳過","is_submitted":"已提交","jump_to_question":"跳至問題","keep_current_order":"保留目前順序","keep_showing_while_conditions_match":"在條件符合時持續顯示","key":"金鑰","last_name":"姓氏","let_people_upload_up_to_25_files_at_the_same_time":"允許使用者同時上傳最多 25 個檔案。","limit_file_types":"限制檔案類型","limit_the_maximum_file_size":"限制最大檔案大小","limit_upload_file_size_to":"限制上傳檔案大小為","link_survey_description":"分享問卷頁面的連結或將其嵌入網頁或電子郵件中。","link_used_message":"已使用連結","load_segment":"載入區隔","logic_error_warning":"變更將導致邏輯錯誤","logic_error_warning_text":"變更問題類型將會從此問題中移除邏輯條件","long_answer":"長回答","lower_label":"下標籤","manage_languages":"管理語言","max_file_size":"最大檔案大小","max_file_size_limit_is":"最大檔案大小限制為","multiply":"乘 *","needed_for_self_hosted_cal_com_instance":"自行託管 Cal.com 執行個體時需要","next_button_label":"「下一步」按鈕標籤","next_question":"下一個問題","no_hidden_fields_yet_add_first_one_below":"尚無隱藏欄位。在下方新增第一個隱藏欄位。","no_images_found_for":"找不到「\'{\'query\'}\'」的圖片","no_languages_found_add_first_one_to_get_started":"找不到語言。新增第一個語言以開始使用。","no_variables_yet_add_first_one_below":"尚無變數。在下方新增第一個變數。","number":"數字","once_set_the_default_language_for_this_survey_can_only_be_changed_by_disabling_the_multi_language_option_and_deleting_all_translations":"設定後，此問卷的預設語言只能藉由停用多語言選項並刪除所有翻譯來變更。","only_display_the_survey_to_a_subset_of_the_users":"僅向部分使用者顯示問卷","only_lower_case_letters_numbers_and_underscores_are_allowed":"僅允許小寫字母、數字和底線。","only_people_who_match_your_targeting_can_be_surveyed":"只有符合您目標設定的人員才能被調查。","option_idx":"選項 \'{\'choiceIndex\'}\'","option_used_in_logic_error":"此選項用於問題 \'{\'questionIndex\'}\' 的邏輯中。請先從邏輯中移除。","optional":"選填","options":"選項","override_theme_with_individual_styles_for_this_survey":"使用此問卷的個別樣式覆寫主題。","overwrite_placement":"覆寫位置","overwrite_the_global_placement_of_the_survey":"覆寫問卷的整體位置","overwrites_waiting_period_between_surveys_to_x_days":"將問卷之間的等待時間覆寫為 \'{\'days\'}\' 天。","pick_a_background_from_our_library_or_upload_your_own":"從我們的媒體庫中選取背景或上傳您自己的背景。","picture_idx":"圖片 \'{\'idx\'}\'","pin_can_only_contain_numbers":"PIN 碼只能包含數字。","pin_must_be_a_four_digit_number":"PIN 碼必須是四位數的數字。","please_enter_a_file_extension":"請輸入檔案副檔名。","please_set_a_survey_trigger":"請設定問卷觸發器","please_specify":"請指定","prevent_double_submission":"防止重複提交","prevent_double_submission_description":"每個電子郵件地址僅允許 1 個回應","protect_survey_with_pin":"使用 PIN 碼保護問卷","protect_survey_with_pin_description":"只有擁有 PIN 碼的使用者才能存取問卷。","publish":"發布","question":"問題","question_color":"問題顏色","question_deleted":"問題已刪除。","question_duplicated":"問題已複製。","question_id_updated":"問題 ID 已更新","question_used_in_logic":"此問題用於問題 \'{\'questionIndex\'}\' 的邏輯中。","randomize_all":"全部隨機排序","randomize_all_except_last":"全部隨機排序（最後一項除外）","range":"範圍","recontact_options":"重新聯絡選項","redirect_thank_you_card":"重新導向感謝卡片","redirect_to_url":"重新導向至網址","redirect_to_url_not_available_on_free_plan":"重新導向至網址在免費方案中不可用","release_survey_on_date":"在指定日期發佈問卷","remove_description":"移除描述","remove_translations":"移除翻譯","require_answer":"要求回答","required":"必填","reset_to_theme_styles":"重設為主題樣式","reset_to_theme_styles_main_text":"您確定要將樣式重設為主題樣式嗎？這將移除所有自訂樣式。","response_limit_can_t_be_set_to_0":"回應限制不能設定為 0","response_limit_needs_to_exceed_number_of_received_responses":"回應限制必須超過收到的回應數 (\'{\'responseCount\'}\')。","response_limits_redirections_and_more":"回應限制、重新導向等。","response_options":"回應選項","roundness":"圓角","rows":"列","save_and_close":"儲存並關閉","scale":"比例","search_for_images":"搜尋圖片","seconds_after_trigger_the_survey_will_be_closed_if_no_response":"如果沒有回應，則在觸發後幾秒關閉問卷","seconds_before_showing_the_survey":"秒後顯示問卷。","select_or_type_value":"選取或輸入值","select_ordering":"選取排序","select_saved_action":"選取已儲存的操作","select_type":"選取類型","send_survey_to_audience_who_match":"將問卷發送給符合以下條件的受眾：","send_your_respondents_to_a_page_of_your_choice":"將您的回應者傳送到您選擇的頁面。","set_the_global_placement_in_the_look_feel_settings":"在「外觀與風格」設定中設定整體位置。","seven_points":"7 分","show_advanced_settings":"顯示進階設定","show_button":"顯示按鈕","show_language_switch":"顯示語言切換","show_multiple_times":"多次顯示","show_only_once":"僅顯示一次","show_survey_maximum_of":"最多顯示問卷","show_survey_to_users":"將問卷顯示給 % 的使用者","show_to_x_percentage_of_targeted_users":"顯示給 \'{\'percentage\'}\'% 的目標使用者","simple":"簡單","single_use_survey_links":"單次使用問卷連結","single_use_survey_links_description":"每個問卷連結只允許 1 個回應。","skip_button_label":"「跳過」按鈕標籤","smiley":"表情符號","star":"星形","starts_with":"開頭為","state":"州/省","straight":"直線","style_the_question_texts_descriptions_and_input_fields":"設定問題文字、描述和輸入欄位的樣式。","style_the_survey_card":"設定問卷卡片的樣式。","styling_set_to_theme_styles":"樣式設定為主題樣式","subheading":"副標題","subtract":"減 -","suggest_colors":"建議顏色","survey_already_answered_heading":"問卷已回答。","survey_already_answered_subheading":"您只能使用此連結一次。","survey_completed_heading":"問卷已完成","survey_completed_subheading":"此免費且開源的問卷已關閉","survey_display_settings":"問卷顯示設定","survey_placement":"問卷位置","survey_trigger":"問卷觸發器","switch_multi_lanugage_on_to_get_started":"開啟多語言以開始使用 👉","targeted":"目標","ten_points":"10 分","the_survey_will_be_shown_multiple_times_until_they_respond":"將多次顯示問卷，直到他們回應","the_survey_will_be_shown_once_even_if_person_doesnt_respond":"即使使用者沒有回應，也只會顯示一次問卷。","then":"然後","this_action_will_remove_all_the_translations_from_this_survey":"此操作將從此問卷中移除所有翻譯。","this_extension_is_already_added":"已新增此擴充功能。","this_file_type_is_not_supported":"不支援此檔案類型。","this_setting_overwrites_your":"此設定會覆寫您的","three_points":"3 分","times":"次","to_keep_the_placement_over_all_surveys_consistent_you_can":"若要保持所有問卷的位置一致，您可以","trigger_survey_when_one_of_the_actions_is_fired":"當觸發其中一個操作時，觸發問卷...","try_lollipop_or_mountain":"嘗試「棒棒糖」或「山峰」...","type_field_id":"輸入欄位 ID","unlock_targeting_description":"根據屬性或裝置資訊鎖定特定使用者群組","unlock_targeting_title":"使用更高等級的方案解鎖目標設定","unsaved_changes_warning":"您的問卷中有未儲存的變更。您要先儲存它們再離開嗎？","until_they_submit_a_response":"直到他們提交回應","upgrade_notice_description":"建立多語言問卷並解鎖更多功能","upgrade_notice_title":"使用更高等級的方案解鎖多語言問卷","upload":"上傳","upload_at_least_2_images":"上傳至少 2 張圖片","upper_label":"上標籤","url_encryption":"網址加密","url_filters":"網址篩選器","url_not_supported":"不支援網址","use_with_caution":"謹慎使用","variable_is_used_in_logic_of_question_please_remove_it_from_logic_first":"\'{\'variable\'}\' 用於問題 \'{\'questionIndex\'}\' 的邏輯中。請先從邏輯中移除。","variable_name_is_already_taken_please_choose_another":"已使用此變數名稱，請選擇另一個名稱。","variable_name_must_start_with_a_letter":"變數名稱必須以字母開頭。","verify_email_before_submission":"提交前驗證電子郵件","verify_email_before_submission_description":"僅允許擁有真實電子郵件的人員回應。","wait":"等待","wait_a_few_seconds_after_the_trigger_before_showing_the_survey":"在觸發後等待幾秒鐘再顯示問卷","waiting_period":"等待時間","welcome_message":"歡迎訊息","when":"何時","when_conditions_match_waiting_time_will_be_ignored_and_survey_shown":"當條件符合時，等待時間將被忽略且顯示問卷。","without_a_filter_all_of_your_users_can_be_surveyed":"如果沒有篩選器，則可以調查您的所有使用者。","you_have_not_created_a_segment_yet":"您尚未建立區隔","you_need_to_have_two_or_more_languages_set_up_in_your_project_to_work_with_translations":"您需要在您的專案中設定兩個或更多語言，才能使用翻譯。","your_description_here_recall_information_with":"您的描述在這裡。使用 @ 回憶資訊","your_question_here_recall_information_with":"您的問題在這裡。使用 @ 回憶資訊","your_web_app":"您的 Web 應用程式","zip":"郵遞區號"},"error_deleting_survey":"刪除問卷時發生錯誤","failed_to_copy_link_to_results":"無法複製結果連結","failed_to_copy_url":"無法複製網址：不在瀏覽器環境中。","new_single_use_link_generated":"已產生新的單次使用連結","new_survey":"新增問卷","no_surveys_created_yet":"尚未建立任何問卷","open_options":"開啟選項","preview_survey_in_a_new_tab":"在新分頁中預覽問卷","read_only_user_not_allowed_to_create_survey_warning":"身為唯讀使用者，您不得建立問卷。請要求具有寫入權限的使用者建立問卷或管理員升級您的角色。","relevance":"相關性","responses":{"address_line_1":"地址 1","address_line_2":"地址 2","an_error_occurred_creating_a_new_note":"建立新筆記時發生錯誤","an_error_occurred_deleting_the_tag":"刪除標籤時發生錯誤","an_error_occurred_resolving_a_note":"解決筆記時發生錯誤","an_error_occurred_updating_a_note":"更新筆記時發生錯誤","browser":"瀏覽器","city":"城市","company":"公司","completed":"已完成 ✅","country":"國家/地區","device":"裝置","device_info":"裝置資訊","email":"電子郵件","first_name":"名字","how_to_identify_users":"如何識別使用者","last_name":"姓氏","not_completed":"未完成 ⏳","os":"作業系統","person_attributes":"人員屬性","phone":"電話","resolve":"解決","respondent_skipped_questions":"回應者跳過這些問題。","response_deleted_successfully":"回應已成功刪除。","single_use_id":"單次使用 ID","source":"來源","state_region":"州/地區","survey_closed":"問卷已關閉","tag_already_exists":"標籤已存在","this_response_is_in_progress":"此回應正在進行中。","zip_post_code":"郵遞區號"},"results_unpublished_successfully":"結果已成功取消發布。","search_by_survey_name":"依問卷名稱搜尋","summary":{"added_filter_for_responses_where_answer_to_question":"已新增回應的篩選器，其中問題 \'{\'questionIdx\'}\' 的答案為 \'{\'filterComboBoxValue\'}\' - \'{\'filterValue\'}\'","added_filter_for_responses_where_answer_to_question_is_skipped":"已新增回應的篩選器，其中問題 \'{\'questionIdx\'}\' 的答案被跳過","all_responses_csv":"所有回應 (CSV)","all_responses_excel":"所有回應 (Excel)","all_time":"全部時間","almost_there":"快完成了！安裝小工具以開始接收回應。","average":"平均","completed":"已完成","completed_tooltip":"問卷已完成的次數。","configure_alerts":"設定警示","congrats":"恭喜！您的問卷已上線。","connect_your_website_or_app_with_formbricks_to_get_started":"將您的網站或應用程式與 Formbricks 連線以開始使用。","copy_link_to_public_results":"複製公開結果的連結","create_single_use_links":"建立單次使用連結","create_single_use_links_description":"每個連結只接受一次提交。以下是如何操作。","current_selection_csv":"目前選取 (CSV)","current_selection_excel":"目前選取 (Excel)","custom_range":"自訂範圍...","data_prefilling":"資料預先填寫","data_prefilling_description":"您想要預先填寫問卷中的某些欄位嗎？以下是如何操作。","define_when_and_where_the_survey_should_pop_up":"定義問卷應該在哪裡和何時彈出","drop_offs":"放棄","drop_offs_tooltip":"問卷已開始但未完成的次數。","dynamic_popup":"動態（彈窗）","email_sent":"已發送電子郵件！","embed_code_copied_to_clipboard":"嵌入程式碼已複製到剪貼簿！","embed_in_an_email":"嵌入電子郵件中","embed_in_app":"嵌入應用程式","embed_mode":"嵌入模式","embed_mode_description":"以簡約設計嵌入您的問卷，捨棄邊距和背景。","embed_on_website":"嵌入網站","embed_pop_up_survey_title":"如何在您的網站上嵌入彈出式問卷","embed_survey":"嵌入問卷","enable_ai_insights_banner_button":"啟用洞察","enable_ai_insights_banner_description":"您可以為問卷啟用新的洞察功能，以取得針對您開放文字回應的 AI 洞察。","enable_ai_insights_banner_success":"正在為此問卷產生洞察。請稍後再查看。","enable_ai_insights_banner_title":"準備好測試 AI 洞察了嗎？","enable_ai_insights_banner_tooltip":"請透過 hola@formbricks.com 與我們聯絡，以產生此問卷的洞察","failed_to_copy_link":"無法複製連結","filter_added_successfully":"篩選器已成功新增","filter_updated_successfully":"篩選器已成功更新","formbricks_email_survey_preview":"Formbricks 電子郵件問卷預覽","go_to_setup_checklist":"前往設定檢查清單 👉","hide_embed_code":"隱藏嵌入程式碼","how_to_create_a_panel":"如何建立小組","how_to_create_a_panel_step_1":"步驟 1：使用 Prolific 建立帳戶","how_to_create_a_panel_step_1_description":"使用 Prolific 建立帳戶並驗證您的電子郵件地址。","how_to_create_a_panel_step_2":"步驟 2：建立研究","how_to_create_a_panel_step_2_description":"在 Prolific 中，您建立一個新的研究，您可以在其中根據數百個特徵選擇您偏好的受眾。","how_to_create_a_panel_step_3":"步驟 3：連線您的問卷","how_to_create_a_panel_step_3_description":"在您的 Formbricks 問卷中設定隱藏欄位，以追蹤哪個參與者提供了哪個答案。","how_to_create_a_panel_step_4":"步驟 4：啟動您的研究","how_to_create_a_panel_step_4_description":"設定完成後，您可以啟動您的研究。在幾個小時內，您就會收到第一個回應。","how_to_embed_a_survey_on_your_react_native_app":"如何在您的 React Native 應用程式中嵌入問卷","how_to_embed_a_survey_on_your_web_app":"如何在您的 Web 應用程式中嵌入問卷","identify_users":"識別使用者","identify_users_and_set_attributes":"識別使用者並設定屬性","identify_users_description":"您有電子郵件地址或使用者 ID 嗎？將其附加到網址。","impressions":"曝光數","impressions_tooltip":"問卷已檢視的次數。","includes_all":"包含全部","includes_either":"包含其中一個","insights_disabled":"洞察已停用","install_widget":"安裝 Formbricks 小工具","is_equal_to":"等於","is_less_than":"小於","last_30_days":"過去 30 天","last_6_months":"過去 6 個月","last_7_days":"過去 7 天","last_month":"上個月","last_quarter":"上一季","last_year":"去年","learn_how_to":"瞭解如何","link_to_public_results_copied":"已複製公開結果的連結","make_sure_the_survey_type_is_set_to":"請確保問卷類型設定為","mobile_app":"行動應用程式","no_response_matches_filter":"沒有任何回應符合您的篩選器","only_completed":"僅已完成","other_values_found":"找到其他值","overall":"整體","publish_to_web":"發布至網站","publish_to_web_warning":"您即將將這些問卷結果發布到公共領域。","publish_to_web_warning_description":"您的問卷結果將會是公開的。任何組織外的人員都可以存取這些結果（如果他們有連結）。","results_are_public":"結果是公開的","send_preview":"發送預覽","send_to_panel":"發送到小組","setup_instructions":"設定說明","setup_instructions_for_react_native_apps":"React Native 應用程式的設定說明","setup_integrations":"設定整合","share_results":"分享結果","share_the_link":"分享連結","share_the_link_to_get_responses":"分享連結以取得回應","show_all_responses_that_match":"顯示所有相符的回應","show_all_responses_where":"顯示所有回應，其中...","single_use_links":"單次使用連結","source_tracking":"來源追蹤","source_tracking_description":"執行符合 GDPR 和 CCPA 的來源追蹤，無需額外工具。","starts":"開始次數","starts_tooltip":"問卷已開始的次數。","static_iframe":"靜態 (iframe)","survey_results_are_public":"您的問卷結果是公開的！","survey_results_are_shared_with_anyone_who_has_the_link":"您的問卷結果與任何擁有連結的人員分享。這些結果將不會被搜尋引擎編入索引。","this_month":"本月","this_quarter":"本季","this_year":"今年","time_to_complete":"完成時間","to_connect_your_app_with_formbricks":"以將您的應用程式與 Formbricks 連線","to_connect_your_web_app_with_formbricks":"以將您的 Web 應用程式與 Formbricks 連線","to_connect_your_website_with_formbricks":"以將您的網站與 Formbricks 連線","to_run_highly_targeted_surveys":"以執行高度目標化的問卷。","ttc_tooltip":"完成問卷的平均時間。","unknown_question_type":"未知的問題類型","unpublish_from_web":"從網站取消發布","unsupported_video_tag_warning":"您的瀏覽器不支援 video 標籤。","view_embed_code":"檢視嵌入程式碼","view_embed_code_for_email":"檢視電子郵件的嵌入程式碼","view_site":"檢視網站","waiting_for_response":"正在等待回應 🧘‍♂️","web_app":"Web 應用程式","were_working_on_sdks_for_flutter_swift_and_kotlin":"我們正在開發適用於 Flutter、Swift 和 Kotlin 的 SDK。","what_is_a_panel":"什麼是小組？","what_is_a_panel_answer":"小組是一組根據年齡、職業、性別等特徵選取的參與者。","what_is_prolific":"什麼是 Prolific？","what_is_prolific_answer":"我們正在與 Prolific 合作，為您提供超過 200,000 名經過審核的參與者。","whats_next":"下一步是什麼？","when_do_i_need_it":"我何時需要它？","when_do_i_need_it_answer":"如果您無法存取足夠的符合您目標受眾的人員，則可以付費存取小組。","you_can_do_a_lot_more_with_links_surveys":"使用連結問卷，您可以做更多事情 💡","your_survey_is_public":"您的問卷是公開的","youre_not_plugged_in_yet":"您尚未插入任何內容！"},"survey_deleted_successfully":"問卷已成功刪除！","survey_duplicated_successfully":"問卷已成功複製。","survey_duplication_error":"無法複製問卷。","survey_status_tooltip":"若要更新問卷狀態，請更新問卷回應選項中的排程和關閉設定。","templates":{"all_channels":"所有管道","all_industries":"所有產業","all_roles":"所有角色","create_a_new_survey":"建立新的問卷","multiple_industries":"多個產業","use_this_template":"使用此範本","uses_branching_logic":"此問卷使用分支邏輯。"},"this_is_a_new_key":"這是一個更新的 key"},"xm-templates":{"ces":"CES","ces_description":"利用每個接觸點來瞭解客戶互動的便利性。","csat":"CSAT","csat_description":"實施最佳實務以衡量客戶滿意度。","enps":"eNPS","enps_description":"通用回饋，瞭解員工投入程度和滿意度。","five_star_rating":"5 星評分","five_star_rating_description":"用於衡量整體滿意度的通用回饋解決方案。","headline":"您想要取得哪種回饋？","nps":"NPS","nps_description":"實施經過驗證的最佳實務，以瞭解人們為何購買。","smileys":"表情符號","smileys_description":"使用視覺指標來擷取客戶接觸點的回饋。"}},"health":{"degraded":"您的 Formbricks 運作狀況已降低","healthy":"所有系統都已啟動並執行"},"organizations":{"landing":{"no_projects_warning_subtitle":"請聯絡您的組織擁有者以取得專案存取權限。或建立自己的組織以開始使用。","no_projects_warning_title":"您的帳戶目前無法存取任何專案。"},"projects":{"new":{"channel":{"channel_select_subtitle":"分享連結或在應用程式或網站中顯示您的問卷。","channel_select_title":"您需要哪種問卷？","in_product_surveys":"產品內問卷","in_product_surveys_description":"嵌入應用程式或網站中。","link_and_email_surveys":"連結和電子郵件問卷","link_and_email_surveys_description":"隨時隨地線上觸及人員。"},"mode":{"formbricks_cx":"Formbricks CX","formbricks_cx_description":"用於瞭解您的客戶需求的問卷和報告。","formbricks_surveys":"Formbricks 問卷","formbricks_surveys_description":"適用於網站、應用程式和電子郵件問卷的多用途問卷平台。","what_are_you_here_for":"您來這裡是為了什麼？"},"settings":{"brand_color":"品牌顏色","brand_color_description":"讓問卷的主要顏色與您的品牌一致。","create_new_team":"建立新團隊","project_creation_failed":"專案建立失敗","project_name":"產品名稱","project_name_description":"您的產品名稱為何？","project_settings_subtitle":"當人們認出您的品牌時，他們會更願意開始並完成回應。","project_settings_title":"讓回應者知道是您","team_description":"哪些人可以存取此專案？"}}}},"s":{"check_inbox_or_spam":"如果您的收件匣中沒有看到電子郵件，也請檢查您的垃圾郵件資料夾。","completed":"此免費且開源的問卷已關閉。","could_not_create_display":"無法建立顯示","create_your_own":"建立您自己的","enter_pin":"此問卷已受保護。請輸入下方 PIN 碼","just_curious":"只是好奇？","link_invalid":"此問卷只能透過邀請填寫。","paused":"此免費且開源的問卷已暫時暫停。","please_try_again_with_the_original_link":"請使用原始連結再試一次","preview_survey_questions":"預覽問卷問題。","question_preview":"問題預覽","response_already_received":"我們已收到此電子郵件地址的回應。","survey_already_answered_heading":"問卷已回答。","survey_already_answered_subheading":"您只能使用此連結一次。","survey_sent_to":"問卷已發送至 \'{\'email\'}\'","this_looks_fishy":"這看起來可疑。","verify_email":"驗證電子郵件。","verify_email_before_submission":"驗證您的電子郵件以回應","verify_email_before_submission_button":"驗證","verify_email_before_submission_description":"若要回應此問卷，請驗證您的電子郵件","want_to_respond":"想要回應嗎？"},"setup":{"intro":{"get_started":"開始使用","made_with_love_in_kiel":"用 🤍 在德國製造","paragraph_1":"Formbricks 是一套體驗管理套件，建立於全球<b>成長最快的開源問卷平台</b>之上。","paragraph_2":"在網站、應用程式或線上任何地方執行目標問卷。收集寶貴的洞察，為客戶、使用者和員工<b>打造無法抗拒的體驗</b>。","paragraph_3":"我們致力於最高程度的資料隱私權。自行託管以<b>完全掌控您的資料</b>。","welcome_to_formbricks":"歡迎使用 Formbricks！"},"invite":{"add_another_member":"新增另一位成員","continue":"繼續","failed_to_invite":"無法邀請","invitation_sent_to":"已發送邀請至","invite_your_organization_members":"邀請您的組織成員","life_s_no_fun_alone":"孤單一人生活不好玩。","skip":"跳過","smtp_not_configured":"SMTP 未設定","smtp_not_configured_description":"由於未設定電子郵件服務，因此目前無法發送邀請。您可以在稍後在組織設定中複製邀請連結。"},"organization":{"create":{"continue":"繼續","delete_account":"刪除帳戶","delete_account_description":"如果您要刪除帳戶，可以點擊下方按鈕執行此操作。","description":"讓它成為您的。","no_membership_found":"找不到成員資格！","no_membership_found_description":"您目前不是任何組織的成員。如果您認為這是錯誤，請聯絡組織擁有者。","title":"設定您的組織"}},"signup":{"create_administrator":"建立管理員","this_user_has_all_the_power":"此使用者擁有所有權限。"}},"share":{"back_to_home":"返回首頁","page_not_found":"找不到頁面","page_not_found_description":"抱歉，我們找不到您要尋找的回應分享 ID。"},"templates":{"address":"地址","address_description":"要求郵寄地址","alignment_and_engagement_survey_description":"衡量員工與公司願景、策略和溝通的一致性，以及團隊協作。","alignment_and_engagement_survey_name":"與公司願景的一致性和投入程度","alignment_and_engagement_survey_question_1_headline":"我瞭解我的角色如何貢獻於公司的整體策略。","alignment_and_engagement_survey_question_1_lower_label":"不瞭解","alignment_and_engagement_survey_question_1_upper_label":"完全瞭解","alignment_and_engagement_survey_question_2_headline":"我覺得我的價值觀與公司的使命和文化一致。","alignment_and_engagement_survey_question_2_lower_label":"不一致","alignment_and_engagement_survey_question_2_upper_label":"完全一致","alignment_and_engagement_survey_question_3_headline":"我與我的團隊有效協作以實現我們的目標。","alignment_and_engagement_survey_question_3_lower_label":"協作不佳","alignment_and_engagement_survey_question_3_upper_label":"良好的協作","alignment_and_engagement_survey_question_4_headline":"公司如何改善其願景和策略一致性？","alignment_and_engagement_survey_question_4_placeholder":"在此輸入您的答案...","back":"返回","book_interview":"預訂面試","build_product_roadmap_description":"找出您的使用者最想要的一件事，然後建立它。","build_product_roadmap_name":"建立產品路線圖","build_product_roadmap_name_with_project_name":"{projectName} 路線圖輸入","build_product_roadmap_question_1_headline":"您對 {projectName} 的功能和特性感到滿意嗎？","build_product_roadmap_question_1_lower_label":"完全不滿意","build_product_roadmap_question_1_upper_label":"非常滿意","build_product_roadmap_question_2_headline":"我們應該做出哪一項變更才能最改善您的 {projectName} 體驗？","build_product_roadmap_question_2_placeholder":"在此輸入您的答案...","card_abandonment_survey":"購物車放棄問卷","card_abandonment_survey_description":"瞭解您網路商店中購物車放棄的原因。","card_abandonment_survey_question_1_button_label":"當然！","card_abandonment_survey_question_1_dismiss_button_label":"不用了，謝謝。","card_abandonment_survey_question_1_headline":"您有 2 分鐘的時間來協助我們改進嗎？","card_abandonment_survey_question_1_html":"<p class=\\"fb-editor-paragraph\\" dir=\\"ltr\\"><span>我們注意到您在購物車中留下了一些商品。我們很想瞭解原因。</span></p>","card_abandonment_survey_question_2_choice_1":"運費高昂","card_abandonment_survey_question_2_choice_2":"在其他地方找到更優惠的價格","card_abandonment_survey_question_2_choice_3":"只是瀏覽","card_abandonment_survey_question_2_choice_4":"決定不購買","card_abandonment_survey_question_2_choice_5":"付款問題","card_abandonment_survey_question_2_choice_6":"其他","card_abandonment_survey_question_2_headline":"您未完成購買的主要原因是什麼？","card_abandonment_survey_question_2_subheader":"請選取以下其中一個選項：","card_abandonment_survey_question_3_headline":"請詳細說明您未完成購買的原因：","card_abandonment_survey_question_4_headline":"您對整體購物體驗的評分如何？","card_abandonment_survey_question_4_lower_label":"非常不滿意","card_abandonment_survey_question_4_upper_label":"非常滿意","card_abandonment_survey_question_5_choice_1":"降低運費","card_abandonment_survey_question_5_choice_2":"折扣或促銷","card_abandonment_survey_question_5_choice_3":"更多付款選項","card_abandonment_survey_question_5_choice_4":"更佳的產品描述","card_abandonment_survey_question_5_choice_5":"改進的網站導覽","card_abandonment_survey_question_5_choice_6":"其他","card_abandonment_survey_question_5_headline":"哪些因素會鼓勵您將來完成購買？","card_abandonment_survey_question_5_subheader":"請選取所有適用的選項：","card_abandonment_survey_question_6_headline":"您是否要透過電子郵件收到折扣碼？","card_abandonment_survey_question_6_label":"是的，請聯絡我。","card_abandonment_survey_question_7_headline":"請分享您的電子郵件地址：","card_abandonment_survey_question_8_headline":"任何其他意見或建議？","career_development_survey_description":"評估員工對職業發展和發展機會的滿意度。","career_development_survey_name":"職涯發展問卷","career_development_survey_question_1_headline":"我對 {projectName} 的個人和專業成長機會感到滿意。","career_development_survey_question_1_lower_label":"非常不同意","career_development_survey_question_1_upper_label":"非常同意","career_development_survey_question_2_headline":"我對我在 {projectName} 的職涯發展機會感到滿意。","career_development_survey_question_2_lower_label":"非常不同意","career_development_survey_question_2_upper_label":"非常同意","career_development_survey_question_3_headline":"我對我的組織提供的與工作相關的訓練感到滿意。","career_development_survey_question_3_lower_label":"非常不同意","career_development_survey_question_3_upper_label":"非常同意","career_development_survey_question_4_headline":"我對我的組織在訓練和教育方面的投資感到滿意。","career_development_survey_question_4_lower_label":"非常不同意","career_development_survey_question_4_upper_label":"非常同意","career_development_survey_question_5_choice_1":"產品開發","career_development_survey_question_5_choice_2":"行銷","career_development_survey_question_5_choice_3":"公共關係","career_development_survey_question_5_choice_4":"會計","career_development_survey_question_5_choice_5":"營運","career_development_survey_question_5_choice_6":"其他","career_development_survey_question_5_headline":"您在哪個職能部門工作？","career_development_survey_question_5_subheader":"請選取以下其中一個","career_development_survey_question_6_choice_1":"個人貢獻者","career_development_survey_question_6_choice_2":"經理","career_development_survey_question_6_choice_3":"資深經理","career_development_survey_question_6_choice_4":"副總裁","career_development_survey_question_6_choice_5":"主管","career_development_survey_question_6_choice_6":"其他","career_development_survey_question_6_headline":"以下哪一項最能描述您目前的工作層級？","career_development_survey_question_6_subheader":"請選取以下其中一個","cess_survey_name":"CES 問卷","cess_survey_question_1_headline":"{projectName} 讓我很輕鬆地 [新增目標]","cess_survey_question_1_lower_label":"非常不同意","cess_survey_question_1_upper_label":"非常同意","cess_survey_question_2_headline":"謝謝！我們可以如何讓您更輕鬆地 [新增目標]？","cess_survey_question_2_placeholder":"在此輸入您的答案...","changing_subscription_experience_description":"找出人們在變更訂閱時的想法。","changing_subscription_experience_name":"變更訂閱體驗","changing_subscription_experience_question_1_choice_1":"極為困難","changing_subscription_experience_question_1_choice_2":"花了一段時間，但我完成了","changing_subscription_experience_question_1_choice_3":"還可以","changing_subscription_experience_question_1_choice_4":"非常容易","changing_subscription_experience_question_1_choice_5":"非常容易，我喜歡！","changing_subscription_experience_question_1_headline":"變更您的方案有多容易？","changing_subscription_experience_question_2_choice_1":"是，非常清楚。","changing_subscription_experience_question_2_choice_2":"我一開始感到困惑，但找到了我需要的內容。","changing_subscription_experience_question_2_choice_3":"相當複雜。","changing_subscription_experience_question_2_headline":"定價資訊是否容易理解？","churn_survey":"客戶流失問卷","churn_survey_description":"找出人們取消訂閱的原因。這些洞察是純金！","churn_survey_question_1_choice_1":"難以使用","churn_survey_question_1_choice_2":"太貴了","churn_survey_question_1_choice_3":"我缺少功能","churn_survey_question_1_choice_4":"糟糕的客戶服務","churn_survey_question_1_choice_5":"我只是不再需要它了","churn_survey_question_1_headline":"您為何取消訂閱？","churn_survey_question_1_subheader":"很抱歉看到您離開。請協助我們做得更好：","churn_survey_question_2_button_label":"發送","churn_survey_question_2_headline":"是什麼讓 {projectName} 更易於使用？","churn_survey_question_3_button_label":"獲得 30% 折扣","churn_survey_question_3_dismiss_button_label":"跳過","churn_survey_question_3_headline":"在未來一年獲得 30% 的折扣！","churn_survey_question_3_html":"<p class=\\"fb-editor-paragraph\\" dir=\\"ltr\\"><span>我們很樂意讓您成為客戶。我們很樂意在未來一年提供 30% 的折扣。</span></p>","churn_survey_question_4_headline":"您缺少哪些功能？","churn_survey_question_5_button_label":"發送電子郵件給 CEO","churn_survey_question_5_dismiss_button_label":"跳過","churn_survey_question_5_headline":"很抱歉聽到 😔 直接與我們的 CEO 對話！","churn_survey_question_5_html":"<p class=\\"fb-editor-paragraph\\" dir=\\"ltr\\"><span>我們旨在提供最佳的客戶服務。請發送電子郵件給我們的 CEO，她將親自處理您的問題。</span></p>","collect_feedback_description":"收集有關您的產品或服務的全面回饋。","collect_feedback_name":"收集回饋","collect_feedback_question_1_headline":"您對整體體驗的評分如何？","collect_feedback_question_1_lower_label":"不好","collect_feedback_question_1_subheader":"別擔心，請誠實作答。","collect_feedback_question_1_upper_label":"很好","collect_feedback_question_2_headline":"太棒了！您喜歡它什麼？","collect_feedback_question_2_placeholder":"在此輸入您的答案...","collect_feedback_question_3_headline":"感謝分享！您不喜歡什麼？","collect_feedback_question_3_placeholder":"在此輸入您的答案...","collect_feedback_question_4_headline":"您對我們的溝通評分如何？","collect_feedback_question_4_lower_label":"不好","collect_feedback_question_4_upper_label":"很好","collect_feedback_question_5_headline":"您還想與我們的團隊分享什麼？","collect_feedback_question_5_placeholder":"在此輸入您的答案...","collect_feedback_question_6_choice_1":"Google","collect_feedback_question_6_choice_2":"社群媒體","collect_feedback_question_6_choice_3":"朋友","collect_feedback_question_6_choice_4":"Podcast","collect_feedback_question_6_choice_5":"其他","collect_feedback_question_6_headline":"您如何得知我們？","collect_feedback_question_7_headline":"最後，我們很樂意回覆您的回饋。請分享您的電子郵件：","collect_feedback_question_7_placeholder":"example@email.com","consent":"同意","consent_description":"要求同意條款、條件或資料使用","contact_info":"聯絡資訊","contact_info_description":"要求姓名、電子郵件、電話號碼和公司","csat_description":"衡量您的產品或服務的客戶滿意度分數。","csat_name":"客戶滿意度分數 (CSAT)","csat_question_10_headline":"您有任何其他意見、問題或疑慮嗎？","csat_question_10_placeholder":"在此輸入您的答案...","csat_question_1_headline":"您向朋友或同事推薦此 {projectName} 的可能性有多高？","csat_question_1_lower_label":"不太可能","csat_question_1_upper_label":"非常可能","csat_question_2_choice_1":"有點滿意","csat_question_2_choice_2":"非常滿意","csat_question_2_choice_3":"既不滿意也不不滿意","csat_question_2_choice_4":"有點不滿意","csat_question_2_choice_5":"非常不滿意","csat_question_2_headline":"整體而言，您對我們的 {projectName} 的滿意度如何？","csat_question_2_subheader":"請選取其中一項：","csat_question_3_choice_1":"無效","csat_question_3_choice_10":"獨特的","csat_question_3_choice_2":"有用的","csat_question_3_choice_3":"不切實際","csat_question_3_choice_4":"價格過高","csat_question_3_choice_5":"高品質","csat_question_3_choice_6":"可靠","csat_question_3_choice_7":"物有所值","csat_question_3_choice_8":"品質差","csat_question_3_choice_9":"不可靠","csat_question_3_headline":"您會使用以下哪些詞語來描述我們的 {projectName}？","csat_question_3_subheader":"選取所有適用的項目：","csat_question_4_choice_1":"非常好","csat_question_4_choice_2":"很好","csat_question_4_choice_3":"還可以","csat_question_4_choice_4":"不太好","csat_question_4_choice_5":"完全不好","csat_question_4_headline":"我們的 {projectName} 在多大程度上滿足您的需求？","csat_question_4_subheader":"選取一個選項：","csat_question_5_choice_1":"非常高品質","csat_question_5_choice_2":"高品質","csat_question_5_choice_3":"低品質","csat_question_5_choice_4":"非常低品質","csat_question_5_choice_5":"不高也不低","csat_question_5_headline":"您如何評價 {projectName} 的品質？","csat_question_5_subheader":"選取一個選項：","csat_question_6_choice_1":"極佳","csat_question_6_choice_2":"高於平均","csat_question_6_choice_3":"平均","csat_question_6_choice_4":"低於平均","csat_question_6_choice_5":"差","csat_question_6_headline":"您如何評價 {projectName} 的性價比？","csat_question_6_subheader":"請選取其中一項：","csat_question_7_choice_1":"非常快速回應","csat_question_7_choice_2":"非常快速回應","csat_question_7_choice_3":"有點快速回應","csat_question_7_choice_4":"不太快速回應","csat_question_7_choice_5":"完全不快速回應","csat_question_7_choice_6":"不適用","csat_question_7_headline":"我們對您有關我們服務的問題的回應有多迅速？","csat_question_7_subheader":"請選取其中一項：","csat_question_8_choice_1":"這是我的第一次購買","csat_question_8_choice_2":"不到六個月","csat_question_8_choice_3":"六個月到一年","csat_question_8_choice_4":"1 - 2 年","csat_question_8_choice_5":"3 年或以上","csat_question_8_choice_6":"我尚未購買","csat_question_8_headline":"您成為 {projectName} 的客戶有多久了？","csat_question_8_subheader":"請選取其中一項：","csat_question_9_choice_1":"非常有可能","csat_question_9_choice_2":"非常有可能","csat_question_9_choice_3":"有點可能","csat_question_9_choice_4":"不太可能","csat_question_9_choice_5":"完全不可能","csat_question_9_headline":"您再次購買我們的任何 {projectName} 的可能性有多高？","csat_question_9_subheader":"選取一個選項：","csat_survey_name":"{projectName} CSAT","csat_survey_question_1_headline":"您對您的 {projectName} 體驗感到滿意嗎？","csat_survey_question_1_lower_label":"極度不滿意","csat_survey_question_1_upper_label":"極度滿意","csat_survey_question_2_headline":"太棒了！我們是否有任何可以改善您體驗的地方？","csat_survey_question_2_placeholder":"在此輸入您的答案...","csat_survey_question_3_headline":"唉，抱歉！我們是否有任何可以改善您體驗的地方？","csat_survey_question_3_placeholder":"在此輸入您的答案...","cta_description":"顯示資訊並提示使用者採取特定操作","custom_survey_description":"建立沒有範本的問卷。","custom_survey_name":"從頭開始","custom_survey_question_1_headline":"您想瞭解什麼？","custom_survey_question_1_placeholder":"在此輸入您的答案...","customer_effort_score_description":"判斷使用功能有多容易。","customer_effort_score_name":"客戶費力分數 (CES)","customer_effort_score_question_1_headline":"{projectName} 讓我很輕鬆地 [新增目標]","customer_effort_score_question_1_lower_label":"非常不同意","customer_effort_score_question_1_upper_label":"非常同意","customer_effort_score_question_2_headline":"謝謝！我們可以如何讓您更輕鬆地 [新增目標]？","customer_effort_score_question_2_placeholder":"在此輸入您的答案...","date":"日期","date_description":"要求選擇日期","default_ending_card_button_label":"建立您自己的問卷","default_ending_card_headline":"謝謝！","default_ending_card_subheader":"我們感謝您的回饋。","default_welcome_card_button_label":"下一步","default_welcome_card_headline":"歡迎！","default_welcome_card_html":"感謝您提供回饋 - 開始吧！","docs_feedback_description":"衡量您的開發人員文件中的每個頁面有多清晰。","docs_feedback_name":"文件回饋","docs_feedback_question_1_choice_1":"是 👍","docs_feedback_question_1_choice_2":"否 👎","docs_feedback_question_1_headline":"這個頁面有幫助嗎？","docs_feedback_question_2_headline":"請詳細說明：","docs_feedback_question_3_headline":"頁面網址","earned_advocacy_score_description":"EAS 是 NPS 的一種變體，但要求過去的實際行為，而不是崇高的意圖。","earned_advocacy_score_name":"已獲得倡議分數 (EAS)","earned_advocacy_score_question_1_choice_1":"是","earned_advocacy_score_question_1_choice_2":"否","earned_advocacy_score_question_1_headline":"您是否曾積極向其他人推薦 {projectName}？","earned_advocacy_score_question_2_headline":"您為何推薦我們？","earned_advocacy_score_question_2_placeholder":"在此輸入您的答案...","earned_advocacy_score_question_3_headline":"真可惜。為何不推薦？","earned_advocacy_score_question_3_placeholder":"在此輸入您的答案...","earned_advocacy_score_question_4_choice_1":"是","earned_advocacy_score_question_4_choice_2":"否","earned_advocacy_score_question_4_headline":"您是否曾積極勸阻其他人選擇 {projectName}？","earned_advocacy_score_question_5_headline":"是什麼讓您勸阻他們？","earned_advocacy_score_question_5_placeholder":"在此輸入您的答案...","employee_satisfaction_description":"衡量員工滿意度並找出需要改進的地方。","employee_satisfaction_name":"員工滿意度","employee_satisfaction_question_1_headline":"您對目前的角色感到滿意嗎？","employee_satisfaction_question_1_lower_label":"不滿意","employee_satisfaction_question_1_upper_label":"非常滿意","employee_satisfaction_question_2_choice_1":"極具意義","employee_satisfaction_question_2_choice_2":"非常重要","employee_satisfaction_question_2_choice_3":"中等程度有意義","employee_satisfaction_question_2_choice_4":"稍微有意義","employee_satisfaction_question_2_choice_5":"完全沒有意義","employee_satisfaction_question_2_headline":"您覺得您的工作有多大意義？","employee_satisfaction_question_3_headline":"您最喜歡在這裡工作的原因是什麼？","employee_satisfaction_question_3_placeholder":"在此輸入您的答案...","employee_satisfaction_question_5_headline":"對您從經理收到的支援進行評分。","employee_satisfaction_question_5_lower_label":"不佳","employee_satisfaction_question_5_upper_label":"極佳","employee_satisfaction_question_6_headline":"您對我們的工作場所會建議哪些改進？","employee_satisfaction_question_6_placeholder":"在此輸入您的答案...","employee_satisfaction_question_7_choice_1":"非常有可能","employee_satisfaction_question_7_choice_2":"非常有可能","employee_satisfaction_question_7_choice_3":"中等程度可能","employee_satisfaction_question_7_choice_4":"稍微有可能","employee_satisfaction_question_7_choice_5":"完全不可能","employee_satisfaction_question_7_headline":"您推薦我們的公司給朋友的可能性有多高？","employee_well_being_description":"透過工作與生活平衡、工作量和環境評估您的員工福祉。","employee_well_being_name":"員工福祉","employee_well_being_question_1_headline":"我覺得我的工作與個人生活之間取得了良好的平衡。","employee_well_being_question_1_lower_label":"非常不平衡","employee_well_being_question_1_upper_label":"極佳的平衡","employee_well_being_question_2_headline":"我的工作量是可管理的，讓我能夠保持生產力而不會感到壓力過大。","employee_well_being_question_2_lower_label":"工作量過大","employee_well_being_question_2_upper_label":"完全可管理","employee_well_being_question_3_headline":"工作環境支援我的身心健康。","employee_well_being_question_3_lower_label":"不支援","employee_well_being_question_3_upper_label":"高度支援","employee_well_being_question_4_headline":"在工作場所的整體福祉方面，如果有任何改進，那會是什麼？","employee_well_being_question_4_placeholder":"在此輸入您的答案...","enps_survey_name":"eNPS 問卷","enps_survey_question_1_headline":"您向朋友或同事推薦在此公司工作的可能性有多高？","enps_survey_question_1_lower_label":"完全不可能","enps_survey_question_1_upper_label":"非常有可能","enps_survey_question_2_headline":"若要協助我們改進，您能否描述您給予此評分的原因？","enps_survey_question_3_headline":"任何其他意見、回饋或疑慮？","evaluate_a_product_idea_description":"調查使用者對產品或功能想法的意見。快速取得回饋。","evaluate_a_product_idea_name":"評估產品想法","evaluate_a_product_idea_question_1_button_label":"開始吧！","evaluate_a_product_idea_question_1_dismiss_button_label":"跳過","evaluate_a_product_idea_question_1_headline":"我們喜歡您使用 {projectName} 的方式！我們很樂意請教您一個功能想法。您有時間嗎？","evaluate_a_product_idea_question_1_html":"<p class=\\"fb-editor-paragraph\\" dir=\\"ltr\\"><span>我們尊重您的時間，並盡量簡短 🤸</span></p>","evaluate_a_product_idea_question_2_headline":"謝謝！您今天達成 [問題區域] 的難易程度如何？","evaluate_a_product_idea_question_2_lower_label":"非常困難","evaluate_a_product_idea_question_2_upper_label":"非常容易","evaluate_a_product_idea_question_3_headline":"當您處理 [問題區域] 時，最困難的事情是什麼？","evaluate_a_product_idea_question_3_placeholder":"在此輸入您的答案...","evaluate_a_product_idea_question_4_button_label":"下一步","evaluate_a_product_idea_question_4_dismiss_button_label":"跳過","evaluate_a_product_idea_question_4_headline":"我們正在努力解決協助處理 [問題區域] 的想法。","evaluate_a_product_idea_question_4_html":"<p class=\\"fb-editor-paragraph\\" dir=\\"ltr\\"><span>在此處插入概念簡介。新增必要的詳細資料，但保持簡潔易懂。</span></p>","evaluate_a_product_idea_question_5_headline":"此功能對您有多大的價值？","evaluate_a_product_idea_question_5_lower_label":"沒有價值","evaluate_a_product_idea_question_5_upper_label":"非常有價值","evaluate_a_product_idea_question_6_headline":"瞭解了。為何此功能對您沒有價值？","evaluate_a_product_idea_question_6_placeholder":"在此輸入您的答案...","evaluate_a_product_idea_question_7_headline":"在此功能中，對您而言最有價值的是什麼？","evaluate_a_product_idea_question_7_placeholder":"在此輸入您的答案...","evaluate_a_product_idea_question_8_headline":"我們還應該注意什麼？","evaluate_a_product_idea_question_8_placeholder":"在此輸入您的答案...","evaluate_content_quality_description":"衡量您的內容行銷文章是否恰到好處。","evaluate_content_quality_name":"評估內容品質","evaluate_content_quality_question_1_headline":"這篇文章在多大程度上解決了您希望學習的內容？","evaluate_content_quality_question_1_lower_label":"完全不好","evaluate_content_quality_question_1_upper_label":"非常好","evaluate_content_quality_question_2_headline":"哼！您希望看到什麼？","evaluate_content_quality_question_2_placeholder":"在此輸入您的答案...","evaluate_content_quality_question_3_headline":"太棒了！您希望我們涵蓋其他任何內容嗎？","evaluate_content_quality_question_3_placeholder":"主題、趨勢、教學課程...","fake_door_follow_up_description":"追蹤遇到您其中一個假門實驗的使用者。","fake_door_follow_up_name":"假門後續追蹤","fake_door_follow_up_question_1_headline":"此功能對您有多重要？","fake_door_follow_up_question_1_lower_label":"不重要","fake_door_follow_up_question_1_upper_label":"非常重要","fake_door_follow_up_question_2_choice_1":"方面 1","fake_door_follow_up_question_2_choice_2":"方面 2","fake_door_follow_up_question_2_choice_3":"方面 3","fake_door_follow_up_question_2_choice_4":"方面 4","fake_door_follow_up_question_2_headline":"在建構此功能時，絕對應該包含什麼？","feature_chaser_description":"追蹤剛使用特定功能的使用者。","feature_chaser_name":"功能追蹤","feature_chaser_question_1_headline":"[新增功能] 對您有多重要？","feature_chaser_question_1_lower_label":"不重要","feature_chaser_question_1_upper_label":"非常重要","feature_chaser_question_2_choice_1":"方面 1","feature_chaser_question_2_choice_2":"方面 2","feature_chaser_question_2_choice_3":"方面 3","feature_chaser_question_2_choice_4":"方面 4","feature_chaser_question_2_headline":"哪個方面最重要？","feedback_box_description":"讓您的使用者有機會順暢地分享他們的想法。","feedback_box_name":"意見反應方塊","feedback_box_question_1_choice_1":"錯誤報告 🐞","feedback_box_question_1_choice_2":"功能要求 💡","feedback_box_question_1_headline":"您有什麼想法，老闆？","feedback_box_question_1_subheader":"感謝分享。我們會盡快回覆您。","feedback_box_question_2_headline":"哪裡壞了？","feedback_box_question_2_subheader":"越詳細越好 :)","feedback_box_question_3_button_label":"是，通知我","feedback_box_question_3_dismiss_button_label":"不用了，謝謝","feedback_box_question_3_headline":"要隨時掌握最新資訊嗎？","feedback_box_question_3_html":"<p class=\\"fb-editor-paragraph\\" dir=\\"ltr\\"><span>我們將盡快修復此問題。您想要在我們完成修復時收到通知嗎？</span></p>","feedback_box_question_4_button_label":"要求功能","feedback_box_question_4_headline":"太棒了，請告訴我們更多資訊！","feedback_box_question_4_placeholder":"在此輸入您的答案...","feedback_box_question_4_subheader":"您希望我們解決什麼問題？","file_upload":"檔案上傳","file_upload_description":"讓回應者上傳文件、圖片或其他檔案","finish":"完成","follow_ups_modal_action_body":"<p class=\\"fb-editor-paragraph\\" dir=\\"ltr\\"><span style=\\"white-space: pre-wrap;\\">嗨 👋</span><br><br><span style=\\"white-space: pre-wrap;\\">感謝您撥冗回應，我們將很快與您聯繫。</span><br><br><span style=\\"white-space: pre-wrap;\\">祝您有美好的一天！</span></p>","free_text":"開放式回答","free_text_description":"收集開放式回饋","free_text_placeholder":"在此輸入您的答案...","gauge_feature_satisfaction_description":"評估您的產品特定功能的滿意度。","gauge_feature_satisfaction_name":"衡量功能滿意度","gauge_feature_satisfaction_question_1_headline":"達成...有多容易？","gauge_feature_satisfaction_question_1_lower_label":"不容易","gauge_feature_satisfaction_question_1_upper_label":"非常容易","gauge_feature_satisfaction_question_2_headline":"我們可以做哪一件事來改進？","identify_customer_goals_description":"更瞭解您的訊息傳遞是否符合您的產品所提供價值的正確期望。","identify_customer_goals_name":"識別客戶目標","identify_sign_up_barriers_description":"提供折扣以收集有關註冊障礙的洞察。","identify_sign_up_barriers_name":"識別註冊障礙","identify_sign_up_barriers_question_1_button_label":"獲得 10% 折扣","identify_sign_up_barriers_question_1_dismiss_button_label":"不用了，謝謝","identify_sign_up_barriers_question_1_headline":"回答這個簡短的問卷，即可獲得 10% 的折扣！","identify_sign_up_barriers_question_1_html":"您似乎正在考慮註冊。回答四個問題，即可在任何方案中獲得 10% 的折扣。","identify_sign_up_barriers_question_2_headline":"您註冊 {projectName} 的可能性有多高？","identify_sign_up_barriers_question_2_lower_label":"完全不可能","identify_sign_up_barriers_question_2_upper_label":"非常有可能","identify_sign_up_barriers_question_3_choice_1_label":"可能沒有我需要的內容","identify_sign_up_barriers_question_3_choice_2_label":"仍在比較選項","identify_sign_up_barriers_question_3_choice_3_label":"似乎很複雜","identify_sign_up_barriers_question_3_choice_4_label":"定價是個問題","identify_sign_up_barriers_question_3_choice_5_label":"其他","identify_sign_up_barriers_question_3_headline":"是什麼讓您無法嘗試 {projectName}？","identify_sign_up_barriers_question_4_headline":"您需要什麼，但 {projectName} 沒有提供？","identify_sign_up_barriers_question_4_placeholder":"在此輸入您的答案...","identify_sign_up_barriers_question_5_headline":"您正在查看哪些選項？","identify_sign_up_barriers_question_5_placeholder":"在此輸入您的答案...","identify_sign_up_barriers_question_6_headline":"您覺得什麼很複雜？","identify_sign_up_barriers_question_6_placeholder":"在此輸入您的答案...","identify_sign_up_barriers_question_7_headline":"您對定價有什麼顧慮？","identify_sign_up_barriers_question_7_placeholder":"在此輸入您的答案...","identify_sign_up_barriers_question_8_headline":"請說明：","identify_sign_up_barriers_question_8_placeholder":"在此輸入您的答案...","identify_sign_up_barriers_question_9_button_label":"註冊","identify_sign_up_barriers_question_9_dismiss_button_label":"暫時跳過","identify_sign_up_barriers_question_9_headline":"謝謝！這是您的程式碼：SIGNUPNOW10","identify_sign_up_barriers_question_9_html":"<p class=\\"fb-editor-paragraph\\" dir=\\"ltr\\"><span>非常感謝您撥冗分享回饋 🙏</span></p>","identify_sign_up_barriers_with_project_name":"{projectName} 註冊障礙","identify_upsell_opportunities_description":"找出您的產品為使用者節省了多少時間。使用它來追加銷售。","identify_upsell_opportunities_name":"識別追加銷售機會","identify_upsell_opportunities_question_1_choice_1":"不到 1 小時","identify_upsell_opportunities_question_1_choice_2":"1 到 2 小時","identify_upsell_opportunities_question_1_choice_3":"3 到 5 小時","identify_upsell_opportunities_question_1_choice_4":"5 小時以上","identify_upsell_opportunities_question_1_headline":"透過使用 {projectName}，您的團隊每週可以節省多少小時？","improve_activation_rate_description":"找出您新手上路流程中的弱點，以提高使用者啟用率。","improve_activation_rate_name":"提高啟用率","improve_activation_rate_question_1_choice_1":"對我來說似乎沒有用處","improve_activation_rate_question_1_choice_2":"難以設定或使用","improve_activation_rate_question_1_choice_3":"缺少功能/特性","improve_activation_rate_question_1_choice_4":"只是還沒有時間","improve_activation_rate_question_1_choice_5":"其他","improve_activation_rate_question_1_headline":"您未完成設定 {projectName} 的主要原因是什麼？","improve_activation_rate_question_2_headline":"是什麼讓您認為 {projectName} 沒有用處？","improve_activation_rate_question_2_placeholder":"在此輸入您的答案...","improve_activation_rate_question_3_headline":"設定或使用 {projectName} 的困難之處是什麼？","improve_activation_rate_question_3_placeholder":"在此輸入您的答案...","improve_activation_rate_question_4_headline":"缺少哪些功能或特性？","improve_activation_rate_question_4_placeholder":"在此輸入您的答案...","improve_activation_rate_question_5_headline":"我們如何讓您更輕鬆地開始使用？","improve_activation_rate_question_5_placeholder":"在此輸入您的答案...","improve_activation_rate_question_6_headline":"那是什麼？請說明：","improve_activation_rate_question_6_placeholder":"在此輸入您的答案...","improve_activation_rate_question_6_subheader":"我們很樂意盡快修復它。","improve_newsletter_content_description":"找出您的訂閱者喜歡您的電子報內容的程度。","improve_newsletter_content_name":"改善電子報內容","improve_newsletter_content_question_1_headline":"您對本週電子報的評分如何？","improve_newsletter_content_question_1_lower_label":"還好","improve_newsletter_content_question_1_upper_label":"很好","improve_newsletter_content_question_2_headline":"是什麼讓本週的電子報更有幫助？","improve_newsletter_content_question_2_placeholder":"在此輸入您的答案...","improve_newsletter_content_question_3_button_label":"樂意協助！","improve_newsletter_content_question_3_dismiss_button_label":"自己找朋友","improve_newsletter_content_question_3_headline":"謝謝！❤️ 與一位朋友分享。","improve_newsletter_content_question_3_html":"<p class=\\"fb-editor-paragraph\\" dir=\\"ltr\\"><span>誰的想法和您一樣？如果您與您的一位好朋友分享本週的內容，這會對我們有很大幫助！</span></p>","improve_trial_conversion_description":"找出人們停止試用的原因。這些洞察可幫助您改善轉換程序。","improve_trial_conversion_name":"提高試用轉換率","improve_trial_conversion_question_1_choice_1":"我沒有從中獲得太多價值","improve_trial_conversion_question_1_choice_2":"我期待其他內容","improve_trial_conversion_question_1_choice_3":"它對於它的功能來說太貴了","improve_trial_conversion_question_1_choice_4":"我缺少功能","improve_trial_conversion_question_1_choice_5":"我只是隨便看看","improve_trial_conversion_question_1_headline":"您為何停止試用？","improve_trial_conversion_question_1_subheader":"協助我們更瞭解您：","improve_trial_conversion_question_2_button_label":"下一步","improve_trial_conversion_question_2_headline":"很抱歉聽到。使用 {projectName} 時，最大的問題是什麼？","improve_trial_conversion_question_4_button_label":"獲得 20% 折扣","improve_trial_conversion_question_4_dismiss_button_label":"跳過","improve_trial_conversion_question_4_headline":"很抱歉聽到！在第一年獲得 20% 的折扣。","improve_trial_conversion_question_4_html":"<p class=\\"fb-editor-paragraph\\" dir=\\"ltr\\"><span>我們很樂意為您提供年度方案的 20% 折扣。</span></p>","improve_trial_conversion_question_5_button_label":"下一步","improve_trial_conversion_question_5_headline":"您想要達成什麼？","improve_trial_conversion_question_5_subheader":"請選取以下其中一個選項：","improve_trial_conversion_question_6_headline":"您現在如何解決您的問題？","improve_trial_conversion_question_6_subheader":"請列出替代解決方案：","integration_setup_survey_description":"評估使用者將整合新增至您的產品的容易程度。找出盲點。","integration_setup_survey_name":"整合使用情況問卷","integration_setup_survey_question_1_headline":"設定此整合有多容易？","integration_setup_survey_question_1_lower_label":"不容易","integration_setup_survey_question_1_upper_label":"非常容易","integration_setup_survey_question_2_headline":"為何困難？","integration_setup_survey_question_2_placeholder":"在此輸入您的答案...","integration_setup_survey_question_3_headline":"您希望將哪些其他工具與 {projectName} 搭配使用？","integration_setup_survey_question_3_subheader":"我們不斷建構整合，您的整合可以是下一個：","interview_prompt_description":"邀請特定的使用者子集安排與您產品團隊的面試。","interview_prompt_name":"面試提示","interview_prompt_question_1_button_label":"預訂時段","interview_prompt_question_1_headline":"您有 15 分鐘的時間與我們談話嗎？🙏","interview_prompt_question_1_html":"您是我們的進階使用者之一。我們很樂意簡短訪問您！","long_term_retention_check_in_description":"衡量長期使用者滿意度、忠誠度和需要改進的領域，以保留忠實使用者。","long_term_retention_check_in_name":"長期保留檢查","long_term_retention_check_in_question_10_headline":"任何其他回饋或意見？","long_term_retention_check_in_question_10_placeholder":"分享任何可能有助於我們改進的想法或回饋...","long_term_retention_check_in_question_1_headline":"您對 {projectName} 的整體滿意度如何？","long_term_retention_check_in_question_1_lower_label":"不滿意","long_term_retention_check_in_question_1_upper_label":"非常滿意","long_term_retention_check_in_question_2_headline":"您認為 {projectName} 最有價值的是什麼？","long_term_retention_check_in_question_2_placeholder":"描述您最重視的功能或優勢...","long_term_retention_check_in_question_3_choice_1":"功能","long_term_retention_check_in_question_3_choice_2":"客戶支援","long_term_retention_check_in_question_3_choice_3":"使用者體驗","long_term_retention_check_in_question_3_choice_4":"定價","long_term_retention_check_in_question_3_choice_5":"可靠性和正常運作時間","long_term_retention_check_in_question_3_headline":"您認為 {projectName} 的哪個方面對您的體驗最重要？","long_term_retention_check_in_question_4_headline":"{projectName} 在多大程度上符合您的期望？","long_term_retention_check_in_question_4_lower_label":"未達標準","long_term_retention_check_in_question_4_upper_label":"超出期望","long_term_retention_check_in_question_5_headline":"您在使用 {projectName} 時遇到哪些挑戰或挫折？","long_term_retention_check_in_question_5_placeholder":"描述您希望看到的任何挑戰或改進...","long_term_retention_check_in_question_6_headline":"您向朋友或同事推薦 {projectName} 的可能性有多高？","long_term_retention_check_in_question_6_lower_label":"不太可能","long_term_retention_check_in_question_6_upper_label":"非常有可能","long_term_retention_check_in_question_7_choice_1":"新功能和改進","long_term_retention_check_in_question_7_choice_2":"加強的客戶支援","long_term_retention_check_in_question_7_choice_3":"更佳的定價選項","long_term_retention_check_in_question_7_choice_4":"更多整合","long_term_retention_check_in_question_7_choice_5":"使用者體驗改進","long_term_retention_check_in_question_7_headline":"哪些因素會讓您更可能保持長期使用者？","long_term_retention_check_in_question_8_headline":"如果可以變更 {projectName} 的一件事，您會變更什麼？","long_term_retention_check_in_question_8_placeholder":"分享您希望我們考慮的任何變更或功能...","long_term_retention_check_in_question_9_headline":"您對我們的產品更新和頻率感到滿意嗎？","long_term_retention_check_in_question_9_lower_label":"不滿意","long_term_retention_check_in_question_9_upper_label":"非常滿意","market_attribution_description":"瞭解使用者最初如何得知您的產品。","market_attribution_name":"行銷歸因","market_attribution_question_1_choice_1":"推薦","market_attribution_question_1_choice_2":"社群媒體","market_attribution_question_1_choice_3":"廣告","market_attribution_question_1_choice_4":"Google 搜尋","market_attribution_question_1_choice_5":"在 Podcast 中","market_attribution_question_1_headline":"您最初是如何得知我們的？","market_attribution_question_1_subheader":"請選取以下其中一個選項：","market_site_clarity_description":"找出放棄您行銷網站的使用者。改善您的訊息傳遞。","market_site_clarity_name":"行銷網站清晰度","market_site_clarity_question_1_choice_1":"是，完全如此","market_site_clarity_question_1_choice_2":"算是吧...","market_site_clarity_question_1_choice_3":"否，完全不是","market_site_clarity_question_1_headline":"您是否擁有足夠的資訊可以試用 {projectName}？","market_site_clarity_question_2_headline":"關於 {projectName}，您缺少或不清楚什麼？","market_site_clarity_question_3_button_label":"獲得折扣","market_site_clarity_question_3_headline":"感謝您的回答！在您前 6 個月獲得 25% 的折扣：","matrix":"矩陣","matrix_description":"建立網格以針對同一組條件對多個項目進行評分","measure_search_experience_description":"衡量您的搜尋結果有多相關。","measure_search_experience_name":"衡量搜尋體驗","measure_search_experience_question_1_headline":"這些搜尋結果的相關性如何？","measure_search_experience_question_1_lower_label":"完全不相關","measure_search_experience_question_1_upper_label":"非常相關","measure_search_experience_question_2_headline":"唉！是什麼讓結果對您而言不相關？","measure_search_experience_question_2_placeholder":"在此輸入您的答案...","measure_search_experience_question_3_headline":"太棒了！我們是否有任何可以改善您體驗的地方？","measure_search_experience_question_3_placeholder":"在此輸入您的答案...","measure_task_accomplishment_description":"查看使用者是否完成了他們要完成的工作。成功的人是更好的客戶。","measure_task_accomplishment_name":"衡量任務完成情況","measure_task_accomplishment_question_1_headline":"您今天是否能夠完成您來這裡的目的？","measure_task_accomplishment_question_1_option_1_label":"是","measure_task_accomplishment_question_1_option_2_label":"正在進行中，老闆","measure_task_accomplishment_question_1_option_3_label":"否","measure_task_accomplishment_question_2_headline":"您完成目標有多容易？","measure_task_accomplishment_question_2_lower_label":"非常困難","measure_task_accomplishment_question_2_upper_label":"非常容易","measure_task_accomplishment_question_3_headline":"是什麼讓它變得困難？","measure_task_accomplishment_question_3_placeholder":"在此輸入您的答案...","measure_task_accomplishment_question_4_button_label":"發送","measure_task_accomplishment_question_4_headline":"太棒了！您今天來這裡的目的是什麼？","measure_task_accomplishment_question_5_button_label":"發送","measure_task_accomplishment_question_5_headline":"是什麼阻止了您？","measure_task_accomplishment_question_5_placeholder":"在此輸入您的答案...","multi_select":"多選","multi_select_description":"要求回應者選擇一個或多個選項","new_integration_survey_description":"找出您的使用者接下來想要看到哪些整合。","new_integration_survey_name":"新的整合問卷","new_integration_survey_question_1_choice_1":"PostHog","new_integration_survey_question_1_choice_2":"Segment","new_integration_survey_question_1_choice_3":"Hubspot","new_integration_survey_question_1_choice_4":"Twilio","new_integration_survey_question_1_choice_5":"其他","new_integration_survey_question_1_headline":"您正在使用哪些其他工具？","next":"下一步","nps":"淨推薦分數 (NPS)","nps_description":"衡量淨推薦分數 (0-10)","nps_lower_label":"完全不可能","nps_name":"淨推薦分數 (NPS)","nps_question_1_headline":"您向朋友或同事推薦 {projectName} 的可能性有多高？","nps_question_1_lower_label":"不太可能","nps_question_1_upper_label":"非常有可能","nps_question_2_headline":"是什麼讓您給予此評分？","nps_survey_name":"NPS 問卷","nps_survey_question_1_headline":"您向朋友或同事推薦 {projectName} 的可能性有多高？","nps_survey_question_1_lower_label":"完全不可能","nps_survey_question_1_upper_label":"非常有可能","nps_survey_question_2_headline":"若要協助我們改進，您能否描述您給予此評分的原因？","nps_survey_question_3_headline":"任何其他意見、回饋或疑慮？","nps_upper_label":"非常有可能","onboarding_segmentation":"新手上路區隔","onboarding_segmentation_description":"瞭解有關誰註冊了您的產品以及原因的詳細資訊。","onboarding_segmentation_question_1_choice_1":"創辦人","onboarding_segmentation_question_1_choice_2":"主管","onboarding_segmentation_question_1_choice_3":"產品經理","onboarding_segmentation_question_1_choice_4":"產品負責人","onboarding_segmentation_question_1_choice_5":"軟體工程師","onboarding_segmentation_question_1_headline":"您的角色是什麼？","onboarding_segmentation_question_1_subheader":"請選取以下其中一個選項：","onboarding_segmentation_question_2_choice_1":"只有我","onboarding_segmentation_question_2_choice_2":"1-5 位員工","onboarding_segmentation_question_2_choice_3":"6-10 位員工","onboarding_segmentation_question_2_choice_4":"11-100 位員工","onboarding_segmentation_question_2_choice_5":"超過 100 位員工","onboarding_segmentation_question_2_headline":"您的公司規模有多大？","onboarding_segmentation_question_2_subheader":"請選取以下其中一個選項：","onboarding_segmentation_question_3_choice_1":"推薦","onboarding_segmentation_question_3_choice_2":"社群媒體","onboarding_segmentation_question_3_choice_3":"廣告","onboarding_segmentation_question_3_choice_4":"Google 搜尋","onboarding_segmentation_question_3_choice_5":"在 Podcast 中","onboarding_segmentation_question_3_headline":"您最初是如何得知我們的？","onboarding_segmentation_question_3_subheader":"請選取以下其中一個選項：","picture_selection":"圖片選取","picture_selection_description":"要求回應者選擇一張或多張圖片","preview_survey_ending_card_description":"請繼續您的新手上路程序。","preview_survey_ending_card_headline":"您完成了！","preview_survey_name":"新問卷","preview_survey_question_1_headline":"您對 \'{\'projectName\'}\' 的評分如何？","preview_survey_question_1_lower_label":"不好","preview_survey_question_1_subheader":"這是問卷預覽。","preview_survey_question_1_upper_label":"很好","preview_survey_question_2_back_button_label":"返回","preview_survey_question_2_choice_1_label":"是，請保持通知我。","preview_survey_question_2_choice_2_label":"不用了，謝謝！","preview_survey_question_2_headline":"想要保持最新消息嗎？","preview_survey_welcome_card_headline":"歡迎！","preview_survey_welcome_card_html":"感謝您提供回饋 - 開始吧！","prioritize_features_description":"找出您的使用者最需要和最不需要的功能。","prioritize_features_name":"優先排序功能","prioritize_features_question_1_choice_1":"功能 1","prioritize_features_question_1_choice_2":"功能 2","prioritize_features_question_1_choice_3":"功能 3","prioritize_features_question_1_choice_4":"其他","prioritize_features_question_1_headline":"這些功能中，哪項對您而言最有價值？","prioritize_features_question_2_choice_1":"功能 1","prioritize_features_question_2_choice_2":"功能 2","prioritize_features_question_2_choice_3":"功能 3","prioritize_features_question_2_headline":"這些功能中，哪項對您而言最沒有價值？","prioritize_features_question_3_headline":"我們還可以如何改善您對 {projectName} 的體驗？","prioritize_features_question_3_placeholder":"在此輸入您的答案...","product_market_fit_short_description":"藉由評估使用者在您的產品消失時會有多失望來衡量 PMF。","product_market_fit_short_name":"產品市場匹配度問卷 (短)","product_market_fit_short_question_1_choice_1":"完全不會失望","product_market_fit_short_question_1_choice_2":"有點失望","product_market_fit_short_question_1_choice_3":"非常失望","product_market_fit_short_question_1_headline":"如果您無法再使用 {projectName}，您會感到多失望？","product_market_fit_short_question_1_subheader":"請選取以下其中一個選項：","product_market_fit_short_question_2_headline":"我們如何改善 {projectName}？","product_market_fit_short_question_2_subheader":"請盡可能明確。","product_market_fit_superhuman":"產品市場匹配度 (Superhuman)","product_market_fit_superhuman_description":"藉由評估使用者在您的產品消失時會有多失望來衡量 PMF。","product_market_fit_superhuman_question_1_button_label":"樂意協助！","product_market_fit_superhuman_question_1_dismiss_button_label":"不用了，謝謝。","product_market_fit_superhuman_question_1_headline":"您是我們的進階使用者之一！您有 5 分鐘的時間嗎？","product_market_fit_superhuman_question_1_html":"<p class=\\"fb-editor-paragraph\\" dir=\\"ltr\\"><span>我們很樂意更瞭解您的使用者體驗。分享您的洞察力有很大幫助。</span></p>","product_market_fit_superhuman_question_2_choice_1":"完全不會失望","product_market_fit_superhuman_question_2_choice_2":"有點失望","product_market_fit_superhuman_question_2_choice_3":"非常失望","product_market_fit_superhuman_question_2_headline":"如果您無法再使用 {projectName}，您會感到多失望？","product_market_fit_superhuman_question_2_subheader":"請選取以下其中一個選項：","product_market_fit_superhuman_question_3_choice_1":"創辦人","product_market_fit_superhuman_question_3_choice_2":"主管","product_market_fit_superhuman_question_3_choice_3":"產品經理","product_market_fit_superhuman_question_3_choice_4":"產品負責人","product_market_fit_superhuman_question_3_choice_5":"軟體工程師","product_market_fit_superhuman_question_3_headline":"您的角色是什麼？","product_market_fit_superhuman_question_3_subheader":"請選取以下其中一個選項：","product_market_fit_superhuman_question_4_headline":"您認為哪些類型的人最能從 {projectName} 中受益？","product_market_fit_superhuman_question_5_headline":"您從 {projectName} 獲得的主要好處是什麼？","product_market_fit_superhuman_question_6_headline":"我們如何為您改善 {projectName}？","product_market_fit_superhuman_question_6_subheader":"請盡可能明確。","professional_development_growth_survey_description":"評估員工對專業成長和發展機會的滿意度。","professional_development_growth_survey_name":"專業發展成長問卷","professional_development_growth_survey_question_1_headline":"我覺得我有機會在工作中成長和發展我的技能。","professional_development_growth_survey_question_1_lower_label":"沒有成長機會","professional_development_growth_survey_question_1_upper_label":"許多成長機會","professional_development_growth_survey_question_2_headline":"我有足夠的自主權來決定我如何完成我的工作。","professional_development_growth_survey_question_2_lower_label":"沒有自主權","professional_development_growth_survey_question_2_upper_label":"完全自主","professional_development_growth_survey_question_3_headline":"我在工作中的目標很明確，並符合我的發展。","professional_development_growth_survey_question_3_lower_label":"不明確的目標","professional_development_growth_survey_question_3_upper_label":"明確且一致的目標","professional_development_growth_survey_question_4_headline":"可以改善什麼以支援您的專業成長？","professional_development_growth_survey_question_4_placeholder":"在此輸入您的答案...","professional_development_survey_description":"評估員工對專業成長和發展機會的滿意度。","professional_development_survey_name":"專業發展問卷","professional_development_survey_question_1_choice_1":"是","professional_development_survey_question_1_choice_2":"否","professional_development_survey_question_1_headline":"您對專業發展活動感興趣嗎？","professional_development_survey_question_2_choice_1":"人脈交流活動","professional_development_survey_question_2_choice_2":"研討會或研討會","professional_development_survey_question_2_choice_3":"課程或工作坊","professional_development_survey_question_2_choice_4":"指導","professional_development_survey_question_2_choice_5":"個人研究","professional_development_survey_question_2_choice_6":"其他","professional_development_survey_question_2_headline":"您認為哪種類型的專業發展活動對您的成長最有價值？","professional_development_survey_question_2_subheader":"選取所有適用的項目","professional_development_survey_question_3_choice_1":"是","professional_development_survey_question_3_choice_2":"否","professional_development_survey_question_3_headline":"您過去是否曾投入時間進行專業發展？","professional_development_survey_question_4_headline":"在追求專業發展時，您在工作場所感到多大的支援？","professional_development_survey_question_4_lower_label":"完全不受支援","professional_development_survey_question_4_upper_label":"極度受支援","professional_development_survey_question_5_choice_1":"為了我自己的知識","professional_development_survey_question_5_choice_2":"為了獲得更多責任","professional_development_survey_question_5_choice_3":"改進我的技能","professional_development_survey_question_5_choice_4":"在目前職涯道路上晉升","professional_development_survey_question_5_choice_5":"尋找新工作","professional_development_survey_question_5_choice_6":"其他","professional_development_survey_question_5_headline":"您想要花時間進行專業發展的主要原因是什麼？","ranking":"排名","ranking_description":"要求回應者按喜好或重要性排列項目","rate_checkout_experience_description":"讓客戶評價結帳體驗，以調整轉換率。","rate_checkout_experience_name":"評價結帳體驗","rate_checkout_experience_question_1_headline":"完成結帳有多容易或多困難？","rate_checkout_experience_question_1_lower_label":"非常困難","rate_checkout_experience_question_1_upper_label":"非常容易","rate_checkout_experience_question_2_headline":"很抱歉！是什麼讓您更容易完成？","rate_checkout_experience_question_2_placeholder":"在此輸入您的答案...","rate_checkout_experience_question_3_headline":"太棒了！我們是否有任何可以改善您體驗的地方？","rate_checkout_experience_question_3_placeholder":"在此輸入您的答案...","rating":"評分","rating_description":"要求回應者評分（星級、表情符號、數字）","rating_lower_label":"不好","rating_upper_label":"很好","recognition_and_reward_survey_description":"評估員工對認可、獎勵、領導層支援和自由表達的滿意度。","recognition_and_reward_survey_name":"認可和獎勵","recognition_and_reward_survey_question_1_headline":"當我表現良好時，我的貢獻會獲得組織的認可。","recognition_and_reward_survey_question_1_lower_label":"完全沒有被認可","recognition_and_reward_survey_question_1_upper_label":"高度認可","recognition_and_reward_survey_question_2_headline":"我對我所做的工作感到公平地受到獎勵。","recognition_and_reward_survey_question_2_lower_label":"未獲得公平的獎勵","recognition_and_reward_survey_question_2_upper_label":"獲得非常公平的獎勵","recognition_and_reward_survey_question_3_headline":"我覺得在工作時可以自在地公開分享我的意見。","recognition_and_reward_survey_question_3_lower_label":"不自在","recognition_and_reward_survey_question_3_upper_label":"非常自在","recognition_and_reward_survey_question_4_headline":"組織如何改善認可和獎勵？","recognition_and_reward_survey_question_4_placeholder":"在此輸入您的答案...","review_prompt_description":"邀請喜歡您產品的使用者公開評論它。","review_prompt_name":"評論提示","review_prompt_question_1_headline":"您覺得 {projectName} 如何？","review_prompt_question_1_lower_label":"不好","review_prompt_question_1_upper_label":"非常滿意","review_prompt_question_2_button_label":"撰寫評論","review_prompt_question_2_headline":"很高興聽見 🙏 請為我們撰寫評論！","review_prompt_question_2_html":"<p class=\\"fb-editor-paragraph\\" dir=\\"ltr\\"><span>這對我們有很大的幫助。</span></p>","review_prompt_question_3_button_label":"發送","review_prompt_question_3_headline":"很抱歉聽到！我們應該改進哪一件事？","review_prompt_question_3_placeholder":"在此輸入您的答案...","review_prompt_question_3_subheader":"協助我們改善您的體驗。","schedule_a_meeting":"安排會議","schedule_a_meeting_description":"要求回應者預訂會議或通話的時段","single_select":"單選","single_select_description":"提供一個選項列表（僅能選擇一項）","site_abandonment_survey":"網站放棄問卷","site_abandonment_survey_description":"瞭解您網站商店中網站放棄的原因。","site_abandonment_survey_question_1_html":"<p class=\\"fb-editor-paragraph\\" dir=\\"ltr\\"><span>我們注意到您在未進行購買的情況下離開了我們的網站。我們很想瞭解原因。</span></p>","site_abandonment_survey_question_2_button_label":"當然！","site_abandonment_survey_question_2_dismiss_button_label":"不用了，謝謝。","site_abandonment_survey_question_2_headline":"您有時間嗎？","site_abandonment_survey_question_3_choice_1":"找不到我要找的東西","site_abandonment_survey_question_3_choice_2":"找到更好的網站","site_abandonment_survey_question_3_choice_3":"網站速度太慢","site_abandonment_survey_question_3_choice_4":"只是瀏覽","site_abandonment_survey_question_3_choice_5":"在其他地方找到更優惠的價格","site_abandonment_survey_question_3_choice_6":"其他","site_abandonment_survey_question_3_headline":"您離開我們網站的主要原因是什麼？","site_abandonment_survey_question_3_subheader":"請選取以下其中一個選項：","site_abandonment_survey_question_4_headline":"請詳細說明您離開網站的原因：","site_abandonment_survey_question_5_headline":"您對我們網站的整體體驗評分如何？","site_abandonment_survey_question_5_lower_label":"非常不滿意","site_abandonment_survey_question_5_upper_label":"非常滿意","site_abandonment_survey_question_6_choice_1":"更快的載入時間","site_abandonment_survey_question_6_choice_2":"更佳的產品搜尋功能","site_abandonment_survey_question_6_choice_3":"更多產品種類","site_abandonment_survey_question_6_choice_4":"改進的網站設計","site_abandonment_survey_question_6_choice_5":"更多客戶評論","site_abandonment_survey_question_6_choice_6":"其他","site_abandonment_survey_question_6_headline":"哪些改進措施可以鼓勵您在我們的網站上停留更久？","site_abandonment_survey_question_6_subheader":"請選取所有適用的選項：","site_abandonment_survey_question_7_headline":"您是否要接收有關新產品和促銷活動的更新資訊？","site_abandonment_survey_question_7_label":"是的，請聯絡我。","site_abandonment_survey_question_8_headline":"請分享您的電子郵件地址：","site_abandonment_survey_question_9_headline":"任何其他意見或建議？","skip":"跳過","smileys_survey_name":"表情符號問卷","smileys_survey_question_1_headline":"您覺得 {projectName} 如何？","smileys_survey_question_1_lower_label":"不好","smileys_survey_question_1_upper_label":"非常滿意","smileys_survey_question_2_button_label":"撰寫評論","smileys_survey_question_2_headline":"很高興聽見 🙏 請為我們撰寫評論！","smileys_survey_question_2_html":"<p class=\\"fb-editor-paragraph\\" dir=\\"ltr\\"><span>這對我們有很大的幫助。</span></p>","smileys_survey_question_3_button_label":"發送","smileys_survey_question_3_headline":"很抱歉聽到！我們應該改進哪一件事？","smileys_survey_question_3_placeholder":"在此輸入您的答案...","smileys_survey_question_3_subheader":"協助我們改善您的體驗。","star_rating_survey_name":"{projectName} 的評分問卷","star_rating_survey_question_1_headline":"您覺得 {projectName} 如何？","star_rating_survey_question_1_lower_label":"極度不滿意","star_rating_survey_question_1_upper_label":"極度滿意","star_rating_survey_question_2_button_label":"撰寫評論","star_rating_survey_question_2_headline":"很高興聽見 🙏 請為我們撰寫評論！","star_rating_survey_question_2_html":"<p class=\\"fb-editor-paragraph\\" dir=\\"ltr\\"><span>這對我們有很大的幫助。</span></p>","star_rating_survey_question_3_button_label":"發送","star_rating_survey_question_3_headline":"很抱歉聽到！我們應該改進哪一件事？","star_rating_survey_question_3_placeholder":"在此輸入您的答案...","star_rating_survey_question_3_subheader":"協助我們改善您的體驗。","statement_call_to_action":"陳述（行動呼籲）","supportive_work_culture_survey_description":"評估員工對領導層支援、溝通和整體工作環境的看法。","supportive_work_culture_survey_name":"支援性工作文化","supportive_work_culture_survey_question_1_headline":"我的經理為我提供了完成工作所需的支援。","supportive_work_culture_survey_question_1_lower_label":"不受支援","supportive_work_culture_survey_question_1_upper_label":"高度支援","supportive_work_culture_survey_question_2_headline":"組織內的溝通是開放且有效的。","supportive_work_culture_survey_question_2_lower_label":"溝通不良","supportive_work_culture_survey_question_2_upper_label":"良好的溝通","supportive_work_culture_survey_question_3_headline":"工作環境是積極的且支援我的福祉。","supportive_work_culture_survey_question_3_lower_label":"不支援","supportive_work_culture_survey_question_3_upper_label":"非常支援","supportive_work_culture_survey_question_4_headline":"如何改進工作文化以更好地支援您？","supportive_work_culture_survey_question_4_placeholder":"在此輸入您的答案...","uncover_strengths_and_weaknesses_description":"找出使用者喜歡和不喜歡您產品或服務的地方。","uncover_strengths_and_weaknesses_name":"找出優點和缺點","uncover_strengths_and_weaknesses_question_1_choice_1":"易於使用","uncover_strengths_and_weaknesses_question_1_choice_2":"物有所值","uncover_strengths_and_weaknesses_question_1_choice_3":"它是開源的","uncover_strengths_and_weaknesses_question_1_choice_4":"創辦人很可愛","uncover_strengths_and_weaknesses_question_1_choice_5":"其他","uncover_strengths_and_weaknesses_question_1_headline":"您最重視 {projectName} 的哪一點？","uncover_strengths_and_weaknesses_question_2_choice_1":"文件","uncover_strengths_and_weaknesses_question_2_choice_2":"自訂性","uncover_strengths_and_weaknesses_question_2_choice_3":"定價","uncover_strengths_and_weaknesses_question_2_choice_4":"其他","uncover_strengths_and_weaknesses_question_2_headline":"我們應該改進什麼？","uncover_strengths_and_weaknesses_question_2_subheader":"請選取以下其中一個選項：","uncover_strengths_and_weaknesses_question_3_headline":"您想要新增什麼嗎？","uncover_strengths_and_weaknesses_question_3_subheader":"請隨意發表您的意見，我們也是。","understand_low_engagement_description":"找出低參與度的原因以改善使用者採用率。","understand_low_engagement_name":"瞭解低參與度","understand_low_engagement_question_1_choice_1":"難以使用","understand_low_engagement_question_1_choice_2":"找到更好的替代方案","understand_low_engagement_question_1_choice_3":"只是還沒有時間","understand_low_engagement_question_1_choice_4":"缺少我需要的功能","understand_low_engagement_question_1_choice_5":"其他","understand_low_engagement_question_1_headline":"您最近沒有回到 {projectName} 的主要原因是什麼？","understand_low_engagement_question_2_headline":"使用 {projectName} 的困難之處是什麼？","understand_low_engagement_question_2_placeholder":"在此輸入您的答案...","understand_low_engagement_question_3_headline":"瞭解了。您使用哪種替代方案？","understand_low_engagement_question_3_placeholder":"在此輸入您的答案...","understand_low_engagement_question_4_headline":"瞭解了。我們如何才能讓您更容易上手？","understand_low_engagement_question_4_placeholder":"在此輸入您的答案...","understand_low_engagement_question_5_headline":"瞭解了。缺少哪些功能或特性？","understand_low_engagement_question_5_placeholder":"在此輸入您的答案...","understand_low_engagement_question_6_headline":"請新增更多詳細資料：","understand_low_engagement_question_6_placeholder":"在此輸入您的答案...","understand_purchase_intention_description":"找出您的訪客有多接近購買或訂閱。","understand_purchase_intention_name":"瞭解購買意願","understand_purchase_intention_question_1_headline":"您今天從我們這裡購物的可能性有多高？","understand_purchase_intention_question_1_lower_label":"完全不可能","understand_purchase_intention_question_1_upper_label":"非常有可能","understand_purchase_intention_question_2_headline":"瞭解了。您今天來訪的主要原因是什麼？","understand_purchase_intention_question_2_placeholder":"在此輸入您的答案...","understand_purchase_intention_question_3_headline":"有什麼阻礙您今天進行購買嗎？","understand_purchase_intention_question_3_placeholder":"在此輸入您的答案..."}}');

/***/ })

};
;