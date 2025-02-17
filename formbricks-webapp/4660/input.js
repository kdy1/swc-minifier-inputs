"use strict";
exports.id = 4660;
exports.ids = [4660];
exports.modules = {

/***/ 300677:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResponseFilterProvider: () => (/* binding */ ResponseFilterProvider),
/* harmony export */   S: () => (/* binding */ useResponseFilter)
/* harmony export */ });
/* unused harmony export ResponseFilterContext */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(642725);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_lib_surveys_surveys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(291786);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(891616);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* __next_internal_client_entry_do_not_use__ ResponseFilterContext,ResponseFilterProvider,useResponseFilter auto */ 


const ResponseFilterContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)(undefined);
const ResponseFilterProvider = ({ children })=>{
    // state holds the filter selected value
    const [selectedFilter, setSelectedFilter] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        filter: [],
        onlyComplete: false
    });
    // state holds all the options of the responses fetched
    const [selectedOptions, setSelectedOptions] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        questionFilterOptions: [],
        questionOptions: []
    });
    const [dateRange, setDateRange] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        from: undefined,
        to: (0,_app_lib_surveys_surveys__WEBPACK_IMPORTED_MODULE_1__/* .getTodayDate */ .ak)()
    });
    const resetState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>{
        setDateRange({
            from: undefined,
            to: (0,_app_lib_surveys_surveys__WEBPACK_IMPORTED_MODULE_1__/* .getTodayDate */ .ak)()
        });
        setSelectedFilter({
            filter: [],
            onlyComplete: false
        });
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ResponseFilterContext.Provider, {
        value: {
            setSelectedFilter,
            selectedFilter,
            selectedOptions,
            setSelectedOptions,
            dateRange,
            setDateRange,
            resetState
        },
        children: children
    });
};
const useResponseFilter = ()=>{
    const context = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(ResponseFilterContext);
    if (context === undefined) {
        throw new Error("useFilterDate must be used within a FilterDateProvider");
    }
    return context;
};



/***/ }),

/***/ 267779:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ OptionsType),
/* harmony export */   r: () => (/* binding */ QuestionsComboBox)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(642725);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_ui_components_command__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(454319);
/* harmony import */ var _modules_ui_components_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(899183);
/* harmony import */ var _tolgee_react__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(397674);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(553626);
/* harmony import */ var _barrel_optimize_names_AirplayIcon_CheckIcon_ChevronDown_ChevronUp_EyeOff_GlobeIcon_GridIcon_HashIcon_HelpCircleIcon_ImageIcon_LanguagesIcon_ListIcon_ListOrderedIcon_MessageSquareTextIcon_MousePointerClickIcon_Rows3Icon_SmartphoneIcon_StarIcon_User_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(624653);
/* harmony import */ var _barrel_optimize_names_AirplayIcon_CheckIcon_ChevronDown_ChevronUp_EyeOff_GlobeIcon_GridIcon_HashIcon_HelpCircleIcon_ImageIcon_LanguagesIcon_ListIcon_ListOrderedIcon_MessageSquareTextIcon_MousePointerClickIcon_Rows3Icon_SmartphoneIcon_StarIcon_User_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(696340);
/* harmony import */ var _barrel_optimize_names_AirplayIcon_CheckIcon_ChevronDown_ChevronUp_EyeOff_GlobeIcon_GridIcon_HashIcon_HelpCircleIcon_ImageIcon_LanguagesIcon_ListIcon_ListOrderedIcon_MessageSquareTextIcon_MousePointerClickIcon_Rows3Icon_SmartphoneIcon_StarIcon_User_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(277792);
/* harmony import */ var _barrel_optimize_names_AirplayIcon_CheckIcon_ChevronDown_ChevronUp_EyeOff_GlobeIcon_GridIcon_HashIcon_HelpCircleIcon_ImageIcon_LanguagesIcon_ListIcon_ListOrderedIcon_MessageSquareTextIcon_MousePointerClickIcon_Rows3Icon_SmartphoneIcon_StarIcon_User_lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(41714);
/* harmony import */ var _barrel_optimize_names_AirplayIcon_CheckIcon_ChevronDown_ChevronUp_EyeOff_GlobeIcon_GridIcon_HashIcon_HelpCircleIcon_ImageIcon_LanguagesIcon_ListIcon_ListOrderedIcon_MessageSquareTextIcon_MousePointerClickIcon_Rows3Icon_SmartphoneIcon_StarIcon_User_lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(766792);
/* harmony import */ var _barrel_optimize_names_AirplayIcon_CheckIcon_ChevronDown_ChevronUp_EyeOff_GlobeIcon_GridIcon_HashIcon_HelpCircleIcon_ImageIcon_LanguagesIcon_ListIcon_ListOrderedIcon_MessageSquareTextIcon_MousePointerClickIcon_Rows3Icon_SmartphoneIcon_StarIcon_User_lucide_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(187201);
/* harmony import */ var _barrel_optimize_names_AirplayIcon_CheckIcon_ChevronDown_ChevronUp_EyeOff_GlobeIcon_GridIcon_HashIcon_HelpCircleIcon_ImageIcon_LanguagesIcon_ListIcon_ListOrderedIcon_MessageSquareTextIcon_MousePointerClickIcon_Rows3Icon_SmartphoneIcon_StarIcon_User_lucide_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(129170);
/* harmony import */ var _barrel_optimize_names_AirplayIcon_CheckIcon_ChevronDown_ChevronUp_EyeOff_GlobeIcon_GridIcon_HashIcon_HelpCircleIcon_ImageIcon_LanguagesIcon_ListIcon_ListOrderedIcon_MessageSquareTextIcon_MousePointerClickIcon_Rows3Icon_SmartphoneIcon_StarIcon_User_lucide_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(484667);
/* harmony import */ var _barrel_optimize_names_AirplayIcon_CheckIcon_ChevronDown_ChevronUp_EyeOff_GlobeIcon_GridIcon_HashIcon_HelpCircleIcon_ImageIcon_LanguagesIcon_ListIcon_ListOrderedIcon_MessageSquareTextIcon_MousePointerClickIcon_Rows3Icon_SmartphoneIcon_StarIcon_User_lucide_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(994413);
/* harmony import */ var _barrel_optimize_names_AirplayIcon_CheckIcon_ChevronDown_ChevronUp_EyeOff_GlobeIcon_GridIcon_HashIcon_HelpCircleIcon_ImageIcon_LanguagesIcon_ListIcon_ListOrderedIcon_MessageSquareTextIcon_MousePointerClickIcon_Rows3Icon_SmartphoneIcon_StarIcon_User_lucide_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(16568);
/* harmony import */ var _barrel_optimize_names_AirplayIcon_CheckIcon_ChevronDown_ChevronUp_EyeOff_GlobeIcon_GridIcon_HashIcon_HelpCircleIcon_ImageIcon_LanguagesIcon_ListIcon_ListOrderedIcon_MessageSquareTextIcon_MousePointerClickIcon_Rows3Icon_SmartphoneIcon_StarIcon_User_lucide_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(732995);
/* harmony import */ var _barrel_optimize_names_AirplayIcon_CheckIcon_ChevronDown_ChevronUp_EyeOff_GlobeIcon_GridIcon_HashIcon_HelpCircleIcon_ImageIcon_LanguagesIcon_ListIcon_ListOrderedIcon_MessageSquareTextIcon_MousePointerClickIcon_Rows3Icon_SmartphoneIcon_StarIcon_User_lucide_react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(774619);
/* harmony import */ var _barrel_optimize_names_AirplayIcon_CheckIcon_ChevronDown_ChevronUp_EyeOff_GlobeIcon_GridIcon_HashIcon_HelpCircleIcon_ImageIcon_LanguagesIcon_ListIcon_ListOrderedIcon_MessageSquareTextIcon_MousePointerClickIcon_Rows3Icon_SmartphoneIcon_StarIcon_User_lucide_react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(366947);
/* harmony import */ var _barrel_optimize_names_AirplayIcon_CheckIcon_ChevronDown_ChevronUp_EyeOff_GlobeIcon_GridIcon_HashIcon_HelpCircleIcon_ImageIcon_LanguagesIcon_ListIcon_ListOrderedIcon_MessageSquareTextIcon_MousePointerClickIcon_Rows3Icon_SmartphoneIcon_StarIcon_User_lucide_react__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(825784);
/* harmony import */ var _barrel_optimize_names_AirplayIcon_CheckIcon_ChevronDown_ChevronUp_EyeOff_GlobeIcon_GridIcon_HashIcon_HelpCircleIcon_ImageIcon_LanguagesIcon_ListIcon_ListOrderedIcon_MessageSquareTextIcon_MousePointerClickIcon_Rows3Icon_SmartphoneIcon_StarIcon_User_lucide_react__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(103635);
/* harmony import */ var _barrel_optimize_names_AirplayIcon_CheckIcon_ChevronDown_ChevronUp_EyeOff_GlobeIcon_GridIcon_HashIcon_HelpCircleIcon_ImageIcon_LanguagesIcon_ListIcon_ListOrderedIcon_MessageSquareTextIcon_MousePointerClickIcon_Rows3Icon_SmartphoneIcon_StarIcon_User_lucide_react__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(185861);
/* harmony import */ var _barrel_optimize_names_AirplayIcon_CheckIcon_ChevronDown_ChevronUp_EyeOff_GlobeIcon_GridIcon_HashIcon_HelpCircleIcon_ImageIcon_LanguagesIcon_ListIcon_ListOrderedIcon_MessageSquareTextIcon_MousePointerClickIcon_Rows3Icon_SmartphoneIcon_StarIcon_User_lucide_react__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(144960);
/* harmony import */ var _barrel_optimize_names_AirplayIcon_CheckIcon_ChevronDown_ChevronUp_EyeOff_GlobeIcon_GridIcon_HashIcon_HelpCircleIcon_ImageIcon_LanguagesIcon_ListIcon_ListOrderedIcon_MessageSquareTextIcon_MousePointerClickIcon_Rows3Icon_SmartphoneIcon_StarIcon_User_lucide_react__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(397903);
/* harmony import */ var _barrel_optimize_names_AirplayIcon_CheckIcon_ChevronDown_ChevronUp_EyeOff_GlobeIcon_GridIcon_HashIcon_HelpCircleIcon_ImageIcon_LanguagesIcon_ListIcon_ListOrderedIcon_MessageSquareTextIcon_MousePointerClickIcon_Rows3Icon_SmartphoneIcon_StarIcon_User_lucide_react__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(668382);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(891616);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _formbricks_lib_i18n_utils__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(864698);
/* harmony import */ var _formbricks_lib_utils_hooks_useClickOutside__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(593827);
/* harmony import */ var _formbricks_types_surveys_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(102379);
/* __next_internal_client_entry_do_not_use__ OptionsType,QuestionsComboBox auto */ 









var OptionsType = /*#__PURE__*/ function(OptionsType) {
    OptionsType["QUESTIONS"] = "Questions";
    OptionsType["TAGS"] = "Tags";
    OptionsType["ATTRIBUTES"] = "Attributes";
    OptionsType["OTHERS"] = "Other Filters";
    OptionsType["META"] = "Meta";
    OptionsType["HIDDEN_FIELDS"] = "Hidden Fields";
    return OptionsType;
}({});
const SelectedCommandItem = ({ label, questionType, type })=>{
    const getIconType = ()=>{
        switch(type){
            case "Questions":
                switch(questionType){
                    case _formbricks_types_surveys_types__WEBPACK_IMPORTED_MODULE_4__/* .TSurveyQuestionTypeEnum */ .wn.OpenText:
                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_AirplayIcon_CheckIcon_ChevronDown_ChevronUp_EyeOff_GlobeIcon_GridIcon_HashIcon_HelpCircleIcon_ImageIcon_LanguagesIcon_ListIcon_ListOrderedIcon_MessageSquareTextIcon_MousePointerClickIcon_Rows3Icon_SmartphoneIcon_StarIcon_User_lucide_react__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
                            width: 18,
                            height: 18,
                            className: "text-white"
                        });
                    case _formbricks_types_surveys_types__WEBPACK_IMPORTED_MODULE_4__/* .TSurveyQuestionTypeEnum */ .wn.Rating:
                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_AirplayIcon_CheckIcon_ChevronDown_ChevronUp_EyeOff_GlobeIcon_GridIcon_HashIcon_HelpCircleIcon_ImageIcon_LanguagesIcon_ListIcon_ListOrderedIcon_MessageSquareTextIcon_MousePointerClickIcon_Rows3Icon_SmartphoneIcon_StarIcon_User_lucide_react__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
                            width: 18,
                            height: 18,
                            className: "text-white"
                        });
                    case _formbricks_types_surveys_types__WEBPACK_IMPORTED_MODULE_4__/* .TSurveyQuestionTypeEnum */ .wn.CTA:
                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_AirplayIcon_CheckIcon_ChevronDown_ChevronUp_EyeOff_GlobeIcon_GridIcon_HashIcon_HelpCircleIcon_ImageIcon_LanguagesIcon_ListIcon_ListOrderedIcon_MessageSquareTextIcon_MousePointerClickIcon_Rows3Icon_SmartphoneIcon_StarIcon_User_lucide_react__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
                            width: 18,
                            height: 18,
                            className: "text-white"
                        });
                    case _formbricks_types_surveys_types__WEBPACK_IMPORTED_MODULE_4__/* .TSurveyQuestionTypeEnum */ .wn.OpenText:
                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_AirplayIcon_CheckIcon_ChevronDown_ChevronUp_EyeOff_GlobeIcon_GridIcon_HashIcon_HelpCircleIcon_ImageIcon_LanguagesIcon_ListIcon_ListOrderedIcon_MessageSquareTextIcon_MousePointerClickIcon_Rows3Icon_SmartphoneIcon_StarIcon_User_lucide_react__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
                            width: 18,
                            height: 18,
                            className: "text-white"
                        });
                    case _formbricks_types_surveys_types__WEBPACK_IMPORTED_MODULE_4__/* .TSurveyQuestionTypeEnum */ .wn.MultipleChoiceMulti:
                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_AirplayIcon_CheckIcon_ChevronDown_ChevronUp_EyeOff_GlobeIcon_GridIcon_HashIcon_HelpCircleIcon_ImageIcon_LanguagesIcon_ListIcon_ListOrderedIcon_MessageSquareTextIcon_MousePointerClickIcon_Rows3Icon_SmartphoneIcon_StarIcon_User_lucide_react__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
                            width: 18,
                            height: 18,
                            className: "text-white"
                        });
                    case _formbricks_types_surveys_types__WEBPACK_IMPORTED_MODULE_4__/* .TSurveyQuestionTypeEnum */ .wn.MultipleChoiceSingle:
                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_AirplayIcon_CheckIcon_ChevronDown_ChevronUp_EyeOff_GlobeIcon_GridIcon_HashIcon_HelpCircleIcon_ImageIcon_LanguagesIcon_ListIcon_ListOrderedIcon_MessageSquareTextIcon_MousePointerClickIcon_Rows3Icon_SmartphoneIcon_StarIcon_User_lucide_react__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
                            width: 18,
                            height: 18,
                            className: "text-white"
                        });
                    case _formbricks_types_surveys_types__WEBPACK_IMPORTED_MODULE_4__/* .TSurveyQuestionTypeEnum */ .wn.NPS:
                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_modules_ui_components_icons__WEBPACK_IMPORTED_MODULE_2__/* .NetPromoterScoreIcon */ .TP, {
                            width: 18,
                            height: 18,
                            className: "text-white"
                        });
                    case _formbricks_types_surveys_types__WEBPACK_IMPORTED_MODULE_4__/* .TSurveyQuestionTypeEnum */ .wn.Consent:
                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_AirplayIcon_CheckIcon_ChevronDown_ChevronUp_EyeOff_GlobeIcon_GridIcon_HashIcon_HelpCircleIcon_ImageIcon_LanguagesIcon_ListIcon_ListOrderedIcon_MessageSquareTextIcon_MousePointerClickIcon_Rows3Icon_SmartphoneIcon_StarIcon_User_lucide_react__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
                            width: 18,
                            height: 18,
                            className: "text-white"
                        });
                    case _formbricks_types_surveys_types__WEBPACK_IMPORTED_MODULE_4__/* .TSurveyQuestionTypeEnum */ .wn.PictureSelection:
                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_AirplayIcon_CheckIcon_ChevronDown_ChevronUp_EyeOff_GlobeIcon_GridIcon_HashIcon_HelpCircleIcon_ImageIcon_LanguagesIcon_ListIcon_ListOrderedIcon_MessageSquareTextIcon_MousePointerClickIcon_Rows3Icon_SmartphoneIcon_StarIcon_User_lucide_react__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
                            width: 18,
                            height: 18,
                            className: "text-white"
                        });
                    case _formbricks_types_surveys_types__WEBPACK_IMPORTED_MODULE_4__/* .TSurveyQuestionTypeEnum */ .wn.Matrix:
                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_AirplayIcon_CheckIcon_ChevronDown_ChevronUp_EyeOff_GlobeIcon_GridIcon_HashIcon_HelpCircleIcon_ImageIcon_LanguagesIcon_ListIcon_ListOrderedIcon_MessageSquareTextIcon_MousePointerClickIcon_Rows3Icon_SmartphoneIcon_StarIcon_User_lucide_react__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
                            width: 18,
                            height: 18,
                            className: "text-white"
                        });
                    case _formbricks_types_surveys_types__WEBPACK_IMPORTED_MODULE_4__/* .TSurveyQuestionTypeEnum */ .wn.Ranking:
                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_AirplayIcon_CheckIcon_ChevronDown_ChevronUp_EyeOff_GlobeIcon_GridIcon_HashIcon_HelpCircleIcon_ImageIcon_LanguagesIcon_ListIcon_ListOrderedIcon_MessageSquareTextIcon_MousePointerClickIcon_Rows3Icon_SmartphoneIcon_StarIcon_User_lucide_react__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
                            width: 18,
                            height: 18,
                            className: "text-white"
                        });
                }
            case "Attributes":
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_AirplayIcon_CheckIcon_ChevronDown_ChevronUp_EyeOff_GlobeIcon_GridIcon_HashIcon_HelpCircleIcon_ImageIcon_LanguagesIcon_ListIcon_ListOrderedIcon_MessageSquareTextIcon_MousePointerClickIcon_Rows3Icon_SmartphoneIcon_StarIcon_User_lucide_react__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {
                    width: 18,
                    height: 18,
                    className: "text-white"
                });
            case "Hidden Fields":
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_AirplayIcon_CheckIcon_ChevronDown_ChevronUp_EyeOff_GlobeIcon_GridIcon_HashIcon_HelpCircleIcon_ImageIcon_LanguagesIcon_ListIcon_ListOrderedIcon_MessageSquareTextIcon_MousePointerClickIcon_Rows3Icon_SmartphoneIcon_StarIcon_User_lucide_react__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, {
                    width: 18,
                    height: 18,
                    className: "text-white"
                });
            case "Meta":
                switch(label){
                    case "device":
                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_AirplayIcon_CheckIcon_ChevronDown_ChevronUp_EyeOff_GlobeIcon_GridIcon_HashIcon_HelpCircleIcon_ImageIcon_LanguagesIcon_ListIcon_ListOrderedIcon_MessageSquareTextIcon_MousePointerClickIcon_Rows3Icon_SmartphoneIcon_StarIcon_User_lucide_react__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A, {
                            width: 18,
                            height: 18,
                            className: "text-white"
                        });
                    case "os":
                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_AirplayIcon_CheckIcon_ChevronDown_ChevronUp_EyeOff_GlobeIcon_GridIcon_HashIcon_HelpCircleIcon_ImageIcon_LanguagesIcon_ListIcon_ListOrderedIcon_MessageSquareTextIcon_MousePointerClickIcon_Rows3Icon_SmartphoneIcon_StarIcon_User_lucide_react__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A, {
                            width: 18,
                            height: 18,
                            className: "text-white"
                        });
                    case "browser":
                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_AirplayIcon_CheckIcon_ChevronDown_ChevronUp_EyeOff_GlobeIcon_GridIcon_HashIcon_HelpCircleIcon_ImageIcon_LanguagesIcon_ListIcon_ListOrderedIcon_MessageSquareTextIcon_MousePointerClickIcon_Rows3Icon_SmartphoneIcon_StarIcon_User_lucide_react__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A, {
                            width: 18,
                            height: 18,
                            className: "text-white"
                        });
                    case "source":
                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_AirplayIcon_CheckIcon_ChevronDown_ChevronUp_EyeOff_GlobeIcon_GridIcon_HashIcon_HelpCircleIcon_ImageIcon_LanguagesIcon_ListIcon_ListOrderedIcon_MessageSquareTextIcon_MousePointerClickIcon_Rows3Icon_SmartphoneIcon_StarIcon_User_lucide_react__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A, {
                            width: 18,
                            height: 18,
                            className: "text-white"
                        });
                    case "action":
                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_AirplayIcon_CheckIcon_ChevronDown_ChevronUp_EyeOff_GlobeIcon_GridIcon_HashIcon_HelpCircleIcon_ImageIcon_LanguagesIcon_ListIcon_ListOrderedIcon_MessageSquareTextIcon_MousePointerClickIcon_Rows3Icon_SmartphoneIcon_StarIcon_User_lucide_react__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
                            width: 18,
                            height: 18,
                            className: "text-white"
                        });
                }
            case "Other Filters":
                switch(label){
                    case "Language":
                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_AirplayIcon_CheckIcon_ChevronDown_ChevronUp_EyeOff_GlobeIcon_GridIcon_HashIcon_HelpCircleIcon_ImageIcon_LanguagesIcon_ListIcon_ListOrderedIcon_MessageSquareTextIcon_MousePointerClickIcon_Rows3Icon_SmartphoneIcon_StarIcon_User_lucide_react__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, {
                            width: 18,
                            height: 18,
                            className: "text-white"
                        });
                }
            case "Tags":
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_AirplayIcon_CheckIcon_ChevronDown_ChevronUp_EyeOff_GlobeIcon_GridIcon_HashIcon_HelpCircleIcon_ImageIcon_LanguagesIcon_ListIcon_ListOrderedIcon_MessageSquareTextIcon_MousePointerClickIcon_Rows3Icon_SmartphoneIcon_StarIcon_User_lucide_react__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A, {
                    width: 18,
                    height: 18,
                    className: "text-white"
                });
        }
    };
    const getColor = ()=>{
        if (type === "Attributes") {
            return "bg-indigo-500";
        } else if (type === "Questions") {
            return "bg-brand-dark";
        } else if (type === "Tags") {
            return "bg-indigo-500";
        } else {
            return "bg-amber-500";
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex h-5 w-[12rem] items-center sm:w-4/5",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                className: (0,clsx__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A)("rounded-md p-1", getColor()),
                children: getIconType()
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                className: "ml-3 truncate text-sm text-slate-600",
                children: typeof label === "string" ? label : (0,_formbricks_lib_i18n_utils__WEBPACK_IMPORTED_MODULE_23__/* .getLocalizedValue */ .bT)(label, "default")
            })
        ]
    });
};
const QuestionsComboBox = ({ options, selected, onChangeValue })=>{
    const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_3__.useState(false);
    const { t } = (0,_tolgee_react__WEBPACK_IMPORTED_MODULE_24__/* .useTranslate */ .WD)();
    const commandRef = react__WEBPACK_IMPORTED_MODULE_3__.useRef(null);
    const [inputValue, setInputValue] = react__WEBPACK_IMPORTED_MODULE_3__.useState("");
    (0,_formbricks_lib_utils_hooks_useClickOutside__WEBPACK_IMPORTED_MODULE_25__/* .useClickOutside */ .L)(commandRef, ()=>setOpen(false));
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_modules_ui_components_command__WEBPACK_IMPORTED_MODULE_1__/* .Command */ .uB, {
        ref: commandRef,
        className: "h-10 overflow-visible bg-transparent hover:bg-slate-50",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                onClick: ()=>setOpen(true),
                className: "group flex cursor-pointer items-center justify-between rounded-md bg-white px-3 py-2 text-sm",
                children: [
                    !open && selected.hasOwnProperty("label") && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SelectedCommandItem, {
                        label: selected?.label,
                        type: selected?.type,
                        questionType: selected?.questionType
                    }),
                    (open || !selected.hasOwnProperty("label")) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_modules_ui_components_command__WEBPACK_IMPORTED_MODULE_1__/* .CommandInput */ .G7, {
                        value: inputValue,
                        onValueChange: setInputValue,
                        placeholder: t("common.search") + "...",
                        className: "h-5 border-none border-transparent p-0 shadow-none outline-0 ring-offset-transparent focus:border-none focus:border-transparent focus:shadow-none focus:outline-0 focus:ring-offset-transparent"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        children: open ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_AirplayIcon_CheckIcon_ChevronDown_ChevronUp_EyeOff_GlobeIcon_GridIcon_HashIcon_HelpCircleIcon_ImageIcon_LanguagesIcon_ListIcon_ListOrderedIcon_MessageSquareTextIcon_MousePointerClickIcon_Rows3Icon_SmartphoneIcon_StarIcon_User_lucide_react__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .A, {
                            className: "ml-2 h-4 w-4 opacity-50"
                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_AirplayIcon_CheckIcon_ChevronDown_ChevronUp_EyeOff_GlobeIcon_GridIcon_HashIcon_HelpCircleIcon_ImageIcon_LanguagesIcon_ListIcon_ListOrderedIcon_MessageSquareTextIcon_MousePointerClickIcon_Rows3Icon_SmartphoneIcon_StarIcon_User_lucide_react__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .A, {
                            className: "ml-2 h-4 w-4 opacity-50"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: "relative mt-2 h-full",
                children: open && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                    className: "animate-in bg-popover absolute top-0 z-50 max-h-52 w-full overflow-auto rounded-md bg-white outline-none",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_modules_ui_components_command__WEBPACK_IMPORTED_MODULE_1__/* .CommandList */ .oI, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_modules_ui_components_command__WEBPACK_IMPORTED_MODULE_1__/* .CommandEmpty */ .xL, {
                                children: t("common.no_result_found")
                            }),
                            options?.map((data)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: data?.option.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_modules_ui_components_command__WEBPACK_IMPORTED_MODULE_1__/* .CommandGroup */ .L$, {
                                        heading: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                            className: "text-sm font-normal text-slate-600",
                                            children: data.header
                                        }),
                                        children: data?.option?.map((o, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_modules_ui_components_command__WEBPACK_IMPORTED_MODULE_1__/* .CommandItem */ .h_, {
                                                onSelect: ()=>{
                                                    setInputValue("");
                                                    onChangeValue(o);
                                                    setOpen(false);
                                                },
                                                className: "cursor-pointer",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SelectedCommandItem, {
                                                    label: o.label,
                                                    type: o.type,
                                                    questionType: o.questionType
                                                })
                                            }, `${o.label}-${i}`))
                                    })
                                }))
                        ]
                    })
                })
            })
        ]
    });
};


/***/ }),

/***/ 291786:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QR: () => (/* binding */ getFormattedFilters),
/* harmony export */   ak: () => (/* binding */ getTodayDate),
/* harmony export */   nl: () => (/* binding */ generateQuestionAndFilterOptions)
/* harmony export */ });
/* harmony import */ var _app_app_environments_environmentId_surveys_surveyId_components_QuestionsComboBox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(267779);
/* harmony import */ var _formbricks_types_surveys_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(102379);


const conditionOptions = {
    openText: [
        "is"
    ],
    multipleChoiceSingle: [
        "Includes either"
    ],
    multipleChoiceMulti: [
        "Includes all",
        "Includes either"
    ],
    nps: [
        "Is equal to",
        "Is less than",
        "Is more than",
        "Submitted",
        "Skipped",
        "Includes either"
    ],
    rating: [
        "Is equal to",
        "Is less than",
        "Is more than",
        "Submitted",
        "Skipped"
    ],
    cta: [
        "is"
    ],
    tags: [
        "is"
    ],
    languages: [
        "Equals",
        "Not equals"
    ],
    pictureSelection: [
        "Includes all",
        "Includes either"
    ],
    userAttributes: [
        "Equals",
        "Not equals"
    ],
    consent: [
        "is"
    ],
    matrix: [
        ""
    ],
    address: [
        "is"
    ],
    contactInfo: [
        "is"
    ],
    ranking: [
        "is"
    ]
};
const filterOptions = {
    openText: [
        "Filled out",
        "Skipped"
    ],
    rating: [
        "1",
        "2",
        "3",
        "4",
        "5"
    ],
    nps: [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10"
    ],
    cta: [
        "Clicked",
        "Dismissed"
    ],
    tags: [
        "Applied",
        "Not applied"
    ],
    consent: [
        "Accepted",
        "Dismissed"
    ],
    address: [
        "Filled out",
        "Skipped"
    ],
    contactInfo: [
        "Filled out",
        "Skipped"
    ],
    ranking: [
        "Filled out",
        "Skipped"
    ]
};
// creating the options for the filtering to be selected there are 4 types questions, attributes, tags and metadata
const generateQuestionAndFilterOptions = (survey, environmentTags, attributes, meta, hiddenFields)=>{
    let questionOptions = [];
    let questionFilterOptions = [];
    let questionsOptions = [];
    survey.questions.forEach((q)=>{
        if (Object.keys(conditionOptions).includes(q.type)) {
            questionsOptions.push({
                label: q.headline,
                questionType: q.type,
                type: _app_app_environments_environmentId_surveys_surveyId_components_QuestionsComboBox__WEBPACK_IMPORTED_MODULE_0__/* .OptionsType */ .T.QUESTIONS,
                id: q.id
            });
        }
    });
    questionOptions = [
        ...questionOptions,
        {
            header: _app_app_environments_environmentId_surveys_surveyId_components_QuestionsComboBox__WEBPACK_IMPORTED_MODULE_0__/* .OptionsType */ .T.QUESTIONS,
            option: questionsOptions
        }
    ];
    survey.questions.forEach((q)=>{
        if (Object.keys(conditionOptions).includes(q.type)) {
            if (q.type === _formbricks_types_surveys_types__WEBPACK_IMPORTED_MODULE_1__/* .TSurveyQuestionTypeEnum */ .wn.MultipleChoiceSingle) {
                questionFilterOptions.push({
                    type: q.type,
                    filterOptions: conditionOptions[q.type],
                    filterComboBoxOptions: q?.choices ? q?.choices?.map((c)=>c?.label) : [
                        ""
                    ],
                    id: q.id
                });
            } else if (q.type === _formbricks_types_surveys_types__WEBPACK_IMPORTED_MODULE_1__/* .TSurveyQuestionTypeEnum */ .wn.MultipleChoiceMulti) {
                questionFilterOptions.push({
                    type: q.type,
                    filterOptions: conditionOptions[q.type],
                    filterComboBoxOptions: q?.choices ? q?.choices?.filter((c)=>c.id !== "other")?.map((c)=>c?.label) : [
                        ""
                    ],
                    id: q.id
                });
            } else if (q.type === _formbricks_types_surveys_types__WEBPACK_IMPORTED_MODULE_1__/* .TSurveyQuestionTypeEnum */ .wn.PictureSelection) {
                questionFilterOptions.push({
                    type: q.type,
                    filterOptions: conditionOptions[q.type],
                    filterComboBoxOptions: q?.choices ? q?.choices?.map((_, idx)=>`Picture ${idx + 1}`) : [
                        ""
                    ],
                    id: q.id
                });
            } else if (q.type === _formbricks_types_surveys_types__WEBPACK_IMPORTED_MODULE_1__/* .TSurveyQuestionTypeEnum */ .wn.Matrix) {
                questionFilterOptions.push({
                    type: q.type,
                    filterOptions: q.rows.flatMap((row)=>Object.values(row)),
                    filterComboBoxOptions: q.columns.flatMap((column)=>Object.values(column)),
                    id: q.id
                });
            } else {
                questionFilterOptions.push({
                    type: q.type,
                    filterOptions: conditionOptions[q.type],
                    filterComboBoxOptions: filterOptions[q.type],
                    id: q.id
                });
            }
        }
    });
    const tagsOptions = environmentTags?.map((t)=>{
        return {
            label: t.name,
            type: _app_app_environments_environmentId_surveys_surveyId_components_QuestionsComboBox__WEBPACK_IMPORTED_MODULE_0__/* .OptionsType */ .T.TAGS,
            id: t.id
        };
    });
    if (tagsOptions && tagsOptions?.length > 0) {
        questionOptions = [
            ...questionOptions,
            {
                header: _app_app_environments_environmentId_surveys_surveyId_components_QuestionsComboBox__WEBPACK_IMPORTED_MODULE_0__/* .OptionsType */ .T.TAGS,
                option: tagsOptions
            }
        ];
        environmentTags?.forEach((t)=>{
            questionFilterOptions.push({
                type: "Tags",
                filterOptions: conditionOptions.tags,
                filterComboBoxOptions: filterOptions.tags,
                id: t.id
            });
        });
    }
    if (attributes) {
        questionOptions = [
            ...questionOptions,
            {
                header: _app_app_environments_environmentId_surveys_surveyId_components_QuestionsComboBox__WEBPACK_IMPORTED_MODULE_0__/* .OptionsType */ .T.ATTRIBUTES,
                option: Object.keys(attributes).map((a)=>{
                    return {
                        label: a,
                        type: _app_app_environments_environmentId_surveys_surveyId_components_QuestionsComboBox__WEBPACK_IMPORTED_MODULE_0__/* .OptionsType */ .T.ATTRIBUTES,
                        id: a
                    };
                })
            }
        ];
        Object.keys(attributes).forEach((a)=>{
            questionFilterOptions.push({
                type: "Attributes",
                filterOptions: conditionOptions.userAttributes,
                filterComboBoxOptions: attributes[a],
                id: a
            });
        });
    }
    if (meta) {
        questionOptions = [
            ...questionOptions,
            {
                header: _app_app_environments_environmentId_surveys_surveyId_components_QuestionsComboBox__WEBPACK_IMPORTED_MODULE_0__/* .OptionsType */ .T.META,
                option: Object.keys(meta).map((m)=>{
                    return {
                        label: m,
                        type: _app_app_environments_environmentId_surveys_surveyId_components_QuestionsComboBox__WEBPACK_IMPORTED_MODULE_0__/* .OptionsType */ .T.META,
                        id: m
                    };
                })
            }
        ];
        Object.keys(meta).forEach((m)=>{
            questionFilterOptions.push({
                type: "Meta",
                filterOptions: [
                    "Equals",
                    "Not equals"
                ],
                filterComboBoxOptions: meta[m],
                id: m
            });
        });
    }
    if (hiddenFields) {
        questionOptions = [
            ...questionOptions,
            {
                header: _app_app_environments_environmentId_surveys_surveyId_components_QuestionsComboBox__WEBPACK_IMPORTED_MODULE_0__/* .OptionsType */ .T.HIDDEN_FIELDS,
                option: Object.keys(hiddenFields).map((hiddenField)=>{
                    return {
                        label: hiddenField,
                        type: _app_app_environments_environmentId_surveys_surveyId_components_QuestionsComboBox__WEBPACK_IMPORTED_MODULE_0__/* .OptionsType */ .T.HIDDEN_FIELDS,
                        id: hiddenField
                    };
                })
            }
        ];
        Object.keys(hiddenFields).forEach((hiddenField)=>{
            questionFilterOptions.push({
                type: "Hidden Fields",
                filterOptions: [
                    "Equals",
                    "Not equals"
                ],
                filterComboBoxOptions: hiddenFields[hiddenField],
                id: hiddenField
            });
        });
    }
    let languageQuestion = [];
    //can be extended to include more properties
    if (survey.languages?.length > 0) {
        languageQuestion.push({
            label: "Language",
            type: _app_app_environments_environmentId_surveys_surveyId_components_QuestionsComboBox__WEBPACK_IMPORTED_MODULE_0__/* .OptionsType */ .T.OTHERS,
            id: "language"
        });
        const languageOptions = survey.languages.map((sl)=>sl.language.code);
        questionFilterOptions.push({
            type: _app_app_environments_environmentId_surveys_surveyId_components_QuestionsComboBox__WEBPACK_IMPORTED_MODULE_0__/* .OptionsType */ .T.OTHERS,
            filterOptions: conditionOptions.languages,
            filterComboBoxOptions: languageOptions,
            id: "language"
        });
    }
    questionOptions = [
        ...questionOptions,
        {
            header: _app_app_environments_environmentId_surveys_surveyId_components_QuestionsComboBox__WEBPACK_IMPORTED_MODULE_0__/* .OptionsType */ .T.OTHERS,
            option: languageQuestion
        }
    ];
    return {
        questionOptions: [
            ...questionOptions
        ],
        questionFilterOptions: [
            ...questionFilterOptions
        ]
    };
};
// get the formatted filter expression to fetch filtered responses
const getFormattedFilters = (survey, selectedFilter, dateRange)=>{
    const filters = {};
    const questions = [];
    const tags = [];
    const attributes = [];
    const others = [];
    const meta = [];
    const hiddenFields = [];
    selectedFilter.filter.forEach((filter)=>{
        if (filter.questionType?.type === "Questions") {
            questions.push(filter);
        } else if (filter.questionType?.type === "Tags") {
            tags.push(filter);
        } else if (filter.questionType?.type === "Attributes") {
            attributes.push(filter);
        } else if (filter.questionType?.type === "Other Filters") {
            others.push(filter);
        } else if (filter.questionType?.type === "Meta") {
            meta.push(filter);
        } else if (filter.questionType?.type === "Hidden Fields") {
            hiddenFields.push(filter);
        }
    });
    // for completed responses
    if (selectedFilter.onlyComplete) {
        filters["finished"] = true;
    }
    // for date range responses
    if (dateRange.from && dateRange.to) {
        filters["createdAt"] = {
            min: dateRange.from,
            max: dateRange.to
        };
    }
    // for tags
    if (tags.length) {
        filters["tags"] = {
            applied: [],
            notApplied: []
        };
        tags.forEach((tag)=>{
            if (tag.filterType.filterComboBoxValue === "Applied") {
                filters.tags?.applied?.push(tag.questionType.label ?? "");
            } else {
                filters.tags?.notApplied?.push(tag.questionType.label ?? "");
            }
        });
    }
    // for questions
    if (questions.length) {
        questions.forEach(({ filterType, questionType })=>{
            if (!filters.data) filters.data = {};
            switch(questionType.questionType){
                case _formbricks_types_surveys_types__WEBPACK_IMPORTED_MODULE_1__/* .TSurveyQuestionTypeEnum */ .wn.OpenText:
                case _formbricks_types_surveys_types__WEBPACK_IMPORTED_MODULE_1__/* .TSurveyQuestionTypeEnum */ .wn.Address:
                case _formbricks_types_surveys_types__WEBPACK_IMPORTED_MODULE_1__/* .TSurveyQuestionTypeEnum */ .wn.ContactInfo:
                    {
                        if (filterType.filterComboBoxValue === "Filled out") {
                            filters.data[questionType.id ?? ""] = {
                                op: "filledOut"
                            };
                        } else if (filterType.filterComboBoxValue === "Skipped") {
                            filters.data[questionType.id ?? ""] = {
                                op: "skipped"
                            };
                        }
                        break;
                    }
                case _formbricks_types_surveys_types__WEBPACK_IMPORTED_MODULE_1__/* .TSurveyQuestionTypeEnum */ .wn.Ranking:
                    {
                        if (filterType.filterComboBoxValue === "Filled out") {
                            filters.data[questionType.id ?? ""] = {
                                op: "submitted"
                            };
                        } else if (filterType.filterComboBoxValue === "Skipped") {
                            filters.data[questionType.id ?? ""] = {
                                op: "skipped"
                            };
                        }
                        break;
                    }
                case _formbricks_types_surveys_types__WEBPACK_IMPORTED_MODULE_1__/* .TSurveyQuestionTypeEnum */ .wn.MultipleChoiceSingle:
                case _formbricks_types_surveys_types__WEBPACK_IMPORTED_MODULE_1__/* .TSurveyQuestionTypeEnum */ .wn.MultipleChoiceMulti:
                    {
                        if (filterType.filterValue === "Includes either") {
                            filters.data[questionType.id ?? ""] = {
                                op: "includesOne",
                                value: filterType.filterComboBoxValue
                            };
                        } else if (filterType.filterValue === "Includes all") {
                            filters.data[questionType.id ?? ""] = {
                                op: "includesAll",
                                value: filterType.filterComboBoxValue
                            };
                        }
                        break;
                    }
                case _formbricks_types_surveys_types__WEBPACK_IMPORTED_MODULE_1__/* .TSurveyQuestionTypeEnum */ .wn.NPS:
                case _formbricks_types_surveys_types__WEBPACK_IMPORTED_MODULE_1__/* .TSurveyQuestionTypeEnum */ .wn.Rating:
                    {
                        if (filterType.filterValue === "Is equal to") {
                            filters.data[questionType.id ?? ""] = {
                                op: "equals",
                                value: parseInt(filterType.filterComboBoxValue)
                            };
                        } else if (filterType.filterValue === "Is less than") {
                            filters.data[questionType.id ?? ""] = {
                                op: "lessThan",
                                value: parseInt(filterType.filterComboBoxValue)
                            };
                        } else if (filterType.filterValue === "Is more than") {
                            filters.data[questionType.id ?? ""] = {
                                op: "greaterThan",
                                value: parseInt(filterType.filterComboBoxValue)
                            };
                        } else if (filterType.filterValue === "Submitted") {
                            filters.data[questionType.id ?? ""] = {
                                op: "submitted"
                            };
                        } else if (filterType.filterValue === "Skipped") {
                            filters.data[questionType.id ?? ""] = {
                                op: "skipped"
                            };
                        } else if (filterType.filterValue === "Includes either") {
                            filters.data[questionType.id ?? ""] = {
                                op: "includesOne",
                                value: filterType.filterComboBoxValue.map((value)=>parseInt(value))
                            };
                        }
                        break;
                    }
                case _formbricks_types_surveys_types__WEBPACK_IMPORTED_MODULE_1__/* .TSurveyQuestionTypeEnum */ .wn.CTA:
                    {
                        if (filterType.filterComboBoxValue === "Clicked") {
                            filters.data[questionType.id ?? ""] = {
                                op: "clicked"
                            };
                        } else if (filterType.filterComboBoxValue === "Dismissed") {
                            filters.data[questionType.id ?? ""] = {
                                op: "skipped"
                            };
                        }
                        break;
                    }
                case _formbricks_types_surveys_types__WEBPACK_IMPORTED_MODULE_1__/* .TSurveyQuestionTypeEnum */ .wn.Consent:
                    {
                        if (filterType.filterComboBoxValue === "Accepted") {
                            filters.data[questionType.id ?? ""] = {
                                op: "accepted"
                            };
                        } else if (filterType.filterComboBoxValue === "Dismissed") {
                            filters.data[questionType.id ?? ""] = {
                                op: "skipped"
                            };
                        }
                        break;
                    }
                case _formbricks_types_surveys_types__WEBPACK_IMPORTED_MODULE_1__/* .TSurveyQuestionTypeEnum */ .wn.PictureSelection:
                    {
                        const questionId = questionType.id ?? "";
                        const question = survey.questions.find((q)=>q.id === questionId);
                        if (question?.type !== _formbricks_types_surveys_types__WEBPACK_IMPORTED_MODULE_1__/* .TSurveyQuestionTypeEnum */ .wn.PictureSelection || !Array.isArray(filterType.filterComboBoxValue)) {
                            return;
                        }
                        const selectedOptions = filterType.filterComboBoxValue.map((option)=>{
                            const index = parseInt(option.split(" ")[1]);
                            return question?.choices[index - 1].id;
                        });
                        if (filterType.filterValue === "Includes all") {
                            filters.data[questionId] = {
                                op: "includesAll",
                                value: selectedOptions
                            };
                        } else if (filterType.filterValue === "Includes either") {
                            filters.data[questionId] = {
                                op: "includesOne",
                                value: selectedOptions
                            };
                        }
                        break;
                    }
                case _formbricks_types_surveys_types__WEBPACK_IMPORTED_MODULE_1__/* .TSurveyQuestionTypeEnum */ .wn.Matrix:
                    {
                        if (filterType.filterValue && filterType.filterComboBoxValue && typeof filterType.filterComboBoxValue === "string") {
                            filters.data[questionType.id ?? ""] = {
                                op: "matrix",
                                value: {
                                    [filterType.filterValue]: filterType.filterComboBoxValue
                                }
                            };
                        }
                        break;
                    }
            }
        });
    }
    // for hidden fields
    if (hiddenFields.length) {
        hiddenFields.forEach(({ filterType, questionType })=>{
            if (!filters.data) filters.data = {};
            if (!filterType.filterComboBoxValue) return;
            if (filterType.filterValue === "Equals") {
                filters.data[questionType.label ?? ""] = {
                    op: "equals",
                    value: filterType.filterComboBoxValue
                };
            } else if (filterType.filterValue === "Not equals") {
                filters.data[questionType.label ?? ""] = {
                    op: "notEquals",
                    value: filterType.filterComboBoxValue
                };
            }
        });
    }
    // for attributes
    if (attributes.length) {
        attributes.forEach(({ filterType, questionType })=>{
            if (!filters.contactAttributes) filters.contactAttributes = {};
            if (!filterType.filterComboBoxValue) return;
            if (filterType.filterValue === "Equals") {
                filters.contactAttributes[questionType.label ?? ""] = {
                    op: "equals",
                    value: filterType.filterComboBoxValue
                };
            } else if (filterType.filterValue === "Not equals") {
                filters.contactAttributes[questionType.label ?? ""] = {
                    op: "notEquals",
                    value: filterType.filterComboBoxValue
                };
            }
        });
    }
    // for others
    if (others.length) {
        others.forEach(({ filterType, questionType })=>{
            if (!filters.others) filters.others = {};
            if (!filterType.filterComboBoxValue) return;
            if (filterType.filterValue === "Equals") {
                filters.others[questionType.label ?? ""] = {
                    op: "equals",
                    value: filterType.filterComboBoxValue
                };
            } else if (filterType.filterValue === "Not equals") {
                filters.others[questionType.label ?? ""] = {
                    op: "notEquals",
                    value: filterType.filterComboBoxValue
                };
            }
        });
    }
    // for meta
    if (meta.length) {
        meta.forEach(({ filterType, questionType })=>{
            if (!filters.meta) filters.meta = {};
            if (!filterType.filterComboBoxValue) return;
            if (filterType.filterValue === "Equals") {
                filters.meta[questionType.label ?? ""] = {
                    op: "equals",
                    value: filterType.filterComboBoxValue
                };
            } else if (filterType.filterValue === "Not equals") {
                filters.meta[questionType.label ?? ""] = {
                    op: "notEquals",
                    value: filterType.filterComboBoxValue
                };
            }
        });
    }
    return filters;
};
// get the today date with full hours
const getTodayDate = ()=>{
    const date = new Date();
    date.setHours(23, 59, 59, 999);
    return date;
};


/***/ }),

/***/ 454319:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G7: () => (/* binding */ CommandInput),
/* harmony export */   L$: () => (/* binding */ CommandGroup),
/* harmony export */   fx: () => (/* binding */ CommandSeparator),
/* harmony export */   h_: () => (/* binding */ CommandItem),
/* harmony export */   oI: () => (/* binding */ CommandList),
/* harmony export */   uB: () => (/* binding */ Command),
/* harmony export */   xL: () => (/* binding */ CommandEmpty)
/* harmony export */ });
/* unused harmony exports CommandDialog, CommandShortcut */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(642725);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_ui_components_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(728364);
/* harmony import */ var cmdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(153779);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(891616);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(983773);
/* __next_internal_client_entry_do_not_use__ Command,CommandDialog,CommandEmpty,CommandGroup,CommandInput,CommandItem,CommandList,CommandSeparator,CommandShortcut auto */ 




const Command = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(cmdk__WEBPACK_IMPORTED_MODULE_3__/* .Command */ .uB, {
        ref: ref,
        className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_4__.cn)("bg-popover text-popover-foreground flex h-full w-full flex-col overflow-auto rounded-md", className),
        ...props
    }));
Command.displayName = cmdk__WEBPACK_IMPORTED_MODULE_3__/* .Command */ .uB.displayName;
const CommandDialog = ({ children, ...props })=>{
    return /*#__PURE__*/ _jsx(Dialog, {
        ...props,
        children: /*#__PURE__*/ _jsx(DialogContent, {
            className: "overflow-hidden p-0 shadow-2xl",
            children: /*#__PURE__*/ _jsx(Command, {
                className: "[&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5",
                children: children
            })
        })
    });
};
const CommandInput = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "flex items-center",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(cmdk__WEBPACK_IMPORTED_MODULE_3__/* .Command */ .uB.Input, {
            ref: ref,
            className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_4__.cn)("placeholder:text-muted-foreground flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none disabled:cursor-not-allowed disabled:opacity-50", className),
            ...props
        })
    }));
CommandInput.displayName = cmdk__WEBPACK_IMPORTED_MODULE_3__/* .Command */ .uB.Input.displayName;
const CommandList = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(cmdk__WEBPACK_IMPORTED_MODULE_3__/* .Command */ .uB.List, {
        ref: ref,
        className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_4__.cn)("max-h-full overflow-y-auto overflow-x-hidden", className),
        ...props
    }));
CommandList.displayName = cmdk__WEBPACK_IMPORTED_MODULE_3__/* .Command */ .uB.List.displayName;
const CommandEmpty = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2__.forwardRef((props, ref)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(cmdk__WEBPACK_IMPORTED_MODULE_3__/* .Command */ .uB.Empty, {
        ref: ref,
        className: "py-6 text-center",
        ...props
    }));
CommandEmpty.displayName = cmdk__WEBPACK_IMPORTED_MODULE_3__/* .Command */ .uB.Empty.displayName;
const CommandGroup = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(cmdk__WEBPACK_IMPORTED_MODULE_3__/* .Command */ .uB.Group, {
        ref: ref,
        className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_4__.cn)("text-foreground overflow-hidden [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-semibold [&_[cmdk-group-heading]]:text-slate-500", className),
        ...props
    }));
CommandGroup.displayName = cmdk__WEBPACK_IMPORTED_MODULE_3__/* .Command */ .uB.Group.displayName;
const CommandSeparator = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(cmdk__WEBPACK_IMPORTED_MODULE_3__/* .Command */ .uB.Separator, {
        ref: ref,
        className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_4__.cn)("bg-border -mx-1 h-px", className),
        ...props
    }));
CommandSeparator.displayName = cmdk__WEBPACK_IMPORTED_MODULE_3__/* .Command */ .uB.Separator.displayName;
const CommandItem = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(cmdk__WEBPACK_IMPORTED_MODULE_3__/* .Command */ .uB.Item, {
        ref: ref,
        className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_4__.cn)("relative flex cursor-default select-none items-center rounded-md px-2 py-1.5 text-sm font-medium text-slate-700 outline-none hover:bg-slate-100 data-[disabled='true']:pointer-events-none data-[disabled='true']:opacity-50", className),
        ...props
    }));
CommandItem.displayName = cmdk__WEBPACK_IMPORTED_MODULE_3__/* .Command */ .uB.Item.displayName;
const CommandShortcut = ({ className, ...props })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
        className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_4__.cn)("text-muted-foreground ml-auto text-xs tracking-widest", className),
        ...props
    });
};
CommandShortcut.displayName = "CommandShortcut";



/***/ }),

/***/ 728364:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cf: () => (/* binding */ DialogContent),
/* harmony export */   L3: () => (/* binding */ DialogTitle),
/* harmony export */   lG: () => (/* binding */ Dialog),
/* harmony export */   rr: () => (/* binding */ DialogDescription)
/* harmony export */ });
/* unused harmony exports DialogFooter, DialogHeader, DialogTrigger */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(642725);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(374560);
/* harmony import */ var _barrel_optimize_names_X_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(673766);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(891616);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(983773);
/* __next_internal_client_entry_do_not_use__ Dialog,DialogContent,DialogDescription,DialogFooter,DialogHeader,DialogTitle,DialogTrigger auto */ 




const Dialog = _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__/* .Root */ .bL;
const DialogTrigger = _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__/* .Trigger */ .l9;
const DialogPortal = ({ children, ...props })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__/* .Portal */ .ZL, {
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            className: "fixed inset-0 z-50 flex items-start justify-center sm:items-center",
            children: children
        })
    });
DialogPortal.displayName = _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__/* .Portal */ .ZL.displayName;
const DialogOverlay = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__/* .Overlay */ .hJ, {
        ref: ref,
        className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_3__.cn)("bg-background/80 data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:fade-in fixed inset-0 z-50 backdrop-blur-sm transition-all duration-100", className),
        ...props
    }));
DialogOverlay.displayName = _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__/* .Overlay */ .hJ.displayName;
const DialogContent = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, children, hideCloseButton, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(DialogPortal, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DialogOverlay, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__/* .Content */ .UC, {
                ref: ref,
                className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_3__.cn)("bg-background animate-in data-[state=open]:fade-in-90 data-[state=open]:slide-in-from-bottom-10 sm:zoom-in-90 data-[state=open]:sm:slide-in-from-bottom-0 fixed z-50 grid gap-4 rounded-b-lg border p-6 shadow-lg sm:rounded-lg", className),
                ...props,
                children: [
                    children,
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__/* .Close */ .bm, {
                        className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none",
                        children: [
                            !hideCloseButton ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_X_lucide_react__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
                                className: "h-4 w-4"
                            }) : null,
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                className: "sr-only",
                                children: "Close"
                            })
                        ]
                    })
                ]
            })
        ]
    }));
DialogContent.displayName = _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__/* .Content */ .UC.displayName;
const DialogHeader = ({ className, ...props })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_3__.cn)("flex flex-col space-y-1.5 text-center sm:text-left", className),
        ...props
    });
DialogHeader.displayName = "DialogHeader";
const DialogFooter = ({ className, ...props })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_3__.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
        ...props
    });
DialogFooter.displayName = "DialogFooter";
const DialogTitle = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__/* .Title */ .hE, {
        ref: ref,
        className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_3__.cn)("text-lg font-semibold leading-none tracking-tight", className),
        ...props
    }));
DialogTitle.displayName = _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__/* .Title */ .hE.displayName;
const DialogDescription = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__/* .Description */ .VY, {
        ref: ref,
        className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_3__.cn)("text-muted-foreground text-sm", className),
        ...props
    }));
DialogDescription.displayName = _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__/* .Description */ .VY.displayName;



/***/ }),

/***/ 163701:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Bc: () => (/* binding */ TooltipProvider),
/* harmony export */   ZI: () => (/* binding */ TooltipContent),
/* harmony export */   k$: () => (/* binding */ TooltipTrigger),
/* harmony export */   m_: () => (/* binding */ Tooltip),
/* harmony export */   rE: () => (/* binding */ TooltipRenderer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(642725);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(524899);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(891616);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(983773);
/* __next_internal_client_entry_do_not_use__ Tooltip,TooltipTrigger,TooltipContent,TooltipProvider,TooltipRenderer auto */ 



const TooltipProvider = _radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_2__/* .Provider */ .Kq;
const Tooltip = ({ ...props })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_2__/* .Root */ .bL, {
        ...props
    });
Tooltip.displayName = _radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_2__/* .Tooltip */ .m_.displayName;
const TooltipTrigger = _radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_2__/* .Trigger */ .l9;
const TooltipContent = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, sideOffset = 4, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_2__/* .Content */ .UC, {
        ref: ref,
        sideOffset: sideOffset,
        className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_3__.cn)("animate-in fade-in-50 data-[side=bottom]:slide-in-from-top-1 data-[side=top]:slide-in-from-bottom-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 z-50 overflow-hidden rounded-md border border-slate-100 bg-white px-3 py-1.5 text-sm text-slate-700 shadow-md", className),
        ...props
    }));
TooltipContent.displayName = _radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_2__/* .Content */ .UC.displayName;

const TooltipRenderer = (props)=>{
    const { children, shouldRender = true, tooltipContent, className, triggerClass } = props;
    if (shouldRender) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TooltipProvider, {
            delayDuration: 0,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Tooltip, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TooltipTrigger, {
                        asChild: true,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                            className: triggerClass,
                            children: children
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TooltipContent, {
                        className: className,
                        children: tooltipContent
                    })
                ]
            })
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: children
    });
};


/***/ }),

/***/ 593827:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ useClickOutside)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(891616);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

// Improved version of https://usehooks.com/useOnClickOutside/
const useClickOutside = (ref, handler)=>{
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        let startedInside = false;
        let startedWhenMounted = false;
        const listener = (event)=>{
            // Do nothing if `mousedown` or `touchstart` started inside ref element
            if (startedInside || !startedWhenMounted) return;
            // Do nothing if clicking ref's element or descendent elements
            if (!ref.current || ref.current.contains(event.target)) return;
            handler(event);
        };
        const validateEventStart = (event)=>{
            startedWhenMounted = ref.current !== null;
            startedInside = ref.current !== null && ref.current.contains(event.target);
        };
        document.addEventListener("mousedown", validateEventStart);
        document.addEventListener("touchstart", validateEventStart);
        document.addEventListener("click", listener);
        return ()=>{
            document.removeEventListener("mousedown", validateEventStart);
            document.removeEventListener("touchstart", validateEventStart);
            document.removeEventListener("click", listener);
        };
    }, [
        ref,
        handler
    ]);
};


/***/ }),

/***/ 319053:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResponseFilterProvider: () => (/* binding */ ResponseFilterProvider)
/* harmony export */ });
/* unused harmony exports ResponseFilterContext, useResponseFilter */
/* harmony import */ var react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(672771);
/* harmony import */ var react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_0__);

const ResponseFilterContext = (0,react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_0__.registerClientReference)(
function() { throw new Error("Attempted to call ResponseFilterContext() from the server but ResponseFilterContext is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component."); },
"/Users/kdy1/projects/formbricks/apps/web/app/(app)/environments/[environmentId]/components/ResponseFilterContext.tsx",
"ResponseFilterContext",
);const ResponseFilterProvider = (0,react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_0__.registerClientReference)(
function() { throw new Error("Attempted to call ResponseFilterProvider() from the server but ResponseFilterProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component."); },
"/Users/kdy1/projects/formbricks/apps/web/app/(app)/environments/[environmentId]/components/ResponseFilterContext.tsx",
"ResponseFilterProvider",
);const useResponseFilter = (0,react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_0__.registerClientReference)(
function() { throw new Error("Attempted to call useResponseFilter() from the server but useResponseFilter is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component."); },
"/Users/kdy1/projects/formbricks/apps/web/app/(app)/environments/[environmentId]/components/ResponseFilterContext.tsx",
"useResponseFilter",
);

/***/ }),

/***/ 729455:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ checkAuthorizationUpdated)
/* harmony export */ });
/* harmony import */ var _modules_ee_teams_lib_roles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(562147);
/* harmony import */ var next_safe_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(717921);
/* harmony import */ var _formbricks_lib_membership_hooks_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(895856);
/* harmony import */ var _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(207798);




const formatErrors = (issues)=>{
    return {
        ...issues.reduce((acc, issue)=>{
            acc[issue.path.join(".")] = {
                _errors: [
                    issue.message
                ]
            };
            return acc;
        }, {})
    };
};
const teamPermissionWeight = {
    read: 1,
    readWrite: 2,
    manage: 3
};
const teamRoleWeight = {
    contributor: 1,
    admin: 2
};
const checkAuthorizationUpdated = async ({ userId, organizationId, access })=>{
    const role = await (0,_formbricks_lib_membership_hooks_actions__WEBPACK_IMPORTED_MODULE_2__/* .getMembershipRole */ .J)(userId, organizationId);
    for (const accessItem of access){
        if (accessItem.type === "organization") {
            if (accessItem.schema) {
                const resultSchema = accessItem.schema.strict();
                const parsedResult = resultSchema.safeParse(accessItem.data);
                if (!parsedResult.success) {
                    // @ts-expect-error -- TODO: match dynamic next-safe-action types
                    return (0,next_safe_action__WEBPACK_IMPORTED_MODULE_1__/* .returnValidationErrors */ .Di)(resultSchema, formatErrors(parsedResult.error.issues));
                }
            }
            if (accessItem.roles.includes(role)) {
                return true;
            }
        } else {
            if (accessItem.type === "projectTeam") {
                const projectPermission = await (0,_modules_ee_teams_lib_roles__WEBPACK_IMPORTED_MODULE_0__/* .getProjectPermissionByUserId */ ._)(userId, accessItem.projectId);
                if (!projectPermission || accessItem.minPermission !== undefined && teamPermissionWeight[projectPermission] < teamPermissionWeight[accessItem.minPermission]) {
                    continue;
                }
            } else {
                const teamRole = await (0,_modules_ee_teams_lib_roles__WEBPACK_IMPORTED_MODULE_0__/* .getTeamRoleByTeamIdUserId */ .b)(accessItem.teamId, userId);
                if (!teamRole || accessItem.minPermission !== undefined && teamRoleWeight[teamRole] < teamRoleWeight[accessItem.minPermission]) {
                    continue;
                }
            }
            return true;
        }
    }
    throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_3__/* .AuthorizationError */ .yi("Not authorized");
};


/***/ }),

/***/ 725322:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


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

/***/ 562147:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ getProjectPermissionByUserId),
/* harmony export */   b: () => (/* binding */ getTeamRoleByTeamIdUserId)
/* harmony export */ });
/* harmony import */ var _lib_cache_team__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(753304);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(896330);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(645625);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _formbricks_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(482859);
/* harmony import */ var _formbricks_lib_cache__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(48165);
/* harmony import */ var _formbricks_lib_membership_cache__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(920318);
/* harmony import */ var _formbricks_lib_utils_validate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(472749);
/* harmony import */ var _formbricks_types_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(552224);
/* harmony import */ var _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(207798);










const getProjectPermissionByUserId = (0,react__WEBPACK_IMPORTED_MODULE_2__.cache)(async (userId, projectId)=>(0,_formbricks_lib_cache__WEBPACK_IMPORTED_MODULE_4__/* .cache */ .P)(async ()=>{
        (0,_formbricks_lib_utils_validate__WEBPACK_IMPORTED_MODULE_5__/* .validateInputs */ .C)([
            userId,
            _formbricks_types_common__WEBPACK_IMPORTED_MODULE_6__/* .ZString */ .eI
        ], [
            projectId,
            _formbricks_types_common__WEBPACK_IMPORTED_MODULE_6__/* .ZString */ .eI
        ]);
        try {
            const projectMemberships = await _formbricks_database__WEBPACK_IMPORTED_MODULE_3__/* .prisma */ .z.projectTeam.findMany({
                where: {
                    projectId,
                    team: {
                        teamUsers: {
                            some: {
                                userId
                            }
                        }
                    }
                }
            });
            if (!projectMemberships) return null;
            let highestPermission = null;
            for (const membership of projectMemberships){
                if (membership.permission === "manage") {
                    highestPermission = "manage";
                } else if (membership.permission === "readWrite" && highestPermission !== "manage") {
                    highestPermission = "readWrite";
                } else if (membership.permission === "read" && highestPermission !== "manage" && highestPermission !== "readWrite") {
                    highestPermission = "read";
                }
            }
            return highestPermission;
        } catch (error) {
            if (error instanceof _prisma_client__WEBPACK_IMPORTED_MODULE_1__.Prisma.PrismaClientKnownRequestError) {
                console.error(error);
                throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_7__/* .DatabaseError */ .a$(error.message);
            }
            throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_7__/* .UnknownError */ .Bk("Error while fetching membership");
        }
    }, [
        `getProjectPermissionByUserId-${userId}-${projectId}`
    ], {
        tags: [
            _lib_cache_team__WEBPACK_IMPORTED_MODULE_0__/* .teamCache */ .g.tag.byUserId(userId),
            _lib_cache_team__WEBPACK_IMPORTED_MODULE_0__/* .teamCache */ .g.tag.byProjectId(projectId)
        ]
    })());
const getTeamRoleByTeamIdUserId = (0,react__WEBPACK_IMPORTED_MODULE_2__.cache)(async (teamId, userId)=>(0,_formbricks_lib_cache__WEBPACK_IMPORTED_MODULE_4__/* .cache */ .P)(async ()=>{
        (0,_formbricks_lib_utils_validate__WEBPACK_IMPORTED_MODULE_5__/* .validateInputs */ .C)([
            teamId,
            _formbricks_types_common__WEBPACK_IMPORTED_MODULE_6__/* .ZId */ .i4
        ], [
            userId,
            _formbricks_types_common__WEBPACK_IMPORTED_MODULE_6__/* .ZId */ .i4
        ]);
        try {
            const teamUser = await _formbricks_database__WEBPACK_IMPORTED_MODULE_3__/* .prisma */ .z.teamUser.findUnique({
                where: {
                    teamId_userId: {
                        teamId,
                        userId
                    }
                }
            });
            if (!teamUser) {
                return null;
            }
            return teamUser.role;
        } catch (error) {
            if (error instanceof _prisma_client__WEBPACK_IMPORTED_MODULE_1__.Prisma.PrismaClientKnownRequestError) {
                throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_7__/* .DatabaseError */ .a$(error.message);
            }
            throw error;
        }
    }, [
        `getTeamMembershipByTeamIdUserId-${teamId}-${userId}`
    ], {
        tags: [
            _lib_cache_team__WEBPACK_IMPORTED_MODULE_0__/* .teamCache */ .g.tag.byId(teamId),
            _formbricks_lib_membership_cache__WEBPACK_IMPORTED_MODULE_8__/* .membershipCache */ .r.tag.byUserId(userId)
        ]
    })());


/***/ }),

/***/ 488734:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ environmentCache)
/* harmony export */ });
/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87863);
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

/***/ 32135:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DL: () => (/* binding */ getEnvironments),
/* harmony export */   aN: () => (/* binding */ getFirstEnvironmentIdByUserId),
/* harmony export */   h8: () => (/* binding */ updateEnvironment),
/* harmony export */   uc: () => (/* binding */ getEnvironment)
/* harmony export */ });
/* unused harmony export createEnvironment */
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(896330);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(922728);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(545198);
/* harmony import */ var _formbricks_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(527610);
/* harmony import */ var _formbricks_types_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(733735);
/* harmony import */ var _formbricks_types_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(65405);
/* harmony import */ var _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(470641);
/* harmony import */ var _cache__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(794356);
/* harmony import */ var _organization_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(353687);
/* harmony import */ var _project_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(529987);
/* harmony import */ var _utils_validate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(860988);
/* harmony import */ var _cache__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(488734);














const getEnvironment = (0,react__WEBPACK_IMPORTED_MODULE_1__.cache)(async (environmentId)=>(0,_cache__WEBPACK_IMPORTED_MODULE_3__/* .cache */ .P)(async ()=>{
        (0,_utils_validate__WEBPACK_IMPORTED_MODULE_4__/* .validateInputs */ .C)([
            environmentId,
            _formbricks_types_common__WEBPACK_IMPORTED_MODULE_5__/* .ZId */ .i4
        ]);
        try {
            const environment = await _formbricks_database__WEBPACK_IMPORTED_MODULE_2__/* .prisma */ .z.environment.findUnique({
                where: {
                    id: environmentId
                }
            });
            return environment;
        } catch (error) {
            if (error instanceof _prisma_client__WEBPACK_IMPORTED_MODULE_0__.Prisma.PrismaClientKnownRequestError) {
                console.error(error);
                throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_6__/* .DatabaseError */ .a$(error.message);
            }
            throw error;
        }
    }, [
        `getEnvironment-${environmentId}`
    ], {
        tags: [
            _cache__WEBPACK_IMPORTED_MODULE_7__/* .environmentCache */ .e.tag.byId(environmentId)
        ]
    })());
const getEnvironments = (0,react__WEBPACK_IMPORTED_MODULE_1__.cache)(async (projectId)=>(0,_cache__WEBPACK_IMPORTED_MODULE_3__/* .cache */ .P)(async ()=>{
        (0,_utils_validate__WEBPACK_IMPORTED_MODULE_4__/* .validateInputs */ .C)([
            projectId,
            _formbricks_types_common__WEBPACK_IMPORTED_MODULE_5__/* .ZId */ .i4
        ]);
        let projectPrisma;
        try {
            projectPrisma = await _formbricks_database__WEBPACK_IMPORTED_MODULE_2__/* .prisma */ .z.project.findFirst({
                where: {
                    id: projectId
                },
                include: {
                    environments: true
                }
            });
            if (!projectPrisma) {
                throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_6__/* .ResourceNotFoundError */ .CE("Project", projectId);
            }
        } catch (error) {
            if (error instanceof _prisma_client__WEBPACK_IMPORTED_MODULE_0__.Prisma.PrismaClientKnownRequestError) {
                throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_6__/* .DatabaseError */ .a$(error.message);
            }
            throw error;
        }
        const environments = [];
        for (let environment of projectPrisma.environments){
            let targetEnvironment = _formbricks_types_environment__WEBPACK_IMPORTED_MODULE_8__/* .ZEnvironment */ .KJ.parse(environment);
            environments.push(targetEnvironment);
        }
        try {
            return environments;
        } catch (error) {
            if (error instanceof zod__WEBPACK_IMPORTED_MODULE_9__.z.ZodError) {
                console.error(JSON.stringify(error.errors, null, 2));
            }
            throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_6__/* .ValidationError */ .yI("Data validation of environments array failed");
        }
    }, [
        `getEnvironments-${projectId}`
    ], {
        tags: [
            _cache__WEBPACK_IMPORTED_MODULE_7__/* .environmentCache */ .e.tag.byProjectId(projectId)
        ]
    })());
const updateEnvironment = async (environmentId, data)=>{
    (0,_utils_validate__WEBPACK_IMPORTED_MODULE_4__/* .validateInputs */ .C)([
        environmentId,
        _formbricks_types_common__WEBPACK_IMPORTED_MODULE_5__/* .ZId */ .i4
    ], [
        data,
        _formbricks_types_environment__WEBPACK_IMPORTED_MODULE_8__/* .ZEnvironmentUpdateInput */ .fz.partial()
    ]);
    const newData = {
        ...data,
        updatedAt: new Date()
    };
    let updatedEnvironment;
    try {
        updatedEnvironment = await _formbricks_database__WEBPACK_IMPORTED_MODULE_2__/* .prisma */ .z.environment.update({
            where: {
                id: environmentId
            },
            data: newData
        });
        _cache__WEBPACK_IMPORTED_MODULE_7__/* .environmentCache */ .e.revalidate({
            id: environmentId,
            projectId: updatedEnvironment.projectId
        });
        return updatedEnvironment;
    } catch (error) {
        if (error instanceof _prisma_client__WEBPACK_IMPORTED_MODULE_0__.Prisma.PrismaClientKnownRequestError) {
            throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_6__/* .DatabaseError */ .a$(error.message);
        }
        throw error;
    }
};
const getFirstEnvironmentIdByUserId = async (userId)=>{
    try {
        const organizations = await (0,_organization_service__WEBPACK_IMPORTED_MODULE_10__/* .getOrganizationsByUserId */ .s8)(userId);
        if (organizations.length === 0) {
            return null;
        }
        const firstOrganization = organizations[0];
        const projects = await (0,_project_service__WEBPACK_IMPORTED_MODULE_11__/* .getUserProjects */ ._P)(userId, firstOrganization.id);
        if (projects.length === 0) {
            return null;
        }
        const firstProject = projects[0];
        const productionEnvironment = firstProject.environments.find((environment)=>environment.type === "production");
        if (!productionEnvironment) {
            return null;
        }
        return productionEnvironment.id;
    } catch (error) {
        throw error;
    }
};
const createEnvironment = async (projectId, environmentInput)=>{
    validateInputs([
        projectId,
        ZId
    ], [
        environmentInput,
        ZEnvironmentCreateInput
    ]);
    try {
        const environment = await prisma.environment.create({
            data: {
                type: environmentInput.type || "development",
                project: {
                    connect: {
                        id: projectId
                    }
                },
                appSetupCompleted: environmentInput.appSetupCompleted || false,
                actionClasses: {
                    create: [
                        {
                            name: "New Session",
                            description: "Gets fired when a new session is created",
                            type: "automatic"
                        }
                    ]
                },
                attributeKeys: {
                    create: [
                        {
                            key: "userId",
                            name: "User Id",
                            description: "The user id of a contact",
                            type: "default",
                            isUnique: true
                        },
                        {
                            key: "email",
                            name: "Email",
                            description: "The email of a contact",
                            type: "default",
                            isUnique: true
                        },
                        {
                            key: "firstName",
                            name: "First Name",
                            description: "Your contact's first name",
                            type: "default"
                        },
                        {
                            key: "lastName",
                            name: "Last Name",
                            description: "Your contact's last name",
                            type: "default"
                        }
                    ]
                }
            }
        });
        environmentCache.revalidate({
            id: environment.id,
            projectId: environment.projectId
        });
        await capturePosthogEnvironmentEvent(environment.id, "environment created", {
            environmentType: environment.type
        });
        return environment;
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            throw new DatabaseError(error.message);
        }
        throw error;
    }
};


/***/ }),

/***/ 895856:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: () => (/* binding */ getMembershipRole),
/* harmony export */   U: () => (/* binding */ getMembershipByUserIdOrganizationIdAction)
/* harmony export */ });
/* harmony import */ var private_next_rsc_server_reference__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(286055);
/* harmony import */ var private_next_rsc_action_encryption__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(770767);
/* harmony import */ var private_next_rsc_action_encryption__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(private_next_rsc_action_encryption__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(207798);
/* harmony import */ var _organization_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(167440);
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(575361);
/* harmony import */ var private_next_rsc_action_validate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(429931);
/* __next_internal_action_entry_do_not_use__ {"7f7e22b5cdd09e77d8f7cd2b1aa54674e257258f9f":"getMembershipRole","7fb1462c71ceac762f633a204a6fc049ffbeab8261":"getMembershipByUserIdOrganizationIdAction"} */ 





const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getMembershipByUserIdOrganizationIdAction = async (environmentId, userId)=>{
    const organization = await (0,_organization_service__WEBPACK_IMPORTED_MODULE_2__/* .getOrganizationByEnvironmentId */ .TK)(environmentId);
    if (!organization) {
        throw new Error("Organization not found");
    }
    const currentUserMembership = await getMembershipRole(userId, organization.id);
    return currentUserMembership;
};
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getMembershipRole = async (userId, organizationId)=>{
    const membership = await (0,_service__WEBPACK_IMPORTED_MODULE_3__/* .getMembershipByUserIdOrganizationId */ .Y)(userId, organizationId);
    if (!membership) {
        throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_4__/* .AuthorizationError */ .yi("Not authorized");
    }
    return membership.role;
};

(0,private_next_rsc_action_validate__WEBPACK_IMPORTED_MODULE_5__/* .ensureServerEntryExports */ .D)([
    getMembershipByUserIdOrganizationIdAction,
    getMembershipRole
]);
(0,private_next_rsc_server_reference__WEBPACK_IMPORTED_MODULE_0__/* .registerServerReference */ .A)(getMembershipByUserIdOrganizationIdAction, "7fb1462c71ceac762f633a204a6fc049ffbeab8261", null);
(0,private_next_rsc_server_reference__WEBPACK_IMPORTED_MODULE_0__/* .registerServerReference */ .A)(getMembershipRole, "7f7e22b5cdd09e77d8f7cd2b1aa54674e257258f9f", null);


/***/ })

};
;